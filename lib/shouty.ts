import Coordinate from "./coordinate"

const MESSAGE_RANGE = 1000

export default class Shouty {
  public locationsByShouter: Map<string, Coordinate> = new Map()
  public shoutsByShouter: Map<string, string[]> = new Map()

  setLocation(person: string, coordinate: Coordinate) {
    this.locationsByShouter.set(person, coordinate)
  }

  shout(person: string, shout: string) {
    if (!this.shoutsByShouter.has(person)) {
      this.shoutsByShouter.set(person, [])
    }

    this.shoutsByShouter.get(person)!.push(shout)
  }

  getShoutsHeardBy(listener: string) {
    const shoutsHeard = new Map()

    for (const [shouter, shouts] of this.shoutsByShouter) {
      const shouterLocation = this.locationsByShouter.get(shouter)
      const listenerLocation = this.locationsByShouter.get(listener)

      if (!shouterLocation) {
        throw new Error("Could not locate shouter")
      }

      if (!listenerLocation) {
        throw new Error("Could not locate listener")
      }

      if (shouterLocation.distanceFrom(listenerLocation) < MESSAGE_RANGE) {
        shoutsHeard.set(shouter, shouts)
      }
    }

    return shoutsHeard
  }
}
