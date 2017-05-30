class Store {
  constructor() {
    this.shouldSync = true
    this.channels = {}
    window.addEventListener('online',  () => {
      this.shouldSync = true
      Object.getOwnPropertyNames(this.channels).forEach(this.sync)
    });

    window.addEventListener('offline', () => {
      this.shouldSync = false 
    });
  }

  sync(channelName) {
    this.channels[channelName].sync(channelName)
  }

  upsertChannel(name){
    if(!this.channels[name]){
      this.channels[name] = new ChannelWithHistory()
    }
    return this.channels[name]
  }

  publish(channelName, message) {
    this.upsertChannel(channelName).publish(message)
    this.sync(channelName)
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

  sync(channelName) {
    const options = {
      method: 'POST',
      mode: 'cors',
      headers:  {'Content-Type': 'application/json'},
      body: JSON.stringify(this.history),
    }
    //const url = 'http://localhost:3001/api/store/'+channelName
    const url = 'https://secret-forest-96342.herokuapp.com/api/store/'+channelName
    console.log(url)
    fetch(url, options).then(function(response) {
      console.log("synced from " + channelName);
    }).catch(() => console.log('err'))
  }
}

export default Store;
