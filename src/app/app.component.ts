import { Component, OnInit } from '@angular/core';

export interface InsuranceClaim {
  claimId: string;
  policyNumber: string;
  insured: string;
  type: string;
  amount: string;
  status: 'Approved' | 'Under Review' | 'Pending Info' | 'Denied';
  date: string;
}

export interface WafTestComponentStatus {
  tag: string;
  name: string;
  category: string;
  status: 'Loaded' | 'Pending' | 'Verified';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FLUID Components Dashboard';

  // Navigation & Theme
  activeTab = 0;
  currentTheme: 'corp' | 'lm' = 'corp';
  searchQuery = '';
  wafAlertVisible = true;

  // Header & Context
  headerLogo = { title: 'FLUID Components', href: '#' };
  headerLinks = [
    { label: 'Operations Dashboard', href: '#', active: true },
    { label: 'Claims Center', href: '#' },
    { label: 'Policy Quotes', href: '#' },
    { label: 'WAF Health & Verification', href: '#' }
  ];
  breadcrumbTrail = [
    { label: 'FLUID Enterprise', url: '#' },
    { label: 'Commercial & Personal Lines', url: '#' },
    { label: 'WAF Deployment Test Dashboard', url: '#' }
  ];

  // Dashboard Overview Metrics
  totalPoliciesCount = 142850;
  openClaimsCount = 384;
  monthlyLossRatio = '62.4%';
  csatScore = 4.8;
  wafPassRate = 100;

  // Charts
  claimsBarChartData = [45, 68, 82, 54, 95, 110, 78];
  claimsBarChartLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  policyPieChartData = [45, 30, 15, 10];
  policyPieChartLabels = ['Auto Insurance', 'Homeowners', 'Commercial Property', 'Workers Comp'];

  // Table Data
  tableHeaders = [
    { key: 'claimId', label: 'Claim ID' },
    { key: 'policyNumber', label: 'Policy #' },
    { key: 'insured', label: 'Insured Name' },
    { key: 'type', label: 'Policy Type' },
    { key: 'amount', label: 'Claim Amount' },
    { key: 'status', label: 'Status' },
    { key: 'date', label: 'Filing Date' }
  ];

  claimsData: InsuranceClaim[] = [
    { claimId: 'CLM-2026-8801', policyNumber: 'POL-MA-99214', insured: 'Acme Logistics Corp', type: 'Commercial Auto', amount: '$14,500.00', status: 'Approved', date: '2026-08-01' },
    { claimId: 'CLM-2026-8802', policyNumber: 'POL-NY-33412', insured: 'Sarah Jenkins', type: 'Homeowners', amount: '$4,250.00', status: 'Under Review', date: '2026-08-03' },
    { claimId: 'CLM-2026-8803', policyNumber: 'POL-TX-77189', insured: 'Apex Manufacturing LLC', type: 'Workers Comp', amount: '$28,900.00', status: 'Pending Info', date: '2026-08-04' },
    { claimId: 'CLM-2026-8804', policyNumber: 'POL-CA-11509', insured: 'Michael Chang', type: 'Personal Auto', amount: '$1,850.00', status: 'Approved', date: '2026-08-05' },
    { claimId: 'CLM-2026-8805', policyNumber: 'POL-FL-55420', insured: 'Oceanview Resort Inc', type: 'Commercial Property', amount: '$75,000.00', status: 'Under Review', date: '2026-08-06' },
    { claimId: 'CLM-2026-8806', policyNumber: 'POL-IL-88231', insured: 'David Miller', type: 'Homeowners', amount: '$9,100.00', status: 'Denied', date: '2026-08-07' }
  ];

  filteredClaims: InsuranceClaim[] = [];

  // Form Controls & Stepper (New Policy Quote Wizard)
  quoteStep = 1;
  applicantName = '';
  applicantEmail = '';
  applicantState = 'MA';
  selectedPolicyType = 'auto';
  coverageLimit = '$500,000 Liability';
  includeUmbrella = true;
  includeRoadside = false;
  paymentFrequency = 'monthly';
  effectiveDate = '2026-09-01';

  policyTypeOptions = [
    { label: 'Personal Auto Insurance', value: 'auto' },
    { label: 'Homeowners & Renters', value: 'home' },
    { label: 'Commercial General Liability', value: 'cgl' },
    { label: 'Workers Compensation', value: 'wc' }
  ];

