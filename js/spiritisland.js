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
  return (arg0.$classData.Z ? arg0.bT() : $objectClone(arg0));
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
        return null.oy();
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
        return instance.i(x0);
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0);
      } else {
        return $c_O.prototype.i.call(instance, x0);
      }
    }
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
        return instance.v();
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.v.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.oz(x0);
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
/** @constructor */
function $c_O() {
}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $p;
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.i = (function(that) {
  return (this === that);
});
$p.s = (function() {
  var i = this.v();
  return (($objectClassName(this) + "@") + (+(i >>> 0.0)).toString(16));
});
$p.toString = (function() {
  return this.s();
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
$p.B = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.bT = (function() {
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
$p.B = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.bT = (function() {
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
$p.B = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bT = (function() {
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
$p.B = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bT = (function() {
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
$p.B = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bT = (function() {
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
$p.B = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bT = (function() {
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
$p.B = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.bT = (function() {
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
$p.B = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bT = (function() {
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
$p.B = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bT = (function() {
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
    A: 1,
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
  $p.B = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.bT = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    A: 1,
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
function $s_LMain__main__AT__V(args) {
  $m_LMain$().n5(args);
}
function $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector($thiz, sel, stage) {
  return $f_sc_StrictOptimizedIterableOps__collect__s_PartialFunction__O(sel.bw.d5, new $c_LMain$$anon$2(stage, sel, $thiz));
}
/** @constructor */
function $c_LMain$() {
  this.eA = null;
  this.eB = null;
  $n_LMain$ = this;
  this.eA = $m_Lcom_raquo_laminar_api_package$().j.ij.m9(new $c_LMain$AdversarySelector($m_Ladversaries_Adversary$().fp, 6));
  this.eB = this.eA.eM;
}
$p = $c_LMain$.prototype = new $h_O();
$p.constructor = $c_LMain$;
/** @constructor */
function $h_LMain$() {
}
$h_LMain$.prototype = $p;
$p.n5 = (function(args) {
  var container = document.getElementById("app");
  var this$3 = $m_Lcom_raquo_laminar_api_package$().j;
  var container$1 = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => container));
  var rootNode = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.mo()));
  var p = $m_Lcom_raquo_laminar_keys_EventProcessor$().gN(this$3.it.no(), false, false);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream($m_Lcom_raquo_airstream_web_DomEventStream$().mb(document, p.dc.dT, p.eR), p.eQ), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    new $c_Lcom_raquo_laminar_nodes_RootNode(container$1.Y(), rootNode.Y());
  })), this$3.o3());
});
$p.mo = (function() {
  return $m_Lcom_raquo_laminar_api_package$().j.f8().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().j.mS().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, "Spirit Island Adversary Tool", $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)]))), this.nD(), this.nC(), this.nB()])));
});
$p.nD = (function() {
  var $x_4 = $m_Lcom_raquo_laminar_api_package$().j.f8();
  var $x_3 = $m_sr_ScalaRunTime$();
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().j.kJ().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, "Level", $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])));
  var $x_1 = $m_Lcom_raquo_laminar_api_package$().j;
  var b = $m_sci_IndexedSeq$().b6();
  var it = new $c_sci_RangeIterator(1, 1, 6, false);
  while (it.ct) {
    var x0 = it.kS();
    b.b2($m_Lcom_raquo_laminar_api_package$().j.kd().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, ("" + x0), $m_Lcom_raquo_laminar_modifiers_RenderableText$().U), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().gN($m_Lcom_raquo_laminar_api_package$().j.h5(), false, false)).kP(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((x0) => (() => x0))(x0))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1$1) => {
      sink.er(_$1$1);
    }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.eA, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((x0) => ((a, _$1) => new $c_LMain$AdversarySelector(a.bw, x0)))(x0)))))), $m_Lcom_raquo_laminar_api_package$().j.kc().jS(new $c_Lcom_raquo_airstream_misc_MapSignal(this.eB, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x0) => ((selected) => ((selected.b9 === x0) ? "lightblue" : "")))(x0)), $m_s_None$()), $m_s_$less$colon$less$().g8)]))));
  }
  return $x_4.M($x_3.p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_2, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_1, b.bv(), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
});
$p.nC = (function() {
  var $x_5 = $m_Lcom_raquo_laminar_api_package$().j.f8();
  var $x_4 = $m_sr_ScalaRunTime$();
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().j.kJ().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, "Adversary", $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])));
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().j;
  var this$10 = $m_Ladversaries_Adversary$().hb;
  var f = ((adversary) => $m_Lcom_raquo_laminar_api_package$().j.kd().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, adversary.dI, $m_Lcom_raquo_laminar_modifiers_RenderableText$().U), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().gN($m_Lcom_raquo_laminar_api_package$().j.h5(), false, false)).kP(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Lcom_raquo_laminar_api_package$().j.mU()))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.er(_$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.eA, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((adversary$2) => ((a, _$2) => new $c_LMain$AdversarySelector(adversary$2, a.b9)))(adversary)))))), $m_Lcom_raquo_laminar_api_package$().j.kc().jS(new $c_Lcom_raquo_airstream_misc_MapSignal(this.eB, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((adversary$3) => ((selected) => {
    var x = selected.bw;
    if (((x === null) ? (adversary$3 === null) : x.i(adversary$3))) {
      return "lightblue";
    } else {
      return "";
    }
  }))(adversary)), $m_s_None$()), $m_s_$less$colon$less$().g8)]))));
  if ((this$10 === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var x0 = this$10.T();
    var h = new $c_sci_$colon$colon(f(x0), $m_sci_Nil$());
    var t = h;
    var rest = this$10.aH();
    while ((rest !== $m_sci_Nil$())) {
      var x0$1 = rest.T();
      var nx = new $c_sci_$colon$colon(f(x0$1), $m_sci_Nil$());
      t.c2 = nx;
      t = nx;
      rest = rest.aH();
    }
    var $x_1 = h;
  }
  return $x_5.M($x_4.p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_3, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_2, $x_1, $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
});
$p.nB = (function() {
  return $m_Lcom_raquo_laminar_api_package$().j.f8().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildrenInserter$().m5(new $c_Lcom_raquo_airstream_misc_MapSignal(this.eB, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sel) => {
    var setup = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage());
    var afterRavage = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__AfterRavage__Ladversaries_Stage());
    var ravage = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage());
    var afterBuild = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__AfterBuild__Ladversaries_Stage());
    var highImmigration = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage());
    var build = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Build__Ladversaries_Stage());
    var explore = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage());
    var lossCondition = sel.bw.dH;
    var ruleChanges = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage());
    var deckOrder = $f_sc_IndexedSeqOps__reverse__O(sel.bw.d5).gK(new $c_LMain$$anon$1(sel));
    var fear = $f_sc_LinearSeqOps__apply__I__O(sel.bw.dG, (((-1) + sel.b9) | 0));
    var escalation = sel.bw.dF;
    var vec = $m_sci_Vector$().bu($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)([$m_Lcom_raquo_laminar_api_package$().j.cb().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, "Setup", $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)]))), $m_Lcom_raquo_laminar_api_package$().j.kK().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, ("Deck Order: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Option$().kY(deckOrder), "", "", "")), $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)]))), $m_Lcom_raquo_laminar_api_package$().j.kK().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, ("Fear: " + fear), $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])))]))).c9(setup.b4(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s) => $m_Lcom_raquo_laminar_api_package$().j.bV().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, ("\ud83d\udfe2 " + s), $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])))))));
    var elem$1 = $m_Lcom_raquo_laminar_api_package$().j.cb().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, "Loss Condition", $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])));
    var a = $m_s_Option$().kY(lossCondition).ld().b4(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s$2) => $m_Lcom_raquo_laminar_api_package$().j.bV().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, ("" + s$2), $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])))))).b7(elem$1);
    var vec$1 = ((!lossCondition.e()) ? vec.c9(a) : vec);
    var elem$2 = $m_Lcom_raquo_laminar_api_package$().j.cb().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, "Rule Changes", $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])));
    var a$1 = ruleChanges.b4(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s$3) => $m_Lcom_raquo_laminar_api_package$().j.bV().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, ("" + s$3), $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])))))).b7(elem$2);
    var vec$2 = ((!$f_sc_SeqOps__isEmpty__Z(ruleChanges)) ? vec$1.c9(a$1) : vec$1);
    var elem$3 = $m_Lcom_raquo_laminar_api_package$().j.cb().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, "High Immigration", $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])));
    var a$2 = highImmigration.b4(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s$4) => $m_Lcom_raquo_laminar_api_package$().j.bV().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, ("\ud83d\udd35 " + s$4), $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])))))).b7(elem$3);
    var vec$3 = ((!$f_sc_SeqOps__isEmpty__Z(highImmigration)) ? vec$2.c9(a$2) : vec$2);
    var elem$4 = $m_Lcom_raquo_laminar_api_package$().j.cb().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, "Ravage", $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])));
    var a$3 = ravage.b4(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s$5) => $m_Lcom_raquo_laminar_api_package$().j.bV().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, ("\u26ab " + s$5), $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])))))).b7(elem$4);
    var vec$4 = ((!$f_sc_SeqOps__isEmpty__Z(ravage)) ? vec$3.c9(a$3) : vec$3);
    var elem$5 = $m_Lcom_raquo_laminar_api_package$().j.cb().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, "After Ravage", $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])));
    var a$4 = afterRavage.b4(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s$6) => $m_Lcom_raquo_laminar_api_package$().j.bV().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, ("\ud83d\udfe1 " + s$6), $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])))))).b7(elem$5);
    var vec$5 = ((!$f_sc_SeqOps__isEmpty__Z(afterRavage)) ? vec$4.c9(a$4) : vec$4);
    var elem$6 = $m_Lcom_raquo_laminar_api_package$().j.cb().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, "Build", $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])));
    var a$5 = build.b4(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s$7) => $m_Lcom_raquo_laminar_api_package$().j.bV().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, ("\ud83d\udd35 " + s$7), $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])))))).b7(elem$6);
    var vec$6 = ((!$f_sc_SeqOps__isEmpty__Z(build)) ? vec$5.c9(a$5) : vec$5);
    var elem$7 = $m_Lcom_raquo_laminar_api_package$().j.cb().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, "After Build", $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])));
    var a$6 = afterBuild.b4(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s$8) => $m_Lcom_raquo_laminar_api_package$().j.bV().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, ("\u26aa\ufe0f " + s$8), $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])))))).b7(elem$7);
    var $x_1 = ((!$f_sc_SeqOps__isEmpty__Z(afterBuild)) ? vec$6.c9(a$6) : vec$6);
    var elem$8 = $m_Lcom_raquo_laminar_api_package$().j.cb().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, "Explore", $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])));
    return $x_1.c9(explore.b4(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s$9) => $m_Lcom_raquo_laminar_api_package$().j.bV().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, ("\ud83d\udfe0 " + s$9), $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])))))).b7(elem$8).cY($m_Lcom_raquo_laminar_api_package$().j.bV().M($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().j, ("Stage 2 Escalation: " + escalation), $m_Lcom_raquo_laminar_modifiers_RenderableText$().U)])))));
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().j2, (void 0)))])));
});
var $d_LMain$ = new $TypeData().i($c_LMain$, "Main$", ({
  c2: 1
}));
var $n_LMain$;
function $m_LMain$() {
  if ((!$n_LMain$)) {
    $n_LMain$ = new $c_LMain$();
  }
  return $n_LMain$;
}
var $d_Lcom_raquo_airstream_core_InternalObserver = new $TypeData().i(1, "com.raquo.airstream.core.InternalObserver", ({
  at: 1
}));
function $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T($thiz) {
  return (($objectGetClass($thiz).gT() + "@") + $thiz.v());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.d3();
  return ((x === (void 0)) ? $thiz.d0() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().lg(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))), $m_s_PartialFunction$().eZ, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.lg = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.kH = (function(onTry, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTry, handleObserverErrors, this);
});
var $d_Lcom_raquo_airstream_core_Observer$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$, "com.raquo.airstream.core.Observer$", ({
  ce: 1
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
$p.l6 = (function(this$, observer) {
  var index = (this$.indexOf(observer) | 0);
  var shouldRemove = (index !== (-1));
  if (shouldRemove) {
    this$.splice(index, 1);
  }
  return shouldRemove;
});
var $d_Lcom_raquo_airstream_core_ObserverList$ = new $TypeData().i($c_Lcom_raquo_airstream_core_ObserverList$, "com.raquo.airstream.core.ObserverList$", ({
  ch: 1
}));
var $n_Lcom_raquo_airstream_core_ObserverList$;
function $m_Lcom_raquo_airstream_core_ObserverList$() {
  if ((!$n_Lcom_raquo_airstream_core_ObserverList$)) {
    $n_Lcom_raquo_airstream_core_ObserverList$ = new $c_Lcom_raquo_airstream_core_ObserverList$();
  }
  return $n_Lcom_raquo_airstream_core_ObserverList$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Signal$() {
  this.d8 = 0;
  this.d8 = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.kU = (function() {
  if ((this.d8 === 2147483647)) {
    this.d8 = 1;
  } else {
    this.d8 = ((1 + this.d8) | 0);
  }
  return this.d8;
});
var $d_Lcom_raquo_airstream_core_Signal$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Signal$, "com.raquo.airstream.core.Signal$", ({
  ci: 1
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
  this.fu = null;
  this.hq = null;
  this.fv = 0;
  this.fu = code;
  this.hq = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().et();
  this.fv = ((x === (void 0)) ? 1 : ((1 + x.fv) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().eC === (-1)) || (this.fv > $m_Lcom_raquo_airstream_core_Transaction$().eC))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().bG(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().eC));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().aI) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().cL.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().gD(this);
  }
}
$p = $c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
}
$h_Lcom_raquo_airstream_core_Transaction.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction, "com.raquo.airstream.core.Transaction", ({
  cj: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.eC = 0;
  this.hr = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.eC = 1000;
  this.hr = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."));
  }));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $p;
