'use strict';
var $p;
var $fileLevelThis = this;
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys;
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  }
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = ({});
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, ({
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      }));
      i = ((i + 1) | 0);
    }
    return descriptors;
  });
})());
var $L0;
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = (function() {
  return String.fromCharCode(this.c);
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.Z ? arg0.m() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.l();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.l();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.l();
        } else {
          return $d_jl_Integer.l();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.l();
      } else {
        return $d_jl_Double.l();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.l();
    }
    case "undefined": {
      return $d_jl_Void.l();
    }
    default: {
      if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.l();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.l();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.l();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.N;
      } else {
        return null.xb();
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.k(x0);
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0);
      } else {
        return $c_O.prototype.k.call(instance, x0);
      }
    }
  }
}
function $dp_getChars__I__I__AC__I__V(instance, x0, x1, x2, x3) {
  if (((typeof instance) === "string")) {
    return $f_T__getChars__I__I__AC__I__V(instance, x0, x1, x2, x3);
  } else {
    return instance.rP(x0, x1, x2, x3);
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.u();
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.u.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.xc(x0);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $intDiv(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return ((arg0 / arg1) | 0);
  }
}
function $intMod(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return ((arg0 % arg1) | 0);
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c);
}
function $uJ(arg0) {
  return ((arg0 === null) ? $L0 : arg0);
}
function $ct_O__($thiz) {
  return $thiz;
}
/** @constructor */
function $c_O() {
}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $p;
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.k = (function(that) {
  return (this === that);
});
$p.v = (function() {
  var i = this.u();
  return (($objectClassName(this) + "@") + (+(i >>> 0.0)).toString(16));
});
$p.toString = (function() {
  return this.v();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = null;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.r = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.m = (function() {
  return new $ac_O(this.a.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = false;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.r = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.m = (function() {
  return new $ac_Z(this.a.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Uint16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.r = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.m = (function() {
  return new $ac_C(this.a.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int8Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.r = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.m = (function() {
  return new $ac_B(this.a.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.r = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.m = (function() {
  return new $ac_S(this.a.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.r = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.m = (function() {
  return new $ac_I(this.a.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = $L0;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.r = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.m = (function() {
  return new $ac_J(this.a.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.r = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.m = (function() {
  return new $ac_F(this.a.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float64Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.r = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.m = (function() {
  return new $ac_D(this.a.slice());
});
function $TypeData() {
  this.C = (void 0);
  this.n = null;
  this.O = null;
  this.B = null;
  this.D = 0;
  this.z = null;
  this.E = "";
  this.L = (void 0);
  this.A = (void 0);
  this.F = (void 0);
  this.w = (void 0);
  this.J = false;
  this.N = "";
  this.X = false;
  this.Y = false;
  this.Z = false;
  this.I = (void 0);
}
$p = $TypeData.prototype;
$p.p = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.n = ({});
  this.z = zero;
  this.E = arrayEncodedName;
  var self = this;
  this.F = ((that) => (that === self));
  this.N = displayName;
  this.X = true;
  this.I = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass);
  }
  return this;
});
$p.i = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.n = ancestors;
  this.E = (("L" + fullName) + ";");
  this.F = ((that) => (!(!that.n[internalName])));
  this.J = (kindOrCtor === 2);
  this.N = fullName;
  this.Y = (kindOrCtor === 1);
  this.I = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.n[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$p.y = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.E);
  this.C = arrayClass;
  this.n = ({
    F: 1,
    a: 1
  });
  this.O = componentData;
  this.B = componentData;
  this.D = 1;
  this.E = name;
  this.N = name;
  this.Z = true;
  var self = this;
  this.F = (isAssignableFromFun || ((that) => (self === that)));
  this.w = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.I = ((obj) => (obj instanceof arrayClass));
  return this;
});
$p.a = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.a = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.a[i] = null;
      }
    } else {
      this.a = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.r = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.m = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    F: 1,
    a: 1
  });
  this.O = componentData;
  this.B = arrayBase;
  this.D = arrayDepth;
  this.E = name;
  this.N = name;
  this.Z = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.D;
    return ((thatDepth === arrayDepth) ? arrayBase.F(that.B) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.F = isAssignableFromFun;
  this.w = ((array) => new ArrayClass(array));
  var self = this;
  this.I = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$p.r = (function() {
  if ((!this.A)) {
    this.A = new $TypeData().a(this);
  }
  return this.A;
});
$p.l = (function() {
  if ((!this.L)) {
    this.L = new $c_jl_Class(this);
  }
  return this.L;
});
$p.R = (function(that) {
  return ((this === that) || this.F(that));
});
$p.S = (function() {
  return (this.P ? this.P.l() : null);
});
$p.Q = (function() {
  return (this.O ? this.O.l() : null);
});
$p.U = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.r().C)(length);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.D;
    return ((arrayDepth === depth) ? (!data.B.X) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_D))));
}
var $d_O = new $TypeData();
$d_O.n = ({});
$d_O.E = "Ljava.lang.Object;";
$d_O.F = ((that) => (!that.X));
$d_O.N = "java.lang.Object";
$d_O.I = ((obj) => (obj !== null));
$d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.D;
  return ((thatDepth === 1) ? (!that.B.X) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().p((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().p(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().p(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
/** @constructor */
function $c_Lapp_tulz_tuplez_Composition() {
}
$p = $c_Lapp_tulz_tuplez_Composition.prototype = new $h_O();
$p.constructor = $c_Lapp_tulz_tuplez_Composition;
/** @constructor */
function $h_Lapp_tulz_tuplez_Composition() {
}
$h_Lapp_tulz_tuplez_Composition.prototype = $p;
/** @constructor */
function $c_Lcom_raquo_airstream_combine_CombineObservable$() {
}
$p = $c_Lcom_raquo_airstream_combine_CombineObservable$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_combine_CombineObservable$;
/** @constructor */
function $h_Lcom_raquo_airstream_combine_CombineObservable$() {
}
$h_Lcom_raquo_airstream_combine_CombineObservable$.prototype = $p;
$p.vg = (function(trys, combinator) {
  var elem = false;
  elem = true;
  var i = 0;
  var len = (trys.length | 0);
  while ((i < len)) {
    if (trys[i].mp()) {
      var ev$6 = false;
      elem = ev$6;
    }
    i = ((1 + i) | 0);
  }
  if (elem) {
    var values = trys.map(((_$3) => _$3.E()));
    return new $c_s_util_Success(combinator.b(values));
  } else {
    var arr = trys.map(((x$1) => ((x$1 instanceof $c_s_util_Failure) ? new $c_s_Some(x$1.du) : $m_s_None$())));
    return new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError($m_sci_IndexedSeq$().md($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), arr))));
  }
});
var $d_Lcom_raquo_airstream_combine_CombineObservable$ = new $TypeData().i($c_Lcom_raquo_airstream_combine_CombineObservable$, "com.raquo.airstream.combine.CombineObservable$", ({
  dt: 1
}));
var $n_Lcom_raquo_airstream_combine_CombineObservable$;
function $m_Lcom_raquo_airstream_combine_CombineObservable$() {
  if ((!$n_Lcom_raquo_airstream_combine_CombineObservable$)) {
    $n_Lcom_raquo_airstream_combine_CombineObservable$ = new $c_Lcom_raquo_airstream_combine_CombineObservable$();
  }
  return $n_Lcom_raquo_airstream_combine_CombineObservable$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_combine_generated_CombinableSignal$() {
}
$p = $c_Lcom_raquo_airstream_combine_generated_CombinableSignal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_combine_generated_CombinableSignal$;
/** @constructor */
function $h_Lcom_raquo_airstream_combine_generated_CombinableSignal$() {
}
$h_Lcom_raquo_airstream_combine_generated_CombinableSignal$.prototype = $p;
$p.gR = (function(this$, s1, c) {
  return $m_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$().tP(this$, s1, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((a, v1) => c.ik(a, v1))));
});
var $d_Lcom_raquo_airstream_combine_generated_CombinableSignal$ = new $TypeData().i($c_Lcom_raquo_airstream_combine_generated_CombinableSignal$, "com.raquo.airstream.combine.generated.CombinableSignal$", ({
  dv: 1
}));
var $n_Lcom_raquo_airstream_combine_generated_CombinableSignal$;
function $m_Lcom_raquo_airstream_combine_generated_CombinableSignal$() {
  if ((!$n_Lcom_raquo_airstream_combine_generated_CombinableSignal$)) {
    $n_Lcom_raquo_airstream_combine_generated_CombinableSignal$ = new $c_Lcom_raquo_airstream_combine_generated_CombinableSignal$();
  }
  return $n_Lcom_raquo_airstream_combine_generated_CombinableSignal$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$() {
}
$p = $c_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$;
/** @constructor */
function $h_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$() {
}
$h_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$.prototype = $p;
$p.tP = (function(s1, s2, combinator) {
  return new $c_Lcom_raquo_airstream_combine_CombineSignalN($m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_core_Signal.r().C)([s1.iF(), s2.iF()]))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((arr) => combinator.bd(arr[0], arr[1]))));
});
var $d_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$ = new $TypeData().i($c_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$, "com.raquo.airstream.combine.generated.StaticSignalCombineOps$", ({
  dw: 1
}));
var $n_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$;
function $m_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$() {
  if ((!$n_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$)) {
    $n_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$ = new $c_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$();
  }
  return $n_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_common_InternalParentObserver$() {
}
$p = $c_Lcom_raquo_airstream_common_InternalParentObserver$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_common_InternalParentObserver$;
/** @constructor */
function $h_Lcom_raquo_airstream_common_InternalParentObserver$() {
}
$h_Lcom_raquo_airstream_common_InternalParentObserver$.prototype = $p;
$p.uM = (function(parent, onTry) {
  return new $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2(parent, onTry, this);
});
var $d_Lcom_raquo_airstream_common_InternalParentObserver$ = new $TypeData().i($c_Lcom_raquo_airstream_common_InternalParentObserver$, "com.raquo.airstream.common.InternalParentObserver$", ({
  dy: 1
}));
var $n_Lcom_raquo_airstream_common_InternalParentObserver$;
function $m_Lcom_raquo_airstream_common_InternalParentObserver$() {
  if ((!$n_Lcom_raquo_airstream_common_InternalParentObserver$)) {
    $n_Lcom_raquo_airstream_common_InternalParentObserver$ = new $c_Lcom_raquo_airstream_common_InternalParentObserver$();
  }
  return $n_Lcom_raquo_airstream_common_InternalParentObserver$;
}
var $d_Lcom_raquo_airstream_core_InternalObserver = new $TypeData().i(1, "com.raquo.airstream.core.InternalObserver", ({
  aE: 1
}));
function $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T($thiz) {
  return (($objectGetClass($thiz).mi() + "@") + $thiz.u());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.eb();
  return ((x === (void 0)) ? $thiz.e7() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().mW(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))), $m_s_PartialFunction$().j6, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.mW = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.rN = (function(onTry, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTry, handleObserverErrors, this);
});
var $d_Lcom_raquo_airstream_core_Observer$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$, "com.raquo.airstream.core.Observer$", ({
  dD: 1
}));
var $n_Lcom_raquo_airstream_core_Observer$;
function $m_Lcom_raquo_airstream_core_Observer$() {
  if ((!$n_Lcom_raquo_airstream_core_Observer$)) {
    $n_Lcom_raquo_airstream_core_Observer$ = new $c_Lcom_raquo_airstream_core_Observer$();
  }
  return $n_Lcom_raquo_airstream_core_Observer$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_ObserverList$() {
}
$p = $c_Lcom_raquo_airstream_core_ObserverList$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_ObserverList$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_ObserverList$() {
}
$h_Lcom_raquo_airstream_core_ObserverList$.prototype = $p;
$p.sd = (function(this$, observer) {
  var index = (this$.indexOf(observer) | 0);
  var shouldRemove = (index !== (-1));
  if (shouldRemove) {
    this$.splice(index, 1);
  }
  return shouldRemove;
});
var $d_Lcom_raquo_airstream_core_ObserverList$ = new $TypeData().i($c_Lcom_raquo_airstream_core_ObserverList$, "com.raquo.airstream.core.ObserverList$", ({
  dG: 1
}));
var $n_Lcom_raquo_airstream_core_ObserverList$;
function $m_Lcom_raquo_airstream_core_ObserverList$() {
  if ((!$n_Lcom_raquo_airstream_core_ObserverList$)) {
    $n_Lcom_raquo_airstream_core_ObserverList$ = new $c_Lcom_raquo_airstream_core_ObserverList$();
  }
  return $n_Lcom_raquo_airstream_core_ObserverList$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Protected() {
}
$p = $c_Lcom_raquo_airstream_core_Protected.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Protected;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Protected() {
}
$h_Lcom_raquo_airstream_core_Protected.prototype = $p;
var $d_Lcom_raquo_airstream_core_Protected = new $TypeData().i($c_Lcom_raquo_airstream_core_Protected, "com.raquo.airstream.core.Protected", ({
  dH: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Protected$() {
  this.sC = null;
  $n_Lcom_raquo_airstream_core_Protected$ = this;
  this.sC = new $c_Lcom_raquo_airstream_core_Protected();
}
$p = $c_Lcom_raquo_airstream_core_Protected$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Protected$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Protected$() {
}
$h_Lcom_raquo_airstream_core_Protected$.prototype = $p;
$p.vr = (function(minRank, observables) {
  var elem = 0;
  elem = minRank;
  var i = 0;
  var len = (observables.length | 0);
  while ((i < len)) {
    var observable = observables[i];
    var rank = observable.eg();
    if ((rank > elem)) {
      var ev$2 = rank;
      elem = ev$2;
    }
    i = ((1 + i) | 0);
  }
  return elem;
});
var $d_Lcom_raquo_airstream_core_Protected$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Protected$, "com.raquo.airstream.core.Protected$", ({
  dI: 1
}));
var $n_Lcom_raquo_airstream_core_Protected$;
function $m_Lcom_raquo_airstream_core_Protected$() {
  if ((!$n_Lcom_raquo_airstream_core_Protected$)) {
    $n_Lcom_raquo_airstream_core_Protected$ = new $c_Lcom_raquo_airstream_core_Protected$();
  }
  return $n_Lcom_raquo_airstream_core_Protected$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Signal$() {
  this.fP = 0;
  this.fP = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.s4 = (function() {
  if ((this.fP === 2147483647)) {
    this.fP = 1;
  } else {
    this.fP = ((1 + this.fP) | 0);
  }
  return this.fP;
});
var $d_Lcom_raquo_airstream_core_Signal$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Signal$, "com.raquo.airstream.core.Signal$", ({
  dJ: 1
}));
var $n_Lcom_raquo_airstream_core_Signal$;
function $m_Lcom_raquo_airstream_core_Signal$() {
  if ((!$n_Lcom_raquo_airstream_core_Signal$)) {
    $n_Lcom_raquo_airstream_core_Signal$ = new $c_Lcom_raquo_airstream_core_Signal$();
  }
  return $n_Lcom_raquo_airstream_core_Signal$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction(code) {
  this.kh = null;
  this.ho = null;
  this.ki = 0;
  this.kh = code;
  this.ho = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().iA();
  this.ki = ((x === (void 0)) ? 1 : ((1 + x.ki) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().iK === (-1)) || (this.ki > $m_Lcom_raquo_airstream_core_Transaction$().iK))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().cV(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().iK));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().bK) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().eW.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().lO(this);
  }
}
$p = $c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
}
$h_Lcom_raquo_airstream_core_Transaction.prototype = $p;
$p.tR = (function(observable) {
  var x = this.ho;
  var x$1 = ((x === (void 0)) ? (void 0) : x.al(observable));
  return ((x$1 === (void 0)) ? false : x$1);
});
$p.uo = (function(observable) {
  var x = this.ho;
  if ((x === (void 0))) {
    var newQueue = new $c_Lcom_raquo_airstream_util_JsPriorityQueue(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((observable$1) => observable$1.kc)));
    this.ho = newQueue;
    var $x_1 = newQueue;
  } else {
    var $x_1 = x;
  }
  $x_1.un(observable);
});
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction, "com.raquo.airstream.core.Transaction", ({
  dL: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.iK = 0;
  this.ne = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.iK = 1000;
  this.ne = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."));
  }));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $p;
$p.rk = (function(transaction) {
  try {
    transaction.kh.b(transaction);
    var x = transaction.ho;
    if ((x !== (void 0))) {
      while (((x.el.length | 0) !== 0)) {
        if (((x.el.length | 0) === 0)) {
          throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to dequeue an empty JsPriorityQueue");
        }
        $f_Lcom_raquo_airstream_combine_CombineObservable__syncFire__Lcom_raquo_airstream_core_Transaction__V(x.el.shift(), transaction);
      }
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cV(e$2);
  }
});
var $d_Lcom_raquo_airstream_core_Transaction$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$, "com.raquo.airstream.core.Transaction$", ({
  dM: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$;
function $m_Lcom_raquo_airstream_core_Transaction$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$)) {
    $n_Lcom_raquo_airstream_core_Transaction$ = new $c_Lcom_raquo_airstream_core_Transaction$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$;
}
function $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V($thiz) {
  if ((($thiz.iL.length | 0) === 0)) {
    if ((($thiz.eW.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
        while ((($thiz.eW.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().lO($thiz.eW.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
      while ((($thiz.iL.length | 0) > 0)) {
        var callback = $thiz.iL.shift();
        try {
          callback.b(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().cV(e$2);
        }
      }
      while ((($thiz.eW.length | 0) > 0)) {
        var _trx = $thiz.eW.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().lO(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.bK = false;
  this.iL = null;
  this.eW = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.bK = false;
  this.iL = $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().A(new ($d_F1.r().C)([])));
  this.eW = $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$onStart$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$onStart$() {
}
$h_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction$onStart$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$onStart$, "com.raquo.airstream.core.Transaction$onStart$", ({
  dN: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$onStart$;
function $m_Lcom_raquo_airstream_core_Transaction$onStart$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$onStart$)) {
    $n_Lcom_raquo_airstream_core_Transaction$onStart$ = new $c_Lcom_raquo_airstream_core_Transaction$onStart$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$onStart$;
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, transaction) {
  return $thiz.eX.get(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.iM.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.iM.shift();
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.eX.set(parent, newChildren);
  }
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O($thiz, parent) {
  var maybeParentChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var x = (((maybeParentChildren === (void 0)) || ((maybeParentChildren.length | 0) > 0)) ? maybeParentChildren : (void 0));
  if ((x === (void 0))) {
    return (void 0);
  } else {
    var nextChild = x.shift();
    if (((x.length | 0) === 0)) {
      (!(!$thiz.eX.delete(parent)));
    }
    return nextChild;
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.iM = null;
  this.eX = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.iM = $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.eX = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.lO = (function(newTransaction) {
  var x = this.iA();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().rk(newTransaction);
    this.ui(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.ui = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.iA();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().i(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.vQ(transaction$tailLocal1);
    transaction$tailLocal1.kh = $m_Lcom_raquo_airstream_core_Transaction$().ne;
    var maybeNextTransaction = this.iA();
    if ($m_sr_BoxesRunTime$().i(maybeNextTransaction, (void 0))) {
      if (((this.eX.size | 0) > 0)) {
        var numChildren = new $c_sr_IntRef(0);
        this.eX.forEach(((numChildren) => ((transactions, _$4) => {
          var ev$12 = ((numChildren.b4 + (transactions.length | 0)) | 0);
          numChildren.b4 = ev$12;
        }))(numChildren));
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.b4) + " children for ") + (this.eX.size | 0)) + " transactions remain. This is a bug in Airstream."));
      } else {
        return (void 0);
      }
    } else {
      $m_Lcom_raquo_airstream_core_Transaction$().rk(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.vQ = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().i(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.iA();
      if ((!$m_sr_BoxesRunTime$().i(maybeParentTransaction, (void 0)))) {
        doneTransaction$tailLocal1 = maybeParentTransaction;
      } else {
        return (void 0);
      }
    } else {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, maybeNextChildTrx);
      return (void 0);
    }
  }
});
$p.iA = (function() {
  return this.iM[0];
});
var $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$, "com.raquo.airstream.core.Transaction$pendingTransactions$", ({
  dO: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
function $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$)) {
    $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$Config(onWillStart, onStart, onStop) {
  this.ni = null;
  this.ng = null;
  this.nh = null;
  this.ni = onWillStart;
  this.ng = onStart;
  this.nh = onStop;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$Config;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$Config() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = $p;
var $d_Lcom_raquo_airstream_custom_CustomSource$Config = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config, "com.raquo.airstream.custom.CustomSource$Config", ({
  dR: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$Config$() {
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$Config$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$Config$;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$Config$() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$Config$.prototype = $p;
$p.tz = (function(onStart, onStop) {
  return new $c_Lcom_raquo_airstream_custom_CustomSource$Config(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => (void 0))), onStart, onStop);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config$, "com.raquo.airstream.custom.CustomSource$Config$", ({
  dS: 1
}));
var $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
function $m_Lcom_raquo_airstream_custom_CustomSource$Config$() {
  if ((!$n_Lcom_raquo_airstream_custom_CustomSource$Config$)) {
    $n_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $c_Lcom_raquo_airstream_custom_CustomSource$Config$();
  }
  return $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscription) {
  var index = ($thiz.ej.indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.ej.splice(index, 1);
    if ((!$thiz.cn.c())) {
      subscription.s7();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.iQ.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.iQ.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.nN = null;
  this.ej = null;
  this.fQ = false;
  this.iQ = null;
  this.cn = null;
  this.fR = 0;
  this.nN = onAccessAfterKilled;
  this.ej = $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.fQ = true;
  this.iQ = $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.cn = $m_s_None$();
  this.fR = 0;
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $p;
$p.qV = (function() {
  if ((!(!this.cn.c()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.nN);
      this.cn = new $c_s_Some(newOwner);
      this.fQ = false;
      this.fR = 0;
      var i = 0;
      var originalNumSubs = (this.ej.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.fR) | 0);
        this.ej[ix].s6(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.fQ = true;
      this.fR = 0;
    });
    $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var when = true;
    if ((this$4.bK || (!when))) {
      f();
    } else {
      this$4.bK = true;
      try {
        f();
      } finally {
        this$4.bK = false;
        $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$4);
      }
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"));
  }
});
$p.ud = (function() {
  if ((!this.cn.c())) {
    this.fQ = false;
    var arr = this.ej;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].s7();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.cn;
    if ((!this$4.c())) {
      this$4.E().mt();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.fQ = true;
    this.cn = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.to = (function(subscription, prepend) {
  if (prepend) {
    this.fR = ((1 + this.fR) | 0);
    this.ej.unshift(subscription);
  } else {
    this.ej.push(subscription);
  }
  var this$1 = this.cn;
  if ((!this$1.c())) {
    var x0 = this$1.E();
    subscription.s6(x0);
  }
});
$p.vX = (function(subscription) {
  if (this.fQ) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.iQ.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  dX: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.iR = null;
  this.nO = null;
  this.iS = null;
  this.iR = dynamicOwner;
  this.nO = activate;
  this.iS = $m_s_None$();
  dynamicOwner.to(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.jU = (function() {
  this.iR.vX(this);
});
$p.s6 = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.iS = this.nO.b(owner);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bK || (!when))) {
    f();
  } else {
    this$2.bK = true;
    try {
      f();
    } finally {
      this$2.bK = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
$p.s7 = (function() {
  var this$1 = this.iS;
  if ((!this$1.c())) {
    this$1.E().jU();
    this.iS = $m_s_None$();
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription, "com.raquo.airstream.ownership.DynamicSubscription", ({
  dY: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription$;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype = $p;
$p.iI = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => new $c_s_Some(activate.b(owner)))), prepend);
});
$p.ss = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => {
    activate.b(owner);
    return $m_s_None$();
  })), prepend);
});
$p.wp = (function(dynamicOwner, observable, onNext) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iI(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(observable, onNext, owner))), false);
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription$, "com.raquo.airstream.ownership.DynamicSubscription$", ({
  dZ: 1
}));
var $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
function $m_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  if ((!$n_Lcom_raquo_airstream_ownership_DynamicSubscription$)) {
    $n_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $c_Lcom_raquo_airstream_ownership_DynamicSubscription$();
  }
  return $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
}
function $f_Lcom_raquo_airstream_ownership_Owner__$init$__V($thiz) {
  $thiz.m0($m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.fK();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.fK().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.fK().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.fK().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.fK().push(subscription);
}
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.kr)) {
    $thiz.nS.L();
    $thiz.kr = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.nT = null;
  this.nS = null;
  this.kr = false;
  this.nT = owner;
  this.nS = cleanup;
  this.kr = false;
  owner.mE(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.jU = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this.nT, this);
});
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  e2: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.nU = null;
  this.nV = null;
  this.ek = null;
  this.eY = false;
  this.nU = activate;
  this.nV = deactivate;
  this.ek = $m_s_None$();
  this.eY = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.v8 = (function() {
  var this$1 = this.ek;
  return ((!this$1.c()) && (!this$1.E().iR.cn.c()));
});
$p.wj = (function(nextOwner) {
  if (this.eY) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.ek;
  if ((!this$1.c())) {
    var x0 = this$1.E();
    var x$2 = x0.iR;
    var $x_1 = (nextOwner === x$2);
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.v8() && (!nextOwner.cn.c()))) {
      this.eY = true;
    }
    var this$3 = this.ek;
    if ((!this$3.c())) {
      this$3.E().jU();
      this.ek = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iI(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((parentOwner) => {
      if ((!this.eY)) {
        this.nU.L();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        if ((!this.eY)) {
          this.nV.L();
        }
      })));
    })), false);
    this.ek = new $c_s_Some(newPilotSubscription);
    this.eY = false;
  }
});
$p.tM = (function() {
  if (this.eY) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.ek;
  if ((!this$1.c())) {
    this$1.E().jU();
  }
  this.ek = $m_s_None$();
});
var $d_Lcom_raquo_airstream_ownership_TransferableSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_TransferableSubscription, "com.raquo.airstream.ownership.TransferableSubscription", ({
  e3: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_util_JsPriorityQueue(getRank) {
  this.kv = null;
  this.el = null;
  this.kv = getRank;
  this.el = $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().rO(new $ac_O([])));
}
$p = $c_Lcom_raquo_airstream_util_JsPriorityQueue.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_util_JsPriorityQueue;
/** @constructor */
function $h_Lcom_raquo_airstream_util_JsPriorityQueue() {
}
$h_Lcom_raquo_airstream_util_JsPriorityQueue.prototype = $p;
$p.un = (function(item) {
  var itemRank = (this.kv.b(item) | 0);
  var insertAtIndex = 0;
  var foundHigherRank = false;
  while (((insertAtIndex < (this.el.length | 0)) && (!foundHigherRank))) {
    if (((this.kv.b(this.el[insertAtIndex]) | 0) > itemRank)) {
      foundHigherRank = true;
    } else {
      insertAtIndex = ((1 + insertAtIndex) | 0);
    }
  }
  this.el.splice(insertAtIndex, 0, item);
});
$p.al = (function(item) {
  return ((this.el.indexOf(item) | 0) !== (-1));
});
var $d_Lcom_raquo_airstream_util_JsPriorityQueue = new $TypeData().i($c_Lcom_raquo_airstream_util_JsPriorityQueue, "com.raquo.airstream.util.JsPriorityQueue", ({
  ea: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_web_DomEventStream$() {
}
$p = $c_Lcom_raquo_airstream_web_DomEventStream$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_web_DomEventStream$;
/** @constructor */
function $h_Lcom_raquo_airstream_web_DomEventStream$() {
}
$h_Lcom_raquo_airstream_web_DomEventStream$.prototype = $p;
$p.r6 = (function(eventTarget, eventKey, useCapture) {
  return new $c_Lcom_raquo_airstream_custom_CustomStreamSource(new $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(((fireValue, _$1, _$2, _$3) => {
    var eventHandler = $m_sjs_js_Any$().rK(fireValue);
    return $m_Lcom_raquo_airstream_custom_CustomSource$Config$().tz(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.addEventListener(eventKey, eventHandler, useCapture);
    })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.removeEventListener(eventKey, eventHandler, useCapture);
    })));
  })));
});
var $d_Lcom_raquo_airstream_web_DomEventStream$ = new $TypeData().i($c_Lcom_raquo_airstream_web_DomEventStream$, "com.raquo.airstream.web.DomEventStream$", ({
  eb: 1
}));
var $n_Lcom_raquo_airstream_web_DomEventStream$;
function $m_Lcom_raquo_airstream_web_DomEventStream$() {
  if ((!$n_Lcom_raquo_airstream_web_DomEventStream$)) {
    $n_Lcom_raquo_airstream_web_DomEventStream$ = new $c_Lcom_raquo_airstream_web_DomEventStream$();
  }
  return $n_Lcom_raquo_airstream_web_DomEventStream$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_web_WebStorageBuilder(maybeStorage, key, syncOwner) {
  this.o7 = null;
  this.o6 = null;
  this.o8 = null;
  this.o7 = maybeStorage;
  this.o6 = key;
  this.o8 = syncOwner;
}
$p = $c_Lcom_raquo_airstream_web_WebStorageBuilder.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_web_WebStorageBuilder;
/** @constructor */
function $h_Lcom_raquo_airstream_web_WebStorageBuilder() {
}
$h_Lcom_raquo_airstream_web_WebStorageBuilder.prototype = $p;
$p.su = (function(default$1) {
  return this.mV(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x) => x)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => new $c_s_util_Success(_$1))), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => new $c_s_util_Success(default$1.L()))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$2, _$3) => (_$2 === _$3))));
});
$p.lZ = (function(default$1) {
  return this.mV(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => ("" + (!(!_$4))))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((str) => {
    try {
      return new $c_s_util_Success($m_sc_StringOps$().wx(str, str));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      if ($m_s_util_control_NonFatal$().cP(e$2)) {
        return new $c_s_util_Failure(e$2);
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
    }
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => new $c_s_util_Success(default$1.L()))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$5, _$6) => ((!(!_$5)) === (!(!_$6))))));
});
$p.rW = (function(default$1) {
  return this.mV(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$7) => ("" + (_$7 | 0)))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((str) => {
    try {
      return new $c_s_util_Success($m_jl_Integer$().mG(str, 10));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      if ($m_s_util_control_NonFatal$().cP(e$2)) {
        return new $c_s_util_Failure(e$2);
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
    }
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => new $c_s_util_Success(default$1.L()))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$8, _$9) => ((_$8 | 0) === (_$9 | 0)))));
});
$p.mV = (function(encode, decode, default$1, syncDistinctByFn) {
  var storageVar = new $c_Lcom_raquo_airstream_web_WebStorageVar(this.o7, this.o6, encode, decode, default$1, syncDistinctByFn);
  var this$1 = this.o8;
  if ((!this$1.c())) {
    storageVar.wt(this$1.E());
  }
  return storageVar;
});
var $d_Lcom_raquo_airstream_web_WebStorageBuilder = new $TypeData().i($c_Lcom_raquo_airstream_web_WebStorageBuilder, "com.raquo.airstream.web.WebStorageBuilder", ({
  ec: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_web_WebStorageVar$() {
}
$p = $c_Lcom_raquo_airstream_web_WebStorageVar$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_web_WebStorageVar$;
/** @constructor */
function $h_Lcom_raquo_airstream_web_WebStorageVar$() {
}
$h_Lcom_raquo_airstream_web_WebStorageVar$.prototype = $p;
$p.fE = (function(key, syncOwner) {
  return new $c_Lcom_raquo_airstream_web_WebStorageBuilder(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    try {
      var $x_1 = new $c_s_util_Success(window.localStorage);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      matchEnd8: {
        var $x_1;
        if ($m_s_util_control_NonFatal$().cP(e$2)) {
          var $x_1 = new $c_s_util_Failure(e$2);
          break matchEnd8;
        }
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
      }
    }
    return $x_1.sv();
  })), key, syncOwner);
});
var $d_Lcom_raquo_airstream_web_WebStorageVar$ = new $TypeData().i($c_Lcom_raquo_airstream_web_WebStorageVar$, "com.raquo.airstream.web.WebStorageVar$", ({
  ee: 1
}));
var $n_Lcom_raquo_airstream_web_WebStorageVar$;
function $m_Lcom_raquo_airstream_web_WebStorageVar$() {
  if ((!$n_Lcom_raquo_airstream_web_WebStorageVar$)) {
    $n_Lcom_raquo_airstream_web_WebStorageVar$ = new $c_Lcom_raquo_airstream_web_WebStorageVar$();
  }
  return $n_Lcom_raquo_airstream_web_WebStorageVar$;
}
/** @constructor */
function $c_Lcom_raquo_ew_JsArray$() {
}
$p = $c_Lcom_raquo_ew_JsArray$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_ew_JsArray$;
/** @constructor */
function $h_Lcom_raquo_ew_JsArray$() {
}
$h_Lcom_raquo_ew_JsArray$.prototype = $p;
$p.bI = (function(items) {
  return [...$m_sjsr_Compat$().wz(items)];
});
var $d_Lcom_raquo_ew_JsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$, "com.raquo.ew.JsArray$", ({
  eg: 1
}));
var $n_Lcom_raquo_ew_JsArray$;
function $m_Lcom_raquo_ew_JsArray$() {
  if ((!$n_Lcom_raquo_ew_JsArray$)) {
    $n_Lcom_raquo_ew_JsArray$ = new $c_Lcom_raquo_ew_JsArray$();
  }
  return $n_Lcom_raquo_ew_JsArray$;
}
/** @constructor */
function $c_Lcom_raquo_ew_JsArray$RichJsArray$() {
}
$p = $c_Lcom_raquo_ew_JsArray$RichJsArray$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_ew_JsArray$RichJsArray$;
/** @constructor */
function $h_Lcom_raquo_ew_JsArray$RichJsArray$() {
}
$h_Lcom_raquo_ew_JsArray$RichJsArray$.prototype = $p;
$p.v0 = (function(this$, item, fromIndex) {
  return ((this$.indexOf(item, fromIndex) | 0) !== (-1));
});
$p.uA = (function(this$, cb) {
  var i = 0;
  var len = (this$.length | 0);
  while ((i < len)) {
    cb(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_Lcom_raquo_ew_JsArray$RichJsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$RichJsArray$, "com.raquo.ew.JsArray$RichJsArray$", ({
  eh: 1
}));
var $n_Lcom_raquo_ew_JsArray$RichJsArray$;
function $m_Lcom_raquo_ew_JsArray$RichJsArray$() {
  if ((!$n_Lcom_raquo_ew_JsArray$RichJsArray$)) {
    $n_Lcom_raquo_ew_JsArray$RichJsArray$ = new $c_Lcom_raquo_ew_JsArray$RichJsArray$();
  }
  return $n_Lcom_raquo_ew_JsArray$RichJsArray$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_DomApi$() {
  this.of = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.ub($m_Lcom_raquo_laminar_api_package$().p.wq().wr());
  this.of = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.tq = (function(parent, child) {
  try {
    parent.appendChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ak instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
  }
});
$p.vU = (function(parent, child) {
  try {
    parent.removeChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ak instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
  }
});
$p.v5 = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ak instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
  }
});
$p.v4 = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild.nextSibling);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ak instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
  }
});
$p.vc = (function(node, ancestor) {
  var node$tailLocal1 = node;
  while (true) {
    if ((node$tailLocal1.parentNode !== null)) {
      var effectiveParentNode = node$tailLocal1.parentNode;
    } else {
      var maybeShadowHost = node$tailLocal1.host;
      var effectiveParentNode = ((maybeShadowHost === (void 0)) ? null : maybeShadowHost);
    }
    if ((effectiveParentNode === null)) {
      return false;
    }
    if ($m_sr_BoxesRunTime$().i(ancestor, effectiveParentNode)) {
      return true;
    }
    node$tailLocal1 = effectiveParentNode;
  }
});
$p.td = (function(element, listener) {
  element.addEventListener(listener.fW.eZ.hu, listener.kK, listener.kL);
});
$p.vV = (function(element, listener) {
  element.removeEventListener(listener.fW.eZ.hu, listener.kK, listener.kL);
});
$p.ua = (function(tag) {
  return document.createElement(tag.kS);
});
$p.uO = (function(element, attr) {
  var x = this.uP(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.kE.m3(x));
});
$p.uP = (function(element, attr) {
  var domValue = element.bG.getAttributeNS(null, attr.hv);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.sn = (function(element, attr, value) {
  this.wh(element, attr, attr.kE.im(value));
});
$p.wh = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.vW(element, attr);
  } else {
    element.bG.setAttribute(attr.hv, domValue);
  }
});
$p.vW = (function(element, attr) {
  element.bG.removeAttribute(attr.hv);
});
$p.uQ = (function(element, prop) {
  return element.bG[prop.dC];
});
$p.so = (function(element, prop, value) {
  this.sp(element, prop, prop.kF.im(value));
});
$p.sp = (function(element, prop, value) {
  element.bG[prop.dC] = value;
});
$p.wi = (function(element, styleProp, value) {
  var ref = element.bG;
  var styleCssName = styleProp.fU;
  var prefixes = styleProp.fV;
  var styleValue = ((value === null) ? null : value);
  if ((styleValue === null)) {
    prefixes.U(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((prefix) => ref.style.removeProperty((("" + prefix) + styleCssName)))));
    ref.style.removeProperty(styleCssName);
  } else {
    prefixes.U(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((prefix$2) => {
      var \u03b41$ = ref.style;
      \u03b41$.setProperty((("" + prefix$2) + styleCssName), styleValue);
    })));
    var \u03b42$ = ref.style;
    \u03b42$.setProperty(styleCssName, styleValue);
  }
});
$p.wg = (function(element, style, value) {
  var ref = element.bG;
  var styleCssName = style.fU;
  var prefixes = style.fV;
  var styleValue = ((value === null) ? null : $dp_toString__T(value));
  if ((styleValue === null)) {
    prefixes.U(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((prefix) => ref.style.removeProperty((("" + prefix) + styleCssName)))));
    ref.style.removeProperty(styleCssName);
  } else {
    prefixes.U(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((prefix$2) => {
      var \u03b41$ = ref.style;
      \u03b41$.setProperty((("" + prefix$2) + styleCssName), styleValue);
    })));
    var \u03b42$ = ref.style;
    \u03b42$.setProperty(styleCssName, styleValue);
  }
});
$p.ub = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.pt);
});
$p.uT = (function(element, attr) {
  var x = this.uU(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.kG.m3(x));
});
$p.uU = (function(element, attr) {
  var $x_2 = element.mH();
  var this$2 = attr.j1;
  var $x_1 = $x_2.getAttributeNS((this$2.c() ? null : this$2.E()), attr.kH);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.wl = (function(element, attr, value) {
  this.wm(element, attr, attr.kG.im(value));
});
$p.wm = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.vY(element, attr);
  } else {
    var this$1 = attr.j1;
    if (this$1.c()) {
      element.mH().setAttribute(attr.j0, domValue);
    } else {
      var x0 = this$1.E();
      element.mH().setAttributeNS(x0, attr.j0, domValue);
    }
  }
});
$p.vY = (function(element, attr) {
  var $x_1 = element.mH();
  var this$2 = attr.j1;
  $x_1.removeAttributeNS((this$2.c() ? null : this$2.E()), attr.kH);
});
$p.u9 = (function(text) {
  return document.createComment(text);
});
$p.uc = (function(text) {
  return document.createTextNode(text);
});
$p.v9 = (function(element) {
  return $m_sc_StringOps$().tQ(element.tagName, 45);
});
$p.uf = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.rq(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.rq = (function(node) {
  if ((!(!(node instanceof HTMLElement)))) {
    var id = node.id;
    if ((id !== "")) {
      var suffixStr = ("#" + id);
    } else {
      var classes = node.className;
      var suffixStr = ((classes !== "") ? ("." + classes.replace(this.of, ".")) : "");
    }
    return (node.tagName.toLowerCase() + suffixStr);
  } else {
    return node.nodeName;
  }
});
$p.ue = (function(node) {
  return ((!(!(node instanceof Element))) ? node.outerHTML : ((!(!(node instanceof Text))) ? (("Text(" + node.textContent) + ")") : ((!(!(node instanceof Comment))) ? (("Comment(" + node.textContent) + ")") : ((node === null) ? "<null>" : (("OtherNode(" + $dp_toString__T(node)) + ")")))));
});
var $d_Lcom_raquo_laminar_DomApi$ = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$, "com.raquo.laminar.DomApi$", ({
  ei: 1
}));
var $n_Lcom_raquo_laminar_DomApi$;
function $m_Lcom_raquo_laminar_DomApi$() {
  if ((!$n_Lcom_raquo_laminar_DomApi$)) {
    $n_Lcom_raquo_laminar_DomApi$ = new $c_Lcom_raquo_laminar_DomApi$();
  }
  return $n_Lcom_raquo_laminar_DomApi$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_Seq(seq, scalaArray, jsArray) {
  this.kz = null;
  this.og = null;
  this.ky = null;
  this.kz = seq;
  this.og = scalaArray;
  this.ky = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.U = (function(f) {
  if ((this.kz !== null)) {
    this.kz.U(f);
  } else if ((this.ky !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().uA(this.ky, $m_sjs_js_Any$().rK(f));
  } else {
    $m_sc_ArrayOps$().uB(this.og, f);
  }
});
var $d_Lcom_raquo_laminar_Seq = new $TypeData().i($c_Lcom_raquo_laminar_Seq, "com.raquo.laminar.Seq", ({
  ej: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_Seq$() {
}
$p = $c_Lcom_raquo_laminar_Seq$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq$;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq$() {
}
$h_Lcom_raquo_laminar_Seq$.prototype = $p;
var $d_Lcom_raquo_laminar_Seq$ = new $TypeData().i($c_Lcom_raquo_laminar_Seq$, "com.raquo.laminar.Seq$", ({
  ek: 1
}));
var $n_Lcom_raquo_laminar_Seq$;
function $m_Lcom_raquo_laminar_Seq$() {
  if ((!$n_Lcom_raquo_laminar_Seq$)) {
    $n_Lcom_raquo_laminar_Seq$ = new $c_Lcom_raquo_laminar_Seq$();
  }
  return $n_Lcom_raquo_laminar_Seq$;
}
function $f_Lcom_raquo_laminar_api_AirstreamAliases__$init$__V($thiz) {
  $m_Lcom_raquo_airstream_core_Observer$();
  $m_Lcom_raquo_airstream_core_AirstreamError$();
}
function $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V($thiz) {
  $thiz.sE = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    _$1.pd.bG.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.cW.cn.c()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((c) => {
      if (ignoreNextActivation.jk) {
        var ev$5 = false;
        ignoreNextActivation.jk = ev$5;
      } else {
        fn.b(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().ss(element.cW, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((owner) => {
      activate.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element$2, owner));
    }))(element)), false);
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.fS = null;
  this.kA = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.fS = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  this.kA = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
}
$p = $c_Lcom_raquo_laminar_codecs_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$() {
}
$h_Lcom_raquo_laminar_codecs_package$.prototype = $p;
var $d_Lcom_raquo_laminar_codecs_package$ = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$, "com.raquo.laminar.codecs.package$", ({
  eu: 1
}));
var $n_Lcom_raquo_laminar_codecs_package$;
function $m_Lcom_raquo_laminar_codecs_package$() {
  if ((!$n_Lcom_raquo_laminar_codecs_package$)) {
    $n_Lcom_raquo_laminar_codecs_package$ = new $c_Lcom_raquo_laminar_codecs_package$();
  }
  return $n_Lcom_raquo_laminar_codecs_package$;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V($thiz) {
  $thiz.ou = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
  $thiz.em = $thiz.ou;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().fS);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.hv, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().uO(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().sn(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.sD = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().fS, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.j0, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().uT(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().wl(el$2, attr, value);
  })), separator);
}
/** @constructor */
function $c_Lcom_raquo_laminar_inputs_InputController$() {
  this.p6 = null;
  $n_Lcom_raquo_laminar_inputs_InputController$ = this;
  $m_Lcom_raquo_laminar_api_package$().p.sA();
  $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().p.mC()])));
  $m_Lcom_raquo_laminar_api_package$().p.sA();
  $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().p.mC(), $m_Lcom_raquo_laminar_api_package$().p.vK()])));
  $m_Lcom_raquo_laminar_api_package$().p.tK();
  $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().p.mC(), $m_Lcom_raquo_laminar_api_package$().p.fH()])));
  this.p6 = $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["value", "checked"])));
}
$p = $c_Lcom_raquo_laminar_inputs_InputController$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inputs_InputController$;
/** @constructor */
function $h_Lcom_raquo_laminar_inputs_InputController$() {
}
$h_Lcom_raquo_laminar_inputs_InputController$.prototype = $p;
var $d_Lcom_raquo_laminar_inputs_InputController$ = new $TypeData().i($c_Lcom_raquo_laminar_inputs_InputController$, "com.raquo.laminar.inputs.InputController$", ({
  eM: 1
}));
var $n_Lcom_raquo_laminar_inputs_InputController$;
function $m_Lcom_raquo_laminar_inputs_InputController$() {
  if ((!$n_Lcom_raquo_laminar_inputs_InputController$)) {
    $n_Lcom_raquo_laminar_inputs_InputController$ = new $c_Lcom_raquo_laminar_inputs_InputController$();
  }
  return $n_Lcom_raquo_laminar_inputs_InputController$;
}
function $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__updateChildren__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_Seq__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__I__O__I($thiz, prevChildren, nextChildren, nextChildrenMap, parentNode, sentinelNode, prevChildrenCount, hooks) {
  var index = new $c_sr_IntRef(0);
  var currentChildrenCount = new $c_sr_IntRef(prevChildrenCount);
  var prevChildRef = new $c_sr_ObjectRef(sentinelNode.aY().nextSibling);
  var lastIndexChild = new $c_sr_ObjectRef(sentinelNode);
  nextChildren.U(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextChild) => {
    if ((currentChildrenCount.b4 <= index.b4)) {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().ml(parentNode, nextChild, lastIndexChild.K, hooks);
      var ev$2 = nextChild.aY();
      prevChildRef.K = ev$2;
      ev$2 = null;
      var ev$3 = ((1 + currentChildrenCount.b4) | 0);
      currentChildrenCount.b4 = ev$3;
    } else if ((!$m_sr_BoxesRunTime$().i(nextChild.aY(), prevChildRef.K))) {
      if ((!(!(!prevChildren.has(nextChild.aY()))))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().ml(parentNode, nextChild, lastIndexChild.K, hooks);
        var ev$4 = nextChild.aY();
        prevChildRef.K = ev$4;
        ev$4 = null;
        var ev$5 = ((1 + currentChildrenCount.b4) | 0);
        currentChildrenCount.b4 = ev$5;
      } else {
        while (((!$m_sr_BoxesRunTime$().i(nextChild.aY(), prevChildRef.K)) && (!$p_Lcom_raquo_laminar_inserters_ChildrenInserter$__containsRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Z($thiz, nextChildrenMap, prevChildRef.K)))) {
          var nextPrevChildRef = prevChildRef.K.nextSibling;
          $m_Lcom_raquo_laminar_nodes_ParentNode$().sc(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.K));
          var ev$6 = nextPrevChildRef;
          prevChildRef.K = ev$6;
          ev$6 = null;
          var ev$7 = (((-1) + currentChildrenCount.b4) | 0);
          currentChildrenCount.b4 = ev$7;
        }
        if ((!$m_sr_BoxesRunTime$().i(nextChild.aY(), prevChildRef.K))) {
          $m_Lcom_raquo_laminar_nodes_ParentNode$().ml(parentNode, nextChild, lastIndexChild.K, hooks);
          var ev$8 = nextChild.aY();
          prevChildRef.K = ev$8;
          ev$8 = null;
        }
      }
    }
    if ((prevChildRef.K.nextSibling === null)) {
      var ev$9 = ((1 + index.b4) | 0);
      currentChildrenCount.b4 = ev$9;
    } else {
      var ev$10 = prevChildRef.K.nextSibling;
      prevChildRef.K = ev$10;
      ev$10 = null;
    }
    var ev$11 = nextChild;
    lastIndexChild.K = ev$11;
    ev$11 = null;
    var ev$12 = ((1 + index.b4) | 0);
    index.b4 = ev$12;
  })));
  while ((index.b4 < currentChildrenCount.b4)) {
    var nextPrevChildRef$1 = prevChildRef.K.nextSibling;
    $m_Lcom_raquo_laminar_nodes_ParentNode$().sc(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.K));
    var ev$13 = nextPrevChildRef$1;
    prevChildRef.K = ev$13;
    ev$13 = null;
    var ev$14 = (((-1) + currentChildrenCount.b4) | 0);
    currentChildrenCount.b4 = ev$14;
  }
  return currentChildrenCount.b4;
}
function $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__containsRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Z($thiz, nextChildrenMap, ref) {
  return (!(!nextChildrenMap.has(ref)));
}
function $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, ref) {
  var x = prevChildren.get(ref);
  if ((x === (void 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("prevChildFromRef[children]: not found for " + ref));
  }
  return x;
}
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_ChildrenInserter$() {
}
$p = $c_Lcom_raquo_laminar_inserters_ChildrenInserter$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_ChildrenInserter$;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_ChildrenInserter$() {
}
$h_Lcom_raquo_laminar_inserters_ChildrenInserter$.prototype = $p;
$p.tv = (function(childrenSource, renderableSeq, renderableNode, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((ctx, owner, hooks) => {
    if ((!ctx.hr)) {
      ctx.rE();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childrenSource, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx$2) => ((components) => {
      this.ws(($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(components, null, null)), ctx$2, hooks);
    }))(ctx)), owner);
  })), initialHooks);
});
$p.ws = (function(newChildren, ctx, hooks) {
  if ((!ctx.hr)) {
    ctx.rE();
  }
  var newChildrenMap = $m_Lcom_raquo_laminar_inserters_InsertContext$().vI(newChildren);
  ctx.hp = $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__updateChildren__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_Seq__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__I__O__I(this, ctx.fT, newChildren, newChildrenMap, ctx.iY, ctx.hq, ctx.hp, hooks);
  ctx.fT = newChildrenMap;
});
var $d_Lcom_raquo_laminar_inserters_ChildrenInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildrenInserter$, "com.raquo.laminar.inserters.ChildrenInserter$", ({
  eN: 1
}));
var $n_Lcom_raquo_laminar_inserters_ChildrenInserter$;
function $m_Lcom_raquo_laminar_inserters_ChildrenInserter$() {
  if ((!$n_Lcom_raquo_laminar_inserters_ChildrenInserter$)) {
    $n_Lcom_raquo_laminar_inserters_ChildrenInserter$ = new $c_Lcom_raquo_laminar_inserters_ChildrenInserter$();
  }
  return $n_Lcom_raquo_laminar_inserters_ChildrenInserter$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, extraNodeCount, extraNodesMap) {
  this.iY = null;
  this.hq = null;
  this.hr = false;
  this.hp = 0;
  this.fT = null;
  this.iY = parentNode;
  this.hq = sentinelNode;
  this.hr = strictMode;
  this.hp = extraNodeCount;
  this.fT = extraNodesMap;
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext.prototype = $p;
$p.rE = (function() {
  if ((this.hr || (this.hp !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().ue(this.iY.bG)));
  }
  if ((this.fT === null)) {
    this.fT = new Map();
  }
  if ((!(!(!(this.hq.aY() instanceof Comment))))) {
    var contentNode = this.hq;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().v5(this.iY.bG, newSentinelNode.kM, contentNode.aY());
    this.hq = newSentinelNode;
    this.hp = 1;
    this.fT.set(contentNode.aY(), contentNode);
  }
  this.hr = true;
});
var $d_Lcom_raquo_laminar_inserters_InsertContext = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext, "com.raquo.laminar.inserters.InsertContext", ({
  eQ: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_InsertContext$() {
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext$;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext$() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext$.prototype = $p;
$p.w7 = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gM(parentNode, sentinelNode, hooks);
  return this.wE(parentNode, sentinelNode, strictMode);
});
$p.wE = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, 0, (strictMode ? new Map() : null));
});
$p.vI = (function(nodes) {
  var acc = new Map();
  nodes.U(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((node) => {
    acc.set(node.aY(), node);
  })));
  return acc;
});
var $d_Lcom_raquo_laminar_inserters_InsertContext$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext$, "com.raquo.laminar.inserters.InsertContext$", ({
  eR: 1
}));
var $n_Lcom_raquo_laminar_inserters_InsertContext$;
function $m_Lcom_raquo_laminar_inserters_InsertContext$() {
  if ((!$n_Lcom_raquo_laminar_inserters_InsertContext$)) {
    $n_Lcom_raquo_laminar_inserters_InsertContext$ = new $c_Lcom_raquo_laminar_inserters_InsertContext$();
  }
  return $n_Lcom_raquo_laminar_inserters_InsertContext$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$() {
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$.prototype = $p;
$p.s5 = (function(items, separator) {
  return ((items === "") ? $m_sci_Nil$() : $m_sci_Nil$().z($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), items.split(separator).filter(((_$1) => (_$1 !== ""))))));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$, "com.raquo.laminar.keys.CompositeKey$", ({
  eU: 1
}));
var $n_Lcom_raquo_laminar_keys_CompositeKey$;
function $m_Lcom_raquo_laminar_keys_CompositeKey$() {
  if ((!$n_Lcom_raquo_laminar_keys_CompositeKey$)) {
    $n_Lcom_raquo_laminar_keys_CompositeKey$ = new $c_Lcom_raquo_laminar_keys_CompositeKey$();
  }
  return $n_Lcom_raquo_laminar_keys_CompositeKey$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, processor) {
  this.eZ = null;
  this.ht = false;
  this.iZ = false;
  this.hs = null;
  this.eZ = eventProp;
  this.ht = shouldUseCapture;
  this.iZ = shouldBePassive;
  this.hs = processor;
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $p;
$p.vq = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.hs.b(ev);
    return (this$2.c() ? $m_s_None$() : new $c_s_Some((this$2.E(), value.L())));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.eZ, this.ht, this.iZ, newProcessor);
});
$p.is = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.hs.b(ev);
    return (this$2.c() ? $m_s_None$() : new $c_s_Some((this$2.E(), value)));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.eZ, this.ht, this.iZ, newProcessor);
});
var $d_Lcom_raquo_laminar_keys_EventProcessor = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor, "com.raquo.laminar.keys.EventProcessor", ({
  eY: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProcessor$() {
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor$() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor$.prototype = $p;
$p.fx = (function(eventProp, shouldUseCapture, shouldBePassive) {
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$14) => new $c_s_Some(_$14))));
});
var $d_Lcom_raquo_laminar_keys_EventProcessor$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor$, "com.raquo.laminar.keys.EventProcessor$", ({
  eZ: 1
}));
var $n_Lcom_raquo_laminar_keys_EventProcessor$;
function $m_Lcom_raquo_laminar_keys_EventProcessor$() {
  if ((!$n_Lcom_raquo_laminar_keys_EventProcessor$)) {
    $n_Lcom_raquo_laminar_keys_EventProcessor$ = new $c_Lcom_raquo_laminar_keys_EventProcessor$();
  }
  return $n_Lcom_raquo_laminar_keys_EventProcessor$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_Key() {
}
$p = $c_Lcom_raquo_laminar_keys_Key.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_Key;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_Key() {
}
$h_Lcom_raquo_laminar_keys_Key.prototype = $p;
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr$() {
  this.sG = null;
  this.sH = null;
  this.sI = null;
  this.sJ = null;
  this.sG = "http://www.w3.org/2000/svg";
  this.sH = "http://www.w3.org/1999/xlink";
  this.sI = "http://www.w3.org/XML/1998/namespace";
  this.sJ = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.vv = (function(namespace) {
  switch (namespace) {
    case "svg": {
      return "http://www.w3.org/2000/svg";
      break;
    }
    case "xlink": {
      return "http://www.w3.org/1999/xlink";
      break;
    }
    case "xml": {
      return "http://www.w3.org/XML/1998/namespace";
      break;
    }
    case "xmlns": {
      return "http://www.w3.org/2000/xmlns/";
      break;
    }
    default: {
      throw new $c_s_MatchError(namespace);
    }
  }
});
var $d_Lcom_raquo_laminar_keys_SvgAttr$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr$, "com.raquo.laminar.keys.SvgAttr$", ({
  f3: 1
}));
var $n_Lcom_raquo_laminar_keys_SvgAttr$;
function $m_Lcom_raquo_laminar_keys_SvgAttr$() {
  if ((!$n_Lcom_raquo_laminar_keys_SvgAttr$)) {
    $n_Lcom_raquo_laminar_keys_SvgAttr$ = new $c_Lcom_raquo_laminar_keys_SvgAttr$();
  }
  return $n_Lcom_raquo_laminar_keys_SvgAttr$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_lifecycle_MountContext(thisNode, owner) {
  this.pd = null;
  this.kI = null;
  this.pd = thisNode;
  this.kI = owner;
}
$p = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
}
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $p;
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().i($c_Lcom_raquo_laminar_lifecycle_MountContext, "com.raquo.laminar.lifecycle.MountContext", ({
  f4: 1
}));
var $d_Lcom_raquo_laminar_modifiers_Modifier = new $TypeData().i(1, "com.raquo.laminar.modifiers.Modifier", ({
  Z: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$() {
  this.sK = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.sK = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_Modifier$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$, "com.raquo.laminar.modifiers.Modifier$", ({
  f9: 1
}));
var $n_Lcom_raquo_laminar_modifiers_Modifier$;
function $m_Lcom_raquo_laminar_modifiers_Modifier$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_Modifier$)) {
    $n_Lcom_raquo_laminar_modifiers_Modifier$ = new $c_Lcom_raquo_laminar_modifiers_Modifier$();
  }
  return $n_Lcom_raquo_laminar_modifiers_Modifier$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableNode$() {
  this.pm = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  this.pm = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$, "com.raquo.laminar.modifiers.RenderableNode$", ({
  fd: 1
}));
var $n_Lcom_raquo_laminar_modifiers_RenderableNode$;
function $m_Lcom_raquo_laminar_modifiers_RenderableNode$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableNode$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$();
  }
  return $n_Lcom_raquo_laminar_modifiers_RenderableNode$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableText$() {
  this.c7 = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableText$ = this;
  this.c7 = new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x) => x)), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => ("" + (_$1 | 0)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => ("" + (+_$2)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => ("" + (!(!_$3))))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => _$4.wv())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableText$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$, "com.raquo.laminar.modifiers.RenderableText$", ({
  fi: 1
}));
var $n_Lcom_raquo_laminar_modifiers_RenderableText$;
function $m_Lcom_raquo_laminar_modifiers_RenderableText$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableText$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableText$ = new $c_Lcom_raquo_laminar_modifiers_RenderableText$();
  }
  return $n_Lcom_raquo_laminar_modifiers_RenderableText$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ParentNode$() {
}
$p = $c_Lcom_raquo_laminar_nodes_ParentNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ParentNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ParentNode$() {
}
$h_Lcom_raquo_laminar_nodes_ParentNode$.prototype = $p;
$p.gM = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.iJ(nextParent);
  if ((hooks !== (void 0))) {
    hooks.vM(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().tq(parent.aY(), child.aY());
  if (appended) {
    child.iE(nextParent);
  }
  return appended;
});
$p.sc = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().i(child.aY().parentNode, parent.aY())) {
    child.iJ($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().vU(parent.aY(), child.aY());
    child.iE($m_s_None$());
  }
  return removed;
});
$p.ml = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.iJ(nextParent);
  if ((hooks !== (void 0))) {
    hooks.vM(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().v4(parent.aY(), newChild.aY(), referenceChild.aY());
  newChild.iE(nextParent);
  return inserted;
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ParentNode$, "com.raquo.laminar.nodes.ParentNode$", ({
  fl: 1
}));
var $n_Lcom_raquo_laminar_nodes_ParentNode$;
function $m_Lcom_raquo_laminar_nodes_ParentNode$() {
  if ((!$n_Lcom_raquo_laminar_nodes_ParentNode$)) {
    $n_Lcom_raquo_laminar_nodes_ParentNode$ = new $c_Lcom_raquo_laminar_nodes_ParentNode$();
  }
  return $n_Lcom_raquo_laminar_nodes_ParentNode$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveElement$() {
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveElement$;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveElement$() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype = $p;
$p.wD = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iI(element.cW, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$, "com.raquo.laminar.nodes.ReactiveElement$", ({
  fn: 1
}));
var $n_Lcom_raquo_laminar_nodes_ReactiveElement$;
function $m_Lcom_raquo_laminar_nodes_ReactiveElement$() {
  if ((!$n_Lcom_raquo_laminar_nodes_ReactiveElement$)) {
    $n_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $c_Lcom_raquo_laminar_nodes_ReactiveElement$();
  }
  return $n_Lcom_raquo_laminar_nodes_ReactiveElement$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$() {
}
$p = $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildrenReceiver$() {
}
$h_Lcom_raquo_laminar_receivers_ChildrenReceiver$.prototype = $p;
var $d_Lcom_raquo_laminar_receivers_ChildrenReceiver$ = new $TypeData().i($c_Lcom_raquo_laminar_receivers_ChildrenReceiver$, "com.raquo.laminar.receivers.ChildrenReceiver$", ({
  fr: 1
}));
var $n_Lcom_raquo_laminar_receivers_ChildrenReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildrenReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildrenReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$();
  }
  return $n_Lcom_raquo_laminar_receivers_ChildrenReceiver$;
}
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.sL = false;
  this.hx = null;
  this.fX = null;
  this.kW = null;
  this.kV = false;
  this.pu = 0;
  this.pv = 0;
  this.sM = null;
  $n_jl_FloatingPointBits$ = this;
  this.sL = true;
  this.hx = new ArrayBuffer(8);
  this.fX = new Int32Array(this.hx, 0, 2);
  new Float32Array(this.hx, 0, 2);
  this.kW = new Float64Array(this.hx, 0, 1);
  this.fX[0] = 16909060;
  this.kV = ((new Int8Array(this.hx, 0, 8)[0] | 0) === 1);
  this.pu = (this.kV ? 0 : 1);
  this.pv = (this.kV ? 1 : 0);
  this.sM = null;
}
$p = $c_jl_FloatingPointBits$.prototype = new $h_O();
$p.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
}
$h_jl_FloatingPointBits$.prototype = $p;
$p.mB = (function(value) {
  var iv = ((value | 0.0) | 0);
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv;
  } else {
    this.kW[0] = value;
    return ((this.fX[0] | 0) ^ (this.fX[1] | 0));
  }
});
$p.uj = (function(value) {
  this.kW[0] = value;
  var value$1 = (this.fX[this.pu] | 0);
  return new $c_RTLong((this.fX[this.pv] | 0), value$1);
});
var $d_jl_FloatingPointBits$ = new $TypeData().i($c_jl_FloatingPointBits$, "java.lang.FloatingPointBits$", ({
  fG: 1
}));
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$();
  }
  return $n_jl_FloatingPointBits$;
}
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().dh("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
  var trace = [];
  var i = 0;
  while ((i < (lines.length | 0))) {
    var line = lines[i];
    if ((line !== "")) {
      var mtch = NormalizedFrameLine.exec(line);
      if ((mtch !== null)) {
        var classAndMethodName = $p_jl_StackTrace$__extractClassMethod__T__O($thiz, mtch[1]);
        var $x_5 = classAndMethodName[0];
        var $x_4 = classAndMethodName[1];
        var $x_3 = mtch[2];
        var x$2 = mtch[3];
        var $x_2 = parseInt(x$2);
        var x$3 = mtch[4];
        var $x_1 = trace.push(new $c_jl_StackTraceElement($x_5, $x_4, $x_3, ($x_2 | 0), ((x$3 !== (void 0)) ? (parseInt(x$3) | 0) : (-1))));
      } else {
        (trace.push(new $c_jl_StackTraceElement("<jscode>", line, null, (-1), (-1))) | 0);
      }
    }
    i = ((1 + i) | 0);
  }
  var len = (trace.length | 0);
  var result = new ($d_jl_StackTraceElement.r().C)(len);
  i = 0;
  while ((i < len)) {
    result.a[i] = trace[i];
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractClassMethod__T__O($thiz, functionName) {
  var PatBC = $m_jl_StackTrace$StringRE$().dh("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().dh("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().dh("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().dh("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().dh("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
  var matchBC = PatBC.exec(functionName);
  var matchBCOrS = ((matchBC !== null) ? matchBC : PatS.exec(functionName));
  if ((matchBCOrS !== null)) {
    return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchBCOrS[1]), $p_jl_StackTrace$__decodeMethodName__T__T($thiz, matchBCOrS[2])];
  } else {
    var matchCT = PatCT.exec(functionName);
    var matchCTOrN = ((matchCT !== null) ? matchCT : PatN.exec(functionName));
    if ((matchCTOrN !== null)) {
      return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchCTOrN[1]), "<init>"];
    } else {
      var matchM = PatM.exec(functionName);
      return ((matchM !== null) ? [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchM[1]), "<clinit>"] : ["<jscode>", functionName]);
    }
  }
}
function $p_jl_StackTrace$__decodeClassName__T__T($thiz, encodedName) {
  var dict = $p_jl_StackTrace$__decompressedClasses__O($thiz);
  if ((!(!$m_jl_Utils$Cache$().l1.call(dict, encodedName)))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = dict$1[encodedName];
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
  }
  var this$3 = base.split("_").join(".");
  return this$3.split("\uff3f").join("_");
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.cI) << 24) >> 24) === 0)) {
    var dict = ({});
    dict.O = "java_lang_Object";
    dict.T = "java_lang_String";
    var index = 0;
    while ((index <= 22)) {
      if ((index >= 2)) {
        var key = ("T" + index);
        var value = ("scala_Tuple" + index);
        dict[key] = value;
      }
      var key$1 = ("F" + index);
      var value$1 = ("scala_Function" + index);
      dict[key$1] = value$1;
      index = ((1 + index) | 0);
    }
    $thiz.kY = dict;
    $thiz.cI = (((1 | $thiz.cI) << 24) >> 24);
  }
  return $thiz.kY;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.cI) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.kY);
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.cI) << 24) >> 24) === 0)) {
    var dict = ({});
    dict.sjsr_ = "scala_scalajs_runtime_";
    dict.sjs_ = "scala_scalajs_";
    dict.sci_ = "scala_collection_immutable_";
    dict.scm_ = "scala_collection_mutable_";
    dict.scg_ = "scala_collection_generic_";
    dict.sc_ = "scala_collection_";
    dict.sr_ = "scala_runtime_";
    dict.s_ = "scala_";
    dict.jl_ = "java_lang_";
    dict.ju_ = "java_util_";
    $thiz.kZ = dict;
    $thiz.cI = (((2 | $thiz.cI) << 24) >> 24);
  }
  return $thiz.kZ;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.cI) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.kZ);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.cI) << 24) >> 24) === 0)) {
    $thiz.kX = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.cI = (((4 | $thiz.cI) << 24) >> 24);
  }
  return $thiz.kX;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.cI) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.kX);
}
function $p_jl_StackTrace$__decodeMethodName__T__T($thiz, encodedName) {
  if ((!(!encodedName.startsWith("init___")))) {
    return "<init>";
  } else {
    var methodNameLen = (encodedName.indexOf("__") | 0);
    return ((methodNameLen < 0) ? encodedName : encodedName.substring(0, methodNameLen));
  }
}
function $p_jl_StackTrace$__normalizeStackTraceLines__O__O($thiz, e) {
  return ((!(!(!(!(!e))))) ? [] : ((!(!(!(!(e.arguments && e.stack))))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : ((!(!(!(!(e.stack && e.sourceURL))))) ? $p_jl_StackTrace$__extractSafari__O__O($thiz, e) : ((!(!(!(!(e.stack && e.number))))) ? $p_jl_StackTrace$__extractIE__O__O($thiz, e) : ((!(!(!(!(e.stack && e.fileName))))) ? $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) : ((!(!(!(!(e.message && e["opera#sourceloc"]))))) ? ((!(!(!(!(!e.stacktrace))))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : ((!(!(!(!((e.message.indexOf("\n") > (-1.0)) && (e.message.split("\n").length > e.stacktrace.split("\n").length)))))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e))) : ((!(!(!(!((e.message && e.stack) && e.stacktrace))))) ? ((!(!(!(!(e.stacktrace.indexOf("called from line") < 0.0))))) ? $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera11__O__O($thiz, e)) : ((!(!(!(!(e.stack && (!e.fileName)))))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : $p_jl_StackTrace$__extractOther__O__O($thiz, e)))))))));
}
function $p_jl_StackTrace$__extractChrome__O__O($thiz, e) {
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().dh("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().cl("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().cl("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().cl("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().cl("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().cl("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().cl("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().cl("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().cl("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().cl("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().cl("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().cl("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().cl("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().cl("Line (\\d+).*script (?:in )?(\\S+)", "i");
  var lines = e.message.split("\n");
  var result = [];
  var i = 2;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      (result.push(((("{anonymous}()@" + mtch[2]) + ":") + mtch[1])) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().cl("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var x = mtch[3];
      var fnName = ((x !== (void 0)) ? x : "{anonymous}");
      (result.push(((((fnName + "()@") + mtch[2]) + ":") + mtch[1])) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().dh("^(.*)@(.+):(\\d+)$");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var x = mtch[1];
      var fnName = ((x !== (void 0)) ? (x + "()") : "global code");
      (result.push(((((fnName + "@") + mtch[2]) + ":") + mtch[3])) | 0);
    }
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera11__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().dh("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var location = ((((mtch[4] + ":") + mtch[1]) + ":") + mtch[2]);
      var x$3 = mtch[2];
      var fnName0 = ((x$3 !== (void 0)) ? x$3 : "global code");
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().dh("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().dh("<anonymous function>"), "{anonymous}");
      (result.push(((fnName + "@") + location)) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOther__O__O($thiz, e) {
  return [];
}
function $p_jl_StackTrace$__loop$1__I__T__T($thiz, i, encodedName$1) {
  while (true) {
    if ((i < ($p_jl_StackTrace$__compressedPrefixes__O($thiz).length | 0))) {
      var prefix = $p_jl_StackTrace$__compressedPrefixes__O($thiz)[i];
      if ((!(!encodedName$1.startsWith(prefix)))) {
        var dict = $p_jl_StackTrace$__decompressedPrefixes__O($thiz);
        return (("" + dict[prefix]) + encodedName$1.substring(prefix.length));
      } else {
        i = ((1 + i) | 0);
      }
    } else {
      return ((!(!encodedName$1.startsWith("L"))) ? encodedName$1.substring(1) : encodedName$1);
    }
  }
}
/** @constructor */
function $c_jl_StackTrace$() {
  this.kY = null;
  this.kZ = null;
  this.kX = null;
  this.cI = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.uu = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  fP: 1
}));
var $n_jl_StackTrace$;
function $m_jl_StackTrace$() {
  if ((!$n_jl_StackTrace$)) {
    $n_jl_StackTrace$ = new $c_jl_StackTrace$();
  }
  return $n_jl_StackTrace$;
}
/** @constructor */
function $c_jl_StackTrace$StringRE$() {
}
$p = $c_jl_StackTrace$StringRE$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$StringRE$;
/** @constructor */
function $h_jl_StackTrace$StringRE$() {
}
$h_jl_StackTrace$StringRE$.prototype = $p;
$p.dh = (function(this$) {
  return new RegExp(this$);
});
$p.cl = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().i($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  fQ: 1
}));
var $n_jl_StackTrace$StringRE$;
function $m_jl_StackTrace$StringRE$() {
  if ((!$n_jl_StackTrace$StringRE$)) {
    $n_jl_StackTrace$StringRE$ = new $c_jl_StackTrace$StringRE$();
  }
  return $n_jl_StackTrace$StringRE$;
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  result["java.vm.version"] = "1.19.0";
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result;
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.l0 = null;
  this.pw = null;
  $n_jl_System$SystemProperties$ = this;
  this.l0 = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.pw = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.mh = (function(key, default$1) {
  if ((this.l0 !== null)) {
    var dict = this.l0;
    return ((!(!$m_jl_Utils$Cache$().l1.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.pw.mh(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  fV: 1
}));
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
  }
  return $n_jl_System$SystemProperties$;
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.l1 = null;
  $n_jl_Utils$Cache$ = this;
  this.l1 = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  fY: 1
}));
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bT)));
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  bT: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$p = $c_jl_reflect_Array$.prototype = new $h_O();
$p.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $p;
$p.aD = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? array.a.length : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  g0: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_ju_Arrays$() {
}
$p = $c_ju_Arrays$.prototype = new $h_O();
$p.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
$h_ju_Arrays$.prototype = $p;
$p.tE = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.a.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (((-1) - startIndex) | 0);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.a[mid];
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
      } else if ((cmp === 0)) {
        return mid;
      } else {
        startIndex = ((1 + mid) | 0);
      }
    }
  }
});
$p.ry = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var t = a.a[i$1];
    var lo = t.s;
    var hi = t.w;
    var i$2 = i;
    var t$1 = b.a[i$2];
    var lo$1 = t$1.s;
    var hi$1 = t$1.w;
    if ((!((lo === lo$1) && (hi === hi$1)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.jL = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.rz = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.rv = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.ru = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.rA = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.rw = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!Object.is($x_1, b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.rx = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!Object.is($x_1, b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.uv = (function(a, value) {
  var toIndex = a.a.length;
  var i = 0;
  while ((i !== toIndex)) {
    var i$1 = i;
    a.a[i$1] = value;
    i = ((1 + i) | 0);
  }
});
$p.ab = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).F.Q().F.U(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.u8 = (function(original, newLength, newType) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = newType.F.Q().F.U(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.u0 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_B(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.u6 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_S(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.u4 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_I(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.u5 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_J(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.u1 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_C(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.u3 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_F(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.u2 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_D(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.u7 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_Z(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.aR = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).F.Q().F.U(retLength);
  original.r(from, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  g3: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $is_ju_Formattable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.bU)));
}
function $isArrayOf_ju_Formattable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bU)));
}
/** @constructor */
function $c_ju_Formatter$() {
  this.pF = null;
  this.pE = null;
  $n_ju_Formatter$ = this;
  this.pF = new RegExp("(?:(\\d+)\\$)?([-#+ 0,\\(<]*)(\\d+)?(?:\\.(\\d+))?[%A-Za-z]", "g");
  this.pE = new $ac_I(new Int32Array([96, 126, 638, 770, 32, 256, 2, 126, (-1), (-1), (-1), (-1), (-1), (-1), 800, (-1), (-1), (-1), 124, (-1), (-1), (-1), (-1), 544, (-1), (-1)]));
}
$p = $c_ju_Formatter$.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$;
/** @constructor */
function $h_ju_Formatter$() {
}
$h_ju_Formatter$.prototype = $p;
$p.mq = (function(count) {
  if ((count <= 20)) {
    return "00000000000000000000".substring(0, count);
  } else {
    var result = "";
    var remaining = count;
    while ((remaining > 20)) {
      result = (result + "00000000000000000000");
      remaining = (((-20) + remaining) | 0);
    }
    var $x_1 = result;
    var endIndex = remaining;
    return (("" + $x_1) + "00000000000000000000".substring(0, endIndex));
  }
});
$p.vf = (function(x) {
  if ((x === 0.0)) {
    return new $c_ju_Formatter$Decimal(((1.0 / x) < 0.0), "0", 0);
  } else {
    var negative$2 = (x < 0.0);
    var d = (negative$2 ? (-x) : x);
    var s = ("" + d);
    var ePos = $f_T__indexOf__I__I(s, 101);
    if ((ePos < 0)) {
      var e = 0;
    } else {
      var $x_2 = parseInt;
      var beginIndex = ((1 + ePos) | 0);
      var $x_1 = $x_2(s.substring(beginIndex));
      var e = ($x_1 | 0);
    }
    var significandEnd = ((ePos < 0) ? s.length : ePos);
    var dotPos = $f_T__indexOf__I__I(s, 46);
    if ((dotPos < 0)) {
      return new $c_ju_Formatter$Decimal(negative$2, s.substring(0, significandEnd), ((-e) | 0));
    } else {
      var $x_3 = s.substring(0, dotPos);
      var beginIndex$1 = ((1 + dotPos) | 0);
      var digits = (("" + $x_3) + s.substring(beginIndex$1, significandEnd));
      var digitsLen = digits.length;
      var i = 0;
      while (((i < digitsLen) && (digits.charCodeAt(i) === 48))) {
        i = ((1 + i) | 0);
      }
      var beginIndex$2 = i;
      return new $c_ju_Formatter$Decimal(negative$2, digits.substring(beginIndex$2), ((((-e) | 0) + ((significandEnd - ((1 + dotPos) | 0)) | 0)) | 0));
    }
  }
});
$p.ve = (function(x) {
  var unscaledValueWithSign = x.xq().v();
  if ((unscaledValueWithSign === "0")) {
    return new $c_ju_Formatter$Decimal(false, "0", 0);
  } else {
    var negative = (unscaledValueWithSign.charCodeAt(0) === 45);
    return new $c_ju_Formatter$Decimal(negative, (negative ? unscaledValueWithSign.substring(1) : unscaledValueWithSign), x.xi());
  }
});
var $d_ju_Formatter$ = new $TypeData().i($c_ju_Formatter$, "java.util.Formatter$", ({
  g9: 1
}));
var $n_ju_Formatter$;
function $m_ju_Formatter$() {
  if ((!$n_ju_Formatter$)) {
    $n_ju_Formatter$ = new $c_ju_Formatter$();
  }
  return $n_ju_Formatter$;
}
function $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal($thiz, roundingPos) {
  var digits = $thiz.dE;
  var digitsLen = digits.length;
  if ((roundingPos < 0)) {
    return new $c_ju_Formatter$Decimal($thiz.dD, "0", 0);
  } else if ((roundingPos >= digitsLen)) {
    return $thiz;
  } else if ((digits.charCodeAt(roundingPos) < 53)) {
    return ((roundingPos === 0) ? new $c_ju_Formatter$Decimal($thiz.dD, "0", 0) : new $c_ju_Formatter$Decimal($thiz.dD, digits.substring(0, roundingPos), (($thiz.dk - ((digitsLen - roundingPos) | 0)) | 0)));
  } else {
    var lastNonNinePos = (((-1) + roundingPos) | 0);
    while (((lastNonNinePos >= 0) && (digits.charCodeAt(lastNonNinePos) === 57))) {
      lastNonNinePos = (((-1) + lastNonNinePos) | 0);
    }
    if ((lastNonNinePos < 0)) {
      var newUnscaledValue = "1";
    } else {
      var endIndex = lastNonNinePos;
      var newUnscaledValue = (digits.substring(0, endIndex) + $cToS((65535 & ((1 + digits.charCodeAt(lastNonNinePos)) | 0))));
    }
    var pos = ((1 + lastNonNinePos) | 0);
    var newScale = (($thiz.dk - ((digitsLen - pos) | 0)) | 0);
    return new $c_ju_Formatter$Decimal($thiz.dD, newUnscaledValue, newScale);
  }
}
/** @constructor */
function $c_ju_Formatter$Decimal(negative, unscaledValue, scale) {
  this.dD = false;
  this.dE = null;
  this.dk = 0;
  this.dD = negative;
  this.dE = unscaledValue;
  this.dk = scale;
}
$p = $c_ju_Formatter$Decimal.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$Decimal;
/** @constructor */
function $h_ju_Formatter$Decimal() {
}
$h_ju_Formatter$Decimal.prototype = $p;
$p.rY = (function() {
  return (this.dE === "0");
});
$p.si = (function(precision) {
  $m_ju_Formatter$();
  if ((!(precision > 0))) {
    throw new $c_jl_AssertionError("Decimal.round() called with non-positive precision");
  }
  return $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, precision);
});
$p.wk = (function(newScale) {
  var roundingPos = ((((this.dE.length + newScale) | 0) - this.dk) | 0);
  var rounded = $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, roundingPos);
  $m_ju_Formatter$();
  if ((!(rounded.rY() || (rounded.dk <= newScale)))) {
    throw new $c_jl_AssertionError("roundAtPos returned a non-zero value with a scale too large");
  }
  return ((rounded.rY() || (rounded.dk === newScale)) ? rounded : new $c_ju_Formatter$Decimal(this.dD, (("" + rounded.dE) + $m_ju_Formatter$().mq(((newScale - rounded.dk) | 0))), newScale));
});
$p.v = (function() {
  return (((((("Decimal(" + this.dD) + ", ") + this.dE) + ", ") + this.dk) + ")");
});
var $d_ju_Formatter$Decimal = new $TypeData().i($c_ju_Formatter$Decimal, "java.util.Formatter$Decimal", ({
  ga: 1
}));
/** @constructor */
function $c_ju_Formatter$LocaleInfo() {
}
$p = $c_ju_Formatter$LocaleInfo.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$LocaleInfo;
/** @constructor */
function $h_ju_Formatter$LocaleInfo() {
}
$h_ju_Formatter$LocaleInfo.prototype = $p;
/** @constructor */
function $c_RTLong(lo, hi) {
  this.s = 0;
  this.w = 0;
  this.s = lo;
  this.w = hi;
}
$p = $c_RTLong.prototype = new $h_O();
$p.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $p;
$p.k = (function(that) {
  return ((that instanceof $c_RTLong) && ((this.s === that.s) && (this.w === that.w)));
});
$p.u = (function() {
  return (this.s ^ this.w);
});
$p.v = (function() {
  return $m_RTLong$().mD(this.s, this.w);
});
$p.xm = (function() {
  return this.s;
});
$p.xl = (function() {
  return $m_RTLong$().sa(this.s, this.w);
});
$p.xk = (function() {
  return $m_RTLong$().iy(this.s, this.w);
});
$p.x2 = (function() {
  return ((this.s << 24) >> 24);
});
$p.xj = (function() {
  return ((this.s << 16) >> 16);
});
$p.xd = (function() {
  return this.s;
});
$p.xe = (function() {
  return this;
});
$p.x7 = (function() {
  return $m_RTLong$().sa(this.s, this.w);
});
$p.x5 = (function() {
  return $m_RTLong$().iy(this.s, this.w);
});
$p.x4 = (function(that) {
  return $m_RTLong$().s8(this.s, this.w, that.s, that.w);
});
$p.x3 = (function(that) {
  return $m_RTLong$().s8(this.s, this.w, that.s, that.w);
});
$p.x6 = (function(b) {
  return ((this.s === b.s) && (this.w === b.w));
});
$p.xg = (function(b) {
  return (!((this.s === b.s) && (this.w === b.w)));
});
$p.wT = (function(b) {
  var ahi = this.w;
  var bhi = b.w;
  return ((ahi === bhi) ? (((-2147483648) ^ this.s) < ((-2147483648) ^ b.s)) : (ahi < bhi));
});
$p.wU = (function(b) {
  var ahi = this.w;
  var bhi = b.w;
  return ((ahi === bhi) ? (((-2147483648) ^ this.s) <= ((-2147483648) ^ b.s)) : (ahi < bhi));
});
$p.wP = (function(b) {
  var ahi = this.w;
  var bhi = b.w;
  return ((ahi === bhi) ? (((-2147483648) ^ this.s) > ((-2147483648) ^ b.s)) : (ahi > bhi));
});
$p.wQ = (function(b) {
  var ahi = this.w;
  var bhi = b.w;
  return ((ahi === bhi) ? (((-2147483648) ^ this.s) >= ((-2147483648) ^ b.s)) : (ahi > bhi));
});
$p.xo = (function() {
  return new $c_RTLong((~this.s), (~this.w));
});
$p.wN = (function(b) {
  return new $c_RTLong((this.s | b.s), (this.w | b.w));
});
$p.wM = (function(b) {
  return new $c_RTLong((this.s & b.s), (this.w & b.w));
});
$p.x0 = (function(b) {
  return new $c_RTLong((this.s ^ b.s), (this.w ^ b.w));
});
$p.wV = (function(n) {
  var lo = this.s;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.w << n)) : (lo << n)));
});
$p.wS = (function(n) {
  var hi = this.w;
  return new $c_RTLong((((32 & n) === 0) ? (((this.s >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
});
$p.wR = (function(n) {
  var hi = this.w;
  return new $c_RTLong((((32 & n) === 0) ? (((this.s >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
});
$p.xn = (function() {
  var lo = this.s;
  var hi = this.w;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)));
});
$p.wY = (function(b) {
  var alo = this.s;
  var ahi = this.w;
  var bhi = b.w;
  var lo = ((alo + b.s) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)));
});
$p.wW = (function(b) {
  var alo = this.s;
  var ahi = this.w;
  var bhi = b.w;
  var lo = ((alo - b.s) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)));
});
$p.wZ = (function(b) {
  var alo = this.s;
  var blo = b.s;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  return new $c_RTLong(lo, ((((((((Math.imul(alo, b.w) + Math.imul(this.w, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0));
});
$p.wO = (function(b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.uh(this.s, this.w, b.s, b.w), this$1.an);
});
$p.wX = (function(b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.vT(this.s, this.w, b.s, b.w), this$1.an);
});
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bV)));
}
var $d_RTLong = new $TypeData().i($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  bV: 1
}));
function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  return ((((-2097152) & hi) === 0) ? ("" + ((4.294967296E9 * hi) + (+(lo >>> 0.0)))) : $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2));
}
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (+(alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + (+(blo >>> 0.0)));
      var rDouble = (aDouble / bDouble);
      $thiz.an = (((rDouble / 4.294967296E9) | 0.0) | 0);
      return ((rDouble | 0.0) | 0);
    } else {
      $thiz.an = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - (Math.clz32(blo) | 0)) | 0);
    $thiz.an = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - (Math.clz32(bhi) | 0)) | 0);
    $thiz.an = 0;
    return ((ahi >>> pow$2) | 0);
  } else {
    return ($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0) | 0);
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (+(alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + (+(blo >>> 0.0)));
      var rDouble = (aDouble % bDouble);
      $thiz.an = (((rDouble / 4.294967296E9) | 0.0) | 0);
      return ((rDouble | 0.0) | 0);
    } else {
      $thiz.an = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.an = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.an = (ahi & (((-1) + bhi) | 0));
    return alo;
  } else {
    return ($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1) | 0);
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = ((((bhi !== 0) ? (Math.clz32(bhi) | 0) : ((32 + (Math.clz32(blo) | 0)) | 0)) - ((ahi !== 0) ? (Math.clz32(ahi) | 0) : ((32 + (Math.clz32(alo) | 0)) | 0))) | 0);
  var n = shift;
  var lo = (((32 & n) === 0) ? (blo << n) : 0);
  var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift));
      } else {
        quotHi = (quotHi | (1 << shift));
      }
    }
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5;
  }
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + (+(lo$6 >>> 0.0)));
    var bDouble = ((4.294967296E9 * bhi) + (+(blo >>> 0.0)));
    if ((ask !== 1)) {
      var x = (remDouble / bDouble);
      var lo$7 = ((x | 0.0) | 0);
      var hi$7 = (((x / 4.294967296E9) | 0.0) | 0);
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9;
    }
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = ((rem_mod_bDouble | 0.0) | 0);
      remHi = (((rem_mod_bDouble / 4.294967296E9) | 0.0) | 0);
    }
  }
  if ((ask === 0)) {
    $thiz.an = quotHi;
    return quotLo;
  } else if ((ask === 1)) {
    $thiz.an = remHi;
    return remLo;
  } else {
    var lo$10 = quotLo;
    var hi$10 = quotHi;
    var quot = ((4.294967296E9 * hi$10) + (+(lo$10 >>> 0.0)));
    var this$7 = remLo;
    var remStr = ("" + this$7);
    var start = remStr.length;
    return ((("" + quot) + "000000000".substring(start)) + remStr);
  }
}
/** @constructor */
function $c_RTLong$() {
  this.an = 0;
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.mD = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)));
});
$p.iy = (function(lo, hi) {
  return ((hi < 0) ? (-((4.294967296E9 * (+(((lo !== 0) ? (~hi) : ((-hi) | 0)) >>> 0.0))) + (+(((-lo) | 0) >>> 0.0)))) : ((4.294967296E9 * hi) + (+(lo >>> 0.0))));
});
$p.sa = (function(lo, hi) {
  if ((hi < 0)) {
    var abs__lo = ((-lo) | 0);
    var abs__hi = ((lo !== 0) ? (~hi) : ((-hi) | 0));
  } else {
    var abs__lo = lo;
    var abs__hi = hi;
  }
  var compressedAbsLo = (((((-2097152) & abs__hi) === 0) || ((65535 & abs__lo) === 0)) ? abs__lo : (32768 | ((-65536) & abs__lo)));
  var absRes = ((4.294967296E9 * (+(abs__hi >>> 0.0))) + (+(compressedAbsLo >>> 0.0)));
  return Math.fround(((hi < 0) ? (-absRes) : absRes));
});
$p.xa = (function(value) {
  return new $c_RTLong(value, (value >> 31));
});
$p.x9 = (function(value) {
  return new $c_RTLong(this.s9(value), this.an);
});
$p.s9 = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.an = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.an = 2147483647;
    return (-1);
  } else {
    var rawLo = ((value | 0.0) | 0);
    var rawHi = (((value / 4.294967296E9) | 0.0) | 0);
    this.an = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$p.s8 = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$p.uh = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.an = 0;
        return (-2147483648);
      } else {
        var lo = $intDiv(alo, blo);
        this.an = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.an = (-1);
      return (-1);
    } else {
      this.an = 0;
      return 0;
    }
  } else {
    if ((ahi < 0)) {
      var aAbs__lo = ((-alo) | 0);
      var aAbs__hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi;
    }
    if ((bhi < 0)) {
      var bAbs__lo = ((-blo) | 0);
      var bAbs__hi = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi;
    }
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo;
    } else {
      var hi$2 = this.an;
      this.an = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    }
  }
});
$p.vT = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.an = (lo >> 31);
        return lo;
      } else {
        this.an = 0;
        return 0;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.an = 0;
      return 0;
    } else {
      this.an = ahi;
      return alo;
    }
  } else {
    if ((ahi < 0)) {
      var aAbs__lo = ((-alo) | 0);
      var aAbs__hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi;
    }
    if ((bhi < 0)) {
      var bAbs__lo = ((-blo) | 0);
      var bAbs__hi = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi;
    }
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if ((ahi < 0)) {
      var hi$2 = this.an;
      this.an = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    } else {
      return absRLo;
    }
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  go: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
/** @constructor */
function $c_s_Array$EmptyArrays$() {
  this.hz = null;
  this.l3 = null;
  $n_s_Array$EmptyArrays$ = this;
  this.hz = new $ac_I(0);
  this.l3 = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  gu: 1
}));
var $n_s_Array$EmptyArrays$;
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$();
  }
  return $n_s_Array$EmptyArrays$;
}
var $d_F0 = new $TypeData().i(1, "scala.Function0", ({
  b8: 1
}));
var $d_F1 = new $TypeData().i(1, "scala.Function1", ({
  i: 1
}));
/** @constructor */
function $c_s_LowPriorityImplicits2() {
}
$p = $c_s_LowPriorityImplicits2.prototype = new $h_O();
$p.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
}
$h_s_LowPriorityImplicits2.prototype = $p;
/** @constructor */
function $c_s_PartialFunction$() {
  this.pQ = null;
  this.j6 = null;
  $n_s_PartialFunction$ = this;
  this.pQ = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2$2) => $m_s_PartialFunction$().pQ));
  this.j6 = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  gC: 1
}));
var $n_s_PartialFunction$;
function $m_s_PartialFunction$() {
  if ((!$n_s_PartialFunction$)) {
    $n_s_PartialFunction$ = new $c_s_PartialFunction$();
  }
  return $n_s_PartialFunction$;
}
/** @constructor */
function $c_sc_ArrayOps$() {
  this.pV = null;
  $n_sc_ArrayOps$ = this;
  this.pV = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_ArrayOps$().pV));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.uB = (function(this$, f) {
  var len = $m_jl_reflect_Array$().aD(this$);
  var i = 0;
  if ((this$ instanceof $ac_O)) {
    while ((i < len)) {
      f.b(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_I)) {
    while ((i < len)) {
      f.b(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_D)) {
    while ((i < len)) {
      f.b(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_J)) {
    while ((i < len)) {
      f.b(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_F)) {
    while ((i < len)) {
      f.b(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_C)) {
    while ((i < len)) {
      f.b($bC(this$.a[i]));
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_B)) {
    while ((i < len)) {
      f.b(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_S)) {
    while ((i < len)) {
      f.b(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_Z)) {
    while ((i < len)) {
      f.b(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    throw new $c_s_MatchError(this$);
  }
});
var $d_sc_ArrayOps$ = new $TypeData().i($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  gL: 1
}));
var $n_sc_ArrayOps$;
function $m_sc_ArrayOps$() {
  if ((!$n_sc_ArrayOps$)) {
    $n_sc_ArrayOps$ = new $c_sc_ArrayOps$();
  }
  return $n_sc_ArrayOps$;
}
/** @constructor */
function $c_sc_Hashing$() {
}
$p = $c_sc_Hashing$.prototype = new $h_O();
$p.constructor = $c_sc_Hashing$;
/** @constructor */
function $h_sc_Hashing$() {
}
$h_sc_Hashing$.prototype = $p;
$p.bs = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0));
});
var $d_sc_Hashing$ = new $TypeData().i($c_sc_Hashing$, "scala.collection.Hashing$", ({
  gY: 1
}));
var $n_sc_Hashing$;
function $m_sc_Hashing$() {
  if ((!$n_sc_Hashing$)) {
    $n_sc_Hashing$ = new $c_sc_Hashing$();
  }
  return $n_sc_Hashing$;
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.e();
  while (it.l()) {
    f.b(it.d());
  }
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $thiz.e();
  while ((res && it.l())) {
    res = (!(!p.b(it.d())));
  }
  return res;
}
function $f_sc_IterableOnceOps__exists__F1__Z($thiz, p) {
  var res = false;
  var it = $thiz.e();
  while (((!res) && it.l())) {
    res = (!(!p.b(it.d())));
  }
  return res;
}
function $f_sc_IterableOnceOps__foldLeft__O__F2__O($thiz, z, op) {
  if ($is_sc_IndexedSeq($thiz)) {
    return $p_sc_IterableOnceOps__loop$1__I__I__O__F2__sc_IndexedSeq__O($thiz, 0, $thiz.o(), z, op, $thiz);
  } else {
    var result = z;
    var it = $thiz.e();
    while (it.l()) {
      result = op.bd(result, it.d());
    }
    return result;
  }
}
function $f_sc_IterableOnceOps__reduceLeft__F2__O($thiz, op) {
  if ($is_sc_IndexedSeq($thiz)) {
    if (($thiz.o() > 0)) {
      var z = $thiz.x(0);
      return $p_sc_IterableOnceOps__loop$1__I__I__O__F2__sc_IndexedSeq__O($thiz, 1, $thiz.o(), z, op, $thiz);
    }
  }
  if (($thiz.q() === 0)) {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  }
  var it = $thiz.e();
  if (it.l()) {
    var acc = it.d();
    while (it.l()) {
      acc = op.bd(acc, it.d());
    }
    return acc;
  } else {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  }
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  switch ($thiz.q()) {
    case (-1): {
      return (!$thiz.e().l());
      break;
    }
    case 0: {
      return true;
      break;
    }
    default: {
      return false;
    }
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, xs, start, len) {
  var it = $thiz.e();
  var i = start;
  var y = (($m_jl_reflect_Array$().aD(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.l())) {
    $m_sr_ScalaRunTime$().d5(xs, i, it.d());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__sum__s_math_Numeric__O($thiz, num) {
  switch ($thiz.q()) {
    case (-1): {
      return $thiz.fy(0, new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((x$2$2, y$2$2) => $f_s_math_Numeric$IntIsIntegral__plus__I__I__I(num, (x$2$2 | 0), (y$2$2 | 0)))));
      break;
    }
    case 0: {
      return 0;
      break;
    }
    default: {
      return $thiz.iC(new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((x$2$2$1, y$2$2$1) => $f_s_math_Numeric$IntIsIntegral__plus__I__I__I(num, (x$2$2$1 | 0), (y$2$2$1 | 0)))));
    }
  }
}
function $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option($thiz, pf) {
  var sentinel = new $c_sc_IterableOnceOps$$anon$1($thiz);
  var it = $thiz.e();
  while (it.l()) {
    var x = pf.c5(it.d(), sentinel);
    if ((x !== sentinel)) {
      return new $c_s_Some(x);
    }
  }
  return $m_s_None$();
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.q() === 0) ? (("" + start) + end) : $thiz.eN($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).bj.t);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.bj;
  if ((start.length !== 0)) {
    jsb.t = (("" + jsb.t) + start);
  }
  var it = $thiz.e();
  if (it.l()) {
    var obj = it.d();
    jsb.t = (("" + jsb.t) + obj);
    while (it.l()) {
      jsb.t = (("" + jsb.t) + sep);
      var obj$1 = it.d();
      jsb.t = (("" + jsb.t) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.t = (("" + jsb.t) + end);
  }
  return b;
}
function $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O($thiz, evidence$2) {
  if (($thiz.q() >= 0)) {
    var destination = evidence$2.c1($thiz.q());
    $thiz.bZ(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$2.bl();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.e();
    while (it.l()) {
      var elem = it.d();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.F.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.F.r().w(jsElems);
  }
}
function $p_sc_IterableOnceOps__loop$1__I__I__O__F2__sc_IndexedSeq__O($thiz, at, end, acc, op$1, seq$1) {
  while (true) {
    if ((at === end)) {
      return acc;
    } else {
      var temp$at = ((1 + at) | 0);
      var temp$acc = op$1.bd(acc, seq$1.x(at));
      at = temp$at;
      acc = temp$acc;
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.q4 = null;
  this.hC = null;
  this.q4 = head;
  this.hC = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.uW = (function() {
  return this.q4.L().e();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  hb: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.q7 = null;
  $n_sc_StringOps$ = this;
  this.q7 = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_StringOps$().q7));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.tQ = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
$p.k4 = (function(this$, from, until) {
  var start = ((from > 0) ? from : 0);
  var that = this$.length;
  var end = ((until < that) ? until : that);
  return ((start >= end) ? "" : this$.substring(start, end));
});
$p.sr = (function(this$, marginChar) {
  var sb = $ct_jl_StringBuilder__I__(new $c_jl_StringBuilder(), this$.length);
  var this$3 = new $c_sc_StringOps$$anon$1(this$, false);
  while ((this$3.bv < this$3.f4)) {
    var x0 = this$3.s3();
    var len = x0.length;
    var index = 0;
    while (((index < len) && (x0.charCodeAt(index) <= 32))) {
      index = ((1 + index) | 0);
    }
    if (((index < len) && (x0.charCodeAt(index) === marginChar))) {
      var beginIndex = ((1 + index) | 0);
      var stripped = x0.substring(beginIndex);
    } else {
      var stripped = x0;
    }
    sb.t = (("" + sb.t) + stripped);
  }
  return sb.t;
});
$p.wx = (function(this$, s) {
  if ((s === null)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "For input string: \"null\"");
  } else {
    _return: {
      var len = s.length;
      if ((len === 4)) {
        var i = 0;
        while ((i !== len)) {
          if (($m_jl_Character$().k6($m_jl_Character$().k8(s.charCodeAt(i))) !== $m_jl_Character$().k6($m_jl_Character$().k8("true".charCodeAt(i))))) {
            var $x_1 = false;
            break _return;
          }
          i = ((1 + i) | 0);
        }
        var $x_1 = true;
      } else {
        var $x_1 = false;
      }
    }
    if ($x_1) {
      return true;
    } else {
      _return$1: {
        var len$1 = s.length;
        if ((len$1 === 5)) {
          var i$1 = 0;
          while ((i$1 !== len$1)) {
            if (($m_jl_Character$().k6($m_jl_Character$().k8(s.charCodeAt(i$1))) !== $m_jl_Character$().k6($m_jl_Character$().k8("false".charCodeAt(i$1))))) {
              var $x_2 = false;
              break _return$1;
            }
            i$1 = ((1 + i$1) | 0);
          }
          var $x_2 = true;
        } else {
          var $x_2 = false;
        }
      }
      if ($x_2) {
        return false;
      } else {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("For input string: \"" + s) + "\""));
      }
    }
  }
});
$p.wG = (function(this$, arg) {
  return (false ? arg.xp() : arg);
});
$p.uE = (function(this$, args) {
  return $m_jl_String$().uC(this$, args.M(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((arg$2$2) => $m_sc_StringOps$().wG(this$, arg$2$2)))).k5($m_s_reflect_ManifestFactory$ObjectManifest$()));
});
$p.rS = (function(this$) {
  if ((this$ === "")) {
    throw new $c_ju_NoSuchElementException("head of empty String");
  } else {
    return this$.charCodeAt(0);
  }
});
$p.vh = (function(this$) {
  if ((this$ === "")) {
    throw new $c_ju_NoSuchElementException("last of empty String");
  } else {
    return this$.charCodeAt((((-1) + this$.length) | 0));
  }
});
$p.mS = (function(this$) {
  if ((this$ === "")) {
    throw new $c_jl_UnsupportedOperationException("tail of empty String");
  } else {
    return $m_sc_StringOps$().k4(this$, 1, this$.length);
  }
});
$p.rT = (function(this$) {
  if ((this$ === "")) {
    throw new $c_jl_UnsupportedOperationException("init of empty String");
  } else {
    return $m_sc_StringOps$().k4(this$, 0, (((-1) + this$.length) | 0));
  }
});
$p.st = (function(this$, n) {
  var $x_1 = $m_sc_StringOps$();
  var y = this$.length;
  return $x_1.k4(this$, 0, ((n < y) ? n : y));
});
$p.m5 = (function(this$, n) {
  var $x_1 = $m_sc_StringOps$();
  var y = this$.length;
  return $x_1.k4(this$, ((n < y) ? n : y), this$.length);
});
$p.ul = (function(this$, n) {
  return $m_sc_StringOps$().st(this$, ((this$.length - ((n > 0) ? n : 0)) | 0));
});
$p.mP = (function(this$, n) {
  return new $c_T2($m_sc_StringOps$().st(this$, n), $m_sc_StringOps$().m5(this$, n));
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  hj: 1
}));
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$();
  }
  return $n_sc_StringOps$;
}
/** @constructor */
function $c_scg_CommonErrors$() {
}
$p = $c_scg_CommonErrors$.prototype = new $h_O();
$p.constructor = $c_scg_CommonErrors$;
/** @constructor */
function $h_scg_CommonErrors$() {
}
$h_scg_CommonErrors$.prototype = $p;
$p.iq = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  hs: 1
}));
var $n_scg_CommonErrors$;
function $m_scg_CommonErrors$() {
  if ((!$n_scg_CommonErrors$)) {
    $n_scg_CommonErrors$ = new $c_scg_CommonErrors$();
  }
  return $n_scg_CommonErrors$;
}
function $ps_sci_IndexedSeqDefaults$__liftedTree1$1__I() {
  try {
    return $m_jl_Integer$().mG($m_jl_System$SystemProperties$().mh("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10);
  } catch (e) {
    if (false) {
      return 64;
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.qd = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  this.qd = $ps_sci_IndexedSeqDefaults$__liftedTree1$1__I();
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  hC: 1
}));
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$();
  }
  return $n_sci_IndexedSeqDefaults$;
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder$DeferredState() {
  this.ls = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.m7 = (function() {
  var state = this.ls;
  if ((state === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "uninitialized");
  }
  return state.L();
});
$p.mk = (function(state) {
  if ((this.ls !== null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "already initialized");
  }
  this.ls = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  hG: 1
}));
/** @constructor */
function $c_sci_MapNode$() {
  this.qi = null;
  $n_sci_MapNode$ = this;
  this.qi = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  hZ: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (((-1) + $m_jl_reflect_Array$().aD(as)) | 0)));
}
/** @constructor */
function $c_sci_Node() {
}
$p = $c_sci_Node.prototype = new $h_O();
$p.constructor = $c_sci_Node;
/** @constructor */
function $h_sci_Node() {
}
$h_sci_Node.prototype = $p;
$p.jZ = (function(as, ix) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > (((-1) + as.a.length) | 0))) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I((((-1) + as.a.length) | 0));
  as.r(0, result, 0, ix);
  var srcPos = ((1 + ix) | 0);
  var length = (((-1) + ((as.a.length - ix) | 0)) | 0);
  as.r(srcPos, result, ix, length);
  return result;
});
$p.rV = (function(as, ix, elem) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > as.a.length)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.r(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.r(ix, result, destPos, length);
  return result;
});
var $d_sci_Node = new $TypeData().i(0, "scala.collection.immutable.Node", ({
  aH: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.hN = 0;
  $n_sci_Node$ = this;
  this.hN = $doubleToInt((+Math.ceil(6.4)));
}
$p = $c_sci_Node$.prototype = new $h_O();
$p.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $p;
$p.cH = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.bY = (function(mask) {
  return (1 << mask);
});
$p.fB = (function(bitmap, bitpos) {
  return $m_jl_Integer$().bE((bitmap & (((-1) + bitpos) | 0)));
});
$p.bJ = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.fB(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  i2: 1
}));
var $n_sci_Node$;
function $m_sci_Node$() {
  if ((!$n_sci_Node$)) {
    $n_sci_Node$ = new $c_sci_Node$();
  }
  return $n_sci_Node$;
}
/** @constructor */
function $c_sci_SetNode$() {
  this.qn = null;
  $n_sci_SetNode$ = this;
  this.qn = new $c_sci_BitmapIndexedSetNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_SetNode$.prototype = new $h_O();
$p.constructor = $c_sci_SetNode$;
/** @constructor */
function $h_sci_SetNode$() {
}
$h_sci_SetNode$.prototype = $p;
var $d_sci_SetNode$ = new $TypeData().i($c_sci_SetNode$, "scala.collection.immutable.SetNode$", ({
  ih: 1
}));
var $n_sci_SetNode$;
function $m_sci_SetNode$() {
  if ((!$n_sci_SetNode$)) {
    $n_sci_SetNode$ = new $c_sci_SetNode$();
  }
  return $n_sci_SetNode$;
}
/** @constructor */
function $c_sci_VectorStatics$() {
  this.lx = null;
  this.ar = null;
  this.bA = null;
  this.d3 = null;
  this.hQ = null;
  this.ly = null;
  $n_sci_VectorStatics$ = this;
  this.lx = new $ac_O(0);
  this.ar = new ($d_O.r().r().C)(0);
  this.bA = new ($d_O.r().r().r().C)(0);
  this.d3 = new ($d_O.r().r().r().r().C)(0);
  this.hQ = new ($d_O.r().r().r().r().r().C)(0);
  this.ly = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.gU = (function(a, elem) {
  var alen = a.a.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.r(0, ac, 0, alen);
  ac.a[alen] = elem;
  return ac;
});
$p.N = (function(a, elem) {
  var ac = $m_ju_Arrays$().ab(a, ((1 + a.a.length) | 0));
  ac.a[(((-1) + ac.a.length) | 0)] = elem;
  return ac;
});
$p.gV = (function(elem, a) {
  var ac = new $ac_O(((1 + a.a.length) | 0));
  var length = a.a.length;
  a.r(0, ac, 1, length);
  ac.a[0] = elem;
  return ac;
});
$p.G = (function(elem, a) {
  var ac = $objectGetClass(a).F.Q().F.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.r(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.m9 = (function(level, a, f) {
  var i = 0;
  var len = a.a.length;
  if ((level === 0)) {
    while ((i < len)) {
      f.b(a.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    var l = (((-1) + level) | 0);
    while ((i < len)) {
      this.m9(l, a.a[i], f);
      i = ((1 + i) | 0);
    }
  }
});
$p.cU = (function(a, f) {
  var i = 0;
  while ((i < a.a.length)) {
    var v1 = a.a[i];
    var v2 = f.b(v1);
    if ((!Object.is(v1, v2))) {
      return this.vn(a, f, i, v2);
    }
    i = ((1 + i) | 0);
  }
  return a;
});
$p.vn = (function(a, f, at, v2) {
  var ac = new $ac_O(a.a.length);
  if ((at > 0)) {
    a.r(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = f.b(a.a[i]);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.aI = (function(n, a, f) {
  if ((n === 1)) {
    return this.cU(a, f);
  } else {
    var i = 0;
    while ((i < a.a.length)) {
      var v1 = a.a[i];
      var v2 = this.aI((((-1) + n) | 0), v1, f);
      if ((v1 !== v2)) {
        return this.vo(n, a, f, i, v2);
      }
      i = ((1 + i) | 0);
    }
    return a;
  }
});
$p.vo = (function(n, a, f, at, v2) {
  var ac = $objectGetClass(a).F.Q().F.U(a.a.length);
  if ((at > 0)) {
    a.r(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = this.aI((((-1) + n) | 0), a.a[i], f);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.gL = (function(suffix1, xs) {
  if ($is_sci_Iterable(xs)) {
    if ((xs.mO(((32 - suffix1.a.length) | 0)) <= 0)) {
      var x1$2 = xs.O();
      switch (x1$2) {
        case 0: {
          return null;
          break;
        }
        case 1: {
          return this.N(suffix1, xs.n());
          break;
        }
        default: {
          var suffix1b = $m_ju_Arrays$().ab(suffix1, ((suffix1.a.length + x1$2) | 0));
          xs.bZ(suffix1b, suffix1.a.length, 2147483647);
          return suffix1b;
        }
      }
    } else {
      return null;
    }
  } else {
    var s = xs.q();
    if (((s > 0) && (s <= ((32 - suffix1.a.length) | 0)))) {
      var suffix1b$2 = $m_ju_Arrays$().ab(suffix1, ((suffix1.a.length + s) | 0));
      xs.e().bZ(suffix1b$2, suffix1.a.length, 2147483647);
      return suffix1b$2;
    } else {
      return null;
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  iq: 1
}));
var $n_sci_VectorStatics$;
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$();
  }
  return $n_sci_VectorStatics$;
}
/** @constructor */
function $c_scm_HashSet$Node(_key, _hash, _next) {
  this.gC = null;
  this.e1 = 0;
  this.bC = null;
  this.gC = _key;
  this.e1 = _hash;
  this.bC = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.ux = (function(k, h) {
  var _$this = this;
  while (true) {
    if (((h === _$this.e1) && $m_sr_BoxesRunTime$().i(k, _$this.gC))) {
      return _$this;
    } else if (((_$this.bC === null) || (_$this.e1 > h))) {
      return null;
    } else {
      _$this = _$this.bC;
    }
  }
});
$p.v = (function() {
  return ((((("Node(" + this.gC) + ", ") + this.e1) + ") -> ") + this.bC);
});
var $d_scm_HashSet$Node = new $TypeData().i($c_scm_HashSet$Node, "scala.collection.mutable.HashSet$Node", ({
  iK: 1
}));
/** @constructor */
function $c_scm_MutationTracker$() {
}
$p = $c_scm_MutationTracker$.prototype = new $h_O();
$p.constructor = $c_scm_MutationTracker$;
/** @constructor */
function $h_scm_MutationTracker$() {
}
$h_scm_MutationTracker$.prototype = $p;
$p.rj = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  iQ: 1
}));
var $n_scm_MutationTracker$;
function $m_scm_MutationTracker$() {
  if ((!$n_scm_MutationTracker$)) {
    $n_scm_MutationTracker$ = new $c_scm_MutationTracker$();
  }
  return $n_scm_MutationTracker$;
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$p = $c_sr_BoxesRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $p;
$p.i = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.us(x, y) : ((x instanceof $Char) ? this.uq(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.us = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.ur(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.s;
      var hi = t.w;
      var value = y.c;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
  }
});
$p.ur = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      return (x2 === $m_RTLong$().iy(t.s, t.w));
    } else {
      return (false && yn.k(x2));
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.s;
    var hi$1 = t$1.w;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.s;
      var hi$2 = t$2.w;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return ($m_RTLong$().iy(lo$1, hi$1) === x3$3);
    } else {
      return (false && yn.k(new $c_RTLong(lo$1, hi$1)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.uq = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $c_RTLong)) {
      var t = $uJ(y);
      var lo = t.s;
      var hi = t.w;
      var value = xc.c;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((y === null) ? (xc === null) : $dp_equals__O__Z(y, xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().i($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  jz: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  jF: 1
}));
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$p = $c_sr_ScalaRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $p;
$p.e6 = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_I)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_D)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_J)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_F)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_C)) {
    return $bC(xs.a[idx]);
  } else if ((xs instanceof $ac_B)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_S)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_Z)) {
    return xs.a[idx];
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$p.d5 = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.a[idx] = value;
  } else if ((xs instanceof $ac_I)) {
    xs.a[idx] = (value | 0);
  } else if ((xs instanceof $ac_D)) {
    xs.a[idx] = (+value);
  } else if ((xs instanceof $ac_J)) {
    xs.a[idx] = $uJ(value);
  } else if ((xs instanceof $ac_F)) {
    xs.a[idx] = Math.fround(value);
  } else if ((xs instanceof $ac_C)) {
    xs.a[idx] = $uC(value);
  } else if ((xs instanceof $ac_B)) {
    xs.a[idx] = (value | 0);
  } else if ((xs instanceof $ac_S)) {
    xs.a[idx] = (value | 0);
  } else if ((xs instanceof $ac_Z)) {
    xs.a[idx] = (!(!value));
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$p.fv = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.aX(), (x.aL() + "("), ",", ")");
});
$p.rO = (function(xs) {
  return ((xs === null) ? null : $m_sci_ArraySeq$().eT(xs));
});
$p.A = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($m_sci_ArraySeq$()) : new $c_sci_ArraySeq$ofRef(xs)));
});
$p.I = (function(xs) {
  return ((xs !== null) ? new $c_sci_ArraySeq$ofInt(xs) : null);
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  jH: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$p = $c_sr_Statics$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $p;
$p.j = (function(hash, data) {
  var h = this.ed(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.ed = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.H = (function(hash, length) {
  return this.tD((hash ^ length));
});
$p.tD = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.h4 = (function(lv) {
  var lo = lv.s;
  var hi = lv.w;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$p.d8 = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.s9(dv);
    var hi = this$1.an;
    return (($m_RTLong$().iy(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().mB(dv));
  }
});
$p.R = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.d8((+x));
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    return this.h4(new $c_RTLong(t.s, t.w));
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.e9 = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  jJ: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_sr_Statics$PFMarker$() {
}
$p = $c_sr_Statics$PFMarker$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$PFMarker$;
/** @constructor */
function $h_sr_Statics$PFMarker$() {
}
$h_sr_Statics$PFMarker$.prototype = $p;
var $d_sr_Statics$PFMarker$ = new $TypeData().i($c_sr_Statics$PFMarker$, "scala.runtime.Statics$PFMarker$", ({
  jK: 1
}));
var $n_sr_Statics$PFMarker$;
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$();
  }
  return $n_sr_Statics$PFMarker$;
}
/** @constructor */
function $c_sjs_js_defined$() {
}
$p = $c_sjs_js_defined$.prototype = new $h_O();
$p.constructor = $c_sjs_js_defined$;
/** @constructor */
function $h_sjs_js_defined$() {
}
$h_sjs_js_defined$.prototype = $p;
$p.ty = (function(a) {
  return a;
});
var $d_sjs_js_defined$ = new $TypeData().i($c_sjs_js_defined$, "scala.scalajs.js.defined$", ({
  jQ: 1
}));
var $n_sjs_js_defined$;
function $m_sjs_js_defined$() {
  if ((!$n_sjs_js_defined$)) {
    $n_sjs_js_defined$ = new $c_sjs_js_defined$();
  }
  return $n_sjs_js_defined$;
}
/** @constructor */
function $c_sjs_js_timers_package$() {
}
$p = $c_sjs_js_timers_package$.prototype = new $h_O();
$p.constructor = $c_sjs_js_timers_package$;
/** @constructor */
function $h_sjs_js_timers_package$() {
}
$h_sjs_js_timers_package$.prototype = $p;
$p.wn = (function(interval, body) {
  return setTimeout((() => {
    body.L();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  jR: 1
}));
var $n_sjs_js_timers_package$;
function $m_sjs_js_timers_package$() {
  if ((!$n_sjs_js_timers_package$)) {
    $n_sjs_js_timers_package$ = new $c_sjs_js_timers_package$();
  }
  return $n_sjs_js_timers_package$;
}
/** @constructor */
function $c_sjsr_Compat$() {
}
$p = $c_sjsr_Compat$.prototype = new $h_O();
$p.constructor = $c_sjsr_Compat$;
/** @constructor */
function $h_sjsr_Compat$() {
}
$h_sjsr_Compat$.prototype = $p;
$p.wz = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.jp;
  } else {
    var result = [];
    seq.U(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  k2: 1
}));
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$();
  }
  return $n_sjsr_Compat$;
}
/** @constructor */
function $c_s_util_control_NonFatal$() {
}
$p = $c_s_util_control_NonFatal$.prototype = new $h_O();
$p.constructor = $c_s_util_control_NonFatal$;
/** @constructor */
function $h_s_util_control_NonFatal$() {
}
$h_s_util_control_NonFatal$.prototype = $p;
$p.cP = (function(t) {
  return (!(false || (false || (false || (false || false)))));
});
var $d_s_util_control_NonFatal$ = new $TypeData().i($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  k5: 1
}));
var $n_s_util_control_NonFatal$;
function $m_s_util_control_NonFatal$() {
  if ((!$n_s_util_control_NonFatal$)) {
    $n_s_util_control_NonFatal$ = new $c_s_util_control_NonFatal$();
  }
  return $n_s_util_control_NonFatal$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.j = (function(hash, data) {
  var h = this.ed(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.ed = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.H = (function(hash, length) {
  return this.cm((hash ^ length));
});
$p.cm = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.sw = (function(x, y, seed) {
  var h = seed;
  h = this.j(h, $f_T__hashCode__I("Tuple2"));
  h = this.j(h, x);
  h = this.j(h, y);
  return this.H(h, 2);
});
$p.bQ = (function(x, seed, ignorePrefix) {
  var arr = x.aJ();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.aL());
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.j(h, $f_T__hashCode__I(x.aL()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.j(h, $m_sr_Statics$().R(x.aK(i)));
      i = ((1 + i) | 0);
    }
    return this.H(h, arr);
  }
});
$p.iH = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.e();
  while (iterator.l()) {
    var x = iterator.d();
    var h = $m_sr_Statics$().R(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.j(h$2, a);
  h$2 = this.j(h$2, b);
  h$2 = this.ed(h$2, c);
  return this.H(h$2, n);
});
$p.vN = (function(xs, seed) {
  var it = xs.e();
  var h = seed;
  if ((!it.l())) {
    return this.H(h, 0);
  }
  var x0 = it.d();
  if ((!it.l())) {
    return this.H(this.j(h, $m_sr_Statics$().R(x0)), 1);
  }
  var x1 = it.d();
  var initial = $m_sr_Statics$().R(x0);
  h = this.j(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().R(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.l()) {
    h = this.j(h, prev);
    var hash = $m_sr_Statics$().R(it.d());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.j(h, hash);
      i = ((1 + i) | 0);
      while (it.l()) {
        h = this.j(h, $m_sr_Statics$().R(it.d()));
        i = ((1 + i) | 0);
      }
      return this.H(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.cm(this.j(this.j(h0, rangeDiff), prev));
});
$p.r8 = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().aD(a);
  switch (l) {
    case 0: {
      return this.H(h, 0);
      break;
    }
    case 1: {
      return this.H(this.j(h, $m_sr_Statics$().R($m_sr_ScalaRunTime$().e6(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().R($m_sr_ScalaRunTime$().e6(a, 0));
      h = this.j(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().R($m_sr_ScalaRunTime$().e6(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.j(h, prev);
        var hash = $m_sr_Statics$().R($m_sr_ScalaRunTime$().e6(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.j(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.j(h, $m_sr_Statics$().R($m_sr_ScalaRunTime$().e6(a, i)));
            i = ((1 + i) | 0);
          }
          return this.H(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cm(this.j(this.j(h0, rangeDiff), prev));
    }
  }
});
$p.vR = (function(start, step, last, seed) {
  return this.cm(this.j(this.j(this.j(seed, start), step), last));
});
$p.v1 = (function(a, seed) {
  var h = seed;
  var l = a.o();
  switch (l) {
    case 0: {
      return this.H(h, 0);
      break;
    }
    case 1: {
      return this.H(this.j(h, $m_sr_Statics$().R(a.x(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().R(a.x(0));
      h = this.j(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().R(a.x(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.j(h, prev);
        var hash = $m_sr_Statics$().R(a.x(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.j(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.j(h, $m_sr_Statics$().R(a.x(i)));
            i = ((1 + i) | 0);
          }
          return this.H(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cm(this.j(this.j(h0, rangeDiff), prev));
    }
  }
});
$p.vi = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.c())) {
    var head = elems.n();
    var tail = elems.y();
    var hash = $m_sr_Statics$().R(head);
    h = this.j(h, hash);
    switch (rangeState) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break;
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break;
      }
      case 2: {
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          rangeState = 3;
        }
        break;
      }
    }
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail;
  }
  return ((rangeState === 2) ? this.vR(initial, rangeDiff, prev, seed) : this.H(h, n));
});
$p.rh = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.H(h, 0);
      break;
    }
    case 1: {
      return this.H(this.j(h, (a.a[0] ? 1231 : 1237)), 1);
      break;
    }
    default: {
      var initial = (a.a[0] ? 1231 : 1237);
      h = this.j(h, initial);
      var h0 = h;
      var prev = (a.a[1] ? 1231 : 1237);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.j(h, prev);
        var hash = (a.a[i] ? 1231 : 1237);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.j(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.j(h, (a.a[i] ? 1231 : 1237));
            i = ((1 + i) | 0);
          }
          return this.H(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cm(this.j(this.j(h0, rangeDiff), prev));
    }
  }
});
$p.r9 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.H(h, 0);
      break;
    }
    case 1: {
      return this.H(this.j(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.j(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.j(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.j(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.j(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.H(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cm(this.j(this.j(h0, rangeDiff), prev));
    }
  }
});
$p.ra = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.H(h, 0);
      break;
    }
    case 1: {
      return this.H(this.j(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.j(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.j(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.j(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.j(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.H(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cm(this.j(this.j(h0, rangeDiff), prev));
    }
  }
});
$p.rb = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.H(h, 0);
      break;
    }
    case 1: {
      return this.H(this.j(h, $m_sr_Statics$().d8(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().d8(a.a[0]);
      h = this.j(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().d8(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.j(h, prev);
        var hash = $m_sr_Statics$().d8(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.j(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.j(h, $m_sr_Statics$().d8(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.H(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cm(this.j(this.j(h0, rangeDiff), prev));
    }
  }
});
$p.rc = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.H(h, 0);
      break;
    }
    case 1: {
      return this.H(this.j(h, $m_sr_Statics$().d8(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().d8(a.a[0]);
      h = this.j(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().d8(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.j(h, prev);
        var hash = $m_sr_Statics$().d8(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.j(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.j(h, $m_sr_Statics$().d8(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.H(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cm(this.j(this.j(h0, rangeDiff), prev));
    }
  }
});
$p.rd = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.H(h, 0);
      break;
    }
    case 1: {
      return this.H(this.j(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.j(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.j(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.j(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.j(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.H(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cm(this.j(this.j(h0, rangeDiff), prev));
    }
  }
});
$p.re = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.H(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var t = a.a[0];
      return this.H(this.j($x_1, $m_sr_Statics$().h4(new $c_RTLong(t.s, t.w))), 1);
      break;
    }
    default: {
      var t$1 = a.a[0];
      var initial = $m_sr_Statics$().h4(new $c_RTLong(t$1.s, t$1.w));
      h = this.j(h, initial);
      var h0 = h;
      var t$2 = a.a[1];
      var prev = $m_sr_Statics$().h4(new $c_RTLong(t$2.s, t$2.w));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.j(h, prev);
        var t$3 = a.a[i];
        var hash = $m_sr_Statics$().h4(new $c_RTLong(t$3.s, t$3.w));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.j(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var t$4 = a.a[i];
            h = this.j($x_2, $m_sr_Statics$().h4(new $c_RTLong(t$4.s, t$4.w)));
            i = ((1 + i) | 0);
          }
          return this.H(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cm(this.j(this.j(h0, rangeDiff), prev));
    }
  }
});
$p.rf = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.H(h, 0);
      break;
    }
    case 1: {
      return this.H(this.j(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.j(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.j(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.j(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.j(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.H(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cm(this.j(this.j(h0, rangeDiff), prev));
    }
  }
});
$p.rg = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.H(h, 0);
      break;
    }
    case 1: {
      return this.H(this.j(h, 0), 1);
      break;
    }
    default: {
      h = this.j(h, 0);
      var h0 = h;
      var prev = 0;
      var rangeDiff = prev;
      var i = 2;
      while ((i < l)) {
        h = this.j(h, prev);
        if (((rangeDiff !== ((-prev) | 0)) || (rangeDiff === 0))) {
          h = this.j(h, 0);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.j(h, 0);
            i = ((1 + i) | 0);
          }
          return this.H(h, l);
        }
        prev = 0;
        i = ((1 + i) | 0);
      }
      return this.cm(this.j(this.j(h0, rangeDiff), prev));
    }
  }
});
function $s_Lsi\uff3ftool_SIAdversaryTool__main__AT__V(args) {
  $m_Lsi\uff3ftool_SIAdversaryTool$().vj(args);
}
function $p_Lsi\uff3ftool_SIAdversaryTool$__splitWithDelimiters__sci_Vector__T__sci_List__T__sci_Vector__sci_Vector($thiz, vec, str, delimiters, notMatchedString, acc) {
  var acc$tailLocal1 = acc;
  var notMatchedString$tailLocal1 = notMatchedString;
  var str$tailLocal1 = str;
  while (true) {
    if ((str$tailLocal1 === "")) {
      return acc$tailLocal1.T(notMatchedString$tailLocal1);
    } else {
      var x31 = $p_Lsi\uff3ftool_SIAdversaryTool$__findDelimiterAtPosition$1__sci_List__T__s_Option($thiz, delimiters, str$tailLocal1);
      if ((x31 instanceof $c_s_Some)) {
        var x33 = x31.co;
        if ((x33 !== null)) {
          var d = x33.bc();
          var rest = x33.b6();
          var acc$tailLocal1$tmp1 = acc$tailLocal1.T(notMatchedString$tailLocal1).T(d);
          str$tailLocal1 = rest;
          notMatchedString$tailLocal1 = "";
          acc$tailLocal1 = acc$tailLocal1$tmp1;
          continue;
        }
      }
      if (($m_s_None$() === x31)) {
        var str$tailLocal1$tmp2 = $m_sc_StringOps$().m5(str$tailLocal1, 1);
        var notMatchedString$tailLocal1$tmp2 = (notMatchedString$tailLocal1 + $cToS($m_sc_StringOps$().rS(str$tailLocal1)));
        str$tailLocal1 = str$tailLocal1$tmp2;
        notMatchedString$tailLocal1 = notMatchedString$tailLocal1$tmp2;
        continue;
      }
      throw new $c_s_MatchError(x31);
    }
  }
}
function $p_Lsi\uff3ftool_SIAdversaryTool$__injectImages__sci_Vector__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, vec, s) {
  var wordsToReplace = $m_sci_Map$().rH($m_sr_ScalaRunTime$().A(new ($d_T2.r().C)([new $c_T2("City", "images/City.svg"), new $c_T2("Town", "images/Town.svg"), new $c_T2("Beasts", "images/Beasts.svg"), new $c_T2("Explorer", "images/Explorer.svg"), new $c_T2("Dahan", "images/Dahan.svg"), new $c_T2("Disease", "images/Disease.svg"), new $c_T2("Escalation", "images/Escalation.svg"), new $c_T2("Fear", "images/Fear.svg"), new $c_T2("Blight", "images/Blight.svg")])));
  var parts = $p_Lsi\uff3ftool_SIAdversaryTool$__splitWithDelimiters__sci_Vector__T__sci_List__T__sci_Vector__sci_Vector($thiz, vec, s, $m_sci_Nil$().z(wordsToReplace.ms()), "", ($m_sci_Vector$(), $m_sci_Vector0$())).M(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text) => {
    var x36 = wordsToReplace.gY(text);
    if ((x36 instanceof $c_s_Some)) {
      var value = x36.co;
      return $m_Lcom_raquo_laminar_api_package$().p.uZ().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().p.wo().gH(value), $m_Lcom_raquo_laminar_api_package$().p.wK().gH("auto"), $m_Lcom_raquo_laminar_api_package$().p.uY().gH("1em")])));
    }
    if (($m_s_None$() === x36)) {
      return new $c_Lcom_raquo_laminar_nodes_TextNode(text);
    }
    throw new $c_s_MatchError(x36);
  })));
  return $m_Lcom_raquo_laminar_api_package$().p.vO().aQ(parts);
}
function $p_Lsi\uff3ftool_SIAdversaryTool$__addHyphen$1__sci_List__s_Option__sci_List($thiz, cards, last) {
  if ((cards instanceof $c_sci_$colon$colon)) {
    var x13 = $uC(cards.gq);
    var x14 = cards.ao;
    if (((!last.c()) && ($uC(last.E()) !== x13))) {
      return new $c_sci_$colon$colon($bC(45), new $c_sci_$colon$colon($bC(x13), $p_Lsi\uff3ftool_SIAdversaryTool$__addHyphen$1__sci_List__s_Option__sci_List($thiz, x14, new $c_s_Some($bC(x13)))));
    }
    return new $c_sci_$colon$colon($bC(x13), $p_Lsi\uff3ftool_SIAdversaryTool$__addHyphen$1__sci_List__s_Option__sci_List($thiz, x14, new $c_s_Some($bC(x13))));
  }
  if ($m_sci_Nil$().k(cards)) {
    return $m_sci_Nil$();
  }
  throw new $c_s_MatchError(cards);
}
function $p_Lsi\uff3ftool_SIAdversaryTool$__findDelimiterAtPosition$1__sci_List__T__s_Option($thiz, delimiters$1, subString) {
  return $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(delimiters$1, new $c_Lsi\uff3ftool_SIAdversaryTool$$anon$1(subString));
}
function $p_Lsi\uff3ftool_SIAdversaryTool$__newSection$lzyINIT1$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, newSection$lzy1$1, hideInCompact$1, sectionName$1, rulesDiv$1) {
  if ((newSection$lzy1$1 === null)) {
    throw new $c_jl_NullPointerException();
  }
  return (newSection$lzy1$1.jn ? newSection$lzy1$1.jo : newSection$lzy1$1.v3((hideInCompact$1 ? $m_Lcom_raquo_laminar_api_package$().p.d7().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().p.h0().gI($thiz.eM), $m_Lcom_raquo_laminar_api_package$().p.em.ft(sectionName$1), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().p, $m_sci_Vector$().bF($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)([$m_Lcom_raquo_laminar_api_package$().p.rQ().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().p, sectionName$1, $m_Lcom_raquo_laminar_modifiers_RenderableText$().c7)]))), rulesDiv$1]))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())]))) : $m_Lcom_raquo_laminar_api_package$().p.d7().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().p.em.ft(sectionName$1), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().p, $m_sci_Vector$().bF($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)([$m_Lcom_raquo_laminar_api_package$().p.rQ().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().p.uz().fu(new $c_Lcom_raquo_airstream_misc_MapSignal($thiz.eM, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$14) => ((!(!_$14)) ? "0.5rem" : "1rem"))), $m_s_None$()), $m_s_$less$colon$less$().cX), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().p, sectionName$1, $m_Lcom_raquo_laminar_modifiers_RenderableText$().c7)]))), rulesDiv$1]))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())]))))));
}
function $p_Lsi\uff3ftool_SIAdversaryTool$__newSection$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, newSection$lzy1$2, hideInCompact$2, sectionName$2, rulesDiv$2) {
  return (newSection$lzy1$2.jn ? newSection$lzy1$2.jo : $p_Lsi\uff3ftool_SIAdversaryTool$__newSection$lzyINIT1$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, newSection$lzy1$2, hideInCompact$2, sectionName$2, rulesDiv$2));
}
/** @constructor */
function $c_Lsi\uff3ftool_SIAdversaryTool$() {
  this.hX = null;
  this.lJ = null;
  this.lK = null;
  this.eM = null;
  this.jv = null;
  this.hY = null;
  this.jw = null;
  this.lL = null;
  this.qJ = null;
  $n_Lsi\uff3ftool_SIAdversaryTool$ = this;
  this.hX = $m_Lcom_raquo_airstream_web_WebStorageVar$().fE("adversary", $m_s_None$()).su(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Lsi\uff3ftool_adversaries_Adversary$().jz.d4)));
  this.lJ = $m_Lcom_raquo_airstream_web_WebStorageVar$().fE("adversary-level", $m_s_None$()).rW(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => 6)));
  this.lK = $m_Lcom_raquo_airstream_web_WebStorageVar$().fE("compact-mode", $m_s_None$()).lZ(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => false)));
  this.eM = this.lK.b8;
  this.jv = $m_Lcom_raquo_airstream_web_WebStorageVar$().fE("events-on", $m_s_None$()).lZ(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => true)));
  this.hY = $m_Lcom_raquo_airstream_web_WebStorageVar$().fE("secondary-on", $m_s_None$()).lZ(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => false)));
  this.jw = $m_Lcom_raquo_airstream_web_WebStorageVar$().fE("secondary-adversary", $m_s_None$()).su(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Lsi\uff3ftool_adversaries_Adversary$().jz.d4)));
  this.lL = $m_Lcom_raquo_airstream_web_WebStorageVar$().fE("secondary-adversary-level", $m_s_None$()).rW(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => 6)));
  this.qJ = $m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().gR($m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().gR($m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().gR($m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().gR($m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().gR(this.hX.b8, this.lJ.b8, new $c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()), this.jv.b8, new $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$4()), this.jw.b8, new $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$6()), this.lL.b8, new $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$8()), this.hY.b8, new $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$10());
}
$p = $c_Lsi\uff3ftool_SIAdversaryTool$.prototype = new $h_O();
$p.constructor = $c_Lsi\uff3ftool_SIAdversaryTool$;
/** @constructor */
function $h_Lsi\uff3ftool_SIAdversaryTool$() {
}
$h_Lsi\uff3ftool_SIAdversaryTool$.prototype = $p;
$p.vj = (function(args) {
  var container = document.getElementById("app");
  var this$3 = $m_Lcom_raquo_laminar_api_package$().p;
  var container$1 = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => container));
  var rootNode = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.w1()));
  var p = $m_Lcom_raquo_laminar_keys_EventProcessor$().fx(this$3.ox.vL(), false, false);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream($m_Lcom_raquo_airstream_web_DomEventStream$().r6(document, p.eZ.hu, p.ht), p.hs), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    new $c_Lcom_raquo_laminar_nodes_RootNode(container$1.L(), rootNode.L());
  })), this$3.wF());
});
$p.w1 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().p.d7().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().p.uV().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().p.h0().gI(this.eM), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().p, "Spirit Island Adversary Tool", $m_Lcom_raquo_laminar_modifiers_RenderableText$().c7)]))), $m_Lcom_raquo_laminar_api_package$().p.d7().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().p.em.ft("selectors"), this.se("Level", this.lJ), this.w4(), this.w3()]))), this.vZ()])));
});
$p.w3 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().p.d7().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().p.jR().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().p, "Options", $m_Lcom_raquo_laminar_modifiers_RenderableText$().c7)]))), this.w0(), this.w2(), this.w6(), $m_Lcom_raquo_laminar_api_package$().p.d7().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().p.h0().gI(new $c_Lcom_raquo_airstream_misc_MapSignal(this.hY.b8, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (!(!(!_$1))))), $m_s_None$())), this.se("Secondary Adversary Level", this.lL), this.w5()])))])));
});
$p.w6 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().p.gO().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().p, "Secondary Adversary", $m_Lcom_raquo_laminar_modifiers_RenderableText$().c7), $m_Lcom_raquo_laminar_api_package$().p.gN().fu(new $c_Lcom_raquo_airstream_misc_MapSignal(this.hY.b8, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((selected) => ((!(!selected)) ? "lightblue" : ""))), $m_s_None$()), $m_s_$less$colon$less$().cX), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().fx($m_Lcom_raquo_laminar_api_package$().p.fH(), false, false)).is((void 0)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.ee(_$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.hY, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((hasEvents, _$2) => (!(!(!hasEvents)))))))))])));
});
$p.w2 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().p.gO().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().p, "Events", $m_Lcom_raquo_laminar_modifiers_RenderableText$().c7), $m_Lcom_raquo_laminar_api_package$().p.gN().fu(new $c_Lcom_raquo_airstream_misc_MapSignal(this.jv.b8, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((selected) => ((!(!selected)) ? "lightblue" : ""))), $m_s_None$()), $m_s_$less$colon$less$().cX), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().fx($m_Lcom_raquo_laminar_api_package$().p.fH(), false, false)).is((void 0)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.ee(_$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.jv, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((hasEvents, _$3) => (!(!(!hasEvents)))))))))])));
});
$p.w0 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().p.gO().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().p, "Compact View", $m_Lcom_raquo_laminar_modifiers_RenderableText$().c7), $m_Lcom_raquo_laminar_api_package$().p.gN().fu(new $c_Lcom_raquo_airstream_misc_MapSignal(this.eM, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((selected) => ((!(!selected)) ? "lightblue" : ""))), $m_s_None$()), $m_s_$less$colon$less$().cX), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().fx($m_Lcom_raquo_laminar_api_package$().p.fH(), false, false)).is((void 0)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.ee(_$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.lK, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((isCompact, _$4) => (!(!(!isCompact)))))))))])));
});
$p.se = (function(name, advLevel) {
  var $x_6 = $m_Lcom_raquo_laminar_api_package$().p.d7();
  var $x_5 = $m_sr_ScalaRunTime$();
  var $x_4 = $m_Lcom_raquo_laminar_api_package$().p.em.ft("levelSelector");
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().p.h0().gI(this.eM);
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().p.jR().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().p, name, $m_Lcom_raquo_laminar_modifiers_RenderableText$().c7)])));
  var $x_1 = $m_Lcom_raquo_laminar_api_package$().p;
  var b = $m_sci_IndexedSeq$().at();
  var it = new $c_sci_RangeIterator(1, 1, 6, false);
  while (it.ev) {
    var x0 = it.s2();
    b.as($m_Lcom_raquo_laminar_api_package$().p.gO().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().p, ("" + x0), $m_Lcom_raquo_laminar_modifiers_RenderableText$().c7), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().fx($m_Lcom_raquo_laminar_api_package$().p.fH(), false, false)).vq(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((x0) => (() => x0))(x0))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
      sink.ee(_$1);
    }))(advLevel.iV))), $m_Lcom_raquo_laminar_api_package$().p.gN().fu(new $c_Lcom_raquo_airstream_misc_MapSignal(advLevel.b8, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x0) => ((selected) => (((selected | 0) === x0) ? "lightblue" : "")))(x0)), $m_s_None$()), $m_s_$less$colon$less$().cX)]))));
  }
  return $x_6.aQ($x_5.A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_4, $x_3, $x_2, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_1, b.aM(), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
});
$p.w5 = (function() {
  var $x_7 = $m_Lcom_raquo_laminar_api_package$().p.d7();
  var $x_6 = $m_sr_ScalaRunTime$();
  var $x_5 = $m_Lcom_raquo_laminar_api_package$().p.em.ft("adversarySelector");
  var $x_4 = $m_Lcom_raquo_laminar_api_package$().p.h0().gI(this.eM);
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().p.jR().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().p, "Secondary Adversary", $m_Lcom_raquo_laminar_modifiers_RenderableText$().c7)])));
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().p;
  var this$13 = $m_Lsi\uff3ftool_adversaries_Adversary$().jy;
  var f = ((adversary) => $m_Lcom_raquo_laminar_api_package$().p.gO().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().p, adversary.d4, $m_Lcom_raquo_laminar_modifiers_RenderableText$().c7), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().fx($m_Lcom_raquo_laminar_api_package$().p.fH(), false, false)).is((void 0)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.ee(_$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.jw, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((adversary$2) => ((previous, _$5) => adversary$2.d4))(adversary)))))), $m_Lcom_raquo_laminar_api_package$().p.gN().fu(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().gR(this.jw.b8, this.hX.b8, new $c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((adversary$3) => ((x$1) => {
    var selected2 = x$1.bc();
    var selected1 = x$1.b6();
    var x = $m_Lsi\uff3ftool_adversaries_Adversary$().jQ(selected2);
    if ((((x === null) ? (adversary$3 === null) : x.k(adversary$3)) && (selected2 !== selected1))) {
      return "lightblue";
    } else {
      return "";
    }
  }))(adversary)), $m_s_None$()), $m_s_$less$colon$less$().cX)]))));
  if ((this$13 === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var x0 = this$13.n();
    var h = new $c_sci_$colon$colon(f(x0), $m_sci_Nil$());
    var t = h;
    var rest = this$13.y();
    while ((rest !== $m_sci_Nil$())) {
      var x0$1 = rest.n();
      var nx = new $c_sci_$colon$colon(f(x0$1), $m_sci_Nil$());
      t.ao = nx;
      t = nx;
      rest = rest.y();
    }
    var $x_1 = h;
  }
  return $x_7.aQ($x_6.A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_5, $x_4, $x_3, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_2, $x_1, $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
});
$p.w4 = (function() {
  var $x_7 = $m_Lcom_raquo_laminar_api_package$().p.d7();
  var $x_6 = $m_sr_ScalaRunTime$();
  var $x_5 = $m_Lcom_raquo_laminar_api_package$().p.em.ft("adversarySelector");
  var $x_4 = $m_Lcom_raquo_laminar_api_package$().p.h0().gI(this.eM);
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().p.jR().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().p, "Adversary", $m_Lcom_raquo_laminar_modifiers_RenderableText$().c7)])));
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().p;
  var this$11 = $m_Lsi\uff3ftool_adversaries_Adversary$().jy;
  var f = ((adversary) => $m_Lcom_raquo_laminar_api_package$().p.gO().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().p, adversary.d4, $m_Lcom_raquo_laminar_modifiers_RenderableText$().c7), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().fx($m_Lcom_raquo_laminar_api_package$().p.fH(), false, false)).is((void 0)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.ee(_$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.hX, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((adversary$2) => ((previous, _$6) => adversary$2.d4))(adversary)))))), $m_Lcom_raquo_laminar_api_package$().p.gN().fu(new $c_Lcom_raquo_airstream_misc_MapSignal(this.hX.b8, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((adversary$3) => ((selected) => {
    var x = $m_Lsi\uff3ftool_adversaries_Adversary$().jQ(selected);
    if (((x === null) ? (adversary$3 === null) : x.k(adversary$3))) {
      return "lightblue";
    } else {
      return "";
    }
  }))(adversary)), $m_s_None$()), $m_s_$less$colon$less$().cX)]))));
  if ((this$11 === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var x0 = this$11.n();
    var h = new $c_sci_$colon$colon(f(x0), $m_sci_Nil$());
    var t = h;
    var rest = this$11.y();
    while ((rest !== $m_sci_Nil$())) {
      var x0$1 = rest.n();
      var nx = new $c_sci_$colon$colon(f(x0$1), $m_sci_Nil$());
      t.ao = nx;
      t = nx;
      rest = rest.y();
    }
    var $x_1 = h;
  }
  return $x_7.aQ($x_6.A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_5, $x_4, $x_3, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_2, $x_1, $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
});
$p.vZ = (function() {
  return $m_Lcom_raquo_laminar_api_package$().p.d7().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().p.ww().gH("Click for toggling compact view!"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildrenInserter$().tv(new $c_Lcom_raquo_airstream_misc_MapSignal(this.qJ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var name = x$1.ge;
    var level = (x$1.gf | 0);
    var eventsOn = (!(!x$1.gg));
    var secondaryName = x$1.gh;
    var secondaryLevel = (x$1.gi | 0);
    var secondaryOn = (!(!x$1.gj));
    var primary = new $c_Lsi\uff3ftool_SIAdversaryTool$AdversarySelector($m_Lsi\uff3ftool_adversaries_Adversary$().jQ(name), level);
    var secondary = ((secondaryOn && (secondaryName !== name)) ? new $c_s_Some(new $c_Lsi\uff3ftool_SIAdversaryTool$AdversarySelector($m_Lsi\uff3ftool_adversaries_Adversary$().jQ(secondaryName), secondaryLevel)) : $m_s_None$());
    var rs = $m_Lsi\uff3ftool_adversaries_RuleSet$().uL(primary, secondary);
    var invaderDeck = this.tc(eventsOn, this.v6(primary, secondary));
    var fear = this.tJ(eventsOn, $f_sc_LinearSeqOps__apply__I__O(primary.c4.gE, (((-1) + primary.cg) | 0)), (secondary.c() ? $m_s_None$() : new $c_s_Some($f_sc_LinearSeqOps__apply__I__O(secondary.E().c4.gE, (((-1) + secondary.E().cg) | 0)))));
    var setupWithDeckAndFear = $m_sci_Vector$().bF($m_sr_ScalaRunTime$().A(new ($d_T.r().C)([("Deck Order: " + invaderDeck), ("Fear: " + fear), "Add 1 Disease to land #2 (with the City)", "Add 1 Beasts to the lowest-numbered land with no printed Setup icons"]))).jI(rs.i6);
    return this.e4(this.e4(this.e4(this.e4(this.e4(this.e4(this.e4(this.e4(this.e4($m_sci_Vector$().bF($m_sr_ScalaRunTime$().rO(new ($d_sr_Nothing$.r().C)([]))), setupWithDeckAndFear, "Setup", true), rs.qS, "Loss Condition", false), rs.i5, "Rule Changes", false), rs.i3, "High Immigration", false), rs.i4, "Ravage", false), rs.i1, "After Ravage", false), rs.i2, "Build", false), rs.i0, "After Build", false), rs.qR, "Explore", false);
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().pm, (void 0)))])));
});
$p.v6 = (function(primary, secondaryOpt) {
  var $x_3 = $m_sci_Nil$();
  var $x_2 = $m_s_Predef$();
  matchResult4: {
    var $x_1;
    if ((secondaryOpt instanceof $c_s_Some)) {
      var secondary = secondaryOpt.co;
      var secondaryDeck = secondary.c4.fp.bd("111222233333", secondary.cg);
      var $x_1 = primary.c4.fp.bd(secondaryDeck, primary.cg);
      break matchResult4;
    }
    if (($m_s_None$() === secondaryOpt)) {
      var $x_1 = primary.c4.fp.bd("111222233333", primary.cg);
      break matchResult4;
    }
    throw new $c_s_MatchError(secondaryOpt);
  }
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($p_Lsi\uff3ftool_SIAdversaryTool$__addHyphen$1__sci_List__s_Option__sci_List(this, $x_3.z($x_2.sB($x_1)), $m_s_None$()), "", "", "");
});
$p.tc = (function(eventsOn, deckOrder) {
  if (eventsOn) {
    return deckOrder;
  } else {
    _return: {
      var len = deckOrder.length;
      var i = 0;
      while ((i < len)) {
        if ((deckOrder.charCodeAt(i) === 51)) {
          var x1 = i;
          break _return;
        }
        i = ((1 + i) | 0);
      }
      var x1 = (-1);
    }
    if ((x1 === (-1))) {
      var x15___1 = deckOrder;
      var x15___2 = "";
    } else {
      var x15___1 = deckOrder.substring(0, x1);
      var x15___2 = deckOrder.substring(x1);
    }
    var \u03b41$___1 = x15___1;
    var \u03b41$___2 = x15___2;
    var front1$2 = \u03b41$___1;
    var back1$2 = \u03b41$___2;
    var deckWithBeast3 = ((front1$2 + "Beasts-") + back1$2);
    _return$1: {
      var len$1 = deckWithBeast3.length;
      var i$1 = 0;
      while ((i$1 < len$1)) {
        if ((deckWithBeast3.charCodeAt(i$1) === 50)) {
          var x1$1 = i$1;
          break _return$1;
        }
        i$1 = ((1 + i$1) | 0);
      }
      var x1$1 = (-1);
    }
    if ((x1$1 === (-1))) {
      var x18___1 = deckWithBeast3;
      var x18___2 = "";
    } else {
      var x18___1 = deckWithBeast3.substring(0, x1$1);
      var x18___2 = deckWithBeast3.substring(x1$1);
    }
    var \u03b42$___1 = x18___1;
    var \u03b42$___2 = x18___2;
    var front2$2 = \u03b42$___1;
    var back2$2 = \u03b42$___2;
    return ((front2$2 + "Beasts-") + back2$2);
  }
});
$p.tJ = (function(eventsOn, primaryExtraFear, secondaryExtraFear) {
  matchResult8: {
    var mergedFear;
    if ((secondaryExtraFear instanceof $c_s_Some)) {
      var sef = secondaryExtraFear.co;
      var this$2 = $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O(primaryExtraFear, sef);
      var f = ((x$1) => (((x$1.bc() | 0) + (x$1.b6() | 0)) | 0));
      if ((this$2 === $m_sci_Nil$())) {
        var mergedFear = $m_sci_Nil$();
        break matchResult8;
      } else {
        var x0 = this$2.n();
        var h = new $c_sci_$colon$colon(f(x0), $m_sci_Nil$());
        var t = h;
        var rest = this$2.y();
        while ((rest !== $m_sci_Nil$())) {
          var x0$1 = rest.n();
          var nx = new $c_sci_$colon$colon(f(x0$1), $m_sci_Nil$());
          t.ao = nx;
          t = nx;
          rest = rest.y();
        }
        var mergedFear = h;
        break matchResult8;
      }
    }
    if (($m_s_None$() === secondaryExtraFear)) {
      var mergedFear = primaryExtraFear;
      break matchResult8;
    }
    throw new $c_s_MatchError(secondaryExtraFear);
  }
  var f$1 = ((_$13) => ((3 + (_$13 | 0)) | 0));
  if ((mergedFear === $m_sci_Nil$())) {
    var baseFearList = $m_sci_Nil$();
  } else {
    var x0$2 = mergedFear.n();
    var h$1 = new $c_sci_$colon$colon(f$1(x0$2), $m_sci_Nil$());
    var t$1 = h$1;
    var rest$1 = mergedFear.y();
    while ((rest$1 !== $m_sci_Nil$())) {
      var x0$3 = rest$1.n();
      var nx$1 = new $c_sci_$colon$colon(f$1(x0$3), $m_sci_Nil$());
      t$1.ao = nx$1;
      t$1 = nx$1;
      rest$1 = rest$1.y();
    }
    var baseFearList = h$1;
  }
  if (eventsOn) {
    var fearList = baseFearList;
  } else {
    matchResult9: {
      var \u03b43$___1;
      var \u03b43$___2;
      var \u03b43$___3;
      if ((baseFearList.be(3) === 0)) {
        var \u03b43$___1 = ($f_sc_LinearSeqOps__apply__I__O(baseFearList, 0) | 0);
        var \u03b43$___2 = ($f_sc_LinearSeqOps__apply__I__O(baseFearList, 1) | 0);
        var \u03b43$___3 = ($f_sc_LinearSeqOps__apply__I__O(baseFearList, 2) | 0);
        break matchResult9;
      }
      throw new $c_s_MatchError(baseFearList);
    }
    var fearList = $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([(\u03b43$___1 | 0), ((1 + (\u03b43$___2 | 0)) | 0), (\u03b43$___3 | 0)]))));
  }
  return ((($f_sc_IterableOnceOps__sum__s_math_Numeric__O(fearList, $m_s_math_Numeric$IntIsIntegral$()) + " (") + $f_sc_IterableOnceOps__mkString__T__T__T__T(fearList, "", "/", "")) + ")");
});
$p.e4 = (function(vec, rules, sectionName, hideInCompact) {
  var newSection$lzy1 = new $c_sr_LazyRef();
  var rulesDiv = $m_Lcom_raquo_laminar_api_package$().p.d7().aQ($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().p.em.ft("rules"), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().p, rules.M(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s) => $p_Lsi\uff3ftool_SIAdversaryTool$__injectImages__sci_Vector__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, vec, s)))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
  return ((!$f_sc_SeqOps__isEmpty__Z(rules)) ? vec.T($p_Lsi\uff3ftool_SIAdversaryTool$__newSection$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, newSection$lzy1, hideInCompact, sectionName, rulesDiv)) : vec);
});
var $d_Lsi\uff3ftool_SIAdversaryTool$ = new $TypeData().i($c_Lsi\uff3ftool_SIAdversaryTool$, "si_tool.SIAdversaryTool$", ({
  k9: 1
}));
var $n_Lsi\uff3ftool_SIAdversaryTool$;
function $m_Lsi\uff3ftool_SIAdversaryTool$() {
  if ((!$n_Lsi\uff3ftool_SIAdversaryTool$)) {
    $n_Lsi\uff3ftool_SIAdversaryTool$ = new $c_Lsi\uff3ftool_SIAdversaryTool$();
  }
  return $n_Lsi\uff3ftool_SIAdversaryTool$;
}
function $p_Lsi\uff3ftool_adversaries_InvaderCards$__findNthPos__T__C__I__s_Option($thiz, invaders, char, n) {
  return $p_Lsi\uff3ftool_adversaries_InvaderCards$__inner$1__C__sci_List__I__I__s_Option($thiz, char, $m_sci_Nil$().z($m_s_Predef$().sB(invaders)), n, 0);
}
function $p_Lsi\uff3ftool_adversaries_InvaderCards$__inner$1__C__sci_List__I__I__s_Option($thiz, char$1, remainder, n, pos) {
  var pos$tailLocal1 = pos;
  var n$tailLocal1 = n;
  var remainder$tailLocal1 = remainder;
  while (true) {
    var x30 = remainder$tailLocal1;
    if ((x30 instanceof $c_sci_$colon$colon)) {
      var x38 = $uC(x30.gq);
      var x39 = x30.ao;
      if ((char$1 === x38)) {
        if ((n$tailLocal1 === 1)) {
          return new $c_s_Some(pos$tailLocal1);
        }
        var n$tailLocal1$tmp1 = (((-1) + n$tailLocal1) | 0);
        var pos$tailLocal1$tmp1 = ((1 + pos$tailLocal1) | 0);
        remainder$tailLocal1 = x39;
        n$tailLocal1 = n$tailLocal1$tmp1;
        pos$tailLocal1 = pos$tailLocal1$tmp1;
        continue;
      }
      var pos$tailLocal1$tmp2 = ((1 + pos$tailLocal1) | 0);
      remainder$tailLocal1 = x39;
      pos$tailLocal1 = pos$tailLocal1$tmp2;
      continue;
    }
    if ($m_sci_Nil$().k(x30)) {
      return $m_s_None$();
    }
    throw new $c_s_MatchError(x30);
  }
}
/** @constructor */
function $c_Lsi\uff3ftool_adversaries_InvaderCards$() {
  this.t2 = null;
  this.t2 = "111222233333";
}
$p = $c_Lsi\uff3ftool_adversaries_InvaderCards$.prototype = new $h_O();
$p.constructor = $c_Lsi\uff3ftool_adversaries_InvaderCards$;
/** @constructor */
function $h_Lsi\uff3ftool_adversaries_InvaderCards$() {
}
$h_Lsi\uff3ftool_adversaries_InvaderCards$.prototype = $p;
$p.iB = (function(invaders, level) {
  switch (level) {
    case 1: {
      return invaders;
      break;
    }
    case 2: {
      return this.tb(this.ef(invaders, 51), 51, 50);
      break;
    }
    case 3: {
      return this.ef(this.iB(invaders, 2), 49);
      break;
    }
    case 4: {
      return this.ef(this.iB(invaders, 3), 50);
      break;
    }
    case 5: {
      return this.ef(this.iB(invaders, 4), 49);
      break;
    }
    case 6: {
      return this.ef(this.iB(invaders, 5), 49);
      break;
    }
    default: {
      throw new $c_s_MatchError(level);
    }
  }
});
$p.t4 = (function(invaders, level) {
  switch (level) {
    case 1: {
      return invaders;
      break;
    }
    case 2: {
      return invaders;
      break;
    }
    case 3: {
      return this.ef(invaders, 49);
      break;
    }
    case 4: {
      return this.ef(invaders, 49);
      break;
    }
    case 5: {
      return this.ef(invaders, 49);
      break;
    }
    case 6: {
      return this.ef(invaders, 49);
      break;
    }
    default: {
      throw new $c_s_MatchError(level);
    }
  }
});
$p.t3 = (function(invaders, level) {
  switch (level) {
    case 1: {
      return invaders;
      break;
    }
    case 2: {
      return invaders;
      break;
    }
    case 3: {
      return invaders;
      break;
    }
    case 4: {
      return this.k0(invaders, "S", 50, 2);
      break;
    }
    case 5: {
      return this.k0(invaders, "S", 50, 2);
      break;
    }
    case 6: {
      return this.k0(invaders, "S", 50, 2);
      break;
    }
    default: {
      throw new $c_s_MatchError(level);
    }
  }
});
$p.wb = (function(invaders, level) {
  switch (level) {
    case 1: {
      return invaders;
      break;
    }
    case 2: {
      return invaders;
      break;
    }
    case 3: {
      return invaders;
      break;
    }
    case 4: {
      return this.mA(invaders);
      break;
    }
    case 5: {
      return this.mA(invaders);
      break;
    }
    case 6: {
      return this.mA(invaders);
      break;
    }
    default: {
      throw new $c_s_MatchError(level);
    }
  }
});
$p.k3 = (function(invaders, level) {
  var level$tailLocal1 = level;
  while (true) {
    var x5 = level$tailLocal1;
    switch (x5) {
      case 1: {
        return invaders;
        break;
      }
      case 2: {
        return this.sq(this.sq(this.k0(invaders, "C", 50, 3), 50, 1), 50, 2);
        break;
      }
      case 3: {
        level$tailLocal1 = 2;
        break;
      }
      case 4: {
        return this.mI(this.k3(invaders, 2));
        break;
      }
      case 5: {
        return this.mI(this.k3(invaders, 2));
        break;
      }
      case 6: {
        return this.mI(this.k3(invaders, 2));
        break;
      }
      default: {
        throw new $c_s_MatchError(x5);
      }
    }
  }
});
$p.ef = (function(invaders, toRemove) {
  _return: {
    var len = invaders.length;
    var i = 0;
    while ((i < len)) {
      if ((invaders.charCodeAt(i) === toRemove)) {
        var x1 = i;
        break _return;
      }
      i = ((1 + i) | 0);
    }
    var x1 = (-1);
  }
  if ((x1 === (-1))) {
    var x6___1 = invaders;
    var x6___2 = "";
  } else {
    var x6___1 = invaders.substring(0, x1);
    var x6___2 = invaders.substring(x1);
  }
  var \u03b43$___1 = x6___1;
  var \u03b43$___2 = x6___2;
  return (("" + \u03b43$___1) + $m_sc_StringOps$().mS(\u03b43$___2));
});
$p.tb = (function(invaders, add, before) {
  _return: {
    var len = invaders.length;
    var i = 0;
    while ((i < len)) {
      if ((invaders.charCodeAt(i) === before)) {
        var x1 = i;
        break _return;
      }
      i = ((1 + i) | 0);
    }
    var x1 = (-1);
  }
  if ((x1 === (-1))) {
    var x9___1 = invaders;
    var x9___2 = "";
  } else {
    var x9___1 = invaders.substring(0, x1);
    var x9___2 = invaders.substring(x1);
  }
  var \u03b44$___1 = x9___1;
  var \u03b44$___2 = x9___2;
  var f$2 = \u03b44$___1;
  var b$2 = \u03b44$___2;
  return ((f$2 + $cToS(add)) + b$2);
});
$p.mA = (function(invaders) {
  var i = 0;
  var res = 0;
  var len = invaders.length;
  while ((i < len)) {
    if ((invaders.charCodeAt(i) === 50)) {
      res = ((1 + res) | 0);
    }
    i = ((1 + i) | 0);
  }
  var nr2s = res;
  return $m_sc_StringOps$().ul(invaders.split("2").join("23"), nr2s);
});
$p.k0 = (function(invaders, replacee, replaced, n) {
  var x15 = $p_Lsi\uff3ftool_adversaries_InvaderCards$__findNthPos__T__C__I__s_Option(this, invaders, replaced, n);
  if (($m_s_None$() === x15)) {
    return invaders;
  }
  if ((x15 instanceof $c_s_Some)) {
    var idx = (x15.co | 0);
    matchResult8: {
      var \u03b41$___1;
      var \u03b41$___2;
      var x12 = $m_sc_StringOps$().mP(invaders, idx);
      if ((x12 !== null)) {
        var \u03b41$___1 = x12.bc();
        var \u03b41$___2 = x12.b6();
        break matchResult8;
      }
      throw new $c_s_MatchError(x12);
    }
    var f$2 = \u03b41$___1;
    var b$2 = \u03b41$___2;
    return ((("" + f$2) + replacee) + $m_sc_StringOps$().mS(b$2));
  }
  throw new $c_s_MatchError(x15);
});
$p.sq = (function(invaders, char, n) {
  var x21 = $p_Lsi\uff3ftool_adversaries_InvaderCards$__findNthPos__T__C__I__s_Option(this, invaders, char, n);
  if (($m_s_None$() === x21)) {
    return invaders;
  }
  if ((x21 instanceof $c_s_Some)) {
    var idx = (x21.co | 0);
    matchResult10: {
      var \u03b42$___1;
      var \u03b42$___2;
      var x18 = $m_sc_StringOps$().mP(invaders, idx);
      if ((x18 !== null)) {
        var \u03b42$___1 = x18.bc();
        var \u03b42$___2 = x18.b6();
        break matchResult10;
      }
      throw new $c_s_MatchError(x18);
    }
    var front$2 = \u03b42$___1;
    var back$2 = \u03b42$___2;
    return ((($m_sc_StringOps$().rT(front$2) + $cToS($m_sc_StringOps$().rS(back$2))) + $cToS($m_sc_StringOps$().vh(front$2))) + $m_sc_StringOps$().mS(back$2));
  }
  throw new $c_s_MatchError(x21);
});
$p.mI = (function(invaders) {
  var x27 = $p_Lsi\uff3ftool_adversaries_InvaderCards$__findNthPos__T__C__I__s_Option(this, invaders, 49, 3);
  if (($m_s_None$() === x27)) {
    return invaders;
  }
  if ((x27 instanceof $c_s_Some)) {
    var idx = (x27.co | 0);
    matchResult12: {
      var \u03b45$___1;
      var \u03b45$___2;
      var x24 = $m_sc_StringOps$().mP(invaders, idx);
      if ((x24 !== null)) {
        var \u03b45$___1 = x24.bc();
        var \u03b45$___2 = x24.b6();
        break matchResult12;
      }
      throw new $c_s_MatchError(x24);
    }
    var front$2 = \u03b45$___1;
    var back$2 = \u03b45$___2;
    var backWithLast3 = $m_sc_StringOps$().rT(back$2);
    return ((front$2 + "3") + backWithLast3);
  }
  throw new $c_s_MatchError(x27);
});
var $d_Lsi\uff3ftool_adversaries_InvaderCards$ = new $TypeData().i($c_Lsi\uff3ftool_adversaries_InvaderCards$, "si_tool.adversaries.InvaderCards$", ({
  kc: 1
}));
var $n_Lsi\uff3ftool_adversaries_InvaderCards$;
function $m_Lsi\uff3ftool_adversaries_InvaderCards$() {
  if ((!$n_Lsi\uff3ftool_adversaries_InvaderCards$)) {
    $n_Lsi\uff3ftool_adversaries_InvaderCards$ = new $c_Lsi\uff3ftool_adversaries_InvaderCards$();
  }
  return $n_Lsi\uff3ftool_adversaries_InvaderCards$;
}
/** @constructor */
function $c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1() {
}
$p = $c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1.prototype = new $h_Lapp_tulz_tuplez_Composition();
$p.constructor = $c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1;
/** @constructor */
function $h_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1() {
}
$h_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1.prototype = $p;
$p.ik = (function(a, b) {
  return new $c_T2(a, b);
});
var $d_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1 = new $TypeData().i($c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1, "app.tulz.tuplez.Composition_Pri0$$anon$1", ({
  dm: 1,
  aD: 1
}));
/** @constructor */
function $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$10() {
}
$p = $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$10.prototype = new $h_Lapp_tulz_tuplez_Composition();
$p.constructor = $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$10;
/** @constructor */
function $h_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$10() {
}
$h_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$10.prototype = $p;
$p.ik = (function(a, b) {
  return new $c_T6(a.g9, a.ga, a.gb, a.gc, a.gd, b);
});
var $d_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$10 = new $TypeData().i($c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$10, "app.tulz.tuplez.Composition_Pri7$$anon$10", ({
  dn: 1,
  aD: 1
}));
/** @constructor */
function $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$4() {
}
$p = $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$4.prototype = new $h_Lapp_tulz_tuplez_Composition();
$p.constructor = $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$4;
/** @constructor */
function $h_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$4() {
}
$h_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$4.prototype = $p;
$p.ik = (function(a, b) {
  return new $c_T3(a.bc(), a.b6(), b);
});
var $d_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$4 = new $TypeData().i($c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$4, "app.tulz.tuplez.Composition_Pri7$$anon$4", ({
  dp: 1,
  aD: 1
}));
/** @constructor */
function $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$6() {
}
$p = $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$6.prototype = new $h_Lapp_tulz_tuplez_Composition();
$p.constructor = $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$6;
/** @constructor */
function $h_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$6() {
}
$h_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$6.prototype = $p;
$p.ik = (function(a, b) {
  return new $c_T4(a.g2, a.g3, a.g4, b);
});
var $d_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$6 = new $TypeData().i($c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$6, "app.tulz.tuplez.Composition_Pri7$$anon$6", ({
  dq: 1,
  aD: 1
}));
/** @constructor */
function $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$8() {
}
$p = $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$8.prototype = new $h_Lapp_tulz_tuplez_Composition();
$p.constructor = $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$8;
/** @constructor */
function $h_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$8() {
}
$h_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$8.prototype = $p;
$p.ik = (function(a, b) {
  return new $c_T5(a.g5, a.g6, a.g7, a.g8, b);
});
var $d_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$8 = new $TypeData().i($c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$8, "app.tulz.tuplez.Composition_Pri7$$anon$8", ({
  dr: 1,
  aD: 1
}));
function $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.cE(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $thiz.ix(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.h8(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.h8(new $c_s_util_Failure(nextError), transaction);
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_ManualOwner() {
  this.nP = null;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
}
$p = $c_Lcom_raquo_airstream_ownership_ManualOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_ManualOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_ManualOwner() {
}
$h_Lcom_raquo_airstream_ownership_ManualOwner.prototype = $p;
$p.fK = (function() {
  return this.nP;
});
$p.m0 = (function(x$0) {
  this.nP = x$0;
});
$p.mE = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
});
$p.mt = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
var $d_Lcom_raquo_airstream_ownership_ManualOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_ManualOwner, "com.raquo.airstream.ownership.ManualOwner", ({
  e0: 1,
  b1: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.nR = null;
  this.nQ = null;
  this.kq = false;
  this.nQ = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.kq = false;
}
$p = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $p;
$p.fK = (function() {
  return this.nR;
});
$p.m0 = (function(x$0) {
  this.nR = x$0;
});
$p.mE = (function(subscription) {
  if (this.kq) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.nQ.L();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.mt = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.kq = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  e1: 1,
  b1: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.ol = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$() {
}
$h_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype = $p;
$p.fK = (function() {
  return this.ol;
});
$p.m0 = (function(x$0) {
  this.ol = x$0;
});
$p.mt = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.mE = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
});
var $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$, "com.raquo.laminar.api.Laminar$unsafeWindowOwner$", ({
  ep: 1,
  b1: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$$anon$2(outer) {
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_Lcom_raquo_laminar_codecs_package$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$$anon$2() {
}
$h_Lcom_raquo_laminar_codecs_package$$anon$2.prototype = $p;
$p.im = (function(scalaValue) {
  return scalaValue;
});
$p.m3 = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  ev: 1,
  by: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
  this.pa = null;
  this.pc = null;
  this.pb = null;
  this.kC = null;
  this.pa = getRawDomValue;
  this.pc = setRawDomValue;
  this.pb = separator;
  this.kC = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator);
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
$p.ft = (function(items) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().p.t5(), $m_Lcom_raquo_laminar_keys_CompositeKey$().s5(items, this.pb)));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey, "com.raquo.laminar.keys.CompositeKey", ({
  eT: 1,
  af: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator) {
  this.kD = null;
  this.kD = separator;
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = $p;
$p.rr = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().s5(domValue, this.kD);
});
$p.rt = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.kD, "");
});
$p.m3 = (function(domValue) {
  return this.rr(domValue);
});
$p.im = (function(scalaValue) {
  return this.rt(scalaValue);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec, "com.raquo.laminar.keys.CompositeKey$CompositeCodec", ({
  eV: 1,
  by: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(outer) {
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$.prototype = $p;
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$, "com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringValueMapper$", ({
  eX: 1,
  eW: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProp(name) {
  this.hu = null;
  this.hu = name;
}
$p = $c_Lcom_raquo_laminar_keys_EventProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProp() {
}
$h_Lcom_raquo_laminar_keys_EventProp.prototype = $p;
var $d_Lcom_raquo_laminar_keys_EventProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProp, "com.raquo.laminar.keys.EventProp", ({
  f0: 1,
  af: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlAttr(name, codec) {
  this.hv = null;
  this.kE = null;
  this.hv = name;
  this.kE = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $p;
$p.gH = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().sn(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  f1: 1,
  af: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.dC = null;
  this.kF = null;
  this.dC = name;
  this.kF = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
$p.gH = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, prop, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().so(element, prop, value$2);
  })));
});
$p.gI = (function(values) {
  var update = ((this.dC === "value") ? new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, nextValue, reason) => {
    var nextDomValue = this.kF.im(nextValue);
    var x = $m_Lcom_raquo_laminar_DomApi$().uQ(element, this);
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().i(nextDomValue, x)))) {
      $m_Lcom_raquo_laminar_DomApi$().sp(element, this, nextDomValue);
    }
  })) : new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element$2, nextValue$2, reason$2) => {
    $m_Lcom_raquo_laminar_DomApi$().so(element$2, this, nextValue$2);
  })));
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.eS(), update);
});
function $isArrayOf_Lcom_raquo_laminar_keys_HtmlProp(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bD)));
}
var $d_Lcom_raquo_laminar_keys_HtmlProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlProp, "com.raquo.laminar.keys.HtmlProp", ({
  bD: 1,
  af: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr(localName, codec, namespacePrefix) {
  this.kH = null;
  this.kG = null;
  this.j0 = null;
  this.j1 = null;
  this.kH = localName;
  this.kG = codec;
  var this$1 = (namespacePrefix.c() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.E() + ":") + localName)));
  this.j0 = (this$1.c() ? localName : this$1.E());
  this.j1 = (namespacePrefix.c() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().vv(namespacePrefix.E())));
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $p;
var $d_Lcom_raquo_laminar_keys_SvgAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr, "com.raquo.laminar.keys.SvgAttr", ({
  f2: 1,
  af: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1() {
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$1() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype = $p;
$p.dw = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  fa: 1,
  Z: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2, outer) {
  this.pl = null;
  this.pl = f$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$2() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype = $p;
$p.dw = (function(element) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.pl.b(element);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bK || (!when))) {
    f();
  } else {
    this$2.bK = true;
    try {
      f();
    } finally {
      this$2.bK = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2, "com.raquo.laminar.modifiers.Modifier$$anon$2", ({
  fb: 1,
  Z: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1() {
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1, "com.raquo.laminar.modifiers.RenderableNode$$anon$1", ({
  fe: 1,
  fc: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$() {
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$, "com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$", ({
  fg: 1,
  ff: 1
}));
var $n_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$;
function $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$ = new $c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$();
  }
  return $n_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(render$2, outer) {
  this.pn = null;
  this.pn = render$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype = $p;
$p.tC = (function(value) {
  return this.pn.b(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  fj: 1,
  fh: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.rl(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().uf($thiz.aY(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.kS = null;
  this.kS = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.aQ = (function(modifiers) {
  var element = this.tG();
  modifiers.U(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((modifier) => {
    modifier.dw(element);
  })));
  return element;
});
$p.tG = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().ua(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  ft: 1,
  bH: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.pt = null;
  this.pt = name;
}
$p = $c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $p;
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  fu: 1,
  bH: 1
}));
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.j3) << 24) >> 24) === 0)) {
    $thiz.kT = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
    $thiz.j3 = (((32 | $thiz.j3) << 24) >> 24);
  }
  return $thiz.kT;
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.j3) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.kT);
}
/** @constructor */
function $c_jl_Character$() {
  this.kT = null;
  this.j3 = 0;
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.k7 = (function(codePoint) {
  if ((!((codePoint >= 0) && (codePoint <= 1114111)))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.ug = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))));
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0);
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0);
  } else {
    var p = $m_ju_Arrays$().tE($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this).a[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
$p.k8 = (function(ch) {
  return (65535 & this.wB(ch));
});
$p.wB = (function(codePoint) {
  switch (codePoint) {
    case 8115:
    case 8131:
    case 8179: {
      return ((9 + codePoint) | 0);
      break;
    }
    default: {
      if (((codePoint >= 8064) && (codePoint <= 8111))) {
        return (8 | codePoint);
      } else {
        var this$1 = this.k7(codePoint);
        var upperChars = this$1.toUpperCase();
        switch (upperChars.length) {
          case 1: {
            return upperChars.charCodeAt(0);
            break;
          }
          case 2: {
            var high = upperChars.charCodeAt(0);
            var low = upperChars.charCodeAt(1);
            return ((((-67044352) & ((high << 16) | low)) === (-671032320)) ? ((((64 + (1023 & high)) | 0) << 10) | (1023 & low)) : codePoint);
            break;
          }
          default: {
            return codePoint;
          }
        }
      }
    }
  }
});
$p.k6 = (function(ch) {
  return (65535 & this.wA(ch));
});
$p.wA = (function(codePoint) {
  if ((codePoint === 304)) {
    return 105;
  } else {
    var this$1 = this.k7(codePoint);
    var lowerChars = this$1.toLowerCase();
    switch (lowerChars.length) {
      case 1: {
        return lowerChars.charCodeAt(0);
        break;
      }
      case 2: {
        var high = lowerChars.charCodeAt(0);
        var low = lowerChars.charCodeAt(1);
        return ((((-67044352) & ((high << 16) | low)) === (-671032320)) ? ((((64 + (1023 & high)) | 0) << 10) | (1023 & low)) : codePoint);
        break;
      }
      default: {
        return codePoint;
      }
    }
  }
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  fD: 1,
  a: 1
}));
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$();
  }
  return $n_jl_Character$;
}
function $ps_jl_Integer$__fail$1__T__E(s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""));
}
/** @constructor */
function $c_jl_Integer$() {
}
$p = $c_jl_Integer$.prototype = new $h_O();
$p.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
}
$h_jl_Integer$.prototype = $p;
$p.mG = (function(s, radix) {
  var len = ((s === null) ? 0 : s.length);
  if ((((len === 0) || (radix < 2)) || (radix > 36))) {
    $ps_jl_Integer$__fail$1__T__E(s);
  }
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var maxAbsValue = (negative ? 2.147483648E9 : 2.147483647E9);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= s.length)) {
    $ps_jl_Integer$__fail$1__T__E(s);
  }
  var result = 0.0;
  while ((i !== len)) {
    var digit = $m_jl_Character$().ug(s.charCodeAt(i), radix);
    result = ((result * radix) + digit);
    if (((digit === (-1)) || (result > maxAbsValue))) {
      $ps_jl_Integer$__fail$1__T__E(s);
    }
    i = ((1 + i) | 0);
  }
  return (negative ? (((-result) | 0.0) | 0) : ((result | 0.0) | 0));
});
$p.bE = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  fH: 1,
  a: 1
}));
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$();
  }
  return $n_jl_Integer$;
}
/** @constructor */
function $c_jl_Long$() {
}
$p = $c_jl_Long$.prototype = new $h_O();
$p.constructor = $c_jl_Long$;
/** @constructor */
function $h_jl_Long$() {
}
$h_jl_Long$.prototype = $p;
$p.rZ = (function(lo, hi) {
  if ((hi !== 0)) {
    var $x_1 = (+(hi >>> 0.0)).toString(16);
    var s = (+(lo >>> 0.0)).toString(16);
    var beginIndex = s.length;
    return ($x_1 + (("" + "00000000".substring(beginIndex)) + s));
  } else {
    return (+(lo >>> 0.0)).toString(16);
  }
});
$p.vd = (function(lo, hi) {
  var lp = (1073741823 & lo);
  var mp = (1073741823 & ((((lo >>> 30) | 0) + (hi << 2)) | 0));
  var hp = ((hi >>> 28) | 0);
  if ((hp !== 0)) {
    var $x_2 = (+(hp >>> 0.0)).toString(8);
    var s = (+(mp >>> 0.0)).toString(8);
    var beginIndex = s.length;
    var $x_1 = "0000000000".substring(beginIndex);
    var s$1 = (+(lp >>> 0.0)).toString(8);
    var beginIndex$1 = s$1.length;
    return (($x_2 + (("" + $x_1) + s)) + (("" + "0000000000".substring(beginIndex$1)) + s$1));
  } else if ((mp !== 0)) {
    var $x_3 = (+(mp >>> 0.0)).toString(8);
    var s$2 = (+(lp >>> 0.0)).toString(8);
    var beginIndex$2 = s$2.length;
    return ($x_3 + (("" + "0000000000".substring(beginIndex$2)) + s$2));
  } else {
    return (+(lp >>> 0.0)).toString(8);
  }
});
var $d_jl_Long$ = new $TypeData().i($c_jl_Long$, "java.lang.Long$", ({
  fK: 1,
  a: 1
}));
var $n_jl_Long$;
function $m_jl_Long$() {
  if ((!$n_jl_Long$)) {
    $n_jl_Long$ = new $c_jl_Long$();
  }
  return $n_jl_Long$;
}
/** @constructor */
function $c_jl_Number() {
}
$p = $c_jl_Number.prototype = new $h_O();
$p.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $p;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
/** @constructor */
function $c_jl_StackTraceElement(declaringClass, methodName, fileName, lineNumber, columnNumber) {
  this.fZ = null;
  this.hy = null;
  this.g0 = null;
  this.g1 = 0;
  this.fY = 0;
  this.fZ = declaringClass;
  this.hy = methodName;
  this.g0 = fileName;
  this.g1 = lineNumber;
  this.fY = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.k = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.g0 === that.g0) && (this.g1 === that.g1)) && (this.fY === that.fY)) && (this.fZ === that.fZ)) && (this.hy === that.hy)));
});
$p.v = (function() {
  var result = "";
  if ((this.fZ !== "<jscode>")) {
    result = ((("" + result) + this.fZ) + ".");
  }
  result = (("" + result) + this.hy);
  if ((this.g0 === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.g0);
    if ((this.g1 >= 0)) {
      result = ((result + ":") + this.g1);
      if ((this.fY >= 0)) {
        result = ((result + ":") + this.fY);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.u = (function() {
  return (((($f_T__hashCode__I(this.fZ) ^ $f_T__hashCode__I(this.hy)) ^ $f_T__hashCode__I(this.g0)) ^ this.g1) ^ this.fY);
});
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bS)));
}
var $d_jl_StackTraceElement = new $TypeData().i($c_jl_StackTraceElement, "java.lang.StackTraceElement", ({
  bS: 1,
  a: 1
}));
/** @constructor */
function $c_jl_String$() {
}
$p = $c_jl_String$.prototype = new $h_O();
$p.constructor = $c_jl_String$;
/** @constructor */
function $h_jl_String$() {
}
$h_jl_String$.prototype = $p;
$p.vw = (function(value, offset, count) {
  var end = ((offset + count) | 0);
  if ((((offset < 0) || (end < offset)) || (end > value.a.length))) {
    throw $ct_jl_StringIndexOutOfBoundsException__(new $c_jl_StringIndexOutOfBoundsException());
  }
  var result = "";
  var i = offset;
  while ((i !== end)) {
    result = (result + ("" + $cToS(value.a[i])));
    i = ((1 + i) | 0);
  }
  return result;
});
$p.uC = (function(format, args) {
  return $ct_ju_Formatter__(new $c_ju_Formatter()).uD(format, args).v();
});
var $d_jl_String$ = new $TypeData().i($c_jl_String$, "java.lang.String$", ({
  fS: 1,
  a: 1
}));
var $n_jl_String$;
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$();
  }
  return $n_jl_String$;
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.py = s;
  $thiz.pz = writableStackTrace;
  if (writableStackTrace) {
    $thiz.uw();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.py = null;
    this.pz = false;
    this.px = null;
    this.j4 = null;
  }
  jS(cause) {
    return this;
  }
  c0() {
    return this.py;
  }
  uw() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.ak : this);
    this.px = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  uS() {
    if ((this.j4 === null)) {
      if (this.pz) {
        this.j4 = $m_jl_StackTrace$().uu(this.px);
      } else {
        this.j4 = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.j4;
  }
  v() {
    var className = $objectClassName(this);
    var message = this.c0();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  u() {
    return $c_O.prototype.u.call(this);
  }
  k(that) {
    return $c_O.prototype.k.call(this, that);
  }
  get "message"() {
    var m = this.c0();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.v();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.r)));
}
/** @constructor */
function $c_ju_Formatter$RootLocaleInfo$() {
}
$p = $c_ju_Formatter$RootLocaleInfo$.prototype = new $h_ju_Formatter$LocaleInfo();
$p.constructor = $c_ju_Formatter$RootLocaleInfo$;
/** @constructor */
function $h_ju_Formatter$RootLocaleInfo$() {
}
$h_ju_Formatter$RootLocaleInfo$.prototype = $p;
var $d_ju_Formatter$RootLocaleInfo$ = new $TypeData().i($c_ju_Formatter$RootLocaleInfo$, "java.util.Formatter$RootLocaleInfo$", ({
  gc: 1,
  gb: 1
}));
var $n_ju_Formatter$RootLocaleInfo$;
function $m_ju_Formatter$RootLocaleInfo$() {
  if ((!$n_ju_Formatter$RootLocaleInfo$)) {
    $n_ju_Formatter$RootLocaleInfo$ = new $c_ju_Formatter$RootLocaleInfo$();
  }
  return $n_ju_Formatter$RootLocaleInfo$;
}
/** @constructor */
function $c_s_$less$colon$less$() {
  this.cX = null;
  $n_s_$less$colon$less$ = this;
  this.cX = new $c_s_$less$colon$less$$anon$1();
}
$p = $c_s_$less$colon$less$.prototype = new $h_O();
$p.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
}
$h_s_$less$colon$less$.prototype = $p;
var $d_s_$less$colon$less$ = new $TypeData().i($c_s_$less$colon$less$, "scala.$less$colon$less$", ({
  gr: 1,
  a: 1
}));
var $n_s_$less$colon$less$;
function $m_s_$less$colon$less$() {
  if ((!$n_s_$less$colon$less$)) {
    $n_s_$less$colon$less$ = new $c_s_$less$colon$less$();
  }
  return $n_s_$less$colon$less$;
}
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().d5(dest, j, $m_sr_ScalaRunTime$().e6(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
function $p_s_Array$__newUnitArray__I__Ajl_Void($thiz, len) {
  var result = new ($d_jl_Void.r().C)(len);
  $m_ju_Arrays$().uv(result, (void 0));
  return result;
}
/** @constructor */
function $c_s_Array$() {
}
$p = $c_s_Array$.prototype = new $h_O();
$p.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $p;
$p.rF = (function(it, evidence$3) {
  var n = it.q();
  if ((n > (-1))) {
    var elements = evidence$3.c1(n);
    var iterator = it.e();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().d5(elements, i, iterator.d());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$3.bl();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.e();
    while (iterator$2.l()) {
      var elem = iterator$2.d();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.F.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.F.r().w(jsElems);
  }
});
$p.ci = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.F.Z && $objectGetClass(dest).F.R(srcClass.F))) {
    src.r(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.eO = (function(original, newLength) {
  if ($isArrayOf_jl_Void(original, 1)) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  } else if ((original instanceof $ac_O)) {
    return $m_ju_Arrays$().ab(original, newLength);
  } else if ((original instanceof $ac_I)) {
    return $m_ju_Arrays$().u4(original, newLength);
  } else if ((original instanceof $ac_D)) {
    return $m_ju_Arrays$().u2(original, newLength);
  } else if ((original instanceof $ac_J)) {
    return $m_ju_Arrays$().u5(original, newLength);
  } else if ((original instanceof $ac_F)) {
    return $m_ju_Arrays$().u3(original, newLength);
  } else if ((original instanceof $ac_C)) {
    return $m_ju_Arrays$().u1(original, newLength);
  } else if ((original instanceof $ac_B)) {
    return $m_ju_Arrays$().u0(original, newLength);
  } else if ((original instanceof $ac_S)) {
    return $m_ju_Arrays$().u6(original, newLength);
  } else if ((original instanceof $ac_Z)) {
    return $m_ju_Arrays$().u7(original, newLength);
  } else {
    throw new $c_s_MatchError(original);
  }
});
$p.rB = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.a.length !== ys.a.length)) {
    return false;
  }
  var len = xs.a.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().i(xs.a[i], ys.a[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  gt: 1,
  a: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
/** @constructor */
function $c_s_LowPriorityImplicits() {
}
$p = $c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$p.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
}
$h_s_LowPriorityImplicits.prototype = $p;
$p.wL = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $m_scm_ArraySeq$().lC : new $c_scm_ArraySeq$ofRef(xs)));
});
$p.sB = (function(s) {
  return ((s !== null) ? new $c_sci_WrappedString(s) : null);
});
/** @constructor */
function $c_s_Option$() {
}
$p = $c_s_Option$.prototype = new $h_O();
$p.constructor = $c_s_Option$;
/** @constructor */
function $h_s_Option$() {
}
$h_s_Option$.prototype = $p;
$p.jY = (function(xo) {
  return (xo.c() ? $m_sc_Iterable$().bO() : new $c_sc_Iterable$$anon$1(xo.E()));
});
$p.lV = (function(x) {
  return ((x === null) ? $m_s_None$() : new $c_s_Some(x));
});
var $d_s_Option$ = new $TypeData().i($c_s_Option$, "scala.Option$", ({
  gB: 1,
  a: 1
}));
var $n_s_Option$;
function $m_s_Option$() {
  if ((!$n_s_Option$)) {
    $n_s_Option$ = new $c_s_Option$();
  }
  return $n_s_Option$;
}
function $f_s_PartialFunction__applyOrElse__O__F1__O($thiz, x, default$1) {
  return ($thiz.cj(x) ? $thiz.b(x) : default$1.b(x));
}
/** @constructor */
function $c_sci_MapNode() {
}
$p = $c_sci_MapNode.prototype = new $h_sci_Node();
$p.constructor = $c_sci_MapNode;
/** @constructor */
function $h_sci_MapNode() {
}
$h_sci_MapNode.prototype = $p;
/** @constructor */
function $c_sci_SetNode() {
}
$p = $c_sci_SetNode.prototype = new $h_sci_Node();
$p.constructor = $c_sci_SetNode;
/** @constructor */
function $h_sci_SetNode() {
}
$h_sci_SetNode.prototype = $p;
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, elems) {
  if ((elems === $thiz)) {
    $thiz.b7($m_scm_Buffer$().jN(elems));
  } else {
    var it = elems.e();
    while (it.l()) {
      $thiz.as(it.d());
    }
  }
  return $thiz;
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.sR = null;
  this.t0 = null;
  this.sS = null;
  this.sV = null;
  this.sW = null;
  this.sU = null;
  this.sT = null;
  this.sQ = null;
  this.t1 = null;
  this.sO = null;
  this.sZ = null;
  this.sP = null;
  this.sX = null;
  this.sY = null;
  $n_s_reflect_ClassTag$ = this;
  this.sR = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.t0 = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.sS = $m_s_reflect_ManifestFactory$CharManifest$();
  this.sV = $m_s_reflect_ManifestFactory$IntManifest$();
  this.sW = $m_s_reflect_ManifestFactory$LongManifest$();
  this.sU = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.sT = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.sQ = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.t1 = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.sO = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.sZ = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.sP = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.sX = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.sY = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.r5 = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  j4: 1,
  a: 1
}));
var $n_s_reflect_ClassTag$;
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$();
  }
  return $n_s_reflect_ClassTag$;
}
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.v = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.v = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction2() {
}
$p = $c_sr_AbstractFunction2.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
}
$h_sr_AbstractFunction2.prototype = $p;
$p.v = (function() {
  return "<function2>";
});
/** @constructor */
function $c_sr_AbstractFunction3() {
}
$p = $c_sr_AbstractFunction3.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction3;
/** @constructor */
function $h_sr_AbstractFunction3() {
}
$h_sr_AbstractFunction3.prototype = $p;
$p.v = (function() {
  return "<function3>";
});
/** @constructor */
function $c_sr_AbstractFunction4() {
}
$p = $c_sr_AbstractFunction4.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction4;
/** @constructor */
function $h_sr_AbstractFunction4() {
}
$h_sr_AbstractFunction4.prototype = $p;
$p.v = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.jk = false;
  this.jk = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.v = (function() {
  return ("" + this.jk);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  jy: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.b4 = 0;
  this.b4 = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.v = (function() {
  return ("" + this.b4);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  jB: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyBoolean() {
  this.jl = false;
  this.jm = false;
}
$p = $c_sr_LazyBoolean.prototype = new $h_O();
$p.constructor = $c_sr_LazyBoolean;
/** @constructor */
function $h_sr_LazyBoolean() {
}
$h_sr_LazyBoolean.prototype = $p;
$p.v2 = (function(value) {
  this.jm = value;
  this.jl = true;
  return value;
});
$p.v = (function() {
  return ("LazyBoolean " + (this.jl ? ("of: " + this.jm) : "thunk"));
});
var $d_sr_LazyBoolean = new $TypeData().i($c_sr_LazyBoolean, "scala.runtime.LazyBoolean", ({
  jC: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyRef() {
  this.jn = false;
  this.jo = null;
}
$p = $c_sr_LazyRef.prototype = new $h_O();
$p.constructor = $c_sr_LazyRef;
/** @constructor */
function $h_sr_LazyRef() {
}
$h_sr_LazyRef.prototype = $p;
$p.v3 = (function(value) {
  this.jo = value;
  this.jn = true;
  return value;
});
$p.v = (function() {
  return ("LazyRef " + (this.jn ? ("of: " + this.jo) : "thunk"));
});
var $d_sr_LazyRef = new $TypeData().i($c_sr_LazyRef, "scala.runtime.LazyRef", ({
  jD: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.K = null;
  this.K = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.v = (function() {
  return ("" + this.K);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  jG: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.b5 = 0;
  this.eL = 0;
  this.jq = 0;
  this.lI = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.b5 = $f_T__hashCode__I("Seq");
  this.eL = $f_T__hashCode__I("Map");
  this.jq = $f_T__hashCode__I("Set");
  this.lI = this.iH($m_sci_Nil$(), this.eL);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.di = (function(x, y) {
  return this.sw($m_sr_Statics$().R(x), $m_sr_Statics$().R(y), (-889275714));
});
$p.sl = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.v1(xs, this.b5) : ((xs instanceof $c_sci_List) ? this.vi(xs, this.b5) : this.vN(xs, this.b5)));
});
$p.vp = (function(xs) {
  if (xs.c()) {
    return this.lI;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.eL;
    xs.fz(accum);
    h = this.j(h, accum.jr);
    h = this.j(h, accum.js);
    h = this.ed(h, accum.jt);
    return this.H(h, accum.ju);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  k7: 1,
  k6: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$accum$1() {
  this.jr = 0;
  this.js = 0;
  this.ju = 0;
  this.jt = 0;
  this.jr = 0;
  this.js = 0;
  this.ju = 0;
  this.jt = 1;
}
$p = $c_s_util_hashing_MurmurHash3$accum$1.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3$accum$1;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$accum$1() {
}
$h_s_util_hashing_MurmurHash3$accum$1.prototype = $p;
$p.v = (function() {
  return "<function2>";
});
$p.tx = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().di(k, v);
  this.jr = ((this.jr + h) | 0);
  this.js = (this.js ^ h);
  this.jt = Math.imul(this.jt, (1 | h));
  this.ju = ((1 + this.ju) | 0);
});
$p.bd = (function(v1, v2) {
  this.tx(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  k8: 1,
  b9: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError extends $c_jl_Throwable {
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_AirstreamError$() {
  this.ke = null;
  this.n7 = null;
  this.n8 = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.ke = $m_scm_Buffer$().r7($m_sr_ScalaRunTime$().A(new ($d_F1.r().C)([])));
  this.n7 = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    try {
      console.error(((this.eQ(err) + "\n") + this.uR(err, "\n")));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error("Error in AirstreamError.consoleErrorCallback:");
      console.error(e$2);
    }
  }));
  this.n8 = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => {
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    var $x_1 = err$2;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.ak : $x_1);
  }));
  this.vS(this.n7);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.eQ = (function(e) {
  try {
    var errorMessage = e.c0();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).mi() + ": ") + errorMessage);
});
$p.uR = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().wL(err.uS()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.tO = (function(message, cause) {
  return ((message + "; cause: ") + (cause.c() ? $m_s_None$() : new $c_s_Some(this.eQ(cause.E()))));
});
$p.tN = (function(causes) {
  return ("CombinedError: " + $f_sc_IterableOnceOps__mkString__T__T__T__T(causes.eP($m_s_$less$colon$less$().cX).M(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e) => this.eQ(e)))), "", "; ", ""));
});
$p.vS = (function(fn) {
  this.ke.as(fn);
});
$p.cV = (function(err) {
  var this$1 = this.ke;
  var it = this$1.e();
  while (it.l()) {
    var x0 = it.d();
    try {
      x0.b(err);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = this.n8;
      if (((x0 === null) ? (x$2 === null) : x0.k(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().wn(0.0, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((e$2) => (() => {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
      }))(e$2)));
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$, "com.raquo.airstream.core.AirstreamError$", ({
  dC: 1,
  aI: 1,
  da: 1
}));
var $n_Lcom_raquo_airstream_core_AirstreamError$;
function $m_Lcom_raquo_airstream_core_AirstreamError$() {
  if ((!$n_Lcom_raquo_airstream_core_AirstreamError$)) {
    $n_Lcom_raquo_airstream_core_AirstreamError$ = new $c_Lcom_raquo_airstream_core_AirstreamError$();
  }
  return $n_Lcom_raquo_airstream_core_AirstreamError$;
}
function $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V($thiz) {
  $thiz.cS(true);
  $thiz.fF((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().mW(onNext, $m_s_PartialFunction$().j6, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.fD()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.fD()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz) {
  return ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) > 0);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz) {
  var x = $thiz.ec();
  if ((x === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().A(new ($d_F0.r().C)([])));
    $thiz.fF(newArray);
    return newArray;
  } else {
    return x;
  }
}
var $d_Lcom_raquo_airstream_core_Observer = new $TypeData().i(1, "com.raquo.airstream.core.Observer", ({
  aX: 1,
  aK: 1,
  Y: 1
}));
function $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($thiz, value, r) {
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.tC(value));
}
function $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($thiz, nodes, renderableSeq) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    ($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(nodes, null, null)).U(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((_$9) => {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().gM(element$2, _$9, (void 0));
    }))(element)));
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$1() {
  this.oh = null;
  this.oi = false;
}
$p = $c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$1() {
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = $p;
$p.vL = (function() {
  if ((!this.oi)) {
    this.oh = new $c_Lcom_raquo_laminar_keys_EventProp("DOMContentLoaded");
    this.oi = true;
  }
  return this.oh;
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$$anon$1, "com.raquo.laminar.api.Laminar$$anon$1", ({
  en: 1,
  bz: 1,
  eA: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(key, itemsToAdd) {
  this.pe = null;
  this.kJ = null;
  this.pe = key;
  this.kJ = itemsToAdd;
}
$p = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_CompositeKeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = $p;
$p.dw = (function(element) {
  if ((!this.kJ.c())) {
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this.pe, null, this.kJ, $m_sci_Nil$());
  }
});
var $d_Lcom_raquo_laminar_modifiers_CompositeKeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_CompositeKeySetter, "com.raquo.laminar.modifiers.CompositeKeySetter", ({
  f5: 1,
  Z: 1,
  bF: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.fW = null;
  this.kK = null;
  this.kL = null;
  this.fW = eventProcessor;
  this.kK = ((ev) => {
    var processor = eventProcessor.hs;
    var this$2 = processor.b(ev);
    if ((!this$2.c())) {
      callback.b(this$2.E());
    }
  });
  this.kL = (() => {
    var outer = null;
    outer = this;
    var this$3 = ({});
    if ((outer === null)) {
      throw new $c_jl_NullPointerException();
    }
    this$3.capture = outer.fW.ht;
    this$3.passive = outer.fW.iZ;
    return this$3;
  })();
}
$p = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $p;
$p.dw = (function(element) {
  this.tF(element, false);
});
$p.tF = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().td(element.bG, this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.kI, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().vV(element.bG, this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().wD(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iI(element.cW, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().ss(element.cW, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner$1) => {
      activate.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.v = (function() {
  return (("EventListener(" + this.fW.eZ.hu) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  f6: 1,
  Z: 1,
  bE: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeySetter(key, value, action) {
  this.pg = null;
  this.ph = null;
  this.pf = null;
  this.pg = key;
  this.ph = value;
  this.pf = action;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_KeySetter.prototype = $p;
$p.dw = (function(element) {
  this.pf.lT(element, this.pg, this.ph);
});
var $d_Lcom_raquo_laminar_modifiers_KeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeySetter, "com.raquo.laminar.modifiers.KeySetter", ({
  f7: 1,
  Z: 1,
  bF: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeyUpdater(key, values, update) {
  this.pi = null;
  this.pk = null;
  this.pj = null;
  this.pi = key;
  this.pk = values;
  this.pj = update;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeyUpdater;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeyUpdater() {
}
$h_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = $p;
$p.dw = (function(element) {
  this.lY(element);
});
$p.lY = (function(element) {
  element.vJ(this.pi);
  var observable = this.pk;
  var onNext = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    this.pj.lT(element, value, this);
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().wp(element.cW, observable, onNext);
});
var $d_Lcom_raquo_laminar_modifiers_KeyUpdater = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeyUpdater, "com.raquo.laminar.modifiers.KeyUpdater", ({
  f8: 1,
  Z: 1,
  bE: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.kQ = null;
  this.pq = null;
  this.pr = null;
  this.pq = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().vc(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.pr = container;
  this.vu();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.jK = (function() {
  return this.kQ;
});
$p.rl = (function(x$0) {
  this.kQ = x$0;
});
$p.vu = (function() {
  this.kQ.qV();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().gM(this, this.pq, (void 0));
});
$p.aY = (function() {
  return this.pr;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  fp: 1,
  aL: 1,
  bG: 1
}));
function $isArrayOf_Lcom_raquo_laminar_tags_CustomHtmlTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fs)));
}
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.F.Z) {
    return ($thiz.F.Q().mi() + "[]");
  } else {
    var name = $thiz.F.N;
    var idx = (((-1) + name.length) | 0);
    while (((idx >= 0) && (name.charCodeAt(idx) === 36))) {
      idx = (((-1) + idx) | 0);
    }
    if ((idx >= 0)) {
      var index$1 = idx;
      var c = name.charCodeAt(index$1);
      var $x_1 = ((c >= 48) && (c <= 57));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      idx = (((-1) + idx) | 0);
      while (true) {
        if ((idx >= 0)) {
          var index$2 = idx;
          var c$1 = name.charCodeAt(index$2);
          var $x_2 = ((c$1 >= 48) && (c$1 <= 57));
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          idx = (((-1) + idx) | 0);
        } else {
          break;
        }
      }
      while (((idx >= 0) && (name.charCodeAt(idx) === 36))) {
        idx = (((-1) + idx) | 0);
      }
    }
    while (true) {
      if ((idx >= 0)) {
        var index$4 = idx;
        var currChar = name.charCodeAt(index$4);
        var $x_3 = ((currChar !== 46) && (currChar !== 36));
      } else {
        var $x_3 = false;
      }
      if ($x_3) {
        idx = (((-1) + idx) | 0);
      } else {
        break;
      }
    }
    var beginIndex = ((1 + idx) | 0);
    return name.substring(beginIndex);
  }
}
/** @constructor */
function $c_jl_Class($data) {
  this.kU = null;
  this.F = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.v = (function() {
  return ((this.F.Y ? "interface " : (this.F.X ? "" : "class ")) + this.F.N);
});
$p.mi = (function() {
  if ((this.kU === null)) {
    this.kU = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.kU;
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  fE: 1,
  a: 1,
  a5: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
function $ct_jl_Exception__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_Exception extends $c_jl_Throwable {
}
var $d_jl_Exception = new $TypeData().i($c_jl_Exception, "java.lang.Exception", ({
  v: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_s_$less$colon$less() {
}
$p = $c_s_$less$colon$less.prototype = new $h_O();
$p.constructor = $c_s_$less$colon$less;
/** @constructor */
function $h_s_$less$colon$less() {
}
$h_s_$less$colon$less.prototype = $p;
/** @constructor */
function $c_s_Predef$() {
  this.sN = null;
  $n_s_Predef$ = this;
  this.sN = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.sf = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  gE: 1,
  gx: 1,
  gy: 1
}));
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$();
  }
  return $n_s_Predef$;
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.bc();
      break;
    }
    case 1: {
      return $thiz.b6();
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $f_s_Product3__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.g2;
      break;
    }
    case 1: {
      return $thiz.g3;
      break;
    }
    case 2: {
      return $thiz.g4;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $f_s_Product4__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.g5;
      break;
    }
    case 1: {
      return $thiz.g6;
      break;
    }
    case 2: {
      return $thiz.g7;
      break;
    }
    case 3: {
      return $thiz.g8;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 3)"));
    }
  }
}
function $f_s_Product5__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.g9;
      break;
    }
    case 1: {
      return $thiz.ga;
      break;
    }
    case 2: {
      return $thiz.gb;
      break;
    }
    case 3: {
      return $thiz.gc;
      break;
    }
    case 4: {
      return $thiz.gd;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 4)"));
    }
  }
}
function $f_s_Product6__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.ge;
      break;
    }
    case 1: {
      return $thiz.gf;
      break;
    }
    case 2: {
      return $thiz.gg;
      break;
    }
    case 3: {
      return $thiz.gh;
      break;
    }
    case 4: {
      return $thiz.gi;
      break;
    }
    case 5: {
      return $thiz.gj;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 5)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.gk = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.gk = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.bO = (function() {
  return this.gk.rs($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.am = (function(it) {
  return this.gk.mb(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.at = (function() {
  return this.gk.jW($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.e5 = (function(elems) {
  return this.gk.mb(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.gm = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.gm = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.bO = (function() {
  return this.gm.bO();
});
$p.am = (function(it) {
  return this.gm.am(it);
});
$p.at = (function() {
  return this.gm.at();
});
/** @constructor */
function $c_sc_IterableOnceOps$$anon$1(outer) {
}
$p = $c_sc_IterableOnceOps$$anon$1.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sc_IterableOnceOps$$anon$1;
/** @constructor */
function $h_sc_IterableOnceOps$$anon$1() {
}
$h_sc_IterableOnceOps$$anon$1.prototype = $p;
$p.b = (function(v1) {
  return this;
});
var $d_sc_IterableOnceOps$$anon$1 = new $TypeData().i($c_sc_IterableOnceOps$$anon$1, "scala.collection.IterableOnceOps$$anon$1", ({
  h3: 1,
  bm: 1,
  i: 1
}));
function $f_sc_IterableOps__headOption__s_Option($thiz) {
  var it = $thiz.e();
  return (it.l() ? new $c_s_Some(it.d()) : $m_s_None$());
}
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.q();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1));
    } else {
      var i = 0;
      var it = $thiz.e();
      while (it.l()) {
        if ((i === otherSize)) {
          return 1;
        }
        it.d();
        i = ((1 + i) | 0);
      }
      return ((i - otherSize) | 0);
    }
  }
}
function $f_sc_IterableOps__map__F1__O($thiz, f) {
  return $thiz.aE().am($ct_sc_View$Map__sc_IterableOps__F1__(new $c_sc_View$Map(), $thiz, f));
}
function $f_sc_IterableOps__flatMap__F1__O($thiz, f) {
  return $thiz.aE().am(new $c_sc_View$FlatMap($thiz, f));
}
function $f_sc_IterableOps__concat__sc_IterableOnce__O($thiz, suffix) {
  return $thiz.aE().am(($is_sc_Iterable(suffix) ? new $c_sc_View$Concat($thiz, suffix) : $thiz.e().gS(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => suffix.e())))));
}
function $f_sc_Iterator__indexWhere__F1__I__I($thiz, p, from) {
  var i = ((from > 0) ? from : 0);
  var dropped = $thiz.d9(from);
  while (dropped.l()) {
    if ((!(!p.b(dropped.d())))) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).gS(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().D : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.e();
  while (($thiz.l() && those.l())) {
    if ((!$m_sr_BoxesRunTime$().i($thiz.d(), those.d()))) {
      return false;
    }
  }
  return ($thiz.l() === those.l());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.D = null;
  $n_sc_Iterator$ = this;
  this.D = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
$p.at = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$p.bO = (function() {
  return this.D;
});
$p.am = (function(source) {
  return source.e();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  h4: 1,
  H: 1,
  a: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $ct_sc_MapFactory$Delegate__sc_MapFactory__($thiz, delegate) {
  $thiz.li = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.li = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.am = (function(it) {
  return this.li.am(it);
});
/** @constructor */
function $c_sc_View$() {
}
$p = $c_sc_View$.prototype = new $h_O();
$p.constructor = $c_sc_View$;
/** @constructor */
function $h_sc_View$() {
}
$h_sc_View$.prototype = $p;
$p.rG = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((x3) => (() => x3.e()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().jO(it))));
});
$p.at = (function() {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((it$2$2) => $m_sc_View$().rG(it$2$2))));
});
$p.bO = (function() {
  return $m_sc_View$Empty$();
});
$p.am = (function(source) {
  return this.rG(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  hl: 1,
  H: 1,
  a: 1
}));
var $n_sc_View$;
function $m_sc_View$() {
  if ((!$n_sc_View$)) {
    $n_sc_View$ = new $c_sc_View$();
  }
  return $n_sc_View$;
}
/** @constructor */
function $c_sci_BitmapIndexedMapNode(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
  this.ac = 0;
  this.aF = 0;
  this.b9 = null;
  this.ca = null;
  this.bn = 0;
  this.c2 = 0;
  this.ac = dataMap;
  this.aF = nodeMap;
  this.b9 = content;
  this.ca = originalHashes;
  this.bn = size;
  this.c2 = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $p;
$p.O = (function() {
  return this.bn;
});
$p.bN = (function() {
  return this.c2;
});
$p.dy = (function(index) {
  return this.b9.a[(index << 1)];
});
$p.dz = (function(index) {
  return this.b9.a[((1 + (index << 1)) | 0)];
});
$p.mg = (function(index) {
  return new $c_T2(this.b9.a[(index << 1)], this.b9.a[((1 + (index << 1)) | 0)]);
});
$p.cF = (function(index) {
  return this.ca.a[index];
});
$p.db = (function(index) {
  return this.b9.a[(((((-1) + this.b9.a.length) | 0) - index) | 0)];
});
$p.lS = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().cH(keyHash, shift);
  var bitpos = $m_sci_Node$().bY(mask);
  if (((this.ac & bitpos) !== 0)) {
    var index = $m_sci_Node$().bJ(this.ac, mask, bitpos);
    if ($m_sr_BoxesRunTime$().i(key, this.dy(index))) {
      return this.dz(index);
    } else {
      throw new $c_ju_NoSuchElementException(("key not found: " + key));
    }
  } else if (((this.aF & bitpos) !== 0)) {
    return this.db($m_sci_Node$().bJ(this.aF, mask, bitpos)).lS(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.jP = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().cH(keyHash, shift);
  var bitpos = $m_sci_Node$().bY(mask);
  if (((this.ac & bitpos) !== 0)) {
    var index = $m_sci_Node$().bJ(this.ac, mask, bitpos);
    return ($m_sr_BoxesRunTime$().i(key, this.dy(index)) ? new $c_s_Some(this.dz(index)) : $m_s_None$());
  } else {
    return (((this.aF & bitpos) !== 0) ? this.db($m_sci_Node$().bJ(this.aF, mask, bitpos)).jP(key, originalHash, keyHash, ((5 + shift) | 0)) : $m_s_None$());
  }
});
$p.mf = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().cH(keyHash, shift);
  var bitpos = $m_sci_Node$().bY(mask);
  if (((this.ac & bitpos) !== 0)) {
    var index = $m_sci_Node$().bJ(this.ac, mask, bitpos);
    return ($m_sr_BoxesRunTime$().i(key, this.dy(index)) ? this.dz(index) : f.L());
  } else {
    return (((this.aF & bitpos) !== 0) ? this.db($m_sci_Node$().bJ(this.aF, mask, bitpos)).mf(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.L());
  }
});
$p.m2 = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().cH(keyHash, shift);
  var bitpos = $m_sci_Node$().bY(mask);
  if (((this.ac & bitpos) !== 0)) {
    var index = $m_sci_Node$().bJ(this.ac, mask, bitpos);
    return ((this.ca.a[index] === originalHash) && $m_sr_BoxesRunTime$().i(key, this.dy(index)));
  } else {
    return (((this.aF & bitpos) !== 0) && this.db($m_sci_Node$().bJ(this.aF, mask, bitpos)).m2(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.mU = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().cH(keyHash, shift);
  var bitpos = $m_sci_Node$().bY(mask);
  if (((this.ac & bitpos) !== 0)) {
    var index = $m_sci_Node$().bJ(this.ac, mask, bitpos);
    var key0 = this.dy(index);
    var key0UnimprovedHash = this.cF(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().i(key0, key))) {
      if (replaceValue) {
        var value0 = this.dz(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.tZ(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.dz(index);
      var key0Hash = $m_sc_Hashing$().bs(key0UnimprovedHash);
      return this.tV(bitpos, key0Hash, this.mz(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.aF & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().bJ(this.aF, mask, bitpos);
    var subNode = this.db(index$2);
    var subNodeNew$2 = subNode.sz(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.tX(bitpos, subNode, subNodeNew$2));
  } else {
    return this.tT(bitpos, key, originalHash, keyHash, value);
  }
});
$p.mz = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().bF($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [new $c_T2(key0, value0), new $c_T2(key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().cH(keyHash0, shift);
    var mask1 = $m_sci_Node$().cH(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().bY(mask0) | $m_sci_Node$().bY(mask1));
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key0, value0, key1, value1]), new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash) : new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key1, value1, key0, value0]), new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash));
    } else {
      var nodeMap = $m_sci_Node$().bY(mask0);
      var node = this.mz(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().hz, node.O(), node.bN());
    }
  }
});
$p.ip = (function() {
  return (this.aF !== 0);
});
$p.iv = (function() {
  return $m_jl_Integer$().bE(this.aF);
});
$p.gZ = (function() {
  return (this.ac !== 0);
});
$p.iz = (function() {
  return $m_jl_Integer$().bE(this.ac);
});
$p.d6 = (function(bitpos) {
  return $m_jl_Integer$().bE((this.ac & (((-1) + bitpos) | 0)));
});
$p.fG = (function(bitpos) {
  return $m_jl_Integer$().bE((this.aF & (((-1) + bitpos) | 0)));
});
$p.tZ = (function(bitpos, newKey, newValue) {
  var dataIx = this.d6(bitpos);
  var idx = (dataIx << 1);
  var src = this.b9;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.r(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.ac, this.aF, dst, this.ca, this.bn, this.c2);
});
$p.tX = (function(bitpos, oldNode, newNode) {
  var idx = (((((-1) + this.b9.a.length) | 0) - this.fG(bitpos)) | 0);
  var src = this.b9;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.r(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.ac, this.aF, dst, this.ca, ((((this.bn - oldNode.O()) | 0) + newNode.O()) | 0), ((((this.c2 - oldNode.bN()) | 0) + newNode.bN()) | 0));
});
$p.tT = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.d6(bitpos);
  var idx = (dataIx << 1);
  var src = this.b9;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.r(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.r(idx, dst, destPos, length);
  var dstHashes = this.rV(this.ca, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.ac | bitpos), this.aF, dst, dstHashes, ((1 + this.bn) | 0), ((this.c2 + keyHash) | 0));
});
$p.vs = (function(bitpos, keyHash, node) {
  var dataIx = this.d6(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.b9.a.length) | 0) - this.fG(bitpos)) | 0);
  var src = this.b9;
  var dst = new $ac_O((((-1) + src.a.length) | 0));
  src.r(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.r(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.a.length - idxNew) | 0)) | 0);
  src.r(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.jZ(this.ca, dataIx);
  this.ac = (this.ac ^ bitpos);
  this.aF = (this.aF | bitpos);
  this.b9 = dst;
  this.ca = dstHashes;
  this.bn = (((((-1) + this.bn) | 0) + node.O()) | 0);
  this.c2 = ((((this.c2 - keyHash) | 0) + node.bN()) | 0);
  return this;
});
$p.tV = (function(bitpos, keyHash, node) {
  var dataIx = this.d6(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.b9.a.length) | 0) - this.fG(bitpos)) | 0);
  var src = this.b9;
  var dst = new $ac_O((((-1) + src.a.length) | 0));
  src.r(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.r(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.a.length - idxNew) | 0)) | 0);
  src.r(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.jZ(this.ca, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.ac ^ bitpos), (this.aF | bitpos), dst, dstHashes, (((((-1) + this.bn) | 0) + node.O()) | 0), ((((this.c2 - keyHash) | 0) + node.bN()) | 0));
});
$p.U = (function(f) {
  var iN = $m_jl_Integer$().bE(this.ac);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.b(this.mg(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().bE(this.aF);
  var j = 0;
  while ((j < jN)) {
    this.db(j).U(f);
    j = ((1 + j) | 0);
  }
});
$p.fz = (function(f) {
  var iN = $m_jl_Integer$().bE(this.ac);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.bd(this.dy(i$1), this.dz(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().bE(this.aF);
  var j = 0;
  while ((j < jN)) {
    this.db(j).fz(f);
    j = ((1 + j) | 0);
  }
});
$p.k = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.c2 === that.c2) && (this.aF === that.aF)) && (this.ac === that.ac)) && (this.bn === that.bn)) && $m_ju_Arrays$().jL(this.ca, that.ca))) {
      var a1 = this.b9;
      var a2 = that.b9;
      var length = this.b9.a.length;
      if ((a1 === a2)) {
        return true;
      } else {
        var isEqual = true;
        var i = 0;
        while ((isEqual && (i < length))) {
          isEqual = $m_sr_BoxesRunTime$().i(a1.a[i], a2.a[i]);
          i = ((1 + i) | 0);
        }
        return isEqual;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.u = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.rm = (function() {
  var this$1 = this.b9;
  var contentClone = this$1.m();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().bE(this.ac) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].ro();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.ac, this.aF, contentClone, this.ca.m(), this.bn, this.c2);
});
$p.ro = (function() {
  return this.rm();
});
$p.sz = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.mU(key, value, originalHash, hash, shift, replaceValue);
});
$p.io = (function(index) {
  return this.db(index);
});
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cr)));
}
var $d_sci_BitmapIndexedMapNode = new $TypeData().i($c_sci_BitmapIndexedMapNode, "scala.collection.immutable.BitmapIndexedMapNode", ({
  cr: 1,
  cH: 1,
  aH: 1
}));
/** @constructor */
function $c_sci_BitmapIndexedSetNode(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
  this.a3 = 0;
  this.aO = 0;
  this.bo = null;
  this.cs = null;
  this.bw = 0;
  this.cb = 0;
  this.a3 = dataMap;
  this.aO = nodeMap;
  this.bo = content;
  this.cs = originalHashes;
  this.bw = size;
  this.cb = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedSetNode.prototype = new $h_sci_SetNode();
$p.constructor = $c_sci_BitmapIndexedSetNode;
/** @constructor */
function $h_sci_BitmapIndexedSetNode() {
}
$h_sci_BitmapIndexedSetNode.prototype = $p;
$p.O = (function() {
  return this.bw;
});
$p.bN = (function() {
  return this.cb;
});
$p.dd = (function(index) {
  return this.bo.a[index];
});
$p.cF = (function(index) {
  return this.cs.a[index];
});
$p.dc = (function(index) {
  return this.bo.a[(((((-1) + this.bo.a.length) | 0) - index) | 0)];
});
$p.il = (function(element, originalHash, elementHash, shift) {
  var mask = $m_sci_Node$().cH(elementHash, shift);
  var bitpos = $m_sci_Node$().bY(mask);
  if (((this.a3 & bitpos) !== 0)) {
    var index = $m_sci_Node$().bJ(this.a3, mask, bitpos);
    return ((this.cs.a[index] === originalHash) && $m_sr_BoxesRunTime$().i(element, this.dd(index)));
  }
  if (((this.aO & bitpos) !== 0)) {
    return this.dc($m_sci_Node$().bJ(this.aO, mask, bitpos)).il(element, originalHash, elementHash, ((5 + shift) | 0));
  }
  return false;
});
$p.sx = (function(element, originalHash, elementHash, shift) {
  var mask = $m_sci_Node$().cH(elementHash, shift);
  var bitpos = $m_sci_Node$().bY(mask);
  if (((this.a3 & bitpos) !== 0)) {
    var index = $m_sci_Node$().bJ(this.a3, mask, bitpos);
    var element0 = this.dd(index);
    if (Object.is(element0, element)) {
      return this;
    } else {
      var element0UnimprovedHash = this.cF(index);
      var element0Hash = $m_sc_Hashing$().bs(element0UnimprovedHash);
      if (((originalHash === element0UnimprovedHash) && $m_sr_BoxesRunTime$().i(element0, element))) {
        return this;
      } else {
        return this.tW(bitpos, element0Hash, this.my(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0)));
      }
    }
  }
  if (((this.aO & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().bJ(this.aO, mask, bitpos);
    var subNode = this.dc(index$2);
    var subNodeNew$2 = subNode.sy(element, originalHash, elementHash, ((5 + shift) | 0));
    if ((subNode === subNodeNew$2)) {
      return this;
    } else {
      return this.tY(bitpos, subNode, subNodeNew$2);
    }
  }
  return this.tU(bitpos, element, originalHash, elementHash);
});
$p.my = (function(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionSetNode(originalKeyHash0, keyHash0, $m_sci_Vector$().bF($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [key0, key1])));
  } else {
    var mask0 = $m_sci_Node$().cH(keyHash0, shift);
    var mask1 = $m_sci_Node$().cH(keyHash1, shift);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().bY(mask0) | $m_sci_Node$().bY(mask1));
      var newCachedHashCode = ((keyHash0 + keyHash1) | 0);
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedSetNode(dataMap, 0, new $ac_O([key0, key1]), new $ac_I(new Int32Array([originalKeyHash0, originalKeyHash1])), 2, newCachedHashCode) : new $c_sci_BitmapIndexedSetNode(dataMap, 0, new $ac_O([key1, key0]), new $ac_I(new Int32Array([originalKeyHash1, originalKeyHash0])), 2, newCachedHashCode));
    } else {
      var nodeMap = $m_sci_Node$().bY(mask0);
      var node = this.my(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedSetNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().hz, node.O(), node.bN());
    }
  }
});
$p.gZ = (function() {
  return (this.a3 !== 0);
});
$p.iz = (function() {
  return $m_jl_Integer$().bE(this.a3);
});
$p.ip = (function() {
  return (this.aO !== 0);
});
$p.iv = (function() {
  return $m_jl_Integer$().bE(this.aO);
});
$p.d6 = (function(bitpos) {
  return $m_jl_Integer$().bE((this.a3 & (((-1) + bitpos) | 0)));
});
$p.fG = (function(bitpos) {
  return $m_jl_Integer$().bE((this.aO & (((-1) + bitpos) | 0)));
});
$p.tY = (function(bitpos, oldNode, newNode) {
  var idx = (((((-1) + this.bo.a.length) | 0) - this.fG(bitpos)) | 0);
  var src = this.bo;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.r(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedSetNode(this.a3, this.aO, dst, this.cs, ((((this.bw - oldNode.O()) | 0) + newNode.O()) | 0), ((((this.cb - oldNode.bN()) | 0) + newNode.bN()) | 0));
});
$p.tU = (function(bitpos, key, originalHash, elementHash) {
  var dataIx = this.d6(bitpos);
  var src = this.bo;
  var dst = new $ac_O(((1 + src.a.length) | 0));
  src.r(0, dst, 0, dataIx);
  dst.a[dataIx] = key;
  var destPos = ((1 + dataIx) | 0);
  var length = ((src.a.length - dataIx) | 0);
  src.r(dataIx, dst, destPos, length);
  var dstHashes = this.rV(this.cs, dataIx, originalHash);
  return new $c_sci_BitmapIndexedSetNode((this.a3 | bitpos), this.aO, dst, dstHashes, ((1 + this.bw) | 0), ((this.cb + elementHash) | 0));
});
$p.tW = (function(bitpos, elementHash, node) {
  var dataIx = this.d6(bitpos);
  var idxNew = (((((-1) + this.bo.a.length) | 0) - this.fG(bitpos)) | 0);
  var src = this.bo;
  var dst = new $ac_O(src.a.length);
  src.r(0, dst, 0, dataIx);
  var srcPos = ((1 + dataIx) | 0);
  var length = ((idxNew - dataIx) | 0);
  src.r(srcPos, dst, dataIx, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((1 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-1) + ((src.a.length - idxNew) | 0)) | 0);
  src.r(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.jZ(this.cs, dataIx);
  return new $c_sci_BitmapIndexedSetNode((this.a3 ^ bitpos), (this.aO | bitpos), dst, dstHashes, (((((-1) + this.bw) | 0) + node.O()) | 0), ((((this.cb - elementHash) | 0) + node.bN()) | 0));
});
$p.vt = (function(bitpos, keyHash, node) {
  var dataIx = this.d6(bitpos);
  var idxNew = (((((-1) + this.bo.a.length) | 0) - this.fG(bitpos)) | 0);
  var src = this.bo;
  var srcPos = ((1 + dataIx) | 0);
  var dest = this.bo;
  var length = ((idxNew - dataIx) | 0);
  src.r(srcPos, dest, dataIx, length);
  this.bo.a[idxNew] = node;
  this.a3 = (this.a3 ^ bitpos);
  this.aO = (this.aO | bitpos);
  this.cs = this.jZ(this.cs, dataIx);
  this.bw = (((((-1) + this.bw) | 0) + node.O()) | 0);
  this.cb = ((((this.cb - keyHash) | 0) + node.bN()) | 0);
  return this;
});
$p.U = (function(f) {
  var thisPayloadArity = $m_jl_Integer$().bE(this.a3);
  var i$1 = 0;
  while ((i$1 < thisPayloadArity)) {
    f.b(this.dd(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var thisNodeArity = $m_jl_Integer$().bE(this.aO);
  var j = 0;
  while ((j < thisNodeArity)) {
    this.dc(j).U(f);
    j = ((1 + j) | 0);
  }
});
$p.mR = (function(that, shift) {
  if ((this === that)) {
    return true;
  } else if ((!(that instanceof $c_sci_HashCollisionSetNode))) {
    if ((that instanceof $c_sci_BitmapIndexedSetNode)) {
      var thisBitmap = (this.a3 | this.aO);
      var nodeBitmap = (that.a3 | that.aO);
      if (((thisBitmap | nodeBitmap) !== nodeBitmap)) {
        return false;
      }
      var bitmap = (thisBitmap & nodeBitmap);
      var i = bitmap;
      if ((i === 0)) {
        var bitsToSkip = 32;
      } else {
        var i$1 = (i & ((-i) | 0));
        var bitsToSkip = ((31 - (Math.clz32(i$1) | 0)) | 0);
      }
      var isValidSubset = true;
      while ((isValidSubset && (bitsToSkip < 32))) {
        var bitpos = $m_sci_Node$().bY(bitsToSkip);
        if (((this.a3 & bitpos) !== 0)) {
          if (((that.a3 & bitpos) !== 0)) {
            isValidSubset = $m_sr_BoxesRunTime$().i(this.dd($m_sci_Node$().fB(this.a3, bitpos)), that.dd($m_sci_Node$().fB(that.a3, bitpos)));
          } else {
            var thisDataIndex = $m_sci_Node$().fB(this.a3, bitpos);
            var payload = this.dd(thisDataIndex);
            var subNode = that.dc($m_sci_Node$().fB(that.aO, bitpos));
            var elementUnimprovedHash = this.cF(thisDataIndex);
            var elementHash = $m_sc_Hashing$().bs(elementUnimprovedHash);
            isValidSubset = subNode.il(payload, elementUnimprovedHash, elementHash, ((5 + shift) | 0));
          }
        } else if (((that.a3 & bitpos) === 0)) {
          var subNode0 = this.dc($m_sci_Node$().fB(this.aO, bitpos));
          var subNode1 = that.dc($m_sci_Node$().fB(that.aO, bitpos));
          isValidSubset = subNode0.mR(subNode1, ((5 + shift) | 0));
        } else {
          isValidSubset = false;
        }
        var newBitmap = (bitmap ^ bitpos);
        bitmap = newBitmap;
        if ((newBitmap === 0)) {
          bitsToSkip = 32;
        } else {
          var i$2 = (newBitmap & ((-newBitmap) | 0));
          bitsToSkip = ((31 - (Math.clz32(i$2) | 0)) | 0);
        }
      }
      return isValidSubset;
    } else {
      throw new $c_s_MatchError(that);
    }
  } else {
    return false;
  }
});
$p.k = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedSetNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.cb === that.cb) && (this.aO === that.aO)) && (this.a3 === that.a3)) && (this.bw === that.bw)) && $m_ju_Arrays$().jL(this.cs, that.cs))) {
      var a1 = this.bo;
      var a2 = that.bo;
      var length = this.bo.a.length;
      if ((a1 === a2)) {
        return true;
      } else {
        var isEqual = true;
        var i = 0;
        while ((isEqual && (i < length))) {
          isEqual = $m_sr_BoxesRunTime$().i(a1.a[i], a2.a[i]);
          i = ((1 + i) | 0);
        }
        return isEqual;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.u = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.v = (function() {
  return $m_sc_StringOps$().uE("BitmapIndexedSetNode(size=%s, dataMap=%x, nodeMap=%x)", $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [this.bw, this.a3, this.aO]));
});
$p.rn = (function() {
  var this$1 = this.bo;
  var contentClone = this$1.m();
  var contentLength = contentClone.a.length;
  var i$1 = $m_jl_Integer$().bE(this.a3);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].rp();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedSetNode(this.a3, this.aO, contentClone, this.cs.m(), this.bw, this.cb);
});
$p.ma = (function(f) {
  var iN = $m_jl_Integer$().bE(this.a3);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.bd(this.dd(i$1), this.cF(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().bE(this.aO);
  var j = 0;
  while ((j < jN)) {
    this.dc(j).ma(f);
    j = ((1 + j) | 0);
  }
});
$p.rp = (function() {
  return this.rn();
});
$p.sy = (function(element, originalHash, hash, shift) {
  return this.sx(element, originalHash, hash, shift);
});
$p.io = (function(index) {
  return this.dc(index);
});
function $isArrayOf_sci_BitmapIndexedSetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cs)));
}
var $d_sci_BitmapIndexedSetNode = new $TypeData().i($c_sci_BitmapIndexedSetNode, "scala.collection.immutable.BitmapIndexedSetNode", ({
  cs: 1,
  cM: 1,
  aH: 1
}));
/** @constructor */
function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
  this.ln = 0;
  this.es = 0;
  this.aT = null;
  this.ln = originalHash;
  this.es = hash;
  this.aT = content;
  $m_s_Predef$().sf((this.aT.o() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.h2 = (function(key) {
  var iter = this.aT.e();
  var i = 0;
  while (iter.l()) {
    if ($m_sr_BoxesRunTime$().i(iter.d().bc(), key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.O = (function() {
  return this.aT.o();
});
$p.lS = (function(key, originalHash, hash, shift) {
  var this$1 = this.jP(key, originalHash, hash, shift);
  if (this$1.c()) {
    $m_sc_Iterator$().D.d();
    throw new $c_jl_ClassCastException();
  } else {
    return this$1.E();
  }
});
$p.jP = (function(key, originalHash, hash, shift) {
  if ((this.es === hash)) {
    var index = this.h2(key);
    return ((index >= 0) ? new $c_s_Some(this.aT.x(index).b6()) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.mf = (function(key, originalHash, hash, shift, f) {
  if ((this.es === hash)) {
    var x1 = this.h2(key);
    return ((x1 === (-1)) ? f.L() : this.aT.x(x1).b6());
  } else {
    return f.L();
  }
});
$p.m2 = (function(key, originalHash, hash, shift) {
  return ((this.es === hash) && (this.h2(key) >= 0));
});
$p.sz = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.h2(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.aT.x(index).b6(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.aT.eh(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.aT.bD(new $c_T2(key, value))));
});
$p.ip = (function() {
  return false;
});
$p.iv = (function() {
  return 0;
});
$p.db = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.gZ = (function() {
  return true;
});
$p.iz = (function() {
  return this.aT.o();
});
$p.dy = (function(index) {
  return this.aT.x(index).bc();
});
$p.dz = (function(index) {
  return this.aT.x(index).b6();
});
$p.mg = (function(index) {
  return this.aT.x(index);
});
$p.cF = (function(index) {
  return this.ln;
});
$p.U = (function(f) {
  this.aT.U(f);
});
$p.fz = (function(f) {
  this.aT.U(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.bc();
      var v = x0$1$2$2.b6();
      return f.bd(k, v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  })));
});
$p.k = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.es === that.es) && (this.aT.o() === that.aT.o()))) {
      var iter = this.aT.e();
      while (iter.l()) {
        var x1$2 = iter.d();
        if ((x1$2 === null)) {
          throw new $c_s_MatchError(x1$2);
        }
        var key = x1$2.bc();
        var value = x1$2.b6();
        var index = that.h2(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().i(value, that.aT.x(index).b6())))) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.u = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.bN = (function() {
  return Math.imul(this.aT.o(), this.es);
});
$p.ro = (function() {
  return new $c_sci_HashCollisionMapNode(this.ln, this.es, this.aT);
});
$p.io = (function(index) {
  return this.db(index);
});
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ct)));
}
var $d_sci_HashCollisionMapNode = new $TypeData().i($c_sci_HashCollisionMapNode, "scala.collection.immutable.HashCollisionMapNode", ({
  ct: 1,
  cH: 1,
  aH: 1
}));
/** @constructor */
function $c_sci_HashCollisionSetNode(originalHash, hash, content) {
  this.jf = 0;
  this.gr = 0;
  this.aZ = null;
  this.jf = originalHash;
  this.gr = hash;
  this.aZ = content;
  $m_s_Predef$().sf((this.aZ.o() >= 2));
}
$p = $c_sci_HashCollisionSetNode.prototype = new $h_sci_SetNode();
$p.constructor = $c_sci_HashCollisionSetNode;
/** @constructor */
function $h_sci_HashCollisionSetNode() {
}
$h_sci_HashCollisionSetNode.prototype = $p;
$p.il = (function(element, originalHash, hash, shift) {
  return ((this.gr === hash) && $f_sc_SeqOps__contains__O__Z(this.aZ, element));
});
$p.sy = (function(element, originalHash, hash, shift) {
  return (this.il(element, originalHash, hash, shift) ? this : new $c_sci_HashCollisionSetNode(originalHash, hash, this.aZ.bD(element)));
});
$p.ip = (function() {
  return false;
});
$p.iv = (function() {
  return 0;
});
$p.dc = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.gZ = (function() {
  return true;
});
$p.iz = (function() {
  return this.aZ.o();
});
$p.dd = (function(index) {
  return this.aZ.x(index);
});
$p.cF = (function(index) {
  return this.jf;
});
$p.O = (function() {
  return this.aZ.o();
});
$p.U = (function(f) {
  var iter = this.aZ.e();
  while (iter.l()) {
    f.b(iter.d());
  }
});
$p.bN = (function() {
  return Math.imul(this.aZ.o(), this.gr);
});
$p.mR = (function(that, shift) {
  if ((this === that)) {
    return true;
  } else if ((that instanceof $c_sci_HashCollisionSetNode)) {
    if ((this.aZ.o() <= that.aZ.o())) {
      var this$1 = this.aZ;
      var eta$0$1 = that.aZ;
      var res = true;
      var it = this$1.e();
      while ((res && it.l())) {
        res = $f_sc_SeqOps__contains__O__Z(eta$0$1, it.d());
      }
      return res;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.k = (function(that) {
  if ((that instanceof $c_sci_HashCollisionSetNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.gr === that.gr) && (this.aZ.o() === that.aZ.o()))) {
      var this$3 = this.aZ;
      var eta$0$1 = that.aZ;
      var res = true;
      var it = this$3.e();
      while ((res && it.l())) {
        res = $f_sc_SeqOps__contains__O__Z(eta$0$1, it.d());
      }
      return res;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.u = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.ma = (function(f) {
  var iter = this.aZ.e();
  while (iter.l()) {
    var next = iter.d();
    f.bd(next, this.jf);
  }
});
$p.rp = (function() {
  return new $c_sci_HashCollisionSetNode(this.jf, this.gr, this.aZ);
});
$p.io = (function(index) {
  return this.dc(index);
});
function $isArrayOf_sci_HashCollisionSetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cu)));
}
var $d_sci_HashCollisionSetNode = new $TypeData().i($c_sci_HashCollisionSetNode, "scala.collection.immutable.HashCollisionSetNode", ({
  cu: 1,
  cM: 1,
  aH: 1
}));
/** @constructor */
function $c_sci_HashMap$() {
  this.lo = null;
  $n_sci_HashMap$ = this;
  this.lo = new $c_sci_HashMap($m_sci_MapNode$().qi);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.uG = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().lP(source).mJ());
});
$p.am = (function(it) {
  return this.uG(it);
});
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  hv: 1,
  ba: 1,
  a: 1
}));
var $n_sci_HashMap$;
function $m_sci_HashMap$() {
  if ((!$n_sci_HashMap$)) {
    $n_sci_HashMap$ = new $c_sci_HashMap$();
  }
  return $n_sci_HashMap$;
}
/** @constructor */
function $c_sci_HashSet$() {
  this.hK = null;
  $n_sci_HashSet$ = this;
  this.hK = new $c_sci_HashSet($m_sci_SetNode$().qn);
}
$p = $c_sci_HashSet$.prototype = new $h_O();
$p.constructor = $c_sci_HashSet$;
/** @constructor */
function $h_sci_HashSet$() {
}
$h_sci_HashSet$.prototype = $p;
$p.uH = (function(source) {
  return ((source instanceof $c_sci_HashSet) ? source : ((source.q() === 0) ? this.hK : new $c_sci_HashSetBuilder().lQ(source).mK()));
});
$p.at = (function() {
  return new $c_sci_HashSetBuilder();
});
$p.am = (function(source) {
  return this.uH(source);
});
$p.bO = (function() {
  return this.hK;
});
var $d_sci_HashSet$ = new $TypeData().i($c_sci_HashSet$, "scala.collection.immutable.HashSet$", ({
  hy: 1,
  H: 1,
  a: 1
}));
var $n_sci_HashSet$;
function $m_sci_HashSet$() {
  if ((!$n_sci_HashSet$)) {
    $n_sci_HashSet$ = new $c_sci_HashSet$();
  }
  return $n_sci_HashSet$;
}
/** @constructor */
function $c_sci_LazyList$State$Cons(head, tail) {
  this.qf = null;
  this.qg = null;
  this.qf = head;
  this.qg = tail;
}
$p = $c_sci_LazyList$State$Cons.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$State$Cons;
/** @constructor */
function $h_sci_LazyList$State$Cons() {
}
$h_sci_LazyList$State$Cons.prototype = $p;
$p.n = (function() {
  return this.qf;
});
$p.aN = (function() {
  return this.qg;
});
var $d_sci_LazyList$State$Cons = new $TypeData().i($c_sci_LazyList$State$Cons, "scala.collection.immutable.LazyList$State$Cons", ({
  hI: 1,
  cz: 1,
  a: 1
}));
/** @constructor */
function $c_sci_LazyList$State$Empty$() {
}
$p = $c_sci_LazyList$State$Empty$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$State$Empty$;
/** @constructor */
function $h_sci_LazyList$State$Empty$() {
}
$h_sci_LazyList$State$Empty$.prototype = $p;
$p.mj = (function() {
  throw new $c_ju_NoSuchElementException("head of empty lazy list");
});
$p.aN = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
});
$p.n = (function() {
  this.mj();
});
var $d_sci_LazyList$State$Empty$ = new $TypeData().i($c_sci_LazyList$State$Empty$, "scala.collection.immutable.LazyList$State$Empty$", ({
  hJ: 1,
  cz: 1,
  a: 1
}));
var $n_sci_LazyList$State$Empty$;
function $m_sci_LazyList$State$Empty$() {
  if ((!$n_sci_LazyList$State$Empty$)) {
    $n_sci_LazyList$State$Empty$ = new $c_sci_LazyList$State$Empty$();
  }
  return $n_sci_LazyList$State$Empty$;
}
/** @constructor */
function $c_sci_Map$() {
}
$p = $c_sci_Map$.prototype = new $h_O();
$p.constructor = $c_sci_Map$;
/** @constructor */
function $h_sci_Map$() {
}
$h_sci_Map$.prototype = $p;
$p.rH = (function(it) {
  if ($is_sci_Iterable(it)) {
    if (it.c()) {
      return $m_sci_Map$EmptyMap$();
    }
  }
  if ((it instanceof $c_sci_HashMap)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map1)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map2)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map3)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map4)) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  return new $c_sci_MapBuilderImpl().qW(it).sg();
});
$p.am = (function(it) {
  return this.rH(it);
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  hN: 1,
  ba: 1,
  a: 1
}));
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$();
  }
  return $n_sci_Map$;
}
/** @constructor */
function $c_sci_Set$() {
}
$p = $c_sci_Set$.prototype = new $h_O();
$p.constructor = $c_sci_Set$;
/** @constructor */
function $h_sci_Set$() {
}
$h_sci_Set$.prototype = $p;
$p.uJ = (function(it) {
  return ((it.q() === 0) ? $m_sci_Set$EmptySet$() : ((it instanceof $c_sci_HashSet) ? it : (false ? it : ((it instanceof $c_sci_Set$Set1) ? it : ((it instanceof $c_sci_Set$Set2) ? it : ((it instanceof $c_sci_Set$Set3) ? it : ((it instanceof $c_sci_Set$Set4) ? it : ((it instanceof $c_sci_HashMap$HashKeySet) ? it : ((it instanceof $c_sci_MapOps$ImmutableKeySet) ? it : new $c_sci_SetBuilderImpl().qX(it).sh())))))))));
});
$p.at = (function() {
  return new $c_sci_SetBuilderImpl();
});
$p.am = (function(source) {
  return this.uJ(source);
});
$p.bO = (function() {
  return $m_sci_Set$EmptySet$();
});
var $d_sci_Set$ = new $TypeData().i($c_sci_Set$, "scala.collection.immutable.Set$", ({
  i8: 1,
  H: 1,
  a: 1
}));
var $n_sci_Set$;
function $m_sci_Set$() {
  if ((!$n_sci_Set$)) {
    $n_sci_Set$ = new $c_sci_Set$();
  }
  return $n_sci_Set$;
}
function $f_scm_Builder__sizeHint__sc_IterableOnce__I__V($thiz, coll, delta) {
  var x1 = coll.q();
  if ((x1 !== (-1))) {
    var that = ((x1 + delta) | 0);
    $thiz.bt(((that < 0) ? 0 : that));
  }
}
/** @constructor */
function $c_scm_HashSet$() {
}
$p = $c_scm_HashSet$.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$;
/** @constructor */
function $h_scm_HashSet$() {
}
$h_scm_HashSet$.prototype = $p;
$p.uK = (function(it) {
  var k = it.q();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).qZ(it);
});
$p.at = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.bO = (function() {
  return $ct_scm_HashSet__(new $c_scm_HashSet());
});
$p.am = (function(source) {
  return this.uK(source);
});
var $d_scm_HashSet$ = new $TypeData().i($c_scm_HashSet$, "scala.collection.mutable.HashSet$", ({
  iF: 1,
  H: 1,
  a: 1
}));
var $n_scm_HashSet$;
function $m_scm_HashSet$() {
  if ((!$n_scm_HashSet$)) {
    $n_scm_HashSet$ = new $c_scm_HashSet$();
  }
  return $n_scm_HashSet$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.j3)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(f) {
  this.qz = null;
  this.qz = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855() {
}
$h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = $p;
$p.L = (function() {
  return (0, this.qz)();
});
var $d_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855 = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855, "scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855", ({
  jt: 1,
  db: 1,
  b8: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(f) {
  this.qA = null;
  this.qA = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28() {
}
$h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = $p;
$p.b = (function(x0) {
  return (0, this.qA)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28, "scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28", ({
  ju: 1,
  bm: 1,
  i: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(f) {
  this.qB = null;
  this.qB = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc() {
}
$h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = $p;
$p.bd = (function(x0, x1) {
  return (0, this.qB)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc, "scala.runtime.AbstractFunction2.$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc", ({
  jv: 1,
  dc: 1,
  b9: 1
}));
/** @constructor */
function $c_sr_AbstractPartialFunction() {
}
$p = $c_sr_AbstractPartialFunction.prototype = new $h_O();
$p.constructor = $c_sr_AbstractPartialFunction;
/** @constructor */
function $h_sr_AbstractPartialFunction() {
}
$h_sr_AbstractPartialFunction.prototype = $p;
$p.v = (function() {
  return "<function1>";
});
$p.b = (function(x) {
  return this.c5(x, $m_s_PartialFunction$().j6);
});
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  jE: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_Any$() {
}
$p = $c_sjs_js_Any$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
}
$h_sjs_js_Any$.prototype = $p;
$p.rK = (function(f) {
  return ((arg1$2) => f.b(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  jL: 1,
  jM: 1,
  jN: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
/** @constructor */
function $c_sjsr_AnonFunction0() {
}
$p = $c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sjsr_AnonFunction0;
/** @constructor */
function $h_sjsr_AnonFunction0() {
}
$h_sjsr_AnonFunction0.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction1() {
}
$p = $c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
}
$h_sjsr_AnonFunction1.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction2() {
}
$p = $c_sjsr_AnonFunction2.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sjsr_AnonFunction2;
/** @constructor */
function $h_sjsr_AnonFunction2() {
}
$h_sjsr_AnonFunction2.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction3() {
}
$p = $c_sjsr_AnonFunction3.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sjsr_AnonFunction3;
/** @constructor */
function $h_sjsr_AnonFunction3() {
}
$h_sjsr_AnonFunction3.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction4() {
}
$p = $c_sjsr_AnonFunction4.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sjsr_AnonFunction4;
/** @constructor */
function $h_sjsr_AnonFunction4() {
}
$h_sjsr_AnonFunction4.prototype = $p;
function $isArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.k4)));
}
/** @constructor */
function $c_Lsi\uff3ftool_adversaries_Adversary$() {
  this.jz = null;
  this.qK = null;
  this.qQ = null;
  this.qL = null;
  this.qN = null;
  this.qM = null;
  this.qO = null;
  this.qP = null;
  this.jy = null;
  $n_Lsi\uff3ftool_adversaries_Adversary$ = this;
  this.jz = ($m_Lsi\uff3ftool_adversaries_Adversary$(), new $c_Lsi\uff3ftool_adversaries_Adversary("Brandenburg-Prussia", $m_sci_Vector$().bF($m_sr_ScalaRunTime$().A(new ($d_Lsi\uff3ftool_adversaries_Rule.r().C)([new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "On each board add 1 Town to land #3.", $m_s_None$())]))), $m_s_None$(), "On each board with Town/City, add 1 Town to a land without Town.", $m_sci_Nil$().z($m_sr_ScalaRunTime$().A(new ($d_sci_List.r().C)([$m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 0, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 0, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 1]))))]))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((invaders, level) => $m_Lsi\uff3ftool_adversaries_InvaderCards$().iB(invaders, (level | 0))))));
  this.qK = ($m_Lsi\uff3ftool_adversaries_Adversary$(), new $c_Lsi\uff3ftool_adversaries_Adversary("England", $m_sci_Vector$().bF($m_sr_ScalaRunTime$().A(new ($d_Lsi\uff3ftool_adversaries_Rule.r().C)([new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Build__Lsi\uff3ftool_adversaries_Stage(), "Invader Build Cards affect matching lands without Invaders if they are adjacent to at least 2 Town/City.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(2, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "On each board add 1 City to land #1 and 1 Town to land #2", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(3, $s_Lsi\uff3ftool_adversaries_Stage$__HighImmigration__Lsi\uff3ftool_adversaries_Stage(), "Put the \"High Immigration\" tile on the Invader board, to the left of \"Ravage\". The Invaders take this Build action each Invader phase before Ravaging. Cards slide left from Ravage to it, and from it to the discard pile. Remove the tile when a Stage II card slides onto it, putting that card in the discard.", new $c_s_Some(4)), new $c_Lsi\uff3ftool_adversaries_Rule(4, $s_Lsi\uff3ftool_adversaries_Stage$__HighImmigration__Lsi\uff3ftool_adversaries_Stage(), "Put the \"High Immigration\" tile on the Invader board, to the left of \"Ravage\". The Invaders take this Build action each Invader phase before Ravaging. Cards slide left from Ravage to it, and from it to the discard pile. ", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(5, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "Town/City have +1 Health.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(6, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "Add an additional Fear to the Fear Pool per player in the game.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(6, $s_Lsi\uff3ftool_adversaries_Stage$__HighImmigration__Lsi\uff3ftool_adversaries_Stage(), "During any Invader Phase where you resolve no Fear Cards, perform the Build from High Immigration twice. (This has no effect if no card is on the extra Build slot.)", $m_s_None$())]))), new $c_s_Some("If 7 or more Town/City are ever in a single land, the Invaders win."), "On each board with Town/City, Build in the land with the most Town/City.", $m_sci_Nil$().z($m_sr_ScalaRunTime$().A(new ($d_sci_List.r().C)([$m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 2])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 2])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 1]))))]))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((invaders$2, level$2) => invaders$2))));
  this.qQ = ($m_Lsi\uff3ftool_adversaries_Adversary$(), new $c_Lsi\uff3ftool_adversaries_Adversary("Sweden", $m_sci_Vector$().bF($m_sr_ScalaRunTime$().A(new ($d_Lsi\uff3ftool_adversaries_Rule.r().C)([new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "If the Invaders do at least 6 Damage to the land during Ravage, add an extra Blight. The additional Blight does not destroy Presence or cause cascades.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(2, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "On each board add 1 City to land #4. On boards where land #4 starts with Blight, put that Blight in land #5 instead.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(3, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "Town deal 3 Damage. City deal 5 Damage.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(4, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "After adding all other Invaders, Accelerate the Invader Deck. On each board, add 1 Town to the land of that terrain with the fewest Invaders.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(5, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "When Ravaging adds at least 1 Blight to a land, also add 1 Town to an adjacent land without Town/City. Cascading Blight does not cause this effect.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(6, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "On each board add 1 Town and 1 Blight to land #8. The Blight comes from the box, not the Blight Card.", $m_s_None$())]))), $m_s_None$(), "After Invaders Explore into each land this Phase, if that land has at least as many Invaders as Dahan, replace 1 Dahan with 1 Town.", $m_sci_Nil$().z($m_sr_ScalaRunTime$().A(new ($d_sci_List.r().C)([$m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 0, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 1, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 2]))))]))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((invaders$3, level$3$1) => invaders$3))));
  this.qL = ($m_Lsi\uff3ftool_adversaries_Adversary$(), new $c_Lsi\uff3ftool_adversaries_Adversary("France", $m_sci_Vector$().bF($m_sr_ScalaRunTime$().A(new ($d_Lsi\uff3ftool_adversaries_Rule.r().C)([new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Explore__Lsi\uff3ftool_adversaries_Stage(), "Except during Setup: After Invaders successfully Explore into a land which had no Town/City, add 1 Explorer there.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(2, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "Put the \"Slave Rebellion\" event under the top 3 cards of the Event Deck.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(2, $s_Lsi\uff3ftool_adversaries_Stage$__Build__Lsi\uff3ftool_adversaries_Stage(), "After Invaders Build in a land with 2 Explorer or more, replace all but 1 Explorer there with an equal number of Town.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(3, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "On each board add 1 Town to the highest-numbered land without Town. Add 1 Town to land #1.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(4, $s_Lsi\uff3ftool_adversaries_Stage$__Build__Lsi\uff3ftool_adversaries_Stage(), "Whenever Invaders Build a Coastal City, add 1 Town to the adjacent land with the fewest Town.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(5, $s_Lsi\uff3ftool_adversaries_Stage$__RuleChange__Lsi\uff3ftool_adversaries_Stage(), "When you remove Blight from the board, put it here instead of onto the Blight Card. As soon as you have 3 Blight per player here, move it all back to the Blight Card.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(6, $s_Lsi\uff3ftool_adversaries_Stage$__Explore__Lsi\uff3ftool_adversaries_Stage(), "After resolving an Explore Card, on each board add 1 Explorer to a land without any. Fear Card effects never remove Explorer. If one would, you may instead Push that Explorer.", $m_s_None$())]))), new $c_s_Some("Before Setup, return all but 7 Town per player to the box. Invaders win if you ever cannot place a Town."), "After Exploring, on each board, pick a land of the shown terrain. If it has Town/City, add 1 Blight. Otherwise, add 1 Town.", $m_sci_Nil$().z($m_sr_ScalaRunTime$().A(new ($d_sci_List.r().C)([$m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 0, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 2]))))]))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((invaders$4, level$4$1) => invaders$4))));
  this.qN = ($m_Lsi\uff3ftool_adversaries_Adversary$(), new $c_Lsi\uff3ftool_adversaries_Adversary("Habsburg Monarchy (Livestock)", $m_sci_Vector$().bF($m_sr_ScalaRunTime$().A(new ($d_Lsi\uff3ftool_adversaries_Rule.r().C)([new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Build__Lsi\uff3ftool_adversaries_Stage(), "After the normal Build Step: In each land matching a Build Card, Gather 1 Town from a land not matching a Build Card. (In board/land order.)", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(2, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "On each board, add 1 Town to land #2 and 1 Town to the highest-numbered land without Setup symbols.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(2, $s_Lsi\uff3ftool_adversaries_Stage$__Build__Lsi\uff3ftool_adversaries_Stage(), "when Invaders would Build 1 City in an Inland land, they instead Build 2 Town.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(4, $s_Lsi\uff3ftool_adversaries_Stage$__RuleChange__Lsi\uff3ftool_adversaries_Stage(), "Town in lands without Blight are Durable: they have +2 Health, and \"Destroy Town\" effects instead deal 2 Damage (to those Town only) per Town they could Destroy. (\"Destroy all Town\" works normally.)", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(5, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "Put the Habsburg Reminder Card under the top 5 Invader Cards. When Revealed, on each board, add 1 City to a Coastal land without City and 1 Town to the 3 Inland lands with the fewest Blight.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(6, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "Ravages do +2 Damage (total) if any adjacent lands have Town. (This does not cause lands without Invaders to Ravage.)", $m_s_None$())]))), new $c_s_Some("Track how many Blight come off the Blight Card during Ravages that do 8+ Damage to the land. If that number ever exceeds players, the Invaders win."), "After Exploring: On each board with 4 or fewer Blight, add 1 Town to a land without Town/Blight. On each board with 2 or fewer Blight, do so again.", $m_sci_Nil$().z($m_sr_ScalaRunTime$().A(new ($d_sci_List.r().C)([$m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, (-1)])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 3, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([2, 3, 0]))))]))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((invaders$5, level$5$1) => $m_Lsi\uff3ftool_adversaries_InvaderCards$().t4(invaders$5, (level$5$1 | 0))))));
  this.qM = ($m_Lsi\uff3ftool_adversaries_Adversary$(), new $c_Lsi\uff3ftool_adversaries_Adversary("Habsburg Mining Expedition", $m_sci_Vector$().bF($m_sr_ScalaRunTime$().A(new ($d_Lsi\uff3ftool_adversaries_Rule.r().C)([new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__RuleChange__Lsi\uff3ftool_adversaries_Stage(), "Lands with 3 or more Invaders are Mining lands.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "When Blight added by a Ravage Action would cascade, instead Upgrade 1 Explorer/Town (before Dahan counterattack.)", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), $m_sc_StringOps$().sr("In Mining lands: Disease and modifiers to Disease affect Ravage Actions as though they were Build Actions.", 124), $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Build__Lsi\uff3ftool_adversaries_Stage(), $m_sc_StringOps$().sr("In Mining lands: During the Build Step, Build Cards cause Ravage Actions (instead of Build Actions).", 124), $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(2, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "Add 1 Explorer in each land with no Dahan. Add 1 Disease and 1 City in the highest-numbered land with a Town Setup symbol.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(3, $s_Lsi\uff3ftool_adversaries_Stage$__AfterBuild__Lsi\uff3ftool_adversaries_Stage(), "On each board: Choose a land with Explorer. Upgrade 1 Explorer there.", new $c_s_Some(5)), new $c_Lsi\uff3ftool_adversaries_Rule(4, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "Remove the Stage II 'Coastal Lands' card before randomly choosing Stage II cards. Place the 'Salt Deposits' card in place of the 2nd Stage II card.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(5, $s_Lsi\uff3ftool_adversaries_Stage$__AfterBuild__Lsi\uff3ftool_adversaries_Stage(), "On each board: Choose a land with Explorer. Build there, then Upgrade 1 Explorer. (Build normally in a Mining land.)", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(6, $s_Lsi\uff3ftool_adversaries_Stage$__Explore__Lsi\uff3ftool_adversaries_Stage(), "On boards with 3 or fewer Blight: Add +1 Explorer in each land successfully explored. (Max. 2 lands per board per Explore Card.)", $m_s_None$())]))), new $c_s_Some("At the end of the Fast Power Phase, the Invaders win if any land has at least 8 total Invaders/Blight (combined)."), "After Advancing Invader Cards: On each board, Explore in 2 lands whose terrains don't match a Ravage or Build Card (no source required).", $m_sci_Nil$().z($m_sr_ScalaRunTime$().A(new ($d_sci_List.r().C)([$m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 0, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 0, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 1, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 1]))))]))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((invaders$6, level$6$1) => $m_Lsi\uff3ftool_adversaries_InvaderCards$().t3(invaders$6, (level$6$1 | 0))))));
  this.qO = ($m_Lsi\uff3ftool_adversaries_Adversary$(), new $c_Lsi\uff3ftool_adversaries_Adversary("Russia", $m_sci_Vector$().bF($m_sr_ScalaRunTime$().A(new ($d_Lsi\uff3ftool_adversaries_Rule.r().C)([new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "On each board, add 1 Beasts and 1 Explorer to the highest-numbered land without Town/City", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "Explorer do +1 Damage. When Ravage adds Blight to a land (including cascades), Destroy 1 Beasts in that land.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(2, $s_Lsi\uff3ftool_adversaries_Stage$__RuleChange__Lsi\uff3ftool_adversaries_Stage(), "The first time each Action would Destroy Explorer: If possible, 1 of those Explorer is instead Pushed; 1 Fear when you do so.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(3, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "Ravage Cards also match lands with 3 or more Explorer. (If the land already matched the Ravage Card, it still Ravages just once.)", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(5, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "Put an unused Stage II Invader Card under the top 3 Fear Cards, and an unused Stage III Card under the top 7 Fear Cards.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(5, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "When a face down invader card in the fear deck is revealed, immediately place it in the Build space (face-up).", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(6, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "After the Ravage Step of turn 2+, on each board where it added no Blight: In the land with the most Explorer (min. 1), add 1 Explorer and 1 Town.", $m_s_None$())]))), new $c_s_Some("Put Beasts Destroyed by Adversary rules on this panel. If there are ever more Beasts on this panel than on the island, the Invaders win."), "Add 2 Explorer (total) among lands with Beasts. If you can't, instead add 2 Explorer among lands with Beasts on a different board.", $m_sci_Nil$().z($m_sr_ScalaRunTime$().A(new ($d_sci_List.r().C)([$m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 0, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 0, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([2, 2, 1]))))]))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((invaders$7, level$7$1) => $m_Lsi\uff3ftool_adversaries_InvaderCards$().wb(invaders$7, (level$7$1 | 0))))));
  this.qP = ($m_Lsi\uff3ftool_adversaries_Adversary$(), new $c_Lsi\uff3ftool_adversaries_Adversary("Scotland", $m_sci_Vector$().bF($m_sr_ScalaRunTime$().A(new ($d_Lsi\uff3ftool_adversaries_Rule.r().C)([new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Explore__Lsi\uff3ftool_adversaries_Stage(), "After Setup, in Coastal lands, Explore Cards add 1 Town instead of 1 Explorer . \"Coastal Lands\" Invader cards do this for maximum 2 lands per board.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(2, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "Add 1 City to land #2.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(3, $s_Lsi\uff3ftool_adversaries_Stage$__Build__Lsi\uff3ftool_adversaries_Stage(), "In Coastal lands, Build Cards affect lands without Invaders, so long as there is an adjacent City.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(5, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "After a Ravage Action adds Blight to a Coastal Land, add 1 Blight to that board's Ocean (without cascading). Treat the Ocean as a Coastal Wetland for this rule and for Blight removal/movement.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(6, $s_Lsi\uff3ftool_adversaries_Stage$__AfterRavage__Lsi\uff3ftool_adversaries_Stage(), "Add 1 Town to each Inland land that matches a Ravage card and is within 1 Range of Town/City.", $m_s_None$())]))), new $c_s_Some("If the number of Coastal lands with City is ever greater than (2 x # of boards), the Invaders win."), "On the single board with the most Coastal Town/City, add 1 Town to the N lands with the fewest Town (N = # of players.)", $m_sci_Nil$().z($m_sr_ScalaRunTime$().A(new ($d_sci_List.r().C)([$m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([2, 2, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([2, 3, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([3, 3, 1]))))]))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((invaders$8, level$8$1) => $m_Lsi\uff3ftool_adversaries_InvaderCards$().k3(invaders$8, (level$8$1 | 0))))));
  this.jy = $m_sci_Nil$().z($m_sr_ScalaRunTime$().A(new ($d_Lsi\uff3ftool_adversaries_Adversary.r().C)([this.jz, this.qK, this.qQ, this.qL, this.qN, this.qM, this.qO, this.qP])));
}
$p = $c_Lsi\uff3ftool_adversaries_Adversary$.prototype = new $h_O();
$p.constructor = $c_Lsi\uff3ftool_adversaries_Adversary$;
/** @constructor */
function $h_Lsi\uff3ftool_adversaries_Adversary$() {
}
$h_Lsi\uff3ftool_adversaries_Adversary$.prototype = $p;
$p.jQ = (function(name) {
  var this$1 = $m_Lsi\uff3ftool_adversaries_Adversary$().jy;
  _return: {
    var these = this$1;
    while ((!these.c())) {
      if ((these.n().d4 === name)) {
        var this$2 = new $c_s_Some(these.n());
        break _return;
      }
      these = these.y();
    }
    var this$2 = $m_s_None$();
  }
  if (this$2.c()) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (name + " not found"));
  }
  return this$2.E();
});
var $d_Lsi\uff3ftool_adversaries_Adversary$ = new $TypeData().i($c_Lsi\uff3ftool_adversaries_Adversary$, "si_tool.adversaries.Adversary$", ({
  kb: 1,
  aI: 1,
  bl: 1
}));
var $n_Lsi\uff3ftool_adversaries_Adversary$;
function $m_Lsi\uff3ftool_adversaries_Adversary$() {
  if ((!$n_Lsi\uff3ftool_adversaries_Adversary$)) {
    $n_Lsi\uff3ftool_adversaries_Adversary$ = new $c_Lsi\uff3ftool_adversaries_Adversary$();
  }
  return $n_Lsi\uff3ftool_adversaries_Adversary$;
}
function $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForBoth__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__s_Option__sci_Vector($thiz, stage, primary, secondary) {
  var $x_1 = $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForAdv__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__sci_Vector($thiz, stage, primary);
  var this$1 = $m_s_Option$().jY(secondary).hb();
  $m_sci_Vector$();
  var b = new $c_sci_VectorBuilder();
  var it = this$1.e();
  while (it.l()) {
    b.gK($p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForAdv__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__sci_Vector($thiz, stage, it.d()));
  }
  return $x_1.jI(b.iD());
}
function $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForAdv__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__sci_Vector($thiz, stage, sel) {
  return $f_sc_StrictOptimizedIterableOps__collect__s_PartialFunction__O(sel.c4.hZ, new $c_Lsi\uff3ftool_adversaries_RuleSet$$anon$1(stage, sel, $thiz));
}
/** @constructor */
function $c_Lsi\uff3ftool_adversaries_RuleSet$() {
}
$p = $c_Lsi\uff3ftool_adversaries_RuleSet$.prototype = new $h_O();
$p.constructor = $c_Lsi\uff3ftool_adversaries_RuleSet$;
/** @constructor */
function $h_Lsi\uff3ftool_adversaries_RuleSet$() {
}
$h_Lsi\uff3ftool_adversaries_RuleSet$.prototype = $p;
$p.uL = (function(primary, secondary) {
  var escalation3$1 = (secondary.c() ? $m_s_None$() : new $c_s_Some(secondary.E().c4.gD));
  var lossConditionSecondary$1 = (secondary.c() ? $m_s_None$() : secondary.E().c4.gF);
  var setup$1 = $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForBoth__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__s_Option__sci_Vector(this, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), primary, secondary);
  var afterRavage$1 = $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForBoth__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__s_Option__sci_Vector(this, $s_Lsi\uff3ftool_adversaries_Stage$__AfterRavage__Lsi\uff3ftool_adversaries_Stage(), primary, secondary);
  var ravage$1 = $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForBoth__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__s_Option__sci_Vector(this, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), primary, secondary);
  var afterBuild$1 = $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForBoth__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__s_Option__sci_Vector(this, $s_Lsi\uff3ftool_adversaries_Stage$__AfterBuild__Lsi\uff3ftool_adversaries_Stage(), primary, secondary);
  var highImmigration$1 = $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForBoth__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__s_Option__sci_Vector(this, $s_Lsi\uff3ftool_adversaries_Stage$__HighImmigration__Lsi\uff3ftool_adversaries_Stage(), primary, secondary);
  var build$1 = $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForBoth__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__s_Option__sci_Vector(this, $s_Lsi\uff3ftool_adversaries_Stage$__Build__Lsi\uff3ftool_adversaries_Stage(), primary, secondary);
  var explore$1 = $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForBoth__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__s_Option__sci_Vector(this, $s_Lsi\uff3ftool_adversaries_Stage$__Explore__Lsi\uff3ftool_adversaries_Stage(), primary, secondary);
  var ruleChanges$1 = $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForBoth__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__s_Option__sci_Vector(this, $s_Lsi\uff3ftool_adversaries_Stage$__RuleChange__Lsi\uff3ftool_adversaries_Stage(), primary, secondary);
  return new $c_Lsi\uff3ftool_adversaries_RuleSet(setup$1, afterRavage$1, ravage$1, afterBuild$1, highImmigration$1, build$1, primary.c4.gD, escalation3$1, explore$1, primary.c4.gF, lossConditionSecondary$1, ruleChanges$1);
});
var $d_Lsi\uff3ftool_adversaries_RuleSet$ = new $TypeData().i($c_Lsi\uff3ftool_adversaries_RuleSet$, "si_tool.adversaries.RuleSet$", ({
  kd: 1,
  aI: 1,
  bl: 1
}));
var $n_Lsi\uff3ftool_adversaries_RuleSet$;
function $m_Lsi\uff3ftool_adversaries_RuleSet$() {
  if ((!$n_Lsi\uff3ftool_adversaries_RuleSet$)) {
    $n_Lsi\uff3ftool_adversaries_RuleSet$ = new $c_Lsi\uff3ftool_adversaries_RuleSet$();
  }
  return $n_Lsi\uff3ftool_adversaries_RuleSet$;
}
function $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage() {
  $m_Lsi\uff3ftool_adversaries_Stage$();
  return $t_Lsi\uff3ftool_adversaries_Stage$__Setup;
}
function $s_Lsi\uff3ftool_adversaries_Stage$__AfterRavage__Lsi\uff3ftool_adversaries_Stage() {
  $m_Lsi\uff3ftool_adversaries_Stage$();
  return $t_Lsi\uff3ftool_adversaries_Stage$__AfterRavage;
}
function $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage() {
  $m_Lsi\uff3ftool_adversaries_Stage$();
  return $t_Lsi\uff3ftool_adversaries_Stage$__Ravage;
}
function $s_Lsi\uff3ftool_adversaries_Stage$__AfterBuild__Lsi\uff3ftool_adversaries_Stage() {
  $m_Lsi\uff3ftool_adversaries_Stage$();
  return $t_Lsi\uff3ftool_adversaries_Stage$__AfterBuild;
}
function $s_Lsi\uff3ftool_adversaries_Stage$__Build__Lsi\uff3ftool_adversaries_Stage() {
  $m_Lsi\uff3ftool_adversaries_Stage$();
  return $t_Lsi\uff3ftool_adversaries_Stage$__Build;
}
function $s_Lsi\uff3ftool_adversaries_Stage$__Explore__Lsi\uff3ftool_adversaries_Stage() {
  $m_Lsi\uff3ftool_adversaries_Stage$();
  return $t_Lsi\uff3ftool_adversaries_Stage$__Explore;
}
function $s_Lsi\uff3ftool_adversaries_Stage$__RuleChange__Lsi\uff3ftool_adversaries_Stage() {
  $m_Lsi\uff3ftool_adversaries_Stage$();
  return $t_Lsi\uff3ftool_adversaries_Stage$__RuleChange;
}
function $s_Lsi\uff3ftool_adversaries_Stage$__HighImmigration__Lsi\uff3ftool_adversaries_Stage() {
  $m_Lsi\uff3ftool_adversaries_Stage$();
  return $t_Lsi\uff3ftool_adversaries_Stage$__HighImmigration;
}
/** @constructor */
function $c_Lsi\uff3ftool_adversaries_Stage$() {
  $n_Lsi\uff3ftool_adversaries_Stage$ = this;
  $t_Lsi\uff3ftool_adversaries_Stage$__Setup = new $c_Lsi\uff3ftool_adversaries_Stage$$anon$1("Setup", 0, this);
  $t_Lsi\uff3ftool_adversaries_Stage$__AfterRavage = new $c_Lsi\uff3ftool_adversaries_Stage$$anon$1("AfterRavage", 1, this);
  $t_Lsi\uff3ftool_adversaries_Stage$__Ravage = new $c_Lsi\uff3ftool_adversaries_Stage$$anon$1("Ravage", 2, this);
  $t_Lsi\uff3ftool_adversaries_Stage$__AfterBuild = new $c_Lsi\uff3ftool_adversaries_Stage$$anon$1("AfterBuild", 3, this);
  $t_Lsi\uff3ftool_adversaries_Stage$__Build = new $c_Lsi\uff3ftool_adversaries_Stage$$anon$1("Build", 4, this);
  $t_Lsi\uff3ftool_adversaries_Stage$__Explore = new $c_Lsi\uff3ftool_adversaries_Stage$$anon$1("Explore", 5, this);
  $t_Lsi\uff3ftool_adversaries_Stage$__RuleChange = new $c_Lsi\uff3ftool_adversaries_Stage$$anon$1("RuleChange", 6, this);
  $t_Lsi\uff3ftool_adversaries_Stage$__HighImmigration = new $c_Lsi\uff3ftool_adversaries_Stage$$anon$1("HighImmigration", 7, this);
  $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage();
  $s_Lsi\uff3ftool_adversaries_Stage$__AfterRavage__Lsi\uff3ftool_adversaries_Stage();
  $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage();
  $s_Lsi\uff3ftool_adversaries_Stage$__AfterBuild__Lsi\uff3ftool_adversaries_Stage();
  $s_Lsi\uff3ftool_adversaries_Stage$__Build__Lsi\uff3ftool_adversaries_Stage();
  $s_Lsi\uff3ftool_adversaries_Stage$__Explore__Lsi\uff3ftool_adversaries_Stage();
  $s_Lsi\uff3ftool_adversaries_Stage$__RuleChange__Lsi\uff3ftool_adversaries_Stage();
  $s_Lsi\uff3ftool_adversaries_Stage$__HighImmigration__Lsi\uff3ftool_adversaries_Stage();
}
$p = $c_Lsi\uff3ftool_adversaries_Stage$.prototype = new $h_O();
$p.constructor = $c_Lsi\uff3ftool_adversaries_Stage$;
/** @constructor */
function $h_Lsi\uff3ftool_adversaries_Stage$() {
}
$h_Lsi\uff3ftool_adversaries_Stage$.prototype = $p;
var $d_Lsi\uff3ftool_adversaries_Stage$ = new $TypeData().i($c_Lsi\uff3ftool_adversaries_Stage$, "si_tool.adversaries.Stage$", ({
  kg: 1,
  aI: 1,
  da: 1
}));
var $n_Lsi\uff3ftool_adversaries_Stage$;
function $m_Lsi\uff3ftool_adversaries_Stage$() {
  if ((!$n_Lsi\uff3ftool_adversaries_Stage$)) {
    $n_Lsi\uff3ftool_adversaries_Stage$ = new $c_Lsi\uff3ftool_adversaries_Stage$();
  }
  return $n_Lsi\uff3ftool_adversaries_Stage$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2(parentParam$2, onTryParam$1, outer) {
  this.n6 = null;
  this.kd = null;
  this.n6 = onTryParam$1;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.kd = parentParam$2;
}
$p = $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2;
/** @constructor */
function $h_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2() {
}
$h_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2.prototype = $p;
$p.ix = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.jX = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.h8 = (function(nextValue, transaction) {
  this.n6.bd(nextValue, transaction);
});
var $d_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2 = new $TypeData().i($c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2, "com.raquo.airstream.common.InternalParentObserver$$anon$2", ({
  dz: 1,
  aE: 1,
  dx: 1,
  bo: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNextParam$2, handleObserverErrors$3, onErrorParam$2, outer) {
  this.nb = null;
  this.n9 = false;
  this.kf = null;
  this.na = null;
  this.nb = onNextParam$2;
  this.n9 = handleObserverErrors$3;
  this.kf = onErrorParam$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.na = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $p;
$p.eb = (function() {
  return this.na;
});
$p.e7 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.v = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.ee = (function(nextValue) {
  try {
    this.nb.b(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.n9) {
      this.iw(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cV(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.iw = (function(error) {
  try {
    if (this.kf.cj(error)) {
      this.kf.b(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cV(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cV(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.eR = (function(nextValue) {
  nextValue.cE(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((error) => {
    this.iw(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue$2) => {
    this.ee(nextValue$2);
  })));
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$8 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$8, "com.raquo.airstream.core.Observer$$anon$8", ({
  dE: 1,
  aK: 1,
  Y: 1,
  aX: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTryParam$2, handleObserverErrors$4, outer) {
  this.kg = null;
  this.nc = false;
  this.nd = null;
  this.kg = onTryParam$2;
  this.nc = handleObserverErrors$4;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.nd = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $p;
$p.eb = (function() {
  return this.nd;
});
$p.e7 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.v = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.ee = (function(nextValue) {
  this.eR(new $c_s_util_Success(nextValue));
});
$p.iw = (function(error) {
  this.eR(new $c_s_util_Failure(error));
});
$p.eR = (function(nextValue) {
  try {
    if (this.kg.cj(nextValue)) {
      this.kg.b(nextValue);
    } else {
      nextValue.cE(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cV(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.nc && nextValue.rX())) {
      this.iw(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.cE(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((originalError) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cV(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError));
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cV(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
      })));
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$9 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$9, "com.raquo.airstream.core.Observer$$anon$9", ({
  dF: 1,
  aK: 1,
  Y: 1,
  aX: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.oj = null;
  this.ok = false;
  this.sD = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_api_Laminar$svg$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$svg$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$svg$() {
}
$h_Lcom_raquo_laminar_api_Laminar$svg$.prototype = $p;
$p.wr = (function() {
  if ((!this.ok)) {
    this.oj = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.ok = true;
  }
  return this.oj;
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$svg$, "com.raquo.laminar.api.Laminar$svg$", ({
  eo: 1,
  eL: 1,
  ex: 1,
  ez: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$() {
  this.p = null;
  $n_Lcom_raquo_laminar_api_package$ = this;
  this.p = new $c_Lcom_raquo_laminar_api_package$$anon$1();
}
$p = $c_Lcom_raquo_laminar_api_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$() {
}
$h_Lcom_raquo_laminar_api_package$.prototype = $p;
var $d_Lcom_raquo_laminar_api_package$ = new $TypeData().i($c_Lcom_raquo_laminar_api_package$, "com.raquo.laminar.api.package$", ({
  es: 1,
  bx: 1,
  bC: 1,
  bw: 1
}));
var $n_Lcom_raquo_laminar_api_package$;
function $m_Lcom_raquo_laminar_api_package$() {
  if ((!$n_Lcom_raquo_laminar_api_package$)) {
    $n_Lcom_raquo_laminar_api_package$ = new $c_Lcom_raquo_laminar_api_package$();
  }
  return $n_Lcom_raquo_laminar_api_package$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_DynamicInserter(initialContext, preferStrictMode, insertFn, hooks) {
  this.p7 = null;
  this.p9 = false;
  this.p8 = null;
  this.kB = null;
  this.p7 = initialContext;
  this.p9 = preferStrictMode;
  this.p8 = insertFn;
  this.kB = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.lY = (function(element) {
  var this$1 = this.p7;
  var insertContext = (this$1.c() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().w7(element, this.p9, this.kB) : this$1.E());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((mountContext) => this.p8.lT(insertContext, mountContext.kI, this.kB)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iI(element.cW, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.dw = (function(element) {
  this.lY(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  eO: 1,
  Z: 1,
  eS: 1,
  eP: 1
}));
function $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__($thiz, name, prefixes) {
  $thiz.fU = name;
  $thiz.fV = prefixes;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_StyleProp() {
  this.fU = null;
  this.fV = null;
}
$p = $c_Lcom_raquo_laminar_keys_StyleProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_StyleProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_StyleProp() {
}
$h_Lcom_raquo_laminar_keys_StyleProp.prototype = $p;
$p.gH = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, $dp_toString__T(value), new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, styleProp, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().wi(element, styleProp, value$2);
  })));
});
$p.fu = (function(values, ev) {
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.eS(), new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((el, v, _$1) => {
    $m_Lcom_raquo_laminar_DomApi$().wg(el, this, v);
  })));
});
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.po = null;
  this.kM = null;
  this.po = $m_s_None$();
  this.kM = $m_Lcom_raquo_laminar_DomApi$().u9(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.iE = (function(maybeNextParent) {
  this.po = maybeNextParent;
});
$p.iJ = (function(maybeNextParent) {
});
$p.dw = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gM(parentNode, this, (void 0));
});
$p.aY = (function() {
  return this.kM;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  fk: 1,
  aL: 1,
  Z: 1,
  b5: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.ps = null;
  this.kR = null;
  this.ps = $m_s_None$();
  this.kR = $m_Lcom_raquo_laminar_DomApi$().uc(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.iE = (function(maybeNextParent) {
  this.ps = maybeNextParent;
});
$p.iJ = (function(maybeNextParent) {
});
$p.dw = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gM(parentNode, this, (void 0));
});
$p.wv = (function() {
  return this.kR.data;
});
$p.aY = (function() {
  return this.kR;
});
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_TextNode, "com.raquo.laminar.nodes.TextNode", ({
  fq: 1,
  aL: 1,
  Z: 1,
  b5: 1
}));
function $isArrayOf_Ljava_io_IOException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fx)));
}
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  fB: 1,
  fF: 1,
  r: 1,
  a: 1
}));
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Boolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bI)));
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  bI: 1,
  a: 1,
  aa: 1,
  a5: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  return ((that instanceof $Char) && ($thiz === that.c));
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bK)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  bK: 1,
  a: 1,
  aa: 1,
  a5: 1
}), ((x) => (x instanceof $Char)));
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fI)));
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fJ)));
}
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().i($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
function $ct_jl_StringBuilder__($thiz) {
  $thiz.t = "";
  return $thiz;
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException();
  }
  $thiz.t = str;
  return $thiz;
}
function $ct_jl_StringBuilder__I__($thiz, initialCapacity) {
  $ct_jl_StringBuilder__($thiz);
  if ((initialCapacity < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  return $thiz;
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.t = null;
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.r2 = (function(str) {
  var str$1 = $m_jl_String$().vw(str, 0, str.a.length);
  this.t = (("" + this.t) + str$1);
  return this;
});
$p.v = (function() {
  return this.t;
});
$p.o = (function() {
  return this.t.length;
});
$p.ri = (function(index) {
  return this.t.charCodeAt(index);
});
$p.rP = (function(srcBegin, srcEnd, dst, dstBegin) {
  $f_T__getChars__I__I__AC__I__V(this.t, srcBegin, srcEnd, dst, dstBegin);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  fT: 1,
  b6: 1,
  fy: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fW)));
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fZ)));
}
function $isArrayOf_Ljava_math_BigDecimal(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.g1)));
}
function $isArrayOf_Ljava_math_BigInteger(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.g2)));
}
function $p_ju_Formatter__sendToDest__T__V($thiz, s) {
  if (($thiz.f1 === null)) {
    $thiz.en = (("" + $thiz.en) + s);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__V($thiz, s1, s2) {
  if (($thiz.f1 === null)) {
    $thiz.en = ((("" + $thiz.en) + s1) + s2);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s1, s2]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__T__V($thiz, s1, s2, s3) {
  if (($thiz.f1 === null)) {
    $thiz.en = (($thiz.en + (("" + s1) + s2)) + s3);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s1, s2, s3]);
  }
}
function $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, ss) {
  try {
    var len = (ss.length | 0);
    var i = 0;
    while ((i !== len)) {
      var t = ss[i];
      var this$2 = $thiz.f1;
      this$2.t = (("" + this$2.t) + t);
      i = ((1 + i) | 0);
    }
  } catch (e) {
    if ((!false)) {
      throw e;
    }
  }
}
function $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter($thiz, localeInfo, format, args) {
  if ($thiz.l2) {
    throw new $c_ju_FormatterClosedException();
  }
  var lastImplicitArgIndex = 0;
  var lastArgIndex = 0;
  var fmtLength = format.length;
  var fmtIndex = 0;
  while ((fmtIndex !== fmtLength)) {
    var fromIndex = fmtIndex;
    var nextPercentIndex = (format.indexOf("%", fromIndex) | 0);
    if ((nextPercentIndex < 0)) {
      var beginIndex = fmtIndex;
      $p_ju_Formatter__sendToDest__T__V($thiz, format.substring(beginIndex));
      return $thiz;
    }
    var beginIndex$1 = fmtIndex;
    $p_ju_Formatter__sendToDest__T__V($thiz, format.substring(beginIndex$1, nextPercentIndex));
    var formatSpecifierIndex = ((1 + nextPercentIndex) | 0);
    var re = $m_ju_Formatter$().pF;
    re.lastIndex = formatSpecifierIndex;
    var execResult = re.exec(format);
    if (((execResult === null) || ((execResult.index | 0) !== formatSpecifierIndex))) {
      $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, ((formatSpecifierIndex === fmtLength) ? 37 : format.charCodeAt(formatSpecifierIndex)));
    }
    fmtIndex = (re.lastIndex | 0);
    var index = (((-1) + fmtIndex) | 0);
    var conversion$2 = format.charCodeAt(index);
    var flags = $p_ju_Formatter__parseFlags__T__C__I($thiz, execResult[2], conversion$2);
    var width = $p_ju_Formatter__parsePositiveInt__O__I($thiz, execResult[3]);
    var precision = $p_ju_Formatter__parsePositiveInt__O__I($thiz, execResult[4]);
    if ((width === (-2))) {
      $p_ju_Formatter__throwIllegalFormatWidthException__I__E($thiz, (-2147483648));
    }
    if ((precision === (-2))) {
      $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, (-2147483648));
    }
    if ((conversion$2 === 110)) {
      if ((precision !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if ((width !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatWidthException__I__E($thiz, width);
      }
      if ((flags !== 0)) {
        $thiz.mr(flags);
      }
      $p_ju_Formatter__sendToDest__T__V($thiz, "\n");
    } else if ((conversion$2 === 37)) {
      if ((precision !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.mr(flags);
      }
      if ((((1 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((-2) & flags) !== 0)) {
        $thiz.jT(37, flags, (-2));
      }
      $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, "%");
    } else {
      var conversionLower = (((256 & flags) !== 0) ? (65535 & ((32 + conversion$2) | 0)) : conversion$2);
      var illegalFlags = $m_ju_Formatter$().pE.a[(((-97) + conversionLower) | 0)];
      if (((illegalFlags === (-1)) || (((256 & flags) & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion$2);
      }
      if ((((17 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.mr(flags);
      }
      if (((precision !== (-1)) && ((512 & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if (((flags & illegalFlags) !== 0)) {
        $thiz.jT(conversionLower, flags, illegalFlags);
      }
      if (((128 & flags) !== 0)) {
        var argIndex = lastArgIndex;
      } else {
        var i = $p_ju_Formatter__parsePositiveInt__O__I($thiz, execResult[1]);
        if ((i === (-1))) {
          lastImplicitArgIndex = ((1 + lastImplicitArgIndex) | 0);
          var argIndex = lastImplicitArgIndex;
        } else {
          if ((i <= 0)) {
            $p_ju_Formatter__throwIllegalFormatArgumentIndexException__I__E($thiz, i);
          }
          var argIndex = i;
        }
      }
      if (((argIndex <= 0) || (argIndex > args.a.length))) {
        $p_ju_Formatter__throwMissingFormatArgumentException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      lastArgIndex = argIndex;
      var arg = args.a[(((-1) + argIndex) | 0)];
      if ((((arg === null) && (conversionLower !== 98)) && (conversionLower !== 115))) {
        $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, precision, "null");
      } else {
        $p_ju_Formatter__formatArg__ju_Formatter$LocaleInfo__O__C__I__I__I__V($thiz, localeInfo, arg, conversionLower, flags, width, precision);
      }
    }
  }
  return $thiz;
}
function $p_ju_Formatter__parseFlags__T__C__I($thiz, flags, conversion) {
  var bits = (((conversion >= 65) && (conversion <= 90)) ? 256 : 0);
  var len = flags.length;
  var i = 0;
  while ((i !== len)) {
    var index = i;
    var f = flags.charCodeAt(index);
    switch (f) {
      case 45: {
        var bit = 1;
        break;
      }
      case 35: {
        var bit = 2;
        break;
      }
      case 43: {
        var bit = 4;
        break;
      }
      case 32: {
        var bit = 8;
        break;
      }
      case 48: {
        var bit = 16;
        break;
      }
      case 44: {
        var bit = 32;
        break;
      }
      case 40: {
        var bit = 64;
        break;
      }
      case 60: {
        var bit = 128;
        break;
      }
      default: {
        var bit;
        throw new $c_jl_AssertionError($bC(f));
      }
    }
    if (((bits & bit) !== 0)) {
      $p_ju_Formatter__throwDuplicateFormatFlagsException__C__E($thiz, f);
    }
    bits = (bits | bit);
    i = ((1 + i) | 0);
  }
  return bits;
}
function $p_ju_Formatter__parsePositiveInt__O__I($thiz, capture) {
  if ((capture !== (void 0))) {
    var x = (+parseInt(capture, 10));
    return ((x <= 2.147483647E9) ? $doubleToInt(x) : (-2));
  } else {
    return (-1);
  }
}
function $p_ju_Formatter__formatArg__ju_Formatter$LocaleInfo__O__C__I__I__I__V($thiz, localeInfo, arg, conversionLower, flags, width, precision) {
  switch (conversionLower) {
    case 98: {
      $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, precision, (((arg === false) || (arg === null)) ? "false" : "true"));
      break;
    }
    case 104: {
      var $x_1 = $m_ju_Formatter$RootLocaleInfo$();
      var i = $dp_hashCode__I(arg);
      $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, $x_1, flags, width, precision, (+(i >>> 0.0)).toString(16));
      break;
    }
    case 115: {
      if ($is_ju_Formattable(arg)) {
        var formattableFlags = (((((1 & flags) !== 0) ? 1 : 0) | (((2 & flags) !== 0) ? 4 : 0)) | (((256 & flags) !== 0) ? 2 : 0));
        arg.x8($thiz, formattableFlags, width, precision);
      } else {
        if (((2 & flags) !== 0)) {
          $thiz.jT(conversionLower, flags, 2);
        }
        $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, localeInfo, flags, width, precision, ("" + arg));
      }
      break;
    }
    case 99: {
      if ((arg instanceof $Char)) {
        var $x_2 = ("" + $cToS($uC(arg)));
      } else {
        if ((!$isInt(arg))) {
          $thiz.ir(conversionLower, arg);
        }
        var x3 = (arg | 0);
        if ((!((x3 >= 0) && (x3 <= 1114111)))) {
          $p_ju_Formatter__throwIllegalFormatCodePointException__I__E($thiz, x3);
        }
        var $x_2 = ((x3 < 65536) ? String.fromCharCode(x3) : String.fromCharCode((55296 | (((-64) + (x3 >> 10)) | 0)), (56320 | (1023 & x3))));
      }
      $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, localeInfo, flags, width, (-1), $x_2);
      break;
    }
    case 100: {
      if ($isInt(arg)) {
        var $x_3 = ("" + (arg | 0));
      } else if ((arg instanceof $c_RTLong)) {
        var t = $uJ(arg);
        var $x_3 = $m_RTLong$().mD(t.s, t.w);
      } else {
        if ((!false)) {
          $thiz.ir(conversionLower, arg);
        }
        var $x_3 = arg.v();
      }
      $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, $x_3, "");
      break;
    }
    case 111:
    case 120: {
      var isOctal = (conversionLower === 111);
      var prefix = (((2 & flags) === 0) ? "" : (isOctal ? "0" : (((256 & flags) !== 0) ? "0X" : "0x")));
      if (false) {
        var radix = (isOctal ? 8 : 16);
        $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, arg.k7(radix), prefix);
      } else {
        if ($isInt(arg)) {
          var x2$5 = (arg | 0);
          var str$6 = (isOctal ? (+(x2$5 >>> 0.0)).toString(8) : (+(x2$5 >>> 0.0)).toString(16));
        } else {
          if ((!(arg instanceof $c_RTLong))) {
            $thiz.ir(conversionLower, arg);
          }
          var t$1 = $uJ(arg);
          var lo$1 = t$1.s;
          var hi$1 = t$1.w;
          var str$6 = (isOctal ? $m_jl_Long$().vd(lo$1, hi$1) : $m_jl_Long$().rZ(lo$1, hi$1));
        }
        if (((76 & flags) !== 0)) {
          $thiz.jT(conversionLower, flags, 76);
        }
        $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, prefix, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str$6));
      }
      break;
    }
    case 101:
    case 102:
    case 103: {
      if (((typeof arg) === "number")) {
        var x2$6 = (+arg);
        if (((x2$6 !== x2$6) || ((x2$6 === Infinity) || (x2$6 === (-Infinity))))) {
          $p_ju_Formatter__formatNaNOrInfinite__I__I__D__V($thiz, flags, width, x2$6);
        } else {
          $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().vf(x2$6), flags, precision, conversionLower, localeInfo, width);
        }
      } else if (false) {
        $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().ve(arg), flags, precision, conversionLower, localeInfo, width);
      } else {
        $thiz.ir(conversionLower, arg);
      }
      break;
    }
    case 97: {
      if (((typeof arg) === "number")) {
        $p_ju_Formatter__formatHexFloatingPoint__I__I__I__D__V($thiz, flags, width, precision, (+arg));
      } else {
        $thiz.ir(conversionLower, arg);
      }
      break;
    }
    default: {
      throw new $c_jl_AssertionError((("Unknown conversion '" + $cToS(conversionLower)) + "' was not rejected earlier"));
    }
  }
}
function $p_ju_Formatter__flagsToString__I__T($thiz, flags) {
  return ((((((((((1 & flags) !== 0) ? "-" : "") + (((2 & flags) !== 0) ? "#" : "")) + (((4 & flags) !== 0) ? "+" : "")) + (((8 & flags) !== 0) ? " " : "")) + (((16 & flags) !== 0) ? "0" : "")) + (((32 & flags) !== 0) ? "," : "")) + (((64 & flags) !== 0) ? "(" : "")) + (((128 & flags) !== 0) ? "<" : ""));
}
function $p_ju_Formatter__computerizedScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, digitsAfterDot, forceDecimalSep) {
  var rounded = x.si(((1 + digitsAfterDot) | 0));
  var signStr = (rounded.dD ? "-" : "");
  var intStr = rounded.dE;
  var fractionalDigitCount = (((-1) + intStr.length) | 0);
  var missingZeros = ((digitsAfterDot - fractionalDigitCount) | 0);
  var integerPart = intStr.substring(0, 1);
  var fractionalPart = (("" + intStr.substring(1)) + $m_ju_Formatter$().mq(missingZeros));
  var significandStr = (((fractionalPart === "") && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + fractionalPart));
  var exponent = ((fractionalDigitCount - rounded.dk) | 0);
  var exponentSign = ((exponent < 0) ? "-" : "+");
  var this$2 = ((exponent < 0) ? ((-exponent) | 0) : exponent);
  var exponentAbsStr0 = ("" + this$2);
  var exponentAbsStr = ((exponentAbsStr0.length === 1) ? ("0" + exponentAbsStr0) : exponentAbsStr0);
  return ((((signStr + significandStr) + "e") + exponentSign) + exponentAbsStr);
}
function $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, scale, forceDecimalSep) {
  var rounded = x.wk(scale);
  var signStr = (rounded.dD ? "-" : "");
  var intStr = rounded.dE;
  var intStrLen = intStr.length;
  var minDigits = ((1 + scale) | 0);
  var expandedIntStr = ((intStrLen >= minDigits) ? intStr : (("" + $m_ju_Formatter$().mq(((minDigits - intStrLen) | 0))) + intStr));
  var dotPos = ((expandedIntStr.length - scale) | 0);
  var integerPart = (signStr + expandedIntStr.substring(0, dotPos));
  return (((scale === 0) && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + expandedIntStr.substring(dotPos)));
}
function $p_ju_Formatter__generalScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, precision, forceDecimalSep) {
  var p = ((precision === 0) ? 1 : precision);
  var rounded = x.si(p);
  var orderOfMagnitude = (((((-1) + rounded.dE.length) | 0) - rounded.dk) | 0);
  if (((orderOfMagnitude >= (-4)) && (orderOfMagnitude < p))) {
    var b = (((-1) + ((p - orderOfMagnitude) | 0)) | 0);
    return $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, rounded, ((b < 0) ? 0 : b), forceDecimalSep);
  } else {
    return $p_ju_Formatter__computerizedScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, rounded, (((-1) + p) | 0), forceDecimalSep);
  }
}
function $p_ju_Formatter__formatHexFloatingPoint__I__I__I__D__V($thiz, flags, width, precision, arg) {
  if (((arg !== arg) || ((arg === Infinity) || (arg === (-Infinity))))) {
    $p_ju_Formatter__formatNaNOrInfinite__I__I__D__V($thiz, flags, width, arg);
  } else {
    var t = $m_jl_FloatingPointBits$().uj(arg);
    var lo = t.s;
    var hi = t.w;
    var negative = (hi < 0);
    var hi$1 = (1048575 & hi);
    var biasedExponent = (2047 & ((hi >>> 20) | 0));
    var actualPrecision = ((precision === 0) ? 1 : ((precision > 12) ? (-1) : precision));
    var signStr = (negative ? "-" : (((4 & flags) !== 0) ? "+" : (((8 & flags) !== 0) ? " " : "")));
    if ((biasedExponent === 0)) {
      if (((lo === 0) && (hi$1 === 0))) {
        var x1___1 = "0";
        var x1___2 = $L0;
        var x1___3 = 0;
      } else if ((actualPrecision === (-1))) {
        var x1___1 = "0";
        var x1___2 = new $c_RTLong(lo, hi$1);
        var x1___3 = (-1022);
      } else {
        var leadingZeros = ((hi$1 !== 0) ? (Math.clz32(hi$1) | 0) : ((32 + (Math.clz32(lo) | 0)) | 0));
        var shift = (((-11) + leadingZeros) | 0);
        var x1___1 = "1";
        var x1___2 = new $c_RTLong((((32 & shift) === 0) ? (lo << shift) : 0), (1048575 & (((32 & shift) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - shift) | 0)) | 0) | (hi$1 << shift)) : (lo << shift))));
        var x1___3 = (((-1022) - shift) | 0);
      }
    } else {
      var x1___1 = "1";
      var x1___2 = new $c_RTLong(lo, hi$1);
      var x1___3 = (((-1023) + biasedExponent) | 0);
    }
    var implicitBitStr = x1___1;
    var t$1 = $uJ(x1___2);
    var lo$3 = t$1.s;
    var hi$4 = t$1.w;
    var exponent = (x1___3 | 0);
    var t$2 = new $c_RTLong(lo$3, hi$4);
    var lo$4 = t$2.s;
    var hi$5 = t$2.w;
    if ((actualPrecision === (-1))) {
      var roundedMantissa__lo = lo$4;
      var roundedMantissa__hi = hi$5;
    } else {
      var n = ((52 - (actualPrecision << 2)) | 0);
      var lo$5 = (((32 & n) === 0) ? (1 << n) : 0);
      var hi$6 = (((32 & n) === 0) ? 0 : (1 << n));
      var lo$6 = (((-1) + lo$5) | 0);
      var hi$7 = ((lo$6 !== (-1)) ? hi$6 : (((-1) + hi$6) | 0));
      var lo$7 = (((lo$5 >>> 1) | 0) | (hi$6 << 31));
      var hi$8 = (hi$6 >> 1);
      var lo$8 = (~lo$6);
      var hi$9 = (~hi$7);
      var lo$9 = (lo$4 & lo$8);
      var hi$10 = (hi$5 & hi$9);
      var lo$10 = (lo$4 & lo$6);
      var hi$11 = (hi$5 & hi$7);
      if (((hi$11 === hi$8) ? (((-2147483648) ^ lo$10) < ((-2147483648) ^ lo$7)) : (hi$11 < hi$8))) {
        var roundedMantissa__lo = lo$9;
        var roundedMantissa__hi = hi$10;
      } else if (((hi$11 === hi$8) ? (((-2147483648) ^ lo$10) > ((-2147483648) ^ lo$7)) : (hi$11 > hi$8))) {
        var lo$11 = ((lo$9 + lo$5) | 0);
        var roundedMantissa__lo = lo$11;
        var roundedMantissa__hi = ((((-2147483648) ^ lo$11) < ((-2147483648) ^ lo$9)) ? ((1 + ((hi$10 + hi$6) | 0)) | 0) : ((hi$10 + hi$6) | 0));
      } else {
        var lo$12 = (lo$9 & lo$5);
        var hi$13 = (hi$10 & hi$6);
        if (((lo$12 === 0) && (hi$13 === 0))) {
          var roundedMantissa__lo = lo$9;
          var roundedMantissa__hi = hi$10;
        } else {
          var lo$13 = ((lo$9 + lo$5) | 0);
          var roundedMantissa__lo = lo$13;
          var roundedMantissa__hi = ((((-2147483648) ^ lo$13) < ((-2147483648) ^ lo$9)) ? ((1 + ((hi$10 + hi$6) | 0)) | 0) : ((hi$10 + hi$6) | 0));
        }
      }
    }
    var baseStr = $m_jl_Long$().rZ(roundedMantissa__lo, roundedMantissa__hi);
    var beginIndex = baseStr.length;
    var padded = (("" + "0000000000000".substring(beginIndex)) + baseStr);
    $m_ju_Formatter$();
    if ((!(padded.length === 13))) {
      throw new $c_jl_AssertionError("padded mantissa does not have the right number of bits");
    }
    var minLength = ((actualPrecision < 1) ? 1 : actualPrecision);
    var len = padded.length;
    while (((len > minLength) && (padded.charCodeAt((((-1) + len) | 0)) === 48))) {
      len = (((-1) + len) | 0);
    }
    var endIndex = len;
    var mantissaStr = padded.substring(0, endIndex);
    var exponentStr = ("" + exponent);
    $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, (signStr + (((256 & flags) !== 0) ? "0X" : "0x")), $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, ((((implicitBitStr + ".") + mantissaStr) + "p") + exponentStr)));
  }
}
function $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, localeInfo, flags, width, precision, str) {
  $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyUpperCase__ju_Formatter$LocaleInfo__I__T__T($thiz, localeInfo, flags, (((precision < 0) || (precision >= str.length)) ? str : str.substring(0, precision))));
}
function $p_ju_Formatter__formatNaNOrInfinite__I__I__D__V($thiz, flags, width, x) {
  $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, ((x !== x) ? "NaN" : ((x > 0.0) ? (((4 & flags) !== 0) ? "+Infinity" : (((8 & flags) !== 0) ? " Infinity" : "Infinity")) : (((64 & flags) !== 0) ? "(Infinity)" : "-Infinity")))));
}
function $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, str, basePrefix) {
  if (((str.length >= width) && ((110 & flags) === 0))) {
    $p_ju_Formatter__sendToDest__T__V($thiz, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str));
  } else if (((126 & flags) === 0)) {
    $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str));
  } else {
    if ((str.charCodeAt(0) !== 45)) {
      if (((4 & flags) !== 0)) {
        var x1___1 = "+";
        var x1___2 = str;
      } else if (((8 & flags) !== 0)) {
        var x1___1 = " ";
        var x1___2 = str;
      } else {
        var x1___1 = "";
        var x1___2 = str;
      }
    } else if (((64 & flags) !== 0)) {
      var x1___1 = "(";
      var x1___2 = (str.substring(1) + ")");
    } else {
      var x1___1 = "-";
      var x1___2 = str.substring(1);
    }
    var numberPrefix = x1___1;
    var rest0 = x1___2;
    $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, (("" + numberPrefix) + basePrefix), $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, (((32 & flags) !== 0) ? $p_ju_Formatter__insertGroupingCommas__ju_Formatter$LocaleInfo__T__T($thiz, localeInfo, rest0) : rest0)));
  }
}
function $p_ju_Formatter__insertGroupingCommas__ju_Formatter$LocaleInfo__T__T($thiz, localeInfo, s) {
  var len = s.length;
  var index = 0;
  while (true) {
    if ((index !== len)) {
      var index$1 = index;
      var c = s.charCodeAt(index$1);
      var $x_1 = ((c >= 48) && (c <= 57));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      index = ((1 + index) | 0);
    } else {
      break;
    }
  }
  index = (((-3) + index) | 0);
  if ((index <= 0)) {
    return s;
  } else {
    var beginIndex = index;
    var result = s.substring(beginIndex);
    while ((index > 3)) {
      var next = (((-3) + index) | 0);
      var endIndex = index;
      result = ((s.substring(next, endIndex) + ",") + result);
      index = next;
    }
    var endIndex$1 = index;
    return ((s.substring(0, endIndex$1) + ",") + result);
  }
}
function $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str) {
  return (((256 & flags) !== 0) ? str.toUpperCase() : str);
}
function $p_ju_Formatter__applyUpperCase__ju_Formatter$LocaleInfo__I__T__T($thiz, localeInfo, flags, str) {
  return (((256 & flags) !== 0) ? str.toUpperCase() : str);
}
function $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, str) {
  var len = str.length;
  if ((len >= width)) {
    $p_ju_Formatter__sendToDest__T__V($thiz, str);
  } else if (((1 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, str, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)));
  } else {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)), str);
  }
}
function $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, prefix, str) {
  var len = ((prefix.length + str.length) | 0);
  if ((len >= width)) {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, prefix, str);
  } else if (((16 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, prefix, $p_ju_Formatter__strRepeat__T__I__T($thiz, "0", ((width - len) | 0)), str);
  } else if (((1 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, prefix, str, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)));
  } else {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)), prefix, str);
  }
}
function $p_ju_Formatter__strRepeat__T__I__T($thiz, s, times) {
  var result = "";
  var i = 0;
  while ((i !== times)) {
    result = (("" + result) + s);
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_ju_Formatter__throwDuplicateFormatFlagsException__C__E($thiz, flag) {
  throw new $c_ju_DuplicateFormatFlagsException(("" + $cToS(flag)));
}
function $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion) {
  throw new $c_ju_UnknownFormatConversionException(("" + $cToS(conversion)));
}
function $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision) {
  throw new $c_ju_IllegalFormatPrecisionException(precision);
}
function $p_ju_Formatter__throwIllegalFormatWidthException__I__E($thiz, width) {
  throw new $c_ju_IllegalFormatWidthException(width);
}
function $p_ju_Formatter__throwIllegalFormatArgumentIndexException__I__E($thiz, index) {
  throw new $c_ju_IllegalFormatArgumentIndexException(((index === 0) ? "Illegal format argument index = 0" : "Format argument index: (not representable as int)"));
}
function $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, fullFormatSpecifier) {
  throw new $c_ju_MissingFormatWidthException(fullFormatSpecifier);
}
function $p_ju_Formatter__throwMissingFormatArgumentException__T__E($thiz, fullFormatSpecifier) {
  throw new $c_ju_MissingFormatArgumentException(fullFormatSpecifier);
}
function $p_ju_Formatter__throwIllegalFormatCodePointException__I__E($thiz, arg) {
  throw new $c_ju_IllegalFormatCodePointException(arg);
}
function $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult$1) {
  return ("%" + execResult$1[0]);
}
function $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, x, flags$1, precision$1, conversionLower$1, localeInfo$1, width$1) {
  var forceDecimalSep = ((2 & flags$1) !== 0);
  var actualPrecision = ((precision$1 >= 0) ? precision$1 : 6);
  switch (conversionLower$1) {
    case 101: {
      var $x_1 = $p_ju_Formatter__computerizedScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, actualPrecision, forceDecimalSep);
      break;
    }
    case 102: {
      var $x_1 = $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, actualPrecision, forceDecimalSep);
      break;
    }
    default: {
      var $x_1 = $p_ju_Formatter__generalScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, actualPrecision, forceDecimalSep);
    }
  }
  $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo$1, flags$1, width$1, $x_1, "");
}
function $ct_ju_Formatter__jl_Appendable__ju_Formatter$LocaleInfo__($thiz, dest, formatterLocaleInfo) {
  $thiz.f1 = dest;
  $thiz.pD = formatterLocaleInfo;
  $thiz.en = "";
  $thiz.l2 = false;
  return $thiz;
}
function $ct_ju_Formatter__($thiz) {
  $ct_ju_Formatter__jl_Appendable__ju_Formatter$LocaleInfo__($thiz, null, $m_ju_Formatter$RootLocaleInfo$());
  return $thiz;
}
/** @constructor */
function $c_ju_Formatter() {
  this.f1 = null;
  this.pD = null;
  this.en = null;
  this.l2 = false;
}
$p = $c_ju_Formatter.prototype = new $h_O();
$p.constructor = $c_ju_Formatter;
/** @constructor */
function $h_ju_Formatter() {
}
$h_ju_Formatter.prototype = $p;
$p.uD = (function(format, args) {
  return $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter(this, this.pD, format, args);
});
$p.v = (function() {
  if (this.l2) {
    throw new $c_ju_FormatterClosedException();
  }
  return ((this.f1 === null) ? this.en : this.f1.t);
});
$p.mr = (function(flags) {
  throw new $c_ju_IllegalFormatFlagsException($p_ju_Formatter__flagsToString__I__T(this, flags));
});
$p.jT = (function(conversionLower, flags, illegalFlags) {
  throw new $c_ju_FormatFlagsConversionMismatchException($p_ju_Formatter__flagsToString__I__T(this, (flags & illegalFlags)), conversionLower);
});
$p.ir = (function(conversionLower, arg) {
  throw new $c_ju_IllegalFormatConversionException(conversionLower, $objectGetClass(arg));
});
var $d_ju_Formatter = new $TypeData().i($c_ju_Formatter, "java.util.Formatter", ({
  g8: 1,
  fv: 1,
  fC: 1,
  fw: 1
}));
/** @constructor */
function $c_s_$eq$colon$eq() {
}
$p = $c_s_$eq$colon$eq.prototype = new $h_s_$less$colon$less();
$p.constructor = $c_s_$eq$colon$eq;
/** @constructor */
function $h_s_$eq$colon$eq() {
}
$h_s_$eq$colon$eq.prototype = $p;
/** @constructor */
function $c_s_PartialFunction$$anon$1() {
}
$p = $c_s_PartialFunction$$anon$1.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$$anon$1;
/** @constructor */
function $h_s_PartialFunction$$anon$1() {
}
$h_s_PartialFunction$$anon$1.prototype = $p;
$p.c5 = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.v = (function() {
  return "<function1>";
});
$p.cj = (function(x) {
  return false;
});
$p.lU = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.b = (function(v1) {
  this.lU(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  gD: 1,
  j: 1,
  i: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterator() {
}
$p = $c_sc_AbstractIterator.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $p;
$p.e = (function() {
  return this;
});
$p.gS = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.d9 = (function(n) {
  return this.ha(n, (-1));
});
$p.ha = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.v = (function() {
  return "<iterator>";
});
$p.fy = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.iC = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op);
});
$p.bZ = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.eN = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fL = (function() {
  return $m_sci_Nil$().z(this);
});
$p.k5 = (function(evidence$2) {
  return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2);
});
$p.q = (function() {
  return (-1);
});
/** @constructor */
function $c_sc_Iterable$() {
  this.gm = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_Iterable$());
}
$p = $c_sc_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sc_Iterable$;
/** @constructor */
function $h_sc_Iterable$() {
}
$h_sc_Iterable$.prototype = $p;
var $d_sc_Iterable$ = new $TypeData().i($c_sc_Iterable$, "scala.collection.Iterable$", ({
  h1: 1,
  ca: 1,
  H: 1,
  a: 1
}));
var $n_sc_Iterable$;
function $m_sc_Iterable$() {
  if ((!$n_sc_Iterable$)) {
    $n_sc_Iterable$ = new $c_sc_Iterable$();
  }
  return $n_sc_Iterable$;
}
/** @constructor */
function $c_sc_Map$() {
  this.li = null;
  this.q5 = null;
  this.q6 = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.q5 = $ct_O__(new $c_O());
  this.q6 = new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sc_Map$().q5));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  hd: 1,
  he: 1,
  ba: 1,
  a: 1
}));
var $n_sc_Map$;
function $m_sc_Map$() {
  if ((!$n_sc_Map$)) {
    $n_sc_Map$ = new $c_sc_Map$();
  }
  return $n_sc_Map$;
}
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.eq = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.eq = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.r7 = (function(elems) {
  return this.eq.e5(elems);
});
$p.um = (function() {
  return this.eq.bO();
});
$p.jN = (function(it) {
  return this.eq.am(it);
});
$p.at = (function() {
  return this.eq.at();
});
$p.am = (function(source) {
  return this.jN(source);
});
$p.bO = (function() {
  return this.um();
});
$p.e5 = (function(elems) {
  return this.r7(elems);
});
function $f_sc_SeqOps__appended__O__O($thiz, elem) {
  return $thiz.aE().am($ct_sc_View$Appended__sc_IterableOps__O__(new $c_sc_View$Appended(), $thiz, elem));
}
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cR(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => x$2$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.gX(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.be(idx) > 0));
}
function $f_sc_SeqOps__indexOf__O__I__I($thiz, elem, from) {
  return $thiz.fC(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sr_BoxesRunTime$().i(elem, x$1$2$2))), from);
}
function $f_sc_SeqOps__contains__O__Z($thiz, elem) {
  return $thiz.jM(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$3$2$2) => $m_sr_BoxesRunTime$().i(x$3$2$2, elem))));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.be(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.q();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.q();
    var $x_1 = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize));
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.e(), that);
  } else {
    return false;
  }
}
function $f_sc_StrictOptimizedIterableOps__map__F1__O($thiz, f) {
  var b = $thiz.aE().at();
  var it = $thiz.e();
  while (it.l()) {
    b.as(f.b(it.d()));
  }
  return b.aM();
}
function $f_sc_StrictOptimizedIterableOps__flatMap__F1__O($thiz, f) {
  var b = $thiz.aE().at();
  var it = $thiz.e();
  while (it.l()) {
    b.b7(f.b(it.d()));
  }
  return b.aM();
}
function $f_sc_StrictOptimizedIterableOps__collect__s_PartialFunction__O($thiz, pf) {
  var b = $thiz.aE().at();
  var marker = $m_sr_Statics$PFMarker$();
  var it = $thiz.e();
  while (it.l()) {
    var elem = it.d();
    var v = pf.c5(elem, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((marker) => ((x$2$2) => marker))(marker)));
    if ((marker !== v)) {
      b.as(v);
    }
  }
  return b.aM();
}
function $f_sc_StrictOptimizedIterableOps__flatten__F1__O($thiz, toIterableOnce) {
  var b = $thiz.aE().at();
  var it = $thiz.e();
  while (it.l()) {
    b.b7(toIterableOnce.b(it.d()));
  }
  return b.aM();
}
function $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O($thiz, that) {
  var b = $thiz.aE().at();
  var it1 = $thiz.e();
  var it2 = that.e();
  while ((it1.l() && it2.l())) {
    b.as(new $c_T2(it1.d(), it2.d()));
  }
  return b.aM();
}
/** @constructor */
function $c_sci_Iterable$() {
  this.gm = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.uI = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.am.call(this, it));
});
$p.am = (function(it) {
  return this.uI(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  hD: 1,
  ca: 1,
  H: 1,
  a: 1
}));
var $n_sci_Iterable$;
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$();
  }
  return $n_sci_Iterable$;
}
/** @constructor */
function $c_sci_LazyList$() {
  this.f9 = null;
  $n_sci_LazyList$ = this;
  this.f9 = new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$()))).rD();
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.e5 = (function(elems) {
  return this.jO(elems);
});
$p.sj = (function(ll, f) {
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((restRef) => (() => {
    var it = new $c_sr_ObjectRef(null);
    var itHasNext = false;
    var rest = new $c_sr_ObjectRef(restRef.K);
    while (((!itHasNext) && (!rest.K.c()))) {
      it.K = f.b(rest.K.B().n()).e();
      itHasNext = it.K.l();
      if ((!itHasNext)) {
        rest.K = rest.K.B().aN();
        restRef.K = rest.K;
      }
    }
    if (itHasNext) {
      var head = it.K.d();
      rest.K = rest.K.B().aN();
      restRef.K = rest.K;
      $m_sci_LazyList$();
      return new $c_sci_LazyList$State$Cons(head, ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().mM(it.K, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().sj(rest.K, f).B()))))))));
    } else {
      return $m_sci_LazyList$State$Empty$();
    }
  }))(new $c_sr_ObjectRef(ll))));
});
$p.wc = (function(ll, n) {
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((restRef, iRef) => (() => {
    var rest = restRef.K;
    var i = iRef.b4;
    while (((i > 0) && (!rest.c()))) {
      rest = rest.B().aN();
      restRef.K = rest;
      i = (((-1) + i) | 0);
      iRef.b4 = i;
    }
    return rest.B();
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.jO = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.q() === 0) ? this.f9 : new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().mL(coll.e()))))));
});
$p.mM = (function(it, suffix) {
  return (it.l() ? new $c_sci_LazyList$State$Cons(it.d(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().mM(it, suffix))))) : suffix.L());
});
$p.mL = (function(it) {
  return (it.l() ? new $c_sci_LazyList$State$Cons(it.d(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().mL(it))))) : $m_sci_LazyList$State$Empty$());
});
$p.at = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.bO = (function() {
  return this.f9;
});
$p.am = (function(source) {
  return this.jO(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  hE: 1,
  a1: 1,
  H: 1,
  a: 1
}));
var $n_sci_LazyList$;
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$();
  }
  return $n_sci_LazyList$;
}
/** @constructor */
function $c_sci_WrappedString$() {
}
$p = $c_sci_WrappedString$.prototype = new $h_O();
$p.constructor = $c_sci_WrappedString$;
/** @constructor */
function $h_sci_WrappedString$() {
}
$h_sci_WrappedString$.prototype = $p;
$p.rL = (function(it) {
  var b = this.at();
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(b, it, 0);
  b.b7(it);
  return b.aM();
});
$p.at = (function() {
  return new $c_scm_Builder$$anon$1($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => new $c_sci_WrappedString(x$2$2))));
});
var $d_sci_WrappedString$ = new $TypeData().i($c_sci_WrappedString$, "scala.collection.immutable.WrappedString$", ({
  ir: 1,
  hf: 1,
  gX: 1,
  a: 1
}));
var $n_sci_WrappedString$;
function $m_sci_WrappedString$() {
  if ((!$n_sci_WrappedString$)) {
    $n_sci_WrappedString$ = new $c_sci_WrappedString$();
  }
  return $n_sci_WrappedString$;
}
/** @constructor */
function $c_scm_Builder$$anon$1(outer, f$1) {
  this.hR = null;
  this.qt = null;
  this.hR = outer;
  this.qt = f$1;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.tl = (function(x) {
  this.hR.as(x);
  return this;
});
$p.t8 = (function(xs) {
  this.hR.b7(xs);
  return this;
});
$p.bt = (function(size) {
  this.hR.bt(size);
});
$p.aM = (function() {
  return this.qt.b(this.hR.aM());
});
$p.b7 = (function(elems) {
  return this.t8(elems);
});
$p.as = (function(elem) {
  return this.tl(elem);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  iA: 1,
  L: 1,
  J: 1,
  I: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.eH = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.eH = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.bt = (function(size) {
});
$p.tm = (function(elem) {
  this.eH.as(elem);
  return this;
});
$p.t9 = (function(xs) {
  this.eH.b7(xs);
  return this;
});
$p.b7 = (function(elems) {
  return this.t9(elems);
});
$p.as = (function(elem) {
  return this.tm(elem);
});
$p.aM = (function() {
  return this.eH;
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  bj: 1,
  L: 1,
  J: 1,
  I: 1
}));
function $f_sr_EnumValue__productElement__I__O($thiz, n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
}
/** @constructor */
function $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(f) {
  this.qE = null;
  this.qE = f;
}
$p = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = new $h_sjsr_AnonFunction0();
$p.constructor = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1() {
}
$h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = $p;
$p.L = (function() {
  return (0, this.qE)();
});
var $d_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1 = new $TypeData().i($c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1, "scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1", ({
  jT: 1,
  jS: 1,
  db: 1,
  b8: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(f) {
  this.qF = null;
  this.qF = f;
}
$p = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = new $h_sjsr_AnonFunction1();
$p.constructor = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab() {
}
$h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = $p;
$p.b = (function(x0) {
  return (0, this.qF)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab = new $TypeData().i($c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab, "scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab", ({
  jV: 1,
  jU: 1,
  bm: 1,
  i: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(f) {
  this.qG = null;
  this.qG = f;
}
$p = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = new $h_sjsr_AnonFunction2();
$p.constructor = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2() {
}
$h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = $p;
$p.bd = (function(x0, x1) {
  return (0, this.qG)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2 = new $TypeData().i($c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2, "scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2", ({
  jX: 1,
  jW: 1,
  dc: 1,
  b9: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(f) {
  this.qH = null;
  this.qH = f;
}
$p = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = new $h_sjsr_AnonFunction3();
$p.constructor = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491;
/** @constructor */
function $h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491() {
}
$h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = $p;
$p.lT = (function(x0, x1, x2) {
  return (0, this.qH)(x0, x1, x2);
});
var $d_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491 = new $TypeData().i($c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491, "scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491", ({
  jZ: 1,
  jY: 1,
  jw: 1,
  gv: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(f) {
  this.qI = null;
  this.qI = f;
}
$p = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = new $h_sjsr_AnonFunction4();
$p.constructor = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b;
/** @constructor */
function $h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b() {
}
$h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = $p;
$p.tw = (function(x0, x1, x2, x3) {
  return (0, this.qI)(x0, x1, x2, x3);
});
var $d_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b = new $TypeData().i($c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b, "scala.scalajs.runtime.AnonFunction4.$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b", ({
  k1: 1,
  k0: 1,
  jx: 1,
  gw: 1
}));
/** @constructor */
function $c_s_util_Try() {
}
$p = $c_s_util_Try.prototype = new $h_O();
$p.constructor = $c_s_util_Try;
/** @constructor */
function $h_s_util_Try() {
}
$h_s_util_Try.prototype = $p;
/** @constructor */
function $c_Lsi\uff3ftool_SIAdversaryTool$AdversarySelector(adversary, level) {
  this.c4 = null;
  this.cg = 0;
  this.c4 = adversary;
  this.cg = level;
}
$p = $c_Lsi\uff3ftool_SIAdversaryTool$AdversarySelector.prototype = new $h_O();
$p.constructor = $c_Lsi\uff3ftool_SIAdversaryTool$AdversarySelector;
/** @constructor */
function $h_Lsi\uff3ftool_SIAdversaryTool$AdversarySelector() {
}
$h_Lsi\uff3ftool_SIAdversaryTool$AdversarySelector.prototype = $p;
$p.aX = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().j(acc, $f_T__hashCode__I("AdversarySelector"));
  acc = $m_sr_Statics$().j(acc, $m_sr_Statics$().R(this.c4));
  acc = $m_sr_Statics$().j(acc, this.cg);
  return $m_sr_Statics$().H(acc, 2);
});
$p.k = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsi\uff3ftool_SIAdversaryTool$AdversarySelector)) {
    if ((this.cg === x$0.cg)) {
      var x = this.c4;
      var x$2 = x$0.c4;
      return ((x === null) ? (x$2 === null) : x.k(x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().fv(this);
});
$p.aJ = (function() {
  return 2;
});
$p.aL = (function() {
  return "AdversarySelector";
});
$p.aK = (function(n) {
  if ((n === 0)) {
    return this.c4;
  }
  if ((n === 1)) {
    return this.cg;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_Lsi\uff3ftool_SIAdversaryTool$AdversarySelector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.di)));
}
var $d_Lsi\uff3ftool_SIAdversaryTool$AdversarySelector = new $TypeData().i($c_Lsi\uff3ftool_SIAdversaryTool$AdversarySelector, "si_tool.SIAdversaryTool$AdversarySelector", ({
  di: 1,
  d: 1,
  x: 1,
  a: 1
}));
/** @constructor */
function $c_Lsi\uff3ftool_adversaries_Adversary(name, rules, lossCondition, escalation, fear, invaderCardMapping) {
  this.d4 = null;
  this.hZ = null;
  this.gF = null;
  this.gD = null;
  this.gE = null;
  this.fp = null;
  this.d4 = name;
  this.hZ = rules;
  this.gF = lossCondition;
  this.gD = escalation;
  this.gE = fear;
  this.fp = invaderCardMapping;
}
$p = $c_Lsi\uff3ftool_adversaries_Adversary.prototype = new $h_O();
$p.constructor = $c_Lsi\uff3ftool_adversaries_Adversary;
/** @constructor */
function $h_Lsi\uff3ftool_adversaries_Adversary() {
}
$h_Lsi\uff3ftool_adversaries_Adversary.prototype = $p;
$p.aX = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.k = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsi\uff3ftool_adversaries_Adversary)) {
    if ((this.d4 === x$0.d4)) {
      var x = this.hZ;
      var x$2 = x$0.hZ;
      var $x_3 = ((x === null) ? (x$2 === null) : x.k(x$2));
    } else {
      var $x_3 = false;
    }
    if ($x_3) {
      var x$3 = this.gF;
      var x$4 = x$0.gF;
      var $x_2 = ((x$3 === null) ? (x$4 === null) : x$3.k(x$4));
    } else {
      var $x_2 = false;
    }
    if (($x_2 && (this.gD === x$0.gD))) {
      var x$5 = this.gE;
      var x$6 = x$0.gE;
      var $x_1 = ((x$5 === null) ? (x$6 === null) : x$5.k(x$6));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$7 = this.fp;
      var x$8 = x$0.fp;
      return (x$7 === x$8);
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().fv(this);
});
$p.aJ = (function() {
  return 6;
});
$p.aL = (function() {
  return "Adversary";
});
$p.aK = (function(n) {
  switch (n) {
    case 0: {
      return this.d4;
      break;
    }
    case 1: {
      return this.hZ;
      break;
    }
    case 2: {
      return this.gF;
      break;
    }
    case 3: {
      return this.gD;
      break;
    }
    case 4: {
      return this.gE;
      break;
    }
    case 5: {
      return this.fp;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Lsi\uff3ftool_adversaries_Adversary(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dj)));
}
var $d_Lsi\uff3ftool_adversaries_Adversary = new $TypeData().i($c_Lsi\uff3ftool_adversaries_Adversary, "si_tool.adversaries.Adversary", ({
  dj: 1,
  d: 1,
  x: 1,
  a: 1
}));
/** @constructor */
function $c_Lsi\uff3ftool_adversaries_Rule(level, stage, text, removeAboveLevel) {
  this.fq = 0;
  this.fs = null;
  this.gG = null;
  this.fr = null;
  this.fq = level;
  this.fs = stage;
  this.gG = text;
  this.fr = removeAboveLevel;
}
$p = $c_Lsi\uff3ftool_adversaries_Rule.prototype = new $h_O();
$p.constructor = $c_Lsi\uff3ftool_adversaries_Rule;
/** @constructor */
function $h_Lsi\uff3ftool_adversaries_Rule() {
}
$h_Lsi\uff3ftool_adversaries_Rule.prototype = $p;
$p.aX = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().j(acc, $f_T__hashCode__I("Rule"));
  acc = $m_sr_Statics$().j(acc, this.fq);
  acc = $m_sr_Statics$().j(acc, $m_sr_Statics$().R(this.fs));
  acc = $m_sr_Statics$().j(acc, $m_sr_Statics$().R(this.gG));
  acc = $m_sr_Statics$().j(acc, $m_sr_Statics$().R(this.fr));
  return $m_sr_Statics$().H(acc, 4);
});
$p.k = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsi\uff3ftool_adversaries_Rule)) {
    if ((this.fq === x$0.fq)) {
      var x = this.fs;
      var x$2 = x$0.fs;
      var $x_1 = (x === x$2);
    } else {
      var $x_1 = false;
    }
    if (($x_1 && (this.gG === x$0.gG))) {
      var x$3 = this.fr;
      var x$4 = x$0.fr;
      return ((x$3 === null) ? (x$4 === null) : x$3.k(x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().fv(this);
});
$p.aJ = (function() {
  return 4;
});
$p.aL = (function() {
  return "Rule";
});
$p.aK = (function(n) {
  switch (n) {
    case 0: {
      return this.fq;
      break;
    }
    case 1: {
      return this.fs;
      break;
    }
    case 2: {
      return this.gG;
      break;
    }
    case 3: {
      return this.fr;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Lsi\uff3ftool_adversaries_Rule(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dk)));
}
var $d_Lsi\uff3ftool_adversaries_Rule = new $TypeData().i($c_Lsi\uff3ftool_adversaries_Rule, "si_tool.adversaries.Rule", ({
  dk: 1,
  d: 1,
  x: 1,
  a: 1
}));
/** @constructor */
function $c_Lsi\uff3ftool_adversaries_RuleSet(setup, afterRavage, ravage, afterBuild, highImmigration, build, escalation2, escalation3, explore, lossConditionPrimary, lossConditionSecondary, ruleChanges) {
  this.i6 = null;
  this.i1 = null;
  this.i4 = null;
  this.i0 = null;
  this.i3 = null;
  this.i2 = null;
  this.jA = null;
  this.jB = null;
  this.jC = null;
  this.jD = null;
  this.jE = null;
  this.i5 = null;
  this.qS = null;
  this.qR = null;
  this.i6 = setup;
  this.i1 = afterRavage;
  this.i4 = ravage;
  this.i0 = afterBuild;
  this.i3 = highImmigration;
  this.i2 = build;
  this.jA = escalation2;
  this.jB = escalation3;
  this.jC = explore;
  this.jD = lossConditionPrimary;
  this.jE = lossConditionSecondary;
  this.i5 = ruleChanges;
  this.qS = $m_s_Option$().jY(lossConditionPrimary).hb().jI($m_s_Option$().jY(lossConditionSecondary).hb());
  this.qR = explore.T(("Stage 2 Escalation: " + escalation2)).gT($m_s_Option$().jY(escalation3).hb().M(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e3) => ("Stage 3 Escalation: " + e3)))));
}
$p = $c_Lsi\uff3ftool_adversaries_RuleSet.prototype = new $h_O();
$p.constructor = $c_Lsi\uff3ftool_adversaries_RuleSet;
/** @constructor */
function $h_Lsi\uff3ftool_adversaries_RuleSet() {
}
$h_Lsi\uff3ftool_adversaries_RuleSet.prototype = $p;
$p.aX = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.k = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsi\uff3ftool_adversaries_RuleSet)) {
    var x = this.i6;
    var x$2 = x$0.i6;
    if (((x === null) ? (x$2 === null) : x.k(x$2))) {
      var x$3 = this.i1;
      var x$4 = x$0.i1;
      var $x_9 = ((x$3 === null) ? (x$4 === null) : x$3.k(x$4));
    } else {
      var $x_9 = false;
    }
    if ($x_9) {
      var x$5 = this.i4;
      var x$6 = x$0.i4;
      var $x_8 = ((x$5 === null) ? (x$6 === null) : x$5.k(x$6));
    } else {
      var $x_8 = false;
    }
    if ($x_8) {
      var x$7 = this.i0;
      var x$8 = x$0.i0;
      var $x_7 = ((x$7 === null) ? (x$8 === null) : x$7.k(x$8));
    } else {
      var $x_7 = false;
    }
    if ($x_7) {
      var x$9 = this.i3;
      var x$10 = x$0.i3;
      var $x_6 = ((x$9 === null) ? (x$10 === null) : x$9.k(x$10));
    } else {
      var $x_6 = false;
    }
    if ($x_6) {
      var x$11 = this.i2;
      var x$12 = x$0.i2;
      var $x_5 = ((x$11 === null) ? (x$12 === null) : x$11.k(x$12));
    } else {
      var $x_5 = false;
    }
    if (($x_5 && (this.jA === x$0.jA))) {
      var x$13 = this.jB;
      var x$14 = x$0.jB;
      var $x_4 = ((x$13 === null) ? (x$14 === null) : x$13.k(x$14));
    } else {
      var $x_4 = false;
    }
    if ($x_4) {
      var x$15 = this.jC;
      var x$16 = x$0.jC;
      var $x_3 = ((x$15 === null) ? (x$16 === null) : x$15.k(x$16));
    } else {
      var $x_3 = false;
    }
    if ($x_3) {
      var x$17 = this.jD;
      var x$18 = x$0.jD;
      var $x_2 = ((x$17 === null) ? (x$18 === null) : x$17.k(x$18));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$19 = this.jE;
      var x$20 = x$0.jE;
      var $x_1 = ((x$19 === null) ? (x$20 === null) : x$19.k(x$20));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$21 = this.i5;
      var x$22 = x$0.i5;
      return ((x$21 === null) ? (x$22 === null) : x$21.k(x$22));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().fv(this);
});
$p.aJ = (function() {
  return 12;
});
$p.aL = (function() {
  return "RuleSet";
});
$p.aK = (function(n) {
  switch (n) {
    case 0: {
      return this.i6;
      break;
    }
    case 1: {
      return this.i1;
      break;
    }
    case 2: {
      return this.i4;
      break;
    }
    case 3: {
      return this.i0;
      break;
    }
    case 4: {
      return this.i3;
      break;
    }
    case 5: {
      return this.i2;
      break;
    }
    case 6: {
      return this.jA;
      break;
    }
    case 7: {
      return this.jB;
      break;
    }
    case 8: {
      return this.jC;
      break;
    }
    case 9: {
      return this.jD;
      break;
    }
    case 10: {
      return this.jE;
      break;
    }
    case 11: {
      return this.i5;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Lsi\uff3ftool_adversaries_RuleSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dl)));
}
var $d_Lsi\uff3ftool_adversaries_RuleSet = new $TypeData().i($c_Lsi\uff3ftool_adversaries_RuleSet, "si_tool.adversaries.RuleSet", ({
  dl: 1,
  d: 1,
  x: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.gP($m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.gQ($m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.eV(false);
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.h5(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
    return subscription;
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$2.bK || (!when))) {
    var $x_1 = f();
  } else {
    this$2.bK = true;
    try {
      var $x_1 = f();
    } finally {
      this$2.bK = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = new $c_Lcom_raquo_airstream_ownership_Subscription(owner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  })));
  var this$ = $thiz.da();
  this$.push(observer);
  return subscription;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz, observer, shouldCallMaybeWillStart) {
  var this$3 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    if (((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz)) && shouldCallMaybeWillStart)) {
      $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    }
    var this$ = $thiz.df();
    this$.push(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$3.bK || (!when))) {
    f();
  } else {
    this$3.bK = true;
    try {
      f();
    } finally {
      this$3.bK = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$3);
    }
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().sd($thiz.df(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().sd($thiz.da(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.he())) {
    $thiz.h9();
    $thiz.eV(true);
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  if (($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1)) {
    $thiz.h6();
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.h7();
    $thiz.eV(false);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.da();
  var $x_1 = this$.length;
  var this$$1 = $thiz.df();
  return ((($x_1 | 0) + (this$$1.length | 0)) | 0);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1(outer) {
  this.nf = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.nf = outer;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$$anon$1() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = $p;
$p.mn = (function(x) {
  return (x !== null);
});
$p.lW = (function(x, default$1) {
  return ((x !== null) ? (new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this.nf, x, _$1);
  }))), (void 0)) : default$1.b(x));
});
$p.cj = (function(x) {
  return this.mn(x);
});
$p.c5 = (function(x, default$1) {
  return this.lW(x, default$1);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$$anon$1, "com.raquo.airstream.custom.CustomSource$$anon$1", ({
  dQ: 1,
  aC: 1,
  i: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.iV = $m_Lcom_raquo_airstream_core_Observer$().rN(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
function $f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer($thiz, mod) {
  return $m_Lcom_raquo_airstream_core_Observer$().rN(new $c_Lcom_raquo_airstream_state_Var$$anon$2(mod, $thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$1(outer) {
  this.nW = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.nW = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $p;
$p.mo = (function(x) {
  return true;
});
$p.lX = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    this.nW.mN(x, _$1);
  })));
});
$p.cj = (function(x) {
  return this.mo(x);
});
$p.c5 = (function(x, default$1) {
  return this.lX(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  e7: 1,
  aC: 1,
  i: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$2(mod$6, outer) {
  this.nX = null;
  this.iW = null;
  this.nX = mod$6;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.iW = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$2.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$2;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$2() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$2.prototype = $p;
$p.mo = (function(x) {
  return true;
});
$p.lX = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    matchResult5: {
      if ((x instanceof $c_s_util_Success)) {
        var nextInput = x.cN;
        var x4 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this.iW.b8);
        if ((x4 instanceof $c_s_util_Success)) {
          var currentValue = x4.cN;
          try {
            var nextValue = new $c_s_util_Success(this.nX.bd(currentValue, nextInput));
          } catch (e) {
            var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
            matchEnd8: {
              var nextValue;
              if ($m_s_util_control_NonFatal$().cP(e$2)) {
                var nextValue = new $c_s_util_Failure(e$2);
                break matchEnd8;
              }
              throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
            }
          }
          this.iW.mN(nextValue, trx);
          break matchResult5;
        }
        if ((x4 instanceof $c_s_util_Failure)) {
          var err = x4.du;
          $m_Lcom_raquo_airstream_core_AirstreamError$().cV(new $c_Lcom_raquo_airstream_core_AirstreamError$VarError("Unable to update a failed Var. Consider Var#tryUpdater instead.", new $c_s_Some(err)));
          break matchResult5;
        }
        throw new $c_s_MatchError(x4);
      }
      if ((x instanceof $c_s_util_Failure)) {
        var err$2 = x.du;
        this.iW.mN(new $c_s_util_Failure(err$2), trx);
        break matchResult5;
      }
      throw new $c_s_MatchError(x);
    }
  })));
});
$p.cj = (function(x) {
  return this.mo(x);
});
$p.c5 = (function(x, default$1) {
  return this.lX(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$2 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$2, "com.raquo.airstream.state.Var$$anon$2", ({
  e8: 1,
  aC: 1,
  i: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_web_WebStorageVar$$anon$1(outer) {
  this.kx = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.kx = outer;
}
$p = $c_Lcom_raquo_airstream_web_WebStorageVar$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_web_WebStorageVar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_web_WebStorageVar$$anon$1() {
}
$h_Lcom_raquo_airstream_web_WebStorageVar$$anon$1.prototype = $p;
$p.mn = (function(x) {
  return ((x !== null) && ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I(this.kx.b8) > 1));
});
$p.lW = (function(x, default$1) {
  return (((x !== null) && ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I(this.kx.b8) > 1)) ? (void 0) : default$1.b(x));
});
$p.cj = (function(x) {
  return this.mn(x);
});
$p.c5 = (function(x, default$1) {
  return this.lW(x, default$1);
});
var $d_Lcom_raquo_airstream_web_WebStorageVar$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_web_WebStorageVar$$anon$1, "com.raquo.airstream.web.WebStorageVar$$anon$1", ({
  ef: 1,
  aC: 1,
  i: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.kN = new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.cW.qV();
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.cW.ud();
  })));
  $thiz.f0 = (void 0);
  $thiz.hw = $m_sci_Map$EmptyMap$();
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.f0 === (void 0))) {
    $thiz.f0 = $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener])));
  } else if (unsafePrepend) {
    var x$1 = $thiz.f0;
    if ((x$1 === (void 0))) {
      var $x_1;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.f0;
    if ((x$2 === (void 0))) {
      var $x_2;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_2 = x$2;
    }
    $x_2.push(listener);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V($thiz, index) {
  var x = $thiz.f0;
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.f0;
  if ((x === (void 0))) {
    return (-1);
  } else {
    var found = false;
    var ix = 0;
    while (((!found) && (ix < (x.length | 0)))) {
      var x$1 = x[ix];
      if (((x$1 === null) ? (listener === null) : $dp_equals__O__Z(x$1, listener))) {
        found = true;
      } else {
        ix = ((1 + ix) | 0);
      }
    }
    return (found ? ix : (-1));
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V($thiz, key, reason, addItems, removeItems) {
  var keyItemsWithReason = $thiz.hw.e8(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f = ((item) => {
    var these = keyItemsWithReason;
    while ((!these.c())) {
      var x0 = these.n();
      var x = x0.bc();
      if (((x === null) ? (item === null) : $dp_equals__O__Z(x, item))) {
        var x$3 = x0.b6();
        if ((!((x$3 === null) ? (reason === null) : $dp_equals__O__Z(x$3, reason)))) {
          var $x_1 = true;
        } else {
          var $x_1 = (reason === null);
        }
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        return true;
      }
      these = these.y();
    }
    return false;
  });
  var itemsToAdd = $f_sc_SeqOps__distinct__O(addItems);
  var l = removeItems;
  block: {
    var result;
    while (true) {
      if (l.c()) {
        var result = $m_sci_Nil$();
        break;
      } else {
        var h = l.n();
        var t = l.y();
        if (((!(!f(h))) === true)) {
          l = t;
          continue;
        }
        var start = l;
        var remaining = t;
        while (true) {
          if (remaining.c()) {
            var result = start;
            break block;
          } else {
            var x$1 = remaining.n();
            if (((!(!f(x$1))) !== true)) {
              remaining = remaining.y();
              continue;
            }
            var firstMiss = remaining;
            var newHead = new $c_sci_$colon$colon(start.n(), $m_sci_Nil$());
            var toProcess = start.y();
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $c_sci_$colon$colon(toProcess.n(), $m_sci_Nil$());
              currentLast.ao = newElem;
              currentLast = newElem;
              toProcess = toProcess.y();
            }
            var next = firstMiss.y();
            var nextToCopy = next;
            while ((!next.c())) {
              var head = next.n();
              if (((!(!f(head))) !== true)) {
                next = next.y();
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $c_sci_$colon$colon(nextToCopy.n(), $m_sci_Nil$());
                  currentLast.ao = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = nextToCopy.y();
                }
                nextToCopy = next.y();
                next = next.y();
              }
            }
            if ((!nextToCopy.c())) {
              currentLast.ao = nextToCopy;
            }
            var result = newHead;
            break block;
          }
        }
      }
    }
  }
  var this$1 = $thiz.hw.e8(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f$1 = ((t$1) => result.al(t$1.bc()));
  var l$1 = this$1;
  block$2: {
    var $x_3;
    while (true) {
      if (l$1.c()) {
        var $x_3 = $m_sci_Nil$();
        break;
      } else {
        var h$1 = l$1.n();
        var t$2 = l$1.y();
        if (((!(!f$1(h$1))) === true)) {
          l$1 = t$2;
          continue;
        }
        var start$1 = l$1;
        var remaining$1 = t$2;
        while (true) {
          if (remaining$1.c()) {
            var $x_3 = start$1;
            break block$2;
          } else {
            var x$2 = remaining$1.n();
            if (((!(!f$1(x$2))) !== true)) {
              remaining$1 = remaining$1.y();
              continue;
            }
            var firstMiss$1 = remaining$1;
            var newHead$1 = new $c_sci_$colon$colon(start$1.n(), $m_sci_Nil$());
            var toProcess$1 = start$1.y();
            var currentLast$1 = newHead$1;
            while ((toProcess$1 !== firstMiss$1)) {
              var newElem$1 = new $c_sci_$colon$colon(toProcess$1.n(), $m_sci_Nil$());
              currentLast$1.ao = newElem$1;
              currentLast$1 = newElem$1;
              toProcess$1 = toProcess$1.y();
            }
            var next$1 = firstMiss$1.y();
            var nextToCopy$1 = next$1;
            while ((!next$1.c())) {
              var head$1 = next$1.n();
              if (((!(!f$1(head$1))) !== true)) {
                next$1 = next$1.y();
              } else {
                while ((nextToCopy$1 !== next$1)) {
                  var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.n(), $m_sci_Nil$());
                  currentLast$1.ao = newElem$2$1;
                  currentLast$1 = newElem$2$1;
                  nextToCopy$1 = nextToCopy$1.y();
                }
                nextToCopy$1 = next$1.y();
                next$1 = next$1.y();
              }
            }
            if ((!nextToCopy$1.c())) {
              currentLast$1.ao = nextToCopy$1;
            }
            var $x_3 = newHead$1;
            break block$2;
          }
        }
      }
    }
  }
  var f$2 = ((_$2) => new $c_T2(_$2, reason));
  if ((itemsToAdd === $m_sci_Nil$())) {
    var $x_2 = $m_sci_Nil$();
  } else {
    var x0$1 = itemsToAdd.n();
    var h$2 = new $c_sci_$colon$colon(f$2(x0$1), $m_sci_Nil$());
    var t$3 = h$2;
    var rest = itemsToAdd.y();
    while ((rest !== $m_sci_Nil$())) {
      var x0$2 = rest.n();
      var nx = new $c_sci_$colon$colon(f$2(x0$2), $m_sci_Nil$());
      t$3.ao = nx;
      t$3 = nx;
      rest = rest.y();
    }
    var $x_2 = h$2;
  }
  var newItems = $x_3.lR($x_2);
  var domValues = key.kC.rr(key.pa.b($thiz));
  var f$3 = ((elem) => result.al(elem));
  var l$2 = domValues;
  block$4: {
    var $x_5;
    while (true) {
      if (l$2.c()) {
        var $x_5 = $m_sci_Nil$();
        break;
      } else {
        var h$3 = l$2.n();
        var t$4 = l$2.y();
        if (((!(!f$3(h$3))) === true)) {
          l$2 = t$4;
          continue;
        }
        var start$2 = l$2;
        var remaining$2 = t$4;
        while (true) {
          if (remaining$2.c()) {
            var $x_5 = start$2;
            break block$4;
          } else {
            var x$4 = remaining$2.n();
            if (((!(!f$3(x$4))) !== true)) {
              remaining$2 = remaining$2.y();
              continue;
            }
            var firstMiss$2 = remaining$2;
            var newHead$2 = new $c_sci_$colon$colon(start$2.n(), $m_sci_Nil$());
            var toProcess$2 = start$2.y();
            var currentLast$2 = newHead$2;
            while ((toProcess$2 !== firstMiss$2)) {
              var newElem$3 = new $c_sci_$colon$colon(toProcess$2.n(), $m_sci_Nil$());
              currentLast$2.ao = newElem$3;
              currentLast$2 = newElem$3;
              toProcess$2 = toProcess$2.y();
            }
            var next$2 = firstMiss$2.y();
            var nextToCopy$2 = next$2;
            while ((!next$2.c())) {
              var head$2 = next$2.n();
              if (((!(!f$3(head$2))) !== true)) {
                next$2 = next$2.y();
              } else {
                while ((nextToCopy$2 !== next$2)) {
                  var newElem$2$2 = new $c_sci_$colon$colon(nextToCopy$2.n(), $m_sci_Nil$());
                  currentLast$2.ao = newElem$2$2;
                  currentLast$2 = newElem$2$2;
                  nextToCopy$2 = nextToCopy$2.y();
                }
                nextToCopy$2 = next$2.y();
                next$2 = next$2.y();
              }
            }
            if ((!nextToCopy$2.c())) {
              currentLast$2.ao = nextToCopy$2;
            }
            var $x_5 = newHead$2;
            break block$4;
          }
        }
      }
    }
  }
  var l$3 = itemsToAdd;
  block$6: {
    var $x_4;
    while (true) {
      if (l$3.c()) {
        var $x_4 = $m_sci_Nil$();
        break;
      } else {
        var h$4 = l$3.n();
        var t$5 = l$3.y();
        if (((!(!f(h$4))) === true)) {
          l$3 = t$5;
          continue;
        }
        var start$3 = l$3;
        var remaining$3 = t$5;
        while (true) {
          if (remaining$3.c()) {
            var $x_4 = start$3;
            break block$6;
          } else {
            var x$5 = remaining$3.n();
            if (((!(!f(x$5))) !== true)) {
              remaining$3 = remaining$3.y();
              continue;
            }
            var firstMiss$3 = remaining$3;
            var newHead$3 = new $c_sci_$colon$colon(start$3.n(), $m_sci_Nil$());
            var toProcess$3 = start$3.y();
            var currentLast$3 = newHead$3;
            while ((toProcess$3 !== firstMiss$3)) {
              var newElem$4 = new $c_sci_$colon$colon(toProcess$3.n(), $m_sci_Nil$());
              currentLast$3.ao = newElem$4;
              currentLast$3 = newElem$4;
              toProcess$3 = toProcess$3.y();
            }
            var next$3 = firstMiss$3.y();
            var nextToCopy$3 = next$3;
            while ((!next$3.c())) {
              var head$3 = next$3.n();
              if (((!(!f(head$3))) !== true)) {
                next$3 = next$3.y();
              } else {
                while ((nextToCopy$3 !== next$3)) {
                  var newElem$2$3 = new $c_sci_$colon$colon(nextToCopy$3.n(), $m_sci_Nil$());
                  currentLast$3.ao = newElem$2$3;
                  currentLast$3 = newElem$2$3;
                  nextToCopy$3 = nextToCopy$3.y();
                }
                nextToCopy$3 = next$3.y();
                next$3 = next$3.y();
              }
            }
            if ((!nextToCopy$3.c())) {
              currentLast$3.ao = nextToCopy$3;
            }
            var $x_4 = newHead$3;
            break block$6;
          }
        }
      }
    }
  }
  var nextDomValues = $x_5.lR($x_4);
  $thiz.hw = $thiz.hw.eU(key, newItems);
  key.pc.bd($thiz, key.kC.rt(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.j2, maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.j2;
  $thiz.j2 = maybeNextParent;
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.c()) && (!maybePrevParent.E().jK().cn.c()));
  var isNextParentActive = ((!maybeNextParent.c()) && (!maybeNextParent.E().jK().cn.c()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.c() ? $m_s_None$() : new $c_s_Some(maybeNextParent.E().jK())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.c()) {
    $thiz.kN.tM();
  } else {
    var x0 = maybeNextOwner.E();
    $thiz.kN.wj(x0);
  }
}
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  fz: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Byte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bJ)));
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  bJ: 1,
  ao: 1,
  a: 1,
  aa: 1,
  a5: 1
}), ((x) => $isByte(x)));
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bL)));
}
var $d_jl_ClassCastException = new $TypeData().i($c_jl_ClassCastException, "java.lang.ClassCastException", ({
  bL: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().i($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  U: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
function $ct_jl_IllegalStateException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalStateException = new $TypeData().i($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  bO: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  b7: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NegativeArraySizeException = new $TypeData().i($c_jl_NegativeArraySizeException, "java.lang.NegativeArraySizeException", ({
  fL: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  fM: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fO)));
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Short(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bR)));
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  bR: 1,
  ao: 1,
  a: 1,
  aa: 1,
  a5: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  fX: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().i($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  g5: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  gm: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_s_$less$colon$less$$anon$1() {
}
$p = $c_s_$less$colon$less$$anon$1.prototype = new $h_s_$eq$colon$eq();
$p.constructor = $c_s_$less$colon$less$$anon$1;
/** @constructor */
function $h_s_$less$colon$less$$anon$1() {
}
$h_s_$less$colon$less$$anon$1.prototype = $p;
$p.b = (function(x) {
  return x;
});
$p.v = (function() {
  return "generalized constraint";
});
var $d_s_$less$colon$less$$anon$1 = new $TypeData().i($c_s_$less$colon$less$$anon$1, "scala.$less$colon$less$$anon$1", ({
  gs: 1,
  gp: 1,
  gq: 1,
  i: 1,
  a: 1
}));
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.l4)) {
    $thiz.l5 = (($thiz.j5 === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.l4 = true;
  }
  return $thiz.l5;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.l4) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.l5);
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.j5;
  return ("of class " + $objectClassName(this$1));
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.j5 + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.l5 = null;
    this.j5 = null;
    this.l4 = false;
    this.j5 = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  c0() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  gz: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_s_Option() {
}
$p = $c_s_Option.prototype = new $h_O();
$p.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
}
$h_s_Option.prototype = $p;
$p.c = (function() {
  return (this === $m_s_None$());
});
$p.q = (function() {
  return (this.c() ? 0 : 1);
});
$p.al = (function(elem) {
  return ((!this.c()) && $m_sr_BoxesRunTime$().i(this.E(), elem));
});
$p.e = (function() {
  return (this.c() ? $m_sc_Iterator$().D : new $c_sc_Iterator$$anon$20(this.E()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.hA = 0;
  this.pS = 0;
  this.pR = null;
  this.pR = outer;
  this.hA = 0;
  this.pS = outer.aJ();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.l = (function() {
  return (this.hA < this.pS);
});
$p.d = (function() {
  var result = this.pR.aK(this.hA);
  this.hA = ((1 + this.hA) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  gF: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.pT = null;
  this.pU = null;
  this.pT = _1;
  this.pU = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.aJ = (function() {
  return 2;
});
$p.aK = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.bc = (function() {
  return this.pT;
});
$p.b6 = (function() {
  return this.pU;
});
$p.v = (function() {
  return (((("(" + this.bc()) + ",") + this.b6()) + ")");
});
$p.aL = (function() {
  return "Tuple2";
});
$p.aX = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.k = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().i(this.bc(), x$1.bc()) && $m_sr_BoxesRunTime$().i(this.b6(), x$1.b6()))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bY)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  bY: 1,
  gG: 1,
  x: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.g2 = null;
  this.g3 = null;
  this.g4 = null;
  this.g2 = _1;
  this.g3 = _2;
  this.g4 = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.aJ = (function() {
  return 3;
});
$p.aK = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.v = (function() {
  return (((((("(" + this.g2) + ",") + this.g3) + ",") + this.g4) + ")");
});
$p.aL = (function() {
  return "Tuple3";
});
$p.aX = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.k = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T3) && ($m_sr_BoxesRunTime$().i(this.g2, x$1.g2) && ($m_sr_BoxesRunTime$().i(this.g3, x$1.g3) && $m_sr_BoxesRunTime$().i(this.g4, x$1.g4)))));
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bZ)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  bZ: 1,
  gH: 1,
  x: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.g5 = null;
  this.g6 = null;
  this.g7 = null;
  this.g8 = null;
  this.g5 = _1;
  this.g6 = _2;
  this.g7 = _3;
  this.g8 = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.aJ = (function() {
  return 4;
});
$p.aK = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.v = (function() {
  return (((((((("(" + this.g5) + ",") + this.g6) + ",") + this.g7) + ",") + this.g8) + ")");
});
$p.aL = (function() {
  return "Tuple4";
});
$p.aX = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.k = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T4) && (($m_sr_BoxesRunTime$().i(this.g5, x$1.g5) && $m_sr_BoxesRunTime$().i(this.g6, x$1.g6)) && ($m_sr_BoxesRunTime$().i(this.g7, x$1.g7) && $m_sr_BoxesRunTime$().i(this.g8, x$1.g8)))));
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c0)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  c0: 1,
  gI: 1,
  x: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.g9 = null;
  this.ga = null;
  this.gb = null;
  this.gc = null;
  this.gd = null;
  this.g9 = _1;
  this.ga = _2;
  this.gb = _3;
  this.gc = _4;
  this.gd = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.aJ = (function() {
  return 5;
});
$p.aK = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.v = (function() {
  return (((((((((("(" + this.g9) + ",") + this.ga) + ",") + this.gb) + ",") + this.gc) + ",") + this.gd) + ")");
});
$p.aL = (function() {
  return "Tuple5";
});
$p.aX = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.k = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T5) && (($m_sr_BoxesRunTime$().i(this.g9, x$1.g9) && $m_sr_BoxesRunTime$().i(this.ga, x$1.ga)) && ($m_sr_BoxesRunTime$().i(this.gb, x$1.gb) && ($m_sr_BoxesRunTime$().i(this.gc, x$1.gc) && $m_sr_BoxesRunTime$().i(this.gd, x$1.gd))))));
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c1)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  c1: 1,
  gJ: 1,
  x: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.ge = null;
  this.gf = null;
  this.gg = null;
  this.gh = null;
  this.gi = null;
  this.gj = null;
  this.ge = _1;
  this.gf = _2;
  this.gg = _3;
  this.gh = _4;
  this.gi = _5;
  this.gj = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.aJ = (function() {
  return 6;
});
$p.aK = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.v = (function() {
  return (((((((((((("(" + this.ge) + ",") + this.gf) + ",") + this.gg) + ",") + this.gh) + ",") + this.gi) + ",") + this.gj) + ")");
});
$p.aL = (function() {
  return "Tuple6";
});
$p.aX = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.k = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T6) && (($m_sr_BoxesRunTime$().i(this.ge, x$1.ge) && ($m_sr_BoxesRunTime$().i(this.gf, x$1.gf) && $m_sr_BoxesRunTime$().i(this.gg, x$1.gg))) && ($m_sr_BoxesRunTime$().i(this.gh, x$1.gh) && ($m_sr_BoxesRunTime$().i(this.gi, x$1.gi) && $m_sr_BoxesRunTime$().i(this.gj, x$1.gj))))));
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c2)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  c2: 1,
  gK: 1,
  x: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.gk = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  gW: 1,
  gV: 1,
  H: 1,
  a: 1,
  a1: 1
}));
function $f_sc_IndexedSeqOps__map__F1__O($thiz, f) {
  return $thiz.aE().am($ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), $thiz, f));
}
function $f_sc_IndexedSeqOps__head__O($thiz) {
  if ((!$thiz.c())) {
    return $thiz.x(0);
  } else {
    throw new $c_ju_NoSuchElementException(("head of empty " + ($is_sc_IndexedSeq($thiz) ? $thiz.c6() : $thiz.v())));
  }
}
function $f_sc_IndexedSeqOps__headOption__s_Option($thiz) {
  return ($thiz.c() ? $m_s_None$() : new $c_s_Some($thiz.n()));
}
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.c6() + "("), ", ", ")");
}
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.e)));
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.e)));
}
function $p_sc_Iterator$$anon$10__nextCur__V($thiz) {
  $thiz.gn = $m_sc_Iterator$().D;
  $thiz.gn = $thiz.pY.b($thiz.lg.d()).e();
  $thiz.f2 = (-1);
}
/** @constructor */
function $c_sc_Iterator$$anon$10(outer, f$3) {
  this.gn = null;
  this.f2 = 0;
  this.lg = null;
  this.pY = null;
  this.lg = outer;
  this.pY = f$3;
  this.gn = $m_sc_Iterator$().D;
  this.f2 = (-1);
}
$p = $c_sc_Iterator$$anon$10.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$10;
/** @constructor */
function $h_sc_Iterator$$anon$10() {
}
$h_sc_Iterator$$anon$10.prototype = $p;
$p.l = (function() {
  if ((this.f2 === (-1))) {
    while ((!this.gn.l())) {
      if ((!this.lg.l())) {
        this.f2 = 0;
        this.gn = $m_sc_Iterator$().D;
        return false;
      }
      $p_sc_Iterator$$anon$10__nextCur__V(this);
    }
    this.f2 = 1;
    return true;
  } else {
    return (this.f2 === 1);
  }
});
$p.d = (function() {
  if (this.l()) {
    this.f2 = (-1);
  }
  return this.gn.d();
});
var $d_sc_Iterator$$anon$10 = new $TypeData().i($c_sc_Iterator$$anon$10, "scala.collection.Iterator$$anon$10", ({
  h5: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.l = (function() {
  return false;
});
$p.iu = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.q = (function() {
  return 0;
});
$p.ha = (function(from, until) {
  return this;
});
$p.d = (function() {
  this.iu();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  h6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.hB = false;
  this.pZ = null;
  this.pZ = a$1;
  this.hB = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.l = (function() {
  return (!this.hB);
});
$p.d = (function() {
  if (this.hB) {
    return $m_sc_Iterator$().D.d();
  } else {
    this.hB = true;
    return this.pZ;
  }
});
$p.ha = (function(from, until) {
  return (((this.hB || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().D : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  h7: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$8(outer, f$1) {
  this.q2 = null;
  this.j7 = false;
  this.q1 = null;
  this.lh = null;
  this.q0 = null;
  this.lh = outer;
  this.q0 = f$1;
  this.q2 = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.j7 = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.l = (function() {
  while (true) {
    if (this.j7) {
      return true;
    } else if (this.lh.l()) {
      var a = this.lh.d();
      if (this.q2.jG(this.q0.b(a))) {
        this.q1 = a;
        this.j7 = true;
        return true;
      }
    } else {
      return false;
    }
  }
});
$p.d = (function() {
  if (this.l()) {
    this.j7 = false;
    return this.q1;
  } else {
    return $m_sc_Iterator$().D.d();
  }
});
var $d_sc_Iterator$$anon$8 = new $TypeData().i($c_sc_Iterator$$anon$8, "scala.collection.Iterator$$anon$8", ({
  h9: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(outer, f$2) {
  this.j8 = null;
  this.q3 = null;
  this.j8 = outer;
  this.q3 = f$2;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.q = (function() {
  return this.j8.q();
});
$p.l = (function() {
  return this.j8.l();
});
$p.d = (function() {
  return this.q3.b(this.j8.d());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  ha: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.c9 instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.c9;
      $thiz.c9 = c.c9;
      $thiz.eo = c.eo;
      if ((c.cK !== null)) {
        if (($thiz.cJ === null)) {
          $thiz.cJ = c.cJ;
        }
        c.cJ.hC = $thiz.cK;
        $thiz.cK = c.cK;
      }
      continue;
    }
    return (void 0);
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.cK === null)) {
      $thiz.c9 = null;
      $thiz.cJ = null;
      return false;
    } else {
      $thiz.c9 = $thiz.cK.uW();
      if (($thiz.cJ === $thiz.cK)) {
        $thiz.cJ = $thiz.cJ.hC;
      }
      $thiz.cK = $thiz.cK.hC;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.eo) {
        return true;
      } else if ((($thiz.c9 !== null) && $thiz.c9.l())) {
        $thiz.eo = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.c9 = null;
  this.cK = null;
  this.cJ = null;
  this.eo = false;
  this.c9 = current;
  this.cK = null;
  this.cJ = null;
  this.eo = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.l = (function() {
  if (this.eo) {
    return true;
  } else if ((this.c9 !== null)) {
    if (this.c9.l()) {
      this.eo = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.d = (function() {
  if (this.l()) {
    this.eo = false;
    return this.c9.d();
  } else {
    return $m_sc_Iterator$().D.d();
  }
});
$p.gS = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.cK === null)) {
    this.cK = c;
    this.cJ = c;
  } else {
    this.cJ.hC = c;
    this.cJ = c;
  }
  if ((this.c9 === null)) {
    this.c9 = $m_sc_Iterator$().D;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cb)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  cb: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.dG > 0)) {
    if ($thiz.ep.l()) {
      $thiz.ep.d();
      $thiz.dG = (((-1) + $thiz.dG) | 0);
    } else {
      $thiz.dG = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.cr < 0)) {
    return (-1);
  } else {
    var that = (($thiz.cr - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.ep = null;
  this.cr = 0;
  this.dG = 0;
  this.ep = underlying;
  this.cr = limit;
  this.dG = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.q = (function() {
  var size = this.ep.q();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.dG) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.cr < 0)) {
      return dropSize;
    } else {
      var x = this.cr;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.l = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.cr !== 0) && this.ep.l());
});
$p.d = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.cr > 0)) {
    this.cr = (((-1) + this.cr) | 0);
    return this.ep.d();
  } else {
    return ((this.cr < 0) ? this.ep.d() : $m_sc_Iterator$().D.d());
  }
});
$p.ha = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.cr < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.dG + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().D;
  } else if ((sum < 0)) {
    this.dG = 2147483647;
    this.cr = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$SliceIterator(this.ep, (((-2147483647) + sum) | 0), rest))));
  } else {
    this.dG = sum;
    this.cr = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  hc: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $f_sc_LinearSeqOps__headOption__s_Option($thiz) {
  return ($thiz.c() ? $m_s_None$() : new $c_s_Some($thiz.n()));
}
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while ((!these.c())) {
    len = ((1 + len) | 0);
    these = these.y();
  }
  return len;
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $thiz, len));
}
function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
  return ((x >= 0) && ($thiz.be(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.m4(n);
  if (skipped.c()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.n();
}
function $f_sc_LinearSeqOps__exists__F1__Z($thiz, p) {
  var these = $thiz;
  while ((!these.c())) {
    if ((!(!p.b(these.n())))) {
      return true;
    }
    these = these.y();
  }
  return false;
}
function $f_sc_LinearSeqOps__foldLeft__O__F2__O($thiz, z, op) {
  var acc = z;
  var these = $thiz;
  while ((!these.c())) {
    acc = op.bd(acc, these.n());
    these = these.y();
  }
  return acc;
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $f_sc_LinearSeqOps__indexWhere__F1__I__I($thiz, p, from) {
  var i = ((from > 0) ? from : 0);
  var these = $thiz.m4(from);
  while ((!these.c())) {
    if ((!(!p.b(these.n())))) {
      return i;
    }
    i = ((1 + i) | 0);
    these = these.y();
  }
  return (-1);
}
function $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.c() ? 0 : 1);
    } else if (xs.c()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = xs.y();
      i = temp$i;
      xs = temp$xs;
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else if ((((!a.c()) && (!b.c())) && $m_sr_BoxesRunTime$().i(a.n(), b.n()))) {
      var temp$a = a.y();
      var temp$b = b.y();
      a = temp$a;
      b = temp$b;
    } else {
      return (a.c() && b.c());
    }
  }
}
function $f_sc_SetOps__concat__sc_IterableOnce__sc_SetOps($thiz, that) {
  if ((($thiz instanceof $c_sci_Set$Set1) || (($thiz instanceof $c_sci_Set$Set2) || (($thiz instanceof $c_sci_Set$Set3) || ($thiz instanceof $c_sci_Set$Set4))))) {
    var result = $thiz;
    var it = that.e();
    while (it.l()) {
      result = result.dA(it.d());
    }
    return result;
  } else {
    return $thiz.fA(($is_sc_Iterable(that) ? new $c_sc_View$Concat($thiz, that) : $thiz.e().gS(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => that.e())))));
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.hE = null;
  this.hE = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.l = (function() {
  return (!this.hE.c());
});
$p.d = (function() {
  var r = this.hE.n();
  this.hE = this.hE.y();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  hg: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sc_StringOps$$anon$1__advance__T($thiz) {
  var start = $thiz.bv;
  while (true) {
    if (($thiz.bv < $thiz.f4)) {
      var this$ = $thiz.hF;
      var i = $thiz.bv;
      var c = this$.charCodeAt(i);
      var $x_1 = (!((c === 13) || (c === 10)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $thiz.bv = ((1 + $thiz.bv) | 0);
    } else {
      break;
    }
  }
  var end = $thiz.bv;
  if (($thiz.bv < $thiz.f4)) {
    var this$$2 = $thiz.hF;
    var i$1 = $thiz.bv;
    var c$1 = this$$2.charCodeAt(i$1);
    $thiz.bv = ((1 + $thiz.bv) | 0);
    if (($thiz.bv < $thiz.f4)) {
      var this$$3 = $thiz.hF;
      var i$2 = $thiz.bv;
      var c$2 = this$$3.charCodeAt(i$2);
      var $x_2 = ((c$1 === 13) && (c$2 === 10));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      $thiz.bv = ((1 + $thiz.bv) | 0);
    }
    if ((!$thiz.q8)) {
      end = $thiz.bv;
    }
  }
  var this$6 = $thiz.hF;
  var endIndex = end;
  return this$6.substring(start, endIndex);
}
/** @constructor */
function $c_sc_StringOps$$anon$1(\u03b4this$2, stripped$1) {
  this.f4 = 0;
  this.bv = 0;
  this.hF = null;
  this.q8 = false;
  this.hF = \u03b4this$2;
  this.q8 = stripped$1;
  this.f4 = \u03b4this$2.length;
  this.bv = 0;
}
$p = $c_sc_StringOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StringOps$$anon$1;
/** @constructor */
function $h_sc_StringOps$$anon$1() {
}
$h_sc_StringOps$$anon$1.prototype = $p;
$p.l = (function() {
  return (this.bv < this.f4);
});
$p.s3 = (function() {
  return ((this.bv >= this.f4) ? $m_sc_Iterator$().D.d() : $p_sc_StringOps$$anon$1__advance__T(this));
});
$p.d = (function() {
  return this.s3();
});
var $d_sc_StringOps$$anon$1 = new $TypeData().i($c_sc_StringOps$$anon$1, "scala.collection.StringOps$$anon$1", ({
  hk: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.ct === null)) {
    $thiz.ct = new $ac_I(($m_sci_Node$().hN << 1));
    $thiz.dP = new ($d_sci_Node.r().C)($m_sci_Node$().hN);
  }
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.bR = node;
  $thiz.ad = 0;
  $thiz.dO = node.iz();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bH = ((1 + $thiz.bH) | 0);
  var cursorIndex = ($thiz.bH << 1);
  var lengthIndex = ((1 + ($thiz.bH << 1)) | 0);
  $thiz.dP.a[$thiz.bH] = node;
  $thiz.ct.a[cursorIndex] = 0;
  $thiz.ct.a[lengthIndex] = node.iv();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.bH = (((-1) + $thiz.bH) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bH >= 0)) {
    var cursorIndex = ($thiz.bH << 1);
    var lengthIndex = ((1 + ($thiz.bH << 1)) | 0);
    var nodeCursor = $thiz.ct.a[cursorIndex];
    if ((nodeCursor < $thiz.ct.a[lengthIndex])) {
      var ev$1 = $thiz.ct;
      ev$1.a[cursorIndex] = ((1 + ev$1.a[cursorIndex]) | 0);
      var nextNode = $thiz.dP.a[$thiz.bH].io(nodeCursor);
      if (nextNode.ip()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.gZ()) {
        $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, nextNode);
        return true;
      }
    } else {
      $p_sci_ChampBaseIterator__popNode__V($thiz);
    }
  }
  return false;
}
function $ct_sci_ChampBaseIterator__($thiz) {
  $thiz.ad = 0;
  $thiz.dO = 0;
  $thiz.bH = (-1);
  return $thiz;
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.ip()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.gZ()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
/** @constructor */
function $c_sci_ChampBaseIterator() {
  this.ad = 0;
  this.dO = 0;
  this.bR = null;
  this.bH = 0;
  this.ct = null;
  this.dP = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.l = (function() {
  return ((this.ad < this.dO) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.je = node;
  $thiz.er = (((-1) + node.iz()) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.cu = ((1 + $thiz.cu) | 0);
  $thiz.hJ.a[$thiz.cu] = node;
  $thiz.hI.a[$thiz.cu] = (((-1) + node.iv()) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.cu = (((-1) + $thiz.cu) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.cu >= 0)) {
    var nodeCursor = $thiz.hI.a[$thiz.cu];
    $thiz.hI.a[$thiz.cu] = (((-1) + nodeCursor) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.hJ.a[$thiz.cu].io(nodeCursor));
    } else {
      var currNode = $thiz.hJ.a[$thiz.cu];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.gZ()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true;
      }
    }
  }
  return false;
}
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.er = (-1);
  $thiz.cu = (-1);
  $thiz.hI = new $ac_I(((1 + $m_sci_Node$().hN) | 0));
  $thiz.hJ = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().hN) | 0));
  return $thiz;
}
function $ct_sci_ChampBaseReverseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseReverseIterator__($thiz);
  $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, rootNode);
  $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz);
  return $thiz;
}
/** @constructor */
function $c_sci_ChampBaseReverseIterator() {
  this.er = 0;
  this.je = null;
  this.cu = 0;
  this.hI = null;
  this.hJ = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.l = (function() {
  return ((this.er >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.gs !== null);
}
function $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.a.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.r(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.r(ix, result, destPos, length);
  return result;
}
function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  var dataIx = bm.d6(bitpos);
  var idx = (dataIx << 1);
  var src = bm.b9;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.r(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.r(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.ca, dataIx, originalHash);
  bm.ac = (bm.ac | bitpos);
  bm.b9 = dst;
  bm.ca = dstHashes;
  bm.bn = ((1 + bm.bn) | 0);
  bm.c2 = ((bm.c2 + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.gs = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.dn = $thiz.dn.rm();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.gs = null;
  this.dn = null;
  this.dn = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().l3, $m_s_Array$EmptyArrays$().hz, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.bt = (function(size) {
});
$p.hc = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().cH(keyHash, shift);
    var bitpos = $m_sci_Node$().bY(mask);
    if (((mapNode.ac & bitpos) !== 0)) {
      var index = $m_sci_Node$().bJ(mapNode.ac, mask, bitpos);
      var key0 = mapNode.dy(index);
      var key0UnimprovedHash = mapNode.cF(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().i(key0, key))) {
        mapNode.b9.a[((1 + (index << 1)) | 0)] = value;
      } else {
        var value0 = mapNode.dz(index);
        var key0Hash = $m_sc_Hashing$().bs(key0UnimprovedHash);
        var subNodeNew = mapNode.mz(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.vs(bitpos, key0Hash, subNodeNew);
      }
    } else if (((mapNode.aF & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().bJ(mapNode.aF, mask, bitpos);
      var subNode = mapNode.db(index$2);
      var beforeSize = subNode.O();
      var beforeHash = subNode.bN();
      this.hc(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.bn = ((mapNode.bn + ((subNode.O() - beforeSize) | 0)) | 0);
      mapNode.c2 = ((mapNode.c2 + ((subNode.bN() - beforeHash) | 0)) | 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
    }
  } else if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.h2(key);
    if ((index$3 < 0)) {
      mapNode.aT = mapNode.aT.bD(new $c_T2(key, value));
    } else {
      mapNode.aT = mapNode.aT.eh(index$3, new $c_T2(key, value));
    }
  } else {
    throw new $c_s_MatchError(mapNode);
  }
});
$p.mJ = (function() {
  if ((this.dn.bn === 0)) {
    return $m_sci_HashMap$().lo;
  } else if ((this.gs !== null)) {
    return this.gs;
  } else {
    this.gs = new $c_sci_HashMap(this.dn);
    return this.gs;
  }
});
$p.r1 = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().R(elem.bc());
  var im = $m_sc_Hashing$().bs(h);
  this.hc(this.dn, elem.bc(), elem.b6(), h, im, 0);
  return this;
});
$p.fw = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().R(key);
  this.hc(this.dn, key, value, originalHash, $m_sc_Hashing$().bs(originalHash), 0);
  return this;
});
$p.lP = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(this, xs);
  } else if (false) {
    var iter = xs.xf();
    while (iter.l()) {
      var next = iter.d();
      var originalHash = xs.wC(next.rR());
      var hash = $m_sc_Hashing$().bs(originalHash);
      this.hc(this.dn, next.s0(), next.wI(), originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.up();
    while (iter$2.l()) {
      var next$2 = iter$2.d();
      var originalHash$2 = xs.wC(next$2.rR());
      var hash$2 = $m_sc_Hashing$().bs(originalHash$2);
      this.hc(this.dn, next$2.s0(), next$2.wI(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.fz(new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((key$2$2, value$2$2) => this.fw(key$2$2, value$2$2))));
  } else {
    var it = xs.e();
    while (it.l()) {
      this.r1(it.d());
    }
  }
  return this;
});
$p.b7 = (function(elems) {
  return this.lP(elems);
});
$p.as = (function(elem) {
  return this.r1(elem);
});
$p.aM = (function() {
  return this.mJ();
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  hw: 1,
  a9: 1,
  L: 1,
  J: 1,
  I: 1
}));
function $p_sci_HashSetBuilder__isAliased__Z($thiz) {
  return ($thiz.gt !== null);
}
function $p_sci_HashSetBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.a.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.r(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.r(ix, result, destPos, length);
  return result;
}
function $p_sci_HashSetBuilder__insertValue__sci_BitmapIndexedSetNode__I__O__I__I__V($thiz, bm, bitpos, key, originalHash, keyHash) {
  var dataIx = bm.d6(bitpos);
  var src = bm.bo;
  var dst = new $ac_O(((1 + src.a.length) | 0));
  src.r(0, dst, 0, dataIx);
  dst.a[dataIx] = key;
  var destPos = ((1 + dataIx) | 0);
  var length = ((src.a.length - dataIx) | 0);
  src.r(dataIx, dst, destPos, length);
  var dstHashes = $p_sci_HashSetBuilder__insertElement__AI__I__I__AI($thiz, bm.cs, dataIx, originalHash);
  bm.a3 = (bm.a3 | bitpos);
  bm.bo = dst;
  bm.cs = dstHashes;
  bm.bw = ((1 + bm.bw) | 0);
  bm.cb = ((bm.cb + keyHash) | 0);
}
function $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V($thiz, bm, bitpos, elem) {
  var dataIx = bm.d6(bitpos);
  bm.bo.a[dataIx] = elem;
}
function $p_sci_HashSetBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashSetBuilder__isAliased__Z($thiz)) {
    $p_sci_HashSetBuilder__copyElems__V($thiz);
  }
  $thiz.gt = null;
}
function $p_sci_HashSetBuilder__copyElems__V($thiz) {
  $thiz.f8 = $thiz.f8.rn();
}
/** @constructor */
function $c_sci_HashSetBuilder() {
  this.gt = null;
  this.f8 = null;
  this.f8 = new $c_sci_BitmapIndexedSetNode(0, 0, $m_s_Array$EmptyArrays$().l3, $m_s_Array$EmptyArrays$().hz, 0, 0);
}
$p = $c_sci_HashSetBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashSetBuilder;
/** @constructor */
function $h_sci_HashSetBuilder() {
}
$h_sci_HashSetBuilder.prototype = $p;
$p.bt = (function(size) {
});
$p.mT = (function(setNode, element, originalHash, elementHash, shift) {
  if ((setNode instanceof $c_sci_BitmapIndexedSetNode)) {
    var mask = $m_sci_Node$().cH(elementHash, shift);
    var bitpos = $m_sci_Node$().bY(mask);
    if (((setNode.a3 & bitpos) !== 0)) {
      var index = $m_sci_Node$().bJ(setNode.a3, mask, bitpos);
      var element0 = setNode.dd(index);
      var element0UnimprovedHash = setNode.cF(index);
      if (((element0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().i(element0, element))) {
        $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V(this, setNode, bitpos, element0);
      } else {
        var element0Hash = $m_sc_Hashing$().bs(element0UnimprovedHash);
        var subNodeNew = setNode.my(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0));
        setNode.vt(bitpos, element0Hash, subNodeNew);
      }
    } else if (((setNode.aO & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().bJ(setNode.aO, mask, bitpos);
      var subNode = setNode.dc(index$2);
      var beforeSize = subNode.O();
      var beforeHashCode = subNode.bN();
      this.mT(subNode, element, originalHash, elementHash, ((5 + shift) | 0));
      setNode.bw = ((setNode.bw + ((subNode.O() - beforeSize) | 0)) | 0);
      setNode.cb = ((setNode.cb + ((subNode.bN() - beforeHashCode) | 0)) | 0);
    } else {
      $p_sci_HashSetBuilder__insertValue__sci_BitmapIndexedSetNode__I__O__I__I__V(this, setNode, bitpos, element, originalHash, elementHash);
    }
  } else if ((setNode instanceof $c_sci_HashCollisionSetNode)) {
    var index$3 = $f_sc_SeqOps__indexOf__O__I__I(setNode.aZ, element, 0);
    if ((index$3 < 0)) {
      setNode.aZ = setNode.aZ.bD(element);
    } else {
      setNode.aZ = setNode.aZ.eh(index$3, element);
    }
  } else {
    throw new $c_s_MatchError(setNode);
  }
});
$p.mK = (function() {
  if ((this.f8.bw === 0)) {
    return $m_sci_HashSet$().hK;
  } else if ((this.gt !== null)) {
    return this.gt;
  } else {
    this.gt = new $c_sci_HashSet(this.f8);
    return this.gt;
  }
});
$p.jH = (function(elem) {
  $p_sci_HashSetBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().R(elem);
  var im = $m_sc_Hashing$().bs(h);
  this.mT(this.f8, elem, h, im, 0);
  return this;
});
$p.lQ = (function(xs) {
  $p_sci_HashSetBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashSet)) {
    new $c_sci_HashSetBuilder$$anon$1(this, xs);
  } else {
    var it = xs.e();
    while (it.l()) {
      this.jH(it.d());
    }
  }
  return this;
});
$p.b7 = (function(elems) {
  return this.lQ(elems);
});
$p.as = (function(elem) {
  return this.jH(elem);
});
$p.aM = (function() {
  return this.mK();
});
var $d_sci_HashSetBuilder = new $TypeData().i($c_sci_HashSetBuilder, "scala.collection.immutable.HashSetBuilder", ({
  hz: 1,
  a9: 1,
  L: 1,
  J: 1,
  I: 1
}));
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.eq = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$());
}
$p = $c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
}
$h_sci_IndexedSeq$.prototype = $p;
$p.md = (function(it) {
  return ($is_sci_IndexedSeq(it) ? it : $c_sc_SeqFactory$Delegate.prototype.jN.call(this, it));
});
$p.am = (function(source) {
  return this.md(source);
});
$p.jN = (function(it) {
  return this.md(it);
});
var $d_sci_IndexedSeq$ = new $TypeData().i($c_sci_IndexedSeq$, "scala.collection.immutable.IndexedSeq$", ({
  hB: 1,
  bb: 1,
  a1: 1,
  H: 1,
  a: 1
}));
var $n_sci_IndexedSeq$;
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$();
  }
  return $n_sci_IndexedSeq$;
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.gu = null;
  this.qe = null;
  this.tL();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.bt = (function(size) {
});
$p.tL = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.qe = ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.m7()))));
  this.gu = deferred;
});
$p.wa = (function() {
  this.gu.mk(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$())));
  return this.qe;
});
$p.th = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.gu.mk(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    $m_sci_LazyList$();
    return new $c_sci_LazyList$State$Cons(elem, ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.m7())))));
  })));
  this.gu = deferred;
  return this;
});
$p.t6 = (function(xs) {
  if ((xs.q() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.gu.mk(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().mM(xs.e(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.m7()))))));
    this.gu = deferred;
  }
  return this;
});
$p.b7 = (function(elems) {
  return this.t6(elems);
});
$p.as = (function(elem) {
  return this.th(elem);
});
$p.aM = (function() {
  return this.wa();
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  hF: 1,
  a9: 1,
  L: 1,
  J: 1,
  I: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.gv = null;
  this.gv = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.l = (function() {
  return (!this.gv.c());
});
$p.d = (function() {
  if (this.gv.c()) {
    return $m_sc_Iterator$().D.d();
  } else {
    var res = this.gv.B().n();
    this.gv = this.gv.B().aN();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  hH: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_List$() {
}
$p = $c_sci_List$.prototype = new $h_O();
$p.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $p;
$p.e5 = (function(elems) {
  return $m_sci_Nil$().z(elems);
});
$p.at = (function() {
  return new $c_scm_ListBuffer();
});
$p.bO = (function() {
  return $m_sci_Nil$();
});
$p.am = (function(source) {
  return $m_sci_Nil$().z(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  hK: 1,
  ay: 1,
  a1: 1,
  H: 1,
  a: 1
}));
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$();
  }
  return $n_sci_List$;
}
function $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__($thiz, outer) {
  $thiz.fa = outer;
  $thiz.dR = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.dR = 0;
  this.fa = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.l = (function() {
  return (this.dR < 2);
});
$p.d = (function() {
  switch (this.dR) {
    case 0: {
      var result = this.ck(this.fa.cw, this.fa.dp);
      break;
    }
    case 1: {
      var result = this.ck(this.fa.cx, this.fa.dq);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().D.d();
    }
  }
  this.dR = ((1 + this.dR) | 0);
  return result;
});
$p.d9 = (function(n) {
  this.dR = ((this.dR + n) | 0);
  return this;
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  $thiz.dS = outer;
  $thiz.dT = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.dT = 0;
  this.dS = null;
}
$p = $c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
}
$h_sci_Map$Map3$Map3Iterator.prototype = $p;
$p.l = (function() {
  return (this.dT < 3);
});
$p.d = (function() {
  switch (this.dT) {
    case 0: {
      var result = this.ck(this.dS.cc, this.dS.cY);
      break;
    }
    case 1: {
      var result = this.ck(this.dS.cd, this.dS.cZ);
      break;
    }
    case 2: {
      var result = this.ck(this.dS.ce, this.dS.d0);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().D.d();
    }
  }
  this.dT = ((1 + this.dT) | 0);
  return result;
});
$p.d9 = (function(n) {
  this.dT = ((this.dT + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  $thiz.d1 = outer;
  $thiz.dU = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.dU = 0;
  this.d1 = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.l = (function() {
  return (this.dU < 4);
});
$p.d = (function() {
  switch (this.dU) {
    case 0: {
      var result = this.ck(this.d1.bU, this.d1.cy);
      break;
    }
    case 1: {
      var result = this.ck(this.d1.bV, this.d1.cz);
      break;
    }
    case 2: {
      var result = this.ck(this.d1.bW, this.d1.cA);
      break;
    }
    case 3: {
      var result = this.ck(this.d1.bX, this.d1.cB);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().D.d();
    }
  }
  this.dU = ((1 + this.dU) | 0);
  return result;
});
$p.d9 = (function(n) {
  this.dU = ((this.dU + n) | 0);
  return this;
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.dV = null;
  this.hL = false;
  this.fb = null;
  this.dV = $m_sci_Map$EmptyMap$();
  this.hL = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.bt = (function(size) {
});
$p.sg = (function() {
  return (this.hL ? this.fb.mJ() : this.dV);
});
$p.tf = (function(key, value) {
  if (this.hL) {
    this.fb.fw(key, value);
  } else if ((this.dV.O() < 4)) {
    this.dV = this.dV.eU(key, value);
  } else if (this.dV.al(key)) {
    this.dV = this.dV.eU(key, value);
  } else {
    this.hL = true;
    if ((this.fb === null)) {
      this.fb = new $c_sci_HashMapBuilder();
    }
    this.dV.tH(this.fb);
    this.fb.fw(key, value);
  }
  return this;
});
$p.qW = (function(xs) {
  return (this.hL ? (this.fb.lP(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.b7 = (function(elems) {
  return this.qW(elems);
});
$p.as = (function(elem) {
  return this.tf(elem.bc(), elem.b6());
});
$p.aM = (function() {
  return this.sg();
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  hV: 1,
  a9: 1,
  L: 1,
  J: 1,
  I: 1
}));
/** @constructor */
function $c_sci_SetBuilderImpl() {
  this.fm = null;
  this.hO = false;
  this.fn = null;
  this.fm = $m_sci_Set$EmptySet$();
  this.hO = false;
}
$p = $c_sci_SetBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_SetBuilderImpl;
/** @constructor */
function $h_sci_SetBuilderImpl() {
}
$h_sci_SetBuilderImpl.prototype = $p;
$p.bt = (function(size) {
});
$p.sh = (function() {
  return (this.hO ? this.fn.mK() : this.fm);
});
$p.ti = (function(elem) {
  if (this.hO) {
    this.fn.jH(elem);
  } else if ((this.fm.O() < 4)) {
    this.fm = this.fm.dA(elem);
  } else if ((!this.fm.al(elem))) {
    this.hO = true;
    if ((this.fn === null)) {
      this.fn = new $c_sci_HashSetBuilder();
    }
    this.fm.tI(this.fn);
    this.fn.jH(elem);
  }
  return this;
});
$p.qX = (function(xs) {
  return (this.hO ? (this.fn.lQ(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.b7 = (function(elems) {
  return this.qX(elems);
});
$p.as = (function(elem) {
  return this.ti(elem);
});
$p.aM = (function() {
  return this.sh();
});
var $d_sci_SetBuilderImpl = new $TypeData().i($c_sci_SetBuilderImpl, "scala.collection.immutable.SetBuilderImpl", ({
  id: 1,
  a9: 1,
  L: 1,
  J: 1,
  I: 1
}));
function $ps_sci_Vector$__liftedTree1$1__I() {
  try {
    return $m_jl_Integer$().mG($m_jl_System$SystemProperties$().mh("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10);
  } catch (e) {
    if (false) {
      return 250;
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_sci_Vector$() {
  this.qo = 0;
  this.qp = null;
  $n_sci_Vector$ = this;
  this.qo = $ps_sci_Vector$__liftedTree1$1__I();
  this.qp = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.e5 = (function(elems) {
  return this.bF(elems);
});
$p.bF = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    return it;
  } else {
    var knownSize = it.q();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      matchEnd5: {
        var $x_1;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x = it.aS().bl();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.dm;
            break matchEnd5;
          }
        }
        if ($is_sci_Iterable(it)) {
          var a1 = new $ac_O(knownSize);
          it.bZ(a1, 0, 2147483647);
          var $x_1 = a1;
          break matchEnd5;
        }
        var a1$2 = new $ac_O(knownSize);
        it.e().bZ(a1$2, 0, 2147483647);
        var $x_1 = a1$2;
      }
      return new $c_sci_Vector1($x_1);
    } else {
      return new $c_sci_VectorBuilder().gK(it).iD();
    }
  }
});
$p.at = (function() {
  return new $c_sci_VectorBuilder();
});
$p.am = (function(source) {
  return this.bF(source);
});
$p.bO = (function() {
  return $m_sci_Vector0$();
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  il: 1,
  ay: 1,
  a1: 1,
  H: 1,
  a: 1
}));
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$();
  }
  return $n_sci_Vector$;
}
function $p_sci_VectorBuilder__leftAlignPrefix__V($thiz) {
  var a = null;
  var aParent = null;
  if (($thiz.X >= 6)) {
    a = $thiz.bi;
    var i = (($thiz.Q >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.r(i, dest, 0, length);
    }
    var newOffset = (($thiz.Q % 33554432) | 0);
    $thiz.J = (($thiz.J - (($thiz.Q - newOffset) | 0)) | 0);
    $thiz.Q = newOffset;
    if (((($thiz.J >>> 25) | 0) === 0)) {
      $thiz.X = 5;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.X >= 5)) {
    if ((a === null)) {
      a = $thiz.aB;
    }
    var i$2 = (31 & (($thiz.Q >>> 20) | 0));
    if (($thiz.X === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.r(i$2, dest$1, 0, length$1);
      }
      $thiz.aB = a;
      var newOffset$1 = (($thiz.Q % 1048576) | 0);
      $thiz.J = (($thiz.J - (($thiz.Q - newOffset$1) | 0)) | 0);
      $thiz.Q = newOffset$1;
      if (((($thiz.J >>> 20) | 0) === 0)) {
        $thiz.X = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().aR(a, i$2, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.X >= 4)) {
    if ((a === null)) {
      a = $thiz.a8;
    }
    var i$3 = (31 & (($thiz.Q >>> 15) | 0));
    if (($thiz.X === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.r(i$3, dest$2, 0, length$2);
      }
      $thiz.a8 = a;
      var newOffset$2 = (($thiz.Q % 32768) | 0);
      $thiz.J = (($thiz.J - (($thiz.Q - newOffset$2) | 0)) | 0);
      $thiz.Q = newOffset$2;
      if (((($thiz.J >>> 15) | 0) === 0)) {
        $thiz.X = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().aR(a, i$3, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.X >= 3)) {
    if ((a === null)) {
      a = $thiz.V;
    }
    var i$4 = (31 & (($thiz.Q >>> 10) | 0));
    if (($thiz.X === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.r(i$4, dest$3, 0, length$3);
      }
      $thiz.V = a;
      var newOffset$3 = (($thiz.Q % 1024) | 0);
      $thiz.J = (($thiz.J - (($thiz.Q - newOffset$3) | 0)) | 0);
      $thiz.Q = newOffset$3;
      if (((($thiz.J >>> 10) | 0) === 0)) {
        $thiz.X = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().aR(a, i$4, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.X >= 2)) {
    if ((a === null)) {
      a = $thiz.P;
    }
    var i$5 = (31 & (($thiz.Q >>> 5) | 0));
    if (($thiz.X === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        src$4.r(i$5, dest$4, 0, length$4);
      }
      $thiz.P = a;
      var newOffset$4 = (($thiz.Q % 32) | 0);
      $thiz.J = (($thiz.J - (($thiz.Q - newOffset$4) | 0)) | 0);
      $thiz.Q = newOffset$4;
      if (((($thiz.J >>> 5) | 0) === 0)) {
        $thiz.X = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().aR(a, i$5, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.X >= 1)) {
    if ((a === null)) {
      a = $thiz.aj;
    }
    var i$6 = (31 & $thiz.Q);
    if (($thiz.X === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.r(i$6, dest$5, 0, length$5);
      }
      $thiz.aj = a;
      $thiz.S = (($thiz.S - $thiz.Q) | 0);
      $thiz.Q = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().aR(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.hP = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.a.length;
  if ((dl > 0)) {
    if (($thiz.S === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.S) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.aj;
    var destPos = $thiz.S;
    data.r(0, dest, destPos, copy1);
    $thiz.S = (($thiz.S + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.aj;
      data.r(copy1, dest$1, 0, copy2);
      $thiz.S = (($thiz.S + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if ((slice.a.length === 0)) {
    return (void 0);
  }
  if (($thiz.S === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = slice.a.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.J) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.J >>> 5) | 0));
      var dest = $thiz.P;
      slice.r(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.P;
        slice.r(copy1, dest$1, 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      if (((($thiz.J % 1024) | 0) !== 0)) {
        var f = ((e$2$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2, 2);
        });
        var len = slice.a.length;
        var i = 0;
        if ((slice !== null)) {
          while ((i < len)) {
            var x0 = slice.a[i];
            f(x0);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i < len)) {
            var x0$1 = slice.a[i];
            f(x0$1);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i < len)) {
            var x0$2 = slice.a[i];
            f(x0$2);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i < len)) {
            var t = slice.a[i];
            var lo = t.s;
            var hi = t.w;
            f(new $c_RTLong(lo, hi));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i < len)) {
            var x0$3 = slice.a[i];
            f(x0$3);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i < len)) {
            var x0$4 = slice.a[i];
            f($bC(x0$4));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i < len)) {
            var x0$5 = slice.a[i];
            f(x0$5);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i < len)) {
            var x0$6 = slice.a[i];
            f(x0$6);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i < len)) {
            var x0$7 = slice.a[i];
            f(x0$7);
            i = ((1 + i) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$1 = (31 & ((((32768 - $thiz.J) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.J >>> 10) | 0));
      var dest$2 = $thiz.V;
      slice.r(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.V;
        slice.r(copy1$2, dest$3, 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      if (((($thiz.J % 32768) | 0) !== 0)) {
        var f$1 = ((e$2$2$1) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2$1, 3);
        });
        var len$1 = slice.a.length;
        var i$1 = 0;
        if ((slice !== null)) {
          while ((i$1 < len$1)) {
            var x0$8 = slice.a[i$1];
            f$1(x0$8);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$1 < len$1)) {
            var x0$9 = slice.a[i$1];
            f$1(x0$9);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$1 < len$1)) {
            var x0$10 = slice.a[i$1];
            f$1(x0$10);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$1 < len$1)) {
            var t$1 = slice.a[i$1];
            var lo$1 = t$1.s;
            var hi$1 = t$1.w;
            f$1(new $c_RTLong(lo$1, hi$1));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$1 < len$1)) {
            var x0$11 = slice.a[i$1];
            f$1(x0$11);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$1 < len$1)) {
            var x0$12 = slice.a[i$1];
            f$1($bC(x0$12));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$1 < len$1)) {
            var x0$13 = slice.a[i$1];
            f$1(x0$13);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$1 < len$1)) {
            var x0$14 = slice.a[i$1];
            f$1(x0$14);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$1 < len$1)) {
            var x0$15 = slice.a[i$1];
            f$1(x0$15);
            i$1 = ((1 + i$1) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$2 = (31 & ((((1048576 - $thiz.J) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.J >>> 15) | 0));
      var dest$4 = $thiz.a8;
      slice.r(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.a8;
        slice.r(copy1$3, dest$5, 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      if (((($thiz.J % 1048576) | 0) !== 0)) {
        var f$2 = ((e$2$2$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2$2, 4);
        });
        var len$2 = slice.a.length;
        var i$2 = 0;
        if ((slice !== null)) {
          while ((i$2 < len$2)) {
            var x0$16 = slice.a[i$2];
            f$2(x0$16);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$2 < len$2)) {
            var x0$17 = slice.a[i$2];
            f$2(x0$17);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$2 < len$2)) {
            var x0$18 = slice.a[i$2];
            f$2(x0$18);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$2 < len$2)) {
            var t$2 = slice.a[i$2];
            var lo$2 = t$2.s;
            var hi$2 = t$2.w;
            f$2(new $c_RTLong(lo$2, hi$2));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$2 < len$2)) {
            var x0$19 = slice.a[i$2];
            f$2(x0$19);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$2 < len$2)) {
            var x0$20 = slice.a[i$2];
            f$2($bC(x0$20));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$2 < len$2)) {
            var x0$21 = slice.a[i$2];
            f$2(x0$21);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$2 < len$2)) {
            var x0$22 = slice.a[i$2];
            f$2(x0$22);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$2 < len$2)) {
            var x0$23 = slice.a[i$2];
            f$2(x0$23);
            i$2 = ((1 + i$2) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$3 = (31 & ((((33554432 - $thiz.J) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.J >>> 20) | 0));
      var dest$6 = $thiz.aB;
      slice.r(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.aB;
        slice.r(copy1$4, dest$7, 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      if (((($thiz.J % 33554432) | 0) !== 0)) {
        var f$3 = ((e$2$2$3) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2$3, 5);
        });
        var len$3 = slice.a.length;
        var i$3 = 0;
        if ((slice !== null)) {
          while ((i$3 < len$3)) {
            var x0$24 = slice.a[i$3];
            f$3(x0$24);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$3 < len$3)) {
            var x0$25 = slice.a[i$3];
            f$3(x0$25);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$3 < len$3)) {
            var x0$26 = slice.a[i$3];
            f$3(x0$26);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$3 < len$3)) {
            var t$3 = slice.a[i$3];
            var lo$3 = t$3.s;
            var hi$3 = t$3.w;
            f$3(new $c_RTLong(lo$3, hi$3));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$3 < len$3)) {
            var x0$27 = slice.a[i$3];
            f$3(x0$27);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$3 < len$3)) {
            var x0$28 = slice.a[i$3];
            f$3($bC(x0$28));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$3 < len$3)) {
            var x0$29 = slice.a[i$3];
            f$3(x0$29);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$3 < len$3)) {
            var x0$30 = slice.a[i$3];
            f$3(x0$30);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$3 < len$3)) {
            var x0$31 = slice.a[i$3];
            f$3(x0$31);
            i$3 = ((1 + i$3) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var destPos$5 = (($thiz.J >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.bi;
      slice.r(0, dest$8, destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break;
    }
    default: {
      throw new $c_s_MatchError(dim);
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = xs.dj();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.dB(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var x1 = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
    } else if ((($thiz.S === 32) || ($thiz.S === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1);
    } else {
      $m_sci_VectorStatics$().m9((((-2) + x1) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((data$2$2) => {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$2$2);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.J) | 0);
  var xor = (idx ^ $thiz.J);
  $thiz.J = idx;
  $thiz.S = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.J + n) | 0);
    var xor = (idx ^ $thiz.J);
    $thiz.J = idx;
    $thiz.S = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.aj) + ", a2=") + $thiz.P) + ", a3=") + $thiz.V) + ", a4=") + $thiz.a8) + ", a5=") + $thiz.aB) + ", a6=") + $thiz.bi) + ", depth=") + $thiz.X));
  } else if ((xor < 1024)) {
    if (($thiz.X <= 1)) {
      $thiz.P = new ($d_O.r().r().C)(32);
      $thiz.P.a[0] = $thiz.aj;
      $thiz.X = 2;
    }
    $thiz.aj = new $ac_O(32);
    $thiz.P.a[(31 & ((idx >>> 5) | 0))] = $thiz.aj;
  } else if ((xor < 32768)) {
    if (($thiz.X <= 2)) {
      $thiz.V = new ($d_O.r().r().r().C)(32);
      $thiz.V.a[0] = $thiz.P;
      $thiz.X = 3;
    }
    $thiz.aj = new $ac_O(32);
    $thiz.P = new ($d_O.r().r().C)(32);
    $thiz.P.a[(31 & ((idx >>> 5) | 0))] = $thiz.aj;
    $thiz.V.a[(31 & ((idx >>> 10) | 0))] = $thiz.P;
  } else if ((xor < 1048576)) {
    if (($thiz.X <= 3)) {
      $thiz.a8 = new ($d_O.r().r().r().r().C)(32);
      $thiz.a8.a[0] = $thiz.V;
      $thiz.X = 4;
    }
    $thiz.aj = new $ac_O(32);
    $thiz.P = new ($d_O.r().r().C)(32);
    $thiz.V = new ($d_O.r().r().r().C)(32);
    $thiz.P.a[(31 & ((idx >>> 5) | 0))] = $thiz.aj;
    $thiz.V.a[(31 & ((idx >>> 10) | 0))] = $thiz.P;
    $thiz.a8.a[(31 & ((idx >>> 15) | 0))] = $thiz.V;
  } else if ((xor < 33554432)) {
    if (($thiz.X <= 4)) {
      $thiz.aB = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.aB.a[0] = $thiz.a8;
      $thiz.X = 5;
    }
    $thiz.aj = new $ac_O(32);
    $thiz.P = new ($d_O.r().r().C)(32);
    $thiz.V = new ($d_O.r().r().r().C)(32);
    $thiz.a8 = new ($d_O.r().r().r().r().C)(32);
    $thiz.P.a[(31 & ((idx >>> 5) | 0))] = $thiz.aj;
    $thiz.V.a[(31 & ((idx >>> 10) | 0))] = $thiz.P;
    $thiz.a8.a[(31 & ((idx >>> 15) | 0))] = $thiz.V;
    $thiz.aB.a[(31 & ((idx >>> 20) | 0))] = $thiz.a8;
  } else {
    if (($thiz.X <= 5)) {
      $thiz.bi = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.bi.a[0] = $thiz.aB;
      $thiz.X = 6;
    }
    $thiz.aj = new $ac_O(32);
    $thiz.P = new ($d_O.r().r().C)(32);
    $thiz.V = new ($d_O.r().r().r().C)(32);
    $thiz.a8 = new ($d_O.r().r().r().r().C)(32);
    $thiz.aB = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.P.a[(31 & ((idx >>> 5) | 0))] = $thiz.aj;
    $thiz.V.a[(31 & ((idx >>> 10) | 0))] = $thiz.P;
    $thiz.a8.a[(31 & ((idx >>> 15) | 0))] = $thiz.V;
    $thiz.aB.a[(31 & ((idx >>> 20) | 0))] = $thiz.a8;
    $thiz.bi.a[((idx >>> 25) | 0)] = $thiz.aB;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.bi = null;
  this.aB = null;
  this.a8 = null;
  this.V = null;
  this.P = null;
  this.aj = null;
  this.S = 0;
  this.J = 0;
  this.Q = 0;
  this.hP = false;
  this.X = 0;
  this.aj = new $ac_O(32);
  this.S = 0;
  this.J = 0;
  this.Q = 0;
  this.hP = false;
  this.X = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.bt = (function(size) {
});
$p.rU = (function(v) {
  var x1 = v.dj();
  switch (x1) {
    case 0: {
      break;
    }
    case 1: {
      this.X = 1;
      var i = v.f.a.length;
      this.S = (31 & i);
      this.J = ((i - this.S) | 0);
      var a = v.f;
      this.aj = ((a.a.length === 32) ? a : $m_ju_Arrays$().aR(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.bh;
      var a$1 = v.g;
      this.aj = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().aR(a$1, 0, 32));
      this.X = 2;
      this.Q = ((32 - v.bz) | 0);
      var i$1 = ((v.h + this.Q) | 0);
      this.S = (31 & i$1);
      this.J = ((i$1 - this.S) | 0);
      this.P = new ($d_O.r().r().C)(32);
      this.P.a[0] = v.f;
      var dest = this.P;
      var length = d2.a.length;
      d2.r(0, dest, 1, length);
      this.P.a[((1 + d2.a.length) | 0)] = this.aj;
      break;
    }
    case 5: {
      var d3 = v.aU;
      var s2 = v.b0;
      var a$2 = v.g;
      this.aj = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().aR(a$2, 0, 32));
      this.X = 3;
      this.Q = ((1024 - v.ba) | 0);
      var i$2 = ((v.h + this.Q) | 0);
      this.S = (31 & i$2);
      this.J = ((i$2 - this.S) | 0);
      this.V = new ($d_O.r().r().r().C)(32);
      this.V.a[0] = $m_sci_VectorStatics$().G(v.f, v.bq);
      var dest$1 = this.V;
      var length$1 = d3.a.length;
      d3.r(0, dest$1, 1, length$1);
      this.P = $m_ju_Arrays$().ab(s2, 32);
      this.V.a[((1 + d3.a.length) | 0)] = this.P;
      this.P.a[s2.a.length] = this.aj;
      break;
    }
    case 7: {
      var d4 = v.ap;
      var s3 = v.av;
      var s2$2 = v.au;
      var a$3 = v.g;
      this.aj = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().aR(a$3, 0, 32));
      this.X = 4;
      this.Q = ((32768 - v.aG) | 0);
      var i$3 = ((v.h + this.Q) | 0);
      this.S = (31 & i$3);
      this.J = ((i$3 - this.S) | 0);
      this.a8 = new ($d_O.r().r().r().r().C)(32);
      this.a8.a[0] = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(v.f, v.b2), v.b3);
      var dest$2 = this.a8;
      var length$2 = d4.a.length;
      d4.r(0, dest$2, 1, length$2);
      this.V = $m_ju_Arrays$().ab(s3, 32);
      this.P = $m_ju_Arrays$().ab(s2$2, 32);
      this.a8.a[((1 + d4.a.length) | 0)] = this.V;
      this.V.a[s3.a.length] = this.P;
      this.P.a[s2$2.a.length] = this.aj;
      break;
    }
    case 9: {
      var d5 = v.a2;
      var s4 = v.a6;
      var s3$2 = v.a5;
      var s2$3 = v.a4;
      var a$4 = v.g;
      this.aj = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().aR(a$4, 0, 32));
      this.X = 5;
      this.Q = ((1048576 - v.a9) | 0);
      var i$4 = ((v.h + this.Q) | 0);
      this.S = (31 & i$4);
      this.J = ((i$4 - this.S) | 0);
      this.aB = new ($d_O.r().r().r().r().r().C)(32);
      this.aB.a[0] = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(v.f, v.ax), v.ay), v.az);
      var dest$3 = this.aB;
      var length$3 = d5.a.length;
      d5.r(0, dest$3, 1, length$3);
      this.a8 = $m_ju_Arrays$().ab(s4, 32);
      this.V = $m_ju_Arrays$().ab(s3$2, 32);
      this.P = $m_ju_Arrays$().ab(s2$3, 32);
      this.aB.a[((1 + d5.a.length) | 0)] = this.a8;
      this.a8.a[s4.a.length] = this.V;
      this.V.a[s3$2.a.length] = this.P;
      this.P.a[s2$3.a.length] = this.aj;
      break;
    }
    case 11: {
      var d6 = v.W;
      var s5 = v.a1;
      var s4$2 = v.a0;
      var s3$3 = v.Z;
      var s2$4 = v.Y;
      var a$5 = v.g;
      this.aj = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().aR(a$5, 0, 32));
      this.X = 6;
      this.Q = ((33554432 - v.a7) | 0);
      var i$5 = ((v.h + this.Q) | 0);
      this.S = (31 & i$5);
      this.J = ((i$5 - this.S) | 0);
      this.bi = new ($d_O.r().r().r().r().r().r().C)(64);
      this.bi.a[0] = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(v.f, v.af), v.ag), v.ah), v.ai);
      var dest$4 = this.bi;
      var length$4 = d6.a.length;
      d6.r(0, dest$4, 1, length$4);
      this.aB = $m_ju_Arrays$().ab(s5, 32);
      this.a8 = $m_ju_Arrays$().ab(s4$2, 32);
      this.V = $m_ju_Arrays$().ab(s3$3, 32);
      this.P = $m_ju_Arrays$().ab(s2$4, 32);
      this.bi.a[((1 + d6.a.length) | 0)] = this.aB;
      this.aB.a[s5.a.length] = this.a8;
      this.a8.a[s4$2.a.length] = this.V;
      this.V.a[s3$3.a.length] = this.P;
      this.P.a[s2$4.a.length] = this.aj;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  if (((this.S === 0) && (this.J > 0))) {
    this.S = 32;
    this.J = (((-32) + this.J) | 0);
  }
  return this;
});
$p.tp = (function(before, bigVector) {
  if (((this.S !== 0) || (this.J !== 0))) {
    throw new $c_jl_UnsupportedOperationException("A non-empty VectorBuilder cannot be aligned retrospectively. Please call .reset() or use a new VectorBuilder.");
  }
  if ($m_sci_Vector0$().k(bigVector)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = 0;
    var x1$2___2$mcI$sp = 1;
  } else if ((bigVector instanceof $c_sci_Vector1)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = 0;
    var x1$2___2$mcI$sp = 1;
  } else if ((bigVector instanceof $c_sci_Vector2)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.bz;
    var x1$2___2$mcI$sp = 32;
  } else if ((bigVector instanceof $c_sci_Vector3)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.ba;
    var x1$2___2$mcI$sp = 1024;
  } else if ((bigVector instanceof $c_sci_Vector4)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.aG;
    var x1$2___2$mcI$sp = 32768;
  } else if ((bigVector instanceof $c_sci_Vector5)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.a9;
    var x1$2___2$mcI$sp = 1048576;
  } else {
    if ((!(bigVector instanceof $c_sci_Vector6))) {
      throw new $c_s_MatchError(bigVector);
    }
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.a7;
    var x1$2___2$mcI$sp = 33554432;
  }
  var prefixLength = x1$2___1$mcI$sp;
  var maxPrefixLength = x1$2___2$mcI$sp;
  if ((maxPrefixLength === 1)) {
    return this;
  }
  var overallPrefixLength = $intMod(((before + prefixLength) | 0), maxPrefixLength);
  this.Q = $intMod(((maxPrefixLength - overallPrefixLength) | 0), maxPrefixLength);
  $p_sci_VectorBuilder__advanceN__I__V(this, ((-32) & this.Q));
  this.S = (31 & this.Q);
  this.hP = true;
  return this;
});
$p.tj = (function(elem) {
  if ((this.S === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.aj.a[this.S] = elem;
  this.S = ((1 + this.S) | 0);
  return this;
});
$p.gK = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.S === 0) && (this.J === 0)) && (!this.hP)) ? this.rU(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.iD = (function() {
  if (this.hP) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.S + this.J) | 0);
  var realLen = ((len - this.Q) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.aj;
    return new $c_sci_Vector1(((a.a.length === realLen) ? a : $m_ju_Arrays$().ab(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & (((-1) + len) | 0));
    var i2 = (((((-1) + len) | 0) >>> 5) | 0);
    var data = $m_ju_Arrays$().aR(this.P, 1, i2);
    var prefix1 = this.P.a[0];
    var a$1 = this.P.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().ab(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.Q) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().aR(this.V, 1, i3);
    var a$2 = this.V.a[0];
    var prefix2 = $m_ju_Arrays$().aR(a$2, 1, a$2.a.length);
    var prefix1$2 = this.V.a[0].a[0];
    var suffix2 = $m_ju_Arrays$().ab(this.V.a[i3], i2$2);
    var a$3 = this.V.a[i3].a[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$3.a.length === len$2) ? a$3 : $m_ju_Arrays$().ab(a$3, len$2));
    var len1 = prefix1$2.a.length;
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, ((len1 + (prefix2.a.length << 5)) | 0), data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var data$3 = $m_ju_Arrays$().aR(this.a8, 1, i4);
    var a$4 = this.a8.a[0];
    var prefix3 = $m_ju_Arrays$().aR(a$4, 1, a$4.a.length);
    var a$5 = this.a8.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().aR(a$5, 1, a$5.a.length);
    var prefix1$3 = this.a8.a[0].a[0].a[0];
    var suffix3 = $m_ju_Arrays$().ab(this.a8.a[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().ab(this.a8.a[i4].a[i3$2], i2$3);
    var a$6 = this.a8.a[i4].a[i3$2].a[i2$3];
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = ((a$6.a.length === len$3) ? a$6 : $m_ju_Arrays$().ab(a$6, len$3));
    var len1$2 = prefix1$3.a.length;
    var len12$2 = ((len1$2 + (prefix2$2.a.length << 5)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, ((len12$2 + (prefix3.a.length << 10)) | 0), data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & (((-1) + len) | 0));
    var i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5 = (((((-1) + len) | 0) >>> 20) | 0);
    var data$4 = $m_ju_Arrays$().aR(this.aB, 1, i5);
    var a$7 = this.aB.a[0];
    var prefix4 = $m_ju_Arrays$().aR(a$7, 1, a$7.a.length);
    var a$8 = this.aB.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().aR(a$8, 1, a$8.a.length);
    var a$9 = this.aB.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().aR(a$9, 1, a$9.a.length);
    var prefix1$4 = this.aB.a[0].a[0].a[0].a[0];
    var suffix4 = $m_ju_Arrays$().ab(this.aB.a[i5], i4$2);
    var suffix3$2 = $m_ju_Arrays$().ab(this.aB.a[i5].a[i4$2], i3$3);
    var suffix2$3 = $m_ju_Arrays$().ab(this.aB.a[i5].a[i4$2].a[i3$3], i2$4);
    var a$10 = this.aB.a[i5].a[i4$2].a[i3$3].a[i2$4];
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = ((a$10.a.length === len$4) ? a$10 : $m_ju_Arrays$().ab(a$10, len$4));
    var len1$3 = prefix1$4.a.length;
    var len12$3 = ((len1$3 + (prefix2$3.a.length << 5)) | 0);
    var len123$2 = ((len12$3 + (prefix3$2.a.length << 10)) | 0);
    return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, ((len123$2 + (prefix4.a.length << 15)) | 0), data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen);
  } else {
    var i1$5 = (31 & (((-1) + len) | 0));
    var i2$5 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$4 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$3 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5$2 = (31 & (((((-1) + len) | 0) >>> 20) | 0));
    var i6 = (((((-1) + len) | 0) >>> 25) | 0);
    var data$5 = $m_ju_Arrays$().aR(this.bi, 1, i6);
    var a$11 = this.bi.a[0];
    var prefix5 = $m_ju_Arrays$().aR(a$11, 1, a$11.a.length);
    var a$12 = this.bi.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().aR(a$12, 1, a$12.a.length);
    var a$13 = this.bi.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().aR(a$13, 1, a$13.a.length);
    var a$14 = this.bi.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().aR(a$14, 1, a$14.a.length);
    var prefix1$5 = this.bi.a[0].a[0].a[0].a[0].a[0];
    var suffix5 = $m_ju_Arrays$().ab(this.bi.a[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().ab(this.bi.a[i6].a[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().ab(this.bi.a[i6].a[i5$2].a[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().ab(this.bi.a[i6].a[i5$2].a[i4$3].a[i3$4], i2$5);
    var a$15 = this.bi.a[i6].a[i5$2].a[i4$3].a[i3$4].a[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.a.length === len$5) ? a$15 : $m_ju_Arrays$().ab(a$15, len$5));
    var len1$4 = prefix1$5.a.length;
    var len12$4 = ((len1$4 + (prefix2$4.a.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.v = (function() {
  return (((((((("VectorBuilder(len1=" + this.S) + ", lenRest=") + this.J) + ", offset=") + this.Q) + ", depth=") + this.X) + ")");
});
$p.aM = (function() {
  return this.iD();
});
$p.b7 = (function(elems) {
  return this.gK(elems);
});
$p.as = (function(elem) {
  return this.tj(elem);
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  io: 1,
  a9: 1,
  L: 1,
  J: 1,
  I: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.qq = null;
  $n_scm_ArrayBuffer$ = this;
  this.qq = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.e5 = (function(elems) {
  return this.rI(elems);
});
$p.rI = (function(coll) {
  var k = coll.q();
  if ((k >= 0)) {
    var array = this.sk(this.qq, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.bZ(array, 0, 2147483647) : coll.e().bZ(array, 0, 2147483647));
    if ((actual !== k)) {
      throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), ((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).qY(coll);
  }
});
$p.at = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.w9 = (function(arrayLen, targetLen) {
  if ((targetLen < 0)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((((("Overflow while resizing array of array-backed collection. Requested length: " + targetLen) + "; current length: ") + arrayLen) + "; increase: ") + ((targetLen - arrayLen) | 0)));
  } else if ((targetLen <= arrayLen)) {
    return (-1);
  } else if ((targetLen > 2147483639)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((("Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: " + targetLen) + "; current length: ") + arrayLen));
  } else if ((arrayLen > 1073741819)) {
    return 2147483639;
  } else {
    var x = (arrayLen << 1);
    var y = ((x > 16) ? x : 16);
    return ((targetLen > y) ? targetLen : y);
  }
});
$p.sk = (function(array, curSize, targetSize) {
  var newLen = this.w9(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.r(0, res, 0, curSize);
    return res;
  }
});
$p.bO = (function() {
  return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
});
$p.am = (function(source) {
  return this.rI(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  it: 1,
  ay: 1,
  a1: 1,
  H: 1,
  a: 1
}));
var $n_scm_ArrayBuffer$;
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$();
  }
  return $n_scm_ArrayBuffer$;
}
/** @constructor */
function $c_scm_ArrayBuffer$$anon$1() {
  this.eH = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.bt = (function(size) {
  this.eH.bt(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  iu: 1,
  bj: 1,
  L: 1,
  J: 1,
  I: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.eq = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  iz: 1,
  bb: 1,
  a1: 1,
  H: 1,
  a: 1
}));
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$();
  }
  return $n_scm_Buffer$;
}
/** @constructor */
function $c_scm_HashSet$$anon$4(initialCapacity$1, loadFactor$1) {
  this.eH = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), initialCapacity$1, loadFactor$1));
}
$p = $c_scm_HashSet$$anon$4.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_HashSet$$anon$4;
/** @constructor */
function $h_scm_HashSet$$anon$4() {
}
$h_scm_HashSet$$anon$4.prototype = $p;
$p.bt = (function(size) {
  this.eH.bt(size);
});
var $d_scm_HashSet$$anon$4 = new $TypeData().i($c_scm_HashSet$$anon$4, "scala.collection.mutable.HashSet$$anon$4", ({
  iJ: 1,
  bj: 1,
  L: 1,
  J: 1,
  I: 1
}));
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  $thiz.hS = outer;
  $thiz.eJ = 0;
  $thiz.e0 = null;
  $thiz.hT = outer.bB.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.eJ = 0;
  this.e0 = null;
  this.hT = 0;
  this.hS = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.l = (function() {
  if ((this.e0 !== null)) {
    return true;
  } else {
    while ((this.eJ < this.hT)) {
      var n = this.hS.bB.a[this.eJ];
      this.eJ = ((1 + this.eJ) | 0);
      if ((n !== null)) {
        this.e0 = n;
        return true;
      }
    }
    return false;
  }
});
$p.d = (function() {
  if ((!this.l())) {
    return $m_sc_Iterator$().D.d();
  } else {
    var r = this.m8(this.e0);
    this.e0 = this.e0.bC;
    return r;
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.hU = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.hU = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.bt = (function(size) {
});
$p.b7 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.aM = (function() {
  return this.hU;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.eq = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  iM: 1,
  bb: 1,
  a1: 1,
  H: 1,
  a: 1
}));
var $n_scm_IndexedSeq$;
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$();
  }
  return $n_scm_IndexedSeq$;
}
/** @constructor */
function $c_scm_ListBuffer$() {
}
$p = $c_scm_ListBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ListBuffer$;
/** @constructor */
function $h_scm_ListBuffer$() {
}
$h_scm_ListBuffer$.prototype = $p;
$p.e5 = (function(elems) {
  return new $c_scm_ListBuffer().k2(elems);
});
$p.at = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.bO = (function() {
  return new $c_scm_ListBuffer();
});
$p.am = (function(source) {
  return new $c_scm_ListBuffer().k2(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  iP: 1,
  ay: 1,
  a1: 1,
  H: 1,
  a: 1
}));
var $n_scm_ListBuffer$;
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$();
  }
  return $n_scm_ListBuffer$;
}
/** @constructor */
function $c_scm_MutationTracker$CheckedIterator(underlying, mutationCount) {
  this.lH = null;
  this.qy = null;
  this.qx = 0;
  this.lH = underlying;
  this.qy = mutationCount;
  this.qx = (mutationCount.L() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.l = (function() {
  $m_scm_MutationTracker$().rj(this.qx, (this.qy.L() | 0), "mutation occurred during iteration");
  return this.lH.l();
});
$p.d = (function() {
  return this.lH.d();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  iR: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.bl();
    var x$3 = x.bl();
    return (x$2 === x$3);
  } else {
    return false;
  }
}
function $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz) {
  return (clazz.F.Z ? (("Array[" + $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz.F.Q())) + "]") : clazz.F.N);
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.M)));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.M)));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.hW = 0;
  this.qC = 0;
  this.qD = null;
  this.qD = x$2;
  this.hW = 0;
  this.qC = x$2.aJ();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.l = (function() {
  return (this.hW < this.qC);
});
$p.d = (function() {
  var result = this.qD.aK(this.hW);
  this.hW = ((1 + this.hW) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  jI: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray$() {
}
$p = $c_sjs_js_WrappedArray$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
}
$h_sjs_js_WrappedArray$.prototype = $p;
$p.e5 = (function(elems) {
  return this.rJ(elems);
});
$p.at = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.rJ = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).aM();
});
$p.am = (function(source) {
  return this.rJ(source);
});
$p.bO = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  jP: 1,
  ay: 1,
  a1: 1,
  H: 1,
  a: 1
}));
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$();
  }
  return $n_sjs_js_WrappedArray$;
}
/** @constructor */
function $c_sjsr_WrappedVarArgs$() {
}
$p = $c_sjsr_WrappedVarArgs$.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs$;
/** @constructor */
function $h_sjsr_WrappedVarArgs$() {
}
$h_sjsr_WrappedVarArgs$.prototype = $p;
$p.e5 = (function(elems) {
  return this.me(elems);
});
$p.me = (function(source) {
  return this.at().b7(source).aM();
});
$p.at = (function() {
  return new $c_scm_Builder$$anon$1($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), x$1$2$2.eK))));
});
$p.am = (function(source) {
  return this.me(source);
});
$p.bO = (function() {
  return $ct_sjsr_WrappedVarArgs__(new $c_sjsr_WrappedVarArgs());
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  k3: 1,
  ay: 1,
  a1: 1,
  H: 1,
  a: 1
}));
var $n_sjsr_WrappedVarArgs$;
function $m_sjsr_WrappedVarArgs$() {
  if ((!$n_sjsr_WrappedVarArgs$)) {
    $n_sjsr_WrappedVarArgs$ = new $c_sjsr_WrappedVarArgs$();
  }
  return $n_sjsr_WrappedVarArgs$;
}
/** @constructor */
function $c_s_util_Failure(exception) {
  this.du = null;
  this.du = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.mp = (function() {
  return true;
});
$p.rX = (function() {
  return false;
});
$p.E = (function() {
  var $x_1 = this.du;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.ak : $x_1);
});
$p.mw = (function(f) {
  return this;
});
$p.sb = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.c5(this.du, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().cP(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
  }
});
$p.sv = (function() {
  return $m_s_None$();
});
$p.cE = (function(fa, fb) {
  return fa.b(this.du);
});
$p.aL = (function() {
  return "Failure";
});
$p.aJ = (function() {
  return 1;
});
$p.aK = (function(x$1) {
  return ((x$1 === 0) ? this.du : $m_sr_Statics$().e9(x$1));
});
$p.aX = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().fv(this);
});
$p.k = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_util_Failure)) {
    var x = this.du;
    var x$2 = x$1.du;
    return ((x === null) ? (x$2 === null) : x.k(x$2));
  } else {
    return false;
  }
});
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.df)));
}
var $d_s_util_Failure = new $TypeData().i($c_s_util_Failure, "scala.util.Failure", ({
  df: 1,
  dh: 1,
  x: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Success(value) {
  this.cN = null;
  this.cN = value;
}
$p = $c_s_util_Success.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $p;
$p.mp = (function() {
  return false;
});
$p.rX = (function() {
  return true;
});
$p.E = (function() {
  return this.cN;
});
$p.mw = (function(f) {
  try {
    return new $c_s_util_Success(f.b(this.cN));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().cP(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
  }
});
$p.sb = (function(pf) {
  return this;
});
$p.sv = (function() {
  return new $c_s_Some(this.cN);
});
$p.cE = (function(fa, fb) {
  try {
    return fb.b(this.cN);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().cP(e$2)) {
      return fa.b(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
  }
});
$p.aL = (function() {
  return "Success";
});
$p.aJ = (function() {
  return 1;
});
$p.aK = (function(x$1) {
  return ((x$1 === 0) ? this.cN : $m_sr_Statics$().e9(x$1));
});
$p.aX = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().fv(this);
});
$p.k = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().i(this.cN, x$1.cN)));
});
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dg)));
}
var $d_s_util_Success = new $TypeData().i($c_s_util_Success, "scala.util.Success", ({
  dg: 1,
  dh: 1,
  x: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_Lsi\uff3ftool_SIAdversaryTool$$anon$1(subString$2) {
  this.jx = null;
  this.jx = subString$2;
}
$p = $c_Lsi\uff3ftool_SIAdversaryTool$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lsi\uff3ftool_SIAdversaryTool$$anon$1;
/** @constructor */
function $h_Lsi\uff3ftool_SIAdversaryTool$$anon$1() {
}
$h_Lsi\uff3ftool_SIAdversaryTool$$anon$1.prototype = $p;
$p.va = (function(x) {
  var this$1 = this.jx;
  return (!(!this$1.startsWith(x)));
});
$p.tA = (function(x, default$1) {
  var this$1 = this.jx;
  if ((!(!this$1.startsWith(x)))) {
    return new $c_T2(x, $m_sc_StringOps$().m5(this.jx, x.length));
  } else {
    return default$1.b(x);
  }
});
$p.cj = (function(x) {
  return this.va(x);
});
$p.c5 = (function(x, default$1) {
  return this.tA(x, default$1);
});
var $d_Lsi\uff3ftool_SIAdversaryTool$$anon$1 = new $TypeData().i($c_Lsi\uff3ftool_SIAdversaryTool$$anon$1, "si_tool.SIAdversaryTool$$anon$1", ({
  ka: 1,
  aC: 1,
  i: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Lsi\uff3ftool_adversaries_RuleSet$$anon$1(stage$3, sel$2, outer) {
  this.lM = null;
  this.i7 = null;
  this.lM = stage$3;
  this.i7 = sel$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_Lsi\uff3ftool_adversaries_RuleSet$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lsi\uff3ftool_adversaries_RuleSet$$anon$1;
/** @constructor */
function $h_Lsi\uff3ftool_adversaries_RuleSet$$anon$1() {
}
$h_Lsi\uff3ftool_adversaries_RuleSet$$anon$1.prototype = $p;
$p.vb = (function(x) {
  if ((x !== null)) {
    var x7 = x.fq;
    var x8 = x.fs;
    var x10 = x.fr;
    var x$2 = this.lM;
    if ((x$2 === x8)) {
      if (((x7 <= this.i7.cg) && (x10.c() || ((x10.E() | 0) > this.i7.cg)))) {
        return true;
      }
    }
  }
  return false;
});
$p.tB = (function(x, default$1) {
  if ((x !== null)) {
    var x13 = x.fq;
    var x14 = x.fs;
    var x15 = x.gG;
    var x16 = x.fr;
    var x$2 = this.lM;
    if ((x$2 === x14)) {
      if (((x13 <= this.i7.cg) && (x16.c() || ((x16.E() | 0) > this.i7.cg)))) {
        return x15;
      }
    }
  }
  return default$1.b(x);
});
$p.cj = (function(x) {
  return this.vb(x);
});
$p.c5 = (function(x, default$1) {
  return this.tB(x, default$1);
});
var $d_Lsi\uff3ftool_adversaries_RuleSet$$anon$1 = new $TypeData().i($c_Lsi\uff3ftool_adversaries_RuleSet$$anon$1, "si_tool.adversaries.RuleSet$$anon$1", ({
  ke: 1,
  aC: 1,
  i: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Lsi\uff3ftool_adversaries_Stage() {
}
$p = $c_Lsi\uff3ftool_adversaries_Stage.prototype = new $h_O();
$p.constructor = $c_Lsi\uff3ftool_adversaries_Stage;
/** @constructor */
function $h_Lsi\uff3ftool_adversaries_Stage() {
}
$h_Lsi\uff3ftool_adversaries_Stage.prototype = $p;
$p.aX = (function() {
  return new $c_s_Product$$anon$1(this);
});
function $f_Lcom_raquo_airstream_combine_CombineObservable__onInputsReady__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  if ((!transaction.tR($thiz))) {
    transaction.uo($thiz);
  }
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__syncFire__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.gW($thiz.m1(), transaction);
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__onStart__V($thiz) {
  var arr = $thiz.kb;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var _$1 = arr[i];
    $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V(_$1.kd, _$1, false);
    i = ((1 + i) | 0);
  }
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__onStop__V($thiz) {
  var arr = $thiz.kb;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var _$2 = arr[i];
    $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V(_$2.kd, _$2);
    i = ((1 + i) | 0);
  }
}
class $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(causes) {
    super();
    this.hg = null;
    this.hg = causes;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, $m_Lcom_raquo_airstream_core_AirstreamError$().tN(causes), null, true, true);
    var this$3 = causes.eP($m_s_$less$colon$less$().cX).bP();
    if ((!this$3.c())) {
      this.jS(this$3.E());
    }
  }
  aX() {
    return new $c_s_Product$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
  }
  k(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError)) {
      var x = this.hg;
      var x$2 = x$0.hg;
      return ((x === null) ? (x$2 === null) : x.k(x$2));
    } else {
      return false;
    }
  }
  aJ() {
    return 1;
  }
  aL() {
    return "CombinedError";
  }
  aK(n) {
    if ((n === 0)) {
      return this.hg;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  v() {
    return ("CombinedError: " + $f_sc_IterableOnceOps__mkString__T__T__T__T(this.hg.eP($m_s_$less$colon$less$().cX).fL(), "", "; ", ""));
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$CombinedError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bq)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$CombinedError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$CombinedError, "com.raquo.airstream.core.AirstreamError$CombinedError", ({
  bq: 1,
  as: 1,
  r: 1,
  a: 1,
  d: 1,
  x: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.hi = null;
    this.hh = null;
    this.hi = error;
    this.hh = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eQ(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().eQ(cause)), null, true, true);
    this.jS(cause);
  }
  aX() {
    return new $c_s_Product$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
  }
  k(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.hi;
      var x$2 = x$0.hi;
      if (((x === null) ? (x$2 === null) : x.k(x$2))) {
        var x$3 = this.hh;
        var x$4 = x$0.hh;
        return ((x$3 === null) ? (x$4 === null) : x$3.k(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  aJ() {
    return 2;
  }
  aL() {
    return "ErrorHandlingError";
  }
  aK(n) {
    if ((n === 0)) {
      return this.hi;
    }
    if ((n === 1)) {
      return this.hh;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  v() {
    return ((("ErrorHandlingError: " + this.hi) + "; cause: ") + this.hh);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.br)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", ({
  br: 1,
  as: 1,
  r: 1,
  a: 1,
  d: 1,
  x: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.hj = null;
    this.hj = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eQ(error)), null, true, true);
  }
  aX() {
    return new $c_s_Product$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
  }
  k(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.hj;
      var x$2 = x$0.hj;
      return ((x === null) ? (x$2 === null) : x.k(x$2));
    } else {
      return false;
    }
  }
  aJ() {
    return 1;
  }
  aL() {
    return "ObserverError";
  }
  aK(n) {
    if ((n === 0)) {
      return this.hj;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  v() {
    return ("ObserverError: " + this.hj);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bs)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverError, "com.raquo.airstream.core.AirstreamError$ObserverError", ({
  bs: 1,
  as: 1,
  r: 1,
  a: 1,
  d: 1,
  x: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.hl = null;
    this.hk = null;
    this.hl = error;
    this.hk = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eQ(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().eQ(cause)), null, true, true);
    this.jS(cause);
  }
  aX() {
    return new $c_s_Product$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
  }
  k(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.hl;
      var x$2 = x$0.hl;
      if (((x === null) ? (x$2 === null) : x.k(x$2))) {
        var x$3 = this.hk;
        var x$4 = x$0.hk;
        return ((x$3 === null) ? (x$4 === null) : x$3.k(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  aJ() {
    return 2;
  }
  aL() {
    return "ObserverErrorHandlingError";
  }
  aK(n) {
    if ((n === 0)) {
      return this.hl;
    }
    if ((n === 1)) {
      return this.hk;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  v() {
    return ((("ObserverErrorHandlingError: " + this.hl) + "; cause: ") + this.hk);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bt)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", ({
  bt: 1,
  as: 1,
  r: 1,
  a: 1,
  d: 1,
  x: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(trx, depth) {
    super();
    this.fO = null;
    this.fN = 0;
    this.fO = trx;
    this.fN = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  aX() {
    return new $c_s_Product$$anon$1(this);
  }
  u() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().j(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().j(acc, $m_sr_Statics$().R(this.fO));
    acc = $m_sr_Statics$().j(acc, this.fN);
    return $m_sr_Statics$().H(acc, 2);
  }
  k(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.fN === x$0.fN)) {
        var x = this.fO;
        var x$2 = x$0.fO;
        return (x === x$2);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  aJ() {
    return 2;
  }
  aL() {
    return "TransactionDepthExceeded";
  }
  aK(n) {
    if ((n === 0)) {
      return this.fO;
    }
    if ((n === 1)) {
      return this.fN;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  v() {
    return ((("TransactionDepthExceeded: " + this.fO) + "; maxDepth: ") + this.fN);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bu)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded, "com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded", ({
  bu: 1,
  as: 1,
  r: 1,
  a: 1,
  d: 1,
  x: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$VarError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(message, cause) {
    super();
    this.hn = null;
    this.hm = null;
    this.hn = message;
    this.hm = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, $m_Lcom_raquo_airstream_core_AirstreamError$().tO(message, cause), null, true, true);
    if ((!cause.c())) {
      this.jS(cause.E());
    }
  }
  aX() {
    return new $c_s_Product$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
  }
  k(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$VarError)) {
      if ((this.hn === x$0.hn)) {
        var x = this.hm;
        var x$2 = x$0.hm;
        return ((x === null) ? (x$2 === null) : x.k(x$2));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  aJ() {
    return 2;
  }
  aL() {
    return "VarError";
  }
  aK(n) {
    if ((n === 0)) {
      return this.hn;
    }
    if ((n === 1)) {
      return this.hm;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  v() {
    return ((("VarError: " + this.hn) + "; cause: ") + this.hm);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$VarError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bv)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$VarError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$VarError, "com.raquo.airstream.core.AirstreamError$VarError", ({
  bv: 1,
  as: 1,
  r: 1,
  a: 1,
  d: 1,
  x: 1
}));
function $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz) {
  $thiz.iG();
}
var $d_Lcom_raquo_airstream_core_Signal = new $TypeData().i(1, "com.raquo.airstream.core.Signal", ({
  aJ: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aF: 1
}));
function $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V($thiz) {
  $thiz.no = 1;
  $thiz.iO = 0;
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V($thiz) {
  $thiz.iO = ((1 + $thiz.iO) | 0);
  $thiz.iN.ni.L();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V($thiz) {
  try {
    var $x_1 = new $c_s_util_Success(($thiz.iN.ng.L(), (void 0)));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().cP(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
    }
  }
  $x_1.sb(new $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1($thiz));
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V($thiz) {
  $thiz.iN.nh.L();
}
function $ct_Lcom_raquo_airstream_state_SourceVar__s_util_Try__($thiz, initial) {
  $thiz.ks = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz);
  $thiz.iU = initial;
  $thiz.iT = new $c_Lcom_raquo_airstream_state_VarSignal($thiz.iU, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz))));
  $thiz.b8 = $thiz.iT;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar() {
  this.ks = null;
  this.iV = null;
  this.iU = null;
  this.iT = null;
  this.b8 = null;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.eb = (function() {
  return this.ks;
});
$p.v = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.iF = (function() {
  return this.b8;
});
$p.mN = (function(value, transaction) {
  this.iU = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.iT, value, transaction);
});
$p.eS = (function() {
  return this.b8;
});
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V($thiz, propDomName) {
  var x = $thiz.kO;
  if ((x === (void 0))) {
    $thiz.kO = $m_sjs_js_defined$().ty($m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().A(new ($d_T.r().C)([propDomName]))));
  } else {
    (x.push(propDomName) | 0);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z($thiz, propDomName) {
  var x = $thiz.pp;
  if ((x !== (void 0))) {
    _return: {
      var len = (x.length | 0);
      var i = 0;
      while ((i < len)) {
        if ((x[i].xh() === propDomName)) {
          var $x_1 = i;
          break _return;
        }
        i = ((1 + i) | 0);
      }
      var $x_1 = (-1);
    }
    return ($x_1 >= 0);
  } else {
    return false;
  }
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(tag, ref) {
  this.j2 = null;
  this.cW = null;
  this.kN = null;
  this.f0 = null;
  this.hw = null;
  this.kP = null;
  this.bG = null;
  this.pp = null;
  this.kO = null;
  this.kP = tag;
  this.bG = ref;
  this.j2 = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
  this.pp = (void 0);
  this.kO = (void 0);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.dw = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gM(parentNode, this, (void 0));
});
$p.jK = (function() {
  return this.cW;
});
$p.rl = (function(x$0) {
  this.cW = x$0;
});
$p.iJ = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.iE = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.tS = (function() {
  if ($m_Lcom_raquo_laminar_DomApi$().v9(this.bG)) {
    var x1 = this.kP;
    if (false) {
      return x1.x1();
    }
    return (void 0);
  } else {
    return $m_Lcom_raquo_laminar_inputs_InputController$().p6;
  }
});
$p.v7 = (function(propDomName) {
  var x = this.tS();
  return ((x !== (void 0)) && $m_Lcom_raquo_ew_JsArray$RichJsArray$().v0(x, propDomName, 0));
});
$p.vJ = (function(key) {
  if ((key instanceof $c_Lcom_raquo_laminar_keys_HtmlProp)) {
    if (this.v7(key.dC)) {
      if ($p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z(this, key.dC)) {
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((((("Can not add uncontrolled `" + key.dC) + " <-- ???` to element `") + $m_Lcom_raquo_laminar_DomApi$().rq(this.bG)) + "` that already has an input controller for `") + key.dC) + "` property."));
      } else {
        $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V(this, key.dC);
      }
    }
  }
});
$p.v = (function() {
  return (("ReactiveHtmlElement(" + ((this.bG !== null) ? this.bG.outerHTML : ("tag=" + this.kP.kS))) + ")");
});
$p.aY = (function() {
  return this.bG;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  fo: 1,
  aL: 1,
  Z: 1,
  b5: 1,
  bG: 1,
  fm: 1
}));
function $ct_jl_ArrayIndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_ArrayIndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().i($c_jl_ArrayIndexOutOfBoundsException, "java.lang.ArrayIndexOutOfBoundsException", ({
  fA: 1,
  b7: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().mB($thiz);
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bM)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  bM: 1,
  ao: 1,
  a: 1,
  aa: 1,
  a5: 1,
  aG: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  return $m_jl_FloatingPointBits$().mB(value);
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Float(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bN)));
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  bN: 1,
  ao: 1,
  a: 1,
  aa: 1,
  a5: 1,
  aG: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Integer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bP)));
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  bP: 1,
  ao: 1,
  a: 1,
  aa: 1,
  a5: 1,
  aG: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  return ((that instanceof $c_RTLong) && (($thiz.s === that.s) && ($thiz.w === that.w)));
}
function $f_jl_Long__hashCode__I($thiz) {
  return ($thiz.s ^ $thiz.w);
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().mD($thiz.s, $thiz.w);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bQ)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  bQ: 1,
  ao: 1,
  a: 1,
  aa: 1,
  a5: 1,
  aG: 1
}), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  fN: 1,
  U: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (((-1) + $thiz.length) | 0);
  while ((i >= 0)) {
    res = ((res + Math.imul($thiz.charCodeAt(i), mul)) | 0);
    mul = Math.imul(31, mul);
    i = (((-1) + i) | 0);
  }
  return res;
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__getChars__I__I__AC__I__V($thiz, srcBegin, srcEnd, dst, dstBegin) {
  if (((((srcEnd > $thiz.length) || (srcBegin < 0)) || (srcEnd < 0)) || (srcBegin > srcEnd))) {
    throw $ct_jl_StringIndexOutOfBoundsException__T__(new $c_jl_StringIndexOutOfBoundsException(), "Index out of Bound");
  }
  var offset = ((dstBegin - srcBegin) | 0);
  var i = srcBegin;
  while ((i < srcEnd)) {
    dst.a[((i + offset) | 0)] = $thiz.charCodeAt(i);
    i = ((1 + i) | 0);
  }
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().k7(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  fR: 1,
  a: 1,
  aa: 1,
  b6: 1,
  a5: 1,
  aG: 1
}), ((x) => ((typeof x) === "string")));
function $ct_jl_StringIndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_StringIndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().i($c_jl_StringIndexOutOfBoundsException, "java.lang.StringIndexOutOfBoundsException", ({
  fU: 1,
  b7: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
class $c_ju_FormatterClosedException extends $c_jl_IllegalStateException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_ju_FormatterClosedException = new $TypeData().i($c_ju_FormatterClosedException, "java.util.FormatterClosedException", ({
  gd: 1,
  bO: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
class $c_ju_IllegalFormatException extends $c_jl_IllegalArgumentException {
}
/** @constructor */
function $c_s_None$() {
}
$p = $c_s_None$.prototype = new $h_s_Option();
$p.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
}
$h_s_None$.prototype = $p;
$p.uN = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$p.aL = (function() {
  return "None";
});
$p.aJ = (function() {
  return 0;
});
$p.aK = (function(x$1) {
  return $m_sr_Statics$().e9(x$1);
});
$p.aX = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return 2433880;
});
$p.v = (function() {
  return "None";
});
$p.E = (function() {
  this.uN();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  gA: 1,
  bW: 1,
  b: 1,
  x: 1,
  d: 1,
  a: 1
}));
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$();
  }
  return $n_s_None$;
}
/** @constructor */
function $c_s_Some(value) {
  this.co = null;
  this.co = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.E = (function() {
  return this.co;
});
$p.aL = (function() {
  return "Some";
});
$p.aJ = (function() {
  return 1;
});
$p.aK = (function(x$1) {
  return ((x$1 === 0) ? this.co : $m_sr_Statics$().e9(x$1));
});
$p.aX = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().fv(this);
});
$p.k = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().i(this.co, x$1.co)));
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bX)));
}
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  bX: 1,
  bW: 1,
  b: 1,
  x: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $p;
$p.aE = (function() {
  return $m_sc_Iterable$();
});
$p.c6 = (function() {
  return this.bm();
});
$p.bm = (function() {
  return "Iterable";
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.fA = (function(coll) {
  return this.aE().am(coll);
});
$p.it = (function() {
  return this.aE().at();
});
$p.n = (function() {
  return this.e().d();
});
$p.bP = (function() {
  return $f_sc_IterableOps__headOption__s_Option(this);
});
$p.mO = (function(otherSize) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, otherSize);
});
$p.M = (function(f) {
  return $f_sc_IterableOps__map__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_IterableOps__flatMap__F1__O(this, f);
});
$p.eP = (function(asIterable) {
  return this.br(asIterable);
});
$p.gT = (function(suffix) {
  return $f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix);
});
$p.U = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.dx = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
});
$p.jM = (function(p) {
  return $f_sc_IterableOnceOps__exists__F1__Z(this, p);
});
$p.fy = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.iC = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op);
});
$p.c = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.bZ = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.eN = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fL = (function() {
  return $m_sci_Nil$().z(this);
});
$p.hb = (function() {
  return $m_sci_Vector$().bF(this);
});
$p.k5 = (function(evidence$2) {
  return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2);
});
$p.q = (function() {
  return (-1);
});
$p.gX = (function(coll) {
  return this.fA(coll);
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.cp = xs;
  $thiz.C = 0;
  $thiz.c8 = $m_jl_reflect_Array$().aD($thiz.cp);
  return $thiz;
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.cp = null;
  this.C = 0;
  this.c8 = 0;
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.q = (function() {
  return ((this.c8 - this.C) | 0);
});
$p.l = (function() {
  return (this.C < this.c8);
});
$p.d = (function() {
  if ((this.C >= $m_jl_reflect_Array$().aD(this.cp))) {
    $m_sc_Iterator$().D.d();
  }
  var r = $m_sr_ScalaRunTime$().e6(this.cp, this.C);
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.d9 = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.C + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.c8;
    } else {
      var a = this.c8;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.C = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.cq) ? $thiz.cq : value));
}
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.le = self;
  $thiz.dF = 0;
  $thiz.cq = self.o();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.le = null;
  this.dF = 0;
  this.cq = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.q = (function() {
  return this.cq;
});
$p.l = (function() {
  return (this.cq > 0);
});
$p.d = (function() {
  if ((this.cq > 0)) {
    var r = this.le.x(this.dF);
    this.dF = ((1 + this.dF) | 0);
    this.cq = (((-1) + this.cq) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().D.d();
  }
});
$p.d9 = (function(n) {
  if ((n > 0)) {
    this.dF = ((this.dF + n) | 0);
    var b = ((this.cq - n) | 0);
    this.cq = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.ha = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.cq = ((b < 0) ? 0 : b);
  this.dF = ((this.dF + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  c8: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(self) {
  this.pX = null;
  this.bL = 0;
  this.gl = 0;
  this.pX = self;
  this.bL = self.o();
  this.gl = (((-1) + this.bL) | 0);
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = $p;
$p.l = (function() {
  return (this.bL > 0);
});
$p.d = (function() {
  if ((this.bL > 0)) {
    var r = this.pX.x(this.gl);
    this.gl = (((-1) + this.gl) | 0);
    this.bL = (((-1) + this.bL) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().D.d();
  }
});
$p.ha = (function(from, until) {
  if ((this.bL > 0)) {
    if ((this.bL <= from)) {
      this.bL = 0;
    } else if ((from <= 0)) {
      if (((until >= 0) && (until < this.bL))) {
        this.bL = until;
      }
    } else {
      this.gl = ((this.gl - from) | 0);
      if (((until >= 0) && (until < this.bL))) {
        if ((until <= from)) {
          this.bL = 0;
        } else {
          this.bL = ((until - from) | 0);
        }
      } else {
        this.bL = ((this.bL - from) | 0);
      }
    }
  }
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewReverseIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewReverseIterator, "scala.collection.IndexedSeqView$IndexedSeqViewReverseIterator", ({
  h0: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.hU = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().D);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.tg = (function(elem) {
  this.hU = this.hU.gS(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.as = (function(elem) {
  return this.tg(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  h8: 1,
  iL: 1,
  a9: 1,
  L: 1,
  J: 1,
  I: 1
}));
function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
  return $thiz.e8(x, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => default$1.b(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.e();
  while (it.l()) {
    var next = it.d();
    f.bd(next.bc(), next.b6());
  }
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9($thiz.e(), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.bc();
      var v = x0$1$2$2.b6();
      return ((k + " -> ") + v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  }))), sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  var builder = $thiz.it();
  var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
  var it = $thiz.e();
  while (it.l()) {
    var next = it.d();
    if (seen.jG(f.b(next))) {
      builder.as(next);
    }
  }
  return builder.aM();
}
function $f_sc_StrictOptimizedSeqOps__appended__O__O($thiz, elem) {
  var b = $thiz.ea().at();
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(b, $thiz, 1);
  b.b7($thiz);
  b.as(elem);
  return b.aM();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.ea().at();
  b.b7($thiz);
  b.b7(suffix);
  return b.aM();
}
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.lk)) {
    $thiz.ll = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.lk = true;
  }
  return $thiz.ll;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.lk) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.ll);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.ll = null;
  this.lm = null;
  this.lk = false;
  $n_sci_ArraySeq$ = this;
  this.lm = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.mc = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.eT($m_s_Array$().rF(it, tag)));
});
$p.jW = (function(evidence$2) {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((b$2$2) => $m_sci_ArraySeq$().eT($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2$2, evidence$2)))));
});
$p.eT = (function(x) {
  if ((x === null)) {
    return null;
  } else if ((x instanceof $ac_O)) {
    return new $c_sci_ArraySeq$ofRef(x);
  } else if ((x instanceof $ac_I)) {
    return new $c_sci_ArraySeq$ofInt(x);
  } else if ((x instanceof $ac_D)) {
    return new $c_sci_ArraySeq$ofDouble(x);
  } else if ((x instanceof $ac_J)) {
    return new $c_sci_ArraySeq$ofLong(x);
  } else if ((x instanceof $ac_F)) {
    return new $c_sci_ArraySeq$ofFloat(x);
  } else if ((x instanceof $ac_C)) {
    return new $c_sci_ArraySeq$ofChar(x);
  } else if ((x instanceof $ac_B)) {
    return new $c_sci_ArraySeq$ofByte(x);
  } else if ((x instanceof $ac_S)) {
    return new $c_sci_ArraySeq$ofShort(x);
  } else if ((x instanceof $ac_Z)) {
    return new $c_sci_ArraySeq$ofBoolean(x);
  } else if ($isArrayOf_jl_Void(x, 1)) {
    return new $c_sci_ArraySeq$ofUnit(x);
  } else {
    throw new $c_s_MatchError(x);
  }
});
$p.mb = (function(it, evidence$5) {
  return this.mc(it, evidence$5);
});
$p.rs = (function(evidence$6) {
  return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  ht: 1,
  ce: 1,
  c5: 1,
  c4: 1,
  c6: 1,
  a: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
/** @constructor */
function $c_sci_HashMapBuilder$$anon$1(outer, x2$1) {
  this.ad = 0;
  this.dO = 0;
  this.bR = null;
  this.bH = 0;
  this.ct = null;
  this.dP = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.bg);
  while (this.l()) {
    var originalHash = this.bR.cF(this.ad);
    outer.hc(outer.dn, this.bR.dy(this.ad), this.bR.dz(this.ad), originalHash, $m_sc_Hashing$().bs(originalHash), 0);
    this.ad = ((1 + this.ad) | 0);
  }
}
$p = $c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
}
$h_sci_HashMapBuilder$$anon$1.prototype = $p;
$p.iu = (function() {
  $m_sc_Iterator$().D.d();
  throw new $c_jl_ClassCastException();
});
$p.d = (function() {
  this.iu();
});
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().i($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
  hx: 1,
  aA: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_HashSetBuilder$$anon$1(outer, x2$1) {
  this.ad = 0;
  this.dO = 0;
  this.bR = null;
  this.bH = 0;
  this.ct = null;
  this.dP = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.bS);
  while (this.l()) {
    var originalHash = this.bR.cF(this.ad);
    outer.mT(outer.f8, this.bR.dd(this.ad), originalHash, $m_sc_Hashing$().bs(originalHash), 0);
    this.ad = ((1 + this.ad) | 0);
  }
}
$p = $c_sci_HashSetBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashSetBuilder$$anon$1;
/** @constructor */
function $h_sci_HashSetBuilder$$anon$1() {
}
$h_sci_HashSetBuilder$$anon$1.prototype = $p;
$p.iu = (function() {
  $m_sc_Iterator$().D.d();
  throw new $c_jl_ClassCastException();
});
$p.d = (function() {
  this.iu();
});
var $d_sci_HashSetBuilder$$anon$1 = new $TypeData().i($c_sci_HashSetBuilder$$anon$1, "scala.collection.immutable.HashSetBuilder$$anon$1", ({
  hA: 1,
  aA: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.q)));
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.q)));
}
/** @constructor */
function $c_sci_Map$Map2$$anon$1(outer) {
  this.dR = 0;
  this.fa = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
}
$h_sci_Map$Map2$$anon$1.prototype = $p;
$p.ck = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map2$$anon$1 = new $TypeData().i($c_sci_Map$Map2$$anon$1, "scala.collection.immutable.Map$Map2$$anon$1", ({
  hP: 1,
  cC: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map2$$anon$2(outer) {
  this.dR = 0;
  this.fa = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$2.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$2;
/** @constructor */
function $h_sci_Map$Map2$$anon$2() {
}
$h_sci_Map$Map2$$anon$2.prototype = $p;
$p.ck = (function(k, v) {
  return k;
});
var $d_sci_Map$Map2$$anon$2 = new $TypeData().i($c_sci_Map$Map2$$anon$2, "scala.collection.immutable.Map$Map2$$anon$2", ({
  hQ: 1,
  cC: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.dT = 0;
  this.dS = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$4;
/** @constructor */
function $h_sci_Map$Map3$$anon$4() {
}
$h_sci_Map$Map3$$anon$4.prototype = $p;
$p.ck = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map3$$anon$4 = new $TypeData().i($c_sci_Map$Map3$$anon$4, "scala.collection.immutable.Map$Map3$$anon$4", ({
  hR: 1,
  cE: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$5(outer) {
  this.dT = 0;
  this.dS = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$5.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$5;
/** @constructor */
function $h_sci_Map$Map3$$anon$5() {
}
$h_sci_Map$Map3$$anon$5.prototype = $p;
$p.ck = (function(k, v) {
  return k;
});
var $d_sci_Map$Map3$$anon$5 = new $TypeData().i($c_sci_Map$Map3$$anon$5, "scala.collection.immutable.Map$Map3$$anon$5", ({
  hS: 1,
  cE: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.dU = 0;
  this.d1 = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
}
$h_sci_Map$Map4$$anon$7.prototype = $p;
$p.ck = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map4$$anon$7 = new $TypeData().i($c_sci_Map$Map4$$anon$7, "scala.collection.immutable.Map$Map4$$anon$7", ({
  hT: 1,
  cG: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$8(outer) {
  this.dU = 0;
  this.d1 = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$8.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$8;
/** @constructor */
function $h_sci_Map$Map4$$anon$8() {
}
$h_sci_Map$Map4$$anon$8.prototype = $p;
$p.ck = (function(k, v) {
  return k;
});
var $d_sci_Map$Map4$$anon$8 = new $TypeData().i($c_sci_Map$Map4$$anon$8, "scala.collection.immutable.Map$Map4$$anon$8", ({
  hU: 1,
  cG: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyIterator(rootNode) {
  this.ad = 0;
  this.dO = 0;
  this.bR = null;
  this.bH = 0;
  this.ct = null;
  this.dP = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyIterator;
/** @constructor */
function $h_sci_MapKeyIterator() {
}
$h_sci_MapKeyIterator.prototype = $p;
$p.d = (function() {
  if ((!this.l())) {
    $m_sc_Iterator$().D.d();
  }
  var key = this.bR.dy(this.ad);
  this.ad = ((1 + this.ad) | 0);
  return key;
});
var $d_sci_MapKeyIterator = new $TypeData().i($c_sci_MapKeyIterator, "scala.collection.immutable.MapKeyIterator", ({
  hW: 1,
  aA: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.er = 0;
  this.je = null;
  this.cu = 0;
  this.hI = null;
  this.hJ = null;
  this.lt = 0;
  this.qh = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.lt = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().sw(this.lt, $m_sr_Statics$().R(this.qh), (-889275714));
});
$p.vy = (function() {
  if ((!this.l())) {
    $m_sc_Iterator$().D.d();
  }
  this.lt = this.je.cF(this.er);
  this.qh = this.je.dz(this.er);
  this.er = (((-1) + this.er) | 0);
  return this;
});
$p.d = (function() {
  return this.vy();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  hX: 1,
  hu: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.ad = 0;
  this.dO = 0;
  this.bR = null;
  this.bH = 0;
  this.ct = null;
  this.dP = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.vx = (function() {
  if ((!this.l())) {
    $m_sc_Iterator$().D.d();
  }
  var payload = this.bR.mg(this.ad);
  this.ad = ((1 + this.ad) | 0);
  return payload;
});
$p.d = (function() {
  return this.vx();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  hY: 1,
  aA: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.cf <= $thiz.bf)) {
    $m_sc_Iterator$().D.d();
  }
  $thiz.eu = ((1 + $thiz.eu) | 0);
  var slice = $thiz.lv.dB($thiz.eu);
  while ((slice.a.length === 0)) {
    $thiz.eu = ((1 + $thiz.eu) | 0);
    slice = $thiz.lv.dB($thiz.eu);
  }
  $thiz.hM = $thiz.fd;
  var count = $thiz.qj;
  var idx = $thiz.eu;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  $thiz.et = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
  var x1 = $thiz.et;
  switch (x1) {
    case 1: {
      $thiz.bx = slice;
      break;
    }
    case 2: {
      $thiz.by = slice;
      break;
    }
    case 3: {
      $thiz.c3 = slice;
      break;
    }
    case 4: {
      $thiz.d2 = slice;
      break;
    }
    case 5: {
      $thiz.fc = slice;
      break;
    }
    case 6: {
      $thiz.lu = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  $thiz.fd = (($thiz.hM + Math.imul(slice.a.length, (1 << Math.imul(5, (((-1) + $thiz.et) | 0))))) | 0);
  if (($thiz.fd > $thiz.dX)) {
    $thiz.fd = $thiz.dX;
  }
  if (($thiz.et > 1)) {
    $thiz.gw = (((-1) + (1 << Math.imul(5, $thiz.et))) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.bf - $thiz.cf) | 0) + $thiz.dX) | 0);
  if ((pos === $thiz.fd)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.et > 1)) {
    var io = ((pos - $thiz.hM) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.gw ^ io));
    $thiz.gw = io;
  }
  $thiz.cf = (($thiz.cf - $thiz.bf) | 0);
  var a = $thiz.bx.a.length;
  var b = $thiz.cf;
  $thiz.dW = ((a < b) ? a : b);
  $thiz.bf = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.bx = $thiz.by.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.by = $thiz.c3.a[(31 & ((io >>> 10) | 0))];
    $thiz.bx = $thiz.by.a[0];
  } else if ((xor < 1048576)) {
    $thiz.c3 = $thiz.d2.a[(31 & ((io >>> 15) | 0))];
    $thiz.by = $thiz.c3.a[0];
    $thiz.bx = $thiz.by.a[0];
  } else if ((xor < 33554432)) {
    $thiz.d2 = $thiz.fc.a[(31 & ((io >>> 20) | 0))];
    $thiz.c3 = $thiz.d2.a[0];
    $thiz.by = $thiz.c3.a[0];
    $thiz.bx = $thiz.by.a[0];
  } else {
    $thiz.fc = $thiz.lu.a[((io >>> 25) | 0)];
    $thiz.d2 = $thiz.fc.a[0];
    $thiz.c3 = $thiz.d2.a[0];
    $thiz.by = $thiz.c3.a[0];
    $thiz.bx = $thiz.by.a[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.bx = $thiz.by.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.by = $thiz.c3.a[(31 & ((io >>> 10) | 0))];
    $thiz.bx = $thiz.by.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.c3 = $thiz.d2.a[(31 & ((io >>> 15) | 0))];
    $thiz.by = $thiz.c3.a[(31 & ((io >>> 10) | 0))];
    $thiz.bx = $thiz.by.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.d2 = $thiz.fc.a[(31 & ((io >>> 20) | 0))];
    $thiz.c3 = $thiz.d2.a[(31 & ((io >>> 15) | 0))];
    $thiz.by = $thiz.c3.a[(31 & ((io >>> 10) | 0))];
    $thiz.bx = $thiz.by.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.fc = $thiz.lu.a[((io >>> 25) | 0)];
    $thiz.d2 = $thiz.fc.a[(31 & ((io >>> 20) | 0))];
    $thiz.c3 = $thiz.d2.a[(31 & ((io >>> 15) | 0))];
    $thiz.by = $thiz.c3.a[(31 & ((io >>> 10) | 0))];
    $thiz.bx = $thiz.by.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.lv = null;
  this.dX = 0;
  this.qj = 0;
  this.bx = null;
  this.by = null;
  this.c3 = null;
  this.d2 = null;
  this.fc = null;
  this.lu = null;
  this.dW = 0;
  this.bf = 0;
  this.gw = 0;
  this.cf = 0;
  this.eu = 0;
  this.et = 0;
  this.hM = 0;
  this.fd = 0;
  this.lv = v;
  this.dX = totalLength;
  this.qj = sliceCount;
  this.bx = v.f;
  this.dW = this.bx.a.length;
  this.bf = 0;
  this.gw = 0;
  this.cf = this.dX;
  this.eu = 0;
  this.et = 1;
  this.hM = 0;
  this.fd = this.dW;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.q = (function() {
  return ((this.cf - this.bf) | 0);
});
$p.l = (function() {
  return (this.cf > this.bf);
});
$p.d = (function() {
  if ((this.bf === this.dW)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.bx.a[this.bf];
  this.bf = ((1 + this.bf) | 0);
  return r;
});
$p.d9 = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.bf - this.cf) | 0) + this.dX) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.dX;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.dX)) {
      this.bf = 0;
      this.cf = 0;
      this.dW = 0;
    } else {
      while ((newpos >= this.fd)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.hM) | 0);
      if ((this.et > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.gw ^ io));
        this.gw = io;
      }
      this.dW = this.bx.a.length;
      this.bf = (31 & io);
      this.cf = ((this.bf + ((this.dX - newpos) | 0)) | 0);
      if ((this.dW > this.cf)) {
        this.dW = this.cf;
      }
    }
  }
  return this;
});
$p.bZ = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().aD(xs);
  var srcLen = ((this.cf - this.bf) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.bf === this.dW)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total - copied) | 0);
    var b = ((this.bx.a.length - this.bf) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.bx;
      var srcPos = this.bf;
      var destPos = ((start + copied) | 0);
      src.r(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().ci(this.bx, this.bf, xs, ((start + copied) | 0), count);
    }
    this.bf = ((this.bf + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  i0: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  F: 1
}));
/** @constructor */
function $c_sci_RangeIterator(start, step, lastElement, initiallyEmpty) {
  this.gx = 0;
  this.ff = 0;
  this.ev = false;
  this.fe = 0;
  this.gx = step;
  this.ff = lastElement;
  this.ev = (!initiallyEmpty);
  this.fe = start;
}
$p = $c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $p;
$p.q = (function() {
  return (this.ev ? ((1 + $intDiv(((this.ff - this.fe) | 0), this.gx)) | 0) : 0);
});
$p.l = (function() {
  return this.ev;
});
$p.s2 = (function() {
  if ((!this.ev)) {
    $m_sc_Iterator$().D.d();
  }
  var value = this.fe;
  this.ev = (value !== this.ff);
  this.fe = ((value + this.gx) | 0);
  return value;
});
$p.d9 = (function(n) {
  if ((n > 0)) {
    var value = this.fe;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.gx, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((-2147483648) ^ lo) < ((-2147483648) ^ value)) ? ((1 + ((hi + hi$1) | 0)) | 0) : ((hi + hi$1) | 0));
    if ((this.gx > 0)) {
      var value$2 = this.ff;
      var hi$3 = (value$2 >> 31);
      if (((hi$3 === hi$2) ? (((-2147483648) ^ value$2) < ((-2147483648) ^ lo)) : (hi$3 < hi$2))) {
        var this$6__lo = value$2;
        var this$6__hi = hi$3;
      } else {
        var this$6__lo = lo;
        var this$6__hi = hi$2;
      }
      this.fe = this$6__lo;
      var value$3 = this.ff;
      var hi$4 = (value$3 >> 31);
      this.ev = ((hi$2 === hi$4) ? (((-2147483648) ^ lo) <= ((-2147483648) ^ value$3)) : (hi$2 < hi$4));
    } else if ((this.gx < 0)) {
      var value$4 = this.ff;
      var hi$5 = (value$4 >> 31);
      if (((hi$5 === hi$2) ? (((-2147483648) ^ value$4) > ((-2147483648) ^ lo)) : (hi$5 > hi$2))) {
        var this$10__lo = value$4;
        var this$10__hi = hi$5;
      } else {
        var this$10__lo = lo;
        var this$10__hi = hi$2;
      }
      this.fe = this$10__lo;
      var value$5 = this.ff;
      var hi$6 = (value$5 >> 31);
      this.ev = ((hi$2 === hi$6) ? (((-2147483648) ^ lo) >= ((-2147483648) ^ value$5)) : (hi$2 > hi$6));
    }
  }
  return this;
});
$p.d = (function() {
  return this.s2();
});
var $d_sci_RangeIterator = new $TypeData().i($c_sci_RangeIterator, "scala.collection.immutable.RangeIterator", ({
  i3: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $ct_sci_Set$SetNIterator__I__($thiz, n) {
  $thiz.dY = 0;
  $thiz.ds = n;
  return $thiz;
}
/** @constructor */
function $c_sci_Set$SetNIterator() {
  this.dY = 0;
  this.ds = 0;
}
$p = $c_sci_Set$SetNIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Set$SetNIterator;
/** @constructor */
function $h_sci_Set$SetNIterator() {
}
$h_sci_Set$SetNIterator.prototype = $p;
$p.q = (function() {
  return this.ds;
});
$p.l = (function() {
  return (this.ds > 0);
});
$p.d = (function() {
  if (this.l()) {
    var r = this.x(this.dY);
    this.dY = ((1 + this.dY) | 0);
    this.ds = (((-1) + this.ds) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().D.d();
  }
});
$p.d9 = (function(n) {
  if ((n > 0)) {
    this.dY = ((this.dY + n) | 0);
    var b = ((this.ds - n) | 0);
    this.ds = ((b < 0) ? 0 : b);
  }
  return this;
});
/** @constructor */
function $c_sci_SetHashIterator(rootNode) {
  this.ad = 0;
  this.dO = 0;
  this.bR = null;
  this.bH = 0;
  this.ct = null;
  this.dP = null;
  this.lw = 0;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
  this.lw = 0;
}
$p = $c_sci_SetHashIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_SetHashIterator;
/** @constructor */
function $h_sci_SetHashIterator() {
}
$h_sci_SetHashIterator.prototype = $p;
$p.u = (function() {
  return this.lw;
});
$p.d = (function() {
  if ((!this.l())) {
    $m_sc_Iterator$().D.d();
  }
  this.lw = this.bR.cF(this.ad);
  this.ad = ((1 + this.ad) | 0);
  return this;
});
var $d_sci_SetHashIterator = new $TypeData().i($c_sci_SetHashIterator, "scala.collection.immutable.SetHashIterator", ({
  ie: 1,
  aA: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_SetIterator(rootNode) {
  this.ad = 0;
  this.dO = 0;
  this.bR = null;
  this.bH = 0;
  this.ct = null;
  this.dP = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_SetIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_SetIterator;
/** @constructor */
function $h_sci_SetIterator() {
}
$h_sci_SetIterator.prototype = $p;
$p.d = (function() {
  if ((!this.l())) {
    $m_sc_Iterator$().D.d();
  }
  var payload = this.bR.dd(this.ad);
  this.ad = ((1 + this.ad) | 0);
  return payload;
});
var $d_sci_SetIterator = new $TypeData().i($c_sci_SetIterator, "scala.collection.immutable.SetIterator", ({
  ig: 1,
  aA: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.lA = 0;
  $thiz.qr = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.lA = 0;
  this.qr = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.bt = (function(size) {
  if ((this.lA < size)) {
    this.w8(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.lD = null;
  this.lC = null;
  $n_scm_ArraySeq$ = this;
  this.lD = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.lC = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.uF = (function(it, evidence$2) {
  return this.mv($m_s_Array$().rF(it, evidence$2));
});
$p.jW = (function(evidence$3) {
  return new $c_scm_Builder$$anon$1(new $c_scm_ArrayBuilder$generic(evidence$3.bl()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => $m_scm_ArraySeq$().mv(x$2$2))));
});
$p.mv = (function(x) {
  if ((x === null)) {
    return null;
  } else if ((x instanceof $ac_O)) {
    return new $c_scm_ArraySeq$ofRef(x);
  } else if ((x instanceof $ac_I)) {
    return new $c_scm_ArraySeq$ofInt(x);
  } else if ((x instanceof $ac_D)) {
    return new $c_scm_ArraySeq$ofDouble(x);
  } else if ((x instanceof $ac_J)) {
    return new $c_scm_ArraySeq$ofLong(x);
  } else if ((x instanceof $ac_F)) {
    return new $c_scm_ArraySeq$ofFloat(x);
  } else if ((x instanceof $ac_C)) {
    return new $c_scm_ArraySeq$ofChar(x);
  } else if ((x instanceof $ac_B)) {
    return new $c_scm_ArraySeq$ofByte(x);
  } else if ((x instanceof $ac_S)) {
    return new $c_scm_ArraySeq$ofShort(x);
  } else if ((x instanceof $ac_Z)) {
    return new $c_scm_ArraySeq$ofBoolean(x);
  } else if ($isArrayOf_jl_Void(x, 1)) {
    return new $c_scm_ArraySeq$ofUnit(x);
  } else {
    throw new $c_s_MatchError(x);
  }
});
$p.mb = (function(it, evidence$5) {
  return this.uF(it, evidence$5);
});
$p.rs = (function(evidence$6) {
  return this.lC;
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  iy: 1,
  ce: 1,
  c5: 1,
  c4: 1,
  c6: 1,
  a: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
/** @constructor */
function $c_scm_HashSet$$anon$1(outer) {
  this.eJ = 0;
  this.e0 = null;
  this.hT = 0;
  this.hS = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$1.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$1;
/** @constructor */
function $h_scm_HashSet$$anon$1() {
}
$h_scm_HashSet$$anon$1.prototype = $p;
$p.m8 = (function(nd) {
  return nd.gC;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  iG: 1,
  bk: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$2(outer) {
  this.eJ = 0;
  this.e0 = null;
  this.hT = 0;
  this.hS = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$2.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$2;
/** @constructor */
function $h_scm_HashSet$$anon$2() {
}
$h_scm_HashSet$$anon$2.prototype = $p;
$p.m8 = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  iH: 1,
  bk: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$3(outer) {
  this.eJ = 0;
  this.e0 = null;
  this.hT = 0;
  this.hS = null;
  this.lG = 0;
  this.qw = null;
  this.qw = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.lG = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.u = (function() {
  return this.lG;
});
$p.m8 = (function(nd) {
  this.lG = this.qw.k1(nd.e1);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  iI: 1,
  bk: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.hV = null;
  this.hV = runtimeClass;
}
$p = $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $p;
$p.k = (function(x) {
  return $f_s_reflect_ClassTag__equals__O__Z(this, x);
});
$p.u = (function() {
  return $m_sr_Statics$().R(this.hV);
});
$p.v = (function() {
  return $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this.hV);
});
$p.bl = (function() {
  return this.hV;
});
$p.c1 = (function(len) {
  return this.hV.F.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  j5: 1,
  M: 1,
  S: 1,
  T: 1,
  a: 1,
  d: 1
}));
function $ps_Lcom_raquo_airstream_web_WebStorageVar__WebStorageVar$superArg$1__F0__T__F1__F1__F0__F2__s_util_Try(maybeStorage, key, encode, decode, default$1, syncDistinctByFn) {
  var this$1 = maybeStorage.L();
  if (this$1.c()) {
    var this$3 = $m_s_None$();
  } else {
    var x0 = this$1.E();
    var this$2 = $m_s_Option$().lV(x0.getItem(key));
    var this$3 = (this$2.c() ? $m_s_None$() : new $c_s_Some(decode.b(this$2.E())));
  }
  return (this$3.c() ? default$1.L() : this$3.E());
}
function $p_Lcom_raquo_airstream_web_WebStorageVar__isSame$lzyINIT1$1__sr_LazyBoolean__s_util_Try__Z($thiz, isSame$lzy1$1, decodedValueTry$1) {
  if ((isSame$lzy1$1 === null)) {
    throw new $c_jl_NullPointerException();
  }
  if (isSame$lzy1$1.jl) {
    return isSame$lzy1$1.jm;
  } else {
    matchResult4: {
      var $x_1;
      var _2 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz.b8);
      if ((decodedValueTry$1 instanceof $c_s_util_Success)) {
        var decodedValue = decodedValueTry$1.cN;
        if ((_2 instanceof $c_s_util_Success)) {
          var varValue = _2.cN;
          var $x_1 = (!(!$thiz.oe.bd(decodedValue, varValue)));
          break matchResult4;
        }
      }
      var $x_1 = false;
    }
    return isSame$lzy1$1.v2($x_1);
  }
}
function $p_Lcom_raquo_airstream_web_WebStorageVar__isSame$1__sr_LazyBoolean__s_util_Try__Z($thiz, isSame$lzy1$2, decodedValueTry$2) {
  return (isSame$lzy1$2.jl ? isSame$lzy1$2.jm : $p_Lcom_raquo_airstream_web_WebStorageVar__isSame$lzyINIT1$1__sr_LazyBoolean__s_util_Try__Z($thiz, isSame$lzy1$2, decodedValueTry$2));
}
/** @constructor */
function $c_Lcom_raquo_airstream_web_WebStorageVar(maybeStorage, key, encode, decode, default$1, syncDistinctByFn) {
  this.ks = null;
  this.iV = null;
  this.iU = null;
  this.iT = null;
  this.b8 = null;
  this.kw = null;
  this.iX = null;
  this.o9 = null;
  this.oa = null;
  this.oe = null;
  this.od = null;
  this.ob = null;
  this.oc = false;
  this.kw = maybeStorage;
  this.iX = key;
  this.o9 = decode;
  this.oa = default$1;
  this.oe = syncDistinctByFn;
  $ct_Lcom_raquo_airstream_state_SourceVar__s_util_Try__(this, $ps_Lcom_raquo_airstream_web_WebStorageVar__WebStorageVar$superArg$1__F0__T__F1__F1__F0__F2__s_util_Try(maybeStorage, key, encode, decode, default$1, syncDistinctByFn));
  this.od = new $c_Lcom_raquo_airstream_ownership_ManualOwner();
  $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(this.b8, $m_Lcom_raquo_airstream_core_Observer$().mW(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((newValue) => {
    var this$1 = maybeStorage.L();
    if ((!this$1.c())) {
      var x0 = this$1.E();
      var newValueStr = encode.b(newValue);
      try {
        x0.setItem(key, newValueStr);
      } catch (e) {
        if ((!(((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)) instanceof $c_sjs_js_JavaScriptException))) {
          throw e;
        }
      }
    }
  })), new $c_Lcom_raquo_airstream_web_WebStorageVar$$anon$1(this), false), this.od);
}
$p = $c_Lcom_raquo_airstream_web_WebStorageVar.prototype = new $h_Lcom_raquo_airstream_state_SourceVar();
$p.constructor = $c_Lcom_raquo_airstream_web_WebStorageVar;
/** @constructor */
function $h_Lcom_raquo_airstream_web_WebStorageVar() {
}
$h_Lcom_raquo_airstream_web_WebStorageVar.prototype = $p;
$p.ut = (function() {
  if ((!this.oc)) {
    this.ob = new $c_Lcom_raquo_airstream_misc_FilterStream($m_Lcom_raquo_airstream_web_DomEventStream$().r6(window, "storage", false), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => (this.kw.L().al(ev.storageArea) && (ev.key === this.iX)))));
    this.oc = true;
  }
  return this.ob;
});
$p.wt = (function(syncOwner) {
  this.vP(true);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(this.ut(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    this.sm($m_s_Option$().lV(ev.newValue), true);
  })), syncOwner);
});
$p.vP = (function(distinctOnly) {
  var x5 = this.kw.L();
  if ((x5 instanceof $c_s_Some)) {
    var storage = x5.co;
    this.sm($m_s_Option$().lV(storage.getItem(this.iX)), distinctOnly);
    return (void 0);
  }
  if (($m_s_None$() === x5)) {
    return (void 0);
  }
  throw new $c_s_MatchError(x5);
});
$p.sm = (function(storedValueOpt, distinctOnly) {
  var isSame$lzy1 = new $c_sr_LazyBoolean();
  var ifEmpty = this.oa;
  var f = this.o9;
  var decodedValueTry = (storedValueOpt.c() ? ifEmpty.L() : f.b(storedValueOpt.E()));
  if ((!(distinctOnly && $p_Lcom_raquo_airstream_web_WebStorageVar__isSame$1__sr_LazyBoolean__s_util_Try__Z(this, isSame$lzy1, decodedValueTry)))) {
    this.iV.eR(decodedValueTry);
  }
});
$p.e7 = (function() {
  return (($f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this) + ("(key=" + this.iX)) + ")");
});
var $d_Lcom_raquo_airstream_web_WebStorageVar = new $TypeData().i($c_Lcom_raquo_airstream_web_WebStorageVar, "com.raquo.airstream.web.WebStorageVar", ({
  ed: 1,
  e4: 1,
  ae: 1,
  aF: 1,
  aK: 1,
  Y: 1,
  e6: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2(key$2) {
  this.fU = null;
  this.fV = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$2, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2, "com.raquo.laminar.defs.styles.StyleProps$$anon$2", ({
  eD: 1,
  b4: 1,
  af: 1,
  b2: 1,
  b3: 1,
  eH: 1,
  eJ: 1
}));
class $c_ju_DuplicateFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.pA = null;
    this.pA = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  c0() {
    return (("Flags = '" + this.pA) + "'");
  }
}
var $d_ju_DuplicateFormatFlagsException = new $TypeData().i($c_ju_DuplicateFormatFlagsException, "java.util.DuplicateFormatFlagsException", ({
  g6: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
class $c_ju_FormatFlagsConversionMismatchException extends $c_ju_IllegalFormatException {
  constructor(f, c) {
    super();
    this.pC = null;
    this.pB = 0;
    this.pC = f;
    this.pB = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  c0() {
    return ((("Conversion = " + $cToS(this.pB)) + ", Flags = ") + this.pC);
  }
}
var $d_ju_FormatFlagsConversionMismatchException = new $TypeData().i($c_ju_FormatFlagsConversionMismatchException, "java.util.FormatFlagsConversionMismatchException", ({
  g7: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
class $c_ju_IllegalFormatArgumentIndexException extends $c_ju_IllegalFormatException {
  constructor(msg) {
    super();
    this.pG = null;
    this.pG = msg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  c0() {
    return this.pG;
  }
}
var $d_ju_IllegalFormatArgumentIndexException = new $TypeData().i($c_ju_IllegalFormatArgumentIndexException, "java.util.IllegalFormatArgumentIndexException", ({
  ge: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
class $c_ju_IllegalFormatCodePointException extends $c_ju_IllegalFormatException {
  constructor(c) {
    super();
    this.pH = 0;
    this.pH = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  c0() {
    var i = this.pH;
    return ("Code point = 0x" + (+(i >>> 0.0)).toString(16));
  }
}
var $d_ju_IllegalFormatCodePointException = new $TypeData().i($c_ju_IllegalFormatCodePointException, "java.util.IllegalFormatCodePointException", ({
  gf: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
class $c_ju_IllegalFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(c, arg) {
    super();
    this.pJ = 0;
    this.pI = null;
    this.pJ = c;
    this.pI = arg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((arg === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  c0() {
    return ((("" + $cToS(this.pJ)) + " != ") + this.pI.F.N);
  }
}
var $d_ju_IllegalFormatConversionException = new $TypeData().i($c_ju_IllegalFormatConversionException, "java.util.IllegalFormatConversionException", ({
  gg: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
class $c_ju_IllegalFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.pK = null;
    this.pK = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  c0() {
    return (("Flags = '" + this.pK) + "'");
  }
}
var $d_ju_IllegalFormatFlagsException = new $TypeData().i($c_ju_IllegalFormatFlagsException, "java.util.IllegalFormatFlagsException", ({
  gh: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
class $c_ju_IllegalFormatPrecisionException extends $c_ju_IllegalFormatException {
  constructor(p) {
    super();
    this.pL = 0;
    this.pL = p;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  c0() {
    return ("" + this.pL);
  }
}
var $d_ju_IllegalFormatPrecisionException = new $TypeData().i($c_ju_IllegalFormatPrecisionException, "java.util.IllegalFormatPrecisionException", ({
  gi: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
class $c_ju_IllegalFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(w) {
    super();
    this.pM = 0;
    this.pM = w;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  c0() {
    return ("" + this.pM);
  }
}
var $d_ju_IllegalFormatWidthException = new $TypeData().i($c_ju_IllegalFormatWidthException, "java.util.IllegalFormatWidthException", ({
  gj: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
class $c_ju_MissingFormatArgumentException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.pN = null;
    this.pN = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  c0() {
    return (("Format specifier '" + this.pN) + "'");
  }
}
var $d_ju_MissingFormatArgumentException = new $TypeData().i($c_ju_MissingFormatArgumentException, "java.util.MissingFormatArgumentException", ({
  gk: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
class $c_ju_MissingFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.pO = null;
    this.pO = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  c0() {
    return this.pO;
  }
}
var $d_ju_MissingFormatWidthException = new $TypeData().i($c_ju_MissingFormatWidthException, "java.util.MissingFormatWidthException", ({
  gl: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
class $c_ju_UnknownFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.pP = null;
    this.pP = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  c0() {
    return (("Conversion = '" + this.pP) + "'");
  }
}
var $d_ju_UnknownFormatConversionException = new $TypeData().i($c_ju_UnknownFormatConversionException, "java.util.UnknownFormatConversionException", ({
  gn: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.cp = null;
  this.C = 0;
  this.c8 = 0;
  this.l6 = null;
  this.l6 = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $p;
$p.vz = (function() {
  if ((this.C >= this.l6.a.length)) {
    $m_sc_Iterator$().D.d();
  }
  var r = this.l6.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.d = (function() {
  return this.vz();
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcB$sp, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", ({
  gM: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
  this.cp = null;
  this.C = 0;
  this.c8 = 0;
  this.l7 = null;
  this.l7 = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $p;
$p.vA = (function() {
  if ((this.C >= this.l7.a.length)) {
    $m_sc_Iterator$().D.d();
  }
  var r = this.l7.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.d = (function() {
  return $bC(this.vA());
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcC$sp, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", ({
  gN: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
  this.cp = null;
  this.C = 0;
  this.c8 = 0;
  this.l8 = null;
  this.l8 = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $p;
$p.vB = (function() {
  if ((this.C >= this.l8.a.length)) {
    $m_sc_Iterator$().D.d();
  }
  var r = this.l8.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.d = (function() {
  return this.vB();
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcD$sp, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", ({
  gO: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
  this.cp = null;
  this.C = 0;
  this.c8 = 0;
  this.l9 = null;
  this.l9 = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $p;
$p.vC = (function() {
  if ((this.C >= this.l9.a.length)) {
    $m_sc_Iterator$().D.d();
  }
  var r = this.l9.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.d = (function() {
  return this.vC();
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcF$sp, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", ({
  gP: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
  this.cp = null;
  this.C = 0;
  this.c8 = 0;
  this.la = null;
  this.la = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $p;
$p.vD = (function() {
  if ((this.C >= this.la.a.length)) {
    $m_sc_Iterator$().D.d();
  }
  var r = this.la.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.d = (function() {
  return this.vD();
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcI$sp, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", ({
  gQ: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
  this.cp = null;
  this.C = 0;
  this.c8 = 0;
  this.lb = null;
  this.lb = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $p;
$p.vE = (function() {
  if ((this.C >= this.lb.a.length)) {
    $m_sc_Iterator$().D.d();
  }
  var t = this.lb.a[this.C];
  var lo = t.s;
  var hi = t.w;
  this.C = ((1 + this.C) | 0);
  return new $c_RTLong(lo, hi);
});
$p.d = (function() {
  return this.vE();
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcJ$sp, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", ({
  gR: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
  this.cp = null;
  this.C = 0;
  this.c8 = 0;
  this.lc = null;
  this.lc = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $p;
$p.vF = (function() {
  if ((this.C >= this.lc.a.length)) {
    $m_sc_Iterator$().D.d();
  }
  var r = this.lc.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.d = (function() {
  return this.vF();
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcS$sp, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", ({
  gS: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
  this.cp = null;
  this.C = 0;
  this.c8 = 0;
  this.pW = null;
  this.pW = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $p;
$p.vG = (function() {
  if ((this.C >= this.pW.a.length)) {
    $m_sc_Iterator$().D.d();
  }
  this.C = ((1 + this.C) | 0);
});
$p.d = (function() {
  this.vG();
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcV$sp, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", ({
  gT: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
  this.cp = null;
  this.C = 0;
  this.c8 = 0;
  this.ld = null;
  this.ld = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $p;
$p.vH = (function() {
  if ((this.C >= this.ld.a.length)) {
    $m_sc_Iterator$().D.d();
  }
  var r = this.ld.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.d = (function() {
  return this.vH();
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcZ$sp, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", ({
  gU: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterable$$anon$1(a$1) {
  this.lf = null;
  this.lf = a$1;
}
$p = $c_sc_Iterable$$anon$1.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_Iterable$$anon$1;
/** @constructor */
function $h_sc_Iterable$$anon$1() {
}
$h_sc_Iterable$$anon$1.prototype = $p;
$p.e = (function() {
  return new $c_sc_Iterator$$anon$20(this.lf);
});
$p.q = (function() {
  return 1;
});
$p.uX = (function() {
  return new $c_s_Some(this.lf);
});
$p.bP = (function() {
  return this.uX();
});
var $d_sc_Iterable$$anon$1 = new $TypeData().i($c_sc_Iterable$$anon$1, "scala.collection.Iterable$$anon$1", ({
  h2: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.c6() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.D)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.D)));
}
/** @constructor */
function $c_sci_Set$Set2$$anon$1(outer) {
  this.dY = 0;
  this.ds = 0;
  this.qk = null;
  this.qk = outer;
  $ct_sci_Set$SetNIterator__I__(this, 2);
}
$p = $c_sci_Set$Set2$$anon$1.prototype = new $h_sci_Set$SetNIterator();
$p.constructor = $c_sci_Set$Set2$$anon$1;
/** @constructor */
function $h_sci_Set$Set2$$anon$1() {
}
$h_sci_Set$Set2$$anon$1.prototype = $p;
$p.x = (function(i) {
  return this.qk.wd(i);
});
var $d_sci_Set$Set2$$anon$1 = new $TypeData().i($c_sci_Set$Set2$$anon$1, "scala.collection.immutable.Set$Set2$$anon$1", ({
  ia: 1,
  bg: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set3$$anon$2(outer) {
  this.dY = 0;
  this.ds = 0;
  this.ql = null;
  this.ql = outer;
  $ct_sci_Set$SetNIterator__I__(this, 3);
}
$p = $c_sci_Set$Set3$$anon$2.prototype = new $h_sci_Set$SetNIterator();
$p.constructor = $c_sci_Set$Set3$$anon$2;
/** @constructor */
function $h_sci_Set$Set3$$anon$2() {
}
$h_sci_Set$Set3$$anon$2.prototype = $p;
$p.x = (function(i) {
  return this.ql.we(i);
});
var $d_sci_Set$Set3$$anon$2 = new $TypeData().i($c_sci_Set$Set3$$anon$2, "scala.collection.immutable.Set$Set3$$anon$2", ({
  ib: 1,
  bg: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set4$$anon$3(outer) {
  this.dY = 0;
  this.ds = 0;
  this.qm = null;
  this.qm = outer;
  $ct_sci_Set$SetNIterator__I__(this, 4);
}
$p = $c_sci_Set$Set4$$anon$3.prototype = new $h_sci_Set$SetNIterator();
$p.constructor = $c_sci_Set$Set4$$anon$3;
/** @constructor */
function $h_sci_Set$Set4$$anon$3() {
}
$h_sci_Set$Set4$$anon$3.prototype = $p;
$p.x = (function(i) {
  return this.qm.wf(i);
});
var $d_sci_Set$Set4$$anon$3 = new $TypeData().i($c_sci_Set$Set4$$anon$3, "scala.collection.immutable.Set$Set4$$anon$3", ({
  ic: 1,
  bg: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.lA = 0;
  this.qr = 0;
  this.gB = null;
  this.qs = false;
  this.lB = null;
  this.gB = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.qs = (elementClass === $d_C.l());
  this.lB = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.r0 = (function(elem) {
  var unboxedElem = (this.qs ? $uC(elem) : ((elem === null) ? this.gB.F.z : elem));
  this.lB.push(unboxedElem);
  return this;
});
$p.t7 = (function(xs) {
  var it = xs.e();
  while (it.l()) {
    this.r0(it.d());
  }
  return this;
});
$p.w8 = (function(size) {
});
$p.aM = (function() {
  var elemRuntimeClass = ((this.gB === $d_V.l()) ? $d_jl_Void.l() : (((this.gB === $d_sr_Null$.l()) || (this.gB === $d_sr_Nothing$.l())) ? $d_O.l() : this.gB));
  return elemRuntimeClass.F.r().w(this.lB);
});
$p.v = (function() {
  return "ArrayBuilder.generic";
});
$p.b7 = (function(elems) {
  return this.t7(elems);
});
$p.as = (function(elem) {
  return this.r0(elem);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  ix: 1,
  iw: 1,
  a9: 1,
  L: 1,
  J: 1,
  I: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.le = null;
  this.dF = 0;
  this.cq = 0;
  this.qv = null;
  this.qu = 0;
  this.qv = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.qu = (mutationCount.L() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.l = (function() {
  $m_scm_MutationTracker$().rj(this.qu, (this.qv.L() | 0), "mutation occurred during iteration");
  return (this.cq > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  iC: 1,
  c8: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.aC = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.v = (function() {
  return this.aC;
});
$p.k = (function(that) {
  return (this === that);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$p = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $p;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.ak = null;
    this.ak = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  c0() {
    return $dp_toString__T(this.ak);
  }
  aL() {
    return "JavaScriptException";
  }
  aJ() {
    return 1;
  }
  aK(x$1) {
    return ((x$1 === 0) ? this.ak : $m_sr_Statics$().e9(x$1));
  }
  aX() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
  }
  k(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().i(this.ak, x$1.ak)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dd)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  dd: 1,
  w: 1,
  v: 1,
  r: 1,
  a: 1,
  x: 1,
  d: 1
}));
function $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, newValue) {
  if ((!($thiz.jV() === (void 0)))) {
    $thiz.jF($m_Lcom_raquo_airstream_core_Signal$().s4());
  }
  $thiz.mx(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.jV();
  if ((x === (void 0))) {
    $thiz.jF($m_Lcom_raquo_airstream_core_Signal$().s4());
    var nextValue = $thiz.jJ();
    $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
    var $x_1 = nextValue;
  } else {
    var $x_1 = x;
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, new $c_s_util_Failure(nextError), transaction);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  var isError = nextValue.mp();
  var elem = false;
  elem = false;
  $thiz.cS(false);
  var this$ = $thiz.da();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.eR(nextValue);
    if ((isError && (!elem))) {
      var ev$5 = true;
      elem = ev$5;
    }
  }
  var this$$1 = $thiz.df();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.h8(nextValue, transaction);
    if ((isError && (!elem))) {
      var ev$6 = true;
      elem = ev$6;
    }
  }
  $thiz.cS(true);
  var x = $thiz.ec();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].L();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
  if ((isError && (!elem))) {
    nextValue.cE(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cV(err);
    })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))));
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.cS(false);
  var this$ = $thiz.da();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    try {
      observer.ee(nextValue);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      $m_Lcom_raquo_airstream_core_AirstreamError$().cV(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.df();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.ix(nextValue, transaction);
  }
  $thiz.cS(true);
  var x = $thiz.ec();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].L();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.cS(false);
  var this$ = $thiz.da();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.iw(nextError);
  }
  var this$$1 = $thiz.df();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.jX(nextError, transaction);
  }
  $thiz.cS(true);
  var x = $thiz.ec();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].L();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.cE(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, _$2, transaction);
  })));
}
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33(key$33) {
  this.fU = null;
  this.fV = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$33, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33, "com.raquo.laminar.defs.styles.StyleProps$$anon$33", ({
  eE: 1,
  b4: 1,
  af: 1,
  b2: 1,
  b3: 1,
  bA: 1,
  bB: 1,
  eI: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4(key$4) {
  this.fU = null;
  this.fV = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$4, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4, "com.raquo.laminar.defs.styles.StyleProps$$anon$4", ({
  eF: 1,
  b4: 1,
  af: 1,
  b2: 1,
  b3: 1,
  eG: 1,
  bA: 1,
  bB: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.c())) {
      return s;
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = s.y();
      n = temp$n;
      s = temp$s;
    }
  }
}
function $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  if (($thiz.be(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.it();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.e();
    var different = false;
    while (it.l()) {
      var next = it.d();
      if (seen.jG(f.b(next))) {
        builder.as(next);
      } else {
        different = true;
      }
    }
    return (different ? builder.aM() : $thiz);
  }
}
function $f_s_math_Numeric$IntIsIntegral__plus__I__I__I($thiz, x, y) {
  return ((x + y) | 0);
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.aC = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.bl = (function() {
  return $d_Z.l();
});
$p.c1 = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.aC = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.bl = (function() {
  return $d_B.l();
});
$p.c1 = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.aC = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.bl = (function() {
  return $d_C.l();
});
$p.c1 = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.aC = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.bl = (function() {
  return $d_D.l();
});
$p.c1 = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.aC = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.bl = (function() {
  return $d_F.l();
});
$p.c1 = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.aC = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.bl = (function() {
  return $d_I.l();
});
$p.c1 = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.aC = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.bl = (function() {
  return $d_J.l();
});
$p.c1 = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.e3 = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.v = (function() {
  return this.e3;
});
$p.k = (function(that) {
  return (this === that);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.aC = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.bl = (function() {
  return $d_S.l();
});
$p.c1 = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.aC = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.bl = (function() {
  return $d_V.l();
});
$p.c1 = (function(len) {
  return new ($d_jl_Void.r().C)(len);
});
function $f_Lcom_raquo_airstream_common_MultiParentSignal___parentLastUpdateIds__Lcom_raquo_ew_JsArray($thiz) {
  return $thiz.hf.map(((_$1) => _$1.gJ()));
}
function $f_Lcom_raquo_airstream_common_MultiParentSignal__onWillStart__V($thiz) {
  var arr = $thiz.hf;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(arr[i]);
    i = ((1 + i) | 0);
  }
  if ($f_Lcom_raquo_airstream_common_MultiParentSignal__updateParentLastUpdateIds__Z($thiz)) {
    $f_Lcom_raquo_airstream_common_MultiParentSignal__updateCurrentValueFromParent__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_common_MultiParentSignal__updateParentLastUpdateIds__Z($thiz) {
  var elem = false;
  elem = false;
  var arr = $thiz.hf;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var parent = arr[i];
    var ix = i;
    var newLastUpdateId = parent.gJ();
    if ((newLastUpdateId !== ($thiz.qU()[ix] | 0))) {
      $thiz.qU()[ix] = newLastUpdateId;
      var ev$3 = true;
      elem = ev$3;
    }
    i = ((1 + i) | 0);
  }
  return elem;
}
function $f_Lcom_raquo_airstream_common_MultiParentSignal__updateCurrentValueFromParent__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, $thiz.m1());
}
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.aE = (function() {
  return $m_sc_View$();
});
$p.v = (function() {
  return $f_sc_View__toString__T(this);
});
$p.bm = (function() {
  return "View";
});
function $f_sc_Set__equals__O__Z($thiz, that) {
  if (($thiz === that)) {
    return true;
  } else if ($is_sc_Set(that)) {
    if (($thiz.O() === that.O())) {
      try {
        return $thiz.mQ(that);
      } catch (e) {
        if ((e instanceof $c_jl_ClassCastException)) {
          return false;
        } else {
          throw e;
        }
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function $is_sc_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.a2)));
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a2)));
}
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.e3 = null;
  this.e3 = "Any";
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.bl = (function() {
  return $d_O.l();
});
$p.c1 = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  j7: 1,
  aV: 1,
  aU: 1,
  X: 1,
  M: 1,
  S: 1,
  T: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$AnyManifest$;
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$();
  }
  return $n_s_reflect_ManifestFactory$AnyManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest$() {
  this.aC = null;
  this.aC = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  j9: 1,
  j8: 1,
  ad: 1,
  X: 1,
  M: 1,
  S: 1,
  T: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$BooleanManifest$;
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$();
  }
  return $n_s_reflect_ManifestFactory$BooleanManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest$() {
  this.aC = null;
  this.aC = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  jb: 1,
  ja: 1,
  ad: 1,
  X: 1,
  M: 1,
  S: 1,
  T: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$ByteManifest$;
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$();
  }
  return $n_s_reflect_ManifestFactory$ByteManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest$() {
  this.aC = null;
  this.aC = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  jd: 1,
  jc: 1,
  ad: 1,
  X: 1,
  M: 1,
  S: 1,
  T: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$CharManifest$;
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$();
  }
  return $n_s_reflect_ManifestFactory$CharManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest$() {
  this.aC = null;
  this.aC = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  jf: 1,
  je: 1,
  ad: 1,
  X: 1,
  M: 1,
  S: 1,
  T: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$DoubleManifest$;
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$();
  }
  return $n_s_reflect_ManifestFactory$DoubleManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest$() {
  this.aC = null;
  this.aC = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  jh: 1,
  jg: 1,
  ad: 1,
  X: 1,
  M: 1,
  S: 1,
  T: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$FloatManifest$;
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$();
  }
  return $n_s_reflect_ManifestFactory$FloatManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest$() {
  this.aC = null;
  this.aC = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  jj: 1,
  ji: 1,
  ad: 1,
  X: 1,
  M: 1,
  S: 1,
  T: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$IntManifest$;
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$();
  }
  return $n_s_reflect_ManifestFactory$IntManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest$() {
  this.aC = null;
  this.aC = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  jl: 1,
  jk: 1,
  ad: 1,
  X: 1,
  M: 1,
  S: 1,
  T: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$LongManifest$;
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$();
  }
  return $n_s_reflect_ManifestFactory$LongManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NothingManifest$() {
  this.e3 = null;
  this.e3 = "Nothing";
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.bl = (function() {
  return $d_sr_Nothing$.l();
});
$p.c1 = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  jm: 1,
  aV: 1,
  aU: 1,
  X: 1,
  M: 1,
  S: 1,
  T: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$NothingManifest$;
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$();
  }
  return $n_s_reflect_ManifestFactory$NothingManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NullManifest$() {
  this.e3 = null;
  this.e3 = "Null";
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.bl = (function() {
  return $d_sr_Null$.l();
});
$p.c1 = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  jn: 1,
  aV: 1,
  aU: 1,
  X: 1,
  M: 1,
  S: 1,
  T: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$NullManifest$;
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$();
  }
  return $n_s_reflect_ManifestFactory$NullManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.e3 = null;
  this.e3 = "Object";
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.bl = (function() {
  return $d_O.l();
});
$p.c1 = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  jo: 1,
  aV: 1,
  aU: 1,
  X: 1,
  M: 1,
  S: 1,
  T: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$();
  }
  return $n_s_reflect_ManifestFactory$ObjectManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest$() {
  this.aC = null;
  this.aC = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  jq: 1,
  jp: 1,
  ad: 1,
  X: 1,
  M: 1,
  S: 1,
  T: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$ShortManifest$;
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$();
  }
  return $n_s_reflect_ManifestFactory$ShortManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest$() {
  this.aC = null;
  this.aC = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  js: 1,
  jr: 1,
  ad: 1,
  X: 1,
  M: 1,
  S: 1,
  T: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$UnitManifest$;
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$();
  }
  return $n_s_reflect_ManifestFactory$UnitManifest$;
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.mF(), $thiz, false);
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.mF(), $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomStreamSource(makeConfig) {
  this.nm = null;
  this.nl = false;
  this.nn = null;
  this.nj = null;
  this.nk = null;
  this.np = false;
  this.no = 0;
  this.iO = 0;
  this.iN = null;
  this.nm = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V(this);
  this.iN = makeConfig.tw(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, value, _$1);
    })));
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => ((_$2) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, err$2, _$2);
    }))(err)));
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.iO)), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this))));
}
$p = $c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomStreamSource;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomStreamSource() {
}
$h_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = $p;
$p.eb = (function() {
  return this.nm;
});
$p.e7 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.v = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fD = (function() {
  return this.nl;
});
$p.ec = (function() {
  return this.nn;
});
$p.cS = (function(x$1) {
  this.nl = x$1;
});
$p.fF = (function(x$1) {
  this.nn = x$1;
});
$p.k = (function(obj) {
  return (this === obj);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.h5 = (function(observer) {
});
$p.da = (function() {
  return this.nj;
});
$p.df = (function() {
  return this.nk;
});
$p.he = (function() {
  return this.np;
});
$p.eV = (function(x$1) {
  this.np = x$1;
});
$p.gP = (function(x$0) {
  this.nj = x$0;
});
$p.gQ = (function(x$0) {
  this.nk = x$0;
});
$p.gW = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.eg = (function() {
  return this.no;
});
$p.h9 = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V(this);
});
$p.h6 = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V(this);
});
$p.h7 = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V(this);
});
$p.eS = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_custom_CustomStreamSource = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomStreamSource, "com.raquo.airstream.custom.CustomStreamSource", ({
  dT: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aY: 1,
  aW: 1,
  at: 1,
  b0: 1,
  dP: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_VarSignal(initial, parentDisplayName) {
  this.o1 = null;
  this.o0 = false;
  this.o2 = null;
  this.kt = 0;
  this.nY = null;
  this.nZ = null;
  this.o5 = false;
  this.ku = null;
  this.o3 = null;
  this.o4 = 0;
  this.o3 = parentDisplayName;
  this.o1 = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.kt = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.ku = (void 0);
  this.o4 = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V(this, initial);
}
$p = $c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $p;
$p.eb = (function() {
  return this.o1;
});
$p.v = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fD = (function() {
  return this.o0;
});
$p.ec = (function() {
  return this.o2;
});
$p.cS = (function(x$1) {
  this.o0 = x$1;
});
$p.fF = (function(x$1) {
  this.o2 = x$1;
});
$p.h7 = (function() {
});
$p.k = (function(obj) {
  return (this === obj);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.gJ = (function() {
  return this.kt;
});
$p.jF = (function(x$1) {
  this.kt = x$1;
});
$p.iF = (function() {
  return this;
});
$p.h6 = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.h5 = (function(observer) {
  observer.eR($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.da = (function() {
  return this.nY;
});
$p.df = (function() {
  return this.nZ;
});
$p.he = (function() {
  return this.o5;
});
$p.eV = (function(x$1) {
  this.o5 = x$1;
});
$p.gP = (function(x$0) {
  this.nY = x$0;
});
$p.gQ = (function(x$0) {
  this.nZ = x$0;
});
$p.jV = (function() {
  return this.ku;
});
$p.mx = (function(x$1) {
  this.ku = x$1;
});
$p.gW = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.iG = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.eg = (function() {
  return this.o4;
});
$p.jJ = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.h9 = (function() {
});
$p.e7 = (function() {
  return (this.o3.L() + ".signal");
});
$p.eS = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().i($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  e9: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aF: 1,
  aJ: 1,
  at: 1,
  aZ: 1,
  e5: 1
}));
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.ij($thiz)) {
        return $thiz.fJ(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.p)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.p)));
}
/** @constructor */
function $c_sc_View$$anon$1(it$1) {
  this.q9 = null;
  this.q9 = it$1;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.e = (function() {
  return this.q9.L();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  hm: 1,
  G: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1
}));
function $ct_sc_View$Appended__sc_IterableOps__O__($thiz, underlying, elem) {
  $thiz.gp = underlying;
  $thiz.hG = elem;
  return $thiz;
}
/** @constructor */
function $c_sc_View$Appended() {
  this.gp = null;
  this.hG = null;
}
$p = $c_sc_View$Appended.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Appended;
/** @constructor */
function $h_sc_View$Appended() {
}
$h_sc_View$Appended.prototype = $p;
$p.e = (function() {
  return new $c_sc_View$Concat(this.gp, new $c_sc_View$Single(this.hG)).e();
});
$p.q = (function() {
  var size = this.gp.q();
  return ((size >= 0) ? ((1 + size) | 0) : (-1));
});
$p.c = (function() {
  return false;
});
var $d_sc_View$Appended = new $TypeData().i($c_sc_View$Appended, "scala.collection.View$Appended", ({
  aO: 1,
  G: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1
}));
/** @constructor */
function $c_sc_View$Concat(prefix, suffix) {
  this.jb = null;
  this.jc = null;
  this.jb = prefix;
  this.jc = suffix;
}
$p = $c_sc_View$Concat.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Concat;
/** @constructor */
function $h_sc_View$Concat() {
}
$h_sc_View$Concat.prototype = $p;
$p.e = (function() {
  return this.jb.e().gS(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.jc.e())));
});
$p.q = (function() {
  var prefixSize = this.jb.q();
  if ((prefixSize >= 0)) {
    var suffixSize = this.jc.q();
    return ((suffixSize >= 0) ? ((prefixSize + suffixSize) | 0) : (-1));
  } else {
    return (-1);
  }
});
$p.c = (function() {
  return (this.jb.c() && this.jc.c());
});
var $d_sc_View$Concat = new $TypeData().i($c_sc_View$Concat, "scala.collection.View$Concat", ({
  hn: 1,
  G: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1
}));
/** @constructor */
function $c_sc_View$DistinctBy(underlying, f) {
  this.jd = null;
  this.qa = null;
  this.jd = underlying;
  this.qa = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.e = (function() {
  return new $c_sc_Iterator$$anon$8(this.jd.e(), this.qa);
});
$p.q = (function() {
  return ((this.jd.q() === 0) ? 0 : (-1));
});
$p.c = (function() {
  return this.jd.c();
});
var $d_sc_View$DistinctBy = new $TypeData().i($c_sc_View$DistinctBy, "scala.collection.View$DistinctBy", ({
  ho: 1,
  G: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1
}));
/** @constructor */
function $c_sc_View$FlatMap(underlying, f) {
  this.lj = null;
  this.qb = null;
  this.lj = underlying;
  this.qb = f;
}
$p = $c_sc_View$FlatMap.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$FlatMap;
/** @constructor */
function $h_sc_View$FlatMap() {
}
$h_sc_View$FlatMap.prototype = $p;
$p.e = (function() {
  return new $c_sc_Iterator$$anon$10(this.lj.e(), this.qb);
});
$p.q = (function() {
  return ((this.lj.q() === 0) ? 0 : (-1));
});
$p.c = (function() {
  return (!this.e().l());
});
var $d_sc_View$FlatMap = new $TypeData().i($c_sc_View$FlatMap, "scala.collection.View$FlatMap", ({
  hq: 1,
  G: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1
}));
function $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f) {
  $thiz.f6 = underlying;
  $thiz.hH = f;
  return $thiz;
}
/** @constructor */
function $c_sc_View$Map() {
  this.f6 = null;
  this.hH = null;
}
$p = $c_sc_View$Map.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Map;
/** @constructor */
function $h_sc_View$Map() {
}
$h_sc_View$Map.prototype = $p;
$p.e = (function() {
  return new $c_sc_Iterator$$anon$9(this.f6.e(), this.hH);
});
$p.q = (function() {
  return this.f6.q();
});
$p.c = (function() {
  return this.f6.c();
});
var $d_sc_View$Map = new $TypeData().i($c_sc_View$Map, "scala.collection.View$Map", ({
  aP: 1,
  G: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1
}));
/** @constructor */
function $c_sc_View$Single(a) {
  this.qc = null;
  this.qc = a;
}
$p = $c_sc_View$Single.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Single;
/** @constructor */
function $h_sc_View$Single() {
}
$h_sc_View$Single.prototype = $p;
$p.e = (function() {
  return new $c_sc_Iterator$$anon$20(this.qc);
});
$p.q = (function() {
  return 1;
});
$p.c = (function() {
  return false;
});
var $d_sc_View$Single = new $TypeData().i($c_sc_View$Single, "scala.collection.View$Single", ({
  hr: 1,
  G: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1
}));
/** @constructor */
function $c_s_math_Numeric$IntIsIntegral$() {
}
$p = $c_s_math_Numeric$IntIsIntegral$.prototype = new $h_O();
$p.constructor = $c_s_math_Numeric$IntIsIntegral$;
/** @constructor */
function $h_s_math_Numeric$IntIsIntegral$() {
}
$h_s_math_Numeric$IntIsIntegral$.prototype = $p;
var $d_s_math_Numeric$IntIsIntegral$ = new $TypeData().i($c_s_math_Numeric$IntIsIntegral$, "scala.math.Numeric$IntIsIntegral$", ({
  iZ: 1,
  iY: 1,
  iW: 1,
  iX: 1,
  j0: 1,
  g4: 1,
  j2: 1,
  iV: 1,
  a: 1,
  j1: 1
}));
var $n_s_math_Numeric$IntIsIntegral$;
function $m_s_math_Numeric$IntIsIntegral$() {
  if ((!$n_s_math_Numeric$IntIsIntegral$)) {
    $n_s_math_Numeric$IntIsIntegral$ = new $c_s_math_Numeric$IntIsIntegral$();
  }
  return $n_s_math_Numeric$IntIsIntegral$;
}
/** @constructor */
function $c_Lsi\uff3ftool_adversaries_Stage$$anon$1(\u03b4name$2, _$ordinal$2, outer) {
  this.lN = null;
  this.lN = \u03b4name$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_Lsi\uff3ftool_adversaries_Stage$$anon$1.prototype = new $h_Lsi\uff3ftool_adversaries_Stage();
$p.constructor = $c_Lsi\uff3ftool_adversaries_Stage$$anon$1;
/** @constructor */
function $h_Lsi\uff3ftool_adversaries_Stage$$anon$1() {
}
$h_Lsi\uff3ftool_adversaries_Stage$$anon$1.prototype = $p;
$p.aJ = (function() {
  return 0;
});
$p.aK = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aL = (function() {
  return this.lN;
});
$p.v = (function() {
  return this.lN;
});
var $d_Lsi\uff3ftool_adversaries_Stage$$anon$1 = new $TypeData().i($c_Lsi\uff3ftool_adversaries_Stage$$anon$1, "si_tool.adversaries.Stage$$anon$1", ({
  kh: 1,
  kf: 1,
  d: 1,
  x: 1,
  a: 1,
  j6: 1,
  jA: 1,
  aI: 1,
  bl: 1,
  iU: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V($thiz) {
  $thiz.kn = ($thiz.ei !== null);
  $thiz.iP = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.ei);
  if ($thiz.kn) {
    var newParentLastUpdateId = $thiz.ei.gJ();
    if ((newParentLastUpdateId !== $thiz.iP)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.jJ(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.iP = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.kn) {
    $thiz.iP = $thiz.ei.gJ();
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.ei, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.ei, $thiz);
}
/** @constructor */
function $c_sc_AbstractSet() {
}
$p = $c_sc_AbstractSet.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSet;
/** @constructor */
function $h_sc_AbstractSet() {
}
$h_sc_AbstractSet.prototype = $p;
$p.k = (function(that) {
  return $f_sc_Set__equals__O__Z(this, that);
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.iH(this, this$1.jq);
});
$p.bm = (function() {
  return "Set";
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.mQ = (function(that) {
  return this.dx(that);
});
$p.b = (function(v1) {
  return this.al(v1);
});
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else if ($is_sc_Map(o)) {
    if (($thiz.O() === o.O())) {
      try {
        return $thiz.dx(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x2) => ((kv$2$2) => $m_sr_BoxesRunTime$().i(x2.e8(kv$2$2.bc(), $m_sc_Map$().q6), kv$2$2.b6())))(o)));
      } catch (e) {
        if ((e instanceof $c_jl_ClassCastException)) {
          return false;
        } else {
          throw e;
        }
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function $is_sc_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.ag)));
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
/** @constructor */
function $c_Lcom_raquo_airstream_combine_CombineSignalN(parents, combinator) {
  this.n3 = null;
  this.n2 = false;
  this.n4 = null;
  this.k9 = 0;
  this.n0 = null;
  this.n1 = null;
  this.n5 = false;
  this.ka = null;
  this.mX = null;
  this.mY = false;
  this.hf = null;
  this.mZ = null;
  this.kc = 0;
  this.kb = null;
  this.hf = parents;
  this.mZ = combinator;
  this.n3 = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.k9 = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.ka = (void 0);
  this.kc = ((1 + $m_Lcom_raquo_airstream_core_Protected$().vr(0, parents)) | 0);
  this.kb = parents.map(((parent) => $m_Lcom_raquo_airstream_common_InternalParentObserver$().uM(parent, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$1, trx) => {
    $f_Lcom_raquo_airstream_combine_CombineObservable__onInputsReady__Lcom_raquo_airstream_core_Transaction__V(this, trx);
  })))));
}
$p = $c_Lcom_raquo_airstream_combine_CombineSignalN.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_combine_CombineSignalN;
/** @constructor */
function $h_Lcom_raquo_airstream_combine_CombineSignalN() {
}
$h_Lcom_raquo_airstream_combine_CombineSignalN.prototype = $p;
$p.eb = (function() {
  return this.n3;
});
$p.e7 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.v = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fD = (function() {
  return this.n2;
});
$p.ec = (function() {
  return this.n4;
});
$p.cS = (function(x$1) {
  this.n2 = x$1;
});
$p.fF = (function(x$1) {
  this.n4 = x$1;
});
$p.k = (function(obj) {
  return (this === obj);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.gJ = (function() {
  return this.k9;
});
$p.jF = (function(x$1) {
  this.k9 = x$1;
});
$p.iF = (function() {
  return this;
});
$p.h5 = (function(observer) {
  observer.eR($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.da = (function() {
  return this.n0;
});
$p.df = (function() {
  return this.n1;
});
$p.he = (function() {
  return this.n5;
});
$p.eV = (function(x$1) {
  this.n5 = x$1;
});
$p.gP = (function(x$0) {
  this.n0 = x$0;
});
$p.gQ = (function(x$0) {
  this.n1 = x$0;
});
$p.jV = (function() {
  return this.ka;
});
$p.mx = (function(x$1) {
  this.ka = x$1;
});
$p.iG = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gW = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.qU = (function() {
  if ((!this.mY)) {
    this.mX = $f_Lcom_raquo_airstream_common_MultiParentSignal___parentLastUpdateIds__Lcom_raquo_ew_JsArray(this);
    this.mY = true;
  }
  return this.mX;
});
$p.h9 = (function() {
  $f_Lcom_raquo_airstream_common_MultiParentSignal__onWillStart__V(this);
});
$p.h6 = (function() {
  $f_Lcom_raquo_airstream_combine_CombineObservable__onStart__V(this);
});
$p.h7 = (function() {
  $f_Lcom_raquo_airstream_combine_CombineObservable__onStop__V(this);
});
$p.eg = (function() {
  return this.kc;
});
$p.m1 = (function() {
  return $m_Lcom_raquo_airstream_combine_CombineObservable$().vg(this.hf.map(((_$2) => _$2.iG())), this.mZ);
});
$p.jJ = (function() {
  return this.m1();
});
$p.eS = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_combine_CombineSignalN = new $TypeData().i($c_Lcom_raquo_airstream_combine_CombineSignalN, "com.raquo.airstream.combine.CombineSignalN", ({
  du: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aF: 1,
  aJ: 1,
  at: 1,
  aZ: 1,
  dA: 1,
  dK: 1,
  ds: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_CollectStream(parent, fn) {
  this.nu = null;
  this.nt = false;
  this.nv = null;
  this.nq = null;
  this.ns = null;
  this.nx = false;
  this.kj = null;
  this.nr = null;
  this.nw = 0;
  this.kj = parent;
  this.nr = fn;
  this.nu = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.nw = ((1 + parent.eg()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.eb = (function() {
  return this.nu;
});
$p.e7 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.v = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fD = (function() {
  return this.nt;
});
$p.ec = (function() {
  return this.nv;
});
$p.cS = (function(x$1) {
  this.nt = x$1;
});
$p.fF = (function(x$1) {
  this.nv = x$1;
});
$p.k = (function(obj) {
  return (this === obj);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.h5 = (function(observer) {
});
$p.da = (function() {
  return this.nq;
});
$p.df = (function() {
  return this.ns;
});
$p.he = (function() {
  return this.nx;
});
$p.eV = (function(x$1) {
  this.nx = x$1;
});
$p.gP = (function(x$0) {
  this.nq = x$0;
});
$p.gQ = (function(x$0) {
  this.ns = x$0;
});
$p.gW = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.h9 = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.kj);
});
$p.h6 = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.h7 = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.h8 = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.mF = (function() {
  return this.kj;
});
$p.eg = (function() {
  return this.nw;
});
$p.ix = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.nr.b(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().cP(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
    }
  }
  $x_1.cE(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
    if ((!nextValue.c())) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.E(), transaction);
    }
  })));
});
$p.jX = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.eS = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_CollectStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_CollectStream, "com.raquo.airstream.misc.CollectStream", ({
  dU: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aY: 1,
  aW: 1,
  at: 1,
  b0: 1,
  aE: 1,
  bp: 1,
  bn: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_FilterStream(parent, passes) {
  this.nB = null;
  this.nA = false;
  this.nC = null;
  this.ny = null;
  this.nz = null;
  this.nF = false;
  this.kk = null;
  this.nD = null;
  this.nE = 0;
  this.kk = parent;
  this.nD = passes;
  this.nB = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.nE = ((1 + parent.eg()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_FilterStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_FilterStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_FilterStream() {
}
$h_Lcom_raquo_airstream_misc_FilterStream.prototype = $p;
$p.eb = (function() {
  return this.nB;
});
$p.e7 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.v = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fD = (function() {
  return this.nA;
});
$p.ec = (function() {
  return this.nC;
});
$p.cS = (function(x$1) {
  this.nA = x$1;
});
$p.fF = (function(x$1) {
  this.nC = x$1;
});
$p.k = (function(obj) {
  return (this === obj);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.h5 = (function(observer) {
});
$p.da = (function() {
  return this.ny;
});
$p.df = (function() {
  return this.nz;
});
$p.he = (function() {
  return this.nF;
});
$p.eV = (function(x$1) {
  this.nF = x$1;
});
$p.gP = (function(x$0) {
  this.ny = x$0;
});
$p.gQ = (function(x$0) {
  this.nz = x$0;
});
$p.gW = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.h9 = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.kk);
});
$p.h6 = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.h7 = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.h8 = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.mF = (function() {
  return this.kk;
});
$p.eg = (function() {
  return this.nE;
});
$p.ix = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success((!(!this.nD.b(nextParentValue))));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().cP(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
    }
  }
  $x_1.cE(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((v1) => {
    if ((!(!v1))) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
    }
  })));
});
$p.jX = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.eS = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_FilterStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_FilterStream, "com.raquo.airstream.misc.FilterStream", ({
  dV: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aY: 1,
  aW: 1,
  at: 1,
  b0: 1,
  aE: 1,
  bp: 1,
  bn: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.nJ = null;
  this.nI = false;
  this.nK = null;
  this.kl = 0;
  this.nG = null;
  this.nH = null;
  this.nM = false;
  this.km = null;
  this.kn = false;
  this.iP = 0;
  this.ei = null;
  this.ko = null;
  this.kp = null;
  this.nL = 0;
  this.ei = parent;
  this.ko = project;
  this.kp = recover;
  this.nJ = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.kl = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.km = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.nL = ((1 + parent.eg()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.eb = (function() {
  return this.nJ;
});
$p.e7 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.v = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fD = (function() {
  return this.nI;
});
$p.ec = (function() {
  return this.nK;
});
$p.cS = (function(x$1) {
  this.nI = x$1;
});
$p.fF = (function(x$1) {
  this.nK = x$1;
});
$p.k = (function(obj) {
  return (this === obj);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.gJ = (function() {
  return this.kl;
});
$p.jF = (function(x$1) {
  this.kl = x$1;
});
$p.iF = (function() {
  return this;
});
$p.h5 = (function(observer) {
  observer.eR($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.da = (function() {
  return this.nG;
});
$p.df = (function() {
  return this.nH;
});
$p.he = (function() {
  return this.nM;
});
$p.eV = (function(x$1) {
  this.nM = x$1;
});
$p.gP = (function(x$0) {
  this.nG = x$0;
});
$p.gQ = (function(x$0) {
  this.nH = x$0;
});
$p.jV = (function() {
  return this.km;
});
$p.mx = (function(x$1) {
  this.km = x$1;
});
$p.iG = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gW = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.ix = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.jX = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.h9 = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$p.h6 = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$p.h7 = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$p.eg = (function() {
  return this.nL;
});
$p.h8 = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  nextParentValue.cE(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.kp;
    if (this$2.c()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
    } else {
      var x0 = this$2.E();
      try {
        var $x_1 = new $c_s_util_Success(x0.c5(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().cP(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
        }
      }
      $x_1.cE(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$3) => ((tryError) => {
        $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$3$3), transaction);
      }))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$4) => ((nextValue) => {
        if ((nextValue === null)) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$3$4, transaction);
        } else if ((!nextValue.c())) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.E(), transaction);
        }
      }))(nextError)));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.mw(this.ko), transaction);
  })));
});
$p.jJ = (function() {
  var originalValue = this.ei.iG().mw(this.ko);
  return originalValue.cE(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.kp;
    if (this$2.c()) {
      return originalValue;
    } else {
      var x0 = this$2.E();
      try {
        var $x_1 = new $c_s_util_Success(x0.c5(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().cP(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
        }
      }
      return $x_1.cE(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$7$3) => ((tryError) => new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$7$3))))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
        if ((nextValue === null)) {
          return originalValue;
        } else {
          var this$7 = (nextValue.c() ? $m_s_None$() : new $c_s_Some(new $c_s_util_Success(nextValue.E())));
          return (this$7.c() ? originalValue : this$7.E());
        }
      })));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$6) => originalValue)));
});
$p.eS = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapSignal, "com.raquo.airstream.misc.MapSignal", ({
  dW: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aF: 1,
  aJ: 1,
  at: 1,
  aZ: 1,
  aE: 1,
  bo: 1,
  dB: 1
}));
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.ij = (function(that) {
  return true;
});
$p.k = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().sl(this);
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.T = (function(elem) {
  return $f_sc_SeqOps__appended__O__O(this, elem);
});
$p.dv = (function(suffix) {
  return $f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix);
});
$p.gT = (function(suffix) {
  return this.dv(suffix);
});
$p.O = (function() {
  return this.o();
});
$p.cR = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.mm = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.fC = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.e(), p, from);
});
$p.mO = (function(otherSize) {
  return this.be(otherSize);
});
$p.be = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.fJ = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.c5 = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cj = (function(x) {
  return this.mm((x | 0));
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $p;
$p.cT = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.cO = (function(elem) {
  return $ct_sc_SeqView$Appended__sc_SeqOps__O__(new $c_sc_SeqView$Appended(), this, elem);
});
$p.bm = (function() {
  return "SeqView";
});
$p.gT = (function(suffix) {
  return $f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix);
});
$p.cR = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.fC = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.e(), p, from);
});
$p.be = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.T = (function(elem) {
  return this.cO(elem);
});
$p.M = (function(f) {
  return this.cT(f);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.t)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.t)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.av)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.av)));
}
/** @constructor */
function $c_sc_View$Empty$() {
}
$p = $c_sc_View$Empty$.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Empty$;
/** @constructor */
function $h_sc_View$Empty$() {
}
$h_sc_View$Empty$.prototype = $p;
$p.e = (function() {
  return $m_sc_Iterator$().D;
});
$p.q = (function() {
  return 0;
});
$p.c = (function() {
  return true;
});
$p.aL = (function() {
  return "Empty";
});
$p.aJ = (function() {
  return 0;
});
$p.aK = (function(x$1) {
  return $m_sr_Statics$().e9(x$1);
});
$p.aX = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return 67081517;
});
var $d_sc_View$Empty$ = new $TypeData().i($c_sc_View$Empty$, "scala.collection.View$Empty$", ({
  hp: 1,
  G: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1,
  x: 1,
  d: 1
}));
var $n_sc_View$Empty$;
function $m_sc_View$Empty$() {
  if ((!$n_sc_View$Empty$)) {
    $n_sc_View$Empty$ = new $c_sc_View$Empty$();
  }
  return $n_sc_View$Empty$;
}
function $f_Lcom_raquo_laminar_api_Laminar__$init$__V($thiz) {
  $thiz.ox = new $c_Lcom_raquo_laminar_api_Laminar$$anon$1();
  $thiz.sF = $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$();
}
/** @constructor */
function $c_sc_AbstractMap() {
}
$p = $c_sc_AbstractMap.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractMap;
/** @constructor */
function $h_sc_AbstractMap() {
}
$h_sc_AbstractMap.prototype = $p;
$p.k = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().vp(this);
});
$p.bm = (function() {
  return "Map";
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.fA = (function(coll) {
  return this.s1().am(coll);
});
$p.c5 = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.fz = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.cj = (function(key) {
  return this.al(key);
});
$p.eN = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
function $ct_sc_SeqView$Appended__sc_SeqOps__O__($thiz, underlying, elem) {
  $thiz.go = underlying;
  $thiz.j9 = elem;
  $ct_sc_View$Appended__sc_IterableOps__O__($thiz, underlying, elem);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Appended() {
  this.gp = null;
  this.hG = null;
  this.go = null;
  this.j9 = null;
}
$p = $c_sc_SeqView$Appended.prototype = new $h_sc_View$Appended();
$p.constructor = $c_sc_SeqView$Appended;
/** @constructor */
function $h_sc_SeqView$Appended() {
}
$h_sc_SeqView$Appended.prototype = $p;
$p.cT = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.cO = (function(elem) {
  return $ct_sc_SeqView$Appended__sc_SeqOps__O__(new $c_sc_SeqView$Appended(), this, elem);
});
$p.bm = (function() {
  return "SeqView";
});
$p.gT = (function(suffix) {
  return $f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix);
});
$p.cR = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.fC = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.e(), p, from);
});
$p.be = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.x = (function(idx) {
  return ((idx === this.go.o()) ? this.j9 : this.go.x(idx));
});
$p.o = (function() {
  return ((1 + this.go.o()) | 0);
});
$p.T = (function(elem) {
  return this.cO(elem);
});
$p.M = (function(f) {
  return this.cT(f);
});
var $d_sc_SeqView$Appended = new $TypeData().i($c_sc_SeqView$Appended, "scala.collection.SeqView$Appended", ({
  bc: 1,
  aO: 1,
  G: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1,
  a8: 1,
  m: 1
}));
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.f3 = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.f3 = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.x = (function(idx) {
  return this.f3.x(idx);
});
$p.o = (function() {
  return this.f3.o();
});
$p.e = (function() {
  return this.f3.e();
});
$p.q = (function() {
  return this.f3.q();
});
$p.c = (function() {
  return this.f3.c();
});
var $d_sc_SeqView$Id = new $TypeData().i($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  cd: 1,
  aM: 1,
  G: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1,
  a8: 1,
  m: 1
}));
function $ct_sc_SeqView$Map__sc_SeqOps__F1__($thiz, underlying, f) {
  $thiz.hD = underlying;
  $thiz.ja = f;
  $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Map() {
  this.f6 = null;
  this.hH = null;
  this.hD = null;
  this.ja = null;
}
$p = $c_sc_SeqView$Map.prototype = new $h_sc_View$Map();
$p.constructor = $c_sc_SeqView$Map;
/** @constructor */
function $h_sc_SeqView$Map() {
}
$h_sc_SeqView$Map.prototype = $p;
$p.cT = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.cO = (function(elem) {
  return $ct_sc_SeqView$Appended__sc_SeqOps__O__(new $c_sc_SeqView$Appended(), this, elem);
});
$p.bm = (function() {
  return "SeqView";
});
$p.gT = (function(suffix) {
  return $f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix);
});
$p.cR = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.fC = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.e(), p, from);
});
$p.be = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.x = (function(idx) {
  return this.ja.b(this.hD.x(idx));
});
$p.o = (function() {
  return this.hD.o();
});
$p.T = (function(elem) {
  return this.cO(elem);
});
$p.M = (function(f) {
  return this.cT(f);
});
var $d_sc_SeqView$Map = new $TypeData().i($c_sc_SeqView$Map, "scala.collection.SeqView$Map", ({
  bd: 1,
  aP: 1,
  G: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1,
  a8: 1,
  m: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$$anon$1() {
  this.oK = null;
  this.oL = false;
  this.oA = null;
  this.oB = false;
  this.oC = null;
  this.oD = false;
  this.oE = null;
  this.oF = false;
  this.oq = null;
  this.or = false;
  this.oS = null;
  this.oT = false;
  this.ov = null;
  this.ow = false;
  this.oU = null;
  this.oV = false;
  this.os = null;
  this.ot = false;
  this.p2 = null;
  this.p3 = false;
  this.oI = null;
  this.oJ = false;
  this.oY = null;
  this.oZ = false;
  this.oO = null;
  this.oP = false;
  this.oM = null;
  this.oN = false;
  this.oQ = null;
  this.oR = false;
  this.oo = null;
  this.op = false;
  this.oy = null;
  this.oz = false;
  this.oG = null;
  this.oH = false;
  this.p4 = null;
  this.p5 = false;
  this.ou = null;
  this.em = null;
  this.sE = null;
  this.om = null;
  this.on = false;
  this.oW = null;
  this.oX = false;
  this.ox = null;
  this.p0 = null;
  this.p1 = false;
  this.sF = null;
  $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V(this);
  $f_Lcom_raquo_laminar_api_MountHooks__$init$__V(this);
  $f_Lcom_raquo_laminar_api_AirstreamAliases__$init$__V(this);
  $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V(this);
  $f_Lcom_raquo_laminar_api_Laminar__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_api_package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_package$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$$anon$1() {
}
$h_Lcom_raquo_laminar_api_package$$anon$1.prototype = $p;
$p.uZ = (function() {
  if ((!this.oL)) {
    this.oK = new $c_Lcom_raquo_laminar_tags_HtmlTag("img", true);
    this.oL = true;
  }
  return this.oK;
});
$p.uV = (function() {
  if ((!this.oB)) {
    this.oA = new $c_Lcom_raquo_laminar_tags_HtmlTag("h1", false);
    this.oB = true;
  }
  return this.oA;
});
$p.jR = (function() {
  if ((!this.oD)) {
    this.oC = new $c_Lcom_raquo_laminar_tags_HtmlTag("h2", false);
    this.oD = true;
  }
  return this.oC;
});
$p.rQ = (function() {
  if ((!this.oF)) {
    this.oE = new $c_Lcom_raquo_laminar_tags_HtmlTag("h3", false);
    this.oF = true;
  }
  return this.oE;
});
$p.gO = (function() {
  if ((!this.or)) {
    this.oq = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    this.or = true;
  }
  return this.oq;
});
$p.vO = (function() {
  if ((!this.oT)) {
    this.oS = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    this.oT = true;
  }
  return this.oS;
});
$p.d7 = (function() {
  if ((!this.ow)) {
    this.ov = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.ow = true;
  }
  return this.ov;
});
$p.wo = (function() {
  if ((!this.oV)) {
    this.oU = new $c_Lcom_raquo_laminar_keys_HtmlAttr("src", $m_Lcom_raquo_laminar_codecs_package$().fS);
    this.oV = true;
  }
  return this.oU;
});
$p.tK = (function() {
  if ((!this.ot)) {
    this.os = new $c_Lcom_raquo_laminar_keys_HtmlProp("checked", $m_Lcom_raquo_laminar_codecs_package$().kA);
    this.ot = true;
  }
  return this.os;
});
$p.sA = (function() {
  if ((!this.p3)) {
    this.p2 = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().fS);
    this.p3 = true;
  }
  return this.p2;
});
$p.h0 = (function() {
  if ((!this.oJ)) {
    this.oI = new $c_Lcom_raquo_laminar_keys_HtmlProp("hidden", $m_Lcom_raquo_laminar_codecs_package$().kA);
    this.oJ = true;
  }
  return this.oI;
});
$p.ww = (function() {
  if ((!this.oZ)) {
    this.oY = new $c_Lcom_raquo_laminar_keys_HtmlProp("title", $m_Lcom_raquo_laminar_codecs_package$().fS);
    this.oZ = true;
  }
  return this.oY;
});
$p.fH = (function() {
  if ((!this.oP)) {
    this.oO = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.oP = true;
  }
  return this.oO;
});
$p.vK = (function() {
  if ((!this.oN)) {
    this.oM = new $c_Lcom_raquo_laminar_keys_EventProp("change");
    this.oN = true;
  }
  return this.oM;
});
$p.mC = (function() {
  if ((!this.oR)) {
    this.oQ = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    this.oR = true;
  }
  return this.oQ;
});
$p.gN = (function() {
  if ((!this.op)) {
    this.oo = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2("background-color");
    this.op = true;
  }
  return this.oo;
});
$p.uz = (function() {
  if ((!this.oz)) {
    this.oy = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33("font-size");
    this.oz = true;
  }
  return this.oy;
});
$p.uY = (function() {
  if ((!this.oH)) {
    this.oG = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("height");
    this.oH = true;
  }
  return this.oG;
});
$p.wK = (function() {
  if ((!this.p5)) {
    this.p4 = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("width");
    this.p5 = true;
  }
  return this.p4;
});
$p.t5 = (function() {
  if ((!this.on)) {
    this.om = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.on = true;
  }
  return this.om;
});
$p.wq = (function() {
  if ((!this.oX)) {
    this.oW = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.oX = true;
  }
  return this.oW;
});
$p.wF = (function() {
  if ((!this.p1)) {
    this.p0 = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.p1 = true;
  }
  return this.p0;
});
var $d_Lcom_raquo_laminar_api_package$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_package$$anon$1, "com.raquo.laminar.api.package$$anon$1", ({
  et: 1,
  eK: 1,
  ew: 1,
  eB: 1,
  bz: 1,
  eC: 1,
  ey: 1,
  er: 1,
  el: 1,
  eq: 1,
  bx: 1,
  bC: 1,
  bw: 1,
  em: 1
}));
function $is_sci_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.ai)));
}
function $isArrayOf_sci_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
/** @constructor */
function $c_sc_AbstractIndexedSeqView() {
}
$p = $c_sc_AbstractIndexedSeqView.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_AbstractIndexedSeqView;
/** @constructor */
function $h_sc_AbstractIndexedSeqView() {
}
$h_sc_AbstractIndexedSeqView.prototype = $p;
$p.e = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.cD = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
$p.cG = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.bm = (function() {
  return "IndexedSeqView";
});
$p.n = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.be = (function(len) {
  var x = this.o();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.o();
});
$p.cT = (function(f) {
  return this.cG(f);
});
$p.M = (function(f) {
  return this.cG(f);
});
$p.T = (function(elem) {
  return this.cD(elem);
});
$p.cO = (function(elem) {
  return this.cD(elem);
});
/** @constructor */
function $c_sci_AbstractSet() {
}
$p = $c_sci_AbstractSet.prototype = new $h_sc_AbstractSet();
$p.constructor = $c_sci_AbstractSet;
/** @constructor */
function $h_sci_AbstractSet() {
}
$h_sci_AbstractSet.prototype = $p;
$p.aE = (function() {
  return $m_sci_Set$();
});
function $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__($thiz, underlying, elem) {
  $ct_sc_SeqView$Appended__sc_SeqOps__O__($thiz, underlying, elem);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$Appended() {
  this.gp = null;
  this.hG = null;
  this.go = null;
  this.j9 = null;
}
$p = $c_sc_IndexedSeqView$Appended.prototype = new $h_sc_SeqView$Appended();
$p.constructor = $c_sc_IndexedSeqView$Appended;
/** @constructor */
function $h_sc_IndexedSeqView$Appended() {
}
$h_sc_IndexedSeqView$Appended.prototype = $p;
$p.e = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.cD = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
$p.cG = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.bm = (function() {
  return "IndexedSeqView";
});
$p.n = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.be = (function(len) {
  var x = this.o();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.o();
});
$p.cT = (function(f) {
  return this.cG(f);
});
$p.M = (function(f) {
  return this.cG(f);
});
$p.T = (function(elem) {
  return this.cD(elem);
});
$p.cO = (function(elem) {
  return this.cD(elem);
});
var $d_sc_IndexedSeqView$Appended = new $TypeData().i($c_sc_IndexedSeqView$Appended, "scala.collection.IndexedSeqView$Appended", ({
  c7: 1,
  bc: 1,
  aO: 1,
  G: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1,
  a8: 1,
  m: 1,
  ap: 1,
  o: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.f3 = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.e = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bm = (function() {
  return "IndexedSeqView";
});
$p.n = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.be = (function(len) {
  var x = this.o();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.o();
});
$p.cT = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.M = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.T = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
$p.cO = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  gZ: 1,
  cd: 1,
  aM: 1,
  G: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1,
  a8: 1,
  m: 1,
  ap: 1,
  o: 1
}));
function $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__($thiz, underlying, f) {
  $ct_sc_SeqView$Map__sc_SeqOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$Map() {
  this.f6 = null;
  this.hH = null;
  this.hD = null;
  this.ja = null;
}
$p = $c_sc_IndexedSeqView$Map.prototype = new $h_sc_SeqView$Map();
$p.constructor = $c_sc_IndexedSeqView$Map;
/** @constructor */
function $h_sc_IndexedSeqView$Map() {
}
$h_sc_IndexedSeqView$Map.prototype = $p;
$p.e = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.cD = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
$p.cG = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.bm = (function() {
  return "IndexedSeqView";
});
$p.n = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.be = (function(len) {
  var x = this.o();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.o();
});
$p.cT = (function(f) {
  return this.cG(f);
});
$p.M = (function(f) {
  return this.cG(f);
});
$p.T = (function(elem) {
  return this.cD(elem);
});
$p.cO = (function(elem) {
  return this.cD(elem);
});
var $d_sc_IndexedSeqView$Map = new $TypeData().i($c_sc_IndexedSeqView$Map, "scala.collection.IndexedSeqView$Map", ({
  c9: 1,
  bd: 1,
  aP: 1,
  G: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1,
  a8: 1,
  m: 1,
  ap: 1,
  o: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $p;
/** @constructor */
function $c_scm_ArrayBufferView(underlying, mutationCount) {
  this.lz = null;
  this.jh = null;
  this.lz = underlying;
  this.jh = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.x = (function(n) {
  return this.lz.x(n);
});
$p.o = (function() {
  return this.lz.aV;
});
$p.c6 = (function() {
  return "ArrayBufferView";
});
$p.e = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.jh);
});
$p.cD = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.jh);
});
$p.cG = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.jh);
});
$p.cT = (function(f) {
  return this.cG(f);
});
$p.M = (function(f) {
  return this.cG(f);
});
$p.T = (function(elem) {
  return this.cD(elem);
});
$p.cO = (function(elem) {
  return this.cD(elem);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  iv: 1,
  c3: 1,
  aM: 1,
  G: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1,
  a8: 1,
  m: 1,
  ap: 1,
  o: 1
}));
/** @constructor */
function $c_sci_AbstractMap() {
}
$p = $c_sci_AbstractMap.prototype = new $h_sc_AbstractMap();
$p.constructor = $c_sci_AbstractMap;
/** @constructor */
function $h_sci_AbstractMap() {
}
$h_sci_AbstractMap.prototype = $p;
$p.s1 = (function() {
  return $m_sci_Map$();
});
$p.ms = (function() {
  return $ct_sci_MapOps$ImmutableKeySet__sci_MapOps__(new $c_sci_MapOps$ImmutableKeySet(), this);
});
$p.aE = (function() {
  return $m_sci_Iterable$();
});
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  return ((!$is_sci_IndexedSeq(that)) || ($thiz.o() === that.o()));
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.o();
      var equal = (length === o.o());
      if (equal) {
        var index = 0;
        var a = $thiz.ii();
        var b = o.ii();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().i($thiz.x(index), o.x(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.e().d9(index);
          var thatIt = o.e().d9(index);
          while ((equal && thisIt.l())) {
            equal = $m_sr_BoxesRunTime$().i(thisIt.d(), thatIt.d());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.B)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.B)));
}
/** @constructor */
function $c_sci_Set$EmptySet$() {
}
$p = $c_sci_Set$EmptySet$.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$EmptySet$;
/** @constructor */
function $h_sci_Set$EmptySet$() {
}
$h_sci_Set$EmptySet$.prototype = $p;
$p.O = (function() {
  return 0;
});
$p.c = (function() {
  return true;
});
$p.q = (function() {
  return 0;
});
$p.mQ = (function(that) {
  return true;
});
$p.al = (function(elem) {
  return false;
});
$p.e = (function() {
  return $m_sc_Iterator$().D;
});
$p.U = (function(f) {
});
$p.dA = (function(elem) {
  return new $c_sci_Set$Set1(elem);
});
var $d_sci_Set$EmptySet$ = new $TypeData().i($c_sci_Set$EmptySet$, "scala.collection.immutable.Set$EmptySet$", ({
  i9: 1,
  ah: 1,
  ab: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  a2: 1,
  ac: 1,
  i: 1,
  d: 1,
  aj: 1,
  q: 1,
  ak: 1,
  a: 1
}));
var $n_sci_Set$EmptySet$;
function $m_sci_Set$EmptySet$() {
  if ((!$n_sci_Set$EmptySet$)) {
    $n_sci_Set$EmptySet$ = new $c_sci_Set$EmptySet$();
  }
  return $n_sci_Set$EmptySet$;
}
/** @constructor */
function $c_sc_StringView(s) {
  this.f5 = null;
  this.f5 = s;
}
$p = $c_sc_StringView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_sc_StringView;
/** @constructor */
function $h_sc_StringView() {
}
$h_sc_StringView.prototype = $p;
$p.o = (function() {
  return this.f5.length;
});
$p.v = (function() {
  return (("StringView(" + this.f5) + ")");
});
$p.aL = (function() {
  return "StringView";
});
$p.aJ = (function() {
  return 1;
});
$p.aK = (function(x$1) {
  return ((x$1 === 0) ? this.f5 : $m_sr_Statics$().e9(x$1));
});
$p.aX = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.k = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_sc_StringView) && (this.f5 === x$1.f5)));
});
$p.x = (function(i) {
  return $bC(this.f5.charCodeAt(i));
});
function $isArrayOf_sc_StringView(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cf)));
}
var $d_sc_StringView = new $TypeData().i($c_sc_StringView, "scala.collection.StringView", ({
  cf: 1,
  c3: 1,
  aM: 1,
  G: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1,
  a8: 1,
  m: 1,
  ap: 1,
  o: 1,
  x: 1,
  d: 1
}));
function $isArrayOf_sci_SeqMap$SeqMap1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.i4)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.i5)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.i6)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.i7)));
}
/** @constructor */
function $c_sci_Set$Set1(elem1) {
  this.fg = null;
  this.fg = elem1;
}
$p = $c_sci_Set$Set1.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set1;
/** @constructor */
function $h_sci_Set$Set1() {
}
$h_sci_Set$Set1.prototype = $p;
$p.M = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.O = (function() {
  return 1;
});
$p.c = (function() {
  return false;
});
$p.q = (function() {
  return 1;
});
$p.al = (function(elem) {
  return $m_sr_BoxesRunTime$().i(elem, this.fg);
});
$p.de = (function(elem) {
  return (this.al(elem) ? this : new $c_sci_Set$Set2(this.fg, elem));
});
$p.e = (function() {
  return new $c_sc_Iterator$$anon$20(this.fg);
});
$p.U = (function(f) {
  f.b(this.fg);
});
$p.dx = (function(p) {
  return (!(!p.b(this.fg)));
});
$p.n = (function() {
  return this.fg;
});
$p.dA = (function(elem) {
  return this.de(elem);
});
function $isArrayOf_sci_Set$Set1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cI)));
}
var $d_sci_Set$Set1 = new $TypeData().i($c_sci_Set$Set1, "scala.collection.immutable.Set$Set1", ({
  cI: 1,
  ah: 1,
  ab: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  a2: 1,
  ac: 1,
  i: 1,
  d: 1,
  aj: 1,
  q: 1,
  ak: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set2(elem1, elem2) {
  this.fh = null;
  this.gy = null;
  this.fh = elem1;
  this.gy = elem2;
}
$p = $c_sci_Set$Set2.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set2;
/** @constructor */
function $h_sci_Set$Set2() {
}
$h_sci_Set$Set2.prototype = $p;
$p.M = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.O = (function() {
  return 2;
});
$p.c = (function() {
  return false;
});
$p.q = (function() {
  return 2;
});
$p.al = (function(elem) {
  return ($m_sr_BoxesRunTime$().i(elem, this.fh) || $m_sr_BoxesRunTime$().i(elem, this.gy));
});
$p.de = (function(elem) {
  return (this.al(elem) ? this : new $c_sci_Set$Set3(this.fh, this.gy, elem));
});
$p.e = (function() {
  return new $c_sci_Set$Set2$$anon$1(this);
});
$p.wd = (function(i) {
  switch (i) {
    case 0: {
      return this.fh;
      break;
    }
    case 1: {
      return this.gy;
      break;
    }
    default: {
      throw new $c_s_MatchError(i);
    }
  }
});
$p.U = (function(f) {
  f.b(this.fh);
  f.b(this.gy);
});
$p.dx = (function(p) {
  return ((!(!p.b(this.fh))) && (!(!p.b(this.gy))));
});
$p.n = (function() {
  return this.fh;
});
$p.dA = (function(elem) {
  return this.de(elem);
});
function $isArrayOf_sci_Set$Set2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cJ)));
}
var $d_sci_Set$Set2 = new $TypeData().i($c_sci_Set$Set2, "scala.collection.immutable.Set$Set2", ({
  cJ: 1,
  ah: 1,
  ab: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  a2: 1,
  ac: 1,
  i: 1,
  d: 1,
  aj: 1,
  q: 1,
  ak: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set3(elem1, elem2, elem3) {
  this.fi = null;
  this.gz = null;
  this.gA = null;
  this.fi = elem1;
  this.gz = elem2;
  this.gA = elem3;
}
$p = $c_sci_Set$Set3.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set3;
/** @constructor */
function $h_sci_Set$Set3() {
}
$h_sci_Set$Set3.prototype = $p;
$p.M = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.O = (function() {
  return 3;
});
$p.c = (function() {
  return false;
});
$p.q = (function() {
  return 3;
});
$p.al = (function(elem) {
  return (($m_sr_BoxesRunTime$().i(elem, this.fi) || $m_sr_BoxesRunTime$().i(elem, this.gz)) || $m_sr_BoxesRunTime$().i(elem, this.gA));
});
$p.de = (function(elem) {
  return (this.al(elem) ? this : new $c_sci_Set$Set4(this.fi, this.gz, this.gA, elem));
});
$p.e = (function() {
  return new $c_sci_Set$Set3$$anon$2(this);
});
$p.we = (function(i) {
  switch (i) {
    case 0: {
      return this.fi;
      break;
    }
    case 1: {
      return this.gz;
      break;
    }
    case 2: {
      return this.gA;
      break;
    }
    default: {
      throw new $c_s_MatchError(i);
    }
  }
});
$p.U = (function(f) {
  f.b(this.fi);
  f.b(this.gz);
  f.b(this.gA);
});
$p.dx = (function(p) {
  return (((!(!p.b(this.fi))) && (!(!p.b(this.gz)))) && (!(!p.b(this.gA))));
});
$p.n = (function() {
  return this.fi;
});
$p.dA = (function(elem) {
  return this.de(elem);
});
function $isArrayOf_sci_Set$Set3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cK)));
}
var $d_sci_Set$Set3 = new $TypeData().i($c_sci_Set$Set3, "scala.collection.immutable.Set$Set3", ({
  cK: 1,
  ah: 1,
  ab: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  a2: 1,
  ac: 1,
  i: 1,
  d: 1,
  aj: 1,
  q: 1,
  ak: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set4(elem1, elem2, elem3, elem4) {
  this.ew = null;
  this.fj = null;
  this.fk = null;
  this.fl = null;
  this.ew = elem1;
  this.fj = elem2;
  this.fk = elem3;
  this.fl = elem4;
}
$p = $c_sci_Set$Set4.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set4;
/** @constructor */
function $h_sci_Set$Set4() {
}
$h_sci_Set$Set4.prototype = $p;
$p.M = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.O = (function() {
  return 4;
});
$p.c = (function() {
  return false;
});
$p.q = (function() {
  return 4;
});
$p.al = (function(elem) {
  return ((($m_sr_BoxesRunTime$().i(elem, this.ew) || $m_sr_BoxesRunTime$().i(elem, this.fj)) || $m_sr_BoxesRunTime$().i(elem, this.fk)) || $m_sr_BoxesRunTime$().i(elem, this.fl));
});
$p.de = (function(elem) {
  return (this.al(elem) ? this : $m_sci_HashSet$().hK.h1(this.ew).h1(this.fj).h1(this.fk).h1(this.fl).h1(elem));
});
$p.e = (function() {
  return new $c_sci_Set$Set4$$anon$3(this);
});
$p.wf = (function(i) {
  switch (i) {
    case 0: {
      return this.ew;
      break;
    }
    case 1: {
      return this.fj;
      break;
    }
    case 2: {
      return this.fk;
      break;
    }
    case 3: {
      return this.fl;
      break;
    }
    default: {
      throw new $c_s_MatchError(i);
    }
  }
});
$p.U = (function(f) {
  f.b(this.ew);
  f.b(this.fj);
  f.b(this.fk);
  f.b(this.fl);
});
$p.dx = (function(p) {
  return ((((!(!p.b(this.ew))) && (!(!p.b(this.fj)))) && (!(!p.b(this.fk)))) && (!(!p.b(this.fl))));
});
$p.n = (function() {
  return this.ew;
});
$p.tI = (function(builder) {
  return builder.as(this.ew).as(this.fj).as(this.fk).as(this.fl);
});
$p.dA = (function(elem) {
  return this.de(elem);
});
function $isArrayOf_sci_Set$Set4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cL)));
}
var $d_sci_Set$Set4 = new $TypeData().i($c_sci_Set$Set4, "scala.collection.immutable.Set$Set4", ({
  cL: 1,
  ah: 1,
  ab: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  a2: 1,
  ac: 1,
  i: 1,
  d: 1,
  aj: 1,
  q: 1,
  ak: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_AbstractSeq() {
}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $p;
/** @constructor */
function $c_scm_CheckedIndexedSeqView$Appended(underlying, elem, mutationCount) {
  this.gp = null;
  this.hG = null;
  this.go = null;
  this.j9 = null;
  this.eF = null;
  this.eF = mutationCount;
  $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(this, underlying, elem);
}
$p = $c_scm_CheckedIndexedSeqView$Appended.prototype = new $h_sc_IndexedSeqView$Appended();
$p.constructor = $c_scm_CheckedIndexedSeqView$Appended;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$Appended() {
}
$h_scm_CheckedIndexedSeqView$Appended.prototype = $p;
$p.e = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.eF);
});
$p.cD = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.eF);
});
$p.cG = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.eF);
});
$p.cT = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.eF);
});
$p.M = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.eF);
});
$p.T = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.eF);
});
$p.cO = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.eF);
});
var $d_scm_CheckedIndexedSeqView$Appended = new $TypeData().i($c_scm_CheckedIndexedSeqView$Appended, "scala.collection.mutable.CheckedIndexedSeqView$Appended", ({
  iB: 1,
  c7: 1,
  bc: 1,
  aO: 1,
  G: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1,
  a8: 1,
  m: 1,
  ap: 1,
  o: 1,
  d5: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$Map(underlying, f, mutationCount) {
  this.f6 = null;
  this.hH = null;
  this.hD = null;
  this.ja = null;
  this.eG = null;
  this.eG = mutationCount;
  $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(this, underlying, f);
}
$p = $c_scm_CheckedIndexedSeqView$Map.prototype = new $h_sc_IndexedSeqView$Map();
$p.constructor = $c_scm_CheckedIndexedSeqView$Map;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$Map() {
}
$h_scm_CheckedIndexedSeqView$Map.prototype = $p;
$p.e = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.eG);
});
$p.cD = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.eG);
});
$p.cG = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.eG);
});
$p.cT = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.eG);
});
$p.M = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.eG);
});
$p.T = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.eG);
});
$p.cO = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.eG);
});
var $d_scm_CheckedIndexedSeqView$Map = new $TypeData().i($c_scm_CheckedIndexedSeqView$Map, "scala.collection.mutable.CheckedIndexedSeqView$Map", ({
  iD: 1,
  c9: 1,
  bd: 1,
  aP: 1,
  G: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1,
  a8: 1,
  m: 1,
  ap: 1,
  o: 1,
  d5: 1
}));
/** @constructor */
function $c_sci_Map$EmptyMap$() {
}
$p = $c_sci_Map$EmptyMap$.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$EmptyMap$;
/** @constructor */
function $h_sci_Map$EmptyMap$() {
}
$h_sci_Map$EmptyMap$.prototype = $p;
$p.O = (function() {
  return 0;
});
$p.q = (function() {
  return 0;
});
$p.c = (function() {
  return true;
});
$p.lU = (function(key) {
  throw new $c_ju_NoSuchElementException(("key not found: " + key));
});
$p.al = (function(key) {
  return false;
});
$p.gY = (function(key) {
  return $m_s_None$();
});
$p.e8 = (function(key, default$1) {
  return default$1.L();
});
$p.e = (function() {
  return $m_sc_Iterator$().D;
});
$p.h3 = (function() {
  return $m_sc_Iterator$().D;
});
$p.eU = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
$p.b = (function(key) {
  this.lU(key);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  hO: 1,
  az: 1,
  au: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  ag: 1,
  ax: 1,
  j: 1,
  i: 1,
  aw: 1,
  d: 1,
  ai: 1,
  q: 1,
  aB: 1,
  a: 1
}));
var $n_sci_Map$EmptyMap$;
function $m_sci_Map$EmptyMap$() {
  if ((!$n_sci_Map$EmptyMap$)) {
    $n_sci_Map$EmptyMap$ = new $c_sci_Map$EmptyMap$();
  }
  return $n_sci_Map$EmptyMap$;
}
function $ct_sci_MapOps$ImmutableKeySet__sci_MapOps__($thiz, outer) {
  $thiz.dr = outer;
  return $thiz;
}
/** @constructor */
function $c_sci_MapOps$ImmutableKeySet() {
  this.dr = null;
}
$p = $c_sci_MapOps$ImmutableKeySet.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_MapOps$ImmutableKeySet;
/** @constructor */
function $h_sci_MapOps$ImmutableKeySet() {
}
$h_sci_MapOps$ImmutableKeySet.prototype = $p;
$p.e = (function() {
  return this.dr.h3();
});
$p.al = (function(key) {
  return this.dr.al(key);
});
$p.O = (function() {
  return this.dr.O();
});
$p.q = (function() {
  return this.dr.q();
});
$p.c = (function() {
  return this.dr.c();
});
$p.de = (function(elem) {
  return (this.dr.al(elem) ? this : $f_sc_SetOps__concat__sc_IterableOnce__sc_SetOps($m_sci_Set$EmptySet$(), this).dA(elem));
});
$p.dA = (function(elem) {
  return this.de(elem);
});
function $isArrayOf_sci_MapOps$ImmutableKeySet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bf)));
}
var $d_sci_MapOps$ImmutableKeySet = new $TypeData().i($c_sci_MapOps$ImmutableKeySet, "scala.collection.immutable.MapOps$ImmutableKeySet", ({
  bf: 1,
  ah: 1,
  ab: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  a2: 1,
  ac: 1,
  i: 1,
  d: 1,
  aj: 1,
  q: 1,
  ak: 1,
  cc: 1,
  K: 1,
  a: 1
}));
function $p_sci_HashMap$HashKeySet__newKeySetOrThis__sci_BitmapIndexedMapNode__sci_Set($thiz, newRootNode) {
  return ((newRootNode === $thiz.dr.bg) ? $thiz : new $c_sci_HashMap(newRootNode).ms());
}
/** @constructor */
function $c_sci_HashMap$HashKeySet(outer) {
  this.dr = null;
  $ct_sci_MapOps$ImmutableKeySet__sci_MapOps__(this, outer);
}
$p = $c_sci_HashMap$HashKeySet.prototype = new $h_sci_MapOps$ImmutableKeySet();
$p.constructor = $c_sci_HashMap$HashKeySet;
/** @constructor */
function $h_sci_HashMap$HashKeySet() {
}
$h_sci_HashMap$HashKeySet.prototype = $p;
$p.de = (function(elem) {
  var originalHash = $m_sr_Statics$().R(elem);
  var improvedHash = $m_sc_Hashing$().bs(originalHash);
  return $p_sci_HashMap$HashKeySet__newKeySetOrThis__sci_BitmapIndexedMapNode__sci_Set(this, this.dr.bg.mU(elem, null, originalHash, improvedHash, 0, false));
});
$p.dA = (function(elem) {
  return this.de(elem);
});
function $isArrayOf_sci_HashMap$HashKeySet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cw)));
}
var $d_sci_HashMap$HashKeySet = new $TypeData().i($c_sci_HashMap$HashKeySet, "scala.collection.immutable.HashMap$HashKeySet", ({
  cw: 1,
  bf: 1,
  ah: 1,
  ab: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  a2: 1,
  ac: 1,
  i: 1,
  d: 1,
  aj: 1,
  q: 1,
  ak: 1,
  cc: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map1(key1, value1) {
  this.cv = null;
  this.dQ = null;
  this.cv = key1;
  this.dQ = value1;
}
$p = $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $p;
$p.M = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.O = (function() {
  return 1;
});
$p.q = (function() {
  return 1;
});
$p.c = (function() {
  return false;
});
$p.b = (function(key) {
  if ($m_sr_BoxesRunTime$().i(key, this.cv)) {
    return this.dQ;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.al = (function(key) {
  return $m_sr_BoxesRunTime$().i(key, this.cv);
});
$p.gY = (function(key) {
  return ($m_sr_BoxesRunTime$().i(key, this.cv) ? new $c_s_Some(this.dQ) : $m_s_None$());
});
$p.e8 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().i(key, this.cv) ? this.dQ : default$1.L());
});
$p.e = (function() {
  return new $c_sc_Iterator$$anon$20(new $c_T2(this.cv, this.dQ));
});
$p.h3 = (function() {
  return new $c_sc_Iterator$$anon$20(this.cv);
});
$p.fM = (function(key, value) {
  return ($m_sr_BoxesRunTime$().i(key, this.cv) ? new $c_sci_Map$Map1(this.cv, value) : new $c_sci_Map$Map2(this.cv, this.dQ, key, value));
});
$p.U = (function(f) {
  f.b(new $c_T2(this.cv, this.dQ));
});
$p.dx = (function(p) {
  return (!(!p.b(new $c_T2(this.cv, this.dQ))));
});
$p.u = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().di(this.cv, this.dQ);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().eL;
  h = $m_s_util_hashing_MurmurHash3$().j(h, a);
  h = $m_s_util_hashing_MurmurHash3$().j(h, b);
  h = $m_s_util_hashing_MurmurHash3$().ed(h, c);
  return $m_s_util_hashing_MurmurHash3$().H(h, 1);
});
$p.eU = (function(key, value) {
  return this.fM(key, value);
});
function $isArrayOf_sci_Map$Map1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cA)));
}
var $d_sci_Map$Map1 = new $TypeData().i($c_sci_Map$Map1, "scala.collection.immutable.Map$Map1", ({
  cA: 1,
  az: 1,
  au: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  ag: 1,
  ax: 1,
  j: 1,
  i: 1,
  aw: 1,
  d: 1,
  ai: 1,
  q: 1,
  aB: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.cw = null;
  this.dp = null;
  this.cx = null;
  this.dq = null;
  this.cw = key1;
  this.dp = value1;
  this.cx = key2;
  this.dq = value2;
}
$p = $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $p;
$p.M = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.O = (function() {
  return 2;
});
$p.q = (function() {
  return 2;
});
$p.c = (function() {
  return false;
});
$p.b = (function(key) {
  if ($m_sr_BoxesRunTime$().i(key, this.cw)) {
    return this.dp;
  } else if ($m_sr_BoxesRunTime$().i(key, this.cx)) {
    return this.dq;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.al = (function(key) {
  return ($m_sr_BoxesRunTime$().i(key, this.cw) || $m_sr_BoxesRunTime$().i(key, this.cx));
});
$p.gY = (function(key) {
  return ($m_sr_BoxesRunTime$().i(key, this.cw) ? new $c_s_Some(this.dp) : ($m_sr_BoxesRunTime$().i(key, this.cx) ? new $c_s_Some(this.dq) : $m_s_None$()));
});
$p.e8 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().i(key, this.cw) ? this.dp : ($m_sr_BoxesRunTime$().i(key, this.cx) ? this.dq : default$1.L()));
});
$p.e = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.h3 = (function() {
  return new $c_sci_Map$Map2$$anon$2(this);
});
$p.fM = (function(key, value) {
  return ($m_sr_BoxesRunTime$().i(key, this.cw) ? new $c_sci_Map$Map2(this.cw, value, this.cx, this.dq) : ($m_sr_BoxesRunTime$().i(key, this.cx) ? new $c_sci_Map$Map2(this.cw, this.dp, this.cx, value) : new $c_sci_Map$Map3(this.cw, this.dp, this.cx, this.dq, key, value)));
});
$p.U = (function(f) {
  f.b(new $c_T2(this.cw, this.dp));
  f.b(new $c_T2(this.cx, this.dq));
});
$p.dx = (function(p) {
  return ((!(!p.b(new $c_T2(this.cw, this.dp)))) && (!(!p.b(new $c_T2(this.cx, this.dq)))));
});
$p.u = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().di(this.cw, this.dp);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().di(this.cx, this.dq);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().eL;
  h = $m_s_util_hashing_MurmurHash3$().j(h, a);
  h = $m_s_util_hashing_MurmurHash3$().j(h, b);
  h = $m_s_util_hashing_MurmurHash3$().ed(h, c);
  return $m_s_util_hashing_MurmurHash3$().H(h, 2);
});
$p.eU = (function(key, value) {
  return this.fM(key, value);
});
function $isArrayOf_sci_Map$Map2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cB)));
}
var $d_sci_Map$Map2 = new $TypeData().i($c_sci_Map$Map2, "scala.collection.immutable.Map$Map2", ({
  cB: 1,
  az: 1,
  au: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  ag: 1,
  ax: 1,
  j: 1,
  i: 1,
  aw: 1,
  d: 1,
  ai: 1,
  q: 1,
  aB: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.cc = null;
  this.cY = null;
  this.cd = null;
  this.cZ = null;
  this.ce = null;
  this.d0 = null;
  this.cc = key1;
  this.cY = value1;
  this.cd = key2;
  this.cZ = value2;
  this.ce = key3;
  this.d0 = value3;
}
$p = $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $p;
$p.M = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.O = (function() {
  return 3;
});
$p.q = (function() {
  return 3;
});
$p.c = (function() {
  return false;
});
$p.b = (function(key) {
  if ($m_sr_BoxesRunTime$().i(key, this.cc)) {
    return this.cY;
  } else if ($m_sr_BoxesRunTime$().i(key, this.cd)) {
    return this.cZ;
  } else if ($m_sr_BoxesRunTime$().i(key, this.ce)) {
    return this.d0;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.al = (function(key) {
  return (($m_sr_BoxesRunTime$().i(key, this.cc) || $m_sr_BoxesRunTime$().i(key, this.cd)) || $m_sr_BoxesRunTime$().i(key, this.ce));
});
$p.gY = (function(key) {
  return ($m_sr_BoxesRunTime$().i(key, this.cc) ? new $c_s_Some(this.cY) : ($m_sr_BoxesRunTime$().i(key, this.cd) ? new $c_s_Some(this.cZ) : ($m_sr_BoxesRunTime$().i(key, this.ce) ? new $c_s_Some(this.d0) : $m_s_None$())));
});
$p.e8 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().i(key, this.cc) ? this.cY : ($m_sr_BoxesRunTime$().i(key, this.cd) ? this.cZ : ($m_sr_BoxesRunTime$().i(key, this.ce) ? this.d0 : default$1.L())));
});
$p.e = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.h3 = (function() {
  return new $c_sci_Map$Map3$$anon$5(this);
});
$p.fM = (function(key, value) {
  return ($m_sr_BoxesRunTime$().i(key, this.cc) ? new $c_sci_Map$Map3(this.cc, value, this.cd, this.cZ, this.ce, this.d0) : ($m_sr_BoxesRunTime$().i(key, this.cd) ? new $c_sci_Map$Map3(this.cc, this.cY, this.cd, value, this.ce, this.d0) : ($m_sr_BoxesRunTime$().i(key, this.ce) ? new $c_sci_Map$Map3(this.cc, this.cY, this.cd, this.cZ, this.ce, value) : new $c_sci_Map$Map4(this.cc, this.cY, this.cd, this.cZ, this.ce, this.d0, key, value))));
});
$p.U = (function(f) {
  f.b(new $c_T2(this.cc, this.cY));
  f.b(new $c_T2(this.cd, this.cZ));
  f.b(new $c_T2(this.ce, this.d0));
});
$p.dx = (function(p) {
  return (((!(!p.b(new $c_T2(this.cc, this.cY)))) && (!(!p.b(new $c_T2(this.cd, this.cZ))))) && (!(!p.b(new $c_T2(this.ce, this.d0)))));
});
$p.u = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().di(this.cc, this.cY);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().di(this.cd, this.cZ);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().di(this.ce, this.d0);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().eL;
  h = $m_s_util_hashing_MurmurHash3$().j(h, a);
  h = $m_s_util_hashing_MurmurHash3$().j(h, b);
  h = $m_s_util_hashing_MurmurHash3$().ed(h, c);
  return $m_s_util_hashing_MurmurHash3$().H(h, 3);
});
$p.eU = (function(key, value) {
  return this.fM(key, value);
});
function $isArrayOf_sci_Map$Map3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cD)));
}
var $d_sci_Map$Map3 = new $TypeData().i($c_sci_Map$Map3, "scala.collection.immutable.Map$Map3", ({
  cD: 1,
  az: 1,
  au: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  ag: 1,
  ax: 1,
  j: 1,
  i: 1,
  aw: 1,
  d: 1,
  ai: 1,
  q: 1,
  aB: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.bU = null;
  this.cy = null;
  this.bV = null;
  this.cz = null;
  this.bW = null;
  this.cA = null;
  this.bX = null;
  this.cB = null;
  this.bU = key1;
  this.cy = value1;
  this.bV = key2;
  this.cz = value2;
  this.bW = key3;
  this.cA = value3;
  this.bX = key4;
  this.cB = value4;
}
$p = $c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
}
$h_sci_Map$Map4.prototype = $p;
$p.M = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.O = (function() {
  return 4;
});
$p.q = (function() {
  return 4;
});
$p.c = (function() {
  return false;
});
$p.b = (function(key) {
  if ($m_sr_BoxesRunTime$().i(key, this.bU)) {
    return this.cy;
  } else if ($m_sr_BoxesRunTime$().i(key, this.bV)) {
    return this.cz;
  } else if ($m_sr_BoxesRunTime$().i(key, this.bW)) {
    return this.cA;
  } else if ($m_sr_BoxesRunTime$().i(key, this.bX)) {
    return this.cB;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.al = (function(key) {
  return ((($m_sr_BoxesRunTime$().i(key, this.bU) || $m_sr_BoxesRunTime$().i(key, this.bV)) || $m_sr_BoxesRunTime$().i(key, this.bW)) || $m_sr_BoxesRunTime$().i(key, this.bX));
});
$p.gY = (function(key) {
  return ($m_sr_BoxesRunTime$().i(key, this.bU) ? new $c_s_Some(this.cy) : ($m_sr_BoxesRunTime$().i(key, this.bV) ? new $c_s_Some(this.cz) : ($m_sr_BoxesRunTime$().i(key, this.bW) ? new $c_s_Some(this.cA) : ($m_sr_BoxesRunTime$().i(key, this.bX) ? new $c_s_Some(this.cB) : $m_s_None$()))));
});
$p.e8 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().i(key, this.bU) ? this.cy : ($m_sr_BoxesRunTime$().i(key, this.bV) ? this.cz : ($m_sr_BoxesRunTime$().i(key, this.bW) ? this.cA : ($m_sr_BoxesRunTime$().i(key, this.bX) ? this.cB : default$1.L()))));
});
$p.e = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.h3 = (function() {
  return new $c_sci_Map$Map4$$anon$8(this);
});
$p.fM = (function(key, value) {
  return ($m_sr_BoxesRunTime$().i(key, this.bU) ? new $c_sci_Map$Map4(this.bU, value, this.bV, this.cz, this.bW, this.cA, this.bX, this.cB) : ($m_sr_BoxesRunTime$().i(key, this.bV) ? new $c_sci_Map$Map4(this.bU, this.cy, this.bV, value, this.bW, this.cA, this.bX, this.cB) : ($m_sr_BoxesRunTime$().i(key, this.bW) ? new $c_sci_Map$Map4(this.bU, this.cy, this.bV, this.cz, this.bW, value, this.bX, this.cB) : ($m_sr_BoxesRunTime$().i(key, this.bX) ? new $c_sci_Map$Map4(this.bU, this.cy, this.bV, this.cz, this.bW, this.cA, this.bX, value) : $m_sci_HashMap$().lo.hd(this.bU, this.cy).hd(this.bV, this.cz).hd(this.bW, this.cA).hd(this.bX, this.cB).hd(key, value)))));
});
$p.U = (function(f) {
  f.b(new $c_T2(this.bU, this.cy));
  f.b(new $c_T2(this.bV, this.cz));
  f.b(new $c_T2(this.bW, this.cA));
  f.b(new $c_T2(this.bX, this.cB));
});
$p.dx = (function(p) {
  return ((((!(!p.b(new $c_T2(this.bU, this.cy)))) && (!(!p.b(new $c_T2(this.bV, this.cz))))) && (!(!p.b(new $c_T2(this.bW, this.cA))))) && (!(!p.b(new $c_T2(this.bX, this.cB)))));
});
$p.tH = (function(builder) {
  return builder.fw(this.bU, this.cy).fw(this.bV, this.cz).fw(this.bW, this.cA).fw(this.bX, this.cB);
});
$p.u = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().di(this.bU, this.cy);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().di(this.bV, this.cz);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().di(this.bW, this.cA);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().di(this.bX, this.cB);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().eL;
  h = $m_s_util_hashing_MurmurHash3$().j(h, a);
  h = $m_s_util_hashing_MurmurHash3$().j(h, b);
  h = $m_s_util_hashing_MurmurHash3$().ed(h, c);
  return $m_s_util_hashing_MurmurHash3$().H(h, 4);
});
$p.eU = (function(key, value) {
  return this.fM(key, value);
});
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cF)));
}
var $d_sci_Map$Map4 = new $TypeData().i($c_sci_Map$Map4, "scala.collection.immutable.Map$Map4", ({
  cF: 1,
  az: 1,
  au: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  ag: 1,
  ax: 1,
  j: 1,
  i: 1,
  aw: 1,
  d: 1,
  ai: 1,
  q: 1,
  aB: 1,
  n: 1,
  a: 1
}));
function $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet($thiz, newRootNode) {
  return (($thiz.bS === newRootNode) ? $thiz : new $c_sci_HashSet(newRootNode));
}
/** @constructor */
function $c_sci_HashSet(rootNode) {
  this.bS = null;
  this.bS = rootNode;
}
$p = $c_sci_HashSet.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_HashSet;
/** @constructor */
function $h_sci_HashSet() {
}
$h_sci_HashSet.prototype = $p;
$p.M = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.aE = (function() {
  return $m_sci_HashSet$();
});
$p.q = (function() {
  return this.bS.bw;
});
$p.O = (function() {
  return this.bS.bw;
});
$p.c = (function() {
  return (this.bS.bw === 0);
});
$p.e = (function() {
  return (this.c() ? $m_sc_Iterator$().D : new $c_sci_SetIterator(this.bS));
});
$p.al = (function(element) {
  var elementUnimprovedHash = $m_sr_Statics$().R(element);
  var elementHash = $m_sc_Hashing$().bs(elementUnimprovedHash);
  return this.bS.il(element, elementUnimprovedHash, elementHash, 0);
});
$p.h1 = (function(element) {
  var elementUnimprovedHash = $m_sr_Statics$().R(element);
  var elementHash = $m_sc_Hashing$().bs(elementUnimprovedHash);
  return $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet(this, this.bS.sx(element, elementUnimprovedHash, elementHash, 0));
});
$p.n = (function() {
  return this.e().d();
});
$p.U = (function(f) {
  this.bS.U(f);
});
$p.mQ = (function(that) {
  return (this.c() || ((!that.c()) && ((that instanceof $c_sci_HashSet) ? this.bS.mR(that.bS, 0) : $f_sc_IterableOnceOps__forall__F1__Z(this, that))));
});
$p.k = (function(that) {
  if ((that instanceof $c_sci_HashSet)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bS;
      var x$2 = that.bS;
      return ((x === null) ? (x$2 === null) : x.k(x$2));
    }
  } else {
    return $f_sc_Set__equals__O__Z(this, that);
  }
});
$p.c6 = (function() {
  return "HashSet";
});
$p.u = (function() {
  var it = new $c_sci_SetHashIterator(this.bS);
  return $m_s_util_hashing_MurmurHash3$().iH(it, $m_s_util_hashing_MurmurHash3$().jq);
});
$p.dA = (function(elem) {
  return this.h1(elem);
});
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cx)));
}
var $d_sci_HashSet = new $TypeData().i($c_sci_HashSet, "scala.collection.immutable.HashSet", ({
  cx: 1,
  ah: 1,
  ab: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  a2: 1,
  ac: 1,
  i: 1,
  d: 1,
  aj: 1,
  q: 1,
  ak: 1,
  ij: 1,
  hi: 1,
  n: 1,
  K: 1,
  a: 1
}));
function $isArrayOf_sci_ListSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hM)));
}
/** @constructor */
function $c_scm_AbstractSet() {
}
$p = $c_scm_AbstractSet.prototype = new $h_sc_AbstractSet();
$p.constructor = $c_scm_AbstractSet;
/** @constructor */
function $h_scm_AbstractSet() {
}
$h_scm_AbstractSet.prototype = $p;
$p.aM = (function() {
  return this;
});
function $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State($thiz) {
  if ((!$thiz.lp)) {
    if ($thiz.jg) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
    }
    $thiz.jg = true;
    try {
      var res = $thiz.lq.L();
    } finally {
      $thiz.jg = false;
    }
    $thiz.bT = true;
    $thiz.lq = null;
    $thiz.lr = res;
    $thiz.lp = true;
  }
  return $thiz.lr;
}
function $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz, f) {
  $m_sci_LazyList$();
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => ($thiz.c() ? $m_sci_LazyList$State$Empty$() : ($m_sci_LazyList$(), new $c_sci_LazyList$State$Cons(f.b($thiz.B().n()), $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz.B().aN(), f)))))));
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.t = (("" + b.t) + start);
  if ((!$thiz.bT)) {
    b.t = (b.t + "<not computed>");
  } else if ((!$thiz.c())) {
    var obj = $thiz.B().n();
    b.t = (("" + b.t) + obj);
    var elem = null;
    elem = $thiz;
    var elem$1 = $thiz.B().aN();
    var elem$2 = null;
    elem$2 = elem$1;
    if (((elem !== elem$2) && ((!elem$2.bT) || (elem.B() !== elem$2.B())))) {
      elem = elem$2;
      if ((elem$2.bT && (!elem$2.c()))) {
        elem$2 = elem$2.B().aN();
        while ((((elem !== elem$2) && (elem$2.bT && (!elem$2.c()))) && (elem.B() !== elem$2.B()))) {
          b.t = (("" + b.t) + sep);
          var obj$1 = elem.B().n();
          b.t = (("" + b.t) + obj$1);
          elem = elem.B().aN();
          elem$2 = elem$2.B().aN();
          if ((elem$2.bT && (!elem$2.c()))) {
            elem$2 = elem$2.B().aN();
          }
        }
      }
    }
    if ((!(elem$2.bT && (!elem$2.c())))) {
      while ((elem !== elem$2)) {
        b.t = (("" + b.t) + sep);
        var obj$2 = elem.B().n();
        b.t = (("" + b.t) + obj$2);
        elem = elem.B().aN();
      }
      if ((!elem.bT)) {
        b.t = (("" + b.t) + sep);
        b.t = (b.t + "<not computed>");
      }
    } else {
      var runner = $thiz;
      var k = 0;
      while (true) {
        var a = runner;
        var b$1 = elem$2;
        if ((!((a === b$1) || (a.B() === b$1.B())))) {
          runner = runner.B().aN();
          elem$2 = elem$2.B().aN();
          k = ((1 + k) | 0);
        } else {
          break;
        }
      }
      var a$1 = elem;
      var b$2 = elem$2;
      if ((((a$1 === b$2) || (a$1.B() === b$2.B())) && (k > 0))) {
        b.t = (("" + b.t) + sep);
        var obj$3 = elem.B().n();
        b.t = (("" + b.t) + obj$3);
        elem = elem.B().aN();
      }
      while (true) {
        var a$2 = elem;
        var b$3 = elem$2;
        if ((!((a$2 === b$3) || (a$2.B() === b$3.B())))) {
          b.t = (("" + b.t) + sep);
          var obj$4 = elem.B().n();
          b.t = (("" + b.t) + obj$4);
          elem = elem.B().aN();
        } else {
          break;
        }
      }
      b.t = (("" + b.t) + sep);
      b.t = (b.t + "<cycle>");
    }
  }
  b.t = (("" + b.t) + end);
  return b;
}
/** @constructor */
function $c_sci_LazyList(lazyState) {
  this.lr = null;
  this.lq = null;
  this.bT = false;
  this.jg = false;
  this.lp = false;
  this.lq = lazyState;
  this.bT = false;
  this.jg = false;
}
$p = $c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
}
$h_sci_LazyList.prototype = $p;
$p.bm = (function() {
  return "LinearSeq";
});
$p.bP = (function() {
  return $f_sc_LinearSeqOps__headOption__s_Option(this);
});
$p.o = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$p.be = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.mm = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.x = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.jM = (function(p) {
  return $f_sc_LinearSeqOps__exists__F1__Z(this, p);
});
$p.fJ = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.fC = (function(p, from) {
  return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from);
});
$p.B = (function() {
  return ((!this.lp) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.lr);
});
$p.c = (function() {
  return (this.B() === $m_sci_LazyList$State$Empty$());
});
$p.q = (function() {
  return ((this.bT && (this.B() === $m_sci_LazyList$State$Empty$())) ? 0 : (-1));
});
$p.n = (function() {
  return this.B().n();
});
$p.rD = (function() {
  var these = this;
  var those = this;
  if ((!these.c())) {
    these = these.B().aN();
  }
  while ((those !== these)) {
    if (these.c()) {
      return this;
    }
    these = these.B().aN();
    if (these.c()) {
      return this;
    }
    these = these.B().aN();
    if ((these === those)) {
      return this;
    }
    those = those.B().aN();
  }
  return this;
});
$p.e = (function() {
  return ((this.bT && (this.B() === $m_sci_LazyList$State$Empty$())) ? $m_sc_Iterator$().D : new $c_sci_LazyList$LazyIterator(this));
});
$p.U = (function(f) {
  var _$this = this;
  while (true) {
    if ((!_$this.c())) {
      f.b(_$this.B().n());
      _$this = _$this.B().aN();
      continue;
    }
    break;
  }
});
$p.fy = (function(z, op) {
  var _$this = this;
  while (true) {
    if (_$this.c()) {
      return z;
    } else {
      var temp$_$this = _$this.B().aN();
      var temp$z = op.bd(z, _$this.B().n());
      _$this = temp$_$this;
      z = temp$z;
    }
  }
});
$p.c6 = (function() {
  return "LazyList";
});
$p.mu = (function(suffix) {
  $m_sci_LazyList$();
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    if (this.c()) {
      var x1 = suffix.L();
      return ((x1 instanceof $c_sci_LazyList) ? x1.B() : ((x1.q() === 0) ? $m_sci_LazyList$State$Empty$() : $m_sci_LazyList$().mL(x1.e())));
    } else {
      $m_sci_LazyList$();
      return new $c_sci_LazyList$State$Cons(this.B().n(), this.B().aN().mu(suffix));
    }
  })));
});
$p.tu = (function(suffix) {
  return ((this.bT && (this.B() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().jO(suffix) : this.mu(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => suffix))));
});
$p.tr = (function(elem) {
  return ((this.bT && (this.B() === $m_sci_LazyList$State$Empty$())) ? ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    $m_sci_LazyList$();
    return new $c_sci_LazyList$State$Cons(elem, $m_sci_LazyList$().f9);
  })))) : this.mu(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$$anon$20(elem)))));
});
$p.iC = (function(f) {
  if (this.c()) {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  } else {
    var reducedRes = this.B().n();
    var left = this.B().aN();
    while ((!left.c())) {
      reducedRes = f.bd(reducedRes, left.B().n());
      left = left.B().aN();
    }
    return reducedRes;
  }
});
$p.vl = (function(f) {
  return ((this.bT && (this.B() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().f9 : ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => (this.c() ? $m_sci_LazyList$State$Empty$() : ($m_sci_LazyList$(), new $c_sci_LazyList$State$Cons(f.b(this.B().n()), $p_sci_LazyList__mapImpl__F1__sci_LazyList(this.B().aN(), f)))))))));
});
$p.rC = (function(f) {
  return ((this.bT && (this.B() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().f9 : $m_sci_LazyList$().sj(this, f));
});
$p.uk = (function(n) {
  return ((n <= 0) ? this : ((this.bT && (this.B() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().f9 : $m_sci_LazyList$().wc(this, n)));
});
$p.eN = (function(sb, start, sep, end) {
  this.rD();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.bj, start, sep, end);
  return sb;
});
$p.v = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").t;
});
$p.b = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.cj = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.m4 = (function(n) {
  return this.uk(n);
});
$p.eP = (function(asIterable) {
  return this.rC(asIterable);
});
$p.br = (function(f) {
  return this.rC(f);
});
$p.M = (function(f) {
  return this.vl(f);
});
$p.T = (function(elem) {
  return this.tr(elem);
});
$p.dv = (function(suffix) {
  return this.tu(suffix);
});
$p.y = (function() {
  return this.B().aN();
});
$p.aE = (function() {
  return $m_sci_LazyList$();
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cy)));
}
var $d_sci_LazyList = new $TypeData().i($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  cy: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  aQ: 1,
  av: 1,
  aN: 1,
  aR: 1,
  a: 1
}));
/** @constructor */
function $c_sci_WrappedString(self) {
  this.bM = null;
  this.bM = self;
}
$p = $c_sci_WrappedString.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_WrappedString;
/** @constructor */
function $h_sci_WrappedString() {
}
$h_sci_WrappedString.prototype = $p;
$p.ij = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.bm = (function() {
  return "IndexedSeq";
});
$p.e = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_StringView(this.bM));
});
$p.M = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.n = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.be = (function(len) {
  var this$1 = this.bM;
  var x = this$1.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.bM.length;
});
$p.o = (function() {
  return this.bM.length;
});
$p.v = (function() {
  return this.bM;
});
$p.bZ = (function(xs, start, len) {
  if ((xs instanceof $ac_C)) {
    var this$1 = this.bM;
    var srcLen = this$1.length;
    var destLen = xs.a.length;
    var x = ((len < srcLen) ? len : srcLen);
    var y = ((destLen - start) | 0);
    var x$1 = ((x < y) ? x : y);
    var copied = ((x$1 > 0) ? x$1 : 0);
    $f_T__getChars__I__I__AC__I__V(this.bM, 0, copied, xs, start);
    return copied;
  } else {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
  }
});
$p.tt = (function(suffix) {
  return ((suffix instanceof $c_sci_WrappedString) ? new $c_sci_WrappedString((this.bM + suffix.bM)) : $f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix));
});
$p.fJ = (function(o) {
  return ((o instanceof $c_sci_WrappedString) ? (this.bM === o.bM) : $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o));
});
$p.c6 = (function() {
  return "WrappedString";
});
$p.ii = (function() {
  return 2147483647;
});
$p.k = (function(other) {
  return ((other instanceof $c_sci_WrappedString) ? (this.bM === other.bM) : $f_sc_Seq__equals__O__Z(this, other));
});
$p.aE = (function() {
  return $m_sci_IndexedSeq$();
});
$p.dv = (function(suffix) {
  return this.tt(suffix);
});
$p.gX = (function(coll) {
  return $m_sci_WrappedString$().rL(coll);
});
$p.fA = (function(coll) {
  return $m_sci_WrappedString$().rL(coll);
});
$p.b = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.bM.charCodeAt(i));
});
$p.x = (function(i) {
  return $bC(this.bM.charCodeAt(i));
});
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cT)));
}
var $d_sci_WrappedString = new $TypeData().i($c_sci_WrappedString, "scala.collection.immutable.WrappedString", ({
  cT: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  B: 1,
  t: 1,
  o: 1,
  E: 1,
  a: 1
}));
function $ct_sjsr_WrappedVarArgs__sjs_js_Array__($thiz, array) {
  $thiz.jp = array;
  return $thiz;
}
function $ct_sjsr_WrappedVarArgs__($thiz) {
  $ct_sjsr_WrappedVarArgs__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjsr_WrappedVarArgs() {
  this.jp = null;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.cR = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.T = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.M = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.eP = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.ij = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fJ = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.ii = (function() {
  return $m_sci_IndexedSeqDefaults$().qd;
});
$p.e = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.n = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.be = (function(len) {
  var x = this.o();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.o();
});
$p.k = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().sl(this);
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.gT = (function(suffix) {
  return $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix);
});
$p.O = (function() {
  return this.o();
});
$p.fC = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I($ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this)), p, from);
});
$p.mO = (function(otherSize) {
  var x = this.o();
  return ((x === otherSize) ? 0 : ((x < otherSize) ? (-1) : 1));
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.c5 = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.it = (function() {
  return $m_sjsr_WrappedVarArgs$().at();
});
$p.U = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.jM = (function(p) {
  return $f_sc_IterableOnceOps__exists__F1__Z(this, p);
});
$p.fy = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.iC = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op);
});
$p.bZ = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.eN = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fL = (function() {
  return $m_sci_Nil$().z(this);
});
$p.hb = (function() {
  return $m_sci_Vector$().bF(this);
});
$p.k5 = (function(evidence$2) {
  return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2);
});
$p.ea = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.o = (function() {
  return (this.jp.length | 0);
});
$p.x = (function(idx) {
  return this.jp[idx];
});
$p.c6 = (function() {
  return "WrappedVarArgs";
});
$p.gX = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().me(coll);
});
$p.cj = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.b = (function(v1) {
  return this.x((v1 | 0));
});
$p.aE = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.de)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  de: 1,
  B: 1,
  y: 1,
  q: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  z: 1,
  t: 1,
  o: 1,
  E: 1,
  C: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_HashMap(rootNode) {
  this.bg = null;
  this.bg = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.M = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.s1 = (function() {
  return $m_sci_HashMap$();
});
$p.q = (function() {
  return this.bg.bn;
});
$p.O = (function() {
  return this.bg.bn;
});
$p.c = (function() {
  return (this.bg.bn === 0);
});
$p.ms = (function() {
  return ((this.bg.bn === 0) ? $m_sci_Set$EmptySet$() : new $c_sci_HashMap$HashKeySet(this));
});
$p.e = (function() {
  return (this.c() ? $m_sc_Iterator$().D : new $c_sci_MapKeyValueTupleIterator(this.bg));
});
$p.h3 = (function() {
  return (this.c() ? $m_sc_Iterator$().D : new $c_sci_MapKeyIterator(this.bg));
});
$p.al = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().R(key);
  var keyHash = $m_sc_Hashing$().bs(keyUnimprovedHash);
  return this.bg.m2(key, keyUnimprovedHash, keyHash, 0);
});
$p.b = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().R(key);
  var keyHash = $m_sc_Hashing$().bs(keyUnimprovedHash);
  return this.bg.lS(key, keyUnimprovedHash, keyHash, 0);
});
$p.gY = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().R(key);
  var keyHash = $m_sc_Hashing$().bs(keyUnimprovedHash);
  return this.bg.jP(key, keyUnimprovedHash, keyHash, 0);
});
$p.e8 = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().R(key);
  var keyHash = $m_sc_Hashing$().bs(keyUnimprovedHash);
  return this.bg.mf(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.hd = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().R(key);
  var newRootNode = this.bg.mU(key, value, keyUnimprovedHash, $m_sc_Hashing$().bs(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.bg) ? this : new $c_sci_HashMap(newRootNode));
});
$p.U = (function(f) {
  this.bg.U(f);
});
$p.fz = (function(f) {
  this.bg.fz(f);
});
$p.k = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bg;
      var x$2 = that.bg;
      return ((x === null) ? (x$2 === null) : x.k(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.u = (function() {
  if (this.c()) {
    return $m_s_util_hashing_MurmurHash3$().lI;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.bg);
    return $m_s_util_hashing_MurmurHash3$().iH(hashIterator, $m_s_util_hashing_MurmurHash3$().eL);
  }
});
$p.c6 = (function() {
  return "HashMap";
});
$p.n = (function() {
  return this.e().d();
});
$p.eU = (function(key, value) {
  return this.hd(key, value);
});
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cv)));
}
var $d_sci_HashMap = new $TypeData().i($c_sci_HashMap, "scala.collection.immutable.HashMap", ({
  cv: 1,
  az: 1,
  au: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  ag: 1,
  ax: 1,
  j: 1,
  i: 1,
  aw: 1,
  d: 1,
  ai: 1,
  q: 1,
  aB: 1,
  ii: 1,
  hh: 1,
  n: 1,
  K: 1,
  a: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ik)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ip)));
}
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$p = $c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $p;
$p.b7 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
function $p_scm_HashSet__addElem__O__I__Z($thiz, elem, hash) {
  var idx = (hash & (((-1) + $thiz.bB.a.length) | 0));
  var x1 = $thiz.bB.a[idx];
  if ((x1 === null)) {
    $thiz.bB.a[idx] = new $c_scm_HashSet$Node(elem, hash, null);
  } else {
    var prev = null;
    var n = x1;
    while (((n !== null) && (n.e1 <= hash))) {
      if (((n.e1 === hash) && $m_sr_BoxesRunTime$().i(elem, n.gC))) {
        return false;
      }
      prev = n;
      n = n.bC;
    }
    if ((prev === null)) {
      $thiz.bB.a[idx] = new $c_scm_HashSet$Node(elem, hash, x1);
    } else {
      prev.bC = new $c_scm_HashSet$Node(elem, hash, prev.bC);
    }
  }
  $thiz.eI = ((1 + $thiz.eI) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.bB.a.length;
  $thiz.lF = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.eI === 0)) {
    $thiz.bB = new ($d_scm_HashSet$Node.r().C)(newlen);
  } else {
    $thiz.bB = $m_ju_Arrays$().ab($thiz.bB, newlen);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.bB.a[i];
        if ((old !== null)) {
          preLow.bC = null;
          preHigh.bC = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.bC;
            if (((n.e1 & oldlen) === 0)) {
              lastLow.bC = n;
              lastLow = n;
            } else {
              lastHigh.bC = n;
              lastHigh = n;
            }
            n = next;
          }
          lastLow.bC = null;
          if ((old !== preLow.bC)) {
            $thiz.bB.a[i] = preLow.bC;
          }
          if ((preHigh.bC !== null)) {
            $thiz.bB.a[((i + oldlen) | 0)] = preHigh.bC;
            lastHigh.bC = null;
          }
        }
        i = ((1 + i) | 0);
      }
      oldlen = (oldlen << 1);
    }
  }
}
function $p_scm_HashSet__tableSizeFor__I__I($thiz, capacity) {
  var x = (((-1) + capacity) | 0);
  var i = ((x > 4) ? x : 4);
  var x$1 = ((((-2147483648) >> (Math.clz32(i) | 0)) & i) << 1);
  return ((x$1 < 1073741824) ? x$1 : 1073741824);
}
function $p_scm_HashSet__newThreshold__I__I($thiz, size) {
  return $doubleToInt((size * $thiz.lE));
}
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.lE = loadFactor;
  $thiz.bB = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.lF = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.bB.a.length);
  $thiz.eI = 0;
  return $thiz;
}
function $ct_scm_HashSet__($thiz) {
  $ct_scm_HashSet__I__D__($thiz, 16, 0.75);
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet() {
  this.lE = 0.0;
  this.bB = null;
  this.lF = 0;
  this.eI = 0;
}
$p = $c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$p.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
}
$h_scm_HashSet.prototype = $p;
$p.M = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.O = (function() {
  return this.eI;
});
$p.k1 = (function(originalHash) {
  return (originalHash ^ ((originalHash >>> 16) | 0));
});
$p.al = (function(elem) {
  var hash = this.k1($m_sr_Statics$().R(elem));
  var x1 = this.bB.a[(hash & (((-1) + this.bB.a.length) | 0))];
  return (((x1 === null) ? null : x1.ux(elem, hash)) !== null);
});
$p.bt = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.lE)));
  if ((target > this.bB.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.jG = (function(elem) {
  if ((((1 + this.eI) | 0) >= this.lF)) {
    $p_scm_HashSet__growTable__I__V(this, (this.bB.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, this.k1($m_sr_Statics$().R(elem)));
});
$p.qZ = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if ((xs instanceof $c_sci_HashSet)) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((k$2$2, h$2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, k$2$2, this.k1((h$2$2 | 0)));
    }));
    xs.bS.ma(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.l()) {
      var next = iter.d();
      $p_scm_HashSet__addElem__O__I__Z(this, next.gC, next.e1);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.up();
    while (iter$2.l()) {
      var next$2 = iter$2.d();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.s0(), next$2.rR());
    }
    return this;
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs);
  }
});
$p.e = (function() {
  return new $c_scm_HashSet$$anon$1(this);
});
$p.aE = (function() {
  return $m_scm_HashSet$();
});
$p.q = (function() {
  return this.eI;
});
$p.c = (function() {
  return (this.eI === 0);
});
$p.c6 = (function() {
  return "HashSet";
});
$p.u = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.l()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().iH(hashIterator, $m_s_util_hashing_MurmurHash3$().jq);
});
$p.as = (function(elem) {
  this.jG(elem);
  return this;
});
$p.b7 = (function(elems) {
  return this.qZ(elems);
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d6)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  d6: 1,
  is: 1,
  ab: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  a2: 1,
  ac: 1,
  i: 1,
  d: 1,
  iS: 1,
  O: 1,
  iT: 1,
  N: 1,
  F: 1,
  L: 1,
  J: 1,
  I: 1,
  aT: 1,
  n: 1,
  a: 1
}));
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hL)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iO)));
}
function $p_sci_ArraySeq__appendedAllArraySeq__sci_ArraySeq__sci_ArraySeq($thiz, that) {
  if ($f_sc_SeqOps__isEmpty__Z($thiz)) {
    return that;
  } else if ($f_sc_SeqOps__isEmpty__Z(that)) {
    return $thiz;
  } else {
    var thisIsObj = ($thiz.bu() instanceof $ac_O);
    if ((thisIsObj !== (that.bu() instanceof $ac_O))) {
      return null;
    } else if (thisIsObj) {
      var ax = $thiz.bu();
      var ay = that.bu();
      var len = (($m_jl_reflect_Array$().aD(ax) + $m_jl_reflect_Array$().aD(ay)) | 0);
      var a = new $ac_O(len);
      var length = $m_jl_reflect_Array$().aD(ax);
      ax.r(0, a, 0, length);
      var destPos = $m_jl_reflect_Array$().aD(ax);
      var length$1 = $m_jl_reflect_Array$().aD(ay);
      ay.r(0, a, destPos, length$1);
      return $m_sci_ArraySeq$().eT(a);
    } else {
      var ax$2 = $thiz.bu();
      var ay$2 = that.bu();
      var len$2 = (($m_jl_reflect_Array$().aD(ax$2) + $m_jl_reflect_Array$().aD(ay$2)) | 0);
      var a$2 = $thiz.aS().c1(len$2);
      var length$2 = $m_jl_reflect_Array$().aD(ax$2);
      ax$2.r(0, a$2, 0, length$2);
      var destPos$1 = $m_jl_reflect_Array$().aD(ax$2);
      var length$3 = $m_jl_reflect_Array$().aD(ay$2);
      ay$2.r(0, a$2, destPos$1, length$3);
      return $m_sci_ArraySeq$().eT(a$2);
    }
  }
}
function $p_sci_ArraySeq__genericResult$1__sc_IterableOnce__sci_ArraySeq($thiz, suffix$1) {
  var k = suffix$1.q();
  if ((k === 0)) {
    return $thiz;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    capacity = 0;
    size = 0;
    jsElems = [];
    if ((k >= 0)) {
      $m_jl_reflect_Array$().aD($thiz.bu());
    }
    var xs$1 = $thiz.bu();
    var length = $m_jl_reflect_Array$().aD(xs$1);
    var i = 0;
    while ((i < length)) {
      var elem = $m_sr_ScalaRunTime$().e6(xs$1, i);
      var unboxedElem = ((elem === null) ? null : elem);
      jsElems.push(unboxedElem);
      i = ((1 + i) | 0);
    }
    var it = suffix$1.e();
    while (it.l()) {
      var elem$1 = it.d();
      var unboxedElem$1 = ((elem$1 === null) ? null : elem$1);
      jsElems.push(unboxedElem$1);
    }
    return $m_sci_ArraySeq$().eT(new $ac_O(jsElems));
  }
}
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.fA = (function(coll) {
  return $m_sci_ArraySeq$().mc(coll, this.aS());
});
$p.it = (function() {
  return $m_sci_ArraySeq$().jW(this.aS());
});
$p.cR = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.eP = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.ij = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fJ = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bm = (function() {
  return "IndexedSeq";
});
$p.n = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.be = (function(len) {
  var x = this.o();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.o();
});
$p.ea = (function() {
  return $m_sci_ArraySeq$().lm;
});
$p.vk = (function(f) {
  var a = new $ac_O(this.o());
  var i = 0;
  while ((i < a.a.length)) {
    a.a[i] = f.b(this.x(i));
    i = ((1 + i) | 0);
  }
  return $m_sci_ArraySeq$().eT(a);
});
$p.aW = (function(elem) {
  var $x_1 = $m_sci_ArraySeq$();
  var xs = this.bu();
  var newLength = ((1 + $m_jl_reflect_Array$().aD(xs)) | 0);
  if ($d_O.R($objectGetClass(xs).F.Q().F)) {
    var dest$1 = $m_ju_Arrays$().u8(xs, newLength, $d_O.r().l());
  } else {
    var dest = new $ac_O(newLength);
    $m_s_Array$().ci(xs, 0, dest, 0, $m_jl_reflect_Array$().aD(xs));
    var dest$1 = dest;
  }
  var x1 = $m_jl_reflect_Array$().aD(xs);
  dest$1.a[x1] = elem;
  return $x_1.eT(dest$1);
});
$p.ts = (function(suffix) {
  if ((suffix instanceof $c_sci_ArraySeq)) {
    var result = $p_sci_ArraySeq__appendedAllArraySeq__sci_ArraySeq__sci_ArraySeq(this, suffix);
    return ((result === null) ? $p_sci_ArraySeq__genericResult$1__sc_IterableOnce__sci_ArraySeq(this, suffix) : result);
  } else {
    return $p_sci_ArraySeq__genericResult$1__sc_IterableOnce__sci_ArraySeq(this, suffix);
  }
});
$p.fy = (function(z, f) {
  var array = this.bu();
  var b = z;
  var i = 0;
  while ((i < $m_jl_reflect_Array$().aD(array))) {
    var a = $m_sr_ScalaRunTime$().e6(array, i);
    b = f.bd(b, a);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.c6 = (function() {
  return "ArraySeq";
});
$p.bZ = (function(xs, start, len) {
  var srcLen = this.o();
  var destLen = $m_jl_reflect_Array$().aD(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().ci(this.bu(), 0, xs, start, copied);
  }
  return copied;
});
$p.ii = (function() {
  return 2147483647;
});
$p.gX = (function(coll) {
  return $m_sci_ArraySeq$().mc(coll, this.aS());
});
$p.dv = (function(suffix) {
  return this.ts(suffix);
});
$p.T = (function(elem) {
  return this.aW(elem);
});
$p.M = (function(f) {
  return this.vk(f);
});
$p.aE = (function() {
  return $m_sci_ArraySeq$().lm;
});
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.f = prefix1;
  return $thiz;
}
/** @constructor */
function $c_sci_Vector() {
  this.f = null;
}
$p = $c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
}
$h_sci_Vector.prototype = $p;
$p.cR = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.eP = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.ij = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fJ = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bm = (function() {
  return "IndexedSeq";
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.be = (function(len) {
  var x = this.o();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.o();
});
$p.ea = (function() {
  return $m_sci_Vector$();
});
$p.o = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.h : this.f.a.length);
});
$p.e = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().qp : new $c_sci_NewVectorIterator(this, this.o(), this.dj()));
});
$p.jI = (function(suffix) {
  var k = suffix.q();
  return ((k === 0) ? this : ((k < 0) ? $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix) : this.ch(suffix, k)));
});
$p.ch = (function(suffix, k) {
  if ((k < ((4 + this.dj()) | 0))) {
    var v = new $c_sr_ObjectRef(this);
    if ($is_sci_Iterable(suffix)) {
      suffix.U(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => {
        v.K = v.K.bD(x$2$2);
      })));
    } else {
      var this$2 = suffix.e();
      while (this$2.l()) {
        var x0 = this$2.d();
        v.K = v.K.bD(x0);
      }
    }
    return v.K;
  } else if (((this.o() < ((k >>> 5) | 0)) && (suffix instanceof $c_sci_Vector))) {
    var v$2 = suffix;
    var ri = new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(new $c_sc_IndexedSeqView$Id(this));
    while ((ri.bL > 0)) {
      v$2 = v$2.fI(ri.d());
    }
    return v$2;
  } else {
    return (((this.o() < (((-64) + k) | 0)) && (suffix instanceof $c_sci_Vector)) ? new $c_sci_VectorBuilder().tp(this.o(), suffix).gK(this).gK(suffix).iD() : new $c_sci_VectorBuilder().rU(this).gK(suffix).iD());
  }
});
$p.c6 = (function() {
  return "Vector";
});
$p.bZ = (function(xs, start, len) {
  return this.e().bZ(xs, start, len);
});
$p.hb = (function() {
  return this;
});
$p.ii = (function() {
  return $m_sci_Vector$().qo;
});
$p.bk = (function(index) {
  return $m_scg_CommonErrors$().iq(index, (((-1) + this.o()) | 0));
});
$p.n = (function() {
  if ((this.f.a.length === 0)) {
    throw new $c_ju_NoSuchElementException("empty.head");
  } else {
    return this.f.a[0];
  }
});
$p.U = (function(f) {
  var c = this.dj();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    $x_1.m9((((-1) + ((((1 + c$1) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0)) | 0), this.dB(i), f);
    i = ((1 + i) | 0);
  }
});
$p.dv = (function(suffix) {
  return this.jI(suffix);
});
$p.aE = (function() {
  return $m_sci_Vector$();
});
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
/** @constructor */
function $c_scm_ArraySeq() {
}
$p = $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $p;
$p.cR = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.T = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.dv = (function(suffix) {
  return $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix);
});
$p.M = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.bm = (function() {
  return "IndexedSeq";
});
$p.n = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.be = (function(len) {
  var x = this.o();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.o();
});
$p.ea = (function() {
  return $m_scm_ArraySeq$().lD;
});
$p.rM = (function(coll) {
  var evidence$1 = this.aS();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.bl();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.q();
  var it = coll.e();
  while (it.l()) {
    var elem = it.d();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.F.z : elem));
    jsElems.push(unboxedElem);
  }
  var $x_1 = $m_scm_ArraySeq$();
  var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
  return $x_1.mv(elemRuntimeClass.F.r().w(jsElems));
});
$p.it = (function() {
  return $m_scm_ArraySeq$().jW(this.aS());
});
$p.c6 = (function() {
  return "ArraySeq";
});
$p.bZ = (function(xs, start, len) {
  var srcLen = this.o();
  var destLen = $m_jl_reflect_Array$().aD(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().ci(this.cQ(), 0, xs, start, copied);
  }
  return copied;
});
$p.k = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().aD(this.cQ()) !== $m_jl_reflect_Array$().aD(other.cQ()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.gX = (function(coll) {
  return this.rM(coll);
});
$p.fA = (function(coll) {
  return this.rM(coll);
});
$p.aE = (function() {
  return $m_scm_ArraySeq$().lD;
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.dH = null;
  this.dH = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.o = (function() {
  return this.dH.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rh(this.dH, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().rA(this.dH, that.dH) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.dH);
});
$p.aW = (function(elem) {
  if (((typeof elem) === "boolean")) {
    var x2 = (!(!elem));
    var xs = this.dH;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_Z.R($objectGetClass(xs).F.Q().F)) {
      var dest$1 = this$3.eO(xs, newLength);
    } else {
      var dest = new $ac_Z(newLength);
      $m_s_Array$().ci(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().d5(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofBoolean(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aW.call(this, elem);
  }
});
$p.ih = (function(i) {
  return this.dH.a[i];
});
$p.T = (function(elem) {
  return this.aW(elem);
});
$p.b = (function(v1) {
  return this.ih((v1 | 0));
});
$p.x = (function(i) {
  return this.ih(i);
});
$p.aS = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.bu = (function() {
  return this.dH;
});
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ch)));
}
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  ch: 1,
  a3: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  B: 1,
  t: 1,
  o: 1,
  E: 1,
  C: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.dI = null;
  this.dI = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.o = (function() {
  return this.dI.a.length;
});
$p.i8 = (function(i) {
  return this.dI.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.r9(this.dI, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().ru(this.dI, that.dI) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.dI);
});
$p.aW = (function(elem) {
  if ($isByte(elem)) {
    var x2 = (elem | 0);
    var xs = this.dI;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_B.R($objectGetClass(xs).F.Q().F)) {
      var dest$1 = this$3.eO(xs, newLength);
    } else {
      var dest = new $ac_B(newLength);
      $m_s_Array$().ci(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().d5(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofByte(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aW.call(this, elem);
  }
});
$p.T = (function(elem) {
  return this.aW(elem);
});
$p.b = (function(v1) {
  return this.i8((v1 | 0));
});
$p.x = (function(i) {
  return this.i8(i);
});
$p.aS = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.bu = (function() {
  return this.dI;
});
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ci)));
}
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  ci: 1,
  a3: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  B: 1,
  t: 1,
  o: 1,
  E: 1,
  C: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.dl = null;
  this.dl = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.o = (function() {
  return this.dl.a.length;
});
$p.i9 = (function(i) {
  return this.dl.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.ra(this.dl, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().rv(this.dl, that.dl) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.dl);
});
$p.aW = (function(elem) {
  if ((elem instanceof $Char)) {
    var x2 = $uC(elem);
    var xs = this.dl;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_C.R($objectGetClass(xs).F.Q().F)) {
      var dest$1 = this$3.eO(xs, newLength);
    } else {
      var dest = new $ac_C(newLength);
      $m_s_Array$().ci(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().d5(dest$1, xs.a.length, $bC(x2));
    return new $c_sci_ArraySeq$ofChar(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aW.call(this, elem);
  }
});
$p.eN = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.dl).eN(sb, start, sep, end);
});
$p.T = (function(elem) {
  return this.aW(elem);
});
$p.b = (function(v1) {
  return $bC(this.i9((v1 | 0)));
});
$p.x = (function(i) {
  return $bC(this.i9(i));
});
$p.aS = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.bu = (function() {
  return this.dl;
});
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cj)));
}
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  cj: 1,
  a3: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  B: 1,
  t: 1,
  o: 1,
  E: 1,
  C: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.dJ = null;
  this.dJ = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.o = (function() {
  return this.dJ.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rb(this.dJ, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofDouble) ? $m_ju_Arrays$().rw(this.dJ, that.dJ) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.dJ);
});
$p.aW = (function(elem) {
  if (((typeof elem) === "number")) {
    var x2 = (+elem);
    var xs = this.dJ;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_D.R($objectGetClass(xs).F.Q().F)) {
      var dest$1 = this$3.eO(xs, newLength);
    } else {
      var dest = new $ac_D(newLength);
      $m_s_Array$().ci(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().d5(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofDouble(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aW.call(this, elem);
  }
});
$p.ib = (function(i) {
  return this.dJ.a[i];
});
$p.T = (function(elem) {
  return this.aW(elem);
});
$p.b = (function(v1) {
  return this.ib((v1 | 0));
});
$p.x = (function(i) {
  return this.ib(i);
});
$p.aS = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.bu = (function() {
  return this.dJ;
});
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ck)));
}
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  ck: 1,
  a3: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  B: 1,
  t: 1,
  o: 1,
  E: 1,
  C: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.dK = null;
  this.dK = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.o = (function() {
  return this.dK.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rc(this.dK, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofFloat) ? $m_ju_Arrays$().rx(this.dK, that.dK) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.dK);
});
$p.aW = (function(elem) {
  if ($isFloat(elem)) {
    var x2 = Math.fround(elem);
    var xs = this.dK;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_F.R($objectGetClass(xs).F.Q().F)) {
      var dest$1 = this$3.eO(xs, newLength);
    } else {
      var dest = new $ac_F(newLength);
      $m_s_Array$().ci(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().d5(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofFloat(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aW.call(this, elem);
  }
});
$p.ic = (function(i) {
  return this.dK.a[i];
});
$p.T = (function(elem) {
  return this.aW(elem);
});
$p.b = (function(v1) {
  return this.ic((v1 | 0));
});
$p.x = (function(i) {
  return this.ic(i);
});
$p.aS = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.bu = (function() {
  return this.dK;
});
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cl)));
}
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  cl: 1,
  a3: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  B: 1,
  t: 1,
  o: 1,
  E: 1,
  C: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.dL = null;
  this.dL = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
$p.o = (function() {
  return this.dL.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rd(this.dL, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().jL(this.dL, that.dL) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.dL);
});
$p.aW = (function(elem) {
  if ($isInt(elem)) {
    var x2 = (elem | 0);
    var xs = this.dL;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_I.R($objectGetClass(xs).F.Q().F)) {
      var dest$1 = this$3.eO(xs, newLength);
    } else {
      var dest = new $ac_I(newLength);
      $m_s_Array$().ci(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().d5(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofInt(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aW.call(this, elem);
  }
});
$p.id = (function(i) {
  return this.dL.a[i];
});
$p.T = (function(elem) {
  return this.aW(elem);
});
$p.b = (function(v1) {
  return this.id((v1 | 0));
});
$p.x = (function(i) {
  return this.id(i);
});
$p.aS = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.bu = (function() {
  return this.dL;
});
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cm)));
}
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  cm: 1,
  a3: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  B: 1,
  t: 1,
  o: 1,
  E: 1,
  C: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.dM = null;
  this.dM = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.o = (function() {
  return this.dM.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.re(this.dM, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().ry(this.dM, that.dM) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.dM);
});
$p.aW = (function(elem) {
  if ((elem instanceof $c_RTLong)) {
    var t = $uJ(elem);
    var lo = t.s;
    var hi = t.w;
    var xs = this.dM;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_J.R($objectGetClass(xs).F.Q().F)) {
      var dest$1 = this$3.eO(xs, newLength);
    } else {
      var dest = new $ac_J(newLength);
      $m_s_Array$().ci(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().d5(dest$1, xs.a.length, new $c_RTLong(lo, hi));
    return new $c_sci_ArraySeq$ofLong(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aW.call(this, elem);
  }
});
$p.ie = (function(i) {
  return this.dM.a[i];
});
$p.T = (function(elem) {
  return this.aW(elem);
});
$p.b = (function(v1) {
  return this.ie((v1 | 0));
});
$p.x = (function(i) {
  return this.ie(i);
});
$p.aS = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.bu = (function() {
  return this.dM;
});
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cn)));
}
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  cn: 1,
  a3: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  B: 1,
  t: 1,
  o: 1,
  E: 1,
  C: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.dm = null;
  this.dm = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.aS = (function() {
  return $m_s_reflect_ClassTag$().r5($objectGetClass(this.dm).F.Q());
});
$p.o = (function() {
  return this.dm.a.length;
});
$p.x = (function(i) {
  return this.dm.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.r8(this.dm, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().rB(this.dm, that.dm) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.dm);
});
$p.b = (function(v1) {
  return this.x((v1 | 0));
});
$p.bu = (function() {
  return this.dm;
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.co)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  co: 1,
  a3: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  B: 1,
  t: 1,
  o: 1,
  E: 1,
  C: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.dN = null;
  this.dN = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.o = (function() {
  return this.dN.a.length;
});
$p.ia = (function(i) {
  return this.dN.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rf(this.dN, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().rz(this.dN, that.dN) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.dN);
});
$p.aW = (function(elem) {
  if ($isShort(elem)) {
    var x2 = (elem | 0);
    var xs = this.dN;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_S.R($objectGetClass(xs).F.Q().F)) {
      var dest$1 = this$3.eO(xs, newLength);
    } else {
      var dest = new $ac_S(newLength);
      $m_s_Array$().ci(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().d5(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofShort(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aW.call(this, elem);
  }
});
$p.T = (function(elem) {
  return this.aW(elem);
});
$p.b = (function(v1) {
  return this.ia((v1 | 0));
});
$p.x = (function(i) {
  return this.ia(i);
});
$p.aS = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.bu = (function() {
  return this.dN;
});
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cp)));
}
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  cp: 1,
  a3: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  B: 1,
  t: 1,
  o: 1,
  E: 1,
  C: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.f7 = null;
  this.f7 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.o = (function() {
  return this.f7.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rg(this.f7, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.f7.a.length === that.f7.a.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.f7);
});
$p.ig = (function(i) {
});
$p.b = (function(v1) {
  this.ig((v1 | 0));
});
$p.x = (function(i) {
  this.ig(i);
});
$p.aS = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.bu = (function() {
  return this.f7;
});
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cq)));
}
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  cq: 1,
  a3: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  B: 1,
  t: 1,
  o: 1,
  E: 1,
  C: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.c() ? 0 : 1);
    } else if (xs.c()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = xs.y();
      i = temp$i;
      xs = temp$xs;
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else {
      var aEmpty = a.c();
      var bEmpty = b.c();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().i(a.n(), b.n()))) {
        var temp$a = a.y();
        var temp$b = b.y();
        a = temp$a;
        b = temp$b;
      } else {
        return (aEmpty && bEmpty);
      }
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.cR = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.e = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.T = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.eP = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.bm = (function() {
  return "LinearSeq";
});
$p.mm = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.x = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.fy = (function(z, op) {
  return $f_sc_LinearSeqOps__foldLeft__O__F2__O(this, z, op);
});
$p.fJ = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.fC = (function(p, from) {
  return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from);
});
$p.ea = (function() {
  return $m_sci_List$();
});
$p.qT = (function(prefix) {
  if (this.c()) {
    return prefix;
  } else if (prefix.c()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.n(), this);
    var curr = result;
    var that = prefix.y();
    while ((!that.c())) {
      var temp = new $c_sci_$colon$colon(that.n(), this);
      curr.ao = temp;
      curr = temp;
      that = that.y();
    }
    return result;
  }
});
$p.c = (function() {
  return (this === $m_sci_Nil$());
});
$p.z = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.qT(prefix);
  }
  if ((prefix.q() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.c()) {
      return prefix.fL();
    }
  }
  var iter = prefix.e();
  if (iter.l()) {
    var result = new $c_sci_$colon$colon(iter.d(), this);
    var curr = result;
    while (iter.l()) {
      var temp = new $c_sci_$colon$colon(iter.d(), this);
      curr.ao = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.lR = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.qT(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.vm = (function(f) {
  if ((this === $m_sci_Nil$())) {
    return $m_sci_Nil$();
  } else {
    var h = new $c_sci_$colon$colon(f.b(this.n()), $m_sci_Nil$());
    var t = h;
    var rest = this.y();
    while ((rest !== $m_sci_Nil$())) {
      var nx = new $c_sci_$colon$colon(f.b(rest.n()), $m_sci_Nil$());
      t.ao = nx;
      t = nx;
      rest = rest.y();
    }
    return h;
  }
});
$p.uy = (function(f) {
  var rest = this;
  var h = null;
  var t = null;
  while ((rest !== $m_sci_Nil$())) {
    var it = f.b(rest.n()).e();
    while (it.l()) {
      var nx = new $c_sci_$colon$colon(it.d(), $m_sci_Nil$());
      if ((t === null)) {
        h = nx;
      } else {
        t.ao = nx;
      }
      t = nx;
    }
    rest = rest.y();
  }
  return ((h === null) ? $m_sci_Nil$() : h);
});
$p.U = (function(f) {
  var these = this;
  while ((!these.c())) {
    f.b(these.n());
    these = these.y();
  }
});
$p.o = (function() {
  var these = this;
  var len = 0;
  while ((!these.c())) {
    len = ((1 + len) | 0);
    these = these.y();
  }
  return len;
});
$p.be = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
});
$p.jM = (function(p) {
  var these = this;
  while ((!these.c())) {
    if ((!(!p.b(these.n())))) {
      return true;
    }
    these = these.y();
  }
  return false;
});
$p.al = (function(elem) {
  var these = this;
  while ((!these.c())) {
    if ($m_sr_BoxesRunTime$().i(these.n(), elem)) {
      return true;
    }
    these = these.y();
  }
  return false;
});
$p.c6 = (function() {
  return "List";
});
$p.fL = (function() {
  return this;
});
$p.k = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.b = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.cj = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.m4 = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.br = (function(f) {
  return this.uy(f);
});
$p.M = (function(f) {
  return this.vm(f);
});
$p.dv = (function(suffix) {
  return this.lR(suffix);
});
$p.aE = (function() {
  return $m_sci_List$();
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aS)));
}
var $d_sci_List = new $TypeData().i(0, "scala.collection.immutable.List", ({
  aS: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  aQ: 1,
  av: 1,
  aN: 1,
  aR: 1,
  be: 1,
  u: 1,
  n: 1,
  C: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_sci_VectorImpl() {
  this.f = null;
}
$p = $c_sci_VectorImpl.prototype = new $h_sci_Vector();
$p.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
}
$h_sci_VectorImpl.prototype = $p;
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.ey = null;
  this.ey = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.o = (function() {
  return this.ey.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rh(this.ey, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().rA(this.ey, that.ey) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.ey);
});
$p.ih = (function(index) {
  return this.ey.a[index];
});
$p.b = (function(v1) {
  return this.ih((v1 | 0));
});
$p.x = (function(i) {
  return this.ih(i);
});
$p.aS = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.cQ = (function() {
  return this.ey;
});
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cV)));
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  cV: 1,
  a4: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  F: 1,
  V: 1,
  t: 1,
  o: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.ez = null;
  this.ez = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.o = (function() {
  return this.ez.a.length;
});
$p.i8 = (function(index) {
  return this.ez.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.r9(this.ez, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().ru(this.ez, that.ez) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.ez);
});
$p.b = (function(v1) {
  return this.i8((v1 | 0));
});
$p.x = (function(i) {
  return this.i8(i);
});
$p.aS = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.cQ = (function() {
  return this.ez;
});
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cW)));
}
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  cW: 1,
  a4: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  F: 1,
  V: 1,
  t: 1,
  o: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.cC = null;
  this.cC = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.o = (function() {
  return this.cC.a.length;
});
$p.i9 = (function(index) {
  return this.cC.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.ra(this.cC, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().rv(this.cC, that.cC) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.cC);
});
$p.eN = (function(sb, start, sep, end) {
  var jsb = sb.bj;
  if ((start.length !== 0)) {
    jsb.t = (("" + jsb.t) + start);
  }
  var len = this.cC.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.r2(this.cC);
    } else {
      jsb.o();
      var c = this.cC.a[0];
      var str = ("" + $cToS(c));
      jsb.t = (jsb.t + str);
      var i = 1;
      while ((i < len)) {
        jsb.t = (("" + jsb.t) + sep);
        var c$1 = this.cC.a[i];
        var str$1 = ("" + $cToS(c$1));
        jsb.t = (jsb.t + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  if ((end.length !== 0)) {
    jsb.t = (("" + jsb.t) + end);
  }
  return sb;
});
$p.b = (function(v1) {
  return $bC(this.i9((v1 | 0)));
});
$p.x = (function(i) {
  return $bC(this.i9(i));
});
$p.aS = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.cQ = (function() {
  return this.cC;
});
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cX)));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  cX: 1,
  a4: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  F: 1,
  V: 1,
  t: 1,
  o: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.eA = null;
  this.eA = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.o = (function() {
  return this.eA.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rb(this.eA, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofDouble) ? $m_ju_Arrays$().rw(this.eA, that.eA) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.eA);
});
$p.ib = (function(index) {
  return this.eA.a[index];
});
$p.b = (function(v1) {
  return this.ib((v1 | 0));
});
$p.x = (function(i) {
  return this.ib(i);
});
$p.aS = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.cQ = (function() {
  return this.eA;
});
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cY)));
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  cY: 1,
  a4: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  F: 1,
  V: 1,
  t: 1,
  o: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.eB = null;
  this.eB = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.o = (function() {
  return this.eB.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rc(this.eB, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofFloat) ? $m_ju_Arrays$().rx(this.eB, that.eB) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.eB);
});
$p.ic = (function(index) {
  return this.eB.a[index];
});
$p.b = (function(v1) {
  return this.ic((v1 | 0));
});
$p.x = (function(i) {
  return this.ic(i);
});
$p.aS = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.cQ = (function() {
  return this.eB;
});
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cZ)));
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  cZ: 1,
  a4: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  F: 1,
  V: 1,
  t: 1,
  o: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.eC = null;
  this.eC = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.o = (function() {
  return this.eC.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rd(this.eC, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().jL(this.eC, that.eC) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.eC);
});
$p.id = (function(index) {
  return this.eC.a[index];
});
$p.b = (function(v1) {
  return this.id((v1 | 0));
});
$p.x = (function(i) {
  return this.id(i);
});
$p.aS = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.cQ = (function() {
  return this.eC;
});
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d0)));
}
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
  d0: 1,
  a4: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  F: 1,
  V: 1,
  t: 1,
  o: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.eD = null;
  this.eD = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.o = (function() {
  return this.eD.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.re(this.eD, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().ry(this.eD, that.eD) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.eD);
});
$p.ie = (function(index) {
  return this.eD.a[index];
});
$p.b = (function(v1) {
  return this.ie((v1 | 0));
});
$p.x = (function(i) {
  return this.ie(i);
});
$p.aS = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.cQ = (function() {
  return this.eD;
});
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d1)));
}
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
  d1: 1,
  a4: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  F: 1,
  V: 1,
  t: 1,
  o: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.dZ = null;
  this.dZ = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.aS = (function() {
  return $m_s_reflect_ClassTag$().r5($objectGetClass(this.dZ).F.Q());
});
$p.o = (function() {
  return this.dZ.a.length;
});
$p.x = (function(index) {
  return this.dZ.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.r8(this.dZ, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().rB(this.dZ, that.dZ) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.e = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.dZ);
});
$p.b = (function(v1) {
  return this.x((v1 | 0));
});
$p.cQ = (function() {
  return this.dZ;
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d2)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  d2: 1,
  a4: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  F: 1,
  V: 1,
  t: 1,
  o: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.eE = null;
  this.eE = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.o = (function() {
  return this.eE.a.length;
});
$p.ia = (function(index) {
  return this.eE.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rf(this.eE, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().rz(this.eE, that.eE) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.eE);
});
$p.b = (function(v1) {
  return this.ia((v1 | 0));
});
$p.x = (function(i) {
  return this.ia(i);
});
$p.aS = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.cQ = (function() {
  return this.eE;
});
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d3)));
}
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  d3: 1,
  a4: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  F: 1,
  V: 1,
  t: 1,
  o: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.fo = null;
  this.fo = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.o = (function() {
  return this.fo.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rg(this.fo, this$1.b5);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.fo.a.length === that.fo.a.length) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.fo);
});
$p.ig = (function(index) {
});
$p.b = (function(v1) {
  this.ig((v1 | 0));
});
$p.x = (function(i) {
  this.ig(i);
});
$p.aS = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.cQ = (function() {
  return this.fo;
});
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d4)));
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  d4: 1,
  a4: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  F: 1,
  V: 1,
  t: 1,
  o: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iE)));
}
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.g = suffix1;
  $thiz.h = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.f = null;
  this.g = null;
  this.h = 0;
}
$p = $c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
}
$h_sci_BigVector.prototype = $p;
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aq)));
}
/** @constructor */
function $c_sci_Vector1(_data1) {
  this.f = null;
  $ct_sci_Vector__AO__(this, _data1);
}
$p = $c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
}
$h_sci_Vector1.prototype = $p;
$p.x = (function(index) {
  if (((index >= 0) && (index < this.f.a.length))) {
    return this.f.a[index];
  } else {
    throw this.bk(index);
  }
});
$p.eh = (function(index, elem) {
  if (((index >= 0) && (index < this.f.a.length))) {
    var a1 = this.f;
    var a1c = a1.m();
    a1c.a[index] = elem;
    return new $c_sci_Vector1(a1c);
  } else {
    throw this.bk(index);
  }
});
$p.bD = (function(elem) {
  if ((this.f.a.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().gU(this.f, elem));
  } else {
    var $x_2 = this.f;
    var $x_1 = $m_sci_VectorStatics$().ar;
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.fI = (function(elem) {
  var len1 = this.f.a.length;
  if ((len1 < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().gV(elem, this.f));
  } else {
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2(a, 1, $m_sci_VectorStatics$().ar, this.f, ((1 + len1) | 0));
  }
});
$p.dg = (function(f) {
  return new $c_sci_Vector1($m_sci_VectorStatics$().cU(this.f, f));
});
$p.dj = (function() {
  return 1;
});
$p.dB = (function(idx) {
  return this.f;
});
$p.ch = (function(suffix, k) {
  var data1b = $m_sci_VectorStatics$().gL(this.f, suffix);
  return ((data1b !== null) ? new $c_sci_Vector1(data1b) : $c_sci_Vector.prototype.ch.call(this, suffix, k));
});
$p.M = (function(f) {
  return this.dg(f);
});
$p.T = (function(elem) {
  return this.bD(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.f.a.length))) {
    return this.f.a[index];
  } else {
    throw this.bk(index);
  }
});
function $isArrayOf_sci_Vector1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cN)));
}
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  cN: 1,
  ar: 1,
  al: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  B: 1,
  t: 1,
  o: 1,
  E: 1,
  C: 1,
  u: 1,
  n: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.gq = null;
  this.ao = null;
  this.gq = head;
  this.ao = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.n = (function() {
  return this.gq;
});
$p.aL = (function() {
  return "::";
});
$p.aJ = (function() {
  return 2;
});
$p.aK = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.gq;
      break;
    }
    case 1: {
      return this.ao;
      break;
    }
    default: {
      return $m_sr_Statics$().e9(x$1);
    }
  }
});
$p.aX = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.y = (function() {
  return this.ao;
});
$p.bP = (function() {
  return new $c_s_Some(this.gq);
});
function $isArrayOf_sci_$colon$colon(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cg)));
}
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  cg: 1,
  aS: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  aQ: 1,
  av: 1,
  aN: 1,
  aR: 1,
  be: 1,
  u: 1,
  n: 1,
  C: 1,
  K: 1,
  a: 1,
  x: 1
}));
/** @constructor */
function $c_sci_Nil$() {
}
$p = $c_sci_Nil$.prototype = new $h_sci_List();
$p.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $p;
$p.mj = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.wu = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.q = (function() {
  return 0;
});
$p.e = (function() {
  return $m_sc_Iterator$().D;
});
$p.aL = (function() {
  return "Nil";
});
$p.aJ = (function() {
  return 0;
});
$p.aK = (function(x$1) {
  return $m_sr_Statics$().e9(x$1);
});
$p.aX = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.y = (function() {
  this.wu();
});
$p.bP = (function() {
  return $m_s_None$();
});
$p.n = (function() {
  this.mj();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  i1: 1,
  aS: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  aQ: 1,
  av: 1,
  aN: 1,
  aR: 1,
  be: 1,
  u: 1,
  n: 1,
  C: 1,
  K: 1,
  a: 1,
  x: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
/** @constructor */
function $c_sci_Vector0$() {
  this.f = null;
  this.g = null;
  this.h = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().lx, $m_sci_VectorStatics$().lx, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.r4 = (function(index) {
  throw this.bk(index);
});
$p.eh = (function(index, elem) {
  throw this.bk(index);
});
$p.bD = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.fI = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.dj = (function() {
  return 0;
});
$p.dB = (function(idx) {
  return null;
});
$p.k = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)));
});
$p.ch = (function(suffix, k) {
  return $m_sci_Vector$().bF(suffix);
});
$p.bk = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.M = (function(f) {
  return this;
});
$p.T = (function(elem) {
  return this.bD(elem);
});
$p.b = (function(v1) {
  this.r4((v1 | 0));
});
$p.x = (function(i) {
  this.r4(i);
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  im: 1,
  aq: 1,
  ar: 1,
  al: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  B: 1,
  t: 1,
  o: 1,
  E: 1,
  C: 1,
  u: 1,
  n: 1,
  K: 1,
  a: 1
}));
var $n_sci_Vector0$;
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$();
  }
  return $n_sci_Vector0$;
}
/** @constructor */
function $c_sci_Vector2(_prefix1, len1, data2, _suffix1, _length0) {
  this.f = null;
  this.g = null;
  this.h = 0;
  this.bz = 0;
  this.bh = null;
  this.bz = len1;
  this.bh = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector2.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $p;
$p.x = (function(index) {
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.bz) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bh.a.length) ? this.bh.a[i2].a[i1] : this.g.a[(31 & io)]);
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bk(index);
  }
});
$p.eh = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.bz)) {
      var io = ((index - this.bz) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.bh.a.length)) {
        var a2 = this.bh;
        var a2c = a2.m();
        var a1 = a2c.a[i2];
        var a1c = a1.m();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        return new $c_sci_Vector2(this.f, this.bz, a2c, this.g, this.h);
      } else {
        var a1$1 = this.g;
        var a1c$1 = a1$1.m();
        a1c$1.a[i1] = elem;
        return new $c_sci_Vector2(this.f, this.bz, this.bh, a1c$1, this.h);
      }
    } else {
      var a1$2 = this.f;
      var a1c$2 = a1$2.m();
      a1c$2.a[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.bz, this.bh, this.g, this.h);
    }
  } else {
    throw this.bk(index);
  }
});
$p.bD = (function(elem) {
  if ((this.g.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().gU(this.g, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector2(this.f, this.bz, this.bh, x$1, x$2);
  } else if ((this.bh.a.length < 30)) {
    var x$6 = $m_sci_VectorStatics$().N(this.bh, this.g);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$8 = ((1 + this.h) | 0);
    return new $c_sci_Vector2(this.f, this.bz, x$6, a, x$8);
  } else {
    var $x_5 = this.f;
    var $x_4 = this.bz;
    var $x_3 = this.bh;
    var $x_2 = this.bz;
    var $x_1 = $m_sci_VectorStatics$().bA;
    var x = this.g;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.a[0] = x;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.h) | 0));
  }
});
$p.fI = (function(elem) {
  if ((this.bz < 32)) {
    var x$1 = $m_sci_VectorStatics$().gV(elem, this.f);
    var x$2 = ((1 + this.bz) | 0);
    var x$3 = ((1 + this.h) | 0);
    return new $c_sci_Vector2(x$1, x$2, this.bh, this.g, x$3);
  } else if ((this.bh.a.length < 30)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$8 = $m_sci_VectorStatics$().G(this.f, this.bh);
    var x$9 = ((1 + this.h) | 0);
    return new $c_sci_Vector2(a, 1, x$8, this.g, x$9);
  } else {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x = this.f;
    var a$2 = new ($d_O.r().r().C)(1);
    a$2.a[0] = x;
    return new $c_sci_Vector3(a$1, 1, a$2, ((1 + this.bz) | 0), $m_sci_VectorStatics$().bA, this.bh, this.g, ((1 + this.h) | 0));
  }
});
$p.dg = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cU(this.f, f);
  var x$2 = $m_sci_VectorStatics$().aI(2, this.bh, f);
  var x$3 = $m_sci_VectorStatics$().cU(this.g, f);
  return new $c_sci_Vector2(x$1, this.bz, x$2, x$3, this.h);
});
$p.dj = (function() {
  return 3;
});
$p.dB = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.bh;
      break;
    }
    case 2: {
      return this.g;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.ch = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().gL(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector2(this.f, this.bz, this.bh, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.ch.call(this, suffix, k);
  }
});
$p.M = (function(f) {
  return this.dg(f);
});
$p.T = (function(elem) {
  return this.bD(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.bz) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bh.a.length) ? this.bh.a[i2].a[i1] : this.g.a[(31 & io)]);
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bk(index);
  }
});
function $isArrayOf_sci_Vector2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cO)));
}
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  cO: 1,
  aq: 1,
  ar: 1,
  al: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  B: 1,
  t: 1,
  o: 1,
  E: 1,
  C: 1,
  u: 1,
  n: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.g = null;
  this.h = 0;
  this.bp = 0;
  this.bq = null;
  this.ba = 0;
  this.aU = null;
  this.b0 = null;
  this.bp = len1;
  this.bq = prefix2;
  this.ba = len12;
  this.aU = data3;
  this.b0 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector3.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $p;
$p.x = (function(index) {
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.ba) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aU.a.length) ? this.aU.a[i3].a[i2].a[i1] : ((i2 < this.b0.a.length) ? this.b0.a[i2].a[i1] : this.g.a[i1]));
    } else if ((index >= this.bp)) {
      var io$2 = ((index - this.bp) | 0);
      return this.bq.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bk(index);
  }
});
$p.eh = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.ba)) {
      var io = ((index - this.ba) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.aU.a.length)) {
        var a3 = this.aU;
        var a3c = a3.m();
        var a2 = a3c.a[i3];
        var a2c = a2.m();
        var a1 = a2c.a[i2];
        var a1c = a1.m();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        return new $c_sci_Vector3(this.f, this.bp, this.bq, this.ba, a3c, this.b0, this.g, this.h);
      } else if ((i2 < this.b0.a.length)) {
        var a2$1 = this.b0;
        var a2c$1 = a2$1.m();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.m();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        return new $c_sci_Vector3(this.f, this.bp, this.bq, this.ba, this.aU, a2c$1, this.g, this.h);
      } else {
        var a1$2 = this.g;
        var a1c$2 = a1$2.m();
        a1c$2.a[i1] = elem;
        return new $c_sci_Vector3(this.f, this.bp, this.bq, this.ba, this.aU, this.b0, a1c$2, this.h);
      }
    } else if ((index >= this.bp)) {
      var io$2 = ((index - this.bp) | 0);
      var a2$2 = this.bq;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.m();
      var a1$3 = a2c$2.a[idx2];
      var a1c$3 = a1$3.m();
      a1c$3.a[idx1] = elem;
      a2c$2.a[idx2] = a1c$3;
      return new $c_sci_Vector3(this.f, this.bp, a2c$2, this.ba, this.aU, this.b0, this.g, this.h);
    } else {
      var a1$4 = this.f;
      var a1c$4 = a1$4.m();
      a1c$4.a[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.bp, this.bq, this.ba, this.aU, this.b0, this.g, this.h);
    }
  } else {
    throw this.bk(index);
  }
});
$p.bD = (function(elem) {
  if ((this.g.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().gU(this.g, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(this.f, this.bp, this.bq, this.ba, this.aU, this.b0, x$1, x$2);
  } else if ((this.b0.a.length < 31)) {
    var x$9 = $m_sci_VectorStatics$().N(this.b0, this.g);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$11 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(this.f, this.bp, this.bq, this.ba, this.aU, x$9, a, x$11);
  } else if ((this.aU.a.length < 30)) {
    var x$17 = $m_sci_VectorStatics$().N(this.aU, $m_sci_VectorStatics$().N(this.b0, this.g));
    var x$18 = $m_sci_VectorStatics$().ar;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$20 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(this.f, this.bp, this.bq, this.ba, x$17, x$18, a$1, x$20);
  } else {
    var $x_8 = this.f;
    var $x_7 = this.bp;
    var $x_6 = this.bq;
    var $x_5 = this.ba;
    var $x_4 = this.aU;
    var $x_3 = this.ba;
    var $x_2 = $m_sci_VectorStatics$().d3;
    var x = $m_sci_VectorStatics$().N(this.b0, this.g);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().ar;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.h) | 0));
  }
});
$p.fI = (function(elem) {
  if ((this.bp < 32)) {
    var x$1 = $m_sci_VectorStatics$().gV(elem, this.f);
    var x$2 = ((1 + this.bp) | 0);
    var x$3 = ((1 + this.ba) | 0);
    var x$4 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(x$1, x$2, this.bq, x$3, this.aU, this.b0, this.g, x$4);
  } else if ((this.ba < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$11 = $m_sci_VectorStatics$().G(this.f, this.bq);
    var x$12 = ((1 + this.ba) | 0);
    var x$13 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(a, 1, x$11, x$12, this.aU, this.b0, this.g, x$13);
  } else if ((this.aU.a.length < 30)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$19 = $m_sci_VectorStatics$().ar;
    var x$21 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.bq), this.aU);
    var x$22 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(a$1, 1, x$19, 1, x$21, this.b0, this.g, x$22);
  } else {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var $x_1 = $m_sci_VectorStatics$().ar;
    var x = $m_sci_VectorStatics$().G(this.f, this.bq);
    var a$3 = new ($d_O.r().r().r().C)(1);
    a$3.a[0] = x;
    return new $c_sci_Vector4(a$2, 1, $x_1, 1, a$3, ((1 + this.ba) | 0), $m_sci_VectorStatics$().d3, this.aU, this.b0, this.g, ((1 + this.h) | 0));
  }
});
$p.dg = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cU(this.f, f);
  var x$2 = $m_sci_VectorStatics$().aI(2, this.bq, f);
  var x$3 = $m_sci_VectorStatics$().aI(3, this.aU, f);
  var x$4 = $m_sci_VectorStatics$().aI(2, this.b0, f);
  var x$5 = $m_sci_VectorStatics$().cU(this.g, f);
  return new $c_sci_Vector3(x$1, this.bp, x$2, this.ba, x$3, x$4, x$5, this.h);
});
$p.dj = (function() {
  return 5;
});
$p.dB = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.bq;
      break;
    }
    case 2: {
      return this.aU;
      break;
    }
    case 3: {
      return this.b0;
      break;
    }
    case 4: {
      return this.g;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.ch = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().gL(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector3(this.f, this.bp, this.bq, this.ba, this.aU, this.b0, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.ch.call(this, suffix, k);
  }
});
$p.M = (function(f) {
  return this.dg(f);
});
$p.T = (function(elem) {
  return this.bD(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.ba) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aU.a.length) ? this.aU.a[i3].a[i2].a[i1] : ((i2 < this.b0.a.length) ? this.b0.a[i2].a[i1] : this.g.a[i1]));
    } else if ((index >= this.bp)) {
      var io$2 = ((index - this.bp) | 0);
      return this.bq.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bk(index);
  }
});
function $isArrayOf_sci_Vector3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cP)));
}
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  cP: 1,
  aq: 1,
  ar: 1,
  al: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  B: 1,
  t: 1,
  o: 1,
  E: 1,
  C: 1,
  u: 1,
  n: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.g = null;
  this.h = 0;
  this.bb = 0;
  this.b2 = null;
  this.b1 = 0;
  this.b3 = null;
  this.aG = 0;
  this.ap = null;
  this.av = null;
  this.au = null;
  this.bb = len1;
  this.b2 = prefix2;
  this.b1 = len12;
  this.b3 = prefix3;
  this.aG = len123;
  this.ap = data4;
  this.av = suffix3;
  this.au = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector4.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $p;
$p.x = (function(index) {
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.aG) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.ap.a.length) ? this.ap.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.av.a.length) ? this.av.a[i3].a[i2].a[i1] : ((i2 < this.au.a.length) ? this.au.a[i2].a[i1] : this.g.a[i1])));
    } else if ((index >= this.b1)) {
      var io$2 = ((index - this.b1) | 0);
      return this.b3.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.bb)) {
      var io$3 = ((index - this.bb) | 0);
      return this.b2.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bk(index);
  }
});
$p.eh = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.aG)) {
      var io = ((index - this.aG) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.ap.a.length)) {
        var a4 = this.ap;
        var a4c = a4.m();
        var a3 = a4c.a[i4];
        var a3c = a3.m();
        var a2 = a3c.a[i3];
        var a2c = a2.m();
        var a1 = a2c.a[i2];
        var a1c = a1.m();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        return new $c_sci_Vector4(this.f, this.bb, this.b2, this.b1, this.b3, this.aG, a4c, this.av, this.au, this.g, this.h);
      } else if ((i3 < this.av.a.length)) {
        var a3$1 = this.av;
        var a3c$1 = a3$1.m();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.m();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.m();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        return new $c_sci_Vector4(this.f, this.bb, this.b2, this.b1, this.b3, this.aG, this.ap, a3c$1, this.au, this.g, this.h);
      } else if ((i2 < this.au.a.length)) {
        var a2$2 = this.au;
        var a2c$2 = a2$2.m();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.m();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        return new $c_sci_Vector4(this.f, this.bb, this.b2, this.b1, this.b3, this.aG, this.ap, this.av, a2c$2, this.g, this.h);
      } else {
        var a1$3 = this.g;
        var a1c$3 = a1$3.m();
        a1c$3.a[i1] = elem;
        return new $c_sci_Vector4(this.f, this.bb, this.b2, this.b1, this.b3, this.aG, this.ap, this.av, this.au, a1c$3, this.h);
      }
    } else if ((index >= this.b1)) {
      var io$2 = ((index - this.b1) | 0);
      var a3$2 = this.b3;
      var idx3 = ((io$2 >>> 10) | 0);
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a3c$2 = a3$2.m();
      var a2$3 = a3c$2.a[idx3];
      var a2c$3 = a2$3.m();
      var a1$4 = a2c$3.a[idx2];
      var a1c$4 = a1$4.m();
      a1c$4.a[idx1] = elem;
      a2c$3.a[idx2] = a1c$4;
      a3c$2.a[idx3] = a2c$3;
      return new $c_sci_Vector4(this.f, this.bb, this.b2, this.b1, a3c$2, this.aG, this.ap, this.av, this.au, this.g, this.h);
    } else if ((index >= this.bb)) {
      var io$3 = ((index - this.bb) | 0);
      var a2$4 = this.b2;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.m();
      var a1$5 = a2c$4.a[idx2$1];
      var a1c$5 = a1$5.m();
      a1c$5.a[idx1$1] = elem;
      a2c$4.a[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.f, this.bb, a2c$4, this.b1, this.b3, this.aG, this.ap, this.av, this.au, this.g, this.h);
    } else {
      var a1$6 = this.f;
      var a1c$6 = a1$6.m();
      a1c$6.a[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.bb, this.b2, this.b1, this.b3, this.aG, this.ap, this.av, this.au, this.g, this.h);
    }
  } else {
    throw this.bk(index);
  }
});
$p.bD = (function(elem) {
  if ((this.g.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().gU(this.g, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.f, this.bb, this.b2, this.b1, this.b3, this.aG, this.ap, this.av, this.au, x$1, x$2);
  } else if ((this.au.a.length < 31)) {
    var x$12 = $m_sci_VectorStatics$().N(this.au, this.g);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$14 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.f, this.bb, this.b2, this.b1, this.b3, this.aG, this.ap, this.av, x$12, a, x$14);
  } else if ((this.av.a.length < 31)) {
    var x$23 = $m_sci_VectorStatics$().N(this.av, $m_sci_VectorStatics$().N(this.au, this.g));
    var x$24 = $m_sci_VectorStatics$().ar;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$26 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.f, this.bb, this.b2, this.b1, this.b3, this.aG, this.ap, x$23, x$24, a$1, x$26);
  } else if ((this.ap.a.length < 30)) {
    var x$34 = $m_sci_VectorStatics$().N(this.ap, $m_sci_VectorStatics$().N(this.av, $m_sci_VectorStatics$().N(this.au, this.g)));
    var x$35 = $m_sci_VectorStatics$().bA;
    var x$36 = $m_sci_VectorStatics$().ar;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$38 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.f, this.bb, this.b2, this.b1, this.b3, this.aG, x$34, x$35, x$36, a$2, x$38);
  } else {
    var $x_11 = this.f;
    var $x_10 = this.bb;
    var $x_9 = this.b2;
    var $x_8 = this.b1;
    var $x_7 = this.b3;
    var $x_6 = this.aG;
    var $x_5 = this.ap;
    var $x_4 = this.aG;
    var $x_3 = $m_sci_VectorStatics$().hQ;
    var x = $m_sci_VectorStatics$().N(this.av, $m_sci_VectorStatics$().N(this.au, this.g));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().bA;
    var $x_1 = $m_sci_VectorStatics$().ar;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.h) | 0));
  }
});
$p.fI = (function(elem) {
  if ((this.bb < 32)) {
    var x$1 = $m_sci_VectorStatics$().gV(elem, this.f);
    var x$2 = ((1 + this.bb) | 0);
    var x$3 = ((1 + this.b1) | 0);
    var x$4 = ((1 + this.aG) | 0);
    var x$5 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(x$1, x$2, this.b2, x$3, this.b3, x$4, this.ap, this.av, this.au, this.g, x$5);
  } else if ((this.b1 < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$14 = $m_sci_VectorStatics$().G(this.f, this.b2);
    var x$15 = ((1 + this.b1) | 0);
    var x$16 = ((1 + this.aG) | 0);
    var x$17 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(a, 1, x$14, x$15, this.b3, x$16, this.ap, this.av, this.au, this.g, x$17);
  } else if ((this.aG < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$25 = $m_sci_VectorStatics$().ar;
    var x$27 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.b2), this.b3);
    var x$28 = ((1 + this.aG) | 0);
    var x$29 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(a$1, 1, x$25, 1, x$27, x$28, this.ap, this.av, this.au, this.g, x$29);
  } else if ((this.ap.a.length < 30)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$36 = $m_sci_VectorStatics$().ar;
    var x$38 = $m_sci_VectorStatics$().bA;
    var x$40 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.b2), this.b3), this.ap);
    var x$41 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(a$2, 1, x$36, 1, x$38, 1, x$40, this.av, this.au, this.g, x$41);
  } else {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var $x_2 = $m_sci_VectorStatics$().ar;
    var $x_1 = $m_sci_VectorStatics$().bA;
    var x = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.b2), this.b3);
    var a$4 = new ($d_O.r().r().r().r().C)(1);
    a$4.a[0] = x;
    return new $c_sci_Vector5(a$3, 1, $x_2, 1, $x_1, 1, a$4, ((1 + this.aG) | 0), $m_sci_VectorStatics$().hQ, this.ap, this.av, this.au, this.g, ((1 + this.h) | 0));
  }
});
$p.dg = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cU(this.f, f);
  var x$2 = $m_sci_VectorStatics$().aI(2, this.b2, f);
  var x$3 = $m_sci_VectorStatics$().aI(3, this.b3, f);
  var x$4 = $m_sci_VectorStatics$().aI(4, this.ap, f);
  var x$5 = $m_sci_VectorStatics$().aI(3, this.av, f);
  var x$6 = $m_sci_VectorStatics$().aI(2, this.au, f);
  var x$7 = $m_sci_VectorStatics$().cU(this.g, f);
  return new $c_sci_Vector4(x$1, this.bb, x$2, this.b1, x$3, this.aG, x$4, x$5, x$6, x$7, this.h);
});
$p.dj = (function() {
  return 7;
});
$p.dB = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.b2;
      break;
    }
    case 2: {
      return this.b3;
      break;
    }
    case 3: {
      return this.ap;
      break;
    }
    case 4: {
      return this.av;
      break;
    }
    case 5: {
      return this.au;
      break;
    }
    case 6: {
      return this.g;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.ch = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().gL(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector4(this.f, this.bb, this.b2, this.b1, this.b3, this.aG, this.ap, this.av, this.au, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.ch.call(this, suffix, k);
  }
});
$p.M = (function(f) {
  return this.dg(f);
});
$p.T = (function(elem) {
  return this.bD(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.aG) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.ap.a.length) ? this.ap.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.av.a.length) ? this.av.a[i3].a[i2].a[i1] : ((i2 < this.au.a.length) ? this.au.a[i2].a[i1] : this.g.a[i1])));
    } else if ((index >= this.b1)) {
      var io$2 = ((index - this.b1) | 0);
      return this.b3.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.bb)) {
      var io$3 = ((index - this.bb) | 0);
      return this.b2.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bk(index);
  }
});
function $isArrayOf_sci_Vector4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cQ)));
}
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  cQ: 1,
  aq: 1,
  ar: 1,
  al: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  B: 1,
  t: 1,
  o: 1,
  E: 1,
  C: 1,
  u: 1,
  n: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.g = null;
  this.h = 0;
  this.aP = 0;
  this.ax = null;
  this.aH = 0;
  this.ay = null;
  this.aw = 0;
  this.az = null;
  this.a9 = 0;
  this.a2 = null;
  this.a6 = null;
  this.a5 = null;
  this.a4 = null;
  this.aP = len1;
  this.ax = prefix2;
  this.aH = len12;
  this.ay = prefix3;
  this.aw = len123;
  this.az = prefix4;
  this.a9 = len1234;
  this.a2 = data5;
  this.a6 = suffix4;
  this.a5 = suffix3;
  this.a4 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector5.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $p;
$p.x = (function(index) {
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.a9) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.a2.a.length) ? this.a2.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a6.a.length) ? this.a6.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a5.a.length) ? this.a5.a[i3].a[i2].a[i1] : ((i2 < this.a4.a.length) ? this.a4.a[i2].a[i1] : this.g.a[i1]))));
    } else if ((index >= this.aw)) {
      var io$2 = ((index - this.aw) | 0);
      return this.az.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aH)) {
      var io$3 = ((index - this.aH) | 0);
      return this.ay.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aP)) {
      var io$4 = ((index - this.aP) | 0);
      return this.ax.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bk(index);
  }
});
$p.eh = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.a9)) {
      var io = ((index - this.a9) | 0);
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i5 < this.a2.a.length)) {
        var a5 = this.a2;
        var a5c = a5.m();
        var a4 = a5c.a[i5];
        var a4c = a4.m();
        var a3 = a4c.a[i4];
        var a3c = a3.m();
        var a2 = a3c.a[i3];
        var a2c = a2.m();
        var a1 = a2c.a[i2];
        var a1c = a1.m();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        return new $c_sci_Vector5(this.f, this.aP, this.ax, this.aH, this.ay, this.aw, this.az, this.a9, a5c, this.a6, this.a5, this.a4, this.g, this.h);
      } else if ((i4 < this.a6.a.length)) {
        var a4$1 = this.a6;
        var a4c$1 = a4$1.m();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.m();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.m();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.m();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        return new $c_sci_Vector5(this.f, this.aP, this.ax, this.aH, this.ay, this.aw, this.az, this.a9, this.a2, a4c$1, this.a5, this.a4, this.g, this.h);
      } else if ((i3 < this.a5.a.length)) {
        var a3$2 = this.a5;
        var a3c$2 = a3$2.m();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.m();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.m();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        return new $c_sci_Vector5(this.f, this.aP, this.ax, this.aH, this.ay, this.aw, this.az, this.a9, this.a2, this.a6, a3c$2, this.a4, this.g, this.h);
      } else if ((i2 < this.a4.a.length)) {
        var a2$3 = this.a4;
        var a2c$3 = a2$3.m();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.m();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        return new $c_sci_Vector5(this.f, this.aP, this.ax, this.aH, this.ay, this.aw, this.az, this.a9, this.a2, this.a6, this.a5, a2c$3, this.g, this.h);
      } else {
        var a1$4 = this.g;
        var a1c$4 = a1$4.m();
        a1c$4.a[i1] = elem;
        return new $c_sci_Vector5(this.f, this.aP, this.ax, this.aH, this.ay, this.aw, this.az, this.a9, this.a2, this.a6, this.a5, this.a4, a1c$4, this.h);
      }
    } else if ((index >= this.aw)) {
      var io$2 = ((index - this.aw) | 0);
      var a4$2 = this.az;
      var idx4 = ((io$2 >>> 15) | 0);
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a4c$2 = a4$2.m();
      var a3$3 = a4c$2.a[idx4];
      var a3c$3 = a3$3.m();
      var a2$4 = a3c$3.a[idx3];
      var a2c$4 = a2$4.m();
      var a1$5 = a2c$4.a[idx2];
      var a1c$5 = a1$5.m();
      a1c$5.a[idx1] = elem;
      a2c$4.a[idx2] = a1c$5;
      a3c$3.a[idx3] = a2c$4;
      a4c$2.a[idx4] = a3c$3;
      return new $c_sci_Vector5(this.f, this.aP, this.ax, this.aH, this.ay, this.aw, a4c$2, this.a9, this.a2, this.a6, this.a5, this.a4, this.g, this.h);
    } else if ((index >= this.aH)) {
      var io$3 = ((index - this.aH) | 0);
      var a3$4 = this.ay;
      var idx3$1 = ((io$3 >>> 10) | 0);
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a3c$4 = a3$4.m();
      var a2$5 = a3c$4.a[idx3$1];
      var a2c$5 = a2$5.m();
      var a1$6 = a2c$5.a[idx2$1];
      var a1c$6 = a1$6.m();
      a1c$6.a[idx1$1] = elem;
      a2c$5.a[idx2$1] = a1c$6;
      a3c$4.a[idx3$1] = a2c$5;
      return new $c_sci_Vector5(this.f, this.aP, this.ax, this.aH, a3c$4, this.aw, this.az, this.a9, this.a2, this.a6, this.a5, this.a4, this.g, this.h);
    } else if ((index >= this.aP)) {
      var io$4 = ((index - this.aP) | 0);
      var a2$6 = this.ax;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.m();
      var a1$7 = a2c$6.a[idx2$2];
      var a1c$7 = a1$7.m();
      a1c$7.a[idx1$2] = elem;
      a2c$6.a[idx2$2] = a1c$7;
      return new $c_sci_Vector5(this.f, this.aP, a2c$6, this.aH, this.ay, this.aw, this.az, this.a9, this.a2, this.a6, this.a5, this.a4, this.g, this.h);
    } else {
      var a1$8 = this.f;
      var a1c$8 = a1$8.m();
      a1c$8.a[index] = elem;
      return new $c_sci_Vector5(a1c$8, this.aP, this.ax, this.aH, this.ay, this.aw, this.az, this.a9, this.a2, this.a6, this.a5, this.a4, this.g, this.h);
    }
  } else {
    throw this.bk(index);
  }
});
$p.bD = (function(elem) {
  if ((this.g.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().gU(this.g, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.f, this.aP, this.ax, this.aH, this.ay, this.aw, this.az, this.a9, this.a2, this.a6, this.a5, this.a4, x$1, x$2);
  } else if ((this.a4.a.length < 31)) {
    var x$15 = $m_sci_VectorStatics$().N(this.a4, this.g);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$17 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.f, this.aP, this.ax, this.aH, this.ay, this.aw, this.az, this.a9, this.a2, this.a6, this.a5, x$15, a, x$17);
  } else if ((this.a5.a.length < 31)) {
    var x$29 = $m_sci_VectorStatics$().N(this.a5, $m_sci_VectorStatics$().N(this.a4, this.g));
    var x$30 = $m_sci_VectorStatics$().ar;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$32 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.f, this.aP, this.ax, this.aH, this.ay, this.aw, this.az, this.a9, this.a2, this.a6, x$29, x$30, a$1, x$32);
  } else if ((this.a6.a.length < 31)) {
    var x$43 = $m_sci_VectorStatics$().N(this.a6, $m_sci_VectorStatics$().N(this.a5, $m_sci_VectorStatics$().N(this.a4, this.g)));
    var x$44 = $m_sci_VectorStatics$().bA;
    var x$45 = $m_sci_VectorStatics$().ar;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$47 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.f, this.aP, this.ax, this.aH, this.ay, this.aw, this.az, this.a9, this.a2, x$43, x$44, x$45, a$2, x$47);
  } else if ((this.a2.a.length < 30)) {
    var x$57 = $m_sci_VectorStatics$().N(this.a2, $m_sci_VectorStatics$().N(this.a6, $m_sci_VectorStatics$().N(this.a5, $m_sci_VectorStatics$().N(this.a4, this.g))));
    var x$58 = $m_sci_VectorStatics$().d3;
    var x$59 = $m_sci_VectorStatics$().bA;
    var x$60 = $m_sci_VectorStatics$().ar;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$62 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.f, this.aP, this.ax, this.aH, this.ay, this.aw, this.az, this.a9, x$57, x$58, x$59, x$60, a$3, x$62);
  } else {
    var $x_14 = this.f;
    var $x_13 = this.aP;
    var $x_12 = this.ax;
    var $x_11 = this.aH;
    var $x_10 = this.ay;
    var $x_9 = this.aw;
    var $x_8 = this.az;
    var $x_7 = this.a9;
    var $x_6 = this.a2;
    var $x_5 = this.a9;
    var $x_4 = $m_sci_VectorStatics$().ly;
    var x = $m_sci_VectorStatics$().N(this.a6, $m_sci_VectorStatics$().N(this.a5, $m_sci_VectorStatics$().N(this.a4, this.g)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().d3;
    var $x_2 = $m_sci_VectorStatics$().bA;
    var $x_1 = $m_sci_VectorStatics$().ar;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.h) | 0));
  }
});
$p.fI = (function(elem) {
  if ((this.aP < 32)) {
    var x$1 = $m_sci_VectorStatics$().gV(elem, this.f);
    var x$2 = ((1 + this.aP) | 0);
    var x$3 = ((1 + this.aH) | 0);
    var x$4 = ((1 + this.aw) | 0);
    var x$5 = ((1 + this.a9) | 0);
    var x$6 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(x$1, x$2, this.ax, x$3, this.ay, x$4, this.az, x$5, this.a2, this.a6, this.a5, this.a4, this.g, x$6);
  } else if ((this.aH < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$17 = $m_sci_VectorStatics$().G(this.f, this.ax);
    var x$18 = ((1 + this.aH) | 0);
    var x$19 = ((1 + this.aw) | 0);
    var x$20 = ((1 + this.a9) | 0);
    var x$21 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a, 1, x$17, x$18, this.ay, x$19, this.az, x$20, this.a2, this.a6, this.a5, this.a4, this.g, x$21);
  } else if ((this.aw < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$31 = $m_sci_VectorStatics$().ar;
    var x$33 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.ax), this.ay);
    var x$34 = ((1 + this.aw) | 0);
    var x$35 = ((1 + this.a9) | 0);
    var x$36 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a$1, 1, x$31, 1, x$33, x$34, this.az, x$35, this.a2, this.a6, this.a5, this.a4, this.g, x$36);
  } else if ((this.a9 < 1048576)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$45 = $m_sci_VectorStatics$().ar;
    var x$47 = $m_sci_VectorStatics$().bA;
    var x$49 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.ax), this.ay), this.az);
    var x$50 = ((1 + this.a9) | 0);
    var x$51 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a$2, 1, x$45, 1, x$47, 1, x$49, x$50, this.a2, this.a6, this.a5, this.a4, this.g, x$51);
  } else if ((this.a2.a.length < 30)) {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$59 = $m_sci_VectorStatics$().ar;
    var x$61 = $m_sci_VectorStatics$().bA;
    var x$63 = $m_sci_VectorStatics$().d3;
    var x$65 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.ax), this.ay), this.az), this.a2);
    var x$66 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a$3, 1, x$59, 1, x$61, 1, x$63, 1, x$65, this.a6, this.a5, this.a4, this.g, x$66);
  } else {
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var $x_3 = $m_sci_VectorStatics$().ar;
    var $x_2 = $m_sci_VectorStatics$().bA;
    var $x_1 = $m_sci_VectorStatics$().d3;
    var x = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.ax), this.ay), this.az);
    var a$5 = new ($d_O.r().r().r().r().r().C)(1);
    a$5.a[0] = x;
    return new $c_sci_Vector6(a$4, 1, $x_3, 1, $x_2, 1, $x_1, 1, a$5, ((1 + this.a9) | 0), $m_sci_VectorStatics$().ly, this.a2, this.a6, this.a5, this.a4, this.g, ((1 + this.h) | 0));
  }
});
$p.dg = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cU(this.f, f);
  var x$2 = $m_sci_VectorStatics$().aI(2, this.ax, f);
  var x$3 = $m_sci_VectorStatics$().aI(3, this.ay, f);
  var x$4 = $m_sci_VectorStatics$().aI(4, this.az, f);
  var x$5 = $m_sci_VectorStatics$().aI(5, this.a2, f);
  var x$6 = $m_sci_VectorStatics$().aI(4, this.a6, f);
  var x$7 = $m_sci_VectorStatics$().aI(3, this.a5, f);
  var x$8 = $m_sci_VectorStatics$().aI(2, this.a4, f);
  var x$9 = $m_sci_VectorStatics$().cU(this.g, f);
  return new $c_sci_Vector5(x$1, this.aP, x$2, this.aH, x$3, this.aw, x$4, this.a9, x$5, x$6, x$7, x$8, x$9, this.h);
});
$p.dj = (function() {
  return 9;
});
$p.dB = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.ax;
      break;
    }
    case 2: {
      return this.ay;
      break;
    }
    case 3: {
      return this.az;
      break;
    }
    case 4: {
      return this.a2;
      break;
    }
    case 5: {
      return this.a6;
      break;
    }
    case 6: {
      return this.a5;
      break;
    }
    case 7: {
      return this.a4;
      break;
    }
    case 8: {
      return this.g;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.ch = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().gL(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector5(this.f, this.aP, this.ax, this.aH, this.ay, this.aw, this.az, this.a9, this.a2, this.a6, this.a5, this.a4, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.ch.call(this, suffix, k);
  }
});
$p.M = (function(f) {
  return this.dg(f);
});
$p.T = (function(elem) {
  return this.bD(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.a9) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.a2.a.length) ? this.a2.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a6.a.length) ? this.a6.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a5.a.length) ? this.a5.a[i3].a[i2].a[i1] : ((i2 < this.a4.a.length) ? this.a4.a[i2].a[i1] : this.g.a[i1]))));
    } else if ((index >= this.aw)) {
      var io$2 = ((index - this.aw) | 0);
      return this.az.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aH)) {
      var io$3 = ((index - this.aH) | 0);
      return this.ay.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aP)) {
      var io$4 = ((index - this.aP) | 0);
      return this.ax.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bk(index);
  }
});
function $isArrayOf_sci_Vector5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cR)));
}
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  cR: 1,
  aq: 1,
  ar: 1,
  al: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  B: 1,
  t: 1,
  o: 1,
  E: 1,
  C: 1,
  u: 1,
  n: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.g = null;
  this.h = 0;
  this.aA = 0;
  this.af = null;
  this.aq = 0;
  this.ag = null;
  this.ae = 0;
  this.ah = null;
  this.aa = 0;
  this.ai = null;
  this.a7 = 0;
  this.W = null;
  this.a1 = null;
  this.a0 = null;
  this.Z = null;
  this.Y = null;
  this.aA = len1;
  this.af = prefix2;
  this.aq = len12;
  this.ag = prefix3;
  this.ae = len123;
  this.ah = prefix4;
  this.aa = len1234;
  this.ai = prefix5;
  this.a7 = len12345;
  this.W = data6;
  this.a1 = suffix5;
  this.a0 = suffix4;
  this.Z = suffix3;
  this.Y = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector6.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $p;
$p.x = (function(index) {
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.a7) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.W.a.length) ? this.W.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.a1.a.length) ? this.a1.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a0.a.length) ? this.a0.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.Z.a.length) ? this.Z.a[i3].a[i2].a[i1] : ((i2 < this.Y.a.length) ? this.Y.a[i2].a[i1] : this.g.a[i1])))));
    } else if ((index >= this.aa)) {
      var io$2 = ((index - this.aa) | 0);
      return this.ai.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ae)) {
      var io$3 = ((index - this.ae) | 0);
      return this.ah.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aq)) {
      var io$4 = ((index - this.aq) | 0);
      return this.ag.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.aA)) {
      var io$5 = ((index - this.aA) | 0);
      return this.af.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bk(index);
  }
});
$p.eh = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.a7)) {
      var io = ((index - this.a7) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < this.W.a.length)) {
        var a6 = this.W;
        var a6c = a6.m();
        var a5 = a6c.a[i6];
        var a5c = a5.m();
        var a4 = a5c.a[i5];
        var a4c = a4.m();
        var a3 = a4c.a[i4];
        var a3c = a3.m();
        var a2 = a3c.a[i3];
        var a2c = a2.m();
        var a1 = a2c.a[i2];
        var a1c = a1.m();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        a6c.a[i6] = a5c;
        return new $c_sci_Vector6(this.f, this.aA, this.af, this.aq, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, a6c, this.a1, this.a0, this.Z, this.Y, this.g, this.h);
      } else if ((i5 < this.a1.a.length)) {
        var a5$1 = this.a1;
        var a5c$1 = a5$1.m();
        var a4$1 = a5c$1.a[i5];
        var a4c$1 = a4$1.m();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.m();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.m();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.m();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        a5c$1.a[i5] = a4c$1;
        return new $c_sci_Vector6(this.f, this.aA, this.af, this.aq, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, a5c$1, this.a0, this.Z, this.Y, this.g, this.h);
      } else if ((i4 < this.a0.a.length)) {
        var a4$2 = this.a0;
        var a4c$2 = a4$2.m();
        var a3$2 = a4c$2.a[i4];
        var a3c$2 = a3$2.m();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.m();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.m();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        a4c$2.a[i4] = a3c$2;
        return new $c_sci_Vector6(this.f, this.aA, this.af, this.aq, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, a4c$2, this.Z, this.Y, this.g, this.h);
      } else if ((i3 < this.Z.a.length)) {
        var a3$3 = this.Z;
        var a3c$3 = a3$3.m();
        var a2$3 = a3c$3.a[i3];
        var a2c$3 = a2$3.m();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.m();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        a3c$3.a[i3] = a2c$3;
        return new $c_sci_Vector6(this.f, this.aA, this.af, this.aq, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, a3c$3, this.Y, this.g, this.h);
      } else if ((i2 < this.Y.a.length)) {
        var a2$4 = this.Y;
        var a2c$4 = a2$4.m();
        var a1$4 = a2c$4.a[i2];
        var a1c$4 = a1$4.m();
        a1c$4.a[i1] = elem;
        a2c$4.a[i2] = a1c$4;
        return new $c_sci_Vector6(this.f, this.aA, this.af, this.aq, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, a2c$4, this.g, this.h);
      } else {
        var a1$5 = this.g;
        var a1c$5 = a1$5.m();
        a1c$5.a[i1] = elem;
        return new $c_sci_Vector6(this.f, this.aA, this.af, this.aq, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, a1c$5, this.h);
      }
    } else if ((index >= this.aa)) {
      var io$2 = ((index - this.aa) | 0);
      var a5$2 = this.ai;
      var idx5 = ((io$2 >>> 20) | 0);
      var idx4 = (31 & ((io$2 >>> 15) | 0));
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a5c$2 = a5$2.m();
      var a4$3 = a5c$2.a[idx5];
      var a4c$3 = a4$3.m();
      var a3$4 = a4c$3.a[idx4];
      var a3c$4 = a3$4.m();
      var a2$5 = a3c$4.a[idx3];
      var a2c$5 = a2$5.m();
      var a1$6 = a2c$5.a[idx2];
      var a1c$6 = a1$6.m();
      a1c$6.a[idx1] = elem;
      a2c$5.a[idx2] = a1c$6;
      a3c$4.a[idx3] = a2c$5;
      a4c$3.a[idx4] = a3c$4;
      a5c$2.a[idx5] = a4c$3;
      return new $c_sci_Vector6(this.f, this.aA, this.af, this.aq, this.ag, this.ae, this.ah, this.aa, a5c$2, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, this.g, this.h);
    } else if ((index >= this.ae)) {
      var io$3 = ((index - this.ae) | 0);
      var a4$4 = this.ah;
      var idx4$1 = ((io$3 >>> 15) | 0);
      var idx3$1 = (31 & ((io$3 >>> 10) | 0));
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a4c$4 = a4$4.m();
      var a3$5 = a4c$4.a[idx4$1];
      var a3c$5 = a3$5.m();
      var a2$6 = a3c$5.a[idx3$1];
      var a2c$6 = a2$6.m();
      var a1$7 = a2c$6.a[idx2$1];
      var a1c$7 = a1$7.m();
      a1c$7.a[idx1$1] = elem;
      a2c$6.a[idx2$1] = a1c$7;
      a3c$5.a[idx3$1] = a2c$6;
      a4c$4.a[idx4$1] = a3c$5;
      return new $c_sci_Vector6(this.f, this.aA, this.af, this.aq, this.ag, this.ae, a4c$4, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, this.g, this.h);
    } else if ((index >= this.aq)) {
      var io$4 = ((index - this.aq) | 0);
      var a3$6 = this.ag;
      var idx3$2 = ((io$4 >>> 10) | 0);
      var idx2$2 = (31 & ((io$4 >>> 5) | 0));
      var idx1$2 = (31 & io$4);
      var a3c$6 = a3$6.m();
      var a2$7 = a3c$6.a[idx3$2];
      var a2c$7 = a2$7.m();
      var a1$8 = a2c$7.a[idx2$2];
      var a1c$8 = a1$8.m();
      a1c$8.a[idx1$2] = elem;
      a2c$7.a[idx2$2] = a1c$8;
      a3c$6.a[idx3$2] = a2c$7;
      return new $c_sci_Vector6(this.f, this.aA, this.af, this.aq, a3c$6, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, this.g, this.h);
    } else if ((index >= this.aA)) {
      var io$5 = ((index - this.aA) | 0);
      var a2$8 = this.af;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.m();
      var a1$9 = a2c$8.a[idx2$3];
      var a1c$9 = a1$9.m();
      a1c$9.a[idx1$3] = elem;
      a2c$8.a[idx2$3] = a1c$9;
      return new $c_sci_Vector6(this.f, this.aA, a2c$8, this.aq, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, this.g, this.h);
    } else {
      var a1$10 = this.f;
      var a1c$10 = a1$10.m();
      a1c$10.a[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.aA, this.af, this.aq, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, this.g, this.h);
    }
  } else {
    throw this.bk(index);
  }
});
$p.bD = (function(elem) {
  if ((this.g.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().gU(this.g, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.f, this.aA, this.af, this.aq, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, x$1, x$2);
  } else if ((this.Y.a.length < 31)) {
    var x$18 = $m_sci_VectorStatics$().N(this.Y, this.g);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$20 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.f, this.aA, this.af, this.aq, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, x$18, a, x$20);
  } else if ((this.Z.a.length < 31)) {
    var x$35 = $m_sci_VectorStatics$().N(this.Z, $m_sci_VectorStatics$().N(this.Y, this.g));
    var x$36 = $m_sci_VectorStatics$().ar;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$38 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.f, this.aA, this.af, this.aq, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, x$35, x$36, a$1, x$38);
  } else if ((this.a0.a.length < 31)) {
    var x$52 = $m_sci_VectorStatics$().N(this.a0, $m_sci_VectorStatics$().N(this.Z, $m_sci_VectorStatics$().N(this.Y, this.g)));
    var x$53 = $m_sci_VectorStatics$().bA;
    var x$54 = $m_sci_VectorStatics$().ar;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$56 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.f, this.aA, this.af, this.aq, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, x$52, x$53, x$54, a$2, x$56);
  } else if ((this.a1.a.length < 31)) {
    var x$69 = $m_sci_VectorStatics$().N(this.a1, $m_sci_VectorStatics$().N(this.a0, $m_sci_VectorStatics$().N(this.Z, $m_sci_VectorStatics$().N(this.Y, this.g))));
    var x$70 = $m_sci_VectorStatics$().d3;
    var x$71 = $m_sci_VectorStatics$().bA;
    var x$72 = $m_sci_VectorStatics$().ar;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$74 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.f, this.aA, this.af, this.aq, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, x$69, x$70, x$71, x$72, a$3, x$74);
  } else if ((this.W.a.length < 62)) {
    var x$86 = $m_sci_VectorStatics$().N(this.W, $m_sci_VectorStatics$().N(this.a1, $m_sci_VectorStatics$().N(this.a0, $m_sci_VectorStatics$().N(this.Z, $m_sci_VectorStatics$().N(this.Y, this.g)))));
    var x$87 = $m_sci_VectorStatics$().hQ;
    var x$88 = $m_sci_VectorStatics$().d3;
    var x$89 = $m_sci_VectorStatics$().bA;
    var x$90 = $m_sci_VectorStatics$().ar;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var x$92 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.f, this.aA, this.af, this.aq, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, x$86, x$87, x$88, x$89, x$90, a$4, x$92);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.fI = (function(elem) {
  if ((this.aA < 32)) {
    var x$1 = $m_sci_VectorStatics$().gV(elem, this.f);
    var x$2 = ((1 + this.aA) | 0);
    var x$3 = ((1 + this.aq) | 0);
    var x$4 = ((1 + this.ae) | 0);
    var x$5 = ((1 + this.aa) | 0);
    var x$6 = ((1 + this.a7) | 0);
    var x$7 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(x$1, x$2, this.af, x$3, this.ag, x$4, this.ah, x$5, this.ai, x$6, this.W, this.a1, this.a0, this.Z, this.Y, this.g, x$7);
  } else if ((this.aq < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$20 = $m_sci_VectorStatics$().G(this.f, this.af);
    var x$21 = ((1 + this.aq) | 0);
    var x$22 = ((1 + this.ae) | 0);
    var x$23 = ((1 + this.aa) | 0);
    var x$24 = ((1 + this.a7) | 0);
    var x$25 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a, 1, x$20, x$21, this.ag, x$22, this.ah, x$23, this.ai, x$24, this.W, this.a1, this.a0, this.Z, this.Y, this.g, x$25);
  } else if ((this.ae < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$37 = $m_sci_VectorStatics$().ar;
    var x$39 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.af), this.ag);
    var x$40 = ((1 + this.ae) | 0);
    var x$41 = ((1 + this.aa) | 0);
    var x$42 = ((1 + this.a7) | 0);
    var x$43 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$1, 1, x$37, 1, x$39, x$40, this.ah, x$41, this.ai, x$42, this.W, this.a1, this.a0, this.Z, this.Y, this.g, x$43);
  } else if ((this.aa < 1048576)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$54 = $m_sci_VectorStatics$().ar;
    var x$56 = $m_sci_VectorStatics$().bA;
    var x$58 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.af), this.ag), this.ah);
    var x$59 = ((1 + this.aa) | 0);
    var x$60 = ((1 + this.a7) | 0);
    var x$61 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$2, 1, x$54, 1, x$56, 1, x$58, x$59, this.ai, x$60, this.W, this.a1, this.a0, this.Z, this.Y, this.g, x$61);
  } else if ((this.a7 < 33554432)) {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$71 = $m_sci_VectorStatics$().ar;
    var x$73 = $m_sci_VectorStatics$().bA;
    var x$75 = $m_sci_VectorStatics$().d3;
    var x$77 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.af), this.ag), this.ah), this.ai);
    var x$78 = ((1 + this.a7) | 0);
    var x$79 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$3, 1, x$71, 1, x$73, 1, x$75, 1, x$77, x$78, this.W, this.a1, this.a0, this.Z, this.Y, this.g, x$79);
  } else if ((this.W.a.length < 62)) {
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var x$88 = $m_sci_VectorStatics$().ar;
    var x$90 = $m_sci_VectorStatics$().bA;
    var x$92 = $m_sci_VectorStatics$().d3;
    var x$94 = $m_sci_VectorStatics$().hQ;
    var x$96 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.af), this.ag), this.ah), this.ai), this.W);
    var x$97 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$4, 1, x$88, 1, x$90, 1, x$92, 1, x$94, 1, x$96, this.a1, this.a0, this.Z, this.Y, this.g, x$97);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.dg = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cU(this.f, f);
  var x$2 = $m_sci_VectorStatics$().aI(2, this.af, f);
  var x$3 = $m_sci_VectorStatics$().aI(3, this.ag, f);
  var x$4 = $m_sci_VectorStatics$().aI(4, this.ah, f);
  var x$5 = $m_sci_VectorStatics$().aI(5, this.ai, f);
  var x$6 = $m_sci_VectorStatics$().aI(6, this.W, f);
  var x$7 = $m_sci_VectorStatics$().aI(5, this.a1, f);
  var x$8 = $m_sci_VectorStatics$().aI(4, this.a0, f);
  var x$9 = $m_sci_VectorStatics$().aI(3, this.Z, f);
  var x$10 = $m_sci_VectorStatics$().aI(2, this.Y, f);
  var x$11 = $m_sci_VectorStatics$().cU(this.g, f);
  return new $c_sci_Vector6(x$1, this.aA, x$2, this.aq, x$3, this.ae, x$4, this.aa, x$5, this.a7, x$6, x$7, x$8, x$9, x$10, x$11, this.h);
});
$p.dj = (function() {
  return 11;
});
$p.dB = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.af;
      break;
    }
    case 2: {
      return this.ag;
      break;
    }
    case 3: {
      return this.ah;
      break;
    }
    case 4: {
      return this.ai;
      break;
    }
    case 5: {
      return this.W;
      break;
    }
    case 6: {
      return this.a1;
      break;
    }
    case 7: {
      return this.a0;
      break;
    }
    case 8: {
      return this.Z;
      break;
    }
    case 9: {
      return this.Y;
      break;
    }
    case 10: {
      return this.g;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.ch = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().gL(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector6(this.f, this.aA, this.af, this.aq, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.ch.call(this, suffix, k);
  }
});
$p.M = (function(f) {
  return this.dg(f);
});
$p.T = (function(elem) {
  return this.bD(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.a7) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.W.a.length) ? this.W.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.a1.a.length) ? this.a1.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a0.a.length) ? this.a0.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.Z.a.length) ? this.Z.a[i3].a[i2].a[i1] : ((i2 < this.Y.a.length) ? this.Y.a[i2].a[i1] : this.g.a[i1])))));
    } else if ((index >= this.aa)) {
      var io$2 = ((index - this.aa) | 0);
      return this.ai.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ae)) {
      var io$3 = ((index - this.ae) | 0);
      return this.ah.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aq)) {
      var io$4 = ((index - this.aq) | 0);
      return this.ag.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.aA)) {
      var io$5 = ((index - this.aA) | 0);
      return this.af.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bk(index);
  }
});
function $isArrayOf_sci_Vector6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cS)));
}
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  cS: 1,
  aq: 1,
  ar: 1,
  al: 1,
  A: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  q: 1,
  z: 1,
  B: 1,
  t: 1,
  o: 1,
  E: 1,
  C: 1,
  u: 1,
  n: 1,
  K: 1,
  a: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.bj = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.bj = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.bm = (function() {
  return "IndexedSeq";
});
$p.e = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.M = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.n = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.be = (function(len) {
  var x = this.bj.o();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bt = (function(size) {
});
$p.b7 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.o = (function() {
  return this.bj.o();
});
$p.q = (function() {
  return this.bj.o();
});
$p.te = (function(x) {
  var this$1 = this.bj;
  var str = ("" + $cToS(x));
  this$1.t = (this$1.t + str);
  return this;
});
$p.v = (function() {
  return this.bj.t;
});
$p.k5 = (function(ct) {
  return ((ct.bl() === $d_C.l()) ? this.wy() : $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, ct));
});
$p.wy = (function() {
  var len = this.bj.o();
  var arr = new $ac_C(len);
  this.bj.rP(0, len, arr, 0);
  return arr;
});
$p.r3 = (function(xs) {
  if ((xs instanceof $c_sci_WrappedString)) {
    var this$3 = this.bj;
    var str = xs.bM;
    this$3.t = (("" + this$3.t) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.bj.r2(xs.cC);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.bj;
    var s = xs.bj;
    this$4.t = (("" + this$4.t) + s);
  } else {
    var ks = xs.q();
    if ((ks !== 0)) {
      var b = this.bj;
      if ((ks > 0)) {
        b.o();
      }
      var it = xs.e();
      while (it.l()) {
        var c = $uC(it.d());
        var str$1 = ("" + $cToS(c));
        b.t = (b.t + str$1);
      }
    }
  }
  return this;
});
$p.c = (function() {
  return (this.bj.o() === 0);
});
$p.aE = (function() {
  return $m_scm_IndexedSeq$();
});
$p.aM = (function() {
  return this.bj.t;
});
$p.as = (function(elem) {
  return this.te($uC(elem));
});
$p.gX = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).r3(coll);
});
$p.fA = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).r3(coll);
});
$p.b = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.bj.ri(i));
});
$p.x = (function(i) {
  return $bC(this.bj.ri(i));
});
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d9)));
}
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  d9: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  F: 1,
  a9: 1,
  L: 1,
  J: 1,
  I: 1,
  V: 1,
  t: 1,
  o: 1,
  W: 1,
  b6: 1,
  a: 1
}));
function $isArrayOf_scm_LinkedHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iN)));
}
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().k2($thiz);
  $thiz.cL = buf.cL;
  $thiz.e2 = buf.e2;
  $thiz.ji = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.jj = ((1 + $thiz.jj) | 0);
  if ($thiz.ji) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.jj = 0;
  this.cL = null;
  this.e2 = null;
  this.ji = false;
  this.cM = 0;
  this.jj = 0;
  this.cL = $m_sci_Nil$();
  this.e2 = null;
  this.ji = false;
  this.cM = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.bt = (function(size) {
});
$p.cR = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.T = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.dv = (function(suffix) {
  return $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix);
});
$p.M = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.e = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.cL.e(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.jj)));
});
$p.ea = (function() {
  return $m_scm_ListBuffer$();
});
$p.x = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.cL, i);
});
$p.o = (function() {
  return this.cM;
});
$p.q = (function() {
  return this.cM;
});
$p.c = (function() {
  return (this.cM === 0);
});
$p.fL = (function() {
  this.ji = (!this.c());
  return this.cL;
});
$p.tn = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.cM === 0)) {
    this.cL = last1;
  } else {
    this.e2.ao = last1;
  }
  this.e2 = last1;
  this.cM = ((1 + this.cM) | 0);
  return this;
});
$p.k2 = (function(xs) {
  var it = xs.e();
  if (it.l()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.d(), $m_sci_Nil$());
    this.cL = last0;
    while (it.l()) {
      var last1 = new $c_sci_$colon$colon(it.d(), $m_sci_Nil$());
      last0.ao = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.cM = len;
    this.e2 = last0;
  }
  return this;
});
$p.ta = (function(xs) {
  var it = xs.e();
  if (it.l()) {
    var fresh = new $c_scm_ListBuffer().k2(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.cM === 0)) {
      this.cL = fresh.cL;
    } else {
      this.e2.ao = fresh.cL;
    }
    this.e2 = fresh.e2;
    this.cM = ((this.cM + fresh.cM) | 0);
  }
  return this;
});
$p.bm = (function() {
  return "ListBuffer";
});
$p.b7 = (function(elems) {
  return this.ta(elems);
});
$p.as = (function(elem) {
  return this.tn(elem);
});
$p.aM = (function() {
  return this.fL();
});
$p.b = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.cL, i);
});
$p.aE = (function() {
  return $m_scm_ListBuffer$();
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d8)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  d8: 1,
  bh: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  F: 1,
  bi: 1,
  J: 1,
  I: 1,
  aT: 1,
  u: 1,
  n: 1,
  a9: 1,
  L: 1,
  K: 1,
  a: 1
}));
function $p_scm_ArrayBuffer__foldl__I__I__O__F2__O($thiz, start, end, z, op) {
  while (true) {
    if ((start === end)) {
      return z;
    } else {
      var temp$start = ((1 + start) | 0);
      var temp$z = op.bd(z, $thiz.dt.a[start]);
      start = temp$start;
      z = temp$z;
    }
  }
}
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.ex = 0;
  $thiz.dt = initialElements;
  $thiz.aV = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.ex = 0;
  this.dt = null;
  this.aV = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.cR = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.T = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.dv = (function(suffix) {
  return $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix);
});
$p.M = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.e = (function() {
  return this.wJ().e();
});
$p.n = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.be = (function(len) {
  var x = this.aV;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.aV;
});
$p.m6 = (function(n) {
  this.dt = $m_scm_ArrayBuffer$().sk(this.dt, this.aV, n);
});
$p.bt = (function(size) {
  if (((size > this.aV) && (size >= 1))) {
    this.m6(size);
  }
});
$p.x = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().iq(n, (((-1) + this.aV) | 0));
  }
  if ((hi > this.aV)) {
    throw $m_scg_CommonErrors$().iq((((-1) + hi) | 0), (((-1) + this.aV) | 0));
  }
  return this.dt.a[n];
});
$p.wH = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $m_scg_CommonErrors$().iq(index, (((-1) + this.aV) | 0));
  }
  if ((hi > this.aV)) {
    throw $m_scg_CommonErrors$().iq((((-1) + hi) | 0), (((-1) + this.aV) | 0));
  }
  this.ex = ((1 + this.ex) | 0);
  this.dt.a[index] = elem;
});
$p.o = (function() {
  return this.aV;
});
$p.wJ = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.ex)));
});
$p.ea = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.tk = (function(elem) {
  this.ex = ((1 + this.ex) | 0);
  var newSize = ((1 + this.aV) | 0);
  this.m6(newSize);
  this.aV = newSize;
  this.wH((((-1) + this.aV) | 0), elem);
  return this;
});
$p.qY = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.aV;
    if ((elemsLength > 0)) {
      this.ex = ((1 + this.ex) | 0);
      this.m6(((this.aV + elemsLength) | 0));
      $m_s_Array$().ci(elems.dt, 0, this.dt, this.aV, elemsLength);
      this.aV = ((this.aV + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.bm = (function() {
  return "ArrayBuffer";
});
$p.bZ = (function(xs, start, len) {
  var srcLen = this.aV;
  var destLen = $m_jl_reflect_Array$().aD(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().ci(this.dt, 0, xs, start, copied);
  }
  return copied;
});
$p.fy = (function(z, op) {
  return $p_scm_ArrayBuffer__foldl__I__I__O__F2__O(this, 0, this.aV, z, op);
});
$p.iC = (function(op) {
  return ((this.aV > 0) ? $p_scm_ArrayBuffer__foldl__I__I__O__F2__O(this, 1, this.aV, this.dt.a[0], op) : $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op));
});
$p.b7 = (function(elems) {
  return this.qY(elems);
});
$p.as = (function(elem) {
  return this.tk(elem);
});
$p.aE = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.b = (function(v1) {
  return this.x((v1 | 0));
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cU)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  cU: 1,
  bh: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  F: 1,
  bi: 1,
  J: 1,
  I: 1,
  aT: 1,
  d7: 1,
  V: 1,
  t: 1,
  o: 1,
  W: 1,
  u: 1,
  n: 1,
  K: 1,
  a: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.eK = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.eK = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.bt = (function(size) {
});
$p.bm = (function() {
  return "IndexedSeq";
});
$p.e = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.M = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.n = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.be = (function(len) {
  var x = (this.eK.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cR = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.T = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.dv = (function(suffix) {
  return $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.ea = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.x = (function(index) {
  return this.eK[index];
});
$p.o = (function() {
  return (this.eK.length | 0);
});
$p.q = (function() {
  return (this.eK.length | 0);
});
$p.c6 = (function() {
  return "WrappedArray";
});
$p.aM = (function() {
  return this;
});
$p.as = (function(elem) {
  this.eK.push(elem);
  return this;
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  return this.eK[index];
});
$p.aE = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  jO: 1,
  bh: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  F: 1,
  bi: 1,
  J: 1,
  I: 1,
  aT: 1,
  u: 1,
  n: 1,
  V: 1,
  t: 1,
  o: 1,
  W: 1,
  d7: 1,
  L: 1,
  a: 1
}));
$L0 = new $c_RTLong(0, 0);
$d_J.z = $L0;
var $t_Lsi\uff3ftool_adversaries_Stage$__Setup = null;
var $t_Lsi\uff3ftool_adversaries_Stage$__AfterRavage = null;
var $t_Lsi\uff3ftool_adversaries_Stage$__Ravage = null;
var $t_Lsi\uff3ftool_adversaries_Stage$__AfterBuild = null;
var $t_Lsi\uff3ftool_adversaries_Stage$__Build = null;
var $t_Lsi\uff3ftool_adversaries_Stage$__Explore = null;
var $t_Lsi\uff3ftool_adversaries_Stage$__RuleChange = null;
var $t_Lsi\uff3ftool_adversaries_Stage$__HighImmigration = null;
$s_Lsi\uff3ftool_SIAdversaryTool__main__AT__V(new ($d_T.r().C)([]));
//# sourceMappingURL=main.js.map
