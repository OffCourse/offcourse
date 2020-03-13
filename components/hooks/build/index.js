'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

const useAnimationFrame = ({ callback, delay = 0 }) => {
    const requestRef = react.useRef(null);
    const previousTimeRef = react.useRef(null);
    const animate = react.useCallback(time => {
        if (previousTimeRef.current !== null) {
            const deltaTime = time - previousTimeRef.current;
            if (deltaTime > delay) {
                callback(deltaTime);
                previousTimeRef.current = time;
            }
        }
        else {
            previousTimeRef.current = time;
        }
        requestRef.current = requestAnimationFrame(animate);
    }, [delay, callback]);
    react.useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current || 0);
    }, [callback, animate]);
};
//# sourceMappingURL=useAnimationFrame.js.map

const useInterval = (callback, delay) => {
    const savedCallback = react.useRef();
    react.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    react.useEffect(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current();
            }
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
        return;
    }, [delay]);
};
//# sourceMappingURL=useInterval.js.map

const useCycleItems = ({ items, visibleItems, delay = 2000 }) => {
    const [index, setIndex] = react.useState(0);
    const goUp = (itemIndex) => setIndex(itemIndex + 1);
    const goDown = (itemIndex) => setIndex(itemIndex - 1);
    const [direction, setDirection] = react.useState("UP");
    const orderedProjects = [...items].map((item, itemIndex) => (Object.assign(Object.assign({}, item), { index: itemIndex })));
    useInterval(() => {
        let next = null;
        if (direction === "UP") {
            next = goUp;
            const reachedBeginning = index >= orderedProjects.length - (visibleItems + 1);
            if (reachedBeginning) {
                setDirection("DOWN");
            }
        }
        else {
            next = goDown;
            const reachedEnd = index <= 1;
            if (reachedEnd) {
                setDirection("UP");
            }
        }
        next(index);
    }, delay);
    return [index, orderedProjects];
};

const useCanvas = ({ width, height, draw }) => {
    const canvasRef = react.useRef(null);
    react.useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.canvas.width = width;
                ctx.canvas.height = height;
                draw(ctx);
            }
        }
    }, [canvasRef, width, height, draw]);
    return canvasRef;
};
//# sourceMappingURL=useCanvas.js.map

const useGridCanvas = ({ width, height, colors, shape, grid }) => {
    const draw = react.useCallback((ctx) => {
        ctx.clearRect(0, 0, width, height);
        for (const { u, v, width: w, height: h, value } of grid) {
            const x = u * width;
            const y = v * height;
            shape({
                ctx,
                x,
                y,
                value,
                colors,
                width: Math.ceil(w * width),
                height: Math.ceil(h * height)
            });
        }
    }, [width, height, grid, colors, shape]);
    return useCanvas({ width, height, draw });
};
//# sourceMappingURL=useGridCanvas.js.map

const useComputationWorker = (functionAsString) => {
    const [elements, setElements] = react.useState([]);
    const workerRef = react.useRef(null);
    react.useEffect(() => {
        const blob = new Blob([functionAsString]);
        const blobURL = window.URL.createObjectURL(blob);
        if (!workerRef.current) {
            workerRef.current = new Worker(blobURL);
        }
        workerRef.current.onmessage = (e) => {
            setElements(JSON.parse(e.data));
        };
        const cleanup = () => {
            if (workerRef.current) {
                workerRef.current.terminate();
            }
        };
        return cleanup;
    }, [functionAsString]);
    return [elements, workerRef.current];
};
//# sourceMappingURL=useComputationWorker.js.map

