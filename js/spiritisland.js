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
        return null.xa();
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
        return instance.l(x0);
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0);
      } else {
        return $c_O.prototype.l.call(instance, x0);
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
    return instance.xb(x0);
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
$p.l = (function(that) {
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
$p.q = (function(srcPos, dest, destPos, length) {
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
$p.q = (function(srcPos, dest, destPos, length) {
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
$p.q = (function(srcPos, dest, destPos, length) {
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
$p.q = (function(srcPos, dest, destPos, length) {
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
$p.q = (function(srcPos, dest, destPos, length) {
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
$p.q = (function(srcPos, dest, destPos, length) {
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
$p.q = (function(srcPos, dest, destPos, length) {
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
$p.q = (function(srcPos, dest, destPos, length) {
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
$p.q = (function(srcPos, dest, destPos, length) {
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
  $p.q = (function(srcPos, dest, destPos, length) {
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
$p.vh = (function(trys, combinator) {
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
    var arr = trys.map(((x$1) => ((x$1 instanceof $c_s_util_Failure) ? new $c_s_Some(x$1.ds) : $m_s_None$())));
    return new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError($m_sci_IndexedSeq$().mb($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), arr))));
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
$p.ih = (function(this$, s1, c) {
  return $m_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$().tQ(this$, s1, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((a, v1) => c.ii(a, v1))));
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
$p.tQ = (function(s1, s2, combinator) {
  return new $c_Lcom_raquo_airstream_combine_CombineSignalN($m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_airstream_core_Signal.r().C)([s1.iD(), s2.iD()]))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((arr) => combinator.ba(arr[0], arr[1]))));
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
$p.uN = (function(parent, onTry) {
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
  return (($objectGetClass($thiz).mh() + "@") + $thiz.u());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.eb();
  return ((x === (void 0)) ? $thiz.e7() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().mW(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))), $m_s_PartialFunction$().j4, true);
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
  this.sD = null;
  $n_Lcom_raquo_airstream_core_Protected$ = this;
  this.sD = new $c_Lcom_raquo_airstream_core_Protected();
}
$p = $c_Lcom_raquo_airstream_core_Protected$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Protected$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Protected$() {
}
$h_Lcom_raquo_airstream_core_Protected$.prototype = $p;
$p.vs = (function(minRank, observables) {
  var elem = 0;
  elem = minRank;
  var i = 0;
  var len = (observables.length | 0);
  while ((i < len)) {
    var observable = observables[i];
    var rank = observable.ef();
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
  this.fL = 0;
  this.fL = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.s4 = (function() {
  if ((this.fL === 2147483647)) {
    this.fL = 1;
  } else {
    this.fL = ((1 + this.fL) | 0);
  }
  return this.fL;
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
  this.kc = null;
  this.hj = null;
  this.kd = 0;
  this.kc = code;
  this.hj = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().iy();
  this.kd = ((x === (void 0)) ? 1 : ((1 + x.kd) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().iI === (-1)) || (this.kd > $m_Lcom_raquo_airstream_core_Transaction$().iI))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().cV(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().iI));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().bK) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().eU.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().lM(this);
  }
}
$p = $c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
}
$h_Lcom_raquo_airstream_core_Transaction.prototype = $p;
$p.tS = (function(observable) {
  var x = this.hj;
  var x$1 = ((x === (void 0)) ? (void 0) : x.al(observable));
  return ((x$1 === (void 0)) ? false : x$1);
});
$p.up = (function(observable) {
  var x = this.hj;
  if ((x === (void 0))) {
    var newQueue = new $c_Lcom_raquo_airstream_util_JsPriorityQueue(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((observable$1) => observable$1.k7)));
    this.hj = newQueue;
    var $x_1 = newQueue;
  } else {
    var $x_1 = x;
  }
  $x_1.uo(observable);
});
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction, "com.raquo.airstream.core.Transaction", ({
  dL: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.iI = 0;
  this.ne = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.iI = 1000;
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
    transaction.kc.b(transaction);
    var x = transaction.hj;
    if ((x !== (void 0))) {
      while (((x.ek.length | 0) !== 0)) {
        if (((x.ek.length | 0) === 0)) {
          throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to dequeue an empty JsPriorityQueue");
        }
        $f_Lcom_raquo_airstream_combine_CombineObservable__syncFire__Lcom_raquo_airstream_core_Transaction__V(x.ek.shift(), transaction);
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
  if ((($thiz.iJ.length | 0) === 0)) {
    if ((($thiz.eU.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
        while ((($thiz.eU.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().lM($thiz.eU.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
      while ((($thiz.iJ.length | 0) > 0)) {
        var callback = $thiz.iJ.shift();
        try {
          callback.b(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().cV(e$2);
        }
      }
      while ((($thiz.eU.length | 0) > 0)) {
        var _trx = $thiz.eU.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().lM(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.bK = false;
  this.iJ = null;
  this.eU = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.bK = false;
  this.iJ = $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().B(new ($d_F1.r().C)([])));
  this.eU = $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
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
  return $thiz.eV.get(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.iK.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.iK.shift();
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.eV.set(parent, newChildren);
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
      (!(!$thiz.eV.delete(parent)));
    }
    return nextChild;
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.iK = null;
  this.eV = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.iK = $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.eV = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.lM = (function(newTransaction) {
  var x = this.iy();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().rk(newTransaction);
    this.uj(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.uj = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.iy();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().i(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.vR(transaction$tailLocal1);
    transaction$tailLocal1.kc = $m_Lcom_raquo_airstream_core_Transaction$().ne;
    var maybeNextTransaction = this.iy();
    if ($m_sr_BoxesRunTime$().i(maybeNextTransaction, (void 0))) {
      if (((this.eV.size | 0) > 0)) {
        var numChildren = new $c_sr_IntRef(0);
        this.eV.forEach(((numChildren) => ((transactions, _$4) => {
          var ev$12 = ((numChildren.b3 + (transactions.length | 0)) | 0);
          numChildren.b3 = ev$12;
        }))(numChildren));
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.b3) + " children for ") + (this.eV.size | 0)) + " transactions remain. This is a bug in Airstream."));
      } else {
        return (void 0);
      }
    } else {
      $m_Lcom_raquo_airstream_core_Transaction$().rk(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.vR = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().i(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.iy();
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
$p.iy = (function() {
  return this.iK[0];
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
$p.tA = (function(onStart, onStop) {
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
  var index = ($thiz.ei.indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.ei.splice(index, 1);
    if ((!$thiz.cm.c())) {
      subscription.s7();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.iO.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.iO.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.nN = null;
  this.ei = null;
  this.fM = false;
  this.iO = null;
  this.cm = null;
  this.fN = 0;
  this.nN = onAccessAfterKilled;
  this.ei = $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.fM = true;
  this.iO = $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.cm = $m_s_None$();
  this.fN = 0;
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $p;
$p.qV = (function() {
  if ((!(!this.cm.c()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.nN);
      this.cm = new $c_s_Some(newOwner);
      this.fM = false;
      this.fN = 0;
      var i = 0;
      var originalNumSubs = (this.ei.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.fN) | 0);
        this.ei[ix].s6(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.fM = true;
      this.fN = 0;
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
$p.ue = (function() {
  if ((!this.cm.c())) {
    this.fM = false;
    var arr = this.ei;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].s7();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.cm;
    if ((!this$4.c())) {
      this$4.E().mt();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.fM = true;
    this.cm = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.tp = (function(subscription, prepend) {
  if (prepend) {
    this.fN = ((1 + this.fN) | 0);
    this.ei.unshift(subscription);
  } else {
    this.ei.push(subscription);
  }
  var this$1 = this.cm;
  if ((!this$1.c())) {
    var x0 = this$1.E();
    subscription.s6(x0);
  }
});
$p.vY = (function(subscription) {
  if (this.fM) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.iO.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  dX: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.iP = null;
  this.nO = null;
  this.iQ = null;
  this.iP = dynamicOwner;
  this.nO = activate;
  this.iQ = $m_s_None$();
  dynamicOwner.tp(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.jO = (function() {
  this.iP.vY(this);
});
$p.s6 = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.iQ = this.nO.b(owner);
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
  var this$1 = this.iQ;
  if ((!this$1.c())) {
    this$1.E().jO();
    this.iQ = $m_s_None$();
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
$p.iG = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => new $c_s_Some(activate.b(owner)))), prepend);
});
$p.st = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => {
    activate.b(owner);
    return $m_s_None$();
  })), prepend);
});
$p.wo = (function(dynamicOwner, observable, onNext) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iG(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(observable, onNext, owner))), false);
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
  $thiz.lY($m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.fG();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.fG().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.fG().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.fG().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.fG().push(subscription);
}
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.km)) {
    $thiz.nS.L();
    $thiz.km = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.nT = null;
  this.nS = null;
  this.km = false;
  this.nT = owner;
  this.nS = cleanup;
  this.km = false;
  owner.mE(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.jO = (function() {
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
  this.ej = null;
  this.eW = false;
  this.nU = activate;
  this.nV = deactivate;
  this.ej = $m_s_None$();
  this.eW = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.v9 = (function() {
  var this$1 = this.ej;
  return ((!this$1.c()) && (!this$1.E().iP.cm.c()));
});
$p.wi = (function(nextOwner) {
  if (this.eW) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.ej;
  if ((!this$1.c())) {
    var x0 = this$1.E();
    var x$2 = x0.iP;
    var $x_1 = (nextOwner === x$2);
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.v9() && (!nextOwner.cm.c()))) {
      this.eW = true;
    }
    var this$3 = this.ej;
    if ((!this$3.c())) {
      this$3.E().jO();
      this.ej = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iG(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((parentOwner) => {
      if ((!this.eW)) {
        this.nU.L();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        if ((!this.eW)) {
          this.nV.L();
        }
      })));
    })), false);
    this.ej = new $c_s_Some(newPilotSubscription);
    this.eW = false;
  }
});
$p.tN = (function() {
  if (this.eW) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.ej;
  if ((!this$1.c())) {
    this$1.E().jO();
  }
  this.ej = $m_s_None$();
});
var $d_Lcom_raquo_airstream_ownership_TransferableSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_TransferableSubscription, "com.raquo.airstream.ownership.TransferableSubscription", ({
  e3: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_util_JsPriorityQueue(getRank) {
  this.kq = null;
  this.ek = null;
  this.kq = getRank;
  this.ek = $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().rO(new $ac_O([])));
}
$p = $c_Lcom_raquo_airstream_util_JsPriorityQueue.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_util_JsPriorityQueue;
/** @constructor */
function $h_Lcom_raquo_airstream_util_JsPriorityQueue() {
}
$h_Lcom_raquo_airstream_util_JsPriorityQueue.prototype = $p;
$p.uo = (function(item) {
  var itemRank = (this.kq.b(item) | 0);
  var insertAtIndex = 0;
  var foundHigherRank = false;
  while (((insertAtIndex < (this.ek.length | 0)) && (!foundHigherRank))) {
    if (((this.kq.b(this.ek[insertAtIndex]) | 0) > itemRank)) {
      foundHigherRank = true;
    } else {
      insertAtIndex = ((1 + insertAtIndex) | 0);
    }
  }
  this.ek.splice(insertAtIndex, 0, item);
});
$p.al = (function(item) {
  return ((this.ek.indexOf(item) | 0) !== (-1));
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
    return $m_Lcom_raquo_airstream_custom_CustomSource$Config$().tA(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
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
$p.sv = (function(default$1) {
  return this.mV(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x) => x)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => new $c_s_util_Success(_$1))), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => new $c_s_util_Success(default$1.L()))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$2, _$3) => (_$2 === _$3))));
});
$p.lX = (function(default$1) {
  return this.mV(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => ("" + (!(!_$4))))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((str) => {
    try {
      return new $c_s_util_Success($m_sc_StringOps$().ww(str, str));
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
    storageVar.ws(this$1.E());
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
$p.fB = (function(key, syncOwner) {
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
    return $x_1.sw();
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
  return [...$m_sjsr_Compat$().wy(items)];
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
$p.v1 = (function(this$, item, fromIndex) {
  return ((this$.indexOf(item, fromIndex) | 0) !== (-1));
});
$p.uB = (function(this$, cb) {
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
  this.uc($m_Lcom_raquo_laminar_api_package$().t.wp().wq());
  this.of = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.tr = (function(parent, child) {
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
$p.vV = (function(parent, child) {
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
$p.v6 = (function(parent, newChild, referenceChild) {
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
$p.v5 = (function(parent, newChild, referenceChild) {
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
$p.vd = (function(node, ancestor) {
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
$p.te = (function(element, listener) {
  element.addEventListener(listener.fS.eY.hp, listener.kF, listener.kG);
});
$p.vW = (function(element, listener) {
  element.removeEventListener(listener.fS.eY.hp, listener.kF, listener.kG);
});
$p.ub = (function(tag) {
  return document.createElement(tag.kN);
});
$p.uP = (function(element, attr) {
  var x = this.uQ(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.kz.m1(x));
});
$p.uQ = (function(element, attr) {
  var domValue = element.bG.getAttributeNS(null, attr.hq);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.so = (function(element, attr, value) {
  this.wg(element, attr, attr.kz.ik(value));
});
$p.wg = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.vX(element, attr);
  } else {
    element.bG.setAttribute(attr.hq, domValue);
  }
});
$p.vX = (function(element, attr) {
  element.bG.removeAttribute(attr.hq);
});
$p.uR = (function(element, prop) {
  return element.bG[prop.dB];
});
$p.sp = (function(element, prop, value) {
  this.sq(element, prop, prop.kA.ik(value));
});
$p.sq = (function(element, prop, value) {
  element.bG[prop.dB] = value;
});
$p.wh = (function(element, styleProp, value) {
  var ref = element.bG;
  var styleCssName = styleProp.fQ;
  var prefixes = styleProp.fR;
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
$p.wf = (function(element, style, value) {
  var ref = element.bG;
  var styleCssName = style.fQ;
  var prefixes = style.fR;
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
$p.uc = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.pt);
});
$p.uU = (function(element, attr) {
  var x = this.uV(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.kB.m1(x));
});
$p.uV = (function(element, attr) {
  var $x_2 = element.mH();
  var this$2 = attr.iZ;
  var $x_1 = $x_2.getAttributeNS((this$2.c() ? null : this$2.E()), attr.kC);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.wk = (function(element, attr, value) {
  this.wl(element, attr, attr.kB.ik(value));
});
$p.wl = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.vZ(element, attr);
  } else {
    var this$1 = attr.iZ;
    if (this$1.c()) {
      element.mH().setAttribute(attr.iY, domValue);
    } else {
      var x0 = this$1.E();
      element.mH().setAttributeNS(x0, attr.iY, domValue);
    }
  }
});
$p.vZ = (function(element, attr) {
  var $x_1 = element.mH();
  var this$2 = attr.iZ;
  $x_1.removeAttributeNS((this$2.c() ? null : this$2.E()), attr.kC);
});
$p.ua = (function(text) {
  return document.createComment(text);
});
$p.ud = (function(text) {
  return document.createTextNode(text);
});
$p.va = (function(element) {
  return $m_sc_StringOps$().tR(element.tagName, 45);
});
$p.ug = (function(element, initial) {
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
$p.uf = (function(node) {
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
  this.ku = null;
  this.og = null;
  this.kt = null;
  this.ku = seq;
  this.og = scalaArray;
  this.kt = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.U = (function(f) {
  if ((this.ku !== null)) {
    this.ku.U(f);
  } else if ((this.kt !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().uB(this.kt, $m_sjs_js_Any$().rK(f));
  } else {
    $m_sc_ArrayOps$().uC(this.og, f);
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
  $thiz.sF = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    _$1.pd.bG.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.cW.cm.c()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((c) => {
      if (ignoreNextActivation.ji) {
        var ev$5 = false;
        ignoreNextActivation.ji = ev$5;
      } else {
        fn.b(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().st(element.cW, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((owner) => {
      activate.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element$2, owner));
    }))(element)), false);
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.fO = null;
  this.kv = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.fO = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  this.kv = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
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
  $thiz.eX = $thiz.ou;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().fO);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.hq, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().uP(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().so(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.sE = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().fO, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.iY, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().uU(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().wk(el$2, attr, value);
  })), separator);
}
/** @constructor */
function $c_Lcom_raquo_laminar_inputs_InputController$() {
  this.p6 = null;
  $n_Lcom_raquo_laminar_inputs_InputController$ = this;
  $m_Lcom_raquo_laminar_api_package$().t.sB();
  $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().t.mC()])));
  $m_Lcom_raquo_laminar_api_package$().t.sB();
  $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().t.mC(), $m_Lcom_raquo_laminar_api_package$().t.vL()])));
  $m_Lcom_raquo_laminar_api_package$().t.tL();
  $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().t.mC(), $m_Lcom_raquo_laminar_api_package$().t.h0()])));
  this.p6 = $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().B(new ($d_T.r().C)(["value", "checked"])));
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
  var prevChildRef = new $c_sr_ObjectRef(sentinelNode.aX().nextSibling);
  var lastIndexChild = new $c_sr_ObjectRef(sentinelNode);
  nextChildren.U(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextChild) => {
    if ((currentChildrenCount.b3 <= index.b3)) {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().ml(parentNode, nextChild, lastIndexChild.K, hooks);
      var ev$2 = nextChild.aX();
      prevChildRef.K = ev$2;
      ev$2 = null;
      var ev$3 = ((1 + currentChildrenCount.b3) | 0);
      currentChildrenCount.b3 = ev$3;
    } else if ((!$m_sr_BoxesRunTime$().i(nextChild.aX(), prevChildRef.K))) {
      if ((!(!(!prevChildren.has(nextChild.aX()))))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().ml(parentNode, nextChild, lastIndexChild.K, hooks);
        var ev$4 = nextChild.aX();
        prevChildRef.K = ev$4;
        ev$4 = null;
        var ev$5 = ((1 + currentChildrenCount.b3) | 0);
        currentChildrenCount.b3 = ev$5;
      } else {
        while (((!$m_sr_BoxesRunTime$().i(nextChild.aX(), prevChildRef.K)) && (!$p_Lcom_raquo_laminar_inserters_ChildrenInserter$__containsRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Z($thiz, nextChildrenMap, prevChildRef.K)))) {
          var nextPrevChildRef = prevChildRef.K.nextSibling;
          $m_Lcom_raquo_laminar_nodes_ParentNode$().sc(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.K));
          var ev$6 = nextPrevChildRef;
          prevChildRef.K = ev$6;
          ev$6 = null;
          var ev$7 = (((-1) + currentChildrenCount.b3) | 0);
          currentChildrenCount.b3 = ev$7;
        }
        if ((!$m_sr_BoxesRunTime$().i(nextChild.aX(), prevChildRef.K))) {
          $m_Lcom_raquo_laminar_nodes_ParentNode$().ml(parentNode, nextChild, lastIndexChild.K, hooks);
          var ev$8 = nextChild.aX();
          prevChildRef.K = ev$8;
          ev$8 = null;
        }
      }
    }
    if ((prevChildRef.K.nextSibling === null)) {
      var ev$9 = ((1 + index.b3) | 0);
      currentChildrenCount.b3 = ev$9;
    } else {
      var ev$10 = prevChildRef.K.nextSibling;
      prevChildRef.K = ev$10;
      ev$10 = null;
    }
    var ev$11 = nextChild;
    lastIndexChild.K = ev$11;
    ev$11 = null;
    var ev$12 = ((1 + index.b3) | 0);
    index.b3 = ev$12;
  })));
  while ((index.b3 < currentChildrenCount.b3)) {
    var nextPrevChildRef$1 = prevChildRef.K.nextSibling;
    $m_Lcom_raquo_laminar_nodes_ParentNode$().sc(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.K));
    var ev$13 = nextPrevChildRef$1;
    prevChildRef.K = ev$13;
    ev$13 = null;
    var ev$14 = (((-1) + currentChildrenCount.b3) | 0);
    currentChildrenCount.b3 = ev$14;
  }
  return currentChildrenCount.b3;
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
$p.tw = (function(childrenSource, renderableSeq, renderableNode, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((ctx, owner, hooks) => {
    if ((!ctx.hm)) {
      ctx.rE();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childrenSource, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx$2) => ((components) => {
      this.wr(($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(components, null, null)), ctx$2, hooks);
    }))(ctx)), owner);
  })), initialHooks);
});
$p.wr = (function(newChildren, ctx, hooks) {
  if ((!ctx.hm)) {
    ctx.rE();
  }
  var newChildrenMap = $m_Lcom_raquo_laminar_inserters_InsertContext$().vJ(newChildren);
  ctx.hk = $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__updateChildren__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_Seq__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__I__O__I(this, ctx.fP, newChildren, newChildrenMap, ctx.iW, ctx.hl, ctx.hk, hooks);
  ctx.fP = newChildrenMap;
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
  this.iW = null;
  this.hl = null;
  this.hm = false;
  this.hk = 0;
  this.fP = null;
  this.iW = parentNode;
  this.hl = sentinelNode;
  this.hm = strictMode;
  this.hk = extraNodeCount;
  this.fP = extraNodesMap;
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext.prototype = $p;
$p.rE = (function() {
  if ((this.hm || (this.hk !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().uf(this.iW.bG)));
  }
  if ((this.fP === null)) {
    this.fP = new Map();
  }
  if ((!(!(!(this.hl.aX() instanceof Comment))))) {
    var contentNode = this.hl;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().v6(this.iW.bG, newSentinelNode.kH, contentNode.aX());
    this.hl = newSentinelNode;
    this.hk = 1;
    this.fP.set(contentNode.aX(), contentNode);
  }
  this.hm = true;
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
$p.w6 = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gJ(parentNode, sentinelNode, hooks);
  return this.wD(parentNode, sentinelNode, strictMode);
});
$p.wD = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, 0, (strictMode ? new Map() : null));
});
$p.vJ = (function(nodes) {
  var acc = new Map();
  nodes.U(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((node) => {
    acc.set(node.aX(), node);
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
  this.eY = null;
  this.ho = false;
  this.iX = false;
  this.hn = null;
  this.eY = eventProp;
  this.ho = shouldUseCapture;
  this.iX = shouldBePassive;
  this.hn = processor;
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $p;
$p.vr = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.hn.b(ev);
    return (this$2.c() ? $m_s_None$() : new $c_s_Some((this$2.E(), value.L())));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.eY, this.ho, this.iX, newProcessor);
});
$p.jP = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.hn.b(ev);
    return (this$2.c() ? $m_s_None$() : new $c_s_Some((this$2.E(), value)));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.eY, this.ho, this.iX, newProcessor);
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
$p.gQ = (function(eventProp, shouldUseCapture, shouldBePassive) {
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
  this.sH = null;
  this.sI = null;
  this.sJ = null;
  this.sK = null;
  this.sH = "http://www.w3.org/2000/svg";
  this.sI = "http://www.w3.org/1999/xlink";
  this.sJ = "http://www.w3.org/XML/1998/namespace";
  this.sK = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.vw = (function(namespace) {
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
  this.kD = null;
  this.pd = thisNode;
  this.kD = owner;
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
  this.sL = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.sL = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
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
  this.cH = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableText$ = this;
  this.cH = new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x) => x)), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => ("" + (_$1 | 0)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => ("" + (+_$2)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => ("" + (!(!_$3))))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => _$4.wu())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
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
$p.gJ = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.iH(nextParent);
  if ((hooks !== (void 0))) {
    hooks.vN(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().tr(parent.aX(), child.aX());
  if (appended) {
    child.iC(nextParent);
  }
  return appended;
});
$p.sc = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().i(child.aX().parentNode, parent.aX())) {
    child.iH($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().vV(parent.aX(), child.aX());
    child.iC($m_s_None$());
  }
  return removed;
});
$p.ml = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.iH(nextParent);
  if ((hooks !== (void 0))) {
    hooks.vN(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().v5(parent.aX(), newChild.aX(), referenceChild.aX());
  newChild.iC(nextParent);
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
$p.wC = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iG(element.cW, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
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
  this.sM = false;
  this.hs = null;
  this.fT = null;
  this.kR = null;
  this.kQ = false;
  this.pu = 0;
  this.pv = 0;
  this.sN = null;
  $n_jl_FloatingPointBits$ = this;
  this.sM = true;
  this.hs = new ArrayBuffer(8);
  this.fT = new Int32Array(this.hs, 0, 2);
  new Float32Array(this.hs, 0, 2);
  this.kR = new Float64Array(this.hs, 0, 1);
  this.fT[0] = 16909060;
  this.kQ = ((new Int8Array(this.hs, 0, 8)[0] | 0) === 1);
  this.pu = (this.kQ ? 0 : 1);
  this.pv = (this.kQ ? 1 : 0);
  this.sN = null;
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
    this.kR[0] = value;
    return ((this.fT[0] | 0) ^ (this.fT[1] | 0));
  }
});
$p.uk = (function(value) {
  this.kR[0] = value;
  var value$1 = (this.fT[this.pu] | 0);
  return new $c_RTLong((this.fT[this.pv] | 0), value$1);
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
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().de("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
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
  var PatBC = $m_jl_StackTrace$StringRE$().de("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().de("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().de("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().de("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().de("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
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
  if ((!(!$m_jl_Utils$Cache$().kW.call(dict, encodedName)))) {
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
    $thiz.kT = dict;
    $thiz.cI = (((1 | $thiz.cI) << 24) >> 24);
  }
  return $thiz.kT;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.cI) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.kT);
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
    $thiz.kU = dict;
    $thiz.cI = (((2 | $thiz.cI) << 24) >> 24);
  }
  return $thiz.kU;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.cI) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.kU);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.cI) << 24) >> 24) === 0)) {
    $thiz.kS = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.cI = (((4 | $thiz.cI) << 24) >> 24);
  }
  return $thiz.kS;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.cI) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.kS);
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
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().de("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().ck("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().ck("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().ck("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().ck("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().ck("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().ck("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().ck("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().ck("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().ck("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().ck("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().ck("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().ck("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().ck("Line (\\d+).*script (?:in )?(\\S+)", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().ck("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().de("^(.*)@(.+):(\\d+)$");
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
  var lineRE = $m_jl_StackTrace$StringRE$().de("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
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
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().de("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().de("<anonymous function>"), "{anonymous}");
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
  this.kT = null;
  this.kU = null;
  this.kS = null;
  this.cI = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.uv = (function(jsError) {
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
$p.de = (function(this$) {
  return new RegExp(this$);
});
$p.ck = (function(this$, mods) {
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
  this.kV = null;
  this.pw = null;
  $n_jl_System$SystemProperties$ = this;
  this.kV = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.pw = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.mg = (function(key, default$1) {
  if ((this.kV !== null)) {
    var dict = this.kV;
    return ((!(!$m_jl_Utils$Cache$().kW.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.pw.mg(key, default$1);
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
  this.kW = null;
  $n_jl_Utils$Cache$ = this;
  this.kW = Object.prototype.hasOwnProperty;
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
$p.tF = (function(a, key) {
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
    var lo = t.r;
    var hi = t.w;
    var i$2 = i;
    var t$1 = b.a[i$2];
    var lo$1 = t$1.r;
    var hi$1 = t$1.w;
    if ((!((lo === lo$1) && (hi === hi$1)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.jH = (function(a, b) {
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
$p.uw = (function(a, value) {
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
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.u9 = (function(original, newLength, newType) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = newType.F.Q().F.U(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.u1 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_B(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.u7 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_S(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.u5 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_I(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.u6 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_J(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.u2 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_C(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.u4 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_F(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.u3 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_D(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.u8 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_Z(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.aQ = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).F.Q().F.U(retLength);
  original.q(from, ret, 0, copyLength);
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
$p.vg = (function(x) {
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
$p.vf = (function(x) {
  var unscaledValueWithSign = x.xp().v();
  if ((unscaledValueWithSign === "0")) {
    return new $c_ju_Formatter$Decimal(false, "0", 0);
  } else {
    var negative = (unscaledValueWithSign.charCodeAt(0) === 45);
    return new $c_ju_Formatter$Decimal(negative, (negative ? unscaledValueWithSign.substring(1) : unscaledValueWithSign), x.xh());
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
  var digits = $thiz.dD;
  var digitsLen = digits.length;
  if ((roundingPos < 0)) {
    return new $c_ju_Formatter$Decimal($thiz.dC, "0", 0);
  } else if ((roundingPos >= digitsLen)) {
    return $thiz;
  } else if ((digits.charCodeAt(roundingPos) < 53)) {
    return ((roundingPos === 0) ? new $c_ju_Formatter$Decimal($thiz.dC, "0", 0) : new $c_ju_Formatter$Decimal($thiz.dC, digits.substring(0, roundingPos), (($thiz.dh - ((digitsLen - roundingPos) | 0)) | 0)));
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
    var newScale = (($thiz.dh - ((digitsLen - pos) | 0)) | 0);
    return new $c_ju_Formatter$Decimal($thiz.dC, newUnscaledValue, newScale);
  }
}
/** @constructor */
function $c_ju_Formatter$Decimal(negative, unscaledValue, scale) {
  this.dC = false;
  this.dD = null;
  this.dh = 0;
  this.dC = negative;
  this.dD = unscaledValue;
  this.dh = scale;
}
$p = $c_ju_Formatter$Decimal.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$Decimal;
/** @constructor */
function $h_ju_Formatter$Decimal() {
}
$h_ju_Formatter$Decimal.prototype = $p;
$p.rY = (function() {
  return (this.dD === "0");
});
$p.sj = (function(precision) {
  $m_ju_Formatter$();
  if ((!(precision > 0))) {
    throw new $c_jl_AssertionError("Decimal.round() called with non-positive precision");
  }
  return $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, precision);
});
$p.wj = (function(newScale) {
  var roundingPos = ((((this.dD.length + newScale) | 0) - this.dh) | 0);
  var rounded = $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, roundingPos);
  $m_ju_Formatter$();
  if ((!(rounded.rY() || (rounded.dh <= newScale)))) {
    throw new $c_jl_AssertionError("roundAtPos returned a non-zero value with a scale too large");
  }
  return ((rounded.rY() || (rounded.dh === newScale)) ? rounded : new $c_ju_Formatter$Decimal(this.dC, (("" + rounded.dD) + $m_ju_Formatter$().mq(((newScale - rounded.dh) | 0))), newScale));
});
$p.v = (function() {
  return (((((("Decimal(" + this.dC) + ", ") + this.dD) + ", ") + this.dh) + ")");
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
  this.r = 0;
  this.w = 0;
  this.r = lo;
  this.w = hi;
}
$p = $c_RTLong.prototype = new $h_O();
$p.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $p;
$p.l = (function(that) {
  return ((that instanceof $c_RTLong) && ((this.r === that.r) && (this.w === that.w)));
});
$p.u = (function() {
  return (this.r ^ this.w);
});
$p.v = (function() {
  return $m_RTLong$().mD(this.r, this.w);
});
$p.xl = (function() {
  return this.r;
});
$p.xk = (function() {
  return $m_RTLong$().sa(this.r, this.w);
});
$p.xj = (function() {
  return $m_RTLong$().iw(this.r, this.w);
});
$p.x1 = (function() {
  return ((this.r << 24) >> 24);
});
$p.xi = (function() {
  return ((this.r << 16) >> 16);
});
$p.xc = (function() {
  return this.r;
});
$p.xd = (function() {
  return this;
});
$p.x6 = (function() {
  return $m_RTLong$().sa(this.r, this.w);
});
$p.x4 = (function() {
  return $m_RTLong$().iw(this.r, this.w);
});
$p.x3 = (function(that) {
  return $m_RTLong$().s8(this.r, this.w, that.r, that.w);
});
$p.x2 = (function(that) {
  return $m_RTLong$().s8(this.r, this.w, that.r, that.w);
});
$p.x5 = (function(b) {
  return ((this.r === b.r) && (this.w === b.w));
});
$p.xf = (function(b) {
  return (!((this.r === b.r) && (this.w === b.w)));
});
$p.wS = (function(b) {
  var ahi = this.w;
  var bhi = b.w;
  return ((ahi === bhi) ? (((-2147483648) ^ this.r) < ((-2147483648) ^ b.r)) : (ahi < bhi));
});
$p.wT = (function(b) {
  var ahi = this.w;
  var bhi = b.w;
  return ((ahi === bhi) ? (((-2147483648) ^ this.r) <= ((-2147483648) ^ b.r)) : (ahi < bhi));
});
$p.wO = (function(b) {
  var ahi = this.w;
  var bhi = b.w;
  return ((ahi === bhi) ? (((-2147483648) ^ this.r) > ((-2147483648) ^ b.r)) : (ahi > bhi));
});
$p.wP = (function(b) {
  var ahi = this.w;
  var bhi = b.w;
  return ((ahi === bhi) ? (((-2147483648) ^ this.r) >= ((-2147483648) ^ b.r)) : (ahi > bhi));
});
$p.xn = (function() {
  return new $c_RTLong((~this.r), (~this.w));
});
$p.wM = (function(b) {
  return new $c_RTLong((this.r | b.r), (this.w | b.w));
});
$p.wL = (function(b) {
  return new $c_RTLong((this.r & b.r), (this.w & b.w));
});
$p.wZ = (function(b) {
  return new $c_RTLong((this.r ^ b.r), (this.w ^ b.w));
});
$p.wU = (function(n) {
  var lo = this.r;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.w << n)) : (lo << n)));
});
$p.wR = (function(n) {
  var hi = this.w;
  return new $c_RTLong((((32 & n) === 0) ? (((this.r >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
});
$p.wQ = (function(n) {
  var hi = this.w;
  return new $c_RTLong((((32 & n) === 0) ? (((this.r >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
});
$p.xm = (function() {
  var lo = this.r;
  var hi = this.w;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)));
});
$p.wX = (function(b) {
  var alo = this.r;
  var ahi = this.w;
  var bhi = b.w;
  var lo = ((alo + b.r) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)));
});
$p.wV = (function(b) {
  var alo = this.r;
  var ahi = this.w;
  var bhi = b.w;
  var lo = ((alo - b.r) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)));
});
$p.wY = (function(b) {
  var alo = this.r;
  var blo = b.r;
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
$p.wN = (function(b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.ui(this.r, this.w, b.r, b.w), this$1.an);
});
$p.wW = (function(b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.vU(this.r, this.w, b.r, b.w), this$1.an);
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
$p.iw = (function(lo, hi) {
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
$p.x9 = (function(value) {
  return new $c_RTLong(value, (value >> 31));
});
$p.x8 = (function(value) {
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
$p.ui = (function(alo, ahi, blo, bhi) {
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
$p.vU = (function(alo, ahi, blo, bhi) {
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
  this.hu = null;
  this.kY = null;
  $n_s_Array$EmptyArrays$ = this;
  this.hu = new $ac_I(0);
  this.kY = new $ac_O(0);
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
  this.j4 = null;
  $n_s_PartialFunction$ = this;
  this.pQ = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2$2) => $m_s_PartialFunction$().pQ));
  this.j4 = new $c_s_PartialFunction$$anon$1();
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
$p.uC = (function(this$, f) {
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
  while (it.k()) {
    f.b(it.d());
  }
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $thiz.e();
  while ((res && it.k())) {
    res = (!(!p.b(it.d())));
  }
  return res;
}
function $f_sc_IterableOnceOps__exists__F1__Z($thiz, p) {
  var res = false;
  var it = $thiz.e();
  while (((!res) && it.k())) {
    res = (!(!p.b(it.d())));
  }
  return res;
}
function $f_sc_IterableOnceOps__foldLeft__O__F2__O($thiz, z, op) {
  if ($is_sc_IndexedSeq($thiz)) {
    return $p_sc_IterableOnceOps__loop$1__I__I__O__F2__sc_IndexedSeq__O($thiz, 0, $thiz.n(), z, op, $thiz);
  } else {
    var result = z;
    var it = $thiz.e();
    while (it.k()) {
      result = op.ba(result, it.d());
    }
    return result;
  }
}
function $f_sc_IterableOnceOps__reduceLeft__F2__O($thiz, op) {
  if ($is_sc_IndexedSeq($thiz)) {
    if (($thiz.n() > 0)) {
      var z = $thiz.x(0);
      return $p_sc_IterableOnceOps__loop$1__I__I__O__F2__sc_IndexedSeq__O($thiz, 1, $thiz.n(), z, op, $thiz);
    }
  }
  if (($thiz.p() === 0)) {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  }
  var it = $thiz.e();
  if (it.k()) {
    var acc = it.d();
    while (it.k()) {
      acc = op.ba(acc, it.d());
    }
    return acc;
  } else {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  }
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  switch ($thiz.p()) {
    case (-1): {
      return (!$thiz.e().k());
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
  while (((i < end) && it.k())) {
    $m_sr_ScalaRunTime$().d3(xs, i, it.d());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__sum__s_math_Numeric__O($thiz, num) {
  switch ($thiz.p()) {
    case (-1): {
      return $thiz.fv(0, new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((x$2$2, y$2$2) => $f_s_math_Numeric$IntIsIntegral__plus__I__I__I(num, (x$2$2 | 0), (y$2$2 | 0)))));
      break;
    }
    case 0: {
      return 0;
      break;
    }
    default: {
      return $thiz.iA(new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((x$2$2$1, y$2$2$1) => $f_s_math_Numeric$IntIsIntegral__plus__I__I__I(num, (x$2$2$1 | 0), (y$2$2$1 | 0)))));
    }
  }
}
function $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option($thiz, pf) {
  var sentinel = new $c_sc_IterableOnceOps$$anon$1($thiz);
  var it = $thiz.e();
  while (it.k()) {
    var x = pf.c5(it.d(), sentinel);
    if ((x !== sentinel)) {
      return new $c_s_Some(x);
    }
  }
  return $m_s_None$();
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.p() === 0) ? (("" + start) + end) : $thiz.eK($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).bj.s);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.bj;
  if ((start.length !== 0)) {
    jsb.s = (("" + jsb.s) + start);
  }
  var it = $thiz.e();
  if (it.k()) {
    var obj = it.d();
    jsb.s = (("" + jsb.s) + obj);
    while (it.k()) {
      jsb.s = (("" + jsb.s) + sep);
      var obj$1 = it.d();
      jsb.s = (("" + jsb.s) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.s = (("" + jsb.s) + end);
  }
  return b;
}
function $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O($thiz, evidence$2) {
  if (($thiz.p() >= 0)) {
    var destination = evidence$2.c1($thiz.p());
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
    while (it.k()) {
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
      var temp$acc = op$1.ba(acc, seq$1.x(at));
      at = temp$at;
      acc = temp$acc;
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.q4 = null;
  this.hx = null;
  this.q4 = head;
  this.hx = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.uX = (function() {
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
$p.tR = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
$p.jZ = (function(this$, from, until) {
  var start = ((from > 0) ? from : 0);
  var that = this$.length;
  var end = ((until < that) ? until : that);
  return ((start >= end) ? "" : this$.substring(start, end));
});
$p.ss = (function(this$, marginChar) {
  var sb = $ct_jl_StringBuilder__I__(new $c_jl_StringBuilder(), this$.length);
  var this$3 = new $c_sc_StringOps$$anon$1(this$, false);
  while ((this$3.bv < this$3.f3)) {
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
    sb.s = (("" + sb.s) + stripped);
  }
  return sb.s;
});
$p.ww = (function(this$, s) {
  if ((s === null)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "For input string: \"null\"");
  } else {
    _return: {
      var len = s.length;
      if ((len === 4)) {
        var i = 0;
        while ((i !== len)) {
          if (($m_jl_Character$().k1($m_jl_Character$().k3(s.charCodeAt(i))) !== $m_jl_Character$().k1($m_jl_Character$().k3("true".charCodeAt(i))))) {
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
            if (($m_jl_Character$().k1($m_jl_Character$().k3(s.charCodeAt(i$1))) !== $m_jl_Character$().k1($m_jl_Character$().k3("false".charCodeAt(i$1))))) {
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
$p.wF = (function(this$, arg) {
  return (false ? arg.xo() : arg);
});
$p.uF = (function(this$, args) {
  return $m_jl_String$().uD(this$, args.M(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((arg$2$2) => $m_sc_StringOps$().wF(this$, arg$2$2)))).k0($m_s_reflect_ManifestFactory$ObjectManifest$()));
});
$p.rS = (function(this$) {
  if ((this$ === "")) {
    throw new $c_ju_NoSuchElementException("head of empty String");
  } else {
    return this$.charCodeAt(0);
  }
});
$p.vi = (function(this$) {
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
    return $m_sc_StringOps$().jZ(this$, 1, this$.length);
  }
});
$p.rT = (function(this$) {
  if ((this$ === "")) {
    throw new $c_jl_UnsupportedOperationException("init of empty String");
  } else {
    return $m_sc_StringOps$().jZ(this$, 0, (((-1) + this$.length) | 0));
  }
});
$p.su = (function(this$, n) {
  var $x_1 = $m_sc_StringOps$();
  var y = this$.length;
  return $x_1.jZ(this$, 0, ((n < y) ? n : y));
});
$p.m3 = (function(this$, n) {
  var $x_1 = $m_sc_StringOps$();
  var y = this$.length;
  return $x_1.jZ(this$, ((n < y) ? n : y), this$.length);
});
$p.um = (function(this$, n) {
  return $m_sc_StringOps$().su(this$, ((this$.length - ((n > 0) ? n : 0)) | 0));
});
$p.mP = (function(this$, n) {
  return new $c_T2($m_sc_StringOps$().su(this$, n), $m_sc_StringOps$().m3(this$, n));
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
$p.ip = (function(index, max) {
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
    return $m_jl_Integer$().mG($m_jl_System$SystemProperties$().mg("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10);
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
  this.ln = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.m5 = (function() {
  var state = this.ln;
  if ((state === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "uninitialized");
  }
  return state.L();
});
$p.mk = (function(state) {
  if ((this.ln !== null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "already initialized");
  }
  this.ln = state;
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
$p.jU = (function(as, ix) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > (((-1) + as.a.length) | 0))) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I((((-1) + as.a.length) | 0));
  as.q(0, result, 0, ix);
  var srcPos = ((1 + ix) | 0);
  var length = (((-1) + ((as.a.length - ix) | 0)) | 0);
  as.q(srcPos, result, ix, length);
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
  as.q(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.q(ix, result, destPos, length);
  return result;
});
var $d_sci_Node = new $TypeData().i(0, "scala.collection.immutable.Node", ({
  aH: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.hI = 0;
  $n_sci_Node$ = this;
  this.hI = $doubleToInt((+Math.ceil(6.4)));
}
$p = $c_sci_Node$.prototype = new $h_O();
$p.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $p;
$p.cG = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.bY = (function(mask) {
  return (1 << mask);
});
$p.fy = (function(bitmap, bitpos) {
  return $m_jl_Integer$().bE((bitmap & (((-1) + bitpos) | 0)));
});
$p.bJ = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.fy(bitmap, bitpos));
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
  this.ls = null;
  this.aq = null;
  this.bA = null;
  this.d2 = null;
  this.hL = null;
  this.lt = null;
  $n_sci_VectorStatics$ = this;
  this.ls = new $ac_O(0);
  this.aq = new ($d_O.r().r().C)(0);
  this.bA = new ($d_O.r().r().r().C)(0);
  this.d2 = new ($d_O.r().r().r().r().C)(0);
  this.hL = new ($d_O.r().r().r().r().r().C)(0);
  this.lt = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.gO = (function(a, elem) {
  var alen = a.a.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.q(0, ac, 0, alen);
  ac.a[alen] = elem;
  return ac;
});
$p.N = (function(a, elem) {
  var ac = $m_ju_Arrays$().ab(a, ((1 + a.a.length) | 0));
  ac.a[(((-1) + ac.a.length) | 0)] = elem;
  return ac;
});
$p.gP = (function(elem, a) {
  var ac = new $ac_O(((1 + a.a.length) | 0));
  var length = a.a.length;
  a.q(0, ac, 1, length);
  ac.a[0] = elem;
  return ac;
});
$p.G = (function(elem, a) {
  var ac = $objectGetClass(a).F.Q().F.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.q(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.m7 = (function(level, a, f) {
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
      this.m7(l, a.a[i], f);
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
      return this.vo(a, f, i, v2);
    }
    i = ((1 + i) | 0);
  }
  return a;
});
$p.vo = (function(a, f, at, v2) {
  var ac = new $ac_O(a.a.length);
  if ((at > 0)) {
    a.q(0, ac, 0, at);
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
        return this.vp(n, a, f, i, v2);
      }
      i = ((1 + i) | 0);
    }
    return a;
  }
});
$p.vp = (function(n, a, f, at, v2) {
  var ac = $objectGetClass(a).F.Q().F.U(a.a.length);
  if ((at > 0)) {
    a.q(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = this.aI((((-1) + n) | 0), a.a[i], f);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.gI = (function(suffix1, xs) {
  if ($is_sci_Iterable(xs)) {
    if ((xs.mO(((32 - suffix1.a.length) | 0)) <= 0)) {
      var x1$2 = xs.O();
      switch (x1$2) {
        case 0: {
          return null;
          break;
        }
        case 1: {
          return this.N(suffix1, xs.o());
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
    var s = xs.p();
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
  this.gy = null;
  this.e0 = 0;
  this.bC = null;
  this.gy = _key;
  this.e0 = _hash;
  this.bC = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.uy = (function(k, h) {
  var _$this = this;
  while (true) {
    if (((h === _$this.e0) && $m_sr_BoxesRunTime$().i(k, _$this.gy))) {
      return _$this;
    } else if (((_$this.bC === null) || (_$this.e0 > h))) {
      return null;
    } else {
      _$this = _$this.bC;
    }
  }
});
$p.v = (function() {
  return ((((("Node(" + this.gy) + ", ") + this.e0) + ") -> ") + this.bC);
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
  return ((x === y) || ($is_jl_Number(x) ? this.ut(x, y) : ((x instanceof $Char) ? this.ur(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.ut = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.us(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.r;
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
$p.us = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      return (x2 === $m_RTLong$().iw(t.r, t.w));
    } else {
      return (false && yn.l(x2));
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.r;
    var hi$1 = t$1.w;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.r;
      var hi$2 = t$2.w;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return ($m_RTLong$().iw(lo$1, hi$1) === x3$3);
    } else {
      return (false && yn.l(new $c_RTLong(lo$1, hi$1)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.ur = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $c_RTLong)) {
      var t = $uJ(y);
      var lo = t.r;
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
$p.d3 = (function(xs, idx, value) {
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
$p.ft = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.aW(), (x.aL() + "("), ",", ")");
});
$p.rO = (function(xs) {
  return ((xs === null) ? null : $m_sci_ArraySeq$().eR(xs));
});
$p.B = (function(xs) {
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
  return this.tE((hash ^ length));
});
$p.tE = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.gY = (function(lv) {
  var lo = lv.r;
  var hi = lv.w;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$p.d5 = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.s9(dv);
    var hi = this$1.an;
    return (($m_RTLong$().iw(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().mB(dv));
  }
});
$p.R = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.d5((+x));
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    return this.gY(new $c_RTLong(t.r, t.w));
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
$p.tz = (function(a) {
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
$p.wm = (function(interval, body) {
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
$p.wy = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.jn;
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
  return this.cl((hash ^ length));
});
$p.cl = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.sx = (function(x, y, seed) {
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
$p.iF = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.e();
  while (iterator.k()) {
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
$p.vO = (function(xs, seed) {
  var it = xs.e();
  var h = seed;
  if ((!it.k())) {
    return this.H(h, 0);
  }
  var x0 = it.d();
  if ((!it.k())) {
    return this.H(this.j(h, $m_sr_Statics$().R(x0)), 1);
  }
  var x1 = it.d();
  var initial = $m_sr_Statics$().R(x0);
  h = this.j(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().R(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.k()) {
    h = this.j(h, prev);
    var hash = $m_sr_Statics$().R(it.d());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.j(h, hash);
      i = ((1 + i) | 0);
      while (it.k()) {
        h = this.j(h, $m_sr_Statics$().R(it.d()));
        i = ((1 + i) | 0);
      }
      return this.H(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.cl(this.j(this.j(h0, rangeDiff), prev));
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
      return this.cl(this.j(this.j(h0, rangeDiff), prev));
    }
  }
});
$p.vS = (function(start, step, last, seed) {
  return this.cl(this.j(this.j(this.j(seed, start), step), last));
});
$p.v2 = (function(a, seed) {
  var h = seed;
  var l = a.n();
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
      return this.cl(this.j(this.j(h0, rangeDiff), prev));
    }
  }
});
$p.vj = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.c())) {
    var head = elems.o();
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
  return ((rangeState === 2) ? this.vS(initial, rangeDiff, prev, seed) : this.H(h, n));
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
      return this.cl(this.j(this.j(h0, rangeDiff), prev));
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
      return this.cl(this.j(this.j(h0, rangeDiff), prev));
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
      return this.cl(this.j(this.j(h0, rangeDiff), prev));
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
      return this.H(this.j(h, $m_sr_Statics$().d5(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().d5(a.a[0]);
      h = this.j(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().d5(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.j(h, prev);
        var hash = $m_sr_Statics$().d5(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.j(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.j(h, $m_sr_Statics$().d5(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.H(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cl(this.j(this.j(h0, rangeDiff), prev));
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
      return this.H(this.j(h, $m_sr_Statics$().d5(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().d5(a.a[0]);
      h = this.j(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().d5(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.j(h, prev);
        var hash = $m_sr_Statics$().d5(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.j(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.j(h, $m_sr_Statics$().d5(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.H(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cl(this.j(this.j(h0, rangeDiff), prev));
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
      return this.cl(this.j(this.j(h0, rangeDiff), prev));
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
      return this.H(this.j($x_1, $m_sr_Statics$().gY(new $c_RTLong(t.r, t.w))), 1);
      break;
    }
    default: {
      var t$1 = a.a[0];
      var initial = $m_sr_Statics$().gY(new $c_RTLong(t$1.r, t$1.w));
      h = this.j(h, initial);
      var h0 = h;
      var t$2 = a.a[1];
      var prev = $m_sr_Statics$().gY(new $c_RTLong(t$2.r, t$2.w));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.j(h, prev);
        var t$3 = a.a[i];
        var hash = $m_sr_Statics$().gY(new $c_RTLong(t$3.r, t$3.w));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.j(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var t$4 = a.a[i];
            h = this.j($x_2, $m_sr_Statics$().gY(new $c_RTLong(t$4.r, t$4.w)));
            i = ((1 + i) | 0);
          }
          return this.H(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cl(this.j(this.j(h0, rangeDiff), prev));
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
      return this.cl(this.j(this.j(h0, rangeDiff), prev));
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
      return this.cl(this.j(this.j(h0, rangeDiff), prev));
    }
  }
});
function $s_Lsi\uff3ftool_SIAdversaryTool__main__AT__V(args) {
  $m_Lsi\uff3ftool_SIAdversaryTool$().vk(args);
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
        var x33 = x31.cn;
        if ((x33 !== null)) {
          var d = x33.be();
          var rest = x33.b9();
          var acc$tailLocal1$tmp1 = acc$tailLocal1.T(notMatchedString$tailLocal1).T(d);
          str$tailLocal1 = rest;
          notMatchedString$tailLocal1 = "";
          acc$tailLocal1 = acc$tailLocal1$tmp1;
          continue;
        }
      }
      if (($m_s_None$() === x31)) {
        var str$tailLocal1$tmp2 = $m_sc_StringOps$().m3(str$tailLocal1, 1);
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
  var wordsToReplace = $m_sci_Map$().rH($m_sr_ScalaRunTime$().B(new ($d_T2.r().C)([new $c_T2("City", "images/City.svg"), new $c_T2("Town", "images/Town.svg"), new $c_T2("Beasts", "images/Beasts.svg"), new $c_T2("Explorer", "images/Explorer.svg"), new $c_T2("Dahan", "images/Dahan.svg"), new $c_T2("Disease", "images/Disease.svg"), new $c_T2("Escalation", "images/Escalation.svg"), new $c_T2("Fear", "images/Fear.svg"), new $c_T2("Blight", "images/Blight.svg")])));
  var parts = $p_Lsi\uff3ftool_SIAdversaryTool$__splitWithDelimiters__sci_Vector__T__sci_List__T__sci_Vector__sci_Vector($thiz, vec, s, $m_sci_Nil$().z(wordsToReplace.ms()), "", ($m_sci_Vector$(), $m_sci_Vector0$())).M(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text) => {
    var x36 = wordsToReplace.gT(text);
    if ((x36 instanceof $c_s_Some)) {
      var value = x36.cn;
      return $m_Lcom_raquo_laminar_api_package$().t.v0().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().t.wn().gD(value), $m_Lcom_raquo_laminar_api_package$().t.wJ().gD("auto"), $m_Lcom_raquo_laminar_api_package$().t.uZ().gD("1em")])));
    }
    if (($m_s_None$() === x36)) {
      return new $c_Lcom_raquo_laminar_nodes_TextNode(text);
    }
    throw new $c_s_MatchError(x36);
  })));
  return $m_Lcom_raquo_laminar_api_package$().t.vP().bb(parts);
}
function $p_Lsi\uff3ftool_SIAdversaryTool$__addHyphen$1__sci_List__s_Option__sci_List($thiz, cards, last) {
  if ((cards instanceof $c_sci_$colon$colon)) {
    var x13 = $uC(cards.gm);
    var x14 = cards.at;
    if (((!last.c()) && ($uC(last.E()) !== x13))) {
      return new $c_sci_$colon$colon($bC(45), new $c_sci_$colon$colon($bC(x13), $p_Lsi\uff3ftool_SIAdversaryTool$__addHyphen$1__sci_List__s_Option__sci_List($thiz, x14, new $c_s_Some($bC(x13)))));
    }
    return new $c_sci_$colon$colon($bC(x13), $p_Lsi\uff3ftool_SIAdversaryTool$__addHyphen$1__sci_List__s_Option__sci_List($thiz, x14, new $c_s_Some($bC(x13))));
  }
  if ($m_sci_Nil$().l(cards)) {
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
  return (newSection$lzy1$1.jl ? newSection$lzy1$1.jm : newSection$lzy1$1.v4((hideInCompact$1 ? $m_Lcom_raquo_laminar_api_package$().t.dv().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().t.io().i2($thiz.fo), $m_Lcom_raquo_laminar_api_package$().t.eX.gE(sectionName$1), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().t, $m_sci_Vector$().bF($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)([$m_Lcom_raquo_laminar_api_package$().t.rQ().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().t, sectionName$1, $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH)]))), rulesDiv$1]))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())]))) : $m_Lcom_raquo_laminar_api_package$().t.dv().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().t.eX.gE(sectionName$1), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().t, $m_sci_Vector$().bF($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)([$m_Lcom_raquo_laminar_api_package$().t.rQ().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().t.uA().gF(new $c_Lcom_raquo_airstream_misc_MapSignal($thiz.fo, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$14) => ((!(!_$14)) ? "0.5rem" : "1rem"))), $m_s_None$()), $m_s_$less$colon$less$().di), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().t, sectionName$1, $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH)]))), rulesDiv$1]))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())]))))));
}
function $p_Lsi\uff3ftool_SIAdversaryTool$__newSection$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, newSection$lzy1$2, hideInCompact$2, sectionName$2, rulesDiv$2) {
  return (newSection$lzy1$2.jl ? newSection$lzy1$2.jm : $p_Lsi\uff3ftool_SIAdversaryTool$__newSection$lzyINIT1$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, newSection$lzy1$2, hideInCompact$2, sectionName$2, rulesDiv$2));
}
/** @constructor */
function $c_Lsi\uff3ftool_SIAdversaryTool$() {
  this.lF = null;
  this.lE = null;
  this.lG = null;
  this.fo = null;
  this.jt = null;
  this.hS = null;
  this.lI = null;
  this.lH = null;
  this.qJ = null;
  $n_Lsi\uff3ftool_SIAdversaryTool$ = this;
  this.lF = $m_Lcom_raquo_airstream_web_WebStorageVar$().fB("adversary", $m_s_None$()).sv(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Lsi\uff3ftool_adversaries_Adversary$().jv.e3)));
  this.lE = $m_Lcom_raquo_airstream_web_WebStorageVar$().fB("adversary-level", $m_s_None$()).rW(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => 6)));
  this.lG = $m_Lcom_raquo_airstream_web_WebStorageVar$().fB("compact-mode", $m_s_None$()).lX(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => false)));
  this.fo = this.lG.bf;
  this.jt = $m_Lcom_raquo_airstream_web_WebStorageVar$().fB("events-on", $m_s_None$()).lX(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => true)));
  this.hS = $m_Lcom_raquo_airstream_web_WebStorageVar$().fB("secondary-on", $m_s_None$()).lX(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => false)));
  this.lI = $m_Lcom_raquo_airstream_web_WebStorageVar$().fB("secondary-adversary", $m_s_None$()).sv(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Lsi\uff3ftool_adversaries_Adversary$().jv.e3)));
  this.lH = $m_Lcom_raquo_airstream_web_WebStorageVar$().fB("secondary-adversary-level", $m_s_None$()).rW(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => 6)));
  this.qJ = $m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().ih($m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().ih($m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().ih($m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().ih($m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().ih(this.lF.bf, this.lE.bf, new $c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()), this.jt.bf, new $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$4()), this.lI.bf, new $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$6()), this.lH.bf, new $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$8()), this.hS.bf, new $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$10());
}
$p = $c_Lsi\uff3ftool_SIAdversaryTool$.prototype = new $h_O();
$p.constructor = $c_Lsi\uff3ftool_SIAdversaryTool$;
/** @constructor */
function $h_Lsi\uff3ftool_SIAdversaryTool$() {
}
$h_Lsi\uff3ftool_SIAdversaryTool$.prototype = $p;
$p.vk = (function(args) {
  var container = document.getElementById("app");
  var this$3 = $m_Lcom_raquo_laminar_api_package$().t;
  var container$1 = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => container));
  var rootNode = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.w2()));
  var p = $m_Lcom_raquo_laminar_keys_EventProcessor$().gQ(this$3.ox.vM(), false, false);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream($m_Lcom_raquo_airstream_web_DomEventStream$().r6(document, p.eY.hp, p.ho), p.hn), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    new $c_Lcom_raquo_laminar_nodes_RootNode(container$1.L(), rootNode.L());
  })), this$3.wE());
});
$p.w2 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().t.dv().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().t.uW().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().t.io().i2(this.fo), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().t, "Spirit Island Adversary Tool", $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH)]))), $m_Lcom_raquo_laminar_api_package$().t.dv().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().t.eX.gE("selectors"), this.sf("Level", this.lE), this.se("Adversary", this.lF), this.w4()]))), this.w0()])));
});
$p.w4 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().t.dv().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().t.mi().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().t, "Options", $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH)]))), this.w1(), this.w3(), this.w5(), $m_Lcom_raquo_laminar_api_package$().t.dv().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().t.io().i2(new $c_Lcom_raquo_airstream_misc_MapSignal(this.hS.bf, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (!(!(!_$1))))), $m_s_None$())), this.sf("Secondary Adversary Level", this.lH), this.se("Secondary Adversary", this.lI)])))])));
});
$p.w5 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().t.ie().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().t, "Secondary Adversary", $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH), $m_Lcom_raquo_laminar_api_package$().t.id().gF(new $c_Lcom_raquo_airstream_misc_MapSignal(this.hS.bf, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((selected) => ((!(!selected)) ? "lightblue" : ""))), $m_s_None$()), $m_s_$less$colon$less$().di), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().gQ($m_Lcom_raquo_laminar_api_package$().t.h0(), false, false)).jP((void 0)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.eO(_$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.hS, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((hasEvents, _$2) => (!(!(!hasEvents)))))))))])));
});
$p.w3 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().t.ie().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().t, "Events", $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH), $m_Lcom_raquo_laminar_api_package$().t.id().gF(new $c_Lcom_raquo_airstream_misc_MapSignal(this.jt.bf, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((selected) => ((!(!selected)) ? "lightblue" : ""))), $m_s_None$()), $m_s_$less$colon$less$().di), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().gQ($m_Lcom_raquo_laminar_api_package$().t.h0(), false, false)).jP((void 0)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.eO(_$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.jt, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((hasEvents, _$3) => (!(!(!hasEvents)))))))))])));
});
$p.w1 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().t.ie().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().t, "Compact View", $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH), $m_Lcom_raquo_laminar_api_package$().t.id().gF(new $c_Lcom_raquo_airstream_misc_MapSignal(this.fo, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((selected) => ((!(!selected)) ? "lightblue" : ""))), $m_s_None$()), $m_s_$less$colon$less$().di), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().gQ($m_Lcom_raquo_laminar_api_package$().t.h0(), false, false)).jP((void 0)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.eO(_$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.lG, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((isCompact, _$4) => (!(!(!isCompact)))))))))])));
});
$p.sf = (function(name, advLevel) {
  var $x_6 = $m_Lcom_raquo_laminar_api_package$().t.dv();
  var $x_5 = $m_sr_ScalaRunTime$();
  var $x_4 = $m_Lcom_raquo_laminar_api_package$().t.eX.gE("levelSelector");
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().t.io().i2(this.fo);
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().t.mi().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().t, name, $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH)])));
  var $x_1 = $m_Lcom_raquo_laminar_api_package$().t;
  var b = $m_sci_IndexedSeq$().as();
  var it = new $c_sci_RangeIterator(1, 1, 6, false);
  while (it.et) {
    var x0 = it.s2();
    b.ar($m_Lcom_raquo_laminar_api_package$().t.ie().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().t, ("" + x0), $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().gQ($m_Lcom_raquo_laminar_api_package$().t.h0(), false, false)).vr(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((x0) => (() => x0))(x0))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
      sink.eO(_$1);
    }))(advLevel.iT))), $m_Lcom_raquo_laminar_api_package$().t.id().gF(new $c_Lcom_raquo_airstream_misc_MapSignal(advLevel.bf, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x0) => ((selected) => (((selected | 0) === x0) ? "lightblue" : "")))(x0)), $m_s_None$()), $m_s_$less$colon$less$().di)]))));
  }
  return $x_6.bb($x_5.B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_4, $x_3, $x_2, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_1, b.aM(), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
});
$p.se = (function(name, advName) {
  var $x_7 = $m_Lcom_raquo_laminar_api_package$().t.dv();
  var $x_6 = $m_sr_ScalaRunTime$();
  var $x_5 = $m_Lcom_raquo_laminar_api_package$().t.eX.gE("adversarySelector");
  var $x_4 = $m_Lcom_raquo_laminar_api_package$().t.io().i2(this.fo);
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().t.mi().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().t, name, $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH)])));
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().t;
  var this$10 = $m_Lsi\uff3ftool_adversaries_Adversary$().lJ;
  var f = ((adversary) => $m_Lcom_raquo_laminar_api_package$().t.ie().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().t, adversary.e3, $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().gQ($m_Lcom_raquo_laminar_api_package$().t.h0(), false, false)).jP((void 0)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.eO(_$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(advName, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((adversary$2) => ((_$5, _$6) => adversary$2.e3))(adversary)))))), $m_Lcom_raquo_laminar_api_package$().t.id().gF(new $c_Lcom_raquo_airstream_misc_MapSignal(advName.bf, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((adversary$3) => ((selected) => {
    var x = $m_Lsi\uff3ftool_adversaries_Adversary$().md(selected);
    if (((x === null) ? (adversary$3 === null) : x.l(adversary$3))) {
      return "lightblue";
    } else {
      return "";
    }
  }))(adversary)), $m_s_None$()), $m_s_$less$colon$less$().di)]))));
  if ((this$10 === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var x0 = this$10.o();
    var h = new $c_sci_$colon$colon(f(x0), $m_sci_Nil$());
    var t = h;
    var rest = this$10.y();
    while ((rest !== $m_sci_Nil$())) {
      var x0$1 = rest.o();
      var nx = new $c_sci_$colon$colon(f(x0$1), $m_sci_Nil$());
      t.at = nx;
      t = nx;
      rest = rest.y();
    }
    var $x_1 = h;
  }
  return $x_7.bb($x_6.B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_5, $x_4, $x_3, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_2, $x_1, $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
});
$p.w0 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().t.dv().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().t.wv().gD("Click for toggling compact view!"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildrenInserter$().tw(new $c_Lcom_raquo_airstream_misc_MapSignal(this.qJ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var name = x$1.ga;
    var level = (x$1.gb | 0);
    var eventsOn = (!(!x$1.gc));
    var secondaryName = x$1.gd;
    var secondaryLevel = (x$1.ge | 0);
    var secondaryOn = (!(!x$1.gf));
    var primary = new $c_Lsi\uff3ftool_SIAdversaryTool$AdversarySelector($m_Lsi\uff3ftool_adversaries_Adversary$().md(name), level);
    var secondary = ((secondaryOn && (secondaryName !== name)) ? new $c_s_Some(new $c_Lsi\uff3ftool_SIAdversaryTool$AdversarySelector($m_Lsi\uff3ftool_adversaries_Adversary$().md(secondaryName), secondaryLevel)) : $m_s_None$());
    var rs = $m_Lsi\uff3ftool_adversaries_RuleSet$().uM(primary, secondary);
    var invaderDeck = this.td(eventsOn, this.v7(primary, secondary));
    var fear = this.tK(eventsOn, $f_sc_LinearSeqOps__apply__I__O(primary.c4.gA, (((-1) + primary.cf) | 0)), (secondary.c() ? $m_s_None$() : new $c_s_Some($f_sc_LinearSeqOps__apply__I__O(secondary.E().c4.gA, (((-1) + secondary.E().cf) | 0)))));
    var setupWithDeckAndFear = $m_sci_Vector$().bF($m_sr_ScalaRunTime$().B(new ($d_T.r().C)([("Deck Order: " + invaderDeck), ("Fear: " + fear), "Add 1 Disease to land #2 (with the City)", "Add 1 Beasts to the lowest-numbered land with no printed Setup icons"]))).jE(rs.i0);
    return this.e4(this.e4(this.e4(this.e4(this.e4(this.e4(this.e4(this.e4(this.e4($m_sci_Vector$().bF($m_sr_ScalaRunTime$().rO(new ($d_sr_Nothing$.r().C)([]))), setupWithDeckAndFear, "Setup", true), rs.qS, "Loss Condition", false), rs.hZ, "Rule Changes", false), rs.hX, "High Immigration", false), rs.hY, "Ravage", false), rs.hV, "After Ravage", false), rs.hW, "Build", false), rs.hU, "After Build", false), rs.qR, "Explore", false);
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().pm, (void 0)))])));
});
$p.v7 = (function(primary, secondaryOpt) {
  var $x_3 = $m_sci_Nil$();
  var $x_2 = $m_s_Predef$();
  matchResult4: {
    var $x_1;
    if ((secondaryOpt instanceof $c_s_Some)) {
      var secondary = secondaryOpt.cn;
      var secondaryDeck = secondary.c4.fp.ba("111222233333", secondary.cf);
      var $x_1 = primary.c4.fp.ba(secondaryDeck, primary.cf);
      break matchResult4;
    }
    if (($m_s_None$() === secondaryOpt)) {
      var $x_1 = primary.c4.fp.ba("111222233333", primary.cf);
      break matchResult4;
    }
    throw new $c_s_MatchError(secondaryOpt);
  }
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($p_Lsi\uff3ftool_SIAdversaryTool$__addHyphen$1__sci_List__s_Option__sci_List(this, $x_3.z($x_2.sC($x_1)), $m_s_None$()), "", "", "");
});
$p.td = (function(eventsOn, deckOrder) {
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
$p.tK = (function(eventsOn, primaryExtraFear, secondaryExtraFear) {
  matchResult8: {
    var mergedFear;
    if ((secondaryExtraFear instanceof $c_s_Some)) {
      var sef = secondaryExtraFear.cn;
      var this$2 = $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O(primaryExtraFear, sef);
      var f = ((x$1) => (((x$1.be() | 0) + (x$1.b9() | 0)) | 0));
      if ((this$2 === $m_sci_Nil$())) {
        var mergedFear = $m_sci_Nil$();
        break matchResult8;
      } else {
        var x0 = this$2.o();
        var h = new $c_sci_$colon$colon(f(x0), $m_sci_Nil$());
        var t = h;
        var rest = this$2.y();
        while ((rest !== $m_sci_Nil$())) {
          var x0$1 = rest.o();
          var nx = new $c_sci_$colon$colon(f(x0$1), $m_sci_Nil$());
          t.at = nx;
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
    var x0$2 = mergedFear.o();
    var h$1 = new $c_sci_$colon$colon(f$1(x0$2), $m_sci_Nil$());
    var t$1 = h$1;
    var rest$1 = mergedFear.y();
    while ((rest$1 !== $m_sci_Nil$())) {
      var x0$3 = rest$1.o();
      var nx$1 = new $c_sci_$colon$colon(f$1(x0$3), $m_sci_Nil$());
      t$1.at = nx$1;
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
      if ((baseFearList.bc(3) === 0)) {
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
  var rulesDiv = $m_Lcom_raquo_laminar_api_package$().t.dv().bb($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().t.eX.gE("rules"), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().t, rules.M(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s) => $p_Lsi\uff3ftool_SIAdversaryTool$__injectImages__sci_Vector__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, vec, s)))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
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
  return $p_Lsi\uff3ftool_adversaries_InvaderCards$__inner$1__C__sci_List__I__I__s_Option($thiz, char, $m_sci_Nil$().z($m_s_Predef$().sC(invaders)), n, 0);
}
function $p_Lsi\uff3ftool_adversaries_InvaderCards$__inner$1__C__sci_List__I__I__s_Option($thiz, char$1, remainder, n, pos) {
  var pos$tailLocal1 = pos;
  var n$tailLocal1 = n;
  var remainder$tailLocal1 = remainder;
  while (true) {
    var x30 = remainder$tailLocal1;
    if ((x30 instanceof $c_sci_$colon$colon)) {
      var x38 = $uC(x30.gm);
      var x39 = x30.at;
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
    if ($m_sci_Nil$().l(x30)) {
      return $m_s_None$();
    }
    throw new $c_s_MatchError(x30);
  }
}
/** @constructor */
function $c_Lsi\uff3ftool_adversaries_InvaderCards$() {
  this.t3 = null;
  this.t3 = "111222233333";
}
$p = $c_Lsi\uff3ftool_adversaries_InvaderCards$.prototype = new $h_O();
$p.constructor = $c_Lsi\uff3ftool_adversaries_InvaderCards$;
/** @constructor */
function $h_Lsi\uff3ftool_adversaries_InvaderCards$() {
}
$h_Lsi\uff3ftool_adversaries_InvaderCards$.prototype = $p;
$p.iz = (function(invaders, level) {
  switch (level) {
    case 1: {
      return invaders;
      break;
    }
    case 2: {
      return this.tc(this.ee(invaders, 51), 51, 50);
      break;
    }
    case 3: {
      return this.ee(this.iz(invaders, 2), 49);
      break;
    }
    case 4: {
      return this.ee(this.iz(invaders, 3), 50);
      break;
    }
    case 5: {
      return this.ee(this.iz(invaders, 4), 49);
      break;
    }
    case 6: {
      return this.ee(this.iz(invaders, 5), 49);
      break;
    }
    default: {
      throw new $c_s_MatchError(level);
    }
  }
});
$p.t5 = (function(invaders, level) {
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
      return this.ee(invaders, 49);
      break;
    }
    case 4: {
      return this.ee(invaders, 49);
      break;
    }
    case 5: {
      return this.ee(invaders, 49);
      break;
    }
    case 6: {
      return this.ee(invaders, 49);
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
      return invaders;
      break;
    }
    case 4: {
      return this.jV(invaders, "S", 50, 2);
      break;
    }
    case 5: {
      return this.jV(invaders, "S", 50, 2);
      break;
    }
    case 6: {
      return this.jV(invaders, "S", 50, 2);
      break;
    }
    default: {
      throw new $c_s_MatchError(level);
    }
  }
});
$p.wa = (function(invaders, level) {
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
$p.jY = (function(invaders, level) {
  var level$tailLocal1 = level;
  while (true) {
    var x5 = level$tailLocal1;
    switch (x5) {
      case 1: {
        return invaders;
        break;
      }
      case 2: {
        return this.sr(this.sr(this.jV(invaders, "C", 50, 3), 50, 1), 50, 2);
        break;
      }
      case 3: {
        level$tailLocal1 = 2;
        break;
      }
      case 4: {
        return this.mI(this.jY(invaders, 2));
        break;
      }
      case 5: {
        return this.mI(this.jY(invaders, 2));
        break;
      }
      case 6: {
        return this.mI(this.jY(invaders, 2));
        break;
      }
      default: {
        throw new $c_s_MatchError(x5);
      }
    }
  }
});
$p.ee = (function(invaders, toRemove) {
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
$p.tc = (function(invaders, add, before) {
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
  return $m_sc_StringOps$().um(invaders.split("2").join("23"), nr2s);
});
$p.jV = (function(invaders, replacee, replaced, n) {
  var x15 = $p_Lsi\uff3ftool_adversaries_InvaderCards$__findNthPos__T__C__I__s_Option(this, invaders, replaced, n);
  if (($m_s_None$() === x15)) {
    return invaders;
  }
  if ((x15 instanceof $c_s_Some)) {
    var idx = (x15.cn | 0);
    matchResult8: {
      var \u03b41$___1;
      var \u03b41$___2;
      var x12 = $m_sc_StringOps$().mP(invaders, idx);
      if ((x12 !== null)) {
        var \u03b41$___1 = x12.be();
        var \u03b41$___2 = x12.b9();
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
$p.sr = (function(invaders, char, n) {
  var x21 = $p_Lsi\uff3ftool_adversaries_InvaderCards$__findNthPos__T__C__I__s_Option(this, invaders, char, n);
  if (($m_s_None$() === x21)) {
    return invaders;
  }
  if ((x21 instanceof $c_s_Some)) {
    var idx = (x21.cn | 0);
    matchResult10: {
      var \u03b42$___1;
      var \u03b42$___2;
      var x18 = $m_sc_StringOps$().mP(invaders, idx);
      if ((x18 !== null)) {
        var \u03b42$___1 = x18.be();
        var \u03b42$___2 = x18.b9();
        break matchResult10;
      }
      throw new $c_s_MatchError(x18);
    }
    var front$2 = \u03b42$___1;
    var back$2 = \u03b42$___2;
    return ((($m_sc_StringOps$().rT(front$2) + $cToS($m_sc_StringOps$().rS(back$2))) + $cToS($m_sc_StringOps$().vi(front$2))) + $m_sc_StringOps$().mS(back$2));
  }
  throw new $c_s_MatchError(x21);
});
$p.mI = (function(invaders) {
  var x27 = $p_Lsi\uff3ftool_adversaries_InvaderCards$__findNthPos__T__C__I__s_Option(this, invaders, 49, 3);
  if (($m_s_None$() === x27)) {
    return invaders;
  }
  if ((x27 instanceof $c_s_Some)) {
    var idx = (x27.cn | 0);
    matchResult12: {
      var \u03b45$___1;
      var \u03b45$___2;
      var x24 = $m_sc_StringOps$().mP(invaders, idx);
      if ((x24 !== null)) {
        var \u03b45$___1 = x24.be();
        var \u03b45$___2 = x24.b9();
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
$p.ii = (function(a, b) {
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
$p.ii = (function(a, b) {
  return new $c_T6(a.g5, a.g6, a.g7, a.g8, a.g9, b);
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
$p.ii = (function(a, b) {
  return new $c_T3(a.be(), a.b9(), b);
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
$p.ii = (function(a, b) {
  return new $c_T4(a.fY, a.fZ, a.g0, b);
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
$p.ii = (function(a, b) {
  return new $c_T5(a.g1, a.g2, a.g3, a.g4, b);
});
var $d_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$8 = new $TypeData().i($c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$8, "app.tulz.tuplez.Composition_Pri7$$anon$8", ({
  dr: 1,
  aD: 1
}));
function $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.cD(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $thiz.iv(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.h3(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.h3(new $c_s_util_Failure(nextError), transaction);
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
$p.fG = (function() {
  return this.nP;
});
$p.lY = (function(x$0) {
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
  this.kl = false;
  this.nQ = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.kl = false;
}
$p = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $p;
$p.fG = (function() {
  return this.nR;
});
$p.lY = (function(x$0) {
  this.nR = x$0;
});
$p.mE = (function(subscription) {
  if (this.kl) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.nQ.L();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.mt = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.kl = true;
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
$p.fG = (function() {
  return this.ol;
});
$p.lY = (function(x$0) {
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
$p.ik = (function(scalaValue) {
  return scalaValue;
});
$p.m1 = (function(domValue) {
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
  this.kx = null;
  this.pa = getRawDomValue;
  this.pc = setRawDomValue;
  this.pb = separator;
  this.kx = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator);
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
$p.gE = (function(items) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().t.t6(), $m_Lcom_raquo_laminar_keys_CompositeKey$().s5(items, this.pb)));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey, "com.raquo.laminar.keys.CompositeKey", ({
  eT: 1,
  af: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator) {
  this.ky = null;
  this.ky = separator;
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = $p;
$p.rr = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().s5(domValue, this.ky);
});
$p.rt = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.ky, "");
});
$p.m1 = (function(domValue) {
  return this.rr(domValue);
});
$p.ik = (function(scalaValue) {
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
  this.hp = null;
  this.hp = name;
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
  this.hq = null;
  this.kz = null;
  this.hq = name;
  this.kz = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $p;
$p.gD = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().so(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  f1: 1,
  af: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.dB = null;
  this.kA = null;
  this.dB = name;
  this.kA = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
$p.gD = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, prop, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().sp(element, prop, value$2);
  })));
});
$p.i2 = (function(values) {
  var update = ((this.dB === "value") ? new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, nextValue, reason) => {
    var nextDomValue = this.kA.ik(nextValue);
    var x = $m_Lcom_raquo_laminar_DomApi$().uR(element, this);
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().i(nextDomValue, x)))) {
      $m_Lcom_raquo_laminar_DomApi$().sq(element, this, nextDomValue);
    }
  })) : new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element$2, nextValue$2, reason$2) => {
    $m_Lcom_raquo_laminar_DomApi$().sp(element$2, this, nextValue$2);
  })));
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.eQ(), update);
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
  this.kC = null;
  this.kB = null;
  this.iY = null;
  this.iZ = null;
  this.kC = localName;
  this.kB = codec;
  var this$1 = (namespacePrefix.c() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.E() + ":") + localName)));
  this.iY = (this$1.c() ? localName : this$1.E());
  this.iZ = (namespacePrefix.c() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().vw(namespacePrefix.E())));
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
$p.du = (function(element) {
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
$p.du = (function(element) {
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
$p.tD = (function(value) {
  return this.pn.b(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  fj: 1,
  fh: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.rl(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().ug($thiz.aX(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.kN = null;
  this.kN = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.bb = (function(modifiers) {
  var element = this.tH();
  modifiers.U(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((modifier) => {
    modifier.du(element);
  })));
  return element;
});
$p.tH = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().ub(this));
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
  if (((((32 & $thiz.j1) << 24) >> 24) === 0)) {
    $thiz.kO = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
    $thiz.j1 = (((32 | $thiz.j1) << 24) >> 24);
  }
  return $thiz.kO;
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.j1) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.kO);
}
/** @constructor */
function $c_jl_Character$() {
  this.kO = null;
  this.j1 = 0;
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.k2 = (function(codePoint) {
  if ((!((codePoint >= 0) && (codePoint <= 1114111)))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.uh = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))));
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0);
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0);
  } else {
    var p = $m_ju_Arrays$().tF($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
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
$p.k3 = (function(ch) {
  return (65535 & this.wA(ch));
});
$p.wA = (function(codePoint) {
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
        var this$1 = this.k2(codePoint);
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
$p.k1 = (function(ch) {
  return (65535 & this.wz(ch));
});
$p.wz = (function(codePoint) {
  if ((codePoint === 304)) {
    return 105;
  } else {
    var this$1 = this.k2(codePoint);
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
    var digit = $m_jl_Character$().uh(s.charCodeAt(i), radix);
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
$p.ve = (function(lo, hi) {
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
  this.fV = null;
  this.ht = null;
  this.fW = null;
  this.fX = 0;
  this.fU = 0;
  this.fV = declaringClass;
  this.ht = methodName;
  this.fW = fileName;
  this.fX = lineNumber;
  this.fU = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.l = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.fW === that.fW) && (this.fX === that.fX)) && (this.fU === that.fU)) && (this.fV === that.fV)) && (this.ht === that.ht)));
});
$p.v = (function() {
  var result = "";
  if ((this.fV !== "<jscode>")) {
    result = ((("" + result) + this.fV) + ".");
  }
  result = (("" + result) + this.ht);
  if ((this.fW === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.fW);
    if ((this.fX >= 0)) {
      result = ((result + ":") + this.fX);
      if ((this.fU >= 0)) {
        result = ((result + ":") + this.fU);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.u = (function() {
  return (((($f_T__hashCode__I(this.fV) ^ $f_T__hashCode__I(this.ht)) ^ $f_T__hashCode__I(this.fW)) ^ this.fX) ^ this.fU);
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
$p.vx = (function(value, offset, count) {
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
$p.uD = (function(format, args) {
  return $ct_ju_Formatter__(new $c_ju_Formatter()).uE(format, args).v();
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
    $thiz.ux();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.py = null;
    this.pz = false;
    this.px = null;
    this.j2 = null;
  }
  jM(cause) {
    return this;
  }
  c0() {
    return this.py;
  }
  ux() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.ak : this);
    this.px = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  uT() {
    if ((this.j2 === null)) {
      if (this.pz) {
        this.j2 = $m_jl_StackTrace$().uv(this.px);
      } else {
        this.j2 = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.j2;
  }
  v() {
    var className = $objectClassName(this);
    var message = this.c0();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  u() {
    return $c_O.prototype.u.call(this);
  }
  l(that) {
    return $c_O.prototype.l.call(this, that);
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
  this.di = null;
  $n_s_$less$colon$less$ = this;
  this.di = new $c_s_$less$colon$less$$anon$1();
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
    $m_sr_ScalaRunTime$().d3(dest, j, $m_sr_ScalaRunTime$().e6(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
function $p_s_Array$__newUnitArray__I__Ajl_Void($thiz, len) {
  var result = new ($d_jl_Void.r().C)(len);
  $m_ju_Arrays$().uw(result, (void 0));
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
  var n = it.p();
  if ((n > (-1))) {
    var elements = evidence$3.c1(n);
    var iterator = it.e();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().d3(elements, i, iterator.d());
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
    while (iterator$2.k()) {
      var elem = iterator$2.d();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.F.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.F.r().w(jsElems);
  }
});
$p.ch = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.F.Z && $objectGetClass(dest).F.R(srcClass.F))) {
    src.q(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.eL = (function(original, newLength) {
  if ($isArrayOf_jl_Void(original, 1)) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  } else if ((original instanceof $ac_O)) {
    return $m_ju_Arrays$().ab(original, newLength);
  } else if ((original instanceof $ac_I)) {
    return $m_ju_Arrays$().u5(original, newLength);
  } else if ((original instanceof $ac_D)) {
    return $m_ju_Arrays$().u3(original, newLength);
  } else if ((original instanceof $ac_J)) {
    return $m_ju_Arrays$().u6(original, newLength);
  } else if ((original instanceof $ac_F)) {
    return $m_ju_Arrays$().u4(original, newLength);
  } else if ((original instanceof $ac_C)) {
    return $m_ju_Arrays$().u2(original, newLength);
  } else if ((original instanceof $ac_B)) {
    return $m_ju_Arrays$().u1(original, newLength);
  } else if ((original instanceof $ac_S)) {
    return $m_ju_Arrays$().u7(original, newLength);
  } else if ((original instanceof $ac_Z)) {
    return $m_ju_Arrays$().u8(original, newLength);
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
$p.wK = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $m_scm_ArraySeq$().lx : new $c_scm_ArraySeq$ofRef(xs)));
});
$p.sC = (function(s) {
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
$p.jT = (function(xo) {
  return (xo.c() ? $m_sc_Iterable$().bO() : new $c_sc_Iterable$$anon$1(xo.E()));
});
$p.lT = (function(x) {
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
  return ($thiz.ci(x) ? $thiz.b(x) : default$1.b(x));
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
    $thiz.b5($m_scm_Buffer$().jJ(elems));
  } else {
    var it = elems.e();
    while (it.k()) {
      $thiz.ar(it.d());
    }
  }
  return $thiz;
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.sS = null;
  this.t1 = null;
  this.sT = null;
  this.sW = null;
  this.sX = null;
  this.sV = null;
  this.sU = null;
  this.sR = null;
  this.t2 = null;
  this.sP = null;
  this.t0 = null;
  this.sQ = null;
  this.sY = null;
  this.sZ = null;
  $n_s_reflect_ClassTag$ = this;
  this.sS = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.t1 = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.sT = $m_s_reflect_ManifestFactory$CharManifest$();
  this.sW = $m_s_reflect_ManifestFactory$IntManifest$();
  this.sX = $m_s_reflect_ManifestFactory$LongManifest$();
  this.sV = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.sU = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.sR = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.t2 = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.sP = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.t0 = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.sQ = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.sY = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.sZ = $m_s_reflect_ManifestFactory$NullManifest$();
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
  this.ji = false;
  this.ji = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.v = (function() {
  return ("" + this.ji);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  jy: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.b3 = 0;
  this.b3 = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.v = (function() {
  return ("" + this.b3);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  jB: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyBoolean() {
  this.jj = false;
  this.jk = false;
}
$p = $c_sr_LazyBoolean.prototype = new $h_O();
$p.constructor = $c_sr_LazyBoolean;
/** @constructor */
function $h_sr_LazyBoolean() {
}
$h_sr_LazyBoolean.prototype = $p;
$p.v3 = (function(value) {
  this.jk = value;
  this.jj = true;
  return value;
});
$p.v = (function() {
  return ("LazyBoolean " + (this.jj ? ("of: " + this.jk) : "thunk"));
});
var $d_sr_LazyBoolean = new $TypeData().i($c_sr_LazyBoolean, "scala.runtime.LazyBoolean", ({
  jC: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyRef() {
  this.jl = false;
  this.jm = null;
}
$p = $c_sr_LazyRef.prototype = new $h_O();
$p.constructor = $c_sr_LazyRef;
/** @constructor */
function $h_sr_LazyRef() {
}
$h_sr_LazyRef.prototype = $p;
$p.v4 = (function(value) {
  this.jm = value;
  this.jl = true;
  return value;
});
$p.v = (function() {
  return ("LazyRef " + (this.jl ? ("of: " + this.jm) : "thunk"));
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
  this.b4 = 0;
  this.eJ = 0;
  this.jo = 0;
  this.lD = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.b4 = $f_T__hashCode__I("Seq");
  this.eJ = $f_T__hashCode__I("Map");
  this.jo = $f_T__hashCode__I("Set");
  this.lD = this.iF($m_sci_Nil$(), this.eJ);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.df = (function(x, y) {
  return this.sx($m_sr_Statics$().R(x), $m_sr_Statics$().R(y), (-889275714));
});
$p.sm = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.v2(xs, this.b4) : ((xs instanceof $c_sci_List) ? this.vj(xs, this.b4) : this.vO(xs, this.b4)));
});
$p.vq = (function(xs) {
  if (xs.c()) {
    return this.lD;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.eJ;
    xs.fw(accum);
    h = this.j(h, accum.jp);
    h = this.j(h, accum.jq);
    h = this.ed(h, accum.jr);
    return this.H(h, accum.js);
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
  this.jp = 0;
  this.jq = 0;
  this.js = 0;
  this.jr = 0;
  this.jp = 0;
  this.jq = 0;
  this.js = 0;
  this.jr = 1;
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
$p.ty = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().df(k, v);
  this.jp = ((this.jp + h) | 0);
  this.jq = (this.jq ^ h);
  this.jr = Math.imul(this.jr, (1 | h));
  this.js = ((1 + this.js) | 0);
});
$p.ba = (function(v1, v2) {
  this.ty(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  k8: 1,
  b9: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError extends $c_jl_Throwable {
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_AirstreamError$() {
  this.k9 = null;
  this.n7 = null;
  this.n8 = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.k9 = $m_scm_Buffer$().r7($m_sr_ScalaRunTime$().B(new ($d_F1.r().C)([])));
  this.n7 = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    try {
      console.error(((this.eN(err) + "\n") + this.uS(err, "\n")));
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
  this.vT(this.n7);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.eN = (function(e) {
  try {
    var errorMessage = e.c0();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).mh() + ": ") + errorMessage);
});
$p.uS = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().wK(err.uT()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.tP = (function(message, cause) {
  return ((message + "; cause: ") + (cause.c() ? $m_s_None$() : new $c_s_Some(this.eN(cause.E()))));
});
$p.tO = (function(causes) {
  return ("CombinedError: " + $f_sc_IterableOnceOps__mkString__T__T__T__T(causes.eM($m_s_$less$colon$less$().di).M(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e) => this.eN(e)))), "", "; ", ""));
});
$p.vT = (function(fn) {
  this.k9.ar(fn);
});
$p.cV = (function(err) {
  var this$1 = this.k9;
  var it = this$1.e();
  while (it.k()) {
    var x0 = it.d();
    try {
      x0.b(err);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = this.n8;
      if (((x0 === null) ? (x$2 === null) : x0.l(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().wm(0.0, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((e$2) => (() => {
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
  $thiz.fC((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().mW(onNext, $m_s_PartialFunction$().j4, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.fA()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.fA()) {
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
    var newArray = $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().B(new ($d_F0.r().C)([])));
    $thiz.fC(newArray);
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
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.tD(value));
}
function $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($thiz, nodes, renderableSeq) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    ($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(nodes, null, null)).U(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((_$9) => {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().gJ(element$2, _$9, (void 0));
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
$p.vM = (function() {
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
  this.kE = null;
  this.pe = key;
  this.kE = itemsToAdd;
}
$p = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_CompositeKeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = $p;
$p.du = (function(element) {
  if ((!this.kE.c())) {
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this.pe, null, this.kE, $m_sci_Nil$());
  }
});
var $d_Lcom_raquo_laminar_modifiers_CompositeKeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_CompositeKeySetter, "com.raquo.laminar.modifiers.CompositeKeySetter", ({
  f5: 1,
  Z: 1,
  bF: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.fS = null;
  this.kF = null;
  this.kG = null;
  this.fS = eventProcessor;
  this.kF = ((ev) => {
    var processor = eventProcessor.hn;
    var this$2 = processor.b(ev);
    if ((!this$2.c())) {
      callback.b(this$2.E());
    }
  });
  this.kG = (() => {
    var outer = null;
    outer = this;
    var this$3 = ({});
    if ((outer === null)) {
      throw new $c_jl_NullPointerException();
    }
    this$3.capture = outer.fS.ho;
    this$3.passive = outer.fS.iX;
    return this$3;
  })();
}
$p = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $p;
$p.du = (function(element) {
  this.tG(element, false);
});
$p.tG = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().te(element.bG, this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.kD, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().vW(element.bG, this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().wC(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iG(element.cW, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().st(element.cW, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner$1) => {
      activate.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.v = (function() {
  return (("EventListener(" + this.fS.eY.hp) + ")");
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
$p.du = (function(element) {
  this.pf.lR(element, this.pg, this.ph);
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
$p.du = (function(element) {
  this.lW(element);
});
$p.lW = (function(element) {
  element.vK(this.pi);
  var observable = this.pk;
  var onNext = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    this.pj.lR(element, value, this);
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().wo(element.cW, observable, onNext);
});
var $d_Lcom_raquo_laminar_modifiers_KeyUpdater = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeyUpdater, "com.raquo.laminar.modifiers.KeyUpdater", ({
  f8: 1,
  Z: 1,
  bE: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.kL = null;
  this.pq = null;
  this.pr = null;
  this.pq = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().vd(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.pr = container;
  this.vv();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.jG = (function() {
  return this.kL;
});
$p.rl = (function(x$0) {
  this.kL = x$0;
});
$p.vv = (function() {
  this.kL.qV();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().gJ(this, this.pq, (void 0));
});
$p.aX = (function() {
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
    return ($thiz.F.Q().mh() + "[]");
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
  this.kP = null;
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
$p.mh = (function() {
  if ((this.kP === null)) {
    this.kP = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.kP;
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
  this.sO = null;
  $n_s_Predef$ = this;
  this.sO = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.sg = (function(requirement) {
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
      return $thiz.be();
      break;
    }
    case 1: {
      return $thiz.b9();
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
      return $thiz.fY;
      break;
    }
    case 1: {
      return $thiz.fZ;
      break;
    }
    case 2: {
      return $thiz.g0;
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
      return $thiz.g1;
      break;
    }
    case 1: {
      return $thiz.g2;
      break;
    }
    case 2: {
      return $thiz.g3;
      break;
    }
    case 3: {
      return $thiz.g4;
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
    case 4: {
      return $thiz.g9;
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
      return $thiz.ga;
      break;
    }
    case 1: {
      return $thiz.gb;
      break;
    }
    case 2: {
      return $thiz.gc;
      break;
    }
    case 3: {
      return $thiz.gd;
      break;
    }
    case 4: {
      return $thiz.ge;
      break;
    }
    case 5: {
      return $thiz.gf;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 5)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.gg = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.gg = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.bO = (function() {
  return this.gg.rs($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.am = (function(it) {
  return this.gg.m9(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.as = (function() {
  return this.gg.jR($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.e5 = (function(elems) {
  return this.gg.m9(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.gi = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.gi = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.bO = (function() {
  return this.gi.bO();
});
$p.am = (function(it) {
  return this.gi.am(it);
});
$p.as = (function() {
  return this.gi.as();
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
  return (it.k() ? new $c_s_Some(it.d()) : $m_s_None$());
}
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.p();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1));
    } else {
      var i = 0;
      var it = $thiz.e();
      while (it.k()) {
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
  return $thiz.aE().am(($is_sc_Iterable(suffix) ? new $c_sc_View$Concat($thiz, suffix) : $thiz.e().gM(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => suffix.e())))));
}
function $f_sc_Iterator__indexWhere__F1__I__I($thiz, p, from) {
  var i = ((from > 0) ? from : 0);
  var dropped = $thiz.d6(from);
  while (dropped.k()) {
    if ((!(!p.b(dropped.d())))) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).gM(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().D : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.e();
  while (($thiz.k() && those.k())) {
    if ((!$m_sr_BoxesRunTime$().i($thiz.d(), those.d()))) {
      return false;
    }
  }
  return ($thiz.k() === those.k());
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
$p.as = (function() {
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
  $thiz.ld = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.ld = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.am = (function(it) {
  return this.ld.am(it);
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
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((x3) => (() => x3.e()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().jK(it))));
});
$p.as = (function() {
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
  this.b6 = null;
  this.c9 = null;
  this.bn = 0;
  this.c2 = 0;
  this.ac = dataMap;
  this.aF = nodeMap;
  this.b6 = content;
  this.c9 = originalHashes;
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
$p.dx = (function(index) {
  return this.b6.a[(index << 1)];
});
$p.dy = (function(index) {
  return this.b6.a[((1 + (index << 1)) | 0)];
});
$p.mf = (function(index) {
  return new $c_T2(this.b6.a[(index << 1)], this.b6.a[((1 + (index << 1)) | 0)]);
});
$p.cE = (function(index) {
  return this.c9.a[index];
});
$p.d8 = (function(index) {
  return this.b6.a[(((((-1) + this.b6.a.length) | 0) - index) | 0)];
});
$p.lQ = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().cG(keyHash, shift);
  var bitpos = $m_sci_Node$().bY(mask);
  if (((this.ac & bitpos) !== 0)) {
    var index = $m_sci_Node$().bJ(this.ac, mask, bitpos);
    if ($m_sr_BoxesRunTime$().i(key, this.dx(index))) {
      return this.dy(index);
    } else {
      throw new $c_ju_NoSuchElementException(("key not found: " + key));
    }
  } else if (((this.aF & bitpos) !== 0)) {
    return this.d8($m_sci_Node$().bJ(this.aF, mask, bitpos)).lQ(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.jL = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().cG(keyHash, shift);
  var bitpos = $m_sci_Node$().bY(mask);
  if (((this.ac & bitpos) !== 0)) {
    var index = $m_sci_Node$().bJ(this.ac, mask, bitpos);
    return ($m_sr_BoxesRunTime$().i(key, this.dx(index)) ? new $c_s_Some(this.dy(index)) : $m_s_None$());
  } else {
    return (((this.aF & bitpos) !== 0) ? this.d8($m_sci_Node$().bJ(this.aF, mask, bitpos)).jL(key, originalHash, keyHash, ((5 + shift) | 0)) : $m_s_None$());
  }
});
$p.me = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().cG(keyHash, shift);
  var bitpos = $m_sci_Node$().bY(mask);
  if (((this.ac & bitpos) !== 0)) {
    var index = $m_sci_Node$().bJ(this.ac, mask, bitpos);
    return ($m_sr_BoxesRunTime$().i(key, this.dx(index)) ? this.dy(index) : f.L());
  } else {
    return (((this.aF & bitpos) !== 0) ? this.d8($m_sci_Node$().bJ(this.aF, mask, bitpos)).me(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.L());
  }
});
$p.m0 = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().cG(keyHash, shift);
  var bitpos = $m_sci_Node$().bY(mask);
  if (((this.ac & bitpos) !== 0)) {
    var index = $m_sci_Node$().bJ(this.ac, mask, bitpos);
    return ((this.c9.a[index] === originalHash) && $m_sr_BoxesRunTime$().i(key, this.dx(index)));
  } else {
    return (((this.aF & bitpos) !== 0) && this.d8($m_sci_Node$().bJ(this.aF, mask, bitpos)).m0(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.mU = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().cG(keyHash, shift);
  var bitpos = $m_sci_Node$().bY(mask);
  if (((this.ac & bitpos) !== 0)) {
    var index = $m_sci_Node$().bJ(this.ac, mask, bitpos);
    var key0 = this.dx(index);
    var key0UnimprovedHash = this.cE(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().i(key0, key))) {
      if (replaceValue) {
        var value0 = this.dy(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.u0(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.dy(index);
      var key0Hash = $m_sc_Hashing$().bs(key0UnimprovedHash);
      return this.tW(bitpos, key0Hash, this.mz(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.aF & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().bJ(this.aF, mask, bitpos);
    var subNode = this.d8(index$2);
    var subNodeNew$2 = subNode.sA(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.tY(bitpos, subNode, subNodeNew$2));
  } else {
    return this.tU(bitpos, key, originalHash, keyHash, value);
  }
});
$p.mz = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().bF($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [new $c_T2(key0, value0), new $c_T2(key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().cG(keyHash0, shift);
    var mask1 = $m_sci_Node$().cG(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().bY(mask0) | $m_sci_Node$().bY(mask1));
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key0, value0, key1, value1]), new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash) : new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key1, value1, key0, value0]), new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash));
    } else {
      var nodeMap = $m_sci_Node$().bY(mask0);
      var node = this.mz(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().hu, node.O(), node.bN());
    }
  }
});
$p.im = (function() {
  return (this.aF !== 0);
});
$p.it = (function() {
  return $m_jl_Integer$().bE(this.aF);
});
$p.gU = (function() {
  return (this.ac !== 0);
});
$p.ix = (function() {
  return $m_jl_Integer$().bE(this.ac);
});
$p.d4 = (function(bitpos) {
  return $m_jl_Integer$().bE((this.ac & (((-1) + bitpos) | 0)));
});
$p.fD = (function(bitpos) {
  return $m_jl_Integer$().bE((this.aF & (((-1) + bitpos) | 0)));
});
$p.u0 = (function(bitpos, newKey, newValue) {
  var dataIx = this.d4(bitpos);
  var idx = (dataIx << 1);
  var src = this.b6;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.q(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.ac, this.aF, dst, this.c9, this.bn, this.c2);
});
$p.tY = (function(bitpos, oldNode, newNode) {
  var idx = (((((-1) + this.b6.a.length) | 0) - this.fD(bitpos)) | 0);
  var src = this.b6;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.q(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.ac, this.aF, dst, this.c9, ((((this.bn - oldNode.O()) | 0) + newNode.O()) | 0), ((((this.c2 - oldNode.bN()) | 0) + newNode.bN()) | 0));
});
$p.tU = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.d4(bitpos);
  var idx = (dataIx << 1);
  var src = this.b6;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.q(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.q(idx, dst, destPos, length);
  var dstHashes = this.rV(this.c9, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.ac | bitpos), this.aF, dst, dstHashes, ((1 + this.bn) | 0), ((this.c2 + keyHash) | 0));
});
$p.vt = (function(bitpos, keyHash, node) {
  var dataIx = this.d4(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.b6.a.length) | 0) - this.fD(bitpos)) | 0);
  var src = this.b6;
  var dst = new $ac_O((((-1) + src.a.length) | 0));
  src.q(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.q(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.a.length - idxNew) | 0)) | 0);
  src.q(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.jU(this.c9, dataIx);
  this.ac = (this.ac ^ bitpos);
  this.aF = (this.aF | bitpos);
  this.b6 = dst;
  this.c9 = dstHashes;
  this.bn = (((((-1) + this.bn) | 0) + node.O()) | 0);
  this.c2 = ((((this.c2 - keyHash) | 0) + node.bN()) | 0);
  return this;
});
$p.tW = (function(bitpos, keyHash, node) {
  var dataIx = this.d4(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.b6.a.length) | 0) - this.fD(bitpos)) | 0);
  var src = this.b6;
  var dst = new $ac_O((((-1) + src.a.length) | 0));
  src.q(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.q(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.a.length - idxNew) | 0)) | 0);
  src.q(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.jU(this.c9, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.ac ^ bitpos), (this.aF | bitpos), dst, dstHashes, (((((-1) + this.bn) | 0) + node.O()) | 0), ((((this.c2 - keyHash) | 0) + node.bN()) | 0));
});
$p.U = (function(f) {
  var iN = $m_jl_Integer$().bE(this.ac);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.b(this.mf(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().bE(this.aF);
  var j = 0;
  while ((j < jN)) {
    this.d8(j).U(f);
    j = ((1 + j) | 0);
  }
});
$p.fw = (function(f) {
  var iN = $m_jl_Integer$().bE(this.ac);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.ba(this.dx(i$1), this.dy(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().bE(this.aF);
  var j = 0;
  while ((j < jN)) {
    this.d8(j).fw(f);
    j = ((1 + j) | 0);
  }
});
$p.l = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.c2 === that.c2) && (this.aF === that.aF)) && (this.ac === that.ac)) && (this.bn === that.bn)) && $m_ju_Arrays$().jH(this.c9, that.c9))) {
      var a1 = this.b6;
      var a2 = that.b6;
      var length = this.b6.a.length;
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
  var this$1 = this.b6;
  var contentClone = this$1.m();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().bE(this.ac) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].ro();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.ac, this.aF, contentClone, this.c9.m(), this.bn, this.c2);
});
$p.ro = (function() {
  return this.rm();
});
$p.sA = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.mU(key, value, originalHash, hash, shift, replaceValue);
});
$p.il = (function(index) {
  return this.d8(index);
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
  this.cr = null;
  this.bw = 0;
  this.ca = 0;
  this.a3 = dataMap;
  this.aO = nodeMap;
  this.bo = content;
  this.cr = originalHashes;
  this.bw = size;
  this.ca = cachedJavaKeySetHashCode;
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
  return this.ca;
});
$p.da = (function(index) {
  return this.bo.a[index];
});
$p.cE = (function(index) {
  return this.cr.a[index];
});
$p.d9 = (function(index) {
  return this.bo.a[(((((-1) + this.bo.a.length) | 0) - index) | 0)];
});
$p.ij = (function(element, originalHash, elementHash, shift) {
  var mask = $m_sci_Node$().cG(elementHash, shift);
  var bitpos = $m_sci_Node$().bY(mask);
  if (((this.a3 & bitpos) !== 0)) {
    var index = $m_sci_Node$().bJ(this.a3, mask, bitpos);
    return ((this.cr.a[index] === originalHash) && $m_sr_BoxesRunTime$().i(element, this.da(index)));
  }
  if (((this.aO & bitpos) !== 0)) {
    return this.d9($m_sci_Node$().bJ(this.aO, mask, bitpos)).ij(element, originalHash, elementHash, ((5 + shift) | 0));
  }
  return false;
});
$p.sy = (function(element, originalHash, elementHash, shift) {
  var mask = $m_sci_Node$().cG(elementHash, shift);
  var bitpos = $m_sci_Node$().bY(mask);
  if (((this.a3 & bitpos) !== 0)) {
    var index = $m_sci_Node$().bJ(this.a3, mask, bitpos);
    var element0 = this.da(index);
    if (Object.is(element0, element)) {
      return this;
    } else {
      var element0UnimprovedHash = this.cE(index);
      var element0Hash = $m_sc_Hashing$().bs(element0UnimprovedHash);
      if (((originalHash === element0UnimprovedHash) && $m_sr_BoxesRunTime$().i(element0, element))) {
        return this;
      } else {
        return this.tX(bitpos, element0Hash, this.my(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0)));
      }
    }
  }
  if (((this.aO & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().bJ(this.aO, mask, bitpos);
    var subNode = this.d9(index$2);
    var subNodeNew$2 = subNode.sz(element, originalHash, elementHash, ((5 + shift) | 0));
    if ((subNode === subNodeNew$2)) {
      return this;
    } else {
      return this.tZ(bitpos, subNode, subNodeNew$2);
    }
  }
  return this.tV(bitpos, element, originalHash, elementHash);
});
$p.my = (function(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionSetNode(originalKeyHash0, keyHash0, $m_sci_Vector$().bF($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [key0, key1])));
  } else {
    var mask0 = $m_sci_Node$().cG(keyHash0, shift);
    var mask1 = $m_sci_Node$().cG(keyHash1, shift);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().bY(mask0) | $m_sci_Node$().bY(mask1));
      var newCachedHashCode = ((keyHash0 + keyHash1) | 0);
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedSetNode(dataMap, 0, new $ac_O([key0, key1]), new $ac_I(new Int32Array([originalKeyHash0, originalKeyHash1])), 2, newCachedHashCode) : new $c_sci_BitmapIndexedSetNode(dataMap, 0, new $ac_O([key1, key0]), new $ac_I(new Int32Array([originalKeyHash1, originalKeyHash0])), 2, newCachedHashCode));
    } else {
      var nodeMap = $m_sci_Node$().bY(mask0);
      var node = this.my(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedSetNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().hu, node.O(), node.bN());
    }
  }
});
$p.gU = (function() {
  return (this.a3 !== 0);
});
$p.ix = (function() {
  return $m_jl_Integer$().bE(this.a3);
});
$p.im = (function() {
  return (this.aO !== 0);
});
$p.it = (function() {
  return $m_jl_Integer$().bE(this.aO);
});
$p.d4 = (function(bitpos) {
  return $m_jl_Integer$().bE((this.a3 & (((-1) + bitpos) | 0)));
});
$p.fD = (function(bitpos) {
  return $m_jl_Integer$().bE((this.aO & (((-1) + bitpos) | 0)));
});
$p.tZ = (function(bitpos, oldNode, newNode) {
  var idx = (((((-1) + this.bo.a.length) | 0) - this.fD(bitpos)) | 0);
  var src = this.bo;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.q(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedSetNode(this.a3, this.aO, dst, this.cr, ((((this.bw - oldNode.O()) | 0) + newNode.O()) | 0), ((((this.ca - oldNode.bN()) | 0) + newNode.bN()) | 0));
});
$p.tV = (function(bitpos, key, originalHash, elementHash) {
  var dataIx = this.d4(bitpos);
  var src = this.bo;
  var dst = new $ac_O(((1 + src.a.length) | 0));
  src.q(0, dst, 0, dataIx);
  dst.a[dataIx] = key;
  var destPos = ((1 + dataIx) | 0);
  var length = ((src.a.length - dataIx) | 0);
  src.q(dataIx, dst, destPos, length);
  var dstHashes = this.rV(this.cr, dataIx, originalHash);
  return new $c_sci_BitmapIndexedSetNode((this.a3 | bitpos), this.aO, dst, dstHashes, ((1 + this.bw) | 0), ((this.ca + elementHash) | 0));
});
$p.tX = (function(bitpos, elementHash, node) {
  var dataIx = this.d4(bitpos);
  var idxNew = (((((-1) + this.bo.a.length) | 0) - this.fD(bitpos)) | 0);
  var src = this.bo;
  var dst = new $ac_O(src.a.length);
  src.q(0, dst, 0, dataIx);
  var srcPos = ((1 + dataIx) | 0);
  var length = ((idxNew - dataIx) | 0);
  src.q(srcPos, dst, dataIx, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((1 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-1) + ((src.a.length - idxNew) | 0)) | 0);
  src.q(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.jU(this.cr, dataIx);
  return new $c_sci_BitmapIndexedSetNode((this.a3 ^ bitpos), (this.aO | bitpos), dst, dstHashes, (((((-1) + this.bw) | 0) + node.O()) | 0), ((((this.ca - elementHash) | 0) + node.bN()) | 0));
});
$p.vu = (function(bitpos, keyHash, node) {
  var dataIx = this.d4(bitpos);
  var idxNew = (((((-1) + this.bo.a.length) | 0) - this.fD(bitpos)) | 0);
  var src = this.bo;
  var srcPos = ((1 + dataIx) | 0);
  var dest = this.bo;
  var length = ((idxNew - dataIx) | 0);
  src.q(srcPos, dest, dataIx, length);
  this.bo.a[idxNew] = node;
  this.a3 = (this.a3 ^ bitpos);
  this.aO = (this.aO | bitpos);
  this.cr = this.jU(this.cr, dataIx);
  this.bw = (((((-1) + this.bw) | 0) + node.O()) | 0);
  this.ca = ((((this.ca - keyHash) | 0) + node.bN()) | 0);
  return this;
});
$p.U = (function(f) {
  var thisPayloadArity = $m_jl_Integer$().bE(this.a3);
  var i$1 = 0;
  while ((i$1 < thisPayloadArity)) {
    f.b(this.da(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var thisNodeArity = $m_jl_Integer$().bE(this.aO);
  var j = 0;
  while ((j < thisNodeArity)) {
    this.d9(j).U(f);
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
            isValidSubset = $m_sr_BoxesRunTime$().i(this.da($m_sci_Node$().fy(this.a3, bitpos)), that.da($m_sci_Node$().fy(that.a3, bitpos)));
          } else {
            var thisDataIndex = $m_sci_Node$().fy(this.a3, bitpos);
            var payload = this.da(thisDataIndex);
            var subNode = that.d9($m_sci_Node$().fy(that.aO, bitpos));
            var elementUnimprovedHash = this.cE(thisDataIndex);
            var elementHash = $m_sc_Hashing$().bs(elementUnimprovedHash);
            isValidSubset = subNode.ij(payload, elementUnimprovedHash, elementHash, ((5 + shift) | 0));
          }
        } else if (((that.a3 & bitpos) === 0)) {
          var subNode0 = this.d9($m_sci_Node$().fy(this.aO, bitpos));
          var subNode1 = that.d9($m_sci_Node$().fy(that.aO, bitpos));
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
$p.l = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedSetNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.ca === that.ca) && (this.aO === that.aO)) && (this.a3 === that.a3)) && (this.bw === that.bw)) && $m_ju_Arrays$().jH(this.cr, that.cr))) {
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
  return $m_sc_StringOps$().uF("BitmapIndexedSetNode(size=%s, dataMap=%x, nodeMap=%x)", $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [this.bw, this.a3, this.aO]));
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
  return new $c_sci_BitmapIndexedSetNode(this.a3, this.aO, contentClone, this.cr.m(), this.bw, this.ca);
});
$p.m8 = (function(f) {
  var iN = $m_jl_Integer$().bE(this.a3);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.ba(this.da(i$1), this.cE(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().bE(this.aO);
  var j = 0;
  while ((j < jN)) {
    this.d9(j).m8(f);
    j = ((1 + j) | 0);
  }
});
$p.rp = (function() {
  return this.rn();
});
$p.sz = (function(element, originalHash, hash, shift) {
  return this.sy(element, originalHash, hash, shift);
});
$p.il = (function(index) {
  return this.d9(index);
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
  this.li = 0;
  this.eq = 0;
  this.aS = null;
  this.li = originalHash;
  this.eq = hash;
  this.aS = content;
  $m_s_Predef$().sg((this.aS.n() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.gW = (function(key) {
  var iter = this.aS.e();
  var i = 0;
  while (iter.k()) {
    if ($m_sr_BoxesRunTime$().i(iter.d().be(), key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.O = (function() {
  return this.aS.n();
});
$p.lQ = (function(key, originalHash, hash, shift) {
  var this$1 = this.jL(key, originalHash, hash, shift);
  if (this$1.c()) {
    $m_sc_Iterator$().D.d();
    throw new $c_jl_ClassCastException();
  } else {
    return this$1.E();
  }
});
$p.jL = (function(key, originalHash, hash, shift) {
  if ((this.eq === hash)) {
    var index = this.gW(key);
    return ((index >= 0) ? new $c_s_Some(this.aS.x(index).b9()) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.me = (function(key, originalHash, hash, shift, f) {
  if ((this.eq === hash)) {
    var x1 = this.gW(key);
    return ((x1 === (-1)) ? f.L() : this.aS.x(x1).b9());
  } else {
    return f.L();
  }
});
$p.m0 = (function(key, originalHash, hash, shift) {
  return ((this.eq === hash) && (this.gW(key) >= 0));
});
$p.sA = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.gW(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.aS.x(index).b9(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.aS.eg(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.aS.bD(new $c_T2(key, value))));
});
$p.im = (function() {
  return false;
});
$p.it = (function() {
  return 0;
});
$p.d8 = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.gU = (function() {
  return true;
});
$p.ix = (function() {
  return this.aS.n();
});
$p.dx = (function(index) {
  return this.aS.x(index).be();
});
$p.dy = (function(index) {
  return this.aS.x(index).b9();
});
$p.mf = (function(index) {
  return this.aS.x(index);
});
$p.cE = (function(index) {
  return this.li;
});
$p.U = (function(f) {
  this.aS.U(f);
});
$p.fw = (function(f) {
  this.aS.U(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.be();
      var v = x0$1$2$2.b9();
      return f.ba(k, v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  })));
});
$p.l = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.eq === that.eq) && (this.aS.n() === that.aS.n()))) {
      var iter = this.aS.e();
      while (iter.k()) {
        var x1$2 = iter.d();
        if ((x1$2 === null)) {
          throw new $c_s_MatchError(x1$2);
        }
        var key = x1$2.be();
        var value = x1$2.b9();
        var index = that.gW(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().i(value, that.aS.x(index).b9())))) {
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
  return Math.imul(this.aS.n(), this.eq);
});
$p.ro = (function() {
  return new $c_sci_HashCollisionMapNode(this.li, this.eq, this.aS);
});
$p.il = (function(index) {
  return this.d8(index);
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
  this.jd = 0;
  this.gn = 0;
  this.aY = null;
  this.jd = originalHash;
  this.gn = hash;
  this.aY = content;
  $m_s_Predef$().sg((this.aY.n() >= 2));
}
$p = $c_sci_HashCollisionSetNode.prototype = new $h_sci_SetNode();
$p.constructor = $c_sci_HashCollisionSetNode;
/** @constructor */
function $h_sci_HashCollisionSetNode() {
}
$h_sci_HashCollisionSetNode.prototype = $p;
$p.ij = (function(element, originalHash, hash, shift) {
  return ((this.gn === hash) && $f_sc_SeqOps__contains__O__Z(this.aY, element));
});
$p.sz = (function(element, originalHash, hash, shift) {
  return (this.ij(element, originalHash, hash, shift) ? this : new $c_sci_HashCollisionSetNode(originalHash, hash, this.aY.bD(element)));
});
$p.im = (function() {
  return false;
});
$p.it = (function() {
  return 0;
});
$p.d9 = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.gU = (function() {
  return true;
});
$p.ix = (function() {
  return this.aY.n();
});
$p.da = (function(index) {
  return this.aY.x(index);
});
$p.cE = (function(index) {
  return this.jd;
});
$p.O = (function() {
  return this.aY.n();
});
$p.U = (function(f) {
  var iter = this.aY.e();
  while (iter.k()) {
    f.b(iter.d());
  }
});
$p.bN = (function() {
  return Math.imul(this.aY.n(), this.gn);
});
$p.mR = (function(that, shift) {
  if ((this === that)) {
    return true;
  } else if ((that instanceof $c_sci_HashCollisionSetNode)) {
    if ((this.aY.n() <= that.aY.n())) {
      var this$1 = this.aY;
      var eta$0$1 = that.aY;
      var res = true;
      var it = this$1.e();
      while ((res && it.k())) {
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
$p.l = (function(that) {
  if ((that instanceof $c_sci_HashCollisionSetNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.gn === that.gn) && (this.aY.n() === that.aY.n()))) {
      var this$3 = this.aY;
      var eta$0$1 = that.aY;
      var res = true;
      var it = this$3.e();
      while ((res && it.k())) {
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
$p.m8 = (function(f) {
  var iter = this.aY.e();
  while (iter.k()) {
    var next = iter.d();
    f.ba(next, this.jd);
  }
});
$p.rp = (function() {
  return new $c_sci_HashCollisionSetNode(this.jd, this.gn, this.aY);
});
$p.il = (function(index) {
  return this.d9(index);
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
  this.lj = null;
  $n_sci_HashMap$ = this;
  this.lj = new $c_sci_HashMap($m_sci_MapNode$().qi);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.uH = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().lN(source).mJ());
});
$p.am = (function(it) {
  return this.uH(it);
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
  this.hF = null;
  $n_sci_HashSet$ = this;
  this.hF = new $c_sci_HashSet($m_sci_SetNode$().qn);
}
$p = $c_sci_HashSet$.prototype = new $h_O();
$p.constructor = $c_sci_HashSet$;
/** @constructor */
function $h_sci_HashSet$() {
}
$h_sci_HashSet$.prototype = $p;
$p.uI = (function(source) {
  return ((source instanceof $c_sci_HashSet) ? source : ((source.p() === 0) ? this.hF : new $c_sci_HashSetBuilder().lO(source).mK()));
});
$p.as = (function() {
  return new $c_sci_HashSetBuilder();
});
$p.am = (function(source) {
  return this.uI(source);
});
$p.bO = (function() {
  return this.hF;
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
$p.o = (function() {
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
$p.o = (function() {
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
  return new $c_sci_MapBuilderImpl().qW(it).sh();
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
$p.uK = (function(it) {
  return ((it.p() === 0) ? $m_sci_Set$EmptySet$() : ((it instanceof $c_sci_HashSet) ? it : (false ? it : ((it instanceof $c_sci_Set$Set1) ? it : ((it instanceof $c_sci_Set$Set2) ? it : ((it instanceof $c_sci_Set$Set3) ? it : ((it instanceof $c_sci_Set$Set4) ? it : ((it instanceof $c_sci_HashMap$HashKeySet) ? it : ((it instanceof $c_sci_MapOps$ImmutableKeySet) ? it : new $c_sci_SetBuilderImpl().qX(it).si())))))))));
});
$p.as = (function() {
  return new $c_sci_SetBuilderImpl();
});
$p.am = (function(source) {
  return this.uK(source);
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
  var x1 = coll.p();
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
$p.uL = (function(it) {
  var k = it.p();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).qZ(it);
});
$p.as = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.bO = (function() {
  return $ct_scm_HashSet__(new $c_scm_HashSet());
});
$p.am = (function(source) {
  return this.uL(source);
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
$p.ba = (function(x0, x1) {
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
  return this.c5(x, $m_s_PartialFunction$().j4);
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
  this.jv = null;
  this.qK = null;
  this.qQ = null;
  this.qL = null;
  this.qN = null;
  this.qM = null;
  this.qO = null;
  this.qP = null;
  this.lJ = null;
  $n_Lsi\uff3ftool_adversaries_Adversary$ = this;
  this.jv = ($m_Lsi\uff3ftool_adversaries_Adversary$(), new $c_Lsi\uff3ftool_adversaries_Adversary("Brandenburg-Prussia", $m_sci_Vector$().bF($m_sr_ScalaRunTime$().B(new ($d_Lsi\uff3ftool_adversaries_Rule.r().C)([new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "On each board add 1 Town to land #3.", $m_s_None$())]))), $m_s_None$(), "On each board with Town/City, add 1 Town to a land without Town.", $m_sci_Nil$().z($m_sr_ScalaRunTime$().B(new ($d_sci_List.r().C)([$m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 0, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 0, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 1]))))]))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((invaders, level) => $m_Lsi\uff3ftool_adversaries_InvaderCards$().iz(invaders, (level | 0))))));
  this.qK = ($m_Lsi\uff3ftool_adversaries_Adversary$(), new $c_Lsi\uff3ftool_adversaries_Adversary("England", $m_sci_Vector$().bF($m_sr_ScalaRunTime$().B(new ($d_Lsi\uff3ftool_adversaries_Rule.r().C)([new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Build__Lsi\uff3ftool_adversaries_Stage(), "Invader Build Cards affect matching lands without Invaders if they are adjacent to at least 2 Town/City.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(2, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "On each board add 1 City to land #1 and 1 Town to land #2", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(3, $s_Lsi\uff3ftool_adversaries_Stage$__HighImmigration__Lsi\uff3ftool_adversaries_Stage(), "Put the \"High Immigration\" tile on the Invader board, to the left of \"Ravage\". The Invaders take this Build action each Invader phase before Ravaging. Cards slide left from Ravage to it, and from it to the discard pile. Remove the tile when a Stage II card slides onto it, putting that card in the discard.", new $c_s_Some(4)), new $c_Lsi\uff3ftool_adversaries_Rule(4, $s_Lsi\uff3ftool_adversaries_Stage$__HighImmigration__Lsi\uff3ftool_adversaries_Stage(), "Put the \"High Immigration\" tile on the Invader board, to the left of \"Ravage\". The Invaders take this Build action each Invader phase before Ravaging. Cards slide left from Ravage to it, and from it to the discard pile. ", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(5, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "Town/City have +1 Health.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(6, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "Add an additional Fear to the Fear Pool per player in the game.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(6, $s_Lsi\uff3ftool_adversaries_Stage$__HighImmigration__Lsi\uff3ftool_adversaries_Stage(), "During any Invader Phase where you resolve no Fear Cards, perform the Build from High Immigration twice. (This has no effect if no card is on the extra Build slot.)", $m_s_None$())]))), new $c_s_Some("If 7 or more Town/City are ever in a single land, the Invaders win."), "On each board with Town/City, Build in the land with the most Town/City.", $m_sci_Nil$().z($m_sr_ScalaRunTime$().B(new ($d_sci_List.r().C)([$m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 2])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 2])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 1]))))]))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((invaders$2, level$2) => invaders$2))));
  this.qQ = ($m_Lsi\uff3ftool_adversaries_Adversary$(), new $c_Lsi\uff3ftool_adversaries_Adversary("Sweden", $m_sci_Vector$().bF($m_sr_ScalaRunTime$().B(new ($d_Lsi\uff3ftool_adversaries_Rule.r().C)([new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "If the Invaders do at least 6 Damage to the land during Ravage, add an extra Blight. The additional Blight does not destroy Presence or cause cascades.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(2, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "On each board add 1 City to land #4. On boards where land #4 starts with Blight, put that Blight in land #5 instead.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(3, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "Town deal 3 Damage. City deal 5 Damage.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(4, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "After adding all other Invaders, Accelerate the Invader Deck. On each board, add 1 Town to the land of that terrain with the fewest Invaders.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(5, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "When Ravaging adds at least 1 Blight to a land, also add 1 Town to an adjacent land without Town/City. Cascading Blight does not cause this effect.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(6, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "On each board add 1 Town and 1 Blight to land #8. The Blight comes from the box, not the Blight Card.", $m_s_None$())]))), $m_s_None$(), "After Invaders Explore into each land this Phase, if that land has at least as many Invaders as Dahan, replace 1 Dahan with 1 Town.", $m_sci_Nil$().z($m_sr_ScalaRunTime$().B(new ($d_sci_List.r().C)([$m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 0, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 1, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 2]))))]))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((invaders$3, level$3$1) => invaders$3))));
  this.qL = ($m_Lsi\uff3ftool_adversaries_Adversary$(), new $c_Lsi\uff3ftool_adversaries_Adversary("France", $m_sci_Vector$().bF($m_sr_ScalaRunTime$().B(new ($d_Lsi\uff3ftool_adversaries_Rule.r().C)([new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Explore__Lsi\uff3ftool_adversaries_Stage(), "Except during Setup: After Invaders successfully Explore into a land which had no Town/City, add 1 Explorer there.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(2, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "Put the \"Slave Rebellion\" event under the top 3 cards of the Event Deck.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(2, $s_Lsi\uff3ftool_adversaries_Stage$__Build__Lsi\uff3ftool_adversaries_Stage(), "After Invaders Build in a land with 2 Explorer or more, replace all but 1 Explorer there with an equal number of Town.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(3, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "On each board add 1 Town to the highest-numbered land without Town. Add 1 Town to land #1.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(4, $s_Lsi\uff3ftool_adversaries_Stage$__Build__Lsi\uff3ftool_adversaries_Stage(), "Whenever Invaders Build a Coastal City, add 1 Town to the adjacent land with the fewest Town.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(5, $s_Lsi\uff3ftool_adversaries_Stage$__RuleChange__Lsi\uff3ftool_adversaries_Stage(), "When you remove Blight from the board, put it here instead of onto the Blight Card. As soon as you have 3 Blight per player here, move it all back to the Blight Card.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(6, $s_Lsi\uff3ftool_adversaries_Stage$__Explore__Lsi\uff3ftool_adversaries_Stage(), "After resolving an Explore Card, on each board add 1 Explorer to a land without any. Fear Card effects never remove Explorer. If one would, you may instead Push that Explorer.", $m_s_None$())]))), new $c_s_Some("Before Setup, return all but 7 Town per player to the box. Invaders win if you ever cannot place a Town."), "After Exploring, on each board, pick a land of the shown terrain. If it has Town/City, add 1 Blight. Otherwise, add 1 Town.", $m_sci_Nil$().z($m_sr_ScalaRunTime$().B(new ($d_sci_List.r().C)([$m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 0, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 2]))))]))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((invaders$4, level$4$1) => invaders$4))));
  this.qN = ($m_Lsi\uff3ftool_adversaries_Adversary$(), new $c_Lsi\uff3ftool_adversaries_Adversary("Habsburg Monarchy (Livestock)", $m_sci_Vector$().bF($m_sr_ScalaRunTime$().B(new ($d_Lsi\uff3ftool_adversaries_Rule.r().C)([new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Build__Lsi\uff3ftool_adversaries_Stage(), "After the normal Build Step: In each land matching a Build Card, Gather 1 Town from a land not matching a Build Card. (In board/land order.)", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(2, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "On each board, add 1 Town to land #2 and 1 Town to the highest-numbered land without Setup symbols.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(2, $s_Lsi\uff3ftool_adversaries_Stage$__Build__Lsi\uff3ftool_adversaries_Stage(), "when Invaders would Build 1 City in an Inland land, they instead Build 2 Town.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(4, $s_Lsi\uff3ftool_adversaries_Stage$__RuleChange__Lsi\uff3ftool_adversaries_Stage(), "Town in lands without Blight are Durable: they have +2 Health, and \"Destroy Town\" effects instead deal 2 Damage (to those Town only) per Town they could Destroy. (\"Destroy all Town\" works normally.)", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(5, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "Put the Habsburg Reminder Card under the top 5 Invader Cards. When Revealed, on each board, add 1 City to a Coastal land without City and 1 Town to the 3 Inland lands with the fewest Blight.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(6, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "Ravages do +2 Damage (total) if any adjacent lands have Town. (This does not cause lands without Invaders to Ravage.)", $m_s_None$())]))), new $c_s_Some("Track how many Blight come off the Blight Card during Ravages that do 8+ Damage to the land. If that number ever exceeds players, the Invaders win."), "After Exploring: On each board with 4 or fewer Blight, add 1 Town to a land without Town/Blight. On each board with 2 or fewer Blight, do so again.", $m_sci_Nil$().z($m_sr_ScalaRunTime$().B(new ($d_sci_List.r().C)([$m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, (-1)])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 3, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([2, 3, 0]))))]))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((invaders$5, level$5$1) => $m_Lsi\uff3ftool_adversaries_InvaderCards$().t5(invaders$5, (level$5$1 | 0))))));
  this.qM = ($m_Lsi\uff3ftool_adversaries_Adversary$(), new $c_Lsi\uff3ftool_adversaries_Adversary("Habsburg Mining Expedition", $m_sci_Vector$().bF($m_sr_ScalaRunTime$().B(new ($d_Lsi\uff3ftool_adversaries_Rule.r().C)([new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__RuleChange__Lsi\uff3ftool_adversaries_Stage(), "Lands with 3 or more Invaders are Mining lands.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "When Blight added by a Ravage Action would cascade, instead Upgrade 1 Explorer/Town (before Dahan counterattack.)", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), $m_sc_StringOps$().ss("In Mining lands: Disease and modifiers to Disease affect Ravage Actions as though they were Build Actions.", 124), $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Build__Lsi\uff3ftool_adversaries_Stage(), $m_sc_StringOps$().ss("In Mining lands: During the Build Step, Build Cards cause Ravage Actions (instead of Build Actions).", 124), $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(2, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "Add 1 Explorer in each land with no Dahan. Add 1 Disease and 1 City in the highest-numbered land with a Town Setup symbol.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(3, $s_Lsi\uff3ftool_adversaries_Stage$__AfterBuild__Lsi\uff3ftool_adversaries_Stage(), "On each board: Choose a land with Explorer. Upgrade 1 Explorer there.", new $c_s_Some(5)), new $c_Lsi\uff3ftool_adversaries_Rule(4, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "Remove the Stage II 'Coastal Lands' card before randomly choosing Stage II cards. Place the 'Salt Deposits' card in place of the 2nd Stage II card.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(5, $s_Lsi\uff3ftool_adversaries_Stage$__AfterBuild__Lsi\uff3ftool_adversaries_Stage(), "On each board: Choose a land with Explorer. Build there, then Upgrade 1 Explorer. (Build normally in a Mining land.)", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(6, $s_Lsi\uff3ftool_adversaries_Stage$__Explore__Lsi\uff3ftool_adversaries_Stage(), "On boards with 3 or fewer Blight: Add +1 Explorer in each land successfully explored. (Max. 2 lands per board per Explore Card.)", $m_s_None$())]))), new $c_s_Some("At the end of the Fast Power Phase, the Invaders win if any land has at least 8 total Invaders/Blight (combined)."), "After Advancing Invader Cards: On each board, Explore in 2 lands whose terrains don't match a Ravage or Build Card (no source required).", $m_sci_Nil$().z($m_sr_ScalaRunTime$().B(new ($d_sci_List.r().C)([$m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 0, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 0, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 1, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 1]))))]))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((invaders$6, level$6$1) => $m_Lsi\uff3ftool_adversaries_InvaderCards$().t4(invaders$6, (level$6$1 | 0))))));
  this.qO = ($m_Lsi\uff3ftool_adversaries_Adversary$(), new $c_Lsi\uff3ftool_adversaries_Adversary("Russia", $m_sci_Vector$().bF($m_sr_ScalaRunTime$().B(new ($d_Lsi\uff3ftool_adversaries_Rule.r().C)([new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "On each board, add 1 Beasts and 1 Explorer to the highest-numbered land without Town/City", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "Explorer do +1 Damage. When Ravage adds Blight to a land (including cascades), Destroy 1 Beasts in that land.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(2, $s_Lsi\uff3ftool_adversaries_Stage$__RuleChange__Lsi\uff3ftool_adversaries_Stage(), "The first time each Action would Destroy Explorer: If possible, 1 of those Explorer is instead Pushed; 1 Fear when you do so.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(3, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "Ravage Cards also match lands with 3 or more Explorer. (If the land already matched the Ravage Card, it still Ravages just once.)", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(5, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "Put an unused Stage II Invader Card under the top 3 Fear Cards, and an unused Stage III Card under the top 7 Fear Cards.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(5, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "When a face down invader card in the fear deck is revealed, immediately place it in the Build space (face-up).", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(6, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "After the Ravage Step of turn 2+, on each board where it added no Blight: In the land with the most Explorer (min. 1), add 1 Explorer and 1 Town.", $m_s_None$())]))), new $c_s_Some("Put Beasts Destroyed by Adversary rules on this panel. If there are ever more Beasts on this panel than on the island, the Invaders win."), "Add 2 Explorer (total) among lands with Beasts. If you can't, instead add 2 Explorer among lands with Beasts on a different board.", $m_sci_Nil$().z($m_sr_ScalaRunTime$().B(new ($d_sci_List.r().C)([$m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 0, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 0, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([2, 2, 1]))))]))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((invaders$7, level$7$1) => $m_Lsi\uff3ftool_adversaries_InvaderCards$().wa(invaders$7, (level$7$1 | 0))))));
  this.qP = ($m_Lsi\uff3ftool_adversaries_Adversary$(), new $c_Lsi\uff3ftool_adversaries_Adversary("Scotland", $m_sci_Vector$().bF($m_sr_ScalaRunTime$().B(new ($d_Lsi\uff3ftool_adversaries_Rule.r().C)([new $c_Lsi\uff3ftool_adversaries_Rule(1, $s_Lsi\uff3ftool_adversaries_Stage$__Explore__Lsi\uff3ftool_adversaries_Stage(), "After Setup, in Coastal lands, Explore Cards add 1 Town instead of 1 Explorer . \"Coastal Lands\" Invader cards do this for maximum 2 lands per board.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(2, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), "Add 1 City to land #2.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(3, $s_Lsi\uff3ftool_adversaries_Stage$__Build__Lsi\uff3ftool_adversaries_Stage(), "In Coastal lands, Build Cards affect lands without Invaders, so long as there is an adjacent City.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(5, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), "After a Ravage Action adds Blight to a Coastal Land, add 1 Blight to that board's Ocean (without cascading). Treat the Ocean as a Coastal Wetland for this rule and for Blight removal/movement.", $m_s_None$()), new $c_Lsi\uff3ftool_adversaries_Rule(6, $s_Lsi\uff3ftool_adversaries_Stage$__AfterRavage__Lsi\uff3ftool_adversaries_Stage(), "Add 1 Town to each Inland land that matches a Ravage card and is within 1 Range of Town/City.", $m_s_None$())]))), new $c_s_Some("If the number of Coastal lands with City is ever greater than (2 x # of boards), the Invaders win."), "On the single board with the most Coastal Town/City, add 1 Town to the N lands with the fewest Town (N = # of players.)", $m_sci_Nil$().z($m_sr_ScalaRunTime$().B(new ($d_sci_List.r().C)([$m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([0, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 1, 0])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([1, 2, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([2, 2, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([2, 3, 1])))), $m_sci_Nil$().z($m_sr_ScalaRunTime$().I(new $ac_I(new Int32Array([3, 3, 1]))))]))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((invaders$8, level$8$1) => $m_Lsi\uff3ftool_adversaries_InvaderCards$().jY(invaders$8, (level$8$1 | 0))))));
  this.lJ = $m_sci_Nil$().z($m_sr_ScalaRunTime$().B(new ($d_Lsi\uff3ftool_adversaries_Adversary.r().C)([this.jv, this.qK, this.qQ, this.qL, this.qN, this.qM, this.qO, this.qP])));
}
$p = $c_Lsi\uff3ftool_adversaries_Adversary$.prototype = new $h_O();
$p.constructor = $c_Lsi\uff3ftool_adversaries_Adversary$;
/** @constructor */
function $h_Lsi\uff3ftool_adversaries_Adversary$() {
}
$h_Lsi\uff3ftool_adversaries_Adversary$.prototype = $p;
$p.md = (function(name) {
  var this$1 = $m_Lsi\uff3ftool_adversaries_Adversary$().lJ;
  _return: {
    var these = this$1;
    while ((!these.c())) {
      if ((these.o().e3 === name)) {
        var this$2 = new $c_s_Some(these.o());
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
  var this$1 = $m_s_Option$().jT(secondary).h6();
  $m_sci_Vector$();
  var b = new $c_sci_VectorBuilder();
  var it = this$1.e();
  while (it.k()) {
    b.gH($p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForAdv__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__sci_Vector($thiz, stage, it.d()));
  }
  return $x_1.jE(b.iB());
}
function $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForAdv__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__sci_Vector($thiz, stage, sel) {
  return $f_sc_StrictOptimizedIterableOps__collect__s_PartialFunction__O(sel.c4.hT, new $c_Lsi\uff3ftool_adversaries_RuleSet$$anon$1(stage, sel, $thiz));
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
$p.uM = (function(primary, secondary) {
  var escalation3$1 = (secondary.c() ? $m_s_None$() : new $c_s_Some(secondary.E().c4.gz));
  var lossConditionSecondary$1 = (secondary.c() ? $m_s_None$() : secondary.E().c4.gB);
  var setup$1 = $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForBoth__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__s_Option__sci_Vector(this, $s_Lsi\uff3ftool_adversaries_Stage$__Setup__Lsi\uff3ftool_adversaries_Stage(), primary, secondary);
  var afterRavage$1 = $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForBoth__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__s_Option__sci_Vector(this, $s_Lsi\uff3ftool_adversaries_Stage$__AfterRavage__Lsi\uff3ftool_adversaries_Stage(), primary, secondary);
  var ravage$1 = $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForBoth__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__s_Option__sci_Vector(this, $s_Lsi\uff3ftool_adversaries_Stage$__Ravage__Lsi\uff3ftool_adversaries_Stage(), primary, secondary);
  var afterBuild$1 = $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForBoth__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__s_Option__sci_Vector(this, $s_Lsi\uff3ftool_adversaries_Stage$__AfterBuild__Lsi\uff3ftool_adversaries_Stage(), primary, secondary);
  var highImmigration$1 = $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForBoth__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__s_Option__sci_Vector(this, $s_Lsi\uff3ftool_adversaries_Stage$__HighImmigration__Lsi\uff3ftool_adversaries_Stage(), primary, secondary);
  var build$1 = $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForBoth__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__s_Option__sci_Vector(this, $s_Lsi\uff3ftool_adversaries_Stage$__Build__Lsi\uff3ftool_adversaries_Stage(), primary, secondary);
  var explore$1 = $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForBoth__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__s_Option__sci_Vector(this, $s_Lsi\uff3ftool_adversaries_Stage$__Explore__Lsi\uff3ftool_adversaries_Stage(), primary, secondary);
  var ruleChanges$1 = $p_Lsi\uff3ftool_adversaries_RuleSet$__findRulesForBoth__Lsi\uff3ftool_adversaries_Stage__Lsi\uff3ftool_SIAdversaryTool$AdversarySelector__s_Option__sci_Vector(this, $s_Lsi\uff3ftool_adversaries_Stage$__RuleChange__Lsi\uff3ftool_adversaries_Stage(), primary, secondary);
  return new $c_Lsi\uff3ftool_adversaries_RuleSet(setup$1, afterRavage$1, ravage$1, afterBuild$1, highImmigration$1, build$1, primary.c4.gz, escalation3$1, explore$1, primary.c4.gB, lossConditionSecondary$1, ruleChanges$1);
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
  this.k8 = null;
  this.n6 = onTryParam$1;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.k8 = parentParam$2;
}
$p = $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2;
/** @constructor */
function $h_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2() {
}
$h_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2.prototype = $p;
$p.iv = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.jS = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.h3 = (function(nextValue, transaction) {
  this.n6.ba(nextValue, transaction);
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
  this.ka = null;
  this.na = null;
  this.nb = onNextParam$2;
  this.n9 = handleObserverErrors$3;
  this.ka = onErrorParam$2;
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
$p.eO = (function(nextValue) {
  try {
    this.nb.b(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.n9) {
      this.iu(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cV(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.iu = (function(error) {
  try {
    if (this.ka.ci(error)) {
      this.ka.b(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cV(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cV(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.eP = (function(nextValue) {
  nextValue.cD(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((error) => {
    this.iu(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue$2) => {
    this.eO(nextValue$2);
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
  this.kb = null;
  this.nc = false;
  this.nd = null;
  this.kb = onTryParam$2;
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
$p.eO = (function(nextValue) {
  this.eP(new $c_s_util_Success(nextValue));
});
$p.iu = (function(error) {
  this.eP(new $c_s_util_Failure(error));
});
$p.eP = (function(nextValue) {
  try {
    if (this.kb.ci(nextValue)) {
      this.kb.b(nextValue);
    } else {
      nextValue.cD(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cV(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.nc && nextValue.rX())) {
      this.iu(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.cD(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((originalError) => {
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
  this.sE = null;
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
$p.wq = (function() {
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
  this.t = null;
  $n_Lcom_raquo_laminar_api_package$ = this;
  this.t = new $c_Lcom_raquo_laminar_api_package$$anon$1();
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
  this.kw = null;
  this.p7 = initialContext;
  this.p9 = preferStrictMode;
  this.p8 = insertFn;
  this.kw = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.lW = (function(element) {
  var this$1 = this.p7;
  var insertContext = (this$1.c() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().w6(element, this.p9, this.kw) : this$1.E());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((mountContext) => this.p8.lR(insertContext, mountContext.kD, this.kw)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iG(element.cW, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.du = (function(element) {
  this.lW(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  eO: 1,
  Z: 1,
  eS: 1,
  eP: 1
}));
function $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__($thiz, name, prefixes) {
  $thiz.fQ = name;
  $thiz.fR = prefixes;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_StyleProp() {
  this.fQ = null;
  this.fR = null;
}
$p = $c_Lcom_raquo_laminar_keys_StyleProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_StyleProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_StyleProp() {
}
$h_Lcom_raquo_laminar_keys_StyleProp.prototype = $p;
$p.gD = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, $dp_toString__T(value), new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, styleProp, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().wh(element, styleProp, value$2);
  })));
});
$p.gF = (function(values, ev) {
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.eQ(), new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((el, v, _$1) => {
    $m_Lcom_raquo_laminar_DomApi$().wf(el, this, v);
  })));
});
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.po = null;
  this.kH = null;
  this.po = $m_s_None$();
  this.kH = $m_Lcom_raquo_laminar_DomApi$().ua(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.iC = (function(maybeNextParent) {
  this.po = maybeNextParent;
});
$p.iH = (function(maybeNextParent) {
});
$p.du = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gJ(parentNode, this, (void 0));
});
$p.aX = (function() {
  return this.kH;
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
  this.kM = null;
  this.ps = $m_s_None$();
  this.kM = $m_Lcom_raquo_laminar_DomApi$().ud(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.iC = (function(maybeNextParent) {
  this.ps = maybeNextParent;
});
$p.iH = (function(maybeNextParent) {
});
$p.du = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gJ(parentNode, this, (void 0));
});
$p.wu = (function() {
  return this.kM.data;
});
$p.aX = (function() {
  return this.kM;
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
  $thiz.s = "";
  return $thiz;
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException();
  }
  $thiz.s = str;
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
  this.s = null;
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.r2 = (function(str) {
  var str$1 = $m_jl_String$().vx(str, 0, str.a.length);
  this.s = (("" + this.s) + str$1);
  return this;
});
$p.v = (function() {
  return this.s;
});
$p.n = (function() {
  return this.s.length;
});
$p.ri = (function(index) {
  return this.s.charCodeAt(index);
});
$p.rP = (function(srcBegin, srcEnd, dst, dstBegin) {
  $f_T__getChars__I__I__AC__I__V(this.s, srcBegin, srcEnd, dst, dstBegin);
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
  if (($thiz.f0 === null)) {
    $thiz.el = (("" + $thiz.el) + s);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__V($thiz, s1, s2) {
  if (($thiz.f0 === null)) {
    $thiz.el = ((("" + $thiz.el) + s1) + s2);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s1, s2]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__T__V($thiz, s1, s2, s3) {
  if (($thiz.f0 === null)) {
    $thiz.el = (($thiz.el + (("" + s1) + s2)) + s3);
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
      var this$2 = $thiz.f0;
      this$2.s = (("" + this$2.s) + t);
      i = ((1 + i) | 0);
    }
  } catch (e) {
    if ((!false)) {
      throw e;
    }
  }
}
function $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter($thiz, localeInfo, format, args) {
  if ($thiz.kX) {
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
        $thiz.jN(37, flags, (-2));
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
        $thiz.jN(conversionLower, flags, illegalFlags);
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
        arg.x7($thiz, formattableFlags, width, precision);
      } else {
        if (((2 & flags) !== 0)) {
          $thiz.jN(conversionLower, flags, 2);
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
          $thiz.iq(conversionLower, arg);
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
        var $x_3 = $m_RTLong$().mD(t.r, t.w);
      } else {
        if ((!false)) {
          $thiz.iq(conversionLower, arg);
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
        $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, arg.k2(radix), prefix);
      } else {
        if ($isInt(arg)) {
          var x2$5 = (arg | 0);
          var str$6 = (isOctal ? (+(x2$5 >>> 0.0)).toString(8) : (+(x2$5 >>> 0.0)).toString(16));
        } else {
          if ((!(arg instanceof $c_RTLong))) {
            $thiz.iq(conversionLower, arg);
          }
          var t$1 = $uJ(arg);
          var lo$1 = t$1.r;
          var hi$1 = t$1.w;
          var str$6 = (isOctal ? $m_jl_Long$().ve(lo$1, hi$1) : $m_jl_Long$().rZ(lo$1, hi$1));
        }
        if (((76 & flags) !== 0)) {
          $thiz.jN(conversionLower, flags, 76);
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
          $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().vg(x2$6), flags, precision, conversionLower, localeInfo, width);
        }
      } else if (false) {
        $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().vf(arg), flags, precision, conversionLower, localeInfo, width);
      } else {
        $thiz.iq(conversionLower, arg);
      }
      break;
    }
    case 97: {
      if (((typeof arg) === "number")) {
        $p_ju_Formatter__formatHexFloatingPoint__I__I__I__D__V($thiz, flags, width, precision, (+arg));
      } else {
        $thiz.iq(conversionLower, arg);
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
  var rounded = x.sj(((1 + digitsAfterDot) | 0));
  var signStr = (rounded.dC ? "-" : "");
  var intStr = rounded.dD;
  var fractionalDigitCount = (((-1) + intStr.length) | 0);
  var missingZeros = ((digitsAfterDot - fractionalDigitCount) | 0);
  var integerPart = intStr.substring(0, 1);
  var fractionalPart = (("" + intStr.substring(1)) + $m_ju_Formatter$().mq(missingZeros));
  var significandStr = (((fractionalPart === "") && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + fractionalPart));
  var exponent = ((fractionalDigitCount - rounded.dh) | 0);
  var exponentSign = ((exponent < 0) ? "-" : "+");
  var this$2 = ((exponent < 0) ? ((-exponent) | 0) : exponent);
  var exponentAbsStr0 = ("" + this$2);
  var exponentAbsStr = ((exponentAbsStr0.length === 1) ? ("0" + exponentAbsStr0) : exponentAbsStr0);
  return ((((signStr + significandStr) + "e") + exponentSign) + exponentAbsStr);
}
function $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, scale, forceDecimalSep) {
  var rounded = x.wj(scale);
  var signStr = (rounded.dC ? "-" : "");
  var intStr = rounded.dD;
  var intStrLen = intStr.length;
  var minDigits = ((1 + scale) | 0);
  var expandedIntStr = ((intStrLen >= minDigits) ? intStr : (("" + $m_ju_Formatter$().mq(((minDigits - intStrLen) | 0))) + intStr));
  var dotPos = ((expandedIntStr.length - scale) | 0);
  var integerPart = (signStr + expandedIntStr.substring(0, dotPos));
  return (((scale === 0) && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + expandedIntStr.substring(dotPos)));
}
function $p_ju_Formatter__generalScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, precision, forceDecimalSep) {
  var p = ((precision === 0) ? 1 : precision);
  var rounded = x.sj(p);
  var orderOfMagnitude = (((((-1) + rounded.dD.length) | 0) - rounded.dh) | 0);
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
    var t = $m_jl_FloatingPointBits$().uk(arg);
    var lo = t.r;
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
    var lo$3 = t$1.r;
    var hi$4 = t$1.w;
    var exponent = (x1___3 | 0);
    var t$2 = new $c_RTLong(lo$3, hi$4);
    var lo$4 = t$2.r;
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
  $thiz.f0 = dest;
  $thiz.pD = formatterLocaleInfo;
  $thiz.el = "";
  $thiz.kX = false;
  return $thiz;
}
function $ct_ju_Formatter__($thiz) {
  $ct_ju_Formatter__jl_Appendable__ju_Formatter$LocaleInfo__($thiz, null, $m_ju_Formatter$RootLocaleInfo$());
  return $thiz;
}
/** @constructor */
function $c_ju_Formatter() {
  this.f0 = null;
  this.pD = null;
  this.el = null;
  this.kX = false;
}
$p = $c_ju_Formatter.prototype = new $h_O();
$p.constructor = $c_ju_Formatter;
/** @constructor */
function $h_ju_Formatter() {
}
$h_ju_Formatter.prototype = $p;
$p.uE = (function(format, args) {
  return $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter(this, this.pD, format, args);
});
$p.v = (function() {
  if (this.kX) {
    throw new $c_ju_FormatterClosedException();
  }
  return ((this.f0 === null) ? this.el : this.f0.s);
});
$p.mr = (function(flags) {
  throw new $c_ju_IllegalFormatFlagsException($p_ju_Formatter__flagsToString__I__T(this, flags));
});
$p.jN = (function(conversionLower, flags, illegalFlags) {
  throw new $c_ju_FormatFlagsConversionMismatchException($p_ju_Formatter__flagsToString__I__T(this, (flags & illegalFlags)), conversionLower);
});
$p.iq = (function(conversionLower, arg) {
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
$p.ci = (function(x) {
  return false;
});
$p.lS = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.b = (function(v1) {
  this.lS(v1);
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
$p.gM = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.d6 = (function(n) {
  return this.h5(n, (-1));
});
$p.h5 = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.v = (function() {
  return "<iterator>";
});
$p.fv = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.iA = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op);
});
$p.bZ = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.eK = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fH = (function() {
  return $m_sci_Nil$().z(this);
});
$p.k0 = (function(evidence$2) {
  return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2);
});
$p.p = (function() {
  return (-1);
});
/** @constructor */
function $c_sc_Iterable$() {
  this.gi = null;
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
  this.ld = null;
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
  $thiz.eo = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.eo = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.r7 = (function(elems) {
  return this.eo.e5(elems);
});
$p.un = (function() {
  return this.eo.bO();
});
$p.jJ = (function(it) {
  return this.eo.am(it);
});
$p.as = (function() {
  return this.eo.as();
});
$p.am = (function(source) {
  return this.jJ(source);
});
$p.bO = (function() {
  return this.un();
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
  return $thiz.gS(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.bc(idx) > 0));
}
function $f_sc_SeqOps__indexOf__O__I__I($thiz, elem, from) {
  return $thiz.fz(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sr_BoxesRunTime$().i(elem, x$1$2$2))), from);
}
function $f_sc_SeqOps__contains__O__Z($thiz, elem) {
  return $thiz.jI(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$3$2$2) => $m_sr_BoxesRunTime$().i(x$3$2$2, elem))));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.bc(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.p();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.p();
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
  var b = $thiz.aE().as();
  var it = $thiz.e();
  while (it.k()) {
    b.ar(f.b(it.d()));
  }
  return b.aM();
}
function $f_sc_StrictOptimizedIterableOps__flatMap__F1__O($thiz, f) {
  var b = $thiz.aE().as();
  var it = $thiz.e();
  while (it.k()) {
    b.b5(f.b(it.d()));
  }
  return b.aM();
}
function $f_sc_StrictOptimizedIterableOps__collect__s_PartialFunction__O($thiz, pf) {
  var b = $thiz.aE().as();
  var marker = $m_sr_Statics$PFMarker$();
  var it = $thiz.e();
  while (it.k()) {
    var elem = it.d();
    var v = pf.c5(elem, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((marker) => ((x$2$2) => marker))(marker)));
    if ((marker !== v)) {
      b.ar(v);
    }
  }
  return b.aM();
}
function $f_sc_StrictOptimizedIterableOps__flatten__F1__O($thiz, toIterableOnce) {
  var b = $thiz.aE().as();
  var it = $thiz.e();
  while (it.k()) {
    b.b5(toIterableOnce.b(it.d()));
  }
  return b.aM();
}
function $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O($thiz, that) {
  var b = $thiz.aE().as();
  var it1 = $thiz.e();
  var it2 = that.e();
  while ((it1.k() && it2.k())) {
    b.ar(new $c_T2(it1.d(), it2.d()));
  }
  return b.aM();
}
/** @constructor */
function $c_sci_Iterable$() {
  this.gi = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.uJ = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.am.call(this, it));
});
$p.am = (function(it) {
  return this.uJ(it);
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
  this.f8 = null;
  $n_sci_LazyList$ = this;
  this.f8 = new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$()))).rD();
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.e5 = (function(elems) {
  return this.jK(elems);
});
$p.sk = (function(ll, f) {
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((restRef) => (() => {
    var it = new $c_sr_ObjectRef(null);
    var itHasNext = false;
    var rest = new $c_sr_ObjectRef(restRef.K);
    while (((!itHasNext) && (!rest.K.c()))) {
      it.K = f.b(rest.K.A().o()).e();
      itHasNext = it.K.k();
      if ((!itHasNext)) {
        rest.K = rest.K.A().aN();
        restRef.K = rest.K;
      }
    }
    if (itHasNext) {
      var head = it.K.d();
      rest.K = rest.K.A().aN();
      restRef.K = rest.K;
      $m_sci_LazyList$();
      return new $c_sci_LazyList$State$Cons(head, ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().mM(it.K, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().sk(rest.K, f).A()))))))));
    } else {
      return $m_sci_LazyList$State$Empty$();
    }
  }))(new $c_sr_ObjectRef(ll))));
});
$p.wb = (function(ll, n) {
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((restRef, iRef) => (() => {
    var rest = restRef.K;
    var i = iRef.b3;
    while (((i > 0) && (!rest.c()))) {
      rest = rest.A().aN();
      restRef.K = rest;
      i = (((-1) + i) | 0);
      iRef.b3 = i;
    }
    return rest.A();
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.jK = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.p() === 0) ? this.f8 : new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().mL(coll.e()))))));
});
$p.mM = (function(it, suffix) {
  return (it.k() ? new $c_sci_LazyList$State$Cons(it.d(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().mM(it, suffix))))) : suffix.L());
});
$p.mL = (function(it) {
  return (it.k() ? new $c_sci_LazyList$State$Cons(it.d(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().mL(it))))) : $m_sci_LazyList$State$Empty$());
});
$p.as = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.bO = (function() {
  return this.f8;
});
$p.am = (function(source) {
  return this.jK(source);
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
  var b = this.as();
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(b, it, 0);
  b.b5(it);
  return b.aM();
});
$p.as = (function() {
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
  this.hM = null;
  this.qt = null;
  this.hM = outer;
  this.qt = f$1;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.tm = (function(x) {
  this.hM.ar(x);
  return this;
});
$p.t9 = (function(xs) {
  this.hM.b5(xs);
  return this;
});
$p.bt = (function(size) {
  this.hM.bt(size);
});
$p.aM = (function() {
  return this.qt.b(this.hM.aM());
});
$p.b5 = (function(elems) {
  return this.t9(elems);
});
$p.ar = (function(elem) {
  return this.tm(elem);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  iA: 1,
  L: 1,
  J: 1,
  I: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.eF = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.eF = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.bt = (function(size) {
});
$p.tn = (function(elem) {
  this.eF.ar(elem);
  return this;
});
$p.ta = (function(xs) {
  this.eF.b5(xs);
  return this;
});
$p.b5 = (function(elems) {
  return this.ta(elems);
});
$p.ar = (function(elem) {
  return this.tn(elem);
});
$p.aM = (function() {
  return this.eF;
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
$p.ba = (function(x0, x1) {
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
$p.lR = (function(x0, x1, x2) {
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
$p.tx = (function(x0, x1, x2, x3) {
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
  this.cf = 0;
  this.c4 = adversary;
  this.cf = level;
}
$p = $c_Lsi\uff3ftool_SIAdversaryTool$AdversarySelector.prototype = new $h_O();
$p.constructor = $c_Lsi\uff3ftool_SIAdversaryTool$AdversarySelector;
/** @constructor */
function $h_Lsi\uff3ftool_SIAdversaryTool$AdversarySelector() {
}
$h_Lsi\uff3ftool_SIAdversaryTool$AdversarySelector.prototype = $p;
$p.aW = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().j(acc, $f_T__hashCode__I("AdversarySelector"));
  acc = $m_sr_Statics$().j(acc, $m_sr_Statics$().R(this.c4));
  acc = $m_sr_Statics$().j(acc, this.cf);
  return $m_sr_Statics$().H(acc, 2);
});
$p.l = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsi\uff3ftool_SIAdversaryTool$AdversarySelector)) {
    if ((this.cf === x$0.cf)) {
      var x = this.c4;
      var x$2 = x$0.c4;
      return ((x === null) ? (x$2 === null) : x.l(x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().ft(this);
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
    return this.cf;
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
  this.e3 = null;
  this.hT = null;
  this.gB = null;
  this.gz = null;
  this.gA = null;
  this.fp = null;
  this.e3 = name;
  this.hT = rules;
  this.gB = lossCondition;
  this.gz = escalation;
  this.gA = fear;
  this.fp = invaderCardMapping;
}
$p = $c_Lsi\uff3ftool_adversaries_Adversary.prototype = new $h_O();
$p.constructor = $c_Lsi\uff3ftool_adversaries_Adversary;
/** @constructor */
function $h_Lsi\uff3ftool_adversaries_Adversary() {
}
$h_Lsi\uff3ftool_adversaries_Adversary.prototype = $p;
$p.aW = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.l = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsi\uff3ftool_adversaries_Adversary)) {
    if ((this.e3 === x$0.e3)) {
      var x = this.hT;
      var x$2 = x$0.hT;
      var $x_3 = ((x === null) ? (x$2 === null) : x.l(x$2));
    } else {
      var $x_3 = false;
    }
    if ($x_3) {
      var x$3 = this.gB;
      var x$4 = x$0.gB;
      var $x_2 = ((x$3 === null) ? (x$4 === null) : x$3.l(x$4));
    } else {
      var $x_2 = false;
    }
    if (($x_2 && (this.gz === x$0.gz))) {
      var x$5 = this.gA;
      var x$6 = x$0.gA;
      var $x_1 = ((x$5 === null) ? (x$6 === null) : x$5.l(x$6));
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
  return $m_sr_ScalaRunTime$().ft(this);
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
      return this.e3;
      break;
    }
    case 1: {
      return this.hT;
      break;
    }
    case 2: {
      return this.gB;
      break;
    }
    case 3: {
      return this.gz;
      break;
    }
    case 4: {
      return this.gA;
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
  this.gC = null;
  this.fr = null;
  this.fq = level;
  this.fs = stage;
  this.gC = text;
  this.fr = removeAboveLevel;
}
$p = $c_Lsi\uff3ftool_adversaries_Rule.prototype = new $h_O();
$p.constructor = $c_Lsi\uff3ftool_adversaries_Rule;
/** @constructor */
function $h_Lsi\uff3ftool_adversaries_Rule() {
}
$h_Lsi\uff3ftool_adversaries_Rule.prototype = $p;
$p.aW = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().j(acc, $f_T__hashCode__I("Rule"));
  acc = $m_sr_Statics$().j(acc, this.fq);
  acc = $m_sr_Statics$().j(acc, $m_sr_Statics$().R(this.fs));
  acc = $m_sr_Statics$().j(acc, $m_sr_Statics$().R(this.gC));
  acc = $m_sr_Statics$().j(acc, $m_sr_Statics$().R(this.fr));
  return $m_sr_Statics$().H(acc, 4);
});
$p.l = (function(x$0) {
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
    if (($x_1 && (this.gC === x$0.gC))) {
      var x$3 = this.fr;
      var x$4 = x$0.fr;
      return ((x$3 === null) ? (x$4 === null) : x$3.l(x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().ft(this);
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
      return this.gC;
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
  this.i0 = null;
  this.hV = null;
  this.hY = null;
  this.hU = null;
  this.hX = null;
  this.hW = null;
  this.jw = null;
  this.jx = null;
  this.jy = null;
  this.jz = null;
  this.jA = null;
  this.hZ = null;
  this.qS = null;
  this.qR = null;
  this.i0 = setup;
  this.hV = afterRavage;
  this.hY = ravage;
  this.hU = afterBuild;
  this.hX = highImmigration;
  this.hW = build;
  this.jw = escalation2;
  this.jx = escalation3;
  this.jy = explore;
  this.jz = lossConditionPrimary;
  this.jA = lossConditionSecondary;
  this.hZ = ruleChanges;
  this.qS = $m_s_Option$().jT(lossConditionPrimary).h6().jE($m_s_Option$().jT(lossConditionSecondary).h6());
  this.qR = explore.T(("Stage 2 Escalation: " + escalation2)).gN($m_s_Option$().jT(escalation3).h6().M(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e3) => ("Stage 3 Escalation: " + e3)))));
}
$p = $c_Lsi\uff3ftool_adversaries_RuleSet.prototype = new $h_O();
$p.constructor = $c_Lsi\uff3ftool_adversaries_RuleSet;
/** @constructor */
function $h_Lsi\uff3ftool_adversaries_RuleSet() {
}
$h_Lsi\uff3ftool_adversaries_RuleSet.prototype = $p;
$p.aW = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.l = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsi\uff3ftool_adversaries_RuleSet)) {
    var x = this.i0;
    var x$2 = x$0.i0;
    if (((x === null) ? (x$2 === null) : x.l(x$2))) {
      var x$3 = this.hV;
      var x$4 = x$0.hV;
      var $x_9 = ((x$3 === null) ? (x$4 === null) : x$3.l(x$4));
    } else {
      var $x_9 = false;
    }
    if ($x_9) {
      var x$5 = this.hY;
      var x$6 = x$0.hY;
      var $x_8 = ((x$5 === null) ? (x$6 === null) : x$5.l(x$6));
    } else {
      var $x_8 = false;
    }
    if ($x_8) {
      var x$7 = this.hU;
      var x$8 = x$0.hU;
      var $x_7 = ((x$7 === null) ? (x$8 === null) : x$7.l(x$8));
    } else {
      var $x_7 = false;
    }
    if ($x_7) {
      var x$9 = this.hX;
      var x$10 = x$0.hX;
      var $x_6 = ((x$9 === null) ? (x$10 === null) : x$9.l(x$10));
    } else {
      var $x_6 = false;
    }
    if ($x_6) {
      var x$11 = this.hW;
      var x$12 = x$0.hW;
      var $x_5 = ((x$11 === null) ? (x$12 === null) : x$11.l(x$12));
    } else {
      var $x_5 = false;
    }
    if (($x_5 && (this.jw === x$0.jw))) {
      var x$13 = this.jx;
      var x$14 = x$0.jx;
      var $x_4 = ((x$13 === null) ? (x$14 === null) : x$13.l(x$14));
    } else {
      var $x_4 = false;
    }
    if ($x_4) {
      var x$15 = this.jy;
      var x$16 = x$0.jy;
      var $x_3 = ((x$15 === null) ? (x$16 === null) : x$15.l(x$16));
    } else {
      var $x_3 = false;
    }
    if ($x_3) {
      var x$17 = this.jz;
      var x$18 = x$0.jz;
      var $x_2 = ((x$17 === null) ? (x$18 === null) : x$17.l(x$18));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$19 = this.jA;
      var x$20 = x$0.jA;
      var $x_1 = ((x$19 === null) ? (x$20 === null) : x$19.l(x$20));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$21 = this.hZ;
      var x$22 = x$0.hZ;
      return ((x$21 === null) ? (x$22 === null) : x$21.l(x$22));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().ft(this);
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
      return this.i0;
      break;
    }
    case 1: {
      return this.hV;
      break;
    }
    case 2: {
      return this.hY;
      break;
    }
    case 3: {
      return this.hU;
      break;
    }
    case 4: {
      return this.hX;
      break;
    }
    case 5: {
      return this.hW;
      break;
    }
    case 6: {
      return this.jw;
      break;
    }
    case 7: {
      return this.jx;
      break;
    }
    case 8: {
      return this.jy;
      break;
    }
    case 9: {
      return this.jz;
      break;
    }
    case 10: {
      return this.jA;
      break;
    }
    case 11: {
      return this.hZ;
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
  $thiz.gK($m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.gL($m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.eT(false);
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.gZ(observer);
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
  var this$ = $thiz.d7();
  this$.push(observer);
  return subscription;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz, observer, shouldCallMaybeWillStart) {
  var this$3 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    if (((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz)) && shouldCallMaybeWillStart)) {
      $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    }
    var this$ = $thiz.dc();
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
  if ($m_Lcom_raquo_airstream_core_ObserverList$().sd($thiz.dc(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().sd($thiz.d7(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.h9())) {
    $thiz.h4();
    $thiz.eT(true);
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  if (($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1)) {
    $thiz.h1();
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.h2();
    $thiz.eT(false);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.d7();
  var $x_1 = this$.length;
  var this$$1 = $thiz.dc();
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
$p.lU = (function(x, default$1) {
  return ((x !== null) ? (new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this.nf, x, _$1);
  }))), (void 0)) : default$1.b(x));
});
$p.ci = (function(x) {
  return this.mn(x);
});
$p.c5 = (function(x, default$1) {
  return this.lU(x, default$1);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$$anon$1, "com.raquo.airstream.custom.CustomSource$$anon$1", ({
  dQ: 1,
  aC: 1,
  i: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.iT = $m_Lcom_raquo_airstream_core_Observer$().rN(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
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
$p.lV = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    this.nW.mN(x, _$1);
  })));
});
$p.ci = (function(x) {
  return this.mo(x);
});
$p.c5 = (function(x, default$1) {
  return this.lV(x, default$1);
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
  this.iU = null;
  this.nX = mod$6;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.iU = outer;
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
$p.lV = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    matchResult5: {
      if ((x instanceof $c_s_util_Success)) {
        var nextInput = x.cN;
        var x4 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this.iU.bf);
        if ((x4 instanceof $c_s_util_Success)) {
          var currentValue = x4.cN;
          try {
            var nextValue = new $c_s_util_Success(this.nX.ba(currentValue, nextInput));
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
          this.iU.mN(nextValue, trx);
          break matchResult5;
        }
        if ((x4 instanceof $c_s_util_Failure)) {
          var err = x4.ds;
          $m_Lcom_raquo_airstream_core_AirstreamError$().cV(new $c_Lcom_raquo_airstream_core_AirstreamError$VarError("Unable to update a failed Var. Consider Var#tryUpdater instead.", new $c_s_Some(err)));
          break matchResult5;
        }
        throw new $c_s_MatchError(x4);
      }
      if ((x instanceof $c_s_util_Failure)) {
        var err$2 = x.ds;
        this.iU.mN(new $c_s_util_Failure(err$2), trx);
        break matchResult5;
      }
      throw new $c_s_MatchError(x);
    }
  })));
});
$p.ci = (function(x) {
  return this.mo(x);
});
$p.c5 = (function(x, default$1) {
  return this.lV(x, default$1);
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
  this.ks = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.ks = outer;
}
$p = $c_Lcom_raquo_airstream_web_WebStorageVar$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_web_WebStorageVar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_web_WebStorageVar$$anon$1() {
}
$h_Lcom_raquo_airstream_web_WebStorageVar$$anon$1.prototype = $p;
$p.mn = (function(x) {
  return ((x !== null) && ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I(this.ks.bf) > 1));
});
$p.lU = (function(x, default$1) {
  return (((x !== null) && ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I(this.ks.bf) > 1)) ? (void 0) : default$1.b(x));
});
$p.ci = (function(x) {
  return this.mn(x);
});
$p.c5 = (function(x, default$1) {
  return this.lU(x, default$1);
});
var $d_Lcom_raquo_airstream_web_WebStorageVar$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_web_WebStorageVar$$anon$1, "com.raquo.airstream.web.WebStorageVar$$anon$1", ({
  ef: 1,
  aC: 1,
  i: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.kI = new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.cW.qV();
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.cW.ue();
  })));
  $thiz.eZ = (void 0);
  $thiz.hr = $m_sci_Map$EmptyMap$();
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.eZ === (void 0))) {
    $thiz.eZ = $m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener])));
  } else if (unsafePrepend) {
    var x$1 = $thiz.eZ;
    if ((x$1 === (void 0))) {
      var $x_1;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.eZ;
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
  var x = $thiz.eZ;
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.eZ;
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
  var keyItemsWithReason = $thiz.hr.e8(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f = ((item) => {
    var these = keyItemsWithReason;
    while ((!these.c())) {
      var x0 = these.o();
      var x = x0.be();
      if (((x === null) ? (item === null) : $dp_equals__O__Z(x, item))) {
        var x$3 = x0.b9();
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
        var h = l.o();
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
            var x$1 = remaining.o();
            if (((!(!f(x$1))) !== true)) {
              remaining = remaining.y();
              continue;
            }
            var firstMiss = remaining;
            var newHead = new $c_sci_$colon$colon(start.o(), $m_sci_Nil$());
            var toProcess = start.y();
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $c_sci_$colon$colon(toProcess.o(), $m_sci_Nil$());
              currentLast.at = newElem;
              currentLast = newElem;
              toProcess = toProcess.y();
            }
            var next = firstMiss.y();
            var nextToCopy = next;
            while ((!next.c())) {
              var head = next.o();
              if (((!(!f(head))) !== true)) {
                next = next.y();
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $c_sci_$colon$colon(nextToCopy.o(), $m_sci_Nil$());
                  currentLast.at = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = nextToCopy.y();
                }
                nextToCopy = next.y();
                next = next.y();
              }
            }
            if ((!nextToCopy.c())) {
              currentLast.at = nextToCopy;
            }
            var result = newHead;
            break block;
          }
        }
      }
    }
  }
  var this$1 = $thiz.hr.e8(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f$1 = ((t$1) => result.al(t$1.be()));
  var l$1 = this$1;
  block$2: {
    var $x_3;
    while (true) {
      if (l$1.c()) {
        var $x_3 = $m_sci_Nil$();
        break;
      } else {
        var h$1 = l$1.o();
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
            var x$2 = remaining$1.o();
            if (((!(!f$1(x$2))) !== true)) {
              remaining$1 = remaining$1.y();
              continue;
            }
            var firstMiss$1 = remaining$1;
            var newHead$1 = new $c_sci_$colon$colon(start$1.o(), $m_sci_Nil$());
            var toProcess$1 = start$1.y();
            var currentLast$1 = newHead$1;
            while ((toProcess$1 !== firstMiss$1)) {
              var newElem$1 = new $c_sci_$colon$colon(toProcess$1.o(), $m_sci_Nil$());
              currentLast$1.at = newElem$1;
              currentLast$1 = newElem$1;
              toProcess$1 = toProcess$1.y();
            }
            var next$1 = firstMiss$1.y();
            var nextToCopy$1 = next$1;
            while ((!next$1.c())) {
              var head$1 = next$1.o();
              if (((!(!f$1(head$1))) !== true)) {
                next$1 = next$1.y();
              } else {
                while ((nextToCopy$1 !== next$1)) {
                  var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.o(), $m_sci_Nil$());
                  currentLast$1.at = newElem$2$1;
                  currentLast$1 = newElem$2$1;
                  nextToCopy$1 = nextToCopy$1.y();
                }
                nextToCopy$1 = next$1.y();
                next$1 = next$1.y();
              }
            }
            if ((!nextToCopy$1.c())) {
              currentLast$1.at = nextToCopy$1;
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
    var x0$1 = itemsToAdd.o();
    var h$2 = new $c_sci_$colon$colon(f$2(x0$1), $m_sci_Nil$());
    var t$3 = h$2;
    var rest = itemsToAdd.y();
    while ((rest !== $m_sci_Nil$())) {
      var x0$2 = rest.o();
      var nx = new $c_sci_$colon$colon(f$2(x0$2), $m_sci_Nil$());
      t$3.at = nx;
      t$3 = nx;
      rest = rest.y();
    }
    var $x_2 = h$2;
  }
  var newItems = $x_3.lP($x_2);
  var domValues = key.kx.rr(key.pa.b($thiz));
  var f$3 = ((elem) => result.al(elem));
  var l$2 = domValues;
  block$4: {
    var $x_5;
    while (true) {
      if (l$2.c()) {
        var $x_5 = $m_sci_Nil$();
        break;
      } else {
        var h$3 = l$2.o();
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
            var x$4 = remaining$2.o();
            if (((!(!f$3(x$4))) !== true)) {
              remaining$2 = remaining$2.y();
              continue;
            }
            var firstMiss$2 = remaining$2;
            var newHead$2 = new $c_sci_$colon$colon(start$2.o(), $m_sci_Nil$());
            var toProcess$2 = start$2.y();
            var currentLast$2 = newHead$2;
            while ((toProcess$2 !== firstMiss$2)) {
              var newElem$3 = new $c_sci_$colon$colon(toProcess$2.o(), $m_sci_Nil$());
              currentLast$2.at = newElem$3;
              currentLast$2 = newElem$3;
              toProcess$2 = toProcess$2.y();
            }
            var next$2 = firstMiss$2.y();
            var nextToCopy$2 = next$2;
            while ((!next$2.c())) {
              var head$2 = next$2.o();
              if (((!(!f$3(head$2))) !== true)) {
                next$2 = next$2.y();
              } else {
                while ((nextToCopy$2 !== next$2)) {
                  var newElem$2$2 = new $c_sci_$colon$colon(nextToCopy$2.o(), $m_sci_Nil$());
                  currentLast$2.at = newElem$2$2;
                  currentLast$2 = newElem$2$2;
                  nextToCopy$2 = nextToCopy$2.y();
                }
                nextToCopy$2 = next$2.y();
                next$2 = next$2.y();
              }
            }
            if ((!nextToCopy$2.c())) {
              currentLast$2.at = nextToCopy$2;
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
        var h$4 = l$3.o();
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
            var x$5 = remaining$3.o();
            if (((!(!f(x$5))) !== true)) {
              remaining$3 = remaining$3.y();
              continue;
            }
            var firstMiss$3 = remaining$3;
            var newHead$3 = new $c_sci_$colon$colon(start$3.o(), $m_sci_Nil$());
            var toProcess$3 = start$3.y();
            var currentLast$3 = newHead$3;
            while ((toProcess$3 !== firstMiss$3)) {
              var newElem$4 = new $c_sci_$colon$colon(toProcess$3.o(), $m_sci_Nil$());
              currentLast$3.at = newElem$4;
              currentLast$3 = newElem$4;
              toProcess$3 = toProcess$3.y();
            }
            var next$3 = firstMiss$3.y();
            var nextToCopy$3 = next$3;
            while ((!next$3.c())) {
              var head$3 = next$3.o();
              if (((!(!f(head$3))) !== true)) {
                next$3 = next$3.y();
              } else {
                while ((nextToCopy$3 !== next$3)) {
                  var newElem$2$3 = new $c_sci_$colon$colon(nextToCopy$3.o(), $m_sci_Nil$());
                  currentLast$3.at = newElem$2$3;
                  currentLast$3 = newElem$2$3;
                  nextToCopy$3 = nextToCopy$3.y();
                }
                nextToCopy$3 = next$3.y();
                next$3 = next$3.y();
              }
            }
            if ((!nextToCopy$3.c())) {
              currentLast$3.at = nextToCopy$3;
            }
            var $x_4 = newHead$3;
            break block$6;
          }
        }
      }
    }
  }
  var nextDomValues = $x_5.lP($x_4);
  $thiz.hr = $thiz.hr.eS(key, newItems);
  key.pc.ba($thiz, key.kx.rt(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.j0, maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.j0;
  $thiz.j0 = maybeNextParent;
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.c()) && (!maybePrevParent.E().jG().cm.c()));
  var isNextParentActive = ((!maybeNextParent.c()) && (!maybeNextParent.E().jG().cm.c()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.c() ? $m_s_None$() : new $c_s_Some(maybeNextParent.E().jG())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.c()) {
    $thiz.kI.tN();
  } else {
    var x0 = maybeNextOwner.E();
    $thiz.kI.wi(x0);
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
  if ((!$thiz.kZ)) {
    $thiz.l0 = (($thiz.j3 === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.kZ = true;
  }
  return $thiz.l0;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.kZ) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.l0);
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.j3;
  return ("of class " + $objectClassName(this$1));
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.j3 + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.l0 = null;
    this.j3 = null;
    this.kZ = false;
    this.j3 = obj;
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
$p.p = (function() {
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
  this.hv = 0;
  this.pS = 0;
  this.pR = null;
  this.pR = outer;
  this.hv = 0;
  this.pS = outer.aJ();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.k = (function() {
  return (this.hv < this.pS);
});
$p.d = (function() {
  var result = this.pR.aK(this.hv);
  this.hv = ((1 + this.hv) | 0);
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
$p.be = (function() {
  return this.pT;
});
$p.b9 = (function() {
  return this.pU;
});
$p.v = (function() {
  return (((("(" + this.be()) + ",") + this.b9()) + ")");
});
$p.aL = (function() {
  return "Tuple2";
});
$p.aW = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.l = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().i(this.be(), x$1.be()) && $m_sr_BoxesRunTime$().i(this.b9(), x$1.b9()))));
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
  this.fY = null;
  this.fZ = null;
  this.g0 = null;
  this.fY = _1;
  this.fZ = _2;
  this.g0 = _3;
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
  return (((((("(" + this.fY) + ",") + this.fZ) + ",") + this.g0) + ")");
});
$p.aL = (function() {
  return "Tuple3";
});
$p.aW = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.l = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T3) && ($m_sr_BoxesRunTime$().i(this.fY, x$1.fY) && ($m_sr_BoxesRunTime$().i(this.fZ, x$1.fZ) && $m_sr_BoxesRunTime$().i(this.g0, x$1.g0)))));
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
  this.g1 = null;
  this.g2 = null;
  this.g3 = null;
  this.g4 = null;
  this.g1 = _1;
  this.g2 = _2;
  this.g3 = _3;
  this.g4 = _4;
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
  return (((((((("(" + this.g1) + ",") + this.g2) + ",") + this.g3) + ",") + this.g4) + ")");
});
$p.aL = (function() {
  return "Tuple4";
});
$p.aW = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.l = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T4) && (($m_sr_BoxesRunTime$().i(this.g1, x$1.g1) && $m_sr_BoxesRunTime$().i(this.g2, x$1.g2)) && ($m_sr_BoxesRunTime$().i(this.g3, x$1.g3) && $m_sr_BoxesRunTime$().i(this.g4, x$1.g4)))));
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
  this.g5 = null;
  this.g6 = null;
  this.g7 = null;
  this.g8 = null;
  this.g9 = null;
  this.g5 = _1;
  this.g6 = _2;
  this.g7 = _3;
  this.g8 = _4;
  this.g9 = _5;
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
  return (((((((((("(" + this.g5) + ",") + this.g6) + ",") + this.g7) + ",") + this.g8) + ",") + this.g9) + ")");
});
$p.aL = (function() {
  return "Tuple5";
});
$p.aW = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.l = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T5) && (($m_sr_BoxesRunTime$().i(this.g5, x$1.g5) && $m_sr_BoxesRunTime$().i(this.g6, x$1.g6)) && ($m_sr_BoxesRunTime$().i(this.g7, x$1.g7) && ($m_sr_BoxesRunTime$().i(this.g8, x$1.g8) && $m_sr_BoxesRunTime$().i(this.g9, x$1.g9))))));
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
  this.ga = null;
  this.gb = null;
  this.gc = null;
  this.gd = null;
  this.ge = null;
  this.gf = null;
  this.ga = _1;
  this.gb = _2;
  this.gc = _3;
  this.gd = _4;
  this.ge = _5;
  this.gf = _6;
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
  return (((((((((((("(" + this.ga) + ",") + this.gb) + ",") + this.gc) + ",") + this.gd) + ",") + this.ge) + ",") + this.gf) + ")");
});
$p.aL = (function() {
  return "Tuple6";
});
$p.aW = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.l = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T6) && (($m_sr_BoxesRunTime$().i(this.ga, x$1.ga) && ($m_sr_BoxesRunTime$().i(this.gb, x$1.gb) && $m_sr_BoxesRunTime$().i(this.gc, x$1.gc))) && ($m_sr_BoxesRunTime$().i(this.gd, x$1.gd) && ($m_sr_BoxesRunTime$().i(this.ge, x$1.ge) && $m_sr_BoxesRunTime$().i(this.gf, x$1.gf))))));
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
  this.gg = null;
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
  return ($thiz.c() ? $m_s_None$() : new $c_s_Some($thiz.o()));
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
  $thiz.gj = $m_sc_Iterator$().D;
  $thiz.gj = $thiz.pY.b($thiz.lb.d()).e();
  $thiz.f1 = (-1);
}
/** @constructor */
function $c_sc_Iterator$$anon$10(outer, f$3) {
  this.gj = null;
  this.f1 = 0;
  this.lb = null;
  this.pY = null;
  this.lb = outer;
  this.pY = f$3;
  this.gj = $m_sc_Iterator$().D;
  this.f1 = (-1);
}
$p = $c_sc_Iterator$$anon$10.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$10;
/** @constructor */
function $h_sc_Iterator$$anon$10() {
}
$h_sc_Iterator$$anon$10.prototype = $p;
$p.k = (function() {
  if ((this.f1 === (-1))) {
    while ((!this.gj.k())) {
      if ((!this.lb.k())) {
        this.f1 = 0;
        this.gj = $m_sc_Iterator$().D;
        return false;
      }
      $p_sc_Iterator$$anon$10__nextCur__V(this);
    }
    this.f1 = 1;
    return true;
  } else {
    return (this.f1 === 1);
  }
});
$p.d = (function() {
  if (this.k()) {
    this.f1 = (-1);
  }
  return this.gj.d();
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
$p.k = (function() {
  return false;
});
$p.is = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.p = (function() {
  return 0;
});
$p.h5 = (function(from, until) {
  return this;
});
$p.d = (function() {
  this.is();
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
  this.hw = false;
  this.pZ = null;
  this.pZ = a$1;
  this.hw = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.k = (function() {
  return (!this.hw);
});
$p.d = (function() {
  if (this.hw) {
    return $m_sc_Iterator$().D.d();
  } else {
    this.hw = true;
    return this.pZ;
  }
});
$p.h5 = (function(from, until) {
  return (((this.hw || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().D : this);
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
  this.j5 = false;
  this.q1 = null;
  this.lc = null;
  this.q0 = null;
  this.lc = outer;
  this.q0 = f$1;
  this.q2 = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.j5 = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.k = (function() {
  while (true) {
    if (this.j5) {
      return true;
    } else if (this.lc.k()) {
      var a = this.lc.d();
      if (this.q2.jC(this.q0.b(a))) {
        this.q1 = a;
        this.j5 = true;
        return true;
      }
    } else {
      return false;
    }
  }
});
$p.d = (function() {
  if (this.k()) {
    this.j5 = false;
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
  this.j6 = null;
  this.q3 = null;
  this.j6 = outer;
  this.q3 = f$2;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.p = (function() {
  return this.j6.p();
});
$p.k = (function() {
  return this.j6.k();
});
$p.d = (function() {
  return this.q3.b(this.j6.d());
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
    if (($thiz.c8 instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.c8;
      $thiz.c8 = c.c8;
      $thiz.em = c.em;
      if ((c.cK !== null)) {
        if (($thiz.cJ === null)) {
          $thiz.cJ = c.cJ;
        }
        c.cJ.hx = $thiz.cK;
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
      $thiz.c8 = null;
      $thiz.cJ = null;
      return false;
    } else {
      $thiz.c8 = $thiz.cK.uX();
      if (($thiz.cJ === $thiz.cK)) {
        $thiz.cJ = $thiz.cJ.hx;
      }
      $thiz.cK = $thiz.cK.hx;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.em) {
        return true;
      } else if ((($thiz.c8 !== null) && $thiz.c8.k())) {
        $thiz.em = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.c8 = null;
  this.cK = null;
  this.cJ = null;
  this.em = false;
  this.c8 = current;
  this.cK = null;
  this.cJ = null;
  this.em = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.k = (function() {
  if (this.em) {
    return true;
  } else if ((this.c8 !== null)) {
    if (this.c8.k()) {
      this.em = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.d = (function() {
  if (this.k()) {
    this.em = false;
    return this.c8.d();
  } else {
    return $m_sc_Iterator$().D.d();
  }
});
$p.gM = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.cK === null)) {
    this.cK = c;
    this.cJ = c;
  } else {
    this.cJ.hx = c;
    this.cJ = c;
  }
  if ((this.c8 === null)) {
    this.c8 = $m_sc_Iterator$().D;
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
  while (($thiz.dF > 0)) {
    if ($thiz.en.k()) {
      $thiz.en.d();
      $thiz.dF = (((-1) + $thiz.dF) | 0);
    } else {
      $thiz.dF = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.cq < 0)) {
    return (-1);
  } else {
    var that = (($thiz.cq - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.en = null;
  this.cq = 0;
  this.dF = 0;
  this.en = underlying;
  this.cq = limit;
  this.dF = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.p = (function() {
  var size = this.en.p();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.dF) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.cq < 0)) {
      return dropSize;
    } else {
      var x = this.cq;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.k = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.cq !== 0) && this.en.k());
});
$p.d = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.cq > 0)) {
    this.cq = (((-1) + this.cq) | 0);
    return this.en.d();
  } else {
    return ((this.cq < 0) ? this.en.d() : $m_sc_Iterator$().D.d());
  }
});
$p.h5 = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.cq < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.dF + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().D;
  } else if ((sum < 0)) {
    this.dF = 2147483647;
    this.cq = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$SliceIterator(this.en, (((-2147483647) + sum) | 0), rest))));
  } else {
    this.dF = sum;
    this.cq = rest;
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
  return ($thiz.c() ? $m_s_None$() : new $c_s_Some($thiz.o()));
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
  return ((x >= 0) && ($thiz.bc(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.m2(n);
  if (skipped.c()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.o();
}
function $f_sc_LinearSeqOps__exists__F1__Z($thiz, p) {
  var these = $thiz;
  while ((!these.c())) {
    if ((!(!p.b(these.o())))) {
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
    acc = op.ba(acc, these.o());
    these = these.y();
  }
  return acc;
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $f_sc_LinearSeqOps__indexWhere__F1__I__I($thiz, p, from) {
  var i = ((from > 0) ? from : 0);
  var these = $thiz.m2(from);
  while ((!these.c())) {
    if ((!(!p.b(these.o())))) {
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
    } else if ((((!a.c()) && (!b.c())) && $m_sr_BoxesRunTime$().i(a.o(), b.o()))) {
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
    while (it.k()) {
      result = result.dz(it.d());
    }
    return result;
  } else {
    return $thiz.fx(($is_sc_Iterable(that) ? new $c_sc_View$Concat($thiz, that) : $thiz.e().gM(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => that.e())))));
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.hz = null;
  this.hz = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.k = (function() {
  return (!this.hz.c());
});
$p.d = (function() {
  var r = this.hz.o();
  this.hz = this.hz.y();
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
    if (($thiz.bv < $thiz.f3)) {
      var this$ = $thiz.hA;
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
  if (($thiz.bv < $thiz.f3)) {
    var this$$2 = $thiz.hA;
    var i$1 = $thiz.bv;
    var c$1 = this$$2.charCodeAt(i$1);
    $thiz.bv = ((1 + $thiz.bv) | 0);
    if (($thiz.bv < $thiz.f3)) {
      var this$$3 = $thiz.hA;
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
  var this$6 = $thiz.hA;
  var endIndex = end;
  return this$6.substring(start, endIndex);
}
/** @constructor */
function $c_sc_StringOps$$anon$1(\u03b4this$2, stripped$1) {
  this.f3 = 0;
  this.bv = 0;
  this.hA = null;
  this.q8 = false;
  this.hA = \u03b4this$2;
  this.q8 = stripped$1;
  this.f3 = \u03b4this$2.length;
  this.bv = 0;
}
$p = $c_sc_StringOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StringOps$$anon$1;
/** @constructor */
function $h_sc_StringOps$$anon$1() {
}
$h_sc_StringOps$$anon$1.prototype = $p;
$p.k = (function() {
  return (this.bv < this.f3);
});
$p.s3 = (function() {
  return ((this.bv >= this.f3) ? $m_sc_Iterator$().D.d() : $p_sc_StringOps$$anon$1__advance__T(this));
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
  if (($thiz.cs === null)) {
    $thiz.cs = new $ac_I(($m_sci_Node$().hI << 1));
    $thiz.dO = new ($d_sci_Node.r().C)($m_sci_Node$().hI);
  }
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.bR = node;
  $thiz.ad = 0;
  $thiz.dN = node.ix();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bH = ((1 + $thiz.bH) | 0);
  var cursorIndex = ($thiz.bH << 1);
  var lengthIndex = ((1 + ($thiz.bH << 1)) | 0);
  $thiz.dO.a[$thiz.bH] = node;
  $thiz.cs.a[cursorIndex] = 0;
  $thiz.cs.a[lengthIndex] = node.it();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.bH = (((-1) + $thiz.bH) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bH >= 0)) {
    var cursorIndex = ($thiz.bH << 1);
    var lengthIndex = ((1 + ($thiz.bH << 1)) | 0);
    var nodeCursor = $thiz.cs.a[cursorIndex];
    if ((nodeCursor < $thiz.cs.a[lengthIndex])) {
      var ev$1 = $thiz.cs;
      ev$1.a[cursorIndex] = ((1 + ev$1.a[cursorIndex]) | 0);
      var nextNode = $thiz.dO.a[$thiz.bH].il(nodeCursor);
      if (nextNode.im()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.gU()) {
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
  $thiz.dN = 0;
  $thiz.bH = (-1);
  return $thiz;
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.im()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.gU()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
/** @constructor */
function $c_sci_ChampBaseIterator() {
  this.ad = 0;
  this.dN = 0;
  this.bR = null;
  this.bH = 0;
  this.cs = null;
  this.dO = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.k = (function() {
  return ((this.ad < this.dN) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.jc = node;
  $thiz.ep = (((-1) + node.ix()) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.ct = ((1 + $thiz.ct) | 0);
  $thiz.hE.a[$thiz.ct] = node;
  $thiz.hD.a[$thiz.ct] = (((-1) + node.it()) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.ct = (((-1) + $thiz.ct) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.ct >= 0)) {
    var nodeCursor = $thiz.hD.a[$thiz.ct];
    $thiz.hD.a[$thiz.ct] = (((-1) + nodeCursor) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.hE.a[$thiz.ct].il(nodeCursor));
    } else {
      var currNode = $thiz.hE.a[$thiz.ct];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.gU()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true;
      }
    }
  }
  return false;
}
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.ep = (-1);
  $thiz.ct = (-1);
  $thiz.hD = new $ac_I(((1 + $m_sci_Node$().hI) | 0));
  $thiz.hE = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().hI) | 0));
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
  this.ep = 0;
  this.jc = null;
  this.ct = 0;
  this.hD = null;
  this.hE = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.k = (function() {
  return ((this.ep >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.go !== null);
}
function $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.a.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.q(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.q(ix, result, destPos, length);
  return result;
}
function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  var dataIx = bm.d4(bitpos);
  var idx = (dataIx << 1);
  var src = bm.b6;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.q(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.q(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.c9, dataIx, originalHash);
  bm.ac = (bm.ac | bitpos);
  bm.b6 = dst;
  bm.c9 = dstHashes;
  bm.bn = ((1 + bm.bn) | 0);
  bm.c2 = ((bm.c2 + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.go = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.dl = $thiz.dl.rm();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.go = null;
  this.dl = null;
  this.dl = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().kY, $m_s_Array$EmptyArrays$().hu, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.bt = (function(size) {
});
$p.h7 = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().cG(keyHash, shift);
    var bitpos = $m_sci_Node$().bY(mask);
    if (((mapNode.ac & bitpos) !== 0)) {
      var index = $m_sci_Node$().bJ(mapNode.ac, mask, bitpos);
      var key0 = mapNode.dx(index);
      var key0UnimprovedHash = mapNode.cE(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().i(key0, key))) {
        mapNode.b6.a[((1 + (index << 1)) | 0)] = value;
      } else {
        var value0 = mapNode.dy(index);
        var key0Hash = $m_sc_Hashing$().bs(key0UnimprovedHash);
        var subNodeNew = mapNode.mz(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.vt(bitpos, key0Hash, subNodeNew);
      }
    } else if (((mapNode.aF & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().bJ(mapNode.aF, mask, bitpos);
      var subNode = mapNode.d8(index$2);
      var beforeSize = subNode.O();
      var beforeHash = subNode.bN();
      this.h7(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.bn = ((mapNode.bn + ((subNode.O() - beforeSize) | 0)) | 0);
      mapNode.c2 = ((mapNode.c2 + ((subNode.bN() - beforeHash) | 0)) | 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
    }
  } else if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.gW(key);
    if ((index$3 < 0)) {
      mapNode.aS = mapNode.aS.bD(new $c_T2(key, value));
    } else {
      mapNode.aS = mapNode.aS.eg(index$3, new $c_T2(key, value));
    }
  } else {
    throw new $c_s_MatchError(mapNode);
  }
});
$p.mJ = (function() {
  if ((this.dl.bn === 0)) {
    return $m_sci_HashMap$().lj;
  } else if ((this.go !== null)) {
    return this.go;
  } else {
    this.go = new $c_sci_HashMap(this.dl);
    return this.go;
  }
});
$p.r1 = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().R(elem.be());
  var im = $m_sc_Hashing$().bs(h);
  this.h7(this.dl, elem.be(), elem.b9(), h, im, 0);
  return this;
});
$p.fu = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().R(key);
  this.h7(this.dl, key, value, originalHash, $m_sc_Hashing$().bs(originalHash), 0);
  return this;
});
$p.lN = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(this, xs);
  } else if (false) {
    var iter = xs.xe();
    while (iter.k()) {
      var next = iter.d();
      var originalHash = xs.wB(next.rR());
      var hash = $m_sc_Hashing$().bs(originalHash);
      this.h7(this.dl, next.s0(), next.wH(), originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.uq();
    while (iter$2.k()) {
      var next$2 = iter$2.d();
      var originalHash$2 = xs.wB(next$2.rR());
      var hash$2 = $m_sc_Hashing$().bs(originalHash$2);
      this.h7(this.dl, next$2.s0(), next$2.wH(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.fw(new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((key$2$2, value$2$2) => this.fu(key$2$2, value$2$2))));
  } else {
    var it = xs.e();
    while (it.k()) {
      this.r1(it.d());
    }
  }
  return this;
});
$p.b5 = (function(elems) {
  return this.lN(elems);
});
$p.ar = (function(elem) {
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
  return ($thiz.gp !== null);
}
function $p_sci_HashSetBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.a.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.q(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.q(ix, result, destPos, length);
  return result;
}
function $p_sci_HashSetBuilder__insertValue__sci_BitmapIndexedSetNode__I__O__I__I__V($thiz, bm, bitpos, key, originalHash, keyHash) {
  var dataIx = bm.d4(bitpos);
  var src = bm.bo;
  var dst = new $ac_O(((1 + src.a.length) | 0));
  src.q(0, dst, 0, dataIx);
  dst.a[dataIx] = key;
  var destPos = ((1 + dataIx) | 0);
  var length = ((src.a.length - dataIx) | 0);
  src.q(dataIx, dst, destPos, length);
  var dstHashes = $p_sci_HashSetBuilder__insertElement__AI__I__I__AI($thiz, bm.cr, dataIx, originalHash);
  bm.a3 = (bm.a3 | bitpos);
  bm.bo = dst;
  bm.cr = dstHashes;
  bm.bw = ((1 + bm.bw) | 0);
  bm.ca = ((bm.ca + keyHash) | 0);
}
function $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V($thiz, bm, bitpos, elem) {
  var dataIx = bm.d4(bitpos);
  bm.bo.a[dataIx] = elem;
}
function $p_sci_HashSetBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashSetBuilder__isAliased__Z($thiz)) {
    $p_sci_HashSetBuilder__copyElems__V($thiz);
  }
  $thiz.gp = null;
}
function $p_sci_HashSetBuilder__copyElems__V($thiz) {
  $thiz.f7 = $thiz.f7.rn();
}
/** @constructor */
function $c_sci_HashSetBuilder() {
  this.gp = null;
  this.f7 = null;
  this.f7 = new $c_sci_BitmapIndexedSetNode(0, 0, $m_s_Array$EmptyArrays$().kY, $m_s_Array$EmptyArrays$().hu, 0, 0);
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
    var mask = $m_sci_Node$().cG(elementHash, shift);
    var bitpos = $m_sci_Node$().bY(mask);
    if (((setNode.a3 & bitpos) !== 0)) {
      var index = $m_sci_Node$().bJ(setNode.a3, mask, bitpos);
      var element0 = setNode.da(index);
      var element0UnimprovedHash = setNode.cE(index);
      if (((element0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().i(element0, element))) {
        $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V(this, setNode, bitpos, element0);
      } else {
        var element0Hash = $m_sc_Hashing$().bs(element0UnimprovedHash);
        var subNodeNew = setNode.my(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0));
        setNode.vu(bitpos, element0Hash, subNodeNew);
      }
    } else if (((setNode.aO & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().bJ(setNode.aO, mask, bitpos);
      var subNode = setNode.d9(index$2);
      var beforeSize = subNode.O();
      var beforeHashCode = subNode.bN();
      this.mT(subNode, element, originalHash, elementHash, ((5 + shift) | 0));
      setNode.bw = ((setNode.bw + ((subNode.O() - beforeSize) | 0)) | 0);
      setNode.ca = ((setNode.ca + ((subNode.bN() - beforeHashCode) | 0)) | 0);
    } else {
      $p_sci_HashSetBuilder__insertValue__sci_BitmapIndexedSetNode__I__O__I__I__V(this, setNode, bitpos, element, originalHash, elementHash);
    }
  } else if ((setNode instanceof $c_sci_HashCollisionSetNode)) {
    var index$3 = $f_sc_SeqOps__indexOf__O__I__I(setNode.aY, element, 0);
    if ((index$3 < 0)) {
      setNode.aY = setNode.aY.bD(element);
    } else {
      setNode.aY = setNode.aY.eg(index$3, element);
    }
  } else {
    throw new $c_s_MatchError(setNode);
  }
});
$p.mK = (function() {
  if ((this.f7.bw === 0)) {
    return $m_sci_HashSet$().hF;
  } else if ((this.gp !== null)) {
    return this.gp;
  } else {
    this.gp = new $c_sci_HashSet(this.f7);
    return this.gp;
  }
});
$p.jD = (function(elem) {
  $p_sci_HashSetBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().R(elem);
  var im = $m_sc_Hashing$().bs(h);
  this.mT(this.f7, elem, h, im, 0);
  return this;
});
$p.lO = (function(xs) {
  $p_sci_HashSetBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashSet)) {
    new $c_sci_HashSetBuilder$$anon$1(this, xs);
  } else {
    var it = xs.e();
    while (it.k()) {
      this.jD(it.d());
    }
  }
  return this;
});
$p.b5 = (function(elems) {
  return this.lO(elems);
});
$p.ar = (function(elem) {
  return this.jD(elem);
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
  this.eo = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$());
}
$p = $c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
}
$h_sci_IndexedSeq$.prototype = $p;
$p.mb = (function(it) {
  return ($is_sci_IndexedSeq(it) ? it : $c_sc_SeqFactory$Delegate.prototype.jJ.call(this, it));
});
$p.am = (function(source) {
  return this.mb(source);
});
$p.jJ = (function(it) {
  return this.mb(it);
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
  this.gq = null;
  this.qe = null;
  this.tM();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.bt = (function(size) {
});
$p.tM = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.qe = ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.m5()))));
  this.gq = deferred;
});
$p.w9 = (function() {
  this.gq.mk(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$())));
  return this.qe;
});
$p.ti = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.gq.mk(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    $m_sci_LazyList$();
    return new $c_sci_LazyList$State$Cons(elem, ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.m5())))));
  })));
  this.gq = deferred;
  return this;
});
$p.t7 = (function(xs) {
  if ((xs.p() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.gq.mk(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().mM(xs.e(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.m5()))))));
    this.gq = deferred;
  }
  return this;
});
$p.b5 = (function(elems) {
  return this.t7(elems);
});
$p.ar = (function(elem) {
  return this.ti(elem);
});
$p.aM = (function() {
  return this.w9();
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
  this.gr = null;
  this.gr = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.k = (function() {
  return (!this.gr.c());
});
$p.d = (function() {
  if (this.gr.c()) {
    return $m_sc_Iterator$().D.d();
  } else {
    var res = this.gr.A().o();
    this.gr = this.gr.A().aN();
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
$p.as = (function() {
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
  $thiz.f9 = outer;
  $thiz.dQ = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.dQ = 0;
  this.f9 = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.k = (function() {
  return (this.dQ < 2);
});
$p.d = (function() {
  switch (this.dQ) {
    case 0: {
      var result = this.cj(this.f9.cv, this.f9.dm);
      break;
    }
    case 1: {
      var result = this.cj(this.f9.cw, this.f9.dn);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().D.d();
    }
  }
  this.dQ = ((1 + this.dQ) | 0);
  return result;
});
$p.d6 = (function(n) {
  this.dQ = ((this.dQ + n) | 0);
  return this;
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  $thiz.dR = outer;
  $thiz.dS = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.dS = 0;
  this.dR = null;
}
$p = $c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
}
$h_sci_Map$Map3$Map3Iterator.prototype = $p;
$p.k = (function() {
  return (this.dS < 3);
});
$p.d = (function() {
  switch (this.dS) {
    case 0: {
      var result = this.cj(this.dR.cb, this.dR.cX);
      break;
    }
    case 1: {
      var result = this.cj(this.dR.cc, this.dR.cY);
      break;
    }
    case 2: {
      var result = this.cj(this.dR.cd, this.dR.cZ);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().D.d();
    }
  }
  this.dS = ((1 + this.dS) | 0);
  return result;
});
$p.d6 = (function(n) {
  this.dS = ((this.dS + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  $thiz.d0 = outer;
  $thiz.dT = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.dT = 0;
  this.d0 = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.k = (function() {
  return (this.dT < 4);
});
$p.d = (function() {
  switch (this.dT) {
    case 0: {
      var result = this.cj(this.d0.bU, this.d0.cx);
      break;
    }
    case 1: {
      var result = this.cj(this.d0.bV, this.d0.cy);
      break;
    }
    case 2: {
      var result = this.cj(this.d0.bW, this.d0.cz);
      break;
    }
    case 3: {
      var result = this.cj(this.d0.bX, this.d0.cA);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().D.d();
    }
  }
  this.dT = ((1 + this.dT) | 0);
  return result;
});
$p.d6 = (function(n) {
  this.dT = ((this.dT + n) | 0);
  return this;
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.dU = null;
  this.hG = false;
  this.fa = null;
  this.dU = $m_sci_Map$EmptyMap$();
  this.hG = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.bt = (function(size) {
});
$p.sh = (function() {
  return (this.hG ? this.fa.mJ() : this.dU);
});
$p.tg = (function(key, value) {
  if (this.hG) {
    this.fa.fu(key, value);
  } else if ((this.dU.O() < 4)) {
    this.dU = this.dU.eS(key, value);
  } else if (this.dU.al(key)) {
    this.dU = this.dU.eS(key, value);
  } else {
    this.hG = true;
    if ((this.fa === null)) {
      this.fa = new $c_sci_HashMapBuilder();
    }
    this.dU.tI(this.fa);
    this.fa.fu(key, value);
  }
  return this;
});
$p.qW = (function(xs) {
  return (this.hG ? (this.fa.lN(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.b5 = (function(elems) {
  return this.qW(elems);
});
$p.ar = (function(elem) {
  return this.tg(elem.be(), elem.b9());
});
$p.aM = (function() {
  return this.sh();
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
  this.fl = null;
  this.hJ = false;
  this.fm = null;
  this.fl = $m_sci_Set$EmptySet$();
  this.hJ = false;
}
$p = $c_sci_SetBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_SetBuilderImpl;
/** @constructor */
function $h_sci_SetBuilderImpl() {
}
$h_sci_SetBuilderImpl.prototype = $p;
$p.bt = (function(size) {
});
$p.si = (function() {
  return (this.hJ ? this.fm.mK() : this.fl);
});
$p.tj = (function(elem) {
  if (this.hJ) {
    this.fm.jD(elem);
  } else if ((this.fl.O() < 4)) {
    this.fl = this.fl.dz(elem);
  } else if ((!this.fl.al(elem))) {
    this.hJ = true;
    if ((this.fm === null)) {
      this.fm = new $c_sci_HashSetBuilder();
    }
    this.fl.tJ(this.fm);
    this.fm.jD(elem);
  }
  return this;
});
$p.qX = (function(xs) {
  return (this.hJ ? (this.fm.lO(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.b5 = (function(elems) {
  return this.qX(elems);
});
$p.ar = (function(elem) {
  return this.tj(elem);
});
$p.aM = (function() {
  return this.si();
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
    return $m_jl_Integer$().mG($m_jl_System$SystemProperties$().mg("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10);
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
    var knownSize = it.p();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      matchEnd5: {
        var $x_1;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x = it.aR().bl();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.dk;
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
      return new $c_sci_VectorBuilder().gH(it).iB();
    }
  }
});
$p.as = (function() {
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
      src.q(i, dest, 0, length);
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
        src$1.q(i$2, dest$1, 0, length$1);
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
        a = $m_ju_Arrays$().aQ(a, i$2, 32);
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
        src$2.q(i$3, dest$2, 0, length$2);
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
        a = $m_ju_Arrays$().aQ(a, i$3, 32);
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
        src$3.q(i$4, dest$3, 0, length$3);
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
        a = $m_ju_Arrays$().aQ(a, i$4, 32);
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
        src$4.q(i$5, dest$4, 0, length$4);
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
        a = $m_ju_Arrays$().aQ(a, i$5, 32);
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
        src$5.q(i$6, dest$5, 0, length$5);
      }
      $thiz.aj = a;
      $thiz.S = (($thiz.S - $thiz.Q) | 0);
      $thiz.Q = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().aQ(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.hK = false;
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
    data.q(0, dest, destPos, copy1);
    $thiz.S = (($thiz.S + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.aj;
      data.q(copy1, dest$1, 0, copy2);
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
      slice.q(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.P;
        slice.q(copy1, dest$1, 0, copy2);
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
            var lo = t.r;
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
      slice.q(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.V;
        slice.q(copy1$2, dest$3, 0, copy2$2);
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
            var lo$1 = t$1.r;
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
      slice.q(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.a8;
        slice.q(copy1$3, dest$5, 0, copy2$3);
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
            var lo$2 = t$2.r;
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
      slice.q(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.aB;
        slice.q(copy1$4, dest$7, 0, copy2$4);
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
            var lo$3 = t$3.r;
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
      slice.q(0, dest$8, destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break;
    }
    default: {
      throw new $c_s_MatchError(dim);
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = xs.dg();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.dA(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var x1 = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
    } else if ((($thiz.S === 32) || ($thiz.S === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1);
    } else {
      $m_sci_VectorStatics$().m7((((-2) + x1) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((data$2$2) => {
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
  this.hK = false;
  this.X = 0;
  this.aj = new $ac_O(32);
  this.S = 0;
  this.J = 0;
  this.Q = 0;
  this.hK = false;
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
  var x1 = v.dg();
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
      this.aj = ((a.a.length === 32) ? a : $m_ju_Arrays$().aQ(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.bh;
      var a$1 = v.g;
      this.aj = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().aQ(a$1, 0, 32));
      this.X = 2;
      this.Q = ((32 - v.bz) | 0);
      var i$1 = ((v.h + this.Q) | 0);
      this.S = (31 & i$1);
      this.J = ((i$1 - this.S) | 0);
      this.P = new ($d_O.r().r().C)(32);
      this.P.a[0] = v.f;
      var dest = this.P;
      var length = d2.a.length;
      d2.q(0, dest, 1, length);
      this.P.a[((1 + d2.a.length) | 0)] = this.aj;
      break;
    }
    case 5: {
      var d3 = v.aT;
      var s2 = v.aZ;
      var a$2 = v.g;
      this.aj = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().aQ(a$2, 0, 32));
      this.X = 3;
      this.Q = ((1024 - v.b7) | 0);
      var i$2 = ((v.h + this.Q) | 0);
      this.S = (31 & i$2);
      this.J = ((i$2 - this.S) | 0);
      this.V = new ($d_O.r().r().r().C)(32);
      this.V.a[0] = $m_sci_VectorStatics$().G(v.f, v.bq);
      var dest$1 = this.V;
      var length$1 = d3.a.length;
      d3.q(0, dest$1, 1, length$1);
      this.P = $m_ju_Arrays$().ab(s2, 32);
      this.V.a[((1 + d3.a.length) | 0)] = this.P;
      this.P.a[s2.a.length] = this.aj;
      break;
    }
    case 7: {
      var d4 = v.ao;
      var s3 = v.av;
      var s2$2 = v.au;
      var a$3 = v.g;
      this.aj = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().aQ(a$3, 0, 32));
      this.X = 4;
      this.Q = ((32768 - v.aG) | 0);
      var i$3 = ((v.h + this.Q) | 0);
      this.S = (31 & i$3);
      this.J = ((i$3 - this.S) | 0);
      this.a8 = new ($d_O.r().r().r().r().C)(32);
      this.a8.a[0] = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(v.f, v.b1), v.b2);
      var dest$2 = this.a8;
      var length$2 = d4.a.length;
      d4.q(0, dest$2, 1, length$2);
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
      this.aj = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().aQ(a$4, 0, 32));
      this.X = 5;
      this.Q = ((1048576 - v.a9) | 0);
      var i$4 = ((v.h + this.Q) | 0);
      this.S = (31 & i$4);
      this.J = ((i$4 - this.S) | 0);
      this.aB = new ($d_O.r().r().r().r().r().C)(32);
      this.aB.a[0] = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(v.f, v.ax), v.ay), v.az);
      var dest$3 = this.aB;
      var length$3 = d5.a.length;
      d5.q(0, dest$3, 1, length$3);
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
      this.aj = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().aQ(a$5, 0, 32));
      this.X = 6;
      this.Q = ((33554432 - v.a7) | 0);
      var i$5 = ((v.h + this.Q) | 0);
      this.S = (31 & i$5);
      this.J = ((i$5 - this.S) | 0);
      this.bi = new ($d_O.r().r().r().r().r().r().C)(64);
      this.bi.a[0] = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(v.f, v.af), v.ag), v.ah), v.ai);
      var dest$4 = this.bi;
      var length$4 = d6.a.length;
      d6.q(0, dest$4, 1, length$4);
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
$p.tq = (function(before, bigVector) {
  if (((this.S !== 0) || (this.J !== 0))) {
    throw new $c_jl_UnsupportedOperationException("A non-empty VectorBuilder cannot be aligned retrospectively. Please call .reset() or use a new VectorBuilder.");
  }
  if ($m_sci_Vector0$().l(bigVector)) {
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
    var x1$2___1$mcI$sp = bigVector.b7;
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
  this.hK = true;
  return this;
});
$p.tk = (function(elem) {
  if ((this.S === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.aj.a[this.S] = elem;
  this.S = ((1 + this.S) | 0);
  return this;
});
$p.gH = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.S === 0) && (this.J === 0)) && (!this.hK)) ? this.rU(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.iB = (function() {
  if (this.hK) {
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
    var data = $m_ju_Arrays$().aQ(this.P, 1, i2);
    var prefix1 = this.P.a[0];
    var a$1 = this.P.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().ab(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.Q) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().aQ(this.V, 1, i3);
    var a$2 = this.V.a[0];
    var prefix2 = $m_ju_Arrays$().aQ(a$2, 1, a$2.a.length);
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
    var data$3 = $m_ju_Arrays$().aQ(this.a8, 1, i4);
    var a$4 = this.a8.a[0];
    var prefix3 = $m_ju_Arrays$().aQ(a$4, 1, a$4.a.length);
    var a$5 = this.a8.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().aQ(a$5, 1, a$5.a.length);
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
    var data$4 = $m_ju_Arrays$().aQ(this.aB, 1, i5);
    var a$7 = this.aB.a[0];
    var prefix4 = $m_ju_Arrays$().aQ(a$7, 1, a$7.a.length);
    var a$8 = this.aB.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().aQ(a$8, 1, a$8.a.length);
    var a$9 = this.aB.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().aQ(a$9, 1, a$9.a.length);
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
    var data$5 = $m_ju_Arrays$().aQ(this.bi, 1, i6);
    var a$11 = this.bi.a[0];
    var prefix5 = $m_ju_Arrays$().aQ(a$11, 1, a$11.a.length);
    var a$12 = this.bi.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().aQ(a$12, 1, a$12.a.length);
    var a$13 = this.bi.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().aQ(a$13, 1, a$13.a.length);
    var a$14 = this.bi.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().aQ(a$14, 1, a$14.a.length);
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
  return this.iB();
});
$p.b5 = (function(elems) {
  return this.gH(elems);
});
$p.ar = (function(elem) {
  return this.tk(elem);
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
  var k = coll.p();
  if ((k >= 0)) {
    var array = this.sl(this.qq, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.bZ(array, 0, 2147483647) : coll.e().bZ(array, 0, 2147483647));
    if ((actual !== k)) {
      throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), ((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).qY(coll);
  }
});
$p.as = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.w8 = (function(arrayLen, targetLen) {
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
$p.sl = (function(array, curSize, targetSize) {
  var newLen = this.w8(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.q(0, res, 0, curSize);
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
  this.eF = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.bt = (function(size) {
  this.eF.bt(size);
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
  this.eo = null;
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
  this.eF = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), initialCapacity$1, loadFactor$1));
}
$p = $c_scm_HashSet$$anon$4.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_HashSet$$anon$4;
/** @constructor */
function $h_scm_HashSet$$anon$4() {
}
$h_scm_HashSet$$anon$4.prototype = $p;
$p.bt = (function(size) {
  this.eF.bt(size);
});
var $d_scm_HashSet$$anon$4 = new $TypeData().i($c_scm_HashSet$$anon$4, "scala.collection.mutable.HashSet$$anon$4", ({
  iJ: 1,
  bj: 1,
  L: 1,
  J: 1,
  I: 1
}));
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  $thiz.hN = outer;
  $thiz.eH = 0;
  $thiz.dZ = null;
  $thiz.hO = outer.bB.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.eH = 0;
  this.dZ = null;
  this.hO = 0;
  this.hN = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.k = (function() {
  if ((this.dZ !== null)) {
    return true;
  } else {
    while ((this.eH < this.hO)) {
      var n = this.hN.bB.a[this.eH];
      this.eH = ((1 + this.eH) | 0);
      if ((n !== null)) {
        this.dZ = n;
        return true;
      }
    }
    return false;
  }
});
$p.d = (function() {
  if ((!this.k())) {
    return $m_sc_Iterator$().D.d();
  } else {
    var r = this.m6(this.dZ);
    this.dZ = this.dZ.bC;
    return r;
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.hP = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.hP = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.bt = (function(size) {
});
$p.b5 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.aM = (function() {
  return this.hP;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.eo = null;
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
  return new $c_scm_ListBuffer().jX(elems);
});
$p.as = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.bO = (function() {
  return new $c_scm_ListBuffer();
});
$p.am = (function(source) {
  return new $c_scm_ListBuffer().jX(source);
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
  this.lC = null;
  this.qy = null;
  this.qx = 0;
  this.lC = underlying;
  this.qy = mutationCount;
  this.qx = (mutationCount.L() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.k = (function() {
  $m_scm_MutationTracker$().rj(this.qx, (this.qy.L() | 0), "mutation occurred during iteration");
  return this.lC.k();
});
$p.d = (function() {
  return this.lC.d();
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
  this.hR = 0;
  this.qC = 0;
  this.qD = null;
  this.qD = x$2;
  this.hR = 0;
  this.qC = x$2.aJ();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.k = (function() {
  return (this.hR < this.qC);
});
$p.d = (function() {
  var result = this.qD.aK(this.hR);
  this.hR = ((1 + this.hR) | 0);
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
$p.as = (function() {
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
  return this.mc(elems);
});
$p.mc = (function(source) {
  return this.as().b5(source).aM();
});
$p.as = (function() {
  return new $c_scm_Builder$$anon$1($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), x$1$2$2.eI))));
});
$p.am = (function(source) {
  return this.mc(source);
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
  this.ds = null;
  this.ds = exception;
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
  var $x_1 = this.ds;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.ak : $x_1);
});
$p.mw = (function(f) {
  return this;
});
$p.sb = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.c5(this.ds, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().cP(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
  }
});
$p.sw = (function() {
  return $m_s_None$();
});
$p.cD = (function(fa, fb) {
  return fa.b(this.ds);
});
$p.aL = (function() {
  return "Failure";
});
$p.aJ = (function() {
  return 1;
});
$p.aK = (function(x$1) {
  return ((x$1 === 0) ? this.ds : $m_sr_Statics$().e9(x$1));
});
$p.aW = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().ft(this);
});
$p.l = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_util_Failure)) {
    var x = this.ds;
    var x$2 = x$1.ds;
    return ((x === null) ? (x$2 === null) : x.l(x$2));
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
$p.sw = (function() {
  return new $c_s_Some(this.cN);
});
$p.cD = (function(fa, fb) {
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
$p.aW = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().ft(this);
});
$p.l = (function(x$1) {
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
  this.ju = null;
  this.ju = subString$2;
}
$p = $c_Lsi\uff3ftool_SIAdversaryTool$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lsi\uff3ftool_SIAdversaryTool$$anon$1;
/** @constructor */
function $h_Lsi\uff3ftool_SIAdversaryTool$$anon$1() {
}
$h_Lsi\uff3ftool_SIAdversaryTool$$anon$1.prototype = $p;
$p.vb = (function(x) {
  var this$1 = this.ju;
  return (!(!this$1.startsWith(x)));
});
$p.tB = (function(x, default$1) {
  var this$1 = this.ju;
  if ((!(!this$1.startsWith(x)))) {
    return new $c_T2(x, $m_sc_StringOps$().m3(this.ju, x.length));
  } else {
    return default$1.b(x);
  }
});
$p.ci = (function(x) {
  return this.vb(x);
});
$p.c5 = (function(x, default$1) {
  return this.tB(x, default$1);
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
  this.lK = null;
  this.i1 = null;
  this.lK = stage$3;
  this.i1 = sel$2;
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
$p.vc = (function(x) {
  if ((x !== null)) {
    var x7 = x.fq;
    var x8 = x.fs;
    var x10 = x.fr;
    var x$2 = this.lK;
    if ((x$2 === x8)) {
      if (((x7 <= this.i1.cf) && (x10.c() || ((x10.E() | 0) > this.i1.cf)))) {
        return true;
      }
    }
  }
  return false;
});
$p.tC = (function(x, default$1) {
  if ((x !== null)) {
    var x13 = x.fq;
    var x14 = x.fs;
    var x15 = x.gC;
    var x16 = x.fr;
    var x$2 = this.lK;
    if ((x$2 === x14)) {
      if (((x13 <= this.i1.cf) && (x16.c() || ((x16.E() | 0) > this.i1.cf)))) {
        return x15;
      }
    }
  }
  return default$1.b(x);
});
$p.ci = (function(x) {
  return this.vc(x);
});
$p.c5 = (function(x, default$1) {
  return this.tC(x, default$1);
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
$p.aW = (function() {
  return new $c_s_Product$$anon$1(this);
});
function $f_Lcom_raquo_airstream_combine_CombineObservable__onInputsReady__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  if ((!transaction.tS($thiz))) {
    transaction.up($thiz);
  }
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__syncFire__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.gR($thiz.lZ(), transaction);
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__onStart__V($thiz) {
  var arr = $thiz.k6;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var _$1 = arr[i];
    $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V(_$1.k8, _$1, false);
    i = ((1 + i) | 0);
  }
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__onStop__V($thiz) {
  var arr = $thiz.k6;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var _$2 = arr[i];
    $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V(_$2.k8, _$2);
    i = ((1 + i) | 0);
  }
}
class $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(causes) {
    super();
    this.hb = null;
    this.hb = causes;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, $m_Lcom_raquo_airstream_core_AirstreamError$().tO(causes), null, true, true);
    var this$3 = causes.eM($m_s_$less$colon$less$().di).bP();
    if ((!this$3.c())) {
      this.jM(this$3.E());
    }
  }
  aW() {
    return new $c_s_Product$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
  }
  l(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError)) {
      var x = this.hb;
      var x$2 = x$0.hb;
      return ((x === null) ? (x$2 === null) : x.l(x$2));
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
      return this.hb;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  v() {
    return ("CombinedError: " + $f_sc_IterableOnceOps__mkString__T__T__T__T(this.hb.eM($m_s_$less$colon$less$().di).fH(), "", "; ", ""));
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
    this.hd = null;
    this.hc = null;
    this.hd = error;
    this.hc = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eN(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().eN(cause)), null, true, true);
    this.jM(cause);
  }
  aW() {
    return new $c_s_Product$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
  }
  l(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.hd;
      var x$2 = x$0.hd;
      if (((x === null) ? (x$2 === null) : x.l(x$2))) {
        var x$3 = this.hc;
        var x$4 = x$0.hc;
        return ((x$3 === null) ? (x$4 === null) : x$3.l(x$4));
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
      return this.hd;
    }
    if ((n === 1)) {
      return this.hc;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  v() {
    return ((("ErrorHandlingError: " + this.hd) + "; cause: ") + this.hc);
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
    this.he = null;
    this.he = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eN(error)), null, true, true);
  }
  aW() {
    return new $c_s_Product$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
  }
  l(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.he;
      var x$2 = x$0.he;
      return ((x === null) ? (x$2 === null) : x.l(x$2));
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
      return this.he;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  v() {
    return ("ObserverError: " + this.he);
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
    this.hg = null;
    this.hf = null;
    this.hg = error;
    this.hf = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eN(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().eN(cause)), null, true, true);
    this.jM(cause);
  }
  aW() {
    return new $c_s_Product$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
  }
  l(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.hg;
      var x$2 = x$0.hg;
      if (((x === null) ? (x$2 === null) : x.l(x$2))) {
        var x$3 = this.hf;
        var x$4 = x$0.hf;
        return ((x$3 === null) ? (x$4 === null) : x$3.l(x$4));
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
      return this.hg;
    }
    if ((n === 1)) {
      return this.hf;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  v() {
    return ((("ObserverErrorHandlingError: " + this.hg) + "; cause: ") + this.hf);
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
    this.fK = null;
    this.fJ = 0;
    this.fK = trx;
    this.fJ = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  aW() {
    return new $c_s_Product$$anon$1(this);
  }
  u() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().j(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().j(acc, $m_sr_Statics$().R(this.fK));
    acc = $m_sr_Statics$().j(acc, this.fJ);
    return $m_sr_Statics$().H(acc, 2);
  }
  l(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.fJ === x$0.fJ)) {
        var x = this.fK;
        var x$2 = x$0.fK;
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
      return this.fK;
    }
    if ((n === 1)) {
      return this.fJ;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  v() {
    return ((("TransactionDepthExceeded: " + this.fK) + "; maxDepth: ") + this.fJ);
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
    this.hi = null;
    this.hh = null;
    this.hi = message;
    this.hh = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, $m_Lcom_raquo_airstream_core_AirstreamError$().tP(message, cause), null, true, true);
    if ((!cause.c())) {
      this.jM(cause.E());
    }
  }
  aW() {
    return new $c_s_Product$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
  }
  l(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$VarError)) {
      if ((this.hi === x$0.hi)) {
        var x = this.hh;
        var x$2 = x$0.hh;
        return ((x === null) ? (x$2 === null) : x.l(x$2));
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
      return this.hi;
    }
    if ((n === 1)) {
      return this.hh;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  v() {
    return ((("VarError: " + this.hi) + "; cause: ") + this.hh);
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
  $thiz.iE();
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
  $thiz.iM = 0;
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V($thiz) {
  $thiz.iM = ((1 + $thiz.iM) | 0);
  $thiz.iL.ni.L();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V($thiz) {
  try {
    var $x_1 = new $c_s_util_Success(($thiz.iL.ng.L(), (void 0)));
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
  $thiz.iL.nh.L();
}
function $ct_Lcom_raquo_airstream_state_SourceVar__s_util_Try__($thiz, initial) {
  $thiz.kn = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz);
  $thiz.iS = initial;
  $thiz.iR = new $c_Lcom_raquo_airstream_state_VarSignal($thiz.iS, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz))));
  $thiz.bf = $thiz.iR;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar() {
  this.kn = null;
  this.iT = null;
  this.iS = null;
  this.iR = null;
  this.bf = null;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.eb = (function() {
  return this.kn;
});
$p.v = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.iD = (function() {
  return this.bf;
});
$p.mN = (function(value, transaction) {
  this.iS = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.iR, value, transaction);
});
$p.eQ = (function() {
  return this.bf;
});
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V($thiz, propDomName) {
  var x = $thiz.kJ;
  if ((x === (void 0))) {
    $thiz.kJ = $m_sjs_js_defined$().tz($m_Lcom_raquo_ew_JsArray$().bI($m_sr_ScalaRunTime$().B(new ($d_T.r().C)([propDomName]))));
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
        if ((x[i].xg() === propDomName)) {
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
  this.j0 = null;
  this.cW = null;
  this.kI = null;
  this.eZ = null;
  this.hr = null;
  this.kK = null;
  this.bG = null;
  this.pp = null;
  this.kJ = null;
  this.kK = tag;
  this.bG = ref;
  this.j0 = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
  this.pp = (void 0);
  this.kJ = (void 0);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.du = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gJ(parentNode, this, (void 0));
});
$p.jG = (function() {
  return this.cW;
});
$p.rl = (function(x$0) {
  this.cW = x$0;
});
$p.iH = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.iC = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.tT = (function() {
  if ($m_Lcom_raquo_laminar_DomApi$().va(this.bG)) {
    var x1 = this.kK;
    if (false) {
      return x1.x0();
    }
    return (void 0);
  } else {
    return $m_Lcom_raquo_laminar_inputs_InputController$().p6;
  }
});
$p.v8 = (function(propDomName) {
  var x = this.tT();
  return ((x !== (void 0)) && $m_Lcom_raquo_ew_JsArray$RichJsArray$().v1(x, propDomName, 0));
});
$p.vK = (function(key) {
  if ((key instanceof $c_Lcom_raquo_laminar_keys_HtmlProp)) {
    if (this.v8(key.dB)) {
      if ($p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z(this, key.dB)) {
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((((("Can not add uncontrolled `" + key.dB) + " <-- ???` to element `") + $m_Lcom_raquo_laminar_DomApi$().rq(this.bG)) + "` that already has an input controller for `") + key.dB) + "` property."));
      } else {
        $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V(this, key.dB);
      }
    }
  }
});
$p.v = (function() {
  return (("ReactiveHtmlElement(" + ((this.bG !== null) ? this.bG.outerHTML : ("tag=" + this.kK.kN))) + ")");
});
$p.aX = (function() {
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
  return ((that instanceof $c_RTLong) && (($thiz.r === that.r) && ($thiz.w === that.w)));
}
function $f_jl_Long__hashCode__I($thiz) {
  return ($thiz.r ^ $thiz.w);
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().mD($thiz.r, $thiz.w);
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
  var str = $m_jl_Character$().k2(ch);
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
$p.uO = (function() {
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
$p.aW = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return 2433880;
});
$p.v = (function() {
  return "None";
});
$p.E = (function() {
  this.uO();
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
  this.cn = null;
  this.cn = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.E = (function() {
  return this.cn;
});
$p.aL = (function() {
  return "Some";
});
$p.aJ = (function() {
  return 1;
});
$p.aK = (function(x$1) {
  return ((x$1 === 0) ? this.cn : $m_sr_Statics$().e9(x$1));
});
$p.aW = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().ft(this);
});
$p.l = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().i(this.cn, x$1.cn)));
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
$p.fx = (function(coll) {
  return this.aE().am(coll);
});
$p.ir = (function() {
  return this.aE().as();
});
$p.o = (function() {
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
$p.eM = (function(asIterable) {
  return this.br(asIterable);
});
$p.gN = (function(suffix) {
  return $f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix);
});
$p.U = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.dw = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
});
$p.jI = (function(p) {
  return $f_sc_IterableOnceOps__exists__F1__Z(this, p);
});
$p.fv = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.iA = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op);
});
$p.c = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.bZ = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.eK = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fH = (function() {
  return $m_sci_Nil$().z(this);
});
$p.h6 = (function() {
  return $m_sci_Vector$().bF(this);
});
$p.k0 = (function(evidence$2) {
  return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2);
});
$p.p = (function() {
  return (-1);
});
$p.gS = (function(coll) {
  return this.fx(coll);
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.co = xs;
  $thiz.C = 0;
  $thiz.c7 = $m_jl_reflect_Array$().aD($thiz.co);
  return $thiz;
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.co = null;
  this.C = 0;
  this.c7 = 0;
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.p = (function() {
  return ((this.c7 - this.C) | 0);
});
$p.k = (function() {
  return (this.C < this.c7);
});
$p.d = (function() {
  if ((this.C >= $m_jl_reflect_Array$().aD(this.co))) {
    $m_sc_Iterator$().D.d();
  }
  var r = $m_sr_ScalaRunTime$().e6(this.co, this.C);
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.d6 = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.C + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.c7;
    } else {
      var a = this.c7;
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
  return ((value < 0) ? 0 : ((value > $thiz.cp) ? $thiz.cp : value));
}
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.l9 = self;
  $thiz.dE = 0;
  $thiz.cp = self.n();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.l9 = null;
  this.dE = 0;
  this.cp = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.p = (function() {
  return this.cp;
});
$p.k = (function() {
  return (this.cp > 0);
});
$p.d = (function() {
  if ((this.cp > 0)) {
    var r = this.l9.x(this.dE);
    this.dE = ((1 + this.dE) | 0);
    this.cp = (((-1) + this.cp) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().D.d();
  }
});
$p.d6 = (function(n) {
  if ((n > 0)) {
    this.dE = ((this.dE + n) | 0);
    var b = ((this.cp - n) | 0);
    this.cp = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.h5 = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.cp = ((b < 0) ? 0 : b);
  this.dE = ((this.dE + formatFrom) | 0);
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
  this.gh = 0;
  this.pX = self;
  this.bL = self.n();
  this.gh = (((-1) + this.bL) | 0);
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = $p;
$p.k = (function() {
  return (this.bL > 0);
});
$p.d = (function() {
  if ((this.bL > 0)) {
    var r = this.pX.x(this.gh);
    this.gh = (((-1) + this.gh) | 0);
    this.bL = (((-1) + this.bL) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().D.d();
  }
});
$p.h5 = (function(from, until) {
  if ((this.bL > 0)) {
    if ((this.bL <= from)) {
      this.bL = 0;
    } else if ((from <= 0)) {
      if (((until >= 0) && (until < this.bL))) {
        this.bL = until;
      }
    } else {
      this.gh = ((this.gh - from) | 0);
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
  this.hP = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().D);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.th = (function(elem) {
  this.hP = this.hP.gM(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.ar = (function(elem) {
  return this.th(elem);
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
  while (it.k()) {
    var next = it.d();
    f.ba(next.be(), next.b9());
  }
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9($thiz.e(), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.be();
      var v = x0$1$2$2.b9();
      return ((k + " -> ") + v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  }))), sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  var builder = $thiz.ir();
  var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
  var it = $thiz.e();
  while (it.k()) {
    var next = it.d();
    if (seen.jC(f.b(next))) {
      builder.ar(next);
    }
  }
  return builder.aM();
}
function $f_sc_StrictOptimizedSeqOps__appended__O__O($thiz, elem) {
  var b = $thiz.ea().as();
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(b, $thiz, 1);
  b.b5($thiz);
  b.ar(elem);
  return b.aM();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.ea().as();
  b.b5($thiz);
  b.b5(suffix);
  return b.aM();
}
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.lf)) {
    $thiz.lg = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.lf = true;
  }
  return $thiz.lg;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.lf) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.lg);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.lg = null;
  this.lh = null;
  this.lf = false;
  $n_sci_ArraySeq$ = this;
  this.lh = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.ma = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.eR($m_s_Array$().rF(it, tag)));
});
$p.jR = (function(evidence$2) {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((b$2$2) => $m_sci_ArraySeq$().eR($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2$2, evidence$2)))));
});
$p.eR = (function(x) {
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
$p.m9 = (function(it, evidence$5) {
  return this.ma(it, evidence$5);
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
  this.dN = 0;
  this.bR = null;
  this.bH = 0;
  this.cs = null;
  this.dO = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.bg);
  while (this.k()) {
    var originalHash = this.bR.cE(this.ad);
    outer.h7(outer.dl, this.bR.dx(this.ad), this.bR.dy(this.ad), originalHash, $m_sc_Hashing$().bs(originalHash), 0);
    this.ad = ((1 + this.ad) | 0);
  }
}
$p = $c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
}
$h_sci_HashMapBuilder$$anon$1.prototype = $p;
$p.is = (function() {
  $m_sc_Iterator$().D.d();
  throw new $c_jl_ClassCastException();
});
$p.d = (function() {
  this.is();
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
  this.dN = 0;
  this.bR = null;
  this.bH = 0;
  this.cs = null;
  this.dO = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.bS);
  while (this.k()) {
    var originalHash = this.bR.cE(this.ad);
    outer.mT(outer.f7, this.bR.da(this.ad), originalHash, $m_sc_Hashing$().bs(originalHash), 0);
    this.ad = ((1 + this.ad) | 0);
  }
}
$p = $c_sci_HashSetBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashSetBuilder$$anon$1;
/** @constructor */
function $h_sci_HashSetBuilder$$anon$1() {
}
$h_sci_HashSetBuilder$$anon$1.prototype = $p;
$p.is = (function() {
  $m_sc_Iterator$().D.d();
  throw new $c_jl_ClassCastException();
});
$p.d = (function() {
  this.is();
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
  this.dQ = 0;
  this.f9 = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
}
$h_sci_Map$Map2$$anon$1.prototype = $p;
$p.cj = (function(k, v) {
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
  this.dQ = 0;
  this.f9 = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$2.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$2;
/** @constructor */
function $h_sci_Map$Map2$$anon$2() {
}
$h_sci_Map$Map2$$anon$2.prototype = $p;
$p.cj = (function(k, v) {
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
  this.dS = 0;
  this.dR = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$4;
/** @constructor */
function $h_sci_Map$Map3$$anon$4() {
}
$h_sci_Map$Map3$$anon$4.prototype = $p;
$p.cj = (function(k, v) {
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
  this.dS = 0;
  this.dR = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$5.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$5;
/** @constructor */
function $h_sci_Map$Map3$$anon$5() {
}
$h_sci_Map$Map3$$anon$5.prototype = $p;
$p.cj = (function(k, v) {
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
  this.dT = 0;
  this.d0 = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
}
$h_sci_Map$Map4$$anon$7.prototype = $p;
$p.cj = (function(k, v) {
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
  this.dT = 0;
  this.d0 = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$8.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$8;
/** @constructor */
function $h_sci_Map$Map4$$anon$8() {
}
$h_sci_Map$Map4$$anon$8.prototype = $p;
$p.cj = (function(k, v) {
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
  this.dN = 0;
  this.bR = null;
  this.bH = 0;
  this.cs = null;
  this.dO = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyIterator;
/** @constructor */
function $h_sci_MapKeyIterator() {
}
$h_sci_MapKeyIterator.prototype = $p;
$p.d = (function() {
  if ((!this.k())) {
    $m_sc_Iterator$().D.d();
  }
  var key = this.bR.dx(this.ad);
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
  this.ep = 0;
  this.jc = null;
  this.ct = 0;
  this.hD = null;
  this.hE = null;
  this.lo = 0;
  this.qh = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.lo = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().sx(this.lo, $m_sr_Statics$().R(this.qh), (-889275714));
});
$p.vz = (function() {
  if ((!this.k())) {
    $m_sc_Iterator$().D.d();
  }
  this.lo = this.jc.cE(this.ep);
  this.qh = this.jc.dy(this.ep);
  this.ep = (((-1) + this.ep) | 0);
  return this;
});
$p.d = (function() {
  return this.vz();
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
  this.dN = 0;
  this.bR = null;
  this.bH = 0;
  this.cs = null;
  this.dO = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.vy = (function() {
  if ((!this.k())) {
    $m_sc_Iterator$().D.d();
  }
  var payload = this.bR.mf(this.ad);
  this.ad = ((1 + this.ad) | 0);
  return payload;
});
$p.d = (function() {
  return this.vy();
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
  if (($thiz.ce <= $thiz.bd)) {
    $m_sc_Iterator$().D.d();
  }
  $thiz.es = ((1 + $thiz.es) | 0);
  var slice = $thiz.lq.dA($thiz.es);
  while ((slice.a.length === 0)) {
    $thiz.es = ((1 + $thiz.es) | 0);
    slice = $thiz.lq.dA($thiz.es);
  }
  $thiz.hH = $thiz.fc;
  var count = $thiz.qj;
  var idx = $thiz.es;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  $thiz.er = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
  var x1 = $thiz.er;
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
      $thiz.d1 = slice;
      break;
    }
    case 5: {
      $thiz.fb = slice;
      break;
    }
    case 6: {
      $thiz.lp = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  $thiz.fc = (($thiz.hH + Math.imul(slice.a.length, (1 << Math.imul(5, (((-1) + $thiz.er) | 0))))) | 0);
  if (($thiz.fc > $thiz.dW)) {
    $thiz.fc = $thiz.dW;
  }
  if (($thiz.er > 1)) {
    $thiz.gs = (((-1) + (1 << Math.imul(5, $thiz.er))) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.bd - $thiz.ce) | 0) + $thiz.dW) | 0);
  if ((pos === $thiz.fc)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.er > 1)) {
    var io = ((pos - $thiz.hH) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.gs ^ io));
    $thiz.gs = io;
  }
  $thiz.ce = (($thiz.ce - $thiz.bd) | 0);
  var a = $thiz.bx.a.length;
  var b = $thiz.ce;
  $thiz.dV = ((a < b) ? a : b);
  $thiz.bd = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.bx = $thiz.by.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.by = $thiz.c3.a[(31 & ((io >>> 10) | 0))];
    $thiz.bx = $thiz.by.a[0];
  } else if ((xor < 1048576)) {
    $thiz.c3 = $thiz.d1.a[(31 & ((io >>> 15) | 0))];
    $thiz.by = $thiz.c3.a[0];
    $thiz.bx = $thiz.by.a[0];
  } else if ((xor < 33554432)) {
    $thiz.d1 = $thiz.fb.a[(31 & ((io >>> 20) | 0))];
    $thiz.c3 = $thiz.d1.a[0];
    $thiz.by = $thiz.c3.a[0];
    $thiz.bx = $thiz.by.a[0];
  } else {
    $thiz.fb = $thiz.lp.a[((io >>> 25) | 0)];
    $thiz.d1 = $thiz.fb.a[0];
    $thiz.c3 = $thiz.d1.a[0];
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
    $thiz.c3 = $thiz.d1.a[(31 & ((io >>> 15) | 0))];
    $thiz.by = $thiz.c3.a[(31 & ((io >>> 10) | 0))];
    $thiz.bx = $thiz.by.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.d1 = $thiz.fb.a[(31 & ((io >>> 20) | 0))];
    $thiz.c3 = $thiz.d1.a[(31 & ((io >>> 15) | 0))];
    $thiz.by = $thiz.c3.a[(31 & ((io >>> 10) | 0))];
    $thiz.bx = $thiz.by.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.fb = $thiz.lp.a[((io >>> 25) | 0)];
    $thiz.d1 = $thiz.fb.a[(31 & ((io >>> 20) | 0))];
    $thiz.c3 = $thiz.d1.a[(31 & ((io >>> 15) | 0))];
    $thiz.by = $thiz.c3.a[(31 & ((io >>> 10) | 0))];
    $thiz.bx = $thiz.by.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.lq = null;
  this.dW = 0;
  this.qj = 0;
  this.bx = null;
  this.by = null;
  this.c3 = null;
  this.d1 = null;
  this.fb = null;
  this.lp = null;
  this.dV = 0;
  this.bd = 0;
  this.gs = 0;
  this.ce = 0;
  this.es = 0;
  this.er = 0;
  this.hH = 0;
  this.fc = 0;
  this.lq = v;
  this.dW = totalLength;
  this.qj = sliceCount;
  this.bx = v.f;
  this.dV = this.bx.a.length;
  this.bd = 0;
  this.gs = 0;
  this.ce = this.dW;
  this.es = 0;
  this.er = 1;
  this.hH = 0;
  this.fc = this.dV;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.p = (function() {
  return ((this.ce - this.bd) | 0);
});
$p.k = (function() {
  return (this.ce > this.bd);
});
$p.d = (function() {
  if ((this.bd === this.dV)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.bx.a[this.bd];
  this.bd = ((1 + this.bd) | 0);
  return r;
});
$p.d6 = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.bd - this.ce) | 0) + this.dW) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.dW;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.dW)) {
      this.bd = 0;
      this.ce = 0;
      this.dV = 0;
    } else {
      while ((newpos >= this.fc)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.hH) | 0);
      if ((this.er > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.gs ^ io));
        this.gs = io;
      }
      this.dV = this.bx.a.length;
      this.bd = (31 & io);
      this.ce = ((this.bd + ((this.dW - newpos) | 0)) | 0);
      if ((this.dV > this.ce)) {
        this.dV = this.ce;
      }
    }
  }
  return this;
});
$p.bZ = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().aD(xs);
  var srcLen = ((this.ce - this.bd) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.bd === this.dV)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total - copied) | 0);
    var b = ((this.bx.a.length - this.bd) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.bx;
      var srcPos = this.bd;
      var destPos = ((start + copied) | 0);
      src.q(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().ch(this.bx, this.bd, xs, ((start + copied) | 0), count);
    }
    this.bd = ((this.bd + count) | 0);
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
  this.gt = 0;
  this.fe = 0;
  this.et = false;
  this.fd = 0;
  this.gt = step;
  this.fe = lastElement;
  this.et = (!initiallyEmpty);
  this.fd = start;
}
$p = $c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $p;
$p.p = (function() {
  return (this.et ? ((1 + $intDiv(((this.fe - this.fd) | 0), this.gt)) | 0) : 0);
});
$p.k = (function() {
  return this.et;
});
$p.s2 = (function() {
  if ((!this.et)) {
    $m_sc_Iterator$().D.d();
  }
  var value = this.fd;
  this.et = (value !== this.fe);
  this.fd = ((value + this.gt) | 0);
  return value;
});
$p.d6 = (function(n) {
  if ((n > 0)) {
    var value = this.fd;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.gt, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((-2147483648) ^ lo) < ((-2147483648) ^ value)) ? ((1 + ((hi + hi$1) | 0)) | 0) : ((hi + hi$1) | 0));
    if ((this.gt > 0)) {
      var value$2 = this.fe;
      var hi$3 = (value$2 >> 31);
      if (((hi$3 === hi$2) ? (((-2147483648) ^ value$2) < ((-2147483648) ^ lo)) : (hi$3 < hi$2))) {
        var this$6__lo = value$2;
        var this$6__hi = hi$3;
      } else {
        var this$6__lo = lo;
        var this$6__hi = hi$2;
      }
      this.fd = this$6__lo;
      var value$3 = this.fe;
      var hi$4 = (value$3 >> 31);
      this.et = ((hi$2 === hi$4) ? (((-2147483648) ^ lo) <= ((-2147483648) ^ value$3)) : (hi$2 < hi$4));
    } else if ((this.gt < 0)) {
      var value$4 = this.fe;
      var hi$5 = (value$4 >> 31);
      if (((hi$5 === hi$2) ? (((-2147483648) ^ value$4) > ((-2147483648) ^ lo)) : (hi$5 > hi$2))) {
        var this$10__lo = value$4;
        var this$10__hi = hi$5;
      } else {
        var this$10__lo = lo;
        var this$10__hi = hi$2;
      }
      this.fd = this$10__lo;
      var value$5 = this.fe;
      var hi$6 = (value$5 >> 31);
      this.et = ((hi$2 === hi$6) ? (((-2147483648) ^ lo) >= ((-2147483648) ^ value$5)) : (hi$2 > hi$6));
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
  $thiz.dX = 0;
  $thiz.dq = n;
  return $thiz;
}
/** @constructor */
function $c_sci_Set$SetNIterator() {
  this.dX = 0;
  this.dq = 0;
}
$p = $c_sci_Set$SetNIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Set$SetNIterator;
/** @constructor */
function $h_sci_Set$SetNIterator() {
}
$h_sci_Set$SetNIterator.prototype = $p;
$p.p = (function() {
  return this.dq;
});
$p.k = (function() {
  return (this.dq > 0);
});
$p.d = (function() {
  if (this.k()) {
    var r = this.x(this.dX);
    this.dX = ((1 + this.dX) | 0);
    this.dq = (((-1) + this.dq) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().D.d();
  }
});
$p.d6 = (function(n) {
  if ((n > 0)) {
    this.dX = ((this.dX + n) | 0);
    var b = ((this.dq - n) | 0);
    this.dq = ((b < 0) ? 0 : b);
  }
  return this;
});
/** @constructor */
function $c_sci_SetHashIterator(rootNode) {
  this.ad = 0;
  this.dN = 0;
  this.bR = null;
  this.bH = 0;
  this.cs = null;
  this.dO = null;
  this.lr = 0;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
  this.lr = 0;
}
$p = $c_sci_SetHashIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_SetHashIterator;
/** @constructor */
function $h_sci_SetHashIterator() {
}
$h_sci_SetHashIterator.prototype = $p;
$p.u = (function() {
  return this.lr;
});
$p.d = (function() {
  if ((!this.k())) {
    $m_sc_Iterator$().D.d();
  }
  this.lr = this.bR.cE(this.ad);
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
  this.dN = 0;
  this.bR = null;
  this.bH = 0;
  this.cs = null;
  this.dO = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_SetIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_SetIterator;
/** @constructor */
function $h_sci_SetIterator() {
}
$h_sci_SetIterator.prototype = $p;
$p.d = (function() {
  if ((!this.k())) {
    $m_sc_Iterator$().D.d();
  }
  var payload = this.bR.da(this.ad);
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
  $thiz.lv = 0;
  $thiz.qr = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.lv = 0;
  this.qr = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.bt = (function(size) {
  if ((this.lv < size)) {
    this.w7(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.ly = null;
  this.lx = null;
  $n_scm_ArraySeq$ = this;
  this.ly = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.lx = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.uG = (function(it, evidence$2) {
  return this.mv($m_s_Array$().rF(it, evidence$2));
});
$p.jR = (function(evidence$3) {
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
$p.m9 = (function(it, evidence$5) {
  return this.uG(it, evidence$5);
});
$p.rs = (function(evidence$6) {
  return this.lx;
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
  this.eH = 0;
  this.dZ = null;
  this.hO = 0;
  this.hN = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$1.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$1;
/** @constructor */
function $h_scm_HashSet$$anon$1() {
}
$h_scm_HashSet$$anon$1.prototype = $p;
$p.m6 = (function(nd) {
  return nd.gy;
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
  this.eH = 0;
  this.dZ = null;
  this.hO = 0;
  this.hN = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$2.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$2;
/** @constructor */
function $h_scm_HashSet$$anon$2() {
}
$h_scm_HashSet$$anon$2.prototype = $p;
$p.m6 = (function(nd) {
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
  this.eH = 0;
  this.dZ = null;
  this.hO = 0;
  this.hN = null;
  this.lB = 0;
  this.qw = null;
  this.qw = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.lB = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.u = (function() {
  return this.lB;
});
$p.m6 = (function(nd) {
  this.lB = this.qw.jW(nd.e0);
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
  this.hQ = null;
  this.hQ = runtimeClass;
}
$p = $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $p;
$p.l = (function(x) {
  return $f_s_reflect_ClassTag__equals__O__Z(this, x);
});
$p.u = (function() {
  return $m_sr_Statics$().R(this.hQ);
});
$p.v = (function() {
  return $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this.hQ);
});
$p.bl = (function() {
  return this.hQ;
});
$p.c1 = (function(len) {
  return this.hQ.F.U(len);
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
    var this$2 = $m_s_Option$().lT(x0.getItem(key));
    var this$3 = (this$2.c() ? $m_s_None$() : new $c_s_Some(decode.b(this$2.E())));
  }
  return (this$3.c() ? default$1.L() : this$3.E());
}
function $p_Lcom_raquo_airstream_web_WebStorageVar__isSame$lzyINIT1$1__sr_LazyBoolean__s_util_Try__Z($thiz, isSame$lzy1$1, decodedValueTry$1) {
  if ((isSame$lzy1$1 === null)) {
    throw new $c_jl_NullPointerException();
  }
  if (isSame$lzy1$1.jj) {
    return isSame$lzy1$1.jk;
  } else {
    matchResult4: {
      var $x_1;
      var _2 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz.bf);
      if ((decodedValueTry$1 instanceof $c_s_util_Success)) {
        var decodedValue = decodedValueTry$1.cN;
        if ((_2 instanceof $c_s_util_Success)) {
          var varValue = _2.cN;
          var $x_1 = (!(!$thiz.oe.ba(decodedValue, varValue)));
          break matchResult4;
        }
      }
      var $x_1 = false;
    }
    return isSame$lzy1$1.v3($x_1);
  }
}
function $p_Lcom_raquo_airstream_web_WebStorageVar__isSame$1__sr_LazyBoolean__s_util_Try__Z($thiz, isSame$lzy1$2, decodedValueTry$2) {
  return (isSame$lzy1$2.jj ? isSame$lzy1$2.jk : $p_Lcom_raquo_airstream_web_WebStorageVar__isSame$lzyINIT1$1__sr_LazyBoolean__s_util_Try__Z($thiz, isSame$lzy1$2, decodedValueTry$2));
}
/** @constructor */
function $c_Lcom_raquo_airstream_web_WebStorageVar(maybeStorage, key, encode, decode, default$1, syncDistinctByFn) {
  this.kn = null;
  this.iT = null;
  this.iS = null;
  this.iR = null;
  this.bf = null;
  this.kr = null;
  this.iV = null;
  this.o9 = null;
  this.oa = null;
  this.oe = null;
  this.od = null;
  this.ob = null;
  this.oc = false;
  this.kr = maybeStorage;
  this.iV = key;
  this.o9 = decode;
  this.oa = default$1;
  this.oe = syncDistinctByFn;
  $ct_Lcom_raquo_airstream_state_SourceVar__s_util_Try__(this, $ps_Lcom_raquo_airstream_web_WebStorageVar__WebStorageVar$superArg$1__F0__T__F1__F1__F0__F2__s_util_Try(maybeStorage, key, encode, decode, default$1, syncDistinctByFn));
  this.od = new $c_Lcom_raquo_airstream_ownership_ManualOwner();
  $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(this.bf, $m_Lcom_raquo_airstream_core_Observer$().mW(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((newValue) => {
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
$p.uu = (function() {
  if ((!this.oc)) {
    this.ob = new $c_Lcom_raquo_airstream_misc_FilterStream($m_Lcom_raquo_airstream_web_DomEventStream$().r6(window, "storage", false), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => (this.kr.L().al(ev.storageArea) && (ev.key === this.iV)))));
    this.oc = true;
  }
  return this.ob;
});
$p.ws = (function(syncOwner) {
  this.vQ(true);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(this.uu(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    this.sn($m_s_Option$().lT(ev.newValue), true);
  })), syncOwner);
});
$p.vQ = (function(distinctOnly) {
  var x5 = this.kr.L();
  if ((x5 instanceof $c_s_Some)) {
    var storage = x5.cn;
    this.sn($m_s_Option$().lT(storage.getItem(this.iV)), distinctOnly);
    return (void 0);
  }
  if (($m_s_None$() === x5)) {
    return (void 0);
  }
  throw new $c_s_MatchError(x5);
});
$p.sn = (function(storedValueOpt, distinctOnly) {
  var isSame$lzy1 = new $c_sr_LazyBoolean();
  var ifEmpty = this.oa;
  var f = this.o9;
  var decodedValueTry = (storedValueOpt.c() ? ifEmpty.L() : f.b(storedValueOpt.E()));
  if ((!(distinctOnly && $p_Lcom_raquo_airstream_web_WebStorageVar__isSame$1__sr_LazyBoolean__s_util_Try__Z(this, isSame$lzy1, decodedValueTry)))) {
    this.iT.eP(decodedValueTry);
  }
});
$p.e7 = (function() {
  return (($f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this) + ("(key=" + this.iV)) + ")");
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
  this.fQ = null;
  this.fR = null;
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
  this.co = null;
  this.C = 0;
  this.c7 = 0;
  this.l1 = null;
  this.l1 = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $p;
$p.vA = (function() {
  if ((this.C >= this.l1.a.length)) {
    $m_sc_Iterator$().D.d();
  }
  var r = this.l1.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.d = (function() {
  return this.vA();
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
  this.co = null;
  this.C = 0;
  this.c7 = 0;
  this.l2 = null;
  this.l2 = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $p;
$p.vB = (function() {
  if ((this.C >= this.l2.a.length)) {
    $m_sc_Iterator$().D.d();
  }
  var r = this.l2.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.d = (function() {
  return $bC(this.vB());
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
  this.co = null;
  this.C = 0;
  this.c7 = 0;
  this.l3 = null;
  this.l3 = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $p;
$p.vC = (function() {
  if ((this.C >= this.l3.a.length)) {
    $m_sc_Iterator$().D.d();
  }
  var r = this.l3.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.d = (function() {
  return this.vC();
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
  this.co = null;
  this.C = 0;
  this.c7 = 0;
  this.l4 = null;
  this.l4 = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $p;
$p.vD = (function() {
  if ((this.C >= this.l4.a.length)) {
    $m_sc_Iterator$().D.d();
  }
  var r = this.l4.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.d = (function() {
  return this.vD();
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
  this.co = null;
  this.C = 0;
  this.c7 = 0;
  this.l5 = null;
  this.l5 = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $p;
$p.vE = (function() {
  if ((this.C >= this.l5.a.length)) {
    $m_sc_Iterator$().D.d();
  }
  var r = this.l5.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.d = (function() {
  return this.vE();
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
  this.co = null;
  this.C = 0;
  this.c7 = 0;
  this.l6 = null;
  this.l6 = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $p;
$p.vF = (function() {
  if ((this.C >= this.l6.a.length)) {
    $m_sc_Iterator$().D.d();
  }
  var t = this.l6.a[this.C];
  var lo = t.r;
  var hi = t.w;
  this.C = ((1 + this.C) | 0);
  return new $c_RTLong(lo, hi);
});
$p.d = (function() {
  return this.vF();
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
  this.co = null;
  this.C = 0;
  this.c7 = 0;
  this.l7 = null;
  this.l7 = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $p;
$p.vG = (function() {
  if ((this.C >= this.l7.a.length)) {
    $m_sc_Iterator$().D.d();
  }
  var r = this.l7.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.d = (function() {
  return this.vG();
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
  this.co = null;
  this.C = 0;
  this.c7 = 0;
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
$p.vH = (function() {
  if ((this.C >= this.pW.a.length)) {
    $m_sc_Iterator$().D.d();
  }
  this.C = ((1 + this.C) | 0);
});
$p.d = (function() {
  this.vH();
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
  this.co = null;
  this.C = 0;
  this.c7 = 0;
  this.l8 = null;
  this.l8 = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $p;
$p.vI = (function() {
  if ((this.C >= this.l8.a.length)) {
    $m_sc_Iterator$().D.d();
  }
  var r = this.l8.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.d = (function() {
  return this.vI();
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
  this.la = null;
  this.la = a$1;
}
$p = $c_sc_Iterable$$anon$1.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_Iterable$$anon$1;
/** @constructor */
function $h_sc_Iterable$$anon$1() {
}
$h_sc_Iterable$$anon$1.prototype = $p;
$p.e = (function() {
  return new $c_sc_Iterator$$anon$20(this.la);
});
$p.p = (function() {
  return 1;
});
$p.uY = (function() {
  return new $c_s_Some(this.la);
});
$p.bP = (function() {
  return this.uY();
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
  this.dX = 0;
  this.dq = 0;
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
  return this.qk.wc(i);
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
  this.dX = 0;
  this.dq = 0;
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
  return this.ql.wd(i);
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
  this.dX = 0;
  this.dq = 0;
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
  return this.qm.we(i);
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
  this.lv = 0;
  this.qr = 0;
  this.gx = null;
  this.qs = false;
  this.lw = null;
  this.gx = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.qs = (elementClass === $d_C.l());
  this.lw = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.r0 = (function(elem) {
  var unboxedElem = (this.qs ? $uC(elem) : ((elem === null) ? this.gx.F.z : elem));
  this.lw.push(unboxedElem);
  return this;
});
$p.t8 = (function(xs) {
  var it = xs.e();
  while (it.k()) {
    this.r0(it.d());
  }
  return this;
});
$p.w7 = (function(size) {
});
$p.aM = (function() {
  var elemRuntimeClass = ((this.gx === $d_V.l()) ? $d_jl_Void.l() : (((this.gx === $d_sr_Null$.l()) || (this.gx === $d_sr_Nothing$.l())) ? $d_O.l() : this.gx));
  return elemRuntimeClass.F.r().w(this.lw);
});
$p.v = (function() {
  return "ArrayBuilder.generic";
});
$p.b5 = (function(elems) {
  return this.t8(elems);
});
$p.ar = (function(elem) {
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
  this.l9 = null;
  this.dE = 0;
  this.cp = 0;
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
$p.k = (function() {
  $m_scm_MutationTracker$().rj(this.qu, (this.qv.L() | 0), "mutation occurred during iteration");
  return (this.cp > 0);
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
$p.l = (function(that) {
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
  aW() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
  }
  l(x$1) {
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
  if ((!($thiz.jQ() === (void 0)))) {
    $thiz.jB($m_Lcom_raquo_airstream_core_Signal$().s4());
  }
  $thiz.mx(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.jQ();
  if ((x === (void 0))) {
    $thiz.jB($m_Lcom_raquo_airstream_core_Signal$().s4());
    var nextValue = $thiz.jF();
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
  var this$ = $thiz.d7();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.eP(nextValue);
    if ((isError && (!elem))) {
      var ev$5 = true;
      elem = ev$5;
    }
  }
  var this$$1 = $thiz.dc();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.h3(nextValue, transaction);
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
    nextValue.cD(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cV(err);
    })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))));
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.cS(false);
  var this$ = $thiz.d7();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    try {
      observer.eO(nextValue);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      $m_Lcom_raquo_airstream_core_AirstreamError$().cV(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.dc();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.iv(nextValue, transaction);
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
  var this$ = $thiz.d7();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.iu(nextError);
  }
  var this$$1 = $thiz.dc();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.jS(nextError, transaction);
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
  nextValue.cD(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, _$2, transaction);
  })));
}
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33(key$33) {
  this.fQ = null;
  this.fR = null;
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
  this.fQ = null;
  this.fR = null;
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
  if (($thiz.bc(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.ir();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.e();
    var different = false;
    while (it.k()) {
      var next = it.d();
      if (seen.jC(f.b(next))) {
        builder.ar(next);
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
  this.e2 = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.v = (function() {
  return this.e2;
});
$p.l = (function(that) {
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
  return $thiz.ha.map(((_$1) => _$1.gG()));
}
function $f_Lcom_raquo_airstream_common_MultiParentSignal__onWillStart__V($thiz) {
  var arr = $thiz.ha;
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
  var arr = $thiz.ha;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var parent = arr[i];
    var ix = i;
    var newLastUpdateId = parent.gG();
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
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, $thiz.lZ());
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
  this.e2 = null;
  this.e2 = "Any";
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
  this.e2 = null;
  this.e2 = "Nothing";
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
  this.e2 = null;
  this.e2 = "Null";
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
  this.e2 = null;
  this.e2 = "Object";
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
  this.iM = 0;
  this.iL = null;
  this.nm = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V(this);
  this.iL = makeConfig.tx(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, value, _$1);
    })));
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => ((_$2) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, err$2, _$2);
    }))(err)));
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.iM)), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this))));
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
$p.fA = (function() {
  return this.nl;
});
$p.ec = (function() {
  return this.nn;
});
$p.cS = (function(x$1) {
  this.nl = x$1;
});
$p.fC = (function(x$1) {
  this.nn = x$1;
});
$p.l = (function(obj) {
  return (this === obj);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.gZ = (function(observer) {
});
$p.d7 = (function() {
  return this.nj;
});
$p.dc = (function() {
  return this.nk;
});
$p.h9 = (function() {
  return this.np;
});
$p.eT = (function(x$1) {
  this.np = x$1;
});
$p.gK = (function(x$0) {
  this.nj = x$0;
});
$p.gL = (function(x$0) {
  this.nk = x$0;
});
$p.gR = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.ef = (function() {
  return this.no;
});
$p.h4 = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V(this);
});
$p.h1 = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V(this);
});
$p.h2 = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V(this);
});
$p.eQ = (function() {
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
  this.ko = 0;
  this.nY = null;
  this.nZ = null;
  this.o5 = false;
  this.kp = null;
  this.o3 = null;
  this.o4 = 0;
  this.o3 = parentDisplayName;
  this.o1 = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.ko = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.kp = (void 0);
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
$p.fA = (function() {
  return this.o0;
});
$p.ec = (function() {
  return this.o2;
});
$p.cS = (function(x$1) {
  this.o0 = x$1;
});
$p.fC = (function(x$1) {
  this.o2 = x$1;
});
$p.h2 = (function() {
});
$p.l = (function(obj) {
  return (this === obj);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.gG = (function() {
  return this.ko;
});
$p.jB = (function(x$1) {
  this.ko = x$1;
});
$p.iD = (function() {
  return this;
});
$p.h1 = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.gZ = (function(observer) {
  observer.eP($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.d7 = (function() {
  return this.nY;
});
$p.dc = (function() {
  return this.nZ;
});
$p.h9 = (function() {
  return this.o5;
});
$p.eT = (function(x$1) {
  this.o5 = x$1;
});
$p.gK = (function(x$0) {
  this.nY = x$0;
});
$p.gL = (function(x$0) {
  this.nZ = x$0;
});
$p.jQ = (function() {
  return this.kp;
});
$p.mx = (function(x$1) {
  this.kp = x$1;
});
$p.gR = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.iE = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.ef = (function() {
  return this.o4;
});
$p.jF = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.h4 = (function() {
});
$p.e7 = (function() {
  return (this.o3.L() + ".signal");
});
$p.eQ = (function() {
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
      if (o.ig($thiz)) {
        return $thiz.fF(o);
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
  $thiz.gl = underlying;
  $thiz.hB = elem;
  return $thiz;
}
/** @constructor */
function $c_sc_View$Appended() {
  this.gl = null;
  this.hB = null;
}
$p = $c_sc_View$Appended.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Appended;
/** @constructor */
function $h_sc_View$Appended() {
}
$h_sc_View$Appended.prototype = $p;
$p.e = (function() {
  return new $c_sc_View$Concat(this.gl, new $c_sc_View$Single(this.hB)).e();
});
$p.p = (function() {
  var size = this.gl.p();
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
  this.j9 = null;
  this.ja = null;
  this.j9 = prefix;
  this.ja = suffix;
}
$p = $c_sc_View$Concat.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Concat;
/** @constructor */
function $h_sc_View$Concat() {
}
$h_sc_View$Concat.prototype = $p;
$p.e = (function() {
  return this.j9.e().gM(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.ja.e())));
});
$p.p = (function() {
  var prefixSize = this.j9.p();
  if ((prefixSize >= 0)) {
    var suffixSize = this.ja.p();
    return ((suffixSize >= 0) ? ((prefixSize + suffixSize) | 0) : (-1));
  } else {
    return (-1);
  }
});
$p.c = (function() {
  return (this.j9.c() && this.ja.c());
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
  this.jb = null;
  this.qa = null;
  this.jb = underlying;
  this.qa = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.e = (function() {
  return new $c_sc_Iterator$$anon$8(this.jb.e(), this.qa);
});
$p.p = (function() {
  return ((this.jb.p() === 0) ? 0 : (-1));
});
$p.c = (function() {
  return this.jb.c();
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
  this.le = null;
  this.qb = null;
  this.le = underlying;
  this.qb = f;
}
$p = $c_sc_View$FlatMap.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$FlatMap;
/** @constructor */
function $h_sc_View$FlatMap() {
}
$h_sc_View$FlatMap.prototype = $p;
$p.e = (function() {
  return new $c_sc_Iterator$$anon$10(this.le.e(), this.qb);
});
$p.p = (function() {
  return ((this.le.p() === 0) ? 0 : (-1));
});
$p.c = (function() {
  return (!this.e().k());
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
  $thiz.f5 = underlying;
  $thiz.hC = f;
  return $thiz;
}
/** @constructor */
function $c_sc_View$Map() {
  this.f5 = null;
  this.hC = null;
}
$p = $c_sc_View$Map.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Map;
/** @constructor */
function $h_sc_View$Map() {
}
$h_sc_View$Map.prototype = $p;
$p.e = (function() {
  return new $c_sc_Iterator$$anon$9(this.f5.e(), this.hC);
});
$p.p = (function() {
  return this.f5.p();
});
$p.c = (function() {
  return this.f5.c();
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
$p.p = (function() {
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
  this.lL = null;
  this.lL = \u03b4name$2;
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
  return this.lL;
});
$p.v = (function() {
  return this.lL;
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
  $thiz.ki = ($thiz.eh !== null);
  $thiz.iN = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.eh);
  if ($thiz.ki) {
    var newParentLastUpdateId = $thiz.eh.gG();
    if ((newParentLastUpdateId !== $thiz.iN)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.jF(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.iN = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.ki) {
    $thiz.iN = $thiz.eh.gG();
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.eh, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.eh, $thiz);
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
$p.l = (function(that) {
  return $f_sc_Set__equals__O__Z(this, that);
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.iF(this, this$1.jo);
});
$p.bm = (function() {
  return "Set";
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.mQ = (function(that) {
  return this.dw(that);
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
        return $thiz.dw(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x2) => ((kv$2$2) => $m_sr_BoxesRunTime$().i(x2.e8(kv$2$2.be(), $m_sc_Map$().q6), kv$2$2.b9())))(o)));
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
  this.k4 = 0;
  this.n0 = null;
  this.n1 = null;
  this.n5 = false;
  this.k5 = null;
  this.mX = null;
  this.mY = false;
  this.ha = null;
  this.mZ = null;
  this.k7 = 0;
  this.k6 = null;
  this.ha = parents;
  this.mZ = combinator;
  this.n3 = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.k4 = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.k5 = (void 0);
  this.k7 = ((1 + $m_Lcom_raquo_airstream_core_Protected$().vs(0, parents)) | 0);
  this.k6 = parents.map(((parent) => $m_Lcom_raquo_airstream_common_InternalParentObserver$().uN(parent, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$1, trx) => {
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
$p.fA = (function() {
  return this.n2;
});
$p.ec = (function() {
  return this.n4;
});
$p.cS = (function(x$1) {
  this.n2 = x$1;
});
$p.fC = (function(x$1) {
  this.n4 = x$1;
});
$p.l = (function(obj) {
  return (this === obj);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.gG = (function() {
  return this.k4;
});
$p.jB = (function(x$1) {
  this.k4 = x$1;
});
$p.iD = (function() {
  return this;
});
$p.gZ = (function(observer) {
  observer.eP($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.d7 = (function() {
  return this.n0;
});
$p.dc = (function() {
  return this.n1;
});
$p.h9 = (function() {
  return this.n5;
});
$p.eT = (function(x$1) {
  this.n5 = x$1;
});
$p.gK = (function(x$0) {
  this.n0 = x$0;
});
$p.gL = (function(x$0) {
  this.n1 = x$0;
});
$p.jQ = (function() {
  return this.k5;
});
$p.mx = (function(x$1) {
  this.k5 = x$1;
});
$p.iE = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gR = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.qU = (function() {
  if ((!this.mY)) {
    this.mX = $f_Lcom_raquo_airstream_common_MultiParentSignal___parentLastUpdateIds__Lcom_raquo_ew_JsArray(this);
    this.mY = true;
  }
  return this.mX;
});
$p.h4 = (function() {
  $f_Lcom_raquo_airstream_common_MultiParentSignal__onWillStart__V(this);
});
$p.h1 = (function() {
  $f_Lcom_raquo_airstream_combine_CombineObservable__onStart__V(this);
});
$p.h2 = (function() {
  $f_Lcom_raquo_airstream_combine_CombineObservable__onStop__V(this);
});
$p.ef = (function() {
  return this.k7;
});
$p.lZ = (function() {
  return $m_Lcom_raquo_airstream_combine_CombineObservable$().vh(this.ha.map(((_$2) => _$2.iE())), this.mZ);
});
$p.jF = (function() {
  return this.lZ();
});
$p.eQ = (function() {
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
  this.ke = null;
  this.nr = null;
  this.nw = 0;
  this.ke = parent;
  this.nr = fn;
  this.nu = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.nw = ((1 + parent.ef()) | 0);
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
$p.fA = (function() {
  return this.nt;
});
$p.ec = (function() {
  return this.nv;
});
$p.cS = (function(x$1) {
  this.nt = x$1;
});
$p.fC = (function(x$1) {
  this.nv = x$1;
});
$p.l = (function(obj) {
  return (this === obj);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.gZ = (function(observer) {
});
$p.d7 = (function() {
  return this.nq;
});
$p.dc = (function() {
  return this.ns;
});
$p.h9 = (function() {
  return this.nx;
});
$p.eT = (function(x$1) {
  this.nx = x$1;
});
$p.gK = (function(x$0) {
  this.nq = x$0;
});
$p.gL = (function(x$0) {
  this.ns = x$0;
});
$p.gR = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.h4 = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.ke);
});
$p.h1 = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.h2 = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.h3 = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.mF = (function() {
  return this.ke;
});
$p.ef = (function() {
  return this.nw;
});
$p.iv = (function(nextParentValue, transaction) {
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
  $x_1.cD(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
    if ((!nextValue.c())) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.E(), transaction);
    }
  })));
});
$p.jS = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.eQ = (function() {
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
  this.kf = null;
  this.nD = null;
  this.nE = 0;
  this.kf = parent;
  this.nD = passes;
  this.nB = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.nE = ((1 + parent.ef()) | 0);
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
$p.fA = (function() {
  return this.nA;
});
$p.ec = (function() {
  return this.nC;
});
$p.cS = (function(x$1) {
  this.nA = x$1;
});
$p.fC = (function(x$1) {
  this.nC = x$1;
});
$p.l = (function(obj) {
  return (this === obj);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.gZ = (function(observer) {
});
$p.d7 = (function() {
  return this.ny;
});
$p.dc = (function() {
  return this.nz;
});
$p.h9 = (function() {
  return this.nF;
});
$p.eT = (function(x$1) {
  this.nF = x$1;
});
$p.gK = (function(x$0) {
  this.ny = x$0;
});
$p.gL = (function(x$0) {
  this.nz = x$0;
});
$p.gR = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.h4 = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.kf);
});
$p.h1 = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.h2 = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.h3 = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.mF = (function() {
  return this.kf;
});
$p.ef = (function() {
  return this.nE;
});
$p.iv = (function(nextParentValue, transaction) {
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
  $x_1.cD(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((v1) => {
    if ((!(!v1))) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
    }
  })));
});
$p.jS = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.eQ = (function() {
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
  this.kg = 0;
  this.nG = null;
  this.nH = null;
  this.nM = false;
  this.kh = null;
  this.ki = false;
  this.iN = 0;
  this.eh = null;
  this.kj = null;
  this.kk = null;
  this.nL = 0;
  this.eh = parent;
  this.kj = project;
  this.kk = recover;
  this.nJ = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.kg = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.kh = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.nL = ((1 + parent.ef()) | 0);
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
$p.fA = (function() {
  return this.nI;
});
$p.ec = (function() {
  return this.nK;
});
$p.cS = (function(x$1) {
  this.nI = x$1;
});
$p.fC = (function(x$1) {
  this.nK = x$1;
});
$p.l = (function(obj) {
  return (this === obj);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.gG = (function() {
  return this.kg;
});
$p.jB = (function(x$1) {
  this.kg = x$1;
});
$p.iD = (function() {
  return this;
});
$p.gZ = (function(observer) {
  observer.eP($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.d7 = (function() {
  return this.nG;
});
$p.dc = (function() {
  return this.nH;
});
$p.h9 = (function() {
  return this.nM;
});
$p.eT = (function(x$1) {
  this.nM = x$1;
});
$p.gK = (function(x$0) {
  this.nG = x$0;
});
$p.gL = (function(x$0) {
  this.nH = x$0;
});
$p.jQ = (function() {
  return this.kh;
});
$p.mx = (function(x$1) {
  this.kh = x$1;
});
$p.iE = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gR = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.iv = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.jS = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.h4 = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$p.h1 = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$p.h2 = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$p.ef = (function() {
  return this.nL;
});
$p.h3 = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  nextParentValue.cD(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.kk;
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
      $x_1.cD(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$3) => ((tryError) => {
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
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.mw(this.kj), transaction);
  })));
});
$p.jF = (function() {
  var originalValue = this.eh.iE().mw(this.kj);
  return originalValue.cD(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.kk;
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
      return $x_1.cD(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$7$3) => ((tryError) => new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$7$3))))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
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
$p.eQ = (function() {
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
$p.ig = (function(that) {
  return true;
});
$p.l = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().sm(this);
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.T = (function(elem) {
  return $f_sc_SeqOps__appended__O__O(this, elem);
});
$p.dt = (function(suffix) {
  return $f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix);
});
$p.gN = (function(suffix) {
  return this.dt(suffix);
});
$p.O = (function() {
  return this.n();
});
$p.cR = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.mm = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.fz = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.e(), p, from);
});
$p.mO = (function(otherSize) {
  return this.bc(otherSize);
});
$p.bc = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.fF = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.c5 = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.ci = (function(x) {
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
$p.gN = (function(suffix) {
  return $f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix);
});
$p.cR = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.fz = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.e(), p, from);
});
$p.bc = (function(len) {
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
$p.p = (function() {
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
$p.aW = (function() {
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
  $thiz.sG = $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$();
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
$p.l = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().vq(this);
});
$p.bm = (function() {
  return "Map";
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.fx = (function(coll) {
  return this.s1().am(coll);
});
$p.c5 = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.fw = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.ci = (function(key) {
  return this.al(key);
});
$p.eK = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
function $ct_sc_SeqView$Appended__sc_SeqOps__O__($thiz, underlying, elem) {
  $thiz.gk = underlying;
  $thiz.j7 = elem;
  $ct_sc_View$Appended__sc_IterableOps__O__($thiz, underlying, elem);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Appended() {
  this.gl = null;
  this.hB = null;
  this.gk = null;
  this.j7 = null;
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
$p.gN = (function(suffix) {
  return $f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix);
});
$p.cR = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.fz = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.e(), p, from);
});
$p.bc = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.x = (function(idx) {
  return ((idx === this.gk.n()) ? this.j7 : this.gk.x(idx));
});
$p.n = (function() {
  return ((1 + this.gk.n()) | 0);
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
  $thiz.f2 = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.f2 = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.x = (function(idx) {
  return this.f2.x(idx);
});
$p.n = (function() {
  return this.f2.n();
});
$p.e = (function() {
  return this.f2.e();
});
$p.p = (function() {
  return this.f2.p();
});
$p.c = (function() {
  return this.f2.c();
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
  $thiz.hy = underlying;
  $thiz.j8 = f;
  $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Map() {
  this.f5 = null;
  this.hC = null;
  this.hy = null;
  this.j8 = null;
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
$p.gN = (function(suffix) {
  return $f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix);
});
$p.cR = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.fz = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.e(), p, from);
});
$p.bc = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.x = (function(idx) {
  return this.j8.b(this.hy.x(idx));
});
$p.n = (function() {
  return this.hy.n();
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
  this.eX = null;
  this.sF = null;
  this.om = null;
  this.on = false;
  this.oW = null;
  this.oX = false;
  this.ox = null;
  this.p0 = null;
  this.p1 = false;
  this.sG = null;
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
$p.v0 = (function() {
  if ((!this.oL)) {
    this.oK = new $c_Lcom_raquo_laminar_tags_HtmlTag("img", true);
    this.oL = true;
  }
  return this.oK;
});
$p.uW = (function() {
  if ((!this.oB)) {
    this.oA = new $c_Lcom_raquo_laminar_tags_HtmlTag("h1", false);
    this.oB = true;
  }
  return this.oA;
});
$p.mi = (function() {
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
$p.ie = (function() {
  if ((!this.or)) {
    this.oq = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    this.or = true;
  }
  return this.oq;
});
$p.vP = (function() {
  if ((!this.oT)) {
    this.oS = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    this.oT = true;
  }
  return this.oS;
});
$p.dv = (function() {
  if ((!this.ow)) {
    this.ov = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.ow = true;
  }
  return this.ov;
});
$p.wn = (function() {
  if ((!this.oV)) {
    this.oU = new $c_Lcom_raquo_laminar_keys_HtmlAttr("src", $m_Lcom_raquo_laminar_codecs_package$().fO);
    this.oV = true;
  }
  return this.oU;
});
$p.tL = (function() {
  if ((!this.ot)) {
    this.os = new $c_Lcom_raquo_laminar_keys_HtmlProp("checked", $m_Lcom_raquo_laminar_codecs_package$().kv);
    this.ot = true;
  }
  return this.os;
});
$p.sB = (function() {
  if ((!this.p3)) {
    this.p2 = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().fO);
    this.p3 = true;
  }
  return this.p2;
});
$p.io = (function() {
  if ((!this.oJ)) {
    this.oI = new $c_Lcom_raquo_laminar_keys_HtmlProp("hidden", $m_Lcom_raquo_laminar_codecs_package$().kv);
    this.oJ = true;
  }
  return this.oI;
});
$p.wv = (function() {
  if ((!this.oZ)) {
    this.oY = new $c_Lcom_raquo_laminar_keys_HtmlProp("title", $m_Lcom_raquo_laminar_codecs_package$().fO);
    this.oZ = true;
  }
  return this.oY;
});
$p.h0 = (function() {
  if ((!this.oP)) {
    this.oO = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.oP = true;
  }
  return this.oO;
});
$p.vL = (function() {
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
$p.id = (function() {
  if ((!this.op)) {
    this.oo = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2("background-color");
    this.op = true;
  }
  return this.oo;
});
$p.uA = (function() {
  if ((!this.oz)) {
    this.oy = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33("font-size");
    this.oz = true;
  }
  return this.oy;
});
$p.uZ = (function() {
  if ((!this.oH)) {
    this.oG = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("height");
    this.oH = true;
  }
  return this.oG;
});
$p.wJ = (function() {
  if ((!this.p5)) {
    this.p4 = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("width");
    this.p5 = true;
  }
  return this.p4;
});
$p.t6 = (function() {
  if ((!this.on)) {
    this.om = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.on = true;
  }
  return this.om;
});
$p.wp = (function() {
  if ((!this.oX)) {
    this.oW = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.oX = true;
  }
  return this.oW;
});
$p.wE = (function() {
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
$p.cC = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
$p.cF = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.bm = (function() {
  return "IndexedSeqView";
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bc = (function(len) {
  var x = this.n();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.n();
});
$p.cT = (function(f) {
  return this.cF(f);
});
$p.M = (function(f) {
  return this.cF(f);
});
$p.T = (function(elem) {
  return this.cC(elem);
});
$p.cO = (function(elem) {
  return this.cC(elem);
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
  this.gl = null;
  this.hB = null;
  this.gk = null;
  this.j7 = null;
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
$p.cC = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
$p.cF = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.bm = (function() {
  return "IndexedSeqView";
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bc = (function(len) {
  var x = this.n();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.n();
});
$p.cT = (function(f) {
  return this.cF(f);
});
$p.M = (function(f) {
  return this.cF(f);
});
$p.T = (function(elem) {
  return this.cC(elem);
});
$p.cO = (function(elem) {
  return this.cC(elem);
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
  this.f2 = null;
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
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bc = (function(len) {
  var x = this.n();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.n();
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
  this.f5 = null;
  this.hC = null;
  this.hy = null;
  this.j8 = null;
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
$p.cC = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
$p.cF = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.bm = (function() {
  return "IndexedSeqView";
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bc = (function(len) {
  var x = this.n();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.n();
});
$p.cT = (function(f) {
  return this.cF(f);
});
$p.M = (function(f) {
  return this.cF(f);
});
$p.T = (function(elem) {
  return this.cC(elem);
});
$p.cO = (function(elem) {
  return this.cC(elem);
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
  this.lu = null;
  this.jf = null;
  this.lu = underlying;
  this.jf = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.x = (function(n) {
  return this.lu.x(n);
});
$p.n = (function() {
  return this.lu.aU;
});
$p.c6 = (function() {
  return "ArrayBufferView";
});
$p.e = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.jf);
});
$p.cC = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.jf);
});
$p.cF = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.jf);
});
$p.cT = (function(f) {
  return this.cF(f);
});
$p.M = (function(f) {
  return this.cF(f);
});
$p.T = (function(elem) {
  return this.cC(elem);
});
$p.cO = (function(elem) {
  return this.cC(elem);
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
  return ((!$is_sci_IndexedSeq(that)) || ($thiz.n() === that.n()));
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.n();
      var equal = (length === o.n());
      if (equal) {
        var index = 0;
        var a = $thiz.ic();
        var b = o.ic();
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
          var thisIt = $thiz.e().d6(index);
          var thatIt = o.e().d6(index);
          while ((equal && thisIt.k())) {
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
$p.p = (function() {
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
$p.dz = (function(elem) {
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
  this.f4 = null;
  this.f4 = s;
}
$p = $c_sc_StringView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_sc_StringView;
/** @constructor */
function $h_sc_StringView() {
}
$h_sc_StringView.prototype = $p;
$p.n = (function() {
  return this.f4.length;
});
$p.v = (function() {
  return (("StringView(" + this.f4) + ")");
});
$p.aL = (function() {
  return "StringView";
});
$p.aJ = (function() {
  return 1;
});
$p.aK = (function(x$1) {
  return ((x$1 === 0) ? this.f4 : $m_sr_Statics$().e9(x$1));
});
$p.aW = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().bQ(this, (-889275714), false);
});
$p.l = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_sc_StringView) && (this.f4 === x$1.f4)));
});
$p.x = (function(i) {
  return $bC(this.f4.charCodeAt(i));
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
  this.ff = null;
  this.ff = elem1;
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
$p.p = (function() {
  return 1;
});
$p.al = (function(elem) {
  return $m_sr_BoxesRunTime$().i(elem, this.ff);
});
$p.db = (function(elem) {
  return (this.al(elem) ? this : new $c_sci_Set$Set2(this.ff, elem));
});
$p.e = (function() {
  return new $c_sc_Iterator$$anon$20(this.ff);
});
$p.U = (function(f) {
  f.b(this.ff);
});
$p.dw = (function(p) {
  return (!(!p.b(this.ff)));
});
$p.o = (function() {
  return this.ff;
});
$p.dz = (function(elem) {
  return this.db(elem);
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
  this.fg = null;
  this.gu = null;
  this.fg = elem1;
  this.gu = elem2;
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
$p.p = (function() {
  return 2;
});
$p.al = (function(elem) {
  return ($m_sr_BoxesRunTime$().i(elem, this.fg) || $m_sr_BoxesRunTime$().i(elem, this.gu));
});
$p.db = (function(elem) {
  return (this.al(elem) ? this : new $c_sci_Set$Set3(this.fg, this.gu, elem));
});
$p.e = (function() {
  return new $c_sci_Set$Set2$$anon$1(this);
});
$p.wc = (function(i) {
  switch (i) {
    case 0: {
      return this.fg;
      break;
    }
    case 1: {
      return this.gu;
      break;
    }
    default: {
      throw new $c_s_MatchError(i);
    }
  }
});
$p.U = (function(f) {
  f.b(this.fg);
  f.b(this.gu);
});
$p.dw = (function(p) {
  return ((!(!p.b(this.fg))) && (!(!p.b(this.gu))));
});
$p.o = (function() {
  return this.fg;
});
$p.dz = (function(elem) {
  return this.db(elem);
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
  this.fh = null;
  this.gv = null;
  this.gw = null;
  this.fh = elem1;
  this.gv = elem2;
  this.gw = elem3;
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
$p.p = (function() {
  return 3;
});
$p.al = (function(elem) {
  return (($m_sr_BoxesRunTime$().i(elem, this.fh) || $m_sr_BoxesRunTime$().i(elem, this.gv)) || $m_sr_BoxesRunTime$().i(elem, this.gw));
});
$p.db = (function(elem) {
  return (this.al(elem) ? this : new $c_sci_Set$Set4(this.fh, this.gv, this.gw, elem));
});
$p.e = (function() {
  return new $c_sci_Set$Set3$$anon$2(this);
});
$p.wd = (function(i) {
  switch (i) {
    case 0: {
      return this.fh;
      break;
    }
    case 1: {
      return this.gv;
      break;
    }
    case 2: {
      return this.gw;
      break;
    }
    default: {
      throw new $c_s_MatchError(i);
    }
  }
});
$p.U = (function(f) {
  f.b(this.fh);
  f.b(this.gv);
  f.b(this.gw);
});
$p.dw = (function(p) {
  return (((!(!p.b(this.fh))) && (!(!p.b(this.gv)))) && (!(!p.b(this.gw))));
});
$p.o = (function() {
  return this.fh;
});
$p.dz = (function(elem) {
  return this.db(elem);
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
  this.eu = null;
  this.fi = null;
  this.fj = null;
  this.fk = null;
  this.eu = elem1;
  this.fi = elem2;
  this.fj = elem3;
  this.fk = elem4;
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
$p.p = (function() {
  return 4;
});
$p.al = (function(elem) {
  return ((($m_sr_BoxesRunTime$().i(elem, this.eu) || $m_sr_BoxesRunTime$().i(elem, this.fi)) || $m_sr_BoxesRunTime$().i(elem, this.fj)) || $m_sr_BoxesRunTime$().i(elem, this.fk));
});
$p.db = (function(elem) {
  return (this.al(elem) ? this : $m_sci_HashSet$().hF.gV(this.eu).gV(this.fi).gV(this.fj).gV(this.fk).gV(elem));
});
$p.e = (function() {
  return new $c_sci_Set$Set4$$anon$3(this);
});
$p.we = (function(i) {
  switch (i) {
    case 0: {
      return this.eu;
      break;
    }
    case 1: {
      return this.fi;
      break;
    }
    case 2: {
      return this.fj;
      break;
    }
    case 3: {
      return this.fk;
      break;
    }
    default: {
      throw new $c_s_MatchError(i);
    }
  }
});
$p.U = (function(f) {
  f.b(this.eu);
  f.b(this.fi);
  f.b(this.fj);
  f.b(this.fk);
});
$p.dw = (function(p) {
  return ((((!(!p.b(this.eu))) && (!(!p.b(this.fi)))) && (!(!p.b(this.fj)))) && (!(!p.b(this.fk))));
});
$p.o = (function() {
  return this.eu;
});
$p.tJ = (function(builder) {
  return builder.ar(this.eu).ar(this.fi).ar(this.fj).ar(this.fk);
});
$p.dz = (function(elem) {
  return this.db(elem);
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
  this.gl = null;
  this.hB = null;
  this.gk = null;
  this.j7 = null;
  this.eD = null;
  this.eD = mutationCount;
  $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(this, underlying, elem);
}
$p = $c_scm_CheckedIndexedSeqView$Appended.prototype = new $h_sc_IndexedSeqView$Appended();
$p.constructor = $c_scm_CheckedIndexedSeqView$Appended;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$Appended() {
}
$h_scm_CheckedIndexedSeqView$Appended.prototype = $p;
$p.e = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.eD);
});
$p.cC = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.eD);
});
$p.cF = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.eD);
});
$p.cT = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.eD);
});
$p.M = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.eD);
});
$p.T = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.eD);
});
$p.cO = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.eD);
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
  this.f5 = null;
  this.hC = null;
  this.hy = null;
  this.j8 = null;
  this.eE = null;
  this.eE = mutationCount;
  $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(this, underlying, f);
}
$p = $c_scm_CheckedIndexedSeqView$Map.prototype = new $h_sc_IndexedSeqView$Map();
$p.constructor = $c_scm_CheckedIndexedSeqView$Map;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$Map() {
}
$h_scm_CheckedIndexedSeqView$Map.prototype = $p;
$p.e = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.eE);
});
$p.cC = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.eE);
});
$p.cF = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.eE);
});
$p.cT = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.eE);
});
$p.M = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.eE);
});
$p.T = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.eE);
});
$p.cO = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.eE);
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
$p.p = (function() {
  return 0;
});
$p.c = (function() {
  return true;
});
$p.lS = (function(key) {
  throw new $c_ju_NoSuchElementException(("key not found: " + key));
});
$p.al = (function(key) {
  return false;
});
$p.gT = (function(key) {
  return $m_s_None$();
});
$p.e8 = (function(key, default$1) {
  return default$1.L();
});
$p.e = (function() {
  return $m_sc_Iterator$().D;
});
$p.gX = (function() {
  return $m_sc_Iterator$().D;
});
$p.eS = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
$p.b = (function(key) {
  this.lS(key);
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
  $thiz.dp = outer;
  return $thiz;
}
/** @constructor */
function $c_sci_MapOps$ImmutableKeySet() {
  this.dp = null;
}
$p = $c_sci_MapOps$ImmutableKeySet.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_MapOps$ImmutableKeySet;
/** @constructor */
function $h_sci_MapOps$ImmutableKeySet() {
}
$h_sci_MapOps$ImmutableKeySet.prototype = $p;
$p.e = (function() {
  return this.dp.gX();
});
$p.al = (function(key) {
  return this.dp.al(key);
});
$p.O = (function() {
  return this.dp.O();
});
$p.p = (function() {
  return this.dp.p();
});
$p.c = (function() {
  return this.dp.c();
});
$p.db = (function(elem) {
  return (this.dp.al(elem) ? this : $f_sc_SetOps__concat__sc_IterableOnce__sc_SetOps($m_sci_Set$EmptySet$(), this).dz(elem));
});
$p.dz = (function(elem) {
  return this.db(elem);
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
  return ((newRootNode === $thiz.dp.bg) ? $thiz : new $c_sci_HashMap(newRootNode).ms());
}
/** @constructor */
function $c_sci_HashMap$HashKeySet(outer) {
  this.dp = null;
  $ct_sci_MapOps$ImmutableKeySet__sci_MapOps__(this, outer);
}
$p = $c_sci_HashMap$HashKeySet.prototype = new $h_sci_MapOps$ImmutableKeySet();
$p.constructor = $c_sci_HashMap$HashKeySet;
/** @constructor */
function $h_sci_HashMap$HashKeySet() {
}
$h_sci_HashMap$HashKeySet.prototype = $p;
$p.db = (function(elem) {
  var originalHash = $m_sr_Statics$().R(elem);
  var improvedHash = $m_sc_Hashing$().bs(originalHash);
  return $p_sci_HashMap$HashKeySet__newKeySetOrThis__sci_BitmapIndexedMapNode__sci_Set(this, this.dp.bg.mU(elem, null, originalHash, improvedHash, 0, false));
});
$p.dz = (function(elem) {
  return this.db(elem);
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
  this.cu = null;
  this.dP = null;
  this.cu = key1;
  this.dP = value1;
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
$p.p = (function() {
  return 1;
});
$p.c = (function() {
  return false;
});
$p.b = (function(key) {
  if ($m_sr_BoxesRunTime$().i(key, this.cu)) {
    return this.dP;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.al = (function(key) {
  return $m_sr_BoxesRunTime$().i(key, this.cu);
});
$p.gT = (function(key) {
  return ($m_sr_BoxesRunTime$().i(key, this.cu) ? new $c_s_Some(this.dP) : $m_s_None$());
});
$p.e8 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().i(key, this.cu) ? this.dP : default$1.L());
});
$p.e = (function() {
  return new $c_sc_Iterator$$anon$20(new $c_T2(this.cu, this.dP));
});
$p.gX = (function() {
  return new $c_sc_Iterator$$anon$20(this.cu);
});
$p.fI = (function(key, value) {
  return ($m_sr_BoxesRunTime$().i(key, this.cu) ? new $c_sci_Map$Map1(this.cu, value) : new $c_sci_Map$Map2(this.cu, this.dP, key, value));
});
$p.U = (function(f) {
  f.b(new $c_T2(this.cu, this.dP));
});
$p.dw = (function(p) {
  return (!(!p.b(new $c_T2(this.cu, this.dP))));
});
$p.u = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().df(this.cu, this.dP);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().eJ;
  h = $m_s_util_hashing_MurmurHash3$().j(h, a);
  h = $m_s_util_hashing_MurmurHash3$().j(h, b);
  h = $m_s_util_hashing_MurmurHash3$().ed(h, c);
  return $m_s_util_hashing_MurmurHash3$().H(h, 1);
});
$p.eS = (function(key, value) {
  return this.fI(key, value);
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
  this.cv = null;
  this.dm = null;
  this.cw = null;
  this.dn = null;
  this.cv = key1;
  this.dm = value1;
  this.cw = key2;
  this.dn = value2;
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
$p.p = (function() {
  return 2;
});
$p.c = (function() {
  return false;
});
$p.b = (function(key) {
  if ($m_sr_BoxesRunTime$().i(key, this.cv)) {
    return this.dm;
  } else if ($m_sr_BoxesRunTime$().i(key, this.cw)) {
    return this.dn;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.al = (function(key) {
  return ($m_sr_BoxesRunTime$().i(key, this.cv) || $m_sr_BoxesRunTime$().i(key, this.cw));
});
$p.gT = (function(key) {
  return ($m_sr_BoxesRunTime$().i(key, this.cv) ? new $c_s_Some(this.dm) : ($m_sr_BoxesRunTime$().i(key, this.cw) ? new $c_s_Some(this.dn) : $m_s_None$()));
});
$p.e8 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().i(key, this.cv) ? this.dm : ($m_sr_BoxesRunTime$().i(key, this.cw) ? this.dn : default$1.L()));
});
$p.e = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.gX = (function() {
  return new $c_sci_Map$Map2$$anon$2(this);
});
$p.fI = (function(key, value) {
  return ($m_sr_BoxesRunTime$().i(key, this.cv) ? new $c_sci_Map$Map2(this.cv, value, this.cw, this.dn) : ($m_sr_BoxesRunTime$().i(key, this.cw) ? new $c_sci_Map$Map2(this.cv, this.dm, this.cw, value) : new $c_sci_Map$Map3(this.cv, this.dm, this.cw, this.dn, key, value)));
});
$p.U = (function(f) {
  f.b(new $c_T2(this.cv, this.dm));
  f.b(new $c_T2(this.cw, this.dn));
});
$p.dw = (function(p) {
  return ((!(!p.b(new $c_T2(this.cv, this.dm)))) && (!(!p.b(new $c_T2(this.cw, this.dn)))));
});
$p.u = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().df(this.cv, this.dm);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().df(this.cw, this.dn);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().eJ;
  h = $m_s_util_hashing_MurmurHash3$().j(h, a);
  h = $m_s_util_hashing_MurmurHash3$().j(h, b);
  h = $m_s_util_hashing_MurmurHash3$().ed(h, c);
  return $m_s_util_hashing_MurmurHash3$().H(h, 2);
});
$p.eS = (function(key, value) {
  return this.fI(key, value);
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
  this.cb = null;
  this.cX = null;
  this.cc = null;
  this.cY = null;
  this.cd = null;
  this.cZ = null;
  this.cb = key1;
  this.cX = value1;
  this.cc = key2;
  this.cY = value2;
  this.cd = key3;
  this.cZ = value3;
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
$p.p = (function() {
  return 3;
});
$p.c = (function() {
  return false;
});
$p.b = (function(key) {
  if ($m_sr_BoxesRunTime$().i(key, this.cb)) {
    return this.cX;
  } else if ($m_sr_BoxesRunTime$().i(key, this.cc)) {
    return this.cY;
  } else if ($m_sr_BoxesRunTime$().i(key, this.cd)) {
    return this.cZ;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.al = (function(key) {
  return (($m_sr_BoxesRunTime$().i(key, this.cb) || $m_sr_BoxesRunTime$().i(key, this.cc)) || $m_sr_BoxesRunTime$().i(key, this.cd));
});
$p.gT = (function(key) {
  return ($m_sr_BoxesRunTime$().i(key, this.cb) ? new $c_s_Some(this.cX) : ($m_sr_BoxesRunTime$().i(key, this.cc) ? new $c_s_Some(this.cY) : ($m_sr_BoxesRunTime$().i(key, this.cd) ? new $c_s_Some(this.cZ) : $m_s_None$())));
});
$p.e8 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().i(key, this.cb) ? this.cX : ($m_sr_BoxesRunTime$().i(key, this.cc) ? this.cY : ($m_sr_BoxesRunTime$().i(key, this.cd) ? this.cZ : default$1.L())));
});
$p.e = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.gX = (function() {
  return new $c_sci_Map$Map3$$anon$5(this);
});
$p.fI = (function(key, value) {
  return ($m_sr_BoxesRunTime$().i(key, this.cb) ? new $c_sci_Map$Map3(this.cb, value, this.cc, this.cY, this.cd, this.cZ) : ($m_sr_BoxesRunTime$().i(key, this.cc) ? new $c_sci_Map$Map3(this.cb, this.cX, this.cc, value, this.cd, this.cZ) : ($m_sr_BoxesRunTime$().i(key, this.cd) ? new $c_sci_Map$Map3(this.cb, this.cX, this.cc, this.cY, this.cd, value) : new $c_sci_Map$Map4(this.cb, this.cX, this.cc, this.cY, this.cd, this.cZ, key, value))));
});
$p.U = (function(f) {
  f.b(new $c_T2(this.cb, this.cX));
  f.b(new $c_T2(this.cc, this.cY));
  f.b(new $c_T2(this.cd, this.cZ));
});
$p.dw = (function(p) {
  return (((!(!p.b(new $c_T2(this.cb, this.cX)))) && (!(!p.b(new $c_T2(this.cc, this.cY))))) && (!(!p.b(new $c_T2(this.cd, this.cZ)))));
});
$p.u = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().df(this.cb, this.cX);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().df(this.cc, this.cY);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().df(this.cd, this.cZ);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().eJ;
  h = $m_s_util_hashing_MurmurHash3$().j(h, a);
  h = $m_s_util_hashing_MurmurHash3$().j(h, b);
  h = $m_s_util_hashing_MurmurHash3$().ed(h, c);
  return $m_s_util_hashing_MurmurHash3$().H(h, 3);
});
$p.eS = (function(key, value) {
  return this.fI(key, value);
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
  this.cx = null;
  this.bV = null;
  this.cy = null;
  this.bW = null;
  this.cz = null;
  this.bX = null;
  this.cA = null;
  this.bU = key1;
  this.cx = value1;
  this.bV = key2;
  this.cy = value2;
  this.bW = key3;
  this.cz = value3;
  this.bX = key4;
  this.cA = value4;
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
$p.p = (function() {
  return 4;
});
$p.c = (function() {
  return false;
});
$p.b = (function(key) {
  if ($m_sr_BoxesRunTime$().i(key, this.bU)) {
    return this.cx;
  } else if ($m_sr_BoxesRunTime$().i(key, this.bV)) {
    return this.cy;
  } else if ($m_sr_BoxesRunTime$().i(key, this.bW)) {
    return this.cz;
  } else if ($m_sr_BoxesRunTime$().i(key, this.bX)) {
    return this.cA;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.al = (function(key) {
  return ((($m_sr_BoxesRunTime$().i(key, this.bU) || $m_sr_BoxesRunTime$().i(key, this.bV)) || $m_sr_BoxesRunTime$().i(key, this.bW)) || $m_sr_BoxesRunTime$().i(key, this.bX));
});
$p.gT = (function(key) {
  return ($m_sr_BoxesRunTime$().i(key, this.bU) ? new $c_s_Some(this.cx) : ($m_sr_BoxesRunTime$().i(key, this.bV) ? new $c_s_Some(this.cy) : ($m_sr_BoxesRunTime$().i(key, this.bW) ? new $c_s_Some(this.cz) : ($m_sr_BoxesRunTime$().i(key, this.bX) ? new $c_s_Some(this.cA) : $m_s_None$()))));
});
$p.e8 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().i(key, this.bU) ? this.cx : ($m_sr_BoxesRunTime$().i(key, this.bV) ? this.cy : ($m_sr_BoxesRunTime$().i(key, this.bW) ? this.cz : ($m_sr_BoxesRunTime$().i(key, this.bX) ? this.cA : default$1.L()))));
});
$p.e = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.gX = (function() {
  return new $c_sci_Map$Map4$$anon$8(this);
});
$p.fI = (function(key, value) {
  return ($m_sr_BoxesRunTime$().i(key, this.bU) ? new $c_sci_Map$Map4(this.bU, value, this.bV, this.cy, this.bW, this.cz, this.bX, this.cA) : ($m_sr_BoxesRunTime$().i(key, this.bV) ? new $c_sci_Map$Map4(this.bU, this.cx, this.bV, value, this.bW, this.cz, this.bX, this.cA) : ($m_sr_BoxesRunTime$().i(key, this.bW) ? new $c_sci_Map$Map4(this.bU, this.cx, this.bV, this.cy, this.bW, value, this.bX, this.cA) : ($m_sr_BoxesRunTime$().i(key, this.bX) ? new $c_sci_Map$Map4(this.bU, this.cx, this.bV, this.cy, this.bW, this.cz, this.bX, value) : $m_sci_HashMap$().lj.h8(this.bU, this.cx).h8(this.bV, this.cy).h8(this.bW, this.cz).h8(this.bX, this.cA).h8(key, value)))));
});
$p.U = (function(f) {
  f.b(new $c_T2(this.bU, this.cx));
  f.b(new $c_T2(this.bV, this.cy));
  f.b(new $c_T2(this.bW, this.cz));
  f.b(new $c_T2(this.bX, this.cA));
});
$p.dw = (function(p) {
  return ((((!(!p.b(new $c_T2(this.bU, this.cx)))) && (!(!p.b(new $c_T2(this.bV, this.cy))))) && (!(!p.b(new $c_T2(this.bW, this.cz))))) && (!(!p.b(new $c_T2(this.bX, this.cA)))));
});
$p.tI = (function(builder) {
  return builder.fu(this.bU, this.cx).fu(this.bV, this.cy).fu(this.bW, this.cz).fu(this.bX, this.cA);
});
$p.u = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().df(this.bU, this.cx);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().df(this.bV, this.cy);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().df(this.bW, this.cz);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().df(this.bX, this.cA);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().eJ;
  h = $m_s_util_hashing_MurmurHash3$().j(h, a);
  h = $m_s_util_hashing_MurmurHash3$().j(h, b);
  h = $m_s_util_hashing_MurmurHash3$().ed(h, c);
  return $m_s_util_hashing_MurmurHash3$().H(h, 4);
});
$p.eS = (function(key, value) {
  return this.fI(key, value);
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
$p.p = (function() {
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
  return this.bS.ij(element, elementUnimprovedHash, elementHash, 0);
});
$p.gV = (function(element) {
  var elementUnimprovedHash = $m_sr_Statics$().R(element);
  var elementHash = $m_sc_Hashing$().bs(elementUnimprovedHash);
  return $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet(this, this.bS.sy(element, elementUnimprovedHash, elementHash, 0));
});
$p.o = (function() {
  return this.e().d();
});
$p.U = (function(f) {
  this.bS.U(f);
});
$p.mQ = (function(that) {
  return (this.c() || ((!that.c()) && ((that instanceof $c_sci_HashSet) ? this.bS.mR(that.bS, 0) : $f_sc_IterableOnceOps__forall__F1__Z(this, that))));
});
$p.l = (function(that) {
  if ((that instanceof $c_sci_HashSet)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bS;
      var x$2 = that.bS;
      return ((x === null) ? (x$2 === null) : x.l(x$2));
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
  return $m_s_util_hashing_MurmurHash3$().iF(it, $m_s_util_hashing_MurmurHash3$().jo);
});
$p.dz = (function(elem) {
  return this.gV(elem);
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
  if ((!$thiz.lk)) {
    if ($thiz.je) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
    }
    $thiz.je = true;
    try {
      var res = $thiz.ll.L();
    } finally {
      $thiz.je = false;
    }
    $thiz.bT = true;
    $thiz.ll = null;
    $thiz.lm = res;
    $thiz.lk = true;
  }
  return $thiz.lm;
}
function $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz, f) {
  $m_sci_LazyList$();
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => ($thiz.c() ? $m_sci_LazyList$State$Empty$() : ($m_sci_LazyList$(), new $c_sci_LazyList$State$Cons(f.b($thiz.A().o()), $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz.A().aN(), f)))))));
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.s = (("" + b.s) + start);
  if ((!$thiz.bT)) {
    b.s = (b.s + "<not computed>");
  } else if ((!$thiz.c())) {
    var obj = $thiz.A().o();
    b.s = (("" + b.s) + obj);
    var elem = null;
    elem = $thiz;
    var elem$1 = $thiz.A().aN();
    var elem$2 = null;
    elem$2 = elem$1;
    if (((elem !== elem$2) && ((!elem$2.bT) || (elem.A() !== elem$2.A())))) {
      elem = elem$2;
      if ((elem$2.bT && (!elem$2.c()))) {
        elem$2 = elem$2.A().aN();
        while ((((elem !== elem$2) && (elem$2.bT && (!elem$2.c()))) && (elem.A() !== elem$2.A()))) {
          b.s = (("" + b.s) + sep);
          var obj$1 = elem.A().o();
          b.s = (("" + b.s) + obj$1);
          elem = elem.A().aN();
          elem$2 = elem$2.A().aN();
          if ((elem$2.bT && (!elem$2.c()))) {
            elem$2 = elem$2.A().aN();
          }
        }
      }
    }
    if ((!(elem$2.bT && (!elem$2.c())))) {
      while ((elem !== elem$2)) {
        b.s = (("" + b.s) + sep);
        var obj$2 = elem.A().o();
        b.s = (("" + b.s) + obj$2);
        elem = elem.A().aN();
      }
      if ((!elem.bT)) {
        b.s = (("" + b.s) + sep);
        b.s = (b.s + "<not computed>");
      }
    } else {
      var runner = $thiz;
      var k = 0;
      while (true) {
        var a = runner;
        var b$1 = elem$2;
        if ((!((a === b$1) || (a.A() === b$1.A())))) {
          runner = runner.A().aN();
          elem$2 = elem$2.A().aN();
          k = ((1 + k) | 0);
        } else {
          break;
        }
      }
      var a$1 = elem;
      var b$2 = elem$2;
      if ((((a$1 === b$2) || (a$1.A() === b$2.A())) && (k > 0))) {
        b.s = (("" + b.s) + sep);
        var obj$3 = elem.A().o();
        b.s = (("" + b.s) + obj$3);
        elem = elem.A().aN();
      }
      while (true) {
        var a$2 = elem;
        var b$3 = elem$2;
        if ((!((a$2 === b$3) || (a$2.A() === b$3.A())))) {
          b.s = (("" + b.s) + sep);
          var obj$4 = elem.A().o();
          b.s = (("" + b.s) + obj$4);
          elem = elem.A().aN();
        } else {
          break;
        }
      }
      b.s = (("" + b.s) + sep);
      b.s = (b.s + "<cycle>");
    }
  }
  b.s = (("" + b.s) + end);
  return b;
}
/** @constructor */
function $c_sci_LazyList(lazyState) {
  this.lm = null;
  this.ll = null;
  this.bT = false;
  this.je = false;
  this.lk = false;
  this.ll = lazyState;
  this.bT = false;
  this.je = false;
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
$p.n = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$p.bc = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.mm = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.x = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.jI = (function(p) {
  return $f_sc_LinearSeqOps__exists__F1__Z(this, p);
});
$p.fF = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.fz = (function(p, from) {
  return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from);
});
$p.A = (function() {
  return ((!this.lk) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.lm);
});
$p.c = (function() {
  return (this.A() === $m_sci_LazyList$State$Empty$());
});
$p.p = (function() {
  return ((this.bT && (this.A() === $m_sci_LazyList$State$Empty$())) ? 0 : (-1));
});
$p.o = (function() {
  return this.A().o();
});
$p.rD = (function() {
  var these = this;
  var those = this;
  if ((!these.c())) {
    these = these.A().aN();
  }
  while ((those !== these)) {
    if (these.c()) {
      return this;
    }
    these = these.A().aN();
    if (these.c()) {
      return this;
    }
    these = these.A().aN();
    if ((these === those)) {
      return this;
    }
    those = those.A().aN();
  }
  return this;
});
$p.e = (function() {
  return ((this.bT && (this.A() === $m_sci_LazyList$State$Empty$())) ? $m_sc_Iterator$().D : new $c_sci_LazyList$LazyIterator(this));
});
$p.U = (function(f) {
  var _$this = this;
  while (true) {
    if ((!_$this.c())) {
      f.b(_$this.A().o());
      _$this = _$this.A().aN();
      continue;
    }
    break;
  }
});
$p.fv = (function(z, op) {
  var _$this = this;
  while (true) {
    if (_$this.c()) {
      return z;
    } else {
      var temp$_$this = _$this.A().aN();
      var temp$z = op.ba(z, _$this.A().o());
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
      return ((x1 instanceof $c_sci_LazyList) ? x1.A() : ((x1.p() === 0) ? $m_sci_LazyList$State$Empty$() : $m_sci_LazyList$().mL(x1.e())));
    } else {
      $m_sci_LazyList$();
      return new $c_sci_LazyList$State$Cons(this.A().o(), this.A().aN().mu(suffix));
    }
  })));
});
$p.tv = (function(suffix) {
  return ((this.bT && (this.A() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().jK(suffix) : this.mu(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => suffix))));
});
$p.ts = (function(elem) {
  return ((this.bT && (this.A() === $m_sci_LazyList$State$Empty$())) ? ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    $m_sci_LazyList$();
    return new $c_sci_LazyList$State$Cons(elem, $m_sci_LazyList$().f8);
  })))) : this.mu(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$$anon$20(elem)))));
});
$p.iA = (function(f) {
  if (this.c()) {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  } else {
    var reducedRes = this.A().o();
    var left = this.A().aN();
    while ((!left.c())) {
      reducedRes = f.ba(reducedRes, left.A().o());
      left = left.A().aN();
    }
    return reducedRes;
  }
});
$p.vm = (function(f) {
  return ((this.bT && (this.A() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().f8 : ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => (this.c() ? $m_sci_LazyList$State$Empty$() : ($m_sci_LazyList$(), new $c_sci_LazyList$State$Cons(f.b(this.A().o()), $p_sci_LazyList__mapImpl__F1__sci_LazyList(this.A().aN(), f)))))))));
});
$p.rC = (function(f) {
  return ((this.bT && (this.A() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().f8 : $m_sci_LazyList$().sk(this, f));
});
$p.ul = (function(n) {
  return ((n <= 0) ? this : ((this.bT && (this.A() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().f8 : $m_sci_LazyList$().wb(this, n)));
});
$p.eK = (function(sb, start, sep, end) {
  this.rD();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.bj, start, sep, end);
  return sb;
});
$p.v = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").s;
});
$p.b = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.ci = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.m2 = (function(n) {
  return this.ul(n);
});
$p.eM = (function(asIterable) {
  return this.rC(asIterable);
});
$p.br = (function(f) {
  return this.rC(f);
});
$p.M = (function(f) {
  return this.vm(f);
});
$p.T = (function(elem) {
  return this.ts(elem);
});
$p.dt = (function(suffix) {
  return this.tv(suffix);
});
$p.y = (function() {
  return this.A().aN();
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
$p.ig = (function(that) {
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
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bc = (function(len) {
  var this$1 = this.bM;
  var x = this$1.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.bM.length;
});
$p.n = (function() {
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
$p.tu = (function(suffix) {
  return ((suffix instanceof $c_sci_WrappedString) ? new $c_sci_WrappedString((this.bM + suffix.bM)) : $f_sc_IterableOps__concat__sc_IterableOnce__O(this, suffix));
});
$p.fF = (function(o) {
  return ((o instanceof $c_sci_WrappedString) ? (this.bM === o.bM) : $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o));
});
$p.c6 = (function() {
  return "WrappedString";
});
$p.ic = (function() {
  return 2147483647;
});
$p.l = (function(other) {
  return ((other instanceof $c_sci_WrappedString) ? (this.bM === other.bM) : $f_sc_Seq__equals__O__Z(this, other));
});
$p.aE = (function() {
  return $m_sci_IndexedSeq$();
});
$p.dt = (function(suffix) {
  return this.tu(suffix);
});
$p.gS = (function(coll) {
  return $m_sci_WrappedString$().rL(coll);
});
$p.fx = (function(coll) {
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
  $thiz.jn = array;
  return $thiz;
}
function $ct_sjsr_WrappedVarArgs__($thiz) {
  $ct_sjsr_WrappedVarArgs__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjsr_WrappedVarArgs() {
  this.jn = null;
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
$p.eM = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.ig = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fF = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.ic = (function() {
  return $m_sci_IndexedSeqDefaults$().qd;
});
$p.e = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bc = (function(len) {
  var x = this.n();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.n();
});
$p.l = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().sm(this);
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.gN = (function(suffix) {
  return $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix);
});
$p.O = (function() {
  return this.n();
});
$p.fz = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I($ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this)), p, from);
});
$p.mO = (function(otherSize) {
  var x = this.n();
  return ((x === otherSize) ? 0 : ((x < otherSize) ? (-1) : 1));
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.c5 = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.ir = (function() {
  return $m_sjsr_WrappedVarArgs$().as();
});
$p.U = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.jI = (function(p) {
  return $f_sc_IterableOnceOps__exists__F1__Z(this, p);
});
$p.fv = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.iA = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op);
});
$p.bZ = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.eK = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fH = (function() {
  return $m_sci_Nil$().z(this);
});
$p.h6 = (function() {
  return $m_sci_Vector$().bF(this);
});
$p.k0 = (function(evidence$2) {
  return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2);
});
$p.ea = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.n = (function() {
  return (this.jn.length | 0);
});
$p.x = (function(idx) {
  return this.jn[idx];
});
$p.c6 = (function() {
  return "WrappedVarArgs";
});
$p.gS = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().mc(coll);
});
$p.ci = (function(x) {
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
$p.p = (function() {
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
$p.gX = (function() {
  return (this.c() ? $m_sc_Iterator$().D : new $c_sci_MapKeyIterator(this.bg));
});
$p.al = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().R(key);
  var keyHash = $m_sc_Hashing$().bs(keyUnimprovedHash);
  return this.bg.m0(key, keyUnimprovedHash, keyHash, 0);
});
$p.b = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().R(key);
  var keyHash = $m_sc_Hashing$().bs(keyUnimprovedHash);
  return this.bg.lQ(key, keyUnimprovedHash, keyHash, 0);
});
$p.gT = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().R(key);
  var keyHash = $m_sc_Hashing$().bs(keyUnimprovedHash);
  return this.bg.jL(key, keyUnimprovedHash, keyHash, 0);
});
$p.e8 = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().R(key);
  var keyHash = $m_sc_Hashing$().bs(keyUnimprovedHash);
  return this.bg.me(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.h8 = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().R(key);
  var newRootNode = this.bg.mU(key, value, keyUnimprovedHash, $m_sc_Hashing$().bs(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.bg) ? this : new $c_sci_HashMap(newRootNode));
});
$p.U = (function(f) {
  this.bg.U(f);
});
$p.fw = (function(f) {
  this.bg.fw(f);
});
$p.l = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bg;
      var x$2 = that.bg;
      return ((x === null) ? (x$2 === null) : x.l(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.u = (function() {
  if (this.c()) {
    return $m_s_util_hashing_MurmurHash3$().lD;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.bg);
    return $m_s_util_hashing_MurmurHash3$().iF(hashIterator, $m_s_util_hashing_MurmurHash3$().eJ);
  }
});
$p.c6 = (function() {
  return "HashMap";
});
$p.o = (function() {
  return this.e().d();
});
$p.eS = (function(key, value) {
  return this.h8(key, value);
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
$p.b5 = (function(elems) {
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
    while (((n !== null) && (n.e0 <= hash))) {
      if (((n.e0 === hash) && $m_sr_BoxesRunTime$().i(elem, n.gy))) {
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
  $thiz.eG = ((1 + $thiz.eG) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.bB.a.length;
  $thiz.lA = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.eG === 0)) {
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
            if (((n.e0 & oldlen) === 0)) {
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
  return $doubleToInt((size * $thiz.lz));
}
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.lz = loadFactor;
  $thiz.bB = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.lA = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.bB.a.length);
  $thiz.eG = 0;
  return $thiz;
}
function $ct_scm_HashSet__($thiz) {
  $ct_scm_HashSet__I__D__($thiz, 16, 0.75);
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet() {
  this.lz = 0.0;
  this.bB = null;
  this.lA = 0;
  this.eG = 0;
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
  return this.eG;
});
$p.jW = (function(originalHash) {
  return (originalHash ^ ((originalHash >>> 16) | 0));
});
$p.al = (function(elem) {
  var hash = this.jW($m_sr_Statics$().R(elem));
  var x1 = this.bB.a[(hash & (((-1) + this.bB.a.length) | 0))];
  return (((x1 === null) ? null : x1.uy(elem, hash)) !== null);
});
$p.bt = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.lz)));
  if ((target > this.bB.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.jC = (function(elem) {
  if ((((1 + this.eG) | 0) >= this.lA)) {
    $p_scm_HashSet__growTable__I__V(this, (this.bB.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, this.jW($m_sr_Statics$().R(elem)));
});
$p.qZ = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if ((xs instanceof $c_sci_HashSet)) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((k$2$2, h$2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, k$2$2, this.jW((h$2$2 | 0)));
    }));
    xs.bS.m8(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.k()) {
      var next = iter.d();
      $p_scm_HashSet__addElem__O__I__Z(this, next.gy, next.e0);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.uq();
    while (iter$2.k()) {
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
$p.p = (function() {
  return this.eG;
});
$p.c = (function() {
  return (this.eG === 0);
});
$p.c6 = (function() {
  return "HashSet";
});
$p.u = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.k()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().iF(hashIterator, $m_s_util_hashing_MurmurHash3$().jo);
});
$p.ar = (function(elem) {
  this.jC(elem);
  return this;
});
$p.b5 = (function(elems) {
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
      ax.q(0, a, 0, length);
      var destPos = $m_jl_reflect_Array$().aD(ax);
      var length$1 = $m_jl_reflect_Array$().aD(ay);
      ay.q(0, a, destPos, length$1);
      return $m_sci_ArraySeq$().eR(a);
    } else {
      var ax$2 = $thiz.bu();
      var ay$2 = that.bu();
      var len$2 = (($m_jl_reflect_Array$().aD(ax$2) + $m_jl_reflect_Array$().aD(ay$2)) | 0);
      var a$2 = $thiz.aR().c1(len$2);
      var length$2 = $m_jl_reflect_Array$().aD(ax$2);
      ax$2.q(0, a$2, 0, length$2);
      var destPos$1 = $m_jl_reflect_Array$().aD(ax$2);
      var length$3 = $m_jl_reflect_Array$().aD(ay$2);
      ay$2.q(0, a$2, destPos$1, length$3);
      return $m_sci_ArraySeq$().eR(a$2);
    }
  }
}
function $p_sci_ArraySeq__genericResult$1__sc_IterableOnce__sci_ArraySeq($thiz, suffix$1) {
  var k = suffix$1.p();
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
    while (it.k()) {
      var elem$1 = it.d();
      var unboxedElem$1 = ((elem$1 === null) ? null : elem$1);
      jsElems.push(unboxedElem$1);
    }
    return $m_sci_ArraySeq$().eR(new $ac_O(jsElems));
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
$p.fx = (function(coll) {
  return $m_sci_ArraySeq$().ma(coll, this.aR());
});
$p.ir = (function() {
  return $m_sci_ArraySeq$().jR(this.aR());
});
$p.cR = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.eM = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.ig = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fF = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bm = (function() {
  return "IndexedSeq";
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bc = (function(len) {
  var x = this.n();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.n();
});
$p.ea = (function() {
  return $m_sci_ArraySeq$().lh;
});
$p.vl = (function(f) {
  var a = new $ac_O(this.n());
  var i = 0;
  while ((i < a.a.length)) {
    a.a[i] = f.b(this.x(i));
    i = ((1 + i) | 0);
  }
  return $m_sci_ArraySeq$().eR(a);
});
$p.aV = (function(elem) {
  var $x_1 = $m_sci_ArraySeq$();
  var xs = this.bu();
  var newLength = ((1 + $m_jl_reflect_Array$().aD(xs)) | 0);
  if ($d_O.R($objectGetClass(xs).F.Q().F)) {
    var dest$1 = $m_ju_Arrays$().u9(xs, newLength, $d_O.r().l());
  } else {
    var dest = new $ac_O(newLength);
    $m_s_Array$().ch(xs, 0, dest, 0, $m_jl_reflect_Array$().aD(xs));
    var dest$1 = dest;
  }
  var x1 = $m_jl_reflect_Array$().aD(xs);
  dest$1.a[x1] = elem;
  return $x_1.eR(dest$1);
});
$p.tt = (function(suffix) {
  if ((suffix instanceof $c_sci_ArraySeq)) {
    var result = $p_sci_ArraySeq__appendedAllArraySeq__sci_ArraySeq__sci_ArraySeq(this, suffix);
    return ((result === null) ? $p_sci_ArraySeq__genericResult$1__sc_IterableOnce__sci_ArraySeq(this, suffix) : result);
  } else {
    return $p_sci_ArraySeq__genericResult$1__sc_IterableOnce__sci_ArraySeq(this, suffix);
  }
});
$p.fv = (function(z, f) {
  var array = this.bu();
  var b = z;
  var i = 0;
  while ((i < $m_jl_reflect_Array$().aD(array))) {
    var a = $m_sr_ScalaRunTime$().e6(array, i);
    b = f.ba(b, a);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.c6 = (function() {
  return "ArraySeq";
});
$p.bZ = (function(xs, start, len) {
  var srcLen = this.n();
  var destLen = $m_jl_reflect_Array$().aD(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().ch(this.bu(), 0, xs, start, copied);
  }
  return copied;
});
$p.ic = (function() {
  return 2147483647;
});
$p.gS = (function(coll) {
  return $m_sci_ArraySeq$().ma(coll, this.aR());
});
$p.dt = (function(suffix) {
  return this.tt(suffix);
});
$p.T = (function(elem) {
  return this.aV(elem);
});
$p.M = (function(f) {
  return this.vl(f);
});
$p.aE = (function() {
  return $m_sci_ArraySeq$().lh;
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
$p.eM = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.ig = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fF = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bm = (function() {
  return "IndexedSeq";
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bc = (function(len) {
  var x = this.n();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.n();
});
$p.ea = (function() {
  return $m_sci_Vector$();
});
$p.n = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.h : this.f.a.length);
});
$p.e = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().qp : new $c_sci_NewVectorIterator(this, this.n(), this.dg()));
});
$p.jE = (function(suffix) {
  var k = suffix.p();
  return ((k === 0) ? this : ((k < 0) ? $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix) : this.cg(suffix, k)));
});
$p.cg = (function(suffix, k) {
  if ((k < ((4 + this.dg()) | 0))) {
    var v = new $c_sr_ObjectRef(this);
    if ($is_sci_Iterable(suffix)) {
      suffix.U(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => {
        v.K = v.K.bD(x$2$2);
      })));
    } else {
      var this$2 = suffix.e();
      while (this$2.k()) {
        var x0 = this$2.d();
        v.K = v.K.bD(x0);
      }
    }
    return v.K;
  } else if (((this.n() < ((k >>> 5) | 0)) && (suffix instanceof $c_sci_Vector))) {
    var v$2 = suffix;
    var ri = new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(new $c_sc_IndexedSeqView$Id(this));
    while ((ri.bL > 0)) {
      v$2 = v$2.fE(ri.d());
    }
    return v$2;
  } else {
    return (((this.n() < (((-64) + k) | 0)) && (suffix instanceof $c_sci_Vector)) ? new $c_sci_VectorBuilder().tq(this.n(), suffix).gH(this).gH(suffix).iB() : new $c_sci_VectorBuilder().rU(this).gH(suffix).iB());
  }
});
$p.c6 = (function() {
  return "Vector";
});
$p.bZ = (function(xs, start, len) {
  return this.e().bZ(xs, start, len);
});
$p.h6 = (function() {
  return this;
});
$p.ic = (function() {
  return $m_sci_Vector$().qo;
});
$p.bk = (function(index) {
  return $m_scg_CommonErrors$().ip(index, (((-1) + this.n()) | 0));
});
$p.o = (function() {
  if ((this.f.a.length === 0)) {
    throw new $c_ju_NoSuchElementException("empty.head");
  } else {
    return this.f.a[0];
  }
});
$p.U = (function(f) {
  var c = this.dg();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    $x_1.m7((((-1) + ((((1 + c$1) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0)) | 0), this.dA(i), f);
    i = ((1 + i) | 0);
  }
});
$p.dt = (function(suffix) {
  return this.jE(suffix);
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
$p.dt = (function(suffix) {
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
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bc = (function(len) {
  var x = this.n();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.n();
});
$p.ea = (function() {
  return $m_scm_ArraySeq$().ly;
});
$p.rM = (function(coll) {
  var evidence$1 = this.aR();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.bl();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.p();
  var it = coll.e();
  while (it.k()) {
    var elem = it.d();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.F.z : elem));
    jsElems.push(unboxedElem);
  }
  var $x_1 = $m_scm_ArraySeq$();
  var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
  return $x_1.mv(elemRuntimeClass.F.r().w(jsElems));
});
$p.ir = (function() {
  return $m_scm_ArraySeq$().jR(this.aR());
});
$p.c6 = (function() {
  return "ArraySeq";
});
$p.bZ = (function(xs, start, len) {
  var srcLen = this.n();
  var destLen = $m_jl_reflect_Array$().aD(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().ch(this.cQ(), 0, xs, start, copied);
  }
  return copied;
});
$p.l = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().aD(this.cQ()) !== $m_jl_reflect_Array$().aD(other.cQ()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.gS = (function(coll) {
  return this.rM(coll);
});
$p.fx = (function(coll) {
  return this.rM(coll);
});
$p.aE = (function() {
  return $m_scm_ArraySeq$().ly;
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.dG = null;
  this.dG = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.n = (function() {
  return this.dG.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rh(this.dG, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().rA(this.dG, that.dG) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.dG);
});
$p.aV = (function(elem) {
  if (((typeof elem) === "boolean")) {
    var x2 = (!(!elem));
    var xs = this.dG;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_Z.R($objectGetClass(xs).F.Q().F)) {
      var dest$1 = this$3.eL(xs, newLength);
    } else {
      var dest = new $ac_Z(newLength);
      $m_s_Array$().ch(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().d3(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofBoolean(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aV.call(this, elem);
  }
});
$p.ib = (function(i) {
  return this.dG.a[i];
});
$p.T = (function(elem) {
  return this.aV(elem);
});
$p.b = (function(v1) {
  return this.ib((v1 | 0));
});
$p.x = (function(i) {
  return this.ib(i);
});
$p.aR = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.bu = (function() {
  return this.dG;
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
  this.dH = null;
  this.dH = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.n = (function() {
  return this.dH.a.length;
});
$p.i3 = (function(i) {
  return this.dH.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.r9(this.dH, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().ru(this.dH, that.dH) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.dH);
});
$p.aV = (function(elem) {
  if ($isByte(elem)) {
    var x2 = (elem | 0);
    var xs = this.dH;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_B.R($objectGetClass(xs).F.Q().F)) {
      var dest$1 = this$3.eL(xs, newLength);
    } else {
      var dest = new $ac_B(newLength);
      $m_s_Array$().ch(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().d3(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofByte(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aV.call(this, elem);
  }
});
$p.T = (function(elem) {
  return this.aV(elem);
});
$p.b = (function(v1) {
  return this.i3((v1 | 0));
});
$p.x = (function(i) {
  return this.i3(i);
});
$p.aR = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.bu = (function() {
  return this.dH;
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
  this.dj = null;
  this.dj = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.n = (function() {
  return this.dj.a.length;
});
$p.i4 = (function(i) {
  return this.dj.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.ra(this.dj, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().rv(this.dj, that.dj) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.dj);
});
$p.aV = (function(elem) {
  if ((elem instanceof $Char)) {
    var x2 = $uC(elem);
    var xs = this.dj;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_C.R($objectGetClass(xs).F.Q().F)) {
      var dest$1 = this$3.eL(xs, newLength);
    } else {
      var dest = new $ac_C(newLength);
      $m_s_Array$().ch(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().d3(dest$1, xs.a.length, $bC(x2));
    return new $c_sci_ArraySeq$ofChar(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aV.call(this, elem);
  }
});
$p.eK = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.dj).eK(sb, start, sep, end);
});
$p.T = (function(elem) {
  return this.aV(elem);
});
$p.b = (function(v1) {
  return $bC(this.i4((v1 | 0)));
});
$p.x = (function(i) {
  return $bC(this.i4(i));
});
$p.aR = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.bu = (function() {
  return this.dj;
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
  this.dI = null;
  this.dI = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.n = (function() {
  return this.dI.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rb(this.dI, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofDouble) ? $m_ju_Arrays$().rw(this.dI, that.dI) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.dI);
});
$p.aV = (function(elem) {
  if (((typeof elem) === "number")) {
    var x2 = (+elem);
    var xs = this.dI;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_D.R($objectGetClass(xs).F.Q().F)) {
      var dest$1 = this$3.eL(xs, newLength);
    } else {
      var dest = new $ac_D(newLength);
      $m_s_Array$().ch(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().d3(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofDouble(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aV.call(this, elem);
  }
});
$p.i6 = (function(i) {
  return this.dI.a[i];
});
$p.T = (function(elem) {
  return this.aV(elem);
});
$p.b = (function(v1) {
  return this.i6((v1 | 0));
});
$p.x = (function(i) {
  return this.i6(i);
});
$p.aR = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.bu = (function() {
  return this.dI;
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
  this.dJ = null;
  this.dJ = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.n = (function() {
  return this.dJ.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rc(this.dJ, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofFloat) ? $m_ju_Arrays$().rx(this.dJ, that.dJ) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.dJ);
});
$p.aV = (function(elem) {
  if ($isFloat(elem)) {
    var x2 = Math.fround(elem);
    var xs = this.dJ;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_F.R($objectGetClass(xs).F.Q().F)) {
      var dest$1 = this$3.eL(xs, newLength);
    } else {
      var dest = new $ac_F(newLength);
      $m_s_Array$().ch(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().d3(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofFloat(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aV.call(this, elem);
  }
});
$p.i7 = (function(i) {
  return this.dJ.a[i];
});
$p.T = (function(elem) {
  return this.aV(elem);
});
$p.b = (function(v1) {
  return this.i7((v1 | 0));
});
$p.x = (function(i) {
  return this.i7(i);
});
$p.aR = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.bu = (function() {
  return this.dJ;
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
  this.dK = null;
  this.dK = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
$p.n = (function() {
  return this.dK.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rd(this.dK, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().jH(this.dK, that.dK) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.dK);
});
$p.aV = (function(elem) {
  if ($isInt(elem)) {
    var x2 = (elem | 0);
    var xs = this.dK;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_I.R($objectGetClass(xs).F.Q().F)) {
      var dest$1 = this$3.eL(xs, newLength);
    } else {
      var dest = new $ac_I(newLength);
      $m_s_Array$().ch(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().d3(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofInt(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aV.call(this, elem);
  }
});
$p.i8 = (function(i) {
  return this.dK.a[i];
});
$p.T = (function(elem) {
  return this.aV(elem);
});
$p.b = (function(v1) {
  return this.i8((v1 | 0));
});
$p.x = (function(i) {
  return this.i8(i);
});
$p.aR = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.bu = (function() {
  return this.dK;
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
  this.dL = null;
  this.dL = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.n = (function() {
  return this.dL.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.re(this.dL, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().ry(this.dL, that.dL) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.dL);
});
$p.aV = (function(elem) {
  if ((elem instanceof $c_RTLong)) {
    var t = $uJ(elem);
    var lo = t.r;
    var hi = t.w;
    var xs = this.dL;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_J.R($objectGetClass(xs).F.Q().F)) {
      var dest$1 = this$3.eL(xs, newLength);
    } else {
      var dest = new $ac_J(newLength);
      $m_s_Array$().ch(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().d3(dest$1, xs.a.length, new $c_RTLong(lo, hi));
    return new $c_sci_ArraySeq$ofLong(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aV.call(this, elem);
  }
});
$p.i9 = (function(i) {
  return this.dL.a[i];
});
$p.T = (function(elem) {
  return this.aV(elem);
});
$p.b = (function(v1) {
  return this.i9((v1 | 0));
});
$p.x = (function(i) {
  return this.i9(i);
});
$p.aR = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.bu = (function() {
  return this.dL;
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
  this.dk = null;
  this.dk = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.aR = (function() {
  return $m_s_reflect_ClassTag$().r5($objectGetClass(this.dk).F.Q());
});
$p.n = (function() {
  return this.dk.a.length;
});
$p.x = (function(i) {
  return this.dk.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.r8(this.dk, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().rB(this.dk, that.dk) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.dk);
});
$p.b = (function(v1) {
  return this.x((v1 | 0));
});
$p.bu = (function() {
  return this.dk;
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
  this.dM = null;
  this.dM = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.n = (function() {
  return this.dM.a.length;
});
$p.i5 = (function(i) {
  return this.dM.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rf(this.dM, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().rz(this.dM, that.dM) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.dM);
});
$p.aV = (function(elem) {
  if ($isShort(elem)) {
    var x2 = (elem | 0);
    var xs = this.dM;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_S.R($objectGetClass(xs).F.Q().F)) {
      var dest$1 = this$3.eL(xs, newLength);
    } else {
      var dest = new $ac_S(newLength);
      $m_s_Array$().ch(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().d3(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofShort(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aV.call(this, elem);
  }
});
$p.T = (function(elem) {
  return this.aV(elem);
});
$p.b = (function(v1) {
  return this.i5((v1 | 0));
});
$p.x = (function(i) {
  return this.i5(i);
});
$p.aR = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.bu = (function() {
  return this.dM;
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
  this.f6 = null;
  this.f6 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.n = (function() {
  return this.f6.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rg(this.f6, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.f6.a.length === that.f6.a.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.f6);
});
$p.ia = (function(i) {
});
$p.b = (function(v1) {
  this.ia((v1 | 0));
});
$p.x = (function(i) {
  this.ia(i);
});
$p.aR = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.bu = (function() {
  return this.f6;
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
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().i(a.o(), b.o()))) {
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
$p.eM = (function(toIterableOnce) {
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
$p.fv = (function(z, op) {
  return $f_sc_LinearSeqOps__foldLeft__O__F2__O(this, z, op);
});
$p.fF = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.fz = (function(p, from) {
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
    var result = new $c_sci_$colon$colon(prefix.o(), this);
    var curr = result;
    var that = prefix.y();
    while ((!that.c())) {
      var temp = new $c_sci_$colon$colon(that.o(), this);
      curr.at = temp;
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
  if ((prefix.p() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.c()) {
      return prefix.fH();
    }
  }
  var iter = prefix.e();
  if (iter.k()) {
    var result = new $c_sci_$colon$colon(iter.d(), this);
    var curr = result;
    while (iter.k()) {
      var temp = new $c_sci_$colon$colon(iter.d(), this);
      curr.at = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.lP = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.qT(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.vn = (function(f) {
  if ((this === $m_sci_Nil$())) {
    return $m_sci_Nil$();
  } else {
    var h = new $c_sci_$colon$colon(f.b(this.o()), $m_sci_Nil$());
    var t = h;
    var rest = this.y();
    while ((rest !== $m_sci_Nil$())) {
      var nx = new $c_sci_$colon$colon(f.b(rest.o()), $m_sci_Nil$());
      t.at = nx;
      t = nx;
      rest = rest.y();
    }
    return h;
  }
});
$p.uz = (function(f) {
  var rest = this;
  var h = null;
  var t = null;
  while ((rest !== $m_sci_Nil$())) {
    var it = f.b(rest.o()).e();
    while (it.k()) {
      var nx = new $c_sci_$colon$colon(it.d(), $m_sci_Nil$());
      if ((t === null)) {
        h = nx;
      } else {
        t.at = nx;
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
    f.b(these.o());
    these = these.y();
  }
});
$p.n = (function() {
  var these = this;
  var len = 0;
  while ((!these.c())) {
    len = ((1 + len) | 0);
    these = these.y();
  }
  return len;
});
$p.bc = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
});
$p.jI = (function(p) {
  var these = this;
  while ((!these.c())) {
    if ((!(!p.b(these.o())))) {
      return true;
    }
    these = these.y();
  }
  return false;
});
$p.al = (function(elem) {
  var these = this;
  while ((!these.c())) {
    if ($m_sr_BoxesRunTime$().i(these.o(), elem)) {
      return true;
    }
    these = these.y();
  }
  return false;
});
$p.c6 = (function() {
  return "List";
});
$p.fH = (function() {
  return this;
});
$p.l = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.b = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.ci = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.m2 = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.br = (function(f) {
  return this.uz(f);
});
$p.M = (function(f) {
  return this.vn(f);
});
$p.dt = (function(suffix) {
  return this.lP(suffix);
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
  this.ew = null;
  this.ew = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.n = (function() {
  return this.ew.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rh(this.ew, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().rA(this.ew, that.ew) : $c_scm_ArraySeq.prototype.l.call(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.ew);
});
$p.ib = (function(index) {
  return this.ew.a[index];
});
$p.b = (function(v1) {
  return this.ib((v1 | 0));
});
$p.x = (function(i) {
  return this.ib(i);
});
$p.aR = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.cQ = (function() {
  return this.ew;
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
  this.ex = null;
  this.ex = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.n = (function() {
  return this.ex.a.length;
});
$p.i3 = (function(index) {
  return this.ex.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.r9(this.ex, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().ru(this.ex, that.ex) : $c_scm_ArraySeq.prototype.l.call(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.ex);
});
$p.b = (function(v1) {
  return this.i3((v1 | 0));
});
$p.x = (function(i) {
  return this.i3(i);
});
$p.aR = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.cQ = (function() {
  return this.ex;
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
  this.cB = null;
  this.cB = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.n = (function() {
  return this.cB.a.length;
});
$p.i4 = (function(index) {
  return this.cB.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.ra(this.cB, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().rv(this.cB, that.cB) : $c_scm_ArraySeq.prototype.l.call(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.cB);
});
$p.eK = (function(sb, start, sep, end) {
  var jsb = sb.bj;
  if ((start.length !== 0)) {
    jsb.s = (("" + jsb.s) + start);
  }
  var len = this.cB.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.r2(this.cB);
    } else {
      jsb.n();
      var c = this.cB.a[0];
      var str = ("" + $cToS(c));
      jsb.s = (jsb.s + str);
      var i = 1;
      while ((i < len)) {
        jsb.s = (("" + jsb.s) + sep);
        var c$1 = this.cB.a[i];
        var str$1 = ("" + $cToS(c$1));
        jsb.s = (jsb.s + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  if ((end.length !== 0)) {
    jsb.s = (("" + jsb.s) + end);
  }
  return sb;
});
$p.b = (function(v1) {
  return $bC(this.i4((v1 | 0)));
});
$p.x = (function(i) {
  return $bC(this.i4(i));
});
$p.aR = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.cQ = (function() {
  return this.cB;
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
  this.ey = null;
  this.ey = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.n = (function() {
  return this.ey.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rb(this.ey, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofDouble) ? $m_ju_Arrays$().rw(this.ey, that.ey) : $c_scm_ArraySeq.prototype.l.call(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.ey);
});
$p.i6 = (function(index) {
  return this.ey.a[index];
});
$p.b = (function(v1) {
  return this.i6((v1 | 0));
});
$p.x = (function(i) {
  return this.i6(i);
});
$p.aR = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.cQ = (function() {
  return this.ey;
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
  this.ez = null;
  this.ez = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.n = (function() {
  return this.ez.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rc(this.ez, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofFloat) ? $m_ju_Arrays$().rx(this.ez, that.ez) : $c_scm_ArraySeq.prototype.l.call(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.ez);
});
$p.i7 = (function(index) {
  return this.ez.a[index];
});
$p.b = (function(v1) {
  return this.i7((v1 | 0));
});
$p.x = (function(i) {
  return this.i7(i);
});
$p.aR = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.cQ = (function() {
  return this.ez;
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
  this.eA = null;
  this.eA = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.n = (function() {
  return this.eA.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rd(this.eA, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().jH(this.eA, that.eA) : $c_scm_ArraySeq.prototype.l.call(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.eA);
});
$p.i8 = (function(index) {
  return this.eA.a[index];
});
$p.b = (function(v1) {
  return this.i8((v1 | 0));
});
$p.x = (function(i) {
  return this.i8(i);
});
$p.aR = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.cQ = (function() {
  return this.eA;
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
  this.eB = null;
  this.eB = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.n = (function() {
  return this.eB.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.re(this.eB, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().ry(this.eB, that.eB) : $c_scm_ArraySeq.prototype.l.call(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.eB);
});
$p.i9 = (function(index) {
  return this.eB.a[index];
});
$p.b = (function(v1) {
  return this.i9((v1 | 0));
});
$p.x = (function(i) {
  return this.i9(i);
});
$p.aR = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.cQ = (function() {
  return this.eB;
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
  this.dY = null;
  this.dY = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.aR = (function() {
  return $m_s_reflect_ClassTag$().r5($objectGetClass(this.dY).F.Q());
});
$p.n = (function() {
  return this.dY.a.length;
});
$p.x = (function(index) {
  return this.dY.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.r8(this.dY, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().rB(this.dY, that.dY) : $c_scm_ArraySeq.prototype.l.call(this, that));
});
$p.e = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.dY);
});
$p.b = (function(v1) {
  return this.x((v1 | 0));
});
$p.cQ = (function() {
  return this.dY;
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
  this.eC = null;
  this.eC = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.n = (function() {
  return this.eC.a.length;
});
$p.i5 = (function(index) {
  return this.eC.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rf(this.eC, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().rz(this.eC, that.eC) : $c_scm_ArraySeq.prototype.l.call(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.eC);
});
$p.b = (function(v1) {
  return this.i5((v1 | 0));
});
$p.x = (function(i) {
  return this.i5(i);
});
$p.aR = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.cQ = (function() {
  return this.eC;
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
  this.fn = null;
  this.fn = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.n = (function() {
  return this.fn.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rg(this.fn, this$1.b4);
});
$p.l = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.fn.a.length === that.fn.a.length) : $c_scm_ArraySeq.prototype.l.call(this, that));
});
$p.e = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.fn);
});
$p.ia = (function(index) {
});
$p.b = (function(v1) {
  this.ia((v1 | 0));
});
$p.x = (function(i) {
  this.ia(i);
});
$p.aR = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.cQ = (function() {
  return this.fn;
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
$p.eg = (function(index, elem) {
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
    return new $c_sci_Vector1($m_sci_VectorStatics$().gO(this.f, elem));
  } else {
    var $x_2 = this.f;
    var $x_1 = $m_sci_VectorStatics$().aq;
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.fE = (function(elem) {
  var len1 = this.f.a.length;
  if ((len1 < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().gP(elem, this.f));
  } else {
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2(a, 1, $m_sci_VectorStatics$().aq, this.f, ((1 + len1) | 0));
  }
});
$p.dd = (function(f) {
  return new $c_sci_Vector1($m_sci_VectorStatics$().cU(this.f, f));
});
$p.dg = (function() {
  return 1;
});
$p.dA = (function(idx) {
  return this.f;
});
$p.cg = (function(suffix, k) {
  var data1b = $m_sci_VectorStatics$().gI(this.f, suffix);
  return ((data1b !== null) ? new $c_sci_Vector1(data1b) : $c_sci_Vector.prototype.cg.call(this, suffix, k));
});
$p.M = (function(f) {
  return this.dd(f);
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
  this.gm = null;
  this.at = null;
  this.gm = head;
  this.at = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.o = (function() {
  return this.gm;
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
      return this.gm;
      break;
    }
    case 1: {
      return this.at;
      break;
    }
    default: {
      return $m_sr_Statics$().e9(x$1);
    }
  }
});
$p.aW = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.y = (function() {
  return this.at;
});
$p.bP = (function() {
  return new $c_s_Some(this.gm);
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
$p.wt = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.p = (function() {
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
$p.aW = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.y = (function() {
  this.wt();
});
$p.bP = (function() {
  return $m_s_None$();
});
$p.o = (function() {
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
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().ls, $m_sci_VectorStatics$().ls, 0);
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
$p.eg = (function(index, elem) {
  throw this.bk(index);
});
$p.bD = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.fE = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.dg = (function() {
  return 0;
});
$p.dA = (function(idx) {
  return null;
});
$p.l = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)));
});
$p.cg = (function(suffix, k) {
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
$p.eg = (function(index, elem) {
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
    var x$1 = $m_sci_VectorStatics$().gO(this.g, elem);
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
$p.fE = (function(elem) {
  if ((this.bz < 32)) {
    var x$1 = $m_sci_VectorStatics$().gP(elem, this.f);
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
$p.dd = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cU(this.f, f);
  var x$2 = $m_sci_VectorStatics$().aI(2, this.bh, f);
  var x$3 = $m_sci_VectorStatics$().cU(this.g, f);
  return new $c_sci_Vector2(x$1, this.bz, x$2, x$3, this.h);
});
$p.dg = (function() {
  return 3;
});
$p.dA = (function(idx) {
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
$p.cg = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().gI(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector2(this.f, this.bz, this.bh, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.cg.call(this, suffix, k);
  }
});
$p.M = (function(f) {
  return this.dd(f);
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
  this.b7 = 0;
  this.aT = null;
  this.aZ = null;
  this.bp = len1;
  this.bq = prefix2;
  this.b7 = len12;
  this.aT = data3;
  this.aZ = suffix2;
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
    var io = ((index - this.b7) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aT.a.length) ? this.aT.a[i3].a[i2].a[i1] : ((i2 < this.aZ.a.length) ? this.aZ.a[i2].a[i1] : this.g.a[i1]));
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
$p.eg = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.b7)) {
      var io = ((index - this.b7) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.aT.a.length)) {
        var a3 = this.aT;
        var a3c = a3.m();
        var a2 = a3c.a[i3];
        var a2c = a2.m();
        var a1 = a2c.a[i2];
        var a1c = a1.m();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        return new $c_sci_Vector3(this.f, this.bp, this.bq, this.b7, a3c, this.aZ, this.g, this.h);
      } else if ((i2 < this.aZ.a.length)) {
        var a2$1 = this.aZ;
        var a2c$1 = a2$1.m();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.m();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        return new $c_sci_Vector3(this.f, this.bp, this.bq, this.b7, this.aT, a2c$1, this.g, this.h);
      } else {
        var a1$2 = this.g;
        var a1c$2 = a1$2.m();
        a1c$2.a[i1] = elem;
        return new $c_sci_Vector3(this.f, this.bp, this.bq, this.b7, this.aT, this.aZ, a1c$2, this.h);
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
      return new $c_sci_Vector3(this.f, this.bp, a2c$2, this.b7, this.aT, this.aZ, this.g, this.h);
    } else {
      var a1$4 = this.f;
      var a1c$4 = a1$4.m();
      a1c$4.a[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.bp, this.bq, this.b7, this.aT, this.aZ, this.g, this.h);
    }
  } else {
    throw this.bk(index);
  }
});
$p.bD = (function(elem) {
  if ((this.g.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().gO(this.g, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(this.f, this.bp, this.bq, this.b7, this.aT, this.aZ, x$1, x$2);
  } else if ((this.aZ.a.length < 31)) {
    var x$9 = $m_sci_VectorStatics$().N(this.aZ, this.g);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$11 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(this.f, this.bp, this.bq, this.b7, this.aT, x$9, a, x$11);
  } else if ((this.aT.a.length < 30)) {
    var x$17 = $m_sci_VectorStatics$().N(this.aT, $m_sci_VectorStatics$().N(this.aZ, this.g));
    var x$18 = $m_sci_VectorStatics$().aq;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$20 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(this.f, this.bp, this.bq, this.b7, x$17, x$18, a$1, x$20);
  } else {
    var $x_8 = this.f;
    var $x_7 = this.bp;
    var $x_6 = this.bq;
    var $x_5 = this.b7;
    var $x_4 = this.aT;
    var $x_3 = this.b7;
    var $x_2 = $m_sci_VectorStatics$().d2;
    var x = $m_sci_VectorStatics$().N(this.aZ, this.g);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().aq;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.h) | 0));
  }
});
$p.fE = (function(elem) {
  if ((this.bp < 32)) {
    var x$1 = $m_sci_VectorStatics$().gP(elem, this.f);
    var x$2 = ((1 + this.bp) | 0);
    var x$3 = ((1 + this.b7) | 0);
    var x$4 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(x$1, x$2, this.bq, x$3, this.aT, this.aZ, this.g, x$4);
  } else if ((this.b7 < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$11 = $m_sci_VectorStatics$().G(this.f, this.bq);
    var x$12 = ((1 + this.b7) | 0);
    var x$13 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(a, 1, x$11, x$12, this.aT, this.aZ, this.g, x$13);
  } else if ((this.aT.a.length < 30)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$19 = $m_sci_VectorStatics$().aq;
    var x$21 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.bq), this.aT);
    var x$22 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(a$1, 1, x$19, 1, x$21, this.aZ, this.g, x$22);
  } else {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var $x_1 = $m_sci_VectorStatics$().aq;
    var x = $m_sci_VectorStatics$().G(this.f, this.bq);
    var a$3 = new ($d_O.r().r().r().C)(1);
    a$3.a[0] = x;
    return new $c_sci_Vector4(a$2, 1, $x_1, 1, a$3, ((1 + this.b7) | 0), $m_sci_VectorStatics$().d2, this.aT, this.aZ, this.g, ((1 + this.h) | 0));
  }
});
$p.dd = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cU(this.f, f);
  var x$2 = $m_sci_VectorStatics$().aI(2, this.bq, f);
  var x$3 = $m_sci_VectorStatics$().aI(3, this.aT, f);
  var x$4 = $m_sci_VectorStatics$().aI(2, this.aZ, f);
  var x$5 = $m_sci_VectorStatics$().cU(this.g, f);
  return new $c_sci_Vector3(x$1, this.bp, x$2, this.b7, x$3, x$4, x$5, this.h);
});
$p.dg = (function() {
  return 5;
});
$p.dA = (function(idx) {
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
      return this.aT;
      break;
    }
    case 3: {
      return this.aZ;
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
$p.cg = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().gI(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector3(this.f, this.bp, this.bq, this.b7, this.aT, this.aZ, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.cg.call(this, suffix, k);
  }
});
$p.M = (function(f) {
  return this.dd(f);
});
$p.T = (function(elem) {
  return this.bD(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.b7) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aT.a.length) ? this.aT.a[i3].a[i2].a[i1] : ((i2 < this.aZ.a.length) ? this.aZ.a[i2].a[i1] : this.g.a[i1]));
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
  this.b8 = 0;
  this.b1 = null;
  this.b0 = 0;
  this.b2 = null;
  this.aG = 0;
  this.ao = null;
  this.av = null;
  this.au = null;
  this.b8 = len1;
  this.b1 = prefix2;
  this.b0 = len12;
  this.b2 = prefix3;
  this.aG = len123;
  this.ao = data4;
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
      return ((i4 < this.ao.a.length) ? this.ao.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.av.a.length) ? this.av.a[i3].a[i2].a[i1] : ((i2 < this.au.a.length) ? this.au.a[i2].a[i1] : this.g.a[i1])));
    } else if ((index >= this.b0)) {
      var io$2 = ((index - this.b0) | 0);
      return this.b2.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.b8)) {
      var io$3 = ((index - this.b8) | 0);
      return this.b1.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bk(index);
  }
});
$p.eg = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.aG)) {
      var io = ((index - this.aG) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.ao.a.length)) {
        var a4 = this.ao;
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
        return new $c_sci_Vector4(this.f, this.b8, this.b1, this.b0, this.b2, this.aG, a4c, this.av, this.au, this.g, this.h);
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
        return new $c_sci_Vector4(this.f, this.b8, this.b1, this.b0, this.b2, this.aG, this.ao, a3c$1, this.au, this.g, this.h);
      } else if ((i2 < this.au.a.length)) {
        var a2$2 = this.au;
        var a2c$2 = a2$2.m();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.m();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        return new $c_sci_Vector4(this.f, this.b8, this.b1, this.b0, this.b2, this.aG, this.ao, this.av, a2c$2, this.g, this.h);
      } else {
        var a1$3 = this.g;
        var a1c$3 = a1$3.m();
        a1c$3.a[i1] = elem;
        return new $c_sci_Vector4(this.f, this.b8, this.b1, this.b0, this.b2, this.aG, this.ao, this.av, this.au, a1c$3, this.h);
      }
    } else if ((index >= this.b0)) {
      var io$2 = ((index - this.b0) | 0);
      var a3$2 = this.b2;
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
      return new $c_sci_Vector4(this.f, this.b8, this.b1, this.b0, a3c$2, this.aG, this.ao, this.av, this.au, this.g, this.h);
    } else if ((index >= this.b8)) {
      var io$3 = ((index - this.b8) | 0);
      var a2$4 = this.b1;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.m();
      var a1$5 = a2c$4.a[idx2$1];
      var a1c$5 = a1$5.m();
      a1c$5.a[idx1$1] = elem;
      a2c$4.a[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.f, this.b8, a2c$4, this.b0, this.b2, this.aG, this.ao, this.av, this.au, this.g, this.h);
    } else {
      var a1$6 = this.f;
      var a1c$6 = a1$6.m();
      a1c$6.a[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.b8, this.b1, this.b0, this.b2, this.aG, this.ao, this.av, this.au, this.g, this.h);
    }
  } else {
    throw this.bk(index);
  }
});
$p.bD = (function(elem) {
  if ((this.g.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().gO(this.g, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.f, this.b8, this.b1, this.b0, this.b2, this.aG, this.ao, this.av, this.au, x$1, x$2);
  } else if ((this.au.a.length < 31)) {
    var x$12 = $m_sci_VectorStatics$().N(this.au, this.g);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$14 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.f, this.b8, this.b1, this.b0, this.b2, this.aG, this.ao, this.av, x$12, a, x$14);
  } else if ((this.av.a.length < 31)) {
    var x$23 = $m_sci_VectorStatics$().N(this.av, $m_sci_VectorStatics$().N(this.au, this.g));
    var x$24 = $m_sci_VectorStatics$().aq;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$26 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.f, this.b8, this.b1, this.b0, this.b2, this.aG, this.ao, x$23, x$24, a$1, x$26);
  } else if ((this.ao.a.length < 30)) {
    var x$34 = $m_sci_VectorStatics$().N(this.ao, $m_sci_VectorStatics$().N(this.av, $m_sci_VectorStatics$().N(this.au, this.g)));
    var x$35 = $m_sci_VectorStatics$().bA;
    var x$36 = $m_sci_VectorStatics$().aq;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$38 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.f, this.b8, this.b1, this.b0, this.b2, this.aG, x$34, x$35, x$36, a$2, x$38);
  } else {
    var $x_11 = this.f;
    var $x_10 = this.b8;
    var $x_9 = this.b1;
    var $x_8 = this.b0;
    var $x_7 = this.b2;
    var $x_6 = this.aG;
    var $x_5 = this.ao;
    var $x_4 = this.aG;
    var $x_3 = $m_sci_VectorStatics$().hL;
    var x = $m_sci_VectorStatics$().N(this.av, $m_sci_VectorStatics$().N(this.au, this.g));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().bA;
    var $x_1 = $m_sci_VectorStatics$().aq;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.h) | 0));
  }
});
$p.fE = (function(elem) {
  if ((this.b8 < 32)) {
    var x$1 = $m_sci_VectorStatics$().gP(elem, this.f);
    var x$2 = ((1 + this.b8) | 0);
    var x$3 = ((1 + this.b0) | 0);
    var x$4 = ((1 + this.aG) | 0);
    var x$5 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(x$1, x$2, this.b1, x$3, this.b2, x$4, this.ao, this.av, this.au, this.g, x$5);
  } else if ((this.b0 < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$14 = $m_sci_VectorStatics$().G(this.f, this.b1);
    var x$15 = ((1 + this.b0) | 0);
    var x$16 = ((1 + this.aG) | 0);
    var x$17 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(a, 1, x$14, x$15, this.b2, x$16, this.ao, this.av, this.au, this.g, x$17);
  } else if ((this.aG < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$25 = $m_sci_VectorStatics$().aq;
    var x$27 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.b1), this.b2);
    var x$28 = ((1 + this.aG) | 0);
    var x$29 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(a$1, 1, x$25, 1, x$27, x$28, this.ao, this.av, this.au, this.g, x$29);
  } else if ((this.ao.a.length < 30)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$36 = $m_sci_VectorStatics$().aq;
    var x$38 = $m_sci_VectorStatics$().bA;
    var x$40 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.b1), this.b2), this.ao);
    var x$41 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(a$2, 1, x$36, 1, x$38, 1, x$40, this.av, this.au, this.g, x$41);
  } else {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var $x_2 = $m_sci_VectorStatics$().aq;
    var $x_1 = $m_sci_VectorStatics$().bA;
    var x = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.b1), this.b2);
    var a$4 = new ($d_O.r().r().r().r().C)(1);
    a$4.a[0] = x;
    return new $c_sci_Vector5(a$3, 1, $x_2, 1, $x_1, 1, a$4, ((1 + this.aG) | 0), $m_sci_VectorStatics$().hL, this.ao, this.av, this.au, this.g, ((1 + this.h) | 0));
  }
});
$p.dd = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cU(this.f, f);
  var x$2 = $m_sci_VectorStatics$().aI(2, this.b1, f);
  var x$3 = $m_sci_VectorStatics$().aI(3, this.b2, f);
  var x$4 = $m_sci_VectorStatics$().aI(4, this.ao, f);
  var x$5 = $m_sci_VectorStatics$().aI(3, this.av, f);
  var x$6 = $m_sci_VectorStatics$().aI(2, this.au, f);
  var x$7 = $m_sci_VectorStatics$().cU(this.g, f);
  return new $c_sci_Vector4(x$1, this.b8, x$2, this.b0, x$3, this.aG, x$4, x$5, x$6, x$7, this.h);
});
$p.dg = (function() {
  return 7;
});
$p.dA = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.b1;
      break;
    }
    case 2: {
      return this.b2;
      break;
    }
    case 3: {
      return this.ao;
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
$p.cg = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().gI(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector4(this.f, this.b8, this.b1, this.b0, this.b2, this.aG, this.ao, this.av, this.au, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.cg.call(this, suffix, k);
  }
});
$p.M = (function(f) {
  return this.dd(f);
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
      return ((i4 < this.ao.a.length) ? this.ao.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.av.a.length) ? this.av.a[i3].a[i2].a[i1] : ((i2 < this.au.a.length) ? this.au.a[i2].a[i1] : this.g.a[i1])));
    } else if ((index >= this.b0)) {
      var io$2 = ((index - this.b0) | 0);
      return this.b2.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.b8)) {
      var io$3 = ((index - this.b8) | 0);
      return this.b1.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
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
$p.eg = (function(index, elem) {
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
    var x$1 = $m_sci_VectorStatics$().gO(this.g, elem);
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
    var x$30 = $m_sci_VectorStatics$().aq;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$32 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.f, this.aP, this.ax, this.aH, this.ay, this.aw, this.az, this.a9, this.a2, this.a6, x$29, x$30, a$1, x$32);
  } else if ((this.a6.a.length < 31)) {
    var x$43 = $m_sci_VectorStatics$().N(this.a6, $m_sci_VectorStatics$().N(this.a5, $m_sci_VectorStatics$().N(this.a4, this.g)));
    var x$44 = $m_sci_VectorStatics$().bA;
    var x$45 = $m_sci_VectorStatics$().aq;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$47 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.f, this.aP, this.ax, this.aH, this.ay, this.aw, this.az, this.a9, this.a2, x$43, x$44, x$45, a$2, x$47);
  } else if ((this.a2.a.length < 30)) {
    var x$57 = $m_sci_VectorStatics$().N(this.a2, $m_sci_VectorStatics$().N(this.a6, $m_sci_VectorStatics$().N(this.a5, $m_sci_VectorStatics$().N(this.a4, this.g))));
    var x$58 = $m_sci_VectorStatics$().d2;
    var x$59 = $m_sci_VectorStatics$().bA;
    var x$60 = $m_sci_VectorStatics$().aq;
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
    var $x_4 = $m_sci_VectorStatics$().lt;
    var x = $m_sci_VectorStatics$().N(this.a6, $m_sci_VectorStatics$().N(this.a5, $m_sci_VectorStatics$().N(this.a4, this.g)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().d2;
    var $x_2 = $m_sci_VectorStatics$().bA;
    var $x_1 = $m_sci_VectorStatics$().aq;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.h) | 0));
  }
});
$p.fE = (function(elem) {
  if ((this.aP < 32)) {
    var x$1 = $m_sci_VectorStatics$().gP(elem, this.f);
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
    var x$31 = $m_sci_VectorStatics$().aq;
    var x$33 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.ax), this.ay);
    var x$34 = ((1 + this.aw) | 0);
    var x$35 = ((1 + this.a9) | 0);
    var x$36 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a$1, 1, x$31, 1, x$33, x$34, this.az, x$35, this.a2, this.a6, this.a5, this.a4, this.g, x$36);
  } else if ((this.a9 < 1048576)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$45 = $m_sci_VectorStatics$().aq;
    var x$47 = $m_sci_VectorStatics$().bA;
    var x$49 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.ax), this.ay), this.az);
    var x$50 = ((1 + this.a9) | 0);
    var x$51 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a$2, 1, x$45, 1, x$47, 1, x$49, x$50, this.a2, this.a6, this.a5, this.a4, this.g, x$51);
  } else if ((this.a2.a.length < 30)) {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$59 = $m_sci_VectorStatics$().aq;
    var x$61 = $m_sci_VectorStatics$().bA;
    var x$63 = $m_sci_VectorStatics$().d2;
    var x$65 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.ax), this.ay), this.az), this.a2);
    var x$66 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a$3, 1, x$59, 1, x$61, 1, x$63, 1, x$65, this.a6, this.a5, this.a4, this.g, x$66);
  } else {
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var $x_3 = $m_sci_VectorStatics$().aq;
    var $x_2 = $m_sci_VectorStatics$().bA;
    var $x_1 = $m_sci_VectorStatics$().d2;
    var x = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.ax), this.ay), this.az);
    var a$5 = new ($d_O.r().r().r().r().r().C)(1);
    a$5.a[0] = x;
    return new $c_sci_Vector6(a$4, 1, $x_3, 1, $x_2, 1, $x_1, 1, a$5, ((1 + this.a9) | 0), $m_sci_VectorStatics$().lt, this.a2, this.a6, this.a5, this.a4, this.g, ((1 + this.h) | 0));
  }
});
$p.dd = (function(f) {
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
$p.dg = (function() {
  return 9;
});
$p.dA = (function(idx) {
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
$p.cg = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().gI(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector5(this.f, this.aP, this.ax, this.aH, this.ay, this.aw, this.az, this.a9, this.a2, this.a6, this.a5, this.a4, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.cg.call(this, suffix, k);
  }
});
$p.M = (function(f) {
  return this.dd(f);
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
  this.ap = 0;
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
  this.ap = len12;
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
    } else if ((index >= this.ap)) {
      var io$4 = ((index - this.ap) | 0);
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
$p.eg = (function(index, elem) {
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
        return new $c_sci_Vector6(this.f, this.aA, this.af, this.ap, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, a6c, this.a1, this.a0, this.Z, this.Y, this.g, this.h);
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
        return new $c_sci_Vector6(this.f, this.aA, this.af, this.ap, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, a5c$1, this.a0, this.Z, this.Y, this.g, this.h);
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
        return new $c_sci_Vector6(this.f, this.aA, this.af, this.ap, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, a4c$2, this.Z, this.Y, this.g, this.h);
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
        return new $c_sci_Vector6(this.f, this.aA, this.af, this.ap, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, a3c$3, this.Y, this.g, this.h);
      } else if ((i2 < this.Y.a.length)) {
        var a2$4 = this.Y;
        var a2c$4 = a2$4.m();
        var a1$4 = a2c$4.a[i2];
        var a1c$4 = a1$4.m();
        a1c$4.a[i1] = elem;
        a2c$4.a[i2] = a1c$4;
        return new $c_sci_Vector6(this.f, this.aA, this.af, this.ap, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, a2c$4, this.g, this.h);
      } else {
        var a1$5 = this.g;
        var a1c$5 = a1$5.m();
        a1c$5.a[i1] = elem;
        return new $c_sci_Vector6(this.f, this.aA, this.af, this.ap, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, a1c$5, this.h);
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
      return new $c_sci_Vector6(this.f, this.aA, this.af, this.ap, this.ag, this.ae, this.ah, this.aa, a5c$2, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, this.g, this.h);
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
      return new $c_sci_Vector6(this.f, this.aA, this.af, this.ap, this.ag, this.ae, a4c$4, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, this.g, this.h);
    } else if ((index >= this.ap)) {
      var io$4 = ((index - this.ap) | 0);
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
      return new $c_sci_Vector6(this.f, this.aA, this.af, this.ap, a3c$6, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, this.g, this.h);
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
      return new $c_sci_Vector6(this.f, this.aA, a2c$8, this.ap, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, this.g, this.h);
    } else {
      var a1$10 = this.f;
      var a1c$10 = a1$10.m();
      a1c$10.a[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.aA, this.af, this.ap, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, this.g, this.h);
    }
  } else {
    throw this.bk(index);
  }
});
$p.bD = (function(elem) {
  if ((this.g.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().gO(this.g, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.f, this.aA, this.af, this.ap, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, x$1, x$2);
  } else if ((this.Y.a.length < 31)) {
    var x$18 = $m_sci_VectorStatics$().N(this.Y, this.g);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$20 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.f, this.aA, this.af, this.ap, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, x$18, a, x$20);
  } else if ((this.Z.a.length < 31)) {
    var x$35 = $m_sci_VectorStatics$().N(this.Z, $m_sci_VectorStatics$().N(this.Y, this.g));
    var x$36 = $m_sci_VectorStatics$().aq;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$38 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.f, this.aA, this.af, this.ap, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, x$35, x$36, a$1, x$38);
  } else if ((this.a0.a.length < 31)) {
    var x$52 = $m_sci_VectorStatics$().N(this.a0, $m_sci_VectorStatics$().N(this.Z, $m_sci_VectorStatics$().N(this.Y, this.g)));
    var x$53 = $m_sci_VectorStatics$().bA;
    var x$54 = $m_sci_VectorStatics$().aq;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$56 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.f, this.aA, this.af, this.ap, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, x$52, x$53, x$54, a$2, x$56);
  } else if ((this.a1.a.length < 31)) {
    var x$69 = $m_sci_VectorStatics$().N(this.a1, $m_sci_VectorStatics$().N(this.a0, $m_sci_VectorStatics$().N(this.Z, $m_sci_VectorStatics$().N(this.Y, this.g))));
    var x$70 = $m_sci_VectorStatics$().d2;
    var x$71 = $m_sci_VectorStatics$().bA;
    var x$72 = $m_sci_VectorStatics$().aq;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$74 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.f, this.aA, this.af, this.ap, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, x$69, x$70, x$71, x$72, a$3, x$74);
  } else if ((this.W.a.length < 62)) {
    var x$86 = $m_sci_VectorStatics$().N(this.W, $m_sci_VectorStatics$().N(this.a1, $m_sci_VectorStatics$().N(this.a0, $m_sci_VectorStatics$().N(this.Z, $m_sci_VectorStatics$().N(this.Y, this.g)))));
    var x$87 = $m_sci_VectorStatics$().hL;
    var x$88 = $m_sci_VectorStatics$().d2;
    var x$89 = $m_sci_VectorStatics$().bA;
    var x$90 = $m_sci_VectorStatics$().aq;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var x$92 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.f, this.aA, this.af, this.ap, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, x$86, x$87, x$88, x$89, x$90, a$4, x$92);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.fE = (function(elem) {
  if ((this.aA < 32)) {
    var x$1 = $m_sci_VectorStatics$().gP(elem, this.f);
    var x$2 = ((1 + this.aA) | 0);
    var x$3 = ((1 + this.ap) | 0);
    var x$4 = ((1 + this.ae) | 0);
    var x$5 = ((1 + this.aa) | 0);
    var x$6 = ((1 + this.a7) | 0);
    var x$7 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(x$1, x$2, this.af, x$3, this.ag, x$4, this.ah, x$5, this.ai, x$6, this.W, this.a1, this.a0, this.Z, this.Y, this.g, x$7);
  } else if ((this.ap < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$20 = $m_sci_VectorStatics$().G(this.f, this.af);
    var x$21 = ((1 + this.ap) | 0);
    var x$22 = ((1 + this.ae) | 0);
    var x$23 = ((1 + this.aa) | 0);
    var x$24 = ((1 + this.a7) | 0);
    var x$25 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a, 1, x$20, x$21, this.ag, x$22, this.ah, x$23, this.ai, x$24, this.W, this.a1, this.a0, this.Z, this.Y, this.g, x$25);
  } else if ((this.ae < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$37 = $m_sci_VectorStatics$().aq;
    var x$39 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.af), this.ag);
    var x$40 = ((1 + this.ae) | 0);
    var x$41 = ((1 + this.aa) | 0);
    var x$42 = ((1 + this.a7) | 0);
    var x$43 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$1, 1, x$37, 1, x$39, x$40, this.ah, x$41, this.ai, x$42, this.W, this.a1, this.a0, this.Z, this.Y, this.g, x$43);
  } else if ((this.aa < 1048576)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$54 = $m_sci_VectorStatics$().aq;
    var x$56 = $m_sci_VectorStatics$().bA;
    var x$58 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.af), this.ag), this.ah);
    var x$59 = ((1 + this.aa) | 0);
    var x$60 = ((1 + this.a7) | 0);
    var x$61 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$2, 1, x$54, 1, x$56, 1, x$58, x$59, this.ai, x$60, this.W, this.a1, this.a0, this.Z, this.Y, this.g, x$61);
  } else if ((this.a7 < 33554432)) {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$71 = $m_sci_VectorStatics$().aq;
    var x$73 = $m_sci_VectorStatics$().bA;
    var x$75 = $m_sci_VectorStatics$().d2;
    var x$77 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.af), this.ag), this.ah), this.ai);
    var x$78 = ((1 + this.a7) | 0);
    var x$79 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$3, 1, x$71, 1, x$73, 1, x$75, 1, x$77, x$78, this.W, this.a1, this.a0, this.Z, this.Y, this.g, x$79);
  } else if ((this.W.a.length < 62)) {
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var x$88 = $m_sci_VectorStatics$().aq;
    var x$90 = $m_sci_VectorStatics$().bA;
    var x$92 = $m_sci_VectorStatics$().d2;
    var x$94 = $m_sci_VectorStatics$().hL;
    var x$96 = $m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G($m_sci_VectorStatics$().G(this.f, this.af), this.ag), this.ah), this.ai), this.W);
    var x$97 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$4, 1, x$88, 1, x$90, 1, x$92, 1, x$94, 1, x$96, this.a1, this.a0, this.Z, this.Y, this.g, x$97);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.dd = (function(f) {
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
  return new $c_sci_Vector6(x$1, this.aA, x$2, this.ap, x$3, this.ae, x$4, this.aa, x$5, this.a7, x$6, x$7, x$8, x$9, x$10, x$11, this.h);
});
$p.dg = (function() {
  return 11;
});
$p.dA = (function(idx) {
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
$p.cg = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().gI(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector6(this.f, this.aA, this.af, this.ap, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.cg.call(this, suffix, k);
  }
});
$p.M = (function(f) {
  return this.dd(f);
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
    } else if ((index >= this.ap)) {
      var io$4 = ((index - this.ap) | 0);
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
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bc = (function(len) {
  var x = this.bj.n();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bt = (function(size) {
});
$p.b5 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.n = (function() {
  return this.bj.n();
});
$p.p = (function() {
  return this.bj.n();
});
$p.tf = (function(x) {
  var this$1 = this.bj;
  var str = ("" + $cToS(x));
  this$1.s = (this$1.s + str);
  return this;
});
$p.v = (function() {
  return this.bj.s;
});
$p.k0 = (function(ct) {
  return ((ct.bl() === $d_C.l()) ? this.wx() : $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, ct));
});
$p.wx = (function() {
  var len = this.bj.n();
  var arr = new $ac_C(len);
  this.bj.rP(0, len, arr, 0);
  return arr;
});
$p.r3 = (function(xs) {
  if ((xs instanceof $c_sci_WrappedString)) {
    var this$3 = this.bj;
    var str = xs.bM;
    this$3.s = (("" + this$3.s) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.bj.r2(xs.cB);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.bj;
    var s = xs.bj;
    this$4.s = (("" + this$4.s) + s);
  } else {
    var ks = xs.p();
    if ((ks !== 0)) {
      var b = this.bj;
      if ((ks > 0)) {
        b.n();
      }
      var it = xs.e();
      while (it.k()) {
        var c = $uC(it.d());
        var str$1 = ("" + $cToS(c));
        b.s = (b.s + str$1);
      }
    }
  }
  return this;
});
$p.c = (function() {
  return (this.bj.n() === 0);
});
$p.aE = (function() {
  return $m_scm_IndexedSeq$();
});
$p.aM = (function() {
  return this.bj.s;
});
$p.ar = (function(elem) {
  return this.tf($uC(elem));
});
$p.gS = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).r3(coll);
});
$p.fx = (function(coll) {
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
  var buf = new $c_scm_ListBuffer().jX($thiz);
  $thiz.cL = buf.cL;
  $thiz.e1 = buf.e1;
  $thiz.jg = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.jh = ((1 + $thiz.jh) | 0);
  if ($thiz.jg) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.jh = 0;
  this.cL = null;
  this.e1 = null;
  this.jg = false;
  this.cM = 0;
  this.jh = 0;
  this.cL = $m_sci_Nil$();
  this.e1 = null;
  this.jg = false;
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
$p.dt = (function(suffix) {
  return $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix);
});
$p.M = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.e = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.cL.e(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.jh)));
});
$p.ea = (function() {
  return $m_scm_ListBuffer$();
});
$p.x = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.cL, i);
});
$p.n = (function() {
  return this.cM;
});
$p.p = (function() {
  return this.cM;
});
$p.c = (function() {
  return (this.cM === 0);
});
$p.fH = (function() {
  this.jg = (!this.c());
  return this.cL;
});
$p.to = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.cM === 0)) {
    this.cL = last1;
  } else {
    this.e1.at = last1;
  }
  this.e1 = last1;
  this.cM = ((1 + this.cM) | 0);
  return this;
});
$p.jX = (function(xs) {
  var it = xs.e();
  if (it.k()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.d(), $m_sci_Nil$());
    this.cL = last0;
    while (it.k()) {
      var last1 = new $c_sci_$colon$colon(it.d(), $m_sci_Nil$());
      last0.at = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.cM = len;
    this.e1 = last0;
  }
  return this;
});
$p.tb = (function(xs) {
  var it = xs.e();
  if (it.k()) {
    var fresh = new $c_scm_ListBuffer().jX(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.cM === 0)) {
      this.cL = fresh.cL;
    } else {
      this.e1.at = fresh.cL;
    }
    this.e1 = fresh.e1;
    this.cM = ((this.cM + fresh.cM) | 0);
  }
  return this;
});
$p.bm = (function() {
  return "ListBuffer";
});
$p.b5 = (function(elems) {
  return this.tb(elems);
});
$p.ar = (function(elem) {
  return this.to(elem);
});
$p.aM = (function() {
  return this.fH();
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
      var temp$z = op.ba(z, $thiz.dr.a[start]);
      start = temp$start;
      z = temp$z;
    }
  }
}
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.ev = 0;
  $thiz.dr = initialElements;
  $thiz.aU = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.ev = 0;
  this.dr = null;
  this.aU = 0;
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
$p.dt = (function(suffix) {
  return $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix);
});
$p.M = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.e = (function() {
  return this.wI().e();
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bc = (function(len) {
  var x = this.aU;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.aU;
});
$p.m4 = (function(n) {
  this.dr = $m_scm_ArrayBuffer$().sl(this.dr, this.aU, n);
});
$p.bt = (function(size) {
  if (((size > this.aU) && (size >= 1))) {
    this.m4(size);
  }
});
$p.x = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().ip(n, (((-1) + this.aU) | 0));
  }
  if ((hi > this.aU)) {
    throw $m_scg_CommonErrors$().ip((((-1) + hi) | 0), (((-1) + this.aU) | 0));
  }
  return this.dr.a[n];
});
$p.wG = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $m_scg_CommonErrors$().ip(index, (((-1) + this.aU) | 0));
  }
  if ((hi > this.aU)) {
    throw $m_scg_CommonErrors$().ip((((-1) + hi) | 0), (((-1) + this.aU) | 0));
  }
  this.ev = ((1 + this.ev) | 0);
  this.dr.a[index] = elem;
});
$p.n = (function() {
  return this.aU;
});
$p.wI = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.ev)));
});
$p.ea = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.tl = (function(elem) {
  this.ev = ((1 + this.ev) | 0);
  var newSize = ((1 + this.aU) | 0);
  this.m4(newSize);
  this.aU = newSize;
  this.wG((((-1) + this.aU) | 0), elem);
  return this;
});
$p.qY = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.aU;
    if ((elemsLength > 0)) {
      this.ev = ((1 + this.ev) | 0);
      this.m4(((this.aU + elemsLength) | 0));
      $m_s_Array$().ch(elems.dr, 0, this.dr, this.aU, elemsLength);
      this.aU = ((this.aU + elemsLength) | 0);
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
  var srcLen = this.aU;
  var destLen = $m_jl_reflect_Array$().aD(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().ch(this.dr, 0, xs, start, copied);
  }
  return copied;
});
$p.fv = (function(z, op) {
  return $p_scm_ArrayBuffer__foldl__I__I__O__F2__O(this, 0, this.aU, z, op);
});
$p.iA = (function(op) {
  return ((this.aU > 0) ? $p_scm_ArrayBuffer__foldl__I__I__O__F2__O(this, 1, this.aU, this.dr.a[0], op) : $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op));
});
$p.b5 = (function(elems) {
  return this.qY(elems);
});
$p.ar = (function(elem) {
  return this.tl(elem);
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
  $thiz.eI = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.eI = null;
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
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bP = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bc = (function(len) {
  var x = (this.eI.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cR = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.T = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.dt = (function(suffix) {
  return $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix);
});
$p.br = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.ea = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.x = (function(index) {
  return this.eI[index];
});
$p.n = (function() {
  return (this.eI.length | 0);
});
$p.p = (function() {
  return (this.eI.length | 0);
});
$p.c6 = (function() {
  return "WrappedArray";
});
$p.aM = (function() {
  return this;
});
$p.ar = (function(elem) {
  this.eI.push(elem);
  return this;
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  return this.eI[index];
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
