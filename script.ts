import {timer} from 'rxjs';
import {finalize, publish, refCount, take} from 'rxjs/operators';


const t = timer(0, 1000)
    .pipe(
        publish(),
        refCount(),
        finalize(() => {
            console.log('final');
        })
    );

const s1 = t.subscribe(() => {
    console.log('timer 1');
}, (err) => {
    console.log(err);
}, () => {
    console.log('complete');
});

const s2 = t.pipe(take(3)).subscribe(() => {
    console.log('timer 2');
}, err => {
    console.log(err);
},  () => {
    console.log('complete');
});


setTimeout(() => {
    s1.unsubscribe();
}, 3000);

