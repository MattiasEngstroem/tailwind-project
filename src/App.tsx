import { ProfileCard } from "./components/ProfileCard";
import { FeatureCard } from "./components/FeatureCard";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ProfileCard
        name="Luna Kattson"
        title="Chief Nap Officer"
        image="/pictures/sleeping-cat.jpg"
        description="Luna är en passionerad sovexpert med över 8 års erfarenhet inom vila och gos. Hon älskar mjuka filtar och långa tupplurar i solen."
      />
      <FeatureCard
        icon="💡"
        title="Smart Design"
        text="Responsiv layout med modern Tailwind-styling och mjuka animationer."
      />
    </div>
  );
}

export default App;
