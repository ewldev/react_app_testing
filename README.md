# React testing on robofriends app

components: enzyme - shallow
            jest - snapshot

redux reducers: checking the input against the output of pure functions
                expect().toEqual()

redux actions: need configureMockStore as middleware to test asynchronous function
               installed redux-mock-store
               also need thunkMiddleware from 'redux-thunk'
               
                               