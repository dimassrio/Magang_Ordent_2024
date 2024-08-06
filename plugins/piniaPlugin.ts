import { PiniaPluginContext } from 'pinia';

function myPiniaPlugin({ store }: PiniaPluginContext) {
  // Tambahkan properti atau metode ke store
  store.$myProperty = 'Hello from plugin';
  store.$myMethod = () => {
    console.log('This is a method from the plugin');
  };
}
// plugins/my-plugin.js


function defineNuxtPlugin(arg0: (nuxtApp: any) => void) {
  throw new Error('Function not implemented.');
}

