"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ExbModel = _interopRequireDefault(require("../models/ExbModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var dbtest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _ExbModel["default"].deleteMany({});

          case 2:
            _context.next = 4;
            return _ExbModel["default"].insertMany([{
              country: "United Kingdom",
              title: "Feminine power the divine to the demonic",
              date: "17 Feb 2022 - 17 Jul 2022",
              thumbnailSrc: "https://www.britishmuseum.org/sites/default/files/styles/1_1_media_small/public/2022-03/Lilith_Kiki_Smith_1994_The_Met_Feminine_power_The_British_Museum_teaser_2.jpg?h=940fe70c&itok=5O9wuHPm",
              detail: "Explore the significant role that goddesses, demons, witches, spirits and saints have played – and continue to play – in shaping our understanding of the world. How do different traditions view femininity? How has female authority been perceived in ancient cultures? For insights, the exhibition looks to divine and demonic figures feared and revered for over 5,000 years. From wisdom, passion and desire, to war, justice and mercy, the diverse expression of female spiritual powers around the world prompts us to reflect on how we perceive femininity and gender identity today. Worship of Pele, the Hawaiian goddess of volcanoes, reveals how her destructive capacity is venerated alongside her ability to create. The Buddhist bodhisattva of compassion, who transcends gender and is visualised in male form in Tibet and female in China and Japan, uncovers the importance of gender fluidity in some spiritual traditions. And the terrifying Hindu goddess Kali, depicted in art carrying a severed head and bloodied sword, is honoured as the Great Mother and liberator from fear and ignorance. Enhanced by engagement with contemporary worshippers, faith communities and insights from high-profile collaborators Bonnie Greer, Mary Beard, Elizabeth Day, Rabia Siddique and Deborah Frances-White, the exhibition considers the influence of female spiritual power and what femininity means today. Bringing together sculptures, sacred objects and artworks from the ancient world to today, and from six continents, the exhibition highlights the many faces of feminine power – ferocious, beautiful, creative or hell-bent – and its seismic influence throughout time.",
              link: "https://www.britishmuseum.org/exhibitions/feminine-power-divine-demonic",
              hall: "British Museum",
              category: "Museum",
              countryCode: "uk"
            }, {
              country: "United Kingdom",
              title: "Hieroglyphs unlocking ancient Egypt",
              date: "13 Oct 2022 - 19 Feb 2023",
              thumbnailSrc: "https://www.britishmuseum.org/sites/default/files/styles/1_1_media_small/public/2022-06/Hieroglyphs_unlocking_ancient_Egypt_hero.jpg?h=917482ac&itok=u8baOce1",
              detail: "Explore the significant role that goddesses, demons, witches, spirits and saints have played – and continue to play – in shaping our understanding of the world. How do different traditions view femininity? How has female authority been perceived in ancient cultures? For insights, the exhibition looks to divine and demonic figures feared and revered for over 5,000 years. From wisdom, passion and desire, to war, justice and mercy, the diverse expression of female spiritual powers around the world prompts us to reflect on how we perceive femininity and gender identity today. Worship of Pele, the Hawaiian goddess of volcanoes, reveals how her destructive capacity is venerated alongside her ability to create. The Buddhist bodhisattva of compassion, who transcends gender and is visualised in male form in Tibet and female in China and Japan, uncovers the importance of gender fluidity in some spiritual traditions. And the terrifying Hindu goddess Kali, depicted in art carrying a severed head and bloodied sword, is honoured as the Great Mother and liberator from fear and ignorance. Enhanced by engagement with contemporary worshippers, faith communities and insights from high-profile collaborators Bonnie Greer, Mary Beard, Elizabeth Day, Rabia Siddique and Deborah Frances-White, the exhibition considers the influence of female spiritual power and what femininity means today. Bringing together sculptures, sacred objects and artworks from the ancient world to today, and from six continents, the exhibition highlights the many faces of feminine power – ferocious, beautiful, creative or hell-bent – and its seismic influence throughout time.",
              link: "https://www.britishmuseum.org/exhibitions/hieroglyphs-unlocking-ancient-egypt",
              hall: "British Museum",
              category: "Museum",
              countryCode: "uk"
            }, {
              country: "United Kingdom",
              title: "The woodpecking factory Victorian illustrations by the Brothers Dalziel",
              date: "17 May 2022 - 4 Sep 2022",
              thumbnailSrc: "https://www.britishmuseum.org/sites/default/files/styles/1_1_media_small/public/2022-05/Dalziel_Brothers_after_Dante_Gabriel_Rossetti_1828%E2%80%9382_The_Palace_of_Art_2100.jpg?h=54a376f0&itok=Cv-Zkgel",
              detail: "But the craftspeople (affectionately known as 'woodpeckers') who engraved such illustrations after designs by John Tenniel and Dante Gabriel Rossetti, to illustrate iconic writings by Lewis Carroll, Christina Rossetti, Charles Dickens and others, are too frequently forgotten. This intriguing new display highlights over 50 works engraved on wood by the Brothers Dalziel firm, illustrating literary and commercial work published throughout the Victorian period. In 1913 the British Museum acquired the firm's entire company archive of 54,000 proof wood engravings, now catalogued as part of the Dalziel Project(Opens in new window) in partnership with the University of Sussex. It investigates the vast body of visual art produced by the Brothers Dalziel for everything from popular novels to commercial adverts, global exhibitions and journalism. Wood engraving revolutionised the mass production of images in the Victorian era. Established in 1839, the Brothers Dalziel (one of whom was a sister – Margaret – a talented senior engraver) became the most successful wood-engraving company in Britain, employing dozens of engravers. The Brothers Dalziel had enormous cultural power in Victorian Britain, shaping the way people visualised art, goods and ideas. Mostly the engravers made images after designs by draughtspeople, including major artists such as Frederic Leighton and John Everett Millais, and it's these artists who were widely credited and remembered. However, the process was collaborative and the skill of the 'peckers' was considerable.",
              link: "https://www.britishmuseum.org/exhibitions/woodpecking-factory-victorian-illustrations-brothers-dalziel",
              hall: "British Museum",
              category: "Museum",
              countryCode: "uk"
            }, {
              country: "United Kingdom",
              title: "Drawing attention emerging British artists",
              date: "17 Mar 2022 - 28 Aug 2022",
              thumbnailSrc: "https://www.britishmuseum.org/sites/default/files/styles/1_1_media_small/public/2022-03/Charmaine_Watkiss_Double_Consciousness_Be_Aware_of_One%E2%80%99s_Intentions.jpg?h=1cf5baa4&itok=4HE4990w",
              detail: "Emerging artists are taking the medium of drawing in new directions – using innovative approaches, methods and media. This exhibition spans a wide range of techniques and practices, including drawings using make-up on face wipes by Sin Wai Kin fka Victoria Sin, and a drawing made with chalk collected from the White Cliffs of Dover by Josephine Baker. The exhibition includes artists who have lived, studied or worked in the UK. Several artists show how drawing, often considered a quiet or private medium, can be used to protest injustice. Catherine Anyango Grünewald has described the time and labour invested in her monumental drawings as a 'direct homage' to their subjects, often the victims of institutional crimes, while the painstaking detail of Irish artist Miriam de Búrca's drawings of clods of earth from cilliní – the unmarked graves of those deemed unfit for Christian burial – force us to confront an uncomfortable history. Over 20 new acquisitions will be shown for the first time alongside some of the most celebrated works from the Museum's collection by the likes of Andy Warhol, Käthe Kollwitz, Odilon Redon, Mary Delany and Michelangelo, demonstrating their continuities with the existing collection, and their relationships to historical traditions of drawing. These artists include some of the youngest ever collected by the Museum during their lifetime, and represent some of the most exciting up-and-coming names in the field of contemporary drawing. Please note the exhibition contains several works addressing themes of racial and sexual violence.",
              link: "https://www.britishmuseum.org/exhibitions/drawing-attention-emerging-british-artists",
              hall: "British Museum",
              category: "Museum",
              countryCode: "uk"
            }, {
              country: "United Kingdom",
              title: "Picasso Ingres: Face to Face",
              date: "Until 9 October 2022",
              thumbnailSrc: "https://www.nationalgallery.org.uk/media/lfve01dv/picasso-ingres-website-social-images-phase-22.jpg",
              detail: "'Lesser artists borrow; great artists steal.' Pablo Picasso For the first time, Picasso’s ‘Woman with a Book’ (1932) from the Norton Simon Museum, California, will be brought together with the painting that inspired it, ‘Madame Moitessier’ by Jean-Auguste-Dominique Ingres. Picasso first encountered the enigmatic ‘Madame Moitessier’ at an exhibition in Paris, in 1921, and was enthralled. Over the next decade, he repeatedly referenced Ingres in his art, and painted ‘Woman with a Book’, one of his most celebrated portraits, in homage to Ingres’s famous work. For Ingres, a 19th-century French artist steeped in the academic tradition, the beautiful and wealthy Madame Moitessier represented the classical ideal. Wearing her finest clothes and jewellery, she gazes at the viewer majestically, the embodiment of luxury and style during the Second Empire. Picasso, born 100 years after Ingres, is famous for a very different, abstract, style of art, but his inspiration is clear. The model for ‘Woman with a Book’, Picasso's then young mistress, Marie-Thérèse Walter, mimics Madame Moitessier’s distinct pose. The painting balances sensuality and restraint, striking a chord with the eroticism latent beneath Ingres’s image of bourgeois respectability. ‘Picasso Ingres: Face to Face’ is a unique opportunity to see these two portraits, side by side, for the first time, and to trace the continuous thread between 19th and 20th-century artistic development. Exhibition organised in partnership with the Norton Simon Museum, California.",
              link: "https://www.nationalgallery.org.uk/exhibitions/picasso-ingres-face-to-face",
              hall: "London National Gallery",
              category: "Gallery",
              countryCode: "uk"
            }, {
              country: "United Kingdom",
              title: "Winslow Homer: Force of Nature",
              date: "10 September 2022 - 8 January 2023",
              thumbnailSrc: "https://www.nationalgallery.org.uk/media/tfenn52g/winslow_homer_desktopbanner.jpg",
              detail: "For the first time in the UK, we present an overview of Winslow Homer (1836–1910), the great American Realist painter who confronted the leading issues facing the United States, and its relationship with both Europe and the Caribbean world, in the final decades of the 19th century. Homer’s career spanned a turning point in North American history. He lived through the American Civil War and the abolition of slavery, so-called Reconstruction, and war with the last colonial European power in the Americas, Spain. From his sketches of battle and camp life, to dazzling tropical views and darker restless seascapes, the works reflect Homer’s interest in the pressing issues of his time; conflict, race, and the relationship between humankind and the environment – issues still relevant for us today. After the war, Homer’s subject became the lives of Americans in the wake of the war and abolition with a focus on the lives of formerly enslaved African Americans. Homer travelled to France, England, the Bahamas, Cuba and Bermuda. In England, he painted scenes of heroism and resilience that he saw while staying in Cullercoats, a town on the North East coast. In the Caribbean, his paintings became more vivid as he painted the transparent turquoise waters and lush vegetation. His interest in conflict remained constant and he often explored the issue through painting the life and struggles of Black people. With more than fifty paintings, covering over forty years of Homer’s career, 'Winslow Homer: Force of Nature' is part of a programme of exhibitions that introduce major American artists to a UK and European audience and follows on from our exhibitions about George Bellows and the Ashcan painters, Frederic Church and Thomas Cole. Exhibition organised by the National Gallery and The Metropolitan Museum of Art, New York.",
              link: "https://www.nationalgallery.org.uk/exhibitions/winslow-homer-force-of-nature",
              hall: "London National Gallery",
              category: "Gallery",
              countryCode: "uk"
            }, {
              country: "United Kingdom",
              title: "The Credit Suisse Exhibition Lucian Freud: New Perspectives",
              date: "1 October 2022 – 22 January 2023",
              thumbnailSrc: "https://www.nationalgallery.org.uk/media/ykyly1qq/freud_desktopbanner_new.jpg",
              detail: "This first major exhibition of Lucian Freud’s work in 10 years brings together paintings from more than seven decades. The exhibition presents the paintings of one of Britain's most well-known figurative painters, Lucian Freud (1922–2011). It spans a lifetime of work, showing how Freud’s painting changed during 70 years of practice from his early and intimate works to his well-known, large-scale canvasses and his monumental naked portraits. Through more than 60 paintings, you will see the development of an artist: paintings of powerful public figures are followed by private studies of friends and family; the familiar, domestic setting gives way to the artist’s paint-splattered studio – a place that becomes both stage and a subject in its own right – and the approximated features of his earliest paintings are complemented by the expertly rendered flesh of his final works. Freud's celebrity often overshadowed the work he produced and the historical context in which they were made. Bringing to light new perspectives on a lifetime’s work, this exhibition looks beyond Freud's fame and infamy to focus on the artist's uncompromising commitment to painting in the 20th century.",
              link: "https://www.nationalgallery.org.uk/exhibitions/the-credit-suisse-exhibition-lucian-freud-new-perspectives",
              hall: "London National Gallery",
              category: "Gallery",
              countryCode: "uk"
            }, {
              country: "United Kingdom",
              title: "Beatrix Potter: Drawn to Nature",
              date: "On now until Sunday, 8 January 2023",
              thumbnailSrc: "https://assets-cdn.vam.ac.uk/2021/12/01/14/05/20/0f2a960b-663a-4d33-b939-aedade27c61b/2560.jpg",
              detail: "This family friendly exhibition takes visitors on a journey to discover Potter's life as a scientist and conservationist and explores the places and animals that inspired her most beloved characters. In collaboration with the National Trust.",
              link: "https://www.vam.ac.uk/exhibitions/beatrix-potter-drawn-to-nature",
              hall: "V&A South Kingston",
              category: "Museum",
              countryCode: "uk"
            }, {
              country: "United Kingdom",
              title: "Fashioning Masculinities: The Art of Menswear",
              date: "On now until Sunday, 6 November 2022",
              thumbnailSrc: "https://assets-cdn.vam.ac.uk/2022/07/07/08/28/28/234b0d8e-108e-41d0-8150-8e7d14ced6f7/640.jpg",
              detail: "At a moment of unprecedented creativity in men's fashion, this exhibition explores how designers, tailors and artists – and their clients and sitters – have constructed and performed masculinity, and unpicked it at the seams.",
              link: "https://www.vam.ac.uk/exhibitions/fashioning-masculinities-the-art-of-menswear",
              hall: "V&A South Kingston",
              category: "Museum",
              countryCode: "uk"
            }, {
              country: "United Kingdom",
              title: "AFRICA FASHION",
              date: "On now until Sunday, 16 April 2023",
              thumbnailSrc: "https://assets-cdn.vam.ac.uk/2022/06/08/13/55/43/a0a07dbc-dcec-4909-ab12-1b5f46251329/640.jpg",
              detail: "Spanning iconic mid-20th century to contemporary creatives through photographs, textiles, music and the visual arts, Africa Fashion explores the vitality and global impact of a fashion scene as dynamic and varied as the continent itself.",
              link: "https://www.vam.ac.uk/exhibitions/africa-fashion",
              hall: "V&A South Kingston",
              category: "Museum",
              countryCode: "uk"
            }, {
              country: "United States",
              title: "Dutch and Flemish Art",
              date: "Ongoing",
              thumbnailSrc: "https://d1nn9x4fgzyvn4.cloudfront.net/styles/scaled_1152_wide/s3/2021-12/SC437360_16x9.jpg?itok=0kXjLOVx",
              detail: "In the 17th century, global commerce fueled the economy of the Netherlands and sparked an artistic boom. Dutch merchants sailed from Amsterdam and other ports across seas and oceans, joining trade networks that stretched from Asia to the Americas and Africa. This unprecedented movement of goods, ideas, and people, both free and enslaved, gave rise to what some have called the first age of globalization. Prosperous citizens commissioned and collected art in great volume and the artistic high points of this period continue to be deeply admired today. This suite of renovated galleries at the MFA employs up-to-date research to explore the nexus between art, commerce, and science in the Dutch Republic and Flanders. Nearly 100 paintings by the greatest masters—including Rembrandt van Rijn, Peter Paul Rubens, Gerrit Dou, Frans Hals, and Anthony van Dyck—plus works on paper and decorative arts such as silver and Delft ceramics represent this rich visual culture. Organized thematically, the installation examines a variety of subjects: women artists and patrons; the growth of a modern art market; and the unexpected connection between still life paintings, the sugar trade, and slavery. Among the many highlights are Rembrandt’s moving Portrait of Aeltje Uylenburgh (1632), a Dutch doll’s house filled with nearly 200 miniature furnishings, and an early self-portrait by Van Dyck posing as Icarus, painted when the artist was just 19 years old. The opening of the new galleries celebrates the launch of the Center for Netherlandish Art (CNA), an innovative center for scholarship housed at the MFA and the first resource of its kind in the US. The CNA was established with initial endowment funds from Rose-Marie and Eijk van Otterloo and Susan and Matthew Weatherbie, given as part of a landmark 2017 gift that also included many of the paintings on view in the installation. ​",
              link: "https://www.mfa.org/gallery/dutch-and-flemish-art",
              hall: "Museum of Fine Arts, Boston",
              category: "Gallery",
              countryCode: "us"
            }, {
              country: "United States",
              title: "Stories Artists Tell Art of the Americas, the 20th Century",
              date: "Ongoing",
              thumbnailSrc: "https://d1nn9x4fgzyvn4.cloudfront.net/styles/scaled_1152_wide/s3/2022-04/SC437905_Homepage_Banner_16x9_V1.jpg?itok=usgm2JIR",
              detail: "Each room in this new suite of galleries presents a single chapter in the larger history of 20th-century art from the Americas. Together they span place and time, and explore different themes—from Native perspectives on the Southwest to ways artists reckoned with the traumas of World War II, from the knotty politics of Latin American realism to the vibrant links between art, design, and jazz. As in reading an anthology, visitors are invited to consider each space independently, or to think about the threads that weave together a larger whole. Many of the artists represented here devoted their lives and careers to resisting and reimagining conventions. Through their work, these galleries tell stories about boundaries crossed, borders challenged. Icons from the MFA’s collection appear alongside works by underrecognized artists, creating combinations, juxtapositions, and connections that make room for questions as well as possibilities. “Stories Artists Tell: Art of the Americas, the 20th Century” also gives context to a series of changing exhibitions in the central gallery (Gallery 332). The first, “Touching Roots: Black Ancestral Legacies in the Americas,” brings together work by Black artists who engaged with African artistic traditions, aesthetic expressions, and sacred practices. To acknowledge the cultural heritage of many visitors, as well as some of the artists with work on view, introductory gallery texts are presented in both Spanish and English.",
              link: "https://www.mfa.org/gallery/stories-artists-tell",
              hall: "Museum of Fine Arts, Boston",
              category: "Gallery",
              countryCode: "us"
            }, {
              country: "United States",
              title: "Touching Roots Black Ancestral Legacies in the Americas",
              date: "May 26, 2022–May 21, 2023",
              thumbnailSrc: "https://d1nn9x4fgzyvn4.cloudfront.net/styles/scaled_1152_wide/s3/2022-04/SC16443_Homepage_Banner_16x9_V2.jpg?itok=ZdsMI0BV",
              detail: "Africa is at once a point of origin and a myriad of associations—real and imagined—for many Black artists working in the Americas. In the 20th century, some artists self-consciously responded to writer and philosopher Alain LeRoy Locke’s call to engage with “those ancestral arts.” Others continued to practice African artistic traditions passed down through generations. This exhibition traces narratives of Blackness across the Atlantic world by bringing together work from artists who absorbed and reinterpreted African artistic practices, sacred customs, and cultural expressions. The artworks honor ancestral spirits and Black legacies through painting, sculpture, textiles, and dance. Artists from throughout the Americas are represented—with a special focus on those from or working in New England, like Allan Rohan Crite, Napoleon Jones-Henderson, Ifé Franklin, Bryan McFarlane, Karen Hampton, and Stephen Hamilton. Highlights from the collection include Ubi Girl from Tai Region (1972) by Loïs Mailou Jones, African Woman (about 1933) by James Richmond Barthé, Untitled (1943) by Wifredo Lam, and George Jackson (1971) by Kofi Bailey. Visitors can explore how shared cultural heritages created connections that formed the basis of communities, highlighting the importance of Africa’s presence in the Americas. By turning their gaze inward and toward Africa, Black artists grounded their artistic expressions and infused strength and insight into their work. This exhibition accompanies “Stories Artists Tell: Art of the Americas, the 20th Century,” a suite of galleries spanning place and time, and exploring different themes surrounding 20th-century art from the Americas. Outside scholars and collaborators have been essential in the conceptualization and planning of this exhibition. Many thanks to Chenoa Baker, Kyrah Malika Daniels, Napoleon Jones-Henderson, and Stephen Hamilton.",
              link: "https://www.mfa.org/exhibition/touching-roots",
              hall: "Museum of Fine Arts, Boston",
              category: "Gallery",
              countryCode: "us"
            }, {
              country: "United States",
              title: "The Banner Project: Diedrick Brackens",
              date: "June 16, 2022–June 9, 2023",
              thumbnailSrc: "https://d1nn9x4fgzyvn4.cloudfront.net/styles/scaled_1152_wide/s3/2022-07/SC441551_Homepage_Banner_16x9.jpg?itok=fRqRrdIK",
              detail: "Through dreamlike woven tapestries, Texas-born artist Diedrick Brackens (b. 1989) explores African American and queer identity, his own life, and broader American history. He usually begins his colorful textiles by hand-dyeing cotton, a material that is cheap and ubiquitous, but for his “Banner Project” Brackens chose a different process. Working with Designtex on a commercial loom, Brackens foregrounds the fraught connections between hand and machine labor in the United States—specifically the cotton industry’s brutal reliance on enslaved people (including Brackens’s own forebears), who were forced to pick cotton by hand and enjoyed no profit when it was sent to the mills. The tapestry depicts catfish swimming in water among reeds, watched closely by a solitary figure. Catfish, which thrive in muddy riverbeds in the American South, are often derided as common. But Brackens sees them as a symbol of his geographic and cultural roots, and throughout his work he frames them as worthy of consideration “in the way that the tapestries of the Middle Ages exalted unicorns, lions, dragons, and stags.” Brackens’s banner responds to a tapestry in the MFA’s collection by John Henry Dearle (1860–1932), an artist who also looked back to the medieval period. As mechanization and factory production became more prevalent at the turn of the 20th century, Dearle and his peers from the British Arts and Crafts movement reacted to the perceived decline of art, craft, and even life itself by promoting the dignity of labor done by hand. Commissioned for this exhibition, Brackens’s banner asks visitors to consider the extensive textile history in New England, where mills proliferated, often built on violent labor conditions for those who picked and processed their raw materials. But the motif of the catfish refuses any singular reading, offering the artist a way to reflect on “sustenance, my ancestors, and myself; it functions as a spirit linking the living and dead.”",
              link: "https://www.mfa.org/exhibition/the-banner-project-diedrick-brackens",
              hall: "Museum of Fine Arts, Boston",
              category: "Gallery",
              countryCode: "us"
            }, {
              country: "United States",
              title: "Community Arts Initiative: Empowered Faces",
              date: "June 3–October 24, 2022",
              thumbnailSrc: "https://d1nn9x4fgzyvn4.cloudfront.net/styles/scaled_1152_wide/s3/2022-05/CAI_Collage_16x9.jpg?itok=kubzcrg1",
              detail: "“Empowered Faces” is a mixed-media mural that showcases young artists’ self-portraits through abstracted forms. Artist and educator Perla Mabel collaborated with students from the Museum’s Community Arts Initiative partners in the Boston area on the project, teaching them to celebrate cultural identity and self-discovery in their art. The final layered installation documents the students’ creative processes, using collage and sewing to express how individual experiences come together to represent a diverse, collective community. Works from the Museum’s collection by Faith Ringgold, Ekua Holmes, and others complement the students’ self-portraits by demonstrating how personal narrative and introspection result in unique, multilayered works of art. The young artists studied these works as a key part of the learning process, empowering them to create their own personalized representations. The cumulative mural includes mirrored acrylic, encouraging visitors to see themselves as a welcome part of the narrative. “Empowered Faces” marks the 17th year of the Community Arts Initiative, through which the MFA partners with community organizations to introduce young people ages 6 to 12 to the Museum’s collection and the art-making process. For this exhibition, through the Community Arts Initiative, the Museum is proud to partner with the Berkshire Partners Blue Hill Boys & Girls Club, the Boston Chinatown Neighborhood Center, the Charlestown Boys & Girls Club, the Boys & Girls Clubs of Dorchester, the Edgerley Family South Boston Boys & Girls Club, the Jordan Boys & Girls Club, the Orchard Gardens Boys & Girls Club, Sociedad Latina, United South End Settlements, the Vine Street Community Center, the West End House Boys & Girls Club of Allston-Brighton, and the Yawkey Boys & Girls Club of Roxbury.",
              link: "https://www.mfa.org/exhibition/community-arts-initiative-empowered-faces",
              hall: "Museum of Fine Arts, Boston",
              category: "Gallery",
              countryCode: "us"
            }, {
              country: "United States",
              title: "Floating Museum: A Lion for Every House",
              date: "Jun 16–Oct 17, 2022",
              thumbnailSrc: "https://artic-web.imgix.net/cb027aa4-a8f0-4bd9-9ad2-825f72524fac/J7612_002-int.jpg?rect=0%2C63%2C3000%2C1688&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=1500&h=844",
              detail: "The Chicago art collective Floating Museum—co-directed by Jeremiah Hulsebos-Spofford, Faheem Majeed, Andrew Schachman, and avery r. young—uses art to explore relationships among community, architecture, and public institutions. For this project, the Art Institute invited the collective to mine the museum’s photography collection as the starting point for a new site-specific installation—one that further connects the museum to the communities it serves and aims to assemble a new community in the galleries. Floating Museum, along with three curators in Photography and Media at the Art Institute—Grace Deveney, Elizabeth Siegel, and Matthew Witkovsky—extended invitations to 10 photographers and paired them with 10 local “hosts”—political leaders, activists, and arts supporters in the city. In a series of Zoom conversations, Floating Museum talked extensively with each host about their lives and experiences. Each host was asked to choose one of three photographs from the Art Institute’s collection, and a copy of that work was sent to the host to display in a place they had designated as “home.” Each photographer made a portrait of their host with their chosen work in that home setting. Finally, Floating Museum incorporated each new photograph into a lightbox sculpture further illuminated by domestic lighting. A Lion for Every House brings together all of these components in the Art Institute’s galleries: the 30 original photographs from the collection, including the 10 ultimately selected by each host; the new photographs taken of the hosts and their selected work; and the sculptural installation inspired by the entire process. The exhibition takes its title from Sonia Sanchez’s epic poem, Does Your House Have Lions? In Sanchez’s telling, lions stand in for the people and things that protect a family and a home; at the Art Institute, they famously guard the entrance to a vast repository of artworks held for public benefit. By creating a circuit in which copies of museum objects move to other homes, are reproduced and transformed in those settings, and then return to the galleries and inspire new work, the exhibition explores how the walls between institutional, civic, domestic, and community spaces can become more porous. It also invites us to consider the power of collective and collaborative work and to reflect on what it means for an institution and a community to be generous and accessible.",
              link: "https://www.artic.edu/exhibitions/9780/floating-museum-a-lion-for-every-house",
              hall: "Art Institute Chicago",
              category: "Gallery",
              countryCode: "us"
            }, {
              country: "United States",
              title: "Life and Afterlife in Ancient Egypt",
              date: "Now Open",
              thumbnailSrc: "https://artic-web.imgix.net/nullfc9cc2b2-5d29-45e2-b3e3-bdf084ccb91a/Mummy-Mask-IF.jpg?rect=0%2C267%2C1721%2C968&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=1000&h=562",
              detail: "The transformed space explores aspects of life and the afterlife in the Nile Valley with the first new installation of works from the museum’s historic collection of ancient Egyptian art in a quarter-century. Striking artifacts—displayed along one wall of the gallery in a series of innovative cases that promote viewing from multiple vantage points—provide insight into the beliefs and practices of this illustrious North African culture. Recurring themes throughout this fresh presentation of the collection consider the impact of Egypt’s natural environment, including the Nile River, on its visual culture; reveal the processes of ancient Egyptian artists; and explore the centrality of gods and goddesses to life (and death) along the Nile. Arresting sculptures, such as the statue of Shebenhor, reveal how ancient Egyptians chose to present themselves so that they would be remembered for eternity, while funerary works—such as a gilded funerary mask—unveil practices for preparing for and protecting oneself in the afterlife.",
              link: "https://www.artic.edu/exhibitions/9761/egyptian-art",
              hall: "Art Institute Chicago",
              category: "Gallery",
              countryCode: "us"
            }, {
              country: "United States",
              title: "Jonathan Muecke: Objects in Sculpture",
              date: "May 26–Oct 10, 2022",
              thumbnailSrc: "https://artic-web.imgix.net/4ab87aaa-c5c0-45f2-ab7c-56cf47238118/220106_070_AIC__MUECKE_05_STAB.jpg?rect=628%2C1214%2C2445%2C1373&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=1000&h=562",
              detail: "Does color have shape? What is the texture of scale? Is it possible to eliminate surface? Can space expand? For more than a decade, American designer Jonathan Muecke (born 1983) has tackled such deceptively straightforward yet puzzling questions about the relationship between form, material, and perception through a range of creative experiments. Whether working in steel, wood, textile, or composite materials, Muecke’s intent remains consistent: to produce objects that challenge our spatial expectations and habits, prompting us to experience our physical environments—and to understand our place within them—anew. Objects in Sculpture, the designer’s first solo exhibition in a major museum, presents a selection of key works that Muecke identifies as “open objects.” Harnessing precise, spare lines and evocative shapes, the objects eschew traditional design typologies and historical references. Each work rigorously questions the interdependence and possible synthesis of formal and material phenomena. The resulting objects are curious, enigmatic, but also familiar: a rock with holes; a faceted curvature of carbon fiber felt; a five-sided, open box made of steel; a textile volume with concave surfaces; a continuous, multitiered wooden zig-zag. Muecke insists that these ascetic objects—while meticulously crafted and deliberately devoid of details—are not minimal. Instead, he argues, the objects are “maximums,” each manifesting the limits of legibility and perception, memory and apprehension, and therefore have the capacity to generate new relationships between objects, bodies, and space.",
              link: "https://www.artic.edu/exhibitions/9581/jonathan-muecke-objects-in-sculpture",
              hall: "Art Institute Chicago",
              category: "Gallery",
              countryCode: "us"
            }, {
              country: "United States",
              title: "Kingfisher Headdresses from China",
              date: "May 21, 2022–May 21, 2023",
              thumbnailSrc: "https://artic-web.imgix.net/dade8b5f-2858-44f7-b8c8-d751c7a1b0d9/J6210-int_press.jpg?rect=0%2C281%2C3000%2C1688&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=1000&h=563",
              detail: "The brilliant turquoise-blue is not a pigment but results from the way their transparent feathers refract light. By the Song dynasty (960–1278), portraits of empresses showed them wearing headdresses adorned with kingfisher ornaments. Few examples of this fragile artistry have survived, and the earliest ones come from the tomb of the Wanli Emperor (reigned 1572–1620), in which archaeologists found four elaborate kingfisher crowns worn by his empresses. The vivid feathers were expensive, with the most prized specimens imported from Cambodia and Vietnam. Artisans cut them to shape before painstakingly pasting the feathers onto gilded metal backing that formed the structure of the headdresses. Precious and semiprecious stones such as rubies, agate, and jadeite as well as other valuable materials including amber, coral, and pearls added to the splendid effect. Although the most sumptuous examples were worn by empresses and consorts, aristocratic and wealthy women also wore kingfisher crowns and jewelry on special occasions such as birthdays and weddings. Popular motifs—bats, butterflies, dragons, and phoenixes—symbolized various aspects of good fortune. This exhibition brings together over 20 objects crafted from these extraordinarily beautiful feathers, all promised gifts from Barbara and David Kipper. They include ornate headdresses as well as smaller pieces of jewelry and hairpins, which provided a less cumbersome touch of glamour.",
              link: "https://www.artic.edu/exhibitions/9703/kingfisher-headdresses-from-china",
              hall: "Art Institute Chicago",
              category: "Gallery",
              countryCode: "us"
            }, {
              country: "United States",
              title: "Henry Mosler Behind the Scenes: In Celebration of the Jewish Cincinnati Bicentennial",
              date: "June 10–September 4, 2022 • Galleries 124 and 125",
              thumbnailSrc: "https://www.cincinnatiartmuseum.org/media/296862/1928136_v01_o4-t2.png",
              detail: "Henry Mosler (1841–1920) achieved an international reputation in the late nineteenth century for narrative paintings rich in detail. Born in Prussia to a Jewish family that settled in Cincinnati, the artist won success at the Salon exhibitions in Paris for paintings depicting the rituals of daily life in Brittany. Drawn from the extensive collection of the artist’s work at the Cincinnati Art Museum, with a few select loans, this exhibition relates Mosler’s journey and takes a close look at how he developed his paintings through studies across media. Learn more about how Cincinnati celebrates the 200th anniversary of the city’s Jewish community with an exciting roster of events throughout the region at jewishcincy200.org.",
              link: "https://www.cincinnatiartmuseum.org/art/exhibitions/upcoming-exhibitions/henry-mosler/",
              hall: "Cincinnati Art Museum",
              category: "Museum",
              countryCode: "us"
            }, {
              country: "United States",
              title: "The Paper Sculpture Manual",
              date: "Now–TBD • Online",
              thumbnailSrc: "https://www.cincinnatiartmuseum.org/media/295218/paper-sculpture-manual-callout.jpg",
              detail: "Although we remain socially distanced from many of our loved ones and neighboring communities during this exceptional time, art remains a powerful source of inspiration and connection that can bring people together—even remotely. The Cincinnati Art Museum along with the Independent Curators International (ICI) invite our global digital community to create and collaborate with The Paper Sculpture Manual, a downloadable, printable, and shareable manual to take you away from your screens and recreate art experiences in domestic spaces. These shareable designs from The Paper Sculpture Show, a traveling exhibition in 2003-2007, feature three-dimensional paper sculptures designed by twenty-nine international artists and artist collaboratives that are meant to be assembled by you, the visitor. Don’t have access to a printer? That’s okay! We encourage participators to assemble their favorite pieces into paper sculptures using whatever readily accessible materials are at their disposal. Repurposing and transforming magazines, old newspapers, books, and cardboard boxes and containers is, in part, the ethos of this exhibition—bringing new meaning to an existing form, giving depth and dimension to a flat surface. The Paper Sculpture Show raises many questions: Who is the author of these three-dimensional objects, the artists who designed them, or the visitors who assemble them at home? Which is the original and which the copy? Instead of providing answers, The Paper Sculpture Show suggests flexible definitions of a work of art that accommodate the variety of creative practices that now constitute contemporary art and culture. Now the question is: what are YOU going to make? Create one or all twenty-nine. Be sure to tag us on social media using #papersculpturemanual, so we can follow along! Each paper sculpture measures 10 x 12 3/4 inches and will require no more than four sheets of paper, along with a limited set of tools including: scissors, tape, and glue for assembly. Stay tuned for more exciting content here and on our Facebook Group, CAM Connect, as we take a special look at our permanent collection through the expressive and dimensional medium of paper.",
              link: "https://www.cincinnatiartmuseum.org/art/exhibitions/the-paper-sculpture-manual/",
              hall: "Cincinnati Art Museum",
              category: "Museum",
              countryCode: "us"
            }, {
              country: "United States",
              title: "do it (home)",
              date: "Now–TBD • Online",
              thumbnailSrc: "https://www.cincinnatiartmuseum.org/media/256253/do-it-home-callout.jpg",
              detail: "As many of us across the globe are experiencing social distancing and orders to stay at home, the Cincinnati Art Museum is joining Independent Curators International (ICI) and over 30 art spaces around the world in sharing do it (home). This interactive exhibition, curated by Hans Ulrich Obrist, provides a set of art-making prompts that can easily be brought to life in your own home. These instructions have been created by contemporary artists, including some who are represented in our permanent collection. According to Obrist, “do it has always been global and local, public and private — spheres of life that for many have coalesced in recent months.” do it (home) will take you away from your screens, and recreate an art experience at home. You are invited to be an active participant by responding to the artists’ prompts, following their lead, and realizing an artwork on their behalf. Some artists will guide you in creating a physical work of art, while others encourage you to reflect on the world around you. When you are ready, share your creation online and make connections with other doers using #doithomeCAM or by sharing on our website using the form below. Artist prompts are available in both English and Spanish. In 1993, Hans Ulrich Obrist together with artists Christian Boltanski and Bertrand Lavier, conceived do it, an exhibition based entirely on artists’ instructions, which could be followed to create temporary art works for the duration of a show. do it has challenged traditional exhibition formats, questioned authorship, and championed art’s ability to exist beyond a single gallery space. Since do it began, many new versions have appeared, including do it (museum), do it (tv), and do it (in school). Over time, do it has grown from 12 to over 400 sets of artists’ instructions, and has been shown in more than 150 art spaces in over 15 countries.",
              link: "https://www.cincinnatiartmuseum.org/art/exhibitions/do-it-home/",
              hall: "Cincinnati Art Museum",
              category: "Museum",
              countryCode: "us"
            }, {
              country: "Russia",
              title: "Alexandre Roubtzoff",
              date: "28 april—19 september 2022",
              thumbnailSrc: "http://1.bp.blogspot.com/--3Ffp_xI5YE/YBF19LhXRcI/AAAAAAAAqCM/cJBdtm5rSXMshZd6fDKR0pS-eozRWIUQQCLcBGAsYHQ/s16000/Alexandre%2BRoubtzoff%2B%25281%2529.JPG",
              detail: "Alexandre Roubtzoff (1884–1949) – a unique Russian artist who, by the will of fate, turned out to be the 'singer and chronicler' of Tunisia. Being a pensioner of the St. Petersburg Academy of Arts, from 1914 he lived and worked in Tunisia. The First World War made it impossible for him to return to Russia. The young artist settled in the suburbs of the capital of Tunisia, traveled around North Africa, repeatedly visited Algeria, Morocco. The land of great contrasts: with the sands of the Sahara and the snowy Atlas mountains; from the uninhabited expanses to the narrow city streets of the 'medina' – was where the skill of the landscape painter Alexandre Roubtzoff flourished. His name soon becomes known: his art works are getting published in magazines, he participates in exhibitions, receives commisions for portraits. This would be the only source of livelihood after 1917, when his ties with Russia would break. In French artistic circles in the 1920s, Roubtzoff, a native of St. Petersburg, gained fame for his art works, conveying the image of a wonderful world that captured him with its fabulousness, exoticism and colorfulness. Almost all of Roubtzoff 's creative life was spent in Tunisia. Most of the subjects are North African landscapes with their amazing lighting, Moorish folklore, Arab life and applied art. From time to time, Roubtzoff, who has taken French citizenship, traveled to Europe; almost every year he exhibited his works in France, and also repeatedly – in the capital of Morocco, Rabat. The artist was awarded the Order of the French Academy of Arts; and in Tunisia he took part in the creation of the Center for the Arts. Throughout his life, Roubtzoff was reluctant to sell his work, so that his extensive legacy has been well-preserved. The exhibition at the Russian Museum will feature more than 80 paintings and drawings of different years from the private collection of Mehdi Douss. The exposition will also include several works by Y. Zionglinsky, D. Kardovsky - the artist's academic teachers from the collection of the State Russian Museum.",
              link: "http://en.rusmuseum.ru/mikhailovsky-castle/exhibitions/alexandre-roubtzoff/",
              hall: "The State Russian Museum",
              category: "Gallery",
              countryCode: "ru"
            }, {
              country: "Russia",
              title: "THE FIRST PEOPLE'S COMMISSAR FOR FOREIGN AFFAIRS IN THE SOVIET UNION",
              date: "07.10.2022 - 08.01.2023",
              thumbnailSrc: "https://www.kreml.ru/pi/c4m1/i50203/slaider.jpg",
              detail: "The exhibition, marking two important anniversaries – the 100th Anniversary of the Union of Soviet Socialist Republics and the 150th Anniversary of the brilliant diplomat, the first People's Commissar for Foreign Affairs of the USSR, Georgy Vasilievich Chicherin – brings together over eighty unique objects, most of which are presented to the public for the first time. The central place in the display is given to historical rarities from the collection of Moscow Kremlin Museums – the Red Army uniforms and presents from foreign delegations, which belonged to the legendary commissar identified as such as a result of recent research. Memorial items, as well as documents and photographs provided by the leading Russian archives, phaleristics artifacts, remarkable samples of agitation porcelain with revolutionary slogans, paintings, graphics and artistic metal from the Russian museum collections, tell about the life and work of G.V. Chicherin and about the turbulent and controversial era in which he was entrusted to be the leader of the Soviet Foreign Office. On the 100th Anniversary of the USSR, it is worth remembering that G.V. Chicherin, who was a consistent advocate of the centralized model of foreign policy management, played a significant role in establishing the all-union People's Commissariat for Foreign Affairs. The letter of 1923 signed by Stalin – presented at the exhibition – makes a point of the direct and active participation of G.V. Chicherin in 'working out' the first USSR Constitution as well. It is for the first time when the Moscow Kremlin Museums will show sets of uniforms of 1922-1924 model belonging to G.V. Chicherin: two soldier blouses, galifé pants and a greatcoat with sew-on buckle strips on chest. The great value of these items is due both to their commemorative significance and almost perfect condition, for only a few genuine examples of the Red Army uniform of the early 1920s have survived to this day. During official receptions in the Kremlin, the military uniform became a worthy alternative to the tails, tuxedo and top hat, which were stipulated by the norms of international protocol, but in Soviet Russia were associated with a hostile 'bourgeoisie'. Another indispensable attribute without which contemporaries could hardly imagine the Commissar was his briefcase for documents. Visitors will be the first to see G.V. Chicherin's black calico briefcase, which dates back to the pre-revolutionary period when the future Commissar lived in exile in Western Europe. We can assume that in 1922, in a similar briefcase, the head of the Soviet delegation brought the text of the keynote speech to the Genoa Conference, which he read in French and English in the hall of the Palazzo San Giorgio and which made a deep impression on the participants of the international forum. It was the first time the representative of the new Soviet government, addressing the global political elites, put forward the principle of peaceful coexistence and mutually beneficial economic cooperation between states with different social systems and declared the need for an overall reduction of armaments. One of the items on display is the draft of G.V. Chicherin's speech in Russian, along with photographs taken during the Soviet diplomats' trip to Genoa. As a joke Georgy Vasilievich Chicherin was referred to as 'the head of the Orient faction in the People's Commissariat'. The new foreign policy of the Soviet country indeed reckoned for active diplomatic relations with its Asian neighbours. In this connection, a special place is given to the group of oriental garments presented to G. V. Chicherin by the Asian delegations. Those gifts included a Bukhara robe, which the head of the People's Commissariat for Foreign Affairs wore during the official reception given for the delegation from Bukhara in 1924, and a Mongolian national robe, which replenished the Commissar's closet after he signed the agreement with the Mongolian People's Republic in 1921. In these fanciful oriental robes G.V. Chicherin appears on the photographs and rare documentary footage which are also on display. In the first post-revolutionary years, G.V. Chicherin succeeded in virtually re-forming the office of the People's Commissariat for Foreign Affairs and introduced into its activities both – the rich diplomatic experience of the past and new principles and approaches aimed at ensuring the security of the Soviet Union and protecting its interests. It is indicative that the basic goals and guidelines of the Foreign Office, formulated by G. V. Chicherin in the Regulations on the People's Commissariat for Foreign Affairs of the USSR dated 12 November 1923, remained relevant throughout the existence of the Soviet Union, being replaced by the Regulations on the Russian Ministry of Foreign Affairs only at the very end of the 20th century.",
              link: "https://www.kreml.ru/en-Us/exhibitions/moscow-kremlin-exhibitions/pervyy-narkom-po-inostrannym-delam-sovetskogo-soyuza-k-150-letiyu-so-dnya-rozhdeniya-gv-chicherina-i-100-letiyu-obrazovaniya-sssr/",
              hall: "Moscow Kremlin Museum",
              category: "Gallery",
              countryCode: "ru"
            }, {
              country: "Russia",
              title: "THE DUEL: FROM TRIAL BY COMBAT TO A NOBLE CRIME",
              date: "13.05.2022 – 14.08.2022",
              thumbnailSrc: "https://www.kreml.ru/pi/c4m1/i49616/slaiderdueljpg.jpg",
              detail: "Duelling was born long before the affair of honour of the 18th-19th centuries, well-known thanks to Russian classical literature. Postulates of defending the nobleman’s honour were formed in the 16th-17th centuries to the sound of crossing blades and moans of the deadly wounded. It is to this fascinating time that the exhibition 'The Duel: from Trial by Combat to a Noble Crime' is dedicated. Duels of that era are mostly familiar to us because of the novels of Alexandre Dumas and numerous movies based on them, depicting duellists as noble heroes. But actual duels and duellists are much less known. Unique exhibits will help to immerse in the world of duels of the 16th-17th centuries; many are exhibited in Russia for the first time and never before seen in the same space. The display features over a hundred and forty artefacts – rare drawings, engravings, paintings, treatises on the art of fencing, arms and armour of that time, given on loan by Russian museums and libraries. Duels were preceded by the medieval tradition of trial by combat. In a judicial duel, God was believed to help the one standing up for a righteous cause, as it happened in the Old Testament battle of David and Goliath. The duellers believed that a crime against honour was like murder, and the perpetrator deserved death, so they were entitled to the honour defence in a duel. The honour defence idea was not alien even to monarchs who esteemed the laws of chivalry. The exhibition tells about the planned duel between Holy Roman Emperor Charles V and King Francis I of France that never took place — the portrait of the French King and his armour and arms, as well as the armour of Charles V, are on display. A landmark in the history of duels is the last trial by combat in France, held in 1547 between Baron de Jarnac and Seigneur de La Chateigneraie. That duel was caused by the actions of the future King Henry II, who tried to smear Jarnac. A fine portrait that preserves Henry II's appearance and an engraving of his death scene at the tournament are also on display. Visitors to the exhibition can visualize the 16th-century court duelist thanks to the drawings and engravings, arms and armour and elegant jewellery of that period. The monarchs, the church, and the jurists tried to fight duels considering it an enormous crime. However, they had to reckon with the position of the aristocracy, which often took duellists under its protection. Kings themselves were brought up on chivalric ethics, were considered the first nobles of their kingdoms, and could not ignore the rules of the code of honour. Therefore, the anti-duel policy was inconsistent – the severity of the laws that threatened duellers with capital punishment and confiscation of property was compensated by their non-compliance. Only in some particularly scandalous cases, duellists were subjected to actual prosecution. On display is a portrait of Jean-Baptiste Budes de Guébriant, who had to hide in exile because of his involvement in a duel — but that did not later interfere with the brilliant military career of this French marshal. The art of swordsmanship, which nobles were taught in childhood, is inextricably linked to the advent of duels. On display are duelling weapons and treatises on fencing from the most famous teachers and masters of the 16th-17th centuries. The famous printmaker Jacques Callot's etchings depicting duel scenes accompany the swords used in duels by noble aristocrats. Struggle against the duelling became part of the monarchical policy of subordinating the nobility. King Louis XIV achieved the utmost success in that – he even was proclaimed the vanquisher of duels. A special medal was coined to commemorate this supposed victory. However, he did not manage to eradicate the duelling custom in full. During the Sun King’s reign, duels became rarer and less bloody; they were hidden from the authorities and carried out without witnesses in secluded places. But immediately after the French monarch died, several high-profile duels occurred, marking a new stage in the duelling history. An affair of honour tradition continued and gradually disappeared only in the 20th century.",
              link: "https://www.kreml.ru/en-Us/exhibitions/moscow-kremlin-exhibitions/duel-ot-bozhego-suda-do-blagorodnogo-prestupleniya/",
              hall: "Moscow Kremlin Museum",
              category: "Gallery",
              countryCode: "ru"
            }, {
              country: "Russia",
              title: "PETER THE GREAT. JOURNEYS TO EUROPE",
              date: "8 JUNE – 13 NOVEMBER 2022",
              thumbnailSrc: "https://www.kreml.ru/pi/c4m2/i50156/slaider.jpg",
              detail: "Russian Academy of Sciences Library, State Tretiakov Gallery, State Darwin Museum, State Historical Museum, State Museum and Heritage Site 'Peterhof', Pushkin State Museum of Fine Arts, State Russian Museum, State Hermitage, Historical and Documentary Department of the Ministry of Foreign Affairs of the Russian Federation, The Moscow Kremlin Museums, Museum of Anthropology and Ethnography named after Peter the Great (Kunstkammer) of Russian Academy of Sciences, 'Kuskovo' Estate Museum, Pereslavl-Zalessky State Historical, Architectural and Art Museum and Heritage Site, Russian State Library, Russian State Archive of Ancient Documents, Serpukhov History and Art Museum Dish “Minerva and Putti” The Moscow Kremlin Museums participate in the new exhibition project of the State Historical Museum 'Peter the Great. Journeys to Europe'. Peter the Great's personal knowledge of Western Europe became a significant factor in the development of Russia, which comprehensively borrowed the advanced experience of European countries in science and technology, art and education, manufacturing, military affairs, and shipbuilding. The Russian Tsar made contacts with Western Europe on the principles of respect for the national interests of his state and equality with the other great powers. Peter the Great's journeys to West European countries clearly demonstrate how military triumphs and the development of productive forces helped to establish Russia's authority and expand its foreign policy and economic ties. The Kremlin collection contains significant artefacts directly related to Peter the Great’s personality. These include the Tsar's regalia, arms, pieces of clothing, diplomatic gifts presented to him, and various utensils that served him in everyday life. The exhibition will show thirty-two unique objects from the Moscow Kremlin Museums’ collection. Those are ambassadorial gifts from King Charles XII of Sweden, sent before the beginning of the Great Northern War; swords and broadswords of commanders and personal bodyguards of the Swedish king, which became trophies of the Russian army, including those from the Battle of Poltava; the officer badges of the famous Preobrazhensky and Semyonovsky Guards Regiments, as well as the goldkey of Riga presented at the capitulation of the city to the commander of the Russian army, Field Marshal General Count Boris Petrovich Sheremetev.",
              link: "https://www.kreml.ru/en-Us/exhibitions/russian-exhibitions/petr-i-puteshestviya-v-evropu-k-350-letiyu-so-dnya-rozhdeniya/",
              hall: "Moscow Kremlin Museum",
              category: "Museum",
              countryCode: "ru"
            }, {
              country: "Russia",
              title: "Лики модерна",
              date: "14 апреля 2022 — 18 сентября 2022",
              thumbnailSrc: "https://www.tretyakovgallery.ru/upload/iblock/417/zxd5suvdlmb3fwuopw72n2kn86lz0fl1.jpg",
              detail: "Новый выставочный проект Третьяковской галереи раскрывает разные грани искусства русского модерна, расцвет которого пришелся на конец 1890-х – 1900-е годы. Экспозиция логически продолжает недавно завершившуюся выставку «Русский модерн: на пути к синтезу искусств». Зрители смогут вновь увидеть полюбившиеся произведения талантливых мастеров начала ХХ века: А.Я. Головина, К.Ф. Богаевского, И.И. Бродского, А.И. Савинова, Ф.В. Боткина, В.И. Денисова, О.Л. Делла-Вос-Кардовской, Н.П. Ульянова, А.С. Голубкиной, С.Т. Конёнкова, Н.А. Андреева. В состав выставки вошли произведения живописи, скульптуры, а также рекламные плакаты и афиши. Именно этой массовой продукции суждено было стать средством коммуникации высокого искусства с запросами обывателей на рубеже веков. Многие крупные именитые художники (К.А. Сомов, Л.С. Бакст, И.Я. Билибин, Е.Е. Лансере, С.Ю. Судейкин) привносили в художественный язык плаката приемы станковой живописи и графики, книжной иллюстрации, открытки, театрально-декорационного искусства. Планомерное формирование массового вкуса осуществлялось через иллюстрации и приложения крупнейшего в России журнала «Нива», с которым сотрудничали Е.П. Самокиш-Судковская, И.С. Горюшкин-Сорокопудов, Д.Н. Кардовский и другие авторы. Афиши выставок, поэтических и музыкальных вечеров, театральных спектаклей и постановок кабаре сохраняют ауру насыщенной событиями и динамичной городской жизни «прекрасной эпохи».",
              link: "https://www.tretyakovgallery.ru/exhibitions/o/liki-moderna/",
              hall: "Tretyakov Gallery",
              category: "Gallery",
              countryCode: "ru"
            }, {
              country: "Russia",
              title: "Василий Чекрыгин",
              date: "16 июня 2022 — 30 октября 2022",
              thumbnailSrc: "https://www.tretyakovgallery.ru/upload/iblock/183/r5yuhmnwf22jdcjps4tddvd2ga8i2a4q.jpg",
              detail: "Расширенная экспозиция произведений Василия Чекрыгина знакомит с наследием гениального графика начала ХХ века. Впервые перед публикой предстанут 20 шедевров из серии «Воскрешение мертвых» (1921–1922), знаменующей заключительный этап творческой эволюции мастера. На излете 1920 года Чекрыгин знакомится с книгой «Философия общего дела» Николая Фёдоровича Фёдорова и, потрясенный, решает отныне посвятить себя фёдоровской идее преодоления смерти. За короткий срок художник исполняет большой цикл рисунков и ряд живописных произведений, непосредственно связанных с учением Фёдорова. Все они посвящены мистическому «претворению плоти в дух» — объединению материального и духовного. Графическими средствами Чекрыгин добивается впечатления прозрачности и эфемерности телесного начала, преображающегося в потоках света.",
              link: "https://www.tretyakovgallery.ru/exhibitions/o/vasiliy-chekrygin/",
              hall: "Tretyakov Gallery",
              category: "Museum",
              countryCode: "ru"
            }, {
              country: "Russia",
              title: "Святитель Николай Чудотворец. Иконы XIII–XX  веков",
              date: "3 июня 2022 — 18 сентября 2022",
              thumbnailSrc: "https://www.tretyakovgallery.ru/upload/iblock/893/hwdgo2h8xc6yvbv4qo80n8avsbu0jwtz.jpg",
              detail: "Святитель Николай покровительствовал и семье Третьяковых. Дом, где родился Павел Михайлович, находится рядом с храмом Рождества Богородицы в Голутвине, имевшем придел в честь святителя Николая Чудотворца и позднее известный именно с этим посвящением, а храм Николы в Толмачах, прихожанином которого был П.М. Третьяков, стал неотъемлемой частью нашего музея, где пребывает великая святыня — Владимирская икона Богоматери. Экспозицию открывают наиболее ранние из представленных на выставке икон, которые знакомят зрителя с житием святителя Николая. Древнейшая его часть восходит к IV–V векам, а основной текст сложился в IX столетии и повествует о рождении Николая в Патаре и крещении, когда младенец сам стоял в купели, об обучении грамоте, рукоположении в священный сан, исцелении больных и изгнании бесов, о спасении невинно осужденных от казни, утопающих в море — от гибели, нищих девиц — от бесчестия, а также о преставлении Николая и его многочисленных посмертных чудесах. Вопреки представлению о «стандартном» наборе и порядке чтения клейм, житийные циклы большинства икон святого Николая оказываются неповторимыми. За оригинальными иконографическими программами в каждом случае стоит особый замысел, что наглядно демонстрируют иконы из села Мелётово недалеко от Пскова, из коломенского храма Иоанна Богослова, Введенской церкви в Ростове Великом и Николо-Угрешского монастыря. Интересно, что в русских памятниках с конца XIV века часто изображается перенесение мощей святителя Николая из города Миры Ликийские в Бари, в честь которого на Руси был установлен особый праздник, а также так называемые «русские» чудеса: например, спасение утонувшего в Днепре младенца, которого взмолившиеся Николе родители обнаружили в соборе святой Софии целым и невредимым. Другие разделы выставки посвящены особым иконографическим изводам, воспроизводящим чудотворные образы святителя Николая, которые сыграли заметную роль в русской истории и культуре: иконы Николы Зарайского и Николы Великорецкого, а также деревянную статую Николы Можайского. Сама скульптура, изготовленная в XIV веке в память о спасении Можайска от подступившего к городским стенам неприятеля, хранится в Сокровищнице Третьяковской галереи. На выставке представлены ее резные и живописные реплики. Еще одна тема выставки — изображения святителя Николая с другими почитаемыми святыми: мучениками, целителями, благоверными князьями и преподобными. Достаточно рано святитель Николай появляется в композиции Деисуса (моление, прошение. — греч.), а с XV века известны его иконы в составе деисусных чинов иконостаса, где Николай, не писавший богословских трудов, но самой жизнью явивший глубину христианского учения, включается в один ряд с великими учителями Церкви — Василием Великим, Иоанном Златоустом и Григорием Богословом. Примером такого деисусного чина служит комплекс из старообрядческой церкви Успения на Апухтинке.",
              link: "https://www.tretyakovgallery.ru/exhibitions/o/svyatitel-nikolay-chudotvorets-ikony-xiii-xx-vv/",
              hall: "Tretyakov Gallery",
              category: "Gallery",
              countryCode: "ru"
            }, {
              country: "Russia",
              title: "Велимир Хлебников. Король времени",
              date: "29 июня 2022 — 18 сентября 2022",
              thumbnailSrc: "https://www.tretyakovgallery.ru/upload/iblock/d23/uuiprt2dz1tk77e01fqethyna1jsxmu4.jpg",
              detail: "Выдающийся поэт начала XX века, прозаик, драматург, автор утопических теорий, Хлебников вошел в историю русской литературы как реформатор поэтического языка, гений словотворчества и один из основоположников футуризма в России, придумавший для русской версии этого направления название «будетляне». «В Хлебникове есть всё!» — воскликнул один из крупнейших русских поэтов XX века О. Мандельштам литературоведу Н. Харджиеву, когда тот подарил ему только что вышедший первый том собрания сочинений Хлебникова. Его творчество оказало большое влияние на В. Маяковского, М. Цветаеву, Б. Пастернака, Н. Заболоцкого. С 1915 года Хлебников разрабатывал утопическую идею Правительства Земного Шара из 317 председателей, способных установить справедливый миропорядок. Велимир Хлебников высоко ценил новаторские достижения близких ему по духу художников, полагая, что именно в живописи рождаются наиболее радикальные эстетические принципы, которые могут быть использованы в других областях творчества. «Живопись всегда говорила языком, доступным для всех… На долю художников мысли падает построение азбуки понятий, строя основных единиц мысли, — из них строится здание слова», — писал он. Изображения Хлебникова, включенные в экспозицию, раскрывают дружеские и внутрицеховые связи поэта, являя разные грани творческой и человеческой натуры. Эпиграфом к галерее портретов, представленных на выставке — ликов и обличий Хлебникова, запечатленных как его современниками, так и нынешними почитателями его творчества, можно поставить хлебниковские строки «Моих друзей летели сонмы. Их семеро, их семеро, их сто!». «Королем времени» (так нарекли драматурга друзья-футуристы) он предстает в загадочном символическом портрете Б. Григорьева «Хлебников в будущем» (1916), сосредоточенным и бескомпромиссным вождем «будетлян» — в рисунке В. Маяковского (1916), самопогруженным поэтом — в наброске Н. Кульбина (1913). Свидетелем последних дней Хлебникова стал известный график прошлого столетия П. Митурич, создавший пронзительно скорбные портреты поэта на смертном одре. Еще до личного знакомства с Хлебниковым Митурич стал страстным поклонником его творчества, делал графические композиции по мотивам его произведений, работал над циклом «Пространственная графика», пытаясь создать визуальные образы поэзии своего кумира. После смерти Хлебникова художник занимался изданием его стихов и прозы. Современные интерпретации образа Хлебникова представлены рисунками А. Корсаковой-Рудович, А. Цедрика, скульптурами А. Зеленского и В. Клыкова. Отдельный раздел выставки посвящен семье Велимира Хлебникова. Портреты отца и сестры поэта, выполненные П. Митуричем, также включены в экспозицию. В разделе иллюстраций представлены рисунки соратников Хлебникова к его стихам, поэмам и пьесам, а также коллекция футуристических книг из библиотеки Третьяковской галереи. На их страницах пересекались изобразительное искусство, поэзия, проза и декларации; кубофутуристическая поэзия и живопись тесно переплетались, вырабатывая совместные манифесты и заимствуя друг у друга художественные приемы.",
              link: "https://www.tretyakovgallery.ru/exhibitions/o/velimir-khlebnikov-korol-vremeni/",
              hall: "Tretyakov Gallery",
              category: "Gallery",
              countryCode: "ru"
            }, {
              country: "Poland",
              title: "Around us a sea of fire. The fate of Jewish civilians during the Warsaw Ghetto Uprising exhibition",
              date: "24.02-20.11.2023",
              thumbnailSrc: "https://polin.pl/sites/default/files/styles/isocell_4_2/public/2022-08/P%C5%82on%C4%85ce%20getto%20warszawskie%2C%20fot.%20Z.%20Borowczyk.jpg?itok=oVdRZJBz",
              detail: "It’s human to fear, it’s human to suffer, it’s human to oppose evil. In 2023, we invite you to an exhibition which we organize in cooperation with the Holocaust Research Center to commemorate the 80th anniversary of the Warsaw Ghetto Uprising. The remaining inhabitants of the ghetto, approximately 50,000 'civilian' Jews spent many weeks hiding in shelters and bunkers. Against the despair, loneliness, starvation, thirst and fear, they fought for each and every 'day, hour, minute.' Their quiet resistance was just as important as the resistance of those with guns in their hands. They remained 'invisible' for many days - they hid underground and thus refused to comply to German orders. It is precisely their story - the story of the 'invisible' ones - that we want to retell in the exhibition. We will show what a daily life in a bunker was like, the conditions in the shelters and hideouts, the people who shared them and how they coped with their daily routines and basic physiological needs. We will try to recreate the 'physical' reality of being confined to a bunker: the darkness, the heat coming from burning buildings, the deficit of space and air, the sounds that were often the only way to find out what was happening on the ground level. We will focus on the relations developing between the people who hid together, on their feelings and emotions. On one hand - conflicts, fear, panic attacks, lack of hope, the feeling of being abandoned, of the world’s indifference, of a life forsaken. On the other hand - the craving for love and intimacy, the urge to act and take responsibility for others. The lust for life, the will to save oneself and one’s nearest and dearest, building a community whose members supported and protected one another were a way to oppose evil, too. The exhibition will be based on the testimonies of Jews who hid in the bunkers both in the ghetto area and on the 'Aryan' side. Since all the objects and keepsakes were destroyed and burnt, words acquire a special role in the exhibition. Not only do they convey the feelings and experiences of their authors, but they also constitute a unique testimony, often the only tangible trace left behind by those who perished in the ghetto.",
              link: "https://polin.pl/en/around-us-a-sea-of-fire-exhibition",
              hall: "POLIN Museum of the History of Polish Jews",
              category: "Museum",
              countryCode: "pl"
            }, {
              country: "Poland",
              title: "What’s Cooking? Jewish Culinary Culture – new temporary exhibition",
              date: "11.03-12.12.2022",
              thumbnailSrc: "https://polin.pl/sites/default/files/styles/isocell_4_2/public/2022-03/od-kuchni-main-www.jpg?h=e07b3e22&itok=iiWOeiJs",
              detail: 'Culinary culture is a vital element of the Jewish identity—while enhancing the sense of belonging to a community, it testifies to Jewish distinctiveness. Shaped over millennia in different locations all across the globe, it has remained very diverse until today. That is why the tale about Jewish food is simultaneously a tale about Jewish religion, culture and history. "What’s Cooking? Jewish Culinary Culture" exhibition takes you on a journey across time and space. We present the diversity of traditions and dishes consumed by Jews residing in the diaspora over the centuries. We demonstrate how certain dishes and products became widespread as a result of numerous migrations, from the Middle Ages to the great waves of migration in the nineteenth and twentieth centuries. We show the religious foundation which holds Jewish cuisine together—the rules of kashrut which inform the way certain dishes are prepared, as well as breaking away from that tradition today and rediscovering culinary roots. We also encourage our visitors to take a moment to reflect after viewing the four sculptures by Anna Królikiewicz produced especially for the POLIN Museum exposition. By inviting you to come to the Museum and visit the exhibition, we encourage you to join us in seeking an answer to the question: what is Jewish cuisine? While discovering the link between potato pancakes and latkes, gołąbki with holishkes, cholent and adafina; while finding out why the New Yorkers regard pickled ghurkins and borscht as Jewish dishes, we acquaint ourselves with the richness of Jewish culinary culture.',
              link: "https://polin.pl/en/whats-cooking-jewish-culinary-culture",
              hall: "POLIN Museum of the History of Polish Jews",
              category: "Museum",
              countryCode: "pl"
            }, {
              country: "Netherlands",
              title: "Drawn memories of Albert J. Elen",
              date: "13-05-2022 to 14-08-2022",
              thumbnailSrc: "https://storage.boijmans.nl/styles/widget_general_content_uncropped/uploads/2022/06/21/ilZknTBLiWdwcjGxfKB63rnYLglSdVKHsdxEEhBc.png",
              detail: "After more than twenty well-spent years, I am saying farewell to Museum Boijmans Van Beuningen. The small selection of art works in this room shows the breadth of the acquisitions realised during my curatorship, primarily drawings. When I was studying art history in Leiden in the seventies, I developed a preference for early Italian art. This resulted in a doctoral thesis about the drawing books of Jacopo Bellini and a dissertation about Italian drawing books from the late Middle Ages and the Renaissance. In order to be able to reconstruct drawing books that had been torn apart, I specialised in the history of paper, codicology and the science of watermarks. Dutch art also enjoyed considerable attention in the past four decades, with publications about artists such as Stradanus, Rembrandt, Willem van Mieris and Jan Hulswit. After working as curator at the Royal Library and the Netherlands Office for Fine Arts and deputy chief inspector of Cultural Assets at the Ministry of Education, Culture and Science, I joined the museum at the end of 2002. My third curatorship, the longest and most enjoyable. But everything must, unfortunately, come to an end. With the help of two much-loved \u2018old friends\u2019 and seventeen acquisitions, in three cases combined with another work of art from the museum collection, I would like to take you on a personal \u2018trip down memory lane\u2019.",
              link: "https://www.boijmans.nl/en/exhibitions/Drawn%20memories%20of%20Albert%20J.%20Elen",
              hall: "Boijmans Van Beuningen",
              category: "Museum",
              countryCode: "nl"
            }, {
              country: "Netherlands",
              title: "Paul McCarthy: Bunkhouse",
              date: "23 may t/m 15 october",
              thumbnailSrc: "https://storage.boijmans.nl/styles/widget_general_content_uncropped/uploads/2022/07/06/JcfCTVBlhit6nIxP65DnacAL165lFqIhtFx70XY0.jpg",
              detail: "We are currently working on the construction and registration of Paul McCarthy's 'Bunkhouse' (1996). 'Bunkhouse' was purchased in 2020 and its manual is no less than 62 pages long. Due to the large size of this artwork, it has never been thoroughly examined by our collection staff. They will be inspecting all parts, down to the smallest detail, and put the work together in its entirety. Is the artwork in good condition? Have all parts been registered? With this life-size artwork, Paul McCarthy (1945) refers to the wooden huts with bunk beds where young cowboys spend the night during high season in the American West. With this provocative but humorous scene, the American artist explores the clich\xE9 idea of the macho cowboy. McCarthy\u2019s work is often contrarian, sexually explicit and politically charged. He is also the maker of the \u2018Santa Claus\u2019 statue, popularly known as the \u2018Buttplug Gnome\u2019, a Rotterdam icon located on Eendrachtsplein.",
              link: "https://www.boijmans.nl/en/exhibitions/bunkhouse",
              hall: "Boijmans Van Beuningen",
              category: "Museum",
              countryCode: "nl"
            }, {
              country: "Netherlands",
              title: "Highlights from the Museum\u2019s Collection",
              date: "Thursday 7 April - Monday 3 April",
              thumbnailSrc: "https://storage.boijmans.nl/styles/widget_general_content_uncropped/uploads/2022/04/07/hQC7g3R8Q4pisloDkYsCTqsu6Dl7KSEtwucml0PV.jpg",
              detail: "A display of highlights from the museum\u2019s collection is now on view in the Depot. Depot Boijmans Van Beuningen is a working building and visitors were able to follow the construction. This is a test set-up in preparation for a larger exhibition later this year. Normally, the masterpieces from the collection are on display in the museum\u2019s galleries. But because the museum building is currently closed for renovation, we are showing a selection of highlights in the Depot. For the first time since the museum closed in May 2019, fourteen paintings, including masterpieces by Bosch, Bruegel, Rembrandt, Kandinsky, Munch, Van Gogh, Van Dongen and Basquiat, will be on display in the Depot (A3.08 \u2013 Gallery I) from 7 April to 14 August.",
              link: "https://www.boijmans.nl/en/exhibitions/highlights-from-the-museum-s-collection",
              hall: "Boijmans Van Beuningen",
              category: "Museum",
              countryCode: "nl"
            }, {
              country: "Netherlands",
              title: "The Permanent Collection: Van Gogh's Masterpieces",
              date: "Permanent",
              thumbnailSrc: "https://iiif.micr.io/TZCqF/full/800,/0/default.webp",
              detail: "In the Rietveld building, you step directly into Van Gogh\u2019s world. You obviously see his masterpieces, but also his drawings and letters. You discover the ideas and ambitions behind his art. Van Gogh experienced life and the world intensely and wanted his art to portray the great themes of life, such as anxiety, suffering, love and hope. You follow the on-going search of an artist who was constantly trying to improve himself. In this way, you get a new view of an artist you thought you knew. Address and opening hours Ticket prices COVID safety measures Paintings, drawings and letters The story of his art is told throughout the galleries, not only giving a permanent position to his paintings but also to his drawings and letters. Important aspects of Van Gogh\u2019s art are highlighted and studied through varying themes. Van Gogh\u2019s ambition to paint farmers, his search for colour and his personal interpretation of nature are given a prominent place in the museum, naturally featuring highlights like The Potato Eaters, The Bedroom, Sunflowers and Almond Blossom. Inspiring the world The huge impact of Van Gogh on the first generation of artists after his death will be shown by expressive works such as those by Maurice de Vlaminck and Kees van Dongen from the museum's own collection. A video installation in the hall shows how, after his death, Van Gogh has become the important (pop)cultural icon that he is today. Van Gogh's hope that his work might go on inspiring the world after his death has come true: until this very day he reaches out to millions of admirers.",
              link: "https://www.vangoghmuseum.nl/en/visit/whats-on/the-permanent-collection-van-goghs-masterpieces",
              hall: "Van Gogh Museum",
              category: "Gallery",
              countryCode: "nl"
            }, {
              country: "Netherlands",
              title: "The Gasworks: Van Eeden & Van Gogh",
              date: "16 September 2022 - 11 December 2022",
              thumbnailSrc: "https://iiif.micr.io/ArKto/full/800,/0/default.webp",
              detail: "Artist Marcel van Eeden (The Hague, 1965) has always had great admiration for and an interest in Vincent van Gogh. Van Gogh\u2019s drawing Gasworks, made in The Hague in March 1882, inspired him to create an entirely new series of work, consisting of imposing charcoal drawings on canvas and a series of black-and-white photographs. The gas factory in The Hague was a logical choice for Van Eeden: the place where he was born often plays an important role in his work. Also his flat is around the corner from the original location of the now demolished factory. With his drawings, Van Eeden always reconstructs places and events from before his birth. In doing so, he tries to draw near to a certain moment when he himself did not exist. In this case, the early spring day in 1882 when Van Gogh recorded the gasworks on the outskirts of The Hague on paper.",
              link: "https://www.vangoghmuseum.nl/en/visit/whats-on/exhibitions/the-gasworks-van-eeden-and-van-gogh",
              hall: "Van Gogh Museum",
              category: "Gallery",
              countryCode: "nl"
            }, {
              country: "Netherlands",
              title: "Exhibition Golden Boy Gustav Klimt",
              date: "7 October 2022 - 8 January 2023",
              thumbnailSrc: "https://assets.vangoghmuseum.nl/b8a77c71-571d-404c-bc07-2689598de461?w=800&format=webp&c=819e05a5b24d9d12e7335a4d8ffa08ff1f4bbe1725524ee90b2577d7f11bb7be",
              detail: "Gustav Klimt is world-famous for his golden and decorative paintings and his portraits of strong women. But who was this \u2018golden boy\u2019, and what is the story behind his talent? You perhaps know Klimt\u2019s work, but have you actually seen it? Discover how Gustav Klimt developed his unique style and gleaned inspiration from the Western European modern art of his time. New research has revealed which artists influenced Klimt and which artists he liked. But also which artworks were on display at exhibitions at the time \u2013 including those of pioneering art society the Vienna Secession, of which Klimt was the chairperson. Numerous new impulses transformed Klimt\u2019s Vienna from a sleepy city into a buzzing metropolis. For his versatile art, Klimt was inspired by the work of famous predecessors including Van Gogh, Rodin, Toulouse-Lautrec, Monet, and Matisse. This fascinating exhibition shows Klimt\u2019s work alongside paintings by his favourite artists.",
              link: "https://www.vangoghmuseum.nl/en/visit/whats-on/exhibitions/golden-boy-gustav-klimt",
              hall: "Van Gogh Museum",
              category: "Gallery",
              countryCode: "nl"
            }, {
              country: "Netherlands",
              title: "Exhibition \u2018Choosing Vincent\u2019",
              date: "10 February 2023 - 10 April 2023",
              thumbnailSrc: "https://assets.vangoghmuseum.nl/3880d471-5dd3-4b90-b310-ec6c438cf40d?w=800&format=webp&c=f7bdc165685c482bfaab89cb1ea0eca2cba1b38b5ba233b7d8f1b9ed6463bf35",
              detail: "The exhibition Choosing Vincent: From Family Inheritance to World-Famous Collection (working title) tells a personal story of doubt, setbacks, pride, and triumph. A story punctuated with dilemmas, seen through the eyes of Vincent van Gogh (1853-1890), his brother Theo (1857-1891), Theo's wife Jo (1862-1925) and their son Vincent (1890-1978), named after his uncle. The many masterpieces and lesser-known gems in the exhibition reveal how the family inheritance grew to become a world-famous collection.",
              link: "https://www.vangoghmuseum.nl/en/visit/whats-on/exhibitions/choosing-vincent",
              hall: "Van Gogh Museum",
              category: "Gallery",
              countryCode: "nl"
            }, {
              country: "Netherlands",
              title: "TOMORROW IS A DIFFERENT DAY",
              date: "10 Jul 2021 until 31 Dec 2025",
              thumbnailSrc: "https://s3-eu-west-1.amazonaws.com/production-static-stedelijk/images/_whats%20on/tentoonstellingen/2021/nieuwe%20collectieopstelling/scaled/768/anatsui%20klein.jpeg",
              detail: "Tomorrow is a Different Day spotlights art and design from the collection, from 1980 to the present, by international artists and designers who are helping to shape the changes of today and tomorrow. They challenge the status quo and offer alternative perspectives. The presentation of art and design from 1950\u20131980 is on view in Everyday, Someday and Other Stories. From 10 September, the collection until 1950 will be on view in Yesterday Today.",
              link: "https://www.stedelijk.nl/en/exhibitions/tomorrow-is-a-different-day-2",
              hall: "Stedelijk Museum Amsterdam",
              category: "Museum",
              countryCode: "nl"
            }, {
              country: "Netherlands",
              title: "EVERYDAY, SOMEDAY AND OTHER STORIES",
              date: "19 Feb 2022 until 31 Dec 2026",
              thumbnailSrc: "https://s3-eu-west-1.amazonaws.com/production-static-stedelijk/images/_whats%20on/tentoonstellingen/2022/Everyday%20Someday%20and%20Other%20Stories/scaled/768/matisse-op-zaal-low-voorkeur.jpg",
              detail: "The Stedelijk\u2019s three-part collection presentation has been redesigned with a special focus on theme. Everyday, Someday and Other Stories, traces the evolution of art and design from the 1950s to the 1980s. Artists and designers show it was an era of new opportunities and progress, of mass culture, pop culture and consumption, and of critiquing the established order. Featuring well-known and less familiar works from the collection, the presentation tells different stories from diverse perspectives, and shines a new light on the Stedelijk collection. The collection of 1980\u2013now is on view in Tomorrow is a Different Day. From 10 September, the collection until 1950 will be on view in Yesterday Today. EVERYDAY 'Everyday\u2019 shows how art gradually draws closer to everyday life as artists begin to use mundane materials, actions and events. Sculptor Jackie Winsor works with rope, Bruce Nauman turns simple actions into video work and Stanley Brouwn elevates something as simple as asking for directions to art. Others, like Claes Oldenburg, and Tetsumi Kudo, use ordinary objects. Robert Rauschenberg even works with waste materials. Artists also witness the impact of mass media on perception and stereotyping, apparent in works by Andy Warhol, Cindy Sherman, Barbara Bloom, and Hans Eijkelboom. SOMEDAY \u2018Someday\u2019 captures the idealism of those decades: in Homo Ludens, Constant explores play as a central element in culture and society, Ben d\u2019Armagnac founds a commune that inspires Louwrien Wijers\u2019s poetic word sculptures. Space travel is hugely influential; astronaut William Anders photographed the Earth, creating an emblem of our planet\u2019s vulnerability, and gave flight to a host of Space Age-inspired designs conceived by such creative minds as V\xE1clav Cigler, JVC, Wim Crouwel and Peter Ghyczy. Pursuing ideals also meant lashing out at established norms, as shown by the immense wall displaying political protest posters. William Irwin\u2019s photos document Civil Rights marches and anti-Vietnam War demonstrations. Corita Kent, Catholic nun and pop art artist, addresses the same themes in her easy-to-distribute silkscreen prints. G\xFCnter Beltzig designs the Floris, a chair to take to sit-in demonstrations. Photos by Maurice Boyer and Pieter Boersma chronicle the squatters\u2019 riots in Amsterdam, while Cor Jaring captures John Lennon and Yoko Ono in the Amsterdam Hilton, promoting world peace in their protest bed-in. The Wild Plakken buttons and Provo magazines epitomise this protest generation\u2019s democratic activism.",
              link: "https://www.stedelijk.nl/en/exhibitions/everyday-someday-and-other-stories-2",
              hall: "Stedelijk Museum Amsterdam",
              category: "Museum",
              countryCode: "nl"
            }, {
              country: "Netherlands",
              title: "REMBRANDT REVIVAL",
              date: "11 June \u2013 30 October 2022",
              thumbnailSrc: "https://www.rembrandthuis.nl/wp-content/uploads/2022/06/18-06-2022-fotografie-22-of-50-kopie.jpg",
              detail: "Manet, Morisot, Whistler, Cassatt \u2014 these are just a few of the famous painters who were inspired by Rembrandt to start making their own etchings. In the years 1850 they sparked an international revival of the art of etching: The Etching Revival. These works burst with experiment and innovation, with daring compositions and surprising techniques. Rembrandt was an important model for these artists. The Etching Revival was thereby also a Rembrandt Revival. The Rembrandt House Museum recently received a generous gift of international etchings from the collector Neeke Fraenkel-Schoorl. From 11 June dozens of highlights from this collection can be seen in the exhibition Rembrandt Revival. In the audiotour Neeke Fraenkel-Schoorl personally takes you along some of her favourites. The Rembrandt House Museum is also organising inspiring activities and events related to Rembrandt Revival, including etching workshops and a RembrandtLIVE talkshow and podcast. Looking and Comparing The international artists of the Etching Revival often referred to Rembrandt in their works. In the exhibition their work is repeatedly combined with his etchings \u2013 an invitation to look and compare. Rembrandt\u2019s Girl Reading for example resurfaces regularly. But the print that was followed most has to be The Three Trees. This etching was enormously popular in the nineteenth century, and was displayed regularly in the Biblioth\xE8que Nationale in Paris. Many artists knew the etching well and allowed themselves to be inspired by it, especially the sky and the looming clouds. The exhibition also reveals the drive of various artists to innovate and experiment. Extreme light-dark contrasts, the combination of various techniques such as aquatint and roulette, and even an artist who prepared his paper by soaking it in gasoline. Special attention is paid to a group of women artists who starting in the nineteenth century had the opportunity to become professional artists. Even so women experienced considerable resistance. Berthe Morisot, Mary Cassatt, K\xE4the Kollwitz and a number of their contemporaries were nonetheless able to gain a place in the art world and began to make prints. The Neeke Fraenkel-Schoorl Gift Neeke Fraenkel-Schoorl (1942) started collecting prints at an early age. While studying art history she fell in love with the art of printmaking and she went on to work as, among other things, a print specialist at Sotheby\u2019s. From her particular interest in the work of Whistler she developed a focus on the Etching Revival. She has now donated her collection of nearly 400 prints and 200 pieces of graphic art in books and periodicals from the period 1850-1940. Prints form the core of our museum\u2019s collection, but this period was not strongly represented, until now.",
              link: "https://www.rembrandthuis.nl/en/current/now-on-view-2/",
              hall: "MUSEUM HET REMBRANDTHUIS",
              category: "Gallery",
              countryCode: "nl"
            }, {
              country: "Netherlands",
              title: "Anne Frank House",
              date: "Permanent",
              thumbnailSrc: "https://annefrank.freetls.fastly.net/media/filer_public_thumbnails/filer_public/6d/ae/6daeac4a-591c-4499-aa83-dc6cdf215c3d/a_afrank_iii_055106.jpg__1536x1536_q85_subsampling-2.jpg",
              detail: "Are you planning to visit the Anne Frank House, and do you want to prepare for your visit? Here, you will find practical information about our facilities, special facilities for visitors with disabilities, and our Terms and Conditions for Visitors. AddressThe Anne Frank House is located in the city centre of Amsterdam, at Prinsengracht 263-267. The entrance to the museum is around the corner, at Westermarkt 20. It is a 20-minute walk from Amsterdam Central Station. The Westermarkt stop, close to the Anne Frank House, is temporarily unavailable due to construction work. It is a 10-minute walk from Dam Square. You can take all the time you need for your visit. On average, a visit takes an hour.AccessibilityThere are many stairs in the Anne Frank House. If you have difficulty walking, you may have trouble climbing the steep stairs. Read more about the museum\u2019s accessibility Minimum ageThe recommended minimum age for children is 10 years, but it is up to parents to judge whether their child is ready for such a serious subject. In the museum you will receive information about Anne Frank, the other people in hiding in the Secret Annex, the helpers, as well as background information on the Second World War and the persecution of the Jews. PhotographyIn order to protect the original items in the museum and to avoid causing nuisance to other visitors, photography is not allowed in the museum. CloakroomOur cloakroom is currently closed, do not bring large bags!The museum has a cloakroom where you can leave your coat, bag, umbrella, or buggy. Only bags that are smaller than an A4 sheet of paper can be carried inside. We do not have room to store large bags and backpacks, suitcases, or other large items. Please leave your luggage at your hotel or deposit it at Amsterdam Central Station, otherwise, you may not be able to visit the museum.",
              link: "https://www.annefrank.org/en/museum/tickets/",
              hall: "Anne Frank House",
              category: "Gallery",
              countryCode: "nl"
            }, {
              country: "Belgium",
              title: "HENRI EVENEPOEL",
              date: "15.12.2021 > 11.12.2022",
              thumbnailSrc: "https://www.fine-arts-museum.be/uploads/exhibitions/images/evenepoel_7585dig_h_small@2x.jpg",
              detail: "The dynamic collection of the Fin-de-Si\xE8cle Museum offers a rotation of artworks on a regular basis. For curatorial reasons around a hundred works on paper, photographs, objects and documents are rotated every six months, thanks to the help of partners. This temporary exhibition, accessible with a ticket to the Fin-de-Si\xE8cle Museum, presents the drawings, photographs and certain paintings that the Belgian artist Henri Evenepoel (Nice, 1872- Paris, 1899) produced during his Algerian period. Despite it being a difficult time in his life, the drawings and paintings made during this period are considered to be among the best of his work. Some fifty known sketches and watercolours show that here, too, it is mainly the human figure that fascinates him. This relatively small number can be explained on the one hand by the fact that Algerians did not want to be portrayed, and on the other by the frequent use of his photo camera, with which he took more than 400 pictures in the four months he spent on the African continent. The Royal Museums of Fine Arts of Belgium hold sixteen paintings, over thirty drawings, a sketchbook and some prints, the collection was also completed in 1970 by hundreds of letters from the artist to his father, as well as 877 negatives of his photographs. On the occasion of this temporary exhibition, a selection of these photographs is now printed in its original state. This has been made possible thanks to the digitisation of the negatives which was carried out by the Royal Institute for Cultural Heritage, within the framework of the DIGIT PROGRAMME for the digitisation of the scientific and cultural heritage of the FSI and the Royal Belgian Film Archive (Cinematek), financed by the Federal Belgian Science Policy Office (BELSPO).",
              link: "https://www.fine-arts-museum.be/en/exhibitions/henri-evenepoel-1",
              hall: "Royal Museums of Fine Arts of Belgium",
              category: "Gallery",
              countryCode: "be"
            }, {
              country: "Belgium",
              title: "PICASSO & ABSTRACTION",
              date: "14.10.2022 > 12.02.2023",
              thumbnailSrc: "https://www.fine-arts-museum.be/uploads/exhibitions/images/picasso_300_1_small@2x.jpg",
              detail: "The Royal Museums of Fine Arts of Belgium, in close collaboration with the Mus\xE9e national Picasso-Paris, are devoting a unique exhibition to Pablo Picasso (1881-1973) next fall. The two institutions are decrypting a theme that has never been explored before: for the very first time, Picasso's relationship with abstraction will be brought to light, through more than one hundred and forty exceptional works. The exhibition will address the major stages that marked the links between Picasso's work and the history of abstract art, from the first Cubist experiments of 1907, carried out on the fringes of Les Demoiselles d'Avignon, to his later work, which is sometimes situated on the borders of action painting. This surprising relationship, made up of small advances, retreats and backward steps, will be presented in the subtle chronological and thematic course of the exhibition, revealing the artist's pendulum movement between abstraction and the figurative over the decades. Another major theme of the exhibition will be the artist's studio, a true formal laboratory, and will show Picasso's creative process through various series (drawings and prints), allowing the viewer to understand how he works and reflects on the representation of the chosen motifs. The studio, which is both a place of creation and a setting for the work, is also the space where the painter's imagination is realised, allowing a glimpse of the ambiguity between reality and fiction. The viewer will not only be invited to appreciate Pablo Picasso's extraordinary creativity and his ability to constantly reinvent himself, but also to measure, through his work, how impulses towards the unknown remain an excellent way of getting to know oneself better and of freeing oneself from the limiting labels. The exhibition is organised in partnership with the Mus\xE9e national Picasso-Paris and is part of the project \"Picasso Celebration 1973-2023\": 50 exhibitions and events to celebrate Picasso.",
              link: "https://www.fine-arts-museum.be/en/exhibitions/picasso-abstraction",
              hall: "Royal Museums of Fine Arts of Belgium",
              category: "Gallery",
              countryCode: "be"
            }, {
              country: "Belgium",
              title: "MIRADAS DE MUJERES",
              date: "14.10.2022 > 12.02.2023",
              thumbnailSrc: "https://www.fine-arts-museum.be/uploads/exhibitions/images/robe_300_small@2x.jpeg",
              detail: "Miradas de Mujeres (Women\u2019s Gaze) is an exhibition that highlights the view of Belgian artist Isabelle de Borchgrave on Frida Kahlo. Miradas de Mujeres honours a dialogue between two women who have never met \u2013 one being born shortly before the death of the other \u2013 but who nevertheless share their love of fabric, patterns and colours; a women's perspective on the artist\u2019s role in society. Isabelle de Borchgrave took almost three years to create Miradas de Mujeres, a titanic work painted by hand. By using more than 4 kilometers of paper and cardboard she created dresses, carpets, furniture, trees and other elements recreating the unique universe of Frida Kahlo and her iconic house, the Casa Azul (The Blue House). Thanks to Miradas de Mujeres, visitors will have the opportunity to stroll through the living room, the workshop, the kitchen, the dressing room or the garden; promising a unique, trompe l'oeil experience into the world of Frida Kahlo.Far from the image of suffering and pain, linked to the disability of the Mexican icon, Isabelle de Borchgrave focuses here, through colour, on the joy of living of the artist who managed to transcend the hardships of her life in her role as a woman, artist, and cultural icon. The exhibition invites the public to dive into the joyful universe entirely made of paper of Isabelle de Borchgrave and to be inspired by the generosity of this contemporary artist whose creative practice remains resolutely incomparable.",
              link: "https://www.fine-arts-museum.be/en/exhibitions/miradas-de-mujeres-isabelle-de-borchgrav",
              hall: "Royal Museums of Fine Arts of Belgium",
              category: "Gallery",
              countryCode: "be"
            }, {
              country: "Belgium",
              title: "JEAN-PIERRE GHYSELS",
              date: "14.10.2022 > 12.02.2023",
              thumbnailSrc: "https://www.fine-arts-museum.be/uploads/exhibitions/images/ghysels_8678dig_h_small@2x.jpg",
              detail: "The Royal Museums of Fine Arts of Belgium dedicate an exhibition to Jean-Pierre Ghysels (Uccle, 1932), a Belgian sculptor who studied with Zadkine at the Acad\xE9mie de la Grande Chaumi\xE8re in Paris. The exhibition will give the public the opportunity to discover a series of sculptures made of the artist's two favourite materials, beaten copper and bronze, works which, even when small in size, surprise us with their monumentality and sensuality. The selection, which was made in close collaboration with his wife Colette Ghysels, with whom he shares a passion for travelling, tribal art and ethnic jewellery, is also a tribute to the importance the artist attaches to his beloved ones. He says: \u201CIt really makes me happy  when my wife comes into my studio, looks at my work and says she loves it. Then I almost believe it, it warms me and it seems to me, at that moment, that my sculpture reflects us.\" Among the selection: Secret Angle (1973), a polished bronze that entered the museum's collection when Philippe Roberts-Jones was chief curator in 1976, is the oldest work in the series of beaten brass and bronze. According to the artist, \"generating a sculpture means taking a material, dialoguing with it, telling it about space, lines, volumes, curves, verticals, proportions, everything you want for it. It means loving it before it even exists\". Jean-Pierre Ghysels will celebrate his 90th birthday on 20 September.",
              link: "https://www.fine-arts-museum.be/en/exhibitions/jean-pierre-ghysels",
              hall: "Royal Museums of Fine Arts of Belgium",
              category: "Gallery",
              countryCode: "be"
            }, {
              country: "Belgium",
              title: "PRUNE NOURRY",
              date: "14.10.2022 > 12.02.2023",
              thumbnailSrc: "https://www.fine-arts-museum.be/uploads/exhibitions/images/prune_nourry_2020_c_le_bon_march_rive_gauche_fl_che1_franklin_burger_small@2x.jpg",
              detail: "From October onwards, the Great Hall of the Royal Museums will host a monumental work by the multidisciplinary artist Prune Nourry (Paris, 1985), a rising figure in international contemporary art. L'Amazone \xC9rog\xE8ne (Arc) (2020), which was shown for the first time at the Bon March\xE9 Rive Gauche Paris in 2021, is a work directly linked to her personal battle against breast cancer and is inspired by the mythological figure of the Amazons. A gigantic 5-metres high bow points towards a 4-metres diameter breast-target, evoking the metaphor of the fight against the disease. Beyond its cathartic vocation, the installation, made of wood, feathers and brass, also represents procreation, the target acting as an ovum ready to be fertilised by the arrow shot from the bow. L'Amazone \xC9rog\xE8ne (Arc) thus highlights the tension between gentleness, hope and violence, and gives a personal experience a truly universal resonance. Prune Nourry specialises in sculpture, but also explores a multitude of media such as photography, video and performance. Her cancer diagnosis and mastectomy at the age of 31 inspired the introspective documentary Serendipity. She is very committed to the feminist cause, working on issues ranging from bioethics to women's rights and gender, and emphasises the relationship between art and science in her work. Nourry usually collaborates with anthropologists and geneticists to feed her artistic practice. The French artist trained in wood sculpture at the \xC9cole Boulle in Paris. She lives and works between Paris and Brooklyn, New York, since 2011.",
              link: "https://www.fine-arts-museum.be/en/exhibitions/prune-nourry",
              hall: "Royal Museums of Fine Arts of Belgium",
              category: "Gallery",
              countryCode: "be"
            }, {
              country: "Belgium",
              title: "OUR COLLECTION IN QUESTION",
              date: "10.02.2022 > 30.07.2023",
              thumbnailSrc: "https://www.fine-arts-museum.be/uploads/exhibitions/images/rubens_3176dig_h_1_small@2x.jpg",
              detail: "As part of the Museum in Questions campaign launched in the autumn of 2021, the Royal Museums of Fine Arts of Belgium are keen to participate in the debate surrounding current social matters. Two exhibition rooms contextualise two burning topics for museums around the world: by shedding scientific light on the questions of colonialism and diversity, on the one hand, and the problem of the restitution of cultural goods looted during the Second World War, on the other, the Royal Museums aims to be a laboratory for reflection that will enable us to participate in the construction of the museum of tomorrow, by insisting on how scientific research, one of the museum's primordial missions, can contribute to the contemporary debate. LOOTED ARTWORKS: HOW TO PROCEED WITH THE RESTITUTION OF CULTURAL GOODS LOOTED DURING THE SECOND WORLD WAR? The issue of restitution is not new and is in fact broader than the most prominent case, that of the lootings committed during the Second World War and during the Third Reich. The Old Masters and Modern painters brought together in one room bear witness to the complexity and continuing relevance of the issue, some 76 years after the end of the Second World War. There is only one way to identify works of questionable source, and that is to investigate their provenance. Knowing in which hands a work has circulated from the time it left the studio to the present day is an essential but laborious task, which still raises many questions today. The very specific case of the painting by Lovis Corinth presented here reveals the complexity of the restitution process. Are there any international agreements on the matter? Were the lootings organised? Was the art market involved? Where do the Royal Museums of Fine Arts of Belgium stand today? These are a few of the questions that we try to answer in this thematic room. Old Masters Museum - Room 51 WHY REVISE THE TITLE OF A RUBENS MASTERPIECE? Titles of artworks are being questioned in museums around the world: the responsibility of museums to be inclusive and non-discriminatory has grown in intensification following social movements such as #metoo or #BlackLivesMatter. The Rubens work in this room, which has been renamed for the second time after 2007, is a typical example of how a title can remind the public of a painful colonial experience. The Royal Museums validate the public\u2019s reactions and aim to commit to a policy of inclusion, based on historical facts and contexts, and thus, in that way, contribute to a scientifically based debate. Why is the title of a Rubens masterpiece today now more than ever the subject of discussion? Why was this oil sketch originally untitled and what was its function in Rubens\u2019s studio? What were Rubens's original intentions and what place did people from Africa have in his thinking and work? These are all questions around which we would like to stimulate a constructive dialogue.",
              link: "https://www.fine-arts-museum.be/en/exhibitions/our-collection-in-question",
              hall: "Royal Museums of Fine Arts of Belgium",
              category: "Gallery",
              countryCode: "be"
            }, {
              country: "Belgium",
              title: "FROM NEANDERTHAL TO GALLO-ROMAN",
              date: "Permanent",
              thumbnailSrc: "https://www.galloromeinsmuseum.be/uploads/images/Civitas/OoginOog/Eyetoeye/van%20nean%20tot%20gallo%201200350.jpg",
              detail: "Discover the fascinating story of mankind in our region, from prehistoric times to the end of the Roman age. Neanderthals, the first farmers, Celts, Gallo-Romans and Germanic tribes: they all left their mark. Travel through time We display over 2000 objects, including many masterpieces, in a contemporary and atmospheric presentation that reveals their full beauty. Films, models and lifelike figures in synthetic resin also transport you to those bygone times. This also makes the exhibition particularly attractive for children. One thing is certain: a visit to this exhibition is bound to inspire an enduring passion for the distant past. And you\u2019ll probably see the present with new eyes, too. We display objects from everyday life: flint tools used by the Neanderthals, earthenware pots from the first agricultural societies, stylish tableware from Roman times... Many objects illustrate important social changes. For example, bronze swords demonstrate the emergence of an elite in the Iron Age. A unique hoard of gold coins speaks of the conquest of our region by the Roman general Julius Caesar. Our core collection proves that Roman culture also took root in our region. There are impressive architectural fragments, elegant pieces of jewellery and a wide range of Roman statues of gods and Roman pottery. The wealth of artifacts from tumulus graves also appeals to the imagination. The exhibition is perfectly suited for a visit with children. There are educational films, models and lifelike figures in synthetic resin. Interactive applications provide a playful way to discover the past. Be sure to pick up the child-friendly audio guide on arrival. Archaeologist \u2018Bob the Digger\u2019 talks enthusiastically about his love for the past. He guides children to the most fascinating objects, introducing them to the world in which our ancestors lived. Bob also takes them behind the scenes at the museum where fun quiz questions will inspire kids to learn more - like: Who are the specialists he works with? Which pieces were his own finds? Kids are guaranteed a fascinating experience, from start to finish.",
              link: "https://www.galloromeinsmuseum.be/en/exhibitions/permanent-exhibition-from-neanderthal-to-gallo-roman/cfromneanderthaltoGallo-Roman-EN",
              hall: "Gallo Roman Museum",
              category: "Museum",
              countryCode: "be"
            }, {
              country: "Belgium",
              title: "IMPERIUM ROMANUM. The Roman Empire Through the Lens of Alfred Seiland",
              date: "4 june 2022 - 15 january 2023",
              thumbnailSrc: "https://www.galloromeinsmuseum.be/uploads/images/Civitas/OoginOog/Eyetoeye/1200%20350%204.jpg",
              detail: "At its greatest extent, the Roman Empire comprised an area belonging today to more than 40 countries. You can still see traces of that enormous empire everywhere, from crumbling ruins to impressively well-preserved monuments. The Austrian photographer Alfred Seiland (b. 1952) has been documenting these remains for 15 years. His quirky, colorful photos enjoy international recognition. Get to know the artist and view 150 of his best works in an attractive setting. For young and old alike, Seiland\u2019s photos provide fascinating insights into Roman culture and history.",
              link: "https://www.galloromeinsmuseum.be/en/exhibitions/temporary-permanent-exhibition/copy-of-face-to-face-with-the-romans",
              hall: "Gallo Roman Museum",
              category: "Museum",
              countryCode: "be"
            }, {
              country: "Bulgaria",
              title: "BULGARIAN LANDS UNDER OTTOMAN RULE AND STRUGGLES FOR NATIONAL LIBERATION",
              date: "Permanent",
              thumbnailSrc: "https://militarymuseum.bg/-cms/wp-content/uploads/2020/09/expositions-an-sr-cover.jpg",
              detail: "The Thracians are the oldest and largest ethnic group on the Balkans since the fourth millennium BC. Warlike and daring, the Thracians had perfected the art of war and were recognized as superb warriors. Invited and favoured allies to many of their ancient neighbours, they gave the world Orpheus and the great leader of the oppressed slaves \u2013 Spartacus. In the fifth century BC, the Thracians founded the kingdom of the Odrysai. Thracian material culture\u2019s contacts with that of Classical Greece and the Roman Empire had provided striking masterpieces to our national treasury. In the seventh century AD, the agile cavalry of the proto-Bulgarians, led by Khan Asparukh, entered into a robust war alliance with the infantry of the Slav peoples, permanently settled in the lands south of the Danube River. One of the first European Medieval states \u2013 Bulgaria, was founded. The victorious wars against the Byzantine Empire, the Arabs, the Avars, etc. invaders, expanded the country\u2019s territory and raised it to a primary power in the European South-East. History remembers the Bulgarian rulers Krum, Simeon the Great, and Samuil, not only as wise statesmen, but also as extraordinary military leaders. The Battle of Varbitsa Pass of 811; Byzantian defeat of 917 at Achelous River; the unsurpassed by its strategic plan and execution war of 986, advanced European art of war. The Tarnovo Uprising of 1185\u20131187, led by the bolyars [Bulgarian noblemen] Asen and Petar, restored Bulgarian statehood and marked the onset of a political and military growth. New fortifications were built; all typical to the period branches of the military were set up \u2013 light and heavy cavalry and infantry, siege engine crews, and a navy. Offence emerges as the primary strategic measure. Bulgarian state borders on three seas \u2013 the Black, the Aegean, and the Adriatic Sea. In the Battle of Adrianople of 1205, Tsar Kaloyan triumphed over the never before defeated army of the Western European knights-crusaders. After the victory against the Despot of Epirus, Theodore Komnenos in 1230, the Bulgarian monarch Ivan Asen II proudly proclaimed himself \u201CTsar of Bulgarians and Byzantians\u201D. The armed resistance of the Bulgarian and the rest of the Balkan peoples at the end of the fourteenth century had decisive role in thwarting Ottoman invasion in Europe.",
              link: "https://militarymuseum.bg/en/exhibitions/chronological-exhibition/antiquity-and-middle-ages-in-the-bulgarian-lands/",
              hall: "National Museum of Military History",
              category: "Museum",
              countryCode: "bg"
            }, {
              country: "Bulgaria",
              title: "BULGARIAN LANDS UNDER OTTOMAN RULE AND STRUGGLES FOR NATIONAL LIBERATION",
              date: "Permanent",
              thumbnailSrc: "https://militarymuseum.bg/-cms/wp-content/uploads/2020/09/expositions-nat-osv-bor-1.jpg",
              detail: "After half a century of struggle against the Ottomans, in 1396 the Bulgarian lands finally fell to the conqueror. Bulgarians refused to tolerate the deprivation of their rights, as indicated by the constant unrest and uprisings. After the failed 1408 uprising of Konstantin and Fruzhin \u2013 the heirs apparent to the throne, Bulgarians offered support to the army of the Polish-Hungarian King Vladislav III Yagiellon and the Transylvanian Voivode Janos Hunyadi during their campaigns in Bulgaria of 1443 and 1444, and took part in the decisive Battle of Varna, on November 10, 1444. Within a century, three uprisings erupted: the First Tarnovo (1598), the Second Tarnovo (1686), and the Chiprovtsi Uprising (1688). Already in the first decades of the Ottoman rule, the indigenous form of unyielding resistance against infringements on the personal, family, religious, and national honour and dignity \u2013 the hajduk movement was securely established. In the 1860s, the combat expertise from the centuries of armed struggles was re-articulated in terms of ideology, military tactics, and politics. The transition from a spontaneous political fights to an organized national liberation movement became associated with the name and work of Georgi Sava Rakovski. The First Bulgarian Legion (1862), founded by him, took part in the siege and in the fights for the capture of the Belgrade Fortress. By their weapons, accoutrements, outfit, and tactical skills, the cheta [local term for band] of Panayot Hitov and Filip Totyu, of Hadzhi Dimitar and Stefan Karadzha, and many more came close to the requisites of regular armies. At the end of 1869, in Bucharest were laid the foundations of a new governing body of the Bulgarian national liberation movement \u2013 the Bulgarian Revolutionary Central Committee (BRCC), headed by Lyuben Karavelov. Vasil Levski was its most prolific member, who in less than three years set up a vast network of revolutionary committees, known as Internal Revolutionary Organization (IRO), which primed the populace for fight. While the preparation for the impending uprising were still in progress, Vasil Levski, a.k.a. the \u2018Apostle of Freedom\u2019, was seized, tried, and on February 19, 1873, near Sofia, executed by hanging. His Internal Revolutionary Organization was a new stage in the evolution of the movement for Bulgarian national liberation. The aggravation of the Eastern Crisis in the summer of 1875, galvanized the members of the BRCC and the revolutionary committees in the Bulgarian lands. At the end of 1875, the Bulgarian revolutionaries Stefan Stambolov, Panayot Volov, Stoyan Zaimov, Nicola Obretenov, Georgi Benkovski, and many more, decided to organize an uprising for the spring of 1876. The lands were divided into four revolutionary regions. The uprising erupted in April of 1876. In the violent suppression by the Ottoman authorities were massacred more than 30 000 Bulgarian men, women and children; 80 settlements were set on fire; further 200 \u2013 ransacked. The international community was outraged. More than 3000 articles in close to 200 newspapers called for support to the Bulgarian cause. Their authors were notable politicians, writers, and academics from all over the world: Giuseppe Garibaldi, Otto von Bismarck, William Gladstone, Charles Darwin, Konstantin Jirecek, Lev Tolstoy, Ivan Turgenev, Dmitri Mendeleev, etc.",
              link: "https://militarymuseum.bg/en/exhibitions/chronological-exhibition/the-struggles-for-national-liberation-in-the-bulgarian-lands-in-the-period-of-ottoman-rule/#",
              hall: "National Museum of Military History",
              category: "Museum",
              countryCode: "bg"
            }, {
              country: "Bulgaria",
              title: "RUSS\u041E-TURKISH WAR(1877 - 1878)",
              date: "Permanent",
              thumbnailSrc: "https://militarymuseum.bg/-cms/wp-content/uploads/2020/09/expositions-rtov-1.jpg",
              detail: "In the autumn of 1876, was founded an international commission of inquiry in the atrocities committed in the suppression of the uprising of April of 1876. The efforts of the Great Powers to resolve the Bulgarian Question by diplomatic means failed. Russia demonstrated in no uncertain terms Her desire to seek resolution through war. Steps were made to neutralize Austria-Hungary and the Great Britain. Romania agreed to join in the campaign with a 40 000 strong army and a free passage for the Russian troops. The Russo-Turkish war was declared on 12 April 1877, at Kishinev, through a manifesto signed by Emperor Alexander II. After a successful preparation, in the first hours of 27 June 1877, 14 Infantry Division of General M.I. Dragomirov crossed the Danube River at Svishtov and entered Bulgarian territory. The Russian Danube Army was divided into three detachments: Front, Eastern and Western. The Front Detachment, of about 12 000 men under command of General Iosif Gurko, was tasked with liberating the settlements in Central North Bulgaria and entering South Bulgaria. To the Front Detachment was attached the Bulgarian Volunteer Corps of 12 battalions with a total strength of 12 634 men. It was formed by order No. 40 /14 April 1877 of the Supreme Commander of the Russian Army. On 6 May 1877, the Corps was sworn in and awarded its battle flag. As its chief was assigned Gen. Nikolai Stoletov.",
              link: "https://militarymuseum.bg/en/exhibitions/chronological-exhibition/russo-turkish-war-of-liberation-1877-1878/",
              hall: "National Museum of Military History",
              category: "Museum",
              countryCode: "bg"
            }, {
              country: "Bulgaria",
              title: "RESTORATION OF THE BULGARIAN ARMY",
              date: "Permanent",
              thumbnailSrc: "https://militarymuseum.bg/-cms/wp-content/uploads/2020/09/expositions-vba-2.jpg",
              detail: "The Bulgarian Volunteer Corps became the core of the established by order No 1 of 15 July 1878 Bulgarian Territorial Army. The latter was built up as a standing army on the principle of conscription and featured four branches: infantry, artillery, cavalry, and sapper troops. In August of 1879, was formed the Navy. The Bulgarian Territorial Army could not meet the 84 750 men goal, and at the end of 1878, its strength was just 31 400 men. For the education of the future officers, in November of 1878, in Sofia opened the Military School, which enrolled 255 junkers [cadets], and further 132 were sent to military schools in Russia. In Veliko Tarnovo opened the Training Battalion, for NCOs, as well as military schools for medical assistants in Sofia, Plovdiv, Veliko Tarnovo, and Tatar Pazardzhik (today \u2013 Pazardzhik). On 5 July 1879, within the first Bulgarian government was constituted the Ministry of War, the highest military administrative institution in Bulgaria, ensuring the defence of state sovereignty, national independence, and the country\u2019s territorial integrity. On 17 December 1879, \u201CThe Provisional Rules of the Bulgarian Troops\u201D came into force, which served as first law of the armed forces. Every Bulgarian citizen between 21 and 40 was subject to military service. The troops were manned on territorial principle.",
              link: "https://militarymuseum.bg/en/exhibitions/chronological-exhibition/revival-of-the-bulgarian-army/",
              hall: "National Museum of Military History",
              category: "Museum",
              countryCode: "bg"
            }, {
              country: "Austria",
              title: "Deep Space Concert: Gerald Peter Project - Incremental Changes",
              date: "September 2022, 19:30\u201321:00",
              thumbnailSrc: "https://ars.electronica.art/center/files/2022/07/Gerald-Peter-500x250.jpg",
              detail: "Das Gerald Peter Project\u202Fist ein genre-\xFCbergreifendes, konzeptionelles Musik-Projekt mit dem Hauptprotagonisten Gerald Peter als Keyboarder, Pianist & Komponist, sowie Visual Programer und dem vielseitigen und versierten Schlagzeuger Aaron Thier. Pr\xE4sentiert wird das neue Album Incremental Changes, Pt. 2 mit Geralds Kompositionen, an denen er mehrere Jahre gearbeitet hat. Diese erz\xE4hlen, inspiriert von sukzessiven Lebenswandlungen (\u201EIncremental Changes\u201C), eine musikalische Geschichte, bei der verschiedene Stilelemente aus progressivem Rock, Jazz, neoklassischer, cineastischer sowie elektronischer Musik fusioniert werden.\u202F Die von Gerald Peter selbst entwickelten Instrument\u2013gesteuerten Visualisierungen sind in die Live Show integriert und machen damit das\u202FGerald Peter Project\u202Fzu einem multimedialen und musikalischen Gesamterlebnis.",
              link: "https://ars.electronica.art/center/de/deep-space-concert-gerald-peter-project-incremental-changes/",
              hall: "ARS ELECTRONICA",
              category: "Museum",
              countryCode: "at"
            }, {
              country: "Austria",
              title: "Familienwochenende: Wie viel Technik bin ich?",
              date: "September 2022, 10:00\u201317:00",
              thumbnailSrc: "https://ars.electronica.art/center/files/2019/05/secondbodylab-500x250.jpg",
              detail: "Wo Mensch und Maschine symbiotisch miteinander verschmelzen, Assistenzsysteme und Hardware im Alltag unverzichtbar sind, wird Technologie zum zweiten Ko\u0308rper. Es geht la\u0308ngst nicht mehr nur um Unterstu\u0308tzung, sondern auch um Erweiterung unserer ko\u0308rperlichen Fa\u0308higkeiten, wenn Technik zu elektronisch-sensorischen Fu\u0308hlern unserer Umwelt wird. Fu\u0308r manche Menschen ist es Lifestyle, fu\u0308r andere notwendiger Support. Von Exoskeletten und Prothetik bis zu Assistenz und Empowerment: wir wollen eine bessere Welt fu\u0308r alle!",
              link: "https://ars.electronica.art/center/de/familienwochenende-wie-viel-technik-bin-ich/",
              hall: "ARS ELECTRONICA",
              category: "Museum",
              countryCode: "at"
            }, {
              country: "Austria",
              title: "Schausammlung",
              date: "Permanent",
              thumbnailSrc: "https://www.belvedere.at/sites/default/files/styles/full_width/public/2019-06/lr-912.jpg?h=d3dd6db4&itok=OTEHuV2g",
              detail: "Die weltbekannte Sammlung des Belvedere: Schl\xFCsselwerke der Wiener Moderne von Gustav Klimt, Egon Schiele, Oskar Kokoschka oder Helene Funke erwarten Sie! Erleben Sie den gr\xF6\xDFten Bestand an Gem\xE4lden Ferdinand Georg Waldm\xFCllers und des Wiener Biedermeier neu. Entdecken Sie Glanzst\xFCcke \xF6sterreichischer Kunst des Mittelalters und des Barock \u2013 etwa die ber\xFChmten \u201ECharakterk\xF6pfe\u201C von F. X. Messerschmidt, face-to-face. Weitere Highlights sind Arbeiten von bedeutenden K\xFCnstler*innen wie Claude Monet, Elena Luksch-Makowsky, Vincent van Gogh oder Auguste Rodin im Dialog mit zeitgen\xF6ssischen Positionen. Die Dauerausstellung im barocken Ambiente des Oberen Belvedere pr\xE4sentiert \xF6sterreichische Kunst im Vergleich mit dem Schaffen internationaler K\xFCnstler*innen ihrer Zeit \u2013 etwa jene des mittelalterlichen Malers Rueland Frueauf d. \xC4., der Ikonen der Wiener Moderne Gustav Klimt, Broncia Koller-Pinell, Egon Schiele und Helene Funke oder der Wegbereiter*innen des Expressionismus wie Oskar Kokoschka. Die Schau zeigt Sch\xE4tze der Sammlung in immer wieder neuen Zusammenstellungen und setzt die Gem\xE4lde und Skulpturen in spannende Vergleiche in ihrer Zeit oder der Kunst anderer Epochen.",
              link: "https://www.belvedere.at/schausammlung",
              hall: "Belvedere Museum Wien",
              category: "Museum",
              countryCode: "at"
            }, {
              country: "Austria",
              title: "Lebensnah",
              date: "18. M\xE4rz 2022 - 1. November 2022",
              thumbnailSrc: "https://www.belvedere.at/sites/default/files/styles/full_width/public/2022-02/8740%20RGB%20Anton%20Filkuka%20Holzsammelnde%20Kinder.jpg?h=be0df1e5&itok=v9XEAvnq",
              detail: "Ist alles realistisch, was lebensnah scheint? Was fasziniert Betrachter*innen an der detailgetreuen Wiedergabe der Realit\xE4t? Jedes Abbild der Wirklichkeit kann in der bildenden Kunst generell als realistisch bezeichnet werden. Dennoch: Durch die Fokussierung auf bestimmte Inhalte will realistische Malerei \u2013 im Gegensatz zum Naturalismus, dessen Ma\xDFstab die \xE4u\xDFere Richtigkeit ist \u2013 tiefer liegende Wahrheiten vermitteln. Die neue Sonderschau im Oberen Belvedere pr\xE4sentiert mit Lebensnah realistische Werke aus einem Zeitraum von einhundert Jahren.",
              link: "https://www.belvedere.at/lebensnah",
              hall: "Belvedere Museum Wien",
              category: "Museum",
              countryCode: "at"
            }, {
              country: "Austria",
              title: "IM BLICK: Georg Eisler",
              date: "8. April 2022 - 25. September 2022",
              thumbnailSrc: "https://www.belvedere.at/sites/default/files/styles/full_width/public/2022-03/Taf_1_Selbstportr%C3%A4t_1989.jpg?h=736f1bdc&itok=dRpfc9jR",
              detail: "Alltag auf den Stra\xDFen Wiens, gewaltt\xE4tige Ausschreitungen in Belfast, Trubel auf einem Bahnhof, Tanzende in einem Club  \u2013 f\xFCr die Inhalte seiner Bilder lie\xDF sich der Wiener K\xFCnstler Georg Eisler unmittelbar vom Leben inspirieren. Pers\xF6nliche Tage- und Arbeitsb\xFCcher geben Aufschluss \xFCber sein Ringen, diese pr\xE4genden Eindr\xFCcke spontan und ungezwungen auf der Leinwand festzuhalten. Wie nachhaltig und intensiv ihm das gelang, zeigt diese Im Blick-Ausstellung im Oberen Belvedere. In Kooperation mit dem Georg und Alice Eisler-Fonds f\xFCr bildende K\xFCnstler und Komponisten wird seit Anfang 2018 im Belvedere an einem Werkverzeichnis des K\xFCnstlers gearbeitet. Kuratiert von Kerstin Jesse.",
              link: "https://www.belvedere.at/im-blick-georg-eisler",
              hall: "Belvedere Museum Wien",
              category: "Museum",
              countryCode: "at"
            }, {
              country: "Austria",
              title: "INSTANTLY! VIENNA STREET PHOTOGRAPHY",
              date: "19 May 2022 to 23 October 2022",
              thumbnailSrc: "https://www.wienmuseum.at/fileadmin/_processed_/a/5/csm_Augenblick_Plakat_DE_1058x1500_a5b0298ce9.jpg",
              detail: "Vienna's street life in fascinating, never-before-seen photos: The exhibition \"Instantly! Vienna Street Photography\" traverses the city\u2019s pictorial history. Most of the works come from the photo collection of the Wien Museum, which showcases its vast holdings like never before. The focus of the exhibit is the developing gaze on big city life, from the 1860s to the present. In addition to iconic images of Vienna that capture decisive moments in urban life, the show presents numerous never-before-exhibited or published photographs that bring the city\u2019s everyday life as well as the lives of its inhabitants to the fore: impressive street scenes, intimate snapshots, and fleeting glimpses of urban life. The exhibit shows how the medium of photography functioned in the creation and dissemination of new urban vistas. In this way, the images also tell the story of a rapidly changing metropolis. They capture the hustle and bustle on streets, squares, and markets, uncover unexpected encounters, and document moments of indolence and pleasure. All in all, the exhibition paints a new portrait of the metropolis on the Danube, inviting visitors on an exciting pictorial journey from early urban photography to the Instagram aesthetics of the present.\xAD Instagram Photo Contest #Augenblick2022, accompanying the exhibition \u201CInstantly! Vienna Street Photography\u201D Moments, instants, snapshots! Which places are Instagramers in Vienna interested in, which street scenes do they show on the net? The focus of the new photo contest is the city as a place of encounters, emotions and for playing with reflections, light and shadow. Whether in color or black and white, with a camera or smartphone, edited or not \u2013 you are invited: Take part in the Wien Museum's Instagram contest and post Viennese Street Photography with the hashtag #Augenblick2022 until June 19, 2022 ! A selection of the entries will be presented in the exhibition and rewarded with two free tickets each. For the best three images, there will be an additional award of a catalog and a high-quality print. In the jury are Alexander Zalokar @a_l_x_ender and Philipp Mohnberg @philipp_mberg, two passionate street photographers. In fall 2020, they founded the platform Wienerblicke @wienerblicke, where they regularly present photographers from Vienna. Also part of the jury are Wolfgang Breyscha as community manager for Instagramers Austria @igersaustria.at and Kilian Prader for Igers Vienna @igersvienna, as well as Christine Koblitz and Frauke Kreutler for the Wien Museum.",
              link: "https://www.wienmuseum.at/en/exhibitions/current-exhibitions/detail/augenblick-strassenfotografie-in-wien",
              hall: "Wien Museum",
              category: "Museum",
              countryCode: "at"
            }, {
              country: "Austria",
              title: "URBAN CULTURES STREET ART AT THE CONSTRUCTION SITE",
              date: "9 June 2022 to 2 October 2022",
              thumbnailSrc: "https://www.wienmuseum.at/fileadmin/_processed_/1/3/csm_Plakat_Urban_Cultures_Part_II_DE_52989d1b62.jpg",
              detail: "Under the heading Karlsplatz Open Air the construction fence at the Wien Museum will, once again, become a canvas for street art during the summer. With its multiple possible uses, today\u2019s Karlsplatz is the inspiration for the artists\u2019 often site-specific art. People stop for a snack on Karlsplatz, they stroll there, they skateboard there. Along with events and festivals, cultural interventions and demonstrations also take place, ranging from demonstrations against Covid measures to the Fridays for Future demonstrations. Just last year, \u201Cparty zone during lockdown\u201D was added to the square\u2019s list of uses, but was controversially banned. Urban Cultures If the focus of the Urban Natures construction fence exhibition in 2021 was on the interface between buildings and greenery, the theme in 2022 is public space and its users. \u201CPublic\u201D is usually defined as a place where different people, cultures, and needs meet, not always smoothly. It\u2019s a place for encounter, discourse, participation. It\u2019s also the idea of accessibility to all under the same conditions. But does this ideal correspond to reality? And just who is actually meant by \u201Ceveryone\u201D? Who is present and welcome in public space? Who helps to shape it? Whose needs and voices are brought into focus in a process that also displaces others in the desire for a more conflict-free ambience? These are questions that are closely linked to the original protest culture of graffiti and street art. After all, it is precisely these artists who claim spaces for themselves and question existing power and ownership structures concerning public participation and communication.",
              link: "https://www.wienmuseum.at/en/exhibitions/current-exhibitions/detail/urban-cultures-street-art-am-bauzaun",
              hall: "Wien Museum",
              category: "Museum",
              countryCode: "at"
            }, {
              country: "Austria",
              title: "TERRA NOVA. 70 YEARS OF THE SIEMENSSTRASSE SETTLEMENT IN FLORIDSDORF",
              date: "from October 9, 2020",
              thumbnailSrc: "https://www.wienmuseum.at/fileadmin/user_upload/Teaser_Siemensstrasse.jpg",
              detail: "The Siemensstra\xDFe settlement (1950\u201354) in Floridsdorf is one of the outstanding examples of social housing and urban development in post-war Vienna. It was highly respected internationally and is now a designated cultural heritage site. At the time of its construction, the settlement was the largest municipal housing complex in Vienna, with over 1700 apartments. After the Second World War, the housing shortage in Vienna was dramatic. Over 86,000 apartments were destroyed or unusable. As an important industrial location, Floridsdorf was particularly affected. To quickly cover the most urgent housing needs, the city initiated a so-called rapid construction project in addition to the regular residential construction program. By 1954, about 4,000 additional apartments had been built. Many of the more than 1,700 apartments were designed as so-called duplex apartments, small apartments (approx. 30m\xB2), which could later be combined without great technical effort. In keeping with the demands of social urban planning, which aimed to separate work, living and recreation, the settlement was built in the immediate vicinity of the large Floridsdorf industrial plants, featuring generous open and green spaces. In addition, Siemensstrasse offered the residents a rich infrastructure, such as a community center, kindergarten, children's outdoor pool, bathhouse, and a series of stores. The architect Franz Schuster (1892\u20131972) planned the housing project according to the \"New Neighborhood\" concept originating in the Anglo-American realm. This was intended to enable residents to live private lives while taking different needs into account. Separate building and apartment types were designed for families, single people, war invalids and the elderly, such as the \"Heimst\xE4tte f\xFCr alte Menschen\". Franz Schuster had already built in Red Vienna (with Franz Schacherl, he designed the settlement \"Am Wasserturm\", X., 1923\u20131924; with, among others, Margarete Sch\xFCtte-Lihotzky and Adolf Loos the \"Otto Haas-Hof\" in the XX. ,1924\u20131926) as well as the Montessori Kindergarten on Rudolfsplatz (I., 1929\u201331). In 1926, he moved to Frankfurt, where he worked as an associate of Ernst May in one of the centers of architectural modernism in Europe. In 1937, he was appointed to the School of Applied Arts in Vienna as the successor to Josef Hoffmann. In 1938, he served the National Socialists\u2019 planning agenda and participated, among other things, in the planning of the demolition of Leopoldstadt. Alas, this did not hinder his career after 1945. He retained his position as professor and played a decisive role in the reconstruction of Vienna. In addition to the Per Albin Hansson settlement (X., 1947\u201351, together with Eugen W\xF6rle and Stefan Simony, among others) and the special kindergarten \"Schweizer Spende\" (XV.), the Siemensstrasse settlement was one of his major works during this period. The exhibition \"Terra Nova - 70 Years of Siemensstrasse Settlement\" explores the strengths of social urban planning and the concept of the New Neighborhood. It was conceived in close cooperation with contemporary witnesses and tells about the living culture and everyday life of the 1950s. It can be seen in a duplex apartment at Scottgasse 5. A cooperation of Wien Museum, Wohnpartner Team 21 and the Referat Wohnbauforschung und internationale Beziehungen",
              link: "https://www.wienmuseum.at/en/terra-nova-70-years-of-the-siemensstrasse-settlement-in-floridsdorf",
              hall: "Wien Museum",
              category: "Museum",
              countryCode: "at"
            }, {
              country: "Australia",
              title: "Do Ho Suh",
              date: "Opens 4 November 2022",
              thumbnailSrc: "https://www.mca.com.au/files/images/Suh_Museum_Voorlinden_2019_inst.width-800.jpegquality-70.jpg",
              detail: "The South Korean artist\u2019s first solo exhibition in the Southern Hemisphere, presented as part of the 2022/2023 Sydney International Art Series.",
              link: "https://www.mca.com.au/artists-works/exhibitions/do-ho-suh/",
              hall: "Museum of Contemporary Art Australia",
              category: "Gallery",
              countryCode: "au"
            }, {
              country: "Australia",
              title: "MCA Collection: Perspectives on place",
              date: "until 23 July 2023",
              thumbnailSrc: "https://www.mca.com.au/files/images/Rosemary_Laing_brumby_mound_6_2.width-800.jpegquality-70.jpg",
              detail: "This major new display reimagines the MCA\u2019s Level 2 galleries, which are dedicated to the Museum\u2019s permanent collection. MCA Collection: Perspectives on place brings together artworks that explore the social and physical aspects of place. It has been imagined as an expanded map, which weaves together a picture of the world made from rituals, memories, metaphors, imprints and repurposed materials. The works stem from specific sites to illuminate broader ideas around geopolitics and environmental change, communal life and custodianship. Collectively they reveal how the notion of place is entwined with different cultural perspectives on time, history and belonging. The exhibition is drawn from the MCA\u2019s diverse collection of over 4500 artworks. It includes recent acquisitions, collection highlights and works owned jointly with Tate, London, through a groundbreaking international partnership. Since its inception in 1989, the Museum has acquired new and recent works by living artists across all media, shaping a distinctive history of art from Australia as it unfolds.",
              link: "https://www.mca.com.au/artists-works/exhibitions/mca-collection-perspectives-on-place/",
              hall: "Museum of Contemporary Art Australia",
              category: "Gallery",
              countryCode: "au"
            }, {
              country: "Australia",
              title: "Bonita Ely: Artist Room, MCA Collection",
              date: "until 6 November 2022",
              thumbnailSrc: "https://www.mca.com.au/files/images/4Controlled_Atmosphere_Anzart.width-800.jpegquality-70.jpg",
              detail: "Sydney-based artist Bonita Ely is widely regarded for her trailblazing art practice that engages feminist critique and environmental commentary. Since the 1970s Ely has been working across sculpture, installation and performance to address ecological and socio-political issues grounded in the context of Australia. This presentation focuses on two of Ely\u2019s performance works from the 1980s \u2013 Murray River Punch (1980) and Controlled Atmosphere (1983) \u2013 that highlight human mismanagement of and interference in Australian waterways. Ely\u2019s research into complex environmental concerns and our relationship to the natural world continues to be a mainstay of her practice. While Murray River Punch (1980) and Controlled Atmosphere (1983) were first made over five decades ago, they retain an enduring relevance to the unfolding global ecological crisis of today. Ely\u2019s early eco-feminist performance work Jabiluka UO\u2082 (1979) is also currently on display as part of MCA Collection: Perspectives on place. Manya Sellers Associate Curator, Collection This is the eighth exhibition in the Artist Room, a series highlighting an artist\u2019s work in the MCA Collection.",
              link: "https://www.mca.com.au/artists-works/exhibitions/bonita-ely-artist-room-mca-collection/",
              hall: "Museum of Contemporary Art Australia",
              category: "Gallery",
              countryCode: "au"
            }, {
              country: "Australia",
              title: "Ultra Unreal",
              date: "until 2 October 2022",
              thumbnailSrc: "https://www.mca.com.au/files/images/Lu_Yang_Doku_HungryGhost_LR.width-800.jpegquality-70.jpg",
              detail: "Ultra Unreal is an exhibition of fantastical worlds simulating more-than-human futures, evolving belief systems and fluid frameworks of being. Featuring six artists and collectives whose world-building practices are connected to nightlife ecosystems across the globe, it explores how constructing other worlds can give birth to new mythologies, raising questions about what we believe in and how our beliefs emerge.",
              link: "https://www.mca.com.au/artists-works/exhibitions/ultra-unreal-2022/",
              hall: "Museum of Contemporary Art Australia",
              category: "Gallery",
              countryCode: "au"
            }, {
              country: "Australia",
              title: "Vivienne Binns: On and through the Surface",
              date: "until 25 September 2022",
              thumbnailSrc: "https://www.mca.com.au/files/images/UMO42984915_fcgQ8BC.width-800.jpegquality-70.jpg",
              detail: "Vivienne Binns is an important figure in the history of Australian visual art. Binns rose to prominence in the 1960s with her psychedelic depictions of sexual imagery, which anticipated the feminist art movement. Since that time, she has continued to shape some of the most significant developments in Australian visual culture, both within and beyond the domain of the gallery. Binns\u2019 outstanding contribution to Australian art was recognised in 2021 with an Australia Council Award for Visual Arts. Vivienne Binns: On and through the Surface is the first retrospective of Binns\u2019 multifaceted practice. A partnership between the MCA and Monash University Museum of Art, it brings together over 100 artworks spanning six decades alongside a rich selection of archival materials. The exhibition charts the key periods, themes and methods in Binns\u2019 work, from her early iconic depictions of the body to the socially transformative impact of her community projects, and the breadth of ideas that she has explored since returning to studio practice in the 1980s. Above all, it reflects Binns\u2019 enduring interest in testing the possibilities of the painted surface. Curated by Anneke Jaspers, Senior Curator, Collection, MCA and Hannah Mathews, Senior Curator, MUMA",
              link: "https://www.mca.com.au/artists-works/exhibitions/vivienne-binns-on-and-through-the-surface/",
              hall: "Museum of Contemporary Art Australia",
              category: "Gallery",
              countryCode: "au"
            }, {
              country: "Australia",
              title: "Daniel Boyd Treasure Island",
              date: "Until 29 January 2023",
              thumbnailSrc: "https://www.datocms-assets.com/42890/1649306521-sid83902-m.jpg?crop=focalpoint&dpr=3&fit=crop&fm=webp&fp-x=0.47&fp-y=0.69&h=484&iptc=allow&w=651",
              detail: "Daniel Boyd: Treasure Island is the artist\u2019s first major exhibition to be held in an Australian public institution. Featuring more than 80 works from across his nearly two-decade career, the exhibition unpacks the ways in which Boyd holds a lens to colonial history, explores multiplicity within narratives and interrogates blackness as a form of First Nations resistance. Working with an idiosyncratic painting technique that partially obscures the composition, Boyd refigures archival imagery, art historical references and his own family photographs, asking us to contend with histories that have been hidden from view. The exhibition includes new work and commissioned spatial interventions. Highlights include his iconic early work Treasure Island 2005; Untitled (ZVDG) 2014 from his famed History is made at night (Kochi) series; and the intimate Untitled (BAT) 2020, one of the artist\u2019s first large-scale works drawing from his personal archive of lived experiences and memories. As well as revealing some of the richness and diversity of contemporary Indigenous art practices, and Australian contemporary art more broadly, Daniel Boyd: Treasure Island offers a thoughtful and thought-provoking response to the current moment. It is accompanied by a richly illustrated publication, featuring all new writing by the exhibition\u2019s co-curators and commissioned First Nations authors, offering critical insight into Boyd\u2019s practice as well as creative and experimental responses to his work.",
              link: "https://www.artgallery.nsw.gov.au/whats-on/exhibitions/daniel-boyd/",
              hall: "Art Gallery NSW",
              category: "Gallery",
              countryCode: "au"
            }, {
              country: "Australia",
              title: "Sol LeWitt Affinities and Resonances",
              date: "Until 12 February 2023",
              thumbnailSrc: "https://www.datocms-assets.com/42890/1661821786-sid84662_view05crop.jpg?dpr=4&fit=crop&fm=webp&h=484&iptc=allow&w=651",
              detail: "Sol LeWitt (1928\u20132007) was a pivotal figure in 20th-century American art whose ideas continue to have an impact on artists around the world. Many of his artworks were conceived as sets of instructions that could be executed by others. He often likened his process to that of a composer whose music acquired subtle differences with each new performance. This exhibition, presented in collaboration with Kaldor Public Art Projects, places LeWitt\u2019s work in conversation with paintings by Anmatyerr artists Emily Kame Kngwarreye and Gloria Tamerre Petyarre. It also introduces three musical commissions, each developed collaboratively by an American musician and an Aboriginal musician: Chuck Johnson and JWPATON; Steve Gunn and amby downs; and Claire Rousay and E Fishpool. LeWitt\u2019s enormous wall drawing Wall drawing #955, Loopy Doopy (red and purple) 2000 \u2013 installed in the John Kaldor Family Hall on the ground level \u2013 reveals the influence Australian Central Desert painters had on his practice, including Kngwarreye, whose work he first encountered at the Venice Biennale in 1997. LeWitt described feeling a \u2018great affinity\u2019 for Kngwarreye\u2019s work and went on to become an avid collector of paintings by her, Petyarre and other Central Desert artists. Sol LeWitt: Affinities and Resonances explores the connections between these seemingly disparate art-making traditions while also examining the processes of creation and collaboration through three musical compositions developed in response to Loopy Doopy (red and purple). Also on display is LeWitt\u2019s Wall drawing 388 in the 20th-century galleries on lower level 1.",
              link: "https://www.artgallery.nsw.gov.au/whats-on/exhibitions/sol-lewitt-affinities-and-resonances/",
              hall: "Art Gallery NSW",
              category: "Gallery",
              countryCode: "au"
            }, {
              country: "Australia",
              title: "Brett Whiteley Blue and White",
              date: "Until 27 November 2022",
              thumbnailSrc: "https://www.datocms-assets.com/42890/1637540393-189-mm.jpg?fit=max&fm=webp&iptc=allow&w=2000",
              detail: "Blue-and-white ceramics are one of pottery\u2019s best-known and enduring products. Invented in China, they\u2019ve been copied and created by makers worldwide, with the Middle East, Japan, Vietnam and Korea all producing their own variations. Brett Whiteley followed in this long tradition, producing ceramics solely in these colours, in a lesser known tranche of his art practice. Blue, of course, can be found not only in the sweeping lines that follow the forms of his rounded ceramics, but also in the blue ink applied with brush to paper in his calligraphic drawings and the rich deep blue of the Sydney Harbour paintings for which he is famed.\u200B This exhibition presents a rare focus on Whiteley's ceramics, along with related prints and drawings, augmented by select paintings, many of which include depictions of blue-and-white ware.",
              link: "https://www.artgallery.nsw.gov.au/whats-on/exhibitions/brett-whiteley-blue-and-white/",
              hall: "Art Gallery NSW",
              category: "Gallery",
              countryCode: "au"
            }, {
              country: "Australia",
              title: "Brett Whiteley Travelling Art Scholarship 2022",
              date: "Opens 20 October 2022",
              thumbnailSrc: "https://www.datocms-assets.com/42890/1656287886-20211207bwtas_017.jpg?fit=max&fm=webp&iptc=allow&w=2000",
              detail: "In its 24th year, the Brett Whiteley Travelling Art Scholarship will award two types of residencies for the first time. One artist will receive a three-month residency at the Cit\xE9 Internationale des Arts in Paris and $40,000, while five artists will each receive $10,000 and a two-week residency at the Shark Island Institute in Kangaroo Valley, New South Wales. The winners will be announced on 26 October 2022. This year, the entries will be judged by guest artist Mitch Cairns, who won the scholarship in 2012. Works by each scholarship recipient will be exhibited at the Brett Whiteley Studio. The annual scholarship was created from an endowment by Beryl Whiteley, who died in 2010. It was inspired by the profound effect international travel and study had on her son, the artist Brett Whiteley, as a result of winning the Italian Government Travelling Art Scholarship at the age of 20. Previously, the Brett Whiteley Travelling Art Scholarship was awarded to a single artist each year and included a three-month residency at the Cit\xE9 Internationale des Arts in Paris. However, due to COVID-19 international travel restrictions, it was not possible to host the 2020 and 2021 scholarship recipients overseas, and instead a local residency was awarded to five artists. Thanks to the continuing generosity of Shark Island Kangaroo Valley, in 2022, both the overseas and the local residencies will be awarded.",
              link: "https://www.artgallery.nsw.gov.au/whats-on/exhibitions/brett-whiteley-travelling-art-scholarship-2022/",
              hall: "Art Gallery NSW",
              category: "Gallery",
              countryCode: "au"
            }, {
              country: "Australia",
              title: "Local Rhythms and Actions",
              date: "Until January 2023",
              thumbnailSrc: "https://www.datocms-assets.com/42890/1652327260-173-2014.jpg?crop=focalpoint&dpr=4&fit=crop&fm=webp&fp-x=0.5&fp-y=0.42&h=214&iptc=allow&w=321",
              detail: "Local Rhythms and Actions has been jointly curated by the Art Gallery of New South Wales and 11 residents from Woolloomooloo, our neighbouring suburb in inner-city Sydney. Alannah Boota, Rozee Cutrone, Jone Di, Sandra Donato, Cristina Gomez, Faith Landy-Ariel, Carmel McNamara, Kerry McNamara, Rosano \u2018Snooze\uFFFD\uFFFD Martinez, Maya Sheridan-Martinez and Sarah \u2018Boom\u2019 Samuels answered a call-out for co-curators earlier in 2022. They participated in a series of workshop discussions about art and matters close to their hearts, and selected works from the Art Gallery\u2019s collection in response to these conversations. Among the key talking points that connect the artworks they have chosen are local art and history, family and the role that mothers play in the community, the acceptance of all people as locals, Indigenous connections, and the presence and perspectives of First Nations people living in the neighbourhood. The works on display include paintings, prints, photographs, sculpture and moving image by artists such as Jon Campbell, Emily Floyd, Mavis Ganambarr, Shaun Gladwell, the Ken Family Collaborative, Jeff Koons, David McDiarmid, Reko Rennie, Peter Upward and Miwa Yanagi.",
              link: "https://www.artgallery.nsw.gov.au/whats-on/exhibitions/local-rhythms-and-actions/",
              hall: "Art Gallery NSW",
              category: "Gallery",
              countryCode: "au"
            }, {
              country: "Australia",
              title: "The Aquilizan Studio Making it Home",
              date: "Until January 2023",
              thumbnailSrc: "https://www.datocms-assets.com/42890/1656321022-20220622aquilizanstudio_009_2crop.jpg?dpr=4&fit=crop&fm=webp&h=214&iptc=allow&w=321",
              detail: "Alfredo and Isabel Aquilizan are creating one of their impressively scaled cardboard sculptures for the opening of the Art Gallery of New South Wales\u2019 expanded building on 3 December 2022. Living between the Philippines and Australia, the artists have drawn on their own story of migration to forge an art practice dedicated to understanding the shifting, varied and often complicated meanings of home. They are inspired by the power of collective action and create spaces where people can come together through a process of art-making. In a project titled Making it Home, selected school and community groups have been invited to create their own cardboard \u2018dream homes\u2019, which may become part of the Aquilizans\u2019 sculpture and its new speculative neighbourhood. Their constructions are on display in the studio space on lower level 2. There will also be opportunities for Art Gallery visitors to participate in workshops. Check our event listing for the latest details.",
              link: "https://www.artgallery.nsw.gov.au/whats-on/exhibitions/aquilizan-studio/",
              hall: "Art Gallery NSW",
              category: "Gallery",
              countryCode: "au"
            }, {
              country: "Australia",
              title: "Unrealised Sydney",
              date: "Saturday 6 August 2022 - Sunday 13 November 2022",
              thumbnailSrc: "https://sydneylivingmuseums.com.au/sites/default/files/styles/media_block_thumbnail_large/public/UNREAL22_Web_Hero.jpg?itok=lPLYGzjq",
              detail: "Share this page on TwitterShare this page on FacebookEmail this page MUSEUM OF SYDNEY Unrealised Sydney presents a fascinating insight into the future of our city as it was imagined in the past. The imagined city precedes the built city. Ideas for new buildings and precincts can reveal much about the time of their conception: economic drivers, politics, technological change, and prevailing views on society, environment and design. Cities evolve as a dialogue between the possible and the actual, with change often contested. Many visions are left behind, unrealised, ghostly reminders of the city that might have been. Guest curated by Robert Freestone, Unrealised Sydney explores the genesis of, and community responses to, bold and sometimes misguided design proposals by governments and the private sector for redeveloping some strategic sites in and around the CBD in the second half of the 20th century. Though never realised, these schemes \u2013 shown through a range of plans, designs, models, sketches and documentary footage \u2013 form a rich part of the story that is Sydney. These decades saw shifting ideas about architectural and urban design, heritage, and democratic governance. Controversial urban renewal projects raised stark questions about global versus local priorities and private versus public interests. The processes of reimagination and renewal continue apace. As we continually refashion our cities for the future, what can we learn from past unrealised visions? Accompanying the exhibition is Realise, an interactive experience developed in collaboration with media producers Junior Major. Visitors modify precincts in Tallawoladah / The Rocks, considering factors such as environmental sustainability, liveability and productivity \u2013 then see them brought to life in the gallery. Daily screenings of the 1978 documentary Woolloomooloo will take place at 2pm in the Warrane Theatre, Museum of Sydney, courtesy National Film and Sound Archive \xA9 Bower Bird Films.",
              link: "https://sydneylivingmuseums.com.au/exhibitions/unrealised-sydney",
              hall: "Sydney Living Museum",
              category: "Museum",
              countryCode: "au"
            }, {
              country: "Australia",
              title: "SPRING HARVEST FESTIVAL",
              date: "Sunday 11 September 2022",
              thumbnailSrc: "https://sydneylivingmuseums.com.au/sites/default/files/styles/media_block_thumbnail_large/public/2021212_SLM_XMAS_VH%200206.jpg?itok=WxyKwlC7",
              detail: "Immerse yourself in the rich food history of \u202FVaucluse House at this festive celebration of Spring. Discover the stories behind your food, listen to a range of fascinating talks, watch live food demonstrations, take a tour and browse a selection of stalls featuring Sydney\u2019s finest artisan producers, makers and ready-to-eat gourmet food vendors. Explore the\u202Fproperty\u202Fand hear the stories that reveal its history. Take a peek inside the historic house or simply bring a picnic rug and enjoy the picturesque setting and music by The Guitar Works Trio.",
              link: "https://sydneylivingmuseums.com.au/events/spring-harvest-2022",
              hall: "Sydney Living Museum",
              category: "Museum",
              countryCode: "au"
            }, {
              country: "Brazil",
              title: "FORA DAS SOMBRAS",
              date: "11 18/08 a 27/11",
              thumbnailSrc: "https://www.museuoscarniemeyer.org.br/content/exposicoes/225/mo_banners_digitais_fora_das_sombras_em_cartaz.jpg",
              detail: "MON apresenta exposi\xE7\xE3o \u201CFora das Sombras: Novas Gera\xE7\xF5es do Feminino na Arte Contempor\xE2nea\u201D Ser\xE1 inaugurada no dia 18 de agosto, na Sala 11 do Museu Oscar Niemeyer (MON), a exposi\xE7\xE3o \u201CFora das Sombras: Novas Gera\xE7\xF5es do Feminino na Arte Contempor\xE2nea\u201D. A mostra re\xFAne a produ\xE7\xE3o recente de 40 artistas mulheres do Rio Grande do Sul, com curadoria de Ana Zavadil. Por meio de um conjunto de obras, muitas in\xE9ditas, essas potentes artistas questionam a situa\xE7\xE3o da mulher numa hist\xF3ria da arte dominada pelos homens. A resist\xEAncia \xE9 expressada pelo processo criativo de cada uma delas, formando um conjunto inquietante e questionador. S\xE3o 140 obras de diversas t\xE9cnicas. O modelo curatorial de exibi\xE7\xE3o das obras \xE9 o modelo labir\xEDntico, sem seguir cronologia, deixando o visitante livre para escolher o seu caminho dentro da sala expositiva. Faz parte da proposta provocar quest\xF5es que possam ampliar as pesquisas individuais produzidas pelas artistas. Os trabalhos apresentados constituem fonte de resist\xEAncia e poder dentro do cen\xE1rio vigente da produ\xE7\xE3o das artistas, muitas com um car\xE1ter feminista. A arte deve potencializar a milit\xE2ncia art\xEDstica coletiva pela busca de respeito, igualdade e diversidade, buscando romper valores do sistema patriarcal, bem como reconhecer a qualidade da obra de artistas mulheres e o seu lugar na sociedade.",
              link: "https://www.museuoscarniemeyer.org.br/exposicoes/exposicoes/foradassombras",
              hall: "Museu Oscar Niemeyer",
              category: "Museum",
              countryCode: "br"
            }, {
              country: "Brazil",
              title: "MAZ\xC9 MENDES - RECORTES DE UM LUGAR",
              date: "18/08 a 20/11",
              thumbnailSrc: "https://www.museuoscarniemeyer.org.br/content/exposicoes/226/ap_banners_site_maze.jpg",
              detail: "A exposi\xE7\xE3o \u201CRecortes de Um Lugar\u201D, da artista paranaense Maz\xE9 Mendes, ser\xE1 apresentada no Museu Oscar Niemeyer (MON), a partir de 19 de agosto, na Sala 7. A curadoria \xE9 de Rosemeire Odahara Gra\xE7a. A mostra re\xFAne pinturas da sua produ\xE7\xE3o recente, fotografias e documentos. As obras permitir\xE3o ao visitante estabelecer um di\xE1logo entre seus mais novos trabalhos, produzidos a partir de 2019, e o caminho criativo que a artista desenvolve desde o final da d\xE9cada de 1970. Maz\xE9 Mendes \xE9 graduada pela Faculdade de Belas Artes do Paran\xE1 e p\xF3s-graduada em Arte-Educa\xE7\xE3o pela Faculdade de Artes do Paran\xE1. Tem participado ativamente de v\xE1rios certames art\xEDsticos desde o final dos anos 1970, com centenas de exposi\xE7\xF5es coletivas e individuais no Brasil e no Exterior. Suas obras fazem parte de acervos institucionais e privados, entre eles: Museu Oscar Niemeyer (MON), Museu de Arte Contempor\xE2nea do Paran\xE1 (MAC), Museu Municipal de Arte (MuMA), Museu da Universidade Federal do Paran\xE1 (MusA-UFPR), Museu de Arte do Rio Grande do Sul (MARGS), Museu da Gravura Cidade de Curitiba, Museu Universit\xE1rio PUCPR e acervo da Embap/Unespar.",
              link: "https://www.museuoscarniemeyer.org.br/exposicoes/exposicoes/mazemendes",
              hall: "Museu Oscar Niemeyer",
              category: "Museum",
              countryCode: "br"
            }, {
              country: "Canada",
              title: "FROM PEPINOT TO PAW PATROL\xAE",
              date: "UNTIL SEP 1, 2023",
              thumbnailSrc: "https://www.historymuseum.ca/wp-content/uploads/2022/08/television-childhood-500x500-1-100x100.jpg",
              detail: "FEAST YOUR EYES! Explore 70 years of Canadian children\u2019s television. In addition to numerous clips from everyone\u2019s favourite shows, From Pepinot to PAW Patrol\xAE \u2013 Television of Our Childhoods features original costumes, puppets and more. A must-see exhibition for anyone, from the very young to the young at heart.",
              link: "https://www.historymuseum.ca/childhood-tv/",
              hall: "Canadian Museum of History",
              category: "Museum",
              countryCode: "ca"
            }, {
              country: "Canada",
              title: "CANADIAN CHILDREN'S MUSEUM",
              date: "Now Open",
              thumbnailSrc: "https://www.historymuseum.ca/wp-content/uploads/2022/08/childrens-museum-img2016-0320-0150-dm-500x500-1-100x100.jpg",
              detail: "THE GREAT ADVENTURE The Museum lets your kids travel the world, while enriching their lives and broadening their experience by exploring other cultures. Travel the world together on the colourful Pakistani bus. Load packages onto a cargo ship. Visit homes in India, Indonesia and Mexico. Get creative with crafts in the family Studio. WE TAKE YOUR HEALTH CONCERNS SERIOUSLY We\u2019re keeping you safe with timed entry, reduced capacity limits, a new \u201Clook-and-find passport\u201D with stickers, updated activities, and enhanced cleaning measures.",
              link: "https://www.historymuseum.ca/visit/childrens-museum/",
              hall: "Canadian Museum of History",
              category: "Museum",
              countryCode: "ca"
            }, {
              country: "Canada",
              title: "M\xE9tis Memories of Residential Schools: A Testament to the Strength of the M\xE9tis",
              date: "July 28, 2022 to January 13, 2023",
              thumbnailSrc: "https://humanrights.ca/sites/prod/files/styles/crop%5Bwidth%5D%3D1600%26crop%5Bheight%5D%3D640%26crop%5Bfp%5D%5Bx%5D%3D0.5%26crop%5Bfp%5D%5By%5D%3D0.5%26crop%5Bmask%5D%5Btype%5D%3Dright%26crop%5Bmask%5D%5Bamount%5D%3D0.5/public/2022-07/Metis-Memories-full-photo.jpg?itok=AAeUPAv8",
              detail: "M\xE9tis Memories of Residential Schools: A Testament to the Strength of the M\xE9tis will be open to the public July 28, 2022 in the Community Corridor at the Canadian Museum for Human Rights. This is the first official installation in this new community\u2010inspired space, which shares important human rights stories and perspectives. The Community Corridor is located in The Forks North Portage Partnership Classroom Lobby on the main level and can be viewed free of charge. Project statement from the M\xE9tis Memories team Residential schools, industrial schools, and day schools have had a long\u2010lasting impact on M\xE9tis communities. However, M\xE9tis experiences have consistently been left out of Canada\u2019s national narratives, including limited recognition of the harms caused by colonial schooling systems (Truth and Reconciliation Commission of Canada Final Report, 2015). Influential M\xE9tis scholars are working to relay the authentic history of the M\xE9tis to counteract a biased historical account that has resulted in racism and misunderstandings about the M\xE9tis. The involvement of M\xE9tis peoples in national initiatives honours the United Nations Declaration on the Rights of Indigenous Peoples and principles of equity, diversity, and inclusion. M\xE9tis Memories of Residential Schools, A Testament to the Strength of the M\xE9tis - will open in a new tabM\xE9tis Memories of Residential Schools, A Testament to the Strength of the M\xE9tis shares 24 impactful stories about this neglected chapter in Canadian history. This project honours the unique experiences and M\xE9tis survivors and families in colonial schooling systems and showcases authentic M\xE9tis community voices in an ethical and collaborative way. It invites viewers to engage in a deeper understanding of the injustices brought to all First Peoples in Canada. The original paintings are displayed at M\xE9tis Crossing - will open in a new tabM\xE9tis Crossing in northern Alberta. Funding for this initiative was provided by the Department of Canadian Heritage and the M\xE9tis Nation of Alberta.",
              link: "https://humanrights.ca/metis-memories-residential-schools-testament-strength-metis",
              hall: "Canadian Museum for Human Rights",
              category: "Museum",
              countryCode: "ca"
            }, {
              country: "Canada",
              title: "Kent Monkman: Being Legendary",
              date: "Opens October 8, 2022",
              thumbnailSrc: "https://www.rom.on.ca/sites/default/files/styles/gallery_carousel/public/studio_project_v2.jpg?itok=SWwkqb93",
              detail: "Curated by Cree artist Kent Monkman, Being Legendary presents an installation of new original paintings by the artist alongside objects from ROM\u2019s collections. Interpreted by Monkman\u2019s shape-shifting, time-travelling, gender-fluid alter ego, Miss Chief Eagle Testickle, the exhibition depicts how deeply Indigenous knowledge is embedded in the lands of Turtle Island. Cree and other Indigenous peoples have carried this knowledge in stories, songs, and artworks since time immemorial. Through the power of storytelling, Miss Chief Eagle Testickle reframes the forced interruptions of the colonial project on Turtle Island and honours leaders in the community who shine a light forward for future generations. Being Legendary is inspired by objects in the Museum\u2019s permanent collections. The artist acknowledges the support of ROM in realizing the exhibition.",
              link: "https://www.rom.on.ca/en/exhibitions-galleries/exhibitions/kent-monkman-being-legendary",
              hall: "Royal Ontario Museum",
              category: "Museum",
              countryCode: "ca"
            }, {
              country: "Canada",
              title: "Wildlife Photographer of the Year 2022",
              date: "Opens November 12, 2022",
              thumbnailSrc: "https://www.rom.on.ca/sites/default/files/styles/gallery_carousel/public/c_martin_gregus_image_90_wcredit2_0.jpg?itok=P7S-0nSs",
              detail: "Each year, aspiring photographers of all ages and skill levels submit tens of thousands of images in the annual international Wildlife Photographer of the Year competition. Organized by the Natural History Museum in London, UK, over one hundred remarkable images from this year's competition \u2014 the best of the best \u2014 will be on view at ROM this fall. Experience our world in vivid detail and see some of the most extraordinary species in ways you never imagined. Each photograph is back lit, providing exquisite quality and depth. Through the camera's lens, viewers become witnesses to the lives animals live and the challenges they face. Emotive, surprising glimpses of life on our planet are showcased through exceptional talent, technical expertise, and the perfectly captured moment.",
              link: "https://www.rom.on.ca/en/exhibitions-galleries/exhibitions/wildlife-photographer-of-the-year-2022",
              hall: "Royal Ontario Museum",
              category: "Museum",
              countryCode: "ca"
            }, {
              country: "Canada",
              title: "Canadian Modern",
              date: "Opens December 3, 2022",
              thumbnailSrc: "https://www.rom.on.ca/sites/default/files/styles/gallery_carousel/public/rom2022_18525_150_steamerchair_web_0.jpg?itok=nWF-s8nT",
              detail: "Do you recognize Canadian design around you? Canada's modern design and craft movement has been a dynamic part of the country's narrative from the early 20th century right up to today. Step into the latest ROM-original exhibition and explore Canada's innovative and lasting contributions to modern design and craft. From Clairtone's Project G Stereo to Fluevog footwear, this exhibition showcases one hundred examples of culturally significant, limited-edition and mass-produced objects designed and crafted in Canada, and the stories of insight, experimentation, and innovation behind them. Inspired by everything from pop culture and the Swinging Sixties to Canada's natural landscape and the Space Race, Canadian innovation was embraced by global markets, putting the country's designs on the world stage, where many of them continue to hold a place \u2014 and function \u2014 today. Whether it's fashion, furniture, jewellery, electronics, or ceramics, each object tells a story \u2014 some new, some nostalgic \u2014 and this exhibition invites visitors to take a fresh look at these everyday objects. Designers including Alfred Sung, Michael Massie, Hugh Spencer, Jeremy Laing, Jeff Goodman, Karin Jones, Michael Fortune, and Daphne Odjig are represented. Interviews, advertising, and digital media in the exhibition provide greater context by highlighting vision, production, and functionality. Canadian Modern places an important ROM collection front and centre, and offers an engaging lens through which to examine and appreciate Canada's unique place in the modern design and craft movement.",
              link: "https://www.rom.on.ca/en/exhibitions-galleries/exhibitions/canadian-modern",
              hall: "Royal Ontario Museum",
              category: "Museum",
              countryCode: "ca"
            }, {
              country: "Canada",
              title: "Riding the Olympic Wave",
              date: "17 MARCH 2022 - 5 MARCH 2023",
              thumbnailSrc: "https://stillmedab.olympic.org/media/Images/Museum/Explore/Programming/2022/Riding-the-Olympic-wave/Riding-the-Olympic-wave-thumbnail.jpg",
              detail: "The Olympic Games echo and sometimes anticipate the trends and aspirations of society, constantly riding these new waves. As such, six new sports and disciplines have been added to the programme of the Summer Games: 3x3 Basketball, BMX Freestyle, breaking, skateboarding, sport climbing and surfing. \u201CRiding the Olympic Wave\u201D explores this evolution and presents these six sports and disciplines, together with their respective social, cultural and artistic contexts.",
              link: "https://olympics.com/museum/explore/programming/riding-the-olympic-wave",
              hall: "The Olympic Museum",
              category: "Museum",
              countryCode: "ca"
            }, {
              country: "Swiss",
              title: "Passions and Prayers From the Collection of Eva and Konrad Seitz",
              date: "5/MAY/22 TO 30/OCT/22",
              thumbnailSrc: "https://rietberg.ch/files/ausstellungen/2022/Hingabe-Sehnsucht/_660x440_crop_center-center_none/key_2_2021.129_2000x1334px.jpg",
              detail: "Strong colours, clear geometrical forms, and patterns ranging from graceful to luxurious are the hallmarks of miniature paintings from the Indian region of Bundelkhand. Located south of the cities of Delhi and Agra, the princely courts of Orchha, Datia, and Panna produced exceptional masterpieces of Indian art that offer thorough insights into the practices and stylistic development of artists reacting to the region's cultural and political trends over the course of three hundred years until the 19th century. Eva and Konrad Seitz have now donated their Bundelkhand miniatures to the Rietberg Museum. The only museum outside India to be so endowed, the Rietberg Museum can now devote an exhibition to the remarkable story of this unique collection. In their choice of subjects, Bundelkhand artists focused largely on the classic themes of Indian art: they depicted events of sacred texts and passages of love poetry in regional languages. Their works peerlessly blended the Hindu ideal of devotion (bhakti) and aesthetic sensibility. Always uppermost in the minds of artists was Indian art theory's pre-eminent concept of rasa (taste, essence, flavour, juice) and the question of how to convey it to those viewing their paintings. Four series of images produced in the late 16th century mark the start of our story of painting in Bundelkhand. Artists initially proved receptive to the early influences of Mughal art. Political disputes with the Mughal ruler Shah Jahan prompted a return to the initial style, however. With the breakdown of authority in Orchha, artistic production diverged into two contrasting styles: based on early painting, an expressive and ornamental style involving imaginative eccentric compositions evolved in Orchha. By contrast, in Datia, where the political elite had sought exile, the influence of Mughal painting intensified, and artists increasingly portrayed scenes from Sanskrit poetry. This gave rise to the unique combination of Mughal-influenced figures and abstract backgrounds that is characteristic of the Bundelkhand style. For decades, it was assumed that these paintings were the work of itinerant artist families around Malwa (south-east of Rajasthan). In his two-volume study titled \u201COrchha, Datia, Panna: Miniaturen von den rajputischen H\xF6fen Bundelkhands 1580 \u2013 1820\u201D, and on the basis of his own extensive collection, Konrad Seitz in 2015 demonstrated not only that the so-called \u201CSchool of Malwa\u201D had its geographical source elsewhere \u2013 namely in the workshops of the courts of Bundelkhand \u2013 but also that it should be dated a generation or so earlier. Our exhibition sets out to illustrate how such art-historical attributions and categories arise and can change. For the occasion, Konrad Seitz\u2019s study is to be re-issued in a revised and expanded edition in English. The author\u2019s research and the Bundelkhand miniatures donated by him and his wife Eva will be presented to the public for the first time in this exhibition at the Rietberg Museum.",
              link: "https://rietberg.ch/en/exhibitions/passions-and-prayers",
              hall: "Museum Rietburg",
              category: "Museum",
              countryCode: "ch"
            }, {
              country: "Swiss",
              title: "Forever Jade Chinese Jade Miniatures from Four Millennia",
              date: "26/AUG/22 TO 22/JAN/23",
              thumbnailSrc: "https://rietberg.ch/files/ausstellungen/2022/Jade/_660x440_crop_center-center_none/collage3.jpg",
              detail: "Softly translucent with a matte lustre, silky smooth to the touch yet harder than steel, created by nature and crafted by the human hand \u2013 no other material was as beloved in China as jade. This fascinating stone \u2013 in China, jade primarily refers to nephrite \xAD\u2013 comes in subtle shades ranging from milky white to pink and green to almost black. Its hardness and toughness pose the greatest challenges to artisans. Only by grinding it with quartz sand can jade be brought into shape, and only through days of polishing does it reveal its magical lustre. All the more impressive is the fineness and richness of detail in Chinese jade objects. The exhibition invites visitors to discover jade miniatures from the museum's collection. The small sculptures, many only a few centimetres in size, only reveal their full charm upon closer inspection. The figurines are accompanied by large-format photographs by the Zurich photographer Felix Streuli. His images bring the objects to life, unveil their spirit, and reveal minute details. The magnificent pictures, themselves works of art, form a wonderful ensemble with the jade figures. Jade has been closely associated with power and status in China since earliest times. Emblems of rank made of jade were part of court etiquette as early as the 1st millennium BC. At the same time, the material itself was fascinating. No other stone was so robust and resistant, so hard and durable. Hence, jade was also ascribed a protective function. People wore jade amulets in this world and the beyond to ward off evil forces and keep demons at bay. From the 10th century onwards, archaic jades became popular collectibles. Among members of the learned upper class, it soon became fashionable to own a personal collection of antique pieces. New forms of jade objects also gained favour. In particular, objects for a literati's desk such as wrist rests, water containers used in painting and calligraphy, and animal figures as paperweights became popular. The allure of jade peaked in the 18th century. In their designs, artisans skilfully exploited the material\u2019s natural qualities such as changing hues or the presence of inclusions. Objects were crafted in the shape of animals and plants in all variations and combinations, with the carvers\u2019 imagination knowing no bounds, and their designs revealing breath-taking delicacy.",
              link: "https://rietberg.ch/en/exhibitions/fascinating-jade",
              hall: "Museum Rietburg",
              category: "Museum",
              countryCode: "ch"
            }, {
              country: "Swiss",
              title: "Pathways of Art How Objects Get to the Museum",
              date: "17/JUN/22 TO 25/JUN/23",
              thumbnailSrc: "https://rietberg.ch/files/ausstellungen/2022/Wege_der_Kunst/_660x440_crop_center-center_none/RJP-4017_web_neu.jpg",
              detail: "Since 1952, the Museum Rietberg has brought together unique art made by the world\u2019s very different cultures \u2013 but how did it get here? What routes did it take? What modifications in material and changes in meaning did it undergo on its travels? The exhibition Pathways of Art traces these routes and shows across some 20 stations who was involved in the trade and respective acquisitions and who owned the works before they entered the museum. Its focus, then, is on the question of provenance, that is, the objects\u2019 stories of origin, with emphasis on the 19th and 20th centuries. Closely linked with these object biographies comes a rich variety of encounters and connections between individuals, institutions, and even countries that the exhibition seeks to examine more closely. An important aspect concerns the mode in which works were presented, along with the issue of aestheticization and musealization. Central to this is the question of how an object comes to be seen as art. The exhibition additionally considers the different types of knowledge associated with a work of art: what type of understanding inscribes itself into a work, how is it transmitted, modified, and reconstructed? The exhibition considers all these and other aspects. With its critical examination of the origins of its collection, the Museum Rietberg seeks to contribute to a debate of public interest about the approach it takes to its collections and their historical background. The extensive and illustrated catalogue, published by Scheidegger & Spiess in English and German, in which twenty authors explore the museum's collections from different perspectives serves as a reader to the exhibition. Ed. Esther Tisa Francini, with the collaboration of Sarah Csernay, paperback, approx. 440 pages, 200 colour and 50 b/w illustrations, CHF 39, available on site and via shop.rietberg.ch",
              link: "https://rietberg.ch/en/exhibitions/pathways-of-art",
              hall: "Museum Rietburg",
              category: "Museum",
              countryCode: "ch"
            }, {
              country: "Swiss",
              title: "Being Jain Art and Culture of an Indian Religion",
              date: "18/NOV/22 TO 30/APR/23",
              thumbnailSrc: "https://rietberg.ch/files/ausstellungen/2022/Mein-Leben-unser-Karma/_1360x850_crop_center-center_none/RVI_1572_Detail.jpg",
              detail: "After almost 50 years, Jainism is set to return to the Rietberg Museum in an exhibition that offers a new take on the religion. On display from the museum\u2019s own collection and on loan from India will be lavishly illuminated manuscripts and imposing sculptures that reveal Jain ideas and ideals that evolved over many centuries. The exhibition also examines contemporary practices among this small, but economically influential religious community that is found around the world, yet is hardly known outside India. Furthermore, the exhibition will explore the contribution that the living tradition of Jainism with its long and varied history can make to resolve the fundamental challenges the world faces today: climate change, rampant consumerism, ethnic and religious intolerance, and social inequality. Combining masterpieces of Jain art and short films on Jain practices as well as discussions with Jains from all spheres of life \u2013 religious leaders and laypersons active in business, culture, and politics \u2013 this exhibition promises insights into the particular lifestyle fostered by Jainism. Visitors are encouraged to engage with new ideas, reflections, and discussions about what good, healthy, and sustainable living can look like. In collaboration with the Center for Religious Studies, Ruhr-University Bochum and Green Barbet Ltd., Bangalore Supported by the Parrotia Foundation, Arham Foundation, Swiss Re, Max Kohler Stiftung, Start Worldwide Group",
              link: "https://rietberg.ch/en/exhibitions/being-jain",
              hall: "Museum Rietburg",
              category: "Museum",
              countryCode: "ch"
            }, {
              country: "Swiss",
              title: "Splendid Sleighs",
              date: "22 July 2022 - 2 April 2023",
              thumbnailSrc: "https://www.landesmuseum.ch/landesmuseum/ausstellungen/wechselausstellungen/2022/prunkvolle-schlitten/image-thumb__11739__event_teaser/schlitten-vorschau@2x.jpg",
              detail: "In the 17th and 18th centuries, sleigh rides were mostly a treat enjoyed by wealthy families. Following the example of the royal courts of Europe, these privileged groups had themselves transported through the winter landscape in magnificent conveyances. Appearance was every bit as important as the outing itself, because these sleighs were one thing above all: a symbol of status. The contraptions were ornamented with heraldic animals, scenic views of various locations or family insignia, and were a lavish and colourful tribute to their owners. Representing an alternative world to the established order, the mythological figures and animals are spectacular. The National Museum holds a unique collection of magnificent sleighs, and for the first time these vehicles will be on display in this format in the Landesmuseum\u2019s Hall of Fame.",
              link: "https://www.landesmuseum.ch/en/exhibitions/temporary/2022/splendid-sleighs/splendid-sleighs",
              hall: "National Museum Zurich",
              category: "Museum",
              countryCode: "ch"
            }, {
              country: "Swiss",
              title: "Wheels, races, glory",
              date: "15 July - 16 October 2022",
              thumbnailSrc: "https://www.landesmuseum.ch/landesmuseum/ausstellungen/wechselausstellungen/2022/raeder-rennen-ruhm/image-thumb__11685__event_teaser/velo-vorschau@2x.jpg",
              detail: "Since its invention, the bicycle, known in Switzerland as the velo, has also been used in sport. Switzerland has achieved great things in the sport of cycling. The country has not only won numerous world titles and Olympic victories, but also devised other disciplines such as cycle ball. The exhibition journeys through various cycling disciplines: from road race time trials, to cross-country through mud and snow, and even the acrobatics of artistic cycling.",
              link: "https://www.landesmuseum.ch/en/exhibitions/temporary/2022/wheels-races-glory/wheels-races-glory",
              hall: "National Museum Zurich",
              category: "Museum",
              countryCode: "ch"
            }, {
              country: "Swiss",
              title: "Anne Frank and Switzerland",
              date: "9 June - 6 November 2022",
              thumbnailSrc: "https://www.landesmuseum.ch/landesmuseum/ausstellungen/wechselausstellungen/2022/anne-frank/image-thumb__11340__event_teaser/anne-frank-websitevorschau@2x.jpg",
              detail: "The diary of Anne Frank is world famous. It\u2019s less well known that the journey to global publication began in Switzerland. While Anne, her sister and her mother were killed in the concentration camp, Anne\u2019s father was the only family member to survive the Holocaust. Otto Frank moved to live with his sister in Basel in the 1950s. From there, he made it his task to share his daughter\u2019s diary with the world whilst preserving her message on humanity and tolerance for the coming generations. In collaboration with Anne Frank Fonds, Basel, and Familie Frank Zentrum im J\xFCdischen Museum Frankfurt",
              link: "https://www.landesmuseum.ch/en/exhibitions/temporary/2022/anne-frank/anne-frank",
              hall: "National Museum Zurich",
              category: "Museum",
              countryCode: "ch"
            }, {
              country: "Swiss",
              title: "History of Switzerland",
              date: "Permanent",
              thumbnailSrc: "https://www.landesmuseum.ch/landesmuseum/ausstellungen/dauerausstellungen/geschichte-schweiz/image-thumb__4379__event_teaser/geschichte-schweiz-visual-webseite-ausstellungen-veranstaltungen@2x.jpg",
              detail: "The 1,000-m2 Swiss history exhibition depicts how Switzerland came to be over a period of 550 years. The tour through the centuries begins in the late Middle Ages and ends with the challenges facing democratic institutions in the present. The exhibition illustrates the journey from a confederation of states to a federal state as a struggle for identity. In addition, it crosses a time boundary that is often considered taboo for historical museums: It dares to examine contemporary history.",
              link: "https://www.landesmuseum.ch/history-switzerland",
              hall: "National Museum Zurich",
              category: "Museum",
              countryCode: "ch"
            }, {
              country: "Swiss",
              title: "A magic carpet ride through history",
              date: "Permanent",
              thumbnailSrc: "https://www.landesmuseum.ch/landesmuseum/ausstellungen/dauerausstellungen/mit-fliegendem-teppich-durch-die-geschichte/image-thumb__4403__event_teaser/website_vorschau_4000x4000_familien@2x.jpg",
              detail: "Many children dream of travelling back in time. In the new family exhibition \u2018A Magic Carpet ride through history\u2019 at the National Museum Zurich, we make this dream come true! Spread over three separate spaces, visitors can explore the topics \u2018Orient\u2019, \u2018Seafaring\u2019 and \u2018Railways\u2019, with plenty of hands-on fun. In an Arabian palace, on the deck of a large sailing ship and in a vintage railway carriage, young Museum visitors can really get a feel for these momentous eras in global history. The exhibition combines learning with activities designed specially for children. The exquisitely designed backdrop provides space for imaginations to run free at the Museum, and the beautiful original objects are important witnesses to these epochs in the cultural history of our world. For families with children aged 4 and over.",
              link: "https://www.landesmuseum.ch/en/exhibitions/permanent/a-magic-carpet-ride-through-history/a-magic-carpet-ride-through-history",
              hall: "National Museum Zurich",
              category: "Museum",
              countryCode: "ch"
            }, {
              country: "Swiss",
              title: "The collection",
              date: "Permanent",
              thumbnailSrc: "https://www.landesmuseum.ch/landesmuseum/ausstellungen/dauerausstellungen/sammlungsausstellung/visuals/image-thumb__10064__event_teaser/website_vorschau_4000x4000_sammlung_en@2x.jpg",
              detail: "The exhibition showcases more than 7,000 exhibits from the Museum\u2019s own collection, highlighting Swiss artistry and craftsmanship over a period of about 1,000 years. The exhibition spaces themselves are important witnesses to contemporary history, and tie in with the objects displayed to create a historically dense atmosphere that allows visitors to immerse themselves deeply in the past.",
              link: "https://www.landesmuseum.ch/the-collection",
              hall: "National Museum Zurich",
              category: "Museum",
              countryCode: "ch"
            }, {
              country: "Swiss",
              title: "Baroque",
              date: "16 September 2022 - 15 January 2023",
              thumbnailSrc: "https://www.landesmuseum.ch/landesmuseum/ausstellungen/wechselausstellungen/2022/barock/image-thumb__11908__event_teaser/barock-website_vorschau@2x.jpg",
              detail: "Baroque is more than a matter of style. This cultural epoch, between 1580 and 1780, was a time of enormous contrasts: opulence and innovation on the one hand, death and crises on the other. Ongoing religious wars and the opening up of global trade networks resulted in power gains and cultural exchange, but there was also famine and exploitation. Switzerland played its part in all this radical change: Swiss architects designed major works throughout Europe, Swiss artists and scientists were part of international networks, clothing and interiors reflected the culture of the French court, and the worldwide circulation of products and knowledge had life-changing impacts. The exhibition presents beautiful objects from Baroque architecture, garden culture, fashion and art, focusing on the historical context of these items in order to illuminate this creative epoch in all its glorious ambiguity.",
              link: "https://www.landesmuseum.ch/en/exhibitions/temporary/2022/baroque/baroque",
              hall: "National Museum Zurich",
              category: "Museum",
              countryCode: "ch"
            }, {
              country: "Czech",
              title: "V\u0161echno jde, i kdy\u017E trochu jinak",
              date: "7. 6. 2022 \u2013 28. 3. 2023",
              thumbnailSrc: "https://www.tmbrno.cz/wp-content/uploads/2022/05/vsechno-jde-uvodni-01-462x234.jpg",
              detail: "FacebookTwitter V\u0161echno jde, i kdy\u017E trochu jinak Komorn\xED v\xFDstava \u201EV\u0161echno jde, i kdy\u017E trochu jinak\u201C p\u0159ibl\xED\u017E\xED od 7. 6. 2022 historii i sou\u010Dasnost Spole\u010Dnosti pro ranou p\xE9\u010Di, pobo\u010Dka Brno. Tato spole\u010Dnost, p\u016Fvodn\u011B pod n\xE1zvem Tyflopedick\xE1 poradna p\u0159i \u010Cesk\xE9 unii nevidom\xFDch a slabozrak\xFDch, si letos p\u0159ipom\xEDn\xE1 45. v\xFDro\u010D\xED sv\xE9ho zalo\u017Een\xED. Tak dlouho ji\u017E pom\xE1h\xE1 rodin\xE1m s d\u011Btmi se zrakov\xFDm a kombinovan\xFDm posti\u017Een\xEDm. S histori\xED spole\u010Dnosti n\xE1v\u0161t\u011Bvn\xEDky podrobn\u011B seznamuj\xED t\u0159i informa\u010Dn\xED panely i let\xE1k vydan\xFD k t\xE9to p\u0159\xEDle\u017Eitosti. Komorn\xED v\xFDstava prov\xE1z\xED n\xE1v\u0161t\u011Bvn\xEDky i v\xFDvojem pom\u016Fcek pro d\u011Bti se zrakov\xFDm posti\u017Een\xEDm. \u201EP\u0159ed t\u0159iceti lety speci\xE1ln\xED hra\u010Dky a pom\u016Fcky v zahrani\u010D\xED existovaly, ale nebyly dostupn\xE9 na na\u0161em trhu. Hledali jsme proto n\xE1hrady, vyr\xE1b\u011Bli vlastn\xED verze na m\xEDru a pracovali s t\xEDm, co bylo dostupn\xE9, a\u0165 u\u017E to byla star\xE1 vojensk\xE1 baterka, ru\u010Dn\u011B pleten\xFD ma\u0148\xE1sek \u010Di t\u0159\xE1sn\u011B z kazetov\xE9ho magnetofonu,\u201C p\u0159ibli\u017Euje pr\xE1ci tyflopedick\xFDch poradky\u0148 v po\u010D\xE1tc\xEDch p\xE9\u010De o d\u011Bti se zrakov\xFDm hendikepem Lucie \u0160pul\xE1kov\xE1. V\xFDstava ukazuje i pom\u016Fcky, kter\xE9 nest\xE1rnou a vyu\u017E\xEDvaly se d\u0159\xEDve i v sou\u010Dasnosti, a\u0165 u\u017E to jsou desky s kor\xE1lky, hmatov\xE9 kn\xED\u017Eky, m\xED\u010Dky s rolni\u010Dkou \u010Di bub\xEDnek. Mezi expon\xE1ty n\xE1v\u0161t\u011Bvn\xEDci naleznou pom\u016Fcky vyroben\xE9 na m\xEDru (spinery, tvary a obr\xE1zky na such\xFD zip \u010Di magnet, pexesa, pom\u016Fcky na grafomotoriku, IQ kostka, stimula\u010Dn\xED ka\u0161p\xE1rek), ale i testy pro vy\u0161et\u0159en\xED zraku (Hiding Heidy test \u010Di LEA Symbols Test a dal\u0161\xED). Z\xE1jemci o tuto problematiku se rovn\u011B\u017E sezn\xE1m\xED s pom\u016Fckami pro zrakovou stimulaci jako je matouc\xED plocha s drahokamy, sv\u011Bteln\xE1 deska s obr\xE1zky nebo kniha s nahlou\u010Den\xEDm. V\xFDstavu, kter\xE1 se nach\xE1z\xED v expozici Kultura nevidom\xFDch TMB, p\u0159ipravilo Odd\u011Blen\xED dokumentace slepeck\xE9 historie Technick\xE9ho muzea v Brn\u011B pod veden\xEDm Mgr. Eli\u0161ky Hlu\u0161\xED ve spolupr\xE1ci se Spole\u010Dnost\xED pro ranou p\xE9\u010Di, pobo\u010Dka Brno.",
              link: "https://www.tmbrno.cz/akce/vsechno-jde-i-kdyz-trochu-jinak/",
              hall: "Technical Museum in Brno",
              category: "Museum",
              countryCode: "cz"
            }, {
              country: "Czech",
              title: "Zlat\xE9 \u0159emeslo",
              date: "24. 5. 2022 \u2013 18. 9. 2022",
              thumbnailSrc: "https://www.tmbrno.cz/wp-content/uploads/2022/03/zlate_remeslo_uvodni-scaled-e1647510936176-462x234.jpg",
              detail: "Um\u011Blecko\u0159emesln\xE9 techniky zlatnictv\xED a p\u0159\xEDbuzn\xFDch kovozpracuj\xEDc\xEDch obor\u016F od minulosti do sou\u010Dasnosti p\u0159edstav\xED od 24. kv\u011Btna 2022 v Technick\xE9m muzeu v Brn\u011B (TMB) nov\xE1 v\xFDstava Zlat\xE9 \u0159emeslo. Vznikla v r\xE1mci v\xFDzkumn\xE9ho projektu specialist\u016F z Odd\u011Blen\xED dokumentace v\u011Bdy a techniky a Metodick\xE9ho centra konzervace TMB pod veden\xEDm Ing. Aleny Seluck\xE9, n\xE1m\u011Bstkyn\u011B \u0159editele, a ve spolupr\xE1ci s akad. soch. Andrejem \u0160umberou. Na v\xFDstav\u011B se pod\xEDlely partnersk\xE9 instituce, zejm\xE9na Um\u011Bleckopr\u016Fmyslov\xE9 museum v Praze, Moravsk\xE1 galerie v Brn\u011B, Moravsk\xE9 zemsk\xE9 muzeum a N\xE1rodn\xED pam\xE1tkov\xFD \xFAstav. Zlato, st\u0159\xEDbro a m\u011B\u010F se \u0159ad\xED mezi nejstar\u0161\xED kovy, kter\xE9 se \u010Dlov\u011Bk nau\u010Dil zpracov\xE1vat. Vyr\xE1b\u011Bl z nich p\u0159edm\u011Bty ur\u010Den\xE9 k ozdob\u011B t\u011Bla \u010Di od\u011Bvu, k vykon\xE1v\xE1n\xED magick\xFDch a n\xE1bo\u017Eensk\xFDch ritu\xE1l\u016F nebo k reprezentaci sv\xE9ho majitele. Pozn\xE1val jejich v\xFDjme\u010Dn\xE9 vlastnosti, n\xE1sledn\u011B i postupy z\xEDsk\xE1v\xE1n\xED dal\u0161\xEDch kov\u016F z rud a jejich vz\xE1jemn\xE9 sl\xE9v\xE1n\xED pro z\xEDsk\xE1n\xED slitin zcela nov\xFDch mo\u017Enost\xED. Kovy se staly z\xE1kladem technologick\xE9ho i kulturn\xEDho rozkv\u011Btu civilizac\xED a ovlivnily rozvoj nejr\u016Fzn\u011Bj\u0161\xEDch \u0159emesel a obor\u016F lidsk\xE9 \u010Dinnosti. Pr\xE1v\u011B zlatnictv\xED pat\u0159\xED mezi starov\u011Bk\xE1 \u0159emesla zalo\u017Een\xE1 na zru\u010Dnosti a tv\u016Fr\u010D\xED invenci \u0159emesln\xEDk\u016F p\u0159em\u011B\u0148uj\xEDc\xEDch beztvarou hmotu v unik\xE1tn\xED d\xEDlo pomoc\xED rozmanit\xFDch postup\u016F a \xFAkon\u016F, ale i n\xE1stroj\u016F \u010Di n\xE1\u0159ad\xED, kter\xE9 se mnohdy pou\u017E\xEDvaj\xED dodnes. Zlatnick\xFDmi technikami v \u0161ir\u0161\xEDch souvislostech se v posledn\xEDch letech intenzivn\u011B zab\xFDvaj\xED odborn\xEDci v Technick\xE9m muzeu v Brn\u011B. Jejich z\xE1m\u011Brem je vyzdvihnout do pop\u0159ed\xED v\xFDznam um\u011Blecko\u0159emesln\xE9 praxe vyu\u017E\xEDvaj\xEDc\xED manu\xE1ln\xED obratnosti, znalosti tradi\u010Dn\xEDch materi\xE1l\u016F a technik, kter\xE9 jsou p\u0159ed\xE1v\xE1ny nap\u0159\xED\u010D generacemi. Idea, \u017Ee tajemstv\xED zlat\xFDch poklad\u016F spo\u010D\xEDv\xE1 ve znalosti a um\u011Bn\xED jejich tvorby, je mottem vepsan\xFDm do cel\xE9ho konceptu v\xFDstavy. \u201ENa\u0161\xED snahou je zachytit p\u0159ekotn\u011B mizej\xEDc\xED podstatu um\u011Blecko\u0159emesln\xFDch postup\u016F a uchovat ji pro budouc\xED generace\u201D, \u0159\xEDk\xE1 \xFAvodem Alena Seluck\xE1, spoluautorka v\xFDstavy. Jej\xED t\xFDm konzerv\xE1tor\u016F a restaur\xE1tor\u016F pe\u010Duje o to, aby se d\xEDla na\u0161ich p\u0159edk\u016F co nejd\xE9le zachovala a nepodl\xE9hala zubu \u010Dasu. K tomu je pot\u0159eba znalosti p\u016Fvodn\xEDch historick\xFDch technik, kter\xE9 mus\xED b\xFDt b\u011Bhem restaurov\xE1n\xED spr\xE1vn\u011B pops\xE1ny a ve\u0161ker\xE9 z\xE1sahy mus\xED b\xFDt s nimi kompatibiln\xED. S v\xFDrobn\xEDmi a v\xFDzdobn\xFDmi technikami sezn\xE1m\xEDme n\xE1v\u0161t\u011Bvn\xEDky v\xFDstavy formou videoz\xE1znam\u016F (lit\xED, tep\xE1n\xED a cizelov\xE1n\xED, fasov\xE1n\xED drah\xFDch kamen\u016F, r\u016Fzn\xE9 zdobn\xE9 techniky tauzov\xE1n\xED), ale i \u0161irok\xE9ho spektra n\xE1\u0159ad\xED, pom\u016Fcek i stroj\u016F, kovov\xFDch materi\xE1l\u016F a samotn\xFDch replik historick\xFDch artefakt\u016F. Do prost\u0159ed\xED historick\xE9 zlatnick\xE9 d\xEDlny se p\u0159eneseme d\xEDky autentick\xE9mu mobili\xE1\u0159i a vybaven\xED, kter\xE9 Technick\xE9 muzeum v Brn\u011B z\xEDskalo do sv\xFDch sb\xEDrek od v\xFDznamn\xE9ho brn\u011Bnsk\xE9ho zlatnick\xE9ho mistra Ji\u0159\xEDho Drl\xEDka. Ten st\xE1l u zrodu um\u011Bleck\xE9ho \u0161perka\u0159stv\xED v \u010Ceskoslovensku od prvn\xED poloviny 60. let a v\xFDrazn\u011B ovlivnil jeho podobu. D\xEDla Ji\u0159\xEDho Drl\xEDka jsou zastoupena v \u010Desk\xFDch i sv\u011Btov\xFDch muzejn\xEDch sb\xEDrk\xE1ch. V\xFDstava Zlat\xE9 \u0159emeslo prezentuje Drl\xEDkovu zlatnickou pr\xE1ci prost\u0159ednictv\xEDm \u0161perk\u016F zap\u016Fj\u010Den\xFDch z Moravsk\xE9 galerie v Brn\u011B. Rozmanitost zlatnick\xE9 produkce a jej\xED prom\u011Bny za posledn\xEDch v\xEDce ne\u017E dva tis\xEDce let mohou n\xE1v\u0161t\u011Bvn\xEDci obdivovat na cel\xE9 \u0159ad\u011B jedine\u010Dn\xFDch p\u0159edm\u011Bt\u016F zap\u016Fj\u010Den\xFDch z fond\u016F pra\u017Esk\xE9ho Um\u011Bleckopr\u016Fmyslov\xE9ho musea, Moravsk\xE9 galerie a Moravsk\xE9ho zemsk\xE9ho muzea, jakou jsou nap\u0159\xEDklad filigr\xE1nem a granulac\xED zdoben\xE9 zlat\xE9 \u0161perky z doby Velk\xE9 Moravy, unik\xE1ty z Karl\u0161tejnsk\xE9ho pokladu, zlat\xE1 bohat\u011B zdoben\xE1 v\xFDbava z hrobov\xE9ho n\xE1lezu germ\xE1nsk\xE9ho velmo\u017Ee z lokality C\xE9zavy-Blu\u010Dina \u010Di p\u0159enosn\xFD relikvi\xE1\u0159ov\xFD olt\xE1\u0159\xEDk z karlovsk\xE9ho obdob\xED. V\xFDstava zahrnuje \u0161irok\xE9 spektrum zlatnick\xE9 pr\xE1ce: ozdoby t\u011Bla a od\u011Bvu, luxusn\xED p\u0159edm\u011Bty osobn\xED pot\u0159eby jako neces\xE9ry, hodinky i rozm\u011Brn\u011Bj\u0161\xED d\xEDla pro reprezentativn\xED \xFA\u010Dely. Sv\xE9 m\xEDsto zde maj\xED i \u0161perky pova\u017Eovan\xE9 za typicky \u201E\u010Desk\xE9\u201C, tedy s \u010Desk\xFDm gran\xE1tem, vltav\xEDny a perli\u010Dkami z \u010Desk\xFDch \u0159ek, ale i d\xEDla z litiny nebo modern\xEDch materi\xE1l\u016F. Pro \u0161koly v\u0161ech typ\u016F v\u010Detn\u011B odborn\xFDch \u010Di specializovan\xFDch na oblast kulturn\xEDho d\u011Bdictv\xED, konzervov\xE1n\xED a restaurov\xE1n\xED jsou p\u0159ipraveny komentovan\xE9 prohl\xEDdky a programy navazuj\xEDc\xED na expozice Uli\u010Dka \u0159emesel a Kultura nevidom\xFDch v TMB. Mimo \u0161koln\xED programy si mohou d\xEDky aktivit\xE1m v interaktivn\xEDm koutku mal\xED i velc\xED n\xE1v\u0161t\u011Bvn\xEDci p\u0159\xEDmo ve v\xFDstav\u011B kdykoliv vyzkou\u0161et, jak si navrhnout a vyrobit jednoduch\xFD \u0161perk. Nevidom\xED n\xE1v\u0161t\u011Bvn\xEDci prozkoumaj\xED relikvi\xE1\u0159 sv. Maura prost\u0159ednictv\xEDm interaktivn\xEDho haptick\xE9ho modelu v m\u011B\u0159\xEDtku 1 : 1 zap\u016Fj\u010Den\xE9ho z be\u010Dovsk\xE9ho eduka\u010Dn\xEDho pracovi\u0161t\u011B. Sezn\xE1m\xED se hmatem nejen s detaily povrchu relikvi\xE1\u0159e, ale tak\xE9 zjist\xED, jak\xE9 relikvie se skr\xFDvaj\xED v jeho \xFAtrob\xE1ch, stejn\u011B jako tomu je u jeho origin\xE1lu. V\xFDstavu Zlat\xE9 \u0159emeslo nab\xEDdne Technick\xE9 muzeum v Brn\u011B do 18. z\xE1\u0159\xED 2022. V\xFDstava Zlat\xE9 \u0159emeslo je v\xFDstupem v\xFDzkumn\xE9ho projektu Technick\xE9ho muzea v Brn\u011B \u201EUm\u011Blecko\u0159emesln\xE9 techniky zlatnictv\xED \u2013 identifikace, ochrana a zp\u0159\xEDstupn\u011Bn\xED\u201C podpo\u0159en\xE9ho z programu Ministerstva kultury \u010CR NAKI II (id. k\xF3d DG20P02OVV023).",
              link: "https://www.tmbrno.cz/akce/zlate-remeslo/",
              hall: "Technical Museum in Brno",
              category: "Museum",
              countryCode: "cz"
            }, {
              country: "Czech",
              title: "Stroje Leonarda da Vinci",
              date: "8. 3. \u2013 31. 12. 2022",
              thumbnailSrc: "https://www.tmbrno.cz/wp-content/uploads/2022/01/DaVinci_uvodni_01-462x234.jpg",
              detail: "Leonardo da Vinci se ve sv\xE9m \u017Eivot\u011B v\u011Bnoval um\u011Bn\xED, v\u011Bd\u011B i technice. Nebylo v\xFDjimkou, \u017Ee jedno podmi\u0148ovalo druh\xE9. V\xFDstava v Technick\xE9m muzeu v Brn\u011B se zam\u011B\u0159uje zejm\xE9na na jeho technick\xE9 vyn\xE1lezy. Je zn\xE1mo nap\u0159\xEDklad to, \u017Ee Leonardo na z\xE1klad\u011B pozorov\xE1n\xED pt\xE1k\u016F vytvo\u0159il jejich podrobn\xE9 studie a podle nich pak navrhl pl\xE1ny na sestrojen\xED l\xE9taj\xEDc\xEDch stroj\u016F. Jeho den\xEDky obsahuj\xED takt\xE9\u017E vyn\xE1lezy vojensk\xE9ho charakteru, p\u0159edm\u011Bty denn\xED pot\u0159eby (kalkula\u010Dka, vrta\u010Dka) a mnoho dal\u0161\xEDho. V\xFDstava s n\xE1zvem Stroje Leonarda da Vinci nab\xEDz\xED v\xFDb\u011Br v\xEDce ne\u017E pades\xE1ti model\u016F da Vinciho stroj\u016F, kter\xE9 vytvo\u0159ili ital\u0161t\xED \u0159emesln\xEDci p\u0159esn\u011B podle jeho pl\xE1n\u016F a n\xE1vrh\u016F. Funk\u010Dnost n\u011Bkter\xFDch z nich si mohou n\xE1v\u0161t\u011Bvn\xEDci vyzkou\u0161et (nap\u0159. zved\xE1k, kuli\u010Dkov\xE9 lo\u017Eisko, setrva\u010Dn\xEDk, zrcadlov\xE1 komora), ostatn\xED stroje si z\xE1jemci mohou zbl\xEDzka prohl\xE9dnout. Sem pat\u0159\xED t\u0159eba oto\u010Dn\xFD je\u0159\xE1b, parn\xED d\u011Blo, samohybn\xFD voz\xEDk (automobil). Krom\u011B uveden\xFDch model\u016F v\xFDstava nab\xEDz\xED i reprodukce slavn\xFDch da Vinciho obraz\u016F, jako je Mona Lisa, Posledn\xED ve\u010De\u0159e, D\xE1ma s hranostajem a dal\u0161\xED. To v\u0161e dopln\xED informa\u010Dn\xED panely a audiovizu\xE1ln\xED projekce. K v\xFDstav\u011B je p\u0159ipravena i online interaktivn\xED hra, kter\xE1 je p\u0159\xEDstupn\xE1 \u0161irok\xE9 ve\u0159ejnosti a nab\xEDz\xED cestu za pozn\xE1n\xEDm mnoha rozmanit\xFDch profes\xED a tv\xE1\u0159\xED mistra Leonarda da Vinci. Hru spust\xEDte p\u0159\xEDmo ve v\xFDstav\u011B, kde si na\u010Dtete do mobilu ozna\u010Den\xFD QR k\xF3d. Hra je zdarma, hesla ani registrace nejsou pot\u0159eba. V\xFDstavu po\u0159\xE1d\xE1 Technick\xE9 muzeum v Brn\u011B ve spolupr\xE1ci s produk\u010Dn\xED spole\u010Dnost\xED ARANEUS. Foto z v\xFDstavy, \xA9Technick\xE9 muzeum v Brn\u011B",
              link: "https://www.tmbrno.cz/akce/stroje-leonarda-da-vinci/",
              hall: "Technical Museum in Brno",
              category: "Museum",
              countryCode: "cz"
            }, {
              country: "Czech",
              title: "The Driver Education System",
              date: "8. 4. 2022 \u2013 30. 9. 2022",
              thumbnailSrc: "https://www.nm.cz/en/file/be8ab060225d3850b3713e44f9b9b64c/33304/hpbox/05_Auto%C5%A1kola%20uprav.jpg",
              detail: "When the first teaching materials and instructional films for teaching in driving schools began to appear in the early 1960s, they often did not reach the teachers, but remained locked away in closets. Ji\u0159\xED Pour, an employee of the then Driving School Directorate, tried to change this unfortunate trend. He initiated the \u201CNational Parades of Teaching Materials\u201D, the first of which took place in 1964 in Vy\u0161kov. A total of three parades took place. Since then, that is, during the last almost 60 years, only five similar exhibitions have taken place, mostly on a local level, under the care of regional museums. The exhibition at the National Memorial in V\xEDtkov describes the history and development of the Czechoslovak driver education system, not only in the field of teaching aids, but also in the method of drivers\u2019 training, methods, international cooperation, testing. It offers a look into the whole spectrum of this field, often from perspectives hidden from the average driver. In addition, the exhibition is dedicated to the life and work of the aforementioned Ji\u0159\xED Pour, who was undoubtedly one of the greatest figures of the Czechoslovak driver education system and who passed away at a ripe age only recently. Many of the exhibits were his property. The aim of the authors of the exhibition is to bring the experience to both the general public, coming from a general interest in motoring, and driving instructors with professional interest. And then to bring a little nostalgia to everybody. The central installation of the entire exhibition is a \u201Cdriving school room\u201D with three simulators, which will be available to visitors as part of guided tours. It is also possible to see instructional models of engines, driving school textbooks and driving licences from the entire 20th century here.",
              link: "https://www.nm.cz/en/historical-museum/the-driver-education-system",
              hall: "Czech National Museum",
              category: "Museum",
              countryCode: "cz"
            }, {
              country: "Czech",
              title: "V\u011Bra \u010C\xE1slavsk\xE1",
              date: "6. 5. 2022 \u2013 30. 9. 2022",
              thumbnailSrc: "https://www.nm.cz/en/file/033d0074b73be07d460efad77c40c4bb/33253/hpbox/V%C4%9Bra%20%2816%29.jpg",
              detail: "On the occasion of the day one of our greatest sports legends, V\u011Bra \u010C\xE1slavsk\xE1, would have been 80 years old, the National Museum has prepared an exhibition that will you to her life and sporting career. In addition to unique photographs, you will have the opportunity to see for the first time the most complete collection of her medals and awards, both the Olympic ones from Tokyo and Mexico, as well as a number of those from World and European Championships or national championships, and also many other awards she received during her lifetime, including the Japanese Order of the Rising Sun. You will also be able to see many other personal items, such as her wedding dress or the national team uniform from the Olympic Games in Mexico, or a censored edition of the book Cesta na Olymp with the author\u2019s handwritten postscript. Most of the exhibits on display come from the estate of V\u011Bra \u010C\xE1slavsk\xE1 and V\u011Bra \u010C\xE1slavsk\xE1 Foundation. The photographs were borrowed from private collections and from the Czech Olympic Committee, which keeps a collection of photographs by photographer Karel Nov\xE1k. The International Olympic Committee also lent film footage and several photographs.",
              link: "https://www.nm.cz/en/program/exhibitions/vera-caslavska",
              hall: "Czech National Museum",
              category: "Museum",
              countryCode: "cz"
            }, {
              country: "Czech",
              title: "When the Stars Shine",
              date: "13. 12. 2021 \u2013 30. 9. 2022",
              thumbnailSrc: "https://www.nm.cz/en/file/d734a5f5885ceb5af2d484ad2051860d/30808/hpbox/Kdy%C5%BE%20hv%C4%9Bzdy%20z%C3%A1%C5%99%C3%AD%2011.jpg",
              detail: "The exhibition When the Stars Shine commemorates well-known and famous, but also almost forgotten stars of Czech theatre of the last two centuries. Through the best and most interesting items from the collections of the History of Theatre department of the National Museum, the exhibition shows the vicissitudes of the position of theatre creators in society over the course of more than two hundred years. The exhibition thus offers the opportunity to see objects from the personal estates of great actors (e.g. Ema Destinnov\xE1, Hana Kvapilov\xE1, Jind\u0159ich Mo\u0161na, Old\u0159ich Nov\xFD, Adina Mandlov\xE1, Svatopluk Bene\u0161, Karel H\xF6ger, Vlasta Chramostov\xE1, Radovan Lukavsk\xFD and many others). On display are their jewellery, clothes and fashion accessories, personal and studio photographs, paintings and busts, small artefacts from everyday and artistic life, and remarkable documents. In particular, you can see, for example, Emma Destinnov\xE1's jewellery, Old\u0159ich Nov\xFD's office, Adina Mandlov\xE1's dresses, furniture from Vlasta Chramostov\xE1\u2019s living room theatre or Cinderella's magical dress and shoe from the fairy tale Three Gifts for Cinderella. You can also take a look at the Thalia Award given to Josef Abrh\xE1m in 2020 or the Czech Lion awarded to Ivan Trojan in the same year. The specific life and artistic stories of several dozen prominent personalities of the Czech Thalia offer a reflection on how great actors influence the life, fashion or aesthetic ideals of their time, what it meant to be famous and respected by the society in different times, and what creative and personal conflicts shaped their life paths. At the same time, the authors of the exhibition do not shy away from controversial topics, such as what the Czech saying that success is unforgivable often means in real life, how power and politics influenced the actors' life and work, and what creative and personal dramas many actors experienced. The exhibition also shows the lesser-known or even unknown facts about how these personalities lived their private lives or what they did outside their profession. The exhibition presents the fates of the stars of the Czech Thalia against the backdrop of their times, pays homage to the art of acting in all its forms and variants, genres and art forms, and above all wants to remind us that all these actors were still just human.",
              link: "https://www.nm.cz/en/program/exhibitions/when-the-stars-shine",
              hall: "Czech National Museum",
              category: "Museum",
              countryCode: "cz"
            }, {
              country: "Czech",
              title: "Faces of War",
              date: "11. 5. 2021 \u2013 31. 10. 2022",
              thumbnailSrc: "https://www.nm.cz/en/file/a4034f7efcbd3f78740fdafb303d0119/26617/hpbox/Podoby%20v%C3%A1lky%202_zmensene.jpg",
              detail: "What did the war mean for its participants and for those affected indirectly? The exhibition \u201CFaces of War\u201D explains how people from different parts of the world legitimised their participation in wars and war related activities with religious ideology and how they clarified their relationship with Gods and other people through battle and bloodshed, how leaders and monarchs secured their positions using the archetype of a warrior. It also draws attention to the economic aspect of war campaigns. The exhibition dedicates a large space to fighting and its \u201Ctools\u201D: weapons and armours. It shows how weapons adapted to the specific natural environment as well as to the techniques and tactics of combat. It also presents weapons that are literally works of art, as well as artistic representations of war. Art is not about cruelty and suffering, it mainly celebrates magnificence, strength and martial arts. The last part of the exhibition is focused on the persistent desire of human societies for peace, the efforts to break free from the cycle of violence, attacks and retaliation. The exhibition features a number of unique objects. There is also a collection of tin soldiers borrowed from the funds of the Army Museum, which demonstrates how the clash of European civilisation and \u201Cprimitive\u201D war practices fascinated our ancestors \u2013 and their children \u2013 at the beginning of the 20th century. It also emphasises the fact that a preparation for war remains an important part of children\u2019s games in modern society. Among the most beautiful and most conspicuous exhibited objects is the mask of the Mongolian God of war, which combines the charm of artistic craftsmanship and the reflection of the cruelty of conflicts, pointing out the importance of war in religious ceremonies and its impact on everyday life. A six-part Japanese screen from the 17th century shows scenes from the riots of H\u014Dgen, which took place in 1156 in Kyoto as an attempt to change the order of succession to the imperial throne. The screen shows the liberation of the rebel-controlled imperial palace, the breakthrough of a poorly guarded gate and the panicked escape of the rebellion leaders. Headbands, tomahawks and peace pipes (calumets) of the North American Dakotas come from the collections of Vojta N\xE1prstek, i.e. from the museum's oldest collections. EDUCATIONAL PROGRAMMES FOR SCHOOLS War. Glorified and hated Target group: Lectured programme to the Faces of War exhibition for Primary schools War: Yesterday, Today and Tomorrow Target group: Lectured programme to the Faces of War exhibition for Secondary schools",
              link: "https://www.nm.cz/en/program/exhibitions/faces-of-war",
              hall: "Czech National Museum",
              category: "Museum",
              countryCode: "cz"
            }, {
              country: "Czech",
              title: "Around the World in 80 Days",
              date: "22. 4. 2022 \u2013 31. 12. 2022",
              thumbnailSrc: "https://www.nm.cz/en/file/8fc1e95ec96c8f4f620e51616f2d33f2/33283/hpbox/Cesta%20kolem%20sv%C4%9Bta%20%2816%29.jpg",
              detail: "The exhibition Around the World in 80 Days revisits the work of the French writer Jules Verne (1828\u20131905). Jules Verne has been well known in the Czech cultural environment since the 19th century and his books are popular and published to this day. Although Jules Verne is regarded as one of the founders of the science fiction genre, novels with this theme form only part of his extensive oeuvre. In his time, he became famous mainly for his social novels. The 1873 novel Around the World in 80 Days, which also provided the name to the entire exhibition, is not a science fiction novel, either. Its main motif is the foolish wager of an English gentleman, invented as if in passing while debating over a newspaper in a London club. In the subsequent journey around the world, which must be accomplished in a specific time, technology, although historical, plays a key role. The visitor of the exhibition follows the fictional characters of Verne\u2019s novel on their journey around the world and, through collection objects, photographic and graphic reproductions, infographics and texts, learns about the real places where the novel takes place, in a historical context. The opening section presents the society of the end of the 19th century in terms of geopolitical situation and technical development, which enabled the rapid development of international transport. This is followed by individual \u201Cstops\u201D around the world \u2013 Egypt, India, Singapore, China, Japan and the United States. Each region is represented by typical traditional objects in contrast with the changes brought by modern times and the phenomena that have influenced the world since the 19th century: the development of railways and shipping, the importance of the Suez Canal, colonialism and the changing relationship with indigenous ethnic groups. A separate part of the exhibition is dedicated to the character of the writer Jules Verne and his work. There are also examples of French and Czech editions of Verne\u2019s novels, including the oldest ones. The exhibition also presents some art inspired by Jules Verne's work, whether in the form of artistic sculptures by Jaroslav R\xF3na or paper models by Ladislav Badalec. The exhibition also includes an escape room based on Verne\u2019s novel.",
              link: "https://www.nm.cz/en/naprstek-museum/around-the-world-in-80-days",
              hall: "Czech National Museum",
              category: "Museum",
              countryCode: "cz"
            }, {
              country: "Czech",
              title: "Famous Czech Composers",
              date: "3. 11. 2020 \u2013 31. 12. 2022",
              thumbnailSrc: "https://www.nm.cz/en/file/4a305d2ade0831d73ca7c1b6b25d6e22/24108/hpbox/192002_SS_Web_680x460_orez.jpg",
              detail: "Step into the light room and enter the music of the four big names. Thanks to the unique synergy of light and music, you will feel even the smallest sound details of Smetana\u2019s Vltava, Dvo\u0159\xE1k\u2019s Symphony No. 9 \u201CFrom the New World\u201D, Jan\xE1\u010Dek\u2019s Sinfonietta and Bohuslav Martin\u016F\u2019s Double Concerto for Two String Orchestras, Piano and Timpani. The unique stories of the four composers will be brought to you in an attractive large-format novella in pictures, which will allow you to experience the most important moments of the artists\u2019 lives together with them. The original exhibits presented at the exhibition have been selected with utmost care. They include personal items that the composers wore and touched, but also objects of rare value, such as awards for their music. Some of them are on display for the very first time. Among the real gems of incalculable value are the authors\u2019 manuscripts of four remarkable pieces. The road takes you through the acoustic landscape of the four composers. You will dive into an intimate mosaic of exceptional as well as everyday motifs and a\u202Fdiverse selection of composition. Listening to them will allow you to better understand the environment in which the composers lived, the inspirations and experiences that had a\u202Fmajor impact on their thinking and creative process. We will also show you various approaches to the staging of four famous operas: Smetana\u2019s The Bartered Bride, Dvo\u0159\xE1k\u2019s Rusalka, Jan\xE1\u010Dek\u2019s The Cunning Little Vixen and Martin\u016F\u2019s Juliette. You will also see original costumes from productions of these operas. The walk through the world of music will end in the light room where it all started and where you will have a\u202Fchance to revisit the unique beauty of the music authored by these extraordinary composers with the newly acquired knowledge.",
              link: "https://www.nm.cz/en/program/exhibitions/famous-czech-composers",
              hall: "Czech National Museum",
              category: "Museum",
              countryCode: "cz"
            }, {
              country: "Czech",
              title: "Flower Union",
              date: "12/7 2022\u20141/1 2023",
              thumbnailSrc: "https://ngp-prod.brainz.cz/images/2022/06/20/ba563072b22a2aaa038fef786fa4033b778b4089.jpeg?w=600&fm=webp&q=71",
              detail: "\u201CThe people of Europe can convert their vision into reality only if they feel linked and motivated by what I would call a European consciousness. A profound awareness that they are all Europeans together. A deep feeling of unity, albeit unity in diversity. A profound awareness of their thousand-year-old common history and spiritual tradition. Europe is made up mainly of small nations, whose history is mutually linked by thousands of threads which together form the finished fabric.\u201D V\xE1clav Havel, acceptance speech after receiving the Erasmus Prize, March 1986 As a part of this year\u2019s Czech Presidency of the Council of the European Union, nine young Czech artists and designers created decorations for two buildings in Brussels. These artists decided to use their work to express the values that the European Union embodies for them and which they believe it should continue to embody in the future. They also tried to highlight the idea of Europeanism rather than to simply present the Czech Republic as one of the member states. Their collective project, as well as their individual endeavours, are linked by the concept of a community of plants sharing a single piece of soil, thus also stressing the environmental agenda, which will reverberate strongly during the Czech Presidency.",
              link: "https://www.ngprague.cz/en/event/3394/The-Flower-Union",
              hall: "National Gallery Prague",
              category: "Museum",
              countryCode: "cz"
            }, {
              country: "Czech",
              title: "Old Masters II",
              date: "Permanent",
              thumbnailSrc: "https://ngp-prod.brainz.cz/images/2021/12/02/4c3017a3fe6e300652312c7d69c3a0cad062145b.jpg?w=600&fm=webp&q=71",
              detail: "The Old Masters II exhibition a follow-up to the Old Masters permanent exhibition located in the opposite Schwarzenberg palace. Both exhibitions complement each other to form a coherent whole, while presenting magnificent artwork in different contexts. The new exhibition in the Sternberg palace follows the historical tradition of exhibiting masterpieces in this building, which was used in 1811\u2060\u2013\u20601871 as a seat of the Society of Patriotic Friends of the Arts, the predecessor of today\u2019s National Gallery Prague. This time, artwork will be exhibited in the context of centres of art and their mutual connections. Old Masters II represent the best of the unique collections of NGP and its partners \u2060\u2013\u2060 e.g. a rare collection of Russian Christian icons preserved in Prague, presenting an extraordinary personality of their collector, Nikodim P. Kondakov. The exhibition also shows a unique collection of Italian paintings of the 14th and 15th centuries gathered mostly by Archduke Franz Ferdinand of Austria. It is the largest collection of the co-called Italian primitive school preserved outside of Italy and it explores artistic creations in Italian cities of Siena, Florence, Venice or Padua. The collection of early Italian art is complemented by Renaissance and Baroque paintings (Alessandro Allori, Jacopo Bassano, Luca Giordano). There are also extraordinary collections of Dutch and Flemish painting of the 15th to 18th centuries with the main focus on the art of Antwerp, Amsterdam, Utrecht and Leyden (Herri met de Bles, Pieter II. Brueghel, Peter Paul Rubens, Anthony van Dyck, Rachel Ruysch, Gerard Ter Borch, Nicolaes Eliasz. Pickenoy). The altar with The Crucifixion by Hans Raphon is a rare piece. It is the only fully preserved retable of the Passion of the Christ in public collections in the Czech Republic. Central European works of art are represented by the collection of Nuremberg art and selected solitary works from the territory of today\u2019s Germany, in particular from the important trading and artistic region of Rhineland dating back to the 15th to 18th centuries (Hans Baldung Grien, Hans D\xFCrer). The exhibition also displays works of art of German and Austrian lands created in the 17th and 18th centuries (Georg Flegel, Paul Troger, Johann Carl Loth, Johann Michael Rottmayr). A smaller collection of French and Spanish art of the 17th and 18th centuries is remarkable for the significance and quality of exhibited solitary pieces (Charles Mellin, Pierre Mignard, Bartolom\xE9 Esteban Murillo). Curators: Martina Jandlov\xE1 So\u0161kov\xE1, Olga Kotkov\xE1, Lucie N\u011Bme\u010Dkov\xE1",
              link: "https://www.ngprague.cz/en/event/408/old-masters-ii",
              hall: "National Gallery Prague",
              category: "Museum",
              countryCode: "cz"
            }, {
              country: "Czech",
              title: "Old Masters",
              date: "Permanent",
              thumbnailSrc: "https://ngp-prod.brainz.cz/images/2020/05/26/61e7e3ea87ef648e69f703b83942c10596e28cf1.jpg?w=600&fm=webp&q=71",
              detail: "The permanent exhibition Old Masters in the Schwarzenberg Palace presents selected key artworks from the Collection of Old Masters (Hans von Aachen, Petr Brandl, Matthias Bernard Braun, Lucas Cranach, Adriaen de Vries, Albrecht D\xFCrer, El Greco, Francisco Jos\xE9 Goya, Hans Holbein, Jan Gossaert, also known as Jan Mabuse, Rembrandt van Rijn, Jusepe de Ribera, Peter Paul Rubens, Bartholomaeus Spranger, Karel \u0160kr\xE9ta, Simon Vouet, Michael Leopold Willmann and others). The display concentrates on the period between the 16th and 18th centuries and the pre-Renaissance tendencies in Gothic and Antiquity art as inspirational stimuli for Renaissance and Baroque art. The exhibition is conceived as a dialogue of the national and international impulses, influences and changes in the spirit of the dialectic of forms, styles and motifs. In dramaturgical terms, the display reflects the narrative aspects of European art from the Antiquity to the Enlightenment, as well as the historical context and timelessness of the masterpieces in an innovative installation. The original entrance to the Schwarzenberg Palace from Hrad\u010Dansk\xE9 Square via the courtyard is restored. Three rooms on the ground floor are reserved for occasional exhibitions of artefacts from the National Gallery\u2019s collections and two will serve for the Graphic Cabinets. Author and Curator: Marius Winzeler Collaborators: Tom\xE1\u0161 Hlad\xEDk, Martina Jandlov\xE1 So\u0161kov\xE1, Olga Kotkov\xE1, Lucie N\u011Bme\u010Dkov\xE1, Andrea Steckerov\xE1, Marcela Vondr\xE1\u010Dkov\xE1 Architects: AP Atelier \u2060\u2013\u2060 Josef Pleskot, Norbert Schmidt, Eva Vop\xE1tkov\xE1 Graphic Designers: Studio Najbrt \u2060\u2013\u2060 Zuzana Lednick\xE1, Jakub Spurn\xFD The permanent exhibition Old Masters is held under the auspices of the Minister of Culture Lubom\xEDr Zaor\xE1lek.",
              link: "https://www.ngprague.cz/en/event/407/old-masters",
              hall: "National Gallery Prague",
              category: "Museum",
              countryCode: "cz"
            }, {
              country: "Czech",
              title: "1918\u2060\u2013\u20601938: First Czechoslovak Republic",
              date: "Permanent",
              thumbnailSrc: "https://ngp-prod.brainz.cz/images/2022/03/16/5e02eb6e5f0887dc1b20a7a7836a2eb876458023.jpeg?w=600&fm=webp&q=71",
              detail: "The permanent exhibition on the third floor of the Trade Fair Palace was created on the occasion of the hundredth anniversary of the founding of Czechoslovakia. Based on the collections of the National Gallery Prague, complemented with loans from institutions and private collections, the exhibition introduces the rich and cosmopolitan art scene in the young independent Czechoslovakia between 1918 and 1938. The new exhibition of the National Gallery\u2019s collections presents rich artistic activities of the young state in 1918\u2060\u2013\u20601938. Besides the paintings by prominent Czech, Slovak, Czech-German and Carpathian-Russian artists (V\xE1clav \u0160p\xE1la, Josef \u010Capek, Jind\u0159ich \u0160tyrsk\xFD, Toyen etc.), are also shown the artworks from the National Gallery\u2019s French collection (by Claude Monet, Paul Gauguin, Henri Rousseau, Pablo Picasso, Vincent van Gogh and others). The exhibition is interdisciplinary, presenting not only visual artworks but also other cultural forms that flourished during the first republic, such as book illustrations, design, graphic design, etc. Using art topography, it shows the diversity of the art production and the lively cultural scene of the period. The exhibition presents the art of the first republic through the eyes of a 1920s and 1930s art goer and introduces prominent galleries, art clubs and institutions, as well as the important cultural centres of the young state. It primarily concentrates on Prague as an art centre with lively exhibition activity that focused not only on local artists but also on the most progressive names from all around Europe. However, the exhibition also addresses other centres such as Brno, Zl\xEDn, Bratislava, Ko\u0161ice and Uzhgorod. The curators partly reconstruct important exhibitions that were held in these centres during the first republic period (the exhibition of the Tvrdo\u0161\xEDjn\xED group, the Exhibition of Contemporary Culture in Brno, Poesie 32, the First Exhibition of Surrealists in Czechoslovakia). The exhibition introduces important cultural events of the period and emphasizes the first republic's cosmopolitan and multinational character. This approach aims not only to show with historical accuracy how wealthy and diverse the culture of the young state was but also offer inspiration for the present where the lack of historical knowledge often results in xenophobic attitudes. The permanent exhibition is accompanied by an extensive educational program.",
              link: "https://www.ngprague.cz/en/event/404/1918-1938-first-czechoslovak-republic",
              hall: "National Gallery Prague",
              category: "Museum",
              countryCode: "cz"
            }, {
              country: "Czech",
              title: "1796\u2060\u2013\u20601918: Art of the Long Century",
              date: "Permanent",
              thumbnailSrc: "https://ngp-prod.brainz.cz/images/2020/03/30/5ee0576cbc467de5f7d6e312e23f600fa9f38d49.jpg?w=600&fm=webp&q=71",
              detail: "The exhibition 1796\u2060\u2013\u20601918: Art of the Long Century purposefully and naturally connects Czech and international art. Unlike the preceding permanent exhibitions at the National Gallery Prague, the artworks on display do not include any loans from other museums and galleries filling the gaps in the collections. The project does not seek to present another art historical review and re-codify key artworks produced in the Czech Lands in the 19th century. Such approach necessarily neglects the works, which were purchased for or donated to the National Gallery Prague from other European regions and also had a major influence on the local situation and development on the art scene. Instead, the exhibition shows what the National Gallery Prague has amassed in the course of its more than 220-year-long history in the broad context. Therefore, the artists are naturally represented in an uneven manner \u2060\u2013\u2060 with compact and representative sets on one hand, and more or less haphazardly acquired or occasional acquisitions on the other. The resulting selection shows more than 450 artworks by 150 artists in three major chapters: Man, The World and Ideas. The exhibition presents painting as well as sculpture. Free sculpture is accompanied by paintings. Public sculpture forms a separate section paraphrasing three basic themes in the sections of Architecture, Monument and Tombstone with respect to a selected approach and availability of the exhibits. Therefore, the artists of different art opinions and very different generations can be seen at the exhibition side by side, such as Josef M\xE1nes next to Pablo Picasso, Josef Navr\xE1til next to Bohumil Kubi\u0161ta or Antonio Canova next to Franz von Stuck. The exhibition\u2019s thematic division made it possible to subdivide it into many small subgroups of artworks representing independent sections ranging from self-portraits, family and official portraits to paintings of caf\xE9s, lively city boulevards, spring landscapes, mountain lakes or artworks with religious or mythological themes. There are two exhibitions creatively working with the 19th-century visual media, which depart from the plan to present only the artworks from the NGP collections. While the exhibition architect Ji\u0159\xED P\u0159\xEDhoda used the film material supplied by the National Gallery Prague in his three-channel projection, the designers\u2019 team of the graphic Studio Najbrt created an impressive collage of posters loaned by the Museum of Decorative Arts in Prague, the National Theatre Archives and the Military History Institute Prague. The two genuinely contemporary interventions are based on the exhibition\u2019s fundamental idea \u2060\u2013\u2060 to outline the world of 19th-century man. They became the project\u2019s integral part and evidence of the inspirational character of the artistic legacy of the long century for the 21st-century society. The exhibition 1796\u2060\u2013\u20601918: Art of the Long Century from the NGP collections understands the so-called \u201Clong century\u201D in a different way than usual. The difference lies in the dates \u2060\u2013\u2060 its beginning is not linked with the events of the French Revolution, but with the birth of the Society of the Patriotic Friends of the Arts on February 5, 1796 in Prague, whose activities were of major importance for the development of fine arts in the Czech Lands. It was the year when the first public premises acquainting the visitors with major artworks of local and European art were opened. The Society of the Patriotic Friends of the Arts\u2019 another significant undertaking was the establishment of the Academy of Fine Arts three years later. Prague thus became a place, which could appear on the art map more often in the following decades as a city that responded in an increasingly dynamic way to new stimuli from abroad. The central European region acquired another major cultural centre. It was the collection of the Picture Gallery of the Society of the Patriotic Friends of the Arts that became a core of the collections of today\u2019s National Gallery Prague. In 1902, Emperor Franz Joseph I of Austria founded the Modern Gallery, whose acquisitions were of key importance for the rich and variegated character of the art collection in the first half of the 20th century. The purchase of the French art collection by the Czechoslovak state in 1923 was also a major undertaking. The period under examination actually covers three centuries, including the last one. The contemporary relationship to the 19th-century history, however, is often ambivalent \u2060\u2013\u2060 close as well as detached. The society and culture, including art, of that time went through significant changes, which often have a major impact on the present, too. On the other hand, 19th-century man would not understand today\u2019s compelling and pointed debates on gender or environmental problems. Yet, there are questions that the long century society has come up with. That is why there are attempts today to see art history or \u201Cread\u201D the art of the past in a different way. All of this is characterized by a certain departure from the traditional national artistic and art historical schools. In this respect, we find ourselves in the midst of an unusually fruitful and inspirational debate facilitating a radical change in the telling of the \u201Cstory of arts\u201D. The exhibition includes two small graphic cabinets presenting the rich exhibits of the Collection of Prints and Drawings from the period under examination.",
              link: "https://www.ngprague.cz/en/event/406/1796-1918-art-of-the-long-century",
              hall: "National Gallery Prague",
              category: "Museum",
              countryCode: "cz"
            }, {
              country: "Korea",
              title: "Mesopotamia: Great Cultural Innovations, Selections from The Metropolitan Museum of Art",
              date: "Jul-22-2022 ~ Jan-28-2024",
              thumbnailSrc: "https://www.museum.go.kr/uploadfile/ecms/media/2022/07/5851D70B-9616-0C23-DE2D-146DB5E4523B_thumb.jpg",
              detail: "The National Museum of Korea (Director-General: YOON Sung Yong) has recently established the Mesopotamian Gallery within its Permanent Exhibition Hall and is presenting an exhibition entitled Mesopotamia: Great Cultural Innovations, Selections from The Metropolitan Museum of Art. This marks the first exhibition on Mesopotamian civilization to be hosted by a national museum in Korea. As the first long-term exhibition in Korea to showcase Mesopotamian cultural heritage, the exhibition was co-organized with the Metropolitan Museum of Art in the United States, which possesses a world-class collection of Mesopotamian artifacts. The exhibition will run for a year and a half, from July 22, 2022 to January 28, 2024. Mesopotamia: Great Cultural Innovations, Selections from The Metropolitan Museum of Art is the third special themed exhibition to be presented at the National Museum of Korea following the Egypt Gallery, which was in operation from 2019 to 2022, and the World Ceramics Gallery, which has been in operation since 2021. The new Mesopotamian Gallery was established in accordance with the museum\u2019s annual management plan for its World Art Gallery to provide visitors with opportunities to explore cultures around the world in its Permanent Exhibition Hall. Mesopotamia was the first civilization in human history to develop and apply a form of writing, which it used to pass down its accomplishments in philosophy and science to later generations. It provided a foundation for the development of human civilization and created a lasting impact, even on the contemporary world. However, it has not been subjected to the same level of attention as some other ancient civilizations, such as in Egypt, so its achievements have been less well-known. In this light, the exhibition introduces the major achievements of Mesopotamian civilization with a focus on script, seals, religion, and portraiture so that visitors can enjoy the exhibition without professional background knowledge. The exhibition is comprised of three sections. The first, entitled \u201CCultural Innovation,\u201D begins with the birth of cities. It presents a seal and a bowl that hint at Mesopotamia\u2019s development of a hierarchical society headed by priests and government officials as labor became divided and goods were collected and redistributed through the temples. The invention of cuneiform writing was a definitive cultural innovation of the Mesopotamian people. The script was used to record details of trade and business transactions, develop abstract concepts, and systematically organize knowledge of the surrounding world. Cylindrical seals were also invented around the same time. The exhibition presents thirteen clay cuneiform tablets and eleven seals. In order to vividly convey the joys and sorrows of the ancient Mesopotamians that were densely recorded on these small clay tablets, a kiosk providing interpretations and explanations of each tablet has been installed. Also introduced in this section are the major deities, temple architecture, and ritual practices of the Mesopotamian world as represented by ritual items and images of gods. Constructing huge temples and the diverse artworks inside them was also a part of the cultural innovations of the Mesopotamians. The second section, entitled \u201CArt and Identity,\u201D presents various works expressing individual identity. The abovementioned seals were carved with designs of the particular god worshipped by the seal owner along with inscriptions as a means to indicate identity. The accessories excavated from the Royal Tombs of Ur demonstrate how they were crafted with a careful selection of forms and materials, including imported materials of high value, in order to reflect the social status of the wearer or provide the deceased with strength upon reaching the underworld. Mesopotamian figurative sculptures are highly similar in appearance because their creators did not attempt to document individual characteristics but rather combined ideal attributes considered suitable to the status and achievements of the subject when creating human statues. The statues of the rulers Gudea and Ur-Namma have inscriptions carved into the body revealing whose likeness it is, demonstrating the complementary relationship between text and image. The Cuneiform Cylinder with Inscription of Nebuchadnezzar II demonstrates that written records of the military and religious achievements of a ruler were as important as portraiture. The third section, entitled \u201CThe Age of Empires,\u201D presents art from the two major Mesopotamian empires, the Neo-Assyrian Empire (911\u2013612 BCE) and the Neo-Babylonian Empire (626\u2013539 BCE). These two empires that emerged in the latter half of Mesopotamian civilization left a significant legacy as much from their artistic endeavors as their wars of conquest or advanced governance. The Neo-Assyrian Empire was renowned for the beautiful stone relief scultures adorning the interior of the palace. Among them, Foreign Groom in a Tributary Procession captures a scene from the time using sophisticated carving techniques, while others such as Assyrian Soldier Conducting Captives across the Water reveal the belief of the people of the time in sculpture\u2019s power to represent reality. The Neo-Babylonian Empire took the region\u2019s millennial brick-making tradition to a higher level in the construction of buildings in the capital city of Babylon that were marvels of the world at the time. Two Panels with Striding Lions that lined the Processional Way from the Ishtar Gate, the best-known architecture of ancient Mesopotamia, are displayed in this section. The exhibition ends with a display of decorative bricks that remind visitors how simple yet versatile bricks provided the foundation for all the achievements of Mesopotamian civilization. The exhibition presents four videos that facilitate visitors\u2019 understanding of the exhibits. In the first section is a video demonstrating how to make a modern impression of a cylinder seal (with one of the seals on display) and another about the seal with a detailed explanation provided by a Met curator. The second section features a video of stories about the Mesopotamian civilization shared by Dr. Kim Benzel, Curator in Charge of the Ancient Near Eastern Art Department at the Metropolitan Museum of Art, which loaned the exhibits. In the video room, a huge cube-screen video on the worldview of Mesopotamian civilization and its artistic achievements welcomes visitors. The Mesopotamian people diligently recorded their stories in great detail on palm-sized clay tablets. Their stories are highly detailed and surprisingly similar to those of the people of the present and therefore easy to identify with despite the thousands of intervening years. At the end of the cube video are QR codes that leads to a story of joys and sorrows connecting visitors with a far distant fellow human. This exhibition presenting the cultural heritage of ancient Mesopotamia, which can be difficult to encounter in person not only in Korea but anywhere in the world, will provide an opportunity to explore the cultural innovations, advanced technology, and profound thoughts left behind by the people of the Mesopotamian world, which established itself as a defining point in human history. Admission to the exhibition is free of charge.",
              link: "https://www.museum.go.kr/site/eng/exhiSpecialTheme/view/current?exhiSpThemId=778608&listType=gallery",
              hall: "National Museum of Korea",
              category: "Museum",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "Astana Tombs : A House of Eternity",
              date: "Jul-16-2022 ~ Jul-15-2023",
              thumbnailSrc: "https://www.museum.go.kr/uploadfile/ecms/media/2022/07/C6CDD66B-41D4-52CE-C6B1-9322B9A53E69_thumb.jpg",
              detail: "The Astana tombs (\u963F\u65AF\u5854\u90A3\u53E4\u58B3) are located 35 kilometers southeast of Turpan City in the Xinjiang Uygur Autonomous Region, close to the ruins of the ancient city of Gaochang (\u9AD8\u660C\u6545\u57CE). These tombs were constructed as a cemetery for the ruling class starting around the 3rd century and continuing through the late 8th century. Over 400 tombs have been discovered to date. The early 20th century expeditions headed by the Western powers to the Silk Road and numerous excavations conducted by the Xinjiang Museum in China since 1959 led to a discovery of a wide variety of tomb furnishings in very good condition, including paintings of Fuxi and N\xFCwa, figurines, pottery, and documents. This exhibition aims to present the research results on 85 artifacts excavated from the Astana tombs that had been collected by the Otani (\u5927\u8C37) expedition in the early 20th century and currently housed at the National Museum of Korea. The pottery vessels and wooden trays used as funerary objects were identified as a set based on the data available at the time of their acquisition. A figurine of warrior riding a horse has been restored by rejoining fragments. The methods used in its production have been analyzed through a CT scan. The displayed objects arranged according to the layout of a tomb well demonstrate the characteristics of Astana tombs built and adorned as a home for eternity. we hope that this exhibition will provide an opportunity to appreciate and better understand the wishes of the people of the time for a sustained life after death.",
              link: "https://www.museum.go.kr/site/eng/exhiSpecialTheme/view/current?exhiSpThemId=773164&listType=gallery",
              hall: "National Museum of Korea",
              category: "Museum",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "Feast of Lights: Buddhist Hanging Scroll at Sudeoksa Temple",
              date: "Apr-13-2022 ~ Oct-16-2022",
              thumbnailSrc: "https://www.museum.go.kr/uploadfile/ecms/media/2022/03/5CF040FC-36CD-4D72-5629-73C48239A241_thumb.jpg",
              detail: "Imagine a day when a large-scale Buddhist hanging scroll (gwaebul in Korean) was being hung outside the main hall at the thousand-year-old Sudeoksa Temple in Yesan, Chungcheongnam-do Province. In front of the main hall, small painted banners that mark the sacred space where the gwaebul hangs are fluttering in the wind. A wide array of offerings are piled up in front of the hall. Brilliant warm sunlight and gentle breezes sooth the hearts of the people who are waiting for the Buddha they hope soon to encounter. The temple yard reverberates with the chanting of monks\u2019 chanting and seems to swirl with the people\u2019s dearest wishes. The colossal hanging scroll filled with colorful lights unfolds as the colorful cloths tied to the top of the painting cross the blue sky over the main hall. To celebrate Buddha\u2019s Birthday in 2022, the National Museum of Korea is holding its seventeenth gwaebul exhibition, entitled Feast of Light: Buddhist Hanging Scroll at Sudeoksa Temple in Yesan. The exhibition offers a rare opportunity to personally view a gwaebul painting normally stored away at a temple. Facing such a large Buddhist hanging scroll, viewers often experience an inexplicable but intense thrill, even if they are not familiar with Buddhist thinking and doctrine. Although this painting was produced several hundred years ago, the Buddhist world portrayed in the painting still moves viewers\u2019 minds the way it did back then. This exhibition is the first time the gwaebul painting of Sudeoksa Temple in Yesan is being presented together with another treasure of the temple, a lotus pedestal from the Goryeo Dynasty. The lotus pedestal adorned with beautiful designs demonstrates the splendid Buddhist culture of the Goryeo Dynasty. We would like to invite visitors to appreciate the beauty of cultural properties transported from Sudeoksa Temple to the National Museum of Korea.",
              link: "https://www.museum.go.kr/site/eng/exhiSpecialTheme/view/current?exhiSpThemId=640697&listType=gallery",
              hall: "National Museum of Korea",
              category: "Museum",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "The Buddhist Art in Japan: Collection from Tokyo National Museum",
              date: "Apr-05-2022 ~ Oct-09-2023",
              thumbnailSrc: "https://www.museum.go.kr/uploadfile/ecms/media/2022/03/6898E327-80DC-A9CF-F0B5-0614921729BB_thumb.jpg",
              detail: "Buddhist arts in Japan has evolved into a wide variety of forms since the sixth century. In the early years of its development, sculptures were produced under the direct influence of models from China and Korea. However, by the ninth century (during the Heian period), a distinctive Buddhist culture had begun to develop in Japan. In particular, Esoteric Buddhism centering around Mahavairocana Buddha and Pure Land Buddhism revolving around Amitabha Buddha flourished. Moreover, the syncretism of Buddhism and Shintoism, the indigenous religious beliefs of Japan, provides a distinct facet to Japanese Buddhist culture unique compared to Chinese and Korean versions. This exhibition presents Buddhist sculptures embodying the three prominent features of Japanese Buddhist faith: the flourishing of Esoteric Buddhism and Pure Land Buddhism and the syncretism between Buddhist and Shinto beliefs. Those sculptures are in the collection of Tokyo National Museum. It is an outcome of the ongoing exchanges and partnership taking place between National Museum of Korea and Tokyo National Museum.",
              link: "https://www.museum.go.kr/site/eng/exhiSpecialTheme/view/current?exhiSpThemId=650312&listType=gallery",
              hall: "National Museum of Korea",
              category: "Museum",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "The Mysterious Village",
              date: "August 17, 2022 ~ October 11, 2022",
              thumbnailSrc: "https://www.nfm.go.kr/site/english/upload/bbs/17/17_20220817154817_ffd52f3c7e12435a724a8f30fddadd9c.jpg",
              detail: "Title\tThe Mysterious Village Period\tAugust 17, 2022 ~ October 11, 2022 Venue\tSpecial Exhibition\u2160, NFMK Seoul <The Mysterious Village> is an exhibition of immersive digital videos of various deities in old folktales. Gods have always been with people and listened to their wishes for peace, health, good harvest, and big catch. The roles of gods and deities such as Jangseung (Village Guardian Posts), Sotdae (Sacred Poles), Sansin (Mountain God), Gasin (Household Deities) that protect a home, the Ten Dukes and Jeoseungsaja (Messenger of the Afterworld) associated with death, and Yongsin (Dragon God) and Dokkaebi (Goblin) related to the people's livelihood are vividly expressed by utilizing a variety of visual technologies and sound effects, as well as people's wishes contained in them. We invite you to where magical stories unfold: the village of gods. We hope that this special allows visitors to have a fun time with gods, who have always been around.",
              link: "https://www.nfm.go.kr/user/bbs/english/17/469/bbsDataView/23209.do?page=1&column=&search=&searchSDate=&searchEDate=&bbsDataCategory=",
              hall: "National Fork Museum of Korea",
              category: "Museum",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "CLOUD WALKERS",
              date: "2022.09.02 ~ 2023.01.08",
              thumbnailSrc: "https://file.samsungfoundation.org:449/leeum/leeum_upload/gallery/\uAD6C\uB984\uC0B0\uCC45\uC790 \uC6F9\uBC30\uB108-1920x1080-150.jpg",
              detail: "As the shape of our lives are changed by climate crisis, pandemic, and war, we find ourselves moved to a fundamental reconsideration of the value systems implemented over the past century. Today, needing both a macro point of view and a micro level of care, we are called to expand our perspectives to span countries and regions, to form new cultural solidarities and cultivate the kind of imaginative power that transforms civilizations. At the same time, we must also reexamine the role of Asian art and society as a whole in this historical moment, when Asia\u2019s influence on the world order has grown so significantly. How might we move beyond the complex entanglements of existing geopolitical frameworks toward a more sustainable, liberated, and considered future?",
              link: "https://www.leeum.org/exhibition/exhibition01_detail.asp?seq=53",
              hall: "LEEUM",
              category: "Gallery",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "Moon Jars: Park Young-sook",
              date: "2022.09.02 ~ 2022.11.20",
              thumbnailSrc: "https://file.samsungfoundation.org:449/leeum/leeum_upload/gallery/\uBC15\uC601\uC219\uC804 \uC6F9\uBC30\uB108-B.jpg",
              detail: "Leeum Museum of Art is proud to present a special exhibition of Park Young-sook, one of Korea\u2019s leading contemporary ceramicists. For the past forty years, Park Young-sook has been exploring and expanding the possibilities of ceramics and white porcelain. She is particularly renowned for her beautiful \u201Cmoon jars,\u201D a special type of large, round white porcelain jar that was produced for around 100 years during the mid-Joseon period.",
              link: "https://www.leeum.org/exhibition/exhibition01_detail.asp?seq=54",
              hall: "LEEUM",
              category: "Gallery",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "Craft Now",
              date: "2022.09.02 ~ 2023.01.29",
              thumbnailSrc: "https://file.samsungfoundation.org:449/leeum/leeum_upload/gallery/\uACF5\uC608\uC804\uBC30\uB108.jpg",
              detail: "This exhibition focuses on the versatility of contemporary crafts based on tradition, while also illuminating how the creative vitality of Korean crafts has been rejuvenated by new materials and media, along with more advanced communication and work methods. Each floor of the exhibition showcases ingenious new works by contemporary designers and craftspeople, either inspired by or produced in direct collaboration with traditional artisans. Transcending the realm of contemporary crafts, each work enacts a superb encounter between the past and the present by harmonizing with the traditional ceramics, paintings, sculptures, and metalware displayed in their respective space.",
              link: "https://www.leeum.org/exhibition/exhibition01_detail.asp?seq=52",
              hall: "LEEUM",
              category: "Gallery",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "Kaleidoscope Eyes",
              date: "2022.09.02 ~ 2022.11.27",
              thumbnailSrc: "https://file.samsungfoundation.org:449/leeum/leeum_upload/gallery/0810_Leeum Website_Banner_Still_\uC804\uC2DC\uBAA9\uB85D\uC6A9(0).jpg",
              detail: "Kaleidoscope Eyes, an Augmented Reality (AR) exhibition held at Leeum and Hoam Museum of Art, presents AR works conceived by internationally acclaimed artists against a backdrop of structures and gardens created by world-renown architects and masters of traditional Korean landscape design. The exhibition presents 38 AR works by 16 artists, including Nina Chanel Abney, Darren Bader, Marco Brambilla, Julie Curtiss, Olafur Eliasson, Cao Fei, Ho Tzu Nyen, KAWS, Koo Jeong A, Alicja Kwade, Lee Bul, Lu Yang, Bjarne Melgaard, Precious Okoyomon, David Shrigley, Tom\xE1s Saraceno. Kaleidoscope Eyes also unveils Lee Bul\u2019s new AR work, Willing To Be Vulnerable \u2013 Metallized Balloon Ver. AR22 (2022), commissioned by Leeum Museum of Art on the occasion of the exhibition. Inspiring artists and visitors to traverse the borders between the real and virtual worlds, while interacting and communicating through the newest technological medium, the exhibition will provide an opportunity to imagine a future of infinite possibilities and challenge our preconceptions of engaging with art. * The opening date of the exhibition at Hoam will be announced at a later date.",
              link: "https://www.leeum.org/exhibition/exhibition01_detail.asp?seq=51",
              hall: "LEEUM",
              category: "Gallery",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "Jang Young Gyu: Follower",
              date: "2022.09.02 ~ 2023.09.03",
              thumbnailSrc: "https://file.samsungfoundation.org:449/leeum/leeum_upload/gallery/Follower_web_\uCD5C\uC885.jpg",
              detail: "Leeum Museum of Art presents Follower, a sound project by Jang Young Gyu, in the auditorium lounge. The lounge is a space for short breaks in between various programs that go on in the auditorium. Follower consists of twenty-four recordings of pansori lessons. Pansori is a traditional Korean genre of musical storytelling performed by a vocalist and a drummer. When learning pansori, students record the lessons and repeatedly listen to them, in order to the learn the masters\u2019 teaching by heart. The clips contain various students and masters, collected over decades, and one can sometimes track a singer\u2019s development over the years.The tables and benches that lend physical casing to the archival clips are designed by FHHH Friends, an atelier of architects, who received the Korea Young Architect Award in 2019. The benches gently reverberate when the viewer\u2019s weight touches their surface, reminding us that sound is in fact, vibration. In this way, they expand the aural vibration into a whole body sensation. Follower overlooks a sunken garden where evergreen bamboo trees and beoksu totem poles, which are symbols of protection, stand. As such, it continues the harmonious encounter and incessant dialogue between the past and the present that is found throughout the museum.",
              link: "https://www.leeum.org/exhibition/exhibition01_detail.asp?seq=50",
              hall: "LEEUM",
              category: "Gallery",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "Jiyoung Yoo: Closed Containers",
              date: "2022.06.21 ~ 2022.12.18",
              thumbnailSrc: "https://file.samsungfoundation.org:449/leeum/leeum_upload/gallery/\uD504\uB85C\uC81D\uD2B8\uB8F8.jpg",
              detail: "ROOM Project is Leeum\u2019s first-ever solo exhibition series of young artists. The series is dedicated to presenting works by artists in their 20s and 30s, in the lounge area located in the museum lobby.Jiyoung Yoo: Closed Containers is the first exhibition of ROOM Project. Jiyoung Yoo questions and restructures the established conditions and components of painting. One could say that a painting is a container of images, which are drawn on a support\u2013most commonly a cloth stretched over a grid of wooden stretcher bars, a wooden panel, or a piece of paper. In order to break away from the conventional system of painting, Yoo substitutes the structure of painting with those of everyday objects, for example a calendar or squared manuscript papers. She continues to explore the relationship between the support and images, more recently through works that borrow the forms of cupboards and shelves found in households.In Closed Containers, Yoo ponders upon objects in museums. Leeum\u2019s galleries for traditional Korean art display many types of containers such as bottles, ewers, cases, dishes, and water droppers. These objects are empty but \u201Cclosed\u201D containers for they are no longer functional, with their original purposes only indicated by the labels. Yoo has taken this contradictory nature of the museum objects as the motif of the works in the exhibition.A Pile of Grid and Piles of Grid are cupboards that cannot be opened; Pigeonhole a drawer that cannot store things; and Door a door that is forever closed. These non-functional objects allude to the constant tension between the museum objects and visitors who are prohibited from interacting with the objects. The empty, closed containers, on the other hand, are open to visitors\u2019 boundless imagination of what could be stored in them. A Compartment of Time and Compartments of Currents are works that divide the infinite flow of time and water into one piece of painting, and many pieces of wallpaper, respectively. The two works symbolize the centuries of time that are deposited and the endless possibilities of what will be added in the closed containers. The exhibition culminates with the message conveyed by the letters that replace numbers on the faces of five clocks: container unfolds what you desire.",
              link: "https://www.leeum.org/exhibition/exhibition01_detail.asp?seq=48",
              hall: "LEEUM",
              category: "Gallery",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "MMCA Hyundai Motor Series 2022: Choe U-Ram \u2013 Little Ark",
              date: "2022-09-09~2023-02-26",
              thumbnailSrc: "https://www.mmca.go.kr/upload/exhibition/2022/09/2022091603391914715146.jpg",
              detail: "This exhibition is designed as a form of a performance that reconstructs the reality that we are in now, bringing the questions inherent in Choe-Uram's well-known works to the forefront. The situation in which humanity's survival is threatened by an unprecedented crisis has provided an opportunity to re-examine and question things that have long been taken for granted. The escalation of anxiety and polarization caused by climate change and socio-political and economic crises clearly reveals the real portrait of an era of disorientation. In response, the artist constructed the exhibition with the \u2018Ark\u2019 as the main theme and juxtaposed the contradictory desires that constitute the contemporary era, providing a place for the audience to ponder and raise questions about where we are ultimately destined. The black colored Round Table placed in the center of the Seoul Box is supported by 18 headless figures made from straw, and a round head placed on top of the table rolls around intermittently. This is a comparison to the fierce competition to occupy the single head, and the structure where it is impossible to escape from this struggle even if there is no desire for the head. Hovering above are three Black Birds, constructed of pieces cut from recycled cardboard boxes. They rotate slowly around the high ceiling and watch over the struggle taking place below. Who will get hold of the head? Who will be the loser? Who will be able to escape this strife? Little Ark is a symbolic ark made of heavy iron and recycled cardboard boxes with cutting-edge technology. Where do we stand in this era where the exploration of outer space is accelerating, while simultaneously aggravating the crisis of the Earth's ecosystem? Thirty-five pairs of oars stand erected like a wall that alienates us, then begin a majestic dance as if spreading wings. Lighthouse placed on top of the ship, Two Captains and James Webb facing opposite directions, Angel with a feebly slouching body, Anchor that makes it difficult to tell if the ark is docked or sailing, and Infinite Space which is a metaphor to mankind endlessly chasing desires even in a time of crisis; these works all maximize the ambivalent reality alongside Little Ark while drawing our eyes to Exit. This video, in which a door opens but then a closed door repeatedly emerges, is in harmony with the ambient sound that fills the exhibition space, inviting us to delve into our desires, reflect on the present, and raise many questions. What is the purpose of this voyage? Where is the destination? Is there really an exit? Where is the end to this desire? However, in one corner of the exhibition space, Red repeatedly blooms and withers while emitting fierce red light. If One, a large white flower at the entrance of Gallery 5, is a commemorative wreath made by the artist for the pain of his contemporaries who have experienced the recent pandemic, Red signifies how we must endeavor to move forward nonetheless, as well as the cycle of life itself. In order to truly navigate one's own voyage, one must constantly question and seek answers in pursuit of invisible fundamental values, rather than following the absolute or the desires of others. As the drawings that are the basis of Choe's works suggest, important things cannot always be seen by the eye, and the true meaning of existence is not easily revealed. While walking through the brightly lit corridors, we hope the audience will navigate their own individual universes along with URC-1 and URC-2, which were reborn as stars by assembling the headlights and taillights of scrapped cars.",
              link: "https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=2&exhId=202208090001545",
              hall: "MMCA Seoul",
              category: "Gallery",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "The Museum-Carbon-Project",
              date: "2022-08-19~2022-10-30",
              thumbnailSrc: "https://www.mmca.go.kr/upload/exhibition/2022/08/2022080504245832619158.png",
              detail: "The MMCA Performing Arts 2022: Museum-Carbon-Project is a reflective program in the form of a series of multidisciplinary events, all of which question how we should respond to climate change in the Anthropocene. Until now, we have only evaluated an exhibition based on its aesthetic achievements, its impact on the ecology of art, the number of visitors, and the level of visitors' satisfaction. We have neglected the environmental effects created in the course of putting together an exhibition. Climate change caused by greenhouse gasses looms as an ever-growing problem all across the world, meaning we can no longer overlook the environmental consequences of creating an exhibition. Given this reality, what are the perspectives and attitudes we must adopt to face this problem? What must our judgment criteria entail and how can we transform our concerns into discourse? \uFFA0 Issues of climate change or carbon emissions are by no means a simple problem that can be easily solved. Although the Anthropocene, climate change, and carbon emissions are real phenomena that we can no longer ignore, they are also \u201Chyperobjects\u201D that are too large and convoluted to be grasped as a whole; they are, in essence, parts of a complex problem that concern the entire human race. That is why the MMCA Performing Arts 2022: Museum-Carbon-Project program does not simply aim to reduce the quantitative amount of carbon emissions at the museum. Rather, this project suggests we see climate change and carbon emission as a process of addressing problems about the human community and expanding the ways we sense the present time. \uFFA0 As a start, the MMCA Performing Arts 2022: Museum-Carbon-Project calculates the amount of carbon emitted at every step of creating an exhibition at the MMCA. A wide range of \u201CProjects\u201D* in the form of presentations, discussions, and workshops have been developed, each dealing with different activities involved in exhibition-making. Meanwhile, \u201CDiscussions\u201D** will take place forming an arena where people from different disciplines can come together to share their concerns. The MMCA Performing Arts 2022: Museum-Carbon-Project program will not act as a vehicle to generate schematic outcomes, but instead be used as an arena of contemplation that questions and examines what role museums should play in the Anthropocene, while also serving as a preliminary preparation for sustainable exhibition-making in the future. \uFFA0 *From August 19 to October 30, 2022 a wide range of \u201CProjects\u201D will be carried out, each derived and developed from different activities involved in exhibition-making, including the production of artworks, employee commuting and business trips, packaging and transportation of artworks, construction of exhibition spaces, production of PR materials, energy use in exhibition spaces, transportation of visitors, and the disposal of exhibition waste. **The \u201CDiscussions\u201D related to the exhibition-making activities will be consistently updated on the MMCA website. For instance, materials such as the current status of MMCA, existing guidelines, issues, and proposals will be put together and shared on the website, as well as through a separate sourcebook.",
              link: "https://www.mmca.go.kr/eng/exhibitions/exhibitionsDetail.do?exhFlag=1",
              hall: "MMCA Seoul",
              category: "Gallery",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "MMCA Lee Kun-hee Collection: LEE JUNG SEOP",
              date: "2022-08-12~2023-04-23",
              thumbnailSrc: "https://www.mmca.go.kr/upload/exhibition/2022/07/2022072802145853115239.png",
              detail: "MMCA Lee Kun-hee Collection: LEE JUNG SEOP exhibits a selection of roughly 100 pieces; putting together 90 works by Lee Jungseop among the 1,488 pieces donated by the late Lee Kun-hee, president of Samsung group in April 2021, and 10 works by Lee Jungseop from the MMCA collection. This is the second exhibition focusing on the Lee Kun-hee collection, as well as a collection exhibition prepared to display superior Korean art pieces, and to provide the visitors an opportunity to see artworks high in scarcity value. Lee Jungseop (1916-1956) was an honest painter, who did not let go of his passion for paintings even when his life was harsh and difficult. As a civic painter that drew \u2018bull\u2019 paintings since the Japanese colonial period, he can be referred to as a national artist. Since 1970s, movies, theater plays, novels about Lee Jungseop were produced and he was loved by the public for a long time. MMCA Lee Kun-hee Collection: LEE JUNG SEOP is an attempt to look at Lee Jungseop in another way through the MMCA collections, unraveling the artwork collection and research function of a public museum into an exhibition. This exhibition consists of two parts: first, pencil drawings and postcard paintings made in Wonsan and Japan in 1940s. Second, prime artworks and tinfoil paintings created in Tongyeong, Seoul, and Daegu in 1950s. This exhibition aims to evenly reflect artist Lee Jungseop and human Lee Jungseop, and to display the various sides of Lee Jungseop. We hope that the life and works of artist Lee Jungseop, who drew ideals while going through shabby reality, reaches many more people through the Lee Kun-hee collection, and further on, give an opportunity to increase the understanding and usage of collections.",
              link: "https://www.mmca.go.kr/eng/exhibitions/exhibitionsDetail.do?exhFlag=1",
              hall: "MMCA Seoul",
              category: "Gallery",
              countryCode: "kr"
            }, {
              country: "Denmark",
              title: "Matisse: The Red Studio",
              date: "13 October 2022 \u2013 26 February 2023",
              thumbnailSrc: "https://www.smk.dk/wp-content/uploads/2019/06/Red-studio-ENDELIG-BILLEDFIL-TIL-WEB-1600x1318.jpg",
              detail: "There is a treat in store for art lovers: This autumn, we will present a new exhibition featuring works by French master painter Henri Matisse. Organized in collaboration with The Museum of Modern Art in New York, the exhibition will  reunite an iconic masterpiece, The Red Studio, with all the works of art depicted in the painting. A key work in art history is coming to Denmark Henri Matisse (1869\u20131954) is one of the greatest masters of twentieth-century art. In 1911 he painted The Red Studio, which is now considered a key painting in Matisse\u2019s oeuvre and a foundational work in the history of modern art. The picture depicts the artist\u2019s studio in the Parisian suburb of Issy-les-Moulineaux filled with his own paintings, sculptures, furniture and decorative objects. In a radical move, the artist has saturated the painting\u2019s surface with a monochrome red covering the walls, floors and furniture. Three of the paintings shown in the picture belong to SMK, and with this exhibition all the works depicted are now reunited for the first time in over 100 years. A highlight of the MoMA collection, The Red Studio is  a greatly acclaimed painting that has fascinated generations of artists and museum visitors. The exhibition offers a unique opportunity to experience The Red Studio in Denmark and gain rare insight into Matisse\u2019s choice of subject matter and artistic working methods. Top photo: Henri Matisse. The Red Studio. 1911. Oil on canvas, 181 x 219.1 cm. Mrs. Simon Guggenheim Fund, The Museum of Modern Art, New York. \xA9 Succession H. Matisse/VISDA 2022",
              link: "https://www.smk.dk/en/exhibition/henri-matisse-the-red-studio/",
              hall: "Statens Museum for Kunst National Gallery of Denmark",
              category: "Gallery",
              countryCode: "dk"
            }, {
              country: "Denmark",
              title: "Connections \u2014 Danish artists from Ex-Yugoslavia",
              date: "17 September 2022 - 19 February 2023",
              thumbnailSrc: "https://www.smk.dk/wp-content/uploads/2020/05/Forbindelser-e1662555432770-1600x1066.jpg",
              detail: "War, migration, asylum policies and the feeling of home: this autumn, seven leading Danish artists from the former Yugoslavia will enter SMK with their political and deeply personal works of art. In 2022, exactly 30 years have passed since Denmark received 20,000 refugees from the wars in the former federate country of Yugoslavia, primarily from Bosnia and Herzegovina. In the 1990s, the wars sent over half a million people into exile, creating what was at the time the most challenging refugee situation in Europe since World War II. Many of those refugees subsequently chose to stay in Denmark, and today the Danish contemporary art scene includes several prominent artists from the former Yugoslavia. In the exhibition, SMK brings together seven of these leading artists. With a few exceptions, they all came to Denmark as children when their families fled from the war in the Balkans. Monumental sails, crocheted maps and a floating refugee centre The artists in the exhibition share a similar multicultural background, but they work in vastly different ways. In the museum\u2019s long Sculpture Street, visitors will find a monumental work consisting of six-metre sails sewn out of clothes collected from refugees in fifteen countries ravaged by conflicts. Also on display are crocheted world maps, photographic postcards from a country that no longer exists, and the video work Flotel Europa, which tells the story of the ship that, back in the 90s, functioned as a refugee centre in the heart of Copenhagen. PhD Fellow Tijana Mi\u0161kovi\u0107, who curated the exhibition, says: In a time of exile and involuntary migration, it is important to focus on the connections that can arise between different cultures, histories and geographical areas. Art can create meaningful connections across the gulf created by migration.",
              link: "https://www.smk.dk/en/exhibition/danish-contemporary-artists-from-the-former-yugoslavia/",
              hall: "Statens Museum for Kunst National Gallery of Denmark",
              category: "Gallery",
              countryCode: "dk"
            }, {
              country: "Denmark",
              title: "Carl Bloch",
              date: "11 February 2023 - 29 May 2023",
              thumbnailSrc: "https://iip-thumb.smk.dk/iiif/jp2/fx719r05n_KMS4087.tif.reconstructed.tif.jp2/full/!1024,/0/default.jpg",
              detail: "In the spring of 2023, SMK will present the largest exhibition to date featuring Danish artist Carl Bloch (1834\u2013 1890). A unique opportunity to discover or rediscover the phenomenon that is Carl Bloch \u2013 a spectacular artist who suffered a rapid fall from superstar to object of scorn. Fall of a superstar Few Danish artists have suffered the same fate as Carl Bloch. In his own day he was famous and highly acclaimed, but after his death he was largely written out of art history and his pictures put in storage. Critics claimed that his art was outdated. He was not modern in the \u2018right\u2019 way. Still, audiences continued to stand by Bloch. His virtuoso technique and ability to tell a story never lost its ability to fascinate, and to this day his In a Roman Osteria remains SMK\u2019s most popular work of art. Explore Bloch\u2019s impressive life\u2019s work With this new, major exhibition, SMK presents Carl Bloch as an artist poised between the Danish Golden Age from which he was rounded and the modern, fragmented world dawning around the time of his death. In the exhibition you will find a large selection of Bloch\u2019s paintings: religious images, sentimental and comic scenes, a budding realism, history paintings and much more. Carl Bloch did it all. Join us as SMK takes a fresh look at the story of one of Danish art\u2019s most celebrated artists and invites you to delve into his impressive life\u2019s work.",
              link: "https://www.smk.dk/en/exhibition/carl-bloch/",
              hall: "Statens Museum for Kunst National Gallery of Denmark",
              category: "Museum",
              countryCode: "dk"
            }, {
              country: "Denmark",
              title: "BAROQUE",
              date: "27 May - 23 November 2023",
              thumbnailSrc: "https://www.smk.dk/wp-content/uploads/2021/04/Test-768x397.jpg",
              detail: "Sensuality and strong emotions! The major autumn exhibition of 2023 tells the story of the European Baroque \u2013 a tale full of vigour and excitement. The Baroque was a time of change where religion is challenged and philosophy and science take on new significance. A period where the idea of life as a theatre takes hold: we humans are just actors on the stage of life.",
              link: "https://www.smk.dk/en/exhibition/barok/",
              hall: "Statens Museum for Kunst National Gallery of Denmark",
              category: "Museum",
              countryCode: "dk"
            }, {
              country: "Denmark",
              title: "Danish and Nordic Art 1750-1900",
              date: "Permanent exhibition with works from SMK's collection",
              thumbnailSrc: "https://www.smk.dk/wp-content/uploads/2018/06/KMS1658-1600x1046.jpg",
              detail: "Let yourself be taken back to the birth of Danish art and the upheavel of the 1800\u2019s in the realistic Golden Age and the Modern Breakthrough. Through 400 paintings spread out in 24 rooms the most significant collection of Danish art expands itself in a parade of Danish champions like Nicolai Abildgaard, C.W. Eckersberg, Jens Juel, L.A. Ring, P.S. Kr\xF8yer, Christen K\xF8bke and Vilhelm Hammersh\xF8i. 150 years of Danish and Nordic art We unfold the broad strokes in Danish and Nordic art through 150 years and offer up a historic overview, topical themes and focus on artists of particular significance. At the same time we cast a light on some of the more overlooked chapters in Danish art history. Thank you Thank you to The Obel Family Foundation and A.P. M\xF8ller and Wife Chastine Mc-Kinney M\xF8llers foundation for supporting the exhibition.",
              link: "https://www.smk.dk/en/exhibition/danish-and-nordic-art-1750-1900/",
              hall: "Statens Museum for Kunst National Gallery of Denmark",
              category: "Museum",
              countryCode: "dk"
            }, {
              country: "Denmark",
              title: "Danish and International Art after 1900",
              date: "Permanent exhibition with art works from SMK's collection",
              thumbnailSrc: "https://www.smk.dk/wp-content/uploads/2018/06/KMS8313-1600x1270.jpg",
              detail: "Modern art from the 20th century and the very latest contemporary art now fills the exhibition rooms of SMK\u2019s white building, offering a wide-ranging display of the main movements within Danish art. The exhibition includes rooms focusing on major individual figures, on collective movements, and on important works and trends from the international art scene of the period. Move through time \u2013 the long corridor is a timeline You can now experience a large number of new artworks in our exhibition rooms dedicated to the museum\u2019s collection of contemporary art. With generous funding from the New Carlsberg Foundation, SMK has purchased 104 new works of art. With this substantial acquisition, the museum wishes to increase its focus on Danish contemporary art. Move through time \u2013 the long corridor is a timeline The long walkway extending through the building acts like a kind of timeline. As you move through the large exhibition rooms facing the \xD8stre Anl\xE6g park you also move chronologically through a sequence of art from the early 20th century to the present day. Overview and immersion The large exhibition rooms offer visitors the chance to orient themselves and get an overview of art from the early 20th century to the present day. Each room presents a specific period. The smaller rooms on the other side of the corridor offer visitors the opportunity to focus on tendencies, groupings, artists or particular issues.",
              link: "https://www.smk.dk/en/exhibition/danish-and-international-art-after-1900/",
              hall: "Statens Museum for Kunst National Gallery of Denmark",
              category: "Museum",
              countryCode: "dk"
            }, {
              country: "Denmark",
              title: "European Art 1300-1800",
              date: "Permanent exhibition with works from SMK's collection",
              thumbnailSrc: "https://www.smk.dk/wp-content/uploads/2018/08/KMS1-cropped-61-2-1600x1235.jpg",
              detail: "Andrea Mantegna, Tiziano Vecellio, Lucas Cranach the Elder, Peter Paul Rubens and Rembrandt van Rijn. Explore some of art history\u2019s absolute masters from the middle ages to the Enlightenment. More than 500 years of European art The exhibition provides an overview of 500 years worth of art and invites you to delve into art and tales of Europe. Geographically the exhibition spreads out all over the continent with highlights from Dutch, Flemish, Italian, French, Spanish and German art. Denmark\u2019s oldest collection of art The exhibition offers up painting, miniatures, sculptures, drawings and graphical works from the museums collection of older European art. The collection is the eldest in Denmark and has it\u2019s roots in the private collections of the country\u2019s kings.",
              link: "https://www.smk.dk/en/exhibition/european-art-1300-1800/",
              hall: "Statens Museum for Kunst National Gallery of Denmark",
              category: "Museum",
              countryCode: "dk"
            }, {
              country: "Denmark",
              title: "French Art 1900-1930",
              date: "Permanent exhibition with works from SMK's collection",
              thumbnailSrc: "https://www.smk.dk/wp-content/uploads/2018/07/Andre-Derain-1600x1311.jpg",
              detail: "In the summer of 1905 Henri Matisse, Pablo Picasso and Andr\xE9 Derain among others threw themselves into pictorial experiments with ferocious colours and innovative shapes. This became the start of a breathless and revolutionary period in art history. In this exhibition we display a selection of highlights from the museum\u2019s collection of French art from 1900-1930. Rarely exhibited, experimental and provocative In the exhibition you can see very different works by the same artists. Many of the artists in the exhibition tried out different expressions and techniques. Common to the very diverse works is that they attracted vast attention in their time for their striking contributions to how modern art ought to be. The critique rained down on them and some of the artists were accused of daubing. In the exhibition you can experience works such as Matisse\u2019s papercut Zulma, which is very rarely exhibited. On of the world\u2019s finest collections SMK has a unique collection of French art with works by Matisse, Picasso, Braque, Modigliani and Derain. This sensational collection is largely the product of engineer and art collector Johannes Rump. During the 1910\u2019s and in the beginning of the 1920\u2019s he gathered one of the finest collections of works by Matisse. A collection he generously donated to the museum in 1928.",
              link: "https://www.smk.dk/en/exhibition/french-art-1900-1930/",
              hall: "Statens Museum for Kunst National Gallery of Denmark",
              category: "Museum",
              countryCode: "dk"
            }, {
              country: "Denmark",
              title: "THE COLD GAZE \u2013 GERMANY IN THE 1920S",
              date: "14.10.22 - 19.2.23",
              thumbnailSrc: "https://louisiana.dk/wp-content/uploads/2021/11/0096213g-scaled-e1662061544161-960x897.jpg",
              detail: "Willkommen, Bienvenue, Welcome! A sweeping journey through the roaring and explosive 1920s in the Weimar Republic. Centre stage, the significant movement of \"Neue Sachlichkeit\" and its sober realism \u2013 ranging from the harsh and satirical to the razor-sharp, almost clinical. Sharing the limelight: groundbreaking photographer August Sander. The exhibition is organized in collaboration with Centre Pompidou, Paris. Crises and turbulence, but also a period of wild and violent artistic innovation. After the First World War, German society during the Weimar Republic (1918-1933) experienced years of deep poverty and political unrest, but also a short-lived flourishing of democracy and a strong culture of freedom. The period, which came to an abrupt end with the Nazi takeover in 1933, was characterized by both euphoric creation and a constant sense of impending dissolution. A \u201Cfragile\u201D state that translated into a rich and varied cultural life.",
              link: "https://louisiana.dk/en/exhibition/germany-in-the-1920s/",
              hall: "Louisiana Museum of Modern Art",
              category: "Museum",
              countryCode: "dk"
            }, {
              country: "Denmark",
              title: "RICHARD PRINCE",
              date: "17.11.22 - 10.4.23",
              thumbnailSrc: "https://louisiana.dk/wp-content/uploads/2021/11/RPS6651-image.jpeg",
              detail: "A cool and central figure of American \u2018The Pictures Generation\u2019, Richard Prince often uses banal images from our entertainment and consumption culture, which he twists and transforms in a way where the ordinary is \"uplifted\" into something both strange and seductive. Shown in the series Louisiana on Paper, supported by C.L. Davids Fond og Samling Richard Prince (b. 1949) stands as a cool and central figure in what was named \u2018The Pictures Generation\u2019 in the US around 1980. Here a new generation of artists emerged in opposition to the image-denying tendencies of the 1970s, with Jeff Koons as an exponent who would gain widespread fame. With his more subtle and understated approach, Richard Prince, on the other hand, has in many ways remained an artist\u2019s artist \u2013 highly admired by e.g. Arthur Jafa and Alex Da Corte. In his work, Prince highlights the marginal and banal aspects of society: jokes, photographs, advertisements, idol worship and other forms of \u201Ceveryday cult\u201D. He manages to identify and sample visual codes and finely tune them so that they become seductive and strange despite their banality. Richard Prince (b. 1949) has an expert eye for how grand themes imperceptibly seep into and out of everything that surrounds us \u2013 relations in the workplace and between generations, the present vis-\xE0-vis mythical time and more. Delving into the collective unconscious, \u201Cnormality as special effect\u201D seems a fitting label to pin on Prince\u2019s work. His art has a singularly odd glow, both sexy and baroque.",
              link: "https://louisiana.dk/en/exhibition/richard-prince/",
              hall: "Louisiana Museum of Modern Art",
              category: "Museum",
              countryCode: "dk"
            }, {
              country: "Denmark",
              title: "ALEX DA CORTE MR. REMEMBER",
              date: "14.7.22 - 8.1.23",
              thumbnailSrc: "https://louisiana.dk/wp-content/uploads/2021/11/140A7998-kopier-1-1600x1062.jpg",
              detail: "An overwhelming, visual experience, this exhibition is the largest to date in Europe with international art-star Alex Da Corte. He works with painting, sculpture, installation and video, often appearing in disguise in his films, taking on iconic figures such as Popeye or the Statue of Liberty. Exhibition supported by the C.L. David Foundation. Alex Da Corte (b. 1980) conquers spaces with color in the interesection between design and visuel culture. Louisiana\u2019s exhibition is the first in-depth presentation of the Venezuelan-American artist\u2019s works in Europe. A mix of both early and completely new works in a totally overpowering scenography, conceived by the artist, with specially designed floors, brightly colored walls, neon lights and characteristic scents \u2013 all in all like stepping into a parallel reality. The exhibition presents a number of Da Corte's large film installations, which include references to a wealth of popular cultural phenomena such as rapper Eminem and The Muppets. In addition, a number of sculptural works, paintings and drawings are displayed to provide a full overview of Da Corte's artistic practice.",
              link: "https://louisiana.dk/en/exhibition/alex-da-corte/",
              hall: "Louisiana Museum of Modern Art",
              category: "Museum",
              countryCode: "dk"
            }, {
              country: "Denmark",
              title: "WARHOL, OPIE, SHERMAN, KLEIN",
              date: "12.8.22 - 8.1.23",
              thumbnailSrc: "https://louisiana.dk/wp-content/uploads/2022/08/1307-Cindy-Sherman-e1661329283518-1280x851.jpg",
              detail: "The East Wing has been sprinkled with stardust. A quartet of great names \u2013 classics as well as contemporary masters \u2013 are displayed together giving you the opportunity to meet both Marilyn in multicolour, monochrome masterpieces, iconic self-portraits and a Hollywood diva behind the facade.",
              link: "https://louisiana.dk/en/exhibition/warhol-opie-sherman-klein/",
              hall: "Louisiana Museum of Modern Art",
              category: "Museum",
              countryCode: "dk"
            }, {
              country: "France",
              title: "16TH-CENTURY BOLOGNESE DRAWINGS IN THE LOUVRE COLLECTIONS",
              date: "22 September 2022 \u2013 16 January 2023",
              thumbnailSrc: "https://api-www.louvre.fr/sites/default/files/styles/w656_h750_c1/public/2022-08/bartolomeo-passerotti-jupiter-assis-sur-des-nuages-detail-musee-du-louvre.jpg",
              detail: "This exhibition accompanies the publication of volume 12 of the Inventaire G\xE9n\xE9ral des Dessins Italiens, devoted to 16th-century Bolognese drawings in the Louvre collections. It presents drawings produced by Bologna-born artists or those who made the city their adopted home, all active before the arrival of the Carracci family. A selection of forty-four sheets shines a light on the evolution of Bolognese drawing all throughout the 16th century by featuring major artists as well as lesser-known, albeit prolific, figures. A new way of drawing, refined and elegant, sometimes bordering on the whimsical, came about in the early years of the Cinquecento, in the workshops of Francesco Francia, Peregrino da Cesena, Marcantonio Raimondi and Amico Aspertini. Lesser-known artists such as Innocenzo da Imola, Bagnacavallo, Biagio Pupini and Girolamo da Treviso, active between about 1515 and 1550 and steeped in classical and Raphaelesque culture, contributed to the gradual creation of a new style featuring the dramatic effects of shading and light, paving the way to a modern style. About mid-century, Pellegrino Tibaldi brought a new monumental language to Bologna from Rome, inspired by Michelangelo and featuring a calligraphic refinement owing much to Perino del Vaga. Then, during the second half of the 16th-century, Prospero Fontana, Lorenzo Sabatini and Orazio Samacchini, after having made a name for themselves in the decoration of several palaces, exported their style to a number of cities neighbouring Bologna, then Rome and its surroundings, when they were called to work for the Bolognese pope Gregory XIII. The exhibition also presents the drawings of Bartolomeo Passerotti, the most influential artist of the Bolognese school, who imposed his new analytical approach to the natural world, foreshadowing the artistic language of the generation to come.",
              link: "https://www.louvre.fr/en/what-s-on/exhibitions/16th-century-bolognese-drawings-in-the-louvre-collections",
              hall: "Louvre",
              category: "Museum",
              countryCode: "fr"
            }, {
              country: "France",
              title: "THINGS",
              date: "12 October 2022 \u2013 23 January 2023",
              thumbnailSrc: "https://api-www.louvre.fr/sites/default/files/styles/w656_h750_c1/public/2022-07/1-Luis_Egidio-Melendez-Nature_morte_avec_pasteques.jpg",
              detail: "The exhibition Things, authored by Laurence Bertrand Dorl\xE9ac, proposes a new take on what was long seen as a minor genre, whose name \u2013 \u2018still life\u2019 \u2013 is intriguing in itself. Depictions of things, which date back to prehistoric times, are a wonderful window into history. Artists were the first to take things seriously by recognising their presence, imbuing them with life, glorifying their forms and meanings, their power and charm. They captured the ability of objects to fire our imagination \u2013 to make us believe, doubt, dream or act. The exhibition revisits the still-life genre from the perspective of the ongoing dialogue between past and present artists. It sheds new light on our attachment to material things, while covering the history of art from prehistoric axes to Chardin, Manet and the readymades of Marcel Duchamp. ",
              link: "https://www.louvre.fr/en/what-s-on/exhibitions/things",
              hall: "Louvre",
              category: "Museum",
              countryCode: "fr"
            }, {
              country: "France",
              title: "THE SPLENDOURS OF UZBEKISTAN'S OASES",
              date: "23 November 2022 \u2013 6 March 2023",
              thumbnailSrc: "https://api-www.louvre.fr/sites/default/files/styles/w656_h750_c1/public/2022-08/fresque-de-varakhsha-musee-des-beaux-arts-tachkent-ouzbekistan.jpg",
              detail: "This exhibition takes visitors on a fascinating journey to the crossroads of civilisations, in the heart of central Asia, in Uzbekistan, where Samarkand and Bokhara are household names. But many other trading posts in the region brought to light works of art that are now listed as objects of world heritage. A large selection of these masterworks will leave Uzbekistan for the first time and undergo special conservation treatment for the exhibition, including monumental wall paintings from the Ambassadors\u2019 Hall in Samarkand and its surroundings, the pages of one of the oldest monumental Korans from the early days of Islam from Katta Langar, in Sogdiana, and other treasures in gold from Bactria (Dalverzin Tepe), silver, silk, and fine ceramics. The exhibition also showcases several masterpieces from the famous 16th-century miniature paintings of the School of Bukhara. Thanks to exceptional loans from Uzbekistan, and from major European museums, the exhibition encompasses nearly 130 works and invites visitors to embark on a journey through space and time. The riveting tale of 17 centuries sheds light on why this far-flung region near China and India fascinated Alexander the Great and the caliphs of Baghdad, beyond the Iranian world, further east. This hotspot of exchange and cultural flourishing provided a forum where Western and Eastern civilisations could dialogue and mingle harmoniously.",
              link: "https://www.louvre.fr/en/what-s-on/exhibitions/the-splendours-of-uzbekistan-s-oases",
              hall: "Louvre",
              category: "Museum",
              countryCode: "fr"
            }, {
              country: "France",
              title: "Edvard Munch. A Poem of Life, Love and Death",
              date: "From September 20th, 2022 to January 22nd, 2023",
              thumbnailSrc: "https://cdn.mediatheque.epmoo.fr/link/oso19ipc0e2ncrk.jpg",
              detail: "Munch's work occupies a pivotal place in artistic modernity. It has its roots in the 19th century and would find its place firmly in the next one. Moreover, his entire work is permeated by a singular vision of the world, giving it a powerful symbolist dimension that is not limited to the few masterpieces he created in the 1890s. Moving beyond fin-de-si\xE8cle symbolism, Munch transcended this movement beyond its peak to make it the backbone of his work, giving it its great coherence. Munch's singular creative process led him to produce many variations of the same motif, but also several versions of the same subject. Eminently symbolist, the notion of cycles thus played a key role in Munch's thought and art. This concept enters into his work at several levels, until it comes into play in the very construction of his paintings, where certain motifs regularly recur. For Munch, humanity and nature are united in the cycle of life, death and rebirth. Within this framework, he developed a new iconography, largely inspired by the vitalist philosophies of Friedrich Nietzsche and Henri Bergson. Munch himself pointed this out when talking about his Frieze of Life: \u201Cthese paintings, admittedly relatively difficult to understand, will be [...] easier to apprehend if they are integrated into a whole.\u201D The exhibition will present about a hundred works, paintings, but also drawings, prints or even engraved blocks, reflecting the diversity of his practice. This large-scale presentation, with a retrospective dimension, will cover the entire career of the artist. It will invite visitors to revisit the Norwegian painter's work in its entirety by following the thread of an ever-inventive pictorial thinking: a work that is both fundamentally coherent, even obsessive, and at the same time constantly renewed.",
              link: "https://www.musee-orsay.fr/en/whats-on/exhibitions/edvard-munch-poem-life-love-and-death",
              hall: "Orsay",
              category: "Gallery",
              countryCode: "fr"
            }, {
              country: "France",
              title: "The national pavilions at the Universal Exhibitions",
              date: "From 09 September to December 13th, 2022",
              thumbnailSrc: "https://cdn.mediatheque.epmoo.fr/link/etf19ipc1h1bym8.jpg",
              detail: "The importance accorded to these national pavilions culminated in the Universal Exhibition in Paris in 1900 (50.8 million visitors). In a Europe where nationalisms were being asserted, threatening the integrity of empires, they extended like an open-air museum along the \u201CRue des Nations\u201D. The Mus\xE9e d\u2019Orsay has preserved some remarkable records of this display of national identities. These drawings were mainly produced by French architects from the Paris \xC9cole des Beaux-Arts (School of Fine Arts), who enjoyed great prestige abroad at the time. These architects acted as advocates of national styles that they sometimes helped to invent.",
              link: "https://www.musee-orsay.fr/en/whats-on/exhibitions/national-pavilions-universal-exhibitions",
              hall: "Orsay",
              category: "Gallery",
              countryCode: "fr"
            }, {
              country: "France",
              title: "Paul Helleu (1859-1927): portraits and private life",
              date: "From September 20th, 2022 to January 01st, 2023",
              thumbnailSrc: "https://cdn.mediatheque.epmoo.fr/link/cnf19ipc1s4fyu8.jpg",
              detail: "A close friend of Marcel Proust (1871-1922), whose death is being commemorated this year, Paul Helleu was the preferred artist of the Belle \xC9poque elite. It was primarily on him that the novelist modeled the character of Elstir in In Search of Lost Time. Robert de Montesquiou, the poet, dandy, and main inspiration for Baron de Charlus in the novel, was also Helleu\u2019s loyal friend and greatest admirer. He dedicated a whole book to him. Helleu has yet to inspire the same resurgence of interest as his friends, the portrait painters John Singer Sargent and Giovanni Boldini. Yet like them, he was highly sought as a society portrait painter and was internationally famous. In 1902, a publisher by the name of Russell commissioned him to make an album of portraits of New York\u2019s twenty most beautiful women. We also owe Helleu the celestial decor of the ceiling of Grand Central Station.",
              link: "https://www.musee-orsay.fr/en/whats-on/exhibitions/paul-helleu-1859-1927-portraits-and-private-life",
              hall: "Orsay",
              category: "Gallery",
              countryCode: "fr"
            }, {
              country: "France",
              title: "Kehinde Wiley",
              date: "From September 13th, 2022 to January 08th, 2023",
              thumbnailSrc: "https://cdn.mediatheque.epmoo.fr/link/adc19fx99x98fj4.jpg",
              detail: "As an extension of the Kehinde Wiley exhibition, organized at the Fondazione Giorgio Cini during the 59th Venice Biennale, the Mus\xE9e d\u2019Orsay is displaying three monumental works by the artist within its Nave: a painting, Femme piqu\xE9e par un serpent (Woman Bitten By A Snake) (Mamadou Gueye), and two recently-completed sculptures (An Archeology of Silence and The Young Tarantine). These works take an in-depth look into the approach developed through the DOWN series that started in 2008. Initially inspired by Hans Holbein\u2019s famous Le Christ mort au tombeau (The Body of the Dead Christ in the Tomb), as well as historical paintings and sculptures of fallen warriors and figures at rest, Wiley created a disturbing series featuring bodies of color lying on the ground. He thus re-conceptualizes classic pictorial forms in order to create a contemporary version of the monumental portrait that resounds with violence, pain, death and ecstasy. As Christophe Leribault, President of the Mus\xE9e d\u2019Orsay and the Mus\xE9e de l\u2019Orangerie, states: \u201CWhilst playing with the stereotypes of Western painting and sculpture, Kehinde Wiley carries an up-to-date message concerning the violence of contemporary society. I wanted to display these works as an actual strand of those collections at the Mus\xE9e d\u2019Orsay that have been such an inspiration to him and of which he offers a fascinating rereading.\u201D Kehinde Wiley (born in Los Angeles in 1977) is a world-renowned visual artist, famous for his dynamic representations of African-Americans and contemporary Afro-diasporic representations that overturn the hierarchies and conventions of the European and American portrait. Working in the mediums of painting, sculpture and video, in his portraits Wiley challenges the narratives of art history, raising complex socio-political issues that have long remained taboo. In 2018, at the request of Barack Obama, Wiley was the first African-American artist to paint an official portrait of an American president for the Smithsonian National Portrait Gallery.",
              link: "https://www.musee-orsay.fr/en/whats-on/exhibitions/kehinde-wiley",
              hall: "Orsay",
              category: "Gallery",
              countryCode: "fr"
            }, {
              country: "France",
              title: "Evidence Soundwalk Collective & Patti Smith",
              date: "20 October, 2022 \u2013 23 january, 2023",
              thumbnailSrc: "https://www.centrepompidou.fr/fileadmin/_processed_/c/0/csm_prog-expo-soundwalkcollectivepattismith_484317f96c.jpg",
              detail: "\"Evidence\" is an audio and visual montage that traverses the work of Arthur Rimbaud, Antonin Artaud and Ren\xE9 Daumal in their journeys to new horizons. Stimulated by these metaphysical voyages, the musical and sound composition of Perfect Vision is the starting point for this new multidisciplinary exhibition, collectively designed by Soundwalk Collective and Patti Smith for the Centre Pompidou.",
              link: "https://www.centrepompidou.fr/en/program/calendar/event/1v0Iy51",
              hall: "Centre Pompidou",
              category: "Museum",
              countryCode: "fr"
            }, {
              country: "France",
              title: "G\xE9rard Garouste",
              date: "7 September, 2022 \u2013 2 January, 2023",
              thumbnailSrc: "https://www.centrepompidou.fr/fileadmin/_processed_/d/1/csm_prog-expo-gerardgarouste_d4998286c8.jpg",
              detail: "The retrospective dedicated to G\xE9rard Garouste, one of the greatest contemporary French painters and proponent of uncompromising figuration, brings together 120 major paintings, often in very large format, and presents installations, sculptures and graphic works by the artist. It allows visitors to apprehend the full richness of the unclassifiable career of G\xE9rard Garouste, \"the restless\", whose life of study, but also of madness, and enigmatic oeuvre mutually inspire one another in a fascinating dialogue.",
              link: "https://www.centrepompidou.fr/en/program/calendar/event/1c7rCxA",
              hall: "Centre Pompidou",
              category: "Museum",
              countryCode: "fr"
            }, {
              country: "France",
              title: "Alice Neel",
              date: "5 October, 2022 \u2013 16 January, 2023",
              thumbnailSrc: "https://www.centrepompidou.fr/fileadmin/_processed_/8/d/csm_prog-expo-aliceneel-affiche_0ec8704126.jpg",
              detail: "Crossing the periods of triumphant abstraction, pop art, minimal art and conceptual art, American artist Alice Neel (1900-1984) was a free and independent woman who went against the tide of the avant-gardes of the time, an icon of militant feminism and a precursor of an intersectional approach. The exhibition is divided into two parts structured freely around the notions of class and gender struggle and highlights the great acuity with which Alice Neel portrayed the different strata of American society. In total, some 75 paintings and drawings are on display.",
              link: "https://www.centrepompidou.fr/en/program/calendar/event/JonpUmK",
              hall: "Centre Pompidou",
              category: "Museum",
              countryCode: "fr"
            }, {
              country: "France",
              title: "Marcel Duchamp Prize 2022",
              date: "5 October, 2022 \u2013 2 January, 2023",
              thumbnailSrc: "https://www.centrepompidou.fr/fileadmin/_processed_/2/f/csm_prog-expo-pmd2022_ccd859eea2.jpg",
              detail: "Established in 2000 to showcase the vibrancy of the French art scene, the Marcel Duchamp Prize rewards and promotes the most representative artists of their generation internationally. For its 22nd edition, the four nominees are Giulia Andreani, Iv\xE1n Argote, Mimosa Echard and Philippe Decrauzat.",
              link: "https://www.centrepompidou.fr/en/program/calendar/event/Co2Fgn6",
              hall: "Centre Pompidou",
              category: "Museum",
              countryCode: "fr"
            }, {
              country: "Spain",
              title: "The other Renaissance. Spanish Artists in Naples in the early Cinquecento",
              date: "10/18/2022-1/29/2023",
              thumbnailSrc: "https://content3.cdnprado.net/imagenes/Documentos/imgsem/90/90f6/90f6429e-2c70-3f2e-56a6-5c38376259ad/aa42b5fe-00ed-ffea-406e-590d0a705d62.jpg",
              detail: "Organized by the Museo Nacional del Prado and the Museo e Real Bosco di Capodimonte in Naples, the exhibition aims to illustrate a very fruitful but largely unknown chapter of European Renaissance culture: the short period of about thirty years, roughly from 1504 to 1535, during which we witness the transition from Southern Spain and Italy to what Vasari called \"the modern manner\", the great art based on the revolution carried out by Leonardo, Raphael and Michelangelo. The novelties elaborated in the pontifical capital were immediately received and reinterpreted in Naples, which in those years became Spanish (1504). Here, the great artists of the first generation of the Iberian Renaissance \u2013Pedro Fern\xE1ndez, Bartolom\xE9 Ord\xF3\xF1ez, Diego de Siloe, Pedro Machuca, and perhaps also Alonso Berruguete\u2013 were able to take their first solid professional steps, creating some works of great importance. The exhibition, curated by Andrea Zezza, Associate Professor, Dipartimento di Lettere e Beni Culturali, Universit\xE0 degli Studi della Campania, and Riccardo Naldi, Professore, Facolt\xE0 di Lettere e Filosofia, Universit\xE0 degli Studi Napoli \xABL'Orientale\xBB, aims to attract the public\u2019s attention on this brief but happy  phase, highlighting the high quality of the artistic creations and their cosmopolitan character, together with the decisive role played by Spanish artists. The basis of the expositions display is the conviction that this flourishing phase saw a very close connection between painting and sculpture. The comparison between the two \u201Csister arts\u201D, one of the most frequent themes in the theory and practice of Renaissance art, finds in fact in Naples a particularly fertile ground for the elaboration of models that contributed to the definition, in the first Cinquecento, from a particular Iberian declension of the Renaissance language and, in Naples, from an autonomous local school, with clearly identifiable stylistic characteristics. Exhibition organized by the Museo Nacional del Prado, Madrid and the Museo e Real Bosco di Capodimonte, Naples. With the sponsorship of the Fundaci\xF3n BBVA.",
              link: "https://www.museodelprado.es/en/whats-on/exhibition/the-other-renaissance-spanish-artists-in-naples/90f6429e-2c70-3f2e-56a6-5c38376259ad",
              hall: "Prado Museum",
              category: "Museum",
              countryCode: "es"
            }, {
              country: "Spain",
              title: "The Marquis of Santillana. Words and images",
              date: "10/4/2022-1/8/2023",
              thumbnailSrc: "https://content3.cdnprado.net/imagenes/Documentos/imgsem/aa/aae5/aae5d09c-1160-5a58-d8fd-538c3c0dd1d9/66086cf8-4e19-ff0b-6617-9259d4cccd07.jpg",
              detail: "Curated by Joan Molina, Head of the Department of Spanish Gothic Painting at the Museo Nacional del Prado, and in collaboration with the Biblioteca Nacional de Espa\xF1a, this exhibition outlines, for the first time, a joint presentation of a group of paintings and manuscripts commissioned by the Marqu\xE9s de Santillana complemented with other works by Jorge Ingl\xE9s \u2013his favorite painter\u2013 and a series of codices owned by some contemporary figures who shared the hobbies of the Castilian nobleman. It is possible to approach it thanks to the presence of the Altarpiece of Los Gozos in the Prado, a deposit of the XIX Duke of the Infantado, \xCD\xF1igo de Arteaga y Mart\xEDn. In homage to Javier Docampo and Fernando Villase\xF1or, the exhibited works will cover the cultural and aesthetic interests of the Marquis of Santillana, a fundamental character in the development of Castilian language and an innovative artistic promoter of the 15th century.",
              link: "https://www.museodelprado.es/en/whats-on/exhibition/the-marquis-of-santillana-words-and-images/aae5d09c-1160-5a58-d8fd-538c3c0dd1d9",
              hall: "Prado Museum",
              category: "Museum",
              countryCode: "es"
            }, {
              country: "Spain",
              title: "DANIEL-HENRY KAHNWEILER",
              date: "DEL 18 DE NOVIEMBRE DE 2022 AL 19 DE MARZO DE 2023",
              thumbnailSrc: "http://www.bcn.cat/museupicasso/imatges/exposicions/Futures/Kahnweiler_Retrat_th.jpg",
              detail: "En la historia del arte del siglo XX, la figura de Daniel-Henry Kahnweiler (1884-1979) es una leyenda. De origen alem\xE1n, eligi\xF3 Par\xEDs para abrir su galer\xEDa en 1907, en el n\xFAmero 28 de la rue Vignon. Las escasas exposiciones y presentaciones que organiza en ella hasta 1914 lo convierten en el marchante pionero del cubismo. Promotor de Georges Braque, Pablo Picasso, Andr\xE9 Derain y Maurice de Vlaminck, y m\xE1s adelante de Juan Gris y de Fernand L\xE9ger, Kahnweiler construye desde cero una red internacional de coleccionistas cubistas, como Hermann Rupf, Roger Dutilleul, Vincenc Kramar, Sergu\xE9i Shchukin y Gertrude Stein, y se rodea de los mejores cr\xEDticos, como Guillaume Apollinaire, Wilhelm Uhde, Ardengo Soffici o Carl Einstein. Kahnweiler era tambi\xE9n un literato que se hizo editor para reunir, en libros exquisitamente editados, a los poetas y los pintores del grupo cubista: Apollinaire y Derain, en L\u2019Enchanteur pourrissant, en 1909; Max Jacob y Picasso, en Saint-Matorel, en 1910, entre otros. El estallido de la Primera Guerra Mundial, en 1914, pone fin al auge de la galer\xEDa y a la cotizaci\xF3n del cubismo, pues la mayor\xEDa de los artistas de este movimiento son llamados a filas. Kahnweiler, que es pacifista, se refugia en Suiza bajo la protecci\xF3n de Hermann Rupf, pero el fondo de la galer\xEDa es embargado como bien enemigo y se dispersa tras cuatro subastas que tienen lugar entre los a\xF1os 1921 y 1923. En 1920 se inaugura, en el n\xFAmero 29 de la rue d\u2019Astorg de Par\xEDs, una nueva galer\xEDa que lleva el nombre del socio de Kahnweiler, Andr\xE9 Simon, desde la que se sigue defendiendo a los artistas hist\xF3ricos de la galer\xEDa, excepto Picasso, vinculado ahora a Paul Rosenberg, y a la que se incorporan nuevos nombres como el escultor Henri Laurens o los catalanes Manolo Hugu\xE9 y Josep de Togores; al mismo tiempo, Kahnweiler se interesa y promueve nuevos talentos como Andr\xE9 Masson, \xC9lie Lascaux o Andr\xE9 Beaudin. Estalla la Segunda Guerra Mundial y en esta ocasi\xF3n Kahnweiler, por su condici\xF3n de jud\xEDo, es uno de sus objetivos. El conflicto comportar\xE1 el cierre de esta segunda galer\xEDa, que resurgir\xE1 de sus cenizas en 1957, con el nombre de Louise Leiris, hijastra de Kahnweiler y casada con Michel Leiris. Tras el fallecimiento de Kahnweiler, en 1979, y de Louise Leiris, en 1988, la galer\xEDa, ubicada en el n\xFAmero 8 de la rue Monceau, contin\xFAa la obra de Kahnweiler, en particular a trav\xE9s de exposiciones memorables dedicadas a Picasso.",
              link: "http://www.bcn.cat/museupicasso/es/exposiciones/daniel-henry-kahnweiler.html",
              hall: "Picasso Museum",
              category: "Gallery",
              countryCode: "es"
            }, {
              country: "Germany",
              title: "Embroidered Gardens Ottoman Textiles from the Borg Collection",
              date: "16.12.2022 to 16.04.2023",
              thumbnailSrc: "https://www.smb.museum/typo3temp/assets/_processed_/f/0/csm_gestickte-gaerten-1_xl_0919e87d6b.jpg",
              detail: "This special presentation in the Pergamonmuseum\u2019s book art cabinet affords a glimpse into one of the strands in the rich textile tradition of the Ottoman Empire: alongside carpets and woven fabrics, lesser-known embroideries also played a major role in this tradition, predominantly in domestic contexts in urban areas. These pieces formed part of the dowry of every young woman and were cared for like treasures. This exhibition showcases towels, serviettes and sashes from the 16th to the 19th century from the Borg Collection. These exquisite works were generally produced in domestic settings, though a number of the particularly intricate embroideries were produced in workshops by professional embroiderers. Embroideries with Prestige The embroideries were made on a rectangular frame on four legs, in front of which the embroiderers would sit on the floor. Finely woven fabrics made of silk, linen and cotton were used to make the works. The embroidery threads were coloured with natural dyes and were usually made of silk, and were sometimes embellished with silver or gold thread. Usually, a border was embroidered on the shorter ends of the fabric. The embroideries are so finely wrought that they look identical from both sides, meaning there is no front and back. We can assume that these fine towels and serviettes have never been used. What is certain, though, is that their primary role was as part of a bride\u2019s dowry, and they would have been placed on display in this function. Tradition and Variation The motifs, patterns and techniques of these embroideries were passed down over centuries. Nevertheless, it is possible to identify trends and fashions alongside these traditional forms of ornamentation. For example, from the 18th century onwards, we see an increased use of European and Chinese designs and embroidery techniques. Looking at the motifs, a strong preference for flowers and depictions of flora becomes apparent. A pronounced interest in these forms can be discerned as far back as the 16th century in Ottoman art, and can be found on almost all materials and in various techniques, be it tiles from Iznik, velvet from Bursa or the miniature painting of Ottoman book arts. In the embroideries, however, these forms are interpreted more freely, sometimes diverging dramatically from the classical courtly style of the Ottoman Empire. At the same time though, we can also make out regional techniques and motifs.",
              link: "https://www.smb.museum/en/museums-institutions/pergamonmuseum/exhibitions/detail/embroidered-gardens/",
              hall: "Pergamonmuseum",
              category: "Museum",
              countryCode: "de"
            }, {
              country: "Germany",
              title: "Mystical Encounters Sufis, Kings and Yogini in Indian Miniature Painting",
              date: "16.09.2022 to 04.12.2022",
              thumbnailSrc: "https://www.smb.museum/typo3temp/assets/_processed_/6/a/csm_Museum-fuer-Islamische-Kunst-Begegnungen_der_mystischen_Art-3_xl_bd2e4856e6.jpg",
              detail: "This special presentation in the Pergamonmuseum\u2019s Buchkunstkabinett shines a light on ascetic traditions practised by various religions on the Indian subcontinent from the 16th to the 18th century. Selected examples from albums of Indian miniature painting illustrate the cultural and religious diversity of the ascetics, Sufis and yoginis. This exhibition showcases the diverse cultural practices of the ascetics on the Indian subcontinent, as well as their social significance and power. It also illustrates how intricately these rites and practices are interwoven across religious lines, and how they have mutually enriched and influenced each other through exchange. Courtly Depictions of Ascetics From the 16th century onwards, depictions of ascetics were very popular at the courts of the Mughal emperors and Deccan sultans of the Indian subcontinent. This exhibition features images from illuminated manuscripts and albums that testify to a rich mystical tradition. They expand the general understanding of the various ascetic sects of sannyasins, yogis, Sufis and fakirs that shaped the Indian subcontinent\u2019s socio-cultural landscape. The diverse religious and ethnic affiliations within the Indian empire made it necessary for Muslim rulers to secure the support of these social groups. Through the favour of the ascetics (who were worshipped by the major faiths and ethnic groups), the emperors and sultans gained religious legitimacy. Combining the Earthly and the Spiritual Many believed that ascetics (whether Muslims or Hindus) were able to attain a multitude of supernatural powers through their spiritual practices, and to transcend the boundary between the earthly and the spiritual. Secular rulers legitimised their spiritual authority by developing close relationships with holy men and women, profiting from their prestige and power. The ascetics, for their part, often intervened in worldly and political affairs. Ascetics as Ideal Lovers It is not only the spiritual lives of ascetics that are featured in visual representations; ascetics also appear as key figures in illustrated love stories, where they are depicted as ideal lovers. Rulers who wanted to adopt the spiritual charisma of these ascetics had themselves portrayed interacting with them or sometimes even staged themselves as royal ascetics. On the other hand, ascetics presented themselves as exalted rulers, highlighting their privileged status within the social order. Portraits of Women Portraits of yogini (the female embodiment of yogic power) and ascetic women became popular in the 18th century. In these depictions, ascetic women transcend the boundaries between human and superhuman strength and worldly and spiritual love. The yoginis are depicted as goddesses or as women who attain supernatural powers but retain their human form. In addition, there are also depictions of princesses dressed as yoginis, expressing the ideal of self-sacrifice for love. The yoginis appear in the images as having equal power and influence to men in their spiritual pursuits.",
              link: "https://www.smb.museum/en/museums-institutions/pergamonmuseum/exhibitions/detail/mystical-encounters/",
              hall: "Pergamonmuseum",
              category: "Museum",
              countryCode: "de"
            }, {
              country: "Germany",
              title: "Architecture of Antiquity Market Gate of Miletus",
              date: "Permanent",
              thumbnailSrc: "https://www.smb.museum/typo3temp/assets/_processed_/2/7/csm_04_Antike-Architekturen_xl_fcd55ebc6c.jpg",
              detail: "The Pergamonmuseum is home to one of the world\u2019s largest collections of the architecture of antiquity. The Market Gate of Miletus was erected around 100 AD as an opulent gateway between two plazas squares. Measuring almost 29 metres across and 17 metres high, it is the only monument to have been fully re-installed reconstructed in the Pergamonmuseum, and alongside the Pergamon Altar, is the most important monument in the Antikensammlung. In addition to this marble gateway, there are other monuments on exhibit dating to the period between the 1st and 3rd centuries of the Roman Empire AD. They originate from various regions of the Roman Empire, from Italy to Syria. On display are architectural reconstructions, individual architectural components elements (oder: pieces), mosaics and sculptures. These include structural elements and reconstructions of temples in Baalbek (in present-day Lebanon) and Sia (southern Syria), parts of a circular tomb from Falerii (Italy), along with relief friezes and a seated statue of the emperor Trajan, from Rome. A large number of the architectural pieces on exhibit were uncovered more than 100 years ago in the cities of Pergamon and Miletus in Asia Minor, during excavations carried out by the Royal Museums, and acquired for the Berlin museums through partage official division of finds. The same goes for a large mosaic in the centre of the hall, which depicts the musician Orpheus on a rock, surrounded by tamed animals. It once adorned the dining room of a private house in Miletus. Refurbishment and Restoration Work Due to on-going refurbishment and restoration work, only certain sections of the collection of the Pergamonmuseum are currently open to the public. The room of Roman architecture, however, featuring the famous Market Gate of Miletus, remains open.",
              link: "https://www.smb.museum/en/museums-institutions/pergamonmuseum/exhibitions/detail/architecture-of-antiquity/",
              hall: "Pergamonmuseum",
              category: "Museum",
              countryCode: "de"
            }, {
              country: "Germany",
              title: "Dream and Trauma Reopening of the Carpet Rooms in the Museum f\xFCr Islamische Kunst",
              date: "Permanent",
              thumbnailSrc: "https://www.smb.museum/typo3temp/assets/_processed_/6/6/csm_KGM-18811018_Olaf_M_xl_a0b12cc644.jpg",
              detail: "It is impossible to imagine the cultural history of Europe without the carpets and tapestries produced by Islamic cultures. They attest to the continual cultural dialogue between Europe and the Near and Middle East, and form a particular focus in the permanent exhibition of the Museum f\xFCr Islamische Kunst. Through a redesign of the exhibition rooms, these vivid carpets and tapestries now invite guests to experience the origins and history of the collection with all their senses, and to catch a glimpse of current work being carried out on the carpets. The exhibition features some of the oldest pieces in the collection, originating from the estate of the founder of the museum, Wilhelm von Bode. His interest in Islamic art as an independent art form that was equal to that of Europe was the original impetus for this collection, which even today remains a rarity, including carpets and tapestries from present-day Turkey, Iran and the Caucasus. Carpet Fragments from 1945 For the first time, this exhibition displays textiles that were damaged by fire during the hail of bombs that rained down on Berlin in 1945. The destruction of important Persian carpets in that year was a heavy loss for the collection. One of the fragments featured is the Persian carpet from the sixteenth century that in 1904 was assigned the inventory number \u201CI.1\u201D, identifying it as the first work of art in the collection. Another highly characteristic item is the Caucasian dragon rug from the sixteenth century, which exhibits burn damage over its entire length of six metres. A fragrance station with a specially created scent redolent of charred wool, fire bombs and chemicals makes the losses of this era palpable to the visitor. And with models that teach weaving techniques, visitors are able to get a first hand experience of how these fabrics are formed. The measures employed to preserve the carpet and tapestry collection in the post-war era will be juxtaposed with today\u2019s efforts, which conform to the current ethics of conservation and scientific and scholarly demands.",
              link: "https://www.smb.museum/en/museums-institutions/pergamonmuseum/exhibitions/detail/dream-and-trauma/",
              hall: "Pergamonmuseum",
              category: "Museum",
              countryCode: "de"
            }, {
              country: "Germany",
              title: "Islamic Cultures",
              date: "Permanent",
              thumbnailSrc: "https://www.smb.museum/typo3temp/assets/_processed_/c/8/csm_03_ISL_TAMAM_Mschatta_J_xl_88a0bd1ddb.jpg",
              detail: "The Museum f\xFCr Islamische Kunst (Museum for Islamic Art) is situated in the south wing of the Pergamonmuseum. Its permanent exhibition showcases the architecture and material culture of Islamic peoples and societies from the 8th to the 19th century. The works of art originate from the vast area stretching from Spain to India. The collection's main focus is on Western Asia and Egypt. This presentation bring history to life, allowing audiences are able to walk around and through the architecture: the most famous pieces include the stone fa\xE7ade from the caliph\u2019s Mshatta palace (Jordan, ca. 740 AD), the decorative stucco walls from dwellings and palaces in the caliph\u2019s city of Samarra (Iraq, 9th century), prayer niches (Iran, Turkey, 13th century), the wooden ceiling from a domed tower in the Alhambra (Spain, 14th century), and the Aleppo Room, with its vibrantly painted wall panelling (Syria, 1600). There is simply no other collection like it! Together with objects from residential dwellings, palaces and mosques, these items paint a fascinating picture of the remarkable cultures that created them. On display are standout pieces from 1,400 years of ceramics, intricate ivory and wood carvings, elaborately designed vessels made of metal and glass, or (in temporary exhibitions) incredibly detailed miniature paintings and the elegant strokes of Arabic and Persian calligraphy. The artworks are testament to transcultural and multi-religious contexts, as well as products of cultural exchange between regions, something which forms the foundations of our contemporary world. The objects in the collection originate from the legal partage agreements pertaining to archaeological excavations, from acquisitions, and from the trading of luxury objects that was common practice from the Middle Ages on \u2013 as is the case, for example, with the striking carpets and objects in ivory, which have been admired in Europe for centuries. Even if our objects do not come directly from colonial contexts or other forms of unjust acquisition, we thoroughly investigate any question marks about the provenance of the objects.",
              link: "https://www.smb.museum/en/museums-institutions/pergamonmuseum/exhibitions/detail/islamic-cultures/",
              hall: "Pergamonmuseum",
              category: "Museum",
              countryCode: "de"
            }, {
              country: "Germany",
              title: "Quantity and Quality The World of Greek Terracottas",
              date: "07.10.2022 to 02.07.2023",
              thumbnailSrc: "https://www.smb.museum/typo3temp/assets/_processed_/0/3/csm_Antikensammlung-griechischer-Tonfigur_xl_1caa24a53c.jpg",
              detail: "For many centuries, figurines were made of fired clay in ancient Greece and beyond. Until recently, researchers regarded these clay figures as cheap, mass-produced goods of no great significance because of the material used to make them and their small size. And yet, these colourfully painted figures possessed the most startling, lifelike appearance. Today, however, it has been revealed that they always had an important function in ancient daily life. The exhibition Quantity and Quality at the Altes Museum will focus on the contexts in which clay figures were used, and provide new perspectives on this often overlooked medium. In antiquity, clay was one of the most versatile and easiest materials to work with. Figurines made from clay are particularly fascinating because of their bright colours and rich detail, which have often been preserved to a great extent up to this day. Between Mass-Produced Goods and Masterpieces The Antikensammlung is in possession of a large number of often simply designed terracotta objects. With the help of moulds, they could be copied or varied cheaply and easily, which made them affordable for everyday people. But clay figures were also popular among the social elite. This is impressively demonstrated in the figurine known as the Heyl Aphrodite, a true masterpiece of ancient craftsmanship. Diverse Forms \u2013 Diverse Functions? A wide variety of themes were captured in clay, from popular myths to bread baking. Terracotta objects were found in many areas of private and public life: in the household, in temples, and also in graves. To this day, researchers are still intensively investigating the function of, and meanings behind, the clay figures in these contexts. Since most of the objects in the museum come from the art trade and their exact place of discovery is often unknown, they have often been excluded from scholarly debates in the past. The World of Greek Clay Figures This exhibition will present examples of the different contexts in which these clay figures were used in ancient Greek society. Visitors will be able to experience the diversity of ancient terracotta figures across a broad temporal and geographical framework. In addition, the exhibition will look at questions pertaining to the production and reception of this genuine \u201Cmass medium\u201D of antiquity.",
              link: "https://www.smb.museum/en/exhibitions/detail/quantity-and-quality/",
              hall: "Altes Museum",
              category: "Museum",
              countryCode: "de"
            }, {
              country: "Germany",
              title: "Every Day at the Museum Guards Present Their Favourite Works",
              date: "17.06.2022 to 08.01.2023",
              thumbnailSrc: "https://www.smb.museum/typo3temp/assets/_processed_/9/b/csm_Jeden-Tag-im-Museum-GG-2_xl_35d58aa577.jpg",
              detail: "The exhibition intervention \u201EJeden Tag im Museum\u201C (Every Day at the Museum) presents the favourite works of the security staff working at the Kulturforum, in Dahlem, in K\xF6penick and on the Museumsinsel Berlin. Hardly anyone spends as much time with the objects at the museums as the security staff. Day in and day out, they protect the works, welcome visitors and develop quite individual relationships with the collections. Coming from the most diverse backgrounds and with a wide range of interests and experiences, they each have their own emotional, everyday view of the works. These views open multiple perspectives, which we would like to share with you in this presentation. In the comments she made in reference to an ancient statue of a boy, Daniela B\xF6ttcher, head of security at the Altes Museum, stressed: \u201CI\u2019ve always had the feeling that the little boy needs to be taken by the hand and protected.\u201D \u201COil on canvas \u2012 those are just materials. But the artist uses these materials to create a soul\u201D, remarked Gerard Janssen, an employee at the Information counter at the Gem\xE4ldegalerie (Old Master Paintings), while looking at a portrait by Vel\xE1zquez. \u201CIt reminds me of my home, formerly Yugoslavia, because such objects continue to be used there even now\u201D, Amela Jusufovic explained while viewing a Sicilian cart at the Museum Europ\xE4ischer Kulturen (Museum of European Cultures). The presentation allows many visitors to become aware of various personal insights and emotional ties to the works that they would have missed.",
              link: "https://www.smb.museum/en/exhibitions/detail/every-day-at-the-museum/",
              hall: "Altes Museum",
              category: "Museum",
              countryCode: "de"
            }, {
              country: "Germany",
              title: "Ancient Worlds. Greeks, Etruscans and Romans",
              date: "Permanent",
              thumbnailSrc: "https://www.smb.museum/typo3temp/assets/_processed_/7/c/csm_h_70135107_xl_xl_27c45e3fff.jpg",
              detail: "The permanent exhibition of this world-famous collection gives visitors the chance to immerse themselves in the cultural history of the Greeks, Etruscans and Romans. The display \u2013 which is divided up chronologically and thematically \u2013 presents some of the key works of classical art, such as the bronze statue known as the Praying Boy, the so-called Berlin Goddess, and outstanding portraits of Caesar and Cleopatra. The architectural epicentre of the display is formed by the rotunda, designed after the Pantheon in Rome, and adorned with statues of Roman deities. Myth and Everyday Life On the main floor, diverse objects in all media and from all genres explore themes such as the \u201CHeroic Age\u201D in early Greece from 1000 to 700 BC and the world of Greek mythology with its moving and dramatic episodes, but also look at everyday life in the classical metropolis of Athens. The display sheds light on the important role of theatre in Greek culture (something that continues to have an influence today), and on the many facets of life in the cities and in the courts of the rulers in the Hellenic era after Alexander the Great, with the stark social contrasts that characterised this time. Italia Antiqua The upper floor depicts the rise of the civilisation of the Etruscans in Italy. A broad spectrum of objects provides an overview of their urban civilization, their religious beliefs, their international contacts throughout the Mediterranean region, and their highly specialised arts and crafts. This section is followed by the world of the Roman Empire, with the section \u201CLife and Death in Rome\u201D, with a recreation of lavish Roman dwellings in \u201CRoman Villas: A Life of Luxury\u201D. In \u201CRome \u2013 Faces of the Empire\u201D, stone sculptures, portraits on coins, delicate, small-format gem reliefs and painted portraits allow audiences to come face to face with the families of Roman emperors and citizens alike.",
              link: "https://www.smb.museum/en/exhibitions/detail/ancient-worlds-greeks-etruscans-and-romans/",
              hall: "Altes Museum",
              category: "Museum",
              countryCode: "de"
            }, {
              country: "Germany",
              title: "Picasso and his Time",
              date: "Permanent",
              thumbnailSrc: "https://www.smb.museum/typo3temp/assets/_processed_/d/a/csm_Museum_Berggruen-Picasso-Gelber-Pullover_xl_102102d507.jpg",
              detail: "With more than 120 works by Pablo Picasso (1881-1973), the Museum Berggruen provides a sweeping overview of Picasso's career and development as an artist. On display are several key works, such as his famous picture of the seated harlequin from his Rose Period, an impressive detail study for Les Demoiselles d'Avignon, as well as numerous portraits of Dora Maar. The collection also focuses on the work of Paul Klee (1879-1940). Henri Matisse (1869-\xAD1954) and Alberto Giacometti (1901-1966) are also represented, particularly with works from their later periods. And in addition, the museum presents selected works by Georges Braque, Henri Laurens, and Paul C\xE9zanne.",
              link: "https://www.smb.museum/en/exhibitions/detail/picasso-and-his-time/",
              hall: "Museum Berggruen",
              category: "Museum",
              countryCode: "de"
            }, {
              country: "Germany",
              title: "The Permanent Collection at the Museum Ludwig",
              date: "Permanent",
              thumbnailSrc: "https://www.museum-ludwig.de/typo3temp/_processed_/csm_Picasso_Musketier_Sammlungsteaser_1_01_49c32325a5.jpg",
              detail: "The col\xADlec\xADtion at the Mu\xADse\xADum Lud\xADwig can\xADnot be ad\xADe\xADqu\xADate\xADly de\xADscribed with\xADout men\xADtion\xADing the works by the ex\xADcep\xADtio\xADn\xADal artist Pab\xADlo Pi\xADcas\xADso. Thanks to three do\xADna\xADtions from Peter and Irene Lud\xADwig, Cologne is now home to the third-largest Pi\xADcas\xADso col\xADlec\xADtion af\xADter Paris and Barcelo\xADna. This in\xADcludes not on\xADly paint\xADings from all the artist\u2019s cre\xADa\xADtive pe\xADri\xADods such as Har\xADle\xADquin with Fold\xADed Hands (1923) and Wo\xADm\xADan with Ar\xADti\xADchoke (1941), but al\xADso nu\xADmer\xADous ce\xADram\xADics and sculp\xADtures such as the orig\xADi\xADnal plas\xADter casts of the Wo\xADm\xADan with Pram (1950) and the monu\xADmen\xADtal T\xEAte de femme (Do\xADra Maar) (1941). The fact that Pi\xADcas\xADso val\xADued draw\xADing and print\xADmak\xADing so high\xADly within his oeu\xADvre through\xADout his life is al\xADso ap\xADpar\xADent in the col\xADlec\xADtion at the Mu\xADse\xADum Lud\xADwig: it is the on\xADly public in\xADsti\xADtu\xADtion to have all three of the mas\xADter\u2019s ma\xADjor se\xADries of prints: Suite Vol\xADlard (1930\u201337), Suite 345 (1968), and Suite 156 (1970\u201371), along with nu\xADmer\xADous other works on pa\xADper.",
              link: "https://www.museum-ludwig.de/en/museum/collection/the-permanent-collection-at-the-museum-ludwig.html",
              hall: "Museum Ludwig",
              category: "Gallery",
              countryCode: "de"
            }, {
              country: "Germany",
              title: "SUSANNA IMAGES OF A WOMAN FROM THE MIDDLE AGES TO METOO",
              date: "28 Okt 2022 to 26 Feb 2023",
              thumbnailSrc: "https://www.wallraf.museum/fileadmin/user_upload/content/Ausstellungen/2022/2022-10-28-Susanna/Teaser/susanna-teaser-04.jpg",
              detail: "In the first exhibition ever devoted to the biblical figure of Susanna in art, the Wallraf addresses a narrative and pictorial tradition which could hardly be more topical against the backdrop of the MeToo movement. With SUSANNA \u2013 Images of a Woman from the Middle Ages to MeToo, the Cologne Museum demonstrates that the abuse of power and sexual violence has been the subject of painting for centuries: the biblical story of the assault on Susanna by two judges has had a profound influence on art since the Middle Ages. This special exhibition illustrates this with superb works by masters such as Artemisia Gentileschi, Anthony van Dyck, Eug\xE8ne Delacroix, \xC9douard Manet and Lovis Corinth, as well as remarkable pieces by contemporary female artists like Kathleen Gilje, Zoe Leonard and Heike Gallmeier. In a fascinating way SUSANNA traces the diverse interpretations of the biblical narrative, the stylistic preferences, the changing demand in the art market, as well as the rivalry and artistic discourse ignited by the subject of Susanna. The exhibition, which contains over ninety exhibits and includes loans from prestigious international museums and private collections, runs from 28 October 2022 until 26 February 2023 exclusively in Cologne.",
              link: "https://www.wallraf.museum/en/exhibitions/now/2022-10-28-susanna/information/",
              hall: "Wallraf-Richartz Museum",
              category: "Gallery",
              countryCode: "de"
            }, {
              country: "Germany",
              title: "FEMME FATALE",
              date: "09 Dec 2022 - 10 April 2023",
              thumbnailSrc: "https://www.hamburger-kunsthalle.de/sites/default/files/styles/hkh_teaser_wide/public/waterhouse_circe_offering_the_cup_to_odysseus_cmyk_v03_0.jpg?itok=0chT_qeH",
              detail: "The femme fatale is a myth, a projection, a construction. She symbolizes a visually coded female stereotype: the sensual, erotic and seductive woman whose allegedly demonic nature reveals itself in her ability to lure and enchant men \u2013 often leading to fatal results. It is this likewise dazzling and clich\xE9d image, long dominated by a male and binary gaze, that is in the focus of the exhibition \xBBFEMME FATALE. Gaze \u2013 Power \u2013 Gender\xAB at the Hamburger Kunsthalle. Beyond exploring a range of artistic approaches to the theme from the early 19th century to the present, the show aims to critically examine the myth of the femme fatale in its genesis and historical transformation.",
              link: "https://www.hamburger-kunsthalle.de/en/exhibitions/femme-fatale",
              hall: "Hamburg Arts Center",
              category: "Gallery",
              countryCode: "de"
            }, {
              country: "The United Kingdom",
              title: "London before London 450,000 BC \u2013 AD 50",
              date: "Permanent",
              thumbnailSrc: "https://www.museumoflondon.org.uk/application/files/4914/6254/2749/Horsecoincrop.jpg",
              detail: "Discover the story of London before the city was even built London before London explores the rich lives of the people living in the Lower Thames Valley from around 450,000 BC until the creation of the Roman city of Londinium around AD 50.",
              link: "https://www.museumoflondon.org.uk/museum-london/permanent-galleries/london-london",
              hall: "Museum of London",
              category: "Museum",
              countryCode: "gb"
            }, {
              country: "The United Kingdom",
              title: "Roman London AD 50-410",
              date: "Permanent",
              thumbnailSrc: "https://www.museumoflondon.org.uk/application/files/6514/5745/2228/Roman_London.jpg",
              detail: "Discover how Londinium came to life and what daily life was like for Romans in the city 2,000 years ago The Romans built the city where London now stands, bridging the Thames and creating Londinium. From around AD 50 to 410, this was the largest city in Britannia and a vital international port.",
              link: "https://www.museumoflondon.org.uk/museum-london/permanent-galleries/roman-london",
              hall: "Museum of London",
              category: "Museum",
              countryCode: "gb"
            }, {
              country: "The United Kingdom",
              title: "Medieval London AD 410-1558",
              date: "Permanent",
              thumbnailSrc: "https://www.museumoflondon.org.uk/application/files/5414/5564/3440/medieval-london.jpg",
              detail: "From the collapse of the Roman city to the accession of Queen Elizabeth I \u2013 what was life like in Medieval London? Medieval London was destroyed by invaders, racked by famine, fire and disease, and torn apart by religious and political controversy. But it grew to become one of the wealthiest and most important cities in Europe. Discover the story of London in the middle ages through the collections in our Medieval gallery.",
              link: "https://www.museumoflondon.org.uk/museum-london/permanent-galleries/medieval-london",
              hall: "Museum of London",
              category: "Museum",
              countryCode: "gb"
            }, {
              country: "The United Kingdom",
              title: "Dippy Returns: The Nation's Favourite Dinosaur",
              date: "Now open until 2 January 2023",
              thumbnailSrc: "https://www.nhm.ac.uk/content/dam/nhmwww/visit/Exhibitions/dippy-returns/Dippy-Returns-gallery-side-homepage-banner-top.jpg.thumb.1160.1160.jpg",
              detail: "Dippy, the nation's favourite dinosaur, is back for a short visit. Dippy was the first Diplodocus (DIP-low-DOCK-us) to go on display anywhere in the world when it was gifted to the Museum in 1905. It quickly became a star, capturing hearts and imaginations. Dippy then left the Museum in 2017 to complete a whirlwind tour of the UK. Throughout the journey, Dippy witnessed the changing state of nature and how the UK's biodiversity is in sharp decline. Dippy's tour also gave us a much-needed reminder of the joy we can find in our local landscapes - from embracing the quiet of a woodland to noticing birdsong in a busy park. Now you can experience Dippy's memories of nature throughout the UK and see how different communities are connecting with it.",
              link: "https://www.nhm.ac.uk/visit/exhibitions/dippy-returns.html",
              hall: "The Natural History Museum",
              category: "Museum",
              countryCode: "gb"
            }, {
              country: "The United Kingdom",
              title: "Wildlife Photographer of the Year",
              date: "14 October 2022 - 2 July 2023",
              thumbnailSrc: "https://www.nhm.ac.uk/content/dam/nhmwww/visit/Exhibitions/wpy58/Disappearing-giraffe-homepage-banner.jpg.thumb.1160.1160.jpg",
              detail: "Nature like you've never seen it before Discover the natural world in all its wonder and diversity at the newly redesigned Wildlife Photographer of the Year exhibition, where remarkable photographs illustrate the precious beauty of our planet. The redesigned exhibition space positions the photographs among short videos, quotes from jury members and photographers as well as insights from Museum scientists which invite you to explore how human actions continue to shape the natural world. Continue your journey online and discover the planet-positive actions you can take to protect the places and species in the photographs.",
              link: "https://www.nhm.ac.uk/visit/exhibitions/wildlife-photographer-of-the-year.html",
              hall: "The Natural History Museum",
              category: "Museum",
              countryCode: "gb"
            }, {
              country: "The United Kingdom",
              title: "MARIA BARTUSZOV\xC1",
              date: "UNTIL 16 APRIL 2023",
              thumbnailSrc: "https://media.tate.org.uk/aztate-prd-ew-dg-wgtail-st1-ctr-data/images/x73280_gv_04_fvOyz9y.width-680.jpg",
              detail: "Bringing together many works rarely exhibited before in the UK, this survey exhibition will highlight the abstract sculptures of Prague-born Slovak artist Maria Bartuszov\xE1. Bartuszov\xE1 worked over three decades in Ko\u0161ice, the second-largest city in Slovakia. She created around 500 sculptures, from small organic forms to commissions for public spaces as well as works in the landscape, despite restrictions on her artistic life during this period. The exhibition starts in the 1960s, when Bartuszov\xE1 experimented using her own distinctive method of casting plaster by hand. Inspired by playing with her young daughter, she created abstract shapes by pouring plaster into rubber balloons \u2013 her signature material was white plaster, giving the sculptures a fragile quality. She shaped the sculptures by pushing, pulling, or submerging them into water, creating unique and distinct shapes. Some suggest raindrops, seeds or eggs, others the human body. Later, she allowed the balloons to burst, creating delicate works similar to cocoons or nests. In the 1980s, Bartuszov\xE1 frequently photographed her works outdoors to emphasise their close ties to nature. The exhibition will also include a selection of these striking images.",
              link: "https://www.tate.org.uk/whats-on/tate-modern/maria-bartuszova",
              hall: "Tate Modern Museum",
              category: "Gallery",
              countryCode: "gb"
            }, {
              country: "The United Kingdom",
              title: "TURNER COLLECTION",
              date: "Permanent",
              thumbnailSrc: "https://media.tate.org.uk/art/images/work/N/N00/N00476_10.jpg",
              detail: "Tate Britain is home to the largest collection of works by Joseph Mallord William Turner (1775\u20131851). A master of history, landscape and marine painting, he challenged the style of the old masters, trailblazing in technique and subject matter. Described as the \u2018father of modern art\u2019 by John Ruskin, Turner often shocked his contemporaries with his loose brushwork and vibrant colour palette while portraying the development of the modern world unlike any other artist at the time. It is no wonder that Turner became the most celebrated painter in England and that over one hundred and fifty years later, we celebrate contemporary artists of the same innovating spirit through the aptly named Turner Prize. You can discover Turner\u2019s incomparable talent for free in the Clore Gallery. Displaying a selection of our extensive Turner collection, the gallery includes some of his greatest masterpieces such as Self-Portrait, Peace \u2013 Burial at Sea and Norham Castle, Sunrise. Over the course of this year, we\u2019re updating the Tate Britain collection displays. Different galleries will be closed at different times while this takes place. If you'd like to see a favourite work of art, please contact us before you visit. The work will be fully completed in 2023.",
              link: "https://www.tate.org.uk/visit/tate-britain/display/turner-collection",
              hall: "Tate Britain Gallery",
              category: "Gallery",
              countryCode: "gb"
            }, {
              country: "The United Kingdom",
              title: "HENRY MOORE",
              date: "Permanent",
              thumbnailSrc: "https://media.tate.org.uk/art/images/work/N/N05/N05387_10.jpg",
              detail: "This display shows over 30 works across two rooms including film, photographs, maquettes, and drawings shown alongside large-scale sculptures such as Recumbent Figure 1938, the first of Moore\u2019s artworks to enter Tate\u2019s collection in 1939. After emerging in the 1920s as a leading avant-garde figure, Henry Moore\u2019s international status was secured in 1948 when he won first prize at the first Venice Biennale since the war. His work was consistently associated with landscape and nature. The forms seen in his sculptures often derive their shapes from natural objects such as stones, bones and sticks that he found in the countryside, and he saw landscape as the best setting for his sculptures. Over the course of this year, we\u2019re updating the Tate Britain collection displays. Different galleries will be closed at different times while this takes place. If you'd like to see a favourite work of art, please contact us before you visit. The work will be fully completed in 2023.",
              link: "https://www.tate.org.uk/visit/tate-britain/display/henry-moore",
              hall: "Tate Britain Gallery",
              category: "Gallery",
              countryCode: "gb"
            }, {
              country: "France",
              title: "NEW MASTERPIECES. LA DATION MAYA RUIZ-PICASSO",
              date: "16 April to 31 December 2022",
              thumbnailSrc: "https://www.museepicassoparis.fr/sites/default/files/2022-01/Chefs%20d%27oeuvre%20de%20la%20dation_RVB_BAT.jpg",
              detail: "This exhibition celebrates the addition of nine masterpieces to the French national collections \u2013 six paintings, two sculptures and a sketchbook \u2013 via the country\u2019s gifts-in-lieu scheme, which was introduced on 31 December 1968, allowing inheritance tax to be paid in kind. This unique acquisition mode is key to the very identity of Mus\xE9e Picasso, which was founded in 1979 specifically to house the donation made by Pablo Picasso under this system.",
              link: "https://www.museepicassoparis.fr/en/new-masterpieces-la-dation-maya-ruiz-picasso",
              hall: "Mus\xE9e national Picasso-Paris",
              category: "Gallery",
              countryCode: "fr"
            }, {
              country: "France",
              title: "FAITH RINGGOLD",
              date: "31 January to 2 July 2023",
              thumbnailSrc: "https://www.museepicassoparis.fr/sites/default/files/2022-10/Siteweb_PICASSO_MUI_Ringold_V5B.jpg",
              detail: "Faith Ringgold is a major figure in American feminist art, from the civil rights struggles to those of Black Lives Matter, and the author of some very famous works in children\u2019s literature. Her work links the rich heritage of the Harlem Renaissance to the current art of young black American artists. Through her rereadings of modern art history, she engages in a genuine plastic and critical dialogue with the Parisian art scene of the early 20th century, particularly with Picasso and his Demoiselles d\u2019Avignon. This exhibition is the fi rst to bring together, in France, a group of major works by Faith Ringgold. It extends the retrospective devoted to her by the New Museum in early 2022 and is organized in collaboration with this New York institution.",
              link: "https://www.museepicassoparis.fr/en/faith-ringgold",
              hall: "Mus\xE9e national Picasso-Paris",
              category: "Gallery",
              countryCode: "fr"
            }, {
              country: "France",
              title: "The Water Lilies by Claude Monet",
              date: "Permanent",
              thumbnailSrc: "https://cdn.mediatheque.epmoo.fr/link/wvl189jpqvmctnk.jpg",
              detail: "The Nymph\xE9as [Water Lilies] cycle occupied Claude Monet for three decades, from the late 1890s until his death in 1926, at the age of 86. This series was inspired by the water garden that he created at his Giverny estate in Normandy. It resulted in the final great panels donated by Monet to the French State in 1922, and which have been on display at the Mus\xE9e de l\u2019Orangerie since 1927. The word nymph\xE9a comes from the Greek word numph\xE9, meaning nymph, which takes its name from the Classical myth that attributes the birth of the flower to a nymph who was dying of love for Hercules. In fact, it is also a scientific term for a water lily. The famous water lily pond inspired Monet to create a colossal work composed of almost 300 paintings, over 40 of which were large format. Three tapestries were also woven from the Nymph\xE9as paintings, thus affirming the decorative nature of these series.",
              link: "https://www.musee-orangerie.fr/en/node/197502",
              hall: "\u200BMus\xE9e de l'Orangerie",
              category: "Gallery",
              countryCode: "fr"
            }, {
              country: "France",
              title: "Les Arts \xE0 Paris",
              date: "Permanent",
              thumbnailSrc: "https://cdn.mediatheque.epmoo.fr/link/oom189jpqc0wbz4.jpg",
              detail: "The Jean Walter and Paul Guillaume collection was mainly put together by Paul Guillaume, a young passionate French art dealer. From 1914 to his death in 1934, he built up a rich collection of several hundred paintings, from impressionism to modern art, as well as African and Oceanian artworks. He became wealthy and well known, from Europe to the US, and died at the peak of his fame when he was considering opening a museum. After his death, his widow, Domenica, married architect Jean Walter and transformed and reduced the collection, while acquiring new works. When the French state bought the collection at the end of the 1950s, she wanted to name it after her successive husbands. The collection was then displayed in the Mus\xE9e de l'Orangerie. Today, its impressionist works are made up of twenty-five paintings by Renoir, fifteen by C\xE9zanne, one by Gauguin, one by Monet and one by Sisley. As regards the twentieth century, the museum is proud to present twelve works by Picasso, ten by Matisse, five by Modigliani, seven by Marie Laurencin, nine by Henri Rousseau, thirty-one by Derain, ten by Utrillo, twenty-two by Soutine, and one by Van Dongen.",
              link: "https://www.musee-orangerie.fr/en/collection/les-arts-a-paris",
              hall: "Mus\xE9e de l'Orangerie",
              category: "Gallery",
              countryCode: "fr"
            }, {
              country: "France",
              title: "RODIN's Dream of Egypt",
              date: "Octobre 18th 2022 to March 5th 2023",
              thumbnailSrc: "https://www.musee-rodin.fr/sites/default/files/styles/expo/public/2022-09/vertical797x1151_0.jpg?itok=nBrCB4WN",
              detail: "The exhibition features over 400 items, all restored for the occasion, which include Auguste Rodin's personal collection of Egyptian art, his own sculptures and drawings, as well as archives and photographs to put into context his \"friends of the last hour\", as the artist liked to call the antiques he cherished. It also evokes the echo of Egyptian art in Rodin's work, through his research on the representation of the human body, the simplification of forms, fragmentation and monumentality. For instance, the Monument to Balzac (1898) of which he said \"Balzac is the Sphinx of France\". Vue de l'oeuvre",
              link: "https://www.musee-rodin.fr/en/musee/expositions/reve-degypte",
              hall: "Mus\xE9e Rodin",
              category: "Gallery",
              countryCode: "fr"
            }, {
              country: "Egypt",
              title: "Masterpieces Collection",
              date: "permanent",
              thumbnailSrc: "https://www.egyptianmuseumcairo.com/egyptian-museum-cairo/wp-content/uploads/2021/06/egyptian_triad.png",
              detail: "The idea of a museum for Egyptian antiquities in Egypt goes back to Muhammad Ali Pasha, who was viceroy of Egypt from 1805 to 1848. Attempting to put an end to the export of antiquities, he issued a decree on the 15th of August 1835, which resulted in the first Egyptian museum for antiquities in Cairo. Housed in a building near El-Ezbekia Garden, the display was designed by Hakikan Effendi, and the collection was managed by Youssef Diaa Effendi. At the same time, Sheikh Rifa\u2019a al-Tahtawi, who was responsible for the excavation and conservation of Egyptian monuments, also ordered that no further excavations be undertaken without his permission. He announced that the export of artefacts from Egypt was strictly forbidden, and that all finds were to be transported to the El-Ezbekia Museum. In 1851, under the reign of Abbas I, the entire collection was transferred from El-Ezbekia to one of the halls within the Citadel of Salah El-Din (Saladin), where it was accessible only to private visitors. However, in 1854, most of the objects were offered to Austria\u2019s heir to the throne, Archduke Maximilian, who had shown great interest in them during his visit to Egypt. They now represent a major part of the Egyptian collection in the Kunsthistorisches Museum in Vienna.",
              link: "https://www.egyptianmuseumcairo.com/egyptian-museum-cairo/the-collection/",
              hall: "The egyptian museum in cairo",
              category: "Gallery",
              countryCode: "eg"
            }, {
              country: "Japan",
              title: "150th Anniversary Thematic Exhibition Islamic Ceramics from the TNM Collection",
              date: "October 4, 2022 - January 22, 2023",
              thumbnailSrc: "https://www.tnm.jp/uploads/r_exhibition/exhibition/SPECIAL_LARGE_7134.jpg",
              detail: "The term \u201CIslamic ceramics\u201D refers to ceramics created mainly in the areas corresponding to present-day Iran, Iraq, Syria, Egypt, and Turkey from the 7th century. From the 1910s to the 1940s, the Museum acquired rare examples of Islamic ceramics and further enriched its collection through purchases and donations. For the first time ever, this thematic exhibition presents a comprehensive look at the Museum\u2019s collection of Islamic ceramics.",
              link: "https://www.tnm.jp/modules/r_free_page/index.php?id=2548&lang=en",
              hall: "Tokyo National Museum",
              category: "Museum",
              countryCode: "jp"
            }, {
              country: "Japan",
              title: "Future Boy Conan",
              date: "May 28, 2022 to May 2023",
              thumbnailSrc: "https://www.ghibli-museum.jp/en/images/20220404hp_konan_poster.jpg",
              detail: "A new special exhibition, \"Future Boy Conan\", starts on May 28. One of the characteristics of the works of film director Hayao Miyazaki is that \"when you finish watching them, you find yourself a little more energized than before\". Drawn into a vivid world of the protagonist, the film evokes the wishes and longings that are hidden within the viewer. The exhilaration brought about by the boldness of a story set in an unrealistic fictional world, which makes it all the more relaxing and enjoyable, is exactly the source of that rejuvenating energy. Manga films, in which the viewer becomes the protagonist of the story and feels like he or she is fully moving around in an absurd world created by imagination, are the origin and basis of Hayao Miyazaki's work. This aspect is most strongly expressed in Hayao Miyazaki's first directorial debut, the animated television series \"Future Boy Conan\" (1978). This exhibition explores the charm of manga films in the 26 episodes in two galleries, presenting the story, machinery, design materials and imageboards drawn during the creative process to unravel the fascination. The 13-hour-long program is a \"fun and entertaining animation\" made to look like a single movie. We would be delighted if you could experience in the exhibition room the moment when the source of energy turns into a step towards the future.",
              link: "https://www.ghibli-museum.jp/en/exhibitions/#current",
              hall: "Ghibli Museum",
              category: "Gallery",
              countryCode: "jp"
            }, {
              country: "Japan",
              title: "Automobile Pavilion",
              date: "permanent",
              thumbnailSrc: "https://www.tcmit.org/wp-content/uploads/img-car01.jpg",
              detail: "Here at the Automobile Pavilion, Toyota\u2019s automobile manufacturing is shown from various angles. The pavilion floor looks just like a whole automobile factory placed in a huge sports arena. The exhibition consists of four zones: The Initial Period of the Automobile Business, Automobile Development Through the Decades, Automobile Technology, Production Technology, and Who was Kiichiro Toyoda ?. You will see many images, button-operated actual working machines, and cross-cut models, so enjoy yourselves using all your senses by watching the motions and listening to the sounds.",
              link: "https://www.tcmit.org/english/exhibition/car/",
              hall: "Toyota Commemorative Museum of Industry and Technology",
              category: "Museum",
              countryCode: "jp"
            }, {
              country: "Japan",
              title: "Outdoor Sculptures",
              date: "permanent",
              thumbnailSrc: "https://www.hakone-oam.or.jp/mrmm/mediaorg/pagecollection_6_109206515.jpg",
              detail: "The outdoor displays are the Hakone Open-Air Museum\u2019s greatest attraction. Passing through the tunnel at the entrance to the museum grounds, a garden art museum framed by a clear blue sky and the green mountains of Hakone leaps into view as the visitor\u2019s eyes adjust to the sunlight. Sculptures set amid a garden of natural Hakone beauty quietly welcome the visitor to the world of art.",
              link: "https://www.hakone-oam.or.jp/en/permanent/?id=2",
              hall: "THE HAKONE OPEN-AIR MUSEUM",
              category: "Museum",
              countryCode: "jp"
            }, {
              country: "Japan",
              title: "MOA Museum of Art Collection Part III",
              date: "2022.10.28 - 2022.12.11",
              thumbnailSrc: "https://www.moaart.or.jp/en/wp-content/uploads/sites/2/2022/09/20220928468950997377640a818510ab0891a7-e1662213603477.jpeg",
              detail: "The Museum\u2019s collection comprises works of art from Japan, China, and other Asian countries, each exemplary of a significant epoch in art history of Japan. It was formed for the main part by our founder Okada Mokichi (1882-1955) and encompasses a wide range of outstanding artworks of historical significance as well as of aesthetic excellence, ranging from paintings and calligraphic works to sculpture, handicraft, and beyond. The final part of this year-long exhibition program highlights tea utensils, artworks representing the Rinpa school, and Buddhist paintings. Among them are masterpieces with the protected cultural heritage designation, including the Pair of Tea Bowls by Nonomura Ninsei, the illustrated handscroll The Tale of Princess J\u014Druri by Iwasa Matabei, and Mandala of Kichijoten (Srimahadevi), as well as the painting by Ogata K\u014Drin, The Empress Akikonomu. Enjoy a journey into the world of Japanese and East Asian art imbued with elegance and artistic finesse.",
              link: "https://www.moaart.or.jp/en/events/2022tenrankai3/",
              hall: "MOA Museum of Art",
              category: "Museum",
              countryCode: "jp"
            }, {
              country: "New Zealand",
              title: "Gallipoli: The Scale of Our War",
              date: "18 Apr 2015 \u2013 25 Apr 2025",
              thumbnailSrc: "https://www.tepapa.govt.nz/sites/default/files/styles/card_image_700x_525/public/gallipoli-holl-tepapa-800x600.jpg?itok=xYr3-Y9m",
              detail: "Te Papa has joined forces with Weta Workshop to create an exhibition like no other. This ground-breaking exhibition tells the story of the Gallipoli campaign in World War I through the eyes and words of eight ordinary New Zealanders who found themselves in extraordinary circumstances.",
              link: "https://www.tepapa.govt.nz/visit/exhibitions/gallipoli-scale-our-war",
              hall: "Museum of New Zealand Te Papa",
              category: "Museum",
              countryCode: "nz"
            }, {
              country: "New Zealand",
              title: "Te Taiao | Nature",
              date: "permanent",
              thumbnailSrc: "https://www.tepapa.govt.nz/sites/default/files/styles/card_image_700x_525/public/images/cards/taiao-tepapa-800x600.jpg?itok=SI5Vdnzw",
              detail: "I am nature, nature is me You\u2019re the explorer in our Te Taiao Nature exhibition zone. Celebrate Aotearoa New Zealand\u2019s unique natural environment \u2013 and get ready for our future as kaitiaki. M\u0101oriM\u0101tauranga M\u0101ori meets science in these interactive exhibitions about our weird and wonderful wildlife, our shaky land, and the innovative ways we\u2019re protecting our natural taonga.",
              link: "https://www.tepapa.govt.nz/visit/exhibitions/te-taiao-nature",
              hall: "Museum of New Zealand Te Papa",
              category: "Museum",
              countryCode: "nz"
            }, {
              country: "New Zealand",
              title: "NATURE BOY: THE PHOTOGRAPHY OF OLAF PETERSEN",
              date: "OPEN NOW - CLOSES 23 MARCH 2023",
              thumbnailSrc: "https://ajrctguoxo.cloudimg.io/v7/https%3A%2F%2Fwww.aucklandmuseum.com%2Fgetattachment%2Fvisit%2Fexhibitions%2FNature-Boy%2FNature-Boy-Im-Late-600x760.jpg?w=700&org_if_sml=1&ci_url_encoded=1&force_format=webp%2Cjpeg&func=cropfit&gravity=face",
              detail: "Born in Swanson to a Swedish mother and a Danish father, award-winning photographer Olaf Petersen (1915-1994) was one of Aotearoa New Zealand\u2019s finest nature photographers, yet few are familiar with his captivating work. Olaf's minimal photographs draw you into an unchaotic natural world, revealing a profound and comforting beauty. They invite you to embrace the simplicity of this beauty, but in doing so pose questions about its fragility. Nature Boy\u202Ffeatures his very best competition prints, with 60\u202Fextraordinary images Olaf captured between the 1930s and 1980s. These images show his love and regard for nature \u2013 from the\u202Fbirds, sea, trees and wind-rippled sand of Auckland\u2019s west coast beaches, to the flora, fauna and landscapes of the Hauraki Gulf and beyond.",
              link: "https://www.aucklandmuseum.com/visit/exhibitions/nature-boy",
              hall: " Museum of Auckland",
              category: "Gallery",
              countryCode: "nz"
            }, {
              country: "New Zealand",
              title: "150 immaculate cars from more than 100 years of motoring",
              date: "permanent",
              thumbnailSrc: "https://nelsonclassiccarmuseum.nz/wp-content/uploads/2021/10/little-engine-eatery-2.jpg",
              detail: "150 immaculate cars from more than 100 years of motoring Nelson Classic Car Museum (NCCM) is the best place to see more than 150 cars in immaculate condition. From our little 1908 Renault AX, to classics of the 1950s including Vauxhalls, Triumphs and Cadillacs, through to the exquisite mastery of Jaguar and Ferrari, our Museum is the place to marvel and admire an incredible collection of iconic cars. Come and relive your own memories of your grandad\u2019s car, your first car and your dream car!",
              link: "https://nelsonclassiccarmuseum.nz/",
              hall: "Nelson classiccar museum",
              category: "Museum",
              countryCode: "nz"
            }, {
              country: "Italia",
              title: "La predella degli Uffizi salvata al Castello di Montegufoni",
              date: "14/05/2022 to 08/01/2023",
              thumbnailSrc: "https://images.uffizi.it/production/attachments/1654086827850241/FOTO-TERRE.jpg?ixlib=rails-2.1.3&w=780&h=926&fit=crop&crop=center&fm=pjpg&auto=compress",
              detail: "The Terre degli Uffizi project is making a halt at the Museo di Arte Sacra in the Valdelsa. Adjacent to the church of San Piero in Mercato, the museum was establishd in the 1990s to host works of art from churches in the neighbourhood no longer considered safe against theft and damage. Protecting works of art is also the link between Montespertoli and the Gallerie degli Uffizi\u2019s panel depicting Christ the Man of Sorrows and Stories from the Life of St. Peter Martyr. During World War II, from 1942 to 1945, a large part of the art collections from Florence\u2019s museums were held for safety in the Castle of Montegufoni in Montespertoli and other places considered sufficiently safe such as the Eremo di Camaldoli or the Castle of Poppi. Montegufoni\u2019s illustrious guests included such masterpieces as Cimabue\u2019s and Giotto\u2019s two versions of the Maest\xE0, Paolo Uccello\u2019s Battle of San Romano and Botticelli\u2019s Spring. The return to Montespertoli of the Gallerie degli Uffizi predella, a 15th century Florentine work close in type and cultural background to various paintings in the Museo di Arte Sacra, is a tribute to the area and to the memory of all those who helped safeguard our art heritage during the war, in the sincere hope that such circumstances never arise again.",
              link: "https://www.uffizi.it/en/events/montespertoli-exhibition2022",
              hall: "Galleria degli Uffizi",
              category: "Gallery",
              countryCode: "it"
            }, {
              country: "Italia",
              title: "Masaccio and Fra Angelico. A dialogue on truth in painting",
              date: "17/09/2022 to 15/01/2023",
              thumbnailSrc: "https://images.uffizi.it/production/attachments/1663318085335797/PREV.jpg?ixlib=rails-2.1.3&w=780&h=926&fit=crop&crop=center&fm=pjpg&auto=compress",
              detail: "A new exhibition pays tribute to the great painter Masaccio (1401\u201328) in the city of his birth, Castel San Giovanni, in a dialogue with another leading light of Renaissance art, Fra Angelico (c. 1395\u20131455). The exhibition, in two venues \u2013 the Museo delle Terre Nuove and the Museo della Basilica di Santa Maria delle Grazie \u2013 showcases a selection of works of art designed to allow visitors to explore the innovations that Masaccio and Fra Angelico brought to art history, juxtaposing them with the work of other artists close to them and highlighting their link with the city and the region. The Museo Terre Nuove hosts a selection of paintings depicting the Madonna and Child by Masolino, Masaccio, and his brother, Giovanni di Ser Giovanni, known as Scheggia, in addition to a polychromed stucco relief attributed to the workshop of Lorenzo Ghiberti. These works are accompanied by an exploration of the personalities of Masaccio\u2019s brother-in-law Mariotto di Cristofano and Andrea di Giusto Manzini, Masaccio\u2019s assistant, who was also open to the work of Fra Angelico. Fra Angelico is the star of the section of the exhibition in the Museo della Basilica showcasing magnificent paintings by this Dominican friar from both public and private collections and devoting a special focus to the theme of the Annunciation.",
              link: "https://www.uffizi.it/en/events/masaccio-angelico-en",
              hall: "Galleria degli Uffizi",
              category: "Gallery",
              countryCode: "it"
            }, {
              country: "Italia",
              title: "Jacopo Vignali and Uffizi Galleries in San Casciano Val di Pesa",
              date: "01/10/2022 to 08/01/2023",
              thumbnailSrc: "https://images.uffizi.it/production/attachments/1664541813441842/Flautista.jpg?ixlib=rails-2.1.3&w=780&h=926&fit=crop&crop=center&fm=pjpg&auto=compress",
              detail: "From the Uffizi Galleries, paintings by Jacopo Vignali (1594-1664) go on display in San Casciano in memory of the art historian Carlo Del Bravo. He  was the first scholar that owned a large collection recently donated precisely to the Uffizi Galleries. From this important acquisition, for which credit is due to Del Bravo's heir, Professor Lorenzo Gnocchi, the exhibition at the Giuliano Ghelli Museum was born.",
              link: "https://www.uffizi.it/en/events/jacopo-vignali-and-uffizi-galleries-in-san-casciano-val-di-pesa",
              hall: "Galleria degli Uffizi",
              category: "Gallery",
              countryCode: "it"
            }, {
              country: "Italia",
              title: "Borghese gallery Collection",
              date: "permanent",
              thumbnailSrc: "https://borghese.gallery/wp-content/uploads/portrait-of-young-woman-with-unicorn.jpg.webp",
              detail: "The gallery is best-known for its collection of Bernini statues on the ground floor, including Apollo and Daphne, David, the Rape of Proserpina and Aeneas, Anchises & Ascanius. There are also numerous paintings by Caravaggio, Raphael, Titian, and Rubens.",
              link: "https://borghese.gallery/collection/",
              hall: "Borghese GALLERY",
              category: "Gallery",
              countryCode: "it"
            }, {
              country: "Italia",
              title: "The collection of Galleria dell\u2019Accademia di Firenze",
              date: "permanent",
              thumbnailSrc: "https://www.galleriaaccademiafirenze.it/wp-content/uploads/2021/03/DAVID_profilo_0166_7-768x577.jpg",
              detail: "The Galleria dell\u2019Accademia di Firenze\u2019s collection of gold ground paintings from the 13th century to the early 15th is particularly important, preserving works by the greatest Florentine artists from that period, including the Master of the Magdalene, Giotto, the Master of the St Cecilia, Bernardo Daddi, Taddeo Gaddi, Andrea Orcagna, Nardo di Cione, Giovanni da Milano and Agnolo Gaddi. The section of 15th-century painting is just as rich, representing both late-Gothic and Renaissance painting, currents that circulated in parallel in Florence during the first thirty years of the century. Standing out among the late-Gothic works is an important group of works by Lorenzo Monaco. Whereas Renaissance painting is represented by Paolo Uccello, Sandro Botticelli, Domenico Ghirlandaio and Filippino Lippi. Next come the collections of 16th-century painting, with masterpieces by Fra\u2019 Bartolomeo, Andrea del Sarto and Pontormo, whose painting engages with Michelangelo\u2019s sculpture from the same period, and then the great altarpieces from between the 16th and 17th centuries, which trace the development of Florentine painting from the influence of Michelangelo to the new spirituality of the Counter Reformation. In the Gipsoteca, there is an important collection of paintings by 19th-century artists who studied or taught at the Accademia di Belle Arti.",
              link: "https://www.galleriaaccademiafirenze.it/en/collections/",
              hall: "Galleria dell'Accademia di Firenze",
              category: "Gallery",
              countryCode: "it"
            }, {
              country: "Italia",
              title: "Pio Clementino Museum",
              date: "permanent",
              thumbnailSrc: "https://www.museivaticani.va/content/dam/museivaticani/immagini/collezioni/musei/museo_pio_clementino/02_03_laocoonte_Dettaglio.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
              detail: "The nucleus of the pontifical collections of classical sculpture dates back to the original collection of pope Julius II (1503-1513) which was housed in the Cortile delle Statue (today the Octagonal Court). During the second half of the 18th century the pontifical collections were enormously expanded both as a result of excavations being carried out in Rome and Lazio, and by donations from collectors and antiquaries. The influence of Enlightenment thinking resulted in the inauguration of a museum in the modern sense, open to the public and explicitly charged with the task of safeguarding antique works of art, and promoting the study and understanding of them. The Museum is called Pio Clementino after the two popes who oversaw its foundation, Clement XIV Ganganelli (1769-1774) and Pius VI Braschi (1775-1799). The museum fills several large exhibition halls which were obtained by adapting pre-existing rooms with new constructions both within and adjacent to the small Belvedere Palace of Innocent VIII (1484-92). Antique sculpture was brought here and ancient roman pieces have often had their missing parts completely restored. The neo-classical architecture was realised under the direction of Alessandro Dori, Michelangelo Simonetti, and Giuseppe Camporese and embellished by the work of a large number of painters and decorators. With the Treaty of Tolentino (1797) the Papal States were forced to give up the principal masterpieces in the Museum to Napoleon and they were transported to Paris. Much later, following the defeat of Napoleon and the Congress of Vienna (1815), and thanks to the diplomatic efforts of Antonio Canova, the greater part of the works were recovered.",
              link: "https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/museo-pio-clementino.html",
              hall: "Vatican Museums",
              category: "Museum",
              countryCode: "it"
            }, {
              country: "Italia",
              title: "Edmondo Bacci: Energy and Light",
              date: "1 Apr 2022 \u2013 18 Sep 2023",
              thumbnailSrc: "https://www.guggenheim-venice.it/site/assets/files/3913/bacci_avvenimento247.640x0.jpg",
              detail: "The Venetian Edmondo Bacci (1913\u20131978) was one of the few Italian artists to achieve broad success during his lifetime and to exhibit in the most important Italian and international galleries and museums. The quality of his work drew the attention of critics and collectors, such as Peggy Guggenheim, who enlivened the vibrant city of Venice in the 1950s. Bacci belonged to the small circle of the finest representatives of Venetian art, which included Tancredi Parmeggiani and Emilio Vedova, who both achieved international success and acclaim at the time. This exhibition will pay tribute to the artist by focusing on the 1950s, the most lyrical and successful decade of his work, along with Venice, his place of birth and his inspiration, as its setting.",
              link: "https://www.guggenheim-venice.it/en/whats-on/exhibitions/edmondo-bacci/",
              hall: "Peggy Guggenheim Museum",
              category: "Gallery",
              countryCode: "it"
            }, {
              country: "Korea",
              title: "Arario collection",
              date: "permanent",
              thumbnailSrc: "http://www.arariomuseum.org/images/exhibition/cinema/0.jpg",
              detail: "<ARARIO COLLECTION> is the inaugural exhibition of ARARIO MUSEUM JEJU, which introduces the ARARIO collection. The fateful encounter of an individual and artworks led to the formation of the ARARIO collection, and this contributed to the openings of the ARARIO MUSEUM in SPACE located in Seoul, and the ARARIO MUSEUMs in Jeju Island. The harmonization of the buildings, used for various purposes located in Tapdong and Dongmun in the old city of Jeju, with contemporary works of art shows how destiny can exist within artworks and spaces. In this exhibition, while preserving the original building, contemporary works of art from both the East and the West bearing various social and cultural values will be exhibited in spaces over 8 meters large to small rooms located in the corners of the building. The viewers will be able to encounter art throughout the museum and discover the newly transformed Jeju. We hope that <ARARIO COLLECTION> will be the beginning of a fateful meeting of the ARARIO MUSEUM and the viewers.",
              link: "http://www.arariomuseum.org/exhibition/#/cinema.php",
              hall: "Jeju Arario Museum",
              category: "Gallery",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "Romantic Days",
              date: "2022.03.16 ~ 2022.11.27",
              thumbnailSrc: "https://cdn.daelimmuseum.org/Program/Exhibition/List/A/202210/20221011113926107001.png",
              detail: "Romantic Days is a special exhibition celebrating D MUSEUM's move near Seoul Forest, and is the very first exhibition of the museum in its new location.The show illuminates seven universal themes from love and emotions throughover 300 works by a total of 23 artists, including the renowned comic artistsrepresenting K-content, photographers born in the 1980's and 1990's,whose works capture emotional sentiments of private moments, and illustratorsbeloved by internationally acclaimed brands.",
              link: "https://www.daelimmuseum.org/exhibition/current/PRG202202230001",
              hall: "Daerim Museum",
              category: "Gallery",
              countryCode: "kr"
            }, {
              country: "Argentina",
              title: "Colecci\xF3n Llullaillaco",
              date: "Permanent",
              thumbnailSrc: "https://www.maam.gob.ar/coleccionesUpload/1-Estatuilla-Doncella-04-LFM2676.jpg",
              detail: "La colecci\xF3n inicial del Museo de Arqueolog\xEDa de Alta Monta\xF1a se origina a partir de los hallazgos realizados por una expedici\xF3n cient\xEDfica que, en el mes de marzo de 1999, ascendi\xF3 al volc\xE1n Llullaillaco, ubicado en el Departamento Los Andes, Salta, Argentina. En esa expedici\xF3n, se produjo el descubrimiento de tres ni\xF1os junto a un importante ajuar, compuesto por elementos confeccionados en distintos materiales que fueron ofrendados a los dioses en el contexto de la ceremonia incaica conocida como Capacocha.",
              link: "https://www.maam.gob.ar/colecciones/coleccion-llullaillaco",
              hall: "Museo de Arqueolog\xEDa de Alta Montana",
              category: "Museum",
              countryCode: "ar"
            }, {
              country: "Argentina",
              title: "Colecci\xF3n Reina del Cerro",
              date: "Permanent",
              thumbnailSrc: "https://www.maam.gob.ar/coleccionesUpload/2-LFM3026.jpg",
              detail: "En la d\xE9cada de 1920 se obtuvieron los primeros datos de un santuario o adoratorio de altura en el nevado de Chuscha a unos 5.468 metros de altura en cercan\xEDas de la serran\xEDa de Caj\xF3n o Quilmes, ubicado en el departamento de Cafayate, al sur de la provincia de Salta. Es aqu\xED en donde los lugare\xF1os, encuentran y extraen mediante el uso de dinamita, la ofrenda de una ni\xF1a en un posible contexto de Capacocha. A partir de ese momento, y hasta su llegada al MAAM, el cuerpo y los objetos que lo acompa\xF1aban sufrieron una serie de eventualidades a lo largo de 82 a\xF1os.",
              link: "https://www.maam.gob.ar/colecciones/coleccion-reina-del-cerro",
              hall: "Museo de Arqueolog\xEDa de Alta Montana",
              category: "Museum",
              countryCode: "ar"
            }, {
              country: "Argentina",
              title: "Colecci\xF3n Teruel",
              date: "Permanent",
              thumbnailSrc: "https://www.maam.gob.ar/coleccionesUpload/3-DSC5259.jpg",
              detail: "Parte de esta colecci\xF3n arqueol\xF3gica se encuentra en las salas temporales del museo, compuesta por piezas cer\xE1micas, objetos de calabazas, l\xEDticos, cuentas de collar, pinzas y restos \xF3seos. Fue donada al Museo de Arqueolog\xEDa de Alta Monta\xF1a por la familia Teruel en el a\xF1o 2005, y a trav\xE9s de sus relatos se pudo constatar que en la d\xE9cada de 1980 la propiedad pertenec\xEDa a  Humberto Hedro Teruel, quien junto a Rodolfo Bravo realizaron excavaciones en un contexto arqueol\xF3gico correspondiente probablemente a una tumba. La misma se ubicaba sobre una lomada de la finca Bella Brisa ubicada en el paraje Corralito, departamento San Carlos (Valle Calchaqu\xED sur) Salta, donde se observaba un c\xEDrculo de rocas del cual se obtuvieron los objetos asociados a restos esqueletarios de un individuo.",
              link: "https://www.maam.gob.ar/colecciones/coleccion-teruel",
              hall: "Museo de Arqueolog\xEDa de Alta Montana",
              category: "Museum",
              countryCode: "ar"
            }, {
              country: "Argentina",
              title: "Colecci\xF3n Museo de Arte de Tigre",
              date: "Permanent",
              thumbnailSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Panorama_Tigre.jpg/1200px-Panorama_Tigre.jpg",
              detail: "19th and 20th century Argentine art",
              link: "http://mat.gob.ar/coleccion/",
              hall: "Museo de arte Tigre",
              category: "Gallery",
              countryCode: "ar"
            }, {
              country: "Argentina",
              title: "TIEMPO DE REVOLUCI\xD3N",
              date: "Permanent",
              thumbnailSrc: "https://museohistoriconacional.cultura.gob.ar/media/uploads/site-6/multimedia/f1390_a-_toma-_27.jpg",
              detail: "A series of  objects and images of the crucial period that goes from 1808 to 1824 in the R\xEDo de la Plata is presented . Special attention is paid to changing the symbols: the Napoleonic eagles, the Hispanic lion, the blue and white flag, the cap of freedom and the Inca sun. You can also see very outstanding pieces such as the petition of May 25, 1810, the coat of arms of the Assembly of the Year XIII, the regulation of freedmen of 1813, the impressive Tarja de Potos\xED, the inkwell with which independence was signed in Tucum\xE1n and objects linked to the participation of different social sectors in the revolution.",
              link: "https://museohistoriconacional.cultura.gob.ar/exhibicion/apertura-tiempo-de-revolucion/",
              hall: "Museo Hist\xF3rico Nacional",
              category: "Museum",
              countryCode: "ar"
            }, {
              country: "Argentina",
              title: "Colecci\xF3n digital del Bellas Artes",
              date: "Permanent",
              thumbnailSrc: "https://www.bellasartes.gob.ar/media/thumbs/uploads/coleccion/tO7sGkw4LM4T.jpg",
              detail: "Explore our digital collection with more than 2,500 works where you will find high definition images, texts, audios and suggested routes.",
              link: "https://www.bellasartes.gob.ar/coleccion/",
              hall: "Museo Nacional de Bellas Artes",
              category: "Gallery",
              countryCode: "ar"
            }, {
              country: "China",
              title: "Ancient China",
              date: "permanent",
              thumbnailSrc: "http://en.chnmuseum.cn/exhibition/current_exhibitions_648/201911/P020191128540240516748.jpg",
              detail: "Ancient China is a permanent exhibition of the National Museum of China. Following the dynastic sequence, it charts Chinese history over eight periods from prehistoric times to the Ming and Qing dynasties. On display are priceless objects that present a comprehensive review of the nation\u2019s political, economic, cultural and social development as well as China's foreign relations in different historical periods. The exhibition focuses on the continuous progress of Chinese civilization and the historical course of building a multiethnic country. It also illustrates the Chinese people's outstanding achievements and their contributions to human civilization.",
              link: "http://en.chnmuseum.cn/exhibition/current_exhibitions_648/201911/t20191127_174983.html",
              hall: "National Museum of China",
              category: "Museum",
              countryCode: "cn"
            }, {
              country: "Finland",
              title: "Stereoscopic Sunset",
              date: "permanent",
              thumbnailSrc: "https://www.valokuvataiteenmuseo.fi/sites/default/files/collection-picks/neuscheller_sunset.jpg",
              detail: "These two colour slides from June 1911 should be viewed through a stereoscope, with which they would merge together into one image with an illusion of depth: an early 3D photograph. It is one of the earliest colour photographs of the natural shades of the evening sky painted by the last rays of sunlight - a subject we still struggle to accurately photograph today, after nearly 110 years of constantly advancing photographic technologies.",
              link: "https://www.valokuvataiteenmuseo.fi/en/collections/stereoscopic-sunset",
              hall: "Museum of Photography",
              category: "Gallery",
              countryCode: "fi"
            }, {
              country: "Finland",
              title: "A holiday in Mongolia",
              date: "permanent",
              thumbnailSrc: "https://www.valokuvataiteenmuseo.fi/sites/default/files/styles/cols_4_crop/public/pages/2016-11/palsi_otshir-boo.jpg?itok=YkTC8mts",
              detail: "The linguist G.J. Ramstedt and the archaeologist Sakari P\xE4lsi (1882\u20131965) made an expedition to Mongolia in 1909. A gifted amateur photographer, P\xE4lsi was there not only as an archaeologist, but also in the capacity of photographer. He recorded the actual subjects of the archaeological research done on the journey, while also photographing the steppe landscapes and local people, and the life of the nation in squares and monasteries. You can read about the meeting with the shaman Otshir-b\xF6\xF6 in P\xE4lsi\u2019s book Mongolian matkalta (from a journey to Mongolia) 1911.",
              link: "https://www.valokuvataiteenmuseo.fi/en/collections/holiday-mongolia",
              hall: "Museum of Photography",
              category: "Gallery",
              countryCode: "fi"
            }, {
              country: "Finland",
              title: "Penelope Umbrico: Learning from eBay",
              date: "14.10.2022\u20135.2.2023",
              thumbnailSrc: "https://www.valokuvataiteenmuseo.fi/sites/default/files/styles/cols_2_crop/public/exhibitions/2022-10/umbrico_nosto_3.jpg?itok=KGBeWuu2",
              detail: "Penelope Umbrico (b. 1957) is an American artist who works with photographs found on the Internet. Her installations present a clever and playful way to examine the enormous production and consumption of photographs in the 2020s. Umbrico ventures into the virtual world of online marketplaces. Tori.fi, eBay and Craigslist are popular marketplaces from which the artist uses images in her installations. Although millions of photographs are uploaded daily on these sites, they are rarely seen as anything but a tool for business between a seller and a buyer. However, the inadvertent treasure trove of human activity found in the images turn these websites into useful photo archives. Umbrico presents these archives as a collective cultural self-portrait.",
              link: "https://www.valokuvataiteenmuseo.fi/en/exhibitions/learning-ebay",
              hall: "Museum of Photography",
              category: "Gallery",
              countryCode: "fi"
            }, {
              country: "Finland",
              title: "Jonne Heinonen:Rom",
              date: "11.11.2022\u20138.1.2023",
              thumbnailSrc: "https://www.valokuvataiteenmuseo.fi/sites/default/files/styles/cols_2_crop/public/exhibitions/2022-08/neljanjengi_copy_nosto.jpg?itok=21AQCdce",
              detail: "Rom is a photography project by Jonne Heinonen, created over seven years amongst Roma communities in Finland. The exhibition hosted at the Finnish Museum of Photography includes a selection of images from the extensive project, shot by Heinonen on his visits to Roma homes and gatherings around Finland. The exhibition addresses the culture and everyday life of Finnish Roma from the perspective of an artist outside the community.",
              link: "https://www.valokuvataiteenmuseo.fi/en/exhibitions/rom",
              hall: "Museum of Photography",
              category: "Gallery",
              countryCode: "fi"
            }, {
              country: "Finland",
              title: "Uusi aika",
              date: "permanent",
              thumbnailSrc: "http://uusiaika.kokoelma.fi/images/sisalto_ylakuvat.png",
              detail: "Test your knowledge of design. Finnish design achieved world renown at the Milan Triennials of the early 1950s. \u201DA New Age\u201D is a web exhibition listing the main designers, manufacturers and products of the so-called golden age of Finnish design of the 1950s and 1960s.",
              link: "http://uusiaika.kokoelma.fi/index.aspx",
              hall: "Design Museum",
              category: "Museum",
              countryCode: "fi"
            }, {
              country: "Finland",
              title: "Viggo Wallensk\xF6ld",
              date: "Until 12.3.2023",
              thumbnailSrc: "https://www.hamhelsinki.fi/wp-content/uploads/2022/06/2018_15-3-800x1019.jpg",
              detail: "Viggo Wallensk\xF6ld\u2019s (born 1969) works often depict individuals who are physically different or deviant in their essence. The characters are a blend of different ages, genders, historical eras, social classes, and even machines or gravestones. The fictional characters have something familiar to them, but also something extraordinary and peculiar. Above all, in his works Wallensk\xF6ld demonstrates human understanding and acceptance of experiences of being different and feeling like an outsider. The unique and occasionally mournful figures are treated by the artist with compassion and dignity.",
              link: "https://www.hamhelsinki.fi/en/exhibition/viggo-wallenskold/",
              hall: "Helsinki Art Museum",
              category: "Gallery",
              countryCode: "fi"
            }, {
              country: "Finland",
              title: "Tove Jansson",
              date: "23.11.2019-31.12.2022",
              thumbnailSrc: "https://www.hamhelsinki.fi/wp-content/uploads/2019/11/Prolles_arkiv-31-Edit-931x1024.jpg",
              detail: "The works of Tove Jansson (1914\u20132001) are among the most cherished pieces in the HAM collection. HAM has dedicated some of its galleries to an exhibition of the artist\u2019s life and works. In the gallery\u2019s new hanging, Tove Jansson\u2019s frescoes Party in the City (1947) and Party in the Country (1947) are joined by 13 photographs from Per Olov Jansson and excerpts from the documentary film Haru, Island of the Solitary. The film includes Super 8 footage shot by Tove Jansson and Tuulikki Pietil\xE4 during the summers that they spent together on the island of Klovharu. Additionally, a copy of one of Tove Jansson\u2019s sea-themed paintings is recreated on one of the gallery\u2019s walls. Tove Jansson spent nearly all the summers of her life in the Pellinki archipelago, which is located approximately 50 kilometres from Helsinki. The Jansson family had a rental cottage there and later a more permanent place on the island of Bredsk\xE4r, where Jansson and her brother Lars built a cabin. From the 1960s to the early 1990s, Jansson spent her summers on the island of Klovharu with her partner, graphic artist Tuulikki Pietil\xE4.",
              link: "https://www.hamhelsinki.fi/en/exhibition/tove-jansson/",
              hall: "Helsinki Art Museum",
              category: "Gallery",
              countryCode: "fi"
            }, {
              country: "Finland",
              title: "Moomin art",
              date: "permanent",
              thumbnailSrc: "https://tms.production.geniem.io/uploads/sites/13/2021/12/835ea460-m-131-1000px-valkop-web.jpg",
              detail: "The Moomin Museum is an experiential art museum that takes visitors of all ages on an imaginary journey to Moominvalley. Our magical exhibition presents original Moomin illustrations donated by Tove Jansson in 1986, featuring the maritime adventures of her iconic cavalcade of loveable characters. Rounding out the exhibition is a selection of action-packed three-dimensional tableaux crafted by Tove\u2019s partner, the graphic artist Tuulikki Pietil\xE4. Allow at least an hour or two for your visit\u2026 and come back soon, as there\u2019s always something new to see and do at our museum.",
              link: "https://www.muumimuseo.fi/en/exhibitions-and-events/moomin-art/",
              hall: "Moomin Museum",
              category: "Gallery",
              countryCode: "fi"
            }, {
              country: "Finland",
              title: "From Tove\u2019s bookshelf",
              date: "21.5.2022 \u2013 12.3.2023",
              thumbnailSrc: "https://www.muumimuseo.fi/uploads/sites/13/2022/07/024b3746-highres_moumine_le_troll-omistuspiirros.jpg",
              detail: "We know the Moomin books, but what did their writer read? This exhibition visits the bookshelves of the artist-writer Tove Jansson (1914\u20132001) and wonders what a private library says about its owner. Alongside her illustration collection, Tove Jansson donated hundreds of Moomin books to the Tampere Art Museum, including several different language editions. In 1989, Jansson gifted 410 children\u2019s books, research books on literature and illustration to the Children\u2019s Book Institute. This donation also included adventure books belonging to Jansson\u2019s partner, the artist Tuulikki Pietil\xE4 (1917\u20132009).",
              link: "https://www.muumimuseo.fi/en/exhibitions-and-events/temporary-exhibitions/now/",
              hall: "Moomin Museum",
              category: "Gallery",
              countryCode: "fi"
            }, {
              country: "Finland",
              title: "The Suomenlinna Toy Museum",
              date: "permanent",
              thumbnailSrc: "https://lelumuseo.fi/nuevo/wp-content/uploads/2020/07/motorcycling-tintoys-toymuseum-Suomenlinna-Helsinki-1.jpg",
              detail: "The identity of the Suomenlinna Toy Museum is to be an old timey collection museum: here the visitor gets to admire the beautiful and extraordinary artefacts, wonder at the changing times and reflect on their grandparents\u2019 lives. This is not a playground or a children\u2019s culture centre, those you can find in Helsinki City Museum and Espoo. Our target group is nostalgics, hungry for the romance of bygone times, irrespective of age or gender. The Toy Museum was started by an artist and antique dealer Piippa Tandefelt, and is now being continued by her daughter Petra Tandefelt since 2003. The collection, like the museum, is private and 100% self-sufficient.",
              link: "https://lelumuseo.fi/en/the-toy-museum-today/",
              hall: "Suomenlinna Toy Museum",
              category: "Museum",
              countryCode: "fi"
            }, {
              country: "Finland",
              title: "Akseli Gallen-Kallela",
              date: "2.12.2022 - 2.4.2023",
              thumbnailSrc: "https://www.kansallismuseo.fi/imager/general/Kansallismuseo/350217/KM_AGK_2000x1000px_1283c379c3d79487f28296ceb66de355.jpg",
              detail: "The exhibition features some of the most well-known works by Gallen-Kallela: Themes from the Kalevala, works depicting Finnish nature and people as well as paintings from the artist\u2019s many trips. Visitors can learn more about the artist passionate about exploring new techniques, who also created prints, designed medals, textiles, and furniture, and who also worked as an architect. In addition to the frescos, which were his final major works, early drawings by the young Gall\xE9n, suffering from wanderlust, are also exhibited at the National Museum.",
              link: "https://www.kansallismuseo.fi/en/exhibitions/akseli-gallen-kallela",
              hall: "The National Museum of Finland",
              category: "Gallery",
              countryCode: "fi"
            }, {
              country: "Finland",
              title: "Otherland",
              date: "permanent",
              thumbnailSrc: "https://www.kansallismuseo.fi/imager/general/Kansallismuseo/115396/2021_KM_toistamaata_1283c379c3d79487f28296ceb66de355.jpg",
              detail: "The exhibition \u2018Otherland\u2019, opening in the National Museum in Helsinki in the spring 2021, is an independent exhibition on its own but it also completes the otherwise updated permanent exhibition and has a connection to the other two parts of it, namely the Prehistory and the Story of Finland. The Otherland exhibition depicts an era when Finland did not yet exist as a nation. Otherland describes how the idea of being Finnish was born \u2013 and how it was constructed. This exhibition is about people and changes, and it shows the region\u2019s international and diverse past from the 11th century through the times of Swedish and Russian rule up to the early days of Finland\u2019s independence. The exhibition focuses on three main aspects: Humanity, Faith and We as Part of the World.",
              link: "https://www.kansallismuseo.fi/en/exhibitions/otherland",
              hall: "The National Museum of Finland",
              category: "Museum",
              countryCode: "fi"
            }, {
              country: "Finland",
              title: "Story of Finland",
              date: "permanent",
              thumbnailSrc: "https://www.kansallismuseo.fi/imager/general/157814/KM_Suomen_Tarina_2000x1000_1283c379c3d79487f28296ceb66de355.jpg",
              detail: "Never before has the story of Finland\u2019s independent years been told in such a touching way. The exhibition will play at the heartstrings of both Finns and visitors from abroad. It has been put together by film director Juho Kuosmanen, cultural multitalent Kaarina Hazard, historian Teemu Keskisarja and set designer Kari Kankaanp\xE4\xE4, to name a few. Finland\u2019s recent history is a mingling of light and deep shadows. The exhibition takes a bold new look at the wounds left by wars and the struggle for independence. But it also brims with joy for the 100-year-old Finland, which has managed to grow into a country of democracy, equality and wellbeing, and pokes loving fun at the nation\u2019s little peculiarities \u2013 Finns are a weird but happy bunch! We are a people who love the Moomins, the Ball Chair, children\u2019s waterproof overalls, heavy metal music and sauna.",
              link: "https://www.kansallismuseo.fi/en/exhibitions/suomen-tarina",
              hall: "The National Museum of Finland",
              category: "Museum",
              countryCode: "fi"
            }, {
              country: "Korea",
              title: "Do Ho Suh and Children: Artland",
              date: "2022 07 26-2023 03 12",
              thumbnailSrc: "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fex%2FEXI01%2F2022%2F&FILE_NM=20220711135020_e2eda2c5cce5463a8e72ba6a9e0ebf72_7fb91342ddf1467288a0695a9c93b8c9",
              detail: "The exhibition features a complex and fantastical ecosystem called Artland, which Suh and his children have been crafting out of modelling clay for over seven years at their home in London. Artland is inhabited by diverse species of animals and plants, while its unique climate and soil result in different growth cycles and conditions for its flora and fauna to those on Earth. Suh asks children who visit this show to engage in the creation and expansion of Artland. Working from an existing foundation made by the artist and family, which includes recycled containers, visitors are encouraged to add new elements to this alternative ecosystem based on Artland\u2019s species, as well as those of the participants\u2019 imaginations. In the process, we hope to create special memories for the visitors, as everyday activities become art.",
              link: "https://sema.seoul.go.kr/en/whatson/exhibition/detail",
              hall: "Buk-Seoul Museum of Art",
              category: "Gallery",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "Evolved Museum: the former Belgian Consulate",
              date: "Permanent",
              thumbnailSrc: "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fex%2FEXI01%2F2018%2F&FILE_NM=20180905104855_1b87bfc7b6bd421b8da7acbb1c9622fd_14ae300de8ff4efb9385a4c5f2432bb4",
              detail: "Nam-Seoul Museum of Art is a branch of Seoul Museum of Art located in Namhyeon-dong Gwanak-gu, the southernmost part of Seoul. The building previously housed the Belgian Consulate and was designated as a cultural property. With over 100 years of rich history, the building itself possesses artistic value.In order to promulgate its history and value, SeMA presents a permanent exhibition of its architectural archive, titled Evolved Museum: the former Belgian Consulate. The exhibition reframes parts of the previous exhibition held in 2015, SeMA Modern History Project: Evolved Museum: the former Belgian Consulate.",
              link: "https://sema.seoul.go.kr/en/whatson/exhibition/detail",
              hall: "Nam-Seoul Museum of Art ",
              category: "Museum",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "Chun Kyung-ja, Eternal Narcissist",
              date: "Permanent",
              thumbnailSrc: "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fex%2FEXI01%2F2022%2F&FILE_NM=20220310110214_a1616f452bcb4048bec03d91c81cb30f_e84145927bf64fb1be6c94c0a9d5d14f",
              detail: "In 1998, one of Korea\u2019s most renowned painters of the 20th century, Chun Kyung-ja(1924-2015), donated to the Seoul Museum of Art a collection of 93 works she had painted over a period of about 60 years from the 1940s to the 1990s. She wanted to make her works accessible to the wider public and future generations. Organized to present the unique world created by an artist who devoted her whole life to the development of Korean painting and to commemorate the donor\u2019s noble intention, the Chun Kyung-ja permanent exhibition titled Chun Kyung-ja, Eternal Narcissist brings together a collection of 20 paintings.",
              link: "https://sema.seoul.go.kr/en/whatson/exhibition/detail",
              hall: "Seoul Museum of Art Seosomun Main",
              category: "Gallery",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "Open Storage for Art",
              date: "2022-10-04 ~ 2023-03-31",
              thumbnailSrc: "https://daejeon.go.kr/FileUpload/DMA/202209/20220925044346417.JPG",
              detail: "This October, the Daejeon Museum of Art (DMA) will be opening the doors of DMA Open Storage. As its name suggests, the Open Storage is a type of \u201Csmall-art museum\u201D in and of itself that makes artworks in storage, to which access is traditionally strictly controlled, available at all times for public viewing. Contrary to the traditional storage space of an art museum, which is closed off and exists for the purpose of keeping the items in the museum\u2019s collection not currently on display at optimal temperature and humidity levels for artwork preservation, open storage is designed to accommodate visitors. In short, it is both a storage facility and a place that gives the general public an opportunity to see museum items up-close. Depending on the extent to which it is made visitor-accessible, open storage is sometimes called \u201Cvisible storage.\u201D The DMA\u2019s Open Storage will give visitors the most proactive viewing experience possible by permitting them to get physically close to the shelves and racks that hold the artworks.",
              link: "https://daejeon.go.kr/dmae/DmaExhibView.do?exYear=&exType=02&menuSeq=6125&exSeq=105565&&pageIndex=1",
              hall: "Daejeon Museum of Art",
              category: "Museum",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "Leeungno Collection",
              date: "Permanent",
              thumbnailSrc: "https://www.leeungnomuseum.or.kr/img/collection/content_1.jpg",
              detail: "In February, 2004, Daejeon Metropolitan City and Park Inkyung, the widow of Lee Ungno, signed the first donation agreement for the establishment of the Lee Ungno Museum in Daejeon. Under the agreement, 106 of Lee Ungno's artworks were presented to Daejeon in October, 2005, including several pieces from the artist\u2019s most famous series, Abstract Letter and People. A second donation, made in December, 2006, added to the collection 101 paintings that Lee Ungno created while in prison.",
              link: "https://www.leeungnomuseum.or.kr/Menu.do?menuId=Us070101",
              hall: "Leeungno Museum",
              category: "Gallery",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "Kunhee Lee Collection Special Exhibition",
              date: "2022.10.04 ~ 2022.11.27",
              thumbnailSrc: "https://artmuse.gwangju.go.kr/upload/pj/PJ_EXHIBIT/1664347800560499.jpg",
              detail: "Gwangju Museum of Art is holding the exhibition \u300ALee Kun-hee Collection Special Exhibition of Modern and Contemporary Korean Art: The Scent of People, Remains as Art\u300B. This exhibition was prepared as part of a regional tour program of the National Museum of Modern and Contemporary Art (MMCA), Lee Kun-Hee, and through this exhibition, the late Samsung Chairman Lee Kun-Hee reflected on the meaning of donation and focused on artists representing the history of Korean modern and contemporary art. I want to illuminate the flow and value of art. In April 2021, 23,283 pieces of cultural assets and art pieces collected by the late Samsung Group Chairman Lee Kun-hee were donated to local art museums, including the National Museum of Korea and the National Museum of Modern and Contemporary Art. Chairman Lee Kun-hee's donation last year is the largest donation of cultural assets and artworks in Korean history, and it shows the social value and meaning of sharing. The Lee Kun-hee Collection contains many works of masters who occupy an important place in the history of Korean modern and contemporary art, and thus has great significance and value in art history. In this exhibition, Lee Jung-seop, who represents Korean modern and contemporary art, presents works from the Lee Kun-hee collection owned by the National Museum of Modern and Contemporary Art (50 pieces), Daegu Art Museum (7 pieces), Jeonnam Museum of Art (6 pieces), and Gwangju Museum of Art (30 pieces). It consists of 93 works by 45 artists including Park Soo-geun and Kim Whan-ki.",
              link: "https://artmuse.gwangju.go.kr/pj/pjExhibit.php?pageID=artmuse0209000000&action=view&exhiCd=001&exhiTp=N&lang=KOR&eSeq=776",
              hall: "Gwangju Museum of Art",
              category: "Museum",
              countryCode: "kr"
            }, {
              country: "Korea",
              title: "Ock Soo Choi Photo Exhibition",
              date: "2022.10.21 ~ 2023.03.26",
              thumbnailSrc: "https://artmuse.gwangju.go.kr/upload/pj/PJ_EXHIBIT/1666217856823276.jpg",
              detail: "\u201CThe artist expresses the weight of his life in his photos. Art and life are inextricably linked.\u201D In the words of Robert Frank (1924-2019), a pioneer in modern documentary photography. Photographer Ocksoo Choi has been traveling around the South Island since the 1970s, capturing the scenery of his life. The artist captures images of weaving thatch house, scenes of cows plowing rice fields, girls going to the river to do laundry, and our mothers working in the fields. These faces and landscapes can no longer be seen, but they were commonplace at the time. In this way, Choi Ock-soo's photos contain the faces and sorrows of the people living in the South and the disappearing daily life around the artist at the time. [Ock Soo Choi - Disappearing, Alive] displays documentary-like landscapes and portraits of Namdo, which are first revealed through the exhibition. This was prepared as a place to share the value of our region as an archive material with citizens. In addition, it will be a time for older generations to recall memories of the past through landscapes and portraits of about 30 years of Namdo, and for younger generations to share their daily lives and promote intergenerational communication.",
              link: "https://artmuse.gwangju.go.kr/pj/pjExhibit.php?pageID=artmuse0209000000&action=view&exhiCd=003&exhiTp=N&lang=KOR&eSeq=780",
              hall: "Gwangju Museum of Art",
              category: "Gallery",
              countryCode: "kr"
            }, {
              country: "Chile",
              title: "Petrona Viera. La creaci\xF3n sin fin",
              date: "09/09/2022 -29/01/2023",
              thumbnailSrc: "https://www.mnba.gob.cl/sites/www.mnba.gob.cl/files/styles/ancho_x_auto/public/2022-09/petrona_web_1.jpeg?itok=TEcuby3h",
              detail: "Exhibition that presents a selection of 26 works by one of the most important and pioneering creators in the history of Uruguayan art. The pieces belong to the collection of the National Museum of Visual Arts of Uruguay (MNAV). The exhibition covers the technical research and various thematic approaches that he developed in his more than forty years of uninterrupted creative work, based on the techniques of pastels, oil paintings, engravings and drawings. Viera represented the rarely visited world of childhood (games, dances, walks and secrets outside the adult world), landscapes that border on stripped abstraction; portraits and nudes, unusual in the local art of his time Petrona Viera was born in Montevideo. Her father, a politician who became president of Uruguay, was the eldest of eleven children and at the age of two she suffered from an illness that left her deaf, the starting point of an unusual life.",
              link: "https://www.mnba.gob.cl/exposiciones-temporales/petrona-viera-la-creacion-sin-fin",
              hall: "Museo Nacional de Bellas Artes",
              category: "Gallery",
              countryCode: "cl"
            }, {
              country: "Colombia",
              title: "Voices of feminism in Colombia 1975-1985: a decade of transformations",
              date: "06/16/2022-04/02/2023",
              thumbnailSrc: "https://museonacional.gov.co/exposiciones/Lists/ListaExposiciones/Attachments/368/FileImgExposicion.jpg",
              detail: "Numerous feminist groups that openly challenged existing traditional conceptions of the social role of women emerged, among other social movements, during the last years of the National Front (1957-1974), a period marked by political participation restricted to bipartisanship. Echo of perceptions also shared by other Latin American countries, in Colombian cities such as Bogot\xE1, Medell\xEDn, Cali and Barranquilla, these women denounced the inequity in the distribution of domestic tasks and the labor inequality between the sexes, they claimed the right to control their sexual life and reproductive health and denounced the sexual violence to which they were subjected. The multiple feminist groups came from various social sectors and, although they agreed on many demands, they also had disagreements regarding the nature of women's emancipatory struggle and the very meaning of feminism. Among their cries, they contrasted the conceptions formulated from the class struggle, from the desire to transform everyday life and even from the union horizon. These voices of feminism, during the 1970s and 1980s, constituted a heterogeneous force in Colombia in the fight for gender equality in the country.",
              link: "https://museonacional.gov.co/exposiciones/Paginas/Detalleexposicion.aspx",
              hall: "National Museum of Colombia",
              category: "Gallery",
              countryCode: "co"
            }, {
              country: "Colombia",
              title: "art, history, archeology and ethnography collections",
              date: "Permanent",
              thumbnailSrc: "https://museonacional.gov.co/exposiciones/Documents/IMG_9782.jpg",
              detail: "The Museum makes its art, history, archeology and ethnography collections available to the public in seventeen rooms that account for the political  and cultural history of the country. Due to the comprehensive renovation of the exhibition spaces of the National Museum of Colombia, during your visit you will find some rooms closed due to assembly processes. We appreciate your understanding and apologize for any inconvenience this may cause.",
              link: "https://museonacional.gov.co/exposiciones/permanentes/Paginas/default.aspx",
              hall: "National Museum of Colombia",
              category: "Museum",
              countryCode: "co"
            }, {
              country: "Greece",
              title: "Egyptian Antiquities",
              date: "Permanent",
              thumbnailSrc: "https://www.namuseum.gr/wp-content/uploads/2018/10/IMG_2980-1920x988.jpg",
              detail: "The ancient Egyptian civilization is the only other major civilization of the Mediterranean, apart from the Greek, displayed at the National Archaeological Museum already since 1890. The enriched redisplay of the collection includes the objects of the previous exhibition (1994-2002) complemented with a significant number of new artefacts which are put on public view for the first time. The exhibits (statues, figurines, stelae, sarcophagi, mummy cases, mummies of animals, vases, funerary caskets , Fayum portraits, jewellery etc.) cover all time periods of the Egyptian civilization. The new exhibition aims at the familiarization of visitors with the daily life of the ancient Egyptians. The artefacts are interpreted based on their use, whereas the burial practices as well as the religion of the ancient Egyptians hold a prominent position in the exhibition. Simultaneously, emphasis is laid on the close ties between the Greek and the Egyptian civilization in antiquity.",
              link: "https://www.namuseum.gr/en/permanent_exhibition/aigyptiakes-archaiotites/",
              hall: "National Archaeological Museum",
              category: "Museum",
              countryCode: "gr"
            }, {
              country: "Greece",
              title: "Collection of Mycenaean Antiquities",
              date: "Permanent",
              thumbnailSrc: "https://www.namuseum.gr/wp-content/uploads/2018/10/IMG_2708_gallery-1920x988.jpg",
              detail: "The Mycenaean world (1600-1100 BC) developed in Greece, which has always served as a bridge between the East and the West. Its impact stretched from Asia Minor, the Near East and Egypt to the Western Mediterranean and North-western Europe. It is traditionally believed that its bearers, the Greek-speaking Achaeans, settled in Greece in around 2000 BC. The inception of the Mycenaean civilization that was called after its largest centre, Mycenae in the Peloponnese, was marked by the rise of groups of warrior kings who maintained relations with the already advanced Minoan civilization of Crete. A vivid picture of the wealth of the early Mycenaean Period is unveiled in the royal shaft graves of Mycenae (Grave Circles A and B of Mycenae), dated to the 16th century BC, with the valuable grave goods, symbols of social status and office that formed the basis for Homer\u2019s golden Mycenae.",
              link: "https://www.namuseum.gr/en/permanent_exhibition/mykinaikes-archaiotites/",
              hall: "National Archaeological Museum",
              category: "Museum",
              countryCode: "gr"
            }, {
              country: "Greece",
              title: "Sculpture Collection",
              date: "Permanent",
              thumbnailSrc: "https://www.namuseum.gr/wp-content/uploads/2018/09/IMG_4416-1920x988.jpg",
              detail: "The National Archaeological Museum houses the largest and one of the most significant collections of sculpture of Greek antiquity worldwide, dating from the 7th century BC to the 5th century AD. The formation of the collection was initiated in 1829 with the foundation of the museum on Aegina, whereas later it included marble and stone sculptures from the public archaeological collections of Athens, from excavations and acquisitions of the Archaeological Society at Athens as well as from other regions of the Greek world. The Collection comprises approximately 17.000 works, of which 1.000 are on display in Rooms 7-34 on the ground floor of the building, in the atrium and the Room of the Cypriot Collection, in Room 64 on the upper floor, whereas those sculptures in storage are accessible to researchers. Individual sculptures are also exhibited in the Egyptian Collection, the Vase Collection and the Stathatos Collection.",
              link: "https://www.namuseum.gr/en/permanent_exhibition/syllogi-glypton/",
              hall: "National Archaeological Museum",
              category: "Museum",
              countryCode: "gr"
            }, {
              country: "Greece",
              title: "Archaic Acropolis Gallery",
              date: "Permanent",
              thumbnailSrc: "https://www.theacropolismuseum.gr/sites/default/files/2019-12/3%CE%95-Acropolis-Museum_3K4A0393_PhotographedByGiorgosVitsaropoulos_RESIZE.jpg",
              detail: "The first floor\u2019s eastern and southern sections are devoted to the Acropolis during the Archaic period (700-480 BC) \u2013 an Acropolis different from the one of Classical times, which we know so well today, but of equal magnificence with impressive temples and numerous dedicatory offerings. Natural light coming through the large windows and down from skylights in the roof creates the feeling of an open space and evokes the open-air atmosphere of the sanctuary on the Acropolis, where the ancient sculptures displayed here were originally erected.",
              link: "https://www.theacropolismuseum.gr/en/exhibit-halls/archaic-acropolis-gallery#enotites",
              hall: "Acropolis Museum",
              category: "Museum",
              countryCode: "gr"
            }, {
              country: "Hongkong",
              title: "The Best Features of The Hong Kong Story",
              date: "Permanent",
              thumbnailSrc: "https://img1.10bestmedia.com/Images/Photos/342080/img-Hong-Kong-Museum-of-History_55_660x440.JPG",
              detail: "\"The Hong Kong Story\" permanent exhibition was opened in 2001. It took audiences on a journey through 400 million years of historical space-time to gain an in-depth understanding of Hong Kong's history and culture. The Hong Kong Museum of History is currently undergoing a comprehensive renovation for the permanent exhibition. Before the new permanent exhibition is launched, we organise \"Recreating a Classic: The Best Features of The Hong Kong Story\" exhibition to showcase the essence of \"The Hong Kong Story\". Featuring about 460 sets of selected exhibits and 210 photos, the exhibition is composed of five sections including prehistoric Hong Kong and historical development, folk culture in Hong Kong, cession of Hong Kong and early growth of the city, Japanese occupation, modern metropolis and concludes with the return to the motherland in 1997.",
              link: "https://hk.history.museum/en_US/web/mh/exhibition/hkstory.html",
              hall: "Hong Kong Museum of History",
              category: "Museum",
              countryCode: "hk"
            }, {
              country: "Hongkong",
              title: "Hall of the Cosmos",
              date: "Permanent",
              thumbnailSrc: "https://images.squarespace-cdn.com/content/v1/5c417c5bb40b9d6d561845a7/1587875110071-D9GVQRMXOA3177APKTO7/Hong-Kong-Tours-Hong-Kong-Space-Museum.jpeg",
              detail: "Covering a total area of 1,600 square metres, the \"Hall of the Cosmos\" and \"Hall of Space Exploration\" feature around a hundred exhibits of which about 70 per cent are of interactive design. With the aid of interesting hands-on exhibits coupled with vivid lighting effects and environmental decorations, the exhibition introduces astronomy and space science in an engaging way.",
              link: "https://hk.space.museum/en_US/web/spm/exhibitions/permanent-exhibition.html",
              hall: "Hong Kong Space Museum",
              category: "Museum",
              countryCode: "hk"
            }, {
              country: "Hungary",
              title: "THE CORONATION MANTLE",
              date: "Permanent",
              thumbnailSrc: "https://mnm.hu/sites/default/files/styles/gallery_item/public/gallery/kep_palast_jpg_legjobb.jpg?itok=yDFa2pTd",
              detail: "One matchless treasure held by the Hungarian National Museum is the mantle that used to be worn by Hungarian monarchs at their coronation; it is a garment that King Stephen I (St. Stephen of Hungary) and his wife Gisela of Bavaria had made in 1031. The mantle was originally a bell-shaped, one-piece chasuble; it was altered to make a mantle later on. According to the inscription embroidered on it, the chasuble was made on the instructions of King Stephen I (r. 997\u20131038) and his consort Gisela and was presented by them to the Church of the Virgin Mary in Sz\xE9kesfeh\xE9rv\xE1r in 1031",
              link: "https://mnm.hu/en/exhibitions/allando/coronation-mantle",
              hall: "Hungarian National Museum",
              category: "Museum",
              countryCode: "hu"
            }, {
              country: "Hungary",
              title: "Sculptures and Medals ",
              date: "Permanent",
              thumbnailSrc: "https://en.mng.hu/app/uploads/2019/01/szobor_listaoldal_700x525-1.jpg",
              detail: "Our collection preserves the most prized works of 19th- and 20th-century Hungarian sculpture along with coins, medals and plaques by Hungarian masters from the 19th to 21st centuries. In addition, it contains wax and plaster copies replacing original artworks, as well as coin works made by contemporary artists. Our holdings comprise some ten thousand items. The most outstanding works are displayed at our permanent exhibition.",
              link: "https://en.mng.hu/collections/sculptures-and-medals/",
              hall: "National Gallery of Hungary",
              category: "Museum",
              countryCode: "hu"
            }, {
              country: "Hungary",
              title: "Prints and Drawings",
              date: "Permanent",
              thumbnailSrc: "https://en.mng.hu/app/uploads/2019/01/Vaszary_F.92.31-1024x756.jpg",
              detail: "The Collection of Prints and Drawings preserves around 81 000 sheets created by Hungarian artists from the end of the 18th century to around 1960. The works fall into three units: the collection of drawings, the collection of prints and the collection of posters.",
              link: "https://en.mng.hu/collections/prints-and-drawings/",
              hall: "National Gallery of Hungary",
              category: "Gallery",
              countryCode: "hu"
            }, {
              country: "Hungary",
              title: "Old Master Paintings",
              date: "Permanent",
              thumbnailSrc: "https://www.mfab.hu/app/uploads/2018/10/gyujtemenyek_regikeptar_2_kiemelt_700x525.jpg",
              detail: "The almost 3,000 paintings of the collection is the richest in Italian works, including masterpieces by Raphael, Giorgione, Titian, Jacopo Tintoretto, and Giovanni Battista Tiepolo. Netherlandish painting is represented by great masters such as Petrus Christus and Gerard David, while the seventeenth-century \u201Cgolden age\u201D is introduced through the art of Anthony van Dyck, Jacob van Ruisdael, and Jacob Jordaens. The department preserves one of Europe\u2019s most prominent Spanish collections, including paintings by Diego Vel\xE1zquez, El Greco, Francisco Goya, and Bartolom\xE9 Esteban Murillo. The German and Central European parts of the collection are also remarkable both in regard to the number and quality of the works, including pictures by Albrecht D\xFCrer, Hans Holbein the Elder, Lucas Cranach, Franz Anton Maulbertsch, and Jan Kupeczky. The baroque section showcasing the art of the French (Claude Lorrain, Nicolas Poussin) and British (Joshua Reynolds, John Constable) schools is more modest but full of interesting works.",
              link: "https://www.mfab.hu/collections/old-masters-paintings/",
              hall: "Museum of Fine Arts in Budapest",
              category: "Gallery",
              countryCode: "hu"
            }, {
              country: "Ireland",
              title: "Turner: The Sun is God",
              date: "08.10.2022 \u2013 06.02.2023",
              thumbnailSrc: "https://www.nationalgallery.ie/sites/default/files/styles/content_hero/public/2021-09/j.m.w.-turner-going-to-the-ball-san-martino-photo-c-tate.jpg?itok=_tZJQOuS&cache-buster=c41baa2918&coords_hash=887a449d27",
              detail: "Almost 90 artworks by the English artist J.M.W. Turner are on display in Ireland for the first time in this exhibition of works from Tate\u2019s impressive collection. Devised by world-renowned Turner scholar David Blayney Brown, Turner: The Sun is God explores the artist\u2019s fascination with the vast, humbling forces of nature as well as with the sun, moon and clouds. An unmissable opportunity to view the work of one of the greatest painters of the Romantic period, the exhibition features oil paintings as well as an array of watercolours. From light and atmosphere to the luminous sublime, this selection of works showcases Turner\u2019s artistic innovations alongside his mastery of light, colour and atmosphere.",
              link: "https://www.nationalgallery.ie/art-and-artists/exhibitions/turner-sun-god",
              hall: "National Gallery of Ireland",
              category: "Gallery",
              countryCode: "ie"
            }, {
              country: "Ireland",
              title: "Keating's Allegories of Change",
              date: "20.9.2022 \u201327.11.2022",
              thumbnailSrc: "https://www.nationalgallery.ie/sites/default/files/styles/content_hero/public/2020-09/s-keating-an-allegory.jpg?itok=LCjrczuz&cache-buster=c41baa2918&coords_hash=4e15be659d",
              detail: "Painted in 1924, An Allegory by Se\xE1n Keating addresses the divisive nature of the conflict of the Irish Civil War. The painting is central to a new, free display at the National Gallery of Ireland marking the conclusion of the Decade of Centenaries. Keating\u2019s Allegories of Change highlights the artist\u2019s role as political commentator and chronicler of one of the most turbulent periods in Irish history. A number of portraits by Keating of nationalist figures such as Erskine Childers, John Devoy and Terence MacSwiney are on display in this exhibition, alongside William Orpen\u2019s The Holy Well.",
              link: "https://www.nationalgallery.ie/art-and-artists/exhibitions/keatings-allegories-change",
              hall: "National Gallery of Ireland",
              category: "Gallery",
              countryCode: "ie"
            }, {
              country: "Ireland",
              title: "National Portrait Collection",
              date: "Permanent",
              thumbnailSrc: "https://www.nationalgallery.ie/sites/default/files/styles/eve/public/2017-05/ngi4112.jpg?h=45495a91&itok=JRl6tgwS&cache-buster=c41baa2918&coords_hash=e0235af615",
              detail: "The origins of the National Portrait Collection date back to 1875. Over the years the collection has been developed with additions of paintings, drawings, watercolours and sculpture depicting prominent Irish individuals who have contributed to the civic, social, and cultural life of the nation. Since 1998, generously supported by Irish Life & Permanent, the Collection has been enhanced by a series of commissioned portraits of prominent figures from contemporary Irish life. The annual Portrait Prize, launched in 2014, has further contributed to the growth of this significant collection.",
              link: "https://www.nationalgallery.ie/art-and-artists/national-portrait-collection",
              hall: "National Gallery of Ireland",
              category: "Gallery",
              countryCode: "ie"
            }, {
              country: "Ireland",
              title: "Irish Antiquities Division Collections",
              date: "Permanent",
              thumbnailSrc: "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.18169-9/992855_10153242841290069_1478912253934026548_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=36a2c1&_nc_ohc=vMX8955hpYEAX91jf9b&_nc_ht=scontent-gmp1-1.xx&oh=00_AfBxzsE14wjrCPWQ87cr1Se9eTb0fmQsz52_3Ln6yt3ulA&oe=6383040B",
              detail: "The collections, archives and displays of the Irish Antiquities Division are housed mainly in the National Museum of Ireland - Archaeology. This Division has a staff of eight, including a Keeper, five Assistant Keepers, Senior Technical Assistant and Clerical Officer.",
              link: "https://www.museum.ie/en-IE/Collections-Research/Irish-Antiquities-Division-Collections/About-the-collection",
              hall: "National Museum of Ireland",
              category: "Museum",
              countryCode: "ie"
            }, {
              country: "Ireland",
              title: "Art and Industry Collections",
              date: "Permanent",
              thumbnailSrc: "https://www.museum.ie/getmedia/0acb53e4-b13a-4b7f-83d9-ecbb9f78dac1/TeaUrn-StandArt-IndustrialCollection.jpg?w=2000&h=1125&ext=.jpg&width=1920",
              detail: "Collections pertaining to the decorative arts and history are maintained by curators in the Art and Industrial Division. Their role is to collect, manage, and preserve Ireland\u2019s heritage in the decorative and applied arts, as well as its political, economic, military and social history.  The primary aim is to promote a wider understanding of Ireland\u2019s cultural heritage and to highlight the country\u2019s contribution to European decorative arts and in a broader international context.",
              link: "https://www.museum.ie/en-IE/Collections-Research/Art-and-Industry-Collections-(1)",
              hall: "National Museum of Ireland",
              category: "Museum",
              countryCode: "ie"
            }, {
              country: "Israel",
              title: "Sigalit Landau: The Burning Sea",
              date: "October 6 2022 - June 17 2023",
              thumbnailSrc: "https://www.imj.org.il/sites/default/files/exhibitions/featured/fe-sigalit-banner3.jpg",
              detail: "For twenty years, Sigalit Landau has made art \u2013 both monumental and profoundly intimate \u2013 at the Dead Sea, the lowest point on earth. Inspired by this primal place, Landau creates works of great beauty that address fragile dualities: life and death, injury and healing, destruction and hope. The Burning Sea presents a selection of Landau\u2019s Dead Sea artworks of the last two decades, from glittering salt-encrusted sculptures through video works and photographs. The exhibition also premieres a new video trilogy that relates to her idea of building a bridge over the lake, a project that has engaged Landau for many years, first emerging in her memorable installation at the 2011 Venice Biennale, which is represented here for the first time in Israel.",
              link: "https://www.imj.org.il/en/exhibitions/sigalit-landau-burning-sea",
              hall: "Israel Museum, Jerusalem",
              category: "Museum",
              countryCode: "il"
            }, {
              country: "Israel",
              title: "Archaeology of the Land of Israel",
              date: "Permanent",
              thumbnailSrc: "https://www.imj.org.il/sites/default/files/departments/Chronicles-of-the-Land-fe.jpg",
              detail: "The land of Israel has been the home of peoples of different cultures and beliefs for some one and a half million years. It is to these people and their cultures that the exhibition galleries of the Archaeology Wing is dedicated, serving as primary showcase to the rich and fascinating local archaeological heritage. The display takes the visitor on a journey of unparalleled depth into the historical course of ancient Israel; the birthplace of the Bible, and the cradle of the three monotheistic religions; from prehistoric times - to the beginning of the Ottoman period.",
              link: "https://www.imj.org.il/en/node/130",
              hall: "Israel Museum, Jerusalem",
              category: "Museum",
              countryCode: "il"
            }, {
              country: "Israel",
              title: "Neighboring Cultures",
              date: "Permanent",
              thumbnailSrc: "https://www.imj.org.il/sites/default/files/Neighboring-Cultures2.jpg",
              detail: "Since ancient times neighboring cultures exerted their influence on the land of Israel, located at the crossroads between them. The galleries, devoted to the neighboring cultures, offer the visitor a broad historical and cultural overview of the region, revealing the fascinating range of relations between the Land of Israel, and its neighbors.",
              link: "https://www.imj.org.il/en/node/131",
              hall: "Israel Museum, Jerusalem",
              category: "Museum",
              countryCode: "il"
            }, {
              country: "Israel",
              title: "Israeli Art",
              date: "Permanent",
              thumbnailSrc: "https://www.imj.org.il/sites/default/files/israeli-art3_0.jpg",
              detail: "The Israeli Art galleries present the works of artists from the beginning of the twentieth century until today. Israeli art has always found itself pulled in two conflicting directions; the need to address what was happening outside, and the desire to focus on the autonomous concerns of art itself, of material, method, and definition. Moreover, it has always developed in a complex context of socio-political tension, war, and bloodshed, a context in which it is impossible to separate everyday individual life from the historical and the mythical.",
              link: "https://www.imj.org.il/en/node/176",
              hall: "Israel Museum, Jerusalem",
              category: "Museum",
              countryCode: "il"
            }, {
              country: "Israel",
              title: "Illustrations: David Polonsky",
              date: "23/9/22\u200B-\u200B18/2/23",
              thumbnailSrc: "https://storage.googleapis.com/tama-static/images/Illustrations-David-Polonsky.width-980.jpegquality-75.jpg?Expires=1667314813&GoogleAccessId=tama-static-files-uploader%40tama-website.iam.gserviceaccount.com&Signature=I1h65oqrm04cEk0105i3d1oYwgECw6mISWA12T3s%2FLk07oUgl4x3nf2TF6YBLEdY%2BlFMk%2BH0YeN%2Bz8eB6hQ3WYdHGClXfR7B8mpXbGwkeA8KO5Hc%2FhdGcj0yVgyXW2d7o5RdY8WL%2FKMDm5y4KBvXyJ92OQiiBN4ijwQgEZoeGrC%2FKl9AEQ1uUx9X%2BSQCdaa8CFUiVEf0BkvV%2FHpS5AhTisk4jJOf4sKAgvzIBO11nWMulKIdjJwL%2Fr06Y0%2B8%2FAXvbH3UAhzUpo8f6Fn06p%2FMjKG1IHwoQr1WXsGJMR9kdwE%2F8lrmeu3pKtckotkKE5%2FN56yn%2BjmAYmlG0nqP8z%2FFlw%3D%3D",
              detail: "David Polonsky (b. 1973, Kyiv), one of the most important and prolific illustrators working in Israel today. His illustrations, full of color and movement, are created for comics, journalism and children's books. His works draw on many visual sources, such as the history of art and the history of illustration, through cinema and the popular media. The exhibition deals with illustration as an independent medium and traces the breadth of Polonsky\u2019s work and his references to Israeli history and culture. It brings together hundreds of preparatory drawings, paintings, photographs, dolls, film scenes and archival materials used by Polonsky in his main projects, among them the films Waltz with Bashir (2008), The Congress (2013) and Legend of Destruction (2021), and the books Anne Frank: The Graphic Diary (2017) and The Heart-Shaped Leaf (2002).",
              link: "https://www.tamuseum.org.il/en/exhibition/david-polonsky-illustrations/",
              hall: "Tel Aviv Museum of Art",
              category: "Gallery",
              countryCode: "il"
            }, {
              country: "Israel",
              title: "Material Imagination: Israeli Art from the Museum\u2019s Collection",
              date: "Permanent",
              thumbnailSrc: "https://storage.googleapis.com/tama-static/images/REUVEN1.max-1280x800.jpegquality-75.jpg?Expires=1667311375&GoogleAccessId=tama-static-files-uploader%40tama-website.iam.gserviceaccount.com&Signature=uD%2F9NUiJHQDZzd2G%2BF1iPO00w%2FFDZXiqkcsdYpM6UFlfNbe2Maiz37vEld0KXjWUwXIig50BSfmjYXXwD0aGHlUK82mE4XrIoc7miI9i2o1ANCNaCqAveZNf4RhNucqFYzC8dOZ2XHqAGPDgERqv0lYHFusPIY4bGADu5mqwBvQiicwkYRkEv0PjocFh2rGM%2FZQnQw1oSSTjAjL%2BxOK2aH2PF3U5PoWDY8XmsGZbneIK8JUTrX53NXg8HqPoW8md6rDQAbp8695%2BMqfudKGKO25zi6oWPCa0K%2B0viEILSiFiLow92t6LLAjOO20RoXAmUpr1q4Xgp8UMDs62JyDtyA%3D%3D",
              detail: "Tel Aviv Museum of Art is delighted to announce the launch of our new permanent display of the Israeli art collection. The exhibition will include more than 120 works by leading artists, some well-known, others making their debut here. The exhibition Material Imagination departs from the story of Israeli art as a chronological narrative running parallel to the national story. Material Imagination is a model of thinking conceived by philosopher Gaston Bachelard during years of delving into the four elements\u2014earth, air, water, and fire\u2014and their incarnations in the imagination and in art. The material imagination thrives in the dialogue between the materials of the world and archaic images\u2014archetypes accumulated and etched in human consciousness.",
              link: "https://www.tamuseum.org.il/en/exhibition/israeli-art-material-imagination/",
              hall: "Tel Aviv Museum of Art",
              category: "Gallery",
              countryCode: "il"
            }, {
              country: "Israel",
              title: "European Art in the Sixteenth through Nineteenth Centuries",
              date: "Permanent",
              thumbnailSrc: "https://storage.googleapis.com/tama-static/images/old_masters-imdex.width-980.jpegquality-75.jpg?Expires=1667316230&GoogleAccessId=tama-static-files-uploader%40tama-website.iam.gserviceaccount.com&Signature=e%2FaICq%2FSnIADtLbwGoTVtOFNZeiMRPZjdQeeHYXj2FZqHmKszEilvDOJXgOHXjMl2z9MtMz0cxWJ6qGIvrMQzrLymdBvG2TAdE3u68vhmhj%2BOftifVBcIWNioSNAKUM1CZZMxm%2BidsQkQ4i0%2B3cH6qiJsXCB18ur6h%2BC%2BYyV1u9u2UWuNZllEqEf5h4aHWbPlP1ChC5VheEXewnXvVIjiI0MMOARuJJP5V9JAIXFj3pdn6%2F9Nz%2FzrIaYQEIDsAE0IfowUpNfni%2F%2BPZ3eA%2BcTY4H4P%2F%2BKGH2DRJ4jBn4%2BfNS5m0CKMYpVGCCyRoSdrpwXvuLDV5rVy10ZFZ7KuGHiJA%3D%3D",
              detail: "The galleries dedicated to European art in the sixteenth through nineteenth centuries at the Tel Aviv Museum of Art have now been reopened to the public, following the renovation of their exhibition spaces. The collection, which comprises mainly oil paintings, focuses on three areas: Italian art from the sixteenth through eighteenth centuries; sixteenth- and seventeenth-century Flemish and Dutch art; and Jewish art of the Enlightenment period of the nineteenth century.",
              link: "https://www.tamuseum.org.il/en/exhibition/european-art-sixteenth-through-nineteenth-centuries/",
              hall: "Tel Aviv Museum of Art",
              category: "Gallery",
              countryCode: "il"
            }, {
              country: "India",
              title: "Anthropology Collection",
              date: "Permanent",
              thumbnailSrc: "http://www.nationalmuseumindia.gov.in/uploads/banners/1644485029_60-1128-17616-min.jpg",
              detail: "National Museum has a vast collection of anthropological artefacts which consist of approximately 8 thousands object of varied material and mediums such as terracotta, textile, Basketry, bone wood, metal, paper, leather, etc. Many antiquities are made of mentioned material and mediums, a few examples of these artefacts are puppets, garments, masks, weapons, utilitarian objects, paintings, adornments, musical instruments etc. have been exhibited in the \u201CTribal Lifestyle of North-East India\u201D Gallery of National Museum.",
              link: "http://www.nationalmuseumindia.gov.in/en/collections/index/8",
              hall: "National Museum, New Delhi",
              category: "Museum",
              countryCode: "in"
            }, {
              country: "India",
              title: "Painting Collection",
              date: "Permanent",
              thumbnailSrc: "http://www.nationalmuseumindia.gov.in/uploads/collections/1596779087_5-min.JPG",
              detail: "The National Museum has nearly 17,000 paintings, representing all important styles of Indian miniatures. It is one of the largest collections of miniature paintings in the country. The Miniature painting tradition has been a key form of Indian painting apart from murals, cloth paintings and paintings on wood. Among miniature paintings, the main schools have been- the Deccani (from the South), Mughal (Spanning Central and North India), Rajasthani (West India) and Pahari (From the hills of the North).",
              link: "http://www.nationalmuseumindia.gov.in/en/collections/index/13",
              hall: "National Museum, New Delhi",
              category: "Museum",
              countryCode: "in"
            }, {
              country: "Italia",
              title: "Domiziano Imperatore. Odio e amore",
              date: "13/07/2022 - 29/01/2023",
              thumbnailSrc: "https://www.museicapitolini.org/sites/default/files/f_mostraevento/1050x545_mic_evento-DOM.jpg",
              detail: "The exhibition dedicated at Domiziano, the last emperor of the gens Flavia, loved and hated in life as well as in death, describes the complex and the conflicts of this figure and his empire. On display are almost 100 works from some of the most important international and Italian museums. The new exhibition location of the Musei Capitolini, Villa Caffarelli, hosts a major exhibition of Roman archaeology. The exhibition Domiziano imperatore. Odio e amore is co-produced by the Sovrintendenza Capitolina ai Beni Culturali and the Rijksmuseum van Oudheden of the Dutch city of Leiden; it is therefore the result of a cultural agreement with an international dimension. Wim Weijland, Nathalie de Haan, Eric M. Moormann, Aurora Raimondi Cominesi and Claire Stocks conceived and curated the exhibition God on Earth. Emperor Domitian, hosted in Leiden from 17 December 2021 to 22 May 2022, in which the Sovrintendenza Capitolina participated with important loans. In continuity with it and taking over part of the scientific project and loans, the Sovrintendenza Capitolina has developed in the new exhibition a different articulation of the story and exhibition itinerary also thanks to the addition of new works. The choice of exhibition venue was also significant, in a place that was strongly linked to the emperor and luxuriously restored by him after the fire of 80 AD: the Tempio di Giove Capitolino, on whose foundations Villa Caffarelli was built.",
              link: "https://www.museicapitolini.org/en/node/1011288",
              hall: "Musei Capitolini",
              category: "Museum",
              countryCode: "it"
            }, {
              country: "Italia",
              title: "Cursus Honorum. The government of Rome before Caesar",
              date: "24/03/2022 - 23/04/2023",
              thumbnailSrc: "https://www.museicapitolini.org/sites/default/files/f_mostraevento/Curs_Hon_1050x545_0.jpg",
              detail: "Four male and one female voice perform the republican period and reveal the nature of the political activities of the ancient Roman Republic. Part of the project La Roma della Repubblica. Il racconto dell'Archeologia, the exhibition is dedicated at the public charges of the members of the republican age, the cursus honorum, a basic part of the political life in the ancient Rome. The main characters in this tale are five anonymous figures portrayed by the five statues that provide an exceptional storytelling experience: four of them are male figures, with the addition of a different voice, a female figure, representing a reality that is usually not present in a society dominated by the men. Their role is to introduce the public to the monuments with historical and symbolic importance that celebrate the great war achievements, with others that describe the roles related to the administration of the city and the construction of the political importance of the people and their families. Thanks to these unusual guide-books, at the visitors will be reminded about war and conquests that were important moments in the history of the Roman Empire's development: the first naval victory over Carthage in Milazzo's sea, remembered by the Colonna Rostrata erected in honour of the consul Gaius Duilius. This event and others are portrayed by three travertine portrait statuae from the middle 1st century B.C., already in Villa Celimontana, wearing the pallium, the robe that was used to be placed over the tunica. The ius imaginum, the right to conserve in the house the portraits of their ancestors to be exhibited during funerals and on special public events, at the first exclusive to the aristocracy and extended in the 4th century B.C. also at the common people when they had access to the government offices, is instead narrated by the famous \"Togato Barberini\" (from the name of the collection it comes from). The majestic marble statue, dating back to the first quarter of the 1st century A.D., provides some unique evidence of the system that families holding the power implemented, using the celebrity and the reputation of their ancestors. The figura femminile voice, which is part of a Gruppo funerario con fanciulla made from marble from Lunigiana and dating from around the middle of the first century B.C., provides the introduction to the funeral monuments, in particular the sarcophagi from the sepolcro della gens Cornelia, a very unusual archaeological example of an ancient republican tomb. The exhibition, on the roads leaving out of Rome, of the architectural features and paintings of the family tombs was another element in displaying the power that had been obtained.",
              link: "https://www.museicapitolini.org/en/node/1010481",
              hall: "Musei Capitolini",
              category: "Museum",
              countryCode: "it"
            }, {
              country: "Italia",
              title: "ANSELM KIEFER",
              date: "From 26 March 2022 to 6 January 2023",
              thumbnailSrc: "https://palazzoducale.visitmuve.it/wp-content/uploads/2022/03/LEAD-AK_Post-Facebook-px-1200-x-630-senza-date.jpg",
              detail: "With Anselm Kiefer contemporary art will be coming to the Palazzo Ducale, with an exhibition that is set to be the centrepiece of the fifth edition of MUVE Contemporaneo, the biennale organized by the Fondazione Musei Civici di Venezia and the key concern of which is to reflect on the relationship between contemporary art and museums. The opening of the eagerly awaited installation by Anselm Kiefer, one of the leading artists active today, is part of the celebrations for the 1600th Anniversary of the Foundation of Venice. The title of the work is from the writings of the Venetian philosopher Andrea Emo: Questi scritti, quando verranno bruciati, daranno finalmente un po\u2019 di luce (These writings, when burned, will finally cast a little light). The series of paintings produced specially for the Palazzo Ducale in 2020 and 2021 are arranged in the space and magnificent setting of the Sala dello Scrutinio, engaging closely with the thirty-three monumental paintings on the ceiling and with the heroic values expressed by the palace\u2019s entire decorative scheme. The show underlines the role of contemporary art in reflecting on universal themes, transcending Venice and opening up to current philosophical perspectives. The invitation to Kiefer by the Fondazione Musei Civici dates back to 2019, and the decision to host his work in the Palazzo Ducale was aimed at showing the ability of this site \u2014 a symbol of the Serenissima Republic, or Most Serene Republic \u2014 to still serve as a dynamic cultural center and not just a memory.",
              hall: "Palazzo Ducale",
              category: "Gallery",
              countryCode: "it"
            }, {
              country: "Luxembourg",
              title: "Tacita Dean",
              date: "09 Jul 2022 \u2013 05 Feb 2023",
              thumbnailSrc: "https://d3bi15ad3kv34q.cloudfront.net/images/_ratio3x2_crop_4/Inferno_Photo-@-Remi-Villaggi_2.jpg",
              detail: "Since 2011, the artist\u2019s work has also had to deal with digital imaging eclipsing photochemical film and photography, a topic she has written and spoken about at length describing an exponential accumulation of images: \u2018A world that does not forget is a world that is drowning in its inability to forget.\u2019 The East Gallery brings together the original artworks used in the stage sets for the ballet The Dante Project, which premiered at the Royal Opera House in London in October 2021. Dean designed the sets and costumes for a ballet choreographed by Wayne McGregor (b. 1970, Stockport) with an original score by the composer Thomas Ad\xE8s (b. 1971, London). The Dante Project is based on Dante Alighieri\u2019s (b. 1265, Florence \u2013 d. 1321, Ravenna) The Divine Comedy and staged in three parts, representing Dante\u2019s journey through the realms of the dead \u2013 Inferno, Purgatorio and Paradiso.",
              link: "https://www.mudam.com/exhibitions/tacita-dean",
              hall: "Mudam Luxembourg",
              category: "Gallery",
              countryCode: "lu"
            }, {
              country: "Luxembourg",
              title: "Face-\xE0-Face",
              date: "08 Oct 2022 \u2013 02 Apr 2023",
              thumbnailSrc: "https://d3bi15ad3kv34q.cloudfront.net/images/_ratio3x2_crop_4/Mudam_Face-%C3%A0-face_11-10-22_1155.jpg",
              detail: "Face-\xE0-Face (Face to Face) proposes a new dialogue between two museum collections. It establishes connections between works by major figures of the modern avant-garde in Germany and France and those of contemporary artists from around the world. Questions of metamorphosis, the transformation of matter, optical phenomena and the perception of space are present throughout this exhibition in the East Gallery. The works shown highlight a diversity of formal experimentation, as well as the willingness of artists to challenge social and political structures. The cultural effervescence of 1920s Europe was characterised by collective endeavours. Some artists, like Lyonel Feininger and L\xE1szl\xF3 Moholy-Nagy, were part of the Bauhaus, a movement founded in 1919 in Weimar, Germany that aimed to combine fine arts, architecture and craft. Focused on simplifying figurative and abstract geometric patterns, their research resonates with the photographic experimentations of Albert Renger-Patzsch, who was associated with the New Objectivity and active in Germany from 1918 to 1933. Their work on the perception and fragmentation of space is also reminiscent of more recent work by Lee Bul and Alicja Kwade.",
              link: "https://www.mudam.com/exhibitions/face-a-face",
              hall: "Mudam Luxembourg",
              category: "Gallery",
              countryCode: "lu"
            }]);

          case 4:
            return _context.abrupt("return", 1);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function dbtest() {
    return _ref.apply(this, arguments);
  };
}();

var _default = dbtest;
exports["default"] = _default;