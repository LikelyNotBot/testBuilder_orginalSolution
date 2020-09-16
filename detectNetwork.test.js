// mochajs.org
// http://chaijs.com/

describe('American Express', function() {

	var assert = chai.assert;

	it('has a prefix of 34 and a length of 15', function() {
		assert(detectNetwork('348317992401265') === 'American Express');
	});

	it('has a prefix of 37 and a length of 15', function() {
		assert(detectNetwork('370982180912398') === 'American Express');
	});

});

describe('Diner\'s Club', function() {

	var assert = chai.assert;

	it('has a prefix of 38 and a length of 14', function() {
		assert(detectNetwork('38958520800768') === 'Diner\'s Club');
	});

	it('has a prefix of 39 and a length of 14', function() {
		assert(detectNetwork('39285506671843') === 'Diner\'s Club');
	});

});

describe('Visa', function() {

	var assert = chai.assert;

	it('has a prefix of 4 and a length of 13', function() {
		assert(detectNetwork('4861798448661') === 'Visa');
	});

	it('has a prefix of 4 and a length of 16', function() {
		assert(detectNetwork('4678266491302710') === 'Visa');
	});

	it('has a prefix of 4 and a length of 19', function() {
		assert(detectNetwork('4472099293071475701') === 'Visa');
	});

});

describe('MasterCard', function() {

	var assert = chai.assert;

	it('has a prefix of 51 and a length of 16', function() {
		assert(detectNetwork('5126166370976839') === 'MasterCard');
	});

	it('has a prefix of 52 and a length of 16', function() {
		assert(detectNetwork('5234391098902296') === 'MasterCard');
	});

	it('has a prefix of 53 and a length of 16', function() {
		assert(detectNetwork('5351859124333390') === 'MasterCard');
	});

	it('has a prefix of 54 and a length of 16', function() {
		assert(detectNetwork('5440705103330485') === 'MasterCard');
	});

	it('has a prefix of 55 and a length of 16', function() {
		assert(detectNetwork('5579343617416858') === 'MasterCard');
	});

});

describe('Maestro', function() {

	var assert = chai.assert;

	it('has a prefix of 5018 and a length of 12', function() {
		assert(detectNetwork('501881508661') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 12', function() {
		assert(detectNetwork('502044054615') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 12', function() {
		assert(detectNetwork('503887320284') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 12', function() {
		assert(detectNetwork('630495579532') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 13', function() {
		assert(detectNetwork('5018596829277') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 13', function() {
		assert(detectNetwork('5020554534492') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 13', function() {
		assert(detectNetwork('5038163841594') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 13', function() {
		assert(detectNetwork('6304561953285') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 14', function() {
		assert(detectNetwork('50184562684538') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 14', function() {
		assert(detectNetwork('50204235957552') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 14', function() {
		assert(detectNetwork('50385933561445') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 14', function() {
		assert(detectNetwork('63041432515829') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 15', function() {
		assert(detectNetwork('501836607890017') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 15', function() {
		assert(detectNetwork('502071725030795') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 15', function() {
		assert(detectNetwork('503823287831019') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 15', function() {
		assert(detectNetwork('630442980327430') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 16', function() {
		assert(detectNetwork('5018212357420680') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 16', function() {
		assert(detectNetwork('5020328855188223') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 16', function() {
		assert(detectNetwork('5038465400698457') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 16', function() {
		assert(detectNetwork('6304898532593099') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 17', function() {
		assert(detectNetwork('50186097068571826') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 17', function() {
		assert(detectNetwork('50206058846919044') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 17', function() {
		assert(detectNetwork('50387375786681895') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 17', function() {
		assert(detectNetwork('63044378721017452') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 18', function() {
		assert(detectNetwork('501846125855203664') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 18', function() {
		assert(detectNetwork('502093428161897375') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 18', function() {
		assert(detectNetwork('503843391419605465') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 18', function() {
		assert(detectNetwork('630495329899298275') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 19', function() {
		assert(detectNetwork('5018784942429212397') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 19', function() {
		assert(detectNetwork('5020915578783713470') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 19', function() {
		assert(detectNetwork('5038064386898091430') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 19', function() {
		assert(detectNetwork('6304199350945854422') === 'Maestro');
	});

});

describe('Discover', function() {

	var assert = chai.assert;

	it('has a prefix of 6011 and a length of 16', function() {
		assert(detectNetwork('6011895616076764') === 'Discover');
	});

	it('has a prefix of 644 and a length of 16', function() {
		assert(detectNetwork('6443717113030251') === 'Discover');
	});

	it('has a prefix of 645 and a length of 16', function() {
		assert(detectNetwork('6458759563678782') === 'Discover');
	});

	it('has a prefix of 646 and a length of 16', function() {
		assert(detectNetwork('6461630954087760') === 'Discover');
	});

	it('has a prefix of 647 and a length of 16', function() {
		assert(detectNetwork('6478529023249835') === 'Discover');
	});

	it('has a prefix of 648 and a length of 16', function() {
		assert(detectNetwork('6489965341705225') === 'Discover');
	});

	it('has a prefix of 649 and a length of 16', function() {
		assert(detectNetwork('6490056419844750') === 'Discover');
	});

	it('has a prefix of 65 and a length of 16', function() {
		assert(detectNetwork('6552363416368796') === 'Discover');
	});

	it('has a prefix of 6011 and a length of 19', function() {
		assert(detectNetwork('6011860914437825982') === 'Discover');
	});

	it('has a prefix of 644 and a length of 19', function() {
		assert(detectNetwork('6445798925996958433') === 'Discover');
	});

	it('has a prefix of 645 and a length of 19', function() {
		assert(detectNetwork('6455465496924971142') === 'Discover');
	});

	it('has a prefix of 646 and a length of 19', function() {
		assert(detectNetwork('6461193640626879313') === 'Discover');
	});

	it('has a prefix of 647 and a length of 19', function() {
		assert(detectNetwork('6471175691437432707') === 'Discover');
	});

	it('has a prefix of 648 and a length of 19', function() {
		assert(detectNetwork('6481799280018670656') === 'Discover');
	});

	it('has a prefix of 649 and a length of 19', function() {
		assert(detectNetwork('6495940488437643247') === 'Discover');
	});

	it('has a prefix of 65 and a length of 19', function() {
		assert(detectNetwork('6506324381002806055') === 'Discover');
	});

});

describe('China UnionPay', function() {

	var assert = chai.assert;

	it('has a prefix of 624 and a length of 16', function() {
		assert(detectNetwork('6249306406624944') === 'China UnionPay');
	});

	it('has a prefix of 625 and a length of 16', function() {
		assert(detectNetwork('6257882093760617') === 'China UnionPay');
	});

	it('has a prefix of 626 and a length of 16', function() {
		assert(detectNetwork('6264054095112859') === 'China UnionPay');
	});

	it('has a prefix of 6282 and a length of 16', function() {
		assert(detectNetwork('6282766376473256') === 'China UnionPay');
	});

	it('has a prefix of 6283 and a length of 16', function() {
		assert(detectNetwork('6283736622317690') === 'China UnionPay');
	});

	it('has a prefix of 6284 and a length of 16', function() {
		assert(detectNetwork('6284881352078563') === 'China UnionPay');
	});

	it('has a prefix of 6285 and a length of 16', function() {
		assert(detectNetwork('6285091416017690') === 'China UnionPay');
	});

	it('has a prefix of 6286 and a length of 16', function() {
		assert(detectNetwork('6286496580931938') === 'China UnionPay');
	});

	it('has a prefix of 6287 and a length of 16', function() {
		assert(detectNetwork('6287682178005476') === 'China UnionPay');
	});

	it('has a prefix of 6288 and a length of 16', function() {
		assert(detectNetwork('6288103028718839') === 'China UnionPay');
	});

	it('has a prefix of 622126 and a length of 16', function() {
		assert(detectNetwork('6221264992042327') === 'China UnionPay');
	});

	it('has a prefix of 622127 and a length of 16', function() {
		assert(detectNetwork('6221275527123006') === 'China UnionPay');
	});

	it('has a prefix of 622128 and a length of 16', function() {
		assert(detectNetwork('6221280997795481') === 'China UnionPay');
	});

	it('has a prefix of 622129 and a length of 16', function() {
		assert(detectNetwork('6221290920034270') === 'China UnionPay');
	});

	it('has a prefix of 622130 and a length of 16', function() {
		assert(detectNetwork('6221307198052374') === 'China UnionPay');
	});

	it('has a prefix of 622131 and a length of 16', function() {
		assert(detectNetwork('6221311529700154') === 'China UnionPay');
	});

	it('has a prefix of 622132 and a length of 16', function() {
		assert(detectNetwork('6221321643799682') === 'China UnionPay');
	});

	it('has a prefix of 622133 and a length of 16', function() {
		assert(detectNetwork('6221336028024081') === 'China UnionPay');
	});

	it('has a prefix of 622134 and a length of 16', function() {
		assert(detectNetwork('6221346810472248') === 'China UnionPay');
	});

	it('has a prefix of 622135 and a length of 16', function() {
		assert(detectNetwork('6221353030558532') === 'China UnionPay');
	});

	it('has a prefix of 622136 and a length of 16', function() {
		assert(detectNetwork('6221360264182200') === 'China UnionPay');
	});

	it('has a prefix of 622137 and a length of 16', function() {
		assert(detectNetwork('6221376922314881') === 'China UnionPay');
	});

	it('has a prefix of 622138 and a length of 16', function() {
		assert(detectNetwork('6221382507243895') === 'China UnionPay');
	});

	it('has a prefix of 622139 and a length of 16', function() {
		assert(detectNetwork('6221395153759869') === 'China UnionPay');
	});

	it('has a prefix of 622140 and a length of 16', function() {
		assert(detectNetwork('6221407070973828') === 'China UnionPay');
	});

	it('has a prefix of 622141 and a length of 16', function() {
		assert(detectNetwork('6221419549817894') === 'China UnionPay');
	});

	it('has a prefix of 622142 and a length of 16', function() {
		assert(detectNetwork('6221426714203012') === 'China UnionPay');
	});

	it('has a prefix of 622143 and a length of 16', function() {
		assert(detectNetwork('6221438960120616') === 'China UnionPay');
	});

	it('has a prefix of 622144 and a length of 16', function() {
		assert(detectNetwork('6221449415547729') === 'China UnionPay');
	});

	it('has a prefix of 622145 and a length of 16', function() {
		assert(detectNetwork('6221454313475253') === 'China UnionPay');
	});

	it('has a prefix of 622146 and a length of 16', function() {
		assert(detectNetwork('6221469964087666') === 'China UnionPay');
	});

	it('has a prefix of 622147 and a length of 16', function() {
		assert(detectNetwork('6221475292756869') === 'China UnionPay');
	});

	it('has a prefix of 622148 and a length of 16', function() {
		assert(detectNetwork('6221483776673990') === 'China UnionPay');
	});

	it('has a prefix of 622149 and a length of 16', function() {
		assert(detectNetwork('6221495985888466') === 'China UnionPay');
	});

	it('has a prefix of 622150 and a length of 16', function() {
		assert(detectNetwork('6221502044476302') === 'China UnionPay');
	});

	it('has a prefix of 622151 and a length of 16', function() {
		assert(detectNetwork('6221512770866262') === 'China UnionPay');
	});

	it('has a prefix of 622152 and a length of 16', function() {
		assert(detectNetwork('6221523061230329') === 'China UnionPay');
	});

	it('has a prefix of 622153 and a length of 16', function() {
		assert(detectNetwork('6221533711353948') === 'China UnionPay');
	});

	it('has a prefix of 622154 and a length of 16', function() {
		assert(detectNetwork('6221544575926148') === 'China UnionPay');
	});

	it('has a prefix of 622155 and a length of 16', function() {
		assert(detectNetwork('6221552616287758') === 'China UnionPay');
	});

	it('has a prefix of 622156 and a length of 16', function() {
		assert(detectNetwork('6221568921256333') === 'China UnionPay');
	});

	it('has a prefix of 622157 and a length of 16', function() {
		assert(detectNetwork('6221578718217843') === 'China UnionPay');
	});

	it('has a prefix of 622158 and a length of 16', function() {
		assert(detectNetwork('6221586338598325') === 'China UnionPay');
	});

	it('has a prefix of 622159 and a length of 16', function() {
		assert(detectNetwork('6221590252546823') === 'China UnionPay');
	});

	it('has a prefix of 622160 and a length of 16', function() {
		assert(detectNetwork('6221601829351889') === 'China UnionPay');
	});

	it('has a prefix of 622161 and a length of 16', function() {
		assert(detectNetwork('6221619095953494') === 'China UnionPay');
	});

	it('has a prefix of 622162 and a length of 16', function() {
		assert(detectNetwork('6221628967687105') === 'China UnionPay');
	});

	it('has a prefix of 622163 and a length of 16', function() {
		assert(detectNetwork('6221633658662524') === 'China UnionPay');
	});

	it('has a prefix of 622164 and a length of 16', function() {
		assert(detectNetwork('6221647573951966') === 'China UnionPay');
	});

	it('has a prefix of 622165 and a length of 16', function() {
		assert(detectNetwork('6221654158948598') === 'China UnionPay');
	});

	it('has a prefix of 622166 and a length of 16', function() {
		assert(detectNetwork('6221663524687743') === 'China UnionPay');
	});

	it('has a prefix of 622167 and a length of 16', function() {
		assert(detectNetwork('6221673561308290') === 'China UnionPay');
	});

	it('has a prefix of 622168 and a length of 16', function() {
		assert(detectNetwork('6221684201543368') === 'China UnionPay');
	});

	it('has a prefix of 622169 and a length of 16', function() {
		assert(detectNetwork('6221694666612479') === 'China UnionPay');
	});

	it('has a prefix of 622170 and a length of 16', function() {
		assert(detectNetwork('6221707100673626') === 'China UnionPay');
	});

	it('has a prefix of 622171 and a length of 16', function() {
		assert(detectNetwork('6221712401067386') === 'China UnionPay');
	});

	it('has a prefix of 622172 and a length of 16', function() {
		assert(detectNetwork('6221721291197074') === 'China UnionPay');
	});

	it('has a prefix of 622173 and a length of 16', function() {
		assert(detectNetwork('6221736635100663') === 'China UnionPay');
	});

	it('has a prefix of 622174 and a length of 16', function() {
		assert(detectNetwork('6221746517877396') === 'China UnionPay');
	});

	it('has a prefix of 622175 and a length of 16', function() {
		assert(detectNetwork('6221759000777870') === 'China UnionPay');
	});

	it('has a prefix of 622176 and a length of 16', function() {
		assert(detectNetwork('6221764810762536') === 'China UnionPay');
	});

	it('has a prefix of 622177 and a length of 16', function() {
		assert(detectNetwork('6221777925092794') === 'China UnionPay');
	});

	it('has a prefix of 622178 and a length of 16', function() {
		assert(detectNetwork('6221786230877668') === 'China UnionPay');
	});

	it('has a prefix of 622179 and a length of 16', function() {
		assert(detectNetwork('6221799075217214') === 'China UnionPay');
	});

	it('has a prefix of 622180 and a length of 16', function() {
		assert(detectNetwork('6221802919778313') === 'China UnionPay');
	});

	it('has a prefix of 622181 and a length of 16', function() {
		assert(detectNetwork('6221811984527689') === 'China UnionPay');
	});

	it('has a prefix of 622182 and a length of 16', function() {
		assert(detectNetwork('6221822401039553') === 'China UnionPay');
	});

	it('has a prefix of 622183 and a length of 16', function() {
		assert(detectNetwork('6221838869013606') === 'China UnionPay');
	});

	it('has a prefix of 622184 and a length of 16', function() {
		assert(detectNetwork('6221846758032271') === 'China UnionPay');
	});

	it('has a prefix of 622185 and a length of 16', function() {
		assert(detectNetwork('6221858582739920') === 'China UnionPay');
	});

	it('has a prefix of 622186 and a length of 16', function() {
		assert(detectNetwork('6221869675452303') === 'China UnionPay');
	});

	it('has a prefix of 622187 and a length of 16', function() {
		assert(detectNetwork('6221877753889575') === 'China UnionPay');
	});

	it('has a prefix of 622188 and a length of 16', function() {
		assert(detectNetwork('6221886517261610') === 'China UnionPay');
	});

	it('has a prefix of 622189 and a length of 16', function() {
		assert(detectNetwork('6221891140253435') === 'China UnionPay');
	});

	it('has a prefix of 622190 and a length of 16', function() {
		assert(detectNetwork('6221903062237210') === 'China UnionPay');
	});

	it('has a prefix of 622191 and a length of 16', function() {
		assert(detectNetwork('6221913003059896') === 'China UnionPay');
	});

	it('has a prefix of 622192 and a length of 16', function() {
		assert(detectNetwork('6221924800322483') === 'China UnionPay');
	});

	it('has a prefix of 622193 and a length of 16', function() {
		assert(detectNetwork('6221932911435801') === 'China UnionPay');
	});

	it('has a prefix of 622194 and a length of 16', function() {
		assert(detectNetwork('6221948503807194') === 'China UnionPay');
	});

	it('has a prefix of 622195 and a length of 16', function() {
		assert(detectNetwork('6221952138384543') === 'China UnionPay');
	});

	it('has a prefix of 622196 and a length of 16', function() {
		assert(detectNetwork('6221965525316519') === 'China UnionPay');
	});

	it('has a prefix of 622197 and a length of 16', function() {
		assert(detectNetwork('6221979929517680') === 'China UnionPay');
	});

	it('has a prefix of 622198 and a length of 16', function() {
		assert(detectNetwork('6221985047828488') === 'China UnionPay');
	});

	it('has a prefix of 622199 and a length of 16', function() {
		assert(detectNetwork('6221996613161003') === 'China UnionPay');
	});

	it('has a prefix of 622200 and a length of 16', function() {
		assert(detectNetwork('6222006933964784') === 'China UnionPay');
	});

	it('has a prefix of 622201 and a length of 16', function() {
		assert(detectNetwork('6222012522071927') === 'China UnionPay');
	});

	it('has a prefix of 622202 and a length of 16', function() {
		assert(detectNetwork('6222028487730529') === 'China UnionPay');
	});

	it('has a prefix of 622203 and a length of 16', function() {
		assert(detectNetwork('6222031060771220') === 'China UnionPay');
	});

	it('has a prefix of 622204 and a length of 16', function() {
		assert(detectNetwork('6222042667841148') === 'China UnionPay');
	});

	it('has a prefix of 622205 and a length of 16', function() {
		assert(detectNetwork('6222051624308800') === 'China UnionPay');
	});

	it('has a prefix of 622206 and a length of 16', function() {
		assert(detectNetwork('6222066893474867') === 'China UnionPay');
	});

	it('has a prefix of 622207 and a length of 16', function() {
		assert(detectNetwork('6222077483910540') === 'China UnionPay');
	});

	it('has a prefix of 622208 and a length of 16', function() {
		assert(detectNetwork('6222081958107696') === 'China UnionPay');
	});

	it('has a prefix of 622209 and a length of 16', function() {
		assert(detectNetwork('6222095047636318') === 'China UnionPay');
	});

	it('has a prefix of 622210 and a length of 16', function() {
		assert(detectNetwork('6222109683445909') === 'China UnionPay');
	});

	it('has a prefix of 622211 and a length of 16', function() {
		assert(detectNetwork('6222114137529341') === 'China UnionPay');
	});

	it('has a prefix of 622212 and a length of 16', function() {
		assert(detectNetwork('6222120281108757') === 'China UnionPay');
	});

	it('has a prefix of 622213 and a length of 16', function() {
		assert(detectNetwork('6222135251681054') === 'China UnionPay');
	});

	it('has a prefix of 622214 and a length of 16', function() {
		assert(detectNetwork('6222145282135992') === 'China UnionPay');
	});

	it('has a prefix of 622215 and a length of 16', function() {
		assert(detectNetwork('6222151381576732') === 'China UnionPay');
	});

	it('has a prefix of 622216 and a length of 16', function() {
		assert(detectNetwork('6222165246719929') === 'China UnionPay');
	});

	it('has a prefix of 622217 and a length of 16', function() {
		assert(detectNetwork('6222172586881485') === 'China UnionPay');
	});

	it('has a prefix of 622218 and a length of 16', function() {
		assert(detectNetwork('6222182745284960') === 'China UnionPay');
	});

	it('has a prefix of 622219 and a length of 16', function() {
		assert(detectNetwork('6222198103126486') === 'China UnionPay');
	});

	it('has a prefix of 622220 and a length of 16', function() {
		assert(detectNetwork('6222202581360533') === 'China UnionPay');
	});

	it('has a prefix of 622221 and a length of 16', function() {
		assert(detectNetwork('6222215601548691') === 'China UnionPay');
	});

	it('has a prefix of 622222 and a length of 16', function() {
		assert(detectNetwork('6222222956819247') === 'China UnionPay');
	});

	it('has a prefix of 622223 and a length of 16', function() {
		assert(detectNetwork('6222235272651026') === 'China UnionPay');
	});

	it('has a prefix of 622224 and a length of 16', function() {
		assert(detectNetwork('6222242993269031') === 'China UnionPay');
	});

	it('has a prefix of 622225 and a length of 16', function() {
		assert(detectNetwork('6222251089297732') === 'China UnionPay');
	});

	it('has a prefix of 622226 and a length of 16', function() {
		assert(detectNetwork('6222261331715725') === 'China UnionPay');
	});

	it('has a prefix of 622227 and a length of 16', function() {
		assert(detectNetwork('6222276706694877') === 'China UnionPay');
	});

	it('has a prefix of 622228 and a length of 16', function() {
		assert(detectNetwork('6222281397561380') === 'China UnionPay');
	});

	it('has a prefix of 622229 and a length of 16', function() {
		assert(detectNetwork('6222291963561356') === 'China UnionPay');
	});

	it('has a prefix of 622230 and a length of 16', function() {
		assert(detectNetwork('6222307389442382') === 'China UnionPay');
	});

	it('has a prefix of 622231 and a length of 16', function() {
		assert(detectNetwork('6222318336359382') === 'China UnionPay');
	});

	it('has a prefix of 622232 and a length of 16', function() {
		assert(detectNetwork('6222324048664681') === 'China UnionPay');
	});

	it('has a prefix of 622233 and a length of 16', function() {
		assert(detectNetwork('6222336526857611') === 'China UnionPay');
	});

	it('has a prefix of 622234 and a length of 16', function() {
		assert(detectNetwork('6222345477415746') === 'China UnionPay');
	});

	it('has a prefix of 622235 and a length of 16', function() {
		assert(detectNetwork('6222351123097514') === 'China UnionPay');
	});

	it('has a prefix of 622236 and a length of 16', function() {
		assert(detectNetwork('6222360989551460') === 'China UnionPay');
	});

	it('has a prefix of 622237 and a length of 16', function() {
		assert(detectNetwork('6222372622881793') === 'China UnionPay');
	});

	it('has a prefix of 622238 and a length of 16', function() {
		assert(detectNetwork('6222386273103418') === 'China UnionPay');
	});

	it('has a prefix of 622239 and a length of 16', function() {
		assert(detectNetwork('6222394516983026') === 'China UnionPay');
	});

	it('has a prefix of 622240 and a length of 16', function() {
		assert(detectNetwork('6222401832603355') === 'China UnionPay');
	});

	it('has a prefix of 622241 and a length of 16', function() {
		assert(detectNetwork('6222414839397875') === 'China UnionPay');
	});

	it('has a prefix of 622242 and a length of 16', function() {
		assert(detectNetwork('6222428589678623') === 'China UnionPay');
	});

	it('has a prefix of 622243 and a length of 16', function() {
		assert(detectNetwork('6222436086071314') === 'China UnionPay');
	});

	it('has a prefix of 622244 and a length of 16', function() {
		assert(detectNetwork('6222443487305887') === 'China UnionPay');
	});

	it('has a prefix of 622245 and a length of 16', function() {
		assert(detectNetwork('6222458478586827') === 'China UnionPay');
	});

	it('has a prefix of 622246 and a length of 16', function() {
		assert(detectNetwork('6222469947645142') === 'China UnionPay');
	});

	it('has a prefix of 622247 and a length of 16', function() {
		assert(detectNetwork('6222472377806458') === 'China UnionPay');
	});

	it('has a prefix of 622248 and a length of 16', function() {
		assert(detectNetwork('6222480820349339') === 'China UnionPay');
	});

	it('has a prefix of 622249 and a length of 16', function() {
		assert(detectNetwork('6222495866880112') === 'China UnionPay');
	});

	it('has a prefix of 622250 and a length of 16', function() {
		assert(detectNetwork('6222509062944038') === 'China UnionPay');
	});

	it('has a prefix of 622251 and a length of 16', function() {
		assert(detectNetwork('6222519928160323') === 'China UnionPay');
	});

	it('has a prefix of 622252 and a length of 16', function() {
		assert(detectNetwork('6222523713864068') === 'China UnionPay');
	});

	it('has a prefix of 622253 and a length of 16', function() {
		assert(detectNetwork('6222534534813792') === 'China UnionPay');
	});

	it('has a prefix of 622254 and a length of 16', function() {
		assert(detectNetwork('6222545462683778') === 'China UnionPay');
	});

	it('has a prefix of 622255 and a length of 16', function() {
		assert(detectNetwork('6222550338760196') === 'China UnionPay');
	});

	it('has a prefix of 622256 and a length of 16', function() {
		assert(detectNetwork('6222565179501073') === 'China UnionPay');
	});

	it('has a prefix of 622257 and a length of 16', function() {
		assert(detectNetwork('6222579222041203') === 'China UnionPay');
	});

	it('has a prefix of 622258 and a length of 16', function() {
		assert(detectNetwork('6222584788449639') === 'China UnionPay');
	});

	it('has a prefix of 622259 and a length of 16', function() {
		assert(detectNetwork('6222594045935521') === 'China UnionPay');
	});

	it('has a prefix of 622260 and a length of 16', function() {
		assert(detectNetwork('6222604052593635') === 'China UnionPay');
	});

	it('has a prefix of 622261 and a length of 16', function() {
		assert(detectNetwork('6222619114944114') === 'China UnionPay');
	});

	it('has a prefix of 622262 and a length of 16', function() {
		assert(detectNetwork('6222622499511455') === 'China UnionPay');
	});

	it('has a prefix of 622263 and a length of 16', function() {
		assert(detectNetwork('6222638416063975') === 'China UnionPay');
	});

	it('has a prefix of 622264 and a length of 16', function() {
		assert(detectNetwork('6222640534608853') === 'China UnionPay');
	});

	it('has a prefix of 622265 and a length of 16', function() {
		assert(detectNetwork('6222657154792988') === 'China UnionPay');
	});

	it('has a prefix of 622266 and a length of 16', function() {
		assert(detectNetwork('6222663004424576') === 'China UnionPay');
	});

	it('has a prefix of 622267 and a length of 16', function() {
		assert(detectNetwork('6222673636944905') === 'China UnionPay');
	});

	it('has a prefix of 622268 and a length of 16', function() {
		assert(detectNetwork('6222680991627401') === 'China UnionPay');
	});

	it('has a prefix of 622269 and a length of 16', function() {
		assert(detectNetwork('6222698689470720') === 'China UnionPay');
	});

	it('has a prefix of 622270 and a length of 16', function() {
		assert(detectNetwork('6222700064080624') === 'China UnionPay');
	});

	it('has a prefix of 622271 and a length of 16', function() {
		assert(detectNetwork('6222712335679858') === 'China UnionPay');
	});

	it('has a prefix of 622272 and a length of 16', function() {
		assert(detectNetwork('6222727421636155') === 'China UnionPay');
	});

	it('has a prefix of 622273 and a length of 16', function() {
		assert(detectNetwork('6222735544644654') === 'China UnionPay');
	});

	it('has a prefix of 622274 and a length of 16', function() {
		assert(detectNetwork('6222741232683655') === 'China UnionPay');
	});

	it('has a prefix of 622275 and a length of 16', function() {
		assert(detectNetwork('6222757956397530') === 'China UnionPay');
	});

	it('has a prefix of 622276 and a length of 16', function() {
		assert(detectNetwork('6222761026998212') === 'China UnionPay');
	});

	it('has a prefix of 622277 and a length of 16', function() {
		assert(detectNetwork('6222771370510380') === 'China UnionPay');
	});

	it('has a prefix of 622278 and a length of 16', function() {
		assert(detectNetwork('6222781231183312') === 'China UnionPay');
	});

	it('has a prefix of 622279 and a length of 16', function() {
		assert(detectNetwork('6222794848887836') === 'China UnionPay');
	});

	it('has a prefix of 622280 and a length of 16', function() {
		assert(detectNetwork('6222807862677925') === 'China UnionPay');
	});

	it('has a prefix of 622281 and a length of 16', function() {
		assert(detectNetwork('6222815345672030') === 'China UnionPay');
	});

	it('has a prefix of 622282 and a length of 16', function() {
		assert(detectNetwork('6222829696177420') === 'China UnionPay');
	});

	it('has a prefix of 622283 and a length of 16', function() {
		assert(detectNetwork('6222836594607598') === 'China UnionPay');
	});

	it('has a prefix of 622284 and a length of 16', function() {
		assert(detectNetwork('6222847061639262') === 'China UnionPay');
	});

	it('has a prefix of 622285 and a length of 16', function() {
		assert(detectNetwork('6222859392122960') === 'China UnionPay');
	});

	it('has a prefix of 622286 and a length of 16', function() {
		assert(detectNetwork('6222860286901504') === 'China UnionPay');
	});

	it('has a prefix of 622287 and a length of 16', function() {
		assert(detectNetwork('6222871394873975') === 'China UnionPay');
	});

	it('has a prefix of 622288 and a length of 16', function() {
		assert(detectNetwork('6222888836753972') === 'China UnionPay');
	});

	it('has a prefix of 622289 and a length of 16', function() {
		assert(detectNetwork('6222894054269699') === 'China UnionPay');
	});

	it('has a prefix of 622290 and a length of 16', function() {
		assert(detectNetwork('6222904887805776') === 'China UnionPay');
	});

	it('has a prefix of 622291 and a length of 16', function() {
		assert(detectNetwork('6222916780321173') === 'China UnionPay');
	});

	it('has a prefix of 622292 and a length of 16', function() {
		assert(detectNetwork('6222923189122862') === 'China UnionPay');
	});

	it('has a prefix of 622293 and a length of 16', function() {
		assert(detectNetwork('6222934577535515') === 'China UnionPay');
	});

	it('has a prefix of 622294 and a length of 16', function() {
		assert(detectNetwork('6222944925726524') === 'China UnionPay');
	});

	it('has a prefix of 622295 and a length of 16', function() {
		assert(detectNetwork('6222959844431792') === 'China UnionPay');
	});

	it('has a prefix of 622296 and a length of 16', function() {
		assert(detectNetwork('6222960804314798') === 'China UnionPay');
	});

	it('has a prefix of 622297 and a length of 16', function() {
		assert(detectNetwork('6222977351432264') === 'China UnionPay');
	});

	it('has a prefix of 622298 and a length of 16', function() {
		assert(detectNetwork('6222981990180270') === 'China UnionPay');
	});

	it('has a prefix of 622299 and a length of 16', function() {
		assert(detectNetwork('6222998882760916') === 'China UnionPay');
	});

	it('has a prefix of 622300 and a length of 16', function() {
		assert(detectNetwork('6223008245975803') === 'China UnionPay');
	});

	it('has a prefix of 622301 and a length of 16', function() {
		assert(detectNetwork('6223011594714619') === 'China UnionPay');
	});

	it('has a prefix of 622302 and a length of 16', function() {
		assert(detectNetwork('6223024381876384') === 'China UnionPay');
	});

	it('has a prefix of 622303 and a length of 16', function() {
		assert(detectNetwork('6223034194432769') === 'China UnionPay');
	});

	it('has a prefix of 622304 and a length of 16', function() {
		assert(detectNetwork('6223042768958327') === 'China UnionPay');
	});

	it('has a prefix of 622305 and a length of 16', function() {
		assert(detectNetwork('6223052374300185') === 'China UnionPay');
	});

	it('has a prefix of 622306 and a length of 16', function() {
		assert(detectNetwork('6223068345156815') === 'China UnionPay');
	});

	it('has a prefix of 622307 and a length of 16', function() {
		assert(detectNetwork('6223073618239277') === 'China UnionPay');
	});

	it('has a prefix of 622308 and a length of 16', function() {
		assert(detectNetwork('6223086370062602') === 'China UnionPay');
	});

	it('has a prefix of 622309 and a length of 16', function() {
		assert(detectNetwork('6223093651216173') === 'China UnionPay');
	});

	it('has a prefix of 622310 and a length of 16', function() {
		assert(detectNetwork('6223109966200605') === 'China UnionPay');
	});

	it('has a prefix of 622311 and a length of 16', function() {
		assert(detectNetwork('6223115765418181') === 'China UnionPay');
	});

	it('has a prefix of 622312 and a length of 16', function() {
		assert(detectNetwork('6223129309092884') === 'China UnionPay');
	});

	it('has a prefix of 622313 and a length of 16', function() {
		assert(detectNetwork('6223136209791393') === 'China UnionPay');
	});

	it('has a prefix of 622314 and a length of 16', function() {
		assert(detectNetwork('6223147711098628') === 'China UnionPay');
	});

	it('has a prefix of 622315 and a length of 16', function() {
		assert(detectNetwork('6223155497745301') === 'China UnionPay');
	});

	it('has a prefix of 622316 and a length of 16', function() {
		assert(detectNetwork('6223165213730778') === 'China UnionPay');
	});

	it('has a prefix of 622317 and a length of 16', function() {
		assert(detectNetwork('6223175846140729') === 'China UnionPay');
	});

	it('has a prefix of 622318 and a length of 16', function() {
		assert(detectNetwork('6223181766755520') === 'China UnionPay');
	});

	it('has a prefix of 622319 and a length of 16', function() {
		assert(detectNetwork('6223198997588078') === 'China UnionPay');
	});

	it('has a prefix of 622320 and a length of 16', function() {
		assert(detectNetwork('6223203766773940') === 'China UnionPay');
	});

	it('has a prefix of 622321 and a length of 16', function() {
		assert(detectNetwork('6223215491903321') === 'China UnionPay');
	});

	it('has a prefix of 622322 and a length of 16', function() {
		assert(detectNetwork('6223220751280346') === 'China UnionPay');
	});

	it('has a prefix of 622323 and a length of 16', function() {
		assert(detectNetwork('6223231521478226') === 'China UnionPay');
	});

	it('has a prefix of 622324 and a length of 16', function() {
		assert(detectNetwork('6223245180346142') === 'China UnionPay');
	});

	it('has a prefix of 622325 and a length of 16', function() {
		assert(detectNetwork('6223250695978910') === 'China UnionPay');
	});

	it('has a prefix of 622326 and a length of 16', function() {
		assert(detectNetwork('6223267940952754') === 'China UnionPay');
	});

	it('has a prefix of 622327 and a length of 16', function() {
		assert(detectNetwork('6223273080634126') === 'China UnionPay');
	});

	it('has a prefix of 622328 and a length of 16', function() {
		assert(detectNetwork('6223281834417683') === 'China UnionPay');
	});

	it('has a prefix of 622329 and a length of 16', function() {
		assert(detectNetwork('6223293171833275') === 'China UnionPay');
	});

	it('has a prefix of 622330 and a length of 16', function() {
		assert(detectNetwork('6223300858863932') === 'China UnionPay');
	});

	it('has a prefix of 622331 and a length of 16', function() {
		assert(detectNetwork('6223310888332364') === 'China UnionPay');
	});

	it('has a prefix of 622332 and a length of 16', function() {
		assert(detectNetwork('6223323964942865') === 'China UnionPay');
	});

	it('has a prefix of 622333 and a length of 16', function() {
		assert(detectNetwork('6223330134166513') === 'China UnionPay');
	});

	it('has a prefix of 622334 and a length of 16', function() {
		assert(detectNetwork('6223341264894926') === 'China UnionPay');
	});

	it('has a prefix of 622335 and a length of 16', function() {
		assert(detectNetwork('6223352350320456') === 'China UnionPay');
	});

	it('has a prefix of 622336 and a length of 16', function() {
		assert(detectNetwork('6223360873590711') === 'China UnionPay');
	});

	it('has a prefix of 622337 and a length of 16', function() {
		assert(detectNetwork('6223378081605974') === 'China UnionPay');
	});

	it('has a prefix of 622338 and a length of 16', function() {
		assert(detectNetwork('6223389163598161') === 'China UnionPay');
	});

	it('has a prefix of 622339 and a length of 16', function() {
		assert(detectNetwork('6223399371209589') === 'China UnionPay');
	});

	it('has a prefix of 622340 and a length of 16', function() {
		assert(detectNetwork('6223408607218355') === 'China UnionPay');
	});

	it('has a prefix of 622341 and a length of 16', function() {
		assert(detectNetwork('6223417079263538') === 'China UnionPay');
	});

	it('has a prefix of 622342 and a length of 16', function() {
		assert(detectNetwork('6223423665633012') === 'China UnionPay');
	});

	it('has a prefix of 622343 and a length of 16', function() {
		assert(detectNetwork('6223439898649005') === 'China UnionPay');
	});

	it('has a prefix of 622344 and a length of 16', function() {
		assert(detectNetwork('6223440707226216') === 'China UnionPay');
	});

	it('has a prefix of 622345 and a length of 16', function() {
		assert(detectNetwork('6223455478287257') === 'China UnionPay');
	});

	it('has a prefix of 622346 and a length of 16', function() {
		assert(detectNetwork('6223465018477656') === 'China UnionPay');
	});

	it('has a prefix of 622347 and a length of 16', function() {
		assert(detectNetwork('6223475031164134') === 'China UnionPay');
	});

	it('has a prefix of 622348 and a length of 16', function() {
		assert(detectNetwork('6223485615586577') === 'China UnionPay');
	});

	it('has a prefix of 622349 and a length of 16', function() {
		assert(detectNetwork('6223490168962103') === 'China UnionPay');
	});

	it('has a prefix of 622350 and a length of 16', function() {
		assert(detectNetwork('6223503422000092') === 'China UnionPay');
	});

	it('has a prefix of 622351 and a length of 16', function() {
		assert(detectNetwork('6223516448784379') === 'China UnionPay');
	});

	it('has a prefix of 622352 and a length of 16', function() {
		assert(detectNetwork('6223528151488384') === 'China UnionPay');
	});

	it('has a prefix of 622353 and a length of 16', function() {
		assert(detectNetwork('6223534360982888') === 'China UnionPay');
	});

	it('has a prefix of 622354 and a length of 16', function() {
		assert(detectNetwork('6223541096010829') === 'China UnionPay');
	});

	it('has a prefix of 622355 and a length of 16', function() {
		assert(detectNetwork('6223555567092907') === 'China UnionPay');
	});

	it('has a prefix of 622356 and a length of 16', function() {
		assert(detectNetwork('6223565263041881') === 'China UnionPay');
	});

	it('has a prefix of 622357 and a length of 16', function() {
		assert(detectNetwork('6223573958518019') === 'China UnionPay');
	});

	it('has a prefix of 622358 and a length of 16', function() {
		assert(detectNetwork('6223583123601124') === 'China UnionPay');
	});

	it('has a prefix of 622359 and a length of 16', function() {
		assert(detectNetwork('6223591044029898') === 'China UnionPay');
	});

	it('has a prefix of 622360 and a length of 16', function() {
		assert(detectNetwork('6223604769101068') === 'China UnionPay');
	});

	it('has a prefix of 622361 and a length of 16', function() {
		assert(detectNetwork('6223612317795543') === 'China UnionPay');
	});

	it('has a prefix of 622362 and a length of 16', function() {
		assert(detectNetwork('6223620616464621') === 'China UnionPay');
	});

	it('has a prefix of 622363 and a length of 16', function() {
		assert(detectNetwork('6223637653097349') === 'China UnionPay');
	});

	it('has a prefix of 622364 and a length of 16', function() {
		assert(detectNetwork('6223649025725854') === 'China UnionPay');
	});

	it('has a prefix of 622365 and a length of 16', function() {
		assert(detectNetwork('6223655363579963') === 'China UnionPay');
	});

	it('has a prefix of 622366 and a length of 16', function() {
		assert(detectNetwork('6223661090917958') === 'China UnionPay');
	});

	it('has a prefix of 622367 and a length of 16', function() {
		assert(detectNetwork('6223677338154858') === 'China UnionPay');
	});

	it('has a prefix of 622368 and a length of 16', function() {
		assert(detectNetwork('6223682678932549') === 'China UnionPay');
	});

	it('has a prefix of 622369 and a length of 16', function() {
		assert(detectNetwork('6223696709067105') === 'China UnionPay');
	});

	it('has a prefix of 622370 and a length of 16', function() {
		assert(detectNetwork('6223702635109753') === 'China UnionPay');
	});

	it('has a prefix of 622371 and a length of 16', function() {
		assert(detectNetwork('6223719925175011') === 'China UnionPay');
	});

	it('has a prefix of 622372 and a length of 16', function() {
		assert(detectNetwork('6223729772878346') === 'China UnionPay');
	});

	it('has a prefix of 622373 and a length of 16', function() {
		assert(detectNetwork('6223735645498714') === 'China UnionPay');
	});

	it('has a prefix of 622374 and a length of 16', function() {
		assert(detectNetwork('6223744353193684') === 'China UnionPay');
	});

	it('has a prefix of 622375 and a length of 16', function() {
		assert(detectNetwork('6223758185038820') === 'China UnionPay');
	});

	it('has a prefix of 622376 and a length of 16', function() {
		assert(detectNetwork('6223767098923315') === 'China UnionPay');
	});

	it('has a prefix of 622377 and a length of 16', function() {
		assert(detectNetwork('6223774805751503') === 'China UnionPay');
	});

	it('has a prefix of 622378 and a length of 16', function() {
		assert(detectNetwork('6223789267101820') === 'China UnionPay');
	});

	it('has a prefix of 622379 and a length of 16', function() {
		assert(detectNetwork('6223792108577974') === 'China UnionPay');
	});

	it('has a prefix of 622380 and a length of 16', function() {
		assert(detectNetwork('6223803147312163') === 'China UnionPay');
	});

	it('has a prefix of 622381 and a length of 16', function() {
		assert(detectNetwork('6223810650227284') === 'China UnionPay');
	});

	it('has a prefix of 622382 and a length of 16', function() {
		assert(detectNetwork('6223827442968854') === 'China UnionPay');
	});

	it('has a prefix of 622383 and a length of 16', function() {
		assert(detectNetwork('6223839641439464') === 'China UnionPay');
	});

	it('has a prefix of 622384 and a length of 16', function() {
		assert(detectNetwork('6223841794133882') === 'China UnionPay');
	});

	it('has a prefix of 622385 and a length of 16', function() {
		assert(detectNetwork('6223851454269211') === 'China UnionPay');
	});

	it('has a prefix of 622386 and a length of 16', function() {
		assert(detectNetwork('6223865047260394') === 'China UnionPay');
	});

	it('has a prefix of 622387 and a length of 16', function() {
		assert(detectNetwork('6223871569916678') === 'China UnionPay');
	});

	it('has a prefix of 622388 and a length of 16', function() {
		assert(detectNetwork('6223884268549108') === 'China UnionPay');
	});

	it('has a prefix of 622389 and a length of 16', function() {
		assert(detectNetwork('6223898229433399') === 'China UnionPay');
	});

	it('has a prefix of 622390 and a length of 16', function() {
		assert(detectNetwork('6223903097318978') === 'China UnionPay');
	});

	it('has a prefix of 622391 and a length of 16', function() {
		assert(detectNetwork('6223915126448120') === 'China UnionPay');
	});

	it('has a prefix of 622392 and a length of 16', function() {
		assert(detectNetwork('6223929202093088') === 'China UnionPay');
	});

	it('has a prefix of 622393 and a length of 16', function() {
		assert(detectNetwork('6223935983008290') === 'China UnionPay');
	});

	it('has a prefix of 622394 and a length of 16', function() {
		assert(detectNetwork('6223940091821587') === 'China UnionPay');
	});

	it('has a prefix of 622395 and a length of 16', function() {
		assert(detectNetwork('6223958242849914') === 'China UnionPay');
	});

	it('has a prefix of 622396 and a length of 16', function() {
		assert(detectNetwork('6223968130810588') === 'China UnionPay');
	});

	it('has a prefix of 622397 and a length of 16', function() {
		assert(detectNetwork('6223976554204875') === 'China UnionPay');
	});

	it('has a prefix of 622398 and a length of 16', function() {
		assert(detectNetwork('6223989965568433') === 'China UnionPay');
	});

	it('has a prefix of 622399 and a length of 16', function() {
		assert(detectNetwork('6223992808976743') === 'China UnionPay');
	});

	it('has a prefix of 622400 and a length of 16', function() {
		assert(detectNetwork('6224006193865901') === 'China UnionPay');
	});

	it('has a prefix of 622401 and a length of 16', function() {
		assert(detectNetwork('6224016953050213') === 'China UnionPay');
	});

	it('has a prefix of 622402 and a length of 16', function() {
		assert(detectNetwork('6224022855943427') === 'China UnionPay');
	});

	it('has a prefix of 622403 and a length of 16', function() {
		assert(detectNetwork('6224036675329422') === 'China UnionPay');
	});

	it('has a prefix of 622404 and a length of 16', function() {
		assert(detectNetwork('6224040355718445') === 'China UnionPay');
	});

	it('has a prefix of 622405 and a length of 16', function() {
		assert(detectNetwork('6224059294753409') === 'China UnionPay');
	});

	it('has a prefix of 622406 and a length of 16', function() {
		assert(detectNetwork('6224062124807820') === 'China UnionPay');
	});

	it('has a prefix of 622407 and a length of 16', function() {
		assert(detectNetwork('6224073847561434') === 'China UnionPay');
	});

	it('has a prefix of 622408 and a length of 16', function() {
		assert(detectNetwork('6224080495011544') === 'China UnionPay');
	});

	it('has a prefix of 622409 and a length of 16', function() {
		assert(detectNetwork('6224090798409750') === 'China UnionPay');
	});

	it('has a prefix of 622410 and a length of 16', function() {
		assert(detectNetwork('6224103595336355') === 'China UnionPay');
	});

	it('has a prefix of 622411 and a length of 16', function() {
		assert(detectNetwork('6224116040340440') === 'China UnionPay');
	});

	it('has a prefix of 622412 and a length of 16', function() {
		assert(detectNetwork('6224123212653540') === 'China UnionPay');
	});

	it('has a prefix of 622413 and a length of 16', function() {
		assert(detectNetwork('6224139557052304') === 'China UnionPay');
	});

	it('has a prefix of 622414 and a length of 16', function() {
		assert(detectNetwork('6224142673592940') === 'China UnionPay');
	});

	it('has a prefix of 622415 and a length of 16', function() {
		assert(detectNetwork('6224158602008765') === 'China UnionPay');
	});

	it('has a prefix of 622416 and a length of 16', function() {
		assert(detectNetwork('6224161277567657') === 'China UnionPay');
	});

	it('has a prefix of 622417 and a length of 16', function() {
		assert(detectNetwork('6224170574625381') === 'China UnionPay');
	});

	it('has a prefix of 622418 and a length of 16', function() {
		assert(detectNetwork('6224189202411157') === 'China UnionPay');
	});

	it('has a prefix of 622419 and a length of 16', function() {
		assert(detectNetwork('6224199477670434') === 'China UnionPay');
	});

	it('has a prefix of 622420 and a length of 16', function() {
		assert(detectNetwork('6224202613846425') === 'China UnionPay');
	});

	it('has a prefix of 622421 and a length of 16', function() {
		assert(detectNetwork('6224211642539587') === 'China UnionPay');
	});

	it('has a prefix of 622422 and a length of 16', function() {
		assert(detectNetwork('6224220430714382') === 'China UnionPay');
	});

	it('has a prefix of 622423 and a length of 16', function() {
		assert(detectNetwork('6224232450644206') === 'China UnionPay');
	});

	it('has a prefix of 622424 and a length of 16', function() {
		assert(detectNetwork('6224243740369180') === 'China UnionPay');
	});

	it('has a prefix of 622425 and a length of 16', function() {
		assert(detectNetwork('6224252603293101') === 'China UnionPay');
	});

	it('has a prefix of 622426 and a length of 16', function() {
		assert(detectNetwork('6224267157577778') === 'China UnionPay');
	});

	it('has a prefix of 622427 and a length of 16', function() {
		assert(detectNetwork('6224276333501333') === 'China UnionPay');
	});

	it('has a prefix of 622428 and a length of 16', function() {
		assert(detectNetwork('6224283719411715') === 'China UnionPay');
	});

	it('has a prefix of 622429 and a length of 16', function() {
		assert(detectNetwork('6224297755078743') === 'China UnionPay');
	});

	it('has a prefix of 622430 and a length of 16', function() {
		assert(detectNetwork('6224307002840613') === 'China UnionPay');
	});

	it('has a prefix of 622431 and a length of 16', function() {
		assert(detectNetwork('6224319276659305') === 'China UnionPay');
	});

	it('has a prefix of 622432 and a length of 16', function() {
		assert(detectNetwork('6224320962413876') === 'China UnionPay');
	});

	it('has a prefix of 622433 and a length of 16', function() {
		assert(detectNetwork('6224337154298810') === 'China UnionPay');
	});

	it('has a prefix of 622434 and a length of 16', function() {
		assert(detectNetwork('6224343063363330') === 'China UnionPay');
	});

	it('has a prefix of 622435 and a length of 16', function() {
		assert(detectNetwork('6224351115424493') === 'China UnionPay');
	});

	it('has a prefix of 622436 and a length of 16', function() {
		assert(detectNetwork('6224360622525232') === 'China UnionPay');
	});

	it('has a prefix of 622437 and a length of 16', function() {
		assert(detectNetwork('6224379761153600') === 'China UnionPay');
	});

	it('has a prefix of 622438 and a length of 16', function() {
		assert(detectNetwork('6224383675841513') === 'China UnionPay');
	});

	it('has a prefix of 622439 and a length of 16', function() {
		assert(detectNetwork('6224397931162511') === 'China UnionPay');
	});

	it('has a prefix of 622440 and a length of 16', function() {
		assert(detectNetwork('6224409716255003') === 'China UnionPay');
	});

	it('has a prefix of 622441 and a length of 16', function() {
		assert(detectNetwork('6224418044098442') === 'China UnionPay');
	});

	it('has a prefix of 622442 and a length of 16', function() {
		assert(detectNetwork('6224429357376070') === 'China UnionPay');
	});

	it('has a prefix of 622443 and a length of 16', function() {
		assert(detectNetwork('6224434148975507') === 'China UnionPay');
	});

	it('has a prefix of 622444 and a length of 16', function() {
		assert(detectNetwork('6224445565801396') === 'China UnionPay');
	});

	it('has a prefix of 622445 and a length of 16', function() {
		assert(detectNetwork('6224457998228625') === 'China UnionPay');
	});

	it('has a prefix of 622446 and a length of 16', function() {
		assert(detectNetwork('6224464001321572') === 'China UnionPay');
	});

	it('has a prefix of 622447 and a length of 16', function() {
		assert(detectNetwork('6224473851100977') === 'China UnionPay');
	});

	it('has a prefix of 622448 and a length of 16', function() {
		assert(detectNetwork('6224480502617608') === 'China UnionPay');
	});

	it('has a prefix of 622449 and a length of 16', function() {
		assert(detectNetwork('6224498721154439') === 'China UnionPay');
	});

	it('has a prefix of 622450 and a length of 16', function() {
		assert(detectNetwork('6224509098202027') === 'China UnionPay');
	});

	it('has a prefix of 622451 and a length of 16', function() {
		assert(detectNetwork('6224516188477684') === 'China UnionPay');
	});

	it('has a prefix of 622452 and a length of 16', function() {
		assert(detectNetwork('6224526766539038') === 'China UnionPay');
	});

	it('has a prefix of 622453 and a length of 16', function() {
		assert(detectNetwork('6224531921583593') === 'China UnionPay');
	});

	it('has a prefix of 622454 and a length of 16', function() {
		assert(detectNetwork('6224549690687458') === 'China UnionPay');
	});

	it('has a prefix of 622455 and a length of 16', function() {
		assert(detectNetwork('6224553807194245') === 'China UnionPay');
	});

	it('has a prefix of 622456 and a length of 16', function() {
		assert(detectNetwork('6224564780835922') === 'China UnionPay');
	});

	it('has a prefix of 622457 and a length of 16', function() {
		assert(detectNetwork('6224578873364406') === 'China UnionPay');
	});

	it('has a prefix of 622458 and a length of 16', function() {
		assert(detectNetwork('6224589558240113') === 'China UnionPay');
	});

	it('has a prefix of 622459 and a length of 16', function() {
		assert(detectNetwork('6224592219876204') === 'China UnionPay');
	});

	it('has a prefix of 622460 and a length of 16', function() {
		assert(detectNetwork('6224608823643363') === 'China UnionPay');
	});

	it('has a prefix of 622461 and a length of 16', function() {
		assert(detectNetwork('6224618513488220') === 'China UnionPay');
	});

	it('has a prefix of 622462 and a length of 16', function() {
		assert(detectNetwork('6224624046212319') === 'China UnionPay');
	});

	it('has a prefix of 622463 and a length of 16', function() {
		assert(detectNetwork('6224635992305206') === 'China UnionPay');
	});

	it('has a prefix of 622464 and a length of 16', function() {
		assert(detectNetwork('6224641084288410') === 'China UnionPay');
	});

	it('has a prefix of 622465 and a length of 16', function() {
		assert(detectNetwork('6224654091448724') === 'China UnionPay');
	});

	it('has a prefix of 622466 and a length of 16', function() {
		assert(detectNetwork('6224661936150974') === 'China UnionPay');
	});

	it('has a prefix of 622467 and a length of 16', function() {
		assert(detectNetwork('6224673818553823') === 'China UnionPay');
	});

	it('has a prefix of 622468 and a length of 16', function() {
		assert(detectNetwork('6224682979633140') === 'China UnionPay');
	});

	it('has a prefix of 622469 and a length of 16', function() {
		assert(detectNetwork('6224691150088609') === 'China UnionPay');
	});

	it('has a prefix of 622470 and a length of 16', function() {
		assert(detectNetwork('6224700015388198') === 'China UnionPay');
	});

	it('has a prefix of 622471 and a length of 16', function() {
		assert(detectNetwork('6224712814810274') === 'China UnionPay');
	});

	it('has a prefix of 622472 and a length of 16', function() {
		assert(detectNetwork('6224726195180850') === 'China UnionPay');
	});

	it('has a prefix of 622473 and a length of 16', function() {
		assert(detectNetwork('6224736478057029') === 'China UnionPay');
	});

	it('has a prefix of 622474 and a length of 16', function() {
		assert(detectNetwork('6224743666570446') === 'China UnionPay');
	});

	it('has a prefix of 622475 and a length of 16', function() {
		assert(detectNetwork('6224756881689128') === 'China UnionPay');
	});

	it('has a prefix of 622476 and a length of 16', function() {
		assert(detectNetwork('6224765406767642') === 'China UnionPay');
	});

	it('has a prefix of 622477 and a length of 16', function() {
		assert(detectNetwork('6224774830548210') === 'China UnionPay');
	});

	it('has a prefix of 622478 and a length of 16', function() {
		assert(detectNetwork('6224788042009602') === 'China UnionPay');
	});

	it('has a prefix of 622479 and a length of 16', function() {
		assert(detectNetwork('6224790318935939') === 'China UnionPay');
	});

	it('has a prefix of 622480 and a length of 16', function() {
		assert(detectNetwork('6224804853159607') === 'China UnionPay');
	});

	it('has a prefix of 622481 and a length of 16', function() {
		assert(detectNetwork('6224819648696437') === 'China UnionPay');
	});

	it('has a prefix of 622482 and a length of 16', function() {
		assert(detectNetwork('6224823957020720') === 'China UnionPay');
	});

	it('has a prefix of 622483 and a length of 16', function() {
		assert(detectNetwork('6224830002838806') === 'China UnionPay');
	});

	it('has a prefix of 622484 and a length of 16', function() {
		assert(detectNetwork('6224841718100611') === 'China UnionPay');
	});

	it('has a prefix of 622485 and a length of 16', function() {
		assert(detectNetwork('6224853429515756') === 'China UnionPay');
	});

	it('has a prefix of 622486 and a length of 16', function() {
		assert(detectNetwork('6224864394020828') === 'China UnionPay');
	});

	it('has a prefix of 622487 and a length of 16', function() {
		assert(detectNetwork('6224874542463605') === 'China UnionPay');
	});

	it('has a prefix of 622488 and a length of 16', function() {
		assert(detectNetwork('6224881400623879') === 'China UnionPay');
	});

	it('has a prefix of 622489 and a length of 16', function() {
		assert(detectNetwork('6224892994077767') === 'China UnionPay');
	});

	it('has a prefix of 622490 and a length of 16', function() {
		assert(detectNetwork('6224900978731554') === 'China UnionPay');
	});

	it('has a prefix of 622491 and a length of 16', function() {
		assert(detectNetwork('6224919459123175') === 'China UnionPay');
	});

	it('has a prefix of 622492 and a length of 16', function() {
		assert(detectNetwork('6224920894350223') === 'China UnionPay');
	});

	it('has a prefix of 622493 and a length of 16', function() {
		assert(detectNetwork('6224938405957746') === 'China UnionPay');
	});

	it('has a prefix of 622494 and a length of 16', function() {
		assert(detectNetwork('6224943289353145') === 'China UnionPay');
	});

	it('has a prefix of 622495 and a length of 16', function() {
		assert(detectNetwork('6224958389290832') === 'China UnionPay');
	});

	it('has a prefix of 622496 and a length of 16', function() {
		assert(detectNetwork('6224967622552732') === 'China UnionPay');
	});

	it('has a prefix of 622497 and a length of 16', function() {
		assert(detectNetwork('6224971156046446') === 'China UnionPay');
	});

	it('has a prefix of 622498 and a length of 16', function() {
		assert(detectNetwork('6224984560742755') === 'China UnionPay');
	});

	it('has a prefix of 622499 and a length of 16', function() {
		assert(detectNetwork('6224991165950930') === 'China UnionPay');
	});

	it('has a prefix of 622500 and a length of 16', function() {
		assert(detectNetwork('6225005141807750') === 'China UnionPay');
	});

	it('has a prefix of 622501 and a length of 16', function() {
		assert(detectNetwork('6225012505186944') === 'China UnionPay');
	});

	it('has a prefix of 622502 and a length of 16', function() {
		assert(detectNetwork('6225029280763066') === 'China UnionPay');
	});

	it('has a prefix of 622503 and a length of 16', function() {
		assert(detectNetwork('6225035005800720') === 'China UnionPay');
	});

	it('has a prefix of 622504 and a length of 16', function() {
		assert(detectNetwork('6225045188247607') === 'China UnionPay');
	});

	it('has a prefix of 622505 and a length of 16', function() {
		assert(detectNetwork('6225059596649423') === 'China UnionPay');
	});

	it('has a prefix of 622506 and a length of 16', function() {
		assert(detectNetwork('6225064192869451') === 'China UnionPay');
	});

	it('has a prefix of 622507 and a length of 16', function() {
		assert(detectNetwork('6225076844194937') === 'China UnionPay');
	});

	it('has a prefix of 622508 and a length of 16', function() {
		assert(detectNetwork('6225082829784062') === 'China UnionPay');
	});

	it('has a prefix of 622509 and a length of 16', function() {
		assert(detectNetwork('6225099248755963') === 'China UnionPay');
	});

	it('has a prefix of 622510 and a length of 16', function() {
		assert(detectNetwork('6225108611506034') === 'China UnionPay');
	});

	it('has a prefix of 622511 and a length of 16', function() {
		assert(detectNetwork('6225114792662576') === 'China UnionPay');
	});

	it('has a prefix of 622512 and a length of 16', function() {
		assert(detectNetwork('6225122291242335') === 'China UnionPay');
	});

	it('has a prefix of 622513 and a length of 16', function() {
		assert(detectNetwork('6225130345986624') === 'China UnionPay');
	});

	it('has a prefix of 622514 and a length of 16', function() {
		assert(detectNetwork('6225149001583378') === 'China UnionPay');
	});

	it('has a prefix of 622515 and a length of 16', function() {
		assert(detectNetwork('6225150786603143') === 'China UnionPay');
	});

	it('has a prefix of 622516 and a length of 16', function() {
		assert(detectNetwork('6225162135547259') === 'China UnionPay');
	});

	it('has a prefix of 622517 and a length of 16', function() {
		assert(detectNetwork('6225172763260415') === 'China UnionPay');
	});

	it('has a prefix of 622518 and a length of 16', function() {
		assert(detectNetwork('6225187826879565') === 'China UnionPay');
	});

	it('has a prefix of 622519 and a length of 16', function() {
		assert(detectNetwork('6225193635504297') === 'China UnionPay');
	});

	it('has a prefix of 622520 and a length of 16', function() {
		assert(detectNetwork('6225208554475363') === 'China UnionPay');
	});

	it('has a prefix of 622521 and a length of 16', function() {
		assert(detectNetwork('6225213081688018') === 'China UnionPay');
	});

	it('has a prefix of 622522 and a length of 16', function() {
		assert(detectNetwork('6225226674967046') === 'China UnionPay');
	});

	it('has a prefix of 622523 and a length of 16', function() {
		assert(detectNetwork('6225232819011821') === 'China UnionPay');
	});

	it('has a prefix of 622524 and a length of 16', function() {
		assert(detectNetwork('6225241717915482') === 'China UnionPay');
	});

	it('has a prefix of 622525 and a length of 16', function() {
		assert(detectNetwork('6225250031092487') === 'China UnionPay');
	});

	it('has a prefix of 622526 and a length of 16', function() {
		assert(detectNetwork('6225260626574833') === 'China UnionPay');
	});

	it('has a prefix of 622527 and a length of 16', function() {
		assert(detectNetwork('6225272051088844') === 'China UnionPay');
	});

	it('has a prefix of 622528 and a length of 16', function() {
		assert(detectNetwork('6225280858745462') === 'China UnionPay');
	});

	it('has a prefix of 622529 and a length of 16', function() {
		assert(detectNetwork('6225293036255279') === 'China UnionPay');
	});

	it('has a prefix of 622530 and a length of 16', function() {
		assert(detectNetwork('6225305145292417') === 'China UnionPay');
	});

	it('has a prefix of 622531 and a length of 16', function() {
		assert(detectNetwork('6225312574968529') === 'China UnionPay');
	});

	it('has a prefix of 622532 and a length of 16', function() {
		assert(detectNetwork('6225323086089422') === 'China UnionPay');
	});

	it('has a prefix of 622533 and a length of 16', function() {
		assert(detectNetwork('6225339296682172') === 'China UnionPay');
	});

	it('has a prefix of 622534 and a length of 16', function() {
		assert(detectNetwork('6225349474435244') === 'China UnionPay');
	});

	it('has a prefix of 622535 and a length of 16', function() {
		assert(detectNetwork('6225359050371001') === 'China UnionPay');
	});

	it('has a prefix of 622536 and a length of 16', function() {
		assert(detectNetwork('6225365060234282') === 'China UnionPay');
	});

	it('has a prefix of 622537 and a length of 16', function() {
		assert(detectNetwork('6225379761055153') === 'China UnionPay');
	});

	it('has a prefix of 622538 and a length of 16', function() {
		assert(detectNetwork('6225389821345635') === 'China UnionPay');
	});

	it('has a prefix of 622539 and a length of 16', function() {
		assert(detectNetwork('6225399361756399') === 'China UnionPay');
	});

	it('has a prefix of 622540 and a length of 16', function() {
		assert(detectNetwork('6225409105638205') === 'China UnionPay');
	});

	it('has a prefix of 622541 and a length of 16', function() {
		assert(detectNetwork('6225416336842703') === 'China UnionPay');
	});

	it('has a prefix of 622542 and a length of 16', function() {
		assert(detectNetwork('6225422554312942') === 'China UnionPay');
	});

	it('has a prefix of 622543 and a length of 16', function() {
		assert(detectNetwork('6225439372800104') === 'China UnionPay');
	});

	it('has a prefix of 622544 and a length of 16', function() {
		assert(detectNetwork('6225440504954889') === 'China UnionPay');
	});

	it('has a prefix of 622545 and a length of 16', function() {
		assert(detectNetwork('6225456749530228') === 'China UnionPay');
	});

	it('has a prefix of 622546 and a length of 16', function() {
		assert(detectNetwork('6225466049033767') === 'China UnionPay');
	});

	it('has a prefix of 622547 and a length of 16', function() {
		assert(detectNetwork('6225474508205052') === 'China UnionPay');
	});

	it('has a prefix of 622548 and a length of 16', function() {
		assert(detectNetwork('6225482064220773') === 'China UnionPay');
	});

	it('has a prefix of 622549 and a length of 16', function() {
		assert(detectNetwork('6225499379951204') === 'China UnionPay');
	});

	it('has a prefix of 622550 and a length of 16', function() {
		assert(detectNetwork('6225507401727499') === 'China UnionPay');
	});

	it('has a prefix of 622551 and a length of 16', function() {
		assert(detectNetwork('6225515031094065') === 'China UnionPay');
	});

	it('has a prefix of 622552 and a length of 16', function() {
		assert(detectNetwork('6225525373523001') === 'China UnionPay');
	});

	it('has a prefix of 622553 and a length of 16', function() {
		assert(detectNetwork('6225536635660523') === 'China UnionPay');
	});

	it('has a prefix of 622554 and a length of 16', function() {
		assert(detectNetwork('6225547837658124') === 'China UnionPay');
	});

	it('has a prefix of 622555 and a length of 16', function() {
		assert(detectNetwork('6225557259362797') === 'China UnionPay');
	});

	it('has a prefix of 622556 and a length of 16', function() {
		assert(detectNetwork('6225564239417661') === 'China UnionPay');
	});

	it('has a prefix of 622557 and a length of 16', function() {
		assert(detectNetwork('6225579507063800') === 'China UnionPay');
	});

	it('has a prefix of 622558 and a length of 16', function() {
		assert(detectNetwork('6225589458675120') === 'China UnionPay');
	});

	it('has a prefix of 622559 and a length of 16', function() {
		assert(detectNetwork('6225594246353730') === 'China UnionPay');
	});

	it('has a prefix of 622560 and a length of 16', function() {
		assert(detectNetwork('6225604713657155') === 'China UnionPay');
	});

	it('has a prefix of 622561 and a length of 16', function() {
		assert(detectNetwork('6225610139031515') === 'China UnionPay');
	});

	it('has a prefix of 622562 and a length of 16', function() {
		assert(detectNetwork('6225628287636265') === 'China UnionPay');
	});

	it('has a prefix of 622563 and a length of 16', function() {
		assert(detectNetwork('6225630454015951') === 'China UnionPay');
	});

	it('has a prefix of 622564 and a length of 16', function() {
		assert(detectNetwork('6225642373274577') === 'China UnionPay');
	});

	it('has a prefix of 622565 and a length of 16', function() {
		assert(detectNetwork('6225654868685423') === 'China UnionPay');
	});

	it('has a prefix of 622566 and a length of 16', function() {
		assert(detectNetwork('6225663175004185') === 'China UnionPay');
	});

	it('has a prefix of 622567 and a length of 16', function() {
		assert(detectNetwork('6225678421161067') === 'China UnionPay');
	});

	it('has a prefix of 622568 and a length of 16', function() {
		assert(detectNetwork('6225685781656345') === 'China UnionPay');
	});

	it('has a prefix of 622569 and a length of 16', function() {
		assert(detectNetwork('6225692532231397') === 'China UnionPay');
	});

	it('has a prefix of 622570 and a length of 16', function() {
		assert(detectNetwork('6225704623902262') === 'China UnionPay');
	});

	it('has a prefix of 622571 and a length of 16', function() {
		assert(detectNetwork('6225710406781778') === 'China UnionPay');
	});

	it('has a prefix of 622572 and a length of 16', function() {
		assert(detectNetwork('6225728778528604') === 'China UnionPay');
	});

	it('has a prefix of 622573 and a length of 16', function() {
		assert(detectNetwork('6225732258761955') === 'China UnionPay');
	});

	it('has a prefix of 622574 and a length of 16', function() {
		assert(detectNetwork('6225745449440263') === 'China UnionPay');
	});

	it('has a prefix of 622575 and a length of 16', function() {
		assert(detectNetwork('6225758957780677') === 'China UnionPay');
	});

	it('has a prefix of 622576 and a length of 16', function() {
		assert(detectNetwork('6225765743069752') === 'China UnionPay');
	});

	it('has a prefix of 622577 and a length of 16', function() {
		assert(detectNetwork('6225770777850333') === 'China UnionPay');
	});

	it('has a prefix of 622578 and a length of 16', function() {
		assert(detectNetwork('6225784849716951') === 'China UnionPay');
	});

	it('has a prefix of 622579 and a length of 16', function() {
		assert(detectNetwork('6225790511409892') === 'China UnionPay');
	});

	it('has a prefix of 622580 and a length of 16', function() {
		assert(detectNetwork('6225809997234959') === 'China UnionPay');
	});

	it('has a prefix of 622581 and a length of 16', function() {
		assert(detectNetwork('6225814173473020') === 'China UnionPay');
	});

	it('has a prefix of 622582 and a length of 16', function() {
		assert(detectNetwork('6225821022942603') === 'China UnionPay');
	});

	it('has a prefix of 622583 and a length of 16', function() {
		assert(detectNetwork('6225832834637443') === 'China UnionPay');
	});

	it('has a prefix of 622584 and a length of 16', function() {
		assert(detectNetwork('6225849901036365') === 'China UnionPay');
	});

	it('has a prefix of 622585 and a length of 16', function() {
		assert(detectNetwork('6225850943497654') === 'China UnionPay');
	});

	it('has a prefix of 622586 and a length of 16', function() {
		assert(detectNetwork('6225866443784290') === 'China UnionPay');
	});

	it('has a prefix of 622587 and a length of 16', function() {
		assert(detectNetwork('6225879669144089') === 'China UnionPay');
	});

	it('has a prefix of 622588 and a length of 16', function() {
		assert(detectNetwork('6225885112902815') === 'China UnionPay');
	});

	it('has a prefix of 622589 and a length of 16', function() {
		assert(detectNetwork('6225891676306945') === 'China UnionPay');
	});

	it('has a prefix of 622590 and a length of 16', function() {
		assert(detectNetwork('6225904406643593') === 'China UnionPay');
	});

	it('has a prefix of 622591 and a length of 16', function() {
		assert(detectNetwork('6225914902894418') === 'China UnionPay');
	});

	it('has a prefix of 622592 and a length of 16', function() {
		assert(detectNetwork('6225922113018793') === 'China UnionPay');
	});

	it('has a prefix of 622593 and a length of 16', function() {
		assert(detectNetwork('6225939487129964') === 'China UnionPay');
	});

	it('has a prefix of 622594 and a length of 16', function() {
		assert(detectNetwork('6225943194365456') === 'China UnionPay');
	});

	it('has a prefix of 622595 and a length of 16', function() {
		assert(detectNetwork('6225956397657106') === 'China UnionPay');
	});

	it('has a prefix of 622596 and a length of 16', function() {
		assert(detectNetwork('6225962521001865') === 'China UnionPay');
	});

	it('has a prefix of 622597 and a length of 16', function() {
		assert(detectNetwork('6225979716080698') === 'China UnionPay');
	});

	it('has a prefix of 622598 and a length of 16', function() {
		assert(detectNetwork('6225981809519540') === 'China UnionPay');
	});

	it('has a prefix of 622599 and a length of 16', function() {
		assert(detectNetwork('6225999086715757') === 'China UnionPay');
	});

	it('has a prefix of 622600 and a length of 16', function() {
		assert(detectNetwork('6226005300544766') === 'China UnionPay');
	});

	it('has a prefix of 622601 and a length of 16', function() {
		assert(detectNetwork('6226016693693923') === 'China UnionPay');
	});

	it('has a prefix of 622602 and a length of 16', function() {
		assert(detectNetwork('6226027066127750') === 'China UnionPay');
	});

	it('has a prefix of 622603 and a length of 16', function() {
		assert(detectNetwork('6226038002334184') === 'China UnionPay');
	});

	it('has a prefix of 622604 and a length of 16', function() {
		assert(detectNetwork('6226048809806118') === 'China UnionPay');
	});

	it('has a prefix of 622605 and a length of 16', function() {
		assert(detectNetwork('6226056535880261') === 'China UnionPay');
	});

	it('has a prefix of 622606 and a length of 16', function() {
		assert(detectNetwork('6226067207099750') === 'China UnionPay');
	});

	it('has a prefix of 622607 and a length of 16', function() {
		assert(detectNetwork('6226074411146895') === 'China UnionPay');
	});

	it('has a prefix of 622608 and a length of 16', function() {
		assert(detectNetwork('6226080488372412') === 'China UnionPay');
	});

	it('has a prefix of 622609 and a length of 16', function() {
		assert(detectNetwork('6226093054681663') === 'China UnionPay');
	});

	it('has a prefix of 622610 and a length of 16', function() {
		assert(detectNetwork('6226106974164468') === 'China UnionPay');
	});

	it('has a prefix of 622611 and a length of 16', function() {
		assert(detectNetwork('6226110380233117') === 'China UnionPay');
	});

	it('has a prefix of 622612 and a length of 16', function() {
		assert(detectNetwork('6226124206647305') === 'China UnionPay');
	});

	it('has a prefix of 622613 and a length of 16', function() {
		assert(detectNetwork('6226131438605669') === 'China UnionPay');
	});

	it('has a prefix of 622614 and a length of 16', function() {
		assert(detectNetwork('6226147956825401') === 'China UnionPay');
	});

	it('has a prefix of 622615 and a length of 16', function() {
		assert(detectNetwork('6226156454906342') === 'China UnionPay');
	});

	it('has a prefix of 622616 and a length of 16', function() {
		assert(detectNetwork('6226165318553332') === 'China UnionPay');
	});

	it('has a prefix of 622617 and a length of 16', function() {
		assert(detectNetwork('6226178804956166') === 'China UnionPay');
	});

	it('has a prefix of 622618 and a length of 16', function() {
		assert(detectNetwork('6226181360655564') === 'China UnionPay');
	});

	it('has a prefix of 622619 and a length of 16', function() {
		assert(detectNetwork('6226195222752618') === 'China UnionPay');
	});

	it('has a prefix of 622620 and a length of 16', function() {
		assert(detectNetwork('6226206548016874') === 'China UnionPay');
	});

	it('has a prefix of 622621 and a length of 16', function() {
		assert(detectNetwork('6226216753088212') === 'China UnionPay');
	});

	it('has a prefix of 622622 and a length of 16', function() {
		assert(detectNetwork('6226223104529393') === 'China UnionPay');
	});

	it('has a prefix of 622623 and a length of 16', function() {
		assert(detectNetwork('6226236957445706') === 'China UnionPay');
	});

	it('has a prefix of 622624 and a length of 16', function() {
		assert(detectNetwork('6226248322602716') === 'China UnionPay');
	});

	it('has a prefix of 622625 and a length of 16', function() {
		assert(detectNetwork('6226250344955126') === 'China UnionPay');
	});

	it('has a prefix of 622626 and a length of 16', function() {
		assert(detectNetwork('6226261026424676') === 'China UnionPay');
	});

	it('has a prefix of 622627 and a length of 16', function() {
		assert(detectNetwork('6226275150527720') === 'China UnionPay');
	});

	it('has a prefix of 622628 and a length of 16', function() {
		assert(detectNetwork('6226280744918962') === 'China UnionPay');
	});

	it('has a prefix of 622629 and a length of 16', function() {
		assert(detectNetwork('6226294981287768') === 'China UnionPay');
	});

	it('has a prefix of 622630 and a length of 16', function() {
		assert(detectNetwork('6226302738758349') === 'China UnionPay');
	});

	it('has a prefix of 622631 and a length of 16', function() {
		assert(detectNetwork('6226319547928666') === 'China UnionPay');
	});

	it('has a prefix of 622632 and a length of 16', function() {
		assert(detectNetwork('6226324895657207') === 'China UnionPay');
	});

	it('has a prefix of 622633 and a length of 16', function() {
		assert(detectNetwork('6226336728007135') === 'China UnionPay');
	});

	it('has a prefix of 622634 and a length of 16', function() {
		assert(detectNetwork('6226341440707272') === 'China UnionPay');
	});

	it('has a prefix of 622635 and a length of 16', function() {
		assert(detectNetwork('6226357812426622') === 'China UnionPay');
	});

	it('has a prefix of 622636 and a length of 16', function() {
		assert(detectNetwork('6226362186693595') === 'China UnionPay');
	});

	it('has a prefix of 622637 and a length of 16', function() {
		assert(detectNetwork('6226372462686319') === 'China UnionPay');
	});

	it('has a prefix of 622638 and a length of 16', function() {
		assert(detectNetwork('6226385876275205') === 'China UnionPay');
	});

	it('has a prefix of 622639 and a length of 16', function() {
		assert(detectNetwork('6226398652756784') === 'China UnionPay');
	});

	it('has a prefix of 622640 and a length of 16', function() {
		assert(detectNetwork('6226408682822870') === 'China UnionPay');
	});

	it('has a prefix of 622641 and a length of 16', function() {
		assert(detectNetwork('6226412022120470') === 'China UnionPay');
	});

	it('has a prefix of 622642 and a length of 16', function() {
		assert(detectNetwork('6226424553276299') === 'China UnionPay');
	});

	it('has a prefix of 622643 and a length of 16', function() {
		assert(detectNetwork('6226430322801357') === 'China UnionPay');
	});

	it('has a prefix of 622644 and a length of 16', function() {
		assert(detectNetwork('6226442277509482') === 'China UnionPay');
	});

	it('has a prefix of 622645 and a length of 16', function() {
		assert(detectNetwork('6226457873032585') === 'China UnionPay');
	});

	it('has a prefix of 622646 and a length of 16', function() {
		assert(detectNetwork('6226468465739839') === 'China UnionPay');
	});

	it('has a prefix of 622647 and a length of 16', function() {
		assert(detectNetwork('6226470664013267') === 'China UnionPay');
	});

	it('has a prefix of 622648 and a length of 16', function() {
		assert(detectNetwork('6226483485000681') === 'China UnionPay');
	});

	it('has a prefix of 622649 and a length of 16', function() {
		assert(detectNetwork('6226498203832175') === 'China UnionPay');
	});

	it('has a prefix of 622650 and a length of 16', function() {
		assert(detectNetwork('6226500783922465') === 'China UnionPay');
	});

	it('has a prefix of 622651 and a length of 16', function() {
		assert(detectNetwork('6226512191865323') === 'China UnionPay');
	});

	it('has a prefix of 622652 and a length of 16', function() {
		assert(detectNetwork('6226521215631593') === 'China UnionPay');
	});

	it('has a prefix of 622653 and a length of 16', function() {
		assert(detectNetwork('6226535406258756') === 'China UnionPay');
	});

	it('has a prefix of 622654 and a length of 16', function() {
		assert(detectNetwork('6226545405651594') === 'China UnionPay');
	});

	it('has a prefix of 622655 and a length of 16', function() {
		assert(detectNetwork('6226552391983324') === 'China UnionPay');
	});

	it('has a prefix of 622656 and a length of 16', function() {
		assert(detectNetwork('6226567083827897') === 'China UnionPay');
	});

	it('has a prefix of 622657 and a length of 16', function() {
		assert(detectNetwork('6226578492677110') === 'China UnionPay');
	});

	it('has a prefix of 622658 and a length of 16', function() {
		assert(detectNetwork('6226584910846015') === 'China UnionPay');
	});

	it('has a prefix of 622659 and a length of 16', function() {
		assert(detectNetwork('6226594482777922') === 'China UnionPay');
	});

	it('has a prefix of 622660 and a length of 16', function() {
		assert(detectNetwork('6226603790904202') === 'China UnionPay');
	});

	it('has a prefix of 622661 and a length of 16', function() {
		assert(detectNetwork('6226610050326149') === 'China UnionPay');
	});

	it('has a prefix of 622662 and a length of 16', function() {
		assert(detectNetwork('6226623866048927') === 'China UnionPay');
	});

	it('has a prefix of 622663 and a length of 16', function() {
		assert(detectNetwork('6226632298194562') === 'China UnionPay');
	});

	it('has a prefix of 622664 and a length of 16', function() {
		assert(detectNetwork('6226642747255422') === 'China UnionPay');
	});

	it('has a prefix of 622665 and a length of 16', function() {
		assert(detectNetwork('6226654080678225') === 'China UnionPay');
	});

	it('has a prefix of 622666 and a length of 16', function() {
		assert(detectNetwork('6226663180803390') === 'China UnionPay');
	});

	it('has a prefix of 622667 and a length of 16', function() {
		assert(detectNetwork('6226677950010041') === 'China UnionPay');
	});

	it('has a prefix of 622668 and a length of 16', function() {
		assert(detectNetwork('6226682235276962') === 'China UnionPay');
	});

	it('has a prefix of 622669 and a length of 16', function() {
		assert(detectNetwork('6226696860966447') === 'China UnionPay');
	});

	it('has a prefix of 622670 and a length of 16', function() {
		assert(detectNetwork('6226700992411519') === 'China UnionPay');
	});

	it('has a prefix of 622671 and a length of 16', function() {
		assert(detectNetwork('6226710237281886') === 'China UnionPay');
	});

	it('has a prefix of 622672 and a length of 16', function() {
		assert(detectNetwork('6226721863315559') === 'China UnionPay');
	});

	it('has a prefix of 622673 and a length of 16', function() {
		assert(detectNetwork('6226734309722236') === 'China UnionPay');
	});

	it('has a prefix of 622674 and a length of 16', function() {
		assert(detectNetwork('6226747573642702') === 'China UnionPay');
	});

	it('has a prefix of 622675 and a length of 16', function() {
		assert(detectNetwork('6226752818935769') === 'China UnionPay');
	});

	it('has a prefix of 622676 and a length of 16', function() {
		assert(detectNetwork('6226765427996562') === 'China UnionPay');
	});

	it('has a prefix of 622677 and a length of 16', function() {
		assert(detectNetwork('6226777130722444') === 'China UnionPay');
	});

	it('has a prefix of 622678 and a length of 16', function() {
		assert(detectNetwork('6226783793190795') === 'China UnionPay');
	});

	it('has a prefix of 622679 and a length of 16', function() {
		assert(detectNetwork('6226790918071238') === 'China UnionPay');
	});

	it('has a prefix of 622680 and a length of 16', function() {
		assert(detectNetwork('6226805318139659') === 'China UnionPay');
	});

	it('has a prefix of 622681 and a length of 16', function() {
		assert(detectNetwork('6226817738030959') === 'China UnionPay');
	});

	it('has a prefix of 622682 and a length of 16', function() {
		assert(detectNetwork('6226829014383276') === 'China UnionPay');
	});

	it('has a prefix of 622683 and a length of 16', function() {
		assert(detectNetwork('6226834607925005') === 'China UnionPay');
	});

	it('has a prefix of 622684 and a length of 16', function() {
		assert(detectNetwork('6226841494088877') === 'China UnionPay');
	});

	it('has a prefix of 622685 and a length of 16', function() {
		assert(detectNetwork('6226858019758879') === 'China UnionPay');
	});

	it('has a prefix of 622686 and a length of 16', function() {
		assert(detectNetwork('6226865861525406') === 'China UnionPay');
	});

	it('has a prefix of 622687 and a length of 16', function() {
		assert(detectNetwork('6226874589431116') === 'China UnionPay');
	});

	it('has a prefix of 622688 and a length of 16', function() {
		assert(detectNetwork('6226889004985517') === 'China UnionPay');
	});

	it('has a prefix of 622689 and a length of 16', function() {
		assert(detectNetwork('6226898773159868') === 'China UnionPay');
	});

	it('has a prefix of 622690 and a length of 16', function() {
		assert(detectNetwork('6226903652803610') === 'China UnionPay');
	});

	it('has a prefix of 622691 and a length of 16', function() {
		assert(detectNetwork('6226911242794629') === 'China UnionPay');
	});

	it('has a prefix of 622692 and a length of 16', function() {
		assert(detectNetwork('6226929065427121') === 'China UnionPay');
	});

	it('has a prefix of 622693 and a length of 16', function() {
		assert(detectNetwork('6226931061118182') === 'China UnionPay');
	});

	it('has a prefix of 622694 and a length of 16', function() {
		assert(detectNetwork('6226942312012347') === 'China UnionPay');
	});

	it('has a prefix of 622695 and a length of 16', function() {
		assert(detectNetwork('6226959629081690') === 'China UnionPay');
	});

	it('has a prefix of 622696 and a length of 16', function() {
		assert(detectNetwork('6226963028550434') === 'China UnionPay');
	});

	it('has a prefix of 622697 and a length of 16', function() {
		assert(detectNetwork('6226972834132940') === 'China UnionPay');
	});

	it('has a prefix of 622698 and a length of 16', function() {
		assert(detectNetwork('6226986425245467') === 'China UnionPay');
	});

	it('has a prefix of 622699 and a length of 16', function() {
		assert(detectNetwork('6226997490520978') === 'China UnionPay');
	});

	it('has a prefix of 622700 and a length of 16', function() {
		assert(detectNetwork('6227008311795949') === 'China UnionPay');
	});

	it('has a prefix of 622701 and a length of 16', function() {
		assert(detectNetwork('6227010605412018') === 'China UnionPay');
	});

	it('has a prefix of 622702 and a length of 16', function() {
		assert(detectNetwork('6227029609849605') === 'China UnionPay');
	});

	it('has a prefix of 622703 and a length of 16', function() {
		assert(detectNetwork('6227035225575409') === 'China UnionPay');
	});

	it('has a prefix of 622704 and a length of 16', function() {
		assert(detectNetwork('6227047156926367') === 'China UnionPay');
	});

	it('has a prefix of 622705 and a length of 16', function() {
		assert(detectNetwork('6227051320890270') === 'China UnionPay');
	});

	it('has a prefix of 622706 and a length of 16', function() {
		assert(detectNetwork('6227060619232510') === 'China UnionPay');
	});

	it('has a prefix of 622707 and a length of 16', function() {
		assert(detectNetwork('6227073043522415') === 'China UnionPay');
	});

	it('has a prefix of 622708 and a length of 16', function() {
		assert(detectNetwork('6227086563179123') === 'China UnionPay');
	});

	it('has a prefix of 622709 and a length of 16', function() {
		assert(detectNetwork('6227097841030545') === 'China UnionPay');
	});

	it('has a prefix of 622710 and a length of 16', function() {
		assert(detectNetwork('6227109243991229') === 'China UnionPay');
	});

	it('has a prefix of 622711 and a length of 16', function() {
		assert(detectNetwork('6227112158680723') === 'China UnionPay');
	});

	it('has a prefix of 622712 and a length of 16', function() {
		assert(detectNetwork('6227121335467622') === 'China UnionPay');
	});

	it('has a prefix of 622713 and a length of 16', function() {
		assert(detectNetwork('6227132808628715') === 'China UnionPay');
	});

	it('has a prefix of 622714 and a length of 16', function() {
		assert(detectNetwork('6227140491407965') === 'China UnionPay');
	});

	it('has a prefix of 622715 and a length of 16', function() {
		assert(detectNetwork('6227156143058370') === 'China UnionPay');
	});

	it('has a prefix of 622716 and a length of 16', function() {
		assert(detectNetwork('6227163667982447') === 'China UnionPay');
	});

	it('has a prefix of 622717 and a length of 16', function() {
		assert(detectNetwork('6227173198739371') === 'China UnionPay');
	});

	it('has a prefix of 622718 and a length of 16', function() {
		assert(detectNetwork('6227189982182485') === 'China UnionPay');
	});

	it('has a prefix of 622719 and a length of 16', function() {
		assert(detectNetwork('6227193424440433') === 'China UnionPay');
	});

	it('has a prefix of 622720 and a length of 16', function() {
		assert(detectNetwork('6227204586746701') === 'China UnionPay');
	});

	it('has a prefix of 622721 and a length of 16', function() {
		assert(detectNetwork('6227214174398914') === 'China UnionPay');
	});

	it('has a prefix of 622722 and a length of 16', function() {
		assert(detectNetwork('6227221335608310') === 'China UnionPay');
	});

	it('has a prefix of 622723 and a length of 16', function() {
		assert(detectNetwork('6227232669515063') === 'China UnionPay');
	});

	it('has a prefix of 622724 and a length of 16', function() {
		assert(detectNetwork('6227243261317044') === 'China UnionPay');
	});

	it('has a prefix of 622725 and a length of 16', function() {
		assert(detectNetwork('6227251087267177') === 'China UnionPay');
	});

	it('has a prefix of 622726 and a length of 16', function() {
		assert(detectNetwork('6227267816994434') === 'China UnionPay');
	});

	it('has a prefix of 622727 and a length of 16', function() {
		assert(detectNetwork('6227279489606779') === 'China UnionPay');
	});

	it('has a prefix of 622728 and a length of 16', function() {
		assert(detectNetwork('6227288939745270') === 'China UnionPay');
	});

	it('has a prefix of 622729 and a length of 16', function() {
		assert(detectNetwork('6227298339029273') === 'China UnionPay');
	});

	it('has a prefix of 622730 and a length of 16', function() {
		assert(detectNetwork('6227305589079311') === 'China UnionPay');
	});

	it('has a prefix of 622731 and a length of 16', function() {
		assert(detectNetwork('6227316240995134') === 'China UnionPay');
	});

	it('has a prefix of 622732 and a length of 16', function() {
		assert(detectNetwork('6227323054073373') === 'China UnionPay');
	});

	it('has a prefix of 622733 and a length of 16', function() {
		assert(detectNetwork('6227335743153736') === 'China UnionPay');
	});

	it('has a prefix of 622734 and a length of 16', function() {
		assert(detectNetwork('6227341820425290') === 'China UnionPay');
	});

	it('has a prefix of 622735 and a length of 16', function() {
		assert(detectNetwork('6227350440174603') === 'China UnionPay');
	});

	it('has a prefix of 622736 and a length of 16', function() {
		assert(detectNetwork('6227368684545030') === 'China UnionPay');
	});

	it('has a prefix of 622737 and a length of 16', function() {
		assert(detectNetwork('6227374053758881') === 'China UnionPay');
	});

	it('has a prefix of 622738 and a length of 16', function() {
		assert(detectNetwork('6227388924669131') === 'China UnionPay');
	});

	it('has a prefix of 622739 and a length of 16', function() {
		assert(detectNetwork('6227399436416058') === 'China UnionPay');
	});

	it('has a prefix of 622740 and a length of 16', function() {
		assert(detectNetwork('6227401784735848') === 'China UnionPay');
	});

	it('has a prefix of 622741 and a length of 16', function() {
		assert(detectNetwork('6227411204257179') === 'China UnionPay');
	});

	it('has a prefix of 622742 and a length of 16', function() {
		assert(detectNetwork('6227421653717466') === 'China UnionPay');
	});

	it('has a prefix of 622743 and a length of 16', function() {
		assert(detectNetwork('6227433931730050') === 'China UnionPay');
	});

	it('has a prefix of 622744 and a length of 16', function() {
		assert(detectNetwork('6227446327550000') === 'China UnionPay');
	});

	it('has a prefix of 622745 and a length of 16', function() {
		assert(detectNetwork('6227452875526058') === 'China UnionPay');
	});

	it('has a prefix of 622746 and a length of 16', function() {
		assert(detectNetwork('6227462838634690') === 'China UnionPay');
	});

	it('has a prefix of 622747 and a length of 16', function() {
		assert(detectNetwork('6227473387193202') === 'China UnionPay');
	});

	it('has a prefix of 622748 and a length of 16', function() {
		assert(detectNetwork('6227486663488479') === 'China UnionPay');
	});

	it('has a prefix of 622749 and a length of 16', function() {
		assert(detectNetwork('6227498905438440') === 'China UnionPay');
	});

	it('has a prefix of 622750 and a length of 16', function() {
		assert(detectNetwork('6227508466948847') === 'China UnionPay');
	});

	it('has a prefix of 622751 and a length of 16', function() {
		assert(detectNetwork('6227517447081661') === 'China UnionPay');
	});

	it('has a prefix of 622752 and a length of 16', function() {
		assert(detectNetwork('6227521966338103') === 'China UnionPay');
	});

	it('has a prefix of 622753 and a length of 16', function() {
		assert(detectNetwork('6227533443776641') === 'China UnionPay');
	});

	it('has a prefix of 622754 and a length of 16', function() {
		assert(detectNetwork('6227543070698443') === 'China UnionPay');
	});

	it('has a prefix of 622755 and a length of 16', function() {
		assert(detectNetwork('6227553991717320') === 'China UnionPay');
	});

	it('has a prefix of 622756 and a length of 16', function() {
		assert(detectNetwork('6227564316763829') === 'China UnionPay');
	});

	it('has a prefix of 622757 and a length of 16', function() {
		assert(detectNetwork('6227570133956642') === 'China UnionPay');
	});

	it('has a prefix of 622758 and a length of 16', function() {
		assert(detectNetwork('6227585265806241') === 'China UnionPay');
	});

	it('has a prefix of 622759 and a length of 16', function() {
		assert(detectNetwork('6227591535250763') === 'China UnionPay');
	});

	it('has a prefix of 622760 and a length of 16', function() {
		assert(detectNetwork('6227606935623298') === 'China UnionPay');
	});

	it('has a prefix of 622761 and a length of 16', function() {
		assert(detectNetwork('6227612729819305') === 'China UnionPay');
	});

	it('has a prefix of 622762 and a length of 16', function() {
		assert(detectNetwork('6227623953704609') === 'China UnionPay');
	});

	it('has a prefix of 622763 and a length of 16', function() {
		assert(detectNetwork('6227634915062787') === 'China UnionPay');
	});

	it('has a prefix of 622764 and a length of 16', function() {
		assert(detectNetwork('6227645501669524') === 'China UnionPay');
	});

	it('has a prefix of 622765 and a length of 16', function() {
		assert(detectNetwork('6227651151403050') === 'China UnionPay');
	});

	it('has a prefix of 622766 and a length of 16', function() {
		assert(detectNetwork('6227661592731549') === 'China UnionPay');
	});

	it('has a prefix of 622767 and a length of 16', function() {
		assert(detectNetwork('6227673383188402') === 'China UnionPay');
	});

	it('has a prefix of 622768 and a length of 16', function() {
		assert(detectNetwork('6227689763831997') === 'China UnionPay');
	});

	it('has a prefix of 622769 and a length of 16', function() {
		assert(detectNetwork('6227691842195126') === 'China UnionPay');
	});

	it('has a prefix of 622770 and a length of 16', function() {
		assert(detectNetwork('6227703926906536') === 'China UnionPay');
	});

	it('has a prefix of 622771 and a length of 16', function() {
		assert(detectNetwork('6227711409691235') === 'China UnionPay');
	});

	it('has a prefix of 622772 and a length of 16', function() {
		assert(detectNetwork('6227721419984944') === 'China UnionPay');
	});

	it('has a prefix of 622773 and a length of 16', function() {
		assert(detectNetwork('6227734575237620') === 'China UnionPay');
	});

	it('has a prefix of 622774 and a length of 16', function() {
		assert(detectNetwork('6227746484674747') === 'China UnionPay');
	});

	it('has a prefix of 622775 and a length of 16', function() {
		assert(detectNetwork('6227754187964294') === 'China UnionPay');
	});

	it('has a prefix of 622776 and a length of 16', function() {
		assert(detectNetwork('6227765593734998') === 'China UnionPay');
	});

	it('has a prefix of 622777 and a length of 16', function() {
		assert(detectNetwork('6227778172913668') === 'China UnionPay');
	});

	it('has a prefix of 622778 and a length of 16', function() {
		assert(detectNetwork('6227786846294090') === 'China UnionPay');
	});

	it('has a prefix of 622779 and a length of 16', function() {
		assert(detectNetwork('6227797900593825') === 'China UnionPay');
	});

	it('has a prefix of 622780 and a length of 16', function() {
		assert(detectNetwork('6227804261335213') === 'China UnionPay');
	});

	it('has a prefix of 622781 and a length of 16', function() {
		assert(detectNetwork('6227812223781412') === 'China UnionPay');
	});

	it('has a prefix of 622782 and a length of 16', function() {
		assert(detectNetwork('6227827102939884') === 'China UnionPay');
	});

	it('has a prefix of 622783 and a length of 16', function() {
		assert(detectNetwork('6227832942804925') === 'China UnionPay');
	});

	it('has a prefix of 622784 and a length of 16', function() {
		assert(detectNetwork('6227845083372259') === 'China UnionPay');
	});

	it('has a prefix of 622785 and a length of 16', function() {
		assert(detectNetwork('6227856429301081') === 'China UnionPay');
	});

	it('has a prefix of 622786 and a length of 16', function() {
		assert(detectNetwork('6227865411968404') === 'China UnionPay');
	});

	it('has a prefix of 622787 and a length of 16', function() {
		assert(detectNetwork('6227875841914357') === 'China UnionPay');
	});

	it('has a prefix of 622788 and a length of 16', function() {
		assert(detectNetwork('6227884794772787') === 'China UnionPay');
	});

	it('has a prefix of 622789 and a length of 16', function() {
		assert(detectNetwork('6227894517725089') === 'China UnionPay');
	});

	it('has a prefix of 622790 and a length of 16', function() {
		assert(detectNetwork('6227903312755987') === 'China UnionPay');
	});

	it('has a prefix of 622791 and a length of 16', function() {
		assert(detectNetwork('6227915384618782') === 'China UnionPay');
	});

	it('has a prefix of 622792 and a length of 16', function() {
		assert(detectNetwork('6227920276539347') === 'China UnionPay');
	});

	it('has a prefix of 622793 and a length of 16', function() {
		assert(detectNetwork('6227936922129216') === 'China UnionPay');
	});

	it('has a prefix of 622794 and a length of 16', function() {
		assert(detectNetwork('6227942729812679') === 'China UnionPay');
	});

	it('has a prefix of 622795 and a length of 16', function() {
		assert(detectNetwork('6227955193592656') === 'China UnionPay');
	});

	it('has a prefix of 622796 and a length of 16', function() {
		assert(detectNetwork('6227960470321064') === 'China UnionPay');
	});

	it('has a prefix of 622797 and a length of 16', function() {
		assert(detectNetwork('6227979796695062') === 'China UnionPay');
	});

	it('has a prefix of 622798 and a length of 16', function() {
		assert(detectNetwork('6227987084533932') === 'China UnionPay');
	});

	it('has a prefix of 622799 and a length of 16', function() {
		assert(detectNetwork('6227998712092342') === 'China UnionPay');
	});

	it('has a prefix of 622800 and a length of 16', function() {
		assert(detectNetwork('6228009787645399') === 'China UnionPay');
	});

	it('has a prefix of 622801 and a length of 16', function() {
		assert(detectNetwork('6228018900927711') === 'China UnionPay');
	});

	it('has a prefix of 622802 and a length of 16', function() {
		assert(detectNetwork('6228020842850935') === 'China UnionPay');
	});

	it('has a prefix of 622803 and a length of 16', function() {
		assert(detectNetwork('6228039215854819') === 'China UnionPay');
	});

	it('has a prefix of 622804 and a length of 16', function() {
		assert(detectNetwork('6228048391164534') === 'China UnionPay');
	});

	it('has a prefix of 622805 and a length of 16', function() {
		assert(detectNetwork('6228051804234750') === 'China UnionPay');
	});

	it('has a prefix of 622806 and a length of 16', function() {
		assert(detectNetwork('6228062557993612') === 'China UnionPay');
	});

	it('has a prefix of 622807 and a length of 16', function() {
		assert(detectNetwork('6228074286411358') === 'China UnionPay');
	});

	it('has a prefix of 622808 and a length of 16', function() {
		assert(detectNetwork('6228086526487229') === 'China UnionPay');
	});

	it('has a prefix of 622809 and a length of 16', function() {
		assert(detectNetwork('6228097170262368') === 'China UnionPay');
	});

	it('has a prefix of 622810 and a length of 16', function() {
		assert(detectNetwork('6228106650368480') === 'China UnionPay');
	});

	it('has a prefix of 622811 and a length of 16', function() {
		assert(detectNetwork('6228119014134061') === 'China UnionPay');
	});

	it('has a prefix of 622812 and a length of 16', function() {
		assert(detectNetwork('6228127683709185') === 'China UnionPay');
	});

	it('has a prefix of 622813 and a length of 16', function() {
		assert(detectNetwork('6228131383320312') === 'China UnionPay');
	});

	it('has a prefix of 622814 and a length of 16', function() {
		assert(detectNetwork('6228140751723628') === 'China UnionPay');
	});

	it('has a prefix of 622815 and a length of 16', function() {
		assert(detectNetwork('6228157595636054') === 'China UnionPay');
	});

	it('has a prefix of 622816 and a length of 16', function() {
		assert(detectNetwork('6228160603995091') === 'China UnionPay');
	});

	it('has a prefix of 622817 and a length of 16', function() {
		assert(detectNetwork('6228172553024260') === 'China UnionPay');
	});

	it('has a prefix of 622818 and a length of 16', function() {
		assert(detectNetwork('6228181543154693') === 'China UnionPay');
	});

	it('has a prefix of 622819 and a length of 16', function() {
		assert(detectNetwork('6228198274512006') === 'China UnionPay');
	});

	it('has a prefix of 622820 and a length of 16', function() {
		assert(detectNetwork('6228204389080882') === 'China UnionPay');
	});

	it('has a prefix of 622821 and a length of 16', function() {
		assert(detectNetwork('6228210408702935') === 'China UnionPay');
	});

	it('has a prefix of 622822 and a length of 16', function() {
		assert(detectNetwork('6228221683531838') === 'China UnionPay');
	});

	it('has a prefix of 622823 and a length of 16', function() {
		assert(detectNetwork('6228230983518663') === 'China UnionPay');
	});

	it('has a prefix of 622824 and a length of 16', function() {
		assert(detectNetwork('6228244879342217') === 'China UnionPay');
	});

	it('has a prefix of 622825 and a length of 16', function() {
		assert(detectNetwork('6228252059042675') === 'China UnionPay');
	});

	it('has a prefix of 622826 and a length of 16', function() {
		assert(detectNetwork('6228266750624429') === 'China UnionPay');
	});

	it('has a prefix of 622827 and a length of 16', function() {
		assert(detectNetwork('6228278243634087') === 'China UnionPay');
	});

	it('has a prefix of 622828 and a length of 16', function() {
		assert(detectNetwork('6228286234538413') === 'China UnionPay');
	});

	it('has a prefix of 622829 and a length of 16', function() {
		assert(detectNetwork('6228298031981903') === 'China UnionPay');
	});

	it('has a prefix of 622830 and a length of 16', function() {
		assert(detectNetwork('6228308970522276') === 'China UnionPay');
	});

	it('has a prefix of 622831 and a length of 16', function() {
		assert(detectNetwork('6228310938154818') === 'China UnionPay');
	});

	it('has a prefix of 622832 and a length of 16', function() {
		assert(detectNetwork('6228326562499166') === 'China UnionPay');
	});

	it('has a prefix of 622833 and a length of 16', function() {
		assert(detectNetwork('6228332767761054') === 'China UnionPay');
	});

	it('has a prefix of 622834 and a length of 16', function() {
		assert(detectNetwork('6228343622369106') === 'China UnionPay');
	});

	it('has a prefix of 622835 and a length of 16', function() {
		assert(detectNetwork('6228351712337557') === 'China UnionPay');
	});

	it('has a prefix of 622836 and a length of 16', function() {
		assert(detectNetwork('6228360230778832') === 'China UnionPay');
	});

	it('has a prefix of 622837 and a length of 16', function() {
		assert(detectNetwork('6228373267618554') === 'China UnionPay');
	});

	it('has a prefix of 622838 and a length of 16', function() {
		assert(detectNetwork('6228388953268698') === 'China UnionPay');
	});

	it('has a prefix of 622839 and a length of 16', function() {
		assert(detectNetwork('6228396661260985') === 'China UnionPay');
	});

	it('has a prefix of 622840 and a length of 16', function() {
		assert(detectNetwork('6228408789381026') === 'China UnionPay');
	});

	it('has a prefix of 622841 and a length of 16', function() {
		assert(detectNetwork('6228419264282484') === 'China UnionPay');
	});

	it('has a prefix of 622842 and a length of 16', function() {
		assert(detectNetwork('6228429320148746') === 'China UnionPay');
	});

	it('has a prefix of 622843 and a length of 16', function() {
		assert(detectNetwork('6228431904501343') === 'China UnionPay');
	});

	it('has a prefix of 622844 and a length of 16', function() {
		assert(detectNetwork('6228447873314927') === 'China UnionPay');
	});

	it('has a prefix of 622845 and a length of 16', function() {
		assert(detectNetwork('6228453144718684') === 'China UnionPay');
	});

	it('has a prefix of 622846 and a length of 16', function() {
		assert(detectNetwork('6228469020897393') === 'China UnionPay');
	});

	it('has a prefix of 622847 and a length of 16', function() {
		assert(detectNetwork('6228476229898617') === 'China UnionPay');
	});

	it('has a prefix of 622848 and a length of 16', function() {
		assert(detectNetwork('6228484518535405') === 'China UnionPay');
	});

	it('has a prefix of 622849 and a length of 16', function() {
		assert(detectNetwork('6228490410694507') === 'China UnionPay');
	});

	it('has a prefix of 622850 and a length of 16', function() {
		assert(detectNetwork('6228502886548169') === 'China UnionPay');
	});

	it('has a prefix of 622851 and a length of 16', function() {
		assert(detectNetwork('6228511716237024') === 'China UnionPay');
	});

	it('has a prefix of 622852 and a length of 16', function() {
		assert(detectNetwork('6228527078062976') === 'China UnionPay');
	});

	it('has a prefix of 622853 and a length of 16', function() {
		assert(detectNetwork('6228534335078323') === 'China UnionPay');
	});

	it('has a prefix of 622854 and a length of 16', function() {
		assert(detectNetwork('6228543228244618') === 'China UnionPay');
	});

	it('has a prefix of 622855 and a length of 16', function() {
		assert(detectNetwork('6228557429900264') === 'China UnionPay');
	});

	it('has a prefix of 622856 and a length of 16', function() {
		assert(detectNetwork('6228563939290693') === 'China UnionPay');
	});

	it('has a prefix of 622857 and a length of 16', function() {
		assert(detectNetwork('6228570275141686') === 'China UnionPay');
	});

	it('has a prefix of 622858 and a length of 16', function() {
		assert(detectNetwork('6228581376850732') === 'China UnionPay');
	});

	it('has a prefix of 622859 and a length of 16', function() {
		assert(detectNetwork('6228591874959672') === 'China UnionPay');
	});

	it('has a prefix of 622860 and a length of 16', function() {
		assert(detectNetwork('6228601607235029') === 'China UnionPay');
	});

	it('has a prefix of 622861 and a length of 16', function() {
		assert(detectNetwork('6228613846674711') === 'China UnionPay');
	});

	it('has a prefix of 622862 and a length of 16', function() {
		assert(detectNetwork('6228622363213525') === 'China UnionPay');
	});

	it('has a prefix of 622863 and a length of 16', function() {
		assert(detectNetwork('6228634562554256') === 'China UnionPay');
	});

	it('has a prefix of 622864 and a length of 16', function() {
		assert(detectNetwork('6228643804892320') === 'China UnionPay');
	});

	it('has a prefix of 622865 and a length of 16', function() {
		assert(detectNetwork('6228652009547002') === 'China UnionPay');
	});

	it('has a prefix of 622866 and a length of 16', function() {
		assert(detectNetwork('6228665013479947') === 'China UnionPay');
	});

	it('has a prefix of 622867 and a length of 16', function() {
		assert(detectNetwork('6228675229881491') === 'China UnionPay');
	});

	it('has a prefix of 622868 and a length of 16', function() {
		assert(detectNetwork('6228680853660296') === 'China UnionPay');
	});

	it('has a prefix of 622869 and a length of 16', function() {
		assert(detectNetwork('6228695441531789') === 'China UnionPay');
	});

	it('has a prefix of 622870 and a length of 16', function() {
		assert(detectNetwork('6228702224681484') === 'China UnionPay');
	});

	it('has a prefix of 622871 and a length of 16', function() {
		assert(detectNetwork('6228716564330250') === 'China UnionPay');
	});

	it('has a prefix of 622872 and a length of 16', function() {
		assert(detectNetwork('6228729413354132') === 'China UnionPay');
	});

	it('has a prefix of 622873 and a length of 16', function() {
		assert(detectNetwork('6228732348933662') === 'China UnionPay');
	});

	it('has a prefix of 622874 and a length of 16', function() {
		assert(detectNetwork('6228745197348197') === 'China UnionPay');
	});

	it('has a prefix of 622875 and a length of 16', function() {
		assert(detectNetwork('6228757665314561') === 'China UnionPay');
	});

	it('has a prefix of 622876 and a length of 16', function() {
		assert(detectNetwork('6228766216393859') === 'China UnionPay');
	});

	it('has a prefix of 622877 and a length of 16', function() {
		assert(detectNetwork('6228778653535485') === 'China UnionPay');
	});

	it('has a prefix of 622878 and a length of 16', function() {
		assert(detectNetwork('6228787035253965') === 'China UnionPay');
	});

	it('has a prefix of 622879 and a length of 16', function() {
		assert(detectNetwork('6228793006009043') === 'China UnionPay');
	});

	it('has a prefix of 622880 and a length of 16', function() {
		assert(detectNetwork('6228802858213735') === 'China UnionPay');
	});

	it('has a prefix of 622881 and a length of 16', function() {
		assert(detectNetwork('6228810543298566') === 'China UnionPay');
	});

	it('has a prefix of 622882 and a length of 16', function() {
		assert(detectNetwork('6228823781753982') === 'China UnionPay');
	});

	it('has a prefix of 622883 and a length of 16', function() {
		assert(detectNetwork('6228836873268500') === 'China UnionPay');
	});

	it('has a prefix of 622884 and a length of 16', function() {
		assert(detectNetwork('6228843220052443') === 'China UnionPay');
	});

	it('has a prefix of 622885 and a length of 16', function() {
		assert(detectNetwork('6228855279857660') === 'China UnionPay');
	});

	it('has a prefix of 622886 and a length of 16', function() {
		assert(detectNetwork('6228864254371209') === 'China UnionPay');
	});

	it('has a prefix of 622887 and a length of 16', function() {
		assert(detectNetwork('6228872673498419') === 'China UnionPay');
	});

	it('has a prefix of 622888 and a length of 16', function() {
		assert(detectNetwork('6228881562250569') === 'China UnionPay');
	});

	it('has a prefix of 622889 and a length of 16', function() {
		assert(detectNetwork('6228899403296155') === 'China UnionPay');
	});

	it('has a prefix of 622890 and a length of 16', function() {
		assert(detectNetwork('6228907815524777') === 'China UnionPay');
	});

	it('has a prefix of 622891 and a length of 16', function() {
		assert(detectNetwork('6228919900384930') === 'China UnionPay');
	});

	it('has a prefix of 622892 and a length of 16', function() {
		assert(detectNetwork('6228922143859118') === 'China UnionPay');
	});

	it('has a prefix of 622893 and a length of 16', function() {
		assert(detectNetwork('6228932338601308') === 'China UnionPay');
	});

	it('has a prefix of 622894 and a length of 16', function() {
		assert(detectNetwork('6228942998779704') === 'China UnionPay');
	});

	it('has a prefix of 622895 and a length of 16', function() {
		assert(detectNetwork('6228954973856108') === 'China UnionPay');
	});

	it('has a prefix of 622896 and a length of 16', function() {
		assert(detectNetwork('6228968774161733') === 'China UnionPay');
	});

	it('has a prefix of 622897 and a length of 16', function() {
		assert(detectNetwork('6228975881496591') === 'China UnionPay');
	});

	it('has a prefix of 622898 and a length of 16', function() {
		assert(detectNetwork('6228988759102252') === 'China UnionPay');
	});

	it('has a prefix of 622899 and a length of 16', function() {
		assert(detectNetwork('6228991260127691') === 'China UnionPay');
	});

	it('has a prefix of 622900 and a length of 16', function() {
		assert(detectNetwork('6229001285465579') === 'China UnionPay');
	});

	it('has a prefix of 622901 and a length of 16', function() {
		assert(detectNetwork('6229013148446216') === 'China UnionPay');
	});

	it('has a prefix of 622902 and a length of 16', function() {
		assert(detectNetwork('6229027159199908') === 'China UnionPay');
	});

	it('has a prefix of 622903 and a length of 16', function() {
		assert(detectNetwork('6229038002078014') === 'China UnionPay');
	});

	it('has a prefix of 622904 and a length of 16', function() {
		assert(detectNetwork('6229048741490222') === 'China UnionPay');
	});

	it('has a prefix of 622905 and a length of 16', function() {
		assert(detectNetwork('6229057162537508') === 'China UnionPay');
	});

	it('has a prefix of 622906 and a length of 16', function() {
		assert(detectNetwork('6229061062507411') === 'China UnionPay');
	});

	it('has a prefix of 622907 and a length of 16', function() {
		assert(detectNetwork('6229071662942197') === 'China UnionPay');
	});

	it('has a prefix of 622908 and a length of 16', function() {
		assert(detectNetwork('6229086826193136') === 'China UnionPay');
	});

	it('has a prefix of 622909 and a length of 16', function() {
		assert(detectNetwork('6229095298008246') === 'China UnionPay');
	});

	it('has a prefix of 622910 and a length of 16', function() {
		assert(detectNetwork('6229102776593360') === 'China UnionPay');
	});

	it('has a prefix of 622911 and a length of 16', function() {
		assert(detectNetwork('6229117371579498') === 'China UnionPay');
	});

	it('has a prefix of 622912 and a length of 16', function() {
		assert(detectNetwork('6229120156321946') === 'China UnionPay');
	});

	it('has a prefix of 622913 and a length of 16', function() {
		assert(detectNetwork('6229137557220562') === 'China UnionPay');
	});

	it('has a prefix of 622914 and a length of 16', function() {
		assert(detectNetwork('6229144895103267') === 'China UnionPay');
	});

	it('has a prefix of 622915 and a length of 16', function() {
		assert(detectNetwork('6229152115496427') === 'China UnionPay');
	});

	it('has a prefix of 622916 and a length of 16', function() {
		assert(detectNetwork('6229160656963650') === 'China UnionPay');
	});

	it('has a prefix of 622917 and a length of 16', function() {
		assert(detectNetwork('6229172613000326') === 'China UnionPay');
	});

	it('has a prefix of 622918 and a length of 16', function() {
		assert(detectNetwork('6229183994018188') === 'China UnionPay');
	});

	it('has a prefix of 622919 and a length of 16', function() {
		assert(detectNetwork('6229190255530069') === 'China UnionPay');
	});

	it('has a prefix of 622920 and a length of 16', function() {
		assert(detectNetwork('6229206553914462') === 'China UnionPay');
	});

	it('has a prefix of 622921 and a length of 16', function() {
		assert(detectNetwork('6229215836253082') === 'China UnionPay');
	});

	it('has a prefix of 622922 and a length of 16', function() {
		assert(detectNetwork('6229225528199233') === 'China UnionPay');
	});

	it('has a prefix of 622923 and a length of 16', function() {
		assert(detectNetwork('6229239872872205') === 'China UnionPay');
	});

	it('has a prefix of 622924 and a length of 16', function() {
		assert(detectNetwork('6229246788189506') === 'China UnionPay');
	});

	it('has a prefix of 622925 and a length of 16', function() {
		assert(detectNetwork('6229250784161961') === 'China UnionPay');
	});

	it('has a prefix of 624 and a length of 17', function() {
		assert(detectNetwork('62411000277032926') === 'China UnionPay');
	});

	it('has a prefix of 625 and a length of 17', function() {
		assert(detectNetwork('62567228030122267') === 'China UnionPay');
	});

	it('has a prefix of 626 and a length of 17', function() {
		assert(detectNetwork('62627921085322695') === 'China UnionPay');
	});

	it('has a prefix of 6282 and a length of 17', function() {
		assert(detectNetwork('62820854787223192') === 'China UnionPay');
	});

	it('has a prefix of 6283 and a length of 17', function() {
		assert(detectNetwork('62830222469688322') === 'China UnionPay');
	});

	it('has a prefix of 6284 and a length of 17', function() {
		assert(detectNetwork('62840956670001254') === 'China UnionPay');
	});

	it('has a prefix of 6285 and a length of 17', function() {
		assert(detectNetwork('62852351474207610') === 'China UnionPay');
	});

	it('has a prefix of 6286 and a length of 17', function() {
		assert(detectNetwork('62865807276842956') === 'China UnionPay');
	});

	it('has a prefix of 6287 and a length of 17', function() {
		assert(detectNetwork('62870684106861026') === 'China UnionPay');
	});

	it('has a prefix of 6288 and a length of 17', function() {
		assert(detectNetwork('62888033653859741') === 'China UnionPay');
	});

	it('has a prefix of 622126 and a length of 17', function() {
		assert(detectNetwork('62212603990829122') === 'China UnionPay');
	});

	it('has a prefix of 622127 and a length of 17', function() {
		assert(detectNetwork('62212725596979851') === 'China UnionPay');
	});

	it('has a prefix of 622128 and a length of 17', function() {
		assert(detectNetwork('62212836242244676') === 'China UnionPay');
	});

	it('has a prefix of 622129 and a length of 17', function() {
		assert(detectNetwork('62212967954635592') === 'China UnionPay');
	});

	it('has a prefix of 622130 and a length of 17', function() {
		assert(detectNetwork('62213080730601807') === 'China UnionPay');
	});

	it('has a prefix of 622131 and a length of 17', function() {
		assert(detectNetwork('62213154917871475') === 'China UnionPay');
	});

	it('has a prefix of 622132 and a length of 17', function() {
		assert(detectNetwork('62213217347007739') === 'China UnionPay');
	});

	it('has a prefix of 622133 and a length of 17', function() {
		assert(detectNetwork('62213330684918641') === 'China UnionPay');
	});

	it('has a prefix of 622134 and a length of 17', function() {
		assert(detectNetwork('62213449340392091') === 'China UnionPay');
	});

	it('has a prefix of 622135 and a length of 17', function() {
		assert(detectNetwork('62213546623210073') === 'China UnionPay');
	});

	it('has a prefix of 622136 and a length of 17', function() {
		assert(detectNetwork('62213676290428544') === 'China UnionPay');
	});

	it('has a prefix of 622137 and a length of 17', function() {
		assert(detectNetwork('62213724186719797') === 'China UnionPay');
	});

	it('has a prefix of 622138 and a length of 17', function() {
		assert(detectNetwork('62213891111953884') === 'China UnionPay');
	});

	it('has a prefix of 622139 and a length of 17', function() {
		assert(detectNetwork('62213942568391942') === 'China UnionPay');
	});

	it('has a prefix of 622140 and a length of 17', function() {
		assert(detectNetwork('62214028638104121') === 'China UnionPay');
	});

	it('has a prefix of 622141 and a length of 17', function() {
		assert(detectNetwork('62214165056596738') === 'China UnionPay');
	});

	it('has a prefix of 622142 and a length of 17', function() {
		assert(detectNetwork('62214291346823527') === 'China UnionPay');
	});

	it('has a prefix of 622143 and a length of 17', function() {
		assert(detectNetwork('62214352387405577') === 'China UnionPay');
	});

	it('has a prefix of 622144 and a length of 17', function() {
		assert(detectNetwork('62214473439059911') === 'China UnionPay');
	});

	it('has a prefix of 622145 and a length of 17', function() {
		assert(detectNetwork('62214511743408459') === 'China UnionPay');
	});

	it('has a prefix of 622146 and a length of 17', function() {
		assert(detectNetwork('62214631329449921') === 'China UnionPay');
	});

	it('has a prefix of 622147 and a length of 17', function() {
		assert(detectNetwork('62214791321637621') === 'China UnionPay');
	});

	it('has a prefix of 622148 and a length of 17', function() {
		assert(detectNetwork('62214819519089488') === 'China UnionPay');
	});

	it('has a prefix of 622149 and a length of 17', function() {
		assert(detectNetwork('62214979172013678') === 'China UnionPay');
	});

	it('has a prefix of 622150 and a length of 17', function() {
		assert(detectNetwork('62215049409577842') === 'China UnionPay');
	});

	it('has a prefix of 622151 and a length of 17', function() {
		assert(detectNetwork('62215113329127400') === 'China UnionPay');
	});

	it('has a prefix of 622152 and a length of 17', function() {
		assert(detectNetwork('62215268763560283') === 'China UnionPay');
	});

	it('has a prefix of 622153 and a length of 17', function() {
		assert(detectNetwork('62215344279710628') === 'China UnionPay');
	});

	it('has a prefix of 622154 and a length of 17', function() {
		assert(detectNetwork('62215494971965625') === 'China UnionPay');
	});

	it('has a prefix of 622155 and a length of 17', function() {
		assert(detectNetwork('62215590617151931') === 'China UnionPay');
	});

	it('has a prefix of 622156 and a length of 17', function() {
		assert(detectNetwork('62215624960630921') === 'China UnionPay');
	});

	it('has a prefix of 622157 and a length of 17', function() {
		assert(detectNetwork('62215754643637652') === 'China UnionPay');
	});

	it('has a prefix of 622158 and a length of 17', function() {
		assert(detectNetwork('62215878208392543') === 'China UnionPay');
	});

	it('has a prefix of 622159 and a length of 17', function() {
		assert(detectNetwork('62215998109377424') === 'China UnionPay');
	});

	it('has a prefix of 622160 and a length of 17', function() {
		assert(detectNetwork('62216042199937106') === 'China UnionPay');
	});

	it('has a prefix of 622161 and a length of 17', function() {
		assert(detectNetwork('62216120575941839') === 'China UnionPay');
	});

	it('has a prefix of 622162 and a length of 17', function() {
		assert(detectNetwork('62216283402164422') === 'China UnionPay');
	});

	it('has a prefix of 622163 and a length of 17', function() {
		assert(detectNetwork('62216314830197263') === 'China UnionPay');
	});

	it('has a prefix of 622164 and a length of 17', function() {
		assert(detectNetwork('62216437237222264') === 'China UnionPay');
	});

	it('has a prefix of 622165 and a length of 17', function() {
		assert(detectNetwork('62216509201264982') === 'China UnionPay');
	});

	it('has a prefix of 622166 and a length of 17', function() {
		assert(detectNetwork('62216664887583683') === 'China UnionPay');
	});

	it('has a prefix of 622167 and a length of 17', function() {
		assert(detectNetwork('62216789911571835') === 'China UnionPay');
	});

	it('has a prefix of 622168 and a length of 17', function() {
		assert(detectNetwork('62216889819342350') === 'China UnionPay');
	});

	it('has a prefix of 622169 and a length of 17', function() {
		assert(detectNetwork('62216936475670989') === 'China UnionPay');
	});

	it('has a prefix of 622170 and a length of 17', function() {
		assert(detectNetwork('62217095619527933') === 'China UnionPay');
	});

	it('has a prefix of 622171 and a length of 17', function() {
		assert(detectNetwork('62217108628009574') === 'China UnionPay');
	});

	it('has a prefix of 622172 and a length of 17', function() {
		assert(detectNetwork('62217231231028871') === 'China UnionPay');
	});

	it('has a prefix of 622173 and a length of 17', function() {
		assert(detectNetwork('62217394046541468') === 'China UnionPay');
	});

	it('has a prefix of 622174 and a length of 17', function() {
		assert(detectNetwork('62217408764099416') === 'China UnionPay');
	});

	it('has a prefix of 622175 and a length of 17', function() {
		assert(detectNetwork('62217567633486612') === 'China UnionPay');
	});

	it('has a prefix of 622176 and a length of 17', function() {
		assert(detectNetwork('62217625031423385') === 'China UnionPay');
	});

	it('has a prefix of 622177 and a length of 17', function() {
		assert(detectNetwork('62217712523328458') === 'China UnionPay');
	});

	it('has a prefix of 622178 and a length of 17', function() {
		assert(detectNetwork('62217879072801648') === 'China UnionPay');
	});

	it('has a prefix of 622179 and a length of 17', function() {
		assert(detectNetwork('62217920690648290') === 'China UnionPay');
	});

	it('has a prefix of 622180 and a length of 17', function() {
		assert(detectNetwork('62218035310721462') === 'China UnionPay');
	});

	it('has a prefix of 622181 and a length of 17', function() {
		assert(detectNetwork('62218195405401994') === 'China UnionPay');
	});

	it('has a prefix of 622182 and a length of 17', function() {
		assert(detectNetwork('62218245689508292') === 'China UnionPay');
	});

	it('has a prefix of 622183 and a length of 17', function() {
		assert(detectNetwork('62218327665585101') === 'China UnionPay');
	});

	it('has a prefix of 622184 and a length of 17', function() {
		assert(detectNetwork('62218444607724121') === 'China UnionPay');
	});

	it('has a prefix of 622185 and a length of 17', function() {
		assert(detectNetwork('62218563850284420') === 'China UnionPay');
	});

	it('has a prefix of 622186 and a length of 17', function() {
		assert(detectNetwork('62218693536676386') === 'China UnionPay');
	});

	it('has a prefix of 622187 and a length of 17', function() {
		assert(detectNetwork('62218792031982114') === 'China UnionPay');
	});

	it('has a prefix of 622188 and a length of 17', function() {
		assert(detectNetwork('62218864181547517') === 'China UnionPay');
	});

	it('has a prefix of 622189 and a length of 17', function() {
		assert(detectNetwork('62218940603786339') === 'China UnionPay');
	});

	it('has a prefix of 622190 and a length of 17', function() {
		assert(detectNetwork('62219034676816696') === 'China UnionPay');
	});

	it('has a prefix of 622191 and a length of 17', function() {
		assert(detectNetwork('62219176035463592') === 'China UnionPay');
	});

	it('has a prefix of 622192 and a length of 17', function() {
		assert(detectNetwork('62219217015554727') === 'China UnionPay');
	});

	it('has a prefix of 622193 and a length of 17', function() {
		assert(detectNetwork('62219341731735523') === 'China UnionPay');
	});

	it('has a prefix of 622194 and a length of 17', function() {
		assert(detectNetwork('62219490093874830') === 'China UnionPay');
	});

	it('has a prefix of 622195 and a length of 17', function() {
		assert(detectNetwork('62219522876154558') === 'China UnionPay');
	});

	it('has a prefix of 622196 and a length of 17', function() {
		assert(detectNetwork('62219693428506165') === 'China UnionPay');
	});

	it('has a prefix of 622197 and a length of 17', function() {
		assert(detectNetwork('62219718323891127') === 'China UnionPay');
	});

	it('has a prefix of 622198 and a length of 17', function() {
		assert(detectNetwork('62219845326022371') === 'China UnionPay');
	});

	it('has a prefix of 622199 and a length of 17', function() {
		assert(detectNetwork('62219957480125699') === 'China UnionPay');
	});

	it('has a prefix of 622200 and a length of 17', function() {
		assert(detectNetwork('62220050615577181') === 'China UnionPay');
	});

	it('has a prefix of 622201 and a length of 17', function() {
		assert(detectNetwork('62220170277642114') === 'China UnionPay');
	});

	it('has a prefix of 622202 and a length of 17', function() {
		assert(detectNetwork('62220275017529765') === 'China UnionPay');
	});

	it('has a prefix of 622203 and a length of 17', function() {
		assert(detectNetwork('62220378918308582') === 'China UnionPay');
	});

	it('has a prefix of 622204 and a length of 17', function() {
		assert(detectNetwork('62220488265203348') === 'China UnionPay');
	});

	it('has a prefix of 622205 and a length of 17', function() {
		assert(detectNetwork('62220506040506426') === 'China UnionPay');
	});

	it('has a prefix of 622206 and a length of 17', function() {
		assert(detectNetwork('62220638402890866') === 'China UnionPay');
	});

	it('has a prefix of 622207 and a length of 17', function() {
		assert(detectNetwork('62220774830798590') === 'China UnionPay');
	});

	it('has a prefix of 622208 and a length of 17', function() {
		assert(detectNetwork('62220857099312131') === 'China UnionPay');
	});

	it('has a prefix of 622209 and a length of 17', function() {
		assert(detectNetwork('62220952125709935') === 'China UnionPay');
	});

	it('has a prefix of 622210 and a length of 17', function() {
		assert(detectNetwork('62221019826547066') === 'China UnionPay');
	});

	it('has a prefix of 622211 and a length of 17', function() {
		assert(detectNetwork('62221179242562911') === 'China UnionPay');
	});

	it('has a prefix of 622212 and a length of 17', function() {
		assert(detectNetwork('62221204578314798') === 'China UnionPay');
	});

	it('has a prefix of 622213 and a length of 17', function() {
		assert(detectNetwork('62221347294144207') === 'China UnionPay');
	});

	it('has a prefix of 622214 and a length of 17', function() {
		assert(detectNetwork('62221420420484631') === 'China UnionPay');
	});

	it('has a prefix of 622215 and a length of 17', function() {
		assert(detectNetwork('62221501752066791') === 'China UnionPay');
	});

	it('has a prefix of 622216 and a length of 17', function() {
		assert(detectNetwork('62221634919697920') === 'China UnionPay');
	});

	it('has a prefix of 622217 and a length of 17', function() {
		assert(detectNetwork('62221701771074098') === 'China UnionPay');
	});

	it('has a prefix of 622218 and a length of 17', function() {
		assert(detectNetwork('62221806656753415') === 'China UnionPay');
	});

	it('has a prefix of 622219 and a length of 17', function() {
		assert(detectNetwork('62221978603297524') === 'China UnionPay');
	});

	it('has a prefix of 622220 and a length of 17', function() {
		assert(detectNetwork('62222001611725507') === 'China UnionPay');
	});

	it('has a prefix of 622221 and a length of 17', function() {
		assert(detectNetwork('62222184479703689') === 'China UnionPay');
	});

	it('has a prefix of 622222 and a length of 17', function() {
		assert(detectNetwork('62222205327085147') === 'China UnionPay');
	});

	it('has a prefix of 622223 and a length of 17', function() {
		assert(detectNetwork('62222347021024540') === 'China UnionPay');
	});

	it('has a prefix of 622224 and a length of 17', function() {
		assert(detectNetwork('62222417130890793') === 'China UnionPay');
	});

	it('has a prefix of 622225 and a length of 17', function() {
		assert(detectNetwork('62222516938750521') === 'China UnionPay');
	});

	it('has a prefix of 622226 and a length of 17', function() {
		assert(detectNetwork('62222693242389113') === 'China UnionPay');
	});

	it('has a prefix of 622227 and a length of 17', function() {
		assert(detectNetwork('62222785114159401') === 'China UnionPay');
	});

	it('has a prefix of 622228 and a length of 17', function() {
		assert(detectNetwork('62222825641194113') === 'China UnionPay');
	});

	it('has a prefix of 622229 and a length of 17', function() {
		assert(detectNetwork('62222978828368997') === 'China UnionPay');
	});

	it('has a prefix of 622230 and a length of 17', function() {
		assert(detectNetwork('62223048712976841') === 'China UnionPay');
	});

	it('has a prefix of 622231 and a length of 17', function() {
		assert(detectNetwork('62223110025114803') === 'China UnionPay');
	});

	it('has a prefix of 622232 and a length of 17', function() {
		assert(detectNetwork('62223219016940121') === 'China UnionPay');
	});

	it('has a prefix of 622233 and a length of 17', function() {
		assert(detectNetwork('62223338497968777') === 'China UnionPay');
	});

	it('has a prefix of 622234 and a length of 17', function() {
		assert(detectNetwork('62223424633663722') === 'China UnionPay');
	});

	it('has a prefix of 622235 and a length of 17', function() {
		assert(detectNetwork('62223508751884774') === 'China UnionPay');
	});

	it('has a prefix of 622236 and a length of 17', function() {
		assert(detectNetwork('62223624292118138') === 'China UnionPay');
	});

	it('has a prefix of 622237 and a length of 17', function() {
		assert(detectNetwork('62223729525027359') === 'China UnionPay');
	});

	it('has a prefix of 622238 and a length of 17', function() {
		assert(detectNetwork('62223884280858277') === 'China UnionPay');
	});

	it('has a prefix of 622239 and a length of 17', function() {
		assert(detectNetwork('62223970031013451') === 'China UnionPay');
	});

	it('has a prefix of 622240 and a length of 17', function() {
		assert(detectNetwork('62224034263721303') === 'China UnionPay');
	});

	it('has a prefix of 622241 and a length of 17', function() {
		assert(detectNetwork('62224140964302562') === 'China UnionPay');
	});

	it('has a prefix of 622242 and a length of 17', function() {
		assert(detectNetwork('62224272223797800') === 'China UnionPay');
	});

	it('has a prefix of 622243 and a length of 17', function() {
		assert(detectNetwork('62224389293097089') === 'China UnionPay');
	});

	it('has a prefix of 622244 and a length of 17', function() {
		assert(detectNetwork('62224423689543492') === 'China UnionPay');
	});

	it('has a prefix of 622245 and a length of 17', function() {
		assert(detectNetwork('62224526679918023') === 'China UnionPay');
	});

	it('has a prefix of 622246 and a length of 17', function() {
		assert(detectNetwork('62224614639962823') === 'China UnionPay');
	});

	it('has a prefix of 622247 and a length of 17', function() {
		assert(detectNetwork('62224795394435620') === 'China UnionPay');
	});

	it('has a prefix of 622248 and a length of 17', function() {
		assert(detectNetwork('62224841368019814') === 'China UnionPay');
	});

	it('has a prefix of 622249 and a length of 17', function() {
		assert(detectNetwork('62224965555361918') === 'China UnionPay');
	});

	it('has a prefix of 622250 and a length of 17', function() {
		assert(detectNetwork('62225086831806690') === 'China UnionPay');
	});

	it('has a prefix of 622251 and a length of 17', function() {
		assert(detectNetwork('62225154691623629') === 'China UnionPay');
	});

	it('has a prefix of 622252 and a length of 17', function() {
		assert(detectNetwork('62225252765991270') === 'China UnionPay');
	});

	it('has a prefix of 622253 and a length of 17', function() {
		assert(detectNetwork('62225353233385344') === 'China UnionPay');
	});

	it('has a prefix of 622254 and a length of 17', function() {
		assert(detectNetwork('62225421459603736') === 'China UnionPay');
	});

	it('has a prefix of 622255 and a length of 17', function() {
		assert(detectNetwork('62225559884828243') === 'China UnionPay');
	});

	it('has a prefix of 622256 and a length of 17', function() {
		assert(detectNetwork('62225687768225631') === 'China UnionPay');
	});

	it('has a prefix of 622257 and a length of 17', function() {
		assert(detectNetwork('62225738263272895') === 'China UnionPay');
	});

	it('has a prefix of 622258 and a length of 17', function() {
		assert(detectNetwork('62225873325229796') === 'China UnionPay');
	});

	it('has a prefix of 622259 and a length of 17', function() {
		assert(detectNetwork('62225949224963023') === 'China UnionPay');
	});

	it('has a prefix of 622260 and a length of 17', function() {
		assert(detectNetwork('62226061542970223') === 'China UnionPay');
	});

	it('has a prefix of 622261 and a length of 17', function() {
		assert(detectNetwork('62226138962716173') === 'China UnionPay');
	});

	it('has a prefix of 622262 and a length of 17', function() {
		assert(detectNetwork('62226210274504755') === 'China UnionPay');
	});

	it('has a prefix of 622263 and a length of 17', function() {
		assert(detectNetwork('62226349051934545') === 'China UnionPay');
	});

	it('has a prefix of 622264 and a length of 17', function() {
		assert(detectNetwork('62226495752527343') === 'China UnionPay');
	});

	it('has a prefix of 622265 and a length of 17', function() {
		assert(detectNetwork('62226508962907802') === 'China UnionPay');
	});

	it('has a prefix of 622266 and a length of 17', function() {
		assert(detectNetwork('62226607921088236') === 'China UnionPay');
	});

	it('has a prefix of 622267 and a length of 17', function() {
		assert(detectNetwork('62226718657340685') === 'China UnionPay');
	});

	it('has a prefix of 622268 and a length of 17', function() {
		assert(detectNetwork('62226888403173816') === 'China UnionPay');
	});

	it('has a prefix of 622269 and a length of 17', function() {
		assert(detectNetwork('62226915753216699') === 'China UnionPay');
	});

	it('has a prefix of 622270 and a length of 17', function() {
		assert(detectNetwork('62227007541053086') === 'China UnionPay');
	});

	it('has a prefix of 622271 and a length of 17', function() {
		assert(detectNetwork('62227192847401280') === 'China UnionPay');
	});

	it('has a prefix of 622272 and a length of 17', function() {
		assert(detectNetwork('62227210180191007') === 'China UnionPay');
	});

	it('has a prefix of 622273 and a length of 17', function() {
		assert(detectNetwork('62227308273367712') === 'China UnionPay');
	});

	it('has a prefix of 622274 and a length of 17', function() {
		assert(detectNetwork('62227479214299909') === 'China UnionPay');
	});

	it('has a prefix of 622275 and a length of 17', function() {
		assert(detectNetwork('62227503214089768') === 'China UnionPay');
	});

	it('has a prefix of 622276 and a length of 17', function() {
		assert(detectNetwork('62227674303739620') === 'China UnionPay');
	});

	it('has a prefix of 622277 and a length of 17', function() {
		assert(detectNetwork('62227739412557729') === 'China UnionPay');
	});

	it('has a prefix of 622278 and a length of 17', function() {
		assert(detectNetwork('62227851156678951') === 'China UnionPay');
	});

	it('has a prefix of 622279 and a length of 17', function() {
		assert(detectNetwork('62227978972380804') === 'China UnionPay');
	});

	it('has a prefix of 622280 and a length of 17', function() {
		assert(detectNetwork('62228055752224292') === 'China UnionPay');
	});

	it('has a prefix of 622281 and a length of 17', function() {
		assert(detectNetwork('62228167189811849') === 'China UnionPay');
	});

	it('has a prefix of 622282 and a length of 17', function() {
		assert(detectNetwork('62228218314133443') === 'China UnionPay');
	});

	it('has a prefix of 622283 and a length of 17', function() {
		assert(detectNetwork('62228372567474408') === 'China UnionPay');
	});

	it('has a prefix of 622284 and a length of 17', function() {
		assert(detectNetwork('62228405086966523') === 'China UnionPay');
	});

	it('has a prefix of 622285 and a length of 17', function() {
		assert(detectNetwork('62228505079729148') === 'China UnionPay');
	});

	it('has a prefix of 622286 and a length of 17', function() {
		assert(detectNetwork('62228652381189657') === 'China UnionPay');
	});

	it('has a prefix of 622287 and a length of 17', function() {
		assert(detectNetwork('62228787196384143') === 'China UnionPay');
	});

	it('has a prefix of 622288 and a length of 17', function() {
		assert(detectNetwork('62228839773513531') === 'China UnionPay');
	});

	it('has a prefix of 622289 and a length of 17', function() {
		assert(detectNetwork('62228993388012678') === 'China UnionPay');
	});

	it('has a prefix of 622290 and a length of 17', function() {
		assert(detectNetwork('62229069222235324') === 'China UnionPay');
	});

	it('has a prefix of 622291 and a length of 17', function() {
		assert(detectNetwork('62229119397117996') === 'China UnionPay');
	});

	it('has a prefix of 622292 and a length of 17', function() {
		assert(detectNetwork('62229280101041981') === 'China UnionPay');
	});

	it('has a prefix of 622293 and a length of 17', function() {
		assert(detectNetwork('62229302404842699') === 'China UnionPay');
	});

	it('has a prefix of 622294 and a length of 17', function() {
		assert(detectNetwork('62229412635172879') === 'China UnionPay');
	});

	it('has a prefix of 622295 and a length of 17', function() {
		assert(detectNetwork('62229574358950892') === 'China UnionPay');
	});

	it('has a prefix of 622296 and a length of 17', function() {
		assert(detectNetwork('62229607510918238') === 'China UnionPay');
	});

	it('has a prefix of 622297 and a length of 17', function() {
		assert(detectNetwork('62229773235223652') === 'China UnionPay');
	});

	it('has a prefix of 622298 and a length of 17', function() {
		assert(detectNetwork('62229846594469085') === 'China UnionPay');
	});

	it('has a prefix of 622299 and a length of 17', function() {
		assert(detectNetwork('62229912590478575') === 'China UnionPay');
	});

	it('has a prefix of 622300 and a length of 17', function() {
		assert(detectNetwork('62230042131106361') === 'China UnionPay');
	});

	it('has a prefix of 622301 and a length of 17', function() {
		assert(detectNetwork('62230111676995504') === 'China UnionPay');
	});

	it('has a prefix of 622302 and a length of 17', function() {
		assert(detectNetwork('62230202938146586') === 'China UnionPay');
	});

	it('has a prefix of 622303 and a length of 17', function() {
		assert(detectNetwork('62230348196175263') === 'China UnionPay');
	});

	it('has a prefix of 622304 and a length of 17', function() {
		assert(detectNetwork('62230472484239049') === 'China UnionPay');
	});

	it('has a prefix of 622305 and a length of 17', function() {
		assert(detectNetwork('62230581370195825') === 'China UnionPay');
	});

	it('has a prefix of 622306 and a length of 17', function() {
		assert(detectNetwork('62230694531334342') === 'China UnionPay');
	});

	it('has a prefix of 622307 and a length of 17', function() {
		assert(detectNetwork('62230758395724239') === 'China UnionPay');
	});

	it('has a prefix of 622308 and a length of 17', function() {
		assert(detectNetwork('62230853574558533') === 'China UnionPay');
	});

	it('has a prefix of 622309 and a length of 17', function() {
		assert(detectNetwork('62230974691152046') === 'China UnionPay');
	});

	it('has a prefix of 622310 and a length of 17', function() {
		assert(detectNetwork('62231002528136072') === 'China UnionPay');
	});

	it('has a prefix of 622311 and a length of 17', function() {
		assert(detectNetwork('62231110399733338') === 'China UnionPay');
	});

	it('has a prefix of 622312 and a length of 17', function() {
		assert(detectNetwork('62231234785193943') === 'China UnionPay');
	});

	it('has a prefix of 622313 and a length of 17', function() {
		assert(detectNetwork('62231395361506065') === 'China UnionPay');
	});

	it('has a prefix of 622314 and a length of 17', function() {
		assert(detectNetwork('62231402389288273') === 'China UnionPay');
	});

	it('has a prefix of 622315 and a length of 17', function() {
		assert(detectNetwork('62231534659335843') === 'China UnionPay');
	});

	it('has a prefix of 622316 and a length of 17', function() {
		assert(detectNetwork('62231676555184391') === 'China UnionPay');
	});

	it('has a prefix of 622317 and a length of 17', function() {
		assert(detectNetwork('62231768551248285') === 'China UnionPay');
	});

	it('has a prefix of 622318 and a length of 17', function() {
		assert(detectNetwork('62231857426436256') === 'China UnionPay');
	});

	it('has a prefix of 622319 and a length of 17', function() {
		assert(detectNetwork('62231933159367247') === 'China UnionPay');
	});

	it('has a prefix of 622320 and a length of 17', function() {
		assert(detectNetwork('62232045071412364') === 'China UnionPay');
	});

	it('has a prefix of 622321 and a length of 17', function() {
		assert(detectNetwork('62232105626091994') === 'China UnionPay');
	});

	it('has a prefix of 622322 and a length of 17', function() {
		assert(detectNetwork('62232296081627249') === 'China UnionPay');
	});

	it('has a prefix of 622323 and a length of 17', function() {
		assert(detectNetwork('62232346903188283') === 'China UnionPay');
	});

	it('has a prefix of 622324 and a length of 17', function() {
		assert(detectNetwork('62232490669311871') === 'China UnionPay');
	});

	it('has a prefix of 622325 and a length of 17', function() {
		assert(detectNetwork('62232520701060638') === 'China UnionPay');
	});

	it('has a prefix of 622326 and a length of 17', function() {
		assert(detectNetwork('62232623479025338') === 'China UnionPay');
	});

	it('has a prefix of 622327 and a length of 17', function() {
		assert(detectNetwork('62232734246355154') === 'China UnionPay');
	});

	it('has a prefix of 622328 and a length of 17', function() {
		assert(detectNetwork('62232808905204439') === 'China UnionPay');
	});

	it('has a prefix of 622329 and a length of 17', function() {
		assert(detectNetwork('62232911771880809') === 'China UnionPay');
	});

	it('has a prefix of 622330 and a length of 17', function() {
		assert(detectNetwork('62233065351617927') === 'China UnionPay');
	});

	it('has a prefix of 622331 and a length of 17', function() {
		assert(detectNetwork('62233155685103257') === 'China UnionPay');
	});

	it('has a prefix of 622332 and a length of 17', function() {
		assert(detectNetwork('62233200648051100') === 'China UnionPay');
	});

	it('has a prefix of 622333 and a length of 17', function() {
		assert(detectNetwork('62233346318396952') === 'China UnionPay');
	});

	it('has a prefix of 622334 and a length of 17', function() {
		assert(detectNetwork('62233401856650719') === 'China UnionPay');
	});

	it('has a prefix of 622335 and a length of 17', function() {
		assert(detectNetwork('62233500777376127') === 'China UnionPay');
	});

	it('has a prefix of 622336 and a length of 17', function() {
		assert(detectNetwork('62233657117246063') === 'China UnionPay');
	});

	it('has a prefix of 622337 and a length of 17', function() {
		assert(detectNetwork('62233701349201660') === 'China UnionPay');
	});

	it('has a prefix of 622338 and a length of 17', function() {
		assert(detectNetwork('62233876529944337') === 'China UnionPay');
	});

	it('has a prefix of 622339 and a length of 17', function() {
		assert(detectNetwork('62233907892255604') === 'China UnionPay');
	});

	it('has a prefix of 622340 and a length of 17', function() {
		assert(detectNetwork('62234069493424554') === 'China UnionPay');
	});

	it('has a prefix of 622341 and a length of 17', function() {
		assert(detectNetwork('62234142811637437') === 'China UnionPay');
	});

	it('has a prefix of 622342 and a length of 17', function() {
		assert(detectNetwork('62234274404525850') === 'China UnionPay');
	});

	it('has a prefix of 622343 and a length of 17', function() {
		assert(detectNetwork('62234355620916495') === 'China UnionPay');
	});

	it('has a prefix of 622344 and a length of 17', function() {
		assert(detectNetwork('62234406498555677') === 'China UnionPay');
	});

	it('has a prefix of 622345 and a length of 17', function() {
		assert(detectNetwork('62234592834472728') === 'China UnionPay');
	});

	it('has a prefix of 622346 and a length of 17', function() {
		assert(detectNetwork('62234674223130224') === 'China UnionPay');
	});

	it('has a prefix of 622347 and a length of 17', function() {
		assert(detectNetwork('62234705465875400') === 'China UnionPay');
	});

	it('has a prefix of 622348 and a length of 17', function() {
		assert(detectNetwork('62234817536855629') === 'China UnionPay');
	});

	it('has a prefix of 622349 and a length of 17', function() {
		assert(detectNetwork('62234979288403755') === 'China UnionPay');
	});

	it('has a prefix of 622350 and a length of 17', function() {
		assert(detectNetwork('62235051400851765') === 'China UnionPay');
	});

	it('has a prefix of 622351 and a length of 17', function() {
		assert(detectNetwork('62235122692876918') === 'China UnionPay');
	});

	it('has a prefix of 622352 and a length of 17', function() {
		assert(detectNetwork('62235272898725491') === 'China UnionPay');
	});

	it('has a prefix of 622353 and a length of 17', function() {
		assert(detectNetwork('62235368650053844') === 'China UnionPay');
	});

	it('has a prefix of 622354 and a length of 17', function() {
		assert(detectNetwork('62235406383446913') === 'China UnionPay');
	});

	it('has a prefix of 622355 and a length of 17', function() {
		assert(detectNetwork('62235500147732247') === 'China UnionPay');
	});

	it('has a prefix of 622356 and a length of 17', function() {
		assert(detectNetwork('62235631251865849') === 'China UnionPay');
	});

	it('has a prefix of 622357 and a length of 17', function() {
		assert(detectNetwork('62235719888504064') === 'China UnionPay');
	});

	it('has a prefix of 622358 and a length of 17', function() {
		assert(detectNetwork('62235804485405854') === 'China UnionPay');
	});

	it('has a prefix of 622359 and a length of 17', function() {
		assert(detectNetwork('62235922763387515') === 'China UnionPay');
	});

	it('has a prefix of 622360 and a length of 17', function() {
		assert(detectNetwork('62236019546804465') === 'China UnionPay');
	});

	it('has a prefix of 622361 and a length of 17', function() {
		assert(detectNetwork('62236138326355298') === 'China UnionPay');
	});

	it('has a prefix of 622362 and a length of 17', function() {
		assert(detectNetwork('62236299212612327') === 'China UnionPay');
	});

	it('has a prefix of 622363 and a length of 17', function() {
		assert(detectNetwork('62236327034954642') === 'China UnionPay');
	});

	it('has a prefix of 622364 and a length of 17', function() {
		assert(detectNetwork('62236489811860204') === 'China UnionPay');
	});

	it('has a prefix of 622365 and a length of 17', function() {
		assert(detectNetwork('62236582291802012') === 'China UnionPay');
	});

	it('has a prefix of 622366 and a length of 17', function() {
		assert(detectNetwork('62236646822307499') === 'China UnionPay');
	});

	it('has a prefix of 622367 and a length of 17', function() {
		assert(detectNetwork('62236787056672122') === 'China UnionPay');
	});

	it('has a prefix of 622368 and a length of 17', function() {
		assert(detectNetwork('62236822413604803') === 'China UnionPay');
	});

	it('has a prefix of 622369 and a length of 17', function() {
		assert(detectNetwork('62236909344299731') === 'China UnionPay');
	});

	it('has a prefix of 622370 and a length of 17', function() {
		assert(detectNetwork('62237093847222426') === 'China UnionPay');
	});

	it('has a prefix of 622371 and a length of 17', function() {
		assert(detectNetwork('62237151860386728') === 'China UnionPay');
	});

	it('has a prefix of 622372 and a length of 17', function() {
		assert(detectNetwork('62237234720120238') === 'China UnionPay');
	});

	it('has a prefix of 622373 and a length of 17', function() {
		assert(detectNetwork('62237355574681398') === 'China UnionPay');
	});

	it('has a prefix of 622374 and a length of 17', function() {
		assert(detectNetwork('62237486833101883') === 'China UnionPay');
	});

	it('has a prefix of 622375 and a length of 17', function() {
		assert(detectNetwork('62237596515694730') === 'China UnionPay');
	});

	it('has a prefix of 622376 and a length of 17', function() {
		assert(detectNetwork('62237609702712241') === 'China UnionPay');
	});

	it('has a prefix of 622377 and a length of 17', function() {
		assert(detectNetwork('62237745420643086') === 'China UnionPay');
	});

	it('has a prefix of 622378 and a length of 17', function() {
		assert(detectNetwork('62237818810137454') === 'China UnionPay');
	});

	it('has a prefix of 622379 and a length of 17', function() {
		assert(detectNetwork('62237919474081987') === 'China UnionPay');
	});

	it('has a prefix of 622380 and a length of 17', function() {
		assert(detectNetwork('62238046986350014') === 'China UnionPay');
	});

	it('has a prefix of 622381 and a length of 17', function() {
		assert(detectNetwork('62238152903673996') === 'China UnionPay');
	});

	it('has a prefix of 622382 and a length of 17', function() {
		assert(detectNetwork('62238213361669235') === 'China UnionPay');
	});

	it('has a prefix of 622383 and a length of 17', function() {
		assert(detectNetwork('62238309154428893') === 'China UnionPay');
	});

	it('has a prefix of 622384 and a length of 17', function() {
		assert(detectNetwork('62238443754045207') === 'China UnionPay');
	});

	it('has a prefix of 622385 and a length of 17', function() {
		assert(detectNetwork('62238568426593178') === 'China UnionPay');
	});

	it('has a prefix of 622386 and a length of 17', function() {
		assert(detectNetwork('62238661325670770') === 'China UnionPay');
	});

	it('has a prefix of 622387 and a length of 17', function() {
		assert(detectNetwork('62238769696658867') === 'China UnionPay');
	});

	it('has a prefix of 622388 and a length of 17', function() {
		assert(detectNetwork('62238845546611723') === 'China UnionPay');
	});

	it('has a prefix of 622389 and a length of 17', function() {
		assert(detectNetwork('62238906672886698') === 'China UnionPay');
	});

	it('has a prefix of 622390 and a length of 17', function() {
		assert(detectNetwork('62239034396262054') === 'China UnionPay');
	});

	it('has a prefix of 622391 and a length of 17', function() {
		assert(detectNetwork('62239197972986317') === 'China UnionPay');
	});

	it('has a prefix of 622392 and a length of 17', function() {
		assert(detectNetwork('62239209393394727') === 'China UnionPay');
	});

	it('has a prefix of 622393 and a length of 17', function() {
		assert(detectNetwork('62239306011573965') === 'China UnionPay');
	});

	it('has a prefix of 622394 and a length of 17', function() {
		assert(detectNetwork('62239486085617986') === 'China UnionPay');
	});

	it('has a prefix of 622395 and a length of 17', function() {
		assert(detectNetwork('62239539823525576') === 'China UnionPay');
	});

	it('has a prefix of 622396 and a length of 17', function() {
		assert(detectNetwork('62239641879964755') === 'China UnionPay');
	});

	it('has a prefix of 622397 and a length of 17', function() {
		assert(detectNetwork('62239768232090452') === 'China UnionPay');
	});

	it('has a prefix of 622398 and a length of 17', function() {
		assert(detectNetwork('62239868325573024') === 'China UnionPay');
	});

	it('has a prefix of 622399 and a length of 17', function() {
		assert(detectNetwork('62239964135219059') === 'China UnionPay');
	});

	it('has a prefix of 622400 and a length of 17', function() {
		assert(detectNetwork('62240094103028137') === 'China UnionPay');
	});

	it('has a prefix of 622401 and a length of 17', function() {
		assert(detectNetwork('62240112912725437') === 'China UnionPay');
	});

	it('has a prefix of 622402 and a length of 17', function() {
		assert(detectNetwork('62240202616501745') === 'China UnionPay');
	});

	it('has a prefix of 622403 and a length of 17', function() {
		assert(detectNetwork('62240340394773187') === 'China UnionPay');
	});

	it('has a prefix of 622404 and a length of 17', function() {
		assert(detectNetwork('62240488540521685') === 'China UnionPay');
	});

	it('has a prefix of 622405 and a length of 17', function() {
		assert(detectNetwork('62240507645979603') === 'China UnionPay');
	});

	it('has a prefix of 622406 and a length of 17', function() {
		assert(detectNetwork('62240646113177001') === 'China UnionPay');
	});

	it('has a prefix of 622407 and a length of 17', function() {
		assert(detectNetwork('62240765822710093') === 'China UnionPay');
	});

	it('has a prefix of 622408 and a length of 17', function() {
		assert(detectNetwork('62240837773566310') === 'China UnionPay');
	});

	it('has a prefix of 622409 and a length of 17', function() {
		assert(detectNetwork('62240907161358957') === 'China UnionPay');
	});

	it('has a prefix of 622410 and a length of 17', function() {
		assert(detectNetwork('62241054933604686') === 'China UnionPay');
	});

	it('has a prefix of 622411 and a length of 17', function() {
		assert(detectNetwork('62241103618543433') === 'China UnionPay');
	});

	it('has a prefix of 622412 and a length of 17', function() {
		assert(detectNetwork('62241253184446673') === 'China UnionPay');
	});

	it('has a prefix of 622413 and a length of 17', function() {
		assert(detectNetwork('62241353558980693') === 'China UnionPay');
	});

	it('has a prefix of 622414 and a length of 17', function() {
		assert(detectNetwork('62241407640906101') === 'China UnionPay');
	});

	it('has a prefix of 622415 and a length of 17', function() {
		assert(detectNetwork('62241547729652792') === 'China UnionPay');
	});

	it('has a prefix of 622416 and a length of 17', function() {
		assert(detectNetwork('62241676328613319') === 'China UnionPay');
	});

	it('has a prefix of 622417 and a length of 17', function() {
		assert(detectNetwork('62241728214194520') === 'China UnionPay');
	});

	it('has a prefix of 622418 and a length of 17', function() {
		assert(detectNetwork('62241804821118713') === 'China UnionPay');
	});

	it('has a prefix of 622419 and a length of 17', function() {
		assert(detectNetwork('62241941083558749') === 'China UnionPay');
	});

	it('has a prefix of 622420 and a length of 17', function() {
		assert(detectNetwork('62242051169600501') === 'China UnionPay');
	});

	it('has a prefix of 622421 and a length of 17', function() {
		assert(detectNetwork('62242170882645148') === 'China UnionPay');
	});

	it('has a prefix of 622422 and a length of 17', function() {
		assert(detectNetwork('62242278501975524') === 'China UnionPay');
	});

	it('has a prefix of 622423 and a length of 17', function() {
		assert(detectNetwork('62242365074332018') === 'China UnionPay');
	});

	it('has a prefix of 622424 and a length of 17', function() {
		assert(detectNetwork('62242432458961771') === 'China UnionPay');
	});

	it('has a prefix of 622425 and a length of 17', function() {
		assert(detectNetwork('62242516162456818') === 'China UnionPay');
	});

	it('has a prefix of 622426 and a length of 17', function() {
		assert(detectNetwork('62242688521362263') === 'China UnionPay');
	});

	it('has a prefix of 622427 and a length of 17', function() {
		assert(detectNetwork('62242764274530172') === 'China UnionPay');
	});

	it('has a prefix of 622428 and a length of 17', function() {
		assert(detectNetwork('62242854382940284') === 'China UnionPay');
	});

	it('has a prefix of 622429 and a length of 17', function() {
		assert(detectNetwork('62242929193815551') === 'China UnionPay');
	});

	it('has a prefix of 622430 and a length of 17', function() {
		assert(detectNetwork('62243099829568586') === 'China UnionPay');
	});

	it('has a prefix of 622431 and a length of 17', function() {
		assert(detectNetwork('62243152435798226') === 'China UnionPay');
	});

	it('has a prefix of 622432 and a length of 17', function() {
		assert(detectNetwork('62243287744173821') === 'China UnionPay');
	});

	it('has a prefix of 622433 and a length of 17', function() {
		assert(detectNetwork('62243347272083374') === 'China UnionPay');
	});

	it('has a prefix of 622434 and a length of 17', function() {
		assert(detectNetwork('62243462882679695') === 'China UnionPay');
	});

	it('has a prefix of 622435 and a length of 17', function() {
		assert(detectNetwork('62243507358004183') === 'China UnionPay');
	});

	it('has a prefix of 622436 and a length of 17', function() {
		assert(detectNetwork('62243606481776872') === 'China UnionPay');
	});

	it('has a prefix of 622437 and a length of 17', function() {
		assert(detectNetwork('62243709626477017') === 'China UnionPay');
	});

	it('has a prefix of 622438 and a length of 17', function() {
		assert(detectNetwork('62243823782142618') === 'China UnionPay');
	});

	it('has a prefix of 622439 and a length of 17', function() {
		assert(detectNetwork('62243930119187822') === 'China UnionPay');
	});

	it('has a prefix of 622440 and a length of 17', function() {
		assert(detectNetwork('62244004856510638') === 'China UnionPay');
	});

	it('has a prefix of 622441 and a length of 17', function() {
		assert(detectNetwork('62244123326226762') === 'China UnionPay');
	});

	it('has a prefix of 622442 and a length of 17', function() {
		assert(detectNetwork('62244225354867607') === 'China UnionPay');
	});

	it('has a prefix of 622443 and a length of 17', function() {
		assert(detectNetwork('62244385339010470') === 'China UnionPay');
	});

	it('has a prefix of 622444 and a length of 17', function() {
		assert(detectNetwork('62244410005647717') === 'China UnionPay');
	});

	it('has a prefix of 622445 and a length of 17', function() {
		assert(detectNetwork('62244584452692009') === 'China UnionPay');
	});

	it('has a prefix of 622446 and a length of 17', function() {
		assert(detectNetwork('62244642762321183') === 'China UnionPay');
	});

	it('has a prefix of 622447 and a length of 17', function() {
		assert(detectNetwork('62244710426454063') === 'China UnionPay');
	});

	it('has a prefix of 622448 and a length of 17', function() {
		assert(detectNetwork('62244894730067537') === 'China UnionPay');
	});

	it('has a prefix of 622449 and a length of 17', function() {
		assert(detectNetwork('62244955552663292') === 'China UnionPay');
	});

	it('has a prefix of 622450 and a length of 17', function() {
		assert(detectNetwork('62245036787080450') === 'China UnionPay');
	});

	it('has a prefix of 622451 and a length of 17', function() {
		assert(detectNetwork('62245166509052568') === 'China UnionPay');
	});

	it('has a prefix of 622452 and a length of 17', function() {
		assert(detectNetwork('62245220373708982') === 'China UnionPay');
	});

	it('has a prefix of 622453 and a length of 17', function() {
		assert(detectNetwork('62245302687066339') === 'China UnionPay');
	});

	it('has a prefix of 622454 and a length of 17', function() {
		assert(detectNetwork('62245449667856061') === 'China UnionPay');
	});

	it('has a prefix of 622455 and a length of 17', function() {
		assert(detectNetwork('62245549945345530') === 'China UnionPay');
	});

	it('has a prefix of 622456 and a length of 17', function() {
		assert(detectNetwork('62245637758995941') === 'China UnionPay');
	});

	it('has a prefix of 622457 and a length of 17', function() {
		assert(detectNetwork('62245750087881028') === 'China UnionPay');
	});

	it('has a prefix of 622458 and a length of 17', function() {
		assert(detectNetwork('62245830070576918') === 'China UnionPay');
	});

	it('has a prefix of 622459 and a length of 17', function() {
		assert(detectNetwork('62245994564876151') === 'China UnionPay');
	});

	it('has a prefix of 622460 and a length of 17', function() {
		assert(detectNetwork('62246021911488061') === 'China UnionPay');
	});

	it('has a prefix of 622461 and a length of 17', function() {
		assert(detectNetwork('62246113443300617') === 'China UnionPay');
	});

	it('has a prefix of 622462 and a length of 17', function() {
		assert(detectNetwork('62246294811543325') === 'China UnionPay');
	});

	it('has a prefix of 622463 and a length of 17', function() {
		assert(detectNetwork('62246382682896289') === 'China UnionPay');
	});

	it('has a prefix of 622464 and a length of 17', function() {
		assert(detectNetwork('62246456062315566') === 'China UnionPay');
	});

	it('has a prefix of 622465 and a length of 17', function() {
		assert(detectNetwork('62246531771084447') === 'China UnionPay');
	});

	it('has a prefix of 622466 and a length of 17', function() {
		assert(detectNetwork('62246683045494248') === 'China UnionPay');
	});

	it('has a prefix of 622467 and a length of 17', function() {
		assert(detectNetwork('62246783879574101') === 'China UnionPay');
	});

	it('has a prefix of 622468 and a length of 17', function() {
		assert(detectNetwork('62246875458172148') === 'China UnionPay');
	});

	it('has a prefix of 622469 and a length of 17', function() {
		assert(detectNetwork('62246936629600822') === 'China UnionPay');
	});

	it('has a prefix of 622470 and a length of 17', function() {
		assert(detectNetwork('62247080872060081') === 'China UnionPay');
	});

	it('has a prefix of 622471 and a length of 17', function() {
		assert(detectNetwork('62247150488777688') === 'China UnionPay');
	});

	it('has a prefix of 622472 and a length of 17', function() {
		assert(detectNetwork('62247281487774338') === 'China UnionPay');
	});

	it('has a prefix of 622473 and a length of 17', function() {
		assert(detectNetwork('62247376976464936') === 'China UnionPay');
	});

	it('has a prefix of 622474 and a length of 17', function() {
		assert(detectNetwork('62247440256056264') === 'China UnionPay');
	});

	it('has a prefix of 622475 and a length of 17', function() {
		assert(detectNetwork('62247569166537097') === 'China UnionPay');
	});

	it('has a prefix of 622476 and a length of 17', function() {
		assert(detectNetwork('62247604140263161') === 'China UnionPay');
	});

	it('has a prefix of 622477 and a length of 17', function() {
		assert(detectNetwork('62247782344983857') === 'China UnionPay');
	});

	it('has a prefix of 622478 and a length of 17', function() {
		assert(detectNetwork('62247818007390279') === 'China UnionPay');
	});

	it('has a prefix of 622479 and a length of 17', function() {
		assert(detectNetwork('62247987392335384') === 'China UnionPay');
	});

	it('has a prefix of 622480 and a length of 17', function() {
		assert(detectNetwork('62248072019130641') === 'China UnionPay');
	});

	it('has a prefix of 622481 and a length of 17', function() {
		assert(detectNetwork('62248148578892179') === 'China UnionPay');
	});

	it('has a prefix of 622482 and a length of 17', function() {
		assert(detectNetwork('62248269647473545') === 'China UnionPay');
	});

	it('has a prefix of 622483 and a length of 17', function() {
		assert(detectNetwork('62248375437669428') === 'China UnionPay');
	});

	it('has a prefix of 622484 and a length of 17', function() {
		assert(detectNetwork('62248461618910195') === 'China UnionPay');
	});

	it('has a prefix of 622485 and a length of 17', function() {
		assert(detectNetwork('62248501118667122') === 'China UnionPay');
	});

	it('has a prefix of 622486 and a length of 17', function() {
		assert(detectNetwork('62248620239287122') === 'China UnionPay');
	});

	it('has a prefix of 622487 and a length of 17', function() {
		assert(detectNetwork('62248719155604035') === 'China UnionPay');
	});

	it('has a prefix of 622488 and a length of 17', function() {
		assert(detectNetwork('62248832515251111') === 'China UnionPay');
	});

	it('has a prefix of 622489 and a length of 17', function() {
		assert(detectNetwork('62248918237329614') === 'China UnionPay');
	});

	it('has a prefix of 622490 and a length of 17', function() {
		assert(detectNetwork('62249024141336038') === 'China UnionPay');
	});

	it('has a prefix of 622491 and a length of 17', function() {
		assert(detectNetwork('62249196545300299') === 'China UnionPay');
	});

	it('has a prefix of 622492 and a length of 17', function() {
		assert(detectNetwork('62249247640235508') === 'China UnionPay');
	});

	it('has a prefix of 622493 and a length of 17', function() {
		assert(detectNetwork('62249314341998005') === 'China UnionPay');
	});

	it('has a prefix of 622494 and a length of 17', function() {
		assert(detectNetwork('62249498794072367') === 'China UnionPay');
	});

	it('has a prefix of 622495 and a length of 17', function() {
		assert(detectNetwork('62249509653085031') === 'China UnionPay');
	});

	it('has a prefix of 622496 and a length of 17', function() {
		assert(detectNetwork('62249602272989980') === 'China UnionPay');
	});

	it('has a prefix of 622497 and a length of 17', function() {
		assert(detectNetwork('62249723710702227') === 'China UnionPay');
	});

	it('has a prefix of 622498 and a length of 17', function() {
		assert(detectNetwork('62249838568184791') === 'China UnionPay');
	});

	it('has a prefix of 622499 and a length of 17', function() {
		assert(detectNetwork('62249922643095953') === 'China UnionPay');
	});

	it('has a prefix of 622500 and a length of 17', function() {
		assert(detectNetwork('62250033565769163') === 'China UnionPay');
	});

	it('has a prefix of 622501 and a length of 17', function() {
		assert(detectNetwork('62250110945566031') === 'China UnionPay');
	});

	it('has a prefix of 622502 and a length of 17', function() {
		assert(detectNetwork('62250247583849904') === 'China UnionPay');
	});

	it('has a prefix of 622503 and a length of 17', function() {
		assert(detectNetwork('62250318539767080') === 'China UnionPay');
	});

	it('has a prefix of 622504 and a length of 17', function() {
		assert(detectNetwork('62250453973144014') === 'China UnionPay');
	});

	it('has a prefix of 622505 and a length of 17', function() {
		assert(detectNetwork('62250576126568947') === 'China UnionPay');
	});

	it('has a prefix of 622506 and a length of 17', function() {
		assert(detectNetwork('62250688706188733') === 'China UnionPay');
	});

	it('has a prefix of 622507 and a length of 17', function() {
		assert(detectNetwork('62250762237527577') === 'China UnionPay');
	});

	it('has a prefix of 622508 and a length of 17', function() {
		assert(detectNetwork('62250876720658033') === 'China UnionPay');
	});

	it('has a prefix of 622509 and a length of 17', function() {
		assert(detectNetwork('62250984087713158') === 'China UnionPay');
	});

	it('has a prefix of 622510 and a length of 17', function() {
		assert(detectNetwork('62251068340075770') === 'China UnionPay');
	});

	it('has a prefix of 622511 and a length of 17', function() {
		assert(detectNetwork('62251188494687232') === 'China UnionPay');
	});

	it('has a prefix of 622512 and a length of 17', function() {
		assert(detectNetwork('62251233388134782') === 'China UnionPay');
	});

	it('has a prefix of 622513 and a length of 17', function() {
		assert(detectNetwork('62251394180502070') === 'China UnionPay');
	});

	it('has a prefix of 622514 and a length of 17', function() {
		assert(detectNetwork('62251446896564978') === 'China UnionPay');
	});

	it('has a prefix of 622515 and a length of 17', function() {
		assert(detectNetwork('62251556194531680') === 'China UnionPay');
	});

	it('has a prefix of 622516 and a length of 17', function() {
		assert(detectNetwork('62251692813785883') === 'China UnionPay');
	});

	it('has a prefix of 622517 and a length of 17', function() {
		assert(detectNetwork('62251732089076816') === 'China UnionPay');
	});

	it('has a prefix of 622518 and a length of 17', function() {
		assert(detectNetwork('62251874712575317') === 'China UnionPay');
	});

	it('has a prefix of 622519 and a length of 17', function() {
		assert(detectNetwork('62251952391013518') === 'China UnionPay');
	});

	it('has a prefix of 622520 and a length of 17', function() {
		assert(detectNetwork('62252050444273629') === 'China UnionPay');
	});

	it('has a prefix of 622521 and a length of 17', function() {
		assert(detectNetwork('62252124002929242') === 'China UnionPay');
	});

	it('has a prefix of 622522 and a length of 17', function() {
		assert(detectNetwork('62252230524311669') === 'China UnionPay');
	});

	it('has a prefix of 622523 and a length of 17', function() {
		assert(detectNetwork('62252308210917827') === 'China UnionPay');
	});

	it('has a prefix of 622524 and a length of 17', function() {
		assert(detectNetwork('62252438588084521') === 'China UnionPay');
	});

	it('has a prefix of 622525 and a length of 17', function() {
		assert(detectNetwork('62252530128888530') === 'China UnionPay');
	});

	it('has a prefix of 622526 and a length of 17', function() {
		assert(detectNetwork('62252605973192542') === 'China UnionPay');
	});

	it('has a prefix of 622527 and a length of 17', function() {
		assert(detectNetwork('62252748835937337') === 'China UnionPay');
	});

	it('has a prefix of 622528 and a length of 17', function() {
		assert(detectNetwork('62252809816328806') === 'China UnionPay');
	});

	it('has a prefix of 622529 and a length of 17', function() {
		assert(detectNetwork('62252937270289455') === 'China UnionPay');
	});

	it('has a prefix of 622530 and a length of 17', function() {
		assert(detectNetwork('62253002676453128') === 'China UnionPay');
	});

	it('has a prefix of 622531 and a length of 17', function() {
		assert(detectNetwork('62253190618809707') === 'China UnionPay');
	});

	it('has a prefix of 622532 and a length of 17', function() {
		assert(detectNetwork('62253228667959278') === 'China UnionPay');
	});

	it('has a prefix of 622533 and a length of 17', function() {
		assert(detectNetwork('62253382395402125') === 'China UnionPay');
	});

	it('has a prefix of 622534 and a length of 17', function() {
		assert(detectNetwork('62253496702474604') === 'China UnionPay');
	});

	it('has a prefix of 622535 and a length of 17', function() {
		assert(detectNetwork('62253574952931509') === 'China UnionPay');
	});

	it('has a prefix of 622536 and a length of 17', function() {
		assert(detectNetwork('62253608033063072') === 'China UnionPay');
	});

	it('has a prefix of 622537 and a length of 17', function() {
		assert(detectNetwork('62253775686950191') === 'China UnionPay');
	});

	it('has a prefix of 622538 and a length of 17', function() {
		assert(detectNetwork('62253866054610942') === 'China UnionPay');
	});

	it('has a prefix of 622539 and a length of 17', function() {
		assert(detectNetwork('62253907600855638') === 'China UnionPay');
	});

	it('has a prefix of 622540 and a length of 17', function() {
		assert(detectNetwork('62254075466589759') === 'China UnionPay');
	});

	it('has a prefix of 622541 and a length of 17', function() {
		assert(detectNetwork('62254125598744771') === 'China UnionPay');
	});

	it('has a prefix of 622542 and a length of 17', function() {
		assert(detectNetwork('62254266926603853') === 'China UnionPay');
	});

	it('has a prefix of 622543 and a length of 17', function() {
		assert(detectNetwork('62254323568012828') === 'China UnionPay');
	});

	it('has a prefix of 622544 and a length of 17', function() {
		assert(detectNetwork('62254480633410360') === 'China UnionPay');
	});

	it('has a prefix of 622545 and a length of 17', function() {
		assert(detectNetwork('62254564825360353') === 'China UnionPay');
	});

	it('has a prefix of 622546 and a length of 17', function() {
		assert(detectNetwork('62254604680810580') === 'China UnionPay');
	});

	it('has a prefix of 622547 and a length of 17', function() {
		assert(detectNetwork('62254789778287654') === 'China UnionPay');
	});

	it('has a prefix of 622548 and a length of 17', function() {
		assert(detectNetwork('62254863858359049') === 'China UnionPay');
	});

	it('has a prefix of 622549 and a length of 17', function() {
		assert(detectNetwork('62254943680100485') === 'China UnionPay');
	});

	it('has a prefix of 622550 and a length of 17', function() {
		assert(detectNetwork('62255018791394478') === 'China UnionPay');
	});

	it('has a prefix of 622551 and a length of 17', function() {
		assert(detectNetwork('62255130770491327') === 'China UnionPay');
	});

	it('has a prefix of 622552 and a length of 17', function() {
		assert(detectNetwork('62255248028504463') === 'China UnionPay');
	});

	it('has a prefix of 622553 and a length of 17', function() {
		assert(detectNetwork('62255361114091122') === 'China UnionPay');
	});

	it('has a prefix of 622554 and a length of 17', function() {
		assert(detectNetwork('62255424698477703') === 'China UnionPay');
	});

	it('has a prefix of 622555 and a length of 17', function() {
		assert(detectNetwork('62255527150634757') === 'China UnionPay');
	});

	it('has a prefix of 622556 and a length of 17', function() {
		assert(detectNetwork('62255674463115979') === 'China UnionPay');
	});

	it('has a prefix of 622557 and a length of 17', function() {
		assert(detectNetwork('62255790292567421') === 'China UnionPay');
	});

	it('has a prefix of 622558 and a length of 17', function() {
		assert(detectNetwork('62255869416486158') === 'China UnionPay');
	});

	it('has a prefix of 622559 and a length of 17', function() {
		assert(detectNetwork('62255914790998061') === 'China UnionPay');
	});

	it('has a prefix of 622560 and a length of 17', function() {
		assert(detectNetwork('62256028244466079') === 'China UnionPay');
	});

	it('has a prefix of 622561 and a length of 17', function() {
		assert(detectNetwork('62256129718648992') === 'China UnionPay');
	});

	it('has a prefix of 622562 and a length of 17', function() {
		assert(detectNetwork('62256257891224535') === 'China UnionPay');
	});

	it('has a prefix of 622563 and a length of 17', function() {
		assert(detectNetwork('62256331030415711') === 'China UnionPay');
	});

	it('has a prefix of 622564 and a length of 17', function() {
		assert(detectNetwork('62256447113387823') === 'China UnionPay');
	});

	it('has a prefix of 622565 and a length of 17', function() {
		assert(detectNetwork('62256557975382983') === 'China UnionPay');
	});

	it('has a prefix of 622566 and a length of 17', function() {
		assert(detectNetwork('62256638002980921') === 'China UnionPay');
	});

	it('has a prefix of 622567 and a length of 17', function() {
		assert(detectNetwork('62256701704986109') === 'China UnionPay');
	});

	it('has a prefix of 622568 and a length of 17', function() {
		assert(detectNetwork('62256896245290467') === 'China UnionPay');
	});

	it('has a prefix of 622569 and a length of 17', function() {
		assert(detectNetwork('62256937945846046') === 'China UnionPay');
	});

	it('has a prefix of 622570 and a length of 17', function() {
		assert(detectNetwork('62257048913634845') === 'China UnionPay');
	});

	it('has a prefix of 622571 and a length of 17', function() {
		assert(detectNetwork('62257139350845168') === 'China UnionPay');
	});

	it('has a prefix of 622572 and a length of 17', function() {
		assert(detectNetwork('62257205083989915') === 'China UnionPay');
	});

	it('has a prefix of 622573 and a length of 17', function() {
		assert(detectNetwork('62257322212478457') === 'China UnionPay');
	});

	it('has a prefix of 622574 and a length of 17', function() {
		assert(detectNetwork('62257495740321743') === 'China UnionPay');
	});

	it('has a prefix of 622575 and a length of 17', function() {
		assert(detectNetwork('62257562410301136') === 'China UnionPay');
	});

	it('has a prefix of 622576 and a length of 17', function() {
		assert(detectNetwork('62257669031753082') === 'China UnionPay');
	});

	it('has a prefix of 622577 and a length of 17', function() {
		assert(detectNetwork('62257791776926160') === 'China UnionPay');
	});

	it('has a prefix of 622578 and a length of 17', function() {
		assert(detectNetwork('62257855632306373') === 'China UnionPay');
	});

	it('has a prefix of 622579 and a length of 17', function() {
		assert(detectNetwork('62257977587701438') === 'China UnionPay');
	});

	it('has a prefix of 622580 and a length of 17', function() {
		assert(detectNetwork('62258098099384327') === 'China UnionPay');
	});

	it('has a prefix of 622581 and a length of 17', function() {
		assert(detectNetwork('62258120370576763') === 'China UnionPay');
	});

	it('has a prefix of 622582 and a length of 17', function() {
		assert(detectNetwork('62258236610023119') === 'China UnionPay');
	});

	it('has a prefix of 622583 and a length of 17', function() {
		assert(detectNetwork('62258391234336267') === 'China UnionPay');
	});

	it('has a prefix of 622584 and a length of 17', function() {
		assert(detectNetwork('62258465190447778') === 'China UnionPay');
	});

	it('has a prefix of 622585 and a length of 17', function() {
		assert(detectNetwork('62258511214613800') === 'China UnionPay');
	});

	it('has a prefix of 622586 and a length of 17', function() {
		assert(detectNetwork('62258622734902616') === 'China UnionPay');
	});

	it('has a prefix of 622587 and a length of 17', function() {
		assert(detectNetwork('62258758866634368') === 'China UnionPay');
	});

	it('has a prefix of 622588 and a length of 17', function() {
		assert(detectNetwork('62258852602036427') === 'China UnionPay');
	});

	it('has a prefix of 622589 and a length of 17', function() {
		assert(detectNetwork('62258938718735566') === 'China UnionPay');
	});

	it('has a prefix of 622590 and a length of 17', function() {
		assert(detectNetwork('62259052631075567') === 'China UnionPay');
	});

	it('has a prefix of 622591 and a length of 17', function() {
		assert(detectNetwork('62259199076169311') === 'China UnionPay');
	});

	it('has a prefix of 622592 and a length of 17', function() {
		assert(detectNetwork('62259220355190933') === 'China UnionPay');
	});

	it('has a prefix of 622593 and a length of 17', function() {
		assert(detectNetwork('62259325690287681') === 'China UnionPay');
	});

	it('has a prefix of 622594 and a length of 17', function() {
		assert(detectNetwork('62259418621535125') === 'China UnionPay');
	});

	it('has a prefix of 622595 and a length of 17', function() {
		assert(detectNetwork('62259576974328491') === 'China UnionPay');
	});

	it('has a prefix of 622596 and a length of 17', function() {
		assert(detectNetwork('62259630331945882') === 'China UnionPay');
	});

	it('has a prefix of 622597 and a length of 17', function() {
		assert(detectNetwork('62259723778570862') === 'China UnionPay');
	});

	it('has a prefix of 622598 and a length of 17', function() {
		assert(detectNetwork('62259856280670258') === 'China UnionPay');
	});

	it('has a prefix of 622599 and a length of 17', function() {
		assert(detectNetwork('62259947362290937') === 'China UnionPay');
	});

	it('has a prefix of 622600 and a length of 17', function() {
		assert(detectNetwork('62260034811006693') === 'China UnionPay');
	});

	it('has a prefix of 622601 and a length of 17', function() {
		assert(detectNetwork('62260143098584218') === 'China UnionPay');
	});

	it('has a prefix of 622602 and a length of 17', function() {
		assert(detectNetwork('62260242985077553') === 'China UnionPay');
	});

	it('has a prefix of 622603 and a length of 17', function() {
		assert(detectNetwork('62260394940372085') === 'China UnionPay');
	});

	it('has a prefix of 622604 and a length of 17', function() {
		assert(detectNetwork('62260433029878309') === 'China UnionPay');
	});

	it('has a prefix of 622605 and a length of 17', function() {
		assert(detectNetwork('62260577919931156') === 'China UnionPay');
	});

	it('has a prefix of 622606 and a length of 17', function() {
		assert(detectNetwork('62260696896176518') === 'China UnionPay');
	});

	it('has a prefix of 622607 and a length of 17', function() {
		assert(detectNetwork('62260709187222036') === 'China UnionPay');
	});

	it('has a prefix of 622608 and a length of 17', function() {
		assert(detectNetwork('62260893398859293') === 'China UnionPay');
	});

	it('has a prefix of 622609 and a length of 17', function() {
		assert(detectNetwork('62260932570455106') === 'China UnionPay');
	});

	it('has a prefix of 622610 and a length of 17', function() {
		assert(detectNetwork('62261035283000907') === 'China UnionPay');
	});

	it('has a prefix of 622611 and a length of 17', function() {
		assert(detectNetwork('62261169579433432') === 'China UnionPay');
	});

	it('has a prefix of 622612 and a length of 17', function() {
		assert(detectNetwork('62261257579392199') === 'China UnionPay');
	});

	it('has a prefix of 622613 and a length of 17', function() {
		assert(detectNetwork('62261328164406697') === 'China UnionPay');
	});

	it('has a prefix of 622614 and a length of 17', function() {
		assert(detectNetwork('62261430260371065') === 'China UnionPay');
	});

	it('has a prefix of 622615 and a length of 17', function() {
		assert(detectNetwork('62261597433938425') === 'China UnionPay');
	});

	it('has a prefix of 622616 and a length of 17', function() {
		assert(detectNetwork('62261664417269699') === 'China UnionPay');
	});

	it('has a prefix of 622617 and a length of 17', function() {
		assert(detectNetwork('62261743321157768') === 'China UnionPay');
	});

	it('has a prefix of 622618 and a length of 17', function() {
		assert(detectNetwork('62261819768823441') === 'China UnionPay');
	});

	it('has a prefix of 622619 and a length of 17', function() {
		assert(detectNetwork('62261902736190630') === 'China UnionPay');
	});

	it('has a prefix of 622620 and a length of 17', function() {
		assert(detectNetwork('62262098909686564') === 'China UnionPay');
	});

	it('has a prefix of 622621 and a length of 17', function() {
		assert(detectNetwork('62262134884995993') === 'China UnionPay');
	});

	it('has a prefix of 622622 and a length of 17', function() {
		assert(detectNetwork('62262212922442335') === 'China UnionPay');
	});

	it('has a prefix of 622623 and a length of 17', function() {
		assert(detectNetwork('62262304875216137') === 'China UnionPay');
	});

	it('has a prefix of 622624 and a length of 17', function() {
		assert(detectNetwork('62262452995176507') === 'China UnionPay');
	});

	it('has a prefix of 622625 and a length of 17', function() {
		assert(detectNetwork('62262545173580522') === 'China UnionPay');
	});

	it('has a prefix of 622626 and a length of 17', function() {
		assert(detectNetwork('62262653820618812') === 'China UnionPay');
	});

	it('has a prefix of 622627 and a length of 17', function() {
		assert(detectNetwork('62262714961066749') === 'China UnionPay');
	});

	it('has a prefix of 622628 and a length of 17', function() {
		assert(detectNetwork('62262853177400739') === 'China UnionPay');
	});

	it('has a prefix of 622629 and a length of 17', function() {
		assert(detectNetwork('62262902611008973') === 'China UnionPay');
	});

	it('has a prefix of 622630 and a length of 17', function() {
		assert(detectNetwork('62263001122929015') === 'China UnionPay');
	});

	it('has a prefix of 622631 and a length of 17', function() {
		assert(detectNetwork('62263146153949746') === 'China UnionPay');
	});

	it('has a prefix of 622632 and a length of 17', function() {
		assert(detectNetwork('62263203500118602') === 'China UnionPay');
	});

	it('has a prefix of 622633 and a length of 17', function() {
		assert(detectNetwork('62263356584893154') === 'China UnionPay');
	});

	it('has a prefix of 622634 and a length of 17', function() {
		assert(detectNetwork('62263488866276705') === 'China UnionPay');
	});

	it('has a prefix of 622635 and a length of 17', function() {
		assert(detectNetwork('62263525479792641') === 'China UnionPay');
	});

	it('has a prefix of 622636 and a length of 17', function() {
		assert(detectNetwork('62263685881420968') === 'China UnionPay');
	});

	it('has a prefix of 622637 and a length of 17', function() {
		assert(detectNetwork('62263775319014623') === 'China UnionPay');
	});

	it('has a prefix of 622638 and a length of 17', function() {
		assert(detectNetwork('62263892964920342') === 'China UnionPay');
	});

	it('has a prefix of 622639 and a length of 17', function() {
		assert(detectNetwork('62263992942143597') === 'China UnionPay');
	});

	it('has a prefix of 622640 and a length of 17', function() {
		assert(detectNetwork('62264072879725781') === 'China UnionPay');
	});

	it('has a prefix of 622641 and a length of 17', function() {
		assert(detectNetwork('62264115765600889') === 'China UnionPay');
	});

	it('has a prefix of 622642 and a length of 17', function() {
		assert(detectNetwork('62264277346307647') === 'China UnionPay');
	});

	it('has a prefix of 622643 and a length of 17', function() {
		assert(detectNetwork('62264399892853956') === 'China UnionPay');
	});

	it('has a prefix of 622644 and a length of 17', function() {
		assert(detectNetwork('62264493311122510') === 'China UnionPay');
	});

	it('has a prefix of 622645 and a length of 17', function() {
		assert(detectNetwork('62264547463423690') === 'China UnionPay');
	});

	it('has a prefix of 622646 and a length of 17', function() {
		assert(detectNetwork('62264640286680367') === 'China UnionPay');
	});

	it('has a prefix of 622647 and a length of 17', function() {
		assert(detectNetwork('62264753436957317') === 'China UnionPay');
	});

	it('has a prefix of 622648 and a length of 17', function() {
		assert(detectNetwork('62264809891341202') === 'China UnionPay');
	});

	it('has a prefix of 622649 and a length of 17', function() {
		assert(detectNetwork('62264926154006417') === 'China UnionPay');
	});

	it('has a prefix of 622650 and a length of 17', function() {
		assert(detectNetwork('62265017602488984') === 'China UnionPay');
	});

	it('has a prefix of 622651 and a length of 17', function() {
		assert(detectNetwork('62265138081718162') === 'China UnionPay');
	});

	it('has a prefix of 622652 and a length of 17', function() {
		assert(detectNetwork('62265288626361693') === 'China UnionPay');
	});

	it('has a prefix of 622653 and a length of 17', function() {
		assert(detectNetwork('62265365789336430') === 'China UnionPay');
	});

	it('has a prefix of 622654 and a length of 17', function() {
		assert(detectNetwork('62265484392323421') === 'China UnionPay');
	});

	it('has a prefix of 622655 and a length of 17', function() {
		assert(detectNetwork('62265526959786238') === 'China UnionPay');
	});

	it('has a prefix of 622656 and a length of 17', function() {
		assert(detectNetwork('62265615360023605') === 'China UnionPay');
	});

	it('has a prefix of 622657 and a length of 17', function() {
		assert(detectNetwork('62265703001776167') === 'China UnionPay');
	});

	it('has a prefix of 622658 and a length of 17', function() {
		assert(detectNetwork('62265866378558158') === 'China UnionPay');
	});

	it('has a prefix of 622659 and a length of 17', function() {
		assert(detectNetwork('62265951030655582') === 'China UnionPay');
	});

	it('has a prefix of 622660 and a length of 17', function() {
		assert(detectNetwork('62266008401515435') === 'China UnionPay');
	});

	it('has a prefix of 622661 and a length of 17', function() {
		assert(detectNetwork('62266146217860478') === 'China UnionPay');
	});

	it('has a prefix of 622662 and a length of 17', function() {
		assert(detectNetwork('62266232862496432') === 'China UnionPay');
	});

	it('has a prefix of 622663 and a length of 17', function() {
		assert(detectNetwork('62266305463992878') === 'China UnionPay');
	});

	it('has a prefix of 622664 and a length of 17', function() {
		assert(detectNetwork('62266450008139624') === 'China UnionPay');
	});

	it('has a prefix of 622665 and a length of 17', function() {
		assert(detectNetwork('62266545138495154') === 'China UnionPay');
	});

	it('has a prefix of 622666 and a length of 17', function() {
		assert(detectNetwork('62266649270583191') === 'China UnionPay');
	});

	it('has a prefix of 622667 and a length of 17', function() {
		assert(detectNetwork('62266767991633652') === 'China UnionPay');
	});

	it('has a prefix of 622668 and a length of 17', function() {
		assert(detectNetwork('62266842117836280') === 'China UnionPay');
	});

	it('has a prefix of 622669 and a length of 17', function() {
		assert(detectNetwork('62266991411659043') === 'China UnionPay');
	});

	it('has a prefix of 622670 and a length of 17', function() {
		assert(detectNetwork('62267089980261366') === 'China UnionPay');
	});

	it('has a prefix of 622671 and a length of 17', function() {
		assert(detectNetwork('62267175721044466') === 'China UnionPay');
	});

	it('has a prefix of 622672 and a length of 17', function() {
		assert(detectNetwork('62267209262914163') === 'China UnionPay');
	});

	it('has a prefix of 622673 and a length of 17', function() {
		assert(detectNetwork('62267341007476020') === 'China UnionPay');
	});

	it('has a prefix of 622674 and a length of 17', function() {
		assert(detectNetwork('62267454731636241') === 'China UnionPay');
	});

	it('has a prefix of 622675 and a length of 17', function() {
		assert(detectNetwork('62267548087766592') === 'China UnionPay');
	});

	it('has a prefix of 622676 and a length of 17', function() {
		assert(detectNetwork('62267665541767558') === 'China UnionPay');
	});

	it('has a prefix of 622677 and a length of 17', function() {
		assert(detectNetwork('62267793463758446') === 'China UnionPay');
	});

	it('has a prefix of 622678 and a length of 17', function() {
		assert(detectNetwork('62267873311760317') === 'China UnionPay');
	});

	it('has a prefix of 622679 and a length of 17', function() {
		assert(detectNetwork('62267979104591828') === 'China UnionPay');
	});

	it('has a prefix of 622680 and a length of 17', function() {
		assert(detectNetwork('62268042302373755') === 'China UnionPay');
	});

	it('has a prefix of 622681 and a length of 17', function() {
		assert(detectNetwork('62268174049646825') === 'China UnionPay');
	});

	it('has a prefix of 622682 and a length of 17', function() {
		assert(detectNetwork('62268233036299431') === 'China UnionPay');
	});

	it('has a prefix of 622683 and a length of 17', function() {
		assert(detectNetwork('62268355061486054') === 'China UnionPay');
	});

	it('has a prefix of 622684 and a length of 17', function() {
		assert(detectNetwork('62268400586308718') === 'China UnionPay');
	});

	it('has a prefix of 622685 and a length of 17', function() {
		assert(detectNetwork('62268579287107636') === 'China UnionPay');
	});

	it('has a prefix of 622686 and a length of 17', function() {
		assert(detectNetwork('62268602302927999') === 'China UnionPay');
	});

	it('has a prefix of 622687 and a length of 17', function() {
		assert(detectNetwork('62268702989019606') === 'China UnionPay');
	});

	it('has a prefix of 622688 and a length of 17', function() {
		assert(detectNetwork('62268812666337494') === 'China UnionPay');
	});

	it('has a prefix of 622689 and a length of 17', function() {
		assert(detectNetwork('62268921180219110') === 'China UnionPay');
	});

	it('has a prefix of 622690 and a length of 17', function() {
		assert(detectNetwork('62269029186062925') === 'China UnionPay');
	});

	it('has a prefix of 622691 and a length of 17', function() {
		assert(detectNetwork('62269187183291287') === 'China UnionPay');
	});

	it('has a prefix of 622692 and a length of 17', function() {
		assert(detectNetwork('62269242294783027') === 'China UnionPay');
	});

	it('has a prefix of 622693 and a length of 17', function() {
		assert(detectNetwork('62269387142477908') === 'China UnionPay');
	});

	it('has a prefix of 622694 and a length of 17', function() {
		assert(detectNetwork('62269424385251637') === 'China UnionPay');
	});

	it('has a prefix of 622695 and a length of 17', function() {
		assert(detectNetwork('62269572634542617') === 'China UnionPay');
	});

	it('has a prefix of 622696 and a length of 17', function() {
		assert(detectNetwork('62269695155623076') === 'China UnionPay');
	});

	it('has a prefix of 622697 and a length of 17', function() {
		assert(detectNetwork('62269777095143210') === 'China UnionPay');
	});

	it('has a prefix of 622698 and a length of 17', function() {
		assert(detectNetwork('62269840015376350') === 'China UnionPay');
	});

	it('has a prefix of 622699 and a length of 17', function() {
		assert(detectNetwork('62269991157730549') === 'China UnionPay');
	});

	it('has a prefix of 622700 and a length of 17', function() {
		assert(detectNetwork('62270040337780541') === 'China UnionPay');
	});

	it('has a prefix of 622701 and a length of 17', function() {
		assert(detectNetwork('62270164169898327') === 'China UnionPay');
	});

	it('has a prefix of 622702 and a length of 17', function() {
		assert(detectNetwork('62270249671767037') === 'China UnionPay');
	});

	it('has a prefix of 622703 and a length of 17', function() {
		assert(detectNetwork('62270302384862489') === 'China UnionPay');
	});

	it('has a prefix of 622704 and a length of 17', function() {
		assert(detectNetwork('62270426916666564') === 'China UnionPay');
	});

	it('has a prefix of 622705 and a length of 17', function() {
		assert(detectNetwork('62270531174973146') === 'China UnionPay');
	});

	it('has a prefix of 622706 and a length of 17', function() {
		assert(detectNetwork('62270638711616187') === 'China UnionPay');
	});

	it('has a prefix of 622707 and a length of 17', function() {
		assert(detectNetwork('62270735969313446') === 'China UnionPay');
	});

	it('has a prefix of 622708 and a length of 17', function() {
		assert(detectNetwork('62270834700615959') === 'China UnionPay');
	});

	it('has a prefix of 622709 and a length of 17', function() {
		assert(detectNetwork('62270958749895679') === 'China UnionPay');
	});

	it('has a prefix of 622710 and a length of 17', function() {
		assert(detectNetwork('62271086342153464') === 'China UnionPay');
	});

	it('has a prefix of 622711 and a length of 17', function() {
		assert(detectNetwork('62271170332556566') === 'China UnionPay');
	});

	it('has a prefix of 622712 and a length of 17', function() {
		assert(detectNetwork('62271223633556223') === 'China UnionPay');
	});

	it('has a prefix of 622713 and a length of 17', function() {
		assert(detectNetwork('62271360657136265') === 'China UnionPay');
	});

	it('has a prefix of 622714 and a length of 17', function() {
		assert(detectNetwork('62271443885959325') === 'China UnionPay');
	});

	it('has a prefix of 622715 and a length of 17', function() {
		assert(detectNetwork('62271516049579004') === 'China UnionPay');
	});

	it('has a prefix of 622716 and a length of 17', function() {
		assert(detectNetwork('62271650756289499') === 'China UnionPay');
	});

	it('has a prefix of 622717 and a length of 17', function() {
		assert(detectNetwork('62271744653201988') === 'China UnionPay');
	});

	it('has a prefix of 622718 and a length of 17', function() {
		assert(detectNetwork('62271858521278253') === 'China UnionPay');
	});

	it('has a prefix of 622719 and a length of 17', function() {
		assert(detectNetwork('62271971466391252') === 'China UnionPay');
	});

	it('has a prefix of 622720 and a length of 17', function() {
		assert(detectNetwork('62272048559140095') === 'China UnionPay');
	});

	it('has a prefix of 622721 and a length of 17', function() {
		assert(detectNetwork('62272182553094193') === 'China UnionPay');
	});

	it('has a prefix of 622722 and a length of 17', function() {
		assert(detectNetwork('62272227120372833') === 'China UnionPay');
	});

	it('has a prefix of 622723 and a length of 17', function() {
		assert(detectNetwork('62272303406239105') === 'China UnionPay');
	});

	it('has a prefix of 622724 and a length of 17', function() {
		assert(detectNetwork('62272450630894803') === 'China UnionPay');
	});

	it('has a prefix of 622725 and a length of 17', function() {
		assert(detectNetwork('62272512189963005') === 'China UnionPay');
	});

	it('has a prefix of 622726 and a length of 17', function() {
		assert(detectNetwork('62272606771475271') === 'China UnionPay');
	});

	it('has a prefix of 622727 and a length of 17', function() {
		assert(detectNetwork('62272756226337594') === 'China UnionPay');
	});

	it('has a prefix of 622728 and a length of 17', function() {
		assert(detectNetwork('62272864980182801') === 'China UnionPay');
	});

	it('has a prefix of 622729 and a length of 17', function() {
		assert(detectNetwork('62272917251751884') === 'China UnionPay');
	});

	it('has a prefix of 622730 and a length of 17', function() {
		assert(detectNetwork('62273086989369038') === 'China UnionPay');
	});

	it('has a prefix of 622731 and a length of 17', function() {
		assert(detectNetwork('62273150001209453') === 'China UnionPay');
	});

	it('has a prefix of 622732 and a length of 17', function() {
		assert(detectNetwork('62273201592724114') === 'China UnionPay');
	});

	it('has a prefix of 622733 and a length of 17', function() {
		assert(detectNetwork('62273308226877089') === 'China UnionPay');
	});

	it('has a prefix of 622734 and a length of 17', function() {
		assert(detectNetwork('62273439671323991') === 'China UnionPay');
	});

	it('has a prefix of 622735 and a length of 17', function() {
		assert(detectNetwork('62273548228799061') === 'China UnionPay');
	});

	it('has a prefix of 622736 and a length of 17', function() {
		assert(detectNetwork('62273626311265024') === 'China UnionPay');
	});

	it('has a prefix of 622737 and a length of 17', function() {
		assert(detectNetwork('62273728319352646') === 'China UnionPay');
	});

	it('has a prefix of 622738 and a length of 17', function() {
		assert(detectNetwork('62273818136852174') === 'China UnionPay');
	});

	it('has a prefix of 622739 and a length of 17', function() {
		assert(detectNetwork('62273986510529179') === 'China UnionPay');
	});

	it('has a prefix of 622740 and a length of 17', function() {
		assert(detectNetwork('62274065681332682') === 'China UnionPay');
	});

	it('has a prefix of 622741 and a length of 17', function() {
		assert(detectNetwork('62274132162024079') === 'China UnionPay');
	});

	it('has a prefix of 622742 and a length of 17', function() {
		assert(detectNetwork('62274276793808558') === 'China UnionPay');
	});

	it('has a prefix of 622743 and a length of 17', function() {
		assert(detectNetwork('62274339301576665') === 'China UnionPay');
	});

	it('has a prefix of 622744 and a length of 17', function() {
		assert(detectNetwork('62274474244308766') === 'China UnionPay');
	});

	it('has a prefix of 622745 and a length of 17', function() {
		assert(detectNetwork('62274514741443535') === 'China UnionPay');
	});

	it('has a prefix of 622746 and a length of 17', function() {
		assert(detectNetwork('62274695331540722') === 'China UnionPay');
	});

	it('has a prefix of 622747 and a length of 17', function() {
		assert(detectNetwork('62274786723398084') === 'China UnionPay');
	});

	it('has a prefix of 622748 and a length of 17', function() {
		assert(detectNetwork('62274883563124534') === 'China UnionPay');
	});

	it('has a prefix of 622749 and a length of 17', function() {
		assert(detectNetwork('62274995286844407') === 'China UnionPay');
	});

	it('has a prefix of 622750 and a length of 17', function() {
		assert(detectNetwork('62275026792636529') === 'China UnionPay');
	});

	it('has a prefix of 622751 and a length of 17', function() {
		assert(detectNetwork('62275152917209533') === 'China UnionPay');
	});

	it('has a prefix of 622752 and a length of 17', function() {
		assert(detectNetwork('62275295344637708') === 'China UnionPay');
	});

	it('has a prefix of 622753 and a length of 17', function() {
		assert(detectNetwork('62275387133258939') === 'China UnionPay');
	});

	it('has a prefix of 622754 and a length of 17', function() {
		assert(detectNetwork('62275410061143610') === 'China UnionPay');
	});

	it('has a prefix of 622755 and a length of 17', function() {
		assert(detectNetwork('62275599771114106') === 'China UnionPay');
	});

	it('has a prefix of 622756 and a length of 17', function() {
		assert(detectNetwork('62275650129992034') === 'China UnionPay');
	});

	it('has a prefix of 622757 and a length of 17', function() {
		assert(detectNetwork('62275727294144098') === 'China UnionPay');
	});

	it('has a prefix of 622758 and a length of 17', function() {
		assert(detectNetwork('62275822747530827') === 'China UnionPay');
	});

	it('has a prefix of 622759 and a length of 17', function() {
		assert(detectNetwork('62275959249220670') === 'China UnionPay');
	});

	it('has a prefix of 622760 and a length of 17', function() {
		assert(detectNetwork('62276065398356772') === 'China UnionPay');
	});

	it('has a prefix of 622761 and a length of 17', function() {
		assert(detectNetwork('62276164892613538') === 'China UnionPay');
	});

	it('has a prefix of 622762 and a length of 17', function() {
		assert(detectNetwork('62276226862875654') === 'China UnionPay');
	});

	it('has a prefix of 622763 and a length of 17', function() {
		assert(detectNetwork('62276350906173010') === 'China UnionPay');
	});

	it('has a prefix of 622764 and a length of 17', function() {
		assert(detectNetwork('62276408841488757') === 'China UnionPay');
	});

	it('has a prefix of 622765 and a length of 17', function() {
		assert(detectNetwork('62276500481026763') === 'China UnionPay');
	});

	it('has a prefix of 622766 and a length of 17', function() {
		assert(detectNetwork('62276682918531910') === 'China UnionPay');
	});

	it('has a prefix of 622767 and a length of 17', function() {
		assert(detectNetwork('62276784378371065') === 'China UnionPay');
	});

	it('has a prefix of 622768 and a length of 17', function() {
		assert(detectNetwork('62276842852439787') === 'China UnionPay');
	});

	it('has a prefix of 622769 and a length of 17', function() {
		assert(detectNetwork('62276954162431624') === 'China UnionPay');
	});

	it('has a prefix of 622770 and a length of 17', function() {
		assert(detectNetwork('62277048088865659') === 'China UnionPay');
	});

	it('has a prefix of 622771 and a length of 17', function() {
		assert(detectNetwork('62277164092369806') === 'China UnionPay');
	});

	it('has a prefix of 622772 and a length of 17', function() {
		assert(detectNetwork('62277203530828224') === 'China UnionPay');
	});

	it('has a prefix of 622773 and a length of 17', function() {
		assert(detectNetwork('62277354956850254') === 'China UnionPay');
	});

	it('has a prefix of 622774 and a length of 17', function() {
		assert(detectNetwork('62277431850707550') === 'China UnionPay');
	});

	it('has a prefix of 622775 and a length of 17', function() {
		assert(detectNetwork('62277582560245041') === 'China UnionPay');
	});

	it('has a prefix of 622776 and a length of 17', function() {
		assert(detectNetwork('62277609234948130') === 'China UnionPay');
	});

	it('has a prefix of 622777 and a length of 17', function() {
		assert(detectNetwork('62277783101118998') === 'China UnionPay');
	});

	it('has a prefix of 622778 and a length of 17', function() {
		assert(detectNetwork('62277850217565116') === 'China UnionPay');
	});

	it('has a prefix of 622779 and a length of 17', function() {
		assert(detectNetwork('62277987405005876') === 'China UnionPay');
	});

	it('has a prefix of 622780 and a length of 17', function() {
		assert(detectNetwork('62278052613416087') === 'China UnionPay');
	});

	it('has a prefix of 622781 and a length of 17', function() {
		assert(detectNetwork('62278126559692236') === 'China UnionPay');
	});

	it('has a prefix of 622782 and a length of 17', function() {
		assert(detectNetwork('62278245110984450') === 'China UnionPay');
	});

	it('has a prefix of 622783 and a length of 17', function() {
		assert(detectNetwork('62278313449347226') === 'China UnionPay');
	});

	it('has a prefix of 622784 and a length of 17', function() {
		assert(detectNetwork('62278432096195684') === 'China UnionPay');
	});

	it('has a prefix of 622785 and a length of 17', function() {
		assert(detectNetwork('62278548764675186') === 'China UnionPay');
	});

	it('has a prefix of 622786 and a length of 17', function() {
		assert(detectNetwork('62278683251253222') === 'China UnionPay');
	});

	it('has a prefix of 622787 and a length of 17', function() {
		assert(detectNetwork('62278730234022981') === 'China UnionPay');
	});

	it('has a prefix of 622788 and a length of 17', function() {
		assert(detectNetwork('62278837976861830') === 'China UnionPay');
	});

	it('has a prefix of 622789 and a length of 17', function() {
		assert(detectNetwork('62278925991059332') === 'China UnionPay');
	});

	it('has a prefix of 622790 and a length of 17', function() {
		assert(detectNetwork('62279074660308773') === 'China UnionPay');
	});

	it('has a prefix of 622791 and a length of 17', function() {
		assert(detectNetwork('62279117634765917') === 'China UnionPay');
	});

	it('has a prefix of 622792 and a length of 17', function() {
		assert(detectNetwork('62279248271546240') === 'China UnionPay');
	});

	it('has a prefix of 622793 and a length of 17', function() {
		assert(detectNetwork('62279303147871844') === 'China UnionPay');
	});

	it('has a prefix of 622794 and a length of 17', function() {
		assert(detectNetwork('62279429338132173') === 'China UnionPay');
	});

	it('has a prefix of 622795 and a length of 17', function() {
		assert(detectNetwork('62279551009817106') === 'China UnionPay');
	});

	it('has a prefix of 622796 and a length of 17', function() {
		assert(detectNetwork('62279615437827274') === 'China UnionPay');
	});

	it('has a prefix of 622797 and a length of 17', function() {
		assert(detectNetwork('62279799776093962') === 'China UnionPay');
	});

	it('has a prefix of 622798 and a length of 17', function() {
		assert(detectNetwork('62279885721927005') === 'China UnionPay');
	});

	it('has a prefix of 622799 and a length of 17', function() {
		assert(detectNetwork('62279969749588114') === 'China UnionPay');
	});

	it('has a prefix of 622800 and a length of 17', function() {
		assert(detectNetwork('62280037065197544') === 'China UnionPay');
	});

	it('has a prefix of 622801 and a length of 17', function() {
		assert(detectNetwork('62280197489538834') === 'China UnionPay');
	});

	it('has a prefix of 622802 and a length of 17', function() {
		assert(detectNetwork('62280290674654391') === 'China UnionPay');
	});

	it('has a prefix of 622803 and a length of 17', function() {
		assert(detectNetwork('62280347333003374') === 'China UnionPay');
	});

	it('has a prefix of 622804 and a length of 17', function() {
		assert(detectNetwork('62280478204509207') === 'China UnionPay');
	});

	it('has a prefix of 622805 and a length of 17', function() {
		assert(detectNetwork('62280550714601851') === 'China UnionPay');
	});

	it('has a prefix of 622806 and a length of 17', function() {
		assert(detectNetwork('62280604227372300') === 'China UnionPay');
	});

	it('has a prefix of 622807 and a length of 17', function() {
		assert(detectNetwork('62280795060292926') === 'China UnionPay');
	});

	it('has a prefix of 622808 and a length of 17', function() {
		assert(detectNetwork('62280870531235338') === 'China UnionPay');
	});

	it('has a prefix of 622809 and a length of 17', function() {
		assert(detectNetwork('62280947015685106') === 'China UnionPay');
	});

	it('has a prefix of 622810 and a length of 17', function() {
		assert(detectNetwork('62281071751228171') === 'China UnionPay');
	});

	it('has a prefix of 622811 and a length of 17', function() {
		assert(detectNetwork('62281189593424241') === 'China UnionPay');
	});

	it('has a prefix of 622812 and a length of 17', function() {
		assert(detectNetwork('62281202026293048') === 'China UnionPay');
	});

	it('has a prefix of 622813 and a length of 17', function() {
		assert(detectNetwork('62281339789248593') === 'China UnionPay');
	});

	it('has a prefix of 622814 and a length of 17', function() {
		assert(detectNetwork('62281410260607702') === 'China UnionPay');
	});

	it('has a prefix of 622815 and a length of 17', function() {
		assert(detectNetwork('62281559029577126') === 'China UnionPay');
	});

	it('has a prefix of 622816 and a length of 17', function() {
		assert(detectNetwork('62281681906907986') === 'China UnionPay');
	});

	it('has a prefix of 622817 and a length of 17', function() {
		assert(detectNetwork('62281780318673236') === 'China UnionPay');
	});

	it('has a prefix of 622818 and a length of 17', function() {
		assert(detectNetwork('62281893003362494') === 'China UnionPay');
	});

	it('has a prefix of 622819 and a length of 17', function() {
		assert(detectNetwork('62281924769340797') === 'China UnionPay');
	});

	it('has a prefix of 622820 and a length of 17', function() {
		assert(detectNetwork('62282075286672936') === 'China UnionPay');
	});

	it('has a prefix of 622821 and a length of 17', function() {
		assert(detectNetwork('62282182818306106') === 'China UnionPay');
	});

	it('has a prefix of 622822 and a length of 17', function() {
		assert(detectNetwork('62282209521396106') === 'China UnionPay');
	});

	it('has a prefix of 622823 and a length of 17', function() {
		assert(detectNetwork('62282354535196583') === 'China UnionPay');
	});

	it('has a prefix of 622824 and a length of 17', function() {
		assert(detectNetwork('62282446694439517') === 'China UnionPay');
	});

	it('has a prefix of 622825 and a length of 17', function() {
		assert(detectNetwork('62282554526618112') === 'China UnionPay');
	});

	it('has a prefix of 622826 and a length of 17', function() {
		assert(detectNetwork('62282629400749380') === 'China UnionPay');
	});

	it('has a prefix of 622827 and a length of 17', function() {
		assert(detectNetwork('62282748467235646') === 'China UnionPay');
	});

	it('has a prefix of 622828 and a length of 17', function() {
		assert(detectNetwork('62282835577032302') === 'China UnionPay');
	});

	it('has a prefix of 622829 and a length of 17', function() {
		assert(detectNetwork('62282949571066392') === 'China UnionPay');
	});

	it('has a prefix of 622830 and a length of 17', function() {
		assert(detectNetwork('62283066365430867') === 'China UnionPay');
	});

	it('has a prefix of 622831 and a length of 17', function() {
		assert(detectNetwork('62283100876679133') === 'China UnionPay');
	});

	it('has a prefix of 622832 and a length of 17', function() {
		assert(detectNetwork('62283281151596220') === 'China UnionPay');
	});

	it('has a prefix of 622833 and a length of 17', function() {
		assert(detectNetwork('62283355092844921') === 'China UnionPay');
	});

	it('has a prefix of 622834 and a length of 17', function() {
		assert(detectNetwork('62283464900180613') === 'China UnionPay');
	});

	it('has a prefix of 622835 and a length of 17', function() {
		assert(detectNetwork('62283564910901986') === 'China UnionPay');
	});

	it('has a prefix of 622836 and a length of 17', function() {
		assert(detectNetwork('62283618841437767') === 'China UnionPay');
	});

	it('has a prefix of 622837 and a length of 17', function() {
		assert(detectNetwork('62283706585670023') === 'China UnionPay');
	});

	it('has a prefix of 622838 and a length of 17', function() {
		assert(detectNetwork('62283846162184704') === 'China UnionPay');
	});

	it('has a prefix of 622839 and a length of 17', function() {
		assert(detectNetwork('62283903388076444') === 'China UnionPay');
	});

	it('has a prefix of 622840 and a length of 17', function() {
		assert(detectNetwork('62284015767050300') === 'China UnionPay');
	});

	it('has a prefix of 622841 and a length of 17', function() {
		assert(detectNetwork('62284195042129054') === 'China UnionPay');
	});

	it('has a prefix of 622842 and a length of 17', function() {
		assert(detectNetwork('62284239177162715') === 'China UnionPay');
	});

	it('has a prefix of 622843 and a length of 17', function() {
		assert(detectNetwork('62284305092722299') === 'China UnionPay');
	});

	it('has a prefix of 622844 and a length of 17', function() {
		assert(detectNetwork('62284450362115610') === 'China UnionPay');
	});

	it('has a prefix of 622845 and a length of 17', function() {
		assert(detectNetwork('62284579302808074') === 'China UnionPay');
	});

	it('has a prefix of 622846 and a length of 17', function() {
		assert(detectNetwork('62284628591911395') === 'China UnionPay');
	});

	it('has a prefix of 622847 and a length of 17', function() {
		assert(detectNetwork('62284716535788350') === 'China UnionPay');
	});

	it('has a prefix of 622848 and a length of 17', function() {
		assert(detectNetwork('62284875353142963') === 'China UnionPay');
	});

	it('has a prefix of 622849 and a length of 17', function() {
		assert(detectNetwork('62284991100829328') === 'China UnionPay');
	});

	it('has a prefix of 622850 and a length of 17', function() {
		assert(detectNetwork('62285049473533710') === 'China UnionPay');
	});

	it('has a prefix of 622851 and a length of 17', function() {
		assert(detectNetwork('62285126521100875') === 'China UnionPay');
	});

	it('has a prefix of 622852 and a length of 17', function() {
		assert(detectNetwork('62285261942423546') === 'China UnionPay');
	});

	it('has a prefix of 622853 and a length of 17', function() {
		assert(detectNetwork('62285378971648875') === 'China UnionPay');
	});

	it('has a prefix of 622854 and a length of 17', function() {
		assert(detectNetwork('62285480126313782') === 'China UnionPay');
	});

	it('has a prefix of 622855 and a length of 17', function() {
		assert(detectNetwork('62285519372947350') === 'China UnionPay');
	});

	it('has a prefix of 622856 and a length of 17', function() {
		assert(detectNetwork('62285618130753309') === 'China UnionPay');
	});

	it('has a prefix of 622857 and a length of 17', function() {
		assert(detectNetwork('62285783903002987') === 'China UnionPay');
	});

	it('has a prefix of 622858 and a length of 17', function() {
		assert(detectNetwork('62285835640615247') === 'China UnionPay');
	});

	it('has a prefix of 622859 and a length of 17', function() {
		assert(detectNetwork('62285951894982322') === 'China UnionPay');
	});

	it('has a prefix of 622860 and a length of 17', function() {
		assert(detectNetwork('62286044272731926') === 'China UnionPay');
	});

	it('has a prefix of 622861 and a length of 17', function() {
		assert(detectNetwork('62286104417186986') === 'China UnionPay');
	});

	it('has a prefix of 622862 and a length of 17', function() {
		assert(detectNetwork('62286238810745796') === 'China UnionPay');
	});

	it('has a prefix of 622863 and a length of 17', function() {
		assert(detectNetwork('62286338987314475') === 'China UnionPay');
	});

	it('has a prefix of 622864 and a length of 17', function() {
		assert(detectNetwork('62286436178088574') === 'China UnionPay');
	});

	it('has a prefix of 622865 and a length of 17', function() {
		assert(detectNetwork('62286523472540962') === 'China UnionPay');
	});

	it('has a prefix of 622866 and a length of 17', function() {
		assert(detectNetwork('62286641762558622') === 'China UnionPay');
	});

	it('has a prefix of 622867 and a length of 17', function() {
		assert(detectNetwork('62286778690927374') === 'China UnionPay');
	});

	it('has a prefix of 622868 and a length of 17', function() {
		assert(detectNetwork('62286860666141286') === 'China UnionPay');
	});

	it('has a prefix of 622869 and a length of 17', function() {
		assert(detectNetwork('62286922108494077') === 'China UnionPay');
	});

	it('has a prefix of 622870 and a length of 17', function() {
		assert(detectNetwork('62287033006608800') === 'China UnionPay');
	});

	it('has a prefix of 622871 and a length of 17', function() {
		assert(detectNetwork('62287125057941293') === 'China UnionPay');
	});

	it('has a prefix of 622872 and a length of 17', function() {
		assert(detectNetwork('62287216950135492') === 'China UnionPay');
	});

	it('has a prefix of 622873 and a length of 17', function() {
		assert(detectNetwork('62287315011101031') === 'China UnionPay');
	});

	it('has a prefix of 622874 and a length of 17', function() {
		assert(detectNetwork('62287439843274906') === 'China UnionPay');
	});

	it('has a prefix of 622875 and a length of 17', function() {
		assert(detectNetwork('62287504173580158') === 'China UnionPay');
	});

	it('has a prefix of 622876 and a length of 17', function() {
		assert(detectNetwork('62287646541578169') === 'China UnionPay');
	});

	it('has a prefix of 622877 and a length of 17', function() {
		assert(detectNetwork('62287719508278421') === 'China UnionPay');
	});

	it('has a prefix of 622878 and a length of 17', function() {
		assert(detectNetwork('62287898326735254') === 'China UnionPay');
	});

	it('has a prefix of 622879 and a length of 17', function() {
		assert(detectNetwork('62287980789175342') === 'China UnionPay');
	});

	it('has a prefix of 622880 and a length of 17', function() {
		assert(detectNetwork('62288084494517313') === 'China UnionPay');
	});

	it('has a prefix of 622881 and a length of 17', function() {
		assert(detectNetwork('62288154101789363') === 'China UnionPay');
	});

	it('has a prefix of 622882 and a length of 17', function() {
		assert(detectNetwork('62288202923565684') === 'China UnionPay');
	});

	it('has a prefix of 622883 and a length of 17', function() {
		assert(detectNetwork('62288388238063360') === 'China UnionPay');
	});

	it('has a prefix of 622884 and a length of 17', function() {
		assert(detectNetwork('62288422713403718') === 'China UnionPay');
	});

	it('has a prefix of 622885 and a length of 17', function() {
		assert(detectNetwork('62288549100223383') === 'China UnionPay');
	});

	it('has a prefix of 622886 and a length of 17', function() {
		assert(detectNetwork('62288657603045726') === 'China UnionPay');
	});

	it('has a prefix of 622887 and a length of 17', function() {
		assert(detectNetwork('62288772894662113') === 'China UnionPay');
	});

	it('has a prefix of 622888 and a length of 17', function() {
		assert(detectNetwork('62288892386046667') === 'China UnionPay');
	});

	it('has a prefix of 622889 and a length of 17', function() {
		assert(detectNetwork('62288989388831785') === 'China UnionPay');
	});

	it('has a prefix of 622890 and a length of 17', function() {
		assert(detectNetwork('62289051820407667') === 'China UnionPay');
	});

	it('has a prefix of 622891 and a length of 17', function() {
		assert(detectNetwork('62289189661984166') === 'China UnionPay');
	});

	it('has a prefix of 622892 and a length of 17', function() {
		assert(detectNetwork('62289203132268229') === 'China UnionPay');
	});

	it('has a prefix of 622893 and a length of 17', function() {
		assert(detectNetwork('62289315263065375') === 'China UnionPay');
	});

	it('has a prefix of 622894 and a length of 17', function() {
		assert(detectNetwork('62289472376475357') === 'China UnionPay');
	});

	it('has a prefix of 622895 and a length of 17', function() {
		assert(detectNetwork('62289511017141412') === 'China UnionPay');
	});

	it('has a prefix of 622896 and a length of 17', function() {
		assert(detectNetwork('62289607175879480') === 'China UnionPay');
	});

	it('has a prefix of 622897 and a length of 17', function() {
		assert(detectNetwork('62289748767188840') === 'China UnionPay');
	});

	it('has a prefix of 622898 and a length of 17', function() {
		assert(detectNetwork('62289825047225017') === 'China UnionPay');
	});

	it('has a prefix of 622899 and a length of 17', function() {
		assert(detectNetwork('62289992291117416') === 'China UnionPay');
	});

	it('has a prefix of 622900 and a length of 17', function() {
		assert(detectNetwork('62290078504055432') === 'China UnionPay');
	});

	it('has a prefix of 622901 and a length of 17', function() {
		assert(detectNetwork('62290105076058663') === 'China UnionPay');
	});

	it('has a prefix of 622902 and a length of 17', function() {
		assert(detectNetwork('62290274169524070') === 'China UnionPay');
	});

	it('has a prefix of 622903 and a length of 17', function() {
		assert(detectNetwork('62290389354966507') === 'China UnionPay');
	});

	it('has a prefix of 622904 and a length of 17', function() {
		assert(detectNetwork('62290458165796794') === 'China UnionPay');
	});

	it('has a prefix of 622905 and a length of 17', function() {
		assert(detectNetwork('62290571497790069') === 'China UnionPay');
	});

	it('has a prefix of 622906 and a length of 17', function() {
		assert(detectNetwork('62290608896936060') === 'China UnionPay');
	});

	it('has a prefix of 622907 and a length of 17', function() {
		assert(detectNetwork('62290780792295106') === 'China UnionPay');
	});

	it('has a prefix of 622908 and a length of 17', function() {
		assert(detectNetwork('62290893656290309') === 'China UnionPay');
	});

	it('has a prefix of 622909 and a length of 17', function() {
		assert(detectNetwork('62290914475505782') === 'China UnionPay');
	});

	it('has a prefix of 622910 and a length of 17', function() {
		assert(detectNetwork('62291002417032447') === 'China UnionPay');
	});

	it('has a prefix of 622911 and a length of 17', function() {
		assert(detectNetwork('62291174112118396') === 'China UnionPay');
	});

	it('has a prefix of 622912 and a length of 17', function() {
		assert(detectNetwork('62291288332897930') === 'China UnionPay');
	});

	it('has a prefix of 622913 and a length of 17', function() {
		assert(detectNetwork('62291387059536515') === 'China UnionPay');
	});

	it('has a prefix of 622914 and a length of 17', function() {
		assert(detectNetwork('62291466825585803') === 'China UnionPay');
	});

	it('has a prefix of 622915 and a length of 17', function() {
		assert(detectNetwork('62291538610011463') === 'China UnionPay');
	});

	it('has a prefix of 622916 and a length of 17', function() {
		assert(detectNetwork('62291692326579375') === 'China UnionPay');
	});

	it('has a prefix of 622917 and a length of 17', function() {
		assert(detectNetwork('62291790055033426') === 'China UnionPay');
	});

	it('has a prefix of 622918 and a length of 17', function() {
		assert(detectNetwork('62291853259748409') === 'China UnionPay');
	});

	it('has a prefix of 622919 and a length of 17', function() {
		assert(detectNetwork('62291987840548797') === 'China UnionPay');
	});

	it('has a prefix of 622920 and a length of 17', function() {
		assert(detectNetwork('62292035985127060') === 'China UnionPay');
	});

	it('has a prefix of 622921 and a length of 17', function() {
		assert(detectNetwork('62292193904998166') === 'China UnionPay');
	});

	it('has a prefix of 622922 and a length of 17', function() {
		assert(detectNetwork('62292216089119528') === 'China UnionPay');
	});

	it('has a prefix of 622923 and a length of 17', function() {
		assert(detectNetwork('62292370099076816') === 'China UnionPay');
	});

	it('has a prefix of 622924 and a length of 17', function() {
		assert(detectNetwork('62292426328231650') === 'China UnionPay');
	});

	it('has a prefix of 622925 and a length of 17', function() {
		assert(detectNetwork('62292552127108655') === 'China UnionPay');
	});

	it('has a prefix of 624 and a length of 18', function() {
		assert(detectNetwork('624205836065653179') === 'China UnionPay');
	});

	it('has a prefix of 625 and a length of 18', function() {
		assert(detectNetwork('625190042328035893') === 'China UnionPay');
	});

	it('has a prefix of 626 and a length of 18', function() {
		assert(detectNetwork('626968163522907990') === 'China UnionPay');
	});

	it('has a prefix of 6282 and a length of 18', function() {
		assert(detectNetwork('628209006793444626') === 'China UnionPay');
	});

	it('has a prefix of 6283 and a length of 18', function() {
		assert(detectNetwork('628309992361893484') === 'China UnionPay');
	});

	it('has a prefix of 6284 and a length of 18', function() {
		assert(detectNetwork('628467032548077001') === 'China UnionPay');
	});

	it('has a prefix of 6285 and a length of 18', function() {
		assert(detectNetwork('628581262768622891') === 'China UnionPay');
	});

	it('has a prefix of 6286 and a length of 18', function() {
		assert(detectNetwork('628609208817132092') === 'China UnionPay');
	});

	it('has a prefix of 6287 and a length of 18', function() {
		assert(detectNetwork('628773380866936011') === 'China UnionPay');
	});

	it('has a prefix of 6288 and a length of 18', function() {
		assert(detectNetwork('628873672876521349') === 'China UnionPay');
	});

	it('has a prefix of 622126 and a length of 18', function() {
		assert(detectNetwork('622126433863486452') === 'China UnionPay');
	});

	it('has a prefix of 622127 and a length of 18', function() {
		assert(detectNetwork('622127078336847045') === 'China UnionPay');
	});

	it('has a prefix of 622128 and a length of 18', function() {
		assert(detectNetwork('622128632598206969') === 'China UnionPay');
	});

	it('has a prefix of 622129 and a length of 18', function() {
		assert(detectNetwork('622129433170678332') === 'China UnionPay');
	});

	it('has a prefix of 622130 and a length of 18', function() {
		assert(detectNetwork('622130391177009930') === 'China UnionPay');
	});

	it('has a prefix of 622131 and a length of 18', function() {
		assert(detectNetwork('622131655685272538') === 'China UnionPay');
	});

	it('has a prefix of 622132 and a length of 18', function() {
		assert(detectNetwork('622132856838107536') === 'China UnionPay');
	});

	it('has a prefix of 622133 and a length of 18', function() {
		assert(detectNetwork('622133169914301704') === 'China UnionPay');
	});

	it('has a prefix of 622134 and a length of 18', function() {
		assert(detectNetwork('622134154476952593') === 'China UnionPay');
	});

	it('has a prefix of 622135 and a length of 18', function() {
		assert(detectNetwork('622135726341369173') === 'China UnionPay');
	});

	it('has a prefix of 622136 and a length of 18', function() {
		assert(detectNetwork('622136171376310867') === 'China UnionPay');
	});

	it('has a prefix of 622137 and a length of 18', function() {
		assert(detectNetwork('622137809808776492') === 'China UnionPay');
	});

	it('has a prefix of 622138 and a length of 18', function() {
		assert(detectNetwork('622138684355086209') === 'China UnionPay');
	});

	it('has a prefix of 622139 and a length of 18', function() {
		assert(detectNetwork('622139133378978954') === 'China UnionPay');
	});

	it('has a prefix of 622140 and a length of 18', function() {
		assert(detectNetwork('622140666068684137') === 'China UnionPay');
	});

	it('has a prefix of 622141 and a length of 18', function() {
		assert(detectNetwork('622141427560016029') === 'China UnionPay');
	});

	it('has a prefix of 622142 and a length of 18', function() {
		assert(detectNetwork('622142284560276866') === 'China UnionPay');
	});

	it('has a prefix of 622143 and a length of 18', function() {
		assert(detectNetwork('622143145794349467') === 'China UnionPay');
	});

	it('has a prefix of 622144 and a length of 18', function() {
		assert(detectNetwork('622144388903546332') === 'China UnionPay');
	});

	it('has a prefix of 622145 and a length of 18', function() {
		assert(detectNetwork('622145269158051645') === 'China UnionPay');
	});

	it('has a prefix of 622146 and a length of 18', function() {
		assert(detectNetwork('622146278156181644') === 'China UnionPay');
	});

	it('has a prefix of 622147 and a length of 18', function() {
		assert(detectNetwork('622147744973467232') === 'China UnionPay');
	});

	it('has a prefix of 622148 and a length of 18', function() {
		assert(detectNetwork('622148741325578708') === 'China UnionPay');
	});

	it('has a prefix of 622149 and a length of 18', function() {
		assert(detectNetwork('622149176305397458') === 'China UnionPay');
	});

	it('has a prefix of 622150 and a length of 18', function() {
		assert(detectNetwork('622150877994445683') === 'China UnionPay');
	});

	it('has a prefix of 622151 and a length of 18', function() {
		assert(detectNetwork('622151777685347930') === 'China UnionPay');
	});

	it('has a prefix of 622152 and a length of 18', function() {
		assert(detectNetwork('622152737042555142') === 'China UnionPay');
	});

	it('has a prefix of 622153 and a length of 18', function() {
		assert(detectNetwork('622153816581589318') === 'China UnionPay');
	});

	it('has a prefix of 622154 and a length of 18', function() {
		assert(detectNetwork('622154514705108810') === 'China UnionPay');
	});

	it('has a prefix of 622155 and a length of 18', function() {
		assert(detectNetwork('622155607986389870') === 'China UnionPay');
	});

	it('has a prefix of 622156 and a length of 18', function() {
		assert(detectNetwork('622156136549812406') === 'China UnionPay');
	});

	it('has a prefix of 622157 and a length of 18', function() {
		assert(detectNetwork('622157907254825692') === 'China UnionPay');
	});

	it('has a prefix of 622158 and a length of 18', function() {
		assert(detectNetwork('622158191159695464') === 'China UnionPay');
	});

	it('has a prefix of 622159 and a length of 18', function() {
		assert(detectNetwork('622159331564869892') === 'China UnionPay');
	});

	it('has a prefix of 622160 and a length of 18', function() {
		assert(detectNetwork('622160430220885084') === 'China UnionPay');
	});

	it('has a prefix of 622161 and a length of 18', function() {
		assert(detectNetwork('622161557613876413') === 'China UnionPay');
	});

	it('has a prefix of 622162 and a length of 18', function() {
		assert(detectNetwork('622162247529182518') === 'China UnionPay');
	});

	it('has a prefix of 622163 and a length of 18', function() {
		assert(detectNetwork('622163333539912923') === 'China UnionPay');
	});

	it('has a prefix of 622164 and a length of 18', function() {
		assert(detectNetwork('622164088877975783') === 'China UnionPay');
	});

	it('has a prefix of 622165 and a length of 18', function() {
		assert(detectNetwork('622165793234487045') === 'China UnionPay');
	});

	it('has a prefix of 622166 and a length of 18', function() {
		assert(detectNetwork('622166493593085282') === 'China UnionPay');
	});

	it('has a prefix of 622167 and a length of 18', function() {
		assert(detectNetwork('622167277872500514') === 'China UnionPay');
	});

	it('has a prefix of 622168 and a length of 18', function() {
		assert(detectNetwork('622168596568783373') === 'China UnionPay');
	});

	it('has a prefix of 622169 and a length of 18', function() {
		assert(detectNetwork('622169836128347188') === 'China UnionPay');
	});

	it('has a prefix of 622170 and a length of 18', function() {
		assert(detectNetwork('622170788495073560') === 'China UnionPay');
	});

	it('has a prefix of 622171 and a length of 18', function() {
		assert(detectNetwork('622171873609768694') === 'China UnionPay');
	});

	it('has a prefix of 622172 and a length of 18', function() {
		assert(detectNetwork('622172530179499709') === 'China UnionPay');
	});

	it('has a prefix of 622173 and a length of 18', function() {
		assert(detectNetwork('622173154232708898') === 'China UnionPay');
	});

	it('has a prefix of 622174 and a length of 18', function() {
		assert(detectNetwork('622174531885288947') === 'China UnionPay');
	});

	it('has a prefix of 622175 and a length of 18', function() {
		assert(detectNetwork('622175835837645492') === 'China UnionPay');
	});

	it('has a prefix of 622176 and a length of 18', function() {
		assert(detectNetwork('622176834486947022') === 'China UnionPay');
	});

	it('has a prefix of 622177 and a length of 18', function() {
		assert(detectNetwork('622177514479027823') === 'China UnionPay');
	});

	it('has a prefix of 622178 and a length of 18', function() {
		assert(detectNetwork('622178895882565156') === 'China UnionPay');
	});

	it('has a prefix of 622179 and a length of 18', function() {
		assert(detectNetwork('622179938598832234') === 'China UnionPay');
	});

	it('has a prefix of 622180 and a length of 18', function() {
		assert(detectNetwork('622180028071431183') === 'China UnionPay');
	});

	it('has a prefix of 622181 and a length of 18', function() {
		assert(detectNetwork('622181886404695304') === 'China UnionPay');
	});

	it('has a prefix of 622182 and a length of 18', function() {
		assert(detectNetwork('622182588013086646') === 'China UnionPay');
	});

	it('has a prefix of 622183 and a length of 18', function() {
		assert(detectNetwork('622183731316854941') === 'China UnionPay');
	});

	it('has a prefix of 622184 and a length of 18', function() {
		assert(detectNetwork('622184105421155217') === 'China UnionPay');
	});

	it('has a prefix of 622185 and a length of 18', function() {
		assert(detectNetwork('622185115696269249') === 'China UnionPay');
	});

	it('has a prefix of 622186 and a length of 18', function() {
		assert(detectNetwork('622186036131229414') === 'China UnionPay');
	});

	it('has a prefix of 622187 and a length of 18', function() {
		assert(detectNetwork('622187521337785055') === 'China UnionPay');
	});

	it('has a prefix of 622188 and a length of 18', function() {
		assert(detectNetwork('622188489684698927') === 'China UnionPay');
	});

	it('has a prefix of 622189 and a length of 18', function() {
		assert(detectNetwork('622189126301629453') === 'China UnionPay');
	});

	it('has a prefix of 622190 and a length of 18', function() {
		assert(detectNetwork('622190541044169013') === 'China UnionPay');
	});

	it('has a prefix of 622191 and a length of 18', function() {
		assert(detectNetwork('622191321567697601') === 'China UnionPay');
	});

	it('has a prefix of 622192 and a length of 18', function() {
		assert(detectNetwork('622192441435900198') === 'China UnionPay');
	});

	it('has a prefix of 622193 and a length of 18', function() {
		assert(detectNetwork('622193036400354629') === 'China UnionPay');
	});

	it('has a prefix of 622194 and a length of 18', function() {
		assert(detectNetwork('622194447828951858') === 'China UnionPay');
	});

	it('has a prefix of 622195 and a length of 18', function() {
		assert(detectNetwork('622195155995631371') === 'China UnionPay');
	});

	it('has a prefix of 622196 and a length of 18', function() {
		assert(detectNetwork('622196168520455588') === 'China UnionPay');
	});

	it('has a prefix of 622197 and a length of 18', function() {
		assert(detectNetwork('622197015674695825') === 'China UnionPay');
	});

	it('has a prefix of 622198 and a length of 18', function() {
		assert(detectNetwork('622198235676876346') === 'China UnionPay');
	});

	it('has a prefix of 622199 and a length of 18', function() {
		assert(detectNetwork('622199587060848548') === 'China UnionPay');
	});

	it('has a prefix of 622200 and a length of 18', function() {
		assert(detectNetwork('622200542370265037') === 'China UnionPay');
	});

	it('has a prefix of 622201 and a length of 18', function() {
		assert(detectNetwork('622201077444435302') === 'China UnionPay');
	});

	it('has a prefix of 622202 and a length of 18', function() {
		assert(detectNetwork('622202853160819984') === 'China UnionPay');
	});

	it('has a prefix of 622203 and a length of 18', function() {
		assert(detectNetwork('622203491241000271') === 'China UnionPay');
	});

	it('has a prefix of 622204 and a length of 18', function() {
		assert(detectNetwork('622204828474635731') === 'China UnionPay');
	});

	it('has a prefix of 622205 and a length of 18', function() {
		assert(detectNetwork('622205107008943562') === 'China UnionPay');
	});

	it('has a prefix of 622206 and a length of 18', function() {
		assert(detectNetwork('622206331937984696') === 'China UnionPay');
	});

	it('has a prefix of 622207 and a length of 18', function() {
		assert(detectNetwork('622207479369780184') === 'China UnionPay');
	});

	it('has a prefix of 622208 and a length of 18', function() {
		assert(detectNetwork('622208529177322652') === 'China UnionPay');
	});

	it('has a prefix of 622209 and a length of 18', function() {
		assert(detectNetwork('622209317215492821') === 'China UnionPay');
	});

	it('has a prefix of 622210 and a length of 18', function() {
		assert(detectNetwork('622210687019665930') === 'China UnionPay');
	});

	it('has a prefix of 622211 and a length of 18', function() {
		assert(detectNetwork('622211797875132696') === 'China UnionPay');
	});

	it('has a prefix of 622212 and a length of 18', function() {
		assert(detectNetwork('622212608521988634') === 'China UnionPay');
	});

	it('has a prefix of 622213 and a length of 18', function() {
		assert(detectNetwork('622213753726083577') === 'China UnionPay');
	});

	it('has a prefix of 622214 and a length of 18', function() {
		assert(detectNetwork('622214551449545226') === 'China UnionPay');
	});

	it('has a prefix of 622215 and a length of 18', function() {
		assert(detectNetwork('622215577237730065') === 'China UnionPay');
	});

	it('has a prefix of 622216 and a length of 18', function() {
		assert(detectNetwork('622216296793244056') === 'China UnionPay');
	});

	it('has a prefix of 622217 and a length of 18', function() {
		assert(detectNetwork('622217301667042721') === 'China UnionPay');
	});

	it('has a prefix of 622218 and a length of 18', function() {
		assert(detectNetwork('622218411708997767') === 'China UnionPay');
	});

	it('has a prefix of 622219 and a length of 18', function() {
		assert(detectNetwork('622219401217528714') === 'China UnionPay');
	});

	it('has a prefix of 622220 and a length of 18', function() {
		assert(detectNetwork('622220810082667197') === 'China UnionPay');
	});

	it('has a prefix of 622221 and a length of 18', function() {
		assert(detectNetwork('622221709174510127') === 'China UnionPay');
	});

	it('has a prefix of 622222 and a length of 18', function() {
		assert(detectNetwork('622222140438594951') === 'China UnionPay');
	});

	it('has a prefix of 622223 and a length of 18', function() {
		assert(detectNetwork('622223128654558768') === 'China UnionPay');
	});

	it('has a prefix of 622224 and a length of 18', function() {
		assert(detectNetwork('622224989864957857') === 'China UnionPay');
	});

	it('has a prefix of 622225 and a length of 18', function() {
		assert(detectNetwork('622225154764077077') === 'China UnionPay');
	});

	it('has a prefix of 622226 and a length of 18', function() {
		assert(detectNetwork('622226825974476769') === 'China UnionPay');
	});

	it('has a prefix of 622227 and a length of 18', function() {
		assert(detectNetwork('622227116901054470') === 'China UnionPay');
	});

	it('has a prefix of 622228 and a length of 18', function() {
		assert(detectNetwork('622228394976691010') === 'China UnionPay');
	});

	it('has a prefix of 622229 and a length of 18', function() {
		assert(detectNetwork('622229799946418320') === 'China UnionPay');
	});

	it('has a prefix of 622230 and a length of 18', function() {
		assert(detectNetwork('622230192316110137') === 'China UnionPay');
	});

	it('has a prefix of 622231 and a length of 18', function() {
		assert(detectNetwork('622231261643352634') === 'China UnionPay');
	});

	it('has a prefix of 622232 and a length of 18', function() {
		assert(detectNetwork('622232825101049453') === 'China UnionPay');
	});

	it('has a prefix of 622233 and a length of 18', function() {
		assert(detectNetwork('622233173196540207') === 'China UnionPay');
	});

	it('has a prefix of 622234 and a length of 18', function() {
		assert(detectNetwork('622234552605344877') === 'China UnionPay');
	});

	it('has a prefix of 622235 and a length of 18', function() {
		assert(detectNetwork('622235029265497619') === 'China UnionPay');
	});

	it('has a prefix of 622236 and a length of 18', function() {
		assert(detectNetwork('622236061746943908') === 'China UnionPay');
	});

	it('has a prefix of 622237 and a length of 18', function() {
		assert(detectNetwork('622237759858255338') === 'China UnionPay');
	});

	it('has a prefix of 622238 and a length of 18', function() {
		assert(detectNetwork('622238292568471253') === 'China UnionPay');
	});

	it('has a prefix of 622239 and a length of 18', function() {
		assert(detectNetwork('622239402616441999') === 'China UnionPay');
	});

	it('has a prefix of 622240 and a length of 18', function() {
		assert(detectNetwork('622240896903324569') === 'China UnionPay');
	});

	it('has a prefix of 622241 and a length of 18', function() {
		assert(detectNetwork('622241722487428315') === 'China UnionPay');
	});

	it('has a prefix of 622242 and a length of 18', function() {
		assert(detectNetwork('622242022771775087') === 'China UnionPay');
	});

	it('has a prefix of 622243 and a length of 18', function() {
		assert(detectNetwork('622243360557422461') === 'China UnionPay');
	});

	it('has a prefix of 622244 and a length of 18', function() {
		assert(detectNetwork('622244541044424819') === 'China UnionPay');
	});

	it('has a prefix of 622245 and a length of 18', function() {
		assert(detectNetwork('622245814239418184') === 'China UnionPay');
	});

	it('has a prefix of 622246 and a length of 18', function() {
		assert(detectNetwork('622246586608968901') === 'China UnionPay');
	});

	it('has a prefix of 622247 and a length of 18', function() {
		assert(detectNetwork('622247915888336979') === 'China UnionPay');
	});

	it('has a prefix of 622248 and a length of 18', function() {
		assert(detectNetwork('622248897641490983') === 'China UnionPay');
	});

	it('has a prefix of 622249 and a length of 18', function() {
		assert(detectNetwork('622249708409358134') === 'China UnionPay');
	});

	it('has a prefix of 622250 and a length of 18', function() {
		assert(detectNetwork('622250541915307873') === 'China UnionPay');
	});

	it('has a prefix of 622251 and a length of 18', function() {
		assert(detectNetwork('622251546548324599') === 'China UnionPay');
	});

	it('has a prefix of 622252 and a length of 18', function() {
		assert(detectNetwork('622252049361177691') === 'China UnionPay');
	});

	it('has a prefix of 622253 and a length of 18', function() {
		assert(detectNetwork('622253907065650146') === 'China UnionPay');
	});

	it('has a prefix of 622254 and a length of 18', function() {
		assert(detectNetwork('622254760025847984') === 'China UnionPay');
	});

	it('has a prefix of 622255 and a length of 18', function() {
		assert(detectNetwork('622255917207873384') === 'China UnionPay');
	});

	it('has a prefix of 622256 and a length of 18', function() {
		assert(detectNetwork('622256105983289258') === 'China UnionPay');
	});

	it('has a prefix of 622257 and a length of 18', function() {
		assert(detectNetwork('622257921665759238') === 'China UnionPay');
	});

	it('has a prefix of 622258 and a length of 18', function() {
		assert(detectNetwork('622258815420125845') === 'China UnionPay');
	});

	it('has a prefix of 622259 and a length of 18', function() {
		assert(detectNetwork('622259629093267505') === 'China UnionPay');
	});

	it('has a prefix of 622260 and a length of 18', function() {
		assert(detectNetwork('622260117978054865') === 'China UnionPay');
	});

	it('has a prefix of 622261 and a length of 18', function() {
		assert(detectNetwork('622261149890157667') === 'China UnionPay');
	});

	it('has a prefix of 622262 and a length of 18', function() {
		assert(detectNetwork('622262897900973228') === 'China UnionPay');
	});

	it('has a prefix of 622263 and a length of 18', function() {
		assert(detectNetwork('622263453922255144') === 'China UnionPay');
	});

	it('has a prefix of 622264 and a length of 18', function() {
		assert(detectNetwork('622264964858499717') === 'China UnionPay');
	});

	it('has a prefix of 622265 and a length of 18', function() {
		assert(detectNetwork('622265494711671811') === 'China UnionPay');
	});

	it('has a prefix of 622266 and a length of 18', function() {
		assert(detectNetwork('622266836857936193') === 'China UnionPay');
	});

	it('has a prefix of 622267 and a length of 18', function() {
		assert(detectNetwork('622267447415425129') === 'China UnionPay');
	});

	it('has a prefix of 622268 and a length of 18', function() {
		assert(detectNetwork('622268683409060416') === 'China UnionPay');
	});

	it('has a prefix of 622269 and a length of 18', function() {
		assert(detectNetwork('622269098100567866') === 'China UnionPay');
	});

	it('has a prefix of 622270 and a length of 18', function() {
		assert(detectNetwork('622270927416741643') === 'China UnionPay');
	});

	it('has a prefix of 622271 and a length of 18', function() {
		assert(detectNetwork('622271069106945590') === 'China UnionPay');
	});

	it('has a prefix of 622272 and a length of 18', function() {
		assert(detectNetwork('622272441605929662') === 'China UnionPay');
	});

	it('has a prefix of 622273 and a length of 18', function() {
		assert(detectNetwork('622273402895283558') === 'China UnionPay');
	});

	it('has a prefix of 622274 and a length of 18', function() {
		assert(detectNetwork('622274864505212273') === 'China UnionPay');
	});

	it('has a prefix of 622275 and a length of 18', function() {
		assert(detectNetwork('622275438600686733') === 'China UnionPay');
	});

	it('has a prefix of 622276 and a length of 18', function() {
		assert(detectNetwork('622276133577507896') === 'China UnionPay');
	});

	it('has a prefix of 622277 and a length of 18', function() {
		assert(detectNetwork('622277013410801372') === 'China UnionPay');
	});

	it('has a prefix of 622278 and a length of 18', function() {
		assert(detectNetwork('622278763818819830') === 'China UnionPay');
	});

	it('has a prefix of 622279 and a length of 18', function() {
		assert(detectNetwork('622279042337560690') === 'China UnionPay');
	});

	it('has a prefix of 622280 and a length of 18', function() {
		assert(detectNetwork('622280108016967079') === 'China UnionPay');
	});

	it('has a prefix of 622281 and a length of 18', function() {
		assert(detectNetwork('622281916460293244') === 'China UnionPay');
	});

	it('has a prefix of 622282 and a length of 18', function() {
		assert(detectNetwork('622282067974682867') === 'China UnionPay');
	});

	it('has a prefix of 622283 and a length of 18', function() {
		assert(detectNetwork('622283395468924319') === 'China UnionPay');
	});

	it('has a prefix of 622284 and a length of 18', function() {
		assert(detectNetwork('622284579538188702') === 'China UnionPay');
	});

	it('has a prefix of 622285 and a length of 18', function() {
		assert(detectNetwork('622285515787285683') === 'China UnionPay');
	});

	it('has a prefix of 622286 and a length of 18', function() {
		assert(detectNetwork('622286139627602353') === 'China UnionPay');
	});

	it('has a prefix of 622287 and a length of 18', function() {
		assert(detectNetwork('622287436062479902') === 'China UnionPay');
	});

	it('has a prefix of 622288 and a length of 18', function() {
		assert(detectNetwork('622288799218465780') === 'China UnionPay');
	});

	it('has a prefix of 622289 and a length of 18', function() {
		assert(detectNetwork('622289778099006896') === 'China UnionPay');
	});

	it('has a prefix of 622290 and a length of 18', function() {
		assert(detectNetwork('622290135134004962') === 'China UnionPay');
	});

	it('has a prefix of 622291 and a length of 18', function() {
		assert(detectNetwork('622291942189483169') === 'China UnionPay');
	});

	it('has a prefix of 622292 and a length of 18', function() {
		assert(detectNetwork('622292205973790693') === 'China UnionPay');
	});

	it('has a prefix of 622293 and a length of 18', function() {
		assert(detectNetwork('622293810769684607') === 'China UnionPay');
	});

	it('has a prefix of 622294 and a length of 18', function() {
		assert(detectNetwork('622294851679561117') === 'China UnionPay');
	});

	it('has a prefix of 622295 and a length of 18', function() {
		assert(detectNetwork('622295932793574783') === 'China UnionPay');
	});

	it('has a prefix of 622296 and a length of 18', function() {
		assert(detectNetwork('622296978223895339') === 'China UnionPay');
	});

	it('has a prefix of 622297 and a length of 18', function() {
		assert(detectNetwork('622297177042928510') === 'China UnionPay');
	});

	it('has a prefix of 622298 and a length of 18', function() {
		assert(detectNetwork('622298721034780987') === 'China UnionPay');
	});

	it('has a prefix of 622299 and a length of 18', function() {
		assert(detectNetwork('622299468769506174') === 'China UnionPay');
	});

	it('has a prefix of 622300 and a length of 18', function() {
		assert(detectNetwork('622300557322633031') === 'China UnionPay');
	});

	it('has a prefix of 622301 and a length of 18', function() {
		assert(detectNetwork('622301567855122956') === 'China UnionPay');
	});

	it('has a prefix of 622302 and a length of 18', function() {
		assert(detectNetwork('622302439945949635') === 'China UnionPay');
	});

	it('has a prefix of 622303 and a length of 18', function() {
		assert(detectNetwork('622303888600876240') === 'China UnionPay');
	});

	it('has a prefix of 622304 and a length of 18', function() {
		assert(detectNetwork('622304880233690684') === 'China UnionPay');
	});

	it('has a prefix of 622305 and a length of 18', function() {
		assert(detectNetwork('622305179774876762') === 'China UnionPay');
	});

	it('has a prefix of 622306 and a length of 18', function() {
		assert(detectNetwork('622306165552830482') === 'China UnionPay');
	});

	it('has a prefix of 622307 and a length of 18', function() {
		assert(detectNetwork('622307252108628342') === 'China UnionPay');
	});

	it('has a prefix of 622308 and a length of 18', function() {
		assert(detectNetwork('622308993647936048') === 'China UnionPay');
	});

	it('has a prefix of 622309 and a length of 18', function() {
		assert(detectNetwork('622309451818523082') === 'China UnionPay');
	});

	it('has a prefix of 622310 and a length of 18', function() {
		assert(detectNetwork('622310789905152631') === 'China UnionPay');
	});

	it('has a prefix of 622311 and a length of 18', function() {
		assert(detectNetwork('622311778711443432') === 'China UnionPay');
	});

	it('has a prefix of 622312 and a length of 18', function() {
		assert(detectNetwork('622312367712574882') === 'China UnionPay');
	});

	it('has a prefix of 622313 and a length of 18', function() {
		assert(detectNetwork('622313312477241744') === 'China UnionPay');
	});

	it('has a prefix of 622314 and a length of 18', function() {
		assert(detectNetwork('622314732176127605') === 'China UnionPay');
	});

	it('has a prefix of 622315 and a length of 18', function() {
		assert(detectNetwork('622315566849046950') === 'China UnionPay');
	});

	it('has a prefix of 622316 and a length of 18', function() {
		assert(detectNetwork('622316581743009040') === 'China UnionPay');
	});

	it('has a prefix of 622317 and a length of 18', function() {
		assert(detectNetwork('622317057942295244') === 'China UnionPay');
	});

	it('has a prefix of 622318 and a length of 18', function() {
		assert(detectNetwork('622318459436395239') === 'China UnionPay');
	});

	it('has a prefix of 622319 and a length of 18', function() {
		assert(detectNetwork('622319827358088568') === 'China UnionPay');
	});

	it('has a prefix of 622320 and a length of 18', function() {
		assert(detectNetwork('622320693819985205') === 'China UnionPay');
	});

	it('has a prefix of 622321 and a length of 18', function() {
		assert(detectNetwork('622321561192145003') === 'China UnionPay');
	});

	it('has a prefix of 622322 and a length of 18', function() {
		assert(detectNetwork('622322516145507847') === 'China UnionPay');
	});

	it('has a prefix of 622323 and a length of 18', function() {
		assert(detectNetwork('622323500526819367') === 'China UnionPay');
	});

	it('has a prefix of 622324 and a length of 18', function() {
		assert(detectNetwork('622324824955888002') === 'China UnionPay');
	});

	it('has a prefix of 622325 and a length of 18', function() {
		assert(detectNetwork('622325882544415655') === 'China UnionPay');
	});

	it('has a prefix of 622326 and a length of 18', function() {
		assert(detectNetwork('622326479680263068') === 'China UnionPay');
	});

	it('has a prefix of 622327 and a length of 18', function() {
		assert(detectNetwork('622327026387461446') === 'China UnionPay');
	});

	it('has a prefix of 622328 and a length of 18', function() {
		assert(detectNetwork('622328306800716702') === 'China UnionPay');
	});

	it('has a prefix of 622329 and a length of 18', function() {
		assert(detectNetwork('622329900843689818') === 'China UnionPay');
	});

	it('has a prefix of 622330 and a length of 18', function() {
		assert(detectNetwork('622330200280573472') === 'China UnionPay');
	});

	it('has a prefix of 622331 and a length of 18', function() {
		assert(detectNetwork('622331273088722253') === 'China UnionPay');
	});

	it('has a prefix of 622332 and a length of 18', function() {
		assert(detectNetwork('622332061518093856') === 'China UnionPay');
	});

	it('has a prefix of 622333 and a length of 18', function() {
		assert(detectNetwork('622333407209464237') === 'China UnionPay');
	});

	it('has a prefix of 622334 and a length of 18', function() {
		assert(detectNetwork('622334285226802131') === 'China UnionPay');
	});

	it('has a prefix of 622335 and a length of 18', function() {
		assert(detectNetwork('622335662016508608') === 'China UnionPay');
	});

	it('has a prefix of 622336 and a length of 18', function() {
		assert(detectNetwork('622336561905278367') === 'China UnionPay');
	});

	it('has a prefix of 622337 and a length of 18', function() {
		assert(detectNetwork('622337089630475472') === 'China UnionPay');
	});

	it('has a prefix of 622338 and a length of 18', function() {
		assert(detectNetwork('622338867434885243') === 'China UnionPay');
	});

	it('has a prefix of 622339 and a length of 18', function() {
		assert(detectNetwork('622339807542009127') === 'China UnionPay');
	});

	it('has a prefix of 622340 and a length of 18', function() {
		assert(detectNetwork('622340693816549646') === 'China UnionPay');
	});

	it('has a prefix of 622341 and a length of 18', function() {
		assert(detectNetwork('622341054049196967') === 'China UnionPay');
	});

	it('has a prefix of 622342 and a length of 18', function() {
		assert(detectNetwork('622342199625739316') === 'China UnionPay');
	});

	it('has a prefix of 622343 and a length of 18', function() {
		assert(detectNetwork('622343526966153722') === 'China UnionPay');
	});

	it('has a prefix of 622344 and a length of 18', function() {
		assert(detectNetwork('622344727098890780') === 'China UnionPay');
	});

	it('has a prefix of 622345 and a length of 18', function() {
		assert(detectNetwork('622345661320390635') === 'China UnionPay');
	});

	it('has a prefix of 622346 and a length of 18', function() {
		assert(detectNetwork('622346182604958743') === 'China UnionPay');
	});

	it('has a prefix of 622347 and a length of 18', function() {
		assert(detectNetwork('622347183462927056') === 'China UnionPay');
	});

	it('has a prefix of 622348 and a length of 18', function() {
		assert(detectNetwork('622348507126156504') === 'China UnionPay');
	});

	it('has a prefix of 622349 and a length of 18', function() {
		assert(detectNetwork('622349962458417068') === 'China UnionPay');
	});

	it('has a prefix of 622350 and a length of 18', function() {
		assert(detectNetwork('622350438001296209') === 'China UnionPay');
	});

	it('has a prefix of 622351 and a length of 18', function() {
		assert(detectNetwork('622351689277852290') === 'China UnionPay');
	});

	it('has a prefix of 622352 and a length of 18', function() {
		assert(detectNetwork('622352939744284679') === 'China UnionPay');
	});

	it('has a prefix of 622353 and a length of 18', function() {
		assert(detectNetwork('622353599106370569') === 'China UnionPay');
	});

	it('has a prefix of 622354 and a length of 18', function() {
		assert(detectNetwork('622354533931803372') === 'China UnionPay');
	});

	it('has a prefix of 622355 and a length of 18', function() {
		assert(detectNetwork('622355364431439267') === 'China UnionPay');
	});

	it('has a prefix of 622356 and a length of 18', function() {
		assert(detectNetwork('622356582681947885') === 'China UnionPay');
	});

	it('has a prefix of 622357 and a length of 18', function() {
		assert(detectNetwork('622357956236174880') === 'China UnionPay');
	});

	it('has a prefix of 622358 and a length of 18', function() {
		assert(detectNetwork('622358853867254788') === 'China UnionPay');
	});

	it('has a prefix of 622359 and a length of 18', function() {
		assert(detectNetwork('622359498561837745') === 'China UnionPay');
	});

	it('has a prefix of 622360 and a length of 18', function() {
		assert(detectNetwork('622360121795719066') === 'China UnionPay');
	});

	it('has a prefix of 622361 and a length of 18', function() {
		assert(detectNetwork('622361493892626382') === 'China UnionPay');
	});

	it('has a prefix of 622362 and a length of 18', function() {
		assert(detectNetwork('622362819163072826') === 'China UnionPay');
	});

	it('has a prefix of 622363 and a length of 18', function() {
		assert(detectNetwork('622363852741364450') === 'China UnionPay');
	});

	it('has a prefix of 622364 and a length of 18', function() {
		assert(detectNetwork('622364626905054846') === 'China UnionPay');
	});

	it('has a prefix of 622365 and a length of 18', function() {
		assert(detectNetwork('622365238504004048') === 'China UnionPay');
	});

	it('has a prefix of 622366 and a length of 18', function() {
		assert(detectNetwork('622366801296960029') === 'China UnionPay');
	});

	it('has a prefix of 622367 and a length of 18', function() {
		assert(detectNetwork('622367951457373379') === 'China UnionPay');
	});

	it('has a prefix of 622368 and a length of 18', function() {
		assert(detectNetwork('622368432234363387') === 'China UnionPay');
	});

	it('has a prefix of 622369 and a length of 18', function() {
		assert(detectNetwork('622369043815127732') === 'China UnionPay');
	});

	it('has a prefix of 622370 and a length of 18', function() {
		assert(detectNetwork('622370366383638358') === 'China UnionPay');
	});

	it('has a prefix of 622371 and a length of 18', function() {
		assert(detectNetwork('622371865057875454') === 'China UnionPay');
	});

	it('has a prefix of 622372 and a length of 18', function() {
		assert(detectNetwork('622372278653756031') === 'China UnionPay');
	});

	it('has a prefix of 622373 and a length of 18', function() {
		assert(detectNetwork('622373423335606232') === 'China UnionPay');
	});

	it('has a prefix of 622374 and a length of 18', function() {
		assert(detectNetwork('622374574659178691') === 'China UnionPay');
	});

	it('has a prefix of 622375 and a length of 18', function() {
		assert(detectNetwork('622375923500381335') === 'China UnionPay');
	});

	it('has a prefix of 622376 and a length of 18', function() {
		assert(detectNetwork('622376153366169845') === 'China UnionPay');
	});

	it('has a prefix of 622377 and a length of 18', function() {
		assert(detectNetwork('622377978527160983') === 'China UnionPay');
	});

	it('has a prefix of 622378 and a length of 18', function() {
		assert(detectNetwork('622378292099815994') === 'China UnionPay');
	});

	it('has a prefix of 622379 and a length of 18', function() {
		assert(detectNetwork('622379163972073260') === 'China UnionPay');
	});

	it('has a prefix of 622380 and a length of 18', function() {
		assert(detectNetwork('622380214361823675') === 'China UnionPay');
	});

	it('has a prefix of 622381 and a length of 18', function() {
		assert(detectNetwork('622381430064166329') === 'China UnionPay');
	});

	it('has a prefix of 622382 and a length of 18', function() {
		assert(detectNetwork('622382294193952003') === 'China UnionPay');
	});

	it('has a prefix of 622383 and a length of 18', function() {
		assert(detectNetwork('622383844659538085') === 'China UnionPay');
	});

	it('has a prefix of 622384 and a length of 18', function() {
		assert(detectNetwork('622384775696944143') === 'China UnionPay');
	});

	it('has a prefix of 622385 and a length of 18', function() {
		assert(detectNetwork('622385626269988145') === 'China UnionPay');
	});

	it('has a prefix of 622386 and a length of 18', function() {
		assert(detectNetwork('622386195321420035') === 'China UnionPay');
	});

	it('has a prefix of 622387 and a length of 18', function() {
		assert(detectNetwork('622387599885551569') === 'China UnionPay');
	});

	it('has a prefix of 622388 and a length of 18', function() {
		assert(detectNetwork('622388255066136892') === 'China UnionPay');
	});

	it('has a prefix of 622389 and a length of 18', function() {
		assert(detectNetwork('622389589204374755') === 'China UnionPay');
	});

	it('has a prefix of 622390 and a length of 18', function() {
		assert(detectNetwork('622390830176015682') === 'China UnionPay');
	});

	it('has a prefix of 622391 and a length of 18', function() {
		assert(detectNetwork('622391358680443021') === 'China UnionPay');
	});

	it('has a prefix of 622392 and a length of 18', function() {
		assert(detectNetwork('622392947154034301') === 'China UnionPay');
	});

	it('has a prefix of 622393 and a length of 18', function() {
		assert(detectNetwork('622393474473872413') === 'China UnionPay');
	});

	it('has a prefix of 622394 and a length of 18', function() {
		assert(detectNetwork('622394444353340240') === 'China UnionPay');
	});

	it('has a prefix of 622395 and a length of 18', function() {
		assert(detectNetwork('622395718227910389') === 'China UnionPay');
	});

	it('has a prefix of 622396 and a length of 18', function() {
		assert(detectNetwork('622396653583876959') === 'China UnionPay');
	});

	it('has a prefix of 622397 and a length of 18', function() {
		assert(detectNetwork('622397108346902320') === 'China UnionPay');
	});

	it('has a prefix of 622398 and a length of 18', function() {
		assert(detectNetwork('622398800257547343') === 'China UnionPay');
	});

	it('has a prefix of 622399 and a length of 18', function() {
		assert(detectNetwork('622399092324256952') === 'China UnionPay');
	});

	it('has a prefix of 622400 and a length of 18', function() {
		assert(detectNetwork('622400600367076923') === 'China UnionPay');
	});

	it('has a prefix of 622401 and a length of 18', function() {
		assert(detectNetwork('622401185190452326') === 'China UnionPay');
	});

	it('has a prefix of 622402 and a length of 18', function() {
		assert(detectNetwork('622402055101110997') === 'China UnionPay');
	});

	it('has a prefix of 622403 and a length of 18', function() {
		assert(detectNetwork('622403195637087867') === 'China UnionPay');
	});

	it('has a prefix of 622404 and a length of 18', function() {
		assert(detectNetwork('622404888217543300') === 'China UnionPay');
	});

	it('has a prefix of 622405 and a length of 18', function() {
		assert(detectNetwork('622405990411889148') === 'China UnionPay');
	});

	it('has a prefix of 622406 and a length of 18', function() {
		assert(detectNetwork('622406884319012051') === 'China UnionPay');
	});

	it('has a prefix of 622407 and a length of 18', function() {
		assert(detectNetwork('622407713126521357') === 'China UnionPay');
	});

	it('has a prefix of 622408 and a length of 18', function() {
		assert(detectNetwork('622408755149683857') === 'China UnionPay');
	});

	it('has a prefix of 622409 and a length of 18', function() {
		assert(detectNetwork('622409870657736121') === 'China UnionPay');
	});

	it('has a prefix of 622410 and a length of 18', function() {
		assert(detectNetwork('622410423327437208') === 'China UnionPay');
	});

	it('has a prefix of 622411 and a length of 18', function() {
		assert(detectNetwork('622411861414998676') === 'China UnionPay');
	});

	it('has a prefix of 622412 and a length of 18', function() {
		assert(detectNetwork('622412138015001432') === 'China UnionPay');
	});

	it('has a prefix of 622413 and a length of 18', function() {
		assert(detectNetwork('622413930750991689') === 'China UnionPay');
	});

	it('has a prefix of 622414 and a length of 18', function() {
		assert(detectNetwork('622414958729058642') === 'China UnionPay');
	});

	it('has a prefix of 622415 and a length of 18', function() {
		assert(detectNetwork('622415007147344036') === 'China UnionPay');
	});

	it('has a prefix of 622416 and a length of 18', function() {
		assert(detectNetwork('622416035634978986') === 'China UnionPay');
	});

	it('has a prefix of 622417 and a length of 18', function() {
		assert(detectNetwork('622417271922395324') === 'China UnionPay');
	});

	it('has a prefix of 622418 and a length of 18', function() {
		assert(detectNetwork('622418366466931371') === 'China UnionPay');
	});

	it('has a prefix of 622419 and a length of 18', function() {
		assert(detectNetwork('622419151823213763') === 'China UnionPay');
	});

	it('has a prefix of 622420 and a length of 18', function() {
		assert(detectNetwork('622420265715403841') === 'China UnionPay');
	});

	it('has a prefix of 622421 and a length of 18', function() {
		assert(detectNetwork('622421789015110233') === 'China UnionPay');
	});

	it('has a prefix of 622422 and a length of 18', function() {
		assert(detectNetwork('622422929273609580') === 'China UnionPay');
	});

	it('has a prefix of 622423 and a length of 18', function() {
		assert(detectNetwork('622423563336547967') === 'China UnionPay');
	});

	it('has a prefix of 622424 and a length of 18', function() {
		assert(detectNetwork('622424077662259035') === 'China UnionPay');
	});

	it('has a prefix of 622425 and a length of 18', function() {
		assert(detectNetwork('622425698141183566') === 'China UnionPay');
	});

	it('has a prefix of 622426 and a length of 18', function() {
		assert(detectNetwork('622426587905510188') === 'China UnionPay');
	});

	it('has a prefix of 622427 and a length of 18', function() {
		assert(detectNetwork('622427978061701244') === 'China UnionPay');
	});

	it('has a prefix of 622428 and a length of 18', function() {
		assert(detectNetwork('622428012231709039') === 'China UnionPay');
	});

	it('has a prefix of 622429 and a length of 18', function() {
		assert(detectNetwork('622429334096460657') === 'China UnionPay');
	});

	it('has a prefix of 622430 and a length of 18', function() {
		assert(detectNetwork('622430335141098706') === 'China UnionPay');
	});

	it('has a prefix of 622431 and a length of 18', function() {
		assert(detectNetwork('622431811287003993') === 'China UnionPay');
	});

	it('has a prefix of 622432 and a length of 18', function() {
		assert(detectNetwork('622432956309886726') === 'China UnionPay');
	});

	it('has a prefix of 622433 and a length of 18', function() {
		assert(detectNetwork('622433712708902880') === 'China UnionPay');
	});

	it('has a prefix of 622434 and a length of 18', function() {
		assert(detectNetwork('622434091093221052') === 'China UnionPay');
	});

	it('has a prefix of 622435 and a length of 18', function() {
		assert(detectNetwork('622435233365723966') === 'China UnionPay');
	});

	it('has a prefix of 622436 and a length of 18', function() {
		assert(detectNetwork('622436707897583814') === 'China UnionPay');
	});

	it('has a prefix of 622437 and a length of 18', function() {
		assert(detectNetwork('622437829312932549') === 'China UnionPay');
	});

	it('has a prefix of 622438 and a length of 18', function() {
		assert(detectNetwork('622438099195665129') === 'China UnionPay');
	});

	it('has a prefix of 622439 and a length of 18', function() {
		assert(detectNetwork('622439148118091603') === 'China UnionPay');
	});

	it('has a prefix of 622440 and a length of 18', function() {
		assert(detectNetwork('622440259042379056') === 'China UnionPay');
	});

	it('has a prefix of 622441 and a length of 18', function() {
		assert(detectNetwork('622441796744608827') === 'China UnionPay');
	});

	it('has a prefix of 622442 and a length of 18', function() {
		assert(detectNetwork('622442651033005912') === 'China UnionPay');
	});

	it('has a prefix of 622443 and a length of 18', function() {
		assert(detectNetwork('622443049716568791') === 'China UnionPay');
	});

	it('has a prefix of 622444 and a length of 18', function() {
		assert(detectNetwork('622444611005815484') === 'China UnionPay');
	});

	it('has a prefix of 622445 and a length of 18', function() {
		assert(detectNetwork('622445726650624382') === 'China UnionPay');
	});

	it('has a prefix of 622446 and a length of 18', function() {
		assert(detectNetwork('622446042965537196') === 'China UnionPay');
	});

	it('has a prefix of 622447 and a length of 18', function() {
		assert(detectNetwork('622447793766656813') === 'China UnionPay');
	});

	it('has a prefix of 622448 and a length of 18', function() {
		assert(detectNetwork('622448806882781876') === 'China UnionPay');
	});

	it('has a prefix of 622449 and a length of 18', function() {
		assert(detectNetwork('622449868652861729') === 'China UnionPay');
	});

	it('has a prefix of 622450 and a length of 18', function() {
		assert(detectNetwork('622450617367566379') === 'China UnionPay');
	});

	it('has a prefix of 622451 and a length of 18', function() {
		assert(detectNetwork('622451693609493924') === 'China UnionPay');
	});

	it('has a prefix of 622452 and a length of 18', function() {
		assert(detectNetwork('622452210199855645') === 'China UnionPay');
	});

	it('has a prefix of 622453 and a length of 18', function() {
		assert(detectNetwork('622453701166875245') === 'China UnionPay');
	});

	it('has a prefix of 622454 and a length of 18', function() {
		assert(detectNetwork('622454378661505800') === 'China UnionPay');
	});

	it('has a prefix of 622455 and a length of 18', function() {
		assert(detectNetwork('622455383216855950') === 'China UnionPay');
	});

	it('has a prefix of 622456 and a length of 18', function() {
		assert(detectNetwork('622456391040288324') === 'China UnionPay');
	});

	it('has a prefix of 622457 and a length of 18', function() {
		assert(detectNetwork('622457237852942735') === 'China UnionPay');
	});

	it('has a prefix of 622458 and a length of 18', function() {
		assert(detectNetwork('622458627405023686') === 'China UnionPay');
	});

	it('has a prefix of 622459 and a length of 18', function() {
		assert(detectNetwork('622459656002658319') === 'China UnionPay');
	});

	it('has a prefix of 622460 and a length of 18', function() {
		assert(detectNetwork('622460453927032437') === 'China UnionPay');
	});

	it('has a prefix of 622461 and a length of 18', function() {
		assert(detectNetwork('622461615605855944') === 'China UnionPay');
	});

	it('has a prefix of 622462 and a length of 18', function() {
		assert(detectNetwork('622462372828147141') === 'China UnionPay');
	});

	it('has a prefix of 622463 and a length of 18', function() {
		assert(detectNetwork('622463810301536677') === 'China UnionPay');
	});

	it('has a prefix of 622464 and a length of 18', function() {
		assert(detectNetwork('622464103789355592') === 'China UnionPay');
	});

	it('has a prefix of 622465 and a length of 18', function() {
		assert(detectNetwork('622465492265617800') === 'China UnionPay');
	});

	it('has a prefix of 622466 and a length of 18', function() {
		assert(detectNetwork('622466629605056722') === 'China UnionPay');
	});

	it('has a prefix of 622467 and a length of 18', function() {
		assert(detectNetwork('622467075059313006') === 'China UnionPay');
	});

	it('has a prefix of 622468 and a length of 18', function() {
		assert(detectNetwork('622468378142840913') === 'China UnionPay');
	});

	it('has a prefix of 622469 and a length of 18', function() {
		assert(detectNetwork('622469111130337740') === 'China UnionPay');
	});

	it('has a prefix of 622470 and a length of 18', function() {
		assert(detectNetwork('622470594577789024') === 'China UnionPay');
	});

	it('has a prefix of 622471 and a length of 18', function() {
		assert(detectNetwork('622471417142382580') === 'China UnionPay');
	});

	it('has a prefix of 622472 and a length of 18', function() {
		assert(detectNetwork('622472110079386712') === 'China UnionPay');
	});

	it('has a prefix of 622473 and a length of 18', function() {
		assert(detectNetwork('622473172637606713') === 'China UnionPay');
	});

	it('has a prefix of 622474 and a length of 18', function() {
		assert(detectNetwork('622474159916879518') === 'China UnionPay');
	});

	it('has a prefix of 622475 and a length of 18', function() {
		assert(detectNetwork('622475913854472584') === 'China UnionPay');
	});

	it('has a prefix of 622476 and a length of 18', function() {
		assert(detectNetwork('622476770578337648') === 'China UnionPay');
	});

	it('has a prefix of 622477 and a length of 18', function() {
		assert(detectNetwork('622477218272965175') === 'China UnionPay');
	});

	it('has a prefix of 622478 and a length of 18', function() {
		assert(detectNetwork('622478017686173229') === 'China UnionPay');
	});

	it('has a prefix of 622479 and a length of 18', function() {
		assert(detectNetwork('622479841013140515') === 'China UnionPay');
	});

	it('has a prefix of 622480 and a length of 18', function() {
		assert(detectNetwork('622480262720130340') === 'China UnionPay');
	});

	it('has a prefix of 622481 and a length of 18', function() {
		assert(detectNetwork('622481860650455250') === 'China UnionPay');
	});

	it('has a prefix of 622482 and a length of 18', function() {
		assert(detectNetwork('622482424254071210') === 'China UnionPay');
	});

	it('has a prefix of 622483 and a length of 18', function() {
		assert(detectNetwork('622483086652362792') === 'China UnionPay');
	});

	it('has a prefix of 622484 and a length of 18', function() {
		assert(detectNetwork('622484407413233010') === 'China UnionPay');
	});

	it('has a prefix of 622485 and a length of 18', function() {
		assert(detectNetwork('622485213741109942') === 'China UnionPay');
	});

	it('has a prefix of 622486 and a length of 18', function() {
		assert(detectNetwork('622486132560996043') === 'China UnionPay');
	});

	it('has a prefix of 622487 and a length of 18', function() {
		assert(detectNetwork('622487477508490212') === 'China UnionPay');
	});

	it('has a prefix of 622488 and a length of 18', function() {
		assert(detectNetwork('622488029905148645') === 'China UnionPay');
	});

	it('has a prefix of 622489 and a length of 18', function() {
		assert(detectNetwork('622489627442897372') === 'China UnionPay');
	});

	it('has a prefix of 622490 and a length of 18', function() {
		assert(detectNetwork('622490645014170461') === 'China UnionPay');
	});

	it('has a prefix of 622491 and a length of 18', function() {
		assert(detectNetwork('622491021475918875') === 'China UnionPay');
	});

	it('has a prefix of 622492 and a length of 18', function() {
		assert(detectNetwork('622492883847746772') === 'China UnionPay');
	});

	it('has a prefix of 622493 and a length of 18', function() {
		assert(detectNetwork('622493126584846979') === 'China UnionPay');
	});

	it('has a prefix of 622494 and a length of 18', function() {
		assert(detectNetwork('622494711447398896') === 'China UnionPay');
	});

	it('has a prefix of 622495 and a length of 18', function() {
		assert(detectNetwork('622495473277582561') === 'China UnionPay');
	});

	it('has a prefix of 622496 and a length of 18', function() {
		assert(detectNetwork('622496029920091356') === 'China UnionPay');
	});

	it('has a prefix of 622497 and a length of 18', function() {
		assert(detectNetwork('622497160028450511') === 'China UnionPay');
	});

	it('has a prefix of 622498 and a length of 18', function() {
		assert(detectNetwork('622498016208591908') === 'China UnionPay');
	});

	it('has a prefix of 622499 and a length of 18', function() {
		assert(detectNetwork('622499472806839063') === 'China UnionPay');
	});

	it('has a prefix of 622500 and a length of 18', function() {
		assert(detectNetwork('622500507949167311') === 'China UnionPay');
	});

	it('has a prefix of 622501 and a length of 18', function() {
		assert(detectNetwork('622501983111101136') === 'China UnionPay');
	});

	it('has a prefix of 622502 and a length of 18', function() {
		assert(detectNetwork('622502772742207537') === 'China UnionPay');
	});

	it('has a prefix of 622503 and a length of 18', function() {
		assert(detectNetwork('622503452571688433') === 'China UnionPay');
	});

	it('has a prefix of 622504 and a length of 18', function() {
		assert(detectNetwork('622504509144087800') === 'China UnionPay');
	});

	it('has a prefix of 622505 and a length of 18', function() {
		assert(detectNetwork('622505528223556528') === 'China UnionPay');
	});

	it('has a prefix of 622506 and a length of 18', function() {
		assert(detectNetwork('622506553934782086') === 'China UnionPay');
	});

	it('has a prefix of 622507 and a length of 18', function() {
		assert(detectNetwork('622507160361238322') === 'China UnionPay');
	});

	it('has a prefix of 622508 and a length of 18', function() {
		assert(detectNetwork('622508782265054210') === 'China UnionPay');
	});

	it('has a prefix of 622509 and a length of 18', function() {
		assert(detectNetwork('622509213890753167') === 'China UnionPay');
	});

	it('has a prefix of 622510 and a length of 18', function() {
		assert(detectNetwork('622510834758617444') === 'China UnionPay');
	});

	it('has a prefix of 622511 and a length of 18', function() {
		assert(detectNetwork('622511546738460439') === 'China UnionPay');
	});

	it('has a prefix of 622512 and a length of 18', function() {
		assert(detectNetwork('622512118215876126') === 'China UnionPay');
	});

	it('has a prefix of 622513 and a length of 18', function() {
		assert(detectNetwork('622513725670252129') === 'China UnionPay');
	});

	it('has a prefix of 622514 and a length of 18', function() {
		assert(detectNetwork('622514870283455263') === 'China UnionPay');
	});

	it('has a prefix of 622515 and a length of 18', function() {
		assert(detectNetwork('622515935225618371') === 'China UnionPay');
	});

	it('has a prefix of 622516 and a length of 18', function() {
		assert(detectNetwork('622516292455138966') === 'China UnionPay');
	});

	it('has a prefix of 622517 and a length of 18', function() {
		assert(detectNetwork('622517141662402854') === 'China UnionPay');
	});

	it('has a prefix of 622518 and a length of 18', function() {
		assert(detectNetwork('622518540702562080') === 'China UnionPay');
	});

	it('has a prefix of 622519 and a length of 18', function() {
		assert(detectNetwork('622519847519245067') === 'China UnionPay');
	});

	it('has a prefix of 622520 and a length of 18', function() {
		assert(detectNetwork('622520261092087760') === 'China UnionPay');
	});

	it('has a prefix of 622521 and a length of 18', function() {
		assert(detectNetwork('622521469340856066') === 'China UnionPay');
	});

	it('has a prefix of 622522 and a length of 18', function() {
		assert(detectNetwork('622522292841046263') === 'China UnionPay');
	});

	it('has a prefix of 622523 and a length of 18', function() {
		assert(detectNetwork('622523501556529669') === 'China UnionPay');
	});

	it('has a prefix of 622524 and a length of 18', function() {
		assert(detectNetwork('622524801857263777') === 'China UnionPay');
	});

	it('has a prefix of 622525 and a length of 18', function() {
		assert(detectNetwork('622525616835507368') === 'China UnionPay');
	});

	it('has a prefix of 622526 and a length of 18', function() {
		assert(detectNetwork('622526025716884988') === 'China UnionPay');
	});

	it('has a prefix of 622527 and a length of 18', function() {
		assert(detectNetwork('622527053853942771') === 'China UnionPay');
	});

	it('has a prefix of 622528 and a length of 18', function() {
		assert(detectNetwork('622528922181338602') === 'China UnionPay');
	});

	it('has a prefix of 622529 and a length of 18', function() {
		assert(detectNetwork('622529864414423000') === 'China UnionPay');
	});

	it('has a prefix of 622530 and a length of 18', function() {
		assert(detectNetwork('622530847943502824') === 'China UnionPay');
	});

	it('has a prefix of 622531 and a length of 18', function() {
		assert(detectNetwork('622531984998489881') === 'China UnionPay');
	});

	it('has a prefix of 622532 and a length of 18', function() {
		assert(detectNetwork('622532389551568431') === 'China UnionPay');
	});

	it('has a prefix of 622533 and a length of 18', function() {
		assert(detectNetwork('622533812875242238') === 'China UnionPay');
	});

	it('has a prefix of 622534 and a length of 18', function() {
		assert(detectNetwork('622534944873834471') === 'China UnionPay');
	});

	it('has a prefix of 622535 and a length of 18', function() {
		assert(detectNetwork('622535097633516683') === 'China UnionPay');
	});

	it('has a prefix of 622536 and a length of 18', function() {
		assert(detectNetwork('622536071436705886') === 'China UnionPay');
	});

	it('has a prefix of 622537 and a length of 18', function() {
		assert(detectNetwork('622537386263119045') === 'China UnionPay');
	});

	it('has a prefix of 622538 and a length of 18', function() {
		assert(detectNetwork('622538249268833481') === 'China UnionPay');
	});

	it('has a prefix of 622539 and a length of 18', function() {
		assert(detectNetwork('622539735724990668') === 'China UnionPay');
	});

	it('has a prefix of 622540 and a length of 18', function() {
		assert(detectNetwork('622540574994904660') === 'China UnionPay');
	});

	it('has a prefix of 622541 and a length of 18', function() {
		assert(detectNetwork('622541921760271435') === 'China UnionPay');
	});

	it('has a prefix of 622542 and a length of 18', function() {
		assert(detectNetwork('622542132825597383') === 'China UnionPay');
	});

	it('has a prefix of 622543 and a length of 18', function() {
		assert(detectNetwork('622543199471547156') === 'China UnionPay');
	});

	it('has a prefix of 622544 and a length of 18', function() {
		assert(detectNetwork('622544586153801670') === 'China UnionPay');
	});

	it('has a prefix of 622545 and a length of 18', function() {
		assert(detectNetwork('622545744688613795') === 'China UnionPay');
	});

	it('has a prefix of 622546 and a length of 18', function() {
		assert(detectNetwork('622546055563059357') === 'China UnionPay');
	});

	it('has a prefix of 622547 and a length of 18', function() {
		assert(detectNetwork('622547196403211038') === 'China UnionPay');
	});

	it('has a prefix of 622548 and a length of 18', function() {
		assert(detectNetwork('622548541962850147') === 'China UnionPay');
	});

	it('has a prefix of 622549 and a length of 18', function() {
		assert(detectNetwork('622549682867839588') === 'China UnionPay');
	});

	it('has a prefix of 622550 and a length of 18', function() {
		assert(detectNetwork('622550795360496841') === 'China UnionPay');
	});

	it('has a prefix of 622551 and a length of 18', function() {
		assert(detectNetwork('622551789201605300') === 'China UnionPay');
	});

	it('has a prefix of 622552 and a length of 18', function() {
		assert(detectNetwork('622552793411650194') === 'China UnionPay');
	});

	it('has a prefix of 622553 and a length of 18', function() {
		assert(detectNetwork('622553593634724907') === 'China UnionPay');
	});

	it('has a prefix of 622554 and a length of 18', function() {
		assert(detectNetwork('622554430650009106') === 'China UnionPay');
	});

	it('has a prefix of 622555 and a length of 18', function() {
		assert(detectNetwork('622555230908910077') === 'China UnionPay');
	});

	it('has a prefix of 622556 and a length of 18', function() {
		assert(detectNetwork('622556361604478492') === 'China UnionPay');
	});

	it('has a prefix of 622557 and a length of 18', function() {
		assert(detectNetwork('622557394723169477') === 'China UnionPay');
	});

	it('has a prefix of 622558 and a length of 18', function() {
		assert(detectNetwork('622558316453958127') === 'China UnionPay');
	});

	it('has a prefix of 622559 and a length of 18', function() {
		assert(detectNetwork('622559245517779965') === 'China UnionPay');
	});

	it('has a prefix of 622560 and a length of 18', function() {
		assert(detectNetwork('622560866657812001') === 'China UnionPay');
	});

	it('has a prefix of 622561 and a length of 18', function() {
		assert(detectNetwork('622561695473443197') === 'China UnionPay');
	});

	it('has a prefix of 622562 and a length of 18', function() {
		assert(detectNetwork('622562634443874258') === 'China UnionPay');
	});

	it('has a prefix of 622563 and a length of 18', function() {
		assert(detectNetwork('622563228645331286') === 'China UnionPay');
	});

	it('has a prefix of 622564 and a length of 18', function() {
		assert(detectNetwork('622564293474369493') === 'China UnionPay');
	});

	it('has a prefix of 622565 and a length of 18', function() {
		assert(detectNetwork('622565826834619866') === 'China UnionPay');
	});

	it('has a prefix of 622566 and a length of 18', function() {
		assert(detectNetwork('622566914693958776') === 'China UnionPay');
	});

	it('has a prefix of 622567 and a length of 18', function() {
		assert(detectNetwork('622567378009837743') === 'China UnionPay');
	});

	it('has a prefix of 622568 and a length of 18', function() {
		assert(detectNetwork('622568703311238328') === 'China UnionPay');
	});

	it('has a prefix of 622569 and a length of 18', function() {
		assert(detectNetwork('622569440885384357') === 'China UnionPay');
	});

	it('has a prefix of 622570 and a length of 18', function() {
		assert(detectNetwork('622570312782550681') === 'China UnionPay');
	});

	it('has a prefix of 622571 and a length of 18', function() {
		assert(detectNetwork('622571841965614846') === 'China UnionPay');
	});

	it('has a prefix of 622572 and a length of 18', function() {
		assert(detectNetwork('622572294277534975') === 'China UnionPay');
	});

	it('has a prefix of 622573 and a length of 18', function() {
		assert(detectNetwork('622573454413043162') === 'China UnionPay');
	});

	it('has a prefix of 622574 and a length of 18', function() {
		assert(detectNetwork('622574517935166797') === 'China UnionPay');
	});

	it('has a prefix of 622575 and a length of 18', function() {
		assert(detectNetwork('622575007027322389') === 'China UnionPay');
	});

	it('has a prefix of 622576 and a length of 18', function() {
		assert(detectNetwork('622576067530484394') === 'China UnionPay');
	});

	it('has a prefix of 622577 and a length of 18', function() {
		assert(detectNetwork('622577869984047657') === 'China UnionPay');
	});

	it('has a prefix of 622578 and a length of 18', function() {
		assert(detectNetwork('622578005147119535') === 'China UnionPay');
	});

	it('has a prefix of 622579 and a length of 18', function() {
		assert(detectNetwork('622579688797561086') === 'China UnionPay');
	});

	it('has a prefix of 622580 and a length of 18', function() {
		assert(detectNetwork('622580610702884564') === 'China UnionPay');
	});

	it('has a prefix of 622581 and a length of 18', function() {
		assert(detectNetwork('622581850556076038') === 'China UnionPay');
	});

	it('has a prefix of 622582 and a length of 18', function() {
		assert(detectNetwork('622582493986533867') === 'China UnionPay');
	});

	it('has a prefix of 622583 and a length of 18', function() {
		assert(detectNetwork('622583366034950061') === 'China UnionPay');
	});

	it('has a prefix of 622584 and a length of 18', function() {
		assert(detectNetwork('622584131399547617') === 'China UnionPay');
	});

	it('has a prefix of 622585 and a length of 18', function() {
		assert(detectNetwork('622585956716378792') === 'China UnionPay');
	});

	it('has a prefix of 622586 and a length of 18', function() {
		assert(detectNetwork('622586018300299394') === 'China UnionPay');
	});

	it('has a prefix of 622587 and a length of 18', function() {
		assert(detectNetwork('622587174534121880') === 'China UnionPay');
	});

	it('has a prefix of 622588 and a length of 18', function() {
		assert(detectNetwork('622588551072294375') === 'China UnionPay');
	});

	it('has a prefix of 622589 and a length of 18', function() {
		assert(detectNetwork('622589776052809589') === 'China UnionPay');
	});

	it('has a prefix of 622590 and a length of 18', function() {
		assert(detectNetwork('622590176313171161') === 'China UnionPay');
	});

	it('has a prefix of 622591 and a length of 18', function() {
		assert(detectNetwork('622591388152316325') === 'China UnionPay');
	});

	it('has a prefix of 622592 and a length of 18', function() {
		assert(detectNetwork('622592252296105109') === 'China UnionPay');
	});

	it('has a prefix of 622593 and a length of 18', function() {
		assert(detectNetwork('622593826199330063') === 'China UnionPay');
	});

	it('has a prefix of 622594 and a length of 18', function() {
		assert(detectNetwork('622594549145918038') === 'China UnionPay');
	});

	it('has a prefix of 622595 and a length of 18', function() {
		assert(detectNetwork('622595836292831240') === 'China UnionPay');
	});

	it('has a prefix of 622596 and a length of 18', function() {
		assert(detectNetwork('622596122351695512') === 'China UnionPay');
	});

	it('has a prefix of 622597 and a length of 18', function() {
		assert(detectNetwork('622597910263776882') === 'China UnionPay');
	});

	it('has a prefix of 622598 and a length of 18', function() {
		assert(detectNetwork('622598732278722119') === 'China UnionPay');
	});

	it('has a prefix of 622599 and a length of 18', function() {
		assert(detectNetwork('622599396810262653') === 'China UnionPay');
	});

	it('has a prefix of 622600 and a length of 18', function() {
		assert(detectNetwork('622600699515393488') === 'China UnionPay');
	});

	it('has a prefix of 622601 and a length of 18', function() {
		assert(detectNetwork('622601623636238989') === 'China UnionPay');
	});

	it('has a prefix of 622602 and a length of 18', function() {
		assert(detectNetwork('622602479730631094') === 'China UnionPay');
	});

	it('has a prefix of 622603 and a length of 18', function() {
		assert(detectNetwork('622603359268830640') === 'China UnionPay');
	});

	it('has a prefix of 622604 and a length of 18', function() {
		assert(detectNetwork('622604418855346318') === 'China UnionPay');
	});

	it('has a prefix of 622605 and a length of 18', function() {
		assert(detectNetwork('622605784919494323') === 'China UnionPay');
	});

	it('has a prefix of 622606 and a length of 18', function() {
		assert(detectNetwork('622606582770349830') === 'China UnionPay');
	});

	it('has a prefix of 622607 and a length of 18', function() {
		assert(detectNetwork('622607534159468432') === 'China UnionPay');
	});

	it('has a prefix of 622608 and a length of 18', function() {
		assert(detectNetwork('622608010277449065') === 'China UnionPay');
	});

	it('has a prefix of 622609 and a length of 18', function() {
		assert(detectNetwork('622609742098825660') === 'China UnionPay');
	});

	it('has a prefix of 622610 and a length of 18', function() {
		assert(detectNetwork('622610180690596466') === 'China UnionPay');
	});

	it('has a prefix of 622611 and a length of 18', function() {
		assert(detectNetwork('622611755483451450') === 'China UnionPay');
	});

	it('has a prefix of 622612 and a length of 18', function() {
		assert(detectNetwork('622612630591097611') === 'China UnionPay');
	});

	it('has a prefix of 622613 and a length of 18', function() {
		assert(detectNetwork('622613095841527199') === 'China UnionPay');
	});

	it('has a prefix of 622614 and a length of 18', function() {
		assert(detectNetwork('622614998247801259') === 'China UnionPay');
	});

	it('has a prefix of 622615 and a length of 18', function() {
		assert(detectNetwork('622615473357374259') === 'China UnionPay');
	});

	it('has a prefix of 622616 and a length of 18', function() {
		assert(detectNetwork('622616066944222778') === 'China UnionPay');
	});

	it('has a prefix of 622617 and a length of 18', function() {
		assert(detectNetwork('622617333958431333') === 'China UnionPay');
	});

	it('has a prefix of 622618 and a length of 18', function() {
		assert(detectNetwork('622618733840131639') === 'China UnionPay');
	});

	it('has a prefix of 622619 and a length of 18', function() {
		assert(detectNetwork('622619134091179062') === 'China UnionPay');
	});

	it('has a prefix of 622620 and a length of 18', function() {
		assert(detectNetwork('622620962195131593') === 'China UnionPay');
	});

	it('has a prefix of 622621 and a length of 18', function() {
		assert(detectNetwork('622621246515331864') === 'China UnionPay');
	});

	it('has a prefix of 622622 and a length of 18', function() {
		assert(detectNetwork('622622916171732637') === 'China UnionPay');
	});

	it('has a prefix of 622623 and a length of 18', function() {
		assert(detectNetwork('622623743181001487') === 'China UnionPay');
	});

	it('has a prefix of 622624 and a length of 18', function() {
		assert(detectNetwork('622624411363437808') === 'China UnionPay');
	});

	it('has a prefix of 622625 and a length of 18', function() {
		assert(detectNetwork('622625850784586408') === 'China UnionPay');
	});

	it('has a prefix of 622626 and a length of 18', function() {
		assert(detectNetwork('622626990353906463') === 'China UnionPay');
	});

	it('has a prefix of 622627 and a length of 18', function() {
		assert(detectNetwork('622627737592491594') === 'China UnionPay');
	});

	it('has a prefix of 622628 and a length of 18', function() {
		assert(detectNetwork('622628657966954995') === 'China UnionPay');
	});

	it('has a prefix of 622629 and a length of 18', function() {
		assert(detectNetwork('622629049047882274') === 'China UnionPay');
	});

	it('has a prefix of 622630 and a length of 18', function() {
		assert(detectNetwork('622630723593929779') === 'China UnionPay');
	});

	it('has a prefix of 622631 and a length of 18', function() {
		assert(detectNetwork('622631573140097771') === 'China UnionPay');
	});

	it('has a prefix of 622632 and a length of 18', function() {
		assert(detectNetwork('622632015260063017') === 'China UnionPay');
	});

	it('has a prefix of 622633 and a length of 18', function() {
		assert(detectNetwork('622633827776604749') === 'China UnionPay');
	});

	it('has a prefix of 622634 and a length of 18', function() {
		assert(detectNetwork('622634932689249281') === 'China UnionPay');
	});

	it('has a prefix of 622635 and a length of 18', function() {
		assert(detectNetwork('622635200226287969') === 'China UnionPay');
	});

	it('has a prefix of 622636 and a length of 18', function() {
		assert(detectNetwork('622636084311248549') === 'China UnionPay');
	});

	it('has a prefix of 622637 and a length of 18', function() {
		assert(detectNetwork('622637326692651027') === 'China UnionPay');
	});

	it('has a prefix of 622638 and a length of 18', function() {
		assert(detectNetwork('622638023347098991') === 'China UnionPay');
	});

	it('has a prefix of 622639 and a length of 18', function() {
		assert(detectNetwork('622639088728970485') === 'China UnionPay');
	});

	it('has a prefix of 622640 and a length of 18', function() {
		assert(detectNetwork('622640301529266797') === 'China UnionPay');
	});

	it('has a prefix of 622641 and a length of 18', function() {
		assert(detectNetwork('622641251316361156') === 'China UnionPay');
	});

	it('has a prefix of 622642 and a length of 18', function() {
		assert(detectNetwork('622642947014973090') === 'China UnionPay');
	});

	it('has a prefix of 622643 and a length of 18', function() {
		assert(detectNetwork('622643984663213775') === 'China UnionPay');
	});

	it('has a prefix of 622644 and a length of 18', function() {
		assert(detectNetwork('622644619917365178') === 'China UnionPay');
	});

	it('has a prefix of 622645 and a length of 18', function() {
		assert(detectNetwork('622645920569210142') === 'China UnionPay');
	});

	it('has a prefix of 622646 and a length of 18', function() {
		assert(detectNetwork('622646882093548679') === 'China UnionPay');
	});

	it('has a prefix of 622647 and a length of 18', function() {
		assert(detectNetwork('622647086631120694') === 'China UnionPay');
	});

	it('has a prefix of 622648 and a length of 18', function() {
		assert(detectNetwork('622648539673186400') === 'China UnionPay');
	});

	it('has a prefix of 622649 and a length of 18', function() {
		assert(detectNetwork('622649127690608608') === 'China UnionPay');
	});

	it('has a prefix of 622650 and a length of 18', function() {
		assert(detectNetwork('622650890972322695') === 'China UnionPay');
	});

	it('has a prefix of 622651 and a length of 18', function() {
		assert(detectNetwork('622651462683851262') === 'China UnionPay');
	});

	it('has a prefix of 622652 and a length of 18', function() {
		assert(detectNetwork('622652944962362026') === 'China UnionPay');
	});

	it('has a prefix of 622653 and a length of 18', function() {
		assert(detectNetwork('622653625503354926') === 'China UnionPay');
	});

	it('has a prefix of 622654 and a length of 18', function() {
		assert(detectNetwork('622654415564230082') === 'China UnionPay');
	});

	it('has a prefix of 622655 and a length of 18', function() {
		assert(detectNetwork('622655853814143555') === 'China UnionPay');
	});

	it('has a prefix of 622656 and a length of 18', function() {
		assert(detectNetwork('622656584002447083') === 'China UnionPay');
	});

	it('has a prefix of 622657 and a length of 18', function() {
		assert(detectNetwork('622657713498138378') === 'China UnionPay');
	});

	it('has a prefix of 622658 and a length of 18', function() {
		assert(detectNetwork('622658357640406491') === 'China UnionPay');
	});

	it('has a prefix of 622659 and a length of 18', function() {
		assert(detectNetwork('622659328669483505') === 'China UnionPay');
	});

	it('has a prefix of 622660 and a length of 18', function() {
		assert(detectNetwork('622660636303053700') === 'China UnionPay');
	});

	it('has a prefix of 622661 and a length of 18', function() {
		assert(detectNetwork('622661846400285964') === 'China UnionPay');
	});

	it('has a prefix of 622662 and a length of 18', function() {
		assert(detectNetwork('622662019952043774') === 'China UnionPay');
	});

	it('has a prefix of 622663 and a length of 18', function() {
		assert(detectNetwork('622663557712213466') === 'China UnionPay');
	});

	it('has a prefix of 622664 and a length of 18', function() {
		assert(detectNetwork('622664803659709491') === 'China UnionPay');
	});

	it('has a prefix of 622665 and a length of 18', function() {
		assert(detectNetwork('622665764235021054') === 'China UnionPay');
	});

	it('has a prefix of 622666 and a length of 18', function() {
		assert(detectNetwork('622666008439751817') === 'China UnionPay');
	});

	it('has a prefix of 622667 and a length of 18', function() {
		assert(detectNetwork('622667642102379850') === 'China UnionPay');
	});

	it('has a prefix of 622668 and a length of 18', function() {
		assert(detectNetwork('622668850249105323') === 'China UnionPay');
	});

	it('has a prefix of 622669 and a length of 18', function() {
		assert(detectNetwork('622669866139289762') === 'China UnionPay');
	});

	it('has a prefix of 622670 and a length of 18', function() {
		assert(detectNetwork('622670956027018682') === 'China UnionPay');
	});

	it('has a prefix of 622671 and a length of 18', function() {
		assert(detectNetwork('622671647866969453') === 'China UnionPay');
	});

	it('has a prefix of 622672 and a length of 18', function() {
		assert(detectNetwork('622672876732298138') === 'China UnionPay');
	});

	it('has a prefix of 622673 and a length of 18', function() {
		assert(detectNetwork('622673465955038702') === 'China UnionPay');
	});

	it('has a prefix of 622674 and a length of 18', function() {
		assert(detectNetwork('622674979944771849') === 'China UnionPay');
	});

	it('has a prefix of 622675 and a length of 18', function() {
		assert(detectNetwork('622675229627278440') === 'China UnionPay');
	});

	it('has a prefix of 622676 and a length of 18', function() {
		assert(detectNetwork('622676311690473251') === 'China UnionPay');
	});

	it('has a prefix of 622677 and a length of 18', function() {
		assert(detectNetwork('622677715681322656') === 'China UnionPay');
	});

	it('has a prefix of 622678 and a length of 18', function() {
		assert(detectNetwork('622678059229276754') === 'China UnionPay');
	});

	it('has a prefix of 622679 and a length of 18', function() {
		assert(detectNetwork('622679510389943040') === 'China UnionPay');
	});

	it('has a prefix of 622680 and a length of 18', function() {
		assert(detectNetwork('622680675607993379') === 'China UnionPay');
	});

	it('has a prefix of 622681 and a length of 18', function() {
		assert(detectNetwork('622681445999061404') === 'China UnionPay');
	});

	it('has a prefix of 622682 and a length of 18', function() {
		assert(detectNetwork('622682271774935607') === 'China UnionPay');
	});

	it('has a prefix of 622683 and a length of 18', function() {
		assert(detectNetwork('622683233057194873') === 'China UnionPay');
	});

	it('has a prefix of 622684 and a length of 18', function() {
		assert(detectNetwork('622684620190890320') === 'China UnionPay');
	});

	it('has a prefix of 622685 and a length of 18', function() {
		assert(detectNetwork('622685641063443392') === 'China UnionPay');
	});

	it('has a prefix of 622686 and a length of 18', function() {
		assert(detectNetwork('622686863483003537') === 'China UnionPay');
	});

	it('has a prefix of 622687 and a length of 18', function() {
		assert(detectNetwork('622687497001972075') === 'China UnionPay');
	});

	it('has a prefix of 622688 and a length of 18', function() {
		assert(detectNetwork('622688099745501587') === 'China UnionPay');
	});

	it('has a prefix of 622689 and a length of 18', function() {
		assert(detectNetwork('622689729109076831') === 'China UnionPay');
	});

	it('has a prefix of 622690 and a length of 18', function() {
		assert(detectNetwork('622690599102621896') === 'China UnionPay');
	});

	it('has a prefix of 622691 and a length of 18', function() {
		assert(detectNetwork('622691279363419268') === 'China UnionPay');
	});

	it('has a prefix of 622692 and a length of 18', function() {
		assert(detectNetwork('622692214394926948') === 'China UnionPay');
	});

	it('has a prefix of 622693 and a length of 18', function() {
		assert(detectNetwork('622693727676297757') === 'China UnionPay');
	});

	it('has a prefix of 622694 and a length of 18', function() {
		assert(detectNetwork('622694109810710610') === 'China UnionPay');
	});

	it('has a prefix of 622695 and a length of 18', function() {
		assert(detectNetwork('622695022663814707') === 'China UnionPay');
	});

	it('has a prefix of 622696 and a length of 18', function() {
		assert(detectNetwork('622696641704002314') === 'China UnionPay');
	});

	it('has a prefix of 622697 and a length of 18', function() {
		assert(detectNetwork('622697364832388032') === 'China UnionPay');
	});

	it('has a prefix of 622698 and a length of 18', function() {
		assert(detectNetwork('622698372604188403') === 'China UnionPay');
	});

	it('has a prefix of 622699 and a length of 18', function() {
		assert(detectNetwork('622699799902195816') === 'China UnionPay');
	});

	it('has a prefix of 622700 and a length of 18', function() {
		assert(detectNetwork('622700060637228255') === 'China UnionPay');
	});

	it('has a prefix of 622701 and a length of 18', function() {
		assert(detectNetwork('622701872173392413') === 'China UnionPay');
	});

	it('has a prefix of 622702 and a length of 18', function() {
		assert(detectNetwork('622702344255212553') === 'China UnionPay');
	});

	it('has a prefix of 622703 and a length of 18', function() {
		assert(detectNetwork('622703768603290998') === 'China UnionPay');
	});

	it('has a prefix of 622704 and a length of 18', function() {
		assert(detectNetwork('622704985815715948') === 'China UnionPay');
	});

	it('has a prefix of 622705 and a length of 18', function() {
		assert(detectNetwork('622705357227723840') === 'China UnionPay');
	});

	it('has a prefix of 622706 and a length of 18', function() {
		assert(detectNetwork('622706557661124989') === 'China UnionPay');
	});

	it('has a prefix of 622707 and a length of 18', function() {
		assert(detectNetwork('622707252124565289') === 'China UnionPay');
	});

	it('has a prefix of 622708 and a length of 18', function() {
		assert(detectNetwork('622708131175302168') === 'China UnionPay');
	});

	it('has a prefix of 622709 and a length of 18', function() {
		assert(detectNetwork('622709037943722844') === 'China UnionPay');
	});

	it('has a prefix of 622710 and a length of 18', function() {
		assert(detectNetwork('622710673619468252') === 'China UnionPay');
	});

	it('has a prefix of 622711 and a length of 18', function() {
		assert(detectNetwork('622711562453800548') === 'China UnionPay');
	});

	it('has a prefix of 622712 and a length of 18', function() {
		assert(detectNetwork('622712879855939896') === 'China UnionPay');
	});

	it('has a prefix of 622713 and a length of 18', function() {
		assert(detectNetwork('622713046416119563') === 'China UnionPay');
	});

	it('has a prefix of 622714 and a length of 18', function() {
		assert(detectNetwork('622714626176243036') === 'China UnionPay');
	});

	it('has a prefix of 622715 and a length of 18', function() {
		assert(detectNetwork('622715073172574869') === 'China UnionPay');
	});

	it('has a prefix of 622716 and a length of 18', function() {
		assert(detectNetwork('622716752467760224') === 'China UnionPay');
	});

	it('has a prefix of 622717 and a length of 18', function() {
		assert(detectNetwork('622717883053311876') === 'China UnionPay');
	});

	it('has a prefix of 622718 and a length of 18', function() {
		assert(detectNetwork('622718604165428613') === 'China UnionPay');
	});

	it('has a prefix of 622719 and a length of 18', function() {
		assert(detectNetwork('622719382396396457') === 'China UnionPay');
	});

	it('has a prefix of 622720 and a length of 18', function() {
		assert(detectNetwork('622720294316763430') === 'China UnionPay');
	});

	it('has a prefix of 622721 and a length of 18', function() {
		assert(detectNetwork('622721905804149350') === 'China UnionPay');
	});

	it('has a prefix of 622722 and a length of 18', function() {
		assert(detectNetwork('622722738655173163') === 'China UnionPay');
	});

	it('has a prefix of 622723 and a length of 18', function() {
		assert(detectNetwork('622723654795508564') === 'China UnionPay');
	});

	it('has a prefix of 622724 and a length of 18', function() {
		assert(detectNetwork('622724566840369693') === 'China UnionPay');
	});

	it('has a prefix of 622725 and a length of 18', function() {
		assert(detectNetwork('622725861768450937') === 'China UnionPay');
	});

	it('has a prefix of 622726 and a length of 18', function() {
		assert(detectNetwork('622726035778401999') === 'China UnionPay');
	});

	it('has a prefix of 622727 and a length of 18', function() {
		assert(detectNetwork('622727921045149516') === 'China UnionPay');
	});

	it('has a prefix of 622728 and a length of 18', function() {
		assert(detectNetwork('622728143431405204') === 'China UnionPay');
	});

	it('has a prefix of 622729 and a length of 18', function() {
		assert(detectNetwork('622729789017368009') === 'China UnionPay');
	});

	it('has a prefix of 622730 and a length of 18', function() {
		assert(detectNetwork('622730227904587928') === 'China UnionPay');
	});

	it('has a prefix of 622731 and a length of 18', function() {
		assert(detectNetwork('622731049644569990') === 'China UnionPay');
	});

	it('has a prefix of 622732 and a length of 18', function() {
		assert(detectNetwork('622732255355656004') === 'China UnionPay');
	});

	it('has a prefix of 622733 and a length of 18', function() {
		assert(detectNetwork('622733813060178199') === 'China UnionPay');
	});

	it('has a prefix of 622734 and a length of 18', function() {
		assert(detectNetwork('622734643144178460') === 'China UnionPay');
	});

	it('has a prefix of 622735 and a length of 18', function() {
		assert(detectNetwork('622735933886073483') === 'China UnionPay');
	});

	it('has a prefix of 622736 and a length of 18', function() {
		assert(detectNetwork('622736783427087840') === 'China UnionPay');
	});

	it('has a prefix of 622737 and a length of 18', function() {
		assert(detectNetwork('622737041504663879') === 'China UnionPay');
	});

	it('has a prefix of 622738 and a length of 18', function() {
		assert(detectNetwork('622738238243663381') === 'China UnionPay');
	});

	it('has a prefix of 622739 and a length of 18', function() {
		assert(detectNetwork('622739190307424092') === 'China UnionPay');
	});

	it('has a prefix of 622740 and a length of 18', function() {
		assert(detectNetwork('622740136371030699') === 'China UnionPay');
	});

	it('has a prefix of 622741 and a length of 18', function() {
		assert(detectNetwork('622741829844124318') === 'China UnionPay');
	});

	it('has a prefix of 622742 and a length of 18', function() {
		assert(detectNetwork('622742432721691754') === 'China UnionPay');
	});

	it('has a prefix of 622743 and a length of 18', function() {
		assert(detectNetwork('622743087735869816') === 'China UnionPay');
	});

	it('has a prefix of 622744 and a length of 18', function() {
		assert(detectNetwork('622744323834948387') === 'China UnionPay');
	});

	it('has a prefix of 622745 and a length of 18', function() {
		assert(detectNetwork('622745226698555457') === 'China UnionPay');
	});

	it('has a prefix of 622746 and a length of 18', function() {
		assert(detectNetwork('622746064364001066') === 'China UnionPay');
	});

	it('has a prefix of 622747 and a length of 18', function() {
		assert(detectNetwork('622747876087999308') === 'China UnionPay');
	});

	it('has a prefix of 622748 and a length of 18', function() {
		assert(detectNetwork('622748890499902658') === 'China UnionPay');
	});

	it('has a prefix of 622749 and a length of 18', function() {
		assert(detectNetwork('622749832260443568') === 'China UnionPay');
	});

	it('has a prefix of 622750 and a length of 18', function() {
		assert(detectNetwork('622750504047359190') === 'China UnionPay');
	});

	it('has a prefix of 622751 and a length of 18', function() {
		assert(detectNetwork('622751764355303175') === 'China UnionPay');
	});

	it('has a prefix of 622752 and a length of 18', function() {
		assert(detectNetwork('622752586034498791') === 'China UnionPay');
	});

	it('has a prefix of 622753 and a length of 18', function() {
		assert(detectNetwork('622753132693816261') === 'China UnionPay');
	});

	it('has a prefix of 622754 and a length of 18', function() {
		assert(detectNetwork('622754759643070607') === 'China UnionPay');
	});

	it('has a prefix of 622755 and a length of 18', function() {
		assert(detectNetwork('622755195712860914') === 'China UnionPay');
	});

	it('has a prefix of 622756 and a length of 18', function() {
		assert(detectNetwork('622756604716427938') === 'China UnionPay');
	});

	it('has a prefix of 622757 and a length of 18', function() {
		assert(detectNetwork('622757712499094107') === 'China UnionPay');
	});

	it('has a prefix of 622758 and a length of 18', function() {
		assert(detectNetwork('622758657157633107') === 'China UnionPay');
	});

	it('has a prefix of 622759 and a length of 18', function() {
		assert(detectNetwork('622759570893420239') === 'China UnionPay');
	});

	it('has a prefix of 622760 and a length of 18', function() {
		assert(detectNetwork('622760590590382075') === 'China UnionPay');
	});

	it('has a prefix of 622761 and a length of 18', function() {
		assert(detectNetwork('622761830686890127') === 'China UnionPay');
	});

	it('has a prefix of 622762 and a length of 18', function() {
		assert(detectNetwork('622762448797905304') === 'China UnionPay');
	});

	it('has a prefix of 622763 and a length of 18', function() {
		assert(detectNetwork('622763996185270960') === 'China UnionPay');
	});

	it('has a prefix of 622764 and a length of 18', function() {
		assert(detectNetwork('622764894336894538') === 'China UnionPay');
	});

	it('has a prefix of 622765 and a length of 18', function() {
		assert(detectNetwork('622765429549075471') === 'China UnionPay');
	});

	it('has a prefix of 622766 and a length of 18', function() {
		assert(detectNetwork('622766152116266317') === 'China UnionPay');
	});

	it('has a prefix of 622767 and a length of 18', function() {
		assert(detectNetwork('622767802245482646') === 'China UnionPay');
	});

	it('has a prefix of 622768 and a length of 18', function() {
		assert(detectNetwork('622768117171696109') === 'China UnionPay');
	});

	it('has a prefix of 622769 and a length of 18', function() {
		assert(detectNetwork('622769347830967108') === 'China UnionPay');
	});

	it('has a prefix of 622770 and a length of 18', function() {
		assert(detectNetwork('622770348412066747') === 'China UnionPay');
	});

	it('has a prefix of 622771 and a length of 18', function() {
		assert(detectNetwork('622771451097312552') === 'China UnionPay');
	});

	it('has a prefix of 622772 and a length of 18', function() {
		assert(detectNetwork('622772896251393082') === 'China UnionPay');
	});

	it('has a prefix of 622773 and a length of 18', function() {
		assert(detectNetwork('622773495456903799') === 'China UnionPay');
	});

	it('has a prefix of 622774 and a length of 18', function() {
		assert(detectNetwork('622774046117594584') === 'China UnionPay');
	});

	it('has a prefix of 622775 and a length of 18', function() {
		assert(detectNetwork('622775203145000931') === 'China UnionPay');
	});

	it('has a prefix of 622776 and a length of 18', function() {
		assert(detectNetwork('622776784978821190') === 'China UnionPay');
	});

	it('has a prefix of 622777 and a length of 18', function() {
		assert(detectNetwork('622777596353168062') === 'China UnionPay');
	});

	it('has a prefix of 622778 and a length of 18', function() {
		assert(detectNetwork('622778650101964767') === 'China UnionPay');
	});

	it('has a prefix of 622779 and a length of 18', function() {
		assert(detectNetwork('622779967525236818') === 'China UnionPay');
	});

	it('has a prefix of 622780 and a length of 18', function() {
		assert(detectNetwork('622780658665175926') === 'China UnionPay');
	});

	it('has a prefix of 622781 and a length of 18', function() {
		assert(detectNetwork('622781034489536889') === 'China UnionPay');
	});

	it('has a prefix of 622782 and a length of 18', function() {
		assert(detectNetwork('622782024150905184') === 'China UnionPay');
	});

	it('has a prefix of 622783 and a length of 18', function() {
		assert(detectNetwork('622783796024521512') === 'China UnionPay');
	});

	it('has a prefix of 622784 and a length of 18', function() {
		assert(detectNetwork('622784740666131889') === 'China UnionPay');
	});

	it('has a prefix of 622785 and a length of 18', function() {
		assert(detectNetwork('622785067249144894') === 'China UnionPay');
	});

	it('has a prefix of 622786 and a length of 18', function() {
		assert(detectNetwork('622786466088455828') === 'China UnionPay');
	});

	it('has a prefix of 622787 and a length of 18', function() {
		assert(detectNetwork('622787551997510011') === 'China UnionPay');
	});

	it('has a prefix of 622788 and a length of 18', function() {
		assert(detectNetwork('622788927482812796') === 'China UnionPay');
	});

	it('has a prefix of 622789 and a length of 18', function() {
		assert(detectNetwork('622789213277867189') === 'China UnionPay');
	});

	it('has a prefix of 622790 and a length of 18', function() {
		assert(detectNetwork('622790897801438331') === 'China UnionPay');
	});

	it('has a prefix of 622791 and a length of 18', function() {
		assert(detectNetwork('622791435149186328') === 'China UnionPay');
	});

	it('has a prefix of 622792 and a length of 18', function() {
		assert(detectNetwork('622792349188481823') === 'China UnionPay');
	});

	it('has a prefix of 622793 and a length of 18', function() {
		assert(detectNetwork('622793837187896904') === 'China UnionPay');
	});

	it('has a prefix of 622794 and a length of 18', function() {
		assert(detectNetwork('622794792977679162') === 'China UnionPay');
	});

	it('has a prefix of 622795 and a length of 18', function() {
		assert(detectNetwork('622795429739513529') === 'China UnionPay');
	});

	it('has a prefix of 622796 and a length of 18', function() {
		assert(detectNetwork('622796793695144773') === 'China UnionPay');
	});

	it('has a prefix of 622797 and a length of 18', function() {
		assert(detectNetwork('622797362779578217') === 'China UnionPay');
	});

	it('has a prefix of 622798 and a length of 18', function() {
		assert(detectNetwork('622798086891365859') === 'China UnionPay');
	});

	it('has a prefix of 622799 and a length of 18', function() {
		assert(detectNetwork('622799405877987476') === 'China UnionPay');
	});

	it('has a prefix of 622800 and a length of 18', function() {
		assert(detectNetwork('622800160601588135') === 'China UnionPay');
	});

	it('has a prefix of 622801 and a length of 18', function() {
		assert(detectNetwork('622801077811660504') === 'China UnionPay');
	});

	it('has a prefix of 622802 and a length of 18', function() {
		assert(detectNetwork('622802156687111613') === 'China UnionPay');
	});

	it('has a prefix of 622803 and a length of 18', function() {
		assert(detectNetwork('622803709337740491') === 'China UnionPay');
	});

	it('has a prefix of 622804 and a length of 18', function() {
		assert(detectNetwork('622804659898646295') === 'China UnionPay');
	});

	it('has a prefix of 622805 and a length of 18', function() {
		assert(detectNetwork('622805039341461872') === 'China UnionPay');
	});

	it('has a prefix of 622806 and a length of 18', function() {
		assert(detectNetwork('622806269232793583') === 'China UnionPay');
	});

	it('has a prefix of 622807 and a length of 18', function() {
		assert(detectNetwork('622807557678478799') === 'China UnionPay');
	});

	it('has a prefix of 622808 and a length of 18', function() {
		assert(detectNetwork('622808629446961870') === 'China UnionPay');
	});

	it('has a prefix of 622809 and a length of 18', function() {
		assert(detectNetwork('622809112427005155') === 'China UnionPay');
	});

	it('has a prefix of 622810 and a length of 18', function() {
		assert(detectNetwork('622810516129652531') === 'China UnionPay');
	});

	it('has a prefix of 622811 and a length of 18', function() {
		assert(detectNetwork('622811032405138923') === 'China UnionPay');
	});

	it('has a prefix of 622812 and a length of 18', function() {
		assert(detectNetwork('622812118442450050') === 'China UnionPay');
	});

	it('has a prefix of 622813 and a length of 18', function() {
		assert(detectNetwork('622813140796808495') === 'China UnionPay');
	});

	it('has a prefix of 622814 and a length of 18', function() {
		assert(detectNetwork('622814736676169570') === 'China UnionPay');
	});

	it('has a prefix of 622815 and a length of 18', function() {
		assert(detectNetwork('622815722040721936') === 'China UnionPay');
	});

	it('has a prefix of 622816 and a length of 18', function() {
		assert(detectNetwork('622816803653570229') === 'China UnionPay');
	});

	it('has a prefix of 622817 and a length of 18', function() {
		assert(detectNetwork('622817617945502716') === 'China UnionPay');
	});

	it('has a prefix of 622818 and a length of 18', function() {
		assert(detectNetwork('622818851394870800') === 'China UnionPay');
	});

	it('has a prefix of 622819 and a length of 18', function() {
		assert(detectNetwork('622819564630688766') === 'China UnionPay');
	});

	it('has a prefix of 622820 and a length of 18', function() {
		assert(detectNetwork('622820593023148693') === 'China UnionPay');
	});

	it('has a prefix of 622821 and a length of 18', function() {
		assert(detectNetwork('622821760561750249') === 'China UnionPay');
	});

	it('has a prefix of 622822 and a length of 18', function() {
		assert(detectNetwork('622822932242184567') === 'China UnionPay');
	});

	it('has a prefix of 622823 and a length of 18', function() {
		assert(detectNetwork('622823158048369309') === 'China UnionPay');
	});

	it('has a prefix of 622824 and a length of 18', function() {
		assert(detectNetwork('622824682760618570') === 'China UnionPay');
	});

	it('has a prefix of 622825 and a length of 18', function() {
		assert(detectNetwork('622825450263387562') === 'China UnionPay');
	});

	it('has a prefix of 622826 and a length of 18', function() {
		assert(detectNetwork('622826334575994878') === 'China UnionPay');
	});

	it('has a prefix of 622827 and a length of 18', function() {
		assert(detectNetwork('622827147568650725') === 'China UnionPay');
	});

	it('has a prefix of 622828 and a length of 18', function() {
		assert(detectNetwork('622828152142578107') === 'China UnionPay');
	});

	it('has a prefix of 622829 and a length of 18', function() {
		assert(detectNetwork('622829668616826614') === 'China UnionPay');
	});

	it('has a prefix of 622830 and a length of 18', function() {
		assert(detectNetwork('622830701771811288') === 'China UnionPay');
	});

	it('has a prefix of 622831 and a length of 18', function() {
		assert(detectNetwork('622831736124006201') === 'China UnionPay');
	});

	it('has a prefix of 622832 and a length of 18', function() {
		assert(detectNetwork('622832049712291671') === 'China UnionPay');
	});

	it('has a prefix of 622833 and a length of 18', function() {
		assert(detectNetwork('622833840978110325') === 'China UnionPay');
	});

	it('has a prefix of 622834 and a length of 18', function() {
		assert(detectNetwork('622834182983764987') === 'China UnionPay');
	});

	it('has a prefix of 622835 and a length of 18', function() {
		assert(detectNetwork('622835310052239746') === 'China UnionPay');
	});

	it('has a prefix of 622836 and a length of 18', function() {
		assert(detectNetwork('622836317658331023') === 'China UnionPay');
	});

	it('has a prefix of 622837 and a length of 18', function() {
		assert(detectNetwork('622837703153026910') === 'China UnionPay');
	});

	it('has a prefix of 622838 and a length of 18', function() {
		assert(detectNetwork('622838149974944347') === 'China UnionPay');
	});

	it('has a prefix of 622839 and a length of 18', function() {
		assert(detectNetwork('622839947992941248') === 'China UnionPay');
	});

	it('has a prefix of 622840 and a length of 18', function() {
		assert(detectNetwork('622840477054962632') === 'China UnionPay');
	});

	it('has a prefix of 622841 and a length of 18', function() {
		assert(detectNetwork('622841520959460780') === 'China UnionPay');
	});

	it('has a prefix of 622842 and a length of 18', function() {
		assert(detectNetwork('622842803568090682') === 'China UnionPay');
	});

	it('has a prefix of 622843 and a length of 18', function() {
		assert(detectNetwork('622843858016132629') === 'China UnionPay');
	});

	it('has a prefix of 622844 and a length of 18', function() {
		assert(detectNetwork('622844095550051206') === 'China UnionPay');
	});

	it('has a prefix of 622845 and a length of 18', function() {
		assert(detectNetwork('622845642573011867') === 'China UnionPay');
	});

	it('has a prefix of 622846 and a length of 18', function() {
		assert(detectNetwork('622846678221803043') === 'China UnionPay');
	});

	it('has a prefix of 622847 and a length of 18', function() {
		assert(detectNetwork('622847147713695519') === 'China UnionPay');
	});

	it('has a prefix of 622848 and a length of 18', function() {
		assert(detectNetwork('622848172430766073') === 'China UnionPay');
	});

	it('has a prefix of 622849 and a length of 18', function() {
		assert(detectNetwork('622849464928666285') === 'China UnionPay');
	});

	it('has a prefix of 622850 and a length of 18', function() {
		assert(detectNetwork('622850837450433237') === 'China UnionPay');
	});

	it('has a prefix of 622851 and a length of 18', function() {
		assert(detectNetwork('622851213678773827') === 'China UnionPay');
	});

	it('has a prefix of 622852 and a length of 18', function() {
		assert(detectNetwork('622852029431424083') === 'China UnionPay');
	});

	it('has a prefix of 622853 and a length of 18', function() {
		assert(detectNetwork('622853195860025555') === 'China UnionPay');
	});

	it('has a prefix of 622854 and a length of 18', function() {
		assert(detectNetwork('622854128154273599') === 'China UnionPay');
	});

	it('has a prefix of 622855 and a length of 18', function() {
		assert(detectNetwork('622855490890249279') === 'China UnionPay');
	});

	it('has a prefix of 622856 and a length of 18', function() {
		assert(detectNetwork('622856482327866419') === 'China UnionPay');
	});

	it('has a prefix of 622857 and a length of 18', function() {
		assert(detectNetwork('622857846648823873') === 'China UnionPay');
	});

	it('has a prefix of 622858 and a length of 18', function() {
		assert(detectNetwork('622858865114741551') === 'China UnionPay');
	});

	it('has a prefix of 622859 and a length of 18', function() {
		assert(detectNetwork('622859433842302850') === 'China UnionPay');
	});

	it('has a prefix of 622860 and a length of 18', function() {
		assert(detectNetwork('622860697727277122') === 'China UnionPay');
	});

	it('has a prefix of 622861 and a length of 18', function() {
		assert(detectNetwork('622861191567758869') === 'China UnionPay');
	});

	it('has a prefix of 622862 and a length of 18', function() {
		assert(detectNetwork('622862047219182857') === 'China UnionPay');
	});

	it('has a prefix of 622863 and a length of 18', function() {
		assert(detectNetwork('622863219418625817') === 'China UnionPay');
	});

	it('has a prefix of 622864 and a length of 18', function() {
		assert(detectNetwork('622864592681069628') === 'China UnionPay');
	});

	it('has a prefix of 622865 and a length of 18', function() {
		assert(detectNetwork('622865112066851486') === 'China UnionPay');
	});

	it('has a prefix of 622866 and a length of 18', function() {
		assert(detectNetwork('622866691176096299') === 'China UnionPay');
	});

	it('has a prefix of 622867 and a length of 18', function() {
		assert(detectNetwork('622867424384867629') === 'China UnionPay');
	});

	it('has a prefix of 622868 and a length of 18', function() {
		assert(detectNetwork('622868890396818577') === 'China UnionPay');
	});

	it('has a prefix of 622869 and a length of 18', function() {
		assert(detectNetwork('622869831017261978') === 'China UnionPay');
	});

	it('has a prefix of 622870 and a length of 18', function() {
		assert(detectNetwork('622870611635227299') === 'China UnionPay');
	});

	it('has a prefix of 622871 and a length of 18', function() {
		assert(detectNetwork('622871041625976062') === 'China UnionPay');
	});

	it('has a prefix of 622872 and a length of 18', function() {
		assert(detectNetwork('622872856143785396') === 'China UnionPay');
	});

	it('has a prefix of 622873 and a length of 18', function() {
		assert(detectNetwork('622873136942666022') === 'China UnionPay');
	});

	it('has a prefix of 622874 and a length of 18', function() {
		assert(detectNetwork('622874177943544769') === 'China UnionPay');
	});

	it('has a prefix of 622875 and a length of 18', function() {
		assert(detectNetwork('622875128788684342') === 'China UnionPay');
	});

	it('has a prefix of 622876 and a length of 18', function() {
		assert(detectNetwork('622876268452822105') === 'China UnionPay');
	});

	it('has a prefix of 622877 and a length of 18', function() {
		assert(detectNetwork('622877547912775312') === 'China UnionPay');
	});

	it('has a prefix of 622878 and a length of 18', function() {
		assert(detectNetwork('622878777900906887') === 'China UnionPay');
	});

	it('has a prefix of 622879 and a length of 18', function() {
		assert(detectNetwork('622879363271759168') === 'China UnionPay');
	});

	it('has a prefix of 622880 and a length of 18', function() {
		assert(detectNetwork('622880247136670240') === 'China UnionPay');
	});

	it('has a prefix of 622881 and a length of 18', function() {
		assert(detectNetwork('622881381271340176') === 'China UnionPay');
	});

	it('has a prefix of 622882 and a length of 18', function() {
		assert(detectNetwork('622882112749193539') === 'China UnionPay');
	});

	it('has a prefix of 622883 and a length of 18', function() {
		assert(detectNetwork('622883458534465416') === 'China UnionPay');
	});

	it('has a prefix of 622884 and a length of 18', function() {
		assert(detectNetwork('622884717124027252') === 'China UnionPay');
	});

	it('has a prefix of 622885 and a length of 18', function() {
		assert(detectNetwork('622885524428950686') === 'China UnionPay');
	});

	it('has a prefix of 622886 and a length of 18', function() {
		assert(detectNetwork('622886163597626794') === 'China UnionPay');
	});

	it('has a prefix of 622887 and a length of 18', function() {
		assert(detectNetwork('622887076586265163') === 'China UnionPay');
	});

	it('has a prefix of 622888 and a length of 18', function() {
		assert(detectNetwork('622888121078464725') === 'China UnionPay');
	});

	it('has a prefix of 622889 and a length of 18', function() {
		assert(detectNetwork('622889825059519652') === 'China UnionPay');
	});

	it('has a prefix of 622890 and a length of 18', function() {
		assert(detectNetwork('622890690381799229') === 'China UnionPay');
	});

	it('has a prefix of 622891 and a length of 18', function() {
		assert(detectNetwork('622891942101534932') === 'China UnionPay');
	});

	it('has a prefix of 622892 and a length of 18', function() {
		assert(detectNetwork('622892151023255447') === 'China UnionPay');
	});

	it('has a prefix of 622893 and a length of 18', function() {
		assert(detectNetwork('622893572974552554') === 'China UnionPay');
	});

	it('has a prefix of 622894 and a length of 18', function() {
		assert(detectNetwork('622894159256502177') === 'China UnionPay');
	});

	it('has a prefix of 622895 and a length of 18', function() {
		assert(detectNetwork('622895369880698399') === 'China UnionPay');
	});

	it('has a prefix of 622896 and a length of 18', function() {
		assert(detectNetwork('622896193905096619') === 'China UnionPay');
	});

	it('has a prefix of 622897 and a length of 18', function() {
		assert(detectNetwork('622897034605862767') === 'China UnionPay');
	});

	it('has a prefix of 622898 and a length of 18', function() {
		assert(detectNetwork('622898097794850648') === 'China UnionPay');
	});

	it('has a prefix of 622899 and a length of 18', function() {
		assert(detectNetwork('622899897274011475') === 'China UnionPay');
	});

	it('has a prefix of 622900 and a length of 18', function() {
		assert(detectNetwork('622900128725570800') === 'China UnionPay');
	});

	it('has a prefix of 622901 and a length of 18', function() {
		assert(detectNetwork('622901547962950546') === 'China UnionPay');
	});

	it('has a prefix of 622902 and a length of 18', function() {
		assert(detectNetwork('622902008763846195') === 'China UnionPay');
	});

	it('has a prefix of 622903 and a length of 18', function() {
		assert(detectNetwork('622903371375840173') === 'China UnionPay');
	});

	it('has a prefix of 622904 and a length of 18', function() {
		assert(detectNetwork('622904983364085400') === 'China UnionPay');
	});

	it('has a prefix of 622905 and a length of 18', function() {
		assert(detectNetwork('622905470366535397') === 'China UnionPay');
	});

	it('has a prefix of 622906 and a length of 18', function() {
		assert(detectNetwork('622906081683966712') === 'China UnionPay');
	});

	it('has a prefix of 622907 and a length of 18', function() {
		assert(detectNetwork('622907520620508827') === 'China UnionPay');
	});

	it('has a prefix of 622908 and a length of 18', function() {
		assert(detectNetwork('622908679745378473') === 'China UnionPay');
	});

	it('has a prefix of 622909 and a length of 18', function() {
		assert(detectNetwork('622909549956458753') === 'China UnionPay');
	});

	it('has a prefix of 622910 and a length of 18', function() {
		assert(detectNetwork('622910103448635785') === 'China UnionPay');
	});

	it('has a prefix of 622911 and a length of 18', function() {
		assert(detectNetwork('622911476446422146') === 'China UnionPay');
	});

	it('has a prefix of 622912 and a length of 18', function() {
		assert(detectNetwork('622912970210409223') === 'China UnionPay');
	});

	it('has a prefix of 622913 and a length of 18', function() {
		assert(detectNetwork('622913055369734310') === 'China UnionPay');
	});

	it('has a prefix of 622914 and a length of 18', function() {
		assert(detectNetwork('622914641587692448') === 'China UnionPay');
	});

	it('has a prefix of 622915 and a length of 18', function() {
		assert(detectNetwork('622915411919162794') === 'China UnionPay');
	});

	it('has a prefix of 622916 and a length of 18', function() {
		assert(detectNetwork('622916887952355934') === 'China UnionPay');
	});

	it('has a prefix of 622917 and a length of 18', function() {
		assert(detectNetwork('622917500777840991') === 'China UnionPay');
	});

	it('has a prefix of 622918 and a length of 18', function() {
		assert(detectNetwork('622918826834607007') === 'China UnionPay');
	});

	it('has a prefix of 622919 and a length of 18', function() {
		assert(detectNetwork('622919113347832237') === 'China UnionPay');
	});

	it('has a prefix of 622920 and a length of 18', function() {
		assert(detectNetwork('622920240986999515') === 'China UnionPay');
	});

	it('has a prefix of 622921 and a length of 18', function() {
		assert(detectNetwork('622921480845914225') === 'China UnionPay');
	});

	it('has a prefix of 622922 and a length of 18', function() {
		assert(detectNetwork('622922016272014532') === 'China UnionPay');
	});

	it('has a prefix of 622923 and a length of 18', function() {
		assert(detectNetwork('622923119218088840') === 'China UnionPay');
	});

	it('has a prefix of 622924 and a length of 18', function() {
		assert(detectNetwork('622924919783469455') === 'China UnionPay');
	});

	it('has a prefix of 622925 and a length of 18', function() {
		assert(detectNetwork('622925362948162163') === 'China UnionPay');
	});

	it('has a prefix of 624 and a length of 19', function() {
		assert(detectNetwork('6246924150684428006') === 'China UnionPay');
	});

	it('has a prefix of 625 and a length of 19', function() {
		assert(detectNetwork('6253674625500316980') === 'China UnionPay');
	});

	it('has a prefix of 626 and a length of 19', function() {
		assert(detectNetwork('6263134574513248042') === 'China UnionPay');
	});

	it('has a prefix of 6282 and a length of 19', function() {
		assert(detectNetwork('6282976597466123921') === 'China UnionPay');
	});

	it('has a prefix of 6283 and a length of 19', function() {
		assert(detectNetwork('6283876051431279147') === 'China UnionPay');
	});

	it('has a prefix of 6284 and a length of 19', function() {
		assert(detectNetwork('6284196417545172221') === 'China UnionPay');
	});

	it('has a prefix of 6285 and a length of 19', function() {
		assert(detectNetwork('6285909059935613142') === 'China UnionPay');
	});

	it('has a prefix of 6286 and a length of 19', function() {
		assert(detectNetwork('6286945553949896476') === 'China UnionPay');
	});

	it('has a prefix of 6287 and a length of 19', function() {
		assert(detectNetwork('6287986637547199089') === 'China UnionPay');
	});

	it('has a prefix of 6288 and a length of 19', function() {
		assert(detectNetwork('6288265393002467316') === 'China UnionPay');
	});

	it('has a prefix of 622126 and a length of 19', function() {
		assert(detectNetwork('6221267116446410984') === 'China UnionPay');
	});

	it('has a prefix of 622127 and a length of 19', function() {
		assert(detectNetwork('6221274373009771669') === 'China UnionPay');
	});

	it('has a prefix of 622128 and a length of 19', function() {
		assert(detectNetwork('6221282199089617283') === 'China UnionPay');
	});

	it('has a prefix of 622129 and a length of 19', function() {
		assert(detectNetwork('6221291203012594906') === 'China UnionPay');
	});

	it('has a prefix of 622130 and a length of 19', function() {
		assert(detectNetwork('6221307407581745235') === 'China UnionPay');
	});

	it('has a prefix of 622131 and a length of 19', function() {
		assert(detectNetwork('6221314189418177550') === 'China UnionPay');
	});

	it('has a prefix of 622132 and a length of 19', function() {
		assert(detectNetwork('6221320426432244775') === 'China UnionPay');
	});

	it('has a prefix of 622133 and a length of 19', function() {
		assert(detectNetwork('6221339269900628738') === 'China UnionPay');
	});

	it('has a prefix of 622134 and a length of 19', function() {
		assert(detectNetwork('6221349317706760970') === 'China UnionPay');
	});

	it('has a prefix of 622135 and a length of 19', function() {
		assert(detectNetwork('6221355769152728386') === 'China UnionPay');
	});

	it('has a prefix of 622136 and a length of 19', function() {
		assert(detectNetwork('6221362829749043398') === 'China UnionPay');
	});

	it('has a prefix of 622137 and a length of 19', function() {
		assert(detectNetwork('6221375701054727411') === 'China UnionPay');
	});

	it('has a prefix of 622138 and a length of 19', function() {
		assert(detectNetwork('6221389040926405547') === 'China UnionPay');
	});

	it('has a prefix of 622139 and a length of 19', function() {
		assert(detectNetwork('6221398550274728941') === 'China UnionPay');
	});

	it('has a prefix of 622140 and a length of 19', function() {
		assert(detectNetwork('6221400222064420088') === 'China UnionPay');
	});

	it('has a prefix of 622141 and a length of 19', function() {
		assert(detectNetwork('6221415843237908081') === 'China UnionPay');
	});

	it('has a prefix of 622142 and a length of 19', function() {
		assert(detectNetwork('6221421244456019409') === 'China UnionPay');
	});

	it('has a prefix of 622143 and a length of 19', function() {
		assert(detectNetwork('6221430490469643201') === 'China UnionPay');
	});

	it('has a prefix of 622144 and a length of 19', function() {
		assert(detectNetwork('6221445312219366423') === 'China UnionPay');
	});

	it('has a prefix of 622145 and a length of 19', function() {
		assert(detectNetwork('6221452135721113352') === 'China UnionPay');
	});

	it('has a prefix of 622146 and a length of 19', function() {
		assert(detectNetwork('6221462799403048687') === 'China UnionPay');
	});

	it('has a prefix of 622147 and a length of 19', function() {
		assert(detectNetwork('6221476788934544973') === 'China UnionPay');
	});

	it('has a prefix of 622148 and a length of 19', function() {
		assert(detectNetwork('6221481434601279861') === 'China UnionPay');
	});

	it('has a prefix of 622149 and a length of 19', function() {
		assert(detectNetwork('6221495827011821214') === 'China UnionPay');
	});

	it('has a prefix of 622150 and a length of 19', function() {
		assert(detectNetwork('6221506827482706647') === 'China UnionPay');
	});

	it('has a prefix of 622151 and a length of 19', function() {
		assert(detectNetwork('6221518581838789104') === 'China UnionPay');
	});

	it('has a prefix of 622152 and a length of 19', function() {
		assert(detectNetwork('6221520202658651987') === 'China UnionPay');
	});

	it('has a prefix of 622153 and a length of 19', function() {
		assert(detectNetwork('6221536669490123313') === 'China UnionPay');
	});

	it('has a prefix of 622154 and a length of 19', function() {
		assert(detectNetwork('6221544811517052671') === 'China UnionPay');
	});

	it('has a prefix of 622155 and a length of 19', function() {
		assert(detectNetwork('6221552343733612331') === 'China UnionPay');
	});

	it('has a prefix of 622156 and a length of 19', function() {
		assert(detectNetwork('6221561347727856558') === 'China UnionPay');
	});

	it('has a prefix of 622157 and a length of 19', function() {
		assert(detectNetwork('6221572053948889376') === 'China UnionPay');
	});

	it('has a prefix of 622158 and a length of 19', function() {
		assert(detectNetwork('6221583455197396234') === 'China UnionPay');
	});

	it('has a prefix of 622159 and a length of 19', function() {
		assert(detectNetwork('6221591027400739211') === 'China UnionPay');
	});

	it('has a prefix of 622160 and a length of 19', function() {
		assert(detectNetwork('6221602741663856778') === 'China UnionPay');
	});

	it('has a prefix of 622161 and a length of 19', function() {
		assert(detectNetwork('6221611211181207206') === 'China UnionPay');
	});

	it('has a prefix of 622162 and a length of 19', function() {
		assert(detectNetwork('6221624232339889764') === 'China UnionPay');
	});

	it('has a prefix of 622163 and a length of 19', function() {
		assert(detectNetwork('6221638541790857898') === 'China UnionPay');
	});

	it('has a prefix of 622164 and a length of 19', function() {
		assert(detectNetwork('6221645680324286917') === 'China UnionPay');
	});

	it('has a prefix of 622165 and a length of 19', function() {
		assert(detectNetwork('6221658434415707023') === 'China UnionPay');
	});

	it('has a prefix of 622166 and a length of 19', function() {
		assert(detectNetwork('6221663272540638939') === 'China UnionPay');
	});

	it('has a prefix of 622167 and a length of 19', function() {
		assert(detectNetwork('6221672777398968645') === 'China UnionPay');
	});

	it('has a prefix of 622168 and a length of 19', function() {
		assert(detectNetwork('6221686559992243759') === 'China UnionPay');
	});

	it('has a prefix of 622169 and a length of 19', function() {
		assert(detectNetwork('6221690715112557746') === 'China UnionPay');
	});

	it('has a prefix of 622170 and a length of 19', function() {
		assert(detectNetwork('6221709296335901441') === 'China UnionPay');
	});

	it('has a prefix of 622171 and a length of 19', function() {
		assert(detectNetwork('6221719761484611533') === 'China UnionPay');
	});

	it('has a prefix of 622172 and a length of 19', function() {
		assert(detectNetwork('6221725948054691042') === 'China UnionPay');
	});

	it('has a prefix of 622173 and a length of 19', function() {
		assert(detectNetwork('6221736815890529079') === 'China UnionPay');
	});

	it('has a prefix of 622174 and a length of 19', function() {
		assert(detectNetwork('6221743531803409659') === 'China UnionPay');
	});

	it('has a prefix of 622175 and a length of 19', function() {
		assert(detectNetwork('6221758502250040951') === 'China UnionPay');
	});

	it('has a prefix of 622176 and a length of 19', function() {
		assert(detectNetwork('6221764652629612700') === 'China UnionPay');
	});

	it('has a prefix of 622177 and a length of 19', function() {
		assert(detectNetwork('6221774997653961907') === 'China UnionPay');
	});

	it('has a prefix of 622178 and a length of 19', function() {
		assert(detectNetwork('6221786199790775142') === 'China UnionPay');
	});

	it('has a prefix of 622179 and a length of 19', function() {
		assert(detectNetwork('6221798092851220428') === 'China UnionPay');
	});

	it('has a prefix of 622180 and a length of 19', function() {
		assert(detectNetwork('6221809561610550577') === 'China UnionPay');
	});

	it('has a prefix of 622181 and a length of 19', function() {
		assert(detectNetwork('6221814757174770594') === 'China UnionPay');
	});

	it('has a prefix of 622182 and a length of 19', function() {
		assert(detectNetwork('6221827927367157362') === 'China UnionPay');
	});

	it('has a prefix of 622183 and a length of 19', function() {
		assert(detectNetwork('6221837130191451123') === 'China UnionPay');
	});

	it('has a prefix of 622184 and a length of 19', function() {
		assert(detectNetwork('6221840461809131964') === 'China UnionPay');
	});

	it('has a prefix of 622185 and a length of 19', function() {
		assert(detectNetwork('6221850240357378234') === 'China UnionPay');
	});

	it('has a prefix of 622186 and a length of 19', function() {
		assert(detectNetwork('6221863685774338220') === 'China UnionPay');
	});

	it('has a prefix of 622187 and a length of 19', function() {
		assert(detectNetwork('6221876860926706017') === 'China UnionPay');
	});

	it('has a prefix of 622188 and a length of 19', function() {
		assert(detectNetwork('6221885972242716578') === 'China UnionPay');
	});

	it('has a prefix of 622189 and a length of 19', function() {
		assert(detectNetwork('6221891140295159066') === 'China UnionPay');
	});

	it('has a prefix of 622190 and a length of 19', function() {
		assert(detectNetwork('6221907040125812505') === 'China UnionPay');
	});

	it('has a prefix of 622191 and a length of 19', function() {
		assert(detectNetwork('6221914450144101087') === 'China UnionPay');
	});

	it('has a prefix of 622192 and a length of 19', function() {
		assert(detectNetwork('6221922495871512494') === 'China UnionPay');
	});

	it('has a prefix of 622193 and a length of 19', function() {
		assert(detectNetwork('6221932464164447987') === 'China UnionPay');
	});

	it('has a prefix of 622194 and a length of 19', function() {
		assert(detectNetwork('6221940501129219161') === 'China UnionPay');
	});

	it('has a prefix of 622195 and a length of 19', function() {
		assert(detectNetwork('6221950384017502972') === 'China UnionPay');
	});

	it('has a prefix of 622196 and a length of 19', function() {
		assert(detectNetwork('6221967372019889042') === 'China UnionPay');
	});

	it('has a prefix of 622197 and a length of 19', function() {
		assert(detectNetwork('6221977104385065471') === 'China UnionPay');
	});

	it('has a prefix of 622198 and a length of 19', function() {
		assert(detectNetwork('6221982384875790463') === 'China UnionPay');
	});

	it('has a prefix of 622199 and a length of 19', function() {
		assert(detectNetwork('6221991805894326939') === 'China UnionPay');
	});

	it('has a prefix of 622200 and a length of 19', function() {
		assert(detectNetwork('6222001910290892928') === 'China UnionPay');
	});

	it('has a prefix of 622201 and a length of 19', function() {
		assert(detectNetwork('6222016455465734519') === 'China UnionPay');
	});

	it('has a prefix of 622202 and a length of 19', function() {
		assert(detectNetwork('6222024051443503580') === 'China UnionPay');
	});

	it('has a prefix of 622203 and a length of 19', function() {
		assert(detectNetwork('6222037914423216642') === 'China UnionPay');
	});

	it('has a prefix of 622204 and a length of 19', function() {
		assert(detectNetwork('6222049994391514440') === 'China UnionPay');
	});

	it('has a prefix of 622205 and a length of 19', function() {
		assert(detectNetwork('6222057652914150946') === 'China UnionPay');
	});

	it('has a prefix of 622206 and a length of 19', function() {
		assert(detectNetwork('6222062123377799241') === 'China UnionPay');
	});

	it('has a prefix of 622207 and a length of 19', function() {
		assert(detectNetwork('6222079380104821875') === 'China UnionPay');
	});

	it('has a prefix of 622208 and a length of 19', function() {
		assert(detectNetwork('6222085563661683077') === 'China UnionPay');
	});

	it('has a prefix of 622209 and a length of 19', function() {
		assert(detectNetwork('6222094105405871922') === 'China UnionPay');
	});

	it('has a prefix of 622210 and a length of 19', function() {
		assert(detectNetwork('6222106937049869889') === 'China UnionPay');
	});

	it('has a prefix of 622211 and a length of 19', function() {
		assert(detectNetwork('6222118196286199874') === 'China UnionPay');
	});

	it('has a prefix of 622212 and a length of 19', function() {
		assert(detectNetwork('6222123152967090740') === 'China UnionPay');
	});

	it('has a prefix of 622213 and a length of 19', function() {
		assert(detectNetwork('6222136132974942756') === 'China UnionPay');
	});

	it('has a prefix of 622214 and a length of 19', function() {
		assert(detectNetwork('6222147961559157669') === 'China UnionPay');
	});

	it('has a prefix of 622215 and a length of 19', function() {
		assert(detectNetwork('6222155836365047750') === 'China UnionPay');
	});

	it('has a prefix of 622216 and a length of 19', function() {
		assert(detectNetwork('6222168356450185670') === 'China UnionPay');
	});

	it('has a prefix of 622217 and a length of 19', function() {
		assert(detectNetwork('6222175069848277687') === 'China UnionPay');
	});

	it('has a prefix of 622218 and a length of 19', function() {
		assert(detectNetwork('6222183983649313703') === 'China UnionPay');
	});

	it('has a prefix of 622219 and a length of 19', function() {
		assert(detectNetwork('6222194783139966090') === 'China UnionPay');
	});

	it('has a prefix of 622220 and a length of 19', function() {
		assert(detectNetwork('6222201725251534168') === 'China UnionPay');
	});

	it('has a prefix of 622221 and a length of 19', function() {
		assert(detectNetwork('6222210484747158313') === 'China UnionPay');
	});

	it('has a prefix of 622222 and a length of 19', function() {
		assert(detectNetwork('6222227539308713020') === 'China UnionPay');
	});

	it('has a prefix of 622223 and a length of 19', function() {
		assert(detectNetwork('6222231184140495620') === 'China UnionPay');
	});

	it('has a prefix of 622224 and a length of 19', function() {
		assert(detectNetwork('6222240994719325764') === 'China UnionPay');
	});

	it('has a prefix of 622225 and a length of 19', function() {
		assert(detectNetwork('6222252440545723701') === 'China UnionPay');
	});

	it('has a prefix of 622226 and a length of 19', function() {
		assert(detectNetwork('6222269228762114339') === 'China UnionPay');
	});

	it('has a prefix of 622227 and a length of 19', function() {
		assert(detectNetwork('6222276213773010002') === 'China UnionPay');
	});

	it('has a prefix of 622228 and a length of 19', function() {
		assert(detectNetwork('6222281889402409296') === 'China UnionPay');
	});

	it('has a prefix of 622229 and a length of 19', function() {
		assert(detectNetwork('6222293983868549492') === 'China UnionPay');
	});

	it('has a prefix of 622230 and a length of 19', function() {
		assert(detectNetwork('6222303728109995018') === 'China UnionPay');
	});

	it('has a prefix of 622231 and a length of 19', function() {
		assert(detectNetwork('6222310417020361042') === 'China UnionPay');
	});

	it('has a prefix of 622232 and a length of 19', function() {
		assert(detectNetwork('6222324540361203406') === 'China UnionPay');
	});

	it('has a prefix of 622233 and a length of 19', function() {
		assert(detectNetwork('6222330637767440077') === 'China UnionPay');
	});

	it('has a prefix of 622234 and a length of 19', function() {
		assert(detectNetwork('6222341328132083455') === 'China UnionPay');
	});

	it('has a prefix of 622235 and a length of 19', function() {
		assert(detectNetwork('6222355893484689325') === 'China UnionPay');
	});

	it('has a prefix of 622236 and a length of 19', function() {
		assert(detectNetwork('6222361352999672466') === 'China UnionPay');
	});

	it('has a prefix of 622237 and a length of 19', function() {
		assert(detectNetwork('6222374500598672407') === 'China UnionPay');
	});

	it('has a prefix of 622238 and a length of 19', function() {
		assert(detectNetwork('6222385901525219579') === 'China UnionPay');
	});

	it('has a prefix of 622239 and a length of 19', function() {
		assert(detectNetwork('6222397155782093345') === 'China UnionPay');
	});

	it('has a prefix of 622240 and a length of 19', function() {
		assert(detectNetwork('6222406274272331959') === 'China UnionPay');
	});

	it('has a prefix of 622241 and a length of 19', function() {
		assert(detectNetwork('6222410288380428850') === 'China UnionPay');
	});

	it('has a prefix of 622242 and a length of 19', function() {
		assert(detectNetwork('6222420959707585291') === 'China UnionPay');
	});

	it('has a prefix of 622243 and a length of 19', function() {
		assert(detectNetwork('6222439303118484161') === 'China UnionPay');
	});

	it('has a prefix of 622244 and a length of 19', function() {
		assert(detectNetwork('6222448400637426463') === 'China UnionPay');
	});

	it('has a prefix of 622245 and a length of 19', function() {
		assert(detectNetwork('6222457239929494693') === 'China UnionPay');
	});

	it('has a prefix of 622246 and a length of 19', function() {
		assert(detectNetwork('6222467837102305318') === 'China UnionPay');
	});

	it('has a prefix of 622247 and a length of 19', function() {
		assert(detectNetwork('6222477833057693552') === 'China UnionPay');
	});

	it('has a prefix of 622248 and a length of 19', function() {
		assert(detectNetwork('6222484435988797612') === 'China UnionPay');
	});

	it('has a prefix of 622249 and a length of 19', function() {
		assert(detectNetwork('6222497507364175466') === 'China UnionPay');
	});

	it('has a prefix of 622250 and a length of 19', function() {
		assert(detectNetwork('6222505651884048052') === 'China UnionPay');
	});

	it('has a prefix of 622251 and a length of 19', function() {
		assert(detectNetwork('6222517706572347467') === 'China UnionPay');
	});

	it('has a prefix of 622252 and a length of 19', function() {
		assert(detectNetwork('6222528022149745249') === 'China UnionPay');
	});

	it('has a prefix of 622253 and a length of 19', function() {
		assert(detectNetwork('6222538749176866861') === 'China UnionPay');
	});

	it('has a prefix of 622254 and a length of 19', function() {
		assert(detectNetwork('6222547329803781730') === 'China UnionPay');
	});

	it('has a prefix of 622255 and a length of 19', function() {
		assert(detectNetwork('6222554471838820328') === 'China UnionPay');
	});

	it('has a prefix of 622256 and a length of 19', function() {
		assert(detectNetwork('6222567611880661824') === 'China UnionPay');
	});

	it('has a prefix of 622257 and a length of 19', function() {
		assert(detectNetwork('6222577097732273261') === 'China UnionPay');
	});

	it('has a prefix of 622258 and a length of 19', function() {
		assert(detectNetwork('6222588273067830829') === 'China UnionPay');
	});

	it('has a prefix of 622259 and a length of 19', function() {
		assert(detectNetwork('6222593607581408232') === 'China UnionPay');
	});

	it('has a prefix of 622260 and a length of 19', function() {
		assert(detectNetwork('6222602233299822876') === 'China UnionPay');
	});

	it('has a prefix of 622261 and a length of 19', function() {
		assert(detectNetwork('6222616499533672006') === 'China UnionPay');
	});

	it('has a prefix of 622262 and a length of 19', function() {
		assert(detectNetwork('6222622694679811982') === 'China UnionPay');
	});

	it('has a prefix of 622263 and a length of 19', function() {
		assert(detectNetwork('6222632173231146702') === 'China UnionPay');
	});

	it('has a prefix of 622264 and a length of 19', function() {
		assert(detectNetwork('6222644569107712637') === 'China UnionPay');
	});

	it('has a prefix of 622265 and a length of 19', function() {
		assert(detectNetwork('6222657849292593170') === 'China UnionPay');
	});

	it('has a prefix of 622266 and a length of 19', function() {
		assert(detectNetwork('6222667027286334705') === 'China UnionPay');
	});

	it('has a prefix of 622267 and a length of 19', function() {
		assert(detectNetwork('6222676921679165967') === 'China UnionPay');
	});

	it('has a prefix of 622268 and a length of 19', function() {
		assert(detectNetwork('6222683729908482580') === 'China UnionPay');
	});

	it('has a prefix of 622269 and a length of 19', function() {
		assert(detectNetwork('6222697900902022488') === 'China UnionPay');
	});

	it('has a prefix of 622270 and a length of 19', function() {
		assert(detectNetwork('6222701374646024871') === 'China UnionPay');
	});

	it('has a prefix of 622271 and a length of 19', function() {
		assert(detectNetwork('6222718199374034771') === 'China UnionPay');
	});

	it('has a prefix of 622272 and a length of 19', function() {
		assert(detectNetwork('6222729612952797957') === 'China UnionPay');
	});

	it('has a prefix of 622273 and a length of 19', function() {
		assert(detectNetwork('6222734479170559219') === 'China UnionPay');
	});

	it('has a prefix of 622274 and a length of 19', function() {
		assert(detectNetwork('6222746894684071449') === 'China UnionPay');
	});

	it('has a prefix of 622275 and a length of 19', function() {
		assert(detectNetwork('6222753538797208918') === 'China UnionPay');
	});

	it('has a prefix of 622276 and a length of 19', function() {
		assert(detectNetwork('6222762684799656847') === 'China UnionPay');
	});

	it('has a prefix of 622277 and a length of 19', function() {
		assert(detectNetwork('6222773875383807155') === 'China UnionPay');
	});

	it('has a prefix of 622278 and a length of 19', function() {
		assert(detectNetwork('6222788823697856406') === 'China UnionPay');
	});

	it('has a prefix of 622279 and a length of 19', function() {
		assert(detectNetwork('6222793550625482168') === 'China UnionPay');
	});

	it('has a prefix of 622280 and a length of 19', function() {
		assert(detectNetwork('6222802546036582281') === 'China UnionPay');
	});

	it('has a prefix of 622281 and a length of 19', function() {
		assert(detectNetwork('6222810473731612627') === 'China UnionPay');
	});

	it('has a prefix of 622282 and a length of 19', function() {
		assert(detectNetwork('6222821332434202565') === 'China UnionPay');
	});

	it('has a prefix of 622283 and a length of 19', function() {
		assert(detectNetwork('6222830894825582030') === 'China UnionPay');
	});

	it('has a prefix of 622284 and a length of 19', function() {
		assert(detectNetwork('6222849048533388621') === 'China UnionPay');
	});

	it('has a prefix of 622285 and a length of 19', function() {
		assert(detectNetwork('6222859819578169421') === 'China UnionPay');
	});

	it('has a prefix of 622286 and a length of 19', function() {
		assert(detectNetwork('6222869030532587658') === 'China UnionPay');
	});

	it('has a prefix of 622287 and a length of 19', function() {
		assert(detectNetwork('6222876809344001053') === 'China UnionPay');
	});

	it('has a prefix of 622288 and a length of 19', function() {
		assert(detectNetwork('6222889473706475168') === 'China UnionPay');
	});

	it('has a prefix of 622289 and a length of 19', function() {
		assert(detectNetwork('6222890924622576192') === 'China UnionPay');
	});

	it('has a prefix of 622290 and a length of 19', function() {
		assert(detectNetwork('6222908698868289128') === 'China UnionPay');
	});

	it('has a prefix of 622291 and a length of 19', function() {
		assert(detectNetwork('6222914028892186975') === 'China UnionPay');
	});

	it('has a prefix of 622292 and a length of 19', function() {
		assert(detectNetwork('6222928652210616756') === 'China UnionPay');
	});

	it('has a prefix of 622293 and a length of 19', function() {
		assert(detectNetwork('6222938429333571730') === 'China UnionPay');
	});

	it('has a prefix of 622294 and a length of 19', function() {
		assert(detectNetwork('6222944554633130174') === 'China UnionPay');
	});

	it('has a prefix of 622295 and a length of 19', function() {
		assert(detectNetwork('6222955396675845375') === 'China UnionPay');
	});

	it('has a prefix of 622296 and a length of 19', function() {
		assert(detectNetwork('6222963711321194472') === 'China UnionPay');
	});

	it('has a prefix of 622297 and a length of 19', function() {
		assert(detectNetwork('6222977392043108591') === 'China UnionPay');
	});

	it('has a prefix of 622298 and a length of 19', function() {
		assert(detectNetwork('6222984097398855809') === 'China UnionPay');
	});

	it('has a prefix of 622299 and a length of 19', function() {
		assert(detectNetwork('6222993353597376917') === 'China UnionPay');
	});

	it('has a prefix of 622300 and a length of 19', function() {
		assert(detectNetwork('6223009934224444246') === 'China UnionPay');
	});

	it('has a prefix of 622301 and a length of 19', function() {
		assert(detectNetwork('6223018568959404997') === 'China UnionPay');
	});

	it('has a prefix of 622302 and a length of 19', function() {
		assert(detectNetwork('6223029071509652810') === 'China UnionPay');
	});

	it('has a prefix of 622303 and a length of 19', function() {
		assert(detectNetwork('6223037939289981180') === 'China UnionPay');
	});

	it('has a prefix of 622304 and a length of 19', function() {
		assert(detectNetwork('6223041332365205805') === 'China UnionPay');
	});

	it('has a prefix of 622305 and a length of 19', function() {
		assert(detectNetwork('6223059765612403823') === 'China UnionPay');
	});

	it('has a prefix of 622306 and a length of 19', function() {
		assert(detectNetwork('6223060184127166931') === 'China UnionPay');
	});

	it('has a prefix of 622307 and a length of 19', function() {
		assert(detectNetwork('6223074385039691568') === 'China UnionPay');
	});

	it('has a prefix of 622308 and a length of 19', function() {
		assert(detectNetwork('6223084133015496547') === 'China UnionPay');
	});

	it('has a prefix of 622309 and a length of 19', function() {
		assert(detectNetwork('6223099192855640228') === 'China UnionPay');
	});

	it('has a prefix of 622310 and a length of 19', function() {
		assert(detectNetwork('6223100171539467667') === 'China UnionPay');
	});

	it('has a prefix of 622311 and a length of 19', function() {
		assert(detectNetwork('6223115392651724540') === 'China UnionPay');
	});

	it('has a prefix of 622312 and a length of 19', function() {
		assert(detectNetwork('6223126079786602967') === 'China UnionPay');
	});

	it('has a prefix of 622313 and a length of 19', function() {
		assert(detectNetwork('6223137071140410723') === 'China UnionPay');
	});

	it('has a prefix of 622314 and a length of 19', function() {
		assert(detectNetwork('6223141700715664837') === 'China UnionPay');
	});

	it('has a prefix of 622315 and a length of 19', function() {
		assert(detectNetwork('6223159699033127857') === 'China UnionPay');
	});

	it('has a prefix of 622316 and a length of 19', function() {
		assert(detectNetwork('6223169813517889930') === 'China UnionPay');
	});

	it('has a prefix of 622317 and a length of 19', function() {
		assert(detectNetwork('6223179297740592196') === 'China UnionPay');
	});

	it('has a prefix of 622318 and a length of 19', function() {
		assert(detectNetwork('6223183372786778253') === 'China UnionPay');
	});

	it('has a prefix of 622319 and a length of 19', function() {
		assert(detectNetwork('6223193874088522940') === 'China UnionPay');
	});

	it('has a prefix of 622320 and a length of 19', function() {
		assert(detectNetwork('6223201052138877761') === 'China UnionPay');
	});

	it('has a prefix of 622321 and a length of 19', function() {
		assert(detectNetwork('6223214416070680584') === 'China UnionPay');
	});

	it('has a prefix of 622322 and a length of 19', function() {
		assert(detectNetwork('6223224587988167508') === 'China UnionPay');
	});

	it('has a prefix of 622323 and a length of 19', function() {
		assert(detectNetwork('6223236227869102843') === 'China UnionPay');
	});

	it('has a prefix of 622324 and a length of 19', function() {
		assert(detectNetwork('6223247016687812129') === 'China UnionPay');
	});

	it('has a prefix of 622325 and a length of 19', function() {
		assert(detectNetwork('6223257685191655858') === 'China UnionPay');
	});

	it('has a prefix of 622326 and a length of 19', function() {
		assert(detectNetwork('6223263346894183710') === 'China UnionPay');
	});

	it('has a prefix of 622327 and a length of 19', function() {
		assert(detectNetwork('6223279132333404229') === 'China UnionPay');
	});

	it('has a prefix of 622328 and a length of 19', function() {
		assert(detectNetwork('6223283060447222741') === 'China UnionPay');
	});

	it('has a prefix of 622329 and a length of 19', function() {
		assert(detectNetwork('6223296656837872931') === 'China UnionPay');
	});

	it('has a prefix of 622330 and a length of 19', function() {
		assert(detectNetwork('6223304896425876335') === 'China UnionPay');
	});

	it('has a prefix of 622331 and a length of 19', function() {
		assert(detectNetwork('6223318593841847755') === 'China UnionPay');
	});

	it('has a prefix of 622332 and a length of 19', function() {
		assert(detectNetwork('6223325803111697654') === 'China UnionPay');
	});

	it('has a prefix of 622333 and a length of 19', function() {
		assert(detectNetwork('6223331538862228116') === 'China UnionPay');
	});

	it('has a prefix of 622334 and a length of 19', function() {
		assert(detectNetwork('6223346523344540998') === 'China UnionPay');
	});

	it('has a prefix of 622335 and a length of 19', function() {
		assert(detectNetwork('6223353579049403738') === 'China UnionPay');
	});

	it('has a prefix of 622336 and a length of 19', function() {
		assert(detectNetwork('6223365021261323798') === 'China UnionPay');
	});

	it('has a prefix of 622337 and a length of 19', function() {
		assert(detectNetwork('6223375191151422376') === 'China UnionPay');
	});

	it('has a prefix of 622338 and a length of 19', function() {
		assert(detectNetwork('6223380837332252221') === 'China UnionPay');
	});

	it('has a prefix of 622339 and a length of 19', function() {
		assert(detectNetwork('6223399548561927135') === 'China UnionPay');
	});

	it('has a prefix of 622340 and a length of 19', function() {
		assert(detectNetwork('6223400089018401871') === 'China UnionPay');
	});

	it('has a prefix of 622341 and a length of 19', function() {
		assert(detectNetwork('6223416094602013006') === 'China UnionPay');
	});

	it('has a prefix of 622342 and a length of 19', function() {
		assert(detectNetwork('6223422567210470627') === 'China UnionPay');
	});

	it('has a prefix of 622343 and a length of 19', function() {
		assert(detectNetwork('6223436618680833192') === 'China UnionPay');
	});

	it('has a prefix of 622344 and a length of 19', function() {
		assert(detectNetwork('6223447618195537635') === 'China UnionPay');
	});

	it('has a prefix of 622345 and a length of 19', function() {
		assert(detectNetwork('6223459117119823565') === 'China UnionPay');
	});

	it('has a prefix of 622346 and a length of 19', function() {
		assert(detectNetwork('6223461771553163760') === 'China UnionPay');
	});

	it('has a prefix of 622347 and a length of 19', function() {
		assert(detectNetwork('6223476778383501753') === 'China UnionPay');
	});

	it('has a prefix of 622348 and a length of 19', function() {
		assert(detectNetwork('6223485660616051351') === 'China UnionPay');
	});

	it('has a prefix of 622349 and a length of 19', function() {
		assert(detectNetwork('6223491634560960830') === 'China UnionPay');
	});

	it('has a prefix of 622350 and a length of 19', function() {
		assert(detectNetwork('6223504903090538295') === 'China UnionPay');
	});

	it('has a prefix of 622351 and a length of 19', function() {
		assert(detectNetwork('6223517491734734223') === 'China UnionPay');
	});

	it('has a prefix of 622352 and a length of 19', function() {
		assert(detectNetwork('6223527071979322934') === 'China UnionPay');
	});

	it('has a prefix of 622353 and a length of 19', function() {
		assert(detectNetwork('6223531423228939093') === 'China UnionPay');
	});

	it('has a prefix of 622354 and a length of 19', function() {
		assert(detectNetwork('6223547159556239425') === 'China UnionPay');
	});

	it('has a prefix of 622355 and a length of 19', function() {
		assert(detectNetwork('6223559596769322394') === 'China UnionPay');
	});

	it('has a prefix of 622356 and a length of 19', function() {
		assert(detectNetwork('6223562258658113146') === 'China UnionPay');
	});

	it('has a prefix of 622357 and a length of 19', function() {
		assert(detectNetwork('6223575210464628538') === 'China UnionPay');
	});

	it('has a prefix of 622358 and a length of 19', function() {
		assert(detectNetwork('6223585725852709761') === 'China UnionPay');
	});

	it('has a prefix of 622359 and a length of 19', function() {
		assert(detectNetwork('6223593975478525620') === 'China UnionPay');
	});

	it('has a prefix of 622360 and a length of 19', function() {
		assert(detectNetwork('6223601559779086828') === 'China UnionPay');
	});

	it('has a prefix of 622361 and a length of 19', function() {
		assert(detectNetwork('6223615939919249448') === 'China UnionPay');
	});

	it('has a prefix of 622362 and a length of 19', function() {
		assert(detectNetwork('6223627035927502391') === 'China UnionPay');
	});

	it('has a prefix of 622363 and a length of 19', function() {
		assert(detectNetwork('6223638436018915507') === 'China UnionPay');
	});

	it('has a prefix of 622364 and a length of 19', function() {
		assert(detectNetwork('6223644477289674757') === 'China UnionPay');
	});

	it('has a prefix of 622365 and a length of 19', function() {
		assert(detectNetwork('6223658894887423422') === 'China UnionPay');
	});

	it('has a prefix of 622366 and a length of 19', function() {
		assert(detectNetwork('6223667497680043983') === 'China UnionPay');
	});

	it('has a prefix of 622367 and a length of 19', function() {
		assert(detectNetwork('6223670528160889725') === 'China UnionPay');
	});

	it('has a prefix of 622368 and a length of 19', function() {
		assert(detectNetwork('6223680522835789170') === 'China UnionPay');
	});

	it('has a prefix of 622369 and a length of 19', function() {
		assert(detectNetwork('6223695676513027600') === 'China UnionPay');
	});

	it('has a prefix of 622370 and a length of 19', function() {
		assert(detectNetwork('6223708476211202420') === 'China UnionPay');
	});

	it('has a prefix of 622371 and a length of 19', function() {
		assert(detectNetwork('6223717737257031537') === 'China UnionPay');
	});

	it('has a prefix of 622372 and a length of 19', function() {
		assert(detectNetwork('6223728011525688004') === 'China UnionPay');
	});

	it('has a prefix of 622373 and a length of 19', function() {
		assert(detectNetwork('6223730930371422891') === 'China UnionPay');
	});

	it('has a prefix of 622374 and a length of 19', function() {
		assert(detectNetwork('6223740025891349267') === 'China UnionPay');
	});

	it('has a prefix of 622375 and a length of 19', function() {
		assert(detectNetwork('6223756843134120620') === 'China UnionPay');
	});

	it('has a prefix of 622376 and a length of 19', function() {
		assert(detectNetwork('6223767989911394853') === 'China UnionPay');
	});

	it('has a prefix of 622377 and a length of 19', function() {
		assert(detectNetwork('6223777448611357583') === 'China UnionPay');
	});

	it('has a prefix of 622378 and a length of 19', function() {
		assert(detectNetwork('6223784387949047468') === 'China UnionPay');
	});

	it('has a prefix of 622379 and a length of 19', function() {
		assert(detectNetwork('6223793598450807813') === 'China UnionPay');
	});

	it('has a prefix of 622380 and a length of 19', function() {
		assert(detectNetwork('6223800109622285159') === 'China UnionPay');
	});

	it('has a prefix of 622381 and a length of 19', function() {
		assert(detectNetwork('6223810258091432903') === 'China UnionPay');
	});

	it('has a prefix of 622382 and a length of 19', function() {
		assert(detectNetwork('6223824116090350236') === 'China UnionPay');
	});

	it('has a prefix of 622383 and a length of 19', function() {
		assert(detectNetwork('6223838417562697404') === 'China UnionPay');
	});

	it('has a prefix of 622384 and a length of 19', function() {
		assert(detectNetwork('6223843941055309253') === 'China UnionPay');
	});

	it('has a prefix of 622385 and a length of 19', function() {
		assert(detectNetwork('6223856410591919126') === 'China UnionPay');
	});

	it('has a prefix of 622386 and a length of 19', function() {
		assert(detectNetwork('6223863761598530584') === 'China UnionPay');
	});

	it('has a prefix of 622387 and a length of 19', function() {
		assert(detectNetwork('6223872206283972501') === 'China UnionPay');
	});

	it('has a prefix of 622388 and a length of 19', function() {
		assert(detectNetwork('6223884175800312889') === 'China UnionPay');
	});

	it('has a prefix of 622389 and a length of 19', function() {
		assert(detectNetwork('6223892571830841373') === 'China UnionPay');
	});

	it('has a prefix of 622390 and a length of 19', function() {
		assert(detectNetwork('6223903247940320861') === 'China UnionPay');
	});

	it('has a prefix of 622391 and a length of 19', function() {
		assert(detectNetwork('6223912398499715582') === 'China UnionPay');
	});

	it('has a prefix of 622392 and a length of 19', function() {
		assert(detectNetwork('6223929681745293562') === 'China UnionPay');
	});

	it('has a prefix of 622393 and a length of 19', function() {
		assert(detectNetwork('6223938977968129953') === 'China UnionPay');
	});

	it('has a prefix of 622394 and a length of 19', function() {
		assert(detectNetwork('6223949756276102239') === 'China UnionPay');
	});

	it('has a prefix of 622395 and a length of 19', function() {
		assert(detectNetwork('6223951183199204923') === 'China UnionPay');
	});

	it('has a prefix of 622396 and a length of 19', function() {
		assert(detectNetwork('6223962160427906911') === 'China UnionPay');
	});

	it('has a prefix of 622397 and a length of 19', function() {
		assert(detectNetwork('6223978215361002453') === 'China UnionPay');
	});

	it('has a prefix of 622398 and a length of 19', function() {
		assert(detectNetwork('6223983972500406576') === 'China UnionPay');
	});

	it('has a prefix of 622399 and a length of 19', function() {
		assert(detectNetwork('6223991620124493716') === 'China UnionPay');
	});

	it('has a prefix of 622400 and a length of 19', function() {
		assert(detectNetwork('6224005341012250927') === 'China UnionPay');
	});

	it('has a prefix of 622401 and a length of 19', function() {
		assert(detectNetwork('6224011551521905680') === 'China UnionPay');
	});

	it('has a prefix of 622402 and a length of 19', function() {
		assert(detectNetwork('6224028400550922708') === 'China UnionPay');
	});

	it('has a prefix of 622403 and a length of 19', function() {
		assert(detectNetwork('6224039584047649722') === 'China UnionPay');
	});

	it('has a prefix of 622404 and a length of 19', function() {
		assert(detectNetwork('6224045224564106625') === 'China UnionPay');
	});

	it('has a prefix of 622405 and a length of 19', function() {
		assert(detectNetwork('6224057951802957860') === 'China UnionPay');
	});

	it('has a prefix of 622406 and a length of 19', function() {
		assert(detectNetwork('6224064931173135281') === 'China UnionPay');
	});

	it('has a prefix of 622407 and a length of 19', function() {
		assert(detectNetwork('6224073723926884500') === 'China UnionPay');
	});

	it('has a prefix of 622408 and a length of 19', function() {
		assert(detectNetwork('6224087275600198231') === 'China UnionPay');
	});

	it('has a prefix of 622409 and a length of 19', function() {
		assert(detectNetwork('6224092098173617662') === 'China UnionPay');
	});

	it('has a prefix of 622410 and a length of 19', function() {
		assert(detectNetwork('6224106775651056265') === 'China UnionPay');
	});

	it('has a prefix of 622411 and a length of 19', function() {
		assert(detectNetwork('6224112490959628364') === 'China UnionPay');
	});

	it('has a prefix of 622412 and a length of 19', function() {
		assert(detectNetwork('6224126063259104955') === 'China UnionPay');
	});

	it('has a prefix of 622413 and a length of 19', function() {
		assert(detectNetwork('6224135499803949708') === 'China UnionPay');
	});

	it('has a prefix of 622414 and a length of 19', function() {
		assert(detectNetwork('6224148303833840498') === 'China UnionPay');
	});

	it('has a prefix of 622415 and a length of 19', function() {
		assert(detectNetwork('6224155863399554162') === 'China UnionPay');
	});

	it('has a prefix of 622416 and a length of 19', function() {
		assert(detectNetwork('6224165707659693147') === 'China UnionPay');
	});

	it('has a prefix of 622417 and a length of 19', function() {
		assert(detectNetwork('6224173023891897559') === 'China UnionPay');
	});

	it('has a prefix of 622418 and a length of 19', function() {
		assert(detectNetwork('6224182692137474615') === 'China UnionPay');
	});

	it('has a prefix of 622419 and a length of 19', function() {
		assert(detectNetwork('6224190103138829049') === 'China UnionPay');
	});

	it('has a prefix of 622420 and a length of 19', function() {
		assert(detectNetwork('6224202613038539587') === 'China UnionPay');
	});

	it('has a prefix of 622421 and a length of 19', function() {
		assert(detectNetwork('6224213991655282089') === 'China UnionPay');
	});

	it('has a prefix of 622422 and a length of 19', function() {
		assert(detectNetwork('6224225463054864337') === 'China UnionPay');
	});

	it('has a prefix of 622423 and a length of 19', function() {
		assert(detectNetwork('6224237131133664229') === 'China UnionPay');
	});

	it('has a prefix of 622424 and a length of 19', function() {
		assert(detectNetwork('6224246922829185994') === 'China UnionPay');
	});

	it('has a prefix of 622425 and a length of 19', function() {
		assert(detectNetwork('6224258450556522144') === 'China UnionPay');
	});

	it('has a prefix of 622426 and a length of 19', function() {
		assert(detectNetwork('6224265605382981805') === 'China UnionPay');
	});

	it('has a prefix of 622427 and a length of 19', function() {
		assert(detectNetwork('6224274384058649246') === 'China UnionPay');
	});

	it('has a prefix of 622428 and a length of 19', function() {
		assert(detectNetwork('6224289401833924204') === 'China UnionPay');
	});

	it('has a prefix of 622429 and a length of 19', function() {
		assert(detectNetwork('6224291021344610818') === 'China UnionPay');
	});

	it('has a prefix of 622430 and a length of 19', function() {
		assert(detectNetwork('6224308299057668926') === 'China UnionPay');
	});

	it('has a prefix of 622431 and a length of 19', function() {
		assert(detectNetwork('6224314490342707621') === 'China UnionPay');
	});

	it('has a prefix of 622432 and a length of 19', function() {
		assert(detectNetwork('6224323695267626645') === 'China UnionPay');
	});

	it('has a prefix of 622433 and a length of 19', function() {
		assert(detectNetwork('6224333073414076108') === 'China UnionPay');
	});

	it('has a prefix of 622434 and a length of 19', function() {
		assert(detectNetwork('6224346386044999554') === 'China UnionPay');
	});

	it('has a prefix of 622435 and a length of 19', function() {
		assert(detectNetwork('6224354419923112569') === 'China UnionPay');
	});

	it('has a prefix of 622436 and a length of 19', function() {
		assert(detectNetwork('6224369737016395862') === 'China UnionPay');
	});

	it('has a prefix of 622437 and a length of 19', function() {
		assert(detectNetwork('6224370684443727625') === 'China UnionPay');
	});

	it('has a prefix of 622438 and a length of 19', function() {
		assert(detectNetwork('6224387780098638331') === 'China UnionPay');
	});

	it('has a prefix of 622439 and a length of 19', function() {
		assert(detectNetwork('6224399162899598517') === 'China UnionPay');
	});

	it('has a prefix of 622440 and a length of 19', function() {
		assert(detectNetwork('6224402093037321366') === 'China UnionPay');
	});

	it('has a prefix of 622441 and a length of 19', function() {
		assert(detectNetwork('6224419999744519995') === 'China UnionPay');
	});

	it('has a prefix of 622442 and a length of 19', function() {
		assert(detectNetwork('6224429011624787132') === 'China UnionPay');
	});

	it('has a prefix of 622443 and a length of 19', function() {
		assert(detectNetwork('6224435650884523028') === 'China UnionPay');
	});

	it('has a prefix of 622444 and a length of 19', function() {
		assert(detectNetwork('6224441394588180929') === 'China UnionPay');
	});

	it('has a prefix of 622445 and a length of 19', function() {
		assert(detectNetwork('6224454767360296221') === 'China UnionPay');
	});

	it('has a prefix of 622446 and a length of 19', function() {
		assert(detectNetwork('6224464903234758302') === 'China UnionPay');
	});

	it('has a prefix of 622447 and a length of 19', function() {
		assert(detectNetwork('6224478224988032551') === 'China UnionPay');
	});

	it('has a prefix of 622448 and a length of 19', function() {
		assert(detectNetwork('6224484130309586742') === 'China UnionPay');
	});

	it('has a prefix of 622449 and a length of 19', function() {
		assert(detectNetwork('6224494094289389805') === 'China UnionPay');
	});

	it('has a prefix of 622450 and a length of 19', function() {
		assert(detectNetwork('6224505744511624928') === 'China UnionPay');
	});

	it('has a prefix of 622451 and a length of 19', function() {
		assert(detectNetwork('6224514801645570632') === 'China UnionPay');
	});

	it('has a prefix of 622452 and a length of 19', function() {
		assert(detectNetwork('6224522891587460811') === 'China UnionPay');
	});

	it('has a prefix of 622453 and a length of 19', function() {
		assert(detectNetwork('6224536844624686726') === 'China UnionPay');
	});

	it('has a prefix of 622454 and a length of 19', function() {
		assert(detectNetwork('6224549813684176238') === 'China UnionPay');
	});

	it('has a prefix of 622455 and a length of 19', function() {
		assert(detectNetwork('6224555937327808246') === 'China UnionPay');
	});

	it('has a prefix of 622456 and a length of 19', function() {
		assert(detectNetwork('6224568729885432555') === 'China UnionPay');
	});

	it('has a prefix of 622457 and a length of 19', function() {
		assert(detectNetwork('6224572813266711407') === 'China UnionPay');
	});

	it('has a prefix of 622458 and a length of 19', function() {
		assert(detectNetwork('6224582310753990807') === 'China UnionPay');
	});

	it('has a prefix of 622459 and a length of 19', function() {
		assert(detectNetwork('6224591443046334517') === 'China UnionPay');
	});

	it('has a prefix of 622460 and a length of 19', function() {
		assert(detectNetwork('6224604348449938304') === 'China UnionPay');
	});

	it('has a prefix of 622461 and a length of 19', function() {
		assert(detectNetwork('6224611396824800209') === 'China UnionPay');
	});

	it('has a prefix of 622462 and a length of 19', function() {
		assert(detectNetwork('6224629777238039924') === 'China UnionPay');
	});

	it('has a prefix of 622463 and a length of 19', function() {
		assert(detectNetwork('6224630976840854467') === 'China UnionPay');
	});

	it('has a prefix of 622464 and a length of 19', function() {
		assert(detectNetwork('6224643970460040073') === 'China UnionPay');
	});

	it('has a prefix of 622465 and a length of 19', function() {
		assert(detectNetwork('6224655394647691522') === 'China UnionPay');
	});

	it('has a prefix of 622466 and a length of 19', function() {
		assert(detectNetwork('6224664809514569541') === 'China UnionPay');
	});

	it('has a prefix of 622467 and a length of 19', function() {
		assert(detectNetwork('6224677811244784805') === 'China UnionPay');
	});

	it('has a prefix of 622468 and a length of 19', function() {
		assert(detectNetwork('6224689157395381126') === 'China UnionPay');
	});

	it('has a prefix of 622469 and a length of 19', function() {
		assert(detectNetwork('6224699707160138796') === 'China UnionPay');
	});

	it('has a prefix of 622470 and a length of 19', function() {
		assert(detectNetwork('6224708464450946429') === 'China UnionPay');
	});

	it('has a prefix of 622471 and a length of 19', function() {
		assert(detectNetwork('6224713332464255333') === 'China UnionPay');
	});

	it('has a prefix of 622472 and a length of 19', function() {
		assert(detectNetwork('6224724100077243239') === 'China UnionPay');
	});

	it('has a prefix of 622473 and a length of 19', function() {
		assert(detectNetwork('6224738318052525786') === 'China UnionPay');
	});

	it('has a prefix of 622474 and a length of 19', function() {
		assert(detectNetwork('6224742261960107566') === 'China UnionPay');
	});

	it('has a prefix of 622475 and a length of 19', function() {
		assert(detectNetwork('6224753259443771417') === 'China UnionPay');
	});

	it('has a prefix of 622476 and a length of 19', function() {
		assert(detectNetwork('6224768660018121938') === 'China UnionPay');
	});

	it('has a prefix of 622477 and a length of 19', function() {
		assert(detectNetwork('6224774818342369118') === 'China UnionPay');
	});

	it('has a prefix of 622478 and a length of 19', function() {
		assert(detectNetwork('6224783583664256279') === 'China UnionPay');
	});

	it('has a prefix of 622479 and a length of 19', function() {
		assert(detectNetwork('6224792575920651039') === 'China UnionPay');
	});

	it('has a prefix of 622480 and a length of 19', function() {
		assert(detectNetwork('6224802154971522763') === 'China UnionPay');
	});

	it('has a prefix of 622481 and a length of 19', function() {
		assert(detectNetwork('6224810611503270839') === 'China UnionPay');
	});

	it('has a prefix of 622482 and a length of 19', function() {
		assert(detectNetwork('6224828930462065506') === 'China UnionPay');
	});

	it('has a prefix of 622483 and a length of 19', function() {
		assert(detectNetwork('6224831502137813507') === 'China UnionPay');
	});

	it('has a prefix of 622484 and a length of 19', function() {
		assert(detectNetwork('6224847893134728510') === 'China UnionPay');
	});

	it('has a prefix of 622485 and a length of 19', function() {
		assert(detectNetwork('6224853832432707231') === 'China UnionPay');
	});

	it('has a prefix of 622486 and a length of 19', function() {
		assert(detectNetwork('6224866558719280790') === 'China UnionPay');
	});

	it('has a prefix of 622487 and a length of 19', function() {
		assert(detectNetwork('6224876084948850200') === 'China UnionPay');
	});

	it('has a prefix of 622488 and a length of 19', function() {
		assert(detectNetwork('6224880756489723719') === 'China UnionPay');
	});

	it('has a prefix of 622489 and a length of 19', function() {
		assert(detectNetwork('6224892315692248237') === 'China UnionPay');
	});

	it('has a prefix of 622490 and a length of 19', function() {
		assert(detectNetwork('6224904045828979959') === 'China UnionPay');
	});

	it('has a prefix of 622491 and a length of 19', function() {
		assert(detectNetwork('6224912540911139585') === 'China UnionPay');
	});

	it('has a prefix of 622492 and a length of 19', function() {
		assert(detectNetwork('6224921096222058339') === 'China UnionPay');
	});

	it('has a prefix of 622493 and a length of 19', function() {
		assert(detectNetwork('6224935138133353431') === 'China UnionPay');
	});

	it('has a prefix of 622494 and a length of 19', function() {
		assert(detectNetwork('6224940842016679502') === 'China UnionPay');
	});

	it('has a prefix of 622495 and a length of 19', function() {
		assert(detectNetwork('6224950131229980084') === 'China UnionPay');
	});

	it('has a prefix of 622496 and a length of 19', function() {
		assert(detectNetwork('6224968456842113876') === 'China UnionPay');
	});

	it('has a prefix of 622497 and a length of 19', function() {
		assert(detectNetwork('6224971311585486680') === 'China UnionPay');
	});

	it('has a prefix of 622498 and a length of 19', function() {
		assert(detectNetwork('6224983587081782395') === 'China UnionPay');
	});

	it('has a prefix of 622499 and a length of 19', function() {
		assert(detectNetwork('6224992031531523013') === 'China UnionPay');
	});

	it('has a prefix of 622500 and a length of 19', function() {
		assert(detectNetwork('6225007026855412394') === 'China UnionPay');
	});

	it('has a prefix of 622501 and a length of 19', function() {
		assert(detectNetwork('6225013748954486116') === 'China UnionPay');
	});

	it('has a prefix of 622502 and a length of 19', function() {
		assert(detectNetwork('6225021803494248925') === 'China UnionPay');
	});

	it('has a prefix of 622503 and a length of 19', function() {
		assert(detectNetwork('6225035956337732248') === 'China UnionPay');
	});

	it('has a prefix of 622504 and a length of 19', function() {
		assert(detectNetwork('6225044395043487756') === 'China UnionPay');
	});

	it('has a prefix of 622505 and a length of 19', function() {
		assert(detectNetwork('6225059628713345968') === 'China UnionPay');
	});

	it('has a prefix of 622506 and a length of 19', function() {
		assert(detectNetwork('6225060303076041696') === 'China UnionPay');
	});

	it('has a prefix of 622507 and a length of 19', function() {
		assert(detectNetwork('6225074862166827612') === 'China UnionPay');
	});

	it('has a prefix of 622508 and a length of 19', function() {
		assert(detectNetwork('6225089088794737500') === 'China UnionPay');
	});

	it('has a prefix of 622509 and a length of 19', function() {
		assert(detectNetwork('6225090223653103896') === 'China UnionPay');
	});

	it('has a prefix of 622510 and a length of 19', function() {
		assert(detectNetwork('6225107733785553631') === 'China UnionPay');
	});

	it('has a prefix of 622511 and a length of 19', function() {
		assert(detectNetwork('6225113681152998884') === 'China UnionPay');
	});

	it('has a prefix of 622512 and a length of 19', function() {
		assert(detectNetwork('6225124264202886702') === 'China UnionPay');
	});

	it('has a prefix of 622513 and a length of 19', function() {
		assert(detectNetwork('6225139116847719180') === 'China UnionPay');
	});

	it('has a prefix of 622514 and a length of 19', function() {
		assert(detectNetwork('6225149732414389974') === 'China UnionPay');
	});

	it('has a prefix of 622515 and a length of 19', function() {
		assert(detectNetwork('6225150773137625794') === 'China UnionPay');
	});

	it('has a prefix of 622516 and a length of 19', function() {
		assert(detectNetwork('6225164076679757614') === 'China UnionPay');
	});

	it('has a prefix of 622517 and a length of 19', function() {
		assert(detectNetwork('6225179827249583321') === 'China UnionPay');
	});

	it('has a prefix of 622518 and a length of 19', function() {
		assert(detectNetwork('6225188301073496134') === 'China UnionPay');
	});

	it('has a prefix of 622519 and a length of 19', function() {
		assert(detectNetwork('6225196715809483389') === 'China UnionPay');
	});

	it('has a prefix of 622520 and a length of 19', function() {
		assert(detectNetwork('6225202120854168517') === 'China UnionPay');
	});

	it('has a prefix of 622521 and a length of 19', function() {
		assert(detectNetwork('6225212577694680022') === 'China UnionPay');
	});

	it('has a prefix of 622522 and a length of 19', function() {
		assert(detectNetwork('6225223982430643084') === 'China UnionPay');
	});

	it('has a prefix of 622523 and a length of 19', function() {
		assert(detectNetwork('6225238440938084697') === 'China UnionPay');
	});

	it('has a prefix of 622524 and a length of 19', function() {
		assert(detectNetwork('6225243166954242640') === 'China UnionPay');
	});

	it('has a prefix of 622525 and a length of 19', function() {
		assert(detectNetwork('6225258857927387642') === 'China UnionPay');
	});

	it('has a prefix of 622526 and a length of 19', function() {
		assert(detectNetwork('6225263450125693341') === 'China UnionPay');
	});

	it('has a prefix of 622527 and a length of 19', function() {
		assert(detectNetwork('6225271364698957987') === 'China UnionPay');
	});

	it('has a prefix of 622528 and a length of 19', function() {
		assert(detectNetwork('6225282033812518097') === 'China UnionPay');
	});

	it('has a prefix of 622529 and a length of 19', function() {
		assert(detectNetwork('6225299509305734048') === 'China UnionPay');
	});

	it('has a prefix of 622530 and a length of 19', function() {
		assert(detectNetwork('6225306155346232455') === 'China UnionPay');
	});

	it('has a prefix of 622531 and a length of 19', function() {
		assert(detectNetwork('6225317166486053569') === 'China UnionPay');
	});

	it('has a prefix of 622532 and a length of 19', function() {
		assert(detectNetwork('6225324982580591726') === 'China UnionPay');
	});

	it('has a prefix of 622533 and a length of 19', function() {
		assert(detectNetwork('6225331053905743825') === 'China UnionPay');
	});

	it('has a prefix of 622534 and a length of 19', function() {
		assert(detectNetwork('6225343225036418225') === 'China UnionPay');
	});

	it('has a prefix of 622535 and a length of 19', function() {
		assert(detectNetwork('6225354378843716823') === 'China UnionPay');
	});

	it('has a prefix of 622536 and a length of 19', function() {
		assert(detectNetwork('6225360182722233124') === 'China UnionPay');
	});

	it('has a prefix of 622537 and a length of 19', function() {
		assert(detectNetwork('6225377902882117001') === 'China UnionPay');
	});

	it('has a prefix of 622538 and a length of 19', function() {
		assert(detectNetwork('6225388353843720153') === 'China UnionPay');
	});

	it('has a prefix of 622539 and a length of 19', function() {
		assert(detectNetwork('6225392940824156999') === 'China UnionPay');
	});

	it('has a prefix of 622540 and a length of 19', function() {
		assert(detectNetwork('6225400607354707864') === 'China UnionPay');
	});

	it('has a prefix of 622541 and a length of 19', function() {
		assert(detectNetwork('6225417171177589484') === 'China UnionPay');
	});

	it('has a prefix of 622542 and a length of 19', function() {
		assert(detectNetwork('6225422395938337483') === 'China UnionPay');
	});

	it('has a prefix of 622543 and a length of 19', function() {
		assert(detectNetwork('6225437622523072575') === 'China UnionPay');
	});

	it('has a prefix of 622544 and a length of 19', function() {
		assert(detectNetwork('6225440127347194614') === 'China UnionPay');
	});

	it('has a prefix of 622545 and a length of 19', function() {
		assert(detectNetwork('6225453024005222020') === 'China UnionPay');
	});

	it('has a prefix of 622546 and a length of 19', function() {
		assert(detectNetwork('6225461134853832079') === 'China UnionPay');
	});

	it('has a prefix of 622547 and a length of 19', function() {
		assert(detectNetwork('6225475812361711357') === 'China UnionPay');
	});

	it('has a prefix of 622548 and a length of 19', function() {
		assert(detectNetwork('6225483627835509362') === 'China UnionPay');
	});

	it('has a prefix of 622549 and a length of 19', function() {
		assert(detectNetwork('6225499423523869175') === 'China UnionPay');
	});

	it('has a prefix of 622550 and a length of 19', function() {
		assert(detectNetwork('6225505334024538947') === 'China UnionPay');
	});

	it('has a prefix of 622551 and a length of 19', function() {
		assert(detectNetwork('6225516195612110862') === 'China UnionPay');
	});

	it('has a prefix of 622552 and a length of 19', function() {
		assert(detectNetwork('6225528771454430195') === 'China UnionPay');
	});

	it('has a prefix of 622553 and a length of 19', function() {
		assert(detectNetwork('6225536254849841360') === 'China UnionPay');
	});

	it('has a prefix of 622554 and a length of 19', function() {
		assert(detectNetwork('6225548776356408954') === 'China UnionPay');
	});

	it('has a prefix of 622555 and a length of 19', function() {
		assert(detectNetwork('6225553916861415701') === 'China UnionPay');
	});

	it('has a prefix of 622556 and a length of 19', function() {
		assert(detectNetwork('6225568925358448884') === 'China UnionPay');
	});

	it('has a prefix of 622557 and a length of 19', function() {
		assert(detectNetwork('6225572610187764818') === 'China UnionPay');
	});

	it('has a prefix of 622558 and a length of 19', function() {
		assert(detectNetwork('6225587073652109840') === 'China UnionPay');
	});

	it('has a prefix of 622559 and a length of 19', function() {
		assert(detectNetwork('6225598693843602386') === 'China UnionPay');
	});

	it('has a prefix of 622560 and a length of 19', function() {
		assert(detectNetwork('6225609796470727984') === 'China UnionPay');
	});

	it('has a prefix of 622561 and a length of 19', function() {
		assert(detectNetwork('6225614644228467261') === 'China UnionPay');
	});

	it('has a prefix of 622562 and a length of 19', function() {
		assert(detectNetwork('6225624741164761382') === 'China UnionPay');
	});

	it('has a prefix of 622563 and a length of 19', function() {
		assert(detectNetwork('6225631887008722822') === 'China UnionPay');
	});

	it('has a prefix of 622564 and a length of 19', function() {
		assert(detectNetwork('6225649884635174338') === 'China UnionPay');
	});

	it('has a prefix of 622565 and a length of 19', function() {
		assert(detectNetwork('6225657385738579955') === 'China UnionPay');
	});

	it('has a prefix of 622566 and a length of 19', function() {
		assert(detectNetwork('6225663883280733371') === 'China UnionPay');
	});

	it('has a prefix of 622567 and a length of 19', function() {
		assert(detectNetwork('6225677774135927068') === 'China UnionPay');
	});

	it('has a prefix of 622568 and a length of 19', function() {
		assert(detectNetwork('6225683358196144012') === 'China UnionPay');
	});

	it('has a prefix of 622569 and a length of 19', function() {
		assert(detectNetwork('6225695730944793345') === 'China UnionPay');
	});

	it('has a prefix of 622570 and a length of 19', function() {
		assert(detectNetwork('6225709420952090208') === 'China UnionPay');
	});

	it('has a prefix of 622571 and a length of 19', function() {
		assert(detectNetwork('6225716441493164561') === 'China UnionPay');
	});

	it('has a prefix of 622572 and a length of 19', function() {
		assert(detectNetwork('6225722634743288406') === 'China UnionPay');
	});

	it('has a prefix of 622573 and a length of 19', function() {
		assert(detectNetwork('6225738814552739691') === 'China UnionPay');
	});

	it('has a prefix of 622574 and a length of 19', function() {
		assert(detectNetwork('6225749304295988162') === 'China UnionPay');
	});

	it('has a prefix of 622575 and a length of 19', function() {
		assert(detectNetwork('6225755074891312544') === 'China UnionPay');
	});

	it('has a prefix of 622576 and a length of 19', function() {
		assert(detectNetwork('6225763990705177627') === 'China UnionPay');
	});

	it('has a prefix of 622577 and a length of 19', function() {
		assert(detectNetwork('6225773627503262320') === 'China UnionPay');
	});

	it('has a prefix of 622578 and a length of 19', function() {
		assert(detectNetwork('6225783535824539955') === 'China UnionPay');
	});

	it('has a prefix of 622579 and a length of 19', function() {
		assert(detectNetwork('6225795865371036632') === 'China UnionPay');
	});

	it('has a prefix of 622580 and a length of 19', function() {
		assert(detectNetwork('6225805455239581720') === 'China UnionPay');
	});

	it('has a prefix of 622581 and a length of 19', function() {
		assert(detectNetwork('6225811056438793828') === 'China UnionPay');
	});

	it('has a prefix of 622582 and a length of 19', function() {
		assert(detectNetwork('6225828065566123313') === 'China UnionPay');
	});

	it('has a prefix of 622583 and a length of 19', function() {
		assert(detectNetwork('6225832205672675975') === 'China UnionPay');
	});

	it('has a prefix of 622584 and a length of 19', function() {
		assert(detectNetwork('6225840954199019882') === 'China UnionPay');
	});

	it('has a prefix of 622585 and a length of 19', function() {
		assert(detectNetwork('6225851747022797463') === 'China UnionPay');
	});

	it('has a prefix of 622586 and a length of 19', function() {
		assert(detectNetwork('6225864857295966832') === 'China UnionPay');
	});

	it('has a prefix of 622587 and a length of 19', function() {
		assert(detectNetwork('6225876140252166055') === 'China UnionPay');
	});

	it('has a prefix of 622588 and a length of 19', function() {
		assert(detectNetwork('6225882951248595520') === 'China UnionPay');
	});

	it('has a prefix of 622589 and a length of 19', function() {
		assert(detectNetwork('6225892835203268459') === 'China UnionPay');
	});

	it('has a prefix of 622590 and a length of 19', function() {
		assert(detectNetwork('6225906841503919120') === 'China UnionPay');
	});

	it('has a prefix of 622591 and a length of 19', function() {
		assert(detectNetwork('6225915528224002093') === 'China UnionPay');
	});

	it('has a prefix of 622592 and a length of 19', function() {
		assert(detectNetwork('6225922672438206341') === 'China UnionPay');
	});

	it('has a prefix of 622593 and a length of 19', function() {
		assert(detectNetwork('6225935544311183617') === 'China UnionPay');
	});

	it('has a prefix of 622594 and a length of 19', function() {
		assert(detectNetwork('6225943415425470018') === 'China UnionPay');
	});

	it('has a prefix of 622595 and a length of 19', function() {
		assert(detectNetwork('6225953297083960618') === 'China UnionPay');
	});

	it('has a prefix of 622596 and a length of 19', function() {
		assert(detectNetwork('6225962433018055400') === 'China UnionPay');
	});

	it('has a prefix of 622597 and a length of 19', function() {
		assert(detectNetwork('6225975786330626932') === 'China UnionPay');
	});

	it('has a prefix of 622598 and a length of 19', function() {
		assert(detectNetwork('6225983576408288686') === 'China UnionPay');
	});

	it('has a prefix of 622599 and a length of 19', function() {
		assert(detectNetwork('6225990957177610843') === 'China UnionPay');
	});

	it('has a prefix of 622600 and a length of 19', function() {
		assert(detectNetwork('6226002110740523490') === 'China UnionPay');
	});

	it('has a prefix of 622601 and a length of 19', function() {
		assert(detectNetwork('6226017499525872664') === 'China UnionPay');
	});

	it('has a prefix of 622602 and a length of 19', function() {
		assert(detectNetwork('6226020977576918600') === 'China UnionPay');
	});

	it('has a prefix of 622603 and a length of 19', function() {
		assert(detectNetwork('6226039863494330475') === 'China UnionPay');
	});

	it('has a prefix of 622604 and a length of 19', function() {
		assert(detectNetwork('6226046129075176666') === 'China UnionPay');
	});

	it('has a prefix of 622605 and a length of 19', function() {
		assert(detectNetwork('6226054192383154460') === 'China UnionPay');
	});

	it('has a prefix of 622606 and a length of 19', function() {
		assert(detectNetwork('6226066810191750054') === 'China UnionPay');
	});

	it('has a prefix of 622607 and a length of 19', function() {
		assert(detectNetwork('6226073740623095231') === 'China UnionPay');
	});

	it('has a prefix of 622608 and a length of 19', function() {
		assert(detectNetwork('6226088677266083910') === 'China UnionPay');
	});

	it('has a prefix of 622609 and a length of 19', function() {
		assert(detectNetwork('6226099048947797550') === 'China UnionPay');
	});

	it('has a prefix of 622610 and a length of 19', function() {
		assert(detectNetwork('6226105498759193958') === 'China UnionPay');
	});

	it('has a prefix of 622611 and a length of 19', function() {
		assert(detectNetwork('6226110249204132383') === 'China UnionPay');
	});

	it('has a prefix of 622612 and a length of 19', function() {
		assert(detectNetwork('6226129267198983288') === 'China UnionPay');
	});

	it('has a prefix of 622613 and a length of 19', function() {
		assert(detectNetwork('6226132078119514144') === 'China UnionPay');
	});

	it('has a prefix of 622614 and a length of 19', function() {
		assert(detectNetwork('6226149137905761548') === 'China UnionPay');
	});

	it('has a prefix of 622615 and a length of 19', function() {
		assert(detectNetwork('6226154195270851154') === 'China UnionPay');
	});

	it('has a prefix of 622616 and a length of 19', function() {
		assert(detectNetwork('6226167131718300617') === 'China UnionPay');
	});

	it('has a prefix of 622617 and a length of 19', function() {
		assert(detectNetwork('6226174076896108815') === 'China UnionPay');
	});

	it('has a prefix of 622618 and a length of 19', function() {
		assert(detectNetwork('6226188665553436989') === 'China UnionPay');
	});

	it('has a prefix of 622619 and a length of 19', function() {
		assert(detectNetwork('6226197505868038527') === 'China UnionPay');
	});

	it('has a prefix of 622620 and a length of 19', function() {
		assert(detectNetwork('6226201743858939037') === 'China UnionPay');
	});

	it('has a prefix of 622621 and a length of 19', function() {
		assert(detectNetwork('6226215717902069558') === 'China UnionPay');
	});

	it('has a prefix of 622622 and a length of 19', function() {
		assert(detectNetwork('6226228918051645867') === 'China UnionPay');
	});

	it('has a prefix of 622623 and a length of 19', function() {
		assert(detectNetwork('6226237060943579993') === 'China UnionPay');
	});

	it('has a prefix of 622624 and a length of 19', function() {
		assert(detectNetwork('6226244760337858387') === 'China UnionPay');
	});

	it('has a prefix of 622625 and a length of 19', function() {
		assert(detectNetwork('6226258577184219729') === 'China UnionPay');
	});

	it('has a prefix of 622626 and a length of 19', function() {
		assert(detectNetwork('6226264139555871765') === 'China UnionPay');
	});

	it('has a prefix of 622627 and a length of 19', function() {
		assert(detectNetwork('6226275626137502877') === 'China UnionPay');
	});

	it('has a prefix of 622628 and a length of 19', function() {
		assert(detectNetwork('6226282374192399841') === 'China UnionPay');
	});

	it('has a prefix of 622629 and a length of 19', function() {
		assert(detectNetwork('6226293516679653260') === 'China UnionPay');
	});

	it('has a prefix of 622630 and a length of 19', function() {
		assert(detectNetwork('6226301518482868185') === 'China UnionPay');
	});

	it('has a prefix of 622631 and a length of 19', function() {
		assert(detectNetwork('6226314336355797345') === 'China UnionPay');
	});

	it('has a prefix of 622632 and a length of 19', function() {
		assert(detectNetwork('6226320780760509480') === 'China UnionPay');
	});

	it('has a prefix of 622633 and a length of 19', function() {
		assert(detectNetwork('6226335048836552369') === 'China UnionPay');
	});

	it('has a prefix of 622634 and a length of 19', function() {
		assert(detectNetwork('6226342452198146812') === 'China UnionPay');
	});

	it('has a prefix of 622635 and a length of 19', function() {
		assert(detectNetwork('6226355677498090224') === 'China UnionPay');
	});

	it('has a prefix of 622636 and a length of 19', function() {
		assert(detectNetwork('6226364922607611677') === 'China UnionPay');
	});

	it('has a prefix of 622637 and a length of 19', function() {
		assert(detectNetwork('6226371161899801317') === 'China UnionPay');
	});

	it('has a prefix of 622638 and a length of 19', function() {
		assert(detectNetwork('6226380354463213948') === 'China UnionPay');
	});

	it('has a prefix of 622639 and a length of 19', function() {
		assert(detectNetwork('6226399129485056796') === 'China UnionPay');
	});

	it('has a prefix of 622640 and a length of 19', function() {
		assert(detectNetwork('6226407586972370406') === 'China UnionPay');
	});

	it('has a prefix of 622641 and a length of 19', function() {
		assert(detectNetwork('6226414620404469035') === 'China UnionPay');
	});

	it('has a prefix of 622642 and a length of 19', function() {
		assert(detectNetwork('6226429711739427820') === 'China UnionPay');
	});

	it('has a prefix of 622643 and a length of 19', function() {
		assert(detectNetwork('6226432757278052545') === 'China UnionPay');
	});

	it('has a prefix of 622644 and a length of 19', function() {
		assert(detectNetwork('6226447582237295185') === 'China UnionPay');
	});

	it('has a prefix of 622645 and a length of 19', function() {
		assert(detectNetwork('6226453962051428832') === 'China UnionPay');
	});

	it('has a prefix of 622646 and a length of 19', function() {
		assert(detectNetwork('6226469256996843415') === 'China UnionPay');
	});

	it('has a prefix of 622647 and a length of 19', function() {
		assert(detectNetwork('6226471426902187804') === 'China UnionPay');
	});

	it('has a prefix of 622648 and a length of 19', function() {
		assert(detectNetwork('6226482840370659128') === 'China UnionPay');
	});

	it('has a prefix of 622649 and a length of 19', function() {
		assert(detectNetwork('6226494840223054687') === 'China UnionPay');
	});

	it('has a prefix of 622650 and a length of 19', function() {
		assert(detectNetwork('6226502046683502810') === 'China UnionPay');
	});

	it('has a prefix of 622651 and a length of 19', function() {
		assert(detectNetwork('6226510869621000081') === 'China UnionPay');
	});

	it('has a prefix of 622652 and a length of 19', function() {
		assert(detectNetwork('6226522120233364913') === 'China UnionPay');
	});

	it('has a prefix of 622653 and a length of 19', function() {
		assert(detectNetwork('6226535450117333914') === 'China UnionPay');
	});

	it('has a prefix of 622654 and a length of 19', function() {
		assert(detectNetwork('6226548015125410675') === 'China UnionPay');
	});

	it('has a prefix of 622655 and a length of 19', function() {
		assert(detectNetwork('6226550469193862772') === 'China UnionPay');
	});

	it('has a prefix of 622656 and a length of 19', function() {
		assert(detectNetwork('6226560212007947666') === 'China UnionPay');
	});

	it('has a prefix of 622657 and a length of 19', function() {
		assert(detectNetwork('6226570361874556840') === 'China UnionPay');
	});

	it('has a prefix of 622658 and a length of 19', function() {
		assert(detectNetwork('6226581794282193884') === 'China UnionPay');
	});

	it('has a prefix of 622659 and a length of 19', function() {
		assert(detectNetwork('6226594620277655844') === 'China UnionPay');
	});

	it('has a prefix of 622660 and a length of 19', function() {
		assert(detectNetwork('6226606816870629086') === 'China UnionPay');
	});

	it('has a prefix of 622661 and a length of 19', function() {
		assert(detectNetwork('6226614654416181957') === 'China UnionPay');
	});

	it('has a prefix of 622662 and a length of 19', function() {
		assert(detectNetwork('6226622211164720868') === 'China UnionPay');
	});

	it('has a prefix of 622663 and a length of 19', function() {
		assert(detectNetwork('6226636702802607167') === 'China UnionPay');
	});

	it('has a prefix of 622664 and a length of 19', function() {
		assert(detectNetwork('6226647679551996666') === 'China UnionPay');
	});

	it('has a prefix of 622665 and a length of 19', function() {
		assert(detectNetwork('6226657159055367193') === 'China UnionPay');
	});

	it('has a prefix of 622666 and a length of 19', function() {
		assert(detectNetwork('6226662428075690265') === 'China UnionPay');
	});

	it('has a prefix of 622667 and a length of 19', function() {
		assert(detectNetwork('6226679786980443301') === 'China UnionPay');
	});

	it('has a prefix of 622668 and a length of 19', function() {
		assert(detectNetwork('6226680977802417266') === 'China UnionPay');
	});

	it('has a prefix of 622669 and a length of 19', function() {
		assert(detectNetwork('6226693540926834143') === 'China UnionPay');
	});

	it('has a prefix of 622670 and a length of 19', function() {
		assert(detectNetwork('6226704706930785117') === 'China UnionPay');
	});

	it('has a prefix of 622671 and a length of 19', function() {
		assert(detectNetwork('6226714013806337887') === 'China UnionPay');
	});

	it('has a prefix of 622672 and a length of 19', function() {
		assert(detectNetwork('6226728265319488212') === 'China UnionPay');
	});

	it('has a prefix of 622673 and a length of 19', function() {
		assert(detectNetwork('6226736851188157645') === 'China UnionPay');
	});

	it('has a prefix of 622674 and a length of 19', function() {
		assert(detectNetwork('6226744630746144192') === 'China UnionPay');
	});

	it('has a prefix of 622675 and a length of 19', function() {
		assert(detectNetwork('6226750308566736265') === 'China UnionPay');
	});

	it('has a prefix of 622676 and a length of 19', function() {
		assert(detectNetwork('6226761343378182276') === 'China UnionPay');
	});

	it('has a prefix of 622677 and a length of 19', function() {
		assert(detectNetwork('6226772743696364647') === 'China UnionPay');
	});

	it('has a prefix of 622678 and a length of 19', function() {
		assert(detectNetwork('6226787230450890984') === 'China UnionPay');
	});

	it('has a prefix of 622679 and a length of 19', function() {
		assert(detectNetwork('6226796796586411037') === 'China UnionPay');
	});

	it('has a prefix of 622680 and a length of 19', function() {
		assert(detectNetwork('6226805845347647812') === 'China UnionPay');
	});

	it('has a prefix of 622681 and a length of 19', function() {
		assert(detectNetwork('6226812045723449337') === 'China UnionPay');
	});

	it('has a prefix of 622682 and a length of 19', function() {
		assert(detectNetwork('6226825018175706821') === 'China UnionPay');
	});

	it('has a prefix of 622683 and a length of 19', function() {
		assert(detectNetwork('6226830404021595752') === 'China UnionPay');
	});

	it('has a prefix of 622684 and a length of 19', function() {
		assert(detectNetwork('6226845716556643983') === 'China UnionPay');
	});

	it('has a prefix of 622685 and a length of 19', function() {
		assert(detectNetwork('6226858523244964245') === 'China UnionPay');
	});

	it('has a prefix of 622686 and a length of 19', function() {
		assert(detectNetwork('6226860660826088805') === 'China UnionPay');
	});

	it('has a prefix of 622687 and a length of 19', function() {
		assert(detectNetwork('6226877364550448195') === 'China UnionPay');
	});

	it('has a prefix of 622688 and a length of 19', function() {
		assert(detectNetwork('6226881940723592254') === 'China UnionPay');
	});

	it('has a prefix of 622689 and a length of 19', function() {
		assert(detectNetwork('6226890737470267847') === 'China UnionPay');
	});

	it('has a prefix of 622690 and a length of 19', function() {
		assert(detectNetwork('6226907917399831607') === 'China UnionPay');
	});

	it('has a prefix of 622691 and a length of 19', function() {
		assert(detectNetwork('6226917615373467319') === 'China UnionPay');
	});

	it('has a prefix of 622692 and a length of 19', function() {
		assert(detectNetwork('6226928332888045263') === 'China UnionPay');
	});

	it('has a prefix of 622693 and a length of 19', function() {
		assert(detectNetwork('6226931499478295825') === 'China UnionPay');
	});

	it('has a prefix of 622694 and a length of 19', function() {
		assert(detectNetwork('6226945332593545491') === 'China UnionPay');
	});

	it('has a prefix of 622695 and a length of 19', function() {
		assert(detectNetwork('6226953616146234635') === 'China UnionPay');
	});

	it('has a prefix of 622696 and a length of 19', function() {
		assert(detectNetwork('6226967347720523025') === 'China UnionPay');
	});

	it('has a prefix of 622697 and a length of 19', function() {
		assert(detectNetwork('6226977913564928198') === 'China UnionPay');
	});

	it('has a prefix of 622698 and a length of 19', function() {
		assert(detectNetwork('6226985483302020305') === 'China UnionPay');
	});

	it('has a prefix of 622699 and a length of 19', function() {
		assert(detectNetwork('6226997757759444670') === 'China UnionPay');
	});

	it('has a prefix of 622700 and a length of 19', function() {
		assert(detectNetwork('6227009983655581910') === 'China UnionPay');
	});

	it('has a prefix of 622701 and a length of 19', function() {
		assert(detectNetwork('6227011277650927724') === 'China UnionPay');
	});

	it('has a prefix of 622702 and a length of 19', function() {
		assert(detectNetwork('6227026216339691139') === 'China UnionPay');
	});

	it('has a prefix of 622703 and a length of 19', function() {
		assert(detectNetwork('6227032546070899290') === 'China UnionPay');
	});

	it('has a prefix of 622704 and a length of 19', function() {
		assert(detectNetwork('6227049756184015982') === 'China UnionPay');
	});

	it('has a prefix of 622705 and a length of 19', function() {
		assert(detectNetwork('6227058352008008256') === 'China UnionPay');
	});

	it('has a prefix of 622706 and a length of 19', function() {
		assert(detectNetwork('6227060194198925812') === 'China UnionPay');
	});

	it('has a prefix of 622707 and a length of 19', function() {
		assert(detectNetwork('6227078393949531819') === 'China UnionPay');
	});

	it('has a prefix of 622708 and a length of 19', function() {
		assert(detectNetwork('6227084962169130478') === 'China UnionPay');
	});

	it('has a prefix of 622709 and a length of 19', function() {
		assert(detectNetwork('6227094595217625229') === 'China UnionPay');
	});

	it('has a prefix of 622710 and a length of 19', function() {
		assert(detectNetwork('6227106320738703743') === 'China UnionPay');
	});

	it('has a prefix of 622711 and a length of 19', function() {
		assert(detectNetwork('6227111870800474260') === 'China UnionPay');
	});

	it('has a prefix of 622712 and a length of 19', function() {
		assert(detectNetwork('6227121315613779322') === 'China UnionPay');
	});

	it('has a prefix of 622713 and a length of 19', function() {
		assert(detectNetwork('6227139038007042484') === 'China UnionPay');
	});

	it('has a prefix of 622714 and a length of 19', function() {
		assert(detectNetwork('6227149010339842277') === 'China UnionPay');
	});

	it('has a prefix of 622715 and a length of 19', function() {
		assert(detectNetwork('6227154775430465606') === 'China UnionPay');
	});

	it('has a prefix of 622716 and a length of 19', function() {
		assert(detectNetwork('6227168890113875852') === 'China UnionPay');
	});

	it('has a prefix of 622717 and a length of 19', function() {
		assert(detectNetwork('6227171204503538976') === 'China UnionPay');
	});

	it('has a prefix of 622718 and a length of 19', function() {
		assert(detectNetwork('6227185469743395008') === 'China UnionPay');
	});

	it('has a prefix of 622719 and a length of 19', function() {
		assert(detectNetwork('6227192806098487427') === 'China UnionPay');
	});

	it('has a prefix of 622720 and a length of 19', function() {
		assert(detectNetwork('6227205054333978608') === 'China UnionPay');
	});

	it('has a prefix of 622721 and a length of 19', function() {
		assert(detectNetwork('6227216556649282080') === 'China UnionPay');
	});

	it('has a prefix of 622722 and a length of 19', function() {
		assert(detectNetwork('6227221282512975363') === 'China UnionPay');
	});

	it('has a prefix of 622723 and a length of 19', function() {
		assert(detectNetwork('6227231237592700624') === 'China UnionPay');
	});

	it('has a prefix of 622724 and a length of 19', function() {
		assert(detectNetwork('6227243879293722999') === 'China UnionPay');
	});

	it('has a prefix of 622725 and a length of 19', function() {
		assert(detectNetwork('6227253422941828325') === 'China UnionPay');
	});

	it('has a prefix of 622726 and a length of 19', function() {
		assert(detectNetwork('6227260867530523131') === 'China UnionPay');
	});

	it('has a prefix of 622727 and a length of 19', function() {
		assert(detectNetwork('6227275213832835326') === 'China UnionPay');
	});

	it('has a prefix of 622728 and a length of 19', function() {
		assert(detectNetwork('6227284816775463426') === 'China UnionPay');
	});

	it('has a prefix of 622729 and a length of 19', function() {
		assert(detectNetwork('6227290673328423402') === 'China UnionPay');
	});

	it('has a prefix of 622730 and a length of 19', function() {
		assert(detectNetwork('6227305627804496395') === 'China UnionPay');
	});

	it('has a prefix of 622731 and a length of 19', function() {
		assert(detectNetwork('6227312250754652476') === 'China UnionPay');
	});

	it('has a prefix of 622732 and a length of 19', function() {
		assert(detectNetwork('6227326145030071051') === 'China UnionPay');
	});

	it('has a prefix of 622733 and a length of 19', function() {
		assert(detectNetwork('6227333464614885075') === 'China UnionPay');
	});

	it('has a prefix of 622734 and a length of 19', function() {
		assert(detectNetwork('6227341015287868540') === 'China UnionPay');
	});

	it('has a prefix of 622735 and a length of 19', function() {
		assert(detectNetwork('6227353975328236556') === 'China UnionPay');
	});

	it('has a prefix of 622736 and a length of 19', function() {
		assert(detectNetwork('6227369895390107495') === 'China UnionPay');
	});

	it('has a prefix of 622737 and a length of 19', function() {
		assert(detectNetwork('6227377698716643639') === 'China UnionPay');
	});

	it('has a prefix of 622738 and a length of 19', function() {
		assert(detectNetwork('6227386322345904512') === 'China UnionPay');
	});

	it('has a prefix of 622739 and a length of 19', function() {
		assert(detectNetwork('6227395411280299294') === 'China UnionPay');
	});

	it('has a prefix of 622740 and a length of 19', function() {
		assert(detectNetwork('6227400234094219650') === 'China UnionPay');
	});

	it('has a prefix of 622741 and a length of 19', function() {
		assert(detectNetwork('6227414409567745810') === 'China UnionPay');
	});

	it('has a prefix of 622742 and a length of 19', function() {
		assert(detectNetwork('6227423361983491464') === 'China UnionPay');
	});

	it('has a prefix of 622743 and a length of 19', function() {
		assert(detectNetwork('6227435323044169278') === 'China UnionPay');
	});

	it('has a prefix of 622744 and a length of 19', function() {
		assert(detectNetwork('6227447450489463859') === 'China UnionPay');
	});

	it('has a prefix of 622745 and a length of 19', function() {
		assert(detectNetwork('6227451957377018695') === 'China UnionPay');
	});

	it('has a prefix of 622746 and a length of 19', function() {
		assert(detectNetwork('6227460334205550032') === 'China UnionPay');
	});

	it('has a prefix of 622747 and a length of 19', function() {
		assert(detectNetwork('6227478482338310228') === 'China UnionPay');
	});

	it('has a prefix of 622748 and a length of 19', function() {
		assert(detectNetwork('6227487112771758434') === 'China UnionPay');
	});

	it('has a prefix of 622749 and a length of 19', function() {
		assert(detectNetwork('6227495512731595540') === 'China UnionPay');
	});

	it('has a prefix of 622750 and a length of 19', function() {
		assert(detectNetwork('6227506962151249517') === 'China UnionPay');
	});

	it('has a prefix of 622751 and a length of 19', function() {
		assert(detectNetwork('6227515103619904532') === 'China UnionPay');
	});

	it('has a prefix of 622752 and a length of 19', function() {
		assert(detectNetwork('6227520769868094221') === 'China UnionPay');
	});

	it('has a prefix of 622753 and a length of 19', function() {
		assert(detectNetwork('6227531315405399853') === 'China UnionPay');
	});

	it('has a prefix of 622754 and a length of 19', function() {
		assert(detectNetwork('6227546945097350279') === 'China UnionPay');
	});

	it('has a prefix of 622755 and a length of 19', function() {
		assert(detectNetwork('6227555061198391705') === 'China UnionPay');
	});

	it('has a prefix of 622756 and a length of 19', function() {
		assert(detectNetwork('6227560195535524536') === 'China UnionPay');
	});

	it('has a prefix of 622757 and a length of 19', function() {
		assert(detectNetwork('6227579554686061645') === 'China UnionPay');
	});

	it('has a prefix of 622758 and a length of 19', function() {
		assert(detectNetwork('6227583091271514599') === 'China UnionPay');
	});

	it('has a prefix of 622759 and a length of 19', function() {
		assert(detectNetwork('6227593543960253964') === 'China UnionPay');
	});

	it('has a prefix of 622760 and a length of 19', function() {
		assert(detectNetwork('6227603525841378232') === 'China UnionPay');
	});

	it('has a prefix of 622761 and a length of 19', function() {
		assert(detectNetwork('6227616038065826248') === 'China UnionPay');
	});

	it('has a prefix of 622762 and a length of 19', function() {
		assert(detectNetwork('6227622435558443461') === 'China UnionPay');
	});

	it('has a prefix of 622763 and a length of 19', function() {
		assert(detectNetwork('6227639990489704005') === 'China UnionPay');
	});

	it('has a prefix of 622764 and a length of 19', function() {
		assert(detectNetwork('6227648302131338445') === 'China UnionPay');
	});

	it('has a prefix of 622765 and a length of 19', function() {
		assert(detectNetwork('6227656456886841037') === 'China UnionPay');
	});

	it('has a prefix of 622766 and a length of 19', function() {
		assert(detectNetwork('6227664961765118459') === 'China UnionPay');
	});

	it('has a prefix of 622767 and a length of 19', function() {
		assert(detectNetwork('6227678846191085247') === 'China UnionPay');
	});

	it('has a prefix of 622768 and a length of 19', function() {
		assert(detectNetwork('6227682886387574391') === 'China UnionPay');
	});

	it('has a prefix of 622769 and a length of 19', function() {
		assert(detectNetwork('6227695796233238967') === 'China UnionPay');
	});

	it('has a prefix of 622770 and a length of 19', function() {
		assert(detectNetwork('6227709229387894002') === 'China UnionPay');
	});

	it('has a prefix of 622771 and a length of 19', function() {
		assert(detectNetwork('6227716729395752319') === 'China UnionPay');
	});

	it('has a prefix of 622772 and a length of 19', function() {
		assert(detectNetwork('6227725264189617562') === 'China UnionPay');
	});

	it('has a prefix of 622773 and a length of 19', function() {
		assert(detectNetwork('6227732512222618067') === 'China UnionPay');
	});

	it('has a prefix of 622774 and a length of 19', function() {
		assert(detectNetwork('6227743996826113359') === 'China UnionPay');
	});

	it('has a prefix of 622775 and a length of 19', function() {
		assert(detectNetwork('6227757777258270704') === 'China UnionPay');
	});

	it('has a prefix of 622776 and a length of 19', function() {
		assert(detectNetwork('6227764311417985335') === 'China UnionPay');
	});

	it('has a prefix of 622777 and a length of 19', function() {
		assert(detectNetwork('6227770676721931464') === 'China UnionPay');
	});

	it('has a prefix of 622778 and a length of 19', function() {
		assert(detectNetwork('6227785714439524950') === 'China UnionPay');
	});

	it('has a prefix of 622779 and a length of 19', function() {
		assert(detectNetwork('6227792518696437298') === 'China UnionPay');
	});

	it('has a prefix of 622780 and a length of 19', function() {
		assert(detectNetwork('6227803044515267174') === 'China UnionPay');
	});

	it('has a prefix of 622781 and a length of 19', function() {
		assert(detectNetwork('6227813131012920575') === 'China UnionPay');
	});

	it('has a prefix of 622782 and a length of 19', function() {
		assert(detectNetwork('6227828064592468086') === 'China UnionPay');
	});

	it('has a prefix of 622783 and a length of 19', function() {
		assert(detectNetwork('6227835281419796589') === 'China UnionPay');
	});

	it('has a prefix of 622784 and a length of 19', function() {
		assert(detectNetwork('6227841594540484261') === 'China UnionPay');
	});

	it('has a prefix of 622785 and a length of 19', function() {
		assert(detectNetwork('6227859554248784241') === 'China UnionPay');
	});

	it('has a prefix of 622786 and a length of 19', function() {
		assert(detectNetwork('6227867984007522051') === 'China UnionPay');
	});

	it('has a prefix of 622787 and a length of 19', function() {
		assert(detectNetwork('6227874155353463613') === 'China UnionPay');
	});

	it('has a prefix of 622788 and a length of 19', function() {
		assert(detectNetwork('6227881431980146673') === 'China UnionPay');
	});

	it('has a prefix of 622789 and a length of 19', function() {
		assert(detectNetwork('6227898881869890049') === 'China UnionPay');
	});

	it('has a prefix of 622790 and a length of 19', function() {
		assert(detectNetwork('6227904653780542249') === 'China UnionPay');
	});

	it('has a prefix of 622791 and a length of 19', function() {
		assert(detectNetwork('6227918458816991767') === 'China UnionPay');
	});

	it('has a prefix of 622792 and a length of 19', function() {
		assert(detectNetwork('6227929514111638678') === 'China UnionPay');
	});

	it('has a prefix of 622793 and a length of 19', function() {
		assert(detectNetwork('6227932068450046276') === 'China UnionPay');
	});

	it('has a prefix of 622794 and a length of 19', function() {
		assert(detectNetwork('6227941512603392033') === 'China UnionPay');
	});

	it('has a prefix of 622795 and a length of 19', function() {
		assert(detectNetwork('6227959929476465768') === 'China UnionPay');
	});

	it('has a prefix of 622796 and a length of 19', function() {
		assert(detectNetwork('6227967223431780611') === 'China UnionPay');
	});

	it('has a prefix of 622797 and a length of 19', function() {
		assert(detectNetwork('6227970879482672327') === 'China UnionPay');
	});

	it('has a prefix of 622798 and a length of 19', function() {
		assert(detectNetwork('6227988854230055275') === 'China UnionPay');
	});

	it('has a prefix of 622799 and a length of 19', function() {
		assert(detectNetwork('6227994615011972108') === 'China UnionPay');
	});

	it('has a prefix of 622800 and a length of 19', function() {
		assert(detectNetwork('6228003308052947929') === 'China UnionPay');
	});

	it('has a prefix of 622801 and a length of 19', function() {
		assert(detectNetwork('6228015706310031028') === 'China UnionPay');
	});

	it('has a prefix of 622802 and a length of 19', function() {
		assert(detectNetwork('6228026583604989342') === 'China UnionPay');
	});

	it('has a prefix of 622803 and a length of 19', function() {
		assert(detectNetwork('6228039195157432786') === 'China UnionPay');
	});

	it('has a prefix of 622804 and a length of 19', function() {
		assert(detectNetwork('6228043433545421878') === 'China UnionPay');
	});

	it('has a prefix of 622805 and a length of 19', function() {
		assert(detectNetwork('6228051585127144780') === 'China UnionPay');
	});

	it('has a prefix of 622806 and a length of 19', function() {
		assert(detectNetwork('6228061523706650953') === 'China UnionPay');
	});

	it('has a prefix of 622807 and a length of 19', function() {
		assert(detectNetwork('6228073536941302914') === 'China UnionPay');
	});

	it('has a prefix of 622808 and a length of 19', function() {
		assert(detectNetwork('6228086908701312736') === 'China UnionPay');
	});

	it('has a prefix of 622809 and a length of 19', function() {
		assert(detectNetwork('6228098947210035855') === 'China UnionPay');
	});

	it('has a prefix of 622810 and a length of 19', function() {
		assert(detectNetwork('6228106694517890346') === 'China UnionPay');
	});

	it('has a prefix of 622811 and a length of 19', function() {
		assert(detectNetwork('6228111006818583288') === 'China UnionPay');
	});

	it('has a prefix of 622812 and a length of 19', function() {
		assert(detectNetwork('6228127646343823266') === 'China UnionPay');
	});

	it('has a prefix of 622813 and a length of 19', function() {
		assert(detectNetwork('6228132717723188921') === 'China UnionPay');
	});

	it('has a prefix of 622814 and a length of 19', function() {
		assert(detectNetwork('6228140963017973709') === 'China UnionPay');
	});

	it('has a prefix of 622815 and a length of 19', function() {
		assert(detectNetwork('6228157216240812232') === 'China UnionPay');
	});

	it('has a prefix of 622816 and a length of 19', function() {
		assert(detectNetwork('6228166340418900679') === 'China UnionPay');
	});

	it('has a prefix of 622817 and a length of 19', function() {
		assert(detectNetwork('6228175235253089776') === 'China UnionPay');
	});

	it('has a prefix of 622818 and a length of 19', function() {
		assert(detectNetwork('6228185076655886509') === 'China UnionPay');
	});

	it('has a prefix of 622819 and a length of 19', function() {
		assert(detectNetwork('6228197031751814866') === 'China UnionPay');
	});

	it('has a prefix of 622820 and a length of 19', function() {
		assert(detectNetwork('6228204726032264574') === 'China UnionPay');
	});

	it('has a prefix of 622821 and a length of 19', function() {
		assert(detectNetwork('6228213232383687022') === 'China UnionPay');
	});

	it('has a prefix of 622822 and a length of 19', function() {
		assert(detectNetwork('6228226299736618707') === 'China UnionPay');
	});

	it('has a prefix of 622823 and a length of 19', function() {
		assert(detectNetwork('6228236697585291984') === 'China UnionPay');
	});

	it('has a prefix of 622824 and a length of 19', function() {
		assert(detectNetwork('6228248908895006765') === 'China UnionPay');
	});

	it('has a prefix of 622825 and a length of 19', function() {
		assert(detectNetwork('6228252455998949524') === 'China UnionPay');
	});

	it('has a prefix of 622826 and a length of 19', function() {
		assert(detectNetwork('6228260817282049133') === 'China UnionPay');
	});

	it('has a prefix of 622827 and a length of 19', function() {
		assert(detectNetwork('6228272119418823354') === 'China UnionPay');
	});

	it('has a prefix of 622828 and a length of 19', function() {
		assert(detectNetwork('6228283082251316475') === 'China UnionPay');
	});

	it('has a prefix of 622829 and a length of 19', function() {
		assert(detectNetwork('6228297987966170784') === 'China UnionPay');
	});

	it('has a prefix of 622830 and a length of 19', function() {
		assert(detectNetwork('6228309222077700715') === 'China UnionPay');
	});

	it('has a prefix of 622831 and a length of 19', function() {
		assert(detectNetwork('6228312193662572734') === 'China UnionPay');
	});

	it('has a prefix of 622832 and a length of 19', function() {
		assert(detectNetwork('6228320266180450181') === 'China UnionPay');
	});

	it('has a prefix of 622833 and a length of 19', function() {
		assert(detectNetwork('6228339862689803592') === 'China UnionPay');
	});

	it('has a prefix of 622834 and a length of 19', function() {
		assert(detectNetwork('6228344349271642729') === 'China UnionPay');
	});

	it('has a prefix of 622835 and a length of 19', function() {
		assert(detectNetwork('6228350589668810339') === 'China UnionPay');
	});

	it('has a prefix of 622836 and a length of 19', function() {
		assert(detectNetwork('6228362261868220429') === 'China UnionPay');
	});

	it('has a prefix of 622837 and a length of 19', function() {
		assert(detectNetwork('6228378026744903904') === 'China UnionPay');
	});

	it('has a prefix of 622838 and a length of 19', function() {
		assert(detectNetwork('6228384073649758682') === 'China UnionPay');
	});

	it('has a prefix of 622839 and a length of 19', function() {
		assert(detectNetwork('6228394745853380262') === 'China UnionPay');
	});

	it('has a prefix of 622840 and a length of 19', function() {
		assert(detectNetwork('6228409505808184019') === 'China UnionPay');
	});

	it('has a prefix of 622841 and a length of 19', function() {
		assert(detectNetwork('6228415555313628258') === 'China UnionPay');
	});

	it('has a prefix of 622842 and a length of 19', function() {
		assert(detectNetwork('6228428702919254418') === 'China UnionPay');
	});

	it('has a prefix of 622843 and a length of 19', function() {
		assert(detectNetwork('6228433172798829449') === 'China UnionPay');
	});

	it('has a prefix of 622844 and a length of 19', function() {
		assert(detectNetwork('6228447999716361864') === 'China UnionPay');
	});

	it('has a prefix of 622845 and a length of 19', function() {
		assert(detectNetwork('6228457612721776045') === 'China UnionPay');
	});

	it('has a prefix of 622846 and a length of 19', function() {
		assert(detectNetwork('6228460947781590360') === 'China UnionPay');
	});

	it('has a prefix of 622847 and a length of 19', function() {
		assert(detectNetwork('6228472856023015775') === 'China UnionPay');
	});

	it('has a prefix of 622848 and a length of 19', function() {
		assert(detectNetwork('6228481445493637024') === 'China UnionPay');
	});

	it('has a prefix of 622849 and a length of 19', function() {
		assert(detectNetwork('6228495636713188803') === 'China UnionPay');
	});

	it('has a prefix of 622850 and a length of 19', function() {
		assert(detectNetwork('6228507033184273518') === 'China UnionPay');
	});

	it('has a prefix of 622851 and a length of 19', function() {
		assert(detectNetwork('6228518111966041285') === 'China UnionPay');
	});

	it('has a prefix of 622852 and a length of 19', function() {
		assert(detectNetwork('6228525609285407710') === 'China UnionPay');
	});

	it('has a prefix of 622853 and a length of 19', function() {
		assert(detectNetwork('6228532308655545701') === 'China UnionPay');
	});

	it('has a prefix of 622854 and a length of 19', function() {
		assert(detectNetwork('6228540971695406708') === 'China UnionPay');
	});

	it('has a prefix of 622855 and a length of 19', function() {
		assert(detectNetwork('6228559129292046843') === 'China UnionPay');
	});

	it('has a prefix of 622856 and a length of 19', function() {
		assert(detectNetwork('6228562410744935890') === 'China UnionPay');
	});

	it('has a prefix of 622857 and a length of 19', function() {
		assert(detectNetwork('6228570466119568719') === 'China UnionPay');
	});

	it('has a prefix of 622858 and a length of 19', function() {
		assert(detectNetwork('6228583707179896977') === 'China UnionPay');
	});

	it('has a prefix of 622859 and a length of 19', function() {
		assert(detectNetwork('6228599416421771128') === 'China UnionPay');
	});

	it('has a prefix of 622860 and a length of 19', function() {
		assert(detectNetwork('6228603989348958208') === 'China UnionPay');
	});

	it('has a prefix of 622861 and a length of 19', function() {
		assert(detectNetwork('6228618921980465984') === 'China UnionPay');
	});

	it('has a prefix of 622862 and a length of 19', function() {
		assert(detectNetwork('6228621722105867457') === 'China UnionPay');
	});

	it('has a prefix of 622863 and a length of 19', function() {
		assert(detectNetwork('6228631609209527900') === 'China UnionPay');
	});

	it('has a prefix of 622864 and a length of 19', function() {
		assert(detectNetwork('6228648288657279776') === 'China UnionPay');
	});

	it('has a prefix of 622865 and a length of 19', function() {
		assert(detectNetwork('6228657752868268716') === 'China UnionPay');
	});

	it('has a prefix of 622866 and a length of 19', function() {
		assert(detectNetwork('6228660751048933440') === 'China UnionPay');
	});

	it('has a prefix of 622867 and a length of 19', function() {
		assert(detectNetwork('6228679448835870129') === 'China UnionPay');
	});

	it('has a prefix of 622868 and a length of 19', function() {
		assert(detectNetwork('6228683345339032934') === 'China UnionPay');
	});

	it('has a prefix of 622869 and a length of 19', function() {
		assert(detectNetwork('6228697532558840985') === 'China UnionPay');
	});

	it('has a prefix of 622870 and a length of 19', function() {
		assert(detectNetwork('6228706763309642776') === 'China UnionPay');
	});

	it('has a prefix of 622871 and a length of 19', function() {
		assert(detectNetwork('6228714147792070112') === 'China UnionPay');
	});

	it('has a prefix of 622872 and a length of 19', function() {
		assert(detectNetwork('6228726287173180222') === 'China UnionPay');
	});

	it('has a prefix of 622873 and a length of 19', function() {
		assert(detectNetwork('6228738868366296087') === 'China UnionPay');
	});

	it('has a prefix of 622874 and a length of 19', function() {
		assert(detectNetwork('6228740992221528202') === 'China UnionPay');
	});

	it('has a prefix of 622875 and a length of 19', function() {
		assert(detectNetwork('6228758987918664305') === 'China UnionPay');
	});

	it('has a prefix of 622876 and a length of 19', function() {
		assert(detectNetwork('6228767345614412934') === 'China UnionPay');
	});

	it('has a prefix of 622877 and a length of 19', function() {
		assert(detectNetwork('6228773374552739375') === 'China UnionPay');
	});

	it('has a prefix of 622878 and a length of 19', function() {
		assert(detectNetwork('6228780747489507799') === 'China UnionPay');
	});

	it('has a prefix of 622879 and a length of 19', function() {
		assert(detectNetwork('6228791948583215547') === 'China UnionPay');
	});

	it('has a prefix of 622880 and a length of 19', function() {
		assert(detectNetwork('6228803616188473907') === 'China UnionPay');
	});

	it('has a prefix of 622881 and a length of 19', function() {
		assert(detectNetwork('6228813341755170348') === 'China UnionPay');
	});

	it('has a prefix of 622882 and a length of 19', function() {
		assert(detectNetwork('6228827501292844136') === 'China UnionPay');
	});

	it('has a prefix of 622883 and a length of 19', function() {
		assert(detectNetwork('6228832104382238390') === 'China UnionPay');
	});

	it('has a prefix of 622884 and a length of 19', function() {
		assert(detectNetwork('6228845896311112703') === 'China UnionPay');
	});

	it('has a prefix of 622885 and a length of 19', function() {
		assert(detectNetwork('6228853424111256629') === 'China UnionPay');
	});

	it('has a prefix of 622886 and a length of 19', function() {
		assert(detectNetwork('6228863517592047011') === 'China UnionPay');
	});

	it('has a prefix of 622887 and a length of 19', function() {
		assert(detectNetwork('6228872319387573202') === 'China UnionPay');
	});

	it('has a prefix of 622888 and a length of 19', function() {
		assert(detectNetwork('6228882181308897740') === 'China UnionPay');
	});

	it('has a prefix of 622889 and a length of 19', function() {
		assert(detectNetwork('6228895775533505340') === 'China UnionPay');
	});

	it('has a prefix of 622890 and a length of 19', function() {
		assert(detectNetwork('6228900129137191465') === 'China UnionPay');
	});

	it('has a prefix of 622891 and a length of 19', function() {
		assert(detectNetwork('6228918176443121715') === 'China UnionPay');
	});

	it('has a prefix of 622892 and a length of 19', function() {
		assert(detectNetwork('6228926937261243548') === 'China UnionPay');
	});

	it('has a prefix of 622893 and a length of 19', function() {
		assert(detectNetwork('6228932004044959382') === 'China UnionPay');
	});

	it('has a prefix of 622894 and a length of 19', function() {
		assert(detectNetwork('6228941187678448061') === 'China UnionPay');
	});

	it('has a prefix of 622895 and a length of 19', function() {
		assert(detectNetwork('6228957193419608350') === 'China UnionPay');
	});

	it('has a prefix of 622896 and a length of 19', function() {
		assert(detectNetwork('6228964205888525059') === 'China UnionPay');
	});

	it('has a prefix of 622897 and a length of 19', function() {
		assert(detectNetwork('6228971591801104453') === 'China UnionPay');
	});

	it('has a prefix of 622898 and a length of 19', function() {
		assert(detectNetwork('6228986047854451443') === 'China UnionPay');
	});

	it('has a prefix of 622899 and a length of 19', function() {
		assert(detectNetwork('6228997181019305829') === 'China UnionPay');
	});

	it('has a prefix of 622900 and a length of 19', function() {
		assert(detectNetwork('6229004457360299501') === 'China UnionPay');
	});

	it('has a prefix of 622901 and a length of 19', function() {
		assert(detectNetwork('6229015964322149228') === 'China UnionPay');
	});

	it('has a prefix of 622902 and a length of 19', function() {
		assert(detectNetwork('6229020352688045638') === 'China UnionPay');
	});

	it('has a prefix of 622903 and a length of 19', function() {
		assert(detectNetwork('6229035710216724896') === 'China UnionPay');
	});

	it('has a prefix of 622904 and a length of 19', function() {
		assert(detectNetwork('6229044320111309066') === 'China UnionPay');
	});

	it('has a prefix of 622905 and a length of 19', function() {
		assert(detectNetwork('6229050835412860244') === 'China UnionPay');
	});

	it('has a prefix of 622906 and a length of 19', function() {
		assert(detectNetwork('6229062941764670311') === 'China UnionPay');
	});

	it('has a prefix of 622907 and a length of 19', function() {
		assert(detectNetwork('6229078493914497332') === 'China UnionPay');
	});

	it('has a prefix of 622908 and a length of 19', function() {
		assert(detectNetwork('6229088620607053938') === 'China UnionPay');
	});

	it('has a prefix of 622909 and a length of 19', function() {
		assert(detectNetwork('6229099245199378229') === 'China UnionPay');
	});

	it('has a prefix of 622910 and a length of 19', function() {
		assert(detectNetwork('6229106724325868425') === 'China UnionPay');
	});

	it('has a prefix of 622911 and a length of 19', function() {
		assert(detectNetwork('6229115244240571796') === 'China UnionPay');
	});

	it('has a prefix of 622912 and a length of 19', function() {
		assert(detectNetwork('6229128710181398221') === 'China UnionPay');
	});

	it('has a prefix of 622913 and a length of 19', function() {
		assert(detectNetwork('6229133607946985352') === 'China UnionPay');
	});

	it('has a prefix of 622914 and a length of 19', function() {
		assert(detectNetwork('6229143643122478413') === 'China UnionPay');
	});

	it('has a prefix of 622915 and a length of 19', function() {
		assert(detectNetwork('6229152958277035471') === 'China UnionPay');
	});

	it('has a prefix of 622916 and a length of 19', function() {
		assert(detectNetwork('6229163444251993851') === 'China UnionPay');
	});

	it('has a prefix of 622917 and a length of 19', function() {
		assert(detectNetwork('6229170037143484470') === 'China UnionPay');
	});

	it('has a prefix of 622918 and a length of 19', function() {
		assert(detectNetwork('6229181526011467492') === 'China UnionPay');
	});

	it('has a prefix of 622919 and a length of 19', function() {
		assert(detectNetwork('6229191102500739631') === 'China UnionPay');
	});

	it('has a prefix of 622920 and a length of 19', function() {
		assert(detectNetwork('6229206962844523330') === 'China UnionPay');
	});

	it('has a prefix of 622921 and a length of 19', function() {
		assert(detectNetwork('6229216230252546060') === 'China UnionPay');
	});

	it('has a prefix of 622922 and a length of 19', function() {
		assert(detectNetwork('6229228857950919636') === 'China UnionPay');
	});

	it('has a prefix of 622923 and a length of 19', function() {
		assert(detectNetwork('6229231208384561097') === 'China UnionPay');
	});

	it('has a prefix of 622924 and a length of 19', function() {
		assert(detectNetwork('6229242389963462177') === 'China UnionPay');
	});

	it('has a prefix of 622925 and a length of 19', function() {
		assert(detectNetwork('6229259097665268103') === 'China UnionPay');
	});

});

describe('Switch', function() {

	var assert = chai.assert;

	it('has a prefix of 4903 and a length of 16', function() {
		assert(detectNetwork('4903916976629717') === 'Switch');
	});

	it('has a prefix of 4905 and a length of 16', function() {
		assert(detectNetwork('4905681715883506') === 'Switch');
	});

	it('has a prefix of 4911 and a length of 16', function() {
		assert(detectNetwork('4911638134599835') === 'Switch');
	});

	it('has a prefix of 4936 and a length of 16', function() {
		assert(detectNetwork('4936663379151064') === 'Switch');
	});

	it('has a prefix of 564182 and a length of 16', function() {
		assert(detectNetwork('5641825031252603') === 'Switch');
	});

	it('has a prefix of 633110 and a length of 16', function() {
		assert(detectNetwork('6331107876579037') === 'Switch');
	});

	it('has a prefix of 6333 and a length of 16', function() {
		assert(detectNetwork('6333695007119060') === 'Switch');
	});

	it('has a prefix of 6759 and a length of 16', function() {
		assert(detectNetwork('6759000239813831') === 'Switch');
	});

	it('has a prefix of 4903 and a length of 18', function() {
		assert(detectNetwork('490326568035990488') === 'Switch');
	});

	it('has a prefix of 4905 and a length of 18', function() {
		assert(detectNetwork('490598879374548668') === 'Switch');
	});

	it('has a prefix of 4911 and a length of 18', function() {
		assert(detectNetwork('491150964280818205') === 'Switch');
	});

	it('has a prefix of 4936 and a length of 18', function() {
		assert(detectNetwork('493649951279689062') === 'Switch');
	});

	it('has a prefix of 564182 and a length of 18', function() {
		assert(detectNetwork('564182192236288174') === 'Switch');
	});

	it('has a prefix of 633110 and a length of 18', function() {
		assert(detectNetwork('633110039425736270') === 'Switch');
	});

	it('has a prefix of 6333 and a length of 18', function() {
		assert(detectNetwork('633317502608305939') === 'Switch');
	});

	it('has a prefix of 6759 and a length of 18', function() {
		assert(detectNetwork('675900915162333294') === 'Switch');
	});

	it('has a prefix of 4903 and a length of 19', function() {
		assert(detectNetwork('4903604135955691516') === 'Switch');
	});

	it('has a prefix of 4905 and a length of 19', function() {
		assert(detectNetwork('4905417633392142454') === 'Switch');
	});

	it('has a prefix of 4911 and a length of 19', function() {
		assert(detectNetwork('4911798795581861865') === 'Switch');
	});

	it('has a prefix of 4936 and a length of 19', function() {
		assert(detectNetwork('4936543419413442072') === 'Switch');
	});

	it('has a prefix of 564182 and a length of 19', function() {
		assert(detectNetwork('5641822701882822569') === 'Switch');
	});

	it('has a prefix of 633110 and a length of 19', function() {
		assert(detectNetwork('6331107325899797551') === 'Switch');
	});

	it('has a prefix of 6333 and a length of 19', function() {
		assert(detectNetwork('6333692250088607502') === 'Switch');
	});

	it('has a prefix of 6759 and a length of 19', function() {
		assert(detectNetwork('6759424918418631849') === 'Switch');
	});

});