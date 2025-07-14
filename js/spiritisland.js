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
        return null.uz();
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
    return instance.pA(x0, x1, x2, x3);
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
    return instance.uA(x0);
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
$p.w = (function() {
  var i = this.v();
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
$p.p = (function(srcPos, dest, destPos, length) {
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
$p.p = (function(srcPos, dest, destPos, length) {
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
$p.p = (function(srcPos, dest, destPos, length) {
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
$p.p = (function(srcPos, dest, destPos, length) {
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
$p.p = (function(srcPos, dest, destPos, length) {
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
$p.p = (function(srcPos, dest, destPos, length) {
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
$p.p = (function(srcPos, dest, destPos, length) {
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
$p.p = (function(srcPos, dest, destPos, length) {
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
$p.p = (function(srcPos, dest, destPos, length) {
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
    C: 1,
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
  $p.p = (function(srcPos, dest, destPos, length) {
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
    C: 1,
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
  $m_LMain$().sQ(args);
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
        var x21 = x19.eD;
        if ((x21 !== null)) {
          var d = x21.bB();
          var rest = x21.bw();
          var acc$tailLocal1$tmp1 = acc$tailLocal1.R(notMatchedString$tailLocal1).R(d);
          str$tailLocal1 = rest;
          notMatchedString$tailLocal1 = "";
          acc$tailLocal1 = acc$tailLocal1$tmp1;
          continue;
        }
      }
      if (($m_s_None$() === x19)) {
        var str$tailLocal1$tmp2 = $m_sc_StringOps$().pe(str$tailLocal1, 1);
        var notMatchedString$tailLocal1$tmp2 = (notMatchedString$tailLocal1 + $cToS($m_sc_StringOps$().sw(str$tailLocal1)));
        str$tailLocal1 = str$tailLocal1$tmp2;
        notMatchedString$tailLocal1 = notMatchedString$tailLocal1$tmp2;
        continue;
      }
      throw new $c_s_MatchError(x19);
    }
  }
}
function $p_LMain$__injectImages__sci_Vector__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, vec, s) {
  var wordsToReplace = $m_sci_Map$().pu($m_sr_ScalaRunTime$().z(new ($d_T2.r().C)([new $c_T2("City", "images/City.svg"), new $c_T2("Town", "images/Town.svg"), new $c_T2("Beasts", "images/Beasts.svg"), new $c_T2("Explorer", "images/Explorer.svg"), new $c_T2("Dahan", "images/Dahan.svg"), new $c_T2("Disease", "images/Disease.svg"), new $c_T2("Escalation", "images/Escalation.svg"), new $c_T2("Fear", "images/Fear.svg"), new $c_T2("Blight", "images/Blight.svg")])));
  var parts = $p_LMain$__splitWithDelimiters__sci_Vector__T__sci_List__T__sci_Vector__sci_Vector($thiz, vec, s, $m_sci_Nil$().ct(wordsToReplace.kK()), "", ($m_sci_Vector$(), $m_sci_Vector0$())).c8(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text) => {
    var x24 = wordsToReplace.fR(text);
    if ((x24 instanceof $c_s_Some)) {
      var value = x24.eD;
      return $m_Lcom_raquo_laminar_api_package$().x.sA().bC($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().x.tO().fH(value), $m_Lcom_raquo_laminar_api_package$().x.u6().fH("auto"), $m_Lcom_raquo_laminar_api_package$().x.sy().fH("1em")])));
    }
    if (($m_s_None$() === x24)) {
      return new $c_Lcom_raquo_laminar_nodes_TextNode(text);
    }
    throw new $c_s_MatchError(x24);
  })));
  return $m_Lcom_raquo_laminar_api_package$().x.tk().bC(parts);
}
function $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector($thiz, sel, stage) {
  return $f_sc_StrictOptimizedIterableOps__collect__s_PartialFunction__O(sel.cu.f9, new $c_LMain$$anon$3(stage, sel, $thiz));
}
function $p_LMain$__findDelimiterAtPosition$1__sci_List__T__s_Option($thiz, delimiters$1, subString) {
  return $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(delimiters$1, new $c_LMain$$anon$2(subString));
}
function $p_LMain$__newSection$lzyINIT1$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, newSection$lzy1$1, hideInCompact$1, sectionName$1, rulesDiv$1) {
  if ((newSection$lzy1$1 === null)) {
    throw new $c_jl_NullPointerException();
  }
  return (newSection$lzy1$1.hY ? newSection$lzy1$1.hZ : newSection$lzy1$1.sD((hideInCompact$1 ? $m_Lcom_raquo_laminar_api_package$().x.er().bC($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().x.il().i6($thiz.f8), $m_Lcom_raquo_laminar_api_package$().x.ez.fI(sectionName$1), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().x, $m_sci_Vector$().bs($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)([$m_Lcom_raquo_laminar_api_package$().x.pC().bC($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().x, sectionName$1, $m_Lcom_raquo_laminar_modifiers_RenderableText$().dW)]))), rulesDiv$1]))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())]))) : $m_Lcom_raquo_laminar_api_package$().x.er().bC($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().x.ez.fI(sectionName$1), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().x, $m_sci_Vector$().bs($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)([$m_Lcom_raquo_laminar_api_package$().x.pC().bC($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().x.sa().k8(new $c_Lcom_raquo_airstream_misc_MapSignal($thiz.f8, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => ((!(!_$4)) ? "0.5rem" : "1rem"))), $m_s_None$()), $m_s_$less$colon$less$().hJ), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().x, sectionName$1, $m_Lcom_raquo_laminar_modifiers_RenderableText$().dW)]))), rulesDiv$1]))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())]))))));
}
function $p_LMain$__newSection$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, newSection$lzy1$2, hideInCompact$2, sectionName$2, rulesDiv$2) {
  return (newSection$lzy1$2.hY ? newSection$lzy1$2.hZ : $p_LMain$__newSection$lzyINIT1$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, newSection$lzy1$2, hideInCompact$2, sectionName$2, rulesDiv$2));
}
/** @constructor */
function $c_LMain$() {
  this.ho = null;
  this.hp = null;
  this.iC = null;
  this.f8 = null;
  $n_LMain$ = this;
  this.ho = $m_Lcom_raquo_laminar_api_package$().x.iZ.oP(new $c_LMain$AdversarySelector($m_Ladversaries_Adversary$().iF, 6));
  this.hp = this.ho.gj;
  this.iC = $m_Lcom_raquo_laminar_api_package$().x.iZ.oP(false);
  this.f8 = this.iC.gj;
}
$p = $c_LMain$.prototype = new $h_O();
$p.constructor = $c_LMain$;
/** @constructor */
function $h_LMain$() {
}
$h_LMain$.prototype = $p;
$p.sQ = (function(args) {
  var container = document.getElementById("app");
  var this$3 = $m_Lcom_raquo_laminar_api_package$().x;
  var container$1 = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => container));
  var rootNode = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.rx()));
  var p = $m_Lcom_raquo_laminar_keys_EventProcessor$().ig(this$3.mo.th(), false, false);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream($m_Lcom_raquo_airstream_web_DomEventStream$().rh(document, p.eA.gp, p.go), p.gn), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    new $c_Lcom_raquo_laminar_nodes_RootNode(container$1.S(), rootNode.S());
  })), this$3.u1());
});
$p.rx = (function() {
  return $m_Lcom_raquo_laminar_api_package$().x.er().bC($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().x.sv().bC($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().x.il().i6(this.f8), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().x, "Spirit Island Adversary Tool", $m_Lcom_raquo_laminar_modifiers_RenderableText$().dW)]))), $m_Lcom_raquo_laminar_api_package$().x.er().bC($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().x.ez.fI("selectors"), this.tw(), this.tv()]))), this.tu()])));
});
$p.tw = (function() {
  var $x_6 = $m_Lcom_raquo_laminar_api_package$().x.er();
  var $x_5 = $m_sr_ScalaRunTime$();
  var $x_4 = $m_Lcom_raquo_laminar_api_package$().x.ez.fI("levelSelector");
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().x.il().i6(this.f8);
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().x.pB().bC($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().x, "Level", $m_Lcom_raquo_laminar_modifiers_RenderableText$().dW)])));
  var $x_1 = $m_Lcom_raquo_laminar_api_package$().x;
  var b = $m_sci_IndexedSeq$().aR();
  var it = new $c_sci_RangeIterator(1, 1, 6, false);
  while (it.e5) {
    var x0 = it.pQ();
    b.au($m_Lcom_raquo_laminar_api_package$().x.p2().bC($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().x, ("" + x0), $m_Lcom_raquo_laminar_modifiers_RenderableText$().dW), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().ig($m_Lcom_raquo_laminar_api_package$().x.ir(), false, false)).pO(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((x0) => (() => x0))(x0))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1$1) => {
      sink.fY(_$1$1);
    }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.ho, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((x0) => ((a, _$1) => new $c_LMain$AdversarySelector(a.cu, x0)))(x0)))))), $m_Lcom_raquo_laminar_api_package$().x.p1().k8(new $c_Lcom_raquo_airstream_misc_MapSignal(this.hp, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x0) => ((selected) => ((selected.bU === x0) ? "lightblue" : "")))(x0)), $m_s_None$()), $m_s_$less$colon$less$().hJ)]))));
  }
  return $x_6.bC($x_5.z(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_4, $x_3, $x_2, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_1, b.aW(), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
});
$p.tv = (function() {
  var $x_7 = $m_Lcom_raquo_laminar_api_package$().x.er();
  var $x_6 = $m_sr_ScalaRunTime$();
  var $x_5 = $m_Lcom_raquo_laminar_api_package$().x.ez.fI("adversarySelector");
  var $x_4 = $m_Lcom_raquo_laminar_api_package$().x.il().i6(this.f8);
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().x.pB().bC($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().x, "Adversary", $m_Lcom_raquo_laminar_modifiers_RenderableText$().dW)])));
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().x;
  var this$10 = $m_Ladversaries_Adversary$().l6;
  var f = ((adversary) => $m_Lcom_raquo_laminar_api_package$().x.p2().bC($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().x, adversary.gb, $m_Lcom_raquo_laminar_modifiers_RenderableText$().dW), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().ig($m_Lcom_raquo_laminar_api_package$().x.ir(), false, false)).pO(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Lcom_raquo_laminar_api_package$().x.sz()))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.fY(_$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.ho, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((adversary$2) => ((a, _$2) => new $c_LMain$AdversarySelector(adversary$2, a.bU)))(adversary)))))), $m_Lcom_raquo_laminar_api_package$().x.p1().k8(new $c_Lcom_raquo_airstream_misc_MapSignal(this.hp, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((adversary$3) => ((selected) => {
    var x = selected.cu;
    if (((x === null) ? (adversary$3 === null) : x.n(adversary$3))) {
      return "lightblue";
    } else {
      return "";
    }
  }))(adversary)), $m_s_None$()), $m_s_$less$colon$less$().hJ)]))));
  if ((this$10 === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var x0 = this$10.t();
    var h = new $c_sci_$colon$colon(f(x0), $m_sci_Nil$());
    var t = h;
    var rest = this$10.y();
    while ((rest !== $m_sci_Nil$())) {
      var x0$1 = rest.t();
      var nx = new $c_sci_$colon$colon(f(x0$1), $m_sci_Nil$());
      t.aS = nx;
      t = nx;
      rest = rest.y();
    }
    var $x_1 = h;
  }
  return $x_7.bC($x_6.z(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_5, $x_4, $x_3, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_2, $x_1, $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
});
$p.tu = (function() {
  return $m_Lcom_raquo_laminar_api_package$().x.er().bC($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().ig($m_Lcom_raquo_laminar_api_package$().x.ir(), false, false)).sX((void 0)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.fY(_$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.iC, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((isHidden, _$3) => (!(!(!isHidden))))))))), $m_Lcom_raquo_laminar_api_package$().x.tV().fH("Click for toggling compact view!"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildrenInserter$().rd(new $c_Lcom_raquo_airstream_misc_MapSignal(this.hp, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sel) => {
    var escalation = sel.cu.g8;
    var setup = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage());
    var afterRavage = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__AfterRavage__Ladversaries_Stage());
    var ravage = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage());
    var afterBuild = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__AfterBuild__Ladversaries_Stage());
    var highImmigration = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage());
    var build = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Build__Ladversaries_Stage());
    var explore = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage()).R(("Stage 2 Escalation: " + escalation));
    var lossCondition = sel.cu.ga;
    var ruleChanges = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage());
    var deckOrder = $f_sc_IndexedSeqOps__reverse__O(sel.cu.f9).ib(new $c_LMain$$anon$1(sel));
    var fear = $f_sc_LinearSeqOps__apply__I__O(sel.cu.g9, (((-1) + sel.bU) | 0));
    var setupWithDeckNFear = $m_sci_Vector$().bs($m_sr_ScalaRunTime$().z(new ($d_T.r().C)([("Deck Order: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Option$().pX(deckOrder), "", "", "")), ("Fear: " + fear)]))).rc(setup);
    return this.dK(this.dK(this.dK(this.dK(this.dK(this.dK(this.dK(this.dK(this.dK($m_sci_Vector$().bs($m_sr_ScalaRunTime$().sm(new ($d_sr_Nothing$.r().C)([]))), setupWithDeckNFear, "Setup", true), $m_s_Option$().pX(lossCondition).l2(), "Loss Condition", false), ruleChanges, "Rule Changes", false), highImmigration, "High Immigration", false), ravage, "Ravage", false), afterRavage, "After Ravage", false), build, "Build", false), afterBuild, "After Build", false), explore, "Explore", false);
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().nf, (void 0)))])));
});
$p.dK = (function(vec, rules, sectionName, hideInCompact) {
  var newSection$lzy1 = new $c_sr_LazyRef();
  var rulesDiv = $m_Lcom_raquo_laminar_api_package$().x.er().bC($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().x.ez.fI("rules"), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().x, rules.c8(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s) => $p_LMain$__injectImages__sci_Vector__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, vec, s)))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
  return ((!$f_sc_SeqOps__isEmpty__Z(rules)) ? vec.R($p_LMain$__newSection$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, newSection$lzy1, hideInCompact, sectionName, rulesDiv)) : vec);
});
var $d_LMain$ = new $TypeData().i($c_LMain$, "Main$", ({
  d4: 1
}));
var $n_LMain$;
function $m_LMain$() {
  if ((!$n_LMain$)) {
    $n_LMain$ = new $c_LMain$();
  }
  return $n_LMain$;
}
var $d_Lcom_raquo_airstream_core_InternalObserver = new $TypeData().i(1, "com.raquo.airstream.core.InternalObserver", ({
  aN: 1
}));
function $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T($thiz) {
  return (($objectGetClass($thiz).kA() + "@") + $thiz.v());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.f3();
  return ((x === (void 0)) ? $thiz.eZ() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().qp(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))), $m_s_PartialFunction$().hL, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.qp = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.pz = (function(onTry, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTry, handleObserverErrors, this);
});
var $d_Lcom_raquo_airstream_core_Observer$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$, "com.raquo.airstream.core.Observer$", ({
  dh: 1
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
$p.q5 = (function(this$, observer) {
  var index = (this$.indexOf(observer) | 0);
  var shouldRemove = (index !== (-1));
  if (shouldRemove) {
    this$.splice(index, 1);
  }
  return shouldRemove;
});
var $d_Lcom_raquo_airstream_core_ObserverList$ = new $TypeData().i($c_Lcom_raquo_airstream_core_ObserverList$, "com.raquo.airstream.core.ObserverList$", ({
  dk: 1
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
  this.fc = 0;
  this.fc = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.pS = (function() {
  if ((this.fc === 2147483647)) {
    this.fc = 1;
  } else {
    this.fc = ((1 + this.fc) | 0);
  }
  return this.fc;
});
var $d_Lcom_raquo_airstream_core_Signal$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Signal$, "com.raquo.airstream.core.Signal$", ({
  dl: 1
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
  this.iK = null;
  this.ll = null;
  this.iL = 0;
  this.iK = code;
  this.ll = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().hh();
  this.iL = ((x === (void 0)) ? 1 : ((1 + x.iL) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().hr === (-1)) || (this.iL > $m_Lcom_raquo_airstream_core_Transaction$().hr))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().cC(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().hr));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().bz) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().ew.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().kb(this);
  }
}
$p = $c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
}
$h_Lcom_raquo_airstream_core_Transaction.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction, "com.raquo.airstream.core.Transaction", ({
  dm: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.hr = 0;
  this.lm = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.hr = 1000;
  this.lm = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."));
  }));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $p;
$p.p5 = (function(transaction) {
  try {
    transaction.iK.b(transaction);
    var x = transaction.ll;
    if ((x !== (void 0))) {
      while (x.uE()) {
        x.us().uJ(transaction);
      }
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cC(e$2);
  }
});
var $d_Lcom_raquo_airstream_core_Transaction$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$, "com.raquo.airstream.core.Transaction$", ({
  dn: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$;
function $m_Lcom_raquo_airstream_core_Transaction$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$)) {
    $n_Lcom_raquo_airstream_core_Transaction$ = new $c_Lcom_raquo_airstream_core_Transaction$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$;
}
function $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V($thiz) {
  if ((($thiz.hs.length | 0) === 0)) {
    if ((($thiz.ew.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
        while ((($thiz.ew.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().kb($thiz.ew.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
      while ((($thiz.hs.length | 0) > 0)) {
        var callback = $thiz.hs.shift();
        try {
          callback.b(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().cC(e$2);
        }
      }
      while ((($thiz.ew.length | 0) > 0)) {
        var _trx = $thiz.ew.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().kb(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.bz = false;
  this.hs = null;
  this.ew = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.bz = false;
  this.hs = $m_Lcom_raquo_ew_JsArray$().bL($m_sr_ScalaRunTime$().z(new ($d_F1.r().C)([])));
  this.ew = $m_Lcom_raquo_ew_JsArray$().bL($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$onStart$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$onStart$() {
}
$h_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction$onStart$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$onStart$, "com.raquo.airstream.core.Transaction$onStart$", ({
  dp: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$onStart$;
function $m_Lcom_raquo_airstream_core_Transaction$onStart$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$onStart$)) {
    $n_Lcom_raquo_airstream_core_Transaction$onStart$ = new $c_Lcom_raquo_airstream_core_Transaction$onStart$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$onStart$;
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, transaction) {
  return $thiz.ex.get(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.ht.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.ht.shift();
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().bL($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.ex.set(parent, newChildren);
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
      (!(!$thiz.ex.delete(parent)));
    }
    return nextChild;
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.ht = null;
  this.ex = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.ht = $m_Lcom_raquo_ew_JsArray$().bL($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.ex = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.kb = (function(newTransaction) {
  var x = this.hh();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().p5(newTransaction);
    this.rY(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.rY = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.hh();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().k(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.tl(transaction$tailLocal1);
    transaction$tailLocal1.iK = $m_Lcom_raquo_airstream_core_Transaction$().lm;
    var maybeNextTransaction = this.hh();
    if ($m_sr_BoxesRunTime$().k(maybeNextTransaction, (void 0))) {
      if (((this.ex.size | 0) > 0)) {
        var numChildren = new $c_sr_IntRef(0);
        this.ex.forEach(((numChildren) => ((transactions, _$4) => {
          var ev$12 = ((numChildren.aP + (transactions.length | 0)) | 0);
          numChildren.aP = ev$12;
        }))(numChildren));
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.aP) + " children for ") + (this.ex.size | 0)) + " transactions remain. This is a bug in Airstream."));
      } else {
        return (void 0);
      }
    } else {
      $m_Lcom_raquo_airstream_core_Transaction$().p5(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.tl = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().k(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.hh();
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
$p.hh = (function() {
  return this.ht[0];
});
var $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$, "com.raquo.airstream.core.Transaction$pendingTransactions$", ({
  dq: 1
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
  this.lq = null;
  this.lo = null;
  this.lp = null;
  this.lq = onWillStart;
  this.lo = onStart;
  this.lp = onStop;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$Config;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$Config() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = $p;
var $d_Lcom_raquo_airstream_custom_CustomSource$Config = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config, "com.raquo.airstream.custom.CustomSource$Config", ({
  dt: 1
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
$p.ri = (function(onStart, onStop) {
  return new $c_Lcom_raquo_airstream_custom_CustomSource$Config(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => (void 0))), onStart, onStop);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config$, "com.raquo.airstream.custom.CustomSource$Config$", ({
  du: 1
}));
var $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
function $m_Lcom_raquo_airstream_custom_CustomSource$Config$() {
  if ((!$n_Lcom_raquo_airstream_custom_CustomSource$Config$)) {
    $n_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $c_Lcom_raquo_airstream_custom_CustomSource$Config$();
  }
  return $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscription) {
  var index = ($thiz.dU.indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.dU.splice(index, 1);
    if ((!$thiz.cc.c())) {
      subscription.pV();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.hy.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.hy.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.lN = null;
  this.dU = null;
  this.fd = false;
  this.hy = null;
  this.cc = null;
  this.fe = 0;
  this.lN = onAccessAfterKilled;
  this.dU = $m_Lcom_raquo_ew_JsArray$().bL($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.fd = true;
  this.hy = $m_Lcom_raquo_ew_JsArray$().bL($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.cc = $m_s_None$();
  this.fe = 0;
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $p;
$p.oD = (function() {
  if ((!(!this.cc.c()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.lN);
      this.cc = new $c_s_Some(newOwner);
      this.fd = false;
      this.fe = 0;
      var i = 0;
      var originalNumSubs = (this.dU.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.fe) | 0);
        this.dU[ix].pU(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.fd = true;
      this.fe = 0;
    });
    $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var when = true;
    if ((this$4.bz || (!when))) {
      f();
    } else {
      this$4.bz = true;
      try {
        f();
      } finally {
        this$4.bz = false;
        $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$4);
      }
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"));
  }
});
$p.rT = (function() {
  if ((!this.cc.c())) {
    this.fd = false;
    var arr = this.dU;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].pV();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.cc;
    if ((!this$4.c())) {
      this$4.T().pL();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.fd = true;
    this.cc = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.r8 = (function(subscription, prepend) {
  if (prepend) {
    this.fe = ((1 + this.fe) | 0);
    this.dU.unshift(subscription);
  } else {
    this.dU.push(subscription);
  }
  var this$1 = this.cc;
  if ((!this$1.c())) {
    var x0 = this$1.T();
    subscription.pU(x0);
  }
});
$p.ts = (function(subscription) {
  if (this.fd) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.hy.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  dy: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.hz = null;
  this.lO = null;
  this.hA = null;
  this.hz = dynamicOwner;
  this.lO = activate;
  this.hA = $m_s_None$();
  dynamicOwner.r8(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.io = (function() {
  this.hz.ts(this);
});
$p.pU = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.hA = this.lO.b(owner);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bz || (!when))) {
    f();
  } else {
    this$2.bz = true;
    try {
      f();
    } finally {
      this$2.bz = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
$p.pV = (function() {
  var this$1 = this.hA;
  if ((!this$1.c())) {
    this$1.T().io();
    this.hA = $m_s_None$();
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription, "com.raquo.airstream.ownership.DynamicSubscription", ({
  dz: 1
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
$p.hl = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => new $c_s_Some(activate.b(owner)))), prepend);
});
$p.qh = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => {
    activate.b(owner);
    return $m_s_None$();
  })), prepend);
});
$p.tP = (function(dynamicOwner, observable, onNext) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().hl(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(observable, onNext, owner))), false);
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription$, "com.raquo.airstream.ownership.DynamicSubscription$", ({
  dA: 1
}));
var $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
function $m_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  if ((!$n_Lcom_raquo_airstream_ownership_DynamicSubscription$)) {
    $n_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $c_Lcom_raquo_airstream_ownership_DynamicSubscription$();
  }
  return $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
}
function $f_Lcom_raquo_airstream_ownership_Owner__$init$__V($thiz) {
  $thiz.p6($m_Lcom_raquo_ew_JsArray$().bL($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.g2();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.g2().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.g2().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.g2().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.g2().push(subscription);
}
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.iS)) {
    $thiz.lR.S();
    $thiz.iS = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.lS = null;
  this.lR = null;
  this.iS = false;
  this.lS = owner;
  this.lR = cleanup;
  this.iS = false;
  owner.q1(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.io = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this.lS, this);
});
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  dC: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.lT = null;
  this.lU = null;
  this.dV = null;
  this.ey = false;
  this.lT = activate;
  this.lU = deactivate;
  this.dV = $m_s_None$();
  this.ey = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.sH = (function() {
  var this$1 = this.dV;
  return ((!this$1.c()) && (!this$1.T().hz.cc.c()));
});
$p.tI = (function(nextOwner) {
  if (this.ey) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.dV;
  if ((!this$1.c())) {
    var x0 = this$1.T();
    var x$2 = x0.hz;
    var $x_1 = (nextOwner === x$2);
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.sH() && (!nextOwner.cc.c()))) {
      this.ey = true;
    }
    var this$3 = this.dV;
    if ((!this$3.c())) {
      this$3.T().io();
      this.dV = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().hl(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((parentOwner) => {
      if ((!this.ey)) {
        this.lT.S();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        if ((!this.ey)) {
          this.lU.S();
        }
      })));
    })), false);
    this.dV = new $c_s_Some(newPilotSubscription);
    this.ey = false;
  }
});
$p.ru = (function() {
  if (this.ey) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.dV;
  if ((!this$1.c())) {
    this$1.T().io();
  }
  this.dV = $m_s_None$();
});
var $d_Lcom_raquo_airstream_ownership_TransferableSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_TransferableSubscription, "com.raquo.airstream.ownership.TransferableSubscription", ({
  dD: 1
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
$p.oP = (function(initial) {
  return new $c_Lcom_raquo_airstream_state_SourceVar(new $c_s_util_Success(initial));
});
var $d_Lcom_raquo_airstream_state_Var$ = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$, "com.raquo.airstream.state.Var$", ({
  dH: 1
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
$p.rh = (function(eventTarget, eventKey, useCapture) {
  return new $c_Lcom_raquo_airstream_custom_CustomStreamSource(new $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(((fireValue, _$1, _$2, _$3) => {
    var eventHandler = $m_sjs_js_Any$().px(fireValue);
    return $m_Lcom_raquo_airstream_custom_CustomSource$Config$().ri(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.addEventListener(eventKey, eventHandler, useCapture);
    })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.removeEventListener(eventKey, eventHandler, useCapture);
    })));
  })));
});
var $d_Lcom_raquo_airstream_web_DomEventStream$ = new $TypeData().i($c_Lcom_raquo_airstream_web_DomEventStream$, "com.raquo.airstream.web.DomEventStream$", ({
  dL: 1
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
$p.bL = (function(items) {
  return [...$m_sjsr_Compat$().tX(items)];
});
var $d_Lcom_raquo_ew_JsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$, "com.raquo.ew.JsArray$", ({
  dM: 1
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
$p.sB = (function(this$, item, fromIndex) {
  return ((this$.indexOf(item, fromIndex) | 0) !== (-1));
});
$p.sb = (function(this$, cb) {
  var i = 0;
  var len = (this$.length | 0);
  while ((i < len)) {
    cb(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_Lcom_raquo_ew_JsArray$RichJsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$RichJsArray$, "com.raquo.ew.JsArray$RichJsArray$", ({
  dN: 1
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
  this.m6 = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.rR($m_Lcom_raquo_laminar_api_package$().x.tQ().tR());
  this.m6 = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.ra = (function(parent, child) {
  try {
    parent.appendChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.aG instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.aG : e$2);
  }
});
$p.tp = (function(parent, child) {
  try {
    parent.removeChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.aG instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.aG : e$2);
  }
});
$p.sF = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.aG instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.aG : e$2);
  }
});
$p.sE = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild.nextSibling);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.aG instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.aG : e$2);
  }
});
$p.sL = (function(node, ancestor) {
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
$p.qX = (function(element, listener) {
  element.addEventListener(listener.fj.eA.gp, listener.ja, listener.jb);
});
$p.tq = (function(element, listener) {
  element.removeEventListener(listener.fj.eA.gp, listener.ja, listener.jb);
});
$p.rQ = (function(tag) {
  return document.createElement(tag.ji);
});
$p.so = (function(element, attr) {
  var x = this.sp(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.j4.km(x));
});
$p.sp = (function(element, attr) {
  var domValue = element.bu.getAttributeNS(null, attr.gq);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.qd = (function(element, attr, value) {
  this.tG(element, attr, attr.j4.h4(value));
});
$p.tG = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.tr(element, attr);
  } else {
    element.bu.setAttribute(attr.gq, domValue);
  }
});
$p.tr = (function(element, attr) {
  element.bu.removeAttribute(attr.gq);
});
$p.sq = (function(element, prop) {
  return element.bu[prop.dh];
});
$p.qe = (function(element, prop, value) {
  this.qf(element, prop, prop.j5.h4(value));
});
$p.qf = (function(element, prop, value) {
  element.bu[prop.dh] = value;
});
$p.tH = (function(element, styleProp, value) {
  var ref = element.bu;
  var styleCssName = styleProp.fh;
  var prefixes = styleProp.fi;
  var styleValue = ((value === null) ? null : value);
  if ((styleValue === null)) {
    prefixes.N(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((prefix) => ref.style.removeProperty((("" + prefix) + styleCssName)))));
    ref.style.removeProperty(styleCssName);
  } else {
    prefixes.N(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((prefix$2) => {
      var \u03b41$ = ref.style;
      \u03b41$.setProperty((("" + prefix$2) + styleCssName), styleValue);
    })));
    var \u03b42$ = ref.style;
    \u03b42$.setProperty(styleCssName, styleValue);
  }
});
$p.tF = (function(element, style, value) {
  var ref = element.bu;
  var styleCssName = style.fh;
  var prefixes = style.fi;
  var styleValue = ((value === null) ? null : $dp_toString__T(value));
  if ((styleValue === null)) {
    prefixes.N(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((prefix) => ref.style.removeProperty((("" + prefix) + styleCssName)))));
    ref.style.removeProperty(styleCssName);
  } else {
    prefixes.N(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((prefix$2) => {
      var \u03b41$ = ref.style;
      \u03b41$.setProperty((("" + prefix$2) + styleCssName), styleValue);
    })));
    var \u03b42$ = ref.style;
    \u03b42$.setProperty(styleCssName, styleValue);
  }
});
$p.rR = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.nm);
});
$p.st = (function(element, attr) {
  var x = this.su(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.j6.km(x));
});
$p.su = (function(element, attr) {
  var $x_2 = element.kU();
  var this$2 = attr.hF;
  var $x_1 = $x_2.getAttributeNS((this$2.c() ? null : this$2.T()), attr.j7);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.tK = (function(element, attr, value) {
  this.tL(element, attr, attr.j6.h4(value));
});
$p.tL = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.tt(element, attr);
  } else {
    var this$1 = attr.hF;
    if (this$1.c()) {
      element.kU().setAttribute(attr.hE, domValue);
    } else {
      var x0 = this$1.T();
      element.kU().setAttributeNS(x0, attr.hE, domValue);
    }
  }
});
$p.tt = (function(element, attr) {
  var $x_1 = element.kU();
  var this$2 = attr.hF;
  $x_1.removeAttributeNS((this$2.c() ? null : this$2.T()), attr.j7);
});
$p.rP = (function(text) {
  return document.createComment(text);
});
$p.rS = (function(text) {
  return document.createTextNode(text);
});
$p.sI = (function(element) {
  return $m_sc_StringOps$().rw(element.tagName, 45);
});
$p.rV = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.pc(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.pc = (function(node) {
  if ((!(!(node instanceof HTMLElement)))) {
    var id = node.id;
    if ((id !== "")) {
      var suffixStr = ("#" + id);
    } else {
      var classes = node.className;
      var suffixStr = ((classes !== "") ? ("." + classes.replace(this.m6, ".")) : "");
    }
    return (node.tagName.toLowerCase() + suffixStr);
  } else {
    return node.nodeName;
  }
});
$p.rU = (function(node) {
  return ((!(!(node instanceof Element))) ? node.outerHTML : ((!(!(node instanceof Text))) ? (("Text(" + node.textContent) + ")") : ((!(!(node instanceof Comment))) ? (("Comment(" + node.textContent) + ")") : ((node === null) ? "<null>" : (("OtherNode(" + $dp_toString__T(node)) + ")")))));
});
var $d_Lcom_raquo_laminar_DomApi$ = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$, "com.raquo.laminar.DomApi$", ({
  dO: 1
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
  this.iY = null;
  this.m7 = null;
  this.iX = null;
  this.iY = seq;
  this.m7 = scalaArray;
  this.iX = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.N = (function(f) {
  if ((this.iY !== null)) {
    this.iY.N(f);
  } else if ((this.iX !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().sb(this.iX, $m_sjs_js_Any$().px(f));
  } else {
    $m_sc_ArrayOps$().sc(this.m7, f);
  }
});
var $d_Lcom_raquo_laminar_Seq = new $TypeData().i($c_Lcom_raquo_laminar_Seq, "com.raquo.laminar.Seq", ({
  dP: 1
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
  dQ: 1
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
  $thiz.iZ = $m_Lcom_raquo_airstream_state_Var$();
}
function $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V($thiz) {
  $thiz.qs = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    _$1.n6.bu.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.cD.cc.c()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((c) => {
      if (ignoreNextActivation.hX) {
        var ev$5 = false;
        ignoreNextActivation.hX = ev$5;
      } else {
        fn.b(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().qh(element.cD, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((owner) => {
      activate.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element$2, owner));
    }))(element)), false);
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.ff = null;
  this.j0 = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.ff = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  this.j0 = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
}
$p = $c_Lcom_raquo_laminar_codecs_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$() {
}
$h_Lcom_raquo_laminar_codecs_package$.prototype = $p;
var $d_Lcom_raquo_laminar_codecs_package$ = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$, "com.raquo.laminar.codecs.package$", ({
  e0: 1
}));
var $n_Lcom_raquo_laminar_codecs_package$;
function $m_Lcom_raquo_laminar_codecs_package$() {
  if ((!$n_Lcom_raquo_laminar_codecs_package$)) {
    $n_Lcom_raquo_laminar_codecs_package$ = new $c_Lcom_raquo_laminar_codecs_package$();
  }
  return $n_Lcom_raquo_laminar_codecs_package$;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V($thiz) {
  $thiz.ml = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
  $thiz.ez = $thiz.ml;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().ff);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.gq, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().so(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().qd(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.qr = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().ff, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.hE, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().st(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().tK(el$2, attr, value);
  })), separator);
}
/** @constructor */
function $c_Lcom_raquo_laminar_inputs_InputController$() {
  this.mZ = null;
  $n_Lcom_raquo_laminar_inputs_InputController$ = this;
  $m_Lcom_raquo_laminar_api_package$().x.qo();
  $m_Lcom_raquo_ew_JsArray$().bL($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().x.kR()])));
  $m_Lcom_raquo_laminar_api_package$().x.qo();
  $m_Lcom_raquo_ew_JsArray$().bL($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().x.kR(), $m_Lcom_raquo_laminar_api_package$().x.tg()])));
  $m_Lcom_raquo_laminar_api_package$().x.rs();
  $m_Lcom_raquo_ew_JsArray$().bL($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().x.kR(), $m_Lcom_raquo_laminar_api_package$().x.ir()])));
  this.mZ = $m_Lcom_raquo_ew_JsArray$().bL($m_sr_ScalaRunTime$().z(new ($d_T.r().C)(["value", "checked"])));
}
$p = $c_Lcom_raquo_laminar_inputs_InputController$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inputs_InputController$;
/** @constructor */
function $h_Lcom_raquo_laminar_inputs_InputController$() {
}
$h_Lcom_raquo_laminar_inputs_InputController$.prototype = $p;
var $d_Lcom_raquo_laminar_inputs_InputController$ = new $TypeData().i($c_Lcom_raquo_laminar_inputs_InputController$, "com.raquo.laminar.inputs.InputController$", ({
  ei: 1
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
  var prevChildRef = new $c_sr_ObjectRef(sentinelNode.aJ().nextSibling);
  var lastIndexChild = new $c_sr_ObjectRef(sentinelNode);
  nextChildren.N(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextChild) => {
    if ((currentChildrenCount.aP <= index.aP)) {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().kE(parentNode, nextChild, lastIndexChild.ak, hooks);
      var ev$2 = nextChild.aJ();
      prevChildRef.ak = ev$2;
      ev$2 = null;
      var ev$3 = ((1 + currentChildrenCount.aP) | 0);
      currentChildrenCount.aP = ev$3;
    } else if ((!$m_sr_BoxesRunTime$().k(nextChild.aJ(), prevChildRef.ak))) {
      if ((!(!(!prevChildren.has(nextChild.aJ()))))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().kE(parentNode, nextChild, lastIndexChild.ak, hooks);
        var ev$4 = nextChild.aJ();
        prevChildRef.ak = ev$4;
        ev$4 = null;
        var ev$5 = ((1 + currentChildrenCount.aP) | 0);
        currentChildrenCount.aP = ev$5;
      } else {
        while (((!$m_sr_BoxesRunTime$().k(nextChild.aJ(), prevChildRef.ak)) && (!$p_Lcom_raquo_laminar_inserters_ChildrenInserter$__containsRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Z($thiz, nextChildrenMap, prevChildRef.ak)))) {
          var nextPrevChildRef = prevChildRef.ak.nextSibling;
          $m_Lcom_raquo_laminar_nodes_ParentNode$().q4(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.ak));
          var ev$6 = nextPrevChildRef;
          prevChildRef.ak = ev$6;
          ev$6 = null;
          var ev$7 = (((-1) + currentChildrenCount.aP) | 0);
          currentChildrenCount.aP = ev$7;
        }
        if ((!$m_sr_BoxesRunTime$().k(nextChild.aJ(), prevChildRef.ak))) {
          $m_Lcom_raquo_laminar_nodes_ParentNode$().kE(parentNode, nextChild, lastIndexChild.ak, hooks);
          var ev$8 = nextChild.aJ();
          prevChildRef.ak = ev$8;
          ev$8 = null;
        }
      }
    }
    if ((prevChildRef.ak.nextSibling === null)) {
      var ev$9 = ((1 + index.aP) | 0);
      currentChildrenCount.aP = ev$9;
    } else {
      var ev$10 = prevChildRef.ak.nextSibling;
      prevChildRef.ak = ev$10;
      ev$10 = null;
    }
    var ev$11 = nextChild;
    lastIndexChild.ak = ev$11;
    ev$11 = null;
    var ev$12 = ((1 + index.aP) | 0);
    index.aP = ev$12;
  })));
  while ((index.aP < currentChildrenCount.aP)) {
    var nextPrevChildRef$1 = prevChildRef.ak.nextSibling;
    $m_Lcom_raquo_laminar_nodes_ParentNode$().q4(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.ak));
    var ev$13 = nextPrevChildRef$1;
    prevChildRef.ak = ev$13;
    ev$13 = null;
    var ev$14 = (((-1) + currentChildrenCount.aP) | 0);
    currentChildrenCount.aP = ev$14;
  }
  return currentChildrenCount.aP;
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
$p.rd = (function(childrenSource, renderableSeq, renderableNode, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((ctx, owner, hooks) => {
    if ((!ctx.gm)) {
      ctx.pq();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childrenSource, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx$2) => ((components) => {
      this.tS(($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(components, null, null)), ctx$2, hooks);
    }))(ctx)), owner);
  })), initialHooks);
});
$p.tS = (function(newChildren, ctx, hooks) {
  if ((!ctx.gm)) {
    ctx.pq();
  }
  var newChildrenMap = $m_Lcom_raquo_laminar_inserters_InsertContext$().te(newChildren);
  ctx.gk = $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__updateChildren__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_Seq__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__I__O__I(this, ctx.fg, newChildren, newChildrenMap, ctx.hC, ctx.gl, ctx.gk, hooks);
  ctx.fg = newChildrenMap;
});
var $d_Lcom_raquo_laminar_inserters_ChildrenInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildrenInserter$, "com.raquo.laminar.inserters.ChildrenInserter$", ({
  ej: 1
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
  this.hC = null;
  this.gl = null;
  this.gm = false;
  this.gk = 0;
  this.fg = null;
  this.hC = parentNode;
  this.gl = sentinelNode;
  this.gm = strictMode;
  this.gk = extraNodeCount;
  this.fg = extraNodesMap;
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext.prototype = $p;
$p.pq = (function() {
  if ((this.gm || (this.gk !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().rU(this.hC.bu)));
  }
  if ((this.fg === null)) {
    this.fg = new Map();
  }
  if ((!(!(!(this.gl.aJ() instanceof Comment))))) {
    var contentNode = this.gl;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().sF(this.hC.bu, newSentinelNode.jc, contentNode.aJ());
    this.gl = newSentinelNode;
    this.gk = 1;
    this.fg.set(contentNode.aJ(), contentNode);
  }
  this.gm = true;
});
var $d_Lcom_raquo_laminar_inserters_InsertContext = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext, "com.raquo.laminar.inserters.InsertContext", ({
  em: 1
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
$p.tx = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fL(parentNode, sentinelNode, hooks);
  return this.u0(parentNode, sentinelNode, strictMode);
});
$p.u0 = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, 0, (strictMode ? new Map() : null));
});
$p.te = (function(nodes) {
  var acc = new Map();
  nodes.N(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((node) => {
    acc.set(node.aJ(), node);
  })));
  return acc;
});
var $d_Lcom_raquo_laminar_inserters_InsertContext$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext$, "com.raquo.laminar.inserters.InsertContext$", ({
  en: 1
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
$p.pT = (function(items, separator) {
  return ((items === "") ? $m_sci_Nil$() : $m_sci_Nil$().ct($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), items.split(separator).filter(((_$1) => (_$1 !== ""))))));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$, "com.raquo.laminar.keys.CompositeKey$", ({
  eq: 1
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
  this.eA = null;
  this.go = false;
  this.hD = false;
  this.gn = null;
  this.eA = eventProp;
  this.go = shouldUseCapture;
  this.hD = shouldBePassive;
  this.gn = processor;
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $p;
$p.pO = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.gn.b(ev);
    return (this$2.c() ? $m_s_None$() : new $c_s_Some((this$2.T(), value.S())));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.eA, this.go, this.hD, newProcessor);
});
$p.sX = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.gn.b(ev);
    return (this$2.c() ? $m_s_None$() : new $c_s_Some((this$2.T(), value)));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.eA, this.go, this.hD, newProcessor);
});
var $d_Lcom_raquo_laminar_keys_EventProcessor = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor, "com.raquo.laminar.keys.EventProcessor", ({
  eu: 1
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
$p.ig = (function(eventProp, shouldUseCapture, shouldBePassive) {
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$14) => new $c_s_Some(_$14))));
});
var $d_Lcom_raquo_laminar_keys_EventProcessor$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor$, "com.raquo.laminar.keys.EventProcessor$", ({
  ev: 1
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
  this.qu = null;
  this.qv = null;
  this.qw = null;
  this.qx = null;
  this.qu = "http://www.w3.org/2000/svg";
  this.qv = "http://www.w3.org/1999/xlink";
  this.qw = "http://www.w3.org/XML/1998/namespace";
  this.qx = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.t1 = (function(namespace) {
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
  ez: 1
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
  this.n6 = null;
  this.j8 = null;
  this.n6 = thisNode;
  this.j8 = owner;
}
$p = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
}
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $p;
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().i($c_Lcom_raquo_laminar_lifecycle_MountContext, "com.raquo.laminar.lifecycle.MountContext", ({
  eA: 1
}));
var $d_Lcom_raquo_laminar_modifiers_Modifier = new $TypeData().i(1, "com.raquo.laminar.modifiers.Modifier", ({
  Y: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$() {
  this.qy = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.qy = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_Modifier$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$, "com.raquo.laminar.modifiers.Modifier$", ({
  eF: 1
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
  this.nf = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  this.nf = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$, "com.raquo.laminar.modifiers.RenderableNode$", ({
  eJ: 1
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
  this.dW = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableText$ = this;
  this.dW = new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x) => x)), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => ("" + (_$1 | 0)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => ("" + (+_$2)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => ("" + (!(!_$3))))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => _$4.tU())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableText$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$, "com.raquo.laminar.modifiers.RenderableText$", ({
  eO: 1
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
$p.fL = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.hn(nextParent);
  if ((hooks !== (void 0))) {
    hooks.ti(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().ra(parent.aJ(), child.aJ());
  if (appended) {
    child.hi(nextParent);
  }
  return appended;
});
$p.q4 = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().k(child.aJ().parentNode, parent.aJ())) {
    child.hn($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().tp(parent.aJ(), child.aJ());
    child.hi($m_s_None$());
  }
  return removed;
});
$p.kE = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.hn(nextParent);
  if ((hooks !== (void 0))) {
    hooks.ti(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().sE(parent.aJ(), newChild.aJ(), referenceChild.aJ());
  newChild.hi(nextParent);
  return inserted;
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ParentNode$, "com.raquo.laminar.nodes.ParentNode$", ({
  eR: 1
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
$p.tZ = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().hl(element.cD, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$, "com.raquo.laminar.nodes.ReactiveElement$", ({
  eT: 1
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
  eX: 1
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
  this.qz = false;
  this.gs = null;
  this.fk = null;
  this.jm = null;
  this.jl = false;
  this.nn = 0;
  this.no = 0;
  this.qA = null;
  $n_jl_FloatingPointBits$ = this;
  this.qz = true;
  this.gs = new ArrayBuffer(8);
  this.fk = new Int32Array(this.gs, 0, 2);
  new Float32Array(this.gs, 0, 2);
  this.jm = new Float64Array(this.gs, 0, 1);
  this.fk[0] = 16909060;
  this.jl = ((new Int8Array(this.gs, 0, 8)[0] | 0) === 1);
  this.nn = (this.jl ? 0 : 1);
  this.no = (this.jl ? 1 : 0);
  this.qA = null;
}
$p = $c_jl_FloatingPointBits$.prototype = new $h_O();
$p.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
}
$h_jl_FloatingPointBits$.prototype = $p;
$p.kQ = (function(value) {
  var iv = ((value | 0.0) | 0);
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv;
  } else {
    this.jm[0] = value;
    return ((this.fk[0] | 0) ^ (this.fk[1] | 0));
  }
});
$p.rZ = (function(value) {
  this.jm[0] = value;
  var value$1 = (this.fk[this.nn] | 0);
  return new $c_RTLong((this.fk[this.no] | 0), value$1);
});
var $d_jl_FloatingPointBits$ = new $TypeData().i($c_jl_FloatingPointBits$, "java.lang.FloatingPointBits$", ({
  fc: 1
}));
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$();
  }
  return $n_jl_FloatingPointBits$;
}
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().cV("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
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
  var PatBC = $m_jl_StackTrace$StringRE$().cV("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().cV("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().cV("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().cV("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().cV("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
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
  if ((!(!$m_jl_Utils$Cache$().jr.call(dict, encodedName)))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = dict$1[encodedName];
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
  }
  var this$3 = base.split("_").join(".");
  return this$3.split("\uff3f").join("_");
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.cv) << 24) >> 24) === 0)) {
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
    $thiz.jo = dict;
    $thiz.cv = (((1 | $thiz.cv) << 24) >> 24);
  }
  return $thiz.jo;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.cv) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.jo);
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.cv) << 24) >> 24) === 0)) {
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
    $thiz.jp = dict;
    $thiz.cv = (((2 | $thiz.cv) << 24) >> 24);
  }
  return $thiz.jp;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.cv) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.jp);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.cv) << 24) >> 24) === 0)) {
    $thiz.jn = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.cv = (((4 | $thiz.cv) << 24) >> 24);
  }
  return $thiz.jn;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.cv) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.jn);
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
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().cV("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().ca("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().ca("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().ca("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().ca("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().ca("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().ca("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().ca("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().ca("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().ca("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().ca("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().ca("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().ca("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().ca("Line (\\d+).*script (?:in )?(\\S+)", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().ca("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().cV("^(.*)@(.+):(\\d+)$");
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
  var lineRE = $m_jl_StackTrace$StringRE$().cV("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
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
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().cV("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().cV("<anonymous function>"), "{anonymous}");
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
  this.jo = null;
  this.jp = null;
  this.jn = null;
  this.cv = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.s6 = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  fl: 1
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
$p.cV = (function(this$) {
  return new RegExp(this$);
});
$p.ca = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().i($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  fm: 1
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
  this.jq = null;
  this.np = null;
  $n_jl_System$SystemProperties$ = this;
  this.jq = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.np = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.kz = (function(key, default$1) {
  if ((this.jq !== null)) {
    var dict = this.jq;
    return ((!(!$m_jl_Utils$Cache$().jr.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.np.kz(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  fr: 1
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
  this.jr = null;
  $n_jl_Utils$Cache$ = this;
  this.jr = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  fu: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bN)));
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  bN: 1
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
$p.bS = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? array.a.length : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  fw: 1
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
$p.rn = (function(a, key) {
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
$p.pl = (function(a, b) {
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
    var lo = t.o;
    var hi = t.r;
    var i$2 = i;
    var t$1 = b.a[i$2];
    var lo$1 = t$1.o;
    var hi$1 = t$1.r;
    if ((!((lo === lo$1) && (hi === hi$1)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.ih = (function(a, b) {
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
$p.pm = (function(a, b) {
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
$p.pi = (function(a, b) {
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
$p.ph = (function(a, b) {
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
$p.pn = (function(a, b) {
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
$p.pj = (function(a, b) {
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
$p.pk = (function(a, b) {
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
$p.s7 = (function(a, value) {
  var toIndex = a.a.length;
  var i = 0;
  while ((i !== toIndex)) {
    var i$1 = i;
    a.a[i$1] = value;
    i = ((1 + i) | 0);
  }
});
$p.a7 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).C.Q().C.U(newLength);
  original.p(0, ret, 0, copyLength);
  return ret;
});
$p.rO = (function(original, newLength, newType) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = newType.C.Q().C.U(newLength);
  original.p(0, ret, 0, copyLength);
  return ret;
});
$p.rG = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_B(newLength);
  original.p(0, ret, 0, copyLength);
  return ret;
});
$p.rM = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_S(newLength);
  original.p(0, ret, 0, copyLength);
  return ret;
});
$p.rK = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_I(newLength);
  original.p(0, ret, 0, copyLength);
  return ret;
});
$p.rL = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_J(newLength);
  original.p(0, ret, 0, copyLength);
  return ret;
});
$p.rH = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_C(newLength);
  original.p(0, ret, 0, copyLength);
  return ret;
});
$p.rJ = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_F(newLength);
  original.p(0, ret, 0, copyLength);
  return ret;
});
$p.rI = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_D(newLength);
  original.p(0, ret, 0, copyLength);
  return ret;
});
$p.rN = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_Z(newLength);
  original.p(0, ret, 0, copyLength);
  return ret;
});
$p.aC = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).C.Q().C.U(retLength);
  original.p(from, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  fz: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $is_ju_Formattable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.bO)));
}
function $isArrayOf_ju_Formattable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bO)));
}
/** @constructor */
function $c_ju_Formatter$() {
  this.ny = null;
  this.nx = null;
  $n_ju_Formatter$ = this;
  this.ny = new RegExp("(?:(\\d+)\\$)?([-#+ 0,\\(<]*)(\\d+)?(?:\\.(\\d+))?[%A-Za-z]", "g");
  this.nx = new $ac_I(new Int32Array([96, 126, 638, 770, 32, 256, 2, 126, (-1), (-1), (-1), (-1), (-1), (-1), 800, (-1), (-1), (-1), 124, (-1), (-1), (-1), (-1), 544, (-1), (-1)]));
}
$p = $c_ju_Formatter$.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$;
/** @constructor */
function $h_ju_Formatter$() {
}
$h_ju_Formatter$.prototype = $p;
$p.kI = (function(count) {
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
$p.sO = (function(x) {
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
$p.sN = (function(x) {
  var unscaledValueWithSign = x.uQ().w();
  if ((unscaledValueWithSign === "0")) {
    return new $c_ju_Formatter$Decimal(false, "0", 0);
  } else {
    var negative = (unscaledValueWithSign.charCodeAt(0) === 45);
    return new $c_ju_Formatter$Decimal(negative, (negative ? unscaledValueWithSign.substring(1) : unscaledValueWithSign), x.uH());
  }
});
var $d_ju_Formatter$ = new $TypeData().i($c_ju_Formatter$, "java.util.Formatter$", ({
  fE: 1
}));
var $n_ju_Formatter$;
function $m_ju_Formatter$() {
  if ((!$n_ju_Formatter$)) {
    $n_ju_Formatter$ = new $c_ju_Formatter$();
  }
  return $n_ju_Formatter$;
}
function $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal($thiz, roundingPos) {
  var digits = $thiz.dj;
  var digitsLen = digits.length;
  if ((roundingPos < 0)) {
    return new $c_ju_Formatter$Decimal($thiz.di, "0", 0);
  } else if ((roundingPos >= digitsLen)) {
    return $thiz;
  } else if ((digits.charCodeAt(roundingPos) < 53)) {
    return ((roundingPos === 0) ? new $c_ju_Formatter$Decimal($thiz.di, "0", 0) : new $c_ju_Formatter$Decimal($thiz.di, digits.substring(0, roundingPos), (($thiz.cZ - ((digitsLen - roundingPos) | 0)) | 0)));
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
    var newScale = (($thiz.cZ - ((digitsLen - pos) | 0)) | 0);
    return new $c_ju_Formatter$Decimal($thiz.di, newUnscaledValue, newScale);
  }
}
/** @constructor */
function $c_ju_Formatter$Decimal(negative, unscaledValue, scale) {
  this.di = false;
  this.dj = null;
  this.cZ = 0;
  this.di = negative;
  this.dj = unscaledValue;
  this.cZ = scale;
}
$p = $c_ju_Formatter$Decimal.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$Decimal;
/** @constructor */
function $h_ju_Formatter$Decimal() {
}
$h_ju_Formatter$Decimal.prototype = $p;
$p.pI = (function() {
  return (this.dj === "0");
});
$p.q9 = (function(precision) {
  $m_ju_Formatter$();
  if ((!(precision > 0))) {
    throw new $c_jl_AssertionError("Decimal.round() called with non-positive precision");
  }
  return $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, precision);
});
$p.tJ = (function(newScale) {
  var roundingPos = ((((this.dj.length + newScale) | 0) - this.cZ) | 0);
  var rounded = $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, roundingPos);
  $m_ju_Formatter$();
  if ((!(rounded.pI() || (rounded.cZ <= newScale)))) {
    throw new $c_jl_AssertionError("roundAtPos returned a non-zero value with a scale too large");
  }
  return ((rounded.pI() || (rounded.cZ === newScale)) ? rounded : new $c_ju_Formatter$Decimal(this.di, (("" + rounded.dj) + $m_ju_Formatter$().kI(((newScale - rounded.cZ) | 0))), newScale));
});
$p.w = (function() {
  return (((((("Decimal(" + this.di) + ", ") + this.dj) + ", ") + this.cZ) + ")");
});
var $d_ju_Formatter$Decimal = new $TypeData().i($c_ju_Formatter$Decimal, "java.util.Formatter$Decimal", ({
  fF: 1
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
  this.o = 0;
  this.r = 0;
  this.o = lo;
  this.r = hi;
}
$p = $c_RTLong.prototype = new $h_O();
$p.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $p;
$p.n = (function(that) {
  return ((that instanceof $c_RTLong) && ((this.o === that.o) && (this.r === that.r)));
});
$p.v = (function() {
  return (this.o ^ this.r);
});
$p.w = (function() {
  return $m_RTLong$().kT(this.o, this.r);
});
$p.uM = (function() {
  return this.o;
});
$p.uL = (function() {
  return $m_RTLong$().q0(this.o, this.r);
});
$p.uK = (function() {
  return $m_RTLong$().hf(this.o, this.r);
});
$p.up = (function() {
  return ((this.o << 24) >> 24);
});
$p.uI = (function() {
  return ((this.o << 16) >> 16);
});
$p.uB = (function() {
  return this.o;
});
$p.uC = (function() {
  return this;
});
$p.uv = (function() {
  return $m_RTLong$().q0(this.o, this.r);
});
$p.ut = (function() {
  return $m_RTLong$().hf(this.o, this.r);
});
$p.ur = (function(that) {
  return $m_RTLong$().pY(this.o, this.r, that.o, that.r);
});
$p.uq = (function(that) {
  return $m_RTLong$().pY(this.o, this.r, that.o, that.r);
});
$p.uu = (function(b) {
  return ((this.o === b.o) && (this.r === b.r));
});
$p.uF = (function(b) {
  return (!((this.o === b.o) && (this.r === b.r)));
});
$p.ug = (function(b) {
  var ahi = this.r;
  var bhi = b.r;
  return ((ahi === bhi) ? (((-2147483648) ^ this.o) < ((-2147483648) ^ b.o)) : (ahi < bhi));
});
$p.uh = (function(b) {
  var ahi = this.r;
  var bhi = b.r;
  return ((ahi === bhi) ? (((-2147483648) ^ this.o) <= ((-2147483648) ^ b.o)) : (ahi < bhi));
});
$p.uc = (function(b) {
  var ahi = this.r;
  var bhi = b.r;
  return ((ahi === bhi) ? (((-2147483648) ^ this.o) > ((-2147483648) ^ b.o)) : (ahi > bhi));
});
$p.ud = (function(b) {
  var ahi = this.r;
  var bhi = b.r;
  return ((ahi === bhi) ? (((-2147483648) ^ this.o) >= ((-2147483648) ^ b.o)) : (ahi > bhi));
});
$p.uO = (function() {
  return new $c_RTLong((~this.o), (~this.r));
});
$p.ua = (function(b) {
  return new $c_RTLong((this.o | b.o), (this.r | b.r));
});
$p.u9 = (function(b) {
  return new $c_RTLong((this.o & b.o), (this.r & b.r));
});
$p.un = (function(b) {
  return new $c_RTLong((this.o ^ b.o), (this.r ^ b.r));
});
$p.ui = (function(n) {
  var lo = this.o;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.r << n)) : (lo << n)));
});
$p.uf = (function(n) {
  var hi = this.r;
  return new $c_RTLong((((32 & n) === 0) ? (((this.o >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
});
$p.ue = (function(n) {
  var hi = this.r;
  return new $c_RTLong((((32 & n) === 0) ? (((this.o >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
});
$p.uN = (function() {
  var lo = this.o;
  var hi = this.r;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)));
});
$p.ul = (function(b) {
  var alo = this.o;
  var ahi = this.r;
  var bhi = b.r;
  var lo = ((alo + b.o) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)));
});
$p.uj = (function(b) {
  var alo = this.o;
  var ahi = this.r;
  var bhi = b.r;
  var lo = ((alo - b.o) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)));
});
$p.um = (function(b) {
  var alo = this.o;
  var blo = b.o;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  return new $c_RTLong(lo, ((((((((Math.imul(alo, b.r) + Math.imul(this.r, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0));
});
$p.ub = (function(b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.rX(this.o, this.r, b.o, b.r), this$1.ag);
});
$p.uk = (function(b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.to(this.o, this.r, b.o, b.r), this$1.ag);
});
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bP)));
}
var $d_RTLong = new $TypeData().i($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  bP: 1
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
      $thiz.ag = (((rDouble / 4.294967296E9) | 0.0) | 0);
      return ((rDouble | 0.0) | 0);
    } else {
      $thiz.ag = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - (Math.clz32(blo) | 0)) | 0);
    $thiz.ag = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - (Math.clz32(bhi) | 0)) | 0);
    $thiz.ag = 0;
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
      $thiz.ag = (((rDouble / 4.294967296E9) | 0.0) | 0);
      return ((rDouble | 0.0) | 0);
    } else {
      $thiz.ag = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.ag = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.ag = (ahi & (((-1) + bhi) | 0));
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
    $thiz.ag = quotHi;
    return quotLo;
  } else if ((ask === 1)) {
    $thiz.ag = remHi;
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
  this.ag = 0;
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.kT = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)));
});
$p.hf = (function(lo, hi) {
  return ((hi < 0) ? (-((4.294967296E9 * (+(((lo !== 0) ? (~hi) : ((-hi) | 0)) >>> 0.0))) + (+(((-lo) | 0) >>> 0.0)))) : ((4.294967296E9 * hi) + (+(lo >>> 0.0))));
});
$p.q0 = (function(lo, hi) {
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
$p.uy = (function(value) {
  return new $c_RTLong(value, (value >> 31));
});
$p.ux = (function(value) {
  return new $c_RTLong(this.pZ(value), this.ag);
});
$p.pZ = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.ag = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.ag = 2147483647;
    return (-1);
  } else {
    var rawLo = ((value | 0.0) | 0);
    var rawHi = (((value / 4.294967296E9) | 0.0) | 0);
    this.ag = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$p.pY = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$p.rX = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.ag = 0;
        return (-2147483648);
      } else {
        var lo = $intDiv(alo, blo);
        this.ag = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.ag = (-1);
      return (-1);
    } else {
      this.ag = 0;
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
      var hi$2 = this.ag;
      this.ag = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    }
  }
});
$p.to = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.ag = (lo >> 31);
        return lo;
      } else {
        this.ag = 0;
        return 0;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.ag = 0;
      return 0;
    } else {
      this.ag = ahi;
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
      var hi$2 = this.ag;
      this.ag = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    } else {
      return absRLo;
    }
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  fT: 1
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
  this.gu = null;
  this.jt = null;
  $n_s_Array$EmptyArrays$ = this;
  this.gu = new $ac_I(0);
  this.jt = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  fZ: 1
}));
var $n_s_Array$EmptyArrays$;
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$();
  }
  return $n_s_Array$EmptyArrays$;
}
var $d_F0 = new $TypeData().i(1, "scala.Function0", ({
  aW: 1
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
  this.nJ = null;
  this.qB = null;
  this.hL = null;
  $n_s_PartialFunction$ = this;
  this.nJ = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2$2) => $m_s_PartialFunction$().nJ));
  this.qB = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$3$2$2) => false));
  this.hL = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  g7: 1
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
  this.nO = null;
  $n_sc_ArrayOps$ = this;
  this.nO = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_ArrayOps$().nO));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.sc = (function(this$, f) {
  var len = $m_jl_reflect_Array$().bS(this$);
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
  gd: 1
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
$p.bb = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0));
});
var $d_sc_Hashing$ = new $TypeData().i($c_sc_Hashing$, "scala.collection.Hashing$", ({
  gp: 1
}));
var $n_sc_Hashing$;
function $m_sc_Hashing$() {
  if ((!$n_sc_Hashing$)) {
    $n_sc_Hashing$ = new $c_sc_Hashing$();
  }
  return $n_sc_Hashing$;
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.g();
  while (it.l()) {
    f.b(it.e());
  }
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $thiz.g();
  while ((res && it.l())) {
    res = (!(!p.b(it.e())));
  }
  return res;
}
function $f_sc_IterableOnceOps__exists__F1__Z($thiz, p) {
  var res = false;
  var it = $thiz.g();
  while (((!res) && it.l())) {
    res = (!(!p.b(it.e())));
  }
  return res;
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  switch ($thiz.s()) {
    case (-1): {
      return (!$thiz.g().l());
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
  var it = $thiz.g();
  var i = start;
  var y = (($m_jl_reflect_Array$().bS(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.l())) {
    $m_sr_ScalaRunTime$().cK(xs, i, it.e());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option($thiz, pf) {
  var sentinel = new $c_sc_IterableOnceOps$$anon$1($thiz);
  var it = $thiz.g();
  while (it.l()) {
    var x = pf.bM(it.e(), sentinel);
    if ((x !== sentinel)) {
      return new $c_s_Some(x);
    }
  }
  return $m_s_None$();
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.s() === 0) ? (("" + start) + end) : $thiz.en($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).b3.q);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.b3;
  if ((start.length !== 0)) {
    jsb.q = (("" + jsb.q) + start);
  }
  var it = $thiz.g();
  if (it.l()) {
    var obj = it.e();
    jsb.q = (("" + jsb.q) + obj);
    while (it.l()) {
      jsb.q = (("" + jsb.q) + sep);
      var obj$1 = it.e();
      jsb.q = (("" + jsb.q) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.q = (("" + jsb.q) + end);
  }
  return b;
}
function $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O($thiz, evidence$2) {
  if (($thiz.s() >= 0)) {
    var destination = evidence$2.bT($thiz.s());
    $thiz.bR(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$2.b6();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.g();
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
  this.nX = null;
  this.gx = null;
  this.nX = head;
  this.gx = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.sx = (function() {
  return this.nX.S().g();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  gC: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.o0 = null;
  $n_sc_StringOps$ = this;
  this.o0 = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_StringOps$().o0));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.rw = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
$p.tN = (function(this$, from, until) {
  var start = ((from > 0) ? from : 0);
  var that = this$.length;
  var end = ((until < that) ? until : that);
  return ((start >= end) ? "" : this$.substring(start, end));
});
$p.qg = (function(this$, marginChar) {
  var sb = $ct_jl_StringBuilder__I__(new $c_jl_StringBuilder(), this$.length);
  var this$3 = new $c_sc_StringOps$$anon$1(this$, false);
  while ((this$3.bi < this$3.eF)) {
    var x0 = this$3.pR();
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
    sb.q = (("" + sb.q) + stripped);
  }
  return sb.q;
});
$p.u2 = (function(this$, arg) {
  return (false ? arg.uP() : arg);
});
$p.sf = (function(this$, args) {
  return $m_jl_String$().sd(this$, args.cU(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((arg$2$2) => $m_sc_StringOps$().u2(this$, arg$2$2)))).iA($m_s_reflect_ManifestFactory$ObjectManifest$()));
});
$p.sw = (function(this$) {
  if ((this$ === "")) {
    throw new $c_ju_NoSuchElementException("head of empty String");
  } else {
    return this$.charCodeAt(0);
  }
});
$p.pe = (function(this$, n) {
  var $x_1 = $m_sc_StringOps$();
  var y = this$.length;
  return $x_1.tN(this$, ((n < y) ? n : y), this$.length);
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  gK: 1
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
$p.h7 = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  gS: 1
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
    return $m_jl_Integer$().q2($m_jl_System$SystemProperties$().kz("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10);
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
  this.o5 = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  this.o5 = $ps_sci_IndexedSeqDefaults$__liftedTree1$1__I();
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  h3: 1
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
  this.jQ = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.kp = (function() {
  var state = this.jQ;
  if ((state === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "uninitialized");
  }
  return state.S();
});
$p.kC = (function(state) {
  if ((this.jQ !== null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "already initialized");
  }
  this.jQ = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  h7: 1
}));
/** @constructor */
function $c_sci_MapNode$() {
  this.ob = null;
  $n_sci_MapNode$ = this;
  this.ob = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  hq: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (((-1) + $m_jl_reflect_Array$().bS(as)) | 0)));
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
$p.iw = (function(as, ix) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > (((-1) + as.a.length) | 0))) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I((((-1) + as.a.length) | 0));
  as.p(0, result, 0, ix);
  var srcPos = ((1 + ix) | 0);
  var length = (((-1) + ((as.a.length - ix) | 0)) | 0);
  as.p(srcPos, result, ix, length);
  return result;
});
$p.pF = (function(as, ix, elem) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > as.a.length)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.p(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.p(ix, result, destPos, length);
  return result;
});
var $d_sci_Node = new $TypeData().i(0, "scala.collection.immutable.Node", ({
  aB: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.gH = 0;
  $n_sci_Node$ = this;
  this.gH = $doubleToInt((+Math.ceil(6.4)));
}
$p = $c_sci_Node$.prototype = new $h_O();
$p.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $p;
$p.cs = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.bN = (function(mask) {
  return (1 << mask);
});
$p.f2 = (function(bitmap, bitpos) {
  return $m_jl_Integer$().br((bitmap & (((-1) + bitpos) | 0)));
});
$p.bx = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.f2(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  ht: 1
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
  this.og = null;
  $n_sci_SetNode$ = this;
  this.og = new $c_sci_BitmapIndexedSetNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_SetNode$.prototype = new $h_O();
$p.constructor = $c_sci_SetNode$;
/** @constructor */
function $h_sci_SetNode$() {
}
$h_sci_SetNode$.prototype = $p;
var $d_sci_SetNode$ = new $TypeData().i($c_sci_SetNode$, "scala.collection.immutable.SetNode$", ({
  hH: 1
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
  this.jV = null;
  this.aj = null;
  this.bn = null;
  this.cJ = null;
  this.gK = null;
  this.jW = null;
  $n_sci_VectorStatics$ = this;
  this.jV = new $ac_O(0);
  this.aj = new ($d_O.r().r().C)(0);
  this.bn = new ($d_O.r().r().r().C)(0);
  this.cJ = new ($d_O.r().r().r().r().C)(0);
  this.gK = new ($d_O.r().r().r().r().r().C)(0);
  this.jW = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.fN = (function(a, elem) {
  var alen = a.a.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.p(0, ac, 0, alen);
  ac.a[alen] = elem;
  return ac;
});
$p.H = (function(a, elem) {
  var ac = $m_ju_Arrays$().a7(a, ((1 + a.a.length) | 0));
  ac.a[(((-1) + ac.a.length) | 0)] = elem;
  return ac;
});
$p.fO = (function(elem, a) {
  var ac = new $ac_O(((1 + a.a.length) | 0));
  var length = a.a.length;
  a.p(0, ac, 1, length);
  ac.a[0] = elem;
  return ac;
});
$p.D = (function(elem, a) {
  var ac = $objectGetClass(a).C.Q().C.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.p(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.kr = (function(level, a, f) {
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
      this.kr(l, a.a[i], f);
      i = ((1 + i) | 0);
    }
  }
});
$p.cB = (function(a, f) {
  var i = 0;
  while ((i < a.a.length)) {
    var v1 = a.a[i];
    var v2 = f.b(v1);
    if ((!Object.is(v1, v2))) {
      return this.sU(a, f, i, v2);
    }
    i = ((1 + i) | 0);
  }
  return a;
});
$p.sU = (function(a, f, at, v2) {
  var ac = new $ac_O(a.a.length);
  if ((at > 0)) {
    a.p(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = f.b(a.a[i]);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.ay = (function(n, a, f) {
  if ((n === 1)) {
    return this.cB(a, f);
  } else {
    var i = 0;
    while ((i < a.a.length)) {
      var v1 = a.a[i];
      var v2 = this.ay((((-1) + n) | 0), v1, f);
      if ((v1 !== v2)) {
        return this.sV(n, a, f, i, v2);
      }
      i = ((1 + i) | 0);
    }
    return a;
  }
});
$p.sV = (function(n, a, f, at, v2) {
  var ac = $objectGetClass(a).C.Q().C.U(a.a.length);
  if ((at > 0)) {
    a.p(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = this.ay((((-1) + n) | 0), a.a[i], f);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.fK = (function(suffix1, xs) {
  if ($is_sci_Iterable(xs)) {
    if ((xs.kZ(((32 - suffix1.a.length) | 0)) <= 0)) {
      var x1$2 = xs.I();
      switch (x1$2) {
        case 0: {
          return null;
          break;
        }
        case 1: {
          return this.H(suffix1, xs.t());
          break;
        }
        default: {
          var suffix1b = $m_ju_Arrays$().a7(suffix1, ((suffix1.a.length + x1$2) | 0));
          xs.bR(suffix1b, suffix1.a.length, 2147483647);
          return suffix1b;
        }
      }
    } else {
      return null;
    }
  } else {
    var s = xs.s();
    if (((s > 0) && (s <= ((32 - suffix1.a.length) | 0)))) {
      var suffix1b$2 = $m_ju_Arrays$().a7(suffix1, ((suffix1.a.length + s) | 0));
      xs.g().bR(suffix1b$2, suffix1.a.length, 2147483647);
      return suffix1b$2;
    } else {
      return null;
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  hP: 1
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
  this.fG = null;
  this.dH = 0;
  this.bp = null;
  this.fG = _key;
  this.dH = _hash;
  this.bp = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.s9 = (function(k, h) {
  var _$this = this;
  while (true) {
    if (((h === _$this.dH) && $m_sr_BoxesRunTime$().k(k, _$this.fG))) {
      return _$this;
    } else if (((_$this.bp === null) || (_$this.dH > h))) {
      return null;
    } else {
      _$this = _$this.bp;
    }
  }
});
$p.w = (function() {
  return ((((("Node(" + this.fG) + ", ") + this.dH) + ") -> ") + this.bp);
});
var $d_scm_HashSet$Node = new $TypeData().i($c_scm_HashSet$Node, "scala.collection.mutable.HashSet$Node", ({
  i9: 1
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
$p.p4 = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  ig: 1
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
  return ((x === y) || ($is_jl_Number(x) ? this.s5(x, y) : ((x instanceof $Char) ? this.s3(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.s5 = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.s4(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.o;
      var hi = t.r;
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
$p.s4 = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      return (x2 === $m_RTLong$().hf(t.o, t.r));
    } else {
      return (false && yn.n(x2));
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.o;
    var hi$1 = t$1.r;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.o;
      var hi$2 = t$2.r;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return ($m_RTLong$().hf(lo$1, hi$1) === x3$3);
    } else {
      return (false && yn.n(new $c_RTLong(lo$1, hi$1)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.s3 = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $c_RTLong)) {
      var t = $uJ(y);
      var lo = t.o;
      var hi = t.r;
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
  iS: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  iX: 1
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
$p.eY = (function(xs, idx) {
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
$p.cK = (function(xs, idx, value) {
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
$p.fJ = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.by(), (x.bg() + "("), ",", ")");
});
$p.sm = (function(xs) {
  return ((xs === null) ? null : $m_sci_ArraySeq$().hm(xs));
});
$p.z = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($m_sci_ArraySeq$()) : new $c_sci_ArraySeq$ofRef(xs)));
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  iZ: 1
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
  var h = this.dR(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.dR = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.F = (function(hash, length) {
  return this.rm((hash ^ length));
});
$p.rm = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.fX = (function(lv) {
  var lo = lv.o;
  var hi = lv.r;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$p.cN = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.pZ(dv);
    var hi = this$1.ag;
    return (($m_RTLong$().hf(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().kQ(dv));
  }
});
$p.L = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.cN((+x));
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    return this.fX(new $c_RTLong(t.o, t.r));
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.es = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  j1: 1
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
  j2: 1
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
$p.rg = (function(a) {
  return a;
});
var $d_sjs_js_defined$ = new $TypeData().i($c_sjs_js_defined$, "scala.scalajs.js.defined$", ({
  j8: 1
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
$p.tM = (function(interval, body) {
  return setTimeout((() => {
    body.S();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  j9: 1
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
$p.tX = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.i0;
  } else {
    var result = [];
    seq.N(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  jk: 1
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
$p.ep = (function(t) {
  return (!(false || (false || (false || (false || false)))));
});
var $d_s_util_control_NonFatal$ = new $TypeData().i($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  jn: 1
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
  var h = this.dR(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.dR = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.F = (function(hash, length) {
  return this.cb((hash ^ length));
});
$p.cb = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.qk = (function(x, y, seed) {
  var h = seed;
  h = this.i(h, $f_T__hashCode__I("Tuple2"));
  h = this.i(h, x);
  h = this.i(h, y);
  return this.F(h, 2);
});
$p.dd = (function(x, seed, ignorePrefix) {
  var arr = x.be();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.bg());
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.i(h, $f_T__hashCode__I(x.bg()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.i(h, $m_sr_Statics$().L(x.bf(i)));
      i = ((1 + i) | 0);
    }
    return this.F(h, arr);
  }
});
$p.hk = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.g();
  while (iterator.l()) {
    var x = iterator.e();
    var h = $m_sr_Statics$().L(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.i(h$2, a);
  h$2 = this.i(h$2, b);
  h$2 = this.dR(h$2, c);
  return this.F(h$2, n);
});
$p.tj = (function(xs, seed) {
  var it = xs.g();
  var h = seed;
  if ((!it.l())) {
    return this.F(h, 0);
  }
  var x0 = it.e();
  if ((!it.l())) {
    return this.F(this.i(h, $m_sr_Statics$().L(x0)), 1);
  }
  var x1 = it.e();
  var initial = $m_sr_Statics$().L(x0);
  h = this.i(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().L(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.l()) {
    h = this.i(h, prev);
    var hash = $m_sr_Statics$().L(it.e());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.i(h, hash);
      i = ((1 + i) | 0);
      while (it.l()) {
        h = this.i(h, $m_sr_Statics$().L(it.e()));
        i = ((1 + i) | 0);
      }
      return this.F(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.cb(this.i(this.i(h0, rangeDiff), prev));
});
$p.oR = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().bS(a);
  switch (l) {
    case 0: {
      return this.F(h, 0);
      break;
    }
    case 1: {
      return this.F(this.i(h, $m_sr_Statics$().L($m_sr_ScalaRunTime$().eY(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().L($m_sr_ScalaRunTime$().eY(a, 0));
      h = this.i(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().L($m_sr_ScalaRunTime$().eY(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = $m_sr_Statics$().L($m_sr_ScalaRunTime$().eY(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, $m_sr_Statics$().L($m_sr_ScalaRunTime$().eY(a, i)));
            i = ((1 + i) | 0);
          }
          return this.F(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cb(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.tm = (function(start, step, last, seed) {
  return this.cb(this.i(this.i(this.i(seed, start), step), last));
});
$p.sC = (function(a, seed) {
  var h = seed;
  var l = a.m();
  switch (l) {
    case 0: {
      return this.F(h, 0);
      break;
    }
    case 1: {
      return this.F(this.i(h, $m_sr_Statics$().L(a.u(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().L(a.u(0));
      h = this.i(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().L(a.u(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = $m_sr_Statics$().L(a.u(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, $m_sr_Statics$().L(a.u(i)));
            i = ((1 + i) | 0);
          }
          return this.F(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cb(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.sP = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.c())) {
    var head = elems.t();
    var tail = elems.y();
    var hash = $m_sr_Statics$().L(head);
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
  return ((rangeState === 2) ? this.tm(initial, rangeDiff, prev, seed) : this.F(h, n));
});
$p.p0 = (function(a, seed) {
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
      return this.cb(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.oS = (function(a, seed) {
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
      return this.cb(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.oT = (function(a, seed) {
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
      return this.cb(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.oU = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.F(h, 0);
      break;
    }
    case 1: {
      return this.F(this.i(h, $m_sr_Statics$().cN(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().cN(a.a[0]);
      h = this.i(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().cN(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = $m_sr_Statics$().cN(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, $m_sr_Statics$().cN(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.F(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cb(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.oV = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.F(h, 0);
      break;
    }
    case 1: {
      return this.F(this.i(h, $m_sr_Statics$().cN(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().cN(a.a[0]);
      h = this.i(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().cN(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = $m_sr_Statics$().cN(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, $m_sr_Statics$().cN(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.F(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cb(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.oW = (function(a, seed) {
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
      return this.cb(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.oX = (function(a, seed) {
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
      return this.F(this.i($x_1, $m_sr_Statics$().fX(new $c_RTLong(t.o, t.r))), 1);
      break;
    }
    default: {
      var t$1 = a.a[0];
      var initial = $m_sr_Statics$().fX(new $c_RTLong(t$1.o, t$1.r));
      h = this.i(h, initial);
      var h0 = h;
      var t$2 = a.a[1];
      var prev = $m_sr_Statics$().fX(new $c_RTLong(t$2.o, t$2.r));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var t$3 = a.a[i];
        var hash = $m_sr_Statics$().fX(new $c_RTLong(t$3.o, t$3.r));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var t$4 = a.a[i];
            h = this.i($x_2, $m_sr_Statics$().fX(new $c_RTLong(t$4.o, t$4.r)));
            i = ((1 + i) | 0);
          }
          return this.F(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cb(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.oY = (function(a, seed) {
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
      return this.cb(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.oZ = (function(a, seed) {
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
      return this.cb(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
function $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.cP(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $thiz.kS(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.iu(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.iu(new $c_s_util_Failure(nextError), transaction);
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.lQ = null;
  this.lP = null;
  this.iR = false;
  this.lP = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.iR = false;
}
$p = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $p;
$p.g2 = (function() {
  return this.lQ;
});
$p.p6 = (function(x$0) {
  this.lQ = x$0;
});
$p.q1 = (function(subscription) {
  if (this.iR) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.lP.S();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.pL = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.iR = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  dB: 1,
  bp: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.mc = null;
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
$p.g2 = (function() {
  return this.mc;
});
$p.p6 = (function(x$0) {
  this.mc = x$0;
});
$p.pL = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.q1 = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
});
var $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$, "com.raquo.laminar.api.Laminar$unsafeWindowOwner$", ({
  dV: 1,
  bp: 1
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
$p.h4 = (function(scalaValue) {
  return scalaValue;
});
$p.km = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  e1: 1,
  bs: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
  this.n3 = null;
  this.n5 = null;
  this.n4 = null;
  this.j2 = null;
  this.n3 = getRawDomValue;
  this.n5 = setRawDomValue;
  this.n4 = separator;
  this.j2 = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator);
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
$p.fI = (function(items) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().x.qR(), $m_Lcom_raquo_laminar_keys_CompositeKey$().pT(items, this.n4)));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey, "com.raquo.laminar.keys.CompositeKey", ({
  ep: 1,
  ad: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator) {
  this.j3 = null;
  this.j3 = separator;
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = $p;
$p.pd = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().pT(domValue, this.j3);
});
$p.pg = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.j3, "");
});
$p.km = (function(domValue) {
  return this.pd(domValue);
});
$p.h4 = (function(scalaValue) {
  return this.pg(scalaValue);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec, "com.raquo.laminar.keys.CompositeKey$CompositeCodec", ({
  er: 1,
  bs: 1
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
  et: 1,
  es: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProp(name) {
  this.gp = null;
  this.gp = name;
}
$p = $c_Lcom_raquo_laminar_keys_EventProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProp() {
}
$h_Lcom_raquo_laminar_keys_EventProp.prototype = $p;
var $d_Lcom_raquo_laminar_keys_EventProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProp, "com.raquo.laminar.keys.EventProp", ({
  ew: 1,
  ad: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlAttr(name, codec) {
  this.gq = null;
  this.j4 = null;
  this.gq = name;
  this.j4 = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $p;
$p.fH = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().qd(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  ex: 1,
  ad: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.dh = null;
  this.j5 = null;
  this.dh = name;
  this.j5 = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
$p.fH = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, prop, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().qe(element, prop, value$2);
  })));
});
$p.i6 = (function(values) {
  var update = ((this.dh === "value") ? new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, nextValue, reason) => {
    var nextDomValue = this.j5.h4(nextValue);
    var x = $m_Lcom_raquo_laminar_DomApi$().sq(element, this);
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().k(nextDomValue, x)))) {
      $m_Lcom_raquo_laminar_DomApi$().qf(element, this, nextDomValue);
    }
  })) : new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element$2, nextValue$2, reason$2) => {
    $m_Lcom_raquo_laminar_DomApi$().qe(element$2, this, nextValue$2);
  })));
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.g3(), update);
});
function $isArrayOf_Lcom_raquo_laminar_keys_HtmlProp(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bx)));
}
var $d_Lcom_raquo_laminar_keys_HtmlProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlProp, "com.raquo.laminar.keys.HtmlProp", ({
  bx: 1,
  ad: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr(localName, codec, namespacePrefix) {
  this.j7 = null;
  this.j6 = null;
  this.hE = null;
  this.hF = null;
  this.j7 = localName;
  this.j6 = codec;
  var this$1 = (namespacePrefix.c() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.T() + ":") + localName)));
  this.hE = (this$1.c() ? localName : this$1.T());
  this.hF = (namespacePrefix.c() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().t1(namespacePrefix.T())));
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $p;
var $d_Lcom_raquo_laminar_keys_SvgAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr, "com.raquo.laminar.keys.SvgAttr", ({
  ey: 1,
  ad: 1
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
$p.d7 = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  eG: 1,
  Y: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2, outer) {
  this.ne = null;
  this.ne = f$2;
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
$p.d7 = (function(element) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.ne.b(element);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bz || (!when))) {
    f();
  } else {
    this$2.bz = true;
    try {
      f();
    } finally {
      this$2.bz = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2, "com.raquo.laminar.modifiers.Modifier$$anon$2", ({
  eH: 1,
  Y: 1
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
  eK: 1,
  eI: 1
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
  eM: 1,
  eL: 1
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
  this.ng = null;
  this.ng = render$2;
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
$p.rl = (function(value) {
  return this.ng.b(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  eP: 1,
  eN: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.p7(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().rV($thiz.aJ(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.ji = null;
  this.ji = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.bC = (function(modifiers) {
  var element = this.rp();
  modifiers.N(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((modifier) => {
    modifier.d7(element);
  })));
  return element;
});
$p.rp = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().rQ(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  eZ: 1,
  bB: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.nm = null;
  this.nm = name;
}
$p = $c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $p;
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  f0: 1,
  bB: 1
}));
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.hH) << 24) >> 24) === 0)) {
    $thiz.jj = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
    $thiz.hH = (((32 | $thiz.hH) << 24) >> 24);
  }
  return $thiz.jj;
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.hH) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jj);
}
/** @constructor */
function $c_jl_Character$() {
  this.jj = null;
  this.hH = 0;
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.qj = (function(codePoint) {
  if ((!((codePoint >= 0) && (codePoint <= 1114111)))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.rW = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))));
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0);
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0);
  } else {
    var p = $m_ju_Arrays$().rn($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
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
  f9: 1,
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
$p.q2 = (function(s, radix) {
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
    var digit = $m_jl_Character$().rW(s.charCodeAt(i), radix);
    result = ((result * radix) + digit);
    if (((digit === (-1)) || (result > maxAbsValue))) {
      $ps_jl_Integer$__fail$1__T__E(s);
    }
    i = ((1 + i) | 0);
  }
  return (negative ? (((-result) | 0.0) | 0) : ((result | 0.0) | 0));
});
$p.br = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  fd: 1,
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
$p.pJ = (function(lo, hi) {
  if ((hi !== 0)) {
    var $x_1 = (+(hi >>> 0.0)).toString(16);
    var s = (+(lo >>> 0.0)).toString(16);
    var beginIndex = s.length;
    return ($x_1 + (("" + "00000000".substring(beginIndex)) + s));
  } else {
    return (+(lo >>> 0.0)).toString(16);
  }
});
$p.sM = (function(lo, hi) {
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
  fg: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
/** @constructor */
function $c_jl_StackTraceElement(declaringClass, methodName, fileName, lineNumber, columnNumber) {
  this.fm = null;
  this.gt = null;
  this.fn = null;
  this.fo = 0;
  this.fl = 0;
  this.fm = declaringClass;
  this.gt = methodName;
  this.fn = fileName;
  this.fo = lineNumber;
  this.fl = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.n = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.fn === that.fn) && (this.fo === that.fo)) && (this.fl === that.fl)) && (this.fm === that.fm)) && (this.gt === that.gt)));
});
$p.w = (function() {
  var result = "";
  if ((this.fm !== "<jscode>")) {
    result = ((("" + result) + this.fm) + ".");
  }
  result = (("" + result) + this.gt);
  if ((this.fn === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.fn);
    if ((this.fo >= 0)) {
      result = ((result + ":") + this.fo);
      if ((this.fl >= 0)) {
        result = ((result + ":") + this.fl);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.v = (function() {
  return (((($f_T__hashCode__I(this.fm) ^ $f_T__hashCode__I(this.gt)) ^ $f_T__hashCode__I(this.fn)) ^ this.fo) ^ this.fl);
});
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bM)));
}
var $d_jl_StackTraceElement = new $TypeData().i($c_jl_StackTraceElement, "java.lang.StackTraceElement", ({
  bM: 1,
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
$p.t2 = (function(value, offset, count) {
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
$p.sd = (function(format, args) {
  return $ct_ju_Formatter__(new $c_ju_Formatter()).se(format, args).w();
});
var $d_jl_String$ = new $TypeData().i($c_jl_String$, "java.lang.String$", ({
  fo: 1,
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
  $thiz.nr = s;
  $thiz.ns = writableStackTrace;
  if (writableStackTrace) {
    $thiz.s8();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.nr = null;
    this.ns = false;
    this.nq = null;
    this.hI = null;
  }
  kD(cause) {
    return this;
  }
  bO() {
    return this.nr;
  }
  s8() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.aG : this);
    this.nq = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  ss() {
    if ((this.hI === null)) {
      if (this.ns) {
        this.hI = $m_jl_StackTrace$().s6(this.nq);
      } else {
        this.hI = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.hI;
  }
  w() {
    var className = $objectClassName(this);
    var message = this.bO();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  v() {
    return $c_O.prototype.v.call(this);
  }
  n(that) {
    return $c_O.prototype.n.call(this, that);
  }
  get "message"() {
    var m = this.bO();
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
  fH: 1,
  fG: 1
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
  this.hJ = null;
  $n_s_$less$colon$less$ = this;
  this.hJ = new $c_s_$less$colon$less$$anon$1();
}
$p = $c_s_$less$colon$less$.prototype = new $h_O();
$p.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
}
$h_s_$less$colon$less$.prototype = $p;
var $d_s_$less$colon$less$ = new $TypeData().i($c_s_$less$colon$less$, "scala.$less$colon$less$", ({
  fW: 1,
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
    $m_sr_ScalaRunTime$().cK(dest, j, $m_sr_ScalaRunTime$().eY(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
function $p_s_Array$__newUnitArray__I__Ajl_Void($thiz, len) {
  var result = new ($d_jl_Void.r().C)(len);
  $m_ju_Arrays$().s7(result, (void 0));
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
$p.pr = (function(it, evidence$3) {
  var n = it.s();
  if ((n > (-1))) {
    var elements = evidence$3.bT(n);
    var iterator = it.g();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().cK(elements, i, iterator.e());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$3.b6();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.g();
    while (iterator$2.l()) {
      var elem = iterator$2.e();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.C.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.C.r().w(jsElems);
  }
});
$p.c6 = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.C.Z && $objectGetClass(dest).C.R(srcClass.C))) {
    src.p(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.eq = (function(original, newLength) {
  if ($isArrayOf_jl_Void(original, 1)) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  } else if ((original instanceof $ac_O)) {
    return $m_ju_Arrays$().a7(original, newLength);
  } else if ((original instanceof $ac_I)) {
    return $m_ju_Arrays$().rK(original, newLength);
  } else if ((original instanceof $ac_D)) {
    return $m_ju_Arrays$().rI(original, newLength);
  } else if ((original instanceof $ac_J)) {
    return $m_ju_Arrays$().rL(original, newLength);
  } else if ((original instanceof $ac_F)) {
    return $m_ju_Arrays$().rJ(original, newLength);
  } else if ((original instanceof $ac_C)) {
    return $m_ju_Arrays$().rH(original, newLength);
  } else if ((original instanceof $ac_B)) {
    return $m_ju_Arrays$().rG(original, newLength);
  } else if ((original instanceof $ac_S)) {
    return $m_ju_Arrays$().rM(original, newLength);
  } else if ((original instanceof $ac_Z)) {
    return $m_ju_Arrays$().rN(original, newLength);
  } else {
    throw new $c_s_MatchError(original);
  }
});
$p.po = (function(xs, ys) {
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
  fY: 1,
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
$p.u7 = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $m_scm_ArraySeq$().k1 : new $c_scm_ArraySeq$ofRef(xs)));
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
$p.pX = (function(xo) {
  return (xo.c() ? $m_sc_Iterable$().bE() : new $c_sc_Iterable$$anon$1(xo.T()));
});
var $d_s_Option$ = new $TypeData().i($c_s_Option$, "scala.Option$", ({
  g6: 1,
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
  return ($thiz.c7(x) ? $thiz.b(x) : default$1.b(x));
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
    $thiz.b4($m_scm_Buffer$().ij(elems));
  } else {
    var it = elems.g();
    while (it.l()) {
      $thiz.au(it.e());
    }
  }
  return $thiz;
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.qG = null;
  this.qP = null;
  this.qH = null;
  this.qK = null;
  this.qL = null;
  this.qJ = null;
  this.qI = null;
  this.qF = null;
  this.qQ = null;
  this.qD = null;
  this.qO = null;
  this.qE = null;
  this.qM = null;
  this.qN = null;
  $n_s_reflect_ClassTag$ = this;
  this.qG = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.qP = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.qH = $m_s_reflect_ManifestFactory$CharManifest$();
  this.qK = $m_s_reflect_ManifestFactory$IntManifest$();
  this.qL = $m_s_reflect_ManifestFactory$LongManifest$();
  this.qJ = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.qI = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.qF = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.qQ = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.qD = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.qO = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.qE = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.qM = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.qN = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.oO = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  im: 1,
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
  this.hX = false;
  this.hX = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.w = (function() {
  return ("" + this.hX);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  iR: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.aP = 0;
  this.aP = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.w = (function() {
  return ("" + this.aP);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  iU: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyRef() {
  this.hY = false;
  this.hZ = null;
}
$p = $c_sr_LazyRef.prototype = new $h_O();
$p.constructor = $c_sr_LazyRef;
/** @constructor */
function $h_sr_LazyRef() {
}
$h_sr_LazyRef.prototype = $p;
$p.sD = (function(value) {
  this.hZ = value;
  this.hY = true;
  return value;
});
$p.w = (function() {
  return ("LazyRef " + (this.hY ? ("of: " + this.hZ) : "thunk"));
});
var $d_sr_LazyRef = new $TypeData().i($c_sr_LazyRef, "scala.runtime.LazyRef", ({
  iV: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.ak = null;
  this.ak = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.w = (function() {
  return ("" + this.ak);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  iY: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.aQ = 0;
  this.em = 0;
  this.i1 = 0;
  this.k7 = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.aQ = $f_T__hashCode__I("Seq");
  this.em = $f_T__hashCode__I("Map");
  this.i1 = $f_T__hashCode__I("Set");
  this.k7 = this.hk($m_sci_Nil$(), this.em);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.cW = (function(x, y) {
  return this.qk($m_sr_Statics$().L(x), $m_sr_Statics$().L(y), (-889275714));
});
$p.qc = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.sC(xs, this.aQ) : ((xs instanceof $c_sci_List) ? this.sP(xs, this.aQ) : this.tj(xs, this.aQ)));
});
$p.sW = (function(xs) {
  if (xs.c()) {
    return this.k7;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.em;
    xs.f0(accum);
    h = this.i(h, accum.i2);
    h = this.i(h, accum.i3);
    h = this.dR(h, accum.i4);
    return this.F(h, accum.i5);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  jp: 1,
  jo: 1
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
  this.i2 = 0;
  this.i3 = 0;
  this.i5 = 0;
  this.i4 = 0;
  this.i2 = 0;
  this.i3 = 0;
  this.i5 = 0;
  this.i4 = 1;
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
$p.rf = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().cW(k, v);
  this.i2 = ((this.i2 + h) | 0);
  this.i3 = (this.i3 ^ h);
  this.i4 = Math.imul(this.i4, (1 | h));
  this.i5 = ((1 + this.i5) | 0);
});
$p.dL = (function(v1, v2) {
  this.rf(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  jq: 1,
  aX: 1
}));
/** @constructor */
function $c_Ladversaries_Adversary$() {
  this.iF = null;
  this.l7 = null;
  this.ld = null;
  this.l8 = null;
  this.la = null;
  this.l9 = null;
  this.lb = null;
  this.lc = null;
  this.l6 = null;
  $n_Ladversaries_Adversary$ = this;
  this.iF = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Brandenburg-Prussia", $m_sci_Vector$().bs($m_sr_ScalaRunTime$().z(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 Town to land #3.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-3-2222-3333", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-3-2222-3333", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-3-222-3333", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "1-3-222-3333", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "3-222-3333", $m_s_None$())]))), $m_s_None$(), "On each board with Town/City, add 1 Town to a land without Town.", $m_sci_Nil$().ct($m_sr_ScalaRunTime$().z(new ($d_T.r().C)(["9 (3/3/3)", "9 (3/3/3)", "10 (3/4/3)", "11 (4/4/3)", "11 (4/4/3)", "12 (4/4/4)"])))));
  this.l7 = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("England", $m_sci_Vector$().bs($m_sr_ScalaRunTime$().z(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "Invader Build Cards affect matching lands without Invaders if they are adjacent to at least 2 Town/City.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 City to land #1 and 1 Town to land #2", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage(), "Put the \"High Immigration\" tile on the Invader board, to the left of \"Ravage\". The Invaders take this Build action each Invader phase before Ravaging. Cards slide left from Ravage to it, and from it to the discard pile. Remove the tile when a Stage II card slides onto it, putting that card in the discard.", new $c_s_Some(4)), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage(), "Put the \"High Immigration\" tile on the Invader board, to the left of \"Ravage\". The Invaders take this Build action each Invader phase before Ravaging. Cards slide left from Ravage to it, and from it to the discard pile. ", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Town/City have +1 Health.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Add an additional Fear to the Fear Pool per player in the game.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage(), "During any Invader Phase where you resolve no Fear Cards, perform the Build from High Immigration twice. (This has no effect if no card is on the extra Build slot.)", $m_s_None$())]))), new $c_s_Some("If 7 or more Town/City are ever in a single land, the Invaders win."), "On each board with Town/City, Build in the land with the most Town/City.", $m_sci_Nil$().ct($m_sr_ScalaRunTime$().z(new ($d_T.r().C)(["10 (3/4/3)", "11 (4/4/3)", "13 (4/5/4)", "14 (4/5/5)", "14 (4/5/5)", "13 (4/5/4)"])))));
  this.ld = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Sweden", $m_sci_Vector$().bs($m_sr_ScalaRunTime$().z(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "If the Invaders do at least 6 Damage to the land during Ravage, add an extra Blight. The additional Blight does not destroy Presence or cause cascades.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 City to land #4. On boards where land #4 starts with Blight, put that Blight in land #5 instead.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Town deal 3 Damage. City deal 5 Damage.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "After adding all other Invaders, Accelerate the Invader Deck. On each board, add 1 Town to the land of that terrain with the fewest Invaders.", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "When Ravaging adds at least 1 Blight to a land, also add 1 Town to an adjacent land without Town/City. Cascading Blight does not cause this effect.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 Town and 1 Blight to land #8. The Blight comes from the box, not the Blight Card.", $m_s_None$())]))), $m_s_None$(), "After Invaders Explore into each land this Phase, if that land has at least as many Invaders as Dahan, replace 1 Dahan with 1 Town.", $m_sci_Nil$().ct($m_sr_ScalaRunTime$().z(new ($d_T.r().C)(["9 (3/3/3)", "10 (3/4/3)", "10 (3/4/3)", "11 (3/4/4)", "12 (4/4/4)", "13 (4/4/5)"])))));
  this.l8 = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("France", $m_sci_Vector$().bs($m_sr_ScalaRunTime$().z(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "Except during Setup: After Invaders successfully Explore into a land which had no Town/City, add 1 Explorer there.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Put the \"Slave Rebellion\" event under the top 3 cards of the Event Deck.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "After Invaders Build in a land with 2 Explorer or more, replace all but 1 Explorer there with an equal number of Town.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 Town to the highest-numbered land without Town. Add 1 Town to land #1.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "Whenever Invaders Build a Coastal City, add 1 Town to the adjacent land with the fewest Town.", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "When you remove Blight from the board, put it here instead of onto the Blight Card. As soon as you have 3 Blight per player here, move it all back to the Blight Card.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "After resolving an Explore Card, on each board add 1 Explorer to a land without any. Fear Card effects never remove Explorer. If one would, you may instead Push that Explorer.", $m_s_None$())]))), new $c_s_Some("Before Setup, return all but 7 Town per player to the box. Invaders win if you ever cannot place a Town."), "After Exploring, on each board, pick a land of the shown terrain. If it has Town/City, add 1 Blight. Otherwise, add 1 Town.", $m_sci_Nil$().ct($m_sr_ScalaRunTime$().z(new ($d_T.r().C)(["9 (3/3/3)", "10 (3/4/3)", "11 (4/4/3)", "12 (4/4/4)", "13 (4/5/4)", "14 (4/5/5)"])))));
  this.la = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Habsburg Monarchy (Livestock)", $m_sci_Vector$().bs($m_sr_ScalaRunTime$().z(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "After the normal Build Step: In each land matching a Build Card, Gather 1 Town from a land not matching a Build Card. (In board/land order.)", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board, add 1 Town to land #2 and 1 Town to the highest-numbered land without Setup symbols.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "when Invaders would Build 1 City in an Inland land, they instead Build 2 Town.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-2222-33333", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "Town in lands without Blight are Durable: they have +2 Health, and \"Destroy Town\" effects instead deal 2 Damage (to those Town only) per Town they could Destroy. (\"Destroy all Town\" works normally.)", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Put the Habsburg Reminder Card under the top 5 Invader Cards. When Revealed, on each board, add 1 City to a Coastal land without City and 1 Town to the 3 Inland lands with the fewest Blight.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Ravages do +2 Damage (total) if any adjacent lands have Town. (This does not cause lands without Invaders to Ravage.)", $m_s_None$())]))), new $c_s_Some("Track how many Blight come off the Blight Card during Ravages that do 8+ Damage to the land. If that number ever exceeds players, the Invaders win."), "After Exploring: On each board with 4 or fewer Blight, add 1 Town to a land without Town/Blight. On each board with 2 or fewer Blight, do so again.", $m_sci_Nil$().ct($m_sr_ScalaRunTime$().z(new ($d_T.r().C)(["10 (3/4/3)", "11 (4/5/2)", "12 (4/5/3)", "12 (4/5/3)", "13 (4/6/3)", "14 (5/6/3)"])))));
  this.l9 = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Habsburg Mining Expedition", $m_sci_Vector$().bs($m_sr_ScalaRunTime$().z(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "Lands with 3 or more Invaders are Mining lands.", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "When Blight added by a Ravage Action would cascade, instead Upgrade 1 Explorer/Town (before Dahan counterattack.)", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), $m_sc_StringOps$().qg("In Mining lands: Disease and modifiers to Disease affect Ravage Actions as though they were Build Actions.", 124), $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), $m_sc_StringOps$().qg("In Mining lands: During the Build Step, Build Cards cause Ravage Actions (instead of Build Actions).", 124), $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Add 1 Explorer in each land with no Dahan. Add 1 Disease and 1 City in the highest-numbered land with a Town Setup symbol.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__AfterBuild__Ladversaries_Stage(), "On each board: Choose a land with Explorer. Upgrade 1 Explorer there.", new $c_s_Some(5)), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Remove the Stage II 'Coastal Lands' card before randomly choosing Stage II cards. Place the 'Salt Deposits' card in place of the 2nd Stage II card.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-2S22-33333, where S is the Salt Deposits card. Escalation ignores S", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__AfterBuild__Ladversaries_Stage(), "On each board: Choose a land with Explorer. Build there, then Upgrade 1 Explorer. (Build normally in a Mining land.)", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "On boards with 3 or fewer Blight: Add +1 Explorer in each land successfully explored. (Max. 2 lands per board per Explore Card.)", $m_s_None$())]))), new $c_s_Some("At the end of the Fast Power Phase, the Invaders win if any land has at least 8 total Invaders/Blight (combined)."), "After Advancing Invader Cards: On each board, Explore in 2 lands whose terrains don't match a Ravage or Build Card (no source required).", $m_sci_Nil$().ct($m_sr_ScalaRunTime$().z(new ($d_T.r().C)(["9 (3/3/3)", "10 (3/3/4)", "11 (3/4/4)", "12 (4/4/4)", "13 (4/5/4)", "13 (4/5/4)"])))));
  this.lb = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Russia", $m_sci_Vector$().bs($m_sr_ScalaRunTime$().z(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board, add 1 Beasts and 1 Explorer to the highest-numbered land without Town/City", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Explorer do +1 Damage. When Ravage adds Blight to a land (including cascades), Destroy 1 Beasts in that land.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "The first time each Action would Destroy Explorer: If possible, 1 of those Explorer is instead Pushed; 1 Fear when you do so.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Ravage Cards also match lands with 3 or more Explorer. (If the land already matched the Ravage Card, it still Ravages just once.)", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-2-3-2-3-2-3-2-33", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Put an unused Stage II Invader Card under the top 3 Fear Cards, and an unused Stage III Card under the top 7 Fear Cards.", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "When a face down invader card in the fear deck is revealed, immediately place it in the Build space (face-up).", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "After the Ravage Step of turn 2+, on each board where it added no Blight: In the land with the most Explorer (min. 1), add 1 Explorer and 1 Town.", $m_s_None$())]))), new $c_s_Some("Put Beasts Destroyed by Adversary rules on this panel. If there are ever more Beasts on this panel than on the island, the Invaders win."), "Add 2 Explorer (total) among lands with Beasts. If you can't, instead add 2 Explorer among lands with Beasts on a different board.", $m_sci_Nil$().ct($m_sr_ScalaRunTime$().z(new ($d_T.r().C)(["10 (3/3/4)", "11 (4/3/4)", "11 (4/4/3)", "12 (4/4/4)", "13 (4/5/4)", "14 (5/5/4)"])))));
  this.lc = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Scotland", $m_sci_Vector$().bs($m_sr_ScalaRunTime$().z(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "After Setup, in Coastal lands, Explore Cards add 1 Town instead of 1 Explorer . \"Coastal Lands\" Invader cards do this for maximum 2 lands per board.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Add 1 City to land #2.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-22-1-C2-33333", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "In Coastal lands, Build Cards affect lands without Invaders, so long as there is an adjacent City.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-22-3-C2-3333", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "After a Ravage Action adds Blight to a Coastal Land, add 1 Blight to that board's Ocean (without cascading). Treat the Ocean as a Coastal Wetland for this rule and for Blight removal/movement.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__AfterRavage__Ladversaries_Stage(), "Add 1 Town to each Inland land that matches a Ravage card and is within 1 Range of Town/City.", $m_s_None$())]))), new $c_s_Some("If the number of Coastal lands with City is ever greater than (2 x # of boards), the Invaders win."), "On the single board with the most Coastal Town/City, add 1 Town to the N lands with the fewest Town (N = # of players.)", $m_sci_Nil$().ct($m_sr_ScalaRunTime$().z(new ($d_T.r().C)(["10 (3/4/3)", "11 (4/4/3)", "13 (4/5/4)", "14 (5/5/4)", "15 (5/6/4)", "16 (6/6/4)"])))));
  this.l6 = $m_sci_Nil$().ct($m_sr_ScalaRunTime$().z(new ($d_Ladversaries_Adversary.r().C)([this.iF, this.l7, this.ld, this.l8, this.la, this.l9, this.lb, this.lc])));
}
$p = $c_Ladversaries_Adversary$.prototype = new $h_O();
$p.constructor = $c_Ladversaries_Adversary$;
/** @constructor */
function $h_Ladversaries_Adversary$() {
}
$h_Ladversaries_Adversary$.prototype = $p;
var $d_Ladversaries_Adversary$ = new $TypeData().i($c_Ladversaries_Adversary$, "adversaries.Adversary$", ({
  d8: 1,
  aK: 1,
  cV: 1
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
  da: 1,
  aK: 1,
  cW: 1
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
  this.iH = null;
  this.le = null;
  this.lf = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.iH = $m_scm_Buffer$().oQ($m_sr_ScalaRunTime$().z(new ($d_F1.r().C)([])));
  this.le = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    try {
      console.error(((this.f1(err) + "\n") + this.sr(err, "\n")));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error("Error in AirstreamError.consoleErrorCallback:");
      console.error(e$2);
    }
  }));
  this.lf = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => {
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    var $x_1 = err$2;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.aG : $x_1);
  }));
  this.tn(this.le);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.f1 = (function(e) {
  try {
    var errorMessage = e.bO();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).kA() + ": ") + errorMessage);
});
$p.sr = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().u7(err.ss()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.rv = (function(message, cause) {
  return ((message + "; cause: ") + (cause.c() ? $m_s_None$() : new $c_s_Some(this.f1(cause.T()))));
});
$p.tn = (function(fn) {
  this.iH.au(fn);
});
$p.cC = (function(err) {
  var this$1 = this.iH;
  var it = this$1.g();
  while (it.l()) {
    var x0 = it.e();
    try {
      x0.b(err);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = this.lf;
      if (((x0 === null) ? (x$2 === null) : x0.n(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.aG : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().tM(0.0, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((e$2) => (() => {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.aG : e$2);
      }))(e$2)));
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$, "com.raquo.airstream.core.AirstreamError$", ({
  dg: 1,
  aK: 1,
  cW: 1
}));
var $n_Lcom_raquo_airstream_core_AirstreamError$;
function $m_Lcom_raquo_airstream_core_AirstreamError$() {
  if ((!$n_Lcom_raquo_airstream_core_AirstreamError$)) {
    $n_Lcom_raquo_airstream_core_AirstreamError$ = new $c_Lcom_raquo_airstream_core_AirstreamError$();
  }
  return $n_Lcom_raquo_airstream_core_AirstreamError$;
}
function $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V($thiz) {
  $thiz.dc(true);
  $thiz.ha((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().qp(onNext, $m_s_PartialFunction$().hL, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.h8()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.h8()) {
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
  var x = $thiz.f4();
  if ((x === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().bL($m_sr_ScalaRunTime$().z(new ($d_F0.r().C)([])));
    $thiz.ha(newArray);
    return newArray;
  } else {
    return x;
  }
}
var $d_Lcom_raquo_airstream_core_Observer = new $TypeData().i(1, "com.raquo.airstream.core.Observer", ({
  aO: 1,
  aE: 1,
  ac: 1
}));
function $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($thiz, value, r) {
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.rl(value));
}
function $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($thiz, nodes, renderableSeq) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    ($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(nodes, null, null)).N(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((_$9) => {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().fL(element$2, _$9, (void 0));
    }))(element)));
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$1() {
  this.m8 = null;
  this.m9 = false;
}
$p = $c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$1() {
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = $p;
$p.th = (function() {
  if ((!this.m9)) {
    this.m8 = new $c_Lcom_raquo_laminar_keys_EventProp("DOMContentLoaded");
    this.m9 = true;
  }
  return this.m8;
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$$anon$1, "com.raquo.laminar.api.Laminar$$anon$1", ({
  dT: 1,
  bt: 1,
  e6: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(key, itemsToAdd) {
  this.n7 = null;
  this.j9 = null;
  this.n7 = key;
  this.j9 = itemsToAdd;
}
$p = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_CompositeKeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = $p;
$p.d7 = (function(element) {
  if ((!this.j9.c())) {
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this.n7, null, this.j9, $m_sci_Nil$());
  }
});
var $d_Lcom_raquo_laminar_modifiers_CompositeKeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_CompositeKeySetter, "com.raquo.laminar.modifiers.CompositeKeySetter", ({
  eB: 1,
  Y: 1,
  bz: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.fj = null;
  this.ja = null;
  this.jb = null;
  this.fj = eventProcessor;
  this.ja = ((ev) => {
    var processor = eventProcessor.gn;
    var this$2 = processor.b(ev);
    if ((!this$2.c())) {
      callback.b(this$2.T());
    }
  });
  this.jb = (() => {
    var outer = null;
    outer = this;
    var this$3 = ({});
    if ((outer === null)) {
      throw new $c_jl_NullPointerException();
    }
    this$3.capture = outer.fj.go;
    this$3.passive = outer.fj.hD;
    return this$3;
  })();
}
$p = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $p;
$p.d7 = (function(element) {
  this.ro(element, false);
});
$p.ro = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().qX(element.bu, this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.j8, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().tq(element.bu, this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().tZ(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().hl(element.cD, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().qh(element.cD, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner$1) => {
      activate.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.w = (function() {
  return (("EventListener(" + this.fj.eA.gp) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  eC: 1,
  Y: 1,
  by: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeySetter(key, value, action) {
  this.n9 = null;
  this.na = null;
  this.n8 = null;
  this.n9 = key;
  this.na = value;
  this.n8 = action;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_KeySetter.prototype = $p;
$p.d7 = (function(element) {
  this.n8.kf(element, this.n9, this.na);
});
var $d_Lcom_raquo_laminar_modifiers_KeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeySetter, "com.raquo.laminar.modifiers.KeySetter", ({
  eD: 1,
  Y: 1,
  bz: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeyUpdater(key, values, update) {
  this.nb = null;
  this.nd = null;
  this.nc = null;
  this.nb = key;
  this.nd = values;
  this.nc = update;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeyUpdater;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeyUpdater() {
}
$h_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = $p;
$p.d7 = (function(element) {
  this.kj(element);
});
$p.kj = (function(element) {
  element.tf(this.nb);
  var observable = this.nd;
  var onNext = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    this.nc.kf(element, value, this);
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().tP(element.cD, observable, onNext);
});
var $d_Lcom_raquo_laminar_modifiers_KeyUpdater = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeyUpdater, "com.raquo.laminar.modifiers.KeyUpdater", ({
  eE: 1,
  Y: 1,
  by: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.jg = null;
  this.nj = null;
  this.nk = null;
  this.nj = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().sL(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.nk = container;
  this.t0();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.ie = (function() {
  return this.jg;
});
$p.p7 = (function(x$0) {
  this.jg = x$0;
});
$p.t0 = (function() {
  this.jg.oD();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().fL(this, this.nj, (void 0));
});
$p.aJ = (function() {
  return this.nk;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  eV: 1,
  aG: 1,
  bA: 1
}));
function $isArrayOf_Lcom_raquo_laminar_tags_CustomHtmlTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eY)));
}
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.C.Z) {
    return ($thiz.C.Q().kA() + "[]");
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
  this.jk = null;
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
$p.kA = (function() {
  if ((this.jk === null)) {
    this.jk = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.jk;
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  fa: 1,
  a: 1,
  a4: 1
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
  this.qC = null;
  $n_s_Predef$ = this;
  this.qC = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.q6 = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  g9: 1,
  g2: 1,
  g3: 1
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
      return $thiz.bB();
      break;
    }
    case 1: {
      return $thiz.bw();
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.fp = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.fp = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.bE = (function() {
  return this.fp.pf($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.aD = (function(it) {
  return this.fp.kt(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.aR = (function() {
  return this.fp.ip($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.dM = (function(elems) {
  return this.fp.kt(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.fr = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.fr = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.bE = (function() {
  return this.fr.bE();
});
$p.aD = (function(it) {
  return this.fr.aD(it);
});
$p.aR = (function() {
  return this.fr.aR();
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
  gv: 1,
  bb: 1,
  i: 1
}));
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.s();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1));
    } else {
      var i = 0;
      var it = $thiz.g();
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
function $f_sc_Iterator__indexWhere__F1__I__I($thiz, p, from) {
  var i = ((from > 0) ? from : 0);
  var dropped = $thiz.cO(from);
  while (dropped.l()) {
    if ((!(!p.b(dropped.e())))) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).h2(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().E : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.g();
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
$p.aR = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$p.bE = (function() {
  return this.E;
});
$p.aD = (function(source) {
  return source.g();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  gw: 1,
  E: 1,
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
  $thiz.jG = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.jG = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.aD = (function(it) {
  return this.jG.aD(it);
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
$p.ps = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((x3) => (() => x3.g()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().kv(it))));
});
$p.aR = (function() {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((it$2$2) => $m_sc_View$().ps(it$2$2))));
});
$p.bE = (function() {
  return $m_sc_View$Empty$();
});
$p.aD = (function(source) {
  return this.ps(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  gM: 1,
  E: 1,
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
  this.a8 = 0;
  this.av = 0;
  this.aT = null;
  this.bX = null;
  this.b7 = 0;
  this.bP = 0;
  this.a8 = dataMap;
  this.av = nodeMap;
  this.aT = content;
  this.bX = originalHashes;
  this.b7 = size;
  this.bP = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $p;
$p.I = (function() {
  return this.b7;
});
$p.bD = (function() {
  return this.bP;
});
$p.d9 = (function(index) {
  return this.aT.a[(index << 1)];
});
$p.da = (function(index) {
  return this.aT.a[((1 + (index << 1)) | 0)];
});
$p.ky = (function(index) {
  return new $c_T2(this.aT.a[(index << 1)], this.aT.a[((1 + (index << 1)) | 0)]);
});
$p.cr = (function(index) {
  return this.bX.a[index];
});
$p.cQ = (function(index) {
  return this.aT.a[(((((-1) + this.aT.a.length) | 0) - index) | 0)];
});
$p.ke = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().cs(keyHash, shift);
  var bitpos = $m_sci_Node$().bN(mask);
  if (((this.a8 & bitpos) !== 0)) {
    var index = $m_sci_Node$().bx(this.a8, mask, bitpos);
    if ($m_sr_BoxesRunTime$().k(key, this.d9(index))) {
      return this.da(index);
    } else {
      throw new $c_ju_NoSuchElementException(("key not found: " + key));
    }
  } else if (((this.av & bitpos) !== 0)) {
    return this.cQ($m_sci_Node$().bx(this.av, mask, bitpos)).ke(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.ik = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().cs(keyHash, shift);
  var bitpos = $m_sci_Node$().bN(mask);
  if (((this.a8 & bitpos) !== 0)) {
    var index = $m_sci_Node$().bx(this.a8, mask, bitpos);
    return ($m_sr_BoxesRunTime$().k(key, this.d9(index)) ? new $c_s_Some(this.da(index)) : $m_s_None$());
  } else {
    return (((this.av & bitpos) !== 0) ? this.cQ($m_sci_Node$().bx(this.av, mask, bitpos)).ik(key, originalHash, keyHash, ((5 + shift) | 0)) : $m_s_None$());
  }
});
$p.kx = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().cs(keyHash, shift);
  var bitpos = $m_sci_Node$().bN(mask);
  if (((this.a8 & bitpos) !== 0)) {
    var index = $m_sci_Node$().bx(this.a8, mask, bitpos);
    return ($m_sr_BoxesRunTime$().k(key, this.d9(index)) ? this.da(index) : f.S());
  } else {
    return (((this.av & bitpos) !== 0) ? this.cQ($m_sci_Node$().bx(this.av, mask, bitpos)).kx(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.S());
  }
});
$p.kk = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().cs(keyHash, shift);
  var bitpos = $m_sci_Node$().bN(mask);
  if (((this.a8 & bitpos) !== 0)) {
    var index = $m_sci_Node$().bx(this.a8, mask, bitpos);
    return ((this.bX.a[index] === originalHash) && $m_sr_BoxesRunTime$().k(key, this.d9(index)));
  } else {
    return (((this.av & bitpos) !== 0) && this.cQ($m_sci_Node$().bx(this.av, mask, bitpos)).kk(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.l5 = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().cs(keyHash, shift);
  var bitpos = $m_sci_Node$().bN(mask);
  if (((this.a8 & bitpos) !== 0)) {
    var index = $m_sci_Node$().bx(this.a8, mask, bitpos);
    var key0 = this.d9(index);
    var key0UnimprovedHash = this.cr(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().k(key0, key))) {
      if (replaceValue) {
        var value0 = this.da(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.rF(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.da(index);
      var key0Hash = $m_sc_Hashing$().bb(key0UnimprovedHash);
      return this.rB(bitpos, key0Hash, this.kP(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.av & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().bx(this.av, mask, bitpos);
    var subNode = this.cQ(index$2);
    var subNodeNew$2 = subNode.qn(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.rD(bitpos, subNode, subNodeNew$2));
  } else {
    return this.rz(bitpos, key, originalHash, keyHash, value);
  }
});
$p.kP = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().bs($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [new $c_T2(key0, value0), new $c_T2(key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().cs(keyHash0, shift);
    var mask1 = $m_sci_Node$().cs(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().bN(mask0) | $m_sci_Node$().bN(mask1));
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key0, value0, key1, value1]), new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash) : new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key1, value1, key0, value0]), new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash));
    } else {
      var nodeMap = $m_sci_Node$().bN(mask0);
      var node = this.kP(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().gu, node.I(), node.bD());
    }
  }
});
$p.h6 = (function() {
  return (this.av !== 0);
});
$p.hd = (function() {
  return $m_jl_Integer$().br(this.av);
});
$p.fS = (function() {
  return (this.a8 !== 0);
});
$p.hg = (function() {
  return $m_jl_Integer$().br(this.a8);
});
$p.cL = (function(bitpos) {
  return $m_jl_Integer$().br((this.a8 & (((-1) + bitpos) | 0)));
});
$p.f5 = (function(bitpos) {
  return $m_jl_Integer$().br((this.av & (((-1) + bitpos) | 0)));
});
$p.rF = (function(bitpos, newKey, newValue) {
  var dataIx = this.cL(bitpos);
  var idx = (dataIx << 1);
  var src = this.aT;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.p(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.a8, this.av, dst, this.bX, this.b7, this.bP);
});
$p.rD = (function(bitpos, oldNode, newNode) {
  var idx = (((((-1) + this.aT.a.length) | 0) - this.f5(bitpos)) | 0);
  var src = this.aT;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.p(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.a8, this.av, dst, this.bX, ((((this.b7 - oldNode.I()) | 0) + newNode.I()) | 0), ((((this.bP - oldNode.bD()) | 0) + newNode.bD()) | 0));
});
$p.rz = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.cL(bitpos);
  var idx = (dataIx << 1);
  var src = this.aT;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.p(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.p(idx, dst, destPos, length);
  var dstHashes = this.pF(this.bX, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.a8 | bitpos), this.av, dst, dstHashes, ((1 + this.b7) | 0), ((this.bP + keyHash) | 0));
});
$p.sY = (function(bitpos, keyHash, node) {
  var dataIx = this.cL(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.aT.a.length) | 0) - this.f5(bitpos)) | 0);
  var src = this.aT;
  var dst = new $ac_O((((-1) + src.a.length) | 0));
  src.p(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.p(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.a.length - idxNew) | 0)) | 0);
  src.p(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.iw(this.bX, dataIx);
  this.a8 = (this.a8 ^ bitpos);
  this.av = (this.av | bitpos);
  this.aT = dst;
  this.bX = dstHashes;
  this.b7 = (((((-1) + this.b7) | 0) + node.I()) | 0);
  this.bP = ((((this.bP - keyHash) | 0) + node.bD()) | 0);
  return this;
});
$p.rB = (function(bitpos, keyHash, node) {
  var dataIx = this.cL(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.aT.a.length) | 0) - this.f5(bitpos)) | 0);
  var src = this.aT;
  var dst = new $ac_O((((-1) + src.a.length) | 0));
  src.p(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.p(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.a.length - idxNew) | 0)) | 0);
  src.p(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.iw(this.bX, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.a8 ^ bitpos), (this.av | bitpos), dst, dstHashes, (((((-1) + this.b7) | 0) + node.I()) | 0), ((((this.bP - keyHash) | 0) + node.bD()) | 0));
});
$p.N = (function(f) {
  var iN = $m_jl_Integer$().br(this.a8);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.b(this.ky(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().br(this.av);
  var j = 0;
  while ((j < jN)) {
    this.cQ(j).N(f);
    j = ((1 + j) | 0);
  }
});
$p.f0 = (function(f) {
  var iN = $m_jl_Integer$().br(this.a8);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.dL(this.d9(i$1), this.da(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().br(this.av);
  var j = 0;
  while ((j < jN)) {
    this.cQ(j).f0(f);
    j = ((1 + j) | 0);
  }
});
$p.n = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.bP === that.bP) && (this.av === that.av)) && (this.a8 === that.a8)) && (this.b7 === that.b7)) && $m_ju_Arrays$().ih(this.bX, that.bX))) {
      var a1 = this.aT;
      var a2 = that.aT;
      var length = this.aT.a.length;
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
$p.p8 = (function() {
  var this$1 = this.aT;
  var contentClone = this$1.j();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().br(this.a8) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].pa();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.a8, this.av, contentClone, this.bX.j(), this.b7, this.bP);
});
$p.pa = (function() {
  return this.p8();
});
$p.qn = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.l5(key, value, originalHash, hash, shift, replaceValue);
});
$p.h5 = (function(index) {
  return this.cQ(index);
});
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ce)));
}
var $d_sci_BitmapIndexedMapNode = new $TypeData().i($c_sci_BitmapIndexedMapNode, "scala.collection.immutable.BitmapIndexedMapNode", ({
  ce: 1,
  cu: 1,
  aB: 1
}));
/** @constructor */
function $c_sci_BitmapIndexedSetNode(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
  this.Z = 0;
  this.az = 0;
  this.b8 = null;
  this.cg = null;
  this.bj = 0;
  this.bY = 0;
  this.Z = dataMap;
  this.az = nodeMap;
  this.b8 = content;
  this.cg = originalHashes;
  this.bj = size;
  this.bY = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedSetNode.prototype = new $h_sci_SetNode();
$p.constructor = $c_sci_BitmapIndexedSetNode;
/** @constructor */
function $h_sci_BitmapIndexedSetNode() {
}
$h_sci_BitmapIndexedSetNode.prototype = $p;
$p.I = (function() {
  return this.bj;
});
$p.bD = (function() {
  return this.bY;
});
$p.cS = (function(index) {
  return this.b8.a[index];
});
$p.cr = (function(index) {
  return this.cg.a[index];
});
$p.cR = (function(index) {
  return this.b8.a[(((((-1) + this.b8.a.length) | 0) - index) | 0)];
});
$p.h3 = (function(element, originalHash, elementHash, shift) {
  var mask = $m_sci_Node$().cs(elementHash, shift);
  var bitpos = $m_sci_Node$().bN(mask);
  if (((this.Z & bitpos) !== 0)) {
    var index = $m_sci_Node$().bx(this.Z, mask, bitpos);
    return ((this.cg.a[index] === originalHash) && $m_sr_BoxesRunTime$().k(element, this.cS(index)));
  }
  if (((this.az & bitpos) !== 0)) {
    return this.cR($m_sci_Node$().bx(this.az, mask, bitpos)).h3(element, originalHash, elementHash, ((5 + shift) | 0));
  }
  return false;
});
$p.ql = (function(element, originalHash, elementHash, shift) {
  var mask = $m_sci_Node$().cs(elementHash, shift);
  var bitpos = $m_sci_Node$().bN(mask);
  if (((this.Z & bitpos) !== 0)) {
    var index = $m_sci_Node$().bx(this.Z, mask, bitpos);
    var element0 = this.cS(index);
    if (Object.is(element0, element)) {
      return this;
    } else {
      var element0UnimprovedHash = this.cr(index);
      var element0Hash = $m_sc_Hashing$().bb(element0UnimprovedHash);
      if (((originalHash === element0UnimprovedHash) && $m_sr_BoxesRunTime$().k(element0, element))) {
        return this;
      } else {
        return this.rC(bitpos, element0Hash, this.kO(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0)));
      }
    }
  }
  if (((this.az & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().bx(this.az, mask, bitpos);
    var subNode = this.cR(index$2);
    var subNodeNew$2 = subNode.qm(element, originalHash, elementHash, ((5 + shift) | 0));
    if ((subNode === subNodeNew$2)) {
      return this;
    } else {
      return this.rE(bitpos, subNode, subNodeNew$2);
    }
  }
  return this.rA(bitpos, element, originalHash, elementHash);
});
$p.kO = (function(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionSetNode(originalKeyHash0, keyHash0, $m_sci_Vector$().bs($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [key0, key1])));
  } else {
    var mask0 = $m_sci_Node$().cs(keyHash0, shift);
    var mask1 = $m_sci_Node$().cs(keyHash1, shift);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().bN(mask0) | $m_sci_Node$().bN(mask1));
      var newCachedHashCode = ((keyHash0 + keyHash1) | 0);
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedSetNode(dataMap, 0, new $ac_O([key0, key1]), new $ac_I(new Int32Array([originalKeyHash0, originalKeyHash1])), 2, newCachedHashCode) : new $c_sci_BitmapIndexedSetNode(dataMap, 0, new $ac_O([key1, key0]), new $ac_I(new Int32Array([originalKeyHash1, originalKeyHash0])), 2, newCachedHashCode));
    } else {
      var nodeMap = $m_sci_Node$().bN(mask0);
      var node = this.kO(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedSetNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().gu, node.I(), node.bD());
    }
  }
});
$p.fS = (function() {
  return (this.Z !== 0);
});
$p.hg = (function() {
  return $m_jl_Integer$().br(this.Z);
});
$p.h6 = (function() {
  return (this.az !== 0);
});
$p.hd = (function() {
  return $m_jl_Integer$().br(this.az);
});
$p.cL = (function(bitpos) {
  return $m_jl_Integer$().br((this.Z & (((-1) + bitpos) | 0)));
});
$p.f5 = (function(bitpos) {
  return $m_jl_Integer$().br((this.az & (((-1) + bitpos) | 0)));
});
$p.rE = (function(bitpos, oldNode, newNode) {
  var idx = (((((-1) + this.b8.a.length) | 0) - this.f5(bitpos)) | 0);
  var src = this.b8;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.p(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedSetNode(this.Z, this.az, dst, this.cg, ((((this.bj - oldNode.I()) | 0) + newNode.I()) | 0), ((((this.bY - oldNode.bD()) | 0) + newNode.bD()) | 0));
});
$p.rA = (function(bitpos, key, originalHash, elementHash) {
  var dataIx = this.cL(bitpos);
  var src = this.b8;
  var dst = new $ac_O(((1 + src.a.length) | 0));
  src.p(0, dst, 0, dataIx);
  dst.a[dataIx] = key;
  var destPos = ((1 + dataIx) | 0);
  var length = ((src.a.length - dataIx) | 0);
  src.p(dataIx, dst, destPos, length);
  var dstHashes = this.pF(this.cg, dataIx, originalHash);
  return new $c_sci_BitmapIndexedSetNode((this.Z | bitpos), this.az, dst, dstHashes, ((1 + this.bj) | 0), ((this.bY + elementHash) | 0));
});
$p.rC = (function(bitpos, elementHash, node) {
  var dataIx = this.cL(bitpos);
  var idxNew = (((((-1) + this.b8.a.length) | 0) - this.f5(bitpos)) | 0);
  var src = this.b8;
  var dst = new $ac_O(src.a.length);
  src.p(0, dst, 0, dataIx);
  var srcPos = ((1 + dataIx) | 0);
  var length = ((idxNew - dataIx) | 0);
  src.p(srcPos, dst, dataIx, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((1 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-1) + ((src.a.length - idxNew) | 0)) | 0);
  src.p(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.iw(this.cg, dataIx);
  return new $c_sci_BitmapIndexedSetNode((this.Z ^ bitpos), (this.az | bitpos), dst, dstHashes, (((((-1) + this.bj) | 0) + node.I()) | 0), ((((this.bY - elementHash) | 0) + node.bD()) | 0));
});
$p.sZ = (function(bitpos, keyHash, node) {
  var dataIx = this.cL(bitpos);
  var idxNew = (((((-1) + this.b8.a.length) | 0) - this.f5(bitpos)) | 0);
  var src = this.b8;
  var srcPos = ((1 + dataIx) | 0);
  var dest = this.b8;
  var length = ((idxNew - dataIx) | 0);
  src.p(srcPos, dest, dataIx, length);
  this.b8.a[idxNew] = node;
  this.Z = (this.Z ^ bitpos);
  this.az = (this.az | bitpos);
  this.cg = this.iw(this.cg, dataIx);
  this.bj = (((((-1) + this.bj) | 0) + node.I()) | 0);
  this.bY = ((((this.bY - keyHash) | 0) + node.bD()) | 0);
  return this;
});
$p.N = (function(f) {
  var thisPayloadArity = $m_jl_Integer$().br(this.Z);
  var i$1 = 0;
  while ((i$1 < thisPayloadArity)) {
    f.b(this.cS(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var thisNodeArity = $m_jl_Integer$().br(this.az);
  var j = 0;
  while ((j < thisNodeArity)) {
    this.cR(j).N(f);
    j = ((1 + j) | 0);
  }
});
$p.l1 = (function(that, shift) {
  if ((this === that)) {
    return true;
  } else if ((!(that instanceof $c_sci_HashCollisionSetNode))) {
    if ((that instanceof $c_sci_BitmapIndexedSetNode)) {
      var thisBitmap = (this.Z | this.az);
      var nodeBitmap = (that.Z | that.az);
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
        var bitpos = $m_sci_Node$().bN(bitsToSkip);
        if (((this.Z & bitpos) !== 0)) {
          if (((that.Z & bitpos) !== 0)) {
            isValidSubset = $m_sr_BoxesRunTime$().k(this.cS($m_sci_Node$().f2(this.Z, bitpos)), that.cS($m_sci_Node$().f2(that.Z, bitpos)));
          } else {
            var thisDataIndex = $m_sci_Node$().f2(this.Z, bitpos);
            var payload = this.cS(thisDataIndex);
            var subNode = that.cR($m_sci_Node$().f2(that.az, bitpos));
            var elementUnimprovedHash = this.cr(thisDataIndex);
            var elementHash = $m_sc_Hashing$().bb(elementUnimprovedHash);
            isValidSubset = subNode.h3(payload, elementUnimprovedHash, elementHash, ((5 + shift) | 0));
          }
        } else if (((that.Z & bitpos) === 0)) {
          var subNode0 = this.cR($m_sci_Node$().f2(this.az, bitpos));
          var subNode1 = that.cR($m_sci_Node$().f2(that.az, bitpos));
          isValidSubset = subNode0.l1(subNode1, ((5 + shift) | 0));
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
    } else if ((((((this.bY === that.bY) && (this.az === that.az)) && (this.Z === that.Z)) && (this.bj === that.bj)) && $m_ju_Arrays$().ih(this.cg, that.cg))) {
      var a1 = this.b8;
      var a2 = that.b8;
      var length = this.b8.a.length;
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
$p.w = (function() {
  return $m_sc_StringOps$().sf("BitmapIndexedSetNode(size=%s, dataMap=%x, nodeMap=%x)", $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [this.bj, this.Z, this.az]));
});
$p.p9 = (function() {
  var this$1 = this.b8;
  var contentClone = this$1.j();
  var contentLength = contentClone.a.length;
  var i$1 = $m_jl_Integer$().br(this.Z);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].pb();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedSetNode(this.Z, this.az, contentClone, this.cg.j(), this.bj, this.bY);
});
$p.ks = (function(f) {
  var iN = $m_jl_Integer$().br(this.Z);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.dL(this.cS(i$1), this.cr(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().br(this.az);
  var j = 0;
  while ((j < jN)) {
    this.cR(j).ks(f);
    j = ((1 + j) | 0);
  }
});
$p.pb = (function() {
  return this.p9();
});
$p.qm = (function(element, originalHash, hash, shift) {
  return this.ql(element, originalHash, hash, shift);
});
$p.h5 = (function(index) {
  return this.cR(index);
});
function $isArrayOf_sci_BitmapIndexedSetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cf)));
}
var $d_sci_BitmapIndexedSetNode = new $TypeData().i($c_sci_BitmapIndexedSetNode, "scala.collection.immutable.BitmapIndexedSetNode", ({
  cf: 1,
  cz: 1,
  aB: 1
}));
/** @constructor */
function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
  this.jL = 0;
  this.e2 = 0;
  this.aE = null;
  this.jL = originalHash;
  this.e2 = hash;
  this.aE = content;
  $m_s_Predef$().q6((this.aE.m() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.fU = (function(key) {
  var iter = this.aE.g();
  var i = 0;
  while (iter.l()) {
    if ($m_sr_BoxesRunTime$().k(iter.e().bB(), key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.I = (function() {
  return this.aE.m();
});
$p.ke = (function(key, originalHash, hash, shift) {
  var this$1 = this.ik(key, originalHash, hash, shift);
  if (this$1.c()) {
    $m_sc_Iterator$().E.e();
    throw new $c_jl_ClassCastException();
  } else {
    return this$1.T();
  }
});
$p.ik = (function(key, originalHash, hash, shift) {
  if ((this.e2 === hash)) {
    var index = this.fU(key);
    return ((index >= 0) ? new $c_s_Some(this.aE.u(index).bw()) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.kx = (function(key, originalHash, hash, shift, f) {
  if ((this.e2 === hash)) {
    var x1 = this.fU(key);
    return ((x1 === (-1)) ? f.S() : this.aE.u(x1).bw());
  } else {
    return f.S();
  }
});
$p.kk = (function(key, originalHash, hash, shift) {
  return ((this.e2 === hash) && (this.fU(key) >= 0));
});
$p.qn = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.fU(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.aE.u(index).bw(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.aE.dS(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.aE.bq(new $c_T2(key, value))));
});
$p.h6 = (function() {
  return false;
});
$p.hd = (function() {
  return 0;
});
$p.cQ = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.fS = (function() {
  return true;
});
$p.hg = (function() {
  return this.aE.m();
});
$p.d9 = (function(index) {
  return this.aE.u(index).bB();
});
$p.da = (function(index) {
  return this.aE.u(index).bw();
});
$p.ky = (function(index) {
  return this.aE.u(index);
});
$p.cr = (function(index) {
  return this.jL;
});
$p.N = (function(f) {
  this.aE.N(f);
});
$p.f0 = (function(f) {
  this.aE.N(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.bB();
      var v = x0$1$2$2.bw();
      return f.dL(k, v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  })));
});
$p.n = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.e2 === that.e2) && (this.aE.m() === that.aE.m()))) {
      var iter = this.aE.g();
      while (iter.l()) {
        var x1$2 = iter.e();
        if ((x1$2 === null)) {
          throw new $c_s_MatchError(x1$2);
        }
        var key = x1$2.bB();
        var value = x1$2.bw();
        var index = that.fU(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().k(value, that.aE.u(index).bw())))) {
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
$p.bD = (function() {
  return Math.imul(this.aE.m(), this.e2);
});
$p.pa = (function() {
  return new $c_sci_HashCollisionMapNode(this.jL, this.e2, this.aE);
});
$p.h5 = (function(index) {
  return this.cQ(index);
});
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cg)));
}
var $d_sci_HashCollisionMapNode = new $TypeData().i($c_sci_HashCollisionMapNode, "scala.collection.immutable.HashCollisionMapNode", ({
  cg: 1,
  cu: 1,
  aB: 1
}));
/** @constructor */
function $c_sci_HashCollisionSetNode(originalHash, hash, content) {
  this.hT = 0;
  this.fu = 0;
  this.aK = null;
  this.hT = originalHash;
  this.fu = hash;
  this.aK = content;
  $m_s_Predef$().q6((this.aK.m() >= 2));
}
$p = $c_sci_HashCollisionSetNode.prototype = new $h_sci_SetNode();
$p.constructor = $c_sci_HashCollisionSetNode;
/** @constructor */
function $h_sci_HashCollisionSetNode() {
}
$h_sci_HashCollisionSetNode.prototype = $p;
$p.h3 = (function(element, originalHash, hash, shift) {
  return ((this.fu === hash) && $f_sc_SeqOps__contains__O__Z(this.aK, element));
});
$p.qm = (function(element, originalHash, hash, shift) {
  return (this.h3(element, originalHash, hash, shift) ? this : new $c_sci_HashCollisionSetNode(originalHash, hash, this.aK.bq(element)));
});
$p.h6 = (function() {
  return false;
});
$p.hd = (function() {
  return 0;
});
$p.cR = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.fS = (function() {
  return true;
});
$p.hg = (function() {
  return this.aK.m();
});
$p.cS = (function(index) {
  return this.aK.u(index);
});
$p.cr = (function(index) {
  return this.hT;
});
$p.I = (function() {
  return this.aK.m();
});
$p.N = (function(f) {
  var iter = this.aK.g();
  while (iter.l()) {
    f.b(iter.e());
  }
});
$p.bD = (function() {
  return Math.imul(this.aK.m(), this.fu);
});
$p.l1 = (function(that, shift) {
  if ((this === that)) {
    return true;
  } else if ((that instanceof $c_sci_HashCollisionSetNode)) {
    if ((this.aK.m() <= that.aK.m())) {
      var this$1 = this.aK;
      var eta$0$1 = that.aK;
      var res = true;
      var it = this$1.g();
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
    } else if (((this.fu === that.fu) && (this.aK.m() === that.aK.m()))) {
      var this$3 = this.aK;
      var eta$0$1 = that.aK;
      var res = true;
      var it = this$3.g();
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
$p.ks = (function(f) {
  var iter = this.aK.g();
  while (iter.l()) {
    var next = iter.e();
    f.dL(next, this.hT);
  }
});
$p.pb = (function() {
  return new $c_sci_HashCollisionSetNode(this.hT, this.fu, this.aK);
});
$p.h5 = (function(index) {
  return this.cR(index);
});
function $isArrayOf_sci_HashCollisionSetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ch)));
}
var $d_sci_HashCollisionSetNode = new $TypeData().i($c_sci_HashCollisionSetNode, "scala.collection.immutable.HashCollisionSetNode", ({
  ch: 1,
  cz: 1,
  aB: 1
}));
/** @constructor */
function $c_sci_HashMap$() {
  this.jM = null;
  $n_sci_HashMap$ = this;
  this.jM = new $c_sci_HashMap($m_sci_MapNode$().ob);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.sh = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().kc(source).kV());
});
$p.aD = (function(it) {
  return this.sh(it);
});
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  gW: 1,
  aZ: 1,
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
  this.gE = null;
  $n_sci_HashSet$ = this;
  this.gE = new $c_sci_HashSet($m_sci_SetNode$().og);
}
$p = $c_sci_HashSet$.prototype = new $h_O();
$p.constructor = $c_sci_HashSet$;
/** @constructor */
function $h_sci_HashSet$() {
}
$h_sci_HashSet$.prototype = $p;
$p.si = (function(source) {
  return ((source instanceof $c_sci_HashSet) ? source : ((source.s() === 0) ? this.gE : new $c_sci_HashSetBuilder().kd(source).kW()));
});
$p.aR = (function() {
  return new $c_sci_HashSetBuilder();
});
$p.aD = (function(source) {
  return this.si(source);
});
$p.bE = (function() {
  return this.gE;
});
var $d_sci_HashSet$ = new $TypeData().i($c_sci_HashSet$, "scala.collection.immutable.HashSet$", ({
  gZ: 1,
  E: 1,
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
  this.o8 = null;
  this.o9 = null;
  this.o8 = head;
  this.o9 = tail;
}
$p = $c_sci_LazyList$State$Cons.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$State$Cons;
/** @constructor */
function $h_sci_LazyList$State$Cons() {
}
$h_sci_LazyList$State$Cons.prototype = $p;
$p.t = (function() {
  return this.o8;
});
$p.aX = (function() {
  return this.o9;
});
var $d_sci_LazyList$State$Cons = new $TypeData().i($c_sci_LazyList$State$Cons, "scala.collection.immutable.LazyList$State$Cons", ({
  h9: 1,
  cm: 1,
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
$p.kB = (function() {
  throw new $c_ju_NoSuchElementException("head of empty lazy list");
});
$p.aX = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
});
$p.t = (function() {
  this.kB();
});
var $d_sci_LazyList$State$Empty$ = new $TypeData().i($c_sci_LazyList$State$Empty$, "scala.collection.immutable.LazyList$State$Empty$", ({
  ha: 1,
  cm: 1,
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
$p.pu = (function(it) {
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
  return new $c_sci_MapBuilderImpl().oE(it).q7();
});
$p.aD = (function(it) {
  return this.pu(it);
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  he: 1,
  aZ: 1,
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
$p.sk = (function(it) {
  return ((it.s() === 0) ? $m_sci_Set$EmptySet$() : ((it instanceof $c_sci_HashSet) ? it : (false ? it : ((it instanceof $c_sci_Set$Set1) ? it : ((it instanceof $c_sci_Set$Set2) ? it : ((it instanceof $c_sci_Set$Set3) ? it : ((it instanceof $c_sci_Set$Set4) ? it : ((it instanceof $c_sci_HashMap$HashKeySet) ? it : ((it instanceof $c_sci_MapOps$ImmutableKeySet) ? it : new $c_sci_SetBuilderImpl().oF(it).q8())))))))));
});
$p.aR = (function() {
  return new $c_sci_SetBuilderImpl();
});
$p.aD = (function(source) {
  return this.sk(source);
});
$p.bE = (function() {
  return $m_sci_Set$EmptySet$();
});
var $d_sci_Set$ = new $TypeData().i($c_sci_Set$, "scala.collection.immutable.Set$", ({
  hz: 1,
  E: 1,
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
    $thiz.bh(((that < 0) ? 0 : that));
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
$p.sl = (function(it) {
  var k = it.s();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).oH(it);
});
$p.aR = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.bE = (function() {
  return $ct_scm_HashSet__(new $c_scm_HashSet());
});
$p.aD = (function(source) {
  return this.sl(source);
});
var $d_scm_HashSet$ = new $TypeData().i($c_scm_HashSet$, "scala.collection.mutable.HashSet$", ({
  i4: 1,
  E: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.il)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(f) {
  this.os = null;
  this.os = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855() {
}
$h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = $p;
$p.S = (function() {
  return (0, this.os)();
});
var $d_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855 = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855, "scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855", ({
  iM: 1,
  cX: 1,
  aW: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(f) {
  this.ot = null;
  this.ot = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28() {
}
$h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = $p;
$p.b = (function(x0) {
  return (0, this.ot)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28, "scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28", ({
  iN: 1,
  bb: 1,
  i: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(f) {
  this.ou = null;
  this.ou = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc() {
}
$h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = $p;
$p.dL = (function(x0, x1) {
  return (0, this.ou)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc, "scala.runtime.AbstractFunction2.$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc", ({
  iO: 1,
  cY: 1,
  aX: 1
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
  return this.bM(x, $m_s_PartialFunction$().hL);
});
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  iW: 1,
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
$p.px = (function(f) {
  return ((arg1$2) => f.b(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  j3: 1,
  j4: 1,
  j5: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.jm)));
}
/** @constructor */
function $c_LMain$AdversarySelector(adversary, level) {
  this.cu = null;
  this.bU = 0;
  this.cu = adversary;
  this.bU = level;
}
$p = $c_LMain$AdversarySelector.prototype = new $h_O();
$p.constructor = $c_LMain$AdversarySelector;
/** @constructor */
function $h_LMain$AdversarySelector() {
}
$h_LMain$AdversarySelector.prototype = $p;
$p.by = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().i(acc, $f_T__hashCode__I("AdversarySelector"));
  acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().L(this.cu));
  acc = $m_sr_Statics$().i(acc, this.bU);
  return $m_sr_Statics$().F(acc, 2);
});
$p.n = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_LMain$AdversarySelector)) {
    if ((this.bU === x$0.bU)) {
      var x = this.cu;
      var x$2 = x$0.cu;
      return ((x === null) ? (x$2 === null) : x.n(x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.w = (function() {
  return $m_sr_ScalaRunTime$().fJ(this);
});
$p.be = (function() {
  return 2;
});
$p.bg = (function() {
  return "AdversarySelector";
});
$p.bf = (function(n) {
  if ((n === 0)) {
    return this.cu;
  }
  if ((n === 1)) {
    return this.bU;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_LMain$AdversarySelector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bc)));
}
var $d_LMain$AdversarySelector = new $TypeData().i($c_LMain$AdversarySelector, "Main$AdversarySelector", ({
  bc: 1,
  d: 1,
  D: 1,
  a: 1
}));
/** @constructor */
function $c_Ladversaries_Adversary(name, rules, lossCondition, escalation, fear) {
  this.gb = null;
  this.f9 = null;
  this.ga = null;
  this.g8 = null;
  this.g9 = null;
  this.gb = name;
  this.f9 = rules;
  this.ga = lossCondition;
  this.g8 = escalation;
  this.g9 = fear;
}
$p = $c_Ladversaries_Adversary.prototype = new $h_O();
$p.constructor = $c_Ladversaries_Adversary;
/** @constructor */
function $h_Ladversaries_Adversary() {
}
$h_Ladversaries_Adversary.prototype = $p;
$p.by = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().dd(this, (-889275714), false);
});
$p.n = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Ladversaries_Adversary)) {
    if ((this.gb === x$0.gb)) {
      var x = this.f9;
      var x$2 = x$0.f9;
      var $x_2 = ((x === null) ? (x$2 === null) : x.n(x$2));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$3 = this.ga;
      var x$4 = x$0.ga;
      var $x_1 = ((x$3 === null) ? (x$4 === null) : x$3.n(x$4));
    } else {
      var $x_1 = false;
    }
    if (($x_1 && (this.g8 === x$0.g8))) {
      var x$5 = this.g9;
      var x$6 = x$0.g9;
      return ((x$5 === null) ? (x$6 === null) : x$5.n(x$6));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.w = (function() {
  return $m_sr_ScalaRunTime$().fJ(this);
});
$p.be = (function() {
  return 5;
});
$p.bg = (function() {
  return "Adversary";
});
$p.bf = (function(n) {
  switch (n) {
    case 0: {
      return this.gb;
      break;
    }
    case 1: {
      return this.f9;
      break;
    }
    case 2: {
      return this.ga;
      break;
    }
    case 3: {
      return this.g8;
      break;
    }
    case 4: {
      return this.g9;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Ladversaries_Adversary(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bd)));
}
var $d_Ladversaries_Adversary = new $TypeData().i($c_Ladversaries_Adversary, "adversaries.Adversary", ({
  bd: 1,
  d: 1,
  D: 1,
  a: 1
}));
/** @constructor */
function $c_Ladversaries_Rule(level, stage, text, removeAboveLevel) {
  this.df = 0;
  this.dg = null;
  this.ev = null;
  this.eu = null;
  this.df = level;
  this.dg = stage;
  this.ev = text;
  this.eu = removeAboveLevel;
}
$p = $c_Ladversaries_Rule.prototype = new $h_O();
$p.constructor = $c_Ladversaries_Rule;
/** @constructor */
function $h_Ladversaries_Rule() {
}
$h_Ladversaries_Rule.prototype = $p;
$p.by = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().i(acc, $f_T__hashCode__I("Rule"));
  acc = $m_sr_Statics$().i(acc, this.df);
  acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().L(this.dg));
  acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().L(this.ev));
  acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().L(this.eu));
  return $m_sr_Statics$().F(acc, 4);
});
$p.n = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Ladversaries_Rule)) {
    if ((this.df === x$0.df)) {
      var x = this.dg;
      var x$2 = x$0.dg;
      var $x_1 = (x === x$2);
    } else {
      var $x_1 = false;
    }
    if (($x_1 && (this.ev === x$0.ev))) {
      var x$3 = this.eu;
      var x$4 = x$0.eu;
      return ((x$3 === null) ? (x$4 === null) : x$3.n(x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.w = (function() {
  return $m_sr_ScalaRunTime$().fJ(this);
});
$p.be = (function() {
  return 4;
});
$p.bg = (function() {
  return "Rule";
});
$p.bf = (function(n) {
  switch (n) {
    case 0: {
      return this.df;
      break;
    }
    case 1: {
      return this.dg;
      break;
    }
    case 2: {
      return this.ev;
      break;
    }
    case 3: {
      return this.eu;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Ladversaries_Rule(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.be)));
}
var $d_Ladversaries_Rule = new $TypeData().i($c_Ladversaries_Rule, "adversaries.Rule", ({
  be: 1,
  d: 1,
  D: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNextParam$2, handleObserverErrors$3, onErrorParam$2, outer) {
  this.li = null;
  this.lg = false;
  this.iI = null;
  this.lh = null;
  this.li = onNextParam$2;
  this.lg = handleObserverErrors$3;
  this.iI = onErrorParam$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.lh = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $p;
$p.f3 = (function() {
  return this.lh;
});
$p.eZ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.w = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fY = (function(nextValue) {
  try {
    this.li.b(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.lg) {
      this.he(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cC(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.he = (function(error) {
  try {
    if (this.iI.c7(error)) {
      this.iI.b(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cC(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cC(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.fZ = (function(nextValue) {
  nextValue.cP(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((error) => {
    this.he(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue$2) => {
    this.fY(nextValue$2);
  })));
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$8 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$8, "com.raquo.airstream.core.Observer$$anon$8", ({
  di: 1,
  aE: 1,
  ac: 1,
  aO: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTryParam$2, handleObserverErrors$4, outer) {
  this.iJ = null;
  this.lj = false;
  this.lk = null;
  this.iJ = onTryParam$2;
  this.lj = handleObserverErrors$4;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.lk = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $p;
$p.f3 = (function() {
  return this.lk;
});
$p.eZ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.w = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fY = (function(nextValue) {
  this.fZ(new $c_s_util_Success(nextValue));
});
$p.he = (function(error) {
  this.fZ(new $c_s_util_Failure(error));
});
$p.fZ = (function(nextValue) {
  try {
    if (this.iJ.c7(nextValue)) {
      this.iJ.b(nextValue);
    } else {
      nextValue.cP(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cC(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.lj && nextValue.pH())) {
      this.he(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.cP(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((originalError) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cC(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError));
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cC(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
      })));
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$9 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$9, "com.raquo.airstream.core.Observer$$anon$9", ({
  dj: 1,
  aE: 1,
  ac: 1,
  aO: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.ma = null;
  this.mb = false;
  this.qr = null;
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
$p.tR = (function() {
  if ((!this.mb)) {
    this.ma = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.mb = true;
  }
  return this.ma;
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$svg$, "com.raquo.laminar.api.Laminar$svg$", ({
  dU: 1,
  eh: 1,
  e3: 1,
  e5: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$() {
  this.x = null;
  $n_Lcom_raquo_laminar_api_package$ = this;
  this.x = new $c_Lcom_raquo_laminar_api_package$$anon$1();
}
$p = $c_Lcom_raquo_laminar_api_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$() {
}
$h_Lcom_raquo_laminar_api_package$.prototype = $p;
var $d_Lcom_raquo_laminar_api_package$ = new $TypeData().i($c_Lcom_raquo_laminar_api_package$, "com.raquo.laminar.api.package$", ({
  dY: 1,
  br: 1,
  bw: 1,
  bq: 1
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
  this.n0 = null;
  this.n2 = false;
  this.n1 = null;
  this.j1 = null;
  this.n0 = initialContext;
  this.n2 = preferStrictMode;
  this.n1 = insertFn;
  this.j1 = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.kj = (function(element) {
  var this$1 = this.n0;
  var insertContext = (this$1.c() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().tx(element, this.n2, this.j1) : this$1.T());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((mountContext) => this.n1.kf(insertContext, mountContext.j8, this.j1)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().hl(element.cD, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.b(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.d7 = (function(element) {
  this.kj(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  ek: 1,
  Y: 1,
  eo: 1,
  el: 1
}));
function $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__($thiz, name, prefixes) {
  $thiz.fh = name;
  $thiz.fi = prefixes;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_StyleProp() {
  this.fh = null;
  this.fi = null;
}
$p = $c_Lcom_raquo_laminar_keys_StyleProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_StyleProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_StyleProp() {
}
$h_Lcom_raquo_laminar_keys_StyleProp.prototype = $p;
$p.fH = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, $dp_toString__T(value), new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, styleProp, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().tH(element, styleProp, value$2);
  })));
});
$p.k8 = (function(values, ev) {
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.g3(), new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((el, v, _$1) => {
    $m_Lcom_raquo_laminar_DomApi$().tF(el, this, v);
  })));
});
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.nh = null;
  this.jc = null;
  this.nh = $m_s_None$();
  this.jc = $m_Lcom_raquo_laminar_DomApi$().rP(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.hi = (function(maybeNextParent) {
  this.nh = maybeNextParent;
});
$p.hn = (function(maybeNextParent) {
});
$p.d7 = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fL(parentNode, this, (void 0));
});
$p.aJ = (function() {
  return this.jc;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  eQ: 1,
  aG: 1,
  Y: 1,
  aT: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.nl = null;
  this.jh = null;
  this.nl = $m_s_None$();
  this.jh = $m_Lcom_raquo_laminar_DomApi$().rS(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.hi = (function(maybeNextParent) {
  this.nl = maybeNextParent;
});
$p.hn = (function(maybeNextParent) {
});
$p.d7 = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fL(parentNode, this, (void 0));
});
$p.tU = (function() {
  return this.jh.data;
});
$p.aJ = (function() {
  return this.jh;
});
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_TextNode, "com.raquo.laminar.nodes.TextNode", ({
  eW: 1,
  aG: 1,
  Y: 1,
  aT: 1
}));
function $isArrayOf_Ljava_io_IOException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f3)));
}
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  f7: 1,
  fb: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bC)));
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  bC: 1,
  a: 1,
  a8: 1,
  a4: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bE)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  bE: 1,
  a: 1,
  a8: 1,
  a4: 1
}), ((x) => (x instanceof $Char)));
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fe)));
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ff)));
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
  $thiz.q = "";
  return $thiz;
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException();
  }
  $thiz.q = str;
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
  this.q = null;
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.oK = (function(str) {
  var str$1 = $m_jl_String$().t2(str, 0, str.a.length);
  this.q = (("" + this.q) + str$1);
  return this;
});
$p.w = (function() {
  return this.q;
});
$p.m = (function() {
  return this.q.length;
});
$p.p3 = (function(index) {
  return this.q.charCodeAt(index);
});
$p.pA = (function(srcBegin, srcEnd, dst, dstBegin) {
  $f_T__getChars__I__I__AC__I__V(this.q, srcBegin, srcEnd, dst, dstBegin);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  fp: 1,
  aU: 1,
  f4: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fs)));
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fv)));
}
function $isArrayOf_Ljava_math_BigDecimal(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fx)));
}
function $isArrayOf_Ljava_math_BigInteger(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fy)));
}
function $p_ju_Formatter__sendToDest__T__V($thiz, s) {
  if (($thiz.eC === null)) {
    $thiz.dX = (("" + $thiz.dX) + s);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__V($thiz, s1, s2) {
  if (($thiz.eC === null)) {
    $thiz.dX = ((("" + $thiz.dX) + s1) + s2);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s1, s2]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__T__V($thiz, s1, s2, s3) {
  if (($thiz.eC === null)) {
    $thiz.dX = (($thiz.dX + (("" + s1) + s2)) + s3);
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
      var this$2 = $thiz.eC;
      this$2.q = (("" + this$2.q) + t);
      i = ((1 + i) | 0);
    }
  } catch (e) {
    if ((!false)) {
      throw e;
    }
  }
}
function $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter($thiz, localeInfo, format, args) {
  if ($thiz.js) {
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
    var re = $m_ju_Formatter$().ny;
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
        $thiz.kJ(flags);
      }
      $p_ju_Formatter__sendToDest__T__V($thiz, "\n");
    } else if ((conversion$2 === 37)) {
      if ((precision !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.kJ(flags);
      }
      if ((((1 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((-2) & flags) !== 0)) {
        $thiz.im(37, flags, (-2));
      }
      $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, "%");
    } else {
      var conversionLower = (((256 & flags) !== 0) ? (65535 & ((32 + conversion$2) | 0)) : conversion$2);
      var illegalFlags = $m_ju_Formatter$().nx.a[(((-97) + conversionLower) | 0)];
      if (((illegalFlags === (-1)) || (((256 & flags) & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion$2);
      }
      if ((((17 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.kJ(flags);
      }
      if (((precision !== (-1)) && ((512 & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if (((flags & illegalFlags) !== 0)) {
        $thiz.im(conversionLower, flags, illegalFlags);
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
        arg.uw($thiz, formattableFlags, width, precision);
      } else {
        if (((2 & flags) !== 0)) {
          $thiz.im(conversionLower, flags, 2);
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
          $thiz.h9(conversionLower, arg);
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
        var $x_3 = $m_RTLong$().kT(t.o, t.r);
      } else {
        if ((!false)) {
          $thiz.h9(conversionLower, arg);
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
        $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, arg.qj(radix), prefix);
      } else {
        if ($isInt(arg)) {
          var x2$5 = (arg | 0);
          var str$6 = (isOctal ? (+(x2$5 >>> 0.0)).toString(8) : (+(x2$5 >>> 0.0)).toString(16));
        } else {
          if ((!(arg instanceof $c_RTLong))) {
            $thiz.h9(conversionLower, arg);
          }
          var t$1 = $uJ(arg);
          var lo$1 = t$1.o;
          var hi$1 = t$1.r;
          var str$6 = (isOctal ? $m_jl_Long$().sM(lo$1, hi$1) : $m_jl_Long$().pJ(lo$1, hi$1));
        }
        if (((76 & flags) !== 0)) {
          $thiz.im(conversionLower, flags, 76);
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
          $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().sO(x2$6), flags, precision, conversionLower, localeInfo, width);
        }
      } else if (false) {
        $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().sN(arg), flags, precision, conversionLower, localeInfo, width);
      } else {
        $thiz.h9(conversionLower, arg);
      }
      break;
    }
    case 97: {
      if (((typeof arg) === "number")) {
        $p_ju_Formatter__formatHexFloatingPoint__I__I__I__D__V($thiz, flags, width, precision, (+arg));
      } else {
        $thiz.h9(conversionLower, arg);
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
  var rounded = x.q9(((1 + digitsAfterDot) | 0));
  var signStr = (rounded.di ? "-" : "");
  var intStr = rounded.dj;
  var fractionalDigitCount = (((-1) + intStr.length) | 0);
  var missingZeros = ((digitsAfterDot - fractionalDigitCount) | 0);
  var integerPart = intStr.substring(0, 1);
  var fractionalPart = (("" + intStr.substring(1)) + $m_ju_Formatter$().kI(missingZeros));
  var significandStr = (((fractionalPart === "") && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + fractionalPart));
  var exponent = ((fractionalDigitCount - rounded.cZ) | 0);
  var exponentSign = ((exponent < 0) ? "-" : "+");
  var this$2 = ((exponent < 0) ? ((-exponent) | 0) : exponent);
  var exponentAbsStr0 = ("" + this$2);
  var exponentAbsStr = ((exponentAbsStr0.length === 1) ? ("0" + exponentAbsStr0) : exponentAbsStr0);
  return ((((signStr + significandStr) + "e") + exponentSign) + exponentAbsStr);
}
function $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, scale, forceDecimalSep) {
  var rounded = x.tJ(scale);
  var signStr = (rounded.di ? "-" : "");
  var intStr = rounded.dj;
  var intStrLen = intStr.length;
  var minDigits = ((1 + scale) | 0);
  var expandedIntStr = ((intStrLen >= minDigits) ? intStr : (("" + $m_ju_Formatter$().kI(((minDigits - intStrLen) | 0))) + intStr));
  var dotPos = ((expandedIntStr.length - scale) | 0);
  var integerPart = (signStr + expandedIntStr.substring(0, dotPos));
  return (((scale === 0) && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + expandedIntStr.substring(dotPos)));
}
function $p_ju_Formatter__generalScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, precision, forceDecimalSep) {
  var p = ((precision === 0) ? 1 : precision);
  var rounded = x.q9(p);
  var orderOfMagnitude = (((((-1) + rounded.dj.length) | 0) - rounded.cZ) | 0);
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
    var t = $m_jl_FloatingPointBits$().rZ(arg);
    var lo = t.o;
    var hi = t.r;
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
    var lo$3 = t$1.o;
    var hi$4 = t$1.r;
    var exponent = (x1___3 | 0);
    var t$2 = new $c_RTLong(lo$3, hi$4);
    var lo$4 = t$2.o;
    var hi$5 = t$2.r;
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
    var baseStr = $m_jl_Long$().pJ(roundedMantissa__lo, roundedMantissa__hi);
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
  $thiz.eC = dest;
  $thiz.nw = formatterLocaleInfo;
  $thiz.dX = "";
  $thiz.js = false;
  return $thiz;
}
function $ct_ju_Formatter__($thiz) {
  $ct_ju_Formatter__jl_Appendable__ju_Formatter$LocaleInfo__($thiz, null, $m_ju_Formatter$RootLocaleInfo$());
  return $thiz;
}
/** @constructor */
function $c_ju_Formatter() {
  this.eC = null;
  this.nw = null;
  this.dX = null;
  this.js = false;
}
$p = $c_ju_Formatter.prototype = new $h_O();
$p.constructor = $c_ju_Formatter;
/** @constructor */
function $h_ju_Formatter() {
}
$h_ju_Formatter.prototype = $p;
$p.se = (function(format, args) {
  return $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter(this, this.nw, format, args);
});
$p.w = (function() {
  if (this.js) {
    throw new $c_ju_FormatterClosedException();
  }
  return ((this.eC === null) ? this.dX : this.eC.q);
});
$p.kJ = (function(flags) {
  throw new $c_ju_IllegalFormatFlagsException($p_ju_Formatter__flagsToString__I__T(this, flags));
});
$p.im = (function(conversionLower, flags, illegalFlags) {
  throw new $c_ju_FormatFlagsConversionMismatchException($p_ju_Formatter__flagsToString__I__T(this, (flags & illegalFlags)), conversionLower);
});
$p.h9 = (function(conversionLower, arg) {
  throw new $c_ju_IllegalFormatConversionException(conversionLower, $objectGetClass(arg));
});
var $d_ju_Formatter = new $TypeData().i($c_ju_Formatter, "java.util.Formatter", ({
  fD: 1,
  f1: 1,
  f8: 1,
  f2: 1
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
$p.bM = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.w = (function() {
  return "<function1>";
});
$p.c7 = (function(x) {
  return false;
});
$p.kg = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.b = (function(v1) {
  this.kg(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  g8: 1,
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
$p.g = (function() {
  return this;
});
$p.h2 = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.cO = (function(n) {
  return this.g1(n, (-1));
});
$p.g1 = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.w = (function() {
  return "<iterator>";
});
$p.bR = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.ib = (function(pf) {
  return $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(this, pf);
});
$p.en = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.iA = (function(evidence$2) {
  return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2);
});
$p.s = (function() {
  return (-1);
});
/** @constructor */
function $c_sc_Iterable$() {
  this.fr = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_Iterable$());
}
$p = $c_sc_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sc_Iterable$;
/** @constructor */
function $h_sc_Iterable$() {
}
$h_sc_Iterable$.prototype = $p;
var $d_sc_Iterable$ = new $TypeData().i($c_sc_Iterable$, "scala.collection.Iterable$", ({
  gt: 1,
  bY: 1,
  E: 1,
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
  this.jG = null;
  this.nY = null;
  this.nZ = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.nY = $ct_O__(new $c_O());
  this.nZ = new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sc_Map$().nY));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  gE: 1,
  gF: 1,
  aZ: 1,
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
  $thiz.e0 = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.e0 = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.oQ = (function(elems) {
  return this.e0.dM(elems);
});
$p.s1 = (function() {
  return this.e0.bE();
});
$p.ij = (function(it) {
  return this.e0.aD(it);
});
$p.aR = (function() {
  return this.e0.aR();
});
$p.aD = (function(source) {
  return this.ij(source);
});
$p.bE = (function() {
  return this.s1();
});
$p.dM = (function(elems) {
  return this.oQ(elems);
});
function $f_sc_SeqOps__appended__O__O($thiz, elem) {
  return $thiz.bc().aD($ct_sc_View$Appended__sc_IterableOps__O__(new $c_sc_View$Appended(), $thiz, elem));
}
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cM(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => x$2$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.fP(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.bd(idx) > 0));
}
function $f_sc_SeqOps__indexOf__O__I__I($thiz, elem, from) {
  return $thiz.fV(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sr_BoxesRunTime$().k(elem, x$1$2$2))), from);
}
function $f_sc_SeqOps__contains__O__Z($thiz, elem) {
  return $thiz.ii(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$3$2$2) => $m_sr_BoxesRunTime$().k(x$3$2$2, elem))));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.bd(0) === 0);
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
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.g(), that);
  } else {
    return false;
  }
}
function $f_sc_StrictOptimizedIterableOps__map__F1__O($thiz, f) {
  var b = $thiz.bc().aR();
  var it = $thiz.g();
  while (it.l()) {
    b.au(f.b(it.e()));
  }
  return b.aW();
}
function $f_sc_StrictOptimizedIterableOps__collect__s_PartialFunction__O($thiz, pf) {
  var b = $thiz.bc().aR();
  var marker = $m_sr_Statics$PFMarker$();
  var it = $thiz.g();
  while (it.l()) {
    var elem = it.e();
    var v = pf.bM(elem, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((marker) => ((x$2$2) => marker))(marker)));
    if ((marker !== v)) {
      b.au(v);
    }
  }
  return b.aW();
}
/** @constructor */
function $c_sci_Iterable$() {
  this.fr = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.sj = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.aD.call(this, it));
});
$p.aD = (function(it) {
  return this.sj(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  h4: 1,
  bY: 1,
  E: 1,
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
  this.fx = null;
  this.o6 = null;
  $n_sci_LazyList$ = this;
  this.fx = new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$()))).pp();
  this.o6 = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$10$2$2) => $m_sr_Statics$PFMarker$()));
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.dM = (function(elems) {
  return this.kv(elems);
});
$p.tB = (function(ll, n) {
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((restRef, iRef) => (() => {
    var rest = restRef.ak;
    var i = iRef.aP;
    while (((i > 0) && (!rest.c()))) {
      rest = rest.B().aX();
      restRef.ak = rest;
      i = (((-1) + i) | 0);
      iRef.aP = i;
    }
    return rest.B();
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.kv = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.s() === 0) ? this.fx : new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().kX(coll.g()))))));
});
$p.qa = (function(it, suffix) {
  return (it.l() ? new $c_sci_LazyList$State$Cons(it.e(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().qa(it, suffix))))) : suffix.S());
});
$p.kX = (function(it) {
  return (it.l() ? new $c_sci_LazyList$State$Cons(it.e(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().kX(it))))) : $m_sci_LazyList$State$Empty$());
});
$p.aR = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.bE = (function() {
  return this.fx;
});
$p.aD = (function(source) {
  return this.kv(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  h5: 1,
  a0: 1,
  E: 1,
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
  this.gL = null;
  this.om = null;
  this.gL = outer;
  this.om = f$1;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.r5 = (function(x) {
  this.gL.au(x);
  return this;
});
$p.qU = (function(xs) {
  this.gL.b4(xs);
  return this;
});
$p.bh = (function(size) {
  this.gL.bh(size);
});
$p.aW = (function() {
  return this.om.b(this.gL.aW());
});
$p.b4 = (function(elems) {
  return this.qU(elems);
});
$p.au = (function(elem) {
  return this.r5(elem);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  hZ: 1,
  I: 1,
  H: 1,
  G: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.eg = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.eg = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.bh = (function(size) {
});
$p.r6 = (function(elem) {
  this.eg.au(elem);
  return this;
});
$p.qV = (function(xs) {
  this.eg.b4(xs);
  return this;
});
$p.b4 = (function(elems) {
  return this.qV(elems);
});
$p.au = (function(elem) {
  return this.r6(elem);
});
$p.aW = (function() {
  return this.eg;
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  b9: 1,
  I: 1,
  H: 1,
  G: 1
}));
function $f_sr_EnumValue__productElement__I__O($thiz, n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
}
/** @constructor */
function $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(f) {
  this.ox = null;
  this.ox = f;
}
$p = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = new $h_sjsr_AnonFunction0();
$p.constructor = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1() {
}
$h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = $p;
$p.S = (function() {
  return (0, this.ox)();
});
var $d_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1 = new $TypeData().i($c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1, "scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1", ({
  jb: 1,
  ja: 1,
  cX: 1,
  aW: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(f) {
  this.oy = null;
  this.oy = f;
}
$p = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = new $h_sjsr_AnonFunction1();
$p.constructor = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab() {
}
$h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = $p;
$p.b = (function(x0) {
  return (0, this.oy)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab = new $TypeData().i($c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab, "scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab", ({
  jd: 1,
  jc: 1,
  bb: 1,
  i: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(f) {
  this.oz = null;
  this.oz = f;
}
$p = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = new $h_sjsr_AnonFunction2();
$p.constructor = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2() {
}
$h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = $p;
$p.dL = (function(x0, x1) {
  return (0, this.oz)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2 = new $TypeData().i($c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2, "scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2", ({
  jf: 1,
  je: 1,
  cY: 1,
  aX: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(f) {
  this.oA = null;
  this.oA = f;
}
$p = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = new $h_sjsr_AnonFunction3();
$p.constructor = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491;
/** @constructor */
function $h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491() {
}
$h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = $p;
$p.kf = (function(x0, x1, x2) {
  return (0, this.oA)(x0, x1, x2);
});
var $d_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491 = new $TypeData().i($c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491, "scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491", ({
  jh: 1,
  jg: 1,
  iP: 1,
  g0: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(f) {
  this.oB = null;
  this.oB = f;
}
$p = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = new $h_sjsr_AnonFunction4();
$p.constructor = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b;
/** @constructor */
function $h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b() {
}
$h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = $p;
$p.re = (function(x0, x1, x2, x3) {
  return (0, this.oB)(x0, x1, x2, x3);
});
var $d_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b = new $TypeData().i($c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b, "scala.scalajs.runtime.AnonFunction4.$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b", ({
  jj: 1,
  ji: 1,
  iQ: 1,
  g1: 1
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
  this.iD = null;
  this.iD = sel$3;
}
$p = $c_LMain$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_LMain$$anon$1;
/** @constructor */
function $h_LMain$$anon$1() {
}
$h_LMain$$anon$1.prototype = $p;
$p.kG = (function(x) {
  if ((x !== null)) {
    var x7 = x.df;
    var x8 = x.dg;
    var x$2 = $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage();
    if ((x$2 === x8)) {
      if ((x7 <= this.iD.bU)) {
        return true;
      }
    }
  }
  return false;
});
$p.kh = (function(x, default$1) {
  if ((x !== null)) {
    var x13 = x.df;
    var x14 = x.dg;
    var x15 = x.ev;
    var x$2 = $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage();
    if ((x$2 === x14)) {
      if ((x13 <= this.iD.bU)) {
        return x15;
      }
    }
  }
  return default$1.b(x);
});
$p.c7 = (function(x) {
  return this.kG(x);
});
$p.bM = (function(x, default$1) {
  return this.kh(x, default$1);
});
var $d_LMain$$anon$1 = new $TypeData().i($c_LMain$$anon$1, "Main$$anon$1", ({
  d5: 1,
  av: 1,
  i: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_LMain$$anon$2(subString$2) {
  this.hq = null;
  this.hq = subString$2;
}
$p = $c_LMain$$anon$2.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_LMain$$anon$2;
/** @constructor */
function $h_LMain$$anon$2() {
}
$h_LMain$$anon$2.prototype = $p;
$p.sJ = (function(x) {
  var this$1 = this.hq;
  return (!(!this$1.startsWith(x)));
});
$p.rj = (function(x, default$1) {
  var this$1 = this.hq;
  if ((!(!this$1.startsWith(x)))) {
    return new $c_T2(x, $m_sc_StringOps$().pe(this.hq, x.length));
  } else {
    return default$1.b(x);
  }
});
$p.c7 = (function(x) {
  return this.sJ(x);
});
$p.bM = (function(x, default$1) {
  return this.rj(x, default$1);
});
var $d_LMain$$anon$2 = new $TypeData().i($c_LMain$$anon$2, "Main$$anon$2", ({
  d6: 1,
  av: 1,
  i: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_LMain$$anon$3(stage$2, sel$4, outer) {
  this.iE = null;
  this.g7 = null;
  this.iE = stage$2;
  this.g7 = sel$4;
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
$p.kG = (function(x) {
  if ((x !== null)) {
    var x29 = x.df;
    var x30 = x.dg;
    var x32 = x.eu;
    var x$2 = this.iE;
    if ((x$2 === x30)) {
      if (((x29 <= this.g7.bU) && (x32.c() || ((x32.T() | 0) > this.g7.bU)))) {
        return true;
      }
    }
  }
  return false;
});
$p.kh = (function(x, default$1) {
  if ((x !== null)) {
    var x35 = x.df;
    var x36 = x.dg;
    var x37 = x.ev;
    var x38 = x.eu;
    var x$2 = this.iE;
    if ((x$2 === x36)) {
      if (((x35 <= this.g7.bU) && (x38.c() || ((x38.T() | 0) > this.g7.bU)))) {
        return x37;
      }
    }
  }
  return default$1.b(x);
});
$p.c7 = (function(x) {
  return this.kG(x);
});
$p.bM = (function(x, default$1) {
  return this.kh(x, default$1);
});
var $d_LMain$$anon$3 = new $TypeData().i($c_LMain$$anon$3, "Main$$anon$3", ({
  d7: 1,
  av: 1,
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
$p.by = (function() {
  return new $c_s_Product$$anon$1(this);
});
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.ic($m_Lcom_raquo_ew_JsArray$().bL($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.id($m_Lcom_raquo_ew_JsArray$().bL($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.g6(false);
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.iq(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
    return subscription;
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$2.bz || (!when))) {
    var $x_1 = f();
  } else {
    this$2.bz = true;
    try {
      var $x_1 = f();
    } finally {
      this$2.bz = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = new $c_Lcom_raquo_airstream_ownership_Subscription(owner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  })));
  var this$ = $thiz.dN();
  this$.push(observer);
  return subscription;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz, observer, shouldCallMaybeWillStart) {
  var this$3 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    if (((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz)) && shouldCallMaybeWillStart)) {
      $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    }
    var this$ = $thiz.dP();
    this$.push(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$3.bz || (!when))) {
    f();
  } else {
    this$3.bz = true;
    try {
      f();
    } finally {
      this$3.bz = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$3);
    }
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().q5($thiz.dP(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().q5($thiz.dN(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.iB())) {
    $thiz.iv();
    $thiz.g6(true);
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  if (($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1)) {
    $thiz.is();
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.it();
    $thiz.g6(false);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.dN();
  var $x_1 = this$.length;
  var this$$1 = $thiz.dP();
  return ((($x_1 | 0) + (this$$1.length | 0)) | 0);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1(outer) {
  this.ln = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.ln = outer;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$$anon$1() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = $p;
$p.sK = (function(x) {
  return (x !== null);
});
$p.rk = (function(x, default$1) {
  return ((x !== null) ? (new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this.ln, x, _$1);
  }))), (void 0)) : default$1.b(x));
});
$p.c7 = (function(x) {
  return this.sK(x);
});
$p.bM = (function(x, default$1) {
  return this.rk(x, default$1);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$$anon$1, "com.raquo.airstream.custom.CustomSource$$anon$1", ({
  ds: 1,
  av: 1,
  i: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.qq = $m_Lcom_raquo_airstream_core_Observer$().pz(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
function $f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer($thiz, mod) {
  return $m_Lcom_raquo_airstream_core_Observer$().pz(new $c_Lcom_raquo_airstream_state_Var$$anon$2(mod, $thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$1(outer) {
  this.lW = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.lW = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $p;
$p.kH = (function(x) {
  return true;
});
$p.ki = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    this.lW.kY(x, _$1);
  })));
});
$p.c7 = (function(x) {
  return this.kH(x);
});
$p.bM = (function(x, default$1) {
  return this.ki(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  dI: 1,
  av: 1,
  i: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$2(mod$6, outer) {
  this.lX = null;
  this.hB = null;
  this.lX = mod$6;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.hB = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$2.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$2;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$2() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$2.prototype = $p;
$p.kH = (function(x) {
  return true;
});
$p.ki = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    matchResult5: {
      if ((x instanceof $c_s_util_Success)) {
        var nextInput = x.el;
        var x4 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this.hB.gj);
        if ((x4 instanceof $c_s_util_Success)) {
          var currentValue = x4.el;
          try {
            var nextValue = new $c_s_util_Success(this.lX.dL(currentValue, nextInput));
          } catch (e) {
            var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
            matchEnd8: {
              var nextValue;
              if ($m_s_util_control_NonFatal$().ep(e$2)) {
                var nextValue = new $c_s_util_Failure(e$2);
                break matchEnd8;
              }
              throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.aG : e$2);
            }
          }
          this.hB.kY(nextValue, trx);
          break matchResult5;
        }
        if ((x4 instanceof $c_s_util_Failure)) {
          var err = x4.ek;
          $m_Lcom_raquo_airstream_core_AirstreamError$().cC(new $c_Lcom_raquo_airstream_core_AirstreamError$VarError("Unable to update a failed Var. Consider Var#tryUpdater instead.", new $c_s_Some(err)));
          break matchResult5;
        }
        throw new $c_s_MatchError(x4);
      }
      if ((x instanceof $c_s_util_Failure)) {
        var err$2 = x.ek;
        this.hB.kY(new $c_s_util_Failure(err$2), trx);
        break matchResult5;
      }
      throw new $c_s_MatchError(x);
    }
  })));
});
$p.c7 = (function(x) {
  return this.kH(x);
});
$p.bM = (function(x, default$1) {
  return this.ki(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$2 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$2, "com.raquo.airstream.state.Var$$anon$2", ({
  dJ: 1,
  av: 1,
  i: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.jd = new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.cD.oD();
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.cD.rT();
  })));
  $thiz.eB = (void 0);
  $thiz.gr = $m_sci_Map$EmptyMap$();
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.eB === (void 0))) {
    $thiz.eB = $m_Lcom_raquo_ew_JsArray$().bL($m_sr_ScalaRunTime$().z(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener])));
  } else if (unsafePrepend) {
    var x$1 = $thiz.eB;
    if ((x$1 === (void 0))) {
      var $x_1;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.eB;
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
  var x = $thiz.eB;
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.eB;
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
  var keyItemsWithReason = $thiz.gr.dO(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f = ((item) => {
    var these = keyItemsWithReason;
    while ((!these.c())) {
      var x0 = these.t();
      var x = x0.bB();
      if (((x === null) ? (item === null) : $dp_equals__O__Z(x, item))) {
        var x$3 = x0.bw();
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
        var h = l.t();
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
            var x$1 = remaining.t();
            if (((!(!f(x$1))) !== true)) {
              remaining = remaining.y();
              continue;
            }
            var firstMiss = remaining;
            var newHead = new $c_sci_$colon$colon(start.t(), $m_sci_Nil$());
            var toProcess = start.y();
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $c_sci_$colon$colon(toProcess.t(), $m_sci_Nil$());
              currentLast.aS = newElem;
              currentLast = newElem;
              toProcess = toProcess.y();
            }
            var next = firstMiss.y();
            var nextToCopy = next;
            while ((!next.c())) {
              var head = next.t();
              if (((!(!f(head))) !== true)) {
                next = next.y();
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $c_sci_$colon$colon(nextToCopy.t(), $m_sci_Nil$());
                  currentLast.aS = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = nextToCopy.y();
                }
                nextToCopy = next.y();
                next = next.y();
              }
            }
            if ((!nextToCopy.c())) {
              currentLast.aS = nextToCopy;
            }
            var result = newHead;
            break block;
          }
        }
      }
    }
  }
  var this$1 = $thiz.gr.dO(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f$1 = ((t$1) => result.aB(t$1.bB()));
  var l$1 = this$1;
  block$2: {
    var $x_3;
    while (true) {
      if (l$1.c()) {
        var $x_3 = $m_sci_Nil$();
        break;
      } else {
        var h$1 = l$1.t();
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
            var x$2 = remaining$1.t();
            if (((!(!f$1(x$2))) !== true)) {
              remaining$1 = remaining$1.y();
              continue;
            }
            var firstMiss$1 = remaining$1;
            var newHead$1 = new $c_sci_$colon$colon(start$1.t(), $m_sci_Nil$());
            var toProcess$1 = start$1.y();
            var currentLast$1 = newHead$1;
            while ((toProcess$1 !== firstMiss$1)) {
              var newElem$1 = new $c_sci_$colon$colon(toProcess$1.t(), $m_sci_Nil$());
              currentLast$1.aS = newElem$1;
              currentLast$1 = newElem$1;
              toProcess$1 = toProcess$1.y();
            }
            var next$1 = firstMiss$1.y();
            var nextToCopy$1 = next$1;
            while ((!next$1.c())) {
              var head$1 = next$1.t();
              if (((!(!f$1(head$1))) !== true)) {
                next$1 = next$1.y();
              } else {
                while ((nextToCopy$1 !== next$1)) {
                  var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.t(), $m_sci_Nil$());
                  currentLast$1.aS = newElem$2$1;
                  currentLast$1 = newElem$2$1;
                  nextToCopy$1 = nextToCopy$1.y();
                }
                nextToCopy$1 = next$1.y();
                next$1 = next$1.y();
              }
            }
            if ((!nextToCopy$1.c())) {
              currentLast$1.aS = nextToCopy$1;
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
    var x0$1 = itemsToAdd.t();
    var h$2 = new $c_sci_$colon$colon(f$2(x0$1), $m_sci_Nil$());
    var t$3 = h$2;
    var rest = itemsToAdd.y();
    while ((rest !== $m_sci_Nil$())) {
      var x0$2 = rest.t();
      var nx = new $c_sci_$colon$colon(f$2(x0$2), $m_sci_Nil$());
      t$3.aS = nx;
      t$3 = nx;
      rest = rest.y();
    }
    var $x_2 = h$2;
  }
  var newItems = $x_3.oM($x_2);
  var domValues = key.j2.pd(key.n3.b($thiz));
  var f$3 = ((elem) => result.aB(elem));
  var l$2 = domValues;
  block$4: {
    var $x_5;
    while (true) {
      if (l$2.c()) {
        var $x_5 = $m_sci_Nil$();
        break;
      } else {
        var h$3 = l$2.t();
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
            var x$4 = remaining$2.t();
            if (((!(!f$3(x$4))) !== true)) {
              remaining$2 = remaining$2.y();
              continue;
            }
            var firstMiss$2 = remaining$2;
            var newHead$2 = new $c_sci_$colon$colon(start$2.t(), $m_sci_Nil$());
            var toProcess$2 = start$2.y();
            var currentLast$2 = newHead$2;
            while ((toProcess$2 !== firstMiss$2)) {
              var newElem$3 = new $c_sci_$colon$colon(toProcess$2.t(), $m_sci_Nil$());
              currentLast$2.aS = newElem$3;
              currentLast$2 = newElem$3;
              toProcess$2 = toProcess$2.y();
            }
            var next$2 = firstMiss$2.y();
            var nextToCopy$2 = next$2;
            while ((!next$2.c())) {
              var head$2 = next$2.t();
              if (((!(!f$3(head$2))) !== true)) {
                next$2 = next$2.y();
              } else {
                while ((nextToCopy$2 !== next$2)) {
                  var newElem$2$2 = new $c_sci_$colon$colon(nextToCopy$2.t(), $m_sci_Nil$());
                  currentLast$2.aS = newElem$2$2;
                  currentLast$2 = newElem$2$2;
                  nextToCopy$2 = nextToCopy$2.y();
                }
                nextToCopy$2 = next$2.y();
                next$2 = next$2.y();
              }
            }
            if ((!nextToCopy$2.c())) {
              currentLast$2.aS = nextToCopy$2;
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
        var h$4 = l$3.t();
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
            var x$5 = remaining$3.t();
            if (((!(!f(x$5))) !== true)) {
              remaining$3 = remaining$3.y();
              continue;
            }
            var firstMiss$3 = remaining$3;
            var newHead$3 = new $c_sci_$colon$colon(start$3.t(), $m_sci_Nil$());
            var toProcess$3 = start$3.y();
            var currentLast$3 = newHead$3;
            while ((toProcess$3 !== firstMiss$3)) {
              var newElem$4 = new $c_sci_$colon$colon(toProcess$3.t(), $m_sci_Nil$());
              currentLast$3.aS = newElem$4;
              currentLast$3 = newElem$4;
              toProcess$3 = toProcess$3.y();
            }
            var next$3 = firstMiss$3.y();
            var nextToCopy$3 = next$3;
            while ((!next$3.c())) {
              var head$3 = next$3.t();
              if (((!(!f(head$3))) !== true)) {
                next$3 = next$3.y();
              } else {
                while ((nextToCopy$3 !== next$3)) {
                  var newElem$2$3 = new $c_sci_$colon$colon(nextToCopy$3.t(), $m_sci_Nil$());
                  currentLast$3.aS = newElem$2$3;
                  currentLast$3 = newElem$2$3;
                  nextToCopy$3 = nextToCopy$3.y();
                }
                nextToCopy$3 = next$3.y();
                next$3 = next$3.y();
              }
            }
            if ((!nextToCopy$3.c())) {
              currentLast$3.aS = nextToCopy$3;
            }
            var $x_4 = newHead$3;
            break block$6;
          }
        }
      }
    }
  }
  var nextDomValues = $x_5.oM($x_4);
  $thiz.gr = $thiz.gr.et(key, newItems);
  key.n5.dL($thiz, key.j2.pg(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.hG, maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.hG;
  $thiz.hG = maybeNextParent;
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.c()) && (!maybePrevParent.T().ie().cc.c()));
  var isNextParentActive = ((!maybeNextParent.c()) && (!maybeNextParent.T().ie().cc.c()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.c() ? $m_s_None$() : new $c_s_Some(maybeNextParent.T().ie())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.c()) {
    $thiz.jd.ru();
  } else {
    var x0 = maybeNextOwner.T();
    $thiz.jd.tI(x0);
  }
}
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  f5: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bD)));
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  bD: 1,
  ak: 1,
  a: 1,
  a8: 1,
  a4: 1
}), ((x) => $isByte(x)));
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bF)));
}
var $d_jl_ClassCastException = new $TypeData().i($c_jl_ClassCastException, "java.lang.ClassCastException", ({
  bF: 1,
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
  T: 1,
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
  bI: 1,
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
  aV: 1,
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
  fh: 1,
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
  fi: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fk)));
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bL)));
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  bL: 1,
  ak: 1,
  a: 1,
  a8: 1,
  a4: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  ft: 1,
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
  fA: 1,
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
  fR: 1,
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
  fX: 1,
  fU: 1,
  fV: 1,
  i: 1,
  a: 1
}));
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.ju)) {
    $thiz.jv = (($thiz.hK === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.ju = true;
  }
  return $thiz.jv;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.ju) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.jv);
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.hK;
  return ("of class " + $objectClassName(this$1));
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.hK + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.jv = null;
    this.hK = null;
    this.ju = false;
    this.hK = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bO() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  g4: 1,
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
$p.g = (function() {
  return (this.c() ? $m_sc_Iterator$().E : new $c_sc_Iterator$$anon$20(this.T()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.gv = 0;
  this.nL = 0;
  this.nK = null;
  this.nK = outer;
  this.gv = 0;
  this.nL = outer.be();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.l = (function() {
  return (this.gv < this.nL);
});
$p.e = (function() {
  var result = this.nK.bf(this.gv);
  this.gv = ((1 + this.gv) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  ga: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.nM = null;
  this.nN = null;
  this.nM = _1;
  this.nN = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.be = (function() {
  return 2;
});
$p.bf = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.bB = (function() {
  return this.nM;
});
$p.bw = (function() {
  return this.nN;
});
$p.w = (function() {
  return (((("(" + this.bB()) + ",") + this.bw()) + ")");
});
$p.bg = (function() {
  return "Tuple2";
});
$p.by = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().dd(this, (-889275714), false);
});
$p.n = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().k(this.bB(), x$1.bB()) && $m_sr_BoxesRunTime$().k(this.bw(), x$1.bw()))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bS)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  bS: 1,
  gb: 1,
  D: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.fp = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  go: 1,
  gn: 1,
  E: 1,
  a: 1,
  a0: 1
}));
function $f_sc_IndexedSeqOps__reverse__O($thiz) {
  return $thiz.fP(new $c_sc_IndexedSeqView$Reverse($thiz));
}
function $f_sc_IndexedSeqOps__head__O($thiz) {
  if ((!$thiz.c())) {
    return $thiz.u(0);
  } else {
    throw new $c_ju_NoSuchElementException(("head of empty " + ($is_sc_IndexedSeq($thiz) ? $thiz.c5() : $thiz.w())));
  }
}
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.c5() + "("), ", ", ")");
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
$p.hc = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.s = (function() {
  return 0;
});
$p.g1 = (function(from, until) {
  return this;
});
$p.e = (function() {
  this.hc();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  gx: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.gw = false;
  this.nS = null;
  this.nS = a$1;
  this.gw = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.l = (function() {
  return (!this.gw);
});
$p.e = (function() {
  if (this.gw) {
    return $m_sc_Iterator$().E.e();
  } else {
    this.gw = true;
    return this.nS;
  }
});
$p.g1 = (function(from, until) {
  return (((this.gw || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().E : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  gy: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$8(outer, f$1) {
  this.nV = null;
  this.hM = false;
  this.nU = null;
  this.jF = null;
  this.nT = null;
  this.jF = outer;
  this.nT = f$1;
  this.nV = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.hM = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.l = (function() {
  while (true) {
    if (this.hM) {
      return true;
    } else if (this.jF.l()) {
      var a = this.jF.e();
      if (this.nV.i7(this.nT.b(a))) {
        this.nU = a;
        this.hM = true;
        return true;
      }
    } else {
      return false;
    }
  }
});
$p.e = (function() {
  if (this.l()) {
    this.hM = false;
    return this.nU;
  } else {
    return $m_sc_Iterator$().E.e();
  }
});
var $d_sc_Iterator$$anon$8 = new $TypeData().i($c_sc_Iterator$$anon$8, "scala.collection.Iterator$$anon$8", ({
  gA: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(outer, f$2) {
  this.hN = null;
  this.nW = null;
  this.hN = outer;
  this.nW = f$2;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.s = (function() {
  return this.hN.s();
});
$p.l = (function() {
  return this.hN.l();
});
$p.e = (function() {
  return this.nW.b(this.hN.e());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  gB: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.bW instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.bW;
      $thiz.bW = c.bW;
      $thiz.dY = c.dY;
      if ((c.cx !== null)) {
        if (($thiz.cw === null)) {
          $thiz.cw = c.cw;
        }
        c.cw.gx = $thiz.cx;
        $thiz.cx = c.cx;
      }
      continue;
    }
    return (void 0);
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.cx === null)) {
      $thiz.bW = null;
      $thiz.cw = null;
      return false;
    } else {
      $thiz.bW = $thiz.cx.sx();
      if (($thiz.cw === $thiz.cx)) {
        $thiz.cw = $thiz.cw.gx;
      }
      $thiz.cx = $thiz.cx.gx;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.dY) {
        return true;
      } else if ((($thiz.bW !== null) && $thiz.bW.l())) {
        $thiz.dY = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.bW = null;
  this.cx = null;
  this.cw = null;
  this.dY = false;
  this.bW = current;
  this.cx = null;
  this.cw = null;
  this.dY = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.l = (function() {
  if (this.dY) {
    return true;
  } else if ((this.bW !== null)) {
    if (this.bW.l()) {
      this.dY = true;
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
    this.dY = false;
    return this.bW.e();
  } else {
    return $m_sc_Iterator$().E.e();
  }
});
$p.h2 = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.cx === null)) {
    this.cx = c;
    this.cw = c;
  } else {
    this.cw.gx = c;
    this.cw = c;
  }
  if ((this.bW === null)) {
    this.bW = $m_sc_Iterator$().E;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bZ)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  bZ: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.dl > 0)) {
    if ($thiz.dZ.l()) {
      $thiz.dZ.e();
      $thiz.dl = (((-1) + $thiz.dl) | 0);
    } else {
      $thiz.dl = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.cf < 0)) {
    return (-1);
  } else {
    var that = (($thiz.cf - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.dZ = null;
  this.cf = 0;
  this.dl = 0;
  this.dZ = underlying;
  this.cf = limit;
  this.dl = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.s = (function() {
  var size = this.dZ.s();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.dl) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.cf < 0)) {
      return dropSize;
    } else {
      var x = this.cf;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.l = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.cf !== 0) && this.dZ.l());
});
$p.e = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.cf > 0)) {
    this.cf = (((-1) + this.cf) | 0);
    return this.dZ.e();
  } else {
    return ((this.cf < 0) ? this.dZ.e() : $m_sc_Iterator$().E.e());
  }
});
$p.g1 = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.cf < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.dl + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().E;
  } else if ((sum < 0)) {
    this.dl = 2147483647;
    this.cf = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$SliceIterator(this.dZ, (((-2147483647) + sum) | 0), rest))));
  } else {
    this.dl = sum;
    this.cf = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  gD: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
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
  return ((x >= 0) && ($thiz.bd(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.kn(n);
  if (skipped.c()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.t();
}
function $f_sc_LinearSeqOps__exists__F1__Z($thiz, p) {
  var these = $thiz;
  while ((!these.c())) {
    if ((!(!p.b(these.t())))) {
      return true;
    }
    these = these.y();
  }
  return false;
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $f_sc_LinearSeqOps__indexWhere__F1__I__I($thiz, p, from) {
  var i = ((from > 0) ? from : 0);
  var these = $thiz.kn(from);
  while ((!these.c())) {
    if ((!(!p.b(these.t())))) {
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
    } else if ((((!a.c()) && (!b.c())) && $m_sr_BoxesRunTime$().k(a.t(), b.t()))) {
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
    var it = that.g();
    while (it.l()) {
      result = result.db(it.e());
    }
    return result;
  } else {
    return $thiz.fQ(($is_sc_Iterable(that) ? new $c_sc_View$Concat($thiz, that) : $thiz.g().h2(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => that.g())))));
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.gz = null;
  this.gz = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.l = (function() {
  return (!this.gz.c());
});
$p.e = (function() {
  var r = this.gz.t();
  this.gz = this.gz.y();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  gH: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sc_StringOps$$anon$1__advance__T($thiz) {
  var start = $thiz.bi;
  while (true) {
    if (($thiz.bi < $thiz.eF)) {
      var this$ = $thiz.gA;
      var i = $thiz.bi;
      var c = this$.charCodeAt(i);
      var $x_1 = (!((c === 13) || (c === 10)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $thiz.bi = ((1 + $thiz.bi) | 0);
    } else {
      break;
    }
  }
  var end = $thiz.bi;
  if (($thiz.bi < $thiz.eF)) {
    var this$$2 = $thiz.gA;
    var i$1 = $thiz.bi;
    var c$1 = this$$2.charCodeAt(i$1);
    $thiz.bi = ((1 + $thiz.bi) | 0);
    if (($thiz.bi < $thiz.eF)) {
      var this$$3 = $thiz.gA;
      var i$2 = $thiz.bi;
      var c$2 = this$$3.charCodeAt(i$2);
      var $x_2 = ((c$1 === 13) && (c$2 === 10));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      $thiz.bi = ((1 + $thiz.bi) | 0);
    }
    if ((!$thiz.o1)) {
      end = $thiz.bi;
    }
  }
  var this$6 = $thiz.gA;
  var endIndex = end;
  return this$6.substring(start, endIndex);
}
/** @constructor */
function $c_sc_StringOps$$anon$1(\u03b4this$2, stripped$1) {
  this.eF = 0;
  this.bi = 0;
  this.gA = null;
  this.o1 = false;
  this.gA = \u03b4this$2;
  this.o1 = stripped$1;
  this.eF = \u03b4this$2.length;
  this.bi = 0;
}
$p = $c_sc_StringOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StringOps$$anon$1;
/** @constructor */
function $h_sc_StringOps$$anon$1() {
}
$h_sc_StringOps$$anon$1.prototype = $p;
$p.l = (function() {
  return (this.bi < this.eF);
});
$p.pR = (function() {
  return ((this.bi >= this.eF) ? $m_sc_Iterator$().E.e() : $p_sc_StringOps$$anon$1__advance__T(this));
});
$p.e = (function() {
  return this.pR();
});
var $d_sc_StringOps$$anon$1 = new $TypeData().i($c_sc_StringOps$$anon$1, "scala.collection.StringOps$$anon$1", ({
  gL: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.ch === null)) {
    $thiz.ch = new $ac_I(($m_sci_Node$().gH << 1));
    $thiz.dv = new ($d_sci_Node.r().C)($m_sci_Node$().gH);
  }
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.bF = node;
  $thiz.a9 = 0;
  $thiz.du = node.hg();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bv = ((1 + $thiz.bv) | 0);
  var cursorIndex = ($thiz.bv << 1);
  var lengthIndex = ((1 + ($thiz.bv << 1)) | 0);
  $thiz.dv.a[$thiz.bv] = node;
  $thiz.ch.a[cursorIndex] = 0;
  $thiz.ch.a[lengthIndex] = node.hd();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.bv = (((-1) + $thiz.bv) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bv >= 0)) {
    var cursorIndex = ($thiz.bv << 1);
    var lengthIndex = ((1 + ($thiz.bv << 1)) | 0);
    var nodeCursor = $thiz.ch.a[cursorIndex];
    if ((nodeCursor < $thiz.ch.a[lengthIndex])) {
      var ev$1 = $thiz.ch;
      ev$1.a[cursorIndex] = ((1 + ev$1.a[cursorIndex]) | 0);
      var nextNode = $thiz.dv.a[$thiz.bv].h5(nodeCursor);
      if (nextNode.h6()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.fS()) {
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
  $thiz.a9 = 0;
  $thiz.du = 0;
  $thiz.bv = (-1);
  return $thiz;
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.h6()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.fS()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
/** @constructor */
function $c_sci_ChampBaseIterator() {
  this.a9 = 0;
  this.du = 0;
  this.bF = null;
  this.bv = 0;
  this.ch = null;
  this.dv = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.l = (function() {
  return ((this.a9 < this.du) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.hS = node;
  $thiz.e1 = (((-1) + node.hg()) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.ci = ((1 + $thiz.ci) | 0);
  $thiz.gD.a[$thiz.ci] = node;
  $thiz.gC.a[$thiz.ci] = (((-1) + node.hd()) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.ci = (((-1) + $thiz.ci) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.ci >= 0)) {
    var nodeCursor = $thiz.gC.a[$thiz.ci];
    $thiz.gC.a[$thiz.ci] = (((-1) + nodeCursor) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.gD.a[$thiz.ci].h5(nodeCursor));
    } else {
      var currNode = $thiz.gD.a[$thiz.ci];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.fS()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true;
      }
    }
  }
  return false;
}
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.e1 = (-1);
  $thiz.ci = (-1);
  $thiz.gC = new $ac_I(((1 + $m_sci_Node$().gH) | 0));
  $thiz.gD = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().gH) | 0));
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
  this.e1 = 0;
  this.hS = null;
  this.ci = 0;
  this.gC = null;
  this.gD = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.l = (function() {
  return ((this.e1 >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.fv !== null);
}
function $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.a.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.p(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.p(ix, result, destPos, length);
  return result;
}
function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  var dataIx = bm.cL(bitpos);
  var idx = (dataIx << 1);
  var src = bm.aT;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.p(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.p(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.bX, dataIx, originalHash);
  bm.a8 = (bm.a8 | bitpos);
  bm.aT = dst;
  bm.bX = dstHashes;
  bm.b7 = ((1 + bm.b7) | 0);
  bm.bP = ((bm.bP + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.fv = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.d2 = $thiz.d2.p8();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.fv = null;
  this.d2 = null;
  this.d2 = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().jt, $m_s_Array$EmptyArrays$().gu, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.bh = (function(size) {
});
$p.g4 = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().cs(keyHash, shift);
    var bitpos = $m_sci_Node$().bN(mask);
    if (((mapNode.a8 & bitpos) !== 0)) {
      var index = $m_sci_Node$().bx(mapNode.a8, mask, bitpos);
      var key0 = mapNode.d9(index);
      var key0UnimprovedHash = mapNode.cr(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().k(key0, key))) {
        mapNode.aT.a[((1 + (index << 1)) | 0)] = value;
      } else {
        var value0 = mapNode.da(index);
        var key0Hash = $m_sc_Hashing$().bb(key0UnimprovedHash);
        var subNodeNew = mapNode.kP(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.sY(bitpos, key0Hash, subNodeNew);
      }
    } else if (((mapNode.av & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().bx(mapNode.av, mask, bitpos);
      var subNode = mapNode.cQ(index$2);
      var beforeSize = subNode.I();
      var beforeHash = subNode.bD();
      this.g4(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.b7 = ((mapNode.b7 + ((subNode.I() - beforeSize) | 0)) | 0);
      mapNode.bP = ((mapNode.bP + ((subNode.bD() - beforeHash) | 0)) | 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
    }
  } else if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.fU(key);
    if ((index$3 < 0)) {
      mapNode.aE = mapNode.aE.bq(new $c_T2(key, value));
    } else {
      mapNode.aE = mapNode.aE.dS(index$3, new $c_T2(key, value));
    }
  } else {
    throw new $c_s_MatchError(mapNode);
  }
});
$p.kV = (function() {
  if ((this.d2.b7 === 0)) {
    return $m_sci_HashMap$().jM;
  } else if ((this.fv !== null)) {
    return this.fv;
  } else {
    this.fv = new $c_sci_HashMap(this.d2);
    return this.fv;
  }
});
$p.oJ = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().L(elem.bB());
  var im = $m_sc_Hashing$().bb(h);
  this.g4(this.d2, elem.bB(), elem.bw(), h, im, 0);
  return this;
});
$p.eX = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().L(key);
  this.g4(this.d2, key, value, originalHash, $m_sc_Hashing$().bb(originalHash), 0);
  return this;
});
$p.kc = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(this, xs);
  } else if (false) {
    var iter = xs.uD();
    while (iter.l()) {
      var next = iter.e();
      var originalHash = xs.tY(next.pD());
      var hash = $m_sc_Hashing$().bb(originalHash);
      this.g4(this.d2, next.pK(), next.u4(), originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.s2();
    while (iter$2.l()) {
      var next$2 = iter$2.e();
      var originalHash$2 = xs.tY(next$2.pD());
      var hash$2 = $m_sc_Hashing$().bb(originalHash$2);
      this.g4(this.d2, next$2.pK(), next$2.u4(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.f0(new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((key$2$2, value$2$2) => this.eX(key$2$2, value$2$2))));
  } else {
    var it = xs.g();
    while (it.l()) {
      this.oJ(it.e());
    }
  }
  return this;
});
$p.b4 = (function(elems) {
  return this.kc(elems);
});
$p.au = (function(elem) {
  return this.oJ(elem);
});
$p.aW = (function() {
  return this.kV();
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  gX: 1,
  a7: 1,
  I: 1,
  H: 1,
  G: 1
}));
function $p_sci_HashSetBuilder__isAliased__Z($thiz) {
  return ($thiz.fw !== null);
}
function $p_sci_HashSetBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.a.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.p(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.p(ix, result, destPos, length);
  return result;
}
function $p_sci_HashSetBuilder__insertValue__sci_BitmapIndexedSetNode__I__O__I__I__V($thiz, bm, bitpos, key, originalHash, keyHash) {
  var dataIx = bm.cL(bitpos);
  var src = bm.b8;
  var dst = new $ac_O(((1 + src.a.length) | 0));
  src.p(0, dst, 0, dataIx);
  dst.a[dataIx] = key;
  var destPos = ((1 + dataIx) | 0);
  var length = ((src.a.length - dataIx) | 0);
  src.p(dataIx, dst, destPos, length);
  var dstHashes = $p_sci_HashSetBuilder__insertElement__AI__I__I__AI($thiz, bm.cg, dataIx, originalHash);
  bm.Z = (bm.Z | bitpos);
  bm.b8 = dst;
  bm.cg = dstHashes;
  bm.bj = ((1 + bm.bj) | 0);
  bm.bY = ((bm.bY + keyHash) | 0);
}
function $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V($thiz, bm, bitpos, elem) {
  var dataIx = bm.cL(bitpos);
  bm.b8.a[dataIx] = elem;
}
function $p_sci_HashSetBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashSetBuilder__isAliased__Z($thiz)) {
    $p_sci_HashSetBuilder__copyElems__V($thiz);
  }
  $thiz.fw = null;
}
function $p_sci_HashSetBuilder__copyElems__V($thiz) {
  $thiz.eH = $thiz.eH.p9();
}
/** @constructor */
function $c_sci_HashSetBuilder() {
  this.fw = null;
  this.eH = null;
  this.eH = new $c_sci_BitmapIndexedSetNode(0, 0, $m_s_Array$EmptyArrays$().jt, $m_s_Array$EmptyArrays$().gu, 0, 0);
}
$p = $c_sci_HashSetBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashSetBuilder;
/** @constructor */
function $h_sci_HashSetBuilder() {
}
$h_sci_HashSetBuilder.prototype = $p;
$p.bh = (function(size) {
});
$p.l4 = (function(setNode, element, originalHash, elementHash, shift) {
  if ((setNode instanceof $c_sci_BitmapIndexedSetNode)) {
    var mask = $m_sci_Node$().cs(elementHash, shift);
    var bitpos = $m_sci_Node$().bN(mask);
    if (((setNode.Z & bitpos) !== 0)) {
      var index = $m_sci_Node$().bx(setNode.Z, mask, bitpos);
      var element0 = setNode.cS(index);
      var element0UnimprovedHash = setNode.cr(index);
      if (((element0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().k(element0, element))) {
        $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V(this, setNode, bitpos, element0);
      } else {
        var element0Hash = $m_sc_Hashing$().bb(element0UnimprovedHash);
        var subNodeNew = setNode.kO(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0));
        setNode.sZ(bitpos, element0Hash, subNodeNew);
      }
    } else if (((setNode.az & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().bx(setNode.az, mask, bitpos);
      var subNode = setNode.cR(index$2);
      var beforeSize = subNode.I();
      var beforeHashCode = subNode.bD();
      this.l4(subNode, element, originalHash, elementHash, ((5 + shift) | 0));
      setNode.bj = ((setNode.bj + ((subNode.I() - beforeSize) | 0)) | 0);
      setNode.bY = ((setNode.bY + ((subNode.bD() - beforeHashCode) | 0)) | 0);
    } else {
      $p_sci_HashSetBuilder__insertValue__sci_BitmapIndexedSetNode__I__O__I__I__V(this, setNode, bitpos, element, originalHash, elementHash);
    }
  } else if ((setNode instanceof $c_sci_HashCollisionSetNode)) {
    var index$3 = $f_sc_SeqOps__indexOf__O__I__I(setNode.aK, element, 0);
    if ((index$3 < 0)) {
      setNode.aK = setNode.aK.bq(element);
    } else {
      setNode.aK = setNode.aK.dS(index$3, element);
    }
  } else {
    throw new $c_s_MatchError(setNode);
  }
});
$p.kW = (function() {
  if ((this.eH.bj === 0)) {
    return $m_sci_HashSet$().gE;
  } else if ((this.fw !== null)) {
    return this.fw;
  } else {
    this.fw = new $c_sci_HashSet(this.eH);
    return this.fw;
  }
});
$p.i8 = (function(elem) {
  $p_sci_HashSetBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().L(elem);
  var im = $m_sc_Hashing$().bb(h);
  this.l4(this.eH, elem, h, im, 0);
  return this;
});
$p.kd = (function(xs) {
  $p_sci_HashSetBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashSet)) {
    new $c_sci_HashSetBuilder$$anon$1(this, xs);
  } else {
    var it = xs.g();
    while (it.l()) {
      this.i8(it.e());
    }
  }
  return this;
});
$p.b4 = (function(elems) {
  return this.kd(elems);
});
$p.au = (function(elem) {
  return this.i8(elem);
});
$p.aW = (function() {
  return this.kW();
});
var $d_sci_HashSetBuilder = new $TypeData().i($c_sci_HashSetBuilder, "scala.collection.immutable.HashSetBuilder", ({
  h0: 1,
  a7: 1,
  I: 1,
  H: 1,
  G: 1
}));
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.e0 = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$());
}
$p = $c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
}
$h_sci_IndexedSeq$.prototype = $p;
$p.pt = (function(it) {
  return ($is_sci_IndexedSeq(it) ? it : $c_sc_SeqFactory$Delegate.prototype.ij.call(this, it));
});
$p.aD = (function(source) {
  return this.pt(source);
});
$p.ij = (function(it) {
  return this.pt(it);
});
var $d_sci_IndexedSeq$ = new $TypeData().i($c_sci_IndexedSeq$, "scala.collection.immutable.IndexedSeq$", ({
  h2: 1,
  b0: 1,
  a0: 1,
  E: 1,
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
  this.fy = null;
  this.o7 = null;
  this.rt();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.bh = (function(size) {
});
$p.rt = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.o7 = ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.kp()))));
  this.fy = deferred;
});
$p.tA = (function() {
  this.fy.kC(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$())));
  return this.o7;
});
$p.r1 = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.fy.kC(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    $m_sci_LazyList$();
    return new $c_sci_LazyList$State$Cons(elem, ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.kp())))));
  })));
  this.fy = deferred;
  return this;
});
$p.qS = (function(xs) {
  if ((xs.s() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.fy.kC(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().qa(xs.g(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.kp()))))));
    this.fy = deferred;
  }
  return this;
});
$p.b4 = (function(elems) {
  return this.qS(elems);
});
$p.au = (function(elem) {
  return this.r1(elem);
});
$p.aW = (function() {
  return this.tA();
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  h6: 1,
  a7: 1,
  I: 1,
  H: 1,
  G: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.fz = null;
  this.fz = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.l = (function() {
  return (!this.fz.c());
});
$p.e = (function() {
  if (this.fz.c()) {
    return $m_sc_Iterator$().E.e();
  } else {
    var res = this.fz.B().t();
    this.fz = this.fz.B().aX();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  h8: 1,
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
$p.dM = (function(elems) {
  return $m_sci_Nil$().ct(elems);
});
$p.aR = (function() {
  return new $c_scm_ListBuffer();
});
$p.bE = (function() {
  return $m_sci_Nil$();
});
$p.aD = (function(source) {
  return $m_sci_Nil$().ct(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  hb: 1,
  ar: 1,
  a0: 1,
  E: 1,
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
  $thiz.eI = outer;
  $thiz.dx = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.dx = 0;
  this.eI = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.l = (function() {
  return (this.dx < 2);
});
$p.e = (function() {
  switch (this.dx) {
    case 0: {
      var result = this.c9(this.eI.ck, this.eI.d3);
      break;
    }
    case 1: {
      var result = this.c9(this.eI.cl, this.eI.d4);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().E.e();
    }
  }
  this.dx = ((1 + this.dx) | 0);
  return result;
});
$p.cO = (function(n) {
  this.dx = ((this.dx + n) | 0);
  return this;
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  $thiz.dy = outer;
  $thiz.dz = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.dz = 0;
  this.dy = null;
}
$p = $c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
}
$h_sci_Map$Map3$Map3Iterator.prototype = $p;
$p.l = (function() {
  return (this.dz < 3);
});
$p.e = (function() {
  switch (this.dz) {
    case 0: {
      var result = this.c9(this.dy.c0, this.dy.cE);
      break;
    }
    case 1: {
      var result = this.c9(this.dy.c1, this.dy.cF);
      break;
    }
    case 2: {
      var result = this.c9(this.dy.c2, this.dy.cG);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().E.e();
    }
  }
  this.dz = ((1 + this.dz) | 0);
  return result;
});
$p.cO = (function(n) {
  this.dz = ((this.dz + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  $thiz.cH = outer;
  $thiz.dA = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.dA = 0;
  this.cH = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.l = (function() {
  return (this.dA < 4);
});
$p.e = (function() {
  switch (this.dA) {
    case 0: {
      var result = this.c9(this.cH.bH, this.cH.cm);
      break;
    }
    case 1: {
      var result = this.c9(this.cH.bI, this.cH.cn);
      break;
    }
    case 2: {
      var result = this.c9(this.cH.bJ, this.cH.co);
      break;
    }
    case 3: {
      var result = this.c9(this.cH.bK, this.cH.cp);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().E.e();
    }
  }
  this.dA = ((1 + this.dA) | 0);
  return result;
});
$p.cO = (function(n) {
  this.dA = ((this.dA + n) | 0);
  return this;
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.dB = null;
  this.gF = false;
  this.eJ = null;
  this.dB = $m_sci_Map$EmptyMap$();
  this.gF = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.bh = (function(size) {
});
$p.q7 = (function() {
  return (this.gF ? this.eJ.kV() : this.dB);
});
$p.qZ = (function(key, value) {
  if (this.gF) {
    this.eJ.eX(key, value);
  } else if ((this.dB.I() < 4)) {
    this.dB = this.dB.et(key, value);
  } else if (this.dB.aB(key)) {
    this.dB = this.dB.et(key, value);
  } else {
    this.gF = true;
    if ((this.eJ === null)) {
      this.eJ = new $c_sci_HashMapBuilder();
    }
    this.dB.rq(this.eJ);
    this.eJ.eX(key, value);
  }
  return this;
});
$p.oE = (function(xs) {
  return (this.gF ? (this.eJ.kc(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.b4 = (function(elems) {
  return this.oE(elems);
});
$p.au = (function(elem) {
  return this.qZ(elem.bB(), elem.bw());
});
$p.aW = (function() {
  return this.q7();
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  hm: 1,
  a7: 1,
  I: 1,
  H: 1,
  G: 1
}));
/** @constructor */
function $c_sci_SetBuilderImpl() {
  this.eU = null;
  this.gI = false;
  this.eV = null;
  this.eU = $m_sci_Set$EmptySet$();
  this.gI = false;
}
$p = $c_sci_SetBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_SetBuilderImpl;
/** @constructor */
function $h_sci_SetBuilderImpl() {
}
$h_sci_SetBuilderImpl.prototype = $p;
$p.bh = (function(size) {
});
$p.q8 = (function() {
  return (this.gI ? this.eV.kW() : this.eU);
});
$p.r2 = (function(elem) {
  if (this.gI) {
    this.eV.i8(elem);
  } else if ((this.eU.I() < 4)) {
    this.eU = this.eU.db(elem);
  } else if ((!this.eU.aB(elem))) {
    this.gI = true;
    if ((this.eV === null)) {
      this.eV = new $c_sci_HashSetBuilder();
    }
    this.eU.rr(this.eV);
    this.eV.i8(elem);
  }
  return this;
});
$p.oF = (function(xs) {
  return (this.gI ? (this.eV.kd(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.b4 = (function(elems) {
  return this.oF(elems);
});
$p.au = (function(elem) {
  return this.r2(elem);
});
$p.aW = (function() {
  return this.q8();
});
var $d_sci_SetBuilderImpl = new $TypeData().i($c_sci_SetBuilderImpl, "scala.collection.immutable.SetBuilderImpl", ({
  hE: 1,
  a7: 1,
  I: 1,
  H: 1,
  G: 1
}));
function $ps_sci_Vector$__liftedTree1$1__I() {
  try {
    return $m_jl_Integer$().q2($m_jl_System$SystemProperties$().kz("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10);
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
  this.oh = 0;
  this.oi = null;
  $n_sci_Vector$ = this;
  this.oh = $ps_sci_Vector$__liftedTree1$1__I();
  this.oi = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.dM = (function(elems) {
  return this.bs(elems);
});
$p.bs = (function(it) {
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
          var x = it.aI().b6();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.d1;
            break matchEnd5;
          }
        }
        if ($is_sci_Iterable(it)) {
          var a1 = new $ac_O(knownSize);
          it.bR(a1, 0, 2147483647);
          var $x_1 = a1;
          break matchEnd5;
        }
        var a1$2 = new $ac_O(knownSize);
        it.g().bR(a1$2, 0, 2147483647);
        var $x_1 = a1$2;
      }
      return new $c_sci_Vector1($x_1);
    } else {
      return new $c_sci_VectorBuilder().gS(it).ix();
    }
  }
});
$p.aR = (function() {
  return new $c_sci_VectorBuilder();
});
$p.aD = (function(source) {
  return this.bs(source);
});
$p.bE = (function() {
  return $m_sci_Vector0$();
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  hL: 1,
  ar: 1,
  a0: 1,
  E: 1,
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
  if (($thiz.Q >= 6)) {
    a = $thiz.b2;
    var i = (($thiz.K >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.p(i, dest, 0, length);
    }
    var newOffset = (($thiz.K % 33554432) | 0);
    $thiz.G = (($thiz.G - (($thiz.K - newOffset) | 0)) | 0);
    $thiz.K = newOffset;
    if (((($thiz.G >>> 25) | 0) === 0)) {
      $thiz.Q = 5;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.Q >= 5)) {
    if ((a === null)) {
      a = $thiz.as;
    }
    var i$2 = (31 & (($thiz.K >>> 20) | 0));
    if (($thiz.Q === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.p(i$2, dest$1, 0, length$1);
      }
      $thiz.as = a;
      var newOffset$1 = (($thiz.K % 1048576) | 0);
      $thiz.G = (($thiz.G - (($thiz.K - newOffset$1) | 0)) | 0);
      $thiz.K = newOffset$1;
      if (((($thiz.G >>> 20) | 0) === 0)) {
        $thiz.Q = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().aC(a, i$2, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.Q >= 4)) {
    if ((a === null)) {
      a = $thiz.a4;
    }
    var i$3 = (31 & (($thiz.K >>> 15) | 0));
    if (($thiz.Q === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.p(i$3, dest$2, 0, length$2);
      }
      $thiz.a4 = a;
      var newOffset$2 = (($thiz.K % 32768) | 0);
      $thiz.G = (($thiz.G - (($thiz.K - newOffset$2) | 0)) | 0);
      $thiz.K = newOffset$2;
      if (((($thiz.G >>> 15) | 0) === 0)) {
        $thiz.Q = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().aC(a, i$3, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.Q >= 3)) {
    if ((a === null)) {
      a = $thiz.O;
    }
    var i$4 = (31 & (($thiz.K >>> 10) | 0));
    if (($thiz.Q === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.p(i$4, dest$3, 0, length$3);
      }
      $thiz.O = a;
      var newOffset$3 = (($thiz.K % 1024) | 0);
      $thiz.G = (($thiz.G - (($thiz.K - newOffset$3) | 0)) | 0);
      $thiz.K = newOffset$3;
      if (((($thiz.G >>> 10) | 0) === 0)) {
        $thiz.Q = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().aC(a, i$4, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.Q >= 2)) {
    if ((a === null)) {
      a = $thiz.J;
    }
    var i$5 = (31 & (($thiz.K >>> 5) | 0));
    if (($thiz.Q === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        src$4.p(i$5, dest$4, 0, length$4);
      }
      $thiz.J = a;
      var newOffset$4 = (($thiz.K % 32) | 0);
      $thiz.G = (($thiz.G - (($thiz.K - newOffset$4) | 0)) | 0);
      $thiz.K = newOffset$4;
      if (((($thiz.G >>> 5) | 0) === 0)) {
        $thiz.Q = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().aC(a, i$5, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.Q >= 1)) {
    if ((a === null)) {
      a = $thiz.af;
    }
    var i$6 = (31 & $thiz.K);
    if (($thiz.Q === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.p(i$6, dest$5, 0, length$5);
      }
      $thiz.af = a;
      $thiz.M = (($thiz.M - $thiz.K) | 0);
      $thiz.K = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().aC(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.gJ = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.a.length;
  if ((dl > 0)) {
    if (($thiz.M === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.M) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.af;
    var destPos = $thiz.M;
    data.p(0, dest, destPos, copy1);
    $thiz.M = (($thiz.M + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.af;
      data.p(copy1, dest$1, 0, copy2);
      $thiz.M = (($thiz.M + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if ((slice.a.length === 0)) {
    return (void 0);
  }
  if (($thiz.M === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = slice.a.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.G) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.G >>> 5) | 0));
      var dest = $thiz.J;
      slice.p(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.J;
        slice.p(copy1, dest$1, 0, copy2);
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
            var lo = t.o;
            var hi = t.r;
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
      var dest$2 = $thiz.O;
      slice.p(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.O;
        slice.p(copy1$2, dest$3, 0, copy2$2);
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
            var lo$1 = t$1.o;
            var hi$1 = t$1.r;
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
      var dest$4 = $thiz.a4;
      slice.p(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.a4;
        slice.p(copy1$3, dest$5, 0, copy2$3);
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
            var lo$2 = t$2.o;
            var hi$2 = t$2.r;
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
      var dest$6 = $thiz.as;
      slice.p(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.as;
        slice.p(copy1$4, dest$7, 0, copy2$4);
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
            var lo$3 = t$3.o;
            var hi$3 = t$3.r;
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
      var dest$8 = $thiz.b2;
      slice.p(0, dest$8, destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break;
    }
    default: {
      throw new $c_s_MatchError(dim);
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = xs.cY();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.de(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var x1 = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
    } else if ((($thiz.M === 32) || ($thiz.M === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1);
    } else {
      $m_sci_VectorStatics$().kr((((-2) + x1) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((data$2$2) => {
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
  $thiz.M = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.G + n) | 0);
    var xor = (idx ^ $thiz.G);
    $thiz.G = idx;
    $thiz.M = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.af) + ", a2=") + $thiz.J) + ", a3=") + $thiz.O) + ", a4=") + $thiz.a4) + ", a5=") + $thiz.as) + ", a6=") + $thiz.b2) + ", depth=") + $thiz.Q));
  } else if ((xor < 1024)) {
    if (($thiz.Q <= 1)) {
      $thiz.J = new ($d_O.r().r().C)(32);
      $thiz.J.a[0] = $thiz.af;
      $thiz.Q = 2;
    }
    $thiz.af = new $ac_O(32);
    $thiz.J.a[(31 & ((idx >>> 5) | 0))] = $thiz.af;
  } else if ((xor < 32768)) {
    if (($thiz.Q <= 2)) {
      $thiz.O = new ($d_O.r().r().r().C)(32);
      $thiz.O.a[0] = $thiz.J;
      $thiz.Q = 3;
    }
    $thiz.af = new $ac_O(32);
    $thiz.J = new ($d_O.r().r().C)(32);
    $thiz.J.a[(31 & ((idx >>> 5) | 0))] = $thiz.af;
    $thiz.O.a[(31 & ((idx >>> 10) | 0))] = $thiz.J;
  } else if ((xor < 1048576)) {
    if (($thiz.Q <= 3)) {
      $thiz.a4 = new ($d_O.r().r().r().r().C)(32);
      $thiz.a4.a[0] = $thiz.O;
      $thiz.Q = 4;
    }
    $thiz.af = new $ac_O(32);
    $thiz.J = new ($d_O.r().r().C)(32);
    $thiz.O = new ($d_O.r().r().r().C)(32);
    $thiz.J.a[(31 & ((idx >>> 5) | 0))] = $thiz.af;
    $thiz.O.a[(31 & ((idx >>> 10) | 0))] = $thiz.J;
    $thiz.a4.a[(31 & ((idx >>> 15) | 0))] = $thiz.O;
  } else if ((xor < 33554432)) {
    if (($thiz.Q <= 4)) {
      $thiz.as = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.as.a[0] = $thiz.a4;
      $thiz.Q = 5;
    }
    $thiz.af = new $ac_O(32);
    $thiz.J = new ($d_O.r().r().C)(32);
    $thiz.O = new ($d_O.r().r().r().C)(32);
    $thiz.a4 = new ($d_O.r().r().r().r().C)(32);
    $thiz.J.a[(31 & ((idx >>> 5) | 0))] = $thiz.af;
    $thiz.O.a[(31 & ((idx >>> 10) | 0))] = $thiz.J;
    $thiz.a4.a[(31 & ((idx >>> 15) | 0))] = $thiz.O;
    $thiz.as.a[(31 & ((idx >>> 20) | 0))] = $thiz.a4;
  } else {
    if (($thiz.Q <= 5)) {
      $thiz.b2 = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.b2.a[0] = $thiz.as;
      $thiz.Q = 6;
    }
    $thiz.af = new $ac_O(32);
    $thiz.J = new ($d_O.r().r().C)(32);
    $thiz.O = new ($d_O.r().r().r().C)(32);
    $thiz.a4 = new ($d_O.r().r().r().r().C)(32);
    $thiz.as = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.J.a[(31 & ((idx >>> 5) | 0))] = $thiz.af;
    $thiz.O.a[(31 & ((idx >>> 10) | 0))] = $thiz.J;
    $thiz.a4.a[(31 & ((idx >>> 15) | 0))] = $thiz.O;
    $thiz.as.a[(31 & ((idx >>> 20) | 0))] = $thiz.a4;
    $thiz.b2.a[((idx >>> 25) | 0)] = $thiz.as;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.b2 = null;
  this.as = null;
  this.a4 = null;
  this.O = null;
  this.J = null;
  this.af = null;
  this.M = 0;
  this.G = 0;
  this.K = 0;
  this.gJ = false;
  this.Q = 0;
  this.af = new $ac_O(32);
  this.M = 0;
  this.G = 0;
  this.K = 0;
  this.gJ = false;
  this.Q = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.bh = (function(size) {
});
$p.pE = (function(v) {
  var x1 = v.cY();
  switch (x1) {
    case 0: {
      break;
    }
    case 1: {
      this.Q = 1;
      var i = v.d.a.length;
      this.M = (31 & i);
      this.G = ((i - this.M) | 0);
      var a = v.d;
      this.af = ((a.a.length === 32) ? a : $m_ju_Arrays$().aC(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.b1;
      var a$1 = v.f;
      this.af = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().aC(a$1, 0, 32));
      this.Q = 2;
      this.K = ((32 - v.bm) | 0);
      var i$1 = ((v.h + this.K) | 0);
      this.M = (31 & i$1);
      this.G = ((i$1 - this.M) | 0);
      this.J = new ($d_O.r().r().C)(32);
      this.J.a[0] = v.d;
      var dest = this.J;
      var length = d2.a.length;
      d2.p(0, dest, 1, length);
      this.J.a[((1 + d2.a.length) | 0)] = this.af;
      break;
    }
    case 5: {
      var d3 = v.aF;
      var s2 = v.aL;
      var a$2 = v.f;
      this.af = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().aC(a$2, 0, 32));
      this.Q = 3;
      this.K = ((1024 - v.aU) | 0);
      var i$2 = ((v.h + this.K) | 0);
      this.M = (31 & i$2);
      this.G = ((i$2 - this.M) | 0);
      this.O = new ($d_O.r().r().r().C)(32);
      this.O.a[0] = $m_sci_VectorStatics$().D(v.d, v.ba);
      var dest$1 = this.O;
      var length$1 = d3.a.length;
      d3.p(0, dest$1, 1, length$1);
      this.J = $m_ju_Arrays$().a7(s2, 32);
      this.O.a[((1 + d3.a.length) | 0)] = this.J;
      this.J.a[s2.a.length] = this.af;
      break;
    }
    case 7: {
      var d4 = v.ah;
      var s3 = v.am;
      var s2$2 = v.al;
      var a$3 = v.f;
      this.af = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().aC(a$3, 0, 32));
      this.Q = 4;
      this.K = ((32768 - v.aw) | 0);
      var i$3 = ((v.h + this.K) | 0);
      this.M = (31 & i$3);
      this.G = ((i$3 - this.M) | 0);
      this.a4 = new ($d_O.r().r().r().r().C)(32);
      this.a4.a[0] = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(v.d, v.aN), v.aO);
      var dest$2 = this.a4;
      var length$2 = d4.a.length;
      d4.p(0, dest$2, 1, length$2);
      this.O = $m_ju_Arrays$().a7(s3, 32);
      this.J = $m_ju_Arrays$().a7(s2$2, 32);
      this.a4.a[((1 + d4.a.length) | 0)] = this.O;
      this.O.a[s3.a.length] = this.J;
      this.J.a[s2$2.a.length] = this.af;
      break;
    }
    case 9: {
      var d5 = v.Y;
      var s4 = v.a2;
      var s3$2 = v.a1;
      var s2$3 = v.a0;
      var a$4 = v.f;
      this.af = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().aC(a$4, 0, 32));
      this.Q = 5;
      this.K = ((1048576 - v.a5) | 0);
      var i$4 = ((v.h + this.K) | 0);
      this.M = (31 & i$4);
      this.G = ((i$4 - this.M) | 0);
      this.as = new ($d_O.r().r().r().r().r().C)(32);
      this.as.a[0] = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(v.d, v.ao), v.ap), v.aq);
      var dest$3 = this.as;
      var length$3 = d5.a.length;
      d5.p(0, dest$3, 1, length$3);
      this.a4 = $m_ju_Arrays$().a7(s4, 32);
      this.O = $m_ju_Arrays$().a7(s3$2, 32);
      this.J = $m_ju_Arrays$().a7(s2$3, 32);
      this.as.a[((1 + d5.a.length) | 0)] = this.a4;
      this.a4.a[s4.a.length] = this.O;
      this.O.a[s3$2.a.length] = this.J;
      this.J.a[s2$3.a.length] = this.af;
      break;
    }
    case 11: {
      var d6 = v.P;
      var s5 = v.X;
      var s4$2 = v.W;
      var s3$3 = v.V;
      var s2$4 = v.U;
      var a$5 = v.f;
      this.af = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().aC(a$5, 0, 32));
      this.Q = 6;
      this.K = ((33554432 - v.a3) | 0);
      var i$5 = ((v.h + this.K) | 0);
      this.M = (31 & i$5);
      this.G = ((i$5 - this.M) | 0);
      this.b2 = new ($d_O.r().r().r().r().r().r().C)(64);
      this.b2.a[0] = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(v.d, v.ab), v.ac), v.ad), v.ae);
      var dest$4 = this.b2;
      var length$4 = d6.a.length;
      d6.p(0, dest$4, 1, length$4);
      this.as = $m_ju_Arrays$().a7(s5, 32);
      this.a4 = $m_ju_Arrays$().a7(s4$2, 32);
      this.O = $m_ju_Arrays$().a7(s3$3, 32);
      this.J = $m_ju_Arrays$().a7(s2$4, 32);
      this.b2.a[((1 + d6.a.length) | 0)] = this.as;
      this.as.a[s5.a.length] = this.a4;
      this.a4.a[s4$2.a.length] = this.O;
      this.O.a[s3$3.a.length] = this.J;
      this.J.a[s2$4.a.length] = this.af;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  if (((this.M === 0) && (this.G > 0))) {
    this.M = 32;
    this.G = (((-32) + this.G) | 0);
  }
  return this;
});
$p.r9 = (function(before, bigVector) {
  if (((this.M !== 0) || (this.G !== 0))) {
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
    var x1$2___1$mcI$sp = bigVector.bm;
    var x1$2___2$mcI$sp = 32;
  } else if ((bigVector instanceof $c_sci_Vector3)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.aU;
    var x1$2___2$mcI$sp = 1024;
  } else if ((bigVector instanceof $c_sci_Vector4)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.aw;
    var x1$2___2$mcI$sp = 32768;
  } else if ((bigVector instanceof $c_sci_Vector5)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.a5;
    var x1$2___2$mcI$sp = 1048576;
  } else {
    if ((!(bigVector instanceof $c_sci_Vector6))) {
      throw new $c_s_MatchError(bigVector);
    }
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.a3;
    var x1$2___2$mcI$sp = 33554432;
  }
  var prefixLength = x1$2___1$mcI$sp;
  var maxPrefixLength = x1$2___2$mcI$sp;
  if ((maxPrefixLength === 1)) {
    return this;
  }
  var overallPrefixLength = $intMod(((before + prefixLength) | 0), maxPrefixLength);
  this.K = $intMod(((maxPrefixLength - overallPrefixLength) | 0), maxPrefixLength);
  $p_sci_VectorBuilder__advanceN__I__V(this, ((-32) & this.K));
  this.M = (31 & this.K);
  this.gJ = true;
  return this;
});
$p.r3 = (function(elem) {
  if ((this.M === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.af.a[this.M] = elem;
  this.M = ((1 + this.M) | 0);
  return this;
});
$p.gS = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.M === 0) && (this.G === 0)) && (!this.gJ)) ? this.pE(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.ix = (function() {
  if (this.gJ) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.M + this.G) | 0);
  var realLen = ((len - this.K) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.af;
    return new $c_sci_Vector1(((a.a.length === realLen) ? a : $m_ju_Arrays$().a7(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & (((-1) + len) | 0));
    var i2 = (((((-1) + len) | 0) >>> 5) | 0);
    var data = $m_ju_Arrays$().aC(this.J, 1, i2);
    var prefix1 = this.J.a[0];
    var a$1 = this.J.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().a7(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.K) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().aC(this.O, 1, i3);
    var a$2 = this.O.a[0];
    var prefix2 = $m_ju_Arrays$().aC(a$2, 1, a$2.a.length);
    var prefix1$2 = this.O.a[0].a[0];
    var suffix2 = $m_ju_Arrays$().a7(this.O.a[i3], i2$2);
    var a$3 = this.O.a[i3].a[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$3.a.length === len$2) ? a$3 : $m_ju_Arrays$().a7(a$3, len$2));
    var len1 = prefix1$2.a.length;
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, ((len1 + (prefix2.a.length << 5)) | 0), data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var data$3 = $m_ju_Arrays$().aC(this.a4, 1, i4);
    var a$4 = this.a4.a[0];
    var prefix3 = $m_ju_Arrays$().aC(a$4, 1, a$4.a.length);
    var a$5 = this.a4.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().aC(a$5, 1, a$5.a.length);
    var prefix1$3 = this.a4.a[0].a[0].a[0];
    var suffix3 = $m_ju_Arrays$().a7(this.a4.a[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().a7(this.a4.a[i4].a[i3$2], i2$3);
    var a$6 = this.a4.a[i4].a[i3$2].a[i2$3];
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = ((a$6.a.length === len$3) ? a$6 : $m_ju_Arrays$().a7(a$6, len$3));
    var len1$2 = prefix1$3.a.length;
    var len12$2 = ((len1$2 + (prefix2$2.a.length << 5)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, ((len12$2 + (prefix3.a.length << 10)) | 0), data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & (((-1) + len) | 0));
    var i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5 = (((((-1) + len) | 0) >>> 20) | 0);
    var data$4 = $m_ju_Arrays$().aC(this.as, 1, i5);
    var a$7 = this.as.a[0];
    var prefix4 = $m_ju_Arrays$().aC(a$7, 1, a$7.a.length);
    var a$8 = this.as.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().aC(a$8, 1, a$8.a.length);
    var a$9 = this.as.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().aC(a$9, 1, a$9.a.length);
    var prefix1$4 = this.as.a[0].a[0].a[0].a[0];
    var suffix4 = $m_ju_Arrays$().a7(this.as.a[i5], i4$2);
    var suffix3$2 = $m_ju_Arrays$().a7(this.as.a[i5].a[i4$2], i3$3);
    var suffix2$3 = $m_ju_Arrays$().a7(this.as.a[i5].a[i4$2].a[i3$3], i2$4);
    var a$10 = this.as.a[i5].a[i4$2].a[i3$3].a[i2$4];
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = ((a$10.a.length === len$4) ? a$10 : $m_ju_Arrays$().a7(a$10, len$4));
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
    var data$5 = $m_ju_Arrays$().aC(this.b2, 1, i6);
    var a$11 = this.b2.a[0];
    var prefix5 = $m_ju_Arrays$().aC(a$11, 1, a$11.a.length);
    var a$12 = this.b2.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().aC(a$12, 1, a$12.a.length);
    var a$13 = this.b2.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().aC(a$13, 1, a$13.a.length);
    var a$14 = this.b2.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().aC(a$14, 1, a$14.a.length);
    var prefix1$5 = this.b2.a[0].a[0].a[0].a[0].a[0];
    var suffix5 = $m_ju_Arrays$().a7(this.b2.a[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().a7(this.b2.a[i6].a[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().a7(this.b2.a[i6].a[i5$2].a[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().a7(this.b2.a[i6].a[i5$2].a[i4$3].a[i3$4], i2$5);
    var a$15 = this.b2.a[i6].a[i5$2].a[i4$3].a[i3$4].a[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.a.length === len$5) ? a$15 : $m_ju_Arrays$().a7(a$15, len$5));
    var len1$4 = prefix1$5.a.length;
    var len12$4 = ((len1$4 + (prefix2$4.a.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.w = (function() {
  return (((((((("VectorBuilder(len1=" + this.M) + ", lenRest=") + this.G) + ", offset=") + this.K) + ", depth=") + this.Q) + ")");
});
$p.aW = (function() {
  return this.ix();
});
$p.b4 = (function(elems) {
  return this.gS(elems);
});
$p.au = (function(elem) {
  return this.r3(elem);
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  hN: 1,
  a7: 1,
  I: 1,
  H: 1,
  G: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.oj = null;
  $n_scm_ArrayBuffer$ = this;
  this.oj = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.dM = (function(elems) {
  return this.pv(elems);
});
$p.pv = (function(coll) {
  var k = coll.s();
  if ((k >= 0)) {
    var array = this.qb(this.oj, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.bR(array, 0, 2147483647) : coll.g().bR(array, 0, 2147483647));
    if ((actual !== k)) {
      throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), ((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).oG(coll);
  }
});
$p.aR = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.tz = (function(arrayLen, targetLen) {
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
$p.qb = (function(array, curSize, targetSize) {
  var newLen = this.tz(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.p(0, res, 0, curSize);
    return res;
  }
});
$p.bE = (function() {
  return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
});
$p.aD = (function(source) {
  return this.pv(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  hS: 1,
  ar: 1,
  a0: 1,
  E: 1,
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
  this.eg = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.bh = (function(size) {
  this.eg.bh(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  hT: 1,
  b9: 1,
  I: 1,
  H: 1,
  G: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.e0 = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  hY: 1,
  b0: 1,
  a0: 1,
  E: 1,
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
  this.eg = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), initialCapacity$1, loadFactor$1));
}
$p = $c_scm_HashSet$$anon$4.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_HashSet$$anon$4;
/** @constructor */
function $h_scm_HashSet$$anon$4() {
}
$h_scm_HashSet$$anon$4.prototype = $p;
$p.bh = (function(size) {
  this.eg.bh(size);
});
var $d_scm_HashSet$$anon$4 = new $TypeData().i($c_scm_HashSet$$anon$4, "scala.collection.mutable.HashSet$$anon$4", ({
  i8: 1,
  b9: 1,
  I: 1,
  H: 1,
  G: 1
}));
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  $thiz.gN = outer;
  $thiz.ei = 0;
  $thiz.dG = null;
  $thiz.gO = outer.bo.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.ei = 0;
  this.dG = null;
  this.gO = 0;
  this.gN = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.l = (function() {
  if ((this.dG !== null)) {
    return true;
  } else {
    while ((this.ei < this.gO)) {
      var n = this.gN.bo.a[this.ei];
      this.ei = ((1 + this.ei) | 0);
      if ((n !== null)) {
        this.dG = n;
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
    var r = this.kq(this.dG);
    this.dG = this.dG.bp;
    return r;
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.gP = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.gP = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.bh = (function(size) {
});
$p.b4 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.aW = (function() {
  return this.gP;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.e0 = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  ib: 1,
  b0: 1,
  a0: 1,
  E: 1,
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
$p.dM = (function(elems) {
  return new $c_scm_ListBuffer().iz(elems);
});
$p.aR = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.bE = (function() {
  return new $c_scm_ListBuffer();
});
$p.aD = (function(source) {
  return new $c_scm_ListBuffer().iz(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  ie: 1,
  ar: 1,
  a0: 1,
  E: 1,
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
  this.k6 = null;
  this.or = null;
  this.oq = 0;
  this.k6 = underlying;
  this.or = mutationCount;
  this.oq = (mutationCount.S() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.l = (function() {
  $m_scm_MutationTracker$().p4(this.oq, (this.or.S() | 0), "mutation occurred during iteration");
  return this.k6.l();
});
$p.e = (function() {
  return this.k6.e();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  ih: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.b6();
    var x$3 = x.b6();
    return (x$2 === x$3);
  } else {
    return false;
  }
}
function $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz) {
  return (clazz.C.Z ? (("Array[" + $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz.C.Q())) + "]") : clazz.C.N);
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.J)));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.J)));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.gR = 0;
  this.ov = 0;
  this.ow = null;
  this.ow = x$2;
  this.gR = 0;
  this.ov = x$2.be();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.l = (function() {
  return (this.gR < this.ov);
});
$p.e = (function() {
  var result = this.ow.bf(this.gR);
  this.gR = ((1 + this.gR) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  j0: 1,
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
$p.dM = (function(elems) {
  return this.pw(elems);
});
$p.aR = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.pw = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).aW();
});
$p.aD = (function(source) {
  return this.pw(source);
});
$p.bE = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  j7: 1,
  ar: 1,
  a0: 1,
  E: 1,
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
$p.dM = (function(elems) {
  return this.kw(elems);
});
$p.kw = (function(source) {
  return this.aR().b4(source).aW();
});
$p.aR = (function() {
  return new $c_scm_Builder$$anon$1($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), x$1$2$2.ej))));
});
$p.aD = (function(source) {
  return this.kw(source);
});
$p.bE = (function() {
  return $ct_sjsr_WrappedVarArgs__(new $c_sjsr_WrappedVarArgs());
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  jl: 1,
  ar: 1,
  a0: 1,
  E: 1,
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
  this.ek = null;
  this.ek = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.pG = (function() {
  return true;
});
$p.pH = (function() {
  return false;
});
$p.kM = (function(f) {
  return this;
});
$p.q3 = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.bM(this.ek, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().ep(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.aG : e$2);
  }
});
$p.cP = (function(fa, fb) {
  return fa.b(this.ek);
});
$p.bg = (function() {
  return "Failure";
});
$p.be = (function() {
  return 1;
});
$p.bf = (function(x$1) {
  return ((x$1 === 0) ? this.ek : $m_sr_Statics$().es(x$1));
});
$p.by = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().dd(this, (-889275714), false);
});
$p.w = (function() {
  return $m_sr_ScalaRunTime$().fJ(this);
});
$p.n = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_util_Failure)) {
    var x = this.ek;
    var x$2 = x$1.ek;
    return ((x === null) ? (x$2 === null) : x.n(x$2));
  } else {
    return false;
  }
});
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d1)));
}
var $d_s_util_Failure = new $TypeData().i($c_s_util_Failure, "scala.util.Failure", ({
  d1: 1,
  d3: 1,
  D: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Success(value) {
  this.el = null;
  this.el = value;
}
$p = $c_s_util_Success.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $p;
$p.pG = (function() {
  return false;
});
$p.pH = (function() {
  return true;
});
$p.kM = (function(f) {
  try {
    return new $c_s_util_Success(f.b(this.el));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().ep(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.aG : e$2);
  }
});
$p.q3 = (function(pf) {
  return this;
});
$p.cP = (function(fa, fb) {
  try {
    return fb.b(this.el);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().ep(e$2)) {
      return fa.b(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.aG : e$2);
  }
});
$p.bg = (function() {
  return "Success";
});
$p.be = (function() {
  return 1;
});
$p.bf = (function(x$1) {
  return ((x$1 === 0) ? this.el : $m_sr_Statics$().es(x$1));
});
$p.by = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().dd(this, (-889275714), false);
});
$p.w = (function() {
  return $m_sr_ScalaRunTime$().fJ(this);
});
$p.n = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().k(this.el, x$1.el)));
});
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d2)));
}
var $d_s_util_Success = new $TypeData().i($c_s_util_Success, "scala.util.Success", ({
  d2: 1,
  d3: 1,
  D: 1,
  d: 1,
  a: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.gd = null;
    this.gc = null;
    this.gd = error;
    this.gc = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().f1(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().f1(cause)), null, true, true);
    this.kD(cause);
  }
  by() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().dd(this, (-889275714), false);
  }
  n(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.gd;
      var x$2 = x$0.gd;
      if (((x === null) ? (x$2 === null) : x.n(x$2))) {
        var x$3 = this.gc;
        var x$4 = x$0.gc;
        return ((x$3 === null) ? (x$4 === null) : x$3.n(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  be() {
    return 2;
  }
  bg() {
    return "ErrorHandlingError";
  }
  bf(n) {
    if ((n === 0)) {
      return this.gd;
    }
    if ((n === 1)) {
      return this.gc;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  w() {
    return ((("ErrorHandlingError: " + this.gd) + "; cause: ") + this.gc);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bf)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", ({
  bf: 1,
  aw: 1,
  o: 1,
  a: 1,
  d: 1,
  D: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.ge = null;
    this.ge = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().f1(error)), null, true, true);
  }
  by() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().dd(this, (-889275714), false);
  }
  n(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.ge;
      var x$2 = x$0.ge;
      return ((x === null) ? (x$2 === null) : x.n(x$2));
    } else {
      return false;
    }
  }
  be() {
    return 1;
  }
  bg() {
    return "ObserverError";
  }
  bf(n) {
    if ((n === 0)) {
      return this.ge;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  w() {
    return ("ObserverError: " + this.ge);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bg)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverError, "com.raquo.airstream.core.AirstreamError$ObserverError", ({
  bg: 1,
  aw: 1,
  o: 1,
  a: 1,
  d: 1,
  D: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.gg = null;
    this.gf = null;
    this.gg = error;
    this.gf = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().f1(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().f1(cause)), null, true, true);
    this.kD(cause);
  }
  by() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().dd(this, (-889275714), false);
  }
  n(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.gg;
      var x$2 = x$0.gg;
      if (((x === null) ? (x$2 === null) : x.n(x$2))) {
        var x$3 = this.gf;
        var x$4 = x$0.gf;
        return ((x$3 === null) ? (x$4 === null) : x$3.n(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  be() {
    return 2;
  }
  bg() {
    return "ObserverErrorHandlingError";
  }
  bf(n) {
    if ((n === 0)) {
      return this.gg;
    }
    if ((n === 1)) {
      return this.gf;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  w() {
    return ((("ObserverErrorHandlingError: " + this.gg) + "; cause: ") + this.gf);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bh)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", ({
  bh: 1,
  aw: 1,
  o: 1,
  a: 1,
  d: 1,
  D: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(trx, depth) {
    super();
    this.fb = null;
    this.fa = 0;
    this.fb = trx;
    this.fa = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  by() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().i(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().L(this.fb));
    acc = $m_sr_Statics$().i(acc, this.fa);
    return $m_sr_Statics$().F(acc, 2);
  }
  n(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.fa === x$0.fa)) {
        var x = this.fb;
        var x$2 = x$0.fb;
        return (x === x$2);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  be() {
    return 2;
  }
  bg() {
    return "TransactionDepthExceeded";
  }
  bf(n) {
    if ((n === 0)) {
      return this.fb;
    }
    if ((n === 1)) {
      return this.fa;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  w() {
    return ((("TransactionDepthExceeded: " + this.fb) + "; maxDepth: ") + this.fa);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bi)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded, "com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded", ({
  bi: 1,
  aw: 1,
  o: 1,
  a: 1,
  d: 1,
  D: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$VarError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(message, cause) {
    super();
    this.gi = null;
    this.gh = null;
    this.gi = message;
    this.gh = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, $m_Lcom_raquo_airstream_core_AirstreamError$().rv(message, cause), null, true, true);
    if ((!cause.c())) {
      this.kD(cause.T());
    }
  }
  by() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().dd(this, (-889275714), false);
  }
  n(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$VarError)) {
      if ((this.gi === x$0.gi)) {
        var x = this.gh;
        var x$2 = x$0.gh;
        return ((x === null) ? (x$2 === null) : x.n(x$2));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  be() {
    return 2;
  }
  bg() {
    return "VarError";
  }
  bf(n) {
    if ((n === 0)) {
      return this.gi;
    }
    if ((n === 1)) {
      return this.gh;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  w() {
    return ((("VarError: " + this.gi) + "; cause: ") + this.gh);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$VarError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bj)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$VarError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$VarError, "com.raquo.airstream.core.AirstreamError$VarError", ({
  bj: 1,
  aw: 1,
  o: 1,
  a: 1,
  d: 1,
  D: 1
}));
function $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz) {
  $thiz.l3();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V($thiz) {
  $thiz.lw = 1;
  $thiz.hv = 0;
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V($thiz) {
  $thiz.hv = ((1 + $thiz.hv) | 0);
  $thiz.hu.lq.S();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V($thiz) {
  try {
    var $x_1 = new $c_s_util_Success(($thiz.hu.lo.S(), (void 0)));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().ep(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.aG : e$2);
    }
  }
  $x_1.q3(new $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1($thiz));
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V($thiz) {
  $thiz.hu.lp.S();
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar(initial) {
  this.lV = null;
  this.qq = null;
  this.iU = null;
  this.iT = null;
  this.gj = null;
  this.lV = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V(this);
  this.iU = initial;
  this.iT = new $c_Lcom_raquo_airstream_state_VarSignal(this.iU, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
  this.gj = this.iT;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.f3 = (function() {
  return this.lV;
});
$p.eZ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.w = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.kY = (function(value, transaction) {
  this.iU = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.iT, value, transaction);
});
$p.g3 = (function() {
  return this.gj;
});
var $d_Lcom_raquo_airstream_state_SourceVar = new $TypeData().i($c_Lcom_raquo_airstream_state_SourceVar, "com.raquo.airstream.state.SourceVar", ({
  dE: 1,
  ax: 1,
  aP: 1,
  aE: 1,
  ac: 1,
  dG: 1
}));
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V($thiz, propDomName) {
  var x = $thiz.je;
  if ((x === (void 0))) {
    $thiz.je = $m_sjs_js_defined$().rg($m_Lcom_raquo_ew_JsArray$().bL($m_sr_ScalaRunTime$().z(new ($d_T.r().C)([propDomName]))));
  } else {
    (x.push(propDomName) | 0);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z($thiz, propDomName) {
  var x = $thiz.ni;
  if ((x !== (void 0))) {
    _return: {
      var len = (x.length | 0);
      var i = 0;
      while ((i < len)) {
        if ((x[i].uG() === propDomName)) {
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
  this.hG = null;
  this.cD = null;
  this.jd = null;
  this.eB = null;
  this.gr = null;
  this.jf = null;
  this.bu = null;
  this.ni = null;
  this.je = null;
  this.jf = tag;
  this.bu = ref;
  this.hG = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
  this.ni = (void 0);
  this.je = (void 0);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.d7 = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fL(parentNode, this, (void 0));
});
$p.ie = (function() {
  return this.cD;
});
$p.p7 = (function(x$0) {
  this.cD = x$0;
});
$p.hn = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.hi = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.ry = (function() {
  if ($m_Lcom_raquo_laminar_DomApi$().sI(this.bu)) {
    var x1 = this.jf;
    if (false) {
      return x1.uo();
    }
    return (void 0);
  } else {
    return $m_Lcom_raquo_laminar_inputs_InputController$().mZ;
  }
});
$p.sG = (function(propDomName) {
  var x = this.ry();
  return ((x !== (void 0)) && $m_Lcom_raquo_ew_JsArray$RichJsArray$().sB(x, propDomName, 0));
});
$p.tf = (function(key) {
  if ((key instanceof $c_Lcom_raquo_laminar_keys_HtmlProp)) {
    if (this.sG(key.dh)) {
      if ($p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z(this, key.dh)) {
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((((("Can not add uncontrolled `" + key.dh) + " <-- ???` to element `") + $m_Lcom_raquo_laminar_DomApi$().pc(this.bu)) + "` that already has an input controller for `") + key.dh) + "` property."));
      } else {
        $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V(this, key.dh);
      }
    }
  }
});
$p.w = (function() {
  return (("ReactiveHtmlElement(" + ((this.bu !== null) ? this.bu.outerHTML : ("tag=" + this.jf.ji))) + ")");
});
$p.aJ = (function() {
  return this.bu;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  eU: 1,
  aG: 1,
  Y: 1,
  aT: 1,
  bA: 1,
  eS: 1
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
  f6: 1,
  aV: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().kQ($thiz);
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bG)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  bG: 1,
  ak: 1,
  a: 1,
  a8: 1,
  a4: 1,
  ay: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  return $m_jl_FloatingPointBits$().kQ(value);
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Float(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bH)));
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  bH: 1,
  ak: 1,
  a: 1,
  a8: 1,
  a4: 1,
  ay: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bJ)));
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  bJ: 1,
  ak: 1,
  a: 1,
  a8: 1,
  a4: 1,
  ay: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  return ((that instanceof $c_RTLong) && (($thiz.o === that.o) && ($thiz.r === that.r)));
}
function $f_jl_Long__hashCode__I($thiz) {
  return ($thiz.o ^ $thiz.r);
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().kT($thiz.o, $thiz.r);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bK)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  bK: 1,
  ak: 1,
  a: 1,
  a8: 1,
  a4: 1,
  ay: 1
}), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  fj: 1,
  T: 1,
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
  var str = $m_jl_Character$().qj(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  fn: 1,
  a: 1,
  a8: 1,
  aU: 1,
  a4: 1,
  ay: 1
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
  fq: 1,
  aV: 1,
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
  fI: 1,
  bI: 1,
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
$p.sn = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$p.bg = (function() {
  return "None";
});
$p.be = (function() {
  return 0;
});
$p.bf = (function(x$1) {
  return $m_sr_Statics$().es(x$1);
});
$p.by = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return 2433880;
});
$p.w = (function() {
  return "None";
});
$p.T = (function() {
  this.sn();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  g5: 1,
  bQ: 1,
  b: 1,
  D: 1,
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
  this.eD = null;
  this.eD = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.T = (function() {
  return this.eD;
});
$p.bg = (function() {
  return "Some";
});
$p.be = (function() {
  return 1;
});
$p.bf = (function(x$1) {
  return ((x$1 === 0) ? this.eD : $m_sr_Statics$().es(x$1));
});
$p.by = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().dd(this, (-889275714), false);
});
$p.w = (function() {
  return $m_sr_ScalaRunTime$().fJ(this);
});
$p.n = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().k(this.eD, x$1.eD)));
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bR)));
}
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  bR: 1,
  bQ: 1,
  b: 1,
  D: 1,
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
$p.bc = (function() {
  return $m_sc_Iterable$();
});
$p.c5 = (function() {
  return this.bt();
});
$p.bt = (function() {
  return "Iterable";
});
$p.w = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.fQ = (function(coll) {
  return this.bc().aD(coll);
});
$p.hb = (function() {
  return this.bc().aR();
});
$p.t = (function() {
  return this.g().e();
});
$p.kZ = (function(otherSize) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, otherSize);
});
$p.N = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.d8 = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
});
$p.ii = (function(p) {
  return $f_sc_IterableOnceOps__exists__F1__Z(this, p);
});
$p.c = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.bR = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.ib = (function(pf) {
  return $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(this, pf);
});
$p.en = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.l2 = (function() {
  return $m_sci_Vector$().bs(this);
});
$p.iA = (function(evidence$2) {
  return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2);
});
$p.s = (function() {
  return (-1);
});
$p.fP = (function(coll) {
  return this.fQ(coll);
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.cd = xs;
  $thiz.A = 0;
  $thiz.bV = $m_jl_reflect_Array$().bS($thiz.cd);
  return $thiz;
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.cd = null;
  this.A = 0;
  this.bV = 0;
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.s = (function() {
  return ((this.bV - this.A) | 0);
});
$p.l = (function() {
  return (this.A < this.bV);
});
$p.e = (function() {
  if ((this.A >= $m_jl_reflect_Array$().bS(this.cd))) {
    $m_sc_Iterator$().E.e();
  }
  var r = $m_sr_ScalaRunTime$().eY(this.cd, this.A);
  this.A = ((1 + this.A) | 0);
  return r;
});
$p.cO = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.A + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.bV;
    } else {
      var a = this.bV;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.A = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  a5: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.ce) ? $thiz.ce : value));
}
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.jE = self;
  $thiz.dk = 0;
  $thiz.ce = self.m();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.jE = null;
  this.dk = 0;
  this.ce = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.s = (function() {
  return this.ce;
});
$p.l = (function() {
  return (this.ce > 0);
});
$p.e = (function() {
  if ((this.ce > 0)) {
    var r = this.jE.u(this.dk);
    this.dk = ((1 + this.dk) | 0);
    this.ce = (((-1) + this.ce) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().E.e();
  }
});
$p.cO = (function(n) {
  if ((n > 0)) {
    this.dk = ((this.dk + n) | 0);
    var b = ((this.ce - n) | 0);
    this.ce = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.g1 = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.ce = ((b < 0) ? 0 : b);
  this.dk = ((this.dk + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  bX: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(self) {
  this.nQ = null;
  this.bA = 0;
  this.fq = 0;
  this.nQ = self;
  this.bA = self.m();
  this.fq = (((-1) + this.bA) | 0);
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = $p;
$p.l = (function() {
  return (this.bA > 0);
});
$p.e = (function() {
  if ((this.bA > 0)) {
    var r = this.nQ.u(this.fq);
    this.fq = (((-1) + this.fq) | 0);
    this.bA = (((-1) + this.bA) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().E.e();
  }
});
$p.g1 = (function(from, until) {
  if ((this.bA > 0)) {
    if ((this.bA <= from)) {
      this.bA = 0;
    } else if ((from <= 0)) {
      if (((until >= 0) && (until < this.bA))) {
        this.bA = until;
      }
    } else {
      this.fq = ((this.fq - from) | 0);
      if (((until >= 0) && (until < this.bA))) {
        if ((until <= from)) {
          this.bA = 0;
        } else {
          this.bA = ((until - from) | 0);
        }
      } else {
        this.bA = ((this.bA - from) | 0);
      }
    }
  }
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewReverseIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewReverseIterator, "scala.collection.IndexedSeqView$IndexedSeqViewReverseIterator", ({
  gr: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.gP = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().E);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.r0 = (function(elem) {
  this.gP = this.gP.h2(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.au = (function(elem) {
  return this.r0(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  gz: 1,
  ia: 1,
  a7: 1,
  I: 1,
  H: 1,
  G: 1
}));
function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
  return $thiz.dO(x, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => default$1.b(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.g();
  while (it.l()) {
    var next = it.e();
    f.dL(next.bB(), next.bw());
  }
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9($thiz.g(), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.bB();
      var v = x0$1$2$2.bw();
      return ((k + " -> ") + v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  }))), sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  var builder = $thiz.hb();
  var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
  var it = $thiz.g();
  while (it.l()) {
    var next = it.e();
    if (seen.i7(f.b(next))) {
      builder.au(next);
    }
  }
  return builder.aW();
}
function $f_sc_StrictOptimizedSeqOps__appended__O__O($thiz, elem) {
  var b = $thiz.dQ().aR();
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(b, $thiz, 1);
  b.b4($thiz);
  b.au(elem);
  return b.aW();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.dQ().aR();
  b.b4($thiz);
  b.b4(suffix);
  return b.aW();
}
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.jI)) {
    $thiz.jJ = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.jI = true;
  }
  return $thiz.jJ;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.jI) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.jJ);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.jJ = null;
  this.jK = null;
  this.jI = false;
  $n_sci_ArraySeq$ = this;
  this.jK = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.ku = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.hm($m_s_Array$().pr(it, tag)));
});
$p.ip = (function(evidence$2) {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((b$2$2) => $m_sci_ArraySeq$().hm($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2$2, evidence$2)))));
});
$p.hm = (function(x) {
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
$p.kt = (function(it, evidence$5) {
  return this.ku(it, evidence$5);
});
$p.pf = (function(evidence$6) {
  return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  gU: 1,
  c2: 1,
  bU: 1,
  bT: 1,
  bV: 1,
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
  this.a9 = 0;
  this.du = 0;
  this.bF = null;
  this.bv = 0;
  this.ch = null;
  this.dv = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.b0);
  while (this.l()) {
    var originalHash = this.bF.cr(this.a9);
    outer.g4(outer.d2, this.bF.d9(this.a9), this.bF.da(this.a9), originalHash, $m_sc_Hashing$().bb(originalHash), 0);
    this.a9 = ((1 + this.a9) | 0);
  }
}
$p = $c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
}
$h_sci_HashMapBuilder$$anon$1.prototype = $p;
$p.hc = (function() {
  $m_sc_Iterator$().E.e();
  throw new $c_jl_ClassCastException();
});
$p.e = (function() {
  this.hc();
});
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().i($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
  gY: 1,
  at: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_HashSetBuilder$$anon$1(outer, x2$1) {
  this.a9 = 0;
  this.du = 0;
  this.bF = null;
  this.bv = 0;
  this.ch = null;
  this.dv = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.bG);
  while (this.l()) {
    var originalHash = this.bF.cr(this.a9);
    outer.l4(outer.eH, this.bF.cS(this.a9), originalHash, $m_sc_Hashing$().bb(originalHash), 0);
    this.a9 = ((1 + this.a9) | 0);
  }
}
$p = $c_sci_HashSetBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashSetBuilder$$anon$1;
/** @constructor */
function $h_sci_HashSetBuilder$$anon$1() {
}
$h_sci_HashSetBuilder$$anon$1.prototype = $p;
$p.hc = (function() {
  $m_sc_Iterator$().E.e();
  throw new $c_jl_ClassCastException();
});
$p.e = (function() {
  this.hc();
});
var $d_sci_HashSetBuilder$$anon$1 = new $TypeData().i($c_sci_HashSetBuilder$$anon$1, "scala.collection.immutable.HashSetBuilder$$anon$1", ({
  h1: 1,
  at: 1,
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
  this.dx = 0;
  this.eI = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
}
$h_sci_Map$Map2$$anon$1.prototype = $p;
$p.c9 = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map2$$anon$1 = new $TypeData().i($c_sci_Map$Map2$$anon$1, "scala.collection.immutable.Map$Map2$$anon$1", ({
  hg: 1,
  cp: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map2$$anon$2(outer) {
  this.dx = 0;
  this.eI = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$2.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$2;
/** @constructor */
function $h_sci_Map$Map2$$anon$2() {
}
$h_sci_Map$Map2$$anon$2.prototype = $p;
$p.c9 = (function(k, v) {
  return k;
});
var $d_sci_Map$Map2$$anon$2 = new $TypeData().i($c_sci_Map$Map2$$anon$2, "scala.collection.immutable.Map$Map2$$anon$2", ({
  hh: 1,
  cp: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.dz = 0;
  this.dy = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$4;
/** @constructor */
function $h_sci_Map$Map3$$anon$4() {
}
$h_sci_Map$Map3$$anon$4.prototype = $p;
$p.c9 = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map3$$anon$4 = new $TypeData().i($c_sci_Map$Map3$$anon$4, "scala.collection.immutable.Map$Map3$$anon$4", ({
  hi: 1,
  cr: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$5(outer) {
  this.dz = 0;
  this.dy = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$5.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$5;
/** @constructor */
function $h_sci_Map$Map3$$anon$5() {
}
$h_sci_Map$Map3$$anon$5.prototype = $p;
$p.c9 = (function(k, v) {
  return k;
});
var $d_sci_Map$Map3$$anon$5 = new $TypeData().i($c_sci_Map$Map3$$anon$5, "scala.collection.immutable.Map$Map3$$anon$5", ({
  hj: 1,
  cr: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.dA = 0;
  this.cH = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
}
$h_sci_Map$Map4$$anon$7.prototype = $p;
$p.c9 = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map4$$anon$7 = new $TypeData().i($c_sci_Map$Map4$$anon$7, "scala.collection.immutable.Map$Map4$$anon$7", ({
  hk: 1,
  ct: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$8(outer) {
  this.dA = 0;
  this.cH = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$8.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$8;
/** @constructor */
function $h_sci_Map$Map4$$anon$8() {
}
$h_sci_Map$Map4$$anon$8.prototype = $p;
$p.c9 = (function(k, v) {
  return k;
});
var $d_sci_Map$Map4$$anon$8 = new $TypeData().i($c_sci_Map$Map4$$anon$8, "scala.collection.immutable.Map$Map4$$anon$8", ({
  hl: 1,
  ct: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyIterator(rootNode) {
  this.a9 = 0;
  this.du = 0;
  this.bF = null;
  this.bv = 0;
  this.ch = null;
  this.dv = null;
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
  var key = this.bF.d9(this.a9);
  this.a9 = ((1 + this.a9) | 0);
  return key;
});
var $d_sci_MapKeyIterator = new $TypeData().i($c_sci_MapKeyIterator, "scala.collection.immutable.MapKeyIterator", ({
  hn: 1,
  at: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.e1 = 0;
  this.hS = null;
  this.ci = 0;
  this.gC = null;
  this.gD = null;
  this.jR = 0;
  this.oa = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.jR = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().qk(this.jR, $m_sr_Statics$().L(this.oa), (-889275714));
});
$p.t4 = (function() {
  if ((!this.l())) {
    $m_sc_Iterator$().E.e();
  }
  this.jR = this.hS.cr(this.e1);
  this.oa = this.hS.da(this.e1);
  this.e1 = (((-1) + this.e1) | 0);
  return this;
});
$p.e = (function() {
  return this.t4();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  ho: 1,
  gV: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.a9 = 0;
  this.du = 0;
  this.bF = null;
  this.bv = 0;
  this.ch = null;
  this.dv = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.t3 = (function() {
  if ((!this.l())) {
    $m_sc_Iterator$().E.e();
  }
  var payload = this.bF.ky(this.a9);
  this.a9 = ((1 + this.a9) | 0);
  return payload;
});
$p.e = (function() {
  return this.t3();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  hp: 1,
  at: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.c3 <= $thiz.aY)) {
    $m_sc_Iterator$().E.e();
  }
  $thiz.e4 = ((1 + $thiz.e4) | 0);
  var slice = $thiz.jT.de($thiz.e4);
  while ((slice.a.length === 0)) {
    $thiz.e4 = ((1 + $thiz.e4) | 0);
    slice = $thiz.jT.de($thiz.e4);
  }
  $thiz.gG = $thiz.eL;
  var count = $thiz.oc;
  var idx = $thiz.e4;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  $thiz.e3 = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
  var x1 = $thiz.e3;
  switch (x1) {
    case 1: {
      $thiz.bk = slice;
      break;
    }
    case 2: {
      $thiz.bl = slice;
      break;
    }
    case 3: {
      $thiz.bQ = slice;
      break;
    }
    case 4: {
      $thiz.cI = slice;
      break;
    }
    case 5: {
      $thiz.eK = slice;
      break;
    }
    case 6: {
      $thiz.jS = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  $thiz.eL = (($thiz.gG + Math.imul(slice.a.length, (1 << Math.imul(5, (((-1) + $thiz.e3) | 0))))) | 0);
  if (($thiz.eL > $thiz.dD)) {
    $thiz.eL = $thiz.dD;
  }
  if (($thiz.e3 > 1)) {
    $thiz.fA = (((-1) + (1 << Math.imul(5, $thiz.e3))) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.aY - $thiz.c3) | 0) + $thiz.dD) | 0);
  if ((pos === $thiz.eL)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.e3 > 1)) {
    var io = ((pos - $thiz.gG) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.fA ^ io));
    $thiz.fA = io;
  }
  $thiz.c3 = (($thiz.c3 - $thiz.aY) | 0);
  var a = $thiz.bk.a.length;
  var b = $thiz.c3;
  $thiz.dC = ((a < b) ? a : b);
  $thiz.aY = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.bk = $thiz.bl.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.bl = $thiz.bQ.a[(31 & ((io >>> 10) | 0))];
    $thiz.bk = $thiz.bl.a[0];
  } else if ((xor < 1048576)) {
    $thiz.bQ = $thiz.cI.a[(31 & ((io >>> 15) | 0))];
    $thiz.bl = $thiz.bQ.a[0];
    $thiz.bk = $thiz.bl.a[0];
  } else if ((xor < 33554432)) {
    $thiz.cI = $thiz.eK.a[(31 & ((io >>> 20) | 0))];
    $thiz.bQ = $thiz.cI.a[0];
    $thiz.bl = $thiz.bQ.a[0];
    $thiz.bk = $thiz.bl.a[0];
  } else {
    $thiz.eK = $thiz.jS.a[((io >>> 25) | 0)];
    $thiz.cI = $thiz.eK.a[0];
    $thiz.bQ = $thiz.cI.a[0];
    $thiz.bl = $thiz.bQ.a[0];
    $thiz.bk = $thiz.bl.a[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.bk = $thiz.bl.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.bl = $thiz.bQ.a[(31 & ((io >>> 10) | 0))];
    $thiz.bk = $thiz.bl.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.bQ = $thiz.cI.a[(31 & ((io >>> 15) | 0))];
    $thiz.bl = $thiz.bQ.a[(31 & ((io >>> 10) | 0))];
    $thiz.bk = $thiz.bl.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.cI = $thiz.eK.a[(31 & ((io >>> 20) | 0))];
    $thiz.bQ = $thiz.cI.a[(31 & ((io >>> 15) | 0))];
    $thiz.bl = $thiz.bQ.a[(31 & ((io >>> 10) | 0))];
    $thiz.bk = $thiz.bl.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.eK = $thiz.jS.a[((io >>> 25) | 0)];
    $thiz.cI = $thiz.eK.a[(31 & ((io >>> 20) | 0))];
    $thiz.bQ = $thiz.cI.a[(31 & ((io >>> 15) | 0))];
    $thiz.bl = $thiz.bQ.a[(31 & ((io >>> 10) | 0))];
    $thiz.bk = $thiz.bl.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.jT = null;
  this.dD = 0;
  this.oc = 0;
  this.bk = null;
  this.bl = null;
  this.bQ = null;
  this.cI = null;
  this.eK = null;
  this.jS = null;
  this.dC = 0;
  this.aY = 0;
  this.fA = 0;
  this.c3 = 0;
  this.e4 = 0;
  this.e3 = 0;
  this.gG = 0;
  this.eL = 0;
  this.jT = v;
  this.dD = totalLength;
  this.oc = sliceCount;
  this.bk = v.d;
  this.dC = this.bk.a.length;
  this.aY = 0;
  this.fA = 0;
  this.c3 = this.dD;
  this.e4 = 0;
  this.e3 = 1;
  this.gG = 0;
  this.eL = this.dC;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.s = (function() {
  return ((this.c3 - this.aY) | 0);
});
$p.l = (function() {
  return (this.c3 > this.aY);
});
$p.e = (function() {
  if ((this.aY === this.dC)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.bk.a[this.aY];
  this.aY = ((1 + this.aY) | 0);
  return r;
});
$p.cO = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.aY - this.c3) | 0) + this.dD) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.dD;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.dD)) {
      this.aY = 0;
      this.c3 = 0;
      this.dC = 0;
    } else {
      while ((newpos >= this.eL)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.gG) | 0);
      if ((this.e3 > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.fA ^ io));
        this.fA = io;
      }
      this.dC = this.bk.a.length;
      this.aY = (31 & io);
      this.c3 = ((this.aY + ((this.dD - newpos) | 0)) | 0);
      if ((this.dC > this.c3)) {
        this.dC = this.c3;
      }
    }
  }
  return this;
});
$p.bR = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().bS(xs);
  var srcLen = ((this.c3 - this.aY) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.aY === this.dC)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total - copied) | 0);
    var b = ((this.bk.a.length - this.aY) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.bk;
      var srcPos = this.aY;
      var destPos = ((start + copied) | 0);
      src.p(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().c6(this.bk, this.aY, xs, ((start + copied) | 0), count);
    }
    this.aY = ((this.aY + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  hr: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  C: 1
}));
/** @constructor */
function $c_sci_RangeIterator(start, step, lastElement, initiallyEmpty) {
  this.fB = 0;
  this.eN = 0;
  this.e5 = false;
  this.eM = 0;
  this.fB = step;
  this.eN = lastElement;
  this.e5 = (!initiallyEmpty);
  this.eM = start;
}
$p = $c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $p;
$p.s = (function() {
  return (this.e5 ? ((1 + $intDiv(((this.eN - this.eM) | 0), this.fB)) | 0) : 0);
});
$p.l = (function() {
  return this.e5;
});
$p.pQ = (function() {
  if ((!this.e5)) {
    $m_sc_Iterator$().E.e();
  }
  var value = this.eM;
  this.e5 = (value !== this.eN);
  this.eM = ((value + this.fB) | 0);
  return value;
});
$p.cO = (function(n) {
  if ((n > 0)) {
    var value = this.eM;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.fB, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((-2147483648) ^ lo) < ((-2147483648) ^ value)) ? ((1 + ((hi + hi$1) | 0)) | 0) : ((hi + hi$1) | 0));
    if ((this.fB > 0)) {
      var value$2 = this.eN;
      var hi$3 = (value$2 >> 31);
      if (((hi$3 === hi$2) ? (((-2147483648) ^ value$2) < ((-2147483648) ^ lo)) : (hi$3 < hi$2))) {
        var this$6__lo = value$2;
        var this$6__hi = hi$3;
      } else {
        var this$6__lo = lo;
        var this$6__hi = hi$2;
      }
      this.eM = this$6__lo;
      var value$3 = this.eN;
      var hi$4 = (value$3 >> 31);
      this.e5 = ((hi$2 === hi$4) ? (((-2147483648) ^ lo) <= ((-2147483648) ^ value$3)) : (hi$2 < hi$4));
    } else if ((this.fB < 0)) {
      var value$4 = this.eN;
      var hi$5 = (value$4 >> 31);
      if (((hi$5 === hi$2) ? (((-2147483648) ^ value$4) > ((-2147483648) ^ lo)) : (hi$5 > hi$2))) {
        var this$10__lo = value$4;
        var this$10__hi = hi$5;
      } else {
        var this$10__lo = lo;
        var this$10__hi = hi$2;
      }
      this.eM = this$10__lo;
      var value$5 = this.eN;
      var hi$6 = (value$5 >> 31);
      this.e5 = ((hi$2 === hi$6) ? (((-2147483648) ^ lo) >= ((-2147483648) ^ value$5)) : (hi$2 > hi$6));
    }
  }
  return this;
});
$p.e = (function() {
  return this.pQ();
});
var $d_sci_RangeIterator = new $TypeData().i($c_sci_RangeIterator, "scala.collection.immutable.RangeIterator", ({
  hu: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $ct_sci_Set$SetNIterator__I__($thiz, n) {
  $thiz.dE = 0;
  $thiz.d6 = n;
  return $thiz;
}
/** @constructor */
function $c_sci_Set$SetNIterator() {
  this.dE = 0;
  this.d6 = 0;
}
$p = $c_sci_Set$SetNIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Set$SetNIterator;
/** @constructor */
function $h_sci_Set$SetNIterator() {
}
$h_sci_Set$SetNIterator.prototype = $p;
$p.s = (function() {
  return this.d6;
});
$p.l = (function() {
  return (this.d6 > 0);
});
$p.e = (function() {
  if (this.l()) {
    var r = this.u(this.dE);
    this.dE = ((1 + this.dE) | 0);
    this.d6 = (((-1) + this.d6) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().E.e();
  }
});
$p.cO = (function(n) {
  if ((n > 0)) {
    this.dE = ((this.dE + n) | 0);
    var b = ((this.d6 - n) | 0);
    this.d6 = ((b < 0) ? 0 : b);
  }
  return this;
});
/** @constructor */
function $c_sci_SetHashIterator(rootNode) {
  this.a9 = 0;
  this.du = 0;
  this.bF = null;
  this.bv = 0;
  this.ch = null;
  this.dv = null;
  this.jU = 0;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
  this.jU = 0;
}
$p = $c_sci_SetHashIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_SetHashIterator;
/** @constructor */
function $h_sci_SetHashIterator() {
}
$h_sci_SetHashIterator.prototype = $p;
$p.v = (function() {
  return this.jU;
});
$p.e = (function() {
  if ((!this.l())) {
    $m_sc_Iterator$().E.e();
  }
  this.jU = this.bF.cr(this.a9);
  this.a9 = ((1 + this.a9) | 0);
  return this;
});
var $d_sci_SetHashIterator = new $TypeData().i($c_sci_SetHashIterator, "scala.collection.immutable.SetHashIterator", ({
  hF: 1,
  at: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_SetIterator(rootNode) {
  this.a9 = 0;
  this.du = 0;
  this.bF = null;
  this.bv = 0;
  this.ch = null;
  this.dv = null;
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
  var payload = this.bF.cS(this.a9);
  this.a9 = ((1 + this.a9) | 0);
  return payload;
});
var $d_sci_SetIterator = new $TypeData().i($c_sci_SetIterator, "scala.collection.immutable.SetIterator", ({
  hG: 1,
  at: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.jZ = 0;
  $thiz.ok = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.jZ = 0;
  this.ok = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.bh = (function(size) {
  if ((this.jZ < size)) {
    this.ty(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.k2 = null;
  this.k1 = null;
  $n_scm_ArraySeq$ = this;
  this.k2 = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.k1 = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.sg = (function(it, evidence$2) {
  return this.kL($m_s_Array$().pr(it, evidence$2));
});
$p.ip = (function(evidence$3) {
  return new $c_scm_Builder$$anon$1(new $c_scm_ArrayBuilder$generic(evidence$3.b6()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => $m_scm_ArraySeq$().kL(x$2$2))));
});
$p.kL = (function(x) {
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
$p.kt = (function(it, evidence$5) {
  return this.sg(it, evidence$5);
});
$p.pf = (function(evidence$6) {
  return this.k1;
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  hX: 1,
  c2: 1,
  bU: 1,
  bT: 1,
  bV: 1,
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
  this.ei = 0;
  this.dG = null;
  this.gO = 0;
  this.gN = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$1.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$1;
/** @constructor */
function $h_scm_HashSet$$anon$1() {
}
$h_scm_HashSet$$anon$1.prototype = $p;
$p.kq = (function(nd) {
  return nd.fG;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  i5: 1,
  ba: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$2(outer) {
  this.ei = 0;
  this.dG = null;
  this.gO = 0;
  this.gN = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$2.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$2;
/** @constructor */
function $h_scm_HashSet$$anon$2() {
}
$h_scm_HashSet$$anon$2.prototype = $p;
$p.kq = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  i6: 1,
  ba: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$3(outer) {
  this.ei = 0;
  this.dG = null;
  this.gO = 0;
  this.gN = null;
  this.k5 = 0;
  this.op = null;
  this.op = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.k5 = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.v = (function() {
  return this.k5;
});
$p.kq = (function(nd) {
  this.k5 = this.op.iy(nd.dH);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  i7: 1,
  ba: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.gQ = null;
  this.gQ = runtimeClass;
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
  return $m_sr_Statics$().L(this.gQ);
});
$p.w = (function() {
  return $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this.gQ);
});
$p.b6 = (function() {
  return this.gQ;
});
$p.bT = (function(len) {
  return this.gQ.C.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  io: 1,
  J: 1,
  R: 1,
  S: 1,
  a: 1,
  d: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2(key$2) {
  this.fh = null;
  this.fi = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$2, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2, "com.raquo.laminar.defs.styles.StyleProps$$anon$2", ({
  e9: 1,
  aS: 1,
  ad: 1,
  aQ: 1,
  aR: 1,
  ed: 1,
  ef: 1
}));
class $c_ju_DuplicateFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.nt = null;
    this.nt = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bO() {
    return (("Flags = '" + this.nt) + "'");
  }
}
var $d_ju_DuplicateFormatFlagsException = new $TypeData().i($c_ju_DuplicateFormatFlagsException, "java.util.DuplicateFormatFlagsException", ({
  fB: 1,
  Z: 1,
  T: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_FormatFlagsConversionMismatchException extends $c_ju_IllegalFormatException {
  constructor(f, c) {
    super();
    this.nv = null;
    this.nu = 0;
    this.nv = f;
    this.nu = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bO() {
    return ((("Conversion = " + $cToS(this.nu)) + ", Flags = ") + this.nv);
  }
}
var $d_ju_FormatFlagsConversionMismatchException = new $TypeData().i($c_ju_FormatFlagsConversionMismatchException, "java.util.FormatFlagsConversionMismatchException", ({
  fC: 1,
  Z: 1,
  T: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatArgumentIndexException extends $c_ju_IllegalFormatException {
  constructor(msg) {
    super();
    this.nz = null;
    this.nz = msg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bO() {
    return this.nz;
  }
}
var $d_ju_IllegalFormatArgumentIndexException = new $TypeData().i($c_ju_IllegalFormatArgumentIndexException, "java.util.IllegalFormatArgumentIndexException", ({
  fJ: 1,
  Z: 1,
  T: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatCodePointException extends $c_ju_IllegalFormatException {
  constructor(c) {
    super();
    this.nA = 0;
    this.nA = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bO() {
    var i = this.nA;
    return ("Code point = 0x" + (+(i >>> 0.0)).toString(16));
  }
}
var $d_ju_IllegalFormatCodePointException = new $TypeData().i($c_ju_IllegalFormatCodePointException, "java.util.IllegalFormatCodePointException", ({
  fK: 1,
  Z: 1,
  T: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(c, arg) {
    super();
    this.nC = 0;
    this.nB = null;
    this.nC = c;
    this.nB = arg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((arg === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bO() {
    return ((("" + $cToS(this.nC)) + " != ") + this.nB.C.N);
  }
}
var $d_ju_IllegalFormatConversionException = new $TypeData().i($c_ju_IllegalFormatConversionException, "java.util.IllegalFormatConversionException", ({
  fL: 1,
  Z: 1,
  T: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.nD = null;
    this.nD = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bO() {
    return (("Flags = '" + this.nD) + "'");
  }
}
var $d_ju_IllegalFormatFlagsException = new $TypeData().i($c_ju_IllegalFormatFlagsException, "java.util.IllegalFormatFlagsException", ({
  fM: 1,
  Z: 1,
  T: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatPrecisionException extends $c_ju_IllegalFormatException {
  constructor(p) {
    super();
    this.nE = 0;
    this.nE = p;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bO() {
    return ("" + this.nE);
  }
}
var $d_ju_IllegalFormatPrecisionException = new $TypeData().i($c_ju_IllegalFormatPrecisionException, "java.util.IllegalFormatPrecisionException", ({
  fN: 1,
  Z: 1,
  T: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(w) {
    super();
    this.nF = 0;
    this.nF = w;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bO() {
    return ("" + this.nF);
  }
}
var $d_ju_IllegalFormatWidthException = new $TypeData().i($c_ju_IllegalFormatWidthException, "java.util.IllegalFormatWidthException", ({
  fO: 1,
  Z: 1,
  T: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_MissingFormatArgumentException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.nG = null;
    this.nG = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bO() {
    return (("Format specifier '" + this.nG) + "'");
  }
}
var $d_ju_MissingFormatArgumentException = new $TypeData().i($c_ju_MissingFormatArgumentException, "java.util.MissingFormatArgumentException", ({
  fP: 1,
  Z: 1,
  T: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_MissingFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.nH = null;
    this.nH = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bO() {
    return this.nH;
  }
}
var $d_ju_MissingFormatWidthException = new $TypeData().i($c_ju_MissingFormatWidthException, "java.util.MissingFormatWidthException", ({
  fQ: 1,
  Z: 1,
  T: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_UnknownFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.nI = null;
    this.nI = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  bO() {
    return (("Conversion = '" + this.nI) + "'");
  }
}
var $d_ju_UnknownFormatConversionException = new $TypeData().i($c_ju_UnknownFormatConversionException, "java.util.UnknownFormatConversionException", ({
  fS: 1,
  Z: 1,
  T: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.cd = null;
  this.A = 0;
  this.bV = 0;
  this.jw = null;
  this.jw = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $p;
$p.t5 = (function() {
  if ((this.A >= this.jw.a.length)) {
    $m_sc_Iterator$().E.e();
  }
  var r = this.jw.a[this.A];
  this.A = ((1 + this.A) | 0);
  return r;
});
$p.e = (function() {
  return this.t5();
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcB$sp, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", ({
  ge: 1,
  a5: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
  this.cd = null;
  this.A = 0;
  this.bV = 0;
  this.jx = null;
  this.jx = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $p;
$p.t6 = (function() {
  if ((this.A >= this.jx.a.length)) {
    $m_sc_Iterator$().E.e();
  }
  var r = this.jx.a[this.A];
  this.A = ((1 + this.A) | 0);
  return r;
});
$p.e = (function() {
  return $bC(this.t6());
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcC$sp, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", ({
  gf: 1,
  a5: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
  this.cd = null;
  this.A = 0;
  this.bV = 0;
  this.jy = null;
  this.jy = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $p;
$p.t7 = (function() {
  if ((this.A >= this.jy.a.length)) {
    $m_sc_Iterator$().E.e();
  }
  var r = this.jy.a[this.A];
  this.A = ((1 + this.A) | 0);
  return r;
});
$p.e = (function() {
  return this.t7();
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcD$sp, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", ({
  gg: 1,
  a5: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
  this.cd = null;
  this.A = 0;
  this.bV = 0;
  this.jz = null;
  this.jz = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $p;
$p.t8 = (function() {
  if ((this.A >= this.jz.a.length)) {
    $m_sc_Iterator$().E.e();
  }
  var r = this.jz.a[this.A];
  this.A = ((1 + this.A) | 0);
  return r;
});
$p.e = (function() {
  return this.t8();
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcF$sp, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", ({
  gh: 1,
  a5: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
  this.cd = null;
  this.A = 0;
  this.bV = 0;
  this.jA = null;
  this.jA = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $p;
$p.t9 = (function() {
  if ((this.A >= this.jA.a.length)) {
    $m_sc_Iterator$().E.e();
  }
  var r = this.jA.a[this.A];
  this.A = ((1 + this.A) | 0);
  return r;
});
$p.e = (function() {
  return this.t9();
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcI$sp, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", ({
  gi: 1,
  a5: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
  this.cd = null;
  this.A = 0;
  this.bV = 0;
  this.jB = null;
  this.jB = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $p;
$p.ta = (function() {
  if ((this.A >= this.jB.a.length)) {
    $m_sc_Iterator$().E.e();
  }
  var t = this.jB.a[this.A];
  var lo = t.o;
  var hi = t.r;
  this.A = ((1 + this.A) | 0);
  return new $c_RTLong(lo, hi);
});
$p.e = (function() {
  return this.ta();
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcJ$sp, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", ({
  gj: 1,
  a5: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
  this.cd = null;
  this.A = 0;
  this.bV = 0;
  this.jC = null;
  this.jC = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $p;
$p.tb = (function() {
  if ((this.A >= this.jC.a.length)) {
    $m_sc_Iterator$().E.e();
  }
  var r = this.jC.a[this.A];
  this.A = ((1 + this.A) | 0);
  return r;
});
$p.e = (function() {
  return this.tb();
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcS$sp, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", ({
  gk: 1,
  a5: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
  this.cd = null;
  this.A = 0;
  this.bV = 0;
  this.nP = null;
  this.nP = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $p;
$p.tc = (function() {
  if ((this.A >= this.nP.a.length)) {
    $m_sc_Iterator$().E.e();
  }
  this.A = ((1 + this.A) | 0);
});
$p.e = (function() {
  this.tc();
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcV$sp, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", ({
  gl: 1,
  a5: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
  this.cd = null;
  this.A = 0;
  this.bV = 0;
  this.jD = null;
  this.jD = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $p;
$p.td = (function() {
  if ((this.A >= this.jD.a.length)) {
    $m_sc_Iterator$().E.e();
  }
  var r = this.jD.a[this.A];
  this.A = ((1 + this.A) | 0);
  return r;
});
$p.e = (function() {
  return this.td();
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcZ$sp, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", ({
  gm: 1,
  a5: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterable$$anon$1(a$1) {
  this.nR = null;
  this.nR = a$1;
}
$p = $c_sc_Iterable$$anon$1.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_Iterable$$anon$1;
/** @constructor */
function $h_sc_Iterable$$anon$1() {
}
$h_sc_Iterable$$anon$1.prototype = $p;
$p.g = (function() {
  return new $c_sc_Iterator$$anon$20(this.nR);
});
$p.s = (function() {
  return 1;
});
var $d_sc_Iterable$$anon$1 = new $TypeData().i($c_sc_Iterable$$anon$1, "scala.collection.Iterable$$anon$1", ({
  gu: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.c5() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.K)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.K)));
}
/** @constructor */
function $c_sci_Set$Set2$$anon$1(outer) {
  this.dE = 0;
  this.d6 = 0;
  this.od = null;
  this.od = outer;
  $ct_sci_Set$SetNIterator__I__(this, 2);
}
$p = $c_sci_Set$Set2$$anon$1.prototype = new $h_sci_Set$SetNIterator();
$p.constructor = $c_sci_Set$Set2$$anon$1;
/** @constructor */
function $h_sci_Set$Set2$$anon$1() {
}
$h_sci_Set$Set2$$anon$1.prototype = $p;
$p.u = (function(i) {
  return this.od.tC(i);
});
var $d_sci_Set$Set2$$anon$1 = new $TypeData().i($c_sci_Set$Set2$$anon$1, "scala.collection.immutable.Set$Set2$$anon$1", ({
  hB: 1,
  b6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set3$$anon$2(outer) {
  this.dE = 0;
  this.d6 = 0;
  this.oe = null;
  this.oe = outer;
  $ct_sci_Set$SetNIterator__I__(this, 3);
}
$p = $c_sci_Set$Set3$$anon$2.prototype = new $h_sci_Set$SetNIterator();
$p.constructor = $c_sci_Set$Set3$$anon$2;
/** @constructor */
function $h_sci_Set$Set3$$anon$2() {
}
$h_sci_Set$Set3$$anon$2.prototype = $p;
$p.u = (function(i) {
  return this.oe.tD(i);
});
var $d_sci_Set$Set3$$anon$2 = new $TypeData().i($c_sci_Set$Set3$$anon$2, "scala.collection.immutable.Set$Set3$$anon$2", ({
  hC: 1,
  b6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set4$$anon$3(outer) {
  this.dE = 0;
  this.d6 = 0;
  this.of = null;
  this.of = outer;
  $ct_sci_Set$SetNIterator__I__(this, 4);
}
$p = $c_sci_Set$Set4$$anon$3.prototype = new $h_sci_Set$SetNIterator();
$p.constructor = $c_sci_Set$Set4$$anon$3;
/** @constructor */
function $h_sci_Set$Set4$$anon$3() {
}
$h_sci_Set$Set4$$anon$3.prototype = $p;
$p.u = (function(i) {
  return this.of.tE(i);
});
var $d_sci_Set$Set4$$anon$3 = new $TypeData().i($c_sci_Set$Set4$$anon$3, "scala.collection.immutable.Set$Set4$$anon$3", ({
  hD: 1,
  b6: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.jZ = 0;
  this.ok = 0;
  this.fF = null;
  this.ol = false;
  this.k0 = null;
  this.fF = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.ol = (elementClass === $d_C.l());
  this.k0 = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.oI = (function(elem) {
  var unboxedElem = (this.ol ? $uC(elem) : ((elem === null) ? this.fF.C.z : elem));
  this.k0.push(unboxedElem);
  return this;
});
$p.qT = (function(xs) {
  var it = xs.g();
  while (it.l()) {
    this.oI(it.e());
  }
  return this;
});
$p.ty = (function(size) {
});
$p.aW = (function() {
  var elemRuntimeClass = ((this.fF === $d_V.l()) ? $d_jl_Void.l() : (((this.fF === $d_sr_Null$.l()) || (this.fF === $d_sr_Nothing$.l())) ? $d_O.l() : this.fF));
  return elemRuntimeClass.C.r().w(this.k0);
});
$p.w = (function() {
  return "ArrayBuilder.generic";
});
$p.b4 = (function(elems) {
  return this.qT(elems);
});
$p.au = (function(elem) {
  return this.oI(elem);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  hW: 1,
  hV: 1,
  a7: 1,
  I: 1,
  H: 1,
  G: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.jE = null;
  this.dk = 0;
  this.ce = 0;
  this.oo = null;
  this.on = 0;
  this.oo = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.on = (mutationCount.S() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.l = (function() {
  $m_scm_MutationTracker$().p4(this.on, (this.oo.S() | 0), "mutation occurred during iteration");
  return (this.ce > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  i2: 1,
  bX: 1,
  k: 1,
  l: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.at = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.w = (function() {
  return this.at;
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
    this.aG = null;
    this.aG = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bO() {
    return $dp_toString__T(this.aG);
  }
  bg() {
    return "JavaScriptException";
  }
  be() {
    return 1;
  }
  bf(x$1) {
    return ((x$1 === 0) ? this.aG : $m_sr_Statics$().es(x$1));
  }
  by() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().dd(this, (-889275714), false);
  }
  n(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().k(this.aG, x$1.aG)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cZ)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  cZ: 1,
  w: 1,
  v: 1,
  o: 1,
  a: 1,
  D: 1,
  d: 1
}));
function $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, newValue) {
  if ((!($thiz.kN() === (void 0)))) {
    $thiz.ka($m_Lcom_raquo_airstream_core_Signal$().pS());
  }
  $thiz.pP(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.kN();
  if ((x === (void 0))) {
    $thiz.ka($m_Lcom_raquo_airstream_core_Signal$().pS());
    var nextValue = $thiz.kl();
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
  var isError = nextValue.pG();
  var elem = false;
  elem = false;
  $thiz.dc(false);
  var this$ = $thiz.dN();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.fZ(nextValue);
    if ((isError && (!elem))) {
      var ev$5 = true;
      elem = ev$5;
    }
  }
  var this$$1 = $thiz.dP();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.iu(nextValue, transaction);
    if ((isError && (!elem))) {
      var ev$6 = true;
      elem = ev$6;
    }
  }
  $thiz.dc(true);
  var x = $thiz.f4();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].S();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
  if ((isError && (!elem))) {
    nextValue.cP(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cC(err);
    })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))));
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.dc(false);
  var this$ = $thiz.dN();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    try {
      observer.fY(nextValue);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      $m_Lcom_raquo_airstream_core_AirstreamError$().cC(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.dP();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.kS(nextValue, transaction);
  }
  $thiz.dc(true);
  var x = $thiz.f4();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].S();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.dc(false);
  var this$ = $thiz.dN();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.he(nextError);
  }
  var this$$1 = $thiz.dP();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.pW(nextError, transaction);
  }
  $thiz.dc(true);
  var x = $thiz.f4();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].S();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33(key$33) {
  this.fh = null;
  this.fi = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$33, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33, "com.raquo.laminar.defs.styles.StyleProps$$anon$33", ({
  ea: 1,
  aS: 1,
  ad: 1,
  aQ: 1,
  aR: 1,
  bu: 1,
  bv: 1,
  ee: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4(key$4) {
  this.fh = null;
  this.fi = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$4, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4, "com.raquo.laminar.defs.styles.StyleProps$$anon$4", ({
  eb: 1,
  aS: 1,
  ad: 1,
  aQ: 1,
  aR: 1,
  ec: 1,
  bu: 1,
  bv: 1
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
  if (($thiz.bd(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.hb();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.g();
    var different = false;
    while (it.l()) {
      var next = it.e();
      if (seen.i7(f.b(next))) {
        builder.au(next);
      } else {
        different = true;
      }
    }
    return (different ? builder.aW() : $thiz);
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.at = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.b6 = (function() {
  return $d_Z.l();
});
$p.bT = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.at = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.b6 = (function() {
  return $d_B.l();
});
$p.bT = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.at = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.b6 = (function() {
  return $d_C.l();
});
$p.bT = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.at = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.b6 = (function() {
  return $d_D.l();
});
$p.bT = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.at = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.b6 = (function() {
  return $d_F.l();
});
$p.bT = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.at = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.b6 = (function() {
  return $d_I.l();
});
$p.bT = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.at = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.b6 = (function() {
  return $d_J.l();
});
$p.bT = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.dJ = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.w = (function() {
  return this.dJ;
});
$p.n = (function(that) {
  return (this === that);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.at = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.b6 = (function() {
  return $d_S.l();
});
$p.bT = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.at = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.b6 = (function() {
  return $d_V.l();
});
$p.bT = (function(len) {
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
$p.bc = (function() {
  return $m_sc_View$();
});
$p.w = (function() {
  return $f_sc_View__toString__T(this);
});
$p.bt = (function() {
  return "View";
});
function $f_sc_Set__equals__O__Z($thiz, that) {
  if (($thiz === that)) {
    return true;
  } else if ($is_sc_Set(that)) {
    if (($thiz.I() === that.I())) {
      try {
        return $thiz.l0(that);
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.a1)));
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a1)));
}
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.dJ = null;
  this.dJ = "Any";
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.b6 = (function() {
  return $d_O.l();
});
$p.bT = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  iq: 1,
  aM: 1,
  aL: 1,
  X: 1,
  J: 1,
  R: 1,
  S: 1,
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
  this.at = null;
  this.at = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  is: 1,
  ir: 1,
  ab: 1,
  X: 1,
  J: 1,
  R: 1,
  S: 1,
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
  this.at = null;
  this.at = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  iu: 1,
  it: 1,
  ab: 1,
  X: 1,
  J: 1,
  R: 1,
  S: 1,
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
  this.at = null;
  this.at = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  iw: 1,
  iv: 1,
  ab: 1,
  X: 1,
  J: 1,
  R: 1,
  S: 1,
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
  this.at = null;
  this.at = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  iy: 1,
  ix: 1,
  ab: 1,
  X: 1,
  J: 1,
  R: 1,
  S: 1,
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
  this.at = null;
  this.at = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  iA: 1,
  iz: 1,
  ab: 1,
  X: 1,
  J: 1,
  R: 1,
  S: 1,
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
  this.at = null;
  this.at = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  iC: 1,
  iB: 1,
  ab: 1,
  X: 1,
  J: 1,
  R: 1,
  S: 1,
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
  this.at = null;
  this.at = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  iE: 1,
  iD: 1,
  ab: 1,
  X: 1,
  J: 1,
  R: 1,
  S: 1,
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
  this.dJ = null;
  this.dJ = "Nothing";
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.b6 = (function() {
  return $d_sr_Nothing$.l();
});
$p.bT = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  iF: 1,
  aM: 1,
  aL: 1,
  X: 1,
  J: 1,
  R: 1,
  S: 1,
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
  this.dJ = null;
  this.dJ = "Null";
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.b6 = (function() {
  return $d_sr_Null$.l();
});
$p.bT = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  iG: 1,
  aM: 1,
  aL: 1,
  X: 1,
  J: 1,
  R: 1,
  S: 1,
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
  this.dJ = null;
  this.dJ = "Object";
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.b6 = (function() {
  return $d_O.l();
});
$p.bT = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  iH: 1,
  aM: 1,
  aL: 1,
  X: 1,
  J: 1,
  R: 1,
  S: 1,
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
  this.at = null;
  this.at = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  iJ: 1,
  iI: 1,
  ab: 1,
  X: 1,
  J: 1,
  R: 1,
  S: 1,
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
  this.at = null;
  this.at = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  iL: 1,
  iK: 1,
  ab: 1,
  X: 1,
  J: 1,
  R: 1,
  S: 1,
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
  this.iG = null;
  this.iG = \u03b4name$2;
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
$p.be = (function() {
  return 0;
});
$p.bf = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.bg = (function() {
  return this.iG;
});
$p.w = (function() {
  return this.iG;
});
var $d_Ladversaries_Stage$$anon$1 = new $TypeData().i($c_Ladversaries_Stage$$anon$1, "adversaries.Stage$$anon$1", ({
  db: 1,
  d9: 1,
  d: 1,
  D: 1,
  a: 1,
  ip: 1,
  iT: 1,
  aK: 1,
  cV: 1,
  ik: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.hw, $thiz, false);
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.hw, $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomStreamSource(makeConfig) {
  this.lu = null;
  this.lt = false;
  this.lv = null;
  this.lr = null;
  this.ls = null;
  this.lx = false;
  this.lw = 0;
  this.hv = 0;
  this.hu = null;
  this.lu = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V(this);
  this.hu = makeConfig.re(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, value, _$1);
    })));
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => ((_$2) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, err$2, _$2);
    }))(err)));
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.hv)), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this))));
}
$p = $c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomStreamSource;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomStreamSource() {
}
$h_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = $p;
$p.f3 = (function() {
  return this.lu;
});
$p.eZ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.w = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.h8 = (function() {
  return this.lt;
});
$p.f4 = (function() {
  return this.lv;
});
$p.dc = (function(x$1) {
  this.lt = x$1;
});
$p.ha = (function(x$1) {
  this.lv = x$1;
});
$p.n = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.iq = (function(observer) {
});
$p.dN = (function() {
  return this.lr;
});
$p.dP = (function() {
  return this.ls;
});
$p.iB = (function() {
  return this.lx;
});
$p.g6 = (function(x$1) {
  this.lx = x$1;
});
$p.ic = (function(x$0) {
  this.lr = x$0;
});
$p.id = (function(x$0) {
  this.ls = x$0;
});
$p.hj = (function() {
  return this.lw;
});
$p.iv = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V(this);
});
$p.is = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V(this);
});
$p.it = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V(this);
});
$p.g3 = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_custom_CustomStreamSource = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomStreamSource, "com.raquo.airstream.custom.CustomStreamSource", ({
  dv: 1,
  ax: 1,
  ac: 1,
  aC: 1,
  aD: 1,
  bm: 1,
  bk: 1,
  aF: 1,
  bo: 1,
  dr: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_VarSignal(initial, parentDisplayName) {
  this.m1 = null;
  this.m0 = false;
  this.m2 = null;
  this.iV = 0;
  this.lY = null;
  this.lZ = null;
  this.m5 = false;
  this.iW = null;
  this.m3 = null;
  this.m4 = 0;
  this.m3 = parentDisplayName;
  this.m1 = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.iV = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.iW = (void 0);
  this.m4 = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V(this, initial);
}
$p = $c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $p;
$p.f3 = (function() {
  return this.m1;
});
$p.w = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.h8 = (function() {
  return this.m0;
});
$p.f4 = (function() {
  return this.m2;
});
$p.dc = (function(x$1) {
  this.m0 = x$1;
});
$p.ha = (function(x$1) {
  this.m2 = x$1;
});
$p.it = (function() {
});
$p.n = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.k9 = (function() {
  return this.iV;
});
$p.ka = (function(x$1) {
  this.iV = x$1;
});
$p.is = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.iq = (function(observer) {
  observer.fZ($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.dN = (function() {
  return this.lY;
});
$p.dP = (function() {
  return this.lZ;
});
$p.iB = (function() {
  return this.m5;
});
$p.g6 = (function(x$1) {
  this.m5 = x$1;
});
$p.ic = (function(x$0) {
  this.lY = x$0;
});
$p.id = (function(x$0) {
  this.lZ = x$0;
});
$p.kN = (function() {
  return this.iW;
});
$p.pP = (function(x$1) {
  this.iW = x$1;
});
$p.l3 = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.hj = (function() {
  return this.m4;
});
$p.kl = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.iv = (function() {
});
$p.eZ = (function() {
  return (this.m3.S() + ".signal");
});
$p.g3 = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().i($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  dK: 1,
  ax: 1,
  ac: 1,
  aC: 1,
  aD: 1,
  aP: 1,
  bl: 1,
  aF: 1,
  bn: 1,
  dF: 1
}));
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.ia($thiz)) {
        return $thiz.g0(o);
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
  this.o2 = null;
  this.o2 = it$1;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.g = (function() {
  return this.o2.S();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  gN: 1,
  U: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  K: 1,
  a: 1
}));
function $ct_sc_View$Appended__sc_IterableOps__O__($thiz, underlying, elem) {
  $thiz.ft = underlying;
  $thiz.gB = elem;
  return $thiz;
}
/** @constructor */
function $c_sc_View$Appended() {
  this.ft = null;
  this.gB = null;
}
$p = $c_sc_View$Appended.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Appended;
/** @constructor */
function $h_sc_View$Appended() {
}
$h_sc_View$Appended.prototype = $p;
$p.g = (function() {
  return new $c_sc_View$Concat(this.ft, new $c_sc_View$Single(this.gB)).g();
});
$p.s = (function() {
  var size = this.ft.s();
  return ((size >= 0) ? ((1 + size) | 0) : (-1));
});
$p.c = (function() {
  return false;
});
var $d_sc_View$Appended = new $TypeData().i($c_sc_View$Appended, "scala.collection.View$Appended", ({
  aI: 1,
  U: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_sc_View$Concat(prefix, suffix) {
  this.hP = null;
  this.hQ = null;
  this.hP = prefix;
  this.hQ = suffix;
}
$p = $c_sc_View$Concat.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Concat;
/** @constructor */
function $h_sc_View$Concat() {
}
$h_sc_View$Concat.prototype = $p;
$p.g = (function() {
  return this.hP.g().h2(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.hQ.g())));
});
$p.s = (function() {
  var prefixSize = this.hP.s();
  if ((prefixSize >= 0)) {
    var suffixSize = this.hQ.s();
    return ((suffixSize >= 0) ? ((prefixSize + suffixSize) | 0) : (-1));
  } else {
    return (-1);
  }
});
$p.c = (function() {
  return (this.hP.c() && this.hQ.c());
});
var $d_sc_View$Concat = new $TypeData().i($c_sc_View$Concat, "scala.collection.View$Concat", ({
  gO: 1,
  U: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_sc_View$DistinctBy(underlying, f) {
  this.hR = null;
  this.o3 = null;
  this.hR = underlying;
  this.o3 = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.g = (function() {
  return new $c_sc_Iterator$$anon$8(this.hR.g(), this.o3);
});
$p.s = (function() {
  return ((this.hR.s() === 0) ? 0 : (-1));
});
$p.c = (function() {
  return this.hR.c();
});
var $d_sc_View$DistinctBy = new $TypeData().i($c_sc_View$DistinctBy, "scala.collection.View$DistinctBy", ({
  gP: 1,
  U: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  K: 1,
  a: 1
}));
/** @constructor */
function $c_sc_View$Single(a) {
  this.o4 = null;
  this.o4 = a;
}
$p = $c_sc_View$Single.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Single;
/** @constructor */
function $h_sc_View$Single() {
}
$h_sc_View$Single.prototype = $p;
$p.g = (function() {
  return new $c_sc_Iterator$$anon$20(this.o4);
});
$p.s = (function() {
  return 1;
});
$p.c = (function() {
  return false;
});
var $d_sc_View$Single = new $TypeData().i($c_sc_View$Single, "scala.collection.View$Single", ({
  gR: 1,
  U: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  K: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V($thiz) {
  $thiz.iO = ($thiz.dT !== null);
  $thiz.hx = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.dT);
  if ($thiz.iO) {
    var newParentLastUpdateId = $thiz.dT.k9();
    if ((newParentLastUpdateId !== $thiz.hx)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.kl(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.hx = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.iO) {
    $thiz.hx = $thiz.dT.k9();
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.dT, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.dT, $thiz);
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
  return this$1.hk(this, this$1.i1);
});
$p.bt = (function() {
  return "Set";
});
$p.w = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.l0 = (function(that) {
  return this.d8(that);
});
$p.b = (function(v1) {
  return this.aB(v1);
});
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else if ($is_sc_Map(o)) {
    if (($thiz.I() === o.I())) {
      try {
        return $thiz.d8(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x2) => ((kv$2$2) => $m_sr_BoxesRunTime$().k(x2.dO(kv$2$2.bB(), $m_sc_Map$().nZ), kv$2$2.bw())))(o)));
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.ae)));
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
/** @constructor */
function $c_Lcom_raquo_airstream_misc_CollectStream(parent, fn) {
  this.lC = null;
  this.lB = false;
  this.lD = null;
  this.ly = null;
  this.lA = null;
  this.lF = false;
  this.hw = null;
  this.lz = null;
  this.lE = 0;
  this.hw = parent;
  this.lz = fn;
  this.lC = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.lE = ((1 + parent.hj()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.f3 = (function() {
  return this.lC;
});
$p.eZ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.w = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.h8 = (function() {
  return this.lB;
});
$p.f4 = (function() {
  return this.lD;
});
$p.dc = (function(x$1) {
  this.lB = x$1;
});
$p.ha = (function(x$1) {
  this.lD = x$1;
});
$p.n = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.iq = (function(observer) {
});
$p.dN = (function() {
  return this.ly;
});
$p.dP = (function() {
  return this.lA;
});
$p.iB = (function() {
  return this.lF;
});
$p.g6 = (function(x$1) {
  this.lF = x$1;
});
$p.ic = (function(x$0) {
  this.ly = x$0;
});
$p.id = (function(x$0) {
  this.lA = x$0;
});
$p.iv = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.hw);
});
$p.is = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.it = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.iu = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.hj = (function() {
  return this.lE;
});
$p.kS = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.lz.b(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().ep(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.aG : e$2);
    }
  }
  $x_1.cP(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
    if ((!nextValue.c())) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.T(), transaction);
    }
  })));
});
$p.pW = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.g3 = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_CollectStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_CollectStream, "com.raquo.airstream.misc.CollectStream", ({
  dw: 1,
  ax: 1,
  ac: 1,
  aC: 1,
  aD: 1,
  bm: 1,
  bk: 1,
  aF: 1,
  bo: 1,
  aN: 1,
  df: 1,
  dc: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.lJ = null;
  this.lI = false;
  this.lK = null;
  this.iM = 0;
  this.lG = null;
  this.lH = null;
  this.lM = false;
  this.iN = null;
  this.iO = false;
  this.hx = 0;
  this.dT = null;
  this.iP = null;
  this.iQ = null;
  this.lL = 0;
  this.dT = parent;
  this.iP = project;
  this.iQ = recover;
  this.lJ = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.iM = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.iN = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.lL = ((1 + parent.hj()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.f3 = (function() {
  return this.lJ;
});
$p.eZ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.w = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.h8 = (function() {
  return this.lI;
});
$p.f4 = (function() {
  return this.lK;
});
$p.dc = (function(x$1) {
  this.lI = x$1;
});
$p.ha = (function(x$1) {
  this.lK = x$1;
});
$p.n = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.k9 = (function() {
  return this.iM;
});
$p.ka = (function(x$1) {
  this.iM = x$1;
});
$p.iq = (function(observer) {
  observer.fZ($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.dN = (function() {
  return this.lG;
});
$p.dP = (function() {
  return this.lH;
});
$p.iB = (function() {
  return this.lM;
});
$p.g6 = (function(x$1) {
  this.lM = x$1;
});
$p.ic = (function(x$0) {
  this.lG = x$0;
});
$p.id = (function(x$0) {
  this.lH = x$0;
});
$p.kN = (function() {
  return this.iN;
});
$p.pP = (function(x$1) {
  this.iN = x$1;
});
$p.l3 = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.kS = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.pW = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.iv = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$p.is = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$p.it = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$p.hj = (function() {
  return this.lL;
});
$p.iu = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  nextParentValue.cP(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.iQ;
    if (this$2.c()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
    } else {
      var x0 = this$2.T();
      try {
        var $x_1 = new $c_s_util_Success(x0.bM(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().ep(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.aG : e$2);
        }
      }
      $x_1.cP(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$3) => ((tryError) => {
        $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$3$3), transaction);
      }))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$4) => ((nextValue) => {
        if ((nextValue === null)) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$3$4, transaction);
        } else if ((!nextValue.c())) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.T(), transaction);
        }
      }))(nextError)));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.kM(this.iP), transaction);
  })));
});
$p.kl = (function() {
  var originalValue = this.dT.l3().kM(this.iP);
  return originalValue.cP(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.iQ;
    if (this$2.c()) {
      return originalValue;
    } else {
      var x0 = this$2.T();
      try {
        var $x_1 = new $c_s_util_Success(x0.bM(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().ep(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.aG : e$2);
        }
      }
      return $x_1.cP(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$7$3) => ((tryError) => new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$7$3))))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
        if ((nextValue === null)) {
          return originalValue;
        } else {
          var this$7 = (nextValue.c() ? $m_s_None$() : new $c_s_Some(new $c_s_util_Success(nextValue.T())));
          return (this$7.c() ? originalValue : this$7.T());
        }
      })));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$6) => originalValue)));
});
$p.g3 = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapSignal, "com.raquo.airstream.misc.MapSignal", ({
  dx: 1,
  ax: 1,
  ac: 1,
  aC: 1,
  aD: 1,
  aP: 1,
  bl: 1,
  aF: 1,
  bn: 1,
  aN: 1,
  dd: 1,
  de: 1
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
$p.ia = (function(that) {
  return true;
});
$p.n = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().qc(this);
});
$p.w = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.R = (function(elem) {
  return $f_sc_SeqOps__appended__O__O(this, elem);
});
$p.I = (function() {
  return this.m();
});
$p.cM = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.kF = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.fV = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.g(), p, from);
});
$p.kZ = (function(otherSize) {
  return this.bd(otherSize);
});
$p.bd = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.g0 = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.bM = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.c7 = (function(x) {
  return this.kF((x | 0));
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
$p.eo = (function(elem) {
  return $ct_sc_SeqView$Appended__sc_SeqOps__O__(new $c_sc_SeqView$Appended(), this, elem);
});
$p.bt = (function() {
  return "SeqView";
});
$p.cM = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.fV = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.g(), p, from);
});
$p.bd = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.R = (function(elem) {
  return this.eo(elem);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.t)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.t)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aA)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
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
$p.g = (function() {
  return $m_sc_Iterator$().E;
});
$p.s = (function() {
  return 0;
});
$p.c = (function() {
  return true;
});
$p.bg = (function() {
  return "Empty";
});
$p.be = (function() {
  return 0;
});
$p.bf = (function(x$1) {
  return $m_sr_Statics$().es(x$1);
});
$p.by = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return 67081517;
});
var $d_sc_View$Empty$ = new $TypeData().i($c_sc_View$Empty$, "scala.collection.View$Empty$", ({
  gQ: 1,
  U: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  K: 1,
  a: 1,
  D: 1,
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
  $thiz.mo = new $c_Lcom_raquo_laminar_api_Laminar$$anon$1();
  $thiz.qt = $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$();
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
  return $m_s_util_hashing_MurmurHash3$().sW(this);
});
$p.bt = (function() {
  return "Map";
});
$p.w = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.fQ = (function(coll) {
  return this.pN().aD(coll);
});
$p.bM = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.f0 = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.c7 = (function(key) {
  return this.aB(key);
});
$p.en = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
function $ct_sc_SeqView$Appended__sc_SeqOps__O__($thiz, underlying, elem) {
  $thiz.fs = underlying;
  $thiz.hO = elem;
  $ct_sc_View$Appended__sc_IterableOps__O__($thiz, underlying, elem);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Appended() {
  this.ft = null;
  this.gB = null;
  this.fs = null;
  this.hO = null;
}
$p = $c_sc_SeqView$Appended.prototype = new $h_sc_View$Appended();
$p.constructor = $c_sc_SeqView$Appended;
/** @constructor */
function $h_sc_SeqView$Appended() {
}
$h_sc_SeqView$Appended.prototype = $p;
$p.eo = (function(elem) {
  return $ct_sc_SeqView$Appended__sc_SeqOps__O__(new $c_sc_SeqView$Appended(), this, elem);
});
$p.bt = (function() {
  return "SeqView";
});
$p.cM = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.fV = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.g(), p, from);
});
$p.bd = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.u = (function(idx) {
  return ((idx === this.fs.m()) ? this.hO : this.fs.u(idx));
});
$p.m = (function() {
  return ((1 + this.fs.m()) | 0);
});
$p.R = (function(elem) {
  return this.eo(elem);
});
var $d_sc_SeqView$Appended = new $TypeData().i($c_sc_SeqView$Appended, "scala.collection.SeqView$Appended", ({
  b1: 1,
  aI: 1,
  U: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  K: 1,
  a: 1,
  al: 1,
  n: 1
}));
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.eE = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.eE = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.u = (function(idx) {
  return this.eE.u(idx);
});
$p.m = (function() {
  return this.eE.m();
});
$p.g = (function() {
  return this.eE.g();
});
$p.s = (function() {
  return this.eE.s();
});
$p.c = (function() {
  return this.eE.c();
});
var $d_sc_SeqView$Id = new $TypeData().i($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  c1: 1,
  aH: 1,
  U: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  K: 1,
  a: 1,
  al: 1,
  n: 1
}));
function $ct_sc_SeqView$Reverse__sc_SeqOps__($thiz, underlying) {
  $thiz.gy = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Reverse() {
  this.gy = null;
}
$p = $c_sc_SeqView$Reverse.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Reverse;
/** @constructor */
function $h_sc_SeqView$Reverse() {
}
$h_sc_SeqView$Reverse.prototype = $p;
$p.u = (function(i) {
  return this.gy.u((((((-1) + this.m()) | 0) - i) | 0));
});
$p.m = (function() {
  return this.gy.m();
});
$p.c = (function() {
  return this.gy.c();
});
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$$anon$1() {
  this.mD = null;
  this.mE = false;
  this.mr = null;
  this.ms = false;
  this.mt = null;
  this.mu = false;
  this.mv = null;
  this.mw = false;
  this.mB = null;
  this.mC = false;
  this.mh = null;
  this.mi = false;
  this.mL = null;
  this.mM = false;
  this.mm = null;
  this.mn = false;
  this.mN = null;
  this.mO = false;
  this.mj = null;
  this.mk = false;
  this.mV = null;
  this.mW = false;
  this.mz = null;
  this.mA = false;
  this.mR = null;
  this.mS = false;
  this.mH = null;
  this.mI = false;
  this.mF = null;
  this.mG = false;
  this.mJ = null;
  this.mK = false;
  this.mf = null;
  this.mg = false;
  this.mp = null;
  this.mq = false;
  this.mx = null;
  this.my = false;
  this.mX = null;
  this.mY = false;
  this.ml = null;
  this.ez = null;
  this.iZ = null;
  this.qs = null;
  this.md = null;
  this.me = false;
  this.mP = null;
  this.mQ = false;
  this.mo = null;
  this.mT = null;
  this.mU = false;
  this.qt = null;
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
$p.sA = (function() {
  if ((!this.mE)) {
    this.mD = new $c_Lcom_raquo_laminar_tags_HtmlTag("img", true);
    this.mE = true;
  }
  return this.mD;
});
$p.sv = (function() {
  if ((!this.ms)) {
    this.mr = new $c_Lcom_raquo_laminar_tags_HtmlTag("h1", false);
    this.ms = true;
  }
  return this.mr;
});
$p.pB = (function() {
  if ((!this.mu)) {
    this.mt = new $c_Lcom_raquo_laminar_tags_HtmlTag("h2", false);
    this.mu = true;
  }
  return this.mt;
});
$p.pC = (function() {
  if ((!this.mw)) {
    this.mv = new $c_Lcom_raquo_laminar_tags_HtmlTag("h3", false);
    this.mw = true;
  }
  return this.mv;
});
$p.sz = (function() {
  if ((!this.mC)) {
    this.mB = new $c_Lcom_raquo_laminar_tags_HtmlTag("i", false);
    this.mC = true;
  }
  return this.mB;
});
$p.p2 = (function() {
  if ((!this.mi)) {
    this.mh = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    this.mi = true;
  }
  return this.mh;
});
$p.tk = (function() {
  if ((!this.mM)) {
    this.mL = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    this.mM = true;
  }
  return this.mL;
});
$p.er = (function() {
  if ((!this.mn)) {
    this.mm = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.mn = true;
  }
  return this.mm;
});
$p.tO = (function() {
  if ((!this.mO)) {
    this.mN = new $c_Lcom_raquo_laminar_keys_HtmlAttr("src", $m_Lcom_raquo_laminar_codecs_package$().ff);
    this.mO = true;
  }
  return this.mN;
});
$p.rs = (function() {
  if ((!this.mk)) {
    this.mj = new $c_Lcom_raquo_laminar_keys_HtmlProp("checked", $m_Lcom_raquo_laminar_codecs_package$().j0);
    this.mk = true;
  }
  return this.mj;
});
$p.qo = (function() {
  if ((!this.mW)) {
    this.mV = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().ff);
    this.mW = true;
  }
  return this.mV;
});
$p.il = (function() {
  if ((!this.mA)) {
    this.mz = new $c_Lcom_raquo_laminar_keys_HtmlProp("hidden", $m_Lcom_raquo_laminar_codecs_package$().j0);
    this.mA = true;
  }
  return this.mz;
});
$p.tV = (function() {
  if ((!this.mS)) {
    this.mR = new $c_Lcom_raquo_laminar_keys_HtmlProp("title", $m_Lcom_raquo_laminar_codecs_package$().ff);
    this.mS = true;
  }
  return this.mR;
});
$p.ir = (function() {
  if ((!this.mI)) {
    this.mH = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.mI = true;
  }
  return this.mH;
});
$p.tg = (function() {
  if ((!this.mG)) {
    this.mF = new $c_Lcom_raquo_laminar_keys_EventProp("change");
    this.mG = true;
  }
  return this.mF;
});
$p.kR = (function() {
  if ((!this.mK)) {
    this.mJ = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    this.mK = true;
  }
  return this.mJ;
});
$p.p1 = (function() {
  if ((!this.mg)) {
    this.mf = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2("background-color");
    this.mg = true;
  }
  return this.mf;
});
$p.sa = (function() {
  if ((!this.mq)) {
    this.mp = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33("font-size");
    this.mq = true;
  }
  return this.mp;
});
$p.sy = (function() {
  if ((!this.my)) {
    this.mx = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("height");
    this.my = true;
  }
  return this.mx;
});
$p.u6 = (function() {
  if ((!this.mY)) {
    this.mX = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("width");
    this.mY = true;
  }
  return this.mX;
});
$p.qR = (function() {
  if ((!this.me)) {
    this.md = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.me = true;
  }
  return this.md;
});
$p.tQ = (function() {
  if ((!this.mQ)) {
    this.mP = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.mQ = true;
  }
  return this.mP;
});
$p.u1 = (function() {
  if ((!this.mU)) {
    this.mT = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.mU = true;
  }
  return this.mT;
});
var $d_Lcom_raquo_laminar_api_package$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_package$$anon$1, "com.raquo.laminar.api.package$$anon$1", ({
  dZ: 1,
  eg: 1,
  e2: 1,
  e7: 1,
  bt: 1,
  e8: 1,
  e4: 1,
  dX: 1,
  dR: 1,
  dW: 1,
  br: 1,
  bw: 1,
  bq: 1,
  dS: 1
}));
function $is_sci_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.ag)));
}
function $isArrayOf_sci_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
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
$p.bt = (function() {
  return "IndexedSeqView";
});
$p.bd = (function(len) {
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
$p.bc = (function() {
  return $m_sci_Set$();
});
function $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__($thiz, underlying, elem) {
  $ct_sc_SeqView$Appended__sc_SeqOps__O__($thiz, underlying, elem);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$Appended() {
  this.ft = null;
  this.gB = null;
  this.fs = null;
  this.hO = null;
}
$p = $c_sc_IndexedSeqView$Appended.prototype = new $h_sc_SeqView$Appended();
$p.constructor = $c_sc_IndexedSeqView$Appended;
/** @constructor */
function $h_sc_IndexedSeqView$Appended() {
}
$h_sc_IndexedSeqView$Appended.prototype = $p;
$p.g = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.fM = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
$p.bt = (function() {
  return "IndexedSeqView";
});
$p.bd = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.m();
});
$p.R = (function(elem) {
  return this.fM(elem);
});
$p.eo = (function(elem) {
  return this.fM(elem);
});
var $d_sc_IndexedSeqView$Appended = new $TypeData().i($c_sc_IndexedSeqView$Appended, "scala.collection.IndexedSeqView$Appended", ({
  bW: 1,
  b1: 1,
  aI: 1,
  U: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  K: 1,
  a: 1,
  al: 1,
  n: 1,
  az: 1,
  r: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.eE = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.g = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bt = (function() {
  return "IndexedSeqView";
});
$p.bd = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.m();
});
$p.R = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
$p.eo = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  gq: 1,
  c1: 1,
  aH: 1,
  U: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  K: 1,
  a: 1,
  al: 1,
  n: 1,
  az: 1,
  r: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Reverse(underlying) {
  this.gy = null;
  $ct_sc_SeqView$Reverse__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Reverse.prototype = new $h_sc_SeqView$Reverse();
$p.constructor = $c_sc_IndexedSeqView$Reverse;
/** @constructor */
function $h_sc_IndexedSeqView$Reverse() {
}
$h_sc_IndexedSeqView$Reverse.prototype = $p;
$p.g = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bt = (function() {
  return "IndexedSeqView";
});
$p.bd = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.m();
});
$p.R = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
$p.eo = (function(elem) {
  return $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(new $c_sc_IndexedSeqView$Appended(), this, elem);
});
var $d_sc_IndexedSeqView$Reverse = new $TypeData().i($c_sc_IndexedSeqView$Reverse, "scala.collection.IndexedSeqView$Reverse", ({
  gs: 1,
  gG: 1,
  aH: 1,
  U: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  K: 1,
  a: 1,
  al: 1,
  n: 1,
  az: 1,
  r: 1
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
  this.jY = null;
  this.jX = null;
  this.jY = underlying;
  this.jX = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.u = (function(n) {
  return this.jY.u(n);
});
$p.m = (function() {
  return this.jY.aZ;
});
$p.c5 = (function() {
  return "ArrayBufferView";
});
$p.g = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.jX);
});
$p.fM = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.jX);
});
$p.R = (function(elem) {
  return this.fM(elem);
});
$p.eo = (function(elem) {
  return this.fM(elem);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  hU: 1,
  gc: 1,
  aH: 1,
  U: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  K: 1,
  a: 1,
  al: 1,
  n: 1,
  az: 1,
  r: 1
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
$p.pN = (function() {
  return $m_sci_Map$();
});
$p.kK = (function() {
  return $ct_sci_MapOps$ImmutableKeySet__sci_MapOps__(new $c_sci_MapOps$ImmutableKeySet(), this);
});
$p.bc = (function() {
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
        var a = $thiz.i9();
        var b = o.i9();
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
          var thisIt = $thiz.g().cO(index);
          var thatIt = o.g().cO(index);
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
$p.I = (function() {
  return 0;
});
$p.c = (function() {
  return true;
});
$p.s = (function() {
  return 0;
});
$p.l0 = (function(that) {
  return true;
});
$p.aB = (function(elem) {
  return false;
});
$p.g = (function() {
  return $m_sc_Iterator$().E;
});
$p.N = (function(f) {
});
$p.db = (function(elem) {
  return new $c_sci_Set$Set1(elem);
});
var $d_sci_Set$EmptySet$ = new $TypeData().i($c_sci_Set$EmptySet$, "scala.collection.immutable.Set$EmptySet$", ({
  hA: 1,
  af: 1,
  a9: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  a1: 1,
  aa: 1,
  i: 1,
  d: 1,
  ah: 1,
  q: 1,
  ai: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hv)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hw)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hx)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hy)));
}
/** @constructor */
function $c_sci_Set$Set1(elem1) {
  this.eO = null;
  this.eO = elem1;
}
$p = $c_sci_Set$Set1.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set1;
/** @constructor */
function $h_sci_Set$Set1() {
}
$h_sci_Set$Set1.prototype = $p;
$p.I = (function() {
  return 1;
});
$p.c = (function() {
  return false;
});
$p.s = (function() {
  return 1;
});
$p.aB = (function(elem) {
  return $m_sr_BoxesRunTime$().k(elem, this.eO);
});
$p.cT = (function(elem) {
  return (this.aB(elem) ? this : new $c_sci_Set$Set2(this.eO, elem));
});
$p.g = (function() {
  return new $c_sc_Iterator$$anon$20(this.eO);
});
$p.N = (function(f) {
  f.b(this.eO);
});
$p.d8 = (function(p) {
  return (!(!p.b(this.eO)));
});
$p.t = (function() {
  return this.eO;
});
$p.db = (function(elem) {
  return this.cT(elem);
});
function $isArrayOf_sci_Set$Set1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cv)));
}
var $d_sci_Set$Set1 = new $TypeData().i($c_sci_Set$Set1, "scala.collection.immutable.Set$Set1", ({
  cv: 1,
  af: 1,
  a9: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  a1: 1,
  aa: 1,
  i: 1,
  d: 1,
  ah: 1,
  q: 1,
  ai: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set2(elem1, elem2) {
  this.eP = null;
  this.fC = null;
  this.eP = elem1;
  this.fC = elem2;
}
$p = $c_sci_Set$Set2.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set2;
/** @constructor */
function $h_sci_Set$Set2() {
}
$h_sci_Set$Set2.prototype = $p;
$p.I = (function() {
  return 2;
});
$p.c = (function() {
  return false;
});
$p.s = (function() {
  return 2;
});
$p.aB = (function(elem) {
  return ($m_sr_BoxesRunTime$().k(elem, this.eP) || $m_sr_BoxesRunTime$().k(elem, this.fC));
});
$p.cT = (function(elem) {
  return (this.aB(elem) ? this : new $c_sci_Set$Set3(this.eP, this.fC, elem));
});
$p.g = (function() {
  return new $c_sci_Set$Set2$$anon$1(this);
});
$p.tC = (function(i) {
  switch (i) {
    case 0: {
      return this.eP;
      break;
    }
    case 1: {
      return this.fC;
      break;
    }
    default: {
      throw new $c_s_MatchError(i);
    }
  }
});
$p.N = (function(f) {
  f.b(this.eP);
  f.b(this.fC);
});
$p.d8 = (function(p) {
  return ((!(!p.b(this.eP))) && (!(!p.b(this.fC))));
});
$p.t = (function() {
  return this.eP;
});
$p.db = (function(elem) {
  return this.cT(elem);
});
function $isArrayOf_sci_Set$Set2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cw)));
}
var $d_sci_Set$Set2 = new $TypeData().i($c_sci_Set$Set2, "scala.collection.immutable.Set$Set2", ({
  cw: 1,
  af: 1,
  a9: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  a1: 1,
  aa: 1,
  i: 1,
  d: 1,
  ah: 1,
  q: 1,
  ai: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set3(elem1, elem2, elem3) {
  this.eQ = null;
  this.fD = null;
  this.fE = null;
  this.eQ = elem1;
  this.fD = elem2;
  this.fE = elem3;
}
$p = $c_sci_Set$Set3.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set3;
/** @constructor */
function $h_sci_Set$Set3() {
}
$h_sci_Set$Set3.prototype = $p;
$p.I = (function() {
  return 3;
});
$p.c = (function() {
  return false;
});
$p.s = (function() {
  return 3;
});
$p.aB = (function(elem) {
  return (($m_sr_BoxesRunTime$().k(elem, this.eQ) || $m_sr_BoxesRunTime$().k(elem, this.fD)) || $m_sr_BoxesRunTime$().k(elem, this.fE));
});
$p.cT = (function(elem) {
  return (this.aB(elem) ? this : new $c_sci_Set$Set4(this.eQ, this.fD, this.fE, elem));
});
$p.g = (function() {
  return new $c_sci_Set$Set3$$anon$2(this);
});
$p.tD = (function(i) {
  switch (i) {
    case 0: {
      return this.eQ;
      break;
    }
    case 1: {
      return this.fD;
      break;
    }
    case 2: {
      return this.fE;
      break;
    }
    default: {
      throw new $c_s_MatchError(i);
    }
  }
});
$p.N = (function(f) {
  f.b(this.eQ);
  f.b(this.fD);
  f.b(this.fE);
});
$p.d8 = (function(p) {
  return (((!(!p.b(this.eQ))) && (!(!p.b(this.fD)))) && (!(!p.b(this.fE))));
});
$p.t = (function() {
  return this.eQ;
});
$p.db = (function(elem) {
  return this.cT(elem);
});
function $isArrayOf_sci_Set$Set3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cx)));
}
var $d_sci_Set$Set3 = new $TypeData().i($c_sci_Set$Set3, "scala.collection.immutable.Set$Set3", ({
  cx: 1,
  af: 1,
  a9: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  a1: 1,
  aa: 1,
  i: 1,
  d: 1,
  ah: 1,
  q: 1,
  ai: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set4(elem1, elem2, elem3, elem4) {
  this.e6 = null;
  this.eR = null;
  this.eS = null;
  this.eT = null;
  this.e6 = elem1;
  this.eR = elem2;
  this.eS = elem3;
  this.eT = elem4;
}
$p = $c_sci_Set$Set4.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set4;
/** @constructor */
function $h_sci_Set$Set4() {
}
$h_sci_Set$Set4.prototype = $p;
$p.I = (function() {
  return 4;
});
$p.c = (function() {
  return false;
});
$p.s = (function() {
  return 4;
});
$p.aB = (function(elem) {
  return ((($m_sr_BoxesRunTime$().k(elem, this.e6) || $m_sr_BoxesRunTime$().k(elem, this.eR)) || $m_sr_BoxesRunTime$().k(elem, this.eS)) || $m_sr_BoxesRunTime$().k(elem, this.eT));
});
$p.cT = (function(elem) {
  return (this.aB(elem) ? this : $m_sci_HashSet$().gE.fT(this.e6).fT(this.eR).fT(this.eS).fT(this.eT).fT(elem));
});
$p.g = (function() {
  return new $c_sci_Set$Set4$$anon$3(this);
});
$p.tE = (function(i) {
  switch (i) {
    case 0: {
      return this.e6;
      break;
    }
    case 1: {
      return this.eR;
      break;
    }
    case 2: {
      return this.eS;
      break;
    }
    case 3: {
      return this.eT;
      break;
    }
    default: {
      throw new $c_s_MatchError(i);
    }
  }
});
$p.N = (function(f) {
  f.b(this.e6);
  f.b(this.eR);
  f.b(this.eS);
  f.b(this.eT);
});
$p.d8 = (function(p) {
  return ((((!(!p.b(this.e6))) && (!(!p.b(this.eR)))) && (!(!p.b(this.eS)))) && (!(!p.b(this.eT))));
});
$p.t = (function() {
  return this.e6;
});
$p.rr = (function(builder) {
  return builder.au(this.e6).au(this.eR).au(this.eS).au(this.eT);
});
$p.db = (function(elem) {
  return this.cT(elem);
});
function $isArrayOf_sci_Set$Set4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cy)));
}
var $d_sci_Set$Set4 = new $TypeData().i($c_sci_Set$Set4, "scala.collection.immutable.Set$Set4", ({
  cy: 1,
  af: 1,
  a9: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  a1: 1,
  aa: 1,
  i: 1,
  d: 1,
  ah: 1,
  q: 1,
  ai: 1,
  m: 1,
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
  this.ft = null;
  this.gB = null;
  this.fs = null;
  this.hO = null;
  this.gM = null;
  this.gM = mutationCount;
  $ct_sc_IndexedSeqView$Appended__sc_IndexedSeqOps__O__(this, underlying, elem);
}
$p = $c_scm_CheckedIndexedSeqView$Appended.prototype = new $h_sc_IndexedSeqView$Appended();
$p.constructor = $c_scm_CheckedIndexedSeqView$Appended;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$Appended() {
}
$h_scm_CheckedIndexedSeqView$Appended.prototype = $p;
$p.g = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.gM);
});
$p.fM = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.gM);
});
$p.R = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.gM);
});
$p.eo = (function(elem) {
  return new $c_scm_CheckedIndexedSeqView$Appended(this, elem, this.gM);
});
var $d_scm_CheckedIndexedSeqView$Appended = new $TypeData().i($c_scm_CheckedIndexedSeqView$Appended, "scala.collection.mutable.CheckedIndexedSeqView$Appended", ({
  i1: 1,
  bW: 1,
  b1: 1,
  aI: 1,
  U: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  K: 1,
  a: 1,
  al: 1,
  n: 1,
  az: 1,
  r: 1,
  i0: 1
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
$p.I = (function() {
  return 0;
});
$p.s = (function() {
  return 0;
});
$p.c = (function() {
  return true;
});
$p.kg = (function(key) {
  throw new $c_ju_NoSuchElementException(("key not found: " + key));
});
$p.aB = (function(key) {
  return false;
});
$p.fR = (function(key) {
  return $m_s_None$();
});
$p.dO = (function(key, default$1) {
  return default$1.S();
});
$p.g = (function() {
  return $m_sc_Iterator$().E;
});
$p.fW = (function() {
  return $m_sc_Iterator$().E;
});
$p.et = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
$p.b = (function(key) {
  this.kg(key);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  hf: 1,
  as: 1,
  ao: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  ae: 1,
  aq: 1,
  j: 1,
  i: 1,
  ap: 1,
  d: 1,
  ag: 1,
  q: 1,
  au: 1,
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
  $thiz.d5 = outer;
  return $thiz;
}
/** @constructor */
function $c_sci_MapOps$ImmutableKeySet() {
  this.d5 = null;
}
$p = $c_sci_MapOps$ImmutableKeySet.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_MapOps$ImmutableKeySet;
/** @constructor */
function $h_sci_MapOps$ImmutableKeySet() {
}
$h_sci_MapOps$ImmutableKeySet.prototype = $p;
$p.g = (function() {
  return this.d5.fW();
});
$p.aB = (function(key) {
  return this.d5.aB(key);
});
$p.I = (function() {
  return this.d5.I();
});
$p.s = (function() {
  return this.d5.s();
});
$p.c = (function() {
  return this.d5.c();
});
$p.cT = (function(elem) {
  return (this.d5.aB(elem) ? this : $f_sc_SetOps__concat__sc_IterableOnce__sc_SetOps($m_sci_Set$EmptySet$(), this).db(elem));
});
$p.db = (function(elem) {
  return this.cT(elem);
});
function $isArrayOf_sci_MapOps$ImmutableKeySet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b5)));
}
var $d_sci_MapOps$ImmutableKeySet = new $TypeData().i($c_sci_MapOps$ImmutableKeySet, "scala.collection.immutable.MapOps$ImmutableKeySet", ({
  b5: 1,
  af: 1,
  a9: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  a1: 1,
  aa: 1,
  i: 1,
  d: 1,
  ah: 1,
  q: 1,
  ai: 1,
  c0: 1,
  L: 1,
  a: 1
}));
function $p_sci_HashMap$HashKeySet__newKeySetOrThis__sci_BitmapIndexedMapNode__sci_Set($thiz, newRootNode) {
  return ((newRootNode === $thiz.d5.b0) ? $thiz : new $c_sci_HashMap(newRootNode).kK());
}
/** @constructor */
function $c_sci_HashMap$HashKeySet(outer) {
  this.d5 = null;
  $ct_sci_MapOps$ImmutableKeySet__sci_MapOps__(this, outer);
}
$p = $c_sci_HashMap$HashKeySet.prototype = new $h_sci_MapOps$ImmutableKeySet();
$p.constructor = $c_sci_HashMap$HashKeySet;
/** @constructor */
function $h_sci_HashMap$HashKeySet() {
}
$h_sci_HashMap$HashKeySet.prototype = $p;
$p.cT = (function(elem) {
  var originalHash = $m_sr_Statics$().L(elem);
  var improvedHash = $m_sc_Hashing$().bb(originalHash);
  return $p_sci_HashMap$HashKeySet__newKeySetOrThis__sci_BitmapIndexedMapNode__sci_Set(this, this.d5.b0.l5(elem, null, originalHash, improvedHash, 0, false));
});
$p.db = (function(elem) {
  return this.cT(elem);
});
function $isArrayOf_sci_HashMap$HashKeySet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cj)));
}
var $d_sci_HashMap$HashKeySet = new $TypeData().i($c_sci_HashMap$HashKeySet, "scala.collection.immutable.HashMap$HashKeySet", ({
  cj: 1,
  b5: 1,
  af: 1,
  a9: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  a1: 1,
  aa: 1,
  i: 1,
  d: 1,
  ah: 1,
  q: 1,
  ai: 1,
  c0: 1,
  L: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map1(key1, value1) {
  this.cj = null;
  this.dw = null;
  this.cj = key1;
  this.dw = value1;
}
$p = $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $p;
$p.I = (function() {
  return 1;
});
$p.s = (function() {
  return 1;
});
$p.c = (function() {
  return false;
});
$p.b = (function(key) {
  if ($m_sr_BoxesRunTime$().k(key, this.cj)) {
    return this.dw;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.aB = (function(key) {
  return $m_sr_BoxesRunTime$().k(key, this.cj);
});
$p.fR = (function(key) {
  return ($m_sr_BoxesRunTime$().k(key, this.cj) ? new $c_s_Some(this.dw) : $m_s_None$());
});
$p.dO = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().k(key, this.cj) ? this.dw : default$1.S());
});
$p.g = (function() {
  return new $c_sc_Iterator$$anon$20(new $c_T2(this.cj, this.dw));
});
$p.fW = (function() {
  return new $c_sc_Iterator$$anon$20(this.cj);
});
$p.f7 = (function(key, value) {
  return ($m_sr_BoxesRunTime$().k(key, this.cj) ? new $c_sci_Map$Map1(this.cj, value) : new $c_sci_Map$Map2(this.cj, this.dw, key, value));
});
$p.N = (function(f) {
  f.b(new $c_T2(this.cj, this.dw));
});
$p.d8 = (function(p) {
  return (!(!p.b(new $c_T2(this.cj, this.dw))));
});
$p.v = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cW(this.cj, this.dw);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().em;
  h = $m_s_util_hashing_MurmurHash3$().i(h, a);
  h = $m_s_util_hashing_MurmurHash3$().i(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dR(h, c);
  return $m_s_util_hashing_MurmurHash3$().F(h, 1);
});
$p.et = (function(key, value) {
  return this.f7(key, value);
});
function $isArrayOf_sci_Map$Map1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cn)));
}
var $d_sci_Map$Map1 = new $TypeData().i($c_sci_Map$Map1, "scala.collection.immutable.Map$Map1", ({
  cn: 1,
  as: 1,
  ao: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  ae: 1,
  aq: 1,
  j: 1,
  i: 1,
  ap: 1,
  d: 1,
  ag: 1,
  q: 1,
  au: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.ck = null;
  this.d3 = null;
  this.cl = null;
  this.d4 = null;
  this.ck = key1;
  this.d3 = value1;
  this.cl = key2;
  this.d4 = value2;
}
$p = $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $p;
$p.I = (function() {
  return 2;
});
$p.s = (function() {
  return 2;
});
$p.c = (function() {
  return false;
});
$p.b = (function(key) {
  if ($m_sr_BoxesRunTime$().k(key, this.ck)) {
    return this.d3;
  } else if ($m_sr_BoxesRunTime$().k(key, this.cl)) {
    return this.d4;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.aB = (function(key) {
  return ($m_sr_BoxesRunTime$().k(key, this.ck) || $m_sr_BoxesRunTime$().k(key, this.cl));
});
$p.fR = (function(key) {
  return ($m_sr_BoxesRunTime$().k(key, this.ck) ? new $c_s_Some(this.d3) : ($m_sr_BoxesRunTime$().k(key, this.cl) ? new $c_s_Some(this.d4) : $m_s_None$()));
});
$p.dO = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().k(key, this.ck) ? this.d3 : ($m_sr_BoxesRunTime$().k(key, this.cl) ? this.d4 : default$1.S()));
});
$p.g = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.fW = (function() {
  return new $c_sci_Map$Map2$$anon$2(this);
});
$p.f7 = (function(key, value) {
  return ($m_sr_BoxesRunTime$().k(key, this.ck) ? new $c_sci_Map$Map2(this.ck, value, this.cl, this.d4) : ($m_sr_BoxesRunTime$().k(key, this.cl) ? new $c_sci_Map$Map2(this.ck, this.d3, this.cl, value) : new $c_sci_Map$Map3(this.ck, this.d3, this.cl, this.d4, key, value)));
});
$p.N = (function(f) {
  f.b(new $c_T2(this.ck, this.d3));
  f.b(new $c_T2(this.cl, this.d4));
});
$p.d8 = (function(p) {
  return ((!(!p.b(new $c_T2(this.ck, this.d3)))) && (!(!p.b(new $c_T2(this.cl, this.d4)))));
});
$p.v = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cW(this.ck, this.d3);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cW(this.cl, this.d4);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().em;
  h = $m_s_util_hashing_MurmurHash3$().i(h, a);
  h = $m_s_util_hashing_MurmurHash3$().i(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dR(h, c);
  return $m_s_util_hashing_MurmurHash3$().F(h, 2);
});
$p.et = (function(key, value) {
  return this.f7(key, value);
});
function $isArrayOf_sci_Map$Map2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.co)));
}
var $d_sci_Map$Map2 = new $TypeData().i($c_sci_Map$Map2, "scala.collection.immutable.Map$Map2", ({
  co: 1,
  as: 1,
  ao: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  ae: 1,
  aq: 1,
  j: 1,
  i: 1,
  ap: 1,
  d: 1,
  ag: 1,
  q: 1,
  au: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.c0 = null;
  this.cE = null;
  this.c1 = null;
  this.cF = null;
  this.c2 = null;
  this.cG = null;
  this.c0 = key1;
  this.cE = value1;
  this.c1 = key2;
  this.cF = value2;
  this.c2 = key3;
  this.cG = value3;
}
$p = $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $p;
$p.I = (function() {
  return 3;
});
$p.s = (function() {
  return 3;
});
$p.c = (function() {
  return false;
});
$p.b = (function(key) {
  if ($m_sr_BoxesRunTime$().k(key, this.c0)) {
    return this.cE;
  } else if ($m_sr_BoxesRunTime$().k(key, this.c1)) {
    return this.cF;
  } else if ($m_sr_BoxesRunTime$().k(key, this.c2)) {
    return this.cG;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.aB = (function(key) {
  return (($m_sr_BoxesRunTime$().k(key, this.c0) || $m_sr_BoxesRunTime$().k(key, this.c1)) || $m_sr_BoxesRunTime$().k(key, this.c2));
});
$p.fR = (function(key) {
  return ($m_sr_BoxesRunTime$().k(key, this.c0) ? new $c_s_Some(this.cE) : ($m_sr_BoxesRunTime$().k(key, this.c1) ? new $c_s_Some(this.cF) : ($m_sr_BoxesRunTime$().k(key, this.c2) ? new $c_s_Some(this.cG) : $m_s_None$())));
});
$p.dO = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().k(key, this.c0) ? this.cE : ($m_sr_BoxesRunTime$().k(key, this.c1) ? this.cF : ($m_sr_BoxesRunTime$().k(key, this.c2) ? this.cG : default$1.S())));
});
$p.g = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.fW = (function() {
  return new $c_sci_Map$Map3$$anon$5(this);
});
$p.f7 = (function(key, value) {
  return ($m_sr_BoxesRunTime$().k(key, this.c0) ? new $c_sci_Map$Map3(this.c0, value, this.c1, this.cF, this.c2, this.cG) : ($m_sr_BoxesRunTime$().k(key, this.c1) ? new $c_sci_Map$Map3(this.c0, this.cE, this.c1, value, this.c2, this.cG) : ($m_sr_BoxesRunTime$().k(key, this.c2) ? new $c_sci_Map$Map3(this.c0, this.cE, this.c1, this.cF, this.c2, value) : new $c_sci_Map$Map4(this.c0, this.cE, this.c1, this.cF, this.c2, this.cG, key, value))));
});
$p.N = (function(f) {
  f.b(new $c_T2(this.c0, this.cE));
  f.b(new $c_T2(this.c1, this.cF));
  f.b(new $c_T2(this.c2, this.cG));
});
$p.d8 = (function(p) {
  return (((!(!p.b(new $c_T2(this.c0, this.cE)))) && (!(!p.b(new $c_T2(this.c1, this.cF))))) && (!(!p.b(new $c_T2(this.c2, this.cG)))));
});
$p.v = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cW(this.c0, this.cE);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cW(this.c1, this.cF);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cW(this.c2, this.cG);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().em;
  h = $m_s_util_hashing_MurmurHash3$().i(h, a);
  h = $m_s_util_hashing_MurmurHash3$().i(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dR(h, c);
  return $m_s_util_hashing_MurmurHash3$().F(h, 3);
});
$p.et = (function(key, value) {
  return this.f7(key, value);
});
function $isArrayOf_sci_Map$Map3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cq)));
}
var $d_sci_Map$Map3 = new $TypeData().i($c_sci_Map$Map3, "scala.collection.immutable.Map$Map3", ({
  cq: 1,
  as: 1,
  ao: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  ae: 1,
  aq: 1,
  j: 1,
  i: 1,
  ap: 1,
  d: 1,
  ag: 1,
  q: 1,
  au: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.bH = null;
  this.cm = null;
  this.bI = null;
  this.cn = null;
  this.bJ = null;
  this.co = null;
  this.bK = null;
  this.cp = null;
  this.bH = key1;
  this.cm = value1;
  this.bI = key2;
  this.cn = value2;
  this.bJ = key3;
  this.co = value3;
  this.bK = key4;
  this.cp = value4;
}
$p = $c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
}
$h_sci_Map$Map4.prototype = $p;
$p.I = (function() {
  return 4;
});
$p.s = (function() {
  return 4;
});
$p.c = (function() {
  return false;
});
$p.b = (function(key) {
  if ($m_sr_BoxesRunTime$().k(key, this.bH)) {
    return this.cm;
  } else if ($m_sr_BoxesRunTime$().k(key, this.bI)) {
    return this.cn;
  } else if ($m_sr_BoxesRunTime$().k(key, this.bJ)) {
    return this.co;
  } else if ($m_sr_BoxesRunTime$().k(key, this.bK)) {
    return this.cp;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.aB = (function(key) {
  return ((($m_sr_BoxesRunTime$().k(key, this.bH) || $m_sr_BoxesRunTime$().k(key, this.bI)) || $m_sr_BoxesRunTime$().k(key, this.bJ)) || $m_sr_BoxesRunTime$().k(key, this.bK));
});
$p.fR = (function(key) {
  return ($m_sr_BoxesRunTime$().k(key, this.bH) ? new $c_s_Some(this.cm) : ($m_sr_BoxesRunTime$().k(key, this.bI) ? new $c_s_Some(this.cn) : ($m_sr_BoxesRunTime$().k(key, this.bJ) ? new $c_s_Some(this.co) : ($m_sr_BoxesRunTime$().k(key, this.bK) ? new $c_s_Some(this.cp) : $m_s_None$()))));
});
$p.dO = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().k(key, this.bH) ? this.cm : ($m_sr_BoxesRunTime$().k(key, this.bI) ? this.cn : ($m_sr_BoxesRunTime$().k(key, this.bJ) ? this.co : ($m_sr_BoxesRunTime$().k(key, this.bK) ? this.cp : default$1.S()))));
});
$p.g = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.fW = (function() {
  return new $c_sci_Map$Map4$$anon$8(this);
});
$p.f7 = (function(key, value) {
  return ($m_sr_BoxesRunTime$().k(key, this.bH) ? new $c_sci_Map$Map4(this.bH, value, this.bI, this.cn, this.bJ, this.co, this.bK, this.cp) : ($m_sr_BoxesRunTime$().k(key, this.bI) ? new $c_sci_Map$Map4(this.bH, this.cm, this.bI, value, this.bJ, this.co, this.bK, this.cp) : ($m_sr_BoxesRunTime$().k(key, this.bJ) ? new $c_sci_Map$Map4(this.bH, this.cm, this.bI, this.cn, this.bJ, value, this.bK, this.cp) : ($m_sr_BoxesRunTime$().k(key, this.bK) ? new $c_sci_Map$Map4(this.bH, this.cm, this.bI, this.cn, this.bJ, this.co, this.bK, value) : $m_sci_HashMap$().jM.g5(this.bH, this.cm).g5(this.bI, this.cn).g5(this.bJ, this.co).g5(this.bK, this.cp).g5(key, value)))));
});
$p.N = (function(f) {
  f.b(new $c_T2(this.bH, this.cm));
  f.b(new $c_T2(this.bI, this.cn));
  f.b(new $c_T2(this.bJ, this.co));
  f.b(new $c_T2(this.bK, this.cp));
});
$p.d8 = (function(p) {
  return ((((!(!p.b(new $c_T2(this.bH, this.cm)))) && (!(!p.b(new $c_T2(this.bI, this.cn))))) && (!(!p.b(new $c_T2(this.bJ, this.co))))) && (!(!p.b(new $c_T2(this.bK, this.cp)))));
});
$p.rq = (function(builder) {
  return builder.eX(this.bH, this.cm).eX(this.bI, this.cn).eX(this.bJ, this.co).eX(this.bK, this.cp);
});
$p.v = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cW(this.bH, this.cm);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cW(this.bI, this.cn);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cW(this.bJ, this.co);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cW(this.bK, this.cp);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().em;
  h = $m_s_util_hashing_MurmurHash3$().i(h, a);
  h = $m_s_util_hashing_MurmurHash3$().i(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dR(h, c);
  return $m_s_util_hashing_MurmurHash3$().F(h, 4);
});
$p.et = (function(key, value) {
  return this.f7(key, value);
});
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cs)));
}
var $d_sci_Map$Map4 = new $TypeData().i($c_sci_Map$Map4, "scala.collection.immutable.Map$Map4", ({
  cs: 1,
  as: 1,
  ao: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  ae: 1,
  aq: 1,
  j: 1,
  i: 1,
  ap: 1,
  d: 1,
  ag: 1,
  q: 1,
  au: 1,
  m: 1,
  a: 1
}));
function $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet($thiz, newRootNode) {
  return (($thiz.bG === newRootNode) ? $thiz : new $c_sci_HashSet(newRootNode));
}
/** @constructor */
function $c_sci_HashSet(rootNode) {
  this.bG = null;
  this.bG = rootNode;
}
$p = $c_sci_HashSet.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_HashSet;
/** @constructor */
function $h_sci_HashSet() {
}
$h_sci_HashSet.prototype = $p;
$p.bc = (function() {
  return $m_sci_HashSet$();
});
$p.s = (function() {
  return this.bG.bj;
});
$p.I = (function() {
  return this.bG.bj;
});
$p.c = (function() {
  return (this.bG.bj === 0);
});
$p.g = (function() {
  return (this.c() ? $m_sc_Iterator$().E : new $c_sci_SetIterator(this.bG));
});
$p.aB = (function(element) {
  var elementUnimprovedHash = $m_sr_Statics$().L(element);
  var elementHash = $m_sc_Hashing$().bb(elementUnimprovedHash);
  return this.bG.h3(element, elementUnimprovedHash, elementHash, 0);
});
$p.fT = (function(element) {
  var elementUnimprovedHash = $m_sr_Statics$().L(element);
  var elementHash = $m_sc_Hashing$().bb(elementUnimprovedHash);
  return $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet(this, this.bG.ql(element, elementUnimprovedHash, elementHash, 0));
});
$p.t = (function() {
  return this.g().e();
});
$p.N = (function(f) {
  this.bG.N(f);
});
$p.l0 = (function(that) {
  return (this.c() || ((!that.c()) && ((that instanceof $c_sci_HashSet) ? this.bG.l1(that.bG, 0) : $f_sc_IterableOnceOps__forall__F1__Z(this, that))));
});
$p.n = (function(that) {
  if ((that instanceof $c_sci_HashSet)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bG;
      var x$2 = that.bG;
      return ((x === null) ? (x$2 === null) : x.n(x$2));
    }
  } else {
    return $f_sc_Set__equals__O__Z(this, that);
  }
});
$p.c5 = (function() {
  return "HashSet";
});
$p.v = (function() {
  var it = new $c_sci_SetHashIterator(this.bG);
  return $m_s_util_hashing_MurmurHash3$().hk(it, $m_s_util_hashing_MurmurHash3$().i1);
});
$p.db = (function(elem) {
  return this.fT(elem);
});
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ck)));
}
var $d_sci_HashSet = new $TypeData().i($c_sci_HashSet, "scala.collection.immutable.HashSet", ({
  ck: 1,
  af: 1,
  a9: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  a1: 1,
  aa: 1,
  i: 1,
  d: 1,
  ah: 1,
  q: 1,
  ai: 1,
  hJ: 1,
  gJ: 1,
  m: 1,
  L: 1,
  a: 1
}));
function $isArrayOf_sci_ListSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hd)));
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
$p.aW = (function() {
  return this;
});
function $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State($thiz) {
  if ((!$thiz.jN)) {
    if ($thiz.hU) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
    }
    $thiz.hU = true;
    try {
      var res = $thiz.jO.S();
    } finally {
      $thiz.hU = false;
    }
    $thiz.bZ = true;
    $thiz.jO = null;
    $thiz.jP = res;
    $thiz.jN = true;
  }
  return $thiz.jP;
}
function $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz, f) {
  $m_sci_LazyList$();
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => ($thiz.c() ? $m_sci_LazyList$State$Empty$() : ($m_sci_LazyList$(), new $c_sci_LazyList$State$Cons(f.b($thiz.B().t()), $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz.B().aX(), f)))))));
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.q = (("" + b.q) + start);
  if ((!$thiz.bZ)) {
    b.q = (b.q + "<not computed>");
  } else if ((!$thiz.c())) {
    var obj = $thiz.B().t();
    b.q = (("" + b.q) + obj);
    var elem = null;
    elem = $thiz;
    var elem$1 = $thiz.B().aX();
    var elem$2 = null;
    elem$2 = elem$1;
    if (((elem !== elem$2) && ((!elem$2.bZ) || (elem.B() !== elem$2.B())))) {
      elem = elem$2;
      if ((elem$2.bZ && (!elem$2.c()))) {
        elem$2 = elem$2.B().aX();
        while ((((elem !== elem$2) && (elem$2.bZ && (!elem$2.c()))) && (elem.B() !== elem$2.B()))) {
          b.q = (("" + b.q) + sep);
          var obj$1 = elem.B().t();
          b.q = (("" + b.q) + obj$1);
          elem = elem.B().aX();
          elem$2 = elem$2.B().aX();
          if ((elem$2.bZ && (!elem$2.c()))) {
            elem$2 = elem$2.B().aX();
          }
        }
      }
    }
    if ((!(elem$2.bZ && (!elem$2.c())))) {
      while ((elem !== elem$2)) {
        b.q = (("" + b.q) + sep);
        var obj$2 = elem.B().t();
        b.q = (("" + b.q) + obj$2);
        elem = elem.B().aX();
      }
      if ((!elem.bZ)) {
        b.q = (("" + b.q) + sep);
        b.q = (b.q + "<not computed>");
      }
    } else {
      var runner = $thiz;
      var k = 0;
      while (true) {
        var a = runner;
        var b$1 = elem$2;
        if ((!((a === b$1) || (a.B() === b$1.B())))) {
          runner = runner.B().aX();
          elem$2 = elem$2.B().aX();
          k = ((1 + k) | 0);
        } else {
          break;
        }
      }
      var a$1 = elem;
      var b$2 = elem$2;
      if ((((a$1 === b$2) || (a$1.B() === b$2.B())) && (k > 0))) {
        b.q = (("" + b.q) + sep);
        var obj$3 = elem.B().t();
        b.q = (("" + b.q) + obj$3);
        elem = elem.B().aX();
      }
      while (true) {
        var a$2 = elem;
        var b$3 = elem$2;
        if ((!((a$2 === b$3) || (a$2.B() === b$3.B())))) {
          b.q = (("" + b.q) + sep);
          var obj$4 = elem.B().t();
          b.q = (("" + b.q) + obj$4);
          elem = elem.B().aX();
        } else {
          break;
        }
      }
      b.q = (("" + b.q) + sep);
      b.q = (b.q + "<cycle>");
    }
  }
  b.q = (("" + b.q) + end);
  return b;
}
/** @constructor */
function $c_sci_LazyList(lazyState) {
  this.jP = null;
  this.jO = null;
  this.bZ = false;
  this.hU = false;
  this.jN = false;
  this.jO = lazyState;
  this.bZ = false;
  this.hU = false;
}
$p = $c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
}
$h_sci_LazyList.prototype = $p;
$p.bt = (function() {
  return "LinearSeq";
});
$p.m = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$p.bd = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.kF = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.u = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.ii = (function(p) {
  return $f_sc_LinearSeqOps__exists__F1__Z(this, p);
});
$p.g0 = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.fV = (function(p, from) {
  return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from);
});
$p.B = (function() {
  return ((!this.jN) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.jP);
});
$p.c = (function() {
  return (this.B() === $m_sci_LazyList$State$Empty$());
});
$p.s = (function() {
  return ((this.bZ && (this.B() === $m_sci_LazyList$State$Empty$())) ? 0 : (-1));
});
$p.t = (function() {
  return this.B().t();
});
$p.pp = (function() {
  var these = this;
  var those = this;
  if ((!these.c())) {
    these = these.B().aX();
  }
  while ((those !== these)) {
    if (these.c()) {
      return this;
    }
    these = these.B().aX();
    if (these.c()) {
      return this;
    }
    these = these.B().aX();
    if ((these === those)) {
      return this;
    }
    those = those.B().aX();
  }
  return this;
});
$p.g = (function() {
  return ((this.bZ && (this.B() === $m_sci_LazyList$State$Empty$())) ? $m_sc_Iterator$().E : new $c_sci_LazyList$LazyIterator(this));
});
$p.N = (function(f) {
  var _$this = this;
  while (true) {
    if ((!_$this.c())) {
      f.b(_$this.B().t());
      _$this = _$this.B().aX();
      continue;
    }
    break;
  }
});
$p.c5 = (function() {
  return "LazyList";
});
$p.pM = (function(suffix) {
  $m_sci_LazyList$();
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    if (this.c()) {
      var x1 = suffix.S();
      return ((x1 instanceof $c_sci_LazyList) ? x1.B() : ((x1.s() === 0) ? $m_sci_LazyList$State$Empty$() : $m_sci_LazyList$().kX(x1.g())));
    } else {
      $m_sci_LazyList$();
      return new $c_sci_LazyList$State$Cons(this.B().t(), this.B().aX().pM(suffix));
    }
  })));
});
$p.rb = (function(elem) {
  return ((this.bZ && (this.B() === $m_sci_LazyList$State$Empty$())) ? ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    $m_sci_LazyList$();
    return new $c_sci_LazyList$State$Cons(elem, $m_sci_LazyList$().fx);
  })))) : this.pM(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$$anon$20(elem)))));
});
$p.sS = (function(f) {
  return ((this.bZ && (this.B() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().fx : ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => (this.c() ? $m_sci_LazyList$State$Empty$() : ($m_sci_LazyList$(), new $c_sci_LazyList$State$Cons(f.b(this.B().t()), $p_sci_LazyList__mapImpl__F1__sci_LazyList(this.B().aX(), f)))))))));
});
$p.ib = (function(pf) {
  var _$this = this;
  while (true) {
    if (_$this.c()) {
      return $m_s_None$();
    } else {
      var res = pf.bM(_$this.B().t(), $m_sci_LazyList$().o6);
      if ((res === $m_sr_Statics$PFMarker$())) {
        _$this = _$this.B().aX();
      } else {
        return new $c_s_Some(res);
      }
    }
  }
});
$p.s0 = (function(n) {
  return ((n <= 0) ? this : ((this.bZ && (this.B() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().fx : $m_sci_LazyList$().tB(this, n)));
});
$p.en = (function(sb, start, sep, end) {
  this.pp();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.b3, start, sep, end);
  return sb;
});
$p.w = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").q;
});
$p.b = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.c7 = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.kn = (function(n) {
  return this.s0(n);
});
$p.cU = (function(f) {
  return this.sS(f);
});
$p.R = (function(elem) {
  return this.rb(elem);
});
$p.y = (function() {
  return this.B().aX();
});
$p.bc = (function() {
  return $m_sci_LazyList$();
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cl)));
}
var $d_sci_LazyList = new $TypeData().i($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  cl: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  b2: 1,
  aA: 1,
  aY: 1,
  b3: 1,
  a: 1
}));
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hQ)));
}
function $ct_sjsr_WrappedVarArgs__sjs_js_Array__($thiz, array) {
  $thiz.i0 = array;
  return $thiz;
}
function $ct_sjsr_WrappedVarArgs__($thiz) {
  $ct_sjsr_WrappedVarArgs__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjsr_WrappedVarArgs() {
  this.i0 = null;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.cM = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.R = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.cU = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.ia = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.g0 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.i9 = (function() {
  return $m_sci_IndexedSeqDefaults$().o5;
});
$p.g = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.t = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bd = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.m();
});
$p.n = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().qc(this);
});
$p.w = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.I = (function() {
  return this.m();
});
$p.fV = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I($ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this)), p, from);
});
$p.kZ = (function(otherSize) {
  var x = this.m();
  return ((x === otherSize) ? 0 : ((x < otherSize) ? (-1) : 1));
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.bM = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.hb = (function() {
  return $m_sjsr_WrappedVarArgs$().aR();
});
$p.N = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.ii = (function(p) {
  return $f_sc_IterableOnceOps__exists__F1__Z(this, p);
});
$p.bR = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.ib = (function(pf) {
  return $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(this, pf);
});
$p.en = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.l2 = (function() {
  return $m_sci_Vector$().bs(this);
});
$p.iA = (function(evidence$2) {
  return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2);
});
$p.dQ = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.m = (function() {
  return (this.i0.length | 0);
});
$p.u = (function(idx) {
  return this.i0[idx];
});
$p.c5 = (function() {
  return "WrappedVarArgs";
});
$p.fP = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().kw(coll);
});
$p.c7 = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.b = (function(v1) {
  return this.u((v1 | 0));
});
$p.bc = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d0)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  d0: 1,
  A: 1,
  x: 1,
  q: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  p: 1,
  j: 1,
  i: 1,
  n: 1,
  d: 1,
  y: 1,
  t: 1,
  r: 1,
  F: 1,
  B: 1,
  u: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_sci_HashMap(rootNode) {
  this.b0 = null;
  this.b0 = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.pN = (function() {
  return $m_sci_HashMap$();
});
$p.s = (function() {
  return this.b0.b7;
});
$p.I = (function() {
  return this.b0.b7;
});
$p.c = (function() {
  return (this.b0.b7 === 0);
});
$p.kK = (function() {
  return ((this.b0.b7 === 0) ? $m_sci_Set$EmptySet$() : new $c_sci_HashMap$HashKeySet(this));
});
$p.g = (function() {
  return (this.c() ? $m_sc_Iterator$().E : new $c_sci_MapKeyValueTupleIterator(this.b0));
});
$p.fW = (function() {
  return (this.c() ? $m_sc_Iterator$().E : new $c_sci_MapKeyIterator(this.b0));
});
$p.aB = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().L(key);
  var keyHash = $m_sc_Hashing$().bb(keyUnimprovedHash);
  return this.b0.kk(key, keyUnimprovedHash, keyHash, 0);
});
$p.b = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().L(key);
  var keyHash = $m_sc_Hashing$().bb(keyUnimprovedHash);
  return this.b0.ke(key, keyUnimprovedHash, keyHash, 0);
});
$p.fR = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().L(key);
  var keyHash = $m_sc_Hashing$().bb(keyUnimprovedHash);
  return this.b0.ik(key, keyUnimprovedHash, keyHash, 0);
});
$p.dO = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().L(key);
  var keyHash = $m_sc_Hashing$().bb(keyUnimprovedHash);
  return this.b0.kx(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.g5 = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().L(key);
  var newRootNode = this.b0.l5(key, value, keyUnimprovedHash, $m_sc_Hashing$().bb(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.b0) ? this : new $c_sci_HashMap(newRootNode));
});
$p.N = (function(f) {
  this.b0.N(f);
});
$p.f0 = (function(f) {
  this.b0.f0(f);
});
$p.n = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.b0;
      var x$2 = that.b0;
      return ((x === null) ? (x$2 === null) : x.n(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.v = (function() {
  if (this.c()) {
    return $m_s_util_hashing_MurmurHash3$().k7;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.b0);
    return $m_s_util_hashing_MurmurHash3$().hk(hashIterator, $m_s_util_hashing_MurmurHash3$().em);
  }
});
$p.c5 = (function() {
  return "HashMap";
});
$p.t = (function() {
  return this.g().e();
});
$p.et = (function(key, value) {
  return this.g5(key, value);
});
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ci)));
}
var $d_sci_HashMap = new $TypeData().i($c_sci_HashMap, "scala.collection.immutable.HashMap", ({
  ci: 1,
  as: 1,
  ao: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  ae: 1,
  aq: 1,
  j: 1,
  i: 1,
  ap: 1,
  d: 1,
  ag: 1,
  q: 1,
  au: 1,
  hI: 1,
  gI: 1,
  m: 1,
  L: 1,
  a: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hK)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hO)));
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
$p.b4 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
function $p_scm_HashSet__addElem__O__I__Z($thiz, elem, hash) {
  var idx = (hash & (((-1) + $thiz.bo.a.length) | 0));
  var x1 = $thiz.bo.a[idx];
  if ((x1 === null)) {
    $thiz.bo.a[idx] = new $c_scm_HashSet$Node(elem, hash, null);
  } else {
    var prev = null;
    var n = x1;
    while (((n !== null) && (n.dH <= hash))) {
      if (((n.dH === hash) && $m_sr_BoxesRunTime$().k(elem, n.fG))) {
        return false;
      }
      prev = n;
      n = n.bp;
    }
    if ((prev === null)) {
      $thiz.bo.a[idx] = new $c_scm_HashSet$Node(elem, hash, x1);
    } else {
      prev.bp = new $c_scm_HashSet$Node(elem, hash, prev.bp);
    }
  }
  $thiz.eh = ((1 + $thiz.eh) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.bo.a.length;
  $thiz.k4 = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.eh === 0)) {
    $thiz.bo = new ($d_scm_HashSet$Node.r().C)(newlen);
  } else {
    $thiz.bo = $m_ju_Arrays$().a7($thiz.bo, newlen);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.bo.a[i];
        if ((old !== null)) {
          preLow.bp = null;
          preHigh.bp = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.bp;
            if (((n.dH & oldlen) === 0)) {
              lastLow.bp = n;
              lastLow = n;
            } else {
              lastHigh.bp = n;
              lastHigh = n;
            }
            n = next;
          }
          lastLow.bp = null;
          if ((old !== preLow.bp)) {
            $thiz.bo.a[i] = preLow.bp;
          }
          if ((preHigh.bp !== null)) {
            $thiz.bo.a[((i + oldlen) | 0)] = preHigh.bp;
            lastHigh.bp = null;
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
  return $doubleToInt((size * $thiz.k3));
}
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.k3 = loadFactor;
  $thiz.bo = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.k4 = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.bo.a.length);
  $thiz.eh = 0;
  return $thiz;
}
function $ct_scm_HashSet__($thiz) {
  $ct_scm_HashSet__I__D__($thiz, 16, 0.75);
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet() {
  this.k3 = 0.0;
  this.bo = null;
  this.k4 = 0;
  this.eh = 0;
}
$p = $c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$p.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
}
$h_scm_HashSet.prototype = $p;
$p.I = (function() {
  return this.eh;
});
$p.iy = (function(originalHash) {
  return (originalHash ^ ((originalHash >>> 16) | 0));
});
$p.aB = (function(elem) {
  var hash = this.iy($m_sr_Statics$().L(elem));
  var x1 = this.bo.a[(hash & (((-1) + this.bo.a.length) | 0))];
  return (((x1 === null) ? null : x1.s9(elem, hash)) !== null);
});
$p.bh = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.k3)));
  if ((target > this.bo.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.i7 = (function(elem) {
  if ((((1 + this.eh) | 0) >= this.k4)) {
    $p_scm_HashSet__growTable__I__V(this, (this.bo.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, this.iy($m_sr_Statics$().L(elem)));
});
$p.oH = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if ((xs instanceof $c_sci_HashSet)) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((k$2$2, h$2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, k$2$2, this.iy((h$2$2 | 0)));
    }));
    xs.bG.ks(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.l()) {
      var next = iter.e();
      $p_scm_HashSet__addElem__O__I__Z(this, next.fG, next.dH);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.s2();
    while (iter$2.l()) {
      var next$2 = iter$2.e();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.pK(), next$2.pD());
    }
    return this;
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs);
  }
});
$p.g = (function() {
  return new $c_scm_HashSet$$anon$1(this);
});
$p.bc = (function() {
  return $m_scm_HashSet$();
});
$p.s = (function() {
  return this.eh;
});
$p.c = (function() {
  return (this.eh === 0);
});
$p.c5 = (function() {
  return "HashSet";
});
$p.v = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.l()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().hk(hashIterator, $m_s_util_hashing_MurmurHash3$().i1);
});
$p.au = (function(elem) {
  this.i7(elem);
  return this;
});
$p.b4 = (function(elems) {
  return this.oH(elems);
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cR)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  cR: 1,
  hR: 1,
  a9: 1,
  h: 1,
  e: 1,
  b: 1,
  g: 1,
  c: 1,
  f: 1,
  a1: 1,
  aa: 1,
  i: 1,
  d: 1,
  ii: 1,
  N: 1,
  ij: 1,
  M: 1,
  C: 1,
  I: 1,
  H: 1,
  G: 1,
  aJ: 1,
  m: 1,
  a: 1
}));
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hc)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.id)));
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
$p.fQ = (function(coll) {
  return $m_sci_ArraySeq$().ku(coll, this.aI());
});
$p.hb = (function() {
  return $m_sci_ArraySeq$().ip(this.aI());
});
$p.cM = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.ia = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.g0 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bt = (function() {
  return "IndexedSeq";
});
$p.t = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bd = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.m();
});
$p.dQ = (function() {
  return $m_sci_ArraySeq$().jK;
});
$p.sR = (function(f) {
  var a = new $ac_O(this.m());
  var i = 0;
  while ((i < a.a.length)) {
    a.a[i] = f.b(this.u(i));
    i = ((1 + i) | 0);
  }
  return $m_sci_ArraySeq$().hm(a);
});
$p.aH = (function(elem) {
  var $x_1 = $m_sci_ArraySeq$();
  var xs = this.cX();
  var newLength = ((1 + $m_jl_reflect_Array$().bS(xs)) | 0);
  if ($d_O.R($objectGetClass(xs).C.Q().C)) {
    var dest$1 = $m_ju_Arrays$().rO(xs, newLength, $d_O.r().l());
  } else {
    var dest = new $ac_O(newLength);
    $m_s_Array$().c6(xs, 0, dest, 0, $m_jl_reflect_Array$().bS(xs));
    var dest$1 = dest;
  }
  var x1 = $m_jl_reflect_Array$().bS(xs);
  dest$1.a[x1] = elem;
  return $x_1.hm(dest$1);
});
$p.c5 = (function() {
  return "ArraySeq";
});
$p.bR = (function(xs, start, len) {
  var srcLen = this.m();
  var destLen = $m_jl_reflect_Array$().bS(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().c6(this.cX(), 0, xs, start, copied);
  }
  return copied;
});
$p.i9 = (function() {
  return 2147483647;
});
$p.fP = (function(coll) {
  return $m_sci_ArraySeq$().ku(coll, this.aI());
});
$p.R = (function(elem) {
  return this.aH(elem);
});
$p.cU = (function(f) {
  return this.sR(f);
});
$p.bc = (function() {
  return $m_sci_ArraySeq$().jK;
});
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a2)));
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
$p.cM = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.ia = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.g0 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bt = (function() {
  return "IndexedSeq";
});
$p.bd = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.m();
});
$p.dQ = (function() {
  return $m_sci_Vector$();
});
$p.m = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.h : this.d.a.length);
});
$p.g = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().oi : new $c_sci_NewVectorIterator(this, this.m(), this.cY()));
});
$p.rc = (function(suffix) {
  var k = suffix.s();
  return ((k === 0) ? this : ((k < 0) ? $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix) : this.c4(suffix, k)));
});
$p.c4 = (function(suffix, k) {
  if ((k < ((4 + this.cY()) | 0))) {
    var v = new $c_sr_ObjectRef(this);
    if ($is_sci_Iterable(suffix)) {
      suffix.N(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => {
        v.ak = v.ak.bq(x$2$2);
      })));
    } else {
      var this$2 = suffix.g();
      while (this$2.l()) {
        var x0 = this$2.e();
        v.ak = v.ak.bq(x0);
      }
    }
    return v.ak;
  } else if (((this.m() < ((k >>> 5) | 0)) && (suffix instanceof $c_sci_Vector))) {
    var v$2 = suffix;
    var ri = new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(new $c_sc_IndexedSeqView$Id(this));
    while ((ri.bA > 0)) {
      v$2 = v$2.f6(ri.e());
    }
    return v$2;
  } else {
    return (((this.m() < (((-64) + k) | 0)) && (suffix instanceof $c_sci_Vector)) ? new $c_sci_VectorBuilder().r9(this.m(), suffix).gS(this).gS(suffix).ix() : new $c_sci_VectorBuilder().pE(this).gS(suffix).ix());
  }
});
$p.c5 = (function() {
  return "Vector";
});
$p.bR = (function(xs, start, len) {
  return this.g().bR(xs, start, len);
});
$p.l2 = (function() {
  return this;
});
$p.i9 = (function() {
  return $m_sci_Vector$().oh;
});
$p.b5 = (function(index) {
  return $m_scg_CommonErrors$().h7(index, (((-1) + this.m()) | 0));
});
$p.t = (function() {
  if ((this.d.a.length === 0)) {
    throw new $c_ju_NoSuchElementException("empty.head");
  } else {
    return this.d.a[0];
  }
});
$p.N = (function(f) {
  var c = this.cY();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    $x_1.kr((((-1) + ((((1 + c$1) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0)) | 0), this.de(i), f);
    i = ((1 + i) | 0);
  }
});
$p.bc = (function() {
  return $m_sci_Vector$();
});
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
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
$p.cM = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.R = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.bt = (function() {
  return "IndexedSeq";
});
$p.bd = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.m();
});
$p.dQ = (function() {
  return $m_scm_ArraySeq$().k2;
});
$p.py = (function(coll) {
  var evidence$1 = this.aI();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.b6();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.s();
  var it = coll.g();
  while (it.l()) {
    var elem = it.e();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.C.z : elem));
    jsElems.push(unboxedElem);
  }
  var $x_1 = $m_scm_ArraySeq$();
  var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
  return $x_1.kL(elemRuntimeClass.C.r().w(jsElems));
});
$p.hb = (function() {
  return $m_scm_ArraySeq$().ip(this.aI());
});
$p.c5 = (function() {
  return "ArraySeq";
});
$p.bR = (function(xs, start, len) {
  var srcLen = this.m();
  var destLen = $m_jl_reflect_Array$().bS(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().c6(this.cA(), 0, xs, start, copied);
  }
  return copied;
});
$p.n = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().bS(this.cA()) !== $m_jl_reflect_Array$().bS(other.cA()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.fP = (function(coll) {
  return this.py(coll);
});
$p.fQ = (function(coll) {
  return this.py(coll);
});
$p.bc = (function() {
  return $m_scm_ArraySeq$().k2;
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.dm = null;
  this.dm = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.m = (function() {
  return this.dm.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.p0(this.dm, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().pn(this.dm, that.dm) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.g = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.dm);
});
$p.aH = (function(elem) {
  if (((typeof elem) === "boolean")) {
    var x2 = (!(!elem));
    var xs = this.dm;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_Z.R($objectGetClass(xs).C.Q().C)) {
      var dest$1 = this$3.eq(xs, newLength);
    } else {
      var dest = new $ac_Z(newLength);
      $m_s_Array$().c6(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cK(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofBoolean(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aH.call(this, elem);
  }
});
$p.h1 = (function(i) {
  return this.dm.a[i];
});
$p.R = (function(elem) {
  return this.aH(elem);
});
$p.b = (function(v1) {
  return this.h1((v1 | 0));
});
$p.u = (function(i) {
  return this.h1(i);
});
$p.aI = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.cX = (function() {
  return this.dm;
});
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c4)));
}
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  c4: 1,
  a2: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  A: 1,
  t: 1,
  r: 1,
  F: 1,
  B: 1,
  u: 1,
  m: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.dn = null;
  this.dn = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.m = (function() {
  return this.dn.a.length;
});
$p.gT = (function(i) {
  return this.dn.a[i];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oS(this.dn, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().ph(this.dn, that.dn) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.g = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.dn);
});
$p.aH = (function(elem) {
  if ($isByte(elem)) {
    var x2 = (elem | 0);
    var xs = this.dn;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_B.R($objectGetClass(xs).C.Q().C)) {
      var dest$1 = this$3.eq(xs, newLength);
    } else {
      var dest = new $ac_B(newLength);
      $m_s_Array$().c6(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cK(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofByte(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aH.call(this, elem);
  }
});
$p.R = (function(elem) {
  return this.aH(elem);
});
$p.b = (function(v1) {
  return this.gT((v1 | 0));
});
$p.u = (function(i) {
  return this.gT(i);
});
$p.aI = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.cX = (function() {
  return this.dn;
});
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c5)));
}
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  c5: 1,
  a2: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  A: 1,
  t: 1,
  r: 1,
  F: 1,
  B: 1,
  u: 1,
  m: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.d0 = null;
  this.d0 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.m = (function() {
  return this.d0.a.length;
});
$p.gU = (function(i) {
  return this.d0.a[i];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oT(this.d0, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().pi(this.d0, that.d0) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.g = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.d0);
});
$p.aH = (function(elem) {
  if ((elem instanceof $Char)) {
    var x2 = $uC(elem);
    var xs = this.d0;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_C.R($objectGetClass(xs).C.Q().C)) {
      var dest$1 = this$3.eq(xs, newLength);
    } else {
      var dest = new $ac_C(newLength);
      $m_s_Array$().c6(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cK(dest$1, xs.a.length, $bC(x2));
    return new $c_sci_ArraySeq$ofChar(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aH.call(this, elem);
  }
});
$p.en = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.d0).en(sb, start, sep, end);
});
$p.R = (function(elem) {
  return this.aH(elem);
});
$p.b = (function(v1) {
  return $bC(this.gU((v1 | 0)));
});
$p.u = (function(i) {
  return $bC(this.gU(i));
});
$p.aI = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.cX = (function() {
  return this.d0;
});
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c6)));
}
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  c6: 1,
  a2: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  A: 1,
  t: 1,
  r: 1,
  F: 1,
  B: 1,
  u: 1,
  m: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.dp = null;
  this.dp = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.m = (function() {
  return this.dp.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oU(this.dp, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofDouble) ? $m_ju_Arrays$().pj(this.dp, that.dp) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.g = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.dp);
});
$p.aH = (function(elem) {
  if (((typeof elem) === "number")) {
    var x2 = (+elem);
    var xs = this.dp;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_D.R($objectGetClass(xs).C.Q().C)) {
      var dest$1 = this$3.eq(xs, newLength);
    } else {
      var dest = new $ac_D(newLength);
      $m_s_Array$().c6(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cK(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofDouble(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aH.call(this, elem);
  }
});
$p.gW = (function(i) {
  return this.dp.a[i];
});
$p.R = (function(elem) {
  return this.aH(elem);
});
$p.b = (function(v1) {
  return this.gW((v1 | 0));
});
$p.u = (function(i) {
  return this.gW(i);
});
$p.aI = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.cX = (function() {
  return this.dp;
});
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c7)));
}
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  c7: 1,
  a2: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  A: 1,
  t: 1,
  r: 1,
  F: 1,
  B: 1,
  u: 1,
  m: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.dq = null;
  this.dq = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.m = (function() {
  return this.dq.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oV(this.dq, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofFloat) ? $m_ju_Arrays$().pk(this.dq, that.dq) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.g = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.dq);
});
$p.aH = (function(elem) {
  if ($isFloat(elem)) {
    var x2 = Math.fround(elem);
    var xs = this.dq;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_F.R($objectGetClass(xs).C.Q().C)) {
      var dest$1 = this$3.eq(xs, newLength);
    } else {
      var dest = new $ac_F(newLength);
      $m_s_Array$().c6(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cK(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofFloat(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aH.call(this, elem);
  }
});
$p.gX = (function(i) {
  return this.dq.a[i];
});
$p.R = (function(elem) {
  return this.aH(elem);
});
$p.b = (function(v1) {
  return this.gX((v1 | 0));
});
$p.u = (function(i) {
  return this.gX(i);
});
$p.aI = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.cX = (function() {
  return this.dq;
});
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c8)));
}
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  c8: 1,
  a2: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  A: 1,
  t: 1,
  r: 1,
  F: 1,
  B: 1,
  u: 1,
  m: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.dr = null;
  this.dr = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
$p.m = (function() {
  return this.dr.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oW(this.dr, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().ih(this.dr, that.dr) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.g = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.dr);
});
$p.aH = (function(elem) {
  if ($isInt(elem)) {
    var x2 = (elem | 0);
    var xs = this.dr;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_I.R($objectGetClass(xs).C.Q().C)) {
      var dest$1 = this$3.eq(xs, newLength);
    } else {
      var dest = new $ac_I(newLength);
      $m_s_Array$().c6(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cK(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofInt(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aH.call(this, elem);
  }
});
$p.gY = (function(i) {
  return this.dr.a[i];
});
$p.R = (function(elem) {
  return this.aH(elem);
});
$p.b = (function(v1) {
  return this.gY((v1 | 0));
});
$p.u = (function(i) {
  return this.gY(i);
});
$p.aI = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.cX = (function() {
  return this.dr;
});
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c9)));
}
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  c9: 1,
  a2: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  A: 1,
  t: 1,
  r: 1,
  F: 1,
  B: 1,
  u: 1,
  m: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.ds = null;
  this.ds = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.m = (function() {
  return this.ds.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oX(this.ds, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().pl(this.ds, that.ds) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.g = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.ds);
});
$p.aH = (function(elem) {
  if ((elem instanceof $c_RTLong)) {
    var t = $uJ(elem);
    var lo = t.o;
    var hi = t.r;
    var xs = this.ds;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_J.R($objectGetClass(xs).C.Q().C)) {
      var dest$1 = this$3.eq(xs, newLength);
    } else {
      var dest = new $ac_J(newLength);
      $m_s_Array$().c6(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cK(dest$1, xs.a.length, new $c_RTLong(lo, hi));
    return new $c_sci_ArraySeq$ofLong(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aH.call(this, elem);
  }
});
$p.gZ = (function(i) {
  return this.ds.a[i];
});
$p.R = (function(elem) {
  return this.aH(elem);
});
$p.b = (function(v1) {
  return this.gZ((v1 | 0));
});
$p.u = (function(i) {
  return this.gZ(i);
});
$p.aI = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.cX = (function() {
  return this.ds;
});
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ca)));
}
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  ca: 1,
  a2: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  A: 1,
  t: 1,
  r: 1,
  F: 1,
  B: 1,
  u: 1,
  m: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.d1 = null;
  this.d1 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.aI = (function() {
  return $m_s_reflect_ClassTag$().oO($objectGetClass(this.d1).C.Q());
});
$p.m = (function() {
  return this.d1.a.length;
});
$p.u = (function(i) {
  return this.d1.a[i];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oR(this.d1, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().po(this.d1, that.d1) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.g = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.d1);
});
$p.b = (function(v1) {
  return this.u((v1 | 0));
});
$p.cX = (function() {
  return this.d1;
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cb)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  cb: 1,
  a2: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  A: 1,
  t: 1,
  r: 1,
  F: 1,
  B: 1,
  u: 1,
  m: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.dt = null;
  this.dt = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.m = (function() {
  return this.dt.a.length;
});
$p.gV = (function(i) {
  return this.dt.a[i];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oY(this.dt, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().pm(this.dt, that.dt) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.g = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.dt);
});
$p.aH = (function(elem) {
  if ($isShort(elem)) {
    var x2 = (elem | 0);
    var xs = this.dt;
    var this$3 = $m_s_Array$();
    var newLength = ((1 + xs.a.length) | 0);
    if ($d_S.R($objectGetClass(xs).C.Q().C)) {
      var dest$1 = this$3.eq(xs, newLength);
    } else {
      var dest = new $ac_S(newLength);
      $m_s_Array$().c6(xs, 0, dest, 0, xs.a.length);
      var dest$1 = dest;
    }
    $m_sr_ScalaRunTime$().cK(dest$1, xs.a.length, x2);
    return new $c_sci_ArraySeq$ofShort(dest$1);
  } else {
    return $c_sci_ArraySeq.prototype.aH.call(this, elem);
  }
});
$p.R = (function(elem) {
  return this.aH(elem);
});
$p.b = (function(v1) {
  return this.gV((v1 | 0));
});
$p.u = (function(i) {
  return this.gV(i);
});
$p.aI = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.cX = (function() {
  return this.dt;
});
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cc)));
}
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  cc: 1,
  a2: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  A: 1,
  t: 1,
  r: 1,
  F: 1,
  B: 1,
  u: 1,
  m: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.eG = null;
  this.eG = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.m = (function() {
  return this.eG.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oZ(this.eG, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.eG.a.length === that.eG.a.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.g = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.eG);
});
$p.h0 = (function(i) {
});
$p.b = (function(v1) {
  this.h0((v1 | 0));
});
$p.u = (function(i) {
  this.h0(i);
});
$p.aI = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.cX = (function() {
  return this.eG;
});
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cd)));
}
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  cd: 1,
  a2: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  A: 1,
  t: 1,
  r: 1,
  F: 1,
  B: 1,
  u: 1,
  m: 1,
  a6: 1,
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
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().k(a.t(), b.t()))) {
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
$p.cM = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.g = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.R = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.bt = (function() {
  return "LinearSeq";
});
$p.kF = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.u = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.g0 = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.fV = (function(p, from) {
  return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from);
});
$p.dQ = (function() {
  return $m_sci_List$();
});
$p.oC = (function(prefix) {
  if (this.c()) {
    return prefix;
  } else if (prefix.c()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.t(), this);
    var curr = result;
    var that = prefix.y();
    while ((!that.c())) {
      var temp = new $c_sci_$colon$colon(that.t(), this);
      curr.aS = temp;
      curr = temp;
      that = that.y();
    }
    return result;
  }
});
$p.c = (function() {
  return (this === $m_sci_Nil$());
});
$p.ct = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.oC(prefix);
  }
  if ((prefix.s() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.c()) {
      return prefix.qi();
    }
  }
  var iter = prefix.g();
  if (iter.l()) {
    var result = new $c_sci_$colon$colon(iter.e(), this);
    var curr = result;
    while (iter.l()) {
      var temp = new $c_sci_$colon$colon(iter.e(), this);
      curr.aS = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.oM = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.oC(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.sT = (function(f) {
  if ((this === $m_sci_Nil$())) {
    return $m_sci_Nil$();
  } else {
    var h = new $c_sci_$colon$colon(f.b(this.t()), $m_sci_Nil$());
    var t = h;
    var rest = this.y();
    while ((rest !== $m_sci_Nil$())) {
      var nx = new $c_sci_$colon$colon(f.b(rest.t()), $m_sci_Nil$());
      t.aS = nx;
      t = nx;
      rest = rest.y();
    }
    return h;
  }
});
$p.N = (function(f) {
  var these = this;
  while ((!these.c())) {
    f.b(these.t());
    these = these.y();
  }
});
$p.m = (function() {
  var these = this;
  var len = 0;
  while ((!these.c())) {
    len = ((1 + len) | 0);
    these = these.y();
  }
  return len;
});
$p.bd = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
});
$p.ii = (function(p) {
  var these = this;
  while ((!these.c())) {
    if ((!(!p.b(these.t())))) {
      return true;
    }
    these = these.y();
  }
  return false;
});
$p.aB = (function(elem) {
  var these = this;
  while ((!these.c())) {
    if ($m_sr_BoxesRunTime$().k(these.t(), elem)) {
      return true;
    }
    these = these.y();
  }
  return false;
});
$p.c5 = (function() {
  return "List";
});
$p.n = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.b = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.c7 = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.kn = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.cU = (function(f) {
  return this.sT(f);
});
$p.bc = (function() {
  return $m_sci_List$();
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b4)));
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
  this.e9 = null;
  this.e9 = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.m = (function() {
  return this.e9.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.p0(this.e9, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().pn(this.e9, that.e9) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.g = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.e9);
});
$p.h1 = (function(index) {
  return this.e9.a[index];
});
$p.b = (function(v1) {
  return this.h1((v1 | 0));
});
$p.u = (function(i) {
  return this.h1(i);
});
$p.aI = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.cA = (function() {
  return this.e9;
});
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cH)));
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  cH: 1,
  a3: 1,
  O: 1,
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
  n: 1,
  d: 1,
  P: 1,
  N: 1,
  Q: 1,
  M: 1,
  C: 1,
  V: 1,
  t: 1,
  r: 1,
  W: 1,
  u: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.ea = null;
  this.ea = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.m = (function() {
  return this.ea.a.length;
});
$p.gT = (function(index) {
  return this.ea.a[index];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oS(this.ea, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().ph(this.ea, that.ea) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.g = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.ea);
});
$p.b = (function(v1) {
  return this.gT((v1 | 0));
});
$p.u = (function(i) {
  return this.gT(i);
});
$p.aI = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.cA = (function() {
  return this.ea;
});
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cI)));
}
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  cI: 1,
  a3: 1,
  O: 1,
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
  n: 1,
  d: 1,
  P: 1,
  N: 1,
  Q: 1,
  M: 1,
  C: 1,
  V: 1,
  t: 1,
  r: 1,
  W: 1,
  u: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.cq = null;
  this.cq = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.m = (function() {
  return this.cq.a.length;
});
$p.gU = (function(index) {
  return this.cq.a[index];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oT(this.cq, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().pi(this.cq, that.cq) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.g = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.cq);
});
$p.en = (function(sb, start, sep, end) {
  var jsb = sb.b3;
  if ((start.length !== 0)) {
    jsb.q = (("" + jsb.q) + start);
  }
  var len = this.cq.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.oK(this.cq);
    } else {
      jsb.m();
      var c = this.cq.a[0];
      var str = ("" + $cToS(c));
      jsb.q = (jsb.q + str);
      var i = 1;
      while ((i < len)) {
        jsb.q = (("" + jsb.q) + sep);
        var c$1 = this.cq.a[i];
        var str$1 = ("" + $cToS(c$1));
        jsb.q = (jsb.q + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  if ((end.length !== 0)) {
    jsb.q = (("" + jsb.q) + end);
  }
  return sb;
});
$p.b = (function(v1) {
  return $bC(this.gU((v1 | 0)));
});
$p.u = (function(i) {
  return $bC(this.gU(i));
});
$p.aI = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.cA = (function() {
  return this.cq;
});
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cJ)));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  cJ: 1,
  a3: 1,
  O: 1,
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
  n: 1,
  d: 1,
  P: 1,
  N: 1,
  Q: 1,
  M: 1,
  C: 1,
  V: 1,
  t: 1,
  r: 1,
  W: 1,
  u: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.eb = null;
  this.eb = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.m = (function() {
  return this.eb.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oU(this.eb, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofDouble) ? $m_ju_Arrays$().pj(this.eb, that.eb) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.g = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.eb);
});
$p.gW = (function(index) {
  return this.eb.a[index];
});
$p.b = (function(v1) {
  return this.gW((v1 | 0));
});
$p.u = (function(i) {
  return this.gW(i);
});
$p.aI = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.cA = (function() {
  return this.eb;
});
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cK)));
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  cK: 1,
  a3: 1,
  O: 1,
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
  n: 1,
  d: 1,
  P: 1,
  N: 1,
  Q: 1,
  M: 1,
  C: 1,
  V: 1,
  t: 1,
  r: 1,
  W: 1,
  u: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.ec = null;
  this.ec = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.m = (function() {
  return this.ec.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oV(this.ec, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofFloat) ? $m_ju_Arrays$().pk(this.ec, that.ec) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.g = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.ec);
});
$p.gX = (function(index) {
  return this.ec.a[index];
});
$p.b = (function(v1) {
  return this.gX((v1 | 0));
});
$p.u = (function(i) {
  return this.gX(i);
});
$p.aI = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.cA = (function() {
  return this.ec;
});
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cL)));
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  cL: 1,
  a3: 1,
  O: 1,
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
  n: 1,
  d: 1,
  P: 1,
  N: 1,
  Q: 1,
  M: 1,
  C: 1,
  V: 1,
  t: 1,
  r: 1,
  W: 1,
  u: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.ed = null;
  this.ed = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.m = (function() {
  return this.ed.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oW(this.ed, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().ih(this.ed, that.ed) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.g = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.ed);
});
$p.gY = (function(index) {
  return this.ed.a[index];
});
$p.b = (function(v1) {
  return this.gY((v1 | 0));
});
$p.u = (function(i) {
  return this.gY(i);
});
$p.aI = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.cA = (function() {
  return this.ed;
});
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cM)));
}
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
  cM: 1,
  a3: 1,
  O: 1,
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
  n: 1,
  d: 1,
  P: 1,
  N: 1,
  Q: 1,
  M: 1,
  C: 1,
  V: 1,
  t: 1,
  r: 1,
  W: 1,
  u: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.ee = null;
  this.ee = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.m = (function() {
  return this.ee.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oX(this.ee, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().pl(this.ee, that.ee) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.g = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.ee);
});
$p.gZ = (function(index) {
  return this.ee.a[index];
});
$p.b = (function(v1) {
  return this.gZ((v1 | 0));
});
$p.u = (function(i) {
  return this.gZ(i);
});
$p.aI = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.cA = (function() {
  return this.ee;
});
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cN)));
}
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
  cN: 1,
  a3: 1,
  O: 1,
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
  n: 1,
  d: 1,
  P: 1,
  N: 1,
  Q: 1,
  M: 1,
  C: 1,
  V: 1,
  t: 1,
  r: 1,
  W: 1,
  u: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.dF = null;
  this.dF = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.aI = (function() {
  return $m_s_reflect_ClassTag$().oO($objectGetClass(this.dF).C.Q());
});
$p.m = (function() {
  return this.dF.a.length;
});
$p.u = (function(index) {
  return this.dF.a[index];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oR(this.dF, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().po(this.dF, that.dF) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.g = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.dF);
});
$p.b = (function(v1) {
  return this.u((v1 | 0));
});
$p.cA = (function() {
  return this.dF;
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cO)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  cO: 1,
  a3: 1,
  O: 1,
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
  n: 1,
  d: 1,
  P: 1,
  N: 1,
  Q: 1,
  M: 1,
  C: 1,
  V: 1,
  t: 1,
  r: 1,
  W: 1,
  u: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.ef = null;
  this.ef = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.m = (function() {
  return this.ef.a.length;
});
$p.gV = (function(index) {
  return this.ef.a[index];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oY(this.ef, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().pm(this.ef, that.ef) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.g = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.ef);
});
$p.b = (function(v1) {
  return this.gV((v1 | 0));
});
$p.u = (function(i) {
  return this.gV(i);
});
$p.aI = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.cA = (function() {
  return this.ef;
});
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cP)));
}
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  cP: 1,
  a3: 1,
  O: 1,
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
  n: 1,
  d: 1,
  P: 1,
  N: 1,
  Q: 1,
  M: 1,
  C: 1,
  V: 1,
  t: 1,
  r: 1,
  W: 1,
  u: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.eW = null;
  this.eW = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.m = (function() {
  return this.eW.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oZ(this.eW, this$1.aQ);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.eW.a.length === that.eW.a.length) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.g = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.eW);
});
$p.h0 = (function(index) {
});
$p.b = (function(v1) {
  this.h0((v1 | 0));
});
$p.u = (function(i) {
  this.h0(i);
});
$p.aI = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.cA = (function() {
  return this.eW;
});
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cQ)));
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  cQ: 1,
  a3: 1,
  O: 1,
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
  n: 1,
  d: 1,
  P: 1,
  N: 1,
  Q: 1,
  M: 1,
  C: 1,
  V: 1,
  t: 1,
  r: 1,
  W: 1,
  u: 1,
  m: 1,
  a: 1
}));
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.i3)));
}
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.f = suffix1;
  $thiz.h = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.d = null;
  this.f = null;
  this.h = 0;
}
$p = $c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
}
$h_sci_BigVector.prototype = $p;
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
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
    throw this.b5(index);
  }
});
$p.dS = (function(index, elem) {
  if (((index >= 0) && (index < this.d.a.length))) {
    var a1 = this.d;
    var a1c = a1.j();
    a1c.a[index] = elem;
    return new $c_sci_Vector1(a1c);
  } else {
    throw this.b5(index);
  }
});
$p.bq = (function(elem) {
  if ((this.d.a.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().fN(this.d, elem));
  } else {
    var $x_2 = this.d;
    var $x_1 = $m_sci_VectorStatics$().aj;
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.f6 = (function(elem) {
  var len1 = this.d.a.length;
  if ((len1 < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().fO(elem, this.d));
  } else {
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2(a, 1, $m_sci_VectorStatics$().aj, this.d, ((1 + len1) | 0));
  }
});
$p.c8 = (function(f) {
  return new $c_sci_Vector1($m_sci_VectorStatics$().cB(this.d, f));
});
$p.cY = (function() {
  return 1;
});
$p.de = (function(idx) {
  return this.d;
});
$p.c4 = (function(suffix, k) {
  var data1b = $m_sci_VectorStatics$().fK(this.d, suffix);
  return ((data1b !== null) ? new $c_sci_Vector1(data1b) : $c_sci_Vector.prototype.c4.call(this, suffix, k));
});
$p.cU = (function(f) {
  return this.c8(f);
});
$p.R = (function(elem) {
  return this.bq(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.d.a.length))) {
    return this.d.a[index];
  } else {
    throw this.b5(index);
  }
});
function $isArrayOf_sci_Vector1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cA)));
}
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  cA: 1,
  an: 1,
  aj: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  A: 1,
  t: 1,
  r: 1,
  F: 1,
  B: 1,
  u: 1,
  m: 1,
  L: 1,
  a: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.jH = null;
  this.aS = null;
  this.jH = head;
  this.aS = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.t = (function() {
  return this.jH;
});
$p.bg = (function() {
  return "::";
});
$p.be = (function() {
  return 2;
});
$p.bf = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.jH;
      break;
    }
    case 1: {
      return this.aS;
      break;
    }
    default: {
      return $m_sr_Statics$().es(x$1);
    }
  }
});
$p.by = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.y = (function() {
  return this.aS;
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  gT: 1,
  b4: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  b2: 1,
  aA: 1,
  aY: 1,
  b3: 1,
  c3: 1,
  u: 1,
  m: 1,
  B: 1,
  L: 1,
  a: 1,
  D: 1
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
$p.kB = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.tT = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.s = (function() {
  return 0;
});
$p.g = (function() {
  return $m_sc_Iterator$().E;
});
$p.bg = (function() {
  return "Nil";
});
$p.be = (function() {
  return 0;
});
$p.bf = (function(x$1) {
  return $m_sr_Statics$().es(x$1);
});
$p.by = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.y = (function() {
  this.tT();
});
$p.t = (function() {
  this.kB();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  hs: 1,
  b4: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  b2: 1,
  aA: 1,
  aY: 1,
  b3: 1,
  c3: 1,
  u: 1,
  m: 1,
  B: 1,
  L: 1,
  a: 1,
  D: 1
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
  this.f = null;
  this.h = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().jV, $m_sci_VectorStatics$().jV, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.oN = (function(index) {
  throw this.b5(index);
});
$p.dS = (function(index, elem) {
  throw this.b5(index);
});
$p.bq = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.f6 = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.c8 = (function(f) {
  return this;
});
$p.cY = (function() {
  return 0;
});
$p.de = (function(idx) {
  return null;
});
$p.n = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)));
});
$p.c4 = (function(suffix, k) {
  return $m_sci_Vector$().bs(suffix);
});
$p.b5 = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.cU = (function(f) {
  return this;
});
$p.R = (function(elem) {
  return this.bq(elem);
});
$p.b = (function(v1) {
  this.oN((v1 | 0));
});
$p.u = (function(i) {
  this.oN(i);
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  hM: 1,
  am: 1,
  an: 1,
  aj: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  A: 1,
  t: 1,
  r: 1,
  F: 1,
  B: 1,
  u: 1,
  m: 1,
  L: 1,
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
  this.f = null;
  this.h = 0;
  this.bm = 0;
  this.b1 = null;
  this.bm = len1;
  this.b1 = data2;
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
    var io = ((index - this.bm) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.b1.a.length) ? this.b1.a[i2].a[i1] : this.f.a[(31 & io)]);
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b5(index);
  }
});
$p.dS = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.bm)) {
      var io = ((index - this.bm) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.b1.a.length)) {
        var a2 = this.b1;
        var a2c = a2.j();
        var a1 = a2c.a[i2];
        var a1c = a1.j();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        return new $c_sci_Vector2(this.d, this.bm, a2c, this.f, this.h);
      } else {
        var a1$1 = this.f;
        var a1c$1 = a1$1.j();
        a1c$1.a[i1] = elem;
        return new $c_sci_Vector2(this.d, this.bm, this.b1, a1c$1, this.h);
      }
    } else {
      var a1$2 = this.d;
      var a1c$2 = a1$2.j();
      a1c$2.a[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.bm, this.b1, this.f, this.h);
    }
  } else {
    throw this.b5(index);
  }
});
$p.bq = (function(elem) {
  if ((this.f.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().fN(this.f, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector2(this.d, this.bm, this.b1, x$1, x$2);
  } else if ((this.b1.a.length < 30)) {
    var x$6 = $m_sci_VectorStatics$().H(this.b1, this.f);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$8 = ((1 + this.h) | 0);
    return new $c_sci_Vector2(this.d, this.bm, x$6, a, x$8);
  } else {
    var $x_5 = this.d;
    var $x_4 = this.bm;
    var $x_3 = this.b1;
    var $x_2 = this.bm;
    var $x_1 = $m_sci_VectorStatics$().bn;
    var x = this.f;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.a[0] = x;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.h) | 0));
  }
});
$p.f6 = (function(elem) {
  if ((this.bm < 32)) {
    var x$1 = $m_sci_VectorStatics$().fO(elem, this.d);
    var x$2 = ((1 + this.bm) | 0);
    var x$3 = ((1 + this.h) | 0);
    return new $c_sci_Vector2(x$1, x$2, this.b1, this.f, x$3);
  } else if ((this.b1.a.length < 30)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$8 = $m_sci_VectorStatics$().D(this.d, this.b1);
    var x$9 = ((1 + this.h) | 0);
    return new $c_sci_Vector2(a, 1, x$8, this.f, x$9);
  } else {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x = this.d;
    var a$2 = new ($d_O.r().r().C)(1);
    a$2.a[0] = x;
    return new $c_sci_Vector3(a$1, 1, a$2, ((1 + this.bm) | 0), $m_sci_VectorStatics$().bn, this.b1, this.f, ((1 + this.h) | 0));
  }
});
$p.c8 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cB(this.d, f);
  var x$2 = $m_sci_VectorStatics$().ay(2, this.b1, f);
  var x$3 = $m_sci_VectorStatics$().cB(this.f, f);
  return new $c_sci_Vector2(x$1, this.bm, x$2, x$3, this.h);
});
$p.cY = (function() {
  return 3;
});
$p.de = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
      break;
    }
    case 1: {
      return this.b1;
      break;
    }
    case 2: {
      return this.f;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.c4 = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().fK(this.f, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.f.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector2(this.d, this.bm, this.b1, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.c4.call(this, suffix, k);
  }
});
$p.cU = (function(f) {
  return this.c8(f);
});
$p.R = (function(elem) {
  return this.bq(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.bm) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.b1.a.length) ? this.b1.a[i2].a[i1] : this.f.a[(31 & io)]);
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b5(index);
  }
});
function $isArrayOf_sci_Vector2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cB)));
}
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  cB: 1,
  am: 1,
  an: 1,
  aj: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  A: 1,
  t: 1,
  r: 1,
  F: 1,
  B: 1,
  u: 1,
  m: 1,
  L: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.d = null;
  this.f = null;
  this.h = 0;
  this.b9 = 0;
  this.ba = null;
  this.aU = 0;
  this.aF = null;
  this.aL = null;
  this.b9 = len1;
  this.ba = prefix2;
  this.aU = len12;
  this.aF = data3;
  this.aL = suffix2;
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
    var io = ((index - this.aU) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aF.a.length) ? this.aF.a[i3].a[i2].a[i1] : ((i2 < this.aL.a.length) ? this.aL.a[i2].a[i1] : this.f.a[i1]));
    } else if ((index >= this.b9)) {
      var io$2 = ((index - this.b9) | 0);
      return this.ba.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b5(index);
  }
});
$p.dS = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.aU)) {
      var io = ((index - this.aU) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.aF.a.length)) {
        var a3 = this.aF;
        var a3c = a3.j();
        var a2 = a3c.a[i3];
        var a2c = a2.j();
        var a1 = a2c.a[i2];
        var a1c = a1.j();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        return new $c_sci_Vector3(this.d, this.b9, this.ba, this.aU, a3c, this.aL, this.f, this.h);
      } else if ((i2 < this.aL.a.length)) {
        var a2$1 = this.aL;
        var a2c$1 = a2$1.j();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.j();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        return new $c_sci_Vector3(this.d, this.b9, this.ba, this.aU, this.aF, a2c$1, this.f, this.h);
      } else {
        var a1$2 = this.f;
        var a1c$2 = a1$2.j();
        a1c$2.a[i1] = elem;
        return new $c_sci_Vector3(this.d, this.b9, this.ba, this.aU, this.aF, this.aL, a1c$2, this.h);
      }
    } else if ((index >= this.b9)) {
      var io$2 = ((index - this.b9) | 0);
      var a2$2 = this.ba;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.j();
      var a1$3 = a2c$2.a[idx2];
      var a1c$3 = a1$3.j();
      a1c$3.a[idx1] = elem;
      a2c$2.a[idx2] = a1c$3;
      return new $c_sci_Vector3(this.d, this.b9, a2c$2, this.aU, this.aF, this.aL, this.f, this.h);
    } else {
      var a1$4 = this.d;
      var a1c$4 = a1$4.j();
      a1c$4.a[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.b9, this.ba, this.aU, this.aF, this.aL, this.f, this.h);
    }
  } else {
    throw this.b5(index);
  }
});
$p.bq = (function(elem) {
  if ((this.f.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().fN(this.f, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(this.d, this.b9, this.ba, this.aU, this.aF, this.aL, x$1, x$2);
  } else if ((this.aL.a.length < 31)) {
    var x$9 = $m_sci_VectorStatics$().H(this.aL, this.f);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$11 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(this.d, this.b9, this.ba, this.aU, this.aF, x$9, a, x$11);
  } else if ((this.aF.a.length < 30)) {
    var x$17 = $m_sci_VectorStatics$().H(this.aF, $m_sci_VectorStatics$().H(this.aL, this.f));
    var x$18 = $m_sci_VectorStatics$().aj;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$20 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(this.d, this.b9, this.ba, this.aU, x$17, x$18, a$1, x$20);
  } else {
    var $x_8 = this.d;
    var $x_7 = this.b9;
    var $x_6 = this.ba;
    var $x_5 = this.aU;
    var $x_4 = this.aF;
    var $x_3 = this.aU;
    var $x_2 = $m_sci_VectorStatics$().cJ;
    var x = $m_sci_VectorStatics$().H(this.aL, this.f);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().aj;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.h) | 0));
  }
});
$p.f6 = (function(elem) {
  if ((this.b9 < 32)) {
    var x$1 = $m_sci_VectorStatics$().fO(elem, this.d);
    var x$2 = ((1 + this.b9) | 0);
    var x$3 = ((1 + this.aU) | 0);
    var x$4 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(x$1, x$2, this.ba, x$3, this.aF, this.aL, this.f, x$4);
  } else if ((this.aU < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$11 = $m_sci_VectorStatics$().D(this.d, this.ba);
    var x$12 = ((1 + this.aU) | 0);
    var x$13 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(a, 1, x$11, x$12, this.aF, this.aL, this.f, x$13);
  } else if ((this.aF.a.length < 30)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$19 = $m_sci_VectorStatics$().aj;
    var x$21 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.ba), this.aF);
    var x$22 = ((1 + this.h) | 0);
    return new $c_sci_Vector3(a$1, 1, x$19, 1, x$21, this.aL, this.f, x$22);
  } else {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var $x_1 = $m_sci_VectorStatics$().aj;
    var x = $m_sci_VectorStatics$().D(this.d, this.ba);
    var a$3 = new ($d_O.r().r().r().C)(1);
    a$3.a[0] = x;
    return new $c_sci_Vector4(a$2, 1, $x_1, 1, a$3, ((1 + this.aU) | 0), $m_sci_VectorStatics$().cJ, this.aF, this.aL, this.f, ((1 + this.h) | 0));
  }
});
$p.c8 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cB(this.d, f);
  var x$2 = $m_sci_VectorStatics$().ay(2, this.ba, f);
  var x$3 = $m_sci_VectorStatics$().ay(3, this.aF, f);
  var x$4 = $m_sci_VectorStatics$().ay(2, this.aL, f);
  var x$5 = $m_sci_VectorStatics$().cB(this.f, f);
  return new $c_sci_Vector3(x$1, this.b9, x$2, this.aU, x$3, x$4, x$5, this.h);
});
$p.cY = (function() {
  return 5;
});
$p.de = (function(idx) {
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
      return this.aF;
      break;
    }
    case 3: {
      return this.aL;
      break;
    }
    case 4: {
      return this.f;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.c4 = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().fK(this.f, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.f.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector3(this.d, this.b9, this.ba, this.aU, this.aF, this.aL, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.c4.call(this, suffix, k);
  }
});
$p.cU = (function(f) {
  return this.c8(f);
});
$p.R = (function(elem) {
  return this.bq(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.aU) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aF.a.length) ? this.aF.a[i3].a[i2].a[i1] : ((i2 < this.aL.a.length) ? this.aL.a[i2].a[i1] : this.f.a[i1]));
    } else if ((index >= this.b9)) {
      var io$2 = ((index - this.b9) | 0);
      return this.ba.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b5(index);
  }
});
function $isArrayOf_sci_Vector3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cC)));
}
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  cC: 1,
  am: 1,
  an: 1,
  aj: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  A: 1,
  t: 1,
  r: 1,
  F: 1,
  B: 1,
  u: 1,
  m: 1,
  L: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.d = null;
  this.f = null;
  this.h = 0;
  this.aV = 0;
  this.aN = null;
  this.aM = 0;
  this.aO = null;
  this.aw = 0;
  this.ah = null;
  this.am = null;
  this.al = null;
  this.aV = len1;
  this.aN = prefix2;
  this.aM = len12;
  this.aO = prefix3;
  this.aw = len123;
  this.ah = data4;
  this.am = suffix3;
  this.al = suffix2;
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
    var io = ((index - this.aw) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.ah.a.length) ? this.ah.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.am.a.length) ? this.am.a[i3].a[i2].a[i1] : ((i2 < this.al.a.length) ? this.al.a[i2].a[i1] : this.f.a[i1])));
    } else if ((index >= this.aM)) {
      var io$2 = ((index - this.aM) | 0);
      return this.aO.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aV)) {
      var io$3 = ((index - this.aV) | 0);
      return this.aN.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b5(index);
  }
});
$p.dS = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.aw)) {
      var io = ((index - this.aw) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.ah.a.length)) {
        var a4 = this.ah;
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
        return new $c_sci_Vector4(this.d, this.aV, this.aN, this.aM, this.aO, this.aw, a4c, this.am, this.al, this.f, this.h);
      } else if ((i3 < this.am.a.length)) {
        var a3$1 = this.am;
        var a3c$1 = a3$1.j();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.j();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.j();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        return new $c_sci_Vector4(this.d, this.aV, this.aN, this.aM, this.aO, this.aw, this.ah, a3c$1, this.al, this.f, this.h);
      } else if ((i2 < this.al.a.length)) {
        var a2$2 = this.al;
        var a2c$2 = a2$2.j();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.j();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        return new $c_sci_Vector4(this.d, this.aV, this.aN, this.aM, this.aO, this.aw, this.ah, this.am, a2c$2, this.f, this.h);
      } else {
        var a1$3 = this.f;
        var a1c$3 = a1$3.j();
        a1c$3.a[i1] = elem;
        return new $c_sci_Vector4(this.d, this.aV, this.aN, this.aM, this.aO, this.aw, this.ah, this.am, this.al, a1c$3, this.h);
      }
    } else if ((index >= this.aM)) {
      var io$2 = ((index - this.aM) | 0);
      var a3$2 = this.aO;
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
      return new $c_sci_Vector4(this.d, this.aV, this.aN, this.aM, a3c$2, this.aw, this.ah, this.am, this.al, this.f, this.h);
    } else if ((index >= this.aV)) {
      var io$3 = ((index - this.aV) | 0);
      var a2$4 = this.aN;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.j();
      var a1$5 = a2c$4.a[idx2$1];
      var a1c$5 = a1$5.j();
      a1c$5.a[idx1$1] = elem;
      a2c$4.a[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.d, this.aV, a2c$4, this.aM, this.aO, this.aw, this.ah, this.am, this.al, this.f, this.h);
    } else {
      var a1$6 = this.d;
      var a1c$6 = a1$6.j();
      a1c$6.a[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.aV, this.aN, this.aM, this.aO, this.aw, this.ah, this.am, this.al, this.f, this.h);
    }
  } else {
    throw this.b5(index);
  }
});
$p.bq = (function(elem) {
  if ((this.f.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().fN(this.f, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.d, this.aV, this.aN, this.aM, this.aO, this.aw, this.ah, this.am, this.al, x$1, x$2);
  } else if ((this.al.a.length < 31)) {
    var x$12 = $m_sci_VectorStatics$().H(this.al, this.f);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$14 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.d, this.aV, this.aN, this.aM, this.aO, this.aw, this.ah, this.am, x$12, a, x$14);
  } else if ((this.am.a.length < 31)) {
    var x$23 = $m_sci_VectorStatics$().H(this.am, $m_sci_VectorStatics$().H(this.al, this.f));
    var x$24 = $m_sci_VectorStatics$().aj;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$26 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.d, this.aV, this.aN, this.aM, this.aO, this.aw, this.ah, x$23, x$24, a$1, x$26);
  } else if ((this.ah.a.length < 30)) {
    var x$34 = $m_sci_VectorStatics$().H(this.ah, $m_sci_VectorStatics$().H(this.am, $m_sci_VectorStatics$().H(this.al, this.f)));
    var x$35 = $m_sci_VectorStatics$().bn;
    var x$36 = $m_sci_VectorStatics$().aj;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$38 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(this.d, this.aV, this.aN, this.aM, this.aO, this.aw, x$34, x$35, x$36, a$2, x$38);
  } else {
    var $x_11 = this.d;
    var $x_10 = this.aV;
    var $x_9 = this.aN;
    var $x_8 = this.aM;
    var $x_7 = this.aO;
    var $x_6 = this.aw;
    var $x_5 = this.ah;
    var $x_4 = this.aw;
    var $x_3 = $m_sci_VectorStatics$().gK;
    var x = $m_sci_VectorStatics$().H(this.am, $m_sci_VectorStatics$().H(this.al, this.f));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().bn;
    var $x_1 = $m_sci_VectorStatics$().aj;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.h) | 0));
  }
});
$p.f6 = (function(elem) {
  if ((this.aV < 32)) {
    var x$1 = $m_sci_VectorStatics$().fO(elem, this.d);
    var x$2 = ((1 + this.aV) | 0);
    var x$3 = ((1 + this.aM) | 0);
    var x$4 = ((1 + this.aw) | 0);
    var x$5 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(x$1, x$2, this.aN, x$3, this.aO, x$4, this.ah, this.am, this.al, this.f, x$5);
  } else if ((this.aM < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$14 = $m_sci_VectorStatics$().D(this.d, this.aN);
    var x$15 = ((1 + this.aM) | 0);
    var x$16 = ((1 + this.aw) | 0);
    var x$17 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(a, 1, x$14, x$15, this.aO, x$16, this.ah, this.am, this.al, this.f, x$17);
  } else if ((this.aw < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$25 = $m_sci_VectorStatics$().aj;
    var x$27 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.aN), this.aO);
    var x$28 = ((1 + this.aw) | 0);
    var x$29 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(a$1, 1, x$25, 1, x$27, x$28, this.ah, this.am, this.al, this.f, x$29);
  } else if ((this.ah.a.length < 30)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$36 = $m_sci_VectorStatics$().aj;
    var x$38 = $m_sci_VectorStatics$().bn;
    var x$40 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.aN), this.aO), this.ah);
    var x$41 = ((1 + this.h) | 0);
    return new $c_sci_Vector4(a$2, 1, x$36, 1, x$38, 1, x$40, this.am, this.al, this.f, x$41);
  } else {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var $x_2 = $m_sci_VectorStatics$().aj;
    var $x_1 = $m_sci_VectorStatics$().bn;
    var x = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.aN), this.aO);
    var a$4 = new ($d_O.r().r().r().r().C)(1);
    a$4.a[0] = x;
    return new $c_sci_Vector5(a$3, 1, $x_2, 1, $x_1, 1, a$4, ((1 + this.aw) | 0), $m_sci_VectorStatics$().gK, this.ah, this.am, this.al, this.f, ((1 + this.h) | 0));
  }
});
$p.c8 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cB(this.d, f);
  var x$2 = $m_sci_VectorStatics$().ay(2, this.aN, f);
  var x$3 = $m_sci_VectorStatics$().ay(3, this.aO, f);
  var x$4 = $m_sci_VectorStatics$().ay(4, this.ah, f);
  var x$5 = $m_sci_VectorStatics$().ay(3, this.am, f);
  var x$6 = $m_sci_VectorStatics$().ay(2, this.al, f);
  var x$7 = $m_sci_VectorStatics$().cB(this.f, f);
  return new $c_sci_Vector4(x$1, this.aV, x$2, this.aM, x$3, this.aw, x$4, x$5, x$6, x$7, this.h);
});
$p.cY = (function() {
  return 7;
});
$p.de = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
      break;
    }
    case 1: {
      return this.aN;
      break;
    }
    case 2: {
      return this.aO;
      break;
    }
    case 3: {
      return this.ah;
      break;
    }
    case 4: {
      return this.am;
      break;
    }
    case 5: {
      return this.al;
      break;
    }
    case 6: {
      return this.f;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.c4 = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().fK(this.f, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.f.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector4(this.d, this.aV, this.aN, this.aM, this.aO, this.aw, this.ah, this.am, this.al, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.c4.call(this, suffix, k);
  }
});
$p.cU = (function(f) {
  return this.c8(f);
});
$p.R = (function(elem) {
  return this.bq(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.aw) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.ah.a.length) ? this.ah.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.am.a.length) ? this.am.a[i3].a[i2].a[i1] : ((i2 < this.al.a.length) ? this.al.a[i2].a[i1] : this.f.a[i1])));
    } else if ((index >= this.aM)) {
      var io$2 = ((index - this.aM) | 0);
      return this.aO.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aV)) {
      var io$3 = ((index - this.aV) | 0);
      return this.aN.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b5(index);
  }
});
function $isArrayOf_sci_Vector4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cD)));
}
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  cD: 1,
  am: 1,
  an: 1,
  aj: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  A: 1,
  t: 1,
  r: 1,
  F: 1,
  B: 1,
  u: 1,
  m: 1,
  L: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.d = null;
  this.f = null;
  this.h = 0;
  this.aA = 0;
  this.ao = null;
  this.ax = 0;
  this.ap = null;
  this.an = 0;
  this.aq = null;
  this.a5 = 0;
  this.Y = null;
  this.a2 = null;
  this.a1 = null;
  this.a0 = null;
  this.aA = len1;
  this.ao = prefix2;
  this.ax = len12;
  this.ap = prefix3;
  this.an = len123;
  this.aq = prefix4;
  this.a5 = len1234;
  this.Y = data5;
  this.a2 = suffix4;
  this.a1 = suffix3;
  this.a0 = suffix2;
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
    var io = ((index - this.a5) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.Y.a.length) ? this.Y.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a2.a.length) ? this.a2.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a1.a.length) ? this.a1.a[i3].a[i2].a[i1] : ((i2 < this.a0.a.length) ? this.a0.a[i2].a[i1] : this.f.a[i1]))));
    } else if ((index >= this.an)) {
      var io$2 = ((index - this.an) | 0);
      return this.aq.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ax)) {
      var io$3 = ((index - this.ax) | 0);
      return this.ap.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aA)) {
      var io$4 = ((index - this.aA) | 0);
      return this.ao.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b5(index);
  }
});
$p.dS = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.a5)) {
      var io = ((index - this.a5) | 0);
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i5 < this.Y.a.length)) {
        var a5 = this.Y;
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
        return new $c_sci_Vector5(this.d, this.aA, this.ao, this.ax, this.ap, this.an, this.aq, this.a5, a5c, this.a2, this.a1, this.a0, this.f, this.h);
      } else if ((i4 < this.a2.a.length)) {
        var a4$1 = this.a2;
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
        return new $c_sci_Vector5(this.d, this.aA, this.ao, this.ax, this.ap, this.an, this.aq, this.a5, this.Y, a4c$1, this.a1, this.a0, this.f, this.h);
      } else if ((i3 < this.a1.a.length)) {
        var a3$2 = this.a1;
        var a3c$2 = a3$2.j();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.j();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.j();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        return new $c_sci_Vector5(this.d, this.aA, this.ao, this.ax, this.ap, this.an, this.aq, this.a5, this.Y, this.a2, a3c$2, this.a0, this.f, this.h);
      } else if ((i2 < this.a0.a.length)) {
        var a2$3 = this.a0;
        var a2c$3 = a2$3.j();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.j();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        return new $c_sci_Vector5(this.d, this.aA, this.ao, this.ax, this.ap, this.an, this.aq, this.a5, this.Y, this.a2, this.a1, a2c$3, this.f, this.h);
      } else {
        var a1$4 = this.f;
        var a1c$4 = a1$4.j();
        a1c$4.a[i1] = elem;
        return new $c_sci_Vector5(this.d, this.aA, this.ao, this.ax, this.ap, this.an, this.aq, this.a5, this.Y, this.a2, this.a1, this.a0, a1c$4, this.h);
      }
    } else if ((index >= this.an)) {
      var io$2 = ((index - this.an) | 0);
      var a4$2 = this.aq;
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
      return new $c_sci_Vector5(this.d, this.aA, this.ao, this.ax, this.ap, this.an, a4c$2, this.a5, this.Y, this.a2, this.a1, this.a0, this.f, this.h);
    } else if ((index >= this.ax)) {
      var io$3 = ((index - this.ax) | 0);
      var a3$4 = this.ap;
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
      return new $c_sci_Vector5(this.d, this.aA, this.ao, this.ax, a3c$4, this.an, this.aq, this.a5, this.Y, this.a2, this.a1, this.a0, this.f, this.h);
    } else if ((index >= this.aA)) {
      var io$4 = ((index - this.aA) | 0);
      var a2$6 = this.ao;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.j();
      var a1$7 = a2c$6.a[idx2$2];
      var a1c$7 = a1$7.j();
      a1c$7.a[idx1$2] = elem;
      a2c$6.a[idx2$2] = a1c$7;
      return new $c_sci_Vector5(this.d, this.aA, a2c$6, this.ax, this.ap, this.an, this.aq, this.a5, this.Y, this.a2, this.a1, this.a0, this.f, this.h);
    } else {
      var a1$8 = this.d;
      var a1c$8 = a1$8.j();
      a1c$8.a[index] = elem;
      return new $c_sci_Vector5(a1c$8, this.aA, this.ao, this.ax, this.ap, this.an, this.aq, this.a5, this.Y, this.a2, this.a1, this.a0, this.f, this.h);
    }
  } else {
    throw this.b5(index);
  }
});
$p.bq = (function(elem) {
  if ((this.f.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().fN(this.f, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.d, this.aA, this.ao, this.ax, this.ap, this.an, this.aq, this.a5, this.Y, this.a2, this.a1, this.a0, x$1, x$2);
  } else if ((this.a0.a.length < 31)) {
    var x$15 = $m_sci_VectorStatics$().H(this.a0, this.f);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$17 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.d, this.aA, this.ao, this.ax, this.ap, this.an, this.aq, this.a5, this.Y, this.a2, this.a1, x$15, a, x$17);
  } else if ((this.a1.a.length < 31)) {
    var x$29 = $m_sci_VectorStatics$().H(this.a1, $m_sci_VectorStatics$().H(this.a0, this.f));
    var x$30 = $m_sci_VectorStatics$().aj;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$32 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.d, this.aA, this.ao, this.ax, this.ap, this.an, this.aq, this.a5, this.Y, this.a2, x$29, x$30, a$1, x$32);
  } else if ((this.a2.a.length < 31)) {
    var x$43 = $m_sci_VectorStatics$().H(this.a2, $m_sci_VectorStatics$().H(this.a1, $m_sci_VectorStatics$().H(this.a0, this.f)));
    var x$44 = $m_sci_VectorStatics$().bn;
    var x$45 = $m_sci_VectorStatics$().aj;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$47 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.d, this.aA, this.ao, this.ax, this.ap, this.an, this.aq, this.a5, this.Y, x$43, x$44, x$45, a$2, x$47);
  } else if ((this.Y.a.length < 30)) {
    var x$57 = $m_sci_VectorStatics$().H(this.Y, $m_sci_VectorStatics$().H(this.a2, $m_sci_VectorStatics$().H(this.a1, $m_sci_VectorStatics$().H(this.a0, this.f))));
    var x$58 = $m_sci_VectorStatics$().cJ;
    var x$59 = $m_sci_VectorStatics$().bn;
    var x$60 = $m_sci_VectorStatics$().aj;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$62 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(this.d, this.aA, this.ao, this.ax, this.ap, this.an, this.aq, this.a5, x$57, x$58, x$59, x$60, a$3, x$62);
  } else {
    var $x_14 = this.d;
    var $x_13 = this.aA;
    var $x_12 = this.ao;
    var $x_11 = this.ax;
    var $x_10 = this.ap;
    var $x_9 = this.an;
    var $x_8 = this.aq;
    var $x_7 = this.a5;
    var $x_6 = this.Y;
    var $x_5 = this.a5;
    var $x_4 = $m_sci_VectorStatics$().jW;
    var x = $m_sci_VectorStatics$().H(this.a2, $m_sci_VectorStatics$().H(this.a1, $m_sci_VectorStatics$().H(this.a0, this.f)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().cJ;
    var $x_2 = $m_sci_VectorStatics$().bn;
    var $x_1 = $m_sci_VectorStatics$().aj;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.h) | 0));
  }
});
$p.f6 = (function(elem) {
  if ((this.aA < 32)) {
    var x$1 = $m_sci_VectorStatics$().fO(elem, this.d);
    var x$2 = ((1 + this.aA) | 0);
    var x$3 = ((1 + this.ax) | 0);
    var x$4 = ((1 + this.an) | 0);
    var x$5 = ((1 + this.a5) | 0);
    var x$6 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(x$1, x$2, this.ao, x$3, this.ap, x$4, this.aq, x$5, this.Y, this.a2, this.a1, this.a0, this.f, x$6);
  } else if ((this.ax < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$17 = $m_sci_VectorStatics$().D(this.d, this.ao);
    var x$18 = ((1 + this.ax) | 0);
    var x$19 = ((1 + this.an) | 0);
    var x$20 = ((1 + this.a5) | 0);
    var x$21 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a, 1, x$17, x$18, this.ap, x$19, this.aq, x$20, this.Y, this.a2, this.a1, this.a0, this.f, x$21);
  } else if ((this.an < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$31 = $m_sci_VectorStatics$().aj;
    var x$33 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.ao), this.ap);
    var x$34 = ((1 + this.an) | 0);
    var x$35 = ((1 + this.a5) | 0);
    var x$36 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a$1, 1, x$31, 1, x$33, x$34, this.aq, x$35, this.Y, this.a2, this.a1, this.a0, this.f, x$36);
  } else if ((this.a5 < 1048576)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$45 = $m_sci_VectorStatics$().aj;
    var x$47 = $m_sci_VectorStatics$().bn;
    var x$49 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.ao), this.ap), this.aq);
    var x$50 = ((1 + this.a5) | 0);
    var x$51 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a$2, 1, x$45, 1, x$47, 1, x$49, x$50, this.Y, this.a2, this.a1, this.a0, this.f, x$51);
  } else if ((this.Y.a.length < 30)) {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$59 = $m_sci_VectorStatics$().aj;
    var x$61 = $m_sci_VectorStatics$().bn;
    var x$63 = $m_sci_VectorStatics$().cJ;
    var x$65 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.ao), this.ap), this.aq), this.Y);
    var x$66 = ((1 + this.h) | 0);
    return new $c_sci_Vector5(a$3, 1, x$59, 1, x$61, 1, x$63, 1, x$65, this.a2, this.a1, this.a0, this.f, x$66);
  } else {
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var $x_3 = $m_sci_VectorStatics$().aj;
    var $x_2 = $m_sci_VectorStatics$().bn;
    var $x_1 = $m_sci_VectorStatics$().cJ;
    var x = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.ao), this.ap), this.aq);
    var a$5 = new ($d_O.r().r().r().r().r().C)(1);
    a$5.a[0] = x;
    return new $c_sci_Vector6(a$4, 1, $x_3, 1, $x_2, 1, $x_1, 1, a$5, ((1 + this.a5) | 0), $m_sci_VectorStatics$().jW, this.Y, this.a2, this.a1, this.a0, this.f, ((1 + this.h) | 0));
  }
});
$p.c8 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cB(this.d, f);
  var x$2 = $m_sci_VectorStatics$().ay(2, this.ao, f);
  var x$3 = $m_sci_VectorStatics$().ay(3, this.ap, f);
  var x$4 = $m_sci_VectorStatics$().ay(4, this.aq, f);
  var x$5 = $m_sci_VectorStatics$().ay(5, this.Y, f);
  var x$6 = $m_sci_VectorStatics$().ay(4, this.a2, f);
  var x$7 = $m_sci_VectorStatics$().ay(3, this.a1, f);
  var x$8 = $m_sci_VectorStatics$().ay(2, this.a0, f);
  var x$9 = $m_sci_VectorStatics$().cB(this.f, f);
  return new $c_sci_Vector5(x$1, this.aA, x$2, this.ax, x$3, this.an, x$4, this.a5, x$5, x$6, x$7, x$8, x$9, this.h);
});
$p.cY = (function() {
  return 9;
});
$p.de = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
      break;
    }
    case 1: {
      return this.ao;
      break;
    }
    case 2: {
      return this.ap;
      break;
    }
    case 3: {
      return this.aq;
      break;
    }
    case 4: {
      return this.Y;
      break;
    }
    case 5: {
      return this.a2;
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
      return this.f;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.c4 = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().fK(this.f, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.f.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector5(this.d, this.aA, this.ao, this.ax, this.ap, this.an, this.aq, this.a5, this.Y, this.a2, this.a1, this.a0, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.c4.call(this, suffix, k);
  }
});
$p.cU = (function(f) {
  return this.c8(f);
});
$p.R = (function(elem) {
  return this.bq(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.a5) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.Y.a.length) ? this.Y.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a2.a.length) ? this.a2.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a1.a.length) ? this.a1.a[i3].a[i2].a[i1] : ((i2 < this.a0.a.length) ? this.a0.a[i2].a[i1] : this.f.a[i1]))));
    } else if ((index >= this.an)) {
      var io$2 = ((index - this.an) | 0);
      return this.aq.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ax)) {
      var io$3 = ((index - this.ax) | 0);
      return this.ap.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aA)) {
      var io$4 = ((index - this.aA) | 0);
      return this.ao.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b5(index);
  }
});
function $isArrayOf_sci_Vector5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cE)));
}
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  cE: 1,
  am: 1,
  an: 1,
  aj: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  A: 1,
  t: 1,
  r: 1,
  F: 1,
  B: 1,
  u: 1,
  m: 1,
  L: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.d = null;
  this.f = null;
  this.h = 0;
  this.ar = 0;
  this.ab = null;
  this.ai = 0;
  this.ac = null;
  this.aa = 0;
  this.ad = null;
  this.a6 = 0;
  this.ae = null;
  this.a3 = 0;
  this.P = null;
  this.X = null;
  this.W = null;
  this.V = null;
  this.U = null;
  this.ar = len1;
  this.ab = prefix2;
  this.ai = len12;
  this.ac = prefix3;
  this.aa = len123;
  this.ad = prefix4;
  this.a6 = len1234;
  this.ae = prefix5;
  this.a3 = len12345;
  this.P = data6;
  this.X = suffix5;
  this.W = suffix4;
  this.V = suffix3;
  this.U = suffix2;
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
    var io = ((index - this.a3) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.P.a.length) ? this.P.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.X.a.length) ? this.X.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.W.a.length) ? this.W.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.V.a.length) ? this.V.a[i3].a[i2].a[i1] : ((i2 < this.U.a.length) ? this.U.a[i2].a[i1] : this.f.a[i1])))));
    } else if ((index >= this.a6)) {
      var io$2 = ((index - this.a6) | 0);
      return this.ae.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aa)) {
      var io$3 = ((index - this.aa) | 0);
      return this.ad.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.ai)) {
      var io$4 = ((index - this.ai) | 0);
      return this.ac.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.ar)) {
      var io$5 = ((index - this.ar) | 0);
      return this.ab.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b5(index);
  }
});
$p.dS = (function(index, elem) {
  if (((index >= 0) && (index < this.h))) {
    if ((index >= this.a3)) {
      var io = ((index - this.a3) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < this.P.a.length)) {
        var a6 = this.P;
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
        return new $c_sci_Vector6(this.d, this.ar, this.ab, this.ai, this.ac, this.aa, this.ad, this.a6, this.ae, this.a3, a6c, this.X, this.W, this.V, this.U, this.f, this.h);
      } else if ((i5 < this.X.a.length)) {
        var a5$1 = this.X;
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
        return new $c_sci_Vector6(this.d, this.ar, this.ab, this.ai, this.ac, this.aa, this.ad, this.a6, this.ae, this.a3, this.P, a5c$1, this.W, this.V, this.U, this.f, this.h);
      } else if ((i4 < this.W.a.length)) {
        var a4$2 = this.W;
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
        return new $c_sci_Vector6(this.d, this.ar, this.ab, this.ai, this.ac, this.aa, this.ad, this.a6, this.ae, this.a3, this.P, this.X, a4c$2, this.V, this.U, this.f, this.h);
      } else if ((i3 < this.V.a.length)) {
        var a3$3 = this.V;
        var a3c$3 = a3$3.j();
        var a2$3 = a3c$3.a[i3];
        var a2c$3 = a2$3.j();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.j();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        a3c$3.a[i3] = a2c$3;
        return new $c_sci_Vector6(this.d, this.ar, this.ab, this.ai, this.ac, this.aa, this.ad, this.a6, this.ae, this.a3, this.P, this.X, this.W, a3c$3, this.U, this.f, this.h);
      } else if ((i2 < this.U.a.length)) {
        var a2$4 = this.U;
        var a2c$4 = a2$4.j();
        var a1$4 = a2c$4.a[i2];
        var a1c$4 = a1$4.j();
        a1c$4.a[i1] = elem;
        a2c$4.a[i2] = a1c$4;
        return new $c_sci_Vector6(this.d, this.ar, this.ab, this.ai, this.ac, this.aa, this.ad, this.a6, this.ae, this.a3, this.P, this.X, this.W, this.V, a2c$4, this.f, this.h);
      } else {
        var a1$5 = this.f;
        var a1c$5 = a1$5.j();
        a1c$5.a[i1] = elem;
        return new $c_sci_Vector6(this.d, this.ar, this.ab, this.ai, this.ac, this.aa, this.ad, this.a6, this.ae, this.a3, this.P, this.X, this.W, this.V, this.U, a1c$5, this.h);
      }
    } else if ((index >= this.a6)) {
      var io$2 = ((index - this.a6) | 0);
      var a5$2 = this.ae;
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
      return new $c_sci_Vector6(this.d, this.ar, this.ab, this.ai, this.ac, this.aa, this.ad, this.a6, a5c$2, this.a3, this.P, this.X, this.W, this.V, this.U, this.f, this.h);
    } else if ((index >= this.aa)) {
      var io$3 = ((index - this.aa) | 0);
      var a4$4 = this.ad;
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
      return new $c_sci_Vector6(this.d, this.ar, this.ab, this.ai, this.ac, this.aa, a4c$4, this.a6, this.ae, this.a3, this.P, this.X, this.W, this.V, this.U, this.f, this.h);
    } else if ((index >= this.ai)) {
      var io$4 = ((index - this.ai) | 0);
      var a3$6 = this.ac;
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
      return new $c_sci_Vector6(this.d, this.ar, this.ab, this.ai, a3c$6, this.aa, this.ad, this.a6, this.ae, this.a3, this.P, this.X, this.W, this.V, this.U, this.f, this.h);
    } else if ((index >= this.ar)) {
      var io$5 = ((index - this.ar) | 0);
      var a2$8 = this.ab;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.j();
      var a1$9 = a2c$8.a[idx2$3];
      var a1c$9 = a1$9.j();
      a1c$9.a[idx1$3] = elem;
      a2c$8.a[idx2$3] = a1c$9;
      return new $c_sci_Vector6(this.d, this.ar, a2c$8, this.ai, this.ac, this.aa, this.ad, this.a6, this.ae, this.a3, this.P, this.X, this.W, this.V, this.U, this.f, this.h);
    } else {
      var a1$10 = this.d;
      var a1c$10 = a1$10.j();
      a1c$10.a[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.ar, this.ab, this.ai, this.ac, this.aa, this.ad, this.a6, this.ae, this.a3, this.P, this.X, this.W, this.V, this.U, this.f, this.h);
    }
  } else {
    throw this.b5(index);
  }
});
$p.bq = (function(elem) {
  if ((this.f.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().fN(this.f, elem);
    var x$2 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.d, this.ar, this.ab, this.ai, this.ac, this.aa, this.ad, this.a6, this.ae, this.a3, this.P, this.X, this.W, this.V, this.U, x$1, x$2);
  } else if ((this.U.a.length < 31)) {
    var x$18 = $m_sci_VectorStatics$().H(this.U, this.f);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$20 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.d, this.ar, this.ab, this.ai, this.ac, this.aa, this.ad, this.a6, this.ae, this.a3, this.P, this.X, this.W, this.V, x$18, a, x$20);
  } else if ((this.V.a.length < 31)) {
    var x$35 = $m_sci_VectorStatics$().H(this.V, $m_sci_VectorStatics$().H(this.U, this.f));
    var x$36 = $m_sci_VectorStatics$().aj;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$38 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.d, this.ar, this.ab, this.ai, this.ac, this.aa, this.ad, this.a6, this.ae, this.a3, this.P, this.X, this.W, x$35, x$36, a$1, x$38);
  } else if ((this.W.a.length < 31)) {
    var x$52 = $m_sci_VectorStatics$().H(this.W, $m_sci_VectorStatics$().H(this.V, $m_sci_VectorStatics$().H(this.U, this.f)));
    var x$53 = $m_sci_VectorStatics$().bn;
    var x$54 = $m_sci_VectorStatics$().aj;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$56 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.d, this.ar, this.ab, this.ai, this.ac, this.aa, this.ad, this.a6, this.ae, this.a3, this.P, this.X, x$52, x$53, x$54, a$2, x$56);
  } else if ((this.X.a.length < 31)) {
    var x$69 = $m_sci_VectorStatics$().H(this.X, $m_sci_VectorStatics$().H(this.W, $m_sci_VectorStatics$().H(this.V, $m_sci_VectorStatics$().H(this.U, this.f))));
    var x$70 = $m_sci_VectorStatics$().cJ;
    var x$71 = $m_sci_VectorStatics$().bn;
    var x$72 = $m_sci_VectorStatics$().aj;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$74 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.d, this.ar, this.ab, this.ai, this.ac, this.aa, this.ad, this.a6, this.ae, this.a3, this.P, x$69, x$70, x$71, x$72, a$3, x$74);
  } else if ((this.P.a.length < 62)) {
    var x$86 = $m_sci_VectorStatics$().H(this.P, $m_sci_VectorStatics$().H(this.X, $m_sci_VectorStatics$().H(this.W, $m_sci_VectorStatics$().H(this.V, $m_sci_VectorStatics$().H(this.U, this.f)))));
    var x$87 = $m_sci_VectorStatics$().gK;
    var x$88 = $m_sci_VectorStatics$().cJ;
    var x$89 = $m_sci_VectorStatics$().bn;
    var x$90 = $m_sci_VectorStatics$().aj;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var x$92 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(this.d, this.ar, this.ab, this.ai, this.ac, this.aa, this.ad, this.a6, this.ae, this.a3, x$86, x$87, x$88, x$89, x$90, a$4, x$92);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.f6 = (function(elem) {
  if ((this.ar < 32)) {
    var x$1 = $m_sci_VectorStatics$().fO(elem, this.d);
    var x$2 = ((1 + this.ar) | 0);
    var x$3 = ((1 + this.ai) | 0);
    var x$4 = ((1 + this.aa) | 0);
    var x$5 = ((1 + this.a6) | 0);
    var x$6 = ((1 + this.a3) | 0);
    var x$7 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(x$1, x$2, this.ab, x$3, this.ac, x$4, this.ad, x$5, this.ae, x$6, this.P, this.X, this.W, this.V, this.U, this.f, x$7);
  } else if ((this.ai < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$20 = $m_sci_VectorStatics$().D(this.d, this.ab);
    var x$21 = ((1 + this.ai) | 0);
    var x$22 = ((1 + this.aa) | 0);
    var x$23 = ((1 + this.a6) | 0);
    var x$24 = ((1 + this.a3) | 0);
    var x$25 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a, 1, x$20, x$21, this.ac, x$22, this.ad, x$23, this.ae, x$24, this.P, this.X, this.W, this.V, this.U, this.f, x$25);
  } else if ((this.aa < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$37 = $m_sci_VectorStatics$().aj;
    var x$39 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.ab), this.ac);
    var x$40 = ((1 + this.aa) | 0);
    var x$41 = ((1 + this.a6) | 0);
    var x$42 = ((1 + this.a3) | 0);
    var x$43 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$1, 1, x$37, 1, x$39, x$40, this.ad, x$41, this.ae, x$42, this.P, this.X, this.W, this.V, this.U, this.f, x$43);
  } else if ((this.a6 < 1048576)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$54 = $m_sci_VectorStatics$().aj;
    var x$56 = $m_sci_VectorStatics$().bn;
    var x$58 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.ab), this.ac), this.ad);
    var x$59 = ((1 + this.a6) | 0);
    var x$60 = ((1 + this.a3) | 0);
    var x$61 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$2, 1, x$54, 1, x$56, 1, x$58, x$59, this.ae, x$60, this.P, this.X, this.W, this.V, this.U, this.f, x$61);
  } else if ((this.a3 < 33554432)) {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$71 = $m_sci_VectorStatics$().aj;
    var x$73 = $m_sci_VectorStatics$().bn;
    var x$75 = $m_sci_VectorStatics$().cJ;
    var x$77 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.ab), this.ac), this.ad), this.ae);
    var x$78 = ((1 + this.a3) | 0);
    var x$79 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$3, 1, x$71, 1, x$73, 1, x$75, 1, x$77, x$78, this.P, this.X, this.W, this.V, this.U, this.f, x$79);
  } else if ((this.P.a.length < 62)) {
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var x$88 = $m_sci_VectorStatics$().aj;
    var x$90 = $m_sci_VectorStatics$().bn;
    var x$92 = $m_sci_VectorStatics$().cJ;
    var x$94 = $m_sci_VectorStatics$().gK;
    var x$96 = $m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D($m_sci_VectorStatics$().D(this.d, this.ab), this.ac), this.ad), this.ae), this.P);
    var x$97 = ((1 + this.h) | 0);
    return new $c_sci_Vector6(a$4, 1, x$88, 1, x$90, 1, x$92, 1, x$94, 1, x$96, this.X, this.W, this.V, this.U, this.f, x$97);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.c8 = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cB(this.d, f);
  var x$2 = $m_sci_VectorStatics$().ay(2, this.ab, f);
  var x$3 = $m_sci_VectorStatics$().ay(3, this.ac, f);
  var x$4 = $m_sci_VectorStatics$().ay(4, this.ad, f);
  var x$5 = $m_sci_VectorStatics$().ay(5, this.ae, f);
  var x$6 = $m_sci_VectorStatics$().ay(6, this.P, f);
  var x$7 = $m_sci_VectorStatics$().ay(5, this.X, f);
  var x$8 = $m_sci_VectorStatics$().ay(4, this.W, f);
  var x$9 = $m_sci_VectorStatics$().ay(3, this.V, f);
  var x$10 = $m_sci_VectorStatics$().ay(2, this.U, f);
  var x$11 = $m_sci_VectorStatics$().cB(this.f, f);
  return new $c_sci_Vector6(x$1, this.ar, x$2, this.ai, x$3, this.aa, x$4, this.a6, x$5, this.a3, x$6, x$7, x$8, x$9, x$10, x$11, this.h);
});
$p.cY = (function() {
  return 11;
});
$p.de = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
      break;
    }
    case 1: {
      return this.ab;
      break;
    }
    case 2: {
      return this.ac;
      break;
    }
    case 3: {
      return this.ad;
      break;
    }
    case 4: {
      return this.ae;
      break;
    }
    case 5: {
      return this.P;
      break;
    }
    case 6: {
      return this.X;
      break;
    }
    case 7: {
      return this.W;
      break;
    }
    case 8: {
      return this.V;
      break;
    }
    case 9: {
      return this.U;
      break;
    }
    case 10: {
      return this.f;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.c4 = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().fK(this.f, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.h - this.f.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector6(this.d, this.ar, this.ab, this.ai, this.ac, this.aa, this.ad, this.a6, this.ae, this.a3, this.P, this.X, this.W, this.V, this.U, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.c4.call(this, suffix, k);
  }
});
$p.cU = (function(f) {
  return this.c8(f);
});
$p.R = (function(elem) {
  return this.bq(elem);
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h))) {
    var io = ((index - this.a3) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.P.a.length) ? this.P.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.X.a.length) ? this.X.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.W.a.length) ? this.W.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.V.a.length) ? this.V.a[i3].a[i2].a[i1] : ((i2 < this.U.a.length) ? this.U.a[i2].a[i1] : this.f.a[i1])))));
    } else if ((index >= this.a6)) {
      var io$2 = ((index - this.a6) | 0);
      return this.ae.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aa)) {
      var io$3 = ((index - this.aa) | 0);
      return this.ad.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.ai)) {
      var io$4 = ((index - this.ai) | 0);
      return this.ac.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.ar)) {
      var io$5 = ((index - this.ar) | 0);
      return this.ab.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.b5(index);
  }
});
function $isArrayOf_sci_Vector6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cF)));
}
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  cF: 1,
  am: 1,
  an: 1,
  aj: 1,
  z: 1,
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
  n: 1,
  d: 1,
  x: 1,
  q: 1,
  y: 1,
  A: 1,
  t: 1,
  r: 1,
  F: 1,
  B: 1,
  u: 1,
  m: 1,
  L: 1,
  a: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.b3 = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.b3 = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.bt = (function() {
  return "IndexedSeq";
});
$p.g = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bd = (function(len) {
  var x = this.b3.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bh = (function(size) {
});
$p.b4 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.m = (function() {
  return this.b3.m();
});
$p.s = (function() {
  return this.b3.m();
});
$p.qY = (function(x) {
  var this$1 = this.b3;
  var str = ("" + $cToS(x));
  this$1.q = (this$1.q + str);
  return this;
});
$p.w = (function() {
  return this.b3.q;
});
$p.iA = (function(ct) {
  return ((ct.b6() === $d_C.l()) ? this.tW() : $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, ct));
});
$p.tW = (function() {
  var len = this.b3.m();
  var arr = new $ac_C(len);
  this.b3.pA(0, len, arr, 0);
  return arr;
});
$p.oL = (function(xs) {
  if (false) {
    var this$3 = this.b3;
    var str = xs.u8;
    this$3.q = (("" + this$3.q) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.b3.oK(xs.cq);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.b3;
    var s = xs.b3;
    this$4.q = (("" + this$4.q) + s);
  } else {
    var ks = xs.s();
    if ((ks !== 0)) {
      var b = this.b3;
      if ((ks > 0)) {
        b.m();
      }
      var it = xs.g();
      while (it.l()) {
        var c = $uC(it.e());
        var str$1 = ("" + $cToS(c));
        b.q = (b.q + str$1);
      }
    }
  }
  return this;
});
$p.c = (function() {
  return (this.b3.m() === 0);
});
$p.bc = (function() {
  return $m_scm_IndexedSeq$();
});
$p.aW = (function() {
  return this.b3.q;
});
$p.au = (function(elem) {
  return this.qY($uC(elem));
});
$p.fP = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).oL(coll);
});
$p.fQ = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).oL(coll);
});
$p.b = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.b3.p3(i));
});
$p.u = (function(i) {
  return $bC(this.b3.p3(i));
});
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cU)));
}
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cU: 1,
  O: 1,
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
  n: 1,
  d: 1,
  P: 1,
  N: 1,
  Q: 1,
  M: 1,
  C: 1,
  a7: 1,
  I: 1,
  H: 1,
  G: 1,
  V: 1,
  t: 1,
  r: 1,
  W: 1,
  aU: 1,
  a: 1
}));
function $isArrayOf_scm_LinkedHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ic)));
}
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().iz($thiz);
  $thiz.cy = buf.cy;
  $thiz.dI = buf.dI;
  $thiz.hV = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.hW = ((1 + $thiz.hW) | 0);
  if ($thiz.hV) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.hW = 0;
  this.cy = null;
  this.dI = null;
  this.hV = false;
  this.cz = 0;
  this.hW = 0;
  this.cy = $m_sci_Nil$();
  this.dI = null;
  this.hV = false;
  this.cz = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.bh = (function(size) {
});
$p.cM = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.R = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.g = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.cy.g(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.hW)));
});
$p.dQ = (function() {
  return $m_scm_ListBuffer$();
});
$p.u = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.cy, i);
});
$p.m = (function() {
  return this.cz;
});
$p.s = (function() {
  return this.cz;
});
$p.c = (function() {
  return (this.cz === 0);
});
$p.qi = (function() {
  this.hV = (!this.c());
  return this.cy;
});
$p.r7 = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.cz === 0)) {
    this.cy = last1;
  } else {
    this.dI.aS = last1;
  }
  this.dI = last1;
  this.cz = ((1 + this.cz) | 0);
  return this;
});
$p.iz = (function(xs) {
  var it = xs.g();
  if (it.l()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.e(), $m_sci_Nil$());
    this.cy = last0;
    while (it.l()) {
      var last1 = new $c_sci_$colon$colon(it.e(), $m_sci_Nil$());
      last0.aS = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.cz = len;
    this.dI = last0;
  }
  return this;
});
$p.qW = (function(xs) {
  var it = xs.g();
  if (it.l()) {
    var fresh = new $c_scm_ListBuffer().iz(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.cz === 0)) {
      this.cy = fresh.cy;
    } else {
      this.dI.aS = fresh.cy;
    }
    this.dI = fresh.dI;
    this.cz = ((this.cz + fresh.cz) | 0);
  }
  return this;
});
$p.bt = (function() {
  return "ListBuffer";
});
$p.b4 = (function(elems) {
  return this.qW(elems);
});
$p.au = (function(elem) {
  return this.r7(elem);
});
$p.aW = (function() {
  return this.qi();
});
$p.b = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.cy, i);
});
$p.bc = (function() {
  return $m_scm_ListBuffer$();
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cT)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  cT: 1,
  b7: 1,
  O: 1,
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
  n: 1,
  d: 1,
  P: 1,
  N: 1,
  Q: 1,
  M: 1,
  C: 1,
  b8: 1,
  H: 1,
  G: 1,
  aJ: 1,
  u: 1,
  m: 1,
  a7: 1,
  I: 1,
  L: 1,
  a: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.e8 = 0;
  $thiz.e7 = initialElements;
  $thiz.aZ = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.e8 = 0;
  this.e7 = null;
  this.aZ = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.cM = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.R = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.g = (function() {
  return this.u5().g();
});
$p.bd = (function(len) {
  var x = this.aZ;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.aZ;
});
$p.ko = (function(n) {
  this.e7 = $m_scm_ArrayBuffer$().qb(this.e7, this.aZ, n);
});
$p.bh = (function(size) {
  if (((size > this.aZ) && (size >= 1))) {
    this.ko(size);
  }
});
$p.u = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().h7(n, (((-1) + this.aZ) | 0));
  }
  if ((hi > this.aZ)) {
    throw $m_scg_CommonErrors$().h7((((-1) + hi) | 0), (((-1) + this.aZ) | 0));
  }
  return this.e7.a[n];
});
$p.u3 = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $m_scg_CommonErrors$().h7(index, (((-1) + this.aZ) | 0));
  }
  if ((hi > this.aZ)) {
    throw $m_scg_CommonErrors$().h7((((-1) + hi) | 0), (((-1) + this.aZ) | 0));
  }
  this.e8 = ((1 + this.e8) | 0);
  this.e7.a[index] = elem;
});
$p.m = (function() {
  return this.aZ;
});
$p.u5 = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.e8)));
});
$p.dQ = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.r4 = (function(elem) {
  this.e8 = ((1 + this.e8) | 0);
  var newSize = ((1 + this.aZ) | 0);
  this.ko(newSize);
  this.aZ = newSize;
  this.u3((((-1) + this.aZ) | 0), elem);
  return this;
});
$p.oG = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.aZ;
    if ((elemsLength > 0)) {
      this.e8 = ((1 + this.e8) | 0);
      this.ko(((this.aZ + elemsLength) | 0));
      $m_s_Array$().c6(elems.e7, 0, this.e7, this.aZ, elemsLength);
      this.aZ = ((this.aZ + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.bt = (function() {
  return "ArrayBuffer";
});
$p.bR = (function(xs, start, len) {
  var srcLen = this.aZ;
  var destLen = $m_jl_reflect_Array$().bS(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().c6(this.e7, 0, xs, start, copied);
  }
  return copied;
});
$p.b4 = (function(elems) {
  return this.oG(elems);
});
$p.au = (function(elem) {
  return this.r4(elem);
});
$p.bc = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.b = (function(v1) {
  return this.u((v1 | 0));
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cG)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  cG: 1,
  b7: 1,
  O: 1,
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
  n: 1,
  d: 1,
  P: 1,
  N: 1,
  Q: 1,
  M: 1,
  C: 1,
  b8: 1,
  H: 1,
  G: 1,
  aJ: 1,
  cS: 1,
  V: 1,
  t: 1,
  r: 1,
  W: 1,
  u: 1,
  m: 1,
  L: 1,
  a: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.ej = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.ej = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.bh = (function(size) {
});
$p.bt = (function() {
  return "IndexedSeq";
});
$p.g = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bd = (function(len) {
  var x = (this.ej.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cM = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.R = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__appended__O__O(this, elem);
});
$p.dQ = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.u = (function(index) {
  return this.ej[index];
});
$p.m = (function() {
  return (this.ej.length | 0);
});
$p.s = (function() {
  return (this.ej.length | 0);
});
$p.c5 = (function() {
  return "WrappedArray";
});
$p.aW = (function() {
  return this;
});
$p.au = (function(elem) {
  this.ej.push(elem);
  return this;
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  return this.ej[index];
});
$p.bc = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  j6: 1,
  b7: 1,
  O: 1,
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
  n: 1,
  d: 1,
  P: 1,
  N: 1,
  Q: 1,
  M: 1,
  C: 1,
  b8: 1,
  H: 1,
  G: 1,
  aJ: 1,
  u: 1,
  m: 1,
  V: 1,
  t: 1,
  r: 1,
  W: 1,
  cS: 1,
  I: 1,
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
