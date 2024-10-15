export interface RemovalOrder {
  code: string; // "ROR-QM"
  company_id: number; // 1
  id: number; // 1
  order_cancelled_quantity: number; // 0
  order_disposed_quantity: number; // 0
  order_disposition: string; // "Unsellable"
  order_id: string; // "240706VHN"
  order_in_process_quantity: number; // 0
  order_removal_fee: number; // 35.4
  order_request_date: string; // "2024-07-06T05:50:19" (ISO date string)
  order_requested_quantity: number; // 3
  order_shipped_quantity: number; // 3
  order_status: string; // "Completed"
  shipment_date: string | null; // null
  shipment_request_date: string | null; // null
  shipment_shipped_quantity: number; // 0
  sku: string; // "LMB12"
  status: string; // "Discrepancy"
  tracking_number: string | null; // null
}
