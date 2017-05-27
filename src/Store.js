class Store {
  constructor() {
    this.channels = {}
  }

  upsertChannel(name){
    if(!this.channels[name]){
      this.channels[name] = new ChannelWithHistory()
    }
    return this.channels[name]
  }

  publish(channelName, message) {
    this.upsertChannel(channelName).publish(message)
  }

  subscribe(channelName, function_) {
    this.upsertChannel(channelName).addSubscriber(function_)
  }
}

class ChannelWithHistory {
  constructor() {
    this.history = []
    this.subscribers = []
  }

  addSubscriber(function_) {
    this.subscribers.push(function_)
  }

  publish(message) {
    this.history.push(message)
    this.subscribers.map(f => f(this.history))
  }
}

export default Store;
