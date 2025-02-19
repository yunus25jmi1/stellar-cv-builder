
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import { Download, FileText } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Builder = () => {
  const { toast } = useToast();
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      location: "",
    },
    summary: "",
    experience: [],
    education: [],
    skills: [],
  });

  const handleUpdateResume = (newData: any) => {
    setResumeData(newData);
  };

  const handleExport = () => {
    toast({
      title: "Coming Soon",
      description: "PDF export functionality will be available soon!",
    });
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Resume Builder</h1>
            <p className="text-muted-foreground">Create your professional resume</p>
          </div>
          <Button onClick={handleExport}>
            <Download className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
        </header>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ResumeForm data={resumeData} onUpdate={handleUpdateResume} />
          </div>
          <div className="lg:sticky lg:top-8 space-y-6">
            <ResumePreview data={resumeData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
