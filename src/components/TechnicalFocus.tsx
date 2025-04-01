
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export const TechnicalFocus = () => {
  return (
    <section id="focus-areas" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
              Focus Areas
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Technical Focus Areas
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Key opportunities and considerations for emerging markets
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <Tabs defaultValue="web-mobile" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="web-mobile">Web & Mobile</TabsTrigger>
              <TabsTrigger value="cross-platform">Cross-Platform</TabsTrigger>
              <TabsTrigger value="ed-tech">Ed-Tech</TabsTrigger>
              <TabsTrigger value="ai-ml">AI/ML & Robotics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="web-mobile" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="font-bold text-lg mb-3">Progressive Web Apps (PWAs)</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-purple-700">Why?</h4>
                      <p className="text-sm text-slate-600">
                        Blend web/mobile strengths (offline access, installable, low data usage).
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-purple-700">Opportunities</h4>
                      <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                        <li>Ideal for regions with unreliable internet (emerging markets)</li>
                        <li>Cost-effective vs. native apps (single codebase)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-purple-700">Tech-Stack</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Workbox</Badge>
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Lighthouse</Badge>
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Next.js</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="font-bold text-lg mb-3">Traditional Web Apps (TWAs)</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-purple-700">Why?</h4>
                      <p className="text-sm text-slate-600">
                        Standard websites (no offline/installable features).
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-purple-700">Key Features</h4>
                      <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                        <li><b>Always online</b> (no Service Worker caching)</li>
                        <li><b>URL-based access</b> (no app installation)</li>
                        <li><b>No installation</b> (instant access)</li>
                        <li><b>Simpler development</b> (no native SDKs required)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-purple-700">Tech-Stack</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">HTML</Badge>
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">CSS</Badge>
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">JavaScript</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="font-bold text-lg mb-3">Hybrid Solutions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-purple-700">Why?</h4>
                      <p className="text-sm text-slate-600">
                        To overcome challenges like data savings, app store limitations, and cross-platform reach.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-purple-700">Key Advantages</h4>
                      <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                        <li><b>Cost-Effective:</b> 70% code reuse</li>
                        <li><b>Offline Resilience:</b> Critical for intermittent connectivity</li>
                        <li><b>Data Savings:</b> ~90% less data than native apps</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-purple-700">Tech-Stack</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Bubblewrap</Badge>
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">React Native</Badge>
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Workbox</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="cross-platform" className="mt-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold text-lg mb-3">Cross-Platform Development</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-purple-700">Why?</h4>
                    <p className="text-sm text-slate-600">
                      Faster deployment across iOS/Android with shared logic.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-purple-700">Frameworks to Watch</h4>
                    <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                      <li><b>Flutter:</b> Growing ecosystem, performant UI</li>
                      <li><b>React Native:</b> Large community, JavaScript-based</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-purple-700">Key Challenge</h4>
                    <p className="text-sm text-slate-600">
                      Balancing performance with native features (e.g., AR, heavy animations).
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ed-tech" className="mt-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold text-lg mb-3">Ed-Tech Platforms</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-purple-700">Trends</h4>
                    <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                      <li><b>AI-driven Learning:</b> Personalized content and adaptive paths</li>
                      <li><b>Low-Bandwidth Modes:</b> For remote learners with limited connectivity</li>
                      <li><b>Gamification:</b> Boost engagement (badges, leaderboards)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-purple-700">Key Focus</h4>
                    <p className="text-sm text-slate-600">
                      Building educational platforms that work effectively in low-resource environments, 
                      focusing on offline capabilities and minimal data usage.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ai-ml" className="mt-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold text-lg mb-3">Robotics, Data Science & AI/ML</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-purple-700">Strategic Value</h4>
                    <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                      <li>Bridges hardware (robotics) and software (AI/ML) for automation</li>
                      <li>Enhances decision-making via data science in economic/ed-tech systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-purple-700">Applications</h4>
                    <p className="text-sm text-slate-600">
                      Implementing practical AI solutions that address real challenges in emerging markets, 
                      with a focus on ethical AI principles and appropriate technology.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
