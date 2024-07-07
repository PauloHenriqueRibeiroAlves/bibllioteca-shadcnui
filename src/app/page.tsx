import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const Page = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="max-w-2xl mx-auto">
                <Alert>
                    <AlertTitle>Erro!</AlertTitle>
                    <AlertDescription>Sua senha deu prolma!</AlertDescription>
                </Alert>
            </div>
        </div>
  );
}

export default Page;