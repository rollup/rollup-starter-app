import { format } from 'date-fns';

var span = document.querySelector('#time-now');

export default function update() {
	span.textContent = format(new Date(), 'h:mm:ssa');
	setTimeout(update, 1000);
}