  stateOptions = [
    { label: 'Massachusetts (MA)', value: 'MA' },
    { label: 'New York (NY)', value: 'NY' },
    { label: 'Texas (TX)', value: 'TX' },
    { label: 'California (CA)', value: 'CA' },
    { label: 'Florida (FL)', value: 'FL' }
  ];

  paymentFrequencyOptions = [
    { label: 'Monthly Automatic EFT', value: 'monthly' },
    { label: 'Quarterly Billing', value: 'quarterly' },
    { label: 'Annual Paid-in-Full (5% Discount)', value: 'annual' }
  ];

  // Modals & Overlays
  isClaimModalOpen = false;
  isConfirmationOpen = false;
  isCsatModalOpen = false;
  selectedClaim: InsuranceClaim | null = null;
  actionMessage = '';

  // WAF Component Audit / Verification Checklist
  wafComponentsList: WafTestComponentStatus[] = [
    { tag: 'fluid-header', name: 'Header Container', category: 'Layout', status: 'Verified' },
    { tag: 'fluid-header-actions', name: 'Header Actions', category: 'Layout', status: 'Verified' },
    { tag: 'fluid-page-context-bar', name: 'Context Bar', category: 'Layout', status: 'Verified' },
    { tag: 'fluid-breadcrumb', name: 'Breadcrumb Navigation', category: 'Navigation', status: 'Verified' },
    { tag: 'fluid-sidebar', name: 'Sidebar', category: 'Layout', status: 'Verified' },
    { tag: 'fluid-card', name: 'Content Card', category: 'Containers', status: 'Verified' },
    { tag: 'fluid-container', name: 'Flex Container', category: 'Containers', status: 'Verified' },
    { tag: 'fluid-grid', name: 'Layout Grid System', category: 'Containers', status: 'Verified' },
    { tag: 'fluid-grid-item', name: 'Grid Cell Item', category: 'Containers', status: 'Verified' },
    { tag: 'fluid-alert', name: 'Alert Notice', category: 'Messaging', status: 'Verified' },
    { tag: 'fluid-badge', name: 'Status Badge', category: 'Data Display', status: 'Verified' },
    { tag: 'fluid-button', name: 'Action Button', category: 'Controls', status: 'Verified' },
    { tag: 'fluid-button-group', name: 'Button Cluster', category: 'Controls', status: 'Verified' },
    { tag: 'fluid-dropdown-button', name: 'Dropdown Trigger', category: 'Controls', status: 'Verified' },
    { tag: 'fluid-sticky-button', name: 'Sticky Action', category: 'Controls', status: 'Verified' },
    { tag: 'fluid-bar-chart', name: 'Bar Chart Analytics', category: 'Visualization', status: 'Verified' },
    { tag: 'fluid-line-chart', name: 'Line Chart Analytics', category: 'Visualization', status: 'Verified' },
    { tag: 'fluid-pie-chart', name: 'Pie Chart Analytics', category: 'Visualization', status: 'Verified' },
    { tag: 'fluid-stackedbar-horizontal', name: 'Horizontal Stacked Bar', category: 'Visualization', status: 'Verified' },
    { tag: 'fluid-table', name: 'Data Grid Table', category: 'Data Display', status: 'Verified' },
    { tag: 'fluid-paginator', name: 'Table Paginator', category: 'Data Display', status: 'Verified' },
    { tag: 'fluid-accordion', name: 'Collapsible Accordion', category: 'Containers', status: 'Verified' },
    { tag: 'fluid-accordion-panel', name: 'Accordion Panel', category: 'Containers', status: 'Verified' },
    { tag: 'fluid-tabs', name: 'Tab Navigation', category: 'Navigation', status: 'Verified' },
    { tag: 'fluid-tab', name: 'Tab View Panel', category: 'Navigation', status: 'Verified' },
    { tag: 'fluid-search-box', name: 'Search Input', category: 'Form Inputs', status: 'Verified' },
    { tag: 'fluid-input-field', name: 'Text Input Field', category: 'Form Inputs', status: 'Verified' },
    { tag: 'fluid-select', name: 'Select Dropdown', category: 'Form Inputs', status: 'Verified' },
    { tag: 'fluid-datepicker', name: 'Date Selector', category: 'Form Inputs', status: 'Verified' },
    { tag: 'fluid-toggle', name: 'Switch Toggle', category: 'Form Inputs', status: 'Verified' },
    { tag: 'fluid-radio-group', name: 'Radio Option Group', category: 'Form Inputs', status: 'Verified' },
    { tag: 'fluid-currency-field', name: 'Currency Input', category: 'Form Inputs', status: 'Verified' },
    { tag: 'fluid-stepper', name: 'Progress Stepper', category: 'Navigation', status: 'Verified' },
    { tag: 'fluid-step', name: 'Step Indicator', category: 'Navigation', status: 'Verified' },
    { tag: 'fluid-modal', name: 'Modal Dialog Overlay', category: 'Overlays', status: 'Verified' },
    { tag: 'fluid-confirmation-dialog', name: 'Confirmation Overlay', category: 'Overlays', status: 'Verified' },
    { tag: 'fluid-csat', name: 'CSAT Rating Survey', category: 'Feedback', status: 'Verified' },
    { tag: 'fluid-rating', name: 'Star Rating Input', category: 'Feedback', status: 'Verified' },
    { tag: 'fluid-loading-spinner', name: 'Loading Spinner', category: 'Feedback', status: 'Verified' },
    { tag: 'fluid-linear-progress', name: 'Progress Bar', category: 'Feedback', status: 'Verified' },
    { tag: 'fluid-empty-state-container', name: 'Empty State Container', category: 'Containers', status: 'Verified' },
    { tag: 'fluid-code-block', name: 'Code Snippet Block', category: 'Data Display', status: 'Verified' },
    { tag: 'fluid-faq', name: 'FAQ Question Accordion', category: 'Containers', status: 'Verified' },
    { tag: 'fluid-footer', name: 'Footer Bar', category: 'Layout', status: 'Verified' },
    { tag: 'fluid-footer-content', name: 'Footer Content', category: 'Layout', status: 'Verified' },
    { tag: 'fluid-footer-actions', name: 'Footer Actions', category: 'Layout', status: 'Verified' }
  ];

