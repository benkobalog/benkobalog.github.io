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
        return null.vT();
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
    return instance.qM(x0, x1, x2, x3);
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
    return instance.vU(x0);
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
$p.n = (function(that) {
  return (this === that);
});
$p.w = (function() {
  var i = this.u();
  return (($objectClassName(this) + "@") + (+(i >>> 0.0)).toString(16));
});
$p.toString = (function() {
  return this.w();
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
$p.q = (function(srcPos, dest, destPos, length) {
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
$p.q = (function(srcPos, dest, destPos, length) {
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
$p.q = (function(srcPos, dest, destPos, length) {
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
$p.q = (function(srcPos, dest, destPos, length) {
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
$p.q = (function(srcPos, dest, destPos, length) {
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
$p.q = (function(srcPos, dest, destPos, length) {
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
$p.q = (function(srcPos, dest, destPos, length) {
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
$p.q = (function(srcPos, dest, destPos, length) {
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
  $p.q = (function(srcPos, dest, destPos, length) {
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
function $s_LMain__main__AT__V(args) {
  $m_LMain$().u4(args);
}
function $p_LMain$__splitWithDelimiters__sci_Vector__T__sci_List__T__sci_Vector__sci_Vector($thiz, vec, str, delimiters, notMatchedString, acc) {
  var acc$tailLocal1 = acc;
  var notMatchedString$tailLocal1 = notMatchedString;
  var str$tailLocal1 = str;
  while (true) {
    if ((str$tailLocal1 === "")) {
      return acc$tailLocal1.R(notMatchedString$tailLocal1);
    } else {
      var x19 = $p_LMain$__findDelimiterAtPosition$1__sci_List__T__s_Option($thiz, delimiters, str$tailLocal1);
      if ((x19 instanceof $c_s_Some)) {
        var x21 = x19.ed;
        if ((x21 !== null)) {
          var d = x21.bz();
          var rest = x21.bs();
          var acc$tailLocal1$tmp1 = acc$tailLocal1.R(notMatchedString$tailLocal1).R(d);
          str$tailLocal1 = rest;
          notMatchedString$tailLocal1 = "";
          acc$tailLocal1 = acc$tailLocal1$tmp1;
          continue;
        }
      }
      if (($m_s_None$() === x19)) {
        var str$tailLocal1$tmp2 = $m_sc_StringOps$().qp(str$tailLocal1, 1);
        var notMatchedString$tailLocal1$tmp2 = (notMatchedString$tailLocal1 + $cToS($m_sc_StringOps$().tI(str$tailLocal1)));
        str$tailLocal1 = str$tailLocal1$tmp2;
        notMatchedString$tailLocal1 = notMatchedString$tailLocal1$tmp2;
        continue;
      }
      throw new $c_s_MatchError(x19);
    }
  }
}
function $p_LMain$__injectImages__sci_Vector__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, vec, s) {
  var wordsToReplace = $m_sci_Map$().qE($m_sr_ScalaRunTime$().A(new ($d_T2.r().C)([new $c_T2("City", "images/City.svg"), new $c_T2("Town", "images/Town.svg"), new $c_T2("Beasts", "images/Beasts.svg"), new $c_T2("Explorer", "images/Explorer.svg"), new $c_T2("Dahan", "images/Dahan.svg"), new $c_T2("Disease", "images/Disease.svg"), new $c_T2("Escalation", "images/Escalation.svg"), new $c_T2("Fear", "images/Fear.svg"), new $c_T2("Blight", "images/Blight.svg")])));
  var parts = $p_LMain$__splitWithDelimiters__sci_Vector__T__sci_List__T__sci_Vector__sci_Vector($thiz, vec, s, $m_sci_Nil$().bR(wordsToReplace.lt()), "", ($m_sci_Vector$(), $m_sci_Vector0$())).L(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text) => {
    var x24 = wordsToReplace.gf(text);
    if ((x24 instanceof $c_s_Some)) {
      var value = x24.ed;
      return $m_Lcom_raquo_laminar_api_package$().y.tM().bE($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().y.v4().g2(value), $m_Lcom_raquo_laminar_api_package$().y.vr().g2("auto"), $m_Lcom_raquo_laminar_api_package$().y.tL().g2("1em")])));
    }
    if (($m_s_None$() === x24)) {
      return new $c_Lcom_raquo_laminar_nodes_TextNode(text);
    }
    throw new $c_s_MatchError(x24);
  })));
  return $m_Lcom_raquo_laminar_api_package$().y.uz().bE(parts);
}
function $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector($thiz, sel, stage) {
  return $f_sc_StrictOptimizedIterableOps__collect__s_PartialFunction__O(sel.d9.fv, new $c_LMain$$anon$3(stage, sel, $thiz));
}
function $p_LMain$__findDelimiterAtPosition$1__sci_List__T__s_Option($thiz, delimiters$1, subString) {
  return $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(delimiters$1, new $c_LMain$$anon$2(subString));
}
function $p_LMain$__newSection$lzyINIT1$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, newSection$lzy1$1, hideInCompact$1, sectionName$1, rulesDiv$1) {
  if ((newSection$lzy1$1 === null)) {
    throw new $c_jl_NullPointerException();
  }
  return (newSection$lzy1$1.iy ? newSection$lzy1$1.iz : newSection$lzy1$1.tQ((hideInCompact$1 ? $m_Lcom_raquo_laminar_api_package$().y.eF().bE($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().y.iU().iG($thiz.fu), $m_Lcom_raquo_laminar_api_package$().y.eR.g3(sectionName$1), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().y, $m_sci_Vector$().bv($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)([$m_Lcom_raquo_laminar_api_package$().y.qO().bE($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().y, sectionName$1, $m_Lcom_raquo_laminar_modifiers_RenderableText$().eb)]))), rulesDiv$1]))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())]))) : $m_Lcom_raquo_laminar_api_package$().y.eF().bE($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().y.eR.g3(sectionName$1), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().y, $m_sci_Vector$().bv($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)([$m_Lcom_raquo_laminar_api_package$().y.qO().bE($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().y.tm().kO(new $c_Lcom_raquo_airstream_misc_MapSignal($thiz.fu, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => ((!(!_$4)) ? "0.5rem" : "1rem"))), $m_s_None$()), $m_s_$less$colon$less$().eV), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().y, sectionName$1, $m_Lcom_raquo_laminar_modifiers_RenderableText$().eb)]))), rulesDiv$1]))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())]))))));
}
function $p_LMain$__newSection$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, newSection$lzy1$2, hideInCompact$2, sectionName$2, rulesDiv$2) {
  return (newSection$lzy1$2.iy ? newSection$lzy1$2.iz : $p_LMain$__newSection$lzyINIT1$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, newSection$lzy1$2, hideInCompact$2, sectionName$2, rulesDiv$2));
}
/** @constructor */
function $c_LMain$() {
  this.hQ = null;
  this.hP = null;
  this.ja = null;
  this.fu = null;
  $n_LMain$ = this;
  this.hQ = $m_Lcom_raquo_airstream_web_WebStorageVar$().lv("adversary", $m_s_None$()).vb(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Ladversaries_Adversary$().je.e6)));
  this.hP = $m_Lcom_raquo_airstream_web_WebStorageVar$().lv("adversary-level", $m_s_None$()).tT(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => 6)));
  this.ja = $m_Lcom_raquo_airstream_web_WebStorageVar$().lv("compact-mode", $m_s_None$()).ss(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => false)));
  this.fu = this.ja.bZ;
}
$p = $c_LMain$.prototype = new $h_O();
$p.constructor = $c_LMain$;
/** @constructor */
function $h_LMain$() {
}
$h_LMain$.prototype = $p;
$p.u4 = (function(args) {
  var container = document.getElementById("app");
  var this$3 = $m_Lcom_raquo_laminar_api_package$().y;
  var container$1 = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => container));
  var rootNode = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.sF()));
  var p = $m_Lcom_raquo_laminar_keys_EventProcessor$().iP(this$3.nC.uw(), false, false);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream($m_Lcom_raquo_airstream_web_DomEventStream$().q1(document, p.eS.gP, p.gO), p.gN), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    new $c_Lcom_raquo_laminar_nodes_RootNode(container$1.J(), rootNode.J());
  })), this$3.vm());
});
$p.sF = (function() {
  return $m_Lcom_raquo_laminar_api_package$().y.eF().bE($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().y.tH().bE($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().y.iU().iG(this.fu), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().y, "Spirit Island Adversary Tool", $m_Lcom_raquo_laminar_modifiers_RenderableText$().eb)]))), $m_Lcom_raquo_laminar_api_package$().y.eF().bE($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().y.eR.g3("selectors"), this.uM(), this.uL()]))), this.uK()])));
});
$p.uM = (function() {
  var $x_6 = $m_Lcom_raquo_laminar_api_package$().y.eF();
  var $x_5 = $m_sr_ScalaRunTime$();
  var $x_4 = $m_Lcom_raquo_laminar_api_package$().y.eR.g3("levelSelector");
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().y.iU().iG(this.fu);
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().y.qN().bE($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().y, "Level", $m_Lcom_raquo_laminar_modifiers_RenderableText$().eb)])));
  var $x_1 = $m_Lcom_raquo_laminar_api_package$().y;
  var b = $m_sci_IndexedSeq$().aK();
  var it = new $c_sci_RangeIterator(1, 1, 6, false);
  while (it.el) {
    var x0 = it.qZ();
    b.ax($m_Lcom_raquo_laminar_api_package$().y.qe().bE($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().y, ("" + x0), $m_Lcom_raquo_laminar_modifiers_RenderableText$().eb), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().iP($m_Lcom_raquo_laminar_api_package$().y.j0(), false, false)).ub(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((x0) => (() => x0))(x0))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
      sink.gm(_$1);
    }))(this.hP.i3))), $m_Lcom_raquo_laminar_api_package$().y.qd().kO(new $c_Lcom_raquo_airstream_misc_MapSignal(this.hP.bZ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x0) => ((selected) => (((selected | 0) === x0) ? "lightblue" : "")))(x0)), $m_s_None$()), $m_s_$less$colon$less$().eV)]))));
  }
  return $x_6.bE($x_5.A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_4, $x_3, $x_2, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_1, b.aU(), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
});
$p.uL = (function() {
  var $x_7 = $m_Lcom_raquo_laminar_api_package$().y.eF();
  var $x_6 = $m_sr_ScalaRunTime$();
  var $x_5 = $m_Lcom_raquo_laminar_api_package$().y.eR.g3("adversarySelector");
  var $x_4 = $m_Lcom_raquo_laminar_api_package$().y.iU().iG(this.fu);
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().y.qN().bE($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().y, "Adversary", $m_Lcom_raquo_laminar_modifiers_RenderableText$().eb)])));
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().y;
  var this$11 = $m_Ladversaries_Adversary$().jd;
  var f = ((adversary) => $m_Lcom_raquo_laminar_api_package$().y.qe().bE($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().y, adversary.e6, $m_Lcom_raquo_laminar_modifiers_RenderableText$().eb), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().iP($m_Lcom_raquo_laminar_api_package$().y.j0(), false, false)).qY((void 0)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1$1) => {
    sink.gm(_$1$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.hQ, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((adversary$2) => ((_$1, _$2) => adversary$2.e6))(adversary)))))), $m_Lcom_raquo_laminar_api_package$().y.qd().kO(new $c_Lcom_raquo_airstream_misc_MapSignal(this.hQ.bZ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((adversary$3) => ((selected) => {
    var x = $m_Ladversaries_Adversary$().qL(selected);
    if (((x === null) ? (adversary$3 === null) : x.n(adversary$3))) {
      return "lightblue";
    } else {
      return "";
    }
  }))(adversary)), $m_s_None$()), $m_s_$less$colon$less$().eV)]))));
  if ((this$11 === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var x0 = this$11.o();
    var h = new $c_sci_$colon$colon(f(x0), $m_sci_Nil$());
    var t = h;
    var rest = this$11.x();
    while ((rest !== $m_sci_Nil$())) {
      var x0$1 = rest.o();
      var nx = new $c_sci_$colon$colon(f(x0$1), $m_sci_Nil$());
      t.aV = nx;
      t = nx;
      rest = rest.x();
    }
    var $x_1 = h;
  }
  return $x_7.bE($x_6.A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_5, $x_4, $x_3, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_2, $x_1, $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
});
$p.uK = (function() {
  return $m_Lcom_raquo_laminar_api_package$().y.eF().bE($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().iP($m_Lcom_raquo_laminar_api_package$().y.j0(), false, false)).qY((void 0)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.gm(_$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.ja, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((isHidden, _$3) => (!(!(!isHidden))))))))), $m_Lcom_raquo_laminar_api_package$().y.vd().g2("Click for toggling compact view!"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildrenInserter$().si(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().sB(this.hQ.bZ, this.hP.bZ, new $c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var name = x$1.bz();
    var level = (x$1.bs() | 0);
    var sel = new $c_LMain$AdversarySelector($m_Ladversaries_Adversary$().qL(name), level);
    var escalation = sel.d9.gx;
    var setup = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage());
    var afterRavage = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__AfterRavage__Ladversaries_Stage());
    var ravage = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage());
    var afterBuild = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__AfterBuild__Ladversaries_Stage());
    var highImmigration = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage());
    var build = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Build__Ladversaries_Stage());
    var explore = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage()).R(("Stage 2 Escalation: " + escalation));
    var lossCondition = sel.d9.gz;
    var ruleChanges = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage());
    var deckOrder = $f_sc_IndexedSeqOps__reverse__O(sel.d9.fv).iM(new $c_LMain$$anon$1(sel));
    var fear = $f_sc_LinearSeqOps__apply__I__O(sel.d9.gy, (((-1) + sel.cw) | 0));
    var setupWithDeckNFear = $m_sci_Vector$().bv($m_sr_ScalaRunTime$().A(new ($d_T.r().C)([("Deck Order: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Option$().r5(deckOrder), "", "", "")), ("Fear: " + fear)]))).sh(setup);
    return this.dW(this.dW(this.dW(this.dW(this.dW(this.dW(this.dW(this.dW(this.dW($m_sci_Vector$().bv($m_sr_ScalaRunTime$().qK(new ($d_sr_Nothing$.r().C)([]))), setupWithDeckNFear, "Setup", true), $m_s_Option$().r5(lossCondition).lQ(), "Loss Condition", false), ruleChanges, "Rule Changes", false), highImmigration, "High Immigration", false), ravage, "Ravage", false), afterRavage, "After Ravage", false), build, "Build", false), afterBuild, "After Build", false), explore, "Explore", false);
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().or, (void 0)))])));
});
$p.dW = (function(vec, rules, sectionName, hideInCompact) {
  var newSection$lzy1 = new $c_sr_LazyRef();
  var rulesDiv = $m_Lcom_raquo_laminar_api_package$().y.eF().bE($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().y.eR.g3("rules"), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().y, rules.L(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s) => $p_LMain$__injectImages__sci_Vector__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, vec, s)))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
  return ((!$f_sc_SeqOps__isEmpty__Z(rules)) ? vec.R($p_LMain$__newSection$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, newSection$lzy1, hideInCompact, sectionName, rulesDiv)) : vec);
});
var $d_LMain$ = new $TypeData().i($c_LMain$, "Main$", ({
  dc: 1
}));
var $n_LMain$;
function $m_LMain$() {
  if ((!$n_LMain$)) {
    $n_LMain$ = new $c_LMain$();
  }
  return $n_LMain$;
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
$p.u2 = (function(trys, combinator) {
  var elem = false;
  elem = true;
  var i = 0;
  var len = (trys.length | 0);
  while ((i < len)) {
    if (trys[i].lq()) {
      var ev$6 = false;
      elem = ev$6;
    }
    i = ((1 + i) | 0);
  }
  if (elem) {
    var values = trys.map(((_$3) => _$3.H()));
    return new $c_s_util_Success(combinator.b(values));
  } else {
    var arr = trys.map(((x$1) => ((x$1 instanceof $c_s_util_Failure) ? new $c_s_Some(x$1.di) : $m_s_None$())));
    return new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError($m_sci_IndexedSeq$().lc($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), arr))));
  }
});
var $d_Lcom_raquo_airstream_combine_CombineObservable$ = new $TypeData().i($c_Lcom_raquo_airstream_combine_CombineObservable$, "com.raquo.airstream.combine.CombineObservable$", ({
  dn: 1
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
$p.sB = (function(this$, s1, c) {
  return $m_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$().sC(this$, s1, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((a, v1) => new $c_T2(a, v1))));
});
var $d_Lcom_raquo_airstream_combine_generated_CombinableSignal$ = new $TypeData().i($c_Lcom_raquo_airstream_combine_generated_CombinableSignal$, "com.raquo.airstream.combine.generated.CombinableSignal$", ({
  dq: 1
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
$p.sC = (function(s1, s2, combinator) {
  return new $c_Lcom_raquo_airstream_combine_CombineSignalN($m_Lcom_raquo_ew_JsArray$().bA($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_core_Signal.r().C)([s1.hJ(), s2.hJ()]))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((arr) => combinator.cE(arr[0], arr[1]))));
});
var $d_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$ = new $TypeData().i($c_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$, "com.raquo.airstream.combine.generated.StaticSignalCombineOps$", ({
  dr: 1
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
$p.ty = (function(parent, onTry) {
  return new $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2(parent, onTry, this);
});
var $d_Lcom_raquo_airstream_common_InternalParentObserver$ = new $TypeData().i($c_Lcom_raquo_airstream_common_InternalParentObserver$, "com.raquo.airstream.common.InternalParentObserver$", ({
  dt: 1
}));
var $n_Lcom_raquo_airstream_common_InternalParentObserver$;
function $m_Lcom_raquo_airstream_common_InternalParentObserver$() {
  if ((!$n_Lcom_raquo_airstream_common_InternalParentObserver$)) {
    $n_Lcom_raquo_airstream_common_InternalParentObserver$ = new $c_Lcom_raquo_airstream_common_InternalParentObserver$();
  }
  return $n_Lcom_raquo_airstream_common_InternalParentObserver$;
}
var $d_Lcom_raquo_airstream_core_InternalObserver = new $TypeData().i(1, "com.raquo.airstream.core.InternalObserver", ({
  aC: 1
}));
function $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T($thiz) {
  return (($objectGetClass($thiz).li() + "@") + $thiz.u());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.e1();
  return ((x === (void 0)) ? $thiz.dY() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().lU(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))), $m_s_PartialFunction$().ie, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.lU = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.qJ = (function(onTry, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTry, handleObserverErrors, this);
});
var $d_Lcom_raquo_airstream_core_Observer$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$, "com.raquo.airstream.core.Observer$", ({
  dy: 1
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
$p.rb = (function(this$, observer) {
  var index = (this$.indexOf(observer) | 0);
  var shouldRemove = (index !== (-1));
  if (shouldRemove) {
    this$.splice(index, 1);
  }
  return shouldRemove;
});
var $d_Lcom_raquo_airstream_core_ObserverList$ = new $TypeData().i($c_Lcom_raquo_airstream_core_ObserverList$, "com.raquo.airstream.core.ObserverList$", ({
  dB: 1
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
  dC: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Protected$() {
  this.rv = null;
  $n_Lcom_raquo_airstream_core_Protected$ = this;
  this.rv = new $c_Lcom_raquo_airstream_core_Protected();
}
$p = $c_Lcom_raquo_airstream_core_Protected$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Protected$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Protected$() {
}
$h_Lcom_raquo_airstream_core_Protected$.prototype = $p;
$p.uc = (function(minRank, observables) {
  var elem = 0;
  elem = minRank;
  var i = 0;
  var len = (observables.length | 0);
  while ((i < len)) {
    var observable = observables[i];
    var rank = observable.e4();
    if ((rank > elem)) {
      var ev$2 = rank;
      elem = ev$2;
    }
    i = ((1 + i) | 0);
  }
  return elem;
});
var $d_Lcom_raquo_airstream_core_Protected$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Protected$, "com.raquo.airstream.core.Protected$", ({
  dD: 1
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
  this.fy = 0;
  this.fy = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.r1 = (function() {
  if ((this.fy === 2147483647)) {
    this.fy = 1;
  } else {
    this.fy = ((1 + this.fy) | 0);
  }
  return this.fy;
});
var $d_Lcom_raquo_airstream_core_Signal$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Signal$, "com.raquo.airstream.core.Signal$", ({
  dE: 1
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
  this.jo = null;
  this.gJ = null;
  this.jp = 0;
  this.jo = code;
  this.gJ = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().hH();
  this.jp = ((x === (void 0)) ? 1 : ((1 + x.jp) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().hS === (-1)) || (this.jp > $m_Lcom_raquo_airstream_core_Transaction$().hS))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().cL(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().hS));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().bC) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().eO.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().kP(this);
  }
}
$p = $c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
}
$h_Lcom_raquo_airstream_core_Transaction.prototype = $p;
$p.sE = (function(observable) {
  var x = this.gJ;
  var x$1 = ((x === (void 0)) ? (void 0) : x.aj(observable));
  return ((x$1 === (void 0)) ? false : x$1);
});
$p.tb = (function(observable) {
  var x = this.gJ;
  if ((x === (void 0))) {
    var newQueue = new $c_Lcom_raquo_airstream_util_JsPriorityQueue(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((observable$1) => observable$1.jj)));
    this.gJ = newQueue;
    var $x_1 = newQueue;
  } else {
    var $x_1 = x;
  }
  $x_1.ta(observable);
});
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction, "com.raquo.airstream.core.Transaction", ({
  dG: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.hS = 0;
  this.mj = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.hS = 1000;
  this.mj = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."));
  }));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $p;
$p.qh = (function(transaction) {
  try {
    transaction.jo.b(transaction);
    var x = transaction.gJ;
    if ((x !== (void 0))) {
      while (((x.ea.length | 0) !== 0)) {
        if (((x.ea.length | 0) === 0)) {
          throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to dequeue an empty JsPriorityQueue");
        }
        $f_Lcom_raquo_airstream_combine_CombineObservable__syncFire__Lcom_raquo_airstream_core_Transaction__V(x.ea.shift(), transaction);
      }
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cL(e$2);
  }
});
var $d_Lcom_raquo_airstream_core_Transaction$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$, "com.raquo.airstream.core.Transaction$", ({
  dH: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$;
function $m_Lcom_raquo_airstream_core_Transaction$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$)) {
    $n_Lcom_raquo_airstream_core_Transaction$ = new $c_Lcom_raquo_airstream_core_Transaction$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$;
}
function $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V($thiz) {
  if ((($thiz.hT.length | 0) === 0)) {
    if ((($thiz.eO.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
        while ((($thiz.eO.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().kP($thiz.eO.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
      while ((($thiz.hT.length | 0) > 0)) {
        var callback = $thiz.hT.shift();
        try {
          callback.b(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().cL(e$2);
        }
      }
      while ((($thiz.eO.length | 0) > 0)) {
        var _trx = $thiz.eO.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().kP(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.bC = false;
  this.hT = null;
  this.eO = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.bC = false;
  this.hT = $m_Lcom_raquo_ew_JsArray$().bA($m_sr_ScalaRunTime$().A(new ($d_F1.r().C)([])));
  this.eO = $m_Lcom_raquo_ew_JsArray$().bA($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$onStart$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$onStart$() {
}
$h_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction$onStart$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$onStart$, "com.raquo.airstream.core.Transaction$onStart$", ({
  dI: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$onStart$;
function $m_Lcom_raquo_airstream_core_Transaction$onStart$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$onStart$)) {
    $n_Lcom_raquo_airstream_core_Transaction$onStart$ = new $c_Lcom_raquo_airstream_core_Transaction$onStart$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$onStart$;
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, transaction) {
  return $thiz.eP.get(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.hU.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.hU.shift();
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().bA($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.eP.set(parent, newChildren);
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
      (!(!$thiz.eP.delete(parent)));
    }
    return nextChild;
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.hU = null;
  this.eP = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.hU = $m_Lcom_raquo_ew_JsArray$().bA($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.eP = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.kP = (function(newTransaction) {
  var x = this.hH();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().qh(newTransaction);
    this.t6(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.t6 = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.hH();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().k(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.uB(transaction$tailLocal1);
    transaction$tailLocal1.jo = $m_Lcom_raquo_airstream_core_Transaction$().mj;
    var maybeNextTransaction = this.hH();
    if ($m_sr_BoxesRunTime$().k(maybeNextTransaction, (void 0))) {
      if (((this.eP.size | 0) > 0)) {
        var numChildren = new $c_sr_IntRef(0);
        this.eP.forEach(((numChildren) => ((transactions, _$4) => {
          var ev$12 = ((numChildren.aS + (transactions.length | 0)) | 0);
          numChildren.aS = ev$12;
        }))(numChildren));
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.aS) + " children for ") + (this.eP.size | 0)) + " transactions remain. This is a bug in Airstream."));
      } else {
        return (void 0);
      }
    } else {
      $m_Lcom_raquo_airstream_core_Transaction$().qh(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.uB = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().k(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.hH();
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
$p.hH = (function() {
  return this.hU[0];
});
var $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$, "com.raquo.airstream.core.Transaction$pendingTransactions$", ({
  dJ: 1
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
  this.mn = null;
  this.ml = null;
  this.mm = null;
  this.mn = onWillStart;
  this.ml = onStart;
  this.mm = onStop;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$Config;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$Config() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = $p;
var $d_Lcom_raquo_airstream_custom_CustomSource$Config = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config, "com.raquo.airstream.custom.CustomSource$Config", ({
  dM: 1
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
$p.sm = (function(onStart, onStop) {
  return new $c_Lcom_raquo_airstream_custom_CustomSource$Config(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => (void 0))), onStart, onStop);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config$, "com.raquo.airstream.custom.CustomSource$Config$", ({
  dN: 1
}));
var $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
function $m_Lcom_raquo_airstream_custom_CustomSource$Config$() {
  if ((!$n_Lcom_raquo_airstream_custom_CustomSource$Config$)) {
    $n_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $c_Lcom_raquo_airstream_custom_CustomSource$Config$();
  }
  return $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscription) {
  var index = ($thiz.e8.indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.e8.splice(index, 1);
    if ((!$thiz.ce.c())) {
      subscription.r4();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.hY.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.hY.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.mS = null;
  this.e8 = null;
  this.fz = false;
  this.hY = null;
  this.ce = null;
  this.fA = 0;
  this.mS = onAccessAfterKilled;
  this.e8 = $m_Lcom_raquo_ew_JsArray$().bA($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.fz = true;
  this.hY = $m_Lcom_raquo_ew_JsArray$().bA($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.ce = $m_s_None$();
  this.fA = 0;
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $p;
$p.pP = (function() {
  if ((!(!this.ce.c()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.mS);
      this.ce = new $c_s_Some(newOwner);
      this.fz = false;
      this.fA = 0;
      var i = 0;
      var originalNumSubs = (this.e8.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.fA) | 0);
        this.e8[ix].r3(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.fz = true;
      this.fA = 0;
    });
    $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var when = true;
    if ((this$4.bC || (!when))) {
      f();
    } else {
      this$4.bC = true;
      try {
        f();
      } finally {
        this$4.bC = false;
        $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$4);
      }
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"));
  }
});
$p.t1 = (function() {
  if ((!this.ce.c())) {
    this.fz = false;
    var arr = this.e8;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].r4();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.ce;
    if ((!this$4.c())) {
      this$4.H().lu();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.fz = true;
    this.ce = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.sd = (function(subscription, prepend) {
  if (prepend) {
    this.fA = ((1 + this.fA) | 0);
    this.e8.unshift(subscription);
  } else {
    this.e8.push(subscription);
  }
  var this$1 = this.ce;
  if ((!this$1.c())) {
    var x0 = this$1.H();
    subscription.r3(x0);
  }
});
$p.uI = (function(subscription) {
  if (this.fz) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.hY.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  dS: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.hZ = null;
  this.mT = null;
  this.i0 = null;
  this.hZ = dynamicOwner;
  this.mT = activate;
  this.i0 = $m_s_None$();
  dynamicOwner.sd(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.iX = (function() {
  this.hZ.uI(this);
});
$p.r3 = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.i0 = this.mT.b(owner);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bC || (!when))) {
    f();
  } else {
    this$2.bC = true;
    try {
      f();
    } finally {
      this$2.bC = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
$p.r4 = (function() {
  var this$1 = this.i0;
  if ((!this$1.c())) {
    this$1.H().iX();
    this.i0 = $m_s_None$();
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription, "com.raquo.airstream.ownership.DynamicSubscription", ({
  dT: 1
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
$p.hM = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => new $c_s_Some(activate.b(owner)))), prepend);
});
$p.ro = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => {
    activate.b(owner);
    return $m_s_None$();
  })), prepend);
});
$p.v5 = (function(dynamicOwner, observable, onNext) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().hM(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(observable, onNext, owner))), false);
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription$, "com.raquo.airstream.ownership.DynamicSubscription$", ({
  dU: 1
}));
var $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
function $m_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  if ((!$n_Lcom_raquo_airstream_ownership_DynamicSubscription$)) {
    $n_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $c_Lcom_raquo_airstream_ownership_DynamicSubscription$();
  }
  return $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
}
function $f_Lcom_raquo_airstream_ownership_Owner__$init$__V($thiz) {
  $thiz.l0($m_Lcom_raquo_ew_JsArray$().bA($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.fr();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.fr().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.fr().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.fr().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.fr().push(subscription);
}
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.jy)) {
    $thiz.mX.J();
    $thiz.jy = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.mY = null;
  this.mX = null;
  this.jy = false;
  this.mY = owner;
  this.mX = cleanup;
  this.jy = false;
  owner.lE(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.iX = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this.mY, this);
});
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  dX: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.mZ = null;
  this.n0 = null;
  this.e9 = null;
  this.eQ = false;
  this.mZ = activate;
  this.n0 = deactivate;
  this.e9 = $m_s_None$();
  this.eQ = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.tV = (function() {
  var this$1 = this.e9;
  return ((!this$1.c()) && (!this$1.H().hZ.ce.c()));
});
$p.uY = (function(nextOwner) {
  if (this.eQ) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.e9;
  if ((!this$1.c())) {
    var x0 = this$1.H();
    var x$2 = x0.hZ;
    var $x_1 = (nextOwner === x$2);
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.tV() && (!nextOwner.ce.c()))) {
      this.eQ = true;
    }
    var this$3 = this.e9;
    if ((!this$3.c())) {
      this$3.H().iX();
      this.e9 = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().hM(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((parentOwner) => {
      if ((!this.eQ)) {
        this.mZ.J();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        if ((!this.eQ)) {
          this.n0.J();
        }
      })));
    })), false);
    this.e9 = new $c_s_Some(newPilotSubscription);
    this.eQ = false;
  }
});
$p.sy = (function() {
  if (this.eQ) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.e9;
  if ((!this$1.c())) {
    this$1.H().iX();
  }
  this.e9 = $m_s_None$();
});
var $d_Lcom_raquo_airstream_ownership_TransferableSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_TransferableSubscription, "com.raquo.airstream.ownership.TransferableSubscription", ({
  dY: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_util_JsPriorityQueue(getRank) {
  this.jC = null;
  this.ea = null;
  this.jC = getRank;
  this.ea = $m_Lcom_raquo_ew_JsArray$().bA($m_sr_ScalaRunTime$().qK(new $ac_O([])));
}
$p = $c_Lcom_raquo_airstream_util_JsPriorityQueue.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_util_JsPriorityQueue;
/** @constructor */
function $h_Lcom_raquo_airstream_util_JsPriorityQueue() {
}
$h_Lcom_raquo_airstream_util_JsPriorityQueue.prototype = $p;
$p.ta = (function(item) {
  var itemRank = (this.jC.b(item) | 0);
  var insertAtIndex = 0;
  var foundHigherRank = false;
  while (((insertAtIndex < (this.ea.length | 0)) && (!foundHigherRank))) {
    if (((this.jC.b(this.ea[insertAtIndex]) | 0) > itemRank)) {
      foundHigherRank = true;
    } else {
      insertAtIndex = ((1 + insertAtIndex) | 0);
    }
  }
  this.ea.splice(insertAtIndex, 0, item);
});
$p.aj = (function(item) {
  return ((this.ea.indexOf(item) | 0) !== (-1));
});
var $d_Lcom_raquo_airstream_util_JsPriorityQueue = new $TypeData().i($c_Lcom_raquo_airstream_util_JsPriorityQueue, "com.raquo.airstream.util.JsPriorityQueue", ({
  e5: 1
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
$p.q1 = (function(eventTarget, eventKey, useCapture) {
  return new $c_Lcom_raquo_airstream_custom_CustomStreamSource(new $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(((fireValue, _$1, _$2, _$3) => {
    var eventHandler = $m_sjs_js_Any$().qH(fireValue);
    return $m_Lcom_raquo_airstream_custom_CustomSource$Config$().sm(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.addEventListener(eventKey, eventHandler, useCapture);
    })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.removeEventListener(eventKey, eventHandler, useCapture);
    })));
  })));
});
var $d_Lcom_raquo_airstream_web_DomEventStream$ = new $TypeData().i($c_Lcom_raquo_airstream_web_DomEventStream$, "com.raquo.airstream.web.DomEventStream$", ({
  e6: 1
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
  this.nc = null;
  this.nb = null;
  this.nd = null;
  this.nc = maybeStorage;
  this.nb = key;
  this.nd = syncOwner;
}
$p = $c_Lcom_raquo_airstream_web_WebStorageBuilder.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_web_WebStorageBuilder;
/** @constructor */
function $h_Lcom_raquo_airstream_web_WebStorageBuilder() {
}
$h_Lcom_raquo_airstream_web_WebStorageBuilder.prototype = $p;
$p.vb = (function(default$1) {
  return this.lT(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x) => x)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => new $c_s_util_Success(_$1))), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => new $c_s_util_Success(default$1.J()))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$2, _$3) => (_$2 === _$3))));
});
$p.ss = (function(default$1) {
  return this.lT(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => ("" + (!(!_$4))))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((str) => {
    try {
      return new $c_s_util_Success($m_sc_StringOps$().ve(str, str));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      if ($m_s_util_control_NonFatal$().cF(e$2)) {
        return new $c_s_util_Failure(e$2);
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ai : e$2);
    }
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => new $c_s_util_Success(default$1.J()))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$5, _$6) => ((!(!_$5)) === (!(!_$6))))));
});
$p.tT = (function(default$1) {
  return this.lT(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$7) => ("" + (_$7 | 0)))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((str) => {
    try {
      return new $c_s_util_Success($m_jl_Integer$().lG(str, 10));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      if ($m_s_util_control_NonFatal$().cF(e$2)) {
        return new $c_s_util_Failure(e$2);
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ai : e$2);
    }
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => new $c_s_util_Success(default$1.J()))), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$8, _$9) => ((_$8 | 0) === (_$9 | 0)))));
});
$p.lT = (function(encode, decode, default$1, syncDistinctByFn) {
  var storageVar = new $c_Lcom_raquo_airstream_web_WebStorageVar(this.nc, this.nb, encode, decode, default$1, syncDistinctByFn);
  var this$1 = this.nd;
  if ((!this$1.c())) {
    storageVar.v9(this$1.H());
  }
  return storageVar;
});
var $d_Lcom_raquo_airstream_web_WebStorageBuilder = new $TypeData().i($c_Lcom_raquo_airstream_web_WebStorageBuilder, "com.raquo.airstream.web.WebStorageBuilder", ({
  e7: 1
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
$p.lv = (function(key, syncOwner) {
  return new $c_Lcom_raquo_airstream_web_WebStorageBuilder(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    try {
      var $x_1 = new $c_s_util_Success(window.localStorage);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      matchEnd8: {
        var $x_1;
        if ($m_s_util_control_NonFatal$().cF(e$2)) {
          var $x_1 = new $c_s_util_Failure(e$2);
          break matchEnd8;
        }
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ai : e$2);
      }
    }
    return $x_1.rp();
  })), key, syncOwner);
});
var $d_Lcom_raquo_airstream_web_WebStorageVar$ = new $TypeData().i($c_Lcom_raquo_airstream_web_WebStorageVar$, "com.raquo.airstream.web.WebStorageVar$", ({
  e9: 1
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
$p.bA = (function(items) {
  return [...$m_sjsr_Compat$().vg(items)];
});
var $d_Lcom_raquo_ew_JsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$, "com.raquo.ew.JsArray$", ({
  eb: 1
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
$p.tN = (function(this$, item, fromIndex) {
  return ((this$.indexOf(item, fromIndex) | 0) !== (-1));
});
$p.tn = (function(this$, cb) {
  var i = 0;
  var len = (this$.length | 0);
  while ((i < len)) {
    cb(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_Lcom_raquo_ew_JsArray$RichJsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$RichJsArray$, "com.raquo.ew.JsArray$RichJsArray$", ({
  ec: 1
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
  this.nk = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.sZ($m_Lcom_raquo_laminar_api_package$().y.v6().v7());
  this.nk = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.sf = (function(parent, child) {
  try {
    parent.appendChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ai instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ai : e$2);
  }
});
$p.uF = (function(parent, child) {
  try {
    parent.removeChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ai instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ai : e$2);
  }
});
$p.tS = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ai instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ai : e$2);
  }
});
$p.tR = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild.nextSibling);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ai instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ai : e$2);
  }
});
$p.tY = (function(node, ancestor) {
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
$p.s2 = (function(element, listener) {
  element.addEventListener(listener.fF.eS.gP, listener.jR, listener.jS);
});
$p.uG = (function(element, listener) {
  element.removeEventListener(listener.fF.eS.gP, listener.jR, listener.jS);
});
$p.sY = (function(tag) {
  return document.createElement(tag.jZ);
});
$p.tA = (function(element, attr) {
  var x = this.tB(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.jL.l3(x));
});
$p.tB = (function(element, attr) {
  var domValue = element.bx.getAttributeNS(null, attr.gQ);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.rk = (function(element, attr, value) {
  this.uW(element, attr, attr.jL.hv(value));
});
$p.uW = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.uH(element, attr);
  } else {
    element.bx.setAttribute(attr.gQ, domValue);
  }
});
$p.uH = (function(element, attr) {
  element.bx.removeAttribute(attr.gQ);
});
$p.tC = (function(element, prop) {
  return element.bx[prop.du];
});
$p.rl = (function(element, prop, value) {
  this.rm(element, prop, prop.jM.hv(value));
});
$p.rm = (function(element, prop, value) {
  element.bx[prop.du] = value;
});
$p.uX = (function(element, styleProp, value) {
  var ref = element.bx;
  var styleCssName = styleProp.fD;
  var prefixes = styleProp.fE;
  var styleValue = ((value === null) ? null : value);
  if ((styleValue === null)) {
    prefixes.S(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((prefix) => ref.style.removeProperty((("" + prefix) + styleCssName)))));
    ref.style.removeProperty(styleCssName);
  } else {
    prefixes.S(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((prefix$2) => {
      var \u03b41$ = ref.style;
      \u03b41$.setProperty((("" + prefix$2) + styleCssName), styleValue);
    })));
    var \u03b42$ = ref.style;
    \u03b42$.setProperty(styleCssName, styleValue);
  }
});
$p.uV = (function(element, style, value) {
  var ref = element.bx;
  var styleCssName = style.fD;
  var prefixes = style.fE;
  var styleValue = ((value === null) ? null : $dp_toString__T(value));
  if ((styleValue === null)) {
    prefixes.S(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((prefix) => ref.style.removeProperty((("" + prefix) + styleCssName)))));
    ref.style.removeProperty(styleCssName);
  } else {
    prefixes.S(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((prefix$2) => {
      var \u03b41$ = ref.style;
      \u03b41$.setProperty((("" + prefix$2) + styleCssName), styleValue);
    })));
    var \u03b42$ = ref.style;
    \u03b42$.setProperty(styleCssName, styleValue);
  }
});
$p.sZ = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.oy);
});
$p.tF = (function(element, attr) {
  var x = this.tG(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.jN.l3(x));
});
$p.tG = (function(element, attr) {
  var $x_2 = element.lH();
  var this$2 = attr.i9;
  var $x_1 = $x_2.getAttributeNS((this$2.c() ? null : this$2.H()), attr.jO);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.v0 = (function(element, attr, value) {
  this.v1(element, attr, attr.jN.hv(value));
});
$p.v1 = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.uJ(element, attr);
  } else {
    var this$1 = attr.i9;
    if (this$1.c()) {
      element.lH().setAttribute(attr.i8, domValue);
    } else {
      var x0 = this$1.H();
      element.lH().setAttributeNS(x0, attr.i8, domValue);
    }
  }
});
$p.uJ = (function(element, attr) {
  var $x_1 = element.lH();
  var this$2 = attr.i9;
  $x_1.removeAttributeNS((this$2.c() ? null : this$2.H()), attr.jO);
});
$p.sX = (function(text) {
  return document.createComment(text);
});
$p.t0 = (function(text) {
  return document.createTextNode(text);
});
$p.tW = (function(element) {
  return $m_sc_StringOps$().sD(element.tagName, 45);
});
$p.t3 = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.qn(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.qn = (function(node) {
  if ((!(!(node instanceof HTMLElement)))) {
    var id = node.id;
    if ((id !== "")) {
      var suffixStr = ("#" + id);
    } else {
      var classes = node.className;
      var suffixStr = ((classes !== "") ? ("." + classes.replace(this.nk, ".")) : "");
    }
    return (node.tagName.toLowerCase() + suffixStr);
  } else {
    return node.nodeName;
  }
});
$p.t2 = (function(node) {
  return ((!(!(node instanceof Element))) ? node.outerHTML : ((!(!(node instanceof Text))) ? (("Text(" + node.textContent) + ")") : ((!(!(node instanceof Comment))) ? (("Comment(" + node.textContent) + ")") : ((node === null) ? "<null>" : (("OtherNode(" + $dp_toString__T(node)) + ")")))));
});
var $d_Lcom_raquo_laminar_DomApi$ = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$, "com.raquo.laminar.DomApi$", ({
  ed: 1
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
  this.jG = null;
  this.nl = null;
  this.jF = null;
  this.jG = seq;
  this.nl = scalaArray;
  this.jF = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.S = (function(f) {
  if ((this.jG !== null)) {
    this.jG.S(f);
  } else if ((this.jF !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().tn(this.jF, $m_sjs_js_Any$().qH(f));
  } else {
    $m_sc_ArrayOps$().to(this.nl, f);
  }
});
var $d_Lcom_raquo_laminar_Seq = new $TypeData().i($c_Lcom_raquo_laminar_Seq, "com.raquo.laminar.Seq", ({
  ee: 1
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
  ef: 1
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
  $thiz.rx = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    _$1.oi.bx.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.cM.ce.c()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((c) => {
      if (ignoreNextActivation.iv) {
        var ev$5 = false;
        ignoreNextActivation.iv = ev$5;
      } else {
        fn.b(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().ro(element.cM, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((owner) => {
      activate.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element$2, owner));
    }))(element)), false);
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.fB = null;
  this.jH = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.fB = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  this.jH = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
}
$p = $c_Lcom_raquo_laminar_codecs_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$() {
}
$h_Lcom_raquo_laminar_codecs_package$.prototype = $p;
var $d_Lcom_raquo_laminar_codecs_package$ = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$, "com.raquo.laminar.codecs.package$", ({
  ep: 1
}));
var $n_Lcom_raquo_laminar_codecs_package$;
function $m_Lcom_raquo_laminar_codecs_package$() {
  if ((!$n_Lcom_raquo_laminar_codecs_package$)) {
    $n_Lcom_raquo_laminar_codecs_package$ = new $c_Lcom_raquo_laminar_codecs_package$();
  }
  return $n_Lcom_raquo_laminar_codecs_package$;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V($thiz) {
  $thiz.nz = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
  $thiz.eR = $thiz.nz;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().fB);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.gQ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().tA(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().rk(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.rw = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().fB, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.i8, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().tF(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().v0(el$2, attr, value);
  })), separator);
}
/** @constructor */
function $c_Lcom_raquo_laminar_inputs_InputController$() {
  this.ob = null;
  $n_Lcom_raquo_laminar_inputs_InputController$ = this;
  $m_Lcom_raquo_laminar_api_package$().y.ru();
  $m_Lcom_raquo_ew_JsArray$().bA($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().y.lC()])));
  $m_Lcom_raquo_laminar_api_package$().y.ru();
  $m_Lcom_raquo_ew_JsArray$().bA($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().y.lC(), $m_Lcom_raquo_laminar_api_package$().y.uv()])));
  $m_Lcom_raquo_laminar_api_package$().y.sw();
  $m_Lcom_raquo_ew_JsArray$().bA($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().y.lC(), $m_Lcom_raquo_laminar_api_package$().y.j0()])));
  this.ob = $m_Lcom_raquo_ew_JsArray$().bA($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["value", "checked"])));
}
$p = $c_Lcom_raquo_laminar_inputs_InputController$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inputs_InputController$;
/** @constructor */
function $h_Lcom_raquo_laminar_inputs_InputController$() {
}
$h_Lcom_raquo_laminar_inputs_InputController$.prototype = $p;
var $d_Lcom_raquo_laminar_inputs_InputController$ = new $TypeData().i($c_Lcom_raquo_laminar_inputs_InputController$, "com.raquo.laminar.inputs.InputController$", ({
  eH: 1
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
  var prevChildRef = new $c_sr_ObjectRef(sentinelNode.aL().nextSibling);
  var lastIndexChild = new $c_sr_ObjectRef(sentinelNode);
  nextChildren.S(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextChild) => {
    if ((currentChildrenCount.aS <= index.aS)) {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().ll(parentNode, nextChild, lastIndexChild.I, hooks);
      var ev$2 = nextChild.aL();
      prevChildRef.I = ev$2;
      ev$2 = null;
      var ev$3 = ((1 + currentChildrenCount.aS) | 0);
      currentChildrenCount.aS = ev$3;
    } else if ((!$m_sr_BoxesRunTime$().k(nextChild.aL(), prevChildRef.I))) {
      if ((!(!(!prevChildren.has(nextChild.aL()))))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().ll(parentNode, nextChild, lastIndexChild.I, hooks);
        var ev$4 = nextChild.aL();
        prevChildRef.I = ev$4;
        ev$4 = null;
        var ev$5 = ((1 + currentChildrenCount.aS) | 0);
        currentChildrenCount.aS = ev$5;
      } else {
        while (((!$m_sr_BoxesRunTime$().k(nextChild.aL(), prevChildRef.I)) && (!$p_Lcom_raquo_laminar_inserters_ChildrenInserter$__containsRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Z($thiz, nextChildrenMap, prevChildRef.I)))) {
          var nextPrevChildRef = prevChildRef.I.nextSibling;
          $m_Lcom_raquo_laminar_nodes_ParentNode$().ra(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.I));
          var ev$6 = nextPrevChildRef;
          prevChildRef.I = ev$6;
          ev$6 = null;
          var ev$7 = (((-1) + currentChildrenCount.aS) | 0);
          currentChildrenCount.aS = ev$7;
        }
        if ((!$m_sr_BoxesRunTime$().k(nextChild.aL(), prevChildRef.I))) {
          $m_Lcom_raquo_laminar_nodes_ParentNode$().ll(parentNode, nextChild, lastIndexChild.I, hooks);
          var ev$8 = nextChild.aL();
          prevChildRef.I = ev$8;
          ev$8 = null;
        }
      }
    }
    if ((prevChildRef.I.nextSibling === null)) {
      var ev$9 = ((1 + index.aS) | 0);
      currentChildrenCount.aS = ev$9;
    } else {
      var ev$10 = prevChildRef.I.nextSibling;
      prevChildRef.I = ev$10;
      ev$10 = null;
    }
    var ev$11 = nextChild;
    lastIndexChild.I = ev$11;
    ev$11 = null;
    var ev$12 = ((1 + index.aS) | 0);
    index.aS = ev$12;
  })));
  while ((index.aS < currentChildrenCount.aS)) {
    var nextPrevChildRef$1 = prevChildRef.I.nextSibling;
    $m_Lcom_raquo_laminar_nodes_ParentNode$().ra(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.I));
    var ev$13 = nextPrevChildRef$1;
    prevChildRef.I = ev$13;
    ev$13 = null;
    var ev$14 = (((-1) + currentChildrenCount.aS) | 0);
    currentChildrenCount.aS = ev$14;
  }
  return currentChildrenCount.aS;
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
$p.si = (function(childrenSource, renderableSeq, renderableNode, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((ctx, owner, hooks) => {
    if ((!ctx.gM)) {
      ctx.qB();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childrenSource, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx$2) => ((components) => {
      this.v8(($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(components, null, null)), ctx$2, hooks);
    }))(ctx)), owner);
  })), initialHooks);
});
$p.v8 = (function(newChildren, ctx, hooks) {
  if ((!ctx.gM)) {
    ctx.qB();
  }
  var newChildrenMap = $m_Lcom_raquo_laminar_inserters_InsertContext$().ut(newChildren);
  ctx.gK = $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__updateChildren__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_Seq__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__I__O__I(this, ctx.fC, newChildren, newChildrenMap, ctx.i6, ctx.gL, ctx.gK, hooks);
  ctx.fC = newChildrenMap;
});
var $d_Lcom_raquo_laminar_inserters_ChildrenInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildrenInserter$, "com.raquo.laminar.inserters.ChildrenInserter$", ({
  eI: 1
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
  this.i6 = null;
  this.gL = null;
  this.gM = false;
  this.gK = 0;
  this.fC = null;
  this.i6 = parentNode;
  this.gL = sentinelNode;
  this.gM = strictMode;
  this.gK = extraNodeCount;
  this.fC = extraNodesMap;
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext.prototype = $p;
$p.qB = (function() {
  if ((this.gM || (this.gK !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().t2(this.i6.bx)));
  }
  if ((this.fC === null)) {
    this.fC = new Map();
  }
  if ((!(!(!(this.gL.aL() instanceof Comment))))) {
    var contentNode = this.gL;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().tS(this.i6.bx, newSentinelNode.jT, contentNode.aL());
    this.gL = newSentinelNode;
    this.gK = 1;
    this.fC.set(contentNode.aL(), contentNode);
  }
  this.gM = true;
});
var $d_Lcom_raquo_laminar_inserters_InsertContext = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext, "com.raquo.laminar.inserters.InsertContext", ({
  eL: 1
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
$p.uN = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().g7(parentNode, sentinelNode, hooks);
  return this.vl(parentNode, sentinelNode, strictMode);
});
$p.vl = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, 0, (strictMode ? new Map() : null));
});
$p.ut = (function(nodes) {
  var acc = new Map();
  nodes.S(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((node) => {
    acc.set(node.aL(), node);
  })));
  return acc;
});
var $d_Lcom_raquo_laminar_inserters_InsertContext$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext$, "com.raquo.laminar.inserters.InsertContext$", ({
  eM: 1
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
$p.r2 = (function(items, separator) {
  return ((items === "") ? $m_sci_Nil$() : $m_sci_Nil$().bR($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), items.split(separator).filter(((_$1) => (_$1 !== ""))))));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$, "com.raquo.laminar.keys.CompositeKey$", ({
  eP: 1
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
  this.eS = null;
  this.gO = false;
  this.i7 = false;
  this.gN = null;
  this.eS = eventProp;
  this.gO = shouldUseCapture;
  this.i7 = shouldBePassive;
  this.gN = processor;
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $p;
$p.ub = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.gN.b(ev);
    return (this$2.c() ? $m_s_None$() : new $c_s_Some((this$2.H(), value.J())));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.eS, this.gO, this.i7, newProcessor);
});
$p.qY = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.gN.b(ev);
    return (this$2.c() ? $m_s_None$() : new $c_s_Some((this$2.H(), value)));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.eS, this.gO, this.i7, newProcessor);
});
var $d_Lcom_raquo_laminar_keys_EventProcessor = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor, "com.raquo.laminar.keys.EventProcessor", ({
  eT: 1
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
$p.iP = (function(eventProp, shouldUseCapture, shouldBePassive) {
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$14) => new $c_s_Some(_$14))));
});
var $d_Lcom_raquo_laminar_keys_EventProcessor$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor$, "com.raquo.laminar.keys.EventProcessor$", ({
  eU: 1
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
  this.rz = null;
  this.rA = null;
  this.rB = null;
  this.rC = null;
  this.rz = "http://www.w3.org/2000/svg";
  this.rA = "http://www.w3.org/1999/xlink";
  this.rB = "http://www.w3.org/XML/1998/namespace";
  this.rC = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.ug = (function(namespace) {
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
  eY: 1
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
  this.oi = null;
  this.jP = null;
  this.oi = thisNode;
  this.jP = owner;
}
$p = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
}
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $p;
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().i($c_Lcom_raquo_laminar_lifecycle_MountContext, "com.raquo.laminar.lifecycle.MountContext", ({
  eZ: 1
}));
var $d_Lcom_raquo_laminar_modifiers_Modifier = new $TypeData().i(1, "com.raquo.laminar.modifiers.Modifier", ({
  Z: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$() {
  this.rD = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.rD = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_Modifier$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$, "com.raquo.laminar.modifiers.Modifier$", ({
  f4: 1
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
  this.or = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  this.or = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$, "com.raquo.laminar.modifiers.RenderableNode$", ({
  f8: 1
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
  this.eb = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableText$ = this;
  this.eb = new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x) => x)), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => ("" + (_$1 | 0)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => ("" + (+_$2)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => ("" + (!(!_$3))))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => _$4.vc())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableText$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$, "com.raquo.laminar.modifiers.RenderableText$", ({
  fd: 1
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
$p.g7 = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.hO(nextParent);
  if ((hooks !== (void 0))) {
    hooks.ux(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().sf(parent.aL(), child.aL());
  if (appended) {
    child.hI(nextParent);
  }
  return appended;
});
$p.ra = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().k(child.aL().parentNode, parent.aL())) {
    child.hO($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().uF(parent.aL(), child.aL());
    child.hI($m_s_None$());
  }
  return removed;
});
$p.ll = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.hO(nextParent);
  if ((hooks !== (void 0))) {
    hooks.ux(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().tR(parent.aL(), newChild.aL(), referenceChild.aL());
  newChild.hI(nextParent);
  return inserted;
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ParentNode$, "com.raquo.laminar.nodes.ParentNode$", ({
  fg: 1
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
$p.vk = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().hM(element.cM, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$, "com.raquo.laminar.nodes.ReactiveElement$", ({
  fi: 1
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
  fm: 1
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
  this.rE = false;
  this.gS = null;
  this.fG = null;
  this.k3 = null;
  this.k2 = false;
  this.oz = 0;
  this.oA = 0;
  this.rF = null;
  $n_jl_FloatingPointBits$ = this;
  this.rE = true;
  this.gS = new ArrayBuffer(8);
  this.fG = new Int32Array(this.gS, 0, 2);
  new Float32Array(this.gS, 0, 2);
  this.k3 = new Float64Array(this.gS, 0, 1);
  this.fG[0] = 16909060;
  this.k2 = ((new Int8Array(this.gS, 0, 8)[0] | 0) === 1);
  this.oz = (this.k2 ? 0 : 1);
  this.oA = (this.k2 ? 1 : 0);
  this.rF = null;
}
$p = $c_jl_FloatingPointBits$.prototype = new $h_O();
$p.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
}
$h_jl_FloatingPointBits$.prototype = $p;
$p.lB = (function(value) {
  var iv = ((value | 0.0) | 0);
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv;
  } else {
    this.k3[0] = value;
    return ((this.fG[0] | 0) ^ (this.fG[1] | 0));
  }
});
$p.t7 = (function(value) {
  this.k3[0] = value;
  var value$1 = (this.fG[this.oz] | 0);
  return new $c_RTLong((this.fG[this.oA] | 0), value$1);
});
var $d_jl_FloatingPointBits$ = new $TypeData().i($c_jl_FloatingPointBits$, "java.lang.FloatingPointBits$", ({
  fB: 1
}));
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$();
  }
  return $n_jl_FloatingPointBits$;
}
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().d5("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
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
  var PatBC = $m_jl_StackTrace$StringRE$().d5("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().d5("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().d5("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().d5("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().d5("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
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
  if ((!(!$m_jl_Utils$Cache$().k8.call(dict, encodedName)))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = dict$1[encodedName];
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
  }
  var this$3 = base.split("_").join(".");
  return this$3.split("\uff3f").join("_");
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.cx) << 24) >> 24) === 0)) {
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
    $thiz.k5 = dict;
    $thiz.cx = (((1 | $thiz.cx) << 24) >> 24);
  }
  return $thiz.k5;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.cx) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.k5);
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.cx) << 24) >> 24) === 0)) {
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
    $thiz.k6 = dict;
    $thiz.cx = (((2 | $thiz.cx) << 24) >> 24);
  }
  return $thiz.k6;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.cx) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.k6);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.cx) << 24) >> 24) === 0)) {
    $thiz.k4 = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.cx = (((4 | $thiz.cx) << 24) >> 24);
  }
  return $thiz.k4;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.cx) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.k4);
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
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().d5("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().cc("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().cc("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().cc("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().cc("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().cc("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().cc("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().cc("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().cc("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().cc("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().cc("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().cc("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().cc("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().cc("Line (\\d+).*script (?:in )?(\\S+)", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().cc("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().d5("^(.*)@(.+):(\\d+)$");
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
  var lineRE = $m_jl_StackTrace$StringRE$().d5("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
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
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().d5("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().d5("<anonymous function>"), "{anonymous}");
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
  this.k5 = null;
  this.k6 = null;
  this.k4 = null;
  this.cx = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.th = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  fK: 1
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
$p.d5 = (function(this$) {
  return new RegExp(this$);
});
$p.cc = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().i($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  fL: 1
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
  this.k7 = null;
  this.oB = null;
  $n_jl_System$SystemProperties$ = this;
  this.k7 = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.oB = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.lh = (function(key, default$1) {
  if ((this.k7 !== null)) {
    var dict = this.k7;
    return ((!(!$m_jl_Utils$Cache$().k8.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.oB.lh(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  fQ: 1
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
  this.k8 = null;
  $n_jl_Utils$Cache$ = this;
  this.k8 = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  fT: 1
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
$p.bW = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? array.a.length : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  fV: 1
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
$p.sq = (function(a, key) {
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
$p.qw = (function(a, b) {
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
    var lo = t.p;
    var hi = t.t;
    var i$2 = i;
    var t$1 = b.a[i$2];
    var lo$1 = t$1.p;
    var hi$1 = t$1.t;
    if ((!((lo === lo$1) && (hi === hi$1)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.iQ = (function(a, b) {
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
$p.qx = (function(a, b) {
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
$p.qt = (function(a, b) {
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
$p.qs = (function(a, b) {
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
$p.qy = (function(a, b) {
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
$p.qu = (function(a, b) {
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
$p.qv = (function(a, b) {
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
$p.ti = (function(a, value) {
  var toIndex = a.a.length;
  var i = 0;
  while ((i !== toIndex)) {
    var i$1 = i;
    a.a[i$1] = value;
    i = ((1 + i) | 0);
  }
});
$p.a9 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).C.Q().C.U(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.sW = (function(original, newLength, newType) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = newType.C.Q().C.U(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.sO = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_B(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.sU = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_S(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.sS = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_I(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.sT = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_J(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.sP = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_C(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.sR = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_F(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.sQ = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_D(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.sV = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_Z(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.aF = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).C.Q().C.U(retLength);
  original.q(from, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  fY: 1
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
  this.oK = null;
  this.oJ = null;
  $n_ju_Formatter$ = this;
  this.oK = new RegExp("(?:(\\d+)\\$)?([-#+ 0,\\(<]*)(\\d+)?(?:\\.(\\d+))?[%A-Za-z]", "g");
  this.oJ = new $ac_I(new Int32Array([96, 126, 638, 770, 32, 256, 2, 126, (-1), (-1), (-1), (-1), (-1), (-1), 800, (-1), (-1), (-1), 124, (-1), (-1), (-1), (-1), 544, (-1), (-1)]));
}
$p = $c_ju_Formatter$.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$;
/** @constructor */
function $h_ju_Formatter$() {
}
$h_ju_Formatter$.prototype = $p;
$p.lr = (function(count) {
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
$p.u1 = (function(x) {
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
$p.u0 = (function(x) {
  var unscaledValueWithSign = x.w8().w();
  if ((unscaledValueWithSign === "0")) {
    return new $c_ju_Formatter$Decimal(false, "0", 0);
  } else {
    var negative = (unscaledValueWithSign.charCodeAt(0) === 45);
    return new $c_ju_Formatter$Decimal(negative, (negative ? unscaledValueWithSign.substring(1) : unscaledValueWithSign), x.w0());
  }
});
var $d_ju_Formatter$ = new $TypeData().i($c_ju_Formatter$, "java.util.Formatter$", ({
  g3: 1
}));
var $n_ju_Formatter$;
function $m_ju_Formatter$() {
  if ((!$n_ju_Formatter$)) {
    $n_ju_Formatter$ = new $c_ju_Formatter$();
  }
  return $n_ju_Formatter$;
}
function $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal($thiz, roundingPos) {
  var digits = $thiz.dw;
  var digitsLen = digits.length;
  if ((roundingPos < 0)) {
    return new $c_ju_Formatter$Decimal($thiz.dv, "0", 0);
  } else if ((roundingPos >= digitsLen)) {
    return $thiz;
  } else if ((digits.charCodeAt(roundingPos) < 53)) {
    return ((roundingPos === 0) ? new $c_ju_Formatter$Decimal($thiz.dv, "0", 0) : new $c_ju_Formatter$Decimal($thiz.dv, digits.substring(0, roundingPos), (($thiz.da - ((digitsLen - roundingPos) | 0)) | 0)));
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
    var newScale = (($thiz.da - ((digitsLen - pos) | 0)) | 0);
    return new $c_ju_Formatter$Decimal($thiz.dv, newUnscaledValue, newScale);
  }
}
/** @constructor */
function $c_ju_Formatter$Decimal(negative, unscaledValue, scale) {
  this.dv = false;
  this.dw = null;
  this.da = 0;
  this.dv = negative;
  this.dw = unscaledValue;
  this.da = scale;
}
$p = $c_ju_Formatter$Decimal.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$Decimal;
/** @constructor */
function $h_ju_Formatter$Decimal() {
}
$h_ju_Formatter$Decimal.prototype = $p;
$p.qT = (function() {
  return (this.dw === "0");
});
$p.rf = (function(precision) {
  $m_ju_Formatter$();
  if ((!(precision > 0))) {
    throw new $c_jl_AssertionError("Decimal.round() called with non-positive precision");
  }
  return $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, precision);
});
$p.uZ = (function(newScale) {
  var roundingPos = ((((this.dw.length + newScale) | 0) - this.da) | 0);
  var rounded = $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, roundingPos);
  $m_ju_Formatter$();
  if ((!(rounded.qT() || (rounded.da <= newScale)))) {
    throw new $c_jl_AssertionError("roundAtPos returned a non-zero value with a scale too large");
  }
  return ((rounded.qT() || (rounded.da === newScale)) ? rounded : new $c_ju_Formatter$Decimal(this.dv, (("" + rounded.dw) + $m_ju_Formatter$().lr(((newScale - rounded.da) | 0))), newScale));
});
$p.w = (function() {
  return (((((("Decimal(" + this.dv) + ", ") + this.dw) + ", ") + this.da) + ")");
});
var $d_ju_Formatter$Decimal = new $TypeData().i($c_ju_Formatter$Decimal, "java.util.Formatter$Decimal", ({
  g4: 1
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
  this.p = 0;
  this.t = 0;
  this.p = lo;
  this.t = hi;
}
$p = $c_RTLong.prototype = new $h_O();
$p.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $p;
$p.n = (function(that) {
  return ((that instanceof $c_RTLong) && ((this.p === that.p) && (this.t === that.t)));
});
$p.u = (function() {
  return (this.p ^ this.t);
});
$p.w = (function() {
  return $m_RTLong$().lD(this.p, this.t);
});
$p.w4 = (function() {
  return this.p;
});
$p.w3 = (function() {
  return $m_RTLong$().r8(this.p, this.t);
});
$p.w2 = (function() {
  return $m_RTLong$().hF(this.p, this.t);
});
$p.vK = (function() {
  return ((this.p << 24) >> 24);
});
$p.w1 = (function() {
  return ((this.p << 16) >> 16);
});
$p.vV = (function() {
  return this.p;
});
$p.vW = (function() {
  return this;
});
$p.vP = (function() {
  return $m_RTLong$().r8(this.p, this.t);
});
$p.vN = (function() {
  return $m_RTLong$().hF(this.p, this.t);
});
$p.vM = (function(that) {
  return $m_RTLong$().r6(this.p, this.t, that.p, that.t);
});
$p.vL = (function(that) {
  return $m_RTLong$().r6(this.p, this.t, that.p, that.t);
});
$p.vO = (function(b) {
  return ((this.p === b.p) && (this.t === b.t));
});
$p.vY = (function(b) {
  return (!((this.p === b.p) && (this.t === b.t)));
});
$p.vB = (function(b) {
  var ahi = this.t;
  var bhi = b.t;
  return ((ahi === bhi) ? (((-2147483648) ^ this.p) < ((-2147483648) ^ b.p)) : (ahi < bhi));
});
$p.vC = (function(b) {
  var ahi = this.t;
  var bhi = b.t;
  return ((ahi === bhi) ? (((-2147483648) ^ this.p) <= ((-2147483648) ^ b.p)) : (ahi < bhi));
});
$p.vx = (function(b) {
  var ahi = this.t;
  var bhi = b.t;
  return ((ahi === bhi) ? (((-2147483648) ^ this.p) > ((-2147483648) ^ b.p)) : (ahi > bhi));
});
$p.vy = (function(b) {
  var ahi = this.t;
  var bhi = b.t;
  return ((ahi === bhi) ? (((-2147483648) ^ this.p) >= ((-2147483648) ^ b.p)) : (ahi > bhi));
});
$p.w6 = (function() {
  return new $c_RTLong((~this.p), (~this.t));
});
$p.vv = (function(b) {
  return new $c_RTLong((this.p | b.p), (this.t | b.t));
});
$p.vu = (function(b) {
  return new $c_RTLong((this.p & b.p), (this.t & b.t));
});
$p.vI = (function(b) {
  return new $c_RTLong((this.p ^ b.p), (this.t ^ b.t));
});
$p.vD = (function(n) {
  var lo = this.p;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.t << n)) : (lo << n)));
});
$p.vA = (function(n) {
  var hi = this.t;
  return new $c_RTLong((((32 & n) === 0) ? (((this.p >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
});
$p.vz = (function(n) {
  var hi = this.t;
  return new $c_RTLong((((32 & n) === 0) ? (((this.p >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
});
$p.w5 = (function() {
  var lo = this.p;
  var hi = this.t;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)));
});
$p.vG = (function(b) {
  var alo = this.p;
  var ahi = this.t;
  var bhi = b.t;
  var lo = ((alo + b.p) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)));
});
$p.vE = (function(b) {
  var alo = this.p;
  var ahi = this.t;
  var bhi = b.t;
  var lo = ((alo - b.p) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)));
});
$p.vH = (function(b) {
  var alo = this.p;
  var blo = b.p;
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
$p.vw = (function(b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.t5(this.p, this.t, b.p, b.t), this$1.ak);
});
$p.vF = (function(b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.uE(this.p, this.t, b.p, b.t), this$1.ak);
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
      $thiz.ak = (((rDouble / 4.294967296E9) | 0.0) | 0);
      return ((rDouble | 0.0) | 0);
    } else {
      $thiz.ak = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - (Math.clz32(blo) | 0)) | 0);
    $thiz.ak = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - (Math.clz32(bhi) | 0)) | 0);
    $thiz.ak = 0;
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
      $thiz.ak = (((rDouble / 4.294967296E9) | 0.0) | 0);
      return ((rDouble | 0.0) | 0);
    } else {
      $thiz.ak = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.ak = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.ak = (ahi & (((-1) + bhi) | 0));
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
    $thiz.ak = quotHi;
    return quotLo;
  } else if ((ask === 1)) {
    $thiz.ak = remHi;
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
  this.ak = 0;
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.lD = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)));
});
$p.hF = (function(lo, hi) {
  return ((hi < 0) ? (-((4.294967296E9 * (+(((lo !== 0) ? (~hi) : ((-hi) | 0)) >>> 0.0))) + (+(((-lo) | 0) >>> 0.0)))) : ((4.294967296E9 * hi) + (+(lo >>> 0.0))));
});
$p.r8 = (function(lo, hi) {
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
$p.vS = (function(value) {
  return new $c_RTLong(value, (value >> 31));
});
$p.vR = (function(value) {
  return new $c_RTLong(this.r7(value), this.ak);
});
$p.r7 = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.ak = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.ak = 2147483647;
    return (-1);
  } else {
    var rawLo = ((value | 0.0) | 0);
    var rawHi = (((value / 4.294967296E9) | 0.0) | 0);
    this.ak = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$p.r6 = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$p.t5 = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.ak = 0;
        return (-2147483648);
      } else {
        var lo = $intDiv(alo, blo);
        this.ak = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.ak = (-1);
      return (-1);
    } else {
      this.ak = 0;
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
      var hi$2 = this.ak;
      this.ak = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    }
  }
});
$p.uE = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.ak = (lo >> 31);
        return lo;
      } else {
        this.ak = 0;
        return 0;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.ak = 0;
      return 0;
    } else {
      this.ak = ahi;
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
      var hi$2 = this.ak;
      this.ak = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    } else {
      return absRLo;
    }
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  gi: 1
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
  this.gU = null;
  this.ka = null;
  $n_s_Array$EmptyArrays$ = this;
  this.gU = new $ac_I(0);
  this.ka = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  go: 1
}));
var $n_s_Array$EmptyArrays$;
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$();
  }
  return $n_s_Array$EmptyArrays$;
}
var $d_F0 = new $TypeData().i(1, "scala.Function0", ({
  b3: 1
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
  this.oV = null;
  this.rG = null;
  this.ie = null;
  $n_s_PartialFunction$ = this;
  this.oV = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2$2) => $m_s_PartialFunction$().oV));
  this.rG = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$3$2$2) => false));
  this.ie = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  gw: 1
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
  this.p0 = null;
  $n_sc_ArrayOps$ = this;
  this.p0 = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_ArrayOps$().p0));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.to = (function(this$, f) {
  var len = $m_jl_reflect_Array$().bW(this$);
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
  gC: 1
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
$p.bi = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0));
});
var $d_sc_Hashing$ = new $TypeData().i($c_sc_Hashing$, "scala.collection.Hashing$", ({
  gO: 1
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
    f.b(it.e());
  }
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $thiz.f();
  while ((res && it.l())) {
    res = (!(!p.b(it.e())));
  }
  return res;
}
function $f_sc_IterableOnceOps__exists__F1__Z($thiz, p) {
  var res = false;
  var it = $thiz.f();
  while (((!res) && it.l())) {
    res = (!(!p.b(it.e())));
  }
  return res;
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  switch ($thiz.s()) {
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
  var y = (($m_jl_reflect_Array$().bW(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.l())) {
    $m_sr_ScalaRunTime$().cT(xs, i, it.e());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option($thiz, pf) {
  var sentinel = new $c_sc_IterableOnceOps$$anon$1($thiz);
  var it = $thiz.f();
  while (it.l()) {
    var x = pf.bF(it.e(), sentinel);
    if ((x !== sentinel)) {
      return new $c_s_Some(x);
    }
  }
  return $m_s_None$();
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.s() === 0) ? (("" + start) + end) : $thiz.eD($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).b7.r);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.b7;
  if ((start.length !== 0)) {
    jsb.r = (("" + jsb.r) + start);
  }
  var it = $thiz.f();
  if (it.l()) {
    var obj = it.e();
    jsb.r = (("" + jsb.r) + obj);
    while (it.l()) {
      jsb.r = (("" + jsb.r) + sep);
      var obj$1 = it.e();
      jsb.r = (("" + jsb.r) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.r = (("" + jsb.r) + end);
  }
  return b;
}
function $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O($thiz, evidence$2) {
  if (($thiz.s() >= 0)) {
    var destination = evidence$2.bY($thiz.s());
    $thiz.bV(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$2.bc();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.f();
    while (it.l()) {
      var elem = it.e();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.C.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.C.r().w(jsElems);
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.p8 = null;
  this.gX = null;
  this.p8 = head;
  this.gX = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.tJ = (function() {
  return this.p8.J().f();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  h1: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.pb = null;
  $n_sc_StringOps$ = this;
  this.pb = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_StringOps$().pb));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.sD = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
$p.v3 = (function(this$, from, until) {
  var start = ((from > 0) ? from : 0);
  var that = this$.length;
  var end = ((until < that) ? until : that);
  return ((start >= end) ? "" : this$.substring(start, end));
});
$p.rn = (function(this$, marginChar) {
  var sb = $ct_jl_StringBuilder__I__(new $c_jl_StringBuilder(), this$.length);
  var this$3 = new $c_sc_StringOps$$anon$1(this$, false);
  while ((this$3.bk < this$3.eX)) {
    var x0 = this$3.r0();
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
    sb.r = (("" + sb.r) + stripped);
  }
  return sb.r;
});
$p.ve = (function(this$, s) {
  if ((s === null)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "For input string: \"null\"");
  } else {
    _return: {
      var len = s.length;
      if ((len === 4)) {
        var i = 0;
        while ((i !== len)) {
          if (($m_jl_Character$().j7($m_jl_Character$().j9(s.charCodeAt(i))) !== $m_jl_Character$().j7($m_jl_Character$().j9("true".charCodeAt(i))))) {
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
            if (($m_jl_Character$().j7($m_jl_Character$().j9(s.charCodeAt(i$1))) !== $m_jl_Character$().j7($m_jl_Character$().j9("false".charCodeAt(i$1))))) {
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
$p.vn = (function(this$, arg) {
  return (false ? arg.w7() : arg);
});
$p.tr = (function(this$, args) {
  return $m_jl_String$().tp(this$, args.L(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((arg$2$2) => $m_sc_StringOps$().vn(this$, arg$2$2)))).j6($m_s_reflect_ManifestFactory$ObjectManifest$()));
});
$p.tI = (function(this$) {
  if ((this$ === "")) {
    throw new $c_ju_NoSuchElementException("head of empty String");
  } else {
    return this$.charCodeAt(0);
  }
});
$p.qp = (function(this$, n) {
  var $x_1 = $m_sc_StringOps$();
  var y = this$.length;
  return $x_1.v3(this$, ((n < y) ? n : y), this$.length);
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  h9: 1
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
$p.hy = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  hh: 1
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
    return $m_jl_Integer$().lG($m_jl_System$SystemProperties$().lh("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10);
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
  this.pg = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  this.pg = $ps_sci_IndexedSeqDefaults$__liftedTree1$1__I();
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  hs: 1
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
  this.kx = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.l6 = (function() {
  var state = this.kx;
  if ((state === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "uninitialized");
  }
  return state.J();
});
$p.lk = (function(state) {
  if ((this.kx !== null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "already initialized");
  }
  this.kx = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  hw: 1
}));
/** @constructor */
function $c_sci_MapNode$() {
  this.pm = null;
  $n_sci_MapNode$ = this;
  this.pm = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  hP: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (((-1) + $m_jl_reflect_Array$().bW(as)) | 0)));
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
$p.j2 = (function(as, ix) {
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
$p.qR = (function(as, ix, elem) {
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
  aG: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.h9 = 0;
  $n_sci_Node$ = this;
  this.h9 = $doubleToInt((+Math.ceil(6.4)));
}
$p = $c_sci_Node$.prototype = new $h_O();
$p.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $p;
$p.cv = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.bP = (function(mask) {
  return (1 << mask);
});
$p.fl = (function(bitmap, bitpos) {
  return $m_jl_Integer$().bu((bitmap & (((-1) + bitpos) | 0)));
});
$p.bB = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.fl(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  hS: 1
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
  this.pr = null;
  $n_sci_SetNode$ = this;
  this.pr = new $c_sci_BitmapIndexedSetNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_SetNode$.prototype = new $h_O();
$p.constructor = $c_sci_SetNode$;
/** @constructor */
function $h_sci_SetNode$() {
}
$h_sci_SetNode$.prototype = $p;
var $d_sci_SetNode$ = new $TypeData().i($c_sci_SetNode$, "scala.collection.immutable.SetNode$", ({
  i6: 1
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
  this.kC = null;
  this.an = null;
  this.bp = null;
  this.cS = null;
  this.hc = null;
  this.kD = null;
  $n_sci_VectorStatics$ = this;
  this.kC = new $ac_O(0);
  this.an = new ($d_O.r().r().C)(0);
  this.bp = new ($d_O.r().r().r().C)(0);
  this.cS = new ($d_O.r().r().r().r().C)(0);
  this.hc = new ($d_O.r().r().r().r().r().C)(0);
  this.kD = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.ga = (function(a, elem) {
  var alen = a.a.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.q(0, ac, 0, alen);
  ac.a[alen] = elem;
  return ac;
});
$p.K = (function(a, elem) {
  var ac = $m_ju_Arrays$().a9(a, ((1 + a.a.length) | 0));
  ac.a[(((-1) + ac.a.length) | 0)] = elem;
  return ac;
});
$p.gb = (function(elem, a) {
  var ac = new $ac_O(((1 + a.a.length) | 0));
  var length = a.a.length;
  a.q(0, ac, 1, length);
  ac.a[0] = elem;
  return ac;
});
$p.D = (function(elem, a) {
  var ac = $objectGetClass(a).C.Q().C.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.q(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.l8 = (function(level, a, f) {
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
      this.l8(l, a.a[i], f);
      i = ((1 + i) | 0);
    }
  }
});
$p.cK = (function(a, f) {
  var i = 0;
  while ((i < a.a.length)) {
    var v1 = a.a[i];
    var v2 = f.b(v1);
    if ((!Object.is(v1, v2))) {
      return this.u8(a, f, i, v2);
    }
    i = ((1 + i) | 0);
  }
  return a;
});
$p.u8 = (function(a, f, at, v2) {
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
$p.aC = (function(n, a, f) {
  if ((n === 1)) {
    return this.cK(a, f);
  } else {
    var i = 0;
    while ((i < a.a.length)) {
      var v1 = a.a[i];
      var v2 = this.aC((((-1) + n) | 0), v1, f);
      if ((v1 !== v2)) {
        return this.u9(n, a, f, i, v2);
      }
      i = ((1 + i) | 0);
    }
    return a;
  }
});
$p.u9 = (function(n, a, f, at, v2) {
  var ac = $objectGetClass(a).C.Q().C.U(a.a.length);
  if ((at > 0)) {
    a.q(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = this.aC((((-1) + n) | 0), a.a[i], f);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.g6 = (function(suffix1, xs) {
  if ($is_sci_Iterable(xs)) {
    if ((xs.lN(((32 - suffix1.a.length) | 0)) <= 0)) {
      var x1$2 = xs.M();
      switch (x1$2) {
        case 0: {
          return null;
          break;
        }
        case 1: {
          return this.K(suffix1, xs.o());
          break;
        }
        default: {
          var suffix1b = $m_ju_Arrays$().a9(suffix1, ((suffix1.a.length + x1$2) | 0));
          xs.bV(suffix1b, suffix1.a.length, 2147483647);
          return suffix1b;
        }
      }
    } else {
      return null;
    }
  } else {
    var s = xs.s();
    if (((s > 0) && (s <= ((32 - suffix1.a.length) | 0)))) {
      var suffix1b$2 = $m_ju_Arrays$().a9(suffix1, ((suffix1.a.length + s) | 0));
      xs.f().bV(suffix1b$2, suffix1.a.length, 2147483647);
      return suffix1b$2;
    } else {
      return null;
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  ie: 1
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
  this.g1 = null;
  this.dT = 0;
  this.br = null;
  this.g1 = _key;
  this.dT = _hash;
  this.br = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.tk = (function(k, h) {
  var _$this = this;
  while (true) {
    if (((h === _$this.dT) && $m_sr_BoxesRunTime$().k(k, _$this.g1))) {
      return _$this;
    } else if (((_$this.br === null) || (_$this.dT > h))) {
      return null;
    } else {
      _$this = _$this.br;
    }
  }
});
$p.w = (function() {
  return ((((("Node(" + this.g1) + ", ") + this.dT) + ") -> ") + this.br);
});
var $d_scm_HashSet$Node = new $TypeData().i($c_scm_HashSet$Node, "scala.collection.mutable.HashSet$Node", ({
  iA: 1
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
$p.qg = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  iG: 1
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
  return ((x === y) || ($is_jl_Number(x) ? this.tf(x, y) : ((x instanceof $Char) ? this.td(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.tf = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.te(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.p;
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
$p.te = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      return (x2 === $m_RTLong$().hF(t.p, t.t));
    } else {
      return (false && yn.n(x2));
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.p;
    var hi$1 = t$1.t;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.p;
      var hi$2 = t$2.t;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return ($m_RTLong$().hF(lo$1, hi$1) === x3$3);
    } else {
      return (false && yn.n(new $c_RTLong(lo$1, hi$1)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.td = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $c_RTLong)) {
      var t = $uJ(y);
      var lo = t.p;
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
  jh: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  jn: 1
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
$p.fi = (function(xs, idx) {
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
$p.cT = (function(xs, idx, value) {
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
$p.g5 = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.bw(), (x.bb() + "("), ",", ")");
});
$p.qK = (function(xs) {
  return ((xs === null) ? null : $m_sci_ArraySeq$().hN(xs));
});
$p.A = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($m_sci_ArraySeq$()) : new $c_sci_ArraySeq$ofRef(xs)));
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  jp: 1
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
  var h = this.e3(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.e3 = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.F = (function(hash, length) {
  return this.sp((hash ^ length));
});
$p.sp = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.gk = (function(lv) {
  var lo = lv.p;
  var hi = lv.t;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$p.cV = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.r7(dv);
    var hi = this$1.ak;
    return (($m_RTLong$().hF(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().lB(dv));
  }
});
$p.P = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.cV((+x));
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    return this.gk(new $c_RTLong(t.p, t.t));
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.eH = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  jr: 1
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
  js: 1
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
$p.sl = (function(a) {
  return a;
});
var $d_sjs_js_defined$ = new $TypeData().i($c_sjs_js_defined$, "scala.scalajs.js.defined$", ({
  jy: 1
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
$p.v2 = (function(interval, body) {
  return setTimeout((() => {
    body.J();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  jz: 1
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
$p.vg = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.iA;
  } else {
    var result = [];
    seq.S(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  jK: 1
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
$p.cF = (function(t) {
  return (!(false || (false || (false || (false || false)))));
});
var $d_s_util_control_NonFatal$ = new $TypeData().i($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  jN: 1
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
  var h = this.e3(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.e3 = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.F = (function(hash, length) {
  return this.cd((hash ^ length));
});
$p.cd = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.rq = (function(x, y, seed) {
  var h = seed;
  h = this.i(h, $f_T__hashCode__I("Tuple2"));
  h = this.i(h, x);
  h = this.i(h, y);
  return this.F(h, 2);
});
$p.d4 = (function(x, seed, ignorePrefix) {
  var arr = x.b9();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.bb());
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.i(h, $f_T__hashCode__I(x.bb()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.i(h, $m_sr_Statics$().P(x.ba(i)));
      i = ((1 + i) | 0);
    }
    return this.F(h, arr);
  }
});
$p.hL = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.f();
  while (iterator.l()) {
    var x = iterator.e();
    var h = $m_sr_Statics$().P(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.i(h$2, a);
  h$2 = this.i(h$2, b);
  h$2 = this.e3(h$2, c);
  return this.F(h$2, n);
});
$p.uy = (function(xs, seed) {
  var it = xs.f();
  var h = seed;
  if ((!it.l())) {
    return this.F(h, 0);
  }
  var x0 = it.e();
  if ((!it.l())) {
    return this.F(this.i(h, $m_sr_Statics$().P(x0)), 1);
  }
  var x1 = it.e();
  var initial = $m_sr_Statics$().P(x0);
  h = this.i(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().P(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.l()) {
    h = this.i(h, prev);
    var hash = $m_sr_Statics$().P(it.e());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.i(h, hash);
      i = ((1 + i) | 0);
      while (it.l()) {
        h = this.i(h, $m_sr_Statics$().P(it.e()));
        i = ((1 + i) | 0);
      }
      return this.F(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.cd(this.i(this.i(h0, rangeDiff), prev));
});
$p.q3 = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().bW(a);
  switch (l) {
    case 0: {
      return this.F(h, 0);
      break;
    }
    case 1: {
      return this.F(this.i(h, $m_sr_Statics$().P($m_sr_ScalaRunTime$().fi(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().P($m_sr_ScalaRunTime$().fi(a, 0));
      h = this.i(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().P($m_sr_ScalaRunTime$().fi(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = $m_sr_Statics$().P($m_sr_ScalaRunTime$().fi(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, $m_sr_Statics$().P($m_sr_ScalaRunTime$().fi(a, i)));
            i = ((1 + i) | 0);
          }
          return this.F(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cd(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.uC = (function(start, step, last, seed) {
  return this.cd(this.i(this.i(this.i(seed, start), step), last));
});
$p.tO = (function(a, seed) {
  var h = seed;
  var l = a.m();
  switch (l) {
    case 0: {
      return this.F(h, 0);
      break;
    }
    case 1: {
      return this.F(this.i(h, $m_sr_Statics$().P(a.v(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().P(a.v(0));
      h = this.i(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().P(a.v(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = $m_sr_Statics$().P(a.v(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, $m_sr_Statics$().P(a.v(i)));
            i = ((1 + i) | 0);
          }
          return this.F(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cd(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.u3 = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.c())) {
    var head = elems.o();
    var tail = elems.x();
    var hash = $m_sr_Statics$().P(head);
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
  return ((rangeState === 2) ? this.uC(initial, rangeDiff, prev, seed) : this.F(h, n));
});
$p.qc = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.F(h, 0);
      break;
    }
    case 1: {
      return this.F(this.i(h, (a.a[0] ? 1231 : 1237)), 1);
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
          return this.F(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cd(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.q4 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.F(h, 0);
      break;
    }
    case 1: {
      return this.F(this.i(h, a.a[0]), 1);
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
          return this.F(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cd(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.q5 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.F(h, 0);
      break;
    }
    case 1: {
      return this.F(this.i(h, a.a[0]), 1);
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
          return this.F(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cd(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.q6 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.F(h, 0);
      break;
    }
    case 1: {
      return this.F(this.i(h, $m_sr_Statics$().cV(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().cV(a.a[0]);
      h = this.i(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().cV(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = $m_sr_Statics$().cV(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, $m_sr_Statics$().cV(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.F(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cd(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.q7 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.F(h, 0);
      break;
    }
    case 1: {
      return this.F(this.i(h, $m_sr_Statics$().cV(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().cV(a.a[0]);
      h = this.i(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().cV(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = $m_sr_Statics$().cV(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, $m_sr_Statics$().cV(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.F(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cd(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.q8 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.F(h, 0);
      break;
    }
    case 1: {
      return this.F(this.i(h, a.a[0]), 1);
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
          return this.F(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cd(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.q9 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.F(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var t = a.a[0];
      return this.F(this.i($x_1, $m_sr_Statics$().gk(new $c_RTLong(t.p, t.t))), 1);
      break;
    }
    default: {
      var t$1 = a.a[0];
      var initial = $m_sr_Statics$().gk(new $c_RTLong(t$1.p, t$1.t));
      h = this.i(h, initial);
      var h0 = h;
      var t$2 = a.a[1];
      var prev = $m_sr_Statics$().gk(new $c_RTLong(t$2.p, t$2.t));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var t$3 = a.a[i];
        var hash = $m_sr_Statics$().gk(new $c_RTLong(t$3.p, t$3.t));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var t$4 = a.a[i];
            h = this.i($x_2, $m_sr_Statics$().gk(new $c_RTLong(t$4.p, t$4.t)));
            i = ((1 + i) | 0);
          }
          return this.F(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cd(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.qa = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.F(h, 0);
      break;
    }
    case 1: {
      return this.F(this.i(h, a.a[0]), 1);
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
          return this.F(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cd(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.qb = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.F(h, 0);
      break;
    }
    case 1: {
      return this.F(this.i(h, 0), 1);
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
          return this.F(h, l);
        }
        prev = 0;
        i = ((1 + i) | 0);
      }
      return this.cd(this.i(this.i(h0, rangeDiff), prev));
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
var $d_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1 = new $TypeData().i($c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1, "app.tulz.tuplez.Composition_Pri0$$anon$1", ({
  dl: 1,
  dk: 1
}));
function $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.ct(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $thiz.hE(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.gp(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.gp(new $c_s_util_Failure(nextError), transaction);
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_ManualOwner() {
  this.mU = null;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
}
$p = $c_Lcom_raquo_airstream_ownership_ManualOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_ManualOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_ManualOwner() {
}
$h_Lcom_raquo_airstream_ownership_ManualOwner.prototype = $p;
$p.fr = (function() {
  return this.mU;
});
$p.l0 = (function(x$0) {
  this.mU = x$0;
});
$p.lE = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
});
$p.lu = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
var $d_Lcom_raquo_airstream_ownership_ManualOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_ManualOwner, "com.raquo.airstream.ownership.ManualOwner", ({
  dV: 1,
  aW: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.mW = null;
  this.mV = null;
  this.jx = false;
  this.mV = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.jx = false;
}
$p = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $p;
$p.fr = (function() {
  return this.mW;
});
$p.l0 = (function(x$0) {
  this.mW = x$0;
});
$p.lE = (function(subscription) {
  if (this.jx) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.mV.J();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.lu = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.jx = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  dW: 1,
  aW: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.nq = null;
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
$p.fr = (function() {
  return this.nq;
});
$p.l0 = (function(x$0) {
  this.nq = x$0;
});
$p.lu = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.lE = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
});
var $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$, "com.raquo.laminar.api.Laminar$unsafeWindowOwner$", ({
  ek: 1,
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
$p.hv = (function(scalaValue) {
  return scalaValue;
});
$p.l3 = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  eq: 1,
  by: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
  this.of = null;
  this.oh = null;
  this.og = null;
  this.jJ = null;
  this.of = getRawDomValue;
  this.oh = setRawDomValue;
  this.og = separator;
  this.jJ = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator);
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
$p.g3 = (function(items) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().y.rW(), $m_Lcom_raquo_laminar_keys_CompositeKey$().r2(items, this.og)));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey, "com.raquo.laminar.keys.CompositeKey", ({
  eO: 1,
  af: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator) {
  this.jK = null;
  this.jK = separator;
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = $p;
$p.qo = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().r2(domValue, this.jK);
});
$p.qr = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.jK, "");
});
$p.l3 = (function(domValue) {
  return this.qo(domValue);
});
$p.hv = (function(scalaValue) {
  return this.qr(scalaValue);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec, "com.raquo.laminar.keys.CompositeKey$CompositeCodec", ({
  eQ: 1,
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
  eS: 1,
  eR: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProp(name) {
  this.gP = null;
  this.gP = name;
}
$p = $c_Lcom_raquo_laminar_keys_EventProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProp() {
}
$h_Lcom_raquo_laminar_keys_EventProp.prototype = $p;
var $d_Lcom_raquo_laminar_keys_EventProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProp, "com.raquo.laminar.keys.EventProp", ({
  eV: 1,
  af: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlAttr(name, codec) {
  this.gQ = null;
  this.jL = null;
  this.gQ = name;
  this.jL = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $p;
$p.g2 = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().rk(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  eW: 1,
  af: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.du = null;
  this.jM = null;
  this.du = name;
  this.jM = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
$p.g2 = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, prop, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().rl(element, prop, value$2);
  })));
});
$p.iG = (function(values) {
  var update = ((this.du === "value") ? new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, nextValue, reason) => {
    var nextDomValue = this.jM.hv(nextValue);
    var x = $m_Lcom_raquo_laminar_DomApi$().tC(element, this);
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().k(nextDomValue, x)))) {
      $m_Lcom_raquo_laminar_DomApi$().rm(element, this, nextDomValue);
    }
  })) : new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element$2, nextValue$2, reason$2) => {
    $m_Lcom_raquo_laminar_DomApi$().rl(element$2, this, nextValue$2);
  })));
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.eJ(), update);
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
  this.jO = null;
  this.jN = null;
  this.i8 = null;
  this.i9 = null;
  this.jO = localName;
  this.jN = codec;
  var this$1 = (namespacePrefix.c() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.H() + ":") + localName)));
  this.i8 = (this$1.c() ? localName : this$1.H());
  this.i9 = (namespacePrefix.c() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().ug(namespacePrefix.H())));
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $p;
var $d_Lcom_raquo_laminar_keys_SvgAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr, "com.raquo.laminar.keys.SvgAttr", ({
  eX: 1,
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
$p.dk = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  f5: 1,
  Z: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2, outer) {
  this.oq = null;
  this.oq = f$2;
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
$p.dk = (function(element) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.oq.b(element);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bC || (!when))) {
    f();
  } else {
    this$2.bC = true;
    try {
      f();
    } finally {
      this$2.bC = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2, "com.raquo.laminar.modifiers.Modifier$$anon$2", ({
  f6: 1,
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
  f9: 1,
  f7: 1
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
  fb: 1,
  fa: 1
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
  this.os = null;
  this.os = render$2;
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
$p.so = (function(value) {
  return this.os.b(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  fe: 1,
  fc: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.qi(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().t3($thiz.aL(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.jZ = null;
  this.jZ = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.bE = (function(modifiers) {
  var element = this.st();
  modifiers.S(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((modifier) => {
    modifier.dk(element);
  })));
  return element;
});
$p.st = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().sY(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  fo: 1,
  bH: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.oy = null;
  this.oy = name;
}
$p = $c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $p;
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  fp: 1,
  bH: 1
}));
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.ib) << 24) >> 24) === 0)) {
    $thiz.k0 = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
    $thiz.ib = (((32 | $thiz.ib) << 24) >> 24);
  }
  return $thiz.k0;
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.ib) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.k0);
}
/** @constructor */
function $c_jl_Character$() {
  this.k0 = null;
  this.ib = 0;
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.j8 = (function(codePoint) {
  if ((!((codePoint >= 0) && (codePoint <= 1114111)))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.t4 = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))));
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0);
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0);
  } else {
    var p = $m_ju_Arrays$().sq($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
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
$p.j9 = (function(ch) {
  return (65535 & this.vi(ch));
});
$p.vi = (function(codePoint) {
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
        var this$1 = this.j8(codePoint);
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
$p.j7 = (function(ch) {
  return (65535 & this.vh(ch));
});
$p.vh = (function(codePoint) {
  if ((codePoint === 304)) {
    return 105;
  } else {
    var this$1 = this.j8(codePoint);
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
  fy: 1,
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
$p.lG = (function(s, radix) {
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
    var digit = $m_jl_Character$().t4(s.charCodeAt(i), radix);
    result = ((result * radix) + digit);
    if (((digit === (-1)) || (result > maxAbsValue))) {
      $ps_jl_Integer$__fail$1__T__E(s);
    }
    i = ((1 + i) | 0);
  }
  return (negative ? (((-result) | 0.0) | 0) : ((result | 0.0) | 0));
});
$p.bu = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  fC: 1,
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
$p.qU = (function(lo, hi) {
  if ((hi !== 0)) {
    var $x_1 = (+(hi >>> 0.0)).toString(16);
    var s = (+(lo >>> 0.0)).toString(16);
    var beginIndex = s.length;
    return ($x_1 + (("" + "00000000".substring(beginIndex)) + s));
  } else {
    return (+(lo >>> 0.0)).toString(16);
  }
});
$p.tZ = (function(lo, hi) {
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
  fF: 1,
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
  this.fI = null;
  this.gT = null;
  this.fJ = null;
  this.fK = 0;
  this.fH = 0;
  this.fI = declaringClass;
  this.gT = methodName;
  this.fJ = fileName;
  this.fK = lineNumber;
  this.fH = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.n = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.fJ === that.fJ) && (this.fK === that.fK)) && (this.fH === that.fH)) && (this.fI === that.fI)) && (this.gT === that.gT)));
});
$p.w = (function() {
  var result = "";
  if ((this.fI !== "<jscode>")) {
    result = ((("" + result) + this.fI) + ".");
  }
  result = (("" + result) + this.gT);
  if ((this.fJ === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.fJ);
    if ((this.fK >= 0)) {
      result = ((result + ":") + this.fK);
      if ((this.fH >= 0)) {
        result = ((result + ":") + this.fH);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.u = (function() {
  return (((($f_T__hashCode__I(this.fI) ^ $f_T__hashCode__I(this.gT)) ^ $f_T__hashCode__I(this.fJ)) ^ this.fK) ^ this.fH);
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
$p.uh = (function(value, offset, count) {
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
$p.tp = (function(format, args) {
  return $ct_ju_Formatter__(new $c_ju_Formatter()).tq(format, args).w();
});
var $d_jl_String$ = new $TypeData().i($c_jl_String$, "java.lang.String$", ({
  fN: 1,
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
  $thiz.oD = s;
  $thiz.oE = writableStackTrace;
  if (writableStackTrace) {
    $thiz.tj();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.oD = null;
    this.oE = false;
    this.oC = null;
    this.ic = null;
  }
  iV(cause) {
    return this;
  }
  bQ() {
    return this.oD;
  }
  tj() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.ai : this);
    this.oC = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  tE() {
    if ((this.ic === null)) {
      if (this.oE) {
        this.ic = $m_jl_StackTrace$().th(this.oC);
      } else {
        this.ic = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.ic;
  }
  w() {
    var className = $objectClassName(this);
    var message = this.bQ();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  u() {
    return $c_O.prototype.u.call(this);
  }
  n(that) {
    return $c_O.prototype.n.call(this, that);
  }
  get "message"() {
    var m = this.bQ();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.w();
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
  g6: 1,
  g5: 1
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
  this.eV = null;
  $n_s_$less$colon$less$ = this;
  this.eV = new $c_s_$less$colon$less$$anon$1();
}
$p = $c_s_$less$colon$less$.prototype = new $h_O();
$p.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
}
$h_s_$less$colon$less$.prototype = $p;
var $d_s_$less$colon$less$ = new $TypeData().i($c_s_$less$colon$less$, "scala.$less$colon$less$", ({
  gl: 1,
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
    $m_sr_ScalaRunTime$().cT(dest, j, $m_sr_ScalaRunTime$().fi(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
function $p_s_Array$__newUnitArray__I__Ajl_Void($thiz, len) {
  var result = new ($d_jl_Void.r().C)(len);
  $m_ju_Arrays$().ti(result, (void 0));
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
$p.qC = (function(it, evidence$3) {
  var n = it.s();
  if ((n > (-1))) {
    var elements = evidence$3.bY(n);
    var iterator = it.f();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().cT(elements, i, iterator.e());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$3.bc();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.f();
    while (iterator$2.l()) {
      var elem = iterator$2.e();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.C.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.C.r().w(jsElems);
  }
});
$p.ca = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.C.Z && $objectGetClass(dest).C.R(srcClass.C))) {
    src.q(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.eE = (function(original, newLength) {
  if ($isArrayOf_jl_Void(original, 1)) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  } else if ((original instanceof $ac_O)) {
    return $m_ju_Arrays$().a9(original, newLength);
  } else if ((original instanceof $ac_I)) {
    return $m_ju_Arrays$().sS(original, newLength);
  } else if ((original instanceof $ac_D)) {
    return $m_ju_Arrays$().sQ(original, newLength);
  } else if ((original instanceof $ac_J)) {
    return $m_ju_Arrays$().sT(original, newLength);
  } else if ((original instanceof $ac_F)) {
    return $m_ju_Arrays$().sR(original, newLength);
  } else if ((original instanceof $ac_C)) {
    return $m_ju_Arrays$().sP(original, newLength);
  } else if ((original instanceof $ac_B)) {
    return $m_ju_Arrays$().sO(original, newLength);
  } else if ((original instanceof $ac_S)) {
    return $m_ju_Arrays$().sU(original, newLength);
  } else if ((original instanceof $ac_Z)) {
    return $m_ju_Arrays$().sV(original, newLength);
  } else {
    throw new $c_s_MatchError(original);
  }
});
$p.qz = (function(xs, ys) {
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
  gn: 1,
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
$p.vs = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $m_scm_ArraySeq$().kH : new $c_scm_ArraySeq$ofRef(xs)));
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
$p.r5 = (function(xo) {
  return (xo.c() ? $m_sc_Iterable$().bH() : new $c_sc_Iterable$$anon$1(xo.H()));
});
$p.kV = (function(x) {
  return ((x === null) ? $m_s_None$() : new $c_s_Some(x));
});
var $d_s_Option$ = new $TypeData().i($c_s_Option$, "scala.Option$", ({
  gv: 1,
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
  return ($thiz.bX(x) ? $thiz.b(x) : default$1.b(x));
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
    $thiz.b2($m_scm_Buffer$().iS(elems));
  } else {
    var it = elems.f();
    while (it.l()) {
      $thiz.ax(it.e());
    }
  }
  return $thiz;
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.rL = null;
  this.rU = null;
  this.rM = null;
  this.rP = null;
  this.rQ = null;
  this.rO = null;
  this.rN = null;
  this.rK = null;
  this.rV = null;
  this.rI = null;
  this.rT = null;
  this.rJ = null;
  this.rR = null;
  this.rS = null;
  $n_s_reflect_ClassTag$ = this;
  this.rL = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.rU = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.rM = $m_s_reflect_ManifestFactory$CharManifest$();
  this.rP = $m_s_reflect_ManifestFactory$IntManifest$();
  this.rQ = $m_s_reflect_ManifestFactory$LongManifest$();
  this.rO = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.rN = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.rK = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.rV = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.rI = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.rT = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.rJ = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.rR = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.rS = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.q0 = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  iM: 1,
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
$p.w = (function() {
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
$p.w = (function() {
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
$p.w = (function() {
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
$p.w = (function() {
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
$p.w = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.iv = false;
  this.iv = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.w = (function() {
  return ("" + this.iv);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  jg: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.aS = 0;
  this.aS = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.w = (function() {
  return ("" + this.aS);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  jj: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyBoolean() {
  this.iw = false;
  this.ix = false;
}
$p = $c_sr_LazyBoolean.prototype = new $h_O();
$p.constructor = $c_sr_LazyBoolean;
/** @constructor */
function $h_sr_LazyBoolean() {
}
$h_sr_LazyBoolean.prototype = $p;
$p.tP = (function(value) {
  this.ix = value;
  this.iw = true;
  return value;
});
$p.w = (function() {
  return ("LazyBoolean " + (this.iw ? ("of: " + this.ix) : "thunk"));
});
var $d_sr_LazyBoolean = new $TypeData().i($c_sr_LazyBoolean, "scala.runtime.LazyBoolean", ({
  jk: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyRef() {
  this.iy = false;
  this.iz = null;
}
$p = $c_sr_LazyRef.prototype = new $h_O();
$p.constructor = $c_sr_LazyRef;
/** @constructor */
function $h_sr_LazyRef() {
}
$h_sr_LazyRef.prototype = $p;
$p.tQ = (function(value) {
  this.iz = value;
  this.iy = true;
  return value;
});
$p.w = (function() {
  return ("LazyRef " + (this.iy ? ("of: " + this.iz) : "thunk"));
});
var $d_sr_LazyRef = new $TypeData().i($c_sr_LazyRef, "scala.runtime.LazyRef", ({
  jl: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.I = null;
  this.I = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.w = (function() {
  return ("" + this.I);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  jo: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.aT = 0;
  this.eC = 0;
  this.iB = 0;
  this.kN = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.aT = $f_T__hashCode__I("Seq");
  this.eC = $f_T__hashCode__I("Map");
  this.iB = $f_T__hashCode__I("Set");
  this.kN = this.hL($m_sci_Nil$(), this.eC);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.d6 = (function(x, y) {
  return this.rq($m_sr_Statics$().P(x), $m_sr_Statics$().P(y), (-889275714));
});
$p.ri = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.tO(xs, this.aT) : ((xs instanceof $c_sci_List) ? this.u3(xs, this.aT) : this.uy(xs, this.aT)));
});
$p.ua = (function(xs) {
  if (xs.c()) {
    return this.kN;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.eC;
    xs.fk(accum);
    h = this.i(h, accum.iC);
    h = this.i(h, accum.iD);
    h = this.e3(h, accum.iE);
    return this.F(h, accum.iF);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  jP: 1,
  jO: 1
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
  this.iC = 0;
  this.iD = 0;
  this.iF = 0;
  this.iE = 0;
  this.iC = 0;
  this.iD = 0;
  this.iF = 0;
  this.iE = 1;
}
$p = $c_s_util_hashing_MurmurHash3$accum$1.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3$accum$1;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$accum$1() {
}
$h_s_util_hashing_MurmurHash3$accum$1.prototype = $p;
$p.w = (function() {
  return "<function2>";
});
$p.sk = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().d6(k, v);
  this.iC = ((this.iC + h) | 0);
  this.iD = (this.iD ^ h);
  this.iE = Math.imul(this.iE, (1 | h));
  this.iF = ((1 + this.iF) | 0);
});
$p.cE = (function(v1, v2) {
  this.sk(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  jQ: 1,
  b4: 1
}));
/** @constructor */
function $c_Ladversaries_Adversary$() {
  this.je = null;
  this.lV = null;
  this.m1 = null;
  this.lW = null;
  this.lY = null;
  this.lX = null;
  this.lZ = null;
  this.m0 = null;
  this.jd = null;
  $n_Ladversaries_Adversary$ = this;
  this.je = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Brandenburg-Prussia", $m_sci_Vector$().bv($m_sr_ScalaRunTime$().A(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 Town to land #3.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-3-2222-3333", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-3-2222-3333", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-3-222-3333", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "1-3-222-3333", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "3-222-3333", $m_s_None$())]))), $m_s_None$(), "On each board with Town/City, add 1 Town to a land without Town.", $m_sci_Nil$().bR($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["9 (3/3/3)", "9 (3/3/3)", "10 (3/4/3)", "11 (4/4/3)", "11 (4/4/3)", "12 (4/4/4)"])))));
  this.lV = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("England", $m_sci_Vector$().bv($m_sr_ScalaRunTime$().A(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "Invader Build Cards affect matching lands without Invaders if they are adjacent to at least 2 Town/City.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 City to land #1 and 1 Town to land #2", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage(), "Put the \"High Immigration\" tile on the Invader board, to the left of \"Ravage\". The Invaders take this Build action each Invader phase before Ravaging. Cards slide left from Ravage to it, and from it to the discard pile. Remove the tile when a Stage II card slides onto it, putting that card in the discard.", new $c_s_Some(4)), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage(), "Put the \"High Immigration\" tile on the Invader board, to the left of \"Ravage\". The Invaders take this Build action each Invader phase before Ravaging. Cards slide left from Ravage to it, and from it to the discard pile. ", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Town/City have +1 Health.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Add an additional Fear to the Fear Pool per player in the game.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage(), "During any Invader Phase where you resolve no Fear Cards, perform the Build from High Immigration twice. (This has no effect if no card is on the extra Build slot.)", $m_s_None$())]))), new $c_s_Some("If 7 or more Town/City are ever in a single land, the Invaders win."), "On each board with Town/City, Build in the land with the most Town/City.", $m_sci_Nil$().bR($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["10 (3/4/3)", "11 (4/4/3)", "13 (4/5/4)", "14 (4/5/5)", "14 (4/5/5)", "13 (4/5/4)"])))));
  this.m1 = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Sweden", $m_sci_Vector$().bv($m_sr_ScalaRunTime$().A(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "If the Invaders do at least 6 Damage to the land during Ravage, add an extra Blight. The additional Blight does not destroy Presence or cause cascades.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 City to land #4. On boards where land #4 starts with Blight, put that Blight in land #5 instead.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Town deal 3 Damage. City deal 5 Damage.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "After adding all other Invaders, Accelerate the Invader Deck. On each board, add 1 Town to the land of that terrain with the fewest Invaders.", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "When Ravaging adds at least 1 Blight to a land, also add 1 Town to an adjacent land without Town/City. Cascading Blight does not cause this effect.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 Town and 1 Blight to land #8. The Blight comes from the box, not the Blight Card.", $m_s_None$())]))), $m_s_None$(), "After Invaders Explore into each land this Phase, if that land has at least as many Invaders as Dahan, replace 1 Dahan with 1 Town.", $m_sci_Nil$().bR($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["9 (3/3/3)", "10 (3/4/3)", "10 (3/4/3)", "11 (3/4/4)", "12 (4/4/4)", "13 (4/4/5)"])))));
  this.lW = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("France", $m_sci_Vector$().bv($m_sr_ScalaRunTime$().A(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "Except during Setup: After Invaders successfully Explore into a land which had no Town/City, add 1 Explorer there.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Put the \"Slave Rebellion\" event under the top 3 cards of the Event Deck.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "After Invaders Build in a land with 2 Explorer or more, replace all but 1 Explorer there with an equal number of Town.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 Town to the highest-numbered land without Town. Add 1 Town to land #1.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "Whenever Invaders Build a Coastal City, add 1 Town to the adjacent land with the fewest Town.", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "When you remove Blight from the board, put it here instead of onto the Blight Card. As soon as you have 3 Blight per player here, move it all back to the Blight Card.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "After resolving an Explore Card, on each board add 1 Explorer to a land without any. Fear Card effects never remove Explorer. If one would, you may instead Push that Explorer.", $m_s_None$())]))), new $c_s_Some("Before Setup, return all but 7 Town per player to the box. Invaders win if you ever cannot place a Town."), "After Exploring, on each board, pick a land of the shown terrain. If it has Town/City, add 1 Blight. Otherwise, add 1 Town.", $m_sci_Nil$().bR($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["9 (3/3/3)", "10 (3/4/3)", "11 (4/4/3)", "12 (4/4/4)", "13 (4/5/4)", "14 (4/5/5)"])))));
  this.lY = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Habsburg Monarchy (Livestock)", $m_sci_Vector$().bv($m_sr_ScalaRunTime$().A(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "After the normal Build Step: In each land matching a Build Card, Gather 1 Town from a land not matching a Build Card. (In board/land order.)", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board, add 1 Town to land #2 and 1 Town to the highest-numbered land without Setup symbols.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "when Invaders would Build 1 City in an Inland land, they instead Build 2 Town.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-2222-33333", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "Town in lands without Blight are Durable: they have +2 Health, and \"Destroy Town\" effects instead deal 2 Damage (to those Town only) per Town they could Destroy. (\"Destroy all Town\" works normally.)", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Put the Habsburg Reminder Card under the top 5 Invader Cards. When Revealed, on each board, add 1 City to a Coastal land without City and 1 Town to the 3 Inland lands with the fewest Blight.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Ravages do +2 Damage (total) if any adjacent lands have Town. (This does not cause lands without Invaders to Ravage.)", $m_s_None$())]))), new $c_s_Some("Track how many Blight come off the Blight Card during Ravages that do 8+ Damage to the land. If that number ever exceeds players, the Invaders win."), "After Exploring: On each board with 4 or fewer Blight, add 1 Town to a land without Town/Blight. On each board with 2 or fewer Blight, do so again.", $m_sci_Nil$().bR($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["10 (3/4/3)", "11 (4/5/2)", "12 (4/5/3)", "12 (4/5/3)", "13 (4/6/3)", "14 (5/6/3)"])))));
  this.lX = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Habsburg Mining Expedition", $m_sci_Vector$().bv($m_sr_ScalaRunTime$().A(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "Lands with 3 or more Invaders are Mining lands.", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "When Blight added by a Ravage Action would cascade, instead Upgrade 1 Explorer/Town (before Dahan counterattack.)", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), $m_sc_StringOps$().rn("In Mining lands: Disease and modifiers to Disease affect Ravage Actions as though they were Build Actions.", 124), $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), $m_sc_StringOps$().rn("In Mining lands: During the Build Step, Build Cards cause Ravage Actions (instead of Build Actions).", 124), $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Add 1 Explorer in each land with no Dahan. Add 1 Disease and 1 City in the highest-numbered land with a Town Setup symbol.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__AfterBuild__Ladversaries_Stage(), "On each board: Choose a land with Explorer. Upgrade 1 Explorer there.", new $c_s_Some(5)), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Remove the Stage II 'Coastal Lands' card before randomly choosing Stage II cards. Place the 'Salt Deposits' card in place of the 2nd Stage II card.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-2S22-33333, where S is the Salt Deposits card. Escalation ignores S", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__AfterBuild__Ladversaries_Stage(), "On each board: Choose a land with Explorer. Build there, then Upgrade 1 Explorer. (Build normally in a Mining land.)", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "On boards with 3 or fewer Blight: Add +1 Explorer in each land successfully explored. (Max. 2 lands per board per Explore Card.)", $m_s_None$())]))), new $c_s_Some("At the end of the Fast Power Phase, the Invaders win if any land has at least 8 total Invaders/Blight (combined)."), "After Advancing Invader Cards: On each board, Explore in 2 lands whose terrains don't match a Ravage or Build Card (no source required).", $m_sci_Nil$().bR($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["9 (3/3/3)", "10 (3/3/4)", "11 (3/4/4)", "12 (4/4/4)", "13 (4/5/4)", "13 (4/5/4)"])))));
  this.lZ = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Russia", $m_sci_Vector$().bv($m_sr_ScalaRunTime$().A(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board, add 1 Beasts and 1 Explorer to the highest-numbered land without Town/City", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Explorer do +1 Damage. When Ravage adds Blight to a land (including cascades), Destroy 1 Beasts in that land.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "The first time each Action would Destroy Explorer: If possible, 1 of those Explorer is instead Pushed; 1 Fear when you do so.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Ravage Cards also match lands with 3 or more Explorer. (If the land already matched the Ravage Card, it still Ravages just once.)", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-2-3-2-3-2-3-2-33", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Put an unused Stage II Invader Card under the top 3 Fear Cards, and an unused Stage III Card under the top 7 Fear Cards.", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "When a face down invader card in the fear deck is revealed, immediately place it in the Build space (face-up).", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "After the Ravage Step of turn 2+, on each board where it added no Blight: In the land with the most Explorer (min. 1), add 1 Explorer and 1 Town.", $m_s_None$())]))), new $c_s_Some("Put Beasts Destroyed by Adversary rules on this panel. If there are ever more Beasts on this panel than on the island, the Invaders win."), "Add 2 Explorer (total) among lands with Beasts. If you can't, instead add 2 Explorer among lands with Beasts on a different board.", $m_sci_Nil$().bR($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["10 (3/3/4)", "11 (4/3/4)", "11 (4/4/3)", "12 (4/4/4)", "13 (4/5/4)", "14 (5/5/4)"])))));
  this.m0 = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Scotland", $m_sci_Vector$().bv($m_sr_ScalaRunTime$().A(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "After Setup, in Coastal lands, Explore Cards add 1 Town instead of 1 Explorer . \"Coastal Lands\" Invader cards do this for maximum 2 lands per board.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Add 1 City to land #2.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-22-1-C2-33333", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "In Coastal lands, Build Cards affect lands without Invaders, so long as there is an adjacent City.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-22-3-C2-3333", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "After a Ravage Action adds Blight to a Coastal Land, add 1 Blight to that board's Ocean (without cascading). Treat the Ocean as a Coastal Wetland for this rule and for Blight removal/movement.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__AfterRavage__Ladversaries_Stage(), "Add 1 Town to each Inland land that matches a Ravage card and is within 1 Range of Town/City.", $m_s_None$())]))), new $c_s_Some("If the number of Coastal lands with City is ever greater than (2 x # of boards), the Invaders win."), "On the single board with the most Coastal Town/City, add 1 Town to the N lands with the fewest Town (N = # of players.)", $m_sci_Nil$().bR($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["10 (3/4/3)", "11 (4/4/3)", "13 (4/5/4)", "14 (5/5/4)", "15 (5/6/4)", "16 (6/6/4)"])))));
  this.jd = $m_sci_Nil$().bR($m_sr_ScalaRunTime$().A(new ($d_Ladversaries_Adversary.r().C)([this.je, this.lV, this.m1, this.lW, this.lY, this.lX, this.lZ, this.m0])));
}
$p = $c_Ladversaries_Adversary$.prototype = new $h_O();
$p.constructor = $c_Ladversaries_Adversary$;
/** @constructor */
function $h_Ladversaries_Adversary$() {
}
$h_Ladversaries_Adversary$.prototype = $p;
$p.qL = (function(name) {
  var this$1 = $m_Ladversaries_Adversary$().jd;
  _return: {
    var these = this$1;
    while ((!these.c())) {
      if ((these.o().e6 === name)) {
        var this$2 = new $c_s_Some(these.o());
        break _return;
      }
      these = these.x();
    }
    var this$2 = $m_s_None$();
  }
  if (this$2.c()) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (name + " not found"));
  }
  return this$2.H();
});
var $d_Ladversaries_Adversary$ = new $TypeData().i($c_Ladversaries_Adversary$, "adversaries.Adversary$", ({
  dg: 1,
  aO: 1,
  d3: 1
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
  di: 1,
  aO: 1,
  d4: 1
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
  this.jl = null;
  this.mc = null;
  this.md = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.jl = $m_scm_Buffer$().q2($m_sr_ScalaRunTime$().A(new ($d_F1.r().C)([])));
  this.mc = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    try {
      console.error(((this.eG(err) + "\n") + this.tD(err, "\n")));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error("Error in AirstreamError.consoleErrorCallback:");
      console.error(e$2);
    }
  }));
  this.md = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => {
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    var $x_1 = err$2;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.ai : $x_1);
  }));
  this.uD(this.mc);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.eG = (function(e) {
  try {
    var errorMessage = e.bQ();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).li() + ": ") + errorMessage);
});
$p.tD = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().vs(err.tE()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.sA = (function(message, cause) {
  return ((message + "; cause: ") + (cause.c() ? $m_s_None$() : new $c_s_Some(this.eG(cause.H()))));
});
$p.sz = (function(causes) {
  return ("CombinedError: " + $f_sc_IterableOnceOps__mkString__T__T__T__T(causes.fj($m_s_$less$colon$less$().eV).L(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e) => this.eG(e)))), "", "; ", ""));
});
$p.uD = (function(fn) {
  this.jl.ax(fn);
});
$p.cL = (function(err) {
  var this$1 = this.jl;
  var it = this$1.f();
  while (it.l()) {
    var x0 = it.e();
    try {
      x0.b(err);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = this.md;
      if (((x0 === null) ? (x$2 === null) : x0.n(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ai : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().v2(0.0, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((e$2) => (() => {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ai : e$2);
      }))(e$2)));
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$, "com.raquo.airstream.core.AirstreamError$", ({
  dx: 1,
  aO: 1,
  d4: 1
}));
var $n_Lcom_raquo_airstream_core_AirstreamError$;
function $m_Lcom_raquo_airstream_core_AirstreamError$() {
  if ((!$n_Lcom_raquo_airstream_core_AirstreamError$)) {
    $n_Lcom_raquo_airstream_core_AirstreamError$ = new $c_Lcom_raquo_airstream_core_AirstreamError$();
  }
  return $n_Lcom_raquo_airstream_core_AirstreamError$;
}
function $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V($thiz) {
  $thiz.cI(true);
  $thiz.fo((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().lU(onNext, $m_s_PartialFunction$().ie, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.fn()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.fn()) {
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
  var x = $thiz.e2();
  if ((x === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().bA($m_sr_ScalaRunTime$().A(new ($d_F0.r().C)([])));
    $thiz.fo(newArray);
    return newArray;
  } else {
    return x;
  }
}
var $d_Lcom_raquo_airstream_core_Observer = new $TypeData().i(1, "com.raquo.airstream.core.Observer", ({
  aS: 1,
  aI: 1,
  Y: 1
}));
function $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($thiz, value, r) {
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.so(value));
}
function $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($thiz, nodes, renderableSeq) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    ($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(nodes, null, null)).S(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((_$9) => {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().g7(element$2, _$9, (void 0));
    }))(element)));
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$1() {
  this.nm = null;
  this.nn = false;
}
$p = $c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$1() {
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = $p;
$p.uw = (function() {
  if ((!this.nn)) {
    this.nm = new $c_Lcom_raquo_laminar_keys_EventProp("DOMContentLoaded");
    this.nn = true;
  }
  return this.nm;
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$$anon$1, "com.raquo.laminar.api.Laminar$$anon$1", ({
  ei: 1,
  bz: 1,
  ev: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(key, itemsToAdd) {
  this.oj = null;
  this.jQ = null;
  this.oj = key;
  this.jQ = itemsToAdd;
}
$p = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_CompositeKeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = $p;
$p.dk = (function(element) {
  if ((!this.jQ.c())) {
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this.oj, null, this.jQ, $m_sci_Nil$());
  }
});
var $d_Lcom_raquo_laminar_modifiers_CompositeKeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_CompositeKeySetter, "com.raquo.laminar.modifiers.CompositeKeySetter", ({
  f0: 1,
  Z: 1,
  bF: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.fF = null;
  this.jR = null;
  this.jS = null;
  this.fF = eventProcessor;
  this.jR = ((ev) => {
    var processor = eventProcessor.gN;
    var this$2 = processor.b(ev);
    if ((!this$2.c())) {
      callback.b(this$2.H());
    }
  });
  this.jS = (() => {
    var outer = null;
    outer = this;
    var this$3 = ({});
    if ((outer === null)) {
      throw new $c_jl_NullPointerException();
    }
    this$3.capture = outer.fF.gO;
    this$3.passive = outer.fF.i7;
    return this$3;
  })();
}
$p = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $p;
$p.dk = (function(element) {
  this.sr(element, false);
});
$p.sr = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().s2(element.bx, this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.jP, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().uG(element.bx, this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().vk(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().hM(element.cM, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().ro(element.cM, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner$1) => {
      activate.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.w = (function() {
  return (("EventListener(" + this.fF.eS.gP) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  f1: 1,
  Z: 1,
  bE: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeySetter(key, value, action) {
  this.ol = null;
  this.om = null;
  this.ok = null;
  this.ol = key;
  this.om = value;
  this.ok = action;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_KeySetter.prototype = $p;
$p.dk = (function(element) {
  this.ok.kT(element, this.ol, this.om);
});
var $d_Lcom_raquo_laminar_modifiers_KeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeySetter, "com.raquo.laminar.modifiers.KeySetter", ({
  f2: 1,
  Z: 1,
  bF: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeyUpdater(key, values, update) {
  this.on = null;
  this.op = null;
  this.oo = null;
  this.on = key;
  this.op = values;
  this.oo = update;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeyUpdater;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeyUpdater() {
}
$h_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = $p;
$p.dk = (function(element) {
  this.kZ(element);
});
$p.kZ = (function(element) {
  element.uu(this.on);
  var observable = this.op;
  var onNext = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    this.oo.kT(element, value, this);
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().v5(element.cM, observable, onNext);
});
var $d_Lcom_raquo_laminar_modifiers_KeyUpdater = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeyUpdater, "com.raquo.laminar.modifiers.KeyUpdater", ({
  f3: 1,
  Z: 1,
  bE: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.jX = null;
  this.ov = null;
  this.ow = null;
  this.ov = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().tY(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.ow = container;
  this.uf();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.iO = (function() {
  return this.jX;
});
$p.qi = (function(x$0) {
  this.jX = x$0;
});
$p.uf = (function() {
  this.jX.pP();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().g7(this, this.ov, (void 0));
});
$p.aL = (function() {
  return this.ow;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  fk: 1,
  aJ: 1,
  bG: 1
}));
function $isArrayOf_Lcom_raquo_laminar_tags_CustomHtmlTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fn)));
}
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.C.Z) {
    return ($thiz.C.Q().li() + "[]");
  } else {
    var name = $thiz.C.N;
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
  this.k1 = null;
  this.C = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.w = (function() {
  return ((this.C.Y ? "interface " : (this.C.X ? "" : "class ")) + this.C.N);
});
$p.li = (function() {
  if ((this.k1 === null)) {
    this.k1 = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.k1;
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  fz: 1,
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
  this.rH = null;
  $n_s_Predef$ = this;
  this.rH = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.rc = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  gy: 1,
  gr: 1,
  gs: 1
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
      return $thiz.bz();
      break;
    }
    case 1: {
      return $thiz.bs();
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.fL = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.fL = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.bH = (function() {
  return this.fL.qq($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.ay = (function(it) {
  return this.fL.la(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.aK = (function() {
  return this.fL.iZ($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.dX = (function(elems) {
  return this.fL.la(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.fN = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.fN = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.bH = (function() {
  return this.fN.bH();
});
$p.ay = (function(it) {
  return this.fN.ay(it);
});
$p.aK = (function() {
  return this.fN.aK();
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
  gU: 1,
  bj: 1,
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
    var known = $thiz.s();
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
  return $thiz.aZ().ay($ct_sc_View$Map__sc_IterableOps__F1__(new $c_sc_View$Map(), $thiz, f));
}
function $f_sc_Iterator__indexWhere__F1__I__I($thiz, p, from) {
  var i = ((from > 0) ? from : 0);
  var dropped = $thiz.cW(from);
  while (dropped.l()) {
    if ((!(!p.b(dropped.e())))) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).ht(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().E : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
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
  this.E = null;
  $n_sc_Iterator$ = this;
  this.E = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
$p.aK = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$p.bH = (function() {
  return this.E;
});
$p.ay = (function(source) {
  return source.f();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  gV: 1,
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
  $thiz.ko = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.ko = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.ay = (function(it) {
  return this.ko.ay(it);
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
$p.qD = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((x3) => (() => x3.f()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().ld(it))));
});
$p.aK = (function() {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((it$2$2) => $m_sc_View$().qD(it$2$2))));
});
$p.bH = (function() {
  return $m_sc_View$Empty$();
});
$p.ay = (function(source) {
  return this.qD(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  hb: 1,
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
  this.aa = 0;
  this.az = 0;
  this.aW = null;
  this.c2 = null;
  this.be = 0;
  this.bS = 0;
  this.aa = dataMap;
  this.az = nodeMap;
  this.aW = content;
  this.c2 = originalHashes;
  this.be = size;
  this.bS = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $p;
$p.M = (function() {
  return this.be;
});
$p.bG = (function() {
  return this.bS;
});
$p.dm = (function(index) {
  return this.aW.a[(index << 1)];
});
$p.dn = (function(index) {
  return this.aW.a[((1 + (index << 1)) | 0)];
});
$p.lg = (function(index) {
  return new $c_T2(this.aW.a[(index << 1)], this.aW.a[((1 + (index << 1)) | 0)]);
});
$p.cu = (function(index) {
  return this.c2.a[index];
});
$p.cY = (function(index) {
  return this.aW.a[(((((-1) + this.aW.a.length) | 0) - index) | 0)];
});
$p.kS = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().cv(keyHash, shift);
  var bitpos = $m_sci_Node$().bP(mask);
  if (((this.aa & bitpos) !== 0)) {
    var index = $m_sci_Node$().bB(this.aa, mask, bitpos);
    if ($m_sr_BoxesRunTime$().k(key, this.dm(index))) {
      return this.dn(index);
    } else {
      throw new $c_ju_NoSuchElementException(("key not found: " + key));
    }
  } else if (((this.az & bitpos) !== 0)) {
    return this.cY($m_sci_Node$().bB(this.az, mask, bitpos)).kS(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.iT = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().cv(keyHash, shift);
  var bitpos = $m_sci_Node$().bP(mask);
  if (((this.aa & bitpos) !== 0)) {
    var index = $m_sci_Node$().bB(this.aa, mask, bitpos);
    return ($m_sr_BoxesRunTime$().k(key, this.dm(index)) ? new $c_s_Some(this.dn(index)) : $m_s_None$());
  } else {
    return (((this.az & bitpos) !== 0) ? this.cY($m_sci_Node$().bB(this.az, mask, bitpos)).iT(key, originalHash, keyHash, ((5 + shift) | 0)) : $m_s_None$());
  }
});
$p.lf = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().cv(keyHash, shift);
  var bitpos = $m_sci_Node$().bP(mask);
  if (((this.aa & bitpos) !== 0)) {
    var index = $m_sci_Node$().bB(this.aa, mask, bitpos);
    return ($m_sr_BoxesRunTime$().k(key, this.dm(index)) ? this.dn(index) : f.J());
  } else {
    return (((this.az & bitpos) !== 0) ? this.cY($m_sci_Node$().bB(this.az, mask, bitpos)).lf(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.J());
  }
});
$p.l2 = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().cv(keyHash, shift);
  var bitpos = $m_sci_Node$().bP(mask);
  if (((this.aa & bitpos) !== 0)) {
    var index = $m_sci_Node$().bB(this.aa, mask, bitpos);
    return ((this.c2.a[index] === originalHash) && $m_sr_BoxesRunTime$().k(key, this.dm(index)));
  } else {
    return (((this.az & bitpos) !== 0) && this.cY($m_sci_Node$().bB(this.az, mask, bitpos)).l2(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.lS = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().cv(keyHash, shift);
  var bitpos = $m_sci_Node$().bP(mask);
  if (((this.aa & bitpos) !== 0)) {
    var index = $m_sci_Node$().bB(this.aa, mask, bitpos);
    var key0 = this.dm(index);
    var key0UnimprovedHash = this.cu(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().k(key0, key))) {
      if (replaceValue) {
        var value0 = this.dn(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.sN(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.dn(index);
      var key0Hash = $m_sc_Hashing$().bi(key0UnimprovedHash);
      return this.sJ(bitpos, key0Hash, this.lA(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.az & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().bB(this.az, mask, bitpos);
    var subNode = this.cY(index$2);
    var subNodeNew$2 = subNode.rt(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.sL(bitpos, subNode, subNodeNew$2));
  } else {
    return this.sH(bitpos, key, originalHash, keyHash, value);
  }
});
$p.lA = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().bv($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [new $c_T2(key0, value0), new $c_T2(key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().cv(keyHash0, shift);
    var mask1 = $m_sci_Node$().cv(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().bP(mask0) | $m_sci_Node$().bP(mask1));
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key0, value0, key1, value1]), new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash) : new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key1, value1, key0, value0]), new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash));
    } else {
      var nodeMap = $m_sci_Node$().bP(mask0);
      var node = this.lA(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().gU, node.M(), node.bG());
    }
  }
});
$p.hx = (function() {
  return (this.az !== 0);
});
$p.hC = (function() {
  return $m_jl_Integer$().bu(this.az);
});
$p.gg = (function() {
  return (this.aa !== 0);
});
$p.hG = (function() {
  return $m_jl_Integer$().bu(this.aa);
});
$p.cU = (function(bitpos) {
  return $m_jl_Integer$().bu((this.aa & (((-1) + bitpos) | 0)));
});
$p.fp = (function(bitpos) {
  return $m_jl_Integer$().bu((this.az & (((-1) + bitpos) | 0)));
});
$p.sN = (function(bitpos, newKey, newValue) {
  var dataIx = this.cU(bitpos);
  var idx = (dataIx << 1);
  var src = this.aW;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.q(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.aa, this.az, dst, this.c2, this.be, this.bS);
});
$p.sL = (function(bitpos, oldNode, newNode) {
  var idx = (((((-1) + this.aW.a.length) | 0) - this.fp(bitpos)) | 0);
  var src = this.aW;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.q(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.aa, this.az, dst, this.c2, ((((this.be - oldNode.M()) | 0) + newNode.M()) | 0), ((((this.bS - oldNode.bG()) | 0) + newNode.bG()) | 0));
});
$p.sH = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.cU(bitpos);
  var idx = (dataIx << 1);
  var src = this.aW;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.q(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.q(idx, dst, destPos, length);
  var dstHashes = this.qR(this.c2, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.aa | bitpos), this.az, dst, dstHashes, ((1 + this.be) | 0), ((this.bS + keyHash) | 0));
});
$p.ud = (function(bitpos, keyHash, node) {
  var dataIx = this.cU(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.aW.a.length) | 0) - this.fp(bitpos)) | 0);
  var src = this.aW;
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
  var dstHashes = this.j2(this.c2, dataIx);
  this.aa = (this.aa ^ bitpos);
  this.az = (this.az | bitpos);
  this.aW = dst;
  this.c2 = dstHashes;
  this.be = (((((-1) + this.be) | 0) + node.M()) | 0);
  this.bS = ((((this.bS - keyHash) | 0) + node.bG()) | 0);
  return this;
});
$p.sJ = (function(bitpos, keyHash, node) {
  var dataIx = this.cU(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.aW.a.length) | 0) - this.fp(bitpos)) | 0);
  var src = this.aW;
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
  var dstHashes = this.j2(this.c2, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.aa ^ bitpos), (this.az | bitpos), dst, dstHashes, (((((-1) + this.be) | 0) + node.M()) | 0), ((((this.bS - keyHash) | 0) + node.bG()) | 0));
});
$p.S = (function(f) {
  var iN = $m_jl_Integer$().bu(this.aa);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.b(this.lg(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().bu(this.az);
  var j = 0;
  while ((j < jN)) {
    this.cY(j).S(f);
    j = ((1 + j) | 0);
  }
});
$p.fk = (function(f) {
  var iN = $m_jl_Integer$().bu(this.aa);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.cE(this.dm(i$1), this.dn(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().bu(this.az);
  var j = 0;
  while ((j < jN)) {
    this.cY(j).fk(f);
    j = ((1 + j) | 0);
  }
});
$p.n = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.bS === that.bS) && (this.az === that.az)) && (this.aa === that.aa)) && (this.be === that.be)) && $m_ju_Arrays$().iQ(this.c2, that.c2))) {
      var a1 = this.aW;
      var a2 = that.aW;
      var length = this.aW.a.length;
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
$p.u = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.qj = (function() {
  var this$1 = this.aW;
  var contentClone = this$1.j();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().bu(this.aa) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].ql();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.aa, this.az, contentClone, this.c2.j(), this.be, this.bS);
});
$p.ql = (function() {
  return this.qj();
});
$p.rt = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.lS(key, value, originalHash, hash, shift, replaceValue);
});
$p.hw = (function(index) {
  return this.cY(index);
});
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cl)));
}
var $d_sci_BitmapIndexedMapNode = new $TypeData().i($c_sci_BitmapIndexedMapNode, "scala.collection.immutable.BitmapIndexedMapNode", ({
  cl: 1,
  cB: 1,
  aG: 1
}));
/** @constructor */
function $c_sci_BitmapIndexedSetNode(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
  this.a1 = 0;
  this.aD = 0;
  this.bf = null;
  this.ci = null;
  this.bl = 0;
  this.c3 = 0;
  this.a1 = dataMap;
  this.aD = nodeMap;
  this.bf = content;
  this.ci = originalHashes;
  this.bl = size;
  this.c3 = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedSetNode.prototype = new $h_sci_SetNode();
$p.constructor = $c_sci_BitmapIndexedSetNode;
/** @constructor */
function $h_sci_BitmapIndexedSetNode() {
}
$h_sci_BitmapIndexedSetNode.prototype = $p;
$p.M = (function() {
  return this.bl;
});
$p.bG = (function() {
  return this.c3;
});
$p.d0 = (function(index) {
  return this.bf.a[index];
});
$p.cu = (function(index) {
  return this.ci.a[index];
});
$p.cZ = (function(index) {
  return this.bf.a[(((((-1) + this.bf.a.length) | 0) - index) | 0)];
});
$p.hu = (function(element, originalHash, elementHash, shift) {
  var mask = $m_sci_Node$().cv(elementHash, shift);
  var bitpos = $m_sci_Node$().bP(mask);
  if (((this.a1 & bitpos) !== 0)) {
    var index = $m_sci_Node$().bB(this.a1, mask, bitpos);
    return ((this.ci.a[index] === originalHash) && $m_sr_BoxesRunTime$().k(element, this.d0(index)));
  }
  if (((this.aD & bitpos) !== 0)) {
    return this.cZ($m_sci_Node$().bB(this.aD, mask, bitpos)).hu(element, originalHash, elementHash, ((5 + shift) | 0));
  }
  return false;
});
$p.rr = (function(element, originalHash, elementHash, shift) {
  var mask = $m_sci_Node$().cv(elementHash, shift);
  var bitpos = $m_sci_Node$().bP(mask);
  if (((this.a1 & bitpos) !== 0)) {
    var index = $m_sci_Node$().bB(this.a1, mask, bitpos);
    var element0 = this.d0(index);
    if (Object.is(element0, element)) {
      return this;
    } else {
      var element0UnimprovedHash = this.cu(index);
      var element0Hash = $m_sc_Hashing$().bi(element0UnimprovedHash);
      if (((originalHash === element0UnimprovedHash) && $m_sr_BoxesRunTime$().k(element0, element))) {
        return this;
      } else {
        return this.sK(bitpos, element0Hash, this.lz(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0)));
      }
    }
  }
  if (((this.aD & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().bB(this.aD, mask, bitpos);
    var subNode = this.cZ(index$2);
    var subNodeNew$2 = subNode.rs(element, originalHash, elementHash, ((5 + shift) | 0));
    if ((subNode === subNodeNew$2)) {
      return this;
    } else {
      return this.sM(bitpos, subNode, subNodeNew$2);
    }
  }
  return this.sI(bitpos, element, originalHash, elementHash);
});
$p.lz = (function(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionSetNode(originalKeyHash0, keyHash0, $m_sci_Vector$().bv($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [key0, key1])));
  } else {
    var mask0 = $m_sci_Node$().cv(keyHash0, shift);
    var mask1 = $m_sci_Node$().cv(keyHash1, shift);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().bP(mask0) | $m_sci_Node$().bP(mask1));
      var newCachedHashCode = ((keyHash0 + keyHash1) | 0);
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedSetNode(dataMap, 0, new $ac_O([key0, key1]), new $ac_I(new Int32Array([originalKeyHash0, originalKeyHash1])), 2, newCachedHashCode) : new $c_sci_BitmapIndexedSetNode(dataMap, 0, new $ac_O([key1, key0]), new $ac_I(new Int32Array([originalKeyHash1, originalKeyHash0])), 2, newCachedHashCode));
    } else {
      var nodeMap = $m_sci_Node$().bP(mask0);
      var node = this.lz(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedSetNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().gU, node.M(), node.bG());
    }
  }
});
$p.gg = (function() {
  return (this.a1 !== 0);
});
$p.hG = (function() {
  return $m_jl_Integer$().bu(this.a1);
});
$p.hx = (function() {
  return (this.aD !== 0);
});
$p.hC = (function() {
  return $m_jl_Integer$().bu(this.aD);
});
$p.cU = (function(bitpos) {
  return $m_jl_Integer$().bu((this.a1 & (((-1) + bitpos) | 0)));
});
$p.fp = (function(bitpos) {
  return $m_jl_Integer$().bu((this.aD & (((-1) + bitpos) | 0)));
});
$p.sM = (function(bitpos, oldNode, newNode) {
  var idx = (((((-1) + this.bf.a.length) | 0) - this.fp(bitpos)) | 0);
  var src = this.bf;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.q(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedSetNode(this.a1, this.aD, dst, this.ci, ((((this.bl - oldNode.M()) | 0) + newNode.M()) | 0), ((((this.c3 - oldNode.bG()) | 0) + newNode.bG()) | 0));
});
$p.sI = (function(bitpos, key, originalHash, elementHash) {
  var dataIx = this.cU(bitpos);
  var src = this.bf;
  var dst = new $ac_O(((1 + src.a.length) | 0));
  src.q(0, dst, 0, dataIx);
  dst.a[dataIx] = key;
  var destPos = ((1 + dataIx) | 0);
  var length = ((src.a.length - dataIx) | 0);
  src.q(dataIx, dst, destPos, length);
  var dstHashes = this.qR(this.ci, dataIx, originalHash);
  return new $c_sci_BitmapIndexedSetNode((this.a1 | bitpos), this.aD, dst, dstHashes, ((1 + this.bl) | 0), ((this.c3 + elementHash) | 0));
});
$p.sK = (function(bitpos, elementHash, node) {
  var dataIx = this.cU(bitpos);
  var idxNew = (((((-1) + this.bf.a.length) | 0) - this.fp(bitpos)) | 0);
  var src = this.bf;
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
  var dstHashes = this.j2(this.ci, dataIx);
  return new $c_sci_BitmapIndexedSetNode((this.a1 ^ bitpos), (this.aD | bitpos), dst, dstHashes, (((((-1) + this.bl) | 0) + node.M()) | 0), ((((this.c3 - elementHash) | 0) + node.bG()) | 0));
});
$p.ue = (function(bitpos, keyHash, node) {
  var dataIx = this.cU(bitpos);
  var idxNew = (((((-1) + this.bf.a.length) | 0) - this.fp(bitpos)) | 0);
  var src = this.bf;
  var srcPos = ((1 + dataIx) | 0);
  var dest = this.bf;
  var length = ((idxNew - dataIx) | 0);
  src.q(srcPos, dest, dataIx, length);
  this.bf.a[idxNew] = node;
  this.a1 = (this.a1 ^ bitpos);
  this.aD = (this.aD | bitpos);
  this.ci = this.j2(this.ci, dataIx);
  this.bl = (((((-1) + this.bl) | 0) + node.M()) | 0);
  this.c3 = ((((this.c3 - keyHash) | 0) + node.bG()) | 0);
  return this;
});
$p.S = (function(f) {
  var thisPayloadArity = $m_jl_Integer$().bu(this.a1);
  var i$1 = 0;
  while ((i$1 < thisPayloadArity)) {
    f.b(this.d0(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var thisNodeArity = $m_jl_Integer$().bu(this.aD);
  var j = 0;
  while ((j < thisNodeArity)) {
    this.cZ(j).S(f);
    j = ((1 + j) | 0);
  }
});
$p.lP = (function(that, shift) {
  if ((this === that)) {
    return true;
  } else if ((!(that instanceof $c_sci_HashCollisionSetNode))) {
    if ((that instanceof $c_sci_BitmapIndexedSetNode)) {
      var thisBitmap = (this.a1 | this.aD);
      var nodeBitmap = (that.a1 | that.aD);
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
        var bitpos = $m_sci_Node$().bP(bitsToSkip);
        if (((this.a1 & bitpos) !== 0)) {
          if (((that.a1 & bitpos) !== 0)) {
            isValidSubset = $m_sr_BoxesRunTime$().k(this.d0($m_sci_Node$().fl(this.a1, bitpos)), that.d0($m_sci_Node$().fl(that.a1, bitpos)));
          } else {
            var thisDataIndex = $m_sci_Node$().fl(this.a1, bitpos);
            var payload = this.d0(thisDataIndex);
            var subNode = that.cZ($m_sci_Node$().fl(that.aD, bitpos));
            var elementUnimprovedHash = this.cu(thisDataIndex);
            var elementHash = $m_sc_Hashing$().bi(elementUnimprovedHash);
            isValidSubset = subNode.hu(payload, elementUnimprovedHash, elementHash, ((5 + shift) | 0));
          }
        } else if (((that.a1 & bitpos) === 0)) {
          var subNode0 = this.cZ($m_sci_Node$().fl(this.aD, bitpos));
          var subNode1 = that.cZ($m_sci_Node$().fl(that.aD, bitpos));
          isValidSubset = subNode0.lP(subNode1, ((5 + shift) | 0));
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
    } else if ((((((this.c3 === that.c3) && (this.aD === that.aD)) && (this.a1 === that.a1)) && (this.bl === that.bl)) && $m_ju_Arrays$().iQ(this.ci, that.ci))) {
      var a1 = this.bf;
      var a2 = that.bf;
      var length = this.bf.a.length;
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
$p.u = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.w = (function() {
  return $m_sc_StringOps$().tr("BitmapIndexedSetNode(size=%s, dataMap=%x, nodeMap=%x)", $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [this.bl, this.a1, this.aD]));
});
$p.qk = (function() {
  var this$1 = this.bf;
  var contentClone = this$1.j();
  var contentLength = contentClone.a.length;
  var i$1 = $m_jl_Integer$().bu(this.a1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].qm();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedSetNode(this.a1, this.aD, contentClone, this.ci.j(), this.bl, this.c3);
});
$p.l9 = (function(f) {
  var iN = $m_jl_Integer$().bu(this.a1);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.cE(this.d0(i$1), this.cu(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().bu(this.aD);
  var j = 0;
  while ((j < jN)) {
    this.cZ(j).l9(f);
    j = ((1 + j) | 0);
  }
});
$p.qm = (function() {
  return this.qk();
});
$p.rs = (function(element, originalHash, hash, shift) {
  return this.rr(element, originalHash, hash, shift);
});
$p.hw = (function(index) {
  return this.cZ(index);
});
function $isArrayOf_sci_BitmapIndexedSetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cm)));
}
var $d_sci_BitmapIndexedSetNode = new $TypeData().i($c_sci_BitmapIndexedSetNode, "scala.collection.immutable.BitmapIndexedSetNode", ({
  cm: 1,
  cG: 1,
  aG: 1
}));
/** @constructor */
function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
  this.ks = 0;
  this.ei = 0;
  this.aG = null;
  this.ks = originalHash;
  this.ei = hash;
  this.aG = content;
  $m_s_Predef$().rc((this.aG.m() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.gi = (function(key) {
  var iter = this.aG.f();
  var i = 0;
  while (iter.l()) {
    if ($m_sr_BoxesRunTime$().k(iter.e().bz(), key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.M = (function() {
  return this.aG.m();
});
$p.kS = (function(key, originalHash, hash, shift) {
  var this$1 = this.iT(key, originalHash, hash, shift);
  if (this$1.c()) {
    $m_sc_Iterator$().E.e();
    throw new $c_jl_ClassCastException();
  } else {
    return this$1.H();
  }
});
$p.iT = (function(key, originalHash, hash, shift) {
  if ((this.ei === hash)) {
    var index = this.gi(key);
    return ((index >= 0) ? new $c_s_Some(this.aG.v(index).bs()) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.lf = (function(key, originalHash, hash, shift, f) {
  if ((this.ei === hash)) {
    var x1 = this.gi(key);
    return ((x1 === (-1)) ? f.J() : this.aG.v(x1).bs());
  } else {
    return f.J();
  }
});
$p.l2 = (function(key, originalHash, hash, shift) {
  return ((this.ei === hash) && (this.gi(key) >= 0));
});
$p.rt = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.gi(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.aG.v(index).bs(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.aG.e5(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.aG.bt(new $c_T2(key, value))));
});
$p.hx = (function() {
  return false;
});
$p.hC = (function() {
  return 0;
});
$p.cY = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.gg = (function() {
  return true;
});
$p.hG = (function() {
  return this.aG.m();
});
$p.dm = (function(index) {
  return this.aG.v(index).bz();
});
$p.dn = (function(index) {
  return this.aG.v(index).bs();
});
$p.lg = (function(index) {
  return this.aG.v(index);
});
$p.cu = (function(index) {
  return this.ks;
});
$p.S = (function(f) {
  this.aG.S(f);
});
$p.fk = (function(f) {
  this.aG.S(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.bz();
      var v = x0$1$2$2.bs();
      return f.cE(k, v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  })));
});
$p.n = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.ei === that.ei) && (this.aG.m() === that.aG.m()))) {
      var iter = this.aG.f();
      while (iter.l()) {
        var x1$2 = iter.e();
        if ((x1$2 === null)) {
          throw new $c_s_MatchError(x1$2);
        }
        var key = x1$2.bz();
        var value = x1$2.bs();
        var index = that.gi(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().k(value, that.aG.v(index).bs())))) {
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
$p.bG = (function() {
  return Math.imul(this.aG.m(), this.ei);
});
$p.ql = (function() {
  return new $c_sci_HashCollisionMapNode(this.ks, this.ei, this.aG);
});
$p.hw = (function(index) {
  return this.cY(index);
});
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cn)));
}
var $d_sci_HashCollisionMapNode = new $TypeData().i($c_sci_HashCollisionMapNode, "scala.collection.immutable.HashCollisionMapNode", ({
  cn: 1,
  cB: 1,
  aG: 1
}));
/** @constructor */
function $c_sci_HashCollisionSetNode(originalHash, hash, content) {
  this.iq = 0;
  this.fQ = 0;
  this.aN = null;
  this.iq = originalHash;
  this.fQ = hash;
  this.aN = content;
  $m_s_Predef$().rc((this.aN.m() >= 2));
}
$p = $c_sci_HashCollisionSetNode.prototype = new $h_sci_SetNode();
$p.constructor = $c_sci_HashCollisionSetNode;
/** @constructor */
function $h_sci_HashCollisionSetNode() {
}
$h_sci_HashCollisionSetNode.prototype = $p;
$p.hu = (function(element, originalHash, hash, shift) {
  return ((this.fQ === hash) && $f_sc_SeqOps__contains__O__Z(this.aN, element));
});
$p.rs = (function(element, originalHash, hash, shift) {
  return (this.hu(element, originalHash, hash, shift) ? this : new $c_sci_HashCollisionSetNode(originalHash, hash, this.aN.bt(element)));
});
$p.hx = (function() {
  return false;
});
$p.hC = (function() {
  return 0;
});
$p.cZ = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.gg = (function() {
  return true;
});
$p.hG = (function() {
  return this.aN.m();
});
$p.d0 = (function(index) {
  return this.aN.v(index);
});
$p.cu = (function(index) {
  return this.iq;
});
$p.M = (function() {
  return this.aN.m();
});
$p.S = (function(f) {
  var iter = this.aN.f();
  while (iter.l()) {
    f.b(iter.e());
  }
});
$p.bG = (function() {
  return Math.imul(this.aN.m(), this.fQ);
});
$p.lP = (function(that, shift) {
  if ((this === that)) {
    return true;
  } else if ((that instanceof $c_sci_HashCollisionSetNode)) {
    if ((this.aN.m() <= that.aN.m())) {
      var this$1 = this.aN;
      var eta$0$1 = that.aN;
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
    } else if (((this.fQ === that.fQ) && (this.aN.m() === that.aN.m()))) {
      var this$3 = this.aN;
      var eta$0$1 = that.aN;
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
$p.u = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.l9 = (function(f) {
  var iter = this.aN.f();
  while (iter.l()) {
    var next = iter.e();
    f.cE(next, this.iq);
  }
});
$p.qm = (function() {
  return new $c_sci_HashCollisionSetNode(this.iq, this.fQ, this.aN);
});
$p.hw = (function(index) {
  return this.cZ(index);
});
function $isArrayOf_sci_HashCollisionSetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.co)));
}
var $d_sci_HashCollisionSetNode = new $TypeData().i($c_sci_HashCollisionSetNode, "scala.collection.immutable.HashCollisionSetNode", ({
  co: 1,
  cG: 1,
  aG: 1
}));
/** @constructor */
function $c_sci_HashMap$() {
  this.kt = null;
  $n_sci_HashMap$ = this;
  this.kt = new $c_sci_HashMap($m_sci_MapNode$().pm);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.tt = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().kQ(source).lI());
});
$p.ay = (function(it) {
  return this.tt(it);
});
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  hl: 1,
  b6: 1,
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
  this.h6 = null;
  $n_sci_HashSet$ = this;
  this.h6 = new $c_sci_HashSet($m_sci_SetNode$().pr);
}
$p = $c_sci_HashSet$.prototype = new $h_O();
$p.constructor = $c_sci_HashSet$;
/** @constructor */
function $h_sci_HashSet$() {
}
$h_sci_HashSet$.prototype = $p;
$p.tu = (function(source) {
  return ((source instanceof $c_sci_HashSet) ? source : ((source.s() === 0) ? this.h6 : new $c_sci_HashSetBuilder().kR(source).lJ()));
});
$p.aK = (function() {
  return new $c_sci_HashSetBuilder();
});
$p.ay = (function(source) {
  return this.tu(source);
});
$p.bH = (function() {
  return this.h6;
});
var $d_sci_HashSet$ = new $TypeData().i($c_sci_HashSet$, "scala.collection.immutable.HashSet$", ({
  ho: 1,
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
  this.pj = null;
  this.pk = null;
  this.pj = head;
  this.pk = tail;
}
$p = $c_sci_LazyList$State$Cons.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$State$Cons;
/** @constructor */
function $h_sci_LazyList$State$Cons() {
}
$h_sci_LazyList$State$Cons.prototype = $p;
$p.o = (function() {
  return this.pj;
});
$p.aM = (function() {
  return this.pk;
});
var $d_sci_LazyList$State$Cons = new $TypeData().i($c_sci_LazyList$State$Cons, "scala.collection.immutable.LazyList$State$Cons", ({
  hy: 1,
  ct: 1,
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
$p.lj = (function() {
  throw new $c_ju_NoSuchElementException("head of empty lazy list");
});
$p.aM = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
});
$p.o = (function() {
  this.lj();
});
var $d_sci_LazyList$State$Empty$ = new $TypeData().i($c_sci_LazyList$State$Empty$, "scala.collection.immutable.LazyList$State$Empty$", ({
  hz: 1,
  ct: 1,
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
$p.qE = (function(it) {
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
  return new $c_sci_MapBuilderImpl().pQ(it).rd();
});
$p.ay = (function(it) {
  return this.qE(it);
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  hD: 1,
  b6: 1,
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
$p.tw = (function(it) {
  return ((it.s() === 0) ? $m_sci_Set$EmptySet$() : ((it instanceof $c_sci_HashSet) ? it : (false ? it : ((it instanceof $c_sci_Set$Set1) ? it : ((it instanceof $c_sci_Set$Set2) ? it : ((it instanceof $c_sci_Set$Set3) ? it : ((it instanceof $c_sci_Set$Set4) ? it : ((it instanceof $c_sci_HashMap$HashKeySet) ? it : ((it instanceof $c_sci_MapOps$ImmutableKeySet) ? it : new $c_sci_SetBuilderImpl().pR(it).re())))))))));
});
$p.aK = (function() {
  return new $c_sci_SetBuilderImpl();
});
$p.ay = (function(source) {
  return this.tw(source);
});
$p.bH = (function() {
  return $m_sci_Set$EmptySet$();
});
var $d_sci_Set$ = new $TypeData().i($c_sci_Set$, "scala.collection.immutable.Set$", ({
  hY: 1,
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
  var x1 = coll.s();
  if ((x1 !== (-1))) {
    var that = ((x1 + delta) | 0);
    $thiz.bj(((that < 0) ? 0 : that));
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
$p.tx = (function(it) {
  var k = it.s();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).pT(it);
});
$p.aK = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.bH = (function() {
  return $ct_scm_HashSet__(new $c_scm_HashSet());
});
$p.ay = (function(source) {
  return this.tx(source);
});
var $d_scm_HashSet$ = new $TypeData().i($c_scm_HashSet$, "scala.collection.mutable.HashSet$", ({
  iv: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iL)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(f) {
  this.pD = null;
  this.pD = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855() {
}
$h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = $p;
$p.J = (function() {
  return (0, this.pD)();
});
var $d_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855 = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855, "scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855", ({
  jb: 1,
  d5: 1,
  b3: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(f) {
  this.pE = null;
  this.pE = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28() {
}
$h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = $p;
$p.b = (function(x0) {
  return (0, this.pE)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28, "scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28", ({
  jc: 1,
  bj: 1,
  i: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(f) {
  this.pF = null;
  this.pF = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc() {
}
$h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = $p;
$p.cE = (function(x0, x1) {
  return (0, this.pF)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc, "scala.runtime.AbstractFunction2.$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc", ({
  jd: 1,
  d6: 1,
  b4: 1
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
$p.w = (function() {
  return "<function1>";
});
$p.b = (function(x) {
  return this.bF(x, $m_s_PartialFunction$().ie);
});
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  jm: 1,
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
$p.qH = (function(f) {
  return ((arg1$2) => f.b(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  jt: 1,
  ju: 1,
  jv: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.jM)));
}
/** @constructor */
function $c_LMain$AdversarySelector(adversary, level) {
  this.d9 = null;
  this.cw = 0;
  this.d9 = adversary;
  this.cw = level;
}
$p = $c_LMain$AdversarySelector.prototype = new $h_O();
$p.constructor = $c_LMain$AdversarySelector;
/** @constructor */
function $h_LMain$AdversarySelector() {
}
$h_LMain$AdversarySelector.prototype = $p;
$p.bw = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().i(acc, $f_T__hashCode__I("AdversarySelector"));
  acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().P(this.d9));
  acc = $m_sr_Statics$().i(acc, this.cw);
  return $m_sr_Statics$().F(acc, 2);
});
$p.n = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_LMain$AdversarySelector)) {
    if ((this.cw === x$0.cw)) {
      var x = this.d9;
      var x$2 = x$0.d9;
      return ((x === null) ? (x$2 === null) : x.n(x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.w = (function() {
  return $m_sr_ScalaRunTime$().g5(this);
});
$p.b9 = (function() {
  return 2;
});
$p.bb = (function() {
  return "AdversarySelector";
});
$p.ba = (function(n) {
  if ((n === 0)) {
    return this.d9;
  }
  if ((n === 1)) {
    return this.cw;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_LMain$AdversarySelector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bk)));
}
var $d_LMain$AdversarySelector = new $TypeData().i($c_LMain$AdversarySelector, "Main$AdversarySelector", ({
  bk: 1,
  d: 1,
  C: 1,
  a: 1
}));
/** @constructor */
function $c_Ladversaries_Adversary(name, rules, lossCondition, escalation, fear) {
  this.e6 = null;
  this.fv = null;
  this.gz = null;
  this.gx = null;
  this.gy = null;
  this.e6 = name;
  this.fv = rules;
  this.gz = lossCondition;
  this.gx = escalation;
  this.gy = fear;
}
$p = $c_Ladversaries_Adversary.prototype = new $h_O();
$p.constructor = $c_Ladversaries_Adversary;
/** @constructor */
function $h_Ladversaries_Adversary() {
}
$h_Ladversaries_Adversary.prototype = $p;
$p.bw = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().d4(this, (-889275714), false);
});
$p.n = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Ladversaries_Adversary)) {
    if ((this.e6 === x$0.e6)) {
      var x = this.fv;
      var x$2 = x$0.fv;
      var $x_2 = ((x === null) ? (x$2 === null) : x.n(x$2));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$3 = this.gz;
      var x$4 = x$0.gz;
      var $x_1 = ((x$3 === null) ? (x$4 === null) : x$3.n(x$4));
    } else {
      var $x_1 = false;
    }
    if (($x_1 && (this.gx === x$0.gx))) {
      var x$5 = this.gy;
      var x$6 = x$0.gy;
      return ((x$5 === null) ? (x$6 === null) : x$5.n(x$6));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.w = (function() {
  return $m_sr_ScalaRunTime$().g5(this);
});
$p.b9 = (function() {
  return 5;
});
$p.bb = (function() {
  return "Adversary";
});
$p.ba = (function(n) {
  switch (n) {
    case 0: {
      return this.e6;
      break;
    }
    case 1: {
      return this.fv;
      break;
    }
    case 2: {
      return this.gz;
      break;
    }
    case 3: {
      return this.gx;
      break;
    }
    case 4: {
      return this.gy;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Ladversaries_Adversary(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bl)));
}
var $d_Ladversaries_Adversary = new $TypeData().i($c_Ladversaries_Adversary, "adversaries.Adversary", ({
  bl: 1,
  d: 1,
  C: 1,
  a: 1
}));
/** @constructor */
function $c_Ladversaries_Rule(level, stage, text, removeAboveLevel) {
  this.ds = 0;
  this.dt = null;
  this.eN = null;
  this.eM = null;
  this.ds = level;
  this.dt = stage;
  this.eN = text;
  this.eM = removeAboveLevel;
}
$p = $c_Ladversaries_Rule.prototype = new $h_O();
$p.constructor = $c_Ladversaries_Rule;
/** @constructor */
function $h_Ladversaries_Rule() {
}
$h_Ladversaries_Rule.prototype = $p;
$p.bw = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().i(acc, $f_T__hashCode__I("Rule"));
  acc = $m_sr_Statics$().i(acc, this.ds);
  acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().P(this.dt));
  acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().P(this.eN));
  acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().P(this.eM));
  return $m_sr_Statics$().F(acc, 4);
});
$p.n = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Ladversaries_Rule)) {
    if ((this.ds === x$0.ds)) {
      var x = this.dt;
      var x$2 = x$0.dt;
      var $x_1 = (x === x$2);
    } else {
      var $x_1 = false;
    }
    if (($x_1 && (this.eN === x$0.eN))) {
      var x$3 = this.eM;
      var x$4 = x$0.eM;
      return ((x$3 === null) ? (x$4 === null) : x$3.n(x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.w = (function() {
  return $m_sr_ScalaRunTime$().g5(this);
});
$p.b9 = (function() {
  return 4;
});
$p.bb = (function() {
  return "Rule";
});
$p.ba = (function(n) {
  switch (n) {
    case 0: {
      return this.ds;
      break;
    }
    case 1: {
      return this.dt;
      break;
    }
    case 2: {
      return this.eN;
      break;
    }
    case 3: {
      return this.eM;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Ladversaries_Rule(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bm)));
}
var $d_Ladversaries_Rule = new $TypeData().i($c_Ladversaries_Rule, "adversaries.Rule", ({
  bm: 1,
  d: 1,
  C: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2(parentParam$2, onTryParam$1, outer) {
  this.mb = null;
  this.jk = null;
  this.mb = onTryParam$1;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.jk = parentParam$2;
}
$p = $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2;
/** @constructor */
function $h_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2() {
}
$h_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2.prototype = $p;
$p.hE = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.j1 = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.gp = (function(nextValue, transaction) {
  this.mb.cE(nextValue, transaction);
});
var $d_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2 = new $TypeData().i($c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2, "com.raquo.airstream.common.InternalParentObserver$$anon$2", ({
  du: 1,
  aC: 1,
  ds: 1,
  bo: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNextParam$2, handleObserverErrors$3, onErrorParam$2, outer) {
  this.mg = null;
  this.me = false;
  this.jm = null;
  this.mf = null;
  this.mg = onNextParam$2;
  this.me = handleObserverErrors$3;
  this.jm = onErrorParam$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.mf = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $p;
$p.e1 = (function() {
  return this.mf;
});
$p.dY = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.w = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.gm = (function(nextValue) {
  try {
    this.mg.b(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.me) {
      this.hD(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cL(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.hD = (function(error) {
  try {
    if (this.jm.bX(error)) {
      this.jm.b(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cL(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cL(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.eI = (function(nextValue) {
  nextValue.ct(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((error) => {
    this.hD(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue$2) => {
    this.gm(nextValue$2);
  })));
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$8 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$8, "com.raquo.airstream.core.Observer$$anon$8", ({
  dz: 1,
  aI: 1,
  Y: 1,
  aS: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTryParam$2, handleObserverErrors$4, outer) {
  this.jn = null;
  this.mh = false;
  this.mi = null;
  this.jn = onTryParam$2;
  this.mh = handleObserverErrors$4;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.mi = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $p;
$p.e1 = (function() {
  return this.mi;
});
$p.dY = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.w = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.gm = (function(nextValue) {
  this.eI(new $c_s_util_Success(nextValue));
});
$p.hD = (function(error) {
  this.eI(new $c_s_util_Failure(error));
});
$p.eI = (function(nextValue) {
  try {
    if (this.jn.bX(nextValue)) {
      this.jn.b(nextValue);
    } else {
      nextValue.ct(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cL(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.mh && nextValue.qS())) {
      this.hD(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.ct(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((originalError) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cL(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError));
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cL(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
      })));
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$9 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$9, "com.raquo.airstream.core.Observer$$anon$9", ({
  dA: 1,
  aI: 1,
  Y: 1,
  aS: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.no = null;
  this.np = false;
  this.rw = null;
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
$p.v7 = (function() {
  if ((!this.np)) {
    this.no = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.np = true;
  }
  return this.no;
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$svg$, "com.raquo.laminar.api.Laminar$svg$", ({
  ej: 1,
  eG: 1,
  es: 1,
  eu: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$() {
  this.y = null;
  $n_Lcom_raquo_laminar_api_package$ = this;
  this.y = new $c_Lcom_raquo_laminar_api_package$$anon$1();
}
$p = $c_Lcom_raquo_laminar_api_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$() {
}
$h_Lcom_raquo_laminar_api_package$.prototype = $p;
var $d_Lcom_raquo_laminar_api_package$ = new $TypeData().i($c_Lcom_raquo_laminar_api_package$, "com.raquo.laminar.api.package$", ({
  en: 1,
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
  this.oc = null;
  this.oe = false;
  this.od = null;
  this.jI = null;
  this.oc = initialContext;
  this.oe = preferStrictMode;
  this.od = insertFn;
  this.jI = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.kZ = (function(element) {
  var this$1 = this.oc;
  var insertContext = (this$1.c() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().uN(element, this.oe, this.jI) : this$1.H());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((mountContext) => this.od.kT(insertContext, mountContext.jP, this.jI)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().hM(element.cM, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.dk = (function(element) {
  this.kZ(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  eJ: 1,
  Z: 1,
  eN: 1,
  eK: 1
}));
function $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__($thiz, name, prefixes) {
  $thiz.fD = name;
  $thiz.fE = prefixes;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_StyleProp() {
  this.fD = null;
  this.fE = null;
}
$p = $c_Lcom_raquo_laminar_keys_StyleProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_StyleProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_StyleProp() {
}
$h_Lcom_raquo_laminar_keys_StyleProp.prototype = $p;
$p.g2 = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, $dp_toString__T(value), new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, styleProp, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().uX(element, styleProp, value$2);
  })));
});
$p.kO = (function(values, ev) {
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.eJ(), new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((el, v, _$1) => {
    $m_Lcom_raquo_laminar_DomApi$().uV(el, this, v);
  })));
});
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.ot = null;
  this.jT = null;
  this.ot = $m_s_None$();
  this.jT = $m_Lcom_raquo_laminar_DomApi$().sX(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.hI = (function(maybeNextParent) {
  this.ot = maybeNextParent;
});
$p.hO = (function(maybeNextParent) {
});
$p.dk = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().g7(parentNode, this, (void 0));
});
$p.aL = (function() {
  return this.jT;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  ff: 1,
  aJ: 1,
  Z: 1,
  b0: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.ox = null;
  this.jY = null;
  this.ox = $m_s_None$();
  this.jY = $m_Lcom_raquo_laminar_DomApi$().t0(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.hI = (function(maybeNextParent) {
  this.ox = maybeNextParent;
});
$p.hO = (function(maybeNextParent) {
});
$p.dk = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().g7(parentNode, this, (void 0));
});
$p.vc = (function() {
  return this.jY.data;
});
$p.aL = (function() {
  return this.jY;
});
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_TextNode, "com.raquo.laminar.nodes.TextNode", ({
  fl: 1,
  aJ: 1,
  Z: 1,
  b0: 1
}));
function $isArrayOf_Ljava_io_IOException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fs)));
}
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  fw: 1,
  fA: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fD)));
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fE)));
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
  $thiz.r = "";
  return $thiz;
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException();
  }
  $thiz.r = str;
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
  this.r = null;
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.pW = (function(str) {
  var str$1 = $m_jl_String$().uh(str, 0, str.a.length);
  this.r = (("" + this.r) + str$1);
  return this;
});
$p.w = (function() {
  return this.r;
});
$p.m = (function() {
  return this.r.length;
});
$p.qf = (function(index) {
  return this.r.charCodeAt(index);
});
$p.qM = (function(srcBegin, srcEnd, dst, dstBegin) {
  $f_T__getChars__I__I__AC__I__V(this.r, srcBegin, srcEnd, dst, dstBegin);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  fO: 1,
  b1: 1,
  ft: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fR)));
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fU)));
}
function $isArrayOf_Ljava_math_BigDecimal(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fW)));
}
function $isArrayOf_Ljava_math_BigInteger(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fX)));
}
function $p_ju_Formatter__sendToDest__T__V($thiz, s) {
  if (($thiz.eU === null)) {
    $thiz.ec = (("" + $thiz.ec) + s);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__V($thiz, s1, s2) {
  if (($thiz.eU === null)) {
    $thiz.ec = ((("" + $thiz.ec) + s1) + s2);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s1, s2]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__T__V($thiz, s1, s2, s3) {
  if (($thiz.eU === null)) {
    $thiz.ec = (($thiz.ec + (("" + s1) + s2)) + s3);
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
      var this$2 = $thiz.eU;
      this$2.r = (("" + this$2.r) + t);
      i = ((1 + i) | 0);
    }
  } catch (e) {
    if ((!false)) {
      throw e;
    }
  }
}
function $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter($thiz, localeInfo, format, args) {
  if ($thiz.k9) {
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
    var re = $m_ju_Formatter$().oK;
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
        $thiz.ls(flags);
      }
      $p_ju_Formatter__sendToDest__T__V($thiz, "\n");
    } else if ((conversion$2 === 37)) {
      if ((precision !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.ls(flags);
      }
      if ((((1 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((-2) & flags) !== 0)) {
        $thiz.iW(37, flags, (-2));
      }
      $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, "%");
    } else {
      var conversionLower = (((256 & flags) !== 0) ? (65535 & ((32 + conversion$2) | 0)) : conversion$2);
      var illegalFlags = $m_ju_Formatter$().oJ.a[(((-97) + conversionLower) | 0)];
      if (((illegalFlags === (-1)) || (((256 & flags) & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion$2);
      }
      if ((((17 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.ls(flags);
      }
      if (((precision !== (-1)) && ((512 & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if (((flags & illegalFlags) !== 0)) {
        $thiz.iW(conversionLower, flags, illegalFlags);
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
        arg.vQ($thiz, formattableFlags, width, precision);
      } else {
        if (((2 & flags) !== 0)) {
          $thiz.iW(conversionLower, flags, 2);
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
          $thiz.hz(conversionLower, arg);
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
        var $x_3 = $m_RTLong$().lD(t.p, t.t);
      } else {
        if ((!false)) {
          $thiz.hz(conversionLower, arg);
        }
        var $x_3 = arg.w();
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
        $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, arg.j8(radix), prefix);
      } else {
        if ($isInt(arg)) {
          var x2$5 = (arg | 0);
          var str$6 = (isOctal ? (+(x2$5 >>> 0.0)).toString(8) : (+(x2$5 >>> 0.0)).toString(16));
        } else {
          if ((!(arg instanceof $c_RTLong))) {
            $thiz.hz(conversionLower, arg);
          }
          var t$1 = $uJ(arg);
          var lo$1 = t$1.p;
          var hi$1 = t$1.t;
          var str$6 = (isOctal ? $m_jl_Long$().tZ(lo$1, hi$1) : $m_jl_Long$().qU(lo$1, hi$1));
        }
        if (((76 & flags) !== 0)) {
          $thiz.iW(conversionLower, flags, 76);
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
          $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().u1(x2$6), flags, precision, conversionLower, localeInfo, width);
        }
      } else if (false) {
        $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().u0(arg), flags, precision, conversionLower, localeInfo, width);
      } else {
        $thiz.hz(conversionLower, arg);
      }
      break;
    }
    case 97: {
      if (((typeof arg) === "number")) {
        $p_ju_Formatter__formatHexFloatingPoint__I__I__I__D__V($thiz, flags, width, precision, (+arg));
      } else {
        $thiz.hz(conversionLower, arg);
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
  var rounded = x.rf(((1 + digitsAfterDot) | 0));
  var signStr = (rounded.dv ? "-" : "");
  var intStr = rounded.dw;
  var fractionalDigitCount = (((-1) + intStr.length) | 0);
  var missingZeros = ((digitsAfterDot - fractionalDigitCount) | 0);
  var integerPart = intStr.substring(0, 1);
  var fractionalPart = (("" + intStr.substring(1)) + $m_ju_Formatter$().lr(missingZeros));
  var significandStr = (((fractionalPart === "") && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + fractionalPart));
  var exponent = ((fractionalDigitCount - rounded.da) | 0);
  var exponentSign = ((exponent < 0) ? "-" : "+");
  var this$2 = ((exponent < 0) ? ((-exponent) | 0) : exponent);
  var exponentAbsStr0 = ("" + this$2);
  var exponentAbsStr = ((exponentAbsStr0.length === 1) ? ("0" + exponentAbsStr0) : exponentAbsStr0);
  return ((((signStr + significandStr) + "e") + exponentSign) + exponentAbsStr);
}
function $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, scale, forceDecimalSep) {
  var rounded = x.uZ(scale);
  var signStr = (rounded.dv ? "-" : "");
  var intStr = rounded.dw;
  var intStrLen = intStr.length;
  var minDigits = ((1 + scale) | 0);
  var expandedIntStr = ((intStrLen >= minDigits) ? intStr : (("" + $m_ju_Formatter$().lr(((minDigits - intStrLen) | 0))) + intStr));
  var dotPos = ((expandedIntStr.length - scale) | 0);
  var integerPart = (signStr + expandedIntStr.substring(0, dotPos));
  return (((scale === 0) && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + expandedIntStr.substring(dotPos)));
}
function $p_ju_Formatter__generalScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, precision, forceDecimalSep) {
  var p = ((precision === 0) ? 1 : precision);
  var rounded = x.rf(p);
  var orderOfMagnitude = (((((-1) + rounded.dw.length) | 0) - rounded.da) | 0);
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
    var t = $m_jl_FloatingPointBits$().t7(arg);
    var lo = t.p;
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
    var lo$3 = t$1.p;
    var hi$4 = t$1.t;
    var exponent = (x1___3 | 0);
    var t$2 = new $c_RTLong(lo$3, hi$4);
    var lo$4 = t$2.p;
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
    var baseStr = $m_jl_Long$().qU(roundedMantissa__lo, roundedMantissa__hi);
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
  $thiz.eU = dest;
  $thiz.oI = formatterLocaleInfo;
  $thiz.ec = "";
  $thiz.k9 = false;
  return $thiz;
}
function $ct_ju_Formatter__($thiz) {
  $ct_ju_Formatter__jl_Appendable__ju_Formatter$LocaleInfo__($thiz, null, $m_ju_Formatter$RootLocaleInfo$());
  return $thiz;
}
/** @constructor */
function $c_ju_Formatter() {
  this.eU = null;
  this.oI = null;
  this.ec = null;
  this.k9 = false;
}
$p = $c_ju_Formatter.prototype = new $h_O();
$p.constructor = $c_ju_Formatter;
/** @constructor */
function $h_ju_Formatter() {
}
$h_ju_Formatter.prototype = $p;
$p.tq = (function(format, args) {
  return $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter(this, this.oI, format, args);
});
$p.w = (function() {
  if (this.k9) {
    throw new $c_ju_FormatterClosedException();
  }
  return ((this.eU === null) ? this.ec : this.eU.r);
});
$p.ls = (function(flags) {
  throw new $c_ju_IllegalFormatFlagsException($p_ju_Formatter__flagsToString__I__T(this, flags));
});
$p.iW = (function(conversionLower, flags, illegalFlags) {
  throw new $c_ju_FormatFlagsConversionMismatchException($p_ju_Formatter__flagsToString__I__T(this, (flags & illegalFlags)), conversionLower);
});
$p.hz = (function(conversionLower, arg) {
  throw new $c_ju_IllegalFormatConversionException(conversionLower, $objectGetClass(arg));
});
var $d_ju_Formatter = new $TypeData().i($c_ju_Formatter, "java.util.Formatter", ({
  g2: 1,
  fq: 1,
  fx: 1,
  fr: 1
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
$p.bF = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.w = (function() {
  return "<function1>";
});
$p.bX = (function(x) {
  return false;
});
$p.kU = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.b = (function(v1) {
  this.kU(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  gx: 1,
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
$p.ht = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.cW = (function(n) {
  return this.gs(n, (-1));
});
$p.gs = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.w = (function() {
  return "<iterator>";
});
$p.bV = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.iM = (function(pf) {
  return $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(this, pf);
});
$p.eD = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fs = (function() {
  return $m_sci_Nil$().bR(this);
});
$p.j6 = (function(evidence$2) {
  return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2);
});
$p.s = (function() {
  return (-1);
});
/** @constructor */
function $c_sc_Iterable$() {
  this.fN = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_Iterable$());
}
$p = $c_sc_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sc_Iterable$;
/** @constructor */
function $h_sc_Iterable$() {
}
$h_sc_Iterable$.prototype = $p;
var $d_sc_Iterable$ = new $TypeData().i($c_sc_Iterable$, "scala.collection.Iterable$", ({
  gS: 1,
  c5: 1,
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
  this.ko = null;
  this.p9 = null;
  this.pa = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.p9 = $ct_O__(new $c_O());
  this.pa = new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sc_Map$().p9));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  h3: 1,
  h4: 1,
  b6: 1,
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
  $thiz.eg = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.eg = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.q2 = (function(elems) {
  return this.eg.dX(elems);
});
$p.t9 = (function() {
  return this.eg.bH();
});
$p.iS = (function(it) {
  return this.eg.ay(it);
});
$p.aK = (function() {
  return this.eg.aK();
});
$p.ay = (function(source) {
  return this.iS(source);
});
$p.bH = (function() {
  return this.t9();
});
$p.dX = (function(elems) {
  return this.q2(elems);
});
function $f_sc_SeqOps__appended__O__O($thiz, elem) {
  return $thiz.aZ().ay($ct_sc_View$Appended__sc_IterableOps__O__(new $c_sc_View$Appended(), $thiz, elem));
}
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cH(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => x$2$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.gd(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.b3(idx) > 0));
}
function $f_sc_SeqOps__indexOf__O__I__I($thiz, elem, from) {
  return $thiz.fm(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sr_BoxesRunTime$().k(elem, x$1$2$2))), from);
}
function $f_sc_SeqOps__contains__O__Z($thiz, elem) {
  return $thiz.iR(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$3$2$2) => $m_sr_BoxesRunTime$().k(x$3$2$2, elem))));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.b3(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.s();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.s();
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
  var b = $thiz.aZ().aK();
  var it = $thiz.f();
  while (it.l()) {
    b.ax(f.b(it.e()));
  }
  return b.aU();
}
function $f_sc_StrictOptimizedIterableOps__collect__s_PartialFunction__O($thiz, pf) {
  var b = $thiz.aZ().aK();
  var marker = $m_sr_Statics$PFMarker$();
  var it = $thiz.f();
  while (it.l()) {
    var elem = it.e();
    var v = pf.bF(elem, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((marker) => ((x$2$2) => marker))(marker)));
    if ((marker !== v)) {
      b.ax(v);
    }
  }
  return b.aU();
}
function $f_sc_StrictOptimizedIterableOps__flatten__F1__O($thiz, toIterableOnce) {
  var b = $thiz.aZ().aK();
  var it = $thiz.f();
  while (it.l()) {
    b.b2(toIterableOnce.b(it.e()));
  }
  return b.aU();
}
/** @constructor */
function $c_sci_Iterable$() {
  this.fN = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.tv = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.ay.call(this, it));
});
$p.ay = (function(it) {
  return this.tv(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  ht: 1,
  c5: 1,
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
  this.f1 = null;
  this.ph = null;
  $n_sci_LazyList$ = this;
  this.f1 = new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$()))).qA();
  this.ph = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$10$2$2) => $m_sr_Statics$PFMarker$()));
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.dX = (function(elems) {
  return this.ld(elems);
});
$p.rg = (function(ll, f) {
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((restRef) => (() => {
    var it = new $c_sr_ObjectRef(null);
    var itHasNext = false;
    var rest = new $c_sr_ObjectRef(restRef.I);
    while (((!itHasNext) && (!rest.I.c()))) {
      it.I = f.b(rest.I.z().o()).f();
      itHasNext = it.I.l();
      if ((!itHasNext)) {
        rest.I = rest.I.z().aM();
        restRef.I = rest.I;
      }
    }
    if (itHasNext) {
      var head = it.I.e();
      rest.I = rest.I.z().aM();
      restRef.I = rest.I;
      $m_sci_LazyList$();
      return new $c_sci_LazyList$State$Cons(head, ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().lL(it.I, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().rg(rest.I, f).z()))))))));
    } else {
      return $m_sci_LazyList$State$Empty$();
    }
  }))(new $c_sr_ObjectRef(ll))));
});
$p.uR = (function(ll, n) {
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((restRef, iRef) => (() => {
    var rest = restRef.I;
    var i = iRef.aS;
    while (((i > 0) && (!rest.c()))) {
      rest = rest.z().aM();
      restRef.I = rest;
      i = (((-1) + i) | 0);
      iRef.aS = i;
    }
    return rest.z();
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.ld = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.s() === 0) ? this.f1 : new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().lK(coll.f()))))));
});
$p.lL = (function(it, suffix) {
  return (it.l() ? new $c_sci_LazyList$State$Cons(it.e(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().lL(it, suffix))))) : suffix.J());
});
$p.lK = (function(it) {
  return (it.l() ? new $c_sci_LazyList$State$Cons(it.e(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().lK(it))))) : $m_sci_LazyList$State$Empty$());
});
$p.aK = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.bH = (function() {
  return this.f1;
});
$p.ay = (function(source) {
  return this.ld(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  hu: 1,
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
  this.hd = null;
  this.px = null;
  this.hd = outer;
  this.px = f$1;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.sa = (function(x) {
  this.hd.ax(x);
  return this;
});
$p.rZ = (function(xs) {
  this.hd.b2(xs);
  return this;
});
$p.bj = (function(size) {
  this.hd.bj(size);
});
$p.aU = (function() {
  return this.px.b(this.hd.aU());
});
$p.b2 = (function(elems) {
  return this.rZ(elems);
});
$p.ax = (function(elem) {
  return this.sa(elem);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  iq: 1,
  K: 1,
  J: 1,
  I: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.ey = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.ey = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.bj = (function(size) {
});
$p.sb = (function(elem) {
  this.ey.ax(elem);
  return this;
});
$p.s0 = (function(xs) {
  this.ey.b2(xs);
  return this;
});
$p.b2 = (function(elems) {
  return this.s0(elems);
});
$p.ax = (function(elem) {
  return this.sb(elem);
});
$p.aU = (function() {
  return this.ey;
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  bh: 1,
  K: 1,
  J: 1,
  I: 1
}));
function $f_sr_EnumValue__productElement__I__O($thiz, n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
}
/** @constructor */
function $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(f) {
  this.pI = null;
  this.pI = f;
}
$p = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = new $h_sjsr_AnonFunction0();
$p.constructor = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1() {
}
$h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = $p;
$p.J = (function() {
  return (0, this.pI)();
});
var $d_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1 = new $TypeData().i($c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1, "scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1", ({
  jB: 1,
  jA: 1,
  d5: 1,
  b3: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(f) {
  this.pJ = null;
  this.pJ = f;
}
$p = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = new $h_sjsr_AnonFunction1();
$p.constructor = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab() {
}
$h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = $p;
$p.b = (function(x0) {
  return (0, this.pJ)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab = new $TypeData().i($c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab, "scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab", ({
  jD: 1,
  jC: 1,
  bj: 1,
  i: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(f) {
  this.pK = null;
  this.pK = f;
}
$p = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = new $h_sjsr_AnonFunction2();
$p.constructor = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2() {
}
$h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = $p;
$p.cE = (function(x0, x1) {
  return (0, this.pK)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2 = new $TypeData().i($c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2, "scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2", ({
  jF: 1,
  jE: 1,
  d6: 1,
  b4: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(f) {
  this.pL = null;
  this.pL = f;
}
$p = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = new $h_sjsr_AnonFunction3();
$p.constructor = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491;
/** @constructor */
function $h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491() {
}
$h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = $p;
$p.kT = (function(x0, x1, x2) {
  return (0, this.pL)(x0, x1, x2);
});
var $d_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491 = new $TypeData().i($c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491, "scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491", ({
  jH: 1,
  jG: 1,
  je: 1,
  gp: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(f) {
  this.pM = null;
  this.pM = f;
}
$p = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = new $h_sjsr_AnonFunction4();
$p.constructor = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b;
/** @constructor */
function $h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b() {
}
$h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = $p;
$p.sj = (function(x0, x1, x2, x3) {
  return (0, this.pM)(x0, x1, x2, x3);
});
var $d_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b = new $TypeData().i($c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b, "scala.scalajs.runtime.AnonFunction4.$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b", ({
  jJ: 1,
  jI: 1,
  jf: 1,
  gq: 1
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
  this.jb = null;
  this.jb = sel$3;
}
$p = $c_LMain$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_LMain$$anon$1;
/** @constructor */
function $h_LMain$$anon$1() {
}
$h_LMain$$anon$1.prototype = $p;
$p.ln = (function(x) {
  if ((x !== null)) {
    var x7 = x.ds;
    var x8 = x.dt;
    var x$2 = $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage();
    if ((x$2 === x8)) {
      if ((x7 <= this.jb.cw)) {
        return true;
      }
    }
  }
  return false;
});
$p.kW = (function(x, default$1) {
  if ((x !== null)) {
    var x13 = x.ds;
    var x14 = x.dt;
    var x15 = x.eN;
    var x$2 = $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage();
    if ((x$2 === x14)) {
      if ((x13 <= this.jb.cw)) {
        return x15;
      }
    }
  }
  return default$1.b(x);
});
$p.bX = (function(x) {
  return this.ln(x);
});
$p.bF = (function(x, default$1) {
  return this.kW(x, default$1);
});
var $d_LMain$$anon$1 = new $TypeData().i($c_LMain$$anon$1, "Main$$anon$1", ({
  dd: 1,
  as: 1,
  i: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_LMain$$anon$2(subString$2) {
  this.hR = null;
  this.hR = subString$2;
}
$p = $c_LMain$$anon$2.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_LMain$$anon$2;
/** @constructor */
function $h_LMain$$anon$2() {
}
$h_LMain$$anon$2.prototype = $p;
$p.tX = (function(x) {
  var this$1 = this.hR;
  return (!(!this$1.startsWith(x)));
});
$p.sn = (function(x, default$1) {
  var this$1 = this.hR;
  if ((!(!this$1.startsWith(x)))) {
    return new $c_T2(x, $m_sc_StringOps$().qp(this.hR, x.length));
  } else {
    return default$1.b(x);
  }
});
$p.bX = (function(x) {
  return this.tX(x);
});
$p.bF = (function(x, default$1) {
  return this.sn(x, default$1);
});
var $d_LMain$$anon$2 = new $TypeData().i($c_LMain$$anon$2, "Main$$anon$2", ({
  de: 1,
  as: 1,
  i: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_LMain$$anon$3(stage$2, sel$4, outer) {
  this.jc = null;
  this.gw = null;
  this.jc = stage$2;
  this.gw = sel$4;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_LMain$$anon$3.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_LMain$$anon$3;
/** @constructor */
function $h_LMain$$anon$3() {
}
$h_LMain$$anon$3.prototype = $p;
$p.ln = (function(x) {
  if ((x !== null)) {
    var x29 = x.ds;
    var x30 = x.dt;
    var x32 = x.eM;
    var x$2 = this.jc;
    if ((x$2 === x30)) {
      if (((x29 <= this.gw.cw) && (x32.c() || ((x32.H() | 0) > this.gw.cw)))) {
        return true;
      }
    }
  }
  return false;
});
$p.kW = (function(x, default$1) {
  if ((x !== null)) {
    var x35 = x.ds;
    var x36 = x.dt;
    var x37 = x.eN;
    var x38 = x.eM;
    var x$2 = this.jc;
    if ((x$2 === x36)) {
      if (((x35 <= this.gw.cw) && (x38.c() || ((x38.H() | 0) > this.gw.cw)))) {
        return x37;
      }
    }
  }
  return default$1.b(x);
});
$p.bX = (function(x) {
  return this.ln(x);
});
$p.bF = (function(x, default$1) {
  return this.kW(x, default$1);
});
var $d_LMain$$anon$3 = new $TypeData().i($c_LMain$$anon$3, "Main$$anon$3", ({
  df: 1,
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
$p.bw = (function() {
  return new $c_s_Product$$anon$1(this);
});
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.g8($m_Lcom_raquo_ew_JsArray$().bA($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.g9($m_Lcom_raquo_ew_JsArray$().bA($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.eL(false);
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.gl(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
    return subscription;
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$2.bC || (!when))) {
    var $x_1 = f();
  } else {
    this$2.bC = true;
    try {
      var $x_1 = f();
    } finally {
      this$2.bC = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = new $c_Lcom_raquo_airstream_ownership_Subscription(owner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  })));
  var this$ = $thiz.cX();
  this$.push(observer);
  return subscription;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz, observer, shouldCallMaybeWillStart) {
  var this$3 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    if (((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz)) && shouldCallMaybeWillStart)) {
      $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    }
    var this$ = $thiz.d2();
    this$.push(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$3.bC || (!when))) {
    f();
  } else {
    this$3.bC = true;
    try {
      f();
    } finally {
      this$3.bC = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$3);
    }
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().rb($thiz.d2(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().rb($thiz.cX(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.gv())) {
    $thiz.gq();
    $thiz.eL(true);
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  if (($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1)) {
    $thiz.gn();
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.go();
    $thiz.eL(false);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.cX();
  var $x_1 = this$.length;
  var this$$1 = $thiz.d2();
  return ((($x_1 | 0) + (this$$1.length | 0)) | 0);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1(outer) {
  this.mk = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.mk = outer;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$$anon$1() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = $p;
$p.lo = (function(x) {
  return (x !== null);
});
$p.kX = (function(x, default$1) {
  return ((x !== null) ? (new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this.mk, x, _$1);
  }))), (void 0)) : default$1.b(x));
});
$p.bX = (function(x) {
  return this.lo(x);
});
$p.bF = (function(x, default$1) {
  return this.kX(x, default$1);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$$anon$1, "com.raquo.airstream.custom.CustomSource$$anon$1", ({
  dL: 1,
  as: 1,
  i: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.i3 = $m_Lcom_raquo_airstream_core_Observer$().qJ(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
function $f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer($thiz, mod) {
  return $m_Lcom_raquo_airstream_core_Observer$().qJ(new $c_Lcom_raquo_airstream_state_Var$$anon$2(mod, $thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$1(outer) {
  this.n1 = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.n1 = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $p;
$p.lp = (function(x) {
  return true;
});
$p.kY = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    this.n1.lM(x, _$1);
  })));
});
$p.bX = (function(x) {
  return this.lp(x);
});
$p.bF = (function(x, default$1) {
  return this.kY(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  e2: 1,
  as: 1,
  i: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$2(mod$6, outer) {
  this.n2 = null;
  this.i4 = null;
  this.n2 = mod$6;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.i4 = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$2.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$2;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$2() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$2.prototype = $p;
$p.lp = (function(x) {
  return true;
});
$p.kY = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    matchResult5: {
      if ((x instanceof $c_s_util_Success)) {
        var nextInput = x.cC;
        var x4 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this.i4.bZ);
        if ((x4 instanceof $c_s_util_Success)) {
          var currentValue = x4.cC;
          try {
            var nextValue = new $c_s_util_Success(this.n2.cE(currentValue, nextInput));
          } catch (e) {
            var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
            matchEnd8: {
              var nextValue;
              if ($m_s_util_control_NonFatal$().cF(e$2)) {
                var nextValue = new $c_s_util_Failure(e$2);
                break matchEnd8;
              }
              throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ai : e$2);
            }
          }
          this.i4.lM(nextValue, trx);
          break matchResult5;
        }
        if ((x4 instanceof $c_s_util_Failure)) {
          var err = x4.di;
          $m_Lcom_raquo_airstream_core_AirstreamError$().cL(new $c_Lcom_raquo_airstream_core_AirstreamError$VarError("Unable to update a failed Var. Consider Var#tryUpdater instead.", new $c_s_Some(err)));
          break matchResult5;
        }
        throw new $c_s_MatchError(x4);
      }
      if ((x instanceof $c_s_util_Failure)) {
        var err$2 = x.di;
        this.i4.lM(new $c_s_util_Failure(err$2), trx);
        break matchResult5;
      }
      throw new $c_s_MatchError(x);
    }
  })));
});
$p.bX = (function(x) {
  return this.lp(x);
});
$p.bF = (function(x, default$1) {
  return this.kY(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$2 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$2, "com.raquo.airstream.state.Var$$anon$2", ({
  e3: 1,
  as: 1,
  i: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_web_WebStorageVar$$anon$1(outer) {
  this.jE = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.jE = outer;
}
$p = $c_Lcom_raquo_airstream_web_WebStorageVar$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_web_WebStorageVar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_web_WebStorageVar$$anon$1() {
}
$h_Lcom_raquo_airstream_web_WebStorageVar$$anon$1.prototype = $p;
$p.lo = (function(x) {
  return ((x !== null) && ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I(this.jE.bZ) > 1));
});
$p.kX = (function(x, default$1) {
  return (((x !== null) && ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I(this.jE.bZ) > 1)) ? (void 0) : default$1.b(x));
});
$p.bX = (function(x) {
  return this.lo(x);
});
$p.bF = (function(x, default$1) {
  return this.kX(x, default$1);
});
var $d_Lcom_raquo_airstream_web_WebStorageVar$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_web_WebStorageVar$$anon$1, "com.raquo.airstream.web.WebStorageVar$$anon$1", ({
  ea: 1,
  as: 1,
  i: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.jU = new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.cM.pP();
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.cM.t1();
  })));
  $thiz.eT = (void 0);
  $thiz.gR = $m_sci_Map$EmptyMap$();
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.eT === (void 0))) {
    $thiz.eT = $m_Lcom_raquo_ew_JsArray$().bA($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener])));
  } else if (unsafePrepend) {
    var x$1 = $thiz.eT;
    if ((x$1 === (void 0))) {
      var $x_1;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.eT;
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
  var x = $thiz.eT;
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.eT;
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
  var keyItemsWithReason = $thiz.gR.dZ(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f = ((item) => {
    var these = keyItemsWithReason;
    while ((!these.c())) {
      var x0 = these.o();
      var x = x0.bz();
      if (((x === null) ? (item === null) : $dp_equals__O__Z(x, item))) {
        var x$3 = x0.bs();
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
      these = these.x();
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
        var t = l.x();
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
              remaining = remaining.x();
              continue;
            }
            var firstMiss = remaining;
            var newHead = new $c_sci_$colon$colon(start.o(), $m_sci_Nil$());
            var toProcess = start.x();
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $c_sci_$colon$colon(toProcess.o(), $m_sci_Nil$());
              currentLast.aV = newElem;
              currentLast = newElem;
              toProcess = toProcess.x();
            }
            var next = firstMiss.x();
            var nextToCopy = next;
            while ((!next.c())) {
              var head = next.o();
              if (((!(!f(head))) !== true)) {
                next = next.x();
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $c_sci_$colon$colon(nextToCopy.o(), $m_sci_Nil$());
                  currentLast.aV = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = nextToCopy.x();
                }
                nextToCopy = next.x();
                next = next.x();
              }
            }
            if ((!nextToCopy.c())) {
              currentLast.aV = nextToCopy;
            }
            var result = newHead;
            break block;
          }
        }
      }
    }
  }
  var this$1 = $thiz.gR.dZ(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f$1 = ((t$1) => result.aj(t$1.bz()));
  var l$1 = this$1;
  block$2: {
    var $x_3;
    while (true) {
      if (l$1.c()) {
        var $x_3 = $m_sci_Nil$();
        break;
      } else {
        var h$1 = l$1.o();
        var t$2 = l$1.x();
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
              remaining$1 = remaining$1.x();
              continue;
            }
            var firstMiss$1 = remaining$1;
            var newHead$1 = new $c_sci_$colon$colon(start$1.o(), $m_sci_Nil$());
            var toProcess$1 = start$1.x();
            var currentLast$1 = newHead$1;
            while ((toProcess$1 !== firstMiss$1)) {
              var newElem$1 = new $c_sci_$colon$colon(toProcess$1.o(), $m_sci_Nil$());
              currentLast$1.aV = newElem$1;
              currentLast$1 = newElem$1;
              toProcess$1 = toProcess$1.x();
            }
            var next$1 = firstMiss$1.x();
            var nextToCopy$1 = next$1;
            while ((!next$1.c())) {
              var head$1 = next$1.o();
              if (((!(!f$1(head$1))) !== true)) {
                next$1 = next$1.x();
              } else {
                while ((nextToCopy$1 !== next$1)) {
                  var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.o(), $m_sci_Nil$());
                  currentLast$1.aV = newElem$2$1;
                  currentLast$1 = newElem$2$1;
                  nextToCopy$1 = nextToCopy$1.x();
                }
                nextToCopy$1 = next$1.x();
                next$1 = next$1.x();
              }
            }
            if ((!nextToCopy$1.c())) {
              currentLast$1.aV = nextToCopy$1;
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
    var rest = itemsToAdd.x();
    while ((rest !== $m_sci_Nil$())) {
      var x0$2 = rest.o();
      var nx = new $c_sci_$colon$colon(f$2(x0$2), $m_sci_Nil$());
      t$3.aV = nx;
      t$3 = nx;
      rest = rest.x();
    }
    var $x_2 = h$2;
  }
  var newItems = $x_3.pY($x_2);
  var domValues = key.jJ.qo(key.of.b($thiz));
  var f$3 = ((elem) => result.aj(elem));
  var l$2 = domValues;
  block$4: {
    var $x_5;
    while (true) {
      if (l$2.c()) {
        var $x_5 = $m_sci_Nil$();
        break;
      } else {
        var h$3 = l$2.o();
        var t$4 = l$2.x();
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
              remaining$2 = remaining$2.x();
              continue;
            }
            var firstMiss$2 = remaining$2;
            var newHead$2 = new $c_sci_$colon$colon(start$2.o(), $m_sci_Nil$());
            var toProcess$2 = start$2.x();
            var currentLast$2 = newHead$2;
            while ((toProcess$2 !== firstMiss$2)) {
              var newElem$3 = new $c_sci_$colon$colon(toProcess$2.o(), $m_sci_Nil$());
              currentLast$2.aV = newElem$3;
              currentLast$2 = newElem$3;
              toProcess$2 = toProcess$2.x();
            }
            var next$2 = firstMiss$2.x();
            var nextToCopy$2 = next$2;
            while ((!next$2.c())) {
              var head$2 = next$2.o();
              if (((!(!f$3(head$2))) !== true)) {
                next$2 = next$2.x();
              } else {
                while ((nextToCopy$2 !== next$2)) {
                  var newElem$2$2 = new $c_sci_$colon$colon(nextToCopy$2.o(), $m_sci_Nil$());
                  currentLast$2.aV = newElem$2$2;
                  currentLast$2 = newElem$2$2;
                  nextToCopy$2 = nextToCopy$2.x();
                }
                nextToCopy$2 = next$2.x();
                next$2 = next$2.x();
              }
            }
            if ((!nextToCopy$2.c())) {
              currentLast$2.aV = nextToCopy$2;
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
        var t$5 = l$3.x();
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
              remaining$3 = remaining$3.x();
              continue;
            }
            var firstMiss$3 = remaining$3;
            var newHead$3 = new $c_sci_$colon$colon(start$3.o(), $m_sci_Nil$());
            var toProcess$3 = start$3.x();
            var currentLast$3 = newHead$3;
            while ((toProcess$3 !== firstMiss$3)) {
              var newElem$4 = new $c_sci_$colon$colon(toProcess$3.o(), $m_sci_Nil$());
              currentLast$3.aV = newElem$4;
              currentLast$3 = newElem$4;
              toProcess$3 = toProcess$3.x();
            }
            var next$3 = firstMiss$3.x();
            var nextToCopy$3 = next$3;
            while ((!next$3.c())) {
              var head$3 = next$3.o();
              if (((!(!f(head$3))) !== true)) {
                next$3 = next$3.x();
              } else {
                while ((nextToCopy$3 !== next$3)) {
                  var newElem$2$3 = new $c_sci_$colon$colon(nextToCopy$3.o(), $m_sci_Nil$());
                  currentLast$3.aV = newElem$2$3;
                  currentLast$3 = newElem$2$3;
                  nextToCopy$3 = nextToCopy$3.x();
                }
                nextToCopy$3 = next$3.x();
                next$3 = next$3.x();
              }
            }
            if ((!nextToCopy$3.c())) {
              currentLast$3.aV = nextToCopy$3;
            }
            var $x_4 = newHead$3;
            break block$6;
          }
        }
      }
    }
  }
  var nextDomValues = $x_5.pY($x_4);
  $thiz.gR = $thiz.gR.eK(key, newItems);
  key.oh.cE($thiz, key.jJ.qr(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.ia, maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.ia;
  $thiz.ia = maybeNextParent;
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.c()) && (!maybePrevParent.H().iO().ce.c()));
  var isNextParentActive = ((!maybeNextParent.c()) && (!maybeNextParent.H().iO().ce.c()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.c() ? $m_s_None$() : new $c_s_Some(maybeNextParent.H().iO())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.c()) {
    $thiz.jU.sy();
  } else {
    var x0 = maybeNextOwner.H();
    $thiz.jU.uY(x0);
  }
}
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  fu: 1,
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
  bO: 1,
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
  b2: 1,
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
  fG: 1,
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
  fH: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fJ)));
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
  fS: 1,
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
  fZ: 1,
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
  gg: 1,
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
$p.b = (function(x) {
  return x;
});
$p.w = (function() {
  return "generalized constraint";
});
var $d_s_$less$colon$less$$anon$1 = new $TypeData().i($c_s_$less$colon$less$$anon$1, "scala.$less$colon$less$$anon$1", ({
  gm: 1,
  gj: 1,
  gk: 1,
  i: 1,
  a: 1
}));
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.kb)) {
    $thiz.kc = (($thiz.id === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.kb = true;
  }
  return $thiz.kc;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.kb) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.kc);
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.id;
  return ("of class " + $objectClassName(this$1));
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.id + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.kc = null;
    this.id = null;
    this.kb = false;
    this.id = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bQ() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  gt: 1,
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
$p.c = (function() {
  return (this === $m_s_None$());
});
$p.s = (function() {
  return (this.c() ? 0 : 1);
});
$p.aj = (function(elem) {
  return ((!this.c()) && $m_sr_BoxesRunTime$().k(this.H(), elem));
});
$p.f = (function() {
  return (this.c() ? $m_sc_Iterator$().E : new $c_sc_Iterator$$anon$20(this.H()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.gV = 0;
  this.oX = 0;
  this.oW = null;
  this.oW = outer;
  this.gV = 0;
  this.oX = outer.b9();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.l = (function() {
  return (this.gV < this.oX);
});
$p.e = (function() {
  var result = this.oW.ba(this.gV);
  this.gV = ((1 + this.gV) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  gz: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.oY = null;
  this.oZ = null;
  this.oY = _1;
  this.oZ = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.b9 = (function() {
  return 2;
});
$p.ba = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.bz = (function() {
  return this.oY;
});
$p.bs = (function() {
  return this.oZ;
});
$p.w = (function() {
  return (((("(" + this.bz()) + ",") + this.bs()) + ")");
});
$p.bb = (function() {
  return "Tuple2";
});
$p.bw = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().d4(this, (-889275714), false);
});
$p.n = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().k(this.bz(), x$1.bz()) && $m_sr_BoxesRunTime$().k(this.bs(), x$1.bs()))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bY)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  bY: 1,
  gA: 1,
  C: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.fL = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  gN: 1,
  gM: 1,
  F: 1,
  a: 1,
  a1: 1
}));
function $f_sc_IndexedSeqOps__map__F1__O($thiz, f) {
  return $thiz.aZ().ay($ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), $thiz, f));
}
function $f_sc_IndexedSeqOps__reverse__O($thiz) {
  return $thiz.gd(new $c_sc_IndexedSeqView$Reverse($thiz));
}
function $f_sc_IndexedSeqOps__head__O($thiz) {
  if ((!$thiz.c())) {
    return $thiz.v(0);
  } else {
    throw new $c_ju_NoSuchElementException(("head of empty " + ($is_sc_IndexedSeq($thiz) ? $thiz.c9() : $thiz.w())));
  }
}
function $f_sc_IndexedSeqOps__headOption__s_Option($thiz) {
  return ($thiz.c() ? $m_s_None$() : new $c_s_Some($thiz.o()));
}
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.c9() + "("), ", ", ")");
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
$p.hB = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.s = (function() {
  return 0;
});
$p.gs = (function(from, until) {
  return this;
});
$p.e = (function() {
  this.hB();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  gW: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.gW = false;
  this.p3 = null;
  this.p3 = a$1;
  this.gW = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.l = (function() {
  return (!this.gW);
});
$p.e = (function() {
  if (this.gW) {
    return $m_sc_Iterator$().E.e();
  } else {
    this.gW = true;
    return this.p3;
  }
});
$p.gs = (function(from, until) {
  return (((this.gW || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().E : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  gX: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$8(outer, f$1) {
  this.p6 = null;
  this.ig = false;
  this.p5 = null;
  this.kn = null;
  this.p4 = null;
  this.kn = outer;
  this.p4 = f$1;
  this.p6 = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.ig = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.l = (function() {
  while (true) {
    if (this.ig) {
      return true;
    } else if (this.kn.l()) {
      var a = this.kn.e();
      if (this.p6.iI(this.p4.b(a))) {
        this.p5 = a;
        this.ig = true;
        return true;
      }
    } else {
      return false;
    }
  }
});
$p.e = (function() {
  if (this.l()) {
    this.ig = false;
    return this.p5;
  } else {
    return $m_sc_Iterator$().E.e();
  }
});
var $d_sc_Iterator$$anon$8 = new $TypeData().i($c_sc_Iterator$$anon$8, "scala.collection.Iterator$$anon$8", ({
  gZ: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(outer, f$2) {
  this.ih = null;
  this.p7 = null;
  this.ih = outer;
  this.p7 = f$2;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.s = (function() {
  return this.ih.s();
});
$p.l = (function() {
  return this.ih.l();
});
$p.e = (function() {
  return this.p7.b(this.ih.e());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  h0: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.c1 instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.c1;
      $thiz.c1 = c.c1;
      $thiz.ee = c.ee;
      if ((c.cz !== null)) {
        if (($thiz.cy === null)) {
          $thiz.cy = c.cy;
        }
        c.cy.gX = $thiz.cz;
        $thiz.cz = c.cz;
      }
      continue;
    }
    return (void 0);
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.cz === null)) {
      $thiz.c1 = null;
      $thiz.cy = null;
      return false;
    } else {
      $thiz.c1 = $thiz.cz.tJ();
      if (($thiz.cy === $thiz.cz)) {
        $thiz.cy = $thiz.cy.gX;
      }
      $thiz.cz = $thiz.cz.gX;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.ee) {
        return true;
      } else if ((($thiz.c1 !== null) && $thiz.c1.l())) {
        $thiz.ee = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.c1 = null;
  this.cz = null;
  this.cy = null;
  this.ee = false;
  this.c1 = current;
  this.cz = null;
  this.cy = null;
  this.ee = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.l = (function() {
  if (this.ee) {
    return true;
  } else if ((this.c1 !== null)) {
    if (this.c1.l()) {
      this.ee = true;
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
    this.ee = false;
    return this.c1.e();
  } else {
    return $m_sc_Iterator$().E.e();
  }
});
$p.ht = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.cz === null)) {
    this.cz = c;
    this.cy = c;
  } else {
    this.cy.gX = c;
    this.cy = c;
  }
  if ((this.c1 === null)) {
    this.c1 = $m_sc_Iterator$().E;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c6)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  c6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.dy > 0)) {
    if ($thiz.ef.l()) {
      $thiz.ef.e();
      $thiz.dy = (((-1) + $thiz.dy) | 0);
    } else {
      $thiz.dy = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.ch < 0)) {
    return (-1);
  } else {
    var that = (($thiz.ch - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.ef = null;
  this.ch = 0;
  this.dy = 0;
  this.ef = underlying;
  this.ch = limit;
  this.dy = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.s = (function() {
  var size = this.ef.s();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.dy) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.ch < 0)) {
      return dropSize;
    } else {
      var x = this.ch;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.l = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.ch !== 0) && this.ef.l());
});
$p.e = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.ch > 0)) {
    this.ch = (((-1) + this.ch) | 0);
    return this.ef.e();
  } else {
    return ((this.ch < 0) ? this.ef.e() : $m_sc_Iterator$().E.e());
  }
});
$p.gs = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.ch < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.dy + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().E;
  } else if ((sum < 0)) {
    this.dy = 2147483647;
    this.ch = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$SliceIterator(this.ef, (((-2147483647) + sum) | 0), rest))));
  } else {
    this.dy = sum;
    this.ch = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  h2: 1,
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
    these = these.x();
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
  var skipped = $thiz.l4(n);
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
    these = these.x();
  }
  return false;
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $f_sc_LinearSeqOps__indexWhere__F1__I__I($thiz, p, from) {
  var i = ((from > 0) ? from : 0);
  var these = $thiz.l4(from);
  while ((!these.c())) {
    if ((!(!p.b(these.o())))) {
      return i;
    }
    i = ((1 + i) | 0);
    these = these.x();
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
      var temp$xs = xs.x();
      i = temp$i;
      xs = temp$xs;
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else if ((((!a.c()) && (!b.c())) && $m_sr_BoxesRunTime$().k(a.o(), b.o()))) {
      var temp$a = a.x();
      var temp$b = b.x();
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
    var it = that.f();
    while (it.l()) {
      result = result.dp(it.e());
    }
    return result;
  } else {
    return $thiz.ge(($is_sc_Iterable(that) ? new $c_sc_View$Concat($thiz, that) : $thiz.f().ht(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => that.f())))));
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.h0 = null;
  this.h0 = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.l = (function() {
  return (!this.h0.c());
});
$p.e = (function() {
  var r = this.h0.o();
  this.h0 = this.h0.x();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  h6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sc_StringOps$$anon$1__advance__T($thiz) {
  var start = $thiz.bk;
  while (true) {
    if (($thiz.bk < $thiz.eX)) {
      var this$ = $thiz.h1;
      var i = $thiz.bk;
      var c = this$.charCodeAt(i);
      var $x_1 = (!((c === 13) || (c === 10)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $thiz.bk = ((1 + $thiz.bk) | 0);
    } else {
      break;
    }
  }
  var end = $thiz.bk;
  if (($thiz.bk < $thiz.eX)) {
    var this$$2 = $thiz.h1;
    var i$1 = $thiz.bk;
    var c$1 = this$$2.charCodeAt(i$1);
    $thiz.bk = ((1 + $thiz.bk) | 0);
    if (($thiz.bk < $thiz.eX)) {
      var this$$3 = $thiz.h1;
      var i$2 = $thiz.bk;
      var c$2 = this$$3.charCodeAt(i$2);
      var $x_2 = ((c$1 === 13) && (c$2 === 10));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      $thiz.bk = ((1 + $thiz.bk) | 0);
    }
    if ((!$thiz.pc)) {
      end = $thiz.bk;
    }
  }
  var this$6 = $thiz.h1;
  var endIndex = end;
  return this$6.substring(start, endIndex);
}
/** @constructor */
function $c_sc_StringOps$$anon$1(\u03b4this$2, stripped$1) {
  this.eX = 0;
  this.bk = 0;
  this.h1 = null;
  this.pc = false;
  this.h1 = \u03b4this$2;
  this.pc = stripped$1;
  this.eX = \u03b4this$2.length;
  this.bk = 0;
}
$p = $c_sc_StringOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StringOps$$anon$1;
/** @constructor */
function $h_sc_StringOps$$anon$1() {
}
$h_sc_StringOps$$anon$1.prototype = $p;
$p.l = (function() {
  return (this.bk < this.eX);
});
$p.r0 = (function() {
  return ((this.bk >= this.eX) ? $m_sc_Iterator$().E.e() : $p_sc_StringOps$$anon$1__advance__T(this));
});
$p.e = (function() {
  return this.r0();
});
var $d_sc_StringOps$$anon$1 = new $TypeData().i($c_sc_StringOps$$anon$1, "scala.collection.StringOps$$anon$1", ({
  ha: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.cj === null)) {
    $thiz.cj = new $ac_I(($m_sci_Node$().h9 << 1));
    $thiz.dH = new ($d_sci_Node.r().C)($m_sci_Node$().h9);
  }
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.bJ = node;
  $thiz.ab = 0;
  $thiz.dG = node.hG();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.by = ((1 + $thiz.by) | 0);
  var cursorIndex = ($thiz.by << 1);
  var lengthIndex = ((1 + ($thiz.by << 1)) | 0);
  $thiz.dH.a[$thiz.by] = node;
  $thiz.cj.a[cursorIndex] = 0;
  $thiz.cj.a[lengthIndex] = node.hC();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.by = (((-1) + $thiz.by) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.by >= 0)) {
    var cursorIndex = ($thiz.by << 1);
    var lengthIndex = ((1 + ($thiz.by << 1)) | 0);
    var nodeCursor = $thiz.cj.a[cursorIndex];
    if ((nodeCursor < $thiz.cj.a[lengthIndex])) {
      var ev$1 = $thiz.cj;
      ev$1.a[cursorIndex] = ((1 + ev$1.a[cursorIndex]) | 0);
      var nextNode = $thiz.dH.a[$thiz.by].hw(nodeCursor);
      if (nextNode.hx()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.gg()) {
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
  $thiz.ab = 0;
  $thiz.dG = 0;
  $thiz.by = (-1);
  return $thiz;
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.hx()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.gg()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
/** @constructor */
function $c_sci_ChampBaseIterator() {
  this.ab = 0;
  this.dG = 0;
  this.bJ = null;
  this.by = 0;
  this.cj = null;
  this.dH = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.l = (function() {
  return ((this.ab < this.dG) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.ip = node;
  $thiz.eh = (((-1) + node.hG()) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.ck = ((1 + $thiz.ck) | 0);
  $thiz.h5.a[$thiz.ck] = node;
  $thiz.h4.a[$thiz.ck] = (((-1) + node.hC()) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.ck = (((-1) + $thiz.ck) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.ck >= 0)) {
    var nodeCursor = $thiz.h4.a[$thiz.ck];
    $thiz.h4.a[$thiz.ck] = (((-1) + nodeCursor) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.h5.a[$thiz.ck].hw(nodeCursor));
    } else {
      var currNode = $thiz.h5.a[$thiz.ck];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.gg()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true;
      }
    }
  }
  return false;
}
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.eh = (-1);
  $thiz.ck = (-1);
  $thiz.h4 = new $ac_I(((1 + $m_sci_Node$().h9) | 0));
  $thiz.h5 = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().h9) | 0));
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
  this.eh = 0;
  this.ip = null;
  this.ck = 0;
  this.h4 = null;
  this.h5 = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.l = (function() {
  return ((this.eh >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.fR !== null);
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
  var dataIx = bm.cU(bitpos);
  var idx = (dataIx << 1);
  var src = bm.aW;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.q(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.q(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.c2, dataIx, originalHash);
  bm.aa = (bm.aa | bitpos);
  bm.aW = dst;
  bm.c2 = dstHashes;
  bm.be = ((1 + bm.be) | 0);
  bm.bS = ((bm.bS + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.fR = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.dd = $thiz.dd.qj();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.fR = null;
  this.dd = null;
  this.dd = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().ka, $m_s_Array$EmptyArrays$().gU, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.bj = (function(size) {
});
$p.gt = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().cv(keyHash, shift);
    var bitpos = $m_sci_Node$().bP(mask);
    if (((mapNode.aa & bitpos) !== 0)) {
      var index = $m_sci_Node$().bB(mapNode.aa, mask, bitpos);
      var key0 = mapNode.dm(index);
      var key0UnimprovedHash = mapNode.cu(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().k(key0, key))) {
        mapNode.aW.a[((1 + (index << 1)) | 0)] = value;
      } else {
        var value0 = mapNode.dn(index);
        var key0Hash = $m_sc_Hashing$().bi(key0UnimprovedHash);
        var subNodeNew = mapNode.lA(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.ud(bitpos, key0Hash, subNodeNew);
      }
    } else if (((mapNode.az & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().bB(mapNode.az, mask, bitpos);
      var subNode = mapNode.cY(index$2);
      var beforeSize = subNode.M();
      var beforeHash = subNode.bG();
      this.gt(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.be = ((mapNode.be + ((subNode.M() - beforeSize) | 0)) | 0);
      mapNode.bS = ((mapNode.bS + ((subNode.bG() - beforeHash) | 0)) | 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
    }
  } else if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.gi(key);
    if ((index$3 < 0)) {
      mapNode.aG = mapNode.aG.bt(new $c_T2(key, value));
    } else {
      mapNode.aG = mapNode.aG.e5(index$3, new $c_T2(key, value));
    }
  } else {
    throw new $c_s_MatchError(mapNode);
  }
});
$p.lI = (function() {
  if ((this.dd.be === 0)) {
    return $m_sci_HashMap$().kt;
  } else if ((this.fR !== null)) {
    return this.fR;
  } else {
    this.fR = new $c_sci_HashMap(this.dd);
    return this.fR;
  }
});
$p.pV = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().P(elem.bz());
  var im = $m_sc_Hashing$().bi(h);
  this.gt(this.dd, elem.bz(), elem.bs(), h, im, 0);
  return this;
});
$p.fh = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().P(key);
  this.gt(this.dd, key, value, originalHash, $m_sc_Hashing$().bi(originalHash), 0);
  return this;
});
$p.kQ = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(this, xs);
  } else if (false) {
    var iter = xs.vX();
    while (iter.l()) {
      var next = iter.e();
      var originalHash = xs.vj(next.qP());
      var hash = $m_sc_Hashing$().bi(originalHash);
      this.gt(this.dd, next.qV(), next.vp(), originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.tc();
    while (iter$2.l()) {
      var next$2 = iter$2.e();
      var originalHash$2 = xs.vj(next$2.qP());
      var hash$2 = $m_sc_Hashing$().bi(originalHash$2);
      this.gt(this.dd, next$2.qV(), next$2.vp(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.fk(new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((key$2$2, value$2$2) => this.fh(key$2$2, value$2$2))));
  } else {
    var it = xs.f();
    while (it.l()) {
      this.pV(it.e());
    }
  }
  return this;
});
$p.b2 = (function(elems) {
  return this.kQ(elems);
});
$p.ax = (function(elem) {
  return this.pV(elem);
});
$p.aU = (function() {
  return this.lI();
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  hm: 1,
  a9: 1,
  K: 1,
  J: 1,
  I: 1
}));
function $p_sci_HashSetBuilder__isAliased__Z($thiz) {
  return ($thiz.fS !== null);
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
  var dataIx = bm.cU(bitpos);
  var src = bm.bf;
  var dst = new $ac_O(((1 + src.a.length) | 0));
  src.q(0, dst, 0, dataIx);
  dst.a[dataIx] = key;
  var destPos = ((1 + dataIx) | 0);
  var length = ((src.a.length - dataIx) | 0);
  src.q(dataIx, dst, destPos, length);
  var dstHashes = $p_sci_HashSetBuilder__insertElement__AI__I__I__AI($thiz, bm.ci, dataIx, originalHash);
  bm.a1 = (bm.a1 | bitpos);
  bm.bf = dst;
  bm.ci = dstHashes;
  bm.bl = ((1 + bm.bl) | 0);
  bm.c3 = ((bm.c3 + keyHash) | 0);
}
function $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V($thiz, bm, bitpos, elem) {
  var dataIx = bm.cU(bitpos);
  bm.bf.a[dataIx] = elem;
}
function $p_sci_HashSetBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashSetBuilder__isAliased__Z($thiz)) {
    $p_sci_HashSetBuilder__copyElems__V($thiz);
  }
  $thiz.fS = null;
}
function $p_sci_HashSetBuilder__copyElems__V($thiz) {
  $thiz.f0 = $thiz.f0.qk();
}
/** @constructor */
function $c_sci_HashSetBuilder() {
  this.fS = null;
  this.f0 = null;
  this.f0 = new $c_sci_BitmapIndexedSetNode(0, 0, $m_s_Array$EmptyArrays$().ka, $m_s_Array$EmptyArrays$().gU, 0, 0);
}
$p = $c_sci_HashSetBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashSetBuilder;
/** @constructor */
function $h_sci_HashSetBuilder() {
}
$h_sci_HashSetBuilder.prototype = $p;
$p.bj = (function(size) {
});
$p.lR = (function(setNode, element, originalHash, elementHash, shift) {
  if ((setNode instanceof $c_sci_BitmapIndexedSetNode)) {
    var mask = $m_sci_Node$().cv(elementHash, shift);
    var bitpos = $m_sci_Node$().bP(mask);
    if (((setNode.a1 & bitpos) !== 0)) {
      var index = $m_sci_Node$().bB(setNode.a1, mask, bitpos);
      var element0 = setNode.d0(index);
      var element0UnimprovedHash = setNode.cu(index);
      if (((element0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().k(element0, element))) {
        $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V(this, setNode, bitpos, element0);
      } else {
        var element0Hash = $m_sc_Hashing$().bi(element0UnimprovedHash);
        var subNodeNew = setNode.lz(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0));
        setNode.ue(bitpos, element0Hash, subNodeNew);
      }
    } else if (((setNode.aD & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().bB(setNode.aD, mask, bitpos);
      var subNode = setNode.cZ(index$2);
      var beforeSize = subNode.M();
      var beforeHashCode = subNode.bG();
      this.lR(subNode, element, originalHash, elementHash, ((5 + shift) | 0));
      setNode.bl = ((setNode.bl + ((subNode.M() - beforeSize) | 0)) | 0);
      setNode.c3 = ((setNode.c3 + ((subNode.bG() - beforeHashCode) | 0)) | 0);
    } else {
      $p_sci_HashSetBuilder__insertValue__sci_BitmapIndexedSetNode__I__O__I__I__V(this, setNode, bitpos, element, originalHash, elementHash);
    }
  } else if ((setNode instanceof $c_sci_HashCollisionSetNode)) {
    var index$3 = $f_sc_SeqOps__indexOf__O__I__I(setNode.aN, element, 0);
    if ((index$3 < 0)) {
      setNode.aN = setNode.aN.bt(element);
    } else {
      setNode.aN = setNode.aN.e5(index$3, element);
    }
  } else {
    throw new $c_s_MatchError(setNode);
  }
});
$p.lJ = (function() {
  if ((this.f0.bl === 0)) {
    return $m_sci_HashSet$().h6;
  } else if ((this.fS !== null)) {
    return this.fS;
  } else {
    this.fS = new $c_sci_HashSet(this.f0);
    return this.fS;
  }
});
$p.iJ = (function(elem) {
  $p_sci_HashSetBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().P(elem);
  var im = $m_sc_Hashing$().bi(h);
  this.lR(this.f0, elem, h, im, 0);
  return this;
});
$p.kR = (function(xs) {
  $p_sci_HashSetBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashSet)) {
    new $c_sci_HashSetBuilder$$anon$1(this, xs);
  } else {
    var it = xs.f();
    while (it.l()) {
      this.iJ(it.e());
    }
  }
  return this;
});
$p.b2 = (function(elems) {
  return this.kR(elems);
});
$p.ax = (function(elem) {
  return this.iJ(elem);
});
$p.aU = (function() {
  return this.lJ();
});
var $d_sci_HashSetBuilder = new $TypeData().i($c_sci_HashSetBuilder, "scala.collection.immutable.HashSetBuilder", ({
  hp: 1,
  a9: 1,
  K: 1,
  J: 1,
  I: 1
}));
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.eg = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$());
}
$p = $c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
}
$h_sci_IndexedSeq$.prototype = $p;
$p.lc = (function(it) {
  return ($is_sci_IndexedSeq(it) ? it : $c_sc_SeqFactory$Delegate.prototype.iS.call(this, it));
});
$p.ay = (function(source) {
  return this.lc(source);
});
$p.iS = (function(it) {
  return this.lc(it);
});
var $d_sci_IndexedSeq$ = new $TypeData().i($c_sci_IndexedSeq$, "scala.collection.immutable.IndexedSeq$", ({
  hr: 1,
  b7: 1,
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
  this.fT = null;
  this.pi = null;
  this.sx();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.bj = (function(size) {
});
$p.sx = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.pi = ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.l6()))));
  this.fT = deferred;
});
$p.uQ = (function() {
  this.fT.lk(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$())));
  return this.pi;
});
$p.s6 = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.fT.lk(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    $m_sci_LazyList$();
    return new $c_sci_LazyList$State$Cons(elem, ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.l6())))));
  })));
  this.fT = deferred;
  return this;
});
$p.rX = (function(xs) {
  if ((xs.s() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.fT.lk(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().lL(xs.f(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.l6()))))));
    this.fT = deferred;
  }
  return this;
});
$p.b2 = (function(elems) {
  return this.rX(elems);
});
$p.ax = (function(elem) {
  return this.s6(elem);
});
$p.aU = (function() {
  return this.uQ();
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  hv: 1,
  a9: 1,
  K: 1,
  J: 1,
  I: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.fU = null;
  this.fU = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.l = (function() {
  return (!this.fU.c());
});
$p.e = (function() {
  if (this.fU.c()) {
    return $m_sc_Iterator$().E.e();
  } else {
    var res = this.fU.z().o();
    this.fU = this.fU.z().aM();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  hx: 1,
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
$p.dX = (function(elems) {
  return $m_sci_Nil$().bR(elems);
});
$p.aK = (function() {
  return new $c_scm_ListBuffer();
});
$p.bH = (function() {
  return $m_sci_Nil$();
});
$p.ay = (function(source) {
  return $m_sci_Nil$().bR(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  hA: 1,
  ay: 1,
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
  $thiz.f2 = outer;
  $thiz.dJ = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.dJ = 0;
  this.f2 = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.l = (function() {
  return (this.dJ < 2);
});
$p.e = (function() {
  switch (this.dJ) {
    case 0: {
      var result = this.cb(this.f2.cm, this.f2.de);
      break;
    }
    case 1: {
      var result = this.cb(this.f2.cn, this.f2.df);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().E.e();
    }
  }
  this.dJ = ((1 + this.dJ) | 0);
  return result;
});
$p.cW = (function(n) {
  this.dJ = ((this.dJ + n) | 0);
  return this;
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  $thiz.dK = outer;
  $thiz.dL = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.dL = 0;
  this.dK = null;
}
$p = $c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
}
$h_sci_Map$Map3$Map3Iterator.prototype = $p;
$p.l = (function() {
  return (this.dL < 3);
});
$p.e = (function() {
  switch (this.dL) {
    case 0: {
      var result = this.cb(this.dK.c4, this.dK.cN);
      break;
    }
    case 1: {
      var result = this.cb(this.dK.c5, this.dK.cO);
      break;
    }
    case 2: {
      var result = this.cb(this.dK.c6, this.dK.cP);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().E.e();
    }
  }
  this.dL = ((1 + this.dL) | 0);
  return result;
});
$p.cW = (function(n) {
  this.dL = ((this.dL + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  $thiz.cQ = outer;
  $thiz.dM = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.dM = 0;
  this.cQ = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.l = (function() {
  return (this.dM < 4);
});
$p.e = (function() {
  switch (this.dM) {
    case 0: {
      var result = this.cb(this.cQ.bL, this.cQ.co);
      break;
    }
    case 1: {
      var result = this.cb(this.cQ.bM, this.cQ.cp);
      break;
    }
    case 2: {
      var result = this.cb(this.cQ.bN, this.cQ.cq);
      break;
    }
    case 3: {
      var result = this.cb(this.cQ.bO, this.cQ.cr);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().E.e();
    }
  }
  this.dM = ((1 + this.dM) | 0);
  return result;
});
$p.cW = (function(n) {
  this.dM = ((this.dM + n) | 0);
  return this;
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.dN = null;
  this.h7 = false;
  this.f3 = null;
  this.dN = $m_sci_Map$EmptyMap$();
  this.h7 = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.bj = (function(size) {
});
$p.rd = (function() {
  return (this.h7 ? this.f3.lI() : this.dN);
});
$p.s4 = (function(key, value) {
  if (this.h7) {
    this.f3.fh(key, value);
  } else if ((this.dN.M() < 4)) {
    this.dN = this.dN.eK(key, value);
  } else if (this.dN.aj(key)) {
    this.dN = this.dN.eK(key, value);
  } else {
    this.h7 = true;
    if ((this.f3 === null)) {
      this.f3 = new $c_sci_HashMapBuilder();
    }
    this.dN.su(this.f3);
    this.f3.fh(key, value);
  }
  return this;
});
$p.pQ = (function(xs) {
  return (this.h7 ? (this.f3.kQ(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.b2 = (function(elems) {
  return this.pQ(elems);
});
$p.ax = (function(elem) {
  return this.s4(elem.bz(), elem.bs());
});
$p.aU = (function() {
  return this.rd();
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  hL: 1,
  a9: 1,
  K: 1,
  J: 1,
  I: 1
}));
/** @constructor */
function $c_sci_SetBuilderImpl() {
  this.fe = null;
  this.ha = false;
  this.ff = null;
  this.fe = $m_sci_Set$EmptySet$();
  this.ha = false;
}
$p = $c_sci_SetBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_SetBuilderImpl;
/** @constructor */
function $h_sci_SetBuilderImpl() {
}
$h_sci_SetBuilderImpl.prototype = $p;
$p.bj = (function(size) {
});
$p.re = (function() {
  return (this.ha ? this.ff.lJ() : this.fe);
});
$p.s7 = (function(elem) {
  if (this.ha) {
    this.ff.iJ(elem);
  } else if ((this.fe.M() < 4)) {
    this.fe = this.fe.dp(elem);
  } else if ((!this.fe.aj(elem))) {
    this.ha = true;
    if ((this.ff === null)) {
      this.ff = new $c_sci_HashSetBuilder();
    }
    this.fe.sv(this.ff);
    this.ff.iJ(elem);
  }
  return this;
});
$p.pR = (function(xs) {
  return (this.ha ? (this.ff.kR(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.b2 = (function(elems) {
  return this.pR(elems);
});
$p.ax = (function(elem) {
  return this.s7(elem);
});
$p.aU = (function() {
  return this.re();
});
var $d_sci_SetBuilderImpl = new $TypeData().i($c_sci_SetBuilderImpl, "scala.collection.immutable.SetBuilderImpl", ({
  i3: 1,
  a9: 1,
  K: 1,
  J: 1,
  I: 1
}));
function $ps_sci_Vector$__liftedTree1$1__I() {
  try {
    return $m_jl_Integer$().lG($m_jl_System$SystemProperties$().lh("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10);
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
  this.ps = 0;
  this.pt = null;
  $n_sci_Vector$ = this;
  this.ps = $ps_sci_Vector$__liftedTree1$1__I();
  this.pt = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.dX = (function(elems) {
  return this.bv(elems);
});
$p.bv = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    return it;
  } else {
    var knownSize = it.s();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      matchEnd5: {
        var $x_1;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x = it.aJ().bc();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.dc;
            break matchEnd5;
          }
        }
        if ($is_sci_Iterable(it)) {
          var a1 = new $ac_O(knownSize);
          it.bV(a1, 0, 2147483647);
          var $x_1 = a1;
          break matchEnd5;
        }
        var a1$2 = new $ac_O(knownSize);
        it.f().bV(a1$2, 0, 2147483647);
        var $x_1 = a1$2;
      }
      return new $c_sci_Vector1($x_1);
    } else {
      return new $c_sci_VectorBuilder().hj(it).j3();
    }
  }
});
$p.aK = (function() {
  return new $c_sci_VectorBuilder();
});
$p.ay = (function(source) {
  return this.bv(source);
});
$p.bH = (function() {
  return $m_sci_Vector0$();
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  ia: 1,
  ay: 1,
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
  if (($thiz.V >= 6)) {
    a = $thiz.b6;
    var i = (($thiz.O >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.q(i, dest, 0, length);
    }
    var newOffset = (($thiz.O % 33554432) | 0);
    $thiz.G = (($thiz.G - (($thiz.O - newOffset) | 0)) | 0);
    $thiz.O = newOffset;
    if (((($thiz.G >>> 25) | 0) === 0)) {
      $thiz.V = 5;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.V >= 5)) {
    if ((a === null)) {
      a = $thiz.av;
    }
    var i$2 = (31 & (($thiz.O >>> 20) | 0));
    if (($thiz.V === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.q(i$2, dest$1, 0, length$1);
      }
      $thiz.av = a;
      var newOffset$1 = (($thiz.O % 1048576) | 0);
      $thiz.G = (($thiz.G - (($thiz.O - newOffset$1) | 0)) | 0);
      $thiz.O = newOffset$1;
      if (((($thiz.G >>> 20) | 0) === 0)) {
        $thiz.V = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().aF(a, i$2, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.V >= 4)) {
    if ((a === null)) {
      a = $thiz.a6;
    }
    var i$3 = (31 & (($thiz.O >>> 15) | 0));
    if (($thiz.V === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.q(i$3, dest$2, 0, length$2);
      }
      $thiz.a6 = a;
      var newOffset$2 = (($thiz.O % 32768) | 0);
      $thiz.G = (($thiz.G - (($thiz.O - newOffset$2) | 0)) | 0);
      $thiz.O = newOffset$2;
      if (((($thiz.G >>> 15) | 0) === 0)) {
        $thiz.V = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().aF(a, i$3, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.V >= 3)) {
    if ((a === null)) {
      a = $thiz.T;
    }
    var i$4 = (31 & (($thiz.O >>> 10) | 0));
    if (($thiz.V === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.q(i$4, dest$3, 0, length$3);
      }
      $thiz.T = a;
      var newOffset$3 = (($thiz.O % 1024) | 0);
      $thiz.G = (($thiz.G - (($thiz.O - newOffset$3) | 0)) | 0);
      $thiz.O = newOffset$3;
      if (((($thiz.G >>> 10) | 0) === 0)) {
        $thiz.V = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().aF(a, i$4, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.V >= 2)) {
    if ((a === null)) {
      a = $thiz.N;
    }
    var i$5 = (31 & (($thiz.O >>> 5) | 0));
    if (($thiz.V === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        src$4.q(i$5, dest$4, 0, length$4);
      }
      $thiz.N = a;
      var newOffset$4 = (($thiz.O % 32) | 0);
      $thiz.G = (($thiz.G - (($thiz.O - newOffset$4) | 0)) | 0);
      $thiz.O = newOffset$4;
      if (((($thiz.G >>> 5) | 0) === 0)) {
        $thiz.V = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().aF(a, i$5, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.V >= 1)) {
    if ((a === null)) {
      a = $thiz.ah;
    }
    var i$6 = (31 & $thiz.O);
    if (($thiz.V === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.q(i$6, dest$5, 0, length$5);
      }
      $thiz.ah = a;
      $thiz.Q = (($thiz.Q - $thiz.O) | 0);
      $thiz.O = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().aF(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.hb = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.a.length;
  if ((dl > 0)) {
    if (($thiz.Q === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.Q) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.ah;
    var destPos = $thiz.Q;
    data.q(0, dest, destPos, copy1);
    $thiz.Q = (($thiz.Q + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.ah;
      data.q(copy1, dest$1, 0, copy2);
      $thiz.Q = (($thiz.Q + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if ((slice.a.length === 0)) {
    return (void 0);
  }
  if (($thiz.Q === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = slice.a.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.G) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.G >>> 5) | 0));
      var dest = $thiz.N;
      slice.q(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.N;
        slice.q(copy1, dest$1, 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      if (((($thiz.G % 1024) | 0) !== 0)) {
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
            var lo = t.p;
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
      var a$1 = (31 & ((((32768 - $thiz.G) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.G >>> 10) | 0));
      var dest$2 = $thiz.T;
      slice.q(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.T;
        slice.q(copy1$2, dest$3, 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      if (((($thiz.G % 32768) | 0) !== 0)) {
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
            var lo$1 = t$1.p;
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
      var a$2 = (31 & ((((1048576 - $thiz.G) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.G >>> 15) | 0));
      var dest$4 = $thiz.a6;
      slice.q(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.a6;
        slice.q(copy1$3, dest$5, 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      if (((($thiz.G % 1048576) | 0) !== 0)) {
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
            var lo$2 = t$2.p;
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
      var a$3 = (31 & ((((33554432 - $thiz.G) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.G >>> 20) | 0));
      var dest$6 = $thiz.av;
      slice.q(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.av;
        slice.q(copy1$4, dest$7, 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      if (((($thiz.G % 33554432) | 0) !== 0)) {
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
            var lo$3 = t$3.p;
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
      var destPos$5 = (($thiz.G >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.b6;
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
  var sliceCount = xs.d8();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.dr(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var x1 = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
    } else if ((($thiz.Q === 32) || ($thiz.Q === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1);
    } else {
      $m_sci_VectorStatics$().l8((((-2) + x1) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((data$2$2) => {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$2$2);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.G) | 0);
  var xor = (idx ^ $thiz.G);
  $thiz.G = idx;
  $thiz.Q = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.G + n) | 0);
    var xor = (idx ^ $thiz.G);
    $thiz.G = idx;
    $thiz.Q = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.ah) + ", a2=") + $thiz.N) + ", a3=") + $thiz.T) + ", a4=") + $thiz.a6) + ", a5=") + $thiz.av) + ", a6=") + $thiz.b6) + ", depth=") + $thiz.V));
  } else if ((xor < 1024)) {
    if (($thiz.V <= 1)) {
      $thiz.N = new ($d_O.r().r().C)(32);
      $thiz.N.a[0] = $thiz.ah;
      $thiz.V = 2;
    }
    $thiz.ah = new $ac_O(32);
    $thiz.N.a[(31 & ((idx >>> 5) | 0))] = $thiz.ah;
  } else if ((xor < 32768)) {
    if (($thiz.V <= 2)) {
      $thiz.T = new ($d_O.r().r().r().C)(32);
      $thiz.T.a[0] = $thiz.N;
      $thiz.V = 3;
    }
    $thiz.ah = new $ac_O(32);
    $thiz.N = new ($d_O.r().r().C)(32);
    $thiz.N.a[(31 & ((idx >>> 5) | 0))] = $thiz.ah;
    $thiz.T.a[(31 & ((idx >>> 10) | 0))] = $thiz.N;
  } else if ((xor < 1048576)) {
    if (($thiz.V <= 3)) {
      $thiz.a6 = new ($d_O.r().r().r().r().C)(32);
      $thiz.a6.a[0] = $thiz.T;
      $thiz.V = 4;
    }
    $thiz.ah = new $ac_O(32);
    $thiz.N = new ($d_O.r().r().C)(32);
    $thiz.T = new ($d_O.r().r().r().C)(32);
    $thiz.N.a[(31 & ((idx >>> 5) | 0))] = $thiz.ah;
    $thiz.T.a[(31 & ((idx >>> 10) | 0))] = $thiz.N;
    $thiz.a6.a[(31 & ((idx >>> 15) | 0))] = $thiz.T;
  } else if ((xor < 33554432)) {
    if (($thiz.V <= 4)) {
      $thiz.av = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.av.a[0] = $thiz.a6;
      $thiz.V = 5;
    }
    $thiz.ah = new $ac_O(32);
    $thiz.N = new ($d_O.r().r().C)(32);
    $thiz.T = new ($d_O.r().r().r().C)(32);
    $thiz.a6 = new ($d_O.r().r().r().r().C)(32);
    $thiz.N.a[(31 & ((idx >>> 5) | 0))] = $thiz.ah;
    $thiz.T.a[(31 & ((idx >>> 10) | 0))] = $thiz.N;
    $thiz.a6.a[(31 & ((idx >>> 15) | 0))] = $thiz.T;
    $thiz.av.a[(31 & ((idx >>> 20) | 0))] = $thiz.a6;
  } else {
    if (($thiz.V <= 5)) {
      $thiz.b6 = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.b6.a[0] = $thiz.av;
      $thiz.V = 6;
    }
    $thiz.ah = new $ac_O(32);
    $thiz.N = new ($d_O.r().r().C)(32);
    $thiz.T = new ($d_O.r().r().r().C)(32);
    $thiz.a6 = new ($d_O.r().r().r().r().C)(32);
    $thiz.av = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.N.a[(31 & ((idx >>> 5) | 0))] = $thiz.ah;
    $thiz.T.a[(31 & ((idx >>> 10) | 0))] = $thiz.N;
    $thiz.a6.a[(31 & ((idx >>> 15) | 0))] = $thiz.T;
    $thiz.av.a[(31 & ((idx >>> 20) | 0))] = $thiz.a6;
    $thiz.b6.a[((idx >>> 25) | 0)] = $thiz.av;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.b6 = null;
  this.av = null;
  this.a6 = null;
  this.T = null;
  this.N = null;
  this.ah = null;
  this.Q = 0;
  this.G = 0;
  this.O = 0;
  this.hb = false;
  this.V = 0;
  this.ah = new $ac_O(32);
  this.Q = 0;
  this.G = 0;
  this.O = 0;
  this.hb = false;
  this.V = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.bj = (function(size) {
});
$p.qQ = (function(v) {
  var x1 = v.d8();
  switch (x1) {
    case 0: {
      break;
    }
    case 1: {
      this.V = 1;
      var i = v.d.a.length;
      this.Q = (31 & i);
      this.G = ((i - this.Q) | 0);
      var a = v.d;
      this.ah = ((a.a.length === 32) ? a : $m_ju_Arrays$().aF(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.b5;
      var a$1 = v.g;
      this.ah = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().aF(a$1, 0, 32));
      this.V = 2;
      this.O = ((32 - v.bo) | 0);
      var i$1 = ((v.h + this.O) | 0);
      this.Q = (31 & i$1);
      this.G = ((i$1 - this.Q) | 0);
      this.N = new ($d_O.r().r().C)(32);
      this.N.a[0] = v.d;
      var dest = this.N;
      var length = d2.a.length;
      d2.q(0, dest, 1, length);
      this.N.a[((1 + d2.a.length) | 0)] = this.ah;
      break;
    }
    case 5: {
      var d3 = v.aH;
      var s2 = v.aO;
      var a$2 = v.g;
      this.ah = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().aF(a$2, 0, 32));
      this.V = 3;
      this.O = ((1024 - v.aX) | 0);
      var i$2 = ((v.h + this.O) | 0);
      this.Q = (31 & i$2);
      this.G = ((i$2 - this.Q) | 0);
      this.T = new ($d_O.r().r().r().C)(32);
      this.T.a[0] = $m_sci_VectorStatics$().D(v.d, v.bh);
      var dest$1 = this.T;
      var length$1 = d3.a.length;
      d3.q(0, dest$1, 1, length$1);
      this.N = $m_ju_Arrays$().a9(s2, 32);
      this.T.a[((1 + d3.a.length) | 0)] = this.N;
      this.N.a[s2.a.length] = this.ah;
      break;
    }
    case 7: {
      var d4 = v.al;
      var s3 = v.ap;
      var s2$2 = v.ao;
      var a$3 = v.g;
      this.ah = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().aF(a$3, 0, 32));
      this.V = 4;
      this.O = ((32768 - v.aA) | 0);
      var i$3 = ((v.h + this.O) | 0);
      this.Q = (31 & i$3);
      this.G = ((i$3 - this.Q) | 0);
      this.a6 = new ($d_O.r().r().r().r().C)(32);
      this.a6.a[0] = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(v.d, v.aQ), v.aR);
      var dest$2 = this.a6;
      var length$2 = d4.a.length;
      d4.q(0, dest$2, 1, length$2);
      this.T = $m_ju_Arrays$().a9(s3, 32);
      this.N = $m_ju_Arrays$().a9(s2$2, 32);
      this.a6.a[((1 + d4.a.length) | 0)] = this.T;
      this.T.a[s3.a.length] = this.N;
      this.N.a[s2$2.a.length] = this.ah;
      break;
    }
    case 9: {
      var d5 = v.a0;
      var s4 = v.a4;
      var s3$2 = v.a3;
      var s2$3 = v.a2;
      var a$4 = v.g;
      this.ah = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().aF(a$4, 0, 32));
      this.V = 5;
      this.O = ((1048576 - v.a7) | 0);
      var i$4 = ((v.h + this.O) | 0);
      this.Q = (31 & i$4);
      this.G = ((i$4 - this.Q) | 0);
      this.av = new ($d_O.r().r().r().r().r().C)(32);
      this.av.a[0] = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(v.d, v.ar), v.as), v.at);
      var dest$3 = this.av;
      var length$3 = d5.a.length;
      d5.q(0, dest$3, 1, length$3);
      this.a6 = $m_ju_Arrays$().a9(s4, 32);
      this.T = $m_ju_Arrays$().a9(s3$2, 32);
      this.N = $m_ju_Arrays$().a9(s2$3, 32);
      this.av.a[((1 + d5.a.length) | 0)] = this.a6;
      this.a6.a[s4.a.length] = this.T;
      this.T.a[s3$2.a.length] = this.N;
      this.N.a[s2$3.a.length] = this.ah;
      break;
    }
    case 11: {
      var d6 = v.U;
      var s5 = v.Z;
      var s4$2 = v.Y;
      var s3$3 = v.X;
      var s2$4 = v.W;
      var a$5 = v.g;
      this.ah = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().aF(a$5, 0, 32));
      this.V = 6;
      this.O = ((33554432 - v.a5) | 0);
      var i$5 = ((v.h + this.O) | 0);
      this.Q = (31 & i$5);
      this.G = ((i$5 - this.Q) | 0);
      this.b6 = new ($d_O.r().r().r().r().r().r().C)(64);
      this.b6.a[0] = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(v.d, v.ad), v.ae), v.af), v.ag);
      var dest$4 = this.b6;
      var length$4 = d6.a.length;
      d6.q(0, dest$4, 1, length$4);
      this.av = $m_ju_Arrays$().a9(s5, 32);
      this.a6 = $m_ju_Arrays$().a9(s4$2, 32);
      this.T = $m_ju_Arrays$().a9(s3$3, 32);
      this.N = $m_ju_Arrays$().a9(s2$4, 32);
      this.b6.a[((1 + d6.a.length) | 0)] = this.av;
      this.av.a[s5.a.length] = this.a6;
      this.a6.a[s4$2.a.length] = this.T;
      this.T.a[s3$3.a.length] = this.N;
      this.N.a[s2$4.a.length] = this.ah;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  if (((this.Q === 0) && (this.G > 0))) {
    this.Q = 32;
    this.G = (((-32) + this.G) | 0);
  }
  return this;
});
$p.se = (function(before, bigVector) {
  if (((this.Q !== 0) || (this.G !== 0))) {
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
    var x1$2___1$mcI$sp = bigVector.bo;
    var x1$2___2$mcI$sp = 32;
  } else if ((bigVector instanceof $c_sci_Vector3)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.aX;
    var x1$2___2$mcI$sp = 1024;
  } else if ((bigVector instanceof $c_sci_Vector4)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.aA;
    var x1$2___2$mcI$sp = 32768;
  } else if ((bigVector instanceof $c_sci_Vector5)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.a7;
    var x1$2___2$mcI$sp = 1048576;
  } else {
    if ((!(bigVector instanceof $c_sci_Vector6))) {
      throw new $c_s_MatchError(bigVector);
    }
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.a5;
    var x1$2___2$mcI$sp = 33554432;
  }
  var prefixLength = x1$2___1$mcI$sp;
  var maxPrefixLength = x1$2___2$mcI$sp;
  if ((maxPrefixLength === 1)) {
    return this;
  }
  var overallPrefixLength = $intMod(((before + prefixLength) | 0), maxPrefixLength);
  this.O = $intMod(((maxPrefixLength - overallPrefixLength) | 0), maxPrefixLength);
  $p_sci_VectorBuilder__advanceN__I__V(this, ((-32) & this.O));
  this.Q = (31 & this.O);
  this.hb = true;
  return this;
});
$p.s8 = (function(elem) {
  if ((this.Q === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.ah.a[this.Q] = elem;
  this.Q = ((1 + this.Q) | 0);
  return this;
});
$p.hj = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.Q === 0) && (this.G === 0)) && (!this.hb)) ? this.qQ(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.j3 = (function() {
  if (this.hb) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.Q + this.G) | 0);
  var realLen = ((len - this.O) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.ah;
    return new $c_sci_Vector1(((a.a.length === realLen) ? a : $m_ju_Arrays$().a9(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & (((-1) + len) | 0));
    var i2 = (((((-1) + len) | 0) >>> 5) | 0);
    var data = $m_ju_Arrays$().aF(this.N, 1, i2);
    var prefix1 = this.N.a[0];
    var a$1 = this.N.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().a9(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.O) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().aF(this.T, 1, i3);
    var a$2 = this.T.a[0];
    var prefix2 = $m_ju_Arrays$().aF(a$2, 1, a$2.a.length);
    var prefix1$2 = this.T.a[0].a[0];
    var suffix2 = $m_ju_Arrays$().a9(this.T.a[i3], i2$2);
    var a$3 = this.T.a[i3].a[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$3.a.length === len$2) ? a$3 : $m_ju_Arrays$().a9(a$3, len$2));
    var len1 = prefix1$2.a.length;
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, ((len1 + (prefix2.a.length << 5)) | 0), data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var data$3 = $m_ju_Arrays$().aF(this.a6, 1, i4);
    var a$4 = this.a6.a[0];
    var prefix3 = $m_ju_Arrays$().aF(a$4, 1, a$4.a.length);
    var a$5 = this.a6.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().aF(a$5, 1, a$5.a.length);
    var prefix1$3 = this.a6.a[0].a[0].a[0];
    var suffix3 = $m_ju_Arrays$().a9(this.a6.a[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().a9(this.a6.a[i4].a[i3$2], i2$3);
    var a$6 = this.a6.a[i4].a[i3$2].a[i2$3];
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = ((a$6.a.length === len$3) ? a$6 : $m_ju_Arrays$().a9(a$6, len$3));
    var len1$2 = prefix1$3.a.length;
    var len12$2 = ((len1$2 + (prefix2$2.a.length << 5)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, ((len12$2 + (prefix3.a.length << 10)) | 0), data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & (((-1) + len) | 0));
    var i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5 = (((((-1) + len) | 0) >>> 20) | 0);
    var data$4 = $m_ju_Arrays$().aF(this.av, 1, i5);
    var a$7 = this.av.a[0];
    var prefix4 = $m_ju_Arrays$().aF(a$7, 1, a$7.a.length);
    var a$8 = this.av.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().aF(a$8, 1, a$8.a.length);
    var a$9 = this.av.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().aF(a$9, 1, a$9.a.length);
    var prefix1$4 = this.av.a[0].a[0].a[0].a[0];
    var suffix4 = $m_ju_Arrays$().a9(this.av.a[i5], i4$2);
    var suffix3$2 = $m_ju_Arrays$().a9(this.av.a[i5].a[i4$2], i3$3);
    var suffix2$3 = $m_ju_Arrays$().a9(this.av.a[i5].a[i4$2].a[i3$3], i2$4);
    var a$10 = this.av.a[i5].a[i4$2].a[i3$3].a[i2$4];
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = ((a$10.a.length === len$4) ? a$10 : $m_ju_Arrays$().a9(a$10, len$4));
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
    var data$5 = $m_ju_Arrays$().aF(this.b6, 1, i6);
    var a$11 = this.b6.a[0];
    var prefix5 = $m_ju_Arrays$().aF(a$11, 1, a$11.a.length);
    var a$12 = this.b6.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().aF(a$12, 1, a$12.a.length);
    var a$13 = this.b6.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().aF(a$13, 1, a$13.a.length);
    var a$14 = this.b6.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().aF(a$14, 1, a$14.a.length);
    var prefix1$5 = this.b6.a[0].a[0].a[0].a[0].a[0];
    var suffix5 = $m_ju_Arrays$().a9(this.b6.a[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().a9(this.b6.a[i6].a[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().a9(this.b6.a[i6].a[i5$2].a[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().a9(this.b6.a[i6].a[i5$2].a[i4$3].a[i3$4], i2$5);
    var a$15 = this.b6.a[i6].a[i5$2].a[i4$3].a[i3$4].a[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.a.length === len$5) ? a$15 : $m_ju_Arrays$().a9(a$15, len$5));
    var len1$4 = prefix1$5.a.length;
    var len12$4 = ((len1$4 + (prefix2$4.a.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.w = (function() {
  return (((((((("VectorBuilder(len1=" + this.Q) + ", lenRest=") + this.G) + ", offset=") + this.O) + ", depth=") + this.V) + ")");
});
$p.aU = (function() {
  return this.j3();
});
$p.b2 = (function(elems) {
  return this.hj(elems);
});
$p.ax = (function(elem) {
  return this.s8(elem);
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  ic: 1,
  a9: 1,
  K: 1,
  J: 1,
  I: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.pu = null;
  $n_scm_ArrayBuffer$ = this;
  this.pu = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.dX = (function(elems) {
  return this.qF(elems);
});
$p.qF = (function(coll) {
  var k = coll.s();
  if ((k >= 0)) {
    var array = this.rh(this.pu, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.bV(array, 0, 2147483647) : coll.f().bV(array, 0, 2147483647));
    if ((actual !== k)) {
      throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), ((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).pS(coll);
  }
});
$p.aK = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.uP = (function(arrayLen, targetLen) {
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
$p.rh = (function(array, curSize, targetSize) {
  var newLen = this.uP(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.q(0, res, 0, curSize);
    return res;
  }
});
$p.bH = (function() {
  return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
});
$p.ay = (function(source) {
  return this.qF(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  ii: 1,
  ay: 1,
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
  this.ey = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.bj = (function(size) {
  this.ey.bj(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  ij: 1,
  bh: 1,
  K: 1,
  J: 1,
  I: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.eg = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  ip: 1,
  b7: 1,
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
  this.ey = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), initialCapacity$1, loadFactor$1));
}
$p = $c_scm_HashSet$$anon$4.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_HashSet$$anon$4;
/** @constructor */
function $h_scm_HashSet$$anon$4() {
}
$h_scm_HashSet$$anon$4.prototype = $p;
$p.bj = (function(size) {
  this.ey.bj(size);
});
var $d_scm_HashSet$$anon$4 = new $TypeData().i($c_scm_HashSet$$anon$4, "scala.collection.mutable.HashSet$$anon$4", ({
  iz: 1,
  bh: 1,
  K: 1,
  J: 1,
  I: 1
}));
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  $thiz.he = outer;
  $thiz.eA = 0;
  $thiz.dS = null;
  $thiz.hf = outer.bq.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.eA = 0;
  this.dS = null;
  this.hf = 0;
  this.he = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.l = (function() {
  if ((this.dS !== null)) {
    return true;
  } else {
    while ((this.eA < this.hf)) {
      var n = this.he.bq.a[this.eA];
      this.eA = ((1 + this.eA) | 0);
      if ((n !== null)) {
        this.dS = n;
        return true;
      }
    }
    return false;
  }
});
$p.e = (function() {
  if ((!this.l())) {
    return $m_sc_Iterator$().E.e();
  } else {
    var r = this.l7(this.dS);
    this.dS = this.dS.br;
    return r;
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.hg = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.hg = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.bj = (function(size) {
});
$p.b2 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.aU = (function() {
  return this.hg;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.eg = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  iC: 1,
  b7: 1,
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
$p.dX = (function(elems) {
  return new $c_scm_ListBuffer().j5(elems);
});
$p.aK = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.bH = (function() {
  return new $c_scm_ListBuffer();
});
$p.ay = (function(source) {
  return new $c_scm_ListBuffer().j5(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  iF: 1,
  ay: 1,
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
  this.kM = null;
  this.pC = null;
  this.pB = 0;
  this.kM = underlying;
  this.pC = mutationCount;
  this.pB = (mutationCount.J() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.l = (function() {
  $m_scm_MutationTracker$().qg(this.pB, (this.pC.J() | 0), "mutation occurred during iteration");
  return this.kM.l();
});
$p.e = (function() {
  return this.kM.e();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  iH: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.bc();
    var x$3 = x.bc();
    return (x$2 === x$3);
  } else {
    return false;
  }
}
function $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz) {
  return (clazz.C.Z ? (("Array[" + $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz.C.Q())) + "]") : clazz.C.N);
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.L)));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.L)));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.hi = 0;
  this.pG = 0;
  this.pH = null;
  this.pH = x$2;
  this.hi = 0;
  this.pG = x$2.b9();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.l = (function() {
  return (this.hi < this.pG);
});
$p.e = (function() {
  var result = this.pH.ba(this.hi);
  this.hi = ((1 + this.hi) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  jq: 1,
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
$p.dX = (function(elems) {
  return this.qG(elems);
});
$p.aK = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.qG = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).aU();
});
$p.ay = (function(source) {
  return this.qG(source);
});
$p.bH = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  jx: 1,
  ay: 1,
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
$p.dX = (function(elems) {
  return this.le(elems);
});
$p.le = (function(source) {
  return this.aK().b2(source).aU();
});
$p.aK = (function() {
  return new $c_scm_Builder$$anon$1($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), x$1$2$2.eB))));
});
$p.ay = (function(source) {
  return this.le(source);
});
$p.bH = (function() {
  return $ct_sjsr_WrappedVarArgs__(new $c_sjsr_WrappedVarArgs());
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  jL: 1,
  ay: 1,
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
  this.di = null;
  this.di = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.lq = (function() {
  return true;
});
$p.qS = (function() {
  return false;
});
$p.H = (function() {
  var $x_1 = this.di;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.ai : $x_1);
});
$p.lx = (function(f) {
  return this;
});
$p.r9 = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.bF(this.di, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().cF(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ai : e$2);
  }
});
$p.rp = (function() {
  return $m_s_None$();
});
$p.ct = (function(fa, fb) {
  return fa.b(this.di);
});
$p.bb = (function() {
  return "Failure";
});
$p.b9 = (function() {
  return 1;
});
$p.ba = (function(x$1) {
  return ((x$1 === 0) ? this.di : $m_sr_Statics$().eH(x$1));
});
$p.bw = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().d4(this, (-889275714), false);
});
$p.w = (function() {
  return $m_sr_ScalaRunTime$().g5(this);
});
$p.n = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_util_Failure)) {
    var x = this.di;
    var x$2 = x$1.di;
    return ((x === null) ? (x$2 === null) : x.n(x$2));
  } else {
    return false;
  }
});
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d9)));
}
var $d_s_util_Failure = new $TypeData().i($c_s_util_Failure, "scala.util.Failure", ({
  d9: 1,
  db: 1,
  C: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Success(value) {
  this.cC = null;
  this.cC = value;
}
$p = $c_s_util_Success.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $p;
$p.lq = (function() {
  return false;
});
$p.qS = (function() {
  return true;
});
$p.H = (function() {
  return this.cC;
});
$p.lx = (function(f) {
  try {
    return new $c_s_util_Success(f.b(this.cC));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().cF(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ai : e$2);
  }
});
$p.r9 = (function(pf) {
  return this;
});
$p.rp = (function() {
  return new $c_s_Some(this.cC);
});
$p.ct = (function(fa, fb) {
  try {
    return fb.b(this.cC);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().cF(e$2)) {
      return fa.b(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ai : e$2);
  }
});
$p.bb = (function() {
  return "Success";
});
$p.b9 = (function() {
  return 1;
});
$p.ba = (function(x$1) {
  return ((x$1 === 0) ? this.cC : $m_sr_Statics$().eH(x$1));
});
$p.bw = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().d4(this, (-889275714), false);
});
$p.w = (function() {
  return $m_sr_ScalaRunTime$().g5(this);
});
$p.n = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().k(this.cC, x$1.cC)));
});
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.da)));
}
var $d_s_util_Success = new $TypeData().i($c_s_util_Success, "scala.util.Success", ({
  da: 1,
  db: 1,
  C: 1,
  d: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_combine_CombineObservable__onInputsReady__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  if ((!transaction.sE($thiz))) {
    transaction.tb($thiz);
  }
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__syncFire__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.gc($thiz.l1(), transaction);
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__onStart__V($thiz) {
  var arr = $thiz.ji;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var _$1 = arr[i];
    $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V(_$1.jk, _$1, false);
    i = ((1 + i) | 0);
  }
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__onStop__V($thiz) {
  var arr = $thiz.ji;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var _$2 = arr[i];
    $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V(_$2.jk, _$2);
    i = ((1 + i) | 0);
  }
}
class $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(causes) {
    super();
    this.gB = null;
    this.gB = causes;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, $m_Lcom_raquo_airstream_core_AirstreamError$().sz(causes), null, true, true);
    var this$3 = causes.fj($m_s_$less$colon$less$().eV).bI();
    if ((!this$3.c())) {
      this.iV(this$3.H());
    }
  }
  bw() {
    return new $c_s_Product$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().d4(this, (-889275714), false);
  }
  n(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError)) {
      var x = this.gB;
      var x$2 = x$0.gB;
      return ((x === null) ? (x$2 === null) : x.n(x$2));
    } else {
      return false;
    }
  }
  b9() {
    return 1;
  }
  bb() {
    return "CombinedError";
  }
  ba(n) {
    if ((n === 0)) {
      return this.gB;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  w() {
    return ("CombinedError: " + $f_sc_IterableOnceOps__mkString__T__T__T__T(this.gB.fj($m_s_$less$colon$less$().eV).fs(), "", "; ", ""));
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$CombinedError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bq)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$CombinedError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$CombinedError, "com.raquo.airstream.core.AirstreamError$CombinedError", ({
  bq: 1,
  at: 1,
  o: 1,
  a: 1,
  d: 1,
  C: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.gD = null;
    this.gC = null;
    this.gD = error;
    this.gC = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eG(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().eG(cause)), null, true, true);
    this.iV(cause);
  }
  bw() {
    return new $c_s_Product$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().d4(this, (-889275714), false);
  }
  n(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.gD;
      var x$2 = x$0.gD;
      if (((x === null) ? (x$2 === null) : x.n(x$2))) {
        var x$3 = this.gC;
        var x$4 = x$0.gC;
        return ((x$3 === null) ? (x$4 === null) : x$3.n(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  b9() {
    return 2;
  }
  bb() {
    return "ErrorHandlingError";
  }
  ba(n) {
    if ((n === 0)) {
      return this.gD;
    }
    if ((n === 1)) {
      return this.gC;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  w() {
    return ((("ErrorHandlingError: " + this.gD) + "; cause: ") + this.gC);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.br)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", ({
  br: 1,
  at: 1,
  o: 1,
  a: 1,
  d: 1,
  C: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.gE = null;
    this.gE = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eG(error)), null, true, true);
  }
  bw() {
    return new $c_s_Product$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().d4(this, (-889275714), false);
  }
  n(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.gE;
      var x$2 = x$0.gE;
      return ((x === null) ? (x$2 === null) : x.n(x$2));
    } else {
      return false;
    }
  }
  b9() {
    return 1;
  }
  bb() {
    return "ObserverError";
  }
  ba(n) {
    if ((n === 0)) {
      return this.gE;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  w() {
    return ("ObserverError: " + this.gE);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bs)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverError, "com.raquo.airstream.core.AirstreamError$ObserverError", ({
  bs: 1,
  at: 1,
  o: 1,
  a: 1,
  d: 1,
  C: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.gG = null;
    this.gF = null;
    this.gG = error;
    this.gF = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eG(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().eG(cause)), null, true, true);
    this.iV(cause);
  }
  bw() {
    return new $c_s_Product$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().d4(this, (-889275714), false);
  }
  n(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.gG;
      var x$2 = x$0.gG;
      if (((x === null) ? (x$2 === null) : x.n(x$2))) {
        var x$3 = this.gF;
        var x$4 = x$0.gF;
        return ((x$3 === null) ? (x$4 === null) : x$3.n(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  b9() {
    return 2;
  }
  bb() {
    return "ObserverErrorHandlingError";
  }
  ba(n) {
    if ((n === 0)) {
      return this.gG;
    }
    if ((n === 1)) {
      return this.gF;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  w() {
    return ((("ObserverErrorHandlingError: " + this.gG) + "; cause: ") + this.gF);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bt)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", ({
  bt: 1,
  at: 1,
  o: 1,
  a: 1,
  d: 1,
  C: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(trx, depth) {
    super();
    this.fx = null;
    this.fw = 0;
    this.fx = trx;
    this.fw = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  bw() {
    return new $c_s_Product$$anon$1(this);
  }
  u() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().i(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().P(this.fx));
    acc = $m_sr_Statics$().i(acc, this.fw);
    return $m_sr_Statics$().F(acc, 2);
  }
  n(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.fw === x$0.fw)) {
        var x = this.fx;
        var x$2 = x$0.fx;
        return (x === x$2);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  b9() {
    return 2;
  }
  bb() {
    return "TransactionDepthExceeded";
  }
  ba(n) {
    if ((n === 0)) {
      return this.fx;
    }
    if ((n === 1)) {
      return this.fw;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  w() {
    return ((("TransactionDepthExceeded: " + this.fx) + "; maxDepth: ") + this.fw);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bu)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded, "com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded", ({
  bu: 1,
  at: 1,
  o: 1,
  a: 1,
  d: 1,
  C: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$VarError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(message, cause) {
    super();
    this.gI = null;
    this.gH = null;
    this.gI = message;
    this.gH = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, $m_Lcom_raquo_airstream_core_AirstreamError$().sA(message, cause), null, true, true);
    if ((!cause.c())) {
      this.iV(cause.H());
    }
  }
  bw() {
    return new $c_s_Product$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().d4(this, (-889275714), false);
  }
  n(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$VarError)) {
      if ((this.gI === x$0.gI)) {
        var x = this.gH;
        var x$2 = x$0.gH;
        return ((x === null) ? (x$2 === null) : x.n(x$2));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  b9() {
    return 2;
  }
  bb() {
    return "VarError";
  }
  ba(n) {
    if ((n === 0)) {
      return this.gI;
    }
    if ((n === 1)) {
      return this.gH;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  w() {
    return ((("VarError: " + this.gI) + "; cause: ") + this.gH);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$VarError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bv)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$VarError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$VarError, "com.raquo.airstream.core.AirstreamError$VarError", ({
  bv: 1,
  at: 1,
  o: 1,
  a: 1,
  d: 1,
  C: 1
}));
function $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz) {
  $thiz.hK();
}
var $d_Lcom_raquo_airstream_core_Signal = new $TypeData().i(1, "com.raquo.airstream.core.Signal", ({
  aH: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aD: 1
}));
function $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V($thiz) {
  $thiz.mt = 1;
  $thiz.hW = 0;
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V($thiz) {
  $thiz.hW = ((1 + $thiz.hW) | 0);
  $thiz.hV.mn.J();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V($thiz) {
  try {
    var $x_1 = new $c_s_util_Success(($thiz.hV.ml.J(), (void 0)));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().cF(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ai : e$2);
    }
  }
  $x_1.r9(new $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1($thiz));
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V($thiz) {
  $thiz.hV.mm.J();
}
function $ct_Lcom_raquo_airstream_state_SourceVar__s_util_Try__($thiz, initial) {
  $thiz.jz = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz);
  $thiz.i2 = initial;
  $thiz.i1 = new $c_Lcom_raquo_airstream_state_VarSignal($thiz.i2, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz))));
  $thiz.bZ = $thiz.i1;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar() {
  this.jz = null;
  this.i3 = null;
  this.i2 = null;
  this.i1 = null;
  this.bZ = null;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.e1 = (function() {
  return this.jz;
});
$p.w = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.hJ = (function() {
  return this.bZ;
});
$p.lM = (function(value, transaction) {
  this.i2 = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.i1, value, transaction);
});
$p.eJ = (function() {
  return this.bZ;
});
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V($thiz, propDomName) {
  var x = $thiz.jV;
  if ((x === (void 0))) {
    $thiz.jV = $m_sjs_js_defined$().sl($m_Lcom_raquo_ew_JsArray$().bA($m_sr_ScalaRunTime$().A(new ($d_T.r().C)([propDomName]))));
  } else {
    (x.push(propDomName) | 0);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z($thiz, propDomName) {
  var x = $thiz.ou;
  if ((x !== (void 0))) {
    _return: {
      var len = (x.length | 0);
      var i = 0;
      while ((i < len)) {
        if ((x[i].vZ() === propDomName)) {
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
  this.ia = null;
  this.cM = null;
  this.jU = null;
  this.eT = null;
  this.gR = null;
  this.jW = null;
  this.bx = null;
  this.ou = null;
  this.jV = null;
  this.jW = tag;
  this.bx = ref;
  this.ia = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
  this.ou = (void 0);
  this.jV = (void 0);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.dk = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().g7(parentNode, this, (void 0));
});
$p.iO = (function() {
  return this.cM;
});
$p.qi = (function(x$0) {
  this.cM = x$0;
});
$p.hO = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.hI = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.sG = (function() {
  if ($m_Lcom_raquo_laminar_DomApi$().tW(this.bx)) {
    var x1 = this.jW;
    if (false) {
      return x1.vJ();
    }
    return (void 0);
  } else {
    return $m_Lcom_raquo_laminar_inputs_InputController$().ob;
  }
});
$p.tU = (function(propDomName) {
  var x = this.sG();
  return ((x !== (void 0)) && $m_Lcom_raquo_ew_JsArray$RichJsArray$().tN(x, propDomName, 0));
});
$p.uu = (function(key) {
  if ((key instanceof $c_Lcom_raquo_laminar_keys_HtmlProp)) {
    if (this.tU(key.du)) {
      if ($p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z(this, key.du)) {
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((((("Can not add uncontrolled `" + key.du) + " <-- ???` to element `") + $m_Lcom_raquo_laminar_DomApi$().qn(this.bx)) + "` that already has an input controller for `") + key.du) + "` property."));
      } else {
        $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V(this, key.du);
      }
    }
  }
});
$p.w = (function() {
  return (("ReactiveHtmlElement(" + ((this.bx !== null) ? this.bx.outerHTML : ("tag=" + this.jW.jZ))) + ")");
});
$p.aL = (function() {
  return this.bx;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  fj: 1,
  aJ: 1,
  Z: 1,
  b0: 1,
  bG: 1,
  fh: 1
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
  fv: 1,
  b2: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().lB($thiz);
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
  aE: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  return $m_jl_FloatingPointBits$().lB(value);
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
  aE: 1
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
  aE: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  return ((that instanceof $c_RTLong) && (($thiz.p === that.p) && ($thiz.t === that.t)));
}
function $f_jl_Long__hashCode__I($thiz) {
  return ($thiz.p ^ $thiz.t);
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().lD($thiz.p, $thiz.t);
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
  aE: 1
}), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  fI: 1,
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
  var str = $m_jl_Character$().j8(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  fM: 1,
  a: 1,
  aa: 1,
  b1: 1,
  a5: 1,
  aE: 1
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
  fP: 1,
  b2: 1,
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
  g7: 1,
  bO: 1,
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
$p.tz = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$p.bb = (function() {
  return "None";
});
$p.b9 = (function() {
  return 0;
});
$p.ba = (function(x$1) {
  return $m_sr_Statics$().eH(x$1);
});
$p.bw = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return 2433880;
});
$p.w = (function() {
  return "None";
});
$p.H = (function() {
  this.tz();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  gu: 1,
  bW: 1,
  b: 1,
  C: 1,
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
  this.ed = null;
  this.ed = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.H = (function() {
  return this.ed;
});
$p.bb = (function() {
  return "Some";
});
$p.b9 = (function() {
  return 1;
});
$p.ba = (function(x$1) {
  return ((x$1 === 0) ? this.ed : $m_sr_Statics$().eH(x$1));
});
$p.bw = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().d4(this, (-889275714), false);
});
$p.w = (function() {
  return $m_sr_ScalaRunTime$().g5(this);
});
$p.n = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().k(this.ed, x$1.ed)));
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bX)));
}
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  bX: 1,
  bW: 1,
  b: 1,
  C: 1,
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
$p.aZ = (function() {
  return $m_sc_Iterable$();
});
$p.c9 = (function() {
  return this.bd();
});
$p.bd = (function() {
  return "Iterable";
});
$p.w = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.ge = (function(coll) {
  return this.aZ().ay(coll);
});
$p.hA = (function() {
  return this.aZ().aK();
});
$p.o = (function() {
  return this.f().e();
});
$p.bI = (function() {
  return $f_sc_IterableOps__headOption__s_Option(this);
});
$p.lN = (function(otherSize) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, otherSize);
});
$p.L = (function(f) {
  return $f_sc_IterableOps__map__F1__O(this, f);
});
$p.S = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.dl = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
});
$p.iR = (function(p) {
  return $f_sc_IterableOnceOps__exists__F1__Z(this, p);
});
$p.c = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.bV = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.iM = (function(pf) {
  return $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(this, pf);
});
$p.eD = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fs = (function() {
  return $m_sci_Nil$().bR(this);
});
$p.lQ = (function() {
  return $m_sci_Vector$().bv(this);
});
$p.j6 = (function(evidence$2) {
  return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2);
});
$p.s = (function() {
  return (-1);
});
$p.gd = (function(coll) {
  return this.ge(coll);
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.cf = xs;
  $thiz.B = 0;
  $thiz.c0 = $m_jl_reflect_Array$().bW($thiz.cf);
  return $thiz;
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.cf = null;
  this.B = 0;
  this.c0 = 0;
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.s = (function() {
  return ((this.c0 - this.B) | 0);
});
$p.l = (function() {
  return (this.B < this.c0);
});
$p.e = (function() {
  if ((this.B >= $m_jl_reflect_Array$().bW(this.cf))) {
    $m_sc_Iterator$().E.e();
  }
  var r = $m_sr_ScalaRunTime$().fi(this.cf, this.B);
  this.B = ((1 + this.B) | 0);
  return r;
});
$p.cW = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.B + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.c0;
    } else {
      var a = this.c0;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.B = $x_1;
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
  return ((value < 0) ? 0 : ((value > $thiz.cg) ? $thiz.cg : value));
}
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.kl = self;
  $thiz.dx = 0;
  $thiz.cg = self.m();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.kl = null;
  this.dx = 0;
  this.cg = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.s = (function() {
  return this.cg;
});
$p.l = (function() {
  return (this.cg > 0);
});
$p.e = (function() {
  if ((this.cg > 0)) {
    var r = this.kl.v(this.dx);
    this.dx = ((1 + this.dx) | 0);
    this.cg = (((-1) + this.cg) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().E.e();
  }
});
$p.cW = (function(n) {
  if ((n > 0)) {
    this.dx = ((this.dx + n) | 0);
    var b = ((this.cg - n) | 0);
    this.cg = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.gs = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.cg = ((b < 0) ? 0 : b);
  this.dx = ((this.dx + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  c3: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(self) {
  this.p2 = null;
  this.bD = 0;
  this.fM = 0;
  this.p2 = self;
  this.bD = self.m();
  this.fM = (((-1) + this.bD) | 0);
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = $p;
$p.l = (function() {
  return (this.bD > 0);
});
$p.e = (function() {
  if ((this.bD > 0)) {
    var r = this.p2.v(this.fM);
    this.fM = (((-1) + this.fM) | 0);
    this.bD = (((-1) + this.bD) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().E.e();
  }
});
$p.gs = (function(from, until) {
  if ((this.bD > 0)) {
    if ((this.bD <= from)) {
      this.bD = 0;
    } else if ((from <= 0)) {
      if (((until >= 0) && (until < this.bD))) {
        this.bD = until;
      }
    } else {
      this.fM = ((this.fM - from) | 0);
      if (((until >= 0) && (until < this.bD))) {
        if ((until <= from)) {
          this.bD = 0;
        } else {
          this.bD = ((until - from) | 0);
        }
      } else {
        this.bD = ((this.bD - from) | 0);
      }
    }
  }
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewReverseIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewReverseIterator, "scala.collection.IndexedSeqView$IndexedSeqViewReverseIterator", ({
  gQ: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.hg = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().E);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.s5 = (function(elem) {
  this.hg = this.hg.ht(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.ax = (function(elem) {
  return this.s5(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  gY: 1,
  iB: 1,
  a9: 1,
  K: 1,
  J: 1,
  I: 1
}));
function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
  return $thiz.dZ(x, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => default$1.b(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.f();
  while (it.l()) {
    var next = it.e();
    f.cE(next.bz(), next.bs());
  }
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9($thiz.f(), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.bz();
      var v = x0$1$2$2.bs();
      return ((k + " -> ") + v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  }))), sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  var builder = $thiz.hA();
  var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
  var it = $thiz.f();
  while (it.l()) {
    var next = it.e();
    if (seen.iI(f.b(next))) {
      builder.ax(next);
    }
  }
  return builder.aU();
}
function $f_sc_StrictOptimizedSeqOps__appended__O__O($thiz, elem) {
  var b = $thiz.e0().aK();
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(b, $thiz, 1);
  b.b2($thiz);
  b.ax(elem);
  return b.aU();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.e0().aK();
  b.b2($thiz);
  b.b2(suffix);
  return b.aU();
}
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.kp)) {
    $thiz.kq = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.kp = true;
  }
  return $thiz.kq;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.kp) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.kq);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.kq = null;
  this.kr = null;
  this.kp = false;
  $n_sci_ArraySeq$ = this;
  this.kr = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.lb = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.hN($m_s_Array$().qC(it, tag)));
});
$p.iZ = (function(evidence$2) {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((b$2$2) => $m_sci_ArraySeq$().hN($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2$2, evidence$2)))));
});
$p.hN = (function(x) {
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
$p.la = (function(it, evidence$5) {
  return this.lb(it, evidence$5);
});
$p.qq = (function(evidence$6) {
  return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  hj: 1,
  c9: 1,
  c0: 1,
  bZ: 1,
  c1: 1,
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
  this.ab = 0;
  this.dG = 0;
  this.bJ = null;
  this.by = 0;
  this.cj = null;
  this.dH = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.b4);
  while (this.l()) {
    var originalHash = this.bJ.cu(this.ab);
    outer.gt(outer.dd, this.bJ.dm(this.ab), this.bJ.dn(this.ab), originalHash, $m_sc_Hashing$().bi(originalHash), 0);
    this.ab = ((1 + this.ab) | 0);
  }
}
$p = $c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
}
$h_sci_HashMapBuilder$$anon$1.prototype = $p;
$p.hB = (function() {
  $m_sc_Iterator$().E.e();
  throw new $c_jl_ClassCastException();
});
$p.e = (function() {
  this.hB();
});
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().i($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
  hn: 1,
  aA: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_HashSetBuilder$$anon$1(outer, x2$1) {
  this.ab = 0;
  this.dG = 0;
  this.bJ = null;
  this.by = 0;
  this.cj = null;
  this.dH = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.bK);
  while (this.l()) {
    var originalHash = this.bJ.cu(this.ab);
    outer.lR(outer.f0, this.bJ.d0(this.ab), originalHash, $m_sc_Hashing$().bi(originalHash), 0);
    this.ab = ((1 + this.ab) | 0);
  }
}
$p = $c_sci_HashSetBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashSetBuilder$$anon$1;
/** @constructor */
function $h_sci_HashSetBuilder$$anon$1() {
}
$h_sci_HashSetBuilder$$anon$1.prototype = $p;
$p.hB = (function() {
  $m_sc_Iterator$().E.e();
  throw new $c_jl_ClassCastException();
});
$p.e = (function() {
  this.hB();
});
var $d_sci_HashSetBuilder$$anon$1 = new $TypeData().i($c_sci_HashSetBuilder$$anon$1, "scala.collection.immutable.HashSetBuilder$$anon$1", ({
  hq: 1,
  aA: 1,
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
  this.dJ = 0;
  this.f2 = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
}
$h_sci_Map$Map2$$anon$1.prototype = $p;
$p.cb = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map2$$anon$1 = new $TypeData().i($c_sci_Map$Map2$$anon$1, "scala.collection.immutable.Map$Map2$$anon$1", ({
  hF: 1,
  cw: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map2$$anon$2(outer) {
  this.dJ = 0;
  this.f2 = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$2.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$2;
/** @constructor */
function $h_sci_Map$Map2$$anon$2() {
}
$h_sci_Map$Map2$$anon$2.prototype = $p;
$p.cb = (function(k, v) {
  return k;
});
var $d_sci_Map$Map2$$anon$2 = new $TypeData().i($c_sci_Map$Map2$$anon$2, "scala.collection.immutable.Map$Map2$$anon$2", ({
  hG: 1,
  cw: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.dL = 0;
  this.dK = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$4;
/** @constructor */
function $h_sci_Map$Map3$$anon$4() {
}
$h_sci_Map$Map3$$anon$4.prototype = $p;
$p.cb = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map3$$anon$4 = new $TypeData().i($c_sci_Map$Map3$$anon$4, "scala.collection.immutable.Map$Map3$$anon$4", ({
  hH: 1,
  cy: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$5(outer) {
  this.dL = 0;
  this.dK = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$5.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$5;
/** @constructor */
function $h_sci_Map$Map3$$anon$5() {
}
$h_sci_Map$Map3$$anon$5.prototype = $p;
$p.cb = (function(k, v) {
  return k;
});
var $d_sci_Map$Map3$$anon$5 = new $TypeData().i($c_sci_Map$Map3$$anon$5, "scala.collection.immutable.Map$Map3$$anon$5", ({
  hI: 1,
  cy: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.dM = 0;
  this.cQ = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
}
$h_sci_Map$Map4$$anon$7.prototype = $p;
$p.cb = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map4$$anon$7 = new $TypeData().i($c_sci_Map$Map4$$anon$7, "scala.collection.immutable.Map$Map4$$anon$7", ({
  hJ: 1,
  cA: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$8(outer) {
  this.dM = 0;
  this.cQ = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$8.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$8;
/** @constructor */
function $h_sci_Map$Map4$$anon$8() {
}
$h_sci_Map$Map4$$anon$8.prototype = $p;
$p.cb = (function(k, v) {
  return k;
});
var $d_sci_Map$Map4$$anon$8 = new $TypeData().i($c_sci_Map$Map4$$anon$8, "scala.collection.immutable.Map$Map4$$anon$8", ({
  hK: 1,
  cA: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyIterator(rootNode) {
  this.ab = 0;
  this.dG = 0;
  this.bJ = null;
  this.by = 0;
  this.cj = null;
  this.dH = null;
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
    $m_sc_Iterator$().E.e();
  }
  var key = this.bJ.dm(this.ab);
  this.ab = ((1 + this.ab) | 0);
  return key;
});
var $d_sci_MapKeyIterator = new $TypeData().i($c_sci_MapKeyIterator, "scala.collection.immutable.MapKeyIterator", ({
  hM: 1,
  aA: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.eh = 0;
  this.ip = null;
  this.ck = 0;
  this.h4 = null;
  this.h5 = null;
  this.ky = 0;
  this.pl = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.ky = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().rq(this.ky, $m_sr_Statics$().P(this.pl), (-889275714));
});
$p.uj = (function() {
  if ((!this.l())) {
    $m_sc_Iterator$().E.e();
  }
  this.ky = this.ip.cu(this.eh);
  this.pl = this.ip.dn(this.eh);
  this.eh = (((-1) + this.eh) | 0);
  return this;
});
$p.e = (function() {
  return this.uj();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  hN: 1,
  hk: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.ab = 0;
  this.dG = 0;
  this.bJ = null;
  this.by = 0;
  this.cj = null;
  this.dH = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.ui = (function() {
  if ((!this.l())) {
    $m_sc_Iterator$().E.e();
  }
  var payload = this.bJ.lg(this.ab);
  this.ab = ((1 + this.ab) | 0);
  return payload;
});
$p.e = (function() {
  return this.ui();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  hO: 1,
  aA: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.c7 <= $thiz.b0)) {
    $m_sc_Iterator$().E.e();
  }
  $thiz.ek = ((1 + $thiz.ek) | 0);
  var slice = $thiz.kA.dr($thiz.ek);
  while ((slice.a.length === 0)) {
    $thiz.ek = ((1 + $thiz.ek) | 0);
    slice = $thiz.kA.dr($thiz.ek);
  }
  $thiz.h8 = $thiz.f5;
  var count = $thiz.pn;
  var idx = $thiz.ek;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  $thiz.ej = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
  var x1 = $thiz.ej;
  switch (x1) {
    case 1: {
      $thiz.bm = slice;
      break;
    }
    case 2: {
      $thiz.bn = slice;
      break;
    }
    case 3: {
      $thiz.bU = slice;
      break;
    }
    case 4: {
      $thiz.cR = slice;
      break;
    }
    case 5: {
      $thiz.f4 = slice;
      break;
    }
    case 6: {
      $thiz.kz = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  $thiz.f5 = (($thiz.h8 + Math.imul(slice.a.length, (1 << Math.imul(5, (((-1) + $thiz.ej) | 0))))) | 0);
  if (($thiz.f5 > $thiz.dP)) {
    $thiz.f5 = $thiz.dP;
  }
  if (($thiz.ej > 1)) {
    $thiz.fV = (((-1) + (1 << Math.imul(5, $thiz.ej))) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.b0 - $thiz.c7) | 0) + $thiz.dP) | 0);
  if ((pos === $thiz.f5)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.ej > 1)) {
    var io = ((pos - $thiz.h8) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.fV ^ io));
    $thiz.fV = io;
  }
  $thiz.c7 = (($thiz.c7 - $thiz.b0) | 0);
  var a = $thiz.bm.a.length;
  var b = $thiz.c7;
  $thiz.dO = ((a < b) ? a : b);
  $thiz.b0 = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.bm = $thiz.bn.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.bn = $thiz.bU.a[(31 & ((io >>> 10) | 0))];
    $thiz.bm = $thiz.bn.a[0];
  } else if ((xor < 1048576)) {
    $thiz.bU = $thiz.cR.a[(31 & ((io >>> 15) | 0))];
    $thiz.bn = $thiz.bU.a[0];
    $thiz.bm = $thiz.bn.a[0];
  } else if ((xor < 33554432)) {
    $thiz.cR = $thiz.f4.a[(31 & ((io >>> 20) | 0))];
    $thiz.bU = $thiz.cR.a[0];
    $thiz.bn = $thiz.bU.a[0];
    $thiz.bm = $thiz.bn.a[0];
  } else {
    $thiz.f4 = $thiz.kz.a[((io >>> 25) | 0)];
    $thiz.cR = $thiz.f4.a[0];
    $thiz.bU = $thiz.cR.a[0];
    $thiz.bn = $thiz.bU.a[0];
    $thiz.bm = $thiz.bn.a[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.bm = $thiz.bn.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.bn = $thiz.bU.a[(31 & ((io >>> 10) | 0))];
    $thiz.bm = $thiz.bn.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.bU = $thiz.cR.a[(31 & ((io >>> 15) | 0))];
    $thiz.bn = $thiz.bU.a[(31 & ((io >>> 10) | 0))];
    $thiz.bm = $thiz.bn.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.cR = $thiz.f4.a[(31 & ((io >>> 20) | 0))];
    $thiz.bU = $thiz.cR.a[(31 & ((io >>> 15) | 0))];
    $thiz.bn = $thiz.bU.a[(31 & ((io >>> 10) | 0))];
    $thiz.bm = $thiz.bn.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.f4 = $thiz.kz.a[((io >>> 25) | 0)];
    $thiz.cR = $thiz.f4.a[(31 & ((io >>> 20) | 0))];
    $thiz.bU = $thiz.cR.a[(31 & ((io >>> 15) | 0))];
    $thiz.bn = $thiz.bU.a[(31 & ((io >>> 10) | 0))];
    $thiz.bm = $thiz.bn.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.kA = null;
  this.dP = 0;
  this.pn = 0;
  this.bm = null;
  this.bn = null;
  this.bU = null;
  this.cR = null;
  this.f4 = null;
  this.kz = null;
  this.dO = 0;
  this.b0 = 0;
  this.fV = 0;
  this.c7 = 0;
  this.ek = 0;
  this.ej = 0;
  this.h8 = 0;
  this.f5 = 0;
  this.kA = v;
  this.dP = totalLength;
  this.pn = sliceCount;
  this.bm = v.d;
  this.dO = this.bm.a.length;
  this.b0 = 0;
  this.fV = 0;
  this.c7 = this.dP;
  this.ek = 0;
  this.ej = 1;
  this.h8 = 0;
  this.f5 = this.dO;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.s = (function() {
  return ((this.c7 - this.b0) | 0);
});
$p.l = (function() {
  return (this.c7 > this.b0);
});
$p.e = (function() {
  if ((this.b0 === this.dO)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.bm.a[this.b0];
  this.b0 = ((1 + this.b0) | 0);
  return r;
});
$p.cW = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.b0 - this.c7) | 0) + this.dP) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.dP;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.dP)) {
      this.b0 = 0;
      this.c7 = 0;
      this.dO = 0;
    } else {
      while ((newpos >= this.f5)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.h8) | 0);
      if ((this.ej > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.fV ^ io));
        this.fV = io;
      }
      this.dO = this.bm.a.length;
      this.b0 = (31 & io);
      this.c7 = ((this.b0 + ((this.dP - newpos) | 0)) | 0);
      if ((this.dO > this.c7)) {
        this.dO = this.c7;
      }
    }
  }
  return this;
});
$p.bV = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().bW(xs);
  var srcLen = ((this.c7 - this.b0) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.b0 === this.dO)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total - copied) | 0);
    var b = ((this.bm.a.length - this.b0) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.bm;
      var srcPos = this.b0;
      var destPos = ((start + copied) | 0);
      src.q(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().ca(this.bm, this.b0, xs, ((start + copied) | 0), count);
    }
    this.b0 = ((this.b0 + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  hQ: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  E: 1
}));
/** @constructor */
function $c_sci_RangeIterator(start, step, lastElement, initiallyEmpty) {
  this.fW = 0;
  this.f7 = 0;
  this.el = false;
  this.f6 = 0;
  this.fW = step;
  this.f7 = lastElement;
  this.el = (!initiallyEmpty);
  this.f6 = start;
}
$p = $c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $p;
$p.s = (function() {
  return (this.el ? ((1 + $intDiv(((this.f7 - this.f6) | 0), this.fW)) | 0) : 0);
});
$p.l = (function() {
  return this.el;
});
$p.qZ = (function() {
  if ((!this.el)) {
    $m_sc_Iterator$().E.e();
  }
  var value = this.f6;
  this.el = (value !== this.f7);
  this.f6 = ((value + this.fW) | 0);
  return value;
});
$p.cW = (function(n) {
  if ((n > 0)) {
    var value = this.f6;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.fW, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((-2147483648) ^ lo) < ((-2147483648) ^ value)) ? ((1 + ((hi + hi$1) | 0)) | 0) : ((hi + hi$1) | 0));
    if ((this.fW > 0)) {
      var value$2 = this.f7;
      var hi$3 = (value$2 >> 31);
      if (((hi$3 === hi$2) ? (((-2147483648) ^ value$2) < ((-2147483648) ^ lo)) : (hi$3 < hi$2))) {
        var this$6__lo = value$2;
        var this$6__hi = hi$3;
      } else {
        var this$6__lo = lo;
        var this$6__hi = hi$2;
      }
      this.f6 = this$6__lo;
      var value$3 = this.f7;
      var hi$4 = (value$3 >> 31);
      this.el = ((hi$2 === hi$4) ? (((-2147483648) ^ lo) <= ((-2147483648) ^ value$3)) : (hi$2 < hi$4));
    } else if ((this.fW < 0)) {
      var value$4 = this.f7;
      var hi$5 = (value$4 >> 31);
      if (((hi$5 === hi$2) ? (((-2147483648) ^ value$4) > ((-2147483648) ^ lo)) : (hi$5 > hi$2))) {
        var this$10__lo = value$4;
        var this$10__hi = hi$5;
      } else {
        var this$10__lo = lo;
        var this$10__hi = hi$2;
      }
      this.f6 = this$10__lo;
      var value$5 = this.f7;
      var hi$6 = (value$5 >> 31);
      this.el = ((hi$2 === hi$6) ? (((-2147483648) ^ lo) >= ((-2147483648) ^ value$5)) : (hi$2 > hi$6));
    }
  }
  return this;
});
$p.e = (function() {
  return this.qZ();
});
var $d_sci_RangeIterator = new $TypeData().i($c_sci_RangeIterator, "scala.collection.immutable.RangeIterator", ({
  hT: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $ct_sci_Set$SetNIterator__I__($thiz, n) {
  $thiz.dQ = 0;
  $thiz.dh = n;
  return $thiz;
}
/** @constructor */
function $c_sci_Set$SetNIterator() {
  this.dQ = 0;
  this.dh = 0;
}
$p = $c_sci_Set$SetNIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Set$SetNIterator;
/** @constructor */
function $h_sci_Set$SetNIterator() {
}
$h_sci_Set$SetNIterator.prototype = $p;
$p.s = (function() {
  return this.dh;
});
$p.l = (function() {
  return (this.dh > 0);
});
$p.e = (function() {
  if (this.l()) {
    var r = this.v(this.dQ);
    this.dQ = ((1 + this.dQ) | 0);
    this.dh = (((-1) + this.dh) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().E.e();
  }
});
$p.cW = (function(n) {
  if ((n > 0)) {
    this.dQ = ((this.dQ + n) | 0);
    var b = ((this.dh - n) | 0);
    this.dh = ((b < 0) ? 0 : b);
  }
  return this;
});
/** @constructor */
function $c_sci_SetHashIterator(rootNode) {
  this.ab = 0;
  this.dG = 0;
  this.bJ = null;
  this.by = 0;
  this.cj = null;
  this.dH = null;
  this.kB = 0;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
  this.kB = 0;
}
$p = $c_sci_SetHashIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_SetHashIterator;
/** @constructor */
function $h_sci_SetHashIterator() {
}
$h_sci_SetHashIterator.prototype = $p;
$p.u = (function() {
  return this.kB;
});
$p.e = (function() {
  if ((!this.l())) {
    $m_sc_Iterator$().E.e();
  }
  this.kB = this.bJ.cu(this.ab);
  this.ab = ((1 + this.ab) | 0);
  return this;
});
var $d_sci_SetHashIterator = new $TypeData().i($c_sci_SetHashIterator, "scala.collection.immutable.SetHashIterator", ({
  i4: 1,
  aA: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_SetIterator(rootNode) {
  this.ab = 0;
  this.dG = 0;
  this.bJ = null;
  this.by = 0;
  this.cj = null;
  this.dH = null;
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
    $m_sc_Iterator$().E.e();
  }
  var payload = this.bJ.d0(this.ab);
  this.ab = ((1 + this.ab) | 0);
  return payload;
});
var $d_sci_SetIterator = new $TypeData().i($c_sci_SetIterator, "scala.collection.immutable.SetIterator", ({
  i5: 1,
  aA: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.kF = 0;
  $thiz.pv = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.kF = 0;
  this.pv = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.bj = (function(size) {
  if ((this.kF < size)) {
    this.uO(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.kI = null;
  this.kH = null;
  $n_scm_ArraySeq$ = this;
  this.kI = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.kH = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.ts = (function(it, evidence$2) {
  return this.lw($m_s_Array$().qC(it, evidence$2));
});
$p.iZ = (function(evidence$3) {
  return new $c_scm_Builder$$anon$1(new $c_scm_ArrayBuilder$generic(evidence$3.bc()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => $m_scm_ArraySeq$().lw(x$2$2))));
});
$p.lw = (function(x) {
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
$p.la = (function(it, evidence$5) {
  return this.ts(it, evidence$5);
});
$p.qq = (function(evidence$6) {
  return this.kH;
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  io: 1,
  c9: 1,
  c0: 1,
  bZ: 1,
  c1: 1,
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
  this.eA = 0;
  this.dS = null;
  this.hf = 0;
  this.he = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$1.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$1;
/** @constructor */
function $h_scm_HashSet$$anon$1() {
}
$h_scm_HashSet$$anon$1.prototype = $p;
$p.l7 = (function(nd) {
  return nd.g1;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  iw: 1,
  bi: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$2(outer) {
  this.eA = 0;
  this.dS = null;
  this.hf = 0;
  this.he = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$2.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$2;
/** @constructor */
function $h_scm_HashSet$$anon$2() {
}
$h_scm_HashSet$$anon$2.prototype = $p;
$p.l7 = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  ix: 1,
  bi: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$3(outer) {
  this.eA = 0;
  this.dS = null;
  this.hf = 0;
  this.he = null;
  this.kL = 0;
  this.pA = null;
  this.pA = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.kL = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.u = (function() {
  return this.kL;
});
$p.l7 = (function(nd) {
  this.kL = this.pA.j4(nd.dT);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  iy: 1,
  bi: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.hh = null;
  this.hh = runtimeClass;
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
$p.u = (function() {
  return $m_sr_Statics$().P(this.hh);
});
$p.w = (function() {
  return $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this.hh);
});
$p.bc = (function() {
  return this.hh;
});
$p.bY = (function(len) {
  return this.hh.C.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  iN: 1,
  L: 1,
  S: 1,
  T: 1,
  a: 1,
  d: 1
}));
function $ps_Lcom_raquo_airstream_web_WebStorageVar__WebStorageVar$superArg$1__F0__T__F1__F1__F0__F2__s_util_Try(maybeStorage, key, encode, decode, default$1, syncDistinctByFn) {
  var this$1 = maybeStorage.J();
  if (this$1.c()) {
    var this$3 = $m_s_None$();
  } else {
    var x0 = this$1.H();
    var this$2 = $m_s_Option$().kV(x0.getItem(key));
    var this$3 = (this$2.c() ? $m_s_None$() : new $c_s_Some(decode.b(this$2.H())));
  }
  return (this$3.c() ? default$1.J() : this$3.H());
}
function $p_Lcom_raquo_airstream_web_WebStorageVar__isSame$lzyINIT1$1__sr_LazyBoolean__s_util_Try__Z($thiz, isSame$lzy1$1, decodedValueTry$1) {
  if ((isSame$lzy1$1 === null)) {
    throw new $c_jl_NullPointerException();
  }
  if (isSame$lzy1$1.iw) {
    return isSame$lzy1$1.ix;
  } else {
    matchResult4: {
      var $x_1;
      var _2 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz.bZ);
      if ((decodedValueTry$1 instanceof $c_s_util_Success)) {
        var decodedValue = decodedValueTry$1.cC;
        if ((_2 instanceof $c_s_util_Success)) {
          var varValue = _2.cC;
          var $x_1 = (!(!$thiz.nj.cE(decodedValue, varValue)));
          break matchResult4;
        }
      }
      var $x_1 = false;
    }
    return isSame$lzy1$1.tP($x_1);
  }
}
function $p_Lcom_raquo_airstream_web_WebStorageVar__isSame$1__sr_LazyBoolean__s_util_Try__Z($thiz, isSame$lzy1$2, decodedValueTry$2) {
  return (isSame$lzy1$2.iw ? isSame$lzy1$2.ix : $p_Lcom_raquo_airstream_web_WebStorageVar__isSame$lzyINIT1$1__sr_LazyBoolean__s_util_Try__Z($thiz, isSame$lzy1$2, decodedValueTry$2));
}
/** @constructor */
function $c_Lcom_raquo_airstream_web_WebStorageVar(maybeStorage, key, encode, decode, default$1, syncDistinctByFn) {
  this.jz = null;
  this.i3 = null;
  this.i2 = null;
  this.i1 = null;
  this.bZ = null;
  this.jD = null;
  this.i5 = null;
  this.ne = null;
  this.nf = null;
  this.nj = null;
  this.ni = null;
  this.ng = null;
  this.nh = false;
  this.jD = maybeStorage;
  this.i5 = key;
  this.ne = decode;
  this.nf = default$1;
  this.nj = syncDistinctByFn;
  $ct_Lcom_raquo_airstream_state_SourceVar__s_util_Try__(this, $ps_Lcom_raquo_airstream_web_WebStorageVar__WebStorageVar$superArg$1__F0__T__F1__F1__F0__F2__s_util_Try(maybeStorage, key, encode, decode, default$1, syncDistinctByFn));
  this.ni = new $c_Lcom_raquo_airstream_ownership_ManualOwner();
  $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(this.bZ, $m_Lcom_raquo_airstream_core_Observer$().lU(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((newValue) => {
    var this$1 = maybeStorage.J();
    if ((!this$1.c())) {
      var x0 = this$1.H();
      var newValueStr = encode.b(newValue);
      try {
        x0.setItem(key, newValueStr);
      } catch (e) {
        if ((!(((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)) instanceof $c_sjs_js_JavaScriptException))) {
          throw e;
        }
      }
    }
  })), new $c_Lcom_raquo_airstream_web_WebStorageVar$$anon$1(this), false), this.ni);
}
$p = $c_Lcom_raquo_airstream_web_WebStorageVar.prototype = new $h_Lcom_raquo_airstream_state_SourceVar();
$p.constructor = $c_Lcom_raquo_airstream_web_WebStorageVar;
/** @constructor */
function $h_Lcom_raquo_airstream_web_WebStorageVar() {
}
$h_Lcom_raquo_airstream_web_WebStorageVar.prototype = $p;
$p.tg = (function() {
  if ((!this.nh)) {
    this.ng = new $c_Lcom_raquo_airstream_misc_FilterStream($m_Lcom_raquo_airstream_web_DomEventStream$().q1(window, "storage", false), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => (this.jD.J().aj(ev.storageArea) && (ev.key === this.i5)))));
    this.nh = true;
  }
  return this.ng;
});
$p.v9 = (function(syncOwner) {
  this.uA(true);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(this.tg(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    this.rj($m_s_Option$().kV(ev.newValue), true);
  })), syncOwner);
});
$p.uA = (function(distinctOnly) {
  var x5 = this.jD.J();
  if ((x5 instanceof $c_s_Some)) {
    var storage = x5.ed;
    this.rj($m_s_Option$().kV(storage.getItem(this.i5)), distinctOnly);
    return (void 0);
  }
  if (($m_s_None$() === x5)) {
    return (void 0);
  }
  throw new $c_s_MatchError(x5);
});
$p.rj = (function(storedValueOpt, distinctOnly) {
  var isSame$lzy1 = new $c_sr_LazyBoolean();
  var ifEmpty = this.nf;
  var f = this.ne;
  var decodedValueTry = (storedValueOpt.c() ? ifEmpty.J() : f.b(storedValueOpt.H()));
  if ((!(distinctOnly && $p_Lcom_raquo_airstream_web_WebStorageVar__isSame$1__sr_LazyBoolean__s_util_Try__Z(this, isSame$lzy1, decodedValueTry)))) {
    this.i3.eI(decodedValueTry);
  }
});
$p.dY = (function() {
  return (($f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this) + ("(key=" + this.i5)) + ")");
});
var $d_Lcom_raquo_airstream_web_WebStorageVar = new $TypeData().i($c_Lcom_raquo_airstream_web_WebStorageVar, "com.raquo.airstream.web.WebStorageVar", ({
  e8: 1,
  dZ: 1,
  ae: 1,
  aD: 1,
  aI: 1,
  Y: 1,
  e1: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2(key$2) {
  this.fD = null;
  this.fE = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$2, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2, "com.raquo.laminar.defs.styles.StyleProps$$anon$2", ({
  ey: 1,
  aZ: 1,
  af: 1,
  aX: 1,
  aY: 1,
  eC: 1,
  eE: 1
}));
class $c_ju_DuplicateFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.oF = null;
    this.oF = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bQ() {
    return (("Flags = '" + this.oF) + "'");
  }
}
var $d_ju_DuplicateFormatFlagsException = new $TypeData().i($c_ju_DuplicateFormatFlagsException, "java.util.DuplicateFormatFlagsException", ({
  g0: 1,
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
    this.oH = null;
    this.oG = 0;
    this.oH = f;
    this.oG = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bQ() {
    return ((("Conversion = " + $cToS(this.oG)) + ", Flags = ") + this.oH);
  }
}
var $d_ju_FormatFlagsConversionMismatchException = new $TypeData().i($c_ju_FormatFlagsConversionMismatchException, "java.util.FormatFlagsConversionMismatchException", ({
  g1: 1,
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
    this.oL = null;
    this.oL = msg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bQ() {
    return this.oL;
  }
}
var $d_ju_IllegalFormatArgumentIndexException = new $TypeData().i($c_ju_IllegalFormatArgumentIndexException, "java.util.IllegalFormatArgumentIndexException", ({
  g8: 1,
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
    this.oM = 0;
    this.oM = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bQ() {
    var i = this.oM;
    return ("Code point = 0x" + (+(i >>> 0.0)).toString(16));
  }
}
var $d_ju_IllegalFormatCodePointException = new $TypeData().i($c_ju_IllegalFormatCodePointException, "java.util.IllegalFormatCodePointException", ({
  g9: 1,
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
    this.oO = 0;
    this.oN = null;
    this.oO = c;
    this.oN = arg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((arg === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bQ() {
    return ((("" + $cToS(this.oO)) + " != ") + this.oN.C.N);
  }
}
var $d_ju_IllegalFormatConversionException = new $TypeData().i($c_ju_IllegalFormatConversionException, "java.util.IllegalFormatConversionException", ({
  ga: 1,
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
    this.oP = null;
    this.oP = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bQ() {
    return (("Flags = '" + this.oP) + "'");
  }
}
var $d_ju_IllegalFormatFlagsException = new $TypeData().i($c_ju_IllegalFormatFlagsException, "java.util.IllegalFormatFlagsException", ({
  gb: 1,
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
    this.oQ = 0;
    this.oQ = p;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bQ() {
    return ("" + this.oQ);
  }
}
var $d_ju_IllegalFormatPrecisionException = new $TypeData().i($c_ju_IllegalFormatPrecisionException, "java.util.IllegalFormatPrecisionException", ({
  gc: 1,
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
    this.oR = 0;
    this.oR = w;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bQ() {
    return ("" + this.oR);
  }
}
var $d_ju_IllegalFormatWidthException = new $TypeData().i($c_ju_IllegalFormatWidthException, "java.util.IllegalFormatWidthException", ({
  gd: 1,
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
    this.oS = null;
    this.oS = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bQ() {
    return (("Format specifier '" + this.oS) + "'");
  }
}
var $d_ju_MissingFormatArgumentException = new $TypeData().i($c_ju_MissingFormatArgumentException, "java.util.MissingFormatArgumentException", ({
  ge: 1,
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
    this.oT = null;
    this.oT = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bQ() {
    return this.oT;
  }
}
var $d_ju_MissingFormatWidthException = new $TypeData().i($c_ju_MissingFormatWidthException, "java.util.MissingFormatWidthException", ({
  gf: 1,
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
    this.oU = null;
    this.oU = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bQ() {
    return (("Conversion = '" + this.oU) + "'");
  }
}
var $d_ju_UnknownFormatConversionException = new $TypeData().i($c_ju_UnknownFormatConversionException, "java.util.UnknownFormatConversionException", ({
  gh: 1,
  a0: 1,
  U: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.cf = null;
  this.B = 0;
  this.c0 = 0;
  this.kd = null;
  this.kd = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $p;
$p.uk = (function() {
  if ((this.B >= this.kd.a.length)) {
    $m_sc_Iterator$().E.e();
  }
  var r = this.kd.a[this.B];
  this.B = ((1 + this.B) | 0);
  return r;
});
$p.e = (function() {
  return this.uk();
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcB$sp, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", ({
  gD: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
  this.cf = null;
  this.B = 0;
  this.c0 = 0;
  this.ke = null;
  this.ke = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $p;
$p.ul = (function() {
  if ((this.B >= this.ke.a.length)) {
    $m_sc_Iterator$().E.e();
  }
  var r = this.ke.a[this.B];
  this.B = ((1 + this.B) | 0);
  return r;
});
$p.e = (function() {
  return $bC(this.ul());
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcC$sp, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", ({
  gE: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
  this.cf = null;
  this.B = 0;
  this.c0 = 0;
  this.kf = null;
  this.kf = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $p;
$p.um = (function() {
  if ((this.B >= this.kf.a.length)) {
    $m_sc_Iterator$().E.e();
  }
  var r = this.kf.a[this.B];
  this.B = ((1 + this.B) | 0);
  return r;
});
$p.e = (function() {
  return this.um();
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcD$sp, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", ({
  gF: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
  this.cf = null;
  this.B = 0;
  this.c0 = 0;
  this.kg = null;
  this.kg = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $p;
$p.un = (function() {
  if ((this.B >= this.kg.a.length)) {
    $m_sc_Iterator$().E.e();
  }
  var r = this.kg.a[this.B];
  this.B = ((1 + this.B) | 0);
  return r;
});
$p.e = (function() {
  return this.un();
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcF$sp, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", ({
  gG: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
  this.cf = null;
  this.B = 0;
  this.c0 = 0;
  this.kh = null;
  this.kh = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $p;
$p.uo = (function() {
  if ((this.B >= this.kh.a.length)) {
    $m_sc_Iterator$().E.e();
  }
  var r = this.kh.a[this.B];
  this.B = ((1 + this.B) | 0);
  return r;
});
$p.e = (function() {
  return this.uo();
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcI$sp, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", ({
  gH: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
  this.cf = null;
  this.B = 0;
  this.c0 = 0;
  this.ki = null;
  this.ki = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $p;
$p.up = (function() {
  if ((this.B >= this.ki.a.length)) {
    $m_sc_Iterator$().E.e();
  }
  var t = this.ki.a[this.B];
  var lo = t.p;
  var hi = t.t;
  this.B = ((1 + this.B) | 0);
  return new $c_RTLong(lo, hi);
});
$p.e = (function() {
  return this.up();
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcJ$sp, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", ({
  gI: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
  this.cf = null;
  this.B = 0;
  this.c0 = 0;
  this.kj = null;
  this.kj = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $p;
$p.uq = (function() {
  if ((this.B >= this.kj.a.length)) {
    $m_sc_Iterator$().E.e();
  }
  var r = this.kj.a[this.B];
  this.B = ((1 + this.B) | 0);
  return r;
});
$p.e = (function() {
  return this.uq();
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcS$sp, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", ({
  gJ: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
  this.cf = null;
  this.B = 0;
  this.c0 = 0;
  this.p1 = null;
  this.p1 = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $p;
$p.ur = (function() {
  if ((this.B >= this.p1.a.length)) {
    $m_sc_Iterator$().E.e();
  }
  this.B = ((1 + this.B) | 0);
});
$p.e = (function() {
  this.ur();
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcV$sp, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", ({
  gK: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
  this.cf = null;
  this.B = 0;
  this.c0 = 0;
  this.kk = null;
  this.kk = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $p;
$p.us = (function() {
  if ((this.B >= this.kk.a.length)) {
    $m_sc_Iterator$().E.e();
  }
  var r = this.kk.a[this.B];
  this.B = ((1 + this.B) | 0);
  return r;
});
$p.e = (function() {
  return this.us();
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcZ$sp, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", ({
  gL: 1,
  a6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterable$$anon$1(a$1) {
  this.km = null;
  this.km = a$1;
}
$p = $c_sc_Iterable$$anon$1.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_Iterable$$anon$1;
/** @constructor */
function $h_sc_Iterable$$anon$1() {
}
$h_sc_Iterable$$anon$1.prototype = $p;
$p.f = (function() {
  return new $c_sc_Iterator$$anon$20(this.km);
});
$p.s = (function() {
  return 1;
});
$p.tK = (function() {
  return new $c_s_Some(this.km);
});
$p.bI = (function() {
  return this.tK();
});
var $d_sc_Iterable$$anon$1 = new $TypeData().i($c_sc_Iterable$$anon$1, "scala.collection.Iterable$$anon$1", ({
  gT: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.c9() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.D)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.D)));
}
/** @constructor */
function $c_sci_Set$Set2$$anon$1(outer) {
  this.dQ = 0;
  this.dh = 0;
  this.po = null;
  this.po = outer;
  $ct_sci_Set$SetNIterator__I__(this, 2);
}
$p = $c_sci_Set$Set2$$anon$1.prototype = new $h_sci_Set$SetNIterator();
$p.constructor = $c_sci_Set$Set2$$anon$1;
/** @constructor */
function $h_sci_Set$Set2$$anon$1() {
}
$h_sci_Set$Set2$$anon$1.prototype = $p;
$p.v = (function(i) {
  return this.po.uS(i);
});
var $d_sci_Set$Set2$$anon$1 = new $TypeData().i($c_sci_Set$Set2$$anon$1, "scala.collection.immutable.Set$Set2$$anon$1", ({
  i0: 1,
  be: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set3$$anon$2(outer) {
  this.dQ = 0;
  this.dh = 0;
  this.pp = null;
  this.pp = outer;
  $ct_sci_Set$SetNIterator__I__(this, 3);
}
$p = $c_sci_Set$Set3$$anon$2.prototype = new $h_sci_Set$SetNIterator();
$p.constructor = $c_sci_Set$Set3$$anon$2;
/** @constructor */
function $h_sci_Set$Set3$$anon$2() {
}
$h_sci_Set$Set3$$anon$2.prototype = $p;
$p.v = (function(i) {
  return this.pp.uT(i);
});
var $d_sci_Set$Set3$$anon$2 = new $TypeData().i($c_sci_Set$Set3$$anon$2, "scala.collection.immutable.Set$Set3$$anon$2", ({
  i1: 1,
  be: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set4$$anon$3(outer) {
  this.dQ = 0;
  this.dh = 0;
  this.pq = null;
  this.pq = outer;
  $ct_sci_Set$SetNIterator__I__(this, 4);
}
$p = $c_sci_Set$Set4$$anon$3.prototype = new $h_sci_Set$SetNIterator();
$p.constructor = $c_sci_Set$Set4$$anon$3;
/** @constructor */
function $h_sci_Set$Set4$$anon$3() {
}
$h_sci_Set$Set4$$anon$3.prototype = $p;
$p.v = (function(i) {
  return this.pq.uU(i);
});
var $d_sci_Set$Set4$$anon$3 = new $TypeData().i($c_sci_Set$Set4$$anon$3, "scala.collection.immutable.Set$Set4$$anon$3", ({
  i2: 1,
  be: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.kF = 0;
  this.pv = 0;
  this.g0 = null;
  this.pw = false;
  this.kG = null;
  this.g0 = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.pw = (elementClass === $d_C.l());
  this.kG = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.pU = (function(elem) {
  var unboxedElem = (this.pw ? $uC(elem) : ((elem === null) ? this.g0.C.z : elem));
  this.kG.push(unboxedElem);
  return this;
});
$p.rY = (function(xs) {
  var it = xs.f();
  while (it.l()) {
    this.pU(it.e());
  }
  return this;
});
$p.uO = (function(size) {
});
$p.aU = (function() {
  var elemRuntimeClass = ((this.g0 === $d_V.l()) ? $d_jl_Void.l() : (((this.g0 === $d_sr_Null$.l()) || (this.g0 === $d_sr_Nothing$.l())) ? $d_O.l() : this.g0));
  return elemRuntimeClass.C.r().w(this.kG);
});
$p.w = (function() {
  return "ArrayBuilder.generic";
});
$p.b2 = (function(elems) {
  return this.rY(elems);
});
$p.ax = (function(elem) {
  return this.pU(elem);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  im: 1,
  il: 1,
  a9: 1,
  K: 1,
  J: 1,
  I: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.kl = null;
  this.dx = 0;
  this.cg = 0;
  this.pz = null;
  this.py = 0;
  this.pz = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.py = (mutationCount.J() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.l = (function() {
  $m_scm_MutationTracker$().qg(this.py, (this.pz.J() | 0), "mutation occurred during iteration");
  return (this.cg > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  is: 1,
  c3: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.aw = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.w = (function() {
  return this.aw;
});
$p.n = (function(that) {
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
    this.ai = null;
    this.ai = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bQ() {
    return $dp_toString__T(this.ai);
  }
  bb() {
    return "JavaScriptException";
  }
  b9() {
    return 1;
  }
  ba(x$1) {
    return ((x$1 === 0) ? this.ai : $m_sr_Statics$().eH(x$1));
  }
  bw() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().d4(this, (-889275714), false);
  }
  n(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().k(this.ai, x$1.ai)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d7)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  d7: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1,
  C: 1,
  d: 1
}));
function $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, newValue) {
  if ((!($thiz.iY() === (void 0)))) {
    $thiz.iH($m_Lcom_raquo_airstream_core_Signal$().r1());
  }
  $thiz.ly(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.iY();
  if ((x === (void 0))) {
    $thiz.iH($m_Lcom_raquo_airstream_core_Signal$().r1());
    var nextValue = $thiz.iN();
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
  var isError = nextValue.lq();
  var elem = false;
  elem = false;
  $thiz.cI(false);
  var this$ = $thiz.cX();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.eI(nextValue);
    if ((isError && (!elem))) {
      var ev$5 = true;
      elem = ev$5;
    }
  }
  var this$$1 = $thiz.d2();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.gp(nextValue, transaction);
    if ((isError && (!elem))) {
      var ev$6 = true;
      elem = ev$6;
    }
  }
  $thiz.cI(true);
  var x = $thiz.e2();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].J();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
  if ((isError && (!elem))) {
    nextValue.ct(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cL(err);
    })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))));
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.cI(false);
  var this$ = $thiz.cX();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    try {
      observer.gm(nextValue);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      $m_Lcom_raquo_airstream_core_AirstreamError$().cL(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.d2();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.hE(nextValue, transaction);
  }
  $thiz.cI(true);
  var x = $thiz.e2();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].J();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.cI(false);
  var this$ = $thiz.cX();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.hD(nextError);
  }
  var this$$1 = $thiz.d2();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.j1(nextError, transaction);
  }
  $thiz.cI(true);
  var x = $thiz.e2();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].J();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.ct(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, _$2, transaction);
  })));
}
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33(key$33) {
  this.fD = null;
  this.fE = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$33, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33, "com.raquo.laminar.defs.styles.StyleProps$$anon$33", ({
  ez: 1,
  aZ: 1,
  af: 1,
  aX: 1,
  aY: 1,
  bA: 1,
  bB: 1,
  eD: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4(key$4) {
  this.fD = null;
  this.fE = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$4, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4, "com.raquo.laminar.defs.styles.StyleProps$$anon$4", ({
  eA: 1,
  aZ: 1,
  af: 1,
  aX: 1,
  aY: 1,
  eB: 1,
  bA: 1,
  bB: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.c())) {
      return s;
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = s.x();
      n = temp$n;
      s = temp$s;
    }
  }
}
function $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  if (($thiz.b3(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.hA();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.f();
    var different = false;
    while (it.l()) {
      var next = it.e();
      if (seen.iI(f.b(next))) {
        builder.ax(next);
      } else {
        different = true;
      }
    }
    return (different ? builder.aU() : $thiz);
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.aw = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.bc = (function() {
  return $d_Z.l();
});
$p.bY = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.aw = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.bc = (function() {
  return $d_B.l();
});
$p.bY = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.aw = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.bc = (function() {
  return $d_C.l();
});
$p.bY = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.aw = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.bc = (function() {
  return $d_D.l();
});
$p.bY = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.aw = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.bc = (function() {
  return $d_F.l();
});
$p.bY = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.aw = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.bc = (function() {
  return $d_I.l();
});
$p.bY = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.aw = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.bc = (function() {
  return $d_J.l();
});
$p.bY = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.dV = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.w = (function() {
  return this.dV;
});
$p.n = (function(that) {
  return (this === that);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.aw = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.bc = (function() {
  return $d_S.l();
});
$p.bY = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.aw = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.bc = (function() {
  return $d_V.l();
});
$p.bY = (function(len) {
  return new ($d_jl_Void.r().C)(len);
});
function $f_Lcom_raquo_airstream_common_MultiParentSignal___parentLastUpdateIds__Lcom_raquo_ew_JsArray($thiz) {
  return $thiz.gA.map(((_$1) => _$1.g4()));
}
function $f_Lcom_raquo_airstream_common_MultiParentSignal__onWillStart__V($thiz) {
  var arr = $thiz.gA;
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
  var arr = $thiz.gA;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var parent = arr[i];
    var ix = i;
    var newLastUpdateId = parent.g4();
    if ((newLastUpdateId !== ($thiz.pO()[ix] | 0))) {
      $thiz.pO()[ix] = newLastUpdateId;
      var ev$3 = true;
      elem = ev$3;
    }
    i = ((1 + i) | 0);
  }
  return elem;
}
function $f_Lcom_raquo_airstream_common_MultiParentSignal__updateCurrentValueFromParent__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, $thiz.l1());
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
$p.aZ = (function() {
  return $m_sc_View$();
});
$p.w = (function() {
  return $f_sc_View__toString__T(this);
});
$p.bd = (function() {
  return "View";
});
function $f_sc_Set__equals__O__Z($thiz, that) {
  if (($thiz === that)) {
    return true;
  } else if ($is_sc_Set(that)) {
    if (($thiz.M() === that.M())) {
      try {
        return $thiz.lO(that);
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
  this.dV = null;
  this.dV = "Any";
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.bc = (function() {
  return $d_O.l();
});
$p.bY = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  iP: 1,
  aQ: 1,
  aP: 1,
  X: 1,
  L: 1,
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
  this.aw = null;
  this.aw = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  iR: 1,
  iQ: 1,
  ad: 1,
  X: 1,
  L: 1,
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
  this.aw = null;
  this.aw = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  iT: 1,
  iS: 1,
  ad: 1,
  X: 1,
  L: 1,
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
  this.aw = null;
  this.aw = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  iV: 1,
  iU: 1,
  ad: 1,
  X: 1,
  L: 1,
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
  this.aw = null;
  this.aw = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  iX: 1,
  iW: 1,
  ad: 1,
  X: 1,
  L: 1,
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
  this.aw = null;
  this.aw = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  iZ: 1,
  iY: 1,
  ad: 1,
  X: 1,
  L: 1,
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
  this.aw = null;
  this.aw = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  j1: 1,
  j0: 1,
  ad: 1,
  X: 1,
  L: 1,
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
  this.aw = null;
  this.aw = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  j3: 1,
  j2: 1,
  ad: 1,
  X: 1,
  L: 1,
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
  this.dV = null;
  this.dV = "Nothing";
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.bc = (function() {
  return $d_sr_Nothing$.l();
});
$p.bY = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  j4: 1,
  aQ: 1,
  aP: 1,
  X: 1,
  L: 1,
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
  this.dV = null;
  this.dV = "Null";
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.bc = (function() {
  return $d_sr_Null$.l();
});
$p.bY = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  j5: 1,
  aQ: 1,
  aP: 1,
  X: 1,
  L: 1,
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
  this.dV = null;
  this.dV = "Object";
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.bc = (function() {
  return $d_O.l();
});
$p.bY = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  j6: 1,
  aQ: 1,
  aP: 1,
  X: 1,
  L: 1,
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
  this.aw = null;
  this.aw = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  j8: 1,
  j7: 1,
  ad: 1,
  X: 1,
  L: 1,
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
  this.aw = null;
  this.aw = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  ja: 1,
  j9: 1,
  ad: 1,
  X: 1,
  L: 1,
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
  this.jf = null;
  this.jf = \u03b4name$2;
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
$p.b9 = (function() {
  return 0;
});
$p.ba = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.bb = (function() {
  return this.jf;
});
$p.w = (function() {
  return this.jf;
});
var $d_Ladversaries_Stage$$anon$1 = new $TypeData().i($c_Ladversaries_Stage$$anon$1, "adversaries.Stage$$anon$1", ({
  dj: 1,
  dh: 1,
  d: 1,
  C: 1,
  a: 1,
  iO: 1,
  ji: 1,
  aO: 1,
  d3: 1,
  iK: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.lF(), $thiz, false);
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.lF(), $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomStreamSource(makeConfig) {
  this.mr = null;
  this.mq = false;
  this.ms = null;
  this.mo = null;
  this.mp = null;
  this.mu = false;
  this.mt = 0;
  this.hW = 0;
  this.hV = null;
  this.mr = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V(this);
  this.hV = makeConfig.sj(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, value, _$1);
    })));
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => ((_$2) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, err$2, _$2);
    }))(err)));
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.hW)), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this))));
}
$p = $c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomStreamSource;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomStreamSource() {
}
$h_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = $p;
$p.e1 = (function() {
  return this.mr;
});
$p.dY = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.w = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fn = (function() {
  return this.mq;
});
$p.e2 = (function() {
  return this.ms;
});
$p.cI = (function(x$1) {
  this.mq = x$1;
});
$p.fo = (function(x$1) {
  this.ms = x$1;
});
$p.n = (function(obj) {
  return (this === obj);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.gl = (function(observer) {
});
$p.cX = (function() {
  return this.mo;
});
$p.d2 = (function() {
  return this.mp;
});
$p.gv = (function() {
  return this.mu;
});
$p.eL = (function(x$1) {
  this.mu = x$1;
});
$p.g8 = (function(x$0) {
  this.mo = x$0;
});
$p.g9 = (function(x$0) {
  this.mp = x$0;
});
$p.gc = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.e4 = (function() {
  return this.mt;
});
$p.gq = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V(this);
});
$p.gn = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V(this);
});
$p.go = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V(this);
});
$p.eJ = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_custom_CustomStreamSource = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomStreamSource, "com.raquo.airstream.custom.CustomStreamSource", ({
  dO: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aT: 1,
  aR: 1,
  au: 1,
  aV: 1,
  dK: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_VarSignal(initial, parentDisplayName) {
  this.n6 = null;
  this.n5 = false;
  this.n7 = null;
  this.jA = 0;
  this.n3 = null;
  this.n4 = null;
  this.na = false;
  this.jB = null;
  this.n8 = null;
  this.n9 = 0;
  this.n8 = parentDisplayName;
  this.n6 = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.jA = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.jB = (void 0);
  this.n9 = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V(this, initial);
}
$p = $c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $p;
$p.e1 = (function() {
  return this.n6;
});
$p.w = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fn = (function() {
  return this.n5;
});
$p.e2 = (function() {
  return this.n7;
});
$p.cI = (function(x$1) {
  this.n5 = x$1;
});
$p.fo = (function(x$1) {
  this.n7 = x$1;
});
$p.go = (function() {
});
$p.n = (function(obj) {
  return (this === obj);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.g4 = (function() {
  return this.jA;
});
$p.iH = (function(x$1) {
  this.jA = x$1;
});
$p.hJ = (function() {
  return this;
});
$p.gn = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.gl = (function(observer) {
  observer.eI($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cX = (function() {
  return this.n3;
});
$p.d2 = (function() {
  return this.n4;
});
$p.gv = (function() {
  return this.na;
});
$p.eL = (function(x$1) {
  this.na = x$1;
});
$p.g8 = (function(x$0) {
  this.n3 = x$0;
});
$p.g9 = (function(x$0) {
  this.n4 = x$0;
});
$p.iY = (function() {
  return this.jB;
});
$p.ly = (function(x$1) {
  this.jB = x$1;
});
$p.gc = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.hK = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.e4 = (function() {
  return this.n9;
});
$p.iN = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gq = (function() {
});
$p.dY = (function() {
  return (this.n8.J() + ".signal");
});
$p.eJ = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().i($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  e4: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aD: 1,
  aH: 1,
  au: 1,
  aU: 1,
  e0: 1
}));
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.iL($thiz)) {
        return $thiz.gr(o);
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
  this.pd = null;
  this.pd = it$1;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.f = (function() {
  return this.pd.J();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  hc: 1,
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
  $thiz.fP = underlying;
  $thiz.h2 = elem;
  return $thiz;
}
/** @constructor */
function $c_sc_View$Appended() {
  this.fP = null;
  this.h2 = null;
}
$p = $c_sc_View$Appended.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Appended;
/** @constructor */
function $h_sc_View$Appended() {
}
$h_sc_View$Appended.prototype = $p;
$p.f = (function() {
  return new $c_sc_View$Concat(this.fP, new $c_sc_View$Single(this.h2)).f();
});
$p.s = (function() {
  var size = this.fP.s();
  return ((size >= 0) ? ((1 + size) | 0) : (-1));
});
$p.c = (function() {
  return false;
});
var $d_sc_View$Appended = new $TypeData().i($c_sc_View$Appended, "scala.collection.View$Appended", ({
  aL: 1,
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
  this.ik = null;
  this.il = null;
  this.ik = prefix;
  this.il = suffix;
}
$p = $c_sc_View$Concat.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Concat;
/** @constructor */
function $h_sc_View$Concat() {
}
$h_sc_View$Concat.prototype = $p;
$p.f = (function() {
  return this.ik.f().ht(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.il.f())));
});
$p.s = (function() {
  var prefixSize = this.ik.s();
  if ((prefixSize >= 0)) {
    var suffixSize = this.il.s();
    return ((suffixSize >= 0) ? ((prefixSize + suffixSize) | 0) : (-1));
  } else {
    return (-1);
  }
});
$p.c = (function() {
  return (this.ik.c() && this.il.c());
});
var $d_sc_View$Concat = new $TypeData().i($c_sc_View$Concat, "scala.collection.View$Concat", ({
  hd: 1,
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
  this.im = null;
  this.pe = null;
  this.im = underlying;
  this.pe = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.f = (function() {
  return new $c_sc_Iterator$$anon$8(this.im.f(), this.pe);
});
$p.s = (function() {
  return ((this.im.s() === 0) ? 0 : (-1));
});
$p.c = (function() {
  return this.im.c();
});
var $d_sc_View$DistinctBy = new $TypeData().i($c_sc_View$DistinctBy, "scala.collection.View$DistinctBy", ({
  he: 1,
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
  $thiz.eY = underlying;
  $thiz.h3 = f;
  return $thiz;
}
/** @constructor */
function $c_sc_View$Map() {
  this.eY = null;
  this.h3 = null;
}
$p = $c_sc_View$Map.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Map;
/** @constructor */
function $h_sc_View$Map() {
}
$h_sc_View$Map.prototype = $p;
$p.f = (function() {
  return new $c_sc_Iterator$$anon$9(this.eY.f(), this.h3);
});
$p.s = (function() {
  return this.eY.s();
});
$p.c = (function() {
  return this.eY.c();
});
var $d_sc_View$Map = new $TypeData().i($c_sc_View$Map, "scala.collection.View$Map", ({
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
function $c_sc_View$Single(a) {
  this.pf = null;
  this.pf = a;
}
$p = $c_sc_View$Single.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Single;
/** @constructor */
function $h_sc_View$Single() {
}
$h_sc_View$Single.prototype = $p;
$p.f = (function() {
  return new $c_sc_Iterator$$anon$20(this.pf);
});
$p.s = (function() {
  return 1;
});
$p.c = (function() {
  return false;
});
var $d_sc_View$Single = new $TypeData().i($c_sc_View$Single, "scala.collection.View$Single", ({
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
function $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V($thiz) {
  $thiz.ju = ($thiz.e7 !== null);
  $thiz.hX = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.e7);
  if ($thiz.ju) {
    var newParentLastUpdateId = $thiz.e7.g4();
    if ((newParentLastUpdateId !== $thiz.hX)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.iN(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.hX = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.ju) {
    $thiz.hX = $thiz.e7.g4();
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.e7, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.e7, $thiz);
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
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.hL(this, this$1.iB);
});
$p.bd = (function() {
  return "Set";
});
$p.w = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.lO = (function(that) {
  return this.dl(that);
});
$p.b = (function(v1) {
  return this.aj(v1);
});
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else if ($is_sc_Map(o)) {
    if (($thiz.M() === o.M())) {
      try {
        return $thiz.dl(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x2) => ((kv$2$2) => $m_sr_BoxesRunTime$().k(x2.dZ(kv$2$2.bz(), $m_sc_Map$().pa), kv$2$2.bs())))(o)));
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
  this.m8 = null;
  this.m7 = false;
  this.m9 = null;
  this.jg = 0;
  this.m5 = null;
  this.m6 = null;
  this.ma = false;
  this.jh = null;
  this.m2 = null;
  this.m3 = false;
  this.gA = null;
  this.m4 = null;
  this.jj = 0;
  this.ji = null;
  this.gA = parents;
  this.m4 = combinator;
  this.m8 = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.jg = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.jh = (void 0);
  this.jj = ((1 + $m_Lcom_raquo_airstream_core_Protected$().uc(0, parents)) | 0);
  this.ji = parents.map(((parent) => $m_Lcom_raquo_airstream_common_InternalParentObserver$().ty(parent, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$1, trx) => {
    $f_Lcom_raquo_airstream_combine_CombineObservable__onInputsReady__Lcom_raquo_airstream_core_Transaction__V(this, trx);
  })))));
}
$p = $c_Lcom_raquo_airstream_combine_CombineSignalN.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_combine_CombineSignalN;
/** @constructor */
function $h_Lcom_raquo_airstream_combine_CombineSignalN() {
}
$h_Lcom_raquo_airstream_combine_CombineSignalN.prototype = $p;
$p.e1 = (function() {
  return this.m8;
});
$p.dY = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.w = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fn = (function() {
  return this.m7;
});
$p.e2 = (function() {
  return this.m9;
});
$p.cI = (function(x$1) {
  this.m7 = x$1;
});
$p.fo = (function(x$1) {
  this.m9 = x$1;
});
$p.n = (function(obj) {
  return (this === obj);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.g4 = (function() {
  return this.jg;
});
$p.iH = (function(x$1) {
  this.jg = x$1;
});
$p.hJ = (function() {
  return this;
});
$p.gl = (function(observer) {
  observer.eI($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cX = (function() {
  return this.m5;
});
$p.d2 = (function() {
  return this.m6;
});
$p.gv = (function() {
  return this.ma;
});
$p.eL = (function(x$1) {
  this.ma = x$1;
});
$p.g8 = (function(x$0) {
  this.m5 = x$0;
});
$p.g9 = (function(x$0) {
  this.m6 = x$0;
});
$p.iY = (function() {
  return this.jh;
});
$p.ly = (function(x$1) {
  this.jh = x$1;
});
$p.hK = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gc = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.pO = (function() {
  if ((!this.m3)) {
    this.m2 = $f_Lcom_raquo_airstream_common_MultiParentSignal___parentLastUpdateIds__Lcom_raquo_ew_JsArray(this);
    this.m3 = true;
  }
  return this.m2;
});
$p.gq = (function() {
  $f_Lcom_raquo_airstream_common_MultiParentSignal__onWillStart__V(this);
});
$p.gn = (function() {
  $f_Lcom_raquo_airstream_combine_CombineObservable__onStart__V(this);
});
$p.go = (function() {
  $f_Lcom_raquo_airstream_combine_CombineObservable__onStop__V(this);
});
$p.e4 = (function() {
  return this.jj;
});
$p.l1 = (function() {
  return $m_Lcom_raquo_airstream_combine_CombineObservable$().u2(this.gA.map(((_$2) => _$2.hK())), this.m4);
});
$p.iN = (function() {
  return this.l1();
});
$p.eJ = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_combine_CombineSignalN = new $TypeData().i($c_Lcom_raquo_airstream_combine_CombineSignalN, "com.raquo.airstream.combine.CombineSignalN", ({
  dp: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aD: 1,
  aH: 1,
  au: 1,
  aU: 1,
  dv: 1,
  dF: 1,
  dm: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_CollectStream(parent, fn) {
  this.mz = null;
  this.my = false;
  this.mA = null;
  this.mv = null;
  this.mx = null;
  this.mC = false;
  this.jq = null;
  this.mw = null;
  this.mB = 0;
  this.jq = parent;
  this.mw = fn;
  this.mz = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.mB = ((1 + parent.e4()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.e1 = (function() {
  return this.mz;
});
$p.dY = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.w = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fn = (function() {
  return this.my;
});
$p.e2 = (function() {
  return this.mA;
});
$p.cI = (function(x$1) {
  this.my = x$1;
});
$p.fo = (function(x$1) {
  this.mA = x$1;
});
$p.n = (function(obj) {
  return (this === obj);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.gl = (function(observer) {
});
$p.cX = (function() {
  return this.mv;
});
$p.d2 = (function() {
  return this.mx;
});
$p.gv = (function() {
  return this.mC;
});
$p.eL = (function(x$1) {
  this.mC = x$1;
});
$p.g8 = (function(x$0) {
  this.mv = x$0;
});
$p.g9 = (function(x$0) {
  this.mx = x$0;
});
$p.gc = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.gq = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.jq);
});
$p.gn = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.go = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.gp = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.lF = (function() {
  return this.jq;
});
$p.e4 = (function() {
  return this.mB;
});
$p.hE = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.mw.b(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().cF(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ai : e$2);
    }
  }
  $x_1.ct(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
    if ((!nextValue.c())) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.H(), transaction);
    }
  })));
});
$p.j1 = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.eJ = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_CollectStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_CollectStream, "com.raquo.airstream.misc.CollectStream", ({
  dP: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aT: 1,
  aR: 1,
  au: 1,
  aV: 1,
  aC: 1,
  bp: 1,
  bn: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_FilterStream(parent, passes) {
  this.mG = null;
  this.mF = false;
  this.mH = null;
  this.mD = null;
  this.mE = null;
  this.mK = false;
  this.jr = null;
  this.mI = null;
  this.mJ = 0;
  this.jr = parent;
  this.mI = passes;
  this.mG = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.mJ = ((1 + parent.e4()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_FilterStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_FilterStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_FilterStream() {
}
$h_Lcom_raquo_airstream_misc_FilterStream.prototype = $p;
$p.e1 = (function() {
  return this.mG;
});
$p.dY = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.w = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fn = (function() {
  return this.mF;
});
$p.e2 = (function() {
  return this.mH;
});
$p.cI = (function(x$1) {
  this.mF = x$1;
});
$p.fo = (function(x$1) {
  this.mH = x$1;
});
$p.n = (function(obj) {
  return (this === obj);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.gl = (function(observer) {
});
$p.cX = (function() {
  return this.mD;
});
$p.d2 = (function() {
  return this.mE;
});
$p.gv = (function() {
  return this.mK;
});
$p.eL = (function(x$1) {
  this.mK = x$1;
});
$p.g8 = (function(x$0) {
  this.mD = x$0;
});
$p.g9 = (function(x$0) {
  this.mE = x$0;
});
$p.gc = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.gq = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.jr);
});
$p.gn = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.go = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.gp = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.lF = (function() {
  return this.jr;
});
$p.e4 = (function() {
  return this.mJ;
});
$p.hE = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success((!(!this.mI.b(nextParentValue))));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().cF(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ai : e$2);
    }
  }
  $x_1.ct(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((v1) => {
    if ((!(!v1))) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
    }
  })));
});
$p.j1 = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.eJ = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_FilterStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_FilterStream, "com.raquo.airstream.misc.FilterStream", ({
  dQ: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aT: 1,
  aR: 1,
  au: 1,
  aV: 1,
  aC: 1,
  bp: 1,
  bn: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.mO = null;
  this.mN = false;
  this.mP = null;
  this.js = 0;
  this.mL = null;
  this.mM = null;
  this.mR = false;
  this.jt = null;
  this.ju = false;
  this.hX = 0;
  this.e7 = null;
  this.jv = null;
  this.jw = null;
  this.mQ = 0;
  this.e7 = parent;
  this.jv = project;
  this.jw = recover;
  this.mO = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.js = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.jt = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.mQ = ((1 + parent.e4()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.e1 = (function() {
  return this.mO;
});
$p.dY = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.w = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fn = (function() {
  return this.mN;
});
$p.e2 = (function() {
  return this.mP;
});
$p.cI = (function(x$1) {
  this.mN = x$1;
});
$p.fo = (function(x$1) {
  this.mP = x$1;
});
$p.n = (function(obj) {
  return (this === obj);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.g4 = (function() {
  return this.js;
});
$p.iH = (function(x$1) {
  this.js = x$1;
});
$p.hJ = (function() {
  return this;
});
$p.gl = (function(observer) {
  observer.eI($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cX = (function() {
  return this.mL;
});
$p.d2 = (function() {
  return this.mM;
});
$p.gv = (function() {
  return this.mR;
});
$p.eL = (function(x$1) {
  this.mR = x$1;
});
$p.g8 = (function(x$0) {
  this.mL = x$0;
});
$p.g9 = (function(x$0) {
  this.mM = x$0;
});
$p.iY = (function() {
  return this.jt;
});
$p.ly = (function(x$1) {
  this.jt = x$1;
});
$p.hK = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gc = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.hE = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.j1 = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.gq = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$p.gn = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$p.go = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$p.e4 = (function() {
  return this.mQ;
});
$p.gp = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  nextParentValue.ct(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.jw;
    if (this$2.c()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
    } else {
      var x0 = this$2.H();
      try {
        var $x_1 = new $c_s_util_Success(x0.bF(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().cF(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ai : e$2);
        }
      }
      $x_1.ct(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$3) => ((tryError) => {
        $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$3$3), transaction);
      }))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$4) => ((nextValue) => {
        if ((nextValue === null)) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$3$4, transaction);
        } else if ((!nextValue.c())) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.H(), transaction);
        }
      }))(nextError)));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.lx(this.jv), transaction);
  })));
});
$p.iN = (function() {
  var originalValue = this.e7.hK().lx(this.jv);
  return originalValue.ct(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.jw;
    if (this$2.c()) {
      return originalValue;
    } else {
      var x0 = this$2.H();
      try {
        var $x_1 = new $c_s_util_Success(x0.bF(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().cF(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ai : e$2);
        }
      }
      return $x_1.ct(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$7$3) => ((tryError) => new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$7$3))))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
        if ((nextValue === null)) {
          return originalValue;
        } else {
          var this$7 = (nextValue.c() ? $m_s_None$() : new $c_s_Some(new $c_s_util_Success(nextValue.H())));
          return (this$7.c() ? originalValue : this$7.H());
        }
      })));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$6) => originalValue)));
});
$p.eJ = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapSignal, "com.raquo.airstream.misc.MapSignal", ({
  dR: 1,
  ae: 1,
  Y: 1,
  am: 1,
  an: 1,
  aD: 1,
  aH: 1,
  au: 1,
  aU: 1,
  aC: 1,
  bo: 1,
  dw: 1
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
$p.iL = (function(that) {
  return true;
});
$p.n = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().ri(this);
});
$p.w = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.R = (function(elem) {
  return $f_sc_SeqOps__appended__O__O(this, elem);
});
$p.M = (function() {
  return this.m();
});
$p.cH = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.lm = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.fm = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.f(), p, from);
});
$p.lN = (function(otherSize) {
  return this.b3(otherSize);
});
$p.b3 = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.gr = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.bF = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.bX = (function(x) {
  return this.lm((x | 0));
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
$p.cJ = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.cD = (function(elem) {
  return $ct_sc_SeqView$Appended__sc_SeqOps__O__(new $c_sc_SeqView$Appended(), this, elem);
});
$p.bd = (function() {
  return "SeqView";
});
$p.cH = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.fm = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.f(), p, from);
});
$p.b3 = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.R = (function(elem) {
  return this.cD(elem);
});
$p.L = (function(f) {
  return this.cJ(f);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.t)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.t)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aF)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aF)));
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
  return $m_sc_Iterator$().E;
});
$p.s = (function() {
  return 0;
});
$p.c = (function() {
  return true;
});
$p.bb = (function() {
  return "Empty";
});
$p.b9 = (function() {
  return 0;
});
$p.ba = (function(x$1) {
  return $m_sr_Statics$().eH(x$1);
});
$p.bw = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return 67081517;
});
var $d_sc_View$Empty$ = new $TypeData().i($c_sc_View$Empty$, "scala.collection.View$Empty$", ({
  hf: 1,
  H: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  D: 1,
  a: 1,
  C: 1,
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
  $thiz.nC = new $c_Lcom_raquo_laminar_api_Laminar$$anon$1();
  $thiz.ry = $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$();
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
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().ua(this);
});
$p.bd = (function() {
  return "Map";
});
$p.w = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.ge = (function(coll) {
  return this.qX().ay(coll);
});
$p.bF = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.fk = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.bX = (function(key) {
  return this.aj(key);
});
$p.eD = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
function $ct_sc_SeqView$Appended__sc_SeqOps__O__($thiz, underlying, elem) {
  $thiz.fO = underlying;
  $thiz.ii = elem;
  $ct_sc_View$Appended__sc_IterableOps__O__($thiz, underlying, elem);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Appended() {
  this.fP = null;
  this.h2 = null;
  this.fO = null;
  this.ii = null;
}
$p = $c_sc_SeqView$Appended.prototype = new $h_sc_View$Appended();
$p.constructor = $c_sc_SeqView$Appended;
/** @constructor */
function $h_sc_SeqView$Appended() {
}
$h_sc_SeqView$Appended.prototype = $p;
$p.cJ = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.cD = (function(elem) {
  return $ct_sc_SeqView$Appended__sc_SeqOps__O__(new $c_sc_SeqView$Appended(), this, elem);
});
$p.bd = (function() {
  return "SeqView";
});
$p.cH = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.fm = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.f(), p, from);
});
$p.b3 = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.v = (function(idx) {
  return ((idx === this.fO.m()) ? this.ii : this.fO.v(idx));
});
$p.m = (function() {
  return ((1 + this.fO.m()) | 0);
});
$p.R = (function(elem) {
  return this.cD(elem);
});
$p.L = (function(f) {
  return this.cJ(f);
});
var $d_sc_SeqView$Appended = new $TypeData().i($c_sc_SeqView$Appended, "scala.collection.SeqView$Appended", ({
  b8: 1,
  aL: 1,
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
  $thiz.eW = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.eW = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.v = (function(idx) {
  return this.eW.v(idx);
});
$p.m = (function() {
  return this.eW.m();
});
$p.f = (function() {
  return this.eW.f();
});
$p.s = (function() {
  return this.eW.s();
});
$p.c = (function() {
  return this.eW.c();
});
var $d_sc_SeqView$Id = new $TypeData().i($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  c8: 1,
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
  $thiz.gY = underlying;
  $thiz.ij = f;
  $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Map() {
  this.eY = null;
  this.h3 = null;
  this.gY = null;
  this.ij = null;
}
$p = $c_sc_SeqView$Map.prototype = new $h_sc_View$Map();
$p.constructor = $c_sc_SeqView$Map;
/** @constructor */
function $h_sc_SeqView$Map() {
}
$h_sc_SeqView$Map.prototype = $p;
$p.cJ = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.cD = (function(elem) {
  return $ct_sc_SeqView$Appended__sc_SeqOps__O__(new $c_sc_SeqView$Appended(), this, elem);
});
$p.bd = (function() {
  return "SeqView";
});
$p.cH = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.fm = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.f(), p, from);
});
$p.b3 = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.v = (function(idx) {
  return this.ij.b(this.gY.v(idx));
});
$p.m = (function() {
  return this.gY.m();
});
$p.R = (function(elem) {
  return this.cD(elem);
});
$p.L = (function(f) {
  return this.cJ(f);
});
var $d_sc_SeqView$Map = new $TypeData().i($c_sc_SeqView$Map, "scala.collection.SeqView$Map", ({
  b9: 1,
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
function $ct_sc_SeqView$Reverse__sc_SeqOps__($thiz, underlying) {
  $thiz.gZ = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Reverse() {
  this.gZ = null;
}
$p = $c_sc_SeqView$Reverse.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Reverse;
/** @constructor */
function $h_sc_SeqView$Reverse() {
}
$h_sc_SeqView$Reverse.prototype = $p;
$p.v = (function(i) {
  return this.gZ.v((((((-1) + this.m()) | 0) - i) | 0));
});
$p.m = (function() {
  return this.gZ.m();
});
$p.c = (function() {
  return this.gZ.c();
});
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$$anon$1() {
  this.nP = null;
  this.nQ = false;
  this.nF = null;
  this.nG = false;
  this.nH = null;
  this.nI = false;
  this.nJ = null;
  this.nK = false;
  this.nv = null;
  this.nw = false;
  this.nX = null;
  this.nY = false;
  this.nA = null;
  this.nB = false;
  this.nZ = null;
  this.o0 = false;
  this.nx = null;
  this.ny = false;
  this.o7 = null;
  this.o8 = false;
  this.nN = null;
  this.nO = false;
  this.o3 = null;
  this.o4 = false;
  this.nT = null;
  this.nU = false;
  this.nR = null;
  this.nS = false;
  this.nV = null;
  this.nW = false;
  this.nt = null;
  this.nu = false;
  this.nD = null;
  this.nE = false;
  this.nL = null;
  this.nM = false;
  this.o9 = null;
  this.oa = false;
  this.nz = null;
  this.eR = null;
  this.rx = null;
  this.nr = null;
  this.ns = false;
  this.o1 = null;
  this.o2 = false;
  this.nC = null;
  this.o5 = null;
  this.o6 = false;
  this.ry = null;
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
$p.tM = (function() {
  if ((!this.nQ)) {
    this.nP = new $c_Lcom_raquo_laminar_tags_HtmlTag("img", true);
    this.nQ = true;
  }
  return this.nP;
});
$p.tH = (function() {
  if ((!this.nG)) {
    this.nF = new $c_Lcom_raquo_laminar_tags_HtmlTag("h1", false);
    this.nG = true;
  }
  return this.nF;
});
$p.qN = (function() {
  if ((!this.nI)) {
    this.nH = new $c_Lcom_raquo_laminar_tags_HtmlTag("h2", false);
    this.nI = true;
  }
  return this.nH;
});
$p.qO = (function() {
  if ((!this.nK)) {
    this.nJ = new $c_Lcom_raquo_laminar_tags_HtmlTag("h3", false);
    this.nK = true;
  }
  return this.nJ;
});
$p.qe = (function() {
  if ((!this.nw)) {
    this.nv = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    this.nw = true;
  }
  return this.nv;
});
$p.uz = (function() {
  if ((!this.nY)) {
    this.nX = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    this.nY = true;
  }
  return this.nX;
});
$p.eF = (function() {
  if ((!this.nB)) {
    this.nA = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.nB = true;
  }
  return this.nA;
});
$p.v4 = (function() {
  if ((!this.o0)) {
    this.nZ = new $c_Lcom_raquo_laminar_keys_HtmlAttr("src", $m_Lcom_raquo_laminar_codecs_package$().fB);
    this.o0 = true;
  }
  return this.nZ;
});
$p.sw = (function() {
  if ((!this.ny)) {
    this.nx = new $c_Lcom_raquo_laminar_keys_HtmlProp("checked", $m_Lcom_raquo_laminar_codecs_package$().jH);
    this.ny = true;
  }
  return this.nx;
});
$p.ru = (function() {
  if ((!this.o8)) {
    this.o7 = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().fB);
    this.o8 = true;
  }
  return this.o7;
});
$p.iU = (function() {
  if ((!this.nO)) {
    this.nN = new $c_Lcom_raquo_laminar_keys_HtmlProp("hidden", $m_Lcom_raquo_laminar_codecs_package$().jH);
    this.nO = true;
  }
  return this.nN;
});
$p.vd = (function() {
  if ((!this.o4)) {
    this.o3 = new $c_Lcom_raquo_laminar_keys_HtmlProp("title", $m_Lcom_raquo_laminar_codecs_package$().fB);
    this.o4 = true;
  }
  return this.o3;
});
$p.j0 = (function() {
  if ((!this.nU)) {
    this.nT = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.nU = true;
  }
  return this.nT;
});
$p.uv = (function() {
  if ((!this.nS)) {
    this.nR = new $c_Lcom_raquo_laminar_keys_EventProp("change");
    this.nS = true;
  }
  return this.nR;
});
$p.lC = (function() {
  if ((!this.nW)) {
    this.nV = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    this.nW = true;
  }
  return this.nV;
});
$p.qd = (function() {
  if ((!this.nu)) {
    this.nt = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2("background-color");
    this.nu = true;
  }
  return this.nt;
});
$p.tm = (function() {
  if ((!this.nE)) {
    this.nD = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33("font-size");
    this.nE = true;
  }
  return this.nD;
});
$p.tL = (function() {
  if ((!this.nM)) {
    this.nL = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("height");
    this.nM = true;
  }
  return this.nL;
});
$p.vr = (function() {
  if ((!this.oa)) {
    this.o9 = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("width");
    this.oa = true;
  }
  return this.o9;
});
$p.rW = (function() {
  if ((!this.ns)) {
    this.nr = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.ns = true;
  }
  return this.nr;
});
$p.v6 = (function() {
  if ((!this.o2)) {
    this.o1 = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.o2 = true;
  }
  return this.o1;
});
$p.vm = (function() {
  if ((!this.o6)) {
    this.o5 = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.o6 = true;
  }
  return this.o5;
});
var $d_Lcom_raquo_laminar_api_package$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_package$$anon$1, "com.raquo.laminar.api.package$$anon$1", ({
  eo: 1,
  eF: 1,
  er: 1,
  ew: 1,
  bz: 1,
  ex: 1,
  et: 1,
  em: 1,
  eg: 1,
  el: 1,
  bx: 1,
  bC: 1,
  bw: 1,
  eh: 1
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
$p.bd = (function() {
  return "IndexedSeqView";
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bI = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
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
$p.aZ = (function() {
  return $m_sci_Set$();
});
function $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__($thiz, underlying, elem) {
  $ct_sc_SeqView$Appended__sc_SeqOps__O__($thiz, underlying, elem);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$Appended() {
  this.fP = null;
  this.h2 = null;
  this.fO = null;
  this.ii = null;
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
$p.dj = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
$p.dq = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.bd = (function() {
  return "IndexedSeqView";
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bI = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.m();
});
$p.cJ = (function(f) {
  return this.dq(f);
});
$p.L = (function(f) {
  return this.dq(f);
});
$p.R = (function(elem) {
  return this.dj(elem);
});
$p.cD = (function(elem) {
  return this.dj(elem);
});
var $d_sc_IndexedSeqView$Appended = new $TypeData().i($c_sc_IndexedSeqView$Appended, "scala.collection.IndexedSeqView$Appended", ({
  c2: 1,
  b8: 1,
  aL: 1,
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
  this.eW = null;
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
$p.bd = (function() {
  return "IndexedSeqView";
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bI = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.m();
});
$p.cJ = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.L = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.R = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
$p.cD = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  gP: 1,
  c8: 1,
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
  this.eY = null;
  this.h3 = null;
  this.gY = null;
  this.ij = null;
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
$p.dj = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
$p.dq = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.bd = (function() {
  return "IndexedSeqView";
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bI = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.m();
});
$p.cJ = (function(f) {
  return this.dq(f);
});
$p.L = (function(f) {
  return this.dq(f);
});
$p.R = (function(elem) {
  return this.dj(elem);
});
$p.cD = (function(elem) {
  return this.dj(elem);
});
var $d_sc_IndexedSeqView$Map = new $TypeData().i($c_sc_IndexedSeqView$Map, "scala.collection.IndexedSeqView$Map", ({
  c4: 1,
  b9: 1,
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
function $c_sc_IndexedSeqView$Reverse(underlying) {
  this.gZ = null;
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
$p.bd = (function() {
  return "IndexedSeqView";
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bI = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.m();
});
$p.cJ = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.L = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.R = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
$p.cD = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
var $d_sc_IndexedSeqView$Reverse = new $TypeData().i($c_sc_IndexedSeqView$Reverse, "scala.collection.IndexedSeqView$Reverse", ({
  gR: 1,
  h5: 1,
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
  this.kE = null;
  this.is = null;
  this.kE = underlying;
  this.is = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.v = (function(n) {
  return this.kE.v(n);
});
$p.m = (function() {
  return this.kE.b1;
});
$p.c9 = (function() {
  return "ArrayBufferView";
});
$p.f = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.is);
});
$p.dj = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.is);
});
$p.dq = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.is);
});
$p.cJ = (function(f) {
  return this.dq(f);
});
$p.L = (function(f) {
  return this.dq(f);
});
$p.R = (function(elem) {
  return this.dj(elem);
});
$p.cD = (function(elem) {
  return this.dj(elem);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  ik: 1,
  gB: 1,
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
$p.qX = (function() {
  return $m_sci_Map$();
});
$p.lt = (function() {
  return $ct_sci_MapOps$ImmutableKeySet__sci_MapOps__(new $c_sci_MapOps$ImmutableKeySet(), this);
});
$p.aZ = (function() {
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
        var a = $thiz.iK();
        var b = o.iK();
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
          equal = $m_sr_BoxesRunTime$().k($thiz.v(index), o.v(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.f().cW(index);
          var thatIt = o.f().cW(index);
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.A)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.A)));
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
$p.M = (function() {
  return 0;
});
$p.c = (function() {
  return true;
});
$p.s = (function() {
  return 0;
});
$p.lO = (function(that) {
  return true;
});
$p.aj = (function(elem) {
  return false;
});
$p.f = (function() {
  return $m_sc_Iterator$().E;
});
$p.S = (function(f) {
});
$p.dp = (function(elem) {
  return new $c_sci_Set$Set1(elem);
});
var $d_sci_Set$EmptySet$ = new $TypeData().i($c_sci_Set$EmptySet$, "scala.collection.immutable.Set$EmptySet$", ({
  hZ: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hU)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hV)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hW)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hX)));
}
/** @constructor */
function $c_sci_Set$Set1(elem1) {
  this.f8 = null;
  this.f8 = elem1;
}
$p = $c_sci_Set$Set1.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set1;
/** @constructor */
function $h_sci_Set$Set1() {
}
$h_sci_Set$Set1.prototype = $p;
$p.L = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.M = (function() {
  return 1;
});
$p.c = (function() {
  return false;
});
$p.s = (function() {
  return 1;
});
$p.aj = (function(elem) {
  return $m_sr_BoxesRunTime$().k(elem, this.f8);
});
$p.d1 = (function(elem) {
  return (this.aj(elem) ? this : new $c_sci_Set$Set2(this.f8, elem));
});
$p.f = (function() {
  return new $c_sc_Iterator$$anon$20(this.f8);
});
$p.S = (function(f) {
  f.b(this.f8);
});
$p.dl = (function(p) {
  return (!(!p.b(this.f8)));
});
$p.o = (function() {
  return this.f8;
});
$p.dp = (function(elem) {
  return this.d1(elem);
});
function $isArrayOf_sci_Set$Set1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cC)));
}
var $d_sci_Set$Set1 = new $TypeData().i($c_sci_Set$Set1, "scala.collection.immutable.Set$Set1", ({
  cC: 1,
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
  this.f9 = null;
  this.fX = null;
  this.f9 = elem1;
  this.fX = elem2;
}
$p = $c_sci_Set$Set2.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set2;
/** @constructor */
function $h_sci_Set$Set2() {
}
$h_sci_Set$Set2.prototype = $p;
$p.L = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.M = (function() {
  return 2;
});
$p.c = (function() {
  return false;
});
$p.s = (function() {
  return 2;
});
$p.aj = (function(elem) {
  return ($m_sr_BoxesRunTime$().k(elem, this.f9) || $m_sr_BoxesRunTime$().k(elem, this.fX));
});
$p.d1 = (function(elem) {
  return (this.aj(elem) ? this : new $c_sci_Set$Set3(this.f9, this.fX, elem));
});
$p.f = (function() {
  return new $c_sci_Set$Set2$$anon$1(this);
});
$p.uS = (function(i) {
  switch (i) {
    case 0: {
      return this.f9;
      break;
    }
    case 1: {
      return this.fX;
      break;
    }
    default: {
      throw new $c_s_MatchError(i);
    }
  }
});
$p.S = (function(f) {
  f.b(this.f9);
  f.b(this.fX);
});
$p.dl = (function(p) {
  return ((!(!p.b(this.f9))) && (!(!p.b(this.fX))));
});
$p.o = (function() {
  return this.f9;
});
$p.dp = (function(elem) {
  return this.d1(elem);
});
function $isArrayOf_sci_Set$Set2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cD)));
}
var $d_sci_Set$Set2 = new $TypeData().i($c_sci_Set$Set2, "scala.collection.immutable.Set$Set2", ({
  cD: 1,
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
  this.fa = null;
  this.fY = null;
  this.fZ = null;
  this.fa = elem1;
  this.fY = elem2;
  this.fZ = elem3;
}
$p = $c_sci_Set$Set3.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set3;
/** @constructor */
function $h_sci_Set$Set3() {
}
$h_sci_Set$Set3.prototype = $p;
$p.L = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.M = (function() {
  return 3;
});
$p.c = (function() {
  return false;
});
$p.s = (function() {
  return 3;
});
$p.aj = (function(elem) {
  return (($m_sr_BoxesRunTime$().k(elem, this.fa) || $m_sr_BoxesRunTime$().k(elem, this.fY)) || $m_sr_BoxesRunTime$().k(elem, this.fZ));
});
$p.d1 = (function(elem) {
  return (this.aj(elem) ? this : new $c_sci_Set$Set4(this.fa, this.fY, this.fZ, elem));
});
$p.f = (function() {
  return new $c_sci_Set$Set3$$anon$2(this);
});
$p.uT = (function(i) {
  switch (i) {
    case 0: {
      return this.fa;
      break;
    }
    case 1: {
      return this.fY;
      break;
    }
    case 2: {
      return this.fZ;
      break;
    }
    default: {
      throw new $c_s_MatchError(i);
    }
  }
});
$p.S = (function(f) {
  f.b(this.fa);
  f.b(this.fY);
  f.b(this.fZ);
});
$p.dl = (function(p) {
  return (((!(!p.b(this.fa))) && (!(!p.b(this.fY)))) && (!(!p.b(this.fZ))));
});
$p.o = (function() {
  return this.fa;
});
$p.dp = (function(elem) {
  return this.d1(elem);
});
function $isArrayOf_sci_Set$Set3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cE)));
}
var $d_sci_Set$Set3 = new $TypeData().i($c_sci_Set$Set3, "scala.collection.immutable.Set$Set3", ({
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
function $c_sci_Set$Set4(elem1, elem2, elem3, elem4) {
  this.em = null;
  this.fb = null;
  this.fc = null;
  this.fd = null;
  this.em = elem1;
  this.fb = elem2;
  this.fc = elem3;
  this.fd = elem4;
}
$p = $c_sci_Set$Set4.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set4;
/** @constructor */
function $h_sci_Set$Set4() {
}
$h_sci_Set$Set4.prototype = $p;
$p.L = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.M = (function() {
  return 4;
});
$p.c = (function() {
  return false;
});
$p.s = (function() {
  return 4;
});
$p.aj = (function(elem) {
  return ((($m_sr_BoxesRunTime$().k(elem, this.em) || $m_sr_BoxesRunTime$().k(elem, this.fb)) || $m_sr_BoxesRunTime$().k(elem, this.fc)) || $m_sr_BoxesRunTime$().k(elem, this.fd));
});
$p.d1 = (function(elem) {
  return (this.aj(elem) ? this : $m_sci_HashSet$().h6.gh(this.em).gh(this.fb).gh(this.fc).gh(this.fd).gh(elem));
});
$p.f = (function() {
  return new $c_sci_Set$Set4$$anon$3(this);
});
$p.uU = (function(i) {
  switch (i) {
    case 0: {
      return this.em;
      break;
    }
    case 1: {
      return this.fb;
      break;
    }
    case 2: {
      return this.fc;
      break;
    }
    case 3: {
      return this.fd;
      break;
    }
    default: {
      throw new $c_s_MatchError(i);
    }
  }
});
$p.S = (function(f) {
  f.b(this.em);
  f.b(this.fb);
  f.b(this.fc);
  f.b(this.fd);
});
$p.dl = (function(p) {
  return ((((!(!p.b(this.em))) && (!(!p.b(this.fb)))) && (!(!p.b(this.fc)))) && (!(!p.b(this.fd))));
});
$p.o = (function() {
  return this.em;
});
$p.sv = (function(builder) {
  return builder.ax(this.em).ax(this.fb).ax(this.fc).ax(this.fd);
});
$p.dp = (function(elem) {
  return this.d1(elem);
});
function $isArrayOf_sci_Set$Set4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cF)));
}
var $d_sci_Set$Set4 = new $TypeData().i($c_sci_Set$Set4, "scala.collection.immutable.Set$Set4", ({
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
  this.fP = null;
  this.h2 = null;
  this.fO = null;
  this.ii = null;
  this.ew = null;
  this.ew = mutationCount;
  $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(this, underlying, elem);
}
$p = $c_scm_CheckedIndexedSeqView$Appended.prototype = new $h_sc_IndexedSeqView$Appended();
$p.constructor = $c_scm_CheckedIndexedSeqView$Appended;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$Appended() {
}
$h_scm_CheckedIndexedSeqView$Appended.prototype = $p;
$p.f = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.ew);
});
$p.dj = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.ew);
});
$p.dq = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.ew);
});
$p.cJ = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.ew);
});
$p.L = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.ew);
});
$p.R = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.ew);
});
$p.cD = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.ew);
});
var $d_scm_CheckedIndexedSeqView$Appended = new $TypeData().i($c_scm_CheckedIndexedSeqView$Appended, "scala.collection.mutable.CheckedIndexedSeqView$Appended", ({
  ir: 1,
  c2: 1,
  b8: 1,
  aL: 1,
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
  cY: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$Map(underlying, f, mutationCount) {
  this.eY = null;
  this.h3 = null;
  this.gY = null;
  this.ij = null;
  this.ex = null;
  this.ex = mutationCount;
  $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(this, underlying, f);
}
$p = $c_scm_CheckedIndexedSeqView$Map.prototype = new $h_sc_IndexedSeqView$Map();
$p.constructor = $c_scm_CheckedIndexedSeqView$Map;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$Map() {
}
$h_scm_CheckedIndexedSeqView$Map.prototype = $p;
$p.f = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.ex);
});
$p.dj = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.ex);
});
$p.dq = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.ex);
});
$p.cJ = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.ex);
});
$p.L = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.ex);
});
$p.R = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.ex);
});
$p.cD = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.ex);
});
var $d_scm_CheckedIndexedSeqView$Map = new $TypeData().i($c_scm_CheckedIndexedSeqView$Map, "scala.collection.mutable.CheckedIndexedSeqView$Map", ({
  it: 1,
  c4: 1,
  b9: 1,
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
  cY: 1
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
$p.M = (function() {
  return 0;
});
$p.s = (function() {
  return 0;
});
$p.c = (function() {
  return true;
});
$p.kU = (function(key) {
  throw new $c_ju_NoSuchElementException(("key not found: " + key));
});
$p.aj = (function(key) {
  return false;
});
$p.gf = (function(key) {
  return $m_s_None$();
});
$p.dZ = (function(key, default$1) {
  return default$1.J();
});
$p.f = (function() {
  return $m_sc_Iterator$().E;
});
$p.gj = (function() {
  return $m_sc_Iterator$().E;
});
$p.eK = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
$p.b = (function(key) {
  this.kU(key);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  hE: 1,
  az: 1,
  av: 1,
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
  r: 1,
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
  $thiz.dg = outer;
  return $thiz;
}
/** @constructor */
function $c_sci_MapOps$ImmutableKeySet() {
  this.dg = null;
}
$p = $c_sci_MapOps$ImmutableKeySet.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_MapOps$ImmutableKeySet;
/** @constructor */
function $h_sci_MapOps$ImmutableKeySet() {
}
$h_sci_MapOps$ImmutableKeySet.prototype = $p;
$p.f = (function() {
  return this.dg.gj();
});
$p.aj = (function(key) {
  return this.dg.aj(key);
});
$p.M = (function() {
  return this.dg.M();
});
$p.s = (function() {
  return this.dg.s();
});
$p.c = (function() {
  return this.dg.c();
});
$p.d1 = (function(elem) {
  return (this.dg.aj(elem) ? this : $f_sc_SetOps__concat__sc_IterableOnce__sc_SetOps($m_sci_Set$EmptySet$(), this).dp(elem));
});
$p.dp = (function(elem) {
  return this.d1(elem);
});
function $isArrayOf_sci_MapOps$ImmutableKeySet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bd)));
}
var $d_sci_MapOps$ImmutableKeySet = new $TypeData().i($c_sci_MapOps$ImmutableKeySet, "scala.collection.immutable.MapOps$ImmutableKeySet", ({
  bd: 1,
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
  c7: 1,
  M: 1,
  a: 1
}));
function $p_sci_HashMap$HashKeySet__newKeySetOrThis__sci_BitmapIndexedMapNode__sci_Set($thiz, newRootNode) {
  return ((newRootNode === $thiz.dg.b4) ? $thiz : new $c_sci_HashMap(newRootNode).lt());
}
/** @constructor */
function $c_sci_HashMap$HashKeySet(outer) {
  this.dg = null;
  $ct_sci_MapOps$ImmutableKeySet__sci_MapOps__(this, outer);
}
$p = $c_sci_HashMap$HashKeySet.prototype = new $h_sci_MapOps$ImmutableKeySet();
$p.constructor = $c_sci_HashMap$HashKeySet;
/** @constructor */
function $h_sci_HashMap$HashKeySet() {
}
$h_sci_HashMap$HashKeySet.prototype = $p;
$p.d1 = (function(elem) {
  var originalHash = $m_sr_Statics$().P(elem);
  var improvedHash = $m_sc_Hashing$().bi(originalHash);
  return $p_sci_HashMap$HashKeySet__newKeySetOrThis__sci_BitmapIndexedMapNode__sci_Set(this, this.dg.b4.lS(elem, null, originalHash, improvedHash, 0, false));
});
$p.dp = (function(elem) {
  return this.d1(elem);
});
function $isArrayOf_sci_HashMap$HashKeySet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cq)));
}
var $d_sci_HashMap$HashKeySet = new $TypeData().i($c_sci_HashMap$HashKeySet, "scala.collection.immutable.HashMap$HashKeySet", ({
  cq: 1,
  bd: 1,
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
  c7: 1,
  M: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map1(key1, value1) {
  this.cl = null;
  this.dI = null;
  this.cl = key1;
  this.dI = value1;
}
$p = $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $p;
$p.L = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.M = (function() {
  return 1;
});
$p.s = (function() {
  return 1;
});
$p.c = (function() {
  return false;
});
$p.b = (function(key) {
  if ($m_sr_BoxesRunTime$().k(key, this.cl)) {
    return this.dI;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.aj = (function(key) {
  return $m_sr_BoxesRunTime$().k(key, this.cl);
});
$p.gf = (function(key) {
  return ($m_sr_BoxesRunTime$().k(key, this.cl) ? new $c_s_Some(this.dI) : $m_s_None$());
});
$p.dZ = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().k(key, this.cl) ? this.dI : default$1.J());
});
$p.f = (function() {
  return new $c_sc_Iterator$$anon$20(new $c_T2(this.cl, this.dI));
});
$p.gj = (function() {
  return new $c_sc_Iterator$$anon$20(this.cl);
});
$p.ft = (function(key, value) {
  return ($m_sr_BoxesRunTime$().k(key, this.cl) ? new $c_sci_Map$Map1(this.cl, value) : new $c_sci_Map$Map2(this.cl, this.dI, key, value));
});
$p.S = (function(f) {
  f.b(new $c_T2(this.cl, this.dI));
});
$p.dl = (function(p) {
  return (!(!p.b(new $c_T2(this.cl, this.dI))));
});
$p.u = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().d6(this.cl, this.dI);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().eC;
  h = $m_s_util_hashing_MurmurHash3$().i(h, a);
  h = $m_s_util_hashing_MurmurHash3$().i(h, b);
  h = $m_s_util_hashing_MurmurHash3$().e3(h, c);
  return $m_s_util_hashing_MurmurHash3$().F(h, 1);
});
$p.eK = (function(key, value) {
  return this.ft(key, value);
});
function $isArrayOf_sci_Map$Map1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cu)));
}
var $d_sci_Map$Map1 = new $TypeData().i($c_sci_Map$Map1, "scala.collection.immutable.Map$Map1", ({
  cu: 1,
  az: 1,
  av: 1,
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
  r: 1,
  aB: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.cm = null;
  this.de = null;
  this.cn = null;
  this.df = null;
  this.cm = key1;
  this.de = value1;
  this.cn = key2;
  this.df = value2;
}
$p = $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $p;
$p.L = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.M = (function() {
  return 2;
});
$p.s = (function() {
  return 2;
});
$p.c = (function() {
  return false;
});
$p.b = (function(key) {
  if ($m_sr_BoxesRunTime$().k(key, this.cm)) {
    return this.de;
  } else if ($m_sr_BoxesRunTime$().k(key, this.cn)) {
    return this.df;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.aj = (function(key) {
  return ($m_sr_BoxesRunTime$().k(key, this.cm) || $m_sr_BoxesRunTime$().k(key, this.cn));
});
$p.gf = (function(key) {
  return ($m_sr_BoxesRunTime$().k(key, this.cm) ? new $c_s_Some(this.de) : ($m_sr_BoxesRunTime$().k(key, this.cn) ? new $c_s_Some(this.df) : $m_s_None$()));
});
$p.dZ = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().k(key, this.cm) ? this.de : ($m_sr_BoxesRunTime$().k(key, this.cn) ? this.df : default$1.J()));
});
$p.f = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.gj = (function() {
  return new $c_sci_Map$Map2$$anon$2(this);
});
$p.ft = (function(key, value) {
  return ($m_sr_BoxesRunTime$().k(key, this.cm) ? new $c_sci_Map$Map2(this.cm, value, this.cn, this.df) : ($m_sr_BoxesRunTime$().k(key, this.cn) ? new $c_sci_Map$Map2(this.cm, this.de, this.cn, value) : new $c_sci_Map$Map3(this.cm, this.de, this.cn, this.df, key, value)));
});
$p.S = (function(f) {
  f.b(new $c_T2(this.cm, this.de));
  f.b(new $c_T2(this.cn, this.df));
});
$p.dl = (function(p) {
  return ((!(!p.b(new $c_T2(this.cm, this.de)))) && (!(!p.b(new $c_T2(this.cn, this.df)))));
});
$p.u = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().d6(this.cm, this.de);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d6(this.cn, this.df);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().eC;
  h = $m_s_util_hashing_MurmurHash3$().i(h, a);
  h = $m_s_util_hashing_MurmurHash3$().i(h, b);
  h = $m_s_util_hashing_MurmurHash3$().e3(h, c);
  return $m_s_util_hashing_MurmurHash3$().F(h, 2);
});
$p.eK = (function(key, value) {
  return this.ft(key, value);
});
function $isArrayOf_sci_Map$Map2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cv)));
}
var $d_sci_Map$Map2 = new $TypeData().i($c_sci_Map$Map2, "scala.collection.immutable.Map$Map2", ({
  cv: 1,
  az: 1,
  av: 1,
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
  r: 1,
  aB: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.c4 = null;
  this.cN = null;
  this.c5 = null;
  this.cO = null;
  this.c6 = null;
  this.cP = null;
  this.c4 = key1;
  this.cN = value1;
  this.c5 = key2;
  this.cO = value2;
  this.c6 = key3;
  this.cP = value3;
}
$p = $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $p;
$p.L = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.M = (function() {
  return 3;
});
$p.s = (function() {
  return 3;
});
$p.c = (function() {
  return false;
});
$p.b = (function(key) {
  if ($m_sr_BoxesRunTime$().k(key, this.c4)) {
    return this.cN;
  } else if ($m_sr_BoxesRunTime$().k(key, this.c5)) {
    return this.cO;
  } else if ($m_sr_BoxesRunTime$().k(key, this.c6)) {
    return this.cP;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.aj = (function(key) {
  return (($m_sr_BoxesRunTime$().k(key, this.c4) || $m_sr_BoxesRunTime$().k(key, this.c5)) || $m_sr_BoxesRunTime$().k(key, this.c6));
});
$p.gf = (function(key) {
  return ($m_sr_BoxesRunTime$().k(key, this.c4) ? new $c_s_Some(this.cN) : ($m_sr_BoxesRunTime$().k(key, this.c5) ? new $c_s_Some(this.cO) : ($m_sr_BoxesRunTime$().k(key, this.c6) ? new $c_s_Some(this.cP) : $m_s_None$())));
});
$p.dZ = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().k(key, this.c4) ? this.cN : ($m_sr_BoxesRunTime$().k(key, this.c5) ? this.cO : ($m_sr_BoxesRunTime$().k(key, this.c6) ? this.cP : default$1.J())));
});
$p.f = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.gj = (function() {
  return new $c_sci_Map$Map3$$anon$5(this);
});
$p.ft = (function(key, value) {
  return ($m_sr_BoxesRunTime$().k(key, this.c4) ? new $c_sci_Map$Map3(this.c4, value, this.c5, this.cO, this.c6, this.cP) : ($m_sr_BoxesRunTime$().k(key, this.c5) ? new $c_sci_Map$Map3(this.c4, this.cN, this.c5, value, this.c6, this.cP) : ($m_sr_BoxesRunTime$().k(key, this.c6) ? new $c_sci_Map$Map3(this.c4, this.cN, this.c5, this.cO, this.c6, value) : new $c_sci_Map$Map4(this.c4, this.cN, this.c5, this.cO, this.c6, this.cP, key, value))));
});
$p.S = (function(f) {
  f.b(new $c_T2(this.c4, this.cN));
  f.b(new $c_T2(this.c5, this.cO));
  f.b(new $c_T2(this.c6, this.cP));
});
$p.dl = (function(p) {
  return (((!(!p.b(new $c_T2(this.c4, this.cN)))) && (!(!p.b(new $c_T2(this.c5, this.cO))))) && (!(!p.b(new $c_T2(this.c6, this.cP)))));
});
$p.u = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().d6(this.c4, this.cN);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d6(this.c5, this.cO);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d6(this.c6, this.cP);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().eC;
  h = $m_s_util_hashing_MurmurHash3$().i(h, a);
  h = $m_s_util_hashing_MurmurHash3$().i(h, b);
  h = $m_s_util_hashing_MurmurHash3$().e3(h, c);
  return $m_s_util_hashing_MurmurHash3$().F(h, 3);
});
$p.eK = (function(key, value) {
  return this.ft(key, value);
});
function $isArrayOf_sci_Map$Map3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cx)));
}
var $d_sci_Map$Map3 = new $TypeData().i($c_sci_Map$Map3, "scala.collection.immutable.Map$Map3", ({
  cx: 1,
  az: 1,
  av: 1,
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
  r: 1,
  aB: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.bL = null;
  this.co = null;
  this.bM = null;
  this.cp = null;
  this.bN = null;
  this.cq = null;
  this.bO = null;
  this.cr = null;
  this.bL = key1;
  this.co = value1;
  this.bM = key2;
  this.cp = value2;
  this.bN = key3;
  this.cq = value3;
  this.bO = key4;
  this.cr = value4;
}
$p = $c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
}
$h_sci_Map$Map4.prototype = $p;
$p.L = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.M = (function() {
  return 4;
});
$p.s = (function() {
  return 4;
});
$p.c = (function() {
  return false;
});
$p.b = (function(key) {
  if ($m_sr_BoxesRunTime$().k(key, this.bL)) {
    return this.co;
  } else if ($m_sr_BoxesRunTime$().k(key, this.bM)) {
    return this.cp;
  } else if ($m_sr_BoxesRunTime$().k(key, this.bN)) {
    return this.cq;
  } else if ($m_sr_BoxesRunTime$().k(key, this.bO)) {
    return this.cr;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.aj = (function(key) {
  return ((($m_sr_BoxesRunTime$().k(key, this.bL) || $m_sr_BoxesRunTime$().k(key, this.bM)) || $m_sr_BoxesRunTime$().k(key, this.bN)) || $m_sr_BoxesRunTime$().k(key, this.bO));
});
$p.gf = (function(key) {
  return ($m_sr_BoxesRunTime$().k(key, this.bL) ? new $c_s_Some(this.co) : ($m_sr_BoxesRunTime$().k(key, this.bM) ? new $c_s_Some(this.cp) : ($m_sr_BoxesRunTime$().k(key, this.bN) ? new $c_s_Some(this.cq) : ($m_sr_BoxesRunTime$().k(key, this.bO) ? new $c_s_Some(this.cr) : $m_s_None$()))));
});
$p.dZ = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().k(key, this.bL) ? this.co : ($m_sr_BoxesRunTime$().k(key, this.bM) ? this.cp : ($m_sr_BoxesRunTime$().k(key, this.bN) ? this.cq : ($m_sr_BoxesRunTime$().k(key, this.bO) ? this.cr : default$1.J()))));
});
$p.f = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.gj = (function() {
  return new $c_sci_Map$Map4$$anon$8(this);
});
$p.ft = (function(key, value) {
  return ($m_sr_BoxesRunTime$().k(key, this.bL) ? new $c_sci_Map$Map4(this.bL, value, this.bM, this.cp, this.bN, this.cq, this.bO, this.cr) : ($m_sr_BoxesRunTime$().k(key, this.bM) ? new $c_sci_Map$Map4(this.bL, this.co, this.bM, value, this.bN, this.cq, this.bO, this.cr) : ($m_sr_BoxesRunTime$().k(key, this.bN) ? new $c_sci_Map$Map4(this.bL, this.co, this.bM, this.cp, this.bN, value, this.bO, this.cr) : ($m_sr_BoxesRunTime$().k(key, this.bO) ? new $c_sci_Map$Map4(this.bL, this.co, this.bM, this.cp, this.bN, this.cq, this.bO, value) : $m_sci_HashMap$().kt.gu(this.bL, this.co).gu(this.bM, this.cp).gu(this.bN, this.cq).gu(this.bO, this.cr).gu(key, value)))));
});
$p.S = (function(f) {
  f.b(new $c_T2(this.bL, this.co));
  f.b(new $c_T2(this.bM, this.cp));
  f.b(new $c_T2(this.bN, this.cq));
  f.b(new $c_T2(this.bO, this.cr));
});
$p.dl = (function(p) {
  return ((((!(!p.b(new $c_T2(this.bL, this.co)))) && (!(!p.b(new $c_T2(this.bM, this.cp))))) && (!(!p.b(new $c_T2(this.bN, this.cq))))) && (!(!p.b(new $c_T2(this.bO, this.cr)))));
});
$p.su = (function(builder) {
  return builder.fh(this.bL, this.co).fh(this.bM, this.cp).fh(this.bN, this.cq).fh(this.bO, this.cr);
});
$p.u = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().d6(this.bL, this.co);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d6(this.bM, this.cp);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d6(this.bN, this.cq);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d6(this.bO, this.cr);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().eC;
  h = $m_s_util_hashing_MurmurHash3$().i(h, a);
  h = $m_s_util_hashing_MurmurHash3$().i(h, b);
  h = $m_s_util_hashing_MurmurHash3$().e3(h, c);
  return $m_s_util_hashing_MurmurHash3$().F(h, 4);
});
$p.eK = (function(key, value) {
  return this.ft(key, value);
});
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cz)));
}
var $d_sci_Map$Map4 = new $TypeData().i($c_sci_Map$Map4, "scala.collection.immutable.Map$Map4", ({
  cz: 1,
  az: 1,
  av: 1,
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
  r: 1,
  aB: 1,
  n: 1,
  a: 1
}));
function $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet($thiz, newRootNode) {
  return (($thiz.bK === newRootNode) ? $thiz : new $c_sci_HashSet(newRootNode));
}
/** @constructor */
function $c_sci_HashSet(rootNode) {
  this.bK = null;
  this.bK = rootNode;
}
$p = $c_sci_HashSet.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_HashSet;
/** @constructor */
function $h_sci_HashSet() {
}
$h_sci_HashSet.prototype = $p;
$p.L = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.aZ = (function() {
  return $m_sci_HashSet$();
});
$p.s = (function() {
  return this.bK.bl;
});
$p.M = (function() {
  return this.bK.bl;
});
$p.c = (function() {
  return (this.bK.bl === 0);
});
$p.f = (function() {
  return (this.c() ? $m_sc_Iterator$().E : new $c_sci_SetIterator(this.bK));
});
$p.aj = (function(element) {
  var elementUnimprovedHash = $m_sr_Statics$().P(element);
  var elementHash = $m_sc_Hashing$().bi(elementUnimprovedHash);
  return this.bK.hu(element, elementUnimprovedHash, elementHash, 0);
});
$p.gh = (function(element) {
  var elementUnimprovedHash = $m_sr_Statics$().P(element);
  var elementHash = $m_sc_Hashing$().bi(elementUnimprovedHash);
  return $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet(this, this.bK.rr(element, elementUnimprovedHash, elementHash, 0));
});
$p.o = (function() {
  return this.f().e();
});
$p.S = (function(f) {
  this.bK.S(f);
});
$p.lO = (function(that) {
  return (this.c() || ((!that.c()) && ((that instanceof $c_sci_HashSet) ? this.bK.lP(that.bK, 0) : $f_sc_IterableOnceOps__forall__F1__Z(this, that))));
});
$p.n = (function(that) {
  if ((that instanceof $c_sci_HashSet)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bK;
      var x$2 = that.bK;
      return ((x === null) ? (x$2 === null) : x.n(x$2));
    }
  } else {
    return $f_sc_Set__equals__O__Z(this, that);
  }
});
$p.c9 = (function() {
  return "HashSet";
});
$p.u = (function() {
  var it = new $c_sci_SetHashIterator(this.bK);
  return $m_s_util_hashing_MurmurHash3$().hL(it, $m_s_util_hashing_MurmurHash3$().iB);
});
$p.dp = (function(elem) {
  return this.gh(elem);
});
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cr)));
}
var $d_sci_HashSet = new $TypeData().i($c_sci_HashSet, "scala.collection.immutable.HashSet", ({
  cr: 1,
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
  i8: 1,
  h8: 1,
  n: 1,
  M: 1,
  a: 1
}));
function $isArrayOf_sci_ListSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hC)));
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
$p.aU = (function() {
  return this;
});
function $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State($thiz) {
  if ((!$thiz.ku)) {
    if ($thiz.ir) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
    }
    $thiz.ir = true;
    try {
      var res = $thiz.kv.J();
    } finally {
      $thiz.ir = false;
    }
    $thiz.bT = true;
    $thiz.kv = null;
    $thiz.kw = res;
    $thiz.ku = true;
  }
  return $thiz.kw;
}
function $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz, f) {
  $m_sci_LazyList$();
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => ($thiz.c() ? $m_sci_LazyList$State$Empty$() : ($m_sci_LazyList$(), new $c_sci_LazyList$State$Cons(f.b($thiz.z().o()), $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz.z().aM(), f)))))));
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.r = (("" + b.r) + start);
  if ((!$thiz.bT)) {
    b.r = (b.r + "<not computed>");
  } else if ((!$thiz.c())) {
    var obj = $thiz.z().o();
    b.r = (("" + b.r) + obj);
    var elem = null;
    elem = $thiz;
    var elem$1 = $thiz.z().aM();
    var elem$2 = null;
    elem$2 = elem$1;
    if (((elem !== elem$2) && ((!elem$2.bT) || (elem.z() !== elem$2.z())))) {
      elem = elem$2;
      if ((elem$2.bT && (!elem$2.c()))) {
        elem$2 = elem$2.z().aM();
        while ((((elem !== elem$2) && (elem$2.bT && (!elem$2.c()))) && (elem.z() !== elem$2.z()))) {
          b.r = (("" + b.r) + sep);
          var obj$1 = elem.z().o();
          b.r = (("" + b.r) + obj$1);
          elem = elem.z().aM();
          elem$2 = elem$2.z().aM();
          if ((elem$2.bT && (!elem$2.c()))) {
            elem$2 = elem$2.z().aM();
          }
        }
      }
    }
    if ((!(elem$2.bT && (!elem$2.c())))) {
      while ((elem !== elem$2)) {
        b.r = (("" + b.r) + sep);
        var obj$2 = elem.z().o();
        b.r = (("" + b.r) + obj$2);
        elem = elem.z().aM();
      }
      if ((!elem.bT)) {
        b.r = (("" + b.r) + sep);
        b.r = (b.r + "<not computed>");
      }
    } else {
      var runner = $thiz;
      var k = 0;
      while (true) {
        var a = runner;
        var b$1 = elem$2;
        if ((!((a === b$1) || (a.z() === b$1.z())))) {
          runner = runner.z().aM();
          elem$2 = elem$2.z().aM();
          k = ((1 + k) | 0);
        } else {
          break;
        }
      }
      var a$1 = elem;
      var b$2 = elem$2;
      if ((((a$1 === b$2) || (a$1.z() === b$2.z())) && (k > 0))) {
        b.r = (("" + b.r) + sep);
        var obj$3 = elem.z().o();
        b.r = (("" + b.r) + obj$3);
        elem = elem.z().aM();
      }
      while (true) {
        var a$2 = elem;
        var b$3 = elem$2;
        if ((!((a$2 === b$3) || (a$2.z() === b$3.z())))) {
          b.r = (("" + b.r) + sep);
          var obj$4 = elem.z().o();
          b.r = (("" + b.r) + obj$4);
          elem = elem.z().aM();
        } else {
          break;
        }
      }
      b.r = (("" + b.r) + sep);
      b.r = (b.r + "<cycle>");
    }
  }
  b.r = (("" + b.r) + end);
  return b;
}
/** @constructor */
function $c_sci_LazyList(lazyState) {
  this.kw = null;
  this.kv = null;
  this.bT = false;
  this.ir = false;
  this.ku = false;
  this.kv = lazyState;
  this.bT = false;
  this.ir = false;
}
$p = $c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
}
$h_sci_LazyList.prototype = $p;
$p.bd = (function() {
  return "LinearSeq";
});
$p.bI = (function() {
  return $f_sc_LinearSeqOps__headOption__s_Option(this);
});
$p.m = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$p.b3 = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.lm = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.v = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.iR = (function(p) {
  return $f_sc_LinearSeqOps__exists__F1__Z(this, p);
});
$p.gr = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.fm = (function(p, from) {
  return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from);
});
$p.z = (function() {
  return ((!this.ku) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.kw);
});
$p.c = (function() {
  return (this.z() === $m_sci_LazyList$State$Empty$());
});
$p.s = (function() {
  return ((this.bT && (this.z() === $m_sci_LazyList$State$Empty$())) ? 0 : (-1));
});
$p.o = (function() {
  return this.z().o();
});
$p.qA = (function() {
  var these = this;
  var those = this;
  if ((!these.c())) {
    these = these.z().aM();
  }
  while ((those !== these)) {
    if (these.c()) {
      return this;
    }
    these = these.z().aM();
    if (these.c()) {
      return this;
    }
    these = these.z().aM();
    if ((these === those)) {
      return this;
    }
    those = those.z().aM();
  }
  return this;
});
$p.f = (function() {
  return ((this.bT && (this.z() === $m_sci_LazyList$State$Empty$())) ? $m_sc_Iterator$().E : new $c_sci_LazyList$LazyIterator(this));
});
$p.S = (function(f) {
  var _$this = this;
  while (true) {
    if ((!_$this.c())) {
      f.b(_$this.z().o());
      _$this = _$this.z().aM();
      continue;
    }
    break;
  }
});
$p.c9 = (function() {
  return "LazyList";
});
$p.qW = (function(suffix) {
  $m_sci_LazyList$();
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    if (this.c()) {
      var x1 = suffix.J();
      return ((x1 instanceof $c_sci_LazyList) ? x1.z() : ((x1.s() === 0) ? $m_sci_LazyList$State$Empty$() : $m_sci_LazyList$().lK(x1.f())));
    } else {
      $m_sci_LazyList$();
      return new $c_sci_LazyList$State$Cons(this.z().o(), this.z().aM().qW(suffix));
    }
  })));
});
$p.sg = (function(elem) {
  return ((this.bT && (this.z() === $m_sci_LazyList$State$Empty$())) ? ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    $m_sci_LazyList$();
    return new $c_sci_LazyList$State$Cons(elem, $m_sci_LazyList$().f1);
  })))) : this.qW(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$$anon$20(elem)))));
});
$p.u6 = (function(f) {
  return ((this.bT && (this.z() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().f1 : ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => (this.c() ? $m_sci_LazyList$State$Empty$() : ($m_sci_LazyList$(), new $c_sci_LazyList$State$Cons(f.b(this.z().o()), $p_sci_LazyList__mapImpl__F1__sci_LazyList(this.z().aM(), f)))))))));
});
$p.iM = (function(pf) {
  var _$this = this;
  while (true) {
    if (_$this.c()) {
      return $m_s_None$();
    } else {
      var res = pf.bF(_$this.z().o(), $m_sci_LazyList$().ph);
      if ((res === $m_sr_Statics$PFMarker$())) {
        _$this = _$this.z().aM();
      } else {
        return new $c_s_Some(res);
      }
    }
  }
});
$p.tl = (function(f) {
  return ((this.bT && (this.z() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().f1 : $m_sci_LazyList$().rg(this, f));
});
$p.t8 = (function(n) {
  return ((n <= 0) ? this : ((this.bT && (this.z() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().f1 : $m_sci_LazyList$().uR(this, n)));
});
$p.eD = (function(sb, start, sep, end) {
  this.qA();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.b7, start, sep, end);
  return sb;
});
$p.w = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").r;
});
$p.b = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.bX = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.l4 = (function(n) {
  return this.t8(n);
});
$p.fj = (function(asIterable) {
  return this.tl(asIterable);
});
$p.L = (function(f) {
  return this.u6(f);
});
$p.R = (function(elem) {
  return this.sg(elem);
});
$p.x = (function() {
  return this.z().aM();
});
$p.aZ = (function() {
  return $m_sci_LazyList$();
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cs)));
}
var $d_sci_LazyList = new $TypeData().i($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  cs: 1,
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
  ba: 1,
  aF: 1,
  b5: 1,
  bb: 1,
  a: 1
}));
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ig)));
}
function $ct_sjsr_WrappedVarArgs__sjs_js_Array__($thiz, array) {
  $thiz.iA = array;
  return $thiz;
}
function $ct_sjsr_WrappedVarArgs__($thiz) {
  $ct_sjsr_WrappedVarArgs__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjsr_WrappedVarArgs() {
  this.iA = null;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.cH = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.R = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.L = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.fj = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.iL = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.gr = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.iK = (function() {
  return $m_sci_IndexedSeqDefaults$().pg;
});
$p.f = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bI = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.m();
});
$p.n = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().ri(this);
});
$p.w = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.M = (function() {
  return this.m();
});
$p.fm = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I($ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this)), p, from);
});
$p.lN = (function(otherSize) {
  var x = this.m();
  return ((x === otherSize) ? 0 : ((x < otherSize) ? (-1) : 1));
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.bF = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.hA = (function() {
  return $m_sjsr_WrappedVarArgs$().aK();
});
$p.S = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.iR = (function(p) {
  return $f_sc_IterableOnceOps__exists__F1__Z(this, p);
});
$p.bV = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.iM = (function(pf) {
  return $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(this, pf);
});
$p.eD = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fs = (function() {
  return $m_sci_Nil$().bR(this);
});
$p.lQ = (function() {
  return $m_sci_Vector$().bv(this);
});
$p.j6 = (function(evidence$2) {
  return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2);
});
$p.e0 = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.m = (function() {
  return (this.iA.length | 0);
});
$p.v = (function(idx) {
  return this.iA[idx];
});
$p.c9 = (function() {
  return "WrappedVarArgs";
});
$p.gd = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().le(coll);
});
$p.bX = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.b = (function(v1) {
  return this.v((v1 | 0));
});
$p.aZ = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d8)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  d8: 1,
  A: 1,
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
  t: 1,
  p: 1,
  G: 1,
  B: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_HashMap(rootNode) {
  this.b4 = null;
  this.b4 = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.L = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.qX = (function() {
  return $m_sci_HashMap$();
});
$p.s = (function() {
  return this.b4.be;
});
$p.M = (function() {
  return this.b4.be;
});
$p.c = (function() {
  return (this.b4.be === 0);
});
$p.lt = (function() {
  return ((this.b4.be === 0) ? $m_sci_Set$EmptySet$() : new $c_sci_HashMap$HashKeySet(this));
});
$p.f = (function() {
  return (this.c() ? $m_sc_Iterator$().E : new $c_sci_MapKeyValueTupleIterator(this.b4));
});
$p.gj = (function() {
  return (this.c() ? $m_sc_Iterator$().E : new $c_sci_MapKeyIterator(this.b4));
});
$p.aj = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().P(key);
  var keyHash = $m_sc_Hashing$().bi(keyUnimprovedHash);
  return this.b4.l2(key, keyUnimprovedHash, keyHash, 0);
});
$p.b = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().P(key);
  var keyHash = $m_sc_Hashing$().bi(keyUnimprovedHash);
  return this.b4.kS(key, keyUnimprovedHash, keyHash, 0);
});
$p.gf = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().P(key);
  var keyHash = $m_sc_Hashing$().bi(keyUnimprovedHash);
  return this.b4.iT(key, keyUnimprovedHash, keyHash, 0);
});
$p.dZ = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().P(key);
  var keyHash = $m_sc_Hashing$().bi(keyUnimprovedHash);
  return this.b4.lf(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.gu = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().P(key);
  var newRootNode = this.b4.lS(key, value, keyUnimprovedHash, $m_sc_Hashing$().bi(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.b4) ? this : new $c_sci_HashMap(newRootNode));
});
$p.S = (function(f) {
  this.b4.S(f);
});
$p.fk = (function(f) {
  this.b4.fk(f);
});
$p.n = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.b4;
      var x$2 = that.b4;
      return ((x === null) ? (x$2 === null) : x.n(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.u = (function() {
  if (this.c()) {
    return $m_s_util_hashing_MurmurHash3$().kN;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.b4);
    return $m_s_util_hashing_MurmurHash3$().hL(hashIterator, $m_s_util_hashing_MurmurHash3$().eC);
  }
});
$p.c9 = (function() {
  return "HashMap";
});
$p.o = (function() {
  return this.f().e();
});
$p.eK = (function(key, value) {
  return this.gu(key, value);
});
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cp)));
}
var $d_sci_HashMap = new $TypeData().i($c_sci_HashMap, "scala.collection.immutable.HashMap", ({
  cp: 1,
  az: 1,
  av: 1,
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
  r: 1,
  aB: 1,
  i7: 1,
  h7: 1,
  n: 1,
  M: 1,
  a: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.i9)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.id)));
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
$p.b2 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
function $p_scm_HashSet__addElem__O__I__Z($thiz, elem, hash) {
  var idx = (hash & (((-1) + $thiz.bq.a.length) | 0));
  var x1 = $thiz.bq.a[idx];
  if ((x1 === null)) {
    $thiz.bq.a[idx] = new $c_scm_HashSet$Node(elem, hash, null);
  } else {
    var prev = null;
    var n = x1;
    while (((n !== null) && (n.dT <= hash))) {
      if (((n.dT === hash) && $m_sr_BoxesRunTime$().k(elem, n.g1))) {
        return false;
      }
      prev = n;
      n = n.br;
    }
    if ((prev === null)) {
      $thiz.bq.a[idx] = new $c_scm_HashSet$Node(elem, hash, x1);
    } else {
      prev.br = new $c_scm_HashSet$Node(elem, hash, prev.br);
    }
  }
  $thiz.ez = ((1 + $thiz.ez) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.bq.a.length;
  $thiz.kK = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.ez === 0)) {
    $thiz.bq = new ($d_scm_HashSet$Node.r().C)(newlen);
  } else {
    $thiz.bq = $m_ju_Arrays$().a9($thiz.bq, newlen);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.bq.a[i];
        if ((old !== null)) {
          preLow.br = null;
          preHigh.br = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.br;
            if (((n.dT & oldlen) === 0)) {
              lastLow.br = n;
              lastLow = n;
            } else {
              lastHigh.br = n;
              lastHigh = n;
            }
            n = next;
          }
          lastLow.br = null;
          if ((old !== preLow.br)) {
            $thiz.bq.a[i] = preLow.br;
          }
          if ((preHigh.br !== null)) {
            $thiz.bq.a[((i + oldlen) | 0)] = preHigh.br;
            lastHigh.br = null;
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
  return $doubleToInt((size * $thiz.kJ));
}
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.kJ = loadFactor;
  $thiz.bq = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.kK = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.bq.a.length);
  $thiz.ez = 0;
  return $thiz;
}
function $ct_scm_HashSet__($thiz) {
  $ct_scm_HashSet__I__D__($thiz, 16, 0.75);
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet() {
  this.kJ = 0.0;
  this.bq = null;
  this.kK = 0;
  this.ez = 0;
}
$p = $c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$p.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
}
$h_scm_HashSet.prototype = $p;
$p.L = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.M = (function() {
  return this.ez;
});
$p.j4 = (function(originalHash) {
  return (originalHash ^ ((originalHash >>> 16) | 0));
});
$p.aj = (function(elem) {
  var hash = this.j4($m_sr_Statics$().P(elem));
  var x1 = this.bq.a[(hash & (((-1) + this.bq.a.length) | 0))];
  return (((x1 === null) ? null : x1.tk(elem, hash)) !== null);
});
$p.bj = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.kJ)));
  if ((target > this.bq.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.iI = (function(elem) {
  if ((((1 + this.ez) | 0) >= this.kK)) {
    $p_scm_HashSet__growTable__I__V(this, (this.bq.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, this.j4($m_sr_Statics$().P(elem)));
});
$p.pT = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if ((xs instanceof $c_sci_HashSet)) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((k$2$2, h$2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, k$2$2, this.j4((h$2$2 | 0)));
    }));
    xs.bK.l9(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.l()) {
      var next = iter.e();
      $p_scm_HashSet__addElem__O__I__Z(this, next.g1, next.dT);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.tc();
    while (iter$2.l()) {
      var next$2 = iter$2.e();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.qV(), next$2.qP());
    }
    return this;
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs);
  }
});
$p.f = (function() {
  return new $c_scm_HashSet$$anon$1(this);
});
$p.aZ = (function() {
  return $m_scm_HashSet$();
});
$p.s = (function() {
  return this.ez;
});
$p.c = (function() {
  return (this.ez === 0);
});
$p.c9 = (function() {
  return "HashSet";
});
$p.u = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.l()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().hL(hashIterator, $m_s_util_hashing_MurmurHash3$().iB);
});
$p.ax = (function(elem) {
  this.iI(elem);
  return this;
});
$p.b2 = (function(elems) {
  return this.pT(elems);
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cZ)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  cZ: 1,
  ih: 1,
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
  iI: 1,
  O: 1,
  iJ: 1,
  N: 1,
  E: 1,
  K: 1,
  J: 1,
  I: 1,
  aN: 1,
  n: 1,
  a: 1
}));
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hB)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iE)));
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
$p.ge = (function(coll) {
  return $m_sci_ArraySeq$().lb(coll, this.aJ());
});
$p.hA = (function() {
  return $m_sci_ArraySeq$().iZ(this.aJ());
});
$p.cH = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.fj = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.iL = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.gr = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bd = (function() {
  return "IndexedSeq";
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bI = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.m();
});
$p.e0 = (function() {
  return $m_sci_ArraySeq$().kr;
});
$p.u5 = (function(f) {
  var a = new $ac_O(this.m());
  var i = 0;
  while ((i < a.a.length)) {
    a.a[i] = f.b(this.v(i));
    i = ((1 + i) | 0);
  }
  return $m_sci_ArraySeq$().hN(a);
});
$p.aI = (function(elem) {
  var $x_1 = $m_sci_ArraySeq$();
  var xs = this.d7();
  var newLength = ((1 + $m_jl_reflect_Array$().bW(xs)) | 0);
  if ($d_O.R($objectGetClass(xs).C.Q().C)) {
    var dest$1 = $m_ju_Arrays$().sW(xs, newLength, $d_O.r().l());
  } else {
    var dest = new $ac_O(newLength);
    $m_s_Array$().ca(xs, 0, dest, 0, $m_jl_reflect_Array$().bW(xs));
    var dest$1 = dest;
  }
  var x1 = $m_jl_reflect_Array$().bW(xs);
  dest$1.a[x1] = elem;
  return $x_1.hN(dest$1);
});
$p.c9 = (function() {
  return "ArraySeq";
});
$p.bV = (function(xs, start, len) {
  var srcLen = this.m();
  var destLen = $m_jl_reflect_Array$().bW(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().ca(this.d7(), 0, xs, start, copied);
  }
  return copied;
});
$p.iK = (function() {
  return 2147483647;
});
$p.gd = (function(coll) {
  return $m_sci_ArraySeq$().lb(coll, this.aJ());
});
$p.R = (function(elem) {
  return this.aI(elem);
});
$p.L = (function(f) {
  return this.u5(f);
});
$p.aZ = (function() {
  return $m_sci_ArraySeq$().kr;
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
$p.cH = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.fj = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.iL = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.gr = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bd = (function() {
  return "IndexedSeq";
});
$p.bI = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.m();
});
$p.e0 = (function() {
  return $m_sci_Vector$();
});
$p.m = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.h : this.d.a.length);
});
$p.f = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().pt : new $c_sci_NewVectorIterator(this, this.m(), this.d8()));
});
$p.sh = (function(suffix) {
  var k = suffix.s();
  return ((k === 0) ? this : ((k < 0) ? $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix) : this.c8(suffix, k)));
});
$p.c8 = (function(suffix, k) {
  if ((k < ((4 + this.d8()) | 0))) {
    var v = new $c_sr_ObjectRef(this);
    if ($is_sci_Iterable(suffix)) {
      suffix.S(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => {
        v.I = v.I.bt(x$2$2);
      })));
    } else {
      var this$2 = suffix.f();
      while (this$2.l()) {
        var x0 = this$2.e();
        v.I = v.I.bt(x0);
      }
    }
    return v.I;
  } else if (((this.m() < ((k >>> 5) | 0)) && (suffix instanceof $c_sci_Vector))) {
    var v$2 = suffix;
    var ri = new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(new $c_sc_IndexedSeqView$Id(this));
    while ((ri.bD > 0)) {
      v$2 = v$2.fq(ri.e());
    }
    return v$2;
  } else {
    return (((this.m() < (((-64) + k) | 0)) && (suffix instanceof $c_sci_Vector)) ? new $c_sci_VectorBuilder().se(this.m(), suffix).hj(this).hj(suffix).j3() : new $c_sci_VectorBuilder().qQ(this).hj(suffix).j3());
  }
});
$p.c9 = (function() {
  return "Vector";
});
$p.bV = (function(xs, start, len) {
  return this.f().bV(xs, start, len);
});
$p.lQ = (function() {
  return this;
});
$p.iK = (function() {
  return $m_sci_Vector$().ps;
});
$p.b8 = (function(index) {
  return $m_scg_CommonErrors$().hy(index, (((-1) + this.m()) | 0));
});
$p.o = (function() {
  if ((this.d.a.length === 0)) {
    throw new $c_ju_NoSuchElementException("empty.head");
  } else {
    return this.d.a[0];
  }
});
$p.S = (function(f) {
  var c = this.d8();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    $x_1.l8((((-1) + ((((1 + c$1) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0)) | 0), this.dr(i), f);
    i = ((1 + i) | 0);
  }
});
$p.aZ = (function() {
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
$p.cH = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.R = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.L = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.bd = (function() {
  return "IndexedSeq";
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bI = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.m();
});
$p.e0 = (function() {
  return $m_scm_ArraySeq$().kI;
});
$p.qI = (function(coll) {
  var evidence$1 = this.aJ();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.bc();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.s();
  var it = coll.f();
  while (it.l()) {
    var elem = it.e();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.C.z : elem));
    jsElems.push(unboxedElem);
  }
  var $x_1 = $m_scm_ArraySeq$();
  var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
  return $x_1.lw(elemRuntimeClass.C.r().w(jsElems));
});
$p.hA = (function() {
  return $m_scm_ArraySeq$().iZ(this.aJ());
});
$p.c9 = (function() {
  return "ArraySeq";
});
$p.bV = (function(xs, start, len) {
  var srcLen = this.m();
  var destLen = $m_jl_reflect_Array$().bW(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().ca(this.cG(), 0, xs, start, copied);
  }
  return copied;
});
$p.n = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().bW(this.cG()) !== $m_jl_reflect_Array$().bW(other.cG()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.gd = (function(coll) {
  return this.qI(coll);
});
$p.ge = (function(coll) {
  return this.qI(coll);
});
$p.aZ = (function() {
  return $m_scm_ArraySeq$().kI;
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.dz = null;
  this.dz = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.m = (function() {
  return this.dz.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qc(this.dz, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().qy(this.dz, that.dz) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.dz);
});
$p.aI = (function(elem) {
  if (((typeof elem) === "boolean")) {
    var x2 = (!(!elem));
    var xs = this.dz;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_Z.R($objectGetClass(xs).C.Q().C)) {
      var dest$1 = this$3.eE(xs, newLength);
    } else {
      var dest = new $ac_Z(newLength);
      $m_s_Array$().ca(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cT(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofBoolean(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aI.call(this, elem);
  }
});
$p.hs = (function(i) {
  return this.dz.a[i];
});
$p.R = (function(elem) {
  return this.aI(elem);
});
$p.b = (function(v1) {
  return this.hs((v1 | 0));
});
$p.v = (function(i) {
  return this.hs(i);
});
$p.aJ = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.d7 = (function() {
  return this.dz;
});
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cb)));
}
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  cb: 1,
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
  A: 1,
  t: 1,
  p: 1,
  G: 1,
  B: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.dA = null;
  this.dA = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.m = (function() {
  return this.dA.a.length;
});
$p.hk = (function(i) {
  return this.dA.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.q4(this.dA, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().qs(this.dA, that.dA) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.dA);
});
$p.aI = (function(elem) {
  if ($isByte(elem)) {
    var x2 = (elem | 0);
    var xs = this.dA;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_B.R($objectGetClass(xs).C.Q().C)) {
      var dest$1 = this$3.eE(xs, newLength);
    } else {
      var dest = new $ac_B(newLength);
      $m_s_Array$().ca(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cT(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofByte(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aI.call(this, elem);
  }
});
$p.R = (function(elem) {
  return this.aI(elem);
});
$p.b = (function(v1) {
  return this.hk((v1 | 0));
});
$p.v = (function(i) {
  return this.hk(i);
});
$p.aJ = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.d7 = (function() {
  return this.dA;
});
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cc)));
}
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  cc: 1,
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
  A: 1,
  t: 1,
  p: 1,
  G: 1,
  B: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.db = null;
  this.db = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.m = (function() {
  return this.db.a.length;
});
$p.hl = (function(i) {
  return this.db.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.q5(this.db, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().qt(this.db, that.db) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.db);
});
$p.aI = (function(elem) {
  if ((elem instanceof $Char)) {
    var x2 = $uC(elem);
    var xs = this.db;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_C.R($objectGetClass(xs).C.Q().C)) {
      var dest$1 = this$3.eE(xs, newLength);
    } else {
      var dest = new $ac_C(newLength);
      $m_s_Array$().ca(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cT(dest$1, xs.a.length, $bC(x2));
    return new $c_sci_ArraySeq$ofChar(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aI.call(this, elem);
  }
});
$p.eD = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.db).eD(sb, start, sep, end);
});
$p.R = (function(elem) {
  return this.aI(elem);
});
$p.b = (function(v1) {
  return $bC(this.hl((v1 | 0)));
});
$p.v = (function(i) {
  return $bC(this.hl(i));
});
$p.aJ = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.d7 = (function() {
  return this.db;
});
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cd)));
}
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
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
  A: 1,
  t: 1,
  p: 1,
  G: 1,
  B: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.dB = null;
  this.dB = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.m = (function() {
  return this.dB.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.q6(this.dB, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofDouble) ? $m_ju_Arrays$().qu(this.dB, that.dB) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.dB);
});
$p.aI = (function(elem) {
  if (((typeof elem) === "number")) {
    var x2 = (+elem);
    var xs = this.dB;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_D.R($objectGetClass(xs).C.Q().C)) {
      var dest$1 = this$3.eE(xs, newLength);
    } else {
      var dest = new $ac_D(newLength);
      $m_s_Array$().ca(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cT(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofDouble(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aI.call(this, elem);
  }
});
$p.hn = (function(i) {
  return this.dB.a[i];
});
$p.R = (function(elem) {
  return this.aI(elem);
});
$p.b = (function(v1) {
  return this.hn((v1 | 0));
});
$p.v = (function(i) {
  return this.hn(i);
});
$p.aJ = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.d7 = (function() {
  return this.dB;
});
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ce)));
}
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
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
  A: 1,
  t: 1,
  p: 1,
  G: 1,
  B: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.dC = null;
  this.dC = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.m = (function() {
  return this.dC.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.q7(this.dC, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofFloat) ? $m_ju_Arrays$().qv(this.dC, that.dC) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.dC);
});
$p.aI = (function(elem) {
  if ($isFloat(elem)) {
    var x2 = Math.fround(elem);
    var xs = this.dC;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_F.R($objectGetClass(xs).C.Q().C)) {
      var dest$1 = this$3.eE(xs, newLength);
    } else {
      var dest = new $ac_F(newLength);
      $m_s_Array$().ca(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cT(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofFloat(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aI.call(this, elem);
  }
});
$p.ho = (function(i) {
  return this.dC.a[i];
});
$p.R = (function(elem) {
  return this.aI(elem);
});
$p.b = (function(v1) {
  return this.ho((v1 | 0));
});
$p.v = (function(i) {
  return this.ho(i);
});
$p.aJ = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.d7 = (function() {
  return this.dC;
});
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cf)));
}
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
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
  A: 1,
  t: 1,
  p: 1,
  G: 1,
  B: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.dD = null;
  this.dD = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
$p.m = (function() {
  return this.dD.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.q8(this.dD, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().iQ(this.dD, that.dD) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.dD);
});
$p.aI = (function(elem) {
  if ($isInt(elem)) {
    var x2 = (elem | 0);
    var xs = this.dD;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_I.R($objectGetClass(xs).C.Q().C)) {
      var dest$1 = this$3.eE(xs, newLength);
    } else {
      var dest = new $ac_I(newLength);
      $m_s_Array$().ca(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cT(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofInt(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aI.call(this, elem);
  }
});
$p.hp = (function(i) {
  return this.dD.a[i];
});
$p.R = (function(elem) {
  return this.aI(elem);
});
$p.b = (function(v1) {
  return this.hp((v1 | 0));
});
$p.v = (function(i) {
  return this.hp(i);
});
$p.aJ = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.d7 = (function() {
  return this.dD;
});
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cg)));
}
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
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
  A: 1,
  t: 1,
  p: 1,
  G: 1,
  B: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.dE = null;
  this.dE = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.m = (function() {
  return this.dE.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.q9(this.dE, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().qw(this.dE, that.dE) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.dE);
});
$p.aI = (function(elem) {
  if ((elem instanceof $c_RTLong)) {
    var t = $uJ(elem);
    var lo = t.p;
    var hi = t.t;
    var xs = this.dE;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_J.R($objectGetClass(xs).C.Q().C)) {
      var dest$1 = this$3.eE(xs, newLength);
    } else {
      var dest = new $ac_J(newLength);
      $m_s_Array$().ca(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cT(dest$1, xs.a.length, new $c_RTLong(lo, hi));
    return new $c_sci_ArraySeq$ofLong(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aI.call(this, elem);
  }
});
$p.hq = (function(i) {
  return this.dE.a[i];
});
$p.R = (function(elem) {
  return this.aI(elem);
});
$p.b = (function(v1) {
  return this.hq((v1 | 0));
});
$p.v = (function(i) {
  return this.hq(i);
});
$p.aJ = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.d7 = (function() {
  return this.dE;
});
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ch)));
}
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
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
  A: 1,
  t: 1,
  p: 1,
  G: 1,
  B: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.dc = null;
  this.dc = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.aJ = (function() {
  return $m_s_reflect_ClassTag$().q0($objectGetClass(this.dc).C.Q());
});
$p.m = (function() {
  return this.dc.a.length;
});
$p.v = (function(i) {
  return this.dc.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.q3(this.dc, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().qz(this.dc, that.dc) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.dc);
});
$p.b = (function(v1) {
  return this.v((v1 | 0));
});
$p.d7 = (function() {
  return this.dc;
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ci)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
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
  A: 1,
  t: 1,
  p: 1,
  G: 1,
  B: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.dF = null;
  this.dF = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.m = (function() {
  return this.dF.a.length;
});
$p.hm = (function(i) {
  return this.dF.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qa(this.dF, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().qx(this.dF, that.dF) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.dF);
});
$p.aI = (function(elem) {
  if ($isShort(elem)) {
    var x2 = (elem | 0);
    var xs = this.dF;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_S.R($objectGetClass(xs).C.Q().C)) {
      var dest$1 = this$3.eE(xs, newLength);
    } else {
      var dest = new $ac_S(newLength);
      $m_s_Array$().ca(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cT(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofShort(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aI.call(this, elem);
  }
});
$p.R = (function(elem) {
  return this.aI(elem);
});
$p.b = (function(v1) {
  return this.hm((v1 | 0));
});
$p.v = (function(i) {
  return this.hm(i);
});
$p.aJ = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.d7 = (function() {
  return this.dF;
});
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cj)));
}
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
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
  A: 1,
  t: 1,
  p: 1,
  G: 1,
  B: 1,
  u: 1,
  n: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.eZ = null;
  this.eZ = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.m = (function() {
  return this.eZ.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qb(this.eZ, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.eZ.a.length === that.eZ.a.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.eZ);
});
$p.hr = (function(i) {
});
$p.b = (function(v1) {
  this.hr((v1 | 0));
});
$p.v = (function(i) {
  this.hr(i);
});
$p.aJ = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.d7 = (function() {
  return this.eZ;
});
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ck)));
}
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
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
  A: 1,
  t: 1,
  p: 1,
  G: 1,
  B: 1,
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
      var temp$xs = xs.x();
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
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().k(a.o(), b.o()))) {
        var temp$a = a.x();
        var temp$b = b.x();
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
$p.cH = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.f = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.R = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.fj = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.bd = (function() {
  return "LinearSeq";
});
$p.lm = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.v = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.gr = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.fm = (function(p, from) {
  return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from);
});
$p.e0 = (function() {
  return $m_sci_List$();
});
$p.pN = (function(prefix) {
  if (this.c()) {
    return prefix;
  } else if (prefix.c()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.o(), this);
    var curr = result;
    var that = prefix.x();
    while ((!that.c())) {
      var temp = new $c_sci_$colon$colon(that.o(), this);
      curr.aV = temp;
      curr = temp;
      that = that.x();
    }
    return result;
  }
});
$p.c = (function() {
  return (this === $m_sci_Nil$());
});
$p.bR = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.pN(prefix);
  }
  if ((prefix.s() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.c()) {
      return prefix.fs();
    }
  }
  var iter = prefix.f();
  if (iter.l()) {
    var result = new $c_sci_$colon$colon(iter.e(), this);
    var curr = result;
    while (iter.l()) {
      var temp = new $c_sci_$colon$colon(iter.e(), this);
      curr.aV = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.pY = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.pN(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.u7 = (function(f) {
  if ((this === $m_sci_Nil$())) {
    return $m_sci_Nil$();
  } else {
    var h = new $c_sci_$colon$colon(f.b(this.o()), $m_sci_Nil$());
    var t = h;
    var rest = this.x();
    while ((rest !== $m_sci_Nil$())) {
      var nx = new $c_sci_$colon$colon(f.b(rest.o()), $m_sci_Nil$());
      t.aV = nx;
      t = nx;
      rest = rest.x();
    }
    return h;
  }
});
$p.S = (function(f) {
  var these = this;
  while ((!these.c())) {
    f.b(these.o());
    these = these.x();
  }
});
$p.m = (function() {
  var these = this;
  var len = 0;
  while ((!these.c())) {
    len = ((1 + len) | 0);
    these = these.x();
  }
  return len;
});
$p.b3 = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
});
$p.iR = (function(p) {
  var these = this;
  while ((!these.c())) {
    if ((!(!p.b(these.o())))) {
      return true;
    }
    these = these.x();
  }
  return false;
});
$p.aj = (function(elem) {
  var these = this;
  while ((!these.c())) {
    if ($m_sr_BoxesRunTime$().k(these.o(), elem)) {
      return true;
    }
    these = these.x();
  }
  return false;
});
$p.c9 = (function() {
  return "List";
});
$p.fs = (function() {
  return this;
});
$p.n = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.b = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.bX = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.l4 = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.L = (function(f) {
  return this.u7(f);
});
$p.aZ = (function() {
  return $m_sci_List$();
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bc)));
}
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
  this.ep = null;
  this.ep = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.m = (function() {
  return this.ep.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qc(this.ep, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().qy(this.ep, that.ep) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.ep);
});
$p.hs = (function(index) {
  return this.ep.a[index];
});
$p.b = (function(v1) {
  return this.hs((v1 | 0));
});
$p.v = (function(i) {
  return this.hs(i);
});
$p.aJ = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.cG = (function() {
  return this.ep;
});
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cO)));
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  cO: 1,
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
  t: 1,
  p: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.eq = null;
  this.eq = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.m = (function() {
  return this.eq.a.length;
});
$p.hk = (function(index) {
  return this.eq.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.q4(this.eq, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().qs(this.eq, that.eq) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.eq);
});
$p.b = (function(v1) {
  return this.hk((v1 | 0));
});
$p.v = (function(i) {
  return this.hk(i);
});
$p.aJ = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.cG = (function() {
  return this.eq;
});
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cP)));
}
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  cP: 1,
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
  t: 1,
  p: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.cs = null;
  this.cs = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.m = (function() {
  return this.cs.a.length;
});
$p.hl = (function(index) {
  return this.cs.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.q5(this.cs, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().qt(this.cs, that.cs) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.cs);
});
$p.eD = (function(sb, start, sep, end) {
  var jsb = sb.b7;
  if ((start.length !== 0)) {
    jsb.r = (("" + jsb.r) + start);
  }
  var len = this.cs.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.pW(this.cs);
    } else {
      jsb.m();
      var c = this.cs.a[0];
      var str = ("" + $cToS(c));
      jsb.r = (jsb.r + str);
      var i = 1;
      while ((i < len)) {
        jsb.r = (("" + jsb.r) + sep);
        var c$1 = this.cs.a[i];
        var str$1 = ("" + $cToS(c$1));
        jsb.r = (jsb.r + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  if ((end.length !== 0)) {
    jsb.r = (("" + jsb.r) + end);
  }
  return sb;
});
$p.b = (function(v1) {
  return $bC(this.hl((v1 | 0)));
});
$p.v = (function(i) {
  return $bC(this.hl(i));
});
$p.aJ = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.cG = (function() {
  return this.cs;
});
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cQ)));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
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
  t: 1,
  p: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.er = null;
  this.er = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.m = (function() {
  return this.er.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.q6(this.er, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofDouble) ? $m_ju_Arrays$().qu(this.er, that.er) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.er);
});
$p.hn = (function(index) {
  return this.er.a[index];
});
$p.b = (function(v1) {
  return this.hn((v1 | 0));
});
$p.v = (function(i) {
  return this.hn(i);
});
$p.aJ = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.cG = (function() {
  return this.er;
});
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cR)));
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
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
  t: 1,
  p: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.es = null;
  this.es = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.m = (function() {
  return this.es.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.q7(this.es, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofFloat) ? $m_ju_Arrays$().qv(this.es, that.es) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.es);
});
$p.ho = (function(index) {
  return this.es.a[index];
});
$p.b = (function(v1) {
  return this.ho((v1 | 0));
});
$p.v = (function(i) {
  return this.ho(i);
});
$p.aJ = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.cG = (function() {
  return this.es;
});
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cS)));
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
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
  t: 1,
  p: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.et = null;
  this.et = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.m = (function() {
  return this.et.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.q8(this.et, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().iQ(this.et, that.et) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.et);
});
$p.hp = (function(index) {
  return this.et.a[index];
});
$p.b = (function(v1) {
  return this.hp((v1 | 0));
});
$p.v = (function(i) {
  return this.hp(i);
});
$p.aJ = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.cG = (function() {
  return this.et;
});
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cT)));
}
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
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
  t: 1,
  p: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.eu = null;
  this.eu = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.m = (function() {
  return this.eu.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.q9(this.eu, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().qw(this.eu, that.eu) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.eu);
});
$p.hq = (function(index) {
  return this.eu.a[index];
});
$p.b = (function(v1) {
  return this.hq((v1 | 0));
});
$p.v = (function(i) {
  return this.hq(i);
});
$p.aJ = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.cG = (function() {
  return this.eu;
});
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cU)));
}
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
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
  t: 1,
  p: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.dR = null;
  this.dR = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.aJ = (function() {
  return $m_s_reflect_ClassTag$().q0($objectGetClass(this.dR).C.Q());
});
$p.m = (function() {
  return this.dR.a.length;
});
$p.v = (function(index) {
  return this.dR.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.q3(this.dR, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().qz(this.dR, that.dR) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.dR);
});
$p.b = (function(v1) {
  return this.v((v1 | 0));
});
$p.cG = (function() {
  return this.dR;
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cV)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
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
  t: 1,
  p: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.ev = null;
  this.ev = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.m = (function() {
  return this.ev.a.length;
});
$p.hm = (function(index) {
  return this.ev.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qa(this.ev, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().qx(this.ev, that.ev) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.ev);
});
$p.b = (function(v1) {
  return this.hm((v1 | 0));
});
$p.v = (function(i) {
  return this.hm(i);
});
$p.aJ = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.cG = (function() {
  return this.ev;
});
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cW)));
}
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
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
  t: 1,
  p: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.fg = null;
  this.fg = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.m = (function() {
  return this.fg.a.length;
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.qb(this.fg, this$1.aT);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.fg.a.length === that.fg.a.length) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.f = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.fg);
});
$p.hr = (function(index) {
});
$p.b = (function(v1) {
  this.hr((v1 | 0));
});
$p.v = (function(i) {
  this.hr(i);
});
$p.aJ = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.cG = (function() {
  return this.fg;
});
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cX)));
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
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
  t: 1,
  p: 1,
  W: 1,
  u: 1,
  n: 1,
  a: 1
}));
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iu)));
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
$p.v = (function(index) {
  if (((index >= 0) && (index < this.d.a.length))) {
    return this.d.a[index];
  } else {
    throw this.b8(index);
  }
});
$p.e5 = (function(index, elem) {
  if (((index >= 0) && (index < this.d.a.length))) {
    var a1 = this.d;
    var a1c = a1.j();
    a1c.a[index] = elem;
    return new $c_sci_Vector1(a1c);
  } else {
    throw this.b8(index);
  }
});
$p.bt = (function(elem) {
  if ((this.d.a.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().ga(this.d, elem));
  } else {
    var $x_2 = this.d;
    var $x_1 = $m_sci_VectorStatics$().an;
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.fq = (function(elem) {
  var len1 = this.d.a.length;
  if ((len1 < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().gb(elem, this.d));
  } else {
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2(a, 1, $m_sci_VectorStatics$().an, this.d, ((1 + len1) | 0));
  }
});
$p.d3 = (function(f) {
  return new $c_sci_Vector1($m_sci_VectorStatics$().cK(this.d, f));
});
$p.d8 = (function() {
  return 1;
});
$p.dr = (function(idx) {
  return this.d;
});
$p.c8 = (function(suffix, k) {
  var data1b = $m_sci_VectorStatics$().g6(this.d, suffix);
  return ((data1b !== null) ? new $c_sci_Vector1(data1b) : $c_sci_Vector.prototype.c8.call(this, suffix, k));
});
$p.L = (function(f) {
  return this.d3(f);
});
$p.R = (function(elem) {
  return this.bt(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.d.a.length))) {
    return this.d.a[index];
  } else {
    throw this.b8(index);
  }
});
function $isArrayOf_sci_Vector1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cH)));
}
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  cH: 1,
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
  A: 1,
  t: 1,
  p: 1,
  G: 1,
  B: 1,
  u: 1,
  n: 1,
  M: 1,
  a: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.io = null;
  this.aV = null;
  this.io = head;
  this.aV = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.o = (function() {
  return this.io;
});
$p.bb = (function() {
  return "::";
});
$p.b9 = (function() {
  return 2;
});
$p.ba = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.io;
      break;
    }
    case 1: {
      return this.aV;
      break;
    }
    default: {
      return $m_sr_Statics$().eH(x$1);
    }
  }
});
$p.bw = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.x = (function() {
  return this.aV;
});
$p.bI = (function() {
  return new $c_s_Some(this.io);
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  hi: 1,
  bc: 1,
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
  ba: 1,
  aF: 1,
  b5: 1,
  bb: 1,
  ca: 1,
  u: 1,
  n: 1,
  B: 1,
  M: 1,
  a: 1,
  C: 1
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
$p.lj = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.va = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.s = (function() {
  return 0;
});
$p.f = (function() {
  return $m_sc_Iterator$().E;
});
$p.bb = (function() {
  return "Nil";
});
$p.b9 = (function() {
  return 0;
});
$p.ba = (function(x$1) {
  return $m_sr_Statics$().eH(x$1);
});
$p.bw = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.x = (function() {
  this.va();
});
$p.bI = (function() {
  return $m_s_None$();
});
$p.o = (function() {
  this.lj();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  hR: 1,
  bc: 1,
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
  ba: 1,
  aF: 1,
  b5: 1,
  bb: 1,
  ca: 1,
  u: 1,
  n: 1,
  B: 1,
  M: 1,
  a: 1,
  C: 1
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
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().kC, $m_sci_VectorStatics$().kC, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.pZ = (function(index) {
  throw this.b8(index);
});
$p.e5 = (function(index, elem) {
  throw this.b8(index);
});
$p.bt = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.fq = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.d8 = (function() {
  return 0;
});
$p.dr = (function(idx) {
  return null;
});
$p.n = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)));
});
$p.c8 = (function(suffix, k) {
  return $m_sci_Vector$().bv(suffix);
});
$p.b8 = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.L = (function(f) {
  return this;
});
$p.R = (function(elem) {
  return this.bt(elem);
});
$p.b = (function(v1) {
  this.pZ((v1 | 0));
});
$p.v = (function(i) {
  this.pZ(i);
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  ib: 1,
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
  A: 1,
  t: 1,
  p: 1,
  G: 1,
  B: 1,
  u: 1,
  n: 1,
  M: 1,
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
  this.bo = 0;
  this.b5 = null;
  this.bo = len1;
  this.b5 = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector2.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $p;
$p.v = (function(index) {
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.bo) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.b5.a.length) ? this.b5.a[i2].a[i1] : this.g.a[(31 & io)]);
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b8(index);
  }
});
$p.e5 = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.bo)) {
      var io = ((index - this.bo) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.b5.a.length)) {
        var a2 = this.b5;
        var a2c = a2.j();
        var a1 = a2c.a[i2];
        var a1c = a1.j();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        return new $c_sci_Vector2(this.d, this.bo, a2c, this.g, this.h);
      } else {
        var a1$1 = this.g;
        var a1c$1 = a1$1.j();
        a1c$1.a[i1] = elem;
        return new $c_sci_Vector2(this.d, this.bo, this.b5, a1c$1, this.h);
      }
    } else {
      var a1$2 = this.d;
      var a1c$2 = a1$2.j();
      a1c$2.a[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.bo, this.b5, this.g, this.h);
    }
  } else {
    throw this.b8(index);
  }
});
$p.bt = (function(elem) {
  if ((this.g.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().ga(this.g, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector2(this.d, this.bo, this.b5, x$1, x$2);
  } else if ((this.b5.a.length < 30)) {
    var x$6 = $m_sci_VectorStatics$().K(this.b5, this.g);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$8 = ((1 + this.h) | 0);
    return new $c_sci_Vector2(this.d, this.bo, x$6, a, x$8);
  } else {
    var $x_5 = this.d;
    var $x_4 = this.bo;
    var $x_3 = this.b5;
    var $x_2 = this.bo;
    var $x_1 = $m_sci_VectorStatics$().bp;
    var x = this.g;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.a[0] = x;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.h) | 0));
  }
});
$p.fq = (function(elem) {
  if ((this.bo < 32)) {
    var x$1 = $m_sci_VectorStatics$().gb(elem, this.d);
    var x$2 = ((1 + this.bo) | 0);
    var x$3 = ((1 + this.h) | 0);
    return new $c_sci_Vector2(x$1, x$2, this.b5, this.g, x$3);
  } else if ((this.b5.a.length < 30)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$8 = $m_sci_VectorStatics$().D(this.d, this.b5);
    var x$9 = ((1 + this.h) | 0);
    return new $c_sci_Vector2(a, 1, x$8, this.g, x$9);
  } else {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x = this.d;
    var a$2 = new ($d_O.r().r().C)(1);
    a$2.a[0] = x;
    return new $c_sci_Vector3(a$1, 1, a$2, ((1 + this.bo) | 0), $m_sci_VectorStatics$().bp, this.b5, this.g, ((1 + this.h) | 0));
  }
});
$p.d3 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cK(this.d, f);
  var x$2 = $m_sci_VectorStatics$().aC(2, this.b5, f);
  var x$3 = $m_sci_VectorStatics$().cK(this.g, f);
  return new $c_sci_Vector2(x$1, this.bo, x$2, x$3, this.h);
});
$p.d8 = (function() {
  return 3;
});
$p.dr = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
      break;
    }
    case 1: {
      return this.b5;
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
$p.c8 = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().g6(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector2(this.d, this.bo, this.b5, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.c8.call(this, suffix, k);
  }
});
$p.L = (function(f) {
  return this.d3(f);
});
$p.R = (function(elem) {
  return this.bt(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.bo) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.b5.a.length) ? this.b5.a[i2].a[i1] : this.g.a[(31 & io)]);
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b8(index);
  }
});
function $isArrayOf_sci_Vector2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cI)));
}
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  cI: 1,
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
  A: 1,
  t: 1,
  p: 1,
  G: 1,
  B: 1,
  u: 1,
  n: 1,
  M: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.d = null;
  this.g = null;
  this.h = 0;
  this.bg = 0;
  this.bh = null;
  this.aX = 0;
  this.aH = null;
  this.aO = null;
  this.bg = len1;
  this.bh = prefix2;
  this.aX = len12;
  this.aH = data3;
  this.aO = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector3.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $p;
$p.v = (function(index) {
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.aX) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aH.a.length) ? this.aH.a[i3].a[i2].a[i1] : ((i2 < this.aO.a.length) ? this.aO.a[i2].a[i1] : this.g.a[i1]));
    } else if ((index >= this.bg)) {
      var io$2 = ((index - this.bg) | 0);
      return this.bh.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b8(index);
  }
});
$p.e5 = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.aX)) {
      var io = ((index - this.aX) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.aH.a.length)) {
        var a3 = this.aH;
        var a3c = a3.j();
        var a2 = a3c.a[i3];
        var a2c = a2.j();
        var a1 = a2c.a[i2];
        var a1c = a1.j();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        return new $c_sci_Vector3(this.d, this.bg, this.bh, this.aX, a3c, this.aO, this.g, this.h);
      } else if ((i2 < this.aO.a.length)) {
        var a2$1 = this.aO;
        var a2c$1 = a2$1.j();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.j();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        return new $c_sci_Vector3(this.d, this.bg, this.bh, this.aX, this.aH, a2c$1, this.g, this.h);
      } else {
        var a1$2 = this.g;
        var a1c$2 = a1$2.j();
        a1c$2.a[i1] = elem;
        return new $c_sci_Vector3(this.d, this.bg, this.bh, this.aX, this.aH, this.aO, a1c$2, this.h);
      }
    } else if ((index >= this.bg)) {
      var io$2 = ((index - this.bg) | 0);
      var a2$2 = this.bh;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.j();
      var a1$3 = a2c$2.a[idx2];
      var a1c$3 = a1$3.j();
      a1c$3.a[idx1] = elem;
      a2c$2.a[idx2] = a1c$3;
      return new $c_sci_Vector3(this.d, this.bg, a2c$2, this.aX, this.aH, this.aO, this.g, this.h);
    } else {
      var a1$4 = this.d;
      var a1c$4 = a1$4.j();
      a1c$4.a[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.bg, this.bh, this.aX, this.aH, this.aO, this.g, this.h);
    }
  } else {
    throw this.b8(index);
  }
});
$p.bt = (function(elem) {
  if ((this.g.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().ga(this.g, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(this.d, this.bg, this.bh, this.aX, this.aH, this.aO, x$1, x$2);
  } else if ((this.aO.a.length < 31)) {
    var x$9 = $m_sci_VectorStatics$().K(this.aO, this.g);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$11 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(this.d, this.bg, this.bh, this.aX, this.aH, x$9, a, x$11);
  } else if ((this.aH.a.length < 30)) {
    var x$17 = $m_sci_VectorStatics$().K(this.aH, $m_sci_VectorStatics$().K(this.aO, this.g));
    var x$18 = $m_sci_VectorStatics$().an;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$20 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(this.d, this.bg, this.bh, this.aX, x$17, x$18, a$1, x$20);
  } else {
    var $x_8 = this.d;
    var $x_7 = this.bg;
    var $x_6 = this.bh;
    var $x_5 = this.aX;
    var $x_4 = this.aH;
    var $x_3 = this.aX;
    var $x_2 = $m_sci_VectorStatics$().cS;
    var x = $m_sci_VectorStatics$().K(this.aO, this.g);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().an;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.h) | 0));
  }
});
$p.fq = (function(elem) {
  if ((this.bg < 32)) {
    var x$1 = $m_sci_VectorStatics$().gb(elem, this.d);
    var x$2 = ((1 + this.bg) | 0);
    var x$3 = ((1 + this.aX) | 0);
    var x$4 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(x$1, x$2, this.bh, x$3, this.aH, this.aO, this.g, x$4);
  } else if ((this.aX < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$11 = $m_sci_VectorStatics$().D(this.d, this.bh);
    var x$12 = ((1 + this.aX) | 0);
    var x$13 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(a, 1, x$11, x$12, this.aH, this.aO, this.g, x$13);
  } else if ((this.aH.a.length < 30)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$19 = $m_sci_VectorStatics$().an;
    var x$21 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.bh), this.aH);
    var x$22 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(a$1, 1, x$19, 1, x$21, this.aO, this.g, x$22);
  } else {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var $x_1 = $m_sci_VectorStatics$().an;
    var x = $m_sci_VectorStatics$().D(this.d, this.bh);
    var a$3 = new ($d_O.r().r().r().C)(1);
    a$3.a[0] = x;
    return new $c_sci_Vector4(a$2, 1, $x_1, 1, a$3, ((1 + this.aX) | 0), $m_sci_VectorStatics$().cS, this.aH, this.aO, this.g, ((1 + this.h) | 0));
  }
});
$p.d3 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cK(this.d, f);
  var x$2 = $m_sci_VectorStatics$().aC(2, this.bh, f);
  var x$3 = $m_sci_VectorStatics$().aC(3, this.aH, f);
  var x$4 = $m_sci_VectorStatics$().aC(2, this.aO, f);
  var x$5 = $m_sci_VectorStatics$().cK(this.g, f);
  return new $c_sci_Vector3(x$1, this.bg, x$2, this.aX, x$3, x$4, x$5, this.h);
});
$p.d8 = (function() {
  return 5;
});
$p.dr = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
      break;
    }
    case 1: {
      return this.bh;
      break;
    }
    case 2: {
      return this.aH;
      break;
    }
    case 3: {
      return this.aO;
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
$p.c8 = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().g6(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector3(this.d, this.bg, this.bh, this.aX, this.aH, this.aO, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.c8.call(this, suffix, k);
  }
});
$p.L = (function(f) {
  return this.d3(f);
});
$p.R = (function(elem) {
  return this.bt(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.aX) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aH.a.length) ? this.aH.a[i3].a[i2].a[i1] : ((i2 < this.aO.a.length) ? this.aO.a[i2].a[i1] : this.g.a[i1]));
    } else if ((index >= this.bg)) {
      var io$2 = ((index - this.bg) | 0);
      return this.bh.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b8(index);
  }
});
function $isArrayOf_sci_Vector3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cJ)));
}
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  cJ: 1,
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
  A: 1,
  t: 1,
  p: 1,
  G: 1,
  B: 1,
  u: 1,
  n: 1,
  M: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.d = null;
  this.g = null;
  this.h = 0;
  this.aY = 0;
  this.aQ = null;
  this.aP = 0;
  this.aR = null;
  this.aA = 0;
  this.al = null;
  this.ap = null;
  this.ao = null;
  this.aY = len1;
  this.aQ = prefix2;
  this.aP = len12;
  this.aR = prefix3;
  this.aA = len123;
  this.al = data4;
  this.ap = suffix3;
  this.ao = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector4.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $p;
$p.v = (function(index) {
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.aA) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.al.a.length) ? this.al.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ap.a.length) ? this.ap.a[i3].a[i2].a[i1] : ((i2 < this.ao.a.length) ? this.ao.a[i2].a[i1] : this.g.a[i1])));
    } else if ((index >= this.aP)) {
      var io$2 = ((index - this.aP) | 0);
      return this.aR.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aY)) {
      var io$3 = ((index - this.aY) | 0);
      return this.aQ.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b8(index);
  }
});
$p.e5 = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.aA)) {
      var io = ((index - this.aA) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.al.a.length)) {
        var a4 = this.al;
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
        return new $c_sci_Vector4(this.d, this.aY, this.aQ, this.aP, this.aR, this.aA, a4c, this.ap, this.ao, this.g, this.h);
      } else if ((i3 < this.ap.a.length)) {
        var a3$1 = this.ap;
        var a3c$1 = a3$1.j();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.j();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.j();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        return new $c_sci_Vector4(this.d, this.aY, this.aQ, this.aP, this.aR, this.aA, this.al, a3c$1, this.ao, this.g, this.h);
      } else if ((i2 < this.ao.a.length)) {
        var a2$2 = this.ao;
        var a2c$2 = a2$2.j();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.j();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        return new $c_sci_Vector4(this.d, this.aY, this.aQ, this.aP, this.aR, this.aA, this.al, this.ap, a2c$2, this.g, this.h);
      } else {
        var a1$3 = this.g;
        var a1c$3 = a1$3.j();
        a1c$3.a[i1] = elem;
        return new $c_sci_Vector4(this.d, this.aY, this.aQ, this.aP, this.aR, this.aA, this.al, this.ap, this.ao, a1c$3, this.h);
      }
    } else if ((index >= this.aP)) {
      var io$2 = ((index - this.aP) | 0);
      var a3$2 = this.aR;
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
      return new $c_sci_Vector4(this.d, this.aY, this.aQ, this.aP, a3c$2, this.aA, this.al, this.ap, this.ao, this.g, this.h);
    } else if ((index >= this.aY)) {
      var io$3 = ((index - this.aY) | 0);
      var a2$4 = this.aQ;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.j();
      var a1$5 = a2c$4.a[idx2$1];
      var a1c$5 = a1$5.j();
      a1c$5.a[idx1$1] = elem;
      a2c$4.a[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.d, this.aY, a2c$4, this.aP, this.aR, this.aA, this.al, this.ap, this.ao, this.g, this.h);
    } else {
      var a1$6 = this.d;
      var a1c$6 = a1$6.j();
      a1c$6.a[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.aY, this.aQ, this.aP, this.aR, this.aA, this.al, this.ap, this.ao, this.g, this.h);
    }
  } else {
    throw this.b8(index);
  }
});
$p.bt = (function(elem) {
  if ((this.g.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().ga(this.g, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.d, this.aY, this.aQ, this.aP, this.aR, this.aA, this.al, this.ap, this.ao, x$1, x$2);
  } else if ((this.ao.a.length < 31)) {
    var x$12 = $m_sci_VectorStatics$().K(this.ao, this.g);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$14 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.d, this.aY, this.aQ, this.aP, this.aR, this.aA, this.al, this.ap, x$12, a, x$14);
  } else if ((this.ap.a.length < 31)) {
    var x$23 = $m_sci_VectorStatics$().K(this.ap, $m_sci_VectorStatics$().K(this.ao, this.g));
    var x$24 = $m_sci_VectorStatics$().an;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$26 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.d, this.aY, this.aQ, this.aP, this.aR, this.aA, this.al, x$23, x$24, a$1, x$26);
  } else if ((this.al.a.length < 30)) {
    var x$34 = $m_sci_VectorStatics$().K(this.al, $m_sci_VectorStatics$().K(this.ap, $m_sci_VectorStatics$().K(this.ao, this.g)));
    var x$35 = $m_sci_VectorStatics$().bp;
    var x$36 = $m_sci_VectorStatics$().an;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$38 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.d, this.aY, this.aQ, this.aP, this.aR, this.aA, x$34, x$35, x$36, a$2, x$38);
  } else {
    var $x_11 = this.d;
    var $x_10 = this.aY;
    var $x_9 = this.aQ;
    var $x_8 = this.aP;
    var $x_7 = this.aR;
    var $x_6 = this.aA;
    var $x_5 = this.al;
    var $x_4 = this.aA;
    var $x_3 = $m_sci_VectorStatics$().hc;
    var x = $m_sci_VectorStatics$().K(this.ap, $m_sci_VectorStatics$().K(this.ao, this.g));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().bp;
    var $x_1 = $m_sci_VectorStatics$().an;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.h) | 0));
  }
});
$p.fq = (function(elem) {
  if ((this.aY < 32)) {
    var x$1 = $m_sci_VectorStatics$().gb(elem, this.d);
    var x$2 = ((1 + this.aY) | 0);
    var x$3 = ((1 + this.aP) | 0);
    var x$4 = ((1 + this.aA) | 0);
    var x$5 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(x$1, x$2, this.aQ, x$3, this.aR, x$4, this.al, this.ap, this.ao, this.g, x$5);
  } else if ((this.aP < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$14 = $m_sci_VectorStatics$().D(this.d, this.aQ);
    var x$15 = ((1 + this.aP) | 0);
    var x$16 = ((1 + this.aA) | 0);
    var x$17 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(a, 1, x$14, x$15, this.aR, x$16, this.al, this.ap, this.ao, this.g, x$17);
  } else if ((this.aA < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$25 = $m_sci_VectorStatics$().an;
    var x$27 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.aQ), this.aR);
    var x$28 = ((1 + this.aA) | 0);
    var x$29 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(a$1, 1, x$25, 1, x$27, x$28, this.al, this.ap, this.ao, this.g, x$29);
  } else if ((this.al.a.length < 30)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$36 = $m_sci_VectorStatics$().an;
    var x$38 = $m_sci_VectorStatics$().bp;
    var x$40 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.aQ), this.aR), this.al);
    var x$41 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(a$2, 1, x$36, 1, x$38, 1, x$40, this.ap, this.ao, this.g, x$41);
  } else {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var $x_2 = $m_sci_VectorStatics$().an;
    var $x_1 = $m_sci_VectorStatics$().bp;
    var x = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.aQ), this.aR);
    var a$4 = new ($d_O.r().r().r().r().C)(1);
    a$4.a[0] = x;
    return new $c_sci_Vector5(a$3, 1, $x_2, 1, $x_1, 1, a$4, ((1 + this.aA) | 0), $m_sci_VectorStatics$().hc, this.al, this.ap, this.ao, this.g, ((1 + this.h) | 0));
  }
});
$p.d3 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cK(this.d, f);
  var x$2 = $m_sci_VectorStatics$().aC(2, this.aQ, f);
  var x$3 = $m_sci_VectorStatics$().aC(3, this.aR, f);
  var x$4 = $m_sci_VectorStatics$().aC(4, this.al, f);
  var x$5 = $m_sci_VectorStatics$().aC(3, this.ap, f);
  var x$6 = $m_sci_VectorStatics$().aC(2, this.ao, f);
  var x$7 = $m_sci_VectorStatics$().cK(this.g, f);
  return new $c_sci_Vector4(x$1, this.aY, x$2, this.aP, x$3, this.aA, x$4, x$5, x$6, x$7, this.h);
});
$p.d8 = (function() {
  return 7;
});
$p.dr = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
      break;
    }
    case 1: {
      return this.aQ;
      break;
    }
    case 2: {
      return this.aR;
      break;
    }
    case 3: {
      return this.al;
      break;
    }
    case 4: {
      return this.ap;
      break;
    }
    case 5: {
      return this.ao;
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
$p.c8 = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().g6(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector4(this.d, this.aY, this.aQ, this.aP, this.aR, this.aA, this.al, this.ap, this.ao, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.c8.call(this, suffix, k);
  }
});
$p.L = (function(f) {
  return this.d3(f);
});
$p.R = (function(elem) {
  return this.bt(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.aA) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.al.a.length) ? this.al.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ap.a.length) ? this.ap.a[i3].a[i2].a[i1] : ((i2 < this.ao.a.length) ? this.ao.a[i2].a[i1] : this.g.a[i1])));
    } else if ((index >= this.aP)) {
      var io$2 = ((index - this.aP) | 0);
      return this.aR.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aY)) {
      var io$3 = ((index - this.aY) | 0);
      return this.aQ.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b8(index);
  }
});
function $isArrayOf_sci_Vector4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cK)));
}
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
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
  A: 1,
  t: 1,
  p: 1,
  G: 1,
  B: 1,
  u: 1,
  n: 1,
  M: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.d = null;
  this.g = null;
  this.h = 0;
  this.aE = 0;
  this.ar = null;
  this.aB = 0;
  this.as = null;
  this.aq = 0;
  this.at = null;
  this.a7 = 0;
  this.a0 = null;
  this.a4 = null;
  this.a3 = null;
  this.a2 = null;
  this.aE = len1;
  this.ar = prefix2;
  this.aB = len12;
  this.as = prefix3;
  this.aq = len123;
  this.at = prefix4;
  this.a7 = len1234;
  this.a0 = data5;
  this.a4 = suffix4;
  this.a3 = suffix3;
  this.a2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector5.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $p;
$p.v = (function(index) {
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.a7) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.a0.a.length) ? this.a0.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a4.a.length) ? this.a4.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a3.a.length) ? this.a3.a[i3].a[i2].a[i1] : ((i2 < this.a2.a.length) ? this.a2.a[i2].a[i1] : this.g.a[i1]))));
    } else if ((index >= this.aq)) {
      var io$2 = ((index - this.aq) | 0);
      return this.at.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aB)) {
      var io$3 = ((index - this.aB) | 0);
      return this.as.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aE)) {
      var io$4 = ((index - this.aE) | 0);
      return this.ar.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b8(index);
  }
});
$p.e5 = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.a7)) {
      var io = ((index - this.a7) | 0);
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i5 < this.a0.a.length)) {
        var a5 = this.a0;
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
        return new $c_sci_Vector5(this.d, this.aE, this.ar, this.aB, this.as, this.aq, this.at, this.a7, a5c, this.a4, this.a3, this.a2, this.g, this.h);
      } else if ((i4 < this.a4.a.length)) {
        var a4$1 = this.a4;
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
        return new $c_sci_Vector5(this.d, this.aE, this.ar, this.aB, this.as, this.aq, this.at, this.a7, this.a0, a4c$1, this.a3, this.a2, this.g, this.h);
      } else if ((i3 < this.a3.a.length)) {
        var a3$2 = this.a3;
        var a3c$2 = a3$2.j();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.j();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.j();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        return new $c_sci_Vector5(this.d, this.aE, this.ar, this.aB, this.as, this.aq, this.at, this.a7, this.a0, this.a4, a3c$2, this.a2, this.g, this.h);
      } else if ((i2 < this.a2.a.length)) {
        var a2$3 = this.a2;
        var a2c$3 = a2$3.j();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.j();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        return new $c_sci_Vector5(this.d, this.aE, this.ar, this.aB, this.as, this.aq, this.at, this.a7, this.a0, this.a4, this.a3, a2c$3, this.g, this.h);
      } else {
        var a1$4 = this.g;
        var a1c$4 = a1$4.j();
        a1c$4.a[i1] = elem;
        return new $c_sci_Vector5(this.d, this.aE, this.ar, this.aB, this.as, this.aq, this.at, this.a7, this.a0, this.a4, this.a3, this.a2, a1c$4, this.h);
      }
    } else if ((index >= this.aq)) {
      var io$2 = ((index - this.aq) | 0);
      var a4$2 = this.at;
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
      return new $c_sci_Vector5(this.d, this.aE, this.ar, this.aB, this.as, this.aq, a4c$2, this.a7, this.a0, this.a4, this.a3, this.a2, this.g, this.h);
    } else if ((index >= this.aB)) {
      var io$3 = ((index - this.aB) | 0);
      var a3$4 = this.as;
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
      return new $c_sci_Vector5(this.d, this.aE, this.ar, this.aB, a3c$4, this.aq, this.at, this.a7, this.a0, this.a4, this.a3, this.a2, this.g, this.h);
    } else if ((index >= this.aE)) {
      var io$4 = ((index - this.aE) | 0);
      var a2$6 = this.ar;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.j();
      var a1$7 = a2c$6.a[idx2$2];
      var a1c$7 = a1$7.j();
      a1c$7.a[idx1$2] = elem;
      a2c$6.a[idx2$2] = a1c$7;
      return new $c_sci_Vector5(this.d, this.aE, a2c$6, this.aB, this.as, this.aq, this.at, this.a7, this.a0, this.a4, this.a3, this.a2, this.g, this.h);
    } else {
      var a1$8 = this.d;
      var a1c$8 = a1$8.j();
      a1c$8.a[index] = elem;
      return new $c_sci_Vector5(a1c$8, this.aE, this.ar, this.aB, this.as, this.aq, this.at, this.a7, this.a0, this.a4, this.a3, this.a2, this.g, this.h);
    }
  } else {
    throw this.b8(index);
  }
});
$p.bt = (function(elem) {
  if ((this.g.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().ga(this.g, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.d, this.aE, this.ar, this.aB, this.as, this.aq, this.at, this.a7, this.a0, this.a4, this.a3, this.a2, x$1, x$2);
  } else if ((this.a2.a.length < 31)) {
    var x$15 = $m_sci_VectorStatics$().K(this.a2, this.g);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$17 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.d, this.aE, this.ar, this.aB, this.as, this.aq, this.at, this.a7, this.a0, this.a4, this.a3, x$15, a, x$17);
  } else if ((this.a3.a.length < 31)) {
    var x$29 = $m_sci_VectorStatics$().K(this.a3, $m_sci_VectorStatics$().K(this.a2, this.g));
    var x$30 = $m_sci_VectorStatics$().an;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$32 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.d, this.aE, this.ar, this.aB, this.as, this.aq, this.at, this.a7, this.a0, this.a4, x$29, x$30, a$1, x$32);
  } else if ((this.a4.a.length < 31)) {
    var x$43 = $m_sci_VectorStatics$().K(this.a4, $m_sci_VectorStatics$().K(this.a3, $m_sci_VectorStatics$().K(this.a2, this.g)));
    var x$44 = $m_sci_VectorStatics$().bp;
    var x$45 = $m_sci_VectorStatics$().an;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$47 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.d, this.aE, this.ar, this.aB, this.as, this.aq, this.at, this.a7, this.a0, x$43, x$44, x$45, a$2, x$47);
  } else if ((this.a0.a.length < 30)) {
    var x$57 = $m_sci_VectorStatics$().K(this.a0, $m_sci_VectorStatics$().K(this.a4, $m_sci_VectorStatics$().K(this.a3, $m_sci_VectorStatics$().K(this.a2, this.g))));
    var x$58 = $m_sci_VectorStatics$().cS;
    var x$59 = $m_sci_VectorStatics$().bp;
    var x$60 = $m_sci_VectorStatics$().an;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$62 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.d, this.aE, this.ar, this.aB, this.as, this.aq, this.at, this.a7, x$57, x$58, x$59, x$60, a$3, x$62);
  } else {
    var $x_14 = this.d;
    var $x_13 = this.aE;
    var $x_12 = this.ar;
    var $x_11 = this.aB;
    var $x_10 = this.as;
    var $x_9 = this.aq;
    var $x_8 = this.at;
    var $x_7 = this.a7;
    var $x_6 = this.a0;
    var $x_5 = this.a7;
    var $x_4 = $m_sci_VectorStatics$().kD;
    var x = $m_sci_VectorStatics$().K(this.a4, $m_sci_VectorStatics$().K(this.a3, $m_sci_VectorStatics$().K(this.a2, this.g)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().cS;
    var $x_2 = $m_sci_VectorStatics$().bp;
    var $x_1 = $m_sci_VectorStatics$().an;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.h) | 0));
  }
});
$p.fq = (function(elem) {
  if ((this.aE < 32)) {
    var x$1 = $m_sci_VectorStatics$().gb(elem, this.d);
    var x$2 = ((1 + this.aE) | 0);
    var x$3 = ((1 + this.aB) | 0);
    var x$4 = ((1 + this.aq) | 0);
    var x$5 = ((1 + this.a7) | 0);
    var x$6 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(x$1, x$2, this.ar, x$3, this.as, x$4, this.at, x$5, this.a0, this.a4, this.a3, this.a2, this.g, x$6);
  } else if ((this.aB < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$17 = $m_sci_VectorStatics$().D(this.d, this.ar);
    var x$18 = ((1 + this.aB) | 0);
    var x$19 = ((1 + this.aq) | 0);
    var x$20 = ((1 + this.a7) | 0);
    var x$21 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a, 1, x$17, x$18, this.as, x$19, this.at, x$20, this.a0, this.a4, this.a3, this.a2, this.g, x$21);
  } else if ((this.aq < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$31 = $m_sci_VectorStatics$().an;
    var x$33 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.ar), this.as);
    var x$34 = ((1 + this.aq) | 0);
    var x$35 = ((1 + this.a7) | 0);
    var x$36 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a$1, 1, x$31, 1, x$33, x$34, this.at, x$35, this.a0, this.a4, this.a3, this.a2, this.g, x$36);
  } else if ((this.a7 < 1048576)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$45 = $m_sci_VectorStatics$().an;
    var x$47 = $m_sci_VectorStatics$().bp;
    var x$49 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.ar), this.as), this.at);
    var x$50 = ((1 + this.a7) | 0);
    var x$51 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a$2, 1, x$45, 1, x$47, 1, x$49, x$50, this.a0, this.a4, this.a3, this.a2, this.g, x$51);
  } else if ((this.a0.a.length < 30)) {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$59 = $m_sci_VectorStatics$().an;
    var x$61 = $m_sci_VectorStatics$().bp;
    var x$63 = $m_sci_VectorStatics$().cS;
    var x$65 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.ar), this.as), this.at), this.a0);
    var x$66 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a$3, 1, x$59, 1, x$61, 1, x$63, 1, x$65, this.a4, this.a3, this.a2, this.g, x$66);
  } else {
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var $x_3 = $m_sci_VectorStatics$().an;
    var $x_2 = $m_sci_VectorStatics$().bp;
    var $x_1 = $m_sci_VectorStatics$().cS;
    var x = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.ar), this.as), this.at);
    var a$5 = new ($d_O.r().r().r().r().r().C)(1);
    a$5.a[0] = x;
    return new $c_sci_Vector6(a$4, 1, $x_3, 1, $x_2, 1, $x_1, 1, a$5, ((1 + this.a7) | 0), $m_sci_VectorStatics$().kD, this.a0, this.a4, this.a3, this.a2, this.g, ((1 + this.h) | 0));
  }
});
$p.d3 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cK(this.d, f);
  var x$2 = $m_sci_VectorStatics$().aC(2, this.ar, f);
  var x$3 = $m_sci_VectorStatics$().aC(3, this.as, f);
  var x$4 = $m_sci_VectorStatics$().aC(4, this.at, f);
  var x$5 = $m_sci_VectorStatics$().aC(5, this.a0, f);
  var x$6 = $m_sci_VectorStatics$().aC(4, this.a4, f);
  var x$7 = $m_sci_VectorStatics$().aC(3, this.a3, f);
  var x$8 = $m_sci_VectorStatics$().aC(2, this.a2, f);
  var x$9 = $m_sci_VectorStatics$().cK(this.g, f);
  return new $c_sci_Vector5(x$1, this.aE, x$2, this.aB, x$3, this.aq, x$4, this.a7, x$5, x$6, x$7, x$8, x$9, this.h);
});
$p.d8 = (function() {
  return 9;
});
$p.dr = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
      break;
    }
    case 1: {
      return this.ar;
      break;
    }
    case 2: {
      return this.as;
      break;
    }
    case 3: {
      return this.at;
      break;
    }
    case 4: {
      return this.a0;
      break;
    }
    case 5: {
      return this.a4;
      break;
    }
    case 6: {
      return this.a3;
      break;
    }
    case 7: {
      return this.a2;
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
$p.c8 = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().g6(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector5(this.d, this.aE, this.ar, this.aB, this.as, this.aq, this.at, this.a7, this.a0, this.a4, this.a3, this.a2, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.c8.call(this, suffix, k);
  }
});
$p.L = (function(f) {
  return this.d3(f);
});
$p.R = (function(elem) {
  return this.bt(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.a7) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.a0.a.length) ? this.a0.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a4.a.length) ? this.a4.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a3.a.length) ? this.a3.a[i3].a[i2].a[i1] : ((i2 < this.a2.a.length) ? this.a2.a[i2].a[i1] : this.g.a[i1]))));
    } else if ((index >= this.aq)) {
      var io$2 = ((index - this.aq) | 0);
      return this.at.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aB)) {
      var io$3 = ((index - this.aB) | 0);
      return this.as.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aE)) {
      var io$4 = ((index - this.aE) | 0);
      return this.ar.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b8(index);
  }
});
function $isArrayOf_sci_Vector5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cL)));
}
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
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
  A: 1,
  t: 1,
  p: 1,
  G: 1,
  B: 1,
  u: 1,
  n: 1,
  M: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.d = null;
  this.g = null;
  this.h = 0;
  this.au = 0;
  this.ad = null;
  this.am = 0;
  this.ae = null;
  this.ac = 0;
  this.af = null;
  this.a8 = 0;
  this.ag = null;
  this.a5 = 0;
  this.U = null;
  this.Z = null;
  this.Y = null;
  this.X = null;
  this.W = null;
  this.au = len1;
  this.ad = prefix2;
  this.am = len12;
  this.ae = prefix3;
  this.ac = len123;
  this.af = prefix4;
  this.a8 = len1234;
  this.ag = prefix5;
  this.a5 = len12345;
  this.U = data6;
  this.Z = suffix5;
  this.Y = suffix4;
  this.X = suffix3;
  this.W = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector6.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $p;
$p.v = (function(index) {
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.a5) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.U.a.length) ? this.U.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.Z.a.length) ? this.Z.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.Y.a.length) ? this.Y.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.X.a.length) ? this.X.a[i3].a[i2].a[i1] : ((i2 < this.W.a.length) ? this.W.a[i2].a[i1] : this.g.a[i1])))));
    } else if ((index >= this.a8)) {
      var io$2 = ((index - this.a8) | 0);
      return this.ag.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ac)) {
      var io$3 = ((index - this.ac) | 0);
      return this.af.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.am)) {
      var io$4 = ((index - this.am) | 0);
      return this.ae.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.au)) {
      var io$5 = ((index - this.au) | 0);
      return this.ad.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b8(index);
  }
});
$p.e5 = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.a5)) {
      var io = ((index - this.a5) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < this.U.a.length)) {
        var a6 = this.U;
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
        return new $c_sci_Vector6(this.d, this.au, this.ad, this.am, this.ae, this.ac, this.af, this.a8, this.ag, this.a5, a6c, this.Z, this.Y, this.X, this.W, this.g, this.h);
      } else if ((i5 < this.Z.a.length)) {
        var a5$1 = this.Z;
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
        return new $c_sci_Vector6(this.d, this.au, this.ad, this.am, this.ae, this.ac, this.af, this.a8, this.ag, this.a5, this.U, a5c$1, this.Y, this.X, this.W, this.g, this.h);
      } else if ((i4 < this.Y.a.length)) {
        var a4$2 = this.Y;
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
        return new $c_sci_Vector6(this.d, this.au, this.ad, this.am, this.ae, this.ac, this.af, this.a8, this.ag, this.a5, this.U, this.Z, a4c$2, this.X, this.W, this.g, this.h);
      } else if ((i3 < this.X.a.length)) {
        var a3$3 = this.X;
        var a3c$3 = a3$3.j();
        var a2$3 = a3c$3.a[i3];
        var a2c$3 = a2$3.j();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.j();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        a3c$3.a[i3] = a2c$3;
        return new $c_sci_Vector6(this.d, this.au, this.ad, this.am, this.ae, this.ac, this.af, this.a8, this.ag, this.a5, this.U, this.Z, this.Y, a3c$3, this.W, this.g, this.h);
      } else if ((i2 < this.W.a.length)) {
        var a2$4 = this.W;
        var a2c$4 = a2$4.j();
        var a1$4 = a2c$4.a[i2];
        var a1c$4 = a1$4.j();
        a1c$4.a[i1] = elem;
        a2c$4.a[i2] = a1c$4;
        return new $c_sci_Vector6(this.d, this.au, this.ad, this.am, this.ae, this.ac, this.af, this.a8, this.ag, this.a5, this.U, this.Z, this.Y, this.X, a2c$4, this.g, this.h);
      } else {
        var a1$5 = this.g;
        var a1c$5 = a1$5.j();
        a1c$5.a[i1] = elem;
        return new $c_sci_Vector6(this.d, this.au, this.ad, this.am, this.ae, this.ac, this.af, this.a8, this.ag, this.a5, this.U, this.Z, this.Y, this.X, this.W, a1c$5, this.h);
      }
    } else if ((index >= this.a8)) {
      var io$2 = ((index - this.a8) | 0);
      var a5$2 = this.ag;
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
      return new $c_sci_Vector6(this.d, this.au, this.ad, this.am, this.ae, this.ac, this.af, this.a8, a5c$2, this.a5, this.U, this.Z, this.Y, this.X, this.W, this.g, this.h);
    } else if ((index >= this.ac)) {
      var io$3 = ((index - this.ac) | 0);
      var a4$4 = this.af;
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
      return new $c_sci_Vector6(this.d, this.au, this.ad, this.am, this.ae, this.ac, a4c$4, this.a8, this.ag, this.a5, this.U, this.Z, this.Y, this.X, this.W, this.g, this.h);
    } else if ((index >= this.am)) {
      var io$4 = ((index - this.am) | 0);
      var a3$6 = this.ae;
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
      return new $c_sci_Vector6(this.d, this.au, this.ad, this.am, a3c$6, this.ac, this.af, this.a8, this.ag, this.a5, this.U, this.Z, this.Y, this.X, this.W, this.g, this.h);
    } else if ((index >= this.au)) {
      var io$5 = ((index - this.au) | 0);
      var a2$8 = this.ad;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.j();
      var a1$9 = a2c$8.a[idx2$3];
      var a1c$9 = a1$9.j();
      a1c$9.a[idx1$3] = elem;
      a2c$8.a[idx2$3] = a1c$9;
      return new $c_sci_Vector6(this.d, this.au, a2c$8, this.am, this.ae, this.ac, this.af, this.a8, this.ag, this.a5, this.U, this.Z, this.Y, this.X, this.W, this.g, this.h);
    } else {
      var a1$10 = this.d;
      var a1c$10 = a1$10.j();
      a1c$10.a[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.au, this.ad, this.am, this.ae, this.ac, this.af, this.a8, this.ag, this.a5, this.U, this.Z, this.Y, this.X, this.W, this.g, this.h);
    }
  } else {
    throw this.b8(index);
  }
});
$p.bt = (function(elem) {
  if ((this.g.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().ga(this.g, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.d, this.au, this.ad, this.am, this.ae, this.ac, this.af, this.a8, this.ag, this.a5, this.U, this.Z, this.Y, this.X, this.W, x$1, x$2);
  } else if ((this.W.a.length < 31)) {
    var x$18 = $m_sci_VectorStatics$().K(this.W, this.g);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$20 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.d, this.au, this.ad, this.am, this.ae, this.ac, this.af, this.a8, this.ag, this.a5, this.U, this.Z, this.Y, this.X, x$18, a, x$20);
  } else if ((this.X.a.length < 31)) {
    var x$35 = $m_sci_VectorStatics$().K(this.X, $m_sci_VectorStatics$().K(this.W, this.g));
    var x$36 = $m_sci_VectorStatics$().an;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$38 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.d, this.au, this.ad, this.am, this.ae, this.ac, this.af, this.a8, this.ag, this.a5, this.U, this.Z, this.Y, x$35, x$36, a$1, x$38);
  } else if ((this.Y.a.length < 31)) {
    var x$52 = $m_sci_VectorStatics$().K(this.Y, $m_sci_VectorStatics$().K(this.X, $m_sci_VectorStatics$().K(this.W, this.g)));
    var x$53 = $m_sci_VectorStatics$().bp;
    var x$54 = $m_sci_VectorStatics$().an;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$56 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.d, this.au, this.ad, this.am, this.ae, this.ac, this.af, this.a8, this.ag, this.a5, this.U, this.Z, x$52, x$53, x$54, a$2, x$56);
  } else if ((this.Z.a.length < 31)) {
    var x$69 = $m_sci_VectorStatics$().K(this.Z, $m_sci_VectorStatics$().K(this.Y, $m_sci_VectorStatics$().K(this.X, $m_sci_VectorStatics$().K(this.W, this.g))));
    var x$70 = $m_sci_VectorStatics$().cS;
    var x$71 = $m_sci_VectorStatics$().bp;
    var x$72 = $m_sci_VectorStatics$().an;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$74 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.d, this.au, this.ad, this.am, this.ae, this.ac, this.af, this.a8, this.ag, this.a5, this.U, x$69, x$70, x$71, x$72, a$3, x$74);
  } else if ((this.U.a.length < 62)) {
    var x$86 = $m_sci_VectorStatics$().K(this.U, $m_sci_VectorStatics$().K(this.Z, $m_sci_VectorStatics$().K(this.Y, $m_sci_VectorStatics$().K(this.X, $m_sci_VectorStatics$().K(this.W, this.g)))));
    var x$87 = $m_sci_VectorStatics$().hc;
    var x$88 = $m_sci_VectorStatics$().cS;
    var x$89 = $m_sci_VectorStatics$().bp;
    var x$90 = $m_sci_VectorStatics$().an;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var x$92 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.d, this.au, this.ad, this.am, this.ae, this.ac, this.af, this.a8, this.ag, this.a5, x$86, x$87, x$88, x$89, x$90, a$4, x$92);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.fq = (function(elem) {
  if ((this.au < 32)) {
    var x$1 = $m_sci_VectorStatics$().gb(elem, this.d);
    var x$2 = ((1 + this.au) | 0);
    var x$3 = ((1 + this.am) | 0);
    var x$4 = ((1 + this.ac) | 0);
    var x$5 = ((1 + this.a8) | 0);
    var x$6 = ((1 + this.a5) | 0);
    var x$7 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(x$1, x$2, this.ad, x$3, this.ae, x$4, this.af, x$5, this.ag, x$6, this.U, this.Z, this.Y, this.X, this.W, this.g, x$7);
  } else if ((this.am < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$20 = $m_sci_VectorStatics$().D(this.d, this.ad);
    var x$21 = ((1 + this.am) | 0);
    var x$22 = ((1 + this.ac) | 0);
    var x$23 = ((1 + this.a8) | 0);
    var x$24 = ((1 + this.a5) | 0);
    var x$25 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a, 1, x$20, x$21, this.ae, x$22, this.af, x$23, this.ag, x$24, this.U, this.Z, this.Y, this.X, this.W, this.g, x$25);
  } else if ((this.ac < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$37 = $m_sci_VectorStatics$().an;
    var x$39 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.ad), this.ae);
    var x$40 = ((1 + this.ac) | 0);
    var x$41 = ((1 + this.a8) | 0);
    var x$42 = ((1 + this.a5) | 0);
    var x$43 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$1, 1, x$37, 1, x$39, x$40, this.af, x$41, this.ag, x$42, this.U, this.Z, this.Y, this.X, this.W, this.g, x$43);
  } else if ((this.a8 < 1048576)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$54 = $m_sci_VectorStatics$().an;
    var x$56 = $m_sci_VectorStatics$().bp;
    var x$58 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.ad), this.ae), this.af);
    var x$59 = ((1 + this.a8) | 0);
    var x$60 = ((1 + this.a5) | 0);
    var x$61 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$2, 1, x$54, 1, x$56, 1, x$58, x$59, this.ag, x$60, this.U, this.Z, this.Y, this.X, this.W, this.g, x$61);
  } else if ((this.a5 < 33554432)) {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$71 = $m_sci_VectorStatics$().an;
    var x$73 = $m_sci_VectorStatics$().bp;
    var x$75 = $m_sci_VectorStatics$().cS;
    var x$77 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.ad), this.ae), this.af), this.ag);
    var x$78 = ((1 + this.a5) | 0);
    var x$79 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$3, 1, x$71, 1, x$73, 1, x$75, 1, x$77, x$78, this.U, this.Z, this.Y, this.X, this.W, this.g, x$79);
  } else if ((this.U.a.length < 62)) {
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var x$88 = $m_sci_VectorStatics$().an;
    var x$90 = $m_sci_VectorStatics$().bp;
    var x$92 = $m_sci_VectorStatics$().cS;
    var x$94 = $m_sci_VectorStatics$().hc;
    var x$96 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.ad), this.ae), this.af), this.ag), this.U);
    var x$97 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$4, 1, x$88, 1, x$90, 1, x$92, 1, x$94, 1, x$96, this.Z, this.Y, this.X, this.W, this.g, x$97);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.d3 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cK(this.d, f);
  var x$2 = $m_sci_VectorStatics$().aC(2, this.ad, f);
  var x$3 = $m_sci_VectorStatics$().aC(3, this.ae, f);
  var x$4 = $m_sci_VectorStatics$().aC(4, this.af, f);
  var x$5 = $m_sci_VectorStatics$().aC(5, this.ag, f);
  var x$6 = $m_sci_VectorStatics$().aC(6, this.U, f);
  var x$7 = $m_sci_VectorStatics$().aC(5, this.Z, f);
  var x$8 = $m_sci_VectorStatics$().aC(4, this.Y, f);
  var x$9 = $m_sci_VectorStatics$().aC(3, this.X, f);
  var x$10 = $m_sci_VectorStatics$().aC(2, this.W, f);
  var x$11 = $m_sci_VectorStatics$().cK(this.g, f);
  return new $c_sci_Vector6(x$1, this.au, x$2, this.am, x$3, this.ac, x$4, this.a8, x$5, this.a5, x$6, x$7, x$8, x$9, x$10, x$11, this.h);
});
$p.d8 = (function() {
  return 11;
});
$p.dr = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
      break;
    }
    case 1: {
      return this.ad;
      break;
    }
    case 2: {
      return this.ae;
      break;
    }
    case 3: {
      return this.af;
      break;
    }
    case 4: {
      return this.ag;
      break;
    }
    case 5: {
      return this.U;
      break;
    }
    case 6: {
      return this.Z;
      break;
    }
    case 7: {
      return this.Y;
      break;
    }
    case 8: {
      return this.X;
      break;
    }
    case 9: {
      return this.W;
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
$p.c8 = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().g6(this.g, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.g.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector6(this.d, this.au, this.ad, this.am, this.ae, this.ac, this.af, this.a8, this.ag, this.a5, this.U, this.Z, this.Y, this.X, this.W, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.c8.call(this, suffix, k);
  }
});
$p.L = (function(f) {
  return this.d3(f);
});
$p.R = (function(elem) {
  return this.bt(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.a5) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.U.a.length) ? this.U.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.Z.a.length) ? this.Z.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.Y.a.length) ? this.Y.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.X.a.length) ? this.X.a[i3].a[i2].a[i1] : ((i2 < this.W.a.length) ? this.W.a[i2].a[i1] : this.g.a[i1])))));
    } else if ((index >= this.a8)) {
      var io$2 = ((index - this.a8) | 0);
      return this.ag.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ac)) {
      var io$3 = ((index - this.ac) | 0);
      return this.af.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.am)) {
      var io$4 = ((index - this.am) | 0);
      return this.ae.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.au)) {
      var io$5 = ((index - this.au) | 0);
      return this.ad.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b8(index);
  }
});
function $isArrayOf_sci_Vector6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cM)));
}
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
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
  A: 1,
  t: 1,
  p: 1,
  G: 1,
  B: 1,
  u: 1,
  n: 1,
  M: 1,
  a: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.b7 = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.b7 = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.bd = (function() {
  return "IndexedSeq";
});
$p.f = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.L = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bI = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.b7.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bj = (function(size) {
});
$p.b2 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.m = (function() {
  return this.b7.m();
});
$p.s = (function() {
  return this.b7.m();
});
$p.s3 = (function(x) {
  var this$1 = this.b7;
  var str = ("" + $cToS(x));
  this$1.r = (this$1.r + str);
  return this;
});
$p.w = (function() {
  return this.b7.r;
});
$p.j6 = (function(ct) {
  return ((ct.bc() === $d_C.l()) ? this.vf() : $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, ct));
});
$p.vf = (function() {
  var len = this.b7.m();
  var arr = new $ac_C(len);
  this.b7.qM(0, len, arr, 0);
  return arr;
});
$p.pX = (function(xs) {
  if (false) {
    var this$3 = this.b7;
    var str = xs.vt;
    this$3.r = (("" + this$3.r) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.b7.pW(xs.cs);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.b7;
    var s = xs.b7;
    this$4.r = (("" + this$4.r) + s);
  } else {
    var ks = xs.s();
    if ((ks !== 0)) {
      var b = this.b7;
      if ((ks > 0)) {
        b.m();
      }
      var it = xs.f();
      while (it.l()) {
        var c = $uC(it.e());
        var str$1 = ("" + $cToS(c));
        b.r = (b.r + str$1);
      }
    }
  }
  return this;
});
$p.c = (function() {
  return (this.b7.m() === 0);
});
$p.aZ = (function() {
  return $m_scm_IndexedSeq$();
});
$p.aU = (function() {
  return this.b7.r;
});
$p.ax = (function(elem) {
  return this.s3($uC(elem));
});
$p.gd = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).pX(coll);
});
$p.ge = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).pX(coll);
});
$p.b = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.b7.qf(i));
});
$p.v = (function(i) {
  return $bC(this.b7.qf(i));
});
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d2)));
}
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  d2: 1,
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
  K: 1,
  J: 1,
  I: 1,
  V: 1,
  t: 1,
  p: 1,
  W: 1,
  b1: 1,
  a: 1
}));
function $isArrayOf_scm_LinkedHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iD)));
}
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().j5($thiz);
  $thiz.cA = buf.cA;
  $thiz.dU = buf.dU;
  $thiz.it = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.iu = ((1 + $thiz.iu) | 0);
  if ($thiz.it) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.iu = 0;
  this.cA = null;
  this.dU = null;
  this.it = false;
  this.cB = 0;
  this.iu = 0;
  this.cA = $m_sci_Nil$();
  this.dU = null;
  this.it = false;
  this.cB = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.bj = (function(size) {
});
$p.cH = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.R = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.L = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.f = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.cA.f(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.iu)));
});
$p.e0 = (function() {
  return $m_scm_ListBuffer$();
});
$p.v = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.cA, i);
});
$p.m = (function() {
  return this.cB;
});
$p.s = (function() {
  return this.cB;
});
$p.c = (function() {
  return (this.cB === 0);
});
$p.fs = (function() {
  this.it = (!this.c());
  return this.cA;
});
$p.sc = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.cB === 0)) {
    this.cA = last1;
  } else {
    this.dU.aV = last1;
  }
  this.dU = last1;
  this.cB = ((1 + this.cB) | 0);
  return this;
});
$p.j5 = (function(xs) {
  var it = xs.f();
  if (it.l()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.e(), $m_sci_Nil$());
    this.cA = last0;
    while (it.l()) {
      var last1 = new $c_sci_$colon$colon(it.e(), $m_sci_Nil$());
      last0.aV = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.cB = len;
    this.dU = last0;
  }
  return this;
});
$p.s1 = (function(xs) {
  var it = xs.f();
  if (it.l()) {
    var fresh = new $c_scm_ListBuffer().j5(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.cB === 0)) {
      this.cA = fresh.cA;
    } else {
      this.dU.aV = fresh.cA;
    }
    this.dU = fresh.dU;
    this.cB = ((this.cB + fresh.cB) | 0);
  }
  return this;
});
$p.bd = (function() {
  return "ListBuffer";
});
$p.b2 = (function(elems) {
  return this.s1(elems);
});
$p.ax = (function(elem) {
  return this.sc(elem);
});
$p.aU = (function() {
  return this.fs();
});
$p.b = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.cA, i);
});
$p.aZ = (function() {
  return $m_scm_ListBuffer$();
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d1)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  d1: 1,
  bf: 1,
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
  bg: 1,
  J: 1,
  I: 1,
  aN: 1,
  u: 1,
  n: 1,
  a9: 1,
  K: 1,
  M: 1,
  a: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.eo = 0;
  $thiz.en = initialElements;
  $thiz.b1 = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.eo = 0;
  this.en = null;
  this.b1 = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.cH = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.R = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.L = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.f = (function() {
  return this.vq().f();
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bI = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = this.b1;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.b1;
});
$p.l5 = (function(n) {
  this.en = $m_scm_ArrayBuffer$().rh(this.en, this.b1, n);
});
$p.bj = (function(size) {
  if (((size > this.b1) && (size >= 1))) {
    this.l5(size);
  }
});
$p.v = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().hy(n, (((-1) + this.b1) | 0));
  }
  if ((hi > this.b1)) {
    throw $m_scg_CommonErrors$().hy((((-1) + hi) | 0), (((-1) + this.b1) | 0));
  }
  return this.en.a[n];
});
$p.vo = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $m_scg_CommonErrors$().hy(index, (((-1) + this.b1) | 0));
  }
  if ((hi > this.b1)) {
    throw $m_scg_CommonErrors$().hy((((-1) + hi) | 0), (((-1) + this.b1) | 0));
  }
  this.eo = ((1 + this.eo) | 0);
  this.en.a[index] = elem;
});
$p.m = (function() {
  return this.b1;
});
$p.vq = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.eo)));
});
$p.e0 = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.s9 = (function(elem) {
  this.eo = ((1 + this.eo) | 0);
  var newSize = ((1 + this.b1) | 0);
  this.l5(newSize);
  this.b1 = newSize;
  this.vo((((-1) + this.b1) | 0), elem);
  return this;
});
$p.pS = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.b1;
    if ((elemsLength > 0)) {
      this.eo = ((1 + this.eo) | 0);
      this.l5(((this.b1 + elemsLength) | 0));
      $m_s_Array$().ca(elems.en, 0, this.en, this.b1, elemsLength);
      this.b1 = ((this.b1 + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.bd = (function() {
  return "ArrayBuffer";
});
$p.bV = (function(xs, start, len) {
  var srcLen = this.b1;
  var destLen = $m_jl_reflect_Array$().bW(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().ca(this.en, 0, xs, start, copied);
  }
  return copied;
});
$p.b2 = (function(elems) {
  return this.pS(elems);
});
$p.ax = (function(elem) {
  return this.s9(elem);
});
$p.aZ = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.b = (function(v1) {
  return this.v((v1 | 0));
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cN)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  cN: 1,
  bf: 1,
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
  bg: 1,
  J: 1,
  I: 1,
  aN: 1,
  d0: 1,
  V: 1,
  t: 1,
  p: 1,
  W: 1,
  u: 1,
  n: 1,
  M: 1,
  a: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.eB = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.eB = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.bj = (function(size) {
});
$p.bd = (function() {
  return "IndexedSeq";
});
$p.f = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.L = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.o = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bI = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.b3 = (function(len) {
  var x = (this.eB.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cH = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.R = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.e0 = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.v = (function(index) {
  return this.eB[index];
});
$p.m = (function() {
  return (this.eB.length | 0);
});
$p.s = (function() {
  return (this.eB.length | 0);
});
$p.c9 = (function() {
  return "WrappedArray";
});
$p.aU = (function() {
  return this;
});
$p.ax = (function(elem) {
  this.eB.push(elem);
  return this;
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  return this.eB[index];
});
$p.aZ = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  jw: 1,
  bf: 1,
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
  bg: 1,
  J: 1,
  I: 1,
  aN: 1,
  u: 1,
  n: 1,
  V: 1,
  t: 1,
  p: 1,
  W: 1,
  d0: 1,
  K: 1,
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
