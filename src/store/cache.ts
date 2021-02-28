import {reactive} from 'vue'
import {set} from '.'

/** a simple reactive store
 * drawing on a concept I forked
 * https://codesandbox.io/s/vue-3-global-stores-forked-5iscw
 */

export const cached: {[key: string]: string} = reactive({
	uid: lsd('uid'),
	name: lsd('name'),
	email: lsd('email'),
	phone: lsd('phone'),
	theme: lsd('theme'),
	query: lsd('query'),
	toss: lsd('toss'),
	step: lsd('step'),
	help: lsd('help'),
	newRoll: lsd('newRoll'),
})

export const cache = (nym: string | undefined, val: string | null | undefined): void => {
	if (!nym || !val) throw new Error("can't cache nada. nym: " + nym + ', val: ' + val)
	// console.log('setting user data', nym, 'from', cached[nym], 'to', val)
	localStorage.setItem(nym, val)
	cached[nym] = val
}

export const uncache = (nym: string | undefined): void => {
	if (!nym) throw new Error("can't uncache nada. nym: " + nym)
	// console.log('clearing user data for', nym)
	localStorage.removeItem(nym)
	cached[nym] = ''
}

function lsd(nym: string): string {
	return localStorage.getItem(nym) ?? ''
}

export function cacheUser(user: firebase.default.User): void {
	if (user.uid) cache('uid', user.uid)
	if (user.email) cache('email', user.email)
	if (user.phoneNumber) cache('phoneNumber', user.phoneNumber)
	if (user.displayName) cache('displayName', user.displayName)
	if (user.emailVerified) set('emailVerified', user.emailVerified)
}

// export const activeUser = ref()
