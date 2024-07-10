import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/Theme-Toggle";
import { TeamArea } from "../components/team/TeamArea";

const Page = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="max-w-2xl mx-auto">
                <Alert>
                    <ThemeToggle/>
                    <AlertTitle>Erro!</AlertTitle>
                    <TeamArea/>
                </Alert>
            </div>
        </div>
  );
}

export default Page;