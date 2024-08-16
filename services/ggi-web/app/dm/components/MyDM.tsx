import { IDmProps } from "@/models/dm/DM";
import List from "./list/List";

export default function MyDm({
  tabs
}: IDmProps) {

  return (
    <>
    <List tabs={tabs} />
    </>
  )
}
