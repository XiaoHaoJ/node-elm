'use strict';

import home from './home'
import v1 from './v1'
import v2 from './v2'
import v3 from './v3'
import v4 from './v4'
import ugc from './ugc'
import bos from './bos'
import member from './member'
import shopping from './shopping'
import promotion from './promotion'

export default app => {
	app.get('/', (req, res, next) => {
		res.redirect('/home');
	});
	app.use('/home', home);
	app.use('/v1', v1);
	app.use('/v2', v2);
	app.use('/v3', v3);
	app.use('/v4', v4);
	app.use('/ugc', ugc);
	app.use('/bos', bos);
	app.use('/member', member);
	app.use('/shopping', shopping);
	app.use('/promotion', promotion);
}