  ngOnInit(): void {
    this.filteredClaims = [...this.claimsData];
  }

  onSearchChange(event: any): void {
    const query = (event.target?.value || event.detail?.searchTerm || this.searchQuery || '').toLowerCase();
    this.searchQuery = query;
    if (!query) {
      this.filteredClaims = [...this.claimsData];
    } else {
      this.filteredClaims = this.claimsData.filter(c =>
        c.claimId.toLowerCase().includes(query) ||
        c.insured.toLowerCase().includes(query) ||
        c.policyNumber.toLowerCase().includes(query) ||
        c.type.toLowerCase().includes(query) ||
        c.status.toLowerCase().includes(query)
      );
    }
  }

  setTab(index: number): void {
    this.activeTab = index;
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'corp' ? 'lm' : 'corp';
  }

  openClaimModal(claim: InsuranceClaim): void {
    this.selectedClaim = claim;
    this.isClaimModalOpen = true;
  }

  closeClaimModal(): void {
    this.isClaimModalOpen = false;
    this.selectedClaim = null;
  }

  approveClaim(): void {
    if (this.selectedClaim) {
      this.selectedClaim.status = 'Approved';
      this.actionMessage = `Claim ${this.selectedClaim.claimId} has been successfully approved!`;
      this.closeClaimModal();
    }
  }

  openConfirmDialog(): void {
    this.isConfirmationOpen = true;
  }

  closeConfirmDialog(): void {
    this.isConfirmationOpen = false;
  }

  confirmAction(): void {
    this.actionMessage = 'High-value policy endorsement confirmed successfully!';
    this.isConfirmationOpen = false;
  }

  openCsat(): void {
    this.isCsatModalOpen = true;
  }

  closeCsat(): void {
    this.isCsatModalOpen = false;
  }

  nextQuoteStep(): void {
    if (this.quoteStep < 3) {
      this.quoteStep++;
    }
  }

  prevQuoteStep(): void {
    if (this.quoteStep > 1) {
      this.quoteStep--;
    }
  }

  submitQuote(): void {
    this.actionMessage = `Quote request for ${this.applicantName || 'Valued Customer'} (${this.selectedPolicyType.toUpperCase()}) submitted!`;
    this.quoteStep = 1;
  }

  dismissAlert(): void {
    this.wafAlertVisible = false;
  }
}
