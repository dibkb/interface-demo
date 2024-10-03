import ButtonInfo from "@/components/dashboard/ButtonInfo";
import { ReimbursementsFull } from "@/components/dashboard/graphs/ReimbursementsFull";

function AmazonDashboard() {
  return (
    <main className="border rounded-md p-4 h-full overflow-scroll">
      <div className="flex justify-between gap-4">
        <ButtonInfo title={"Total Reimbursements"} amount={"₹11,34,234.82"} />
        <ButtonInfo title={"Cases Raised"} amount={"37,817"} />
      </div>
      <section className="mt-4 grid grid-cols-12">
        <main className="col-span-12">
          <ReimbursementsFull />
        </main>
      </section>
    </main>
  );
}
export default AmazonDashboard;
