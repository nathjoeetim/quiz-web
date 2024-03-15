import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { LuFileSpreadsheet } from "react-icons/lu";
import { Button } from "@/components/ui/button";

export function RulesDialogComponent() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          {" "}
          <LuFileSpreadsheet
            size={20}
            color="yellow"
            className="cursor-pointer"
          />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="opacity-1 bg-slate-50">
        <AlertDialogHeader>
          <AlertDialogTitle>Genenral Rules</AlertDialogTitle>
          <AlertDialogDescription className="gap-6  flex flex-col">
            <em className="font-semibold text-justify">
              Any answer made cannot be undone as it will be authomatically
              recorderd for you
            </em>
            <ul className="flex flex-col gap-2">
              <li className="list-disc">
                Ensure to answer the question within the time made avalable by
                the system.
              </li>
              <li className="list-disc">
                Ensure to answer the question within the time made avalable by
                the system.
              </li>
            </ul>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* <AlertDialogCancel></AlertDialogCancel> */}
          <AlertDialogAction>
            <Button className="text-gold bg-yellow-600">Continue</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
