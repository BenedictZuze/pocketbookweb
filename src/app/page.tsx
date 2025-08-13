import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Database,
  Play,
  Hash,
  Monitor,
  Activity,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <Badge
              variant="secondary"
              className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200"
            >
              Open Source • Tauri App
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Pocket<span className="text-blue-600">book</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              A desktop manager for your PocketBase instances
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Why Pocketbook?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Managing multiple PocketBase instances can be complex and
            time-consuming. Pocketbook simplifies this process by providing a
            unified desktop interface to create, manage, and monitor all your
            PocketBase instances from one place.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Built with Tauri for maximum performance and cross-platform
            compatibility, Pocketbook brings the power of modern desktop
            applications to PocketBase management.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to manage your PocketBase instances efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-blue-100 hover:border-blue-200 transition-colors duration-300 hover:shadow-lg">
            <CardHeader>
              <Database className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle className="text-xl">
                Sidecar-embedded PocketBase
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Built-in PocketBase integration that runs alongside your
                application for seamless management.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-blue-100 hover:border-blue-200 transition-colors duration-300 hover:shadow-lg">
            <CardHeader>
              <Play className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle className="text-xl">Start/Stop Instances</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Easily control your PocketBase instances with simple start and
                stop commands from the GUI.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-blue-100 hover:border-blue-200 transition-colors duration-300 hover:shadow-lg">
            <CardHeader>
              <Hash className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle className="text-xl">Auto Port Assignment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Automatic port management prevents conflicts and ensures smooth
                operation of multiple instances.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-blue-100 hover:border-blue-200 transition-colors duration-300 hover:shadow-lg">
            <CardHeader>
              <Monitor className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle className="text-xl">GUI Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Intuitive graphical interface for managing all aspects of your
                PocketBase instances.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-blue-100 hover:border-blue-200 transition-colors duration-300 hover:shadow-lg">
            <CardHeader>
              <Activity className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle className="text-xl">Health Checks</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Real-time monitoring and health checks to ensure your instances
                are running optimally.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-blue-100 hover:border-blue-200 transition-colors duration-300 hover:shadow-lg">
            <CardHeader>
              <Users className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle className="text-xl">
                Master Instance Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Uses a master PocketBase instance to coordinate and manage all
                other instances efficiently.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            App Screenshots
          </h2>
          <p className="text-lg text-gray-600">
            Take a look at Pocketbook's clean and intuitive interface
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="space-y-4">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl border-2 border-blue-200 flex items-center justify-center">
              <img
                src="/pocketbase-dashboard.png"
                alt="Dashboard view showing multiple PocketBase instances"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Dashboard
            </h3>
            <p className="text-gray-600 text-center">
              Overview of all your PocketBase instances
            </p>
          </div>

          <div className="space-y-4">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl border-2 border-blue-200 flex items-center justify-center">
              <img
                src="/project-details-config.png"
                alt="Project details page with configuration options"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Project Details
            </h3>
            <p className="text-gray-600 text-center">
              Detailed configuration and management
            </p>
          </div>

          <div className="space-y-4">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl border-2 border-blue-200 flex items-center justify-center">
              <Image
                src="/real-time-logs-dashboard.png"
                alt="Logs view showing real-time monitoring data"
                className="w-full h-full object-cover rounded-lg"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Logs View
            </h3>
            <p className="text-gray-600 text-center">
              Real-time logs and monitoring
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Pocketbook is open source and welcomes contributions from the
            community. Join us in making PocketBase management easier for
            everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl"
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
            <p className="text-blue-200">PRs welcome • MIT License</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            Built with ❤️ using Tauri • Open Source • Community Driven
          </p>
        </div>
      </footer>
    </div>
  );
}
