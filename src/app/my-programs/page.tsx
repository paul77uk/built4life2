"use client";

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
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getMyProgramsAction } from "./actions";
import MyWorkout from "../my-workouts/MyWorkout";

type ProgramType = {
  id: string;
  title: string;
  days: {
    id: string;
    title: string;
    workouts: {
      dayId: string;
      workoutTitle: string;
      order: number;
      workout: {
        id: string;
        title: string;
        description: string;
        exercises: string[];
        pr: number | null;
        minutes: number | null;
        seconds: number | null;
      };
    }[];
  }[];
};

const Page = () => {
  const {
    data: programs,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["programs"],
    queryFn: async () => await getMyProgramsAction(),
  });

  const [currentProgram, setCurrentProgram] = useState<ProgramType>();

  useEffect(() => {
    if (programs) {
      setCurrentProgram(programs[0]);
    }
  }, [programs]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (programs === null || programs?.length === 0 || !programs) {
    return <div>No programs found</div>;
  }

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
                    key={program.id}
                    onClick={() => {
                      setCurrentProgram(program);
                    }}
                    href="#"
                    className={cn(
                      "rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                      program.title === currentProgram?.title &&
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
                      key={program.id}
                      onClick={() => {
                        setCurrentProgram(program);
                        console.log("currentProgram", currentProgram);
                      }}
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
            <div className="font-semibold">
              {currentProgram?.title ?? "No Program Selected"}
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
                <Tabs defaultValue={programs[0].days[0].id}>
                  <div>
                    <TabsList>
                      <div>
                        {currentProgram?.days.map((day) => (
                          <TabsTrigger value={day.id} key={day.id}>
                            {day.title}
                          </TabsTrigger>
                        ))}
                      </div>
                    </TabsList>

                    <div>
                      {currentProgram?.days.map((day) => (
                        <TabsContent value={day.id} key={day.id}>
                          {day.workouts.map((workout) => (
                            <div
                              key={workout.workout.id}
                              className="my-5 flex justify-center"
                            >
                              <MyWorkout
                                key={workout.workout.id}
                                workout={workout.workout}
                              />
                            </div>
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
