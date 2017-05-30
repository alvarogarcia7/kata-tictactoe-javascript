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
      headers: myHeaders,
      mode: 'cors',
      cache: 'default' 
    }
    fetch('https://localhost:3001/api/store/'+channelName, options).then(function(response) {
          return response.blob();
    }).then(function(myBlob) {
      console.log("synced from " + channelName);
    });
  }
}

export default Store;
