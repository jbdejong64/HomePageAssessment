export interface OrderHistoryTableItem {
    orderNumber: number;
    created: Date;
    totalWorkAmount: number;
    product: string;
    status: string;
}

export interface PendingOrderCardItem {
    name: string;
    value: number;
    ageOfOrder: string;
}

export interface HomePageOverview {
    projects: number;
    revenue: number;
    percentVariance: number;
}

export interface CheckboxCardItem {
    name: string;
    selected: boolean;
}

export interface AccountInfo {
    name: string;
    email: string;
}