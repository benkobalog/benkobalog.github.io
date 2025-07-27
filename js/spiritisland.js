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
  return (arg0.$classData.Z ? arg0.j() : $objectClone(arg0));
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
        return null.wa();
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
        return instance.n(x0);
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0);
      } else {
        return $c_O.prototype.n.call(instance, x0);
      }
    }
  }
}
function $dp_getChars__I__I__AC__I__V(instance, x0, x1, x2, x3) {
  if (((typeof instance) === "string")) {
    return $f_T__getChars__I__I__AC__I__V(instance, x0, x1, x2, x3);
  } else {
    return instance.r0(x0, x1, x2, x3);
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
    return instance.wb(x0);
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
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.n = (function(that) {
  return (this === that);
});
$p.x = (function() {
  var i = this.v();
  return (($objectClassName(this) + "@") + (+(i >>> 0.0)).toString(16));
});
$p.toString = (function() {
  return this.x();
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
$p.j = (function() {
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
$p.j = (function() {
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
$p.j = (function() {
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
$p.j = (function() {
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
$p.j = (function() {
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
$p.j = (function() {
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
$p.j = (function() {
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
$p.j = (function() {
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
$p.j = (function() {
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
    E: 1,
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
  $p.j = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    E: 1,
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
function $s_LSIAdversaryTool__main__AT__V(args) {
  $m_LSIAdversaryTool$().ui(args);
}
function $p_LSIAdversaryTool$__splitWithDelimiters__sci_Vector__T__sci_List__T__sci_Vector__sci_Vector($thiz, vec, str, delimiters, notMatchedString, acc) {
  var acc$tailLocal1 = acc;
  var notMatchedString$tailLocal1 = notMatchedString;
  var str$tailLocal1 = str;
  while (true) {
    if ((str$tailLocal1 === "")) {
      return acc$tailLocal1.T(notMatchedString$tailLocal1);
    } else {
      var x30 = $p_LSIAdversaryTool$__findDelimiterAtPosition$1__sci_List__T__s_Option($thiz, delimiters, str$tailLocal1);
      if ((x30 instanceof $c_s_Some)) {
        var x32 = x30.eh;
        if ((x32 !== null)) {
          var d = x32.bm();
          var rest = x32.bd();
          var acc$tailLocal1$tmp1 = acc$tailLocal1.T(notMatchedString$tailLocal1).T(d);
          str$tailLocal1 = rest;
          notMatchedString$tailLocal1 = "";
          acc$tailLocal1 = acc$tailLocal1$tmp1;
          continue;
        }
      }
      if (($m_s_None$() === x30)) {
        var str$tailLocal1$tmp2 = $m_sc_StringOps$().lf(str$tailLocal1, 1);
        var notMatchedString$tailLocal1$tmp2 = (notMatchedString$tailLocal1 + $cToS($m_sc_StringOps$().tW(str$tailLocal1)));
        str$tailLocal1 = str$tailLocal1$tmp2;
        notMatchedString$tailLocal1 = notMatchedString$tailLocal1$tmp2;
        continue;
      }
      throw new $c_s_MatchError(x30);
    }
  }
}
function $p_LSIAdversaryTool$__injectImages__sci_Vector__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, vec, s) {
  var wordsToReplace = $m_sci_Map$().qS($m_sr_ScalaRunTime$().B(new ($d_T2.r().C)([new $c_T2("City", "images/City.svg"), new $c_T2("Town", "images/Town.svg"), new $c_T2("Beasts", "images/Beasts.svg"), new $c_T2("Explorer", "images/Explorer.svg"), new $c_T2("Dahan", "images/Dahan.svg"), new $c_T2("Disease", "images/Disease.svg"), new $c_T2("Escalation", "images/Escalation.svg"), new $c_T2("Fear", "images/Fear.svg"), new $c_T2("Blight", "images/Blight.svg")])));
  var parts = $p_LSIAdversaryTool$__splitWithDelimiters__sci_Vector__T__sci_List__T__sci_Vector__sci_Vector($thiz, vec, s, $m_sci_Nil$().y(wordsToReplace.lF()), "", ($m_sci_Vector$(), $m_sci_Vector0$())).N(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text) => {
    var x35 = wordsToReplace.gl(text);
    if ((x35 instanceof $c_s_Some)) {
      var value = x35.eh;
      return $m_Lcom_raquo_laminar_api_package$().w.u0().be($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().w.vk().g8(value), $m_Lcom_raquo_laminar_api_package$().w.vI().g8("auto"), $m_Lcom_raquo_laminar_api_package$().w.tZ().g8("1em")])));
    }
    if (($m_s_None$() === x35)) {
      return new $c_Lcom_raquo_laminar_nodes_TextNode(text);
    }
    throw new $c_s_MatchError(x35);
  })));
  return $m_Lcom_raquo_laminar_api_package$().w.uN().be(parts);
}
function $p_LSIAdversaryTool$__findRules__LSIAdversaryTool$AdversarySelector__Ladversaries_Stage__sci_Vector($thiz, sel, stage) {
  return $f_sc_StrictOptimizedIterableOps__collect__s_PartialFunction__O(sel.db.fy, new $c_LSIAdversaryTool$$anon$3(stage, sel, $thiz));
}
function $p_LSIAdversaryTool$__findDelimiterAtPosition$1__sci_List__T__s_Option($thiz, delimiters$1, subString) {
  return $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(delimiters$1, new $c_LSIAdversaryTool$$anon$2(subString));
}
function $p_LSIAdversaryTool$__newSection$lzyINIT1$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, newSection$lzy1$1, hideInCompact$1, sectionName$1, rulesDiv$1) {
  if ((newSection$lzy1$1 === null)) {
    throw new $c_jl_NullPointerException();
  }
  return (newSection$lzy1$1.iI ? newSection$lzy1$1.iJ : newSection$lzy1$1.u4((hideInCompact$1 ? $m_Lcom_raquo_laminar_api_package$().w.e3().be($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().w.j5().iQ($thiz.eP), $m_Lcom_raquo_laminar_api_package$().w.eV.g9(sectionName$1), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().w, $m_sci_Vector$().bB($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)([$m_Lcom_raquo_laminar_api_package$().w.r1().be($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().w, sectionName$1, $m_Lcom_raquo_laminar_modifiers_RenderableText$().cP)]))), rulesDiv$1]))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())]))) : $m_Lcom_raquo_laminar_api_package$().w.e3().be($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().w.eV.g9(sectionName$1), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().w, $m_sci_Vector$().bB($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)([$m_Lcom_raquo_laminar_api_package$().w.r1().be($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().w.tA().ho(new $c_Lcom_raquo_airstream_misc_MapSignal($thiz.eP, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$5) => ((!(!_$5)) ? "0.5rem" : "1rem"))), $m_s_None$()), $m_s_$less$colon$less$().dA), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().w, sectionName$1, $m_Lcom_raquo_laminar_modifiers_RenderableText$().cP)]))), rulesDiv$1]))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())]))))));
}
function $p_LSIAdversaryTool$__newSection$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, newSection$lzy1$2, hideInCompact$2, sectionName$2, rulesDiv$2) {
  return (newSection$lzy1$2.iI ? newSection$lzy1$2.iJ : $p_LSIAdversaryTool$__newSection$lzyINIT1$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, newSection$lzy1$2, hideInCompact$2, sectionName$2, rulesDiv$2));
}
/** @constructor */
function $c_LSIAdversaryTool$() {
  this.hZ = null;
  this.hY = null;
  this.jl = null;
  this.eP = null;
  this.i0 = null;
  this.m7 = null;
  $n_LSIAdversaryTool$ = this;
  this.hZ = $m_Lcom_raquo_airstream_web_WebStorageVar$().j9("adversary", $m_s_None$()).vs(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Ladversaries_Adversary$().jp.eb)));
  this.hY = $m_Lcom_raquo_airstream_web_WebStorageVar$().j9("adversary-level", $m_s_None$()).u7(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => 6)));
  this.jl = $m_Lcom_raquo_airstream_web_WebStorageVar$().j9("compact-mode", $m_s_None$()).qr(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => false)));
  this.eP = this.jl.bM;
  this.i0 = $m_Lcom_raquo_airstream_web_WebStorageVar$().j9("events-on", $m_s_None$()).qr(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => true)));
  this.m7 = $m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().qw($m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().qw(this.hZ.bM, this.hY.bM, new $c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()), this.i0.bM, new $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$4());
}
$p = $c_LSIAdversaryTool$.prototype = new $h_O();
$p.constructor = $c_LSIAdversaryTool$;
/** @constructor */
function $h_LSIAdversaryTool$() {
}
$h_LSIAdversaryTool$.prototype = $p;
$p.ui = (function(args) {
  var container = document.getElementById("app");
  var this$3 = $m_Lcom_raquo_laminar_api_package$().w;
  var container$1 = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => container));
  var rootNode = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.sT()));
  var p = $m_Lcom_raquo_laminar_keys_EventProcessor$().hB(this$3.nQ.uK(), false, false);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream($m_Lcom_raquo_airstream_web_DomEventStream$().qf(document, p.eW.gU, p.gT), p.gS), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    new $c_Lcom_raquo_laminar_nodes_RootNode(container$1.L(), rootNode.L());
  })), this$3.vD());
});
$p.sT = (function() {
  return $m_Lcom_raquo_laminar_api_package$().w.e3().be($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().w.tV().be($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().w.j5().iQ(this.eP), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().w, "Spirit Island Adversary Tool", $m_Lcom_raquo_laminar_modifiers_RenderableText$().cP)]))), $m_Lcom_raquo_laminar_api_package$().w.e3().be($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().w.eV.g9("selectors"), this.v1(), this.uZ(), this.v3()]))), this.uY()])));
});
$p.v3 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().w.e3().be($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().w.lu().be($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().w, "Options", $m_Lcom_raquo_laminar_modifiers_RenderableText$().cP)]))), this.v0(), this.v2()])));
});
$p.v2 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().w.iW().be($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().w, "Events", $m_Lcom_raquo_laminar_modifiers_RenderableText$().cP), $m_Lcom_raquo_laminar_api_package$().w.iV().ho(new $c_Lcom_raquo_airstream_misc_MapSignal(this.i0.bM, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((selected) => ((!(!selected)) ? "lightblue" : ""))), $m_s_None$()), $m_s_$less$colon$less$().dA), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().hB($m_Lcom_raquo_laminar_api_package$().w.hK(), false, false)).lJ((void 0)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1$1) => {
    sink.ft(_$1$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.i0, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((hasEvents, _$1) => (!(!(!hasEvents)))))))))])));
});
$p.v0 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().w.iW().be($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().w, "Compact View", $m_Lcom_raquo_laminar_modifiers_RenderableText$().cP), $m_Lcom_raquo_laminar_api_package$().w.iV().ho(new $c_Lcom_raquo_airstream_misc_MapSignal(this.eP, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((selected) => ((!(!selected)) ? "lightblue" : ""))), $m_s_None$()), $m_s_$less$colon$less$().dA), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().hB($m_Lcom_raquo_laminar_api_package$().w.hK(), false, false)).lJ((void 0)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.ft(_$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.jl, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((isCompact, _$2) => (!(!(!isCompact)))))))))])));
});
$p.v1 = (function() {
  var $x_6 = $m_Lcom_raquo_laminar_api_package$().w.e3();
  var $x_5 = $m_sr_ScalaRunTime$();
  var $x_4 = $m_Lcom_raquo_laminar_api_package$().w.eV.g9("levelSelector");
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().w.j5().iQ(this.eP);
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().w.lu().be($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().w, "Level", $m_Lcom_raquo_laminar_modifiers_RenderableText$().cP)])));
  var $x_1 = $m_Lcom_raquo_laminar_api_package$().w;
  var b = $m_sci_IndexedSeq$().aO();
  var it = new $c_sci_RangeIterator(1, 1, 6, false);
  while (it.ep) {
    var x0 = it.rb();
    b.az($m_Lcom_raquo_laminar_api_package$().w.iW().be($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().w, ("" + x0), $m_Lcom_raquo_laminar_modifiers_RenderableText$().cP), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().hB($m_Lcom_raquo_laminar_api_package$().w.hK(), false, false)).up(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((x0) => (() => x0))(x0))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
      sink.ft(_$1);
    }))(this.hY.id))), $m_Lcom_raquo_laminar_api_package$().w.iV().ho(new $c_Lcom_raquo_airstream_misc_MapSignal(this.hY.bM, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x0) => ((selected) => (((selected | 0) === x0) ? "lightblue" : "")))(x0)), $m_s_None$()), $m_s_$less$colon$less$().dA)]))));
  }
  return $x_6.be($x_5.B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_4, $x_3, $x_2, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_1, b.aX(), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
});
$p.uZ = (function() {
  var $x_7 = $m_Lcom_raquo_laminar_api_package$().w.e3();
  var $x_6 = $m_sr_ScalaRunTime$();
  var $x_5 = $m_Lcom_raquo_laminar_api_package$().w.eV.g9("adversarySelector");
  var $x_4 = $m_Lcom_raquo_laminar_api_package$().w.j5().iQ(this.eP);
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().w.lu().be($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().w, "Adversary", $m_Lcom_raquo_laminar_modifiers_RenderableText$().cP)])));
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().w;
  var this$11 = $m_Ladversaries_Adversary$().jo;
  var f = ((adversary) => $m_Lcom_raquo_laminar_api_package$().w.iW().be($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().w, adversary.eb, $m_Lcom_raquo_laminar_modifiers_RenderableText$().cP), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().hB($m_Lcom_raquo_laminar_api_package$().w.hK(), false, false)).lJ((void 0)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.ft(_$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.hZ, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((adversary$2) => ((_$3, _$4) => adversary$2.eb))(adversary)))))), $m_Lcom_raquo_laminar_api_package$().w.iV().ho(new $c_Lcom_raquo_airstream_misc_MapSignal(this.hZ.bM, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((adversary$3) => ((selected) => {
    var x = $m_Ladversaries_Adversary$().qZ(selected);
    if (((x === null) ? (adversary$3 === null) : x.n(adversary$3))) {
      return "lightblue";
    } else {
      return "";
    }
  }))(adversary)), $m_s_None$()), $m_s_$less$colon$less$().dA)]))));
  if ((this$11 === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var x0 = this$11.o();
    var h = new $c_sci_$colon$colon(f(x0), $m_sci_Nil$());
    var t = h;
    var rest = this$11.z();
    while ((rest !== $m_sci_Nil$())) {
      var x0$1 = rest.o();
      var nx = new $c_sci_$colon$colon(f(x0$1), $m_sci_Nil$());
      t.aY = nx;
      t = nx;
      rest = rest.z();
    }
    var $x_1 = h;
  }
  return $x_7.be($x_6.B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_5, $x_4, $x_3, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_2, $x_1, $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
});
$p.uY = (function() {
  return $m_Lcom_raquo_laminar_api_package$().w.e3().be($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().w.vu().g8("Click for toggling compact view!"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildrenInserter$().sw(new $c_Lcom_raquo_airstream_misc_MapSignal(this.m7, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var name = x$1.fO;
    var level = (x$1.fP | 0);
    var eventsOn = (!(!x$1.fQ));
    var sel = new $c_LSIAdversaryTool$AdversarySelector($m_Ladversaries_Adversary$().qZ(name), level);
    var escalation = sel.db.gC;
    var setup = $p_LSIAdversaryTool$__findRules__LSIAdversaryTool$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage());
    var afterRavage = $p_LSIAdversaryTool$__findRules__LSIAdversaryTool$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__AfterRavage__Ladversaries_Stage());
    var ravage = $p_LSIAdversaryTool$__findRules__LSIAdversaryTool$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage());
    var afterBuild = $p_LSIAdversaryTool$__findRules__LSIAdversaryTool$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__AfterBuild__Ladversaries_Stage());
    var highImmigration = $p_LSIAdversaryTool$__findRules__LSIAdversaryTool$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage());
    var build = $p_LSIAdversaryTool$__findRules__LSIAdversaryTool$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Build__Ladversaries_Stage());
    var explore = $p_LSIAdversaryTool$__findRules__LSIAdversaryTool$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage()).T(("Stage 2 Escalation: " + escalation));
    var lossCondition = sel.db.gE;
    var ruleChanges = $p_LSIAdversaryTool$__findRules__LSIAdversaryTool$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage());
    var deckOrder = $f_sc_IndexedSeqOps__reverse__O(sel.db.fy).iY(new $c_LSIAdversaryTool$$anon$1(sel, eventsOn));
    var fear = this.sC(eventsOn, $f_sc_LinearSeqOps__apply__I__O(sel.db.gD, (((-1) + sel.cy) | 0)));
    var setupWithDeckNFear = $m_sci_Vector$().bB($m_sr_ScalaRunTime$().B(new ($d_T.r().C)([("Deck Order: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Option$().rh(deckOrder), "", "", "")), ("Fear: " + fear), "Add 1 Disease to land #2 (with the City)", "Add 1 Beasts to the lowest-numbered land with no printed Setup icons"]))).sv(setup);
    return this.e0(this.e0(this.e0(this.e0(this.e0(this.e0(this.e0(this.e0(this.e0($m_sci_Vector$().bB($m_sr_ScalaRunTime$().qY(new ($d_sr_Nothing$.r().C)([]))), setupWithDeckNFear, "Setup", true), $m_s_Option$().rh(lossCondition).m2(), "Loss Condition", false), ruleChanges, "Rule Changes", false), highImmigration, "High Immigration", false), ravage, "Ravage", false), afterRavage, "After Ravage", false), build, "Build", false), afterBuild, "After Build", false), explore, "Explore", false);
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().oF, (void 0)))])));
});
$p.sB = (function(deckOrder) {
  var where3 = $f_T__indexOf__I__I(deckOrder, 51);
  matchResult6: {
    var \u03b41$___1;
    var \u03b41$___2;
    var x17 = $m_sc_StringOps$().rA(deckOrder, where3);
    if ((x17 !== null)) {
      var \u03b41$___1 = x17.bm();
      var \u03b41$___2 = x17.bd();
      break matchResult6;
    }
    throw new $c_s_MatchError(x17);
  }
  var front1$2 = \u03b41$___1;
  var back1$2 = \u03b41$___2;
  var deckWithBeast3 = ((front1$2 + "Beasts-") + back1$2);
  var where2 = $f_T__indexOf__I__I(deckWithBeast3, 50);
  matchResult7: {
    var \u03b42$___1;
    var \u03b42$___2;
    var x20 = $m_sc_StringOps$().rA(deckWithBeast3, where2);
    if ((x20 !== null)) {
      var \u03b42$___1 = x20.bm();
      var \u03b42$___2 = x20.bd();
      break matchResult7;
    }
    throw new $c_s_MatchError(x20);
  }
  var front2$2 = \u03b42$___1;
  var back2$2 = \u03b42$___2;
  return ((front2$2 + "Beasts-") + back2$2);
});
$p.sC = (function(eventsOn, fl) {
  if (eventsOn) {
    var fearList = fl;
  } else {
    matchResult8: {
      var \u03b43$___1;
      var \u03b43$___2;
      var \u03b43$___3;
      if ((fl !== null)) {
        if ((fl.b3(3) === 0)) {
          var \u03b43$___1 = ($f_sc_LinearSeqOps__apply__I__O(fl, 0) | 0);
          var \u03b43$___2 = ($f_sc_LinearSeqOps__apply__I__O(fl, 1) | 0);
          var \u03b43$___3 = ($f_sc_LinearSeqOps__apply__I__O(fl, 2) | 0);
          break matchResult8;
        }
      }
      throw new $c_s_MatchError(fl);
    }
    var fearList = $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([(\u03b43$___1 | 0), ((1 + (\u03b43$___2 | 0)) | 0), (\u03b43$___3 | 0)]))));
  }
  return ((($f_sc_IterableOnceOps__sum__s_math_Numeric__O(fearList, $m_s_math_Numeric$IntIsIntegral$()) + " (") + $f_sc_IterableOnceOps__mkString__T__T__T__T(fearList, "", "/", "")) + ")");
});
$p.e0 = (function(vec, rules, sectionName, hideInCompact) {
  var newSection$lzy1 = new $c_sr_LazyRef();
  var rulesDiv = $m_Lcom_raquo_laminar_api_package$().w.e3().be($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().w.eV.g9("rules"), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().w, rules.N(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s) => $p_LSIAdversaryTool$__injectImages__sci_Vector__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, vec, s)))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
  return ((!$f_sc_SeqOps__isEmpty__Z(rules)) ? vec.T($p_LSIAdversaryTool$__newSection$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, newSection$lzy1, hideInCompact, sectionName, rulesDiv)) : vec);
});
var $d_LSIAdversaryTool$ = new $TypeData().i($c_LSIAdversaryTool$, "SIAdversaryTool$", ({
  de: 1
}));
var $n_LSIAdversaryTool$;
function $m_LSIAdversaryTool$() {
  if ((!$n_LSIAdversaryTool$)) {
    $n_LSIAdversaryTool$ = new $c_LSIAdversaryTool$();
  }
  return $n_LSIAdversaryTool$;
}
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
$p.ug = (function(trys, combinator) {
  var elem = false;
  elem = true;
  var i = 0;
  var len = (trys.length | 0);
  while ((i < len)) {
    if (trys[i].lC()) {
      var ev$6 = false;
      elem = ev$6;
    }
    i = ((1 + i) | 0);
  }
  if (elem) {
    var values = trys.map(((_$3) => _$3.J()));
    return new $c_s_util_Success(combinator.c(values));
  } else {
    var arr = trys.map(((x$1) => ((x$1 instanceof $c_s_util_Failure) ? new $c_s_Some(x$1.dl) : $m_s_None$())));
    return new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError($m_sci_IndexedSeq$().ln($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), arr))));
  }
});
var $d_Lcom_raquo_airstream_combine_CombineObservable$ = new $TypeData().i($c_Lcom_raquo_airstream_combine_CombineObservable$, "com.raquo.airstream.combine.CombineObservable$", ({
  dq: 1
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
$p.qw = (function(this$, s1, c) {
  return $m_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$().sQ(this$, s1, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((a, v1) => c.qx(a, v1))));
});
var $d_Lcom_raquo_airstream_combine_generated_CombinableSignal$ = new $TypeData().i($c_Lcom_raquo_airstream_combine_generated_CombinableSignal$, "com.raquo.airstream.combine.generated.CombinableSignal$", ({
  ds: 1
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
$p.sQ = (function(s1, s2, combinator) {
  return new $c_Lcom_raquo_airstream_combine_CombineSignalN($m_Lcom_raquo_ew_JsArray$().bE($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_airstream_core_Signal.r().C)([s1.hS(), s2.hS()]))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((arr) => combinator.bn(arr[0], arr[1]))));
});
var $d_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$ = new $TypeData().i($c_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$, "com.raquo.airstream.combine.generated.StaticSignalCombineOps$", ({
  dt: 1
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
$p.tM = (function(parent, onTry) {
  return new $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2(parent, onTry, this);
});
var $d_Lcom_raquo_airstream_common_InternalParentObserver$ = new $TypeData().i($c_Lcom_raquo_airstream_common_InternalParentObserver$, "com.raquo.airstream.common.InternalParentObserver$", ({
  dv: 1
}));
var $n_Lcom_raquo_airstream_common_InternalParentObserver$;
function $m_Lcom_raquo_airstream_common_InternalParentObserver$() {
  if ((!$n_Lcom_raquo_airstream_common_InternalParentObserver$)) {
    $n_Lcom_raquo_airstream_common_InternalParentObserver$ = new $c_Lcom_raquo_airstream_common_InternalParentObserver$();
  }
  return $n_Lcom_raquo_airstream_common_InternalParentObserver$;
}
var $d_Lcom_raquo_airstream_core_InternalObserver = new $TypeData().i(1, "com.raquo.airstream.core.InternalObserver", ({
  aD: 1
}));
function $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T($thiz) {
  return (($objectGetClass($thiz).lt() + "@") + $thiz.v());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.e6();
  return ((x === (void 0)) ? $thiz.e2() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().m6(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))), $m_s_PartialFunction$().iq, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.m6 = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.qX = (function(onTry, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTry, handleObserverErrors, this);
});
var $d_Lcom_raquo_airstream_core_Observer$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$, "com.raquo.airstream.core.Observer$", ({
  dA: 1
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
$p.rn = (function(this$, observer) {
  var index = (this$.indexOf(observer) | 0);
  var shouldRemove = (index !== (-1));
  if (shouldRemove) {
    this$.splice(index, 1);
  }
  return shouldRemove;
});
var $d_Lcom_raquo_airstream_core_ObserverList$ = new $TypeData().i($c_Lcom_raquo_airstream_core_ObserverList$, "com.raquo.airstream.core.ObserverList$", ({
  dD: 1
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
  dE: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Protected$() {
  this.rJ = null;
  $n_Lcom_raquo_airstream_core_Protected$ = this;
  this.rJ = new $c_Lcom_raquo_airstream_core_Protected();
}
$p = $c_Lcom_raquo_airstream_core_Protected$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Protected$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Protected$() {
}
$h_Lcom_raquo_airstream_core_Protected$.prototype = $p;
$p.uq = (function(minRank, observables) {
  var elem = 0;
  elem = minRank;
  var i = 0;
  var len = (observables.length | 0);
  while ((i < len)) {
    var observable = observables[i];
    var rank = observable.e9();
    if ((rank > elem)) {
      var ev$2 = rank;
      elem = ev$2;
    }
    i = ((1 + i) | 0);
  }
  return elem;
});
var $d_Lcom_raquo_airstream_core_Protected$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Protected$, "com.raquo.airstream.core.Protected$", ({
  dF: 1
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
  this.fB = 0;
  this.fB = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.rd = (function() {
  if ((this.fB === 2147483647)) {
    this.fB = 1;
  } else {
    this.fB = ((1 + this.fB) | 0);
  }
  return this.fB;
});
var $d_Lcom_raquo_airstream_core_Signal$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Signal$, "com.raquo.airstream.core.Signal$", ({
  dG: 1
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
  this.jz = null;
  this.gO = null;
  this.jA = 0;
  this.jz = code;
  this.gO = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().hP();
  this.jA = ((x === (void 0)) ? 1 : ((1 + x.jA) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().i2 === (-1)) || (this.jA > $m_Lcom_raquo_airstream_core_Transaction$().i2))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().cN(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().i2));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().bG) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().eS.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().kZ(this);
  }
}
$p = $c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
}
$h_Lcom_raquo_airstream_core_Transaction.prototype = $p;
$p.sS = (function(observable) {
  var x = this.gO;
  var x$1 = ((x === (void 0)) ? (void 0) : x.al(observable));
  return ((x$1 === (void 0)) ? false : x$1);
});
$p.tp = (function(observable) {
  var x = this.gO;
  if ((x === (void 0))) {
    var newQueue = new $c_Lcom_raquo_airstream_util_JsPriorityQueue(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((observable$1) => observable$1.ju)));
    this.gO = newQueue;
    var $x_1 = newQueue;
  } else {
    var $x_1 = x;
  }
  $x_1.to(observable);
});
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction, "com.raquo.airstream.core.Transaction", ({
  dI: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.i2 = 0;
  this.mx = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.i2 = 1000;
  this.mx = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."));
  }));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $p;
$p.qu = (function(transaction) {
  try {
    transaction.jz.c(transaction);
    var x = transaction.gO;
    if ((x !== (void 0))) {
      while (((x.ef.length | 0) !== 0)) {
        if (((x.ef.length | 0) === 0)) {
          throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to dequeue an empty JsPriorityQueue");
        }
        $f_Lcom_raquo_airstream_combine_CombineObservable__syncFire__Lcom_raquo_airstream_core_Transaction__V(x.ef.shift(), transaction);
      }
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cN(e$2);
  }
});
var $d_Lcom_raquo_airstream_core_Transaction$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$, "com.raquo.airstream.core.Transaction$", ({
  dJ: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$;
function $m_Lcom_raquo_airstream_core_Transaction$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$)) {
    $n_Lcom_raquo_airstream_core_Transaction$ = new $c_Lcom_raquo_airstream_core_Transaction$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$;
}
function $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V($thiz) {
  if ((($thiz.i3.length | 0) === 0)) {
    if ((($thiz.eS.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
        while ((($thiz.eS.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().kZ($thiz.eS.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
      while ((($thiz.i3.length | 0) > 0)) {
        var callback = $thiz.i3.shift();
        try {
          callback.c(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().cN(e$2);
        }
      }
      while ((($thiz.eS.length | 0) > 0)) {
        var _trx = $thiz.eS.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().kZ(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.bG = false;
  this.i3 = null;
  this.eS = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.bG = false;
  this.i3 = $m_Lcom_raquo_ew_JsArray$().bE($m_sr_ScalaRunTime$().B(new ($d_F1.r().C)([])));
  this.eS = $m_Lcom_raquo_ew_JsArray$().bE($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$onStart$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$onStart$() {
}
$h_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction$onStart$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$onStart$, "com.raquo.airstream.core.Transaction$onStart$", ({
  dK: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$onStart$;
function $m_Lcom_raquo_airstream_core_Transaction$onStart$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$onStart$)) {
    $n_Lcom_raquo_airstream_core_Transaction$onStart$ = new $c_Lcom_raquo_airstream_core_Transaction$onStart$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$onStart$;
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, transaction) {
  return $thiz.eT.get(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.i4.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.i4.shift();
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().bE($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.eT.set(parent, newChildren);
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
      (!(!$thiz.eT.delete(parent)));
    }
    return nextChild;
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.i4 = null;
  this.eT = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.i4 = $m_Lcom_raquo_ew_JsArray$().bE($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.eT = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.kZ = (function(newTransaction) {
  var x = this.hP();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().qu(newTransaction);
    this.tk(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.tk = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.hP();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().k(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.uP(transaction$tailLocal1);
    transaction$tailLocal1.jz = $m_Lcom_raquo_airstream_core_Transaction$().mx;
    var maybeNextTransaction = this.hP();
    if ($m_sr_BoxesRunTime$().k(maybeNextTransaction, (void 0))) {
      if (((this.eT.size | 0) > 0)) {
        var numChildren = new $c_sr_IntRef(0);
        this.eT.forEach(((numChildren) => ((transactions, _$4) => {
          var ev$12 = ((numChildren.aV + (transactions.length | 0)) | 0);
          numChildren.aV = ev$12;
        }))(numChildren));
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.aV) + " children for ") + (this.eT.size | 0)) + " transactions remain. This is a bug in Airstream."));
      } else {
        return (void 0);
      }
    } else {
      $m_Lcom_raquo_airstream_core_Transaction$().qu(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.uP = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().k(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.hP();
      if ((!$m_sr_BoxesRunTime$().k(maybeParentTransaction, (void 0)))) {
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
$p.hP = (function() {
  return this.i4[0];
});
var $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$, "com.raquo.airstream.core.Transaction$pendingTransactions$", ({
  dL: 1
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
  this.mB = null;
  this.mz = null;
  this.mA = null;
  this.mB = onWillStart;
  this.mz = onStart;
  this.mA = onStop;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$Config;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$Config() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = $p;
var $d_Lcom_raquo_airstream_custom_CustomSource$Config = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config, "com.raquo.airstream.custom.CustomSource$Config", ({
  dO: 1
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
$p.sA = (function(onStart, onStop) {
  return new $c_Lcom_raquo_airstream_custom_CustomSource$Config(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => (void 0))), onStart, onStop);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config$, "com.raquo.airstream.custom.CustomSource$Config$", ({
  dP: 1
}));
var $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
function $m_Lcom_raquo_airstream_custom_CustomSource$Config$() {
  if ((!$n_Lcom_raquo_airstream_custom_CustomSource$Config$)) {
    $n_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $c_Lcom_raquo_airstream_custom_CustomSource$Config$();
  }
  return $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscription) {
  var index = ($thiz.ed.indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.ed.splice(index, 1);
    if ((!$thiz.cg.b())) {
      subscription.rg();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.i8.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.i8.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.n6 = null;
  this.ed = null;
  this.fC = false;
  this.i8 = null;
  this.cg = null;
  this.fD = 0;
  this.n6 = onAccessAfterKilled;
  this.ed = $m_Lcom_raquo_ew_JsArray$().bE($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.fC = true;
  this.i8 = $m_Lcom_raquo_ew_JsArray$().bE($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.cg = $m_s_None$();
  this.fD = 0;
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $p;
$p.q3 = (function() {
  if ((!(!this.cg.b()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.n6);
      this.cg = new $c_s_Some(newOwner);
      this.fC = false;
      this.fD = 0;
      var i = 0;
      var originalNumSubs = (this.ed.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.fD) | 0);
        this.ed[ix].rf(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.fC = true;
      this.fD = 0;
    });
    $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var when = true;
    if ((this$4.bG || (!when))) {
      f();
    } else {
      this$4.bG = true;
      try {
        f();
      } finally {
        this$4.bG = false;
        $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$4);
      }
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"));
  }
});
$p.tf = (function() {
  if ((!this.cg.b())) {
    this.fC = false;
    var arr = this.ed;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].rg();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.cg;
    if ((!this$4.b())) {
      this$4.J().lG();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.fC = true;
    this.cg = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.sr = (function(subscription, prepend) {
  if (prepend) {
    this.fD = ((1 + this.fD) | 0);
    this.ed.unshift(subscription);
  } else {
    this.ed.push(subscription);
  }
  var this$1 = this.cg;
  if ((!this$1.b())) {
    var x0 = this$1.J();
    subscription.rf(x0);
  }
});
$p.uW = (function(subscription) {
  if (this.fC) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.i8.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  dU: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.i9 = null;
  this.n7 = null;
  this.ia = null;
  this.i9 = dynamicOwner;
  this.n7 = activate;
  this.ia = $m_s_None$();
  dynamicOwner.sr(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.j8 = (function() {
  this.i9.uW(this);
});
$p.rf = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.ia = this.n7.c(owner);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bG || (!when))) {
    f();
  } else {
    this$2.bG = true;
    try {
      f();
    } finally {
      this$2.bG = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
$p.rg = (function() {
  var this$1 = this.ia;
  if ((!this$1.b())) {
    this$1.J().j8();
    this.ia = $m_s_None$();
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription, "com.raquo.airstream.ownership.DynamicSubscription", ({
  dV: 1
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
$p.hV = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => new $c_s_Some(activate.c(owner)))), prepend);
});
$p.rC = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => {
    activate.c(owner);
    return $m_s_None$();
  })), prepend);
});
$p.vl = (function(dynamicOwner, observable, onNext) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().hV(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(observable, onNext, owner))), false);
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription$, "com.raquo.airstream.ownership.DynamicSubscription$", ({
  dW: 1
}));
var $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
function $m_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  if ((!$n_Lcom_raquo_airstream_ownership_DynamicSubscription$)) {
    $n_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $c_Lcom_raquo_airstream_ownership_DynamicSubscription$();
  }
  return $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
}
function $f_Lcom_raquo_airstream_ownership_Owner__$init$__V($thiz) {
  $thiz.la($m_Lcom_raquo_ew_JsArray$().bE($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.fv();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.fv().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.fv().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.fv().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.fv().push(subscription);
}
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.jJ)) {
    $thiz.nb.L();
    $thiz.jJ = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.nc = null;
  this.nb = null;
  this.jJ = false;
  this.nc = owner;
  this.nb = cleanup;
  this.jJ = false;
  owner.lQ(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.j8 = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this.nc, this);
});
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  dZ: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.nd = null;
  this.ne = null;
  this.ee = null;
  this.eU = false;
  this.nd = activate;
  this.ne = deactivate;
  this.ee = $m_s_None$();
  this.eU = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.u9 = (function() {
  var this$1 = this.ee;
  return ((!this$1.b()) && (!this$1.J().i9.cg.b()));
});
$p.vf = (function(nextOwner) {
  if (this.eU) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.ee;
  if ((!this$1.b())) {
    var x0 = this$1.J();
    var x$2 = x0.i9;
    var $x_1 = (nextOwner === x$2);
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.u9() && (!nextOwner.cg.b()))) {
      this.eU = true;
    }
    var this$3 = this.ee;
    if ((!this$3.b())) {
      this$3.J().j8();
      this.ee = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().hV(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((parentOwner) => {
      if ((!this.eU)) {
        this.nd.L();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        if ((!this.eU)) {
          this.ne.L();
        }
      })));
    })), false);
    this.ee = new $c_s_Some(newPilotSubscription);
    this.eU = false;
  }
});
$p.sN = (function() {
  if (this.eU) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.ee;
  if ((!this$1.b())) {
    this$1.J().j8();
  }
  this.ee = $m_s_None$();
});
var $d_Lcom_raquo_airstream_ownership_TransferableSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_TransferableSubscription, "com.raquo.airstream.ownership.TransferableSubscription", ({
  e0: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_util_JsPriorityQueue(getRank) {
  this.jN = null;
  this.ef = null;
  this.jN = getRank;
  this.ef = $m_Lcom_raquo_ew_JsArray$().bE($m_sr_ScalaRunTime$().qY(new $ac_O([])));
}
$p = $c_Lcom_raquo_airstream_util_JsPriorityQueue.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_util_JsPriorityQueue;
/** @constructor */
function $h_Lcom_raquo_airstream_util_JsPriorityQueue() {
}
$h_Lcom_raquo_airstream_util_JsPriorityQueue.prototype = $p;
$p.to = (function(item) {
  var itemRank = (this.jN.c(item) | 0);
  var insertAtIndex = 0;
  var foundHigherRank = false;
  while (((insertAtIndex < (this.ef.length | 0)) && (!foundHigherRank))) {
    if (((this.jN.c(this.ef[insertAtIndex]) | 0) > itemRank)) {
      foundHigherRank = true;
    } else {
      insertAtIndex = ((1 + insertAtIndex) | 0);
    }
  }
  this.ef.splice(insertAtIndex, 0, item);
});
$p.al = (function(item) {
  return ((this.ef.indexOf(item) | 0) !== (-1));
});
var $d_Lcom_raquo_airstream_util_JsPriorityQueue = new $TypeData().i($c_Lcom_raquo_airstream_util_JsPriorityQueue, "com.raquo.airstream.util.JsPriorityQueue", ({
  e7: 1
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
$p.qf = (function(eventTarget, eventKey, useCapture) {
  return new $c_Lcom_raquo_airstream_custom_CustomStreamSource(new $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(((fireValue, _$1, _$2, _$3) => {
    var eventHandler = $m_sjs_js_Any$().qV(fireValue);
    return $m_Lcom_raquo_airstream_custom_CustomSource$Config$().sA(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.addEventListener(eventKey, eventHandler, useCapture);
    })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.removeEventListener(eventKey, eventHandler, useCapture);
    })));
  })));
});
var $d_Lcom_raquo_airstream_web_DomEventStream$ = new $TypeData().i($c_Lcom_raquo_airstream_web_DomEventStream$, "com.raquo.airstream.web.DomEventStream$", ({
  e8: 1
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
  this.nq = null;
  this.np = null;
  this.nr = null;
  this.nq = maybeStorage;
  this.np = key;
  this.nr = syncOwner;
}
$p = $c_Lcom_raquo_airstream_web_WebStorageBuilder.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_web_WebStorageBuilder;
/** @constructor */
function $h_Lcom_raquo_airstream_web_WebStorageBuilder() {
}
$h_Lcom_raquo_airstream_web_WebStorageBuilder.prototype = $p;
$p.vs = (function(default$1) {
  return this.m5(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x) => x)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => new $c_s_util_Success(_$1))), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => new $c_s_util_Success(default$1.L()))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$2, _$3) => (_$2 === _$3))));
});
$p.qr = (function(default$1) {
  return this.m5(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => ("" + (!(!_$4))))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((str) => {
    try {
      return new $c_s_util_Success($m_sc_StringOps$().vv(str, str));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      if ($m_s_util_control_NonFatal$().cG(e$2)) {
        return new $c_s_util_Failure(e$2);
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
    }
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => new $c_s_util_Success(default$1.L()))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$5, _$6) => ((!(!_$5)) === (!(!_$6))))));
});
$p.u7 = (function(default$1) {
  return this.m5(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$7) => ("" + (_$7 | 0)))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((str) => {
    try {
      return new $c_s_util_Success($m_jl_Integer$().lS(str, 10));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      if ($m_s_util_control_NonFatal$().cG(e$2)) {
        return new $c_s_util_Failure(e$2);
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
    }
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => new $c_s_util_Success(default$1.L()))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$8, _$9) => ((_$8 | 0) === (_$9 | 0)))));
});
$p.m5 = (function(encode, decode, default$1, syncDistinctByFn) {
  var storageVar = new $c_Lcom_raquo_airstream_web_WebStorageVar(this.nq, this.np, encode, decode, default$1, syncDistinctByFn);
  var this$1 = this.nr;
  if ((!this$1.b())) {
    storageVar.vp(this$1.J());
  }
  return storageVar;
});
var $d_Lcom_raquo_airstream_web_WebStorageBuilder = new $TypeData().i($c_Lcom_raquo_airstream_web_WebStorageBuilder, "com.raquo.airstream.web.WebStorageBuilder", ({
  e9: 1
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
$p.j9 = (function(key, syncOwner) {
  return new $c_Lcom_raquo_airstream_web_WebStorageBuilder(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    try {
      var $x_1 = new $c_s_util_Success(window.localStorage);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      matchEnd8: {
        var $x_1;
        if ($m_s_util_control_NonFatal$().cG(e$2)) {
          var $x_1 = new $c_s_util_Failure(e$2);
          break matchEnd8;
        }
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
      }
    }
    return $x_1.rD();
  })), key, syncOwner);
});
var $d_Lcom_raquo_airstream_web_WebStorageVar$ = new $TypeData().i($c_Lcom_raquo_airstream_web_WebStorageVar$, "com.raquo.airstream.web.WebStorageVar$", ({
  eb: 1
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
$p.bE = (function(items) {
  return [...$m_sjsr_Compat$().vx(items)];
});
var $d_Lcom_raquo_ew_JsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$, "com.raquo.ew.JsArray$", ({
  ed: 1
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
$p.u1 = (function(this$, item, fromIndex) {
  return ((this$.indexOf(item, fromIndex) | 0) !== (-1));
});
$p.tB = (function(this$, cb) {
  var i = 0;
  var len = (this$.length | 0);
  while ((i < len)) {
    cb(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_Lcom_raquo_ew_JsArray$RichJsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$RichJsArray$, "com.raquo.ew.JsArray$RichJsArray$", ({
  ee: 1
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
  this.ny = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.td($m_Lcom_raquo_laminar_api_package$().w.vm().vn());
  this.ny = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.st = (function(parent, child) {
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
$p.uT = (function(parent, child) {
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
$p.u6 = (function(parent, newChild, referenceChild) {
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
$p.u5 = (function(parent, newChild, referenceChild) {
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
$p.uc = (function(node, ancestor) {
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
    if ($m_sr_BoxesRunTime$().k(ancestor, effectiveParentNode)) {
      return true;
    }
    node$tailLocal1 = effectiveParentNode;
  }
});
$p.sg = (function(element, listener) {
  element.addEventListener(listener.fI.eW.gU, listener.k2, listener.k3);
});
$p.uU = (function(element, listener) {
  element.removeEventListener(listener.fI.eW.gU, listener.k2, listener.k3);
});
$p.tc = (function(tag) {
  return document.createElement(tag.ka);
});
$p.tO = (function(element, attr) {
  var x = this.tP(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.jW.ld(x));
});
$p.tP = (function(element, attr) {
  var domValue = element.bC.getAttributeNS(null, attr.gV);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.rw = (function(element, attr, value) {
  this.vd(element, attr, attr.jW.hC(value));
});
$p.vd = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.uV(element, attr);
  } else {
    element.bC.setAttribute(attr.gV, domValue);
  }
});
$p.uV = (function(element, attr) {
  element.bC.removeAttribute(attr.gV);
});
$p.tQ = (function(element, prop) {
  return element.bC[prop.dx];
});
$p.rx = (function(element, prop, value) {
  this.ry(element, prop, prop.jX.hC(value));
});
$p.ry = (function(element, prop, value) {
  element.bC[prop.dx] = value;
});
$p.ve = (function(element, styleProp, value) {
  var ref = element.bC;
  var styleCssName = styleProp.fG;
  var prefixes = styleProp.fH;
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
$p.vc = (function(element, style, value) {
  var ref = element.bC;
  var styleCssName = style.fG;
  var prefixes = style.fH;
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
$p.td = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.oM);
});
$p.tT = (function(element, attr) {
  var x = this.tU(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.jY.ld(x));
});
$p.tU = (function(element, attr) {
  var $x_2 = element.lT();
  var this$2 = attr.ik;
  var $x_1 = $x_2.getAttributeNS((this$2.b() ? null : this$2.J()), attr.jZ);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.vh = (function(element, attr, value) {
  this.vi(element, attr, attr.jY.hC(value));
});
$p.vi = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.uX(element, attr);
  } else {
    var this$1 = attr.ik;
    if (this$1.b()) {
      element.lT().setAttribute(attr.ij, domValue);
    } else {
      var x0 = this$1.J();
      element.lT().setAttributeNS(x0, attr.ij, domValue);
    }
  }
});
$p.uX = (function(element, attr) {
  var $x_1 = element.lT();
  var this$2 = attr.ik;
  $x_1.removeAttributeNS((this$2.b() ? null : this$2.J()), attr.jZ);
});
$p.tb = (function(text) {
  return document.createComment(text);
});
$p.te = (function(text) {
  return document.createTextNode(text);
});
$p.ua = (function(element) {
  return $m_sc_StringOps$().sR(element.tagName, 45);
});
$p.th = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.qC(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.qC = (function(node) {
  if ((!(!(node instanceof HTMLElement)))) {
    var id = node.id;
    if ((id !== "")) {
      var suffixStr = ("#" + id);
    } else {
      var classes = node.className;
      var suffixStr = ((classes !== "") ? ("." + classes.replace(this.ny, ".")) : "");
    }
    return (node.tagName.toLowerCase() + suffixStr);
  } else {
    return node.nodeName;
  }
});
$p.tg = (function(node) {
  return ((!(!(node instanceof Element))) ? node.outerHTML : ((!(!(node instanceof Text))) ? (("Text(" + node.textContent) + ")") : ((!(!(node instanceof Comment))) ? (("Comment(" + node.textContent) + ")") : ((node === null) ? "<null>" : (("OtherNode(" + $dp_toString__T(node)) + ")")))));
});
var $d_Lcom_raquo_laminar_DomApi$ = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$, "com.raquo.laminar.DomApi$", ({
  ef: 1
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
  this.jR = null;
  this.nz = null;
  this.jQ = null;
  this.jR = seq;
  this.nz = scalaArray;
  this.jQ = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.U = (function(f) {
  if ((this.jR !== null)) {
    this.jR.U(f);
  } else if ((this.jQ !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().tB(this.jQ, $m_sjs_js_Any$().qV(f));
  } else {
    $m_sc_ArrayOps$().tC(this.nz, f);
  }
});
var $d_Lcom_raquo_laminar_Seq = new $TypeData().i($c_Lcom_raquo_laminar_Seq, "com.raquo.laminar.Seq", ({
  eg: 1
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
  eh: 1
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
  $thiz.rL = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    _$1.ow.bC.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.cQ.cg.b()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((c) => {
      if (ignoreNextActivation.iF) {
        var ev$5 = false;
        ignoreNextActivation.iF = ev$5;
      } else {
        fn.c(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().rC(element.cQ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((owner) => {
      activate.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element$2, owner));
    }))(element)), false);
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.fE = null;
  this.jS = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.fE = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  this.jS = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
}
$p = $c_Lcom_raquo_laminar_codecs_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$() {
}
$h_Lcom_raquo_laminar_codecs_package$.prototype = $p;
var $d_Lcom_raquo_laminar_codecs_package$ = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$, "com.raquo.laminar.codecs.package$", ({
  er: 1
}));
var $n_Lcom_raquo_laminar_codecs_package$;
function $m_Lcom_raquo_laminar_codecs_package$() {
  if ((!$n_Lcom_raquo_laminar_codecs_package$)) {
    $n_Lcom_raquo_laminar_codecs_package$ = new $c_Lcom_raquo_laminar_codecs_package$();
  }
  return $n_Lcom_raquo_laminar_codecs_package$;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V($thiz) {
  $thiz.nN = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
  $thiz.eV = $thiz.nN;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().fE);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.gV, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().tO(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().rw(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.rK = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().fE, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.ij, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().tT(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().vh(el$2, attr, value);
  })), separator);
}
/** @constructor */
function $c_Lcom_raquo_laminar_inputs_InputController$() {
  this.op = null;
  $n_Lcom_raquo_laminar_inputs_InputController$ = this;
  $m_Lcom_raquo_laminar_api_package$().w.rI();
  $m_Lcom_raquo_ew_JsArray$().bE($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().w.lO()])));
  $m_Lcom_raquo_laminar_api_package$().w.rI();
  $m_Lcom_raquo_ew_JsArray$().bE($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().w.lO(), $m_Lcom_raquo_laminar_api_package$().w.uJ()])));
  $m_Lcom_raquo_laminar_api_package$().w.sL();
  $m_Lcom_raquo_ew_JsArray$().bE($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().w.lO(), $m_Lcom_raquo_laminar_api_package$().w.hK()])));
  this.op = $m_Lcom_raquo_ew_JsArray$().bE($m_sr_ScalaRunTime$().B(new ($d_T.r().C)(["value", "checked"])));
}
$p = $c_Lcom_raquo_laminar_inputs_InputController$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inputs_InputController$;
/** @constructor */
function $h_Lcom_raquo_laminar_inputs_InputController$() {
}
$h_Lcom_raquo_laminar_inputs_InputController$.prototype = $p;
var $d_Lcom_raquo_laminar_inputs_InputController$ = new $TypeData().i($c_Lcom_raquo_laminar_inputs_InputController$, "com.raquo.laminar.inputs.InputController$", ({
  eJ: 1
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
  var prevChildRef = new $c_sr_ObjectRef(sentinelNode.aP().nextSibling);
  var lastIndexChild = new $c_sr_ObjectRef(sentinelNode);
  nextChildren.U(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextChild) => {
    if ((currentChildrenCount.aV <= index.aV)) {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().lx(parentNode, nextChild, lastIndexChild.K, hooks);
      var ev$2 = nextChild.aP();
      prevChildRef.K = ev$2;
      ev$2 = null;
      var ev$3 = ((1 + currentChildrenCount.aV) | 0);
      currentChildrenCount.aV = ev$3;
    } else if ((!$m_sr_BoxesRunTime$().k(nextChild.aP(), prevChildRef.K))) {
      if ((!(!(!prevChildren.has(nextChild.aP()))))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().lx(parentNode, nextChild, lastIndexChild.K, hooks);
        var ev$4 = nextChild.aP();
        prevChildRef.K = ev$4;
        ev$4 = null;
        var ev$5 = ((1 + currentChildrenCount.aV) | 0);
        currentChildrenCount.aV = ev$5;
      } else {
        while (((!$m_sr_BoxesRunTime$().k(nextChild.aP(), prevChildRef.K)) && (!$p_Lcom_raquo_laminar_inserters_ChildrenInserter$__containsRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Z($thiz, nextChildrenMap, prevChildRef.K)))) {
          var nextPrevChildRef = prevChildRef.K.nextSibling;
          $m_Lcom_raquo_laminar_nodes_ParentNode$().rm(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.K));
          var ev$6 = nextPrevChildRef;
          prevChildRef.K = ev$6;
          ev$6 = null;
          var ev$7 = (((-1) + currentChildrenCount.aV) | 0);
          currentChildrenCount.aV = ev$7;
        }
        if ((!$m_sr_BoxesRunTime$().k(nextChild.aP(), prevChildRef.K))) {
          $m_Lcom_raquo_laminar_nodes_ParentNode$().lx(parentNode, nextChild, lastIndexChild.K, hooks);
          var ev$8 = nextChild.aP();
          prevChildRef.K = ev$8;
          ev$8 = null;
        }
      }
    }
    if ((prevChildRef.K.nextSibling === null)) {
      var ev$9 = ((1 + index.aV) | 0);
      currentChildrenCount.aV = ev$9;
    } else {
      var ev$10 = prevChildRef.K.nextSibling;
      prevChildRef.K = ev$10;
      ev$10 = null;
    }
    var ev$11 = nextChild;
    lastIndexChild.K = ev$11;
    ev$11 = null;
    var ev$12 = ((1 + index.aV) | 0);
    index.aV = ev$12;
  })));
  while ((index.aV < currentChildrenCount.aV)) {
    var nextPrevChildRef$1 = prevChildRef.K.nextSibling;
    $m_Lcom_raquo_laminar_nodes_ParentNode$().rm(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.K));
    var ev$13 = nextPrevChildRef$1;
    prevChildRef.K = ev$13;
    ev$13 = null;
    var ev$14 = (((-1) + currentChildrenCount.aV) | 0);
    currentChildrenCount.aV = ev$14;
  }
  return currentChildrenCount.aV;
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
$p.sw = (function(childrenSource, renderableSeq, renderableNode, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((ctx, owner, hooks) => {
    if ((!ctx.gR)) {
      ctx.qP();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childrenSource, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx$2) => ((components) => {
      this.vo(($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(components, null, null)), ctx$2, hooks);
    }))(ctx)), owner);
  })), initialHooks);
});
$p.vo = (function(newChildren, ctx, hooks) {
  if ((!ctx.gR)) {
    ctx.qP();
  }
  var newChildrenMap = $m_Lcom_raquo_laminar_inserters_InsertContext$().uH(newChildren);
  ctx.gP = $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__updateChildren__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_Seq__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__I__O__I(this, ctx.fF, newChildren, newChildrenMap, ctx.ih, ctx.gQ, ctx.gP, hooks);
  ctx.fF = newChildrenMap;
});
var $d_Lcom_raquo_laminar_inserters_ChildrenInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildrenInserter$, "com.raquo.laminar.inserters.ChildrenInserter$", ({
  eK: 1
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
  this.ih = null;
  this.gQ = null;
  this.gR = false;
  this.gP = 0;
  this.fF = null;
  this.ih = parentNode;
  this.gQ = sentinelNode;
  this.gR = strictMode;
  this.gP = extraNodeCount;
  this.fF = extraNodesMap;
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext.prototype = $p;
$p.qP = (function() {
  if ((this.gR || (this.gP !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().tg(this.ih.bC)));
  }
  if ((this.fF === null)) {
    this.fF = new Map();
  }
  if ((!(!(!(this.gQ.aP() instanceof Comment))))) {
    var contentNode = this.gQ;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().u6(this.ih.bC, newSentinelNode.k4, contentNode.aP());
    this.gQ = newSentinelNode;
    this.gP = 1;
    this.fF.set(contentNode.aP(), contentNode);
  }
  this.gR = true;
});
var $d_Lcom_raquo_laminar_inserters_InsertContext = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext, "com.raquo.laminar.inserters.InsertContext", ({
  eN: 1
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
$p.v4 = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gd(parentNode, sentinelNode, hooks);
  return this.vC(parentNode, sentinelNode, strictMode);
});
$p.vC = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, 0, (strictMode ? new Map() : null));
});
$p.uH = (function(nodes) {
  var acc = new Map();
  nodes.U(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((node) => {
    acc.set(node.aP(), node);
  })));
  return acc;
});
var $d_Lcom_raquo_laminar_inserters_InsertContext$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext$, "com.raquo.laminar.inserters.InsertContext$", ({
  eO: 1
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
$p.re = (function(items, separator) {
  return ((items === "") ? $m_sci_Nil$() : $m_sci_Nil$().y($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), items.split(separator).filter(((_$1) => (_$1 !== ""))))));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$, "com.raquo.laminar.keys.CompositeKey$", ({
  eR: 1
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
  this.eW = null;
  this.gT = false;
  this.ii = false;
  this.gS = null;
  this.eW = eventProp;
  this.gT = shouldUseCapture;
  this.ii = shouldBePassive;
  this.gS = processor;
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $p;
$p.up = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.gS.c(ev);
    return (this$2.b() ? $m_s_None$() : new $c_s_Some((this$2.J(), value.L())));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.eW, this.gT, this.ii, newProcessor);
});
$p.lJ = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.gS.c(ev);
    return (this$2.b() ? $m_s_None$() : new $c_s_Some((this$2.J(), value)));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.eW, this.gT, this.ii, newProcessor);
});
var $d_Lcom_raquo_laminar_keys_EventProcessor = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor, "com.raquo.laminar.keys.EventProcessor", ({
  eV: 1
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
$p.hB = (function(eventProp, shouldUseCapture, shouldBePassive) {
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$14) => new $c_s_Some(_$14))));
});
var $d_Lcom_raquo_laminar_keys_EventProcessor$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor$, "com.raquo.laminar.keys.EventProcessor$", ({
  eW: 1
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
  this.rN = null;
  this.rO = null;
  this.rP = null;
  this.rQ = null;
  this.rN = "http://www.w3.org/2000/svg";
  this.rO = "http://www.w3.org/1999/xlink";
  this.rP = "http://www.w3.org/XML/1998/namespace";
  this.rQ = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.uu = (function(namespace) {
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
  f0: 1
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
  this.ow = null;
  this.k0 = null;
  this.ow = thisNode;
  this.k0 = owner;
}
$p = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
}
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $p;
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().i($c_Lcom_raquo_laminar_lifecycle_MountContext, "com.raquo.laminar.lifecycle.MountContext", ({
  f1: 1
}));
var $d_Lcom_raquo_laminar_modifiers_Modifier = new $TypeData().i(1, "com.raquo.laminar.modifiers.Modifier", ({
  Z: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$() {
  this.rR = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.rR = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_Modifier$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$, "com.raquo.laminar.modifiers.Modifier$", ({
  f6: 1
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
  this.oF = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  this.oF = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$, "com.raquo.laminar.modifiers.RenderableNode$", ({
  fa: 1
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
  this.cP = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableText$ = this;
  this.cP = new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x) => x)), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => ("" + (_$1 | 0)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => ("" + (+_$2)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => ("" + (!(!_$3))))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => _$4.vt())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableText$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$, "com.raquo.laminar.modifiers.RenderableText$", ({
  ff: 1
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
$p.gd = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.hX(nextParent);
  if ((hooks !== (void 0))) {
    hooks.uL(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().st(parent.aP(), child.aP());
  if (appended) {
    child.hR(nextParent);
  }
  return appended;
});
$p.rm = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().k(child.aP().parentNode, parent.aP())) {
    child.hX($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().uT(parent.aP(), child.aP());
    child.hR($m_s_None$());
  }
  return removed;
});
$p.lx = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.hX(nextParent);
  if ((hooks !== (void 0))) {
    hooks.uL(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().u5(parent.aP(), newChild.aP(), referenceChild.aP());
  newChild.hR(nextParent);
  return inserted;
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ParentNode$, "com.raquo.laminar.nodes.ParentNode$", ({
  fi: 1
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
$p.vB = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().hV(element.cQ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$, "com.raquo.laminar.nodes.ReactiveElement$", ({
  fk: 1
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
  fo: 1
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
  this.rS = false;
  this.gX = null;
  this.fJ = null;
  this.ke = null;
  this.kd = false;
  this.oN = 0;
  this.oO = 0;
  this.rT = null;
  $n_jl_FloatingPointBits$ = this;
  this.rS = true;
  this.gX = new ArrayBuffer(8);
  this.fJ = new Int32Array(this.gX, 0, 2);
  new Float32Array(this.gX, 0, 2);
  this.ke = new Float64Array(this.gX, 0, 1);
  this.fJ[0] = 16909060;
  this.kd = ((new Int8Array(this.gX, 0, 8)[0] | 0) === 1);
  this.oN = (this.kd ? 0 : 1);
  this.oO = (this.kd ? 1 : 0);
  this.rT = null;
}
$p = $c_jl_FloatingPointBits$.prototype = new $h_O();
$p.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
}
$h_jl_FloatingPointBits$.prototype = $p;
$p.lN = (function(value) {
  var iv = ((value | 0.0) | 0);
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv;
  } else {
    this.ke[0] = value;
    return ((this.fJ[0] | 0) ^ (this.fJ[1] | 0));
  }
});
$p.tl = (function(value) {
  this.ke[0] = value;
  var value$1 = (this.fJ[this.oN] | 0);
  return new $c_RTLong((this.fJ[this.oO] | 0), value$1);
});
var $d_jl_FloatingPointBits$ = new $TypeData().i($c_jl_FloatingPointBits$, "java.lang.FloatingPointBits$", ({
  fD: 1
}));
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$();
  }
  return $n_jl_FloatingPointBits$;
}
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().d8("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
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
  var PatBC = $m_jl_StackTrace$StringRE$().d8("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().d8("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().d8("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().d8("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().d8("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
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
  if ((!(!$m_jl_Utils$Cache$().kj.call(dict, encodedName)))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = dict$1[encodedName];
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
  }
  var this$3 = base.split("_").join(".");
  return this$3.split("\uff3f").join("_");
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.cz) << 24) >> 24) === 0)) {
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
    $thiz.kg = dict;
    $thiz.cz = (((1 | $thiz.cz) << 24) >> 24);
  }
  return $thiz.kg;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.cz) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.kg);
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.cz) << 24) >> 24) === 0)) {
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
    $thiz.kh = dict;
    $thiz.cz = (((2 | $thiz.cz) << 24) >> 24);
  }
  return $thiz.kh;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.cz) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.kh);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.cz) << 24) >> 24) === 0)) {
    $thiz.kf = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.cz = (((4 | $thiz.cz) << 24) >> 24);
  }
  return $thiz.kf;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.cz) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.kf);
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
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().d8("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().ce("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().ce("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().ce("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().ce("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().ce("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().ce("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().ce("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().ce("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().ce("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().ce("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().ce("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().ce("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().ce("Line (\\d+).*script (?:in )?(\\S+)", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().ce("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().d8("^(.*)@(.+):(\\d+)$");
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
  var lineRE = $m_jl_StackTrace$StringRE$().d8("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
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
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().d8("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().d8("<anonymous function>"), "{anonymous}");
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
  this.kg = null;
  this.kh = null;
  this.kf = null;
  this.cz = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.tv = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  fM: 1
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
$p.d8 = (function(this$) {
  return new RegExp(this$);
});
$p.ce = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().i($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  fN: 1
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
  this.ki = null;
  this.oP = null;
  $n_jl_System$SystemProperties$ = this;
  this.ki = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.oP = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.ls = (function(key, default$1) {
  if ((this.ki !== null)) {
    var dict = this.ki;
    return ((!(!$m_jl_Utils$Cache$().kj.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.oP.ls(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  fS: 1
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
  this.kj = null;
  $n_jl_Utils$Cache$ = this;
  this.kj = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  fV: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bV)));
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  bV: 1
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
$p.bU = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? array.a.length : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  fX: 1
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
$p.sG = (function(a, key) {
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
$p.qK = (function(a, b) {
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
    var lo = t.q;
    var hi = t.t;
    var i$2 = i;
    var t$1 = b.a[i$2];
    var lo$1 = t$1.q;
    var hi$1 = t$1.t;
    if ((!((lo === lo$1) && (hi === hi$1)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.j1 = (function(a, b) {
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
$p.qL = (function(a, b) {
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
$p.qH = (function(a, b) {
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
$p.qG = (function(a, b) {
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
$p.qM = (function(a, b) {
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
$p.qI = (function(a, b) {
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
$p.qJ = (function(a, b) {
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
$p.tw = (function(a, value) {
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
  var ret = $objectGetClass(original).D.Q().D.U(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.ta = (function(original, newLength, newType) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = newType.D.Q().D.U(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.t2 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_B(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.t8 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_S(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.t6 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_I(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.t7 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_J(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.t3 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_C(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.t5 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_F(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.t4 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_D(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.t9 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_Z(newLength);
  original.r(0, ret, 0, copyLength);
  return ret;
});
$p.aI = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).D.Q().D.U(retLength);
  original.r(from, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  g0: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $is_ju_Formattable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.bW)));
}
function $isArrayOf_ju_Formattable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bW)));
}
/** @constructor */
function $c_ju_Formatter$() {
  this.oY = null;
  this.oX = null;
  $n_ju_Formatter$ = this;
  this.oY = new RegExp("(?:(\\d+)\\$)?([-#+ 0,\\(<]*)(\\d+)?(?:\\.(\\d+))?[%A-Za-z]", "g");
  this.oX = new $ac_I(new Int32Array([96, 126, 638, 770, 32, 256, 2, 126, (-1), (-1), (-1), (-1), (-1), (-1), 800, (-1), (-1), (-1), 124, (-1), (-1), (-1), (-1), 544, (-1), (-1)]));
}
$p = $c_ju_Formatter$.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$;
/** @constructor */
function $h_ju_Formatter$() {
}
$h_ju_Formatter$.prototype = $p;
$p.lD = (function(count) {
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
$p.uf = (function(x) {
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
$p.ue = (function(x) {
  var unscaledValueWithSign = x.wp().x();
  if ((unscaledValueWithSign === "0")) {
    return new $c_ju_Formatter$Decimal(false, "0", 0);
  } else {
    var negative = (unscaledValueWithSign.charCodeAt(0) === 45);
    return new $c_ju_Formatter$Decimal(negative, (negative ? unscaledValueWithSign.substring(1) : unscaledValueWithSign), x.wh());
  }
});
var $d_ju_Formatter$ = new $TypeData().i($c_ju_Formatter$, "java.util.Formatter$", ({
  g6: 1
}));
var $n_ju_Formatter$;
function $m_ju_Formatter$() {
  if ((!$n_ju_Formatter$)) {
    $n_ju_Formatter$ = new $c_ju_Formatter$();
  }
  return $n_ju_Formatter$;
}
function $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal($thiz, roundingPos) {
  var digits = $thiz.dz;
  var digitsLen = digits.length;
  if ((roundingPos < 0)) {
    return new $c_ju_Formatter$Decimal($thiz.dy, "0", 0);
  } else if ((roundingPos >= digitsLen)) {
    return $thiz;
  } else if ((digits.charCodeAt(roundingPos) < 53)) {
    return ((roundingPos === 0) ? new $c_ju_Formatter$Decimal($thiz.dy, "0", 0) : new $c_ju_Formatter$Decimal($thiz.dy, digits.substring(0, roundingPos), (($thiz.dc - ((digitsLen - roundingPos) | 0)) | 0)));
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
    var newScale = (($thiz.dc - ((digitsLen - pos) | 0)) | 0);
    return new $c_ju_Formatter$Decimal($thiz.dy, newUnscaledValue, newScale);
  }
}
/** @constructor */
function $c_ju_Formatter$Decimal(negative, unscaledValue, scale) {
  this.dy = false;
  this.dz = null;
  this.dc = 0;
  this.dy = negative;
  this.dz = unscaledValue;
  this.dc = scale;
}
$p = $c_ju_Formatter$Decimal.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$Decimal;
/** @constructor */
function $h_ju_Formatter$Decimal() {
}
$h_ju_Formatter$Decimal.prototype = $p;
$p.r6 = (function() {
  return (this.dz === "0");
});
$p.rr = (function(precision) {
  $m_ju_Formatter$();
  if ((!(precision > 0))) {
    throw new $c_jl_AssertionError("Decimal.round() called with non-positive precision");
  }
  return $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, precision);
});
$p.vg = (function(newScale) {
  var roundingPos = ((((this.dz.length + newScale) | 0) - this.dc) | 0);
  var rounded = $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, roundingPos);
  $m_ju_Formatter$();
  if ((!(rounded.r6() || (rounded.dc <= newScale)))) {
    throw new $c_jl_AssertionError("roundAtPos returned a non-zero value with a scale too large");
  }
  return ((rounded.r6() || (rounded.dc === newScale)) ? rounded : new $c_ju_Formatter$Decimal(this.dy, (("" + rounded.dz) + $m_ju_Formatter$().lD(((newScale - rounded.dc) | 0))), newScale));
});
$p.x = (function() {
  return (((((("Decimal(" + this.dy) + ", ") + this.dz) + ", ") + this.dc) + ")");
});
var $d_ju_Formatter$Decimal = new $TypeData().i($c_ju_Formatter$Decimal, "java.util.Formatter$Decimal", ({
  g7: 1
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
  this.q = 0;
  this.t = 0;
  this.q = lo;
  this.t = hi;
}
$p = $c_RTLong.prototype = new $h_O();
$p.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $p;
$p.n = (function(that) {
  return ((that instanceof $c_RTLong) && ((this.q === that.q) && (this.t === that.t)));
});
$p.v = (function() {
  return (this.q ^ this.t);
});
$p.x = (function() {
  return $m_RTLong$().lP(this.q, this.t);
});
$p.wl = (function() {
  return this.q;
});
$p.wk = (function() {
  return $m_RTLong$().rk(this.q, this.t);
});
$p.wj = (function() {
  return $m_RTLong$().hN(this.q, this.t);
});
$p.w1 = (function() {
  return ((this.q << 24) >> 24);
});
$p.wi = (function() {
  return ((this.q << 16) >> 16);
});
$p.wc = (function() {
  return this.q;
});
$p.wd = (function() {
  return this;
});
$p.w6 = (function() {
  return $m_RTLong$().rk(this.q, this.t);
});
$p.w4 = (function() {
  return $m_RTLong$().hN(this.q, this.t);
});
$p.w3 = (function(that) {
  return $m_RTLong$().ri(this.q, this.t, that.q, that.t);
});
$p.w2 = (function(that) {
  return $m_RTLong$().ri(this.q, this.t, that.q, that.t);
});
$p.w5 = (function(b) {
  return ((this.q === b.q) && (this.t === b.t));
});
$p.wf = (function(b) {
  return (!((this.q === b.q) && (this.t === b.t)));
});
$p.vS = (function(b) {
  var ahi = this.t;
  var bhi = b.t;
  return ((ahi === bhi) ? (((-2147483648) ^ this.q) < ((-2147483648) ^ b.q)) : (ahi < bhi));
});
$p.vT = (function(b) {
  var ahi = this.t;
  var bhi = b.t;
  return ((ahi === bhi) ? (((-2147483648) ^ this.q) <= ((-2147483648) ^ b.q)) : (ahi < bhi));
});
$p.vO = (function(b) {
  var ahi = this.t;
  var bhi = b.t;
  return ((ahi === bhi) ? (((-2147483648) ^ this.q) > ((-2147483648) ^ b.q)) : (ahi > bhi));
});
$p.vP = (function(b) {
  var ahi = this.t;
  var bhi = b.t;
  return ((ahi === bhi) ? (((-2147483648) ^ this.q) >= ((-2147483648) ^ b.q)) : (ahi > bhi));
});
$p.wn = (function() {
  return new $c_RTLong((~this.q), (~this.t));
});
$p.vM = (function(b) {
  return new $c_RTLong((this.q | b.q), (this.t | b.t));
});
$p.vL = (function(b) {
  return new $c_RTLong((this.q & b.q), (this.t & b.t));
});
$p.vZ = (function(b) {
  return new $c_RTLong((this.q ^ b.q), (this.t ^ b.t));
});
$p.vU = (function(n) {
  var lo = this.q;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.t << n)) : (lo << n)));
});
$p.vR = (function(n) {
  var hi = this.t;
  return new $c_RTLong((((32 & n) === 0) ? (((this.q >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
});
$p.vQ = (function(n) {
  var hi = this.t;
  return new $c_RTLong((((32 & n) === 0) ? (((this.q >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
});
$p.wm = (function() {
  var lo = this.q;
  var hi = this.t;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)));
});
$p.vX = (function(b) {
  var alo = this.q;
  var ahi = this.t;
  var bhi = b.t;
  var lo = ((alo + b.q) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)));
});
$p.vV = (function(b) {
  var alo = this.q;
  var ahi = this.t;
  var bhi = b.t;
  var lo = ((alo - b.q) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)));
});
$p.vY = (function(b) {
  var alo = this.q;
  var blo = b.q;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  return new $c_RTLong(lo, ((((((((Math.imul(alo, b.t) + Math.imul(this.t, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0));
});
$p.vN = (function(b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.tj(this.q, this.t, b.q, b.t), this$1.am);
});
$p.vW = (function(b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.uS(this.q, this.t, b.q, b.t), this$1.am);
});
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bX)));
}
var $d_RTLong = new $TypeData().i($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  bX: 1
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
      $thiz.am = (((rDouble / 4.294967296E9) | 0.0) | 0);
      return ((rDouble | 0.0) | 0);
    } else {
      $thiz.am = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - (Math.clz32(blo) | 0)) | 0);
    $thiz.am = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - (Math.clz32(bhi) | 0)) | 0);
    $thiz.am = 0;
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
      $thiz.am = (((rDouble / 4.294967296E9) | 0.0) | 0);
      return ((rDouble | 0.0) | 0);
    } else {
      $thiz.am = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.am = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.am = (ahi & (((-1) + bhi) | 0));
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
    $thiz.am = quotHi;
    return quotLo;
  } else if ((ask === 1)) {
    $thiz.am = remHi;
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
  this.am = 0;
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.lP = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)));
});
$p.hN = (function(lo, hi) {
  return ((hi < 0) ? (-((4.294967296E9 * (+(((lo !== 0) ? (~hi) : ((-hi) | 0)) >>> 0.0))) + (+(((-lo) | 0) >>> 0.0)))) : ((4.294967296E9 * hi) + (+(lo >>> 0.0))));
});
$p.rk = (function(lo, hi) {
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
$p.w9 = (function(value) {
  return new $c_RTLong(value, (value >> 31));
});
$p.w8 = (function(value) {
  return new $c_RTLong(this.rj(value), this.am);
});
$p.rj = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.am = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.am = 2147483647;
    return (-1);
  } else {
    var rawLo = ((value | 0.0) | 0);
    var rawHi = (((value / 4.294967296E9) | 0.0) | 0);
    this.am = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$p.ri = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$p.tj = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.am = 0;
        return (-2147483648);
      } else {
        var lo = $intDiv(alo, blo);
        this.am = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.am = (-1);
      return (-1);
    } else {
      this.am = 0;
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
      var hi$2 = this.am;
      this.am = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    }
  }
});
$p.uS = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.am = (lo >> 31);
        return lo;
      } else {
        this.am = 0;
        return 0;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.am = 0;
      return 0;
    } else {
      this.am = ahi;
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
      var hi$2 = this.am;
      this.am = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    } else {
      return absRLo;
    }
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  gl: 1
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
  this.gZ = null;
  this.kl = null;
  $n_s_Array$EmptyArrays$ = this;
  this.gZ = new $ac_I(0);
  this.kl = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  gr: 1
}));
var $n_s_Array$EmptyArrays$;
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$();
  }
  return $n_s_Array$EmptyArrays$;
}
var $d_F0 = new $TypeData().i(1, "scala.Function0", ({
  b7: 1
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
  this.p9 = null;
  this.rU = null;
  this.iq = null;
  $n_s_PartialFunction$ = this;
  this.p9 = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2$2) => $m_s_PartialFunction$().p9));
  this.rU = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$3$2$2) => false));
  this.iq = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  gz: 1
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
  this.pe = null;
  $n_sc_ArrayOps$ = this;
  this.pe = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_ArrayOps$().pe));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.tC = (function(this$, f) {
  var len = $m_jl_reflect_Array$().bU(this$);
  var i = 0;
  if ((this$ instanceof $ac_O)) {
    while ((i < len)) {
      f.c(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_I)) {
    while ((i < len)) {
      f.c(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_D)) {
    while ((i < len)) {
      f.c(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_J)) {
    while ((i < len)) {
      f.c(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_F)) {
    while ((i < len)) {
      f.c(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_C)) {
    while ((i < len)) {
      f.c($bC(this$.a[i]));
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_B)) {
    while ((i < len)) {
      f.c(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_S)) {
    while ((i < len)) {
      f.c(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_Z)) {
    while ((i < len)) {
      f.c(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    throw new $c_s_MatchError(this$);
  }
});
var $d_sc_ArrayOps$ = new $TypeData().i($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  gG: 1
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
$p.bo = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0));
});
var $d_sc_Hashing$ = new $TypeData().i($c_sc_Hashing$, "scala.collection.Hashing$", ({
  gS: 1
}));
var $n_sc_Hashing$;
function $m_sc_Hashing$() {
  if ((!$n_sc_Hashing$)) {
    $n_sc_Hashing$ = new $c_sc_Hashing$();
  }
  return $n_sc_Hashing$;
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.f();
  while (it.l()) {
    f.c(it.e());
  }
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $thiz.f();
  while ((res && it.l())) {
    res = (!(!p.c(it.e())));
  }
  return res;
}
function $f_sc_IterableOnceOps__exists__F1__Z($thiz, p) {
  var res = false;
  var it = $thiz.f();
  while (((!res) && it.l())) {
    res = (!(!p.c(it.e())));
  }
  return res;
}
function $f_sc_IterableOnceOps__foldLeft__O__F2__O($thiz, z, op) {
  if ($is_sc_IndexedSeq($thiz)) {
    return $p_sc_IterableOnceOps__loop$1__I__I__O__F2__sc_IndexedSeq__O($thiz, 0, $thiz.m(), z, op, $thiz);
  } else {
    var result = z;
    var it = $thiz.f();
    while (it.l()) {
      result = op.bn(result, it.e());
    }
    return result;
  }
}
function $f_sc_IterableOnceOps__reduceLeft__F2__O($thiz, op) {
  if ($is_sc_IndexedSeq($thiz)) {
    if (($thiz.m() > 0)) {
      var z = $thiz.u(0);
      return $p_sc_IterableOnceOps__loop$1__I__I__O__F2__sc_IndexedSeq__O($thiz, 1, $thiz.m(), z, op, $thiz);
    }
  }
  if (($thiz.p() === 0)) {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  }
  var it = $thiz.f();
  if (it.l()) {
    var acc = it.e();
    while (it.l()) {
      acc = op.bn(acc, it.e());
    }
    return acc;
  } else {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  }
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  switch ($thiz.p()) {
    case (-1): {
      return (!$thiz.f().l());
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
  var it = $thiz.f();
  var i = start;
  var y = (($m_jl_reflect_Array$().bU(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.l())) {
    $m_sr_ScalaRunTime$().cX(xs, i, it.e());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__sum__s_math_Numeric__O($thiz, num) {
  switch ($thiz.p()) {
    case (-1): {
      return $thiz.fm(0, new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((x$2$2, y$2$2) => $f_s_math_Numeric$IntIsIntegral__plus__I__I__I(num, (x$2$2 | 0), (y$2$2 | 0)))));
      break;
    }
    case 0: {
      return 0;
      break;
    }
    default: {
      return $thiz.hQ(new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((x$2$2$1, y$2$2$1) => $f_s_math_Numeric$IntIsIntegral__plus__I__I__I(num, (x$2$2$1 | 0), (y$2$2$1 | 0)))));
    }
  }
}
function $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option($thiz, pf) {
  var sentinel = new $c_sc_IterableOnceOps$$anon$1($thiz);
  var it = $thiz.f();
  while (it.l()) {
    var x = pf.bI(it.e(), sentinel);
    if ((x !== sentinel)) {
      return new $c_s_Some(x);
    }
  }
  return $m_s_None$();
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.p() === 0) ? (("" + start) + end) : $thiz.eG($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).bc.s);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.bc;
  if ((start.length !== 0)) {
    jsb.s = (("" + jsb.s) + start);
  }
  var it = $thiz.f();
  if (it.l()) {
    var obj = it.e();
    jsb.s = (("" + jsb.s) + obj);
    while (it.l()) {
      jsb.s = (("" + jsb.s) + sep);
      var obj$1 = it.e();
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
    var elementClass = evidence$2.bg();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.f();
    while (it.l()) {
      var elem = it.e();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.D.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.D.r().w(jsElems);
  }
}
function $p_sc_IterableOnceOps__loop$1__I__I__O__F2__sc_IndexedSeq__O($thiz, at, end, acc, op$1, seq$1) {
  while (true) {
    if ((at === end)) {
      return acc;
    } else {
      var temp$at = ((1 + at) | 0);
      var temp$acc = op$1.bn(acc, seq$1.u(at));
      at = temp$at;
      acc = temp$acc;
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.pm = null;
  this.h2 = null;
  this.pm = head;
  this.h2 = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.tX = (function() {
  return this.pm.L().f();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  h5: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.pp = null;
  $n_sc_StringOps$ = this;
  this.pp = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_StringOps$().pp));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.sR = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
$p.rz = (function(this$, from, until) {
  var start = ((from > 0) ? from : 0);
  var that = this$.length;
  var end = ((until < that) ? until : that);
  return ((start >= end) ? "" : this$.substring(start, end));
});
$p.rB = (function(this$, marginChar) {
  var sb = $ct_jl_StringBuilder__I__(new $c_jl_StringBuilder(), this$.length);
  var this$3 = new $c_sc_StringOps$$anon$1(this$, false);
  while ((this$3.br < this$3.f0)) {
    var x0 = this$3.rc();
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
$p.vv = (function(this$, s) {
  if ((s === null)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "For input string: \"null\"");
  } else {
    _return: {
      var len = s.length;
      if ((len === 4)) {
        var i = 0;
        while ((i !== len)) {
          if (($m_jl_Character$().ji($m_jl_Character$().jk(s.charCodeAt(i))) !== $m_jl_Character$().ji($m_jl_Character$().jk("true".charCodeAt(i))))) {
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
            if (($m_jl_Character$().ji($m_jl_Character$().jk(s.charCodeAt(i$1))) !== $m_jl_Character$().ji($m_jl_Character$().jk("false".charCodeAt(i$1))))) {
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
$p.vE = (function(this$, arg) {
  return (false ? arg.wo() : arg);
});
$p.tF = (function(this$, args) {
  return $m_jl_String$().tD(this$, args.N(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((arg$2$2) => $m_sc_StringOps$().vE(this$, arg$2$2)))).jh($m_s_reflect_ManifestFactory$ObjectManifest$()));
});
$p.tW = (function(this$) {
  if ((this$ === "")) {
    throw new $c_ju_NoSuchElementException("head of empty String");
  } else {
    return this$.charCodeAt(0);
  }
});
$p.vr = (function(this$, n) {
  var $x_1 = $m_sc_StringOps$();
  var y = this$.length;
  return $x_1.rz(this$, 0, ((n < y) ? n : y));
});
$p.lf = (function(this$, n) {
  var $x_1 = $m_sc_StringOps$();
  var y = this$.length;
  return $x_1.rz(this$, ((n < y) ? n : y), this$.length);
});
$p.rA = (function(this$, n) {
  return new $c_T2($m_sc_StringOps$().vr(this$, n), $m_sc_StringOps$().lf(this$, n));
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  hd: 1
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
$p.hF = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  hl: 1
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
    return $m_jl_Integer$().lS($m_jl_System$SystemProperties$().ls("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10);
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
  this.pu = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  this.pu = $ps_sci_IndexedSeqDefaults$__liftedTree1$1__I();
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  hw: 1
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
  this.kI = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.lh = (function() {
  var state = this.kI;
  if ((state === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "uninitialized");
  }
  return state.L();
});
$p.lw = (function(state) {
  if ((this.kI !== null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "already initialized");
  }
  this.kI = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  hA: 1
}));
/** @constructor */
function $c_sci_MapNode$() {
  this.pA = null;
  $n_sci_MapNode$ = this;
  this.pA = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  hT: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (((-1) + $m_jl_reflect_Array$().bU(as)) | 0)));
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
$p.jd = (function(as, ix) {
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
$p.r4 = (function(as, ix, elem) {
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
  aG: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.he = 0;
  $n_sci_Node$ = this;
  this.he = $doubleToInt((+Math.ceil(6.4)));
}
$p = $c_sci_Node$.prototype = new $h_O();
$p.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $p;
$p.cx = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.bT = (function(mask) {
  return (1 << mask);
});
$p.fo = (function(bitmap, bitpos) {
  return $m_jl_Integer$().bA((bitmap & (((-1) + bitpos) | 0)));
});
$p.bF = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.fo(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  hW: 1
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
  this.pF = null;
  $n_sci_SetNode$ = this;
  this.pF = new $c_sci_BitmapIndexedSetNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_SetNode$.prototype = new $h_O();
$p.constructor = $c_sci_SetNode$;
/** @constructor */
function $h_sci_SetNode$() {
}
$h_sci_SetNode$.prototype = $p;
var $d_sci_SetNode$ = new $TypeData().i($c_sci_SetNode$, "scala.collection.immutable.SetNode$", ({
  ia: 1
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
  this.kN = null;
  this.ap = null;
  this.bw = null;
  this.cW = null;
  this.hh = null;
  this.kO = null;
  $n_sci_VectorStatics$ = this;
  this.kN = new $ac_O(0);
  this.ap = new ($d_O.r().r().C)(0);
  this.bw = new ($d_O.r().r().r().C)(0);
  this.cW = new ($d_O.r().r().r().r().C)(0);
  this.hh = new ($d_O.r().r().r().r().r().C)(0);
  this.kO = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.gg = (function(a, elem) {
  var alen = a.a.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.r(0, ac, 0, alen);
  ac.a[alen] = elem;
  return ac;
});
$p.M = (function(a, elem) {
  var ac = $m_ju_Arrays$().ab(a, ((1 + a.a.length) | 0));
  ac.a[(((-1) + ac.a.length) | 0)] = elem;
  return ac;
});
$p.gh = (function(elem, a) {
  var ac = new $ac_O(((1 + a.a.length) | 0));
  var length = a.a.length;
  a.r(0, ac, 1, length);
  ac.a[0] = elem;
  return ac;
});
$p.E = (function(elem, a) {
  var ac = $objectGetClass(a).D.Q().D.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.r(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.lj = (function(level, a, f) {
  var i = 0;
  var len = a.a.length;
  if ((level === 0)) {
    while ((i < len)) {
      f.c(a.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    var l = (((-1) + level) | 0);
    while ((i < len)) {
      this.lj(l, a.a[i], f);
      i = ((1 + i) | 0);
    }
  }
});
$p.cL = (function(a, f) {
  var i = 0;
  while ((i < a.a.length)) {
    var v1 = a.a[i];
    var v2 = f.c(v1);
    if ((!Object.is(v1, v2))) {
      return this.um(a, f, i, v2);
    }
    i = ((1 + i) | 0);
  }
  return a;
});
$p.um = (function(a, f, at, v2) {
  var ac = new $ac_O(a.a.length);
  if ((at > 0)) {
    a.r(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = f.c(a.a[i]);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.aF = (function(n, a, f) {
  if ((n === 1)) {
    return this.cL(a, f);
  } else {
    var i = 0;
    while ((i < a.a.length)) {
      var v1 = a.a[i];
      var v2 = this.aF((((-1) + n) | 0), v1, f);
      if ((v1 !== v2)) {
        return this.un(n, a, f, i, v2);
      }
      i = ((1 + i) | 0);
    }
    return a;
  }
});
$p.un = (function(n, a, f, at, v2) {
  var ac = $objectGetClass(a).D.Q().D.U(a.a.length);
  if ((at > 0)) {
    a.r(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = this.aF((((-1) + n) | 0), a.a[i], f);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.gc = (function(suffix1, xs) {
  if ($is_sci_Iterable(xs)) {
    if ((xs.lZ(((32 - suffix1.a.length) | 0)) <= 0)) {
      var x1$2 = xs.O();
      switch (x1$2) {
        case 0: {
          return null;
          break;
        }
        case 1: {
          return this.M(suffix1, xs.o());
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
      xs.f().bZ(suffix1b$2, suffix1.a.length, 2147483647);
      return suffix1b$2;
    } else {
      return null;
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  ij: 1
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
  this.g7 = null;
  this.dX = 0;
  this.by = null;
  this.g7 = _key;
  this.dX = _hash;
  this.by = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.ty = (function(k, h) {
  var _$this = this;
  while (true) {
    if (((h === _$this.dX) && $m_sr_BoxesRunTime$().k(k, _$this.g7))) {
      return _$this;
    } else if (((_$this.by === null) || (_$this.dX > h))) {
      return null;
    } else {
      _$this = _$this.by;
    }
  }
});
$p.x = (function() {
  return ((((("Node(" + this.g7) + ", ") + this.dX) + ") -> ") + this.by);
});
var $d_scm_HashSet$Node = new $TypeData().i($c_scm_HashSet$Node, "scala.collection.mutable.HashSet$Node", ({
  iE: 1
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
$p.qt = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  iK: 1
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
$p.k = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.tt(x, y) : ((x instanceof $Char) ? this.tr(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.tt = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.ts(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.q;
      var hi = t.t;
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
$p.ts = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      return (x2 === $m_RTLong$().hN(t.q, t.t));
    } else {
      return (false && yn.n(x2));
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.q;
    var hi$1 = t$1.t;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.q;
      var hi$2 = t$2.t;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return ($m_RTLong$().hN(lo$1, hi$1) === x3$3);
    } else {
      return (false && yn.n(new $c_RTLong(lo$1, hi$1)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.tr = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $c_RTLong)) {
      var t = $uJ(y);
      var lo = t.q;
      var hi = t.t;
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
  jt: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  jz: 1
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
$p.eH = (function(xs, idx) {
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
$p.cX = (function(xs, idx, value) {
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
$p.gb = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.bp(), (x.b8() + "("), ",", ")");
});
$p.qY = (function(xs) {
  return ((xs === null) ? null : $m_sci_ArraySeq$().hW(xs));
});
$p.B = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($m_sci_ArraySeq$()) : new $c_sci_ArraySeq$ofRef(xs)));
});
$p.H = (function(xs) {
  return ((xs !== null) ? new $c_sci_ArraySeq$ofInt(xs) : null);
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  jB: 1
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
$p.i = (function(hash, data) {
  var h = this.e8(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.e8 = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.G = (function(hash, length) {
  return this.sF((hash ^ length));
});
$p.sF = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.gq = (function(lv) {
  var lo = lv.q;
  var hi = lv.t;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$p.cZ = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.rj(dv);
    var hi = this$1.am;
    return (($m_RTLong$().hN(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().lN(dv));
  }
});
$p.R = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.cZ((+x));
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    return this.gq(new $c_RTLong(t.q, t.t));
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.eK = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  jD: 1
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
  jE: 1
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
$p.sz = (function(a) {
  return a;
});
var $d_sjs_js_defined$ = new $TypeData().i($c_sjs_js_defined$, "scala.scalajs.js.defined$", ({
  jK: 1
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
$p.vj = (function(interval, body) {
  return setTimeout((() => {
    body.L();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  jL: 1
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
$p.vx = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.iK;
  } else {
    var result = [];
    seq.U(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  jW: 1
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
  jZ: 1
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
$p.i = (function(hash, data) {
  var h = this.e8(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.e8 = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.G = (function(hash, length) {
  return this.cf((hash ^ length));
});
$p.cf = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.rE = (function(x, y, seed) {
  var h = seed;
  h = this.i(h, $f_T__hashCode__I("Tuple2"));
  h = this.i(h, x);
  h = this.i(h, y);
  return this.G(h, 2);
});
$p.cM = (function(x, seed, ignorePrefix) {
  var arr = x.b6();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.b8());
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.i(h, $f_T__hashCode__I(x.b8()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.i(h, $m_sr_Statics$().R(x.b7(i)));
      i = ((1 + i) | 0);
    }
    return this.G(h, arr);
  }
});
$p.hU = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.f();
  while (iterator.l()) {
    var x = iterator.e();
    var h = $m_sr_Statics$().R(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.i(h$2, a);
  h$2 = this.i(h$2, b);
  h$2 = this.e8(h$2, c);
  return this.G(h$2, n);
});
$p.uM = (function(xs, seed) {
  var it = xs.f();
  var h = seed;
  if ((!it.l())) {
    return this.G(h, 0);
  }
  var x0 = it.e();
  if ((!it.l())) {
    return this.G(this.i(h, $m_sr_Statics$().R(x0)), 1);
  }
  var x1 = it.e();
  var initial = $m_sr_Statics$().R(x0);
  h = this.i(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().R(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.l()) {
    h = this.i(h, prev);
    var hash = $m_sr_Statics$().R(it.e());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.i(h, hash);
      i = ((1 + i) | 0);
      while (it.l()) {
        h = this.i(h, $m_sr_Statics$().R(it.e()));
        i = ((1 + i) | 0);
      }
      return this.G(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.cf(this.i(this.i(h0, rangeDiff), prev));
});
$p.qh = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().bU(a);
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.i(h, $m_sr_Statics$().R($m_sr_ScalaRunTime$().eH(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().R($m_sr_ScalaRunTime$().eH(a, 0));
      h = this.i(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().R($m_sr_ScalaRunTime$().eH(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = $m_sr_Statics$().R($m_sr_ScalaRunTime$().eH(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, $m_sr_Statics$().R($m_sr_ScalaRunTime$().eH(a, i)));
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cf(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.uQ = (function(start, step, last, seed) {
  return this.cf(this.i(this.i(this.i(seed, start), step), last));
});
$p.u2 = (function(a, seed) {
  var h = seed;
  var l = a.m();
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.i(h, $m_sr_Statics$().R(a.u(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().R(a.u(0));
      h = this.i(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().R(a.u(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = $m_sr_Statics$().R(a.u(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, $m_sr_Statics$().R(a.u(i)));
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cf(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.uh = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.b())) {
    var head = elems.o();
    var tail = elems.z();
    var hash = $m_sr_Statics$().R(head);
    h = this.i(h, hash);
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
  return ((rangeState === 2) ? this.uQ(initial, rangeDiff, prev, seed) : this.G(h, n));
});
$p.qq = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.i(h, (a.a[0] ? 1231 : 1237)), 1);
      break;
    }
    default: {
      var initial = (a.a[0] ? 1231 : 1237);
      h = this.i(h, initial);
      var h0 = h;
      var prev = (a.a[1] ? 1231 : 1237);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = (a.a[i] ? 1231 : 1237);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, (a.a[i] ? 1231 : 1237));
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cf(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.qi = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.i(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.i(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cf(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.qj = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.i(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.i(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cf(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.qk = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.i(h, $m_sr_Statics$().cZ(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().cZ(a.a[0]);
      h = this.i(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().cZ(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = $m_sr_Statics$().cZ(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, $m_sr_Statics$().cZ(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cf(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.ql = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.i(h, $m_sr_Statics$().cZ(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().cZ(a.a[0]);
      h = this.i(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().cZ(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = $m_sr_Statics$().cZ(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, $m_sr_Statics$().cZ(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cf(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.qm = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.i(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.i(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cf(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.qn = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var t = a.a[0];
      return this.G(this.i($x_1, $m_sr_Statics$().gq(new $c_RTLong(t.q, t.t))), 1);
      break;
    }
    default: {
      var t$1 = a.a[0];
      var initial = $m_sr_Statics$().gq(new $c_RTLong(t$1.q, t$1.t));
      h = this.i(h, initial);
      var h0 = h;
      var t$2 = a.a[1];
      var prev = $m_sr_Statics$().gq(new $c_RTLong(t$2.q, t$2.t));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var t$3 = a.a[i];
        var hash = $m_sr_Statics$().gq(new $c_RTLong(t$3.q, t$3.t));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var t$4 = a.a[i];
            h = this.i($x_2, $m_sr_Statics$().gq(new $c_RTLong(t$4.q, t$4.t)));
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cf(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.qo = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.i(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.i(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cf(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.qp = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.i(h, 0), 1);
      break;
    }
    default: {
      h = this.i(h, 0);
      var h0 = h;
      var prev = 0;
      var rangeDiff = prev;
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        if (((rangeDiff !== ((-prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, 0);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, 0);
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = 0;
        i = ((1 + i) | 0);
      }
      return this.cf(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
/** @constructor */
function $c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1() {
}
$p = $c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1.prototype = new $h_Lapp_tulz_tuplez_Composition();
$p.constructor = $c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1;
/** @constructor */
function $h_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1() {
}
$h_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1.prototype = $p;
$p.qx = (function(a, b) {
  return new $c_T2(a, b);
});
var $d_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1 = new $TypeData().i($c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1, "app.tulz.tuplez.Composition_Pri0$$anon$1", ({
  dm: 1,
  bo: 1
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
$p.qx = (function(a, b) {
  return new $c_T3(a.bm(), a.bd(), b);
});
var $d_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$4 = new $TypeData().i($c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$4, "app.tulz.tuplez.Composition_Pri7$$anon$4", ({
  dn: 1,
  bo: 1
}));
function $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.cv(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $thiz.hM(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.gu(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.gu(new $c_s_util_Failure(nextError), transaction);
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_ManualOwner() {
  this.n8 = null;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
}
$p = $c_Lcom_raquo_airstream_ownership_ManualOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_ManualOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_ManualOwner() {
}
$h_Lcom_raquo_airstream_ownership_ManualOwner.prototype = $p;
$p.fv = (function() {
  return this.n8;
});
$p.la = (function(x$0) {
  this.n8 = x$0;
});
$p.lQ = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
});
$p.lG = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
var $d_Lcom_raquo_airstream_ownership_ManualOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_ManualOwner, "com.raquo.airstream.ownership.ManualOwner", ({
  dX: 1,
  b0: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.na = null;
  this.n9 = null;
  this.jI = false;
  this.n9 = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.jI = false;
}
$p = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $p;
$p.fv = (function() {
  return this.na;
});
$p.la = (function(x$0) {
  this.na = x$0;
});
$p.lQ = (function(subscription) {
  if (this.jI) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.n9.L();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.lG = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.jI = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  dY: 1,
  b0: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.nE = null;
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
$p.fv = (function() {
  return this.nE;
});
$p.la = (function(x$0) {
  this.nE = x$0;
});
$p.lG = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.lQ = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
});
var $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$, "com.raquo.laminar.api.Laminar$unsafeWindowOwner$", ({
  em: 1,
  b0: 1
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
$p.hC = (function(scalaValue) {
  return scalaValue;
});
$p.ld = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  es: 1,
  bA: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
  this.ot = null;
  this.ov = null;
  this.ou = null;
  this.jU = null;
  this.ot = getRawDomValue;
  this.ov = setRawDomValue;
  this.ou = separator;
  this.jU = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator);
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
$p.g9 = (function(items) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().w.sa(), $m_Lcom_raquo_laminar_keys_CompositeKey$().re(items, this.ou)));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey, "com.raquo.laminar.keys.CompositeKey", ({
  eQ: 1,
  af: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator) {
  this.jV = null;
  this.jV = separator;
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = $p;
$p.qD = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().re(domValue, this.jV);
});
$p.qF = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.jV, "");
});
$p.ld = (function(domValue) {
  return this.qD(domValue);
});
$p.hC = (function(scalaValue) {
  return this.qF(scalaValue);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec, "com.raquo.laminar.keys.CompositeKey$CompositeCodec", ({
  eS: 1,
  bA: 1
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
  eU: 1,
  eT: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProp(name) {
  this.gU = null;
  this.gU = name;
}
$p = $c_Lcom_raquo_laminar_keys_EventProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProp() {
}
$h_Lcom_raquo_laminar_keys_EventProp.prototype = $p;
var $d_Lcom_raquo_laminar_keys_EventProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProp, "com.raquo.laminar.keys.EventProp", ({
  eX: 1,
  af: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlAttr(name, codec) {
  this.gV = null;
  this.jW = null;
  this.gV = name;
  this.jW = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $p;
$p.g8 = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().rw(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  eY: 1,
  af: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.dx = null;
  this.jX = null;
  this.dx = name;
  this.jX = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
$p.g8 = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, prop, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().rx(element, prop, value$2);
  })));
});
$p.iQ = (function(values) {
  var update = ((this.dx === "value") ? new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, nextValue, reason) => {
    var nextDomValue = this.jX.hC(nextValue);
    var x = $m_Lcom_raquo_laminar_DomApi$().tQ(element, this);
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().k(nextDomValue, x)))) {
      $m_Lcom_raquo_laminar_DomApi$().ry(element, this, nextDomValue);
    }
  })) : new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element$2, nextValue$2, reason$2) => {
    $m_Lcom_raquo_laminar_DomApi$().rx(element$2, this, nextValue$2);
  })));
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.eM(), update);
});
function $isArrayOf_Lcom_raquo_laminar_keys_HtmlProp(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bF)));
}
var $d_Lcom_raquo_laminar_keys_HtmlProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlProp, "com.raquo.laminar.keys.HtmlProp", ({
  bF: 1,
  af: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr(localName, codec, namespacePrefix) {
  this.jZ = null;
  this.jY = null;
  this.ij = null;
  this.ik = null;
  this.jZ = localName;
  this.jY = codec;
  var this$1 = (namespacePrefix.b() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.J() + ":") + localName)));
  this.ij = (this$1.b() ? localName : this$1.J());
  this.ik = (namespacePrefix.b() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().uu(namespacePrefix.J())));
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $p;
var $d_Lcom_raquo_laminar_keys_SvgAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr, "com.raquo.laminar.keys.SvgAttr", ({
  eZ: 1,
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
$p.dn = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  f7: 1,
  Z: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2, outer) {
  this.oE = null;
  this.oE = f$2;
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
$p.dn = (function(element) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.oE.c(element);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bG || (!when))) {
    f();
  } else {
    this$2.bG = true;
    try {
      f();
    } finally {
      this$2.bG = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2, "com.raquo.laminar.modifiers.Modifier$$anon$2", ({
  f8: 1,
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
  fb: 1,
  f9: 1
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
  fd: 1,
  fc: 1
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
  this.oG = null;
  this.oG = render$2;
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
$p.sE = (function(value) {
  return this.oG.c(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  fg: 1,
  fe: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.qv(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().th($thiz.aP(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.ka = null;
  this.ka = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.be = (function(modifiers) {
  var element = this.sI();
  modifiers.U(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((modifier) => {
    modifier.dn(element);
  })));
  return element;
});
$p.sI = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().tc(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  fq: 1,
  bJ: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.oM = null;
  this.oM = name;
}
$p = $c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $p;
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  fr: 1,
  bJ: 1
}));
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.im) << 24) >> 24) === 0)) {
    $thiz.kb = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
    $thiz.im = (((32 | $thiz.im) << 24) >> 24);
  }
  return $thiz.kb;
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.im) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.kb);
}
/** @constructor */
function $c_jl_Character$() {
  this.kb = null;
  this.im = 0;
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.jj = (function(codePoint) {
  if ((!((codePoint >= 0) && (codePoint <= 1114111)))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.ti = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))));
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0);
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0);
  } else {
    var p = $m_ju_Arrays$().sG($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
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
$p.jk = (function(ch) {
  return (65535 & this.vz(ch));
});
$p.vz = (function(codePoint) {
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
        var this$1 = this.jj(codePoint);
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
$p.ji = (function(ch) {
  return (65535 & this.vy(ch));
});
$p.vy = (function(codePoint) {
  if ((codePoint === 304)) {
    return 105;
  } else {
    var this$1 = this.jj(codePoint);
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
  fA: 1,
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
$p.lS = (function(s, radix) {
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
    var digit = $m_jl_Character$().ti(s.charCodeAt(i), radix);
    result = ((result * radix) + digit);
    if (((digit === (-1)) || (result > maxAbsValue))) {
      $ps_jl_Integer$__fail$1__T__E(s);
    }
    i = ((1 + i) | 0);
  }
  return (negative ? (((-result) | 0.0) | 0) : ((result | 0.0) | 0));
});
$p.bA = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  fE: 1,
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
$p.r7 = (function(lo, hi) {
  if ((hi !== 0)) {
    var $x_1 = (+(hi >>> 0.0)).toString(16);
    var s = (+(lo >>> 0.0)).toString(16);
    var beginIndex = s.length;
    return ($x_1 + (("" + "00000000".substring(beginIndex)) + s));
  } else {
    return (+(lo >>> 0.0)).toString(16);
  }
});
$p.ud = (function(lo, hi) {
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
  fH: 1,
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
  this.fL = null;
  this.gY = null;
  this.fM = null;
  this.fN = 0;
  this.fK = 0;
  this.fL = declaringClass;
  this.gY = methodName;
  this.fM = fileName;
  this.fN = lineNumber;
  this.fK = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.n = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.fM === that.fM) && (this.fN === that.fN)) && (this.fK === that.fK)) && (this.fL === that.fL)) && (this.gY === that.gY)));
});
$p.x = (function() {
  var result = "";
  if ((this.fL !== "<jscode>")) {
    result = ((("" + result) + this.fL) + ".");
  }
  result = (("" + result) + this.gY);
  if ((this.fM === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.fM);
    if ((this.fN >= 0)) {
      result = ((result + ":") + this.fN);
      if ((this.fK >= 0)) {
        result = ((result + ":") + this.fK);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.v = (function() {
  return (((($f_T__hashCode__I(this.fL) ^ $f_T__hashCode__I(this.gY)) ^ $f_T__hashCode__I(this.fM)) ^ this.fN) ^ this.fK);
});
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bU)));
}
var $d_jl_StackTraceElement = new $TypeData().i($c_jl_StackTraceElement, "java.lang.StackTraceElement", ({
  bU: 1,
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
$p.uv = (function(value, offset, count) {
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
$p.tD = (function(format, args) {
  return $ct_ju_Formatter__(new $c_ju_Formatter()).tE(format, args).x();
});
var $d_jl_String$ = new $TypeData().i($c_jl_String$, "java.lang.String$", ({
  fP: 1,
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
  $thiz.oR = s;
  $thiz.oS = writableStackTrace;
  if (writableStackTrace) {
    $thiz.tx();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.oR = null;
    this.oS = false;
    this.oQ = null;
    this.io = null;
  }
  j6(cause) {
    return this;
  }
  bV() {
    return this.oR;
  }
  tx() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.ak : this);
    this.oQ = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  tS() {
    if ((this.io === null)) {
      if (this.oS) {
        this.io = $m_jl_StackTrace$().tv(this.oQ);
      } else {
        this.io = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.io;
  }
  x() {
    var className = $objectClassName(this);
    var message = this.bV();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  v() {
    return $c_O.prototype.v.call(this);
  }
  n(that) {
    return $c_O.prototype.n.call(this, that);
  }
  get "message"() {
    var m = this.bV();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.x();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.o)));
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
  g9: 1,
  g8: 1
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
  this.dA = null;
  $n_s_$less$colon$less$ = this;
  this.dA = new $c_s_$less$colon$less$$anon$1();
}
$p = $c_s_$less$colon$less$.prototype = new $h_O();
$p.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
}
$h_s_$less$colon$less$.prototype = $p;
var $d_s_$less$colon$less$ = new $TypeData().i($c_s_$less$colon$less$, "scala.$less$colon$less$", ({
  go: 1,
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
    $m_sr_ScalaRunTime$().cX(dest, j, $m_sr_ScalaRunTime$().eH(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
function $p_s_Array$__newUnitArray__I__Ajl_Void($thiz, len) {
  var result = new ($d_jl_Void.r().C)(len);
  $m_ju_Arrays$().tw(result, (void 0));
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
$p.qQ = (function(it, evidence$3) {
  var n = it.p();
  if ((n > (-1))) {
    var elements = evidence$3.c1(n);
    var iterator = it.f();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().cX(elements, i, iterator.e());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$3.bg();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.f();
    while (iterator$2.l()) {
      var elem = iterator$2.e();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.D.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.D.r().w(jsElems);
  }
});
$p.cc = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.D.Z && $objectGetClass(dest).D.R(srcClass.D))) {
    src.r(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.eI = (function(original, newLength) {
  if ($isArrayOf_jl_Void(original, 1)) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  } else if ((original instanceof $ac_O)) {
    return $m_ju_Arrays$().ab(original, newLength);
  } else if ((original instanceof $ac_I)) {
    return $m_ju_Arrays$().t6(original, newLength);
  } else if ((original instanceof $ac_D)) {
    return $m_ju_Arrays$().t4(original, newLength);
  } else if ((original instanceof $ac_J)) {
    return $m_ju_Arrays$().t7(original, newLength);
  } else if ((original instanceof $ac_F)) {
    return $m_ju_Arrays$().t5(original, newLength);
  } else if ((original instanceof $ac_C)) {
    return $m_ju_Arrays$().t3(original, newLength);
  } else if ((original instanceof $ac_B)) {
    return $m_ju_Arrays$().t2(original, newLength);
  } else if ((original instanceof $ac_S)) {
    return $m_ju_Arrays$().t8(original, newLength);
  } else if ((original instanceof $ac_Z)) {
    return $m_ju_Arrays$().t9(original, newLength);
  } else {
    throw new $c_s_MatchError(original);
  }
});
$p.qN = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.a.length !== ys.a.length)) {
    return false;
  }
  var len = xs.a.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().k(xs.a[i], ys.a[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  gq: 1,
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
$p.vJ = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $m_scm_ArraySeq$().kS : new $c_scm_ArraySeq$ofRef(xs)));
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
$p.rh = (function(xo) {
  return (xo.b() ? $m_sc_Iterable$().bK() : new $c_sc_Iterable$$anon$1(xo.J()));
});
$p.l5 = (function(x) {
  return ((x === null) ? $m_s_None$() : new $c_s_Some(x));
});
var $d_s_Option$ = new $TypeData().i($c_s_Option$, "scala.Option$", ({
  gy: 1,
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
  return ($thiz.c0(x) ? $thiz.c(x) : default$1.c(x));
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
    $thiz.b5($m_scm_Buffer$().j3(elems));
  } else {
    var it = elems.f();
    while (it.l()) {
      $thiz.az(it.e());
    }
  }
  return $thiz;
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.rZ = null;
  this.s8 = null;
  this.s0 = null;
  this.s3 = null;
  this.s4 = null;
  this.s2 = null;
  this.s1 = null;
  this.rY = null;
  this.s9 = null;
  this.rW = null;
  this.s7 = null;
  this.rX = null;
  this.s5 = null;
  this.s6 = null;
  $n_s_reflect_ClassTag$ = this;
  this.rZ = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.s8 = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.s0 = $m_s_reflect_ManifestFactory$CharManifest$();
  this.s3 = $m_s_reflect_ManifestFactory$IntManifest$();
  this.s4 = $m_s_reflect_ManifestFactory$LongManifest$();
  this.s2 = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.s1 = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.rY = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.s9 = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.rW = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.s7 = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.rX = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.s5 = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.s6 = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.qe = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  iY: 1,
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
$p.x = (function() {
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
$p.x = (function() {
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
$p.x = (function() {
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
$p.x = (function() {
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
$p.x = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.iF = false;
  this.iF = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.x = (function() {
  return ("" + this.iF);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  js: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.aV = 0;
  this.aV = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.x = (function() {
  return ("" + this.aV);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  jv: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyBoolean() {
  this.iG = false;
  this.iH = false;
}
$p = $c_sr_LazyBoolean.prototype = new $h_O();
$p.constructor = $c_sr_LazyBoolean;
/** @constructor */
function $h_sr_LazyBoolean() {
}
$h_sr_LazyBoolean.prototype = $p;
$p.u3 = (function(value) {
  this.iH = value;
  this.iG = true;
  return value;
});
$p.x = (function() {
  return ("LazyBoolean " + (this.iG ? ("of: " + this.iH) : "thunk"));
});
var $d_sr_LazyBoolean = new $TypeData().i($c_sr_LazyBoolean, "scala.runtime.LazyBoolean", ({
  jw: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyRef() {
  this.iI = false;
  this.iJ = null;
}
$p = $c_sr_LazyRef.prototype = new $h_O();
$p.constructor = $c_sr_LazyRef;
/** @constructor */
function $h_sr_LazyRef() {
}
$h_sr_LazyRef.prototype = $p;
$p.u4 = (function(value) {
  this.iJ = value;
  this.iI = true;
  return value;
});
$p.x = (function() {
  return ("LazyRef " + (this.iI ? ("of: " + this.iJ) : "thunk"));
});
var $d_sr_LazyRef = new $TypeData().i($c_sr_LazyRef, "scala.runtime.LazyRef", ({
  jx: 1,
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
$p.x = (function() {
  return ("" + this.K);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  jA: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.aW = 0;
  this.eF = 0;
  this.iL = 0;
  this.kY = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.aW = $f_T__hashCode__I("Seq");
  this.eF = $f_T__hashCode__I("Map");
  this.iL = $f_T__hashCode__I("Set");
  this.kY = this.hU($m_sci_Nil$(), this.eF);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.d9 = (function(x, y) {
  return this.rE($m_sr_Statics$().R(x), $m_sr_Statics$().R(y), (-889275714));
});
$p.ru = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.u2(xs, this.aW) : ((xs instanceof $c_sci_List) ? this.uh(xs, this.aW) : this.uM(xs, this.aW)));
});
$p.uo = (function(xs) {
  if (xs.b()) {
    return this.kY;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.eF;
    xs.fn(accum);
    h = this.i(h, accum.iM);
    h = this.i(h, accum.iN);
    h = this.e8(h, accum.iO);
    return this.G(h, accum.iP);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  k1: 1,
  k0: 1
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
  this.iM = 0;
  this.iN = 0;
  this.iP = 0;
  this.iO = 0;
  this.iM = 0;
  this.iN = 0;
  this.iP = 0;
  this.iO = 1;
}
$p = $c_s_util_hashing_MurmurHash3$accum$1.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3$accum$1;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$accum$1() {
}
$h_s_util_hashing_MurmurHash3$accum$1.prototype = $p;
$p.x = (function() {
  return "<function2>";
});
$p.sy = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().d9(k, v);
  this.iM = ((this.iM + h) | 0);
  this.iN = (this.iN ^ h);
  this.iO = Math.imul(this.iO, (1 | h));
  this.iP = ((1 + this.iP) | 0);
});
$p.bn = (function(v1, v2) {
  this.sy(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  k2: 1,
  b8: 1
}));
/** @constructor */
function $c_Ladversaries_Adversary$() {
  this.jp = null;
  this.m9 = null;
  this.mf = null;
  this.ma = null;
  this.mc = null;
  this.mb = null;
  this.md = null;
  this.me = null;
  this.jo = null;
  $n_Ladversaries_Adversary$ = this;
  this.jp = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Brandenburg-Prussia", $m_sci_Vector$().bB($m_sr_ScalaRunTime$().B(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 Town to land #3.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-3-2222-3333", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-3-2222-3333", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-3-222-3333", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "1-3-222-3333", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "3-222-3333", $m_s_None$())]))), $m_s_None$(), "On each board with Town/City, add 1 Town to a land without Town.", $m_sci_Nil$().y($m_sr_ScalaRunTime$().B(new ($d_sci_List.r().C)([$m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([3, 3, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([3, 3, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([3, 4, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 4, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 4, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 4, 4]))))])))));
  this.m9 = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("England", $m_sci_Vector$().bB($m_sr_ScalaRunTime$().B(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "Invader Build Cards affect matching lands without Invaders if they are adjacent to at least 2 Town/City.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 City to land #1 and 1 Town to land #2", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage(), "Put the \"High Immigration\" tile on the Invader board, to the left of \"Ravage\". The Invaders take this Build action each Invader phase before Ravaging. Cards slide left from Ravage to it, and from it to the discard pile. Remove the tile when a Stage II card slides onto it, putting that card in the discard.", new $c_s_Some(4)), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage(), "Put the \"High Immigration\" tile on the Invader board, to the left of \"Ravage\". The Invaders take this Build action each Invader phase before Ravaging. Cards slide left from Ravage to it, and from it to the discard pile. ", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Town/City have +1 Health.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Add an additional Fear to the Fear Pool per player in the game.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage(), "During any Invader Phase where you resolve no Fear Cards, perform the Build from High Immigration twice. (This has no effect if no card is on the extra Build slot.)", $m_s_None$())]))), new $c_s_Some("If 7 or more Town/City are ever in a single land, the Invaders win."), "On each board with Town/City, Build in the land with the most Town/City.", $m_sci_Nil$().y($m_sr_ScalaRunTime$().B(new ($d_sci_List.r().C)([$m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([3, 4, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 4, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 5, 4])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 5, 5])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 5, 5])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 5, 4]))))])))));
  this.mf = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Sweden", $m_sci_Vector$().bB($m_sr_ScalaRunTime$().B(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "If the Invaders do at least 6 Damage to the land during Ravage, add an extra Blight. The additional Blight does not destroy Presence or cause cascades.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 City to land #4. On boards where land #4 starts with Blight, put that Blight in land #5 instead.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Town deal 3 Damage. City deal 5 Damage.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "After adding all other Invaders, Accelerate the Invader Deck. On each board, add 1 Town to the land of that terrain with the fewest Invaders.", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "When Ravaging adds at least 1 Blight to a land, also add 1 Town to an adjacent land without Town/City. Cascading Blight does not cause this effect.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 Town and 1 Blight to land #8. The Blight comes from the box, not the Blight Card.", $m_s_None$())]))), $m_s_None$(), "After Invaders Explore into each land this Phase, if that land has at least as many Invaders as Dahan, replace 1 Dahan with 1 Town.", $m_sci_Nil$().y($m_sr_ScalaRunTime$().B(new ($d_sci_List.r().C)([$m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([3, 3, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([3, 4, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([3, 4, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([3, 4, 4])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 4, 4])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 4, 5]))))])))));
  this.ma = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("France", $m_sci_Vector$().bB($m_sr_ScalaRunTime$().B(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "Except during Setup: After Invaders successfully Explore into a land which had no Town/City, add 1 Explorer there.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Put the \"Slave Rebellion\" event under the top 3 cards of the Event Deck.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "After Invaders Build in a land with 2 Explorer or more, replace all but 1 Explorer there with an equal number of Town.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 Town to the highest-numbered land without Town. Add 1 Town to land #1.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "Whenever Invaders Build a Coastal City, add 1 Town to the adjacent land with the fewest Town.", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "When you remove Blight from the board, put it here instead of onto the Blight Card. As soon as you have 3 Blight per player here, move it all back to the Blight Card.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "After resolving an Explore Card, on each board add 1 Explorer to a land without any. Fear Card effects never remove Explorer. If one would, you may instead Push that Explorer.", $m_s_None$())]))), new $c_s_Some("Before Setup, return all but 7 Town per player to the box. Invaders win if you ever cannot place a Town."), "After Exploring, on each board, pick a land of the shown terrain. If it has Town/City, add 1 Blight. Otherwise, add 1 Town.", $m_sci_Nil$().y($m_sr_ScalaRunTime$().B(new ($d_sci_List.r().C)([$m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([3, 3, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([3, 4, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 4, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 4, 4])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 5, 4])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 5, 5]))))])))));
  this.mc = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Habsburg Monarchy (Livestock)", $m_sci_Vector$().bB($m_sr_ScalaRunTime$().B(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "After the normal Build Step: In each land matching a Build Card, Gather 1 Town from a land not matching a Build Card. (In board/land order.)", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board, add 1 Town to land #2 and 1 Town to the highest-numbered land without Setup symbols.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "when Invaders would Build 1 City in an Inland land, they instead Build 2 Town.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-2222-33333", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "Town in lands without Blight are Durable: they have +2 Health, and \"Destroy Town\" effects instead deal 2 Damage (to those Town only) per Town they could Destroy. (\"Destroy all Town\" works normally.)", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Put the Habsburg Reminder Card under the top 5 Invader Cards. When Revealed, on each board, add 1 City to a Coastal land without City and 1 Town to the 3 Inland lands with the fewest Blight.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Ravages do +2 Damage (total) if any adjacent lands have Town. (This does not cause lands without Invaders to Ravage.)", $m_s_None$())]))), new $c_s_Some("Track how many Blight come off the Blight Card during Ravages that do 8+ Damage to the land. If that number ever exceeds players, the Invaders win."), "After Exploring: On each board with 4 or fewer Blight, add 1 Town to a land without Town/Blight. On each board with 2 or fewer Blight, do so again.", $m_sci_Nil$().y($m_sr_ScalaRunTime$().B(new ($d_sci_List.r().C)([$m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([3, 4, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 5, 2])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 5, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 5, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 6, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([5, 6, 3]))))])))));
  this.mb = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Habsburg Mining Expedition", $m_sci_Vector$().bB($m_sr_ScalaRunTime$().B(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "Lands with 3 or more Invaders are Mining lands.", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "When Blight added by a Ravage Action would cascade, instead Upgrade 1 Explorer/Town (before Dahan counterattack.)", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), $m_sc_StringOps$().rB("In Mining lands: Disease and modifiers to Disease affect Ravage Actions as though they were Build Actions.", 124), $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), $m_sc_StringOps$().rB("In Mining lands: During the Build Step, Build Cards cause Ravage Actions (instead of Build Actions).", 124), $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Add 1 Explorer in each land with no Dahan. Add 1 Disease and 1 City in the highest-numbered land with a Town Setup symbol.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__AfterBuild__Ladversaries_Stage(), "On each board: Choose a land with Explorer. Upgrade 1 Explorer there.", new $c_s_Some(5)), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Remove the Stage II 'Coastal Lands' card before randomly choosing Stage II cards. Place the 'Salt Deposits' card in place of the 2nd Stage II card.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-2S22-33333, where S is the Salt Deposits card. Escalation ignores S", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__AfterBuild__Ladversaries_Stage(), "On each board: Choose a land with Explorer. Build there, then Upgrade 1 Explorer. (Build normally in a Mining land.)", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "On boards with 3 or fewer Blight: Add +1 Explorer in each land successfully explored. (Max. 2 lands per board per Explore Card.)", $m_s_None$())]))), new $c_s_Some("At the end of the Fast Power Phase, the Invaders win if any land has at least 8 total Invaders/Blight (combined)."), "After Advancing Invader Cards: On each board, Explore in 2 lands whose terrains don't match a Ravage or Build Card (no source required).", $m_sci_Nil$().y($m_sr_ScalaRunTime$().B(new ($d_sci_List.r().C)([$m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([3, 3, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([3, 3, 4])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([3, 4, 4])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 4, 4])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 5, 4])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 5, 4]))))])))));
  this.md = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Russia", $m_sci_Vector$().bB($m_sr_ScalaRunTime$().B(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board, add 1 Beasts and 1 Explorer to the highest-numbered land without Town/City", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Explorer do +1 Damage. When Ravage adds Blight to a land (including cascades), Destroy 1 Beasts in that land.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "The first time each Action would Destroy Explorer: If possible, 1 of those Explorer is instead Pushed; 1 Fear when you do so.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Ravage Cards also match lands with 3 or more Explorer. (If the land already matched the Ravage Card, it still Ravages just once.)", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-2-3-2-3-2-3-2-33", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Put an unused Stage II Invader Card under the top 3 Fear Cards, and an unused Stage III Card under the top 7 Fear Cards.", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "When a face down invader card in the fear deck is revealed, immediately place it in the Build space (face-up).", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "After the Ravage Step of turn 2+, on each board where it added no Blight: In the land with the most Explorer (min. 1), add 1 Explorer and 1 Town.", $m_s_None$())]))), new $c_s_Some("Put Beasts Destroyed by Adversary rules on this panel. If there are ever more Beasts on this panel than on the island, the Invaders win."), "Add 2 Explorer (total) among lands with Beasts. If you can't, instead add 2 Explorer among lands with Beasts on a different board.", $m_sci_Nil$().y($m_sr_ScalaRunTime$().B(new ($d_sci_List.r().C)([$m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([3, 3, 4])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 3, 4])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 4, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 4, 4])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 5, 4])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([5, 5, 4]))))])))));
  this.me = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Scotland", $m_sci_Vector$().bB($m_sr_ScalaRunTime$().B(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "After Setup, in Coastal lands, Explore Cards add 1 Town instead of 1 Explorer . \"Coastal Lands\" Invader cards do this for maximum 2 lands per board.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Add 1 City to land #2.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-22-1-C2-33333", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "In Coastal lands, Build Cards affect lands without Invaders, so long as there is an adjacent City.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-22-3-C2-3333", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "After a Ravage Action adds Blight to a Coastal Land, add 1 Blight to that board's Ocean (without cascading). Treat the Ocean as a Coastal Wetland for this rule and for Blight removal/movement.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__AfterRavage__Ladversaries_Stage(), "Add 1 Town to each Inland land that matches a Ravage card and is within 1 Range of Town/City.", $m_s_None$())]))), new $c_s_Some("If the number of Coastal lands with City is ever greater than (2 x # of boards), the Invaders win."), "On the single board with the most Coastal Town/City, add 1 Town to the N lands with the fewest Town (N = # of players.)", $m_sci_Nil$().y($m_sr_ScalaRunTime$().B(new ($d_sci_List.r().C)([$m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([3, 4, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 4, 3])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([4, 5, 4])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([5, 5, 4])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([5, 6, 4])))), $m_sci_Nil$().y($m_sr_ScalaRunTime$().H(new $ac_I(new Int32Array([6, 6, 4]))))])))));
  this.jo = $m_sci_Nil$().y($m_sr_ScalaRunTime$().B(new ($d_Ladversaries_Adversary.r().C)([this.jp, this.m9, this.mf, this.ma, this.mc, this.mb, this.md, this.me])));
}
$p = $c_Ladversaries_Adversary$.prototype = new $h_O();
$p.constructor = $c_Ladversaries_Adversary$;
/** @constructor */
function $h_Ladversaries_Adversary$() {
}
$h_Ladversaries_Adversary$.prototype = $p;
$p.qZ = (function(name) {
  var this$1 = $m_Ladversaries_Adversary$().jo;
  _return: {
    var these = this$1;
    while ((!these.b())) {
      if ((these.o().eb === name)) {
        var this$2 = new $c_s_Some(these.o());
        break _return;
      }
      these = these.z();
    }
    var this$2 = $m_s_None$();
  }
  if (this$2.b()) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (name + " not found"));
  }
  return this$2.J();
});
var $d_Ladversaries_Adversary$ = new $TypeData().i($c_Ladversaries_Adversary$, "adversaries.Adversary$", ({
  di: 1,
  aS: 1,
  d5: 1
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
  dk: 1,
  aS: 1,
  d6: 1
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
  this.jw = null;
  this.mq = null;
  this.mr = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.jw = $m_scm_Buffer$().qg($m_sr_ScalaRunTime$().B(new ($d_F1.r().C)([])));
  this.mq = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    try {
      console.error(((this.eJ(err) + "\n") + this.tR(err, "\n")));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error("Error in AirstreamError.consoleErrorCallback:");
      console.error(e$2);
    }
  }));
  this.mr = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => {
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    var $x_1 = err$2;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.ak : $x_1);
  }));
  this.uR(this.mq);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.eJ = (function(e) {
  try {
    var errorMessage = e.bV();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).lt() + ": ") + errorMessage);
});
$p.tR = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().vJ(err.tS()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.sP = (function(message, cause) {
  return ((message + "; cause: ") + (cause.b() ? $m_s_None$() : new $c_s_Some(this.eJ(cause.J()))));
});
$p.sO = (function(causes) {
  return ("CombinedError: " + $f_sc_IterableOnceOps__mkString__T__T__T__T(causes.fl($m_s_$less$colon$less$().dA).N(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e) => this.eJ(e)))), "", "; ", ""));
});
$p.uR = (function(fn) {
  this.jw.az(fn);
});
$p.cN = (function(err) {
  var this$1 = this.jw;
  var it = this$1.f();
  while (it.l()) {
    var x0 = it.e();
    try {
      x0.c(err);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = this.mr;
      if (((x0 === null) ? (x$2 === null) : x0.n(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().vj(0.0, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((e$2) => (() => {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
      }))(e$2)));
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$, "com.raquo.airstream.core.AirstreamError$", ({
  dz: 1,
  aS: 1,
  d6: 1
}));
var $n_Lcom_raquo_airstream_core_AirstreamError$;
function $m_Lcom_raquo_airstream_core_AirstreamError$() {
  if ((!$n_Lcom_raquo_airstream_core_AirstreamError$)) {
    $n_Lcom_raquo_airstream_core_AirstreamError$ = new $c_Lcom_raquo_airstream_core_AirstreamError$();
  }
  return $n_Lcom_raquo_airstream_core_AirstreamError$;
}
function $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V($thiz) {
  $thiz.cJ(true);
  $thiz.fr((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().m6(onNext, $m_s_PartialFunction$().iq, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.fq()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.fq()) {
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
  var x = $thiz.e7();
  if ((x === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().bE($m_sr_ScalaRunTime$().B(new ($d_F0.r().C)([])));
    $thiz.fr(newArray);
    return newArray;
  } else {
    return x;
  }
}
var $d_Lcom_raquo_airstream_core_Observer = new $TypeData().i(1, "com.raquo.airstream.core.Observer", ({
  aW: 1,
  aI: 1,
  Y: 1
}));
function $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($thiz, value, r) {
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.sE(value));
}
function $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($thiz, nodes, renderableSeq) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    ($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(nodes, null, null)).U(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((_$9) => {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().gd(element$2, _$9, (void 0));
    }))(element)));
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$1() {
  this.nA = null;
  this.nB = false;
}
$p = $c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$1() {
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = $p;
$p.uK = (function() {
  if ((!this.nB)) {
    this.nA = new $c_Lcom_raquo_laminar_keys_EventProp("DOMContentLoaded");
    this.nB = true;
  }
  return this.nA;
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$$anon$1, "com.raquo.laminar.api.Laminar$$anon$1", ({
  ek: 1,
  bB: 1,
  ex: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(key, itemsToAdd) {
  this.ox = null;
  this.k1 = null;
  this.ox = key;
  this.k1 = itemsToAdd;
}
$p = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_CompositeKeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = $p;
$p.dn = (function(element) {
  if ((!this.k1.b())) {
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this.ox, null, this.k1, $m_sci_Nil$());
  }
});
var $d_Lcom_raquo_laminar_modifiers_CompositeKeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_CompositeKeySetter, "com.raquo.laminar.modifiers.CompositeKeySetter", ({
  f2: 1,
  Z: 1,
  bH: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.fI = null;
  this.k2 = null;
  this.k3 = null;
  this.fI = eventProcessor;
  this.k2 = ((ev) => {
    var processor = eventProcessor.gS;
    var this$2 = processor.c(ev);
    if ((!this$2.b())) {
      callback.c(this$2.J());
    }
  });
  this.k3 = (() => {
    var outer = null;
    outer = this;
    var this$3 = ({});
    if ((outer === null)) {
      throw new $c_jl_NullPointerException();
    }
    this$3.capture = outer.fI.gT;
    this$3.passive = outer.fI.ii;
    return this$3;
  })();
}
$p = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $p;
$p.dn = (function(element) {
  this.sH(element, false);
});
$p.sH = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().sg(element.bC, this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.k0, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().uU(element.bC, this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().vB(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().hV(element.cQ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().rC(element.cQ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner$1) => {
      activate.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.x = (function() {
  return (("EventListener(" + this.fI.eW.gU) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  f3: 1,
  Z: 1,
  bG: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeySetter(key, value, action) {
  this.oz = null;
  this.oA = null;
  this.oy = null;
  this.oz = key;
  this.oA = value;
  this.oy = action;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_KeySetter.prototype = $p;
$p.dn = (function(element) {
  this.oy.l3(element, this.oz, this.oA);
});
var $d_Lcom_raquo_laminar_modifiers_KeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeySetter, "com.raquo.laminar.modifiers.KeySetter", ({
  f4: 1,
  Z: 1,
  bH: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeyUpdater(key, values, update) {
  this.oB = null;
  this.oD = null;
  this.oC = null;
  this.oB = key;
  this.oD = values;
  this.oC = update;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeyUpdater;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeyUpdater() {
}
$h_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = $p;
$p.dn = (function(element) {
  this.l9(element);
});
$p.l9 = (function(element) {
  element.uI(this.oB);
  var observable = this.oD;
  var onNext = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    this.oC.l3(element, value, this);
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().vl(element.cQ, observable, onNext);
});
var $d_Lcom_raquo_laminar_modifiers_KeyUpdater = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeyUpdater, "com.raquo.laminar.modifiers.KeyUpdater", ({
  f5: 1,
  Z: 1,
  bG: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.k8 = null;
  this.oJ = null;
  this.oK = null;
  this.oJ = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().uc(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.oK = container;
  this.ut();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.j0 = (function() {
  return this.k8;
});
$p.qv = (function(x$0) {
  this.k8 = x$0;
});
$p.ut = (function() {
  this.k8.q3();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().gd(this, this.oJ, (void 0));
});
$p.aP = (function() {
  return this.oK;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  fm: 1,
  aJ: 1,
  bI: 1
}));
function $isArrayOf_Lcom_raquo_laminar_tags_CustomHtmlTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fp)));
}
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.D.Z) {
    return ($thiz.D.Q().lt() + "[]");
  } else {
    var name = $thiz.D.N;
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
  this.kc = null;
  this.D = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.x = (function() {
  return ((this.D.Y ? "interface " : (this.D.X ? "" : "class ")) + this.D.N);
});
$p.lt = (function() {
  if ((this.kc === null)) {
    this.kc = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.kc;
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  fB: 1,
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
  o: 1,
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
  this.rV = null;
  $n_s_Predef$ = this;
  this.rV = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.ro = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  gB: 1,
  gu: 1,
  gv: 1
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
      return $thiz.bm();
      break;
    }
    case 1: {
      return $thiz.bd();
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
      return $thiz.fO;
      break;
    }
    case 1: {
      return $thiz.fP;
      break;
    }
    case 2: {
      return $thiz.fQ;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.fR = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.fR = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.bK = (function() {
  return this.fR.qE($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.aA = (function(it) {
  return this.fR.ll(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.aO = (function() {
  return this.fR.jb($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.e1 = (function(elems) {
  return this.fR.ll(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.fT = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.fT = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.bK = (function() {
  return this.fT.bK();
});
$p.aA = (function(it) {
  return this.fT.aA(it);
});
$p.aO = (function() {
  return this.fT.aO();
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
$p.c = (function(v1) {
  return this;
});
var $d_sc_IterableOnceOps$$anon$1 = new $TypeData().i($c_sc_IterableOnceOps$$anon$1, "scala.collection.IterableOnceOps$$anon$1", ({
  gY: 1,
  bk: 1,
  i: 1
}));
function $f_sc_IterableOps__headOption__s_Option($thiz) {
  var it = $thiz.f();
  return (it.l() ? new $c_s_Some(it.e()) : $m_s_None$());
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
      var it = $thiz.f();
      while (it.l()) {
        if ((i === otherSize)) {
          return 1;
        }
        it.e();
        i = ((1 + i) | 0);
      }
      return ((i - otherSize) | 0);
    }
  }
}
function $f_sc_IterableOps__map__F1__O($thiz, f) {
  return $thiz.b2().aA($ct_sc_View$Map__sc_IterableOps__F1__(new $c_sc_View$Map(), $thiz, f));
}
function $f_sc_Iterator__indexWhere__F1__I__I($thiz, p, from) {
  var i = ((from > 0) ? from : 0);
  var dropped = $thiz.d0(from);
  while (dropped.l()) {
    if ((!(!p.c(dropped.e())))) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).hz(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().F : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.f();
  while (($thiz.l() && those.l())) {
    if ((!$m_sr_BoxesRunTime$().k($thiz.e(), those.e()))) {
      return false;
    }
  }
  return ($thiz.l() === those.l());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.F = null;
  $n_sc_Iterator$ = this;
  this.F = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
$p.aO = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$p.bK = (function() {
  return this.F;
});
$p.aA = (function(source) {
  return source.f();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  gZ: 1,
  F: 1,
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
  $thiz.kz = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.kz = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.aA = (function(it) {
  return this.kz.aA(it);
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
$p.qR = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((x3) => (() => x3.f()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().lo(it))));
});
$p.aO = (function() {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((it$2$2) => $m_sc_View$().qR(it$2$2))));
});
$p.bK = (function() {
  return $m_sc_View$Empty$();
});
$p.aA = (function(source) {
  return this.qR(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  hf: 1,
  F: 1,
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
  this.aC = 0;
  this.aZ = null;
  this.c4 = null;
  this.bi = 0;
  this.bW = 0;
  this.ac = dataMap;
  this.aC = nodeMap;
  this.aZ = content;
  this.c4 = originalHashes;
  this.bi = size;
  this.bW = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $p;
$p.O = (function() {
  return this.bi;
});
$p.bJ = (function() {
  return this.bW;
});
$p.dq = (function(index) {
  return this.aZ.a[(index << 1)];
});
$p.dr = (function(index) {
  return this.aZ.a[((1 + (index << 1)) | 0)];
});
$p.lr = (function(index) {
  return new $c_T2(this.aZ.a[(index << 1)], this.aZ.a[((1 + (index << 1)) | 0)]);
});
$p.cw = (function(index) {
  return this.c4.a[index];
});
$p.d2 = (function(index) {
  return this.aZ.a[(((((-1) + this.aZ.a.length) | 0) - index) | 0)];
});
$p.l2 = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().cx(keyHash, shift);
  var bitpos = $m_sci_Node$().bT(mask);
  if (((this.ac & bitpos) !== 0)) {
    var index = $m_sci_Node$().bF(this.ac, mask, bitpos);
    if ($m_sr_BoxesRunTime$().k(key, this.dq(index))) {
      return this.dr(index);
    } else {
      throw new $c_ju_NoSuchElementException(("key not found: " + key));
    }
  } else if (((this.aC & bitpos) !== 0)) {
    return this.d2($m_sci_Node$().bF(this.aC, mask, bitpos)).l2(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.j4 = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().cx(keyHash, shift);
  var bitpos = $m_sci_Node$().bT(mask);
  if (((this.ac & bitpos) !== 0)) {
    var index = $m_sci_Node$().bF(this.ac, mask, bitpos);
    return ($m_sr_BoxesRunTime$().k(key, this.dq(index)) ? new $c_s_Some(this.dr(index)) : $m_s_None$());
  } else {
    return (((this.aC & bitpos) !== 0) ? this.d2($m_sci_Node$().bF(this.aC, mask, bitpos)).j4(key, originalHash, keyHash, ((5 + shift) | 0)) : $m_s_None$());
  }
});
$p.lq = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().cx(keyHash, shift);
  var bitpos = $m_sci_Node$().bT(mask);
  if (((this.ac & bitpos) !== 0)) {
    var index = $m_sci_Node$().bF(this.ac, mask, bitpos);
    return ($m_sr_BoxesRunTime$().k(key, this.dq(index)) ? this.dr(index) : f.L());
  } else {
    return (((this.aC & bitpos) !== 0) ? this.d2($m_sci_Node$().bF(this.aC, mask, bitpos)).lq(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.L());
  }
});
$p.lc = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().cx(keyHash, shift);
  var bitpos = $m_sci_Node$().bT(mask);
  if (((this.ac & bitpos) !== 0)) {
    var index = $m_sci_Node$().bF(this.ac, mask, bitpos);
    return ((this.c4.a[index] === originalHash) && $m_sr_BoxesRunTime$().k(key, this.dq(index)));
  } else {
    return (((this.aC & bitpos) !== 0) && this.d2($m_sci_Node$().bF(this.aC, mask, bitpos)).lc(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.m4 = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().cx(keyHash, shift);
  var bitpos = $m_sci_Node$().bT(mask);
  if (((this.ac & bitpos) !== 0)) {
    var index = $m_sci_Node$().bF(this.ac, mask, bitpos);
    var key0 = this.dq(index);
    var key0UnimprovedHash = this.cw(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().k(key0, key))) {
      if (replaceValue) {
        var value0 = this.dr(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.t1(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.dr(index);
      var key0Hash = $m_sc_Hashing$().bo(key0UnimprovedHash);
      return this.sX(bitpos, key0Hash, this.lM(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.aC & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().bF(this.aC, mask, bitpos);
    var subNode = this.d2(index$2);
    var subNodeNew$2 = subNode.rH(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.sZ(bitpos, subNode, subNodeNew$2));
  } else {
    return this.sV(bitpos, key, originalHash, keyHash, value);
  }
});
$p.lM = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [new $c_T2(key0, value0), new $c_T2(key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().cx(keyHash0, shift);
    var mask1 = $m_sci_Node$().cx(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().bT(mask0) | $m_sci_Node$().bT(mask1));
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key0, value0, key1, value1]), new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash) : new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key1, value1, key0, value0]), new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash));
    } else {
      var nodeMap = $m_sci_Node$().bT(mask0);
      var node = this.lM(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().gZ, node.O(), node.bJ());
    }
  }
});
$p.hE = (function() {
  return (this.aC !== 0);
});
$p.hJ = (function() {
  return $m_jl_Integer$().bA(this.aC);
});
$p.gm = (function() {
  return (this.ac !== 0);
});
$p.hO = (function() {
  return $m_jl_Integer$().bA(this.ac);
});
$p.cY = (function(bitpos) {
  return $m_jl_Integer$().bA((this.ac & (((-1) + bitpos) | 0)));
});
$p.fs = (function(bitpos) {
  return $m_jl_Integer$().bA((this.aC & (((-1) + bitpos) | 0)));
});
$p.t1 = (function(bitpos, newKey, newValue) {
  var dataIx = this.cY(bitpos);
  var idx = (dataIx << 1);
  var src = this.aZ;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.r(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.ac, this.aC, dst, this.c4, this.bi, this.bW);
});
$p.sZ = (function(bitpos, oldNode, newNode) {
  var idx = (((((-1) + this.aZ.a.length) | 0) - this.fs(bitpos)) | 0);
  var src = this.aZ;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.r(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.ac, this.aC, dst, this.c4, ((((this.bi - oldNode.O()) | 0) + newNode.O()) | 0), ((((this.bW - oldNode.bJ()) | 0) + newNode.bJ()) | 0));
});
$p.sV = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.cY(bitpos);
  var idx = (dataIx << 1);
  var src = this.aZ;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.r(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.r(idx, dst, destPos, length);
  var dstHashes = this.r4(this.c4, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.ac | bitpos), this.aC, dst, dstHashes, ((1 + this.bi) | 0), ((this.bW + keyHash) | 0));
});
$p.ur = (function(bitpos, keyHash, node) {
  var dataIx = this.cY(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.aZ.a.length) | 0) - this.fs(bitpos)) | 0);
  var src = this.aZ;
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
  var dstHashes = this.jd(this.c4, dataIx);
  this.ac = (this.ac ^ bitpos);
  this.aC = (this.aC | bitpos);
  this.aZ = dst;
  this.c4 = dstHashes;
  this.bi = (((((-1) + this.bi) | 0) + node.O()) | 0);
  this.bW = ((((this.bW - keyHash) | 0) + node.bJ()) | 0);
  return this;
});
$p.sX = (function(bitpos, keyHash, node) {
  var dataIx = this.cY(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.aZ.a.length) | 0) - this.fs(bitpos)) | 0);
  var src = this.aZ;
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
  var dstHashes = this.jd(this.c4, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.ac ^ bitpos), (this.aC | bitpos), dst, dstHashes, (((((-1) + this.bi) | 0) + node.O()) | 0), ((((this.bW - keyHash) | 0) + node.bJ()) | 0));
});
$p.U = (function(f) {
  var iN = $m_jl_Integer$().bA(this.ac);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.c(this.lr(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().bA(this.aC);
  var j = 0;
  while ((j < jN)) {
    this.d2(j).U(f);
    j = ((1 + j) | 0);
  }
});
$p.fn = (function(f) {
  var iN = $m_jl_Integer$().bA(this.ac);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.bn(this.dq(i$1), this.dr(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().bA(this.aC);
  var j = 0;
  while ((j < jN)) {
    this.d2(j).fn(f);
    j = ((1 + j) | 0);
  }
});
$p.n = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.bW === that.bW) && (this.aC === that.aC)) && (this.ac === that.ac)) && (this.bi === that.bi)) && $m_ju_Arrays$().j1(this.c4, that.c4))) {
      var a1 = this.aZ;
      var a2 = that.aZ;
      var length = this.aZ.a.length;
      if ((a1 === a2)) {
        return true;
      } else {
        var isEqual = true;
        var i = 0;
        while ((isEqual && (i < length))) {
          isEqual = $m_sr_BoxesRunTime$().k(a1.a[i], a2.a[i]);
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
$p.v = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.qy = (function() {
  var this$1 = this.aZ;
  var contentClone = this$1.j();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().bA(this.ac) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].qA();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.ac, this.aC, contentClone, this.c4.j(), this.bi, this.bW);
});
$p.qA = (function() {
  return this.qy();
});
$p.rH = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.m4(key, value, originalHash, hash, shift, replaceValue);
});
$p.hD = (function(index) {
  return this.d2(index);
});
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cn)));
}
var $d_sci_BitmapIndexedMapNode = new $TypeData().i($c_sci_BitmapIndexedMapNode, "scala.collection.immutable.BitmapIndexedMapNode", ({
  cn: 1,
  cD: 1,
  aG: 1
}));
/** @constructor */
function $c_sci_BitmapIndexedSetNode(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
  this.a3 = 0;
  this.aG = 0;
  this.bj = null;
  this.ck = null;
  this.bs = 0;
  this.c5 = 0;
  this.a3 = dataMap;
  this.aG = nodeMap;
  this.bj = content;
  this.ck = originalHashes;
  this.bs = size;
  this.c5 = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedSetNode.prototype = new $h_sci_SetNode();
$p.constructor = $c_sci_BitmapIndexedSetNode;
/** @constructor */
function $h_sci_BitmapIndexedSetNode() {
}
$h_sci_BitmapIndexedSetNode.prototype = $p;
$p.O = (function() {
  return this.bs;
});
$p.bJ = (function() {
  return this.c5;
});
$p.d4 = (function(index) {
  return this.bj.a[index];
});
$p.cw = (function(index) {
  return this.ck.a[index];
});
$p.d3 = (function(index) {
  return this.bj.a[(((((-1) + this.bj.a.length) | 0) - index) | 0)];
});
$p.hA = (function(element, originalHash, elementHash, shift) {
  var mask = $m_sci_Node$().cx(elementHash, shift);
  var bitpos = $m_sci_Node$().bT(mask);
  if (((this.a3 & bitpos) !== 0)) {
    var index = $m_sci_Node$().bF(this.a3, mask, bitpos);
    return ((this.ck.a[index] === originalHash) && $m_sr_BoxesRunTime$().k(element, this.d4(index)));
  }
  if (((this.aG & bitpos) !== 0)) {
    return this.d3($m_sci_Node$().bF(this.aG, mask, bitpos)).hA(element, originalHash, elementHash, ((5 + shift) | 0));
  }
  return false;
});
$p.rF = (function(element, originalHash, elementHash, shift) {
  var mask = $m_sci_Node$().cx(elementHash, shift);
  var bitpos = $m_sci_Node$().bT(mask);
  if (((this.a3 & bitpos) !== 0)) {
    var index = $m_sci_Node$().bF(this.a3, mask, bitpos);
    var element0 = this.d4(index);
    if (Object.is(element0, element)) {
      return this;
    } else {
      var element0UnimprovedHash = this.cw(index);
      var element0Hash = $m_sc_Hashing$().bo(element0UnimprovedHash);
      if (((originalHash === element0UnimprovedHash) && $m_sr_BoxesRunTime$().k(element0, element))) {
        return this;
      } else {
        return this.sY(bitpos, element0Hash, this.lL(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0)));
      }
    }
  }
  if (((this.aG & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().bF(this.aG, mask, bitpos);
    var subNode = this.d3(index$2);
    var subNodeNew$2 = subNode.rG(element, originalHash, elementHash, ((5 + shift) | 0));
    if ((subNode === subNodeNew$2)) {
      return this;
    } else {
      return this.t0(bitpos, subNode, subNodeNew$2);
    }
  }
  return this.sW(bitpos, element, originalHash, elementHash);
});
$p.lL = (function(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionSetNode(originalKeyHash0, keyHash0, $m_sci_Vector$().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [key0, key1])));
  } else {
    var mask0 = $m_sci_Node$().cx(keyHash0, shift);
    var mask1 = $m_sci_Node$().cx(keyHash1, shift);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().bT(mask0) | $m_sci_Node$().bT(mask1));
      var newCachedHashCode = ((keyHash0 + keyHash1) | 0);
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedSetNode(dataMap, 0, new $ac_O([key0, key1]), new $ac_I(new Int32Array([originalKeyHash0, originalKeyHash1])), 2, newCachedHashCode) : new $c_sci_BitmapIndexedSetNode(dataMap, 0, new $ac_O([key1, key0]), new $ac_I(new Int32Array([originalKeyHash1, originalKeyHash0])), 2, newCachedHashCode));
    } else {
      var nodeMap = $m_sci_Node$().bT(mask0);
      var node = this.lL(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedSetNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().gZ, node.O(), node.bJ());
    }
  }
});
$p.gm = (function() {
  return (this.a3 !== 0);
});
$p.hO = (function() {
  return $m_jl_Integer$().bA(this.a3);
});
$p.hE = (function() {
  return (this.aG !== 0);
});
$p.hJ = (function() {
  return $m_jl_Integer$().bA(this.aG);
});
$p.cY = (function(bitpos) {
  return $m_jl_Integer$().bA((this.a3 & (((-1) + bitpos) | 0)));
});
$p.fs = (function(bitpos) {
  return $m_jl_Integer$().bA((this.aG & (((-1) + bitpos) | 0)));
});
$p.t0 = (function(bitpos, oldNode, newNode) {
  var idx = (((((-1) + this.bj.a.length) | 0) - this.fs(bitpos)) | 0);
  var src = this.bj;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.r(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedSetNode(this.a3, this.aG, dst, this.ck, ((((this.bs - oldNode.O()) | 0) + newNode.O()) | 0), ((((this.c5 - oldNode.bJ()) | 0) + newNode.bJ()) | 0));
});
$p.sW = (function(bitpos, key, originalHash, elementHash) {
  var dataIx = this.cY(bitpos);
  var src = this.bj;
  var dst = new $ac_O(((1 + src.a.length) | 0));
  src.r(0, dst, 0, dataIx);
  dst.a[dataIx] = key;
  var destPos = ((1 + dataIx) | 0);
  var length = ((src.a.length - dataIx) | 0);
  src.r(dataIx, dst, destPos, length);
  var dstHashes = this.r4(this.ck, dataIx, originalHash);
  return new $c_sci_BitmapIndexedSetNode((this.a3 | bitpos), this.aG, dst, dstHashes, ((1 + this.bs) | 0), ((this.c5 + elementHash) | 0));
});
$p.sY = (function(bitpos, elementHash, node) {
  var dataIx = this.cY(bitpos);
  var idxNew = (((((-1) + this.bj.a.length) | 0) - this.fs(bitpos)) | 0);
  var src = this.bj;
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
  var dstHashes = this.jd(this.ck, dataIx);
  return new $c_sci_BitmapIndexedSetNode((this.a3 ^ bitpos), (this.aG | bitpos), dst, dstHashes, (((((-1) + this.bs) | 0) + node.O()) | 0), ((((this.c5 - elementHash) | 0) + node.bJ()) | 0));
});
$p.us = (function(bitpos, keyHash, node) {
  var dataIx = this.cY(bitpos);
  var idxNew = (((((-1) + this.bj.a.length) | 0) - this.fs(bitpos)) | 0);
  var src = this.bj;
  var srcPos = ((1 + dataIx) | 0);
  var dest = this.bj;
  var length = ((idxNew - dataIx) | 0);
  src.r(srcPos, dest, dataIx, length);
  this.bj.a[idxNew] = node;
  this.a3 = (this.a3 ^ bitpos);
  this.aG = (this.aG | bitpos);
  this.ck = this.jd(this.ck, dataIx);
  this.bs = (((((-1) + this.bs) | 0) + node.O()) | 0);
  this.c5 = ((((this.c5 - keyHash) | 0) + node.bJ()) | 0);
  return this;
});
$p.U = (function(f) {
  var thisPayloadArity = $m_jl_Integer$().bA(this.a3);
  var i$1 = 0;
  while ((i$1 < thisPayloadArity)) {
    f.c(this.d4(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var thisNodeArity = $m_jl_Integer$().bA(this.aG);
  var j = 0;
  while ((j < thisNodeArity)) {
    this.d3(j).U(f);
    j = ((1 + j) | 0);
  }
});
$p.m1 = (function(that, shift) {
  if ((this === that)) {
    return true;
  } else if ((!(that instanceof $c_sci_HashCollisionSetNode))) {
    if ((that instanceof $c_sci_BitmapIndexedSetNode)) {
      var thisBitmap = (this.a3 | this.aG);
      var nodeBitmap = (that.a3 | that.aG);
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
        var bitpos = $m_sci_Node$().bT(bitsToSkip);
        if (((this.a3 & bitpos) !== 0)) {
          if (((that.a3 & bitpos) !== 0)) {
            isValidSubset = $m_sr_BoxesRunTime$().k(this.d4($m_sci_Node$().fo(this.a3, bitpos)), that.d4($m_sci_Node$().fo(that.a3, bitpos)));
          } else {
            var thisDataIndex = $m_sci_Node$().fo(this.a3, bitpos);
            var payload = this.d4(thisDataIndex);
            var subNode = that.d3($m_sci_Node$().fo(that.aG, bitpos));
            var elementUnimprovedHash = this.cw(thisDataIndex);
            var elementHash = $m_sc_Hashing$().bo(elementUnimprovedHash);
            isValidSubset = subNode.hA(payload, elementUnimprovedHash, elementHash, ((5 + shift) | 0));
          }
        } else if (((that.a3 & bitpos) === 0)) {
          var subNode0 = this.d3($m_sci_Node$().fo(this.aG, bitpos));
          var subNode1 = that.d3($m_sci_Node$().fo(that.aG, bitpos));
          isValidSubset = subNode0.m1(subNode1, ((5 + shift) | 0));
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
$p.n = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedSetNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.c5 === that.c5) && (this.aG === that.aG)) && (this.a3 === that.a3)) && (this.bs === that.bs)) && $m_ju_Arrays$().j1(this.ck, that.ck))) {
      var a1 = this.bj;
      var a2 = that.bj;
      var length = this.bj.a.length;
      if ((a1 === a2)) {
        return true;
      } else {
        var isEqual = true;
        var i = 0;
        while ((isEqual && (i < length))) {
          isEqual = $m_sr_BoxesRunTime$().k(a1.a[i], a2.a[i]);
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
$p.v = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.x = (function() {
  return $m_sc_StringOps$().tF("BitmapIndexedSetNode(size=%s, dataMap=%x, nodeMap=%x)", $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [this.bs, this.a3, this.aG]));
});
$p.qz = (function() {
  var this$1 = this.bj;
  var contentClone = this$1.j();
  var contentLength = contentClone.a.length;
  var i$1 = $m_jl_Integer$().bA(this.a3);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].qB();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedSetNode(this.a3, this.aG, contentClone, this.ck.j(), this.bs, this.c5);
});
$p.lk = (function(f) {
  var iN = $m_jl_Integer$().bA(this.a3);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.bn(this.d4(i$1), this.cw(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().bA(this.aG);
  var j = 0;
  while ((j < jN)) {
    this.d3(j).lk(f);
    j = ((1 + j) | 0);
  }
});
$p.qB = (function() {
  return this.qz();
});
$p.rG = (function(element, originalHash, hash, shift) {
  return this.rF(element, originalHash, hash, shift);
});
$p.hD = (function(index) {
  return this.d3(index);
});
function $isArrayOf_sci_BitmapIndexedSetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.co)));
}
var $d_sci_BitmapIndexedSetNode = new $TypeData().i($c_sci_BitmapIndexedSetNode, "scala.collection.immutable.BitmapIndexedSetNode", ({
  co: 1,
  cI: 1,
  aG: 1
}));
/** @constructor */
function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
  this.kD = 0;
  this.em = 0;
  this.aJ = null;
  this.kD = originalHash;
  this.em = hash;
  this.aJ = content;
  $m_s_Predef$().ro((this.aJ.m() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.go = (function(key) {
  var iter = this.aJ.f();
  var i = 0;
  while (iter.l()) {
    if ($m_sr_BoxesRunTime$().k(iter.e().bm(), key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.O = (function() {
  return this.aJ.m();
});
$p.l2 = (function(key, originalHash, hash, shift) {
  var this$1 = this.j4(key, originalHash, hash, shift);
  if (this$1.b()) {
    $m_sc_Iterator$().F.e();
    throw new $c_jl_ClassCastException();
  } else {
    return this$1.J();
  }
});
$p.j4 = (function(key, originalHash, hash, shift) {
  if ((this.em === hash)) {
    var index = this.go(key);
    return ((index >= 0) ? new $c_s_Some(this.aJ.u(index).bd()) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.lq = (function(key, originalHash, hash, shift, f) {
  if ((this.em === hash)) {
    var x1 = this.go(key);
    return ((x1 === (-1)) ? f.L() : this.aJ.u(x1).bd());
  } else {
    return f.L();
  }
});
$p.lc = (function(key, originalHash, hash, shift) {
  return ((this.em === hash) && (this.go(key) >= 0));
});
$p.rH = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.go(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.aJ.u(index).bd(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.aJ.ea(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.aJ.bz(new $c_T2(key, value))));
});
$p.hE = (function() {
  return false;
});
$p.hJ = (function() {
  return 0;
});
$p.d2 = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.gm = (function() {
  return true;
});
$p.hO = (function() {
  return this.aJ.m();
});
$p.dq = (function(index) {
  return this.aJ.u(index).bm();
});
$p.dr = (function(index) {
  return this.aJ.u(index).bd();
});
$p.lr = (function(index) {
  return this.aJ.u(index);
});
$p.cw = (function(index) {
  return this.kD;
});
$p.U = (function(f) {
  this.aJ.U(f);
});
$p.fn = (function(f) {
  this.aJ.U(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.bm();
      var v = x0$1$2$2.bd();
      return f.bn(k, v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  })));
});
$p.n = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.em === that.em) && (this.aJ.m() === that.aJ.m()))) {
      var iter = this.aJ.f();
      while (iter.l()) {
        var x1$2 = iter.e();
        if ((x1$2 === null)) {
          throw new $c_s_MatchError(x1$2);
        }
        var key = x1$2.bm();
        var value = x1$2.bd();
        var index = that.go(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().k(value, that.aJ.u(index).bd())))) {
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
$p.v = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.bJ = (function() {
  return Math.imul(this.aJ.m(), this.em);
});
$p.qA = (function() {
  return new $c_sci_HashCollisionMapNode(this.kD, this.em, this.aJ);
});
$p.hD = (function(index) {
  return this.d2(index);
});
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cp)));
}
var $d_sci_HashCollisionMapNode = new $TypeData().i($c_sci_HashCollisionMapNode, "scala.collection.immutable.HashCollisionMapNode", ({
  cp: 1,
  cD: 1,
  aG: 1
}));
/** @constructor */
function $c_sci_HashCollisionSetNode(originalHash, hash, content) {
  this.iA = 0;
  this.fW = 0;
  this.aQ = null;
  this.iA = originalHash;
  this.fW = hash;
  this.aQ = content;
  $m_s_Predef$().ro((this.aQ.m() >= 2));
}
$p = $c_sci_HashCollisionSetNode.prototype = new $h_sci_SetNode();
$p.constructor = $c_sci_HashCollisionSetNode;
/** @constructor */
function $h_sci_HashCollisionSetNode() {
}
$h_sci_HashCollisionSetNode.prototype = $p;
$p.hA = (function(element, originalHash, hash, shift) {
  return ((this.fW === hash) && $f_sc_SeqOps__contains__O__Z(this.aQ, element));
});
$p.rG = (function(element, originalHash, hash, shift) {
  return (this.hA(element, originalHash, hash, shift) ? this : new $c_sci_HashCollisionSetNode(originalHash, hash, this.aQ.bz(element)));
});
$p.hE = (function() {
  return false;
});
$p.hJ = (function() {
  return 0;
});
$p.d3 = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.gm = (function() {
  return true;
});
$p.hO = (function() {
  return this.aQ.m();
});
$p.d4 = (function(index) {
  return this.aQ.u(index);
});
$p.cw = (function(index) {
  return this.iA;
});
$p.O = (function() {
  return this.aQ.m();
});
$p.U = (function(f) {
  var iter = this.aQ.f();
  while (iter.l()) {
    f.c(iter.e());
  }
});
$p.bJ = (function() {
  return Math.imul(this.aQ.m(), this.fW);
});
$p.m1 = (function(that, shift) {
  if ((this === that)) {
    return true;
  } else if ((that instanceof $c_sci_HashCollisionSetNode)) {
    if ((this.aQ.m() <= that.aQ.m())) {
      var this$1 = this.aQ;
      var eta$0$1 = that.aQ;
      var res = true;
      var it = this$1.f();
      while ((res && it.l())) {
        res = $f_sc_SeqOps__contains__O__Z(eta$0$1, it.e());
      }
      return res;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.n = (function(that) {
  if ((that instanceof $c_sci_HashCollisionSetNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.fW === that.fW) && (this.aQ.m() === that.aQ.m()))) {
      var this$3 = this.aQ;
      var eta$0$1 = that.aQ;
      var res = true;
      var it = this$3.f();
      while ((res && it.l())) {
        res = $f_sc_SeqOps__contains__O__Z(eta$0$1, it.e());
      }
      return res;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.v = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.lk = (function(f) {
  var iter = this.aQ.f();
  while (iter.l()) {
    var next = iter.e();
    f.bn(next, this.iA);
  }
});
$p.qB = (function() {
  return new $c_sci_HashCollisionSetNode(this.iA, this.fW, this.aQ);
});
$p.hD = (function(index) {
  return this.d3(index);
});
function $isArrayOf_sci_HashCollisionSetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cq)));
}
var $d_sci_HashCollisionSetNode = new $TypeData().i($c_sci_HashCollisionSetNode, "scala.collection.immutable.HashCollisionSetNode", ({
  cq: 1,
  cI: 1,
  aG: 1
}));
/** @constructor */
function $c_sci_HashMap$() {
  this.kE = null;
  $n_sci_HashMap$ = this;
  this.kE = new $c_sci_HashMap($m_sci_MapNode$().pA);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.tH = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().l0(source).lU());
});
$p.aA = (function(it) {
  return this.tH(it);
});
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  hp: 1,
  b9: 1,
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
  this.hb = null;
  $n_sci_HashSet$ = this;
  this.hb = new $c_sci_HashSet($m_sci_SetNode$().pF);
}
$p = $c_sci_HashSet$.prototype = new $h_O();
$p.constructor = $c_sci_HashSet$;
/** @constructor */
function $h_sci_HashSet$() {
}
$h_sci_HashSet$.prototype = $p;
$p.tI = (function(source) {
  return ((source instanceof $c_sci_HashSet) ? source : ((source.p() === 0) ? this.hb : new $c_sci_HashSetBuilder().l1(source).lV()));
});
$p.aO = (function() {
  return new $c_sci_HashSetBuilder();
});
$p.aA = (function(source) {
  return this.tI(source);
});
$p.bK = (function() {
  return this.hb;
});
var $d_sci_HashSet$ = new $TypeData().i($c_sci_HashSet$, "scala.collection.immutable.HashSet$", ({
  hs: 1,
  F: 1,
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
  this.px = null;
  this.py = null;
  this.px = head;
  this.py = tail;
}
$p = $c_sci_LazyList$State$Cons.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$State$Cons;
/** @constructor */
function $h_sci_LazyList$State$Cons() {
}
$h_sci_LazyList$State$Cons.prototype = $p;
$p.o = (function() {
  return this.px;
});
$p.aB = (function() {
  return this.py;
});
var $d_sci_LazyList$State$Cons = new $TypeData().i($c_sci_LazyList$State$Cons, "scala.collection.immutable.LazyList$State$Cons", ({
  hC: 1,
  cv: 1,
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
$p.lv = (function() {
  throw new $c_ju_NoSuchElementException("head of empty lazy list");
});
$p.aB = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
});
$p.o = (function() {
  this.lv();
});
var $d_sci_LazyList$State$Empty$ = new $TypeData().i($c_sci_LazyList$State$Empty$, "scala.collection.immutable.LazyList$State$Empty$", ({
  hD: 1,
  cv: 1,
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
$p.qS = (function(it) {
  if ($is_sci_Iterable(it)) {
    if (it.b()) {
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
  return new $c_sci_MapBuilderImpl().q4(it).rp();
});
$p.aA = (function(it) {
  return this.qS(it);
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  hH: 1,
  b9: 1,
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
$p.tK = (function(it) {
  return ((it.p() === 0) ? $m_sci_Set$EmptySet$() : ((it instanceof $c_sci_HashSet) ? it : (false ? it : ((it instanceof $c_sci_Set$Set1) ? it : ((it instanceof $c_sci_Set$Set2) ? it : ((it instanceof $c_sci_Set$Set3) ? it : ((it instanceof $c_sci_Set$Set4) ? it : ((it instanceof $c_sci_HashMap$HashKeySet) ? it : ((it instanceof $c_sci_MapOps$ImmutableKeySet) ? it : new $c_sci_SetBuilderImpl().q5(it).rq())))))))));
});
$p.aO = (function() {
  return new $c_sci_SetBuilderImpl();
});
$p.aA = (function(source) {
  return this.tK(source);
});
$p.bK = (function() {
  return $m_sci_Set$EmptySet$();
});
var $d_sci_Set$ = new $TypeData().i($c_sci_Set$, "scala.collection.immutable.Set$", ({
  i2: 1,
  F: 1,
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
    $thiz.bq(((that < 0) ? 0 : that));
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
$p.tL = (function(it) {
  var k = it.p();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).q7(it);
});
$p.aO = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.bK = (function() {
  return $ct_scm_HashSet__(new $c_scm_HashSet());
});
$p.aA = (function(source) {
  return this.tL(source);
});
var $d_scm_HashSet$ = new $TypeData().i($c_scm_HashSet$, "scala.collection.mutable.HashSet$", ({
  iz: 1,
  F: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iX)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(f) {
  this.pR = null;
  this.pR = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855() {
}
$h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = $p;
$p.L = (function() {
  return (0, this.pR)();
});
var $d_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855 = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855, "scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855", ({
  jn: 1,
  d7: 1,
  b7: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(f) {
  this.pS = null;
  this.pS = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28() {
}
$h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = $p;
$p.c = (function(x0) {
  return (0, this.pS)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28, "scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28", ({
  jo: 1,
  bk: 1,
  i: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(f) {
  this.pT = null;
  this.pT = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc() {
}
$h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = $p;
$p.bn = (function(x0, x1) {
  return (0, this.pT)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc, "scala.runtime.AbstractFunction2.$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc", ({
  jp: 1,
  d8: 1,
  b8: 1
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
$p.x = (function() {
  return "<function1>";
});
$p.c = (function(x) {
  return this.bI(x, $m_s_PartialFunction$().iq);
});
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  jy: 1,
  o: 1,
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
$p.qV = (function(f) {
  return ((arg1$2) => f.c(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  jF: 1,
  jG: 1,
  jH: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.jY)));
}
/** @constructor */
function $c_LSIAdversaryTool$AdversarySelector(adversary, level) {
  this.db = null;
  this.cy = 0;
  this.db = adversary;
  this.cy = level;
}
$p = $c_LSIAdversaryTool$AdversarySelector.prototype = new $h_O();
$p.constructor = $c_LSIAdversaryTool$AdversarySelector;
/** @constructor */
function $h_LSIAdversaryTool$AdversarySelector() {
}
$h_LSIAdversaryTool$AdversarySelector.prototype = $p;
$p.bp = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().i(acc, $f_T__hashCode__I("AdversarySelector"));
  acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().R(this.db));
  acc = $m_sr_Statics$().i(acc, this.cy);
  return $m_sr_Statics$().G(acc, 2);
});
$p.n = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_LSIAdversaryTool$AdversarySelector)) {
    if ((this.cy === x$0.cy)) {
      var x = this.db;
      var x$2 = x$0.db;
      return ((x === null) ? (x$2 === null) : x.n(x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.x = (function() {
  return $m_sr_ScalaRunTime$().gb(this);
});
$p.b6 = (function() {
  return 2;
});
$p.b8 = (function() {
  return "AdversarySelector";
});
$p.b7 = (function(n) {
  if ((n === 0)) {
    return this.db;
  }
  if ((n === 1)) {
    return this.cy;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_LSIAdversaryTool$AdversarySelector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bl)));
}
var $d_LSIAdversaryTool$AdversarySelector = new $TypeData().i($c_LSIAdversaryTool$AdversarySelector, "SIAdversaryTool$AdversarySelector", ({
  bl: 1,
  d: 1,
  B: 1,
  a: 1
}));
/** @constructor */
function $c_Ladversaries_Adversary(name, rules, lossCondition, escalation, fear) {
  this.eb = null;
  this.fy = null;
  this.gE = null;
  this.gC = null;
  this.gD = null;
  this.eb = name;
  this.fy = rules;
  this.gE = lossCondition;
  this.gC = escalation;
  this.gD = fear;
}
$p = $c_Ladversaries_Adversary.prototype = new $h_O();
$p.constructor = $c_Ladversaries_Adversary;
/** @constructor */
function $h_Ladversaries_Adversary() {
}
$h_Ladversaries_Adversary.prototype = $p;
$p.bp = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().cM(this, (-889275714), false);
});
$p.n = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Ladversaries_Adversary)) {
    if ((this.eb === x$0.eb)) {
      var x = this.fy;
      var x$2 = x$0.fy;
      var $x_2 = ((x === null) ? (x$2 === null) : x.n(x$2));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$3 = this.gE;
      var x$4 = x$0.gE;
      var $x_1 = ((x$3 === null) ? (x$4 === null) : x$3.n(x$4));
    } else {
      var $x_1 = false;
    }
    if (($x_1 && (this.gC === x$0.gC))) {
      var x$5 = this.gD;
      var x$6 = x$0.gD;
      return ((x$5 === null) ? (x$6 === null) : x$5.n(x$6));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.x = (function() {
  return $m_sr_ScalaRunTime$().gb(this);
});
$p.b6 = (function() {
  return 5;
});
$p.b8 = (function() {
  return "Adversary";
});
$p.b7 = (function(n) {
  switch (n) {
    case 0: {
      return this.eb;
      break;
    }
    case 1: {
      return this.fy;
      break;
    }
    case 2: {
      return this.gE;
      break;
    }
    case 3: {
      return this.gC;
      break;
    }
    case 4: {
      return this.gD;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Ladversaries_Adversary(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bm)));
}
var $d_Ladversaries_Adversary = new $TypeData().i($c_Ladversaries_Adversary, "adversaries.Adversary", ({
  bm: 1,
  d: 1,
  B: 1,
  a: 1
}));
/** @constructor */
function $c_Ladversaries_Rule(level, stage, text, removeAboveLevel) {
  this.dv = 0;
  this.dw = null;
  this.eR = null;
  this.eQ = null;
  this.dv = level;
  this.dw = stage;
  this.eR = text;
  this.eQ = removeAboveLevel;
}
$p = $c_Ladversaries_Rule.prototype = new $h_O();
$p.constructor = $c_Ladversaries_Rule;
/** @constructor */
function $h_Ladversaries_Rule() {
}
$h_Ladversaries_Rule.prototype = $p;
$p.bp = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().i(acc, $f_T__hashCode__I("Rule"));
  acc = $m_sr_Statics$().i(acc, this.dv);
  acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().R(this.dw));
  acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().R(this.eR));
  acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().R(this.eQ));
  return $m_sr_Statics$().G(acc, 4);
});
$p.n = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Ladversaries_Rule)) {
    if ((this.dv === x$0.dv)) {
      var x = this.dw;
      var x$2 = x$0.dw;
      var $x_1 = (x === x$2);
    } else {
      var $x_1 = false;
    }
    if (($x_1 && (this.eR === x$0.eR))) {
      var x$3 = this.eQ;
      var x$4 = x$0.eQ;
      return ((x$3 === null) ? (x$4 === null) : x$3.n(x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.x = (function() {
  return $m_sr_ScalaRunTime$().gb(this);
});
$p.b6 = (function() {
  return 4;
});
$p.b8 = (function() {
  return "Rule";
});
$p.b7 = (function(n) {
  switch (n) {
    case 0: {
      return this.dv;
      break;
    }
    case 1: {
      return this.dw;
      break;
    }
    case 2: {
      return this.eR;
      break;
    }
    case 3: {
      return this.eQ;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Ladversaries_Rule(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bn)));
}
var $d_Ladversaries_Rule = new $TypeData().i($c_Ladversaries_Rule, "adversaries.Rule", ({
  bn: 1,
  d: 1,
  B: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2(parentParam$2, onTryParam$1, outer) {
  this.mp = null;
  this.jv = null;
  this.mp = onTryParam$1;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.jv = parentParam$2;
}
$p = $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2;
/** @constructor */
function $h_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2() {
}
$h_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2.prototype = $p;
$p.hM = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.jc = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.gu = (function(nextValue, transaction) {
  this.mp.bn(nextValue, transaction);
});
var $d_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2 = new $TypeData().i($c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2, "com.raquo.airstream.common.InternalParentObserver$$anon$2", ({
  dw: 1,
  aD: 1,
  du: 1,
  bq: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNextParam$2, handleObserverErrors$3, onErrorParam$2, outer) {
  this.mu = null;
  this.ms = false;
  this.jx = null;
  this.mt = null;
  this.mu = onNextParam$2;
  this.ms = handleObserverErrors$3;
  this.jx = onErrorParam$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.mt = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $p;
$p.e6 = (function() {
  return this.mt;
});
$p.e2 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.ft = (function(nextValue) {
  try {
    this.mu.c(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.ms) {
      this.hL(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cN(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.hL = (function(error) {
  try {
    if (this.jx.c0(error)) {
      this.jx.c(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cN(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cN(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.eL = (function(nextValue) {
  nextValue.cv(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((error) => {
    this.hL(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue$2) => {
    this.ft(nextValue$2);
  })));
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$8 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$8, "com.raquo.airstream.core.Observer$$anon$8", ({
  dB: 1,
  aI: 1,
  Y: 1,
  aW: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTryParam$2, handleObserverErrors$4, outer) {
  this.jy = null;
  this.mv = false;
  this.mw = null;
  this.jy = onTryParam$2;
  this.mv = handleObserverErrors$4;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.mw = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $p;
$p.e6 = (function() {
  return this.mw;
});
$p.e2 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.ft = (function(nextValue) {
  this.eL(new $c_s_util_Success(nextValue));
});
$p.hL = (function(error) {
  this.eL(new $c_s_util_Failure(error));
});
$p.eL = (function(nextValue) {
  try {
    if (this.jy.c0(nextValue)) {
      this.jy.c(nextValue);
    } else {
      nextValue.cv(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cN(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.mv && nextValue.r5())) {
      this.hL(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.cv(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((originalError) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cN(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError));
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cN(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
      })));
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$9 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$9, "com.raquo.airstream.core.Observer$$anon$9", ({
  dC: 1,
  aI: 1,
  Y: 1,
  aW: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.nC = null;
  this.nD = false;
  this.rK = null;
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
$p.vn = (function() {
  if ((!this.nD)) {
    this.nC = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.nD = true;
  }
  return this.nC;
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$svg$, "com.raquo.laminar.api.Laminar$svg$", ({
  el: 1,
  eI: 1,
  eu: 1,
  ew: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$() {
  this.w = null;
  $n_Lcom_raquo_laminar_api_package$ = this;
  this.w = new $c_Lcom_raquo_laminar_api_package$$anon$1();
}
$p = $c_Lcom_raquo_laminar_api_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$() {
}
$h_Lcom_raquo_laminar_api_package$.prototype = $p;
var $d_Lcom_raquo_laminar_api_package$ = new $TypeData().i($c_Lcom_raquo_laminar_api_package$, "com.raquo.laminar.api.package$", ({
  ep: 1,
  bz: 1,
  bE: 1,
  by: 1
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
  this.oq = null;
  this.os = false;
  this.or = null;
  this.jT = null;
  this.oq = initialContext;
  this.os = preferStrictMode;
  this.or = insertFn;
  this.jT = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.l9 = (function(element) {
  var this$1 = this.oq;
  var insertContext = (this$1.b() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().v4(element, this.os, this.jT) : this$1.J());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((mountContext) => this.or.l3(insertContext, mountContext.k0, this.jT)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().hV(element.cQ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.dn = (function(element) {
  this.l9(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  eL: 1,
  Z: 1,
  eP: 1,
  eM: 1
}));
function $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__($thiz, name, prefixes) {
  $thiz.fG = name;
  $thiz.fH = prefixes;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_StyleProp() {
  this.fG = null;
  this.fH = null;
}
$p = $c_Lcom_raquo_laminar_keys_StyleProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_StyleProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_StyleProp() {
}
$h_Lcom_raquo_laminar_keys_StyleProp.prototype = $p;
$p.g8 = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, $dp_toString__T(value), new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, styleProp, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().ve(element, styleProp, value$2);
  })));
});
$p.ho = (function(values, ev) {
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.eM(), new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((el, v, _$1) => {
    $m_Lcom_raquo_laminar_DomApi$().vc(el, this, v);
  })));
});
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.oH = null;
  this.k4 = null;
  this.oH = $m_s_None$();
  this.k4 = $m_Lcom_raquo_laminar_DomApi$().tb(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.hR = (function(maybeNextParent) {
  this.oH = maybeNextParent;
});
$p.hX = (function(maybeNextParent) {
});
$p.dn = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gd(parentNode, this, (void 0));
});
$p.aP = (function() {
  return this.k4;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  fh: 1,
  aJ: 1,
  Z: 1,
  b4: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.oL = null;
  this.k9 = null;
  this.oL = $m_s_None$();
  this.k9 = $m_Lcom_raquo_laminar_DomApi$().te(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.hR = (function(maybeNextParent) {
  this.oL = maybeNextParent;
});
$p.hX = (function(maybeNextParent) {
});
$p.dn = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gd(parentNode, this, (void 0));
});
$p.vt = (function() {
  return this.k9.data;
});
$p.aP = (function() {
  return this.k9;
});
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_TextNode, "com.raquo.laminar.nodes.TextNode", ({
  fn: 1,
  aJ: 1,
  Z: 1,
  b4: 1
}));
function $isArrayOf_Ljava_io_IOException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fu)));
}
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  fy: 1,
  fC: 1,
  o: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bK)));
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  bK: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bM)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  bM: 1,
  a: 1,
  aa: 1,
  a5: 1
}), ((x) => (x instanceof $Char)));
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fF)));
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fG)));
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
  o: 1,
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
$p.qa = (function(str) {
  var str$1 = $m_jl_String$().uv(str, 0, str.a.length);
  this.s = (("" + this.s) + str$1);
  return this;
});
$p.x = (function() {
  return this.s;
});
$p.m = (function() {
  return this.s.length;
});
$p.qs = (function(index) {
  return this.s.charCodeAt(index);
});
$p.r0 = (function(srcBegin, srcEnd, dst, dstBegin) {
  $f_T__getChars__I__I__AC__I__V(this.s, srcBegin, srcEnd, dst, dstBegin);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  fQ: 1,
  b5: 1,
  fv: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fT)));
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fW)));
}
function $isArrayOf_Ljava_math_BigDecimal(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fY)));
}
function $isArrayOf_Ljava_math_BigInteger(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fZ)));
}
function $p_ju_Formatter__sendToDest__T__V($thiz, s) {
  if (($thiz.eY === null)) {
    $thiz.eg = (("" + $thiz.eg) + s);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__V($thiz, s1, s2) {
  if (($thiz.eY === null)) {
    $thiz.eg = ((("" + $thiz.eg) + s1) + s2);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s1, s2]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__T__V($thiz, s1, s2, s3) {
  if (($thiz.eY === null)) {
    $thiz.eg = (($thiz.eg + (("" + s1) + s2)) + s3);
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
      var this$2 = $thiz.eY;
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
  if ($thiz.kk) {
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
    var re = $m_ju_Formatter$().oY;
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
        $thiz.lE(flags);
      }
      $p_ju_Formatter__sendToDest__T__V($thiz, "\n");
    } else if ((conversion$2 === 37)) {
      if ((precision !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.lE(flags);
      }
      if ((((1 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((-2) & flags) !== 0)) {
        $thiz.j7(37, flags, (-2));
      }
      $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, "%");
    } else {
      var conversionLower = (((256 & flags) !== 0) ? (65535 & ((32 + conversion$2) | 0)) : conversion$2);
      var illegalFlags = $m_ju_Formatter$().oX.a[(((-97) + conversionLower) | 0)];
      if (((illegalFlags === (-1)) || (((256 & flags) & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion$2);
      }
      if ((((17 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.lE(flags);
      }
      if (((precision !== (-1)) && ((512 & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if (((flags & illegalFlags) !== 0)) {
        $thiz.j7(conversionLower, flags, illegalFlags);
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
        arg.w7($thiz, formattableFlags, width, precision);
      } else {
        if (((2 & flags) !== 0)) {
          $thiz.j7(conversionLower, flags, 2);
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
          $thiz.hG(conversionLower, arg);
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
        var $x_3 = $m_RTLong$().lP(t.q, t.t);
      } else {
        if ((!false)) {
          $thiz.hG(conversionLower, arg);
        }
        var $x_3 = arg.x();
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
        $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, arg.jj(radix), prefix);
      } else {
        if ($isInt(arg)) {
          var x2$5 = (arg | 0);
          var str$6 = (isOctal ? (+(x2$5 >>> 0.0)).toString(8) : (+(x2$5 >>> 0.0)).toString(16));
        } else {
          if ((!(arg instanceof $c_RTLong))) {
            $thiz.hG(conversionLower, arg);
          }
          var t$1 = $uJ(arg);
          var lo$1 = t$1.q;
          var hi$1 = t$1.t;
          var str$6 = (isOctal ? $m_jl_Long$().ud(lo$1, hi$1) : $m_jl_Long$().r7(lo$1, hi$1));
        }
        if (((76 & flags) !== 0)) {
          $thiz.j7(conversionLower, flags, 76);
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
          $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().uf(x2$6), flags, precision, conversionLower, localeInfo, width);
        }
      } else if (false) {
        $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().ue(arg), flags, precision, conversionLower, localeInfo, width);
      } else {
        $thiz.hG(conversionLower, arg);
      }
      break;
    }
    case 97: {
      if (((typeof arg) === "number")) {
        $p_ju_Formatter__formatHexFloatingPoint__I__I__I__D__V($thiz, flags, width, precision, (+arg));
      } else {
        $thiz.hG(conversionLower, arg);
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
  var rounded = x.rr(((1 + digitsAfterDot) | 0));
  var signStr = (rounded.dy ? "-" : "");
  var intStr = rounded.dz;
  var fractionalDigitCount = (((-1) + intStr.length) | 0);
  var missingZeros = ((digitsAfterDot - fractionalDigitCount) | 0);
  var integerPart = intStr.substring(0, 1);
  var fractionalPart = (("" + intStr.substring(1)) + $m_ju_Formatter$().lD(missingZeros));
  var significandStr = (((fractionalPart === "") && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + fractionalPart));
  var exponent = ((fractionalDigitCount - rounded.dc) | 0);
  var exponentSign = ((exponent < 0) ? "-" : "+");
  var this$2 = ((exponent < 0) ? ((-exponent) | 0) : exponent);
  var exponentAbsStr0 = ("" + this$2);
  var exponentAbsStr = ((exponentAbsStr0.length === 1) ? ("0" + exponentAbsStr0) : exponentAbsStr0);
  return ((((signStr + significandStr) + "e") + exponentSign) + exponentAbsStr);
}
function $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, scale, forceDecimalSep) {
  var rounded = x.vg(scale);
  var signStr = (rounded.dy ? "-" : "");
  var intStr = rounded.dz;
  var intStrLen = intStr.length;
  var minDigits = ((1 + scale) | 0);
  var expandedIntStr = ((intStrLen >= minDigits) ? intStr : (("" + $m_ju_Formatter$().lD(((minDigits - intStrLen) | 0))) + intStr));
  var dotPos = ((expandedIntStr.length - scale) | 0);
  var integerPart = (signStr + expandedIntStr.substring(0, dotPos));
  return (((scale === 0) && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + expandedIntStr.substring(dotPos)));
}
function $p_ju_Formatter__generalScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, precision, forceDecimalSep) {
  var p = ((precision === 0) ? 1 : precision);
  var rounded = x.rr(p);
  var orderOfMagnitude = (((((-1) + rounded.dz.length) | 0) - rounded.dc) | 0);
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
    var t = $m_jl_FloatingPointBits$().tl(arg);
    var lo = t.q;
    var hi = t.t;
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
    var lo$3 = t$1.q;
    var hi$4 = t$1.t;
    var exponent = (x1___3 | 0);
    var t$2 = new $c_RTLong(lo$3, hi$4);
    var lo$4 = t$2.q;
    var hi$5 = t$2.t;
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
    var baseStr = $m_jl_Long$().r7(roundedMantissa__lo, roundedMantissa__hi);
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
  $thiz.eY = dest;
  $thiz.oW = formatterLocaleInfo;
  $thiz.eg = "";
  $thiz.kk = false;
  return $thiz;
}
function $ct_ju_Formatter__($thiz) {
  $ct_ju_Formatter__jl_Appendable__ju_Formatter$LocaleInfo__($thiz, null, $m_ju_Formatter$RootLocaleInfo$());
  return $thiz;
}
/** @constructor */
function $c_ju_Formatter() {
  this.eY = null;
  this.oW = null;
  this.eg = null;
  this.kk = false;
}
$p = $c_ju_Formatter.prototype = new $h_O();
$p.constructor = $c_ju_Formatter;
/** @constructor */
function $h_ju_Formatter() {
}
$h_ju_Formatter.prototype = $p;
$p.tE = (function(format, args) {
  return $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter(this, this.oW, format, args);
});
$p.x = (function() {
  if (this.kk) {
    throw new $c_ju_FormatterClosedException();
  }
  return ((this.eY === null) ? this.eg : this.eY.s);
});
$p.lE = (function(flags) {
  throw new $c_ju_IllegalFormatFlagsException($p_ju_Formatter__flagsToString__I__T(this, flags));
});
$p.j7 = (function(conversionLower, flags, illegalFlags) {
  throw new $c_ju_FormatFlagsConversionMismatchException($p_ju_Formatter__flagsToString__I__T(this, (flags & illegalFlags)), conversionLower);
});
$p.hG = (function(conversionLower, arg) {
  throw new $c_ju_IllegalFormatConversionException(conversionLower, $objectGetClass(arg));
});
var $d_ju_Formatter = new $TypeData().i($c_ju_Formatter, "java.util.Formatter", ({
  g5: 1,
  fs: 1,
  fz: 1,
  ft: 1
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
$p.bI = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.x = (function() {
  return "<function1>";
});
$p.c0 = (function(x) {
  return false;
});
$p.l4 = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.c = (function(v1) {
  this.l4(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  gA: 1,
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
$p.f = (function() {
  return this;
});
$p.hz = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.d0 = (function(n) {
  return this.gx(n, (-1));
});
$p.gx = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.x = (function() {
  return "<iterator>";
});
$p.fm = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.hQ = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op);
});
$p.bZ = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.iY = (function(pf) {
  return $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(this, pf);
});
$p.eG = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fw = (function() {
  return $m_sci_Nil$().y(this);
});
$p.jh = (function(evidence$2) {
  return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2);
});
$p.p = (function() {
  return (-1);
});
/** @constructor */
function $c_sc_Iterable$() {
  this.fT = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_Iterable$());
}
$p = $c_sc_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sc_Iterable$;
/** @constructor */
function $h_sc_Iterable$() {
}
$h_sc_Iterable$.prototype = $p;
var $d_sc_Iterable$ = new $TypeData().i($c_sc_Iterable$, "scala.collection.Iterable$", ({
  gW: 1,
  c8: 1,
  F: 1,
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
  this.kz = null;
  this.pn = null;
  this.po = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.pn = $ct_O__(new $c_O());
  this.po = new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sc_Map$().pn));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  h7: 1,
  h8: 1,
  b9: 1,
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
  $thiz.ek = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.ek = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.qg = (function(elems) {
  return this.ek.e1(elems);
});
$p.tn = (function() {
  return this.ek.bK();
});
$p.j3 = (function(it) {
  return this.ek.aA(it);
});
$p.aO = (function() {
  return this.ek.aO();
});
$p.aA = (function(source) {
  return this.j3(source);
});
$p.bK = (function() {
  return this.tn();
});
$p.e1 = (function(elems) {
  return this.qg(elems);
});
function $f_sc_SeqOps__appended__O__O($thiz, elem) {
  return $thiz.b2().aA($ct_sc_View$Appended__sc_IterableOps__O__(new $c_sc_View$Appended(), $thiz, elem));
}
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cI(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => x$2$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.gj(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.b3(idx) > 0));
}
function $f_sc_SeqOps__indexOf__O__I__I($thiz, elem, from) {
  return $thiz.fp(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sr_BoxesRunTime$().k(elem, x$1$2$2))), from);
}
function $f_sc_SeqOps__contains__O__Z($thiz, elem) {
  return $thiz.j2(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$3$2$2) => $m_sr_BoxesRunTime$().k(x$3$2$2, elem))));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.b3(0) === 0);
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
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.f(), that);
  } else {
    return false;
  }
}
function $f_sc_StrictOptimizedIterableOps__map__F1__O($thiz, f) {
  var b = $thiz.b2().aO();
  var it = $thiz.f();
  while (it.l()) {
    b.az(f.c(it.e()));
  }
  return b.aX();
}
function $f_sc_StrictOptimizedIterableOps__collect__s_PartialFunction__O($thiz, pf) {
  var b = $thiz.b2().aO();
  var marker = $m_sr_Statics$PFMarker$();
  var it = $thiz.f();
  while (it.l()) {
    var elem = it.e();
    var v = pf.bI(elem, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((marker) => ((x$2$2) => marker))(marker)));
    if ((marker !== v)) {
      b.az(v);
    }
  }
  return b.aX();
}
function $f_sc_StrictOptimizedIterableOps__flatten__F1__O($thiz, toIterableOnce) {
  var b = $thiz.b2().aO();
  var it = $thiz.f();
  while (it.l()) {
    b.b5(toIterableOnce.c(it.e()));
  }
  return b.aX();
}
/** @constructor */
function $c_sci_Iterable$() {
  this.fT = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.tJ = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.aA.call(this, it));
});
$p.aA = (function(it) {
  return this.tJ(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  hx: 1,
  c8: 1,
  F: 1,
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
  this.f4 = null;
  this.pv = null;
  $n_sci_LazyList$ = this;
  this.f4 = new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$()))).qO();
  this.pv = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$10$2$2) => $m_sr_Statics$PFMarker$()));
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.e1 = (function(elems) {
  return this.lo(elems);
});
$p.rs = (function(ll, f) {
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((restRef) => (() => {
    var it = new $c_sr_ObjectRef(null);
    var itHasNext = false;
    var rest = new $c_sr_ObjectRef(restRef.K);
    while (((!itHasNext) && (!rest.K.b()))) {
      it.K = f.c(rest.K.A().o()).f();
      itHasNext = it.K.l();
      if ((!itHasNext)) {
        rest.K = rest.K.A().aB();
        restRef.K = rest.K;
      }
    }
    if (itHasNext) {
      var head = it.K.e();
      rest.K = rest.K.A().aB();
      restRef.K = rest.K;
      $m_sci_LazyList$();
      return new $c_sci_LazyList$State$Cons(head, ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().lX(it.K, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().rs(rest.K, f).A()))))))));
    } else {
      return $m_sci_LazyList$State$Empty$();
    }
  }))(new $c_sr_ObjectRef(ll))));
});
$p.v8 = (function(ll, n) {
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((restRef, iRef) => (() => {
    var rest = restRef.K;
    var i = iRef.aV;
    while (((i > 0) && (!rest.b()))) {
      rest = rest.A().aB();
      restRef.K = rest;
      i = (((-1) + i) | 0);
      iRef.aV = i;
    }
    return rest.A();
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.lo = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.p() === 0) ? this.f4 : new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().lW(coll.f()))))));
});
$p.lX = (function(it, suffix) {
  return (it.l() ? new $c_sci_LazyList$State$Cons(it.e(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().lX(it, suffix))))) : suffix.L());
});
$p.lW = (function(it) {
  return (it.l() ? new $c_sci_LazyList$State$Cons(it.e(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().lW(it))))) : $m_sci_LazyList$State$Empty$());
});
$p.aO = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.bK = (function() {
  return this.f4;
});
$p.aA = (function(source) {
  return this.lo(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  hy: 1,
  a1: 1,
  F: 1,
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
  this.hi = null;
  this.pL = null;
  this.hi = outer;
  this.pL = f$1;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.so = (function(x) {
  this.hi.az(x);
  return this;
});
$p.sd = (function(xs) {
  this.hi.b5(xs);
  return this;
});
$p.bq = (function(size) {
  this.hi.bq(size);
});
$p.aX = (function() {
  return this.pL.c(this.hi.aX());
});
$p.b5 = (function(elems) {
  return this.sd(elems);
});
$p.az = (function(elem) {
  return this.so(elem);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  iu: 1,
  L: 1,
  J: 1,
  I: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.eB = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.eB = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.bq = (function(size) {
});
$p.sp = (function(elem) {
  this.eB.az(elem);
  return this;
});
$p.se = (function(xs) {
  this.eB.b5(xs);
  return this;
});
$p.b5 = (function(elems) {
  return this.se(elems);
});
$p.az = (function(elem) {
  return this.sp(elem);
});
$p.aX = (function() {
  return this.eB;
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  bi: 1,
  L: 1,
  J: 1,
  I: 1
}));
function $f_sr_EnumValue__productElement__I__O($thiz, n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
}
/** @constructor */
function $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(f) {
  this.pW = null;
  this.pW = f;
}
$p = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = new $h_sjsr_AnonFunction0();
$p.constructor = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1() {
}
$h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = $p;
$p.L = (function() {
  return (0, this.pW)();
});
var $d_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1 = new $TypeData().i($c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1, "scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1", ({
  jN: 1,
  jM: 1,
  d7: 1,
  b7: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(f) {
  this.pX = null;
  this.pX = f;
}
$p = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = new $h_sjsr_AnonFunction1();
$p.constructor = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab() {
}
$h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = $p;
$p.c = (function(x0) {
  return (0, this.pX)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab = new $TypeData().i($c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab, "scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab", ({
  jP: 1,
  jO: 1,
  bk: 1,
  i: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(f) {
  this.pY = null;
  this.pY = f;
}
$p = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = new $h_sjsr_AnonFunction2();
$p.constructor = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2() {
}
$h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = $p;
$p.bn = (function(x0, x1) {
  return (0, this.pY)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2 = new $TypeData().i($c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2, "scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2", ({
  jR: 1,
  jQ: 1,
  d8: 1,
  b8: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(f) {
  this.pZ = null;
  this.pZ = f;
}
$p = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = new $h_sjsr_AnonFunction3();
$p.constructor = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491;
/** @constructor */
function $h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491() {
}
$h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = $p;
$p.l3 = (function(x0, x1, x2) {
  return (0, this.pZ)(x0, x1, x2);
});
var $d_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491 = new $TypeData().i($c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491, "scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491", ({
  jT: 1,
  jS: 1,
  jq: 1,
  gs: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(f) {
  this.q0 = null;
  this.q0 = f;
}
$p = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = new $h_sjsr_AnonFunction4();
$p.constructor = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b;
/** @constructor */
function $h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b() {
}
$h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = $p;
$p.sx = (function(x0, x1, x2, x3) {
  return (0, this.q0)(x0, x1, x2, x3);
});
var $d_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b = new $TypeData().i($c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b, "scala.scalajs.runtime.AnonFunction4.$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b", ({
  jV: 1,
  jU: 1,
  jr: 1,
  gt: 1
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
function $c_LSIAdversaryTool$$anon$1(sel$3, eventsOn$2) {
  this.jm = null;
  this.m8 = false;
  this.jm = sel$3;
  this.m8 = eventsOn$2;
}
$p = $c_LSIAdversaryTool$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_LSIAdversaryTool$$anon$1;
/** @constructor */
function $h_LSIAdversaryTool$$anon$1() {
}
$h_LSIAdversaryTool$$anon$1.prototype = $p;
$p.lz = (function(x) {
  if ((x !== null)) {
    var x7 = x.dv;
    var x8 = x.dw;
    var x$2 = $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage();
    if ((x$2 === x8)) {
      if ((x7 <= this.jm.cy)) {
        return true;
      }
    }
  }
  return false;
});
$p.l6 = (function(x, default$1) {
  if ((x !== null)) {
    var x13 = x.dv;
    var x14 = x.dw;
    var x15 = x.eR;
    var x$2 = $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage();
    if ((x$2 === x14)) {
      if ((x13 <= this.jm.cy)) {
        return (this.m8 ? x15 : $m_LSIAdversaryTool$().sB(x15));
      }
    }
  }
  return default$1.c(x);
});
$p.c0 = (function(x) {
  return this.lz(x);
});
$p.bI = (function(x, default$1) {
  return this.l6(x, default$1);
});
var $d_LSIAdversaryTool$$anon$1 = new $TypeData().i($c_LSIAdversaryTool$$anon$1, "SIAdversaryTool$$anon$1", ({
  df: 1,
  as: 1,
  i: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_LSIAdversaryTool$$anon$2(subString$2) {
  this.i1 = null;
  this.i1 = subString$2;
}
$p = $c_LSIAdversaryTool$$anon$2.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_LSIAdversaryTool$$anon$2;
/** @constructor */
function $h_LSIAdversaryTool$$anon$2() {
}
$h_LSIAdversaryTool$$anon$2.prototype = $p;
$p.ub = (function(x) {
  var this$1 = this.i1;
  return (!(!this$1.startsWith(x)));
});
$p.sD = (function(x, default$1) {
  var this$1 = this.i1;
  if ((!(!this$1.startsWith(x)))) {
    return new $c_T2(x, $m_sc_StringOps$().lf(this.i1, x.length));
  } else {
    return default$1.c(x);
  }
});
$p.c0 = (function(x) {
  return this.ub(x);
});
$p.bI = (function(x, default$1) {
  return this.sD(x, default$1);
});
var $d_LSIAdversaryTool$$anon$2 = new $TypeData().i($c_LSIAdversaryTool$$anon$2, "SIAdversaryTool$$anon$2", ({
  dg: 1,
  as: 1,
  i: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_LSIAdversaryTool$$anon$3(stage$2, sel$4, outer) {
  this.jn = null;
  this.gB = null;
  this.jn = stage$2;
  this.gB = sel$4;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_LSIAdversaryTool$$anon$3.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_LSIAdversaryTool$$anon$3;
/** @constructor */
function $h_LSIAdversaryTool$$anon$3() {
}
$h_LSIAdversaryTool$$anon$3.prototype = $p;
$p.lz = (function(x) {
  if ((x !== null)) {
    var x40 = x.dv;
    var x41 = x.dw;
    var x43 = x.eQ;
    var x$2 = this.jn;
    if ((x$2 === x41)) {
      if (((x40 <= this.gB.cy) && (x43.b() || ((x43.J() | 0) > this.gB.cy)))) {
        return true;
      }
    }
  }
  return false;
});
$p.l6 = (function(x, default$1) {
  if ((x !== null)) {
    var x46 = x.dv;
    var x47 = x.dw;
    var x48 = x.eR;
    var x49 = x.eQ;
    var x$2 = this.jn;
    if ((x$2 === x47)) {
      if (((x46 <= this.gB.cy) && (x49.b() || ((x49.J() | 0) > this.gB.cy)))) {
        return x48;
      }
    }
  }
  return default$1.c(x);
});
$p.c0 = (function(x) {
  return this.lz(x);
});
$p.bI = (function(x, default$1) {
  return this.l6(x, default$1);
});
var $d_LSIAdversaryTool$$anon$3 = new $TypeData().i($c_LSIAdversaryTool$$anon$3, "SIAdversaryTool$$anon$3", ({
  dh: 1,
  as: 1,
  i: 1,
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
$p.bp = (function() {
  return new $c_s_Product$$anon$1(this);
});
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.ge($m_Lcom_raquo_ew_JsArray$().bE($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.gf($m_Lcom_raquo_ew_JsArray$().bE($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.eO(false);
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.gr(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
    return subscription;
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$2.bG || (!when))) {
    var $x_1 = f();
  } else {
    this$2.bG = true;
    try {
      var $x_1 = f();
    } finally {
      this$2.bG = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = new $c_Lcom_raquo_airstream_ownership_Subscription(owner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  })));
  var this$ = $thiz.d1();
  this$.push(observer);
  return subscription;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz, observer, shouldCallMaybeWillStart) {
  var this$3 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    if (((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz)) && shouldCallMaybeWillStart)) {
      $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    }
    var this$ = $thiz.d6();
    this$.push(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$3.bG || (!when))) {
    f();
  } else {
    this$3.bG = true;
    try {
      f();
    } finally {
      this$3.bG = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$3);
    }
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().rn($thiz.d6(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().rn($thiz.d1(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.gA())) {
    $thiz.gv();
    $thiz.eO(true);
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  if (($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1)) {
    $thiz.gs();
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.gt();
    $thiz.eO(false);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.d1();
  var $x_1 = this$.length;
  var this$$1 = $thiz.d6();
  return ((($x_1 | 0) + (this$$1.length | 0)) | 0);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1(outer) {
  this.my = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.my = outer;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$$anon$1() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = $p;
$p.lA = (function(x) {
  return (x !== null);
});
$p.l7 = (function(x, default$1) {
  return ((x !== null) ? (new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this.my, x, _$1);
  }))), (void 0)) : default$1.c(x));
});
$p.c0 = (function(x) {
  return this.lA(x);
});
$p.bI = (function(x, default$1) {
  return this.l7(x, default$1);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$$anon$1, "com.raquo.airstream.custom.CustomSource$$anon$1", ({
  dN: 1,
  as: 1,
  i: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.id = $m_Lcom_raquo_airstream_core_Observer$().qX(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
function $f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer($thiz, mod) {
  return $m_Lcom_raquo_airstream_core_Observer$().qX(new $c_Lcom_raquo_airstream_state_Var$$anon$2(mod, $thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$1(outer) {
  this.nf = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.nf = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $p;
$p.lB = (function(x) {
  return true;
});
$p.l8 = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    this.nf.lY(x, _$1);
  })));
});
$p.c0 = (function(x) {
  return this.lB(x);
});
$p.bI = (function(x, default$1) {
  return this.l8(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  e4: 1,
  as: 1,
  i: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$2(mod$6, outer) {
  this.ng = null;
  this.ie = null;
  this.ng = mod$6;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.ie = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$2.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$2;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$2() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$2.prototype = $p;
$p.lB = (function(x) {
  return true;
});
$p.l8 = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    matchResult5: {
      if ((x instanceof $c_s_util_Success)) {
        var nextInput = x.cE;
        var x4 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this.ie.bM);
        if ((x4 instanceof $c_s_util_Success)) {
          var currentValue = x4.cE;
          try {
            var nextValue = new $c_s_util_Success(this.ng.bn(currentValue, nextInput));
          } catch (e) {
            var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
            matchEnd8: {
              var nextValue;
              if ($m_s_util_control_NonFatal$().cG(e$2)) {
                var nextValue = new $c_s_util_Failure(e$2);
                break matchEnd8;
              }
              throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
            }
          }
          this.ie.lY(nextValue, trx);
          break matchResult5;
        }
        if ((x4 instanceof $c_s_util_Failure)) {
          var err = x4.dl;
          $m_Lcom_raquo_airstream_core_AirstreamError$().cN(new $c_Lcom_raquo_airstream_core_AirstreamError$VarError("Unable to update a failed Var. Consider Var#tryUpdater instead.", new $c_s_Some(err)));
          break matchResult5;
        }
        throw new $c_s_MatchError(x4);
      }
      if ((x instanceof $c_s_util_Failure)) {
        var err$2 = x.dl;
        this.ie.lY(new $c_s_util_Failure(err$2), trx);
        break matchResult5;
      }
      throw new $c_s_MatchError(x);
    }
  })));
});
$p.c0 = (function(x) {
  return this.lB(x);
});
$p.bI = (function(x, default$1) {
  return this.l8(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$2 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$2, "com.raquo.airstream.state.Var$$anon$2", ({
  e5: 1,
  as: 1,
  i: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_web_WebStorageVar$$anon$1(outer) {
  this.jP = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.jP = outer;
}
$p = $c_Lcom_raquo_airstream_web_WebStorageVar$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_web_WebStorageVar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_web_WebStorageVar$$anon$1() {
}
$h_Lcom_raquo_airstream_web_WebStorageVar$$anon$1.prototype = $p;
$p.lA = (function(x) {
  return ((x !== null) && ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I(this.jP.bM) > 1));
});
$p.l7 = (function(x, default$1) {
  return (((x !== null) && ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I(this.jP.bM) > 1)) ? (void 0) : default$1.c(x));
});
$p.c0 = (function(x) {
  return this.lA(x);
});
$p.bI = (function(x, default$1) {
  return this.l7(x, default$1);
});
var $d_Lcom_raquo_airstream_web_WebStorageVar$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_web_WebStorageVar$$anon$1, "com.raquo.airstream.web.WebStorageVar$$anon$1", ({
  ec: 1,
  as: 1,
  i: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.k5 = new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.cQ.q3();
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.cQ.tf();
  })));
  $thiz.eX = (void 0);
  $thiz.gW = $m_sci_Map$EmptyMap$();
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.eX === (void 0))) {
    $thiz.eX = $m_Lcom_raquo_ew_JsArray$().bE($m_sr_ScalaRunTime$().B(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener])));
  } else if (unsafePrepend) {
    var x$1 = $thiz.eX;
    if ((x$1 === (void 0))) {
      var $x_1;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.eX;
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
  var x = $thiz.eX;
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.eX;
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
  var keyItemsWithReason = $thiz.gW.e4(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f = ((item) => {
    var these = keyItemsWithReason;
    while ((!these.b())) {
      var x0 = these.o();
      var x = x0.bm();
      if (((x === null) ? (item === null) : $dp_equals__O__Z(x, item))) {
        var x$3 = x0.bd();
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
      these = these.z();
    }
    return false;
  });
  var itemsToAdd = $f_sc_SeqOps__distinct__O(addItems);
  var l = removeItems;
  block: {
    var result;
    while (true) {
      if (l.b()) {
        var result = $m_sci_Nil$();
        break;
      } else {
        var h = l.o();
        var t = l.z();
        if (((!(!f(h))) === true)) {
          l = t;
          continue;
        }
        var start = l;
        var remaining = t;
        while (true) {
          if (remaining.b()) {
            var result = start;
            break block;
          } else {
            var x$1 = remaining.o();
            if (((!(!f(x$1))) !== true)) {
              remaining = remaining.z();
              continue;
            }
            var firstMiss = remaining;
            var newHead = new $c_sci_$colon$colon(start.o(), $m_sci_Nil$());
            var toProcess = start.z();
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $c_sci_$colon$colon(toProcess.o(), $m_sci_Nil$());
              currentLast.aY = newElem;
              currentLast = newElem;
              toProcess = toProcess.z();
            }
            var next = firstMiss.z();
            var nextToCopy = next;
            while ((!next.b())) {
              var head = next.o();
              if (((!(!f(head))) !== true)) {
                next = next.z();
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $c_sci_$colon$colon(nextToCopy.o(), $m_sci_Nil$());
                  currentLast.aY = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = nextToCopy.z();
                }
                nextToCopy = next.z();
                next = next.z();
              }
            }
            if ((!nextToCopy.b())) {
              currentLast.aY = nextToCopy;
            }
            var result = newHead;
            break block;
          }
        }
      }
    }
  }
  var this$1 = $thiz.gW.e4(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f$1 = ((t$1) => result.al(t$1.bm()));
  var l$1 = this$1;
  block$2: {
    var $x_3;
    while (true) {
      if (l$1.b()) {
        var $x_3 = $m_sci_Nil$();
        break;
      } else {
        var h$1 = l$1.o();
        var t$2 = l$1.z();
        if (((!(!f$1(h$1))) === true)) {
          l$1 = t$2;
          continue;
        }
        var start$1 = l$1;
        var remaining$1 = t$2;
        while (true) {
          if (remaining$1.b()) {
            var $x_3 = start$1;
            break block$2;
          } else {
            var x$2 = remaining$1.o();
            if (((!(!f$1(x$2))) !== true)) {
              remaining$1 = remaining$1.z();
              continue;
            }
            var firstMiss$1 = remaining$1;
            var newHead$1 = new $c_sci_$colon$colon(start$1.o(), $m_sci_Nil$());
            var toProcess$1 = start$1.z();
            var currentLast$1 = newHead$1;
            while ((toProcess$1 !== firstMiss$1)) {
              var newElem$1 = new $c_sci_$colon$colon(toProcess$1.o(), $m_sci_Nil$());
              currentLast$1.aY = newElem$1;
              currentLast$1 = newElem$1;
              toProcess$1 = toProcess$1.z();
            }
            var next$1 = firstMiss$1.z();
            var nextToCopy$1 = next$1;
            while ((!next$1.b())) {
              var head$1 = next$1.o();
              if (((!(!f$1(head$1))) !== true)) {
                next$1 = next$1.z();
              } else {
                while ((nextToCopy$1 !== next$1)) {
                  var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.o(), $m_sci_Nil$());
                  currentLast$1.aY = newElem$2$1;
                  currentLast$1 = newElem$2$1;
                  nextToCopy$1 = nextToCopy$1.z();
                }
                nextToCopy$1 = next$1.z();
                next$1 = next$1.z();
              }
            }
            if ((!nextToCopy$1.b())) {
              currentLast$1.aY = nextToCopy$1;
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
    var rest = itemsToAdd.z();
    while ((rest !== $m_sci_Nil$())) {
      var x0$2 = rest.o();
      var nx = new $c_sci_$colon$colon(f$2(x0$2), $m_sci_Nil$());
      t$3.aY = nx;
      t$3 = nx;
      rest = rest.z();
    }
    var $x_2 = h$2;
  }
  var newItems = $x_3.qc($x_2);
  var domValues = key.jU.qD(key.ot.c($thiz));
  var f$3 = ((elem) => result.al(elem));
  var l$2 = domValues;
  block$4: {
    var $x_5;
    while (true) {
      if (l$2.b()) {
        var $x_5 = $m_sci_Nil$();
        break;
      } else {
        var h$3 = l$2.o();
        var t$4 = l$2.z();
        if (((!(!f$3(h$3))) === true)) {
          l$2 = t$4;
          continue;
        }
        var start$2 = l$2;
        var remaining$2 = t$4;
        while (true) {
          if (remaining$2.b()) {
            var $x_5 = start$2;
            break block$4;
          } else {
            var x$4 = remaining$2.o();
            if (((!(!f$3(x$4))) !== true)) {
              remaining$2 = remaining$2.z();
              continue;
            }
            var firstMiss$2 = remaining$2;
            var newHead$2 = new $c_sci_$colon$colon(start$2.o(), $m_sci_Nil$());
            var toProcess$2 = start$2.z();
            var currentLast$2 = newHead$2;
            while ((toProcess$2 !== firstMiss$2)) {
              var newElem$3 = new $c_sci_$colon$colon(toProcess$2.o(), $m_sci_Nil$());
              currentLast$2.aY = newElem$3;
              currentLast$2 = newElem$3;
              toProcess$2 = toProcess$2.z();
            }
            var next$2 = firstMiss$2.z();
            var nextToCopy$2 = next$2;
            while ((!next$2.b())) {
              var head$2 = next$2.o();
              if (((!(!f$3(head$2))) !== true)) {
                next$2 = next$2.z();
              } else {
                while ((nextToCopy$2 !== next$2)) {
                  var newElem$2$2 = new $c_sci_$colon$colon(nextToCopy$2.o(), $m_sci_Nil$());
                  currentLast$2.aY = newElem$2$2;
                  currentLast$2 = newElem$2$2;
                  nextToCopy$2 = nextToCopy$2.z();
                }
                nextToCopy$2 = next$2.z();
                next$2 = next$2.z();
              }
            }
            if ((!nextToCopy$2.b())) {
              currentLast$2.aY = nextToCopy$2;
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
      if (l$3.b()) {
        var $x_4 = $m_sci_Nil$();
        break;
      } else {
        var h$4 = l$3.o();
        var t$5 = l$3.z();
        if (((!(!f(h$4))) === true)) {
          l$3 = t$5;
          continue;
        }
        var start$3 = l$3;
        var remaining$3 = t$5;
        while (true) {
          if (remaining$3.b()) {
            var $x_4 = start$3;
            break block$6;
          } else {
            var x$5 = remaining$3.o();
            if (((!(!f(x$5))) !== true)) {
              remaining$3 = remaining$3.z();
              continue;
            }
            var firstMiss$3 = remaining$3;
            var newHead$3 = new $c_sci_$colon$colon(start$3.o(), $m_sci_Nil$());
            var toProcess$3 = start$3.z();
            var currentLast$3 = newHead$3;
            while ((toProcess$3 !== firstMiss$3)) {
              var newElem$4 = new $c_sci_$colon$colon(toProcess$3.o(), $m_sci_Nil$());
              currentLast$3.aY = newElem$4;
              currentLast$3 = newElem$4;
              toProcess$3 = toProcess$3.z();
            }
            var next$3 = firstMiss$3.z();
            var nextToCopy$3 = next$3;
            while ((!next$3.b())) {
              var head$3 = next$3.o();
              if (((!(!f(head$3))) !== true)) {
                next$3 = next$3.z();
              } else {
                while ((nextToCopy$3 !== next$3)) {
                  var newElem$2$3 = new $c_sci_$colon$colon(nextToCopy$3.o(), $m_sci_Nil$());
                  currentLast$3.aY = newElem$2$3;
                  currentLast$3 = newElem$2$3;
                  nextToCopy$3 = nextToCopy$3.z();
                }
                nextToCopy$3 = next$3.z();
                next$3 = next$3.z();
              }
            }
            if ((!nextToCopy$3.b())) {
              currentLast$3.aY = nextToCopy$3;
            }
            var $x_4 = newHead$3;
            break block$6;
          }
        }
      }
    }
  }
  var nextDomValues = $x_5.qc($x_4);
  $thiz.gW = $thiz.gW.eN(key, newItems);
  key.ov.bn($thiz, key.jU.qF(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.il, maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.il;
  $thiz.il = maybeNextParent;
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.b()) && (!maybePrevParent.J().j0().cg.b()));
  var isNextParentActive = ((!maybeNextParent.b()) && (!maybeNextParent.J().j0().cg.b()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.b() ? $m_s_None$() : new $c_s_Some(maybeNextParent.J().j0())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.b()) {
    $thiz.k5.sN();
  } else {
    var x0 = maybeNextOwner.J();
    $thiz.k5.vf(x0);
  }
}
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  fw: 1,
  w: 1,
  v: 1,
  o: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bL)));
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  bL: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bN)));
}
var $d_jl_ClassCastException = new $TypeData().i($c_jl_ClassCastException, "java.lang.ClassCastException", ({
  bN: 1,
  w: 1,
  v: 1,
  o: 1,
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
  o: 1,
  a: 1
}));
function $ct_jl_IllegalStateException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalStateException = new $TypeData().i($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  bQ: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  b6: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NegativeArraySizeException = new $TypeData().i($c_jl_NegativeArraySizeException, "java.lang.NegativeArraySizeException", ({
  fI: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  fJ: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fL)));
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bT)));
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  bT: 1,
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
  fU: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().i($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  g2: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  gj: 1,
  w: 1,
  v: 1,
  o: 1,
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
$p.c = (function(x) {
  return x;
});
$p.x = (function() {
  return "generalized constraint";
});
var $d_s_$less$colon$less$$anon$1 = new $TypeData().i($c_s_$less$colon$less$$anon$1, "scala.$less$colon$less$$anon$1", ({
  gp: 1,
  gm: 1,
  gn: 1,
  i: 1,
  a: 1
}));
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.km)) {
    $thiz.kn = (($thiz.ip === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.km = true;
  }
  return $thiz.kn;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.km) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.kn);
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.ip;
  return ("of class " + $objectClassName(this$1));
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.ip + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.kn = null;
    this.ip = null;
    this.km = false;
    this.ip = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bV() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  gw: 1,
  w: 1,
  v: 1,
  o: 1,
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
$p.b = (function() {
  return (this === $m_s_None$());
});
$p.p = (function() {
  return (this.b() ? 0 : 1);
});
$p.al = (function(elem) {
  return ((!this.b()) && $m_sr_BoxesRunTime$().k(this.J(), elem));
});
$p.f = (function() {
  return (this.b() ? $m_sc_Iterator$().F : new $c_sc_Iterator$$anon$20(this.J()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.h0 = 0;
  this.pb = 0;
  this.pa = null;
  this.pa = outer;
  this.h0 = 0;
  this.pb = outer.b6();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.l = (function() {
  return (this.h0 < this.pb);
});
$p.e = (function() {
  var result = this.pa.b7(this.h0);
  this.h0 = ((1 + this.h0) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  gC: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.pc = null;
  this.pd = null;
  this.pc = _1;
  this.pd = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.b6 = (function() {
  return 2;
});
$p.b7 = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.bm = (function() {
  return this.pc;
});
$p.bd = (function() {
  return this.pd;
});
$p.x = (function() {
  return (((("(" + this.bm()) + ",") + this.bd()) + ")");
});
$p.b8 = (function() {
  return "Tuple2";
});
$p.bp = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().cM(this, (-889275714), false);
});
$p.n = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().k(this.bm(), x$1.bm()) && $m_sr_BoxesRunTime$().k(this.bd(), x$1.bd()))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c0)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  c0: 1,
  gD: 1,
  B: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.fO = null;
  this.fP = null;
  this.fQ = null;
  this.fO = _1;
  this.fP = _2;
  this.fQ = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.b6 = (function() {
  return 3;
});
$p.b7 = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.x = (function() {
  return (((((("(" + this.fO) + ",") + this.fP) + ",") + this.fQ) + ")");
});
$p.b8 = (function() {
  return "Tuple3";
});
$p.bp = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().cM(this, (-889275714), false);
});
$p.n = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T3) && ($m_sr_BoxesRunTime$().k(this.fO, x$1.fO) && ($m_sr_BoxesRunTime$().k(this.fP, x$1.fP) && $m_sr_BoxesRunTime$().k(this.fQ, x$1.fQ)))));
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c1)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  c1: 1,
  gE: 1,
  B: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.fR = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  gR: 1,
  gQ: 1,
  F: 1,
  a: 1,
  a1: 1
}));
function $f_sc_IndexedSeqOps__map__F1__O($thiz, f) {
  return $thiz.b2().aA($ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), $thiz, f));
}
function $f_sc_IndexedSeqOps__reverse__O($thiz) {
  return $thiz.gj(new $c_sc_IndexedSeqView$Reverse($thiz));
}
function $f_sc_IndexedSeqOps__head__O($thiz) {
  if ((!$thiz.b())) {
    return $thiz.u(0);
  } else {
    throw new $c_ju_NoSuchElementException(("head of empty " + ($is_sc_IndexedSeq($thiz) ? $thiz.cb() : $thiz.x())));
  }
}
function $f_sc_IndexedSeqOps__headOption__s_Option($thiz) {
  return ($thiz.b() ? $m_s_None$() : new $c_s_Some($thiz.o()));
}
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.cb() + "("), ", ", ")");
}
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.e)));
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.e)));
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
$p.l = (function() {
  return false;
});
$p.hI = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.p = (function() {
  return 0;
});
$p.gx = (function(from, until) {
  return this;
});
$p.e = (function() {
  this.hI();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  h0: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.h1 = false;
  this.ph = null;
  this.ph = a$1;
  this.h1 = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.l = (function() {
  return (!this.h1);
});
$p.e = (function() {
  if (this.h1) {
    return $m_sc_Iterator$().F.e();
  } else {
    this.h1 = true;
    return this.ph;
  }
});
$p.gx = (function(from, until) {
  return (((this.h1 || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().F : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  h1: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$8(outer, f$1) {
  this.pk = null;
  this.ir = false;
  this.pj = null;
  this.ky = null;
  this.pi = null;
  this.ky = outer;
  this.pi = f$1;
  this.pk = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.ir = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.l = (function() {
  while (true) {
    if (this.ir) {
      return true;
    } else if (this.ky.l()) {
      var a = this.ky.e();
      if (this.pk.iS(this.pi.c(a))) {
        this.pj = a;
        this.ir = true;
        return true;
      }
    } else {
      return false;
    }
  }
});
$p.e = (function() {
  if (this.l()) {
    this.ir = false;
    return this.pj;
  } else {
    return $m_sc_Iterator$().F.e();
  }
});
var $d_sc_Iterator$$anon$8 = new $TypeData().i($c_sc_Iterator$$anon$8, "scala.collection.Iterator$$anon$8", ({
  h3: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(outer, f$2) {
  this.is = null;
  this.pl = null;
  this.is = outer;
  this.pl = f$2;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.p = (function() {
  return this.is.p();
});
$p.l = (function() {
  return this.is.l();
});
$p.e = (function() {
  return this.pl.c(this.is.e());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  h4: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.c3 instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.c3;
      $thiz.c3 = c.c3;
      $thiz.ei = c.ei;
      if ((c.cB !== null)) {
        if (($thiz.cA === null)) {
          $thiz.cA = c.cA;
        }
        c.cA.h2 = $thiz.cB;
        $thiz.cB = c.cB;
      }
      continue;
    }
    return (void 0);
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.cB === null)) {
      $thiz.c3 = null;
      $thiz.cA = null;
      return false;
    } else {
      $thiz.c3 = $thiz.cB.tX();
      if (($thiz.cA === $thiz.cB)) {
        $thiz.cA = $thiz.cA.h2;
      }
      $thiz.cB = $thiz.cB.h2;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.ei) {
        return true;
      } else if ((($thiz.c3 !== null) && $thiz.c3.l())) {
        $thiz.ei = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.c3 = null;
  this.cB = null;
  this.cA = null;
  this.ei = false;
  this.c3 = current;
  this.cB = null;
  this.cA = null;
  this.ei = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.l = (function() {
  if (this.ei) {
    return true;
  } else if ((this.c3 !== null)) {
    if (this.c3.l()) {
      this.ei = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.e = (function() {
  if (this.l()) {
    this.ei = false;
    return this.c3.e();
  } else {
    return $m_sc_Iterator$().F.e();
  }
});
$p.hz = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.cB === null)) {
    this.cB = c;
    this.cA = c;
  } else {
    this.cA.h2 = c;
    this.cA = c;
  }
  if ((this.c3 === null)) {
    this.c3 = $m_sc_Iterator$().F;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c9)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  c9: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.dC > 0)) {
    if ($thiz.ej.l()) {
      $thiz.ej.e();
      $thiz.dC = (((-1) + $thiz.dC) | 0);
    } else {
      $thiz.dC = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.cj < 0)) {
    return (-1);
  } else {
    var that = (($thiz.cj - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.ej = null;
  this.cj = 0;
  this.dC = 0;
  this.ej = underlying;
  this.cj = limit;
  this.dC = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.p = (function() {
  var size = this.ej.p();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.dC) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.cj < 0)) {
      return dropSize;
    } else {
      var x = this.cj;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.l = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.cj !== 0) && this.ej.l());
});
$p.e = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.cj > 0)) {
    this.cj = (((-1) + this.cj) | 0);
    return this.ej.e();
  } else {
    return ((this.cj < 0) ? this.ej.e() : $m_sc_Iterator$().F.e());
  }
});
$p.gx = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.cj < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.dC + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().F;
  } else if ((sum < 0)) {
    this.dC = 2147483647;
    this.cj = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$SliceIterator(this.ej, (((-2147483647) + sum) | 0), rest))));
  } else {
    this.dC = sum;
    this.cj = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  h6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $f_sc_LinearSeqOps__headOption__s_Option($thiz) {
  return ($thiz.b() ? $m_s_None$() : new $c_s_Some($thiz.o()));
}
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while ((!these.b())) {
    len = ((1 + len) | 0);
    these = these.z();
  }
  return len;
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $thiz, len));
}
function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
  return ((x >= 0) && ($thiz.b3(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.le(n);
  if (skipped.b()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.o();
}
function $f_sc_LinearSeqOps__exists__F1__Z($thiz, p) {
  var these = $thiz;
  while ((!these.b())) {
    if ((!(!p.c(these.o())))) {
      return true;
    }
    these = these.z();
  }
  return false;
}
function $f_sc_LinearSeqOps__foldLeft__O__F2__O($thiz, z, op) {
  var acc = z;
  var these = $thiz;
  while ((!these.b())) {
    acc = op.bn(acc, these.o());
    these = these.z();
  }
  return acc;
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $f_sc_LinearSeqOps__indexWhere__F1__I__I($thiz, p, from) {
  var i = ((from > 0) ? from : 0);
  var these = $thiz.le(from);
  while ((!these.b())) {
    if ((!(!p.c(these.o())))) {
      return i;
    }
    i = ((1 + i) | 0);
    these = these.z();
  }
  return (-1);
}
function $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.b() ? 0 : 1);
    } else if (xs.b()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = xs.z();
      i = temp$i;
      xs = temp$xs;
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else if ((((!a.b()) && (!b.b())) && $m_sr_BoxesRunTime$().k(a.o(), b.o()))) {
      var temp$a = a.z();
      var temp$b = b.z();
      a = temp$a;
      b = temp$b;
    } else {
      return (a.b() && b.b());
    }
  }
}
function $f_sc_SetOps__concat__sc_IterableOnce__sc_SetOps($thiz, that) {
  if ((($thiz instanceof $c_sci_Set$Set1) || (($thiz instanceof $c_sci_Set$Set2) || (($thiz instanceof $c_sci_Set$Set3) || ($thiz instanceof $c_sci_Set$Set4))))) {
    var result = $thiz;
    var it = that.f();
    while (it.l()) {
      result = result.ds(it.e());
    }
    return result;
  } else {
    return $thiz.gk(($is_sc_Iterable(that) ? new $c_sc_View$Concat($thiz, that) : $thiz.f().hz(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => that.f())))));
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.h5 = null;
  this.h5 = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.l = (function() {
  return (!this.h5.b());
});
$p.e = (function() {
  var r = this.h5.o();
  this.h5 = this.h5.z();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  ha: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sc_StringOps$$anon$1__advance__T($thiz) {
  var start = $thiz.br;
  while (true) {
    if (($thiz.br < $thiz.f0)) {
      var this$ = $thiz.h6;
      var i = $thiz.br;
      var c = this$.charCodeAt(i);
      var $x_1 = (!((c === 13) || (c === 10)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $thiz.br = ((1 + $thiz.br) | 0);
    } else {
      break;
    }
  }
  var end = $thiz.br;
  if (($thiz.br < $thiz.f0)) {
    var this$$2 = $thiz.h6;
    var i$1 = $thiz.br;
    var c$1 = this$$2.charCodeAt(i$1);
    $thiz.br = ((1 + $thiz.br) | 0);
    if (($thiz.br < $thiz.f0)) {
      var this$$3 = $thiz.h6;
      var i$2 = $thiz.br;
      var c$2 = this$$3.charCodeAt(i$2);
      var $x_2 = ((c$1 === 13) && (c$2 === 10));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      $thiz.br = ((1 + $thiz.br) | 0);
    }
    if ((!$thiz.pq)) {
      end = $thiz.br;
    }
  }
  var this$6 = $thiz.h6;
  var endIndex = end;
  return this$6.substring(start, endIndex);
}
/** @constructor */
function $c_sc_StringOps$$anon$1(\u03b4this$2, stripped$1) {
  this.f0 = 0;
  this.br = 0;
  this.h6 = null;
  this.pq = false;
  this.h6 = \u03b4this$2;
  this.pq = stripped$1;
  this.f0 = \u03b4this$2.length;
  this.br = 0;
}
$p = $c_sc_StringOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StringOps$$anon$1;
/** @constructor */
function $h_sc_StringOps$$anon$1() {
}
$h_sc_StringOps$$anon$1.prototype = $p;
$p.l = (function() {
  return (this.br < this.f0);
});
$p.rc = (function() {
  return ((this.br >= this.f0) ? $m_sc_Iterator$().F.e() : $p_sc_StringOps$$anon$1__advance__T(this));
});
$p.e = (function() {
  return this.rc();
});
var $d_sc_StringOps$$anon$1 = new $TypeData().i($c_sc_StringOps$$anon$1, "scala.collection.StringOps$$anon$1", ({
  he: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.cl === null)) {
    $thiz.cl = new $ac_I(($m_sci_Node$().he << 1));
    $thiz.dL = new ($d_sci_Node.r().C)($m_sci_Node$().he);
  }
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.bN = node;
  $thiz.ad = 0;
  $thiz.dK = node.hO();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bD = ((1 + $thiz.bD) | 0);
  var cursorIndex = ($thiz.bD << 1);
  var lengthIndex = ((1 + ($thiz.bD << 1)) | 0);
  $thiz.dL.a[$thiz.bD] = node;
  $thiz.cl.a[cursorIndex] = 0;
  $thiz.cl.a[lengthIndex] = node.hJ();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.bD = (((-1) + $thiz.bD) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bD >= 0)) {
    var cursorIndex = ($thiz.bD << 1);
    var lengthIndex = ((1 + ($thiz.bD << 1)) | 0);
    var nodeCursor = $thiz.cl.a[cursorIndex];
    if ((nodeCursor < $thiz.cl.a[lengthIndex])) {
      var ev$1 = $thiz.cl;
      ev$1.a[cursorIndex] = ((1 + ev$1.a[cursorIndex]) | 0);
      var nextNode = $thiz.dL.a[$thiz.bD].hD(nodeCursor);
      if (nextNode.hE()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.gm()) {
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
  $thiz.dK = 0;
  $thiz.bD = (-1);
  return $thiz;
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.hE()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.gm()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
/** @constructor */
function $c_sci_ChampBaseIterator() {
  this.ad = 0;
  this.dK = 0;
  this.bN = null;
  this.bD = 0;
  this.cl = null;
  this.dL = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.l = (function() {
  return ((this.ad < this.dK) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.iz = node;
  $thiz.el = (((-1) + node.hO()) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.cm = ((1 + $thiz.cm) | 0);
  $thiz.ha.a[$thiz.cm] = node;
  $thiz.h9.a[$thiz.cm] = (((-1) + node.hJ()) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.cm = (((-1) + $thiz.cm) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.cm >= 0)) {
    var nodeCursor = $thiz.h9.a[$thiz.cm];
    $thiz.h9.a[$thiz.cm] = (((-1) + nodeCursor) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.ha.a[$thiz.cm].hD(nodeCursor));
    } else {
      var currNode = $thiz.ha.a[$thiz.cm];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.gm()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true;
      }
    }
  }
  return false;
}
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.el = (-1);
  $thiz.cm = (-1);
  $thiz.h9 = new $ac_I(((1 + $m_sci_Node$().he) | 0));
  $thiz.ha = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().he) | 0));
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
  this.el = 0;
  this.iz = null;
  this.cm = 0;
  this.h9 = null;
  this.ha = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.l = (function() {
  return ((this.el >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.fX !== null);
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
  var dataIx = bm.cY(bitpos);
  var idx = (dataIx << 1);
  var src = bm.aZ;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.r(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.r(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.c4, dataIx, originalHash);
  bm.ac = (bm.ac | bitpos);
  bm.aZ = dst;
  bm.c4 = dstHashes;
  bm.bi = ((1 + bm.bi) | 0);
  bm.bW = ((bm.bW + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.fX = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.df = $thiz.df.qy();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.fX = null;
  this.df = null;
  this.df = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().kl, $m_s_Array$EmptyArrays$().gZ, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.bq = (function(size) {
});
$p.gy = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().cx(keyHash, shift);
    var bitpos = $m_sci_Node$().bT(mask);
    if (((mapNode.ac & bitpos) !== 0)) {
      var index = $m_sci_Node$().bF(mapNode.ac, mask, bitpos);
      var key0 = mapNode.dq(index);
      var key0UnimprovedHash = mapNode.cw(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().k(key0, key))) {
        mapNode.aZ.a[((1 + (index << 1)) | 0)] = value;
      } else {
        var value0 = mapNode.dr(index);
        var key0Hash = $m_sc_Hashing$().bo(key0UnimprovedHash);
        var subNodeNew = mapNode.lM(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.ur(bitpos, key0Hash, subNodeNew);
      }
    } else if (((mapNode.aC & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().bF(mapNode.aC, mask, bitpos);
      var subNode = mapNode.d2(index$2);
      var beforeSize = subNode.O();
      var beforeHash = subNode.bJ();
      this.gy(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.bi = ((mapNode.bi + ((subNode.O() - beforeSize) | 0)) | 0);
      mapNode.bW = ((mapNode.bW + ((subNode.bJ() - beforeHash) | 0)) | 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
    }
  } else if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.go(key);
    if ((index$3 < 0)) {
      mapNode.aJ = mapNode.aJ.bz(new $c_T2(key, value));
    } else {
      mapNode.aJ = mapNode.aJ.ea(index$3, new $c_T2(key, value));
    }
  } else {
    throw new $c_s_MatchError(mapNode);
  }
});
$p.lU = (function() {
  if ((this.df.bi === 0)) {
    return $m_sci_HashMap$().kE;
  } else if ((this.fX !== null)) {
    return this.fX;
  } else {
    this.fX = new $c_sci_HashMap(this.df);
    return this.fX;
  }
});
$p.q9 = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().R(elem.bm());
  var im = $m_sc_Hashing$().bo(h);
  this.gy(this.df, elem.bm(), elem.bd(), h, im, 0);
  return this;
});
$p.fk = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().R(key);
  this.gy(this.df, key, value, originalHash, $m_sc_Hashing$().bo(originalHash), 0);
  return this;
});
$p.l0 = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(this, xs);
  } else if (false) {
    var iter = xs.we();
    while (iter.l()) {
      var next = iter.e();
      var originalHash = xs.vA(next.r2());
      var hash = $m_sc_Hashing$().bo(originalHash);
      this.gy(this.df, next.r8(), next.vG(), originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.tq();
    while (iter$2.l()) {
      var next$2 = iter$2.e();
      var originalHash$2 = xs.vA(next$2.r2());
      var hash$2 = $m_sc_Hashing$().bo(originalHash$2);
      this.gy(this.df, next$2.r8(), next$2.vG(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.fn(new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((key$2$2, value$2$2) => this.fk(key$2$2, value$2$2))));
  } else {
    var it = xs.f();
    while (it.l()) {
      this.q9(it.e());
    }
  }
  return this;
});
$p.b5 = (function(elems) {
  return this.l0(elems);
});
$p.az = (function(elem) {
  return this.q9(elem);
});
$p.aX = (function() {
  return this.lU();
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  hq: 1,
  a9: 1,
  L: 1,
  J: 1,
  I: 1
}));
function $p_sci_HashSetBuilder__isAliased__Z($thiz) {
  return ($thiz.fY !== null);
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
  var dataIx = bm.cY(bitpos);
  var src = bm.bj;
  var dst = new $ac_O(((1 + src.a.length) | 0));
  src.r(0, dst, 0, dataIx);
  dst.a[dataIx] = key;
  var destPos = ((1 + dataIx) | 0);
  var length = ((src.a.length - dataIx) | 0);
  src.r(dataIx, dst, destPos, length);
  var dstHashes = $p_sci_HashSetBuilder__insertElement__AI__I__I__AI($thiz, bm.ck, dataIx, originalHash);
  bm.a3 = (bm.a3 | bitpos);
  bm.bj = dst;
  bm.ck = dstHashes;
  bm.bs = ((1 + bm.bs) | 0);
  bm.c5 = ((bm.c5 + keyHash) | 0);
}
function $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V($thiz, bm, bitpos, elem) {
  var dataIx = bm.cY(bitpos);
  bm.bj.a[dataIx] = elem;
}
function $p_sci_HashSetBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashSetBuilder__isAliased__Z($thiz)) {
    $p_sci_HashSetBuilder__copyElems__V($thiz);
  }
  $thiz.fY = null;
}
function $p_sci_HashSetBuilder__copyElems__V($thiz) {
  $thiz.f3 = $thiz.f3.qz();
}
/** @constructor */
function $c_sci_HashSetBuilder() {
  this.fY = null;
  this.f3 = null;
  this.f3 = new $c_sci_BitmapIndexedSetNode(0, 0, $m_s_Array$EmptyArrays$().kl, $m_s_Array$EmptyArrays$().gZ, 0, 0);
}
$p = $c_sci_HashSetBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashSetBuilder;
/** @constructor */
function $h_sci_HashSetBuilder() {
}
$h_sci_HashSetBuilder.prototype = $p;
$p.bq = (function(size) {
});
$p.m3 = (function(setNode, element, originalHash, elementHash, shift) {
  if ((setNode instanceof $c_sci_BitmapIndexedSetNode)) {
    var mask = $m_sci_Node$().cx(elementHash, shift);
    var bitpos = $m_sci_Node$().bT(mask);
    if (((setNode.a3 & bitpos) !== 0)) {
      var index = $m_sci_Node$().bF(setNode.a3, mask, bitpos);
      var element0 = setNode.d4(index);
      var element0UnimprovedHash = setNode.cw(index);
      if (((element0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().k(element0, element))) {
        $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V(this, setNode, bitpos, element0);
      } else {
        var element0Hash = $m_sc_Hashing$().bo(element0UnimprovedHash);
        var subNodeNew = setNode.lL(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0));
        setNode.us(bitpos, element0Hash, subNodeNew);
      }
    } else if (((setNode.aG & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().bF(setNode.aG, mask, bitpos);
      var subNode = setNode.d3(index$2);
      var beforeSize = subNode.O();
      var beforeHashCode = subNode.bJ();
      this.m3(subNode, element, originalHash, elementHash, ((5 + shift) | 0));
      setNode.bs = ((setNode.bs + ((subNode.O() - beforeSize) | 0)) | 0);
      setNode.c5 = ((setNode.c5 + ((subNode.bJ() - beforeHashCode) | 0)) | 0);
    } else {
      $p_sci_HashSetBuilder__insertValue__sci_BitmapIndexedSetNode__I__O__I__I__V(this, setNode, bitpos, element, originalHash, elementHash);
    }
  } else if ((setNode instanceof $c_sci_HashCollisionSetNode)) {
    var index$3 = $f_sc_SeqOps__indexOf__O__I__I(setNode.aQ, element, 0);
    if ((index$3 < 0)) {
      setNode.aQ = setNode.aQ.bz(element);
    } else {
      setNode.aQ = setNode.aQ.ea(index$3, element);
    }
  } else {
    throw new $c_s_MatchError(setNode);
  }
});
$p.lV = (function() {
  if ((this.f3.bs === 0)) {
    return $m_sci_HashSet$().hb;
  } else if ((this.fY !== null)) {
    return this.fY;
  } else {
    this.fY = new $c_sci_HashSet(this.f3);
    return this.fY;
  }
});
$p.iT = (function(elem) {
  $p_sci_HashSetBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().R(elem);
  var im = $m_sc_Hashing$().bo(h);
  this.m3(this.f3, elem, h, im, 0);
  return this;
});
$p.l1 = (function(xs) {
  $p_sci_HashSetBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashSet)) {
    new $c_sci_HashSetBuilder$$anon$1(this, xs);
  } else {
    var it = xs.f();
    while (it.l()) {
      this.iT(it.e());
    }
  }
  return this;
});
$p.b5 = (function(elems) {
  return this.l1(elems);
});
$p.az = (function(elem) {
  return this.iT(elem);
});
$p.aX = (function() {
  return this.lV();
});
var $d_sci_HashSetBuilder = new $TypeData().i($c_sci_HashSetBuilder, "scala.collection.immutable.HashSetBuilder", ({
  ht: 1,
  a9: 1,
  L: 1,
  J: 1,
  I: 1
}));
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.ek = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$());
}
$p = $c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
}
$h_sci_IndexedSeq$.prototype = $p;
$p.ln = (function(it) {
  return ($is_sci_IndexedSeq(it) ? it : $c_sc_SeqFactory$Delegate.prototype.j3.call(this, it));
});
$p.aA = (function(source) {
  return this.ln(source);
});
$p.j3 = (function(it) {
  return this.ln(it);
});
var $d_sci_IndexedSeq$ = new $TypeData().i($c_sci_IndexedSeq$, "scala.collection.immutable.IndexedSeq$", ({
  hv: 1,
  ba: 1,
  a1: 1,
  F: 1,
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
  this.fZ = null;
  this.pw = null;
  this.sM();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.bq = (function(size) {
});
$p.sM = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.pw = ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.lh()))));
  this.fZ = deferred;
});
$p.v7 = (function() {
  this.fZ.lw(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$())));
  return this.pw;
});
$p.sk = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.fZ.lw(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    $m_sci_LazyList$();
    return new $c_sci_LazyList$State$Cons(elem, ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.lh())))));
  })));
  this.fZ = deferred;
  return this;
});
$p.sb = (function(xs) {
  if ((xs.p() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.fZ.lw(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().lX(xs.f(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.lh()))))));
    this.fZ = deferred;
  }
  return this;
});
$p.b5 = (function(elems) {
  return this.sb(elems);
});
$p.az = (function(elem) {
  return this.sk(elem);
});
$p.aX = (function() {
  return this.v7();
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  hz: 1,
  a9: 1,
  L: 1,
  J: 1,
  I: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.g0 = null;
  this.g0 = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.l = (function() {
  return (!this.g0.b());
});
$p.e = (function() {
  if (this.g0.b()) {
    return $m_sc_Iterator$().F.e();
  } else {
    var res = this.g0.A().o();
    this.g0 = this.g0.A().aB();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  hB: 1,
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
$p.e1 = (function(elems) {
  return $m_sci_Nil$().y(elems);
});
$p.aO = (function() {
  return new $c_scm_ListBuffer();
});
$p.bK = (function() {
  return $m_sci_Nil$();
});
$p.aA = (function(source) {
  return $m_sci_Nil$().y(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  hE: 1,
  az: 1,
  a1: 1,
  F: 1,
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
  $thiz.f5 = outer;
  $thiz.dN = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.dN = 0;
  this.f5 = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.l = (function() {
  return (this.dN < 2);
});
$p.e = (function() {
  switch (this.dN) {
    case 0: {
      var result = this.cd(this.f5.co, this.f5.dg);
      break;
    }
    case 1: {
      var result = this.cd(this.f5.cp, this.f5.dh);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().F.e();
    }
  }
  this.dN = ((1 + this.dN) | 0);
  return result;
});
$p.d0 = (function(n) {
  this.dN = ((this.dN + n) | 0);
  return this;
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  $thiz.dO = outer;
  $thiz.dP = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.dP = 0;
  this.dO = null;
}
$p = $c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
}
$h_sci_Map$Map3$Map3Iterator.prototype = $p;
$p.l = (function() {
  return (this.dP < 3);
});
$p.e = (function() {
  switch (this.dP) {
    case 0: {
      var result = this.cd(this.dO.c6, this.dO.cR);
      break;
    }
    case 1: {
      var result = this.cd(this.dO.c7, this.dO.cS);
      break;
    }
    case 2: {
      var result = this.cd(this.dO.c8, this.dO.cT);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().F.e();
    }
  }
  this.dP = ((1 + this.dP) | 0);
  return result;
});
$p.d0 = (function(n) {
  this.dP = ((this.dP + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  $thiz.cU = outer;
  $thiz.dQ = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.dQ = 0;
  this.cU = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.l = (function() {
  return (this.dQ < 4);
});
$p.e = (function() {
  switch (this.dQ) {
    case 0: {
      var result = this.cd(this.cU.bP, this.cU.cq);
      break;
    }
    case 1: {
      var result = this.cd(this.cU.bQ, this.cU.cr);
      break;
    }
    case 2: {
      var result = this.cd(this.cU.bR, this.cU.cs);
      break;
    }
    case 3: {
      var result = this.cd(this.cU.bS, this.cU.ct);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().F.e();
    }
  }
  this.dQ = ((1 + this.dQ) | 0);
  return result;
});
$p.d0 = (function(n) {
  this.dQ = ((this.dQ + n) | 0);
  return this;
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.dR = null;
  this.hc = false;
  this.f6 = null;
  this.dR = $m_sci_Map$EmptyMap$();
  this.hc = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.bq = (function(size) {
});
$p.rp = (function() {
  return (this.hc ? this.f6.lU() : this.dR);
});
$p.si = (function(key, value) {
  if (this.hc) {
    this.f6.fk(key, value);
  } else if ((this.dR.O() < 4)) {
    this.dR = this.dR.eN(key, value);
  } else if (this.dR.al(key)) {
    this.dR = this.dR.eN(key, value);
  } else {
    this.hc = true;
    if ((this.f6 === null)) {
      this.f6 = new $c_sci_HashMapBuilder();
    }
    this.dR.sJ(this.f6);
    this.f6.fk(key, value);
  }
  return this;
});
$p.q4 = (function(xs) {
  return (this.hc ? (this.f6.l0(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.b5 = (function(elems) {
  return this.q4(elems);
});
$p.az = (function(elem) {
  return this.si(elem.bm(), elem.bd());
});
$p.aX = (function() {
  return this.rp();
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  hP: 1,
  a9: 1,
  L: 1,
  J: 1,
  I: 1
}));
/** @constructor */
function $c_sci_SetBuilderImpl() {
  this.fh = null;
  this.hf = false;
  this.fi = null;
  this.fh = $m_sci_Set$EmptySet$();
  this.hf = false;
}
$p = $c_sci_SetBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_SetBuilderImpl;
/** @constructor */
function $h_sci_SetBuilderImpl() {
}
$h_sci_SetBuilderImpl.prototype = $p;
$p.bq = (function(size) {
});
$p.rq = (function() {
  return (this.hf ? this.fi.lV() : this.fh);
});
$p.sl = (function(elem) {
  if (this.hf) {
    this.fi.iT(elem);
  } else if ((this.fh.O() < 4)) {
    this.fh = this.fh.ds(elem);
  } else if ((!this.fh.al(elem))) {
    this.hf = true;
    if ((this.fi === null)) {
      this.fi = new $c_sci_HashSetBuilder();
    }
    this.fh.sK(this.fi);
    this.fi.iT(elem);
  }
  return this;
});
$p.q5 = (function(xs) {
  return (this.hf ? (this.fi.l1(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.b5 = (function(elems) {
  return this.q5(elems);
});
$p.az = (function(elem) {
  return this.sl(elem);
});
$p.aX = (function() {
  return this.rq();
});
var $d_sci_SetBuilderImpl = new $TypeData().i($c_sci_SetBuilderImpl, "scala.collection.immutable.SetBuilderImpl", ({
  i7: 1,
  a9: 1,
  L: 1,
  J: 1,
  I: 1
}));
function $ps_sci_Vector$__liftedTree1$1__I() {
  try {
    return $m_jl_Integer$().lS($m_jl_System$SystemProperties$().ls("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10);
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
  this.pG = 0;
  this.pH = null;
  $n_sci_Vector$ = this;
  this.pG = $ps_sci_Vector$__liftedTree1$1__I();
  this.pH = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.e1 = (function(elems) {
  return this.bB(elems);
});
$p.bB = (function(it) {
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
          var x = it.aN().bg();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.de;
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
        it.f().bZ(a1$2, 0, 2147483647);
        var $x_1 = a1$2;
      }
      return new $c_sci_Vector1($x_1);
    } else {
      return new $c_sci_VectorBuilder().hp(it).je();
    }
  }
});
$p.aO = (function() {
  return new $c_sci_VectorBuilder();
});
$p.aA = (function(source) {
  return this.bB(source);
});
$p.bK = (function() {
  return $m_sci_Vector0$();
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  ie: 1,
  az: 1,
  a1: 1,
  F: 1,
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
    a = $thiz.bb;
    var i = (($thiz.Q >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.r(i, dest, 0, length);
    }
    var newOffset = (($thiz.Q % 33554432) | 0);
    $thiz.I = (($thiz.I - (($thiz.Q - newOffset) | 0)) | 0);
    $thiz.Q = newOffset;
    if (((($thiz.I >>> 25) | 0) === 0)) {
      $thiz.X = 5;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.X >= 5)) {
    if ((a === null)) {
      a = $thiz.ax;
    }
    var i$2 = (31 & (($thiz.Q >>> 20) | 0));
    if (($thiz.X === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.r(i$2, dest$1, 0, length$1);
      }
      $thiz.ax = a;
      var newOffset$1 = (($thiz.Q % 1048576) | 0);
      $thiz.I = (($thiz.I - (($thiz.Q - newOffset$1) | 0)) | 0);
      $thiz.Q = newOffset$1;
      if (((($thiz.I >>> 20) | 0) === 0)) {
        $thiz.X = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().aI(a, i$2, 32);
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
      $thiz.I = (($thiz.I - (($thiz.Q - newOffset$2) | 0)) | 0);
      $thiz.Q = newOffset$2;
      if (((($thiz.I >>> 15) | 0) === 0)) {
        $thiz.X = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().aI(a, i$3, 32);
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
      $thiz.I = (($thiz.I - (($thiz.Q - newOffset$3) | 0)) | 0);
      $thiz.Q = newOffset$3;
      if (((($thiz.I >>> 10) | 0) === 0)) {
        $thiz.X = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().aI(a, i$4, 32);
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
      $thiz.I = (($thiz.I - (($thiz.Q - newOffset$4) | 0)) | 0);
      $thiz.Q = newOffset$4;
      if (((($thiz.I >>> 5) | 0) === 0)) {
        $thiz.X = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().aI(a, i$5, 32);
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
        a = $m_ju_Arrays$().aI(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.hg = false;
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
      var a = (31 & ((((1024 - $thiz.I) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.I >>> 5) | 0));
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
      if (((($thiz.I % 1024) | 0) !== 0)) {
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
            var lo = t.q;
            var hi = t.t;
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
      var a$1 = (31 & ((((32768 - $thiz.I) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.I >>> 10) | 0));
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
      if (((($thiz.I % 32768) | 0) !== 0)) {
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
            var lo$1 = t$1.q;
            var hi$1 = t$1.t;
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
      var a$2 = (31 & ((((1048576 - $thiz.I) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.I >>> 15) | 0));
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
      if (((($thiz.I % 1048576) | 0) !== 0)) {
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
            var lo$2 = t$2.q;
            var hi$2 = t$2.t;
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
      var a$3 = (31 & ((((33554432 - $thiz.I) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.I >>> 20) | 0));
      var dest$6 = $thiz.ax;
      slice.r(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.ax;
        slice.r(copy1$4, dest$7, 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      if (((($thiz.I % 33554432) | 0) !== 0)) {
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
            var lo$3 = t$3.q;
            var hi$3 = t$3.t;
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
      var destPos$5 = (($thiz.I >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.bb;
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
  var sliceCount = xs.da();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.du(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var x1 = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
    } else if ((($thiz.S === 32) || ($thiz.S === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1);
    } else {
      $m_sci_VectorStatics$().lj((((-2) + x1) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((data$2$2) => {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$2$2);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.I) | 0);
  var xor = (idx ^ $thiz.I);
  $thiz.I = idx;
  $thiz.S = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.I + n) | 0);
    var xor = (idx ^ $thiz.I);
    $thiz.I = idx;
    $thiz.S = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.aj) + ", a2=") + $thiz.P) + ", a3=") + $thiz.V) + ", a4=") + $thiz.a8) + ", a5=") + $thiz.ax) + ", a6=") + $thiz.bb) + ", depth=") + $thiz.X));
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
      $thiz.ax = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.ax.a[0] = $thiz.a8;
      $thiz.X = 5;
    }
    $thiz.aj = new $ac_O(32);
    $thiz.P = new ($d_O.r().r().C)(32);
    $thiz.V = new ($d_O.r().r().r().C)(32);
    $thiz.a8 = new ($d_O.r().r().r().r().C)(32);
    $thiz.P.a[(31 & ((idx >>> 5) | 0))] = $thiz.aj;
    $thiz.V.a[(31 & ((idx >>> 10) | 0))] = $thiz.P;
    $thiz.a8.a[(31 & ((idx >>> 15) | 0))] = $thiz.V;
    $thiz.ax.a[(31 & ((idx >>> 20) | 0))] = $thiz.a8;
  } else {
    if (($thiz.X <= 5)) {
      $thiz.bb = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.bb.a[0] = $thiz.ax;
      $thiz.X = 6;
    }
    $thiz.aj = new $ac_O(32);
    $thiz.P = new ($d_O.r().r().C)(32);
    $thiz.V = new ($d_O.r().r().r().C)(32);
    $thiz.a8 = new ($d_O.r().r().r().r().C)(32);
    $thiz.ax = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.P.a[(31 & ((idx >>> 5) | 0))] = $thiz.aj;
    $thiz.V.a[(31 & ((idx >>> 10) | 0))] = $thiz.P;
    $thiz.a8.a[(31 & ((idx >>> 15) | 0))] = $thiz.V;
    $thiz.ax.a[(31 & ((idx >>> 20) | 0))] = $thiz.a8;
    $thiz.bb.a[((idx >>> 25) | 0)] = $thiz.ax;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.bb = null;
  this.ax = null;
  this.a8 = null;
  this.V = null;
  this.P = null;
  this.aj = null;
  this.S = 0;
  this.I = 0;
  this.Q = 0;
  this.hg = false;
  this.X = 0;
  this.aj = new $ac_O(32);
  this.S = 0;
  this.I = 0;
  this.Q = 0;
  this.hg = false;
  this.X = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.bq = (function(size) {
});
$p.r3 = (function(v) {
  var x1 = v.da();
  switch (x1) {
    case 0: {
      break;
    }
    case 1: {
      this.X = 1;
      var i = v.d.a.length;
      this.S = (31 & i);
      this.I = ((i - this.S) | 0);
      var a = v.d;
      this.aj = ((a.a.length === 32) ? a : $m_ju_Arrays$().aI(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.ba;
      var a$1 = v.g;
      this.aj = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().aI(a$1, 0, 32));
      this.X = 2;
      this.Q = ((32 - v.bv) | 0);
      var i$1 = ((v.h + this.Q) | 0);
      this.S = (31 & i$1);
      this.I = ((i$1 - this.S) | 0);
      this.P = new ($d_O.r().r().C)(32);
      this.P.a[0] = v.d;
      var dest = this.P;
      var length = d2.a.length;
      d2.r(0, dest, 1, length);
      this.P.a[((1 + d2.a.length) | 0)] = this.aj;
      break;
    }
    case 5: {
      var d3 = v.aK;
      var s2 = v.aR;
      var a$2 = v.g;
      this.aj = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().aI(a$2, 0, 32));
      this.X = 3;
      this.Q = ((1024 - v.b0) | 0);
      var i$2 = ((v.h + this.Q) | 0);
      this.S = (31 & i$2);
      this.I = ((i$2 - this.S) | 0);
      this.V = new ($d_O.r().r().r().C)(32);
      this.V.a[0] = $m_sci_VectorStatics$().E(v.d, v.bl);
      var dest$1 = this.V;
      var length$1 = d3.a.length;
      d3.r(0, dest$1, 1, length$1);
      this.P = $m_ju_Arrays$().ab(s2, 32);
      this.V.a[((1 + d3.a.length) | 0)] = this.P;
      this.P.a[s2.a.length] = this.aj;
      break;
    }
    case 7: {
      var d4 = v.an;
      var s3 = v.ar;
      var s2$2 = v.aq;
      var a$3 = v.g;
      this.aj = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().aI(a$3, 0, 32));
      this.X = 4;
      this.Q = ((32768 - v.aD) | 0);
      var i$3 = ((v.h + this.Q) | 0);
      this.S = (31 & i$3);
      this.I = ((i$3 - this.S) | 0);
      this.a8 = new ($d_O.r().r().r().r().C)(32);
      this.a8.a[0] = $m_sci_VectorStatics$().E($m_sci_VectorStatics$().E(v.d, v.aT), v.aU);
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
      this.aj = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().aI(a$4, 0, 32));
      this.X = 5;
      this.Q = ((1048576 - v.a9) | 0);
      var i$4 = ((v.h + this.Q) | 0);
      this.S = (31 & i$4);
      this.I = ((i$4 - this.S) | 0);
      this.ax = new ($d_O.r().r().r().r().r().C)(32);
      this.ax.a[0] = $m_sci_VectorStatics$().E($m_sci_VectorStatics$().E($m_sci_VectorStatics$().E(v.d, v.at), v.au), v.av);
      var dest$3 = this.ax;
      var length$3 = d5.a.length;
      d5.r(0, dest$3, 1, length$3);
      this.a8 = $m_ju_Arrays$().ab(s4, 32);
      this.V = $m_ju_Arrays$().ab(s3$2, 32);
      this.P = $m_ju_Arrays$().ab(s2$3, 32);
      this.ax.a[((1 + d5.a.length) | 0)] = this.a8;
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
      this.aj = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().aI(a$5, 0, 32));
      this.X = 6;
      this.Q = ((33554432 - v.a7) | 0);
      var i$5 = ((v.h + this.Q) | 0);
      this.S = (31 & i$5);
      this.I = ((i$5 - this.S) | 0);
      this.bb = new ($d_O.r().r().r().r().r().r().C)(64);
      this.bb.a[0] = $m_sci_VectorStatics$().E($m_sci_VectorStatics$().E($m_sci_VectorStatics$().E($m_sci_VectorStatics$().E(v.d, v.af), v.ag), v.ah), v.ai);
      var dest$4 = this.bb;
      var length$4 = d6.a.length;
      d6.r(0, dest$4, 1, length$4);
      this.ax = $m_ju_Arrays$().ab(s5, 32);
      this.a8 = $m_ju_Arrays$().ab(s4$2, 32);
      this.V = $m_ju_Arrays$().ab(s3$3, 32);
      this.P = $m_ju_Arrays$().ab(s2$4, 32);
      this.bb.a[((1 + d6.a.length) | 0)] = this.ax;
      this.ax.a[s5.a.length] = this.a8;
      this.a8.a[s4$2.a.length] = this.V;
      this.V.a[s3$3.a.length] = this.P;
      this.P.a[s2$4.a.length] = this.aj;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  if (((this.S === 0) && (this.I > 0))) {
    this.S = 32;
    this.I = (((-32) + this.I) | 0);
  }
  return this;
});
$p.ss = (function(before, bigVector) {
  if (((this.S !== 0) || (this.I !== 0))) {
    throw new $c_jl_UnsupportedOperationException("A non-empty VectorBuilder cannot be aligned retrospectively. Please call .reset() or use a new VectorBuilder.");
  }
  if ($m_sci_Vector0$().n(bigVector)) {
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
    var x1$2___1$mcI$sp = bigVector.bv;
    var x1$2___2$mcI$sp = 32;
  } else if ((bigVector instanceof $c_sci_Vector3)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.b0;
    var x1$2___2$mcI$sp = 1024;
  } else if ((bigVector instanceof $c_sci_Vector4)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.aD;
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
  this.hg = true;
  return this;
});
$p.sm = (function(elem) {
  if ((this.S === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.aj.a[this.S] = elem;
  this.S = ((1 + this.S) | 0);
  return this;
});
$p.hp = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.S === 0) && (this.I === 0)) && (!this.hg)) ? this.r3(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.je = (function() {
  if (this.hg) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.S + this.I) | 0);
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
    var data = $m_ju_Arrays$().aI(this.P, 1, i2);
    var prefix1 = this.P.a[0];
    var a$1 = this.P.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().ab(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.Q) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().aI(this.V, 1, i3);
    var a$2 = this.V.a[0];
    var prefix2 = $m_ju_Arrays$().aI(a$2, 1, a$2.a.length);
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
    var data$3 = $m_ju_Arrays$().aI(this.a8, 1, i4);
    var a$4 = this.a8.a[0];
    var prefix3 = $m_ju_Arrays$().aI(a$4, 1, a$4.a.length);
    var a$5 = this.a8.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().aI(a$5, 1, a$5.a.length);
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
    var data$4 = $m_ju_Arrays$().aI(this.ax, 1, i5);
    var a$7 = this.ax.a[0];
    var prefix4 = $m_ju_Arrays$().aI(a$7, 1, a$7.a.length);
    var a$8 = this.ax.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().aI(a$8, 1, a$8.a.length);
    var a$9 = this.ax.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().aI(a$9, 1, a$9.a.length);
    var prefix1$4 = this.ax.a[0].a[0].a[0].a[0];
    var suffix4 = $m_ju_Arrays$().ab(this.ax.a[i5], i4$2);
    var suffix3$2 = $m_ju_Arrays$().ab(this.ax.a[i5].a[i4$2], i3$3);
    var suffix2$3 = $m_ju_Arrays$().ab(this.ax.a[i5].a[i4$2].a[i3$3], i2$4);
    var a$10 = this.ax.a[i5].a[i4$2].a[i3$3].a[i2$4];
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
    var data$5 = $m_ju_Arrays$().aI(this.bb, 1, i6);
    var a$11 = this.bb.a[0];
    var prefix5 = $m_ju_Arrays$().aI(a$11, 1, a$11.a.length);
    var a$12 = this.bb.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().aI(a$12, 1, a$12.a.length);
    var a$13 = this.bb.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().aI(a$13, 1, a$13.a.length);
    var a$14 = this.bb.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().aI(a$14, 1, a$14.a.length);
    var prefix1$5 = this.bb.a[0].a[0].a[0].a[0].a[0];
    var suffix5 = $m_ju_Arrays$().ab(this.bb.a[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().ab(this.bb.a[i6].a[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().ab(this.bb.a[i6].a[i5$2].a[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().ab(this.bb.a[i6].a[i5$2].a[i4$3].a[i3$4], i2$5);
    var a$15 = this.bb.a[i6].a[i5$2].a[i4$3].a[i3$4].a[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.a.length === len$5) ? a$15 : $m_ju_Arrays$().ab(a$15, len$5));
    var len1$4 = prefix1$5.a.length;
    var len12$4 = ((len1$4 + (prefix2$4.a.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.x = (function() {
  return (((((((("VectorBuilder(len1=" + this.S) + ", lenRest=") + this.I) + ", offset=") + this.Q) + ", depth=") + this.X) + ")");
});
$p.aX = (function() {
  return this.je();
});
$p.b5 = (function(elems) {
  return this.hp(elems);
});
$p.az = (function(elem) {
  return this.sm(elem);
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  ih: 1,
  a9: 1,
  L: 1,
  J: 1,
  I: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.pI = null;
  $n_scm_ArrayBuffer$ = this;
  this.pI = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.e1 = (function(elems) {
  return this.qT(elems);
});
$p.qT = (function(coll) {
  var k = coll.p();
  if ((k >= 0)) {
    var array = this.rt(this.pI, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.bZ(array, 0, 2147483647) : coll.f().bZ(array, 0, 2147483647));
    if ((actual !== k)) {
      throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), ((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).q6(coll);
  }
});
$p.aO = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.v6 = (function(arrayLen, targetLen) {
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
$p.rt = (function(array, curSize, targetSize) {
  var newLen = this.v6(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.r(0, res, 0, curSize);
    return res;
  }
});
$p.bK = (function() {
  return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
});
$p.aA = (function(source) {
  return this.qT(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  im: 1,
  az: 1,
  a1: 1,
  F: 1,
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
  this.eB = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.bq = (function(size) {
  this.eB.bq(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  io: 1,
  bi: 1,
  L: 1,
  J: 1,
  I: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.ek = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  it: 1,
  ba: 1,
  a1: 1,
  F: 1,
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
  this.eB = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), initialCapacity$1, loadFactor$1));
}
$p = $c_scm_HashSet$$anon$4.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_HashSet$$anon$4;
/** @constructor */
function $h_scm_HashSet$$anon$4() {
}
$h_scm_HashSet$$anon$4.prototype = $p;
$p.bq = (function(size) {
  this.eB.bq(size);
});
var $d_scm_HashSet$$anon$4 = new $TypeData().i($c_scm_HashSet$$anon$4, "scala.collection.mutable.HashSet$$anon$4", ({
  iD: 1,
  bi: 1,
  L: 1,
  J: 1,
  I: 1
}));
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  $thiz.hj = outer;
  $thiz.eD = 0;
  $thiz.dW = null;
  $thiz.hk = outer.bx.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.eD = 0;
  this.dW = null;
  this.hk = 0;
  this.hj = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.l = (function() {
  if ((this.dW !== null)) {
    return true;
  } else {
    while ((this.eD < this.hk)) {
      var n = this.hj.bx.a[this.eD];
      this.eD = ((1 + this.eD) | 0);
      if ((n !== null)) {
        this.dW = n;
        return true;
      }
    }
    return false;
  }
});
$p.e = (function() {
  if ((!this.l())) {
    return $m_sc_Iterator$().F.e();
  } else {
    var r = this.li(this.dW);
    this.dW = this.dW.by;
    return r;
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.hl = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.hl = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.bq = (function(size) {
});
$p.b5 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.aX = (function() {
  return this.hl;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.ek = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  iG: 1,
  ba: 1,
  a1: 1,
  F: 1,
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
$p.e1 = (function(elems) {
  return new $c_scm_ListBuffer().jg(elems);
});
$p.aO = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.bK = (function() {
  return new $c_scm_ListBuffer();
});
$p.aA = (function(source) {
  return new $c_scm_ListBuffer().jg(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  iJ: 1,
  az: 1,
  a1: 1,
  F: 1,
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
  this.kX = null;
  this.pQ = null;
  this.pP = 0;
  this.kX = underlying;
  this.pQ = mutationCount;
  this.pP = (mutationCount.L() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.l = (function() {
  $m_scm_MutationTracker$().qt(this.pP, (this.pQ.L() | 0), "mutation occurred during iteration");
  return this.kX.l();
});
$p.e = (function() {
  return this.kX.e();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  iL: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.bg();
    var x$3 = x.bg();
    return (x$2 === x$3);
  } else {
    return false;
  }
}
function $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz) {
  return (clazz.D.Z ? (("Array[" + $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz.D.Q())) + "]") : clazz.D.N);
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.M)));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.M)));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.hn = 0;
  this.pU = 0;
  this.pV = null;
  this.pV = x$2;
  this.hn = 0;
  this.pU = x$2.b6();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.l = (function() {
  return (this.hn < this.pU);
});
$p.e = (function() {
  var result = this.pV.b7(this.hn);
  this.hn = ((1 + this.hn) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  jC: 1,
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
$p.e1 = (function(elems) {
  return this.qU(elems);
});
$p.aO = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.qU = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).aX();
});
$p.aA = (function(source) {
  return this.qU(source);
});
$p.bK = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  jJ: 1,
  az: 1,
  a1: 1,
  F: 1,
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
$p.e1 = (function(elems) {
  return this.lp(elems);
});
$p.lp = (function(source) {
  return this.aO().b5(source).aX();
});
$p.aO = (function() {
  return new $c_scm_Builder$$anon$1($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), x$1$2$2.eE))));
});
$p.aA = (function(source) {
  return this.lp(source);
});
$p.bK = (function() {
  return $ct_sjsr_WrappedVarArgs__(new $c_sjsr_WrappedVarArgs());
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  jX: 1,
  az: 1,
  a1: 1,
  F: 1,
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
  this.dl = null;
  this.dl = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.lC = (function() {
  return true;
});
$p.r5 = (function() {
  return false;
});
$p.J = (function() {
  var $x_1 = this.dl;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.ak : $x_1);
});
$p.lI = (function(f) {
  return this;
});
$p.rl = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.bI(this.dl, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().cG(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
  }
});
$p.rD = (function() {
  return $m_s_None$();
});
$p.cv = (function(fa, fb) {
  return fa.c(this.dl);
});
$p.b8 = (function() {
  return "Failure";
});
$p.b6 = (function() {
  return 1;
});
$p.b7 = (function(x$1) {
  return ((x$1 === 0) ? this.dl : $m_sr_Statics$().eK(x$1));
});
$p.bp = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().cM(this, (-889275714), false);
});
$p.x = (function() {
  return $m_sr_ScalaRunTime$().gb(this);
});
$p.n = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_util_Failure)) {
    var x = this.dl;
    var x$2 = x$1.dl;
    return ((x === null) ? (x$2 === null) : x.n(x$2));
  } else {
    return false;
  }
});
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.db)));
}
var $d_s_util_Failure = new $TypeData().i($c_s_util_Failure, "scala.util.Failure", ({
  db: 1,
  dd: 1,
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
$p.lC = (function() {
  return false;
});
$p.r5 = (function() {
  return true;
});
$p.J = (function() {
  return this.cE;
});
$p.lI = (function(f) {
  try {
    return new $c_s_util_Success(f.c(this.cE));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().cG(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
  }
});
$p.rl = (function(pf) {
  return this;
});
$p.rD = (function() {
  return new $c_s_Some(this.cE);
});
$p.cv = (function(fa, fb) {
  try {
    return fb.c(this.cE);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().cG(e$2)) {
      return fa.c(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
  }
});
$p.b8 = (function() {
  return "Success";
});
$p.b6 = (function() {
  return 1;
});
$p.b7 = (function(x$1) {
  return ((x$1 === 0) ? this.cE : $m_sr_Statics$().eK(x$1));
});
$p.bp = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().cM(this, (-889275714), false);
});
$p.x = (function() {
  return $m_sr_ScalaRunTime$().gb(this);
});
$p.n = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().k(this.cE, x$1.cE)));
});
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dc)));
}
var $d_s_util_Success = new $TypeData().i($c_s_util_Success, "scala.util.Success", ({
  dc: 1,
  dd: 1,
  B: 1,
  d: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_combine_CombineObservable__onInputsReady__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  if ((!transaction.sS($thiz))) {
    transaction.tp($thiz);
  }
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__syncFire__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.gi($thiz.lb(), transaction);
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__onStart__V($thiz) {
  var arr = $thiz.jt;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var _$1 = arr[i];
    $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V(_$1.jv, _$1, false);
    i = ((1 + i) | 0);
  }
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__onStop__V($thiz) {
  var arr = $thiz.jt;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var _$2 = arr[i];
    $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V(_$2.jv, _$2);
    i = ((1 + i) | 0);
  }
}
class $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(causes) {
    super();
    this.gG = null;
    this.gG = causes;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, $m_Lcom_raquo_airstream_core_AirstreamError$().sO(causes), null, true, true);
    var this$3 = causes.fl($m_s_$less$colon$less$().dA).bL();
    if ((!this$3.b())) {
      this.j6(this$3.J());
    }
  }
  bp() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().cM(this, (-889275714), false);
  }
  n(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError)) {
      var x = this.gG;
      var x$2 = x$0.gG;
      return ((x === null) ? (x$2 === null) : x.n(x$2));
    } else {
      return false;
    }
  }
  b6() {
    return 1;
  }
  b8() {
    return "CombinedError";
  }
  b7(n) {
    if ((n === 0)) {
      return this.gG;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  x() {
    return ("CombinedError: " + $f_sc_IterableOnceOps__mkString__T__T__T__T(this.gG.fl($m_s_$less$colon$less$().dA).fw(), "", "; ", ""));
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$CombinedError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bs)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$CombinedError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$CombinedError, "com.raquo.airstream.core.AirstreamError$CombinedError", ({
  bs: 1,
  at: 1,
  o: 1,
  a: 1,
  d: 1,
  B: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.gI = null;
    this.gH = null;
    this.gI = error;
    this.gH = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eJ(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().eJ(cause)), null, true, true);
    this.j6(cause);
  }
  bp() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().cM(this, (-889275714), false);
  }
  n(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.gI;
      var x$2 = x$0.gI;
      if (((x === null) ? (x$2 === null) : x.n(x$2))) {
        var x$3 = this.gH;
        var x$4 = x$0.gH;
        return ((x$3 === null) ? (x$4 === null) : x$3.n(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  b6() {
    return 2;
  }
  b8() {
    return "ErrorHandlingError";
  }
  b7(n) {
    if ((n === 0)) {
      return this.gI;
    }
    if ((n === 1)) {
      return this.gH;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  x() {
    return ((("ErrorHandlingError: " + this.gI) + "; cause: ") + this.gH);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bt)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", ({
  bt: 1,
  at: 1,
  o: 1,
  a: 1,
  d: 1,
  B: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.gJ = null;
    this.gJ = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eJ(error)), null, true, true);
  }
  bp() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().cM(this, (-889275714), false);
  }
  n(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.gJ;
      var x$2 = x$0.gJ;
      return ((x === null) ? (x$2 === null) : x.n(x$2));
    } else {
      return false;
    }
  }
  b6() {
    return 1;
  }
  b8() {
    return "ObserverError";
  }
  b7(n) {
    if ((n === 0)) {
      return this.gJ;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  x() {
    return ("ObserverError: " + this.gJ);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bu)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverError, "com.raquo.airstream.core.AirstreamError$ObserverError", ({
  bu: 1,
  at: 1,
  o: 1,
  a: 1,
  d: 1,
  B: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.gL = null;
    this.gK = null;
    this.gL = error;
    this.gK = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eJ(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().eJ(cause)), null, true, true);
    this.j6(cause);
  }
  bp() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().cM(this, (-889275714), false);
  }
  n(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.gL;
      var x$2 = x$0.gL;
      if (((x === null) ? (x$2 === null) : x.n(x$2))) {
        var x$3 = this.gK;
        var x$4 = x$0.gK;
        return ((x$3 === null) ? (x$4 === null) : x$3.n(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  b6() {
    return 2;
  }
  b8() {
    return "ObserverErrorHandlingError";
  }
  b7(n) {
    if ((n === 0)) {
      return this.gL;
    }
    if ((n === 1)) {
      return this.gK;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  x() {
    return ((("ObserverErrorHandlingError: " + this.gL) + "; cause: ") + this.gK);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bv)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", ({
  bv: 1,
  at: 1,
  o: 1,
  a: 1,
  d: 1,
  B: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(trx, depth) {
    super();
    this.fA = null;
    this.fz = 0;
    this.fA = trx;
    this.fz = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  bp() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().i(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().R(this.fA));
    acc = $m_sr_Statics$().i(acc, this.fz);
    return $m_sr_Statics$().G(acc, 2);
  }
  n(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.fz === x$0.fz)) {
        var x = this.fA;
        var x$2 = x$0.fA;
        return (x === x$2);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  b6() {
    return 2;
  }
  b8() {
    return "TransactionDepthExceeded";
  }
  b7(n) {
    if ((n === 0)) {
      return this.fA;
    }
    if ((n === 1)) {
      return this.fz;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  x() {
    return ((("TransactionDepthExceeded: " + this.fA) + "; maxDepth: ") + this.fz);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bw)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded, "com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded", ({
  bw: 1,
  at: 1,
  o: 1,
  a: 1,
  d: 1,
  B: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$VarError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(message, cause) {
    super();
    this.gN = null;
    this.gM = null;
    this.gN = message;
    this.gM = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, $m_Lcom_raquo_airstream_core_AirstreamError$().sP(message, cause), null, true, true);
    if ((!cause.b())) {
      this.j6(cause.J());
    }
  }
  bp() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().cM(this, (-889275714), false);
  }
  n(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$VarError)) {
      if ((this.gN === x$0.gN)) {
        var x = this.gM;
        var x$2 = x$0.gM;
        return ((x === null) ? (x$2 === null) : x.n(x$2));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  b6() {
    return 2;
  }
  b8() {
    return "VarError";
  }
  b7(n) {
    if ((n === 0)) {
      return this.gN;
    }
    if ((n === 1)) {
      return this.gM;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  x() {
    return ((("VarError: " + this.gN) + "; cause: ") + this.gM);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$VarError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bx)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$VarError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$VarError, "com.raquo.airstream.core.AirstreamError$VarError", ({
  bx: 1,
  at: 1,
  o: 1,
  a: 1,
  d: 1,
  B: 1
}));
function $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz) {
  $thiz.hT();
}
var $d_Lcom_raquo_airstream_core_Signal = new $TypeData().i(1, "com.raquo.airstream.core.Signal", ({
  aH: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aE: 1
}));
function $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V($thiz) {
  $thiz.mH = 1;
  $thiz.i6 = 0;
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V($thiz) {
  $thiz.i6 = ((1 + $thiz.i6) | 0);
  $thiz.i5.mB.L();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V($thiz) {
  try {
    var $x_1 = new $c_s_util_Success(($thiz.i5.mz.L(), (void 0)));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().cG(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
    }
  }
  $x_1.rl(new $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1($thiz));
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V($thiz) {
  $thiz.i5.mA.L();
}
function $ct_Lcom_raquo_airstream_state_SourceVar__s_util_Try__($thiz, initial) {
  $thiz.jK = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz);
  $thiz.ic = initial;
  $thiz.ib = new $c_Lcom_raquo_airstream_state_VarSignal($thiz.ic, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz))));
  $thiz.bM = $thiz.ib;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar() {
  this.jK = null;
  this.id = null;
  this.ic = null;
  this.ib = null;
  this.bM = null;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.e6 = (function() {
  return this.jK;
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.hS = (function() {
  return this.bM;
});
$p.lY = (function(value, transaction) {
  this.ic = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.ib, value, transaction);
});
$p.eM = (function() {
  return this.bM;
});
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V($thiz, propDomName) {
  var x = $thiz.k6;
  if ((x === (void 0))) {
    $thiz.k6 = $m_sjs_js_defined$().sz($m_Lcom_raquo_ew_JsArray$().bE($m_sr_ScalaRunTime$().B(new ($d_T.r().C)([propDomName]))));
  } else {
    (x.push(propDomName) | 0);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z($thiz, propDomName) {
  var x = $thiz.oI;
  if ((x !== (void 0))) {
    _return: {
      var len = (x.length | 0);
      var i = 0;
      while ((i < len)) {
        if ((x[i].wg() === propDomName)) {
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
  this.il = null;
  this.cQ = null;
  this.k5 = null;
  this.eX = null;
  this.gW = null;
  this.k7 = null;
  this.bC = null;
  this.oI = null;
  this.k6 = null;
  this.k7 = tag;
  this.bC = ref;
  this.il = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
  this.oI = (void 0);
  this.k6 = (void 0);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.dn = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gd(parentNode, this, (void 0));
});
$p.j0 = (function() {
  return this.cQ;
});
$p.qv = (function(x$0) {
  this.cQ = x$0;
});
$p.hX = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.hR = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.sU = (function() {
  if ($m_Lcom_raquo_laminar_DomApi$().ua(this.bC)) {
    var x1 = this.k7;
    if (false) {
      return x1.w0();
    }
    return (void 0);
  } else {
    return $m_Lcom_raquo_laminar_inputs_InputController$().op;
  }
});
$p.u8 = (function(propDomName) {
  var x = this.sU();
  return ((x !== (void 0)) && $m_Lcom_raquo_ew_JsArray$RichJsArray$().u1(x, propDomName, 0));
});
$p.uI = (function(key) {
  if ((key instanceof $c_Lcom_raquo_laminar_keys_HtmlProp)) {
    if (this.u8(key.dx)) {
      if ($p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z(this, key.dx)) {
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((((("Can not add uncontrolled `" + key.dx) + " <-- ???` to element `") + $m_Lcom_raquo_laminar_DomApi$().qC(this.bC)) + "` that already has an input controller for `") + key.dx) + "` property."));
      } else {
        $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V(this, key.dx);
      }
    }
  }
});
$p.x = (function() {
  return (("ReactiveHtmlElement(" + ((this.bC !== null) ? this.bC.outerHTML : ("tag=" + this.k7.ka))) + ")");
});
$p.aP = (function() {
  return this.bC;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  fl: 1,
  aJ: 1,
  Z: 1,
  b4: 1,
  bI: 1,
  fj: 1
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
  fx: 1,
  b6: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().lN($thiz);
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bO)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  bO: 1,
  ao: 1,
  a: 1,
  aa: 1,
  a5: 1,
  aF: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  return $m_jl_FloatingPointBits$().lN(value);
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Float(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bP)));
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  bP: 1,
  ao: 1,
  a: 1,
  aa: 1,
  a5: 1,
  aF: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bR)));
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  bR: 1,
  ao: 1,
  a: 1,
  aa: 1,
  a5: 1,
  aF: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  return ((that instanceof $c_RTLong) && (($thiz.q === that.q) && ($thiz.t === that.t)));
}
function $f_jl_Long__hashCode__I($thiz) {
  return ($thiz.q ^ $thiz.t);
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().lP($thiz.q, $thiz.t);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bS)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  bS: 1,
  ao: 1,
  a: 1,
  aa: 1,
  a5: 1,
  aF: 1
}), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  fK: 1,
  U: 1,
  w: 1,
  v: 1,
  o: 1,
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
  var str = $m_jl_Character$().jj(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  fO: 1,
  a: 1,
  aa: 1,
  b5: 1,
  a5: 1,
  aF: 1
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
  fR: 1,
  b6: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_FormatterClosedException extends $c_jl_IllegalStateException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_ju_FormatterClosedException = new $TypeData().i($c_ju_FormatterClosedException, "java.util.FormatterClosedException", ({
  ga: 1,
  bQ: 1,
  w: 1,
  v: 1,
  o: 1,
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
$p.tN = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$p.b8 = (function() {
  return "None";
});
$p.b6 = (function() {
  return 0;
});
$p.b7 = (function(x$1) {
  return $m_sr_Statics$().eK(x$1);
});
$p.bp = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return 2433880;
});
$p.x = (function() {
  return "None";
});
$p.J = (function() {
  this.tN();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  gx: 1,
  bY: 1,
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
  this.eh = null;
  this.eh = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.J = (function() {
  return this.eh;
});
$p.b8 = (function() {
  return "Some";
});
$p.b6 = (function() {
  return 1;
});
$p.b7 = (function(x$1) {
  return ((x$1 === 0) ? this.eh : $m_sr_Statics$().eK(x$1));
});
$p.bp = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().cM(this, (-889275714), false);
});
$p.x = (function() {
  return $m_sr_ScalaRunTime$().gb(this);
});
$p.n = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().k(this.eh, x$1.eh)));
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bZ)));
}
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  bZ: 1,
  bY: 1,
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
$p.b2 = (function() {
  return $m_sc_Iterable$();
});
$p.cb = (function() {
  return this.bh();
});
$p.bh = (function() {
  return "Iterable";
});
$p.x = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.gk = (function(coll) {
  return this.b2().aA(coll);
});
$p.hH = (function() {
  return this.b2().aO();
});
$p.o = (function() {
  return this.f().e();
});
$p.bL = (function() {
  return $f_sc_IterableOps__headOption__s_Option(this);
});
$p.lZ = (function(otherSize) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, otherSize);
});
$p.N = (function(f) {
  return $f_sc_IterableOps__map__F1__O(this, f);
});
$p.U = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.dp = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
});
$p.j2 = (function(p) {
  return $f_sc_IterableOnceOps__exists__F1__Z(this, p);
});
$p.fm = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.hQ = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op);
});
$p.b = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.bZ = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.iY = (function(pf) {
  return $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(this, pf);
});
$p.eG = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fw = (function() {
  return $m_sci_Nil$().y(this);
});
$p.m2 = (function() {
  return $m_sci_Vector$().bB(this);
});
$p.jh = (function(evidence$2) {
  return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2);
});
$p.p = (function() {
  return (-1);
});
$p.gj = (function(coll) {
  return this.gk(coll);
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.ch = xs;
  $thiz.C = 0;
  $thiz.c2 = $m_jl_reflect_Array$().bU($thiz.ch);
  return $thiz;
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.ch = null;
  this.C = 0;
  this.c2 = 0;
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.p = (function() {
  return ((this.c2 - this.C) | 0);
});
$p.l = (function() {
  return (this.C < this.c2);
});
$p.e = (function() {
  if ((this.C >= $m_jl_reflect_Array$().bU(this.ch))) {
    $m_sc_Iterator$().F.e();
  }
  var r = $m_sr_ScalaRunTime$().eH(this.ch, this.C);
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.d0 = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.C + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.c2;
    } else {
      var a = this.c2;
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
  return ((value < 0) ? 0 : ((value > $thiz.ci) ? $thiz.ci : value));
}
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.kw = self;
  $thiz.dB = 0;
  $thiz.ci = self.m();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.kw = null;
  this.dB = 0;
  this.ci = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.p = (function() {
  return this.ci;
});
$p.l = (function() {
  return (this.ci > 0);
});
$p.e = (function() {
  if ((this.ci > 0)) {
    var r = this.kw.u(this.dB);
    this.dB = ((1 + this.dB) | 0);
    this.ci = (((-1) + this.ci) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().F.e();
  }
});
$p.d0 = (function(n) {
  if ((n > 0)) {
    this.dB = ((this.dB + n) | 0);
    var b = ((this.ci - n) | 0);
    this.ci = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.gx = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.ci = ((b < 0) ? 0 : b);
  this.dB = ((this.dB + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  c6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(self) {
  this.pg = null;
  this.bH = 0;
  this.fS = 0;
  this.pg = self;
  this.bH = self.m();
  this.fS = (((-1) + this.bH) | 0);
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = $p;
$p.l = (function() {
  return (this.bH > 0);
});
$p.e = (function() {
  if ((this.bH > 0)) {
    var r = this.pg.u(this.fS);
    this.fS = (((-1) + this.fS) | 0);
    this.bH = (((-1) + this.bH) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().F.e();
  }
});
$p.gx = (function(from, until) {
  if ((this.bH > 0)) {
    if ((this.bH <= from)) {
      this.bH = 0;
    } else if ((from <= 0)) {
      if (((until >= 0) && (until < this.bH))) {
        this.bH = until;
      }
    } else {
      this.fS = ((this.fS - from) | 0);
      if (((until >= 0) && (until < this.bH))) {
        if ((until <= from)) {
          this.bH = 0;
        } else {
          this.bH = ((until - from) | 0);
        }
      } else {
        this.bH = ((this.bH - from) | 0);
      }
    }
  }
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewReverseIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewReverseIterator, "scala.collection.IndexedSeqView$IndexedSeqViewReverseIterator", ({
  gU: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.hl = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().F);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.sj = (function(elem) {
  this.hl = this.hl.hz(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.az = (function(elem) {
  return this.sj(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  h2: 1,
  iF: 1,
  a9: 1,
  L: 1,
  J: 1,
  I: 1
}));
function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
  return $thiz.e4(x, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => default$1.c(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.f();
  while (it.l()) {
    var next = it.e();
    f.bn(next.bm(), next.bd());
  }
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9($thiz.f(), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.bm();
      var v = x0$1$2$2.bd();
      return ((k + " -> ") + v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  }))), sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  var builder = $thiz.hH();
  var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
  var it = $thiz.f();
  while (it.l()) {
    var next = it.e();
    if (seen.iS(f.c(next))) {
      builder.az(next);
    }
  }
  return builder.aX();
}
function $f_sc_StrictOptimizedSeqOps__appended__O__O($thiz, elem) {
  var b = $thiz.e5().aO();
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(b, $thiz, 1);
  b.b5($thiz);
  b.az(elem);
  return b.aX();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.e5().aO();
  b.b5($thiz);
  b.b5(suffix);
  return b.aX();
}
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.kA)) {
    $thiz.kB = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.kA = true;
  }
  return $thiz.kB;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.kA) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.kB);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.kB = null;
  this.kC = null;
  this.kA = false;
  $n_sci_ArraySeq$ = this;
  this.kC = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.lm = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.hW($m_s_Array$().qQ(it, tag)));
});
$p.jb = (function(evidence$2) {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((b$2$2) => $m_sci_ArraySeq$().hW($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2$2, evidence$2)))));
});
$p.hW = (function(x) {
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
$p.ll = (function(it, evidence$5) {
  return this.lm(it, evidence$5);
});
$p.qE = (function(evidence$6) {
  return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  hn: 1,
  cc: 1,
  c3: 1,
  c2: 1,
  c4: 1,
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
  this.dK = 0;
  this.bN = null;
  this.bD = 0;
  this.cl = null;
  this.dL = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.b9);
  while (this.l()) {
    var originalHash = this.bN.cw(this.ad);
    outer.gy(outer.df, this.bN.dq(this.ad), this.bN.dr(this.ad), originalHash, $m_sc_Hashing$().bo(originalHash), 0);
    this.ad = ((1 + this.ad) | 0);
  }
}
$p = $c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
}
$h_sci_HashMapBuilder$$anon$1.prototype = $p;
$p.hI = (function() {
  $m_sc_Iterator$().F.e();
  throw new $c_jl_ClassCastException();
});
$p.e = (function() {
  this.hI();
});
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().i($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
  hr: 1,
  aB: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_HashSetBuilder$$anon$1(outer, x2$1) {
  this.ad = 0;
  this.dK = 0;
  this.bN = null;
  this.bD = 0;
  this.cl = null;
  this.dL = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.bO);
  while (this.l()) {
    var originalHash = this.bN.cw(this.ad);
    outer.m3(outer.f3, this.bN.d4(this.ad), originalHash, $m_sc_Hashing$().bo(originalHash), 0);
    this.ad = ((1 + this.ad) | 0);
  }
}
$p = $c_sci_HashSetBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashSetBuilder$$anon$1;
/** @constructor */
function $h_sci_HashSetBuilder$$anon$1() {
}
$h_sci_HashSetBuilder$$anon$1.prototype = $p;
$p.hI = (function() {
  $m_sc_Iterator$().F.e();
  throw new $c_jl_ClassCastException();
});
$p.e = (function() {
  this.hI();
});
var $d_sci_HashSetBuilder$$anon$1 = new $TypeData().i($c_sci_HashSetBuilder$$anon$1, "scala.collection.immutable.HashSetBuilder$$anon$1", ({
  hu: 1,
  aB: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.r)));
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.r)));
}
/** @constructor */
function $c_sci_Map$Map2$$anon$1(outer) {
  this.dN = 0;
  this.f5 = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
}
$h_sci_Map$Map2$$anon$1.prototype = $p;
$p.cd = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map2$$anon$1 = new $TypeData().i($c_sci_Map$Map2$$anon$1, "scala.collection.immutable.Map$Map2$$anon$1", ({
  hJ: 1,
  cy: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map2$$anon$2(outer) {
  this.dN = 0;
  this.f5 = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$2.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$2;
/** @constructor */
function $h_sci_Map$Map2$$anon$2() {
}
$h_sci_Map$Map2$$anon$2.prototype = $p;
$p.cd = (function(k, v) {
  return k;
});
var $d_sci_Map$Map2$$anon$2 = new $TypeData().i($c_sci_Map$Map2$$anon$2, "scala.collection.immutable.Map$Map2$$anon$2", ({
  hK: 1,
  cy: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.dP = 0;
  this.dO = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$4;
/** @constructor */
function $h_sci_Map$Map3$$anon$4() {
}
$h_sci_Map$Map3$$anon$4.prototype = $p;
$p.cd = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map3$$anon$4 = new $TypeData().i($c_sci_Map$Map3$$anon$4, "scala.collection.immutable.Map$Map3$$anon$4", ({
  hL: 1,
  cA: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$5(outer) {
  this.dP = 0;
  this.dO = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$5.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$5;
/** @constructor */
function $h_sci_Map$Map3$$anon$5() {
}
$h_sci_Map$Map3$$anon$5.prototype = $p;
$p.cd = (function(k, v) {
  return k;
});
var $d_sci_Map$Map3$$anon$5 = new $TypeData().i($c_sci_Map$Map3$$anon$5, "scala.collection.immutable.Map$Map3$$anon$5", ({
  hM: 1,
  cA: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.dQ = 0;
  this.cU = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
}
$h_sci_Map$Map4$$anon$7.prototype = $p;
$p.cd = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map4$$anon$7 = new $TypeData().i($c_sci_Map$Map4$$anon$7, "scala.collection.immutable.Map$Map4$$anon$7", ({
  hN: 1,
  cC: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$8(outer) {
  this.dQ = 0;
  this.cU = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$8.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$8;
/** @constructor */
function $h_sci_Map$Map4$$anon$8() {
}
$h_sci_Map$Map4$$anon$8.prototype = $p;
$p.cd = (function(k, v) {
  return k;
});
var $d_sci_Map$Map4$$anon$8 = new $TypeData().i($c_sci_Map$Map4$$anon$8, "scala.collection.immutable.Map$Map4$$anon$8", ({
  hO: 1,
  cC: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyIterator(rootNode) {
  this.ad = 0;
  this.dK = 0;
  this.bN = null;
  this.bD = 0;
  this.cl = null;
  this.dL = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyIterator;
/** @constructor */
function $h_sci_MapKeyIterator() {
}
$h_sci_MapKeyIterator.prototype = $p;
$p.e = (function() {
  if ((!this.l())) {
    $m_sc_Iterator$().F.e();
  }
  var key = this.bN.dq(this.ad);
  this.ad = ((1 + this.ad) | 0);
  return key;
});
var $d_sci_MapKeyIterator = new $TypeData().i($c_sci_MapKeyIterator, "scala.collection.immutable.MapKeyIterator", ({
  hQ: 1,
  aB: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.el = 0;
  this.iz = null;
  this.cm = 0;
  this.h9 = null;
  this.ha = null;
  this.kJ = 0;
  this.pz = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.kJ = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().rE(this.kJ, $m_sr_Statics$().R(this.pz), (-889275714));
});
$p.ux = (function() {
  if ((!this.l())) {
    $m_sc_Iterator$().F.e();
  }
  this.kJ = this.iz.cw(this.el);
  this.pz = this.iz.dr(this.el);
  this.el = (((-1) + this.el) | 0);
  return this;
});
$p.e = (function() {
  return this.ux();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  hR: 1,
  ho: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.ad = 0;
  this.dK = 0;
  this.bN = null;
  this.bD = 0;
  this.cl = null;
  this.dL = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.uw = (function() {
  if ((!this.l())) {
    $m_sc_Iterator$().F.e();
  }
  var payload = this.bN.lr(this.ad);
  this.ad = ((1 + this.ad) | 0);
  return payload;
});
$p.e = (function() {
  return this.uw();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  hS: 1,
  aB: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.c9 <= $thiz.b4)) {
    $m_sc_Iterator$().F.e();
  }
  $thiz.eo = ((1 + $thiz.eo) | 0);
  var slice = $thiz.kL.du($thiz.eo);
  while ((slice.a.length === 0)) {
    $thiz.eo = ((1 + $thiz.eo) | 0);
    slice = $thiz.kL.du($thiz.eo);
  }
  $thiz.hd = $thiz.f8;
  var count = $thiz.pB;
  var idx = $thiz.eo;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  $thiz.en = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
  var x1 = $thiz.en;
  switch (x1) {
    case 1: {
      $thiz.bt = slice;
      break;
    }
    case 2: {
      $thiz.bu = slice;
      break;
    }
    case 3: {
      $thiz.bY = slice;
      break;
    }
    case 4: {
      $thiz.cV = slice;
      break;
    }
    case 5: {
      $thiz.f7 = slice;
      break;
    }
    case 6: {
      $thiz.kK = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  $thiz.f8 = (($thiz.hd + Math.imul(slice.a.length, (1 << Math.imul(5, (((-1) + $thiz.en) | 0))))) | 0);
  if (($thiz.f8 > $thiz.dT)) {
    $thiz.f8 = $thiz.dT;
  }
  if (($thiz.en > 1)) {
    $thiz.g1 = (((-1) + (1 << Math.imul(5, $thiz.en))) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.b4 - $thiz.c9) | 0) + $thiz.dT) | 0);
  if ((pos === $thiz.f8)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.en > 1)) {
    var io = ((pos - $thiz.hd) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.g1 ^ io));
    $thiz.g1 = io;
  }
  $thiz.c9 = (($thiz.c9 - $thiz.b4) | 0);
  var a = $thiz.bt.a.length;
  var b = $thiz.c9;
  $thiz.dS = ((a < b) ? a : b);
  $thiz.b4 = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.bt = $thiz.bu.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.bu = $thiz.bY.a[(31 & ((io >>> 10) | 0))];
    $thiz.bt = $thiz.bu.a[0];
  } else if ((xor < 1048576)) {
    $thiz.bY = $thiz.cV.a[(31 & ((io >>> 15) | 0))];
    $thiz.bu = $thiz.bY.a[0];
    $thiz.bt = $thiz.bu.a[0];
  } else if ((xor < 33554432)) {
    $thiz.cV = $thiz.f7.a[(31 & ((io >>> 20) | 0))];
    $thiz.bY = $thiz.cV.a[0];
    $thiz.bu = $thiz.bY.a[0];
    $thiz.bt = $thiz.bu.a[0];
  } else {
    $thiz.f7 = $thiz.kK.a[((io >>> 25) | 0)];
    $thiz.cV = $thiz.f7.a[0];
    $thiz.bY = $thiz.cV.a[0];
    $thiz.bu = $thiz.bY.a[0];
    $thiz.bt = $thiz.bu.a[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.bt = $thiz.bu.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.bu = $thiz.bY.a[(31 & ((io >>> 10) | 0))];
    $thiz.bt = $thiz.bu.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.bY = $thiz.cV.a[(31 & ((io >>> 15) | 0))];
    $thiz.bu = $thiz.bY.a[(31 & ((io >>> 10) | 0))];
    $thiz.bt = $thiz.bu.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.cV = $thiz.f7.a[(31 & ((io >>> 20) | 0))];
    $thiz.bY = $thiz.cV.a[(31 & ((io >>> 15) | 0))];
    $thiz.bu = $thiz.bY.a[(31 & ((io >>> 10) | 0))];
    $thiz.bt = $thiz.bu.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.f7 = $thiz.kK.a[((io >>> 25) | 0)];
    $thiz.cV = $thiz.f7.a[(31 & ((io >>> 20) | 0))];
    $thiz.bY = $thiz.cV.a[(31 & ((io >>> 15) | 0))];
    $thiz.bu = $thiz.bY.a[(31 & ((io >>> 10) | 0))];
    $thiz.bt = $thiz.bu.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.kL = null;
  this.dT = 0;
  this.pB = 0;
  this.bt = null;
  this.bu = null;
  this.bY = null;
  this.cV = null;
  this.f7 = null;
  this.kK = null;
  this.dS = 0;
  this.b4 = 0;
  this.g1 = 0;
  this.c9 = 0;
  this.eo = 0;
  this.en = 0;
  this.hd = 0;
  this.f8 = 0;
  this.kL = v;
  this.dT = totalLength;
  this.pB = sliceCount;
  this.bt = v.d;
  this.dS = this.bt.a.length;
  this.b4 = 0;
  this.g1 = 0;
  this.c9 = this.dT;
  this.eo = 0;
  this.en = 1;
  this.hd = 0;
  this.f8 = this.dS;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.p = (function() {
  return ((this.c9 - this.b4) | 0);
});
$p.l = (function() {
  return (this.c9 > this.b4);
});
$p.e = (function() {
  if ((this.b4 === this.dS)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.bt.a[this.b4];
  this.b4 = ((1 + this.b4) | 0);
  return r;
});
$p.d0 = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.b4 - this.c9) | 0) + this.dT) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.dT;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.dT)) {
      this.b4 = 0;
      this.c9 = 0;
      this.dS = 0;
    } else {
      while ((newpos >= this.f8)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.hd) | 0);
      if ((this.en > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.g1 ^ io));
        this.g1 = io;
      }
      this.dS = this.bt.a.length;
      this.b4 = (31 & io);
      this.c9 = ((this.b4 + ((this.dT - newpos) | 0)) | 0);
      if ((this.dS > this.c9)) {
        this.dS = this.c9;
      }
    }
  }
  return this;
});
$p.bZ = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().bU(xs);
  var srcLen = ((this.c9 - this.b4) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.b4 === this.dS)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total - copied) | 0);
    var b = ((this.bt.a.length - this.b4) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.bt;
      var srcPos = this.b4;
      var destPos = ((start + copied) | 0);
      src.r(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().cc(this.bt, this.b4, xs, ((start + copied) | 0), count);
    }
    this.b4 = ((this.b4 + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  hU: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  E: 1
}));
/** @constructor */
function $c_sci_RangeIterator(start, step, lastElement, initiallyEmpty) {
  this.g2 = 0;
  this.fa = 0;
  this.ep = false;
  this.f9 = 0;
  this.g2 = step;
  this.fa = lastElement;
  this.ep = (!initiallyEmpty);
  this.f9 = start;
}
$p = $c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $p;
$p.p = (function() {
  return (this.ep ? ((1 + $intDiv(((this.fa - this.f9) | 0), this.g2)) | 0) : 0);
});
$p.l = (function() {
  return this.ep;
});
$p.rb = (function() {
  if ((!this.ep)) {
    $m_sc_Iterator$().F.e();
  }
  var value = this.f9;
  this.ep = (value !== this.fa);
  this.f9 = ((value + this.g2) | 0);
  return value;
});
$p.d0 = (function(n) {
  if ((n > 0)) {
    var value = this.f9;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.g2, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((-2147483648) ^ lo) < ((-2147483648) ^ value)) ? ((1 + ((hi + hi$1) | 0)) | 0) : ((hi + hi$1) | 0));
    if ((this.g2 > 0)) {
      var value$2 = this.fa;
      var hi$3 = (value$2 >> 31);
      if (((hi$3 === hi$2) ? (((-2147483648) ^ value$2) < ((-2147483648) ^ lo)) : (hi$3 < hi$2))) {
        var this$6__lo = value$2;
        var this$6__hi = hi$3;
      } else {
        var this$6__lo = lo;
        var this$6__hi = hi$2;
      }
      this.f9 = this$6__lo;
      var value$3 = this.fa;
      var hi$4 = (value$3 >> 31);
      this.ep = ((hi$2 === hi$4) ? (((-2147483648) ^ lo) <= ((-2147483648) ^ value$3)) : (hi$2 < hi$4));
    } else if ((this.g2 < 0)) {
      var value$4 = this.fa;
      var hi$5 = (value$4 >> 31);
      if (((hi$5 === hi$2) ? (((-2147483648) ^ value$4) > ((-2147483648) ^ lo)) : (hi$5 > hi$2))) {
        var this$10__lo = value$4;
        var this$10__hi = hi$5;
      } else {
        var this$10__lo = lo;
        var this$10__hi = hi$2;
      }
      this.f9 = this$10__lo;
      var value$5 = this.fa;
      var hi$6 = (value$5 >> 31);
      this.ep = ((hi$2 === hi$6) ? (((-2147483648) ^ lo) >= ((-2147483648) ^ value$5)) : (hi$2 > hi$6));
    }
  }
  return this;
});
$p.e = (function() {
  return this.rb();
});
var $d_sci_RangeIterator = new $TypeData().i($c_sci_RangeIterator, "scala.collection.immutable.RangeIterator", ({
  hX: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $ct_sci_Set$SetNIterator__I__($thiz, n) {
  $thiz.dU = 0;
  $thiz.dj = n;
  return $thiz;
}
/** @constructor */
function $c_sci_Set$SetNIterator() {
  this.dU = 0;
  this.dj = 0;
}
$p = $c_sci_Set$SetNIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Set$SetNIterator;
/** @constructor */
function $h_sci_Set$SetNIterator() {
}
$h_sci_Set$SetNIterator.prototype = $p;
$p.p = (function() {
  return this.dj;
});
$p.l = (function() {
  return (this.dj > 0);
});
$p.e = (function() {
  if (this.l()) {
    var r = this.u(this.dU);
    this.dU = ((1 + this.dU) | 0);
    this.dj = (((-1) + this.dj) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().F.e();
  }
});
$p.d0 = (function(n) {
  if ((n > 0)) {
    this.dU = ((this.dU + n) | 0);
    var b = ((this.dj - n) | 0);
    this.dj = ((b < 0) ? 0 : b);
  }
  return this;
});
/** @constructor */
function $c_sci_SetHashIterator(rootNode) {
  this.ad = 0;
  this.dK = 0;
  this.bN = null;
  this.bD = 0;
  this.cl = null;
  this.dL = null;
  this.kM = 0;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
  this.kM = 0;
}
$p = $c_sci_SetHashIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_SetHashIterator;
/** @constructor */
function $h_sci_SetHashIterator() {
}
$h_sci_SetHashIterator.prototype = $p;
$p.v = (function() {
  return this.kM;
});
$p.e = (function() {
  if ((!this.l())) {
    $m_sc_Iterator$().F.e();
  }
  this.kM = this.bN.cw(this.ad);
  this.ad = ((1 + this.ad) | 0);
  return this;
});
var $d_sci_SetHashIterator = new $TypeData().i($c_sci_SetHashIterator, "scala.collection.immutable.SetHashIterator", ({
  i8: 1,
  aB: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_SetIterator(rootNode) {
  this.ad = 0;
  this.dK = 0;
  this.bN = null;
  this.bD = 0;
  this.cl = null;
  this.dL = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_SetIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_SetIterator;
/** @constructor */
function $h_sci_SetIterator() {
}
$h_sci_SetIterator.prototype = $p;
$p.e = (function() {
  if ((!this.l())) {
    $m_sc_Iterator$().F.e();
  }
  var payload = this.bN.d4(this.ad);
  this.ad = ((1 + this.ad) | 0);
  return payload;
});
var $d_sci_SetIterator = new $TypeData().i($c_sci_SetIterator, "scala.collection.immutable.SetIterator", ({
  i9: 1,
  aB: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.kQ = 0;
  $thiz.pJ = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.kQ = 0;
  this.pJ = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.bq = (function(size) {
  if ((this.kQ < size)) {
    this.v5(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.kT = null;
  this.kS = null;
  $n_scm_ArraySeq$ = this;
  this.kT = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.kS = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.tG = (function(it, evidence$2) {
  return this.lH($m_s_Array$().qQ(it, evidence$2));
});
$p.jb = (function(evidence$3) {
  return new $c_scm_Builder$$anon$1(new $c_scm_ArrayBuilder$generic(evidence$3.bg()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => $m_scm_ArraySeq$().lH(x$2$2))));
});
$p.lH = (function(x) {
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
$p.ll = (function(it, evidence$5) {
  return this.tG(it, evidence$5);
});
$p.qE = (function(evidence$6) {
  return this.kS;
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  is: 1,
  cc: 1,
  c3: 1,
  c2: 1,
  c4: 1,
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
  this.eD = 0;
  this.dW = null;
  this.hk = 0;
  this.hj = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$1.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$1;
/** @constructor */
function $h_scm_HashSet$$anon$1() {
}
$h_scm_HashSet$$anon$1.prototype = $p;
$p.li = (function(nd) {
  return nd.g7;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  iA: 1,
  bj: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$2(outer) {
  this.eD = 0;
  this.dW = null;
  this.hk = 0;
  this.hj = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$2.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$2;
/** @constructor */
function $h_scm_HashSet$$anon$2() {
}
$h_scm_HashSet$$anon$2.prototype = $p;
$p.li = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  iB: 1,
  bj: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$3(outer) {
  this.eD = 0;
  this.dW = null;
  this.hk = 0;
  this.hj = null;
  this.kW = 0;
  this.pO = null;
  this.pO = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.kW = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.v = (function() {
  return this.kW;
});
$p.li = (function(nd) {
  this.kW = this.pO.jf(nd.dX);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  iC: 1,
  bj: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.hm = null;
  this.hm = runtimeClass;
}
$p = $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $p;
$p.n = (function(x) {
  return $f_s_reflect_ClassTag__equals__O__Z(this, x);
});
$p.v = (function() {
  return $m_sr_Statics$().R(this.hm);
});
$p.x = (function() {
  return $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this.hm);
});
$p.bg = (function() {
  return this.hm;
});
$p.c1 = (function(len) {
  return this.hm.D.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  iZ: 1,
  M: 1,
  S: 1,
  T: 1,
  a: 1,
  d: 1
}));
function $ps_Lcom_raquo_airstream_web_WebStorageVar__WebStorageVar$superArg$1__F0__T__F1__F1__F0__F2__s_util_Try(maybeStorage, key, encode, decode, default$1, syncDistinctByFn) {
  var this$1 = maybeStorage.L();
  if (this$1.b()) {
    var this$3 = $m_s_None$();
  } else {
    var x0 = this$1.J();
    var this$2 = $m_s_Option$().l5(x0.getItem(key));
    var this$3 = (this$2.b() ? $m_s_None$() : new $c_s_Some(decode.c(this$2.J())));
  }
  return (this$3.b() ? default$1.L() : this$3.J());
}
function $p_Lcom_raquo_airstream_web_WebStorageVar__isSame$lzyINIT1$1__sr_LazyBoolean__s_util_Try__Z($thiz, isSame$lzy1$1, decodedValueTry$1) {
  if ((isSame$lzy1$1 === null)) {
    throw new $c_jl_NullPointerException();
  }
  if (isSame$lzy1$1.iG) {
    return isSame$lzy1$1.iH;
  } else {
    matchResult4: {
      var $x_1;
      var _2 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz.bM);
      if ((decodedValueTry$1 instanceof $c_s_util_Success)) {
        var decodedValue = decodedValueTry$1.cE;
        if ((_2 instanceof $c_s_util_Success)) {
          var varValue = _2.cE;
          var $x_1 = (!(!$thiz.nx.bn(decodedValue, varValue)));
          break matchResult4;
        }
      }
      var $x_1 = false;
    }
    return isSame$lzy1$1.u3($x_1);
  }
}
function $p_Lcom_raquo_airstream_web_WebStorageVar__isSame$1__sr_LazyBoolean__s_util_Try__Z($thiz, isSame$lzy1$2, decodedValueTry$2) {
  return (isSame$lzy1$2.iG ? isSame$lzy1$2.iH : $p_Lcom_raquo_airstream_web_WebStorageVar__isSame$lzyINIT1$1__sr_LazyBoolean__s_util_Try__Z($thiz, isSame$lzy1$2, decodedValueTry$2));
}
/** @constructor */
function $c_Lcom_raquo_airstream_web_WebStorageVar(maybeStorage, key, encode, decode, default$1, syncDistinctByFn) {
  this.jK = null;
  this.id = null;
  this.ic = null;
  this.ib = null;
  this.bM = null;
  this.jO = null;
  this.ig = null;
  this.ns = null;
  this.nt = null;
  this.nx = null;
  this.nw = null;
  this.nu = null;
  this.nv = false;
  this.jO = maybeStorage;
  this.ig = key;
  this.ns = decode;
  this.nt = default$1;
  this.nx = syncDistinctByFn;
  $ct_Lcom_raquo_airstream_state_SourceVar__s_util_Try__(this, $ps_Lcom_raquo_airstream_web_WebStorageVar__WebStorageVar$superArg$1__F0__T__F1__F1__F0__F2__s_util_Try(maybeStorage, key, encode, decode, default$1, syncDistinctByFn));
  this.nw = new $c_Lcom_raquo_airstream_ownership_ManualOwner();
  $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(this.bM, $m_Lcom_raquo_airstream_core_Observer$().m6(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((newValue) => {
    var this$1 = maybeStorage.L();
    if ((!this$1.b())) {
      var x0 = this$1.J();
      var newValueStr = encode.c(newValue);
      try {
        x0.setItem(key, newValueStr);
      } catch (e) {
        if ((!(((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)) instanceof $c_sjs_js_JavaScriptException))) {
          throw e;
        }
      }
    }
  })), new $c_Lcom_raquo_airstream_web_WebStorageVar$$anon$1(this), false), this.nw);
}
$p = $c_Lcom_raquo_airstream_web_WebStorageVar.prototype = new $h_Lcom_raquo_airstream_state_SourceVar();
$p.constructor = $c_Lcom_raquo_airstream_web_WebStorageVar;
/** @constructor */
function $h_Lcom_raquo_airstream_web_WebStorageVar() {
}
$h_Lcom_raquo_airstream_web_WebStorageVar.prototype = $p;
$p.tu = (function() {
  if ((!this.nv)) {
    this.nu = new $c_Lcom_raquo_airstream_misc_FilterStream($m_Lcom_raquo_airstream_web_DomEventStream$().qf(window, "storage", false), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => (this.jO.L().al(ev.storageArea) && (ev.key === this.ig)))));
    this.nv = true;
  }
  return this.nu;
});
$p.vp = (function(syncOwner) {
  this.uO(true);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(this.tu(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    this.rv($m_s_Option$().l5(ev.newValue), true);
  })), syncOwner);
});
$p.uO = (function(distinctOnly) {
  var x5 = this.jO.L();
  if ((x5 instanceof $c_s_Some)) {
    var storage = x5.eh;
    this.rv($m_s_Option$().l5(storage.getItem(this.ig)), distinctOnly);
    return (void 0);
  }
  if (($m_s_None$() === x5)) {
    return (void 0);
  }
  throw new $c_s_MatchError(x5);
});
$p.rv = (function(storedValueOpt, distinctOnly) {
  var isSame$lzy1 = new $c_sr_LazyBoolean();
  var ifEmpty = this.nt;
  var f = this.ns;
  var decodedValueTry = (storedValueOpt.b() ? ifEmpty.L() : f.c(storedValueOpt.J()));
  if ((!(distinctOnly && $p_Lcom_raquo_airstream_web_WebStorageVar__isSame$1__sr_LazyBoolean__s_util_Try__Z(this, isSame$lzy1, decodedValueTry)))) {
    this.id.eL(decodedValueTry);
  }
});
$p.e2 = (function() {
  return (($f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this) + ("(key=" + this.ig)) + ")");
});
var $d_Lcom_raquo_airstream_web_WebStorageVar = new $TypeData().i($c_Lcom_raquo_airstream_web_WebStorageVar, "com.raquo.airstream.web.WebStorageVar", ({
  ea: 1,
  e1: 1,
  ae: 1,
  aE: 1,
  aI: 1,
  Y: 1,
  e3: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2(key$2) {
  this.fG = null;
  this.fH = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$2, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2, "com.raquo.laminar.defs.styles.StyleProps$$anon$2", ({
  eA: 1,
  b3: 1,
  af: 1,
  b1: 1,
  b2: 1,
  eE: 1,
  eG: 1
}));
class $c_ju_DuplicateFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.oT = null;
    this.oT = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bV() {
    return (("Flags = '" + this.oT) + "'");
  }
}
var $d_ju_DuplicateFormatFlagsException = new $TypeData().i($c_ju_DuplicateFormatFlagsException, "java.util.DuplicateFormatFlagsException", ({
  g3: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_FormatFlagsConversionMismatchException extends $c_ju_IllegalFormatException {
  constructor(f, c) {
    super();
    this.oV = null;
    this.oU = 0;
    this.oV = f;
    this.oU = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bV() {
    return ((("Conversion = " + $cToS(this.oU)) + ", Flags = ") + this.oV);
  }
}
var $d_ju_FormatFlagsConversionMismatchException = new $TypeData().i($c_ju_FormatFlagsConversionMismatchException, "java.util.FormatFlagsConversionMismatchException", ({
  g4: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatArgumentIndexException extends $c_ju_IllegalFormatException {
  constructor(msg) {
    super();
    this.oZ = null;
    this.oZ = msg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bV() {
    return this.oZ;
  }
}
var $d_ju_IllegalFormatArgumentIndexException = new $TypeData().i($c_ju_IllegalFormatArgumentIndexException, "java.util.IllegalFormatArgumentIndexException", ({
  gb: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatCodePointException extends $c_ju_IllegalFormatException {
  constructor(c) {
    super();
    this.p0 = 0;
    this.p0 = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bV() {
    var i = this.p0;
    return ("Code point = 0x" + (+(i >>> 0.0)).toString(16));
  }
}
var $d_ju_IllegalFormatCodePointException = new $TypeData().i($c_ju_IllegalFormatCodePointException, "java.util.IllegalFormatCodePointException", ({
  gc: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(c, arg) {
    super();
    this.p2 = 0;
    this.p1 = null;
    this.p2 = c;
    this.p1 = arg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((arg === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bV() {
    return ((("" + $cToS(this.p2)) + " != ") + this.p1.D.N);
  }
}
var $d_ju_IllegalFormatConversionException = new $TypeData().i($c_ju_IllegalFormatConversionException, "java.util.IllegalFormatConversionException", ({
  gd: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.p3 = null;
    this.p3 = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bV() {
    return (("Flags = '" + this.p3) + "'");
  }
}
var $d_ju_IllegalFormatFlagsException = new $TypeData().i($c_ju_IllegalFormatFlagsException, "java.util.IllegalFormatFlagsException", ({
  ge: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatPrecisionException extends $c_ju_IllegalFormatException {
  constructor(p) {
    super();
    this.p4 = 0;
    this.p4 = p;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bV() {
    return ("" + this.p4);
  }
}
var $d_ju_IllegalFormatPrecisionException = new $TypeData().i($c_ju_IllegalFormatPrecisionException, "java.util.IllegalFormatPrecisionException", ({
  gf: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(w) {
    super();
    this.p5 = 0;
    this.p5 = w;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bV() {
    return ("" + this.p5);
  }
}
var $d_ju_IllegalFormatWidthException = new $TypeData().i($c_ju_IllegalFormatWidthException, "java.util.IllegalFormatWidthException", ({
  gg: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_MissingFormatArgumentException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.p6 = null;
    this.p6 = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bV() {
    return (("Format specifier '" + this.p6) + "'");
  }
}
var $d_ju_MissingFormatArgumentException = new $TypeData().i($c_ju_MissingFormatArgumentException, "java.util.MissingFormatArgumentException", ({
  gh: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_MissingFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.p7 = null;
    this.p7 = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bV() {
    return this.p7;
  }
}
var $d_ju_MissingFormatWidthException = new $TypeData().i($c_ju_MissingFormatWidthException, "java.util.MissingFormatWidthException", ({
  gi: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_UnknownFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.p8 = null;
    this.p8 = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bV() {
    return (("Conversion = '" + this.p8) + "'");
  }
}
var $d_ju_UnknownFormatConversionException = new $TypeData().i($c_ju_UnknownFormatConversionException, "java.util.UnknownFormatConversionException", ({
  gk: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.ch = null;
  this.C = 0;
  this.c2 = 0;
  this.ko = null;
  this.ko = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $p;
$p.uy = (function() {
  if ((this.C >= this.ko.a.length)) {
    $m_sc_Iterator$().F.e();
  }
  var r = this.ko.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.e = (function() {
  return this.uy();
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcB$sp, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", ({
  gH: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
  this.ch = null;
  this.C = 0;
  this.c2 = 0;
  this.kp = null;
  this.kp = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $p;
$p.uz = (function() {
  if ((this.C >= this.kp.a.length)) {
    $m_sc_Iterator$().F.e();
  }
  var r = this.kp.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.e = (function() {
  return $bC(this.uz());
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcC$sp, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", ({
  gI: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
  this.ch = null;
  this.C = 0;
  this.c2 = 0;
  this.kq = null;
  this.kq = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $p;
$p.uA = (function() {
  if ((this.C >= this.kq.a.length)) {
    $m_sc_Iterator$().F.e();
  }
  var r = this.kq.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.e = (function() {
  return this.uA();
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcD$sp, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", ({
  gJ: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
  this.ch = null;
  this.C = 0;
  this.c2 = 0;
  this.kr = null;
  this.kr = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $p;
$p.uB = (function() {
  if ((this.C >= this.kr.a.length)) {
    $m_sc_Iterator$().F.e();
  }
  var r = this.kr.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.e = (function() {
  return this.uB();
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcF$sp, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", ({
  gK: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
  this.ch = null;
  this.C = 0;
  this.c2 = 0;
  this.ks = null;
  this.ks = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $p;
$p.uC = (function() {
  if ((this.C >= this.ks.a.length)) {
    $m_sc_Iterator$().F.e();
  }
  var r = this.ks.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.e = (function() {
  return this.uC();
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcI$sp, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", ({
  gL: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
  this.ch = null;
  this.C = 0;
  this.c2 = 0;
  this.kt = null;
  this.kt = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $p;
$p.uD = (function() {
  if ((this.C >= this.kt.a.length)) {
    $m_sc_Iterator$().F.e();
  }
  var t = this.kt.a[this.C];
  var lo = t.q;
  var hi = t.t;
  this.C = ((1 + this.C) | 0);
  return new $c_RTLong(lo, hi);
});
$p.e = (function() {
  return this.uD();
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcJ$sp, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", ({
  gM: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
  this.ch = null;
  this.C = 0;
  this.c2 = 0;
  this.ku = null;
  this.ku = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $p;
$p.uE = (function() {
  if ((this.C >= this.ku.a.length)) {
    $m_sc_Iterator$().F.e();
  }
  var r = this.ku.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.e = (function() {
  return this.uE();
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcS$sp, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", ({
  gN: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
  this.ch = null;
  this.C = 0;
  this.c2 = 0;
  this.pf = null;
  this.pf = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $p;
$p.uF = (function() {
  if ((this.C >= this.pf.a.length)) {
    $m_sc_Iterator$().F.e();
  }
  this.C = ((1 + this.C) | 0);
});
$p.e = (function() {
  this.uF();
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcV$sp, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", ({
  gO: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
  this.ch = null;
  this.C = 0;
  this.c2 = 0;
  this.kv = null;
  this.kv = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $p;
$p.uG = (function() {
  if ((this.C >= this.kv.a.length)) {
    $m_sc_Iterator$().F.e();
  }
  var r = this.kv.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.e = (function() {
  return this.uG();
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcZ$sp, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", ({
  gP: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterable$$anon$1(a$1) {
  this.kx = null;
  this.kx = a$1;
}
$p = $c_sc_Iterable$$anon$1.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_Iterable$$anon$1;
/** @constructor */
function $h_sc_Iterable$$anon$1() {
}
$h_sc_Iterable$$anon$1.prototype = $p;
$p.f = (function() {
  return new $c_sc_Iterator$$anon$20(this.kx);
});
$p.p = (function() {
  return 1;
});
$p.tY = (function() {
  return new $c_s_Some(this.kx);
});
$p.bL = (function() {
  return this.tY();
});
var $d_sc_Iterable$$anon$1 = new $TypeData().i($c_sc_Iterable$$anon$1, "scala.collection.Iterable$$anon$1", ({
  gX: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.cb() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.D)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.D)));
}
/** @constructor */
function $c_sci_Set$Set2$$anon$1(outer) {
  this.dU = 0;
  this.dj = 0;
  this.pC = null;
  this.pC = outer;
  $ct_sci_Set$SetNIterator__I__(this, 2);
}
$p = $c_sci_Set$Set2$$anon$1.prototype = new $h_sci_Set$SetNIterator();
$p.constructor = $c_sci_Set$Set2$$anon$1;
/** @constructor */
function $h_sci_Set$Set2$$anon$1() {
}
$h_sci_Set$Set2$$anon$1.prototype = $p;
$p.u = (function(i) {
  return this.pC.v9(i);
});
var $d_sci_Set$Set2$$anon$1 = new $TypeData().i($c_sci_Set$Set2$$anon$1, "scala.collection.immutable.Set$Set2$$anon$1", ({
  i4: 1,
  bf: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set3$$anon$2(outer) {
  this.dU = 0;
  this.dj = 0;
  this.pD = null;
  this.pD = outer;
  $ct_sci_Set$SetNIterator__I__(this, 3);
}
$p = $c_sci_Set$Set3$$anon$2.prototype = new $h_sci_Set$SetNIterator();
$p.constructor = $c_sci_Set$Set3$$anon$2;
/** @constructor */
function $h_sci_Set$Set3$$anon$2() {
}
$h_sci_Set$Set3$$anon$2.prototype = $p;
$p.u = (function(i) {
  return this.pD.va(i);
});
var $d_sci_Set$Set3$$anon$2 = new $TypeData().i($c_sci_Set$Set3$$anon$2, "scala.collection.immutable.Set$Set3$$anon$2", ({
  i5: 1,
  bf: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set4$$anon$3(outer) {
  this.dU = 0;
  this.dj = 0;
  this.pE = null;
  this.pE = outer;
  $ct_sci_Set$SetNIterator__I__(this, 4);
}
$p = $c_sci_Set$Set4$$anon$3.prototype = new $h_sci_Set$SetNIterator();
$p.constructor = $c_sci_Set$Set4$$anon$3;
/** @constructor */
function $h_sci_Set$Set4$$anon$3() {
}
$h_sci_Set$Set4$$anon$3.prototype = $p;
$p.u = (function(i) {
  return this.pE.vb(i);
});
var $d_sci_Set$Set4$$anon$3 = new $TypeData().i($c_sci_Set$Set4$$anon$3, "scala.collection.immutable.Set$Set4$$anon$3", ({
  i6: 1,
  bf: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.kQ = 0;
  this.pJ = 0;
  this.g6 = null;
  this.pK = false;
  this.kR = null;
  this.g6 = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.pK = (elementClass === $d_C.l());
  this.kR = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.q8 = (function(elem) {
  var unboxedElem = (this.pK ? $uC(elem) : ((elem === null) ? this.g6.D.z : elem));
  this.kR.push(unboxedElem);
  return this;
});
$p.sc = (function(xs) {
  var it = xs.f();
  while (it.l()) {
    this.q8(it.e());
  }
  return this;
});
$p.v5 = (function(size) {
});
$p.aX = (function() {
  var elemRuntimeClass = ((this.g6 === $d_V.l()) ? $d_jl_Void.l() : (((this.g6 === $d_sr_Null$.l()) || (this.g6 === $d_sr_Nothing$.l())) ? $d_O.l() : this.g6));
  return elemRuntimeClass.D.r().w(this.kR);
});
$p.x = (function() {
  return "ArrayBuilder.generic";
});
$p.b5 = (function(elems) {
  return this.sc(elems);
});
$p.az = (function(elem) {
  return this.q8(elem);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  ir: 1,
  iq: 1,
  a9: 1,
  L: 1,
  J: 1,
  I: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.kw = null;
  this.dB = 0;
  this.ci = 0;
  this.pN = null;
  this.pM = 0;
  this.pN = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.pM = (mutationCount.L() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.l = (function() {
  $m_scm_MutationTracker$().qt(this.pM, (this.pN.L() | 0), "mutation occurred during iteration");
  return (this.ci > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  iw: 1,
  c6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.ay = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.x = (function() {
  return this.ay;
});
$p.n = (function(that) {
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
    this.ak = null;
    this.ak = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bV() {
    return $dp_toString__T(this.ak);
  }
  b8() {
    return "JavaScriptException";
  }
  b6() {
    return 1;
  }
  b7(x$1) {
    return ((x$1 === 0) ? this.ak : $m_sr_Statics$().eK(x$1));
  }
  bp() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().cM(this, (-889275714), false);
  }
  n(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().k(this.ak, x$1.ak)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d9)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  d9: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1,
  B: 1,
  d: 1
}));
function $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, newValue) {
  if ((!($thiz.ja() === (void 0)))) {
    $thiz.iR($m_Lcom_raquo_airstream_core_Signal$().rd());
  }
  $thiz.lK(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.ja();
  if ((x === (void 0))) {
    $thiz.iR($m_Lcom_raquo_airstream_core_Signal$().rd());
    var nextValue = $thiz.iZ();
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
  var isError = nextValue.lC();
  var elem = false;
  elem = false;
  $thiz.cJ(false);
  var this$ = $thiz.d1();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.eL(nextValue);
    if ((isError && (!elem))) {
      var ev$5 = true;
      elem = ev$5;
    }
  }
  var this$$1 = $thiz.d6();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.gu(nextValue, transaction);
    if ((isError && (!elem))) {
      var ev$6 = true;
      elem = ev$6;
    }
  }
  $thiz.cJ(true);
  var x = $thiz.e7();
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
    nextValue.cv(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cN(err);
    })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))));
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.cJ(false);
  var this$ = $thiz.d1();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    try {
      observer.ft(nextValue);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      $m_Lcom_raquo_airstream_core_AirstreamError$().cN(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.d6();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.hM(nextValue, transaction);
  }
  $thiz.cJ(true);
  var x = $thiz.e7();
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
  $thiz.cJ(false);
  var this$ = $thiz.d1();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.hL(nextError);
  }
  var this$$1 = $thiz.d6();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.jc(nextError, transaction);
  }
  $thiz.cJ(true);
  var x = $thiz.e7();
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
  nextValue.cv(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, _$2, transaction);
  })));
}
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33(key$33) {
  this.fG = null;
  this.fH = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$33, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33, "com.raquo.laminar.defs.styles.StyleProps$$anon$33", ({
  eB: 1,
  b3: 1,
  af: 1,
  b1: 1,
  b2: 1,
  bC: 1,
  bD: 1,
  eF: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4(key$4) {
  this.fG = null;
  this.fH = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$4, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4, "com.raquo.laminar.defs.styles.StyleProps$$anon$4", ({
  eC: 1,
  b3: 1,
  af: 1,
  b1: 1,
  b2: 1,
  eD: 1,
  bC: 1,
  bD: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.b())) {
      return s;
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = s.z();
      n = temp$n;
      s = temp$s;
    }
  }
}
function $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  if (($thiz.b3(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.hH();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.f();
    var different = false;
    while (it.l()) {
      var next = it.e();
      if (seen.iS(f.c(next))) {
        builder.az(next);
      } else {
        different = true;
      }
    }
    return (different ? builder.aX() : $thiz);
  }
}
function $f_s_math_Numeric$IntIsIntegral__plus__I__I__I($thiz, x, y) {
  return ((x + y) | 0);
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.ay = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.bg = (function() {
  return $d_Z.l();
});
$p.c1 = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.ay = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.bg = (function() {
  return $d_B.l();
});
$p.c1 = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.ay = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.bg = (function() {
  return $d_C.l();
});
$p.c1 = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.ay = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.bg = (function() {
  return $d_D.l();
});
$p.c1 = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.ay = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.bg = (function() {
  return $d_F.l();
});
$p.c1 = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.ay = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.bg = (function() {
  return $d_I.l();
});
$p.c1 = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.ay = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.bg = (function() {
  return $d_J.l();
});
$p.c1 = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.dZ = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.x = (function() {
  return this.dZ;
});
$p.n = (function(that) {
  return (this === that);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.ay = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.bg = (function() {
  return $d_S.l();
});
$p.c1 = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.ay = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.bg = (function() {
  return $d_V.l();
});
$p.c1 = (function(len) {
  return new ($d_jl_Void.r().C)(len);
});
function $f_Lcom_raquo_airstream_common_MultiParentSignal___parentLastUpdateIds__Lcom_raquo_ew_JsArray($thiz) {
  return $thiz.gF.map(((_$1) => _$1.ga()));
}
function $f_Lcom_raquo_airstream_common_MultiParentSignal__onWillStart__V($thiz) {
  var arr = $thiz.gF;
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
  var arr = $thiz.gF;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var parent = arr[i];
    var ix = i;
    var newLastUpdateId = parent.ga();
    if ((newLastUpdateId !== ($thiz.q2()[ix] | 0))) {
      $thiz.q2()[ix] = newLastUpdateId;
      var ev$3 = true;
      elem = ev$3;
    }
    i = ((1 + i) | 0);
  }
  return elem;
}
function $f_Lcom_raquo_airstream_common_MultiParentSignal__updateCurrentValueFromParent__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, $thiz.lb());
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
$p.b2 = (function() {
  return $m_sc_View$();
});
$p.x = (function() {
  return $f_sc_View__toString__T(this);
});
$p.bh = (function() {
  return "View";
});
function $f_sc_Set__equals__O__Z($thiz, that) {
  if (($thiz === that)) {
    return true;
  } else if ($is_sc_Set(that)) {
    if (($thiz.O() === that.O())) {
      try {
        return $thiz.m0(that);
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
  this.dZ = null;
  this.dZ = "Any";
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.bg = (function() {
  return $d_O.l();
});
$p.c1 = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  j1: 1,
  aU: 1,
  aT: 1,
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
  this.ay = null;
  this.ay = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  j3: 1,
  j2: 1,
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
  this.ay = null;
  this.ay = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  j5: 1,
  j4: 1,
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
  this.ay = null;
  this.ay = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  j7: 1,
  j6: 1,
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
  this.ay = null;
  this.ay = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
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
var $n_s_reflect_ManifestFactory$DoubleManifest$;
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$();
  }
  return $n_s_reflect_ManifestFactory$DoubleManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest$() {
  this.ay = null;
  this.ay = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
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
var $n_s_reflect_ManifestFactory$FloatManifest$;
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$();
  }
  return $n_s_reflect_ManifestFactory$FloatManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest$() {
  this.ay = null;
  this.ay = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
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
var $n_s_reflect_ManifestFactory$IntManifest$;
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$();
  }
  return $n_s_reflect_ManifestFactory$IntManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest$() {
  this.ay = null;
  this.ay = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
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
var $n_s_reflect_ManifestFactory$LongManifest$;
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$();
  }
  return $n_s_reflect_ManifestFactory$LongManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NothingManifest$() {
  this.dZ = null;
  this.dZ = "Nothing";
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.bg = (function() {
  return $d_sr_Nothing$.l();
});
$p.c1 = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  jg: 1,
  aU: 1,
  aT: 1,
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
  this.dZ = null;
  this.dZ = "Null";
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.bg = (function() {
  return $d_sr_Null$.l();
});
$p.c1 = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  jh: 1,
  aU: 1,
  aT: 1,
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
  this.dZ = null;
  this.dZ = "Object";
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.bg = (function() {
  return $d_O.l();
});
$p.c1 = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  ji: 1,
  aU: 1,
  aT: 1,
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
  this.ay = null;
  this.ay = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  jk: 1,
  jj: 1,
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
  this.ay = null;
  this.ay = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  jm: 1,
  jl: 1,
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
/** @constructor */
function $c_Ladversaries_Stage$$anon$1(\u03b4name$2, _$ordinal$2, outer) {
  this.jq = null;
  this.jq = \u03b4name$2;
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
$p.b6 = (function() {
  return 0;
});
$p.b7 = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.b8 = (function() {
  return this.jq;
});
$p.x = (function() {
  return this.jq;
});
var $d_Ladversaries_Stage$$anon$1 = new $TypeData().i($c_Ladversaries_Stage$$anon$1, "adversaries.Stage$$anon$1", ({
  dl: 1,
  dj: 1,
  d: 1,
  B: 1,
  a: 1,
  j0: 1,
  ju: 1,
  aS: 1,
  d5: 1,
  iO: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.lR(), $thiz, false);
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.lR(), $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomStreamSource(makeConfig) {
  this.mF = null;
  this.mE = false;
  this.mG = null;
  this.mC = null;
  this.mD = null;
  this.mI = false;
  this.mH = 0;
  this.i6 = 0;
  this.i5 = null;
  this.mF = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V(this);
  this.i5 = makeConfig.sx(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, value, _$1);
    })));
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => ((_$2) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, err$2, _$2);
    }))(err)));
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.i6)), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this))));
}
$p = $c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomStreamSource;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomStreamSource() {
}
$h_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = $p;
$p.e6 = (function() {
  return this.mF;
});
$p.e2 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fq = (function() {
  return this.mE;
});
$p.e7 = (function() {
  return this.mG;
});
$p.cJ = (function(x$1) {
  this.mE = x$1;
});
$p.fr = (function(x$1) {
  this.mG = x$1;
});
$p.n = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.gr = (function(observer) {
});
$p.d1 = (function() {
  return this.mC;
});
$p.d6 = (function() {
  return this.mD;
});
$p.gA = (function() {
  return this.mI;
});
$p.eO = (function(x$1) {
  this.mI = x$1;
});
$p.ge = (function(x$0) {
  this.mC = x$0;
});
$p.gf = (function(x$0) {
  this.mD = x$0;
});
$p.gi = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.e9 = (function() {
  return this.mH;
});
$p.gv = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V(this);
});
$p.gs = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V(this);
});
$p.gt = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V(this);
});
$p.eM = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_custom_CustomStreamSource = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomStreamSource, "com.raquo.airstream.custom.CustomStreamSource", ({
  dQ: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aX: 1,
  aV: 1,
  au: 1,
  aZ: 1,
  dM: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_VarSignal(initial, parentDisplayName) {
  this.nk = null;
  this.nj = false;
  this.nl = null;
  this.jL = 0;
  this.nh = null;
  this.ni = null;
  this.no = false;
  this.jM = null;
  this.nm = null;
  this.nn = 0;
  this.nm = parentDisplayName;
  this.nk = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.jL = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.jM = (void 0);
  this.nn = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V(this, initial);
}
$p = $c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $p;
$p.e6 = (function() {
  return this.nk;
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fq = (function() {
  return this.nj;
});
$p.e7 = (function() {
  return this.nl;
});
$p.cJ = (function(x$1) {
  this.nj = x$1;
});
$p.fr = (function(x$1) {
  this.nl = x$1;
});
$p.gt = (function() {
});
$p.n = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.ga = (function() {
  return this.jL;
});
$p.iR = (function(x$1) {
  this.jL = x$1;
});
$p.hS = (function() {
  return this;
});
$p.gs = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.gr = (function(observer) {
  observer.eL($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.d1 = (function() {
  return this.nh;
});
$p.d6 = (function() {
  return this.ni;
});
$p.gA = (function() {
  return this.no;
});
$p.eO = (function(x$1) {
  this.no = x$1;
});
$p.ge = (function(x$0) {
  this.nh = x$0;
});
$p.gf = (function(x$0) {
  this.ni = x$0;
});
$p.ja = (function() {
  return this.jM;
});
$p.lK = (function(x$1) {
  this.jM = x$1;
});
$p.gi = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.hT = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.e9 = (function() {
  return this.nn;
});
$p.iZ = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gv = (function() {
});
$p.e2 = (function() {
  return (this.nm.L() + ".signal");
});
$p.eM = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().i($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  e6: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aE: 1,
  aH: 1,
  au: 1,
  aY: 1,
  e2: 1
}));
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.iX($thiz)) {
        return $thiz.gw(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.q)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.q)));
}
/** @constructor */
function $c_sc_View$$anon$1(it$1) {
  this.pr = null;
  this.pr = it$1;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.f = (function() {
  return this.pr.L();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  hg: 1,
  H: 1,
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
  $thiz.fV = underlying;
  $thiz.h7 = elem;
  return $thiz;
}
/** @constructor */
function $c_sc_View$Appended() {
  this.fV = null;
  this.h7 = null;
}
$p = $c_sc_View$Appended.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Appended;
/** @constructor */
function $h_sc_View$Appended() {
}
$h_sc_View$Appended.prototype = $p;
$p.f = (function() {
  return new $c_sc_View$Concat(this.fV, new $c_sc_View$Single(this.h7)).f();
});
$p.p = (function() {
  var size = this.fV.p();
  return ((size >= 0) ? ((1 + size) | 0) : (-1));
});
$p.b = (function() {
  return false;
});
var $d_sc_View$Appended = new $TypeData().i($c_sc_View$Appended, "scala.collection.View$Appended", ({
  aM: 1,
  H: 1,
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
  this.iv = null;
  this.iw = null;
  this.iv = prefix;
  this.iw = suffix;
}
$p = $c_sc_View$Concat.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Concat;
/** @constructor */
function $h_sc_View$Concat() {
}
$h_sc_View$Concat.prototype = $p;
$p.f = (function() {
  return this.iv.f().hz(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.iw.f())));
});
$p.p = (function() {
  var prefixSize = this.iv.p();
  if ((prefixSize >= 0)) {
    var suffixSize = this.iw.p();
    return ((suffixSize >= 0) ? ((prefixSize + suffixSize) | 0) : (-1));
  } else {
    return (-1);
  }
});
$p.b = (function() {
  return (this.iv.b() && this.iw.b());
});
var $d_sc_View$Concat = new $TypeData().i($c_sc_View$Concat, "scala.collection.View$Concat", ({
  hh: 1,
  H: 1,
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
  this.ix = null;
  this.ps = null;
  this.ix = underlying;
  this.ps = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.f = (function() {
  return new $c_sc_Iterator$$anon$8(this.ix.f(), this.ps);
});
$p.p = (function() {
  return ((this.ix.p() === 0) ? 0 : (-1));
});
$p.b = (function() {
  return this.ix.b();
});
var $d_sc_View$DistinctBy = new $TypeData().i($c_sc_View$DistinctBy, "scala.collection.View$DistinctBy", ({
  hi: 1,
  H: 1,
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
  $thiz.f1 = underlying;
  $thiz.h8 = f;
  return $thiz;
}
/** @constructor */
function $c_sc_View$Map() {
  this.f1 = null;
  this.h8 = null;
}
$p = $c_sc_View$Map.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Map;
/** @constructor */
function $h_sc_View$Map() {
}
$h_sc_View$Map.prototype = $p;
$p.f = (function() {
  return new $c_sc_Iterator$$anon$9(this.f1.f(), this.h8);
});
$p.p = (function() {
  return this.f1.p();
});
$p.b = (function() {
  return this.f1.b();
});
var $d_sc_View$Map = new $TypeData().i($c_sc_View$Map, "scala.collection.View$Map", ({
  aN: 1,
  H: 1,
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
  this.pt = null;
  this.pt = a;
}
$p = $c_sc_View$Single.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Single;
/** @constructor */
function $h_sc_View$Single() {
}
$h_sc_View$Single.prototype = $p;
$p.f = (function() {
  return new $c_sc_Iterator$$anon$20(this.pt);
});
$p.p = (function() {
  return 1;
});
$p.b = (function() {
  return false;
});
var $d_sc_View$Single = new $TypeData().i($c_sc_View$Single, "scala.collection.View$Single", ({
  hk: 1,
  H: 1,
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
  iT: 1,
  iS: 1,
  iQ: 1,
  iR: 1,
  iU: 1,
  g1: 1,
  iW: 1,
  iP: 1,
  a: 1,
  iV: 1
}));
var $n_s_math_Numeric$IntIsIntegral$;
function $m_s_math_Numeric$IntIsIntegral$() {
  if ((!$n_s_math_Numeric$IntIsIntegral$)) {
    $n_s_math_Numeric$IntIsIntegral$ = new $c_s_math_Numeric$IntIsIntegral$();
  }
  return $n_s_math_Numeric$IntIsIntegral$;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V($thiz) {
  $thiz.jF = ($thiz.ec !== null);
  $thiz.i7 = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.ec);
  if ($thiz.jF) {
    var newParentLastUpdateId = $thiz.ec.ga();
    if ((newParentLastUpdateId !== $thiz.i7)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.iZ(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.i7 = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.jF) {
    $thiz.i7 = $thiz.ec.ga();
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.ec, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.ec, $thiz);
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
$p.n = (function(that) {
  return $f_sc_Set__equals__O__Z(this, that);
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.hU(this, this$1.iL);
});
$p.bh = (function() {
  return "Set";
});
$p.x = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.m0 = (function(that) {
  return this.dp(that);
});
$p.c = (function(v1) {
  return this.al(v1);
});
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else if ($is_sc_Map(o)) {
    if (($thiz.O() === o.O())) {
      try {
        return $thiz.dp(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x2) => ((kv$2$2) => $m_sr_BoxesRunTime$().k(x2.e4(kv$2$2.bm(), $m_sc_Map$().po), kv$2$2.bd())))(o)));
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
  this.mm = null;
  this.ml = false;
  this.mn = null;
  this.jr = 0;
  this.mj = null;
  this.mk = null;
  this.mo = false;
  this.js = null;
  this.mg = null;
  this.mh = false;
  this.gF = null;
  this.mi = null;
  this.ju = 0;
  this.jt = null;
  this.gF = parents;
  this.mi = combinator;
  this.mm = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.jr = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.js = (void 0);
  this.ju = ((1 + $m_Lcom_raquo_airstream_core_Protected$().uq(0, parents)) | 0);
  this.jt = parents.map(((parent) => $m_Lcom_raquo_airstream_common_InternalParentObserver$().tM(parent, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$1, trx) => {
    $f_Lcom_raquo_airstream_combine_CombineObservable__onInputsReady__Lcom_raquo_airstream_core_Transaction__V(this, trx);
  })))));
}
$p = $c_Lcom_raquo_airstream_combine_CombineSignalN.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_combine_CombineSignalN;
/** @constructor */
function $h_Lcom_raquo_airstream_combine_CombineSignalN() {
}
$h_Lcom_raquo_airstream_combine_CombineSignalN.prototype = $p;
$p.e6 = (function() {
  return this.mm;
});
$p.e2 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fq = (function() {
  return this.ml;
});
$p.e7 = (function() {
  return this.mn;
});
$p.cJ = (function(x$1) {
  this.ml = x$1;
});
$p.fr = (function(x$1) {
  this.mn = x$1;
});
$p.n = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.ga = (function() {
  return this.jr;
});
$p.iR = (function(x$1) {
  this.jr = x$1;
});
$p.hS = (function() {
  return this;
});
$p.gr = (function(observer) {
  observer.eL($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.d1 = (function() {
  return this.mj;
});
$p.d6 = (function() {
  return this.mk;
});
$p.gA = (function() {
  return this.mo;
});
$p.eO = (function(x$1) {
  this.mo = x$1;
});
$p.ge = (function(x$0) {
  this.mj = x$0;
});
$p.gf = (function(x$0) {
  this.mk = x$0;
});
$p.ja = (function() {
  return this.js;
});
$p.lK = (function(x$1) {
  this.js = x$1;
});
$p.hT = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gi = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.q2 = (function() {
  if ((!this.mh)) {
    this.mg = $f_Lcom_raquo_airstream_common_MultiParentSignal___parentLastUpdateIds__Lcom_raquo_ew_JsArray(this);
    this.mh = true;
  }
  return this.mg;
});
$p.gv = (function() {
  $f_Lcom_raquo_airstream_common_MultiParentSignal__onWillStart__V(this);
});
$p.gs = (function() {
  $f_Lcom_raquo_airstream_combine_CombineObservable__onStart__V(this);
});
$p.gt = (function() {
  $f_Lcom_raquo_airstream_combine_CombineObservable__onStop__V(this);
});
$p.e9 = (function() {
  return this.ju;
});
$p.lb = (function() {
  return $m_Lcom_raquo_airstream_combine_CombineObservable$().ug(this.gF.map(((_$2) => _$2.hT())), this.mi);
});
$p.iZ = (function() {
  return this.lb();
});
$p.eM = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_combine_CombineSignalN = new $TypeData().i($c_Lcom_raquo_airstream_combine_CombineSignalN, "com.raquo.airstream.combine.CombineSignalN", ({
  dr: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aE: 1,
  aH: 1,
  au: 1,
  aY: 1,
  dx: 1,
  dH: 1,
  dp: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_CollectStream(parent, fn) {
  this.mN = null;
  this.mM = false;
  this.mO = null;
  this.mJ = null;
  this.mL = null;
  this.mQ = false;
  this.jB = null;
  this.mK = null;
  this.mP = 0;
  this.jB = parent;
  this.mK = fn;
  this.mN = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.mP = ((1 + parent.e9()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.e6 = (function() {
  return this.mN;
});
$p.e2 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fq = (function() {
  return this.mM;
});
$p.e7 = (function() {
  return this.mO;
});
$p.cJ = (function(x$1) {
  this.mM = x$1;
});
$p.fr = (function(x$1) {
  this.mO = x$1;
});
$p.n = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.gr = (function(observer) {
});
$p.d1 = (function() {
  return this.mJ;
});
$p.d6 = (function() {
  return this.mL;
});
$p.gA = (function() {
  return this.mQ;
});
$p.eO = (function(x$1) {
  this.mQ = x$1;
});
$p.ge = (function(x$0) {
  this.mJ = x$0;
});
$p.gf = (function(x$0) {
  this.mL = x$0;
});
$p.gi = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.gv = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.jB);
});
$p.gs = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.gt = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.gu = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.lR = (function() {
  return this.jB;
});
$p.e9 = (function() {
  return this.mP;
});
$p.hM = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.mK.c(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().cG(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
    }
  }
  $x_1.cv(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
    if ((!nextValue.b())) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.J(), transaction);
    }
  })));
});
$p.jc = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.eM = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_CollectStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_CollectStream, "com.raquo.airstream.misc.CollectStream", ({
  dR: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aX: 1,
  aV: 1,
  au: 1,
  aZ: 1,
  aD: 1,
  br: 1,
  bp: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_FilterStream(parent, passes) {
  this.mU = null;
  this.mT = false;
  this.mV = null;
  this.mR = null;
  this.mS = null;
  this.mY = false;
  this.jC = null;
  this.mW = null;
  this.mX = 0;
  this.jC = parent;
  this.mW = passes;
  this.mU = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.mX = ((1 + parent.e9()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_FilterStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_FilterStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_FilterStream() {
}
$h_Lcom_raquo_airstream_misc_FilterStream.prototype = $p;
$p.e6 = (function() {
  return this.mU;
});
$p.e2 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fq = (function() {
  return this.mT;
});
$p.e7 = (function() {
  return this.mV;
});
$p.cJ = (function(x$1) {
  this.mT = x$1;
});
$p.fr = (function(x$1) {
  this.mV = x$1;
});
$p.n = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.gr = (function(observer) {
});
$p.d1 = (function() {
  return this.mR;
});
$p.d6 = (function() {
  return this.mS;
});
$p.gA = (function() {
  return this.mY;
});
$p.eO = (function(x$1) {
  this.mY = x$1;
});
$p.ge = (function(x$0) {
  this.mR = x$0;
});
$p.gf = (function(x$0) {
  this.mS = x$0;
});
$p.gi = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.gv = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.jC);
});
$p.gs = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.gt = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.gu = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.lR = (function() {
  return this.jC;
});
$p.e9 = (function() {
  return this.mX;
});
$p.hM = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success((!(!this.mW.c(nextParentValue))));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().cG(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
    }
  }
  $x_1.cv(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((v1) => {
    if ((!(!v1))) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
    }
  })));
});
$p.jc = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.eM = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_FilterStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_FilterStream, "com.raquo.airstream.misc.FilterStream", ({
  dS: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aX: 1,
  aV: 1,
  au: 1,
  aZ: 1,
  aD: 1,
  br: 1,
  bp: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.n2 = null;
  this.n1 = false;
  this.n3 = null;
  this.jD = 0;
  this.mZ = null;
  this.n0 = null;
  this.n5 = false;
  this.jE = null;
  this.jF = false;
  this.i7 = 0;
  this.ec = null;
  this.jG = null;
  this.jH = null;
  this.n4 = 0;
  this.ec = parent;
  this.jG = project;
  this.jH = recover;
  this.n2 = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.jD = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.jE = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.n4 = ((1 + parent.e9()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.e6 = (function() {
  return this.n2;
});
$p.e2 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fq = (function() {
  return this.n1;
});
$p.e7 = (function() {
  return this.n3;
});
$p.cJ = (function(x$1) {
  this.n1 = x$1;
});
$p.fr = (function(x$1) {
  this.n3 = x$1;
});
$p.n = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.ga = (function() {
  return this.jD;
});
$p.iR = (function(x$1) {
  this.jD = x$1;
});
$p.hS = (function() {
  return this;
});
$p.gr = (function(observer) {
  observer.eL($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.d1 = (function() {
  return this.mZ;
});
$p.d6 = (function() {
  return this.n0;
});
$p.gA = (function() {
  return this.n5;
});
$p.eO = (function(x$1) {
  this.n5 = x$1;
});
$p.ge = (function(x$0) {
  this.mZ = x$0;
});
$p.gf = (function(x$0) {
  this.n0 = x$0;
});
$p.ja = (function() {
  return this.jE;
});
$p.lK = (function(x$1) {
  this.jE = x$1;
});
$p.hT = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gi = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.hM = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.jc = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.gv = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$p.gs = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$p.gt = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$p.e9 = (function() {
  return this.n4;
});
$p.gu = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  nextParentValue.cv(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.jH;
    if (this$2.b()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
    } else {
      var x0 = this$2.J();
      try {
        var $x_1 = new $c_s_util_Success(x0.bI(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().cG(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
        }
      }
      $x_1.cv(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$3) => ((tryError) => {
        $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$3$3), transaction);
      }))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$4) => ((nextValue) => {
        if ((nextValue === null)) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$3$4, transaction);
        } else if ((!nextValue.b())) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.J(), transaction);
        }
      }))(nextError)));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.lI(this.jG), transaction);
  })));
});
$p.iZ = (function() {
  var originalValue = this.ec.hT().lI(this.jG);
  return originalValue.cv(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.jH;
    if (this$2.b()) {
      return originalValue;
    } else {
      var x0 = this$2.J();
      try {
        var $x_1 = new $c_s_util_Success(x0.bI(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().cG(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ak : e$2);
        }
      }
      return $x_1.cv(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$7$3) => ((tryError) => new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$7$3))))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
        if ((nextValue === null)) {
          return originalValue;
        } else {
          var this$7 = (nextValue.b() ? $m_s_None$() : new $c_s_Some(new $c_s_util_Success(nextValue.J())));
          return (this$7.b() ? originalValue : this$7.J());
        }
      })));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$6) => originalValue)));
});
$p.eM = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapSignal, "com.raquo.airstream.misc.MapSignal", ({
  dT: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aE: 1,
  aH: 1,
  au: 1,
  aY: 1,
  aD: 1,
  bq: 1,
  dy: 1
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
$p.iX = (function(that) {
  return true;
});
$p.n = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().ru(this);
});
$p.x = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.T = (function(elem) {
  return $f_sc_SeqOps__appended__O__O(this, elem);
});
$p.O = (function() {
  return this.m();
});
$p.cI = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.ly = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.fp = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.f(), p, from);
});
$p.lZ = (function(otherSize) {
  return this.b3(otherSize);
});
$p.b3 = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.b = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.gw = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.bI = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.c0 = (function(x) {
  return this.ly((x | 0));
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
$p.cK = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.cF = (function(elem) {
  return $ct_sc_SeqView$Appended__sc_SeqOps__O__(new $c_sc_SeqView$Appended(), this, elem);
});
$p.bh = (function() {
  return "SeqView";
});
$p.cI = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.fp = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.f(), p, from);
});
$p.b3 = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.b = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.T = (function(elem) {
  return this.cF(elem);
});
$p.N = (function(f) {
  return this.cK(f);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.u)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.u)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aw)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aw)));
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
$p.f = (function() {
  return $m_sc_Iterator$().F;
});
$p.p = (function() {
  return 0;
});
$p.b = (function() {
  return true;
});
$p.b8 = (function() {
  return "Empty";
});
$p.b6 = (function() {
  return 0;
});
$p.b7 = (function(x$1) {
  return $m_sr_Statics$().eK(x$1);
});
$p.bp = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return 67081517;
});
var $d_sc_View$Empty$ = new $TypeData().i($c_sc_View$Empty$, "scala.collection.View$Empty$", ({
  hj: 1,
  H: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
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
  $thiz.nQ = new $c_Lcom_raquo_laminar_api_Laminar$$anon$1();
  $thiz.rM = $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$();
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
$p.n = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().uo(this);
});
$p.bh = (function() {
  return "Map";
});
$p.x = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.gk = (function(coll) {
  return this.ra().aA(coll);
});
$p.bI = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.fn = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.c0 = (function(key) {
  return this.al(key);
});
$p.eG = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
function $ct_sc_SeqView$Appended__sc_SeqOps__O__($thiz, underlying, elem) {
  $thiz.fU = underlying;
  $thiz.it = elem;
  $ct_sc_View$Appended__sc_IterableOps__O__($thiz, underlying, elem);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Appended() {
  this.fV = null;
  this.h7 = null;
  this.fU = null;
  this.it = null;
}
$p = $c_sc_SeqView$Appended.prototype = new $h_sc_View$Appended();
$p.constructor = $c_sc_SeqView$Appended;
/** @constructor */
function $h_sc_SeqView$Appended() {
}
$h_sc_SeqView$Appended.prototype = $p;
$p.cK = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.cF = (function(elem) {
  return $ct_sc_SeqView$Appended__sc_SeqOps__O__(new $c_sc_SeqView$Appended(), this, elem);
});
$p.bh = (function() {
  return "SeqView";
});
$p.cI = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.fp = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.f(), p, from);
});
$p.b3 = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.b = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.u = (function(idx) {
  return ((idx === this.fU.m()) ? this.it : this.fU.u(idx));
});
$p.m = (function() {
  return ((1 + this.fU.m()) | 0);
});
$p.T = (function(elem) {
  return this.cF(elem);
});
$p.N = (function(f) {
  return this.cK(f);
});
var $d_sc_SeqView$Appended = new $TypeData().i($c_sc_SeqView$Appended, "scala.collection.SeqView$Appended", ({
  bb: 1,
  aM: 1,
  H: 1,
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
  $thiz.eZ = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.eZ = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.u = (function(idx) {
  return this.eZ.u(idx);
});
$p.m = (function() {
  return this.eZ.m();
});
$p.f = (function() {
  return this.eZ.f();
});
$p.p = (function() {
  return this.eZ.p();
});
$p.b = (function() {
  return this.eZ.b();
});
var $d_sc_SeqView$Id = new $TypeData().i($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  cb: 1,
  aK: 1,
  H: 1,
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
  $thiz.h3 = underlying;
  $thiz.iu = f;
  $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Map() {
  this.f1 = null;
  this.h8 = null;
  this.h3 = null;
  this.iu = null;
}
$p = $c_sc_SeqView$Map.prototype = new $h_sc_View$Map();
$p.constructor = $c_sc_SeqView$Map;
/** @constructor */
function $h_sc_SeqView$Map() {
}
$h_sc_SeqView$Map.prototype = $p;
$p.cK = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.cF = (function(elem) {
  return $ct_sc_SeqView$Appended__sc_SeqOps__O__(new $c_sc_SeqView$Appended(), this, elem);
});
$p.bh = (function() {
  return "SeqView";
});
$p.cI = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.fp = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.f(), p, from);
});
$p.b3 = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.b = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.u = (function(idx) {
  return this.iu.c(this.h3.u(idx));
});
$p.m = (function() {
  return this.h3.m();
});
$p.T = (function(elem) {
  return this.cF(elem);
});
$p.N = (function(f) {
  return this.cK(f);
});
var $d_sc_SeqView$Map = new $TypeData().i($c_sc_SeqView$Map, "scala.collection.SeqView$Map", ({
  bc: 1,
  aN: 1,
  H: 1,
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
function $ct_sc_SeqView$Reverse__sc_SeqOps__($thiz, underlying) {
  $thiz.h4 = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Reverse() {
  this.h4 = null;
}
$p = $c_sc_SeqView$Reverse.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Reverse;
/** @constructor */
function $h_sc_SeqView$Reverse() {
}
$h_sc_SeqView$Reverse.prototype = $p;
$p.u = (function(i) {
  return this.h4.u((((((-1) + this.m()) | 0) - i) | 0));
});
$p.m = (function() {
  return this.h4.m();
});
$p.b = (function() {
  return this.h4.b();
});
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$$anon$1() {
  this.o3 = null;
  this.o4 = false;
  this.nT = null;
  this.nU = false;
  this.nV = null;
  this.nW = false;
  this.nX = null;
  this.nY = false;
  this.nJ = null;
  this.nK = false;
  this.ob = null;
  this.oc = false;
  this.nO = null;
  this.nP = false;
  this.od = null;
  this.oe = false;
  this.nL = null;
  this.nM = false;
  this.ol = null;
  this.om = false;
  this.o1 = null;
  this.o2 = false;
  this.oh = null;
  this.oi = false;
  this.o7 = null;
  this.o8 = false;
  this.o5 = null;
  this.o6 = false;
  this.o9 = null;
  this.oa = false;
  this.nH = null;
  this.nI = false;
  this.nR = null;
  this.nS = false;
  this.nZ = null;
  this.o0 = false;
  this.on = null;
  this.oo = false;
  this.nN = null;
  this.eV = null;
  this.rL = null;
  this.nF = null;
  this.nG = false;
  this.of = null;
  this.og = false;
  this.nQ = null;
  this.oj = null;
  this.ok = false;
  this.rM = null;
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
$p.u0 = (function() {
  if ((!this.o4)) {
    this.o3 = new $c_Lcom_raquo_laminar_tags_HtmlTag("img", true);
    this.o4 = true;
  }
  return this.o3;
});
$p.tV = (function() {
  if ((!this.nU)) {
    this.nT = new $c_Lcom_raquo_laminar_tags_HtmlTag("h1", false);
    this.nU = true;
  }
  return this.nT;
});
$p.lu = (function() {
  if ((!this.nW)) {
    this.nV = new $c_Lcom_raquo_laminar_tags_HtmlTag("h2", false);
    this.nW = true;
  }
  return this.nV;
});
$p.r1 = (function() {
  if ((!this.nY)) {
    this.nX = new $c_Lcom_raquo_laminar_tags_HtmlTag("h3", false);
    this.nY = true;
  }
  return this.nX;
});
$p.iW = (function() {
  if ((!this.nK)) {
    this.nJ = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    this.nK = true;
  }
  return this.nJ;
});
$p.uN = (function() {
  if ((!this.oc)) {
    this.ob = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    this.oc = true;
  }
  return this.ob;
});
$p.e3 = (function() {
  if ((!this.nP)) {
    this.nO = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.nP = true;
  }
  return this.nO;
});
$p.vk = (function() {
  if ((!this.oe)) {
    this.od = new $c_Lcom_raquo_laminar_keys_HtmlAttr("src", $m_Lcom_raquo_laminar_codecs_package$().fE);
    this.oe = true;
  }
  return this.od;
});
$p.sL = (function() {
  if ((!this.nM)) {
    this.nL = new $c_Lcom_raquo_laminar_keys_HtmlProp("checked", $m_Lcom_raquo_laminar_codecs_package$().jS);
    this.nM = true;
  }
  return this.nL;
});
$p.rI = (function() {
  if ((!this.om)) {
    this.ol = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().fE);
    this.om = true;
  }
  return this.ol;
});
$p.j5 = (function() {
  if ((!this.o2)) {
    this.o1 = new $c_Lcom_raquo_laminar_keys_HtmlProp("hidden", $m_Lcom_raquo_laminar_codecs_package$().jS);
    this.o2 = true;
  }
  return this.o1;
});
$p.vu = (function() {
  if ((!this.oi)) {
    this.oh = new $c_Lcom_raquo_laminar_keys_HtmlProp("title", $m_Lcom_raquo_laminar_codecs_package$().fE);
    this.oi = true;
  }
  return this.oh;
});
$p.hK = (function() {
  if ((!this.o8)) {
    this.o7 = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.o8 = true;
  }
  return this.o7;
});
$p.uJ = (function() {
  if ((!this.o6)) {
    this.o5 = new $c_Lcom_raquo_laminar_keys_EventProp("change");
    this.o6 = true;
  }
  return this.o5;
});
$p.lO = (function() {
  if ((!this.oa)) {
    this.o9 = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    this.oa = true;
  }
  return this.o9;
});
$p.iV = (function() {
  if ((!this.nI)) {
    this.nH = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2("background-color");
    this.nI = true;
  }
  return this.nH;
});
$p.tA = (function() {
  if ((!this.nS)) {
    this.nR = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33("font-size");
    this.nS = true;
  }
  return this.nR;
});
$p.tZ = (function() {
  if ((!this.o0)) {
    this.nZ = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("height");
    this.o0 = true;
  }
  return this.nZ;
});
$p.vI = (function() {
  if ((!this.oo)) {
    this.on = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("width");
    this.oo = true;
  }
  return this.on;
});
$p.sa = (function() {
  if ((!this.nG)) {
    this.nF = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.nG = true;
  }
  return this.nF;
});
$p.vm = (function() {
  if ((!this.og)) {
    this.of = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.og = true;
  }
  return this.of;
});
$p.vD = (function() {
  if ((!this.ok)) {
    this.oj = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.ok = true;
  }
  return this.oj;
});
var $d_Lcom_raquo_laminar_api_package$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_package$$anon$1, "com.raquo.laminar.api.package$$anon$1", ({
  eq: 1,
  eH: 1,
  et: 1,
  ey: 1,
  bB: 1,
  ez: 1,
  ev: 1,
  eo: 1,
  ei: 1,
  en: 1,
  bz: 1,
  bE: 1,
  by: 1,
  ej: 1
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
$p.bh = (function() {
  return "IndexedSeqView";
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bL = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.m();
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
$p.b2 = (function() {
  return $m_sci_Set$();
});
function $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__($thiz, underlying, elem) {
  $ct_sc_SeqView$Appended__sc_SeqOps__O__($thiz, underlying, elem);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$Appended() {
  this.fV = null;
  this.h7 = null;
  this.fU = null;
  this.it = null;
}
$p = $c_sc_IndexedSeqView$Appended.prototype = new $h_sc_SeqView$Appended();
$p.constructor = $c_sc_IndexedSeqView$Appended;
/** @constructor */
function $h_sc_IndexedSeqView$Appended() {
}
$h_sc_IndexedSeqView$Appended.prototype = $p;
$p.f = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.dm = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
$p.dt = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.bh = (function() {
  return "IndexedSeqView";
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bL = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.m();
});
$p.cK = (function(f) {
  return this.dt(f);
});
$p.N = (function(f) {
  return this.dt(f);
});
$p.T = (function(elem) {
  return this.dm(elem);
});
$p.cF = (function(elem) {
  return this.dm(elem);
});
var $d_sc_IndexedSeqView$Appended = new $TypeData().i($c_sc_IndexedSeqView$Appended, "scala.collection.IndexedSeqView$Appended", ({
  c5: 1,
  bb: 1,
  aM: 1,
  H: 1,
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
  p: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.eZ = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.f = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bh = (function() {
  return "IndexedSeqView";
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bL = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.m();
});
$p.cK = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.N = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.T = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
$p.cF = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  gT: 1,
  cb: 1,
  aK: 1,
  H: 1,
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
  p: 1
}));
function $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__($thiz, underlying, f) {
  $ct_sc_SeqView$Map__sc_SeqOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$Map() {
  this.f1 = null;
  this.h8 = null;
  this.h3 = null;
  this.iu = null;
}
$p = $c_sc_IndexedSeqView$Map.prototype = new $h_sc_SeqView$Map();
$p.constructor = $c_sc_IndexedSeqView$Map;
/** @constructor */
function $h_sc_IndexedSeqView$Map() {
}
$h_sc_IndexedSeqView$Map.prototype = $p;
$p.f = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.dm = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
$p.dt = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.bh = (function() {
  return "IndexedSeqView";
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bL = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.m();
});
$p.cK = (function(f) {
  return this.dt(f);
});
$p.N = (function(f) {
  return this.dt(f);
});
$p.T = (function(elem) {
  return this.dm(elem);
});
$p.cF = (function(elem) {
  return this.dm(elem);
});
var $d_sc_IndexedSeqView$Map = new $TypeData().i($c_sc_IndexedSeqView$Map, "scala.collection.IndexedSeqView$Map", ({
  c7: 1,
  bc: 1,
  aN: 1,
  H: 1,
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
  p: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Reverse(underlying) {
  this.h4 = null;
  $ct_sc_SeqView$Reverse__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Reverse.prototype = new $h_sc_SeqView$Reverse();
$p.constructor = $c_sc_IndexedSeqView$Reverse;
/** @constructor */
function $h_sc_IndexedSeqView$Reverse() {
}
$h_sc_IndexedSeqView$Reverse.prototype = $p;
$p.f = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bh = (function() {
  return "IndexedSeqView";
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bL = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.m();
});
$p.cK = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.N = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.T = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
$p.cF = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
var $d_sc_IndexedSeqView$Reverse = new $TypeData().i($c_sc_IndexedSeqView$Reverse, "scala.collection.IndexedSeqView$Reverse", ({
  gV: 1,
  h9: 1,
  aK: 1,
  H: 1,
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
  p: 1
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
  this.kP = null;
  this.iC = null;
  this.kP = underlying;
  this.iC = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.u = (function(n) {
  return this.kP.u(n);
});
$p.m = (function() {
  return this.kP.aL;
});
$p.cb = (function() {
  return "ArrayBufferView";
});
$p.f = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.iC);
});
$p.dm = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.iC);
});
$p.dt = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.iC);
});
$p.cK = (function(f) {
  return this.dt(f);
});
$p.N = (function(f) {
  return this.dt(f);
});
$p.T = (function(elem) {
  return this.dm(elem);
});
$p.cF = (function(elem) {
  return this.dm(elem);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  ip: 1,
  gF: 1,
  aK: 1,
  H: 1,
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
  p: 1
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
$p.ra = (function() {
  return $m_sci_Map$();
});
$p.lF = (function() {
  return $ct_sci_MapOps$ImmutableKeySet__sci_MapOps__(new $c_sci_MapOps$ImmutableKeySet(), this);
});
$p.b2 = (function() {
  return $m_sci_Iterable$();
});
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  return ((!$is_sci_IndexedSeq(that)) || ($thiz.m() === that.m()));
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.m();
      var equal = (length === o.m());
      if (equal) {
        var index = 0;
        var a = $thiz.iU();
        var b = o.iU();
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
          equal = $m_sr_BoxesRunTime$().k($thiz.u(index), o.u(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.f().d0(index);
          var thatIt = o.f().d0(index);
          while ((equal && thisIt.l())) {
            equal = $m_sr_BoxesRunTime$().k(thisIt.e(), thatIt.e());
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.C)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.C)));
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
$p.b = (function() {
  return true;
});
$p.p = (function() {
  return 0;
});
$p.m0 = (function(that) {
  return true;
});
$p.al = (function(elem) {
  return false;
});
$p.f = (function() {
  return $m_sc_Iterator$().F;
});
$p.U = (function(f) {
});
$p.ds = (function(elem) {
  return new $c_sci_Set$Set1(elem);
});
var $d_sci_Set$EmptySet$ = new $TypeData().i($c_sci_Set$EmptySet$, "scala.collection.immutable.Set$EmptySet$", ({
  i3: 1,
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
  r: 1,
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
function $isArrayOf_sci_SeqMap$SeqMap1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hY)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hZ)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.i0)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.i1)));
}
/** @constructor */
function $c_sci_Set$Set1(elem1) {
  this.fb = null;
  this.fb = elem1;
}
$p = $c_sci_Set$Set1.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set1;
/** @constructor */
function $h_sci_Set$Set1() {
}
$h_sci_Set$Set1.prototype = $p;
$p.N = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.O = (function() {
  return 1;
});
$p.b = (function() {
  return false;
});
$p.p = (function() {
  return 1;
});
$p.al = (function(elem) {
  return $m_sr_BoxesRunTime$().k(elem, this.fb);
});
$p.d5 = (function(elem) {
  return (this.al(elem) ? this : new $c_sci_Set$Set2(this.fb, elem));
});
$p.f = (function() {
  return new $c_sc_Iterator$$anon$20(this.fb);
});
$p.U = (function(f) {
  f.c(this.fb);
});
$p.dp = (function(p) {
  return (!(!p.c(this.fb)));
});
$p.o = (function() {
  return this.fb;
});
$p.ds = (function(elem) {
  return this.d5(elem);
});
function $isArrayOf_sci_Set$Set1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cE)));
}
var $d_sci_Set$Set1 = new $TypeData().i($c_sci_Set$Set1, "scala.collection.immutable.Set$Set1", ({
  cE: 1,
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
  r: 1,
  ak: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set2(elem1, elem2) {
  this.fc = null;
  this.g3 = null;
  this.fc = elem1;
  this.g3 = elem2;
}
$p = $c_sci_Set$Set2.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set2;
/** @constructor */
function $h_sci_Set$Set2() {
}
$h_sci_Set$Set2.prototype = $p;
$p.N = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.O = (function() {
  return 2;
});
$p.b = (function() {
  return false;
});
$p.p = (function() {
  return 2;
});
$p.al = (function(elem) {
  return ($m_sr_BoxesRunTime$().k(elem, this.fc) || $m_sr_BoxesRunTime$().k(elem, this.g3));
});
$p.d5 = (function(elem) {
  return (this.al(elem) ? this : new $c_sci_Set$Set3(this.fc, this.g3, elem));
});
$p.f = (function() {
  return new $c_sci_Set$Set2$$anon$1(this);
});
$p.v9 = (function(i) {
  switch (i) {
    case 0: {
      return this.fc;
      break;
    }
    case 1: {
      return this.g3;
      break;
    }
    default: {
      throw new $c_s_MatchError(i);
    }
  }
});
$p.U = (function(f) {
  f.c(this.fc);
  f.c(this.g3);
});
$p.dp = (function(p) {
  return ((!(!p.c(this.fc))) && (!(!p.c(this.g3))));
});
$p.o = (function() {
  return this.fc;
});
$p.ds = (function(elem) {
  return this.d5(elem);
});
function $isArrayOf_sci_Set$Set2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cF)));
}
var $d_sci_Set$Set2 = new $TypeData().i($c_sci_Set$Set2, "scala.collection.immutable.Set$Set2", ({
  cF: 1,
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
  r: 1,
  ak: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set3(elem1, elem2, elem3) {
  this.fd = null;
  this.g4 = null;
  this.g5 = null;
  this.fd = elem1;
  this.g4 = elem2;
  this.g5 = elem3;
}
$p = $c_sci_Set$Set3.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set3;
/** @constructor */
function $h_sci_Set$Set3() {
}
$h_sci_Set$Set3.prototype = $p;
$p.N = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.O = (function() {
  return 3;
});
$p.b = (function() {
  return false;
});
$p.p = (function() {
  return 3;
});
$p.al = (function(elem) {
  return (($m_sr_BoxesRunTime$().k(elem, this.fd) || $m_sr_BoxesRunTime$().k(elem, this.g4)) || $m_sr_BoxesRunTime$().k(elem, this.g5));
});
$p.d5 = (function(elem) {
  return (this.al(elem) ? this : new $c_sci_Set$Set4(this.fd, this.g4, this.g5, elem));
});
$p.f = (function() {
  return new $c_sci_Set$Set3$$anon$2(this);
});
$p.va = (function(i) {
  switch (i) {
    case 0: {
      return this.fd;
      break;
    }
    case 1: {
      return this.g4;
      break;
    }
    case 2: {
      return this.g5;
      break;
    }
    default: {
      throw new $c_s_MatchError(i);
    }
  }
});
$p.U = (function(f) {
  f.c(this.fd);
  f.c(this.g4);
  f.c(this.g5);
});
$p.dp = (function(p) {
  return (((!(!p.c(this.fd))) && (!(!p.c(this.g4)))) && (!(!p.c(this.g5))));
});
$p.o = (function() {
  return this.fd;
});
$p.ds = (function(elem) {
  return this.d5(elem);
});
function $isArrayOf_sci_Set$Set3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cG)));
}
var $d_sci_Set$Set3 = new $TypeData().i($c_sci_Set$Set3, "scala.collection.immutable.Set$Set3", ({
  cG: 1,
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
  r: 1,
  ak: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set4(elem1, elem2, elem3, elem4) {
  this.eq = null;
  this.fe = null;
  this.ff = null;
  this.fg = null;
  this.eq = elem1;
  this.fe = elem2;
  this.ff = elem3;
  this.fg = elem4;
}
$p = $c_sci_Set$Set4.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set4;
/** @constructor */
function $h_sci_Set$Set4() {
}
$h_sci_Set$Set4.prototype = $p;
$p.N = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.O = (function() {
  return 4;
});
$p.b = (function() {
  return false;
});
$p.p = (function() {
  return 4;
});
$p.al = (function(elem) {
  return ((($m_sr_BoxesRunTime$().k(elem, this.eq) || $m_sr_BoxesRunTime$().k(elem, this.fe)) || $m_sr_BoxesRunTime$().k(elem, this.ff)) || $m_sr_BoxesRunTime$().k(elem, this.fg));
});
$p.d5 = (function(elem) {
  return (this.al(elem) ? this : $m_sci_HashSet$().hb.gn(this.eq).gn(this.fe).gn(this.ff).gn(this.fg).gn(elem));
});
$p.f = (function() {
  return new $c_sci_Set$Set4$$anon$3(this);
});
$p.vb = (function(i) {
  switch (i) {
    case 0: {
      return this.eq;
      break;
    }
    case 1: {
      return this.fe;
      break;
    }
    case 2: {
      return this.ff;
      break;
    }
    case 3: {
      return this.fg;
      break;
    }
    default: {
      throw new $c_s_MatchError(i);
    }
  }
});
$p.U = (function(f) {
  f.c(this.eq);
  f.c(this.fe);
  f.c(this.ff);
  f.c(this.fg);
});
$p.dp = (function(p) {
  return ((((!(!p.c(this.eq))) && (!(!p.c(this.fe)))) && (!(!p.c(this.ff)))) && (!(!p.c(this.fg))));
});
$p.o = (function() {
  return this.eq;
});
$p.sK = (function(builder) {
  return builder.az(this.eq).az(this.fe).az(this.ff).az(this.fg);
});
$p.ds = (function(elem) {
  return this.d5(elem);
});
function $isArrayOf_sci_Set$Set4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cH)));
}
var $d_sci_Set$Set4 = new $TypeData().i($c_sci_Set$Set4, "scala.collection.immutable.Set$Set4", ({
  cH: 1,
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
  r: 1,
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
  this.fV = null;
  this.h7 = null;
  this.fU = null;
  this.it = null;
  this.ez = null;
  this.ez = mutationCount;
  $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(this, underlying, elem);
}
$p = $c_scm_CheckedIndexedSeqView$Appended.prototype = new $h_sc_IndexedSeqView$Appended();
$p.constructor = $c_scm_CheckedIndexedSeqView$Appended;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$Appended() {
}
$h_scm_CheckedIndexedSeqView$Appended.prototype = $p;
$p.f = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.ez);
});
$p.dm = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.ez);
});
$p.dt = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.ez);
});
$p.cK = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.ez);
});
$p.N = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.ez);
});
$p.T = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.ez);
});
$p.cF = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.ez);
});
var $d_scm_CheckedIndexedSeqView$Appended = new $TypeData().i($c_scm_CheckedIndexedSeqView$Appended, "scala.collection.mutable.CheckedIndexedSeqView$Appended", ({
  iv: 1,
  c5: 1,
  bb: 1,
  aM: 1,
  H: 1,
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
  p: 1,
  d0: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$Map(underlying, f, mutationCount) {
  this.f1 = null;
  this.h8 = null;
  this.h3 = null;
  this.iu = null;
  this.eA = null;
  this.eA = mutationCount;
  $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(this, underlying, f);
}
$p = $c_scm_CheckedIndexedSeqView$Map.prototype = new $h_sc_IndexedSeqView$Map();
$p.constructor = $c_scm_CheckedIndexedSeqView$Map;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$Map() {
}
$h_scm_CheckedIndexedSeqView$Map.prototype = $p;
$p.f = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.eA);
});
$p.dm = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.eA);
});
$p.dt = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.eA);
});
$p.cK = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.eA);
});
$p.N = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.eA);
});
$p.T = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.eA);
});
$p.cF = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.eA);
});
var $d_scm_CheckedIndexedSeqView$Map = new $TypeData().i($c_scm_CheckedIndexedSeqView$Map, "scala.collection.mutable.CheckedIndexedSeqView$Map", ({
  ix: 1,
  c7: 1,
  bc: 1,
  aN: 1,
  H: 1,
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
  p: 1,
  d0: 1
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
$p.b = (function() {
  return true;
});
$p.l4 = (function(key) {
  throw new $c_ju_NoSuchElementException(("key not found: " + key));
});
$p.al = (function(key) {
  return false;
});
$p.gl = (function(key) {
  return $m_s_None$();
});
$p.e4 = (function(key, default$1) {
  return default$1.L();
});
$p.f = (function() {
  return $m_sc_Iterator$().F;
});
$p.gp = (function() {
  return $m_sc_Iterator$().F;
});
$p.eN = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
$p.c = (function(key) {
  this.l4(key);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  hI: 1,
  aA: 1,
  av: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  ag: 1,
  ay: 1,
  j: 1,
  i: 1,
  ax: 1,
  d: 1,
  ai: 1,
  r: 1,
  aC: 1,
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
  $thiz.di = outer;
  return $thiz;
}
/** @constructor */
function $c_sci_MapOps$ImmutableKeySet() {
  this.di = null;
}
$p = $c_sci_MapOps$ImmutableKeySet.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_MapOps$ImmutableKeySet;
/** @constructor */
function $h_sci_MapOps$ImmutableKeySet() {
}
$h_sci_MapOps$ImmutableKeySet.prototype = $p;
$p.f = (function() {
  return this.di.gp();
});
$p.al = (function(key) {
  return this.di.al(key);
});
$p.O = (function() {
  return this.di.O();
});
$p.p = (function() {
  return this.di.p();
});
$p.b = (function() {
  return this.di.b();
});
$p.d5 = (function(elem) {
  return (this.di.al(elem) ? this : $f_sc_SetOps__concat__sc_IterableOnce__sc_SetOps($m_sci_Set$EmptySet$(), this).ds(elem));
});
$p.ds = (function(elem) {
  return this.d5(elem);
});
function $isArrayOf_sci_MapOps$ImmutableKeySet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.be)));
}
var $d_sci_MapOps$ImmutableKeySet = new $TypeData().i($c_sci_MapOps$ImmutableKeySet, "scala.collection.immutable.MapOps$ImmutableKeySet", ({
  be: 1,
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
  r: 1,
  ak: 1,
  ca: 1,
  K: 1,
  a: 1
}));
function $p_sci_HashMap$HashKeySet__newKeySetOrThis__sci_BitmapIndexedMapNode__sci_Set($thiz, newRootNode) {
  return ((newRootNode === $thiz.di.b9) ? $thiz : new $c_sci_HashMap(newRootNode).lF());
}
/** @constructor */
function $c_sci_HashMap$HashKeySet(outer) {
  this.di = null;
  $ct_sci_MapOps$ImmutableKeySet__sci_MapOps__(this, outer);
}
$p = $c_sci_HashMap$HashKeySet.prototype = new $h_sci_MapOps$ImmutableKeySet();
$p.constructor = $c_sci_HashMap$HashKeySet;
/** @constructor */
function $h_sci_HashMap$HashKeySet() {
}
$h_sci_HashMap$HashKeySet.prototype = $p;
$p.d5 = (function(elem) {
  var originalHash = $m_sr_Statics$().R(elem);
  var improvedHash = $m_sc_Hashing$().bo(originalHash);
  return $p_sci_HashMap$HashKeySet__newKeySetOrThis__sci_BitmapIndexedMapNode__sci_Set(this, this.di.b9.m4(elem, null, originalHash, improvedHash, 0, false));
});
$p.ds = (function(elem) {
  return this.d5(elem);
});
function $isArrayOf_sci_HashMap$HashKeySet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cs)));
}
var $d_sci_HashMap$HashKeySet = new $TypeData().i($c_sci_HashMap$HashKeySet, "scala.collection.immutable.HashMap$HashKeySet", ({
  cs: 1,
  be: 1,
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
  r: 1,
  ak: 1,
  ca: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map1(key1, value1) {
  this.cn = null;
  this.dM = null;
  this.cn = key1;
  this.dM = value1;
}
$p = $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $p;
$p.N = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.O = (function() {
  return 1;
});
$p.p = (function() {
  return 1;
});
$p.b = (function() {
  return false;
});
$p.c = (function(key) {
  if ($m_sr_BoxesRunTime$().k(key, this.cn)) {
    return this.dM;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.al = (function(key) {
  return $m_sr_BoxesRunTime$().k(key, this.cn);
});
$p.gl = (function(key) {
  return ($m_sr_BoxesRunTime$().k(key, this.cn) ? new $c_s_Some(this.dM) : $m_s_None$());
});
$p.e4 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().k(key, this.cn) ? this.dM : default$1.L());
});
$p.f = (function() {
  return new $c_sc_Iterator$$anon$20(new $c_T2(this.cn, this.dM));
});
$p.gp = (function() {
  return new $c_sc_Iterator$$anon$20(this.cn);
});
$p.fx = (function(key, value) {
  return ($m_sr_BoxesRunTime$().k(key, this.cn) ? new $c_sci_Map$Map1(this.cn, value) : new $c_sci_Map$Map2(this.cn, this.dM, key, value));
});
$p.U = (function(f) {
  f.c(new $c_T2(this.cn, this.dM));
});
$p.dp = (function(p) {
  return (!(!p.c(new $c_T2(this.cn, this.dM))));
});
$p.v = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().d9(this.cn, this.dM);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().eF;
  h = $m_s_util_hashing_MurmurHash3$().i(h, a);
  h = $m_s_util_hashing_MurmurHash3$().i(h, b);
  h = $m_s_util_hashing_MurmurHash3$().e8(h, c);
  return $m_s_util_hashing_MurmurHash3$().G(h, 1);
});
$p.eN = (function(key, value) {
  return this.fx(key, value);
});
function $isArrayOf_sci_Map$Map1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cw)));
}
var $d_sci_Map$Map1 = new $TypeData().i($c_sci_Map$Map1, "scala.collection.immutable.Map$Map1", ({
  cw: 1,
  aA: 1,
  av: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  ag: 1,
  ay: 1,
  j: 1,
  i: 1,
  ax: 1,
  d: 1,
  ai: 1,
  r: 1,
  aC: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.co = null;
  this.dg = null;
  this.cp = null;
  this.dh = null;
  this.co = key1;
  this.dg = value1;
  this.cp = key2;
  this.dh = value2;
}
$p = $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $p;
$p.N = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.O = (function() {
  return 2;
});
$p.p = (function() {
  return 2;
});
$p.b = (function() {
  return false;
});
$p.c = (function(key) {
  if ($m_sr_BoxesRunTime$().k(key, this.co)) {
    return this.dg;
  } else if ($m_sr_BoxesRunTime$().k(key, this.cp)) {
    return this.dh;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.al = (function(key) {
  return ($m_sr_BoxesRunTime$().k(key, this.co) || $m_sr_BoxesRunTime$().k(key, this.cp));
});
$p.gl = (function(key) {
  return ($m_sr_BoxesRunTime$().k(key, this.co) ? new $c_s_Some(this.dg) : ($m_sr_BoxesRunTime$().k(key, this.cp) ? new $c_s_Some(this.dh) : $m_s_None$()));
});
$p.e4 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().k(key, this.co) ? this.dg : ($m_sr_BoxesRunTime$().k(key, this.cp) ? this.dh : default$1.L()));
});
$p.f = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.gp = (function() {
  return new $c_sci_Map$Map2$$anon$2(this);
});
$p.fx = (function(key, value) {
  return ($m_sr_BoxesRunTime$().k(key, this.co) ? new $c_sci_Map$Map2(this.co, value, this.cp, this.dh) : ($m_sr_BoxesRunTime$().k(key, this.cp) ? new $c_sci_Map$Map2(this.co, this.dg, this.cp, value) : new $c_sci_Map$Map3(this.co, this.dg, this.cp, this.dh, key, value)));
});
$p.U = (function(f) {
  f.c(new $c_T2(this.co, this.dg));
  f.c(new $c_T2(this.cp, this.dh));
});
$p.dp = (function(p) {
  return ((!(!p.c(new $c_T2(this.co, this.dg)))) && (!(!p.c(new $c_T2(this.cp, this.dh)))));
});
$p.v = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().d9(this.co, this.dg);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d9(this.cp, this.dh);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().eF;
  h = $m_s_util_hashing_MurmurHash3$().i(h, a);
  h = $m_s_util_hashing_MurmurHash3$().i(h, b);
  h = $m_s_util_hashing_MurmurHash3$().e8(h, c);
  return $m_s_util_hashing_MurmurHash3$().G(h, 2);
});
$p.eN = (function(key, value) {
  return this.fx(key, value);
});
function $isArrayOf_sci_Map$Map2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cx)));
}
var $d_sci_Map$Map2 = new $TypeData().i($c_sci_Map$Map2, "scala.collection.immutable.Map$Map2", ({
  cx: 1,
  aA: 1,
  av: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  ag: 1,
  ay: 1,
  j: 1,
  i: 1,
  ax: 1,
  d: 1,
  ai: 1,
  r: 1,
  aC: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.c6 = null;
  this.cR = null;
  this.c7 = null;
  this.cS = null;
  this.c8 = null;
  this.cT = null;
  this.c6 = key1;
  this.cR = value1;
  this.c7 = key2;
  this.cS = value2;
  this.c8 = key3;
  this.cT = value3;
}
$p = $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $p;
$p.N = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.O = (function() {
  return 3;
});
$p.p = (function() {
  return 3;
});
$p.b = (function() {
  return false;
});
$p.c = (function(key) {
  if ($m_sr_BoxesRunTime$().k(key, this.c6)) {
    return this.cR;
  } else if ($m_sr_BoxesRunTime$().k(key, this.c7)) {
    return this.cS;
  } else if ($m_sr_BoxesRunTime$().k(key, this.c8)) {
    return this.cT;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.al = (function(key) {
  return (($m_sr_BoxesRunTime$().k(key, this.c6) || $m_sr_BoxesRunTime$().k(key, this.c7)) || $m_sr_BoxesRunTime$().k(key, this.c8));
});
$p.gl = (function(key) {
  return ($m_sr_BoxesRunTime$().k(key, this.c6) ? new $c_s_Some(this.cR) : ($m_sr_BoxesRunTime$().k(key, this.c7) ? new $c_s_Some(this.cS) : ($m_sr_BoxesRunTime$().k(key, this.c8) ? new $c_s_Some(this.cT) : $m_s_None$())));
});
$p.e4 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().k(key, this.c6) ? this.cR : ($m_sr_BoxesRunTime$().k(key, this.c7) ? this.cS : ($m_sr_BoxesRunTime$().k(key, this.c8) ? this.cT : default$1.L())));
});
$p.f = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.gp = (function() {
  return new $c_sci_Map$Map3$$anon$5(this);
});
$p.fx = (function(key, value) {
  return ($m_sr_BoxesRunTime$().k(key, this.c6) ? new $c_sci_Map$Map3(this.c6, value, this.c7, this.cS, this.c8, this.cT) : ($m_sr_BoxesRunTime$().k(key, this.c7) ? new $c_sci_Map$Map3(this.c6, this.cR, this.c7, value, this.c8, this.cT) : ($m_sr_BoxesRunTime$().k(key, this.c8) ? new $c_sci_Map$Map3(this.c6, this.cR, this.c7, this.cS, this.c8, value) : new $c_sci_Map$Map4(this.c6, this.cR, this.c7, this.cS, this.c8, this.cT, key, value))));
});
$p.U = (function(f) {
  f.c(new $c_T2(this.c6, this.cR));
  f.c(new $c_T2(this.c7, this.cS));
  f.c(new $c_T2(this.c8, this.cT));
});
$p.dp = (function(p) {
  return (((!(!p.c(new $c_T2(this.c6, this.cR)))) && (!(!p.c(new $c_T2(this.c7, this.cS))))) && (!(!p.c(new $c_T2(this.c8, this.cT)))));
});
$p.v = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().d9(this.c6, this.cR);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d9(this.c7, this.cS);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d9(this.c8, this.cT);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().eF;
  h = $m_s_util_hashing_MurmurHash3$().i(h, a);
  h = $m_s_util_hashing_MurmurHash3$().i(h, b);
  h = $m_s_util_hashing_MurmurHash3$().e8(h, c);
  return $m_s_util_hashing_MurmurHash3$().G(h, 3);
});
$p.eN = (function(key, value) {
  return this.fx(key, value);
});
function $isArrayOf_sci_Map$Map3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cz)));
}
var $d_sci_Map$Map3 = new $TypeData().i($c_sci_Map$Map3, "scala.collection.immutable.Map$Map3", ({
  cz: 1,
  aA: 1,
  av: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  ag: 1,
  ay: 1,
  j: 1,
  i: 1,
  ax: 1,
  d: 1,
  ai: 1,
  r: 1,
  aC: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.bP = null;
  this.cq = null;
  this.bQ = null;
  this.cr = null;
  this.bR = null;
  this.cs = null;
  this.bS = null;
  this.ct = null;
  this.bP = key1;
  this.cq = value1;
  this.bQ = key2;
  this.cr = value2;
  this.bR = key3;
  this.cs = value3;
  this.bS = key4;
  this.ct = value4;
}
$p = $c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
}
$h_sci_Map$Map4.prototype = $p;
$p.N = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.O = (function() {
  return 4;
});
$p.p = (function() {
  return 4;
});
$p.b = (function() {
  return false;
});
$p.c = (function(key) {
  if ($m_sr_BoxesRunTime$().k(key, this.bP)) {
    return this.cq;
  } else if ($m_sr_BoxesRunTime$().k(key, this.bQ)) {
    return this.cr;
  } else if ($m_sr_BoxesRunTime$().k(key, this.bR)) {
    return this.cs;
  } else if ($m_sr_BoxesRunTime$().k(key, this.bS)) {
    return this.ct;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.al = (function(key) {
  return ((($m_sr_BoxesRunTime$().k(key, this.bP) || $m_sr_BoxesRunTime$().k(key, this.bQ)) || $m_sr_BoxesRunTime$().k(key, this.bR)) || $m_sr_BoxesRunTime$().k(key, this.bS));
});
$p.gl = (function(key) {
  return ($m_sr_BoxesRunTime$().k(key, this.bP) ? new $c_s_Some(this.cq) : ($m_sr_BoxesRunTime$().k(key, this.bQ) ? new $c_s_Some(this.cr) : ($m_sr_BoxesRunTime$().k(key, this.bR) ? new $c_s_Some(this.cs) : ($m_sr_BoxesRunTime$().k(key, this.bS) ? new $c_s_Some(this.ct) : $m_s_None$()))));
});
$p.e4 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().k(key, this.bP) ? this.cq : ($m_sr_BoxesRunTime$().k(key, this.bQ) ? this.cr : ($m_sr_BoxesRunTime$().k(key, this.bR) ? this.cs : ($m_sr_BoxesRunTime$().k(key, this.bS) ? this.ct : default$1.L()))));
});
$p.f = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.gp = (function() {
  return new $c_sci_Map$Map4$$anon$8(this);
});
$p.fx = (function(key, value) {
  return ($m_sr_BoxesRunTime$().k(key, this.bP) ? new $c_sci_Map$Map4(this.bP, value, this.bQ, this.cr, this.bR, this.cs, this.bS, this.ct) : ($m_sr_BoxesRunTime$().k(key, this.bQ) ? new $c_sci_Map$Map4(this.bP, this.cq, this.bQ, value, this.bR, this.cs, this.bS, this.ct) : ($m_sr_BoxesRunTime$().k(key, this.bR) ? new $c_sci_Map$Map4(this.bP, this.cq, this.bQ, this.cr, this.bR, value, this.bS, this.ct) : ($m_sr_BoxesRunTime$().k(key, this.bS) ? new $c_sci_Map$Map4(this.bP, this.cq, this.bQ, this.cr, this.bR, this.cs, this.bS, value) : $m_sci_HashMap$().kE.gz(this.bP, this.cq).gz(this.bQ, this.cr).gz(this.bR, this.cs).gz(this.bS, this.ct).gz(key, value)))));
});
$p.U = (function(f) {
  f.c(new $c_T2(this.bP, this.cq));
  f.c(new $c_T2(this.bQ, this.cr));
  f.c(new $c_T2(this.bR, this.cs));
  f.c(new $c_T2(this.bS, this.ct));
});
$p.dp = (function(p) {
  return ((((!(!p.c(new $c_T2(this.bP, this.cq)))) && (!(!p.c(new $c_T2(this.bQ, this.cr))))) && (!(!p.c(new $c_T2(this.bR, this.cs))))) && (!(!p.c(new $c_T2(this.bS, this.ct)))));
});
$p.sJ = (function(builder) {
  return builder.fk(this.bP, this.cq).fk(this.bQ, this.cr).fk(this.bR, this.cs).fk(this.bS, this.ct);
});
$p.v = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().d9(this.bP, this.cq);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d9(this.bQ, this.cr);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d9(this.bR, this.cs);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d9(this.bS, this.ct);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().eF;
  h = $m_s_util_hashing_MurmurHash3$().i(h, a);
  h = $m_s_util_hashing_MurmurHash3$().i(h, b);
  h = $m_s_util_hashing_MurmurHash3$().e8(h, c);
  return $m_s_util_hashing_MurmurHash3$().G(h, 4);
});
$p.eN = (function(key, value) {
  return this.fx(key, value);
});
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cB)));
}
var $d_sci_Map$Map4 = new $TypeData().i($c_sci_Map$Map4, "scala.collection.immutable.Map$Map4", ({
  cB: 1,
  aA: 1,
  av: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  ag: 1,
  ay: 1,
  j: 1,
  i: 1,
  ax: 1,
  d: 1,
  ai: 1,
  r: 1,
  aC: 1,
  n: 1,
  a: 1
}));
function $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet($thiz, newRootNode) {
  return (($thiz.bO === newRootNode) ? $thiz : new $c_sci_HashSet(newRootNode));
}
/** @constructor */
function $c_sci_HashSet(rootNode) {
  this.bO = null;
  this.bO = rootNode;
}
$p = $c_sci_HashSet.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_HashSet;
/** @constructor */
function $h_sci_HashSet() {
}
$h_sci_HashSet.prototype = $p;
$p.N = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.b2 = (function() {
  return $m_sci_HashSet$();
});
$p.p = (function() {
  return this.bO.bs;
});
$p.O = (function() {
  return this.bO.bs;
});
$p.b = (function() {
  return (this.bO.bs === 0);
});
$p.f = (function() {
  return (this.b() ? $m_sc_Iterator$().F : new $c_sci_SetIterator(this.bO));
});
$p.al = (function(element) {
  var elementUnimprovedHash = $m_sr_Statics$().R(element);
  var elementHash = $m_sc_Hashing$().bo(elementUnimprovedHash);
  return this.bO.hA(element, elementUnimprovedHash, elementHash, 0);
});
$p.gn = (function(element) {
  var elementUnimprovedHash = $m_sr_Statics$().R(element);
  var elementHash = $m_sc_Hashing$().bo(elementUnimprovedHash);
  return $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet(this, this.bO.rF(element, elementUnimprovedHash, elementHash, 0));
});
$p.o = (function() {
  return this.f().e();
});
$p.U = (function(f) {
  this.bO.U(f);
});
$p.m0 = (function(that) {
  return (this.b() || ((!that.b()) && ((that instanceof $c_sci_HashSet) ? this.bO.m1(that.bO, 0) : $f_sc_IterableOnceOps__forall__F1__Z(this, that))));
});
$p.n = (function(that) {
  if ((that instanceof $c_sci_HashSet)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bO;
      var x$2 = that.bO;
      return ((x === null) ? (x$2 === null) : x.n(x$2));
    }
  } else {
    return $f_sc_Set__equals__O__Z(this, that);
  }
});
$p.cb = (function() {
  return "HashSet";
});
$p.v = (function() {
  var it = new $c_sci_SetHashIterator(this.bO);
  return $m_s_util_hashing_MurmurHash3$().hU(it, $m_s_util_hashing_MurmurHash3$().iL);
});
$p.ds = (function(elem) {
  return this.gn(elem);
});
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ct)));
}
var $d_sci_HashSet = new $TypeData().i($c_sci_HashSet, "scala.collection.immutable.HashSet", ({
  ct: 1,
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
  r: 1,
  ak: 1,
  ic: 1,
  hc: 1,
  n: 1,
  K: 1,
  a: 1
}));
function $isArrayOf_sci_ListSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hG)));
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
$p.aX = (function() {
  return this;
});
function $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State($thiz) {
  if ((!$thiz.kF)) {
    if ($thiz.iB) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
    }
    $thiz.iB = true;
    try {
      var res = $thiz.kG.L();
    } finally {
      $thiz.iB = false;
    }
    $thiz.bX = true;
    $thiz.kG = null;
    $thiz.kH = res;
    $thiz.kF = true;
  }
  return $thiz.kH;
}
function $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz, f) {
  $m_sci_LazyList$();
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => ($thiz.b() ? $m_sci_LazyList$State$Empty$() : ($m_sci_LazyList$(), new $c_sci_LazyList$State$Cons(f.c($thiz.A().o()), $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz.A().aB(), f)))))));
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.s = (("" + b.s) + start);
  if ((!$thiz.bX)) {
    b.s = (b.s + "<not computed>");
  } else if ((!$thiz.b())) {
    var obj = $thiz.A().o();
    b.s = (("" + b.s) + obj);
    var elem = null;
    elem = $thiz;
    var elem$1 = $thiz.A().aB();
    var elem$2 = null;
    elem$2 = elem$1;
    if (((elem !== elem$2) && ((!elem$2.bX) || (elem.A() !== elem$2.A())))) {
      elem = elem$2;
      if ((elem$2.bX && (!elem$2.b()))) {
        elem$2 = elem$2.A().aB();
        while ((((elem !== elem$2) && (elem$2.bX && (!elem$2.b()))) && (elem.A() !== elem$2.A()))) {
          b.s = (("" + b.s) + sep);
          var obj$1 = elem.A().o();
          b.s = (("" + b.s) + obj$1);
          elem = elem.A().aB();
          elem$2 = elem$2.A().aB();
          if ((elem$2.bX && (!elem$2.b()))) {
            elem$2 = elem$2.A().aB();
          }
        }
      }
    }
    if ((!(elem$2.bX && (!elem$2.b())))) {
      while ((elem !== elem$2)) {
        b.s = (("" + b.s) + sep);
        var obj$2 = elem.A().o();
        b.s = (("" + b.s) + obj$2);
        elem = elem.A().aB();
      }
      if ((!elem.bX)) {
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
          runner = runner.A().aB();
          elem$2 = elem$2.A().aB();
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
        elem = elem.A().aB();
      }
      while (true) {
        var a$2 = elem;
        var b$3 = elem$2;
        if ((!((a$2 === b$3) || (a$2.A() === b$3.A())))) {
          b.s = (("" + b.s) + sep);
          var obj$4 = elem.A().o();
          b.s = (("" + b.s) + obj$4);
          elem = elem.A().aB();
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
  this.kH = null;
  this.kG = null;
  this.bX = false;
  this.iB = false;
  this.kF = false;
  this.kG = lazyState;
  this.bX = false;
  this.iB = false;
}
$p = $c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
}
$h_sci_LazyList.prototype = $p;
$p.bh = (function() {
  return "LinearSeq";
});
$p.bL = (function() {
  return $f_sc_LinearSeqOps__headOption__s_Option(this);
});
$p.m = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$p.b3 = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.ly = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.u = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.j2 = (function(p) {
  return $f_sc_LinearSeqOps__exists__F1__Z(this, p);
});
$p.gw = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.fp = (function(p, from) {
  return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from);
});
$p.A = (function() {
  return ((!this.kF) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.kH);
});
$p.b = (function() {
  return (this.A() === $m_sci_LazyList$State$Empty$());
});
$p.p = (function() {
  return ((this.bX && (this.A() === $m_sci_LazyList$State$Empty$())) ? 0 : (-1));
});
$p.o = (function() {
  return this.A().o();
});
$p.qO = (function() {
  var these = this;
  var those = this;
  if ((!these.b())) {
    these = these.A().aB();
  }
  while ((those !== these)) {
    if (these.b()) {
      return this;
    }
    these = these.A().aB();
    if (these.b()) {
      return this;
    }
    these = these.A().aB();
    if ((these === those)) {
      return this;
    }
    those = those.A().aB();
  }
  return this;
});
$p.f = (function() {
  return ((this.bX && (this.A() === $m_sci_LazyList$State$Empty$())) ? $m_sc_Iterator$().F : new $c_sci_LazyList$LazyIterator(this));
});
$p.U = (function(f) {
  var _$this = this;
  while (true) {
    if ((!_$this.b())) {
      f.c(_$this.A().o());
      _$this = _$this.A().aB();
      continue;
    }
    break;
  }
});
$p.fm = (function(z, op) {
  var _$this = this;
  while (true) {
    if (_$this.b()) {
      return z;
    } else {
      var temp$_$this = _$this.A().aB();
      var temp$z = op.bn(z, _$this.A().o());
      _$this = temp$_$this;
      z = temp$z;
    }
  }
});
$p.cb = (function() {
  return "LazyList";
});
$p.r9 = (function(suffix) {
  $m_sci_LazyList$();
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    if (this.b()) {
      var x1 = suffix.L();
      return ((x1 instanceof $c_sci_LazyList) ? x1.A() : ((x1.p() === 0) ? $m_sci_LazyList$State$Empty$() : $m_sci_LazyList$().lW(x1.f())));
    } else {
      $m_sci_LazyList$();
      return new $c_sci_LazyList$State$Cons(this.A().o(), this.A().aB().r9(suffix));
    }
  })));
});
$p.su = (function(elem) {
  return ((this.bX && (this.A() === $m_sci_LazyList$State$Empty$())) ? ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    $m_sci_LazyList$();
    return new $c_sci_LazyList$State$Cons(elem, $m_sci_LazyList$().f4);
  })))) : this.r9(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$$anon$20(elem)))));
});
$p.hQ = (function(f) {
  if (this.b()) {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  } else {
    var reducedRes = this.A().o();
    var left = this.A().aB();
    while ((!left.b())) {
      reducedRes = f.bn(reducedRes, left.A().o());
      left = left.A().aB();
    }
    return reducedRes;
  }
});
$p.uk = (function(f) {
  return ((this.bX && (this.A() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().f4 : ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => (this.b() ? $m_sci_LazyList$State$Empty$() : ($m_sci_LazyList$(), new $c_sci_LazyList$State$Cons(f.c(this.A().o()), $p_sci_LazyList__mapImpl__F1__sci_LazyList(this.A().aB(), f)))))))));
});
$p.iY = (function(pf) {
  var _$this = this;
  while (true) {
    if (_$this.b()) {
      return $m_s_None$();
    } else {
      var res = pf.bI(_$this.A().o(), $m_sci_LazyList$().pv);
      if ((res === $m_sr_Statics$PFMarker$())) {
        _$this = _$this.A().aB();
      } else {
        return new $c_s_Some(res);
      }
    }
  }
});
$p.tz = (function(f) {
  return ((this.bX && (this.A() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().f4 : $m_sci_LazyList$().rs(this, f));
});
$p.tm = (function(n) {
  return ((n <= 0) ? this : ((this.bX && (this.A() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().f4 : $m_sci_LazyList$().v8(this, n)));
});
$p.eG = (function(sb, start, sep, end) {
  this.qO();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.bc, start, sep, end);
  return sb;
});
$p.x = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").s;
});
$p.c = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.c0 = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.le = (function(n) {
  return this.tm(n);
});
$p.fl = (function(asIterable) {
  return this.tz(asIterable);
});
$p.N = (function(f) {
  return this.uk(f);
});
$p.T = (function(elem) {
  return this.su(elem);
});
$p.z = (function() {
  return this.A().aB();
});
$p.b2 = (function() {
  return $m_sci_LazyList$();
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cu)));
}
var $d_sci_LazyList = new $TypeData().i($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  cu: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  aO: 1,
  aw: 1,
  aL: 1,
  aP: 1,
  a: 1
}));
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ik)));
}
function $ct_sjsr_WrappedVarArgs__sjs_js_Array__($thiz, array) {
  $thiz.iK = array;
  return $thiz;
}
function $ct_sjsr_WrappedVarArgs__($thiz) {
  $ct_sjsr_WrappedVarArgs__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjsr_WrappedVarArgs() {
  this.iK = null;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.cI = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.T = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.N = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.fl = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.iX = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.gw = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.iU = (function() {
  return $m_sci_IndexedSeqDefaults$().pu;
});
$p.f = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bL = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.m();
});
$p.n = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().ru(this);
});
$p.x = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.O = (function() {
  return this.m();
});
$p.fp = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I($ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this)), p, from);
});
$p.lZ = (function(otherSize) {
  var x = this.m();
  return ((x === otherSize) ? 0 : ((x < otherSize) ? (-1) : 1));
});
$p.b = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.bI = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.hH = (function() {
  return $m_sjsr_WrappedVarArgs$().aO();
});
$p.U = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.j2 = (function(p) {
  return $f_sc_IterableOnceOps__exists__F1__Z(this, p);
});
$p.fm = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.hQ = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op);
});
$p.bZ = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.iY = (function(pf) {
  return $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(this, pf);
});
$p.eG = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fw = (function() {
  return $m_sci_Nil$().y(this);
});
$p.m2 = (function() {
  return $m_sci_Vector$().bB(this);
});
$p.jh = (function(evidence$2) {
  return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2);
});
$p.e5 = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.m = (function() {
  return (this.iK.length | 0);
});
$p.u = (function(idx) {
  return this.iK[idx];
});
$p.cb = (function() {
  return "WrappedVarArgs";
});
$p.gj = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().lp(coll);
});
$p.c0 = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.c = (function(v1) {
  return this.u((v1 | 0));
});
$p.b2 = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.da)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  da: 1,
  C: 1,
  x: 1,
  r: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  y: 1,
  u: 1,
  p: 1,
  G: 1,
  A: 1,
  t: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_HashMap(rootNode) {
  this.b9 = null;
  this.b9 = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.N = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.ra = (function() {
  return $m_sci_HashMap$();
});
$p.p = (function() {
  return this.b9.bi;
});
$p.O = (function() {
  return this.b9.bi;
});
$p.b = (function() {
  return (this.b9.bi === 0);
});
$p.lF = (function() {
  return ((this.b9.bi === 0) ? $m_sci_Set$EmptySet$() : new $c_sci_HashMap$HashKeySet(this));
});
$p.f = (function() {
  return (this.b() ? $m_sc_Iterator$().F : new $c_sci_MapKeyValueTupleIterator(this.b9));
});
$p.gp = (function() {
  return (this.b() ? $m_sc_Iterator$().F : new $c_sci_MapKeyIterator(this.b9));
});
$p.al = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().R(key);
  var keyHash = $m_sc_Hashing$().bo(keyUnimprovedHash);
  return this.b9.lc(key, keyUnimprovedHash, keyHash, 0);
});
$p.c = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().R(key);
  var keyHash = $m_sc_Hashing$().bo(keyUnimprovedHash);
  return this.b9.l2(key, keyUnimprovedHash, keyHash, 0);
});
$p.gl = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().R(key);
  var keyHash = $m_sc_Hashing$().bo(keyUnimprovedHash);
  return this.b9.j4(key, keyUnimprovedHash, keyHash, 0);
});
$p.e4 = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().R(key);
  var keyHash = $m_sc_Hashing$().bo(keyUnimprovedHash);
  return this.b9.lq(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.gz = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().R(key);
  var newRootNode = this.b9.m4(key, value, keyUnimprovedHash, $m_sc_Hashing$().bo(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.b9) ? this : new $c_sci_HashMap(newRootNode));
});
$p.U = (function(f) {
  this.b9.U(f);
});
$p.fn = (function(f) {
  this.b9.fn(f);
});
$p.n = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.b9;
      var x$2 = that.b9;
      return ((x === null) ? (x$2 === null) : x.n(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.v = (function() {
  if (this.b()) {
    return $m_s_util_hashing_MurmurHash3$().kY;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.b9);
    return $m_s_util_hashing_MurmurHash3$().hU(hashIterator, $m_s_util_hashing_MurmurHash3$().eF);
  }
});
$p.cb = (function() {
  return "HashMap";
});
$p.o = (function() {
  return this.f().e();
});
$p.eN = (function(key, value) {
  return this.gz(key, value);
});
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cr)));
}
var $d_sci_HashMap = new $TypeData().i($c_sci_HashMap, "scala.collection.immutable.HashMap", ({
  cr: 1,
  aA: 1,
  av: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  ag: 1,
  ay: 1,
  j: 1,
  i: 1,
  ax: 1,
  d: 1,
  ai: 1,
  r: 1,
  aC: 1,
  ib: 1,
  hb: 1,
  n: 1,
  K: 1,
  a: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.id)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ii)));
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
  var idx = (hash & (((-1) + $thiz.bx.a.length) | 0));
  var x1 = $thiz.bx.a[idx];
  if ((x1 === null)) {
    $thiz.bx.a[idx] = new $c_scm_HashSet$Node(elem, hash, null);
  } else {
    var prev = null;
    var n = x1;
    while (((n !== null) && (n.dX <= hash))) {
      if (((n.dX === hash) && $m_sr_BoxesRunTime$().k(elem, n.g7))) {
        return false;
      }
      prev = n;
      n = n.by;
    }
    if ((prev === null)) {
      $thiz.bx.a[idx] = new $c_scm_HashSet$Node(elem, hash, x1);
    } else {
      prev.by = new $c_scm_HashSet$Node(elem, hash, prev.by);
    }
  }
  $thiz.eC = ((1 + $thiz.eC) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.bx.a.length;
  $thiz.kV = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.eC === 0)) {
    $thiz.bx = new ($d_scm_HashSet$Node.r().C)(newlen);
  } else {
    $thiz.bx = $m_ju_Arrays$().ab($thiz.bx, newlen);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.bx.a[i];
        if ((old !== null)) {
          preLow.by = null;
          preHigh.by = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.by;
            if (((n.dX & oldlen) === 0)) {
              lastLow.by = n;
              lastLow = n;
            } else {
              lastHigh.by = n;
              lastHigh = n;
            }
            n = next;
          }
          lastLow.by = null;
          if ((old !== preLow.by)) {
            $thiz.bx.a[i] = preLow.by;
          }
          if ((preHigh.by !== null)) {
            $thiz.bx.a[((i + oldlen) | 0)] = preHigh.by;
            lastHigh.by = null;
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
  return $doubleToInt((size * $thiz.kU));
}
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.kU = loadFactor;
  $thiz.bx = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.kV = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.bx.a.length);
  $thiz.eC = 0;
  return $thiz;
}
function $ct_scm_HashSet__($thiz) {
  $ct_scm_HashSet__I__D__($thiz, 16, 0.75);
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet() {
  this.kU = 0.0;
  this.bx = null;
  this.kV = 0;
  this.eC = 0;
}
$p = $c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$p.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
}
$h_scm_HashSet.prototype = $p;
$p.N = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.O = (function() {
  return this.eC;
});
$p.jf = (function(originalHash) {
  return (originalHash ^ ((originalHash >>> 16) | 0));
});
$p.al = (function(elem) {
  var hash = this.jf($m_sr_Statics$().R(elem));
  var x1 = this.bx.a[(hash & (((-1) + this.bx.a.length) | 0))];
  return (((x1 === null) ? null : x1.ty(elem, hash)) !== null);
});
$p.bq = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.kU)));
  if ((target > this.bx.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.iS = (function(elem) {
  if ((((1 + this.eC) | 0) >= this.kV)) {
    $p_scm_HashSet__growTable__I__V(this, (this.bx.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, this.jf($m_sr_Statics$().R(elem)));
});
$p.q7 = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if ((xs instanceof $c_sci_HashSet)) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((k$2$2, h$2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, k$2$2, this.jf((h$2$2 | 0)));
    }));
    xs.bO.lk(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.l()) {
      var next = iter.e();
      $p_scm_HashSet__addElem__O__I__Z(this, next.g7, next.dX);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.tq();
    while (iter$2.l()) {
      var next$2 = iter$2.e();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.r8(), next$2.r2());
    }
    return this;
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs);
  }
});
$p.f = (function() {
  return new $c_scm_HashSet$$anon$1(this);
});
$p.b2 = (function() {
  return $m_scm_HashSet$();
});
$p.p = (function() {
  return this.eC;
});
$p.b = (function() {
  return (this.eC === 0);
});
$p.cb = (function() {
  return "HashSet";
});
$p.v = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.l()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().hU(hashIterator, $m_s_util_hashing_MurmurHash3$().iL);
});
$p.az = (function(elem) {
  this.iS(elem);
  return this;
});
$p.b5 = (function(elems) {
  return this.q7(elems);
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d1)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  d1: 1,
  il: 1,
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
  iM: 1,
  O: 1,
  iN: 1,
  N: 1,
  E: 1,
  L: 1,
  J: 1,
  I: 1,
  aR: 1,
  n: 1,
  a: 1
}));
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hF)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iI)));
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
$p.gk = (function(coll) {
  return $m_sci_ArraySeq$().lm(coll, this.aN());
});
$p.hH = (function() {
  return $m_sci_ArraySeq$().jb(this.aN());
});
$p.cI = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.fl = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.iX = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.gw = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bh = (function() {
  return "IndexedSeq";
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bL = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.m();
});
$p.e5 = (function() {
  return $m_sci_ArraySeq$().kC;
});
$p.uj = (function(f) {
  var a = new $ac_O(this.m());
  var i = 0;
  while ((i < a.a.length)) {
    a.a[i] = f.c(this.u(i));
    i = ((1 + i) | 0);
  }
  return $m_sci_ArraySeq$().hW(a);
});
$p.aM = (function(elem) {
  var $x_1 = $m_sci_ArraySeq$();
  var xs = this.cO();
  var newLength = ((1 + $m_jl_reflect_Array$().bU(xs)) | 0);
  if ($d_O.R($objectGetClass(xs).D.Q().D)) {
    var dest$1 = $m_ju_Arrays$().ta(xs, newLength, $d_O.r().l());
  } else {
    var dest = new $ac_O(newLength);
    $m_s_Array$().cc(xs, 0, dest, 0, $m_jl_reflect_Array$().bU(xs));
    var dest$1 = dest;
  }
  var x1 = $m_jl_reflect_Array$().bU(xs);
  dest$1.a[x1] = elem;
  return $x_1.hW(dest$1);
});
$p.fm = (function(z, f) {
  var array = this.cO();
  var b = z;
  var i = 0;
  while ((i < $m_jl_reflect_Array$().bU(array))) {
    var a = $m_sr_ScalaRunTime$().eH(array, i);
    b = f.bn(b, a);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.cb = (function() {
  return "ArraySeq";
});
$p.bZ = (function(xs, start, len) {
  var srcLen = this.m();
  var destLen = $m_jl_reflect_Array$().bU(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().cc(this.cO(), 0, xs, start, copied);
  }
  return copied;
});
$p.iU = (function() {
  return 2147483647;
});
$p.gj = (function(coll) {
  return $m_sci_ArraySeq$().lm(coll, this.aN());
});
$p.T = (function(elem) {
  return this.aM(elem);
});
$p.N = (function(f) {
  return this.uj(f);
});
$p.b2 = (function() {
  return $m_sci_ArraySeq$().kC;
});
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.d = prefix1;
  return $thiz;
}
/** @constructor */
function $c_sci_Vector() {
  this.d = null;
}
$p = $c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
}
$h_sci_Vector.prototype = $p;
$p.cI = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.fl = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.iX = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.gw = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bh = (function() {
  return "IndexedSeq";
});
$p.bL = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.m();
});
$p.e5 = (function() {
  return $m_sci_Vector$();
});
$p.m = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.h : this.d.a.length);
});
$p.f = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().pH : new $c_sci_NewVectorIterator(this, this.m(), this.da()));
});
$p.sv = (function(suffix) {
  var k = suffix.p();
  return ((k === 0) ? this : ((k < 0) ? $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix) : this.ca(suffix, k)));
});
$p.ca = (function(suffix, k) {
  if ((k < ((4 + this.da()) | 0))) {
    var v = new $c_sr_ObjectRef(this);
    if ($is_sci_Iterable(suffix)) {
      suffix.U(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => {
        v.K = v.K.bz(x$2$2);
      })));
    } else {
      var this$2 = suffix.f();
      while (this$2.l()) {
        var x0 = this$2.e();
        v.K = v.K.bz(x0);
      }
    }
    return v.K;
  } else if (((this.m() < ((k >>> 5) | 0)) && (suffix instanceof $c_sci_Vector))) {
    var v$2 = suffix;
    var ri = new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(new $c_sc_IndexedSeqView$Id(this));
    while ((ri.bH > 0)) {
      v$2 = v$2.fu(ri.e());
    }
    return v$2;
  } else {
    return (((this.m() < (((-64) + k) | 0)) && (suffix instanceof $c_sci_Vector)) ? new $c_sci_VectorBuilder().ss(this.m(), suffix).hp(this).hp(suffix).je() : new $c_sci_VectorBuilder().r3(this).hp(suffix).je());
  }
});
$p.cb = (function() {
  return "Vector";
});
$p.bZ = (function(xs, start, len) {
  return this.f().bZ(xs, start, len);
});
$p.m2 = (function() {
  return this;
});
$p.iU = (function() {
  return $m_sci_Vector$().pG;
});
$p.bf = (function(index) {
  return $m_scg_CommonErrors$().hF(index, (((-1) + this.m()) | 0));
});
$p.o = (function() {
  if ((this.d.a.length === 0)) {
    throw new $c_ju_NoSuchElementException("empty.head");
  } else {
    return this.d.a[0];
  }
});
$p.U = (function(f) {
  var c = this.da();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    $x_1.lj((((-1) + ((((1 + c$1) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0)) | 0), this.du(i), f);
    i = ((1 + i) | 0);
  }
});
$p.b2 = (function() {
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
$p.cI = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.T = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.N = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.bh = (function() {
  return "IndexedSeq";
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bL = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.m();
});
$p.e5 = (function() {
  return $m_scm_ArraySeq$().kT;
});
$p.qW = (function(coll) {
  var evidence$1 = this.aN();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.bg();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.p();
  var it = coll.f();
  while (it.l()) {
    var elem = it.e();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.D.z : elem));
    jsElems.push(unboxedElem);
  }
  var $x_1 = $m_scm_ArraySeq$();
  var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
  return $x_1.lH(elemRuntimeClass.D.r().w(jsElems));
});
$p.hH = (function() {
  return $m_scm_ArraySeq$().jb(this.aN());
});
$p.cb = (function() {
  return "ArraySeq";
});
$p.bZ = (function(xs, start, len) {
  var srcLen = this.m();
  var destLen = $m_jl_reflect_Array$().bU(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().cc(this.cH(), 0, xs, start, copied);
  }
  return copied;
});
$p.n = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().bU(this.cH()) !== $m_jl_reflect_Array$().bU(other.cH()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.gj = (function(coll) {
  return this.qW(coll);
});
$p.gk = (function(coll) {
  return this.qW(coll);
});
$p.b2 = (function() {
  return $m_scm_ArraySeq$().kT;
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.dD = null;
  this.dD = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.m = (function() {
  return this.dD.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qq(this.dD, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().qM(this.dD, that.dD) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.dD);
});
$p.aM = (function(elem) {
  if (((typeof elem) === "boolean")) {
    var x2 = (!(!elem));
    var xs = this.dD;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_Z.R($objectGetClass(xs).D.Q().D)) {
      var dest$1 = this$3.eI(xs, newLength);
    } else {
      var dest = new $ac_Z(newLength);
      $m_s_Array$().cc(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cX(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofBoolean(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aM.call(this, elem);
  }
});
$p.hy = (function(i) {
  return this.dD.a[i];
});
$p.T = (function(elem) {
  return this.aM(elem);
});
$p.c = (function(v1) {
  return this.hy((v1 | 0));
});
$p.u = (function(i) {
  return this.hy(i);
});
$p.aN = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.cO = (function() {
  return this.dD;
});
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cd)));
}
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  cd: 1,
  a3: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  C: 1,
  u: 1,
  p: 1,
  G: 1,
  A: 1,
  t: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.dE = null;
  this.dE = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.m = (function() {
  return this.dE.a.length;
});
$p.hq = (function(i) {
  return this.dE.a[i];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qi(this.dE, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().qG(this.dE, that.dE) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.dE);
});
$p.aM = (function(elem) {
  if ($isByte(elem)) {
    var x2 = (elem | 0);
    var xs = this.dE;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_B.R($objectGetClass(xs).D.Q().D)) {
      var dest$1 = this$3.eI(xs, newLength);
    } else {
      var dest = new $ac_B(newLength);
      $m_s_Array$().cc(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cX(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofByte(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aM.call(this, elem);
  }
});
$p.T = (function(elem) {
  return this.aM(elem);
});
$p.c = (function(v1) {
  return this.hq((v1 | 0));
});
$p.u = (function(i) {
  return this.hq(i);
});
$p.aN = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.cO = (function() {
  return this.dE;
});
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ce)));
}
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  ce: 1,
  a3: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  C: 1,
  u: 1,
  p: 1,
  G: 1,
  A: 1,
  t: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.dd = null;
  this.dd = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.m = (function() {
  return this.dd.a.length;
});
$p.hr = (function(i) {
  return this.dd.a[i];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qj(this.dd, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().qH(this.dd, that.dd) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.dd);
});
$p.aM = (function(elem) {
  if ((elem instanceof $Char)) {
    var x2 = $uC(elem);
    var xs = this.dd;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_C.R($objectGetClass(xs).D.Q().D)) {
      var dest$1 = this$3.eI(xs, newLength);
    } else {
      var dest = new $ac_C(newLength);
      $m_s_Array$().cc(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cX(dest$1, xs.a.length, $bC(x2));
    return new $c_sci_ArraySeq$ofChar(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aM.call(this, elem);
  }
});
$p.eG = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.dd).eG(sb, start, sep, end);
});
$p.T = (function(elem) {
  return this.aM(elem);
});
$p.c = (function(v1) {
  return $bC(this.hr((v1 | 0)));
});
$p.u = (function(i) {
  return $bC(this.hr(i));
});
$p.aN = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.cO = (function() {
  return this.dd;
});
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cf)));
}
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  cf: 1,
  a3: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  C: 1,
  u: 1,
  p: 1,
  G: 1,
  A: 1,
  t: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.dF = null;
  this.dF = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.m = (function() {
  return this.dF.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qk(this.dF, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofDouble) ? $m_ju_Arrays$().qI(this.dF, that.dF) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.dF);
});
$p.aM = (function(elem) {
  if (((typeof elem) === "number")) {
    var x2 = (+elem);
    var xs = this.dF;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_D.R($objectGetClass(xs).D.Q().D)) {
      var dest$1 = this$3.eI(xs, newLength);
    } else {
      var dest = new $ac_D(newLength);
      $m_s_Array$().cc(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cX(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofDouble(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aM.call(this, elem);
  }
});
$p.ht = (function(i) {
  return this.dF.a[i];
});
$p.T = (function(elem) {
  return this.aM(elem);
});
$p.c = (function(v1) {
  return this.ht((v1 | 0));
});
$p.u = (function(i) {
  return this.ht(i);
});
$p.aN = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.cO = (function() {
  return this.dF;
});
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cg)));
}
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  cg: 1,
  a3: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  C: 1,
  u: 1,
  p: 1,
  G: 1,
  A: 1,
  t: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.dG = null;
  this.dG = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.m = (function() {
  return this.dG.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.ql(this.dG, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofFloat) ? $m_ju_Arrays$().qJ(this.dG, that.dG) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.dG);
});
$p.aM = (function(elem) {
  if ($isFloat(elem)) {
    var x2 = Math.fround(elem);
    var xs = this.dG;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_F.R($objectGetClass(xs).D.Q().D)) {
      var dest$1 = this$3.eI(xs, newLength);
    } else {
      var dest = new $ac_F(newLength);
      $m_s_Array$().cc(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cX(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofFloat(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aM.call(this, elem);
  }
});
$p.hu = (function(i) {
  return this.dG.a[i];
});
$p.T = (function(elem) {
  return this.aM(elem);
});
$p.c = (function(v1) {
  return this.hu((v1 | 0));
});
$p.u = (function(i) {
  return this.hu(i);
});
$p.aN = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.cO = (function() {
  return this.dG;
});
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ch)));
}
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  ch: 1,
  a3: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  C: 1,
  u: 1,
  p: 1,
  G: 1,
  A: 1,
  t: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.dH = null;
  this.dH = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
$p.m = (function() {
  return this.dH.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qm(this.dH, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().j1(this.dH, that.dH) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.dH);
});
$p.aM = (function(elem) {
  if ($isInt(elem)) {
    var x2 = (elem | 0);
    var xs = this.dH;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_I.R($objectGetClass(xs).D.Q().D)) {
      var dest$1 = this$3.eI(xs, newLength);
    } else {
      var dest = new $ac_I(newLength);
      $m_s_Array$().cc(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cX(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofInt(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aM.call(this, elem);
  }
});
$p.hv = (function(i) {
  return this.dH.a[i];
});
$p.T = (function(elem) {
  return this.aM(elem);
});
$p.c = (function(v1) {
  return this.hv((v1 | 0));
});
$p.u = (function(i) {
  return this.hv(i);
});
$p.aN = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.cO = (function() {
  return this.dH;
});
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ci)));
}
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  ci: 1,
  a3: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  C: 1,
  u: 1,
  p: 1,
  G: 1,
  A: 1,
  t: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.dI = null;
  this.dI = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.m = (function() {
  return this.dI.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qn(this.dI, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().qK(this.dI, that.dI) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.dI);
});
$p.aM = (function(elem) {
  if ((elem instanceof $c_RTLong)) {
    var t = $uJ(elem);
    var lo = t.q;
    var hi = t.t;
    var xs = this.dI;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_J.R($objectGetClass(xs).D.Q().D)) {
      var dest$1 = this$3.eI(xs, newLength);
    } else {
      var dest = new $ac_J(newLength);
      $m_s_Array$().cc(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cX(dest$1, xs.a.length, new $c_RTLong(lo, hi));
    return new $c_sci_ArraySeq$ofLong(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aM.call(this, elem);
  }
});
$p.hw = (function(i) {
  return this.dI.a[i];
});
$p.T = (function(elem) {
  return this.aM(elem);
});
$p.c = (function(v1) {
  return this.hw((v1 | 0));
});
$p.u = (function(i) {
  return this.hw(i);
});
$p.aN = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.cO = (function() {
  return this.dI;
});
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cj)));
}
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  cj: 1,
  a3: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  C: 1,
  u: 1,
  p: 1,
  G: 1,
  A: 1,
  t: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.de = null;
  this.de = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.aN = (function() {
  return $m_s_reflect_ClassTag$().qe($objectGetClass(this.de).D.Q());
});
$p.m = (function() {
  return this.de.a.length;
});
$p.u = (function(i) {
  return this.de.a[i];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qh(this.de, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().qN(this.de, that.de) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.de);
});
$p.c = (function(v1) {
  return this.u((v1 | 0));
});
$p.cO = (function() {
  return this.de;
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ck)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  ck: 1,
  a3: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  C: 1,
  u: 1,
  p: 1,
  G: 1,
  A: 1,
  t: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.dJ = null;
  this.dJ = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.m = (function() {
  return this.dJ.a.length;
});
$p.hs = (function(i) {
  return this.dJ.a[i];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qo(this.dJ, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().qL(this.dJ, that.dJ) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.dJ);
});
$p.aM = (function(elem) {
  if ($isShort(elem)) {
    var x2 = (elem | 0);
    var xs = this.dJ;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_S.R($objectGetClass(xs).D.Q().D)) {
      var dest$1 = this$3.eI(xs, newLength);
    } else {
      var dest = new $ac_S(newLength);
      $m_s_Array$().cc(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cX(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofShort(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aM.call(this, elem);
  }
});
$p.T = (function(elem) {
  return this.aM(elem);
});
$p.c = (function(v1) {
  return this.hs((v1 | 0));
});
$p.u = (function(i) {
  return this.hs(i);
});
$p.aN = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.cO = (function() {
  return this.dJ;
});
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cl)));
}
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  cl: 1,
  a3: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  C: 1,
  u: 1,
  p: 1,
  G: 1,
  A: 1,
  t: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.f2 = null;
  this.f2 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.m = (function() {
  return this.f2.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qp(this.f2, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.f2.a.length === that.f2.a.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.f2);
});
$p.hx = (function(i) {
});
$p.c = (function(v1) {
  this.hx((v1 | 0));
});
$p.u = (function(i) {
  this.hx(i);
});
$p.aN = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.cO = (function() {
  return this.f2;
});
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cm)));
}
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  cm: 1,
  a3: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  C: 1,
  u: 1,
  p: 1,
  G: 1,
  A: 1,
  t: 1,
  n: 1,
  a7: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.b() ? 0 : 1);
    } else if (xs.b()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = xs.z();
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
      var aEmpty = a.b();
      var bEmpty = b.b();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().k(a.o(), b.o()))) {
        var temp$a = a.z();
        var temp$b = b.z();
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
$p.cI = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.f = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.T = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.fl = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.bh = (function() {
  return "LinearSeq";
});
$p.ly = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.u = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.fm = (function(z, op) {
  return $f_sc_LinearSeqOps__foldLeft__O__F2__O(this, z, op);
});
$p.gw = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.fp = (function(p, from) {
  return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from);
});
$p.e5 = (function() {
  return $m_sci_List$();
});
$p.q1 = (function(prefix) {
  if (this.b()) {
    return prefix;
  } else if (prefix.b()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.o(), this);
    var curr = result;
    var that = prefix.z();
    while ((!that.b())) {
      var temp = new $c_sci_$colon$colon(that.o(), this);
      curr.aY = temp;
      curr = temp;
      that = that.z();
    }
    return result;
  }
});
$p.b = (function() {
  return (this === $m_sci_Nil$());
});
$p.y = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.q1(prefix);
  }
  if ((prefix.p() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.b()) {
      return prefix.fw();
    }
  }
  var iter = prefix.f();
  if (iter.l()) {
    var result = new $c_sci_$colon$colon(iter.e(), this);
    var curr = result;
    while (iter.l()) {
      var temp = new $c_sci_$colon$colon(iter.e(), this);
      curr.aY = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.qc = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.q1(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.ul = (function(f) {
  if ((this === $m_sci_Nil$())) {
    return $m_sci_Nil$();
  } else {
    var h = new $c_sci_$colon$colon(f.c(this.o()), $m_sci_Nil$());
    var t = h;
    var rest = this.z();
    while ((rest !== $m_sci_Nil$())) {
      var nx = new $c_sci_$colon$colon(f.c(rest.o()), $m_sci_Nil$());
      t.aY = nx;
      t = nx;
      rest = rest.z();
    }
    return h;
  }
});
$p.U = (function(f) {
  var these = this;
  while ((!these.b())) {
    f.c(these.o());
    these = these.z();
  }
});
$p.m = (function() {
  var these = this;
  var len = 0;
  while ((!these.b())) {
    len = ((1 + len) | 0);
    these = these.z();
  }
  return len;
});
$p.b3 = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
});
$p.j2 = (function(p) {
  var these = this;
  while ((!these.b())) {
    if ((!(!p.c(these.o())))) {
      return true;
    }
    these = these.z();
  }
  return false;
});
$p.al = (function(elem) {
  var these = this;
  while ((!these.b())) {
    if ($m_sr_BoxesRunTime$().k(these.o(), elem)) {
      return true;
    }
    these = these.z();
  }
  return false;
});
$p.cb = (function() {
  return "List";
});
$p.fw = (function() {
  return this;
});
$p.n = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.c = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.c0 = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.le = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.N = (function(f) {
  return this.ul(f);
});
$p.b2 = (function() {
  return $m_sci_List$();
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aQ)));
}
var $d_sci_List = new $TypeData().i(0, "scala.collection.immutable.List", ({
  aQ: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  aO: 1,
  aw: 1,
  aL: 1,
  aP: 1,
  bd: 1,
  t: 1,
  n: 1,
  A: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_sci_VectorImpl() {
  this.d = null;
}
$p = $c_sci_VectorImpl.prototype = new $h_sci_Vector();
$p.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
}
$h_sci_VectorImpl.prototype = $p;
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.es = null;
  this.es = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.m = (function() {
  return this.es.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qq(this.es, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().qM(this.es, that.es) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.es);
});
$p.hy = (function(index) {
  return this.es.a[index];
});
$p.c = (function(v1) {
  return this.hy((v1 | 0));
});
$p.u = (function(i) {
  return this.hy(i);
});
$p.aN = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.cH = (function() {
  return this.es;
});
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cQ)));
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  cQ: 1,
  a4: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  E: 1,
  V: 1,
  u: 1,
  p: 1,
  W: 1,
  t: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.et = null;
  this.et = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.m = (function() {
  return this.et.a.length;
});
$p.hq = (function(index) {
  return this.et.a[index];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qi(this.et, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().qG(this.et, that.et) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.et);
});
$p.c = (function(v1) {
  return this.hq((v1 | 0));
});
$p.u = (function(i) {
  return this.hq(i);
});
$p.aN = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.cH = (function() {
  return this.et;
});
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cR)));
}
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  cR: 1,
  a4: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  E: 1,
  V: 1,
  u: 1,
  p: 1,
  W: 1,
  t: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.cu = null;
  this.cu = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.m = (function() {
  return this.cu.a.length;
});
$p.hr = (function(index) {
  return this.cu.a[index];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qj(this.cu, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().qH(this.cu, that.cu) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.cu);
});
$p.eG = (function(sb, start, sep, end) {
  var jsb = sb.bc;
  if ((start.length !== 0)) {
    jsb.s = (("" + jsb.s) + start);
  }
  var len = this.cu.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.qa(this.cu);
    } else {
      jsb.m();
      var c = this.cu.a[0];
      var str = ("" + $cToS(c));
      jsb.s = (jsb.s + str);
      var i = 1;
      while ((i < len)) {
        jsb.s = (("" + jsb.s) + sep);
        var c$1 = this.cu.a[i];
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
$p.c = (function(v1) {
  return $bC(this.hr((v1 | 0)));
});
$p.u = (function(i) {
  return $bC(this.hr(i));
});
$p.aN = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.cH = (function() {
  return this.cu;
});
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cS)));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  cS: 1,
  a4: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  E: 1,
  V: 1,
  u: 1,
  p: 1,
  W: 1,
  t: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.eu = null;
  this.eu = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.m = (function() {
  return this.eu.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qk(this.eu, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofDouble) ? $m_ju_Arrays$().qI(this.eu, that.eu) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.eu);
});
$p.ht = (function(index) {
  return this.eu.a[index];
});
$p.c = (function(v1) {
  return this.ht((v1 | 0));
});
$p.u = (function(i) {
  return this.ht(i);
});
$p.aN = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.cH = (function() {
  return this.eu;
});
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cT)));
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  cT: 1,
  a4: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  E: 1,
  V: 1,
  u: 1,
  p: 1,
  W: 1,
  t: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.ev = null;
  this.ev = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.m = (function() {
  return this.ev.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.ql(this.ev, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofFloat) ? $m_ju_Arrays$().qJ(this.ev, that.ev) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.ev);
});
$p.hu = (function(index) {
  return this.ev.a[index];
});
$p.c = (function(v1) {
  return this.hu((v1 | 0));
});
$p.u = (function(i) {
  return this.hu(i);
});
$p.aN = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.cH = (function() {
  return this.ev;
});
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cU)));
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  cU: 1,
  a4: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  E: 1,
  V: 1,
  u: 1,
  p: 1,
  W: 1,
  t: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.ew = null;
  this.ew = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.m = (function() {
  return this.ew.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qm(this.ew, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().j1(this.ew, that.ew) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.ew);
});
$p.hv = (function(index) {
  return this.ew.a[index];
});
$p.c = (function(v1) {
  return this.hv((v1 | 0));
});
$p.u = (function(i) {
  return this.hv(i);
});
$p.aN = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.cH = (function() {
  return this.ew;
});
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cV)));
}
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
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
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  E: 1,
  V: 1,
  u: 1,
  p: 1,
  W: 1,
  t: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.ex = null;
  this.ex = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.m = (function() {
  return this.ex.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qn(this.ex, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().qK(this.ex, that.ex) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.ex);
});
$p.hw = (function(index) {
  return this.ex.a[index];
});
$p.c = (function(v1) {
  return this.hw((v1 | 0));
});
$p.u = (function(i) {
  return this.hw(i);
});
$p.aN = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.cH = (function() {
  return this.ex;
});
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cW)));
}
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
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
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  E: 1,
  V: 1,
  u: 1,
  p: 1,
  W: 1,
  t: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.dV = null;
  this.dV = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.aN = (function() {
  return $m_s_reflect_ClassTag$().qe($objectGetClass(this.dV).D.Q());
});
$p.m = (function() {
  return this.dV.a.length;
});
$p.u = (function(index) {
  return this.dV.a[index];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qh(this.dV, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().qN(this.dV, that.dV) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.dV);
});
$p.c = (function(v1) {
  return this.u((v1 | 0));
});
$p.cH = (function() {
  return this.dV;
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cX)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
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
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  E: 1,
  V: 1,
  u: 1,
  p: 1,
  W: 1,
  t: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.ey = null;
  this.ey = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.m = (function() {
  return this.ey.a.length;
});
$p.hs = (function(index) {
  return this.ey.a[index];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qo(this.ey, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().qL(this.ey, that.ey) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.ey);
});
$p.c = (function(v1) {
  return this.hs((v1 | 0));
});
$p.u = (function(i) {
  return this.hs(i);
});
$p.aN = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.cH = (function() {
  return this.ey;
});
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cY)));
}
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
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
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  E: 1,
  V: 1,
  u: 1,
  p: 1,
  W: 1,
  t: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.fj = null;
  this.fj = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.m = (function() {
  return this.fj.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qp(this.fj, this$1.aW);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.fj.a.length === that.fj.a.length) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.fj);
});
$p.hx = (function(index) {
});
$p.c = (function(v1) {
  this.hx((v1 | 0));
});
$p.u = (function(i) {
  this.hx(i);
});
$p.aN = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.cH = (function() {
  return this.fj;
});
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cZ)));
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
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
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  E: 1,
  V: 1,
  u: 1,
  p: 1,
  W: 1,
  t: 1,
  n: 1,
  a: 1
}));
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iy)));
}
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.g = suffix1;
  $thiz.h = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.d = null;
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
  this.d = null;
  $ct_sci_Vector__AO__(this, _data1);
}
$p = $c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
}
$h_sci_Vector1.prototype = $p;
$p.u = (function(index) {
  if (((index >= 0) && (index < this.d.a.length))) {
    return this.d.a[index];
  } else {
    throw this.bf(index);
  }
});
$p.ea = (function(index, elem) {
  if (((index >= 0) && (index < this.d.a.length))) {
    var a1 = this.d;
    var a1c = a1.j();
    a1c.a[index] = elem;
    return new $c_sci_Vector1(a1c);
  } else {
    throw this.bf(index);
  }
});
$p.bz = (function(elem) {
  if ((this.d.a.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().gg(this.d, elem));
  } else {
    var $x_2 = this.d;
    var $x_1 = $m_sci_VectorStatics$().ap;
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.fu = (function(elem) {
  var len1 = this.d.a.length;
  if ((len1 < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().gh(elem, this.d));
  } else {
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2(a, 1, $m_sci_VectorStatics$().ap, this.d, ((1 + len1) | 0));
  }
});
$p.d7 = (function(f) {
  return new $c_sci_Vector1($m_sci_VectorStatics$().cL(this.d, f));
});
$p.da = (function() {
  return 1;
});
$p.du = (function(idx) {
  return this.d;
});
$p.ca = (function(suffix, k) {
  var data1b = $m_sci_VectorStatics$().gc(this.d, suffix);
  return ((data1b !== null) ? new $c_sci_Vector1(data1b) : $c_sci_Vector.prototype.ca.call(this, suffix, k));
});
$p.N = (function(f) {
  return this.d7(f);
});
$p.T = (function(elem) {
  return this.bz(elem);
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.d.a.length))) {
    return this.d.a[index];
  } else {
    throw this.bf(index);
  }
});
function $isArrayOf_sci_Vector1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cJ)));
}
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  cJ: 1,
  ar: 1,
  al: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  C: 1,
  u: 1,
  p: 1,
  G: 1,
  A: 1,
  t: 1,
  n: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.iy = null;
  this.aY = null;
  this.iy = head;
  this.aY = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.o = (function() {
  return this.iy;
});
$p.b8 = (function() {
  return "::";
});
$p.b6 = (function() {
  return 2;
});
$p.b7 = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.iy;
      break;
    }
    case 1: {
      return this.aY;
      break;
    }
    default: {
      return $m_sr_Statics$().eK(x$1);
    }
  }
});
$p.bp = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.z = (function() {
  return this.aY;
});
$p.bL = (function() {
  return new $c_s_Some(this.iy);
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  hm: 1,
  aQ: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  aO: 1,
  aw: 1,
  aL: 1,
  aP: 1,
  bd: 1,
  t: 1,
  n: 1,
  A: 1,
  K: 1,
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
$p.lv = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.vq = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.p = (function() {
  return 0;
});
$p.f = (function() {
  return $m_sc_Iterator$().F;
});
$p.b8 = (function() {
  return "Nil";
});
$p.b6 = (function() {
  return 0;
});
$p.b7 = (function(x$1) {
  return $m_sr_Statics$().eK(x$1);
});
$p.bp = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.z = (function() {
  this.vq();
});
$p.bL = (function() {
  return $m_s_None$();
});
$p.o = (function() {
  this.lv();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  hV: 1,
  aQ: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  aO: 1,
  aw: 1,
  aL: 1,
  aP: 1,
  bd: 1,
  t: 1,
  n: 1,
  A: 1,
  K: 1,
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
  this.d = null;
  this.g = null;
  this.h = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().kN, $m_sci_VectorStatics$().kN, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.qd = (function(index) {
  throw this.bf(index);
});
$p.ea = (function(index, elem) {
  throw this.bf(index);
});
$p.bz = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.fu = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.da = (function() {
  return 0;
});
$p.du = (function(idx) {
  return null;
});
$p.n = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)));
});
$p.ca = (function(suffix, k) {
  return $m_sci_Vector$().bB(suffix);
});
$p.bf = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.N = (function(f) {
  return this;
});
$p.T = (function(elem) {
  return this.bz(elem);
});
$p.c = (function(v1) {
  this.qd((v1 | 0));
});
$p.u = (function(i) {
  this.qd(i);
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  ig: 1,
  aq: 1,
  ar: 1,
  al: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  C: 1,
  u: 1,
  p: 1,
  G: 1,
  A: 1,
  t: 1,
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
  this.d = null;
  this.g = null;
  this.h = 0;
  this.bv = 0;
  this.ba = null;
  this.bv = len1;
  this.ba = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector2.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $p;
$p.u = (function(index) {
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.bv) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.ba.a.length) ? this.ba.a[i2].a[i1] : this.g.a[(31 & io)]);
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.bf(index);
  }
});
$p.ea = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.bv)) {
      var io = ((index - this.bv) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.ba.a.length)) {
        var a2 = this.ba;
        var a2c = a2.j();
        var a1 = a2c.a[i2];
        var a1c = a1.j();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        return new $c_sci_Vector2(this.d, this.bv, a2c, this.g, this.h);
      } else {
        var a1$1 = this.g;
        var a1c$1 = a1$1.j();
        a1c$1.a[i1] = elem;
        return new $c_sci_Vector2(this.d, this.bv, this.ba, a1c$1, this.h);
      }
    } else {
      var a1$2 = this.d;
      var a1c$2 = a1$2.j();
      a1c$2.a[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.bv, this.ba, this.g, this.h);
    }
  } else {
    throw this.bf(index);
  }
});
$p.bz = (function(elem) {
  if ((this.g.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().gg(this.g, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector2(this.d, this.bv, this.ba, x$1, x$2);
  } else if ((this.ba.a.length < 30)) {
    var x$6 = $m_sci_VectorStatics$().M(this.ba, this.g);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$8 = ((1 + this.h) | 0);
    return new $c_sci_Vector2(this.d, this.bv, x$6, a, x$8);
  } else {
    var $x_5 = this.d;
    var $x_4 = this.bv;
    var $x_3 = this.ba;
    var $x_2 = this.bv;
    var $x_1 = $m_sci_VectorStatics$().bw;
    var x = this.g;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.a[0] = x;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.h) | 0));
  }
});
$p.fu = (function(elem) {
  if ((this.bv < 32)) {
    var x$1 = $m_sci_VectorStatics$().gh(elem, this.d);
    var x$2 = ((1 + this.bv) | 0);
    var x$3 = ((1 + this.h) | 0);
    return new $c_sci_Vector2(x$1, x$2, this.ba, this.g, x$3);
  } else if ((this.ba.a.length < 30)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$8 = $m_sci_VectorStatics$().E(this.d, this.ba);
    var x$9 = ((1 + this.h) | 0);
    return new $c_sci_Vector2(a, 1, x$8, this.g, x$9);
  } else {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x = this.d;
    var a$2 = new ($d_O.r().r().C)(1);
    a$2.a[0] = x;
    return new $c_sci_Vector3(a$1, 1, a$2, ((1 + this.bv) | 0), $m_sci_VectorStatics$().bw, this.ba, this.g, ((1 + this.h) | 0));
  }
});
$p.d7 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cL(this.d, f);
  var x$2 = $m_sci_VectorStatics$().aF(2, this.ba, f);
  var x$3 = $m_sci_VectorStatics$().cL(this.g, f);
  return new $c_sci_Vector2(x$1, this.bv, x$2, x$3, this.h);
});
$p.da = (function() {
  return 3;
});
$p.du = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
      break;
    }
    case 1: {
      return this.ba;
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
$p.ca = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().gc(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector2(this.d, this.bv, this.ba, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.ca.call(this, suffix, k);
  }
});
$p.N = (function(f) {
  return this.d7(f);
});
$p.T = (function(elem) {
  return this.bz(elem);
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.bv) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.ba.a.length) ? this.ba.a[i2].a[i1] : this.g.a[(31 & io)]);
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.bf(index);
  }
});
function $isArrayOf_sci_Vector2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cK)));
}
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  cK: 1,
  aq: 1,
  ar: 1,
  al: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  C: 1,
  u: 1,
  p: 1,
  G: 1,
  A: 1,
  t: 1,
  n: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.d = null;
  this.g = null;
  this.h = 0;
  this.bk = 0;
  this.bl = null;
  this.b0 = 0;
  this.aK = null;
  this.aR = null;
  this.bk = len1;
  this.bl = prefix2;
  this.b0 = len12;
  this.aK = data3;
  this.aR = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector3.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $p;
$p.u = (function(index) {
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.b0) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aK.a.length) ? this.aK.a[i3].a[i2].a[i1] : ((i2 < this.aR.a.length) ? this.aR.a[i2].a[i1] : this.g.a[i1]));
    } else if ((index >= this.bk)) {
      var io$2 = ((index - this.bk) | 0);
      return this.bl.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.bf(index);
  }
});
$p.ea = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.b0)) {
      var io = ((index - this.b0) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.aK.a.length)) {
        var a3 = this.aK;
        var a3c = a3.j();
        var a2 = a3c.a[i3];
        var a2c = a2.j();
        var a1 = a2c.a[i2];
        var a1c = a1.j();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        return new $c_sci_Vector3(this.d, this.bk, this.bl, this.b0, a3c, this.aR, this.g, this.h);
      } else if ((i2 < this.aR.a.length)) {
        var a2$1 = this.aR;
        var a2c$1 = a2$1.j();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.j();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        return new $c_sci_Vector3(this.d, this.bk, this.bl, this.b0, this.aK, a2c$1, this.g, this.h);
      } else {
        var a1$2 = this.g;
        var a1c$2 = a1$2.j();
        a1c$2.a[i1] = elem;
        return new $c_sci_Vector3(this.d, this.bk, this.bl, this.b0, this.aK, this.aR, a1c$2, this.h);
      }
    } else if ((index >= this.bk)) {
      var io$2 = ((index - this.bk) | 0);
      var a2$2 = this.bl;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.j();
      var a1$3 = a2c$2.a[idx2];
      var a1c$3 = a1$3.j();
      a1c$3.a[idx1] = elem;
      a2c$2.a[idx2] = a1c$3;
      return new $c_sci_Vector3(this.d, this.bk, a2c$2, this.b0, this.aK, this.aR, this.g, this.h);
    } else {
      var a1$4 = this.d;
      var a1c$4 = a1$4.j();
      a1c$4.a[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.bk, this.bl, this.b0, this.aK, this.aR, this.g, this.h);
    }
  } else {
    throw this.bf(index);
  }
});
$p.bz = (function(elem) {
  if ((this.g.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().gg(this.g, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(this.d, this.bk, this.bl, this.b0, this.aK, this.aR, x$1, x$2);
  } else if ((this.aR.a.length < 31)) {
    var x$9 = $m_sci_VectorStatics$().M(this.aR, this.g);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$11 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(this.d, this.bk, this.bl, this.b0, this.aK, x$9, a, x$11);
  } else if ((this.aK.a.length < 30)) {
    var x$17 = $m_sci_VectorStatics$().M(this.aK, $m_sci_VectorStatics$().M(this.aR, this.g));
    var x$18 = $m_sci_VectorStatics$().ap;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$20 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(this.d, this.bk, this.bl, this.b0, x$17, x$18, a$1, x$20);
  } else {
    var $x_8 = this.d;
    var $x_7 = this.bk;
    var $x_6 = this.bl;
    var $x_5 = this.b0;
    var $x_4 = this.aK;
    var $x_3 = this.b0;
    var $x_2 = $m_sci_VectorStatics$().cW;
    var x = $m_sci_VectorStatics$().M(this.aR, this.g);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().ap;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.h) | 0));
  }
});
$p.fu = (function(elem) {
  if ((this.bk < 32)) {
    var x$1 = $m_sci_VectorStatics$().gh(elem, this.d);
    var x$2 = ((1 + this.bk) | 0);
    var x$3 = ((1 + this.b0) | 0);
    var x$4 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(x$1, x$2, this.bl, x$3, this.aK, this.aR, this.g, x$4);
  } else if ((this.b0 < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$11 = $m_sci_VectorStatics$().E(this.d, this.bl);
    var x$12 = ((1 + this.b0) | 0);
    var x$13 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(a, 1, x$11, x$12, this.aK, this.aR, this.g, x$13);
  } else if ((this.aK.a.length < 30)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$19 = $m_sci_VectorStatics$().ap;
    var x$21 = $m_sci_VectorStatics$().E($m_sci_VectorStatics$().E(this.d, this.bl), this.aK);
    var x$22 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(a$1, 1, x$19, 1, x$21, this.aR, this.g, x$22);
  } else {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var $x_1 = $m_sci_VectorStatics$().ap;
    var x = $m_sci_VectorStatics$().E(this.d, this.bl);
    var a$3 = new ($d_O.r().r().r().C)(1);
    a$3.a[0] = x;
    return new $c_sci_Vector4(a$2, 1, $x_1, 1, a$3, ((1 + this.b0) | 0), $m_sci_VectorStatics$().cW, this.aK, this.aR, this.g, ((1 + this.h) | 0));
  }
});
$p.d7 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cL(this.d, f);
  var x$2 = $m_sci_VectorStatics$().aF(2, this.bl, f);
  var x$3 = $m_sci_VectorStatics$().aF(3, this.aK, f);
  var x$4 = $m_sci_VectorStatics$().aF(2, this.aR, f);
  var x$5 = $m_sci_VectorStatics$().cL(this.g, f);
  return new $c_sci_Vector3(x$1, this.bk, x$2, this.b0, x$3, x$4, x$5, this.h);
});
$p.da = (function() {
  return 5;
});
$p.du = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
      break;
    }
    case 1: {
      return this.bl;
      break;
    }
    case 2: {
      return this.aK;
      break;
    }
    case 3: {
      return this.aR;
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
$p.ca = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().gc(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector3(this.d, this.bk, this.bl, this.b0, this.aK, this.aR, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.ca.call(this, suffix, k);
  }
});
$p.N = (function(f) {
  return this.d7(f);
});
$p.T = (function(elem) {
  return this.bz(elem);
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.b0) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aK.a.length) ? this.aK.a[i3].a[i2].a[i1] : ((i2 < this.aR.a.length) ? this.aR.a[i2].a[i1] : this.g.a[i1]));
    } else if ((index >= this.bk)) {
      var io$2 = ((index - this.bk) | 0);
      return this.bl.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.bf(index);
  }
});
function $isArrayOf_sci_Vector3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cL)));
}
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  cL: 1,
  aq: 1,
  ar: 1,
  al: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  C: 1,
  u: 1,
  p: 1,
  G: 1,
  A: 1,
  t: 1,
  n: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.d = null;
  this.g = null;
  this.h = 0;
  this.b1 = 0;
  this.aT = null;
  this.aS = 0;
  this.aU = null;
  this.aD = 0;
  this.an = null;
  this.ar = null;
  this.aq = null;
  this.b1 = len1;
  this.aT = prefix2;
  this.aS = len12;
  this.aU = prefix3;
  this.aD = len123;
  this.an = data4;
  this.ar = suffix3;
  this.aq = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector4.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $p;
$p.u = (function(index) {
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.aD) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.an.a.length) ? this.an.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ar.a.length) ? this.ar.a[i3].a[i2].a[i1] : ((i2 < this.aq.a.length) ? this.aq.a[i2].a[i1] : this.g.a[i1])));
    } else if ((index >= this.aS)) {
      var io$2 = ((index - this.aS) | 0);
      return this.aU.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.b1)) {
      var io$3 = ((index - this.b1) | 0);
      return this.aT.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.bf(index);
  }
});
$p.ea = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.aD)) {
      var io = ((index - this.aD) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.an.a.length)) {
        var a4 = this.an;
        var a4c = a4.j();
        var a3 = a4c.a[i4];
        var a3c = a3.j();
        var a2 = a3c.a[i3];
        var a2c = a2.j();
        var a1 = a2c.a[i2];
        var a1c = a1.j();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        return new $c_sci_Vector4(this.d, this.b1, this.aT, this.aS, this.aU, this.aD, a4c, this.ar, this.aq, this.g, this.h);
      } else if ((i3 < this.ar.a.length)) {
        var a3$1 = this.ar;
        var a3c$1 = a3$1.j();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.j();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.j();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        return new $c_sci_Vector4(this.d, this.b1, this.aT, this.aS, this.aU, this.aD, this.an, a3c$1, this.aq, this.g, this.h);
      } else if ((i2 < this.aq.a.length)) {
        var a2$2 = this.aq;
        var a2c$2 = a2$2.j();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.j();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        return new $c_sci_Vector4(this.d, this.b1, this.aT, this.aS, this.aU, this.aD, this.an, this.ar, a2c$2, this.g, this.h);
      } else {
        var a1$3 = this.g;
        var a1c$3 = a1$3.j();
        a1c$3.a[i1] = elem;
        return new $c_sci_Vector4(this.d, this.b1, this.aT, this.aS, this.aU, this.aD, this.an, this.ar, this.aq, a1c$3, this.h);
      }
    } else if ((index >= this.aS)) {
      var io$2 = ((index - this.aS) | 0);
      var a3$2 = this.aU;
      var idx3 = ((io$2 >>> 10) | 0);
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a3c$2 = a3$2.j();
      var a2$3 = a3c$2.a[idx3];
      var a2c$3 = a2$3.j();
      var a1$4 = a2c$3.a[idx2];
      var a1c$4 = a1$4.j();
      a1c$4.a[idx1] = elem;
      a2c$3.a[idx2] = a1c$4;
      a3c$2.a[idx3] = a2c$3;
      return new $c_sci_Vector4(this.d, this.b1, this.aT, this.aS, a3c$2, this.aD, this.an, this.ar, this.aq, this.g, this.h);
    } else if ((index >= this.b1)) {
      var io$3 = ((index - this.b1) | 0);
      var a2$4 = this.aT;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.j();
      var a1$5 = a2c$4.a[idx2$1];
      var a1c$5 = a1$5.j();
      a1c$5.a[idx1$1] = elem;
      a2c$4.a[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.d, this.b1, a2c$4, this.aS, this.aU, this.aD, this.an, this.ar, this.aq, this.g, this.h);
    } else {
      var a1$6 = this.d;
      var a1c$6 = a1$6.j();
      a1c$6.a[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.b1, this.aT, this.aS, this.aU, this.aD, this.an, this.ar, this.aq, this.g, this.h);
    }
  } else {
    throw this.bf(index);
  }
});
$p.bz = (function(elem) {
  if ((this.g.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().gg(this.g, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.d, this.b1, this.aT, this.aS, this.aU, this.aD, this.an, this.ar, this.aq, x$1, x$2);
  } else if ((this.aq.a.length < 31)) {
    var x$12 = $m_sci_VectorStatics$().M(this.aq, this.g);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$14 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.d, this.b1, this.aT, this.aS, this.aU, this.aD, this.an, this.ar, x$12, a, x$14);
  } else if ((this.ar.a.length < 31)) {
    var x$23 = $m_sci_VectorStatics$().M(this.ar, $m_sci_VectorStatics$().M(this.aq, this.g));
    var x$24 = $m_sci_VectorStatics$().ap;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$26 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.d, this.b1, this.aT, this.aS, this.aU, this.aD, this.an, x$23, x$24, a$1, x$26);
  } else if ((this.an.a.length < 30)) {
    var x$34 = $m_sci_VectorStatics$().M(this.an, $m_sci_VectorStatics$().M(this.ar, $m_sci_VectorStatics$().M(this.aq, this.g)));
    var x$35 = $m_sci_VectorStatics$().bw;
    var x$36 = $m_sci_VectorStatics$().ap;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$38 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.d, this.b1, this.aT, this.aS, this.aU, this.aD, x$34, x$35, x$36, a$2, x$38);
  } else {
    var $x_11 = this.d;
    var $x_10 = this.b1;
    var $x_9 = this.aT;
    var $x_8 = this.aS;
    var $x_7 = this.aU;
    var $x_6 = this.aD;
    var $x_5 = this.an;
    var $x_4 = this.aD;
    var $x_3 = $m_sci_VectorStatics$().hh;
    var x = $m_sci_VectorStatics$().M(this.ar, $m_sci_VectorStatics$().M(this.aq, this.g));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().bw;
    var $x_1 = $m_sci_VectorStatics$().ap;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.h) | 0));
  }
});
$p.fu = (function(elem) {
  if ((this.b1 < 32)) {
    var x$1 = $m_sci_VectorStatics$().gh(elem, this.d);
    var x$2 = ((1 + this.b1) | 0);
    var x$3 = ((1 + this.aS) | 0);
    var x$4 = ((1 + this.aD) | 0);
    var x$5 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(x$1, x$2, this.aT, x$3, this.aU, x$4, this.an, this.ar, this.aq, this.g, x$5);
  } else if ((this.aS < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$14 = $m_sci_VectorStatics$().E(this.d, this.aT);
    var x$15 = ((1 + this.aS) | 0);
    var x$16 = ((1 + this.aD) | 0);
    var x$17 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(a, 1, x$14, x$15, this.aU, x$16, this.an, this.ar, this.aq, this.g, x$17);
  } else if ((this.aD < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$25 = $m_sci_VectorStatics$().ap;
    var x$27 = $m_sci_VectorStatics$().E($m_sci_VectorStatics$().E(this.d, this.aT), this.aU);
    var x$28 = ((1 + this.aD) | 0);
    var x$29 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(a$1, 1, x$25, 1, x$27, x$28, this.an, this.ar, this.aq, this.g, x$29);
  } else if ((this.an.a.length < 30)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$36 = $m_sci_VectorStatics$().ap;
    var x$38 = $m_sci_VectorStatics$().bw;
    var x$40 = $m_sci_VectorStatics$().E($m_sci_VectorStatics$().E($m_sci_VectorStatics$().E(this.d, this.aT), this.aU), this.an);
    var x$41 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(a$2, 1, x$36, 1, x$38, 1, x$40, this.ar, this.aq, this.g, x$41);
  } else {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var $x_2 = $m_sci_VectorStatics$().ap;
    var $x_1 = $m_sci_VectorStatics$().bw;
    var x = $m_sci_VectorStatics$().E($m_sci_VectorStatics$().E(this.d, this.aT), this.aU);
    var a$4 = new ($d_O.r().r().r().r().C)(1);
    a$4.a[0] = x;
    return new $c_sci_Vector5(a$3, 1, $x_2, 1, $x_1, 1, a$4, ((1 + this.aD) | 0), $m_sci_VectorStatics$().hh, this.an, this.ar, this.aq, this.g, ((1 + this.h) | 0));
  }
});
$p.d7 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cL(this.d, f);
  var x$2 = $m_sci_VectorStatics$().aF(2, this.aT, f);
  var x$3 = $m_sci_VectorStatics$().aF(3, this.aU, f);
  var x$4 = $m_sci_VectorStatics$().aF(4, this.an, f);
  var x$5 = $m_sci_VectorStatics$().aF(3, this.ar, f);
  var x$6 = $m_sci_VectorStatics$().aF(2, this.aq, f);
  var x$7 = $m_sci_VectorStatics$().cL(this.g, f);
  return new $c_sci_Vector4(x$1, this.b1, x$2, this.aS, x$3, this.aD, x$4, x$5, x$6, x$7, this.h);
});
$p.da = (function() {
  return 7;
});
$p.du = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
      break;
    }
    case 1: {
      return this.aT;
      break;
    }
    case 2: {
      return this.aU;
      break;
    }
    case 3: {
      return this.an;
      break;
    }
    case 4: {
      return this.ar;
      break;
    }
    case 5: {
      return this.aq;
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
$p.ca = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().gc(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector4(this.d, this.b1, this.aT, this.aS, this.aU, this.aD, this.an, this.ar, this.aq, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.ca.call(this, suffix, k);
  }
});
$p.N = (function(f) {
  return this.d7(f);
});
$p.T = (function(elem) {
  return this.bz(elem);
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.aD) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.an.a.length) ? this.an.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ar.a.length) ? this.ar.a[i3].a[i2].a[i1] : ((i2 < this.aq.a.length) ? this.aq.a[i2].a[i1] : this.g.a[i1])));
    } else if ((index >= this.aS)) {
      var io$2 = ((index - this.aS) | 0);
      return this.aU.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.b1)) {
      var io$3 = ((index - this.b1) | 0);
      return this.aT.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.bf(index);
  }
});
function $isArrayOf_sci_Vector4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cM)));
}
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  cM: 1,
  aq: 1,
  ar: 1,
  al: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  C: 1,
  u: 1,
  p: 1,
  G: 1,
  A: 1,
  t: 1,
  n: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.d = null;
  this.g = null;
  this.h = 0;
  this.aH = 0;
  this.at = null;
  this.aE = 0;
  this.au = null;
  this.as = 0;
  this.av = null;
  this.a9 = 0;
  this.a2 = null;
  this.a6 = null;
  this.a5 = null;
  this.a4 = null;
  this.aH = len1;
  this.at = prefix2;
  this.aE = len12;
  this.au = prefix3;
  this.as = len123;
  this.av = prefix4;
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
$p.u = (function(index) {
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.a9) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.a2.a.length) ? this.a2.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a6.a.length) ? this.a6.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a5.a.length) ? this.a5.a[i3].a[i2].a[i1] : ((i2 < this.a4.a.length) ? this.a4.a[i2].a[i1] : this.g.a[i1]))));
    } else if ((index >= this.as)) {
      var io$2 = ((index - this.as) | 0);
      return this.av.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aE)) {
      var io$3 = ((index - this.aE) | 0);
      return this.au.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aH)) {
      var io$4 = ((index - this.aH) | 0);
      return this.at.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.bf(index);
  }
});
$p.ea = (function(index, elem) {
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
        var a5c = a5.j();
        var a4 = a5c.a[i5];
        var a4c = a4.j();
        var a3 = a4c.a[i4];
        var a3c = a3.j();
        var a2 = a3c.a[i3];
        var a2c = a2.j();
        var a1 = a2c.a[i2];
        var a1c = a1.j();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        return new $c_sci_Vector5(this.d, this.aH, this.at, this.aE, this.au, this.as, this.av, this.a9, a5c, this.a6, this.a5, this.a4, this.g, this.h);
      } else if ((i4 < this.a6.a.length)) {
        var a4$1 = this.a6;
        var a4c$1 = a4$1.j();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.j();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.j();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.j();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        return new $c_sci_Vector5(this.d, this.aH, this.at, this.aE, this.au, this.as, this.av, this.a9, this.a2, a4c$1, this.a5, this.a4, this.g, this.h);
      } else if ((i3 < this.a5.a.length)) {
        var a3$2 = this.a5;
        var a3c$2 = a3$2.j();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.j();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.j();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        return new $c_sci_Vector5(this.d, this.aH, this.at, this.aE, this.au, this.as, this.av, this.a9, this.a2, this.a6, a3c$2, this.a4, this.g, this.h);
      } else if ((i2 < this.a4.a.length)) {
        var a2$3 = this.a4;
        var a2c$3 = a2$3.j();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.j();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        return new $c_sci_Vector5(this.d, this.aH, this.at, this.aE, this.au, this.as, this.av, this.a9, this.a2, this.a6, this.a5, a2c$3, this.g, this.h);
      } else {
        var a1$4 = this.g;
        var a1c$4 = a1$4.j();
        a1c$4.a[i1] = elem;
        return new $c_sci_Vector5(this.d, this.aH, this.at, this.aE, this.au, this.as, this.av, this.a9, this.a2, this.a6, this.a5, this.a4, a1c$4, this.h);
      }
    } else if ((index >= this.as)) {
      var io$2 = ((index - this.as) | 0);
      var a4$2 = this.av;
      var idx4 = ((io$2 >>> 15) | 0);
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a4c$2 = a4$2.j();
      var a3$3 = a4c$2.a[idx4];
      var a3c$3 = a3$3.j();
      var a2$4 = a3c$3.a[idx3];
      var a2c$4 = a2$4.j();
      var a1$5 = a2c$4.a[idx2];
      var a1c$5 = a1$5.j();
      a1c$5.a[idx1] = elem;
      a2c$4.a[idx2] = a1c$5;
      a3c$3.a[idx3] = a2c$4;
      a4c$2.a[idx4] = a3c$3;
      return new $c_sci_Vector5(this.d, this.aH, this.at, this.aE, this.au, this.as, a4c$2, this.a9, this.a2, this.a6, this.a5, this.a4, this.g, this.h);
    } else if ((index >= this.aE)) {
      var io$3 = ((index - this.aE) | 0);
      var a3$4 = this.au;
      var idx3$1 = ((io$3 >>> 10) | 0);
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a3c$4 = a3$4.j();
      var a2$5 = a3c$4.a[idx3$1];
      var a2c$5 = a2$5.j();
      var a1$6 = a2c$5.a[idx2$1];
      var a1c$6 = a1$6.j();
      a1c$6.a[idx1$1] = elem;
      a2c$5.a[idx2$1] = a1c$6;
      a3c$4.a[idx3$1] = a2c$5;
      return new $c_sci_Vector5(this.d, this.aH, this.at, this.aE, a3c$4, this.as, this.av, this.a9, this.a2, this.a6, this.a5, this.a4, this.g, this.h);
    } else if ((index >= this.aH)) {
      var io$4 = ((index - this.aH) | 0);
      var a2$6 = this.at;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.j();
      var a1$7 = a2c$6.a[idx2$2];
      var a1c$7 = a1$7.j();
      a1c$7.a[idx1$2] = elem;
      a2c$6.a[idx2$2] = a1c$7;
      return new $c_sci_Vector5(this.d, this.aH, a2c$6, this.aE, this.au, this.as, this.av, this.a9, this.a2, this.a6, this.a5, this.a4, this.g, this.h);
    } else {
      var a1$8 = this.d;
      var a1c$8 = a1$8.j();
      a1c$8.a[index] = elem;
      return new $c_sci_Vector5(a1c$8, this.aH, this.at, this.aE, this.au, this.as, this.av, this.a9, this.a2, this.a6, this.a5, this.a4, this.g, this.h);
    }
  } else {
    throw this.bf(index);
  }
});
$p.bz = (function(elem) {
  if ((this.g.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().gg(this.g, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.d, this.aH, this.at, this.aE, this.au, this.as, this.av, this.a9, this.a2, this.a6, this.a5, this.a4, x$1, x$2);
  } else if ((this.a4.a.length < 31)) {
    var x$15 = $m_sci_VectorStatics$().M(this.a4, this.g);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$17 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.d, this.aH, this.at, this.aE, this.au, this.as, this.av, this.a9, this.a2, this.a6, this.a5, x$15, a, x$17);
  } else if ((this.a5.a.length < 31)) {
    var x$29 = $m_sci_VectorStatics$().M(this.a5, $m_sci_VectorStatics$().M(this.a4, this.g));
    var x$30 = $m_sci_VectorStatics$().ap;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$32 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.d, this.aH, this.at, this.aE, this.au, this.as, this.av, this.a9, this.a2, this.a6, x$29, x$30, a$1, x$32);
  } else if ((this.a6.a.length < 31)) {
    var x$43 = $m_sci_VectorStatics$().M(this.a6, $m_sci_VectorStatics$().M(this.a5, $m_sci_VectorStatics$().M(this.a4, this.g)));
    var x$44 = $m_sci_VectorStatics$().bw;
    var x$45 = $m_sci_VectorStatics$().ap;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$47 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.d, this.aH, this.at, this.aE, this.au, this.as, this.av, this.a9, this.a2, x$43, x$44, x$45, a$2, x$47);
  } else if ((this.a2.a.length < 30)) {
    var x$57 = $m_sci_VectorStatics$().M(this.a2, $m_sci_VectorStatics$().M(this.a6, $m_sci_VectorStatics$().M(this.a5, $m_sci_VectorStatics$().M(this.a4, this.g))));
    var x$58 = $m_sci_VectorStatics$().cW;
    var x$59 = $m_sci_VectorStatics$().bw;
    var x$60 = $m_sci_VectorStatics$().ap;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$62 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.d, this.aH, this.at, this.aE, this.au, this.as, this.av, this.a9, x$57, x$58, x$59, x$60, a$3, x$62);
  } else {
    var $x_14 = this.d;
    var $x_13 = this.aH;
    var $x_12 = this.at;
    var $x_11 = this.aE;
    var $x_10 = this.au;
    var $x_9 = this.as;
    var $x_8 = this.av;
    var $x_7 = this.a9;
    var $x_6 = this.a2;
    var $x_5 = this.a9;
    var $x_4 = $m_sci_VectorStatics$().kO;
    var x = $m_sci_VectorStatics$().M(this.a6, $m_sci_VectorStatics$().M(this.a5, $m_sci_VectorStatics$().M(this.a4, this.g)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().cW;
    var $x_2 = $m_sci_VectorStatics$().bw;
    var $x_1 = $m_sci_VectorStatics$().ap;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.h) | 0));
  }
});
$p.fu = (function(elem) {
  if ((this.aH < 32)) {
    var x$1 = $m_sci_VectorStatics$().gh(elem, this.d);
    var x$2 = ((1 + this.aH) | 0);
    var x$3 = ((1 + this.aE) | 0);
    var x$4 = ((1 + this.as) | 0);
    var x$5 = ((1 + this.a9) | 0);
    var x$6 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(x$1, x$2, this.at, x$3, this.au, x$4, this.av, x$5, this.a2, this.a6, this.a5, this.a4, this.g, x$6);
  } else if ((this.aE < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$17 = $m_sci_VectorStatics$().E(this.d, this.at);
    var x$18 = ((1 + this.aE) | 0);
    var x$19 = ((1 + this.as) | 0);
    var x$20 = ((1 + this.a9) | 0);
    var x$21 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a, 1, x$17, x$18, this.au, x$19, this.av, x$20, this.a2, this.a6, this.a5, this.a4, this.g, x$21);
  } else if ((this.as < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$31 = $m_sci_VectorStatics$().ap;
    var x$33 = $m_sci_VectorStatics$().E($m_sci_VectorStatics$().E(this.d, this.at), this.au);
    var x$34 = ((1 + this.as) | 0);
    var x$35 = ((1 + this.a9) | 0);
    var x$36 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a$1, 1, x$31, 1, x$33, x$34, this.av, x$35, this.a2, this.a6, this.a5, this.a4, this.g, x$36);
  } else if ((this.a9 < 1048576)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$45 = $m_sci_VectorStatics$().ap;
    var x$47 = $m_sci_VectorStatics$().bw;
    var x$49 = $m_sci_VectorStatics$().E($m_sci_VectorStatics$().E($m_sci_VectorStatics$().E(this.d, this.at), this.au), this.av);
    var x$50 = ((1 + this.a9) | 0);
    var x$51 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a$2, 1, x$45, 1, x$47, 1, x$49, x$50, this.a2, this.a6, this.a5, this.a4, this.g, x$51);
  } else if ((this.a2.a.length < 30)) {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$59 = $m_sci_VectorStatics$().ap;
    var x$61 = $m_sci_VectorStatics$().bw;
    var x$63 = $m_sci_VectorStatics$().cW;
    var x$65 = $m_sci_VectorStatics$().E($m_sci_VectorStatics$().E($m_sci_VectorStatics$().E($m_sci_VectorStatics$().E(this.d, this.at), this.au), this.av), this.a2);
    var x$66 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a$3, 1, x$59, 1, x$61, 1, x$63, 1, x$65, this.a6, this.a5, this.a4, this.g, x$66);
  } else {
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var $x_3 = $m_sci_VectorStatics$().ap;
    var $x_2 = $m_sci_VectorStatics$().bw;
    var $x_1 = $m_sci_VectorStatics$().cW;
    var x = $m_sci_VectorStatics$().E($m_sci_VectorStatics$().E($m_sci_VectorStatics$().E(this.d, this.at), this.au), this.av);
    var a$5 = new ($d_O.r().r().r().r().r().C)(1);
    a$5.a[0] = x;
    return new $c_sci_Vector6(a$4, 1, $x_3, 1, $x_2, 1, $x_1, 1, a$5, ((1 + this.a9) | 0), $m_sci_VectorStatics$().kO, this.a2, this.a6, this.a5, this.a4, this.g, ((1 + this.h) | 0));
  }
});
$p.d7 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cL(this.d, f);
  var x$2 = $m_sci_VectorStatics$().aF(2, this.at, f);
  var x$3 = $m_sci_VectorStatics$().aF(3, this.au, f);
  var x$4 = $m_sci_VectorStatics$().aF(4, this.av, f);
  var x$5 = $m_sci_VectorStatics$().aF(5, this.a2, f);
  var x$6 = $m_sci_VectorStatics$().aF(4, this.a6, f);
  var x$7 = $m_sci_VectorStatics$().aF(3, this.a5, f);
  var x$8 = $m_sci_VectorStatics$().aF(2, this.a4, f);
  var x$9 = $m_sci_VectorStatics$().cL(this.g, f);
  return new $c_sci_Vector5(x$1, this.aH, x$2, this.aE, x$3, this.as, x$4, this.a9, x$5, x$6, x$7, x$8, x$9, this.h);
});
$p.da = (function() {
  return 9;
});
$p.du = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
      break;
    }
    case 1: {
      return this.at;
      break;
    }
    case 2: {
      return this.au;
      break;
    }
    case 3: {
      return this.av;
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
$p.ca = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().gc(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector5(this.d, this.aH, this.at, this.aE, this.au, this.as, this.av, this.a9, this.a2, this.a6, this.a5, this.a4, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.ca.call(this, suffix, k);
  }
});
$p.N = (function(f) {
  return this.d7(f);
});
$p.T = (function(elem) {
  return this.bz(elem);
});
$p.c = (function(v1) {
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
    } else if ((index >= this.as)) {
      var io$2 = ((index - this.as) | 0);
      return this.av.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aE)) {
      var io$3 = ((index - this.aE) | 0);
      return this.au.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aH)) {
      var io$4 = ((index - this.aH) | 0);
      return this.at.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.bf(index);
  }
});
function $isArrayOf_sci_Vector5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cN)));
}
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  cN: 1,
  aq: 1,
  ar: 1,
  al: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  C: 1,
  u: 1,
  p: 1,
  G: 1,
  A: 1,
  t: 1,
  n: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.d = null;
  this.g = null;
  this.h = 0;
  this.aw = 0;
  this.af = null;
  this.ao = 0;
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
  this.aw = len1;
  this.af = prefix2;
  this.ao = len12;
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
$p.u = (function(index) {
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
    } else if ((index >= this.ao)) {
      var io$4 = ((index - this.ao) | 0);
      return this.ag.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.aw)) {
      var io$5 = ((index - this.aw) | 0);
      return this.af.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.bf(index);
  }
});
$p.ea = (function(index, elem) {
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
        var a6c = a6.j();
        var a5 = a6c.a[i6];
        var a5c = a5.j();
        var a4 = a5c.a[i5];
        var a4c = a4.j();
        var a3 = a4c.a[i4];
        var a3c = a3.j();
        var a2 = a3c.a[i3];
        var a2c = a2.j();
        var a1 = a2c.a[i2];
        var a1c = a1.j();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        a6c.a[i6] = a5c;
        return new $c_sci_Vector6(this.d, this.aw, this.af, this.ao, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, a6c, this.a1, this.a0, this.Z, this.Y, this.g, this.h);
      } else if ((i5 < this.a1.a.length)) {
        var a5$1 = this.a1;
        var a5c$1 = a5$1.j();
        var a4$1 = a5c$1.a[i5];
        var a4c$1 = a4$1.j();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.j();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.j();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.j();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        a5c$1.a[i5] = a4c$1;
        return new $c_sci_Vector6(this.d, this.aw, this.af, this.ao, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, a5c$1, this.a0, this.Z, this.Y, this.g, this.h);
      } else if ((i4 < this.a0.a.length)) {
        var a4$2 = this.a0;
        var a4c$2 = a4$2.j();
        var a3$2 = a4c$2.a[i4];
        var a3c$2 = a3$2.j();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.j();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.j();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        a4c$2.a[i4] = a3c$2;
        return new $c_sci_Vector6(this.d, this.aw, this.af, this.ao, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, a4c$2, this.Z, this.Y, this.g, this.h);
      } else if ((i3 < this.Z.a.length)) {
        var a3$3 = this.Z;
        var a3c$3 = a3$3.j();
        var a2$3 = a3c$3.a[i3];
        var a2c$3 = a2$3.j();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.j();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        a3c$3.a[i3] = a2c$3;
        return new $c_sci_Vector6(this.d, this.aw, this.af, this.ao, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, a3c$3, this.Y, this.g, this.h);
      } else if ((i2 < this.Y.a.length)) {
        var a2$4 = this.Y;
        var a2c$4 = a2$4.j();
        var a1$4 = a2c$4.a[i2];
        var a1c$4 = a1$4.j();
        a1c$4.a[i1] = elem;
        a2c$4.a[i2] = a1c$4;
        return new $c_sci_Vector6(this.d, this.aw, this.af, this.ao, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, a2c$4, this.g, this.h);
      } else {
        var a1$5 = this.g;
        var a1c$5 = a1$5.j();
        a1c$5.a[i1] = elem;
        return new $c_sci_Vector6(this.d, this.aw, this.af, this.ao, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, a1c$5, this.h);
      }
    } else if ((index >= this.aa)) {
      var io$2 = ((index - this.aa) | 0);
      var a5$2 = this.ai;
      var idx5 = ((io$2 >>> 20) | 0);
      var idx4 = (31 & ((io$2 >>> 15) | 0));
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a5c$2 = a5$2.j();
      var a4$3 = a5c$2.a[idx5];
      var a4c$3 = a4$3.j();
      var a3$4 = a4c$3.a[idx4];
      var a3c$4 = a3$4.j();
      var a2$5 = a3c$4.a[idx3];
      var a2c$5 = a2$5.j();
      var a1$6 = a2c$5.a[idx2];
      var a1c$6 = a1$6.j();
      a1c$6.a[idx1] = elem;
      a2c$5.a[idx2] = a1c$6;
      a3c$4.a[idx3] = a2c$5;
      a4c$3.a[idx4] = a3c$4;
      a5c$2.a[idx5] = a4c$3;
      return new $c_sci_Vector6(this.d, this.aw, this.af, this.ao, this.ag, this.ae, this.ah, this.aa, a5c$2, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, this.g, this.h);
    } else if ((index >= this.ae)) {
      var io$3 = ((index - this.ae) | 0);
      var a4$4 = this.ah;
      var idx4$1 = ((io$3 >>> 15) | 0);
      var idx3$1 = (31 & ((io$3 >>> 10) | 0));
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a4c$4 = a4$4.j();
      var a3$5 = a4c$4.a[idx4$1];
      var a3c$5 = a3$5.j();
      var a2$6 = a3c$5.a[idx3$1];
      var a2c$6 = a2$6.j();
      var a1$7 = a2c$6.a[idx2$1];
      var a1c$7 = a1$7.j();
      a1c$7.a[idx1$1] = elem;
      a2c$6.a[idx2$1] = a1c$7;
      a3c$5.a[idx3$1] = a2c$6;
      a4c$4.a[idx4$1] = a3c$5;
      return new $c_sci_Vector6(this.d, this.aw, this.af, this.ao, this.ag, this.ae, a4c$4, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, this.g, this.h);
    } else if ((index >= this.ao)) {
      var io$4 = ((index - this.ao) | 0);
      var a3$6 = this.ag;
      var idx3$2 = ((io$4 >>> 10) | 0);
      var idx2$2 = (31 & ((io$4 >>> 5) | 0));
      var idx1$2 = (31 & io$4);
      var a3c$6 = a3$6.j();
      var a2$7 = a3c$6.a[idx3$2];
      var a2c$7 = a2$7.j();
      var a1$8 = a2c$7.a[idx2$2];
      var a1c$8 = a1$8.j();
      a1c$8.a[idx1$2] = elem;
      a2c$7.a[idx2$2] = a1c$8;
      a3c$6.a[idx3$2] = a2c$7;
      return new $c_sci_Vector6(this.d, this.aw, this.af, this.ao, a3c$6, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, this.g, this.h);
    } else if ((index >= this.aw)) {
      var io$5 = ((index - this.aw) | 0);
      var a2$8 = this.af;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.j();
      var a1$9 = a2c$8.a[idx2$3];
      var a1c$9 = a1$9.j();
      a1c$9.a[idx1$3] = elem;
      a2c$8.a[idx2$3] = a1c$9;
      return new $c_sci_Vector6(this.d, this.aw, a2c$8, this.ao, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, this.g, this.h);
    } else {
      var a1$10 = this.d;
      var a1c$10 = a1$10.j();
      a1c$10.a[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.aw, this.af, this.ao, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, this.g, this.h);
    }
  } else {
    throw this.bf(index);
  }
});
$p.bz = (function(elem) {
  if ((this.g.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().gg(this.g, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.d, this.aw, this.af, this.ao, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, x$1, x$2);
  } else if ((this.Y.a.length < 31)) {
    var x$18 = $m_sci_VectorStatics$().M(this.Y, this.g);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$20 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.d, this.aw, this.af, this.ao, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, x$18, a, x$20);
  } else if ((this.Z.a.length < 31)) {
    var x$35 = $m_sci_VectorStatics$().M(this.Z, $m_sci_VectorStatics$().M(this.Y, this.g));
    var x$36 = $m_sci_VectorStatics$().ap;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$38 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.d, this.aw, this.af, this.ao, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, x$35, x$36, a$1, x$38);
  } else if ((this.a0.a.length < 31)) {
    var x$52 = $m_sci_VectorStatics$().M(this.a0, $m_sci_VectorStatics$().M(this.Z, $m_sci_VectorStatics$().M(this.Y, this.g)));
    var x$53 = $m_sci_VectorStatics$().bw;
    var x$54 = $m_sci_VectorStatics$().ap;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$56 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.d, this.aw, this.af, this.ao, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, x$52, x$53, x$54, a$2, x$56);
  } else if ((this.a1.a.length < 31)) {
    var x$69 = $m_sci_VectorStatics$().M(this.a1, $m_sci_VectorStatics$().M(this.a0, $m_sci_VectorStatics$().M(this.Z, $m_sci_VectorStatics$().M(this.Y, this.g))));
    var x$70 = $m_sci_VectorStatics$().cW;
    var x$71 = $m_sci_VectorStatics$().bw;
    var x$72 = $m_sci_VectorStatics$().ap;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$74 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.d, this.aw, this.af, this.ao, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, x$69, x$70, x$71, x$72, a$3, x$74);
  } else if ((this.W.a.length < 62)) {
    var x$86 = $m_sci_VectorStatics$().M(this.W, $m_sci_VectorStatics$().M(this.a1, $m_sci_VectorStatics$().M(this.a0, $m_sci_VectorStatics$().M(this.Z, $m_sci_VectorStatics$().M(this.Y, this.g)))));
    var x$87 = $m_sci_VectorStatics$().hh;
    var x$88 = $m_sci_VectorStatics$().cW;
    var x$89 = $m_sci_VectorStatics$().bw;
    var x$90 = $m_sci_VectorStatics$().ap;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var x$92 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.d, this.aw, this.af, this.ao, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, x$86, x$87, x$88, x$89, x$90, a$4, x$92);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.fu = (function(elem) {
  if ((this.aw < 32)) {
    var x$1 = $m_sci_VectorStatics$().gh(elem, this.d);
    var x$2 = ((1 + this.aw) | 0);
    var x$3 = ((1 + this.ao) | 0);
    var x$4 = ((1 + this.ae) | 0);
    var x$5 = ((1 + this.aa) | 0);
    var x$6 = ((1 + this.a7) | 0);
    var x$7 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(x$1, x$2, this.af, x$3, this.ag, x$4, this.ah, x$5, this.ai, x$6, this.W, this.a1, this.a0, this.Z, this.Y, this.g, x$7);
  } else if ((this.ao < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$20 = $m_sci_VectorStatics$().E(this.d, this.af);
    var x$21 = ((1 + this.ao) | 0);
    var x$22 = ((1 + this.ae) | 0);
    var x$23 = ((1 + this.aa) | 0);
    var x$24 = ((1 + this.a7) | 0);
    var x$25 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a, 1, x$20, x$21, this.ag, x$22, this.ah, x$23, this.ai, x$24, this.W, this.a1, this.a0, this.Z, this.Y, this.g, x$25);
  } else if ((this.ae < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$37 = $m_sci_VectorStatics$().ap;
    var x$39 = $m_sci_VectorStatics$().E($m_sci_VectorStatics$().E(this.d, this.af), this.ag);
    var x$40 = ((1 + this.ae) | 0);
    var x$41 = ((1 + this.aa) | 0);
    var x$42 = ((1 + this.a7) | 0);
    var x$43 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$1, 1, x$37, 1, x$39, x$40, this.ah, x$41, this.ai, x$42, this.W, this.a1, this.a0, this.Z, this.Y, this.g, x$43);
  } else if ((this.aa < 1048576)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$54 = $m_sci_VectorStatics$().ap;
    var x$56 = $m_sci_VectorStatics$().bw;
    var x$58 = $m_sci_VectorStatics$().E($m_sci_VectorStatics$().E($m_sci_VectorStatics$().E(this.d, this.af), this.ag), this.ah);
    var x$59 = ((1 + this.aa) | 0);
    var x$60 = ((1 + this.a7) | 0);
    var x$61 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$2, 1, x$54, 1, x$56, 1, x$58, x$59, this.ai, x$60, this.W, this.a1, this.a0, this.Z, this.Y, this.g, x$61);
  } else if ((this.a7 < 33554432)) {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$71 = $m_sci_VectorStatics$().ap;
    var x$73 = $m_sci_VectorStatics$().bw;
    var x$75 = $m_sci_VectorStatics$().cW;
    var x$77 = $m_sci_VectorStatics$().E($m_sci_VectorStatics$().E($m_sci_VectorStatics$().E($m_sci_VectorStatics$().E(this.d, this.af), this.ag), this.ah), this.ai);
    var x$78 = ((1 + this.a7) | 0);
    var x$79 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$3, 1, x$71, 1, x$73, 1, x$75, 1, x$77, x$78, this.W, this.a1, this.a0, this.Z, this.Y, this.g, x$79);
  } else if ((this.W.a.length < 62)) {
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var x$88 = $m_sci_VectorStatics$().ap;
    var x$90 = $m_sci_VectorStatics$().bw;
    var x$92 = $m_sci_VectorStatics$().cW;
    var x$94 = $m_sci_VectorStatics$().hh;
    var x$96 = $m_sci_VectorStatics$().E($m_sci_VectorStatics$().E($m_sci_VectorStatics$().E($m_sci_VectorStatics$().E($m_sci_VectorStatics$().E(this.d, this.af), this.ag), this.ah), this.ai), this.W);
    var x$97 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$4, 1, x$88, 1, x$90, 1, x$92, 1, x$94, 1, x$96, this.a1, this.a0, this.Z, this.Y, this.g, x$97);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.d7 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cL(this.d, f);
  var x$2 = $m_sci_VectorStatics$().aF(2, this.af, f);
  var x$3 = $m_sci_VectorStatics$().aF(3, this.ag, f);
  var x$4 = $m_sci_VectorStatics$().aF(4, this.ah, f);
  var x$5 = $m_sci_VectorStatics$().aF(5, this.ai, f);
  var x$6 = $m_sci_VectorStatics$().aF(6, this.W, f);
  var x$7 = $m_sci_VectorStatics$().aF(5, this.a1, f);
  var x$8 = $m_sci_VectorStatics$().aF(4, this.a0, f);
  var x$9 = $m_sci_VectorStatics$().aF(3, this.Z, f);
  var x$10 = $m_sci_VectorStatics$().aF(2, this.Y, f);
  var x$11 = $m_sci_VectorStatics$().cL(this.g, f);
  return new $c_sci_Vector6(x$1, this.aw, x$2, this.ao, x$3, this.ae, x$4, this.aa, x$5, this.a7, x$6, x$7, x$8, x$9, x$10, x$11, this.h);
});
$p.da = (function() {
  return 11;
});
$p.du = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
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
$p.ca = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().gc(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector6(this.d, this.aw, this.af, this.ao, this.ag, this.ae, this.ah, this.aa, this.ai, this.a7, this.W, this.a1, this.a0, this.Z, this.Y, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.ca.call(this, suffix, k);
  }
});
$p.N = (function(f) {
  return this.d7(f);
});
$p.T = (function(elem) {
  return this.bz(elem);
});
$p.c = (function(v1) {
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
    } else if ((index >= this.ao)) {
      var io$4 = ((index - this.ao) | 0);
      return this.ag.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.aw)) {
      var io$5 = ((index - this.aw) | 0);
      return this.af.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.bf(index);
  }
});
function $isArrayOf_sci_Vector6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cO)));
}
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  cO: 1,
  aq: 1,
  ar: 1,
  al: 1,
  z: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  x: 1,
  r: 1,
  y: 1,
  C: 1,
  u: 1,
  p: 1,
  G: 1,
  A: 1,
  t: 1,
  n: 1,
  K: 1,
  a: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.bc = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.bc = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.bh = (function() {
  return "IndexedSeq";
});
$p.f = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.N = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bL = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.bc.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bq = (function(size) {
});
$p.b5 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.m = (function() {
  return this.bc.m();
});
$p.p = (function() {
  return this.bc.m();
});
$p.sh = (function(x) {
  var this$1 = this.bc;
  var str = ("" + $cToS(x));
  this$1.s = (this$1.s + str);
  return this;
});
$p.x = (function() {
  return this.bc.s;
});
$p.jh = (function(ct) {
  return ((ct.bg() === $d_C.l()) ? this.vw() : $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, ct));
});
$p.vw = (function() {
  var len = this.bc.m();
  var arr = new $ac_C(len);
  this.bc.r0(0, len, arr, 0);
  return arr;
});
$p.qb = (function(xs) {
  if (false) {
    var this$3 = this.bc;
    var str = xs.vK;
    this$3.s = (("" + this$3.s) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.bc.qa(xs.cu);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.bc;
    var s = xs.bc;
    this$4.s = (("" + this$4.s) + s);
  } else {
    var ks = xs.p();
    if ((ks !== 0)) {
      var b = this.bc;
      if ((ks > 0)) {
        b.m();
      }
      var it = xs.f();
      while (it.l()) {
        var c = $uC(it.e());
        var str$1 = ("" + $cToS(c));
        b.s = (b.s + str$1);
      }
    }
  }
  return this;
});
$p.b = (function() {
  return (this.bc.m() === 0);
});
$p.b2 = (function() {
  return $m_scm_IndexedSeq$();
});
$p.aX = (function() {
  return this.bc.s;
});
$p.az = (function(elem) {
  return this.sh($uC(elem));
});
$p.gj = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).qb(coll);
});
$p.gk = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).qb(coll);
});
$p.c = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.bc.qs(i));
});
$p.u = (function(i) {
  return $bC(this.bc.qs(i));
});
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d4)));
}
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  d4: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  E: 1,
  a9: 1,
  L: 1,
  J: 1,
  I: 1,
  V: 1,
  u: 1,
  p: 1,
  W: 1,
  b5: 1,
  a: 1
}));
function $isArrayOf_scm_LinkedHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iH)));
}
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().jg($thiz);
  $thiz.cC = buf.cC;
  $thiz.dY = buf.dY;
  $thiz.iD = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.iE = ((1 + $thiz.iE) | 0);
  if ($thiz.iD) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.iE = 0;
  this.cC = null;
  this.dY = null;
  this.iD = false;
  this.cD = 0;
  this.iE = 0;
  this.cC = $m_sci_Nil$();
  this.dY = null;
  this.iD = false;
  this.cD = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.bq = (function(size) {
});
$p.cI = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.T = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.N = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.f = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.cC.f(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.iE)));
});
$p.e5 = (function() {
  return $m_scm_ListBuffer$();
});
$p.u = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.cC, i);
});
$p.m = (function() {
  return this.cD;
});
$p.p = (function() {
  return this.cD;
});
$p.b = (function() {
  return (this.cD === 0);
});
$p.fw = (function() {
  this.iD = (!this.b());
  return this.cC;
});
$p.sq = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.cD === 0)) {
    this.cC = last1;
  } else {
    this.dY.aY = last1;
  }
  this.dY = last1;
  this.cD = ((1 + this.cD) | 0);
  return this;
});
$p.jg = (function(xs) {
  var it = xs.f();
  if (it.l()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.e(), $m_sci_Nil$());
    this.cC = last0;
    while (it.l()) {
      var last1 = new $c_sci_$colon$colon(it.e(), $m_sci_Nil$());
      last0.aY = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.cD = len;
    this.dY = last0;
  }
  return this;
});
$p.sf = (function(xs) {
  var it = xs.f();
  if (it.l()) {
    var fresh = new $c_scm_ListBuffer().jg(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.cD === 0)) {
      this.cC = fresh.cC;
    } else {
      this.dY.aY = fresh.cC;
    }
    this.dY = fresh.dY;
    this.cD = ((this.cD + fresh.cD) | 0);
  }
  return this;
});
$p.bh = (function() {
  return "ListBuffer";
});
$p.b5 = (function(elems) {
  return this.sf(elems);
});
$p.az = (function(elem) {
  return this.sq(elem);
});
$p.aX = (function() {
  return this.fw();
});
$p.c = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.cC, i);
});
$p.b2 = (function() {
  return $m_scm_ListBuffer$();
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d3)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  d3: 1,
  bg: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  E: 1,
  bh: 1,
  J: 1,
  I: 1,
  aR: 1,
  t: 1,
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
      var temp$z = op.bn(z, $thiz.dk.a[start]);
      start = temp$start;
      z = temp$z;
    }
  }
}
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.er = 0;
  $thiz.dk = initialElements;
  $thiz.aL = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.er = 0;
  this.dk = null;
  this.aL = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.cI = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.T = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.N = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.f = (function() {
  return this.vH().f();
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bL = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.aL;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.p = (function() {
  return this.aL;
});
$p.lg = (function(n) {
  this.dk = $m_scm_ArrayBuffer$().rt(this.dk, this.aL, n);
});
$p.bq = (function(size) {
  if (((size > this.aL) && (size >= 1))) {
    this.lg(size);
  }
});
$p.u = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().hF(n, (((-1) + this.aL) | 0));
  }
  if ((hi > this.aL)) {
    throw $m_scg_CommonErrors$().hF((((-1) + hi) | 0), (((-1) + this.aL) | 0));
  }
  return this.dk.a[n];
});
$p.vF = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $m_scg_CommonErrors$().hF(index, (((-1) + this.aL) | 0));
  }
  if ((hi > this.aL)) {
    throw $m_scg_CommonErrors$().hF((((-1) + hi) | 0), (((-1) + this.aL) | 0));
  }
  this.er = ((1 + this.er) | 0);
  this.dk.a[index] = elem;
});
$p.m = (function() {
  return this.aL;
});
$p.vH = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.er)));
});
$p.e5 = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.sn = (function(elem) {
  this.er = ((1 + this.er) | 0);
  var newSize = ((1 + this.aL) | 0);
  this.lg(newSize);
  this.aL = newSize;
  this.vF((((-1) + this.aL) | 0), elem);
  return this;
});
$p.q6 = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.aL;
    if ((elemsLength > 0)) {
      this.er = ((1 + this.er) | 0);
      this.lg(((this.aL + elemsLength) | 0));
      $m_s_Array$().cc(elems.dk, 0, this.dk, this.aL, elemsLength);
      this.aL = ((this.aL + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.bh = (function() {
  return "ArrayBuffer";
});
$p.bZ = (function(xs, start, len) {
  var srcLen = this.aL;
  var destLen = $m_jl_reflect_Array$().bU(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().cc(this.dk, 0, xs, start, copied);
  }
  return copied;
});
$p.fm = (function(z, op) {
  return $p_scm_ArrayBuffer__foldl__I__I__O__F2__O(this, 0, this.aL, z, op);
});
$p.hQ = (function(op) {
  return ((this.aL > 0) ? $p_scm_ArrayBuffer__foldl__I__I__O__F2__O(this, 1, this.aL, this.dk.a[0], op) : $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op));
});
$p.b5 = (function(elems) {
  return this.q6(elems);
});
$p.az = (function(elem) {
  return this.sn(elem);
});
$p.b2 = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.c = (function(v1) {
  return this.u((v1 | 0));
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cP)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  cP: 1,
  bg: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  E: 1,
  bh: 1,
  J: 1,
  I: 1,
  aR: 1,
  d2: 1,
  V: 1,
  u: 1,
  p: 1,
  W: 1,
  t: 1,
  n: 1,
  K: 1,
  a: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.eE = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.eE = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.bq = (function(size) {
});
$p.bh = (function() {
  return "IndexedSeq";
});
$p.f = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.N = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bL = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = (this.eE.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cI = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.T = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.e5 = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.u = (function(index) {
  return this.eE[index];
});
$p.m = (function() {
  return (this.eE.length | 0);
});
$p.p = (function() {
  return (this.eE.length | 0);
});
$p.cb = (function() {
  return "WrappedArray";
});
$p.aX = (function() {
  return this;
});
$p.az = (function(elem) {
  this.eE.push(elem);
  return this;
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  return this.eE[index];
});
$p.b2 = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  jI: 1,
  bg: 1,
  P: 1,
  s: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  q: 1,
  j: 1,
  i: 1,
  m: 1,
  d: 1,
  Q: 1,
  O: 1,
  R: 1,
  N: 1,
  E: 1,
  bh: 1,
  J: 1,
  I: 1,
  aR: 1,
  t: 1,
  n: 1,
  V: 1,
  u: 1,
  p: 1,
  W: 1,
  d2: 1,
  L: 1,
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
$s_LSIAdversaryTool__main__AT__V(new ($d_T.r().C)([]));
//# sourceMappingURL=main.js.map
