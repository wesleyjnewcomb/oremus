import { PrayerSet } from './components/PrayerSet'
import prayerSetData from './data/prayer-sets.en.json'
import type { PrayerSet as PrayerSetType } from './types'

function App() {
  const prayerSet = prayerSetData["rosary-joyful"] as PrayerSetType
  return (
    <>
      <PrayerSet prayerSet={prayerSet} />
    </>
  )
}

export default App
