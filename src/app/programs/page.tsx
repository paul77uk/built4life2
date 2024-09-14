"use client";

import { programs } from "@/data/programs";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

import { Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Page = () => {
  const [currentProgram, setCurrentProgram] = useState(programs[0]);

  return (
    <div>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full flex-col gap-2 pb-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href="/" className="font-semibold">
                <span className="">Programs</span>
              </Link>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                {programs.map((program) => (
                  <Link
                    onClick={() => setCurrentProgram(program)}
                    href="#"
                    className={cn(
                      "rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                      program.title === currentProgram.title &&
                        "bg-muted text-primary font-semibold"
                    )}
                  >
                    {program.title}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="mt-auto p-4">
              <Card x-chunk="dashboard-02-chunk-0">
                <CardHeader className="p-2 pt-0 md:p-4">
                  <CardTitle>Upgrade to Pro</CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access to our support
                    team.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                  <Button size="sm" className="w-full">
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link href="#" className="text-lg font-semibold">
                    <div className="sr-only">Programs</div>
                  </Link>
                  {programs.map((program) => (
                    <Link
                      onClick={() => setCurrentProgram(program)}
                      href="#"
                      className="mx-[-0.65rem] rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      {program.title}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upgrade to Pro</CardTitle>
                      <CardDescription>
                        Unlock all features and get unlimited access to our
                        support team.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button size="sm" className="w-full">
                        Upgrade
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search programs..."
                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                  />
                </div>
              </form>
            </div>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="flex items-center">
              <h1 className="text-lg font-semibold md:text-2xl">
                {currentProgram.title}
              </h1>
            </div>
            <div
              className="flex flex-1  justify-center rounded-lg border shadow-sm"
              x-chunk="dashboard-02-chunk-1"
            >
              <div className="flex flex-col items-center gap-1 text-center">
                {/* Tabs */}
                <Tabs
                  defaultValue={programs[0].days[0].title}
                  className="w-[400px]"
                >
                  <div>
                    <TabsList>
                      <div>
                        {currentProgram.days.map((day) => (
                          <TabsTrigger value={day.title} key={day.title}>
                            {day.title}
                          </TabsTrigger>
                        ))}
                      </div>
                    </TabsList>

                    <div>
                      {currentProgram.days.map((day) => (
                        <TabsContent value={day.title} key={day.title}>
                          {day.exercises.map((exercise) => (
                            <Card
                              key={exercise.title}
                              className="w-[350px] mx-auto my-5 text-center"
                            >
                              <CardHeader>
                                <CardTitle>{exercise.title}</CardTitle>
                                <CardDescription>
                                  {exercise.description}
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                {exercise.exercises.map((subExercise) => (
                                  <div key={subExercise}>
                                    <p>{subExercise}</p>
                                  </div>
                                ))}
                              </CardContent>
                            </Card>
                          ))}
                        </TabsContent>
                      ))}
                    </div>
                  </div>
                </Tabs>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default Page;