var workerFn = "function ascending(a, b) {\n  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;\n}\n\nfunction bisector(compare) {\n  if (compare.length === 1) compare = ascendingComparator(compare);\n  return {\n    left: function(a, x, lo, hi) {\n      if (lo == null) lo = 0;\n      if (hi == null) hi = a.length;\n      while (lo < hi) {\n        var mid = lo + hi >>> 1;\n        if (compare(a[mid], x) < 0) lo = mid + 1;\n        else hi = mid;\n      }\n      return lo;\n    },\n    right: function(a, x, lo, hi) {\n      if (lo == null) lo = 0;\n      if (hi == null) hi = a.length;\n      while (lo < hi) {\n        var mid = lo + hi >>> 1;\n        if (compare(a[mid], x) > 0) hi = mid;\n        else lo = mid + 1;\n      }\n      return lo;\n    }\n  };\n}\n\nfunction ascendingComparator(f) {\n  return function(d, x) {\n    return ascending(f(d), x);\n  };\n}\n\nvar ascendingBisect = bisector(ascending);\nvar bisectRight = ascendingBisect.right;\n\nfunction count(values, valueof) {\n  let count = 0;\n  if (valueof === undefined) {\n    for (let value of values) {\n      if (value != null && (value = +value) >= value) {\n        ++count;\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {\n        ++count;\n      }\n    }\n  }\n  return count;\n}\n\nfunction extent(values, valueof) {\n  let min;\n  let max;\n  if (valueof === undefined) {\n    for (const value of values) {\n      if (value != null) {\n        if (min === undefined) {\n          if (value >= value) min = max = value;\n        } else {\n          if (min > value) min = value;\n          if (max < value) max = value;\n        }\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null) {\n        if (min === undefined) {\n          if (value >= value) min = max = value;\n        } else {\n          if (min > value) min = value;\n          if (max < value) max = value;\n        }\n      }\n    }\n  }\n  return [min, max];\n}\n\nfunction identity(x) {\n  return x;\n}\n\nvar array = Array.prototype;\n\nvar slice = array.slice;\n\nfunction constant(x) {\n  return function() {\n    return x;\n  };\n}\n\nfunction range(start, stop, step) {\n  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;\n\n  var i = -1,\n      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,\n      range = new Array(n);\n\n  while (++i < n) {\n    range[i] = start + i * step;\n  }\n\n  return range;\n}\n\nvar e10 = Math.sqrt(50),\n    e5 = Math.sqrt(10),\n    e2 = Math.sqrt(2);\n\nfunction tickStep(start, stop, count) {\n  var step0 = Math.abs(stop - start) / Math.max(0, count),\n      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),\n      error = step0 / step1;\n  if (error >= e10) step1 *= 10;\n  else if (error >= e5) step1 *= 5;\n  else if (error >= e2) step1 *= 2;\n  return stop < start ? -step1 : step1;\n}\n\nfunction sturges(values) {\n  return Math.ceil(Math.log(count(values)) / Math.LN2) + 1;\n}\n\nfunction bin() {\n  var value = identity,\n      domain = extent,\n      threshold = sturges;\n\n  function histogram(data) {\n    if (!Array.isArray(data)) data = Array.from(data);\n\n    var i,\n        n = data.length,\n        x,\n        values = new Array(n);\n\n    for (i = 0; i < n; ++i) {\n      values[i] = value(data[i], i, data);\n    }\n\n    var xz = domain(values),\n        x0 = xz[0],\n        x1 = xz[1],\n        tz = threshold(values, x0, x1);\n\n    // Convert number of thresholds into uniform thresholds.\n    if (!Array.isArray(tz)) {\n      tz = tickStep(x0, x1, tz);\n      tz = range(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive\n    }\n\n    // Remove any thresholds outside the domain.\n    var m = tz.length;\n    while (tz[0] <= x0) tz.shift(), --m;\n    while (tz[m - 1] > x1) tz.pop(), --m;\n\n    var bins = new Array(m + 1),\n        bin;\n\n    // Initialize bins.\n    for (i = 0; i <= m; ++i) {\n      bin = bins[i] = [];\n      bin.x0 = i > 0 ? tz[i - 1] : x0;\n      bin.x1 = i < m ? tz[i] : x1;\n    }\n\n    // Assign data to bins by value, ignoring any outside the domain.\n    for (i = 0; i < n; ++i) {\n      x = values[i];\n      if (x0 <= x && x <= x1) {\n        bins[bisectRight(tz, x, 0, m)].push(data[i]);\n      }\n    }\n\n    return bins;\n  }\n\n  histogram.value = function(_) {\n    return arguments.length ? (value = typeof _ === \"function\" ? _ : constant(_), histogram) : value;\n  };\n\n  histogram.domain = function(_) {\n    return arguments.length ? (domain = typeof _ === \"function\" ? _ : constant([_[0], _[1]]), histogram) : domain;\n  };\n\n  histogram.thresholds = function(_) {\n    return arguments.length ? (threshold = typeof _ === \"function\" ? _ : Array.isArray(_) ? constant(slice.call(_)) : constant(_), histogram) : threshold;\n  };\n\n  return histogram;\n}\n\nfunction sum(values, valueof) {\n  let sum = 0;\n  if (valueof === undefined) {\n    for (let value of values) {\n      if (value = +value) {\n        sum += value;\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if (value = +valueof(value, ++index, values)) {\n        sum += value;\n      }\n    }\n  }\n  return sum;\n}\n\nfunction createCommonjsModule(fn, module) {\n\treturn module = { exports: {} }, fn(module, module.exports), module.exports;\n}\n\nvar simplexNoise = createCommonjsModule(function (module, exports) {\n/*\n * A fast javascript implementation of simplex noise by Jonas Wagner\n\nBased on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.\nWhich is based on example code by Stefan Gustavson (stegu@itn.liu.se).\nWith Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).\nBetter rank ordering method by Stefan Gustavson in 2012.\n\n\n Copyright (c) 2018 Jonas Wagner\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n */\n(function() {\n\n  var F2 = 0.5 * (Math.sqrt(3.0) - 1.0);\n  var G2 = (3.0 - Math.sqrt(3.0)) / 6.0;\n  var F3 = 1.0 / 3.0;\n  var G3 = 1.0 / 6.0;\n  var F4 = (Math.sqrt(5.0) - 1.0) / 4.0;\n  var G4 = (5.0 - Math.sqrt(5.0)) / 20.0;\n\n  function SimplexNoise(randomOrSeed) {\n    var random;\n    if (typeof randomOrSeed == 'function') {\n      random = randomOrSeed;\n    }\n    else if (randomOrSeed) {\n      random = alea(randomOrSeed);\n    } else {\n      random = Math.random;\n    }\n    this.p = buildPermutationTable(random);\n    this.perm = new Uint8Array(512);\n    this.permMod12 = new Uint8Array(512);\n    for (var i = 0; i < 512; i++) {\n      this.perm[i] = this.p[i & 255];\n      this.permMod12[i] = this.perm[i] % 12;\n    }\n\n  }\n  SimplexNoise.prototype = {\n    grad3: new Float32Array([1, 1, 0,\n      -1, 1, 0,\n      1, -1, 0,\n\n      -1, -1, 0,\n      1, 0, 1,\n      -1, 0, 1,\n\n      1, 0, -1,\n      -1, 0, -1,\n      0, 1, 1,\n\n      0, -1, 1,\n      0, 1, -1,\n      0, -1, -1]),\n    grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1,\n      0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1,\n      1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1,\n      -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1,\n      1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1,\n      -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1,\n      1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0,\n      -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]),\n    noise2D: function(xin, yin) {\n      var permMod12 = this.permMod12;\n      var perm = this.perm;\n      var grad3 = this.grad3;\n      var n0 = 0; // Noise contributions from the three corners\n      var n1 = 0;\n      var n2 = 0;\n      // Skew the input space to determine which simplex cell we're in\n      var s = (xin + yin) * F2; // Hairy factor for 2D\n      var i = Math.floor(xin + s);\n      var j = Math.floor(yin + s);\n      var t = (i + j) * G2;\n      var X0 = i - t; // Unskew the cell origin back to (x,y) space\n      var Y0 = j - t;\n      var x0 = xin - X0; // The x,y distances from the cell origin\n      var y0 = yin - Y0;\n      // For the 2D case, the simplex shape is an equilateral triangle.\n      // Determine which simplex we are in.\n      var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords\n      if (x0 > y0) {\n        i1 = 1;\n        j1 = 0;\n      } // lower triangle, XY order: (0,0)->(1,0)->(1,1)\n      else {\n        i1 = 0;\n        j1 = 1;\n      } // upper triangle, YX order: (0,0)->(0,1)->(1,1)\n      // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and\n      // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where\n      // c = (3-sqrt(3))/6\n      var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords\n      var y1 = y0 - j1 + G2;\n      var x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords\n      var y2 = y0 - 1.0 + 2.0 * G2;\n      // Work out the hashed gradient indices of the three simplex corners\n      var ii = i & 255;\n      var jj = j & 255;\n      // Calculate the contribution from the three corners\n      var t0 = 0.5 - x0 * x0 - y0 * y0;\n      if (t0 >= 0) {\n        var gi0 = permMod12[ii + perm[jj]] * 3;\n        t0 *= t0;\n        n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0); // (x,y) of grad3 used for 2D gradient\n      }\n      var t1 = 0.5 - x1 * x1 - y1 * y1;\n      if (t1 >= 0) {\n        var gi1 = permMod12[ii + i1 + perm[jj + j1]] * 3;\n        t1 *= t1;\n        n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1);\n      }\n      var t2 = 0.5 - x2 * x2 - y2 * y2;\n      if (t2 >= 0) {\n        var gi2 = permMod12[ii + 1 + perm[jj + 1]] * 3;\n        t2 *= t2;\n        n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2);\n      }\n      // Add contributions from each corner to get the final noise value.\n      // The result is scaled to return values in the interval [-1,1].\n      return 70.0 * (n0 + n1 + n2);\n    },\n    // 3D simplex noise\n    noise3D: function(xin, yin, zin) {\n      var permMod12 = this.permMod12;\n      var perm = this.perm;\n      var grad3 = this.grad3;\n      var n0, n1, n2, n3; // Noise contributions from the four corners\n      // Skew the input space to determine which simplex cell we're in\n      var s = (xin + yin + zin) * F3; // Very nice and simple skew factor for 3D\n      var i = Math.floor(xin + s);\n      var j = Math.floor(yin + s);\n      var k = Math.floor(zin + s);\n      var t = (i + j + k) * G3;\n      var X0 = i - t; // Unskew the cell origin back to (x,y,z) space\n      var Y0 = j - t;\n      var Z0 = k - t;\n      var x0 = xin - X0; // The x,y,z distances from the cell origin\n      var y0 = yin - Y0;\n      var z0 = zin - Z0;\n      // For the 3D case, the simplex shape is a slightly irregular tetrahedron.\n      // Determine which simplex we are in.\n      var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords\n      var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords\n      if (x0 >= y0) {\n        if (y0 >= z0) {\n          i1 = 1;\n          j1 = 0;\n          k1 = 0;\n          i2 = 1;\n          j2 = 1;\n          k2 = 0;\n        } // X Y Z order\n        else if (x0 >= z0) {\n          i1 = 1;\n          j1 = 0;\n          k1 = 0;\n          i2 = 1;\n          j2 = 0;\n          k2 = 1;\n        } // X Z Y order\n        else {\n          i1 = 0;\n          j1 = 0;\n          k1 = 1;\n          i2 = 1;\n          j2 = 0;\n          k2 = 1;\n        } // Z X Y order\n      }\n      else { // x0<y0\n        if (y0 < z0) {\n          i1 = 0;\n          j1 = 0;\n          k1 = 1;\n          i2 = 0;\n          j2 = 1;\n          k2 = 1;\n        } // Z Y X order\n        else if (x0 < z0) {\n          i1 = 0;\n          j1 = 1;\n          k1 = 0;\n          i2 = 0;\n          j2 = 1;\n          k2 = 1;\n        } // Y Z X order\n        else {\n          i1 = 0;\n          j1 = 1;\n          k1 = 0;\n          i2 = 1;\n          j2 = 1;\n          k2 = 0;\n        } // Y X Z order\n      }\n      // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),\n      // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and\n      // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where\n      // c = 1/6.\n      var x1 = x0 - i1 + G3; // Offsets for second corner in (x,y,z) coords\n      var y1 = y0 - j1 + G3;\n      var z1 = z0 - k1 + G3;\n      var x2 = x0 - i2 + 2.0 * G3; // Offsets for third corner in (x,y,z) coords\n      var y2 = y0 - j2 + 2.0 * G3;\n      var z2 = z0 - k2 + 2.0 * G3;\n      var x3 = x0 - 1.0 + 3.0 * G3; // Offsets for last corner in (x,y,z) coords\n      var y3 = y0 - 1.0 + 3.0 * G3;\n      var z3 = z0 - 1.0 + 3.0 * G3;\n      // Work out the hashed gradient indices of the four simplex corners\n      var ii = i & 255;\n      var jj = j & 255;\n      var kk = k & 255;\n      // Calculate the contribution from the four corners\n      var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;\n      if (t0 < 0) n0 = 0.0;\n      else {\n        var gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;\n        t0 *= t0;\n        n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);\n      }\n      var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;\n      if (t1 < 0) n1 = 0.0;\n      else {\n        var gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;\n        t1 *= t1;\n        n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);\n      }\n      var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;\n      if (t2 < 0) n2 = 0.0;\n      else {\n        var gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;\n        t2 *= t2;\n        n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);\n      }\n      var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;\n      if (t3 < 0) n3 = 0.0;\n      else {\n        var gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;\n        t3 *= t3;\n        n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);\n      }\n      // Add contributions from each corner to get the final noise value.\n      // The result is scaled to stay just inside [-1,1]\n      return 32.0 * (n0 + n1 + n2 + n3);\n    },\n    // 4D simplex noise, better simplex rank ordering method 2012-03-09\n    noise4D: function(x, y, z, w) {\n      var perm = this.perm;\n      var grad4 = this.grad4;\n\n      var n0, n1, n2, n3, n4; // Noise contributions from the five corners\n      // Skew the (x,y,z,w) space to determine which cell of 24 simplices we're in\n      var s = (x + y + z + w) * F4; // Factor for 4D skewing\n      var i = Math.floor(x + s);\n      var j = Math.floor(y + s);\n      var k = Math.floor(z + s);\n      var l = Math.floor(w + s);\n      var t = (i + j + k + l) * G4; // Factor for 4D unskewing\n      var X0 = i - t; // Unskew the cell origin back to (x,y,z,w) space\n      var Y0 = j - t;\n      var Z0 = k - t;\n      var W0 = l - t;\n      var x0 = x - X0; // The x,y,z,w distances from the cell origin\n      var y0 = y - Y0;\n      var z0 = z - Z0;\n      var w0 = w - W0;\n      // For the 4D case, the simplex is a 4D shape I won't even try to describe.\n      // To find out which of the 24 possible simplices we're in, we need to\n      // determine the magnitude ordering of x0, y0, z0 and w0.\n      // Six pair-wise comparisons are performed between each possible pair\n      // of the four coordinates, and the results are used to rank the numbers.\n      var rankx = 0;\n      var ranky = 0;\n      var rankz = 0;\n      var rankw = 0;\n      if (x0 > y0) rankx++;\n      else ranky++;\n      if (x0 > z0) rankx++;\n      else rankz++;\n      if (x0 > w0) rankx++;\n      else rankw++;\n      if (y0 > z0) ranky++;\n      else rankz++;\n      if (y0 > w0) ranky++;\n      else rankw++;\n      if (z0 > w0) rankz++;\n      else rankw++;\n      var i1, j1, k1, l1; // The integer offsets for the second simplex corner\n      var i2, j2, k2, l2; // The integer offsets for the third simplex corner\n      var i3, j3, k3, l3; // The integer offsets for the fourth simplex corner\n      // simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.\n      // Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w\n      // impossible. Only the 24 indices which have non-zero entries make any sense.\n      // We use a thresholding to set the coordinates in turn from the largest magnitude.\n      // Rank 3 denotes the largest coordinate.\n      i1 = rankx >= 3 ? 1 : 0;\n      j1 = ranky >= 3 ? 1 : 0;\n      k1 = rankz >= 3 ? 1 : 0;\n      l1 = rankw >= 3 ? 1 : 0;\n      // Rank 2 denotes the second largest coordinate.\n      i2 = rankx >= 2 ? 1 : 0;\n      j2 = ranky >= 2 ? 1 : 0;\n      k2 = rankz >= 2 ? 1 : 0;\n      l2 = rankw >= 2 ? 1 : 0;\n      // Rank 1 denotes the second smallest coordinate.\n      i3 = rankx >= 1 ? 1 : 0;\n      j3 = ranky >= 1 ? 1 : 0;\n      k3 = rankz >= 1 ? 1 : 0;\n      l3 = rankw >= 1 ? 1 : 0;\n      // The fifth corner has all coordinate offsets = 1, so no need to compute that.\n      var x1 = x0 - i1 + G4; // Offsets for second corner in (x,y,z,w) coords\n      var y1 = y0 - j1 + G4;\n      var z1 = z0 - k1 + G4;\n      var w1 = w0 - l1 + G4;\n      var x2 = x0 - i2 + 2.0 * G4; // Offsets for third corner in (x,y,z,w) coords\n      var y2 = y0 - j2 + 2.0 * G4;\n      var z2 = z0 - k2 + 2.0 * G4;\n      var w2 = w0 - l2 + 2.0 * G4;\n      var x3 = x0 - i3 + 3.0 * G4; // Offsets for fourth corner in (x,y,z,w) coords\n      var y3 = y0 - j3 + 3.0 * G4;\n      var z3 = z0 - k3 + 3.0 * G4;\n      var w3 = w0 - l3 + 3.0 * G4;\n      var x4 = x0 - 1.0 + 4.0 * G4; // Offsets for last corner in (x,y,z,w) coords\n      var y4 = y0 - 1.0 + 4.0 * G4;\n      var z4 = z0 - 1.0 + 4.0 * G4;\n      var w4 = w0 - 1.0 + 4.0 * G4;\n      // Work out the hashed gradient indices of the five simplex corners\n      var ii = i & 255;\n      var jj = j & 255;\n      var kk = k & 255;\n      var ll = l & 255;\n      // Calculate the contribution from the five corners\n      var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;\n      if (t0 < 0) n0 = 0.0;\n      else {\n        var gi0 = (perm[ii + perm[jj + perm[kk + perm[ll]]]] % 32) * 4;\n        t0 *= t0;\n        n0 = t0 * t0 * (grad4[gi0] * x0 + grad4[gi0 + 1] * y0 + grad4[gi0 + 2] * z0 + grad4[gi0 + 3] * w0);\n      }\n      var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;\n      if (t1 < 0) n1 = 0.0;\n      else {\n        var gi1 = (perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]] % 32) * 4;\n        t1 *= t1;\n        n1 = t1 * t1 * (grad4[gi1] * x1 + grad4[gi1 + 1] * y1 + grad4[gi1 + 2] * z1 + grad4[gi1 + 3] * w1);\n      }\n      var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;\n      if (t2 < 0) n2 = 0.0;\n      else {\n        var gi2 = (perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]] % 32) * 4;\n        t2 *= t2;\n        n2 = t2 * t2 * (grad4[gi2] * x2 + grad4[gi2 + 1] * y2 + grad4[gi2 + 2] * z2 + grad4[gi2 + 3] * w2);\n      }\n      var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;\n      if (t3 < 0) n3 = 0.0;\n      else {\n        var gi3 = (perm[ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]]] % 32) * 4;\n        t3 *= t3;\n        n3 = t3 * t3 * (grad4[gi3] * x3 + grad4[gi3 + 1] * y3 + grad4[gi3 + 2] * z3 + grad4[gi3 + 3] * w3);\n      }\n      var t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;\n      if (t4 < 0) n4 = 0.0;\n      else {\n        var gi4 = (perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]] % 32) * 4;\n        t4 *= t4;\n        n4 = t4 * t4 * (grad4[gi4] * x4 + grad4[gi4 + 1] * y4 + grad4[gi4 + 2] * z4 + grad4[gi4 + 3] * w4);\n      }\n      // Sum up and scale the result to cover the range [-1,1]\n      return 27.0 * (n0 + n1 + n2 + n3 + n4);\n    }\n  };\n\n  function buildPermutationTable(random) {\n    var i;\n    var p = new Uint8Array(256);\n    for (i = 0; i < 256; i++) {\n      p[i] = i;\n    }\n    for (i = 0; i < 255; i++) {\n      var r = i + ~~(random() * (256 - i));\n      var aux = p[i];\n      p[i] = p[r];\n      p[r] = aux;\n    }\n    return p;\n  }\n  SimplexNoise._buildPermutationTable = buildPermutationTable;\n\n  function alea() {\n    // Johannes Baagøe <baagoe@baagoe.com>, 2010\n    var s0 = 0;\n    var s1 = 0;\n    var s2 = 0;\n    var c = 1;\n\n    var mash = masher();\n    s0 = mash(' ');\n    s1 = mash(' ');\n    s2 = mash(' ');\n\n    for (var i = 0; i < arguments.length; i++) {\n      s0 -= mash(arguments[i]);\n      if (s0 < 0) {\n        s0 += 1;\n      }\n      s1 -= mash(arguments[i]);\n      if (s1 < 0) {\n        s1 += 1;\n      }\n      s2 -= mash(arguments[i]);\n      if (s2 < 0) {\n        s2 += 1;\n      }\n    }\n    mash = null;\n    return function() {\n      var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32\n      s0 = s1;\n      s1 = s2;\n      return s2 = t - (c = t | 0);\n    };\n  }\n  function masher() {\n    var n = 0xefc8249d;\n    return function(data) {\n      data = data.toString();\n      for (var i = 0; i < data.length; i++) {\n        n += data.charCodeAt(i);\n        var h = 0.02519603282416938 * n;\n        n = h >>> 0;\n        h -= n;\n        h *= n;\n        n = h >>> 0;\n        h -= n;\n        n += h * 0x100000000; // 2^32\n      }\n      return (n >>> 0) * 2.3283064365386963e-10; // 2^-32\n    };\n  }\n  // common js\n  exports.SimplexNoise = SimplexNoise;\n  // nodejs\n  {\n    module.exports = SimplexNoise;\n  }\n\n})();\n});\nvar simplexNoise_1 = simplexNoise.SimplexNoise;\n\n// @ts-ignore\r\nconst simplex = new simplexNoise();\r\nconst generateGrid = ({ frame, numberOfElements, unitSize, width, height }) => {\r\n    const elements = generateElements({ frame, numberOfElements });\r\n    return elementsToGrid({ elements, unitSize, width, height });\r\n};\r\nconst generateElements = ({ frame, numberOfElements = 1000 }) => {\r\n    const elems = range(numberOfElements).map(elem => {\r\n        const u = (simplex.noise2D(elem, frame / 10000) + 1) / 2;\r\n        const v = (simplex.noise2D(u, elem) + 1) / 2;\r\n        const value = (simplex.noise2D(u, v) + 1) / 2;\r\n        return { u, v, value };\r\n    });\r\n    return elems;\r\n};\r\nconst elementsToGrid = ({ elements, unitSize, width, height }) => {\r\n    const numberOfColumns = Math.ceil(width / unitSize);\r\n    const numberOfRows = Math.ceil(height / unitSize);\r\n    return calcGrid({ numberOfColumns, numberOfRows, elements });\r\n};\r\nconst calcGrid = ({ numberOfColumns, numberOfRows, elements }) => {\r\n    const xbin = bin()\r\n        .domain([0, 1])\r\n        .thresholds(numberOfColumns)\r\n        .value(({ u }) => u);\r\n    const cols = xbin(elements);\r\n    const binnedElements = cols.map(col => {\r\n        const ybin = bin()\r\n            .domain([0, 1])\r\n            .thresholds(numberOfRows)\r\n            .value(({ v }) => v);\r\n        const cells = ybin(col);\r\n        return cells.map(cell => {\r\n            const u = col.x0;\r\n            const v = cell.x0;\r\n            const w = col.x1 - col.x0;\r\n            const h = cell.x1 - cell.x0;\r\n            // @ts-ignore\r\n            const value = sum(cell, c => c.value) / cell.length;\r\n            return { u, v, width: w, height: h, value: value || 0 };\r\n        });\r\n    });\r\n    // @ts-ignore\r\n    return binnedElements.flat();\r\n};\r\nonmessage = (message) => {\r\n    const { frame, numberOfElements, unitSize, width, height } = JSON.parse(message.data);\r\n    const grid = generateGrid({\r\n        frame,\r\n        numberOfElements,\r\n        unitSize,\r\n        width,\r\n        height\r\n    });\r\n    // @ts-ignore\r\n    postMessage(JSON.stringify(grid));\r\n};\n";

