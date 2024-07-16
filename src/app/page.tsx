//import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
//import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/Theme-Toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
//import { TeamArea } from "../components/team/TeamArea";

const Page = () => {
    return (
        <div className="mx-auto w-full max-w-2xl min-h-screen">
            <ThemeToggle/>
            
            <Card className="mt-10">
                <CardHeader>
                    <CardTitle>Faça o Login</CardTitle>
                    <CardDescription>digite os dados do login.</CardDescription>
                </CardHeader>
                <CardContent>...</CardContent>
            </Card>
        </div>
  );
}

export default Page;

/*
    <Alert>
        <ThemeToggle/>
            <AlertTitle>Erro!</AlertTitle>
        <TeamArea/>
    </Alert>
*/