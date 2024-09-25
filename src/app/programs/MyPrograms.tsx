"use client";

import { programs } from "@/data/programs";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Lock } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { createMyProgramAction } from "./actions";
import { toast } from "@/hooks/use-toast";

const MyPrograms = ({ isSubscribed }: { isSubscribed: boolean }) => {
  const [currentProgram, setCurrentProgram] = useState(programs[0]);

  console.log({ programs });

  const { mutate, isPending } = useMutation({
    mutationKey: ["createMyProgram"],
    mutationFn: async () =>
      createMyProgramAction({
        program1: currentProgram,
      }),
    onSuccess: () => {
      toast({
        title: "Program Added",
        description: `${currentProgram.title} added to My Programs`,
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

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
                    key={program.title}
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
          <header className="flex h-14  items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
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
                      key={program.title}
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
            <div className="flex gap-2 items-center font-semibold">
              {currentProgram.title}
              {isSubscribed ? (
                <Button
                  disabled={isPending}
                  onClick={() => mutate()}
                  variant={"outline"}
                >
                  {isPending ? "Adding..." : "Add to My Programs"}
                </Button>
              ) : (
                <Button disabled variant={"outline"} className="flex gap-2">
                  <Lock />
                  Add to My Workouts
                </Button>
              )}
            </div>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-2 lg:gap-6 lg:p-2">
            {/* <div className="flex items-center">
              <h1 className="text-lg font-semibold md:text-2xl">
                {currentProgram.title}
              </h1>
            </div> */}
            <div
              className="flex flex-1  justify-center "
              x-chunk="dashboard-02-chunk-1"
            >
              <div className="flex flex-col items-center gap-1 text-center">
                {/* Tabs */}
                <Tabs defaultValue={programs[0].days[0].title}>
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
                          {day.workouts.map((workout) => (
                            <Card
                              key={workout.title}
                              className="w-[350px] mx-auto my-5 text-center"
                            >
                              <CardHeader>
                                <CardTitle>{workout.title}</CardTitle>
                                <CardDescription>
                                  {workout.description}
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                {workout.exercises?.map((exercise) => (
                                  <div key={exercise}>
                                    <p>{exercise}</p>
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
export default MyPrograms;
