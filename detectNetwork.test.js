// mochajs.org
// http://chaijs.com/

describe('American Express', function() {

	var assert = chai.assert;

	it('has a prefix of 34 and a length of 15', function() {
		assert(detectNetwork('341378140727679') === 'American Express');
	});

	it('has a prefix of 37 and a length of 15', function() {
		assert(detectNetwork('374788666961313') === 'American Express');
	});

});

describe('Diner\'s Club', function() {

	var assert = chai.assert;

	it('has a prefix of 38 and a length of 14', function() {
		assert(detectNetwork('38552932231334') === 'Diner\'s Club');
	});

	it('has a prefix of 39 and a length of 14', function() {
		assert(detectNetwork('39644698151535') === 'Diner\'s Club');
	});

});

describe('Visa', function() {

	var assert = chai.assert;

	it('has a prefix of 4 and a length of 13', function() {
		assert(detectNetwork('4508517829752') === 'Visa');
	});

	it('has a prefix of 4 and a length of 16', function() {
		assert(detectNetwork('4803289498975702') === 'Visa');
	});

	it('has a prefix of 4 and a length of 19', function() {
		assert(detectNetwork('4203099292060281048') === 'Visa');
	});

});

describe('MasterCard', function() {

	var assert = chai.assert;

	it('has a prefix of 51 and a length of 16', function() {
		assert(detectNetwork('5137847133863989') === 'MasterCard');
	});

	it('has a prefix of 52 and a length of 16', function() {
		assert(detectNetwork('5236603217092754') === 'MasterCard');
	});

	it('has a prefix of 53 and a length of 16', function() {
		assert(detectNetwork('5364350411877033') === 'MasterCard');
	});

	it('has a prefix of 54 and a length of 16', function() {
		assert(detectNetwork('5487405489415271') === 'MasterCard');
	});

	it('has a prefix of 55 and a length of 16', function() {
		assert(detectNetwork('5541436756512787') === 'MasterCard');
	});

});

describe('Maestro', function() {

	var assert = chai.assert;

	it('has a prefix of 5018 and a length of 12', function() {
		assert(detectNetwork('501861048853') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 12', function() {
		assert(detectNetwork('502071916688') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 12', function() {
		assert(detectNetwork('503846905607') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 12', function() {
		assert(detectNetwork('630446631060') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 13', function() {
		assert(detectNetwork('5018650002674') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 13', function() {
		assert(detectNetwork('5020794379623') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 13', function() {
		assert(detectNetwork('5038245486234') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 13', function() {
		assert(detectNetwork('6304536580498') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 14', function() {
		assert(detectNetwork('50182713689060') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 14', function() {
		assert(detectNetwork('50205686610509') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 14', function() {
		assert(detectNetwork('50386138620404') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 14', function() {
		assert(detectNetwork('63040460060728') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 15', function() {
		assert(detectNetwork('501897063316994') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 15', function() {
		assert(detectNetwork('502032227691074') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 15', function() {
		assert(detectNetwork('503817013886991') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 15', function() {
		assert(detectNetwork('630483953375729') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 16', function() {
		assert(detectNetwork('5018141009932739') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 16', function() {
		assert(detectNetwork('5020938351809338') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 16', function() {
		assert(detectNetwork('5038899109222762') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 16', function() {
		assert(detectNetwork('6304685474243397') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 17', function() {
		assert(detectNetwork('50186368156677635') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 17', function() {
		assert(detectNetwork('50201433251837284') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 17', function() {
		assert(detectNetwork('50386429467549079') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 17', function() {
		assert(detectNetwork('63046754824816963') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 18', function() {
		assert(detectNetwork('501897742424824299') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 18', function() {
		assert(detectNetwork('502020206656373442') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 18', function() {
		assert(detectNetwork('503843951695113092') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 18', function() {
		assert(detectNetwork('630423569852308157') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 19', function() {
		assert(detectNetwork('5018318572582082178') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 19', function() {
		assert(detectNetwork('5020156769533358131') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 19', function() {
		assert(detectNetwork('5038453281831402083') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 19', function() {
		assert(detectNetwork('6304169322776129035') === 'Maestro');
	});

});

describe('Discover', function() {

	var assert = chai.assert;

	it('has a prefix of 6011 and a length of 16', function() {
		assert(detectNetwork('6011049044502050') === 'Discover');
	});

	it('has a prefix of 644 and a length of 16', function() {
		assert(detectNetwork('6443051482610870') === 'Discover');
	});

	it('has a prefix of 645 and a length of 16', function() {
		assert(detectNetwork('6455950443642906') === 'Discover');
	});

	it('has a prefix of 646 and a length of 16', function() {
		assert(detectNetwork('6463669959640256') === 'Discover');
	});

	it('has a prefix of 647 and a length of 16', function() {
		assert(detectNetwork('6478787188690625') === 'Discover');
	});

	it('has a prefix of 648 and a length of 16', function() {
		assert(detectNetwork('6489965143996768') === 'Discover');
	});

	it('has a prefix of 649 and a length of 16', function() {
		assert(detectNetwork('6499474430049333') === 'Discover');
	});

	it('has a prefix of 65 and a length of 16', function() {
		assert(detectNetwork('6560280894818982') === 'Discover');
	});

	it('has a prefix of 6011 and a length of 19', function() {
		assert(detectNetwork('6011536885958141892') === 'Discover');
	});

	it('has a prefix of 644 and a length of 19', function() {
		assert(detectNetwork('6444720030324350307') === 'Discover');
	});

	it('has a prefix of 645 and a length of 19', function() {
		assert(detectNetwork('6450868402776076100') === 'Discover');
	});

	it('has a prefix of 646 and a length of 19', function() {
		assert(detectNetwork('6462051366191096048') === 'Discover');
	});

	it('has a prefix of 647 and a length of 19', function() {
		assert(detectNetwork('6471300928209079026') === 'Discover');
	});

	it('has a prefix of 648 and a length of 19', function() {
		assert(detectNetwork('6480695187649726372') === 'Discover');
	});

	it('has a prefix of 649 and a length of 19', function() {
		assert(detectNetwork('6493867931071310300') === 'Discover');
	});

	it('has a prefix of 65 and a length of 19', function() {
		assert(detectNetwork('6528482925318746025') === 'Discover');
	});

});

describe('China UnionPay', function() {

	var assert = chai.assert;

	it('has a prefix of 624 and a length of 16', function() {
		assert(detectNetwork('6247023502830144') === 'China UnionPay');
	});

	it('has a prefix of 625 and a length of 16', function() {
		assert(detectNetwork('6250156928658513') === 'China UnionPay');
	});

	it('has a prefix of 626 and a length of 16', function() {
		assert(detectNetwork('6266670634001322') === 'China UnionPay');
	});

	it('has a prefix of 6282 and a length of 16', function() {
		assert(detectNetwork('6282500382053290') === 'China UnionPay');
	});

	it('has a prefix of 6283 and a length of 16', function() {
		assert(detectNetwork('6283784216362665') === 'China UnionPay');
	});

	it('has a prefix of 6284 and a length of 16', function() {
		assert(detectNetwork('6284767413297354') === 'China UnionPay');
	});

	it('has a prefix of 6285 and a length of 16', function() {
		assert(detectNetwork('6285369677754591') === 'China UnionPay');
	});

	it('has a prefix of 6286 and a length of 16', function() {
		assert(detectNetwork('6286853827864645') === 'China UnionPay');
	});

	it('has a prefix of 6287 and a length of 16', function() {
		assert(detectNetwork('6287286266641812') === 'China UnionPay');
	});

	it('has a prefix of 6288 and a length of 16', function() {
		assert(detectNetwork('6288636114703071') === 'China UnionPay');
	});

	it('has a prefix of 622126 and a length of 16', function() {
		assert(detectNetwork('6221260061196163') === 'China UnionPay');
	});

	it('has a prefix of 622127 and a length of 16', function() {
		assert(detectNetwork('6221279043050401') === 'China UnionPay');
	});

	it('has a prefix of 622128 and a length of 16', function() {
		assert(detectNetwork('6221286565952169') === 'China UnionPay');
	});

	it('has a prefix of 622129 and a length of 16', function() {
		assert(detectNetwork('6221296122313439') === 'China UnionPay');
	});

	it('has a prefix of 622130 and a length of 16', function() {
		assert(detectNetwork('6221305117336509') === 'China UnionPay');
	});

	it('has a prefix of 622131 and a length of 16', function() {
		assert(detectNetwork('6221317604148685') === 'China UnionPay');
	});

	it('has a prefix of 622132 and a length of 16', function() {
		assert(detectNetwork('6221328084927992') === 'China UnionPay');
	});

	it('has a prefix of 622133 and a length of 16', function() {
		assert(detectNetwork('6221336164710373') === 'China UnionPay');
	});

	it('has a prefix of 622134 and a length of 16', function() {
		assert(detectNetwork('6221344046259390') === 'China UnionPay');
	});

	it('has a prefix of 622135 and a length of 16', function() {
		assert(detectNetwork('6221355296999401') === 'China UnionPay');
	});

	it('has a prefix of 622136 and a length of 16', function() {
		assert(detectNetwork('6221366980733746') === 'China UnionPay');
	});

	it('has a prefix of 622137 and a length of 16', function() {
		assert(detectNetwork('6221374275947102') === 'China UnionPay');
	});

	it('has a prefix of 622138 and a length of 16', function() {
		assert(detectNetwork('6221384962451716') === 'China UnionPay');
	});

	it('has a prefix of 622139 and a length of 16', function() {
		assert(detectNetwork('6221397054300175') === 'China UnionPay');
	});

	it('has a prefix of 622140 and a length of 16', function() {
		assert(detectNetwork('6221401237355292') === 'China UnionPay');
	});

	it('has a prefix of 622141 and a length of 16', function() {
		assert(detectNetwork('6221412428521511') === 'China UnionPay');
	});

	it('has a prefix of 622142 and a length of 16', function() {
		assert(detectNetwork('6221427948818982') === 'China UnionPay');
	});

	it('has a prefix of 622143 and a length of 16', function() {
		assert(detectNetwork('6221430898288433') === 'China UnionPay');
	});

	it('has a prefix of 622144 and a length of 16', function() {
		assert(detectNetwork('6221448141523369') === 'China UnionPay');
	});

	it('has a prefix of 622145 and a length of 16', function() {
		assert(detectNetwork('6221455509882653') === 'China UnionPay');
	});

	it('has a prefix of 622146 and a length of 16', function() {
		assert(detectNetwork('6221465778914278') === 'China UnionPay');
	});

	it('has a prefix of 622147 and a length of 16', function() {
		assert(detectNetwork('6221470805751131') === 'China UnionPay');
	});

	it('has a prefix of 622148 and a length of 16', function() {
		assert(detectNetwork('6221485743853860') === 'China UnionPay');
	});

	it('has a prefix of 622149 and a length of 16', function() {
		assert(detectNetwork('6221496810001545') === 'China UnionPay');
	});

	it('has a prefix of 622150 and a length of 16', function() {
		assert(detectNetwork('6221500116129841') === 'China UnionPay');
	});

	it('has a prefix of 622151 and a length of 16', function() {
		assert(detectNetwork('6221513629652553') === 'China UnionPay');
	});

	it('has a prefix of 622152 and a length of 16', function() {
		assert(detectNetwork('6221521311898076') === 'China UnionPay');
	});

	it('has a prefix of 622153 and a length of 16', function() {
		assert(detectNetwork('6221537136735655') === 'China UnionPay');
	});

	it('has a prefix of 622154 and a length of 16', function() {
		assert(detectNetwork('6221547441743106') === 'China UnionPay');
	});

	it('has a prefix of 622155 and a length of 16', function() {
		assert(detectNetwork('6221552142464909') === 'China UnionPay');
	});

	it('has a prefix of 622156 and a length of 16', function() {
		assert(detectNetwork('6221561659219259') === 'China UnionPay');
	});

	it('has a prefix of 622157 and a length of 16', function() {
		assert(detectNetwork('6221572703084092') === 'China UnionPay');
	});

	it('has a prefix of 622158 and a length of 16', function() {
		assert(detectNetwork('6221589720626180') === 'China UnionPay');
	});

	it('has a prefix of 622159 and a length of 16', function() {
		assert(detectNetwork('6221591164116707') === 'China UnionPay');
	});

	it('has a prefix of 622160 and a length of 16', function() {
		assert(detectNetwork('6221608472647991') === 'China UnionPay');
	});

	it('has a prefix of 622161 and a length of 16', function() {
		assert(detectNetwork('6221616480593453') === 'China UnionPay');
	});

	it('has a prefix of 622162 and a length of 16', function() {
		assert(detectNetwork('6221628243207648') === 'China UnionPay');
	});

	it('has a prefix of 622163 and a length of 16', function() {
		assert(detectNetwork('6221634661711828') === 'China UnionPay');
	});

	it('has a prefix of 622164 and a length of 16', function() {
		assert(detectNetwork('6221646091406682') === 'China UnionPay');
	});

	it('has a prefix of 622165 and a length of 16', function() {
		assert(detectNetwork('6221657090284169') === 'China UnionPay');
	});

	it('has a prefix of 622166 and a length of 16', function() {
		assert(detectNetwork('6221661101248879') === 'China UnionPay');
	});

	it('has a prefix of 622167 and a length of 16', function() {
		assert(detectNetwork('6221679685973648') === 'China UnionPay');
	});

	it('has a prefix of 622168 and a length of 16', function() {
		assert(detectNetwork('6221687458457747') === 'China UnionPay');
	});

	it('has a prefix of 622169 and a length of 16', function() {
		assert(detectNetwork('6221692866176597') === 'China UnionPay');
	});

	it('has a prefix of 622170 and a length of 16', function() {
		assert(detectNetwork('6221707412557525') === 'China UnionPay');
	});

	it('has a prefix of 622171 and a length of 16', function() {
		assert(detectNetwork('6221710847047138') === 'China UnionPay');
	});

	it('has a prefix of 622172 and a length of 16', function() {
		assert(detectNetwork('6221725550922201') === 'China UnionPay');
	});

	it('has a prefix of 622173 and a length of 16', function() {
		assert(detectNetwork('6221732316898768') === 'China UnionPay');
	});

	it('has a prefix of 622174 and a length of 16', function() {
		assert(detectNetwork('6221741965001751') === 'China UnionPay');
	});

	it('has a prefix of 622175 and a length of 16', function() {
		assert(detectNetwork('6221756647978893') === 'China UnionPay');
	});

	it('has a prefix of 622176 and a length of 16', function() {
		assert(detectNetwork('6221765674478371') === 'China UnionPay');
	});

	it('has a prefix of 622177 and a length of 16', function() {
		assert(detectNetwork('6221779670882250') === 'China UnionPay');
	});

	it('has a prefix of 622178 and a length of 16', function() {
		assert(detectNetwork('6221785626636275') === 'China UnionPay');
	});

	it('has a prefix of 622179 and a length of 16', function() {
		assert(detectNetwork('6221799371270285') === 'China UnionPay');
	});

	it('has a prefix of 622180 and a length of 16', function() {
		assert(detectNetwork('6221800444370748') === 'China UnionPay');
	});

	it('has a prefix of 622181 and a length of 16', function() {
		assert(detectNetwork('6221817038001373') === 'China UnionPay');
	});

	it('has a prefix of 622182 and a length of 16', function() {
		assert(detectNetwork('6221823390987970') === 'China UnionPay');
	});

	it('has a prefix of 622183 and a length of 16', function() {
		assert(detectNetwork('6221835649696717') === 'China UnionPay');
	});

	it('has a prefix of 622184 and a length of 16', function() {
		assert(detectNetwork('6221842813203236') === 'China UnionPay');
	});

	it('has a prefix of 622185 and a length of 16', function() {
		assert(detectNetwork('6221859794567774') === 'China UnionPay');
	});

	it('has a prefix of 622186 and a length of 16', function() {
		assert(detectNetwork('6221869588582568') === 'China UnionPay');
	});

	it('has a prefix of 622187 and a length of 16', function() {
		assert(detectNetwork('6221876965089464') === 'China UnionPay');
	});

	it('has a prefix of 622188 and a length of 16', function() {
		assert(detectNetwork('6221887180006934') === 'China UnionPay');
	});

	it('has a prefix of 622189 and a length of 16', function() {
		assert(detectNetwork('6221894490785483') === 'China UnionPay');
	});

	it('has a prefix of 622190 and a length of 16', function() {
		assert(detectNetwork('6221902804856699') === 'China UnionPay');
	});

	it('has a prefix of 622191 and a length of 16', function() {
		assert(detectNetwork('6221912048390381') === 'China UnionPay');
	});

	it('has a prefix of 622192 and a length of 16', function() {
		assert(detectNetwork('6221925958934327') === 'China UnionPay');
	});

	it('has a prefix of 622193 and a length of 16', function() {
		assert(detectNetwork('6221933124563526') === 'China UnionPay');
	});

	it('has a prefix of 622194 and a length of 16', function() {
		assert(detectNetwork('6221941311689242') === 'China UnionPay');
	});

	it('has a prefix of 622195 and a length of 16', function() {
		assert(detectNetwork('6221956476332589') === 'China UnionPay');
	});

	it('has a prefix of 622196 and a length of 16', function() {
		assert(detectNetwork('6221962758256959') === 'China UnionPay');
	});

	it('has a prefix of 622197 and a length of 16', function() {
		assert(detectNetwork('6221974600248244') === 'China UnionPay');
	});

	it('has a prefix of 622198 and a length of 16', function() {
		assert(detectNetwork('6221987499073470') === 'China UnionPay');
	});

	it('has a prefix of 622199 and a length of 16', function() {
		assert(detectNetwork('6221996318865963') === 'China UnionPay');
	});

	it('has a prefix of 622200 and a length of 16', function() {
		assert(detectNetwork('6222005820708183') === 'China UnionPay');
	});

	it('has a prefix of 622201 and a length of 16', function() {
		assert(detectNetwork('6222019997122436') === 'China UnionPay');
	});

	it('has a prefix of 622202 and a length of 16', function() {
		assert(detectNetwork('6222028262121261') === 'China UnionPay');
	});

	it('has a prefix of 622203 and a length of 16', function() {
		assert(detectNetwork('6222038087566595') === 'China UnionPay');
	});

	it('has a prefix of 622204 and a length of 16', function() {
		assert(detectNetwork('6222046044559056') === 'China UnionPay');
	});

	it('has a prefix of 622205 and a length of 16', function() {
		assert(detectNetwork('6222053611456456') === 'China UnionPay');
	});

	it('has a prefix of 622206 and a length of 16', function() {
		assert(detectNetwork('6222063346107796') === 'China UnionPay');
	});

	it('has a prefix of 622207 and a length of 16', function() {
		assert(detectNetwork('6222077580261881') === 'China UnionPay');
	});

	it('has a prefix of 622208 and a length of 16', function() {
		assert(detectNetwork('6222085650902422') === 'China UnionPay');
	});

	it('has a prefix of 622209 and a length of 16', function() {
		assert(detectNetwork('6222097874745925') === 'China UnionPay');
	});

	it('has a prefix of 622210 and a length of 16', function() {
		assert(detectNetwork('6222108447625257') === 'China UnionPay');
	});

	it('has a prefix of 622211 and a length of 16', function() {
		assert(detectNetwork('6222117716424536') === 'China UnionPay');
	});

	it('has a prefix of 622212 and a length of 16', function() {
		assert(detectNetwork('6222123133620859') === 'China UnionPay');
	});

	it('has a prefix of 622213 and a length of 16', function() {
		assert(detectNetwork('6222132593876039') === 'China UnionPay');
	});

	it('has a prefix of 622214 and a length of 16', function() {
		assert(detectNetwork('6222144405207167') === 'China UnionPay');
	});

	it('has a prefix of 622215 and a length of 16', function() {
		assert(detectNetwork('6222155813241698') === 'China UnionPay');
	});

	it('has a prefix of 622216 and a length of 16', function() {
		assert(detectNetwork('6222161545011694') === 'China UnionPay');
	});

	it('has a prefix of 622217 and a length of 16', function() {
		assert(detectNetwork('6222170694581345') === 'China UnionPay');
	});

	it('has a prefix of 622218 and a length of 16', function() {
		assert(detectNetwork('6222185336132165') === 'China UnionPay');
	});

	it('has a prefix of 622219 and a length of 16', function() {
		assert(detectNetwork('6222196121079797') === 'China UnionPay');
	});

	it('has a prefix of 622220 and a length of 16', function() {
		assert(detectNetwork('6222206120037582') === 'China UnionPay');
	});

	it('has a prefix of 622221 and a length of 16', function() {
		assert(detectNetwork('6222210891885861') === 'China UnionPay');
	});

	it('has a prefix of 622222 and a length of 16', function() {
		assert(detectNetwork('6222224153570558') === 'China UnionPay');
	});

	it('has a prefix of 622223 and a length of 16', function() {
		assert(detectNetwork('6222232567518898') === 'China UnionPay');
	});

	it('has a prefix of 622224 and a length of 16', function() {
		assert(detectNetwork('6222242613675701') === 'China UnionPay');
	});

	it('has a prefix of 622225 and a length of 16', function() {
		assert(detectNetwork('6222257591466368') === 'China UnionPay');
	});

	it('has a prefix of 622226 and a length of 16', function() {
		assert(detectNetwork('6222262265419780') === 'China UnionPay');
	});

	it('has a prefix of 622227 and a length of 16', function() {
		assert(detectNetwork('6222271647340680') === 'China UnionPay');
	});

	it('has a prefix of 622228 and a length of 16', function() {
		assert(detectNetwork('6222284210838216') === 'China UnionPay');
	});

	it('has a prefix of 622229 and a length of 16', function() {
		assert(detectNetwork('6222294589452085') === 'China UnionPay');
	});

	it('has a prefix of 622230 and a length of 16', function() {
		assert(detectNetwork('6222303495852247') === 'China UnionPay');
	});

	it('has a prefix of 622231 and a length of 16', function() {
		assert(detectNetwork('6222318599019702') === 'China UnionPay');
	});

	it('has a prefix of 622232 and a length of 16', function() {
		assert(detectNetwork('6222329898669146') === 'China UnionPay');
	});

	it('has a prefix of 622233 and a length of 16', function() {
		assert(detectNetwork('6222337159101833') === 'China UnionPay');
	});

	it('has a prefix of 622234 and a length of 16', function() {
		assert(detectNetwork('6222342806252042') === 'China UnionPay');
	});

	it('has a prefix of 622235 and a length of 16', function() {
		assert(detectNetwork('6222353511786458') === 'China UnionPay');
	});

	it('has a prefix of 622236 and a length of 16', function() {
		assert(detectNetwork('6222365967433410') === 'China UnionPay');
	});

	it('has a prefix of 622237 and a length of 16', function() {
		assert(detectNetwork('6222378225429898') === 'China UnionPay');
	});

	it('has a prefix of 622238 and a length of 16', function() {
		assert(detectNetwork('6222382360410889') === 'China UnionPay');
	});

	it('has a prefix of 622239 and a length of 16', function() {
		assert(detectNetwork('6222398255011006') === 'China UnionPay');
	});

	it('has a prefix of 622240 and a length of 16', function() {
		assert(detectNetwork('6222401654897177') === 'China UnionPay');
	});

	it('has a prefix of 622241 and a length of 16', function() {
		assert(detectNetwork('6222415164144407') === 'China UnionPay');
	});

	it('has a prefix of 622242 and a length of 16', function() {
		assert(detectNetwork('6222423477155750') === 'China UnionPay');
	});

	it('has a prefix of 622243 and a length of 16', function() {
		assert(detectNetwork('6222435305854932') === 'China UnionPay');
	});

	it('has a prefix of 622244 and a length of 16', function() {
		assert(detectNetwork('6222446772374701') === 'China UnionPay');
	});

	it('has a prefix of 622245 and a length of 16', function() {
		assert(detectNetwork('6222455053584647') === 'China UnionPay');
	});

	it('has a prefix of 622246 and a length of 16', function() {
		assert(detectNetwork('6222462661885212') === 'China UnionPay');
	});

	it('has a prefix of 622247 and a length of 16', function() {
		assert(detectNetwork('6222479901304092') === 'China UnionPay');
	});

	it('has a prefix of 622248 and a length of 16', function() {
		assert(detectNetwork('6222485847074570') === 'China UnionPay');
	});

	it('has a prefix of 622249 and a length of 16', function() {
		assert(detectNetwork('6222494898976569') === 'China UnionPay');
	});

	it('has a prefix of 622250 and a length of 16', function() {
		assert(detectNetwork('6222504216234061') === 'China UnionPay');
	});

	it('has a prefix of 622251 and a length of 16', function() {
		assert(detectNetwork('6222514831051460') === 'China UnionPay');
	});

	it('has a prefix of 622252 and a length of 16', function() {
		assert(detectNetwork('6222524875795652') === 'China UnionPay');
	});

	it('has a prefix of 622253 and a length of 16', function() {
		assert(detectNetwork('6222537239105848') === 'China UnionPay');
	});

	it('has a prefix of 622254 and a length of 16', function() {
		assert(detectNetwork('6222546393644831') === 'China UnionPay');
	});

	it('has a prefix of 622255 and a length of 16', function() {
		assert(detectNetwork('6222557659248948') === 'China UnionPay');
	});

	it('has a prefix of 622256 and a length of 16', function() {
		assert(detectNetwork('6222566755359683') === 'China UnionPay');
	});

	it('has a prefix of 622257 and a length of 16', function() {
		assert(detectNetwork('6222579865790313') === 'China UnionPay');
	});

	it('has a prefix of 622258 and a length of 16', function() {
		assert(detectNetwork('6222583827760273') === 'China UnionPay');
	});

	it('has a prefix of 622259 and a length of 16', function() {
		assert(detectNetwork('6222599185172428') === 'China UnionPay');
	});

	it('has a prefix of 622260 and a length of 16', function() {
		assert(detectNetwork('6222609710074940') === 'China UnionPay');
	});

	it('has a prefix of 622261 and a length of 16', function() {
		assert(detectNetwork('6222619285495000') === 'China UnionPay');
	});

	it('has a prefix of 622262 and a length of 16', function() {
		assert(detectNetwork('6222623709559657') === 'China UnionPay');
	});

	it('has a prefix of 622263 and a length of 16', function() {
		assert(detectNetwork('6222632403418759') === 'China UnionPay');
	});

	it('has a prefix of 622264 and a length of 16', function() {
		assert(detectNetwork('6222648923749428') === 'China UnionPay');
	});

	it('has a prefix of 622265 and a length of 16', function() {
		assert(detectNetwork('6222656009970216') === 'China UnionPay');
	});

	it('has a prefix of 622266 and a length of 16', function() {
		assert(detectNetwork('6222666380932192') === 'China UnionPay');
	});

	it('has a prefix of 622267 and a length of 16', function() {
		assert(detectNetwork('6222679260550003') === 'China UnionPay');
	});

	it('has a prefix of 622268 and a length of 16', function() {
		assert(detectNetwork('6222686110060143') === 'China UnionPay');
	});

	it('has a prefix of 622269 and a length of 16', function() {
		assert(detectNetwork('6222690781693801') === 'China UnionPay');
	});

	it('has a prefix of 622270 and a length of 16', function() {
		assert(detectNetwork('6222703910884981') === 'China UnionPay');
	});

	it('has a prefix of 622271 and a length of 16', function() {
		assert(detectNetwork('6222714281874337') === 'China UnionPay');
	});

	it('has a prefix of 622272 and a length of 16', function() {
		assert(detectNetwork('6222723376705409') === 'China UnionPay');
	});

	it('has a prefix of 622273 and a length of 16', function() {
		assert(detectNetwork('6222739332215611') === 'China UnionPay');
	});

	it('has a prefix of 622274 and a length of 16', function() {
		assert(detectNetwork('6222744354929311') === 'China UnionPay');
	});

	it('has a prefix of 622275 and a length of 16', function() {
		assert(detectNetwork('6222752054726353') === 'China UnionPay');
	});

	it('has a prefix of 622276 and a length of 16', function() {
		assert(detectNetwork('6222768237753365') === 'China UnionPay');
	});

	it('has a prefix of 622277 and a length of 16', function() {
		assert(detectNetwork('6222777660754664') === 'China UnionPay');
	});

	it('has a prefix of 622278 and a length of 16', function() {
		assert(detectNetwork('6222788653278067') === 'China UnionPay');
	});

	it('has a prefix of 622279 and a length of 16', function() {
		assert(detectNetwork('6222797849122678') === 'China UnionPay');
	});

	it('has a prefix of 622280 and a length of 16', function() {
		assert(detectNetwork('6222802257450990') === 'China UnionPay');
	});

	it('has a prefix of 622281 and a length of 16', function() {
		assert(detectNetwork('6222818874387386') === 'China UnionPay');
	});

	it('has a prefix of 622282 and a length of 16', function() {
		assert(detectNetwork('6222821135790982') === 'China UnionPay');
	});

	it('has a prefix of 622283 and a length of 16', function() {
		assert(detectNetwork('6222833999619481') === 'China UnionPay');
	});

	it('has a prefix of 622284 and a length of 16', function() {
		assert(detectNetwork('6222843027410252') === 'China UnionPay');
	});

	it('has a prefix of 622285 and a length of 16', function() {
		assert(detectNetwork('6222855379030310') === 'China UnionPay');
	});

	it('has a prefix of 622286 and a length of 16', function() {
		assert(detectNetwork('6222860629215837') === 'China UnionPay');
	});

	it('has a prefix of 622287 and a length of 16', function() {
		assert(detectNetwork('6222878688790952') === 'China UnionPay');
	});

	it('has a prefix of 622288 and a length of 16', function() {
		assert(detectNetwork('6222881590623390') === 'China UnionPay');
	});

	it('has a prefix of 622289 and a length of 16', function() {
		assert(detectNetwork('6222892195048978') === 'China UnionPay');
	});

	it('has a prefix of 622290 and a length of 16', function() {
		assert(detectNetwork('6222909859255292') === 'China UnionPay');
	});

	it('has a prefix of 622291 and a length of 16', function() {
		assert(detectNetwork('6222914957256216') === 'China UnionPay');
	});

	it('has a prefix of 622292 and a length of 16', function() {
		assert(detectNetwork('6222920889373936') === 'China UnionPay');
	});

	it('has a prefix of 622293 and a length of 16', function() {
		assert(detectNetwork('6222936714003650') === 'China UnionPay');
	});

	it('has a prefix of 622294 and a length of 16', function() {
		assert(detectNetwork('6222948381386625') === 'China UnionPay');
	});

	it('has a prefix of 622295 and a length of 16', function() {
		assert(detectNetwork('6222954094996035') === 'China UnionPay');
	});

	it('has a prefix of 622296 and a length of 16', function() {
		assert(detectNetwork('6222967645890871') === 'China UnionPay');
	});

	it('has a prefix of 622297 and a length of 16', function() {
		assert(detectNetwork('6222971469407972') === 'China UnionPay');
	});

	it('has a prefix of 622298 and a length of 16', function() {
		assert(detectNetwork('6222987028516681') === 'China UnionPay');
	});

	it('has a prefix of 622299 and a length of 16', function() {
		assert(detectNetwork('6222999834096985') === 'China UnionPay');
	});

	it('has a prefix of 622300 and a length of 16', function() {
		assert(detectNetwork('6223004734465485') === 'China UnionPay');
	});

	it('has a prefix of 622301 and a length of 16', function() {
		assert(detectNetwork('6223014609078944') === 'China UnionPay');
	});

	it('has a prefix of 622302 and a length of 16', function() {
		assert(detectNetwork('6223026038436645') === 'China UnionPay');
	});

	it('has a prefix of 622303 and a length of 16', function() {
		assert(detectNetwork('6223037644479780') === 'China UnionPay');
	});

	it('has a prefix of 622304 and a length of 16', function() {
		assert(detectNetwork('6223040312366083') === 'China UnionPay');
	});

	it('has a prefix of 622305 and a length of 16', function() {
		assert(detectNetwork('6223052430908550') === 'China UnionPay');
	});

	it('has a prefix of 622306 and a length of 16', function() {
		assert(detectNetwork('6223068862001812') === 'China UnionPay');
	});

	it('has a prefix of 622307 and a length of 16', function() {
		assert(detectNetwork('6223072619792209') === 'China UnionPay');
	});

	it('has a prefix of 622308 and a length of 16', function() {
		assert(detectNetwork('6223085857306569') === 'China UnionPay');
	});

	it('has a prefix of 622309 and a length of 16', function() {
		assert(detectNetwork('6223097323596242') === 'China UnionPay');
	});

	it('has a prefix of 622310 and a length of 16', function() {
		assert(detectNetwork('6223102159137078') === 'China UnionPay');
	});

	it('has a prefix of 622311 and a length of 16', function() {
		assert(detectNetwork('6223119949921411') === 'China UnionPay');
	});

	it('has a prefix of 622312 and a length of 16', function() {
		assert(detectNetwork('6223122263417193') === 'China UnionPay');
	});

	it('has a prefix of 622313 and a length of 16', function() {
		assert(detectNetwork('6223132077544218') === 'China UnionPay');
	});

	it('has a prefix of 622314 and a length of 16', function() {
		assert(detectNetwork('6223145018863915') === 'China UnionPay');
	});

	it('has a prefix of 622315 and a length of 16', function() {
		assert(detectNetwork('6223156670131434') === 'China UnionPay');
	});

	it('has a prefix of 622316 and a length of 16', function() {
		assert(detectNetwork('6223166092596574') === 'China UnionPay');
	});

	it('has a prefix of 622317 and a length of 16', function() {
		assert(detectNetwork('6223171816105669') === 'China UnionPay');
	});

	it('has a prefix of 622318 and a length of 16', function() {
		assert(detectNetwork('6223189360416009') === 'China UnionPay');
	});

	it('has a prefix of 622319 and a length of 16', function() {
		assert(detectNetwork('6223193706465403') === 'China UnionPay');
	});

	it('has a prefix of 622320 and a length of 16', function() {
		assert(detectNetwork('6223204935776278') === 'China UnionPay');
	});

	it('has a prefix of 622321 and a length of 16', function() {
		assert(detectNetwork('6223219610336326') === 'China UnionPay');
	});

	it('has a prefix of 622322 and a length of 16', function() {
		assert(detectNetwork('6223221597852094') === 'China UnionPay');
	});

	it('has a prefix of 622323 and a length of 16', function() {
		assert(detectNetwork('6223233275478470') === 'China UnionPay');
	});

	it('has a prefix of 622324 and a length of 16', function() {
		assert(detectNetwork('6223244666375379') === 'China UnionPay');
	});

	it('has a prefix of 622325 and a length of 16', function() {
		assert(detectNetwork('6223258318824080') === 'China UnionPay');
	});

	it('has a prefix of 622326 and a length of 16', function() {
		assert(detectNetwork('6223266543827356') === 'China UnionPay');
	});

	it('has a prefix of 622327 and a length of 16', function() {
		assert(detectNetwork('6223275808068401') === 'China UnionPay');
	});

	it('has a prefix of 622328 and a length of 16', function() {
		assert(detectNetwork('6223286950967971') === 'China UnionPay');
	});

	it('has a prefix of 622329 and a length of 16', function() {
		assert(detectNetwork('6223296201309317') === 'China UnionPay');
	});

	it('has a prefix of 622330 and a length of 16', function() {
		assert(detectNetwork('6223307303561497') === 'China UnionPay');
	});

	it('has a prefix of 622331 and a length of 16', function() {
		assert(detectNetwork('6223319591324331') === 'China UnionPay');
	});

	it('has a prefix of 622332 and a length of 16', function() {
		assert(detectNetwork('6223326538096310') === 'China UnionPay');
	});

	it('has a prefix of 622333 and a length of 16', function() {
		assert(detectNetwork('6223335764936796') === 'China UnionPay');
	});

	it('has a prefix of 622334 and a length of 16', function() {
		assert(detectNetwork('6223342072713722') === 'China UnionPay');
	});

	it('has a prefix of 622335 and a length of 16', function() {
		assert(detectNetwork('6223352273224564') === 'China UnionPay');
	});

	it('has a prefix of 622336 and a length of 16', function() {
		assert(detectNetwork('6223366315553017') === 'China UnionPay');
	});

	it('has a prefix of 622337 and a length of 16', function() {
		assert(detectNetwork('6223370202268485') === 'China UnionPay');
	});

	it('has a prefix of 622338 and a length of 16', function() {
		assert(detectNetwork('6223381308595219') === 'China UnionPay');
	});

	it('has a prefix of 622339 and a length of 16', function() {
		assert(detectNetwork('6223390255572389') === 'China UnionPay');
	});

	it('has a prefix of 622340 and a length of 16', function() {
		assert(detectNetwork('6223404561286064') === 'China UnionPay');
	});

	it('has a prefix of 622341 and a length of 16', function() {
		assert(detectNetwork('6223416099107346') === 'China UnionPay');
	});

	it('has a prefix of 622342 and a length of 16', function() {
		assert(detectNetwork('6223422108765907') === 'China UnionPay');
	});

	it('has a prefix of 622343 and a length of 16', function() {
		assert(detectNetwork('6223439038968191') === 'China UnionPay');
	});

	it('has a prefix of 622344 and a length of 16', function() {
		assert(detectNetwork('6223446863295046') === 'China UnionPay');
	});

	it('has a prefix of 622345 and a length of 16', function() {
		assert(detectNetwork('6223451474876764') === 'China UnionPay');
	});

	it('has a prefix of 622346 and a length of 16', function() {
		assert(detectNetwork('6223467195460136') === 'China UnionPay');
	});

	it('has a prefix of 622347 and a length of 16', function() {
		assert(detectNetwork('6223479014531175') === 'China UnionPay');
	});

	it('has a prefix of 622348 and a length of 16', function() {
		assert(detectNetwork('6223489907577788') === 'China UnionPay');
	});

	it('has a prefix of 622349 and a length of 16', function() {
		assert(detectNetwork('6223495902252611') === 'China UnionPay');
	});

	it('has a prefix of 622350 and a length of 16', function() {
		assert(detectNetwork('6223502783956057') === 'China UnionPay');
	});

	it('has a prefix of 622351 and a length of 16', function() {
		assert(detectNetwork('6223515547695583') === 'China UnionPay');
	});

	it('has a prefix of 622352 and a length of 16', function() {
		assert(detectNetwork('6223523331352377') === 'China UnionPay');
	});

	it('has a prefix of 622353 and a length of 16', function() {
		assert(detectNetwork('6223536993121065') === 'China UnionPay');
	});

	it('has a prefix of 622354 and a length of 16', function() {
		assert(detectNetwork('6223548626397961') === 'China UnionPay');
	});

	it('has a prefix of 622355 and a length of 16', function() {
		assert(detectNetwork('6223552382824717') === 'China UnionPay');
	});

	it('has a prefix of 622356 and a length of 16', function() {
		assert(detectNetwork('6223562420034509') === 'China UnionPay');
	});

	it('has a prefix of 622357 and a length of 16', function() {
		assert(detectNetwork('6223571067679010') === 'China UnionPay');
	});

	it('has a prefix of 622358 and a length of 16', function() {
		assert(detectNetwork('6223580635789600') === 'China UnionPay');
	});

	it('has a prefix of 622359 and a length of 16', function() {
		assert(detectNetwork('6223594051241137') === 'China UnionPay');
	});

	it('has a prefix of 622360 and a length of 16', function() {
		assert(detectNetwork('6223608502646051') === 'China UnionPay');
	});

	it('has a prefix of 622361 and a length of 16', function() {
		assert(detectNetwork('6223615705982491') === 'China UnionPay');
	});

	it('has a prefix of 622362 and a length of 16', function() {
		assert(detectNetwork('6223628983554906') === 'China UnionPay');
	});

	it('has a prefix of 622363 and a length of 16', function() {
		assert(detectNetwork('6223632453555620') === 'China UnionPay');
	});

	it('has a prefix of 622364 and a length of 16', function() {
		assert(detectNetwork('6223646133074500') === 'China UnionPay');
	});

	it('has a prefix of 622365 and a length of 16', function() {
		assert(detectNetwork('6223659484517918') === 'China UnionPay');
	});

	it('has a prefix of 622366 and a length of 16', function() {
		assert(detectNetwork('6223664731573514') === 'China UnionPay');
	});

	it('has a prefix of 622367 and a length of 16', function() {
		assert(detectNetwork('6223671153725928') === 'China UnionPay');
	});

	it('has a prefix of 622368 and a length of 16', function() {
		assert(detectNetwork('6223683478890245') === 'China UnionPay');
	});

	it('has a prefix of 622369 and a length of 16', function() {
		assert(detectNetwork('6223693075082827') === 'China UnionPay');
	});

	it('has a prefix of 622370 and a length of 16', function() {
		assert(detectNetwork('6223709728120102') === 'China UnionPay');
	});

	it('has a prefix of 622371 and a length of 16', function() {
		assert(detectNetwork('6223713677372139') === 'China UnionPay');
	});

	it('has a prefix of 622372 and a length of 16', function() {
		assert(detectNetwork('6223722954710432') === 'China UnionPay');
	});

	it('has a prefix of 622373 and a length of 16', function() {
		assert(detectNetwork('6223739641055630') === 'China UnionPay');
	});

	it('has a prefix of 622374 and a length of 16', function() {
		assert(detectNetwork('6223745962319946') === 'China UnionPay');
	});

	it('has a prefix of 622375 and a length of 16', function() {
		assert(detectNetwork('6223757459141094') === 'China UnionPay');
	});

	it('has a prefix of 622376 and a length of 16', function() {
		assert(detectNetwork('6223762246746444') === 'China UnionPay');
	});

	it('has a prefix of 622377 and a length of 16', function() {
		assert(detectNetwork('6223779202603808') === 'China UnionPay');
	});

	it('has a prefix of 622378 and a length of 16', function() {
		assert(detectNetwork('6223781015771098') === 'China UnionPay');
	});

	it('has a prefix of 622379 and a length of 16', function() {
		assert(detectNetwork('6223791021442139') === 'China UnionPay');
	});

	it('has a prefix of 622380 and a length of 16', function() {
		assert(detectNetwork('6223808316323311') === 'China UnionPay');
	});

	it('has a prefix of 622381 and a length of 16', function() {
		assert(detectNetwork('6223818297091611') === 'China UnionPay');
	});

	it('has a prefix of 622382 and a length of 16', function() {
		assert(detectNetwork('6223827304862998') === 'China UnionPay');
	});

	it('has a prefix of 622383 and a length of 16', function() {
		assert(detectNetwork('6223835183080736') === 'China UnionPay');
	});

	it('has a prefix of 622384 and a length of 16', function() {
		assert(detectNetwork('6223845063158723') === 'China UnionPay');
	});

	it('has a prefix of 622385 and a length of 16', function() {
		assert(detectNetwork('6223850189299876') === 'China UnionPay');
	});

	it('has a prefix of 622386 and a length of 16', function() {
		assert(detectNetwork('6223869276325557') === 'China UnionPay');
	});

	it('has a prefix of 622387 and a length of 16', function() {
		assert(detectNetwork('6223876402046493') === 'China UnionPay');
	});

	it('has a prefix of 622388 and a length of 16', function() {
		assert(detectNetwork('6223882604911599') === 'China UnionPay');
	});

	it('has a prefix of 622389 and a length of 16', function() {
		assert(detectNetwork('6223896466316105') === 'China UnionPay');
	});

	it('has a prefix of 622390 and a length of 16', function() {
		assert(detectNetwork('6223906359547896') === 'China UnionPay');
	});

	it('has a prefix of 622391 and a length of 16', function() {
		assert(detectNetwork('6223917090705030') === 'China UnionPay');
	});

	it('has a prefix of 622392 and a length of 16', function() {
		assert(detectNetwork('6223926619653394') === 'China UnionPay');
	});

	it('has a prefix of 622393 and a length of 16', function() {
		assert(detectNetwork('6223939914282930') === 'China UnionPay');
	});

	it('has a prefix of 622394 and a length of 16', function() {
		assert(detectNetwork('6223947782687908') === 'China UnionPay');
	});

	it('has a prefix of 622395 and a length of 16', function() {
		assert(detectNetwork('6223959122253238') === 'China UnionPay');
	});

	it('has a prefix of 622396 and a length of 16', function() {
		assert(detectNetwork('6223960281229553') === 'China UnionPay');
	});

	it('has a prefix of 622397 and a length of 16', function() {
		assert(detectNetwork('6223978305692689') === 'China UnionPay');
	});

	it('has a prefix of 622398 and a length of 16', function() {
		assert(detectNetwork('6223987743537434') === 'China UnionPay');
	});

	it('has a prefix of 622399 and a length of 16', function() {
		assert(detectNetwork('6223992331050820') === 'China UnionPay');
	});

	it('has a prefix of 622400 and a length of 16', function() {
		assert(detectNetwork('6224006924789583') === 'China UnionPay');
	});

	it('has a prefix of 622401 and a length of 16', function() {
		assert(detectNetwork('6224015091184657') === 'China UnionPay');
	});

	it('has a prefix of 622402 and a length of 16', function() {
		assert(detectNetwork('6224024318202144') === 'China UnionPay');
	});

	it('has a prefix of 622403 and a length of 16', function() {
		assert(detectNetwork('6224036424530628') === 'China UnionPay');
	});

	it('has a prefix of 622404 and a length of 16', function() {
		assert(detectNetwork('6224040331624565') === 'China UnionPay');
	});

	it('has a prefix of 622405 and a length of 16', function() {
		assert(detectNetwork('6224052604094909') === 'China UnionPay');
	});

	it('has a prefix of 622406 and a length of 16', function() {
		assert(detectNetwork('6224061313787249') === 'China UnionPay');
	});

	it('has a prefix of 622407 and a length of 16', function() {
		assert(detectNetwork('6224075537223943') === 'China UnionPay');
	});

	it('has a prefix of 622408 and a length of 16', function() {
		assert(detectNetwork('6224089741388881') === 'China UnionPay');
	});

	it('has a prefix of 622409 and a length of 16', function() {
		assert(detectNetwork('6224096757984834') === 'China UnionPay');
	});

	it('has a prefix of 622410 and a length of 16', function() {
		assert(detectNetwork('6224102994848335') === 'China UnionPay');
	});

	it('has a prefix of 622411 and a length of 16', function() {
		assert(detectNetwork('6224116950584625') === 'China UnionPay');
	});

	it('has a prefix of 622412 and a length of 16', function() {
		assert(detectNetwork('6224122039123367') === 'China UnionPay');
	});

	it('has a prefix of 622413 and a length of 16', function() {
		assert(detectNetwork('6224134604954929') === 'China UnionPay');
	});

	it('has a prefix of 622414 and a length of 16', function() {
		assert(detectNetwork('6224143922488947') === 'China UnionPay');
	});

	it('has a prefix of 622415 and a length of 16', function() {
		assert(detectNetwork('6224152301587815') === 'China UnionPay');
	});

	it('has a prefix of 622416 and a length of 16', function() {
		assert(detectNetwork('6224169614023190') === 'China UnionPay');
	});

	it('has a prefix of 622417 and a length of 16', function() {
		assert(detectNetwork('6224179769296027') === 'China UnionPay');
	});

	it('has a prefix of 622418 and a length of 16', function() {
		assert(detectNetwork('6224183830351169') === 'China UnionPay');
	});

	it('has a prefix of 622419 and a length of 16', function() {
		assert(detectNetwork('6224197220025670') === 'China UnionPay');
	});

	it('has a prefix of 622420 and a length of 16', function() {
		assert(detectNetwork('6224208512168191') === 'China UnionPay');
	});

	it('has a prefix of 622421 and a length of 16', function() {
		assert(detectNetwork('6224214141986755') === 'China UnionPay');
	});

	it('has a prefix of 622422 and a length of 16', function() {
		assert(detectNetwork('6224226101099538') === 'China UnionPay');
	});

	it('has a prefix of 622423 and a length of 16', function() {
		assert(detectNetwork('6224236601643977') === 'China UnionPay');
	});

	it('has a prefix of 622424 and a length of 16', function() {
		assert(detectNetwork('6224247219523485') === 'China UnionPay');
	});

	it('has a prefix of 622425 and a length of 16', function() {
		assert(detectNetwork('6224251946125802') === 'China UnionPay');
	});

	it('has a prefix of 622426 and a length of 16', function() {
		assert(detectNetwork('6224263183392927') === 'China UnionPay');
	});

	it('has a prefix of 622427 and a length of 16', function() {
		assert(detectNetwork('6224271639774325') === 'China UnionPay');
	});

	it('has a prefix of 622428 and a length of 16', function() {
		assert(detectNetwork('6224284034800209') === 'China UnionPay');
	});

	it('has a prefix of 622429 and a length of 16', function() {
		assert(detectNetwork('6224294043105048') === 'China UnionPay');
	});

	it('has a prefix of 622430 and a length of 16', function() {
		assert(detectNetwork('6224308987953587') === 'China UnionPay');
	});

	it('has a prefix of 622431 and a length of 16', function() {
		assert(detectNetwork('6224311705057371') === 'China UnionPay');
	});

	it('has a prefix of 622432 and a length of 16', function() {
		assert(detectNetwork('6224325168079753') === 'China UnionPay');
	});

	it('has a prefix of 622433 and a length of 16', function() {
		assert(detectNetwork('6224339282450625') === 'China UnionPay');
	});

	it('has a prefix of 622434 and a length of 16', function() {
		assert(detectNetwork('6224343141936217') === 'China UnionPay');
	});

	it('has a prefix of 622435 and a length of 16', function() {
		assert(detectNetwork('6224351270427195') === 'China UnionPay');
	});

	it('has a prefix of 622436 and a length of 16', function() {
		assert(detectNetwork('6224367905310121') === 'China UnionPay');
	});

	it('has a prefix of 622437 and a length of 16', function() {
		assert(detectNetwork('6224371574136141') === 'China UnionPay');
	});

	it('has a prefix of 622438 and a length of 16', function() {
		assert(detectNetwork('6224386279555058') === 'China UnionPay');
	});

	it('has a prefix of 622439 and a length of 16', function() {
		assert(detectNetwork('6224395152009046') === 'China UnionPay');
	});

	it('has a prefix of 622440 and a length of 16', function() {
		assert(detectNetwork('6224409340962302') === 'China UnionPay');
	});

	it('has a prefix of 622441 and a length of 16', function() {
		assert(detectNetwork('6224415897288851') === 'China UnionPay');
	});

	it('has a prefix of 622442 and a length of 16', function() {
		assert(detectNetwork('6224423201408730') === 'China UnionPay');
	});

	it('has a prefix of 622443 and a length of 16', function() {
		assert(detectNetwork('6224436419611406') === 'China UnionPay');
	});

	it('has a prefix of 622444 and a length of 16', function() {
		assert(detectNetwork('6224442015480607') === 'China UnionPay');
	});

	it('has a prefix of 622445 and a length of 16', function() {
		assert(detectNetwork('6224458432250904') === 'China UnionPay');
	});

	it('has a prefix of 622446 and a length of 16', function() {
		assert(detectNetwork('6224461406520079') === 'China UnionPay');
	});

	it('has a prefix of 622447 and a length of 16', function() {
		assert(detectNetwork('6224474677839265') === 'China UnionPay');
	});

	it('has a prefix of 622448 and a length of 16', function() {
		assert(detectNetwork('6224481709414041') === 'China UnionPay');
	});

	it('has a prefix of 622449 and a length of 16', function() {
		assert(detectNetwork('6224491844244352') === 'China UnionPay');
	});

	it('has a prefix of 622450 and a length of 16', function() {
		assert(detectNetwork('6224507485662208') === 'China UnionPay');
	});

	it('has a prefix of 622451 and a length of 16', function() {
		assert(detectNetwork('6224516734418638') === 'China UnionPay');
	});

	it('has a prefix of 622452 and a length of 16', function() {
		assert(detectNetwork('6224524036667053') === 'China UnionPay');
	});

	it('has a prefix of 622453 and a length of 16', function() {
		assert(detectNetwork('6224534408379181') === 'China UnionPay');
	});

	it('has a prefix of 622454 and a length of 16', function() {
		assert(detectNetwork('6224541948340681') === 'China UnionPay');
	});

	it('has a prefix of 622455 and a length of 16', function() {
		assert(detectNetwork('6224558352487213') === 'China UnionPay');
	});

	it('has a prefix of 622456 and a length of 16', function() {
		assert(detectNetwork('6224560671350039') === 'China UnionPay');
	});

	it('has a prefix of 622457 and a length of 16', function() {
		assert(detectNetwork('6224576073136764') === 'China UnionPay');
	});

	it('has a prefix of 622458 and a length of 16', function() {
		assert(detectNetwork('6224580498039613') === 'China UnionPay');
	});

	it('has a prefix of 622459 and a length of 16', function() {
		assert(detectNetwork('6224590048725146') === 'China UnionPay');
	});

	it('has a prefix of 622460 and a length of 16', function() {
		assert(detectNetwork('6224608979124288') === 'China UnionPay');
	});

	it('has a prefix of 622461 and a length of 16', function() {
		assert(detectNetwork('6224614875226994') === 'China UnionPay');
	});

	it('has a prefix of 622462 and a length of 16', function() {
		assert(detectNetwork('6224629984726337') === 'China UnionPay');
	});

	it('has a prefix of 622463 and a length of 16', function() {
		assert(detectNetwork('6224637812207134') === 'China UnionPay');
	});

	it('has a prefix of 622464 and a length of 16', function() {
		assert(detectNetwork('6224644606491706') === 'China UnionPay');
	});

	it('has a prefix of 622465 and a length of 16', function() {
		assert(detectNetwork('6224656156065000') === 'China UnionPay');
	});

	it('has a prefix of 622466 and a length of 16', function() {
		assert(detectNetwork('6224663111297608') === 'China UnionPay');
	});

	it('has a prefix of 622467 and a length of 16', function() {
		assert(detectNetwork('6224678335098761') === 'China UnionPay');
	});

	it('has a prefix of 622468 and a length of 16', function() {
		assert(detectNetwork('6224680714994322') === 'China UnionPay');
	});

	it('has a prefix of 622469 and a length of 16', function() {
		assert(detectNetwork('6224690769929664') === 'China UnionPay');
	});

	it('has a prefix of 622470 and a length of 16', function() {
		assert(detectNetwork('6224701585270231') === 'China UnionPay');
	});

	it('has a prefix of 622471 and a length of 16', function() {
		assert(detectNetwork('6224715996512214') === 'China UnionPay');
	});

	it('has a prefix of 622472 and a length of 16', function() {
		assert(detectNetwork('6224721702196959') === 'China UnionPay');
	});

	it('has a prefix of 622473 and a length of 16', function() {
		assert(detectNetwork('6224739534349395') === 'China UnionPay');
	});

	it('has a prefix of 622474 and a length of 16', function() {
		assert(detectNetwork('6224740922914429') === 'China UnionPay');
	});

	it('has a prefix of 622475 and a length of 16', function() {
		assert(detectNetwork('6224755682444151') === 'China UnionPay');
	});

	it('has a prefix of 622476 and a length of 16', function() {
		assert(detectNetwork('6224764019395649') === 'China UnionPay');
	});

	it('has a prefix of 622477 and a length of 16', function() {
		assert(detectNetwork('6224773695812399') === 'China UnionPay');
	});

	it('has a prefix of 622478 and a length of 16', function() {
		assert(detectNetwork('6224787628263336') === 'China UnionPay');
	});

	it('has a prefix of 622479 and a length of 16', function() {
		assert(detectNetwork('6224791030272934') === 'China UnionPay');
	});

	it('has a prefix of 622480 and a length of 16', function() {
		assert(detectNetwork('6224804815155914') === 'China UnionPay');
	});

	it('has a prefix of 622481 and a length of 16', function() {
		assert(detectNetwork('6224816479744683') === 'China UnionPay');
	});

	it('has a prefix of 622482 and a length of 16', function() {
		assert(detectNetwork('6224828894602789') === 'China UnionPay');
	});

	it('has a prefix of 622483 and a length of 16', function() {
		assert(detectNetwork('6224836468056749') === 'China UnionPay');
	});

	it('has a prefix of 622484 and a length of 16', function() {
		assert(detectNetwork('6224842868529498') === 'China UnionPay');
	});

	it('has a prefix of 622485 and a length of 16', function() {
		assert(detectNetwork('6224854828243075') === 'China UnionPay');
	});

	it('has a prefix of 622486 and a length of 16', function() {
		assert(detectNetwork('6224862572821075') === 'China UnionPay');
	});

	it('has a prefix of 622487 and a length of 16', function() {
		assert(detectNetwork('6224872246799140') === 'China UnionPay');
	});

	it('has a prefix of 622488 and a length of 16', function() {
		assert(detectNetwork('6224887981764516') === 'China UnionPay');
	});

	it('has a prefix of 622489 and a length of 16', function() {
		assert(detectNetwork('6224898932012342') === 'China UnionPay');
	});

	it('has a prefix of 622490 and a length of 16', function() {
		assert(detectNetwork('6224903963368793') === 'China UnionPay');
	});

	it('has a prefix of 622491 and a length of 16', function() {
		assert(detectNetwork('6224912428147780') === 'China UnionPay');
	});

	it('has a prefix of 622492 and a length of 16', function() {
		assert(detectNetwork('6224920729410457') === 'China UnionPay');
	});

	it('has a prefix of 622493 and a length of 16', function() {
		assert(detectNetwork('6224935135739866') === 'China UnionPay');
	});

	it('has a prefix of 622494 and a length of 16', function() {
		assert(detectNetwork('6224947163131293') === 'China UnionPay');
	});

	it('has a prefix of 622495 and a length of 16', function() {
		assert(detectNetwork('6224954508198661') === 'China UnionPay');
	});

	it('has a prefix of 622496 and a length of 16', function() {
		assert(detectNetwork('6224965523113720') === 'China UnionPay');
	});

	it('has a prefix of 622497 and a length of 16', function() {
		assert(detectNetwork('6224970361447618') === 'China UnionPay');
	});

	it('has a prefix of 622498 and a length of 16', function() {
		assert(detectNetwork('6224982398975898') === 'China UnionPay');
	});

	it('has a prefix of 622499 and a length of 16', function() {
		assert(detectNetwork('6224997798423147') === 'China UnionPay');
	});

	it('has a prefix of 622500 and a length of 16', function() {
		assert(detectNetwork('6225007884461519') === 'China UnionPay');
	});

	it('has a prefix of 622501 and a length of 16', function() {
		assert(detectNetwork('6225018037035140') === 'China UnionPay');
	});

	it('has a prefix of 622502 and a length of 16', function() {
		assert(detectNetwork('6225020669868739') === 'China UnionPay');
	});

	it('has a prefix of 622503 and a length of 16', function() {
		assert(detectNetwork('6225037626337962') === 'China UnionPay');
	});

	it('has a prefix of 622504 and a length of 16', function() {
		assert(detectNetwork('6225049683792791') === 'China UnionPay');
	});

	it('has a prefix of 622505 and a length of 16', function() {
		assert(detectNetwork('6225052702529630') === 'China UnionPay');
	});

	it('has a prefix of 622506 and a length of 16', function() {
		assert(detectNetwork('6225062056455281') === 'China UnionPay');
	});

	it('has a prefix of 622507 and a length of 16', function() {
		assert(detectNetwork('6225074972462001') === 'China UnionPay');
	});

	it('has a prefix of 622508 and a length of 16', function() {
		assert(detectNetwork('6225085488246903') === 'China UnionPay');
	});

	it('has a prefix of 622509 and a length of 16', function() {
		assert(detectNetwork('6225096604918981') === 'China UnionPay');
	});

	it('has a prefix of 622510 and a length of 16', function() {
		assert(detectNetwork('6225104951320859') === 'China UnionPay');
	});

	it('has a prefix of 622511 and a length of 16', function() {
		assert(detectNetwork('6225115785439416') === 'China UnionPay');
	});

	it('has a prefix of 622512 and a length of 16', function() {
		assert(detectNetwork('6225128762888255') === 'China UnionPay');
	});

	it('has a prefix of 622513 and a length of 16', function() {
		assert(detectNetwork('6225135425597922') === 'China UnionPay');
	});

	it('has a prefix of 622514 and a length of 16', function() {
		assert(detectNetwork('6225146732310520') === 'China UnionPay');
	});

	it('has a prefix of 622515 and a length of 16', function() {
		assert(detectNetwork('6225150255943129') === 'China UnionPay');
	});

	it('has a prefix of 622516 and a length of 16', function() {
		assert(detectNetwork('6225161930211271') === 'China UnionPay');
	});

	it('has a prefix of 622517 and a length of 16', function() {
		assert(detectNetwork('6225174669259467') === 'China UnionPay');
	});

	it('has a prefix of 622518 and a length of 16', function() {
		assert(detectNetwork('6225189272024662') === 'China UnionPay');
	});

	it('has a prefix of 622519 and a length of 16', function() {
		assert(detectNetwork('6225196494828003') === 'China UnionPay');
	});

	it('has a prefix of 622520 and a length of 16', function() {
		assert(detectNetwork('6225202907781522') === 'China UnionPay');
	});

	it('has a prefix of 622521 and a length of 16', function() {
		assert(detectNetwork('6225213855847148') === 'China UnionPay');
	});

	it('has a prefix of 622522 and a length of 16', function() {
		assert(detectNetwork('6225220179176744') === 'China UnionPay');
	});

	it('has a prefix of 622523 and a length of 16', function() {
		assert(detectNetwork('6225239033522550') === 'China UnionPay');
	});

	it('has a prefix of 622524 and a length of 16', function() {
		assert(detectNetwork('6225244299733993') === 'China UnionPay');
	});

	it('has a prefix of 622525 and a length of 16', function() {
		assert(detectNetwork('6225257454702293') === 'China UnionPay');
	});

	it('has a prefix of 622526 and a length of 16', function() {
		assert(detectNetwork('6225261878600002') === 'China UnionPay');
	});

	it('has a prefix of 622527 and a length of 16', function() {
		assert(detectNetwork('6225276880380058') === 'China UnionPay');
	});

	it('has a prefix of 622528 and a length of 16', function() {
		assert(detectNetwork('6225282530941368') === 'China UnionPay');
	});

	it('has a prefix of 622529 and a length of 16', function() {
		assert(detectNetwork('6225290841438701') === 'China UnionPay');
	});

	it('has a prefix of 622530 and a length of 16', function() {
		assert(detectNetwork('6225304622531271') === 'China UnionPay');
	});

	it('has a prefix of 622531 and a length of 16', function() {
		assert(detectNetwork('6225310490208254') === 'China UnionPay');
	});

	it('has a prefix of 622532 and a length of 16', function() {
		assert(detectNetwork('6225324911954471') === 'China UnionPay');
	});

	it('has a prefix of 622533 and a length of 16', function() {
		assert(detectNetwork('6225338507111547') === 'China UnionPay');
	});

	it('has a prefix of 622534 and a length of 16', function() {
		assert(detectNetwork('6225347905690372') === 'China UnionPay');
	});

	it('has a prefix of 622535 and a length of 16', function() {
		assert(detectNetwork('6225359593554808') === 'China UnionPay');
	});

	it('has a prefix of 622536 and a length of 16', function() {
		assert(detectNetwork('6225360264665637') === 'China UnionPay');
	});

	it('has a prefix of 622537 and a length of 16', function() {
		assert(detectNetwork('6225374574916111') === 'China UnionPay');
	});

	it('has a prefix of 622538 and a length of 16', function() {
		assert(detectNetwork('6225385235271629') === 'China UnionPay');
	});

	it('has a prefix of 622539 and a length of 16', function() {
		assert(detectNetwork('6225391540868459') === 'China UnionPay');
	});

	it('has a prefix of 622540 and a length of 16', function() {
		assert(detectNetwork('6225406892269360') === 'China UnionPay');
	});

	it('has a prefix of 622541 and a length of 16', function() {
		assert(detectNetwork('6225414091396039') === 'China UnionPay');
	});

	it('has a prefix of 622542 and a length of 16', function() {
		assert(detectNetwork('6225426515413367') === 'China UnionPay');
	});

	it('has a prefix of 622543 and a length of 16', function() {
		assert(detectNetwork('6225435099989229') === 'China UnionPay');
	});

	it('has a prefix of 622544 and a length of 16', function() {
		assert(detectNetwork('6225446832296578') === 'China UnionPay');
	});

	it('has a prefix of 622545 and a length of 16', function() {
		assert(detectNetwork('6225457949153336') === 'China UnionPay');
	});

	it('has a prefix of 622546 and a length of 16', function() {
		assert(detectNetwork('6225466590799664') === 'China UnionPay');
	});

	it('has a prefix of 622547 and a length of 16', function() {
		assert(detectNetwork('6225478061545714') === 'China UnionPay');
	});

	it('has a prefix of 622548 and a length of 16', function() {
		assert(detectNetwork('6225482110452618') === 'China UnionPay');
	});

	it('has a prefix of 622549 and a length of 16', function() {
		assert(detectNetwork('6225491433417412') === 'China UnionPay');
	});

	it('has a prefix of 622550 and a length of 16', function() {
		assert(detectNetwork('6225500235026882') === 'China UnionPay');
	});

	it('has a prefix of 622551 and a length of 16', function() {
		assert(detectNetwork('6225514986148171') === 'China UnionPay');
	});

	it('has a prefix of 622552 and a length of 16', function() {
		assert(detectNetwork('6225529605894338') === 'China UnionPay');
	});

	it('has a prefix of 622553 and a length of 16', function() {
		assert(detectNetwork('6225531029130405') === 'China UnionPay');
	});

	it('has a prefix of 622554 and a length of 16', function() {
		assert(detectNetwork('6225542542023328') === 'China UnionPay');
	});

	it('has a prefix of 622555 and a length of 16', function() {
		assert(detectNetwork('6225559438784266') === 'China UnionPay');
	});

	it('has a prefix of 622556 and a length of 16', function() {
		assert(detectNetwork('6225560917969405') === 'China UnionPay');
	});

	it('has a prefix of 622557 and a length of 16', function() {
		assert(detectNetwork('6225574925141174') === 'China UnionPay');
	});

	it('has a prefix of 622558 and a length of 16', function() {
		assert(detectNetwork('6225581046913508') === 'China UnionPay');
	});

	it('has a prefix of 622559 and a length of 16', function() {
		assert(detectNetwork('6225599090403880') === 'China UnionPay');
	});

	it('has a prefix of 622560 and a length of 16', function() {
		assert(detectNetwork('6225609215908813') === 'China UnionPay');
	});

	it('has a prefix of 622561 and a length of 16', function() {
		assert(detectNetwork('6225616960852700') === 'China UnionPay');
	});

	it('has a prefix of 622562 and a length of 16', function() {
		assert(detectNetwork('6225624699367721') === 'China UnionPay');
	});

	it('has a prefix of 622563 and a length of 16', function() {
		assert(detectNetwork('6225630773909683') === 'China UnionPay');
	});

	it('has a prefix of 622564 and a length of 16', function() {
		assert(detectNetwork('6225641595721023') === 'China UnionPay');
	});

	it('has a prefix of 622565 and a length of 16', function() {
		assert(detectNetwork('6225657432054713') === 'China UnionPay');
	});

	it('has a prefix of 622566 and a length of 16', function() {
		assert(detectNetwork('6225666045094703') === 'China UnionPay');
	});

	it('has a prefix of 622567 and a length of 16', function() {
		assert(detectNetwork('6225677702191735') === 'China UnionPay');
	});

	it('has a prefix of 622568 and a length of 16', function() {
		assert(detectNetwork('6225687887896865') === 'China UnionPay');
	});

	it('has a prefix of 622569 and a length of 16', function() {
		assert(detectNetwork('6225691044769575') === 'China UnionPay');
	});

	it('has a prefix of 622570 and a length of 16', function() {
		assert(detectNetwork('6225703510544665') === 'China UnionPay');
	});

	it('has a prefix of 622571 and a length of 16', function() {
		assert(detectNetwork('6225711874571825') === 'China UnionPay');
	});

	it('has a prefix of 622572 and a length of 16', function() {
		assert(detectNetwork('6225724159796572') === 'China UnionPay');
	});

	it('has a prefix of 622573 and a length of 16', function() {
		assert(detectNetwork('6225730759897277') === 'China UnionPay');
	});

	it('has a prefix of 622574 and a length of 16', function() {
		assert(detectNetwork('6225741395112149') === 'China UnionPay');
	});

	it('has a prefix of 622575 and a length of 16', function() {
		assert(detectNetwork('6225759137800798') === 'China UnionPay');
	});

	it('has a prefix of 622576 and a length of 16', function() {
		assert(detectNetwork('6225760726867570') === 'China UnionPay');
	});

	it('has a prefix of 622577 and a length of 16', function() {
		assert(detectNetwork('6225775518271483') === 'China UnionPay');
	});

	it('has a prefix of 622578 and a length of 16', function() {
		assert(detectNetwork('6225782547646911') === 'China UnionPay');
	});

	it('has a prefix of 622579 and a length of 16', function() {
		assert(detectNetwork('6225798817181580') === 'China UnionPay');
	});

	it('has a prefix of 622580 and a length of 16', function() {
		assert(detectNetwork('6225804752390394') === 'China UnionPay');
	});

	it('has a prefix of 622581 and a length of 16', function() {
		assert(detectNetwork('6225816264045513') === 'China UnionPay');
	});

	it('has a prefix of 622582 and a length of 16', function() {
		assert(detectNetwork('6225827230564181') === 'China UnionPay');
	});

	it('has a prefix of 622583 and a length of 16', function() {
		assert(detectNetwork('6225834545967381') === 'China UnionPay');
	});

	it('has a prefix of 622584 and a length of 16', function() {
		assert(detectNetwork('6225842397269305') === 'China UnionPay');
	});

	it('has a prefix of 622585 and a length of 16', function() {
		assert(detectNetwork('6225852260690612') === 'China UnionPay');
	});

	it('has a prefix of 622586 and a length of 16', function() {
		assert(detectNetwork('6225863614292251') === 'China UnionPay');
	});

	it('has a prefix of 622587 and a length of 16', function() {
		assert(detectNetwork('6225879458915437') === 'China UnionPay');
	});

	it('has a prefix of 622588 and a length of 16', function() {
		assert(detectNetwork('6225888163046674') === 'China UnionPay');
	});

	it('has a prefix of 622589 and a length of 16', function() {
		assert(detectNetwork('6225899858876606') === 'China UnionPay');
	});

	it('has a prefix of 622590 and a length of 16', function() {
		assert(detectNetwork('6225904436729998') === 'China UnionPay');
	});

	it('has a prefix of 622591 and a length of 16', function() {
		assert(detectNetwork('6225919207784927') === 'China UnionPay');
	});

	it('has a prefix of 622592 and a length of 16', function() {
		assert(detectNetwork('6225925190577669') === 'China UnionPay');
	});

	it('has a prefix of 622593 and a length of 16', function() {
		assert(detectNetwork('6225934264400812') === 'China UnionPay');
	});

	it('has a prefix of 622594 and a length of 16', function() {
		assert(detectNetwork('6225940004282834') === 'China UnionPay');
	});

	it('has a prefix of 622595 and a length of 16', function() {
		assert(detectNetwork('6225953705364872') === 'China UnionPay');
	});

	it('has a prefix of 622596 and a length of 16', function() {
		assert(detectNetwork('6225963977314394') === 'China UnionPay');
	});

	it('has a prefix of 622597 and a length of 16', function() {
		assert(detectNetwork('6225974331267038') === 'China UnionPay');
	});

	it('has a prefix of 622598 and a length of 16', function() {
		assert(detectNetwork('6225989470583667') === 'China UnionPay');
	});

	it('has a prefix of 622599 and a length of 16', function() {
		assert(detectNetwork('6225993065382299') === 'China UnionPay');
	});

	it('has a prefix of 622600 and a length of 16', function() {
		assert(detectNetwork('6226000433354432') === 'China UnionPay');
	});

	it('has a prefix of 622601 and a length of 16', function() {
		assert(detectNetwork('6226019944196131') === 'China UnionPay');
	});

	it('has a prefix of 622602 and a length of 16', function() {
		assert(detectNetwork('6226028379143468') === 'China UnionPay');
	});

	it('has a prefix of 622603 and a length of 16', function() {
		assert(detectNetwork('6226039271774772') === 'China UnionPay');
	});

	it('has a prefix of 622604 and a length of 16', function() {
		assert(detectNetwork('6226042937362459') === 'China UnionPay');
	});

	it('has a prefix of 622605 and a length of 16', function() {
		assert(detectNetwork('6226055750423006') === 'China UnionPay');
	});

	it('has a prefix of 622606 and a length of 16', function() {
		assert(detectNetwork('6226069039274707') === 'China UnionPay');
	});

	it('has a prefix of 622607 and a length of 16', function() {
		assert(detectNetwork('6226074206666644') === 'China UnionPay');
	});

	it('has a prefix of 622608 and a length of 16', function() {
		assert(detectNetwork('6226087417166989') === 'China UnionPay');
	});

	it('has a prefix of 622609 and a length of 16', function() {
		assert(detectNetwork('6226090257107382') === 'China UnionPay');
	});

	it('has a prefix of 622610 and a length of 16', function() {
		assert(detectNetwork('6226109810515152') === 'China UnionPay');
	});

	it('has a prefix of 622611 and a length of 16', function() {
		assert(detectNetwork('6226117299683589') === 'China UnionPay');
	});

	it('has a prefix of 622612 and a length of 16', function() {
		assert(detectNetwork('6226121983952454') === 'China UnionPay');
	});

	it('has a prefix of 622613 and a length of 16', function() {
		assert(detectNetwork('6226139396823118') === 'China UnionPay');
	});

	it('has a prefix of 622614 and a length of 16', function() {
		assert(detectNetwork('6226147205633525') === 'China UnionPay');
	});

	it('has a prefix of 622615 and a length of 16', function() {
		assert(detectNetwork('6226152718970169') === 'China UnionPay');
	});

	it('has a prefix of 622616 and a length of 16', function() {
		assert(detectNetwork('6226164691149744') === 'China UnionPay');
	});

	it('has a prefix of 622617 and a length of 16', function() {
		assert(detectNetwork('6226170426692029') === 'China UnionPay');
	});

	it('has a prefix of 622618 and a length of 16', function() {
		assert(detectNetwork('6226184711064172') === 'China UnionPay');
	});

	it('has a prefix of 622619 and a length of 16', function() {
		assert(detectNetwork('6226197154747448') === 'China UnionPay');
	});

	it('has a prefix of 622620 and a length of 16', function() {
		assert(detectNetwork('6226205867437094') === 'China UnionPay');
	});

	it('has a prefix of 622621 and a length of 16', function() {
		assert(detectNetwork('6226216421727720') === 'China UnionPay');
	});

	it('has a prefix of 622622 and a length of 16', function() {
		assert(detectNetwork('6226229817605638') === 'China UnionPay');
	});

	it('has a prefix of 622623 and a length of 16', function() {
		assert(detectNetwork('6226235709005176') === 'China UnionPay');
	});

	it('has a prefix of 622624 and a length of 16', function() {
		assert(detectNetwork('6226249962081167') === 'China UnionPay');
	});

	it('has a prefix of 622625 and a length of 16', function() {
		assert(detectNetwork('6226256039209942') === 'China UnionPay');
	});

	it('has a prefix of 622626 and a length of 16', function() {
		assert(detectNetwork('6226261736563480') === 'China UnionPay');
	});

	it('has a prefix of 622627 and a length of 16', function() {
		assert(detectNetwork('6226277999806688') === 'China UnionPay');
	});

	it('has a prefix of 622628 and a length of 16', function() {
		assert(detectNetwork('6226289167502757') === 'China UnionPay');
	});

	it('has a prefix of 622629 and a length of 16', function() {
		assert(detectNetwork('6226291936514242') === 'China UnionPay');
	});

	it('has a prefix of 622630 and a length of 16', function() {
		assert(detectNetwork('6226304069292494') === 'China UnionPay');
	});

	it('has a prefix of 622631 and a length of 16', function() {
		assert(detectNetwork('6226311340944095') === 'China UnionPay');
	});

	it('has a prefix of 622632 and a length of 16', function() {
		assert(detectNetwork('6226329782411378') === 'China UnionPay');
	});

	it('has a prefix of 622633 and a length of 16', function() {
		assert(detectNetwork('6226337507957138') === 'China UnionPay');
	});

	it('has a prefix of 622634 and a length of 16', function() {
		assert(detectNetwork('6226346856857347') === 'China UnionPay');
	});

	it('has a prefix of 622635 and a length of 16', function() {
		assert(detectNetwork('6226351104978619') === 'China UnionPay');
	});

	it('has a prefix of 622636 and a length of 16', function() {
		assert(detectNetwork('6226367712607762') === 'China UnionPay');
	});

	it('has a prefix of 622637 and a length of 16', function() {
		assert(detectNetwork('6226372608508693') === 'China UnionPay');
	});

	it('has a prefix of 622638 and a length of 16', function() {
		assert(detectNetwork('6226389145411355') === 'China UnionPay');
	});

	it('has a prefix of 622639 and a length of 16', function() {
		assert(detectNetwork('6226396181937346') === 'China UnionPay');
	});

	it('has a prefix of 622640 and a length of 16', function() {
		assert(detectNetwork('6226406753497517') === 'China UnionPay');
	});

	it('has a prefix of 622641 and a length of 16', function() {
		assert(detectNetwork('6226419486739593') === 'China UnionPay');
	});

	it('has a prefix of 622642 and a length of 16', function() {
		assert(detectNetwork('6226424624710437') === 'China UnionPay');
	});

	it('has a prefix of 622643 and a length of 16', function() {
		assert(detectNetwork('6226431549620392') === 'China UnionPay');
	});

	it('has a prefix of 622644 and a length of 16', function() {
		assert(detectNetwork('6226443829087994') === 'China UnionPay');
	});

	it('has a prefix of 622645 and a length of 16', function() {
		assert(detectNetwork('6226459978425097') === 'China UnionPay');
	});

	it('has a prefix of 622646 and a length of 16', function() {
		assert(detectNetwork('6226468714695013') === 'China UnionPay');
	});

	it('has a prefix of 622647 and a length of 16', function() {
		assert(detectNetwork('6226476438872271') === 'China UnionPay');
	});

	it('has a prefix of 622648 and a length of 16', function() {
		assert(detectNetwork('6226487516892790') === 'China UnionPay');
	});

	it('has a prefix of 622649 and a length of 16', function() {
		assert(detectNetwork('6226491643815181') === 'China UnionPay');
	});

	it('has a prefix of 622650 and a length of 16', function() {
		assert(detectNetwork('6226506109892297') === 'China UnionPay');
	});

	it('has a prefix of 622651 and a length of 16', function() {
		assert(detectNetwork('6226518885059054') === 'China UnionPay');
	});

	it('has a prefix of 622652 and a length of 16', function() {
		assert(detectNetwork('6226529796796679') === 'China UnionPay');
	});

	it('has a prefix of 622653 and a length of 16', function() {
		assert(detectNetwork('6226535892556734') === 'China UnionPay');
	});

	it('has a prefix of 622654 and a length of 16', function() {
		assert(detectNetwork('6226549146459505') === 'China UnionPay');
	});

	it('has a prefix of 622655 and a length of 16', function() {
		assert(detectNetwork('6226553847412045') === 'China UnionPay');
	});

	it('has a prefix of 622656 and a length of 16', function() {
		assert(detectNetwork('6226566001171438') === 'China UnionPay');
	});

	it('has a prefix of 622657 and a length of 16', function() {
		assert(detectNetwork('6226576520472100') === 'China UnionPay');
	});

	it('has a prefix of 622658 and a length of 16', function() {
		assert(detectNetwork('6226585061402954') === 'China UnionPay');
	});

	it('has a prefix of 622659 and a length of 16', function() {
		assert(detectNetwork('6226595445592511') === 'China UnionPay');
	});

	it('has a prefix of 622660 and a length of 16', function() {
		assert(detectNetwork('6226604836581224') === 'China UnionPay');
	});

	it('has a prefix of 622661 and a length of 16', function() {
		assert(detectNetwork('6226619404298559') === 'China UnionPay');
	});

	it('has a prefix of 622662 and a length of 16', function() {
		assert(detectNetwork('6226622478025282') === 'China UnionPay');
	});

	it('has a prefix of 622663 and a length of 16', function() {
		assert(detectNetwork('6226637519503306') === 'China UnionPay');
	});

	it('has a prefix of 622664 and a length of 16', function() {
		assert(detectNetwork('6226640213328681') === 'China UnionPay');
	});

	it('has a prefix of 622665 and a length of 16', function() {
		assert(detectNetwork('6226657250040836') === 'China UnionPay');
	});

	it('has a prefix of 622666 and a length of 16', function() {
		assert(detectNetwork('6226669473080747') === 'China UnionPay');
	});

	it('has a prefix of 622667 and a length of 16', function() {
		assert(detectNetwork('6226673946086909') === 'China UnionPay');
	});

	it('has a prefix of 622668 and a length of 16', function() {
		assert(detectNetwork('6226689296738437') === 'China UnionPay');
	});

	it('has a prefix of 622669 and a length of 16', function() {
		assert(detectNetwork('6226699382609536') === 'China UnionPay');
	});

	it('has a prefix of 622670 and a length of 16', function() {
		assert(detectNetwork('6226707830455304') === 'China UnionPay');
	});

	it('has a prefix of 622671 and a length of 16', function() {
		assert(detectNetwork('6226717490056504') === 'China UnionPay');
	});

	it('has a prefix of 622672 and a length of 16', function() {
		assert(detectNetwork('6226721527291642') === 'China UnionPay');
	});

	it('has a prefix of 622673 and a length of 16', function() {
		assert(detectNetwork('6226733205756899') === 'China UnionPay');
	});

	it('has a prefix of 622674 and a length of 16', function() {
		assert(detectNetwork('6226740558320875') === 'China UnionPay');
	});

	it('has a prefix of 622675 and a length of 16', function() {
		assert(detectNetwork('6226753957286045') === 'China UnionPay');
	});

	it('has a prefix of 622676 and a length of 16', function() {
		assert(detectNetwork('6226760465573132') === 'China UnionPay');
	});

	it('has a prefix of 622677 and a length of 16', function() {
		assert(detectNetwork('6226773629769949') === 'China UnionPay');
	});

	it('has a prefix of 622678 and a length of 16', function() {
		assert(detectNetwork('6226781631968883') === 'China UnionPay');
	});

	it('has a prefix of 622679 and a length of 16', function() {
		assert(detectNetwork('6226791945008743') === 'China UnionPay');
	});

	it('has a prefix of 622680 and a length of 16', function() {
		assert(detectNetwork('6226801046516812') === 'China UnionPay');
	});

	it('has a prefix of 622681 and a length of 16', function() {
		assert(detectNetwork('6226810838197818') === 'China UnionPay');
	});

	it('has a prefix of 622682 and a length of 16', function() {
		assert(detectNetwork('6226820350426071') === 'China UnionPay');
	});

	it('has a prefix of 622683 and a length of 16', function() {
		assert(detectNetwork('6226831572169267') === 'China UnionPay');
	});

	it('has a prefix of 622684 and a length of 16', function() {
		assert(detectNetwork('6226845903154287') === 'China UnionPay');
	});

	it('has a prefix of 622685 and a length of 16', function() {
		assert(detectNetwork('6226857192686680') === 'China UnionPay');
	});

	it('has a prefix of 622686 and a length of 16', function() {
		assert(detectNetwork('6226860434791354') === 'China UnionPay');
	});

	it('has a prefix of 622687 and a length of 16', function() {
		assert(detectNetwork('6226879737182908') === 'China UnionPay');
	});

	it('has a prefix of 622688 and a length of 16', function() {
		assert(detectNetwork('6226886813041186') === 'China UnionPay');
	});

	it('has a prefix of 622689 and a length of 16', function() {
		assert(detectNetwork('6226897058427151') === 'China UnionPay');
	});

	it('has a prefix of 622690 and a length of 16', function() {
		assert(detectNetwork('6226906968235943') === 'China UnionPay');
	});

	it('has a prefix of 622691 and a length of 16', function() {
		assert(detectNetwork('6226916792234562') === 'China UnionPay');
	});

	it('has a prefix of 622692 and a length of 16', function() {
		assert(detectNetwork('6226928708538089') === 'China UnionPay');
	});

	it('has a prefix of 622693 and a length of 16', function() {
		assert(detectNetwork('6226930495894804') === 'China UnionPay');
	});

	it('has a prefix of 622694 and a length of 16', function() {
		assert(detectNetwork('6226941110752841') === 'China UnionPay');
	});

	it('has a prefix of 622695 and a length of 16', function() {
		assert(detectNetwork('6226953484993526') === 'China UnionPay');
	});

	it('has a prefix of 622696 and a length of 16', function() {
		assert(detectNetwork('6226964093563189') === 'China UnionPay');
	});

	it('has a prefix of 622697 and a length of 16', function() {
		assert(detectNetwork('6226976241018994') === 'China UnionPay');
	});

	it('has a prefix of 622698 and a length of 16', function() {
		assert(detectNetwork('6226987034911284') === 'China UnionPay');
	});

	it('has a prefix of 622699 and a length of 16', function() {
		assert(detectNetwork('6226993472748048') === 'China UnionPay');
	});

	it('has a prefix of 622700 and a length of 16', function() {
		assert(detectNetwork('6227005648183704') === 'China UnionPay');
	});

	it('has a prefix of 622701 and a length of 16', function() {
		assert(detectNetwork('6227010881083352') === 'China UnionPay');
	});

	it('has a prefix of 622702 and a length of 16', function() {
		assert(detectNetwork('6227026958062453') === 'China UnionPay');
	});

	it('has a prefix of 622703 and a length of 16', function() {
		assert(detectNetwork('6227039540607076') === 'China UnionPay');
	});

	it('has a prefix of 622704 and a length of 16', function() {
		assert(detectNetwork('6227046810988858') === 'China UnionPay');
	});

	it('has a prefix of 622705 and a length of 16', function() {
		assert(detectNetwork('6227059339610339') === 'China UnionPay');
	});

	it('has a prefix of 622706 and a length of 16', function() {
		assert(detectNetwork('6227067469235893') === 'China UnionPay');
	});

	it('has a prefix of 622707 and a length of 16', function() {
		assert(detectNetwork('6227071714813648') === 'China UnionPay');
	});

	it('has a prefix of 622708 and a length of 16', function() {
		assert(detectNetwork('6227085753673935') === 'China UnionPay');
	});

	it('has a prefix of 622709 and a length of 16', function() {
		assert(detectNetwork('6227099798291717') === 'China UnionPay');
	});

	it('has a prefix of 622710 and a length of 16', function() {
		assert(detectNetwork('6227106709218405') === 'China UnionPay');
	});

	it('has a prefix of 622711 and a length of 16', function() {
		assert(detectNetwork('6227117715548800') === 'China UnionPay');
	});

	it('has a prefix of 622712 and a length of 16', function() {
		assert(detectNetwork('6227126528137144') === 'China UnionPay');
	});

	it('has a prefix of 622713 and a length of 16', function() {
		assert(detectNetwork('6227132938416065') === 'China UnionPay');
	});

	it('has a prefix of 622714 and a length of 16', function() {
		assert(detectNetwork('6227143359779485') === 'China UnionPay');
	});

	it('has a prefix of 622715 and a length of 16', function() {
		assert(detectNetwork('6227152653816005') === 'China UnionPay');
	});

	it('has a prefix of 622716 and a length of 16', function() {
		assert(detectNetwork('6227168223863494') === 'China UnionPay');
	});

	it('has a prefix of 622717 and a length of 16', function() {
		assert(detectNetwork('6227174763905175') === 'China UnionPay');
	});

	it('has a prefix of 622718 and a length of 16', function() {
		assert(detectNetwork('6227183921132201') === 'China UnionPay');
	});

	it('has a prefix of 622719 and a length of 16', function() {
		assert(detectNetwork('6227193556468880') === 'China UnionPay');
	});

	it('has a prefix of 622720 and a length of 16', function() {
		assert(detectNetwork('6227201160122456') === 'China UnionPay');
	});

	it('has a prefix of 622721 and a length of 16', function() {
		assert(detectNetwork('6227213542293175') === 'China UnionPay');
	});

	it('has a prefix of 622722 and a length of 16', function() {
		assert(detectNetwork('6227225486727858') === 'China UnionPay');
	});

	it('has a prefix of 622723 and a length of 16', function() {
		assert(detectNetwork('6227233521646286') === 'China UnionPay');
	});

	it('has a prefix of 622724 and a length of 16', function() {
		assert(detectNetwork('6227243190009379') === 'China UnionPay');
	});

	it('has a prefix of 622725 and a length of 16', function() {
		assert(detectNetwork('6227255373272222') === 'China UnionPay');
	});

	it('has a prefix of 622726 and a length of 16', function() {
		assert(detectNetwork('6227263258361328') === 'China UnionPay');
	});

	it('has a prefix of 622727 and a length of 16', function() {
		assert(detectNetwork('6227275765653715') === 'China UnionPay');
	});

	it('has a prefix of 622728 and a length of 16', function() {
		assert(detectNetwork('6227288595384064') === 'China UnionPay');
	});

	it('has a prefix of 622729 and a length of 16', function() {
		assert(detectNetwork('6227290234334997') === 'China UnionPay');
	});

	it('has a prefix of 622730 and a length of 16', function() {
		assert(detectNetwork('6227300511683652') === 'China UnionPay');
	});

	it('has a prefix of 622731 and a length of 16', function() {
		assert(detectNetwork('6227312778560057') === 'China UnionPay');
	});

	it('has a prefix of 622732 and a length of 16', function() {
		assert(detectNetwork('6227326592966533') === 'China UnionPay');
	});

	it('has a prefix of 622733 and a length of 16', function() {
		assert(detectNetwork('6227330115074506') === 'China UnionPay');
	});

	it('has a prefix of 622734 and a length of 16', function() {
		assert(detectNetwork('6227343036000428') === 'China UnionPay');
	});

	it('has a prefix of 622735 and a length of 16', function() {
		assert(detectNetwork('6227358205793355') === 'China UnionPay');
	});

	it('has a prefix of 622736 and a length of 16', function() {
		assert(detectNetwork('6227369752302151') === 'China UnionPay');
	});

	it('has a prefix of 622737 and a length of 16', function() {
		assert(detectNetwork('6227378483290776') === 'China UnionPay');
	});

	it('has a prefix of 622738 and a length of 16', function() {
		assert(detectNetwork('6227387929652012') === 'China UnionPay');
	});

	it('has a prefix of 622739 and a length of 16', function() {
		assert(detectNetwork('6227394091807201') === 'China UnionPay');
	});

	it('has a prefix of 622740 and a length of 16', function() {
		assert(detectNetwork('6227404946561617') === 'China UnionPay');
	});

	it('has a prefix of 622741 and a length of 16', function() {
		assert(detectNetwork('6227411402878198') === 'China UnionPay');
	});

	it('has a prefix of 622742 and a length of 16', function() {
		assert(detectNetwork('6227423876304629') === 'China UnionPay');
	});

	it('has a prefix of 622743 and a length of 16', function() {
		assert(detectNetwork('6227437665181486') === 'China UnionPay');
	});

	it('has a prefix of 622744 and a length of 16', function() {
		assert(detectNetwork('6227444757768413') === 'China UnionPay');
	});

	it('has a prefix of 622745 and a length of 16', function() {
		assert(detectNetwork('6227453924072270') === 'China UnionPay');
	});

	it('has a prefix of 622746 and a length of 16', function() {
		assert(detectNetwork('6227460911004143') === 'China UnionPay');
	});

	it('has a prefix of 622747 and a length of 16', function() {
		assert(detectNetwork('6227470224675757') === 'China UnionPay');
	});

	it('has a prefix of 622748 and a length of 16', function() {
		assert(detectNetwork('6227489344541777') === 'China UnionPay');
	});

	it('has a prefix of 622749 and a length of 16', function() {
		assert(detectNetwork('6227498084674664') === 'China UnionPay');
	});

	it('has a prefix of 622750 and a length of 16', function() {
		assert(detectNetwork('6227500464297399') === 'China UnionPay');
	});

	it('has a prefix of 622751 and a length of 16', function() {
		assert(detectNetwork('6227515061183429') === 'China UnionPay');
	});

	it('has a prefix of 622752 and a length of 16', function() {
		assert(detectNetwork('6227520126921420') === 'China UnionPay');
	});

	it('has a prefix of 622753 and a length of 16', function() {
		assert(detectNetwork('6227534442421358') === 'China UnionPay');
	});

	it('has a prefix of 622754 and a length of 16', function() {
		assert(detectNetwork('6227544138756108') === 'China UnionPay');
	});

	it('has a prefix of 622755 and a length of 16', function() {
		assert(detectNetwork('6227553436189660') === 'China UnionPay');
	});

	it('has a prefix of 622756 and a length of 16', function() {
		assert(detectNetwork('6227567654421388') === 'China UnionPay');
	});

	it('has a prefix of 622757 and a length of 16', function() {
		assert(detectNetwork('6227579012319610') === 'China UnionPay');
	});

	it('has a prefix of 622758 and a length of 16', function() {
		assert(detectNetwork('6227588441557182') === 'China UnionPay');
	});

	it('has a prefix of 622759 and a length of 16', function() {
		assert(detectNetwork('6227598654395527') === 'China UnionPay');
	});

	it('has a prefix of 622760 and a length of 16', function() {
		assert(detectNetwork('6227607836824573') === 'China UnionPay');
	});

	it('has a prefix of 622761 and a length of 16', function() {
		assert(detectNetwork('6227615954241273') === 'China UnionPay');
	});

	it('has a prefix of 622762 and a length of 16', function() {
		assert(detectNetwork('6227623015057555') === 'China UnionPay');
	});

	it('has a prefix of 622763 and a length of 16', function() {
		assert(detectNetwork('6227631882467806') === 'China UnionPay');
	});

	it('has a prefix of 622764 and a length of 16', function() {
		assert(detectNetwork('6227643478892234') === 'China UnionPay');
	});

	it('has a prefix of 622765 and a length of 16', function() {
		assert(detectNetwork('6227654117122556') === 'China UnionPay');
	});

	it('has a prefix of 622766 and a length of 16', function() {
		assert(detectNetwork('6227666387936955') === 'China UnionPay');
	});

	it('has a prefix of 622767 and a length of 16', function() {
		assert(detectNetwork('6227671725135534') === 'China UnionPay');
	});

	it('has a prefix of 622768 and a length of 16', function() {
		assert(detectNetwork('6227688037462108') === 'China UnionPay');
	});

	it('has a prefix of 622769 and a length of 16', function() {
		assert(detectNetwork('6227698023723981') === 'China UnionPay');
	});

	it('has a prefix of 622770 and a length of 16', function() {
		assert(detectNetwork('6227702075690858') === 'China UnionPay');
	});

	it('has a prefix of 622771 and a length of 16', function() {
		assert(detectNetwork('6227712086290020') === 'China UnionPay');
	});

	it('has a prefix of 622772 and a length of 16', function() {
		assert(detectNetwork('6227726739799227') === 'China UnionPay');
	});

	it('has a prefix of 622773 and a length of 16', function() {
		assert(detectNetwork('6227738252097701') === 'China UnionPay');
	});

	it('has a prefix of 622774 and a length of 16', function() {
		assert(detectNetwork('6227742902329425') === 'China UnionPay');
	});

	it('has a prefix of 622775 and a length of 16', function() {
		assert(detectNetwork('6227756874615086') === 'China UnionPay');
	});

	it('has a prefix of 622776 and a length of 16', function() {
		assert(detectNetwork('6227768322818493') === 'China UnionPay');
	});

	it('has a prefix of 622777 and a length of 16', function() {
		assert(detectNetwork('6227777166667473') === 'China UnionPay');
	});

	it('has a prefix of 622778 and a length of 16', function() {
		assert(detectNetwork('6227781001096605') === 'China UnionPay');
	});

	it('has a prefix of 622779 and a length of 16', function() {
		assert(detectNetwork('6227795729475783') === 'China UnionPay');
	});

	it('has a prefix of 622780 and a length of 16', function() {
		assert(detectNetwork('6227808370443549') === 'China UnionPay');
	});

	it('has a prefix of 622781 and a length of 16', function() {
		assert(detectNetwork('6227814266456488') === 'China UnionPay');
	});

	it('has a prefix of 622782 and a length of 16', function() {
		assert(detectNetwork('6227827099335779') === 'China UnionPay');
	});

	it('has a prefix of 622783 and a length of 16', function() {
		assert(detectNetwork('6227832508758723') === 'China UnionPay');
	});

	it('has a prefix of 622784 and a length of 16', function() {
		assert(detectNetwork('6227841532247430') === 'China UnionPay');
	});

	it('has a prefix of 622785 and a length of 16', function() {
		assert(detectNetwork('6227857399214444') === 'China UnionPay');
	});

	it('has a prefix of 622786 and a length of 16', function() {
		assert(detectNetwork('6227867573241493') === 'China UnionPay');
	});

	it('has a prefix of 622787 and a length of 16', function() {
		assert(detectNetwork('6227871609018092') === 'China UnionPay');
	});

	it('has a prefix of 622788 and a length of 16', function() {
		assert(detectNetwork('6227886292099830') === 'China UnionPay');
	});

	it('has a prefix of 622789 and a length of 16', function() {
		assert(detectNetwork('6227892562891018') === 'China UnionPay');
	});

	it('has a prefix of 622790 and a length of 16', function() {
		assert(detectNetwork('6227903116623785') === 'China UnionPay');
	});

	it('has a prefix of 622791 and a length of 16', function() {
		assert(detectNetwork('6227912311558961') === 'China UnionPay');
	});

	it('has a prefix of 622792 and a length of 16', function() {
		assert(detectNetwork('6227920362891333') === 'China UnionPay');
	});

	it('has a prefix of 622793 and a length of 16', function() {
		assert(detectNetwork('6227937232694571') === 'China UnionPay');
	});

	it('has a prefix of 622794 and a length of 16', function() {
		assert(detectNetwork('6227946533549105') === 'China UnionPay');
	});

	it('has a prefix of 622795 and a length of 16', function() {
		assert(detectNetwork('6227958956150099') === 'China UnionPay');
	});

	it('has a prefix of 622796 and a length of 16', function() {
		assert(detectNetwork('6227960416036674') === 'China UnionPay');
	});

	it('has a prefix of 622797 and a length of 16', function() {
		assert(detectNetwork('6227975659909082') === 'China UnionPay');
	});

	it('has a prefix of 622798 and a length of 16', function() {
		assert(detectNetwork('6227985894784619') === 'China UnionPay');
	});

	it('has a prefix of 622799 and a length of 16', function() {
		assert(detectNetwork('6227992349614733') === 'China UnionPay');
	});

	it('has a prefix of 622800 and a length of 16', function() {
		assert(detectNetwork('6228005982619460') === 'China UnionPay');
	});

	it('has a prefix of 622801 and a length of 16', function() {
		assert(detectNetwork('6228010884051569') === 'China UnionPay');
	});

	it('has a prefix of 622802 and a length of 16', function() {
		assert(detectNetwork('6228025204760549') === 'China UnionPay');
	});

	it('has a prefix of 622803 and a length of 16', function() {
		assert(detectNetwork('6228037185066701') === 'China UnionPay');
	});

	it('has a prefix of 622804 and a length of 16', function() {
		assert(detectNetwork('6228045751902278') === 'China UnionPay');
	});

	it('has a prefix of 622805 and a length of 16', function() {
		assert(detectNetwork('6228056409016688') === 'China UnionPay');
	});

	it('has a prefix of 622806 and a length of 16', function() {
		assert(detectNetwork('6228065141365777') === 'China UnionPay');
	});

	it('has a prefix of 622807 and a length of 16', function() {
		assert(detectNetwork('6228071024594027') === 'China UnionPay');
	});

	it('has a prefix of 622808 and a length of 16', function() {
		assert(detectNetwork('6228087606595186') === 'China UnionPay');
	});

	it('has a prefix of 622809 and a length of 16', function() {
		assert(detectNetwork('6228096909086184') === 'China UnionPay');
	});

	it('has a prefix of 622810 and a length of 16', function() {
		assert(detectNetwork('6228104067237448') === 'China UnionPay');
	});

	it('has a prefix of 622811 and a length of 16', function() {
		assert(detectNetwork('6228110863155801') === 'China UnionPay');
	});

	it('has a prefix of 622812 and a length of 16', function() {
		assert(detectNetwork('6228127852511921') === 'China UnionPay');
	});

	it('has a prefix of 622813 and a length of 16', function() {
		assert(detectNetwork('6228139870190709') === 'China UnionPay');
	});

	it('has a prefix of 622814 and a length of 16', function() {
		assert(detectNetwork('6228148005412197') === 'China UnionPay');
	});

	it('has a prefix of 622815 and a length of 16', function() {
		assert(detectNetwork('6228156482933487') === 'China UnionPay');
	});

	it('has a prefix of 622816 and a length of 16', function() {
		assert(detectNetwork('6228165138926931') === 'China UnionPay');
	});

	it('has a prefix of 622817 and a length of 16', function() {
		assert(detectNetwork('6228177972640667') === 'China UnionPay');
	});

	it('has a prefix of 622818 and a length of 16', function() {
		assert(detectNetwork('6228189840593239') === 'China UnionPay');
	});

	it('has a prefix of 622819 and a length of 16', function() {
		assert(detectNetwork('6228197968390538') === 'China UnionPay');
	});

	it('has a prefix of 622820 and a length of 16', function() {
		assert(detectNetwork('6228209382307160') === 'China UnionPay');
	});

	it('has a prefix of 622821 and a length of 16', function() {
		assert(detectNetwork('6228218650639569') === 'China UnionPay');
	});

	it('has a prefix of 622822 and a length of 16', function() {
		assert(detectNetwork('6228222067268795') === 'China UnionPay');
	});

	it('has a prefix of 622823 and a length of 16', function() {
		assert(detectNetwork('6228234186439727') === 'China UnionPay');
	});

	it('has a prefix of 622824 and a length of 16', function() {
		assert(detectNetwork('6228247419247733') === 'China UnionPay');
	});

	it('has a prefix of 622825 and a length of 16', function() {
		assert(detectNetwork('6228252204588268') === 'China UnionPay');
	});

	it('has a prefix of 622826 and a length of 16', function() {
		assert(detectNetwork('6228268239641825') === 'China UnionPay');
	});

	it('has a prefix of 622827 and a length of 16', function() {
		assert(detectNetwork('6228272541906951') === 'China UnionPay');
	});

	it('has a prefix of 622828 and a length of 16', function() {
		assert(detectNetwork('6228280674615169') === 'China UnionPay');
	});

	it('has a prefix of 622829 and a length of 16', function() {
		assert(detectNetwork('6228294538149761') === 'China UnionPay');
	});

	it('has a prefix of 622830 and a length of 16', function() {
		assert(detectNetwork('6228301939382911') === 'China UnionPay');
	});

	it('has a prefix of 622831 and a length of 16', function() {
		assert(detectNetwork('6228312864677550') === 'China UnionPay');
	});

	it('has a prefix of 622832 and a length of 16', function() {
		assert(detectNetwork('6228329683104066') === 'China UnionPay');
	});

	it('has a prefix of 622833 and a length of 16', function() {
		assert(detectNetwork('6228330980643694') === 'China UnionPay');
	});

	it('has a prefix of 622834 and a length of 16', function() {
		assert(detectNetwork('6228341400982296') === 'China UnionPay');
	});

	it('has a prefix of 622835 and a length of 16', function() {
		assert(detectNetwork('6228354390926445') === 'China UnionPay');
	});

	it('has a prefix of 622836 and a length of 16', function() {
		assert(detectNetwork('6228361165829627') === 'China UnionPay');
	});

	it('has a prefix of 622837 and a length of 16', function() {
		assert(detectNetwork('6228375805455402') === 'China UnionPay');
	});

	it('has a prefix of 622838 and a length of 16', function() {
		assert(detectNetwork('6228382876290634') === 'China UnionPay');
	});

	it('has a prefix of 622839 and a length of 16', function() {
		assert(detectNetwork('6228398093643489') === 'China UnionPay');
	});

	it('has a prefix of 622840 and a length of 16', function() {
		assert(detectNetwork('6228404832860083') === 'China UnionPay');
	});

	it('has a prefix of 622841 and a length of 16', function() {
		assert(detectNetwork('6228417722455709') === 'China UnionPay');
	});

	it('has a prefix of 622842 and a length of 16', function() {
		assert(detectNetwork('6228423028771584') === 'China UnionPay');
	});

	it('has a prefix of 622843 and a length of 16', function() {
		assert(detectNetwork('6228437059547708') === 'China UnionPay');
	});

	it('has a prefix of 622844 and a length of 16', function() {
		assert(detectNetwork('6228443435285171') === 'China UnionPay');
	});

	it('has a prefix of 622845 and a length of 16', function() {
		assert(detectNetwork('6228456303081839') === 'China UnionPay');
	});

	it('has a prefix of 622846 and a length of 16', function() {
		assert(detectNetwork('6228469221714780') === 'China UnionPay');
	});

	it('has a prefix of 622847 and a length of 16', function() {
		assert(detectNetwork('6228473570880432') === 'China UnionPay');
	});

	it('has a prefix of 622848 and a length of 16', function() {
		assert(detectNetwork('6228482528153223') === 'China UnionPay');
	});

	it('has a prefix of 622849 and a length of 16', function() {
		assert(detectNetwork('6228494266330397') === 'China UnionPay');
	});

	it('has a prefix of 622850 and a length of 16', function() {
		assert(detectNetwork('6228501473496151') === 'China UnionPay');
	});

	it('has a prefix of 622851 and a length of 16', function() {
		assert(detectNetwork('6228514144601565') === 'China UnionPay');
	});

	it('has a prefix of 622852 and a length of 16', function() {
		assert(detectNetwork('6228527038687737') === 'China UnionPay');
	});

	it('has a prefix of 622853 and a length of 16', function() {
		assert(detectNetwork('6228534563197968') === 'China UnionPay');
	});

	it('has a prefix of 622854 and a length of 16', function() {
		assert(detectNetwork('6228548166717684') === 'China UnionPay');
	});

	it('has a prefix of 622855 and a length of 16', function() {
		assert(detectNetwork('6228553759444070') === 'China UnionPay');
	});

	it('has a prefix of 622856 and a length of 16', function() {
		assert(detectNetwork('6228569747237123') === 'China UnionPay');
	});

	it('has a prefix of 622857 and a length of 16', function() {
		assert(detectNetwork('6228574214022552') === 'China UnionPay');
	});

	it('has a prefix of 622858 and a length of 16', function() {
		assert(detectNetwork('6228583869200099') === 'China UnionPay');
	});

	it('has a prefix of 622859 and a length of 16', function() {
		assert(detectNetwork('6228596026860118') === 'China UnionPay');
	});

	it('has a prefix of 622860 and a length of 16', function() {
		assert(detectNetwork('6228604071314517') === 'China UnionPay');
	});

	it('has a prefix of 622861 and a length of 16', function() {
		assert(detectNetwork('6228613578495011') === 'China UnionPay');
	});

	it('has a prefix of 622862 and a length of 16', function() {
		assert(detectNetwork('6228628920784780') === 'China UnionPay');
	});

	it('has a prefix of 622863 and a length of 16', function() {
		assert(detectNetwork('6228638407902626') === 'China UnionPay');
	});

	it('has a prefix of 622864 and a length of 16', function() {
		assert(detectNetwork('6228646347512354') === 'China UnionPay');
	});

	it('has a prefix of 622865 and a length of 16', function() {
		assert(detectNetwork('6228655591736543') === 'China UnionPay');
	});

	it('has a prefix of 622866 and a length of 16', function() {
		assert(detectNetwork('6228662843145885') === 'China UnionPay');
	});

	it('has a prefix of 622867 and a length of 16', function() {
		assert(detectNetwork('6228671415681244') === 'China UnionPay');
	});

	it('has a prefix of 622868 and a length of 16', function() {
		assert(detectNetwork('6228686833127225') === 'China UnionPay');
	});

	it('has a prefix of 622869 and a length of 16', function() {
		assert(detectNetwork('6228698905026943') === 'China UnionPay');
	});

	it('has a prefix of 622870 and a length of 16', function() {
		assert(detectNetwork('6228702483887733') === 'China UnionPay');
	});

	it('has a prefix of 622871 and a length of 16', function() {
		assert(detectNetwork('6228716241993913') === 'China UnionPay');
	});

	it('has a prefix of 622872 and a length of 16', function() {
		assert(detectNetwork('6228728821612028') === 'China UnionPay');
	});

	it('has a prefix of 622873 and a length of 16', function() {
		assert(detectNetwork('6228730328397386') === 'China UnionPay');
	});

	it('has a prefix of 622874 and a length of 16', function() {
		assert(detectNetwork('6228747965270585') === 'China UnionPay');
	});

	it('has a prefix of 622875 and a length of 16', function() {
		assert(detectNetwork('6228757094533297') === 'China UnionPay');
	});

	it('has a prefix of 622876 and a length of 16', function() {
		assert(detectNetwork('6228769052228601') === 'China UnionPay');
	});

	it('has a prefix of 622877 and a length of 16', function() {
		assert(detectNetwork('6228773291460367') === 'China UnionPay');
	});

	it('has a prefix of 622878 and a length of 16', function() {
		assert(detectNetwork('6228789798182068') === 'China UnionPay');
	});

	it('has a prefix of 622879 and a length of 16', function() {
		assert(detectNetwork('6228795651126253') === 'China UnionPay');
	});

	it('has a prefix of 622880 and a length of 16', function() {
		assert(detectNetwork('6228804690760873') === 'China UnionPay');
	});

	it('has a prefix of 622881 and a length of 16', function() {
		assert(detectNetwork('6228813954075522') === 'China UnionPay');
	});

	it('has a prefix of 622882 and a length of 16', function() {
		assert(detectNetwork('6228827603380816') === 'China UnionPay');
	});

	it('has a prefix of 622883 and a length of 16', function() {
		assert(detectNetwork('6228839490110660') === 'China UnionPay');
	});

	it('has a prefix of 622884 and a length of 16', function() {
		assert(detectNetwork('6228849758926716') === 'China UnionPay');
	});

	it('has a prefix of 622885 and a length of 16', function() {
		assert(detectNetwork('6228853806857837') === 'China UnionPay');
	});

	it('has a prefix of 622886 and a length of 16', function() {
		assert(detectNetwork('6228864071463380') === 'China UnionPay');
	});

	it('has a prefix of 622887 and a length of 16', function() {
		assert(detectNetwork('6228879675675129') === 'China UnionPay');
	});

	it('has a prefix of 622888 and a length of 16', function() {
		assert(detectNetwork('6228886421726695') === 'China UnionPay');
	});

	it('has a prefix of 622889 and a length of 16', function() {
		assert(detectNetwork('6228899660866442') === 'China UnionPay');
	});

	it('has a prefix of 622890 and a length of 16', function() {
		assert(detectNetwork('6228901699415474') === 'China UnionPay');
	});

	it('has a prefix of 622891 and a length of 16', function() {
		assert(detectNetwork('6228918711745695') === 'China UnionPay');
	});

	it('has a prefix of 622892 and a length of 16', function() {
		assert(detectNetwork('6228920472003334') === 'China UnionPay');
	});

	it('has a prefix of 622893 and a length of 16', function() {
		assert(detectNetwork('6228933391120226') === 'China UnionPay');
	});

	it('has a prefix of 622894 and a length of 16', function() {
		assert(detectNetwork('6228948437017886') === 'China UnionPay');
	});

	it('has a prefix of 622895 and a length of 16', function() {
		assert(detectNetwork('6228958349722372') === 'China UnionPay');
	});

	it('has a prefix of 622896 and a length of 16', function() {
		assert(detectNetwork('6228969055322764') === 'China UnionPay');
	});

	it('has a prefix of 622897 and a length of 16', function() {
		assert(detectNetwork('6228977511799151') === 'China UnionPay');
	});

	it('has a prefix of 622898 and a length of 16', function() {
		assert(detectNetwork('6228982108698283') === 'China UnionPay');
	});

	it('has a prefix of 622899 and a length of 16', function() {
		assert(detectNetwork('6228998284030251') === 'China UnionPay');
	});

	it('has a prefix of 622900 and a length of 16', function() {
		assert(detectNetwork('6229002711912308') === 'China UnionPay');
	});

	it('has a prefix of 622901 and a length of 16', function() {
		assert(detectNetwork('6229012804524858') === 'China UnionPay');
	});

	it('has a prefix of 622902 and a length of 16', function() {
		assert(detectNetwork('6229026394215984') === 'China UnionPay');
	});

	it('has a prefix of 622903 and a length of 16', function() {
		assert(detectNetwork('6229038517976012') === 'China UnionPay');
	});

	it('has a prefix of 622904 and a length of 16', function() {
		assert(detectNetwork('6229045730038639') === 'China UnionPay');
	});

	it('has a prefix of 622905 and a length of 16', function() {
		assert(detectNetwork('6229059922349371') === 'China UnionPay');
	});

	it('has a prefix of 622906 and a length of 16', function() {
		assert(detectNetwork('6229066046114159') === 'China UnionPay');
	});

	it('has a prefix of 622907 and a length of 16', function() {
		assert(detectNetwork('6229073688309093') === 'China UnionPay');
	});

	it('has a prefix of 622908 and a length of 16', function() {
		assert(detectNetwork('6229082366758372') === 'China UnionPay');
	});

	it('has a prefix of 622909 and a length of 16', function() {
		assert(detectNetwork('6229095579827848') === 'China UnionPay');
	});

	it('has a prefix of 622910 and a length of 16', function() {
		assert(detectNetwork('6229106546722348') === 'China UnionPay');
	});

	it('has a prefix of 622911 and a length of 16', function() {
		assert(detectNetwork('6229114528780101') === 'China UnionPay');
	});

	it('has a prefix of 622912 and a length of 16', function() {
		assert(detectNetwork('6229127621932646') === 'China UnionPay');
	});

	it('has a prefix of 622913 and a length of 16', function() {
		assert(detectNetwork('6229134535394206') === 'China UnionPay');
	});

	it('has a prefix of 622914 and a length of 16', function() {
		assert(detectNetwork('6229143583271331') === 'China UnionPay');
	});

	it('has a prefix of 622915 and a length of 16', function() {
		assert(detectNetwork('6229159631445378') === 'China UnionPay');
	});

	it('has a prefix of 622916 and a length of 16', function() {
		assert(detectNetwork('6229164752080342') === 'China UnionPay');
	});

	it('has a prefix of 622917 and a length of 16', function() {
		assert(detectNetwork('6229177013079051') === 'China UnionPay');
	});

	it('has a prefix of 622918 and a length of 16', function() {
		assert(detectNetwork('6229185386268510') === 'China UnionPay');
	});

	it('has a prefix of 622919 and a length of 16', function() {
		assert(detectNetwork('6229193870535947') === 'China UnionPay');
	});

	it('has a prefix of 622920 and a length of 16', function() {
		assert(detectNetwork('6229207790233924') === 'China UnionPay');
	});

	it('has a prefix of 622921 and a length of 16', function() {
		assert(detectNetwork('6229211152384684') === 'China UnionPay');
	});

	it('has a prefix of 622922 and a length of 16', function() {
		assert(detectNetwork('6229228113048935') === 'China UnionPay');
	});

	it('has a prefix of 622923 and a length of 16', function() {
		assert(detectNetwork('6229239991504725') === 'China UnionPay');
	});

	it('has a prefix of 622924 and a length of 16', function() {
		assert(detectNetwork('6229244556035501') === 'China UnionPay');
	});

	it('has a prefix of 622925 and a length of 16', function() {
		assert(detectNetwork('6229253662544394') === 'China UnionPay');
	});

	it('has a prefix of 624 and a length of 17', function() {
		assert(detectNetwork('62417975559507262') === 'China UnionPay');
	});

	it('has a prefix of 625 and a length of 17', function() {
		assert(detectNetwork('62504500955185028') === 'China UnionPay');
	});

	it('has a prefix of 626 and a length of 17', function() {
		assert(detectNetwork('62604063828610152') === 'China UnionPay');
	});

	it('has a prefix of 6282 and a length of 17', function() {
		assert(detectNetwork('62822634031593559') === 'China UnionPay');
	});

	it('has a prefix of 6283 and a length of 17', function() {
		assert(detectNetwork('62831295943399469') === 'China UnionPay');
	});

	it('has a prefix of 6284 and a length of 17', function() {
		assert(detectNetwork('62843900484679429') === 'China UnionPay');
	});

	it('has a prefix of 6285 and a length of 17', function() {
		assert(detectNetwork('62853888212613120') === 'China UnionPay');
	});

	it('has a prefix of 6286 and a length of 17', function() {
		assert(detectNetwork('62867457472479735') === 'China UnionPay');
	});

	it('has a prefix of 6287 and a length of 17', function() {
		assert(detectNetwork('62872412004583736') === 'China UnionPay');
	});

	it('has a prefix of 6288 and a length of 17', function() {
		assert(detectNetwork('62886450452050109') === 'China UnionPay');
	});

	it('has a prefix of 622126 and a length of 17', function() {
		assert(detectNetwork('62212693720434434') === 'China UnionPay');
	});

	it('has a prefix of 622127 and a length of 17', function() {
		assert(detectNetwork('62212711962360176') === 'China UnionPay');
	});

	it('has a prefix of 622128 and a length of 17', function() {
		assert(detectNetwork('62212813687754852') === 'China UnionPay');
	});

	it('has a prefix of 622129 and a length of 17', function() {
		assert(detectNetwork('62212913694431891') === 'China UnionPay');
	});

	it('has a prefix of 622130 and a length of 17', function() {
		assert(detectNetwork('62213029393535307') === 'China UnionPay');
	});

	it('has a prefix of 622131 and a length of 17', function() {
		assert(detectNetwork('62213101285647824') === 'China UnionPay');
	});

	it('has a prefix of 622132 and a length of 17', function() {
		assert(detectNetwork('62213223147226607') === 'China UnionPay');
	});

	it('has a prefix of 622133 and a length of 17', function() {
		assert(detectNetwork('62213396425875551') === 'China UnionPay');
	});

	it('has a prefix of 622134 and a length of 17', function() {
		assert(detectNetwork('62213400670934706') === 'China UnionPay');
	});

	it('has a prefix of 622135 and a length of 17', function() {
		assert(detectNetwork('62213501900933874') === 'China UnionPay');
	});

	it('has a prefix of 622136 and a length of 17', function() {
		assert(detectNetwork('62213624893740266') === 'China UnionPay');
	});

	it('has a prefix of 622137 and a length of 17', function() {
		assert(detectNetwork('62213725479299960') === 'China UnionPay');
	});

	it('has a prefix of 622138 and a length of 17', function() {
		assert(detectNetwork('62213836792619029') === 'China UnionPay');
	});

	it('has a prefix of 622139 and a length of 17', function() {
		assert(detectNetwork('62213957535737932') === 'China UnionPay');
	});

	it('has a prefix of 622140 and a length of 17', function() {
		assert(detectNetwork('62214046168786214') === 'China UnionPay');
	});

	it('has a prefix of 622141 and a length of 17', function() {
		assert(detectNetwork('62214157026985309') === 'China UnionPay');
	});

	it('has a prefix of 622142 and a length of 17', function() {
		assert(detectNetwork('62214224743003791') === 'China UnionPay');
	});

	it('has a prefix of 622143 and a length of 17', function() {
		assert(detectNetwork('62214353667050207') === 'China UnionPay');
	});

	it('has a prefix of 622144 and a length of 17', function() {
		assert(detectNetwork('62214402529282778') === 'China UnionPay');
	});

	it('has a prefix of 622145 and a length of 17', function() {
		assert(detectNetwork('62214584771092916') === 'China UnionPay');
	});

	it('has a prefix of 622146 and a length of 17', function() {
		assert(detectNetwork('62214683638197239') === 'China UnionPay');
	});

	it('has a prefix of 622147 and a length of 17', function() {
		assert(detectNetwork('62214784365223675') === 'China UnionPay');
	});

	it('has a prefix of 622148 and a length of 17', function() {
		assert(detectNetwork('62214816174710283') === 'China UnionPay');
	});

	it('has a prefix of 622149 and a length of 17', function() {
		assert(detectNetwork('62214940378286561') === 'China UnionPay');
	});

	it('has a prefix of 622150 and a length of 17', function() {
		assert(detectNetwork('62215081943468126') === 'China UnionPay');
	});

	it('has a prefix of 622151 and a length of 17', function() {
		assert(detectNetwork('62215157490310392') === 'China UnionPay');
	});

	it('has a prefix of 622152 and a length of 17', function() {
		assert(detectNetwork('62215290246088848') === 'China UnionPay');
	});

	it('has a prefix of 622153 and a length of 17', function() {
		assert(detectNetwork('62215347634617199') === 'China UnionPay');
	});

	it('has a prefix of 622154 and a length of 17', function() {
		assert(detectNetwork('62215466702157773') === 'China UnionPay');
	});

	it('has a prefix of 622155 and a length of 17', function() {
		assert(detectNetwork('62215510294640495') === 'China UnionPay');
	});

	it('has a prefix of 622156 and a length of 17', function() {
		assert(detectNetwork('62215605696839686') === 'China UnionPay');
	});

	it('has a prefix of 622157 and a length of 17', function() {
		assert(detectNetwork('62215769102026585') === 'China UnionPay');
	});

	it('has a prefix of 622158 and a length of 17', function() {
		assert(detectNetwork('62215800160615643') === 'China UnionPay');
	});

	it('has a prefix of 622159 and a length of 17', function() {
		assert(detectNetwork('62215997264276665') === 'China UnionPay');
	});

	it('has a prefix of 622160 and a length of 17', function() {
		assert(detectNetwork('62216036317684328') === 'China UnionPay');
	});

	it('has a prefix of 622161 and a length of 17', function() {
		assert(detectNetwork('62216114076283400') === 'China UnionPay');
	});

	it('has a prefix of 622162 and a length of 17', function() {
		assert(detectNetwork('62216231899962903') === 'China UnionPay');
	});

	it('has a prefix of 622163 and a length of 17', function() {
		assert(detectNetwork('62216352023112421') === 'China UnionPay');
	});

	it('has a prefix of 622164 and a length of 17', function() {
		assert(detectNetwork('62216493022262534') === 'China UnionPay');
	});

	it('has a prefix of 622165 and a length of 17', function() {
		assert(detectNetwork('62216533748990383') === 'China UnionPay');
	});

	it('has a prefix of 622166 and a length of 17', function() {
		assert(detectNetwork('62216683400524690') === 'China UnionPay');
	});

	it('has a prefix of 622167 and a length of 17', function() {
		assert(detectNetwork('62216768819856060') === 'China UnionPay');
	});

	it('has a prefix of 622168 and a length of 17', function() {
		assert(detectNetwork('62216828182585329') === 'China UnionPay');
	});

	it('has a prefix of 622169 and a length of 17', function() {
		assert(detectNetwork('62216919823499737') === 'China UnionPay');
	});

	it('has a prefix of 622170 and a length of 17', function() {
		assert(detectNetwork('62217029292578753') === 'China UnionPay');
	});

	it('has a prefix of 622171 and a length of 17', function() {
		assert(detectNetwork('62217171268510951') === 'China UnionPay');
	});

	it('has a prefix of 622172 and a length of 17', function() {
		assert(detectNetwork('62217265242780671') === 'China UnionPay');
	});

	it('has a prefix of 622173 and a length of 17', function() {
		assert(detectNetwork('62217307927261261') === 'China UnionPay');
	});

	it('has a prefix of 622174 and a length of 17', function() {
		assert(detectNetwork('62217465044888591') === 'China UnionPay');
	});

	it('has a prefix of 622175 and a length of 17', function() {
		assert(detectNetwork('62217530380412226') === 'China UnionPay');
	});

	it('has a prefix of 622176 and a length of 17', function() {
		assert(detectNetwork('62217699116602631') === 'China UnionPay');
	});

	it('has a prefix of 622177 and a length of 17', function() {
		assert(detectNetwork('62217732240658172') === 'China UnionPay');
	});

	it('has a prefix of 622178 and a length of 17', function() {
		assert(detectNetwork('62217850102392329') === 'China UnionPay');
	});

	it('has a prefix of 622179 and a length of 17', function() {
		assert(detectNetwork('62217925674427665') === 'China UnionPay');
	});

	it('has a prefix of 622180 and a length of 17', function() {
		assert(detectNetwork('62218025345131192') === 'China UnionPay');
	});

	it('has a prefix of 622181 and a length of 17', function() {
		assert(detectNetwork('62218179298027461') === 'China UnionPay');
	});

	it('has a prefix of 622182 and a length of 17', function() {
		assert(detectNetwork('62218267231724028') === 'China UnionPay');
	});

	it('has a prefix of 622183 and a length of 17', function() {
		assert(detectNetwork('62218383082453793') === 'China UnionPay');
	});

	it('has a prefix of 622184 and a length of 17', function() {
		assert(detectNetwork('62218473312537692') === 'China UnionPay');
	});

	it('has a prefix of 622185 and a length of 17', function() {
		assert(detectNetwork('62218568100673231') === 'China UnionPay');
	});

	it('has a prefix of 622186 and a length of 17', function() {
		assert(detectNetwork('62218663624062140') === 'China UnionPay');
	});

	it('has a prefix of 622187 and a length of 17', function() {
		assert(detectNetwork('62218743213756944') === 'China UnionPay');
	});

	it('has a prefix of 622188 and a length of 17', function() {
		assert(detectNetwork('62218822577175805') === 'China UnionPay');
	});

	it('has a prefix of 622189 and a length of 17', function() {
		assert(detectNetwork('62218902262404611') === 'China UnionPay');
	});

	it('has a prefix of 622190 and a length of 17', function() {
		assert(detectNetwork('62219025571579645') === 'China UnionPay');
	});

	it('has a prefix of 622191 and a length of 17', function() {
		assert(detectNetwork('62219184389322971') === 'China UnionPay');
	});

	it('has a prefix of 622192 and a length of 17', function() {
		assert(detectNetwork('62219226589587886') === 'China UnionPay');
	});

	it('has a prefix of 622193 and a length of 17', function() {
		assert(detectNetwork('62219386323841013') === 'China UnionPay');
	});

	it('has a prefix of 622194 and a length of 17', function() {
		assert(detectNetwork('62219404776093764') === 'China UnionPay');
	});

	it('has a prefix of 622195 and a length of 17', function() {
		assert(detectNetwork('62219518180773301') === 'China UnionPay');
	});

	it('has a prefix of 622196 and a length of 17', function() {
		assert(detectNetwork('62219667091639971') === 'China UnionPay');
	});

	it('has a prefix of 622197 and a length of 17', function() {
		assert(detectNetwork('62219798908796170') === 'China UnionPay');
	});

	it('has a prefix of 622198 and a length of 17', function() {
		assert(detectNetwork('62219814692644596') === 'China UnionPay');
	});

	it('has a prefix of 622199 and a length of 17', function() {
		assert(detectNetwork('62219983831485867') === 'China UnionPay');
	});

	it('has a prefix of 622200 and a length of 17', function() {
		assert(detectNetwork('62220066153912469') === 'China UnionPay');
	});

	it('has a prefix of 622201 and a length of 17', function() {
		assert(detectNetwork('62220120651492487') === 'China UnionPay');
	});

	it('has a prefix of 622202 and a length of 17', function() {
		assert(detectNetwork('62220253933725555') === 'China UnionPay');
	});

	it('has a prefix of 622203 and a length of 17', function() {
		assert(detectNetwork('62220323005135143') === 'China UnionPay');
	});

	it('has a prefix of 622204 and a length of 17', function() {
		assert(detectNetwork('62220415026273491') === 'China UnionPay');
	});

	it('has a prefix of 622205 and a length of 17', function() {
		assert(detectNetwork('62220584336443803') === 'China UnionPay');
	});

	it('has a prefix of 622206 and a length of 17', function() {
		assert(detectNetwork('62220617029824874') === 'China UnionPay');
	});

	it('has a prefix of 622207 and a length of 17', function() {
		assert(detectNetwork('62220799213590293') === 'China UnionPay');
	});

	it('has a prefix of 622208 and a length of 17', function() {
		assert(detectNetwork('62220851407240738') === 'China UnionPay');
	});

	it('has a prefix of 622209 and a length of 17', function() {
		assert(detectNetwork('62220954952739280') === 'China UnionPay');
	});

	it('has a prefix of 622210 and a length of 17', function() {
		assert(detectNetwork('62221073569299609') === 'China UnionPay');
	});

	it('has a prefix of 622211 and a length of 17', function() {
		assert(detectNetwork('62221151397177671') === 'China UnionPay');
	});

	it('has a prefix of 622212 and a length of 17', function() {
		assert(detectNetwork('62221203155564748') === 'China UnionPay');
	});

	it('has a prefix of 622213 and a length of 17', function() {
		assert(detectNetwork('62221393595592478') === 'China UnionPay');
	});

	it('has a prefix of 622214 and a length of 17', function() {
		assert(detectNetwork('62221401946483197') === 'China UnionPay');
	});

	it('has a prefix of 622215 and a length of 17', function() {
		assert(detectNetwork('62221563523012728') === 'China UnionPay');
	});

	it('has a prefix of 622216 and a length of 17', function() {
		assert(detectNetwork('62221632736982197') === 'China UnionPay');
	});

	it('has a prefix of 622217 and a length of 17', function() {
		assert(detectNetwork('62221704865572732') === 'China UnionPay');
	});

	it('has a prefix of 622218 and a length of 17', function() {
		assert(detectNetwork('62221826558910840') === 'China UnionPay');
	});

	it('has a prefix of 622219 and a length of 17', function() {
		assert(detectNetwork('62221938349979861') === 'China UnionPay');
	});

	it('has a prefix of 622220 and a length of 17', function() {
		assert(detectNetwork('62222039054825600') === 'China UnionPay');
	});

	it('has a prefix of 622221 and a length of 17', function() {
		assert(detectNetwork('62222118114348071') === 'China UnionPay');
	});

	it('has a prefix of 622222 and a length of 17', function() {
		assert(detectNetwork('62222285478431700') === 'China UnionPay');
	});

	it('has a prefix of 622223 and a length of 17', function() {
		assert(detectNetwork('62222368983301364') === 'China UnionPay');
	});

	it('has a prefix of 622224 and a length of 17', function() {
		assert(detectNetwork('62222458580686462') === 'China UnionPay');
	});

	it('has a prefix of 622225 and a length of 17', function() {
		assert(detectNetwork('62222531706450631') === 'China UnionPay');
	});

	it('has a prefix of 622226 and a length of 17', function() {
		assert(detectNetwork('62222633840400256') === 'China UnionPay');
	});

	it('has a prefix of 622227 and a length of 17', function() {
		assert(detectNetwork('62222794859864035') === 'China UnionPay');
	});

	it('has a prefix of 622228 and a length of 17', function() {
		assert(detectNetwork('62222826255155397') === 'China UnionPay');
	});

	it('has a prefix of 622229 and a length of 17', function() {
		assert(detectNetwork('62222953310767223') === 'China UnionPay');
	});

	it('has a prefix of 622230 and a length of 17', function() {
		assert(detectNetwork('62223032110841381') === 'China UnionPay');
	});

	it('has a prefix of 622231 and a length of 17', function() {
		assert(detectNetwork('62223181395868775') === 'China UnionPay');
	});

	it('has a prefix of 622232 and a length of 17', function() {
		assert(detectNetwork('62223216822210716') === 'China UnionPay');
	});

	it('has a prefix of 622233 and a length of 17', function() {
		assert(detectNetwork('62223370227219280') === 'China UnionPay');
	});

	it('has a prefix of 622234 and a length of 17', function() {
		assert(detectNetwork('62223421656613271') === 'China UnionPay');
	});

	it('has a prefix of 622235 and a length of 17', function() {
		assert(detectNetwork('62223590496514277') === 'China UnionPay');
	});

	it('has a prefix of 622236 and a length of 17', function() {
		assert(detectNetwork('62223696990399149') === 'China UnionPay');
	});

	it('has a prefix of 622237 and a length of 17', function() {
		assert(detectNetwork('62223783335534004') === 'China UnionPay');
	});

	it('has a prefix of 622238 and a length of 17', function() {
		assert(detectNetwork('62223830450221145') === 'China UnionPay');
	});

	it('has a prefix of 622239 and a length of 17', function() {
		assert(detectNetwork('62223928256878336') === 'China UnionPay');
	});

	it('has a prefix of 622240 and a length of 17', function() {
		assert(detectNetwork('62224033938290815') === 'China UnionPay');
	});

	it('has a prefix of 622241 and a length of 17', function() {
		assert(detectNetwork('62224186413995551') === 'China UnionPay');
	});

	it('has a prefix of 622242 and a length of 17', function() {
		assert(detectNetwork('62224297959421560') === 'China UnionPay');
	});

	it('has a prefix of 622243 and a length of 17', function() {
		assert(detectNetwork('62224371800323045') === 'China UnionPay');
	});

	it('has a prefix of 622244 and a length of 17', function() {
		assert(detectNetwork('62224441803889647') === 'China UnionPay');
	});

	it('has a prefix of 622245 and a length of 17', function() {
		assert(detectNetwork('62224547099307176') === 'China UnionPay');
	});

	it('has a prefix of 622246 and a length of 17', function() {
		assert(detectNetwork('62224657993334471') === 'China UnionPay');
	});

	it('has a prefix of 622247 and a length of 17', function() {
		assert(detectNetwork('62224727940408244') === 'China UnionPay');
	});

	it('has a prefix of 622248 and a length of 17', function() {
		assert(detectNetwork('62224874148763231') === 'China UnionPay');
	});

	it('has a prefix of 622249 and a length of 17', function() {
		assert(detectNetwork('62224907506596872') === 'China UnionPay');
	});

	it('has a prefix of 622250 and a length of 17', function() {
		assert(detectNetwork('62225052421514581') === 'China UnionPay');
	});

	it('has a prefix of 622251 and a length of 17', function() {
		assert(detectNetwork('62225169869311821') === 'China UnionPay');
	});

	it('has a prefix of 622252 and a length of 17', function() {
		assert(detectNetwork('62225248125944351') === 'China UnionPay');
	});

	it('has a prefix of 622253 and a length of 17', function() {
		assert(detectNetwork('62225317206301588') === 'China UnionPay');
	});

	it('has a prefix of 622254 and a length of 17', function() {
		assert(detectNetwork('62225445614828776') === 'China UnionPay');
	});

	it('has a prefix of 622255 and a length of 17', function() {
		assert(detectNetwork('62225510253364960') === 'China UnionPay');
	});

	it('has a prefix of 622256 and a length of 17', function() {
		assert(detectNetwork('62225659942793731') === 'China UnionPay');
	});

	it('has a prefix of 622257 and a length of 17', function() {
		assert(detectNetwork('62225733684064370') === 'China UnionPay');
	});

	it('has a prefix of 622258 and a length of 17', function() {
		assert(detectNetwork('62225861211429527') === 'China UnionPay');
	});

	it('has a prefix of 622259 and a length of 17', function() {
		assert(detectNetwork('62225996615542283') === 'China UnionPay');
	});

	it('has a prefix of 622260 and a length of 17', function() {
		assert(detectNetwork('62226083015618051') === 'China UnionPay');
	});

	it('has a prefix of 622261 and a length of 17', function() {
		assert(detectNetwork('62226132006235973') === 'China UnionPay');
	});

	it('has a prefix of 622262 and a length of 17', function() {
		assert(detectNetwork('62226264718355907') === 'China UnionPay');
	});

	it('has a prefix of 622263 and a length of 17', function() {
		assert(detectNetwork('62226367330061625') === 'China UnionPay');
	});

	it('has a prefix of 622264 and a length of 17', function() {
		assert(detectNetwork('62226459836606413') === 'China UnionPay');
	});

	it('has a prefix of 622265 and a length of 17', function() {
		assert(detectNetwork('62226598764525974') === 'China UnionPay');
	});

	it('has a prefix of 622266 and a length of 17', function() {
		assert(detectNetwork('62226612714443322') === 'China UnionPay');
	});

	it('has a prefix of 622267 and a length of 17', function() {
		assert(detectNetwork('62226764353524937') === 'China UnionPay');
	});

	it('has a prefix of 622268 and a length of 17', function() {
		assert(detectNetwork('62226861484582859') === 'China UnionPay');
	});

	it('has a prefix of 622269 and a length of 17', function() {
		assert(detectNetwork('62226957872758445') === 'China UnionPay');
	});

	it('has a prefix of 622270 and a length of 17', function() {
		assert(detectNetwork('62227085615607126') === 'China UnionPay');
	});

	it('has a prefix of 622271 and a length of 17', function() {
		assert(detectNetwork('62227188561927985') === 'China UnionPay');
	});

	it('has a prefix of 622272 and a length of 17', function() {
		assert(detectNetwork('62227267953780392') === 'China UnionPay');
	});

	it('has a prefix of 622273 and a length of 17', function() {
		assert(detectNetwork('62227352477767670') === 'China UnionPay');
	});

	it('has a prefix of 622274 and a length of 17', function() {
		assert(detectNetwork('62227406080354324') === 'China UnionPay');
	});

	it('has a prefix of 622275 and a length of 17', function() {
		assert(detectNetwork('62227535282869601') === 'China UnionPay');
	});

	it('has a prefix of 622276 and a length of 17', function() {
		assert(detectNetwork('62227649903756706') === 'China UnionPay');
	});

	it('has a prefix of 622277 and a length of 17', function() {
		assert(detectNetwork('62227753489674046') === 'China UnionPay');
	});

	it('has a prefix of 622278 and a length of 17', function() {
		assert(detectNetwork('62227809752135667') === 'China UnionPay');
	});

	it('has a prefix of 622279 and a length of 17', function() {
		assert(detectNetwork('62227912968375567') === 'China UnionPay');
	});

	it('has a prefix of 622280 and a length of 17', function() {
		assert(detectNetwork('62228056428483668') === 'China UnionPay');
	});

	it('has a prefix of 622281 and a length of 17', function() {
		assert(detectNetwork('62228194946405702') === 'China UnionPay');
	});

	it('has a prefix of 622282 and a length of 17', function() {
		assert(detectNetwork('62228207904089809') === 'China UnionPay');
	});

	it('has a prefix of 622283 and a length of 17', function() {
		assert(detectNetwork('62228350791965082') === 'China UnionPay');
	});

	it('has a prefix of 622284 and a length of 17', function() {
		assert(detectNetwork('62228466625940077') === 'China UnionPay');
	});

	it('has a prefix of 622285 and a length of 17', function() {
		assert(detectNetwork('62228559941668264') === 'China UnionPay');
	});

	it('has a prefix of 622286 and a length of 17', function() {
		assert(detectNetwork('62228605954489072') === 'China UnionPay');
	});

	it('has a prefix of 622287 and a length of 17', function() {
		assert(detectNetwork('62228759096117876') === 'China UnionPay');
	});

	it('has a prefix of 622288 and a length of 17', function() {
		assert(detectNetwork('62228808186153858') === 'China UnionPay');
	});

	it('has a prefix of 622289 and a length of 17', function() {
		assert(detectNetwork('62228965141164901') === 'China UnionPay');
	});

	it('has a prefix of 622290 and a length of 17', function() {
		assert(detectNetwork('62229058791383210') === 'China UnionPay');
	});

	it('has a prefix of 622291 and a length of 17', function() {
		assert(detectNetwork('62229133237465134') === 'China UnionPay');
	});

	it('has a prefix of 622292 and a length of 17', function() {
		assert(detectNetwork('62229243712826617') === 'China UnionPay');
	});

	it('has a prefix of 622293 and a length of 17', function() {
		assert(detectNetwork('62229391602105506') === 'China UnionPay');
	});

	it('has a prefix of 622294 and a length of 17', function() {
		assert(detectNetwork('62229418972675029') === 'China UnionPay');
	});

	it('has a prefix of 622295 and a length of 17', function() {
		assert(detectNetwork('62229512508849126') === 'China UnionPay');
	});

	it('has a prefix of 622296 and a length of 17', function() {
		assert(detectNetwork('62229685808144487') === 'China UnionPay');
	});

	it('has a prefix of 622297 and a length of 17', function() {
		assert(detectNetwork('62229729001198626') === 'China UnionPay');
	});

	it('has a prefix of 622298 and a length of 17', function() {
		assert(detectNetwork('62229869083146403') === 'China UnionPay');
	});

	it('has a prefix of 622299 and a length of 17', function() {
		assert(detectNetwork('62229928291223461') === 'China UnionPay');
	});

	it('has a prefix of 622300 and a length of 17', function() {
		assert(detectNetwork('62230083443834619') === 'China UnionPay');
	});

	it('has a prefix of 622301 and a length of 17', function() {
		assert(detectNetwork('62230160757432042') === 'China UnionPay');
	});

	it('has a prefix of 622302 and a length of 17', function() {
		assert(detectNetwork('62230215288437520') === 'China UnionPay');
	});

	it('has a prefix of 622303 and a length of 17', function() {
		assert(detectNetwork('62230395186665690') === 'China UnionPay');
	});

	it('has a prefix of 622304 and a length of 17', function() {
		assert(detectNetwork('62230441759864929') === 'China UnionPay');
	});

	it('has a prefix of 622305 and a length of 17', function() {
		assert(detectNetwork('62230565642188667') === 'China UnionPay');
	});

	it('has a prefix of 622306 and a length of 17', function() {
		assert(detectNetwork('62230663991881872') === 'China UnionPay');
	});

	it('has a prefix of 622307 and a length of 17', function() {
		assert(detectNetwork('62230783323949982') === 'China UnionPay');
	});

	it('has a prefix of 622308 and a length of 17', function() {
		assert(detectNetwork('62230868785236060') === 'China UnionPay');
	});

	it('has a prefix of 622309 and a length of 17', function() {
		assert(detectNetwork('62230915053590021') === 'China UnionPay');
	});

	it('has a prefix of 622310 and a length of 17', function() {
		assert(detectNetwork('62231068601911468') === 'China UnionPay');
	});

	it('has a prefix of 622311 and a length of 17', function() {
		assert(detectNetwork('62231156212120250') === 'China UnionPay');
	});

	it('has a prefix of 622312 and a length of 17', function() {
		assert(detectNetwork('62231280593971445') === 'China UnionPay');
	});

	it('has a prefix of 622313 and a length of 17', function() {
		assert(detectNetwork('62231300860833881') === 'China UnionPay');
	});

	it('has a prefix of 622314 and a length of 17', function() {
		assert(detectNetwork('62231412168177752') === 'China UnionPay');
	});

	it('has a prefix of 622315 and a length of 17', function() {
		assert(detectNetwork('62231548662919221') === 'China UnionPay');
	});

	it('has a prefix of 622316 and a length of 17', function() {
		assert(detectNetwork('62231633672537700') === 'China UnionPay');
	});

	it('has a prefix of 622317 and a length of 17', function() {
		assert(detectNetwork('62231741400868389') === 'China UnionPay');
	});

	it('has a prefix of 622318 and a length of 17', function() {
		assert(detectNetwork('62231862893486183') === 'China UnionPay');
	});

	it('has a prefix of 622319 and a length of 17', function() {
		assert(detectNetwork('62231967386679194') === 'China UnionPay');
	});

	it('has a prefix of 622320 and a length of 17', function() {
		assert(detectNetwork('62232030086514445') === 'China UnionPay');
	});

	it('has a prefix of 622321 and a length of 17', function() {
		assert(detectNetwork('62232134668114505') === 'China UnionPay');
	});

	it('has a prefix of 622322 and a length of 17', function() {
		assert(detectNetwork('62232216027210407') === 'China UnionPay');
	});

	it('has a prefix of 622323 and a length of 17', function() {
		assert(detectNetwork('62232387151283371') === 'China UnionPay');
	});

	it('has a prefix of 622324 and a length of 17', function() {
		assert(detectNetwork('62232407865201608') === 'China UnionPay');
	});

	it('has a prefix of 622325 and a length of 17', function() {
		assert(detectNetwork('62232599443135314') === 'China UnionPay');
	});

	it('has a prefix of 622326 and a length of 17', function() {
		assert(detectNetwork('62232668171145548') === 'China UnionPay');
	});

	it('has a prefix of 622327 and a length of 17', function() {
		assert(detectNetwork('62232745376346247') === 'China UnionPay');
	});

	it('has a prefix of 622328 and a length of 17', function() {
		assert(detectNetwork('62232855290400015') === 'China UnionPay');
	});

	it('has a prefix of 622329 and a length of 17', function() {
		assert(detectNetwork('62232916600213886') === 'China UnionPay');
	});

	it('has a prefix of 622330 and a length of 17', function() {
		assert(detectNetwork('62233046235093416') === 'China UnionPay');
	});

	it('has a prefix of 622331 and a length of 17', function() {
		assert(detectNetwork('62233116517789095') === 'China UnionPay');
	});

	it('has a prefix of 622332 and a length of 17', function() {
		assert(detectNetwork('62233274316477014') === 'China UnionPay');
	});

	it('has a prefix of 622333 and a length of 17', function() {
		assert(detectNetwork('62233300338232383') === 'China UnionPay');
	});

	it('has a prefix of 622334 and a length of 17', function() {
		assert(detectNetwork('62233422389129913') === 'China UnionPay');
	});

	it('has a prefix of 622335 and a length of 17', function() {
		assert(detectNetwork('62233527553379314') === 'China UnionPay');
	});

	it('has a prefix of 622336 and a length of 17', function() {
		assert(detectNetwork('62233607417400772') === 'China UnionPay');
	});

	it('has a prefix of 622337 and a length of 17', function() {
		assert(detectNetwork('62233716167498963') === 'China UnionPay');
	});

	it('has a prefix of 622338 and a length of 17', function() {
		assert(detectNetwork('62233854122301120') === 'China UnionPay');
	});

	it('has a prefix of 622339 and a length of 17', function() {
		assert(detectNetwork('62233980479070720') === 'China UnionPay');
	});

	it('has a prefix of 622340 and a length of 17', function() {
		assert(detectNetwork('62234042211098019') === 'China UnionPay');
	});

	it('has a prefix of 622341 and a length of 17', function() {
		assert(detectNetwork('62234129166353819') === 'China UnionPay');
	});

	it('has a prefix of 622342 and a length of 17', function() {
		assert(detectNetwork('62234217909501158') === 'China UnionPay');
	});

	it('has a prefix of 622343 and a length of 17', function() {
		assert(detectNetwork('62234387909347644') === 'China UnionPay');
	});

	it('has a prefix of 622344 and a length of 17', function() {
		assert(detectNetwork('62234481337254451') === 'China UnionPay');
	});

	it('has a prefix of 622345 and a length of 17', function() {
		assert(detectNetwork('62234544309933193') === 'China UnionPay');
	});

	it('has a prefix of 622346 and a length of 17', function() {
		assert(detectNetwork('62234678361731330') === 'China UnionPay');
	});

	it('has a prefix of 622347 and a length of 17', function() {
		assert(detectNetwork('62234708393096221') === 'China UnionPay');
	});

	it('has a prefix of 622348 and a length of 17', function() {
		assert(detectNetwork('62234848105381182') === 'China UnionPay');
	});

	it('has a prefix of 622349 and a length of 17', function() {
		assert(detectNetwork('62234932484797433') === 'China UnionPay');
	});

	it('has a prefix of 622350 and a length of 17', function() {
		assert(detectNetwork('62235081021521474') === 'China UnionPay');
	});

	it('has a prefix of 622351 and a length of 17', function() {
		assert(detectNetwork('62235115528140692') === 'China UnionPay');
	});

	it('has a prefix of 622352 and a length of 17', function() {
		assert(detectNetwork('62235210522955756') === 'China UnionPay');
	});

	it('has a prefix of 622353 and a length of 17', function() {
		assert(detectNetwork('62235386717940942') === 'China UnionPay');
	});

	it('has a prefix of 622354 and a length of 17', function() {
		assert(detectNetwork('62235444710086334') === 'China UnionPay');
	});

	it('has a prefix of 622355 and a length of 17', function() {
		assert(detectNetwork('62235556755839401') === 'China UnionPay');
	});

	it('has a prefix of 622356 and a length of 17', function() {
		assert(detectNetwork('62235618042014997') === 'China UnionPay');
	});

	it('has a prefix of 622357 and a length of 17', function() {
		assert(detectNetwork('62235741038035779') === 'China UnionPay');
	});

	it('has a prefix of 622358 and a length of 17', function() {
		assert(detectNetwork('62235802183592383') === 'China UnionPay');
	});

	it('has a prefix of 622359 and a length of 17', function() {
		assert(detectNetwork('62235998039681738') === 'China UnionPay');
	});

	it('has a prefix of 622360 and a length of 17', function() {
		assert(detectNetwork('62236016978402138') === 'China UnionPay');
	});

	it('has a prefix of 622361 and a length of 17', function() {
		assert(detectNetwork('62236106177207140') === 'China UnionPay');
	});

	it('has a prefix of 622362 and a length of 17', function() {
		assert(detectNetwork('62236297029908148') === 'China UnionPay');
	});

	it('has a prefix of 622363 and a length of 17', function() {
		assert(detectNetwork('62236379232391494') === 'China UnionPay');
	});

	it('has a prefix of 622364 and a length of 17', function() {
		assert(detectNetwork('62236497094313702') === 'China UnionPay');
	});

	it('has a prefix of 622365 and a length of 17', function() {
		assert(detectNetwork('62236528418762948') === 'China UnionPay');
	});

	it('has a prefix of 622366 and a length of 17', function() {
		assert(detectNetwork('62236670030225122') === 'China UnionPay');
	});

	it('has a prefix of 622367 and a length of 17', function() {
		assert(detectNetwork('62236772547225910') === 'China UnionPay');
	});

	it('has a prefix of 622368 and a length of 17', function() {
		assert(detectNetwork('62236848725688281') === 'China UnionPay');
	});

	it('has a prefix of 622369 and a length of 17', function() {
		assert(detectNetwork('62236964285699594') === 'China UnionPay');
	});

	it('has a prefix of 622370 and a length of 17', function() {
		assert(detectNetwork('62237002718040352') === 'China UnionPay');
	});

	it('has a prefix of 622371 and a length of 17', function() {
		assert(detectNetwork('62237109679170502') === 'China UnionPay');
	});

	it('has a prefix of 622372 and a length of 17', function() {
		assert(detectNetwork('62237249956535290') === 'China UnionPay');
	});

	it('has a prefix of 622373 and a length of 17', function() {
		assert(detectNetwork('62237354368520426') === 'China UnionPay');
	});

	it('has a prefix of 622374 and a length of 17', function() {
		assert(detectNetwork('62237408602153886') === 'China UnionPay');
	});

	it('has a prefix of 622375 and a length of 17', function() {
		assert(detectNetwork('62237547756480297') === 'China UnionPay');
	});

	it('has a prefix of 622376 and a length of 17', function() {
		assert(detectNetwork('62237674235889201') === 'China UnionPay');
	});

	it('has a prefix of 622377 and a length of 17', function() {
		assert(detectNetwork('62237785260612413') === 'China UnionPay');
	});

	it('has a prefix of 622378 and a length of 17', function() {
		assert(detectNetwork('62237895409469930') === 'China UnionPay');
	});

	it('has a prefix of 622379 and a length of 17', function() {
		assert(detectNetwork('62237917960855461') === 'China UnionPay');
	});

	it('has a prefix of 622380 and a length of 17', function() {
		assert(detectNetwork('62238026988909493') === 'China UnionPay');
	});

	it('has a prefix of 622381 and a length of 17', function() {
		assert(detectNetwork('62238163264998179') === 'China UnionPay');
	});

	it('has a prefix of 622382 and a length of 17', function() {
		assert(detectNetwork('62238210097274019') === 'China UnionPay');
	});

	it('has a prefix of 622383 and a length of 17', function() {
		assert(detectNetwork('62238369421696362') === 'China UnionPay');
	});

	it('has a prefix of 622384 and a length of 17', function() {
		assert(detectNetwork('62238400114352620') === 'China UnionPay');
	});

	it('has a prefix of 622385 and a length of 17', function() {
		assert(detectNetwork('62238576070228897') === 'China UnionPay');
	});

	it('has a prefix of 622386 and a length of 17', function() {
		assert(detectNetwork('62238682431888897') === 'China UnionPay');
	});

	it('has a prefix of 622387 and a length of 17', function() {
		assert(detectNetwork('62238755101705958') === 'China UnionPay');
	});

	it('has a prefix of 622388 and a length of 17', function() {
		assert(detectNetwork('62238893852201076') === 'China UnionPay');
	});

	it('has a prefix of 622389 and a length of 17', function() {
		assert(detectNetwork('62238904883472885') === 'China UnionPay');
	});

	it('has a prefix of 622390 and a length of 17', function() {
		assert(detectNetwork('62239088152849966') === 'China UnionPay');
	});

	it('has a prefix of 622391 and a length of 17', function() {
		assert(detectNetwork('62239167014422874') === 'China UnionPay');
	});

	it('has a prefix of 622392 and a length of 17', function() {
		assert(detectNetwork('62239290754769051') === 'China UnionPay');
	});

	it('has a prefix of 622393 and a length of 17', function() {
		assert(detectNetwork('62239304976959581') === 'China UnionPay');
	});

	it('has a prefix of 622394 and a length of 17', function() {
		assert(detectNetwork('62239474024849264') === 'China UnionPay');
	});

	it('has a prefix of 622395 and a length of 17', function() {
		assert(detectNetwork('62239538397340311') === 'China UnionPay');
	});

	it('has a prefix of 622396 and a length of 17', function() {
		assert(detectNetwork('62239607876423947') === 'China UnionPay');
	});

	it('has a prefix of 622397 and a length of 17', function() {
		assert(detectNetwork('62239725497574969') === 'China UnionPay');
	});

	it('has a prefix of 622398 and a length of 17', function() {
		assert(detectNetwork('62239802137773796') === 'China UnionPay');
	});

	it('has a prefix of 622399 and a length of 17', function() {
		assert(detectNetwork('62239936413115366') === 'China UnionPay');
	});

	it('has a prefix of 622400 and a length of 17', function() {
		assert(detectNetwork('62240028690959451') === 'China UnionPay');
	});

	it('has a prefix of 622401 and a length of 17', function() {
		assert(detectNetwork('62240139610672850') === 'China UnionPay');
	});

	it('has a prefix of 622402 and a length of 17', function() {
		assert(detectNetwork('62240272379488180') === 'China UnionPay');
	});

	it('has a prefix of 622403 and a length of 17', function() {
		assert(detectNetwork('62240321562520311') === 'China UnionPay');
	});

	it('has a prefix of 622404 and a length of 17', function() {
		assert(detectNetwork('62240402900846212') === 'China UnionPay');
	});

	it('has a prefix of 622405 and a length of 17', function() {
		assert(detectNetwork('62240530092101554') === 'China UnionPay');
	});

	it('has a prefix of 622406 and a length of 17', function() {
		assert(detectNetwork('62240666861717535') === 'China UnionPay');
	});

	it('has a prefix of 622407 and a length of 17', function() {
		assert(detectNetwork('62240760789219444') === 'China UnionPay');
	});

	it('has a prefix of 622408 and a length of 17', function() {
		assert(detectNetwork('62240898770935726') === 'China UnionPay');
	});

	it('has a prefix of 622409 and a length of 17', function() {
		assert(detectNetwork('62240945189310349') === 'China UnionPay');
	});

	it('has a prefix of 622410 and a length of 17', function() {
		assert(detectNetwork('62241014099573691') === 'China UnionPay');
	});

	it('has a prefix of 622411 and a length of 17', function() {
		assert(detectNetwork('62241145311894396') === 'China UnionPay');
	});

	it('has a prefix of 622412 and a length of 17', function() {
		assert(detectNetwork('62241253919199949') === 'China UnionPay');
	});

	it('has a prefix of 622413 and a length of 17', function() {
		assert(detectNetwork('62241311343480312') === 'China UnionPay');
	});

	it('has a prefix of 622414 and a length of 17', function() {
		assert(detectNetwork('62241448191800622') === 'China UnionPay');
	});

	it('has a prefix of 622415 and a length of 17', function() {
		assert(detectNetwork('62241562403919121') === 'China UnionPay');
	});

	it('has a prefix of 622416 and a length of 17', function() {
		assert(detectNetwork('62241696563635020') === 'China UnionPay');
	});

	it('has a prefix of 622417 and a length of 17', function() {
		assert(detectNetwork('62241790636053339') === 'China UnionPay');
	});

	it('has a prefix of 622418 and a length of 17', function() {
		assert(detectNetwork('62241877557455823') === 'China UnionPay');
	});

	it('has a prefix of 622419 and a length of 17', function() {
		assert(detectNetwork('62241997839049976') === 'China UnionPay');
	});

	it('has a prefix of 622420 and a length of 17', function() {
		assert(detectNetwork('62242014638291069') === 'China UnionPay');
	});

	it('has a prefix of 622421 and a length of 17', function() {
		assert(detectNetwork('62242173042229688') === 'China UnionPay');
	});

	it('has a prefix of 622422 and a length of 17', function() {
		assert(detectNetwork('62242294649781301') === 'China UnionPay');
	});

	it('has a prefix of 622423 and a length of 17', function() {
		assert(detectNetwork('62242342896180832') === 'China UnionPay');
	});

	it('has a prefix of 622424 and a length of 17', function() {
		assert(detectNetwork('62242457432653865') === 'China UnionPay');
	});

	it('has a prefix of 622425 and a length of 17', function() {
		assert(detectNetwork('62242535560463369') === 'China UnionPay');
	});

	it('has a prefix of 622426 and a length of 17', function() {
		assert(detectNetwork('62242606386917995') === 'China UnionPay');
	});

	it('has a prefix of 622427 and a length of 17', function() {
		assert(detectNetwork('62242791448770122') === 'China UnionPay');
	});

	it('has a prefix of 622428 and a length of 17', function() {
		assert(detectNetwork('62242896432258030') === 'China UnionPay');
	});

	it('has a prefix of 622429 and a length of 17', function() {
		assert(detectNetwork('62242920738624414') === 'China UnionPay');
	});

	it('has a prefix of 622430 and a length of 17', function() {
		assert(detectNetwork('62243081905053196') === 'China UnionPay');
	});

	it('has a prefix of 622431 and a length of 17', function() {
		assert(detectNetwork('62243142585684877') === 'China UnionPay');
	});

	it('has a prefix of 622432 and a length of 17', function() {
		assert(detectNetwork('62243253896089670') === 'China UnionPay');
	});

	it('has a prefix of 622433 and a length of 17', function() {
		assert(detectNetwork('62243390830261123') === 'China UnionPay');
	});

	it('has a prefix of 622434 and a length of 17', function() {
		assert(detectNetwork('62243441860030558') === 'China UnionPay');
	});

	it('has a prefix of 622435 and a length of 17', function() {
		assert(detectNetwork('62243573038019334') === 'China UnionPay');
	});

	it('has a prefix of 622436 and a length of 17', function() {
		assert(detectNetwork('62243610015966697') === 'China UnionPay');
	});

	it('has a prefix of 622437 and a length of 17', function() {
		assert(detectNetwork('62243702607487792') === 'China UnionPay');
	});

	it('has a prefix of 622438 and a length of 17', function() {
		assert(detectNetwork('62243891992720335') === 'China UnionPay');
	});

	it('has a prefix of 622439 and a length of 17', function() {
		assert(detectNetwork('62243940728381291') === 'China UnionPay');
	});

	it('has a prefix of 622440 and a length of 17', function() {
		assert(detectNetwork('62244091063323962') === 'China UnionPay');
	});

	it('has a prefix of 622441 and a length of 17', function() {
		assert(detectNetwork('62244157508100462') === 'China UnionPay');
	});

	it('has a prefix of 622442 and a length of 17', function() {
		assert(detectNetwork('62244249762300467') === 'China UnionPay');
	});

	it('has a prefix of 622443 and a length of 17', function() {
		assert(detectNetwork('62244308923311743') === 'China UnionPay');
	});

	it('has a prefix of 622444 and a length of 17', function() {
		assert(detectNetwork('62244431904988174') === 'China UnionPay');
	});

	it('has a prefix of 622445 and a length of 17', function() {
		assert(detectNetwork('62244505921006131') === 'China UnionPay');
	});

	it('has a prefix of 622446 and a length of 17', function() {
		assert(detectNetwork('62244600687443526') === 'China UnionPay');
	});

	it('has a prefix of 622447 and a length of 17', function() {
		assert(detectNetwork('62244706640791116') === 'China UnionPay');
	});

	it('has a prefix of 622448 and a length of 17', function() {
		assert(detectNetwork('62244835397599729') === 'China UnionPay');
	});

	it('has a prefix of 622449 and a length of 17', function() {
		assert(detectNetwork('62244972382727153') === 'China UnionPay');
	});

	it('has a prefix of 622450 and a length of 17', function() {
		assert(detectNetwork('62245020497393057') === 'China UnionPay');
	});

	it('has a prefix of 622451 and a length of 17', function() {
		assert(detectNetwork('62245142428941713') === 'China UnionPay');
	});

	it('has a prefix of 622452 and a length of 17', function() {
		assert(detectNetwork('62245214456798568') === 'China UnionPay');
	});

	it('has a prefix of 622453 and a length of 17', function() {
		assert(detectNetwork('62245351704676851') === 'China UnionPay');
	});

	it('has a prefix of 622454 and a length of 17', function() {
		assert(detectNetwork('62245438426652464') === 'China UnionPay');
	});

	it('has a prefix of 622455 and a length of 17', function() {
		assert(detectNetwork('62245507467082985') === 'China UnionPay');
	});

	it('has a prefix of 622456 and a length of 17', function() {
		assert(detectNetwork('62245637973393642') === 'China UnionPay');
	});

	it('has a prefix of 622457 and a length of 17', function() {
		assert(detectNetwork('62245732655117076') === 'China UnionPay');
	});

	it('has a prefix of 622458 and a length of 17', function() {
		assert(detectNetwork('62245806651489922') === 'China UnionPay');
	});

	it('has a prefix of 622459 and a length of 17', function() {
		assert(detectNetwork('62245922747814784') === 'China UnionPay');
	});

	it('has a prefix of 622460 and a length of 17', function() {
		assert(detectNetwork('62246050831864188') === 'China UnionPay');
	});

	it('has a prefix of 622461 and a length of 17', function() {
		assert(detectNetwork('62246180811818201') === 'China UnionPay');
	});

	it('has a prefix of 622462 and a length of 17', function() {
		assert(detectNetwork('62246295058988546') === 'China UnionPay');
	});

	it('has a prefix of 622463 and a length of 17', function() {
		assert(detectNetwork('62246306842157307') === 'China UnionPay');
	});

	it('has a prefix of 622464 and a length of 17', function() {
		assert(detectNetwork('62246418644739303') === 'China UnionPay');
	});

	it('has a prefix of 622465 and a length of 17', function() {
		assert(detectNetwork('62246551461135281') === 'China UnionPay');
	});

	it('has a prefix of 622466 and a length of 17', function() {
		assert(detectNetwork('62246678097768069') === 'China UnionPay');
	});

	it('has a prefix of 622467 and a length of 17', function() {
		assert(detectNetwork('62246786124653700') === 'China UnionPay');
	});

	it('has a prefix of 622468 and a length of 17', function() {
		assert(detectNetwork('62246853979348115') === 'China UnionPay');
	});

	it('has a prefix of 622469 and a length of 17', function() {
		assert(detectNetwork('62246954350318893') === 'China UnionPay');
	});

	it('has a prefix of 622470 and a length of 17', function() {
		assert(detectNetwork('62247018999991856') === 'China UnionPay');
	});

	it('has a prefix of 622471 and a length of 17', function() {
		assert(detectNetwork('62247141118697916') === 'China UnionPay');
	});

	it('has a prefix of 622472 and a length of 17', function() {
		assert(detectNetwork('62247299851276223') === 'China UnionPay');
	});

	it('has a prefix of 622473 and a length of 17', function() {
		assert(detectNetwork('62247364097709321') === 'China UnionPay');
	});

	it('has a prefix of 622474 and a length of 17', function() {
		assert(detectNetwork('62247451345433919') === 'China UnionPay');
	});

	it('has a prefix of 622475 and a length of 17', function() {
		assert(detectNetwork('62247520575461469') === 'China UnionPay');
	});

	it('has a prefix of 622476 and a length of 17', function() {
		assert(detectNetwork('62247691680477531') === 'China UnionPay');
	});

	it('has a prefix of 622477 and a length of 17', function() {
		assert(detectNetwork('62247769970958800') === 'China UnionPay');
	});

	it('has a prefix of 622478 and a length of 17', function() {
		assert(detectNetwork('62247893826362162') === 'China UnionPay');
	});

	it('has a prefix of 622479 and a length of 17', function() {
		assert(detectNetwork('62247977966875850') === 'China UnionPay');
	});

	it('has a prefix of 622480 and a length of 17', function() {
		assert(detectNetwork('62248050932165522') === 'China UnionPay');
	});

	it('has a prefix of 622481 and a length of 17', function() {
		assert(detectNetwork('62248179673194573') === 'China UnionPay');
	});

	it('has a prefix of 622482 and a length of 17', function() {
		assert(detectNetwork('62248251813166116') === 'China UnionPay');
	});

	it('has a prefix of 622483 and a length of 17', function() {
		assert(detectNetwork('62248395637288980') === 'China UnionPay');
	});

	it('has a prefix of 622484 and a length of 17', function() {
		assert(detectNetwork('62248456754998172') === 'China UnionPay');
	});

	it('has a prefix of 622485 and a length of 17', function() {
		assert(detectNetwork('62248575215042282') === 'China UnionPay');
	});

	it('has a prefix of 622486 and a length of 17', function() {
		assert(detectNetwork('62248677029700100') === 'China UnionPay');
	});

	it('has a prefix of 622487 and a length of 17', function() {
		assert(detectNetwork('62248770124013524') === 'China UnionPay');
	});

	it('has a prefix of 622488 and a length of 17', function() {
		assert(detectNetwork('62248844817357481') === 'China UnionPay');
	});

	it('has a prefix of 622489 and a length of 17', function() {
		assert(detectNetwork('62248904070834967') === 'China UnionPay');
	});

	it('has a prefix of 622490 and a length of 17', function() {
		assert(detectNetwork('62249037961504508') === 'China UnionPay');
	});

	it('has a prefix of 622491 and a length of 17', function() {
		assert(detectNetwork('62249167666404084') === 'China UnionPay');
	});

	it('has a prefix of 622492 and a length of 17', function() {
		assert(detectNetwork('62249241220730995') === 'China UnionPay');
	});

	it('has a prefix of 622493 and a length of 17', function() {
		assert(detectNetwork('62249359300323945') === 'China UnionPay');
	});

	it('has a prefix of 622494 and a length of 17', function() {
		assert(detectNetwork('62249440218360817') === 'China UnionPay');
	});

	it('has a prefix of 622495 and a length of 17', function() {
		assert(detectNetwork('62249574990837677') === 'China UnionPay');
	});

	it('has a prefix of 622496 and a length of 17', function() {
		assert(detectNetwork('62249624773717498') === 'China UnionPay');
	});

	it('has a prefix of 622497 and a length of 17', function() {
		assert(detectNetwork('62249750153446466') === 'China UnionPay');
	});

	it('has a prefix of 622498 and a length of 17', function() {
		assert(detectNetwork('62249804528794638') === 'China UnionPay');
	});

	it('has a prefix of 622499 and a length of 17', function() {
		assert(detectNetwork('62249904492548158') === 'China UnionPay');
	});

	it('has a prefix of 622500 and a length of 17', function() {
		assert(detectNetwork('62250094715031827') === 'China UnionPay');
	});

	it('has a prefix of 622501 and a length of 17', function() {
		assert(detectNetwork('62250113414502794') === 'China UnionPay');
	});

	it('has a prefix of 622502 and a length of 17', function() {
		assert(detectNetwork('62250264008042627') === 'China UnionPay');
	});

	it('has a prefix of 622503 and a length of 17', function() {
		assert(detectNetwork('62250363271688006') === 'China UnionPay');
	});

	it('has a prefix of 622504 and a length of 17', function() {
		assert(detectNetwork('62250407562696492') === 'China UnionPay');
	});

	it('has a prefix of 622505 and a length of 17', function() {
		assert(detectNetwork('62250550173408709') === 'China UnionPay');
	});

	it('has a prefix of 622506 and a length of 17', function() {
		assert(detectNetwork('62250684006712826') === 'China UnionPay');
	});

	it('has a prefix of 622507 and a length of 17', function() {
		assert(detectNetwork('62250782668535329') === 'China UnionPay');
	});

	it('has a prefix of 622508 and a length of 17', function() {
		assert(detectNetwork('62250879436246302') === 'China UnionPay');
	});

	it('has a prefix of 622509 and a length of 17', function() {
		assert(detectNetwork('62250984507917219') === 'China UnionPay');
	});

	it('has a prefix of 622510 and a length of 17', function() {
		assert(detectNetwork('62251038698932498') === 'China UnionPay');
	});

	it('has a prefix of 622511 and a length of 17', function() {
		assert(detectNetwork('62251105472665570') === 'China UnionPay');
	});

	it('has a prefix of 622512 and a length of 17', function() {
		assert(detectNetwork('62251246183424564') === 'China UnionPay');
	});

	it('has a prefix of 622513 and a length of 17', function() {
		assert(detectNetwork('62251341282466132') === 'China UnionPay');
	});

	it('has a prefix of 622514 and a length of 17', function() {
		assert(detectNetwork('62251418841796369') === 'China UnionPay');
	});

	it('has a prefix of 622515 and a length of 17', function() {
		assert(detectNetwork('62251561514999188') === 'China UnionPay');
	});

	it('has a prefix of 622516 and a length of 17', function() {
		assert(detectNetwork('62251643794163276') === 'China UnionPay');
	});

	it('has a prefix of 622517 and a length of 17', function() {
		assert(detectNetwork('62251742028326099') === 'China UnionPay');
	});

	it('has a prefix of 622518 and a length of 17', function() {
		assert(detectNetwork('62251877277380448') === 'China UnionPay');
	});

	it('has a prefix of 622519 and a length of 17', function() {
		assert(detectNetwork('62251999436277339') === 'China UnionPay');
	});

	it('has a prefix of 622520 and a length of 17', function() {
		assert(detectNetwork('62252046679621898') === 'China UnionPay');
	});

	it('has a prefix of 622521 and a length of 17', function() {
		assert(detectNetwork('62252141463535078') === 'China UnionPay');
	});

	it('has a prefix of 622522 and a length of 17', function() {
		assert(detectNetwork('62252242251978229') === 'China UnionPay');
	});

	it('has a prefix of 622523 and a length of 17', function() {
		assert(detectNetwork('62252320471135645') === 'China UnionPay');
	});

	it('has a prefix of 622524 and a length of 17', function() {
		assert(detectNetwork('62252431945458015') === 'China UnionPay');
	});

	it('has a prefix of 622525 and a length of 17', function() {
		assert(detectNetwork('62252557809920783') === 'China UnionPay');
	});

	it('has a prefix of 622526 and a length of 17', function() {
		assert(detectNetwork('62252668543318297') === 'China UnionPay');
	});

	it('has a prefix of 622527 and a length of 17', function() {
		assert(detectNetwork('62252791540064460') === 'China UnionPay');
	});

	it('has a prefix of 622528 and a length of 17', function() {
		assert(detectNetwork('62252871896070825') === 'China UnionPay');
	});

	it('has a prefix of 622529 and a length of 17', function() {
		assert(detectNetwork('62252943447034579') === 'China UnionPay');
	});

	it('has a prefix of 622530 and a length of 17', function() {
		assert(detectNetwork('62253094981354677') === 'China UnionPay');
	});

	it('has a prefix of 622531 and a length of 17', function() {
		assert(detectNetwork('62253185735179689') === 'China UnionPay');
	});

	it('has a prefix of 622532 and a length of 17', function() {
		assert(detectNetwork('62253231238032902') === 'China UnionPay');
	});

	it('has a prefix of 622533 and a length of 17', function() {
		assert(detectNetwork('62253397784874510') === 'China UnionPay');
	});

	it('has a prefix of 622534 and a length of 17', function() {
		assert(detectNetwork('62253408297944013') === 'China UnionPay');
	});

	it('has a prefix of 622535 and a length of 17', function() {
		assert(detectNetwork('62253549253906972') === 'China UnionPay');
	});

	it('has a prefix of 622536 and a length of 17', function() {
		assert(detectNetwork('62253612566848050') === 'China UnionPay');
	});

	it('has a prefix of 622537 and a length of 17', function() {
		assert(detectNetwork('62253713552695356') === 'China UnionPay');
	});

	it('has a prefix of 622538 and a length of 17', function() {
		assert(detectNetwork('62253827599850624') === 'China UnionPay');
	});

	it('has a prefix of 622539 and a length of 17', function() {
		assert(detectNetwork('62253905215753564') === 'China UnionPay');
	});

	it('has a prefix of 622540 and a length of 17', function() {
		assert(detectNetwork('62254072428057296') === 'China UnionPay');
	});

	it('has a prefix of 622541 and a length of 17', function() {
		assert(detectNetwork('62254122454813404') === 'China UnionPay');
	});

	it('has a prefix of 622542 and a length of 17', function() {
		assert(detectNetwork('62254241406236632') === 'China UnionPay');
	});

	it('has a prefix of 622543 and a length of 17', function() {
		assert(detectNetwork('62254316122788431') === 'China UnionPay');
	});

	it('has a prefix of 622544 and a length of 17', function() {
		assert(detectNetwork('62254464490476907') === 'China UnionPay');
	});

	it('has a prefix of 622545 and a length of 17', function() {
		assert(detectNetwork('62254593402919849') === 'China UnionPay');
	});

	it('has a prefix of 622546 and a length of 17', function() {
		assert(detectNetwork('62254615790413100') === 'China UnionPay');
	});

	it('has a prefix of 622547 and a length of 17', function() {
		assert(detectNetwork('62254755605953976') === 'China UnionPay');
	});

	it('has a prefix of 622548 and a length of 17', function() {
		assert(detectNetwork('62254850839389036') === 'China UnionPay');
	});

	it('has a prefix of 622549 and a length of 17', function() {
		assert(detectNetwork('62254945917054321') === 'China UnionPay');
	});

	it('has a prefix of 622550 and a length of 17', function() {
		assert(detectNetwork('62255011045842524') === 'China UnionPay');
	});

	it('has a prefix of 622551 and a length of 17', function() {
		assert(detectNetwork('62255171863746854') === 'China UnionPay');
	});

	it('has a prefix of 622552 and a length of 17', function() {
		assert(detectNetwork('62255218651804589') === 'China UnionPay');
	});

	it('has a prefix of 622553 and a length of 17', function() {
		assert(detectNetwork('62255317834142798') === 'China UnionPay');
	});

	it('has a prefix of 622554 and a length of 17', function() {
		assert(detectNetwork('62255445815019535') === 'China UnionPay');
	});

	it('has a prefix of 622555 and a length of 17', function() {
		assert(detectNetwork('62255534181068219') === 'China UnionPay');
	});

	it('has a prefix of 622556 and a length of 17', function() {
		assert(detectNetwork('62255698564458830') === 'China UnionPay');
	});

	it('has a prefix of 622557 and a length of 17', function() {
		assert(detectNetwork('62255786340681655') === 'China UnionPay');
	});

	it('has a prefix of 622558 and a length of 17', function() {
		assert(detectNetwork('62255886879004234') === 'China UnionPay');
	});

	it('has a prefix of 622559 and a length of 17', function() {
		assert(detectNetwork('62255954036123122') === 'China UnionPay');
	});

	it('has a prefix of 622560 and a length of 17', function() {
		assert(detectNetwork('62256009693432455') === 'China UnionPay');
	});

	it('has a prefix of 622561 and a length of 17', function() {
		assert(detectNetwork('62256138002342813') === 'China UnionPay');
	});

	it('has a prefix of 622562 and a length of 17', function() {
		assert(detectNetwork('62256250970339776') === 'China UnionPay');
	});

	it('has a prefix of 622563 and a length of 17', function() {
		assert(detectNetwork('62256387864765574') === 'China UnionPay');
	});

	it('has a prefix of 622564 and a length of 17', function() {
		assert(detectNetwork('62256409636360992') === 'China UnionPay');
	});

	it('has a prefix of 622565 and a length of 17', function() {
		assert(detectNetwork('62256565427874705') === 'China UnionPay');
	});

	it('has a prefix of 622566 and a length of 17', function() {
		assert(detectNetwork('62256665459584673') === 'China UnionPay');
	});

	it('has a prefix of 622567 and a length of 17', function() {
		assert(detectNetwork('62256794118989733') === 'China UnionPay');
	});

	it('has a prefix of 622568 and a length of 17', function() {
		assert(detectNetwork('62256877449995909') === 'China UnionPay');
	});

	it('has a prefix of 622569 and a length of 17', function() {
		assert(detectNetwork('62256949436068945') === 'China UnionPay');
	});

	it('has a prefix of 622570 and a length of 17', function() {
		assert(detectNetwork('62257031270991134') === 'China UnionPay');
	});

	it('has a prefix of 622571 and a length of 17', function() {
		assert(detectNetwork('62257128929330557') === 'China UnionPay');
	});

	it('has a prefix of 622572 and a length of 17', function() {
		assert(detectNetwork('62257275014733039') === 'China UnionPay');
	});

	it('has a prefix of 622573 and a length of 17', function() {
		assert(detectNetwork('62257326018196649') === 'China UnionPay');
	});

	it('has a prefix of 622574 and a length of 17', function() {
		assert(detectNetwork('62257441857387446') === 'China UnionPay');
	});

	it('has a prefix of 622575 and a length of 17', function() {
		assert(detectNetwork('62257530932630165') === 'China UnionPay');
	});

	it('has a prefix of 622576 and a length of 17', function() {
		assert(detectNetwork('62257661847379188') === 'China UnionPay');
	});

	it('has a prefix of 622577 and a length of 17', function() {
		assert(detectNetwork('62257744356275800') === 'China UnionPay');
	});

	it('has a prefix of 622578 and a length of 17', function() {
		assert(detectNetwork('62257804259234464') === 'China UnionPay');
	});

	it('has a prefix of 622579 and a length of 17', function() {
		assert(detectNetwork('62257922323727620') === 'China UnionPay');
	});

	it('has a prefix of 622580 and a length of 17', function() {
		assert(detectNetwork('62258035072730895') === 'China UnionPay');
	});

	it('has a prefix of 622581 and a length of 17', function() {
		assert(detectNetwork('62258136116327256') === 'China UnionPay');
	});

	it('has a prefix of 622582 and a length of 17', function() {
		assert(detectNetwork('62258288828223935') === 'China UnionPay');
	});

	it('has a prefix of 622583 and a length of 17', function() {
		assert(detectNetwork('62258337554059327') === 'China UnionPay');
	});

	it('has a prefix of 622584 and a length of 17', function() {
		assert(detectNetwork('62258419646515766') === 'China UnionPay');
	});

	it('has a prefix of 622585 and a length of 17', function() {
		assert(detectNetwork('62258551716811897') === 'China UnionPay');
	});

	it('has a prefix of 622586 and a length of 17', function() {
		assert(detectNetwork('62258602755353026') === 'China UnionPay');
	});

	it('has a prefix of 622587 and a length of 17', function() {
		assert(detectNetwork('62258755459327878') === 'China UnionPay');
	});

	it('has a prefix of 622588 and a length of 17', function() {
		assert(detectNetwork('62258894475724524') === 'China UnionPay');
	});

	it('has a prefix of 622589 and a length of 17', function() {
		assert(detectNetwork('62258941767104140') === 'China UnionPay');
	});

	it('has a prefix of 622590 and a length of 17', function() {
		assert(detectNetwork('62259039222346307') === 'China UnionPay');
	});

	it('has a prefix of 622591 and a length of 17', function() {
		assert(detectNetwork('62259132266705140') === 'China UnionPay');
	});

	it('has a prefix of 622592 and a length of 17', function() {
		assert(detectNetwork('62259279219767357') === 'China UnionPay');
	});

	it('has a prefix of 622593 and a length of 17', function() {
		assert(detectNetwork('62259330088617689') === 'China UnionPay');
	});

	it('has a prefix of 622594 and a length of 17', function() {
		assert(detectNetwork('62259420170352072') === 'China UnionPay');
	});

	it('has a prefix of 622595 and a length of 17', function() {
		assert(detectNetwork('62259585496014778') === 'China UnionPay');
	});

	it('has a prefix of 622596 and a length of 17', function() {
		assert(detectNetwork('62259640483169132') === 'China UnionPay');
	});

	it('has a prefix of 622597 and a length of 17', function() {
		assert(detectNetwork('62259761425420676') === 'China UnionPay');
	});

	it('has a prefix of 622598 and a length of 17', function() {
		assert(detectNetwork('62259835872611205') === 'China UnionPay');
	});

	it('has a prefix of 622599 and a length of 17', function() {
		assert(detectNetwork('62259907202764965') === 'China UnionPay');
	});

	it('has a prefix of 622600 and a length of 17', function() {
		assert(detectNetwork('62260054686728116') === 'China UnionPay');
	});

	it('has a prefix of 622601 and a length of 17', function() {
		assert(detectNetwork('62260153179389762') === 'China UnionPay');
	});

	it('has a prefix of 622602 and a length of 17', function() {
		assert(detectNetwork('62260260196837564') === 'China UnionPay');
	});

	it('has a prefix of 622603 and a length of 17', function() {
		assert(detectNetwork('62260399513894013') === 'China UnionPay');
	});

	it('has a prefix of 622604 and a length of 17', function() {
		assert(detectNetwork('62260435656332902') === 'China UnionPay');
	});

	it('has a prefix of 622605 and a length of 17', function() {
		assert(detectNetwork('62260564682891930') === 'China UnionPay');
	});

	it('has a prefix of 622606 and a length of 17', function() {
		assert(detectNetwork('62260683928279782') === 'China UnionPay');
	});

	it('has a prefix of 622607 and a length of 17', function() {
		assert(detectNetwork('62260715938643358') === 'China UnionPay');
	});

	it('has a prefix of 622608 and a length of 17', function() {
		assert(detectNetwork('62260861565821711') === 'China UnionPay');
	});

	it('has a prefix of 622609 and a length of 17', function() {
		assert(detectNetwork('62260925557992040') === 'China UnionPay');
	});

	it('has a prefix of 622610 and a length of 17', function() {
		assert(detectNetwork('62261025337872009') === 'China UnionPay');
	});

	it('has a prefix of 622611 and a length of 17', function() {
		assert(detectNetwork('62261148170288018') === 'China UnionPay');
	});

	it('has a prefix of 622612 and a length of 17', function() {
		assert(detectNetwork('62261248639046588') === 'China UnionPay');
	});

	it('has a prefix of 622613 and a length of 17', function() {
		assert(detectNetwork('62261390169371966') === 'China UnionPay');
	});

	it('has a prefix of 622614 and a length of 17', function() {
		assert(detectNetwork('62261472312863629') === 'China UnionPay');
	});

	it('has a prefix of 622615 and a length of 17', function() {
		assert(detectNetwork('62261506580546189') === 'China UnionPay');
	});

	it('has a prefix of 622616 and a length of 17', function() {
		assert(detectNetwork('62261674970000193') === 'China UnionPay');
	});

	it('has a prefix of 622617 and a length of 17', function() {
		assert(detectNetwork('62261760528949091') === 'China UnionPay');
	});

	it('has a prefix of 622618 and a length of 17', function() {
		assert(detectNetwork('62261869869609852') === 'China UnionPay');
	});

	it('has a prefix of 622619 and a length of 17', function() {
		assert(detectNetwork('62261979565637207') === 'China UnionPay');
	});

	it('has a prefix of 622620 and a length of 17', function() {
		assert(detectNetwork('62262064331879678') === 'China UnionPay');
	});

	it('has a prefix of 622621 and a length of 17', function() {
		assert(detectNetwork('62262128964075522') === 'China UnionPay');
	});

	it('has a prefix of 622622 and a length of 17', function() {
		assert(detectNetwork('62262277294873955') === 'China UnionPay');
	});

	it('has a prefix of 622623 and a length of 17', function() {
		assert(detectNetwork('62262383595728544') === 'China UnionPay');
	});

	it('has a prefix of 622624 and a length of 17', function() {
		assert(detectNetwork('62262413681221315') === 'China UnionPay');
	});

	it('has a prefix of 622625 and a length of 17', function() {
		assert(detectNetwork('62262504883085988') === 'China UnionPay');
	});

	it('has a prefix of 622626 and a length of 17', function() {
		assert(detectNetwork('62262678094259793') === 'China UnionPay');
	});

	it('has a prefix of 622627 and a length of 17', function() {
		assert(detectNetwork('62262789389817125') === 'China UnionPay');
	});

	it('has a prefix of 622628 and a length of 17', function() {
		assert(detectNetwork('62262879105536619') === 'China UnionPay');
	});

	it('has a prefix of 622629 and a length of 17', function() {
		assert(detectNetwork('62262969170096560') === 'China UnionPay');
	});

	it('has a prefix of 622630 and a length of 17', function() {
		assert(detectNetwork('62263048314079269') === 'China UnionPay');
	});

	it('has a prefix of 622631 and a length of 17', function() {
		assert(detectNetwork('62263166011379221') === 'China UnionPay');
	});

	it('has a prefix of 622632 and a length of 17', function() {
		assert(detectNetwork('62263237207765855') === 'China UnionPay');
	});

	it('has a prefix of 622633 and a length of 17', function() {
		assert(detectNetwork('62263311786937498') === 'China UnionPay');
	});

	it('has a prefix of 622634 and a length of 17', function() {
		assert(detectNetwork('62263491299004569') === 'China UnionPay');
	});

	it('has a prefix of 622635 and a length of 17', function() {
		assert(detectNetwork('62263588199691317') === 'China UnionPay');
	});

	it('has a prefix of 622636 and a length of 17', function() {
		assert(detectNetwork('62263657049437300') === 'China UnionPay');
	});

	it('has a prefix of 622637 and a length of 17', function() {
		assert(detectNetwork('62263707734439408') === 'China UnionPay');
	});

	it('has a prefix of 622638 and a length of 17', function() {
		assert(detectNetwork('62263838694287003') === 'China UnionPay');
	});

	it('has a prefix of 622639 and a length of 17', function() {
		assert(detectNetwork('62263938980395145') === 'China UnionPay');
	});

	it('has a prefix of 622640 and a length of 17', function() {
		assert(detectNetwork('62264004913433056') === 'China UnionPay');
	});

	it('has a prefix of 622641 and a length of 17', function() {
		assert(detectNetwork('62264100694351239') === 'China UnionPay');
	});

	it('has a prefix of 622642 and a length of 17', function() {
		assert(detectNetwork('62264258689206907') === 'China UnionPay');
	});

	it('has a prefix of 622643 and a length of 17', function() {
		assert(detectNetwork('62264376014809919') === 'China UnionPay');
	});

	it('has a prefix of 622644 and a length of 17', function() {
		assert(detectNetwork('62264418777716089') === 'China UnionPay');
	});

	it('has a prefix of 622645 and a length of 17', function() {
		assert(detectNetwork('62264524254605304') === 'China UnionPay');
	});

	it('has a prefix of 622646 and a length of 17', function() {
		assert(detectNetwork('62264619477315192') === 'China UnionPay');
	});

	it('has a prefix of 622647 and a length of 17', function() {
		assert(detectNetwork('62264731211341634') === 'China UnionPay');
	});

	it('has a prefix of 622648 and a length of 17', function() {
		assert(detectNetwork('62264891194778529') === 'China UnionPay');
	});

	it('has a prefix of 622649 and a length of 17', function() {
		assert(detectNetwork('62264947918648156') === 'China UnionPay');
	});

	it('has a prefix of 622650 and a length of 17', function() {
		assert(detectNetwork('62265090768028016') === 'China UnionPay');
	});

	it('has a prefix of 622651 and a length of 17', function() {
		assert(detectNetwork('62265181584132460') === 'China UnionPay');
	});

	it('has a prefix of 622652 and a length of 17', function() {
		assert(detectNetwork('62265260016885742') === 'China UnionPay');
	});

	it('has a prefix of 622653 and a length of 17', function() {
		assert(detectNetwork('62265311279644713') === 'China UnionPay');
	});

	it('has a prefix of 622654 and a length of 17', function() {
		assert(detectNetwork('62265459567858363') === 'China UnionPay');
	});

	it('has a prefix of 622655 and a length of 17', function() {
		assert(detectNetwork('62265596325441183') === 'China UnionPay');
	});

	it('has a prefix of 622656 and a length of 17', function() {
		assert(detectNetwork('62265679538104044') === 'China UnionPay');
	});

	it('has a prefix of 622657 and a length of 17', function() {
		assert(detectNetwork('62265743175191338') === 'China UnionPay');
	});

	it('has a prefix of 622658 and a length of 17', function() {
		assert(detectNetwork('62265809413781387') === 'China UnionPay');
	});

	it('has a prefix of 622659 and a length of 17', function() {
		assert(detectNetwork('62265981054907945') === 'China UnionPay');
	});

	it('has a prefix of 622660 and a length of 17', function() {
		assert(detectNetwork('62266065945586440') === 'China UnionPay');
	});

	it('has a prefix of 622661 and a length of 17', function() {
		assert(detectNetwork('62266124505782563') === 'China UnionPay');
	});

	it('has a prefix of 622662 and a length of 17', function() {
		assert(detectNetwork('62266269615359274') === 'China UnionPay');
	});

	it('has a prefix of 622663 and a length of 17', function() {
		assert(detectNetwork('62266328742602212') === 'China UnionPay');
	});

	it('has a prefix of 622664 and a length of 17', function() {
		assert(detectNetwork('62266455317926929') === 'China UnionPay');
	});

	it('has a prefix of 622665 and a length of 17', function() {
		assert(detectNetwork('62266567321268385') === 'China UnionPay');
	});

	it('has a prefix of 622666 and a length of 17', function() {
		assert(detectNetwork('62266639313417256') === 'China UnionPay');
	});

	it('has a prefix of 622667 and a length of 17', function() {
		assert(detectNetwork('62266731743619795') === 'China UnionPay');
	});

	it('has a prefix of 622668 and a length of 17', function() {
		assert(detectNetwork('62266832270190524') === 'China UnionPay');
	});

	it('has a prefix of 622669 and a length of 17', function() {
		assert(detectNetwork('62266908880968996') === 'China UnionPay');
	});

	it('has a prefix of 622670 and a length of 17', function() {
		assert(detectNetwork('62267079505275370') === 'China UnionPay');
	});

	it('has a prefix of 622671 and a length of 17', function() {
		assert(detectNetwork('62267161790777833') === 'China UnionPay');
	});

	it('has a prefix of 622672 and a length of 17', function() {
		assert(detectNetwork('62267226723100630') === 'China UnionPay');
	});

	it('has a prefix of 622673 and a length of 17', function() {
		assert(detectNetwork('62267337756228023') === 'China UnionPay');
	});

	it('has a prefix of 622674 and a length of 17', function() {
		assert(detectNetwork('62267459159241687') === 'China UnionPay');
	});

	it('has a prefix of 622675 and a length of 17', function() {
		assert(detectNetwork('62267556110239249') === 'China UnionPay');
	});

	it('has a prefix of 622676 and a length of 17', function() {
		assert(detectNetwork('62267649063685237') === 'China UnionPay');
	});

	it('has a prefix of 622677 and a length of 17', function() {
		assert(detectNetwork('62267765111646658') === 'China UnionPay');
	});

	it('has a prefix of 622678 and a length of 17', function() {
		assert(detectNetwork('62267840643595897') === 'China UnionPay');
	});

	it('has a prefix of 622679 and a length of 17', function() {
		assert(detectNetwork('62267920711957834') === 'China UnionPay');
	});

	it('has a prefix of 622680 and a length of 17', function() {
		assert(detectNetwork('62268095994220846') === 'China UnionPay');
	});

	it('has a prefix of 622681 and a length of 17', function() {
		assert(detectNetwork('62268160010238786') === 'China UnionPay');
	});

	it('has a prefix of 622682 and a length of 17', function() {
		assert(detectNetwork('62268232387266381') === 'China UnionPay');
	});

	it('has a prefix of 622683 and a length of 17', function() {
		assert(detectNetwork('62268348825465951') === 'China UnionPay');
	});

	it('has a prefix of 622684 and a length of 17', function() {
		assert(detectNetwork('62268430014613043') === 'China UnionPay');
	});

	it('has a prefix of 622685 and a length of 17', function() {
		assert(detectNetwork('62268515006590592') === 'China UnionPay');
	});

	it('has a prefix of 622686 and a length of 17', function() {
		assert(detectNetwork('62268627250332341') === 'China UnionPay');
	});

	it('has a prefix of 622687 and a length of 17', function() {
		assert(detectNetwork('62268716434007329') === 'China UnionPay');
	});

	it('has a prefix of 622688 and a length of 17', function() {
		assert(detectNetwork('62268891350200765') === 'China UnionPay');
	});

	it('has a prefix of 622689 and a length of 17', function() {
		assert(detectNetwork('62268939752712847') === 'China UnionPay');
	});

	it('has a prefix of 622690 and a length of 17', function() {
		assert(detectNetwork('62269073804327974') === 'China UnionPay');
	});

	it('has a prefix of 622691 and a length of 17', function() {
		assert(detectNetwork('62269179209859126') === 'China UnionPay');
	});

	it('has a prefix of 622692 and a length of 17', function() {
		assert(detectNetwork('62269231873512386') === 'China UnionPay');
	});

	it('has a prefix of 622693 and a length of 17', function() {
		assert(detectNetwork('62269380165321117') === 'China UnionPay');
	});

	it('has a prefix of 622694 and a length of 17', function() {
		assert(detectNetwork('62269405828418788') === 'China UnionPay');
	});

	it('has a prefix of 622695 and a length of 17', function() {
		assert(detectNetwork('62269599136983213') === 'China UnionPay');
	});

	it('has a prefix of 622696 and a length of 17', function() {
		assert(detectNetwork('62269603611973316') === 'China UnionPay');
	});

	it('has a prefix of 622697 and a length of 17', function() {
		assert(detectNetwork('62269773550229948') === 'China UnionPay');
	});

	it('has a prefix of 622698 and a length of 17', function() {
		assert(detectNetwork('62269891716567968') === 'China UnionPay');
	});

	it('has a prefix of 622699 and a length of 17', function() {
		assert(detectNetwork('62269946645554852') === 'China UnionPay');
	});

	it('has a prefix of 622700 and a length of 17', function() {
		assert(detectNetwork('62270033767719150') === 'China UnionPay');
	});

	it('has a prefix of 622701 and a length of 17', function() {
		assert(detectNetwork('62270137494658258') === 'China UnionPay');
	});

	it('has a prefix of 622702 and a length of 17', function() {
		assert(detectNetwork('62270232286453615') === 'China UnionPay');
	});

	it('has a prefix of 622703 and a length of 17', function() {
		assert(detectNetwork('62270386796829213') === 'China UnionPay');
	});

	it('has a prefix of 622704 and a length of 17', function() {
		assert(detectNetwork('62270453336368420') === 'China UnionPay');
	});

	it('has a prefix of 622705 and a length of 17', function() {
		assert(detectNetwork('62270583386128669') === 'China UnionPay');
	});

	it('has a prefix of 622706 and a length of 17', function() {
		assert(detectNetwork('62270640087019873') === 'China UnionPay');
	});

	it('has a prefix of 622707 and a length of 17', function() {
		assert(detectNetwork('62270782726186047') === 'China UnionPay');
	});

	it('has a prefix of 622708 and a length of 17', function() {
		assert(detectNetwork('62270861146254494') === 'China UnionPay');
	});

	it('has a prefix of 622709 and a length of 17', function() {
		assert(detectNetwork('62270952154341938') === 'China UnionPay');
	});

	it('has a prefix of 622710 and a length of 17', function() {
		assert(detectNetwork('62271092488947207') === 'China UnionPay');
	});

	it('has a prefix of 622711 and a length of 17', function() {
		assert(detectNetwork('62271134063843409') === 'China UnionPay');
	});

	it('has a prefix of 622712 and a length of 17', function() {
		assert(detectNetwork('62271203592968221') === 'China UnionPay');
	});

	it('has a prefix of 622713 and a length of 17', function() {
		assert(detectNetwork('62271385670665459') === 'China UnionPay');
	});

	it('has a prefix of 622714 and a length of 17', function() {
		assert(detectNetwork('62271430785806245') === 'China UnionPay');
	});

	it('has a prefix of 622715 and a length of 17', function() {
		assert(detectNetwork('62271545070818548') === 'China UnionPay');
	});

	it('has a prefix of 622716 and a length of 17', function() {
		assert(detectNetwork('62271604683862408') === 'China UnionPay');
	});

	it('has a prefix of 622717 and a length of 17', function() {
		assert(detectNetwork('62271700890590316') === 'China UnionPay');
	});

	it('has a prefix of 622718 and a length of 17', function() {
		assert(detectNetwork('62271825472150239') === 'China UnionPay');
	});

	it('has a prefix of 622719 and a length of 17', function() {
		assert(detectNetwork('62271974581653542') === 'China UnionPay');
	});

	it('has a prefix of 622720 and a length of 17', function() {
		assert(detectNetwork('62272053070090196') === 'China UnionPay');
	});

	it('has a prefix of 622721 and a length of 17', function() {
		assert(detectNetwork('62272133799906114') === 'China UnionPay');
	});

	it('has a prefix of 622722 and a length of 17', function() {
		assert(detectNetwork('62272270046518081') === 'China UnionPay');
	});

	it('has a prefix of 622723 and a length of 17', function() {
		assert(detectNetwork('62272334530027031') === 'China UnionPay');
	});

	it('has a prefix of 622724 and a length of 17', function() {
		assert(detectNetwork('62272417916782193') === 'China UnionPay');
	});

	it('has a prefix of 622725 and a length of 17', function() {
		assert(detectNetwork('62272525838637231') === 'China UnionPay');
	});

	it('has a prefix of 622726 and a length of 17', function() {
		assert(detectNetwork('62272682974742326') === 'China UnionPay');
	});

	it('has a prefix of 622727 and a length of 17', function() {
		assert(detectNetwork('62272713247497053') === 'China UnionPay');
	});

	it('has a prefix of 622728 and a length of 17', function() {
		assert(detectNetwork('62272840246911581') === 'China UnionPay');
	});

	it('has a prefix of 622729 and a length of 17', function() {
		assert(detectNetwork('62272954135445234') === 'China UnionPay');
	});

	it('has a prefix of 622730 and a length of 17', function() {
		assert(detectNetwork('62273036009702998') === 'China UnionPay');
	});

	it('has a prefix of 622731 and a length of 17', function() {
		assert(detectNetwork('62273197712877569') === 'China UnionPay');
	});

	it('has a prefix of 622732 and a length of 17', function() {
		assert(detectNetwork('62273208927527846') === 'China UnionPay');
	});

	it('has a prefix of 622733 and a length of 17', function() {
		assert(detectNetwork('62273368045048988') === 'China UnionPay');
	});

	it('has a prefix of 622734 and a length of 17', function() {
		assert(detectNetwork('62273430451838608') === 'China UnionPay');
	});

	it('has a prefix of 622735 and a length of 17', function() {
		assert(detectNetwork('62273574035386370') === 'China UnionPay');
	});

	it('has a prefix of 622736 and a length of 17', function() {
		assert(detectNetwork('62273603408895028') === 'China UnionPay');
	});

	it('has a prefix of 622737 and a length of 17', function() {
		assert(detectNetwork('62273709076484744') === 'China UnionPay');
	});

	it('has a prefix of 622738 and a length of 17', function() {
		assert(detectNetwork('62273807913076062') === 'China UnionPay');
	});

	it('has a prefix of 622739 and a length of 17', function() {
		assert(detectNetwork('62273940835311975') === 'China UnionPay');
	});

	it('has a prefix of 622740 and a length of 17', function() {
		assert(detectNetwork('62274001814389441') === 'China UnionPay');
	});

	it('has a prefix of 622741 and a length of 17', function() {
		assert(detectNetwork('62274136332516072') === 'China UnionPay');
	});

	it('has a prefix of 622742 and a length of 17', function() {
		assert(detectNetwork('62274222228049541') === 'China UnionPay');
	});

	it('has a prefix of 622743 and a length of 17', function() {
		assert(detectNetwork('62274395526210971') === 'China UnionPay');
	});

	it('has a prefix of 622744 and a length of 17', function() {
		assert(detectNetwork('62274428707141232') === 'China UnionPay');
	});

	it('has a prefix of 622745 and a length of 17', function() {
		assert(detectNetwork('62274583754203510') === 'China UnionPay');
	});

	it('has a prefix of 622746 and a length of 17', function() {
		assert(detectNetwork('62274680317584906') === 'China UnionPay');
	});

	it('has a prefix of 622747 and a length of 17', function() {
		assert(detectNetwork('62274737746662192') === 'China UnionPay');
	});

	it('has a prefix of 622748 and a length of 17', function() {
		assert(detectNetwork('62274853627524626') === 'China UnionPay');
	});

	it('has a prefix of 622749 and a length of 17', function() {
		assert(detectNetwork('62274928886669519') === 'China UnionPay');
	});

	it('has a prefix of 622750 and a length of 17', function() {
		assert(detectNetwork('62275079730059502') === 'China UnionPay');
	});

	it('has a prefix of 622751 and a length of 17', function() {
		assert(detectNetwork('62275180963921277') === 'China UnionPay');
	});

	it('has a prefix of 622752 and a length of 17', function() {
		assert(detectNetwork('62275238753892488') === 'China UnionPay');
	});

	it('has a prefix of 622753 and a length of 17', function() {
		assert(detectNetwork('62275393063198062') === 'China UnionPay');
	});

	it('has a prefix of 622754 and a length of 17', function() {
		assert(detectNetwork('62275414637627275') === 'China UnionPay');
	});

	it('has a prefix of 622755 and a length of 17', function() {
		assert(detectNetwork('62275532097215247') === 'China UnionPay');
	});

	it('has a prefix of 622756 and a length of 17', function() {
		assert(detectNetwork('62275636842526782') === 'China UnionPay');
	});

	it('has a prefix of 622757 and a length of 17', function() {
		assert(detectNetwork('62275758244331388') === 'China UnionPay');
	});

	it('has a prefix of 622758 and a length of 17', function() {
		assert(detectNetwork('62275846186237754') === 'China UnionPay');
	});

	it('has a prefix of 622759 and a length of 17', function() {
		assert(detectNetwork('62275950856911404') === 'China UnionPay');
	});

	it('has a prefix of 622760 and a length of 17', function() {
		assert(detectNetwork('62276009396216062') === 'China UnionPay');
	});

	it('has a prefix of 622761 and a length of 17', function() {
		assert(detectNetwork('62276194455402995') === 'China UnionPay');
	});

	it('has a prefix of 622762 and a length of 17', function() {
		assert(detectNetwork('62276256114588249') === 'China UnionPay');
	});

	it('has a prefix of 622763 and a length of 17', function() {
		assert(detectNetwork('62276338612466760') === 'China UnionPay');
	});

	it('has a prefix of 622764 and a length of 17', function() {
		assert(detectNetwork('62276408612957975') === 'China UnionPay');
	});

	it('has a prefix of 622765 and a length of 17', function() {
		assert(detectNetwork('62276514769021513') === 'China UnionPay');
	});

	it('has a prefix of 622766 and a length of 17', function() {
		assert(detectNetwork('62276691773348627') === 'China UnionPay');
	});

	it('has a prefix of 622767 and a length of 17', function() {
		assert(detectNetwork('62276745185883447') === 'China UnionPay');
	});

	it('has a prefix of 622768 and a length of 17', function() {
		assert(detectNetwork('62276850547900570') === 'China UnionPay');
	});

	it('has a prefix of 622769 and a length of 17', function() {
		assert(detectNetwork('62276935783330638') === 'China UnionPay');
	});

	it('has a prefix of 622770 and a length of 17', function() {
		assert(detectNetwork('62277041048558525') === 'China UnionPay');
	});

	it('has a prefix of 622771 and a length of 17', function() {
		assert(detectNetwork('62277102239943709') === 'China UnionPay');
	});

	it('has a prefix of 622772 and a length of 17', function() {
		assert(detectNetwork('62277234208447783') === 'China UnionPay');
	});

	it('has a prefix of 622773 and a length of 17', function() {
		assert(detectNetwork('62277381597631565') === 'China UnionPay');
	});

	it('has a prefix of 622774 and a length of 17', function() {
		assert(detectNetwork('62277493135887215') === 'China UnionPay');
	});

	it('has a prefix of 622775 and a length of 17', function() {
		assert(detectNetwork('62277521726941855') === 'China UnionPay');
	});

	it('has a prefix of 622776 and a length of 17', function() {
		assert(detectNetwork('62277695000952029') === 'China UnionPay');
	});

	it('has a prefix of 622777 and a length of 17', function() {
		assert(detectNetwork('62277780036315823') === 'China UnionPay');
	});

	it('has a prefix of 622778 and a length of 17', function() {
		assert(detectNetwork('62277896417443459') === 'China UnionPay');
	});

	it('has a prefix of 622779 and a length of 17', function() {
		assert(detectNetwork('62277922676925922') === 'China UnionPay');
	});

	it('has a prefix of 622780 and a length of 17', function() {
		assert(detectNetwork('62278085082909191') === 'China UnionPay');
	});

	it('has a prefix of 622781 and a length of 17', function() {
		assert(detectNetwork('62278185479015544') === 'China UnionPay');
	});

	it('has a prefix of 622782 and a length of 17', function() {
		assert(detectNetwork('62278268573946152') === 'China UnionPay');
	});

	it('has a prefix of 622783 and a length of 17', function() {
		assert(detectNetwork('62278305369064103') === 'China UnionPay');
	});

	it('has a prefix of 622784 and a length of 17', function() {
		assert(detectNetwork('62278476304891127') === 'China UnionPay');
	});

	it('has a prefix of 622785 and a length of 17', function() {
		assert(detectNetwork('62278520554021351') === 'China UnionPay');
	});

	it('has a prefix of 622786 and a length of 17', function() {
		assert(detectNetwork('62278664758849690') === 'China UnionPay');
	});

	it('has a prefix of 622787 and a length of 17', function() {
		assert(detectNetwork('62278704303669123') === 'China UnionPay');
	});

	it('has a prefix of 622788 and a length of 17', function() {
		assert(detectNetwork('62278807644089683') === 'China UnionPay');
	});

	it('has a prefix of 622789 and a length of 17', function() {
		assert(detectNetwork('62278921288390196') === 'China UnionPay');
	});

	it('has a prefix of 622790 and a length of 17', function() {
		assert(detectNetwork('62279065231684212') === 'China UnionPay');
	});

	it('has a prefix of 622791 and a length of 17', function() {
		assert(detectNetwork('62279186080766219') === 'China UnionPay');
	});

	it('has a prefix of 622792 and a length of 17', function() {
		assert(detectNetwork('62279273273308202') === 'China UnionPay');
	});

	it('has a prefix of 622793 and a length of 17', function() {
		assert(detectNetwork('62279340088688161') === 'China UnionPay');
	});

	it('has a prefix of 622794 and a length of 17', function() {
		assert(detectNetwork('62279460805132133') === 'China UnionPay');
	});

	it('has a prefix of 622795 and a length of 17', function() {
		assert(detectNetwork('62279511032347042') === 'China UnionPay');
	});

	it('has a prefix of 622796 and a length of 17', function() {
		assert(detectNetwork('62279635409461157') === 'China UnionPay');
	});

	it('has a prefix of 622797 and a length of 17', function() {
		assert(detectNetwork('62279764766831761') === 'China UnionPay');
	});

	it('has a prefix of 622798 and a length of 17', function() {
		assert(detectNetwork('62279869230227418') === 'China UnionPay');
	});

	it('has a prefix of 622799 and a length of 17', function() {
		assert(detectNetwork('62279989680462385') === 'China UnionPay');
	});

	it('has a prefix of 622800 and a length of 17', function() {
		assert(detectNetwork('62280014717585142') === 'China UnionPay');
	});

	it('has a prefix of 622801 and a length of 17', function() {
		assert(detectNetwork('62280121757756762') === 'China UnionPay');
	});

	it('has a prefix of 622802 and a length of 17', function() {
		assert(detectNetwork('62280218489702915') === 'China UnionPay');
	});

	it('has a prefix of 622803 and a length of 17', function() {
		assert(detectNetwork('62280372790464537') === 'China UnionPay');
	});

	it('has a prefix of 622804 and a length of 17', function() {
		assert(detectNetwork('62280430433983677') === 'China UnionPay');
	});

	it('has a prefix of 622805 and a length of 17', function() {
		assert(detectNetwork('62280555148115851') === 'China UnionPay');
	});

	it('has a prefix of 622806 and a length of 17', function() {
		assert(detectNetwork('62280692779272109') === 'China UnionPay');
	});

	it('has a prefix of 622807 and a length of 17', function() {
		assert(detectNetwork('62280785274434320') === 'China UnionPay');
	});

	it('has a prefix of 622808 and a length of 17', function() {
		assert(detectNetwork('62280814691680765') === 'China UnionPay');
	});

	it('has a prefix of 622809 and a length of 17', function() {
		assert(detectNetwork('62280902293090733') === 'China UnionPay');
	});

	it('has a prefix of 622810 and a length of 17', function() {
		assert(detectNetwork('62281035262689463') === 'China UnionPay');
	});

	it('has a prefix of 622811 and a length of 17', function() {
		assert(detectNetwork('62281188268396877') === 'China UnionPay');
	});

	it('has a prefix of 622812 and a length of 17', function() {
		assert(detectNetwork('62281208681887539') === 'China UnionPay');
	});

	it('has a prefix of 622813 and a length of 17', function() {
		assert(detectNetwork('62281368429117138') === 'China UnionPay');
	});

	it('has a prefix of 622814 and a length of 17', function() {
		assert(detectNetwork('62281470623345051') === 'China UnionPay');
	});

	it('has a prefix of 622815 and a length of 17', function() {
		assert(detectNetwork('62281514672232608') === 'China UnionPay');
	});

	it('has a prefix of 622816 and a length of 17', function() {
		assert(detectNetwork('62281653721695982') === 'China UnionPay');
	});

	it('has a prefix of 622817 and a length of 17', function() {
		assert(detectNetwork('62281790512062584') === 'China UnionPay');
	});

	it('has a prefix of 622818 and a length of 17', function() {
		assert(detectNetwork('62281833555410929') === 'China UnionPay');
	});

	it('has a prefix of 622819 and a length of 17', function() {
		assert(detectNetwork('62281970728580113') === 'China UnionPay');
	});

	it('has a prefix of 622820 and a length of 17', function() {
		assert(detectNetwork('62282076102165025') === 'China UnionPay');
	});

	it('has a prefix of 622821 and a length of 17', function() {
		assert(detectNetwork('62282136222735684') === 'China UnionPay');
	});

	it('has a prefix of 622822 and a length of 17', function() {
		assert(detectNetwork('62282291281770309') === 'China UnionPay');
	});

	it('has a prefix of 622823 and a length of 17', function() {
		assert(detectNetwork('62282365536337099') === 'China UnionPay');
	});

	it('has a prefix of 622824 and a length of 17', function() {
		assert(detectNetwork('62282443154917444') === 'China UnionPay');
	});

	it('has a prefix of 622825 and a length of 17', function() {
		assert(detectNetwork('62282515909725262') === 'China UnionPay');
	});

	it('has a prefix of 622826 and a length of 17', function() {
		assert(detectNetwork('62282633546689962') === 'China UnionPay');
	});

	it('has a prefix of 622827 and a length of 17', function() {
		assert(detectNetwork('62282752487687444') === 'China UnionPay');
	});

	it('has a prefix of 622828 and a length of 17', function() {
		assert(detectNetwork('62282806036452827') === 'China UnionPay');
	});

	it('has a prefix of 622829 and a length of 17', function() {
		assert(detectNetwork('62282995164703057') === 'China UnionPay');
	});

	it('has a prefix of 622830 and a length of 17', function() {
		assert(detectNetwork('62283056808655803') === 'China UnionPay');
	});

	it('has a prefix of 622831 and a length of 17', function() {
		assert(detectNetwork('62283157111435406') === 'China UnionPay');
	});

	it('has a prefix of 622832 and a length of 17', function() {
		assert(detectNetwork('62283234733816318') === 'China UnionPay');
	});

	it('has a prefix of 622833 and a length of 17', function() {
		assert(detectNetwork('62283304841002255') === 'China UnionPay');
	});

	it('has a prefix of 622834 and a length of 17', function() {
		assert(detectNetwork('62283443958196423') === 'China UnionPay');
	});

	it('has a prefix of 622835 and a length of 17', function() {
		assert(detectNetwork('62283569233747116') === 'China UnionPay');
	});

	it('has a prefix of 622836 and a length of 17', function() {
		assert(detectNetwork('62283616514264260') === 'China UnionPay');
	});

	it('has a prefix of 622837 and a length of 17', function() {
		assert(detectNetwork('62283761701197562') === 'China UnionPay');
	});

	it('has a prefix of 622838 and a length of 17', function() {
		assert(detectNetwork('62283837086786597') === 'China UnionPay');
	});

	it('has a prefix of 622839 and a length of 17', function() {
		assert(detectNetwork('62283953394479370') === 'China UnionPay');
	});

	it('has a prefix of 622840 and a length of 17', function() {
		assert(detectNetwork('62284024642512029') === 'China UnionPay');
	});

	it('has a prefix of 622841 and a length of 17', function() {
		assert(detectNetwork('62284169307960130') === 'China UnionPay');
	});

	it('has a prefix of 622842 and a length of 17', function() {
		assert(detectNetwork('62284280149342094') === 'China UnionPay');
	});

	it('has a prefix of 622843 and a length of 17', function() {
		assert(detectNetwork('62284315086771826') === 'China UnionPay');
	});

	it('has a prefix of 622844 and a length of 17', function() {
		assert(detectNetwork('62284456951545482') === 'China UnionPay');
	});

	it('has a prefix of 622845 and a length of 17', function() {
		assert(detectNetwork('62284566881295761') === 'China UnionPay');
	});

	it('has a prefix of 622846 and a length of 17', function() {
		assert(detectNetwork('62284661710674896') === 'China UnionPay');
	});

	it('has a prefix of 622847 and a length of 17', function() {
		assert(detectNetwork('62284706906450665') === 'China UnionPay');
	});

	it('has a prefix of 622848 and a length of 17', function() {
		assert(detectNetwork('62284843683223850') === 'China UnionPay');
	});

	it('has a prefix of 622849 and a length of 17', function() {
		assert(detectNetwork('62284968940545958') === 'China UnionPay');
	});

	it('has a prefix of 622850 and a length of 17', function() {
		assert(detectNetwork('62285036871225698') === 'China UnionPay');
	});

	it('has a prefix of 622851 and a length of 17', function() {
		assert(detectNetwork('62285143952216232') === 'China UnionPay');
	});

	it('has a prefix of 622852 and a length of 17', function() {
		assert(detectNetwork('62285265102112016') === 'China UnionPay');
	});

	it('has a prefix of 622853 and a length of 17', function() {
		assert(detectNetwork('62285399565037480') === 'China UnionPay');
	});

	it('has a prefix of 622854 and a length of 17', function() {
		assert(detectNetwork('62285430526793462') === 'China UnionPay');
	});

	it('has a prefix of 622855 and a length of 17', function() {
		assert(detectNetwork('62285555118909602') === 'China UnionPay');
	});

	it('has a prefix of 622856 and a length of 17', function() {
		assert(detectNetwork('62285699057478703') === 'China UnionPay');
	});

	it('has a prefix of 622857 and a length of 17', function() {
		assert(detectNetwork('62285717083822995') === 'China UnionPay');
	});

	it('has a prefix of 622858 and a length of 17', function() {
		assert(detectNetwork('62285858978520965') === 'China UnionPay');
	});

	it('has a prefix of 622859 and a length of 17', function() {
		assert(detectNetwork('62285973451670838') === 'China UnionPay');
	});

	it('has a prefix of 622860 and a length of 17', function() {
		assert(detectNetwork('62286010865106713') === 'China UnionPay');
	});

	it('has a prefix of 622861 and a length of 17', function() {
		assert(detectNetwork('62286131905555386') === 'China UnionPay');
	});

	it('has a prefix of 622862 and a length of 17', function() {
		assert(detectNetwork('62286215337494762') === 'China UnionPay');
	});

	it('has a prefix of 622863 and a length of 17', function() {
		assert(detectNetwork('62286364890210830') === 'China UnionPay');
	});

	it('has a prefix of 622864 and a length of 17', function() {
		assert(detectNetwork('62286437174363281') === 'China UnionPay');
	});

	it('has a prefix of 622865 and a length of 17', function() {
		assert(detectNetwork('62286546440367895') === 'China UnionPay');
	});

	it('has a prefix of 622866 and a length of 17', function() {
		assert(detectNetwork('62286655650715713') === 'China UnionPay');
	});

	it('has a prefix of 622867 and a length of 17', function() {
		assert(detectNetwork('62286787275149958') === 'China UnionPay');
	});

	it('has a prefix of 622868 and a length of 17', function() {
		assert(detectNetwork('62286894705388710') === 'China UnionPay');
	});

	it('has a prefix of 622869 and a length of 17', function() {
		assert(detectNetwork('62286971871457275') === 'China UnionPay');
	});

	it('has a prefix of 622870 and a length of 17', function() {
		assert(detectNetwork('62287060141817128') === 'China UnionPay');
	});

	it('has a prefix of 622871 and a length of 17', function() {
		assert(detectNetwork('62287190570609158') === 'China UnionPay');
	});

	it('has a prefix of 622872 and a length of 17', function() {
		assert(detectNetwork('62287233227322892') === 'China UnionPay');
	});

	it('has a prefix of 622873 and a length of 17', function() {
		assert(detectNetwork('62287311174671126') === 'China UnionPay');
	});

	it('has a prefix of 622874 and a length of 17', function() {
		assert(detectNetwork('62287411603252091') === 'China UnionPay');
	});

	it('has a prefix of 622875 and a length of 17', function() {
		assert(detectNetwork('62287507989329522') === 'China UnionPay');
	});

	it('has a prefix of 622876 and a length of 17', function() {
		assert(detectNetwork('62287655551308642') === 'China UnionPay');
	});

	it('has a prefix of 622877 and a length of 17', function() {
		assert(detectNetwork('62287743535093217') === 'China UnionPay');
	});

	it('has a prefix of 622878 and a length of 17', function() {
		assert(detectNetwork('62287881348499136') === 'China UnionPay');
	});

	it('has a prefix of 622879 and a length of 17', function() {
		assert(detectNetwork('62287932492389269') === 'China UnionPay');
	});

	it('has a prefix of 622880 and a length of 17', function() {
		assert(detectNetwork('62288079619317685') === 'China UnionPay');
	});

	it('has a prefix of 622881 and a length of 17', function() {
		assert(detectNetwork('62288199180616431') === 'China UnionPay');
	});

	it('has a prefix of 622882 and a length of 17', function() {
		assert(detectNetwork('62288250080031025') === 'China UnionPay');
	});

	it('has a prefix of 622883 and a length of 17', function() {
		assert(detectNetwork('62288303163741814') === 'China UnionPay');
	});

	it('has a prefix of 622884 and a length of 17', function() {
		assert(detectNetwork('62288476054677621') === 'China UnionPay');
	});

	it('has a prefix of 622885 and a length of 17', function() {
		assert(detectNetwork('62288591273599266') === 'China UnionPay');
	});

	it('has a prefix of 622886 and a length of 17', function() {
		assert(detectNetwork('62288662143617763') === 'China UnionPay');
	});

	it('has a prefix of 622887 and a length of 17', function() {
		assert(detectNetwork('62288705363506221') === 'China UnionPay');
	});

	it('has a prefix of 622888 and a length of 17', function() {
		assert(detectNetwork('62288837708462992') === 'China UnionPay');
	});

	it('has a prefix of 622889 and a length of 17', function() {
		assert(detectNetwork('62288987424980253') === 'China UnionPay');
	});

	it('has a prefix of 622890 and a length of 17', function() {
		assert(detectNetwork('62289022279857071') === 'China UnionPay');
	});

	it('has a prefix of 622891 and a length of 17', function() {
		assert(detectNetwork('62289114672464152') === 'China UnionPay');
	});

	it('has a prefix of 622892 and a length of 17', function() {
		assert(detectNetwork('62289218506173187') === 'China UnionPay');
	});

	it('has a prefix of 622893 and a length of 17', function() {
		assert(detectNetwork('62289370771777554') === 'China UnionPay');
	});

	it('has a prefix of 622894 and a length of 17', function() {
		assert(detectNetwork('62289457884666123') === 'China UnionPay');
	});

	it('has a prefix of 622895 and a length of 17', function() {
		assert(detectNetwork('62289599252745811') === 'China UnionPay');
	});

	it('has a prefix of 622896 and a length of 17', function() {
		assert(detectNetwork('62289600169198292') === 'China UnionPay');
	});

	it('has a prefix of 622897 and a length of 17', function() {
		assert(detectNetwork('62289748596465981') === 'China UnionPay');
	});

	it('has a prefix of 622898 and a length of 17', function() {
		assert(detectNetwork('62289840375566737') === 'China UnionPay');
	});

	it('has a prefix of 622899 and a length of 17', function() {
		assert(detectNetwork('62289914863706337') === 'China UnionPay');
	});

	it('has a prefix of 622900 and a length of 17', function() {
		assert(detectNetwork('62290019647166928') === 'China UnionPay');
	});

	it('has a prefix of 622901 and a length of 17', function() {
		assert(detectNetwork('62290159491009735') === 'China UnionPay');
	});

	it('has a prefix of 622902 and a length of 17', function() {
		assert(detectNetwork('62290298876348751') === 'China UnionPay');
	});

	it('has a prefix of 622903 and a length of 17', function() {
		assert(detectNetwork('62290387135365454') === 'China UnionPay');
	});

	it('has a prefix of 622904 and a length of 17', function() {
		assert(detectNetwork('62290442502603379') === 'China UnionPay');
	});

	it('has a prefix of 622905 and a length of 17', function() {
		assert(detectNetwork('62290560596643906') === 'China UnionPay');
	});

	it('has a prefix of 622906 and a length of 17', function() {
		assert(detectNetwork('62290699589385165') === 'China UnionPay');
	});

	it('has a prefix of 622907 and a length of 17', function() {
		assert(detectNetwork('62290754658450542') === 'China UnionPay');
	});

	it('has a prefix of 622908 and a length of 17', function() {
		assert(detectNetwork('62290836722793477') === 'China UnionPay');
	});

	it('has a prefix of 622909 and a length of 17', function() {
		assert(detectNetwork('62290939696624800') === 'China UnionPay');
	});

	it('has a prefix of 622910 and a length of 17', function() {
		assert(detectNetwork('62291054950815877') === 'China UnionPay');
	});

	it('has a prefix of 622911 and a length of 17', function() {
		assert(detectNetwork('62291151629197424') === 'China UnionPay');
	});

	it('has a prefix of 622912 and a length of 17', function() {
		assert(detectNetwork('62291204484716212') === 'China UnionPay');
	});

	it('has a prefix of 622913 and a length of 17', function() {
		assert(detectNetwork('62291354238232141') === 'China UnionPay');
	});

	it('has a prefix of 622914 and a length of 17', function() {
		assert(detectNetwork('62291481793861423') === 'China UnionPay');
	});

	it('has a prefix of 622915 and a length of 17', function() {
		assert(detectNetwork('62291509354383299') === 'China UnionPay');
	});

	it('has a prefix of 622916 and a length of 17', function() {
		assert(detectNetwork('62291639794042270') === 'China UnionPay');
	});

	it('has a prefix of 622917 and a length of 17', function() {
		assert(detectNetwork('62291700609050601') === 'China UnionPay');
	});

	it('has a prefix of 622918 and a length of 17', function() {
		assert(detectNetwork('62291869981754461') === 'China UnionPay');
	});

	it('has a prefix of 622919 and a length of 17', function() {
		assert(detectNetwork('62291964673285930') === 'China UnionPay');
	});

	it('has a prefix of 622920 and a length of 17', function() {
		assert(detectNetwork('62292036023863631') === 'China UnionPay');
	});

	it('has a prefix of 622921 and a length of 17', function() {
		assert(detectNetwork('62292188020029341') === 'China UnionPay');
	});

	it('has a prefix of 622922 and a length of 17', function() {
		assert(detectNetwork('62292282265774446') === 'China UnionPay');
	});

	it('has a prefix of 622923 and a length of 17', function() {
		assert(detectNetwork('62292324015175660') === 'China UnionPay');
	});

	it('has a prefix of 622924 and a length of 17', function() {
		assert(detectNetwork('62292458182491891') === 'China UnionPay');
	});

	it('has a prefix of 622925 and a length of 17', function() {
		assert(detectNetwork('62292596187168986') === 'China UnionPay');
	});

	it('has a prefix of 624 and a length of 18', function() {
		assert(detectNetwork('624070134353223542') === 'China UnionPay');
	});

	it('has a prefix of 625 and a length of 18', function() {
		assert(detectNetwork('625752371349803045') === 'China UnionPay');
	});

	it('has a prefix of 626 and a length of 18', function() {
		assert(detectNetwork('626610424401660443') === 'China UnionPay');
	});

	it('has a prefix of 6282 and a length of 18', function() {
		assert(detectNetwork('628267024507716900') === 'China UnionPay');
	});

	it('has a prefix of 6283 and a length of 18', function() {
		assert(detectNetwork('628382751838983838') === 'China UnionPay');
	});

	it('has a prefix of 6284 and a length of 18', function() {
		assert(detectNetwork('628402057590569209') === 'China UnionPay');
	});

	it('has a prefix of 6285 and a length of 18', function() {
		assert(detectNetwork('628543414063655921') === 'China UnionPay');
	});

	it('has a prefix of 6286 and a length of 18', function() {
		assert(detectNetwork('628646792248569169') === 'China UnionPay');
	});

	it('has a prefix of 6287 and a length of 18', function() {
		assert(detectNetwork('628754028211004227') === 'China UnionPay');
	});

	it('has a prefix of 6288 and a length of 18', function() {
		assert(detectNetwork('628819744165618667') === 'China UnionPay');
	});

	it('has a prefix of 622126 and a length of 18', function() {
		assert(detectNetwork('622126658759244918') === 'China UnionPay');
	});

	it('has a prefix of 622127 and a length of 18', function() {
		assert(detectNetwork('622127567654537964') === 'China UnionPay');
	});

	it('has a prefix of 622128 and a length of 18', function() {
		assert(detectNetwork('622128479113182829') === 'China UnionPay');
	});

	it('has a prefix of 622129 and a length of 18', function() {
		assert(detectNetwork('622129639649972112') === 'China UnionPay');
	});

	it('has a prefix of 622130 and a length of 18', function() {
		assert(detectNetwork('622130166565805009') === 'China UnionPay');
	});

	it('has a prefix of 622131 and a length of 18', function() {
		assert(detectNetwork('622131436815492722') === 'China UnionPay');
	});

	it('has a prefix of 622132 and a length of 18', function() {
		assert(detectNetwork('622132308908693072') === 'China UnionPay');
	});

	it('has a prefix of 622133 and a length of 18', function() {
		assert(detectNetwork('622133994960782658') === 'China UnionPay');
	});

	it('has a prefix of 622134 and a length of 18', function() {
		assert(detectNetwork('622134940205033326') === 'China UnionPay');
	});

	it('has a prefix of 622135 and a length of 18', function() {
		assert(detectNetwork('622135590278584291') === 'China UnionPay');
	});

	it('has a prefix of 622136 and a length of 18', function() {
		assert(detectNetwork('622136283831378042') === 'China UnionPay');
	});

	it('has a prefix of 622137 and a length of 18', function() {
		assert(detectNetwork('622137166927135596') === 'China UnionPay');
	});

	it('has a prefix of 622138 and a length of 18', function() {
		assert(detectNetwork('622138833339139276') === 'China UnionPay');
	});

	it('has a prefix of 622139 and a length of 18', function() {
		assert(detectNetwork('622139617604170552') === 'China UnionPay');
	});

	it('has a prefix of 622140 and a length of 18', function() {
		assert(detectNetwork('622140277255818877') === 'China UnionPay');
	});

	it('has a prefix of 622141 and a length of 18', function() {
		assert(detectNetwork('622141233354626820') === 'China UnionPay');
	});

	it('has a prefix of 622142 and a length of 18', function() {
		assert(detectNetwork('622142525616508876') === 'China UnionPay');
	});

	it('has a prefix of 622143 and a length of 18', function() {
		assert(detectNetwork('622143087037584343') === 'China UnionPay');
	});

	it('has a prefix of 622144 and a length of 18', function() {
		assert(detectNetwork('622144317507882629') === 'China UnionPay');
	});

	it('has a prefix of 622145 and a length of 18', function() {
		assert(detectNetwork('622145699763522897') === 'China UnionPay');
	});

	it('has a prefix of 622146 and a length of 18', function() {
		assert(detectNetwork('622146648520095001') === 'China UnionPay');
	});

	it('has a prefix of 622147 and a length of 18', function() {
		assert(detectNetwork('622147063158620964') === 'China UnionPay');
	});

	it('has a prefix of 622148 and a length of 18', function() {
		assert(detectNetwork('622148395215164978') === 'China UnionPay');
	});

	it('has a prefix of 622149 and a length of 18', function() {
		assert(detectNetwork('622149172425053045') === 'China UnionPay');
	});

	it('has a prefix of 622150 and a length of 18', function() {
		assert(detectNetwork('622150182125826552') === 'China UnionPay');
	});

	it('has a prefix of 622151 and a length of 18', function() {
		assert(detectNetwork('622151243461667852') === 'China UnionPay');
	});

	it('has a prefix of 622152 and a length of 18', function() {
		assert(detectNetwork('622152692334218557') === 'China UnionPay');
	});

	it('has a prefix of 622153 and a length of 18', function() {
		assert(detectNetwork('622153953006528661') === 'China UnionPay');
	});

	it('has a prefix of 622154 and a length of 18', function() {
		assert(detectNetwork('622154214587317058') === 'China UnionPay');
	});

	it('has a prefix of 622155 and a length of 18', function() {
		assert(detectNetwork('622155583251109436') === 'China UnionPay');
	});

	it('has a prefix of 622156 and a length of 18', function() {
		assert(detectNetwork('622156949696655608') === 'China UnionPay');
	});

	it('has a prefix of 622157 and a length of 18', function() {
		assert(detectNetwork('622157790192813471') === 'China UnionPay');
	});

	it('has a prefix of 622158 and a length of 18', function() {
		assert(detectNetwork('622158661886452630') === 'China UnionPay');
	});

	it('has a prefix of 622159 and a length of 18', function() {
		assert(detectNetwork('622159624498368848') === 'China UnionPay');
	});

	it('has a prefix of 622160 and a length of 18', function() {
		assert(detectNetwork('622160483868517682') === 'China UnionPay');
	});

	it('has a prefix of 622161 and a length of 18', function() {
		assert(detectNetwork('622161600924383603') === 'China UnionPay');
	});

	it('has a prefix of 622162 and a length of 18', function() {
		assert(detectNetwork('622162544398847838') === 'China UnionPay');
	});

	it('has a prefix of 622163 and a length of 18', function() {
		assert(detectNetwork('622163587638622284') === 'China UnionPay');
	});

	it('has a prefix of 622164 and a length of 18', function() {
		assert(detectNetwork('622164246867169507') === 'China UnionPay');
	});

	it('has a prefix of 622165 and a length of 18', function() {
		assert(detectNetwork('622165500850014551') === 'China UnionPay');
	});

	it('has a prefix of 622166 and a length of 18', function() {
		assert(detectNetwork('622166134980242156') === 'China UnionPay');
	});

	it('has a prefix of 622167 and a length of 18', function() {
		assert(detectNetwork('622167656162552762') === 'China UnionPay');
	});

	it('has a prefix of 622168 and a length of 18', function() {
		assert(detectNetwork('622168249464901548') === 'China UnionPay');
	});

	it('has a prefix of 622169 and a length of 18', function() {
		assert(detectNetwork('622169197156500077') === 'China UnionPay');
	});

	it('has a prefix of 622170 and a length of 18', function() {
		assert(detectNetwork('622170523271689930') === 'China UnionPay');
	});

	it('has a prefix of 622171 and a length of 18', function() {
		assert(detectNetwork('622171404762857684') === 'China UnionPay');
	});

	it('has a prefix of 622172 and a length of 18', function() {
		assert(detectNetwork('622172344868016838') === 'China UnionPay');
	});

	it('has a prefix of 622173 and a length of 18', function() {
		assert(detectNetwork('622173292920397026') === 'China UnionPay');
	});

	it('has a prefix of 622174 and a length of 18', function() {
		assert(detectNetwork('622174282734895545') === 'China UnionPay');
	});

	it('has a prefix of 622175 and a length of 18', function() {
		assert(detectNetwork('622175390438301849') === 'China UnionPay');
	});

	it('has a prefix of 622176 and a length of 18', function() {
		assert(detectNetwork('622176986119720573') === 'China UnionPay');
	});

	it('has a prefix of 622177 and a length of 18', function() {
		assert(detectNetwork('622177882768742224') === 'China UnionPay');
	});

	it('has a prefix of 622178 and a length of 18', function() {
		assert(detectNetwork('622178674480965790') === 'China UnionPay');
	});

	it('has a prefix of 622179 and a length of 18', function() {
		assert(detectNetwork('622179631368604465') === 'China UnionPay');
	});

	it('has a prefix of 622180 and a length of 18', function() {
		assert(detectNetwork('622180497541967017') === 'China UnionPay');
	});

	it('has a prefix of 622181 and a length of 18', function() {
		assert(detectNetwork('622181147867098499') === 'China UnionPay');
	});

	it('has a prefix of 622182 and a length of 18', function() {
		assert(detectNetwork('622182805377521204') === 'China UnionPay');
	});

	it('has a prefix of 622183 and a length of 18', function() {
		assert(detectNetwork('622183351919281048') === 'China UnionPay');
	});

	it('has a prefix of 622184 and a length of 18', function() {
		assert(detectNetwork('622184995316416210') === 'China UnionPay');
	});

	it('has a prefix of 622185 and a length of 18', function() {
		assert(detectNetwork('622185856072925455') === 'China UnionPay');
	});

	it('has a prefix of 622186 and a length of 18', function() {
		assert(detectNetwork('622186810055539097') === 'China UnionPay');
	});

	it('has a prefix of 622187 and a length of 18', function() {
		assert(detectNetwork('622187590147709061') === 'China UnionPay');
	});

	it('has a prefix of 622188 and a length of 18', function() {
		assert(detectNetwork('622188372492248306') === 'China UnionPay');
	});

	it('has a prefix of 622189 and a length of 18', function() {
		assert(detectNetwork('622189537664722698') === 'China UnionPay');
	});

	it('has a prefix of 622190 and a length of 18', function() {
		assert(detectNetwork('622190424496871957') === 'China UnionPay');
	});

	it('has a prefix of 622191 and a length of 18', function() {
		assert(detectNetwork('622191212235524497') === 'China UnionPay');
	});

	it('has a prefix of 622192 and a length of 18', function() {
		assert(detectNetwork('622192007745057861') === 'China UnionPay');
	});

	it('has a prefix of 622193 and a length of 18', function() {
		assert(detectNetwork('622193823485281338') === 'China UnionPay');
	});

	it('has a prefix of 622194 and a length of 18', function() {
		assert(detectNetwork('622194408230406786') === 'China UnionPay');
	});

	it('has a prefix of 622195 and a length of 18', function() {
		assert(detectNetwork('622195625979202820') === 'China UnionPay');
	});

	it('has a prefix of 622196 and a length of 18', function() {
		assert(detectNetwork('622196672624868266') === 'China UnionPay');
	});

	it('has a prefix of 622197 and a length of 18', function() {
		assert(detectNetwork('622197486277944010') === 'China UnionPay');
	});

	it('has a prefix of 622198 and a length of 18', function() {
		assert(detectNetwork('622198311928583466') === 'China UnionPay');
	});

	it('has a prefix of 622199 and a length of 18', function() {
		assert(detectNetwork('622199799086146615') === 'China UnionPay');
	});

	it('has a prefix of 622200 and a length of 18', function() {
		assert(detectNetwork('622200146669559039') === 'China UnionPay');
	});

	it('has a prefix of 622201 and a length of 18', function() {
		assert(detectNetwork('622201109429058585') === 'China UnionPay');
	});

	it('has a prefix of 622202 and a length of 18', function() {
		assert(detectNetwork('622202853687500475') === 'China UnionPay');
	});

	it('has a prefix of 622203 and a length of 18', function() {
		assert(detectNetwork('622203329427594524') === 'China UnionPay');
	});

	it('has a prefix of 622204 and a length of 18', function() {
		assert(detectNetwork('622204653277358342') === 'China UnionPay');
	});

	it('has a prefix of 622205 and a length of 18', function() {
		assert(detectNetwork('622205053450327762') === 'China UnionPay');
	});

	it('has a prefix of 622206 and a length of 18', function() {
		assert(detectNetwork('622206255170888152') === 'China UnionPay');
	});

	it('has a prefix of 622207 and a length of 18', function() {
		assert(detectNetwork('622207268321355033') === 'China UnionPay');
	});

	it('has a prefix of 622208 and a length of 18', function() {
		assert(detectNetwork('622208791030607643') === 'China UnionPay');
	});

	it('has a prefix of 622209 and a length of 18', function() {
		assert(detectNetwork('622209521054125369') === 'China UnionPay');
	});

	it('has a prefix of 622210 and a length of 18', function() {
		assert(detectNetwork('622210744237370740') === 'China UnionPay');
	});

	it('has a prefix of 622211 and a length of 18', function() {
		assert(detectNetwork('622211287608718730') === 'China UnionPay');
	});

	it('has a prefix of 622212 and a length of 18', function() {
		assert(detectNetwork('622212792828496227') === 'China UnionPay');
	});

	it('has a prefix of 622213 and a length of 18', function() {
		assert(detectNetwork('622213114833402463') === 'China UnionPay');
	});

	it('has a prefix of 622214 and a length of 18', function() {
		assert(detectNetwork('622214175242680245') === 'China UnionPay');
	});

	it('has a prefix of 622215 and a length of 18', function() {
		assert(detectNetwork('622215827317419943') === 'China UnionPay');
	});

	it('has a prefix of 622216 and a length of 18', function() {
		assert(detectNetwork('622216225082105937') === 'China UnionPay');
	});

	it('has a prefix of 622217 and a length of 18', function() {
		assert(detectNetwork('622217976975352547') === 'China UnionPay');
	});

	it('has a prefix of 622218 and a length of 18', function() {
		assert(detectNetwork('622218388679464334') === 'China UnionPay');
	});

	it('has a prefix of 622219 and a length of 18', function() {
		assert(detectNetwork('622219509748941494') === 'China UnionPay');
	});

	it('has a prefix of 622220 and a length of 18', function() {
		assert(detectNetwork('622220394863614354') === 'China UnionPay');
	});

	it('has a prefix of 622221 and a length of 18', function() {
		assert(detectNetwork('622221110779749942') === 'China UnionPay');
	});

	it('has a prefix of 622222 and a length of 18', function() {
		assert(detectNetwork('622222360885218384') === 'China UnionPay');
	});

	it('has a prefix of 622223 and a length of 18', function() {
		assert(detectNetwork('622223262135305745') === 'China UnionPay');
	});

	it('has a prefix of 622224 and a length of 18', function() {
		assert(detectNetwork('622224248688666973') === 'China UnionPay');
	});

	it('has a prefix of 622225 and a length of 18', function() {
		assert(detectNetwork('622225370359975976') === 'China UnionPay');
	});

	it('has a prefix of 622226 and a length of 18', function() {
		assert(detectNetwork('622226480148200368') === 'China UnionPay');
	});

	it('has a prefix of 622227 and a length of 18', function() {
		assert(detectNetwork('622227092811082967') === 'China UnionPay');
	});

	it('has a prefix of 622228 and a length of 18', function() {
		assert(detectNetwork('622228111329283755') === 'China UnionPay');
	});

	it('has a prefix of 622229 and a length of 18', function() {
		assert(detectNetwork('622229034578833521') === 'China UnionPay');
	});

	it('has a prefix of 622230 and a length of 18', function() {
		assert(detectNetwork('622230868141290234') === 'China UnionPay');
	});

	it('has a prefix of 622231 and a length of 18', function() {
		assert(detectNetwork('622231341569080862') === 'China UnionPay');
	});

	it('has a prefix of 622232 and a length of 18', function() {
		assert(detectNetwork('622232934906476094') === 'China UnionPay');
	});

	it('has a prefix of 622233 and a length of 18', function() {
		assert(detectNetwork('622233143109138398') === 'China UnionPay');
	});

	it('has a prefix of 622234 and a length of 18', function() {
		assert(detectNetwork('622234891455005657') === 'China UnionPay');
	});

	it('has a prefix of 622235 and a length of 18', function() {
		assert(detectNetwork('622235018709759861') === 'China UnionPay');
	});

	it('has a prefix of 622236 and a length of 18', function() {
		assert(detectNetwork('622236462187223765') === 'China UnionPay');
	});

	it('has a prefix of 622237 and a length of 18', function() {
		assert(detectNetwork('622237408268005872') === 'China UnionPay');
	});

	it('has a prefix of 622238 and a length of 18', function() {
		assert(detectNetwork('622238087909368608') === 'China UnionPay');
	});

	it('has a prefix of 622239 and a length of 18', function() {
		assert(detectNetwork('622239194275445619') === 'China UnionPay');
	});

	it('has a prefix of 622240 and a length of 18', function() {
		assert(detectNetwork('622240789195645694') === 'China UnionPay');
	});

	it('has a prefix of 622241 and a length of 18', function() {
		assert(detectNetwork('622241573084495163') === 'China UnionPay');
	});

	it('has a prefix of 622242 and a length of 18', function() {
		assert(detectNetwork('622242782589397514') === 'China UnionPay');
	});

	it('has a prefix of 622243 and a length of 18', function() {
		assert(detectNetwork('622243734371153042') === 'China UnionPay');
	});

	it('has a prefix of 622244 and a length of 18', function() {
		assert(detectNetwork('622244634242159075') === 'China UnionPay');
	});

	it('has a prefix of 622245 and a length of 18', function() {
		assert(detectNetwork('622245253632403888') === 'China UnionPay');
	});

	it('has a prefix of 622246 and a length of 18', function() {
		assert(detectNetwork('622246665577201685') === 'China UnionPay');
	});

	it('has a prefix of 622247 and a length of 18', function() {
		assert(detectNetwork('622247870445336753') === 'China UnionPay');
	});

	it('has a prefix of 622248 and a length of 18', function() {
		assert(detectNetwork('622248092995847773') === 'China UnionPay');
	});

	it('has a prefix of 622249 and a length of 18', function() {
		assert(detectNetwork('622249938295816498') === 'China UnionPay');
	});

	it('has a prefix of 622250 and a length of 18', function() {
		assert(detectNetwork('622250068359741617') === 'China UnionPay');
	});

	it('has a prefix of 622251 and a length of 18', function() {
		assert(detectNetwork('622251827391198406') === 'China UnionPay');
	});

	it('has a prefix of 622252 and a length of 18', function() {
		assert(detectNetwork('622252633788412907') === 'China UnionPay');
	});

	it('has a prefix of 622253 and a length of 18', function() {
		assert(detectNetwork('622253083875859420') === 'China UnionPay');
	});

	it('has a prefix of 622254 and a length of 18', function() {
		assert(detectNetwork('622254006516682660') === 'China UnionPay');
	});

	it('has a prefix of 622255 and a length of 18', function() {
		assert(detectNetwork('622255731017021779') === 'China UnionPay');
	});

	it('has a prefix of 622256 and a length of 18', function() {
		assert(detectNetwork('622256111021967795') === 'China UnionPay');
	});

	it('has a prefix of 622257 and a length of 18', function() {
		assert(detectNetwork('622257912663701963') === 'China UnionPay');
	});

	it('has a prefix of 622258 and a length of 18', function() {
		assert(detectNetwork('622258270089328420') === 'China UnionPay');
	});

	it('has a prefix of 622259 and a length of 18', function() {
		assert(detectNetwork('622259643606524769') === 'China UnionPay');
	});

	it('has a prefix of 622260 and a length of 18', function() {
		assert(detectNetwork('622260653089773641') === 'China UnionPay');
	});

	it('has a prefix of 622261 and a length of 18', function() {
		assert(detectNetwork('622261754091249467') === 'China UnionPay');
	});

	it('has a prefix of 622262 and a length of 18', function() {
		assert(detectNetwork('622262789888956302') === 'China UnionPay');
	});

	it('has a prefix of 622263 and a length of 18', function() {
		assert(detectNetwork('622263758784667914') === 'China UnionPay');
	});

	it('has a prefix of 622264 and a length of 18', function() {
		assert(detectNetwork('622264629266883066') === 'China UnionPay');
	});

	it('has a prefix of 622265 and a length of 18', function() {
		assert(detectNetwork('622265078046413722') === 'China UnionPay');
	});

	it('has a prefix of 622266 and a length of 18', function() {
		assert(detectNetwork('622266134165191078') === 'China UnionPay');
	});

	it('has a prefix of 622267 and a length of 18', function() {
		assert(detectNetwork('622267799716562099') === 'China UnionPay');
	});

	it('has a prefix of 622268 and a length of 18', function() {
		assert(detectNetwork('622268278945401779') === 'China UnionPay');
	});

	it('has a prefix of 622269 and a length of 18', function() {
		assert(detectNetwork('622269351116600047') === 'China UnionPay');
	});

	it('has a prefix of 622270 and a length of 18', function() {
		assert(detectNetwork('622270081340127224') === 'China UnionPay');
	});

	it('has a prefix of 622271 and a length of 18', function() {
		assert(detectNetwork('622271152375454605') === 'China UnionPay');
	});

	it('has a prefix of 622272 and a length of 18', function() {
		assert(detectNetwork('622272280585409271') === 'China UnionPay');
	});

	it('has a prefix of 622273 and a length of 18', function() {
		assert(detectNetwork('622273244633208872') === 'China UnionPay');
	});

	it('has a prefix of 622274 and a length of 18', function() {
		assert(detectNetwork('622274396402777768') === 'China UnionPay');
	});

	it('has a prefix of 622275 and a length of 18', function() {
		assert(detectNetwork('622275455066073259') === 'China UnionPay');
	});

	it('has a prefix of 622276 and a length of 18', function() {
		assert(detectNetwork('622276442262253822') === 'China UnionPay');
	});

	it('has a prefix of 622277 and a length of 18', function() {
		assert(detectNetwork('622277906106889489') === 'China UnionPay');
	});

	it('has a prefix of 622278 and a length of 18', function() {
		assert(detectNetwork('622278971860624070') === 'China UnionPay');
	});

	it('has a prefix of 622279 and a length of 18', function() {
		assert(detectNetwork('622279318208623600') === 'China UnionPay');
	});

	it('has a prefix of 622280 and a length of 18', function() {
		assert(detectNetwork('622280602575800248') === 'China UnionPay');
	});

	it('has a prefix of 622281 and a length of 18', function() {
		assert(detectNetwork('622281597684390272') === 'China UnionPay');
	});

	it('has a prefix of 622282 and a length of 18', function() {
		assert(detectNetwork('622282335176537719') === 'China UnionPay');
	});

	it('has a prefix of 622283 and a length of 18', function() {
		assert(detectNetwork('622283104462876972') === 'China UnionPay');
	});

	it('has a prefix of 622284 and a length of 18', function() {
		assert(detectNetwork('622284134851802611') === 'China UnionPay');
	});

	it('has a prefix of 622285 and a length of 18', function() {
		assert(detectNetwork('622285634615323367') === 'China UnionPay');
	});

	it('has a prefix of 622286 and a length of 18', function() {
		assert(detectNetwork('622286427962397435') === 'China UnionPay');
	});

	it('has a prefix of 622287 and a length of 18', function() {
		assert(detectNetwork('622287000489080714') === 'China UnionPay');
	});

	it('has a prefix of 622288 and a length of 18', function() {
		assert(detectNetwork('622288276109646166') === 'China UnionPay');
	});

	it('has a prefix of 622289 and a length of 18', function() {
		assert(detectNetwork('622289336682978275') === 'China UnionPay');
	});

	it('has a prefix of 622290 and a length of 18', function() {
		assert(detectNetwork('622290670502391455') === 'China UnionPay');
	});

	it('has a prefix of 622291 and a length of 18', function() {
		assert(detectNetwork('622291988288178346') === 'China UnionPay');
	});

	it('has a prefix of 622292 and a length of 18', function() {
		assert(detectNetwork('622292088991517447') === 'China UnionPay');
	});

	it('has a prefix of 622293 and a length of 18', function() {
		assert(detectNetwork('622293372297676292') === 'China UnionPay');
	});

	it('has a prefix of 622294 and a length of 18', function() {
		assert(detectNetwork('622294215412770090') === 'China UnionPay');
	});

	it('has a prefix of 622295 and a length of 18', function() {
		assert(detectNetwork('622295674182424002') === 'China UnionPay');
	});

	it('has a prefix of 622296 and a length of 18', function() {
		assert(detectNetwork('622296277427935261') === 'China UnionPay');
	});

	it('has a prefix of 622297 and a length of 18', function() {
		assert(detectNetwork('622297680726910801') === 'China UnionPay');
	});

	it('has a prefix of 622298 and a length of 18', function() {
		assert(detectNetwork('622298146622446517') === 'China UnionPay');
	});

	it('has a prefix of 622299 and a length of 18', function() {
		assert(detectNetwork('622299101104453022') === 'China UnionPay');
	});

	it('has a prefix of 622300 and a length of 18', function() {
		assert(detectNetwork('622300800975775443') === 'China UnionPay');
	});

	it('has a prefix of 622301 and a length of 18', function() {
		assert(detectNetwork('622301741703569069') === 'China UnionPay');
	});

	it('has a prefix of 622302 and a length of 18', function() {
		assert(detectNetwork('622302417552080973') === 'China UnionPay');
	});

	it('has a prefix of 622303 and a length of 18', function() {
		assert(detectNetwork('622303618028159080') === 'China UnionPay');
	});

	it('has a prefix of 622304 and a length of 18', function() {
		assert(detectNetwork('622304650661310364') === 'China UnionPay');
	});

	it('has a prefix of 622305 and a length of 18', function() {
		assert(detectNetwork('622305153766867120') === 'China UnionPay');
	});

	it('has a prefix of 622306 and a length of 18', function() {
		assert(detectNetwork('622306343408696709') === 'China UnionPay');
	});

	it('has a prefix of 622307 and a length of 18', function() {
		assert(detectNetwork('622307005121815874') === 'China UnionPay');
	});

	it('has a prefix of 622308 and a length of 18', function() {
		assert(detectNetwork('622308119094659327') === 'China UnionPay');
	});

	it('has a prefix of 622309 and a length of 18', function() {
		assert(detectNetwork('622309684286355064') === 'China UnionPay');
	});

	it('has a prefix of 622310 and a length of 18', function() {
		assert(detectNetwork('622310267514715496') === 'China UnionPay');
	});

	it('has a prefix of 622311 and a length of 18', function() {
		assert(detectNetwork('622311590691493340') === 'China UnionPay');
	});

	it('has a prefix of 622312 and a length of 18', function() {
		assert(detectNetwork('622312003194900979') === 'China UnionPay');
	});

	it('has a prefix of 622313 and a length of 18', function() {
		assert(detectNetwork('622313118977765712') === 'China UnionPay');
	});

	it('has a prefix of 622314 and a length of 18', function() {
		assert(detectNetwork('622314717622634461') === 'China UnionPay');
	});

	it('has a prefix of 622315 and a length of 18', function() {
		assert(detectNetwork('622315944429278482') === 'China UnionPay');
	});

	it('has a prefix of 622316 and a length of 18', function() {
		assert(detectNetwork('622316997399418425') === 'China UnionPay');
	});

	it('has a prefix of 622317 and a length of 18', function() {
		assert(detectNetwork('622317701483638274') === 'China UnionPay');
	});

	it('has a prefix of 622318 and a length of 18', function() {
		assert(detectNetwork('622318854081870882') === 'China UnionPay');
	});

	it('has a prefix of 622319 and a length of 18', function() {
		assert(detectNetwork('622319072910348171') === 'China UnionPay');
	});

	it('has a prefix of 622320 and a length of 18', function() {
		assert(detectNetwork('622320851509011791') === 'China UnionPay');
	});

	it('has a prefix of 622321 and a length of 18', function() {
		assert(detectNetwork('622321771773378940') === 'China UnionPay');
	});

	it('has a prefix of 622322 and a length of 18', function() {
		assert(detectNetwork('622322831143201841') === 'China UnionPay');
	});

	it('has a prefix of 622323 and a length of 18', function() {
		assert(detectNetwork('622323753904522343') === 'China UnionPay');
	});

	it('has a prefix of 622324 and a length of 18', function() {
		assert(detectNetwork('622324502833201041') === 'China UnionPay');
	});

	it('has a prefix of 622325 and a length of 18', function() {
		assert(detectNetwork('622325706950271036') === 'China UnionPay');
	});

	it('has a prefix of 622326 and a length of 18', function() {
		assert(detectNetwork('622326087469315492') === 'China UnionPay');
	});

	it('has a prefix of 622327 and a length of 18', function() {
		assert(detectNetwork('622327017806908809') === 'China UnionPay');
	});

	it('has a prefix of 622328 and a length of 18', function() {
		assert(detectNetwork('622328549665399770') === 'China UnionPay');
	});

	it('has a prefix of 622329 and a length of 18', function() {
		assert(detectNetwork('622329806035427810') === 'China UnionPay');
	});

	it('has a prefix of 622330 and a length of 18', function() {
		assert(detectNetwork('622330768560112022') === 'China UnionPay');
	});

	it('has a prefix of 622331 and a length of 18', function() {
		assert(detectNetwork('622331467704658869') === 'China UnionPay');
	});

	it('has a prefix of 622332 and a length of 18', function() {
		assert(detectNetwork('622332108472561155') === 'China UnionPay');
	});

	it('has a prefix of 622333 and a length of 18', function() {
		assert(detectNetwork('622333849614499983') === 'China UnionPay');
	});

	it('has a prefix of 622334 and a length of 18', function() {
		assert(detectNetwork('622334837922813170') === 'China UnionPay');
	});

	it('has a prefix of 622335 and a length of 18', function() {
		assert(detectNetwork('622335573113718701') === 'China UnionPay');
	});

	it('has a prefix of 622336 and a length of 18', function() {
		assert(detectNetwork('622336565427813556') === 'China UnionPay');
	});

	it('has a prefix of 622337 and a length of 18', function() {
		assert(detectNetwork('622337567199751219') === 'China UnionPay');
	});

	it('has a prefix of 622338 and a length of 18', function() {
		assert(detectNetwork('622338748939282023') === 'China UnionPay');
	});

	it('has a prefix of 622339 and a length of 18', function() {
		assert(detectNetwork('622339797940164168') === 'China UnionPay');
	});

	it('has a prefix of 622340 and a length of 18', function() {
		assert(detectNetwork('622340551982249256') === 'China UnionPay');
	});

	it('has a prefix of 622341 and a length of 18', function() {
		assert(detectNetwork('622341385157051565') === 'China UnionPay');
	});

	it('has a prefix of 622342 and a length of 18', function() {
		assert(detectNetwork('622342659759416356') === 'China UnionPay');
	});

	it('has a prefix of 622343 and a length of 18', function() {
		assert(detectNetwork('622343725567469012') === 'China UnionPay');
	});

	it('has a prefix of 622344 and a length of 18', function() {
		assert(detectNetwork('622344290969381916') === 'China UnionPay');
	});

	it('has a prefix of 622345 and a length of 18', function() {
		assert(detectNetwork('622345141639674651') === 'China UnionPay');
	});

	it('has a prefix of 622346 and a length of 18', function() {
		assert(detectNetwork('622346008209430829') === 'China UnionPay');
	});

	it('has a prefix of 622347 and a length of 18', function() {
		assert(detectNetwork('622347846809858610') === 'China UnionPay');
	});

	it('has a prefix of 622348 and a length of 18', function() {
		assert(detectNetwork('622348931472455937') === 'China UnionPay');
	});

	it('has a prefix of 622349 and a length of 18', function() {
		assert(detectNetwork('622349795320396474') === 'China UnionPay');
	});

	it('has a prefix of 622350 and a length of 18', function() {
		assert(detectNetwork('622350145654974447') === 'China UnionPay');
	});

	it('has a prefix of 622351 and a length of 18', function() {
		assert(detectNetwork('622351576001459153') === 'China UnionPay');
	});

	it('has a prefix of 622352 and a length of 18', function() {
		assert(detectNetwork('622352173147561792') === 'China UnionPay');
	});

	it('has a prefix of 622353 and a length of 18', function() {
		assert(detectNetwork('622353549929478391') === 'China UnionPay');
	});

	it('has a prefix of 622354 and a length of 18', function() {
		assert(detectNetwork('622354972019742588') === 'China UnionPay');
	});

	it('has a prefix of 622355 and a length of 18', function() {
		assert(detectNetwork('622355709500459104') === 'China UnionPay');
	});

	it('has a prefix of 622356 and a length of 18', function() {
		assert(detectNetwork('622356896819450263') === 'China UnionPay');
	});

	it('has a prefix of 622357 and a length of 18', function() {
		assert(detectNetwork('622357963626383779') === 'China UnionPay');
	});

	it('has a prefix of 622358 and a length of 18', function() {
		assert(detectNetwork('622358825283021359') === 'China UnionPay');
	});

	it('has a prefix of 622359 and a length of 18', function() {
		assert(detectNetwork('622359471314736878') === 'China UnionPay');
	});

	it('has a prefix of 622360 and a length of 18', function() {
		assert(detectNetwork('622360756834034682') === 'China UnionPay');
	});

	it('has a prefix of 622361 and a length of 18', function() {
		assert(detectNetwork('622361017300718331') === 'China UnionPay');
	});

	it('has a prefix of 622362 and a length of 18', function() {
		assert(detectNetwork('622362930856397791') === 'China UnionPay');
	});

	it('has a prefix of 622363 and a length of 18', function() {
		assert(detectNetwork('622363804657537406') === 'China UnionPay');
	});

	it('has a prefix of 622364 and a length of 18', function() {
		assert(detectNetwork('622364942730921330') === 'China UnionPay');
	});

	it('has a prefix of 622365 and a length of 18', function() {
		assert(detectNetwork('622365770897664076') === 'China UnionPay');
	});

	it('has a prefix of 622366 and a length of 18', function() {
		assert(detectNetwork('622366601798523793') === 'China UnionPay');
	});

	it('has a prefix of 622367 and a length of 18', function() {
		assert(detectNetwork('622367150759802731') === 'China UnionPay');
	});

	it('has a prefix of 622368 and a length of 18', function() {
		assert(detectNetwork('622368608615673746') === 'China UnionPay');
	});

	it('has a prefix of 622369 and a length of 18', function() {
		assert(detectNetwork('622369670054258823') === 'China UnionPay');
	});

	it('has a prefix of 622370 and a length of 18', function() {
		assert(detectNetwork('622370830259748600') === 'China UnionPay');
	});

	it('has a prefix of 622371 and a length of 18', function() {
		assert(detectNetwork('622371875833569218') === 'China UnionPay');
	});

	it('has a prefix of 622372 and a length of 18', function() {
		assert(detectNetwork('622372985382217010') === 'China UnionPay');
	});

	it('has a prefix of 622373 and a length of 18', function() {
		assert(detectNetwork('622373380286669199') === 'China UnionPay');
	});

	it('has a prefix of 622374 and a length of 18', function() {
		assert(detectNetwork('622374005099142628') === 'China UnionPay');
	});

	it('has a prefix of 622375 and a length of 18', function() {
		assert(detectNetwork('622375817977382769') === 'China UnionPay');
	});

	it('has a prefix of 622376 and a length of 18', function() {
		assert(detectNetwork('622376078441473999') === 'China UnionPay');
	});

	it('has a prefix of 622377 and a length of 18', function() {
		assert(detectNetwork('622377512178938244') === 'China UnionPay');
	});

	it('has a prefix of 622378 and a length of 18', function() {
		assert(detectNetwork('622378545781053737') === 'China UnionPay');
	});

	it('has a prefix of 622379 and a length of 18', function() {
		assert(detectNetwork('622379792584770050') === 'China UnionPay');
	});

	it('has a prefix of 622380 and a length of 18', function() {
		assert(detectNetwork('622380253152196321') === 'China UnionPay');
	});

	it('has a prefix of 622381 and a length of 18', function() {
		assert(detectNetwork('622381009640031031') === 'China UnionPay');
	});

	it('has a prefix of 622382 and a length of 18', function() {
		assert(detectNetwork('622382734937932634') === 'China UnionPay');
	});

	it('has a prefix of 622383 and a length of 18', function() {
		assert(detectNetwork('622383975886391396') === 'China UnionPay');
	});

	it('has a prefix of 622384 and a length of 18', function() {
		assert(detectNetwork('622384865212473141') === 'China UnionPay');
	});

	it('has a prefix of 622385 and a length of 18', function() {
		assert(detectNetwork('622385570511676772') === 'China UnionPay');
	});

	it('has a prefix of 622386 and a length of 18', function() {
		assert(detectNetwork('622386134755230765') === 'China UnionPay');
	});

	it('has a prefix of 622387 and a length of 18', function() {
		assert(detectNetwork('622387515469578816') === 'China UnionPay');
	});

	it('has a prefix of 622388 and a length of 18', function() {
		assert(detectNetwork('622388449051931474') === 'China UnionPay');
	});

	it('has a prefix of 622389 and a length of 18', function() {
		assert(detectNetwork('622389047409276446') === 'China UnionPay');
	});

	it('has a prefix of 622390 and a length of 18', function() {
		assert(detectNetwork('622390395092349954') === 'China UnionPay');
	});

	it('has a prefix of 622391 and a length of 18', function() {
		assert(detectNetwork('622391333097277339') === 'China UnionPay');
	});

	it('has a prefix of 622392 and a length of 18', function() {
		assert(detectNetwork('622392395818938635') === 'China UnionPay');
	});

	it('has a prefix of 622393 and a length of 18', function() {
		assert(detectNetwork('622393586063232779') === 'China UnionPay');
	});

	it('has a prefix of 622394 and a length of 18', function() {
		assert(detectNetwork('622394167399992608') === 'China UnionPay');
	});

	it('has a prefix of 622395 and a length of 18', function() {
		assert(detectNetwork('622395574392716622') === 'China UnionPay');
	});

	it('has a prefix of 622396 and a length of 18', function() {
		assert(detectNetwork('622396949837132447') === 'China UnionPay');
	});

	it('has a prefix of 622397 and a length of 18', function() {
		assert(detectNetwork('622397013872385633') === 'China UnionPay');
	});

	it('has a prefix of 622398 and a length of 18', function() {
		assert(detectNetwork('622398779980233530') === 'China UnionPay');
	});

	it('has a prefix of 622399 and a length of 18', function() {
		assert(detectNetwork('622399927938291043') === 'China UnionPay');
	});

	it('has a prefix of 622400 and a length of 18', function() {
		assert(detectNetwork('622400273905936212') === 'China UnionPay');
	});

	it('has a prefix of 622401 and a length of 18', function() {
		assert(detectNetwork('622401106011742519') === 'China UnionPay');
	});

	it('has a prefix of 622402 and a length of 18', function() {
		assert(detectNetwork('622402635509423420') === 'China UnionPay');
	});

	it('has a prefix of 622403 and a length of 18', function() {
		assert(detectNetwork('622403062889045600') === 'China UnionPay');
	});

	it('has a prefix of 622404 and a length of 18', function() {
		assert(detectNetwork('622404269395838096') === 'China UnionPay');
	});

	it('has a prefix of 622405 and a length of 18', function() {
		assert(detectNetwork('622405594624963269') === 'China UnionPay');
	});

	it('has a prefix of 622406 and a length of 18', function() {
		assert(detectNetwork('622406275631199764') === 'China UnionPay');
	});

	it('has a prefix of 622407 and a length of 18', function() {
		assert(detectNetwork('622407271942928992') === 'China UnionPay');
	});

	it('has a prefix of 622408 and a length of 18', function() {
		assert(detectNetwork('622408559500285377') === 'China UnionPay');
	});

	it('has a prefix of 622409 and a length of 18', function() {
		assert(detectNetwork('622409256314927880') === 'China UnionPay');
	});

	it('has a prefix of 622410 and a length of 18', function() {
		assert(detectNetwork('622410689262933852') === 'China UnionPay');
	});

	it('has a prefix of 622411 and a length of 18', function() {
		assert(detectNetwork('622411351814758883') === 'China UnionPay');
	});

	it('has a prefix of 622412 and a length of 18', function() {
		assert(detectNetwork('622412164281756244') === 'China UnionPay');
	});

	it('has a prefix of 622413 and a length of 18', function() {
		assert(detectNetwork('622413433618738127') === 'China UnionPay');
	});

	it('has a prefix of 622414 and a length of 18', function() {
		assert(detectNetwork('622414006851183303') === 'China UnionPay');
	});

	it('has a prefix of 622415 and a length of 18', function() {
		assert(detectNetwork('622415779431333371') === 'China UnionPay');
	});

	it('has a prefix of 622416 and a length of 18', function() {
		assert(detectNetwork('622416722004582750') === 'China UnionPay');
	});

	it('has a prefix of 622417 and a length of 18', function() {
		assert(detectNetwork('622417887743357241') === 'China UnionPay');
	});

	it('has a prefix of 622418 and a length of 18', function() {
		assert(detectNetwork('622418346903243866') === 'China UnionPay');
	});

	it('has a prefix of 622419 and a length of 18', function() {
		assert(detectNetwork('622419503077196320') === 'China UnionPay');
	});

	it('has a prefix of 622420 and a length of 18', function() {
		assert(detectNetwork('622420285065152300') === 'China UnionPay');
	});

	it('has a prefix of 622421 and a length of 18', function() {
		assert(detectNetwork('622421543172050260') === 'China UnionPay');
	});

	it('has a prefix of 622422 and a length of 18', function() {
		assert(detectNetwork('622422312709689756') === 'China UnionPay');
	});

	it('has a prefix of 622423 and a length of 18', function() {
		assert(detectNetwork('622423395150030391') === 'China UnionPay');
	});

	it('has a prefix of 622424 and a length of 18', function() {
		assert(detectNetwork('622424729330949599') === 'China UnionPay');
	});

	it('has a prefix of 622425 and a length of 18', function() {
		assert(detectNetwork('622425418520019045') === 'China UnionPay');
	});

	it('has a prefix of 622426 and a length of 18', function() {
		assert(detectNetwork('622426387108027267') === 'China UnionPay');
	});

	it('has a prefix of 622427 and a length of 18', function() {
		assert(detectNetwork('622427052391325332') === 'China UnionPay');
	});

	it('has a prefix of 622428 and a length of 18', function() {
		assert(detectNetwork('622428233958804961') === 'China UnionPay');
	});

	it('has a prefix of 622429 and a length of 18', function() {
		assert(detectNetwork('622429233914767124') === 'China UnionPay');
	});

	it('has a prefix of 622430 and a length of 18', function() {
		assert(detectNetwork('622430472288657692') === 'China UnionPay');
	});

	it('has a prefix of 622431 and a length of 18', function() {
		assert(detectNetwork('622431410696411730') === 'China UnionPay');
	});

	it('has a prefix of 622432 and a length of 18', function() {
		assert(detectNetwork('622432431372621541') === 'China UnionPay');
	});

	it('has a prefix of 622433 and a length of 18', function() {
		assert(detectNetwork('622433683066196207') === 'China UnionPay');
	});

	it('has a prefix of 622434 and a length of 18', function() {
		assert(detectNetwork('622434474268551843') === 'China UnionPay');
	});

	it('has a prefix of 622435 and a length of 18', function() {
		assert(detectNetwork('622435504944886047') === 'China UnionPay');
	});

	it('has a prefix of 622436 and a length of 18', function() {
		assert(detectNetwork('622436250971855944') === 'China UnionPay');
	});

	it('has a prefix of 622437 and a length of 18', function() {
		assert(detectNetwork('622437366051571022') === 'China UnionPay');
	});

	it('has a prefix of 622438 and a length of 18', function() {
		assert(detectNetwork('622438947597535133') === 'China UnionPay');
	});

	it('has a prefix of 622439 and a length of 18', function() {
		assert(detectNetwork('622439962191455372') === 'China UnionPay');
	});

	it('has a prefix of 622440 and a length of 18', function() {
		assert(detectNetwork('622440375525125227') === 'China UnionPay');
	});

	it('has a prefix of 622441 and a length of 18', function() {
		assert(detectNetwork('622441107310964031') === 'China UnionPay');
	});

	it('has a prefix of 622442 and a length of 18', function() {
		assert(detectNetwork('622442873372237718') === 'China UnionPay');
	});

	it('has a prefix of 622443 and a length of 18', function() {
		assert(detectNetwork('622443309369307632') === 'China UnionPay');
	});

	it('has a prefix of 622444 and a length of 18', function() {
		assert(detectNetwork('622444423290589739') === 'China UnionPay');
	});

	it('has a prefix of 622445 and a length of 18', function() {
		assert(detectNetwork('622445011192497274') === 'China UnionPay');
	});

	it('has a prefix of 622446 and a length of 18', function() {
		assert(detectNetwork('622446497400705507') === 'China UnionPay');
	});

	it('has a prefix of 622447 and a length of 18', function() {
		assert(detectNetwork('622447754025267623') === 'China UnionPay');
	});

	it('has a prefix of 622448 and a length of 18', function() {
		assert(detectNetwork('622448329487190201') === 'China UnionPay');
	});

	it('has a prefix of 622449 and a length of 18', function() {
		assert(detectNetwork('622449494683756345') === 'China UnionPay');
	});

	it('has a prefix of 622450 and a length of 18', function() {
		assert(detectNetwork('622450828050322103') === 'China UnionPay');
	});

	it('has a prefix of 622451 and a length of 18', function() {
		assert(detectNetwork('622451270516567062') === 'China UnionPay');
	});

	it('has a prefix of 622452 and a length of 18', function() {
		assert(detectNetwork('622452932315725024') === 'China UnionPay');
	});

	it('has a prefix of 622453 and a length of 18', function() {
		assert(detectNetwork('622453204584643872') === 'China UnionPay');
	});

	it('has a prefix of 622454 and a length of 18', function() {
		assert(detectNetwork('622454836544513565') === 'China UnionPay');
	});

	it('has a prefix of 622455 and a length of 18', function() {
		assert(detectNetwork('622455097511727365') === 'China UnionPay');
	});

	it('has a prefix of 622456 and a length of 18', function() {
		assert(detectNetwork('622456175267659263') === 'China UnionPay');
	});

	it('has a prefix of 622457 and a length of 18', function() {
		assert(detectNetwork('622457613032818524') === 'China UnionPay');
	});

	it('has a prefix of 622458 and a length of 18', function() {
		assert(detectNetwork('622458740168541096') === 'China UnionPay');
	});

	it('has a prefix of 622459 and a length of 18', function() {
		assert(detectNetwork('622459867860617224') === 'China UnionPay');
	});

	it('has a prefix of 622460 and a length of 18', function() {
		assert(detectNetwork('622460912755105292') === 'China UnionPay');
	});

	it('has a prefix of 622461 and a length of 18', function() {
		assert(detectNetwork('622461546585002924') === 'China UnionPay');
	});

	it('has a prefix of 622462 and a length of 18', function() {
		assert(detectNetwork('622462816419697032') === 'China UnionPay');
	});

	it('has a prefix of 622463 and a length of 18', function() {
		assert(detectNetwork('622463024902819167') === 'China UnionPay');
	});

	it('has a prefix of 622464 and a length of 18', function() {
		assert(detectNetwork('622464970814123134') === 'China UnionPay');
	});

	it('has a prefix of 622465 and a length of 18', function() {
		assert(detectNetwork('622465738500955310') === 'China UnionPay');
	});

	it('has a prefix of 622466 and a length of 18', function() {
		assert(detectNetwork('622466876604758493') === 'China UnionPay');
	});

	it('has a prefix of 622467 and a length of 18', function() {
		assert(detectNetwork('622467734348905590') === 'China UnionPay');
	});

	it('has a prefix of 622468 and a length of 18', function() {
		assert(detectNetwork('622468761882951296') === 'China UnionPay');
	});

	it('has a prefix of 622469 and a length of 18', function() {
		assert(detectNetwork('622469589244030077') === 'China UnionPay');
	});

	it('has a prefix of 622470 and a length of 18', function() {
		assert(detectNetwork('622470641372256923') === 'China UnionPay');
	});

	it('has a prefix of 622471 and a length of 18', function() {
		assert(detectNetwork('622471324514277565') === 'China UnionPay');
	});

	it('has a prefix of 622472 and a length of 18', function() {
		assert(detectNetwork('622472696116879753') === 'China UnionPay');
	});

	it('has a prefix of 622473 and a length of 18', function() {
		assert(detectNetwork('622473228141549380') === 'China UnionPay');
	});

	it('has a prefix of 622474 and a length of 18', function() {
		assert(detectNetwork('622474270685853320') === 'China UnionPay');
	});

	it('has a prefix of 622475 and a length of 18', function() {
		assert(detectNetwork('622475028673344960') === 'China UnionPay');
	});

	it('has a prefix of 622476 and a length of 18', function() {
		assert(detectNetwork('622476756788161646') === 'China UnionPay');
	});

	it('has a prefix of 622477 and a length of 18', function() {
		assert(detectNetwork('622477906973110428') === 'China UnionPay');
	});

	it('has a prefix of 622478 and a length of 18', function() {
		assert(detectNetwork('622478309544053466') === 'China UnionPay');
	});

	it('has a prefix of 622479 and a length of 18', function() {
		assert(detectNetwork('622479560060370994') === 'China UnionPay');
	});

	it('has a prefix of 622480 and a length of 18', function() {
		assert(detectNetwork('622480345154235935') === 'China UnionPay');
	});

	it('has a prefix of 622481 and a length of 18', function() {
		assert(detectNetwork('622481491087864708') === 'China UnionPay');
	});

	it('has a prefix of 622482 and a length of 18', function() {
		assert(detectNetwork('622482270520738854') === 'China UnionPay');
	});

	it('has a prefix of 622483 and a length of 18', function() {
		assert(detectNetwork('622483541860840282') === 'China UnionPay');
	});

	it('has a prefix of 622484 and a length of 18', function() {
		assert(detectNetwork('622484545350403160') === 'China UnionPay');
	});

	it('has a prefix of 622485 and a length of 18', function() {
		assert(detectNetwork('622485311072035942') === 'China UnionPay');
	});

	it('has a prefix of 622486 and a length of 18', function() {
		assert(detectNetwork('622486571105813559') === 'China UnionPay');
	});

	it('has a prefix of 622487 and a length of 18', function() {
		assert(detectNetwork('622487735194326082') === 'China UnionPay');
	});

	it('has a prefix of 622488 and a length of 18', function() {
		assert(detectNetwork('622488042886742356') === 'China UnionPay');
	});

	it('has a prefix of 622489 and a length of 18', function() {
		assert(detectNetwork('622489454858737228') === 'China UnionPay');
	});

	it('has a prefix of 622490 and a length of 18', function() {
		assert(detectNetwork('622490552488521020') === 'China UnionPay');
	});

	it('has a prefix of 622491 and a length of 18', function() {
		assert(detectNetwork('622491155565009229') === 'China UnionPay');
	});

	it('has a prefix of 622492 and a length of 18', function() {
		assert(detectNetwork('622492051696067916') === 'China UnionPay');
	});

	it('has a prefix of 622493 and a length of 18', function() {
		assert(detectNetwork('622493534702723595') === 'China UnionPay');
	});

	it('has a prefix of 622494 and a length of 18', function() {
		assert(detectNetwork('622494186501901263') === 'China UnionPay');
	});

	it('has a prefix of 622495 and a length of 18', function() {
		assert(detectNetwork('622495529100008118') === 'China UnionPay');
	});

	it('has a prefix of 622496 and a length of 18', function() {
		assert(detectNetwork('622496881374681656') === 'China UnionPay');
	});

	it('has a prefix of 622497 and a length of 18', function() {
		assert(detectNetwork('622497463069661845') === 'China UnionPay');
	});

	it('has a prefix of 622498 and a length of 18', function() {
		assert(detectNetwork('622498099387559606') === 'China UnionPay');
	});

	it('has a prefix of 622499 and a length of 18', function() {
		assert(detectNetwork('622499215733835355') === 'China UnionPay');
	});

	it('has a prefix of 622500 and a length of 18', function() {
		assert(detectNetwork('622500013380418333') === 'China UnionPay');
	});

	it('has a prefix of 622501 and a length of 18', function() {
		assert(detectNetwork('622501546267988173') === 'China UnionPay');
	});

	it('has a prefix of 622502 and a length of 18', function() {
		assert(detectNetwork('622502571528408414') === 'China UnionPay');
	});

	it('has a prefix of 622503 and a length of 18', function() {
		assert(detectNetwork('622503341868922370') === 'China UnionPay');
	});

	it('has a prefix of 622504 and a length of 18', function() {
		assert(detectNetwork('622504190319419601') === 'China UnionPay');
	});

	it('has a prefix of 622505 and a length of 18', function() {
		assert(detectNetwork('622505218397957601') === 'China UnionPay');
	});

	it('has a prefix of 622506 and a length of 18', function() {
		assert(detectNetwork('622506624152399832') === 'China UnionPay');
	});

	it('has a prefix of 622507 and a length of 18', function() {
		assert(detectNetwork('622507532613041742') === 'China UnionPay');
	});

	it('has a prefix of 622508 and a length of 18', function() {
		assert(detectNetwork('622508602236969154') === 'China UnionPay');
	});

	it('has a prefix of 622509 and a length of 18', function() {
		assert(detectNetwork('622509833570053866') === 'China UnionPay');
	});

	it('has a prefix of 622510 and a length of 18', function() {
		assert(detectNetwork('622510513516863508') === 'China UnionPay');
	});

	it('has a prefix of 622511 and a length of 18', function() {
		assert(detectNetwork('622511473805543783') === 'China UnionPay');
	});

	it('has a prefix of 622512 and a length of 18', function() {
		assert(detectNetwork('622512008602275627') === 'China UnionPay');
	});

	it('has a prefix of 622513 and a length of 18', function() {
		assert(detectNetwork('622513589957500652') === 'China UnionPay');
	});

	it('has a prefix of 622514 and a length of 18', function() {
		assert(detectNetwork('622514201169378543') === 'China UnionPay');
	});

	it('has a prefix of 622515 and a length of 18', function() {
		assert(detectNetwork('622515274576691485') === 'China UnionPay');
	});

	it('has a prefix of 622516 and a length of 18', function() {
		assert(detectNetwork('622516983116921162') === 'China UnionPay');
	});

	it('has a prefix of 622517 and a length of 18', function() {
		assert(detectNetwork('622517369118344853') === 'China UnionPay');
	});

	it('has a prefix of 622518 and a length of 18', function() {
		assert(detectNetwork('622518862913462495') === 'China UnionPay');
	});

	it('has a prefix of 622519 and a length of 18', function() {
		assert(detectNetwork('622519919656572994') === 'China UnionPay');
	});

	it('has a prefix of 622520 and a length of 18', function() {
		assert(detectNetwork('622520195352742644') === 'China UnionPay');
	});

	it('has a prefix of 622521 and a length of 18', function() {
		assert(detectNetwork('622521190008103143') === 'China UnionPay');
	});

	it('has a prefix of 622522 and a length of 18', function() {
		assert(detectNetwork('622522131617978280') === 'China UnionPay');
	});

	it('has a prefix of 622523 and a length of 18', function() {
		assert(detectNetwork('622523665460478722') === 'China UnionPay');
	});

	it('has a prefix of 622524 and a length of 18', function() {
		assert(detectNetwork('622524012984340901') === 'China UnionPay');
	});

	it('has a prefix of 622525 and a length of 18', function() {
		assert(detectNetwork('622525082607278686') === 'China UnionPay');
	});

	it('has a prefix of 622526 and a length of 18', function() {
		assert(detectNetwork('622526702185530389') === 'China UnionPay');
	});

	it('has a prefix of 622527 and a length of 18', function() {
		assert(detectNetwork('622527462681531300') === 'China UnionPay');
	});

	it('has a prefix of 622528 and a length of 18', function() {
		assert(detectNetwork('622528571835983671') === 'China UnionPay');
	});

	it('has a prefix of 622529 and a length of 18', function() {
		assert(detectNetwork('622529341238062985') === 'China UnionPay');
	});

	it('has a prefix of 622530 and a length of 18', function() {
		assert(detectNetwork('622530164791744524') === 'China UnionPay');
	});

	it('has a prefix of 622531 and a length of 18', function() {
		assert(detectNetwork('622531316985321619') === 'China UnionPay');
	});

	it('has a prefix of 622532 and a length of 18', function() {
		assert(detectNetwork('622532305458645586') === 'China UnionPay');
	});

	it('has a prefix of 622533 and a length of 18', function() {
		assert(detectNetwork('622533418938644885') === 'China UnionPay');
	});

	it('has a prefix of 622534 and a length of 18', function() {
		assert(detectNetwork('622534325765641602') === 'China UnionPay');
	});

	it('has a prefix of 622535 and a length of 18', function() {
		assert(detectNetwork('622535777296478629') === 'China UnionPay');
	});

	it('has a prefix of 622536 and a length of 18', function() {
		assert(detectNetwork('622536212007912569') === 'China UnionPay');
	});

	it('has a prefix of 622537 and a length of 18', function() {
		assert(detectNetwork('622537491439164044') === 'China UnionPay');
	});

	it('has a prefix of 622538 and a length of 18', function() {
		assert(detectNetwork('622538583982867925') === 'China UnionPay');
	});

	it('has a prefix of 622539 and a length of 18', function() {
		assert(detectNetwork('622539159099072158') === 'China UnionPay');
	});

	it('has a prefix of 622540 and a length of 18', function() {
		assert(detectNetwork('622540884419946886') === 'China UnionPay');
	});

	it('has a prefix of 622541 and a length of 18', function() {
		assert(detectNetwork('622541051299082342') === 'China UnionPay');
	});

	it('has a prefix of 622542 and a length of 18', function() {
		assert(detectNetwork('622542486059739425') === 'China UnionPay');
	});

	it('has a prefix of 622543 and a length of 18', function() {
		assert(detectNetwork('622543726682270140') === 'China UnionPay');
	});

	it('has a prefix of 622544 and a length of 18', function() {
		assert(detectNetwork('622544996895918604') === 'China UnionPay');
	});

	it('has a prefix of 622545 and a length of 18', function() {
		assert(detectNetwork('622545368816726917') === 'China UnionPay');
	});

	it('has a prefix of 622546 and a length of 18', function() {
		assert(detectNetwork('622546728108487756') === 'China UnionPay');
	});

	it('has a prefix of 622547 and a length of 18', function() {
		assert(detectNetwork('622547388487739312') === 'China UnionPay');
	});

	it('has a prefix of 622548 and a length of 18', function() {
		assert(detectNetwork('622548906557370486') === 'China UnionPay');
	});

	it('has a prefix of 622549 and a length of 18', function() {
		assert(detectNetwork('622549416675073520') === 'China UnionPay');
	});

	it('has a prefix of 622550 and a length of 18', function() {
		assert(detectNetwork('622550818663392899') === 'China UnionPay');
	});

	it('has a prefix of 622551 and a length of 18', function() {
		assert(detectNetwork('622551171363665967') === 'China UnionPay');
	});

	it('has a prefix of 622552 and a length of 18', function() {
		assert(detectNetwork('622552687604313798') === 'China UnionPay');
	});

	it('has a prefix of 622553 and a length of 18', function() {
		assert(detectNetwork('622553359654190445') === 'China UnionPay');
	});

	it('has a prefix of 622554 and a length of 18', function() {
		assert(detectNetwork('622554329184383319') === 'China UnionPay');
	});

	it('has a prefix of 622555 and a length of 18', function() {
		assert(detectNetwork('622555794109817221') === 'China UnionPay');
	});

	it('has a prefix of 622556 and a length of 18', function() {
		assert(detectNetwork('622556822052415586') === 'China UnionPay');
	});

	it('has a prefix of 622557 and a length of 18', function() {
		assert(detectNetwork('622557015178112328') === 'China UnionPay');
	});

	it('has a prefix of 622558 and a length of 18', function() {
		assert(detectNetwork('622558712739666720') === 'China UnionPay');
	});

	it('has a prefix of 622559 and a length of 18', function() {
		assert(detectNetwork('622559077070038227') === 'China UnionPay');
	});

	it('has a prefix of 622560 and a length of 18', function() {
		assert(detectNetwork('622560892464288671') === 'China UnionPay');
	});

	it('has a prefix of 622561 and a length of 18', function() {
		assert(detectNetwork('622561138601020081') === 'China UnionPay');
	});

	it('has a prefix of 622562 and a length of 18', function() {
		assert(detectNetwork('622562033320484104') === 'China UnionPay');
	});

	it('has a prefix of 622563 and a length of 18', function() {
		assert(detectNetwork('622563096790190878') === 'China UnionPay');
	});

	it('has a prefix of 622564 and a length of 18', function() {
		assert(detectNetwork('622564521231434854') === 'China UnionPay');
	});

	it('has a prefix of 622565 and a length of 18', function() {
		assert(detectNetwork('622565355400856617') === 'China UnionPay');
	});

	it('has a prefix of 622566 and a length of 18', function() {
		assert(detectNetwork('622566155481273910') === 'China UnionPay');
	});

	it('has a prefix of 622567 and a length of 18', function() {
		assert(detectNetwork('622567934453762979') === 'China UnionPay');
	});

	it('has a prefix of 622568 and a length of 18', function() {
		assert(detectNetwork('622568205489412556') === 'China UnionPay');
	});

	it('has a prefix of 622569 and a length of 18', function() {
		assert(detectNetwork('622569132427412232') === 'China UnionPay');
	});

	it('has a prefix of 622570 and a length of 18', function() {
		assert(detectNetwork('622570977362125900') === 'China UnionPay');
	});

	it('has a prefix of 622571 and a length of 18', function() {
		assert(detectNetwork('622571182250068748') === 'China UnionPay');
	});

	it('has a prefix of 622572 and a length of 18', function() {
		assert(detectNetwork('622572788868348034') === 'China UnionPay');
	});

	it('has a prefix of 622573 and a length of 18', function() {
		assert(detectNetwork('622573534097643639') === 'China UnionPay');
	});

	it('has a prefix of 622574 and a length of 18', function() {
		assert(detectNetwork('622574708762285754') === 'China UnionPay');
	});

	it('has a prefix of 622575 and a length of 18', function() {
		assert(detectNetwork('622575176914744140') === 'China UnionPay');
	});

	it('has a prefix of 622576 and a length of 18', function() {
		assert(detectNetwork('622576758923684312') === 'China UnionPay');
	});

	it('has a prefix of 622577 and a length of 18', function() {
		assert(detectNetwork('622577496638208790') === 'China UnionPay');
	});

	it('has a prefix of 622578 and a length of 18', function() {
		assert(detectNetwork('622578729057937027') === 'China UnionPay');
	});

	it('has a prefix of 622579 and a length of 18', function() {
		assert(detectNetwork('622579016150506916') === 'China UnionPay');
	});

	it('has a prefix of 622580 and a length of 18', function() {
		assert(detectNetwork('622580933817296194') === 'China UnionPay');
	});

	it('has a prefix of 622581 and a length of 18', function() {
		assert(detectNetwork('622581554998082149') === 'China UnionPay');
	});

	it('has a prefix of 622582 and a length of 18', function() {
		assert(detectNetwork('622582486632987325') === 'China UnionPay');
	});

	it('has a prefix of 622583 and a length of 18', function() {
		assert(detectNetwork('622583099162719933') === 'China UnionPay');
	});

	it('has a prefix of 622584 and a length of 18', function() {
		assert(detectNetwork('622584688495010303') === 'China UnionPay');
	});

	it('has a prefix of 622585 and a length of 18', function() {
		assert(detectNetwork('622585951229611890') === 'China UnionPay');
	});

	it('has a prefix of 622586 and a length of 18', function() {
		assert(detectNetwork('622586476507203453') === 'China UnionPay');
	});

	it('has a prefix of 622587 and a length of 18', function() {
		assert(detectNetwork('622587137810081195') === 'China UnionPay');
	});

	it('has a prefix of 622588 and a length of 18', function() {
		assert(detectNetwork('622588312035921876') === 'China UnionPay');
	});

	it('has a prefix of 622589 and a length of 18', function() {
		assert(detectNetwork('622589620045233109') === 'China UnionPay');
	});

	it('has a prefix of 622590 and a length of 18', function() {
		assert(detectNetwork('622590686648131182') === 'China UnionPay');
	});

	it('has a prefix of 622591 and a length of 18', function() {
		assert(detectNetwork('622591808891225288') === 'China UnionPay');
	});

	it('has a prefix of 622592 and a length of 18', function() {
		assert(detectNetwork('622592538782313159') === 'China UnionPay');
	});

	it('has a prefix of 622593 and a length of 18', function() {
		assert(detectNetwork('622593549959644767') === 'China UnionPay');
	});

	it('has a prefix of 622594 and a length of 18', function() {
		assert(detectNetwork('622594406994075055') === 'China UnionPay');
	});

	it('has a prefix of 622595 and a length of 18', function() {
		assert(detectNetwork('622595025328208623') === 'China UnionPay');
	});

	it('has a prefix of 622596 and a length of 18', function() {
		assert(detectNetwork('622596279179299009') === 'China UnionPay');
	});

	it('has a prefix of 622597 and a length of 18', function() {
		assert(detectNetwork('622597003280131702') === 'China UnionPay');
	});

	it('has a prefix of 622598 and a length of 18', function() {
		assert(detectNetwork('622598464221891938') === 'China UnionPay');
	});

	it('has a prefix of 622599 and a length of 18', function() {
		assert(detectNetwork('622599428115536006') === 'China UnionPay');
	});

	it('has a prefix of 622600 and a length of 18', function() {
		assert(detectNetwork('622600862508892783') === 'China UnionPay');
	});

	it('has a prefix of 622601 and a length of 18', function() {
		assert(detectNetwork('622601347128934255') === 'China UnionPay');
	});

	it('has a prefix of 622602 and a length of 18', function() {
		assert(detectNetwork('622602881162871458') === 'China UnionPay');
	});

	it('has a prefix of 622603 and a length of 18', function() {
		assert(detectNetwork('622603732903666151') === 'China UnionPay');
	});

	it('has a prefix of 622604 and a length of 18', function() {
		assert(detectNetwork('622604364995243199') === 'China UnionPay');
	});

	it('has a prefix of 622605 and a length of 18', function() {
		assert(detectNetwork('622605411774954472') === 'China UnionPay');
	});

	it('has a prefix of 622606 and a length of 18', function() {
		assert(detectNetwork('622606753822181867') === 'China UnionPay');
	});

	it('has a prefix of 622607 and a length of 18', function() {
		assert(detectNetwork('622607153970608556') === 'China UnionPay');
	});

	it('has a prefix of 622608 and a length of 18', function() {
		assert(detectNetwork('622608913778168899') === 'China UnionPay');
	});

	it('has a prefix of 622609 and a length of 18', function() {
		assert(detectNetwork('622609751238520194') === 'China UnionPay');
	});

	it('has a prefix of 622610 and a length of 18', function() {
		assert(detectNetwork('622610229198160609') === 'China UnionPay');
	});

	it('has a prefix of 622611 and a length of 18', function() {
		assert(detectNetwork('622611835989603862') === 'China UnionPay');
	});

	it('has a prefix of 622612 and a length of 18', function() {
		assert(detectNetwork('622612033738807063') === 'China UnionPay');
	});

	it('has a prefix of 622613 and a length of 18', function() {
		assert(detectNetwork('622613112021179709') === 'China UnionPay');
	});

	it('has a prefix of 622614 and a length of 18', function() {
		assert(detectNetwork('622614367947903980') === 'China UnionPay');
	});

	it('has a prefix of 622615 and a length of 18', function() {
		assert(detectNetwork('622615301758741706') === 'China UnionPay');
	});

	it('has a prefix of 622616 and a length of 18', function() {
		assert(detectNetwork('622616000182581522') === 'China UnionPay');
	});

	it('has a prefix of 622617 and a length of 18', function() {
		assert(detectNetwork('622617764913258186') === 'China UnionPay');
	});

	it('has a prefix of 622618 and a length of 18', function() {
		assert(detectNetwork('622618092515806233') === 'China UnionPay');
	});

	it('has a prefix of 622619 and a length of 18', function() {
		assert(detectNetwork('622619394432622808') === 'China UnionPay');
	});

	it('has a prefix of 622620 and a length of 18', function() {
		assert(detectNetwork('622620352908570823') === 'China UnionPay');
	});

	it('has a prefix of 622621 and a length of 18', function() {
		assert(detectNetwork('622621924685159154') === 'China UnionPay');
	});

	it('has a prefix of 622622 and a length of 18', function() {
		assert(detectNetwork('622622931648855608') === 'China UnionPay');
	});

	it('has a prefix of 622623 and a length of 18', function() {
		assert(detectNetwork('622623913754913364') === 'China UnionPay');
	});

	it('has a prefix of 622624 and a length of 18', function() {
		assert(detectNetwork('622624776792302832') === 'China UnionPay');
	});

	it('has a prefix of 622625 and a length of 18', function() {
		assert(detectNetwork('622625562067344074') === 'China UnionPay');
	});

	it('has a prefix of 622626 and a length of 18', function() {
		assert(detectNetwork('622626331755327787') === 'China UnionPay');
	});

	it('has a prefix of 622627 and a length of 18', function() {
		assert(detectNetwork('622627315467379890') === 'China UnionPay');
	});

	it('has a prefix of 622628 and a length of 18', function() {
		assert(detectNetwork('622628214896235755') === 'China UnionPay');
	});

	it('has a prefix of 622629 and a length of 18', function() {
		assert(detectNetwork('622629081515792382') === 'China UnionPay');
	});

	it('has a prefix of 622630 and a length of 18', function() {
		assert(detectNetwork('622630028098849816') === 'China UnionPay');
	});

	it('has a prefix of 622631 and a length of 18', function() {
		assert(detectNetwork('622631141834010554') === 'China UnionPay');
	});

	it('has a prefix of 622632 and a length of 18', function() {
		assert(detectNetwork('622632292004848701') === 'China UnionPay');
	});

	it('has a prefix of 622633 and a length of 18', function() {
		assert(detectNetwork('622633366004152378') === 'China UnionPay');
	});

	it('has a prefix of 622634 and a length of 18', function() {
		assert(detectNetwork('622634656944832615') === 'China UnionPay');
	});

	it('has a prefix of 622635 and a length of 18', function() {
		assert(detectNetwork('622635115704797903') === 'China UnionPay');
	});

	it('has a prefix of 622636 and a length of 18', function() {
		assert(detectNetwork('622636198843526835') === 'China UnionPay');
	});

	it('has a prefix of 622637 and a length of 18', function() {
		assert(detectNetwork('622637592265548573') === 'China UnionPay');
	});

	it('has a prefix of 622638 and a length of 18', function() {
		assert(detectNetwork('622638996548619279') === 'China UnionPay');
	});

	it('has a prefix of 622639 and a length of 18', function() {
		assert(detectNetwork('622639217145225346') === 'China UnionPay');
	});

	it('has a prefix of 622640 and a length of 18', function() {
		assert(detectNetwork('622640688617969433') === 'China UnionPay');
	});

	it('has a prefix of 622641 and a length of 18', function() {
		assert(detectNetwork('622641246919073050') === 'China UnionPay');
	});

	it('has a prefix of 622642 and a length of 18', function() {
		assert(detectNetwork('622642428286239387') === 'China UnionPay');
	});

	it('has a prefix of 622643 and a length of 18', function() {
		assert(detectNetwork('622643506252470425') === 'China UnionPay');
	});

	it('has a prefix of 622644 and a length of 18', function() {
		assert(detectNetwork('622644065866150879') === 'China UnionPay');
	});

	it('has a prefix of 622645 and a length of 18', function() {
		assert(detectNetwork('622645427816664555') === 'China UnionPay');
	});

	it('has a prefix of 622646 and a length of 18', function() {
		assert(detectNetwork('622646927508901830') === 'China UnionPay');
	});

	it('has a prefix of 622647 and a length of 18', function() {
		assert(detectNetwork('622647890493679340') === 'China UnionPay');
	});

	it('has a prefix of 622648 and a length of 18', function() {
		assert(detectNetwork('622648913258679458') === 'China UnionPay');
	});

	it('has a prefix of 622649 and a length of 18', function() {
		assert(detectNetwork('622649514109093274') === 'China UnionPay');
	});

	it('has a prefix of 622650 and a length of 18', function() {
		assert(detectNetwork('622650267636558594') === 'China UnionPay');
	});

	it('has a prefix of 622651 and a length of 18', function() {
		assert(detectNetwork('622651181945695177') === 'China UnionPay');
	});

	it('has a prefix of 622652 and a length of 18', function() {
		assert(detectNetwork('622652285443817777') === 'China UnionPay');
	});

	it('has a prefix of 622653 and a length of 18', function() {
		assert(detectNetwork('622653758090423271') === 'China UnionPay');
	});

	it('has a prefix of 622654 and a length of 18', function() {
		assert(detectNetwork('622654207555975697') === 'China UnionPay');
	});

	it('has a prefix of 622655 and a length of 18', function() {
		assert(detectNetwork('622655738324559532') === 'China UnionPay');
	});

	it('has a prefix of 622656 and a length of 18', function() {
		assert(detectNetwork('622656532149970864') === 'China UnionPay');
	});

	it('has a prefix of 622657 and a length of 18', function() {
		assert(detectNetwork('622657532128064427') === 'China UnionPay');
	});

	it('has a prefix of 622658 and a length of 18', function() {
		assert(detectNetwork('622658515880270780') === 'China UnionPay');
	});

	it('has a prefix of 622659 and a length of 18', function() {
		assert(detectNetwork('622659593671005376') === 'China UnionPay');
	});

	it('has a prefix of 622660 and a length of 18', function() {
		assert(detectNetwork('622660155045159283') === 'China UnionPay');
	});

	it('has a prefix of 622661 and a length of 18', function() {
		assert(detectNetwork('622661154344339325') === 'China UnionPay');
	});

	it('has a prefix of 622662 and a length of 18', function() {
		assert(detectNetwork('622662634977103669') === 'China UnionPay');
	});

	it('has a prefix of 622663 and a length of 18', function() {
		assert(detectNetwork('622663142718860379') === 'China UnionPay');
	});

	it('has a prefix of 622664 and a length of 18', function() {
		assert(detectNetwork('622664120049113382') === 'China UnionPay');
	});

	it('has a prefix of 622665 and a length of 18', function() {
		assert(detectNetwork('622665751559688443') === 'China UnionPay');
	});

	it('has a prefix of 622666 and a length of 18', function() {
		assert(detectNetwork('622666312043958369') === 'China UnionPay');
	});

	it('has a prefix of 622667 and a length of 18', function() {
		assert(detectNetwork('622667689615793245') === 'China UnionPay');
	});

	it('has a prefix of 622668 and a length of 18', function() {
		assert(detectNetwork('622668316616637255') === 'China UnionPay');
	});

	it('has a prefix of 622669 and a length of 18', function() {
		assert(detectNetwork('622669469745206241') === 'China UnionPay');
	});

	it('has a prefix of 622670 and a length of 18', function() {
		assert(detectNetwork('622670564146237231') === 'China UnionPay');
	});

	it('has a prefix of 622671 and a length of 18', function() {
		assert(detectNetwork('622671162738135914') === 'China UnionPay');
	});

	it('has a prefix of 622672 and a length of 18', function() {
		assert(detectNetwork('622672416772006286') === 'China UnionPay');
	});

	it('has a prefix of 622673 and a length of 18', function() {
		assert(detectNetwork('622673518518013374') === 'China UnionPay');
	});

	it('has a prefix of 622674 and a length of 18', function() {
		assert(detectNetwork('622674575454479591') === 'China UnionPay');
	});

	it('has a prefix of 622675 and a length of 18', function() {
		assert(detectNetwork('622675698601768735') === 'China UnionPay');
	});

	it('has a prefix of 622676 and a length of 18', function() {
		assert(detectNetwork('622676963898324379') === 'China UnionPay');
	});

	it('has a prefix of 622677 and a length of 18', function() {
		assert(detectNetwork('622677415060842030') === 'China UnionPay');
	});

	it('has a prefix of 622678 and a length of 18', function() {
		assert(detectNetwork('622678547852381240') === 'China UnionPay');
	});

	it('has a prefix of 622679 and a length of 18', function() {
		assert(detectNetwork('622679188932168303') === 'China UnionPay');
	});

	it('has a prefix of 622680 and a length of 18', function() {
		assert(detectNetwork('622680008084796247') === 'China UnionPay');
	});

	it('has a prefix of 622681 and a length of 18', function() {
		assert(detectNetwork('622681693546685261') === 'China UnionPay');
	});

	it('has a prefix of 622682 and a length of 18', function() {
		assert(detectNetwork('622682585877497674') === 'China UnionPay');
	});

	it('has a prefix of 622683 and a length of 18', function() {
		assert(detectNetwork('622683227279200259') === 'China UnionPay');
	});

	it('has a prefix of 622684 and a length of 18', function() {
		assert(detectNetwork('622684699959951208') === 'China UnionPay');
	});

	it('has a prefix of 622685 and a length of 18', function() {
		assert(detectNetwork('622685550884791786') === 'China UnionPay');
	});

	it('has a prefix of 622686 and a length of 18', function() {
		assert(detectNetwork('622686163859828894') === 'China UnionPay');
	});

	it('has a prefix of 622687 and a length of 18', function() {
		assert(detectNetwork('622687887060628973') === 'China UnionPay');
	});

	it('has a prefix of 622688 and a length of 18', function() {
		assert(detectNetwork('622688480910281399') === 'China UnionPay');
	});

	it('has a prefix of 622689 and a length of 18', function() {
		assert(detectNetwork('622689858462973183') === 'China UnionPay');
	});

	it('has a prefix of 622690 and a length of 18', function() {
		assert(detectNetwork('622690108564668688') === 'China UnionPay');
	});

	it('has a prefix of 622691 and a length of 18', function() {
		assert(detectNetwork('622691767184593372') === 'China UnionPay');
	});

	it('has a prefix of 622692 and a length of 18', function() {
		assert(detectNetwork('622692992193294036') === 'China UnionPay');
	});

	it('has a prefix of 622693 and a length of 18', function() {
		assert(detectNetwork('622693238557858126') === 'China UnionPay');
	});

	it('has a prefix of 622694 and a length of 18', function() {
		assert(detectNetwork('622694457404028090') === 'China UnionPay');
	});

	it('has a prefix of 622695 and a length of 18', function() {
		assert(detectNetwork('622695500117481209') === 'China UnionPay');
	});

	it('has a prefix of 622696 and a length of 18', function() {
		assert(detectNetwork('622696364761632634') === 'China UnionPay');
	});

	it('has a prefix of 622697 and a length of 18', function() {
		assert(detectNetwork('622697201069569693') === 'China UnionPay');
	});

	it('has a prefix of 622698 and a length of 18', function() {
		assert(detectNetwork('622698803018492815') === 'China UnionPay');
	});

	it('has a prefix of 622699 and a length of 18', function() {
		assert(detectNetwork('622699598253084710') === 'China UnionPay');
	});

	it('has a prefix of 622700 and a length of 18', function() {
		assert(detectNetwork('622700687533674240') === 'China UnionPay');
	});

	it('has a prefix of 622701 and a length of 18', function() {
		assert(detectNetwork('622701710541952406') === 'China UnionPay');
	});

	it('has a prefix of 622702 and a length of 18', function() {
		assert(detectNetwork('622702776009955609') === 'China UnionPay');
	});

	it('has a prefix of 622703 and a length of 18', function() {
		assert(detectNetwork('622703621261509168') === 'China UnionPay');
	});

	it('has a prefix of 622704 and a length of 18', function() {
		assert(detectNetwork('622704043397546642') === 'China UnionPay');
	});

	it('has a prefix of 622705 and a length of 18', function() {
		assert(detectNetwork('622705459095566804') === 'China UnionPay');
	});

	it('has a prefix of 622706 and a length of 18', function() {
		assert(detectNetwork('622706258933932539') === 'China UnionPay');
	});

	it('has a prefix of 622707 and a length of 18', function() {
		assert(detectNetwork('622707435288812390') === 'China UnionPay');
	});

	it('has a prefix of 622708 and a length of 18', function() {
		assert(detectNetwork('622708735866184238') === 'China UnionPay');
	});

	it('has a prefix of 622709 and a length of 18', function() {
		assert(detectNetwork('622709869485983153') === 'China UnionPay');
	});

	it('has a prefix of 622710 and a length of 18', function() {
		assert(detectNetwork('622710590045865266') === 'China UnionPay');
	});

	it('has a prefix of 622711 and a length of 18', function() {
		assert(detectNetwork('622711466383022365') === 'China UnionPay');
	});

	it('has a prefix of 622712 and a length of 18', function() {
		assert(detectNetwork('622712174047374390') === 'China UnionPay');
	});

	it('has a prefix of 622713 and a length of 18', function() {
		assert(detectNetwork('622713922351100052') === 'China UnionPay');
	});

	it('has a prefix of 622714 and a length of 18', function() {
		assert(detectNetwork('622714190998007048') === 'China UnionPay');
	});

	it('has a prefix of 622715 and a length of 18', function() {
		assert(detectNetwork('622715706874941257') === 'China UnionPay');
	});

	it('has a prefix of 622716 and a length of 18', function() {
		assert(detectNetwork('622716685910427572') === 'China UnionPay');
	});

	it('has a prefix of 622717 and a length of 18', function() {
		assert(detectNetwork('622717269090053324') === 'China UnionPay');
	});

	it('has a prefix of 622718 and a length of 18', function() {
		assert(detectNetwork('622718041236907526') === 'China UnionPay');
	});

	it('has a prefix of 622719 and a length of 18', function() {
		assert(detectNetwork('622719247149700717') === 'China UnionPay');
	});

	it('has a prefix of 622720 and a length of 18', function() {
		assert(detectNetwork('622720875961895547') === 'China UnionPay');
	});

	it('has a prefix of 622721 and a length of 18', function() {
		assert(detectNetwork('622721470952432681') === 'China UnionPay');
	});

	it('has a prefix of 622722 and a length of 18', function() {
		assert(detectNetwork('622722233080819045') === 'China UnionPay');
	});

	it('has a prefix of 622723 and a length of 18', function() {
		assert(detectNetwork('622723265283003841') === 'China UnionPay');
	});

	it('has a prefix of 622724 and a length of 18', function() {
		assert(detectNetwork('622724750934153990') === 'China UnionPay');
	});

	it('has a prefix of 622725 and a length of 18', function() {
		assert(detectNetwork('622725115456069684') === 'China UnionPay');
	});

	it('has a prefix of 622726 and a length of 18', function() {
		assert(detectNetwork('622726736710487280') === 'China UnionPay');
	});

	it('has a prefix of 622727 and a length of 18', function() {
		assert(detectNetwork('622727235056624847') === 'China UnionPay');
	});

	it('has a prefix of 622728 and a length of 18', function() {
		assert(detectNetwork('622728306614180141') === 'China UnionPay');
	});

	it('has a prefix of 622729 and a length of 18', function() {
		assert(detectNetwork('622729844159835874') === 'China UnionPay');
	});

	it('has a prefix of 622730 and a length of 18', function() {
		assert(detectNetwork('622730764529240358') === 'China UnionPay');
	});

	it('has a prefix of 622731 and a length of 18', function() {
		assert(detectNetwork('622731132840904480') === 'China UnionPay');
	});

	it('has a prefix of 622732 and a length of 18', function() {
		assert(detectNetwork('622732610897933640') === 'China UnionPay');
	});

	it('has a prefix of 622733 and a length of 18', function() {
		assert(detectNetwork('622733853328971994') === 'China UnionPay');
	});

	it('has a prefix of 622734 and a length of 18', function() {
		assert(detectNetwork('622734881941737749') === 'China UnionPay');
	});

	it('has a prefix of 622735 and a length of 18', function() {
		assert(detectNetwork('622735012356338686') === 'China UnionPay');
	});

	it('has a prefix of 622736 and a length of 18', function() {
		assert(detectNetwork('622736266318196376') === 'China UnionPay');
	});

	it('has a prefix of 622737 and a length of 18', function() {
		assert(detectNetwork('622737417889325559') === 'China UnionPay');
	});

	it('has a prefix of 622738 and a length of 18', function() {
		assert(detectNetwork('622738536693368771') === 'China UnionPay');
	});

	it('has a prefix of 622739 and a length of 18', function() {
		assert(detectNetwork('622739682822752649') === 'China UnionPay');
	});

	it('has a prefix of 622740 and a length of 18', function() {
		assert(detectNetwork('622740588133836418') === 'China UnionPay');
	});

	it('has a prefix of 622741 and a length of 18', function() {
		assert(detectNetwork('622741436361168803') === 'China UnionPay');
	});

	it('has a prefix of 622742 and a length of 18', function() {
		assert(detectNetwork('622742483925131122') === 'China UnionPay');
	});

	it('has a prefix of 622743 and a length of 18', function() {
		assert(detectNetwork('622743766755007822') === 'China UnionPay');
	});

	it('has a prefix of 622744 and a length of 18', function() {
		assert(detectNetwork('622744782999214522') === 'China UnionPay');
	});

	it('has a prefix of 622745 and a length of 18', function() {
		assert(detectNetwork('622745821725517884') === 'China UnionPay');
	});

	it('has a prefix of 622746 and a length of 18', function() {
		assert(detectNetwork('622746847558775674') === 'China UnionPay');
	});

	it('has a prefix of 622747 and a length of 18', function() {
		assert(detectNetwork('622747478228653299') === 'China UnionPay');
	});

	it('has a prefix of 622748 and a length of 18', function() {
		assert(detectNetwork('622748702472534110') === 'China UnionPay');
	});

	it('has a prefix of 622749 and a length of 18', function() {
		assert(detectNetwork('622749041641677882') === 'China UnionPay');
	});

	it('has a prefix of 622750 and a length of 18', function() {
		assert(detectNetwork('622750941763447901') === 'China UnionPay');
	});

	it('has a prefix of 622751 and a length of 18', function() {
		assert(detectNetwork('622751054992058470') === 'China UnionPay');
	});

	it('has a prefix of 622752 and a length of 18', function() {
		assert(detectNetwork('622752720290098895') === 'China UnionPay');
	});

	it('has a prefix of 622753 and a length of 18', function() {
		assert(detectNetwork('622753928953995566') === 'China UnionPay');
	});

	it('has a prefix of 622754 and a length of 18', function() {
		assert(detectNetwork('622754753824821491') === 'China UnionPay');
	});

	it('has a prefix of 622755 and a length of 18', function() {
		assert(detectNetwork('622755675637202351') === 'China UnionPay');
	});

	it('has a prefix of 622756 and a length of 18', function() {
		assert(detectNetwork('622756367097653221') === 'China UnionPay');
	});

	it('has a prefix of 622757 and a length of 18', function() {
		assert(detectNetwork('622757022334876224') === 'China UnionPay');
	});

	it('has a prefix of 622758 and a length of 18', function() {
		assert(detectNetwork('622758606510754839') === 'China UnionPay');
	});

	it('has a prefix of 622759 and a length of 18', function() {
		assert(detectNetwork('622759522986309225') === 'China UnionPay');
	});

	it('has a prefix of 622760 and a length of 18', function() {
		assert(detectNetwork('622760585642121853') === 'China UnionPay');
	});

	it('has a prefix of 622761 and a length of 18', function() {
		assert(detectNetwork('622761572246036393') === 'China UnionPay');
	});

	it('has a prefix of 622762 and a length of 18', function() {
		assert(detectNetwork('622762091087645463') === 'China UnionPay');
	});

	it('has a prefix of 622763 and a length of 18', function() {
		assert(detectNetwork('622763801289111324') === 'China UnionPay');
	});

	it('has a prefix of 622764 and a length of 18', function() {
		assert(detectNetwork('622764109501844366') === 'China UnionPay');
	});

	it('has a prefix of 622765 and a length of 18', function() {
		assert(detectNetwork('622765859357332939') === 'China UnionPay');
	});

	it('has a prefix of 622766 and a length of 18', function() {
		assert(detectNetwork('622766198658380633') === 'China UnionPay');
	});

	it('has a prefix of 622767 and a length of 18', function() {
		assert(detectNetwork('622767262628990118') === 'China UnionPay');
	});

	it('has a prefix of 622768 and a length of 18', function() {
		assert(detectNetwork('622768316688518998') === 'China UnionPay');
	});

	it('has a prefix of 622769 and a length of 18', function() {
		assert(detectNetwork('622769641355392896') === 'China UnionPay');
	});

	it('has a prefix of 622770 and a length of 18', function() {
		assert(detectNetwork('622770286443295606') === 'China UnionPay');
	});

	it('has a prefix of 622771 and a length of 18', function() {
		assert(detectNetwork('622771186711339268') === 'China UnionPay');
	});

	it('has a prefix of 622772 and a length of 18', function() {
		assert(detectNetwork('622772730363343111') === 'China UnionPay');
	});

	it('has a prefix of 622773 and a length of 18', function() {
		assert(detectNetwork('622773192962814138') === 'China UnionPay');
	});

	it('has a prefix of 622774 and a length of 18', function() {
		assert(detectNetwork('622774002604291857') === 'China UnionPay');
	});

	it('has a prefix of 622775 and a length of 18', function() {
		assert(detectNetwork('622775513938344061') === 'China UnionPay');
	});

	it('has a prefix of 622776 and a length of 18', function() {
		assert(detectNetwork('622776367105207981') === 'China UnionPay');
	});

	it('has a prefix of 622777 and a length of 18', function() {
		assert(detectNetwork('622777169901651585') === 'China UnionPay');
	});

	it('has a prefix of 622778 and a length of 18', function() {
		assert(detectNetwork('622778374174071143') === 'China UnionPay');
	});

	it('has a prefix of 622779 and a length of 18', function() {
		assert(detectNetwork('622779069717433398') === 'China UnionPay');
	});

	it('has a prefix of 622780 and a length of 18', function() {
		assert(detectNetwork('622780612074496507') === 'China UnionPay');
	});

	it('has a prefix of 622781 and a length of 18', function() {
		assert(detectNetwork('622781860402539441') === 'China UnionPay');
	});

	it('has a prefix of 622782 and a length of 18', function() {
		assert(detectNetwork('622782827293692265') === 'China UnionPay');
	});

	it('has a prefix of 622783 and a length of 18', function() {
		assert(detectNetwork('622783082240165130') === 'China UnionPay');
	});

	it('has a prefix of 622784 and a length of 18', function() {
		assert(detectNetwork('622784503950094391') === 'China UnionPay');
	});

	it('has a prefix of 622785 and a length of 18', function() {
		assert(detectNetwork('622785903297476860') === 'China UnionPay');
	});

	it('has a prefix of 622786 and a length of 18', function() {
		assert(detectNetwork('622786576495860084') === 'China UnionPay');
	});

	it('has a prefix of 622787 and a length of 18', function() {
		assert(detectNetwork('622787583485412076') === 'China UnionPay');
	});

	it('has a prefix of 622788 and a length of 18', function() {
		assert(detectNetwork('622788815406216026') === 'China UnionPay');
	});

	it('has a prefix of 622789 and a length of 18', function() {
		assert(detectNetwork('622789682855250520') === 'China UnionPay');
	});

	it('has a prefix of 622790 and a length of 18', function() {
		assert(detectNetwork('622790739771128814') === 'China UnionPay');
	});

	it('has a prefix of 622791 and a length of 18', function() {
		assert(detectNetwork('622791831304321452') === 'China UnionPay');
	});

	it('has a prefix of 622792 and a length of 18', function() {
		assert(detectNetwork('622792830545882359') === 'China UnionPay');
	});

	it('has a prefix of 622793 and a length of 18', function() {
		assert(detectNetwork('622793411144875347') === 'China UnionPay');
	});

	it('has a prefix of 622794 and a length of 18', function() {
		assert(detectNetwork('622794409525488714') === 'China UnionPay');
	});

	it('has a prefix of 622795 and a length of 18', function() {
		assert(detectNetwork('622795893261851217') === 'China UnionPay');
	});

	it('has a prefix of 622796 and a length of 18', function() {
		assert(detectNetwork('622796205393151632') === 'China UnionPay');
	});

	it('has a prefix of 622797 and a length of 18', function() {
		assert(detectNetwork('622797609007396152') === 'China UnionPay');
	});

	it('has a prefix of 622798 and a length of 18', function() {
		assert(detectNetwork('622798102614692975') === 'China UnionPay');
	});

	it('has a prefix of 622799 and a length of 18', function() {
		assert(detectNetwork('622799949456429931') === 'China UnionPay');
	});

	it('has a prefix of 622800 and a length of 18', function() {
		assert(detectNetwork('622800049819227354') === 'China UnionPay');
	});

	it('has a prefix of 622801 and a length of 18', function() {
		assert(detectNetwork('622801061082754903') === 'China UnionPay');
	});

	it('has a prefix of 622802 and a length of 18', function() {
		assert(detectNetwork('622802218652614589') === 'China UnionPay');
	});

	it('has a prefix of 622803 and a length of 18', function() {
		assert(detectNetwork('622803182917797087') === 'China UnionPay');
	});

	it('has a prefix of 622804 and a length of 18', function() {
		assert(detectNetwork('622804122313157166') === 'China UnionPay');
	});

	it('has a prefix of 622805 and a length of 18', function() {
		assert(detectNetwork('622805492685685467') === 'China UnionPay');
	});

	it('has a prefix of 622806 and a length of 18', function() {
		assert(detectNetwork('622806704676200293') === 'China UnionPay');
	});

	it('has a prefix of 622807 and a length of 18', function() {
		assert(detectNetwork('622807848709589421') === 'China UnionPay');
	});

	it('has a prefix of 622808 and a length of 18', function() {
		assert(detectNetwork('622808090577129524') === 'China UnionPay');
	});

	it('has a prefix of 622809 and a length of 18', function() {
		assert(detectNetwork('622809365894543690') === 'China UnionPay');
	});

	it('has a prefix of 622810 and a length of 18', function() {
		assert(detectNetwork('622810486033300306') === 'China UnionPay');
	});

	it('has a prefix of 622811 and a length of 18', function() {
		assert(detectNetwork('622811102260151254') === 'China UnionPay');
	});

	it('has a prefix of 622812 and a length of 18', function() {
		assert(detectNetwork('622812818785442745') === 'China UnionPay');
	});

	it('has a prefix of 622813 and a length of 18', function() {
		assert(detectNetwork('622813363555562688') === 'China UnionPay');
	});

	it('has a prefix of 622814 and a length of 18', function() {
		assert(detectNetwork('622814991047373072') === 'China UnionPay');
	});

	it('has a prefix of 622815 and a length of 18', function() {
		assert(detectNetwork('622815285001353418') === 'China UnionPay');
	});

	it('has a prefix of 622816 and a length of 18', function() {
		assert(detectNetwork('622816904514047620') === 'China UnionPay');
	});

	it('has a prefix of 622817 and a length of 18', function() {
		assert(detectNetwork('622817258038913293') === 'China UnionPay');
	});

	it('has a prefix of 622818 and a length of 18', function() {
		assert(detectNetwork('622818669337034120') === 'China UnionPay');
	});

	it('has a prefix of 622819 and a length of 18', function() {
		assert(detectNetwork('622819288073519826') === 'China UnionPay');
	});

	it('has a prefix of 622820 and a length of 18', function() {
		assert(detectNetwork('622820734536097250') === 'China UnionPay');
	});

	it('has a prefix of 622821 and a length of 18', function() {
		assert(detectNetwork('622821018373122624') === 'China UnionPay');
	});

	it('has a prefix of 622822 and a length of 18', function() {
		assert(detectNetwork('622822439181923049') === 'China UnionPay');
	});

	it('has a prefix of 622823 and a length of 18', function() {
		assert(detectNetwork('622823731843747424') === 'China UnionPay');
	});

	it('has a prefix of 622824 and a length of 18', function() {
		assert(detectNetwork('622824026386566743') === 'China UnionPay');
	});

	it('has a prefix of 622825 and a length of 18', function() {
		assert(detectNetwork('622825958425877292') === 'China UnionPay');
	});

	it('has a prefix of 622826 and a length of 18', function() {
		assert(detectNetwork('622826615156063659') === 'China UnionPay');
	});

	it('has a prefix of 622827 and a length of 18', function() {
		assert(detectNetwork('622827422976449160') === 'China UnionPay');
	});

	it('has a prefix of 622828 and a length of 18', function() {
		assert(detectNetwork('622828800303563404') === 'China UnionPay');
	});

	it('has a prefix of 622829 and a length of 18', function() {
		assert(detectNetwork('622829945576704088') === 'China UnionPay');
	});

	it('has a prefix of 622830 and a length of 18', function() {
		assert(detectNetwork('622830186380988907') === 'China UnionPay');
	});

	it('has a prefix of 622831 and a length of 18', function() {
		assert(detectNetwork('622831621136978381') === 'China UnionPay');
	});

	it('has a prefix of 622832 and a length of 18', function() {
		assert(detectNetwork('622832920102655033') === 'China UnionPay');
	});

	it('has a prefix of 622833 and a length of 18', function() {
		assert(detectNetwork('622833965834818722') === 'China UnionPay');
	});

	it('has a prefix of 622834 and a length of 18', function() {
		assert(detectNetwork('622834092434587476') === 'China UnionPay');
	});

	it('has a prefix of 622835 and a length of 18', function() {
		assert(detectNetwork('622835243856500144') === 'China UnionPay');
	});

	it('has a prefix of 622836 and a length of 18', function() {
		assert(detectNetwork('622836580084933851') === 'China UnionPay');
	});

	it('has a prefix of 622837 and a length of 18', function() {
		assert(detectNetwork('622837321122045481') === 'China UnionPay');
	});

	it('has a prefix of 622838 and a length of 18', function() {
		assert(detectNetwork('622838678697275232') === 'China UnionPay');
	});

	it('has a prefix of 622839 and a length of 18', function() {
		assert(detectNetwork('622839131964134243') === 'China UnionPay');
	});

	it('has a prefix of 622840 and a length of 18', function() {
		assert(detectNetwork('622840883641945124') === 'China UnionPay');
	});

	it('has a prefix of 622841 and a length of 18', function() {
		assert(detectNetwork('622841511785261250') === 'China UnionPay');
	});

	it('has a prefix of 622842 and a length of 18', function() {
		assert(detectNetwork('622842708357719615') === 'China UnionPay');
	});

	it('has a prefix of 622843 and a length of 18', function() {
		assert(detectNetwork('622843467925549995') === 'China UnionPay');
	});

	it('has a prefix of 622844 and a length of 18', function() {
		assert(detectNetwork('622844243577602304') === 'China UnionPay');
	});

	it('has a prefix of 622845 and a length of 18', function() {
		assert(detectNetwork('622845207120448579') === 'China UnionPay');
	});

	it('has a prefix of 622846 and a length of 18', function() {
		assert(detectNetwork('622846007758904921') === 'China UnionPay');
	});

	it('has a prefix of 622847 and a length of 18', function() {
		assert(detectNetwork('622847625935103354') === 'China UnionPay');
	});

	it('has a prefix of 622848 and a length of 18', function() {
		assert(detectNetwork('622848451765528660') === 'China UnionPay');
	});

	it('has a prefix of 622849 and a length of 18', function() {
		assert(detectNetwork('622849010872070349') === 'China UnionPay');
	});

	it('has a prefix of 622850 and a length of 18', function() {
		assert(detectNetwork('622850601747685902') === 'China UnionPay');
	});

	it('has a prefix of 622851 and a length of 18', function() {
		assert(detectNetwork('622851936277033005') === 'China UnionPay');
	});

	it('has a prefix of 622852 and a length of 18', function() {
		assert(detectNetwork('622852358007635316') === 'China UnionPay');
	});

	it('has a prefix of 622853 and a length of 18', function() {
		assert(detectNetwork('622853393971551583') === 'China UnionPay');
	});

	it('has a prefix of 622854 and a length of 18', function() {
		assert(detectNetwork('622854508723923647') === 'China UnionPay');
	});

	it('has a prefix of 622855 and a length of 18', function() {
		assert(detectNetwork('622855816139088324') === 'China UnionPay');
	});

	it('has a prefix of 622856 and a length of 18', function() {
		assert(detectNetwork('622856204448637292') === 'China UnionPay');
	});

	it('has a prefix of 622857 and a length of 18', function() {
		assert(detectNetwork('622857007025419438') === 'China UnionPay');
	});

	it('has a prefix of 622858 and a length of 18', function() {
		assert(detectNetwork('622858048831680715') === 'China UnionPay');
	});

	it('has a prefix of 622859 and a length of 18', function() {
		assert(detectNetwork('622859996460237663') === 'China UnionPay');
	});

	it('has a prefix of 622860 and a length of 18', function() {
		assert(detectNetwork('622860885381317550') === 'China UnionPay');
	});

	it('has a prefix of 622861 and a length of 18', function() {
		assert(detectNetwork('622861183404631513') === 'China UnionPay');
	});

	it('has a prefix of 622862 and a length of 18', function() {
		assert(detectNetwork('622862144677459248') === 'China UnionPay');
	});

	it('has a prefix of 622863 and a length of 18', function() {
		assert(detectNetwork('622863410255796272') === 'China UnionPay');
	});

	it('has a prefix of 622864 and a length of 18', function() {
		assert(detectNetwork('622864568945139251') === 'China UnionPay');
	});

	it('has a prefix of 622865 and a length of 18', function() {
		assert(detectNetwork('622865666591420898') === 'China UnionPay');
	});

	it('has a prefix of 622866 and a length of 18', function() {
		assert(detectNetwork('622866467729994458') === 'China UnionPay');
	});

	it('has a prefix of 622867 and a length of 18', function() {
		assert(detectNetwork('622867790023053899') === 'China UnionPay');
	});

	it('has a prefix of 622868 and a length of 18', function() {
		assert(detectNetwork('622868081772907196') === 'China UnionPay');
	});

	it('has a prefix of 622869 and a length of 18', function() {
		assert(detectNetwork('622869534558610147') === 'China UnionPay');
	});

	it('has a prefix of 622870 and a length of 18', function() {
		assert(detectNetwork('622870415492186745') === 'China UnionPay');
	});

	it('has a prefix of 622871 and a length of 18', function() {
		assert(detectNetwork('622871548710512259') === 'China UnionPay');
	});

	it('has a prefix of 622872 and a length of 18', function() {
		assert(detectNetwork('622872105350390851') === 'China UnionPay');
	});

	it('has a prefix of 622873 and a length of 18', function() {
		assert(detectNetwork('622873572721992225') === 'China UnionPay');
	});

	it('has a prefix of 622874 and a length of 18', function() {
		assert(detectNetwork('622874465797462620') === 'China UnionPay');
	});

	it('has a prefix of 622875 and a length of 18', function() {
		assert(detectNetwork('622875034716207586') === 'China UnionPay');
	});

	it('has a prefix of 622876 and a length of 18', function() {
		assert(detectNetwork('622876340833945742') === 'China UnionPay');
	});

	it('has a prefix of 622877 and a length of 18', function() {
		assert(detectNetwork('622877104515628501') === 'China UnionPay');
	});

	it('has a prefix of 622878 and a length of 18', function() {
		assert(detectNetwork('622878386823371573') === 'China UnionPay');
	});

	it('has a prefix of 622879 and a length of 18', function() {
		assert(detectNetwork('622879730525309961') === 'China UnionPay');
	});

	it('has a prefix of 622880 and a length of 18', function() {
		assert(detectNetwork('622880982757255474') === 'China UnionPay');
	});

	it('has a prefix of 622881 and a length of 18', function() {
		assert(detectNetwork('622881395997268133') === 'China UnionPay');
	});

	it('has a prefix of 622882 and a length of 18', function() {
		assert(detectNetwork('622882540364120108') === 'China UnionPay');
	});

	it('has a prefix of 622883 and a length of 18', function() {
		assert(detectNetwork('622883648571881706') === 'China UnionPay');
	});

	it('has a prefix of 622884 and a length of 18', function() {
		assert(detectNetwork('622884755424687767') === 'China UnionPay');
	});

	it('has a prefix of 622885 and a length of 18', function() {
		assert(detectNetwork('622885794738781602') === 'China UnionPay');
	});

	it('has a prefix of 622886 and a length of 18', function() {
		assert(detectNetwork('622886797749054853') === 'China UnionPay');
	});

	it('has a prefix of 622887 and a length of 18', function() {
		assert(detectNetwork('622887877861886334') === 'China UnionPay');
	});

	it('has a prefix of 622888 and a length of 18', function() {
		assert(detectNetwork('622888880161564709') === 'China UnionPay');
	});

	it('has a prefix of 622889 and a length of 18', function() {
		assert(detectNetwork('622889805660028135') === 'China UnionPay');
	});

	it('has a prefix of 622890 and a length of 18', function() {
		assert(detectNetwork('622890986930710066') === 'China UnionPay');
	});

	it('has a prefix of 622891 and a length of 18', function() {
		assert(detectNetwork('622891602985989223') === 'China UnionPay');
	});

	it('has a prefix of 622892 and a length of 18', function() {
		assert(detectNetwork('622892833053056962') === 'China UnionPay');
	});

	it('has a prefix of 622893 and a length of 18', function() {
		assert(detectNetwork('622893757973365046') === 'China UnionPay');
	});

	it('has a prefix of 622894 and a length of 18', function() {
		assert(detectNetwork('622894456631220543') === 'China UnionPay');
	});

	it('has a prefix of 622895 and a length of 18', function() {
		assert(detectNetwork('622895156889066088') === 'China UnionPay');
	});

	it('has a prefix of 622896 and a length of 18', function() {
		assert(detectNetwork('622896841491767523') === 'China UnionPay');
	});

	it('has a prefix of 622897 and a length of 18', function() {
		assert(detectNetwork('622897272337226914') === 'China UnionPay');
	});

	it('has a prefix of 622898 and a length of 18', function() {
		assert(detectNetwork('622898504719593664') === 'China UnionPay');
	});

	it('has a prefix of 622899 and a length of 18', function() {
		assert(detectNetwork('622899443762956628') === 'China UnionPay');
	});

	it('has a prefix of 622900 and a length of 18', function() {
		assert(detectNetwork('622900193727597250') === 'China UnionPay');
	});

	it('has a prefix of 622901 and a length of 18', function() {
		assert(detectNetwork('622901999900449176') === 'China UnionPay');
	});

	it('has a prefix of 622902 and a length of 18', function() {
		assert(detectNetwork('622902770949990153') === 'China UnionPay');
	});

	it('has a prefix of 622903 and a length of 18', function() {
		assert(detectNetwork('622903991784893263') === 'China UnionPay');
	});

	it('has a prefix of 622904 and a length of 18', function() {
		assert(detectNetwork('622904841630748020') === 'China UnionPay');
	});

	it('has a prefix of 622905 and a length of 18', function() {
		assert(detectNetwork('622905098209863244') === 'China UnionPay');
	});

	it('has a prefix of 622906 and a length of 18', function() {
		assert(detectNetwork('622906859411529427') === 'China UnionPay');
	});

	it('has a prefix of 622907 and a length of 18', function() {
		assert(detectNetwork('622907648981602400') === 'China UnionPay');
	});

	it('has a prefix of 622908 and a length of 18', function() {
		assert(detectNetwork('622908069329384965') === 'China UnionPay');
	});

	it('has a prefix of 622909 and a length of 18', function() {
		assert(detectNetwork('622909803813998746') === 'China UnionPay');
	});

	it('has a prefix of 622910 and a length of 18', function() {
		assert(detectNetwork('622910030739041589') === 'China UnionPay');
	});

	it('has a prefix of 622911 and a length of 18', function() {
		assert(detectNetwork('622911370798868904') === 'China UnionPay');
	});

	it('has a prefix of 622912 and a length of 18', function() {
		assert(detectNetwork('622912178201616456') === 'China UnionPay');
	});

	it('has a prefix of 622913 and a length of 18', function() {
		assert(detectNetwork('622913366509319932') === 'China UnionPay');
	});

	it('has a prefix of 622914 and a length of 18', function() {
		assert(detectNetwork('622914836256095765') === 'China UnionPay');
	});

	it('has a prefix of 622915 and a length of 18', function() {
		assert(detectNetwork('622915744288616469') === 'China UnionPay');
	});

	it('has a prefix of 622916 and a length of 18', function() {
		assert(detectNetwork('622916935561776630') === 'China UnionPay');
	});

	it('has a prefix of 622917 and a length of 18', function() {
		assert(detectNetwork('622917522686437010') === 'China UnionPay');
	});

	it('has a prefix of 622918 and a length of 18', function() {
		assert(detectNetwork('622918643469302657') === 'China UnionPay');
	});

	it('has a prefix of 622919 and a length of 18', function() {
		assert(detectNetwork('622919116662821716') === 'China UnionPay');
	});

	it('has a prefix of 622920 and a length of 18', function() {
		assert(detectNetwork('622920362795076163') === 'China UnionPay');
	});

	it('has a prefix of 622921 and a length of 18', function() {
		assert(detectNetwork('622921479844570462') === 'China UnionPay');
	});

	it('has a prefix of 622922 and a length of 18', function() {
		assert(detectNetwork('622922630810536343') === 'China UnionPay');
	});

	it('has a prefix of 622923 and a length of 18', function() {
		assert(detectNetwork('622923907561147188') === 'China UnionPay');
	});

	it('has a prefix of 622924 and a length of 18', function() {
		assert(detectNetwork('622924249000775782') === 'China UnionPay');
	});

	it('has a prefix of 622925 and a length of 18', function() {
		assert(detectNetwork('622925702275893071') === 'China UnionPay');
	});

	it('has a prefix of 624 and a length of 19', function() {
		assert(detectNetwork('6246411072626012820') === 'China UnionPay');
	});

	it('has a prefix of 625 and a length of 19', function() {
		assert(detectNetwork('6251123478112785573') === 'China UnionPay');
	});

	it('has a prefix of 626 and a length of 19', function() {
		assert(detectNetwork('6262187923189287063') === 'China UnionPay');
	});

	it('has a prefix of 6282 and a length of 19', function() {
		assert(detectNetwork('6282272792558649946') === 'China UnionPay');
	});

	it('has a prefix of 6283 and a length of 19', function() {
		assert(detectNetwork('6283267465384454908') === 'China UnionPay');
	});

	it('has a prefix of 6284 and a length of 19', function() {
		assert(detectNetwork('6284033377022483121') === 'China UnionPay');
	});

	it('has a prefix of 6285 and a length of 19', function() {
		assert(detectNetwork('6285264200297394562') === 'China UnionPay');
	});

	it('has a prefix of 6286 and a length of 19', function() {
		assert(detectNetwork('6286038493428435048') === 'China UnionPay');
	});

	it('has a prefix of 6287 and a length of 19', function() {
		assert(detectNetwork('6287344809385636954') === 'China UnionPay');
	});

	it('has a prefix of 6288 and a length of 19', function() {
		assert(detectNetwork('6288883416252317540') === 'China UnionPay');
	});

	it('has a prefix of 622126 and a length of 19', function() {
		assert(detectNetwork('6221264337066407778') === 'China UnionPay');
	});

	it('has a prefix of 622127 and a length of 19', function() {
		assert(detectNetwork('6221274704271265262') === 'China UnionPay');
	});

	it('has a prefix of 622128 and a length of 19', function() {
		assert(detectNetwork('6221288732728707985') === 'China UnionPay');
	});

	it('has a prefix of 622129 and a length of 19', function() {
		assert(detectNetwork('6221290516255076003') === 'China UnionPay');
	});

	it('has a prefix of 622130 and a length of 19', function() {
		assert(detectNetwork('6221305644763565814') === 'China UnionPay');
	});

	it('has a prefix of 622131 and a length of 19', function() {
		assert(detectNetwork('6221312253223095615') === 'China UnionPay');
	});

	it('has a prefix of 622132 and a length of 19', function() {
		assert(detectNetwork('6221324862546846335') === 'China UnionPay');
	});

	it('has a prefix of 622133 and a length of 19', function() {
		assert(detectNetwork('6221337178568551114') === 'China UnionPay');
	});

	it('has a prefix of 622134 and a length of 19', function() {
		assert(detectNetwork('6221346697657309906') === 'China UnionPay');
	});

	it('has a prefix of 622135 and a length of 19', function() {
		assert(detectNetwork('6221359859253938606') === 'China UnionPay');
	});

	it('has a prefix of 622136 and a length of 19', function() {
		assert(detectNetwork('6221364294720098305') === 'China UnionPay');
	});

	it('has a prefix of 622137 and a length of 19', function() {
		assert(detectNetwork('6221375945016466667') === 'China UnionPay');
	});

	it('has a prefix of 622138 and a length of 19', function() {
		assert(detectNetwork('6221383484761621224') === 'China UnionPay');
	});

	it('has a prefix of 622139 and a length of 19', function() {
		assert(detectNetwork('6221396252080977034') === 'China UnionPay');
	});

	it('has a prefix of 622140 and a length of 19', function() {
		assert(detectNetwork('6221404574361161136') === 'China UnionPay');
	});

	it('has a prefix of 622141 and a length of 19', function() {
		assert(detectNetwork('6221418581577332901') === 'China UnionPay');
	});

	it('has a prefix of 622142 and a length of 19', function() {
		assert(detectNetwork('6221421327726647097') === 'China UnionPay');
	});

	it('has a prefix of 622143 and a length of 19', function() {
		assert(detectNetwork('6221435499740961928') === 'China UnionPay');
	});

	it('has a prefix of 622144 and a length of 19', function() {
		assert(detectNetwork('6221443107853600887') === 'China UnionPay');
	});

	it('has a prefix of 622145 and a length of 19', function() {
		assert(detectNetwork('6221451444201417222') === 'China UnionPay');
	});

	it('has a prefix of 622146 and a length of 19', function() {
		assert(detectNetwork('6221465828146627097') === 'China UnionPay');
	});

	it('has a prefix of 622147 and a length of 19', function() {
		assert(detectNetwork('6221478849734271471') === 'China UnionPay');
	});

	it('has a prefix of 622148 and a length of 19', function() {
		assert(detectNetwork('6221482155025194300') === 'China UnionPay');
	});

	it('has a prefix of 622149 and a length of 19', function() {
		assert(detectNetwork('6221497956344888835') === 'China UnionPay');
	});

	it('has a prefix of 622150 and a length of 19', function() {
		assert(detectNetwork('6221502123399353767') === 'China UnionPay');
	});

	it('has a prefix of 622151 and a length of 19', function() {
		assert(detectNetwork('6221519060587358428') === 'China UnionPay');
	});

	it('has a prefix of 622152 and a length of 19', function() {
		assert(detectNetwork('6221525656744104349') === 'China UnionPay');
	});

	it('has a prefix of 622153 and a length of 19', function() {
		assert(detectNetwork('6221535812755803396') === 'China UnionPay');
	});

	it('has a prefix of 622154 and a length of 19', function() {
		assert(detectNetwork('6221549319190561738') === 'China UnionPay');
	});

	it('has a prefix of 622155 and a length of 19', function() {
		assert(detectNetwork('6221551352004298793') === 'China UnionPay');
	});

	it('has a prefix of 622156 and a length of 19', function() {
		assert(detectNetwork('6221569947064975384') === 'China UnionPay');
	});

	it('has a prefix of 622157 and a length of 19', function() {
		assert(detectNetwork('6221576470857645734') === 'China UnionPay');
	});

	it('has a prefix of 622158 and a length of 19', function() {
		assert(detectNetwork('6221587918697736757') === 'China UnionPay');
	});

	it('has a prefix of 622159 and a length of 19', function() {
		assert(detectNetwork('6221594682768663570') === 'China UnionPay');
	});

	it('has a prefix of 622160 and a length of 19', function() {
		assert(detectNetwork('6221608889925621612') === 'China UnionPay');
	});

	it('has a prefix of 622161 and a length of 19', function() {
		assert(detectNetwork('6221615442065912411') === 'China UnionPay');
	});

	it('has a prefix of 622162 and a length of 19', function() {
		assert(detectNetwork('6221628842932241402') === 'China UnionPay');
	});

	it('has a prefix of 622163 and a length of 19', function() {
		assert(detectNetwork('6221639687974736272') === 'China UnionPay');
	});

	it('has a prefix of 622164 and a length of 19', function() {
		assert(detectNetwork('6221643341308827694') === 'China UnionPay');
	});

	it('has a prefix of 622165 and a length of 19', function() {
		assert(detectNetwork('6221657223451537098') === 'China UnionPay');
	});

	it('has a prefix of 622166 and a length of 19', function() {
		assert(detectNetwork('6221662161887424364') === 'China UnionPay');
	});

	it('has a prefix of 622167 and a length of 19', function() {
		assert(detectNetwork('6221677599215927411') === 'China UnionPay');
	});

	it('has a prefix of 622168 and a length of 19', function() {
		assert(detectNetwork('6221684337733564065') === 'China UnionPay');
	});

	it('has a prefix of 622169 and a length of 19', function() {
		assert(detectNetwork('6221691142617533618') === 'China UnionPay');
	});

	it('has a prefix of 622170 and a length of 19', function() {
		assert(detectNetwork('6221701880213556118') === 'China UnionPay');
	});

	it('has a prefix of 622171 and a length of 19', function() {
		assert(detectNetwork('6221719892272334017') === 'China UnionPay');
	});

	it('has a prefix of 622172 and a length of 19', function() {
		assert(detectNetwork('6221724242788705533') === 'China UnionPay');
	});

	it('has a prefix of 622173 and a length of 19', function() {
		assert(detectNetwork('6221734282872347247') === 'China UnionPay');
	});

	it('has a prefix of 622174 and a length of 19', function() {
		assert(detectNetwork('6221740516062658121') === 'China UnionPay');
	});

	it('has a prefix of 622175 and a length of 19', function() {
		assert(detectNetwork('6221750923597851941') === 'China UnionPay');
	});

	it('has a prefix of 622176 and a length of 19', function() {
		assert(detectNetwork('6221760219287181111') === 'China UnionPay');
	});

	it('has a prefix of 622177 and a length of 19', function() {
		assert(detectNetwork('6221770962610798045') === 'China UnionPay');
	});

	it('has a prefix of 622178 and a length of 19', function() {
		assert(detectNetwork('6221782213021902701') === 'China UnionPay');
	});

	it('has a prefix of 622179 and a length of 19', function() {
		assert(detectNetwork('6221791117347683349') === 'China UnionPay');
	});

	it('has a prefix of 622180 and a length of 19', function() {
		assert(detectNetwork('6221805688222793673') === 'China UnionPay');
	});

	it('has a prefix of 622181 and a length of 19', function() {
		assert(detectNetwork('6221815562387143861') === 'China UnionPay');
	});

	it('has a prefix of 622182 and a length of 19', function() {
		assert(detectNetwork('6221829040585334947') === 'China UnionPay');
	});

	it('has a prefix of 622183 and a length of 19', function() {
		assert(detectNetwork('6221836317248729046') === 'China UnionPay');
	});

	it('has a prefix of 622184 and a length of 19', function() {
		assert(detectNetwork('6221842240491926661') === 'China UnionPay');
	});

	it('has a prefix of 622185 and a length of 19', function() {
		assert(detectNetwork('6221858781414272296') === 'China UnionPay');
	});

	it('has a prefix of 622186 and a length of 19', function() {
		assert(detectNetwork('6221867438605137312') === 'China UnionPay');
	});

	it('has a prefix of 622187 and a length of 19', function() {
		assert(detectNetwork('6221874730555492517') === 'China UnionPay');
	});

	it('has a prefix of 622188 and a length of 19', function() {
		assert(detectNetwork('6221886148879803898') === 'China UnionPay');
	});

	it('has a prefix of 622189 and a length of 19', function() {
		assert(detectNetwork('6221897060600820188') === 'China UnionPay');
	});

	it('has a prefix of 622190 and a length of 19', function() {
		assert(detectNetwork('6221903513890635885') === 'China UnionPay');
	});

	it('has a prefix of 622191 and a length of 19', function() {
		assert(detectNetwork('6221910668940272390') === 'China UnionPay');
	});

	it('has a prefix of 622192 and a length of 19', function() {
		assert(detectNetwork('6221922241989663178') === 'China UnionPay');
	});

	it('has a prefix of 622193 and a length of 19', function() {
		assert(detectNetwork('6221934521927320019') === 'China UnionPay');
	});

	it('has a prefix of 622194 and a length of 19', function() {
		assert(detectNetwork('6221948767335632084') === 'China UnionPay');
	});

	it('has a prefix of 622195 and a length of 19', function() {
		assert(detectNetwork('6221951628993499151') === 'China UnionPay');
	});

	it('has a prefix of 622196 and a length of 19', function() {
		assert(detectNetwork('6221964185031142688') === 'China UnionPay');
	});

	it('has a prefix of 622197 and a length of 19', function() {
		assert(detectNetwork('6221974753546905820') === 'China UnionPay');
	});

	it('has a prefix of 622198 and a length of 19', function() {
		assert(detectNetwork('6221984887120302431') === 'China UnionPay');
	});

	it('has a prefix of 622199 and a length of 19', function() {
		assert(detectNetwork('6221998150072394683') === 'China UnionPay');
	});

	it('has a prefix of 622200 and a length of 19', function() {
		assert(detectNetwork('6222003466383297236') === 'China UnionPay');
	});

	it('has a prefix of 622201 and a length of 19', function() {
		assert(detectNetwork('6222018238541282404') === 'China UnionPay');
	});

	it('has a prefix of 622202 and a length of 19', function() {
		assert(detectNetwork('6222023554633203773') === 'China UnionPay');
	});

	it('has a prefix of 622203 and a length of 19', function() {
		assert(detectNetwork('6222036895529523374') === 'China UnionPay');
	});

	it('has a prefix of 622204 and a length of 19', function() {
		assert(detectNetwork('6222042861554580938') === 'China UnionPay');
	});

	it('has a prefix of 622205 and a length of 19', function() {
		assert(detectNetwork('6222059612188392398') === 'China UnionPay');
	});

	it('has a prefix of 622206 and a length of 19', function() {
		assert(detectNetwork('6222068766166617918') === 'China UnionPay');
	});

	it('has a prefix of 622207 and a length of 19', function() {
		assert(detectNetwork('6222079065813128489') === 'China UnionPay');
	});

	it('has a prefix of 622208 and a length of 19', function() {
		assert(detectNetwork('6222088407111514234') === 'China UnionPay');
	});

	it('has a prefix of 622209 and a length of 19', function() {
		assert(detectNetwork('6222097355289598175') === 'China UnionPay');
	});

	it('has a prefix of 622210 and a length of 19', function() {
		assert(detectNetwork('6222105682395155677') === 'China UnionPay');
	});

	it('has a prefix of 622211 and a length of 19', function() {
		assert(detectNetwork('6222115067265428012') === 'China UnionPay');
	});

	it('has a prefix of 622212 and a length of 19', function() {
		assert(detectNetwork('6222127972941515967') === 'China UnionPay');
	});

	it('has a prefix of 622213 and a length of 19', function() {
		assert(detectNetwork('6222131080297516538') === 'China UnionPay');
	});

	it('has a prefix of 622214 and a length of 19', function() {
		assert(detectNetwork('6222145535983257890') === 'China UnionPay');
	});

	it('has a prefix of 622215 and a length of 19', function() {
		assert(detectNetwork('6222153338215522307') === 'China UnionPay');
	});

	it('has a prefix of 622216 and a length of 19', function() {
		assert(detectNetwork('6222166475155080768') === 'China UnionPay');
	});

	it('has a prefix of 622217 and a length of 19', function() {
		assert(detectNetwork('6222173015371710943') === 'China UnionPay');
	});

	it('has a prefix of 622218 and a length of 19', function() {
		assert(detectNetwork('6222186062404403437') === 'China UnionPay');
	});

	it('has a prefix of 622219 and a length of 19', function() {
		assert(detectNetwork('6222194682588087251') === 'China UnionPay');
	});

	it('has a prefix of 622220 and a length of 19', function() {
		assert(detectNetwork('6222201221900112713') === 'China UnionPay');
	});

	it('has a prefix of 622221 and a length of 19', function() {
		assert(detectNetwork('6222218106853859319') === 'China UnionPay');
	});

	it('has a prefix of 622222 and a length of 19', function() {
		assert(detectNetwork('6222228966993023842') === 'China UnionPay');
	});

	it('has a prefix of 622223 and a length of 19', function() {
		assert(detectNetwork('6222239077029981035') === 'China UnionPay');
	});

	it('has a prefix of 622224 and a length of 19', function() {
		assert(detectNetwork('6222244383864482369') === 'China UnionPay');
	});

	it('has a prefix of 622225 and a length of 19', function() {
		assert(detectNetwork('6222254109830088769') === 'China UnionPay');
	});

	it('has a prefix of 622226 and a length of 19', function() {
		assert(detectNetwork('6222269113226219369') === 'China UnionPay');
	});

	it('has a prefix of 622227 and a length of 19', function() {
		assert(detectNetwork('6222271595224137468') === 'China UnionPay');
	});

	it('has a prefix of 622228 and a length of 19', function() {
		assert(detectNetwork('6222284698875536103') === 'China UnionPay');
	});

	it('has a prefix of 622229 and a length of 19', function() {
		assert(detectNetwork('6222294657003561845') === 'China UnionPay');
	});

	it('has a prefix of 622230 and a length of 19', function() {
		assert(detectNetwork('6222300021907157107') === 'China UnionPay');
	});

	it('has a prefix of 622231 and a length of 19', function() {
		assert(detectNetwork('6222317796068834849') === 'China UnionPay');
	});

	it('has a prefix of 622232 and a length of 19', function() {
		assert(detectNetwork('6222325638049033674') === 'China UnionPay');
	});

	it('has a prefix of 622233 and a length of 19', function() {
		assert(detectNetwork('6222336368875774264') === 'China UnionPay');
	});

	it('has a prefix of 622234 and a length of 19', function() {
		assert(detectNetwork('6222342933444813681') === 'China UnionPay');
	});

	it('has a prefix of 622235 and a length of 19', function() {
		assert(detectNetwork('6222353581153365432') === 'China UnionPay');
	});

	it('has a prefix of 622236 and a length of 19', function() {
		assert(detectNetwork('6222361377482391615') === 'China UnionPay');
	});

	it('has a prefix of 622237 and a length of 19', function() {
		assert(detectNetwork('6222373723519507219') === 'China UnionPay');
	});

	it('has a prefix of 622238 and a length of 19', function() {
		assert(detectNetwork('6222381883628790822') === 'China UnionPay');
	});

	it('has a prefix of 622239 and a length of 19', function() {
		assert(detectNetwork('6222392436151616542') === 'China UnionPay');
	});

	it('has a prefix of 622240 and a length of 19', function() {
		assert(detectNetwork('6222405732852511292') === 'China UnionPay');
	});

	it('has a prefix of 622241 and a length of 19', function() {
		assert(detectNetwork('6222414990609567565') === 'China UnionPay');
	});

	it('has a prefix of 622242 and a length of 19', function() {
		assert(detectNetwork('6222420095336314903') === 'China UnionPay');
	});

	it('has a prefix of 622243 and a length of 19', function() {
		assert(detectNetwork('6222436843944622784') === 'China UnionPay');
	});

	it('has a prefix of 622244 and a length of 19', function() {
		assert(detectNetwork('6222441209100504591') === 'China UnionPay');
	});

	it('has a prefix of 622245 and a length of 19', function() {
		assert(detectNetwork('6222450678041942772') === 'China UnionPay');
	});

	it('has a prefix of 622246 and a length of 19', function() {
		assert(detectNetwork('6222463790344245931') === 'China UnionPay');
	});

	it('has a prefix of 622247 and a length of 19', function() {
		assert(detectNetwork('6222479768100794447') === 'China UnionPay');
	});

	it('has a prefix of 622248 and a length of 19', function() {
		assert(detectNetwork('6222489090448796826') === 'China UnionPay');
	});

	it('has a prefix of 622249 and a length of 19', function() {
		assert(detectNetwork('6222493764447574329') === 'China UnionPay');
	});

	it('has a prefix of 622250 and a length of 19', function() {
		assert(detectNetwork('6222503199688247646') === 'China UnionPay');
	});

	it('has a prefix of 622251 and a length of 19', function() {
		assert(detectNetwork('6222515713091397397') === 'China UnionPay');
	});

	it('has a prefix of 622252 and a length of 19', function() {
		assert(detectNetwork('6222528656845204496') === 'China UnionPay');
	});

	it('has a prefix of 622253 and a length of 19', function() {
		assert(detectNetwork('6222531308960792996') === 'China UnionPay');
	});

	it('has a prefix of 622254 and a length of 19', function() {
		assert(detectNetwork('6222542341367539910') === 'China UnionPay');
	});

	it('has a prefix of 622255 and a length of 19', function() {
		assert(detectNetwork('6222550425501187440') === 'China UnionPay');
	});

	it('has a prefix of 622256 and a length of 19', function() {
		assert(detectNetwork('6222568753545587862') === 'China UnionPay');
	});

	it('has a prefix of 622257 and a length of 19', function() {
		assert(detectNetwork('6222573964288349837') === 'China UnionPay');
	});

	it('has a prefix of 622258 and a length of 19', function() {
		assert(detectNetwork('6222585547983998391') === 'China UnionPay');
	});

	it('has a prefix of 622259 and a length of 19', function() {
		assert(detectNetwork('6222591241405006088') === 'China UnionPay');
	});

	it('has a prefix of 622260 and a length of 19', function() {
		assert(detectNetwork('6222605843977587806') === 'China UnionPay');
	});

	it('has a prefix of 622261 and a length of 19', function() {
		assert(detectNetwork('6222612613678489273') === 'China UnionPay');
	});

	it('has a prefix of 622262 and a length of 19', function() {
		assert(detectNetwork('6222625906417069227') === 'China UnionPay');
	});

	it('has a prefix of 622263 and a length of 19', function() {
		assert(detectNetwork('6222634006781255834') === 'China UnionPay');
	});

	it('has a prefix of 622264 and a length of 19', function() {
		assert(detectNetwork('6222649084187945264') === 'China UnionPay');
	});

	it('has a prefix of 622265 and a length of 19', function() {
		assert(detectNetwork('6222651614920243887') === 'China UnionPay');
	});

	it('has a prefix of 622266 and a length of 19', function() {
		assert(detectNetwork('6222664713805721211') === 'China UnionPay');
	});

	it('has a prefix of 622267 and a length of 19', function() {
		assert(detectNetwork('6222674477629973229') === 'China UnionPay');
	});

	it('has a prefix of 622268 and a length of 19', function() {
		assert(detectNetwork('6222689422789670935') === 'China UnionPay');
	});

	it('has a prefix of 622269 and a length of 19', function() {
		assert(detectNetwork('6222696614241836979') === 'China UnionPay');
	});

	it('has a prefix of 622270 and a length of 19', function() {
		assert(detectNetwork('6222701861352526387') === 'China UnionPay');
	});

	it('has a prefix of 622271 and a length of 19', function() {
		assert(detectNetwork('6222718871519619906') === 'China UnionPay');
	});

	it('has a prefix of 622272 and a length of 19', function() {
		assert(detectNetwork('6222724902962409108') === 'China UnionPay');
	});

	it('has a prefix of 622273 and a length of 19', function() {
		assert(detectNetwork('6222731118376833342') === 'China UnionPay');
	});

	it('has a prefix of 622274 and a length of 19', function() {
		assert(detectNetwork('6222744391465602926') === 'China UnionPay');
	});

	it('has a prefix of 622275 and a length of 19', function() {
		assert(detectNetwork('6222756164422474921') === 'China UnionPay');
	});

	it('has a prefix of 622276 and a length of 19', function() {
		assert(detectNetwork('6222763754733391806') === 'China UnionPay');
	});

	it('has a prefix of 622277 and a length of 19', function() {
		assert(detectNetwork('6222772427954276205') === 'China UnionPay');
	});

	it('has a prefix of 622278 and a length of 19', function() {
		assert(detectNetwork('6222782975632701670') === 'China UnionPay');
	});

	it('has a prefix of 622279 and a length of 19', function() {
		assert(detectNetwork('6222795118011656928') === 'China UnionPay');
	});

	it('has a prefix of 622280 and a length of 19', function() {
		assert(detectNetwork('6222805038028272515') === 'China UnionPay');
	});

	it('has a prefix of 622281 and a length of 19', function() {
		assert(detectNetwork('6222813610048764969') === 'China UnionPay');
	});

	it('has a prefix of 622282 and a length of 19', function() {
		assert(detectNetwork('6222821911703807532') === 'China UnionPay');
	});

	it('has a prefix of 622283 and a length of 19', function() {
		assert(detectNetwork('6222831630727755426') === 'China UnionPay');
	});

	it('has a prefix of 622284 and a length of 19', function() {
		assert(detectNetwork('6222844257794710970') === 'China UnionPay');
	});

	it('has a prefix of 622285 and a length of 19', function() {
		assert(detectNetwork('6222858588937850805') === 'China UnionPay');
	});

	it('has a prefix of 622286 and a length of 19', function() {
		assert(detectNetwork('6222864343272419934') === 'China UnionPay');
	});

	it('has a prefix of 622287 and a length of 19', function() {
		assert(detectNetwork('6222874533164236197') === 'China UnionPay');
	});

	it('has a prefix of 622288 and a length of 19', function() {
		assert(detectNetwork('6222880210043124773') === 'China UnionPay');
	});

	it('has a prefix of 622289 and a length of 19', function() {
		assert(detectNetwork('6222890518794257885') === 'China UnionPay');
	});

	it('has a prefix of 622290 and a length of 19', function() {
		assert(detectNetwork('6222902858659517940') === 'China UnionPay');
	});

	it('has a prefix of 622291 and a length of 19', function() {
		assert(detectNetwork('6222911103099583850') === 'China UnionPay');
	});

	it('has a prefix of 622292 and a length of 19', function() {
		assert(detectNetwork('6222929843253182609') === 'China UnionPay');
	});

	it('has a prefix of 622293 and a length of 19', function() {
		assert(detectNetwork('6222931266330323373') === 'China UnionPay');
	});

	it('has a prefix of 622294 and a length of 19', function() {
		assert(detectNetwork('6222949751335556834') === 'China UnionPay');
	});

	it('has a prefix of 622295 and a length of 19', function() {
		assert(detectNetwork('6222957727301912870') === 'China UnionPay');
	});

	it('has a prefix of 622296 and a length of 19', function() {
		assert(detectNetwork('6222960372310409698') === 'China UnionPay');
	});

	it('has a prefix of 622297 and a length of 19', function() {
		assert(detectNetwork('6222976331022540529') === 'China UnionPay');
	});

	it('has a prefix of 622298 and a length of 19', function() {
		assert(detectNetwork('6222985424794890649') === 'China UnionPay');
	});

	it('has a prefix of 622299 and a length of 19', function() {
		assert(detectNetwork('6222991469738273691') === 'China UnionPay');
	});

	it('has a prefix of 622300 and a length of 19', function() {
		assert(detectNetwork('6223006589125046290') === 'China UnionPay');
	});

	it('has a prefix of 622301 and a length of 19', function() {
		assert(detectNetwork('6223013394185370310') === 'China UnionPay');
	});

	it('has a prefix of 622302 and a length of 19', function() {
		assert(detectNetwork('6223029285157780118') === 'China UnionPay');
	});

	it('has a prefix of 622303 and a length of 19', function() {
		assert(detectNetwork('6223031283313779305') === 'China UnionPay');
	});

	it('has a prefix of 622304 and a length of 19', function() {
		assert(detectNetwork('6223046776897563259') === 'China UnionPay');
	});

	it('has a prefix of 622305 and a length of 19', function() {
		assert(detectNetwork('6223055993817951356') === 'China UnionPay');
	});

	it('has a prefix of 622306 and a length of 19', function() {
		assert(detectNetwork('6223060812575556690') === 'China UnionPay');
	});

	it('has a prefix of 622307 and a length of 19', function() {
		assert(detectNetwork('6223071596633485152') === 'China UnionPay');
	});

	it('has a prefix of 622308 and a length of 19', function() {
		assert(detectNetwork('6223081360100773194') === 'China UnionPay');
	});

	it('has a prefix of 622309 and a length of 19', function() {
		assert(detectNetwork('6223098651190545291') === 'China UnionPay');
	});

	it('has a prefix of 622310 and a length of 19', function() {
		assert(detectNetwork('6223106276084570511') === 'China UnionPay');
	});

	it('has a prefix of 622311 and a length of 19', function() {
		assert(detectNetwork('6223112317891588469') === 'China UnionPay');
	});

	it('has a prefix of 622312 and a length of 19', function() {
		assert(detectNetwork('6223123128427623677') === 'China UnionPay');
	});

	it('has a prefix of 622313 and a length of 19', function() {
		assert(detectNetwork('6223134573260204765') === 'China UnionPay');
	});

	it('has a prefix of 622314 and a length of 19', function() {
		assert(detectNetwork('6223146983346988810') === 'China UnionPay');
	});

	it('has a prefix of 622315 and a length of 19', function() {
		assert(detectNetwork('6223154739037914671') === 'China UnionPay');
	});

	it('has a prefix of 622316 and a length of 19', function() {
		assert(detectNetwork('6223160387924371618') === 'China UnionPay');
	});

	it('has a prefix of 622317 and a length of 19', function() {
		assert(detectNetwork('6223177638984965407') === 'China UnionPay');
	});

	it('has a prefix of 622318 and a length of 19', function() {
		assert(detectNetwork('6223180632799893328') === 'China UnionPay');
	});

	it('has a prefix of 622319 and a length of 19', function() {
		assert(detectNetwork('6223197852558624083') === 'China UnionPay');
	});

	it('has a prefix of 622320 and a length of 19', function() {
		assert(detectNetwork('6223200922158312265') === 'China UnionPay');
	});

	it('has a prefix of 622321 and a length of 19', function() {
		assert(detectNetwork('6223215636463077255') === 'China UnionPay');
	});

	it('has a prefix of 622322 and a length of 19', function() {
		assert(detectNetwork('6223225584031847359') === 'China UnionPay');
	});

	it('has a prefix of 622323 and a length of 19', function() {
		assert(detectNetwork('6223230304530325036') === 'China UnionPay');
	});

	it('has a prefix of 622324 and a length of 19', function() {
		assert(detectNetwork('6223247131607531529') === 'China UnionPay');
	});

	it('has a prefix of 622325 and a length of 19', function() {
		assert(detectNetwork('6223254708868514380') === 'China UnionPay');
	});

	it('has a prefix of 622326 and a length of 19', function() {
		assert(detectNetwork('6223262690698288632') === 'China UnionPay');
	});

	it('has a prefix of 622327 and a length of 19', function() {
		assert(detectNetwork('6223273305276384103') === 'China UnionPay');
	});

	it('has a prefix of 622328 and a length of 19', function() {
		assert(detectNetwork('6223287285091554893') === 'China UnionPay');
	});

	it('has a prefix of 622329 and a length of 19', function() {
		assert(detectNetwork('6223293385470347115') === 'China UnionPay');
	});

	it('has a prefix of 622330 and a length of 19', function() {
		assert(detectNetwork('6223302690642194118') === 'China UnionPay');
	});

	it('has a prefix of 622331 and a length of 19', function() {
		assert(detectNetwork('6223311771248569352') === 'China UnionPay');
	});

	it('has a prefix of 622332 and a length of 19', function() {
		assert(detectNetwork('6223320016563830528') === 'China UnionPay');
	});

	it('has a prefix of 622333 and a length of 19', function() {
		assert(detectNetwork('6223330933331393663') === 'China UnionPay');
	});

	it('has a prefix of 622334 and a length of 19', function() {
		assert(detectNetwork('6223343909772769310') === 'China UnionPay');
	});

	it('has a prefix of 622335 and a length of 19', function() {
		assert(detectNetwork('6223355882240098553') === 'China UnionPay');
	});

	it('has a prefix of 622336 and a length of 19', function() {
		assert(detectNetwork('6223360831595281955') === 'China UnionPay');
	});

	it('has a prefix of 622337 and a length of 19', function() {
		assert(detectNetwork('6223373016297740033') === 'China UnionPay');
	});

	it('has a prefix of 622338 and a length of 19', function() {
		assert(detectNetwork('6223389008563098549') === 'China UnionPay');
	});

	it('has a prefix of 622339 and a length of 19', function() {
		assert(detectNetwork('6223395036483251124') === 'China UnionPay');
	});

	it('has a prefix of 622340 and a length of 19', function() {
		assert(detectNetwork('6223409204949645982') === 'China UnionPay');
	});

	it('has a prefix of 622341 and a length of 19', function() {
		assert(detectNetwork('6223414511123012280') === 'China UnionPay');
	});

	it('has a prefix of 622342 and a length of 19', function() {
		assert(detectNetwork('6223425224069228562') === 'China UnionPay');
	});

	it('has a prefix of 622343 and a length of 19', function() {
		assert(detectNetwork('6223433341781562873') === 'China UnionPay');
	});

	it('has a prefix of 622344 and a length of 19', function() {
		assert(detectNetwork('6223442253865129892') === 'China UnionPay');
	});

	it('has a prefix of 622345 and a length of 19', function() {
		assert(detectNetwork('6223459837782932873') === 'China UnionPay');
	});

	it('has a prefix of 622346 and a length of 19', function() {
		assert(detectNetwork('6223462382715382395') === 'China UnionPay');
	});

	it('has a prefix of 622347 and a length of 19', function() {
		assert(detectNetwork('6223474842629757220') === 'China UnionPay');
	});

	it('has a prefix of 622348 and a length of 19', function() {
		assert(detectNetwork('6223488608895174574') === 'China UnionPay');
	});

	it('has a prefix of 622349 and a length of 19', function() {
		assert(detectNetwork('6223499637291343829') === 'China UnionPay');
	});

	it('has a prefix of 622350 and a length of 19', function() {
		assert(detectNetwork('6223503054731458153') === 'China UnionPay');
	});

	it('has a prefix of 622351 and a length of 19', function() {
		assert(detectNetwork('6223515674111393156') === 'China UnionPay');
	});

	it('has a prefix of 622352 and a length of 19', function() {
		assert(detectNetwork('6223523804445216090') === 'China UnionPay');
	});

	it('has a prefix of 622353 and a length of 19', function() {
		assert(detectNetwork('6223530528908425574') === 'China UnionPay');
	});

	it('has a prefix of 622354 and a length of 19', function() {
		assert(detectNetwork('6223541132054758085') === 'China UnionPay');
	});

	it('has a prefix of 622355 and a length of 19', function() {
		assert(detectNetwork('6223551738135630894') === 'China UnionPay');
	});

	it('has a prefix of 622356 and a length of 19', function() {
		assert(detectNetwork('6223566926611572371') === 'China UnionPay');
	});

	it('has a prefix of 622357 and a length of 19', function() {
		assert(detectNetwork('6223570729977391486') === 'China UnionPay');
	});

	it('has a prefix of 622358 and a length of 19', function() {
		assert(detectNetwork('6223581145376831155') === 'China UnionPay');
	});

	it('has a prefix of 622359 and a length of 19', function() {
		assert(detectNetwork('6223590190298989629') === 'China UnionPay');
	});

	it('has a prefix of 622360 and a length of 19', function() {
		assert(detectNetwork('6223607882054315347') === 'China UnionPay');
	});

	it('has a prefix of 622361 and a length of 19', function() {
		assert(detectNetwork('6223614376445194078') === 'China UnionPay');
	});

	it('has a prefix of 622362 and a length of 19', function() {
		assert(detectNetwork('6223624831550590917') === 'China UnionPay');
	});

	it('has a prefix of 622363 and a length of 19', function() {
		assert(detectNetwork('6223637770340939435') === 'China UnionPay');
	});

	it('has a prefix of 622364 and a length of 19', function() {
		assert(detectNetwork('6223643359953647731') === 'China UnionPay');
	});

	it('has a prefix of 622365 and a length of 19', function() {
		assert(detectNetwork('6223653295231209215') === 'China UnionPay');
	});

	it('has a prefix of 622366 and a length of 19', function() {
		assert(detectNetwork('6223663028806980697') === 'China UnionPay');
	});

	it('has a prefix of 622367 and a length of 19', function() {
		assert(detectNetwork('6223672037107438500') === 'China UnionPay');
	});

	it('has a prefix of 622368 and a length of 19', function() {
		assert(detectNetwork('6223684422101535047') === 'China UnionPay');
	});

	it('has a prefix of 622369 and a length of 19', function() {
		assert(detectNetwork('6223699021804210510') === 'China UnionPay');
	});

	it('has a prefix of 622370 and a length of 19', function() {
		assert(detectNetwork('6223705814623302348') === 'China UnionPay');
	});

	it('has a prefix of 622371 and a length of 19', function() {
		assert(detectNetwork('6223715896605433539') === 'China UnionPay');
	});

	it('has a prefix of 622372 and a length of 19', function() {
		assert(detectNetwork('6223724866705677412') === 'China UnionPay');
	});

	it('has a prefix of 622373 and a length of 19', function() {
		assert(detectNetwork('6223730518148260370') === 'China UnionPay');
	});

	it('has a prefix of 622374 and a length of 19', function() {
		assert(detectNetwork('6223743529722045807') === 'China UnionPay');
	});

	it('has a prefix of 622375 and a length of 19', function() {
		assert(detectNetwork('6223758461442743250') === 'China UnionPay');
	});

	it('has a prefix of 622376 and a length of 19', function() {
		assert(detectNetwork('6223764689458541121') === 'China UnionPay');
	});

	it('has a prefix of 622377 and a length of 19', function() {
		assert(detectNetwork('6223777287750281233') === 'China UnionPay');
	});

	it('has a prefix of 622378 and a length of 19', function() {
		assert(detectNetwork('6223781023750489136') === 'China UnionPay');
	});

	it('has a prefix of 622379 and a length of 19', function() {
		assert(detectNetwork('6223799102846544756') === 'China UnionPay');
	});

	it('has a prefix of 622380 and a length of 19', function() {
		assert(detectNetwork('6223806763576943313') === 'China UnionPay');
	});

	it('has a prefix of 622381 and a length of 19', function() {
		assert(detectNetwork('6223815816446257516') === 'China UnionPay');
	});

	it('has a prefix of 622382 and a length of 19', function() {
		assert(detectNetwork('6223820867467528225') === 'China UnionPay');
	});

	it('has a prefix of 622383 and a length of 19', function() {
		assert(detectNetwork('6223832070512588341') === 'China UnionPay');
	});

	it('has a prefix of 622384 and a length of 19', function() {
		assert(detectNetwork('6223841946901532555') === 'China UnionPay');
	});

	it('has a prefix of 622385 and a length of 19', function() {
		assert(detectNetwork('6223857240485235590') === 'China UnionPay');
	});

	it('has a prefix of 622386 and a length of 19', function() {
		assert(detectNetwork('6223868194262460294') === 'China UnionPay');
	});

	it('has a prefix of 622387 and a length of 19', function() {
		assert(detectNetwork('6223877531909473084') === 'China UnionPay');
	});

	it('has a prefix of 622388 and a length of 19', function() {
		assert(detectNetwork('6223887341304151242') === 'China UnionPay');
	});

	it('has a prefix of 622389 and a length of 19', function() {
		assert(detectNetwork('6223893861158613410') === 'China UnionPay');
	});

	it('has a prefix of 622390 and a length of 19', function() {
		assert(detectNetwork('6223900301568296774') === 'China UnionPay');
	});

	it('has a prefix of 622391 and a length of 19', function() {
		assert(detectNetwork('6223917526159849130') === 'China UnionPay');
	});

	it('has a prefix of 622392 and a length of 19', function() {
		assert(detectNetwork('6223924316534180186') === 'China UnionPay');
	});

	it('has a prefix of 622393 and a length of 19', function() {
		assert(detectNetwork('6223933264163051379') === 'China UnionPay');
	});

	it('has a prefix of 622394 and a length of 19', function() {
		assert(detectNetwork('6223949263028683012') === 'China UnionPay');
	});

	it('has a prefix of 622395 and a length of 19', function() {
		assert(detectNetwork('6223955889553810574') === 'China UnionPay');
	});

	it('has a prefix of 622396 and a length of 19', function() {
		assert(detectNetwork('6223963065365120822') === 'China UnionPay');
	});

	it('has a prefix of 622397 and a length of 19', function() {
		assert(detectNetwork('6223970018256113898') === 'China UnionPay');
	});

	it('has a prefix of 622398 and a length of 19', function() {
		assert(detectNetwork('6223983623905301261') === 'China UnionPay');
	});

	it('has a prefix of 622399 and a length of 19', function() {
		assert(detectNetwork('6223993023581379710') === 'China UnionPay');
	});

	it('has a prefix of 622400 and a length of 19', function() {
		assert(detectNetwork('6224009251589676144') === 'China UnionPay');
	});

	it('has a prefix of 622401 and a length of 19', function() {
		assert(detectNetwork('6224014263777630628') === 'China UnionPay');
	});

	it('has a prefix of 622402 and a length of 19', function() {
		assert(detectNetwork('6224023449332413434') === 'China UnionPay');
	});

	it('has a prefix of 622403 and a length of 19', function() {
		assert(detectNetwork('6224036846082225085') === 'China UnionPay');
	});

	it('has a prefix of 622404 and a length of 19', function() {
		assert(detectNetwork('6224046845157871953') === 'China UnionPay');
	});

	it('has a prefix of 622405 and a length of 19', function() {
		assert(detectNetwork('6224053515866764269') === 'China UnionPay');
	});

	it('has a prefix of 622406 and a length of 19', function() {
		assert(detectNetwork('6224066625526288170') === 'China UnionPay');
	});

	it('has a prefix of 622407 and a length of 19', function() {
		assert(detectNetwork('6224077514732042481') === 'China UnionPay');
	});

	it('has a prefix of 622408 and a length of 19', function() {
		assert(detectNetwork('6224087939451178305') === 'China UnionPay');
	});

	it('has a prefix of 622409 and a length of 19', function() {
		assert(detectNetwork('6224090431425514237') === 'China UnionPay');
	});

	it('has a prefix of 622410 and a length of 19', function() {
		assert(detectNetwork('6224102011280815316') === 'China UnionPay');
	});

	it('has a prefix of 622411 and a length of 19', function() {
		assert(detectNetwork('6224112508246664690') === 'China UnionPay');
	});

	it('has a prefix of 622412 and a length of 19', function() {
		assert(detectNetwork('6224120991174608323') === 'China UnionPay');
	});

	it('has a prefix of 622413 and a length of 19', function() {
		assert(detectNetwork('6224134866113730654') === 'China UnionPay');
	});

	it('has a prefix of 622414 and a length of 19', function() {
		assert(detectNetwork('6224142865752293607') === 'China UnionPay');
	});

	it('has a prefix of 622415 and a length of 19', function() {
		assert(detectNetwork('6224155708095306841') === 'China UnionPay');
	});

	it('has a prefix of 622416 and a length of 19', function() {
		assert(detectNetwork('6224163315903236284') === 'China UnionPay');
	});

	it('has a prefix of 622417 and a length of 19', function() {
		assert(detectNetwork('6224177201535322373') === 'China UnionPay');
	});

	it('has a prefix of 622418 and a length of 19', function() {
		assert(detectNetwork('6224188546051806936') === 'China UnionPay');
	});

	it('has a prefix of 622419 and a length of 19', function() {
		assert(detectNetwork('6224199956578323856') === 'China UnionPay');
	});

	it('has a prefix of 622420 and a length of 19', function() {
		assert(detectNetwork('6224201171197528743') === 'China UnionPay');
	});

	it('has a prefix of 622421 and a length of 19', function() {
		assert(detectNetwork('6224218587946937121') === 'China UnionPay');
	});

	it('has a prefix of 622422 and a length of 19', function() {
		assert(detectNetwork('6224229067086405928') === 'China UnionPay');
	});

	it('has a prefix of 622423 and a length of 19', function() {
		assert(detectNetwork('6224231095837304817') === 'China UnionPay');
	});

	it('has a prefix of 622424 and a length of 19', function() {
		assert(detectNetwork('6224243342819000561') === 'China UnionPay');
	});

	it('has a prefix of 622425 and a length of 19', function() {
		assert(detectNetwork('6224256314433037429') === 'China UnionPay');
	});

	it('has a prefix of 622426 and a length of 19', function() {
		assert(detectNetwork('6224268322630961221') === 'China UnionPay');
	});

	it('has a prefix of 622427 and a length of 19', function() {
		assert(detectNetwork('6224274411491246895') === 'China UnionPay');
	});

	it('has a prefix of 622428 and a length of 19', function() {
		assert(detectNetwork('6224287726667673498') === 'China UnionPay');
	});

	it('has a prefix of 622429 and a length of 19', function() {
		assert(detectNetwork('6224297739510414772') === 'China UnionPay');
	});

	it('has a prefix of 622430 and a length of 19', function() {
		assert(detectNetwork('6224305403503166844') === 'China UnionPay');
	});

	it('has a prefix of 622431 and a length of 19', function() {
		assert(detectNetwork('6224316902798798495') === 'China UnionPay');
	});

	it('has a prefix of 622432 and a length of 19', function() {
		assert(detectNetwork('6224325120202786350') === 'China UnionPay');
	});

	it('has a prefix of 622433 and a length of 19', function() {
		assert(detectNetwork('6224330841335613262') === 'China UnionPay');
	});

	it('has a prefix of 622434 and a length of 19', function() {
		assert(detectNetwork('6224340307274017216') === 'China UnionPay');
	});

	it('has a prefix of 622435 and a length of 19', function() {
		assert(detectNetwork('6224354390144936856') === 'China UnionPay');
	});

	it('has a prefix of 622436 and a length of 19', function() {
		assert(detectNetwork('6224361245194836083') === 'China UnionPay');
	});

	it('has a prefix of 622437 and a length of 19', function() {
		assert(detectNetwork('6224375483688700368') === 'China UnionPay');
	});

	it('has a prefix of 622438 and a length of 19', function() {
		assert(detectNetwork('6224383535725469139') === 'China UnionPay');
	});

	it('has a prefix of 622439 and a length of 19', function() {
		assert(detectNetwork('6224395633280618749') === 'China UnionPay');
	});

	it('has a prefix of 622440 and a length of 19', function() {
		assert(detectNetwork('6224408970101609665') === 'China UnionPay');
	});

	it('has a prefix of 622441 and a length of 19', function() {
		assert(detectNetwork('6224418721876199250') === 'China UnionPay');
	});

	it('has a prefix of 622442 and a length of 19', function() {
		assert(detectNetwork('6224425746389211838') === 'China UnionPay');
	});

	it('has a prefix of 622443 and a length of 19', function() {
		assert(detectNetwork('6224437865683214598') === 'China UnionPay');
	});

	it('has a prefix of 622444 and a length of 19', function() {
		assert(detectNetwork('6224441582801107987') === 'China UnionPay');
	});

	it('has a prefix of 622445 and a length of 19', function() {
		assert(detectNetwork('6224458728842559588') === 'China UnionPay');
	});

	it('has a prefix of 622446 and a length of 19', function() {
		assert(detectNetwork('6224465270645046372') === 'China UnionPay');
	});

	it('has a prefix of 622447 and a length of 19', function() {
		assert(detectNetwork('6224471740570915474') === 'China UnionPay');
	});

	it('has a prefix of 622448 and a length of 19', function() {
		assert(detectNetwork('6224481714845926885') === 'China UnionPay');
	});

	it('has a prefix of 622449 and a length of 19', function() {
		assert(detectNetwork('6224490821163557415') === 'China UnionPay');
	});

	it('has a prefix of 622450 and a length of 19', function() {
		assert(detectNetwork('6224503453762704983') === 'China UnionPay');
	});

	it('has a prefix of 622451 and a length of 19', function() {
		assert(detectNetwork('6224510007917490687') === 'China UnionPay');
	});

	it('has a prefix of 622452 and a length of 19', function() {
		assert(detectNetwork('6224526940221701281') === 'China UnionPay');
	});

	it('has a prefix of 622453 and a length of 19', function() {
		assert(detectNetwork('6224534390378207118') === 'China UnionPay');
	});

	it('has a prefix of 622454 and a length of 19', function() {
		assert(detectNetwork('6224544172473327082') === 'China UnionPay');
	});

	it('has a prefix of 622455 and a length of 19', function() {
		assert(detectNetwork('6224552797505567236') === 'China UnionPay');
	});

	it('has a prefix of 622456 and a length of 19', function() {
		assert(detectNetwork('6224566116595729692') === 'China UnionPay');
	});

	it('has a prefix of 622457 and a length of 19', function() {
		assert(detectNetwork('6224575417035566637') === 'China UnionPay');
	});

	it('has a prefix of 622458 and a length of 19', function() {
		assert(detectNetwork('6224588194343244948') === 'China UnionPay');
	});

	it('has a prefix of 622459 and a length of 19', function() {
		assert(detectNetwork('6224595158028911470') === 'China UnionPay');
	});

	it('has a prefix of 622460 and a length of 19', function() {
		assert(detectNetwork('6224604974314917528') === 'China UnionPay');
	});

	it('has a prefix of 622461 and a length of 19', function() {
		assert(detectNetwork('6224613716984680581') === 'China UnionPay');
	});

	it('has a prefix of 622462 and a length of 19', function() {
		assert(detectNetwork('6224622655796975454') === 'China UnionPay');
	});

	it('has a prefix of 622463 and a length of 19', function() {
		assert(detectNetwork('6224635243455639306') === 'China UnionPay');
	});

	it('has a prefix of 622464 and a length of 19', function() {
		assert(detectNetwork('6224647136810733995') === 'China UnionPay');
	});

	it('has a prefix of 622465 and a length of 19', function() {
		assert(detectNetwork('6224653376403683594') === 'China UnionPay');
	});

	it('has a prefix of 622466 and a length of 19', function() {
		assert(detectNetwork('6224661827099369848') === 'China UnionPay');
	});

	it('has a prefix of 622467 and a length of 19', function() {
		assert(detectNetwork('6224673010722427130') === 'China UnionPay');
	});

	it('has a prefix of 622468 and a length of 19', function() {
		assert(detectNetwork('6224680226744054724') === 'China UnionPay');
	});

	it('has a prefix of 622469 and a length of 19', function() {
		assert(detectNetwork('6224695603983942459') === 'China UnionPay');
	});

	it('has a prefix of 622470 and a length of 19', function() {
		assert(detectNetwork('6224707430694612302') === 'China UnionPay');
	});

	it('has a prefix of 622471 and a length of 19', function() {
		assert(detectNetwork('6224711407902497319') === 'China UnionPay');
	});

	it('has a prefix of 622472 and a length of 19', function() {
		assert(detectNetwork('6224726478953070048') === 'China UnionPay');
	});

	it('has a prefix of 622473 and a length of 19', function() {
		assert(detectNetwork('6224734306106850786') === 'China UnionPay');
	});

	it('has a prefix of 622474 and a length of 19', function() {
		assert(detectNetwork('6224742825109297308') === 'China UnionPay');
	});

	it('has a prefix of 622475 and a length of 19', function() {
		assert(detectNetwork('6224754628682564424') === 'China UnionPay');
	});

	it('has a prefix of 622476 and a length of 19', function() {
		assert(detectNetwork('6224762813001719800') === 'China UnionPay');
	});

	it('has a prefix of 622477 and a length of 19', function() {
		assert(detectNetwork('6224771271096749102') === 'China UnionPay');
	});

	it('has a prefix of 622478 and a length of 19', function() {
		assert(detectNetwork('6224787476390880506') === 'China UnionPay');
	});

	it('has a prefix of 622479 and a length of 19', function() {
		assert(detectNetwork('6224790235685960515') === 'China UnionPay');
	});

	it('has a prefix of 622480 and a length of 19', function() {
		assert(detectNetwork('6224804818663818793') === 'China UnionPay');
	});

	it('has a prefix of 622481 and a length of 19', function() {
		assert(detectNetwork('6224813333944814693') === 'China UnionPay');
	});

	it('has a prefix of 622482 and a length of 19', function() {
		assert(detectNetwork('6224820700803731553') === 'China UnionPay');
	});

	it('has a prefix of 622483 and a length of 19', function() {
		assert(detectNetwork('6224830752911892037') === 'China UnionPay');
	});

	it('has a prefix of 622484 and a length of 19', function() {
		assert(detectNetwork('6224842959927528868') === 'China UnionPay');
	});

	it('has a prefix of 622485 and a length of 19', function() {
		assert(detectNetwork('6224853710543576551') === 'China UnionPay');
	});

	it('has a prefix of 622486 and a length of 19', function() {
		assert(detectNetwork('6224862298314059969') === 'China UnionPay');
	});

	it('has a prefix of 622487 and a length of 19', function() {
		assert(detectNetwork('6224874068825408131') === 'China UnionPay');
	});

	it('has a prefix of 622488 and a length of 19', function() {
		assert(detectNetwork('6224883696039725119') === 'China UnionPay');
	});

	it('has a prefix of 622489 and a length of 19', function() {
		assert(detectNetwork('6224893549839556028') === 'China UnionPay');
	});

	it('has a prefix of 622490 and a length of 19', function() {
		assert(detectNetwork('6224904613190399157') === 'China UnionPay');
	});

	it('has a prefix of 622491 and a length of 19', function() {
		assert(detectNetwork('6224913969679031020') === 'China UnionPay');
	});

	it('has a prefix of 622492 and a length of 19', function() {
		assert(detectNetwork('6224923626037564263') === 'China UnionPay');
	});

	it('has a prefix of 622493 and a length of 19', function() {
		assert(detectNetwork('6224930349329718621') === 'China UnionPay');
	});

	it('has a prefix of 622494 and a length of 19', function() {
		assert(detectNetwork('6224945076081481291') === 'China UnionPay');
	});

	it('has a prefix of 622495 and a length of 19', function() {
		assert(detectNetwork('6224957732802621710') === 'China UnionPay');
	});

	it('has a prefix of 622496 and a length of 19', function() {
		assert(detectNetwork('6224969512575785498') === 'China UnionPay');
	});

	it('has a prefix of 622497 and a length of 19', function() {
		assert(detectNetwork('6224972877660663718') === 'China UnionPay');
	});

	it('has a prefix of 622498 and a length of 19', function() {
		assert(detectNetwork('6224980352890289965') === 'China UnionPay');
	});

	it('has a prefix of 622499 and a length of 19', function() {
		assert(detectNetwork('6224993926364205195') === 'China UnionPay');
	});

	it('has a prefix of 622500 and a length of 19', function() {
		assert(detectNetwork('6225005992358745969') === 'China UnionPay');
	});

	it('has a prefix of 622501 and a length of 19', function() {
		assert(detectNetwork('6225016310732690644') === 'China UnionPay');
	});

	it('has a prefix of 622502 and a length of 19', function() {
		assert(detectNetwork('6225020838286869037') === 'China UnionPay');
	});

	it('has a prefix of 622503 and a length of 19', function() {
		assert(detectNetwork('6225030554785300779') === 'China UnionPay');
	});

	it('has a prefix of 622504 and a length of 19', function() {
		assert(detectNetwork('6225048731862345556') === 'China UnionPay');
	});

	it('has a prefix of 622505 and a length of 19', function() {
		assert(detectNetwork('6225052617952603786') === 'China UnionPay');
	});

	it('has a prefix of 622506 and a length of 19', function() {
		assert(detectNetwork('6225063239093249931') === 'China UnionPay');
	});

	it('has a prefix of 622507 and a length of 19', function() {
		assert(detectNetwork('6225078540144457871') === 'China UnionPay');
	});

	it('has a prefix of 622508 and a length of 19', function() {
		assert(detectNetwork('6225087290132655063') === 'China UnionPay');
	});

	it('has a prefix of 622509 and a length of 19', function() {
		assert(detectNetwork('6225095259801748698') === 'China UnionPay');
	});

	it('has a prefix of 622510 and a length of 19', function() {
		assert(detectNetwork('6225105446995598518') === 'China UnionPay');
	});

	it('has a prefix of 622511 and a length of 19', function() {
		assert(detectNetwork('6225118679111709584') === 'China UnionPay');
	});

	it('has a prefix of 622512 and a length of 19', function() {
		assert(detectNetwork('6225123891060441714') === 'China UnionPay');
	});

	it('has a prefix of 622513 and a length of 19', function() {
		assert(detectNetwork('6225139851222077771') === 'China UnionPay');
	});

	it('has a prefix of 622514 and a length of 19', function() {
		assert(detectNetwork('6225147612695591929') === 'China UnionPay');
	});

	it('has a prefix of 622515 and a length of 19', function() {
		assert(detectNetwork('6225156033089113435') === 'China UnionPay');
	});

	it('has a prefix of 622516 and a length of 19', function() {
		assert(detectNetwork('6225167888190990046') === 'China UnionPay');
	});

	it('has a prefix of 622517 and a length of 19', function() {
		assert(detectNetwork('6225178872729673424') === 'China UnionPay');
	});

	it('has a prefix of 622518 and a length of 19', function() {
		assert(detectNetwork('6225185022704089122') === 'China UnionPay');
	});

	it('has a prefix of 622519 and a length of 19', function() {
		assert(detectNetwork('6225197966274625630') === 'China UnionPay');
	});

	it('has a prefix of 622520 and a length of 19', function() {
		assert(detectNetwork('6225200131292562976') === 'China UnionPay');
	});

	it('has a prefix of 622521 and a length of 19', function() {
		assert(detectNetwork('6225217436079675082') === 'China UnionPay');
	});

	it('has a prefix of 622522 and a length of 19', function() {
		assert(detectNetwork('6225227048448773620') === 'China UnionPay');
	});

	it('has a prefix of 622523 and a length of 19', function() {
		assert(detectNetwork('6225235514203290212') === 'China UnionPay');
	});

	it('has a prefix of 622524 and a length of 19', function() {
		assert(detectNetwork('6225243678548082068') === 'China UnionPay');
	});

	it('has a prefix of 622525 and a length of 19', function() {
		assert(detectNetwork('6225257409847885118') === 'China UnionPay');
	});

	it('has a prefix of 622526 and a length of 19', function() {
		assert(detectNetwork('6225268062862252388') === 'China UnionPay');
	});

	it('has a prefix of 622527 and a length of 19', function() {
		assert(detectNetwork('6225271524581974943') === 'China UnionPay');
	});

	it('has a prefix of 622528 and a length of 19', function() {
		assert(detectNetwork('6225282527165124004') === 'China UnionPay');
	});

	it('has a prefix of 622529 and a length of 19', function() {
		assert(detectNetwork('6225296461871153786') === 'China UnionPay');
	});

	it('has a prefix of 622530 and a length of 19', function() {
		assert(detectNetwork('6225303385260779343') === 'China UnionPay');
	});

	it('has a prefix of 622531 and a length of 19', function() {
		assert(detectNetwork('6225311588123948902') === 'China UnionPay');
	});

	it('has a prefix of 622532 and a length of 19', function() {
		assert(detectNetwork('6225321369526963874') === 'China UnionPay');
	});

	it('has a prefix of 622533 and a length of 19', function() {
		assert(detectNetwork('6225334677500558797') === 'China UnionPay');
	});

	it('has a prefix of 622534 and a length of 19', function() {
		assert(detectNetwork('6225343469020385111') === 'China UnionPay');
	});

	it('has a prefix of 622535 and a length of 19', function() {
		assert(detectNetwork('6225354997858694755') === 'China UnionPay');
	});

	it('has a prefix of 622536 and a length of 19', function() {
		assert(detectNetwork('6225363070537287214') === 'China UnionPay');
	});

	it('has a prefix of 622537 and a length of 19', function() {
		assert(detectNetwork('6225376062767728084') === 'China UnionPay');
	});

	it('has a prefix of 622538 and a length of 19', function() {
		assert(detectNetwork('6225380446242248414') === 'China UnionPay');
	});

	it('has a prefix of 622539 and a length of 19', function() {
		assert(detectNetwork('6225391222608789428') === 'China UnionPay');
	});

	it('has a prefix of 622540 and a length of 19', function() {
		assert(detectNetwork('6225408374187464702') === 'China UnionPay');
	});

	it('has a prefix of 622541 and a length of 19', function() {
		assert(detectNetwork('6225410775188615109') === 'China UnionPay');
	});

	it('has a prefix of 622542 and a length of 19', function() {
		assert(detectNetwork('6225421342092248957') === 'China UnionPay');
	});

	it('has a prefix of 622543 and a length of 19', function() {
		assert(detectNetwork('6225438597917724525') === 'China UnionPay');
	});

	it('has a prefix of 622544 and a length of 19', function() {
		assert(detectNetwork('6225444616316517758') === 'China UnionPay');
	});

	it('has a prefix of 622545 and a length of 19', function() {
		assert(detectNetwork('6225457716841451832') === 'China UnionPay');
	});

	it('has a prefix of 622546 and a length of 19', function() {
		assert(detectNetwork('6225464033992017232') === 'China UnionPay');
	});

	it('has a prefix of 622547 and a length of 19', function() {
		assert(detectNetwork('6225477090661962932') === 'China UnionPay');
	});

	it('has a prefix of 622548 and a length of 19', function() {
		assert(detectNetwork('6225481552999385412') === 'China UnionPay');
	});

	it('has a prefix of 622549 and a length of 19', function() {
		assert(detectNetwork('6225493888871207142') === 'China UnionPay');
	});

	it('has a prefix of 622550 and a length of 19', function() {
		assert(detectNetwork('6225502178727488486') === 'China UnionPay');
	});

	it('has a prefix of 622551 and a length of 19', function() {
		assert(detectNetwork('6225510912392750435') === 'China UnionPay');
	});

	it('has a prefix of 622552 and a length of 19', function() {
		assert(detectNetwork('6225521306239687023') === 'China UnionPay');
	});

	it('has a prefix of 622553 and a length of 19', function() {
		assert(detectNetwork('6225539470976460445') === 'China UnionPay');
	});

	it('has a prefix of 622554 and a length of 19', function() {
		assert(detectNetwork('6225544401816377089') === 'China UnionPay');
	});

	it('has a prefix of 622555 and a length of 19', function() {
		assert(detectNetwork('6225558886703364902') === 'China UnionPay');
	});

	it('has a prefix of 622556 and a length of 19', function() {
		assert(detectNetwork('6225569052536265507') === 'China UnionPay');
	});

	it('has a prefix of 622557 and a length of 19', function() {
		assert(detectNetwork('6225579452387074370') === 'China UnionPay');
	});

	it('has a prefix of 622558 and a length of 19', function() {
		assert(detectNetwork('6225586908347088337') === 'China UnionPay');
	});

	it('has a prefix of 622559 and a length of 19', function() {
		assert(detectNetwork('6225593068152015869') === 'China UnionPay');
	});

	it('has a prefix of 622560 and a length of 19', function() {
		assert(detectNetwork('6225609461670959699') === 'China UnionPay');
	});

	it('has a prefix of 622561 and a length of 19', function() {
		assert(detectNetwork('6225617764437090907') === 'China UnionPay');
	});

	it('has a prefix of 622562 and a length of 19', function() {
		assert(detectNetwork('6225625872459297590') === 'China UnionPay');
	});

	it('has a prefix of 622563 and a length of 19', function() {
		assert(detectNetwork('6225635325196877615') === 'China UnionPay');
	});

	it('has a prefix of 622564 and a length of 19', function() {
		assert(detectNetwork('6225642496187993684') === 'China UnionPay');
	});

	it('has a prefix of 622565 and a length of 19', function() {
		assert(detectNetwork('6225651025261180889') === 'China UnionPay');
	});

	it('has a prefix of 622566 and a length of 19', function() {
		assert(detectNetwork('6225662723959147514') === 'China UnionPay');
	});

	it('has a prefix of 622567 and a length of 19', function() {
		assert(detectNetwork('6225675501547677001') === 'China UnionPay');
	});

	it('has a prefix of 622568 and a length of 19', function() {
		assert(detectNetwork('6225689911145251747') === 'China UnionPay');
	});

	it('has a prefix of 622569 and a length of 19', function() {
		assert(detectNetwork('6225692854558608493') === 'China UnionPay');
	});

	it('has a prefix of 622570 and a length of 19', function() {
		assert(detectNetwork('6225703586164153387') === 'China UnionPay');
	});

	it('has a prefix of 622571 and a length of 19', function() {
		assert(detectNetwork('6225715254183306648') === 'China UnionPay');
	});

	it('has a prefix of 622572 and a length of 19', function() {
		assert(detectNetwork('6225726203025120449') === 'China UnionPay');
	});

	it('has a prefix of 622573 and a length of 19', function() {
		assert(detectNetwork('6225730051576802037') === 'China UnionPay');
	});

	it('has a prefix of 622574 and a length of 19', function() {
		assert(detectNetwork('6225740264396338650') === 'China UnionPay');
	});

	it('has a prefix of 622575 and a length of 19', function() {
		assert(detectNetwork('6225759259870084556') === 'China UnionPay');
	});

	it('has a prefix of 622576 and a length of 19', function() {
		assert(detectNetwork('6225762929711760489') === 'China UnionPay');
	});

	it('has a prefix of 622577 and a length of 19', function() {
		assert(detectNetwork('6225775198996429412') === 'China UnionPay');
	});

	it('has a prefix of 622578 and a length of 19', function() {
		assert(detectNetwork('6225784361378205165') === 'China UnionPay');
	});

	it('has a prefix of 622579 and a length of 19', function() {
		assert(detectNetwork('6225792183708065357') === 'China UnionPay');
	});

	it('has a prefix of 622580 and a length of 19', function() {
		assert(detectNetwork('6225805213822397298') === 'China UnionPay');
	});

	it('has a prefix of 622581 and a length of 19', function() {
		assert(detectNetwork('6225814622152938672') === 'China UnionPay');
	});

	it('has a prefix of 622582 and a length of 19', function() {
		assert(detectNetwork('6225827035155697942') === 'China UnionPay');
	});

	it('has a prefix of 622583 and a length of 19', function() {
		assert(detectNetwork('6225839218141419325') === 'China UnionPay');
	});

	it('has a prefix of 622584 and a length of 19', function() {
		assert(detectNetwork('6225844776358527284') === 'China UnionPay');
	});

	it('has a prefix of 622585 and a length of 19', function() {
		assert(detectNetwork('6225857290303179980') === 'China UnionPay');
	});

	it('has a prefix of 622586 and a length of 19', function() {
		assert(detectNetwork('6225866167744343927') === 'China UnionPay');
	});

	it('has a prefix of 622587 and a length of 19', function() {
		assert(detectNetwork('6225875887897434993') === 'China UnionPay');
	});

	it('has a prefix of 622588 and a length of 19', function() {
		assert(detectNetwork('6225887174205414472') === 'China UnionPay');
	});

	it('has a prefix of 622589 and a length of 19', function() {
		assert(detectNetwork('6225897114367350751') === 'China UnionPay');
	});

	it('has a prefix of 622590 and a length of 19', function() {
		assert(detectNetwork('6225900330934631446') === 'China UnionPay');
	});

	it('has a prefix of 622591 and a length of 19', function() {
		assert(detectNetwork('6225911750414917066') === 'China UnionPay');
	});

	it('has a prefix of 622592 and a length of 19', function() {
		assert(detectNetwork('6225925335514838402') === 'China UnionPay');
	});

	it('has a prefix of 622593 and a length of 19', function() {
		assert(detectNetwork('6225935035642372637') === 'China UnionPay');
	});

	it('has a prefix of 622594 and a length of 19', function() {
		assert(detectNetwork('6225942861711135466') === 'China UnionPay');
	});

	it('has a prefix of 622595 and a length of 19', function() {
		assert(detectNetwork('6225956627187831250') === 'China UnionPay');
	});

	it('has a prefix of 622596 and a length of 19', function() {
		assert(detectNetwork('6225968537103577204') === 'China UnionPay');
	});

	it('has a prefix of 622597 and a length of 19', function() {
		assert(detectNetwork('6225978798202295211') === 'China UnionPay');
	});

	it('has a prefix of 622598 and a length of 19', function() {
		assert(detectNetwork('6225981229552355062') === 'China UnionPay');
	});

	it('has a prefix of 622599 and a length of 19', function() {
		assert(detectNetwork('6225995743379332623') === 'China UnionPay');
	});

	it('has a prefix of 622600 and a length of 19', function() {
		assert(detectNetwork('6226003028330839961') === 'China UnionPay');
	});

	it('has a prefix of 622601 and a length of 19', function() {
		assert(detectNetwork('6226015820490095547') === 'China UnionPay');
	});

	it('has a prefix of 622602 and a length of 19', function() {
		assert(detectNetwork('6226026907909221633') === 'China UnionPay');
	});

	it('has a prefix of 622603 and a length of 19', function() {
		assert(detectNetwork('6226036462619706637') === 'China UnionPay');
	});

	it('has a prefix of 622604 and a length of 19', function() {
		assert(detectNetwork('6226041616844783391') === 'China UnionPay');
	});

	it('has a prefix of 622605 and a length of 19', function() {
		assert(detectNetwork('6226057974496776577') === 'China UnionPay');
	});

	it('has a prefix of 622606 and a length of 19', function() {
		assert(detectNetwork('6226063042849428338') === 'China UnionPay');
	});

	it('has a prefix of 622607 and a length of 19', function() {
		assert(detectNetwork('6226075856265519343') === 'China UnionPay');
	});

	it('has a prefix of 622608 and a length of 19', function() {
		assert(detectNetwork('6226082581829984538') === 'China UnionPay');
	});

	it('has a prefix of 622609 and a length of 19', function() {
		assert(detectNetwork('6226098093836127575') === 'China UnionPay');
	});

	it('has a prefix of 622610 and a length of 19', function() {
		assert(detectNetwork('6226104650388834719') === 'China UnionPay');
	});

	it('has a prefix of 622611 and a length of 19', function() {
		assert(detectNetwork('6226118824356312027') === 'China UnionPay');
	});

	it('has a prefix of 622612 and a length of 19', function() {
		assert(detectNetwork('6226126601666431227') === 'China UnionPay');
	});

	it('has a prefix of 622613 and a length of 19', function() {
		assert(detectNetwork('6226134991024070809') === 'China UnionPay');
	});

	it('has a prefix of 622614 and a length of 19', function() {
		assert(detectNetwork('6226147914426663810') === 'China UnionPay');
	});

	it('has a prefix of 622615 and a length of 19', function() {
		assert(detectNetwork('6226153720591342910') === 'China UnionPay');
	});

	it('has a prefix of 622616 and a length of 19', function() {
		assert(detectNetwork('6226165572875710350') === 'China UnionPay');
	});

	it('has a prefix of 622617 and a length of 19', function() {
		assert(detectNetwork('6226172318748233229') === 'China UnionPay');
	});

	it('has a prefix of 622618 and a length of 19', function() {
		assert(detectNetwork('6226186697499475497') === 'China UnionPay');
	});

	it('has a prefix of 622619 and a length of 19', function() {
		assert(detectNetwork('6226193880481461445') === 'China UnionPay');
	});

	it('has a prefix of 622620 and a length of 19', function() {
		assert(detectNetwork('6226206714994474310') === 'China UnionPay');
	});

	it('has a prefix of 622621 and a length of 19', function() {
		assert(detectNetwork('6226216161549870918') === 'China UnionPay');
	});

	it('has a prefix of 622622 and a length of 19', function() {
		assert(detectNetwork('6226227820405322333') === 'China UnionPay');
	});

	it('has a prefix of 622623 and a length of 19', function() {
		assert(detectNetwork('6226239667330875787') === 'China UnionPay');
	});

	it('has a prefix of 622624 and a length of 19', function() {
		assert(detectNetwork('6226246006234542096') === 'China UnionPay');
	});

	it('has a prefix of 622625 and a length of 19', function() {
		assert(detectNetwork('6226257966131980545') === 'China UnionPay');
	});

	it('has a prefix of 622626 and a length of 19', function() {
		assert(detectNetwork('6226266879456372920') === 'China UnionPay');
	});

	it('has a prefix of 622627 and a length of 19', function() {
		assert(detectNetwork('6226274475150861378') === 'China UnionPay');
	});

	it('has a prefix of 622628 and a length of 19', function() {
		assert(detectNetwork('6226284453360189463') === 'China UnionPay');
	});

	it('has a prefix of 622629 and a length of 19', function() {
		assert(detectNetwork('6226297092942133267') === 'China UnionPay');
	});

	it('has a prefix of 622630 and a length of 19', function() {
		assert(detectNetwork('6226309003640976694') === 'China UnionPay');
	});

	it('has a prefix of 622631 and a length of 19', function() {
		assert(detectNetwork('6226310421097943306') === 'China UnionPay');
	});

	it('has a prefix of 622632 and a length of 19', function() {
		assert(detectNetwork('6226327163239181773') === 'China UnionPay');
	});

	it('has a prefix of 622633 and a length of 19', function() {
		assert(detectNetwork('6226331165967166189') === 'China UnionPay');
	});

	it('has a prefix of 622634 and a length of 19', function() {
		assert(detectNetwork('6226341410949504354') === 'China UnionPay');
	});

	it('has a prefix of 622635 and a length of 19', function() {
		assert(detectNetwork('6226353872190560786') === 'China UnionPay');
	});

	it('has a prefix of 622636 and a length of 19', function() {
		assert(detectNetwork('6226369399633770846') === 'China UnionPay');
	});

	it('has a prefix of 622637 and a length of 19', function() {
		assert(detectNetwork('6226377912782446693') === 'China UnionPay');
	});

	it('has a prefix of 622638 and a length of 19', function() {
		assert(detectNetwork('6226388381471440938') === 'China UnionPay');
	});

	it('has a prefix of 622639 and a length of 19', function() {
		assert(detectNetwork('6226397333269222539') === 'China UnionPay');
	});

	it('has a prefix of 622640 and a length of 19', function() {
		assert(detectNetwork('6226408766614583977') === 'China UnionPay');
	});

	it('has a prefix of 622641 and a length of 19', function() {
		assert(detectNetwork('6226415522006330831') === 'China UnionPay');
	});

	it('has a prefix of 622642 and a length of 19', function() {
		assert(detectNetwork('6226425694975810481') === 'China UnionPay');
	});

	it('has a prefix of 622643 and a length of 19', function() {
		assert(detectNetwork('6226434498929456998') === 'China UnionPay');
	});

	it('has a prefix of 622644 and a length of 19', function() {
		assert(detectNetwork('6226446094093609321') === 'China UnionPay');
	});

	it('has a prefix of 622645 and a length of 19', function() {
		assert(detectNetwork('6226455808512872888') === 'China UnionPay');
	});

	it('has a prefix of 622646 and a length of 19', function() {
		assert(detectNetwork('6226467154470806475') === 'China UnionPay');
	});

	it('has a prefix of 622647 and a length of 19', function() {
		assert(detectNetwork('6226477573877517441') === 'China UnionPay');
	});

	it('has a prefix of 622648 and a length of 19', function() {
		assert(detectNetwork('6226481831277702969') === 'China UnionPay');
	});

	it('has a prefix of 622649 and a length of 19', function() {
		assert(detectNetwork('6226491189774071330') === 'China UnionPay');
	});

	it('has a prefix of 622650 and a length of 19', function() {
		assert(detectNetwork('6226500970508066663') === 'China UnionPay');
	});

	it('has a prefix of 622651 and a length of 19', function() {
		assert(detectNetwork('6226511836387666545') === 'China UnionPay');
	});

	it('has a prefix of 622652 and a length of 19', function() {
		assert(detectNetwork('6226524935144009450') === 'China UnionPay');
	});

	it('has a prefix of 622653 and a length of 19', function() {
		assert(detectNetwork('6226530292876305926') === 'China UnionPay');
	});

	it('has a prefix of 622654 and a length of 19', function() {
		assert(detectNetwork('6226546288365603203') === 'China UnionPay');
	});

	it('has a prefix of 622655 and a length of 19', function() {
		assert(detectNetwork('6226552274748706513') === 'China UnionPay');
	});

	it('has a prefix of 622656 and a length of 19', function() {
		assert(detectNetwork('6226560492243607389') === 'China UnionPay');
	});

	it('has a prefix of 622657 and a length of 19', function() {
		assert(detectNetwork('6226579341300781823') === 'China UnionPay');
	});

	it('has a prefix of 622658 and a length of 19', function() {
		assert(detectNetwork('6226582308593702903') === 'China UnionPay');
	});

	it('has a prefix of 622659 and a length of 19', function() {
		assert(detectNetwork('6226594705335990243') === 'China UnionPay');
	});

	it('has a prefix of 622660 and a length of 19', function() {
		assert(detectNetwork('6226602978839558221') === 'China UnionPay');
	});

	it('has a prefix of 622661 and a length of 19', function() {
		assert(detectNetwork('6226618192979899990') === 'China UnionPay');
	});

	it('has a prefix of 622662 and a length of 19', function() {
		assert(detectNetwork('6226624763483606416') === 'China UnionPay');
	});

	it('has a prefix of 622663 and a length of 19', function() {
		assert(detectNetwork('6226636409453626236') === 'China UnionPay');
	});

	it('has a prefix of 622664 and a length of 19', function() {
		assert(detectNetwork('6226647862377304754') === 'China UnionPay');
	});

	it('has a prefix of 622665 and a length of 19', function() {
		assert(detectNetwork('6226659917893142651') === 'China UnionPay');
	});

	it('has a prefix of 622666 and a length of 19', function() {
		assert(detectNetwork('6226664626318906250') === 'China UnionPay');
	});

	it('has a prefix of 622667 and a length of 19', function() {
		assert(detectNetwork('6226674943241469676') === 'China UnionPay');
	});

	it('has a prefix of 622668 and a length of 19', function() {
		assert(detectNetwork('6226680057365549156') === 'China UnionPay');
	});

	it('has a prefix of 622669 and a length of 19', function() {
		assert(detectNetwork('6226696632682313613') === 'China UnionPay');
	});

	it('has a prefix of 622670 and a length of 19', function() {
		assert(detectNetwork('6226709008934957406') === 'China UnionPay');
	});

	it('has a prefix of 622671 and a length of 19', function() {
		assert(detectNetwork('6226717005816104143') === 'China UnionPay');
	});

	it('has a prefix of 622672 and a length of 19', function() {
		assert(detectNetwork('6226725415163435188') === 'China UnionPay');
	});

	it('has a prefix of 622673 and a length of 19', function() {
		assert(detectNetwork('6226735408166386440') === 'China UnionPay');
	});

	it('has a prefix of 622674 and a length of 19', function() {
		assert(detectNetwork('6226741002797677388') === 'China UnionPay');
	});

	it('has a prefix of 622675 and a length of 19', function() {
		assert(detectNetwork('6226751449479036574') === 'China UnionPay');
	});

	it('has a prefix of 622676 and a length of 19', function() {
		assert(detectNetwork('6226760104741654993') === 'China UnionPay');
	});

	it('has a prefix of 622677 and a length of 19', function() {
		assert(detectNetwork('6226770286653416086') === 'China UnionPay');
	});

	it('has a prefix of 622678 and a length of 19', function() {
		assert(detectNetwork('6226782783251981547') === 'China UnionPay');
	});

	it('has a prefix of 622679 and a length of 19', function() {
		assert(detectNetwork('6226797841805679509') === 'China UnionPay');
	});

	it('has a prefix of 622680 and a length of 19', function() {
		assert(detectNetwork('6226804397931197491') === 'China UnionPay');
	});

	it('has a prefix of 622681 and a length of 19', function() {
		assert(detectNetwork('6226813567074358073') === 'China UnionPay');
	});

	it('has a prefix of 622682 and a length of 19', function() {
		assert(detectNetwork('6226822008945127983') === 'China UnionPay');
	});

	it('has a prefix of 622683 and a length of 19', function() {
		assert(detectNetwork('6226837293535193291') === 'China UnionPay');
	});

	it('has a prefix of 622684 and a length of 19', function() {
		assert(detectNetwork('6226842196844273187') === 'China UnionPay');
	});

	it('has a prefix of 622685 and a length of 19', function() {
		assert(detectNetwork('6226856824936450322') === 'China UnionPay');
	});

	it('has a prefix of 622686 and a length of 19', function() {
		assert(detectNetwork('6226866271576293122') === 'China UnionPay');
	});

	it('has a prefix of 622687 and a length of 19', function() {
		assert(detectNetwork('6226876009574630165') === 'China UnionPay');
	});

	it('has a prefix of 622688 and a length of 19', function() {
		assert(detectNetwork('6226884552227065120') === 'China UnionPay');
	});

	it('has a prefix of 622689 and a length of 19', function() {
		assert(detectNetwork('6226890205902544313') === 'China UnionPay');
	});

	it('has a prefix of 622690 and a length of 19', function() {
		assert(detectNetwork('6226904075821546326') === 'China UnionPay');
	});

	it('has a prefix of 622691 and a length of 19', function() {
		assert(detectNetwork('6226912344192008865') === 'China UnionPay');
	});

	it('has a prefix of 622692 and a length of 19', function() {
		assert(detectNetwork('6226924056268530909') === 'China UnionPay');
	});

	it('has a prefix of 622693 and a length of 19', function() {
		assert(detectNetwork('6226930910704326610') === 'China UnionPay');
	});

	it('has a prefix of 622694 and a length of 19', function() {
		assert(detectNetwork('6226949246614502267') === 'China UnionPay');
	});

	it('has a prefix of 622695 and a length of 19', function() {
		assert(detectNetwork('6226954580754261676') === 'China UnionPay');
	});

	it('has a prefix of 622696 and a length of 19', function() {
		assert(detectNetwork('6226963131198764690') === 'China UnionPay');
	});

	it('has a prefix of 622697 and a length of 19', function() {
		assert(detectNetwork('6226973990687851251') === 'China UnionPay');
	});

	it('has a prefix of 622698 and a length of 19', function() {
		assert(detectNetwork('6226989913042526332') === 'China UnionPay');
	});

	it('has a prefix of 622699 and a length of 19', function() {
		assert(detectNetwork('6226995154615341506') === 'China UnionPay');
	});

	it('has a prefix of 622700 and a length of 19', function() {
		assert(detectNetwork('6227000977758166959') === 'China UnionPay');
	});

	it('has a prefix of 622701 and a length of 19', function() {
		assert(detectNetwork('6227015198252067612') === 'China UnionPay');
	});

	it('has a prefix of 622702 and a length of 19', function() {
		assert(detectNetwork('6227022722792041822') === 'China UnionPay');
	});

	it('has a prefix of 622703 and a length of 19', function() {
		assert(detectNetwork('6227037172054920201') === 'China UnionPay');
	});

	it('has a prefix of 622704 and a length of 19', function() {
		assert(detectNetwork('6227040094951836460') === 'China UnionPay');
	});

	it('has a prefix of 622705 and a length of 19', function() {
		assert(detectNetwork('6227059502526779795') === 'China UnionPay');
	});

	it('has a prefix of 622706 and a length of 19', function() {
		assert(detectNetwork('6227066852541441025') === 'China UnionPay');
	});

	it('has a prefix of 622707 and a length of 19', function() {
		assert(detectNetwork('6227076812713077842') === 'China UnionPay');
	});

	it('has a prefix of 622708 and a length of 19', function() {
		assert(detectNetwork('6227082492710759082') === 'China UnionPay');
	});

	it('has a prefix of 622709 and a length of 19', function() {
		assert(detectNetwork('6227090775666228305') === 'China UnionPay');
	});

	it('has a prefix of 622710 and a length of 19', function() {
		assert(detectNetwork('6227107887555676554') === 'China UnionPay');
	});

	it('has a prefix of 622711 and a length of 19', function() {
		assert(detectNetwork('6227119363024069909') === 'China UnionPay');
	});

	it('has a prefix of 622712 and a length of 19', function() {
		assert(detectNetwork('6227123244215225428') === 'China UnionPay');
	});

	it('has a prefix of 622713 and a length of 19', function() {
		assert(detectNetwork('6227134639022321658') === 'China UnionPay');
	});

	it('has a prefix of 622714 and a length of 19', function() {
		assert(detectNetwork('6227149911234443430') === 'China UnionPay');
	});

	it('has a prefix of 622715 and a length of 19', function() {
		assert(detectNetwork('6227152934787473954') === 'China UnionPay');
	});

	it('has a prefix of 622716 and a length of 19', function() {
		assert(detectNetwork('6227163722817550306') === 'China UnionPay');
	});

	it('has a prefix of 622717 and a length of 19', function() {
		assert(detectNetwork('6227173604013185383') === 'China UnionPay');
	});

	it('has a prefix of 622718 and a length of 19', function() {
		assert(detectNetwork('6227180660683190738') === 'China UnionPay');
	});

	it('has a prefix of 622719 and a length of 19', function() {
		assert(detectNetwork('6227193277122586826') === 'China UnionPay');
	});

	it('has a prefix of 622720 and a length of 19', function() {
		assert(detectNetwork('6227204273781491602') === 'China UnionPay');
	});

	it('has a prefix of 622721 and a length of 19', function() {
		assert(detectNetwork('6227211116269383399') === 'China UnionPay');
	});

	it('has a prefix of 622722 and a length of 19', function() {
		assert(detectNetwork('6227220358226093131') === 'China UnionPay');
	});

	it('has a prefix of 622723 and a length of 19', function() {
		assert(detectNetwork('6227237680536542111') === 'China UnionPay');
	});

	it('has a prefix of 622724 and a length of 19', function() {
		assert(detectNetwork('6227243314856913218') === 'China UnionPay');
	});

	it('has a prefix of 622725 and a length of 19', function() {
		assert(detectNetwork('6227250703850961839') === 'China UnionPay');
	});

	it('has a prefix of 622726 and a length of 19', function() {
		assert(detectNetwork('6227267954554106702') === 'China UnionPay');
	});

	it('has a prefix of 622727 and a length of 19', function() {
		assert(detectNetwork('6227275048217254658') === 'China UnionPay');
	});

	it('has a prefix of 622728 and a length of 19', function() {
		assert(detectNetwork('6227288541036999863') === 'China UnionPay');
	});

	it('has a prefix of 622729 and a length of 19', function() {
		assert(detectNetwork('6227290899467764161') === 'China UnionPay');
	});

	it('has a prefix of 622730 and a length of 19', function() {
		assert(detectNetwork('6227305201417195709') === 'China UnionPay');
	});

	it('has a prefix of 622731 and a length of 19', function() {
		assert(detectNetwork('6227314190399358201') === 'China UnionPay');
	});

	it('has a prefix of 622732 and a length of 19', function() {
		assert(detectNetwork('6227322494503980144') === 'China UnionPay');
	});

	it('has a prefix of 622733 and a length of 19', function() {
		assert(detectNetwork('6227333428608975068') === 'China UnionPay');
	});

	it('has a prefix of 622734 and a length of 19', function() {
		assert(detectNetwork('6227348906306433311') === 'China UnionPay');
	});

	it('has a prefix of 622735 and a length of 19', function() {
		assert(detectNetwork('6227353941310851218') === 'China UnionPay');
	});

	it('has a prefix of 622736 and a length of 19', function() {
		assert(detectNetwork('6227364528860409846') === 'China UnionPay');
	});

	it('has a prefix of 622737 and a length of 19', function() {
		assert(detectNetwork('6227372011966314304') === 'China UnionPay');
	});

	it('has a prefix of 622738 and a length of 19', function() {
		assert(detectNetwork('6227388791355639928') === 'China UnionPay');
	});

	it('has a prefix of 622739 and a length of 19', function() {
		assert(detectNetwork('6227392342995697238') === 'China UnionPay');
	});

	it('has a prefix of 622740 and a length of 19', function() {
		assert(detectNetwork('6227403843755973745') === 'China UnionPay');
	});

	it('has a prefix of 622741 and a length of 19', function() {
		assert(detectNetwork('6227418118289405937') === 'China UnionPay');
	});

	it('has a prefix of 622742 and a length of 19', function() {
		assert(detectNetwork('6227421510484270723') === 'China UnionPay');
	});

	it('has a prefix of 622743 and a length of 19', function() {
		assert(detectNetwork('6227437976139138196') === 'China UnionPay');
	});

	it('has a prefix of 622744 and a length of 19', function() {
		assert(detectNetwork('6227444210502741004') === 'China UnionPay');
	});

	it('has a prefix of 622745 and a length of 19', function() {
		assert(detectNetwork('6227458461701092944') === 'China UnionPay');
	});

	it('has a prefix of 622746 and a length of 19', function() {
		assert(detectNetwork('6227462775684121358') === 'China UnionPay');
	});

	it('has a prefix of 622747 and a length of 19', function() {
		assert(detectNetwork('6227474905931444544') === 'China UnionPay');
	});

	it('has a prefix of 622748 and a length of 19', function() {
		assert(detectNetwork('6227483787426419061') === 'China UnionPay');
	});

	it('has a prefix of 622749 and a length of 19', function() {
		assert(detectNetwork('6227492723287901465') === 'China UnionPay');
	});

	it('has a prefix of 622750 and a length of 19', function() {
		assert(detectNetwork('6227500971347005315') === 'China UnionPay');
	});

	it('has a prefix of 622751 and a length of 19', function() {
		assert(detectNetwork('6227519102274041007') === 'China UnionPay');
	});

	it('has a prefix of 622752 and a length of 19', function() {
		assert(detectNetwork('6227523807891996820') === 'China UnionPay');
	});

	it('has a prefix of 622753 and a length of 19', function() {
		assert(detectNetwork('6227531236512250456') === 'China UnionPay');
	});

	it('has a prefix of 622754 and a length of 19', function() {
		assert(detectNetwork('6227542300553243621') === 'China UnionPay');
	});

	it('has a prefix of 622755 and a length of 19', function() {
		assert(detectNetwork('6227556897305122874') === 'China UnionPay');
	});

	it('has a prefix of 622756 and a length of 19', function() {
		assert(detectNetwork('6227562861988232138') === 'China UnionPay');
	});

	it('has a prefix of 622757 and a length of 19', function() {
		assert(detectNetwork('6227575836589112034') === 'China UnionPay');
	});

	it('has a prefix of 622758 and a length of 19', function() {
		assert(detectNetwork('6227588602727283287') === 'China UnionPay');
	});

	it('has a prefix of 622759 and a length of 19', function() {
		assert(detectNetwork('6227599731181122816') === 'China UnionPay');
	});

	it('has a prefix of 622760 and a length of 19', function() {
		assert(detectNetwork('6227607260476854576') === 'China UnionPay');
	});

	it('has a prefix of 622761 and a length of 19', function() {
		assert(detectNetwork('6227612737151653581') === 'China UnionPay');
	});

	it('has a prefix of 622762 and a length of 19', function() {
		assert(detectNetwork('6227623051448954349') === 'China UnionPay');
	});

	it('has a prefix of 622763 and a length of 19', function() {
		assert(detectNetwork('6227635207377268844') === 'China UnionPay');
	});

	it('has a prefix of 622764 and a length of 19', function() {
		assert(detectNetwork('6227641166304811487') === 'China UnionPay');
	});

	it('has a prefix of 622765 and a length of 19', function() {
		assert(detectNetwork('6227655988421679129') === 'China UnionPay');
	});

	it('has a prefix of 622766 and a length of 19', function() {
		assert(detectNetwork('6227669429379272107') === 'China UnionPay');
	});

	it('has a prefix of 622767 and a length of 19', function() {
		assert(detectNetwork('6227670369184095197') === 'China UnionPay');
	});

	it('has a prefix of 622768 and a length of 19', function() {
		assert(detectNetwork('6227686022828609429') === 'China UnionPay');
	});

	it('has a prefix of 622769 and a length of 19', function() {
		assert(detectNetwork('6227697049906648925') === 'China UnionPay');
	});

	it('has a prefix of 622770 and a length of 19', function() {
		assert(detectNetwork('6227707222045261161') === 'China UnionPay');
	});

	it('has a prefix of 622771 and a length of 19', function() {
		assert(detectNetwork('6227714539215878964') === 'China UnionPay');
	});

	it('has a prefix of 622772 and a length of 19', function() {
		assert(detectNetwork('6227727432355504480') === 'China UnionPay');
	});

	it('has a prefix of 622773 and a length of 19', function() {
		assert(detectNetwork('6227733436248709033') === 'China UnionPay');
	});

	it('has a prefix of 622774 and a length of 19', function() {
		assert(detectNetwork('6227741434610337961') === 'China UnionPay');
	});

	it('has a prefix of 622775 and a length of 19', function() {
		assert(detectNetwork('6227759830996353210') === 'China UnionPay');
	});

	it('has a prefix of 622776 and a length of 19', function() {
		assert(detectNetwork('6227760226888970436') === 'China UnionPay');
	});

	it('has a prefix of 622777 and a length of 19', function() {
		assert(detectNetwork('6227773566205751808') === 'China UnionPay');
	});

	it('has a prefix of 622778 and a length of 19', function() {
		assert(detectNetwork('6227786618028909597') === 'China UnionPay');
	});

	it('has a prefix of 622779 and a length of 19', function() {
		assert(detectNetwork('6227791476841023517') === 'China UnionPay');
	});

	it('has a prefix of 622780 and a length of 19', function() {
		assert(detectNetwork('6227805061505838168') === 'China UnionPay');
	});

	it('has a prefix of 622781 and a length of 19', function() {
		assert(detectNetwork('6227819312082009279') === 'China UnionPay');
	});

	it('has a prefix of 622782 and a length of 19', function() {
		assert(detectNetwork('6227826957594134477') === 'China UnionPay');
	});

	it('has a prefix of 622783 and a length of 19', function() {
		assert(detectNetwork('6227837838313309465') === 'China UnionPay');
	});

	it('has a prefix of 622784 and a length of 19', function() {
		assert(detectNetwork('6227844524474351084') === 'China UnionPay');
	});

	it('has a prefix of 622785 and a length of 19', function() {
		assert(detectNetwork('6227851491757458718') === 'China UnionPay');
	});

	it('has a prefix of 622786 and a length of 19', function() {
		assert(detectNetwork('6227861161910716784') === 'China UnionPay');
	});

	it('has a prefix of 622787 and a length of 19', function() {
		assert(detectNetwork('6227873761331086130') === 'China UnionPay');
	});

	it('has a prefix of 622788 and a length of 19', function() {
		assert(detectNetwork('6227884321527598355') === 'China UnionPay');
	});

	it('has a prefix of 622789 and a length of 19', function() {
		assert(detectNetwork('6227890237133037994') === 'China UnionPay');
	});

	it('has a prefix of 622790 and a length of 19', function() {
		assert(detectNetwork('6227901034350033303') === 'China UnionPay');
	});

	it('has a prefix of 622791 and a length of 19', function() {
		assert(detectNetwork('6227918308692513125') === 'China UnionPay');
	});

	it('has a prefix of 622792 and a length of 19', function() {
		assert(detectNetwork('6227924319220137240') === 'China UnionPay');
	});

	it('has a prefix of 622793 and a length of 19', function() {
		assert(detectNetwork('6227930080036998959') === 'China UnionPay');
	});

	it('has a prefix of 622794 and a length of 19', function() {
		assert(detectNetwork('6227944471241377065') === 'China UnionPay');
	});

	it('has a prefix of 622795 and a length of 19', function() {
		assert(detectNetwork('6227953208004612821') === 'China UnionPay');
	});

	it('has a prefix of 622796 and a length of 19', function() {
		assert(detectNetwork('6227960770000144560') === 'China UnionPay');
	});

	it('has a prefix of 622797 and a length of 19', function() {
		assert(detectNetwork('6227971378344805928') === 'China UnionPay');
	});

	it('has a prefix of 622798 and a length of 19', function() {
		assert(detectNetwork('6227989345482747604') === 'China UnionPay');
	});

	it('has a prefix of 622799 and a length of 19', function() {
		assert(detectNetwork('6227997138291570815') === 'China UnionPay');
	});

	it('has a prefix of 622800 and a length of 19', function() {
		assert(detectNetwork('6228001724756539616') === 'China UnionPay');
	});

	it('has a prefix of 622801 and a length of 19', function() {
		assert(detectNetwork('6228015521477134408') === 'China UnionPay');
	});

	it('has a prefix of 622802 and a length of 19', function() {
		assert(detectNetwork('6228025488061016546') === 'China UnionPay');
	});

	it('has a prefix of 622803 and a length of 19', function() {
		assert(detectNetwork('6228033532262451815') === 'China UnionPay');
	});

	it('has a prefix of 622804 and a length of 19', function() {
		assert(detectNetwork('6228043707292279549') === 'China UnionPay');
	});

	it('has a prefix of 622805 and a length of 19', function() {
		assert(detectNetwork('6228058374939522630') === 'China UnionPay');
	});

	it('has a prefix of 622806 and a length of 19', function() {
		assert(detectNetwork('6228064351159299978') === 'China UnionPay');
	});

	it('has a prefix of 622807 and a length of 19', function() {
		assert(detectNetwork('6228071435969533546') === 'China UnionPay');
	});

	it('has a prefix of 622808 and a length of 19', function() {
		assert(detectNetwork('6228086861613547047') === 'China UnionPay');
	});

	it('has a prefix of 622809 and a length of 19', function() {
		assert(detectNetwork('6228093060511317643') === 'China UnionPay');
	});

	it('has a prefix of 622810 and a length of 19', function() {
		assert(detectNetwork('6228105282095209199') === 'China UnionPay');
	});

	it('has a prefix of 622811 and a length of 19', function() {
		assert(detectNetwork('6228117462352435777') === 'China UnionPay');
	});

	it('has a prefix of 622812 and a length of 19', function() {
		assert(detectNetwork('6228122408939840811') === 'China UnionPay');
	});

	it('has a prefix of 622813 and a length of 19', function() {
		assert(detectNetwork('6228133816672703245') === 'China UnionPay');
	});

	it('has a prefix of 622814 and a length of 19', function() {
		assert(detectNetwork('6228140808519985720') === 'China UnionPay');
	});

	it('has a prefix of 622815 and a length of 19', function() {
		assert(detectNetwork('6228154034467009463') === 'China UnionPay');
	});

	it('has a prefix of 622816 and a length of 19', function() {
		assert(detectNetwork('6228163392117772268') === 'China UnionPay');
	});

	it('has a prefix of 622817 and a length of 19', function() {
		assert(detectNetwork('6228171128534779027') === 'China UnionPay');
	});

	it('has a prefix of 622818 and a length of 19', function() {
		assert(detectNetwork('6228180539793835946') === 'China UnionPay');
	});

	it('has a prefix of 622819 and a length of 19', function() {
		assert(detectNetwork('6228194258592351503') === 'China UnionPay');
	});

	it('has a prefix of 622820 and a length of 19', function() {
		assert(detectNetwork('6228201668115591032') === 'China UnionPay');
	});

	it('has a prefix of 622821 and a length of 19', function() {
		assert(detectNetwork('6228217971130047227') === 'China UnionPay');
	});

	it('has a prefix of 622822 and a length of 19', function() {
		assert(detectNetwork('6228229385114044581') === 'China UnionPay');
	});

	it('has a prefix of 622823 and a length of 19', function() {
		assert(detectNetwork('6228235402681691623') === 'China UnionPay');
	});

	it('has a prefix of 622824 and a length of 19', function() {
		assert(detectNetwork('6228244697874094352') === 'China UnionPay');
	});

	it('has a prefix of 622825 and a length of 19', function() {
		assert(detectNetwork('6228255875286171280') === 'China UnionPay');
	});

	it('has a prefix of 622826 and a length of 19', function() {
		assert(detectNetwork('6228266884720818379') === 'China UnionPay');
	});

	it('has a prefix of 622827 and a length of 19', function() {
		assert(detectNetwork('6228277017518935318') === 'China UnionPay');
	});

	it('has a prefix of 622828 and a length of 19', function() {
		assert(detectNetwork('6228285534899239272') === 'China UnionPay');
	});

	it('has a prefix of 622829 and a length of 19', function() {
		assert(detectNetwork('6228295460441217640') === 'China UnionPay');
	});

	it('has a prefix of 622830 and a length of 19', function() {
		assert(detectNetwork('6228308731901626065') === 'China UnionPay');
	});

	it('has a prefix of 622831 and a length of 19', function() {
		assert(detectNetwork('6228317599924302772') === 'China UnionPay');
	});

	it('has a prefix of 622832 and a length of 19', function() {
		assert(detectNetwork('6228320108740334260') === 'China UnionPay');
	});

	it('has a prefix of 622833 and a length of 19', function() {
		assert(detectNetwork('6228335213552281448') === 'China UnionPay');
	});

	it('has a prefix of 622834 and a length of 19', function() {
		assert(detectNetwork('6228348093867373189') === 'China UnionPay');
	});

	it('has a prefix of 622835 and a length of 19', function() {
		assert(detectNetwork('6228353112996062644') === 'China UnionPay');
	});

	it('has a prefix of 622836 and a length of 19', function() {
		assert(detectNetwork('6228366512699129282') === 'China UnionPay');
	});

	it('has a prefix of 622837 and a length of 19', function() {
		assert(detectNetwork('6228373572793501500') === 'China UnionPay');
	});

	it('has a prefix of 622838 and a length of 19', function() {
		assert(detectNetwork('6228382711113529958') === 'China UnionPay');
	});

	it('has a prefix of 622839 and a length of 19', function() {
		assert(detectNetwork('6228391909896755552') === 'China UnionPay');
	});

	it('has a prefix of 622840 and a length of 19', function() {
		assert(detectNetwork('6228406957980031561') === 'China UnionPay');
	});

	it('has a prefix of 622841 and a length of 19', function() {
		assert(detectNetwork('6228412790041111054') === 'China UnionPay');
	});

	it('has a prefix of 622842 and a length of 19', function() {
		assert(detectNetwork('6228428037721818905') === 'China UnionPay');
	});

	it('has a prefix of 622843 and a length of 19', function() {
		assert(detectNetwork('6228430452735530652') === 'China UnionPay');
	});

	it('has a prefix of 622844 and a length of 19', function() {
		assert(detectNetwork('6228448351313033456') === 'China UnionPay');
	});

	it('has a prefix of 622845 and a length of 19', function() {
		assert(detectNetwork('6228451631545139315') === 'China UnionPay');
	});

	it('has a prefix of 622846 and a length of 19', function() {
		assert(detectNetwork('6228461883811269139') === 'China UnionPay');
	});

	it('has a prefix of 622847 and a length of 19', function() {
		assert(detectNetwork('6228479620472873702') === 'China UnionPay');
	});

	it('has a prefix of 622848 and a length of 19', function() {
		assert(detectNetwork('6228482014173582534') === 'China UnionPay');
	});

	it('has a prefix of 622849 and a length of 19', function() {
		assert(detectNetwork('6228493481307795286') === 'China UnionPay');
	});

	it('has a prefix of 622850 and a length of 19', function() {
		assert(detectNetwork('6228506396802113646') === 'China UnionPay');
	});

	it('has a prefix of 622851 and a length of 19', function() {
		assert(detectNetwork('6228515759980398900') === 'China UnionPay');
	});

	it('has a prefix of 622852 and a length of 19', function() {
		assert(detectNetwork('6228521760552132990') === 'China UnionPay');
	});

	it('has a prefix of 622853 and a length of 19', function() {
		assert(detectNetwork('6228535407073763762') === 'China UnionPay');
	});

	it('has a prefix of 622854 and a length of 19', function() {
		assert(detectNetwork('6228548700182388756') === 'China UnionPay');
	});

	it('has a prefix of 622855 and a length of 19', function() {
		assert(detectNetwork('6228559066128210568') === 'China UnionPay');
	});

	it('has a prefix of 622856 and a length of 19', function() {
		assert(detectNetwork('6228562181193975088') === 'China UnionPay');
	});

	it('has a prefix of 622857 and a length of 19', function() {
		assert(detectNetwork('6228575305047575203') === 'China UnionPay');
	});

	it('has a prefix of 622858 and a length of 19', function() {
		assert(detectNetwork('6228585224523058688') === 'China UnionPay');
	});

	it('has a prefix of 622859 and a length of 19', function() {
		assert(detectNetwork('6228596141556671038') === 'China UnionPay');
	});

	it('has a prefix of 622860 and a length of 19', function() {
		assert(detectNetwork('6228609298915896631') === 'China UnionPay');
	});

	it('has a prefix of 622861 and a length of 19', function() {
		assert(detectNetwork('6228616842068223815') === 'China UnionPay');
	});

	it('has a prefix of 622862 and a length of 19', function() {
		assert(detectNetwork('6228621470943012630') === 'China UnionPay');
	});

	it('has a prefix of 622863 and a length of 19', function() {
		assert(detectNetwork('6228636986005258504') === 'China UnionPay');
	});

	it('has a prefix of 622864 and a length of 19', function() {
		assert(detectNetwork('6228644580856192861') === 'China UnionPay');
	});

	it('has a prefix of 622865 and a length of 19', function() {
		assert(detectNetwork('6228650588327848435') === 'China UnionPay');
	});

	it('has a prefix of 622866 and a length of 19', function() {
		assert(detectNetwork('6228662872078263005') === 'China UnionPay');
	});

	it('has a prefix of 622867 and a length of 19', function() {
		assert(detectNetwork('6228678423024507199') === 'China UnionPay');
	});

	it('has a prefix of 622868 and a length of 19', function() {
		assert(detectNetwork('6228688987674964317') === 'China UnionPay');
	});

	it('has a prefix of 622869 and a length of 19', function() {
		assert(detectNetwork('6228698847670093373') === 'China UnionPay');
	});

	it('has a prefix of 622870 and a length of 19', function() {
		assert(detectNetwork('6228703731704479689') === 'China UnionPay');
	});

	it('has a prefix of 622871 and a length of 19', function() {
		assert(detectNetwork('6228713343006376910') === 'China UnionPay');
	});

	it('has a prefix of 622872 and a length of 19', function() {
		assert(detectNetwork('6228720089198782370') === 'China UnionPay');
	});

	it('has a prefix of 622873 and a length of 19', function() {
		assert(detectNetwork('6228734752646826298') === 'China UnionPay');
	});

	it('has a prefix of 622874 and a length of 19', function() {
		assert(detectNetwork('6228741591547309339') === 'China UnionPay');
	});

	it('has a prefix of 622875 and a length of 19', function() {
		assert(detectNetwork('6228757707235323502') === 'China UnionPay');
	});

	it('has a prefix of 622876 and a length of 19', function() {
		assert(detectNetwork('6228769475596286512') === 'China UnionPay');
	});

	it('has a prefix of 622877 and a length of 19', function() {
		assert(detectNetwork('6228775137362454581') === 'China UnionPay');
	});

	it('has a prefix of 622878 and a length of 19', function() {
		assert(detectNetwork('6228781454777270630') === 'China UnionPay');
	});

	it('has a prefix of 622879 and a length of 19', function() {
		assert(detectNetwork('6228799760178407037') === 'China UnionPay');
	});

	it('has a prefix of 622880 and a length of 19', function() {
		assert(detectNetwork('6228806430094994011') === 'China UnionPay');
	});

	it('has a prefix of 622881 and a length of 19', function() {
		assert(detectNetwork('6228813323665666805') === 'China UnionPay');
	});

	it('has a prefix of 622882 and a length of 19', function() {
		assert(detectNetwork('6228823956287868373') === 'China UnionPay');
	});

	it('has a prefix of 622883 and a length of 19', function() {
		assert(detectNetwork('6228837532820940784') === 'China UnionPay');
	});

	it('has a prefix of 622884 and a length of 19', function() {
		assert(detectNetwork('6228842265477304130') === 'China UnionPay');
	});

	it('has a prefix of 622885 and a length of 19', function() {
		assert(detectNetwork('6228851883375975807') === 'China UnionPay');
	});

	it('has a prefix of 622886 and a length of 19', function() {
		assert(detectNetwork('6228863030528926353') === 'China UnionPay');
	});

	it('has a prefix of 622887 and a length of 19', function() {
		assert(detectNetwork('6228876079378382658') === 'China UnionPay');
	});

	it('has a prefix of 622888 and a length of 19', function() {
		assert(detectNetwork('6228884004328312093') === 'China UnionPay');
	});

	it('has a prefix of 622889 and a length of 19', function() {
		assert(detectNetwork('6228898045792078418') === 'China UnionPay');
	});

	it('has a prefix of 622890 and a length of 19', function() {
		assert(detectNetwork('6228905073941912385') === 'China UnionPay');
	});

	it('has a prefix of 622891 and a length of 19', function() {
		assert(detectNetwork('6228911146338022430') === 'China UnionPay');
	});

	it('has a prefix of 622892 and a length of 19', function() {
		assert(detectNetwork('6228927049999007139') === 'China UnionPay');
	});

	it('has a prefix of 622893 and a length of 19', function() {
		assert(detectNetwork('6228930631042103144') === 'China UnionPay');
	});

	it('has a prefix of 622894 and a length of 19', function() {
		assert(detectNetwork('6228940024749131503') === 'China UnionPay');
	});

	it('has a prefix of 622895 and a length of 19', function() {
		assert(detectNetwork('6228956629072548685') === 'China UnionPay');
	});

	it('has a prefix of 622896 and a length of 19', function() {
		assert(detectNetwork('6228965296323806107') === 'China UnionPay');
	});

	it('has a prefix of 622897 and a length of 19', function() {
		assert(detectNetwork('6228978714969685831') === 'China UnionPay');
	});

	it('has a prefix of 622898 and a length of 19', function() {
		assert(detectNetwork('6228981851340607080') === 'China UnionPay');
	});

	it('has a prefix of 622899 and a length of 19', function() {
		assert(detectNetwork('6228991520605896488') === 'China UnionPay');
	});

	it('has a prefix of 622900 and a length of 19', function() {
		assert(detectNetwork('6229006190765730737') === 'China UnionPay');
	});

	it('has a prefix of 622901 and a length of 19', function() {
		assert(detectNetwork('6229018064496633452') === 'China UnionPay');
	});

	it('has a prefix of 622902 and a length of 19', function() {
		assert(detectNetwork('6229023525964952031') === 'China UnionPay');
	});

	it('has a prefix of 622903 and a length of 19', function() {
		assert(detectNetwork('6229034903684908174') === 'China UnionPay');
	});

	it('has a prefix of 622904 and a length of 19', function() {
		assert(detectNetwork('6229045140767736606') === 'China UnionPay');
	});

	it('has a prefix of 622905 and a length of 19', function() {
		assert(detectNetwork('6229050025638348156') === 'China UnionPay');
	});

	it('has a prefix of 622906 and a length of 19', function() {
		assert(detectNetwork('6229067963060586058') === 'China UnionPay');
	});

	it('has a prefix of 622907 and a length of 19', function() {
		assert(detectNetwork('6229076374816749443') === 'China UnionPay');
	});

	it('has a prefix of 622908 and a length of 19', function() {
		assert(detectNetwork('6229085209851471603') === 'China UnionPay');
	});

	it('has a prefix of 622909 and a length of 19', function() {
		assert(detectNetwork('6229092261450219081') === 'China UnionPay');
	});

	it('has a prefix of 622910 and a length of 19', function() {
		assert(detectNetwork('6229103215867131363') === 'China UnionPay');
	});

	it('has a prefix of 622911 and a length of 19', function() {
		assert(detectNetwork('6229111123582262421') === 'China UnionPay');
	});

	it('has a prefix of 622912 and a length of 19', function() {
		assert(detectNetwork('6229128058815234781') === 'China UnionPay');
	});

	it('has a prefix of 622913 and a length of 19', function() {
		assert(detectNetwork('6229134204928429113') === 'China UnionPay');
	});

	it('has a prefix of 622914 and a length of 19', function() {
		assert(detectNetwork('6229147631984558820') === 'China UnionPay');
	});

	it('has a prefix of 622915 and a length of 19', function() {
		assert(detectNetwork('6229156796889878025') === 'China UnionPay');
	});

	it('has a prefix of 622916 and a length of 19', function() {
		assert(detectNetwork('6229161175331434995') === 'China UnionPay');
	});

	it('has a prefix of 622917 and a length of 19', function() {
		assert(detectNetwork('6229170398750854624') === 'China UnionPay');
	});

	it('has a prefix of 622918 and a length of 19', function() {
		assert(detectNetwork('6229182351332665611') === 'China UnionPay');
	});

	it('has a prefix of 622919 and a length of 19', function() {
		assert(detectNetwork('6229197848933155188') === 'China UnionPay');
	});

	it('has a prefix of 622920 and a length of 19', function() {
		assert(detectNetwork('6229209460280812389') === 'China UnionPay');
	});

	it('has a prefix of 622921 and a length of 19', function() {
		assert(detectNetwork('6229210552185940648') === 'China UnionPay');
	});

	it('has a prefix of 622922 and a length of 19', function() {
		assert(detectNetwork('6229224252072101448') === 'China UnionPay');
	});

	it('has a prefix of 622923 and a length of 19', function() {
		assert(detectNetwork('6229232933510441969') === 'China UnionPay');
	});

	it('has a prefix of 622924 and a length of 19', function() {
		assert(detectNetwork('6229249428416722240') === 'China UnionPay');
	});

	it('has a prefix of 622925 and a length of 19', function() {
		assert(detectNetwork('6229253731075722648') === 'China UnionPay');
	});

});