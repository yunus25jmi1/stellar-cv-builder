
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface ResumePreviewProps {
  data: any;
}

const ResumePreview = ({ data }: ResumePreviewProps) => {
  return (
    <Card className="glass-card" style={{ width: '210mm', minHeight: '297mm', margin: '0 auto' }}>
      <div className="p-8">
        {/* Personal Info */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">{data.personalInfo.name || "Your Name"}</h1>
          <div className="text-muted-foreground flex items-center justify-center gap-4">
            {data.personalInfo.email && <p>{data.personalInfo.email}</p>}
            {data.personalInfo.phone && (
              <>
                <span className="text-muted-foreground/50">•</span>
                <p>{data.personalInfo.phone}</p>
              </>
            )}
            {data.personalInfo.location && (
              <>
                <span className="text-muted-foreground/50">•</span>
                <p>{data.personalInfo.location}</p>
              </>
            )}
          </div>
        </div>

        {/* Summary */}
        {data.summary && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Professional Summary</h2>
            <p className="text-muted-foreground">{data.summary}</p>
          </div>
        )}

        {/* Placeholder for empty state */}
        {!data.summary && !data.personalInfo.name && (
          <div className="text-center text-muted-foreground">
            <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Your resume preview will appear here</p>
            <p className="text-sm">Start by filling out the form on the left</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ResumePreview;
