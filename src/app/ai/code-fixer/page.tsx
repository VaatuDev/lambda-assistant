import { CodeForm } from "@/components/ai/code-form";
import { generateCodeOutput } from "@/server/gemini";

export default function CodeFixerPage() {
  return (
    <>
      <div className="flex-1 flex flex-col lg:flex-row px-5 justify-around">
        <CodeForm sendCodePrompt={generateCodeOutput} />
      </div>
    </>
  );
}
