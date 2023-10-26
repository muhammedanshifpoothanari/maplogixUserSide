import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Knob from "./knob"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { ScrollBar } from "@/components/ui/scroll-area"

const Page = () => {
    return (
        <div className="pb-12 hidden lg:block">
                  <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Filter
          </h2>
   
             <Knob />

          <Input className="mb-2 mx-4 w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%]"></Input>
         
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Filter
          </h2>
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Filter
          </h2>
        </div>
        </div>
        </div>
    )
}
export default Page