interface AbstractPose {
  name: string;
  breath: "inhale" | "exhale";
  duration: number;
  durationUnit: "breath" | "minute";
  sanskritName: string;
}
