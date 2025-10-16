const instanceArray = []

class EventEmitter {
    events = []

    constructor() {
        instanceArray.push(this)
    }

    emit(eventName){
        instanceArray.forEach(instance=>{
            const instanceHasEvent = instance.events.find(eventObj=>{
                return eventObj.name === eventName
            })

            if (instanceHasEvent) {
                instanceHasEvent.callbacks.forEach(callback=>callback())
            }
        })
    }

    on(name, callback) {
        const event = this.events.find(e=> e.name === name)
        
        if (event) {
            event.callback.push(callback)
        } else {
            events.push({name, callbacks: [callback]})
        }

    }

    // close()
}

const emitter = new EventEmitter();
const emitter2 = new EventEmitter();

    emitter.on('event', () => console.log('callback'));
    emitter.on('event', () =>console.log('callback2'))
    emitter.emit(‘event’);

    emitter2.on('event', () => console.log('callback -emitter2'));