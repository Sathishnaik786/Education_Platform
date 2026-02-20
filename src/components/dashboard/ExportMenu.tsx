import { FileDown, Printer, Table } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const ExportMenu = () => {
    const handlePDF = () => window.print();

    const handleCSV = () => {
        const csv = [
            "Metric,Value,Change",
            "Total Schools,148920,+3.2%",
            "Students,345M,+5.1%",
            "Scholarships,1820K,+12.4%",
            "Budget Utilization,87%,-2.1%",
            "Literacy Rate,89%,+2.3%",
            "Dropout Risk,8%,-15%",
        ].join("\n");

        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "edugov-dashboard-export.csv";
        a.click();
        URL.revokeObjectURL(url);
    };

    const handlePrint = () => window.print();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="glass-card border-glass-border hover:border-primary/30 transition-all glow-hover"
                >
                    <FileDown className="w-4 h-4" />
                    <span className="sr-only">Export</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass-card border-glass-border">
                <DropdownMenuItem onClick={handlePDF} className="gap-2 cursor-pointer text-text-primary">
                    <FileDown className="w-4 h-4" /> Export as PDF
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleCSV} className="gap-2 cursor-pointer text-text-primary">
                    <Table className="w-4 h-4" /> Export as CSV
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handlePrint} className="gap-2 cursor-pointer text-text-primary">
                    <Printer className="w-4 h-4" /> Print View
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ExportMenu;
