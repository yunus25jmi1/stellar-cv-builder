
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, FileText, Sparkles, Download } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-5xl w-full space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6 fade-in">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Create Your Perfect Resume
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Craft a professional resume in minutes with our AI-powered builder.
            Modern templates and expert suggestions at your fingertips.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Templates
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-6 slide-up">
          <Card className="glass-card p-6 space-y-4">
            <FileText className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold">Modern Templates</h3>
            <p className="text-muted-foreground">
              Choose from our collection of professionally designed templates.
            </p>
          </Card>

          <Card className="glass-card p-6 space-y-4">
            <Sparkles className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold">AI Enhancement</h3>
            <p className="text-muted-foreground">
              Get intelligent suggestions to improve your resume content.
            </p>
          </Card>

          <Card className="glass-card p-6 space-y-4">
            <Download className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold">Easy Export</h3>
            <p className="text-muted-foreground">
              Download your resume in multiple formats with one click.
            </p>
          </Card>
        </section>

        {/* Preview Section */}
        <section className="relative slide-up">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
          <Card className="glass-card overflow-hidden">
            <img
              src="https://placehold.co/1200x600/png"
              alt="Resume Preview"
              className="w-full h-auto object-cover"
            />
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
