import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgCircleProgressModule } from "ng-circle-progress";
import { BudgetService } from "../../../../services/budget.service";
import { Budget } from "../../../../models/budget";
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-show-budget',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NgCircleProgressModule,
    RouterOutlet,
  ],
  templateUrl: './show-budget.component.html',
  styleUrls: ['./show-budget.component.scss']
})
export class ShowBudgetComponent implements OnInit {
  showtable: boolean = true;
  public chart: Chart | undefined;
  budget: Budget | null = null;
  pieChartData: any[] = [];
  forecast: number | null = null;
  progress: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private budgetService: BudgetService
  ) {}

  ngOnInit(): void {
    const budgetId = this.route.snapshot.paramMap.get('id');
    if (budgetId) {
      const idNumber = parseInt(budgetId, 10); // Convert string to number
      if (isNaN(idNumber)) {
        console.error('Invalid budget ID:', budgetId);
        return; // Exit if conversion fails
      }
      this.loadBudget(idNumber);
      this.loadForecast(idNumber);
    } else {
      console.error('Budget ID not found in route parameters');
    }
  }

  /** Loads budget data from the service */
  loadBudget(id: number): void {
    this.budgetService.getbudgetById(id).subscribe({
      next: (data) => {
        this.budget = data;
        this.calculateProgress();
        if (this.forecast !== null) {
          this.loadChart();
        }
      },
      error: (error) => {
        console.error('Error fetching budget:', error);
        this.budget = null;
      }
    });
  }

  /** Loads forecast data from the service */
  loadForecast(id: number): void {
    this.budgetService.fetchForecast(id).subscribe({
      next: (data) => {
        this.forecast = data.forecast;
        if (this.budget) {
          this.loadChart();
        }
      },
      error: (error) => {
        console.error('Error fetching forecast:', error);
        this.forecast = null;
      }
    });
  }

  /** Calculates the progress percentage based on budget data */
  calculateProgress(): void {
    if (this.budget) {
      const spent = this.budget.spentAmount;
      const allocated = this.budget.allocatedAmount;
      this.progress = allocated > 0 ? (spent / allocated) * 100 : 0;
    }
  }

  /** Loads the chart with budget and forecast data */
  loadChart(): void {
    if (!this.budget || this.forecast === null) {
      console.warn('Cannot load chart: budget or forecast data is missing');
      return;
    }

    const spent = this.budget.spentAmount;
    const remaining = this.budget.allocatedAmount - spent;
    const ctx = document.getElementById('budgetChart') as HTMLCanvasElement;

    if (!ctx) {
      console.error('Canvas element "budgetChart" not found in the template');
      return;
    }

    const chartData = {
      labels: ['Allocated', 'Spent', 'Remaining', 'Forecast'],
      datasets: [{
        label: 'Budget Overview',
        data: [this.budget.allocatedAmount, spent, remaining, this.forecast],
        backgroundColor: ['#007bff', '#dc3545', '#28a745', '#ffc107'],
        borderColor: ['#007bff', '#dc3545', '#28a745', '#ffc107'],
        borderWidth: 1
      }]
    };

    // Destroy existing chart if it exists to prevent overlap
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: `Amount (${this.budget.currency})` }
          }
        },
        plugins: {
          legend: { display: true },
          title: { display: true, text: 'Budget Summary with Forecast' }
        }
      }
    });
  }

  /** Returns CSS class based on budget status */
  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'approved': return 'badge bg-success';
      case 'pending': return 'badge bg-warning';
      case 'rejected': return 'badge bg-danger';
      default: return 'badge bg-secondary';
    }
  }

  /** Navigates back to the budget list */
  goBack(): void {
    this.router.navigate(['/financial/budget']);
  }
}