$p.kg = (function(transaction) {
  try {
    transaction.fu.f(transaction);
    var x = transaction.hq;
    if ((x !== (void 0))) {
      while (x.oC()) {
        x.os().oG(transaction);
      }
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().bG(e$2);
  }
});
var $d_Lcom_raquo_airstream_core_Transaction$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$, "com.raquo.airstream.core.Transaction$", ({
  ck: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$;
function $m_Lcom_raquo_airstream_core_Transaction$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$)) {
    $n_Lcom_raquo_airstream_core_Transaction$ = new $c_Lcom_raquo_airstream_core_Transaction$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$;
}
function $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V($thiz) {
  if ((($thiz.eD.length | 0) === 0)) {
    if ((($thiz.cL.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
        while ((($thiz.cL.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().gD($thiz.cL.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
      while ((($thiz.eD.length | 0) > 0)) {
        var callback = $thiz.eD.shift();
        try {
          callback.f(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().bG(e$2);
        }
      }
      while ((($thiz.cL.length | 0) > 0)) {
        var _trx = $thiz.cL.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().gD(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.aI = false;
  this.eD = null;
  this.cL = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.aI = false;
  this.eD = $m_Lcom_raquo_ew_JsArray$().aT($m_sr_ScalaRunTime$().p(new ($d_F1.r().C)([])));
  this.cL = $m_Lcom_raquo_ew_JsArray$().aT($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$onStart$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$onStart$() {
}
$h_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction$onStart$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$onStart$, "com.raquo.airstream.core.Transaction$onStart$", ({
  cl: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$onStart$;
function $m_Lcom_raquo_airstream_core_Transaction$onStart$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$onStart$)) {
    $n_Lcom_raquo_airstream_core_Transaction$onStart$ = new $c_Lcom_raquo_airstream_core_Transaction$onStart$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$onStart$;
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, transaction) {
  return $thiz.cM.get(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.eE.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.eE.shift();
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().aT($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.cM.set(parent, newChildren);
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
      (!(!$thiz.cM.delete(parent)));
    }
    return nextChild;
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.eE = null;
  this.cM = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.eE = $m_Lcom_raquo_ew_JsArray$().aT($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.cM = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.gD = (function(newTransaction) {
  var x = this.et();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().kg(newTransaction);
    this.mz(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.mz = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.et();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().aG(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.ns(transaction$tailLocal1);
    transaction$tailLocal1.fu = $m_Lcom_raquo_airstream_core_Transaction$().hr;
    var maybeNextTransaction = this.et();
    if ($m_sr_BoxesRunTime$().aG(maybeNextTransaction, (void 0))) {
      if (((this.cM.size | 0) > 0)) {
        var numChildren = new $c_sr_IntRef(0);
        this.cM.forEach(((numChildren) => ((transactions, _$4) => {
          var ev$12 = ((numChildren.a0 + (transactions.length | 0)) | 0);
          numChildren.a0 = ev$12;
        }))(numChildren));
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.a0) + " children for ") + (this.cM.size | 0)) + " transactions remain. This is a bug in Airstream."));
      } else {
        return (void 0);
      }
    } else {
      $m_Lcom_raquo_airstream_core_Transaction$().kg(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.ns = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().aG(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.et();
      if ((!$m_sr_BoxesRunTime$().aG(maybeParentTransaction, (void 0)))) {
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
$p.et = (function() {
  return this.eE[0];
});
var $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$, "com.raquo.airstream.core.Transaction$pendingTransactions$", ({
  cm: 1
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
  this.hv = null;
  this.ht = null;
  this.hu = null;
  this.hv = onWillStart;
  this.ht = onStart;
  this.hu = onStop;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$Config;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$Config() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = $p;
var $d_Lcom_raquo_airstream_custom_CustomSource$Config = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config, "com.raquo.airstream.custom.CustomSource$Config", ({
  cp: 1
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
$p.mc = (function(onStart, onStop) {
  return new $c_Lcom_raquo_airstream_custom_CustomSource$Config(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => (void 0))), onStart, onStop);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config$, "com.raquo.airstream.custom.CustomSource$Config$", ({
  cq: 1
}));
var $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
function $m_Lcom_raquo_airstream_custom_CustomSource$Config$() {
  if ((!$n_Lcom_raquo_airstream_custom_CustomSource$Config$)) {
    $n_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $c_Lcom_raquo_airstream_custom_CustomSource$Config$();
  }
  return $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscription) {
  var index = ($thiz.cf.indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.cf.splice(index, 1);
    if ((!$thiz.bl.e())) {
      subscription.kW();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.eJ.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.eJ.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.hS = null;
  this.cf = null;
  this.d9 = false;
  this.eJ = null;
  this.bl = null;
  this.da = 0;
  this.hS = onAccessAfterKilled;
  this.cf = $m_Lcom_raquo_ew_JsArray$().aT($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.d9 = true;
  this.eJ = $m_Lcom_raquo_ew_JsArray$().aT($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.bl = $m_s_None$();
  this.da = 0;
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $p;
$p.jT = (function() {
  if ((!(!this.bl.e()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.hS);
      this.bl = new $c_s_Some(newOwner);
      this.d9 = false;
      this.da = 0;
      var i = 0;
      var originalNumSubs = (this.cf.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.da) | 0);
        this.cf[ix].kV(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.d9 = true;
      this.da = 0;
    });
    $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var when = true;
    if ((this$4.aI || (!when))) {
      f();
    } else {
      this$4.aI = true;
      try {
        f();
      } finally {
        this$4.aI = false;
        $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$4);
      }
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"));
  }
});
$p.mu = (function() {
  if ((!this.bl.e())) {
    this.d9 = false;
    var arr = this.cf;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].kW();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.bl;
    if ((!this$4.e())) {
      this$4.H().kO();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.d9 = true;
    this.bl = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.m2 = (function(subscription, prepend) {
  if (prepend) {
    this.da = ((1 + this.da) | 0);
    this.cf.unshift(subscription);
  } else {
    this.cf.push(subscription);
  }
  var this$1 = this.bl;
  if ((!this$1.e())) {
    var x0 = this$1.H();
    subscription.kV(x0);
  }
});
$p.nz = (function(subscription) {
  if (this.d9) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.eJ.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  cu: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.eK = null;
  this.hT = null;
  this.eL = null;
  this.eK = dynamicOwner;
  this.hT = activate;
  this.eL = $m_s_None$();
  dynamicOwner.m2(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.fd = (function() {
  this.eK.nz(this);
});
$p.kV = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.eL = this.hT.f(owner);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.aI || (!when))) {
    f();
  } else {
    this$2.aI = true;
    try {
      f();
    } finally {
      this$2.aI = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
$p.kW = (function() {
  var this$1 = this.eL;
  if ((!this$1.e())) {
    this$1.H().fd();
    this.eL = $m_s_None$();
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription, "com.raquo.airstream.ownership.DynamicSubscription", ({
  cv: 1
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
$p.ey = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => new $c_s_Some(activate.f(owner)))), prepend);
});
$p.lb = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => {
    activate.f(owner);
    return $m_s_None$();
  })), prepend);
});
$p.nS = (function(dynamicOwner, observable, onNext) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().ey(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(observable, onNext, owner))), false);
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription$, "com.raquo.airstream.ownership.DynamicSubscription$", ({
  cw: 1
}));
var $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
function $m_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  if ((!$n_Lcom_raquo_airstream_ownership_DynamicSubscription$)) {
    $n_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $c_Lcom_raquo_airstream_ownership_DynamicSubscription$();
  }
  return $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
}
function $f_Lcom_raquo_airstream_ownership_Owner__$init$__V($thiz) {
  $thiz.kh($m_Lcom_raquo_ew_JsArray$().aT($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.dC();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.dC().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.dC().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.dC().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.dC().push(subscription);
}
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.fC)) {
    $thiz.hW.Y();
    $thiz.fC = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.hX = null;
  this.hW = null;
  this.fC = false;
  this.hX = owner;
  this.hW = cleanup;
  this.fC = false;
  owner.l3(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.fd = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this.hX, this);
});
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  cy: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.hY = null;
  this.hZ = null;
  this.cg = null;
  this.cN = false;
  this.hY = activate;
  this.hZ = deactivate;
  this.cg = $m_s_None$();
  this.cN = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.n0 = (function() {
  var this$1 = this.cg;
  return ((!this$1.e()) && (!this$1.H().eK.bl.e()));
});
$p.nM = (function(nextOwner) {
  if (this.cN) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.cg;
  if ((!this$1.e())) {
    var x0 = this$1.H();
    var x$2 = x0.eK;
    var $x_1 = (nextOwner === x$2);
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.n0() && (!nextOwner.bl.e()))) {
      this.cN = true;
    }
    var this$3 = this.cg;
    if ((!this$3.e())) {
      this$3.H().fd();
      this.cg = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().ey(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((parentOwner) => {
      if ((!this.cN)) {
        this.hY.Y();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        if ((!this.cN)) {
          this.hZ.Y();
        }
      })));
    })), false);
    this.cg = new $c_s_Some(newPilotSubscription);
    this.cN = false;
  }
});
$p.ml = (function() {
  if (this.cN) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.cg;
  if ((!this$1.e())) {
    this$1.H().fd();
  }
  this.cg = $m_s_None$();
});
var $d_Lcom_raquo_airstream_ownership_TransferableSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_TransferableSubscription, "com.raquo.airstream.ownership.TransferableSubscription", ({
  cz: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$() {
}
$p = $c_Lcom_raquo_airstream_state_Var$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$() {
}
$h_Lcom_raquo_airstream_state_Var$.prototype = $p;
$p.m9 = (function(initial) {
  return new $c_Lcom_raquo_airstream_state_SourceVar(new $c_s_util_Success(initial));
});
var $d_Lcom_raquo_airstream_state_Var$ = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$, "com.raquo.airstream.state.Var$", ({
  cD: 1
}));
var $n_Lcom_raquo_airstream_state_Var$;
function $m_Lcom_raquo_airstream_state_Var$() {
  if ((!$n_Lcom_raquo_airstream_state_Var$)) {
    $n_Lcom_raquo_airstream_state_Var$ = new $c_Lcom_raquo_airstream_state_Var$();
  }
  return $n_Lcom_raquo_airstream_state_Var$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_web_DomEventStream$() {
}
$p = $c_Lcom_raquo_airstream_web_DomEventStream$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_web_DomEventStream$;
/** @constructor */
function $h_Lcom_raquo_airstream_web_DomEventStream$() {
}
$h_Lcom_raquo_airstream_web_DomEventStream$.prototype = $p;
$p.mb = (function(eventTarget, eventKey, useCapture) {
  return new $c_Lcom_raquo_airstream_custom_CustomStreamSource(new $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(((fireValue, _$1, _$2, _$3) => {
    var eventHandler = $m_sjs_js_Any$().kF(fireValue);
    return $m_Lcom_raquo_airstream_custom_CustomSource$Config$().mc(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.addEventListener(eventKey, eventHandler, useCapture);
    })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.removeEventListener(eventKey, eventHandler, useCapture);
    })));
  })));
});
var $d_Lcom_raquo_airstream_web_DomEventStream$ = new $TypeData().i($c_Lcom_raquo_airstream_web_DomEventStream$, "com.raquo.airstream.web.DomEventStream$", ({
  cH: 1
}));
var $n_Lcom_raquo_airstream_web_DomEventStream$;
function $m_Lcom_raquo_airstream_web_DomEventStream$() {
  if ((!$n_Lcom_raquo_airstream_web_DomEventStream$)) {
    $n_Lcom_raquo_airstream_web_DomEventStream$ = new $c_Lcom_raquo_airstream_web_DomEventStream$();
  }
  return $n_Lcom_raquo_airstream_web_DomEventStream$;
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
$p.aT = (function(items) {
  return [...$m_sjsr_Compat$().nY(items)];
});
var $d_Lcom_raquo_ew_JsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$, "com.raquo.ew.JsArray$", ({
  cI: 1
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
$p.mV = (function(this$, item, fromIndex) {
  return ((this$.indexOf(item, fromIndex) | 0) !== (-1));
});
$p.mH = (function(this$, cb) {
  var i = 0;
  var len = (this$.length | 0);
  while ((i < len)) {
    cb(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_Lcom_raquo_ew_JsArray$RichJsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$RichJsArray$, "com.raquo.ew.JsArray$RichJsArray$", ({
  cJ: 1
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
  this.ib = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.ms($m_Lcom_raquo_laminar_api_package$().j.nT().nU());
  this.ib = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.m4 = (function(parent, child) {
  try {
    parent.appendChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.X instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.X : e$2);
  }
});
$p.nw = (function(parent, child) {
  try {
    parent.removeChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.X instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.X : e$2);
  }
});
$p.mY = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.X instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.X : e$2);
  }
});
$p.mX = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild.nextSibling);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.X instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.X : e$2);
  }
});
$p.n3 = (function(node, ancestor) {
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
    if ($m_sr_BoxesRunTime$().aG(ancestor, effectiveParentNode)) {
      return true;
    }
    node$tailLocal1 = effectiveParentNode;
  }
});
$p.lT = (function(element, listener) {
  element.addEventListener(listener.de.dc.dT, listener.fR, listener.fS);
});
$p.nx = (function(element, listener) {
  element.removeEventListener(listener.de.dc.dT, listener.fR, listener.fS);
});
$p.mr = (function(tag) {
  return document.createElement(tag.fZ);
});
$p.mM = (function(element, attr) {
  var x = this.mN(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.fL.kk(x));
});
$p.mN = (function(element, attr) {
  var domValue = element.aW.getAttributeNS(null, attr.dU);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.nK = (function(element, attr, value) {
  this.nL(element, attr, attr.fL.kn(value));
});
$p.nL = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.ny(element, attr);
  } else {
    element.aW.setAttribute(attr.dU, domValue);
  }
});
$p.ny = (function(element, attr) {
  element.aW.removeAttribute(attr.dU);
});
$p.nJ = (function(element, style, value) {
  var ref = element.aW;
  var styleCssName = style.fM;
  var prefixes = style.fN;
  var styleValue = ((value === null) ? null : $dp_toString__T(value));
  if ((styleValue === null)) {
    prefixes.bt(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((prefix) => ref.style.removeProperty((("" + prefix) + styleCssName)))));
    ref.style.removeProperty(styleCssName);
  } else {
    prefixes.bt(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((prefix$2) => {
      var \u03b41$ = ref.style;
      \u03b41$.setProperty((("" + prefix$2) + styleCssName), styleValue);
    })));
    var \u03b42$ = ref.style;
    \u03b42$.setProperty(styleCssName, styleValue);
  }
});
$p.ms = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.j9);
});
$p.mQ = (function(element, attr) {
  var x = this.mR(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.fO.kk(x));
});
$p.mR = (function(element, attr) {
  var $x_2 = element.h8();
  var this$2 = attr.eT;
  var $x_1 = $x_2.getAttributeNS((this$2.e() ? null : this$2.H()), attr.fP);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.nN = (function(element, attr, value) {
  this.nO(element, attr, attr.fO.kn(value));
});
$p.nO = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.nA(element, attr);
  } else {
    var this$1 = attr.eT;
    if (this$1.e()) {
      element.h8().setAttribute(attr.eS, domValue);
    } else {
      var x0 = this$1.H();
      element.h8().setAttributeNS(x0, attr.eS, domValue);
    }
  }
});
$p.nA = (function(element, attr) {
  var $x_1 = element.h8();
  var this$2 = attr.eT;
  $x_1.removeAttributeNS((this$2.e() ? null : this$2.H()), attr.fP);
});
$p.mq = (function(text) {
  return document.createComment(text);
});
$p.mt = (function(text) {
  return document.createTextNode(text);
});
$p.n1 = (function(element) {
  return $m_sc_StringOps$().mn(element.tagName, 45);
});
$p.mw = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.kj(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.kj = (function(node) {
  if ((!(!(node instanceof HTMLElement)))) {
    var id = node.id;
    if ((id !== "")) {
      var suffixStr = ("#" + id);
    } else {
      var classes = node.className;
      var suffixStr = ((classes !== "") ? ("." + classes.replace(this.ib, ".")) : "");
    }
    return (node.tagName.toLowerCase() + suffixStr);
  } else {
    return node.nodeName;
  }
});
$p.mv = (function(node) {
  return ((!(!(node instanceof Element))) ? node.outerHTML : ((!(!(node instanceof Text))) ? (("Text(" + node.textContent) + ")") : ((!(!(node instanceof Comment))) ? (("Comment(" + node.textContent) + ")") : ((node === null) ? "<null>" : (("OtherNode(" + $dp_toString__T(node)) + ")")))));
});
var $d_Lcom_raquo_laminar_DomApi$ = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$, "com.raquo.laminar.DomApi$", ({
  cK: 1
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
  this.fI = null;
  this.ic = null;
  this.fH = null;
  this.fI = seq;
  this.ic = scalaArray;
  this.fH = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.bt = (function(f) {
  if ((this.fI !== null)) {
    this.fI.bt(f);
  } else if ((this.fH !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().mH(this.fH, $m_sjs_js_Any$().kF(f));
  } else {
    $m_sc_ArrayOps$().mI(this.ic, f);
  }
});
var $d_Lcom_raquo_laminar_Seq = new $TypeData().i($c_Lcom_raquo_laminar_Seq, "com.raquo.laminar.Seq", ({
  cL: 1
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
  cM: 1
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
  $thiz.ij = $m_Lcom_raquo_airstream_state_Var$();
}
function $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V($thiz) {
  $thiz.lj = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    _$1.iX.aW.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.bH.bl.e()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((c) => {
      if (ignoreNextActivation.f5) {
        var ev$5 = false;
        ignoreNextActivation.f5 = ev$5;
      } else {
        fn.f(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().lb(element.bH, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((owner) => {
      activate.f(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element$2, owner));
    }))(element)), false);
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.eO = null;
  this.iS = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.eO = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  this.iS = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
}
$p = $c_Lcom_raquo_laminar_codecs_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$() {
}
$h_Lcom_raquo_laminar_codecs_package$.prototype = $p;
var $d_Lcom_raquo_laminar_codecs_package$ = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$, "com.raquo.laminar.codecs.package$", ({
  cX: 1
}));
var $n_Lcom_raquo_laminar_codecs_package$;
function $m_Lcom_raquo_laminar_codecs_package$() {
  if ((!$n_Lcom_raquo_laminar_codecs_package$)) {
    $n_Lcom_raquo_laminar_codecs_package$ = new $c_Lcom_raquo_laminar_codecs_package$();
  }
  return $n_Lcom_raquo_laminar_codecs_package$;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V($thiz) {
  $thiz.ll = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().eO);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.dU, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().mM(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().nK(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.li = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().eO, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.eS, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().mQ(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().nN(el$2, attr, value);
  })), separator);
}
/** @constructor */
function $c_Lcom_raquo_laminar_inputs_InputController$() {
  this.iT = null;
  $n_Lcom_raquo_laminar_inputs_InputController$ = this;
  $m_Lcom_raquo_laminar_api_package$().j.lf();
  $m_Lcom_raquo_ew_JsArray$().aT($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().j.h6()])));
  $m_Lcom_raquo_laminar_api_package$().j.lf();
  $m_Lcom_raquo_ew_JsArray$().aT($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().j.h6(), $m_Lcom_raquo_laminar_api_package$().j.nn()])));
  $m_Lcom_raquo_laminar_api_package$().j.mj();
  $m_Lcom_raquo_ew_JsArray$().aT($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().j.h6(), $m_Lcom_raquo_laminar_api_package$().j.h5()])));
  this.iT = $m_Lcom_raquo_ew_JsArray$().aT($m_sr_ScalaRunTime$().p(new ($d_T.r().C)(["value", "checked"])));
}
$p = $c_Lcom_raquo_laminar_inputs_InputController$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inputs_InputController$;
/** @constructor */
function $h_Lcom_raquo_laminar_inputs_InputController$() {
}
$h_Lcom_raquo_laminar_inputs_InputController$.prototype = $p;
var $d_Lcom_raquo_laminar_inputs_InputController$ = new $TypeData().i($c_Lcom_raquo_laminar_inputs_InputController$, "com.raquo.laminar.inputs.InputController$", ({
  dc: 1
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
  var prevChildRef = new $c_sr_ObjectRef(sentinelNode.Z().nextSibling);
  var lastIndexChild = new $c_sr_ObjectRef(sentinelNode);
  nextChildren.bt(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextChild) => {
    if ((currentChildrenCount.a0 <= index.a0)) {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().gX(parentNode, nextChild, lastIndexChild.P, hooks);
      var ev$2 = nextChild.Z();
      prevChildRef.P = ev$2;
      ev$2 = null;
      var ev$3 = ((1 + currentChildrenCount.a0) | 0);
      currentChildrenCount.a0 = ev$3;
    } else if ((!$m_sr_BoxesRunTime$().aG(nextChild.Z(), prevChildRef.P))) {
      if ((!(!(!prevChildren.has(nextChild.Z()))))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().gX(parentNode, nextChild, lastIndexChild.P, hooks);
        var ev$4 = nextChild.Z();
        prevChildRef.P = ev$4;
        ev$4 = null;
        var ev$5 = ((1 + currentChildrenCount.a0) | 0);
        currentChildrenCount.a0 = ev$5;
      } else {
        while (((!$m_sr_BoxesRunTime$().aG(nextChild.Z(), prevChildRef.P)) && (!$p_Lcom_raquo_laminar_inserters_ChildrenInserter$__containsRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Z($thiz, nextChildrenMap, prevChildRef.P)))) {
          var nextPrevChildRef = prevChildRef.P.nextSibling;
          $m_Lcom_raquo_laminar_nodes_ParentNode$().l5(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.P));
          var ev$6 = nextPrevChildRef;
          prevChildRef.P = ev$6;
          ev$6 = null;
          var ev$7 = (((-1) + currentChildrenCount.a0) | 0);
          currentChildrenCount.a0 = ev$7;
        }
        if ((!$m_sr_BoxesRunTime$().aG(nextChild.Z(), prevChildRef.P))) {
          $m_Lcom_raquo_laminar_nodes_ParentNode$().gX(parentNode, nextChild, lastIndexChild.P, hooks);
          var ev$8 = nextChild.Z();
          prevChildRef.P = ev$8;
          ev$8 = null;
        }
      }
    }
    if ((prevChildRef.P.nextSibling === null)) {
      var ev$9 = ((1 + index.a0) | 0);
      currentChildrenCount.a0 = ev$9;
    } else {
      var ev$10 = prevChildRef.P.nextSibling;
      prevChildRef.P = ev$10;
      ev$10 = null;
    }
    var ev$11 = nextChild;
    lastIndexChild.P = ev$11;
    ev$11 = null;
    var ev$12 = ((1 + index.a0) | 0);
    index.a0 = ev$12;
  })));
  while ((index.a0 < currentChildrenCount.a0)) {
    var nextPrevChildRef$1 = prevChildRef.P.nextSibling;
    $m_Lcom_raquo_laminar_nodes_ParentNode$().l5(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.P));
    var ev$13 = nextPrevChildRef$1;
    prevChildRef.P = ev$13;
    ev$13 = null;
    var ev$14 = (((-1) + currentChildrenCount.a0) | 0);
    currentChildrenCount.a0 = ev$14;
  }
  return currentChildrenCount.a0;
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
$p.m5 = (function(childrenSource, renderableSeq, renderableNode, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((ctx, owner, hooks) => {
    if ((!ctx.dS)) {
      ctx.kz();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childrenSource, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx$2) => ((components) => {
      this.nV(($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(components, null, null)), ctx$2, hooks);
    }))(ctx)), owner);
  })), initialHooks);
});
$p.nV = (function(newChildren, ctx, hooks) {
  if ((!ctx.dS)) {
    ctx.kz();
  }
  var newChildrenMap = $m_Lcom_raquo_laminar_inserters_InsertContext$().nl(newChildren);
  ctx.dQ = $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__updateChildren__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_Seq__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__I__O__I(this, ctx.db, newChildren, newChildrenMap, ctx.eP, ctx.dR, ctx.dQ, hooks);
  ctx.db = newChildrenMap;
});
var $d_Lcom_raquo_laminar_inserters_ChildrenInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildrenInserter$, "com.raquo.laminar.inserters.ChildrenInserter$", ({
  dd: 1
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
  this.eP = null;
  this.dR = null;
  this.dS = false;
  this.dQ = 0;
  this.db = null;
  this.eP = parentNode;
  this.dR = sentinelNode;
  this.dS = strictMode;
  this.dQ = extraNodeCount;
  this.db = extraNodesMap;
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext.prototype = $p;
$p.kz = (function() {
  if ((this.dS || (this.dQ !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().mv(this.eP.aW)));
  }
  if ((this.db === null)) {
    this.db = new Map();
  }
  if ((!(!(!(this.dR.Z() instanceof Comment))))) {
    var contentNode = this.dR;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().mY(this.eP.aW, newSentinelNode.fT, contentNode.Z());
    this.dR = newSentinelNode;
    this.dQ = 1;
    this.db.set(contentNode.Z(), contentNode);
  }
  this.dS = true;
});
var $d_Lcom_raquo_laminar_inserters_InsertContext = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext, "com.raquo.laminar.inserters.InsertContext", ({
  dg: 1
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
$p.nE = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().dv(parentNode, sentinelNode, hooks);
  return this.o2(parentNode, sentinelNode, strictMode);
});
$p.o2 = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, 0, (strictMode ? new Map() : null));
});
$p.nl = (function(nodes) {
  var acc = new Map();
  nodes.bt(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((node) => {
    acc.set(node.Z(), node);
  })));
  return acc;
});
var $d_Lcom_raquo_laminar_inserters_InsertContext$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext$, "com.raquo.laminar.inserters.InsertContext$", ({
  dh: 1
}));
var $n_Lcom_raquo_laminar_inserters_InsertContext$;
function $m_Lcom_raquo_laminar_inserters_InsertContext$() {
  if ((!$n_Lcom_raquo_laminar_inserters_InsertContext$)) {
    $n_Lcom_raquo_laminar_inserters_InsertContext$ = new $c_Lcom_raquo_laminar_inserters_InsertContext$();
  }
  return $n_Lcom_raquo_laminar_inserters_InsertContext$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, processor) {
  this.dc = null;
  this.eR = false;
  this.fK = false;
  this.eQ = null;
  this.dc = eventProp;
  this.eR = shouldUseCapture;
  this.fK = shouldBePassive;
  this.eQ = processor;
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $p;
$p.kP = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.eQ.f(ev);
    return (this$2.e() ? $m_s_None$() : new $c_s_Some((this$2.H(), value.Y())));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.dc, this.eR, this.fK, newProcessor);
});
var $d_Lcom_raquo_laminar_keys_EventProcessor = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor, "com.raquo.laminar.keys.EventProcessor", ({
  dl: 1
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
$p.gN = (function(eventProp, shouldUseCapture, shouldBePassive) {
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$14) => new $c_s_Some(_$14))));
});
var $d_Lcom_raquo_laminar_keys_EventProcessor$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor$, "com.raquo.laminar.keys.EventProcessor$", ({
  dm: 1
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
  this.lm = null;
  this.ln = null;
  this.lo = null;
  this.lp = null;
  this.lm = "http://www.w3.org/2000/svg";
  this.ln = "http://www.w3.org/1999/xlink";
  this.lo = "http://www.w3.org/XML/1998/namespace";
  this.lp = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.n9 = (function(namespace) {
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
  ds: 1
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
  this.iX = null;
  this.fQ = null;
  this.iX = thisNode;
  this.fQ = owner;
}
$p = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
}
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $p;
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().i($c_Lcom_raquo_laminar_lifecycle_MountContext, "com.raquo.laminar.lifecycle.MountContext", ({
  dt: 1
}));
var $d_Lcom_raquo_laminar_modifiers_Modifier = new $TypeData().i(1, "com.raquo.laminar.modifiers.Modifier", ({
  a1: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$() {
  this.lq = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.lq = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_Modifier$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$, "com.raquo.laminar.modifiers.Modifier$", ({
  dw: 1
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
  this.j2 = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  this.j2 = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$, "com.raquo.laminar.modifiers.RenderableNode$", ({
  dA: 1
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
  this.U = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableText$ = this;
  this.U = new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x) => x)), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => ("" + (_$1 | 0)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => ("" + (+_$2)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => ("" + (!(!_$3))))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => _$4.nX())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableText$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$, "com.raquo.laminar.modifiers.RenderableText$", ({
  dF: 1
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
$p.dv = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.ez(nextParent);
  if ((hooks !== (void 0))) {
    hooks.np(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().m4(parent.Z(), child.Z());
  if (appended) {
    child.ev(nextParent);
  }
  return appended;
});
$p.l5 = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().aG(child.Z().parentNode, parent.Z())) {
    child.ez($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().nw(parent.Z(), child.Z());
    child.ev($m_s_None$());
  }
  return removed;
});
$p.gX = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.ez(nextParent);
  if ((hooks !== (void 0))) {
    hooks.np(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().mX(parent.Z(), newChild.Z(), referenceChild.Z());
  newChild.ev(nextParent);
  return inserted;
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ParentNode$, "com.raquo.laminar.nodes.ParentNode$", ({
  dI: 1
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
$p.o1 = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().ey(element.bH, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.f(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$, "com.raquo.laminar.nodes.ReactiveElement$", ({
  dK: 1
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
  dO: 1
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
  this.ls = false;
  this.dV = null;
  this.eW = null;
  this.ja = null;
  this.g2 = false;
  this.lr = 0;
  this.lu = 0;
  this.lt = null;
  $n_jl_FloatingPointBits$ = this;
  this.ls = true;
  this.dV = new ArrayBuffer(8);
  this.eW = new Int32Array(this.dV, 0, 2);
  new Float32Array(this.dV, 0, 2);
  this.ja = new Float64Array(this.dV, 0, 1);
  this.eW[0] = 16909060;
  this.g2 = ((new Int8Array(this.dV, 0, 8)[0] | 0) === 1);
  this.lr = (this.g2 ? 0 : 1);
  this.lu = (this.g2 ? 1 : 0);
  this.lt = null;
}
$p = $c_jl_FloatingPointBits$.prototype = new $h_O();
$p.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
}
$h_jl_FloatingPointBits$.prototype = $p;
$p.h4 = (function(value) {
  var iv = ((value | 0.0) | 0);
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv;
  } else {
    this.ja[0] = value;
    return ((this.eW[0] | 0) ^ (this.eW[1] | 0));
  }
});
var $d_jl_FloatingPointBits$ = new $TypeData().i($c_jl_FloatingPointBits$, "java.lang.FloatingPointBits$", ({
  dZ: 1
}));
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$();
  }
  return $n_jl_FloatingPointBits$;
}
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().bP("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
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
  var PatBC = $m_jl_StackTrace$StringRE$().bP("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().bP("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().bP("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().bP("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().bP("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
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
  if ((!(!$m_jl_Utils$Cache$().g7.call(dict, encodedName)))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = dict$1[encodedName];
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
  }
  var this$3 = base.split("_").join(".");
  return this$3.split("\uff3f").join("_");
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.bx) << 24) >> 24) === 0)) {
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
    $thiz.g4 = dict;
    $thiz.bx = (((1 | $thiz.bx) << 24) >> 24);
  }
  return $thiz.g4;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.bx) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.g4);
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.bx) << 24) >> 24) === 0)) {
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
    $thiz.g5 = dict;
    $thiz.bx = (((2 | $thiz.bx) << 24) >> 24);
  }
  return $thiz.g5;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.bx) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.g5);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.bx) << 24) >> 24) === 0)) {
    $thiz.g3 = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.bx = (((4 | $thiz.bx) << 24) >> 24);
  }
  return $thiz.g3;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.bx) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.g3);
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
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().bP("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().bj("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().bj("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().bj("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().bj("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bj("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().bj("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().bj("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().bj("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().bj("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bj("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bj("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bj("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().bj("Line (\\d+).*script (?:in )?(\\S+)", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().bj("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().bP("^(.*)@(.+):(\\d+)$");
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
  var lineRE = $m_jl_StackTrace$StringRE$().bP("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
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
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().bP("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().bP("<anonymous function>"), "{anonymous}");
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
  this.g4 = null;
  this.g5 = null;
  this.g3 = null;
  this.bx = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.mF = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  ea: 1
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
$p.bP = (function(this$) {
  return new RegExp(this$);
});
$p.bj = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().i($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  eb: 1
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
  this.g6 = null;
  this.jb = null;
  $n_jl_System$SystemProperties$ = this;
  this.g6 = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.jb = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.kI = (function(key, default$1) {
  if ((this.g6 !== null)) {
    var dict = this.g6;
    return ((!(!$m_jl_Utils$Cache$().g7.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.jb.kI(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  eg: 1
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
  this.g7 = null;
  $n_jl_Utils$Cache$ = this;
  this.g7 = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  ej: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bb)));
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  bb: 1
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
$p.bM = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? array.a.length : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  el: 1
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
$p.mg = (function(a, key) {
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
$p.ku = (function(a, b) {
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
    var lo = t.l;
    var hi = t.n;
    var i$2 = i;
    var t$1 = b.a[i$2];
    var lo$1 = t$1.l;
    var hi$1 = t$1.n;
    if ((!((lo === lo$1) && (hi === hi$1)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.kt = (function(a, b) {
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
$p.kv = (function(a, b) {
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
$p.kq = (function(a, b) {
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
$p.kp = (function(a, b) {
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
$p.kw = (function(a, b) {
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
$p.kr = (function(a, b) {
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
$p.ks = (function(a, b) {
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
$p.Q = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).J.Q().J.U(newLength);
  original.B(0, ret, 0, copyLength);
  return ret;
});
$p.W = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).J.Q().J.U(retLength);
  original.B(from, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  em: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.l = 0;
  this.n = 0;
  this.l = lo;
  this.n = hi;
}
$p = $c_RTLong.prototype = new $h_O();
$p.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $p;
$p.i = (function(that) {
  return ((that instanceof $c_RTLong) && ((this.l === that.l) && (this.n === that.n)));
});
$p.v = (function() {
  return (this.l ^ this.n);
});
$p.s = (function() {
  return $m_RTLong$().l2(this.l, this.n);
});
$p.oJ = (function() {
  return this.l;
});
$p.oI = (function() {
  return $m_RTLong$().l1(this.l, this.n);
});
$p.oH = (function() {
  return $m_RTLong$().es(this.l, this.n);
});
$p.op = (function() {
  return ((this.l << 24) >> 24);
});
$p.oF = (function() {
  return ((this.l << 16) >> 16);
});
$p.oA = (function() {
  return this.l;
});
$p.oB = (function() {
  return this;
});
$p.ov = (function() {
  return $m_RTLong$().l1(this.l, this.n);
});
$p.ot = (function() {
  return $m_RTLong$().es(this.l, this.n);
});
$p.or = (function(that) {
  return $m_RTLong$().kZ(this.l, this.n, that.l, that.n);
});
$p.oq = (function(that) {
  return $m_RTLong$().kZ(this.l, this.n, that.l, that.n);
});
$p.ou = (function(b) {
  return ((this.l === b.l) && (this.n === b.n));
});
$p.oD = (function(b) {
  return (!((this.l === b.l) && (this.n === b.n)));
});
$p.og = (function(b) {
  var ahi = this.n;
  var bhi = b.n;
  return ((ahi === bhi) ? (((-2147483648) ^ this.l) < ((-2147483648) ^ b.l)) : (ahi < bhi));
});
$p.oh = (function(b) {
  var ahi = this.n;
  var bhi = b.n;
  return ((ahi === bhi) ? (((-2147483648) ^ this.l) <= ((-2147483648) ^ b.l)) : (ahi < bhi));
});
$p.oc = (function(b) {
  var ahi = this.n;
  var bhi = b.n;
  return ((ahi === bhi) ? (((-2147483648) ^ this.l) > ((-2147483648) ^ b.l)) : (ahi > bhi));
});
$p.od = (function(b) {
  var ahi = this.n;
  var bhi = b.n;
  return ((ahi === bhi) ? (((-2147483648) ^ this.l) >= ((-2147483648) ^ b.l)) : (ahi > bhi));
});
$p.oL = (function() {
  return new $c_RTLong((~this.l), (~this.n));
});
$p.oa = (function(b) {
  return new $c_RTLong((this.l | b.l), (this.n | b.n));
});
$p.o9 = (function(b) {
  return new $c_RTLong((this.l & b.l), (this.n & b.n));
});
$p.on = (function(b) {
  return new $c_RTLong((this.l ^ b.l), (this.n ^ b.n));
});
$p.oi = (function(n) {
  var lo = this.l;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.n << n)) : (lo << n)));
});
$p.of = (function(n) {
  var hi = this.n;
  return new $c_RTLong((((32 & n) === 0) ? (((this.l >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
});
$p.oe = (function(n) {
  var hi = this.n;
  return new $c_RTLong((((32 & n) === 0) ? (((this.l >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
});
$p.oK = (function() {
  var lo = this.l;
  var hi = this.n;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)));
});
$p.ol = (function(b) {
  var alo = this.l;
  var ahi = this.n;
  var bhi = b.n;
  var lo = ((alo + b.l) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)));
});
$p.oj = (function(b) {
  var alo = this.l;
  var ahi = this.n;
  var bhi = b.n;
  var lo = ((alo - b.l) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)));
});
$p.om = (function(b) {
  var alo = this.l;
  var blo = b.l;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  return new $c_RTLong(lo, ((((((((Math.imul(alo, b.n) + Math.imul(this.n, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0));
});
$p.ob = (function(b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.my(this.l, this.n, b.l, b.n), this$1.N);
});
$p.ok = (function(b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.nv(this.l, this.n, b.l, b.n), this$1.N);
});
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bc)));
}
var $d_RTLong = new $TypeData().i($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  bc: 1
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
      $thiz.N = (((rDouble / 4.294967296E9) | 0.0) | 0);
      return ((rDouble | 0.0) | 0);
    } else {
      $thiz.N = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - (Math.clz32(blo) | 0)) | 0);
    $thiz.N = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - (Math.clz32(bhi) | 0)) | 0);
    $thiz.N = 0;
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
      $thiz.N = (((rDouble / 4.294967296E9) | 0.0) | 0);
      return ((rDouble | 0.0) | 0);
    } else {
      $thiz.N = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.N = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.N = (ahi & (((-1) + bhi) | 0));
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
    $thiz.N = quotHi;
    return quotLo;
  } else if ((ask === 1)) {
    $thiz.N = remHi;
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
  this.N = 0;
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.l2 = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)));
});
$p.es = (function(lo, hi) {
  return ((hi < 0) ? (-((4.294967296E9 * (+(((lo !== 0) ? (~hi) : ((-hi) | 0)) >>> 0.0))) + (+(((-lo) | 0) >>> 0.0)))) : ((4.294967296E9 * hi) + (+(lo >>> 0.0))));
});
$p.l1 = (function(lo, hi) {
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
$p.ox = (function(value) {
  return new $c_RTLong(value, (value >> 31));
});
$p.ow = (function(value) {
  return new $c_RTLong(this.l0(value), this.N);
});
$p.l0 = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.N = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.N = 2147483647;
    return (-1);
  } else {
    var rawLo = ((value | 0.0) | 0);
    var rawHi = (((value / 4.294967296E9) | 0.0) | 0);
    this.N = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$p.kZ = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$p.my = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.N = 0;
        return (-2147483648);
      } else {
        var lo = $intDiv(alo, blo);
        this.N = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.N = (-1);
      return (-1);
    } else {
      this.N = 0;
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
      var hi$2 = this.N;
      this.N = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    }
  }
});
$p.nv = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.N = (lo >> 31);
        return lo;
      } else {
        this.N = 0;
        return 0;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.N = 0;
      return 0;
    } else {
      this.N = ahi;
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
      var hi$2 = this.N;
      this.N = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    } else {
      return absRLo;
    }
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  ep: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
var $d_F0 = new $TypeData().i(1, "scala.Function0", ({
  ay: 1
}));
var $d_F1 = new $TypeData().i(1, "scala.Function1", ({
  e: 1
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
  this.jf = null;
  this.lv = null;
  this.eZ = null;
  $n_s_PartialFunction$ = this;
  this.jf = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2$2) => $m_s_PartialFunction$().jf));
  this.lv = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$3$2$2) => false));
  this.eZ = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  eD: 1
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
  this.ji = null;
  $n_sc_ArrayOps$ = this;
  this.ji = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_ArrayOps$().ji));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.mI = (function(this$, f) {
  var len = $m_jl_reflect_Array$().bM(this$);
  var i = 0;
  if ((this$ instanceof $ac_O)) {
    while ((i < len)) {
      f.f(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_I)) {
    while ((i < len)) {
      f.f(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_D)) {
    while ((i < len)) {
      f.f(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_J)) {
    while ((i < len)) {
      f.f(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_F)) {
    while ((i < len)) {
      f.f(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_C)) {
    while ((i < len)) {
      f.f($bC(this$.a[i]));
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_B)) {
    while ((i < len)) {
      f.f(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_S)) {
    while ((i < len)) {
      f.f(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_Z)) {
    while ((i < len)) {
      f.f(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    throw new $c_s_MatchError(this$);
  }
});
var $d_sc_ArrayOps$ = new $TypeData().i($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  eI: 1
}));
var $n_sc_ArrayOps$;
function $m_sc_ArrayOps$() {
  if ((!$n_sc_ArrayOps$)) {
    $n_sc_ArrayOps$ = new $c_sc_ArrayOps$();
  }
  return $n_sc_ArrayOps$;
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.m();
  while (it.q()) {
    f.f(it.h());
  }
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  switch ($thiz.A()) {
    case (-1): {
      return (!$thiz.m().q());
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
  var it = $thiz.m();
  var i = start;
  var y = (($m_jl_reflect_Array$().bM(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.q())) {
    $m_sr_ScalaRunTime$().gH(xs, i, it.h());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option($thiz, pf) {
  var sentinel = new $c_sc_IterableOnceOps$$anon$1($thiz);
  var it = $thiz.m();
  while (it.q()) {
    var x = pf.br(it.h(), sentinel);
    if ((x !== sentinel)) {
      return new $c_s_Some(x);
    }
  }
  return $m_s_None$();
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.A() === 0) ? (("" + start) + end) : $thiz.dt($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).az.k);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.az;
  if ((start.length !== 0)) {
    jsb.k = (("" + jsb.k) + start);
  }
  var it = $thiz.m();
  if (it.q()) {
    var obj = it.h();
    jsb.k = (("" + jsb.k) + obj);
    while (it.q()) {
      jsb.k = (("" + jsb.k) + sep);
      var obj$1 = it.h();
      jsb.k = (("" + jsb.k) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.k = (("" + jsb.k) + end);
  }
  return b;
}
function $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O($thiz, evidence$2) {
  if (($thiz.A() >= 0)) {
    var destination = evidence$2.b5($thiz.A());
    $thiz.bh(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$2.ak();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.m();
    while (it.q()) {
      var elem = it.h();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.J.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.J.r().w(jsElems);
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.jn = null;
  this.e0 = null;
  this.jn = head;
  this.e0 = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.mT = (function() {
  return this.jn.Y().m();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  f4: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.jo = null;
  $n_sc_StringOps$ = this;
  this.jo = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_StringOps$().jo));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.mn = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
$p.la = (function(this$, marginChar) {
  var sb = $ct_jl_StringBuilder__I__(new $c_jl_StringBuilder(), this$.length);
  var this$3 = new $c_sc_StringOps$$anon$1(this$, false);
  while ((this$3.am < this$3.cQ)) {
    var x0 = this$3.kT();
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
    sb.k = (("" + sb.k) + stripped);
  }
  return sb.k;
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  f9: 1
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
$p.en = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  fe: 1
}));
var $n_scg_CommonErrors$;
function $m_scg_CommonErrors$() {
  if ((!$n_scg_CommonErrors$)) {
    $n_scg_CommonErrors$ = new $c_scg_CommonErrors$();
  }
  return $n_scg_CommonErrors$;
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder$DeferredState() {
  this.gr = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.gO = (function() {
  var state = this.gr;
  if ((state === null)) {
    throw new $c_jl_IllegalStateException("uninitialized");
  }
  return state.Y();
});
$p.gV = (function(state) {
  if ((this.gr !== null)) {
    throw new $c_jl_IllegalStateException("already initialized");
  }
  this.gr = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  fl: 1
}));
/** @constructor */
function $c_sci_VectorStatics$() {
  this.gu = null;
  this.O = null;
  this.ay = null;
  this.bJ = null;
  this.e6 = null;
  this.gv = null;
  $n_sci_VectorStatics$ = this;
  this.gu = new $ac_O(0);
  this.O = new ($d_O.r().r().C)(0);
  this.ay = new ($d_O.r().r().r().C)(0);
  this.bJ = new ($d_O.r().r().r().r().C)(0);
  this.e6 = new ($d_O.r().r().r().r().r().C)(0);
  this.gv = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.dw = (function(a, elem) {
  var alen = a.a.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.B(0, ac, 0, alen);
  ac.a[alen] = elem;
  return ac;
});
$p.z = (function(a, elem) {
  var ac = $m_ju_Arrays$().Q(a, ((1 + a.a.length) | 0));
  ac.a[(((-1) + ac.a.length) | 0)] = elem;
  return ac;
});
$p.dx = (function(elem, a) {
  var ac = new $ac_O(((1 + a.a.length) | 0));
  var length = a.a.length;
  a.B(0, ac, 1, length);
  ac.a[0] = elem;
  return ac;
});
$p.u = (function(elem, a) {
  var ac = $objectGetClass(a).J.Q().J.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.B(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.gP = (function(level, a, f) {
  var i = 0;
  var len = a.a.length;
  if ((level === 0)) {
    while ((i < len)) {
      f.f(a.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    var l = (((-1) + level) | 0);
    while ((i < len)) {
      this.gP(l, a.a[i], f);
      i = ((1 + i) | 0);
    }
  }
});
$p.bF = (function(a, f) {
  var i = 0;
  while ((i < a.a.length)) {
    var v1 = a.a[i];
    var v2 = f.f(v1);
    if ((!Object.is(v1, v2))) {
      return this.n6(a, f, i, v2);
    }
    i = ((1 + i) | 0);
  }
  return a;
});
$p.n6 = (function(a, f, at, v2) {
  var ac = new $ac_O(a.a.length);
  if ((at > 0)) {
    a.B(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = f.f(a.a[i]);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.V = (function(n, a, f) {
  if ((n === 1)) {
    return this.bF(a, f);
  } else {
    var i = 0;
    while ((i < a.a.length)) {
      var v1 = a.a[i];
      var v2 = this.V((((-1) + n) | 0), v1, f);
      if ((v1 !== v2)) {
        return this.n7(n, a, f, i, v2);
      }
      i = ((1 + i) | 0);
    }
    return a;
  }
});
$p.n7 = (function(n, a, f, at, v2) {
  var ac = $objectGetClass(a).J.Q().J.U(a.a.length);
  if ((at > 0)) {
    a.B(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = this.V((((-1) + n) | 0), a.a[i], f);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.du = (function(suffix1, xs) {
  if ($is_sci_Iterable(xs)) {
    if ((xs.nR(((32 - suffix1.a.length) | 0)) <= 0)) {
      var x1$2 = xs.nQ();
      switch (x1$2) {
        case 0: {
          return null;
          break;
        }
        case 1: {
          return this.z(suffix1, xs.T());
          break;
        }
        default: {
          var suffix1b = $m_ju_Arrays$().Q(suffix1, ((suffix1.a.length + x1$2) | 0));
          xs.bh(suffix1b, suffix1.a.length, 2147483647);
          return suffix1b;
        }
      }
    } else {
      return null;
    }
  } else {
    var s = xs.A();
    if (((s > 0) && (s <= ((32 - suffix1.a.length) | 0)))) {
      var suffix1b$2 = $m_ju_Arrays$().Q(suffix1, ((suffix1.a.length + s) | 0));
      xs.m().bh(suffix1b$2, suffix1.a.length, 2147483647);
      return suffix1b$2;
    } else {
      return null;
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  fx: 1
}));
var $n_sci_VectorStatics$;
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$();
  }
  return $n_sci_VectorStatics$;
}
/** @constructor */
function $c_scm_MutationTracker$() {
}
$p = $c_scm_MutationTracker$.prototype = new $h_O();
$p.constructor = $c_scm_MutationTracker$;
/** @constructor */
function $h_scm_MutationTracker$() {
}
$h_scm_MutationTracker$.prototype = $p;
$p.kf = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  fL: 1
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
$p.aG = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.mE(x, y) : ((x instanceof $Char) ? this.mC(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.mE = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.mD(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.l;
      var hi = t.n;
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
$p.mD = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      return (x2 === $m_RTLong$().es(t.l, t.n));
    } else {
      return (false && yn.i(x2));
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.l;
    var hi$1 = t$1.n;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.l;
      var hi$2 = t$2.n;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return ($m_RTLong$().es(lo$1, hi$1) === x3$3);
    } else {
      return (false && yn.i(new $c_RTLong(lo$1, hi$1)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.mC = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $c_RTLong)) {
      var t = $uJ(y);
      var lo = t.l;
      var hi = t.n;
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
  gk: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  go: 1
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
$p.cZ = (function(xs, idx) {
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
$p.gH = (function(xs, idx, value) {
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
$p.ds = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.aP(), (x.aC() + "("), ",", ")");
});
$p.p = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($m_sci_ArraySeq$()) : new $c_sci_ArraySeq$ofRef(xs)));
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  gq: 1
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
$p.c = (function(hash, data) {
  var h = this.fe(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.fe = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.x = (function(hash, length) {
  return this.mf((hash ^ length));
});
$p.mf = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.dz = (function(lv) {
  var lo = lv.l;
  var hi = lv.n;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$p.bK = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.l0(dv);
    var hi = this$1.N;
    return (($m_RTLong$().es(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().h4(dv));
  }
});
$p.a2 = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.bK((+x));
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    return this.dz(new $c_RTLong(t.l, t.n));
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.cI = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  gs: 1
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
  gt: 1
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
$p.ma = (function(a) {
  return a;
});
var $d_sjs_js_defined$ = new $TypeData().i($c_sjs_js_defined$, "scala.scalajs.js.defined$", ({
  gz: 1
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
$p.nP = (function(interval, body) {
  return setTimeout((() => {
    body.Y();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  gA: 1
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
$p.nY = (function(seq) {
  if (false) {
    return seq.o8;
  } else {
    var result = [];
    seq.bt(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  gL: 1
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
$p.cG = (function(t) {
  return (!(false || (false || (false || (false || false)))));
});
var $d_s_util_control_NonFatal$ = new $TypeData().i($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  gO: 1
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
$p.c = (function(hash, data) {
  var h = this.fe(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.fe = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.x = (function(hash, length) {
  return this.bk((hash ^ length));
});
$p.bk = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.cd = (function(x, seed, ignorePrefix) {
  var arr = x.aA();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.aC());
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.c(h, $f_T__hashCode__I(x.aC()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.c(h, $m_sr_Statics$().a2(x.aB(i)));
      i = ((1 + i) | 0);
    }
    return this.x(h, arr);
  }
});
$p.o0 = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.m();
  while (iterator.q()) {
    var x = iterator.h();
    var h = $m_sr_Statics$().a2(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.c(h$2, a);
  h$2 = this.c(h$2, b);
  h$2 = this.fe(h$2, c);
  return this.x(h$2, n);
});
$p.nq = (function(xs, seed) {
  var it = xs.m();
  var h = seed;
  if ((!it.q())) {
    return this.x(h, 0);
  }
  var x0 = it.h();
  if ((!it.q())) {
    return this.x(this.c(h, $m_sr_Statics$().a2(x0)), 1);
  }
  var x1 = it.h();
  var initial = $m_sr_Statics$().a2(x0);
  h = this.c(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().a2(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.q()) {
    h = this.c(h, prev);
    var hash = $m_sr_Statics$().a2(it.h());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.c(h, hash);
      i = ((1 + i) | 0);
      while (it.q()) {
        h = this.c(h, $m_sr_Statics$().a2(it.h()));
        i = ((1 + i) | 0);
      }
      return this.x(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.bk(this.c(this.c(h0, rangeDiff), prev));
});
$p.k2 = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().bM(a);
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.c(h, $m_sr_Statics$().a2($m_sr_ScalaRunTime$().cZ(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().a2($m_sr_ScalaRunTime$().cZ(a, 0));
      h = this.c(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().a2($m_sr_ScalaRunTime$().cZ(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.c(h, prev);
        var hash = $m_sr_Statics$().a2($m_sr_ScalaRunTime$().cZ(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.c(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.c(h, $m_sr_Statics$().a2($m_sr_ScalaRunTime$().cZ(a, i)));
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bk(this.c(this.c(h0, rangeDiff), prev));
    }
  }
});
$p.nt = (function(start, step, last, seed) {
  return this.bk(this.c(this.c(this.c(seed, start), step), last));
});
$p.mW = (function(a, seed) {
  var h = seed;
  var l = a.o();
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.c(h, $m_sr_Statics$().a2(a.t(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().a2(a.t(0));
      h = this.c(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().a2(a.t(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.c(h, prev);
        var hash = $m_sr_Statics$().a2(a.t(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.c(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.c(h, $m_sr_Statics$().a2(a.t(i)));
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bk(this.c(this.c(h0, rangeDiff), prev));
    }
  }
});
$p.n4 = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.e())) {
    var head = elems.T();
    var tail = elems.aH();
    var hash = $m_sr_Statics$().a2(head);
    h = this.c(h, hash);
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
  return ((rangeState === 2) ? this.nt(initial, rangeDiff, prev, seed) : this.x(h, n));
});
$p.kb = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.c(h, (a.a[0] ? 1231 : 1237)), 1);
      break;
    }
    default: {
      var initial = (a.a[0] ? 1231 : 1237);
      h = this.c(h, initial);
      var h0 = h;
      var prev = (a.a[1] ? 1231 : 1237);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.c(h, prev);
        var hash = (a.a[i] ? 1231 : 1237);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.c(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.c(h, (a.a[i] ? 1231 : 1237));
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bk(this.c(this.c(h0, rangeDiff), prev));
    }
  }
});
$p.k3 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.c(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.c(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.c(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.c(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.c(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bk(this.c(this.c(h0, rangeDiff), prev));
    }
  }
});
$p.k4 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.c(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.c(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.c(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.c(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.c(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bk(this.c(this.c(h0, rangeDiff), prev));
    }
  }
});
$p.k5 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.c(h, $m_sr_Statics$().bK(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().bK(a.a[0]);
      h = this.c(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().bK(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.c(h, prev);
        var hash = $m_sr_Statics$().bK(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.c(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.c(h, $m_sr_Statics$().bK(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bk(this.c(this.c(h0, rangeDiff), prev));
    }
  }
});
$p.k6 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.c(h, $m_sr_Statics$().bK(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().bK(a.a[0]);
      h = this.c(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().bK(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.c(h, prev);
        var hash = $m_sr_Statics$().bK(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.c(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.c(h, $m_sr_Statics$().bK(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bk(this.c(this.c(h0, rangeDiff), prev));
    }
  }
});
$p.k7 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.c(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.c(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.c(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.c(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.c(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bk(this.c(this.c(h0, rangeDiff), prev));
    }
  }
});
$p.k8 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var t = a.a[0];
      return this.x(this.c($x_1, $m_sr_Statics$().dz(new $c_RTLong(t.l, t.n))), 1);
      break;
    }
    default: {
      var t$1 = a.a[0];
      var initial = $m_sr_Statics$().dz(new $c_RTLong(t$1.l, t$1.n));
      h = this.c(h, initial);
      var h0 = h;
      var t$2 = a.a[1];
      var prev = $m_sr_Statics$().dz(new $c_RTLong(t$2.l, t$2.n));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.c(h, prev);
        var t$3 = a.a[i];
        var hash = $m_sr_Statics$().dz(new $c_RTLong(t$3.l, t$3.n));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.c(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var t$4 = a.a[i];
            h = this.c($x_2, $m_sr_Statics$().dz(new $c_RTLong(t$4.l, t$4.n)));
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bk(this.c(this.c(h0, rangeDiff), prev));
    }
  }
});
$p.k9 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.c(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.c(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.c(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.c(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.c(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bk(this.c(this.c(h0, rangeDiff), prev));
    }
  }
});
$p.ka = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.c(h, 0), 1);
      break;
    }
    default: {
      h = this.c(h, 0);
      var h0 = h;
      var prev = 0;
      var rangeDiff = prev;
      var i = 2;
      while ((i < l)) {
        h = this.c(h, prev);
        if (((rangeDiff !== ((-prev) | 0)) || (rangeDiff === 0))) {
          h = this.c(h, 0);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.c(h, 0);
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = 0;
        i = ((1 + i) | 0);
      }
      return this.bk(this.c(this.c(h0, rangeDiff), prev));
    }
  }
});
function $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.bL(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $thiz.h7(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.fi(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.fi(new $c_s_util_Failure(nextError), transaction);
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.hV = null;
  this.hU = null;
  this.fB = false;
  this.hU = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.fB = false;
}
$p = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $p;
$p.dC = (function() {
  return this.hV;
});
$p.kh = (function(x$0) {
  this.hV = x$0;
});
$p.l3 = (function(subscription) {
  if (this.fB) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.hU.Y();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.kO = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.fB = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  cx: 1,
  aW: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.ii = null;
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
$p.dC = (function() {
  return this.ii;
});
$p.kh = (function(x$0) {
  this.ii = x$0;
});
$p.kO = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.l3 = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
});
var $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$, "com.raquo.laminar.api.Laminar$unsafeWindowOwner$", ({
  cR: 1,
  aW: 1
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
$p.kn = (function(scalaValue) {
  return scalaValue;
});
$p.kk = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  cY: 1,
  cW: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
var $d_Lcom_raquo_laminar_keys_CompositeKey = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey, "com.raquo.laminar.keys.CompositeKey", ({
  dj: 1,
  aa: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProp(name) {
  this.dT = null;
  this.dT = name;
}
$p = $c_Lcom_raquo_laminar_keys_EventProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProp() {
}
$h_Lcom_raquo_laminar_keys_EventProp.prototype = $p;
var $d_Lcom_raquo_laminar_keys_EventProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProp, "com.raquo.laminar.keys.EventProp", ({
  dn: 1,
  aa: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlAttr(name, codec) {
  this.dU = null;
  this.fL = null;
  this.dU = name;
  this.fL = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $p;
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  dp: 1,
  aa: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.dd = null;
  this.dd = name;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
function $isArrayOf_Lcom_raquo_laminar_keys_HtmlProp(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b1)));
}
var $d_Lcom_raquo_laminar_keys_HtmlProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlProp, "com.raquo.laminar.keys.HtmlProp", ({
  b1: 1,
  aa: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr(localName, codec, namespacePrefix) {
  this.fP = null;
  this.fO = null;
  this.eS = null;
  this.eT = null;
  this.fP = localName;
  this.fO = codec;
  var this$1 = (namespacePrefix.e() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.H() + ":") + localName)));
  this.eS = (this$1.e() ? localName : this$1.H());
  this.eT = (namespacePrefix.e() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().n9(namespacePrefix.H())));
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $p;
var $d_Lcom_raquo_laminar_keys_SvgAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr, "com.raquo.laminar.keys.SvgAttr", ({
  dr: 1,
  aa: 1
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
$p.cF = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  dx: 1,
  a1: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2, outer) {
  this.j1 = null;
  this.j1 = f$2;
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
$p.cF = (function(element) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.j1.f(element);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.aI || (!when))) {
    f();
  } else {
    this$2.aI = true;
    try {
      f();
    } finally {
      this$2.aI = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2, "com.raquo.laminar.modifiers.Modifier$$anon$2", ({
  dy: 1,
  a1: 1
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
  dB: 1,
  dz: 1
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
  dD: 1,
  dC: 1
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
  this.j3 = null;
  this.j3 = render$2;
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
$p.me = (function(value) {
  return this.j3.f(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  dG: 1,
  dE: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.ki(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().mw($thiz.Z(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.fZ = null;
  this.fZ = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.M = (function(modifiers) {
  var element = this.mi();
  modifiers.bt(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((modifier) => {
    modifier.cF(element);
  })));
  return element;
});
$p.mi = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().mr(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  dQ: 1,
  b4: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.j9 = null;
  this.j9 = name;
}
$p = $c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $p;
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  dR: 1,
  b4: 1
}));
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.eV) << 24) >> 24) === 0)) {
    $thiz.g0 = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
    $thiz.eV = (((32 | $thiz.eV) << 24) >> 24);
  }
  return $thiz.g0;
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.eV) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.g0);
}
/** @constructor */
function $c_jl_Character$() {
  this.g0 = null;
  this.eV = 0;
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.nZ = (function(codePoint) {
  if ((!((codePoint >= 0) && (codePoint <= 1114111)))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.mx = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))));
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0);
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0);
  } else {
    var p = $m_ju_Arrays$().mg($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
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
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  dW: 1,
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
$p.nr = (function(s, radix) {
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
    var digit = $m_jl_Character$().mx(s.charCodeAt(i), radix);
    result = ((result * radix) + digit);
    if (((digit === (-1)) || (result > maxAbsValue))) {
      $ps_jl_Integer$__fail$1__T__E(s);
    }
    i = ((1 + i) | 0);
  }
  return (negative ? (((-result) | 0.0) | 0) : ((result | 0.0) | 0));
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  e2: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
/** @constructor */
function $c_jl_StackTraceElement(declaringClass, methodName, fileName, lineNumber, columnNumber) {
  this.dg = null;
  this.dW = null;
  this.dh = null;
  this.di = 0;
  this.df = 0;
  this.dg = declaringClass;
  this.dW = methodName;
  this.dh = fileName;
  this.di = lineNumber;
  this.df = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.i = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.dh === that.dh) && (this.di === that.di)) && (this.df === that.df)) && (this.dg === that.dg)) && (this.dW === that.dW)));
});
$p.s = (function() {
  var result = "";
  if ((this.dg !== "<jscode>")) {
    result = ((("" + result) + this.dg) + ".");
  }
  result = (("" + result) + this.dW);
  if ((this.dh === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.dh);
    if ((this.di >= 0)) {
      result = ((result + ":") + this.di);
      if ((this.df >= 0)) {
        result = ((result + ":") + this.df);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.v = (function() {
  return (((($f_T__hashCode__I(this.dg) ^ $f_T__hashCode__I(this.dW)) ^ $f_T__hashCode__I(this.dh)) ^ this.di) ^ this.df);
});
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ba)));
}
var $d_jl_StackTraceElement = new $TypeData().i($c_jl_StackTraceElement, "java.lang.StackTraceElement", ({
  ba: 1,
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
$p.na = (function(value, offset, count) {
  var end = ((offset + count) | 0);
  if ((((offset < 0) || (end < offset)) || (end > value.a.length))) {
    throw new $c_jl_StringIndexOutOfBoundsException();
  }
  var result = "";
  var i = offset;
  while ((i !== end)) {
    result = (result + ("" + $cToS(value.a[i])));
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_jl_String$ = new $TypeData().i($c_jl_String$, "java.lang.String$", ({
  ed: 1,
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
  $thiz.jd = s;
  $thiz.je = writableStackTrace;
  if (writableStackTrace) {
    $thiz.mG();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jd = null;
    this.je = false;
    this.jc = null;
    this.eX = null;
  }
  gW(cause) {
    return this;
  }
  em() {
    return this.jd;
  }
  mG() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.X : this);
    this.jc = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  mP() {
    if ((this.eX === null)) {
      if (this.je) {
        this.eX = $m_jl_StackTrace$().mF(this.jc);
      } else {
        this.eX = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.eX;
  }
  s() {
    var className = $objectClassName(this);
    var message = this.em();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  v() {
    return $c_O.prototype.v.call(this);
  }
  i(that) {
    return $c_O.prototype.i.call(this, that);
  }
  get "message"() {
    var m = this.em();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.s();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.t)));
}
/** @constructor */
function $c_s_$less$colon$less$() {
  this.g8 = null;
  $n_s_$less$colon$less$ = this;
  this.g8 = new $c_s_$less$colon$less$$anon$1();
}
$p = $c_s_$less$colon$less$.prototype = new $h_O();
$p.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
}
$h_s_$less$colon$less$.prototype = $p;
var $d_s_$less$colon$less$ = new $TypeData().i($c_s_$less$colon$less$, "scala.$less$colon$less$", ({
  es: 1,
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
    $m_sr_ScalaRunTime$().gH(dest, j, $m_sr_ScalaRunTime$().cZ(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
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
$p.kA = (function(it, evidence$3) {
  var n = it.A();
  if ((n > (-1))) {
    var elements = evidence$3.b5(n);
    var iterator = it.m();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().gH(elements, i, iterator.h());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$3.ak();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.m();
    while (iterator$2.q()) {
      var elem = iterator$2.h();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.J.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.J.r().w(jsElems);
  }
});
$p.el = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.J.Z && $objectGetClass(dest).J.R(srcClass.J))) {
    src.B(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.kx = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.a.length !== ys.a.length)) {
    return false;
  }
  var len = xs.a.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().aG(xs.a[i], ys.a[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  eu: 1,
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
$p.o6 = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $m_scm_ArraySeq$().gy : new $c_scm_ArraySeq$ofRef(xs)));
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
$p.kY = (function(xo) {
  return (xo.e() ? $m_sc_Iterable$().bs() : new $c_sc_Iterable$$anon$1(xo.H()));
});
var $d_s_Option$ = new $TypeData().i($c_s_Option$, "scala.Option$", ({
  eC: 1,
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
  return ($thiz.bN(x) ? $thiz.f(x) : default$1.f(x));
}
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, elems) {
  if ((elems === $thiz)) {
    $thiz.bf($m_scm_Buffer$().fa(elems));
  } else {
    var it = elems.m();
    while (it.q()) {
      $thiz.b2(it.h());
    }
  }
  return $thiz;
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.lA = null;
  this.lJ = null;
  this.lB = null;
  this.lE = null;
  this.lF = null;
  this.lD = null;
  this.lC = null;
  this.lz = null;
  this.lK = null;
  this.lx = null;
  this.lI = null;
  this.ly = null;
  this.lG = null;
  this.lH = null;
  $n_s_reflect_ClassTag$ = this;
  this.lA = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.lJ = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.lB = $m_s_reflect_ManifestFactory$CharManifest$();
  this.lE = $m_s_reflect_ManifestFactory$IntManifest$();
  this.lF = $m_s_reflect_ManifestFactory$LongManifest$();
  this.lD = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.lC = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.lz = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.lK = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.lx = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.lI = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.ly = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.lG = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.lH = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.jZ = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  fP: 1,
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
$p.s = (function() {
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
$p.s = (function() {
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
$p.s = (function() {
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
$p.s = (function() {
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
$p.s = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.f5 = false;
  this.f5 = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.s = (function() {
  return ("" + this.f5);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  gj: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.a0 = 0;
  this.a0 = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.s = (function() {
  return ("" + this.a0);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  gm: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.P = null;
  this.P = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.s = (function() {
  return ("" + this.P);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  gp: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.a1 = 0;
  this.jR = 0;
  this.lM = 0;
  this.lL = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.a1 = $f_T__hashCode__I("Seq");
  this.jR = $f_T__hashCode__I("Map");
  this.lM = $f_T__hashCode__I("Set");
  this.lL = this.o0($m_sci_Nil$(), this.jR);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.nI = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.mW(xs, this.a1) : ((xs instanceof $c_sci_List) ? this.n4(xs, this.a1) : this.nq(xs, this.a1)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  gQ: 1,
  gP: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_Ladversaries_Adversary$() {
  this.fp = null;
  this.hc = null;
  this.hi = null;
  this.hd = null;
  this.hf = null;
  this.he = null;
  this.hg = null;
  this.hh = null;
  this.hb = null;
  $n_Ladversaries_Adversary$ = this;
  this.fp = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Brandenburg-Prussia", $m_sci_Vector$().bu($m_sr_ScalaRunTime$().p(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 Town to land #3.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-3-2222-3333", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-3-2222-3333", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-3-222-3333", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "1-3-222-3333", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "3-222-3333", $m_s_None$())]))), $m_s_None$(), "On each board with Town/City, add 1 Town to a land without Town.", $m_sci_Nil$().bO($m_sr_ScalaRunTime$().p(new ($d_T.r().C)(["9 (3/3/3)", "9 (3/3/3)", "10 (3/4/3)", "11 (4/4/3)", "11 (4/4/3)", "12 (4/4/4)"])))));
  this.hc = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("England", $m_sci_Vector$().bu($m_sr_ScalaRunTime$().p(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "Invader Build Cards affect matching lands without Invaders if they are adjacent to at least 2 Town/City.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 City to land #1 and 1 Town to land #2", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage(), "Put the \"High Immigration\" tile on the Invader board, to the left of \"Ravage\". The Invaders take this Build action each Invader phase before Ravaging. Cards slide left from Ravage to it, and from it to the discard pile. Remove the tile when a Stage II card slides onto it, putting that card in the discard.", new $c_s_Some(4)), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage(), "Put the \"High Immigration\" tile on the Invader board, to the left of \"Ravage\". The Invaders take this Build action each Invader phase before Ravaging. Cards slide left from Ravage to it, and from it to the discard pile. ", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Town/City have +1 Health.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "During Setup, add an additional Fear to the Fear Pool per player in the game.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage(), "During any Invader Phase where you resolve no Fear Cards, perform the Build from High Immigration twice. (This has no effect if no card is on the extra Build slot.)", $m_s_None$())]))), new $c_s_Some("If 7 or more Town/City are ever in a single land, the Invaders win."), "On each board with Town/City, Build in the land with the most Town/City.", $m_sci_Nil$().bO($m_sr_ScalaRunTime$().p(new ($d_T.r().C)(["10 (3/4/3)", "11 (4/4/3)", "13 (4/5/4)", "14 (4/5/5)", "14 (4/5/5)", "13 (4/5/4)"])))));
  this.hi = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Sweden", $m_sci_Vector$().bu($m_sr_ScalaRunTime$().p(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "If the Invaders do at least 6 Damage to the land during Ravage, add an extra Blight. The additional Blight does not destroy Presence or cause cascades.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 City to land #4. On boards where land #4 starts with Blight, put that Blight in land #5 instead.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Town deal 3 Damage. City deal 5 Damage.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "After adding all other Invaders, Accelerate the Invader Deck. On each board, add 1 Town to the land of that terrain with the fewest Invaders.", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "When Ravaging adds at least 1 Blight to a land, also add 1 Town to an adjacent land without Town/City. Cascading Blight does not cause this effect.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "During setup, on each board add 1 Town and 1 Blight to land #8. The Blight comes from the box, not the Blight Card.", $m_s_None$())]))), $m_s_None$(), "After Invaders Explore into each land this Phase, if that land has at least as many Invaders as Dahan, replace 1 Dahan with 1 Town.", $m_sci_Nil$().bO($m_sr_ScalaRunTime$().p(new ($d_T.r().C)(["9 (3/3/3)", "10 (3/4/3)", "10 (3/4/3)", "11 (3/4/4)", "12 (4/4/4)", "13 (4/4/5)"])))));
  this.hd = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("France", $m_sci_Vector$().bu($m_sr_ScalaRunTime$().p(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "Except during Setup: After Invaders successfully Explore into a land which had no Town/City, add 1 Explorer there.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "put the \"Slave Rebellion\" event under the top 3 cards of the Event Deck./City, add 1 Explorer there.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "After Invaders Build in a land with 2 Explorer or more, replace all but 1 Explorer there with an equal number of Town.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "on each board add 1 Town to the highest-numbered land without Town. Add 1 Town to land #1.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "Whenever Invaders Build a Coastal City, add 1 Town to the adjacent land with the fewest Town.", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "When you remove Blight from the board, put it here instead of onto the Blight Card. As soon as you have 3 Blight per player here, move it all back to the Blight Card.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "After resolving an Explore Card, on each board add 1 Explorer to a land without any. Fear Card effects never remove Explorer. If one would, you may instead Push that Explorer.", $m_s_None$())]))), new $c_s_Some("Before Setup, return all but 7 Town per player to the box. Invaders win if you ever cannot place a Town."), "After Exploring, on each board, pick a land of the shown terrain. If it has Town/City, add 1 Blight. Otherwise, add 1 Town.", $m_sci_Nil$().bO($m_sr_ScalaRunTime$().p(new ($d_T.r().C)(["9 (3/3/3)", "10 (3/4/3)", "11 (4/4/3)", "12 (4/4/4)", "13 (4/5/4)", "14 (4/5/5)"])))));
  this.hf = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Habsburg Monarchy (Livestock)", $m_sci_Vector$().bu($m_sr_ScalaRunTime$().p(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "After the normal Build Step: In each land matching a Build Card, Gather 1 Town from a land not matching a Build Card. (In board/land order.)", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board, add 1 Town to land #2 and 1 Town to the highest-numbered land without Setup symbols.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "when Invaders would Build 1 City in an Inland land, they instead Build 2 Town.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-2222-33333", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "Town in lands without Blight are Durable: they have +2 Health, and \"Destroy Town\" effects instead deal 2 Damage (to those Town only) per Town they could Destroy. (\"Destroy all Town\" works normally.)", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Put the Habsburg Reminder Card under the top 5 Invader Cards. When Revealed, on each board, add 1 City to a Coastal land without City and 1 Town to the 3 Inland lands with the fewest Blight.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Ravages do +2 Damage (total) if any adjacent lands have Town. (This does not cause lands without Invaders to Ravage.)", $m_s_None$())]))), new $c_s_Some("Track how many Blight come off the Blight Card during Ravages that do 8+ Damage to the land. If that number ever exceeds players, the Invaders win."), "After Exploring: On each board with 4 or fewer Blight, add 1 Town to a land without Town/Blight. On each board with 2 or fewer Blight, do so again.", $m_sci_Nil$().bO($m_sr_ScalaRunTime$().p(new ($d_T.r().C)(["10 (3/4/3)", "11 (4/5/2)", "12 (4/5/3)", "12 (4/5/3)", "13 (4/6/3)", "14 (5/6/3)"])))));
  this.he = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Habsburg Mining Expedition", $m_sci_Vector$().bu($m_sr_ScalaRunTime$().p(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "Lands with 3 or more Invaders are Mining lands.", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "When Blight added by a Ravage Action would cascade, instead Upgrade 1 Explorer/Town (before Dahan counterattack.)", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), $m_sc_StringOps$().la("In Mining lands: Disease and modifiers to Disease affect Ravage Actions as though they were Build Actions.", 124), $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), $m_sc_StringOps$().la("In Mining lands: During the Build Step, Build Cards cause Ravage Actions (instead of Build Actions).", 124), $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Setup: Add 1 Explorer in each land with no Dahan. Add 1 Disease and 1 City in the highest-numbered land with a Town Setup symbol.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__AfterBuild__Ladversaries_Stage(), "On each board: Choose a land with Explorer. Upgrade 1 Explorer there.", new $c_s_Some(5)), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Remove the Stage II 'Coastal Lands' card before randomly choosing Stage II cards. Place the 'Salt Deposits' card in place of the 2nd Stage II card.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-2S22-33333, where S is the Salt Deposits card. Escalation ignores S", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__AfterBuild__Ladversaries_Stage(), "On each board: Choose a land with Explorer. Build there, then Upgrade 1 Explorer. (Build normally in a Mining land.)", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "On boards with 3 or fewer Blight: Add +1 Explorer in each land successfully explored. (Max. 2 lands per board per Explore Card.)", $m_s_None$())]))), new $c_s_Some("At the end of the Fasticon.png Phase, the Invaders win if any land has at least 8 total Invaders/Blight (combined)."), "After Advancing Invader Cards: On each board, Explore in 2 lands whose terrains don't match a Ravage or Build Card (no source required).", $m_sci_Nil$().bO($m_sr_ScalaRunTime$().p(new ($d_T.r().C)(["9 (3/3/3)", "10 (3/3/4)", "11 (3/4/4)", "12 (4/4/4)", "13 (4/5/4)", "13 (4/5/4)"])))));
  this.hg = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Russia", $m_sci_Vector$().bu($m_sr_ScalaRunTime$().p(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board, add 1 Beasts and 1 Explorer to the highest-numbered land without Town/City", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Explorer do +1 Damage. When Ravage adds Blight to a land (including cascades), Destroy 1 Beasts in that land.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "The first time each Action would Destroy Explorer: If possible, 1 of those Explorer is instead Pushed; 1 Fear when you do so.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Ravage Cards also match lands with 3 or more Explorer. (If the land already matched the Ravage Card, it still Ravages just once.)", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-2-3-2-3-2-3-2-33", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Put an unused Stage II Invader Card under the top 3 Fear Cards, and an unused Stage III Card under the top 7 Fear Cards.", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "When a face down invader card in the fear deck is revealed, immediately place it in the Build space (face-up).", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "After the Ravage Step of turn 2+, on each board where it added no Blight: In the land with the most Explorer (min. 1), add 1 Explorer and 1 Town.", $m_s_None$())]))), new $c_s_Some("Put Beasts Destroyed by Adversary rules on this panel. If there are ever more Beasts on this panel than on the island, the Invaders win."), "Add 2 Explorer (total) among lands with Beasts. If you can't, instead add 2 Explorer among lands with Beasts on a different board.", $m_sci_Nil$().bO($m_sr_ScalaRunTime$().p(new ($d_T.r().C)(["10 (3/3/4)", "11 (4/3/4)", "11 (4/4/3)", "12 (4/4/4)", "13 (4/5/4)", "14 (5/5/4)"])))));
  this.hh = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Scotland", $m_sci_Vector$().bu($m_sr_ScalaRunTime$().p(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "After Setup, in Coastal lands, Explore Cards add 1 Town instead of 1 Explorer . \"Coastal Lands\" Invader cards do this for maximum 2 lands per board.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "Add 1 City to land #2. Place \"Coastal Lands\" as the 3rd Stage II card, and move the two Stage II Cards above it up by one. ", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-22-1-C2-33333", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "In Coastal lands, Build Cards affect lands without Invaders, so long as there is an adjacent City.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-22-3-C2-3333", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "After a Ravage Action adds Blight to a Coastal Land, add 1 Blight to that board's Ocean (without cascading). Treat the Ocean as a Coastal Wetland for this rule and for Blight removal/movement.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__AfterRavage__Ladversaries_Stage(), "Add 1 Town to each Inland land that matches a Ravage card and is within 1 Range of Town/City.", $m_s_None$())]))), new $c_s_Some("If the number of Coastal lands with City is ever greater than (2 x # of boards), the Invaders win."), "On the single board with the most Coastal Town/City, add 1 Town to the N lands with the fewest Town (N = # of players.)", $m_sci_Nil$().bO($m_sr_ScalaRunTime$().p(new ($d_T.r().C)(["10 (3/4/3)", "11 (4/4/3)", "13 (4/5/4)", "14 (5/5/4)", "15 (5/6/4)", "16 (6/6/4)"])))));
  this.hb = $m_sci_Nil$().bO($m_sr_ScalaRunTime$().p(new ($d_Ladversaries_Adversary.r().C)([this.fp, this.hc, this.hi, this.hd, this.hf, this.he, this.hg, this.hh])));
}
$p = $c_Ladversaries_Adversary$.prototype = new $h_O();
$p.constructor = $c_Ladversaries_Adversary$;
/** @constructor */
function $h_Ladversaries_Adversary$() {
}
$h_Ladversaries_Adversary$.prototype = $p;
var $d_Ladversaries_Adversary$ = new $TypeData().i($c_Ladversaries_Adversary$, "adversaries.Adversary$", ({
  c5: 1,
  aq: 1,
  bV: 1
}));
var $n_Ladversaries_Adversary$;
function $m_Ladversaries_Adversary$() {
  if ((!$n_Ladversaries_Adversary$)) {
    $n_Ladversaries_Adversary$ = new $c_Ladversaries_Adversary$();
  }
  return $n_Ladversaries_Adversary$;
}
function $s_Ladversaries_Stage$__Setup__Ladversaries_Stage() {
  $m_Ladversaries_Stage$();
  return $t_Ladversaries_Stage$__Setup;
}
function $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage() {
  $m_Ladversaries_Stage$();
  return $t_Ladversaries_Stage$__DeckOrder;
}
function $s_Ladversaries_Stage$__AfterRavage__Ladversaries_Stage() {
  $m_Ladversaries_Stage$();
  return $t_Ladversaries_Stage$__AfterRavage;
}
function $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage() {
  $m_Ladversaries_Stage$();
  return $t_Ladversaries_Stage$__Ravage;
}
function $s_Ladversaries_Stage$__AfterBuild__Ladversaries_Stage() {
  $m_Ladversaries_Stage$();
  return $t_Ladversaries_Stage$__AfterBuild;
}
function $s_Ladversaries_Stage$__Build__Ladversaries_Stage() {
  $m_Ladversaries_Stage$();
  return $t_Ladversaries_Stage$__Build;
}
function $s_Ladversaries_Stage$__Explore__Ladversaries_Stage() {
  $m_Ladversaries_Stage$();
  return $t_Ladversaries_Stage$__Explore;
}
function $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage() {
  $m_Ladversaries_Stage$();
  return $t_Ladversaries_Stage$__RuleChange;
}
function $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage() {
  $m_Ladversaries_Stage$();
  return $t_Ladversaries_Stage$__HighImmigration;
}
/** @constructor */
function $c_Ladversaries_Stage$() {
  $n_Ladversaries_Stage$ = this;
  $t_Ladversaries_Stage$__Setup = new $c_Ladversaries_Stage$$anon$1("Setup", 0, this);
  $t_Ladversaries_Stage$__DeckOrder = new $c_Ladversaries_Stage$$anon$1("DeckOrder", 1, this);
  $t_Ladversaries_Stage$__AfterRavage = new $c_Ladversaries_Stage$$anon$1("AfterRavage", 2, this);
  $t_Ladversaries_Stage$__Ravage = new $c_Ladversaries_Stage$$anon$1("Ravage", 3, this);
  $t_Ladversaries_Stage$__AfterBuild = new $c_Ladversaries_Stage$$anon$1("AfterBuild", 4, this);
  $t_Ladversaries_Stage$__Build = new $c_Ladversaries_Stage$$anon$1("Build", 5, this);
  $t_Ladversaries_Stage$__Explore = new $c_Ladversaries_Stage$$anon$1("Explore", 6, this);
  $t_Ladversaries_Stage$__RuleChange = new $c_Ladversaries_Stage$$anon$1("RuleChange", 7, this);
  $t_Ladversaries_Stage$__HighImmigration = new $c_Ladversaries_Stage$$anon$1("HighImmigration", 8, this);
  $s_Ladversaries_Stage$__Setup__Ladversaries_Stage();
  $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage();
  $s_Ladversaries_Stage$__AfterRavage__Ladversaries_Stage();
  $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage();
  $s_Ladversaries_Stage$__AfterBuild__Ladversaries_Stage();
  $s_Ladversaries_Stage$__Build__Ladversaries_Stage();
  $s_Ladversaries_Stage$__Explore__Ladversaries_Stage();
  $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage();
  $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage();
}
$p = $c_Ladversaries_Stage$.prototype = new $h_O();
$p.constructor = $c_Ladversaries_Stage$;
/** @constructor */
function $h_Ladversaries_Stage$() {
}
$h_Ladversaries_Stage$.prototype = $p;
var $d_Ladversaries_Stage$ = new $TypeData().i($c_Ladversaries_Stage$, "adversaries.Stage$", ({
  c7: 1,
  aq: 1,
  bW: 1
}));
var $n_Ladversaries_Stage$;
function $m_Ladversaries_Stage$() {
  if ((!$n_Ladversaries_Stage$)) {
    $n_Ladversaries_Stage$ = new $c_Ladversaries_Stage$();
  }
  return $n_Ladversaries_Stage$;
}
class $c_Lcom_raquo_airstream_core_AirstreamError extends $c_jl_Throwable {
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_AirstreamError$() {
  this.fr = null;
  this.hj = null;
  this.hk = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.fr = $m_scm_Buffer$().k1($m_sr_ScalaRunTime$().p(new ($d_F1.r().C)([])));
  this.hj = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    try {
      console.error(((this.d1(err) + "\n") + this.mO(err, "\n")));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error("Error in AirstreamError.consoleErrorCallback:");
      console.error(e$2);
    }
  }));
  this.hk = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => {
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    var $x_1 = err$2;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.X : $x_1);
  }));
  this.nu(this.hj);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.d1 = (function(e) {
  try {
    var errorMessage = e.em();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).gT() + ": ") + errorMessage);
});
$p.mO = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().o6(err.mP()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.mm = (function(message, cause) {
  return ((message + "; cause: ") + (cause.e() ? $m_s_None$() : new $c_s_Some(this.d1(cause.H()))));
});
$p.nu = (function(fn) {
  this.fr.b2(fn);
});
$p.bG = (function(err) {
  var this$1 = this.fr;
  var it = this$1.m();
  while (it.q()) {
    var x0 = it.h();
    try {
      x0.f(err);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = this.hk;
      if (((x0 === null) ? (x$2 === null) : x0.i(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.X : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().nP(0.0, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((e$2) => (() => {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.X : e$2);
      }))(e$2)));
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$, "com.raquo.airstream.core.AirstreamError$", ({
  cd: 1,
  aq: 1,
  bW: 1
}));
var $n_Lcom_raquo_airstream_core_AirstreamError$;
function $m_Lcom_raquo_airstream_core_AirstreamError$() {
  if ((!$n_Lcom_raquo_airstream_core_AirstreamError$)) {
    $n_Lcom_raquo_airstream_core_AirstreamError$ = new $c_Lcom_raquo_airstream_core_AirstreamError$();
  }
  return $n_Lcom_raquo_airstream_core_AirstreamError$;
}
function $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V($thiz) {
  $thiz.bU(true);
  $thiz.ep((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().lg(onNext, $m_s_PartialFunction$().eZ, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.eo()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.eo()) {
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
  var x = $thiz.d4();
  if ((x === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().aT($m_sr_ScalaRunTime$().p(new ($d_F0.r().C)([])));
    $thiz.ep(newArray);
    return newArray;
  } else {
    return x;
  }
}
var $d_Lcom_raquo_airstream_core_Observer = new $TypeData().i(1, "com.raquo.airstream.core.Observer", ({
  au: 1,
  al: 1,
  a4: 1
}));
function $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($thiz, value, r) {
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.me(value));
}
function $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($thiz, nodes, renderableSeq) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    ($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(nodes, null, null)).bt(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((_$9) => {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().dv(element$2, _$9, (void 0));
    }))(element)));
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$1() {
  this.id = null;
  this.ie = false;
}
$p = $c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$1() {
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = $p;
$p.no = (function() {
  if ((!this.ie)) {
    this.id = new $c_Lcom_raquo_laminar_keys_EventProp("DOMContentLoaded");
    this.ie = true;
  }
  return this.id;
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$$anon$1, "com.raquo.laminar.api.Laminar$$anon$1", ({
  cP: 1,
  aZ: 1,
  d3: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.de = null;
  this.fR = null;
  this.fS = null;
  this.de = eventProcessor;
  this.fR = ((ev) => {
    var processor = eventProcessor.eQ;
    var this$2 = processor.f(ev);
    if ((!this$2.e())) {
      callback.f(this$2.H());
    }
  });
  this.fS = (() => {
    var outer = null;
    outer = this;
    var this$3 = ({});
    if ((outer === null)) {
      throw new $c_jl_NullPointerException();
    }
    this$3.capture = outer.de.eR;
    this$3.passive = outer.de.fK;
    return this$3;
  })();
}
$p = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $p;
$p.cF = (function(element) {
  this.mh(element, false);
});
$p.mh = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().lT(element.aW, this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.fQ, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().nx(element.aW, this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().o1(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().ey(element.bH, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.f(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().lb(element.bH, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner$1) => {
      activate.f(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.s = (function() {
  return (("EventListener(" + this.de.dc.dT) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  du: 1,
  a1: 1,
  b2: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeyUpdater(key, values, update) {
  this.iY = null;
  this.j0 = null;
  this.iZ = null;
  this.iY = key;
  this.j0 = values;
  this.iZ = update;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeyUpdater;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeyUpdater() {
}
$h_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = $p;
$p.cF = (function(element) {
  this.gI(element);
});
$p.gI = (function(element) {
  element.nm(this.iY);
  var observable = this.j0;
  var onNext = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    this.iZ.k0(element, value, this);
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().nS(element.bH, observable, onNext);
});
var $d_Lcom_raquo_laminar_modifiers_KeyUpdater = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeyUpdater, "com.raquo.laminar.modifiers.KeyUpdater", ({
  dv: 1,
  a1: 1,
  b2: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.fX = null;
  this.j6 = null;
  this.j7 = null;
  this.j6 = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().n3(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.j7 = container;
  this.n8();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.f9 = (function() {
  return this.fX;
});
$p.ki = (function(x$0) {
  this.fX = x$0;
});
$p.n8 = (function() {
  this.fX.jT();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().dv(this, this.j6, (void 0));
});
$p.Z = (function() {
  return this.j7;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  dM: 1,
  an: 1,
  b3: 1
}));
function $isArrayOf_Lcom_raquo_laminar_tags_CustomHtmlTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dP)));
}
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.J.Z) {
    return ($thiz.J.Q().gT() + "[]");
  } else {
    var name = $thiz.J.N;
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
  this.g1 = null;
  this.J = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.s = (function() {
  return ((this.J.Y ? "interface " : (this.J.X ? "" : "class ")) + this.J.N);
});
$p.gT = (function() {
  if ((this.g1 === null)) {
    this.g1 = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.g1;
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  dX: 1,
  a: 1,
  W: 1
}));
function $ct_jl_Exception__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_Exception extends $c_jl_Throwable {
}
var $d_jl_Exception = new $TypeData().i($c_jl_Exception, "java.lang.Exception", ({
  E: 1,
  t: 1,
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
  this.lw = null;
  $n_s_Predef$ = this;
  this.lw = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  eF: 1,
  ey: 1,
  ez: 1
}));
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$();
  }
  return $n_s_Predef$;
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.dj = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.dj = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.bs = (function() {
  return this.dj.km($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.aU = (function(it) {
  return this.dj.gQ(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.b6 = (function() {
  return this.dj.kR($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.cH = (function(elems) {
  return this.dj.gQ(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.dl = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.dl = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.bs = (function() {
  return this.dl.bs();
});
$p.aU = (function(it) {
  return this.dl.aU(it);
});
$p.b6 = (function() {
  return this.dl.b6();
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
$p.f = (function(v1) {
  return this;
});
var $d_sc_IterableOnceOps$$anon$1 = new $TypeData().i($c_sc_IterableOnceOps$$anon$1, "scala.collection.IterableOnceOps$$anon$1", ({
  eZ: 1,
  aI: 1,
  e: 1
}));
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.A();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1));
    } else {
      var i = 0;
      var it = $thiz.m();
      while (it.q()) {
        if ((i === otherSize)) {
          return 1;
        }
        it.h();
        i = ((1 + i) | 0);
      }
      return ((i - otherSize) | 0);
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).gL(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().K : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.m();
  while (($thiz.q() && those.q())) {
    if ((!$m_sr_BoxesRunTime$().aG($thiz.h(), those.h()))) {
      return false;
    }
  }
  return ($thiz.q() === those.q());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.K = null;
  $n_sc_Iterator$ = this;
  this.K = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
$p.b6 = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$p.bs = (function() {
  return this.K;
});
$p.aU = (function(source) {
  return source.m();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  f0: 1,
  G: 1,
  a: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
/** @constructor */
function $c_sc_View$() {
}
$p = $c_sc_View$.prototype = new $h_O();
$p.constructor = $c_sc_View$;
/** @constructor */
function $h_sc_View$() {
}
$h_sc_View$.prototype = $p;
$p.kB = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((x3) => (() => x3.m()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().gS(it))));
});
$p.b6 = (function() {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((it$2$2) => $m_sc_View$().kB(it$2$2))));
});
$p.bs = (function() {
  return $m_sc_View$Empty$();
});
$p.aU = (function(source) {
  return this.kB(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  fb: 1,
  G: 1,
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
function $c_sci_LazyList$State$Cons(head, tail) {
  this.jt = null;
  this.ju = null;
  this.jt = head;
  this.ju = tail;
}
$p = $c_sci_LazyList$State$Cons.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$State$Cons;
/** @constructor */
function $h_sci_LazyList$State$Cons() {
}
$h_sci_LazyList$State$Cons.prototype = $p;
$p.T = (function() {
  return this.jt;
});
$p.al = (function() {
  return this.ju;
});
var $d_sci_LazyList$State$Cons = new $TypeData().i($c_sci_LazyList$State$Cons, "scala.collection.immutable.LazyList$State$Cons", ({
  fn: 1,
  bz: 1,
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
$p.gU = (function() {
  throw new $c_ju_NoSuchElementException("head of empty lazy list");
});
$p.al = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
});
$p.T = (function() {
  this.gU();
});
var $d_sci_LazyList$State$Empty$ = new $TypeData().i($c_sci_LazyList$State$Empty$, "scala.collection.immutable.LazyList$State$Empty$", ({
  fo: 1,
  bz: 1,
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
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  fq: 1,
  f6: 1,
  a: 1
}));
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$();
  }
  return $n_sci_Map$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fO)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(f) {
  this.jI = null;
  this.jI = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855() {
}
$h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = $p;
$p.Y = (function() {
  return (0, this.jI)();
});
var $d_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855 = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855, "scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855", ({
  ge: 1,
  bX: 1,
  ay: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(f) {
  this.jJ = null;
  this.jJ = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28() {
}
$h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = $p;
$p.f = (function(x0) {
  return (0, this.jJ)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28, "scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28", ({
  gf: 1,
  aI: 1,
  e: 1
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
$p.s = (function() {
  return "<function1>";
});
$p.f = (function(x) {
  return this.br(x, $m_s_PartialFunction$().eZ);
});
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  gn: 1,
  t: 1,
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
$p.kF = (function(f) {
  return ((arg1$2) => f.f(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  gu: 1,
  gv: 1,
  gw: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gN)));
}
/** @constructor */
function $c_LMain$AdversarySelector(adversary, level) {
  this.bw = null;
  this.b9 = 0;
  this.bw = adversary;
  this.b9 = level;
}
$p = $c_LMain$AdversarySelector.prototype = new $h_O();
$p.constructor = $c_LMain$AdversarySelector;
/** @constructor */
function $h_LMain$AdversarySelector() {
}
$h_LMain$AdversarySelector.prototype = $p;
$p.aP = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().c(acc, $f_T__hashCode__I("AdversarySelector"));
  acc = $m_sr_Statics$().c(acc, $m_sr_Statics$().a2(this.bw));
  acc = $m_sr_Statics$().c(acc, this.b9);
  return $m_sr_Statics$().x(acc, 2);
});
$p.i = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_LMain$AdversarySelector)) {
    if ((this.b9 === x$0.b9)) {
      var x = this.bw;
      var x$2 = x$0.bw;
      return ((x === null) ? (x$2 === null) : x.i(x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.s = (function() {
  return $m_sr_ScalaRunTime$().ds(this);
});
$p.aA = (function() {
  return 2;
});
$p.aC = (function() {
  return "AdversarySelector";
});
$p.aB = (function(n) {
  if ((n === 0)) {
    return this.bw;
  }
  if ((n === 1)) {
    return this.b9;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_LMain$AdversarySelector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aJ)));
}
var $d_LMain$AdversarySelector = new $TypeData().i($c_LMain$AdversarySelector, "Main$AdversarySelector", ({
  aJ: 1,
  d: 1,
  B: 1,
  a: 1
}));
/** @constructor */
function $c_Ladversaries_Adversary(name, rules, lossCondition, escalation, fear) {
  this.dI = null;
  this.d5 = null;
  this.dH = null;
  this.dF = null;
  this.dG = null;
  this.dI = name;
  this.d5 = rules;
  this.dH = lossCondition;
  this.dF = escalation;
  this.dG = fear;
}
$p = $c_Ladversaries_Adversary.prototype = new $h_O();
$p.constructor = $c_Ladversaries_Adversary;
/** @constructor */
function $h_Ladversaries_Adversary() {
}
$h_Ladversaries_Adversary.prototype = $p;
$p.aP = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().cd(this, (-889275714), false);
});
$p.i = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Ladversaries_Adversary)) {
    if ((this.dI === x$0.dI)) {
      var x = this.d5;
      var x$2 = x$0.d5;
      var $x_2 = ((x === null) ? (x$2 === null) : x.i(x$2));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$3 = this.dH;
      var x$4 = x$0.dH;
      var $x_1 = ((x$3 === null) ? (x$4 === null) : x$3.i(x$4));
    } else {
      var $x_1 = false;
    }
    if (($x_1 && (this.dF === x$0.dF))) {
      var x$5 = this.dG;
      var x$6 = x$0.dG;
      return ((x$5 === null) ? (x$6 === null) : x$5.i(x$6));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.s = (function() {
  return $m_sr_ScalaRunTime$().ds(this);
});
$p.aA = (function() {
  return 5;
});
$p.aC = (function() {
  return "Adversary";
});
$p.aB = (function(n) {
  switch (n) {
    case 0: {
      return this.dI;
      break;
    }
    case 1: {
      return this.d5;
      break;
    }
    case 2: {
      return this.dH;
      break;
    }
    case 3: {
      return this.dF;
      break;
    }
    case 4: {
      return this.dG;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Ladversaries_Adversary(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aK)));
}
var $d_Ladversaries_Adversary = new $TypeData().i($c_Ladversaries_Adversary, "adversaries.Adversary", ({
  aK: 1,
  d: 1,
  B: 1,
  a: 1
}));
/** @constructor */
function $c_Ladversaries_Rule(level, stage, text, removeAboveLevel) {
  this.bY = 0;
  this.bZ = null;
  this.cK = null;
  this.cJ = null;
  this.bY = level;
  this.bZ = stage;
  this.cK = text;
  this.cJ = removeAboveLevel;
}
$p = $c_Ladversaries_Rule.prototype = new $h_O();
$p.constructor = $c_Ladversaries_Rule;
/** @constructor */
function $h_Ladversaries_Rule() {
}
$h_Ladversaries_Rule.prototype = $p;
$p.aP = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().c(acc, $f_T__hashCode__I("Rule"));
  acc = $m_sr_Statics$().c(acc, this.bY);
  acc = $m_sr_Statics$().c(acc, $m_sr_Statics$().a2(this.bZ));
  acc = $m_sr_Statics$().c(acc, $m_sr_Statics$().a2(this.cK));
  acc = $m_sr_Statics$().c(acc, $m_sr_Statics$().a2(this.cJ));
  return $m_sr_Statics$().x(acc, 4);
});
$p.i = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Ladversaries_Rule)) {
    if ((this.bY === x$0.bY)) {
      var x = this.bZ;
      var x$2 = x$0.bZ;
      var $x_1 = (x === x$2);
    } else {
      var $x_1 = false;
    }
    if (($x_1 && (this.cK === x$0.cK))) {
      var x$3 = this.cJ;
      var x$4 = x$0.cJ;
      return ((x$3 === null) ? (x$4 === null) : x$3.i(x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.s = (function() {
  return $m_sr_ScalaRunTime$().ds(this);
});
$p.aA = (function() {
  return 4;
});
$p.aC = (function() {
  return "Rule";
});
$p.aB = (function(n) {
  switch (n) {
    case 0: {
      return this.bY;
      break;
    }
    case 1: {
      return this.bZ;
      break;
    }
    case 2: {
      return this.cK;
      break;
    }
    case 3: {
      return this.cJ;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Ladversaries_Rule(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aL)));
}
var $d_Ladversaries_Rule = new $TypeData().i($c_Ladversaries_Rule, "adversaries.Rule", ({
  aL: 1,
  d: 1,
  B: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNextParam$2, handleObserverErrors$3, onErrorParam$2, outer) {
  this.hn = null;
  this.hl = false;
  this.fs = null;
  this.hm = null;
  this.hn = onNextParam$2;
  this.hl = handleObserverErrors$3;
  this.fs = onErrorParam$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.hm = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $p;
$p.d3 = (function() {
  return this.hm;
});
$p.d0 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.s = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.er = (function(nextValue) {
  try {
    this.hn.f(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.hl) {
      this.eq(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().bG(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.eq = (function(error) {
  try {
    if (this.fs.bN(error)) {
      this.fs.f(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().bG(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().bG(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.dA = (function(nextValue) {
  nextValue.bL(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((error) => {
    this.eq(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue$2) => {
    this.er(nextValue$2);
  })));
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$8 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$8, "com.raquo.airstream.core.Observer$$anon$8", ({
  cf: 1,
  al: 1,
  a4: 1,
  au: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTryParam$2, handleObserverErrors$4, outer) {
  this.ft = null;
  this.ho = false;
  this.hp = null;
  this.ft = onTryParam$2;
  this.ho = handleObserverErrors$4;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.hp = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $p;
$p.d3 = (function() {
  return this.hp;
});
$p.d0 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.s = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.er = (function(nextValue) {
  this.dA(new $c_s_util_Success(nextValue));
});
$p.eq = (function(error) {
  this.dA(new $c_s_util_Failure(error));
});
$p.dA = (function(nextValue) {
  try {
    if (this.ft.bN(nextValue)) {
      this.ft.f(nextValue);
    } else {
      nextValue.bL(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().bG(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.ho && nextValue.kN())) {
      this.eq(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.bL(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((originalError) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().bG(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError));
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().bG(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
      })));
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$9 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$9, "com.raquo.airstream.core.Observer$$anon$9", ({
  cg: 1,
  al: 1,
  a4: 1,
  au: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.ig = null;
  this.ih = false;
  this.li = null;
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
$p.nU = (function() {
  if ((!this.ih)) {
    this.ig = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.ih = true;
  }
  return this.ig;
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$svg$, "com.raquo.laminar.api.Laminar$svg$", ({
  cQ: 1,
  db: 1,
  d0: 1,
  d2: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$() {
  this.j = null;
  $n_Lcom_raquo_laminar_api_package$ = this;
  this.j = new $c_Lcom_raquo_laminar_api_package$$anon$1();
}
$p = $c_Lcom_raquo_laminar_api_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$() {
}
$h_Lcom_raquo_laminar_api_package$.prototype = $p;
var $d_Lcom_raquo_laminar_api_package$ = new $TypeData().i($c_Lcom_raquo_laminar_api_package$, "com.raquo.laminar.api.package$", ({
  cU: 1,
  aY: 1,
  b0: 1,
  aX: 1
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
  this.iU = null;
  this.iW = false;
  this.iV = null;
  this.fJ = null;
  this.iU = initialContext;
  this.iW = preferStrictMode;
  this.iV = insertFn;
  this.fJ = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.gI = (function(element) {
  var this$1 = this.iU;
  var insertContext = (this$1.e() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().nE(element, this.iW, this.fJ) : this$1.H());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((mountContext) => this.iV.k0(insertContext, mountContext.fQ, this.fJ)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().ey(element.bH, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.f(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.cF = (function(element) {
  this.gI(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  de: 1,
  a1: 1,
  di: 1,
  df: 1
}));
function $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__($thiz, name, prefixes) {
  $thiz.fM = name;
  $thiz.fN = prefixes;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_StyleProp() {
  this.fM = null;
  this.fN = null;
}
$p = $c_Lcom_raquo_laminar_keys_StyleProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_StyleProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_StyleProp() {
}
$h_Lcom_raquo_laminar_keys_StyleProp.prototype = $p;
$p.jS = (function(values, ev) {
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.ew(), new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((el, v, _$1) => {
    $m_Lcom_raquo_laminar_DomApi$().nJ(el, this, v);
  })));
});
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.j4 = null;
  this.fT = null;
  this.j4 = $m_s_None$();
  this.fT = $m_Lcom_raquo_laminar_DomApi$().mq(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.ev = (function(maybeNextParent) {
  this.j4 = maybeNextParent;
});
$p.ez = (function(maybeNextParent) {
});
$p.cF = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().dv(parentNode, this, (void 0));
});
$p.Z = (function() {
  return this.fT;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  dH: 1,
  an: 1,
  a1: 1,
  aw: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.j8 = null;
  this.fY = null;
  this.j8 = $m_s_None$();
  this.fY = $m_Lcom_raquo_laminar_DomApi$().mt(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.ev = (function(maybeNextParent) {
  this.j8 = maybeNextParent;
});
$p.ez = (function(maybeNextParent) {
});
$p.cF = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().dv(parentNode, this, (void 0));
});
$p.nX = (function() {
  return this.fY.data;
});
$p.Z = (function() {
  return this.fY;
});
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_TextNode, "com.raquo.laminar.nodes.TextNode", ({
  dN: 1,
  an: 1,
  a1: 1,
  aw: 1
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
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  dU: 1,
  a: 1,
  a2: 1,
  W: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b5)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  b5: 1,
  a: 1,
  a2: 1,
  W: 1
}), ((x) => (x instanceof $Char)));
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.e3)));
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.e4)));
}
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().i($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  F: 1,
  E: 1,
  t: 1,
  a: 1
}));
function $ct_jl_StringBuilder__($thiz) {
  $thiz.k = "";
  return $thiz;
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException();
  }
  $thiz.k = str;
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
  this.k = null;
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.jW = (function(str) {
  var str$1 = $m_jl_String$().na(str, 0, str.a.length);
  this.k = (("" + this.k) + str$1);
  return this;
});
$p.s = (function() {
  return this.k;
});
$p.o = (function() {
  return this.k.length;
});
$p.ke = (function(index) {
  return this.k.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  ee: 1,
  ax: 1,
  dS: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eh)));
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ek)));
}
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
$p.br = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.s = (function() {
  return "<function1>";
});
$p.bN = (function(x) {
  return false;
});
$p.m8 = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.f = (function(v1) {
  this.m8(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  eE: 1,
  j: 1,
  e: 1,
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
$p.m = (function() {
  return this;
});
$p.gL = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.dy = (function(n) {
  return this.dB(n, (-1));
});
$p.dB = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.s = (function() {
  return "<iterator>";
});
$p.bh = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.gK = (function(pf) {
  return $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(this, pf);
});
$p.dt = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.A = (function() {
  return (-1);
});
/** @constructor */
function $c_sc_Iterable$() {
  this.dl = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_Iterable$());
}
$p = $c_sc_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sc_Iterable$;
/** @constructor */
function $h_sc_Iterable$() {
}
$h_sc_Iterable$.prototype = $p;
var $d_sc_Iterable$ = new $TypeData().i($c_sc_Iterable$, "scala.collection.Iterable$", ({
  eX: 1,
  bj: 1,
  G: 1,
  a: 1
}));
var $n_sc_Iterable$;
function $m_sc_Iterable$() {
  if ((!$n_sc_Iterable$)) {
    $n_sc_Iterable$ = new $c_sc_Iterable$();
  }
  return $n_sc_Iterable$;
}
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.cj = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.cj = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.k1 = (function(elems) {
  return this.cj.cH(elems);
});
$p.mB = (function() {
  return this.cj.bs();
});
$p.fa = (function(it) {
  return this.cj.aU(it);
});
$p.b6 = (function() {
  return this.cj.b6();
});
$p.aU = (function(source) {
  return this.fa(source);
});
$p.bs = (function() {
  return this.mB();
});
$p.cH = (function(elems) {
  return this.k1(elems);
});
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.aV(idx) > 0));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.aV(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.A();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.A();
    var $x_1 = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize));
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.m(), that);
  } else {
    return false;
  }
}
function $f_sc_StrictOptimizedIterableOps__collect__s_PartialFunction__O($thiz, pf) {
  var b = $thiz.bE().b6();
  var marker = $m_sr_Statics$PFMarker$();
  var it = $thiz.m();
  while (it.q()) {
    var elem = it.h();
    var v = pf.br(elem, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((marker) => ((x$2$2) => marker))(marker)));
    if ((marker !== v)) {
      b.b2(v);
    }
  }
  return b.bv();
}
/** @constructor */
function $c_sci_Iterable$() {
  this.dl = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.mK = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.aU.call(this, it));
});
$p.aU = (function(it) {
  return this.mK(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  fi: 1,
  bj: 1,
  G: 1,
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
  this.f1 = null;
  this.jr = null;
  $n_sci_LazyList$ = this;
  this.f1 = new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$()))).ky();
  this.jr = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$10$2$2) => $m_sr_Statics$PFMarker$()));
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.cH = (function(elems) {
  return this.gS(elems);
});
$p.nH = (function(ll, n) {
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((restRef, iRef) => (() => {
    var rest = restRef.P;
    var i = iRef.a0;
    while (((i > 0) && (!rest.e()))) {
      rest = rest.y().al();
      restRef.P = rest;
      i = (((-1) + i) | 0);
      iRef.a0 = i;
    }
    return rest.y();
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.gS = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.A() === 0) ? this.f1 : new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().l7(coll.m()))))));
});
$p.l8 = (function(it, suffix) {
  return (it.q() ? new $c_sci_LazyList$State$Cons(it.h(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().l8(it, suffix))))) : suffix.Y());
});
$p.l7 = (function(it) {
  return (it.q() ? new $c_sci_LazyList$State$Cons(it.h(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().l7(it))))) : $m_sci_LazyList$State$Empty$());
});
$p.b6 = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.bs = (function() {
  return this.f1;
});
$p.aU = (function(source) {
  return this.gS(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  fj: 1,
  Z: 1,
  G: 1,
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
function $c_scm_Builder$$anon$1(outer, f$1) {
  this.f2 = null;
  this.jD = null;
  this.f2 = outer;
  this.jD = f$1;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.lZ = (function(x) {
  this.f2.b2(x);
  return this;
});
$p.lQ = (function(xs) {
  this.f2.bf(xs);
  return this;
});
$p.bv = (function() {
  return this.jD.f(this.f2.bv());
});
$p.bf = (function(elems) {
  return this.lQ(elems);
});
$p.b2 = (function(elem) {
  return this.lZ(elem);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  fG: 1,
  a0: 1,
  V: 1,
  U: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.e7 = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.e7 = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.m0 = (function(elem) {
  this.e7.b2(elem);
  return this;
});
$p.lR = (function(xs) {
  this.e7.bf(xs);
  return this;
});
$p.bf = (function(elems) {
  return this.lR(elems);
});
$p.b2 = (function(elem) {
  return this.m0(elem);
});
$p.bv = (function() {
  return this.e7;
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  bR: 1,
  a0: 1,
  V: 1,
  U: 1
}));
function $f_sr_EnumValue__productElement__I__O($thiz, n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
}
/** @constructor */
function $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(f) {
  this.jM = null;
  this.jM = f;
}
$p = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = new $h_sjsr_AnonFunction0();
$p.constructor = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1() {
}
$h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = $p;
$p.Y = (function() {
  return (0, this.jM)();
});
var $d_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1 = new $TypeData().i($c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1, "scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1", ({
  gC: 1,
  gB: 1,
  bX: 1,
  ay: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(f) {
  this.jN = null;
  this.jN = f;
}
$p = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = new $h_sjsr_AnonFunction1();
$p.constructor = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab() {
}
$h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = $p;
$p.f = (function(x0) {
  return (0, this.jN)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab = new $TypeData().i($c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab, "scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab", ({
  gE: 1,
  gD: 1,
  aI: 1,
  e: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(f) {
  this.jO = null;
  this.jO = f;
}
$p = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = new $h_sjsr_AnonFunction2();
$p.constructor = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2() {
}
$h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = $p;
$p.m7 = (function(x0, x1) {
  return (0, this.jO)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2 = new $TypeData().i($c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2, "scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2", ({
  gG: 1,
  gF: 1,
  gg: 1,
  ev: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(f) {
  this.jP = null;
  this.jP = f;
}
$p = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = new $h_sjsr_AnonFunction3();
$p.constructor = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491;
/** @constructor */
function $h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491() {
}
$h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = $p;
$p.k0 = (function(x0, x1, x2) {
  return (0, this.jP)(x0, x1, x2);
});
var $d_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491 = new $TypeData().i($c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491, "scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491", ({
  gI: 1,
  gH: 1,
  gh: 1,
  ew: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(f) {
  this.jQ = null;
  this.jQ = f;
}
$p = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = new $h_sjsr_AnonFunction4();
$p.constructor = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b;
/** @constructor */
function $h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b() {
}
$h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = $p;
$p.m6 = (function(x0, x1, x2, x3) {
  return (0, this.jQ)(x0, x1, x2, x3);
});
var $d_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b = new $TypeData().i($c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b, "scala.scalajs.runtime.AnonFunction4.$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b", ({
  gK: 1,
  gJ: 1,
  gi: 1,
  ex: 1
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
function $c_LMain$$anon$1(sel$3) {
  this.fn = null;
  this.fn = sel$3;
}
$p = $c_LMain$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_LMain$$anon$1;
/** @constructor */
function $h_LMain$$anon$1() {
}
$h_LMain$$anon$1.prototype = $p;
$p.gZ = (function(x) {
  if ((x !== null)) {
    var x7 = x.bY;
    var x8 = x.bZ;
    var x$2 = $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage();
    if ((x$2 === x8)) {
      if ((x7 <= this.fn.b9)) {
        return true;
      }
    }
  }
  return false;
});
$p.gE = (function(x, default$1) {
  if ((x !== null)) {
    var x13 = x.bY;
    var x14 = x.bZ;
    var x15 = x.cK;
    var x$2 = $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage();
    if ((x$2 === x14)) {
      if ((x13 <= this.fn.b9)) {
        return x15;
      }
    }
  }
  return default$1.f(x);
});
$p.bN = (function(x) {
  return this.gZ(x);
});
$p.br = (function(x, default$1) {
  return this.gE(x, default$1);
});
var $d_LMain$$anon$1 = new $TypeData().i($c_LMain$$anon$1, "Main$$anon$1", ({
  c3: 1,
  ai: 1,
  e: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_LMain$$anon$2(stage$2, sel$4, outer) {
  this.fo = null;
  this.dE = null;
  this.fo = stage$2;
  this.dE = sel$4;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_LMain$$anon$2.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_LMain$$anon$2;
/** @constructor */
function $h_LMain$$anon$2() {
}
$h_LMain$$anon$2.prototype = $p;
$p.gZ = (function(x) {
  if ((x !== null)) {
    var x19 = x.bY;
    var x20 = x.bZ;
    var x22 = x.cJ;
    var x$2 = this.fo;
    if ((x$2 === x20)) {
      if (((x19 <= this.dE.b9) && (x22.e() || ((x22.H() | 0) > this.dE.b9)))) {
        return true;
      }
    }
  }
  return false;
});
$p.gE = (function(x, default$1) {
  if ((x !== null)) {
    var x25 = x.bY;
    var x26 = x.bZ;
    var x27 = x.cK;
    var x28 = x.cJ;
    var x$2 = this.fo;
    if ((x$2 === x26)) {
      if (((x25 <= this.dE.b9) && (x28.e() || ((x28.H() | 0) > this.dE.b9)))) {
        return x27;
      }
    }
  }
  return default$1.f(x);
});
$p.bN = (function(x) {
  return this.gZ(x);
});
$p.br = (function(x, default$1) {
  return this.gE(x, default$1);
});
var $d_LMain$$anon$2 = new $TypeData().i($c_LMain$$anon$2, "Main$$anon$2", ({
  c4: 1,
  ai: 1,
  e: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Ladversaries_Stage() {
}
$p = $c_Ladversaries_Stage.prototype = new $h_O();
$p.constructor = $c_Ladversaries_Stage;
/** @constructor */
function $h_Ladversaries_Stage() {
}
$h_Ladversaries_Stage.prototype = $p;
$p.aP = (function() {
  return new $c_s_Product$$anon$1(this);
});
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.f6($m_Lcom_raquo_ew_JsArray$().aT($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.f7($m_Lcom_raquo_ew_JsArray$().aT($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.dD(false);
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.ff(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
    return subscription;
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$2.aI || (!when))) {
    var $x_1 = f();
  } else {
    this$2.aI = true;
    try {
      var $x_1 = f();
    } finally {
      this$2.aI = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = new $c_Lcom_raquo_airstream_ownership_Subscription(owner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  })));
  var this$ = $thiz.ca();
  this$.push(observer);
  return subscription;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz, observer, shouldCallMaybeWillStart) {
  var this$3 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    if (((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz)) && shouldCallMaybeWillStart)) {
      $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    }
    var this$ = $thiz.cc();
    this$.push(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$3.aI || (!when))) {
    f();
  } else {
    this$3.aI = true;
    try {
      f();
    } finally {
      this$3.aI = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$3);
    }
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().l6($thiz.cc(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().l6($thiz.ca(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.fm())) {
    $thiz.fj();
    $thiz.dD(true);
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  if (($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1)) {
    $thiz.fg();
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.fh();
    $thiz.dD(false);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.ca();
  var $x_1 = this$.length;
  var this$$1 = $thiz.cc();
  return ((($x_1 | 0) + (this$$1.length | 0)) | 0);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1(outer) {
  this.hs = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.hs = outer;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$$anon$1() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = $p;
$p.n2 = (function(x) {
  return (x !== null);
});
$p.md = (function(x, default$1) {
  return ((x !== null) ? (new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this.hs, x, _$1);
  }))), (void 0)) : default$1.f(x));
});
$p.bN = (function(x) {
  return this.n2(x);
});
$p.br = (function(x, default$1) {
  return this.md(x, default$1);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$$anon$1, "com.raquo.airstream.custom.CustomSource$$anon$1", ({
  co: 1,
  ai: 1,
  e: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.lh = $m_Lcom_raquo_airstream_core_Observer$().kH(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
function $f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer($thiz, mod) {
  return $m_Lcom_raquo_airstream_core_Observer$().kH(new $c_Lcom_raquo_airstream_state_Var$$anon$2(mod, $thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$1(outer) {
  this.i1 = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.i1 = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $p;
$p.h0 = (function(x) {
  return true;
});
$p.gF = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    this.i1.h9(x, _$1);
  })));
});
$p.bN = (function(x) {
  return this.h0(x);
});
$p.br = (function(x, default$1) {
  return this.gF(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  cE: 1,
  ai: 1,
  e: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$2(mod$6, outer) {
  this.i2 = null;
  this.eN = null;
  this.i2 = mod$6;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.eN = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$2.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$2;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$2() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$2.prototype = $p;
$p.h0 = (function(x) {
  return true;
});
$p.gF = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    matchResult5: {
      if ((x instanceof $c_s_util_Success)) {
        var nextInput = x.cE;
        var x4 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this.eN.eM);
        if ((x4 instanceof $c_s_util_Success)) {
          var currentValue = x4.cE;
          try {
            var nextValue = new $c_s_util_Success(this.i2.m7(currentValue, nextInput));
          } catch (e) {
            var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
            matchEnd8: {
              var nextValue;
              if ($m_s_util_control_NonFatal$().cG(e$2)) {
                var nextValue = new $c_s_util_Failure(e$2);
                break matchEnd8;
              }
              throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.X : e$2);
            }
          }
          this.eN.h9(nextValue, trx);
          break matchResult5;
        }
        if ((x4 instanceof $c_s_util_Failure)) {
          var err = x4.cD;
          $m_Lcom_raquo_airstream_core_AirstreamError$().bG(new $c_Lcom_raquo_airstream_core_AirstreamError$VarError("Unable to update a failed Var. Consider Var#tryUpdater instead.", new $c_s_Some(err)));
          break matchResult5;
        }
        throw new $c_s_MatchError(x4);
      }
      if ((x instanceof $c_s_util_Failure)) {
        var err$2 = x.cD;
        this.eN.h9(new $c_s_util_Failure(err$2), trx);
        break matchResult5;
      }
      throw new $c_s_MatchError(x);
    }
  })));
});
$p.bN = (function(x) {
  return this.h0(x);
});
$p.br = (function(x, default$1) {
  return this.gF(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$2 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$2, "com.raquo.airstream.state.Var$$anon$2", ({
  cF: 1,
  ai: 1,
  e: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.fU = new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.bH.jT();
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.bH.mu();
  })));
  $thiz.cO = (void 0);
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.cO === (void 0))) {
    $thiz.cO = $m_Lcom_raquo_ew_JsArray$().aT($m_sr_ScalaRunTime$().p(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener])));
  } else if (unsafePrepend) {
    var x$1 = $thiz.cO;
    if ((x$1 === (void 0))) {
      var $x_1;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.cO;
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
  var x = $thiz.cO;
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.cO;
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
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.eU, maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.eU;
  $thiz.eU = maybeNextParent;
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.e()) && (!maybePrevParent.H().f9().bl.e()));
  var isNextParentActive = ((!maybeNextParent.e()) && (!maybeNextParent.H().f9().bl.e()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.e() ? $m_s_None$() : new $c_s_Some(maybeNextParent.H().f9())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.e()) {
    $thiz.fU.ml();
  } else {
    var x0 = maybeNextOwner.H();
    $thiz.fU.nM(x0);
  }
}
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  dT: 1,
  F: 1,
  E: 1,
  t: 1,
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
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  dV: 1,
  a7: 1,
  a: 1,
  a2: 1,
  W: 1
}), ((x) => $isByte(x)));
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
  b7: 1,
  F: 1,
  E: 1,
  t: 1,
  a: 1
}));
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IllegalStateException = new $TypeData().i($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  e0: 1,
  F: 1,
  E: 1,
  t: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  b8: 1,
  F: 1,
  E: 1,
  t: 1,
  a: 1
}));
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NegativeArraySizeException = new $TypeData().i($c_jl_NegativeArraySizeException, "java.lang.NegativeArraySizeException", ({
  e5: 1,
  F: 1,
  E: 1,
  t: 1,
  a: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  e6: 1,
  F: 1,
  E: 1,
  t: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.e8)));
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
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  e9: 1,
  a7: 1,
  a: 1,
  a2: 1,
  W: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  ei: 1,
  F: 1,
  E: 1,
  t: 1,
  a: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().i($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  en: 1,
  F: 1,
  E: 1,
  t: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  eo: 1,
  F: 1,
  E: 1,
  t: 1,
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
$p.f = (function(x) {
  return x;
});
$p.s = (function() {
  return "generalized constraint";
});
var $d_s_$less$colon$less$$anon$1 = new $TypeData().i($c_s_$less$colon$less$$anon$1, "scala.$less$colon$less$$anon$1", ({
  et: 1,
  eq: 1,
  er: 1,
  e: 1,
  a: 1
}));
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.g9)) {
    $thiz.ga = (($thiz.eY === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.g9 = true;
  }
  return $thiz.ga;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.g9) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.ga);
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.eY;
  return ("of class " + $objectClassName(this$1));
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.eY + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.ga = null;
    this.eY = null;
    this.g9 = false;
    this.eY = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  em() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  eA: 1,
  F: 1,
  E: 1,
  t: 1,
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
$p.e = (function() {
  return (this === $m_s_None$());
});
$p.A = (function() {
  return (this.e() ? 0 : 1);
});
$p.m = (function() {
  return (this.e() ? $m_sc_Iterator$().K : new $c_sc_Iterator$$anon$20(this.H()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.dX = 0;
  this.jh = 0;
  this.jg = null;
  this.jg = outer;
  this.dX = 0;
  this.jh = outer.aA();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.q = (function() {
  return (this.dX < this.jh);
});
$p.h = (function() {
  var result = this.jg.aB(this.dX);
  this.dX = ((1 + this.dX) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  eG: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.dj = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  eT: 1,
  eS: 1,
  G: 1,
  a: 1,
  Z: 1
}));
function $f_sc_IndexedSeqOps__reverse__O($thiz) {
  return $thiz.fb(new $c_sc_IndexedSeqView$Reverse($thiz));
}
function $f_sc_IndexedSeqOps__head__O($thiz) {
  if ((!$thiz.e())) {
    return $thiz.t(0);
  } else {
    throw new $c_ju_NoSuchElementException(("head of empty " + ($is_sc_IndexedSeq($thiz) ? $thiz.bS() : $thiz.s())));
  }
}
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.bS() + "("), ", ", ")");
}
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.f)));
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f)));
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.q = (function() {
  return false;
});
$p.nb = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.A = (function() {
  return 0;
});
$p.dB = (function(from, until) {
  return this;
});
$p.h = (function() {
  this.nb();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  f1: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.dZ = false;
  this.jm = null;
  this.jm = a$1;
  this.dZ = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.q = (function() {
  return (!this.dZ);
});
$p.h = (function() {
  if (this.dZ) {
    return $m_sc_Iterator$().K.h();
  } else {
    this.dZ = true;
    return this.jm;
  }
});
$p.dB = (function(from, until) {
  return (((this.dZ || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().K : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  f2: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.bb instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.bb;
      $thiz.bb = c.bb;
      $thiz.ch = c.ch;
      if ((c.bz !== null)) {
        if (($thiz.by === null)) {
          $thiz.by = c.by;
        }
        c.by.e0 = $thiz.bz;
        $thiz.bz = c.bz;
      }
      continue;
    }
    return (void 0);
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.bz === null)) {
      $thiz.bb = null;
      $thiz.by = null;
      return false;
    } else {
      $thiz.bb = $thiz.bz.mT();
      if (($thiz.by === $thiz.bz)) {
        $thiz.by = $thiz.by.e0;
      }
      $thiz.bz = $thiz.bz.e0;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.ch) {
        return true;
      } else if ((($thiz.bb !== null) && $thiz.bb.q())) {
        $thiz.ch = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.bb = null;
  this.bz = null;
  this.by = null;
  this.ch = false;
  this.bb = current;
  this.bz = null;
  this.by = null;
  this.ch = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.q = (function() {
  if (this.ch) {
    return true;
  } else if ((this.bb !== null)) {
    if (this.bb.q()) {
      this.ch = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.h = (function() {
  if (this.q()) {
    this.ch = false;
    return this.bb.h();
  } else {
    return $m_sc_Iterator$().K.h();
  }
});
$p.gL = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.bz === null)) {
    this.bz = c;
    this.by = c;
  } else {
    this.by.e0 = c;
    this.by = c;
  }
  if ((this.bb === null)) {
    this.bb = $m_sc_Iterator$().K;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bk)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  bk: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.c1 > 0)) {
    if ($thiz.ci.q()) {
      $thiz.ci.h();
      $thiz.c1 = (((-1) + $thiz.c1) | 0);
    } else {
      $thiz.c1 = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.bo < 0)) {
    return (-1);
  } else {
    var that = (($thiz.bo - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.ci = null;
  this.bo = 0;
  this.c1 = 0;
  this.ci = underlying;
  this.bo = limit;
  this.c1 = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.A = (function() {
  var size = this.ci.A();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.c1) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.bo < 0)) {
      return dropSize;
    } else {
      var x = this.bo;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.q = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.bo !== 0) && this.ci.q());
});
$p.h = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.bo > 0)) {
    this.bo = (((-1) + this.bo) | 0);
    return this.ci.h();
  } else {
    return ((this.bo < 0) ? this.ci.h() : $m_sc_Iterator$().K.h());
  }
});
$p.dB = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.bo < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.c1 + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().K;
  } else if ((sum < 0)) {
    this.c1 = 2147483647;
    this.bo = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$SliceIterator(this.ci, (((-2147483647) + sum) | 0), rest))));
  } else {
    this.c1 = sum;
    this.bo = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  f5: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1
}));
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while ((!these.e())) {
    len = ((1 + len) | 0);
    these = these.aH();
  }
  return len;
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $thiz, len));
}
function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
  return ((x >= 0) && ($thiz.aV(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.kl(n);
  if (skipped.e()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.T();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.e() ? 0 : 1);
    } else if (xs.e()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = xs.aH();
      i = temp$i;
      xs = temp$xs;
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else if ((((!a.e()) && (!b.e())) && $m_sr_BoxesRunTime$().aG(a.T(), b.T()))) {
      var temp$a = a.aH();
      var temp$b = b.aH();
      a = temp$a;
      b = temp$b;
    } else {
      return (a.e() && b.e());
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.e2 = null;
  this.e2 = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.q = (function() {
  return (!this.e2.e());
});
$p.h = (function() {
  var r = this.e2.T();
  this.e2 = this.e2.aH();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  f8: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1
}));
function $p_sc_StringOps$$anon$1__advance__T($thiz) {
  var start = $thiz.am;
  while (true) {
    if (($thiz.am < $thiz.cQ)) {
      var this$ = $thiz.e3;
      var i = $thiz.am;
      var c = this$.charCodeAt(i);
      var $x_1 = (!((c === 13) || (c === 10)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $thiz.am = ((1 + $thiz.am) | 0);
    } else {
      break;
    }
  }
  var end = $thiz.am;
  if (($thiz.am < $thiz.cQ)) {
    var this$$2 = $thiz.e3;
    var i$1 = $thiz.am;
    var c$1 = this$$2.charCodeAt(i$1);
    $thiz.am = ((1 + $thiz.am) | 0);
    if (($thiz.am < $thiz.cQ)) {
      var this$$3 = $thiz.e3;
      var i$2 = $thiz.am;
      var c$2 = this$$3.charCodeAt(i$2);
      var $x_2 = ((c$1 === 13) && (c$2 === 10));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      $thiz.am = ((1 + $thiz.am) | 0);
    }
    if ((!$thiz.jp)) {
      end = $thiz.am;
    }
  }
  var this$6 = $thiz.e3;
  var endIndex = end;
  return this$6.substring(start, endIndex);
}
/** @constructor */
function $c_sc_StringOps$$anon$1(\u03b4this$2, stripped$1) {
  this.cQ = 0;
  this.am = 0;
  this.e3 = null;
  this.jp = false;
  this.e3 = \u03b4this$2;
  this.jp = stripped$1;
  this.cQ = \u03b4this$2.length;
  this.am = 0;
}
$p = $c_sc_StringOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StringOps$$anon$1;
/** @constructor */
function $h_sc_StringOps$$anon$1() {
}
$h_sc_StringOps$$anon$1.prototype = $p;
$p.q = (function() {
  return (this.am < this.cQ);
});
$p.kT = (function() {
  return ((this.am >= this.cQ) ? $m_sc_Iterator$().K.h() : $p_sc_StringOps$$anon$1__advance__T(this));
});
$p.h = (function() {
  return this.kT();
});
var $d_sc_StringOps$$anon$1 = new $TypeData().i($c_sc_StringOps$$anon$1, "scala.collection.StringOps$$anon$1", ({
  fa: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.cj = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$());
}
$p = $c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
}
$h_sci_IndexedSeq$.prototype = $p;
$p.kC = (function(it) {
  return ($is_sci_IndexedSeq(it) ? it : $c_sc_SeqFactory$Delegate.prototype.fa.call(this, it));
});
$p.aU = (function(source) {
  return this.kC(source);
});
$p.fa = (function(it) {
  return this.kC(it);
});
var $d_sci_IndexedSeq$ = new $TypeData().i($c_sci_IndexedSeq$, "scala.collection.immutable.IndexedSeq$", ({
  fh: 1,
  aB: 1,
  Z: 1,
  G: 1,
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
  this.dm = null;
  this.js = null;
  this.mk();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.mk = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.js = ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.gO()))));
  this.dm = deferred;
});
$p.nG = (function() {
  this.dm.gV(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$())));
  return this.js;
});
$p.lW = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.dm.gV(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    $m_sci_LazyList$();
    return new $c_sci_LazyList$State$Cons(elem, ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.gO())))));
  })));
  this.dm = deferred;
  return this;
});
$p.lO = (function(xs) {
  if ((xs.A() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.dm.gV(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().l8(xs.m(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.gO()))))));
    this.dm = deferred;
  }
  return this;
});
$p.bf = (function(elems) {
  return this.lO(elems);
});
$p.b2 = (function(elem) {
  return this.lW(elem);
});
$p.bv = (function() {
  return this.nG();
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  fk: 1,
  ac: 1,
  a0: 1,
  V: 1,
  U: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.dn = null;
  this.dn = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.q = (function() {
  return (!this.dn.e());
});
$p.h = (function() {
  if (this.dn.e()) {
    return $m_sc_Iterator$().K.h();
  } else {
    var res = this.dn.y().T();
    this.dn = this.dn.y().al();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  fm: 1,
  r: 1,
  s: 1,
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
$p.cH = (function(elems) {
  return $m_sci_Nil$().bO(elems);
});
$p.b6 = (function() {
  return new $c_scm_ListBuffer();
});
$p.bs = (function() {
  return $m_sci_Nil$();
});
$p.aU = (function(source) {
  return $m_sci_Nil$().bO(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  fp: 1,
  ah: 1,
  Z: 1,
  G: 1,
  a: 1
}));
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$();
  }
  return $n_sci_List$;
}
function $ps_sci_Vector$__liftedTree1$1__I() {
  try {
    return $m_jl_Integer$().nr($m_jl_System$SystemProperties$().kI("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10);
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
  this.jw = 0;
  this.jx = null;
  $n_sci_Vector$ = this;
  this.jw = $ps_sci_Vector$__liftedTree1$1__I();
  this.jx = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.cH = (function(elems) {
  return this.bu(elems);
});
$p.bu = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    return it;
  } else {
    var knownSize = it.A();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      matchEnd5: {
        var $x_1;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x = it.a5().ak();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.bR;
            break matchEnd5;
          }
        }
        if ($is_sci_Iterable(it)) {
          var a1 = new $ac_O(knownSize);
          it.bh(a1, 0, 2147483647);
          var $x_1 = a1;
          break matchEnd5;
        }
        var a1$2 = new $ac_O(knownSize);
        it.m().bh(a1$2, 0, 2147483647);
        var $x_1 = a1$2;
      }
      return new $c_sci_Vector1($x_1);
    } else {
      return new $c_sci_VectorBuilder().eb(it).fk();
    }
  }
});
$p.b6 = (function() {
  return new $c_sci_VectorBuilder();
});
$p.aU = (function(source) {
  return this.bu(source);
});
$p.bs = (function() {
  return $m_sci_Vector0$();
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  fu: 1,
  ah: 1,
  Z: 1,
  G: 1,
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
  if (($thiz.G >= 6)) {
    a = $thiz.af;
    var i = (($thiz.D >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.B(i, dest, 0, length);
    }
    var newOffset = (($thiz.D % 33554432) | 0);
    $thiz.w = (($thiz.w - (($thiz.D - newOffset) | 0)) | 0);
    $thiz.D = newOffset;
    if (((($thiz.w >>> 25) | 0) === 0)) {
      $thiz.G = 5;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.G >= 5)) {
    if ((a === null)) {
      a = $thiz.R;
    }
    var i$2 = (31 & (($thiz.D >>> 20) | 0));
    if (($thiz.G === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.B(i$2, dest$1, 0, length$1);
      }
      $thiz.R = a;
      var newOffset$1 = (($thiz.D % 1048576) | 0);
      $thiz.w = (($thiz.w - (($thiz.D - newOffset$1) | 0)) | 0);
      $thiz.D = newOffset$1;
      if (((($thiz.w >>> 20) | 0) === 0)) {
        $thiz.G = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().W(a, i$2, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.G >= 4)) {
    if ((a === null)) {
      a = $thiz.I;
    }
    var i$3 = (31 & (($thiz.D >>> 15) | 0));
    if (($thiz.G === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.B(i$3, dest$2, 0, length$2);
      }
      $thiz.I = a;
      var newOffset$2 = (($thiz.D % 32768) | 0);
      $thiz.w = (($thiz.w - (($thiz.D - newOffset$2) | 0)) | 0);
      $thiz.D = newOffset$2;
      if (((($thiz.w >>> 15) | 0) === 0)) {
        $thiz.G = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().W(a, i$3, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.G >= 3)) {
    if ((a === null)) {
      a = $thiz.F;
    }
    var i$4 = (31 & (($thiz.D >>> 10) | 0));
    if (($thiz.G === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.B(i$4, dest$3, 0, length$3);
      }
      $thiz.F = a;
      var newOffset$3 = (($thiz.D % 1024) | 0);
      $thiz.w = (($thiz.w - (($thiz.D - newOffset$3) | 0)) | 0);
      $thiz.D = newOffset$3;
      if (((($thiz.w >>> 10) | 0) === 0)) {
        $thiz.G = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().W(a, i$4, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.G >= 2)) {
    if ((a === null)) {
      a = $thiz.C;
    }
    var i$5 = (31 & (($thiz.D >>> 5) | 0));
    if (($thiz.G === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        src$4.B(i$5, dest$4, 0, length$4);
      }
      $thiz.C = a;
      var newOffset$4 = (($thiz.D % 32) | 0);
      $thiz.w = (($thiz.w - (($thiz.D - newOffset$4) | 0)) | 0);
      $thiz.D = newOffset$4;
      if (((($thiz.w >>> 5) | 0) === 0)) {
        $thiz.G = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().W(a, i$5, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.G >= 1)) {
    if ((a === null)) {
      a = $thiz.L;
    }
    var i$6 = (31 & $thiz.D);
    if (($thiz.G === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.B(i$6, dest$5, 0, length$5);
      }
      $thiz.L = a;
      $thiz.E = (($thiz.E - $thiz.D) | 0);
      $thiz.D = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().W(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.e5 = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.a.length;
  if ((dl > 0)) {
    if (($thiz.E === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.E) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.L;
    var destPos = $thiz.E;
    data.B(0, dest, destPos, copy1);
    $thiz.E = (($thiz.E + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.L;
      data.B(copy1, dest$1, 0, copy2);
      $thiz.E = (($thiz.E + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if ((slice.a.length === 0)) {
    return (void 0);
  }
  if (($thiz.E === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = slice.a.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.w) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.w >>> 5) | 0));
      var dest = $thiz.C;
      slice.B(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.C;
        slice.B(copy1, dest$1, 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      if (((($thiz.w % 1024) | 0) !== 0)) {
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
            var lo = t.l;
            var hi = t.n;
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
      var a$1 = (31 & ((((32768 - $thiz.w) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.w >>> 10) | 0));
      var dest$2 = $thiz.F;
      slice.B(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.F;
        slice.B(copy1$2, dest$3, 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      if (((($thiz.w % 32768) | 0) !== 0)) {
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
            var lo$1 = t$1.l;
            var hi$1 = t$1.n;
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
      var a$2 = (31 & ((((1048576 - $thiz.w) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.w >>> 15) | 0));
      var dest$4 = $thiz.I;
      slice.B(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.I;
        slice.B(copy1$3, dest$5, 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      if (((($thiz.w % 1048576) | 0) !== 0)) {
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
            var lo$2 = t$2.l;
            var hi$2 = t$2.n;
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
      var a$3 = (31 & ((((33554432 - $thiz.w) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.w >>> 20) | 0));
      var dest$6 = $thiz.R;
      slice.B(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.R;
        slice.B(copy1$4, dest$7, 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      if (((($thiz.w % 33554432) | 0) !== 0)) {
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
            var lo$3 = t$3.l;
            var hi$3 = t$3.n;
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
      var destPos$5 = (($thiz.w >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.af;
      slice.B(0, dest$8, destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break;
    }
    default: {
      throw new $c_s_MatchError(dim);
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = xs.bQ();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.bX(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var x1 = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
    } else if ((($thiz.E === 32) || ($thiz.E === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1);
    } else {
      $m_sci_VectorStatics$().gP((((-2) + x1) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((data$2$2) => {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$2$2);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.w) | 0);
  var xor = (idx ^ $thiz.w);
  $thiz.w = idx;
  $thiz.E = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.w + n) | 0);
    var xor = (idx ^ $thiz.w);
    $thiz.w = idx;
    $thiz.E = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.L) + ", a2=") + $thiz.C) + ", a3=") + $thiz.F) + ", a4=") + $thiz.I) + ", a5=") + $thiz.R) + ", a6=") + $thiz.af) + ", depth=") + $thiz.G));
  } else if ((xor < 1024)) {
    if (($thiz.G <= 1)) {
      $thiz.C = new ($d_O.r().r().C)(32);
      $thiz.C.a[0] = $thiz.L;
      $thiz.G = 2;
    }
    $thiz.L = new $ac_O(32);
    $thiz.C.a[(31 & ((idx >>> 5) | 0))] = $thiz.L;
  } else if ((xor < 32768)) {
    if (($thiz.G <= 2)) {
      $thiz.F = new ($d_O.r().r().r().C)(32);
      $thiz.F.a[0] = $thiz.C;
      $thiz.G = 3;
    }
    $thiz.L = new $ac_O(32);
    $thiz.C = new ($d_O.r().r().C)(32);
    $thiz.C.a[(31 & ((idx >>> 5) | 0))] = $thiz.L;
    $thiz.F.a[(31 & ((idx >>> 10) | 0))] = $thiz.C;
  } else if ((xor < 1048576)) {
    if (($thiz.G <= 3)) {
      $thiz.I = new ($d_O.r().r().r().r().C)(32);
      $thiz.I.a[0] = $thiz.F;
      $thiz.G = 4;
    }
    $thiz.L = new $ac_O(32);
    $thiz.C = new ($d_O.r().r().C)(32);
    $thiz.F = new ($d_O.r().r().r().C)(32);
    $thiz.C.a[(31 & ((idx >>> 5) | 0))] = $thiz.L;
    $thiz.F.a[(31 & ((idx >>> 10) | 0))] = $thiz.C;
    $thiz.I.a[(31 & ((idx >>> 15) | 0))] = $thiz.F;
  } else if ((xor < 33554432)) {
    if (($thiz.G <= 4)) {
      $thiz.R = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.R.a[0] = $thiz.I;
      $thiz.G = 5;
    }
    $thiz.L = new $ac_O(32);
    $thiz.C = new ($d_O.r().r().C)(32);
    $thiz.F = new ($d_O.r().r().r().C)(32);
    $thiz.I = new ($d_O.r().r().r().r().C)(32);
    $thiz.C.a[(31 & ((idx >>> 5) | 0))] = $thiz.L;
    $thiz.F.a[(31 & ((idx >>> 10) | 0))] = $thiz.C;
    $thiz.I.a[(31 & ((idx >>> 15) | 0))] = $thiz.F;
    $thiz.R.a[(31 & ((idx >>> 20) | 0))] = $thiz.I;
  } else {
    if (($thiz.G <= 5)) {
      $thiz.af = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.af.a[0] = $thiz.R;
      $thiz.G = 6;
    }
    $thiz.L = new $ac_O(32);
    $thiz.C = new ($d_O.r().r().C)(32);
    $thiz.F = new ($d_O.r().r().r().C)(32);
    $thiz.I = new ($d_O.r().r().r().r().C)(32);
    $thiz.R = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.C.a[(31 & ((idx >>> 5) | 0))] = $thiz.L;
    $thiz.F.a[(31 & ((idx >>> 10) | 0))] = $thiz.C;
    $thiz.I.a[(31 & ((idx >>> 15) | 0))] = $thiz.F;
    $thiz.R.a[(31 & ((idx >>> 20) | 0))] = $thiz.I;
    $thiz.af.a[((idx >>> 25) | 0)] = $thiz.R;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.af = null;
  this.R = null;
  this.I = null;
  this.F = null;
  this.C = null;
  this.L = null;
  this.E = 0;
  this.w = 0;
  this.D = 0;
  this.e5 = false;
  this.G = 0;
  this.L = new $ac_O(32);
  this.E = 0;
  this.w = 0;
  this.D = 0;
  this.e5 = false;
  this.G = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.kL = (function(v) {
  var x1 = v.bQ();
  switch (x1) {
    case 0: {
      break;
    }
    case 1: {
      this.G = 1;
      var i = v.b.a.length;
      this.E = (31 & i);
      this.w = ((i - this.E) | 0);
      var a = v.b;
      this.L = ((a.a.length === 32) ? a : $m_ju_Arrays$().W(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.aK;
      var a$1 = v.d;
      this.L = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().W(a$1, 0, 32));
      this.G = 2;
      this.D = ((32 - v.bd) | 0);
      var i$1 = ((v.g + this.D) | 0);
      this.E = (31 & i$1);
      this.w = ((i$1 - this.E) | 0);
      this.C = new ($d_O.r().r().C)(32);
      this.C.a[0] = v.b;
      var dest = this.C;
      var length = d2.a.length;
      d2.B(0, dest, 1, length);
      this.C.a[((1 + d2.a.length) | 0)] = this.L;
      break;
    }
    case 5: {
      var d3 = v.ap;
      var s2 = v.aD;
      var a$2 = v.d;
      this.L = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().W(a$2, 0, 32));
      this.G = 3;
      this.D = ((1024 - v.aQ) | 0);
      var i$2 = ((v.g + this.D) | 0);
      this.E = (31 & i$2);
      this.w = ((i$2 - this.E) | 0);
      this.F = new ($d_O.r().r().r().C)(32);
      this.F.a[0] = $m_sci_VectorStatics$().u(v.b, v.aY);
      var dest$1 = this.F;
      var length$1 = d3.a.length;
      d3.B(0, dest$1, 1, length$1);
      this.C = $m_ju_Arrays$().Q(s2, 32);
      this.F.a[((1 + d3.a.length) | 0)] = this.C;
      this.C.a[s2.a.length] = this.L;
      break;
    }
    case 7: {
      var d4 = v.ae;
      var s3 = v.ai;
      var s2$2 = v.ah;
      var a$3 = v.d;
      this.L = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().W(a$3, 0, 32));
      this.G = 4;
      this.D = ((32768 - v.aE) | 0);
      var i$3 = ((v.g + this.D) | 0);
      this.E = (31 & i$3);
      this.w = ((i$3 - this.E) | 0);
      this.I = new ($d_O.r().r().r().r().C)(32);
      this.I.a[0] = $m_sci_VectorStatics$().u($m_sci_VectorStatics$().u(v.b, v.aL), v.aM);
      var dest$2 = this.I;
      var length$2 = d4.a.length;
      d4.B(0, dest$2, 1, length$2);
      this.F = $m_ju_Arrays$().Q(s3, 32);
      this.C = $m_ju_Arrays$().Q(s2$2, 32);
      this.I.a[((1 + d4.a.length) | 0)] = this.F;
      this.F.a[s3.a.length] = this.C;
      this.C.a[s2$2.a.length] = this.L;
      break;
    }
    case 9: {
      var d5 = v.a3;
      var s4 = v.a9;
      var s3$2 = v.a8;
      var s2$3 = v.a7;
      var a$4 = v.d;
      this.L = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().W(a$4, 0, 32));
      this.G = 5;
      this.D = ((1048576 - v.aj) | 0);
      var i$4 = ((v.g + this.D) | 0);
      this.E = (31 & i$4);
      this.w = ((i$4 - this.E) | 0);
      this.R = new ($d_O.r().r().r().r().r().C)(32);
      this.R.a[0] = $m_sci_VectorStatics$().u($m_sci_VectorStatics$().u($m_sci_VectorStatics$().u(v.b, v.aq), v.ar), v.as);
      var dest$3 = this.R;
      var length$3 = d5.a.length;
      d5.B(0, dest$3, 1, length$3);
      this.I = $m_ju_Arrays$().Q(s4, 32);
      this.F = $m_ju_Arrays$().Q(s3$2, 32);
      this.C = $m_ju_Arrays$().Q(s2$3, 32);
      this.R.a[((1 + d5.a.length) | 0)] = this.I;
      this.I.a[s4.a.length] = this.F;
      this.F.a[s3$2.a.length] = this.C;
      this.C.a[s2$3.a.length] = this.L;
      break;
    }
    case 11: {
      var d6 = v.a4;
      var s5 = v.ad;
      var s4$2 = v.ac;
      var s3$3 = v.ab;
      var s2$4 = v.aa;
      var a$5 = v.d;
      this.L = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().W(a$5, 0, 32));
      this.G = 6;
      this.D = ((33554432 - v.at) | 0);
      var i$5 = ((v.g + this.D) | 0);
      this.E = (31 & i$5);
      this.w = ((i$5 - this.E) | 0);
      this.af = new ($d_O.r().r().r().r().r().r().C)(64);
      this.af.a[0] = $m_sci_VectorStatics$().u($m_sci_VectorStatics$().u($m_sci_VectorStatics$().u($m_sci_VectorStatics$().u(v.b, v.au), v.av), v.aw), v.ax);
      var dest$4 = this.af;
      var length$4 = d6.a.length;
      d6.B(0, dest$4, 1, length$4);
      this.R = $m_ju_Arrays$().Q(s5, 32);
      this.I = $m_ju_Arrays$().Q(s4$2, 32);
      this.F = $m_ju_Arrays$().Q(s3$3, 32);
      this.C = $m_ju_Arrays$().Q(s2$4, 32);
      this.af.a[((1 + d6.a.length) | 0)] = this.R;
      this.R.a[s5.a.length] = this.I;
      this.I.a[s4$2.a.length] = this.F;
      this.F.a[s3$3.a.length] = this.C;
      this.C.a[s2$4.a.length] = this.L;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  if (((this.E === 0) && (this.w > 0))) {
    this.E = 32;
    this.w = (((-32) + this.w) | 0);
  }
  return this;
});
$p.m3 = (function(before, bigVector) {
  if (((this.E !== 0) || (this.w !== 0))) {
    throw new $c_jl_UnsupportedOperationException("A non-empty VectorBuilder cannot be aligned retrospectively. Please call .reset() or use a new VectorBuilder.");
  }
  if ($m_sci_Vector0$().i(bigVector)) {
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
    var x1$2___1$mcI$sp = bigVector.bd;
    var x1$2___2$mcI$sp = 32;
  } else if ((bigVector instanceof $c_sci_Vector3)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.aQ;
    var x1$2___2$mcI$sp = 1024;
  } else if ((bigVector instanceof $c_sci_Vector4)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.aE;
    var x1$2___2$mcI$sp = 32768;
  } else if ((bigVector instanceof $c_sci_Vector5)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.aj;
    var x1$2___2$mcI$sp = 1048576;
  } else {
    if ((!(bigVector instanceof $c_sci_Vector6))) {
      throw new $c_s_MatchError(bigVector);
    }
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.at;
    var x1$2___2$mcI$sp = 33554432;
  }
  var prefixLength = x1$2___1$mcI$sp;
  var maxPrefixLength = x1$2___2$mcI$sp;
  if ((maxPrefixLength === 1)) {
    return this;
  }
  var overallPrefixLength = $intMod(((before + prefixLength) | 0), maxPrefixLength);
  this.D = $intMod(((maxPrefixLength - overallPrefixLength) | 0), maxPrefixLength);
  $p_sci_VectorBuilder__advanceN__I__V(this, ((-32) & this.D));
  this.E = (31 & this.D);
  this.e5 = true;
  return this;
});
$p.lX = (function(elem) {
  if ((this.E === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.L.a[this.E] = elem;
  this.E = ((1 + this.E) | 0);
  return this;
});
$p.eb = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.E === 0) && (this.w === 0)) && (!this.e5)) ? this.kL(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.fk = (function() {
  if (this.e5) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.E + this.w) | 0);
  var realLen = ((len - this.D) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.L;
    return new $c_sci_Vector1(((a.a.length === realLen) ? a : $m_ju_Arrays$().Q(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & (((-1) + len) | 0));
    var i2 = (((((-1) + len) | 0) >>> 5) | 0);
    var data = $m_ju_Arrays$().W(this.C, 1, i2);
    var prefix1 = this.C.a[0];
    var a$1 = this.C.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().Q(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.D) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().W(this.F, 1, i3);
    var a$2 = this.F.a[0];
    var prefix2 = $m_ju_Arrays$().W(a$2, 1, a$2.a.length);
    var prefix1$2 = this.F.a[0].a[0];
    var suffix2 = $m_ju_Arrays$().Q(this.F.a[i3], i2$2);
    var a$3 = this.F.a[i3].a[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$3.a.length === len$2) ? a$3 : $m_ju_Arrays$().Q(a$3, len$2));
    var len1 = prefix1$2.a.length;
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, ((len1 + (prefix2.a.length << 5)) | 0), data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var data$3 = $m_ju_Arrays$().W(this.I, 1, i4);
    var a$4 = this.I.a[0];
    var prefix3 = $m_ju_Arrays$().W(a$4, 1, a$4.a.length);
    var a$5 = this.I.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().W(a$5, 1, a$5.a.length);
    var prefix1$3 = this.I.a[0].a[0].a[0];
    var suffix3 = $m_ju_Arrays$().Q(this.I.a[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().Q(this.I.a[i4].a[i3$2], i2$3);
    var a$6 = this.I.a[i4].a[i3$2].a[i2$3];
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = ((a$6.a.length === len$3) ? a$6 : $m_ju_Arrays$().Q(a$6, len$3));
    var len1$2 = prefix1$3.a.length;
    var len12$2 = ((len1$2 + (prefix2$2.a.length << 5)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, ((len12$2 + (prefix3.a.length << 10)) | 0), data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & (((-1) + len) | 0));
    var i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5 = (((((-1) + len) | 0) >>> 20) | 0);
    var data$4 = $m_ju_Arrays$().W(this.R, 1, i5);
    var a$7 = this.R.a[0];
    var prefix4 = $m_ju_Arrays$().W(a$7, 1, a$7.a.length);
    var a$8 = this.R.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().W(a$8, 1, a$8.a.length);
    var a$9 = this.R.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().W(a$9, 1, a$9.a.length);
    var prefix1$4 = this.R.a[0].a[0].a[0].a[0];
    var suffix4 = $m_ju_Arrays$().Q(this.R.a[i5], i4$2);
    var suffix3$2 = $m_ju_Arrays$().Q(this.R.a[i5].a[i4$2], i3$3);
    var suffix2$3 = $m_ju_Arrays$().Q(this.R.a[i5].a[i4$2].a[i3$3], i2$4);
    var a$10 = this.R.a[i5].a[i4$2].a[i3$3].a[i2$4];
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = ((a$10.a.length === len$4) ? a$10 : $m_ju_Arrays$().Q(a$10, len$4));
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
    var data$5 = $m_ju_Arrays$().W(this.af, 1, i6);
    var a$11 = this.af.a[0];
    var prefix5 = $m_ju_Arrays$().W(a$11, 1, a$11.a.length);
    var a$12 = this.af.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().W(a$12, 1, a$12.a.length);
    var a$13 = this.af.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().W(a$13, 1, a$13.a.length);
    var a$14 = this.af.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().W(a$14, 1, a$14.a.length);
    var prefix1$5 = this.af.a[0].a[0].a[0].a[0].a[0];
    var suffix5 = $m_ju_Arrays$().Q(this.af.a[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().Q(this.af.a[i6].a[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().Q(this.af.a[i6].a[i5$2].a[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().Q(this.af.a[i6].a[i5$2].a[i4$3].a[i3$4], i2$5);
    var a$15 = this.af.a[i6].a[i5$2].a[i4$3].a[i3$4].a[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.a.length === len$5) ? a$15 : $m_ju_Arrays$().Q(a$15, len$5));
    var len1$4 = prefix1$5.a.length;
    var len12$4 = ((len1$4 + (prefix2$4.a.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.s = (function() {
  return (((((((("VectorBuilder(len1=" + this.E) + ", lenRest=") + this.w) + ", offset=") + this.D) + ", depth=") + this.G) + ")");
});
$p.bv = (function() {
  return this.fk();
});
$p.bf = (function(elems) {
  return this.eb(elems);
});
$p.b2 = (function(elem) {
  return this.lX(elem);
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  fw: 1,
  ac: 1,
  a0: 1,
  V: 1,
  U: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.jy = null;
  $n_scm_ArrayBuffer$ = this;
  this.jy = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.cH = (function(elems) {
  return this.kD(elems);
});
$p.kD = (function(coll) {
  var k = coll.A();
  if ((k >= 0)) {
    var array = this.l9(this.jy, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.bh(array, 0, 2147483647) : coll.m().bh(array, 0, 2147483647));
    if ((actual !== k)) {
      throw new $c_jl_IllegalStateException(((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).jU(coll);
  }
});
$p.b6 = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.nF = (function(arrayLen, targetLen) {
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
$p.l9 = (function(array, curSize, targetSize) {
  var newLen = this.nF(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.B(0, res, 0, curSize);
    return res;
  }
});
$p.bs = (function() {
  return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
});
$p.aU = (function(source) {
  return this.kD(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  fz: 1,
  ah: 1,
  Z: 1,
  G: 1,
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
  this.e7 = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  fA: 1,
  bR: 1,
  a0: 1,
  V: 1,
  U: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.cj = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  fF: 1,
  aB: 1,
  Z: 1,
  G: 1,
  a: 1
}));
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$();
  }
  return $n_scm_Buffer$;
}
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.e8 = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.e8 = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.bf = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.bv = (function() {
  return this.e8;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.cj = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  fJ: 1,
  aB: 1,
  Z: 1,
  G: 1,
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
$p.cH = (function(elems) {
  return new $c_scm_ListBuffer().fl(elems);
});
$p.b6 = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.bs = (function() {
  return new $c_scm_ListBuffer();
});
$p.aU = (function(source) {
  return new $c_scm_ListBuffer().fl(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  fK: 1,
  ah: 1,
  Z: 1,
  G: 1,
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
  this.gA = null;
  this.jH = null;
  this.jG = 0;
  this.gA = underlying;
  this.jH = mutationCount;
  this.jG = (mutationCount.Y() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.q = (function() {
  $m_scm_MutationTracker$().kf(this.jG, (this.jH.Y() | 0), "mutation occurred during iteration");
  return this.gA.q();
});
$p.h = (function() {
  return this.gA.h();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  fM: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1
}));
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.ak();
    var x$3 = x.ak();
    return (x$2 === x$3);
  } else {
    return false;
  }
}
function $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz) {
  return (clazz.J.Z ? (("Array[" + $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz.J.Q())) + "]") : clazz.J.N);
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.D)));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.D)));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.ea = 0;
  this.jK = 0;
  this.jL = null;
  this.jL = x$2;
  this.ea = 0;
  this.jK = x$2.aA();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.q = (function() {
  return (this.ea < this.jK);
});
$p.h = (function() {
  var result = this.jL.aB(this.ea);
  this.ea = ((1 + this.ea) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  gr: 1,
  r: 1,
  s: 1,
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
$p.cH = (function(elems) {
  return this.kE(elems);
});
$p.b6 = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.kE = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).bv();
});
$p.aU = (function(source) {
  return this.kE(source);
});
$p.bs = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  gy: 1,
  ah: 1,
  Z: 1,
  G: 1,
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
function $c_s_util_Failure(exception) {
  this.cD = null;
  this.cD = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.kM = (function() {
  return true;
});
$p.kN = (function() {
  return false;
});
$p.h2 = (function(f) {
  return this;
});
$p.l4 = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.br(this.cD, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().cG(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.X : e$2);
  }
});
$p.bL = (function(fa, fb) {
  return fa.f(this.cD);
});
$p.aC = (function() {
  return "Failure";
});
$p.aA = (function() {
  return 1;
});
$p.aB = (function(x$1) {
  return ((x$1 === 0) ? this.cD : $m_sr_Statics$().cI(x$1));
});
$p.aP = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().cd(this, (-889275714), false);
});
$p.s = (function() {
  return $m_sr_ScalaRunTime$().ds(this);
});
$p.i = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_util_Failure)) {
    var x = this.cD;
    var x$2 = x$1.cD;
    return ((x === null) ? (x$2 === null) : x.i(x$2));
  } else {
    return false;
  }
});
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bZ)));
}
var $d_s_util_Failure = new $TypeData().i($c_s_util_Failure, "scala.util.Failure", ({
  bZ: 1,
  c1: 1,
  B: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Success(value) {
  this.cE = null;
  this.cE = value;
}
$p = $c_s_util_Success.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $p;
$p.kM = (function() {
  return false;
});
$p.kN = (function() {
  return true;
});
$p.h2 = (function(f) {
  try {
    return new $c_s_util_Success(f.f(this.cE));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().cG(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.X : e$2);
  }
});
$p.l4 = (function(pf) {
  return this;
});
$p.bL = (function(fa, fb) {
  try {
    return fb.f(this.cE);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().cG(e$2)) {
      return fa.f(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.X : e$2);
  }
});
$p.aC = (function() {
  return "Success";
});
$p.aA = (function() {
  return 1;
});
$p.aB = (function(x$1) {
  return ((x$1 === 0) ? this.cE : $m_sr_Statics$().cI(x$1));
});
$p.aP = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().cd(this, (-889275714), false);
});
$p.s = (function() {
  return $m_sr_ScalaRunTime$().ds(this);
});
$p.i = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().aG(this.cE, x$1.cE)));
});
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c0)));
}
var $d_s_util_Success = new $TypeData().i($c_s_util_Success, "scala.util.Success", ({
  c0: 1,
  c1: 1,
  B: 1,
  d: 1,
  a: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.dK = null;
    this.dJ = null;
    this.dK = error;
    this.dJ = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().d1(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().d1(cause)), null, true, true);
    this.gW(cause);
  }
  aP() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().cd(this, (-889275714), false);
  }
  i(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.dK;
      var x$2 = x$0.dK;
      if (((x === null) ? (x$2 === null) : x.i(x$2))) {
        var x$3 = this.dJ;
        var x$4 = x$0.dJ;
        return ((x$3 === null) ? (x$4 === null) : x$3.i(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  aA() {
    return 2;
  }
  aC() {
    return "ErrorHandlingError";
  }
  aB(n) {
    if ((n === 0)) {
      return this.dK;
    }
    if ((n === 1)) {
      return this.dJ;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  s() {
    return ((("ErrorHandlingError: " + this.dK) + "; cause: ") + this.dJ);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aM)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", ({
  aM: 1,
  ad: 1,
  t: 1,
  a: 1,
  d: 1,
  B: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.dL = null;
    this.dL = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().d1(error)), null, true, true);
  }
  aP() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().cd(this, (-889275714), false);
  }
  i(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.dL;
      var x$2 = x$0.dL;
      return ((x === null) ? (x$2 === null) : x.i(x$2));
    } else {
      return false;
    }
  }
  aA() {
    return 1;
  }
  aC() {
    return "ObserverError";
  }
  aB(n) {
    if ((n === 0)) {
      return this.dL;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  s() {
    return ("ObserverError: " + this.dL);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aN)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverError, "com.raquo.airstream.core.AirstreamError$ObserverError", ({
  aN: 1,
  ad: 1,
  t: 1,
  a: 1,
  d: 1,
  B: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.dN = null;
    this.dM = null;
    this.dN = error;
    this.dM = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().d1(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().d1(cause)), null, true, true);
    this.gW(cause);
  }
  aP() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().cd(this, (-889275714), false);
  }
  i(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.dN;
      var x$2 = x$0.dN;
      if (((x === null) ? (x$2 === null) : x.i(x$2))) {
        var x$3 = this.dM;
        var x$4 = x$0.dM;
        return ((x$3 === null) ? (x$4 === null) : x$3.i(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  aA() {
    return 2;
  }
  aC() {
    return "ObserverErrorHandlingError";
  }
  aB(n) {
    if ((n === 0)) {
      return this.dN;
    }
    if ((n === 1)) {
      return this.dM;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  s() {
    return ((("ObserverErrorHandlingError: " + this.dN) + "; cause: ") + this.dM);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aO)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", ({
  aO: 1,
  ad: 1,
  t: 1,
  a: 1,
  d: 1,
  B: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(trx, depth) {
    super();
    this.d7 = null;
    this.d6 = 0;
    this.d7 = trx;
    this.d6 = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  aP() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().c(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().c(acc, $m_sr_Statics$().a2(this.d7));
    acc = $m_sr_Statics$().c(acc, this.d6);
    return $m_sr_Statics$().x(acc, 2);
  }
  i(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.d6 === x$0.d6)) {
        var x = this.d7;
        var x$2 = x$0.d7;
        return (x === x$2);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  aA() {
    return 2;
  }
  aC() {
    return "TransactionDepthExceeded";
  }
  aB(n) {
    if ((n === 0)) {
      return this.d7;
    }
    if ((n === 1)) {
      return this.d6;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  s() {
    return ((("TransactionDepthExceeded: " + this.d7) + "; maxDepth: ") + this.d6);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aP)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded, "com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded", ({
  aP: 1,
  ad: 1,
  t: 1,
  a: 1,
  d: 1,
  B: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$VarError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(message, cause) {
    super();
    this.dP = null;
    this.dO = null;
    this.dP = message;
    this.dO = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, $m_Lcom_raquo_airstream_core_AirstreamError$().mm(message, cause), null, true, true);
    if ((!cause.e())) {
      this.gW(cause.H());
    }
  }
  aP() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().cd(this, (-889275714), false);
  }
  i(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$VarError)) {
      if ((this.dP === x$0.dP)) {
        var x = this.dO;
        var x$2 = x$0.dO;
        return ((x === null) ? (x$2 === null) : x.i(x$2));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  aA() {
    return 2;
  }
  aC() {
    return "VarError";
  }
  aB(n) {
    if ((n === 0)) {
      return this.dP;
    }
    if ((n === 1)) {
      return this.dO;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  s() {
    return ((("VarError: " + this.dP) + "; cause: ") + this.dO);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$VarError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aQ)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$VarError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$VarError, "com.raquo.airstream.core.AirstreamError$VarError", ({
  aQ: 1,
  ad: 1,
  t: 1,
  a: 1,
  d: 1,
  B: 1
}));
function $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz) {
  $thiz.ha();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V($thiz) {
  $thiz.hB = 1;
  $thiz.eG = 0;
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V($thiz) {
  $thiz.eG = ((1 + $thiz.eG) | 0);
  $thiz.eF.hv.Y();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V($thiz) {
  try {
    var $x_1 = new $c_s_util_Success(($thiz.eF.ht.Y(), (void 0)));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().cG(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.X : e$2);
    }
  }
  $x_1.l4(new $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1($thiz));
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V($thiz) {
  $thiz.eF.hu.Y();
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar(initial) {
  this.i0 = null;
  this.lh = null;
  this.fE = null;
  this.fD = null;
  this.eM = null;
  this.i0 = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V(this);
  this.fE = initial;
  this.fD = new $c_Lcom_raquo_airstream_state_VarSignal(this.fE, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
  this.eM = this.fD;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.d3 = (function() {
  return this.i0;
});
$p.d0 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.s = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.h9 = (function(value, transaction) {
  this.fE = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.fD, value, transaction);
});
$p.ew = (function() {
  return this.eM;
});
var $d_Lcom_raquo_airstream_state_SourceVar = new $TypeData().i($c_Lcom_raquo_airstream_state_SourceVar, "com.raquo.airstream.state.SourceVar", ({
  cA: 1,
  ae: 1,
  av: 1,
  al: 1,
  a4: 1,
  cC: 1
}));
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V($thiz, propDomName) {
  var x = $thiz.fV;
  if ((x === (void 0))) {
    $thiz.fV = $m_sjs_js_defined$().ma($m_Lcom_raquo_ew_JsArray$().aT($m_sr_ScalaRunTime$().p(new ($d_T.r().C)([propDomName]))));
  } else {
    (x.push(propDomName) | 0);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z($thiz, propDomName) {
  var x = $thiz.j5;
  if ((x !== (void 0))) {
    _return: {
      var len = (x.length | 0);
      var i = 0;
      while ((i < len)) {
        if ((x[i].oE() === propDomName)) {
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
  this.eU = null;
  this.bH = null;
  this.fU = null;
  this.cO = null;
  this.fW = null;
  this.aW = null;
  this.j5 = null;
  this.fV = null;
  this.fW = tag;
  this.aW = ref;
  this.eU = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
  this.j5 = (void 0);
  this.fV = (void 0);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.cF = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().dv(parentNode, this, (void 0));
});
$p.f9 = (function() {
  return this.bH;
});
$p.ki = (function(x$0) {
  this.bH = x$0;
});
$p.ez = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.ev = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.mp = (function() {
  if ($m_Lcom_raquo_laminar_DomApi$().n1(this.aW)) {
    var x1 = this.fW;
    if (false) {
      return x1.oo();
    }
    return (void 0);
  } else {
    return $m_Lcom_raquo_laminar_inputs_InputController$().iT;
  }
});
$p.mZ = (function(propDomName) {
  var x = this.mp();
  return ((x !== (void 0)) && $m_Lcom_raquo_ew_JsArray$RichJsArray$().mV(x, propDomName, 0));
});
$p.nm = (function(key) {
  if ((key instanceof $c_Lcom_raquo_laminar_keys_HtmlProp)) {
    if (this.mZ(key.dd)) {
      if ($p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z(this, key.dd)) {
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((((("Can not add uncontrolled `" + key.dd) + " <-- ???` to element `") + $m_Lcom_raquo_laminar_DomApi$().kj(this.aW)) + "` that already has an input controller for `") + key.dd) + "` property."));
      } else {
        $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V(this, key.dd);
      }
    }
  }
});
$p.s = (function() {
  return (("ReactiveHtmlElement(" + ((this.aW !== null) ? this.aW.outerHTML : ("tag=" + this.fW.fZ))) + ")");
});
$p.Z = (function() {
  return this.aW;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  dL: 1,
  an: 1,
  a1: 1,
  aw: 1,
  b3: 1,
  dJ: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().h4($thiz);
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b6)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  b6: 1,
  a7: 1,
  a: 1,
  a2: 1,
  W: 1,
  af: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  return $m_jl_FloatingPointBits$().h4(value);
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  dY: 1,
  a7: 1,
  a: 1,
  a2: 1,
  W: 1,
  af: 1
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
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  e1: 1,
  a7: 1,
  a: 1,
  a2: 1,
  W: 1,
  af: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  return ((that instanceof $c_RTLong) && (($thiz.l === that.l) && ($thiz.n === that.n)));
}
function $f_jl_Long__hashCode__I($thiz) {
  return ($thiz.l ^ $thiz.n);
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().l2($thiz.l, $thiz.n);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b9)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  b9: 1,
  a7: 1,
  a: 1,
  a2: 1,
  W: 1,
  af: 1
}), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  e7: 1,
  b7: 1,
  F: 1,
  E: 1,
  t: 1,
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
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().nZ(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  ec: 1,
  a: 1,
  a2: 1,
  ax: 1,
  W: 1,
  af: 1
}), ((x) => ((typeof x) === "string")));
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().i($c_jl_StringIndexOutOfBoundsException, "java.lang.StringIndexOutOfBoundsException", ({
  ef: 1,
  b8: 1,
  F: 1,
  E: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_s_None$() {
}
$p = $c_s_None$.prototype = new $h_s_Option();
$p.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
}
$h_s_None$.prototype = $p;
$p.mL = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$p.aC = (function() {
  return "None";
});
$p.aA = (function() {
  return 0;
});
$p.aB = (function(x$1) {
  return $m_sr_Statics$().cI(x$1);
});
$p.aP = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return 2433880;
});
$p.s = (function() {
  return "None";
});
$p.H = (function() {
  this.mL();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  eB: 1,
  bd: 1,
  b: 1,
  B: 1,
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
  this.dY = null;
  this.dY = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.H = (function() {
  return this.dY;
});
$p.aC = (function() {
  return "Some";
});
$p.aA = (function() {
  return 1;
});
$p.aB = (function(x$1) {
  return ((x$1 === 0) ? this.dY : $m_sr_Statics$().cI(x$1));
});
$p.aP = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().cd(this, (-889275714), false);
});
$p.s = (function() {
  return $m_sr_ScalaRunTime$().ds(this);
});
$p.i = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().aG(this.dY, x$1.dY)));
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.be)));
}
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  be: 1,
  bd: 1,
  b: 1,
  B: 1,
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
$p.bE = (function() {
  return $m_sc_Iterable$();
});
$p.bS = (function() {
  return this.b8();
});
$p.b8 = (function() {
  return "Iterable";
});
$p.s = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.fc = (function(coll) {
  return this.bE().aU(coll);
});
$p.bt = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.e = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.bh = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.gK = (function(pf) {
  return $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(this, pf);
});
$p.dt = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.ld = (function() {
  return $m_sci_Vector$().bu(this);
});
$p.A = (function() {
  return (-1);
});
$p.fb = (function(coll) {
  return this.fc(coll);
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.bm = xs;
  $thiz.r = 0;
  $thiz.ba = $m_jl_reflect_Array$().bM($thiz.bm);
  return $thiz;
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.bm = null;
  this.r = 0;
  this.ba = 0;
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.A = (function() {
  return ((this.ba - this.r) | 0);
});
$p.q = (function() {
  return (this.r < this.ba);
});
$p.h = (function() {
  if ((this.r >= $m_jl_reflect_Array$().bM(this.bm))) {
    $m_sc_Iterator$().K.h();
  }
  var r = $m_sr_ScalaRunTime$().cZ(this.bm, this.r);
  this.r = ((1 + this.r) | 0);
  return r;
});
$p.dy = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.r + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.ba;
    } else {
      var a = this.ba;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.r = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  X: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.bn) ? $thiz.bn : value));
}
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.gj = self;
  $thiz.c0 = 0;
  $thiz.bn = self.o();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.gj = null;
  this.c0 = 0;
  this.bn = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.A = (function() {
  return this.bn;
});
$p.q = (function() {
  return (this.bn > 0);
});
$p.h = (function() {
  if ((this.bn > 0)) {
    var r = this.gj.t(this.c0);
    this.c0 = ((1 + this.c0) | 0);
    this.bn = (((-1) + this.bn) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().K.h();
  }
});
$p.dy = (function(n) {
  if ((n > 0)) {
    this.c0 = ((this.c0 + n) | 0);
    var b = ((this.bn - n) | 0);
    this.bn = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.dB = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.bn = ((b < 0) ? 0 : b);
  this.c0 = ((this.c0 + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  bi: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(self) {
  this.jk = null;
  this.aJ = 0;
  this.dk = 0;
  this.jk = self;
  this.aJ = self.o();
  this.dk = (((-1) + this.aJ) | 0);
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = $p;
$p.q = (function() {
  return (this.aJ > 0);
});
$p.h = (function() {
  if ((this.aJ > 0)) {
    var r = this.jk.t(this.dk);
    this.dk = (((-1) + this.dk) | 0);
    this.aJ = (((-1) + this.aJ) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().K.h();
  }
});
$p.dB = (function(from, until) {
  if ((this.aJ > 0)) {
    if ((this.aJ <= from)) {
      this.aJ = 0;
    } else if ((from <= 0)) {
      if (((until >= 0) && (until < this.aJ))) {
        this.aJ = until;
      }
    } else {
      this.dk = ((this.dk - from) | 0);
      if (((until >= 0) && (until < this.aJ))) {
        if ((until <= from)) {
          this.aJ = 0;
        } else {
          this.aJ = ((until - from) | 0);
        }
      } else {
        this.aJ = ((this.aJ - from) | 0);
      }
    }
  }
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewReverseIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewReverseIterator, "scala.collection.IndexedSeqView$IndexedSeqViewReverseIterator", ({
  eV: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.e8 = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().K);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.lV = (function(elem) {
  this.e8 = this.e8.gL(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.b2 = (function(elem) {
  return this.lV(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  f3: 1,
  fI: 1,
  ac: 1,
  a0: 1,
  V: 1,
  U: 1
}));
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.d2().b6();
  b.bf($thiz);
  b.bf(suffix);
  return b.bv();
}
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.gl)) {
    $thiz.gm = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.gl = true;
  }
  return $thiz.gm;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.gl) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.gm);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.gm = null;
  this.gn = null;
  this.gl = false;
  $n_sci_ArraySeq$ = this;
  this.gn = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.gR = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.le($m_s_Array$().kA(it, tag)));
});
$p.kR = (function(evidence$2) {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((b$2$2) => $m_sci_ArraySeq$().le($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2$2, evidence$2)))));
});
$p.le = (function(x) {
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
$p.gQ = (function(it, evidence$5) {
  return this.gR(it, evidence$5);
});
$p.km = (function(evidence$6) {
  return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  fg: 1,
  bm: 1,
  bg: 1,
  bf: 1,
  bh: 1,
  a: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.u)));
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.u)));
}
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.bc <= $thiz.a6)) {
    $m_sc_Iterator$().K.h();
  }
  $thiz.cs = ((1 + $thiz.cs) | 0);
  var slice = $thiz.gt.bX($thiz.cs);
  while ((slice.a.length === 0)) {
    $thiz.cs = ((1 + $thiz.cs) | 0);
    slice = $thiz.gt.bX($thiz.cs);
  }
  $thiz.e4 = $thiz.cT;
  var count = $thiz.jv;
  var idx = $thiz.cs;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  $thiz.cr = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
  var x1 = $thiz.cr;
  switch (x1) {
    case 1: {
      $thiz.an = slice;
      break;
    }
    case 2: {
      $thiz.ao = slice;
      break;
    }
    case 3: {
      $thiz.aX = slice;
      break;
    }
    case 4: {
      $thiz.bI = slice;
      break;
    }
    case 5: {
      $thiz.cS = slice;
      break;
    }
    case 6: {
      $thiz.gs = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  $thiz.cT = (($thiz.e4 + Math.imul(slice.a.length, (1 << Math.imul(5, (((-1) + $thiz.cr) | 0))))) | 0);
  if (($thiz.cT > $thiz.c5)) {
    $thiz.cT = $thiz.c5;
  }
  if (($thiz.cr > 1)) {
    $thiz.dp = (((-1) + (1 << Math.imul(5, $thiz.cr))) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.a6 - $thiz.bc) | 0) + $thiz.c5) | 0);
  if ((pos === $thiz.cT)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.cr > 1)) {
    var io = ((pos - $thiz.e4) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.dp ^ io));
    $thiz.dp = io;
  }
  $thiz.bc = (($thiz.bc - $thiz.a6) | 0);
  var a = $thiz.an.a.length;
  var b = $thiz.bc;
  $thiz.c4 = ((a < b) ? a : b);
  $thiz.a6 = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.an = $thiz.ao.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.ao = $thiz.aX.a[(31 & ((io >>> 10) | 0))];
    $thiz.an = $thiz.ao.a[0];
  } else if ((xor < 1048576)) {
    $thiz.aX = $thiz.bI.a[(31 & ((io >>> 15) | 0))];
    $thiz.ao = $thiz.aX.a[0];
    $thiz.an = $thiz.ao.a[0];
  } else if ((xor < 33554432)) {
    $thiz.bI = $thiz.cS.a[(31 & ((io >>> 20) | 0))];
    $thiz.aX = $thiz.bI.a[0];
    $thiz.ao = $thiz.aX.a[0];
    $thiz.an = $thiz.ao.a[0];
  } else {
    $thiz.cS = $thiz.gs.a[((io >>> 25) | 0)];
    $thiz.bI = $thiz.cS.a[0];
    $thiz.aX = $thiz.bI.a[0];
    $thiz.ao = $thiz.aX.a[0];
    $thiz.an = $thiz.ao.a[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.an = $thiz.ao.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.ao = $thiz.aX.a[(31 & ((io >>> 10) | 0))];
    $thiz.an = $thiz.ao.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.aX = $thiz.bI.a[(31 & ((io >>> 15) | 0))];
    $thiz.ao = $thiz.aX.a[(31 & ((io >>> 10) | 0))];
    $thiz.an = $thiz.ao.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.bI = $thiz.cS.a[(31 & ((io >>> 20) | 0))];
    $thiz.aX = $thiz.bI.a[(31 & ((io >>> 15) | 0))];
    $thiz.ao = $thiz.aX.a[(31 & ((io >>> 10) | 0))];
    $thiz.an = $thiz.ao.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.cS = $thiz.gs.a[((io >>> 25) | 0)];
    $thiz.bI = $thiz.cS.a[(31 & ((io >>> 20) | 0))];
    $thiz.aX = $thiz.bI.a[(31 & ((io >>> 15) | 0))];
    $thiz.ao = $thiz.aX.a[(31 & ((io >>> 10) | 0))];
    $thiz.an = $thiz.ao.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.gt = null;
  this.c5 = 0;
  this.jv = 0;
  this.an = null;
  this.ao = null;
  this.aX = null;
  this.bI = null;
  this.cS = null;
  this.gs = null;
  this.c4 = 0;
  this.a6 = 0;
  this.dp = 0;
  this.bc = 0;
  this.cs = 0;
  this.cr = 0;
  this.e4 = 0;
  this.cT = 0;
  this.gt = v;
  this.c5 = totalLength;
  this.jv = sliceCount;
  this.an = v.b;
  this.c4 = this.an.a.length;
  this.a6 = 0;
  this.dp = 0;
  this.bc = this.c5;
  this.cs = 0;
  this.cr = 1;
  this.e4 = 0;
  this.cT = this.c4;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.A = (function() {
  return ((this.bc - this.a6) | 0);
});
$p.q = (function() {
  return (this.bc > this.a6);
});
$p.h = (function() {
  if ((this.a6 === this.c4)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.an.a[this.a6];
  this.a6 = ((1 + this.a6) | 0);
  return r;
});
$p.dy = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.a6 - this.bc) | 0) + this.c5) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.c5;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.c5)) {
      this.a6 = 0;
      this.bc = 0;
      this.c4 = 0;
    } else {
      while ((newpos >= this.cT)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.e4) | 0);
      if ((this.cr > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.dp ^ io));
        this.dp = io;
      }
      this.c4 = this.an.a.length;
      this.a6 = (31 & io);
      this.bc = ((this.a6 + ((this.c5 - newpos) | 0)) | 0);
      if ((this.c4 > this.bc)) {
        this.c4 = this.bc;
      }
    }
  }
  return this;
});
$p.bh = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().bM(xs);
  var srcLen = ((this.bc - this.a6) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.a6 === this.c4)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total - copied) | 0);
    var b = ((this.an.a.length - this.a6) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.an;
      var srcPos = this.a6;
      var destPos = ((start + copied) | 0);
      src.B(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().el(this.an, this.a6, xs, ((start + copied) | 0), count);
    }
    this.a6 = ((this.a6 + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  fr: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1,
  A: 1
}));
/** @constructor */
function $c_sci_RangeIterator(start, step, lastElement, initiallyEmpty) {
  this.dq = 0;
  this.cV = 0;
  this.ct = false;
  this.cU = 0;
  this.dq = step;
  this.cV = lastElement;
  this.ct = (!initiallyEmpty);
  this.cU = start;
}
$p = $c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $p;
$p.A = (function() {
  return (this.ct ? ((1 + $intDiv(((this.cV - this.cU) | 0), this.dq)) | 0) : 0);
});
$p.q = (function() {
  return this.ct;
});
$p.kS = (function() {
  if ((!this.ct)) {
    $m_sc_Iterator$().K.h();
  }
  var value = this.cU;
  this.ct = (value !== this.cV);
  this.cU = ((value + this.dq) | 0);
  return value;
});
$p.dy = (function(n) {
  if ((n > 0)) {
    var value = this.cU;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.dq, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((-2147483648) ^ lo) < ((-2147483648) ^ value)) ? ((1 + ((hi + hi$1) | 0)) | 0) : ((hi + hi$1) | 0));
    if ((this.dq > 0)) {
      var value$2 = this.cV;
      var hi$3 = (value$2 >> 31);
      if (((hi$3 === hi$2) ? (((-2147483648) ^ value$2) < ((-2147483648) ^ lo)) : (hi$3 < hi$2))) {
        var this$6__lo = value$2;
        var this$6__hi = hi$3;
      } else {
        var this$6__lo = lo;
        var this$6__hi = hi$2;
      }
      this.cU = this$6__lo;
      var value$3 = this.cV;
      var hi$4 = (value$3 >> 31);
      this.ct = ((hi$2 === hi$4) ? (((-2147483648) ^ lo) <= ((-2147483648) ^ value$3)) : (hi$2 < hi$4));
    } else if ((this.dq < 0)) {
      var value$4 = this.cV;
      var hi$5 = (value$4 >> 31);
      if (((hi$5 === hi$2) ? (((-2147483648) ^ value$4) > ((-2147483648) ^ lo)) : (hi$5 > hi$2))) {
        var this$10__lo = value$4;
        var this$10__hi = hi$5;
      } else {
        var this$10__lo = lo;
        var this$10__hi = hi$2;
      }
      this.cU = this$10__lo;
      var value$5 = this.cV;
      var hi$6 = (value$5 >> 31);
      this.ct = ((hi$2 === hi$6) ? (((-2147483648) ^ lo) >= ((-2147483648) ^ value$5)) : (hi$2 > hi$6));
    }
  }
  return this;
});
$p.h = (function() {
  return this.kS();
});
var $d_sci_RangeIterator = new $TypeData().i($c_sci_RangeIterator, "scala.collection.immutable.RangeIterator", ({
  ft: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.jA = 0;
  $thiz.jB = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.jA = 0;
  this.jB = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
/** @constructor */
function $c_scm_ArraySeq$() {
  this.gz = null;
  this.gy = null;
  $n_scm_ArraySeq$ = this;
  this.gz = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.gy = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.mJ = (function(it, evidence$2) {
  return this.h1($m_s_Array$().kA(it, evidence$2));
});
$p.kR = (function(evidence$3) {
  return new $c_scm_Builder$$anon$1(new $c_scm_ArrayBuilder$generic(evidence$3.ak()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => $m_scm_ArraySeq$().h1(x$2$2))));
});
$p.h1 = (function(x) {
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
$p.gQ = (function(it, evidence$5) {
  return this.mJ(it, evidence$5);
});
$p.km = (function(evidence$6) {
  return this.gy;
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  fE: 1,
  bm: 1,
  bg: 1,
  bf: 1,
  bh: 1,
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
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.e9 = null;
  this.e9 = runtimeClass;
}
$p = $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $p;
$p.i = (function(x) {
  return $f_s_reflect_ClassTag__equals__O__Z(this, x);
});
$p.v = (function() {
  return $m_sr_Statics$().a2(this.e9);
});
$p.s = (function() {
  return $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this.e9);
});
$p.ak = (function() {
  return this.e9;
});
$p.b5 = (function(len) {
  return this.e9.J.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  fQ: 1,
  D: 1,
  M: 1,
  N: 1,
  a: 1,
  d: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2(key$2) {
  this.fM = null;
  this.fN = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$2, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2, "com.raquo.laminar.defs.styles.StyleProps$$anon$2", ({
  d6: 1,
  dq: 1,
  aa: 1,
  d8: 1,
  dk: 1,
  d7: 1,
  d9: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.bm = null;
  this.r = 0;
  this.ba = 0;
  this.gb = null;
  this.gb = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $p;
$p.nc = (function() {
  if ((this.r >= this.gb.a.length)) {
    $m_sc_Iterator$().K.h();
  }
  var r = this.gb.a[this.r];
  this.r = ((1 + this.r) | 0);
  return r;
});
$p.h = (function() {
  return this.nc();
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcB$sp, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", ({
  eJ: 1,
  X: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
  this.bm = null;
  this.r = 0;
  this.ba = 0;
  this.gc = null;
  this.gc = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $p;
$p.nd = (function() {
  if ((this.r >= this.gc.a.length)) {
    $m_sc_Iterator$().K.h();
  }
  var r = this.gc.a[this.r];
  this.r = ((1 + this.r) | 0);
  return r;
});
$p.h = (function() {
  return $bC(this.nd());
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcC$sp, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", ({
  eK: 1,
  X: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
  this.bm = null;
  this.r = 0;
  this.ba = 0;
  this.gd = null;
  this.gd = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $p;
$p.ne = (function() {
  if ((this.r >= this.gd.a.length)) {
    $m_sc_Iterator$().K.h();
  }
  var r = this.gd.a[this.r];
  this.r = ((1 + this.r) | 0);
  return r;
});
$p.h = (function() {
  return this.ne();
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcD$sp, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", ({
  eL: 1,
  X: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
  this.bm = null;
  this.r = 0;
  this.ba = 0;
  this.ge = null;
  this.ge = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $p;
$p.nf = (function() {
  if ((this.r >= this.ge.a.length)) {
    $m_sc_Iterator$().K.h();
  }
  var r = this.ge.a[this.r];
  this.r = ((1 + this.r) | 0);
  return r;
});
$p.h = (function() {
  return this.nf();
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcF$sp, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", ({
  eM: 1,
  X: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
  this.bm = null;
  this.r = 0;
  this.ba = 0;
  this.gf = null;
  this.gf = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $p;
$p.ng = (function() {
  if ((this.r >= this.gf.a.length)) {
    $m_sc_Iterator$().K.h();
  }
  var r = this.gf.a[this.r];
  this.r = ((1 + this.r) | 0);
  return r;
});
$p.h = (function() {
  return this.ng();
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcI$sp, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", ({
  eN: 1,
  X: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
  this.bm = null;
  this.r = 0;
  this.ba = 0;
  this.gg = null;
  this.gg = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $p;
$p.nh = (function() {
  if ((this.r >= this.gg.a.length)) {
    $m_sc_Iterator$().K.h();
  }
  var t = this.gg.a[this.r];
  var lo = t.l;
  var hi = t.n;
  this.r = ((1 + this.r) | 0);
  return new $c_RTLong(lo, hi);
});
$p.h = (function() {
  return this.nh();
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcJ$sp, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", ({
  eO: 1,
  X: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
  this.bm = null;
  this.r = 0;
  this.ba = 0;
  this.gh = null;
  this.gh = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $p;
$p.ni = (function() {
  if ((this.r >= this.gh.a.length)) {
    $m_sc_Iterator$().K.h();
  }
  var r = this.gh.a[this.r];
  this.r = ((1 + this.r) | 0);
  return r;
});
$p.h = (function() {
  return this.ni();
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcS$sp, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", ({
  eP: 1,
  X: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
  this.bm = null;
  this.r = 0;
  this.ba = 0;
  this.jj = null;
  this.jj = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $p;
$p.nj = (function() {
  if ((this.r >= this.jj.a.length)) {
    $m_sc_Iterator$().K.h();
  }
  this.r = ((1 + this.r) | 0);
});
$p.h = (function() {
  this.nj();
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcV$sp, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", ({
  eQ: 1,
  X: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
  this.bm = null;
  this.r = 0;
  this.ba = 0;
  this.gi = null;
  this.gi = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $p;
$p.nk = (function() {
  if ((this.r >= this.gi.a.length)) {
    $m_sc_Iterator$().K.h();
  }
  var r = this.gi.a[this.r];
  this.r = ((1 + this.r) | 0);
  return r;
});
$p.h = (function() {
  return this.nk();
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcZ$sp, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", ({
  eR: 1,
  X: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterable$$anon$1(a$1) {
  this.jl = null;
  this.jl = a$1;
}
$p = $c_sc_Iterable$$anon$1.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_Iterable$$anon$1;
/** @constructor */
function $h_sc_Iterable$$anon$1() {
}
$h_sc_Iterable$$anon$1.prototype = $p;
$p.m = (function() {
  return new $c_sc_Iterator$$anon$20(this.jl);
});
$p.A = (function() {
  return 1;
});
var $d_sc_Iterable$$anon$1 = new $TypeData().i($c_sc_Iterable$$anon$1, "scala.collection.Iterable$$anon$1", ({
  eY: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.bS() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.a5)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.jA = 0;
  this.jB = 0;
  this.dr = null;
  this.jC = false;
  this.gx = null;
  this.dr = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.jC = (elementClass === $d_C.l());
  this.gx = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.jV = (function(elem) {
  var unboxedElem = (this.jC ? $uC(elem) : ((elem === null) ? this.dr.J.z : elem));
  this.gx.push(unboxedElem);
  return this;
});
$p.lP = (function(xs) {
  var it = xs.m();
  while (it.q()) {
    this.jV(it.h());
  }
  return this;
});
$p.bv = (function() {
  var elemRuntimeClass = ((this.dr === $d_V.l()) ? $d_jl_Void.l() : (((this.dr === $d_sr_Null$.l()) || (this.dr === $d_sr_Nothing$.l())) ? $d_O.l() : this.dr));
  return elemRuntimeClass.J.r().w(this.gx);
});
$p.s = (function() {
  return "ArrayBuilder.generic";
});
$p.bf = (function(elems) {
  return this.lP(elems);
});
$p.b2 = (function(elem) {
  return this.jV(elem);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  fD: 1,
  fC: 1,
  ac: 1,
  a0: 1,
  V: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.gj = null;
  this.c0 = 0;
  this.bn = 0;
  this.jF = null;
  this.jE = 0;
  this.jF = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.jE = (mutationCount.Y() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.q = (function() {
  $m_scm_MutationTracker$().kf(this.jE, (this.jF.Y() | 0), "mutation occurred during iteration");
  return (this.bn > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  fH: 1,
  bi: 1,
  r: 1,
  s: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.S = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.s = (function() {
  return this.S;
});
$p.i = (function(that) {
  return (this === that);
});
$p.v = (function() {
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
    this.X = null;
    this.X = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  em() {
    return $dp_toString__T(this.X);
  }
  aC() {
    return "JavaScriptException";
  }
  aA() {
    return 1;
  }
  aB(x$1) {
    return ((x$1 === 0) ? this.X : $m_sr_Statics$().cI(x$1));
  }
  aP() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().cd(this, (-889275714), false);
  }
  i(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().aG(this.X, x$1.X)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bY)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  bY: 1,
  F: 1,
  E: 1,
  t: 1,
  a: 1,
  B: 1,
  d: 1
}));
function $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, newValue) {
  if ((!($thiz.h3() === (void 0)))) {
    $thiz.gC($m_Lcom_raquo_airstream_core_Signal$().kU());
  }
  $thiz.kQ(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.h3();
  if ((x === (void 0))) {
    $thiz.gC($m_Lcom_raquo_airstream_core_Signal$().kU());
    var nextValue = $thiz.gM();
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
  var isError = nextValue.kM();
  var elem = false;
  elem = false;
  $thiz.bU(false);
  var this$ = $thiz.ca();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.dA(nextValue);
    if ((isError && (!elem))) {
      var ev$5 = true;
      elem = ev$5;
    }
  }
  var this$$1 = $thiz.cc();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.fi(nextValue, transaction);
    if ((isError && (!elem))) {
      var ev$6 = true;
      elem = ev$6;
    }
  }
  $thiz.bU(true);
  var x = $thiz.d4();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].Y();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
  if ((isError && (!elem))) {
    nextValue.bL(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
      $m_Lcom_raquo_airstream_core_AirstreamError$().bG(err);
    })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))));
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.bU(false);
  var this$ = $thiz.ca();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    try {
      observer.er(nextValue);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      $m_Lcom_raquo_airstream_core_AirstreamError$().bG(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.cc();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.h7(nextValue, transaction);
  }
  $thiz.bU(true);
  var x = $thiz.d4();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].Y();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.bU(false);
  var this$ = $thiz.ca();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.eq(nextError);
  }
  var this$$1 = $thiz.cc();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.kX(nextError, transaction);
  }
  $thiz.bU(true);
  var x = $thiz.d4();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].Y();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.e())) {
      return s;
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = s.aH();
      n = temp$n;
      s = temp$s;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.S = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.ak = (function() {
  return $d_Z.l();
});
$p.b5 = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.S = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.ak = (function() {
  return $d_B.l();
});
$p.b5 = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.S = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.ak = (function() {
  return $d_C.l();
});
$p.b5 = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.S = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.ak = (function() {
  return $d_D.l();
});
$p.b5 = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.S = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.ak = (function() {
  return $d_F.l();
});
$p.b5 = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.S = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.ak = (function() {
  return $d_I.l();
});
$p.b5 = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.S = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.ak = (function() {
  return $d_J.l();
});
$p.b5 = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.c8 = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.s = (function() {
  return this.c8;
});
$p.i = (function(that) {
  return (this === that);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.S = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.ak = (function() {
  return $d_S.l();
});
$p.b5 = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.S = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.ak = (function() {
  return $d_V.l();
});
$p.b5 = (function(len) {
  return new ($d_jl_Void.r().C)(len);
});
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.bE = (function() {
  return $m_sc_View$();
});
$p.s = (function() {
  return $f_sc_View__toString__T(this);
});
$p.b8 = (function() {
  return "View";
});
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.c8 = null;
  this.c8 = "Any";
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.ak = (function() {
  return $d_O.l();
});
$p.b5 = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  fS: 1,
  as: 1,
  ar: 1,
  Q: 1,
  D: 1,
  M: 1,
  N: 1,
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
  this.S = null;
  this.S = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  fU: 1,
  fT: 1,
  a3: 1,
  Q: 1,
  D: 1,
  M: 1,
  N: 1,
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
  this.S = null;
  this.S = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  fW: 1,
  fV: 1,
  a3: 1,
  Q: 1,
  D: 1,
  M: 1,
  N: 1,
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
  this.S = null;
  this.S = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  fY: 1,
  fX: 1,
  a3: 1,
  Q: 1,
  D: 1,
  M: 1,
  N: 1,
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
  this.S = null;
  this.S = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  g0: 1,
  fZ: 1,
  a3: 1,
  Q: 1,
  D: 1,
  M: 1,
  N: 1,
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
  this.S = null;
  this.S = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  g2: 1,
  g1: 1,
  a3: 1,
  Q: 1,
  D: 1,
  M: 1,
  N: 1,
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
  this.S = null;
  this.S = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  g4: 1,
  g3: 1,
  a3: 1,
  Q: 1,
  D: 1,
  M: 1,
  N: 1,
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
  this.S = null;
  this.S = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  g6: 1,
  g5: 1,
  a3: 1,
  Q: 1,
  D: 1,
  M: 1,
  N: 1,
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
  this.c8 = null;
  this.c8 = "Nothing";
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.ak = (function() {
  return $d_sr_Nothing$.l();
});
$p.b5 = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  g7: 1,
  as: 1,
  ar: 1,
  Q: 1,
  D: 1,
  M: 1,
  N: 1,
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
  this.c8 = null;
  this.c8 = "Null";
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.ak = (function() {
  return $d_sr_Null$.l();
});
$p.b5 = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  g8: 1,
  as: 1,
  ar: 1,
  Q: 1,
  D: 1,
  M: 1,
  N: 1,
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
  this.c8 = null;
  this.c8 = "Object";
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.ak = (function() {
  return $d_O.l();
});
$p.b5 = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  g9: 1,
  as: 1,
  ar: 1,
  Q: 1,
  D: 1,
  M: 1,
  N: 1,
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
  this.S = null;
  this.S = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  gb: 1,
  ga: 1,
  a3: 1,
  Q: 1,
  D: 1,
  M: 1,
  N: 1,
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
  this.S = null;
  this.S = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  gd: 1,
  gc: 1,
  a3: 1,
  Q: 1,
  D: 1,
  M: 1,
  N: 1,
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
/** @constructor */
function $c_Ladversaries_Stage$$anon$1(\u03b4name$2, _$ordinal$2, outer) {
  this.fq = null;
  this.fq = \u03b4name$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_Ladversaries_Stage$$anon$1.prototype = new $h_Ladversaries_Stage();
$p.constructor = $c_Ladversaries_Stage$$anon$1;
/** @constructor */
function $h_Ladversaries_Stage$$anon$1() {
}
$h_Ladversaries_Stage$$anon$1.prototype = $p;
$p.aA = (function() {
  return 0;
});
$p.aB = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aC = (function() {
  return this.fq;
});
$p.s = (function() {
  return this.fq;
});
var $d_Ladversaries_Stage$$anon$1 = new $TypeData().i($c_Ladversaries_Stage$$anon$1, "adversaries.Stage$$anon$1", ({
  c8: 1,
  c6: 1,
  d: 1,
  B: 1,
  a: 1,
  fR: 1,
  gl: 1,
  aq: 1,
  bV: 1,
  fN: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.eH, $thiz, false);
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.eH, $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomStreamSource(makeConfig) {
  this.hz = null;
  this.hy = false;
  this.hA = null;
  this.hw = null;
  this.hx = null;
  this.hC = false;
  this.hB = 0;
  this.eG = 0;
  this.eF = null;
  this.hz = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V(this);
  this.eF = makeConfig.m6(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, value, _$1);
    })));
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => ((_$2) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, err$2, _$2);
    }))(err)));
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.eG)), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this))));
}
$p = $c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomStreamSource;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomStreamSource() {
}
$h_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = $p;
$p.d3 = (function() {
  return this.hz;
});
$p.d0 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.s = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.eo = (function() {
  return this.hy;
});
$p.d4 = (function() {
  return this.hA;
});
$p.bU = (function(x$1) {
  this.hy = x$1;
});
$p.ep = (function(x$1) {
  this.hA = x$1;
});
$p.i = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.ff = (function(observer) {
});
$p.ca = (function() {
  return this.hw;
});
$p.cc = (function() {
  return this.hx;
});
$p.fm = (function() {
  return this.hC;
});
$p.dD = (function(x$1) {
  this.hC = x$1;
});
$p.f6 = (function(x$0) {
  this.hw = x$0;
});
$p.f7 = (function(x$0) {
  this.hx = x$0;
});
$p.ex = (function() {
  return this.hB;
});
$p.fj = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V(this);
});
$p.fg = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V(this);
});
$p.fh = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V(this);
});
$p.ew = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_custom_CustomStreamSource = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomStreamSource, "com.raquo.airstream.custom.CustomStreamSource", ({
  cr: 1,
  ae: 1,
  a4: 1,
  aj: 1,
  ak: 1,
  aT: 1,
  aR: 1,
  am: 1,
  aV: 1,
  cn: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_VarSignal(initial, parentDisplayName) {
  this.i6 = null;
  this.i5 = false;
  this.i7 = null;
  this.fF = 0;
  this.i3 = null;
  this.i4 = null;
  this.ia = false;
  this.fG = null;
  this.i8 = null;
  this.i9 = 0;
  this.i8 = parentDisplayName;
  this.i6 = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.fF = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.fG = (void 0);
  this.i9 = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V(this, initial);
}
$p = $c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $p;
$p.d3 = (function() {
  return this.i6;
});
$p.s = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.eo = (function() {
  return this.i5;
});
$p.d4 = (function() {
  return this.i7;
});
$p.bU = (function(x$1) {
  this.i5 = x$1;
});
$p.ep = (function(x$1) {
  this.i7 = x$1;
});
$p.fh = (function() {
});
$p.i = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.gB = (function() {
  return this.fF;
});
$p.gC = (function(x$1) {
  this.fF = x$1;
});
$p.fg = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.ff = (function(observer) {
  observer.dA($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.ca = (function() {
  return this.i3;
});
$p.cc = (function() {
  return this.i4;
});
$p.fm = (function() {
  return this.ia;
});
$p.dD = (function(x$1) {
  this.ia = x$1;
});
$p.f6 = (function(x$0) {
  this.i3 = x$0;
});
$p.f7 = (function(x$0) {
  this.i4 = x$0;
});
$p.h3 = (function() {
  return this.fG;
});
$p.kQ = (function(x$1) {
  this.fG = x$1;
});
$p.ha = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.ex = (function() {
  return this.i9;
});
$p.gM = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.fj = (function() {
});
$p.d0 = (function() {
  return (this.i8.Y() + ".signal");
});
$p.ew = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().i($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  cG: 1,
  ae: 1,
  a4: 1,
  aj: 1,
  ak: 1,
  av: 1,
  aS: 1,
  am: 1,
  aU: 1,
  cB: 1
}));
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.gJ($thiz)) {
        return $thiz.eu(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.l)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.l)));
}
/** @constructor */
function $c_sc_View$$anon$1(it$1) {
  this.jq = null;
  this.jq = it$1;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.m = (function() {
  return this.jq.Y();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  fc: 1,
  ab: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  a5: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V($thiz) {
  $thiz.fy = ($thiz.ce !== null);
  $thiz.eI = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.ce);
  if ($thiz.fy) {
    var newParentLastUpdateId = $thiz.ce.gB();
    if ((newParentLastUpdateId !== $thiz.eI)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.gM(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.eI = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.fy) {
    $thiz.eI = $thiz.ce.gB();
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.ce, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.ce, $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_misc_CollectStream(parent, fn) {
  this.hH = null;
  this.hG = false;
  this.hI = null;
  this.hD = null;
  this.hF = null;
  this.hK = false;
  this.eH = null;
  this.hE = null;
  this.hJ = 0;
  this.eH = parent;
  this.hE = fn;
  this.hH = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.hJ = ((1 + parent.ex()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.d3 = (function() {
  return this.hH;
});
$p.d0 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.s = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.eo = (function() {
  return this.hG;
});
$p.d4 = (function() {
  return this.hI;
});
$p.bU = (function(x$1) {
  this.hG = x$1;
});
$p.ep = (function(x$1) {
  this.hI = x$1;
});
$p.i = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.ff = (function(observer) {
});
$p.ca = (function() {
  return this.hD;
});
$p.cc = (function() {
  return this.hF;
});
$p.fm = (function() {
  return this.hK;
});
$p.dD = (function(x$1) {
  this.hK = x$1;
});
$p.f6 = (function(x$0) {
  this.hD = x$0;
});
$p.f7 = (function(x$0) {
  this.hF = x$0;
});
$p.fj = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.eH);
});
$p.fg = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.fh = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.fi = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.ex = (function() {
  return this.hJ;
});
$p.h7 = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.hE.f(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().cG(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.X : e$2);
    }
  }
  $x_1.bL(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
    if ((!nextValue.e())) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.H(), transaction);
    }
  })));
});
$p.kX = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.ew = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_CollectStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_CollectStream, "com.raquo.airstream.misc.CollectStream", ({
  cs: 1,
  ae: 1,
  a4: 1,
  aj: 1,
  ak: 1,
  aT: 1,
  aR: 1,
  am: 1,
  aV: 1,
  at: 1,
  cc: 1,
  c9: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.hO = null;
  this.hN = false;
  this.hP = null;
  this.fw = 0;
  this.hL = null;
  this.hM = null;
  this.hR = false;
  this.fx = null;
  this.fy = false;
  this.eI = 0;
  this.ce = null;
  this.fz = null;
  this.fA = null;
  this.hQ = 0;
  this.ce = parent;
  this.fz = project;
  this.fA = recover;
  this.hO = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.fw = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.fx = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.hQ = ((1 + parent.ex()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.d3 = (function() {
  return this.hO;
});
$p.d0 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.s = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.eo = (function() {
  return this.hN;
});
$p.d4 = (function() {
  return this.hP;
});
$p.bU = (function(x$1) {
  this.hN = x$1;
});
$p.ep = (function(x$1) {
  this.hP = x$1;
});
$p.i = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.gB = (function() {
  return this.fw;
});
$p.gC = (function(x$1) {
  this.fw = x$1;
});
$p.ff = (function(observer) {
  observer.dA($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.ca = (function() {
  return this.hL;
});
$p.cc = (function() {
  return this.hM;
});
$p.fm = (function() {
  return this.hR;
});
$p.dD = (function(x$1) {
  this.hR = x$1;
});
$p.f6 = (function(x$0) {
  this.hL = x$0;
});
$p.f7 = (function(x$0) {
  this.hM = x$0;
});
$p.h3 = (function() {
  return this.fx;
});
$p.kQ = (function(x$1) {
  this.fx = x$1;
});
$p.ha = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.h7 = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.kX = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.fj = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$p.fg = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$p.fh = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$p.ex = (function() {
  return this.hQ;
});
$p.fi = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  nextParentValue.bL(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.fA;
    if (this$2.e()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
    } else {
      var x0 = this$2.H();
      try {
        var $x_1 = new $c_s_util_Success(x0.br(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().cG(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.X : e$2);
        }
      }
      $x_1.bL(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$3) => ((tryError) => {
        $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$3$3), transaction);
      }))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$4) => ((nextValue) => {
        if ((nextValue === null)) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$3$4, transaction);
        } else if ((!nextValue.e())) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.H(), transaction);
        }
      }))(nextError)));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.h2(this.fz), transaction);
  })));
});
$p.gM = (function() {
  var originalValue = this.ce.ha().h2(this.fz);
  return originalValue.bL(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.fA;
    if (this$2.e()) {
      return originalValue;
    } else {
      var x0 = this$2.H();
      try {
        var $x_1 = new $c_s_util_Success(x0.br(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().cG(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.X : e$2);
        }
      }
      return $x_1.bL(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$7$3) => ((tryError) => new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$7$3))))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
        if ((nextValue === null)) {
          return originalValue;
        } else {
          var this$7 = (nextValue.e() ? $m_s_None$() : new $c_s_Some(new $c_s_util_Success(nextValue.H())));
          return (this$7.e() ? originalValue : this$7.H());
        }
      })));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$6) => originalValue)));
});
$p.ew = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapSignal, "com.raquo.airstream.misc.MapSignal", ({
  ct: 1,
  ae: 1,
  a4: 1,
  aj: 1,
  ak: 1,
  av: 1,
  aS: 1,
  am: 1,
  aU: 1,
  at: 1,
  ca: 1,
  cb: 1
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
$p.gJ = (function(that) {
  return true;
});
$p.i = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().nI(this);
});
$p.s = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.nQ = (function() {
  return this.o();
});
$p.gY = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.nR = (function(otherSize) {
  return this.aV(otherSize);
});
$p.aV = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.e = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.eu = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.br = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.bN = (function(x) {
  return this.gY((x | 0));
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
$p.b8 = (function() {
  return "SeqView";
});
$p.aV = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.e = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.o)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.o)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.ag)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
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
$p.m = (function() {
  return $m_sc_Iterator$().K;
});
$p.A = (function() {
  return 0;
});
$p.e = (function() {
  return true;
});
$p.aC = (function() {
  return "Empty";
});
$p.aA = (function() {
  return 0;
});
$p.aB = (function(x$1) {
  return $m_sr_Statics$().cI(x$1);
});
$p.aP = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return 67081517;
});
var $d_sc_View$Empty$ = new $TypeData().i($c_sc_View$Empty$, "scala.collection.View$Empty$", ({
  fd: 1,
  ab: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  a5: 1,
  a: 1,
  B: 1,
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
  $thiz.it = new $c_Lcom_raquo_laminar_api_Laminar$$anon$1();
  $thiz.lk = $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$();
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.cP = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.cP = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.t = (function(idx) {
  return this.cP.t(idx);
});
$p.o = (function() {
  return this.cP.o();
});
$p.m = (function() {
  return this.cP.m();
});
$p.A = (function() {
  return this.cP.A();
});
$p.e = (function() {
  return this.cP.e();
});
var $d_sc_SeqView$Id = new $TypeData().i($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  bl: 1,
  ao: 1,
  ab: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  a5: 1,
  a: 1,
  ap: 1,
  k: 1
}));
function $ct_sc_SeqView$Reverse__sc_SeqOps__($thiz, underlying) {
  $thiz.e1 = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Reverse() {
  this.e1 = null;
}
$p = $c_sc_SeqView$Reverse.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Reverse;
/** @constructor */
function $h_sc_SeqView$Reverse() {
}
$h_sc_SeqView$Reverse.prototype = $p;
$p.t = (function(i) {
  return this.e1.t((((((-1) + this.o()) | 0) - i) | 0));
});
$p.o = (function() {
  return this.e1.o();
});
$p.e = (function() {
  return this.e1.e();
});
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$$anon$1() {
  this.iu = null;
  this.iv = false;
  this.iw = null;
  this.ix = false;
  this.iy = null;
  this.iz = false;
  this.iA = null;
  this.iB = false;
  this.iC = null;
  this.iD = false;
  this.im = null;
  this.io = false;
  this.iK = null;
  this.iL = false;
  this.ir = null;
  this.is = false;
  this.ip = null;
  this.iq = false;
  this.iQ = null;
  this.iR = false;
  this.iG = null;
  this.iH = false;
  this.iE = null;
  this.iF = false;
  this.iI = null;
  this.iJ = false;
  this.ik = null;
  this.il = false;
  this.ll = null;
  this.ij = null;
  this.lj = null;
  this.iM = null;
  this.iN = false;
  this.it = null;
  this.iO = null;
  this.iP = false;
  this.lk = null;
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
$p.mS = (function() {
  if ((!this.iv)) {
    this.iu = new $c_Lcom_raquo_laminar_tags_HtmlTag("h1", false);
    this.iv = true;
  }
  return this.iu;
});
$p.kJ = (function() {
  if ((!this.ix)) {
    this.iw = new $c_Lcom_raquo_laminar_tags_HtmlTag("h2", false);
    this.ix = true;
  }
  return this.iw;
});
$p.cb = (function() {
  if ((!this.iz)) {
    this.iy = new $c_Lcom_raquo_laminar_tags_HtmlTag("h3", false);
    this.iz = true;
  }
  return this.iy;
});
$p.kK = (function() {
  if ((!this.iB)) {
    this.iA = new $c_Lcom_raquo_laminar_tags_HtmlTag("h4", false);
    this.iB = true;
  }
  return this.iA;
});
$p.mU = (function() {
  if ((!this.iD)) {
    this.iC = new $c_Lcom_raquo_laminar_tags_HtmlTag("i", false);
    this.iD = true;
  }
  return this.iC;
});
$p.kd = (function() {
  if ((!this.io)) {
    this.im = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    this.io = true;
  }
  return this.im;
});
$p.bV = (function() {
  if ((!this.iL)) {
    this.iK = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    this.iL = true;
  }
  return this.iK;
});
$p.f8 = (function() {
  if ((!this.is)) {
    this.ir = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.is = true;
  }
  return this.ir;
});
$p.mj = (function() {
  if ((!this.iq)) {
    this.ip = new $c_Lcom_raquo_laminar_keys_HtmlProp("checked", $m_Lcom_raquo_laminar_codecs_package$().iS);
    this.iq = true;
  }
  return this.ip;
});
$p.lf = (function() {
  if ((!this.iR)) {
    this.iQ = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().eO);
    this.iR = true;
  }
  return this.iQ;
});
$p.h5 = (function() {
  if ((!this.iH)) {
    this.iG = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.iH = true;
  }
  return this.iG;
});
$p.nn = (function() {
  if ((!this.iF)) {
    this.iE = new $c_Lcom_raquo_laminar_keys_EventProp("change");
    this.iF = true;
  }
  return this.iE;
});
$p.h6 = (function() {
  if ((!this.iJ)) {
    this.iI = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    this.iJ = true;
  }
  return this.iI;
});
$p.kc = (function() {
  if ((!this.il)) {
    this.ik = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2("background-color");
    this.il = true;
  }
  return this.ik;
});
$p.nT = (function() {
  if ((!this.iN)) {
    this.iM = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.iN = true;
  }
  return this.iM;
});
$p.o3 = (function() {
  if ((!this.iP)) {
    this.iO = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.iP = true;
  }
  return this.iO;
});
var $d_Lcom_raquo_laminar_api_package$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_package$$anon$1, "com.raquo.laminar.api.package$$anon$1", ({
  cV: 1,
  da: 1,
  cZ: 1,
  d4: 1,
  aZ: 1,
  d5: 1,
  d1: 1,
  cT: 1,
  cN: 1,
  cS: 1,
  aY: 1,
  b0: 1,
  aX: 1,
  cO: 1
}));
/** @constructor */
function $c_sc_AbstractIndexedSeqView() {
}
$p = $c_sc_AbstractIndexedSeqView.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_AbstractIndexedSeqView;
/** @constructor */
function $h_sc_AbstractIndexedSeqView() {
}
$h_sc_AbstractIndexedSeqView.prototype = $p;
$p.b8 = (function() {
  return "IndexedSeqView";
});
$p.aV = (function(len) {
  var x = this.o();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.A = (function() {
  return this.o();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.cP = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.b8 = (function() {
  return "IndexedSeqView";
});
$p.aV = (function(len) {
  var x = this.o();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.A = (function() {
  return this.o();
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  eU: 1,
  bl: 1,
  ao: 1,
  ab: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  a5: 1,
  a: 1,
  ap: 1,
  k: 1,
  az: 1,
  n: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Reverse(underlying) {
  this.e1 = null;
  $ct_sc_SeqView$Reverse__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Reverse.prototype = new $h_sc_SeqView$Reverse();
$p.constructor = $c_sc_IndexedSeqView$Reverse;
/** @constructor */
function $h_sc_IndexedSeqView$Reverse() {
}
$h_sc_IndexedSeqView$Reverse.prototype = $p;
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.b8 = (function() {
  return "IndexedSeqView";
});
$p.aV = (function(len) {
  var x = this.o();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.A = (function() {
  return this.o();
});
var $d_sc_IndexedSeqView$Reverse = new $TypeData().i($c_sc_IndexedSeqView$Reverse, "scala.collection.IndexedSeqView$Reverse", ({
  eW: 1,
  f7: 1,
  ao: 1,
  ab: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  a5: 1,
  a: 1,
  ap: 1,
  k: 1,
  az: 1,
  n: 1
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
  this.gw = null;
  this.jz = null;
  this.gw = underlying;
  this.jz = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.t = (function(n) {
  return this.gw.t(n);
});
$p.o = (function() {
  return this.gw.ag;
});
$p.bS = (function() {
  return "ArrayBufferView";
});
$p.m = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.jz);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  fB: 1,
  eH: 1,
  ao: 1,
  ab: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  a5: 1,
  a: 1,
  ap: 1,
  k: 1,
  az: 1,
  n: 1
}));
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
        var a = $thiz.gG();
        var b = o.gG();
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
          equal = $m_sr_BoxesRunTime$().aG($thiz.t(index), o.t(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.m().dy(index);
          var thatIt = o.m().dy(index);
          while ((equal && thisIt.q())) {
            equal = $m_sr_BoxesRunTime$().aG(thisIt.h(), thatIt.h());
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.y)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.y)));
}
/** @constructor */
function $c_scm_AbstractSeq() {
}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $p;
function $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State($thiz) {
  if ((!$thiz.go)) {
    if ($thiz.f0) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
    }
    $thiz.f0 = true;
    try {
      var res = $thiz.gp.Y();
    } finally {
      $thiz.f0 = false;
    }
    $thiz.bA = true;
    $thiz.gp = null;
    $thiz.gq = res;
    $thiz.go = true;
  }
  return $thiz.gq;
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.k = (("" + b.k) + start);
  if ((!$thiz.bA)) {
    b.k = (b.k + "<not computed>");
  } else if ((!$thiz.e())) {
    var obj = $thiz.y().T();
    b.k = (("" + b.k) + obj);
    var elem = null;
    elem = $thiz;
    var elem$1 = $thiz.y().al();
    var elem$2 = null;
    elem$2 = elem$1;
    if (((elem !== elem$2) && ((!elem$2.bA) || (elem.y() !== elem$2.y())))) {
      elem = elem$2;
      if ((elem$2.bA && (!elem$2.e()))) {
        elem$2 = elem$2.y().al();
        while ((((elem !== elem$2) && (elem$2.bA && (!elem$2.e()))) && (elem.y() !== elem$2.y()))) {
          b.k = (("" + b.k) + sep);
          var obj$1 = elem.y().T();
          b.k = (("" + b.k) + obj$1);
          elem = elem.y().al();
          elem$2 = elem$2.y().al();
          if ((elem$2.bA && (!elem$2.e()))) {
            elem$2 = elem$2.y().al();
          }
        }
      }
    }
    if ((!(elem$2.bA && (!elem$2.e())))) {
      while ((elem !== elem$2)) {
        b.k = (("" + b.k) + sep);
        var obj$2 = elem.y().T();
        b.k = (("" + b.k) + obj$2);
        elem = elem.y().al();
      }
      if ((!elem.bA)) {
        b.k = (("" + b.k) + sep);
        b.k = (b.k + "<not computed>");
      }
    } else {
      var runner = $thiz;
      var k = 0;
      while (true) {
        var a = runner;
        var b$1 = elem$2;
        if ((!((a === b$1) || (a.y() === b$1.y())))) {
          runner = runner.y().al();
          elem$2 = elem$2.y().al();
          k = ((1 + k) | 0);
        } else {
          break;
        }
      }
      var a$1 = elem;
      var b$2 = elem$2;
      if ((((a$1 === b$2) || (a$1.y() === b$2.y())) && (k > 0))) {
        b.k = (("" + b.k) + sep);
        var obj$3 = elem.y().T();
        b.k = (("" + b.k) + obj$3);
        elem = elem.y().al();
      }
      while (true) {
        var a$2 = elem;
        var b$3 = elem$2;
        if ((!((a$2 === b$3) || (a$2.y() === b$3.y())))) {
          b.k = (("" + b.k) + sep);
          var obj$4 = elem.y().T();
          b.k = (("" + b.k) + obj$4);
          elem = elem.y().al();
        } else {
          break;
        }
      }
      b.k = (("" + b.k) + sep);
      b.k = (b.k + "<cycle>");
    }
  }
  b.k = (("" + b.k) + end);
  return b;
}
/** @constructor */
function $c_sci_LazyList(lazyState) {
  this.gq = null;
  this.gp = null;
  this.bA = false;
  this.f0 = false;
  this.go = false;
  this.gp = lazyState;
  this.bA = false;
  this.f0 = false;
}
$p = $c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
}
$h_sci_LazyList.prototype = $p;
$p.b8 = (function() {
  return "LinearSeq";
});
$p.o = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$p.aV = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.gY = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.t = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.eu = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.y = (function() {
  return ((!this.go) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.gq);
});
$p.e = (function() {
  return (this.y() === $m_sci_LazyList$State$Empty$());
});
$p.A = (function() {
  return ((this.bA && (this.y() === $m_sci_LazyList$State$Empty$())) ? 0 : (-1));
});
$p.T = (function() {
  return this.y().T();
});
$p.ky = (function() {
  var these = this;
  var those = this;
  if ((!these.e())) {
    these = these.y().al();
  }
  while ((those !== these)) {
    if (these.e()) {
      return this;
    }
    these = these.y().al();
    if (these.e()) {
      return this;
    }
    these = these.y().al();
    if ((these === those)) {
      return this;
    }
    those = those.y().al();
  }
  return this;
});
$p.m = (function() {
  return ((this.bA && (this.y() === $m_sci_LazyList$State$Empty$())) ? $m_sc_Iterator$().K : new $c_sci_LazyList$LazyIterator(this));
});
$p.bt = (function(f) {
  var _$this = this;
  while (true) {
    if ((!_$this.e())) {
      f.f(_$this.y().T());
      _$this = _$this.y().al();
      continue;
    }
    break;
  }
});
$p.bS = (function() {
  return "LazyList";
});
$p.gK = (function(pf) {
  var _$this = this;
  while (true) {
    if (_$this.e()) {
      return $m_s_None$();
    } else {
      var res = pf.br(_$this.y().T(), $m_sci_LazyList$().jr);
      if ((res === $m_sr_Statics$PFMarker$())) {
        _$this = _$this.y().al();
      } else {
        return new $c_s_Some(res);
      }
    }
  }
});
$p.mA = (function(n) {
  return ((n <= 0) ? this : ((this.bA && (this.y() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().f1 : $m_sci_LazyList$().nH(this, n)));
});
$p.dt = (function(sb, start, sep, end) {
  this.ky();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.az, start, sep, end);
  return sb;
});
$p.s = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").k;
});
$p.f = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.bN = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.kl = (function(n) {
  return this.mA(n);
});
$p.aH = (function() {
  return this.y().al();
});
$p.bE = (function() {
  return $m_sci_LazyList$();
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.by)));
}
var $d_sci_LazyList = new $TypeData().i($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  by: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  aC: 1,
  ag: 1,
  aA: 1,
  aD: 1,
  a: 1
}));
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fy)));
}
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gM)));
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
$p.bf = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.fc = (function(coll) {
  return $m_sci_ArraySeq$().gR(coll, this.a5());
});
$p.gJ = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.eu = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.b8 = (function() {
  return "IndexedSeq";
});
$p.T = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aV = (function(len) {
  var x = this.o();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.A = (function() {
  return this.o();
});
$p.d2 = (function() {
  return $m_sci_ArraySeq$().gn;
});
$p.bS = (function() {
  return "ArraySeq";
});
$p.bh = (function(xs, start, len) {
  var srcLen = this.o();
  var destLen = $m_jl_reflect_Array$().bM(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().el(this.bW(), 0, xs, start, copied);
  }
  return copied;
});
$p.gG = (function() {
  return 2147483647;
});
$p.fb = (function(coll) {
  return $m_sci_ArraySeq$().gR(coll, this.a5());
});
$p.bE = (function() {
  return $m_sci_ArraySeq$().gn;
});
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.S)));
}
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.b = prefix1;
  return $thiz;
}
/** @constructor */
function $c_sci_Vector() {
  this.b = null;
}
$p = $c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
}
$h_sci_Vector.prototype = $p;
$p.gJ = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.eu = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.b8 = (function() {
  return "IndexedSeq";
});
$p.aV = (function(len) {
  var x = this.o();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.A = (function() {
  return this.o();
});
$p.d2 = (function() {
  return $m_sci_Vector$();
});
$p.o = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.g : this.b.a.length);
});
$p.m = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().jx : new $c_sci_NewVectorIterator(this, this.o(), this.bQ()));
});
$p.c9 = (function(suffix) {
  var k = suffix.A();
  return ((k === 0) ? this : ((k < 0) ? $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix) : this.bg(suffix, k)));
});
$p.bg = (function(suffix, k) {
  if ((k < ((4 + this.bQ()) | 0))) {
    var v = new $c_sr_ObjectRef(this);
    if ($is_sci_Iterable(suffix)) {
      suffix.bt(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => {
        v.P = v.P.b3(x$2$2);
      })));
    } else {
      var this$2 = suffix.m();
      while (this$2.q()) {
        var x0 = this$2.h();
        v.P = v.P.b3(x0);
      }
    }
    return v.P;
  } else if (((this.o() < ((k >>> 5) | 0)) && (suffix instanceof $c_sci_Vector))) {
    var v$2 = suffix;
    var ri = new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(new $c_sc_IndexedSeqView$Id(this));
    while ((ri.aJ > 0)) {
      v$2 = v$2.b7(ri.h());
    }
    return v$2;
  } else {
    return (((this.o() < (((-64) + k) | 0)) && (suffix instanceof $c_sci_Vector)) ? new $c_sci_VectorBuilder().m3(this.o(), suffix).eb(this).eb(suffix).fk() : new $c_sci_VectorBuilder().kL(this).eb(suffix).fk());
  }
});
$p.bS = (function() {
  return "Vector";
});
$p.bh = (function(xs, start, len) {
  return this.m().bh(xs, start, len);
});
$p.ld = (function() {
  return this;
});
$p.gG = (function() {
  return $m_sci_Vector$().jw;
});
$p.bi = (function(index) {
  return $m_scg_CommonErrors$().en(index, (((-1) + this.o()) | 0));
});
$p.T = (function() {
  if ((this.b.a.length === 0)) {
    throw new $c_ju_NoSuchElementException("empty.head");
  } else {
    return this.b.a[0];
  }
});
$p.bt = (function(f) {
  var c = this.bQ();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    $x_1.gP((((-1) + ((((1 + c$1) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0)) | 0), this.bX(i), f);
    i = ((1 + i) | 0);
  }
});
$p.bE = (function() {
  return $m_sci_Vector$();
});
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
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
$p.b8 = (function() {
  return "IndexedSeq";
});
$p.aV = (function(len) {
  var x = this.o();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.A = (function() {
  return this.o();
});
$p.d2 = (function() {
  return $m_scm_ArraySeq$().gz;
});
$p.kG = (function(coll) {
  var evidence$1 = this.a5();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.ak();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.A();
  var it = coll.m();
  while (it.q()) {
    var elem = it.h();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.J.z : elem));
    jsElems.push(unboxedElem);
  }
  var $x_1 = $m_scm_ArraySeq$();
  var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
  return $x_1.h1(elemRuntimeClass.J.r().w(jsElems));
});
$p.bS = (function() {
  return "ArraySeq";
});
$p.bh = (function(xs, start, len) {
  var srcLen = this.o();
  var destLen = $m_jl_reflect_Array$().bM(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().el(this.bD(), 0, xs, start, copied);
  }
  return copied;
});
$p.i = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().bM(this.bD()) !== $m_jl_reflect_Array$().bM(other.bD()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.fb = (function(coll) {
  return this.kG(coll);
});
$p.fc = (function(coll) {
  return this.kG(coll);
});
$p.bE = (function() {
  return $m_scm_ArraySeq$().gz;
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.T)));
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.ck = null;
  this.ck = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.o = (function() {
  return this.ck.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.kb(this.ck, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().kw(this.ck, that.ck) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.ck);
});
$p.ek = (function(i) {
  return this.ck.a[i];
});
$p.f = (function(v1) {
  return this.ek((v1 | 0));
});
$p.t = (function(i) {
  return this.ek(i);
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.bW = (function() {
  return this.ck;
});
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bo)));
}
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  bo: 1,
  S: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  y: 1,
  o: 1,
  n: 1,
  C: 1,
  z: 1,
  q: 1,
  p: 1,
  Y: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.cl = null;
  this.cl = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.o = (function() {
  return this.cl.a.length;
});
$p.ec = (function(i) {
  return this.cl.a[i];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.k3(this.cl, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().kp(this.cl, that.cl) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.cl);
});
$p.f = (function(v1) {
  return this.ec((v1 | 0));
});
$p.t = (function(i) {
  return this.ec(i);
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.bW = (function() {
  return this.cl;
});
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bp)));
}
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  bp: 1,
  S: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  y: 1,
  o: 1,
  n: 1,
  C: 1,
  z: 1,
  q: 1,
  p: 1,
  Y: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.c3 = null;
  this.c3 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.o = (function() {
  return this.c3.a.length;
});
$p.ed = (function(i) {
  return this.c3.a[i];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.k4(this.c3, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().kq(this.c3, that.c3) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.c3);
});
$p.dt = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.c3).dt(sb, start, sep, end);
});
$p.f = (function(v1) {
  return $bC(this.ed((v1 | 0)));
});
$p.t = (function(i) {
  return $bC(this.ed(i));
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.bW = (function() {
  return this.c3;
});
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bq)));
}
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  bq: 1,
  S: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  y: 1,
  o: 1,
  n: 1,
  C: 1,
  z: 1,
  q: 1,
  p: 1,
  Y: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.cm = null;
  this.cm = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.o = (function() {
  return this.cm.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.k5(this.cm, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofDouble) ? $m_ju_Arrays$().kr(this.cm, that.cm) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.cm);
});
$p.ef = (function(i) {
  return this.cm.a[i];
});
$p.f = (function(v1) {
  return this.ef((v1 | 0));
});
$p.t = (function(i) {
  return this.ef(i);
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.bW = (function() {
  return this.cm;
});
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.br)));
}
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  br: 1,
  S: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  y: 1,
  o: 1,
  n: 1,
  C: 1,
  z: 1,
  q: 1,
  p: 1,
  Y: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.cn = null;
  this.cn = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.o = (function() {
  return this.cn.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.k6(this.cn, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofFloat) ? $m_ju_Arrays$().ks(this.cn, that.cn) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.cn);
});
$p.eg = (function(i) {
  return this.cn.a[i];
});
$p.f = (function(v1) {
  return this.eg((v1 | 0));
});
$p.t = (function(i) {
  return this.eg(i);
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.bW = (function() {
  return this.cn;
});
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bs)));
}
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  bs: 1,
  S: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  y: 1,
  o: 1,
  n: 1,
  C: 1,
  z: 1,
  q: 1,
  p: 1,
  Y: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.co = null;
  this.co = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
$p.o = (function() {
  return this.co.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.k7(this.co, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().kt(this.co, that.co) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.co);
});
$p.eh = (function(i) {
  return this.co.a[i];
});
$p.f = (function(v1) {
  return this.eh((v1 | 0));
});
$p.t = (function(i) {
  return this.eh(i);
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.bW = (function() {
  return this.co;
});
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bt)));
}
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  bt: 1,
  S: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  y: 1,
  o: 1,
  n: 1,
  C: 1,
  z: 1,
  q: 1,
  p: 1,
  Y: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.cp = null;
  this.cp = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.o = (function() {
  return this.cp.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.k8(this.cp, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().ku(this.cp, that.cp) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.cp);
});
$p.ei = (function(i) {
  return this.cp.a[i];
});
$p.f = (function(v1) {
  return this.ei((v1 | 0));
});
$p.t = (function(i) {
  return this.ei(i);
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.bW = (function() {
  return this.cp;
});
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bu)));
}
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  bu: 1,
  S: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  y: 1,
  o: 1,
  n: 1,
  C: 1,
  z: 1,
  q: 1,
  p: 1,
  Y: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.bR = null;
  this.bR = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.a5 = (function() {
  return $m_s_reflect_ClassTag$().jZ($objectGetClass(this.bR).J.Q());
});
$p.o = (function() {
  return this.bR.a.length;
});
$p.t = (function(i) {
  return this.bR.a[i];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.k2(this.bR, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().kx(this.bR, that.bR) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.bR);
});
$p.f = (function(v1) {
  return this.t((v1 | 0));
});
$p.bW = (function() {
  return this.bR;
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bv)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  bv: 1,
  S: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  y: 1,
  o: 1,
  n: 1,
  C: 1,
  z: 1,
  q: 1,
  p: 1,
  Y: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.cq = null;
  this.cq = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.o = (function() {
  return this.cq.a.length;
});
$p.ee = (function(i) {
  return this.cq.a[i];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.k9(this.cq, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().kv(this.cq, that.cq) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.cq);
});
$p.f = (function(v1) {
  return this.ee((v1 | 0));
});
$p.t = (function(i) {
  return this.ee(i);
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.bW = (function() {
  return this.cq;
});
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bw)));
}
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  bw: 1,
  S: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  y: 1,
  o: 1,
  n: 1,
  C: 1,
  z: 1,
  q: 1,
  p: 1,
  Y: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.cR = null;
  this.cR = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.o = (function() {
  return this.cR.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.ka(this.cR, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.cR.a.length === that.cR.a.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.cR);
});
$p.ej = (function(i) {
});
$p.f = (function(v1) {
  this.ej((v1 | 0));
});
$p.t = (function(i) {
  this.ej(i);
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.bW = (function() {
  return this.cR;
});
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bx)));
}
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  bx: 1,
  S: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  y: 1,
  o: 1,
  n: 1,
  C: 1,
  z: 1,
  q: 1,
  p: 1,
  Y: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.e() ? 0 : 1);
    } else if (xs.e()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = xs.aH();
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
      var aEmpty = a.e();
      var bEmpty = b.e();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().aG(a.T(), b.T()))) {
        var temp$a = a.aH();
        var temp$b = b.aH();
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
$p.m = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.b8 = (function() {
  return "LinearSeq";
});
$p.gY = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.t = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.eu = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.d2 = (function() {
  return $m_sci_List$();
});
$p.lN = (function(prefix) {
  if (this.e()) {
    return prefix;
  } else if (prefix.e()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.T(), this);
    var curr = result;
    var that = prefix.aH();
    while ((!that.e())) {
      var temp = new $c_sci_$colon$colon(that.T(), this);
      curr.c2 = temp;
      curr = temp;
      that = that.aH();
    }
    return result;
  }
});
$p.e = (function() {
  return (this === $m_sci_Nil$());
});
$p.bO = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.lN(prefix);
  }
  if ((prefix.A() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.e()) {
      return prefix.lc();
    }
  }
  var iter = prefix.m();
  if (iter.q()) {
    var result = new $c_sci_$colon$colon(iter.h(), this);
    var curr = result;
    while (iter.q()) {
      var temp = new $c_sci_$colon$colon(iter.h(), this);
      curr.c2 = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.bt = (function(f) {
  var these = this;
  while ((!these.e())) {
    f.f(these.T());
    these = these.aH();
  }
});
$p.o = (function() {
  var these = this;
  var len = 0;
  while ((!these.e())) {
    len = ((1 + len) | 0);
    these = these.aH();
  }
  return len;
});
$p.aV = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
});
$p.bS = (function() {
  return "List";
});
$p.i = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.f = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.bN = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.kl = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.bE = (function() {
  return $m_sci_List$();
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aE)));
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.b = null;
}
$p = $c_sci_VectorImpl.prototype = new $h_sci_Vector();
$p.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
}
$h_sci_VectorImpl.prototype = $p;
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.cw = null;
  this.cw = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.o = (function() {
  return this.cw.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.kb(this.cw, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().kw(this.cw, that.cw) : $c_scm_ArraySeq.prototype.i.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.cw);
});
$p.ek = (function(index) {
  return this.cw.a[index];
});
$p.f = (function(v1) {
  return this.ek((v1 | 0));
});
$p.t = (function(i) {
  return this.ek(i);
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.bD = (function() {
  return this.cw;
});
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bH)));
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  bH: 1,
  T: 1,
  H: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  K: 1,
  J: 1,
  L: 1,
  I: 1,
  A: 1,
  O: 1,
  o: 1,
  n: 1,
  P: 1,
  q: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.cx = null;
  this.cx = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.o = (function() {
  return this.cx.a.length;
});
$p.ec = (function(index) {
  return this.cx.a[index];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.k3(this.cx, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().kp(this.cx, that.cx) : $c_scm_ArraySeq.prototype.i.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.cx);
});
$p.f = (function(v1) {
  return this.ec((v1 | 0));
});
$p.t = (function(i) {
  return this.ec(i);
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.bD = (function() {
  return this.cx;
});
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bI)));
}
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  bI: 1,
  T: 1,
  H: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  K: 1,
  J: 1,
  L: 1,
  I: 1,
  A: 1,
  O: 1,
  o: 1,
  n: 1,
  P: 1,
  q: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.bq = null;
  this.bq = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.o = (function() {
  return this.bq.a.length;
});
$p.ed = (function(index) {
  return this.bq.a[index];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.k4(this.bq, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().kq(this.bq, that.bq) : $c_scm_ArraySeq.prototype.i.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.bq);
});
$p.dt = (function(sb, start, sep, end) {
  var jsb = sb.az;
  if ((start.length !== 0)) {
    jsb.k = (("" + jsb.k) + start);
  }
  var len = this.bq.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.jW(this.bq);
    } else {
      jsb.o();
      var c = this.bq.a[0];
      var str = ("" + $cToS(c));
      jsb.k = (jsb.k + str);
      var i = 1;
      while ((i < len)) {
        jsb.k = (("" + jsb.k) + sep);
        var c$1 = this.bq.a[i];
        var str$1 = ("" + $cToS(c$1));
        jsb.k = (jsb.k + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  if ((end.length !== 0)) {
    jsb.k = (("" + jsb.k) + end);
  }
  return sb;
});
$p.f = (function(v1) {
  return $bC(this.ed((v1 | 0)));
});
$p.t = (function(i) {
  return $bC(this.ed(i));
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.bD = (function() {
  return this.bq;
});
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bJ)));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  bJ: 1,
  T: 1,
  H: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  K: 1,
  J: 1,
  L: 1,
  I: 1,
  A: 1,
  O: 1,
  o: 1,
  n: 1,
  P: 1,
  q: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.cy = null;
  this.cy = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.o = (function() {
  return this.cy.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.k5(this.cy, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofDouble) ? $m_ju_Arrays$().kr(this.cy, that.cy) : $c_scm_ArraySeq.prototype.i.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.cy);
});
$p.ef = (function(index) {
  return this.cy.a[index];
});
$p.f = (function(v1) {
  return this.ef((v1 | 0));
});
$p.t = (function(i) {
  return this.ef(i);
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.bD = (function() {
  return this.cy;
});
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bK)));
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  bK: 1,
  T: 1,
  H: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  K: 1,
  J: 1,
  L: 1,
  I: 1,
  A: 1,
  O: 1,
  o: 1,
  n: 1,
  P: 1,
  q: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.cz = null;
  this.cz = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.o = (function() {
  return this.cz.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.k6(this.cz, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofFloat) ? $m_ju_Arrays$().ks(this.cz, that.cz) : $c_scm_ArraySeq.prototype.i.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.cz);
});
$p.eg = (function(index) {
  return this.cz.a[index];
});
$p.f = (function(v1) {
  return this.eg((v1 | 0));
});
$p.t = (function(i) {
  return this.eg(i);
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.bD = (function() {
  return this.cz;
});
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bL)));
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  bL: 1,
  T: 1,
  H: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  K: 1,
  J: 1,
  L: 1,
  I: 1,
  A: 1,
  O: 1,
  o: 1,
  n: 1,
  P: 1,
  q: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.cA = null;
  this.cA = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.o = (function() {
  return this.cA.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.k7(this.cA, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().kt(this.cA, that.cA) : $c_scm_ArraySeq.prototype.i.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.cA);
});
$p.eh = (function(index) {
  return this.cA.a[index];
});
$p.f = (function(v1) {
  return this.eh((v1 | 0));
});
$p.t = (function(i) {
  return this.eh(i);
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.bD = (function() {
  return this.cA;
});
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bM)));
}
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
  bM: 1,
  T: 1,
  H: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  K: 1,
  J: 1,
  L: 1,
  I: 1,
  A: 1,
  O: 1,
  o: 1,
  n: 1,
  P: 1,
  q: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.cB = null;
  this.cB = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.o = (function() {
  return this.cB.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.k8(this.cB, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().ku(this.cB, that.cB) : $c_scm_ArraySeq.prototype.i.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.cB);
});
$p.ei = (function(index) {
  return this.cB.a[index];
});
$p.f = (function(v1) {
  return this.ei((v1 | 0));
});
$p.t = (function(i) {
  return this.ei(i);
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.bD = (function() {
  return this.cB;
});
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bN)));
}
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
  bN: 1,
  T: 1,
  H: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  K: 1,
  J: 1,
  L: 1,
  I: 1,
  A: 1,
  O: 1,
  o: 1,
  n: 1,
  P: 1,
  q: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.c6 = null;
  this.c6 = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.a5 = (function() {
  return $m_s_reflect_ClassTag$().jZ($objectGetClass(this.c6).J.Q());
});
$p.o = (function() {
  return this.c6.a.length;
});
$p.t = (function(index) {
  return this.c6.a[index];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.k2(this.c6, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().kx(this.c6, that.c6) : $c_scm_ArraySeq.prototype.i.call(this, that));
});
$p.m = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.c6);
});
$p.f = (function(v1) {
  return this.t((v1 | 0));
});
$p.bD = (function() {
  return this.c6;
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bO)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  bO: 1,
  T: 1,
  H: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  K: 1,
  J: 1,
  L: 1,
  I: 1,
  A: 1,
  O: 1,
  o: 1,
  n: 1,
  P: 1,
  q: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.cC = null;
  this.cC = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.o = (function() {
  return this.cC.a.length;
});
$p.ee = (function(index) {
  return this.cC.a[index];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.k9(this.cC, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().kv(this.cC, that.cC) : $c_scm_ArraySeq.prototype.i.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.cC);
});
$p.f = (function(v1) {
  return this.ee((v1 | 0));
});
$p.t = (function(i) {
  return this.ee(i);
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.bD = (function() {
  return this.cC;
});
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bP)));
}
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  bP: 1,
  T: 1,
  H: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  K: 1,
  J: 1,
  L: 1,
  I: 1,
  A: 1,
  O: 1,
  o: 1,
  n: 1,
  P: 1,
  q: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.cW = null;
  this.cW = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.o = (function() {
  return this.cW.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.ka(this.cW, this$1.a1);
});
$p.i = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.cW.a.length === that.cW.a.length) : $c_scm_ArraySeq.prototype.i.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.cW);
});
$p.ej = (function(index) {
});
$p.f = (function(v1) {
  this.ej((v1 | 0));
});
$p.t = (function(i) {
  this.ej(i);
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.bD = (function() {
  return this.cW;
});
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bQ)));
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  bQ: 1,
  T: 1,
  H: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  K: 1,
  J: 1,
  L: 1,
  I: 1,
  A: 1,
  O: 1,
  o: 1,
  n: 1,
  P: 1,
  q: 1,
  p: 1,
  a: 1
}));
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.d = suffix1;
  $thiz.g = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.b = null;
  this.d = null;
  this.g = 0;
}
$p = $c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
}
$h_sci_BigVector.prototype = $p;
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
/** @constructor */
function $c_sci_Vector1(_data1) {
  this.b = null;
  $ct_sci_Vector__AO__(this, _data1);
}
$p = $c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
}
$h_sci_Vector1.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.b.a.length))) {
    return this.b.a[index];
  } else {
    throw this.bi(index);
  }
});
$p.b3 = (function(elem) {
  if ((this.b.a.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().dw(this.b, elem));
  } else {
    var $x_2 = this.b;
    var $x_1 = $m_sci_VectorStatics$().O;
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.b7 = (function(elem) {
  var len1 = this.b.a.length;
  if ((len1 < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().dx(elem, this.b));
  } else {
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2(a, 1, $m_sci_VectorStatics$().O, this.b, ((1 + len1) | 0));
  }
});
$p.b4 = (function(f) {
  return new $c_sci_Vector1($m_sci_VectorStatics$().bF(this.b, f));
});
$p.bQ = (function() {
  return 1;
});
$p.bX = (function(idx) {
  return this.b;
});
$p.bg = (function(suffix, k) {
  var data1b = $m_sci_VectorStatics$().du(this.b, suffix);
  return ((data1b !== null) ? new $c_sci_Vector1(data1b) : $c_sci_Vector.prototype.bg.call(this, suffix, k));
});
$p.cY = (function(elem) {
  return this.b3(elem);
});
$p.f = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.b.a.length))) {
    return this.b.a[index];
  } else {
    throw this.bi(index);
  }
});
function $isArrayOf_sci_Vector1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bA)));
}
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  bA: 1,
  a9: 1,
  a6: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  y: 1,
  o: 1,
  n: 1,
  C: 1,
  z: 1,
  q: 1,
  p: 1,
  R: 1,
  a: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.gk = null;
  this.c2 = null;
  this.gk = head;
  this.c2 = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.T = (function() {
  return this.gk;
});
$p.aC = (function() {
  return "::";
});
$p.aA = (function() {
  return 2;
});
$p.aB = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.gk;
      break;
    }
    case 1: {
      return this.c2;
      break;
    }
    default: {
      return $m_sr_Statics$().cI(x$1);
    }
  }
});
$p.aP = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.aH = (function() {
  return this.c2;
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  ff: 1,
  aE: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  aC: 1,
  ag: 1,
  aA: 1,
  aD: 1,
  bn: 1,
  q: 1,
  p: 1,
  z: 1,
  R: 1,
  a: 1,
  B: 1
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
$p.gU = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.nW = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.A = (function() {
  return 0;
});
$p.m = (function() {
  return $m_sc_Iterator$().K;
});
$p.aC = (function() {
  return "Nil";
});
$p.aA = (function() {
  return 0;
});
$p.aB = (function(x$1) {
  return $m_sr_Statics$().cI(x$1);
});
$p.aP = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.aH = (function() {
  this.nW();
});
$p.T = (function() {
  this.gU();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  fs: 1,
  aE: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  aC: 1,
  ag: 1,
  aA: 1,
  aD: 1,
  bn: 1,
  q: 1,
  p: 1,
  z: 1,
  R: 1,
  a: 1,
  B: 1
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
  this.b = null;
  this.d = null;
  this.g = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().gu, $m_sci_VectorStatics$().gu, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.jY = (function(index) {
  throw this.bi(index);
});
$p.b3 = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.b7 = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.b4 = (function(f) {
  return this;
});
$p.bQ = (function() {
  return 0;
});
$p.bX = (function(idx) {
  return null;
});
$p.i = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)));
});
$p.bg = (function(suffix, k) {
  return $m_sci_Vector$().bu(suffix);
});
$p.bi = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.cY = (function(elem) {
  return this.b3(elem);
});
$p.f = (function(v1) {
  this.jY((v1 | 0));
});
$p.t = (function(i) {
  this.jY(i);
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  fv: 1,
  a8: 1,
  a9: 1,
  a6: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  y: 1,
  o: 1,
  n: 1,
  C: 1,
  z: 1,
  q: 1,
  p: 1,
  R: 1,
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
  this.b = null;
  this.d = null;
  this.g = 0;
  this.bd = 0;
  this.aK = null;
  this.bd = len1;
  this.aK = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector2.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.g))) {
    var io = ((index - this.bd) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.aK.a.length) ? this.aK.a[i2].a[i1] : this.d.a[(31 & io)]);
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
$p.b3 = (function(elem) {
  if ((this.d.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().dw(this.d, elem);
    var x$2 = ((1 + this.g) | 0);
    return new $c_sci_Vector2(this.b, this.bd, this.aK, x$1, x$2);
  } else if ((this.aK.a.length < 30)) {
    var x$6 = $m_sci_VectorStatics$().z(this.aK, this.d);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$8 = ((1 + this.g) | 0);
    return new $c_sci_Vector2(this.b, this.bd, x$6, a, x$8);
  } else {
    var $x_5 = this.b;
    var $x_4 = this.bd;
    var $x_3 = this.aK;
    var $x_2 = this.bd;
    var $x_1 = $m_sci_VectorStatics$().ay;
    var x = this.d;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.a[0] = x;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.g) | 0));
  }
});
$p.b7 = (function(elem) {
  if ((this.bd < 32)) {
    var x$1 = $m_sci_VectorStatics$().dx(elem, this.b);
    var x$2 = ((1 + this.bd) | 0);
    var x$3 = ((1 + this.g) | 0);
    return new $c_sci_Vector2(x$1, x$2, this.aK, this.d, x$3);
  } else if ((this.aK.a.length < 30)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$8 = $m_sci_VectorStatics$().u(this.b, this.aK);
    var x$9 = ((1 + this.g) | 0);
    return new $c_sci_Vector2(a, 1, x$8, this.d, x$9);
  } else {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x = this.b;
    var a$2 = new ($d_O.r().r().C)(1);
    a$2.a[0] = x;
    return new $c_sci_Vector3(a$1, 1, a$2, ((1 + this.bd) | 0), $m_sci_VectorStatics$().ay, this.aK, this.d, ((1 + this.g) | 0));
  }
});
$p.b4 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().bF(this.b, f);
  var x$2 = $m_sci_VectorStatics$().V(2, this.aK, f);
  var x$3 = $m_sci_VectorStatics$().bF(this.d, f);
  return new $c_sci_Vector2(x$1, this.bd, x$2, x$3, this.g);
});
$p.bQ = (function() {
  return 3;
});
$p.bX = (function(idx) {
  switch (idx) {
    case 0: {
      return this.b;
      break;
    }
    case 1: {
      return this.aK;
      break;
    }
    case 2: {
      return this.d;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.bg = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().du(this.d, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.g - this.d.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector2(this.b, this.bd, this.aK, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.bg.call(this, suffix, k);
  }
});
$p.cY = (function(elem) {
  return this.b3(elem);
});
$p.f = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.g))) {
    var io = ((index - this.bd) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.aK.a.length) ? this.aK.a[i2].a[i1] : this.d.a[(31 & io)]);
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
function $isArrayOf_sci_Vector2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bB)));
}
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  bB: 1,
  a8: 1,
  a9: 1,
  a6: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  y: 1,
  o: 1,
  n: 1,
  C: 1,
  z: 1,
  q: 1,
  p: 1,
  R: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.b = null;
  this.d = null;
  this.g = 0;
  this.bp = 0;
  this.aY = null;
  this.aQ = 0;
  this.ap = null;
  this.aD = null;
  this.bp = len1;
  this.aY = prefix2;
  this.aQ = len12;
  this.ap = data3;
  this.aD = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector3.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.g))) {
    var io = ((index - this.aQ) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.ap.a.length) ? this.ap.a[i3].a[i2].a[i1] : ((i2 < this.aD.a.length) ? this.aD.a[i2].a[i1] : this.d.a[i1]));
    } else if ((index >= this.bp)) {
      var io$2 = ((index - this.bp) | 0);
      return this.aY.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
$p.b3 = (function(elem) {
  if ((this.d.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().dw(this.d, elem);
    var x$2 = ((1 + this.g) | 0);
    return new $c_sci_Vector3(this.b, this.bp, this.aY, this.aQ, this.ap, this.aD, x$1, x$2);
  } else if ((this.aD.a.length < 31)) {
    var x$9 = $m_sci_VectorStatics$().z(this.aD, this.d);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$11 = ((1 + this.g) | 0);
    return new $c_sci_Vector3(this.b, this.bp, this.aY, this.aQ, this.ap, x$9, a, x$11);
  } else if ((this.ap.a.length < 30)) {
    var x$17 = $m_sci_VectorStatics$().z(this.ap, $m_sci_VectorStatics$().z(this.aD, this.d));
    var x$18 = $m_sci_VectorStatics$().O;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$20 = ((1 + this.g) | 0);
    return new $c_sci_Vector3(this.b, this.bp, this.aY, this.aQ, x$17, x$18, a$1, x$20);
  } else {
    var $x_8 = this.b;
    var $x_7 = this.bp;
    var $x_6 = this.aY;
    var $x_5 = this.aQ;
    var $x_4 = this.ap;
    var $x_3 = this.aQ;
    var $x_2 = $m_sci_VectorStatics$().bJ;
    var x = $m_sci_VectorStatics$().z(this.aD, this.d);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().O;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.g) | 0));
  }
});
$p.b7 = (function(elem) {
  if ((this.bp < 32)) {
    var x$1 = $m_sci_VectorStatics$().dx(elem, this.b);
    var x$2 = ((1 + this.bp) | 0);
    var x$3 = ((1 + this.aQ) | 0);
    var x$4 = ((1 + this.g) | 0);
    return new $c_sci_Vector3(x$1, x$2, this.aY, x$3, this.ap, this.aD, this.d, x$4);
  } else if ((this.aQ < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$11 = $m_sci_VectorStatics$().u(this.b, this.aY);
    var x$12 = ((1 + this.aQ) | 0);
    var x$13 = ((1 + this.g) | 0);
    return new $c_sci_Vector3(a, 1, x$11, x$12, this.ap, this.aD, this.d, x$13);
  } else if ((this.ap.a.length < 30)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$19 = $m_sci_VectorStatics$().O;
    var x$21 = $m_sci_VectorStatics$().u($m_sci_VectorStatics$().u(this.b, this.aY), this.ap);
    var x$22 = ((1 + this.g) | 0);
    return new $c_sci_Vector3(a$1, 1, x$19, 1, x$21, this.aD, this.d, x$22);
  } else {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var $x_1 = $m_sci_VectorStatics$().O;
    var x = $m_sci_VectorStatics$().u(this.b, this.aY);
    var a$3 = new ($d_O.r().r().r().C)(1);
    a$3.a[0] = x;
    return new $c_sci_Vector4(a$2, 1, $x_1, 1, a$3, ((1 + this.aQ) | 0), $m_sci_VectorStatics$().bJ, this.ap, this.aD, this.d, ((1 + this.g) | 0));
  }
});
$p.b4 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().bF(this.b, f);
  var x$2 = $m_sci_VectorStatics$().V(2, this.aY, f);
  var x$3 = $m_sci_VectorStatics$().V(3, this.ap, f);
  var x$4 = $m_sci_VectorStatics$().V(2, this.aD, f);
  var x$5 = $m_sci_VectorStatics$().bF(this.d, f);
  return new $c_sci_Vector3(x$1, this.bp, x$2, this.aQ, x$3, x$4, x$5, this.g);
});
$p.bQ = (function() {
  return 5;
});
$p.bX = (function(idx) {
  switch (idx) {
    case 0: {
      return this.b;
      break;
    }
    case 1: {
      return this.aY;
      break;
    }
    case 2: {
      return this.ap;
      break;
    }
    case 3: {
      return this.aD;
      break;
    }
    case 4: {
      return this.d;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.bg = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().du(this.d, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.g - this.d.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector3(this.b, this.bp, this.aY, this.aQ, this.ap, this.aD, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.bg.call(this, suffix, k);
  }
});
$p.cY = (function(elem) {
  return this.b3(elem);
});
$p.f = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.g))) {
    var io = ((index - this.aQ) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.ap.a.length) ? this.ap.a[i3].a[i2].a[i1] : ((i2 < this.aD.a.length) ? this.aD.a[i2].a[i1] : this.d.a[i1]));
    } else if ((index >= this.bp)) {
      var io$2 = ((index - this.bp) | 0);
      return this.aY.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
function $isArrayOf_sci_Vector3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bC)));
}
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  bC: 1,
  a8: 1,
  a9: 1,
  a6: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  y: 1,
  o: 1,
  n: 1,
  C: 1,
  z: 1,
  q: 1,
  p: 1,
  R: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.b = null;
  this.d = null;
  this.g = 0;
  this.be = 0;
  this.aL = null;
  this.aZ = 0;
  this.aM = null;
  this.aE = 0;
  this.ae = null;
  this.ai = null;
  this.ah = null;
  this.be = len1;
  this.aL = prefix2;
  this.aZ = len12;
  this.aM = prefix3;
  this.aE = len123;
  this.ae = data4;
  this.ai = suffix3;
  this.ah = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector4.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.g))) {
    var io = ((index - this.aE) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.ae.a.length) ? this.ae.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ai.a.length) ? this.ai.a[i3].a[i2].a[i1] : ((i2 < this.ah.a.length) ? this.ah.a[i2].a[i1] : this.d.a[i1])));
    } else if ((index >= this.aZ)) {
      var io$2 = ((index - this.aZ) | 0);
      return this.aM.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.be)) {
      var io$3 = ((index - this.be) | 0);
      return this.aL.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
$p.b3 = (function(elem) {
  if ((this.d.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().dw(this.d, elem);
    var x$2 = ((1 + this.g) | 0);
    return new $c_sci_Vector4(this.b, this.be, this.aL, this.aZ, this.aM, this.aE, this.ae, this.ai, this.ah, x$1, x$2);
  } else if ((this.ah.a.length < 31)) {
    var x$12 = $m_sci_VectorStatics$().z(this.ah, this.d);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$14 = ((1 + this.g) | 0);
    return new $c_sci_Vector4(this.b, this.be, this.aL, this.aZ, this.aM, this.aE, this.ae, this.ai, x$12, a, x$14);
  } else if ((this.ai.a.length < 31)) {
    var x$23 = $m_sci_VectorStatics$().z(this.ai, $m_sci_VectorStatics$().z(this.ah, this.d));
    var x$24 = $m_sci_VectorStatics$().O;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$26 = ((1 + this.g) | 0);
    return new $c_sci_Vector4(this.b, this.be, this.aL, this.aZ, this.aM, this.aE, this.ae, x$23, x$24, a$1, x$26);
  } else if ((this.ae.a.length < 30)) {
    var x$34 = $m_sci_VectorStatics$().z(this.ae, $m_sci_VectorStatics$().z(this.ai, $m_sci_VectorStatics$().z(this.ah, this.d)));
    var x$35 = $m_sci_VectorStatics$().ay;
    var x$36 = $m_sci_VectorStatics$().O;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$38 = ((1 + this.g) | 0);
    return new $c_sci_Vector4(this.b, this.be, this.aL, this.aZ, this.aM, this.aE, x$34, x$35, x$36, a$2, x$38);
  } else {
    var $x_11 = this.b;
    var $x_10 = this.be;
    var $x_9 = this.aL;
    var $x_8 = this.aZ;
    var $x_7 = this.aM;
    var $x_6 = this.aE;
    var $x_5 = this.ae;
    var $x_4 = this.aE;
    var $x_3 = $m_sci_VectorStatics$().e6;
    var x = $m_sci_VectorStatics$().z(this.ai, $m_sci_VectorStatics$().z(this.ah, this.d));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().ay;
    var $x_1 = $m_sci_VectorStatics$().O;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.g) | 0));
  }
});
$p.b7 = (function(elem) {
  if ((this.be < 32)) {
    var x$1 = $m_sci_VectorStatics$().dx(elem, this.b);
    var x$2 = ((1 + this.be) | 0);
    var x$3 = ((1 + this.aZ) | 0);
    var x$4 = ((1 + this.aE) | 0);
    var x$5 = ((1 + this.g) | 0);
    return new $c_sci_Vector4(x$1, x$2, this.aL, x$3, this.aM, x$4, this.ae, this.ai, this.ah, this.d, x$5);
  } else if ((this.aZ < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$14 = $m_sci_VectorStatics$().u(this.b, this.aL);
    var x$15 = ((1 + this.aZ) | 0);
    var x$16 = ((1 + this.aE) | 0);
    var x$17 = ((1 + this.g) | 0);
    return new $c_sci_Vector4(a, 1, x$14, x$15, this.aM, x$16, this.ae, this.ai, this.ah, this.d, x$17);
  } else if ((this.aE < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$25 = $m_sci_VectorStatics$().O;
    var x$27 = $m_sci_VectorStatics$().u($m_sci_VectorStatics$().u(this.b, this.aL), this.aM);
    var x$28 = ((1 + this.aE) | 0);
    var x$29 = ((1 + this.g) | 0);
    return new $c_sci_Vector4(a$1, 1, x$25, 1, x$27, x$28, this.ae, this.ai, this.ah, this.d, x$29);
  } else if ((this.ae.a.length < 30)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$36 = $m_sci_VectorStatics$().O;
    var x$38 = $m_sci_VectorStatics$().ay;
    var x$40 = $m_sci_VectorStatics$().u($m_sci_VectorStatics$().u($m_sci_VectorStatics$().u(this.b, this.aL), this.aM), this.ae);
    var x$41 = ((1 + this.g) | 0);
    return new $c_sci_Vector4(a$2, 1, x$36, 1, x$38, 1, x$40, this.ai, this.ah, this.d, x$41);
  } else {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var $x_2 = $m_sci_VectorStatics$().O;
    var $x_1 = $m_sci_VectorStatics$().ay;
    var x = $m_sci_VectorStatics$().u($m_sci_VectorStatics$().u(this.b, this.aL), this.aM);
    var a$4 = new ($d_O.r().r().r().r().C)(1);
    a$4.a[0] = x;
    return new $c_sci_Vector5(a$3, 1, $x_2, 1, $x_1, 1, a$4, ((1 + this.aE) | 0), $m_sci_VectorStatics$().e6, this.ae, this.ai, this.ah, this.d, ((1 + this.g) | 0));
  }
});
$p.b4 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().bF(this.b, f);
  var x$2 = $m_sci_VectorStatics$().V(2, this.aL, f);
  var x$3 = $m_sci_VectorStatics$().V(3, this.aM, f);
  var x$4 = $m_sci_VectorStatics$().V(4, this.ae, f);
  var x$5 = $m_sci_VectorStatics$().V(3, this.ai, f);
  var x$6 = $m_sci_VectorStatics$().V(2, this.ah, f);
  var x$7 = $m_sci_VectorStatics$().bF(this.d, f);
  return new $c_sci_Vector4(x$1, this.be, x$2, this.aZ, x$3, this.aE, x$4, x$5, x$6, x$7, this.g);
});
$p.bQ = (function() {
  return 7;
});
$p.bX = (function(idx) {
  switch (idx) {
    case 0: {
      return this.b;
      break;
    }
    case 1: {
      return this.aL;
      break;
    }
    case 2: {
      return this.aM;
      break;
    }
    case 3: {
      return this.ae;
      break;
    }
    case 4: {
      return this.ai;
      break;
    }
    case 5: {
      return this.ah;
      break;
    }
    case 6: {
      return this.d;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.bg = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().du(this.d, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.g - this.d.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector4(this.b, this.be, this.aL, this.aZ, this.aM, this.aE, this.ae, this.ai, this.ah, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.bg.call(this, suffix, k);
  }
});
$p.cY = (function(elem) {
  return this.b3(elem);
});
$p.f = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.g))) {
    var io = ((index - this.aE) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.ae.a.length) ? this.ae.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ai.a.length) ? this.ai.a[i3].a[i2].a[i1] : ((i2 < this.ah.a.length) ? this.ah.a[i2].a[i1] : this.d.a[i1])));
    } else if ((index >= this.aZ)) {
      var io$2 = ((index - this.aZ) | 0);
      return this.aM.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.be)) {
      var io$3 = ((index - this.be) | 0);
      return this.aL.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
function $isArrayOf_sci_Vector4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bD)));
}
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  bD: 1,
  a8: 1,
  a9: 1,
  a6: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  y: 1,
  o: 1,
  n: 1,
  C: 1,
  z: 1,
  q: 1,
  p: 1,
  R: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.b = null;
  this.d = null;
  this.g = 0;
  this.b0 = 0;
  this.aq = null;
  this.aR = 0;
  this.ar = null;
  this.aN = 0;
  this.as = null;
  this.aj = 0;
  this.a3 = null;
  this.a9 = null;
  this.a8 = null;
  this.a7 = null;
  this.b0 = len1;
  this.aq = prefix2;
  this.aR = len12;
  this.ar = prefix3;
  this.aN = len123;
  this.as = prefix4;
  this.aj = len1234;
  this.a3 = data5;
  this.a9 = suffix4;
  this.a8 = suffix3;
  this.a7 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector5.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.g))) {
    var io = ((index - this.aj) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.a3.a.length) ? this.a3.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a9.a.length) ? this.a9.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a8.a.length) ? this.a8.a[i3].a[i2].a[i1] : ((i2 < this.a7.a.length) ? this.a7.a[i2].a[i1] : this.d.a[i1]))));
    } else if ((index >= this.aN)) {
      var io$2 = ((index - this.aN) | 0);
      return this.as.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aR)) {
      var io$3 = ((index - this.aR) | 0);
      return this.ar.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.b0)) {
      var io$4 = ((index - this.b0) | 0);
      return this.aq.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
$p.b3 = (function(elem) {
  if ((this.d.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().dw(this.d, elem);
    var x$2 = ((1 + this.g) | 0);
    return new $c_sci_Vector5(this.b, this.b0, this.aq, this.aR, this.ar, this.aN, this.as, this.aj, this.a3, this.a9, this.a8, this.a7, x$1, x$2);
  } else if ((this.a7.a.length < 31)) {
    var x$15 = $m_sci_VectorStatics$().z(this.a7, this.d);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$17 = ((1 + this.g) | 0);
    return new $c_sci_Vector5(this.b, this.b0, this.aq, this.aR, this.ar, this.aN, this.as, this.aj, this.a3, this.a9, this.a8, x$15, a, x$17);
  } else if ((this.a8.a.length < 31)) {
    var x$29 = $m_sci_VectorStatics$().z(this.a8, $m_sci_VectorStatics$().z(this.a7, this.d));
    var x$30 = $m_sci_VectorStatics$().O;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$32 = ((1 + this.g) | 0);
    return new $c_sci_Vector5(this.b, this.b0, this.aq, this.aR, this.ar, this.aN, this.as, this.aj, this.a3, this.a9, x$29, x$30, a$1, x$32);
  } else if ((this.a9.a.length < 31)) {
    var x$43 = $m_sci_VectorStatics$().z(this.a9, $m_sci_VectorStatics$().z(this.a8, $m_sci_VectorStatics$().z(this.a7, this.d)));
    var x$44 = $m_sci_VectorStatics$().ay;
    var x$45 = $m_sci_VectorStatics$().O;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$47 = ((1 + this.g) | 0);
    return new $c_sci_Vector5(this.b, this.b0, this.aq, this.aR, this.ar, this.aN, this.as, this.aj, this.a3, x$43, x$44, x$45, a$2, x$47);
  } else if ((this.a3.a.length < 30)) {
    var x$57 = $m_sci_VectorStatics$().z(this.a3, $m_sci_VectorStatics$().z(this.a9, $m_sci_VectorStatics$().z(this.a8, $m_sci_VectorStatics$().z(this.a7, this.d))));
    var x$58 = $m_sci_VectorStatics$().bJ;
    var x$59 = $m_sci_VectorStatics$().ay;
    var x$60 = $m_sci_VectorStatics$().O;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$62 = ((1 + this.g) | 0);
    return new $c_sci_Vector5(this.b, this.b0, this.aq, this.aR, this.ar, this.aN, this.as, this.aj, x$57, x$58, x$59, x$60, a$3, x$62);
  } else {
    var $x_14 = this.b;
    var $x_13 = this.b0;
    var $x_12 = this.aq;
    var $x_11 = this.aR;
    var $x_10 = this.ar;
    var $x_9 = this.aN;
    var $x_8 = this.as;
    var $x_7 = this.aj;
    var $x_6 = this.a3;
    var $x_5 = this.aj;
    var $x_4 = $m_sci_VectorStatics$().gv;
    var x = $m_sci_VectorStatics$().z(this.a9, $m_sci_VectorStatics$().z(this.a8, $m_sci_VectorStatics$().z(this.a7, this.d)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().bJ;
    var $x_2 = $m_sci_VectorStatics$().ay;
    var $x_1 = $m_sci_VectorStatics$().O;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.g) | 0));
  }
});
$p.b7 = (function(elem) {
  if ((this.b0 < 32)) {
    var x$1 = $m_sci_VectorStatics$().dx(elem, this.b);
    var x$2 = ((1 + this.b0) | 0);
    var x$3 = ((1 + this.aR) | 0);
    var x$4 = ((1 + this.aN) | 0);
    var x$5 = ((1 + this.aj) | 0);
    var x$6 = ((1 + this.g) | 0);
    return new $c_sci_Vector5(x$1, x$2, this.aq, x$3, this.ar, x$4, this.as, x$5, this.a3, this.a9, this.a8, this.a7, this.d, x$6);
  } else if ((this.aR < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$17 = $m_sci_VectorStatics$().u(this.b, this.aq);
    var x$18 = ((1 + this.aR) | 0);
    var x$19 = ((1 + this.aN) | 0);
    var x$20 = ((1 + this.aj) | 0);
    var x$21 = ((1 + this.g) | 0);
    return new $c_sci_Vector5(a, 1, x$17, x$18, this.ar, x$19, this.as, x$20, this.a3, this.a9, this.a8, this.a7, this.d, x$21);
  } else if ((this.aN < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$31 = $m_sci_VectorStatics$().O;
    var x$33 = $m_sci_VectorStatics$().u($m_sci_VectorStatics$().u(this.b, this.aq), this.ar);
    var x$34 = ((1 + this.aN) | 0);
    var x$35 = ((1 + this.aj) | 0);
    var x$36 = ((1 + this.g) | 0);
    return new $c_sci_Vector5(a$1, 1, x$31, 1, x$33, x$34, this.as, x$35, this.a3, this.a9, this.a8, this.a7, this.d, x$36);
  } else if ((this.aj < 1048576)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$45 = $m_sci_VectorStatics$().O;
    var x$47 = $m_sci_VectorStatics$().ay;
    var x$49 = $m_sci_VectorStatics$().u($m_sci_VectorStatics$().u($m_sci_VectorStatics$().u(this.b, this.aq), this.ar), this.as);
    var x$50 = ((1 + this.aj) | 0);
    var x$51 = ((1 + this.g) | 0);
    return new $c_sci_Vector5(a$2, 1, x$45, 1, x$47, 1, x$49, x$50, this.a3, this.a9, this.a8, this.a7, this.d, x$51);
  } else if ((this.a3.a.length < 30)) {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$59 = $m_sci_VectorStatics$().O;
    var x$61 = $m_sci_VectorStatics$().ay;
    var x$63 = $m_sci_VectorStatics$().bJ;
    var x$65 = $m_sci_VectorStatics$().u($m_sci_VectorStatics$().u($m_sci_VectorStatics$().u($m_sci_VectorStatics$().u(this.b, this.aq), this.ar), this.as), this.a3);
    var x$66 = ((1 + this.g) | 0);
    return new $c_sci_Vector5(a$3, 1, x$59, 1, x$61, 1, x$63, 1, x$65, this.a9, this.a8, this.a7, this.d, x$66);
  } else {
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var $x_3 = $m_sci_VectorStatics$().O;
    var $x_2 = $m_sci_VectorStatics$().ay;
    var $x_1 = $m_sci_VectorStatics$().bJ;
    var x = $m_sci_VectorStatics$().u($m_sci_VectorStatics$().u($m_sci_VectorStatics$().u(this.b, this.aq), this.ar), this.as);
    var a$5 = new ($d_O.r().r().r().r().r().C)(1);
    a$5.a[0] = x;
    return new $c_sci_Vector6(a$4, 1, $x_3, 1, $x_2, 1, $x_1, 1, a$5, ((1 + this.aj) | 0), $m_sci_VectorStatics$().gv, this.a3, this.a9, this.a8, this.a7, this.d, ((1 + this.g) | 0));
  }
});
$p.b4 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().bF(this.b, f);
  var x$2 = $m_sci_VectorStatics$().V(2, this.aq, f);
  var x$3 = $m_sci_VectorStatics$().V(3, this.ar, f);
  var x$4 = $m_sci_VectorStatics$().V(4, this.as, f);
  var x$5 = $m_sci_VectorStatics$().V(5, this.a3, f);
  var x$6 = $m_sci_VectorStatics$().V(4, this.a9, f);
  var x$7 = $m_sci_VectorStatics$().V(3, this.a8, f);
  var x$8 = $m_sci_VectorStatics$().V(2, this.a7, f);
  var x$9 = $m_sci_VectorStatics$().bF(this.d, f);
  return new $c_sci_Vector5(x$1, this.b0, x$2, this.aR, x$3, this.aN, x$4, this.aj, x$5, x$6, x$7, x$8, x$9, this.g);
});
$p.bQ = (function() {
  return 9;
});
$p.bX = (function(idx) {
  switch (idx) {
    case 0: {
      return this.b;
      break;
    }
    case 1: {
      return this.aq;
      break;
    }
    case 2: {
      return this.ar;
      break;
    }
    case 3: {
      return this.as;
      break;
    }
    case 4: {
      return this.a3;
      break;
    }
    case 5: {
      return this.a9;
      break;
    }
    case 6: {
      return this.a8;
      break;
    }
    case 7: {
      return this.a7;
      break;
    }
    case 8: {
      return this.d;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.bg = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().du(this.d, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.g - this.d.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector5(this.b, this.b0, this.aq, this.aR, this.ar, this.aN, this.as, this.aj, this.a3, this.a9, this.a8, this.a7, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.bg.call(this, suffix, k);
  }
});
$p.cY = (function(elem) {
  return this.b3(elem);
});
$p.f = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.g))) {
    var io = ((index - this.aj) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.a3.a.length) ? this.a3.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a9.a.length) ? this.a9.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a8.a.length) ? this.a8.a[i3].a[i2].a[i1] : ((i2 < this.a7.a.length) ? this.a7.a[i2].a[i1] : this.d.a[i1]))));
    } else if ((index >= this.aN)) {
      var io$2 = ((index - this.aN) | 0);
      return this.as.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aR)) {
      var io$3 = ((index - this.aR) | 0);
      return this.ar.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.b0)) {
      var io$4 = ((index - this.b0) | 0);
      return this.aq.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
function $isArrayOf_sci_Vector5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bE)));
}
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  bE: 1,
  a8: 1,
  a9: 1,
  a6: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  y: 1,
  o: 1,
  n: 1,
  C: 1,
  z: 1,
  q: 1,
  p: 1,
  R: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.b = null;
  this.d = null;
  this.g = 0;
  this.b1 = 0;
  this.au = null;
  this.aS = 0;
  this.av = null;
  this.aO = 0;
  this.aw = null;
  this.aF = 0;
  this.ax = null;
  this.at = 0;
  this.a4 = null;
  this.ad = null;
  this.ac = null;
  this.ab = null;
  this.aa = null;
  this.b1 = len1;
  this.au = prefix2;
  this.aS = len12;
  this.av = prefix3;
  this.aO = len123;
  this.aw = prefix4;
  this.aF = len1234;
  this.ax = prefix5;
  this.at = len12345;
  this.a4 = data6;
  this.ad = suffix5;
  this.ac = suffix4;
  this.ab = suffix3;
  this.aa = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector6.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.g))) {
    var io = ((index - this.at) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.a4.a.length) ? this.a4.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.ad.a.length) ? this.ad.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.ac.a.length) ? this.ac.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ab.a.length) ? this.ab.a[i3].a[i2].a[i1] : ((i2 < this.aa.a.length) ? this.aa.a[i2].a[i1] : this.d.a[i1])))));
    } else if ((index >= this.aF)) {
      var io$2 = ((index - this.aF) | 0);
      return this.ax.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aO)) {
      var io$3 = ((index - this.aO) | 0);
      return this.aw.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aS)) {
      var io$4 = ((index - this.aS) | 0);
      return this.av.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.b1)) {
      var io$5 = ((index - this.b1) | 0);
      return this.au.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
$p.b3 = (function(elem) {
  if ((this.d.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().dw(this.d, elem);
    var x$2 = ((1 + this.g) | 0);
    return new $c_sci_Vector6(this.b, this.b1, this.au, this.aS, this.av, this.aO, this.aw, this.aF, this.ax, this.at, this.a4, this.ad, this.ac, this.ab, this.aa, x$1, x$2);
  } else if ((this.aa.a.length < 31)) {
    var x$18 = $m_sci_VectorStatics$().z(this.aa, this.d);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$20 = ((1 + this.g) | 0);
    return new $c_sci_Vector6(this.b, this.b1, this.au, this.aS, this.av, this.aO, this.aw, this.aF, this.ax, this.at, this.a4, this.ad, this.ac, this.ab, x$18, a, x$20);
  } else if ((this.ab.a.length < 31)) {
    var x$35 = $m_sci_VectorStatics$().z(this.ab, $m_sci_VectorStatics$().z(this.aa, this.d));
    var x$36 = $m_sci_VectorStatics$().O;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$38 = ((1 + this.g) | 0);
    return new $c_sci_Vector6(this.b, this.b1, this.au, this.aS, this.av, this.aO, this.aw, this.aF, this.ax, this.at, this.a4, this.ad, this.ac, x$35, x$36, a$1, x$38);
  } else if ((this.ac.a.length < 31)) {
    var x$52 = $m_sci_VectorStatics$().z(this.ac, $m_sci_VectorStatics$().z(this.ab, $m_sci_VectorStatics$().z(this.aa, this.d)));
    var x$53 = $m_sci_VectorStatics$().ay;
    var x$54 = $m_sci_VectorStatics$().O;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$56 = ((1 + this.g) | 0);
    return new $c_sci_Vector6(this.b, this.b1, this.au, this.aS, this.av, this.aO, this.aw, this.aF, this.ax, this.at, this.a4, this.ad, x$52, x$53, x$54, a$2, x$56);
  } else if ((this.ad.a.length < 31)) {
    var x$69 = $m_sci_VectorStatics$().z(this.ad, $m_sci_VectorStatics$().z(this.ac, $m_sci_VectorStatics$().z(this.ab, $m_sci_VectorStatics$().z(this.aa, this.d))));
    var x$70 = $m_sci_VectorStatics$().bJ;
    var x$71 = $m_sci_VectorStatics$().ay;
    var x$72 = $m_sci_VectorStatics$().O;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$74 = ((1 + this.g) | 0);
    return new $c_sci_Vector6(this.b, this.b1, this.au, this.aS, this.av, this.aO, this.aw, this.aF, this.ax, this.at, this.a4, x$69, x$70, x$71, x$72, a$3, x$74);
  } else if ((this.a4.a.length < 62)) {
    var x$86 = $m_sci_VectorStatics$().z(this.a4, $m_sci_VectorStatics$().z(this.ad, $m_sci_VectorStatics$().z(this.ac, $m_sci_VectorStatics$().z(this.ab, $m_sci_VectorStatics$().z(this.aa, this.d)))));
    var x$87 = $m_sci_VectorStatics$().e6;
    var x$88 = $m_sci_VectorStatics$().bJ;
    var x$89 = $m_sci_VectorStatics$().ay;
    var x$90 = $m_sci_VectorStatics$().O;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var x$92 = ((1 + this.g) | 0);
    return new $c_sci_Vector6(this.b, this.b1, this.au, this.aS, this.av, this.aO, this.aw, this.aF, this.ax, this.at, x$86, x$87, x$88, x$89, x$90, a$4, x$92);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.b7 = (function(elem) {
  if ((this.b1 < 32)) {
    var x$1 = $m_sci_VectorStatics$().dx(elem, this.b);
    var x$2 = ((1 + this.b1) | 0);
    var x$3 = ((1 + this.aS) | 0);
    var x$4 = ((1 + this.aO) | 0);
    var x$5 = ((1 + this.aF) | 0);
    var x$6 = ((1 + this.at) | 0);
    var x$7 = ((1 + this.g) | 0);
    return new $c_sci_Vector6(x$1, x$2, this.au, x$3, this.av, x$4, this.aw, x$5, this.ax, x$6, this.a4, this.ad, this.ac, this.ab, this.aa, this.d, x$7);
  } else if ((this.aS < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$20 = $m_sci_VectorStatics$().u(this.b, this.au);
    var x$21 = ((1 + this.aS) | 0);
    var x$22 = ((1 + this.aO) | 0);
    var x$23 = ((1 + this.aF) | 0);
    var x$24 = ((1 + this.at) | 0);
    var x$25 = ((1 + this.g) | 0);
    return new $c_sci_Vector6(a, 1, x$20, x$21, this.av, x$22, this.aw, x$23, this.ax, x$24, this.a4, this.ad, this.ac, this.ab, this.aa, this.d, x$25);
  } else if ((this.aO < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$37 = $m_sci_VectorStatics$().O;
    var x$39 = $m_sci_VectorStatics$().u($m_sci_VectorStatics$().u(this.b, this.au), this.av);
    var x$40 = ((1 + this.aO) | 0);
    var x$41 = ((1 + this.aF) | 0);
    var x$42 = ((1 + this.at) | 0);
    var x$43 = ((1 + this.g) | 0);
    return new $c_sci_Vector6(a$1, 1, x$37, 1, x$39, x$40, this.aw, x$41, this.ax, x$42, this.a4, this.ad, this.ac, this.ab, this.aa, this.d, x$43);
  } else if ((this.aF < 1048576)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$54 = $m_sci_VectorStatics$().O;
    var x$56 = $m_sci_VectorStatics$().ay;
    var x$58 = $m_sci_VectorStatics$().u($m_sci_VectorStatics$().u($m_sci_VectorStatics$().u(this.b, this.au), this.av), this.aw);
    var x$59 = ((1 + this.aF) | 0);
    var x$60 = ((1 + this.at) | 0);
    var x$61 = ((1 + this.g) | 0);
    return new $c_sci_Vector6(a$2, 1, x$54, 1, x$56, 1, x$58, x$59, this.ax, x$60, this.a4, this.ad, this.ac, this.ab, this.aa, this.d, x$61);
  } else if ((this.at < 33554432)) {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$71 = $m_sci_VectorStatics$().O;
    var x$73 = $m_sci_VectorStatics$().ay;
    var x$75 = $m_sci_VectorStatics$().bJ;
    var x$77 = $m_sci_VectorStatics$().u($m_sci_VectorStatics$().u($m_sci_VectorStatics$().u($m_sci_VectorStatics$().u(this.b, this.au), this.av), this.aw), this.ax);
    var x$78 = ((1 + this.at) | 0);
    var x$79 = ((1 + this.g) | 0);
    return new $c_sci_Vector6(a$3, 1, x$71, 1, x$73, 1, x$75, 1, x$77, x$78, this.a4, this.ad, this.ac, this.ab, this.aa, this.d, x$79);
  } else if ((this.a4.a.length < 62)) {
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var x$88 = $m_sci_VectorStatics$().O;
    var x$90 = $m_sci_VectorStatics$().ay;
    var x$92 = $m_sci_VectorStatics$().bJ;
    var x$94 = $m_sci_VectorStatics$().e6;
    var x$96 = $m_sci_VectorStatics$().u($m_sci_VectorStatics$().u($m_sci_VectorStatics$().u($m_sci_VectorStatics$().u($m_sci_VectorStatics$().u(this.b, this.au), this.av), this.aw), this.ax), this.a4);
    var x$97 = ((1 + this.g) | 0);
    return new $c_sci_Vector6(a$4, 1, x$88, 1, x$90, 1, x$92, 1, x$94, 1, x$96, this.ad, this.ac, this.ab, this.aa, this.d, x$97);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.b4 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().bF(this.b, f);
  var x$2 = $m_sci_VectorStatics$().V(2, this.au, f);
  var x$3 = $m_sci_VectorStatics$().V(3, this.av, f);
  var x$4 = $m_sci_VectorStatics$().V(4, this.aw, f);
  var x$5 = $m_sci_VectorStatics$().V(5, this.ax, f);
  var x$6 = $m_sci_VectorStatics$().V(6, this.a4, f);
  var x$7 = $m_sci_VectorStatics$().V(5, this.ad, f);
  var x$8 = $m_sci_VectorStatics$().V(4, this.ac, f);
  var x$9 = $m_sci_VectorStatics$().V(3, this.ab, f);
  var x$10 = $m_sci_VectorStatics$().V(2, this.aa, f);
  var x$11 = $m_sci_VectorStatics$().bF(this.d, f);
  return new $c_sci_Vector6(x$1, this.b1, x$2, this.aS, x$3, this.aO, x$4, this.aF, x$5, this.at, x$6, x$7, x$8, x$9, x$10, x$11, this.g);
});
$p.bQ = (function() {
  return 11;
});
$p.bX = (function(idx) {
  switch (idx) {
    case 0: {
      return this.b;
      break;
    }
    case 1: {
      return this.au;
      break;
    }
    case 2: {
      return this.av;
      break;
    }
    case 3: {
      return this.aw;
      break;
    }
    case 4: {
      return this.ax;
      break;
    }
    case 5: {
      return this.a4;
      break;
    }
    case 6: {
      return this.ad;
      break;
    }
    case 7: {
      return this.ac;
      break;
    }
    case 8: {
      return this.ab;
      break;
    }
    case 9: {
      return this.aa;
      break;
    }
    case 10: {
      return this.d;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.bg = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().du(this.d, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.g - this.d.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector6(this.b, this.b1, this.au, this.aS, this.av, this.aO, this.aw, this.aF, this.ax, this.at, this.a4, this.ad, this.ac, this.ab, this.aa, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.bg.call(this, suffix, k);
  }
});
$p.cY = (function(elem) {
  return this.b3(elem);
});
$p.f = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.g))) {
    var io = ((index - this.at) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.a4.a.length) ? this.a4.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.ad.a.length) ? this.ad.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.ac.a.length) ? this.ac.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ab.a.length) ? this.ab.a[i3].a[i2].a[i1] : ((i2 < this.aa.a.length) ? this.aa.a[i2].a[i1] : this.d.a[i1])))));
    } else if ((index >= this.aF)) {
      var io$2 = ((index - this.aF) | 0);
      return this.ax.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aO)) {
      var io$3 = ((index - this.aO) | 0);
      return this.aw.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aS)) {
      var io$4 = ((index - this.aS) | 0);
      return this.av.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.b1)) {
      var io$5 = ((index - this.b1) | 0);
      return this.au.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
function $isArrayOf_sci_Vector6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bF)));
}
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  bF: 1,
  a8: 1,
  a9: 1,
  a6: 1,
  v: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  y: 1,
  o: 1,
  n: 1,
  C: 1,
  z: 1,
  q: 1,
  p: 1,
  R: 1,
  a: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.az = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.az = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.b8 = (function() {
  return "IndexedSeq";
});
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.aV = (function(len) {
  var x = this.az.o();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bf = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.o = (function() {
  return this.az.o();
});
$p.A = (function() {
  return this.az.o();
});
$p.lU = (function(x) {
  var this$1 = this.az;
  var str = ("" + $cToS(x));
  this$1.k = (this$1.k + str);
  return this;
});
$p.s = (function() {
  return this.az.k;
});
$p.jX = (function(xs) {
  if (false) {
    var this$3 = this.az;
    var str = xs.o7;
    this$3.k = (("" + this$3.k) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.az.jW(xs.bq);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.az;
    var s = xs.az;
    this$4.k = (("" + this$4.k) + s);
  } else {
    var ks = xs.A();
    if ((ks !== 0)) {
      var b = this.az;
      if ((ks > 0)) {
        b.o();
      }
      var it = xs.m();
      while (it.q()) {
        var c = $uC(it.h());
        var str$1 = ("" + $cToS(c));
        b.k = (b.k + str$1);
      }
    }
  }
  return this;
});
$p.e = (function() {
  return (this.az.o() === 0);
});
$p.bE = (function() {
  return $m_scm_IndexedSeq$();
});
$p.bv = (function() {
  return this.az.k;
});
$p.b2 = (function(elem) {
  return this.lU($uC(elem));
});
$p.fb = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).jX(coll);
});
$p.fc = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).jX(coll);
});
$p.f = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.az.ke(i));
});
$p.t = (function(i) {
  return $bC(this.az.ke(i));
});
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bU)));
}
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  bU: 1,
  H: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  K: 1,
  J: 1,
  L: 1,
  I: 1,
  A: 1,
  ac: 1,
  a0: 1,
  V: 1,
  U: 1,
  O: 1,
  o: 1,
  n: 1,
  P: 1,
  ax: 1,
  a: 1
}));
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().fl($thiz);
  $thiz.bB = buf.bB;
  $thiz.c7 = buf.c7;
  $thiz.f3 = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.f4 = ((1 + $thiz.f4) | 0);
  if ($thiz.f3) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.f4 = 0;
  this.bB = null;
  this.c7 = null;
  this.f3 = false;
  this.bC = 0;
  this.f4 = 0;
  this.bB = $m_sci_Nil$();
  this.c7 = null;
  this.f3 = false;
  this.bC = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.m = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.bB.m(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.f4)));
});
$p.d2 = (function() {
  return $m_scm_ListBuffer$();
});
$p.t = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.bB, i);
});
$p.o = (function() {
  return this.bC;
});
$p.A = (function() {
  return this.bC;
});
$p.e = (function() {
  return (this.bC === 0);
});
$p.lc = (function() {
  this.f3 = (!this.e());
  return this.bB;
});
$p.m1 = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.bC === 0)) {
    this.bB = last1;
  } else {
    this.c7.c2 = last1;
  }
  this.c7 = last1;
  this.bC = ((1 + this.bC) | 0);
  return this;
});
$p.fl = (function(xs) {
  var it = xs.m();
  if (it.q()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.h(), $m_sci_Nil$());
    this.bB = last0;
    while (it.q()) {
      var last1 = new $c_sci_$colon$colon(it.h(), $m_sci_Nil$());
      last0.c2 = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.bC = len;
    this.c7 = last0;
  }
  return this;
});
$p.lS = (function(xs) {
  var it = xs.m();
  if (it.q()) {
    var fresh = new $c_scm_ListBuffer().fl(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.bC === 0)) {
      this.bB = fresh.bB;
    } else {
      this.c7.c2 = fresh.bB;
    }
    this.c7 = fresh.c7;
    this.bC = ((this.bC + fresh.bC) | 0);
  }
  return this;
});
$p.b8 = (function() {
  return "ListBuffer";
});
$p.bf = (function(elems) {
  return this.lS(elems);
});
$p.b2 = (function(elem) {
  return this.m1(elem);
});
$p.bv = (function() {
  return this.lc();
});
$p.f = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.bB, i);
});
$p.bE = (function() {
  return $m_scm_ListBuffer$();
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bT)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  bT: 1,
  aF: 1,
  H: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  K: 1,
  J: 1,
  L: 1,
  I: 1,
  A: 1,
  aG: 1,
  V: 1,
  U: 1,
  aH: 1,
  q: 1,
  p: 1,
  ac: 1,
  a0: 1,
  R: 1,
  a: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.cv = 0;
  $thiz.cu = initialElements;
  $thiz.ag = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.cv = 0;
  this.cu = null;
  this.ag = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.m = (function() {
  return this.o5().m();
});
$p.aV = (function(len) {
  var x = this.ag;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.A = (function() {
  return this.ag;
});
$p.ko = (function(n) {
  this.cu = $m_scm_ArrayBuffer$().l9(this.cu, this.ag, n);
});
$p.t = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().en(n, (((-1) + this.ag) | 0));
  }
  if ((hi > this.ag)) {
    throw $m_scg_CommonErrors$().en((((-1) + hi) | 0), (((-1) + this.ag) | 0));
  }
  return this.cu.a[n];
});
$p.o4 = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $m_scg_CommonErrors$().en(index, (((-1) + this.ag) | 0));
  }
  if ((hi > this.ag)) {
    throw $m_scg_CommonErrors$().en((((-1) + hi) | 0), (((-1) + this.ag) | 0));
  }
  this.cv = ((1 + this.cv) | 0);
  this.cu.a[index] = elem;
});
$p.o = (function() {
  return this.ag;
});
$p.o5 = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.cv)));
});
$p.d2 = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.lY = (function(elem) {
  this.cv = ((1 + this.cv) | 0);
  var newSize = ((1 + this.ag) | 0);
  this.ko(newSize);
  this.ag = newSize;
  this.o4((((-1) + this.ag) | 0), elem);
  return this;
});
$p.jU = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.ag;
    if ((elemsLength > 0)) {
      this.cv = ((1 + this.cv) | 0);
      this.ko(((this.ag + elemsLength) | 0));
      $m_s_Array$().el(elems.cu, 0, this.cu, this.ag, elemsLength);
      this.ag = ((this.ag + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.b8 = (function() {
  return "ArrayBuffer";
});
$p.bh = (function(xs, start, len) {
  var srcLen = this.ag;
  var destLen = $m_jl_reflect_Array$().bM(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().el(this.cu, 0, xs, start, copied);
  }
  return copied;
});
$p.bf = (function(elems) {
  return this.jU(elems);
});
$p.b2 = (function(elem) {
  return this.lY(elem);
});
$p.bE = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.f = (function(v1) {
  return this.t((v1 | 0));
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bG)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  bG: 1,
  aF: 1,
  H: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  K: 1,
  J: 1,
  L: 1,
  I: 1,
  A: 1,
  aG: 1,
  V: 1,
  U: 1,
  aH: 1,
  bS: 1,
  O: 1,
  o: 1,
  n: 1,
  P: 1,
  q: 1,
  p: 1,
  R: 1,
  a: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.cX = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.cX = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.b8 = (function() {
  return "IndexedSeq";
});
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.aV = (function(len) {
  var x = (this.cX.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.d2 = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.t = (function(index) {
  return this.cX[index];
});
$p.o = (function() {
  return (this.cX.length | 0);
});
$p.A = (function() {
  return (this.cX.length | 0);
});
$p.bS = (function() {
  return "WrappedArray";
});
$p.bv = (function() {
  return this;
});
$p.b2 = (function(elem) {
  this.cX.push(elem);
  return this;
});
$p.f = (function(v1) {
  var index = (v1 | 0);
  return this.cX[index];
});
$p.bE = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  gx: 1,
  aF: 1,
  H: 1,
  m: 1,
  g: 1,
  f: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  l: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  K: 1,
  J: 1,
  L: 1,
  I: 1,
  A: 1,
  aG: 1,
  V: 1,
  U: 1,
  aH: 1,
  q: 1,
  p: 1,
  O: 1,
  o: 1,
  n: 1,
  P: 1,
  bS: 1,
  a0: 1,
  a: 1
}));
$L0 = new $c_RTLong(0, 0);
$d_J.z = $L0;
var $t_Ladversaries_Stage$__Setup = null;
var $t_Ladversaries_Stage$__DeckOrder = null;
var $t_Ladversaries_Stage$__AfterRavage = null;
var $t_Ladversaries_Stage$__Ravage = null;
var $t_Ladversaries_Stage$__AfterBuild = null;
var $t_Ladversaries_Stage$__Build = null;
var $t_Ladversaries_Stage$__Explore = null;
var $t_Ladversaries_Stage$__RuleChange = null;
var $t_Ladversaries_Stage$__HighImmigration = null;
$s_LMain__main__AT__V(new ($d_T.r().C)([]));
//# sourceMappingURL=main.js.map
