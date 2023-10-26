import { Card } from "@/components/ui/card"
import CardValue from "./cardValue";

/**
 * Renders a styled JSX element wrapped in a Card component.
 * @returns {JSX.Element} The rendered JSX element.
 */
const Page = (): JSX.Element => {
  return (
    <div className="col-start-4 col-end-12 border-l border-t">
    <Card className="mx-10 my-10 h-[80%] border-t px-10 py-10">
        <CardValue />
    </Card>
    </div>
  );
};
export default Page;