const useAnimatedGridCanvas = ({ width, height, unitSize, colors, shape }) => {
    const [grid, elementsWorker] = useComputationWorker(workerFn);
    const callback = react.useCallback((frame) => {
        if (elementsWorker) {
            const payload = JSON.stringify({
                frame,
                numberOfElements: 1000,
                unitSize,
                width,
                height
            });
            elementsWorker.postMessage(payload);
        }
    }, [unitSize, width, height, elementsWorker]);
    useAnimationFrame({ callback, delay: 1000 });
    return useGridCanvas({ width, shape, unitSize, grid, colors, height });
};
//# sourceMappingURL=index.js.map

const useShowTab = () => {
    const [isVisible, setVisibility] = react.useState(true);
    const handlePositionChange = ({ currentPosition }) => {
        setVisibility(currentPosition !== "inside" ? true : false);
    };
    return [isVisible, handlePositionChange];
};
//# sourceMappingURL=useShowTab.js.map

exports.useAnimatedGridCanvas = useAnimatedGridCanvas;
exports.useAnimationFrame = useAnimationFrame;
exports.useCanvas = useCanvas;
exports.useCycleItems = useCycleItems;
exports.useGridCanvas = useGridCanvas;
exports.useInterval = useInterval;
exports.useShowTab = useShowTab;
//# sourceMappingURL=index.js.map
