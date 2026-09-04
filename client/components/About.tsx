import ThemedH1 from './theme/ThemedHeader'
import ThemedText from './theme/ThemedText'

export default function About() {
  return (
    <>
      <main>
        <ThemedH1>About</ThemedH1>

        <ThemedText>
          What started as a group end-of-year project soon became a passion
          project and an enabler for my own garden.
        </ThemedText>

        <ThemedH1>Recent Updates</ThemedH1>

        <ul className="list-inside list-disc">
          <li>The region list now displays in alphabetical order.</li>
          <li>Plants can be saved to My Garden.</li>
          <li>Plants saved in My Garden sync between devices.</li>
        </ul>

        <ThemedH1>Coming Soon</ThemedH1>

        <ul className="list-inside list-disc">
          <li>More plants, including decorative plants.</li>
          <li>Recipe links to another section of the site.</li>
        </ul>
      </main>
    </>
  )
}
