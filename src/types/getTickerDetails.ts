export interface IGetTickerDetails {
  request_id: string;
  results: IDetailResults;
  status: string;
}

export interface IDetailResults {
  active: boolean;
  address: IAddress;
  branding: IBranding;
  cik: string;
  composite_figi: string;
  currency_name: string;
  description: string;
  homepage_url: string;
  list_date: string;
  locale: string;
  market: string;
  market_cap: number;
  name: string;
  phone_number: string;
  primary_exchange: string;
  round_lot: number;
  share_class_figi: string;
  share_class_shares_outstanding: number;
  sic_code: string;
  sic_description: string;
  ticker: string;
  ticker_root: string;
  total_employees: number;
  type: string;
  weighted_shares_outstanding: number;
}

export interface IAddress {
  address1: string;
  city: string;
  postal_code: string;
  state: string;
}

export interface IBranding {
  icon_url: string;
  logo_url: string;
}
