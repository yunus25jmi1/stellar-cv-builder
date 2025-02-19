
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface ResumeFormProps {
  data: any;
  onUpdate: (data: any) => void;
}

const ResumeForm = ({ data, onUpdate }: ResumeFormProps) => {
  const handleChange = (section: string, field: string, value: string) => {
    onUpdate({
      ...data,
      [section]: {
        ...data[section],
        [field]: value,
      },
    });
  };

  return (
    <div className="space-y-6">
      <Card className="glass-card p-6">
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={data.personalInfo.name}
              onChange={(e) =>
                handleChange("personalInfo", "name", e.target.value)
              }
              placeholder="John Doe"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={data.personalInfo.email}
              onChange={(e) =>
                handleChange("personalInfo", "email", e.target.value)
              }
              placeholder="john@example.com"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={data.personalInfo.phone}
              onChange={(e) =>
                handleChange("personalInfo", "phone", e.target.value)
              }
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={data.personalInfo.location}
              onChange={(e) =>
                handleChange("personalInfo", "location", e.target.value)
              }
              placeholder="New York, NY"
            />
          </div>
        </div>
      </Card>

      <Card className="glass-card p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Professional Summary</h2>
          <Button variant="secondary" size="sm">
            <Sparkles className="mr-2 h-4 w-4" />
            Enhance with AI
          </Button>
        </div>
        <Textarea
          value={data.summary}
          onChange={(e) => handleChange("summary", "", e.target.value)}
          placeholder="Write a professional summary..."
          className="min-h-[150px]"
        />
      </Card>
    </div>
  );
};

export default ResumeForm;
